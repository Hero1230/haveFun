"use strict";(self.webpackChunkhave_fun=self.webpackChunkhave_fun||[]).push([[745],{9976:function(e,n,t){t.d(n,{G:function(){return s}});var a=t(2791),r=t(2979),c=t(9808),i=t(5664),u=t(2982),o=t(8041),s=function(){var e=(0,c.T)().setIsAllowedToPlay,n=(0,c.T)().document,t=(0,i.i)().subtractMoney,s=function(){var e=(0,a.useCallback)((function(e){var n=(0,u.Z)(new Set(e.map((function(e){return e.name})))).map((function(n){var t;return e.forEach((function(e){e.name===n&&(t=e.multiplier)})),{name:n,count:0,multiplier:t}}));return e.forEach((function(e){for(var t=0;t<n.length;t++)e.name===n[t].name&&n[t].count++})),n}),[]);return{calculateMultiplier:(0,a.useCallback)((function(e){var n=0;return e.forEach((function(e){if(e.multiplier)switch(e.count.toString()){case"0":return;case"1":return void(n+=e.multiplier[0]);case"2":return void(n+=e.multiplier[1]);case"3":return void(n+=e.multiplier[2]);default:return void(n+=e.multiplier[3])}})),n}),[]),getArryWithAmountOfItems:e}}(),l=s.calculateMultiplier,f=s.getArryWithAmountOfItems,m=(0,o.c)(),p=m.dispatchGame,d=m.price;return{startGame:function(a){n.balance>=a&&(t(a),e(!0),p({type:r.a.SET_PRICE,payload:{price:a}}))},endGame:(0,a.useCallback)((function(){e(!1)}),[e]),gameResult:(0,a.useCallback)((function(e){var n=f(e),t=l(n);p({type:r.a.UPDATE_GAME,payload:{price:d,multiplier:t,win:d*t,gameItems:n}})}),[f,l,p,d])}}},5664:function(e,n,t){t.d(n,{i:function(){return u}});var a=t(4165),r=t(5861),c=t(686),i=t(9808),u=function(){var e=(0,i.T)().document,n=(0,c.L)().updateDocument,t=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("users",e.id,{balance:1e3*(e.balance+r)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("users",e.id,{balance:1e3*(e.balance-r)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{addMoney:t,subtractMoney:u}}},6745:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a="Home_games-container__u3eOx";t(2791);var r=t.p+"static/media/scratchIcon.5a35d9429bfc86c089a33050fa71e4be.svg",c=t(4904);var i=t.p+"static/media/faq.b3f3f7039c241d01c7fce3a512991b03.svg",u=t(184),o=function(){var e=[{title:"Scratch card",photoURL:r,ref:"scratch-card-list",isReady:!0,price:null},{title:"Coming soon",photoURL:i,ref:"slot-machine",isReady:!1,price:null},{title:"Coming soon",photoURL:i,ref:"lucky-wheel",isReady:!1,price:null}];return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(c.Z,{games:e})})}},4904:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(9976),r=t(3504),c=t(7257),i=t(9808),u=t(8619),o="GameCard_game-card__8WVqq",s="GameCard_link__p5EN-",l=t(184),f=function(e){var n=e.game,t=e.action,a=(0,i.T)().document,f=(0,u.n)().dispatchNotification;return(0,l.jsxs)("div",{className:o,onClick:n.price&&n.price>a.balance?function(){f({type:c.a.ERROR,payload:"You don't have enough money to play this game!"})}:void 0,children:[n.price<=a.balance||!n.price?(0,l.jsx)(r.rU,{to:n.isReady?n.ref:"",className:s,onClick:t}):"",(0,l.jsx)("img",{src:n.photoURL,alt:"game icon"}),(0,l.jsx)("p",{children:n.title})]})},m="GamesCategoryList_games-list__YtwMj",p=function(e){var n=e.games,t=(0,a.G)().startGame;return(0,l.jsx)("div",{className:m,children:n.map((function(e){return(0,l.jsx)(f,{game:e,action:e.price&&function(){return t(e.price)}},Math.random())}))})}}}]);
//# sourceMappingURL=745.b6ca2c07.chunk.js.map