import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{B as s,I as c,T as l,Tn as u,f as d,in as f,o as p,sn as m,xn as h}from"./charts-provider-BXWttMH6.js";import{Dt as g,hn as _,t as v,vn as y}from"./src-DvzWgCqE.js";import{t as ee}from"./widget-state-B-3KFlZy.js";import{N as te,V as ne,i as b,j as re,n as ie,r as x}from"./with-story-router-TeMi98u_.js";import"./constants-B9OTkkI1.js";import{r as ae,t as oe}from"./leaderboard-skeleton-C-y8R1eG.js";import{n as se,r as ce,s as S}from"./register-report-mocks-CI2bPEM7.js";import{s as le}from"./locations-geo-chart-C6hMt7oL.js";import{a as ue,g as de,h as fe,i as pe,m as me,n as he,p as ge,r as C}from"./with-widget-canvas-ke8j5asA.js";import{n as _e,t as ve}from"./use-no-views-empty-state-DXp1UMfh.js";function ye(e){let t=typeof e.label==`string`?e.label:``;return!t||t===w?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function be(e){let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:m(e.views,t),previousShare:r===void 0?void 0:m(r,t),delta:r===void 0?void 0:h(e.views,r)}})}function xe(e=[]){if(e.length===0)return[];let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,authorId:_(e.id??void 0),label:ye(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:m(e.views,t),previousShare:n===void 0?void 0:m(n,t),delta:n===void 0?void 0:h(e.views,n),posts:be(e.children??[])}})}var w,Se=e((()=>{v(),b(),a(),w=`Untracked Authors`})),T,E,D,Ce=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function we({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:c,empty:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:f}=p(),m=(0,k.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,k.useEffect)(()=>{u&&!m&&!t&&!n&&f()},[u,m,t,n,f]);let h=(0,k.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,A.jsx)(re,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>{let t=e.authorId?te(e.authorId):void 0;return{id:e.id,...le({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}),[e,m,d]),g=!!m;return(0,A.jsxs)(`div`,{className:D.content,children:[m&&(0,A.jsx)(ne,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:f}),(0,A.jsx)(ee,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:g?{description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:l,renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(ae,{chartTitle:i(`Popular authors`,`jetpack-premium-analytics-pkg`),data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:c,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},columns:{label:i(g?`Posts`:`Authors`,`jetpack-premium-analytics-pkg`),metric:`views`}})})]})}function Te(){let{reportParams:e}=s(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:c,refetch:f}=g((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),p=a||t.isPending,m=(0,k.useMemo)(()=>xe(n?.rows??[]),[n]),h=_e({isLoading:p,isError:c,isEmpty:m.length===0},i(`You don’t have authors recorded yet.`,`jetpack-premium-analytics-pkg`)),_=(0,k.useMemo)(()=>u(e),[e]);return d({csv:{exporter:l,status:{isLoading:p,isFetching:o,isError:t.isError},rowCount:m.length}}),(0,A.jsx)(we,{rows:m,isLoading:h.isLoading,isFetching:o,isError:m.length===0&&c,refetch:f,withComparison:r,legendLabels:_,empty:h.empty})}function O({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Te,{})})})}var k,A,j=e((()=>{v(),b(),a(),k=t(n(),1),Se(),ve(),Ce(),A=o()})),M,N,P,F,I,L,R,z,B,Ee=e((()=>{M=`jpa/authors`,N=`jpa/post-author`,P=`Popular authors`,F=`Top authors by views, with their most viewed posts.`,I={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fauthors`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:y(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:y(!1,e)}})}function De(e){return(0,U.jsx)(O,{...e})}function Oe({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:De,attributes:{reportParams:y(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),fe(),ue(),ie(),he(),se(),j(),Ee(),U=o(),ce(),W=`storybook/authors`,G=pe(B),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,x]},J={render:V,args:{withComparison:!0},decorators:[C,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(S(`stats/top-authors`,`loading`),()=>S(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(S(`stats/top-authors`,`error`),()=>S(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(S(`stats/top-authors`,`empty`),()=>S(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ge,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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