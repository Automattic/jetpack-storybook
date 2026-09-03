import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{A as s,M as c,O as l,P as u}from"./build-module-CMD09Lk9.js";import{t as d}from"./src-BivkRgxG.js";import{D as f,t as p}from"./src-pjTcHlnM.js";function m(e){let[t,n]=(0,g.useState)(()=>Date.now());return(0,g.useEffect)(()=>{let e=setInterval(()=>n(Date.now()),v);return()=>clearInterval(e)},[]),t-e}function h({updatedAt:e,onRetry:t,isRetrying:n=!1,className:i}){let o=m(e),d=o<v?r(`Couldn't refresh. Showing data from less than a minute ago.`,`jetpack-premium-analytics-pkg`):a(r(`Couldn't refresh. Showing data from %s.`,`jetpack-premium-analytics-pkg`),f(new Date(e).toISOString(),new Date(e+o)));return(0,_.jsxs)(u,{intent:`warning`,className:i,spokenMessage:r(`Couldn't refresh. The numbers on screen may be out of date.`,`jetpack-premium-analytics-pkg`),children:[(0,_.jsx)(c,{children:d}),t&&(0,_.jsx)(s,{children:(0,_.jsx)(l,{variant:`outline`,onClick:t,disabled:n,loading:n,children:r(`Retry`,`jetpack-premium-analytics-pkg`)})})]})}var g,_,v,y=t((()=>{p(),d(),i(),g=e(n(),1),_=o(),v=60*1e3})),b,x,S,C,w,T,E;t((()=>{y(),b={title:`Packages/Premium Analytics/UI/StaleDataNotice`,component:h,tags:[`autodocs`],parameters:{docs:{description:{component:`Shown when a refresh failed while the data it was replacing is still on screen. The numbers stay: they are older than the reader asked for, not wrong — so this states their age instead of replacing them with an error.

The visible label ages on its own while the notice is mounted; the screen-reader announcement deliberately does not, so it is not repeated every minute. \`onRetry\` is left out where retrying cannot help (auth, permissions, a malformed response), and the button goes with it.`}}},argTypes:{updatedAt:{control:!1},onRetry:{control:!1},isRetrying:{control:`boolean`}}},x=e=>Date.now()-e*60*1e3,S={args:{updatedAt:x(5),onRetry:()=>{}}},C={name:`Without retry`,args:{updatedAt:x(42)}},w={args:{updatedAt:x(5),onRetry:()=>{},isRetrying:!0}},T={name:`Less than a minute old`,args:{updatedAt:Date.now(),onRetry:()=>{}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    updatedAt: minutesAgo(5),
    onRetry: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Without retry',
  args: {
    updatedAt: minutesAgo(42)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    updatedAt: minutesAgo(5),
    onRetry: () => {},
    isRetrying: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Less than a minute old',
  args: {
    updatedAt: Date.now(),
    onRetry: () => {}
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithoutRetry`,`Retrying`,`JustFetched`]}))();export{S as Default,T as JustFetched,w as Retrying,C as WithoutRetry,E as __namedExportsOrder,b as default};