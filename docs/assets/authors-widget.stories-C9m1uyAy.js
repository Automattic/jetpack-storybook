import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{_t as s,an as c,cn as l,t as u}from"./src-CAajoAHz.js";import{$t as d,Ot as f,Yt as p,jt as m,m as ee,o as h,v as g}from"./charts-provider-CQg5hwWl.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-B4TsRKgs.js";import{n as re,r as ie,s as _}from"./register-report-mocks-_khNFl6E.js";import{t as ae}from"./widget-state-DoGckKOV.js";import{n as oe,r as v}from"./with-story-router-TjVyBU09.js";import{i as se}from"./build-leaderboard-chart-data-Dai9Udey.js";import{f as ce,l as le,o as ue}from"./leaderboard-C6tzS-Zo.js";import{U as de,V as fe,b as pe,j as y,t as b}from"./src-DrFJ4Nio.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as x}from"./with-widget-canvas-bz2aysiW.js";function xe(e){let t=typeof e.label==`string`?e.label:``;return!t||t===S?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function Se(e){let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:m(e.views,t),previousShare:r===void 0?void 0:m(r,t),delta:r===void 0?void 0:p(e.views,r)}})}function Ce(e=[]){if(e.length===0)return[];let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,authorId:c(e.id??void 0),label:xe(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:m(e.views,t),previousShare:n===void 0?void 0:m(n,t),delta:n===void 0?void 0:p(e.views,n),posts:Se(e.children??[])}})}var S,we=t((()=>{u(),b(),a(),S=`Untracked Authors`})),C,w,T,E=t((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function D({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:c}){let{drillDownItem:l,drillDown:u,resetDrillDown:d}=h(),f=(0,A.useMemo)(()=>l?e.find(e=>e.id===l)??null:null,[e,l]);(0,A.useEffect)(()=>{l&&!f&&!t&&!n&&d()},[l,f,t,n,d]);let p=(0,A.useMemo)(()=>f?f.posts.map(e=>({id:e.id,label:(0,j.jsx)(fe,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>{let t=e.authorId?de(e.authorId):void 0;return{id:e.id,...se({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>u(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}),[e,f,u]),m=!!f;return(0,j.jsxs)(`div`,{className:T.content,children:[f&&(0,j.jsx)(le,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,j.jsx)(ae,{isLoading:t,isFetching:n,isError:a,isEmpty:p.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:m?{description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(te,{data:p,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:c,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function O(){let{reportParams:e}=g(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:c}=s((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),l=i||t.isPending,u=(0,A.useMemo)(()=>Ce(n?.rows??[]),[n]),f=(0,A.useMemo)(()=>d(e),[e]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{rows:u,isLoading:l,isFetching:a,isError:u.length===0&&o,refetch:c,withComparison:r,legendLabels:f}),(0,j.jsxs)(ue,{children:[(0,j.jsx)(ce,{report:`authors`}),(0,j.jsx)(pe,{exporter:y,status:{isLoading:l,isFetching:a,isError:t.isError},rowCount:u.length})]})]})}function k({attributes:e={}}){return(0,j.jsx)(ee,{attributes:e,children:(0,j.jsx)(`div`,{className:T.root,children:(0,j.jsx)(O,{})})})}var A,j,Te=t((()=>{u(),b(),a(),A=e(n(),1),we(),E(),j=o()})),M,Ee=t((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,De=t((()=>{N=`jpa/authors`,P=`jpa/post-author`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:l(!1,e)}})}function Oe(e){return(0,U.jsx)(k,{...e})}function ke({withComparison:e,...t}){return(0,U.jsx)(ve,{...t,widgetType:G,renderModule:W,renderComponent:Oe,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{u(),ge(),me(),oe(),ye(),re(),Te(),Ee(),De(),U=o(),ie(),W=`storybook/authors`,G=_e(B,M),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,v]},J={render:V,args:{withComparison:!0},decorators:[x,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(_(`stats/top-authors`,`loading`),()=>_(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(_(`stats/top-authors`,`error`),()=>_(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(_(`stats/top-authors`,`empty`),()=>_(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...be,withComparison:!0},argTypes:{...he,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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