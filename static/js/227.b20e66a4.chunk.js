"use strict";(self.webpackChunkhave_fun=self.webpackChunkhave_fun||[]).push([[227],{227:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(885),s=n(8240),r="Settings_profile-settings__d3gAU",i="Settings_avatar-section__dgkis",c=n(4165),l=n(5861),o=n(9257),u=n(2791),d=n(7257),f=n(2995),p=n(111),m=n(686),h=n(8619),g={"settings-form":"SettingsForm_settings-form__lwFmh",checkboxs:"SettingsForm_checkboxs__ZLzff","toggle-container":"SettingsForm_toggle-container__VAYdh",toggle:"SettingsForm_toggle__e+d+k",label:"SettingsForm_label__IqEpG",ball:"SettingsForm_ball__rL7Wb",slideOn:"SettingsForm_slideOn__xmUW4",slideOff:"SettingsForm_slideOff__uscx7"},x=n(184),b=function(){var e=(0,f.E)().user,t=(0,p.G)("users").document,n=(0,u.useState)(e&&e.displayName),s=(0,a.Z)(n,2),r=s[0],i=s[1],b=(0,u.useState)(e&&e.email),v=(0,a.Z)(b,2),_=v[0],j=v[1],S=(0,m.L)(),y=S.updateDocument,k=S.isPending,N=(0,h.n)().dispatchNotification,E=(0,u.useState)(!0),R=(0,a.Z)(E,2),Z=R[0],C=R[1],F=function(){var t=(0,l.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y("users",e.uid,{email:_,displayName:r,notifications:Z});case 2:return t.next=4,(0,o.ck)(e,{email:_,displayName:r});case 4:if(e.email===_){t.next=7;break}return t.next=7,(0,o.s)(e,_);case 7:N({type:d.a.SUCCESS,payload:"Profile has been saved"});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){t&&C(t.notifications)}),[t]),(0,x.jsxs)("form",{className:g["settings-form"],onSubmit:function(n){n.preventDefault(),0!==r.trim().length&&0!==_.trim().length?r.length>15||_.length>20?N({type:d.a.ERROR,payload:"Email or user name is too long!"}):e.email!==_&&t.isTesting?N({type:d.a.ERROR,payload:"You are on testing account, this option is disabled!"}):F():N({type:d.a.ERROR,payload:"Fields cannot be empty!"})},children:[(0,x.jsxs)("label",{className:g.fields,children:[(0,x.jsx)("span",{children:"USER NAME"}),(0,x.jsx)("input",{required:!0,value:r,onChange:function(e){return i(e.target.value.split(" ").join(""))},type:"text"})]}),(0,x.jsxs)("label",{className:g.fields,children:[(0,x.jsx)("span",{children:"EMAIL"}),(0,x.jsx)("input",{required:!0,value:_,onChange:function(e){return j(e.target.value.split(" ").join(""))},type:"email"})]}),(0,x.jsx)("div",{className:g.checkboxs,children:(0,x.jsxs)("div",{className:g["toggle-container"],children:[(0,x.jsx)("input",{className:g.toggle,id:"notifications",type:"checkbox",checked:Z,onChange:function(e){C(e.target.checked)}}),(0,x.jsx)("label",{htmlFor:"notifications",className:g.label,children:(0,x.jsx)("div",{className:g.ball})}),(0,x.jsx)("span",{children:"NOTIFICATIONS"})]})}),!k&&(0,x.jsx)("button",{className:"btn",children:"Save"}),k&&(0,x.jsx)("button",{className:"btn",disabled:!0,children:"Saving..."})]})},v=n(4453),_=n(9808),j="AvatarUpdate_buttons__CK1XC",S="AvatarUpdate_delete-btn__FHAo+",y=function(e){var t=e.setError,n=e.setSuccess,s=(0,f.E)().user,r=(0,_.T)().document,i=(0,v.iH)((0,v.cF)(),"images/".concat(s.uid,".jpg")),o=(0,m.L)().updateDocument,d=(0,u.useRef)(null),p=(0,u.useState)(!1),h=(0,a.Z)(p,2),g=h[0],b=h[1],y=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}if(r.photoURL){e.next=4;break}return t("Cannot remove stock avatar image!"),e.abrupt("return");case 4:return e.next=6,(0,v.oq)(i);case 6:return e.next=8,o("users",s.uid,{photoURL:"start"});case 8:n("Avatar successfully removed!");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(a){var r,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),t(null),r=a.target.files&&a.target.files[0]){e.next=5;break}return e.abrupt("return");case 5:if(r.type.includes("image")){e.next=9;break}return t("Please select image file"),b(!1),e.abrupt("return");case 9:return a.target.value=null,e.next=12,(0,v.KV)(i,r);case 12:return e.next=14,(0,v.Jt)(i);case 14:return l=e.sent,e.next=17,o("users",s.uid,{photoURL:l});case 17:b(!1),n("Avatar successfully uploaded!");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:j,children:[(0,x.jsx)("input",{style:{display:"none"},ref:d,type:"file",onChange:k}),!g&&(0,x.jsx)("button",{className:"btn",onClick:function(){d.current.click()},children:"Upload a new avatar"}),g&&(0,x.jsx)("button",{className:"btn",disabled:!0,children:"Uploading..."}),(0,x.jsx)("button",{className:S,onClick:y,children:"Delete avatar"})]})},k=function(){var e=(0,u.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,u.useState)(null),o=(0,a.Z)(l,2),f=o[0],p=o[1],m=(0,_.T)().document,g=(0,h.n)().dispatchNotification;return(0,u.useEffect)((function(){n&&g({type:d.a.ERROR,payload:n})}),[n,g]),(0,u.useEffect)((function(){f&&g({type:d.a.SUCCESS,payload:f})}),[f,g]),(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("h2",{children:"Edit profile"}),(0,x.jsxs)("div",{className:i,children:[m.photoURL?(0,x.jsx)(s.Z,{src:m.photoURL,borderColor:"purple"}):(0,x.jsx)(s.Z,{src:"loading"}),(0,x.jsx)(y,{setError:c,setSuccess:p})]}),(0,x.jsx)(b,{})]})}}}]);
//# sourceMappingURL=227.b20e66a4.chunk.js.map