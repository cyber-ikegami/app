(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{17:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var c,i,a,o=e(0),s=e.n(o),r=e(9),l=e.n(r),j=(e(17),e(3)),b=e(2),u=e(4),d=e(1),h="--------------------------------------------",p=function(){var n=Object(o.useState)(""),t=Object(b.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(!1),a=Object(b.a)(i,2),s=a[0],r=a[1],l=Object(o.useState)(),j=Object(b.a)(l,2),u=j[0],p=j[1],w=Object(o.useState)(x()),k=Object(b.a)(w,2),m=k[0],S=k[1],y=Object(o.useState)(""),C=Object(b.a)(y,2),L=C[0],z=C[1],E=Object(o.useState)(""),F=Object(b.a)(E,2),D=F[0],A=F[1],B=Object(o.useState)(""),I=Object(b.a)(B,2),J=I[0],M=I[1],P=Object(o.useState)([]),T=Object(b.a)(P,2),_=T[0],Y=T[1],q=Object(o.useState)([]),G=Object(b.a)(q,2),H=G[0],K=G[1],N=Object(o.useState)([]),Q=Object(b.a)(N,2),R=Q[0],U=Q[1],V=[];_.forEach((function(n,t){V.push(Object(d.jsx)("option",{children:n},t))}));var W=[];H.forEach((function(n,t){W.push(Object(d.jsx)("option",{children:n},t))}));var X=[];R.forEach((function(n,t){X.push(Object(d.jsx)("option",{children:n},t))}));var Z=""!=L?"".concat(m," ").concat(L,")").concat(D,"\n\n").concat(O(void 0!=u?u:""),"\n\n").concat(h,"\n"):"".concat(m," ").concat(D,"\n\n").concat(O(void 0!=u?u:""),"\n\n").concat(h,"\n");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{isDisplay:s,children:Object(d.jsxs)("dialog",{children:[Object(d.jsx)("span",{children:"\u25a0\u30d7\u30ec\u30d3\u30e5\u30fc"}),Object(d.jsx)("textarea",{readOnly:!0,value:Z}),Object(d.jsx)("span",{children:"\u25a0\u65e5\u4ed8"}),Object(d.jsx)("input",{type:"text",value:m,list:"dateList",onChange:function(n){S(n.target.value)}}),Object(d.jsx)("datalist",{id:"dateList",children:V}),Object(d.jsx)("span",{children:"\u25a0\u6240\u5c5e"}),Object(d.jsx)("input",{type:"text",value:L,placeholder:"\u4f8b\uff09CSC",list:"affiliationList",onChange:function(n){z(n.target.value)}}),Object(d.jsx)("datalist",{id:"affiliationList",children:W}),Object(d.jsx)("span",{children:"\u25a0\u540d\u524d"}),Object(d.jsx)("input",{type:"text",value:D,placeholder:"\u4f8b\uff09\u3007\u3007\u69d8",list:"nameList",onChange:function(n){A(n.target.value)}}),Object(d.jsx)("datalist",{id:"nameList",children:X}),Object(d.jsx)("button",{onClick:function(n){r(!1),z(""),A("")},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(d.jsx)("button",{onClick:function(n){M(""!=L?"".concat(J).concat(m," ").concat(L,")").concat(D,"\n\n").concat(O(void 0!=u?u:""),"\n\n").concat(h,"\n"):"".concat(J).concat(m," ").concat(D,"\n\n").concat(O(void 0!=u?u:""),"\n\n").concat(h,"\n")),r(!1),_.includes(m)||(_.push(m),Y(_)),H.includes(L)||(H.push(L),K(H)),R.includes(D)||(R.push(D),U(R)),z(""),A("")},children:"\u78ba\u5b9a"})]})}),Object(d.jsxs)(f,{children:[Object(d.jsx)("span",{children:"\u3000\u25a0\u30d9\u30fc\u30b9\u30c6\u30ad\u30b9\u30c8"}),Object(d.jsx)("textarea",{value:e,onChange:function(n){c(n.target.value)}})]}),Object(d.jsxs)(g,{children:[Object(d.jsx)("button",{onClick:function(){var n;r(!0),p(null===(n=window.getSelection())||void 0===n?void 0:n.toString())},children:"\u62bd\u51fa"}),Object(d.jsx)("button",{onClick:function(){M("")},children:"\u30ea\u30bb\u30c3\u30c8"})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("span",{children:"\u3000\u25a0\u62bd\u51fa\u7d50\u679c"}),Object(d.jsx)("textarea",{value:J,onChange:function(n){}})]})]})},x=function(){var n=new Date;return n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()},O=function(n){var t=n.split("\n"),e=0;if(t.forEach((function(n){for(var t=0;;){if(">"!==n.charAt(t))break;t++}(0==e||0!=t&&t<e)&&(e=t)})),0==e)return n;var c=new Array(e).fill(">").join("");return t.forEach((function(n,e){t[e]=n.replace(c,"")})),t.join("\r\n")},f=u.a.div(c||(c=Object(j.a)(["\n  background-color: #b0ee97;\n  display: inline-block;\n  vertical-align: top;\n  width: calc(50% - 40px);\n  height: 100%;\n  & textarea {\n    resize:none;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    width: calc(100% - 20px);\n    height: calc(100% - 30px);\n    box-sizing: border-box; \n  }\n  & span {\n    font-size: 15px;\n  }\n"]))),g=u.a.div(i||(i=Object(j.a)(["\n  background-color: #b0ee97;\n  display: inline-block;\n  vertical-align: top;\n  width: 80px;\n  height: 100%;\n  display: inline-flex;\n  flex-flow: column;\n  justify-content: center;\n  & button {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n"]))),v=u.a.div(a||(a=Object(j.a)(["\n  display: ",";\n  background-color: #0000007f;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  & span {\n    font-size: 15px;\n  }\n  & dialog {\n    background-color: white;\n    display: inline-block;\n    width: 50%;\n    height: 300px;\n    top: 50%;\n    left: 50%;\n    padding: 2%;\n    transform: translate(-50%,-50%);\n  }\n  & textarea {\n    resize:none;\n    width: 100%;\n    height: 100px;\n  }\n  & input {\n    width: 100%;\n    height: 20px;\n  }\n  & button {\n    width: 100px;\n    height: 30px;\n    margin-top: 5px;\n    margin-right: 5px;\n    bottom: 10px;\n  }\n"])),(function(n){return n.isDisplay?"block":"none"})),w=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),i(n),a(n),o(n)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);