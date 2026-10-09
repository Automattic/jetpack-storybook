import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Vr as s,t as c}from"./build-module-Cm3Kd3py.js";import{On as l,_t as u,t as d}from"./src-EFVFQWJ1.js";import{Jt as f,Yt as p,Zt as m,_ as h,mn as g,o as _,x as ee}from"./charts-provider-BcXi6Auj.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-j9kb6SMG.js";import{n as re,r as ie,s as v}from"./register-report-mocks-ByCR7QC_.js";import{t as ae}from"./widget-state-DFLDEYqh.js";import{n as oe,r as y}from"./with-story-router-Beljd9ki.js";import{g as se,i as ce,p as le,y as ue}from"./leaderboard-Czv2wTZh.js";import{S as de,n as fe,p as pe}from"./components-C3Tpl1Ga.js";import{t as b}from"./src-CCU8io4M.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as x}from"./with-widget-canvas-CuaJpnBg.js";function xe(e){let t=typeof e.label==`string`?e.label:``;return!t||t===S?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function Se(e){let t=p(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:f(e.views,t),previousShare:r===void 0?void 0:f(r,t),delta:r===void 0?void 0:m(e.views,r)}})}function Ce(e=[]){if(e.length===0)return[];let t=p(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:xe(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:f(e.views,t),previousShare:n===void 0?void 0:f(n,t),delta:n===void 0?void 0:m(e.views,n),posts:Se(e.children??[])}})}var S,we=t((()=>{b(),i(),S=`Untracked Authors`})),C,w,T,E=t((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function D({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=_(),p=(0,A.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,A.useEffect)(()=>{u&&!p&&!t&&!n&&f()},[u,p,t,n,f]);let m=(0,A.useMemo)(()=>p?p.posts.map(e=>({id:e.id,label:(0,j.jsx)(de,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...ce({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,p,d]),h=!!p;return(0,j.jsxs)(`div`,{className:T.content,children:[p&&(0,j.jsx)(se,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,j.jsx)(ae,{isLoading:t,isFetching:n,isError:i,isEmpty:m.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:h?{icon:s,description:r(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:void 0,renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(te,{data:m,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function O(){let{reportParams:e}=ee(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,refetch:s}=u((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),c=i||t.isPending,l=(0,A.useMemo)(()=>Ce(n?.rows??[]),[n]),d=(0,A.useMemo)(()=>g(e),[e]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{rows:l,isLoading:c,isFetching:a,isError:l.length===0&&o,refetch:s,withComparison:r,legendLabels:d}),(0,j.jsxs)(le,{children:[(0,j.jsx)(ue,{report:`authors`}),(0,j.jsx)(fe,{exporter:pe,status:{isLoading:c,isFetching:a,isError:t.isError},rowCount:l.length})]})]})}function k({attributes:e={}}){return(0,j.jsx)(h,{attributes:e,children:(0,j.jsx)(`div`,{className:T.root,children:(0,j.jsx)(O,{})})})}var A,j,Te=t((()=>{d(),b(),i(),A=e(n(),1),c(),we(),E(),j=o()})),M,Ee=t((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,De=t((()=>{N=`jpa/authors`,P=`jpa/post-author`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:l(!1,e)}})}function Oe(e){return(0,U.jsx)(k,{...e})}function ke({withComparison:e,...t}){return(0,U.jsx)(ve,{...t,widgetType:G,renderModule:W,renderComponent:Oe,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),ge(),me(),oe(),ye(),re(),Te(),Ee(),De(),U=o(),ie(),W=`storybook/authors`,G=_e(B,M),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,y]},J={render:V,args:{withComparison:!0},decorators:[x,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...be,withComparison:!0},argTypes:{...he,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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