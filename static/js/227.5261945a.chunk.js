"use strict";(self.webpackChunkhave_fun=self.webpackChunkhave_fun||[]).push([[227],{227:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(885),a=n(8240),r="Settings_profile-settings__d3gAU",i="Settings_avatar-section__dgkis",c=n(4165),l=n(5861),o=n(9257),u=n(2791),d=n(6871),f=n(7257),p=n(2995),m=n(111),h=n(686),g=n(8619),x={"settings-form":"SettingsForm_settings-form__lwFmh",checkboxs:"SettingsForm_checkboxs__ZLzff","toggle-container":"SettingsForm_toggle-container__VAYdh",toggle:"SettingsForm_toggle__e+d+k",label:"SettingsForm_label__IqEpG",ball:"SettingsForm_ball__rL7Wb",slideOn:"SettingsForm_slideOn__xmUW4",slideOff:"SettingsForm_slideOff__uscx7"},b=n(184),v=function(){var e=(0,p.E)().user,t=(0,m.G)("users").document,n=(0,u.useState)(e&&e.displayName),a=(0,s.Z)(n,2),r=a[0],i=a[1],v=(0,u.useState)(e&&e.email),_=(0,s.Z)(v,2),j=_[0],S=_[1],y=(0,h.L)(),k=y.updateDocument,N=y.isPending,E=(0,d.s0)(),R=(0,g.n)().dispatchNotification,Z=(0,u.useState)(!0),C=(0,s.Z)(Z,2),F=C[0],U=C[1],w=function(){var t=(0,l.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k("users",e.uid,{email:j,displayName:r,notifications:F});case 2:return t.next=4,(0,o.ck)(e,{email:j,displayName:r});case 4:if(e.email===j){t.next=7;break}return t.next=7,(0,o.s)(e,j);case 7:E("/"),R({type:f.a.SUCCESS,payload:"Profile has been saved"});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){t&&U(t.notifications)}),[t]),(0,b.jsxs)("form",{className:x["settings-form"],onSubmit:function(n){n.preventDefault(),0!==r.trim().length&&0!==j.trim().length?r.length>15||j.length>20?R({type:f.a.ERROR,payload:"Email or user name is too long!"}):e.email!==j&&t.isTesting?R({type:f.a.ERROR,payload:"You are on testing account, this option is disabled!"}):w():R({type:f.a.ERROR,payload:"Fields cannot be empty!"})},children:[(0,b.jsxs)("label",{className:x.fields,children:[(0,b.jsx)("span",{children:"USER NAME"}),(0,b.jsx)("input",{required:!0,value:r,onChange:function(e){return i(e.target.value.split(" ").join(""))},type:"text"})]}),(0,b.jsxs)("label",{className:x.fields,children:[(0,b.jsx)("span",{children:"EMAIL"}),(0,b.jsx)("input",{required:!0,value:j,onChange:function(e){return S(e.target.value.split(" ").join(""))},type:"email"})]}),(0,b.jsx)("div",{className:x.checkboxs,children:(0,b.jsxs)("div",{className:x["toggle-container"],children:[(0,b.jsx)("input",{className:x.toggle,id:"notifications",type:"checkbox",checked:F,onChange:function(e){U(e.target.checked)}}),(0,b.jsx)("label",{htmlFor:"notifications",className:x.label,children:(0,b.jsx)("div",{className:x.ball})}),(0,b.jsx)("span",{children:"NOTIFICATIONS"})]})}),!N&&(0,b.jsx)("button",{className:"btn",children:"Save"}),N&&(0,b.jsx)("button",{className:"btn",disabled:!0,children:"Saving..."})]})},_=n(4453),j=n(9808),S="AvatarUpdate_buttons__CK1XC",y="AvatarUpdate_delete-btn__FHAo+",k=function(e){var t=e.setError,n=e.setSuccess,a=(0,p.E)().user,r=(0,j.T)().document,i=(0,_.iH)((0,_.cF)(),"images/".concat(a.uid,".jpg")),o=(0,h.L)().updateDocument,d=(0,u.useRef)(null),f=(0,u.useState)(!1),m=(0,s.Z)(f,2),g=m[0],x=m[1],v=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}if(r.photoURL){e.next=4;break}return t("Cannot remove stock avatar image!"),e.abrupt("return");case 4:return e.next=6,(0,_.oq)(i);case 6:return e.next=8,o("users",a.uid,{photoURL:"start"});case 8:n("Avatar successfully removed!");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(s){var r,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),t(null),r=s.target.files&&s.target.files[0]){e.next=5;break}return e.abrupt("return");case 5:if(r.type.includes("image")){e.next=9;break}return t("Please select image file"),x(!1),e.abrupt("return");case 9:return s.target.value=null,e.next=12,(0,_.KV)(i,r);case 12:return e.next=14,(0,_.Jt)(i);case 14:return l=e.sent,e.next=17,o("users",a.uid,{photoURL:l});case 17:x(!1),n("Avatar successfully uploaded!");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:S,children:[(0,b.jsx)("input",{style:{display:"none"},ref:d,type:"file",onChange:k}),!g&&(0,b.jsx)("button",{className:"btn",onClick:function(){d.current.click()},children:"Upload a new avatar"}),g&&(0,b.jsx)("button",{className:"btn",disabled:!0,children:"Uploading..."}),(0,b.jsx)("button",{className:y,onClick:v,children:"Delete avatar"})]})},N=function(){var e=(0,u.useState)(null),t=(0,s.Z)(e,2),n=t[0],c=t[1],l=(0,u.useState)(null),o=(0,s.Z)(l,2),d=o[0],p=o[1],m=(0,j.T)().document,h=(0,g.n)().dispatchNotification;return(0,u.useEffect)((function(){n&&h({type:f.a.ERROR,payload:n})}),[n,h]),(0,u.useEffect)((function(){d&&h({type:f.a.SUCCESS,payload:d})}),[d,h]),(0,b.jsxs)("div",{className:r,children:[(0,b.jsx)("h2",{children:"Edit profile"}),(0,b.jsxs)("div",{className:i,children:[m.photoURL?(0,b.jsx)(a.Z,{src:m.photoURL,borderColor:"purple"}):(0,b.jsx)(a.Z,{src:"loading"}),(0,b.jsx)(k,{setError:c,setSuccess:p})]}),(0,b.jsx)(v,{})]})}}}]);
//# sourceMappingURL=227.5261945a.chunk.js.map