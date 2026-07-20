import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{c as r,n as i,t as a}from"./build-module-Da_5_6n_.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{n as s,nt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-CMdavdRW.js";import{t as u,u as d}from"./build-module-DDCHq_4V.js";import{L as f,R as p,at as m,dt as h,er as g,i as _,tn as v}from"./chart-tooltip-GpHdAVzI.js";import{t as y}from"./leaderboard-chart-8NFbrbTX.js";import{H as ee,M as te,P as b,R as ne,b as re,j as ie,w as ae}from"./report-metric-FDsK4MBA.js";import{t as oe}from"./widget-state-BblrWOxE.js";import{C as se,S as x,T as ce,b as le,t as S,w as C,x as w}from"./src-DQaQSFBR.js";function T(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?i(`Untracked authors`,`jetpack-premium-analytics`):t}function ue(e){let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:f(e.views,t),previousShare:r===void 0?void 0:f(r,t),delta:r===void 0?void 0:p(e.views,r)}})}function de(e=[]){if(e.length===0)return[];let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map(e=>{let n=e.previousViews;return{id:e.key,label:T(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:f(e.views,t),previousShare:n===void 0?void 0:f(n,t),delta:n===void 0?void 0:p(e.views,n),posts:ue(e.children??[])}})}var E,D=t((()=>{S(),a(),E=`Untracked Authors`})),O,k,A,j,M,fe=t((()=>{O=`_root_12e14_1`,k=`_content_12e14_11`,A=`_avatar_12e14_21`,j=`_postLabel_12e14_30`,M={root:O,content:k,avatar:A,postLabel:j}}));function N({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:u}){let{drillDownItem:f,drillDown:p,resetDrillDown:m}=l(),h=(0,I.useMemo)(()=>f?e.find(e=>e.id===f)??null:null,[e,f]);(0,I.useEffect)(()=>{f&&!h&&!t&&!n&&m()},[f,h,t,n,m]);let g=(0,I.useMemo)(()=>h?h.posts.map(e=>{let t=e.link?(0,L.jsx)(d,{className:M.postLabel,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.title,children:e.title}):(0,L.jsx)(`span`,{className:M.postLabel,title:e.title,children:e.title});return{id:e.id,label:t,currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}):e.map(e=>({id:e.id,label:(0,L.jsx)(ae,{label:e.label,imageUrl:e.avatarUrl??void 0,imageAlt:r(i(`Avatar of %s`,`jetpack-premium-analytics`),e.label),imageClassName:M.avatar}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta,...e.posts.length>0&&{onClick:()=>p(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics`),e.label)}})),[e,h,p]),_=!!h;return(0,L.jsxs)(`div`,{className:M.content,children:[h&&(0,L.jsx)(re,{label:i(`All authors`,`jetpack-premium-analytics`),onClick:m}),(0,L.jsx)(oe,{isLoading:t,isFetching:n,isError:a,isEmpty:g.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:c,description:i(_?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(y,{data:g,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:u,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function P({max:e}){let{reportParams:t}=ee(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=v((0,I.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),u=(a||n.isPending)&&!s,d=(0,I.useMemo)(()=>de(r?.rows??[]),[r]),f=(0,I.useMemo)(()=>m(t),[t]);return(0,L.jsx)(N,{rows:d,isLoading:u,isFetching:o,isError:d.length===0&&c,refetch:l,withComparison:i,legendLabels:f})}function F({attributes:e={}}){return(0,L.jsx)(ne,{attributes:e,children:(0,L.jsx)(`div`,{className:M.root,children:(0,L.jsx)(P,{max:_(e.max,R)})})})}var I,L,R,z=t((()=>{h(),S(),a(),u(),I=e(n(),1),s(),D(),fe(),L=o(),R=7})),B,pe=t((()=>{a(),s(),B={name:`jpa/authors`,title:i(`Authors`,`jetpack-premium-analytics`),help:{content:i(`The authors whose content received the most views.`,`jetpack-premium-analytics`),links:[{label:i(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:c,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{max:7,reportParams:g(e)}})}function H(e){return(0,U.jsx)(F,{attributes:{max:7,reportParams:g(!1,e)}})}function me(e){return(0,U.jsx)(F,{...e})}function he({withComparison:e,...t}){return(0,U.jsx)(se,{...t,widgetType:G,renderModule:W,renderComponent:me,attributes:{max:7,reportParams:g(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),C(),le(),ie(),z(),pe(),U=o(),te(),W=`storybook/authors`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Authors`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w]},J={render:V,args:{withComparison:!0},decorators:[w]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(b(`stats/top-authors`,`loading`),()=>b(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(b(`stats/top-authors`,`error`),()=>b(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(b(`stats/top-authors`,`empty`),()=>b(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(he,{...e}),args:{...x,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'loading');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'error');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'empty');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral author
glyph and the introductory description).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <AuthorsDashboardStory {...args} />,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};