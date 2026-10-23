import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{St as s,pn as c,t as l,un as u}from"./src-5g9sGwvT.js";import{$t as d,F as f,Ft as p,Mt as m,Yt as h,f as ee,o as te,w as g,z as _}from"./charts-provider-CBx594al.js";import{t as v}from"./widget-state-FcIV3JkU.js";import"./rows-DoJXoHhN.js";import{r as ne,t as re}from"./leaderboard-skeleton-BxKH0Cpf.js";import{a as ie,o as ae,u as y}from"./widget-state-BN83rL3o.js";import{n as oe,r as b}from"./with-story-router-CyVN4A4U.js";import{i as se}from"./leaderboard-D_bka6t7.js";import{i as ce}from"./build-leaderboard-chart-data-nH4WvXBU.js";import{A as le,C as ue,H as de,M as fe,N as pe,T as me,U as he,V as ge,W as _e,j as x,t as S}from"./src-BypXxmxa.js";import{n as ve,t as ye}from"./use-no-views-empty-state-C9ap2g2u.js";function be(e){let t=typeof e.label==`string`?e.label:``;return!t||t===C?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function xe(e){let t=m(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:p(e.views,t),previousShare:r===void 0?void 0:p(r,t),delta:r===void 0?void 0:h(e.views,r)}})}function Se(e=[]){if(e.length===0)return[];let t=m(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,authorId:u(e.id??void 0),label:be(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:p(e.views,t),previousShare:n===void 0?void 0:p(n,t),delta:n===void 0?void 0:h(e.views,n),posts:xe(e.children??[])}})}var C,Ce=e((()=>{l(),S(),a(),C=`Untracked Authors`})),w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function O({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:c,empty:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=te(),p=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,j.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,M.jsx)(ue,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>{let t=e.authorId?me(e.authorId):void 0;return{id:e.id,...ce({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}),[e,p,d]),h=!!p;return(0,M.jsxs)(`div`,{className:E.content,children:[p&&(0,M.jsx)(se,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,M.jsx)(v,{isLoading:t,isFetching:n,isError:a,isEmpty:m.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:h?{description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:l,renderLoading:(0,M.jsx)(re,{rows:10}),children:(0,M.jsx)(ne,{chartTitle:i(`Popular authors`,`jetpack-premium-analytics-pkg`),data:m,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:c,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},columns:{label:i(h?`Posts`:`Authors`,`jetpack-premium-analytics-pkg`),metric:`views`}})})]})}function k(){let{reportParams:e}=_(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:l}=s((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=a||t.isPending,f=(0,j.useMemo)(()=>Se(n?.rows??[]),[n]),p=ve({isLoading:u,isError:c,isEmpty:f.length===0},i(`You don’t have authors recorded yet.`,`jetpack-premium-analytics-pkg`)),m=(0,j.useMemo)(()=>d(e),[e]);return ee({report:`authors`,csv:{exporter:g,status:{isLoading:u,isFetching:o,isError:t.isError},rowCount:f.length}}),(0,M.jsx)(O,{rows:f,isLoading:p.isLoading,isFetching:o,isError:f.length===0&&c,refetch:l,withComparison:r,legendLabels:m,empty:p.empty})}function A({attributes:e={}}){return(0,M.jsx)(f,{attributes:e,children:(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(k,{})})})}var j,M,we=e((()=>{l(),S(),a(),j=t(n(),1),Ce(),ye(),D(),M=o()})),N,P,F,I,L,R,z,B,Te=e((()=>{N=`jpa/authors`,P=`jpa/post-author`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:c(!1,e)}})}function Ee(e){return(0,U.jsx)(A,{...e})}function De({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:Ee,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),he(),pe(),oe(),le(),ie(),we(),Te(),U=o(),ae(),W=`storybook/authors`,G=fe(B),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,b]},J={render:V,args:{withComparison:!0},decorators:[x,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(y(`stats/top-authors`,`loading`),()=>y(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(y(`stats/top-authors`,`error`),()=>y(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(y(`stats/top-authors`,`empty`),()=>y(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...ge,withComparison:!0},argTypes:{..._e,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};