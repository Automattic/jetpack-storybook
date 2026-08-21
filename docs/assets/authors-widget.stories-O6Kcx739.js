import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-CDRs4YxF.js";import{$ as l,E as u,G as d,K as f,M as ee,S as p,Y as m,b as te,rt as h,w as g}from"./report-metric-J4TO8HRA.js";import{q as ne,qt as _,t as v}from"./src-nMZqQzNJ.js";import{r as re}from"./hooks-ygJRSNEp.js";import"./constants-B1kGztHF.js";import{Dt as ie,it as y,ot as b,rt as x}from"./chart-tooltip-CjR5Uh7U.js";import{r as ae,t as S}from"./leaderboard-skeleton-Dx9g3Vef.js";import{t as oe}from"./widget-state-JY18mPiB.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as C,t as w,w as me,x as T}from"./src-CiTPqeAH.js";function he(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ge(e){let t=y(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:x(e.views,t),previousShare:r===void 0?void 0:x(r,t),delta:r===void 0?void 0:b(e.views,r)}})}function _e(e=[]){if(e.length===0)return[];let t=y(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:he(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:x(e.views,t),previousShare:n===void 0?void 0:x(n,t),delta:n===void 0?void 0:b(e.views,n),posts:ge(e.children??[])}})}var E,ve=t((()=>{w(),a(),E=`Untracked Authors`})),D,O,k,ye=t((()=>{D=`_root_jzzhc_1`,O=`_content_jzzhc_9`,k={root:D,content:O}}));function be({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=re(),m=(0,j.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,j.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,j.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,M.jsx)(te,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...ee({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,M.jsxs)(`div`,{className:k.content,children:[m&&(0,M.jsx)(u,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,M.jsx)(oe,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:i(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(S,{rows:10}),children:(0,M.jsx)(ae,{data:h,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function xe(){let{reportParams:e}=h(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=ne((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,l=(0,j.useMemo)(()=>_e(n?.rows??[]),[n]),u=(0,j.useMemo)(()=>ie(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(be,{rows:l,isLoading:c,isFetching:a,isError:l.length===0&&o,refetch:s,withComparison:r,legendLabels:u}),(0,M.jsx)(g,{children:(0,M.jsx)(p,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{})})})}var j,M,Se=t((()=>{v(),w(),a(),j=e(n(),1),c(),ve(),ye(),M=o()})),N,Ce=t((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:_(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:_(!1,e)}})}function Te(e){return(0,U.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:Te,attributes:{reportParams:_(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),le(),se(),ue(),pe(),d(),Se(),Ce(),we(),U=o(),f(),W=`storybook/authors`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[T,C]},J={render:V,args:{withComparison:!0},decorators:[T,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`loading`),()=>m(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`error`),()=>m(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`empty`),()=>m(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'loading');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'error');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
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