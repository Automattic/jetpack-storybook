import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Ur as s,t as c}from"./build-module-CR6EsQjA.js";import{b as l,g as u,r as d}from"./hooks-qXrN0vkI.js";import{Zt as f,et as p,t as m}from"./src-BdYBuA8Y.js";import"./constants-B1kGztHF.js";import{Lt as h,gt as g,mt as _,pt as v}from"./chart-tooltip-uPnCq2Uz.js";import{r as ee,t as te}from"./leaderboard-skeleton-BmV4oKX-.js";import{G as ne,K as re,N as y,S as b,Y as x,b as ie,v as ae,w as oe}from"./report-metric-B00BlpGu.js";import{t as se}from"./widget-state-Copnv-ns.js";import{C as ce,D as le,E as ue,O as S,S as de,T as fe,b as pe,k as C,t as w,w as me,x as T}from"./src-nchLbzmm.js";function he(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ge(e){let t=_(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:v(e.views,t),previousShare:r===void 0?void 0:v(r,t),delta:r===void 0?void 0:g(e.views,r)}})}function _e(e=[]){if(e.length===0)return[];let t=_(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:he(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:v(e.views,t),previousShare:n===void 0?void 0:v(n,t),delta:n===void 0?void 0:g(e.views,n),posts:ge(e.children??[])}})}var E,ve=t((()=>{w(),a(),E=`Untracked Authors`})),D,O,k,ye=t((()=>{D=`_root_19tfr_1`,O=`_content_19tfr_9`,k={root:D,content:O}}));function be({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:f,resetDrillDown:p}=d(),m=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!m&&!t&&!n&&p()},[u,m,t,n,p]);let h=(0,j.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,M.jsx)(ae,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...y({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,M.jsxs)(`div`,{className:k.content,children:[m&&(0,M.jsx)(oe,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,M.jsx)(se,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:i(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(te,{rows:10}),children:(0,M.jsx)(ee,{data:h,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function xe(){let{reportParams:e}=l(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=p((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,u=(0,j.useMemo)(()=>_e(n?.rows??[]),[n]),d=(0,j.useMemo)(()=>h(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(be,{rows:u,isLoading:c,isFetching:a,isError:u.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,M.jsx)(b,{children:(0,M.jsx)(ie,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{})})})}var j,M,Se=t((()=>{m(),w(),a(),j=e(n(),1),c(),ve(),ye(),M=o()})),N,Ce=t((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:f(!1,e)}})}function Te(e){return(0,U.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:Te,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),ue(),ce(),S(),pe(),ne(),Se(),Ce(),we(),U=o(),re(),W=`storybook/authors`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[T,C]},J={render:V,args:{withComparison:!0},decorators:[T,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(x(`stats/top-authors`,`loading`),()=>x(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(x(`stats/top-authors`,`error`),()=>x(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(x(`stats/top-authors`,`empty`),()=>x(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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