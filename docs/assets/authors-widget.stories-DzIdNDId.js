import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,zr as c}from"./build-module-DNhkEVJn.js";import{m as l,r as u,v as d}from"./hooks-BIWOgz2W.js";import{fn as f,ft as p,t as m}from"./src-BFrA6def.js";import{Et as h,Ot as g,Tt as _,Yt as ee}from"./helpers-aGsdFJwO.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-CDN56yRf.js";import{n as re,r as v}from"./with-story-router-DbSSgjJV.js";import{n as ie,r as ae,s as y}from"./register-report-mocks-CrNsLk3_.js";import{_ as oe,b as se,i as ce,m as le}from"./leaderboard-VAB6YArB.js";import{t as ue}from"./widget-state-n3WdCEhm.js";import{E as de,_ as fe,o as pe}from"./report-metric-BMy76ciM.js";import{t as b}from"./src-CxXOPOYz.js";import{a as me,d as he,f as ge,i as _e,n as ve,p as ye,r as x,u as be}from"./with-widget-canvas-CqJxXt4k.js";function xe(e){let t=typeof e.label==`string`?e.label:``;return!t||t===S?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function Se(e){let t=h(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:_(e.views,t),previousShare:r===void 0?void 0:_(r,t),delta:r===void 0?void 0:g(e.views,r)}})}function Ce(e=[]){if(e.length===0)return[];let t=h(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:xe(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:_(e.views,t),previousShare:n===void 0?void 0:_(n,t),delta:n===void 0?void 0:g(e.views,n),posts:Se(e.children??[])}})}var S,we=t((()=>{b(),i(),S=`Untracked Authors`})),C,w,T,E=t((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function D({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:s=!1,legendLabels:l}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=u(),m=(0,A.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,A.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,A.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,j.jsx)(de,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...ce({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,j.jsxs)(`div`,{className:T.content,children:[m&&(0,j.jsx)(oe,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,j.jsx)(ue,{isLoading:t,isFetching:n,isError:i,isEmpty:h.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:g?{icon:c,description:r(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(te,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function O(){let{reportParams:e}=d(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=p((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,l=(0,A.useMemo)(()=>Ce(n?.rows??[]),[n]),u=(0,A.useMemo)(()=>ee(e),[e]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{rows:l,isLoading:c,isFetching:a,isError:l.length===0&&o,refetch:s,withComparison:r,legendLabels:u}),(0,j.jsxs)(le,{children:[(0,j.jsx)(se,{report:`authors`}),(0,j.jsx)(pe,{exporter:fe,status:{isLoading:c,isFetching:a,isError:t.isError},rowCount:l.length})]})]})}function k({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:T.root,children:(0,j.jsx)(O,{})})})}var A,j,M=t((()=>{m(),b(),i(),A=e(n(),1),s(),we(),E(),j=o()})),N,Te=t((()=>{s(),N={icon:c,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ee=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:f(!1,e)}})}function De(e){return(0,U.jsx)(k,{...e})}function Oe({withComparison:e,...t}){return(0,U.jsx)(he,{...t,widgetType:G,renderModule:W,renderComponent:De,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),ge(),me(),re(),ve(),ie(),M(),Te(),Ee(),U=o(),ae(),W=`storybook/authors`,G=_e(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,v]},J={render:V,args:{withComparison:!0},decorators:[x,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(y(`stats/top-authors`,`loading`),()=>y(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(y(`stats/top-authors`,`error`),()=>y(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>(y(`stats/top-authors`,`empty`),()=>y(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...be,withComparison:!0},argTypes:{...ye,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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