"use strict";(self.webpackChunkhave_fun=self.webpackChunkhave_fun||[]).push([[331],{9976:function(e,t,n){n.d(t,{G:function(){return o}});var a=n(2791),r=n(2979),c=n(9808),i=n(5664),u=n(8041),o=function(){var e=(0,c.T)().setIsAllowedToPlay,t=(0,c.T)().document,n=(0,i.i)().subtractMoney,o=function(){var e=(0,a.useCallback)((function(e){return function(e){var t={};return e.forEach((function(e){if(e.multiplier)if(t[e.name]){if(t[e.name].count===e.multiplier.length)return;t[e.name]={count:t[e.name].count+1,multiplier:e.multiplier}}else t[e.name]={count:1,multiplier:e.multiplier}})),t}(e)}),[]);return{calculateMultiplier:(0,a.useCallback)((function(e){var t=0;for(var n in e)e[n].count>0&&e[n].multiplier&&(t+=e[n].multiplier[e[n].count-1]);return t}),[]),getObjectWithAmountOfItems:e}}(),l=o.calculateMultiplier,s=o.getObjectWithAmountOfItems,p=(0,u.c)(),f=p.dispatchGame,m=p.price;return{startGame:function(a){t.balance>=a&&(n(a),e(!0),f({type:r.a.SET_PRICE,payload:{price:a}}))},endGame:(0,a.useCallback)((function(){e(!1)}),[e]),gameResult:(0,a.useCallback)((function(e){var t=s(e),n=l(t);f({type:r.a.UPDATE_GAME,payload:{price:m,multiplier:n,win:m*n,gameItems:t}})}),[s,l,f,m])}}},5664:function(e,t,n){n.d(t,{i:function(){return u}});var a=n(4165),r=n(5861),c=n(686),i=n(9808),u=function(){var e=(0,i.T)().document,t=(0,c.L)().updateDocument,n=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(r){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("users",e.id,{balance:1e3*(e.balance+r)});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(r){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("users",e.id,{balance:1e3*(e.balance-r)});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{addMoney:n,subtractMoney:u}}},4904:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(9976),r=n(3504),c=n(7257),i=n(9808),u=n(8619),o="GameCard_game-card__8WVqq",l="GameCard_link__p5EN-",s=n(184),p=function(e){var t=e.game,n=e.action,a=(0,i.T)().document,p=(0,u.n)().dispatchNotification;return(0,s.jsxs)("div",{className:o,onClick:t.price&&t.price>a.balance?function(){p({type:c.a.ERROR,payload:"You don't have enough money to play this game!"})}:void 0,children:[t.price<=a.balance||!t.price?(0,s.jsx)(r.rU,{to:t.isReady?t.ref:"",className:l,onClick:n}):"",(0,s.jsx)("img",{src:t.photoURL,alt:"game icon"}),(0,s.jsx)("p",{children:t.title})]})},f="GamesCategoryList_games-list__YtwMj",m=function(e){var t=e.games,n=(0,a.G)().startGame;return(0,s.jsx)("div",{className:f,children:t.map((function(e){return(0,s.jsx)(p,{game:e,action:e.price&&function(){return n(e.price)}},Math.random())}))})}},7331:function(e,t,n){n.r(t);var a=n(4335),r=n(4388),c=n(1018),i=n(4904),u=n(184);t.default=function(){var e=[{title:"Scratch card 20$",photoURL:a.Z,ref:"/scratch-card-20",isReady:!0,price:20},{title:"Scratch card 50$",photoURL:r.Z,ref:"/scratch-card-50",isReady:!0,price:50},{title:"Scratch card 100$",photoURL:c.Z,ref:"/scratch-card-100",isReady:!0,price:100}];return(0,u.jsx)(i.Z,{games:e})}}}]);
//# sourceMappingURL=331.3ebe2aeb.chunk.js.map