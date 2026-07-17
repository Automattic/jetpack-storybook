import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{M as o,n as s}from"./build-module-DmVuor49.js";import{R as c,W as ee,t as l}from"./build-module-Bw_mQw8y.js";import{t as te,v as u}from"./src-B3le4dug.js";import{Yn as d,ar as f,ut as p,yn as ne}from"./chart-tooltip-BjQVvEOi.js";import{t as m}from"./leaderboard-chart-B9n5uPlI.js";import{C as h,S as re,T as g,k as ie}from"./report-metric-dQWVm9Cg.js";import{t as ae}from"./widget-state-iNA6qs6c.js";import{S as oe,b as _,t as v,x as y,y as b}from"./src-DdOdgMkN.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";var C,w,T,E,D,O=e((()=>{C=`_root_19s7c_1`,w=`_content_19s7c_9`,T=`_itemLabel_19s7c_17`,E=`_itemLabelText_19s7c_23`,D={root:C,content:w,itemLabel:T,itemLabelText:E}}));function se(e){let t=e.replace(/-/g,`_`);return t.startsWith(`custom_`)?`custom`:t.startsWith(`google_plus`)?`google_plus`:t===`jetpack_whatsapp`?`whatsapp`:t}function ce(e){return A[e]??e.split(`_`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function le(e,t){let n=new Map;return Object.entries(e).forEach(([e,t])=>{if(!e.startsWith(k))return;let r=Number(t)||0;if(r<=0)return;let i=se(e.slice(7)),a=n.get(i);n.set(i,{service:i,label:ce(i),value:(a?.value??0)+r})}),[...n.values()].sort((e,t)=>t.value-e.value).slice(0,t>0?t:void 0)}function ue({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:a}=ne(),o=le(t?.stats??{},e);return{data:o,isLoading:n,isFetching:r,isError:o.length===0&&i,refetch:a}}var k,A,j=e((()=>{n(),p(),k=`shares_`,A={facebook:`Facebook`,twitter:`Twitter`,linkedin:`LinkedIn`,tumblr:`Tumblr`,pinterest:`Pinterest`,reddit:`Reddit`,pocket:`Pocket`,telegram:`Telegram`,whatsapp:`WhatsApp`,skype:`Skype`,google_plus:`Google+`,print:`Print`,email:`Email`,press_this:`Press This`,custom:t(`Custom share buttons`,`jetpack-premium-analytics`)}}));function M({max:e=10}){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=ue({max:e}),l=(0,i.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map((t,n)=>({id:`${n}-${t.service}`,label:(0,P.jsx)(c,{align:`center`,className:D.itemLabel,children:(0,P.jsx)(ee,{className:D.itemLabelText,children:t.label})}),currentValue:t.value,currentShare:e>0?t.value/e*100:0}))},[n]);return(0,P.jsx)(c,{className:D.root,children:(0,P.jsx)(`div`,{className:D.content,children:(0,P.jsx)(ae,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:{description:t(`We couldn't load shares. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:s}]},empty:{icon:u,description:t(`Learn where your content has been shared the most.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(m,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})})})}function N({attributes:e={}}){return(0,P.jsx)(ie,{attributes:e,children:(0,P.jsx)(M,{max:e.max})})}var P,F=e((()=>{v(),te(),a(),n(),l(),O(),j(),P=r()})),I,L=e((()=>{n(),s(),I={name:`jpa/shares`,title:t(`Shares`,`jetpack-premium-analytics`),help:{content:t(`Learn where your content has been shared the most.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function R(e){return f.removeQueries({queryKey:[`stats`,`site`]}),g(W,e),()=>{g(W,null),f.removeQueries({queryKey:[`stats`,`site`]})}}function z({withComparison:e}){return(0,H.jsx)(N,{attributes:{max:10,reportParams:d(e)}})}function B(e){return(0,H.jsx)(N,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(_,{...t,widgetType:G,renderModule:U,renderComponent:B,attributes:{max:10,reportParams:d(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),y(),x(),re(),F(),L(),H=r(),h(),U=`storybook/shares`,W=`proxy/v1.1/stats`,G={name:I.name,title:I.title,icon:I.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Shares`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Shares" widget. Lists each social network the site's content was shared to, ranked by share count. Ported from the Jetpack Stats Shares module.`}}}},q={render:z,args:{withComparison:!1},decorators:[S]},J={render:z,args:{withComparison:!0},decorators:[S],parameters:{docs:{description:{story:`The Shares module has no comparison data, so no period-over-period deltas are shown.`}}}},Y={render:()=>z({withComparison:!1}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>R(`loading`)},X={render:()=>z({withComparison:!1}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>R(`error`)},Z={render:()=>z({withComparison:!1}),tags:[`!autodocs`],decorators:[S],beforeEach:()=>R(`empty`)},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...b,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderShares,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked site summary.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderShares,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The Shares module has no comparison data, so no period-over-period deltas are shown.'
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison state — the dashboard's comparison \`reportParams\` are present, but the
site summary has no comparison period, so the widget renders the same current
counts without period-over-period deltas.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderShares({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the all-time site summary is in flight, so the widget shows its
loading state. The mock never resolves for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderShares({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('error')
}`,...X.parameters?.docs?.source},description:{story:`The site-summary request failed: the widget shows its shares-specific error
state with a Retry action.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderShares({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved without positive share counts: the widget shows its empty-state
megaphone and guidance copy.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SharesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};