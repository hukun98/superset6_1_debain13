"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6830],{47644(e,t,r){r.d(t,{k:()=>c});var n=r(2445),s=r(24002),i=r(27124),a=r(29138),o=r(57832),l=r(56030);function d(e,t,r,n,s,i,a){try{var o=e[i](a),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,s)}function c({show:e,onHide:t,title:r,onSave:u,children:m,initialValues:p={},formSubmitHandler:h,bodyStyle:f={},requiredFields:w=[],name:b}){let[g]=o.l.useForm(),[v,y]=(0,s.useState)(!1),Y=(0,s.useCallback)(()=>{g.resetFields(),y(!1)},[g]),[F,P]=(0,s.useState)(!0),x=(0,s.useCallback)(()=>{Y(),t()},[t,Y]),S=(0,s.useCallback)(()=>{Y(),u()},[u,Y]),$=(0,s.useCallback)(e=>{var t;return(t=function*(){try{y(!0),yield h(e),S()}catch(e){console.error(e)}finally{y(!1)}},function(){var e=this,r=arguments;return new Promise(function(n,s){var i=t.apply(e,r);function a(e){d(i,n,s,a,o,"next",e)}function o(e){d(i,n,s,a,o,"throw",e)}a(void 0)})})()},[h,S]),k=()=>{let e=g.getFieldsError().some(({errors:e})=>e.length),t=g.getFieldsValue(),r=w.some(e=>!t[e]);P(e||r)};return(0,n.Y)(l.aF,{name:b,show:e,title:r,onHide:x,bodyStyle:f,footer:(0,n.FD)(n.FK,{children:[(0,n.Y)(a.$n,{buttonStyle:"secondary","data-test":"modal-cancel-button",onClick:x,children:(0,i.t)("Cancel")}),(0,n.Y)(a.$n,{buttonStyle:"primary",htmlType:"submit",onClick:()=>g.submit(),"data-test":"form-modal-save-button",disabled:v||F,children:v?(0,i.t)("Saving..."):(0,i.t)("Save")})]}),children:(0,n.Y)(o.l,{form:g,layout:"vertical",onFinish:$,initialValues:p,onValuesChange:k,onFieldsChange:k,children:"function"==typeof m?m(g):m})})}},16330(e,t,r){r.r(t),r.d(t,{UserInfo:()=>C,default:()=>z});var n,s=r(2445),i=r(24002),a=r(27124),o=r(73815),l=r(85614),d=r(17437),c=r(79294),u=r(7070),m=r(22022),p=r(93225),h=r(47644);function f(e,t,r,n,s,i,a){try{var o=e[i](a),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,s)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b({show:e,onHide:t,onSave:r,isEditMode:n,user:i}){let{addDangerToast:l,addSuccessToast:d}=(0,u.Yf)(),c=n?{first_name:null==i?void 0:i.firstName,last_name:null==i?void 0:i.lastName}:{};return(0,s.Y)(h.k,{show:e,onHide:t,title:n?(0,a.t)("Edit user"):(0,a.t)("Reset password"),onSave:r,formSubmitHandler:e=>{var t;return(t=function*(){try{let{confirm_password:t}=e,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.getOwnPropertyNames(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r]);return s}(e,["confirm_password"]);yield o.A.put({endpoint:"/api/v1/me/",jsonPayload:w({},s)}),d(n?(0,a.t)("The user was updated successfully"):(0,a.t)("The password reset was successful")),r()}catch(e){l((0,a.t)("Something went wrong while saving the user info"))}},function(){var e=this,r=arguments;return new Promise(function(n,s){var i=t.apply(e,r);function a(e){f(i,n,s,a,o,"next",e)}function o(e){f(i,n,s,a,o,"throw",e)}a(void 0)})})()},requiredFields:n?["first_name","last_name"]:["password","confirm_password"],initialValues:c,children:n?(0,s.Y)(()=>(0,s.FD)(s.FK,{children:[(0,s.Y)(p.e,{name:"first_name",label:(0,a.t)("First name"),rules:[{required:!0,message:(0,a.t)("First name is required")}],children:(0,s.Y)(m.Input,{name:"first_name",placeholder:(0,a.t)("Enter the user's first name")})}),(0,s.Y)(p.e,{name:"last_name",label:(0,a.t)("Last name"),rules:[{required:!0,message:(0,a.t)("Last name is required")}],children:(0,s.Y)(m.Input,{name:"last_name",placeholder:(0,a.t)("Enter the user's last name")})})]}),{}):(0,s.Y)(()=>(0,s.FD)(s.FK,{children:[(0,s.Y)(p.e,{name:"password",label:(0,a.t)("Password"),rules:[{required:!0,message:(0,a.t)("Password is required")}],children:(0,s.Y)(m.Input.Password,{name:"password",placeholder:(0,a.t)("Enter the user's password")})}),(0,s.Y)(p.e,{name:"confirm_password",label:(0,a.t)("Confirm Password"),dependencies:["password"],rules:[{required:!0,message:(0,a.t)("Please confirm your password")},({getFieldValue:e})=>({validator:(t,r)=>r&&e("password")!==r?Promise.reject(Error((0,a.t)("Passwords do not match!"))):Promise.resolve()})],children:(0,s.Y)(m.Input.Password,{name:"confirm_password",placeholder:(0,a.t)("Confirm the user's password")})})]}),{})})}let g=e=>(0,s.Y)(b,w({},e,{isEditMode:!1})),v=e=>(0,s.Y)(b,w({},e,{isEditMode:!0}));var y=r(60685),Y=r(10938);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let P=l.styled.div`
  ${({theme:e})=>(0,d.AH)`
    font-weight: ${e.fontWeightStrong};
    text-align: left;
    font-size: 18px;
    padding: ${3*e.sizeUnit}px;
    padding-left: ${7*e.sizeUnit}px;
    display: inline-block;
    line-height: ${9*e.sizeUnit}px;
    width: 100%;
    background-color: ${e.colorBgContainer};
    margin-bottom: ${6*e.sizeUnit}px;
  `}
