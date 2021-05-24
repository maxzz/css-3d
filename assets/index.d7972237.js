var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{a as n,u as c,C as s,R as o,b as i,c as m}from"./vendor.012cb038.js";function d(e,t){return e.toFixed(Math.max(Math.min(t,20),0))}function u(e,t,a,r,l){return r+(e-t)/(a-t)*(l-r)}function v(e,t,a){return Math.min(Math.max(e,t),a)}function f(e,t){const a=e*(t.altKey||t.ctrlKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+a:t.downKey?-a:0}function p(e){let{width:t,height:a,depth:r,color:l,angle:n}=e;return t=+t.toFixed(2),a=+a.toFixed(2),r=+r.toFixed(2),{position:"relative",transformStyle:"preserve-3d",transform:`rotateX(${n.x}deg) rotateY(${n.y}deg)`,"--width":`${t}px`,"--height":`${a}px`,"--depth":`${r}px`,"--shadowRatio":5,"--faceWeight":1,"--faceR":l.r,"--faceG":l.g,"--faceB":l.b,"--faceA":l.a}}function h(e){let t=Object.fromEntries([...Object.entries(e)].map((([e,t])=>{return[e.match(/^--/)?e:(a=e,a.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))),t];var a})));return JSON.stringify(t,null,4).replace(/"/g,"").replace(/,$/gm,";").replace(/((?:\r?\n)\s*)};?/gm,";$1}").replace(/};((?:\r?\n)\s*)}/gm,"}$1}")}function x(e,n){n=n||"cube";const c=((e,n)=>{for(var c in n||(n={}))a.call(n,c)&&l(e,c,n[c]);if(t)for(var c of t(n))r.call(n,c)&&l(e,c,n[c]);return e})({},p(e)),s=`.${n} ${h(c)}`;let o=`.${n} > div ${h({position:"absolute",backgroundColor:"rgba(calc(var(--faceR) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceG) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceB) - calc(var(--shadowRatio) * var(--faceWeight))), var(--faceA))",boxShadow:"inset 2px 2px 14px 4px #00000038"})}`;const i=function(e){let{width:t,height:a,depth:r,color:l,shadowRatio:n}=e;return t=+t.toFixed(2),a=+a.toFixed(2),r=+r.toFixed(2),{f:{"--faceWeight":5,width:"var(--width)",height:"var(--height)",transform:"translate(-50%, -50%) translateZ(calc((var(--depth) / 2)))"},l:{"--faceWeight":10,width:"var(--depth)",height:"var(--height)",transform:"translate(-50%, -50%) rotateY(90deg) translateZ(calc((var(--width) / 2)))"},t:{"--faceWeight":0,width:"var(--width)",height:"var(--depth)",transform:"translate(-50%, -50%) rotateX(90deg) translateZ(calc((var(--height) / 2)))"},b:{"--faceWeight":20,width:"var(--width)",height:"var(--depth)",transform:"translate(-50%, -50%) rotateX(-90deg) translateZ(calc((var(--height) / 2)))"},r:{"--faceWeight":10,width:"var(--depth)",height:"var(--height)",transform:"translate(-50%, -50%) rotateY(-90deg) translateZ(calc((var(--width) / 2)))"},k:{"--faceWeight":15,width:"var(--width)",height:"var(--height)",transform:"translate(-50%, -50%) rotateY(180deg) translateZ(calc((var(--depth) / 2)))"}}}(e);return`${`<style>\n\n${s}\n\n${o}\n\n${[...Object.entries(i)].map((([e,t])=>`.${n}__${e} ${h(t)}`)).join("\n")}\n\n</style>`}\n${`\n        <div style="height: 256px; display: flex; align-items: center; justify-content: center">\n            <div class="${n}">\n                <div class="${n}__f"></div> \x3c!-- _front_ --\x3e\n                <div class="${n}__l"></div> \x3c!-- _left__ --\x3e\n                <div class="${n}__t"></div> \x3c!-- _top___ --\x3e\n                <div class="${n}__b"></div> \x3c!-- _bottom --\x3e\n                <div class="${n}__r"></div> \x3c!-- _right_ --\x3e\n                <div class="${n}__k"></div> \x3c!-- _back__ --\x3e\n            </div>\n        </div>`.replace(/^[ \t]{8,9}/gm,"")}`}const E=n({x:20,y:20}),g=n(!1),y=n(250),b=n(60),w=n(300),N=n("#1879da80"),_=n((e=>{let t=function(e){if(/(^#{0,1}[0-9A-F]{6,8}$)|(^#{0,1}[0-9A-F]{3,4}$)/i.test(e))return"#"===e[0]&&(e=e.slice(1)),3===e.length?e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3"):4===e.length&&(e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3$4$4")),{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:8===e.length?parseInt(e.substr(6,2),16)/255:1}}(e(N)||"#1879da80")||{r:24,g:121,b:218,a:1};return t.a=+d(t.a,2),t})),$=n(5),M=n(!0),k=n(!1),C=n("cube-test"),S=n((e=>x({width:e(y),height:e(b),depth:e(w),color:e(_),shadowRatio:e($),angle:e(E)},e(C))));function K(){const[e,t]=c(E),[a,r]=c(g),l=s.exports.useRef(null),n=s.exports.useRef();return s.exports.useEffect((()=>{if(a&&l.current){let a=function(a){const r={x:a.clientX-n.current.x,y:a.clientY-n.current.y};a.shiftKey&&(r.x>r.y?r.y=e.y:r.x=e.x),t({x:-r.y,y:-r.x})},l=function(){r(!1),document.removeEventListener("mouseup",l)};return window.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",l,!1),()=>{window.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)}}}),[a]),o.createElement("div",{ref:l,className:"\n                bg-gradient-radial\n                from-[#2f93724d] to-transparent\n                active:from-[#7f7f7f8f] active:to-[#000000f7]\n                transform\n                active:scale-95\n                transition-all duration-100\n                border rounded-md border-gray-400\n                cursor-pointer relative",onMouseDown:t=>{t.ctrlKey||(t.preventDefault(),n.current={x:t.clientX+e.y,y:t.clientY+e.x},r(!0))},onClick:e=>{e.ctrlKey&&t({x:0,y:0})},title:"Drag - rotate; Ctrl+Click - reset rotation"},a?o.createElement("div",{className:"w-12 h-12 text-gray-100 flex items-center justify-center"},o.createElement("svg",{viewBox:"0 0 100 100",fill:"none",strokeWidth:"1",stroke:"currentColor"},o.createElement("path",{d:"M47.3 35.4c-.6 0-1-.4-1-1v-6.1c0-.2-.1-.3-.3-.3h-4.7c-.8 0-1.3-1-.8-1.6l9.2-11.5c.2-.2.5-.4.8-.4.3 0 .6.1.8.4l9.2 11.5c.5.6 0 1.7-.8 1.6H55c-.2 0-.3.1-.3.3v6.1c0 .6-.4 1-1 1h-6.4zM53.7 65.6c.6 0 1 .4 1 1v6.1c0 .2.1.3.3.3h4.7c.8 0 1.3 1 .8 1.6l-9.2 11.5c-.2.2-.5.4-.8.4a1 1 0 01-.8-.4l-9.2-11.5c-.5-.6 0-1.6.8-1.6H46c.2 0 .3-.1.3-.3v-6.1c0-.6.4-1 1-1h6.4zM35.4 53.6c0 .6-.4 1-1 1h-6.1c-.2 0-.3.1-.3.3v4.7c0 .8-1 1.3-1.6.8l-11.5-9.2c-.2-.2-.4-.5-.4-.8 0-.3.1-.6.4-.8l11.5-9.2c.6-.5 1.7 0 1.6.8v4.7c0 .2.1.3.3.3h6.1c.6 0 1 .4 1 1v6.4zM65.6 47.3c0-.6.4-1 1-1h6.1c.2 0 .3-.1.3-.3v-4.7c0-.8 1-1.3 1.6-.8l11.5 9.2c.2.2.4.5.4.8 0 .3-.1.6-.4.8l-11.5 9.2c-.6.5-1.6 0-1.6-.8V55c0-.2-.1-.3-.3-.3h-6.1c-.6 0-1-.4-1-1v-6.4z"}),o.createElement("g",{stroke:"none"},o.createElement("path",{fill:"#bd8877",d:"M48.7 58.1l-6.1-3.4V44.3l6.1 3.3z"}),o.createElement("path",{fill:"#d79e8c",d:"M48.7 47.6l-6.1-3.3 9.7-1.4 6.1 3.4z"}),o.createElement("path",{fill:"#a17163",d:"M58.4 46.3v10.4l-9.7 1.4V47.6z"})),o.createElement("path",{d:"M58.4 46.2v10.5l-9.7 1.4-6.1-3.4V44.3l9.7-1.4z"}))):o.createElement("div",{className:"w-12 h-12 p-2 text-gray-300 hover:text-gray-100"},o.createElement("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeWidth:"2"},o.createElement("ellipse",{cx:"50",cy:"50",rx:"44.4",ry:"13.2"}),o.createElement("ellipse",{cx:"50",cy:"50",rx:"12.3",ry:"44.4"}),o.createElement("path",{d:"M53.7 54.3l8.6-8.6 5 7.5M29.9 66.9l-8.2-6.7 9.1-4.4"}))))}function z(e){return o.createElement("div",{className:"cube",style:p(e)},o.createElement("div",{className:"cube__f"})," ",o.createElement("div",{className:"cube__l"})," ",o.createElement("div",{className:"cube__t"})," ",o.createElement("div",{className:"cube__b"})," ",o.createElement("div",{className:"cube__r"})," ",o.createElement("div",{className:"cube__k"})," ")}function A(e){const{className:t="",forId:a}=e,r=s.exports.useRef(null);return s.exports.useEffect((()=>{var e;function t(e){const t=e.target.querySelector(".notice");t.hidden=!1,setTimeout((()=>t.hidden=!0),1e3)}return null==(e=r.current)||e.addEventListener("clipboard-copy",t,!1),()=>{var e;null==(e=r.current)||e.removeEventListener("clipboard-copy",t,!1)}}),[r.current]),o.createElement("clipboard-copy",{ref:r,class:`${t} select-none transform active:scale-105 pointer-events-auto`,for:a},"Copy",o.createElement("div",{className:"notice px-2 py-1 absolute top-1/2 left-[-220%] transform -translate-y-1/2 rounded bg-green-600 text-green-100 text-xs",hidden:!0},"Copied!"))}function R({angle:e}){return o.createElement("div",{className:"w-full h-full",style:{transformStyle:"preserve-3d",transform:`scale(.2) rotateX(${e.x}deg) rotateY(${e.y}deg)`}},o.createElement("div",{style:{transformStyle:"preserve-3d",transform:"translateX(50px)"}},o.createElement(z,{angle:{x:0,y:0},width:100,height:5,depth:5,color:{r:230,g:85,b:85,a:.3},shadowRatio:5})),o.createElement("div",{style:{transformStyle:"preserve-3d",transform:"translateY(-50px)"}},o.createElement(z,{angle:{x:0,y:0},width:5,height:100,depth:5,color:{r:0,g:255,b:0,a:.3},shadowRatio:5})),o.createElement("div",{style:{transformStyle:"preserve-3d",transform:"translateZ(-50px)"}},o.createElement(z,{angle:{x:0,y:0},width:5,height:5,depth:100,color:{r:113,g:113,b:230,a:.5},shadowRatio:5})))}function B({open:e}){return o.createElement("div",{className:"w-3 h-3"},e?o.createElement("svg",{viewBox:"0 0 107 107"},o.createElement("path",{fill:"none",stroke:"currentColor",d:"M26.5 36.8C37.4 35.5 47.9 47 49 61.5c1 12.8-5.1 28.2-18.4 28.6-15.5.4-21-16.7-21.5-27.4-.5-11.7 6.6-24.6 17.4-25.9z"}),o.createElement("path",{fill:"currentColor",d:"M3.3 42.1a55 55 0 017.2-10.8c2.8-3.3 6.1-6.5 10.4-8.7a17 17 0 0112.9-1.4l.9.3.9.4a16.3 16.3 0 018.3 11l-.8.6-5.1-3.6c-1.6-1.1-3.2-2-4.8-2.6-3.1-1.3-6.4-1-9.9.5a40.2 40.2 0 00-9.8 6.6 88.8 88.8 0 00-4.7 4.2L4.2 43l-.9-.9zM30.7 69c3.5 3.5 10-.2 5-9.3 6.8 0 8.6 6.8 8.5 10.7-.1 3.9-2.5 8.5-6.8 8.5s-6.9-5.6-6.7-9.9z"}),o.createElement("path",{fill:"none",stroke:"currentColor",d:"M80.6 37.1c-10.9-1.4-21.5 10-22.7 24.5-1.1 12.8 4.8 28.3 18.1 28.7 15.6.5 21.3-16.5 21.8-27.2.6-11.7-6.3-24.6-17.2-26z"}),o.createElement("path",{fill:"currentColor",d:"M103 43.2l-4.6-4.4-4.6-4.2a43.8 43.8 0 00-9.8-6.7 12 12 0 00-9.9-.6c-1.6.6-3.2 1.5-4.8 2.5l-5.2 3.6-.8-.6a16 16 0 018.5-10.9l.9-.4.9-.3 1.9-.5a18.5 18.5 0 0111 2.1c4.2 2.3 7.4 5.5 10.3 8.8 2.8 3.4 5.1 7.1 7 10.9l-.8.7zM76.2 69.3c-3.5 3.4-10-.3-4.9-9.3-6.8-.1-8.7 6.7-8.6 10.6.1 3.9 2.4 8.5 6.7 8.5 4.2 0 6.9-5.6 6.8-9.8z"})):o.createElement("svg",{viewBox:"0 0 107 107"},o.createElement("path",{fill:"currentColor",d:"M29.1 73.8C40 72.5 47.9 47 49 61.5c1 12.8-5.1 28.2-18.4 28.6-15.5.4-21-16.7-21.5-27.4-.5-11.7 9.1 12.4 20 11.1zM3.8 41.9l10.6-.5c3.5-.2 6.9-.6 10.1-1.3 3.3-.7 6.3-1.7 9.2-3.1a44 44 0 004.4-2.1l2.3-1.1 2.5-1.1.8.7c-1.1 3.8-4 6.9-7.4 8.8a31.2 31.2 0 01-11 3.4 48.3 48.3 0 01-21.8-2.7l.3-1zM77.7 74.1c-10.9-1.4-18.6-27-19.8-12.5-1.1 12.8 4.8 28.3 18.1 28.7 15.6.5 21.3-16.5 21.8-27.2.6-11.7-9.2 12.4-20.1 11zM103.4 43.4a46.6 46.6 0 01-21.9 2.5c-3.7-.5-7.6-1.6-11-3.5-3.4-2-6.2-5-7.3-8.9l.8-.6 2.5 1.2 2.3 1.1 4.4 2.1c2.9 1.4 5.9 2.5 9.2 3.1 3.3.7 6.6 1.1 10.1 1.4l10.6.7.3.9z"})))}function F(){const[e]=c(y),[t]=c(b),[a]=c(w),[r]=c(_),[l]=c($),[n]=c(E),[s]=c(M),[i,m]=c(k),[d,u]=c(C),[v]=c(S);return o.createElement("div",{className:"relative h-full"},s&&o.createElement("div",{className:"absolute top-0 left-0 text-[.5rem] font-mono text-green-700 bg-gray-900 w-full h-full"},o.createElement("div",{className:"absolute top-2 right-2 px-2 py-1 flex items-center space-x-1"},o.createElement("input",{className:"p-1 border rounded-sm bg-gray-900 text-green-700 border-green-700 outline-none",value:d,onChange:e=>u(e.target.value)}),o.createElement(A,{forId:"generated-source",className:"px-2 py-1 rounded-sm border border-green-700"}),o.createElement("button",{className:"px-2 py-1 rounded-sm border border-green-700 pointer-events-auto flex items-center space-x-2",onClick:function(){let e=document.getElementById("cube-test-place");e.innerHTML=i?"":v,m((e=>!e))}},o.createElement(B,{open:i}),o.createElement("span",null,"Preview"))),o.createElement("pre",{id:"generated-source",className:"px-1 py-1 overflow-x-auto"},v)),o.createElement("div",{className:"w-[400px] h-[400px] ml-auto pointer-events-none"},o.createElement("div",{className:"z-10 absolute select-none transform "+(s?"top-32 right-28 scale-[.2]":"top-1/2 right-1/2 scale-[.8]")},o.createElement(z,{angle:n,width:e,height:t,depth:a,color:r,shadowRatio:l})),o.createElement("div",{className:"w-full h-full"},o.createElement(R,{angle:n}))))}function W(){return i("M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z").iterate((function(e,t,a,r){})).scale(1.05),o.createElement("svg",{viewBox:"0 0 94.2 81.9",className:"w-full h-full",strokeWidth:"2",overflow:"visible"},o.createElement("filter",{filterUnits:"objectBoundingBox",id:"a"},o.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:".7"}),o.createElement("feGaussianBlur",{in:"SourceAlpha",result:"blur2",stdDeviation:"1.7"}),o.createElement("feColorMatrix",{in:"SourceGraphic",result:"blur2",type:"hueRotate",values:"220"}),o.createElement("feOffset",{dx:"-3",dy:"-2",in:"blur",result:"offsetBlurredAlpha1"}),o.createElement("feOffset",{dx:"3",dy:"2",in:"blur2",result:"offsetBlurredAlpha2"}),o.createElement("feMerge",null,o.createElement("feMergeNode",{in:"offsetBlurredAlpha1"}),o.createElement("feMergeNode",{in:"offsetBlurredAlpha2"}),o.createElement("feMergeNode",{in:"SourceGraphic"}))),o.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"15",y1:"5.3",x2:"70.3",y2:"83.4",style:{"--c1":"#a8e6378a","--c2":"green","--c3":"#0056ff"}},o.createElement("stop",{offset:"0",stopColor:"var(--c1)"}),o.createElement("stop",{offset:".5",stopColor:"var(--c2)"}),o.createElement("stop",{offset:"1",stopColor:"var(--c3)"})),o.createElement("g",{fill:"none",stroke:"url(#SVGID_1_)",filter:"url(#a)"},o.createElement("path",{d:"M14.1 23.1C8.9 6.8 23.3-9.7 44.1 8.4c14.8 12.9 8-5.5 19-5.5s45 55.5 24 50.5c-27.3-6.5 9.6 26.3-20.4 28C44.2 82.5 16.9 48.5 18 68.1 19.5 92.7.5 71.7.5 47s17.9-10.6 13.6-23.9z"}),o.createElement("path",{d:"M24 19.6c.7 2.2 2 6 2.9 2.8.9-3.2.1-5.5-1.9-7.2-2-1.8-1.7 2.1-1 4.4z",strokeWidth:".9"}),o.createElement("path",{d:"M30.2 16c-1.1-1.6-2.8-4.5-.1-3.9s3.7 2.4 3.7 4.9c-.2 2.7-2.6.6-3.6-1z",strokeWidth:".9"})))}const L=e=>{const{minValue:t=0,maxValue:a=100,baseStep:r=1,value:l,valueSet:n}=e,c=v(u(l,t,a,0,100),0,100),s=o.useRef(null);return o.createElement("div",{className:"tp-sldv",onKeyDown:function(e){let c=f(r,function(e){return{altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,downKey:"ArrowLeft"===e.key,upKey:"ArrowRight"===e.key}}(e))+f(r,function(e){return{altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,downKey:"ArrowDown"===e.key,upKey:"ArrowUp"===e.key}}(e));c&&n(v(l+c,t,a))}},o.createElement("div",{className:"tp-sldv_t",tabIndex:0,ref:s,onMouseDown:function(e){var r;function l(e){const r=s.current.ownerDocument.defaultView,l=s.current.getBoundingClientRect(),c={x:e.pageX-((r&&r.scrollX||0)+l.left),y:e.pageY-((r&&r.scrollY||0)+l.top)};n(u(v(c.x,0,l.width),0,l.width,t,a))}e.preventDefault(),null==(r=e.currentTarget)||r.focus(),document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function e(t){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)}))}},o.createElement("div",{className:"tp-sldv_k",style:{width:`${c}%`}})))};function j(){const[e,t]=c(y),[a,r]=c(b),[l,n]=c(w);function s(e,t,a=700){let r=parseInt(e.target.value,10);return r=isNaN(r)?t:r,r}return o.createElement("div",{className:"tp-vars tp-rotv self-center custom-vars custom-vars-dark"},o.createElement("div",{className:"flex items-center"},o.createElement("div",{className:"tp-lblv"},o.createElement("div",{className:"tp-lblv_l w-11"},"Width"),o.createElement("div",{className:"tp-lblv_v"},o.createElement("div",{className:"tp-sldtxtv"},o.createElement("div",{className:"tp-sldtxtv_s"},o.createElement(L,{value:e,valueSet:t,maxValue:700})),o.createElement("div",{className:"tp-sldtxtv_t max-w-[2rem]"},o.createElement("div",{className:"tp-txtv tp-txtv-num"},o.createElement("input",{className:"tp-txtv_i",style:{color:"#a45555"},type:"text",value:d(e,0),onChange:a=>t(s(a,e))}))))))),o.createElement("div",{className:"flex items-center"},o.createElement("div",{className:"tp-lblv"},o.createElement("div",{className:"tp-lblv_l w-11"},"Height"),o.createElement("div",{className:"tp-lblv_v"},o.createElement("div",{className:"tp-sldtxtv"},o.createElement("div",{className:"tp-sldtxtv_s"},o.createElement(L,{value:a,valueSet:r,maxValue:700})),o.createElement("div",{className:"tp-sldtxtv_t max-w-[2rem]"},o.createElement("div",{className:"tp-txtv tp-txtv-num"},o.createElement("input",{className:"tp-txtv_i",style:{color:"green"},type:"text",value:d(a,0),onChange:t=>r(s(t,e))}))))))),o.createElement("div",{className:"flex items-center"},o.createElement("div",{className:"tp-lblv"},o.createElement("div",{className:"tp-lblv_l w-11"},"Depth"),o.createElement("div",{className:"tp-lblv_v"},o.createElement("div",{className:"tp-sldtxtv"},o.createElement("div",{className:"tp-sldtxtv_s"},o.createElement(L,{value:l,valueSet:n,maxValue:700})),o.createElement("div",{className:"tp-sldtxtv_t max-w-[2rem]"},o.createElement("div",{className:"tp-txtv tp-txtv-num"},o.createElement("input",{className:"tp-txtv_i",style:{color:"#7171e6"},type:"text",value:d(l,0),onChange:t=>n(s(t,e))}))))))))}function D(){const[e,t]=c(M),[a]=c(E);return o.createElement(o.Fragment,null,o.createElement("div",{className:"bg-gray-100 h-screen overflow-hidden flex flex-col"},o.createElement("div",{className:"flex items-center bg-gray-200 shadow-md dark z-10 border-b border-green-800"},o.createElement("div",{className:"w-8 h-8 ml-2 flex-none"},o.createElement(W,null)),o.createElement("div",{className:"flex-1 ml-2 justify-self-center text-xl tracking-tighter uppercase text-gray-500 select-none",style:{textShadow:"#1ec13652 2px 2px 2px"}},"CSS 3D shapes"),o.createElement("div",{className:"flex-0 py-2"},o.createElement("div",{className:"flex"},o.createElement(j,null),o.createElement("div",{className:"flex-0 my-2 ml-1 mr-2 relative"},o.createElement(K,null),o.createElement("div",{className:"text-[.5rem] absolute w-full flex justify-center space-x-1 text-dark-label"},o.createElement("div",{className:"w"},"x: ",a.y),o.createElement("div",{className:"w"},"y: ",a.x)))),o.createElement("div",{className:"pl-2"},o.createElement("label",{className:"font-mono text-[.7rem] text-gray-500 flex items-center"},o.createElement("input",{type:"checkbox",checked:e,onChange:e=>t(e.target.checked)}),o.createElement("span",{className:"ml-1"},"Show generated"))))),o.createElement("div",{className:"flex-1 relative"},o.createElement(F,null))))}m.render(o.createElement(o.StrictMode,null,o.createElement(D,null)),document.getElementById("root"));
