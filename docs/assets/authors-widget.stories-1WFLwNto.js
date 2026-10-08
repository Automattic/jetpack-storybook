import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,zr as c}from"./build-module-DNhkEVJn.js";import{In as l,_t as u,t as d}from"./src-_wTDHkE8.js";import{Sn as f,_ as p,en as m,o as ee,rn as h,tn as g,x as te}from"./charts-provider-CPgWmhOr.js";import"./rows-DAmD2BmE.js";import{r as ne,t as _}from"./leaderboard-skeleton-BdfXuCMW.js";import{n as re,r as v,s as y}from"./register-report-mocks-fOQNujTE.js";import{t as ie}from"./widget-state-C5IkqyiU.js";import{n as ae,r as b}from"./with-story-router-Beljd9ki.js";import{g as oe,i as se,p as ce,y as le}from"./leaderboard-DtkCNBwo.js";import{S as ue,n as de,p as fe}from"./components-BXTlqlHe.js";import{t as x}from"./src-CUJR2JZN.js";import{a as pe,g as me,h as he,i as ge,m as _e,n as ve,p as ye,r as S}from"./with-widget-canvas-87_awOfE.js";function be(e){let t=typeof e.label==`string`?e.label:``;return!t||t===C?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function xe(e){let t=g(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:m(e.views,t),previousShare:r===void 0?void 0:m(r,t),delta:r===void 0?void 0:h(e.views,r)}})}function Se(e=[]){if(e.length===0)return[];let t=g(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:be(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:m(e.views,t),previousShare:n===void 0?void 0:m(n,t),delta:n===void 0?void 0:h(e.views,n),posts:xe(e.children??[])}})}var C,Ce=t((()=>{x(),i(),C=`Untracked Authors`})),w,T,E,D=t((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function O({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:s=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=ee(),p=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,j.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,M.jsx)(ue,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...se({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,p,d]),h=!!p;return(0,M.jsxs)(`div`,{className:E.content,children:[p&&(0,M.jsx)(oe,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,M.jsx)(ie,{isLoading:t,isFetching:n,isError:i,isEmpty:m.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:h?{icon:c,description:r(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,M.jsx)(_,{rows:10}),children:(0,M.jsx)(ne,{data:m,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function k(){let{reportParams:e}=te(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=u((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,l=(0,j.useMemo)(()=>Se(n?.rows??[]),[n]),d=(0,j.useMemo)(()=>f(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{rows:l,isLoading:c,isFetching:a,isError:l.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,M.jsxs)(ce,{children:[(0,M.jsx)(le,{report:`authors`}),(0,M.jsx)(de,{exporter:fe,status:{isLoading:c,isFetching:a,isError:t.isError},rowCount:l.length})]})]})}function A({attributes:e={}}){return(0,M.jsx)(p,{attributes:e,children:(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(k,{})})})}var j,M,we=t((()=>{d(),x(),i(),j=e(n(),1),s(),Ce(),D(),M=o()})),N,Te=t((()=>{s(),N={icon:c,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ee=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:l(!1,e)}})}function De(e){return(0,U.jsx)(A,{...e})}function Oe({withComparison:e,...t}){return(0,U.jsx)(_e,{...t,widgetType:G,renderModule:W,renderComponent:De,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),he(),pe(),ae(),ve(),re(),we(),Te(),Ee(),U=o(),v(),W=`storybook/authors`,G=ge(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,b]},J={render:V,args:{withComparison:!0},decorators:[S,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(y(`stats/top-authors`,`loading`),()=>y(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(y(`stats/top-authors`,`error`),()=>y(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(y(`stats/top-authors`,`empty`),()=>y(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ye,withComparison:!0},argTypes:{...me,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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