`,x=l.styled.div`
  ${({theme:e})=>(0,d.AH)`
    margin: 0px ${3*e.sizeUnit}px ${6*e.sizeUnit}px
      ${3*e.sizeUnit}px;
    background-color: ${e.colorBgContainer};
  `}
`,S=l.styled.div`
  ${({theme:e})=>(0,d.AH)`
    .ant-row {
      margin: 0px ${3*e.sizeUnit}px ${6*e.sizeUnit}px
        ${3*e.sizeUnit}px;
    }
    && .menu > .ant-menu {
      padding: 0px;
    }
    && .nav-right {
      left: 0;
      padding-left: ${4*e.sizeUnit}px;
      position: relative;
      height: ${15*e.sizeUnit}px;
    }
  `}
`,$=l.styled.span`
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`;var k=((n=k||{}).ResetPassword="resetPassword",n.Edit="edit",n);function C({user:e}){let t=(0,l.useTheme)(),[r,n]=(0,i.useState)({resetPassword:!1,edit:!1}),p=e=>n(t=>F({},t,{[e]:!0})),h=e=>n(t=>F({},t,{[e]:!1})),{addDangerToast:f}=(0,u.Yf)(),[w,b]=(0,i.useState)(e),k=(0,i.useCallback)(()=>{o.A.get({endpoint:"/api/v1/me/"}).then(({json:e})=>{b(F({},e.result,{firstName:e.result.first_name,lastName:e.result.last_name}))}).catch(e=>{f(`${(0,a.t)("Failed to fetch user info")}:`,e)})},[w]);(0,i.useEffect)(()=>{k()},[]);let z=[{name:(0,s.FD)(s.FK,{children:[(0,s.Y)(y.F.LockOutlined,{iconColor:t.colorPrimary,iconSize:"m",css:(0,d.AH)`
              margin: auto ${2*t.sizeUnit}px auto 0;
              vertical-align: text-top;
            `}),(0,a.t)("Reset my password")]}),buttonStyle:"secondary",onClick:()=>{p("resetPassword")},"data-test":"reset-password-button"},{name:(0,s.FD)(s.FK,{children:[(0,s.Y)(y.F.FormOutlined,{iconSize:"m",css:(0,d.AH)`
              margin: auto ${2*t.sizeUnit}px auto 0;
              vertical-align: text-top;
            `}),(0,a.t)("Edit user")]}),buttonStyle:"primary",onClick:()=>{p("edit")},"data-test":"edit-user-button"}];return(0,s.FD)(S,{children:[(0,s.Y)(P,{children:(0,a.t)("Your user information")}),(0,s.Y)(x,{children:(0,s.FD)(Y.S,{defaultActiveKey:["userInfo","personalInfo"],ghost:!0,children:[(0,s.Y)(Y.S.Panel,{header:(0,s.Y)($,{children:(0,a.t)("User info")}),children:(0,s.FD)(m.Descriptions,{bordered:!0,size:"small",column:1,labelStyle:{width:"120px"},children:[(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("User Name"),children:e.username}),(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("Is Active?"),children:e.isActive?(0,a.t)("Yes"):(0,a.t)("No")}),(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("Role"),children:e.roles?Object.keys(e.roles).join(", "):(0,a.t)("None")}),(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("Login count"),children:e.loginCount})]})},"userInfo"),(0,s.Y)(Y.S.Panel,{header:(0,s.Y)($,{children:(0,a.t)("Personal info")}),children:(0,s.FD)(m.Descriptions,{bordered:!0,size:"small",column:1,labelStyle:{width:"120px"},children:[(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("First Name"),children:w.firstName}),(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("Last Name"),children:w.lastName}),(0,s.Y)(m.Descriptions.Item,{label:(0,a.t)("Email"),children:e.email})]})},"personalInfo")]})}),r.resetPassword&&(0,s.Y)(g,{onHide:()=>h("resetPassword"),show:r.resetPassword,onSave:()=>{h("resetPassword")}}),r.edit&&(0,s.Y)(v,{onHide:()=>h("edit"),show:r.edit,onSave:()=>{h("edit"),k()},user:w}),(0,s.Y)(c.A,{buttons:z})]})}let z=C}}]);