"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4016],{74252:function(e,t,n){n.d(t,{AR:function(){return i},Ie:function(){return r},V8:function(){return l},YS:function(){return a}}),n(8109),n(8960),n(14217);var s=n(22319),l="_15qpb3ht _1286nb1a1 _1286nb1181",r=(0,s.c)({defaultClassName:"_15qpb3hg _1286nb12iv _1286nb128v _1286nb1241 _1286nb12e1 _1286nb12tv _1286nb12uj _1286nb19v _1286nb1aj _1286nb1r7 _1286nb197 _1286nb16bu _1286nb16hi",variantClassNames:{position:{left:"_15qpb3hh _1286nb115p _1286nb1zl",right:"_15qpb3hi _1286nb1p1 _1286nb1ix"},style:{default:"_15qpb3hf _1286nb18gc",resources:"_15qpb3ha _1286nb12tv _1286nb12uj _1286nb176c",image:"_15qpb3ha _1286nb12tv _1286nb12uj _1286nb176c"}},defaultVariants:{position:"left",style:"default"},compoundVariants:[[{position:"left",style:"default"},"_15qpb3hm"],[{position:"right",style:"default"},"_15qpb3hn"],[{position:"right",style:"resources"},"_15qpb3ho"],[{position:"left",style:"resources"},"_15qpb3hp"],[{position:"right",style:"image"},"_15qpb3hq"],[{position:"left",style:"image"},"_15qpb3hr"]]}),i=(0,s.c)({defaultClassName:"_15qpb3h5 _15qpb3h2 _1286nb1a1 _1286nb197 _1286nb18g _1286nb1g",variantClassNames:{fit:{false:"_15qpb3h6",true:"_15qpb3h4 _1286nb121p _1286nb11n1 _1286nb1k"},overflowScrolling:{true:"_15qpb3h8"}},defaultVariants:{fit:!1},compoundVariants:[]}),a="_15qpb3h0"},3586:function(e,t,n){n.d(t,{W:function(){return u}});var s=n(97458),l=n(51837),r=n(9086),i=n(92901),a=n(74252);let u=e=>{let{position:t,style:n,onClick:u}=e;return(0,s.jsx)("button",{className:a.Ie({position:t,style:n}),onClick:u,children:(0,s.jsx)(i.J,{as:"left"===t?r.Z:l.Z,size:"base",className:a.V8})})}},14016:function(e,t,n){let s;n.d(t,{_l:function(){return u},S$:function(){return f}});var l=n(97458),r=n(52983),i=n(74252);let a=e=>{let{active:t=!1,ref:n}=e,[s,l]=(0,r.useState)(t),[i,a]=(0,r.useState)(!1),[u,o]=(0,r.useState)(!1),[c,f]=(0,r.useState)(0),[b,v]=(0,r.useState)(0),[_,h]=(0,r.useState)(0),[d]=(0,r.useState)(5),p=(0,r.useCallback)(e=>{let t=n.current;t&&(a(!0),h(e.pageX-t.offsetLeft),f(t.scrollLeft))},[n]),m=(0,r.useCallback)(()=>{a(!1)},[]),g=(0,r.useCallback)(e=>{let t=n.current;if(t&&i){e.preventDefault();let n=c-(e.pageX-t.offsetLeft-_);Math.abs(t.scrollLeft-n)>d&&(o(!0),v(n),t.scrollLeft=n)}},[i,n,c,_,d]),q=(0,r.useCallback)(e=>{u&&(e.preventDefault(),e.stopPropagation()),o(!1)},[u]);return(0,r.useEffect)(()=>{if(l(t),s){let e=n.current;return e&&(e.addEventListener("mousedown",p),e.addEventListener("mouseleave",m),e.addEventListener("mouseup",m),e.addEventListener("mousemove",g),e.addEventListener("click",q)),()=>{e&&(e.removeEventListener("mousedown",p),e.removeEventListener("mouseleave",m),e.removeEventListener("mouseup",m),e.removeEventListener("mousemove",g),e.removeEventListener("click",q))}}},[t,s,p,m,g,q,n]),{isActive:s,position:b}},u=e=>{let{active:t=!0,children:n,fit:s=!1}=e,u=(0,r.useRef)(null),{isActive:o}=a({active:t,ref:u});return(0,l.jsx)("div",{ref:u,className:o?i.AR({fit:s}):void 0,children:n})};var o=n(78364),c=n(3586);let f=e=>{let{children:t,style:n="default",overflowScrolling:u=!0,className:f}=e,b=(0,r.useRef)(null),v=(0,r.useRef)(null),[_,h]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),{position:m}=a({active:!0,ref:b}),g=(0,r.useCallback)(()=>{let e=null==b?void 0:b.current,t=null==v?void 0:v.current;if(e&&t){let n=e.offsetWidth,s=t.offsetWidth,l=e.scrollLeft>=s-n;h(e.scrollLeft>0),p(s>n&&!l)}},[]),q=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null==b?void 0:b.current;if(t){let n=t.offsetWidth*(e?1:-1);t.scroll({left:t.scrollLeft+n/2,behavior:"smooth"}),clearTimeout(s),s=setTimeout(g,500)}},[g]);return(0,r.useEffect)(()=>{g()},[m,g]),(0,r.useEffect)(()=>{let e=null==v?void 0:v.current,t=new ResizeObserver(g);return e&&t.observe(e),()=>{e&&t.unobserve(e)}},[g]),(0,l.jsxs)("div",{className:(0,o.Z)(i.YS,f),children:[(0,l.jsx)("div",{ref:b,className:i.AR({overflowScrolling:u}),children:(0,l.jsx)("div",{ref:v,children:t})}),_&&(0,l.jsx)(c.W,{position:"left",style:n,onClick:()=>q()}),d&&(0,l.jsx)(c.W,{position:"right",style:n,onClick:()=>q(!0)})]})}},51837:function(e,t,n){var s=n(97458);t.Z=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,s.jsx)("path",{d:"M262.145 397 98.822 560.323c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.763 35.355 0l181-181c4.882-4.881 7.323-11.279 7.323-17.677s-2.441-12.796-7.322-17.678l-181-181c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"})})},9086:function(e,t,n){var s=n(97458);t.Z=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,s.jsx)("path",{d:"m151.856 397 163.322-163.322c9.763-9.763 9.763-25.592 0-35.355s-25.592-9.763-35.355 0l-181 181C93.941 384.203 91.5 390.602 91.5 397s2.441 12.796 7.322 17.678l181 181c9.764 9.763 25.592 9.763 35.355 0s9.763-25.592 0-35.355z"})})}}]);