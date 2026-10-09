import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Vr as s,t as c}from"./build-module-Cm3Kd3py.js";import{_t as l,t as u,wn as d}from"./src-BXGbBQuk.js";import{$t as f,Xt as p,Zt as m,_ as h,gn as ee,o as te,x as ne}from"./charts-provider-CPqqWd8T.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-CzpMkhaw.js";import{n as ae,r as oe,s as g}from"./register-report-mocks-HpcX_mM9.js";import{t as se}from"./widget-state-Ct82KwxU.js";import{n as ce,r as _}from"./with-story-router-Beljd9ki.js";import{g as v,i as le,p as ue,y as de}from"./leaderboard-CH7EAciD.js";import{S as fe,n as pe,p as me}from"./components-zhFTPI41.js";import{t as y}from"./src-BO6UD8Zu.js";import{a as b,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as x}from"./with-widget-canvas-Bkxis0Y9.js";function xe(e){let t=typeof e.label==`string`?e.label:``;return!t||t===S?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function Se(e){let t=m(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:p(e.views,t),previousShare:r===void 0?void 0:p(r,t),delta:r===void 0?void 0:f(e.views,r)}})}function Ce(e=[]){if(e.length===0)return[];let t=m(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:xe(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:p(e.views,t),previousShare:n===void 0?void 0:p(n,t),delta:n===void 0?void 0:f(e.views,n),posts:Se(e.children??[])}})}var S,we=t((()=>{y(),i(),S=`Untracked Authors`})),C,w,T,E=t((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function D({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=te(),p=(0,A.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,A.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,A.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,j.jsx)(fe,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...le({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,p,d]),h=!!p;return(0,j.jsxs)(`div`,{className:T.content,children:[p&&(0,j.jsx)(v,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,j.jsx)(se,{isLoading:t,isFetching:n,isError:i,isEmpty:m.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:h?{icon:s,description:r(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,j.jsx)(ie,{rows:10}),children:(0,j.jsx)(re,{data:m,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function O(){let{reportParams:e}=ne(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=l((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,u=(0,A.useMemo)(()=>Ce(n?.rows??[]),[n]),d=(0,A.useMemo)(()=>ee(e),[e]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{rows:u,isLoading:c,isFetching:a,isError:u.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,j.jsxs)(ue,{children:[(0,j.jsx)(de,{report:`authors`}),(0,j.jsx)(pe,{exporter:me,status:{isLoading:c,isFetching:a,isError:t.isError},rowCount:u.length})]})]})}function k({attributes:e={}}){return(0,j.jsx)(h,{attributes:e,children:(0,j.jsx)(`div`,{className:T.root,children:(0,j.jsx)(O,{})})})}var A,j,Te=t((()=>{u(),y(),i(),A=e(n(),1),c(),we(),E(),j=o()})),M,Ee=t((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,De=t((()=>{N=`jpa/authors`,P=`jpa/post-author`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:d(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:d(!1,e)}})}function Oe(e){return(0,U.jsx)(k,{...e})}function ke({withComparison:e,...t}){return(0,U.jsx)(ve,{...t,widgetType:G,renderModule:W,renderComponent:Oe,attributes:{reportParams:d(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{u(),ge(),b(),ce(),ye(),ae(),Te(),Ee(),De(),U=o(),oe(),W=`storybook/authors`,G=_e(B,M),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,_]},J={render:V,args:{withComparison:!0},decorators:[x,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(g(`stats/top-authors`,`loading`),()=>g(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(g(`stats/top-authors`,`error`),()=>g(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(g(`stats/top-authors`,`empty`),()=>g(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...be,withComparison:!0},argTypes:{...he,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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