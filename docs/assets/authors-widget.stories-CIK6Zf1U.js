import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{St as s,pn as c,t as l,un as u}from"./src-DDj1aBY-.js";import{Bt as d,It as f,ht as p,m,o as ee,v as h,vt as g}from"./charts-provider-2mYnMhAK.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-CSG-rOVk.js";import{n as re,r as ie,s as _}from"./register-report-mocks-DdKF5Wr-.js";import{t as ae}from"./widget-state-DDbRIDUZ.js";import{n as oe,r as v}from"./with-story-router-B97aT_hv.js";import{i as se}from"./build-leaderboard-chart-data-y28r0HyW.js";import{f as ce,l as le,o as ue}from"./leaderboard-DytzB27b.js";import{H as de,M as y,W as b,t as x,x as fe}from"./src-DAf8uf0f.js";import{a as pe,g as S,h as me,i as he,m as ge,n as _e,p as ve,r as C}from"./with-widget-canvas-bPTYzmKS.js";import{n as ye,t as be}from"./use-no-views-empty-state-CWjwXn4N.js";function xe(e){let t=typeof e.label==`string`?e.label:``;return!t||t===w?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function Se(e){let t=p(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:g(e.views,t),previousShare:r===void 0?void 0:g(r,t),delta:r===void 0?void 0:f(e.views,r)}})}function Ce(e=[]){if(e.length===0)return[];let t=p(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,authorId:u(e.id??void 0),label:xe(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:g(e.views,t),previousShare:n===void 0?void 0:g(n,t),delta:n===void 0?void 0:f(e.views,n),posts:Se(e.children??[])}})}var w,we=t((()=>{l(),x(),a(),w=`Untracked Authors`})),T,E,D,O=t((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:c,empty:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=ee(),p=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,j.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,M.jsx)(de,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>{let t=e.authorId?b(e.authorId):void 0;return{id:e.id,...se({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}),[e,p,d]),h=!!p;return(0,M.jsxs)(`div`,{className:D.content,children:[p&&(0,M.jsx)(le,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,M.jsx)(ae,{isLoading:t,isFetching:n,isError:a,isEmpty:m.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:h?{description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:l,renderLoading:(0,M.jsx)(ne,{rows:10}),children:(0,M.jsx)(te,{chartTitle:i(`Popular authors`,`jetpack-premium-analytics-pkg`),data:m,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:c,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},columns:{label:i(h?`Posts`:`Authors`,`jetpack-premium-analytics-pkg`),metric:`views`}})})]})}function Te(){let{reportParams:e}=h(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:l}=s((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=a||t.isPending,f=(0,j.useMemo)(()=>Ce(n?.rows??[]),[n]),p=ye({isLoading:u,isError:c,isEmpty:f.length===0},i(`You don’t have authors recorded yet.`,`jetpack-premium-analytics-pkg`)),m=(0,j.useMemo)(()=>d(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{rows:f,isLoading:p.isLoading,isFetching:o,isError:f.length===0&&c,refetch:l,withComparison:r,legendLabels:m,empty:p.empty}),(0,M.jsxs)(ue,{children:[(0,M.jsx)(ce,{report:`authors`}),(0,M.jsx)(fe,{exporter:y,status:{isLoading:u,isFetching:o,isError:t.isError},rowCount:f.length})]})]})}function A({attributes:e={}}){return(0,M.jsx)(m,{attributes:e,children:(0,M.jsx)(`div`,{className:D.root,children:(0,M.jsx)(Te,{})})})}var j,M,Ee=t((()=>{l(),x(),a(),j=e(n(),1),we(),be(),O(),M=o()})),N,P,F,I,L,R,z,B,De=t((()=>{N=`jpa/authors`,P=`jpa/post-author`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:c(!1,e)}})}function Oe(e){return(0,U.jsx)(A,{...e})}function ke({withComparison:e,...t}){return(0,U.jsx)(ge,{...t,widgetType:G,renderModule:W,renderComponent:Oe,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{l(),me(),pe(),oe(),_e(),re(),Ee(),De(),U=o(),ie(),W=`storybook/authors`,G=he(B),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,v]},J={render:V,args:{withComparison:!0},decorators:[C,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,v],beforeEach:()=>(_(`stats/top-authors`,`loading`),()=>_(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,v],beforeEach:()=>(_(`stats/top-authors`,`error`),()=>_(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,v],beforeEach:()=>(_(`stats/top-authors`,`empty`),()=>_(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...ve,withComparison:!0},argTypes:{...S,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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