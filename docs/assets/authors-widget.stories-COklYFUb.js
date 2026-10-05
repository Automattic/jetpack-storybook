import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,zr as c}from"./build-module-DNhkEVJn.js";import{m as l,r as u,v as d}from"./hooks-DgyVWvpi.js";import{on as f,ot as p,t as m}from"./src-HO58-925.js";import{Ct as h,Kt as g,St as _,Tt as v}from"./helpers-DWUlNf0T.js";import"./rows-DAmD2BmE.js";import{r as ee,t as te}from"./leaderboard-skeleton-BCiveHmz.js";import{n as ne,r as y}from"./with-story-router-B5YzM9Bu.js";import{n as re,r as ie,s as b}from"./register-report-mocks-CVRF_N7b.js";import{_ as ae,b as oe,i as se,m as ce}from"./leaderboard-D1nlT1i2.js";import{t as le}from"./widget-state-Dw_IyB9A.js";import{b as ue,g as de,o as x}from"./report-metric-BaSE4gyh.js";import{t as S}from"./src-DaKtqo_F.js";import{a as fe,d as pe,f as me,i as he,n as ge,p as _e,r as C,u as ve}from"./with-widget-canvas-BvzFbQeb.js";function ye(e){let t=typeof e.label==`string`?e.label:``;return!t||t===w?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function be(e){let t=h(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:_(e.views,t),previousShare:r===void 0?void 0:_(r,t),delta:r===void 0?void 0:v(e.views,r)}})}function xe(e=[]){if(e.length===0)return[];let t=h(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ye(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:_(e.views,t),previousShare:n===void 0?void 0:_(n,t),delta:n===void 0?void 0:v(e.views,n),posts:be(e.children??[])}})}var w,Se=t((()=>{S(),i(),w=`Untracked Authors`})),T,E,D,Ce=t((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function O({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:s=!1,legendLabels:l}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=u(),m=(0,j.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,j.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,j.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,M.jsx)(ue,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...se({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,M.jsxs)(`div`,{className:D.content,children:[m&&(0,M.jsx)(ae,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,M.jsx)(le,{isLoading:t,isFetching:n,isError:i,isEmpty:h.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:g?{icon:c,description:r(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,M.jsx)(te,{rows:10}),children:(0,M.jsx)(ee,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function k(){let{reportParams:e}=d(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=p((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,l=(0,j.useMemo)(()=>xe(n?.rows??[]),[n]),u=(0,j.useMemo)(()=>g(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{rows:l,isLoading:c,isFetching:a,isError:l.length===0&&o,refetch:s,withComparison:r,legendLabels:u}),(0,M.jsxs)(ce,{children:[(0,M.jsx)(oe,{report:`authors`}),(0,M.jsx)(x,{exporter:de,status:{isLoading:c,isFetching:a,isError:t.isError},rowCount:l.length})]})]})}function A({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(`div`,{className:D.root,children:(0,M.jsx)(k,{})})})}var j,M,we=t((()=>{m(),S(),i(),j=e(n(),1),s(),Se(),Ce(),M=o()})),N,Te=t((()=>{s(),N={icon:c,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ee=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:f(!1,e)}})}function De(e){return(0,U.jsx)(A,{...e})}function Oe({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:De,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),me(),fe(),ne(),ge(),re(),we(),Te(),Ee(),U=o(),ie(),W=`storybook/authors`,G=he(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,y]},J={render:V,args:{withComparison:!0},decorators:[C,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(b(`stats/top-authors`,`loading`),()=>b(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(b(`stats/top-authors`,`error`),()=>b(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(b(`stats/top-authors`,`empty`),()=>b(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ve,withComparison:!0},argTypes:{..._e,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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