(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},20:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(13),r=n.n(l),m=(n(20),n(2)),o=n(3),i=n.n(o),u="/api/comments",s=function(){return i.a.get(u)},d=function(e){return i.a.post(u,e)},p=n(14),h=n.n(p);n(39);var E=function(e){return c.a.createElement("div",null,e.list.map((function(t){return c.a.createElement("div",{className:"Comment"},c.a.createElement("div",null,c.a.createElement("ul",{className:"top"},c.a.createElement("div",{className:"Name"},t.name)," ",c.a.createElement("div",{className:"date"},h()(t.date).fromNow())),c.a.createElement("ul",null,t.parent?c.a.createElement("div",{className:"replying"},"@",t.parent):c.a.createElement("p",null)," ",c.a.createElement("div",{className:"content"},t.comment))),c.a.createElement("button",{onClick:function(){return e.reply(t.name)}},"Reply"))})))},f=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},e.replying?c.a.createElement("p",null,"replying to ",e.parent):c.a.createElement("p",null),c.a.createElement("input",{value:e.Name,onChange:e.handleNameChange,placeholder:"Name",required:!0}),c.a.createElement("input",{value:e.Comment,onChange:e.handleCommentChange,placeholder:"Comment",required:!0}),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Submit")))},v=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(),o=Object(m.a)(r,2),i=o[0],u=o[1],p=Object(a.useState)(),h=Object(m.a)(p,2),v=h[0],b=h[1],g=Object(a.useState)(),N=Object(m.a)(g,2),C=N[0],j=N[1],w=Object(a.useState)(!1),O=Object(m.a)(w,2),y=O[0],S=O[1];return Object(a.useEffect)((function(){s().then((function(e){l(e.data)}))})),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"}),c.a.createElement("div",null,c.a.createElement(f,{className:"New",Name:i,Comment:C,handleSubmit:function(e){var t=new Date,a={name:i,comment:C,date:t,parent:v};d(a),l(n.concat(a)),u(""),j("")},handleNameChange:function(e){u(e.target.value)},handleCommentChange:function(e){j(e.target.value)},parent:v,replying:y})),c.a.createElement(E,{className:"CommentList",list:n,reply:function(e){b(e),S(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4a7bc8b3.chunk.js.map