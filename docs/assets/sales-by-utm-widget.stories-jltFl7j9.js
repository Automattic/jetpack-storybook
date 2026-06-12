import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{c as n,h as r,l as i,n as a,r as o,t as s,v as c}from"./hooks-DWsBOYtT.js";import{eS as l,px as u}from"./iframe-BfgWixbs.js";import{c as d,i as f,l as p,t as m}from"./src-DNkn6TAd.js";import{c as h,t as g,v as _}from"./helpers-B-JJI6iz.js";import{t as v}from"./leaderboard-chart-Dly7f0ZB.js";import{a as y,n as b,o as x,r as S,t as C}from"./widget-loading-overlay-DAlzNJRA.js";function w({view:e}){let{reportParams:t}=n(),{primary:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,error:m,refetch:g}=r((0,T.useMemo)(()=>({...t,view:e}),[t,e])),y=s&&!l,x=c&&l,S=(0,T.useMemo)(()=>h(i.data),[i.data]),C=(0,T.useMemo)(()=>_(t),[t]),w=(0,T.useMemo)(()=>{switch(e){case`source`:return f;case`channel`:return d;case`campaign`:return p;default:return f}},[e]);return a(u,m,g)?null:y?(0,E.jsx)(b,{}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(v,{data:S,withComparison:o,legendLabels:C,emptyStateIcon:w,style:{"--a8c--charts--leaderboard--bar--border-radius":`0 1px 1px 0`}}),x&&(0,E.jsx)(b,{})]})}var T,E,D=e((()=>{i(),m(),T=t(l(),1),S(),C(),o(),g(),s(),E=u()})),O,k,A,j,M,N,P,F,I,L;e((()=>{i(),y(),D(),O=u(),k={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/SalesByUtm`,component:w,tags:[`autodocs`],decorators:[x(c(!0))],argTypes:{view:{control:`select`,options:[`source`,`channel`,`campaign`],description:`The order attribution view to display`}},parameters:{docs:{description:{component:`Displays a leaderboard chart showing sales breakdown by UTM parameters. Supports three views: source (referral source), channel (marketing channel), and campaign (campaign name).`}}}},A={args:{view:`source`}},j={args:{view:`channel`}},M={args:{view:`campaign`}},N=e=>t=>(0,O.jsx)(`div`,{style:{width:e,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`},children:(0,O.jsx)(t,{})}),P={args:{view:`source`},decorators:[N(`280px`)]},F={args:{view:`source`},decorators:[N(`448px`)]},I={args:{view:`source`},decorators:[N(`640px`)]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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