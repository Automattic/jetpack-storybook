import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{B as s,En as c,I as l,T as u,f as d,o as f}from"./charts-provider-C3SocQD0.js";import{Dt as p,_n as m,bn as h,t as g}from"./src-BG_TKhyf.js";import{t as _}from"./widget-state-Dbd-m3rt.js";import{F as ee,N as te,U as v,t as y}from"./src-BUE9Bnlz.js";import"./constants-Ds2Tofyv.js";import{r as ne,t as re}from"./leaderboard-skeleton-C42vmxAY.js";import{n as ie,r as ae,s as b}from"./register-report-mocks-CisljdiM.js";import{s as oe}from"./locations-geo-chart-CsOxDydC.js";import{n as se,r as x}from"./with-story-router-D5G9aMsG.js";import{a as S,c as ce,i as le,l as ue,n as C,o as de,r as w,s as fe}from"./with-widget-canvas-CN5l1gCz.js";import{n as pe,t as me}from"./use-no-views-empty-state-WK_yqjF9.js";function he(e){let t=typeof e.label==`string`?e.label:``;return!t||t===T?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ge(e){return e.map((e,t)=>({id:e.id==null?e.link??`post-${t}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:e.previousViews}))}function _e(e=[]){return e.length===0?[]:e.map(e=>({id:e.key,authorId:m(e.id??void 0),label:he(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:e.previousViews,posts:ge(e.children??[])}))}var T,ve=e((()=>{g(),a(),T=`Untracked Authors`})),E,D,O,ye=e((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function be({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:c,empty:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:p}=f(),m=(0,A.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,A.useEffect)(()=>{u&&!m&&!t&&!n&&p()},[u,m,t,n,p]);let h=(0,A.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,j.jsx)(te,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue})):e.map(e=>{let t=e.authorId?ee(e.authorId):void 0;return{id:e.id,...oe({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue}}),[e,m,d]),g=!!m;return(0,j.jsxs)(`div`,{className:O.content,children:[m&&(0,j.jsx)(v,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,j.jsx)(_,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:g?{description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:l,renderLoading:(0,j.jsx)(re,{rows:10}),children:(0,j.jsx)(ne,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:c,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},columns:{label:i(g?`Posts`:`Authors`,`jetpack-premium-analytics-pkg`),metric:`views`}})})]})}function xe(){let{reportParams:e}=s(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:l,refetch:f}=p((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),m=a||t.isPending,h=(0,A.useMemo)(()=>_e(n?.rows??[]),[n]),g=pe({isLoading:m,isError:l,isEmpty:h.length===0},i(`You don’t have authors recorded yet.`,`jetpack-premium-analytics-pkg`)),_=(0,A.useMemo)(()=>c(e),[e]);return d({csv:{exporter:u,status:{isLoading:m,isFetching:o,isError:t.isError},rowCount:h.length}}),(0,j.jsx)(be,{rows:h,isLoading:g.isLoading,isFetching:o,isError:h.length===0&&l,refetch:f,withComparison:r,legendLabels:_,empty:g.empty})}function k({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(xe,{})})})}var A,j,Se=e((()=>{g(),y(),a(),A=t(n(),1),ve(),me(),ye(),j=o()})),M,N,P,F,I,L,R,z,B,Ce=e((()=>{M=`jpa/authors`,N=`jpa/post-author`,P=`Popular authors`,F=`Top authors by views, with their most viewed posts.`,I={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fauthors`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:h(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:h(!1,e)}})}function we(e){return(0,U.jsx)(k,{...e})}function Te({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:we,attributes:{reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ce(),S(),se(),C(),ie(),Se(),Ce(),U=o(),ae(),W=`storybook/authors`,G=le(B),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,x]},J={render:V,args:{withComparison:!0},decorators:[w,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(b(`stats/top-authors`,`loading`),()=>b(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(b(`stats/top-authors`,`error`),()=>b(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(b(`stats/top-authors`,`empty`),()=>b(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{...de,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};