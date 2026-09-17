import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Vr as s,t as c}from"./build-module-2iv4IIRq.js";import{Dn as l,b as u,g as d,in as f,on as p,r as m,rn as h}from"./hooks-B4xWNSo3.js";import{$t as g,nt as ee,r as _}from"./date-period-dropdown-DFFxSAbH.js";import"./constants-B1kGztHF.js";import{r as te,t as ne}from"./leaderboard-skeleton-hY4uHM0-.js";import{i as re,r as ie,s as v}from"./register-report-mocks-Ddv1-acm.js";import{E as ae,N as oe,S as se,b as y,w as ce}from"./report-metric-zEiCd1G1.js";import{t as le}from"./widget-state-CHDb_lmp.js";import{t as b}from"./src-CWyhsZxW.js";import{a as x,c as ue,d as S,i as de,l as fe,n as pe,o as me,r as C,s as he,u as ge}from"./with-widget-canvas-B0lPgXMt.js";function _e(e){let t=typeof e.label==`string`?e.label:``;return!t||t===w?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ve(e){let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:h(e.views,t),previousShare:r===void 0?void 0:h(r,t),delta:r===void 0?void 0:p(e.views,r)}})}function ye(e=[]){if(e.length===0)return[];let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:_e(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:h(e.views,t),previousShare:n===void 0?void 0:h(n,t),delta:n===void 0?void 0:p(e.views,n),posts:ve(e.children??[])}})}var w,be=t((()=>{b(),i(),w=`Untracked Authors`})),T,E,D,xe=t((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function O({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=m(),p=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let h=(0,j.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,M.jsx)(y,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...oe({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,p,d]),g=!!p;return(0,M.jsxs)(`div`,{className:D.content,children:[p&&(0,M.jsx)(ae,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,M.jsx)(le,{isLoading:t,isFetching:n,isError:i,isEmpty:h.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:r(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(ne,{rows:10}),children:(0,M.jsx)(te,{data:h,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function k(){let{reportParams:e}=u(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=ee((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,d=(0,j.useMemo)(()=>ye(n?.rows??[]),[n]),f=(0,j.useMemo)(()=>l(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{rows:d,isLoading:c,isFetching:a,isError:d.length===0&&o,refetch:s,withComparison:r,legendLabels:f}),(0,M.jsx)(ce,{children:(0,M.jsx)(se,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(`div`,{className:D.root,children:(0,M.jsx)(k,{})})})}var j,M,Se=t((()=>{_(),b(),i(),j=e(n(),1),c(),be(),xe(),M=o()})),N,Ce=t((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:g(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:g(!1,e)}})}function Te(e){return(0,U.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,U.jsx)(he,{...t,widgetType:G,renderModule:W,renderComponent:Te,attributes:{reportParams:g(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),ue(),x(),ge(),pe(),ie(),Se(),Ce(),we(),U=o(),re(),W=`storybook/authors`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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