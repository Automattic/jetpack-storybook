import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{Ct as c,dt as l,er as u}from"./chart-tooltip-QdAL8Ewv.js";import{A as d,M as f,R as p,a as m,c as h,i as g,j as _,o as v}from"./report-metric-3HLY8J8_.js";import{t as y}from"./widget-state-DhIXtDuu.js";import{C as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-BIAuFjPC.js";function D(){let{data:e,isLoading:t,isFetching:n,isError:i,refetch:a}=c(),o=(0,k.useMemo)(()=>m(e?.adjustment),[e]),s=(0,k.useMemo)(()=>v(),[]);return(0,A.jsx)(y,{isLoading:t,isFetching:n,isError:i,isEmpty:o.length===0,error:{description:r(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:a}]},empty:{description:r(`No earnings adjustments to show yet.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(h,{data:o,fields:s,getItemId:j,initialView:g})})}function O({attributes:e={}}){return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(D,{})})}var k,A,j,M=t((()=>{l(),w(),i(),k=e(n(),1),A=a(),j=e=>e.id})),N,P=t((()=>{i(),s(),N={name:`jpa/wordads-adjustments-history`,title:r(`Adjustments History`,`jetpack-premium-analytics`),help:{content:r(`Ads Served is the number of ads we attempted to display (page impressions × available ad slots). Not every ad served results in a paid impression.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function F(e){return(0,I.jsx)(b,{...e,widgetType:{...N,presentation:`content-bleed`},renderModule:L,renderComponent:O,attributes:{reportParams:u()}})}var I,L,R,z,B,V,H,U,W;t((()=>{l(),_(),T(),C(),M(),P(),I=a(),f(),L=`storybook/wordads-adjustments-history`,R={title:`Packages/Premium Analytics/Widgets/WordAdsAdjustmentsHistory`,component:O,args:{attributes:{reportParams:u()}},tags:[`autodocs`],parameters:{docs:{description:{component:`The WordAds "Adjustments History" widget — earnings adjustments by period (amount, payment status), ported from the Jetpack Stats WordAds page.`}}}},z={decorators:[E]},B={tags:[`!autodocs`],decorators:[E],beforeEach:d(`loading`)},V={tags:[`!autodocs`],decorators:[E],beforeEach:d(`error`)},H={tags:[`!autodocs`],decorators:[E],beforeEach:d(`empty`)},U={render:e=>(0,I.jsx)(F,{...e}),args:{...x},argTypes:{...S}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  decorators: [withWidgetCanvas]
}`,...z.parameters?.docs?.source},description:{story:`Default state — the adjustments history table.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWordAdsEarningsState('loading')
}`,...B.parameters?.docs?.source},description:{story:`First load — the request is in flight.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWordAdsEarningsState('error')
}`,...V.parameters?.docs?.source},description:{story:`The fetch failed — the error state with a Retry action.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWordAdsEarningsState('empty')
}`,...H.parameters?.docs?.source},description:{story:`Resolved but empty — no adjustments history for this breakdown.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <WordAdsAdjustmentsHistoryDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...U.parameters?.docs?.source},description:{story:`Mounted inside the real dashboard frame (framed card, sizing, edit mode).`,...U.parameters?.docs?.description}}},W=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{z as Default,H as Empty,V as Error,B as Loading,U as WidgetDashboardWithWidget,W as __namedExportsOrder,R as default};