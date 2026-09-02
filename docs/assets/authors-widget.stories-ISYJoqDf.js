import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Ur as s,t as c}from"./build-module-zwSmKorH.js";import{b as l,g as u,r as d}from"./hooks-C7f5OwlX.js";import{Zt as f,et as p,t as m}from"./src-DCT9Q7rj.js";import"./constants-B1kGztHF.js";import{Lt as h,gt as g,mt as _,pt as v}from"./chart-tooltip-DXCciSiV.js";import{r as ee,t as te}from"./leaderboard-skeleton-BDxWgpSf.js";import{G as ne,K as y,N as re,S as ie,Y as b,b as ae,v as oe,w as se}from"./report-metric-C1sNqe5m.js";import{t as ce}from"./widget-state-Dlql-Gg-.js";import{C as le,D as ue,E as x,O as de,S as fe,T as pe,b as me,k as S,t as C,w as he,x as w}from"./src-BoZPD56b.js";function ge(e){let t=typeof e.label==`string`?e.label:``;return!t||t===T?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function _e(e){let t=_(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:v(e.views,t),previousShare:r===void 0?void 0:v(r,t),delta:r===void 0?void 0:g(e.views,r)}})}function ve(e=[]){if(e.length===0)return[];let t=_(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ge(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:v(e.views,t),previousShare:n===void 0?void 0:v(n,t),delta:n===void 0?void 0:g(e.views,n),posts:_e(e.children??[])}})}var T,ye=t((()=>{C(),i(),T=`Untracked Authors`})),E,D,O,k=t((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function be({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:f,resetDrillDown:p}=d(),m=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!m&&!t&&!n&&p()},[u,m,t,n,p]);let h=(0,j.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,M.jsx)(oe,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...re({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,M.jsxs)(`div`,{className:O.content,children:[m&&(0,M.jsx)(se,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,M.jsx)(ce,{isLoading:t,isFetching:n,isError:i,isEmpty:h.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:r(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(te,{rows:10}),children:(0,M.jsx)(ee,{data:h,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function xe(){let{reportParams:e}=l(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=p((0,j.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,u=(0,j.useMemo)(()=>ve(n?.rows??[]),[n]),d=(0,j.useMemo)(()=>h(e),[e]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(be,{rows:u,isLoading:c,isFetching:a,isError:u.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,M.jsx)(ie,{children:(0,M.jsx)(ae,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsx)(`div`,{className:O.root,children:(0,M.jsx)(xe,{})})})}var j,M,Se=t((()=>{m(),C(),i(),j=e(n(),1),c(),ye(),k(),M=o()})),N,Ce=t((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:f(!1,e)}})}function Te(e){return(0,U.jsx)(A,{...e})}function Ee({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:Te,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),x(),le(),de(),me(),ne(),Se(),Ce(),we(),U=o(),y(),W=`storybook/authors`,G=fe(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,S]},J={render:V,args:{withComparison:!0},decorators:[w,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(b(`stats/top-authors`,`loading`),()=>b(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(b(`stats/top-authors`,`error`),()=>b(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(b(`stats/top-authors`,`empty`),()=>b(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...he,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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