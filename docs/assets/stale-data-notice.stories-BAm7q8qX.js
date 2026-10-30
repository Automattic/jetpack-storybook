import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{d as s,l as c}from"./floating-ui.react-dom-g77GrRsX.js";import{G as l,U as u,V as d,z as f}from"./build-module-BN2Djb9A.js";import{t as p}from"./src-COiyFcN1.js";import{N as m,t as h}from"./src-IVwX_Vnu.js";function g(e){let[t,n]=(0,v.useState)(()=>Date.now());return(0,v.useEffect)(()=>{let e=setInterval(()=>n(Date.now()),b);return()=>clearInterval(e)},[]),t-e}function _({updatedAt:e,onRetry:t,isRetrying:n=!1,className:a}){let o=g(e),c=o<b?i(`Couldn't refresh. Showing data from less than a minute ago.`,`jetpack-premium-analytics-pkg`):r(i(`Couldn't refresh. Showing data from %s.`,`jetpack-premium-analytics-pkg`),m(new Date(e).toISOString(),new Date(e+o))),p=i(`Couldn't refresh. The numbers on screen may be out of date.`,`jetpack-premium-analytics-pkg`);return(0,v.useEffect)(()=>{s(p,`polite`)},[p]),(0,y.jsxs)(l,{intent:`warning`,className:a,children:[(0,y.jsx)(u,{children:c}),t&&(0,y.jsx)(d,{children:(0,y.jsx)(f,{variant:`outline`,onClick:t,disabled:n,loading:n,children:i(`Retry`,`jetpack-premium-analytics-pkg`)})})]})}var v,y,b,x=e((()=>{h(),p(),c(),a(),v=t(n(),1),y=o(),b=60*1e3})),S,C,w,T,E,D,O;e((()=>{x(),S={title:`Packages/Premium Analytics/UI/StaleDataNotice`,component:_,tags:[`autodocs`],parameters:{docs:{description:{component:`Shown when a refresh failed while the data it was replacing is still on screen. The numbers stay: they are older than the reader asked for, not wrong — so this states their age instead of replacing them with an error.

The visible label ages on its own while the notice is mounted; the screen-reader announcement deliberately does not, so it is not repeated every minute. \`onRetry\` is left out where retrying cannot help (auth, permissions, a malformed response), and the button goes with it.`}}},argTypes:{updatedAt:{control:!1},onRetry:{control:!1},isRetrying:{control:`boolean`}}},C=e=>Date.now()-e*60*1e3,w={args:{updatedAt:C(5),onRetry:()=>{}}},T={name:`Without retry`,args:{updatedAt:C(42)}},E={args:{updatedAt:C(5),onRetry:()=>{},isRetrying:!0}},D={name:`Less than a minute old`,args:{updatedAt:Date.now(),onRetry:()=>{}}},O=[`Default`,`WithoutRetry`,`Retrying`,`JustFetched`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    updatedAt: minutesAgo(5),
    onRetry: () => {}
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Without retry',
  args: {
    updatedAt: minutesAgo(42)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    updatedAt: minutesAgo(5),
    onRetry: () => {},
    isRetrying: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Less than a minute old',
  args: {
    updatedAt: Date.now(),
    onRetry: () => {}
  }
}`,...D.parameters?.docs?.source}}}}))();export{w as Default,D as JustFetched,E as Retrying,T as WithoutRetry,O as __namedExportsOrder,S as default};