(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var s=t(1),r=t.n(s),n=t(6),a=t.n(n),i=t(7),o=t(2),d=t(0),l=function(e){return Object(d.jsx)("div",{id:"cards",className:"cards",children:e.symbols.map((function(c,t){return function(c,t){return Object(d.jsx)("div",{className:"card",id:c,onClick:e.handleClick,children:c},t)}(c,t)}))})},u=function(e){return Object(d.jsxs)("div",{id:"full-page",className:"full-page",children:[Object(d.jsxs)("header",{id:"header",className:"head",children:[Object(d.jsx)("h1",{id:"title",className:"title",children:"Memory Game"}),Object(d.jsx)("p",{id:"description",className:"description",children:"Don't choose the same card twice!"}),Object(d.jsx)("button",{id:"reset",className:"btn",onClick:e.reset,children:"Reset"})]}),Object(d.jsxs)("div",{id:"play-field",className:"play-field",children:[Object(d.jsxs)("div",{id:"scores",className:"scores",children:[Object(d.jsxs)("div",{id:"scorebox-1",className:"scorebox",children:[Object(d.jsx)("h1",{id:"score-title",className:"score-title",children:"Score"}),Object(d.jsx)("h1",{id:"score",className:"score",children:e.score})]}),Object(d.jsxs)("div",{id:"scorebox-2",className:"scorebox",children:[Object(d.jsx)("h1",{id:"top-score-title",className:"score-title",children:"Top Score"}),Object(d.jsx)("h1",{id:"top-score",className:"score",children:e.topScore})]})]}),Object(d.jsx)("div",{id:"card-box",className:"card-box",children:Object(d.jsx)(l,{handleClick:e.handleClick,symbols:e.symbols})}),Object(d.jsx)("div",{id:"status-box",className:"You lose"!==e.status?"status-box":"status-box red",children:e.status})]})]})};t(13);var j=function(){var e=Object(s.useState)(0),c=Object(o.a)(e,2),t=c[0],r=c[1],n=Object(s.useState)(0),a=Object(o.a)(n,2),l=a[0],j=a[1],b=Object(s.useState)([]),h=Object(o.a)(b,2),m=h[0],O=h[1],x=Object(s.useState)("Pick a card"),f=Object(o.a)(x,2),p=f[0],N=f[1],v=Object(s.useState)(["!","@","#","$","%","^","&","*","+"]),k=Object(o.a)(v,2),y=k[0],S=k[1],C=function(e){for(var c,t,s=e.length;0!==s;)t=Math.floor(Math.random()*s),c=e[s-=1],e[s]=e[t],e[t]=c;return e};return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(u,{score:t,topScore:l,status:p,symbols:y,handleClick:function(e){var c=e.target.id;m.includes(c)?(t>l&&j((function(e){return t})),r((function(e){return 0})),O((function(e){return[]})),N((function(e){return"You lose"}))):(r((function(e){return e+1})),O((function(e){return[].concat(Object(i.a)(e),[c])})),N((function(e){return"Pick a card"}))),S((function(e){return C(e)}))},reset:function(e){e.preventDefault(),r((function(e){return 0})),j((function(e){return 0})),N((function(e){return"Pick a card"})),C(y)}})})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a2860d21.chunk.js.map