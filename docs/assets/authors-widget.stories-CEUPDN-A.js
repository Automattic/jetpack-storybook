import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{f as r,n as i,t as a}from"./build-module-yGZutq_9.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Ur as s,t as c}from"./build-module-zwSmKorH.js";import{b as l,en as u,g as d,r as ee,rn as f,tn as p,wn as m}from"./hooks-H28asq8p.js";import{$t as h,nt as te,r as g}from"./date-period-dropdown-5kz5N99X.js";import"./constants-B1kGztHF.js";import{r as ne,t as re}from"./leaderboard-skeleton-Db2XF78C.js";import{i as ie,r as ae,s as _}from"./register-report-mocks-CEKqpYHL.js";import{S as oe,b as se,j as ce,v,w as y}from"./report-metric-WGVrfzDg.js";import{t as le}from"./widget-state-LZ3Z03M8.js";import{t as b}from"./src-BgU_lyfh.js";import{a as ue,c as de,d as x,i as fe,l as pe,n as me,o as he,r as S,s as ge,u as _e}from"./with-widget-canvas-jQDAMloQ.js";function ve(e){let t=typeof e.label==`string`?e.label:``;return!t||t===C?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ye(e){let t=p(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:u(e.views,t),previousShare:r===void 0?void 0:u(r,t),delta:r===void 0?void 0:f(e.views,r)}})}function be(e=[]){if(e.length===0)return[];let t=p(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ve(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:u(e.views,t),previousShare:n===void 0?void 0:u(n,t),delta:n===void 0?void 0:f(e.views,n),posts:ye(e.children??[])}})}var C,xe=t((()=>{b(),a(),C=`Untracked Authors`})),w,T,E,D=t((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function O({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=ee(),p=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,j.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,M.jsx)(v,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...ce({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,p,d]),h=!!p;return(0,M.jsxs)(`div`,{className:E.content,children:[p&&(0,M.jsx)(y,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,M.jsx)(le,{isLoading:t,isFetching:n,isError:a,isEmpty:m.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:i(h?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(re,{rows:10}),children:(0,M.jsx)(ne,{data:m,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function k(){let{reportParams:e}=l(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=te((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,u=(0,j.useMemo)(()=>be(n?.rows??[]),[n]),d=(0,j.useMemo)(()=>m(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{rows:u,isLoading:c,isFetching:a,isError:u.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,M.jsx)(oe,{children:(0,M.jsx)(se,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(k,{})})})}var j,M,Se=t((()=>{g(),b(),a(),j=e(n(),1),c(),xe(),D(),M=o()})),N,Ce=t((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:h(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:h(!1,e)}})}function Te(e){return(0,U.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,U.jsx)(ge,{...t,widgetType:G,renderModule:W,renderComponent:Te,attributes:{reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),de(),ue(),_e(),me(),ae(),Se(),Ce(),we(),U=o(),ie(),W=`storybook/authors`,G=fe(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,x]},J={render:V,args:{withComparison:!0},decorators:[S,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(_(`stats/top-authors`,`loading`),()=>_(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(_(`stats/top-authors`,`error`),()=>_(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(_(`stats/top-authors`,`empty`),()=>_(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...he,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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