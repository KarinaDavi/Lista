(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),i=n(6),u=n(3);var o=function(e){return r.a.createElement("div",{onClick:function(){e.isClicked(e.id)}},r.a.createElement("li",null,e.text))};var s=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",value:c}),r.a.createElement("button",{onClick:function(){e.onAdd(c),l("")}},r.a.createElement("span",null,"Agregar")))};var m=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];function l(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Lista de Tareas")),r.a.createElement(s,{onAdd:function(e){c((function(t){return[].concat(Object(i.a)(t),[e])}))}}),r.a.createElement("div",null,r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement(o,{key:t,id:t,text:e,isClicked:l})})))))};l.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c6aea780.chunk.js.map