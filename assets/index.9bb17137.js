var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&c(e,a,t[a]);return e},o=(e,l)=>t(e,a(l));import{a as m,u as i,C as u,R as d,b as v,P as p,c as f}from"./vendor.ffe9c175.js";const E=m({x:0,y:0}),h=m(!1),x=m(0),y=m(0),g=m(0);function b(){const[e,t]=i(E),[a,l]=i(h),r=u.exports.useRef(null),n=u.exports.useRef();return u.exports.useEffect((()=>{if(a&&r.current){let e=function(e){const a={x:e.clientX-n.current.x,y:e.clientY-n.current.y};t({x:a.y,y:a.x})},a=function(){l(!1),document.removeEventListener("mouseup",a)};return window.addEventListener("mousemove",e,!1),document.addEventListener("mouseup",a,!1),()=>{window.removeEventListener("mousemove",e),document.removeEventListener("mouseup",a)}}}),[a]),d.createElement("div",{ref:r,className:"w-12 h-12 my-4 ml-auto mr-8 p-2\n                text-gray-700 bg-gray-400 active:bg-gray-200\n                border rounded-md border-gray-400\n                cursor-pointer relative",onMouseDown:t=>{t.preventDefault(),n.current={x:t.clientX+e.y,y:t.clientY+e.x},l(!0)},onClick:e=>{e.ctrlKey&&t({x:0,y:0})},title:"Drag - rotate; Ctrl+Click - reset rotation"},a?d.createElement("svg",{viewBox:"0 0 36.1 36.1",className:"text-red-700 w-20 h-20 transform -translate-x-6 translate-y-10",fill:"currentColor"},d.createElement("path",{d:"M21.6 14h-7c-.3 0-.5.2-.5.5v7c0 .3.2.5.5.5h7c.3 0 .5-.2.5-.5v-7c0-.3-.3-.5-.5-.5zm-.5 7.1h-6v-6h6v6z"}),d.createElement("path",{fill:"#f7931e",d:"M19.5 15H21v6h-1.5z"}),d.createElement("path",{fill:"#fbb03b",d:"M15 15h4.5v6H15z"}),d.createElement("path",{d:"M23.1 9l-4.6-5.8a.6.6 0 00-.8 0l-.9 1.2L13 9l-.1.5c.1.2.3.3.5.3h2.4v2.4c0 .3.2.5.5.5h3.5c.3 0 .5-.2.5-.5V9.8h2.4c.2 0 .4-.1.5-.3l-.1-.5zm-3.3-.2c-.3 0-.5.2-.5.5v2.4h-2.5V9.3c0-.3-.2-.5-.5-.5h-1.9l2.9-3.6.7-.9 3.6 4.5h-1.8zM12.2 15.8H9.8v-2.4c0-.2-.1-.4-.3-.5L9 13l-5.8 4.6-.2.4.2.4L9 23.1l.3.1.2-.1c.2-.1.3-.3.3-.5v-2.4h2.4c.3 0 .5-.2.5-.5v-3.5c0-.2-.2-.4-.5-.4zm-.5 3.5H9.3c-.3 0-.5.2-.5.5v1.9L4.3 18l4.5-3.6v1.9c0 .3.2.5.5.5h2.4v2.5zM23.1 26.5a.5.5 0 00-.5-.3h-2.4v-2.4c0-.3-.2-.5-.5-.5h-3.5c-.3 0-.5.2-.5.5v2.4h-2.4c-.2 0-.4.1-.5.3-.1.2-.1.4.1.5l3.7 4.6 1 1.2c.1.2.3.2.4.2l.4-.2L23 27c.2-.1.2-.3.1-.5zM18 31.7l-.7-.9-2.8-3.6h1.9c.3 0 .5-.2.5-.5v-2.4h2.5v2.4c0 .3.2.5.5.5h1.9L18 31.7zM32.9 17.6l-1.3-1-4.5-3.6-.5-.1c-.2.1-.3.3-.3.5v2.4h-2.4c-.3 0-.5.2-.5.5v3.5c0 .3.2.5.5.5h2.4v2.4c0 .2.1.4.3.5l.2.1.3-.1 5.8-4.6.1-.6-.1-.4zm-5.7 4v-1.9c0-.3-.2-.5-.5-.5h-2.4v-2.5h2.4c.3 0 .5-.2.5-.5v-1.9l3.5 2.8 1 .8-4.5 3.7z"})):d.createElement("svg",{viewBox:"0 0 32 32",fill:"currentColor"},d.createElement("path",{d:"M17.8 5.5c1.2-.7 2.3-1.3 3.5-1.7 3-1.1 5.5-1.1 6.7.2 1 1 1.2 2.9.6 5.4-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.9-3.2.5-5.7-1.1-7.3-1.8-1.8-5-2-8.9-.6-1.5.6-3 1.4-4.6 2.3-1.5-1-3.1-1.8-4.6-2.3-3.9-1.5-7-1.3-8.9.6C-.1 5.2.8 10.4 4.3 16c-1 1.5-1.8 3.1-2.3 4.6-1.5 3.9-1.3 7 .6 8.9 1 1 2.5 1.5 4.2 1.5 1.4 0 2.9-.3 4.7-1 3.6-1.4 7.6-4 11.1-7.6l.5-.5V24c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1s.4 1 1 1h3.1l-1 1.1c-3.3 3.3-7 5.8-10.4 7.1-3.1 1.1-5.6 1.1-6.8-.2-1.2-1.2-1.3-3.7-.1-6.8.4-1.1 1-2.3 1.7-3.5 1 1.4 2.2 2.8 3.5 4.2H6c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1s-1 .4-1 1V20a29.7 29.7 0 01-3.3-4.1 38.8 38.8 0 019.4-9.3c1.7 1.2 3.4 2.6 5.1 4.2 3.3 3.3 5.8 7 7.1 10.4 1.2 3.1 1.1 5.5-.1 6.8-1.3 1.3-4 1.3-7.3-.1-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3 2 .8 3.8 1.2 5.3 1.2 1.7 0 3.2-.5 4.2-1.5 3.6-3.6.6-12.4-7-19.9a56.5 56.5 0 00-4.8-4zm-8.3 4a43.3 43.3 0 00-4 4.7C2.8 9.6 2.3 5.6 4 4c1.2-1.2 3.7-1.3 6.8-.1 1.1.4 2.3 1 3.5 1.7a29.3 29.3 0 00-4.8 3.9z"})))}function N(e){const{width:t=230,height:a=350,depth:l=100,rotateX:r,rotateY:n,color:c}=e;let m=function(e){if(/(^#{0,1}[0-9A-F]{6,8}$)|(^#{0,1}[0-9A-F]{3,4}$)/i.test(e))return"#"===e[0]&&(e=e.slice(1)),3===e.length?e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3"):4===e.length&&(e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3$4$4")),{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:8===e.length?parseInt(e.substr(6,2),16)/255:1}}(c||"#1879da80")||{r:24,g:121,b:218,a:1},i=m.r,u=m.g,v=m.b,p=m.a;function f(e){return`rgba(${i-5*e}, ${u-5*e}, ${v-5*e}, ${p})`}let E={background:f(5),width:`${t}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(0deg) translateZ(${l/2}px)`},h={background:f(10),width:`${l}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(90deg) translateZ(${t/2}px)`},x={background:f(0),width:`${t}px`,height:`${l}px`,transform:`translate(-50%, -50%) rotateX(90deg) translateZ(${a/2}px)`},y={background:f(20),width:`${t}px`,height:`${l}px`,transform:`translate(-50%, -50%) rotateX(-90deg) translateZ(${a/2}px)`},g={background:f(10),width:`${l}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(-90deg) translateZ(${t/2}px)`},b={background:f(15),width:`${t}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(180deg) translateZ(${l/2}px)`};return d.createElement("div",{className:"absolute top-1/2 left-1/2 select-none",style:{transformStyle:"preserve-3d",transform:`rotateX(${r}deg) rotateY(${n}deg)`}},d.createElement("div",{className:"absolute",style:E})," ",d.createElement("div",{className:"absolute",style:h})," ",d.createElement("div",{className:"absolute",style:x})," ",d.createElement("div",{className:"absolute",style:y})," ",d.createElement("div",{className:"absolute",style:g})," ",d.createElement("div",{className:"absolute",style:b})," ",d.createElement("div",{className:"absolute",style:o(s({},g),{background:"transparent",borderBottom:"3px solid blue",borderLeft:"3px solid green"})})," ",d.createElement("div",{className:"absolute",style:o(s({},b),{background:"transparent",borderBottom:"3px solid red"})})," ")}function w(){const[e]=i(E),[t]=i(x),[a]=i(y),[l]=i(g);return d.createElement("div",null,d.createElement(N,{rotateX:e.x,rotateY:e.y,width:t,height:a,depth:l}))}function $(){let e="M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z",t=[],a=v(e).iterate((function(e,a,l,r){a&&t.push({x:l,y:r})})).scale(1.05);return d.createElement("svg",{viewBox:"0 0 83 43"},d.createElement("filter",{filterUnits:"objectBoundingBox",id:"a"},d.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:".7"}),d.createElement("feColorMatrix",{in:"SourceGraphic",result:"blur2",type:"hueRotate",values:"220"}),d.createElement("feOffset",{dx:"-1.7",dy:"-1.7",in:"blur",result:"offsetBlurredAlpha1"}),d.createElement("feOffset",{dx:"1.7",dy:"1.7",in:"blur2",result:"offsetBlurredAlpha2"}),d.createElement("feMerge",null,d.createElement("feMergeNode",{in:"offsetBlurredAlpha1"}),d.createElement("feMergeNode",{in:"offsetBlurredAlpha2"}),d.createElement("feMergeNode",{in:"SourceGraphic"}))),d.createElement("g",{filter:"url(#a)",style:{stroke:"#ada6ff",fill:"none"}},d.createElement("path",{d:a.toString()})),d.createElement("g",{filter:"url(#a)",style:{stroke:"red",fill:"none"}},d.createElement("path",{d:e})),d.createElement("g",{style:{stroke:"#00349e70",fill:"none"}},t.map(((e,t)=>d.createElement("circle",{cx:e.x,cy:e.y,r:"3",key:t})))))}function M(e,t){return e.toFixed(Math.max(Math.min(t,20),0))}function k(e,t,a,l,r){return l+(e-t)/(a-t)*(r-l)}function K(e,t,a){return Math.min(Math.max(e,t),a)}function A(e,t){const a=e*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+a:t.downKey?-a:0}const L=e=>{const{minValue:t=0,maxValue:a=100,baseStep:l=1,value:r,valueSet:n}=e,c=K(k(r,t,a,0,100),0,100),s=d.useRef(null);return d.createElement("div",{className:"tp-sldv",onKeyDown:function(e){let c=A(l,function(e){return{altKey:e.altKey,shiftKey:e.shiftKey,downKey:"ArrowLeft"===e.key,upKey:"ArrowRight"===e.key}}(e)),s=A(l,function(e){return{altKey:e.altKey,shiftKey:e.shiftKey,downKey:"ArrowDown"===e.key,upKey:"ArrowUp"===e.key}}(e));const o=K(k(r+c+s,t,a,0,100),0,100);n(o)}},d.createElement("div",{className:"tp-sldv_t",tabIndex:0,ref:s,onMouseDown:function(e){var l;function r(e){const l=s.current.ownerDocument.defaultView,r=s.current.getBoundingClientRect(),c=k(K({x:e.pageX-((l&&l.scrollX||0)+r.left),y:e.pageY-((l&&l.scrollY||0)+r.top)}.x,0,r.width),0,r.width,t,a);n(c)}e.preventDefault(),null==(l=e.currentTarget)||l.focus(),document.addEventListener("mousemove",r),document.addEventListener("mouseup",(function e(t){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)}))}},d.createElement("div",{className:"tp-sldv_k",style:{width:`${c}%`}})))};function _(){const[e,t]=i(x),[a,l]=i(y),[r,n]=i(g);return d.createElement("div",{className:"tp-vars tp-rotv custom-vars"},d.createElement("div",{className:"flex items-center"},d.createElement("div",{className:"tp-lblv"},d.createElement("div",{className:"tp-lblv_l w-14"},"Width"),d.createElement("div",{className:"tp-lblv_v"},d.createElement("div",{className:"tp-sldtxtv"},d.createElement("div",{className:"tp-sldtxtv_s"},d.createElement(L,{value:e,valueSet:t,maxValue:350})),d.createElement("div",{className:"tp-sldtxtv_t"},d.createElement("div",{className:"tp-txtv tp-txtv-num"},d.createElement("input",{className:"tp-txtv_i",type:"text",value:M(e,0),readOnly:!0}))))))),d.createElement("div",{className:"flex items-center"},d.createElement("div",{className:"tp-lblv"},d.createElement("div",{className:"tp-lblv_l w-14"},"Height"),d.createElement("div",{className:"tp-lblv_v"},d.createElement("div",{className:"tp-sldtxtv"},d.createElement("div",{className:"tp-sldtxtv_s"},d.createElement(L,{value:a,valueSet:l,maxValue:350})),d.createElement("div",{className:"tp-sldtxtv_t"},d.createElement("div",{className:"tp-txtv tp-txtv-num"},d.createElement("input",{className:"tp-txtv_i",type:"text",value:M(a,0),readOnly:!0}))))))),d.createElement("div",{className:"flex items-center"},d.createElement("div",{className:"tp-lblv"},d.createElement("div",{className:"tp-lblv_l w-14"},"Deep"),d.createElement("div",{className:"tp-lblv_v"},d.createElement("div",{className:"tp-sldtxtv"},d.createElement("div",{className:"tp-sldtxtv_s"},d.createElement(L,{value:r,valueSet:n,maxValue:350})),d.createElement("div",{className:"tp-sldtxtv_t"},d.createElement("div",{className:"tp-txtv tp-txtv-num"},d.createElement("input",{className:"tp-txtv_i",type:"text",value:M(r,0),readOnly:!0}))))))))}function z(){return d.createElement(p,null,d.createElement("div",{className:"bg-gray-100 h-screen flex flex-col"},d.createElement("div",{className:"flex items-center bg-gray-200 shadow-md"},d.createElement("div",{className:"w-32 pt-2"},d.createElement($,null)),d.createElement("div",{className:"ml-4 justify-self-center text-xl tracking-tighter uppercase text-pink-700 select-none"},"CSS 3D shapes"),d.createElement("div",{className:"flex-1"},d.createElement(_,null)),d.createElement("div",{className:"flex-0"},d.createElement(b,null))),d.createElement("div",{className:"flex-1 relative"},d.createElement(w,null))))}f.render(d.createElement(d.StrictMode,null,d.createElement(z,null)),document.getElementById("root"));