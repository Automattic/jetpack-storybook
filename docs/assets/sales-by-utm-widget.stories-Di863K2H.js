import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{D as i,S as a,i as o,l as s,r as c,t as l,u}from"./hooks-BAU6YHLN.js";import{g as d,o as f,p,t as m}from"./src-0F6zNzYM.js";import{j as h,t as g,u as _}from"./helpers-ChVF4wFH.js";import{t as v}from"./leaderboard-chart-CcABSZ_e.js";import{n as y,t as b}from"./with-widget-root-Bks5FeNc.js";import{i as x,n as S,t as C}from"./widget-loading-overlay-CMw8rYvl.js";function w({view:e}){let{reportParams:t}=s(),{primary:n,hasComparison:r,isLoading:i,isFetching:o,hasData:l,isError:u,error:m,refetch:g}=a((0,T.useMemo)(()=>({...t,view:e}),[t,e])),y=i&&!l,b=o&&l,x=(0,T.useMemo)(()=>_(n.data),[n.data]),C=(0,T.useMemo)(()=>h(t),[t]),w=(0,T.useMemo)(()=>{switch(e){case`source`:return f;case`channel`:return p;case`campaign`:return d;default:return f}},[e]);return c(u,m,g)?null:y?(0,E.jsx)(S,{}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(v,{data:x,withComparison:r,legendLabels:C,emptyStateIcon:w,style:{"--a8c--charts--leaderboard--bar--border-radius":`0 1px 1px 0`}}),b&&(0,E.jsx)(S,{})]})}var T,E,D=t((()=>{u(),m(),T=e(n(),1),x(),C(),o(),g(),l(),E=r()})),O,k,A,j,M,N,P,F,I,L;t((()=>{u(),b(),D(),O=r(),k={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/SalesByUtm`,component:w,tags:[`autodocs`],decorators:[y(i(!0))],argTypes:{view:{control:`select`,options:[`source`,`channel`,`campaign`],description:`The order attribution view to display`}},parameters:{docs:{description:{component:`Displays a leaderboard chart showing sales breakdown by UTM parameters. Supports three views: source (referral source), channel (marketing channel), and campaign (campaign name).`}}}},A={args:{view:`source`}},j={args:{view:`channel`}},M={args:{view:`campaign`}},N=e=>t=>(0,O.jsx)(`div`,{style:{width:e,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`},children:(0,O.jsx)(t,{})}),P={args:{view:`source`},decorators:[N(`280px`)]},F={args:{view:`source`},decorators:[N(`448px`)]},I={args:{view:`source`},decorators:[N(`640px`)]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'source'
  }
}`,...A.parameters?.docs?.source},description:{story:`Sales by Source - shows referral sources driving sales`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'channel'
  }
}`,...j.parameters?.docs?.source},description:{story:`Sales by Channel - shows marketing channels driving sales`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'campaign'
  }
}`,...M.parameters?.docs?.source},description:{story:`Sales by Campaign - shows campaign performance`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'source'
  },
  decorators: [createSizeDecorator('280px')]
}`,...P.parameters?.docs?.source},description:{story:`Small container (280px / xs breakpoint)
Tests compact layout with comparison enabled.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'source'
  },
  decorators: [createSizeDecorator('448px')]
}`,...F.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint)
Tests standard tile size with comparison.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'source'
  },
  decorators: [createSizeDecorator('640px')]
}`,...I.parameters?.docs?.source},description:{story:`Large container (640px / xl breakpoint)
Tests expanded layout with full data visibility.`,...I.parameters?.docs?.description}}},L=[`Source`,`Channel`,`Campaign`,`SizeSmall`,`SizeMedium`,`SizeLarge`]}))();export{M as Campaign,j as Channel,I as SizeLarge,F as SizeMedium,P as SizeSmall,A as Source,L as __namedExportsOrder,k as default};