import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{c as r,n as i,t as a}from"./build-module-Da_5_6n_.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{n as s,nt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-6AFKnQdU.js";import{H as u,V as d,an as f,c as p,ht as m,ir as h,lt as g}from"./chart-tooltip-BvKnA4Ej.js";import{t as _}from"./leaderboard-chart-TIHSX7P7.js";import{F as v,M as ee,N as y,U as te,b as ne,w as b,z as x}from"./report-metric-BBgOiYJZ.js";import{t as S}from"./widget-state-Dq0PZ7To.js";import{C,S as re,T as ie,b as ae,t as w,w as oe,x as T}from"./src-Vd2hm5Bb.js";function E(e){let t=typeof e.label==`string`?e.label:``;return!t||t===O?i(`Untracked authors`,`jetpack-premium-analytics`):t}function D(e){let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:d(e.views,t),previousShare:r===void 0?void 0:d(r,t),delta:r===void 0?void 0:u(e.views,r)}})}function se(e=[]){if(e.length===0)return[];let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map(e=>{let n=e.previousViews;return{id:e.key,label:E(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:d(e.views,t),previousShare:n===void 0?void 0:d(n,t),delta:n===void 0?void 0:u(e.views,n),posts:D(e.children??[])}})}var O,k=t((()=>{w(),a(),O=`Untracked Authors`})),A,j,M,ce=t((()=>{A=`_root_buj5x_1`,j=`_content_buj5x_11`,M={root:A,content:j}}));function le({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:u}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=l(),m=(0,P.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,P.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,P.useMemo)(()=>m?m.posts.map(e=>({id:e.id,...b({label:e.title,media:{kind:`none`},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...b({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,F.jsxs)(`div`,{className:M.content,children:[m&&(0,F.jsx)(ne,{label:i(`All authors`,`jetpack-premium-analytics`),onClick:p}),(0,F.jsx)(S,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:c,description:i(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(_,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:u,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function ue({max:e}){let{reportParams:t}=te(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=f((0,P.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),u=(a||n.isPending)&&!s,d=(0,P.useMemo)(()=>se(r?.rows??[]),[r]),p=(0,P.useMemo)(()=>g(t),[t]);return(0,F.jsx)(le,{rows:d,isLoading:u,isFetching:o,isError:d.length===0&&c,refetch:l,withComparison:i,legendLabels:p})}function N({attributes:e={}}){return(0,F.jsx)(x,{attributes:e,children:(0,F.jsx)(`div`,{className:M.root,children:(0,F.jsx)(ue,{max:p(e.max,I)})})})}var P,F,I,L=t((()=>{m(),w(),a(),P=e(n(),1),s(),k(),ce(),F=o(),I=7})),R,z=t((()=>{a(),s(),R={name:`jpa/authors`,title:i(`Authors`,`jetpack-premium-analytics`),help:{content:i(`The authors whose content received the most views.`,`jetpack-premium-analytics`),links:[{label:i(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:c,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function B({withComparison:e}){return(0,U.jsx)(N,{attributes:{max:7,reportParams:h(e)}})}function V(e){return(0,U.jsx)(N,{attributes:{max:7,reportParams:h(!1,e)}})}function H(e){return(0,U.jsx)(N,{...e})}function de({withComparison:e,...t}){return(0,U.jsx)(C,{...t,widgetType:G,renderModule:W,renderComponent:H,attributes:{max:7,reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),oe(),ae(),ee(),L(),z(),U=o(),y(),W=`storybook/authors`,G={name:R.name,title:R.title,icon:R.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Authors`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:B,args:{withComparison:!1},decorators:[T]},J={render:B,args:{withComparison:!0},decorators:[T]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(de,{...e}),args:{...re,withComparison:!0},argTypes:{...ie,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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