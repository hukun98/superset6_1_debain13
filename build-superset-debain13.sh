
#!/usr/bin/env bash
set -Eeuo pipefail

# ==================================================
# Apache Superset 6.1.0 - Debian 13 Build
# Compatible with macOS and Linux
# ==================================================

SUPERSET_VERSION="6.1.0"

PYTHON_IMAGE="3.11.14-slim-trixie"
IMAGE_NAME="apache-superset"
IMAGE_TAG="${SUPERSET_VERSION}-debian13"
SOURCE_DIR="superset-${SUPERSET_VERSION}-debian13"

# --------------------------------------------------
# 1. Check prerequisites
# --------------------------------------------------
echo "Checking prerequisites..."

for cmd in git docker python3; do
    command -v "$cmd" >/dev/null 2>&1 || {
        echo "ERROR: $cmd is required."
        exit 1
    }
done

docker buildx version >/dev/null

# --------------------------------------------------
# 2. Download source
# --------------------------------------------------
if [ -d "$SOURCE_DIR/.git" ]; then
    echo "Using existing source directory..."
    git -C "$SOURCE_DIR" fetch --tags
else
    echo "Cloning Superset ${SUPERSET_VERSION}..."

    git clone \
        --branch "$SUPERSET_VERSION" \
        --depth 1 \
        https://github.com/apache/superset.git \
        "$SOURCE_DIR"
fi

cd "$SOURCE_DIR"

git checkout "$SUPERSET_VERSION"

# --------------------------------------------------
# 3. Configure Debian 13
# --------------------------------------------------
echo
echo "Configuring Debian 13 base images..."

python3 <<'PY'
from pathlib import Path
import re

dockerfile = Path("Dockerfile")

if not dockerfile.exists():
    raise SystemExit("ERROR: Dockerfile not found")

content = dockerfile.read_text()

# ----------------------------------------------
# Python base image
# ----------------------------------------------
content, python_count = re.subn(
    r'^ARG PY_VER=.*$',
    'ARG PY_VER=3.11.14-slim-trixie',
    content,
    count=1,
    flags=re.MULTILINE
)

if python_count != 1:
    raise SystemExit(
        "ERROR: Could not locate Python PY_VER argument"
    )

# ----------------------------------------------
# Node base image
# Accept both Bookworm and Trixie
# ----------------------------------------------
node_pattern = r'node:20-(?:bookworm|trixie)-slim'

content, node_count = re.subn(
    node_pattern,
    'node:20-trixie-slim',
    content
)

if node_count == 0:
    raise SystemExit(
        "ERROR: No supported Node 20 base image found. "
        "Inspect Dockerfile manually."
    )

# ----------------------------------------------
# Verify both images
# ----------------------------------------------
if 'ARG PY_VER=3.11.14-slim-trixie' not in content:
    raise SystemExit("ERROR: Python image verification failed")

if 'node:20-trixie-slim' not in content:
    raise SystemExit("ERROR: Node image verification failed")

dockerfile.write_text(content)

print("SUCCESS: Python base image = Debian 13 Trixie")
print("SUCCESS: Node base image = Debian 13 Trixie")
print(f"Node image references updated/verified: {node_count}")
PY

# --------------------------------------------------
# 4. Display Dockerfile configuration
# --------------------------------------------------
echo
echo "Dockerfile configuration:"

grep -nE 'PY_VER|node:20-' Dockerfile

# --------------------------------------------------
# 5. Build image
# --------------------------------------------------
echo
echo "Building Apache Superset ${SUPERSET_VERSION}..."
echo "Target: lean"
echo

docker buildx build \
    --pull \
    --load \
    --target lean \
    --build-arg PY_VER="${PYTHON_IMAGE}" \
    --build-arg BUILD_TRANSLATIONS=false \
    --tag "${IMAGE_NAME}:${IMAGE_TAG}" \
    .

# --------------------------------------------------
# 6. Verify Debian version
# --------------------------------------------------
echo
echo "Checking final image OS..."

OS_INFO=$(docker run --rm \
    --entrypoint cat \
    "${IMAGE_NAME}:${IMAGE_TAG}" \
    /etc/os-release)

echo "$OS_INFO"

if ! echo "$OS_INFO" | grep -q 'VERSION_CODENAME=trixie'; then
    echo "ERROR: Final image is not Debian 13 Trixie!"
    exit 1
fi

# --------------------------------------------------
# 7. Verify Python
# --------------------------------------------------
echo
echo "Checking Python version..."

docker run --rm \
    --entrypoint python \
    "${IMAGE_NAME}:${IMAGE_TAG}" \
    --version

# --------------------------------------------------
# 8. Verify Superset
# --------------------------------------------------
echo
echo "Checking Superset version..."

docker run --rm \
    --entrypoint superset \
    "${IMAGE_NAME}:${IMAGE_TAG}" \
    version

# --------------------------------------------------
# 9. Complete
# --------------------------------------------------
echo
echo "=========================================="
echo "BUILD SUCCESSFUL"
echo "=========================================="
echo "Image: ${IMAGE_NAME}:${IMAGE_TAG}"
echo "OS: Debian 13 (Trixie)"
echo
echo "Run using:"
echo
echo "docker run -d \\"
echo "  --name superset-test \\"
echo "  -p 8088:8088 \\"
echo "  ${IMAGE_NAME}:${IMAGE_TAG}"
echo "=========================================="

