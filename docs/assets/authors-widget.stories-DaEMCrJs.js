import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Vr as s,t as c}from"./build-module-2iv4IIRq.js";import{Rn as l,_n as u,hn as d,m as f,mn as p,r as m,v as h}from"./hooks-D2-uOzcc.js";import{$t as g,nt as ee,t as _}from"./src-0ge7d6kt.js";import"./constants-B1kGztHF.js";import{r as te,t as ne}from"./leaderboard-skeleton-CDMNyzgV.js";import{c as v,i as y,r as b}from"./register-report-mocks-DAHzORiq.js";import{S as re,g as ie,j as ae,v as oe,w as se}from"./report-metric--Et_iyvv.js";import{t as ce}from"./widget-state-BlFCjv4l.js";import{t as x}from"./src-Ddik3icB.js";import{a as S,d as le,f as ue,h as C,i as de,m as fe,n as pe,p as me,r as w,u as he}from"./with-widget-canvas-q45aoI9y.js";function ge(e){let t=typeof e.label==`string`?e.label:``;return!t||t===T?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function _e(e){let t=d(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:p(e.views,t),previousShare:r===void 0?void 0:p(r,t),delta:r===void 0?void 0:u(e.views,r)}})}function ve(e=[]){if(e.length===0)return[];let t=d(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ge(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:p(e.views,t),previousShare:n===void 0?void 0:p(n,t),delta:n===void 0?void 0:u(e.views,n),posts:_e(e.children??[])}})}var T,ye=t((()=>{x(),i(),T=`Untracked Authors`})),E,D,O,be=t((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function xe({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=m(),p=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let h=(0,j.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,M.jsx)(ie,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...ae({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,p,d]),g=!!p;return(0,M.jsxs)(`div`,{className:O.content,children:[p&&(0,M.jsx)(se,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,M.jsx)(ce,{isLoading:t,isFetching:n,isError:i,isEmpty:h.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:r(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(ne,{rows:10}),children:(0,M.jsx)(te,{data:h,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function k(){let{reportParams:e}=h(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=ee((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,u=(0,j.useMemo)(()=>ve(n?.rows??[]),[n]),d=(0,j.useMemo)(()=>l(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(xe,{rows:u,isLoading:c,isFetching:a,isError:u.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,M.jsx)(re,{children:(0,M.jsx)(oe,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(f,{attributes:e,children:(0,M.jsx)(`div`,{className:O.root,children:(0,M.jsx)(k,{})})})}var j,M,Se=t((()=>{_(),x(),i(),j=e(n(),1),c(),ye(),be(),M=o()})),N,Ce=t((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:g(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:g(!1,e)}})}function Te(e){return(0,U.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,U.jsx)(le,{...t,widgetType:G,renderModule:W,renderComponent:Te,attributes:{reportParams:g(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),ue(),S(),fe(),pe(),b(),Se(),Ce(),we(),U=o(),y(),W=`storybook/authors`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,C]},J={render:V,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...he,withComparison:!0},argTypes:{...me,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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