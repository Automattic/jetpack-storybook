import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Vr as s,t as c}from"./build-module-Cm3Kd3py.js";import{hn as l,ht as u,t as d,vn as f}from"./src-CUSyzfyR.js";import{Jt as p,Yt as m,Zt as h,m as ee,o as te,tn as ne,v as re}from"./charts-provider-DTN_MnWk.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-BlStRd5w.js";import{n as g,r as _,s as v}from"./register-report-mocks-CVybh5bj.js";import{t as oe}from"./widget-state-DG23NtTx.js";import{n as se,r as y}from"./with-story-router-TjVyBU09.js";import{g as ce,i as le,p as ue,y as de}from"./leaderboard-CBd4jdRD.js";import{E as fe,h as pe,i as me,w as he}from"./visitors-by-location-widget-hAm3phXn.js";import{t as b}from"./src-BUCjD29_.js";import{a as ge,g as _e,h as ve,i as ye,m as be,n as xe,p as Se,r as x}from"./with-widget-canvas-BlD6UW4X.js";function Ce(e){let t=typeof e.label==`string`?e.label:``;return!t||t===S?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function we(e){let t=m(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:p(e.views,t),previousShare:r===void 0?void 0:p(r,t),delta:r===void 0?void 0:h(e.views,r)}})}function Te(e=[]){if(e.length===0)return[];let t=m(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,authorId:l(e.id??void 0),label:Ce(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:p(e.views,t),previousShare:n===void 0?void 0:p(n,t),delta:n===void 0?void 0:h(e.views,n),posts:we(e.children??[])}})}var S,Ee=t((()=>{d(),b(),a(),S=`Untracked Authors`})),C,w,T,E=t((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function D({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=te(),p=(0,k.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,k.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,k.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,A.jsx)(he,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>{let t=e.authorId?fe(e.authorId):void 0;return{id:e.id,...le({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}),[e,p,d]),h=!!p;return(0,A.jsxs)(`div`,{className:T.content,children:[p&&(0,A.jsx)(ce,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,A.jsx)(oe,{isLoading:t,isFetching:n,isError:a,isEmpty:m.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:h?{icon:s,description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,A.jsx)(ae,{rows:10}),children:(0,A.jsx)(ie,{data:m,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function De(){let{reportParams:e}=re(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=u((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,l=(0,k.useMemo)(()=>Te(n?.rows??[]),[n]),d=(0,k.useMemo)(()=>ne(e),[e]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(D,{rows:l,isLoading:c,isFetching:a,isError:l.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,A.jsxs)(ue,{children:[(0,A.jsx)(de,{report:`authors`}),(0,A.jsx)(me,{exporter:pe,status:{isLoading:c,isFetching:a,isError:t.isError},rowCount:l.length})]})]})}function O({attributes:e={}}){return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(De,{})})})}var k,A,Oe=t((()=>{d(),b(),a(),k=e(n(),1),c(),Ee(),E(),A=o()})),j,ke=t((()=>{j={attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,z,Ae=t((()=>{M=`jpa/authors`,N=`jpa/post-author`,P=`Popular authors`,F=`Top authors by views, with their most viewed posts.`,I={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:f(e)}})}function V(e){return(0,U.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function je(e){return(0,U.jsx)(O,{...e})}function H({withComparison:e,...t}){return(0,U.jsx)(be,{...t,widgetType:G,renderModule:W,renderComponent:je,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),ve(),ge(),se(),xe(),g(),Oe(),ke(),Ae(),U=o(),_(),W=`storybook/authors`,G=ye(z,j),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:B,args:{withComparison:!1},decorators:[x,y]},J={render:B,args:{withComparison:!0},decorators:[x,y]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...Se,withComparison:!0},argTypes:{..._e,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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