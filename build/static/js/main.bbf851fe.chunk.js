(this.webpackJsonpemployeeapp=this.webpackJsonpemployeeapp||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(13),s=n.n(r),l=n(4),i=n(14),o=n.n(i),d=n(0),j=function(e){var t=e.data;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:t.picture.medium,alt:"employee pic"})}),Object(d.jsx)("td",{children:"".concat(t.name.first," ").concat(t.name.last)}),Object(d.jsx)("td",{children:t.phone}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.dob.date})]},t.login.uuid)},b=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(l.a)(r,2),i=s[0],b=s[1];Object(a.useEffect)((function(){o.a.get("https://randomuser.me/api/?results=10&nat=us").then((function(e){console.log("res:",e.data.results),c(e.data.results),b(e.data.results)}))}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor02"}),Object(d.jsxs)("div",{className:"input-group ",children:[Object(d.jsx)("input",{onChange:function(e){return function(e){var t=e.target.value.toLowerCase(),a=n.filter((function(e){return e.name.first.toLowerCase().indexOf(t)>-1}));b(a)}(e)},type:"text",className:"form-control",placeholder:"Search Employee","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:"Search Employee"})})]})]})}),Object(d.jsx)("table",{className:"table",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Picture"}),Object(d.jsx)("th",{onClick:function(){n.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:(console.log("**",e),0)}))},children:"Name"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"E-Mail"}),Object(d.jsx)("th",{children:"DOB"})]}),function(){var e=null;return i&&(e=i.map((function(e){return Object(d.jsx)(j,{data:e})}))),e}()]})})]})};var u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bbf851fe.chunk.js.map