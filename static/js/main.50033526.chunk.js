(this["webpackJsonpreact-codepen-editor-example"]=this["webpackJsonpreact-codepen-editor-example"]||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),c=n.n(a),i=n(8),r=n.n(i),o=n(14),d=n(1),s=n(9),l=n.n(s),m=n(3),p=n.n(m),u=n(15),f=n(10);var b,g=[{"--text":["rgb(14,20,27)","rgb(245,245,245)"]},{"--color-gray-500:":["hsl(225deg, 7%, 60%)","hsl(210deg, 8%, 50%)"]},{"--color-gray-600:":["hsl(225deg, 15%, 50%)","hsl(210deg, 12%, 55%)"]},{"--prism-base":["#25414e","#f8f8f2"]},{"--prism-background":["#eeeff1","#172028"]},{"--prism-comment":["#aabfc9","#8292a2"]},{"--prism-prolog":["#aabfc9","#8292a2"]},{"--prism-doctype":["#aabfc9","#8292a2"]},{"--prism-cdata":["#39adb5","#8292a2"]},{"--prism-punctuation":["#39adb5","#f8f8f2"]},{"--prism-namespace":["#90a4ae","#f8f8f2"]},{"--prism-property":["#0eb6c2","#f92672"]},{"--prism-tag":["#e53935","#ee5f93"]},{"--prism-constant":["#7c4dff","#f92672"]},{"--prism-symbol":["#7c4dff","#f92672"]},{"--prism-deleted":["#e53935","#f92672"]},{"--prism-boolean":["#7c4dff","#f92672"]},{"--prism-number":["#f76d47","#ae81ff"]},{"--prism-selector":["#17242c","#a6e22e"]},{"--prism-attr-name":["#1950c2","#a6e22e"]},{"--prism-string":["#474545","#e6db74"]},{"--prism-char":["#39adb5","#a6e22e"]},{"--prism-builtin":["#39adb5","#a6e22e"]},{"--prism-inserted":["#39adb5","#a6e22e"]},{"--prism-operator":["#39adb5","#f8f8f2"]},{"--prism-entity":["#393566","#f8f8f2"]},{"--prism-url":["#e53935","#f8f8f2"]},{"--prism-variable":["#e53935","#fd971f"]},{"--prism-atrule":["#7c4dff","#e6db74"]},{"--prism-attr-value":["#3c77b1","#e6db74"]},{"--prism-function":["#ff7c4d","#e6db74"]},{"--prism-class-name":["#ca3253","#e46e86"]},{"--prism-keyword":["#0a14f5","#66d9ef"]},{"--prism-regex":["#6182b8","#e90"]},{"--prism-important":["#7c4dff","#fd971f"]},{"--playground-top":["rgb(223, 223, 223)","rgb(32, 40, 48)"]}];var h=function(e){var t=e.HTML,n=e.CSS,i=e.JS,r=e.initial,o=e.theme,s=e.resettable,m=e.height,h=function(e,t){return Object(f.a)(b||(n=["\n    .td {\n        transition: background-color ","ms;\n    }\n    @media screen and (max-width: ","px) {\n        .codepen-display {\n            flex-direction: column;\n        }\n        .codepen-editors {\n            width: 100%;\n            margin: 0;\n        }\n        .codepen-textareas {\n            margin-bottom: 10px;\n        } \n        .codepen-results {\n            width: 100%;\n            padding: 10px 10px 6px 10px;\n            box-sizing: border-box;\n        }\n        .codepen-display {\n            height: fit-content !important;\n        }\n        .codepen-iframe-container {\n            height: fit-content;\n            padding: 0;\n        }\n        .codepen-results-title {\n            padding: 10px 0px;\n        }\n    }\n"],a||(a=n.slice(0)),n.raw=a,b=n),e||0,t||0);var n,a}(e.themeTransitionSpeed,e.mobileQuery),v=void 0===s||s,E=Object(a.useState)(t||""),S=E[0],y=E[1],x=Object(a.useState)(n||""),C=x[0],N=x[1],j=Object(a.useState)(i||""),k=j[0],T=j[1],O=Object(a.useState)(r||"HTML"),L=O[0],H=O[1],M=l()(),J=Object(a.useState)(null),w=J[0],I=J[1];Object(a.useEffect)((function(){!function(e){g.forEach((function(t){document.documentElement.style.setProperty(Object.keys(t)[0],"light"===e?Object.values(t)[0][0]:Object.values(t)[0][1])}))}(o)}),[o]),Object(a.useEffect)((function(){if(document){var e=document.getElementById("codepen-iframe-"+M).contentWindow.document;I(e),z(e,S,C,k)}}),[]);var B=function(){var e=document.getElementById("codepen-iframe-"+M).contentWindow.document;e.body.innerHTML.includes("undefined")&&(e.body.innerHTML="")},z=function(e,t,n,a){e.open(),e.writeln(t+"<style>"+n+"</style><script>"+a+"<\/script>"),e.close()},V=function(e,t){var n=S,a=C,c=k;"HTML"===e?(y(t),n=t):"CSS"===e?(N(t),a=t):"JS"===e&&(T(t),c=t),z(w,n,a,c)};return c.a.createElement("div",{className:"codepen"},c.a.createElement(h,null),c.a.createElement("div",{className:"codepen-title-flex td"},c.a.createElement("span",{className:"codepen-title td"},"Code playground"),v&&c.a.createElement(u.a,{id:"codepen-reset-"+M,title:"Reset code",onClick:function(){var e=document.getElementById("codepen-reset-"+M);e.classList.add("codepen-reset-active"),setTimeout((function(){e.classList.remove("codepen-reset-active")}),400),y(t||""),N(n||""),T(i||""),z(w,t,n,i),B()},className:"codepen-reset",size:23})),c.a.createElement("div",{style:{height:m||"350px"},className:"codepen-display td"},c.a.createElement("div",{className:"codepen-editors"},c.a.createElement("div",{className:"codepen-editor-picker td"},c.a.createElement("button",{className:"td "+("HTML"===L?"codepen-title-selected ":""),onClick:function(){return H("HTML")}},"HTML"),c.a.createElement("button",{className:"td "+("CSS"===L?"codepen-title-selected ":""),onClick:function(){return H("CSS")}},"CSS"),c.a.createElement("button",{className:"td "+("JS"===L?"codepen-title-selected ":""),onClick:function(){return H("JS")}},"JS")),c.a.createElement("div",{className:"codepen-textareas td"},c.a.createElement("div",{className:"codepen-editor td "+("CSS"===L?"":"codepen-editor-inactive")},"CSS"===L&&c.a.createElement(p.a,{value:C,onValueChange:function(e){return V("CSS",e)},highlight:function(e){return Object(d.highlight)(e,d.languages.css)}})),c.a.createElement("div",{className:"codepen-editor td "+("HTML"===L?"":"codepen-editor-inactive")},"HTML"===L&&c.a.createElement(p.a,{value:S,onValueChange:function(e){return V("HTML",e)},highlight:function(e){return Object(d.highlight)(e,d.languages.html,"html")}})),c.a.createElement("div",{className:"codepen-editor td "+("JS"===L?"":"codepen-editor-inactive")},"JS"===L&&c.a.createElement(p.a,{value:k,onValueChange:function(e){return V("JS",e)},highlight:function(e){return Object(d.highlight)(e,d.languages.js,"js")}})))),c.a.createElement("div",{className:"codepen-results td"},c.a.createElement("div",{className:"codepen-results-title td"},"Results"),c.a.createElement("div",{className:"codepen-iframe-container td"},c.a.createElement("iframe",{scrolling:"yes",title:"react-codepen-editor",marginWidth:"0",marginHeight:"0",className:"td",id:"codepen-iframe-"+M})))))},v=(n(24),function(){var e=Object(a.useState)("dark"),t=Object(o.a)(e,2),n=t[0],i=t[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"head"},c.a.createElement("h1",null,"react-codepen-editor ",c.a.createElement("span",{role:"img","aria-label":"#"},"\u2728\ud83e\uddd9\u200d\u2642\ufe0f")),c.a.createElement("button",{onClick:function(){i("dark"===n?"light":"dark")}},"Toggle theme")),c.a.createElement(h,{CSS:"button {\n    font-size: 40px;\n    margin: 10px;\n}",HTML:'<button onclick="foo()" id="btn">\n    Click me!\n</button>',JS:'function foo() {\n    let btn = document.getElementById("btn");\n    btn.innerHTML = "I\'ve been clicked!";\n}',initial:"CSS",theme:n,mobileQuery:800,height:300,themeTransitionSpeed:150}))});r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.50033526.chunk.js.map