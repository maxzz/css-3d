var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&c(e,a,t[a]);return e},o=(e,l)=>t(e,a(l));import{a as m,u as i,C as u,R as d,b as v,c as p}from"./vendor.6290cfab.js";const f=m({x:20,y:20}),x=m(!1),E=m(250),h=m(60),y=m(300),g=m(!0);function b(){const[e,t]=i(f),[a,l]=i(x),r=u.exports.useRef(null),n=u.exports.useRef();return u.exports.useEffect((()=>{if(a&&r.current){let a=function(a){const l={x:a.clientX-n.current.x,y:a.clientY-n.current.y};a.shiftKey&&(l.x>l.y?l.y=e.y:l.x=e.x),t({x:l.y,y:l.x})},r=function(){l(!1),document.removeEventListener("mouseup",r)};return window.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",r,!1),()=>{window.removeEventListener("mousemove",a),document.removeEventListener("mouseup",r)}}}),[a]),d.createElement("div",{ref:r,className:"\n                text-gray-800 bg-gray-400 active:bg-gray-200\n                border rounded-md border-gray-400\n                cursor-pointer relative",onMouseDown:t=>{t.ctrlKey||(t.preventDefault(),n.current={x:t.clientX+e.y,y:t.clientY+e.x},l(!0))},onClick:e=>{e.ctrlKey&&t({x:0,y:0})},title:"Drag - rotate; Ctrl+Click - reset rotation"},a?d.createElement("div",{className:"w-12 h-12 text-red-800 flex items-center justify-center"},d.createElement("svg",{viewBox:"0 0 100 100",fill:"none",strokeWidth:"1",stroke:"currentColor"},d.createElement("path",{d:"M47.3 35.4c-.6 0-1-.4-1-1v-6.1c0-.2-.1-.3-.3-.3h-4.7c-.8 0-1.3-1-.8-1.6l9.2-11.5c.2-.2.5-.4.8-.4.3 0 .6.1.8.4l9.2 11.5c.5.6 0 1.7-.8 1.6H55c-.2 0-.3.1-.3.3v6.1c0 .6-.4 1-1 1h-6.4zM53.7 65.6c.6 0 1 .4 1 1v6.1c0 .2.1.3.3.3h4.7c.8 0 1.3 1 .8 1.6l-9.2 11.5c-.2.2-.5.4-.8.4a1 1 0 01-.8-.4l-9.2-11.5c-.5-.6 0-1.6.8-1.6H46c.2 0 .3-.1.3-.3v-6.1c0-.6.4-1 1-1h6.4zM35.4 53.6c0 .6-.4 1-1 1h-6.1c-.2 0-.3.1-.3.3v4.7c0 .8-1 1.3-1.6.8l-11.5-9.2c-.2-.2-.4-.5-.4-.8 0-.3.1-.6.4-.8l11.5-9.2c.6-.5 1.7 0 1.6.8v4.7c0 .2.1.3.3.3h6.1c.6 0 1 .4 1 1v6.4zM65.6 47.3c0-.6.4-1 1-1h6.1c.2 0 .3-.1.3-.3v-4.7c0-.8 1-1.3 1.6-.8l11.5 9.2c.2.2.4.5.4.8 0 .3-.1.6-.4.8l-11.5 9.2c-.6.5-1.6 0-1.6-.8V55c0-.2-.1-.3-.3-.3h-6.1c-.6 0-1-.4-1-1v-6.4z"}),d.createElement("g",{stroke:"none"},d.createElement("path",{fill:"#bd8877",d:"M48.7 58.1l-6.1-3.4V44.3l6.1 3.3z"}),d.createElement("path",{fill:"#d79e8c",d:"M48.7 47.6l-6.1-3.3 9.7-1.4 6.1 3.4z"}),d.createElement("path",{fill:"#a17163",d:"M58.4 46.3v10.4l-9.7 1.4V47.6z"})),d.createElement("path",{d:"M58.4 46.2v10.5l-9.7 1.4-6.1-3.4V44.3l9.7-1.4z"}))):d.createElement("div",{className:"w-12 h-12 p-2 text-gray-700"},d.createElement("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeWidth:"3"},d.createElement("ellipse",{cx:"50",cy:"50",rx:"44.4",ry:"13.2"}),d.createElement("ellipse",{cx:"50",cy:"50",rx:"12.3",ry:"44.4"}),d.createElement("path",{d:"M53.7 54.3l8.6-8.6 5 7.5M29.9 66.9l-8.2-6.7 9.1-4.4"}))))}function N(e){let{width:t=230,height:a=350,depth:l=100,color:r}=e;t=+t.toFixed(2),a=+a.toFixed(2),l=+l.toFixed(2);let n=function(e){if(/(^#{0,1}[0-9A-F]{6,8}$)|(^#{0,1}[0-9A-F]{3,4}$)/i.test(e))return"#"===e[0]&&(e=e.slice(1)),3===e.length?e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3"):4===e.length&&(e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3$4$4")),{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:8===e.length?parseInt(e.substr(6,2),16)/255:1}}(r||"#1879da80")||{r:24,g:121,b:218,a:1},c=n.r,s=n.g,o=n.b,m=n.a;function i(e){return`rgba(${c-5*e}, ${s-5*e}, ${o-5*e}, ${m})`}return{f:{background:i(5),width:`${t}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(0deg) translateZ(${l/2}px)`},l:{background:i(10),width:`${l}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(90deg) translateZ(${t/2}px)`},t:{background:i(0),width:`${t}px`,height:`${l}px`,transform:`translate(-50%, -50%) rotateX(90deg) translateZ(${a/2}px)`},b:{background:i(20),width:`${t}px`,height:`${l}px`,transform:`translate(-50%, -50%) rotateX(-90deg) translateZ(${a/2}px)`},r:{background:i(10),width:`${l}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(-90deg) translateZ(${t/2}px)`},k:{background:i(15),width:`${t}px`,height:`${a}px`,transform:`translate(-50%, -50%) rotateY(180deg) translateZ(${l/2}px)`}}}function w(e){const t=N(e);return d.createElement("div",{className:"absolute top-1/2 left-1/2 select-none",style:{transformStyle:"preserve-3d",transform:`rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg)`}},d.createElement("div",{className:"absolute",style:t.f})," ",d.createElement("div",{className:"absolute",style:t.l})," ",d.createElement("div",{className:"absolute",style:t.t})," ",d.createElement("div",{className:"absolute",style:t.b})," ",d.createElement("div",{className:"absolute",style:t.r})," ",d.createElement("div",{className:"absolute",style:t.k})," ",d.createElement("div",{className:"absolute",style:o(s({},t.r),{background:"transparent",borderBottom:"3px solid blue",borderLeft:"3px solid green"})})," ",d.createElement("div",{className:"absolute",style:o(s({},t.k),{background:"transparent",borderBottom:"3px solid red"})})," ")}function $(){const[e]=i(f),[t]=i(E),[a]=i(h),[l]=i(y),[r]=i(g);return d.createElement("div",{className:"relative h-full"},r&&d.createElement("div",{className:"absolute top-0 left-0 text-[.5rem] font-mono text-green-700 bg-gray-900 w-full h-full"},d.createElement("pre",null,function(){const r=N({width:t,height:a,depth:l,rotateX:e.x,rotateY:e.y,color:"#ff000080"});return JSON.stringify(r,null,4).replace(/"/g,"").replace(/,$/gm,";").replace(/((?:\r?\n)\s*)};?/gm,";$1}").replace(/};((?:\r?\n)\s*)}/gm,"}$1}")}())),d.createElement("div",{className:"z-10"},d.createElement(w,{rotateX:e.x,rotateY:e.y,width:t,height:a,depth:l})))}function k(){return v("M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z").iterate((function(e,t,a,l){})).scale(1.05),d.createElement("svg",{viewBox:"0 0 94.2 81.9",className:"w-full h-full",strokeWidth:"2"},d.createElement("filter",{filterUnits:"objectBoundingBox",id:"a"},d.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:".7"}),d.createElement("feGaussianBlur",{in:"SourceAlpha",result:"blur2",stdDeviation:"1.7"}),d.createElement("feColorMatrix",{in:"SourceGraphic",result:"blur2",type:"hueRotate",values:"220"}),d.createElement("feOffset",{dx:"2",dy:"-4",in:"blur",result:"offsetBlurredAlpha1"}),d.createElement("feOffset",{dx:"3",dy:"3",in:"blur2",result:"offsetBlurredAlpha2"}),d.createElement("feMerge",null,d.createElement("feMergeNode",{in:"offsetBlurredAlpha1"}),d.createElement("feMergeNode",{in:"offsetBlurredAlpha2"}),d.createElement("feMergeNode",{in:"SourceGraphic"}))),d.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"15",y1:"5.3",x2:"70.3",y2:"83.4"},d.createElement("stop",{offset:"0",stopColor:"rgb(185, 28, 28)"}),d.createElement("stop",{offset:"1",stopColor:"rgba(185, 28, 28, .3)"})),d.createElement("g",{fill:"none",stroke:"url(#SVGID_1_)",filter:"url(#a)"},d.createElement("path",{d:"M14.1 23.1C8.9 6.8 23.3-9.7 44.1 8.4c14.8 12.9 8-5.5 19-5.5s45 55.5 24 50.5c-27.3-6.5 9.6 26.3-20.4 28C44.2 82.5 16.9 48.5 18 68.1 19.5 92.7.5 71.7.5 47s17.9-10.6 13.6-23.9z"}),d.createElement("path",{d:"M24 19.6c.7 2.2 2 6 2.9 2.8.9-3.2.1-5.5-1.9-7.2-2-1.8-1.7 2.1-1 4.4z",strokeWidth:".9"}),d.createElement("path",{d:"M30.2 16c-1.1-1.6-2.8-4.5-.1-3.9s3.7 2.4 3.7 4.9c-.2 2.7-2.6.6-3.6-1z",strokeWidth:".9"})))}function M(e,t){return e.toFixed(Math.max(Math.min(t,20),0))}function K(e,t,a,l,r){return l+(e-t)/(a-t)*(r-l)}function S(e,t,a){return Math.min(Math.max(e,t),a)}function _(e,t){const a=e*(t.altKey||t.ctrlKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+a:t.downKey?-a:0}const A=e=>{const{minValue:t=0,maxValue:a=100,baseStep:l=1,value:r,valueSet:n}=e,c=S(K(r,t,a,0,100),0,100),s=d.useRef(null);return d.createElement("div",{className:"tp-sldv",onKeyDown:function(e){let c=_(l,function(e){return{altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,downKey:"ArrowLeft"===e.key,upKey:"ArrowRight"===e.key}}(e))+_(l,function(e){return{altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,downKey:"ArrowDown"===e.key,upKey:"ArrowUp"===e.key}}(e));c&&n(S(r+c,t,a))}},d.createElement("div",{className:"tp-sldv_t",tabIndex:0,ref:s,onMouseDown:function(e){var l;function r(e){const l=s.current.ownerDocument.defaultView,r=s.current.getBoundingClientRect(),c={x:e.pageX-((l&&l.scrollX||0)+r.left),y:e.pageY-((l&&l.scrollY||0)+r.top)};n(K(S(c.x,0,r.width),0,r.width,t,a))}e.preventDefault(),null==(l=e.currentTarget)||l.focus(),document.addEventListener("mousemove",r),document.addEventListener("mouseup",(function e(t){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)}))}},d.createElement("div",{className:"tp-sldv_k",style:{width:`${c}%`}})))};function C(){const[e,t]=i(E),[a,l]=i(h),[r,n]=i(y);function c(e,t,a=700){let l=parseInt(e.target.value,10);return l=isNaN(l)?t:l,l}return d.createElement("div",{className:"tp-vars tp-rotv custom-vars self-center"},d.createElement("div",{className:"flex items-center"},d.createElement("div",{className:"tp-lblv"},d.createElement("div",{className:"tp-lblv_l w-11"},"Width"),d.createElement("div",{className:"tp-lblv_v"},d.createElement("div",{className:"tp-sldtxtv"},d.createElement("div",{className:"tp-sldtxtv_s"},d.createElement(A,{value:e,valueSet:t,maxValue:700})),d.createElement("div",{className:"tp-sldtxtv_t max-w-[2rem]"},d.createElement("div",{className:"tp-txtv tp-txtv-num"},d.createElement("input",{className:"tp-txtv_i",type:"text",value:M(e,0),onChange:a=>t(c(a,e))}))))))),d.createElement("div",{className:"flex items-center"},d.createElement("div",{className:"tp-lblv"},d.createElement("div",{className:"tp-lblv_l w-11"},"Height"),d.createElement("div",{className:"tp-lblv_v"},d.createElement("div",{className:"tp-sldtxtv"},d.createElement("div",{className:"tp-sldtxtv_s"},d.createElement(A,{value:a,valueSet:l,maxValue:700})),d.createElement("div",{className:"tp-sldtxtv_t max-w-[2rem]"},d.createElement("div",{className:"tp-txtv tp-txtv-num"},d.createElement("input",{className:"tp-txtv_i",type:"text",value:M(a,0),onChange:t=>l(c(t,e))}))))))),d.createElement("div",{className:"flex items-center"},d.createElement("div",{className:"tp-lblv"},d.createElement("div",{className:"tp-lblv_l w-11"},"Deep"),d.createElement("div",{className:"tp-lblv_v"},d.createElement("div",{className:"tp-sldtxtv"},d.createElement("div",{className:"tp-sldtxtv_s"},d.createElement(A,{value:r,valueSet:n,maxValue:700})),d.createElement("div",{className:"tp-sldtxtv_t max-w-[2rem]"},d.createElement("div",{className:"tp-txtv tp-txtv-num"},d.createElement("input",{className:"tp-txtv_i",type:"text",value:M(r,0),onChange:t=>n(c(t,e))}))))))))}function B(){const[e,t]=i(g),[a]=i(f);return d.createElement(d.Fragment,null,d.createElement("div",{className:"bg-gray-100 h-screen flex flex-col"},d.createElement("div",{className:"flex items-center bg-gray-200 shadow-md"},d.createElement("div",{className:"w-8 h-8 ml-2"},d.createElement(k,null)),d.createElement("div",{className:"flex-1 ml-2 justify-self-center text-xl tracking-tighter uppercase text-pink-700 select-none",style:{textShadow:"1px 1px #00000040"}},"CSS 3D shapes"),d.createElement("div",{className:"flex-0 py-2"},d.createElement("div",{className:"flex"},d.createElement(C,null),d.createElement("div",{className:"flex-0 my-2 ml-1 mr-5 relative"},d.createElement(b,null),d.createElement("div",{className:"text-[.5rem] absolute w-full flex justify-center space-x-1"},d.createElement("div",{className:"w"},"x: ",a.y),d.createElement("div",{className:"w"},"y: ",a.x)))),d.createElement("div",{className:"pl-2"},d.createElement("label",{className:"font-mono text-[.7rem] text-gray-500 flex items-center"},d.createElement("input",{type:"checkbox",checked:e,onChange:e=>t(e.target.checked)}),d.createElement("span",{className:"ml-1"},"Show generated"))))),d.createElement("div",{className:"flex-1 relative"},d.createElement($,null))))}p.render(d.createElement(d.StrictMode,null,d.createElement(B,null)),document.getElementById("root"));
