"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7548],{7548:function(n,l,e){e.d(l,{j:function(){return C}});var t={};e.r(t),e.d(t,{button:function(){return s},inline:function(){return i},span:function(){return c}});var o=e(97458),a=e(32748);e(8109),e(8960),e(30326);var r=e(22319),s=(0,r.c)({defaultClassName:"_bglng85 _1286nb12j7 _1286nb1297 _1286nb123v _1286nb12dv _1286nb14kp _1286nb14m1 _1286nb14nd _1286nb14op _1286nb12rp _1286nb12od _1286nb13pv _1286nb119",variantClassNames:{mode:{follow:"_bglng82 _1286nb16hc _1286nb17xc _1286nb1839",following:"_bglng84 _1286nb16hc _1286nb16p0 _1286nb17xc _1286nb18b0"}},defaultVariants:{mode:"follow"},compoundVariants:[]}),i=(0,r.c)({defaultClassName:"_bglng8e _bglng89 _1286nb119",variantClassNames:{mode:{follow:"_bglng8b _1286nb16hc",following:"_bglng8d _1286nb16hc _1286nb16p0"}},defaultVariants:{mode:"follow"},compoundVariants:[]}),c="_bglng8h",b=e(96005),u=e(42011),_=e(17417),f=e(52983),d=e(51835),w=e(95815);let h=async()=>{let n=await fetch("/api/social/follow");if(!n.ok)throw Error();return await n.json()},g=(0,d.cn)({key:"userFollowsState",default:[],effects:[n=>{let{setSelf:l}=n;(async()=>{let n=async()=>await h();l(await n())})()}]}),m=(0,d.CG)({key:"authorUserFollow",get:n=>{let{id:l}=n;return n=>{let{get:e}=n;return!!e(w.UA)&&e(g).includes(l)}},set:n=>{let{id:l}=n;return(n,e)=>{let{get:t,set:o}=n,a=t(g);o(g,e?a.filter(n=>n!==l):[...a,l])}}}),p=async(n,l)=>{if(!(await fetch("/api/social/follow?id=".concat(l),{method:n?"DELETE":"PUT"})).ok)throw Error("There was a problem toggling the follow")};var k=e(62168);let v=(n,l)=>{let e=(0,k.PN)(),t={event:"ga4event",event_name:"follow_author",action:"follow_author",author_name:n,location:l,category:"follow-contributor"};return()=>e(t)},N=(n,l,e)=>{let[t,o]=(0,f.useState)(!0),{openToast:a}=(0,_.x_)(),{loginUrl:r,setLoginCookies:s}=(0,b.J)(),i=(0,u.d)(),[c,w]=(0,d.FV)(m({id:n})),h=v(l,e),g=(0,f.useCallback)(()=>{if(!i){s(),window.location.href=r;return}o(!1),p(c,n).then(()=>w(c)).then(()=>!c&&h()).catch(()=>a()).finally(()=>o(!0))},[i,c,n,s,r,w,h,a]);return{following:c,disabled:!t,onClick:g}},C=n=>{let{id:l,name:e,location:r,buttonStyle:s="button"}=n,{t:i}=(0,a.$G)("common"),{following:b,onClick:u,disabled:_}=N(l,e,r),f="inline"===s?"inline":"button";return b?(0,o.jsxs)("button",{className:t[f]({mode:"following"}),onClick:u,disabled:_,children:[(0,o.jsx)("span",{className:c,children:i("following")}),(0,o.jsx)("span",{className:c,children:i("unfollow")})]}):(0,o.jsx)("button",{className:t[f](),onClick:u,disabled:_,children:i("follow")})}}}]);