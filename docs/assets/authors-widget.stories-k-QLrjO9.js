import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{F as s,bn as c,f as l,o as u,on as d,rn as f,w as p,wn as m,z as h}from"./charts-provider-BBc07dYC.js";import{fn as g,hn as _,t as v,wt as ee}from"./src-DfQ3R5pV.js";import{t as te}from"./widget-state-BHtIizq9.js";import{F as ne,i as y,j as re,k as ie,n as ae,r as b}from"./with-story-router-BHniSIx5.js";import"./constants-B9OTkkI1.js";import{r as oe,t as x}from"./leaderboard-skeleton-DOAv4j-7.js";import{n as se,r as ce,s as S}from"./register-report-mocks-xm2nLXrN.js";import{s as le}from"./locations-geo-chart-BHzsHfhk.js";import{a as ue,g as de,h as C,i as fe,m as pe,n as me,p as he,r as w}from"./with-widget-canvas-dAAww4Sa.js";import{n as ge,t as _e}from"./use-no-views-empty-state-CONgOG7z.js";function ve(e){let t=typeof e.label==`string`?e.label:``;return!t||t===T?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ye(e){let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:d(e.views,t),previousShare:r===void 0?void 0:d(r,t),delta:r===void 0?void 0:c(e.views,r)}})}function be(e=[]){if(e.length===0)return[];let t=f(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,authorId:g(e.id??void 0),label:ve(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:d(e.views,t),previousShare:n===void 0?void 0:d(n,t),delta:n===void 0?void 0:c(e.views,n),posts:ye(e.children??[])}})}var T,xe=e((()=>{v(),y(),a(),T=`Untracked Authors`})),E,D,O,Se=e((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function Ce({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:c,empty:l}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=u(),m=(0,A.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,A.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,A.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,j.jsx)(ie,{id:e.postId,label:e.title,link:e.link,origin:{report:`authors`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>{let t=e.authorId?re(e.authorId):void 0;return{id:e.id,...le({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),link:t,ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`,link:t}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}),[e,m,f]),g=!!m;return(0,j.jsxs)(`div`,{className:O.content,children:[m&&(0,j.jsx)(ne,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,j.jsx)(te,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:g?{description:i(`This author has no posts with views for the selected period.`,`jetpack-premium-analytics-pkg`)}:l,renderLoading:(0,j.jsx)(x,{rows:10}),children:(0,j.jsx)(oe,{chartTitle:i(`Popular authors`,`jetpack-premium-analytics-pkg`),data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:c,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},columns:{label:i(g?`Posts`:`Authors`,`jetpack-premium-analytics-pkg`),metric:`views`}})})]})}function we(){let{reportParams:e}=h(),{primary:t,comparisonRows:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ee((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=a||t.isPending,d=(0,A.useMemo)(()=>be(n?.rows??[]),[n]),f=ge({isLoading:u,isError:s,isEmpty:d.length===0},i(`You don’t have authors recorded yet.`,`jetpack-premium-analytics-pkg`)),g=(0,A.useMemo)(()=>m(e),[e]);return l({csv:{exporter:p,status:{isLoading:u,isFetching:o,isError:t.isError},rowCount:d.length}}),(0,j.jsx)(Ce,{rows:d,isLoading:f.isLoading,isFetching:o,isError:d.length===0&&s,refetch:c,withComparison:r,legendLabels:g,empty:f.empty})}function k({attributes:e={}}){return(0,j.jsx)(s,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(we,{})})})}var A,j,Te=e((()=>{v(),y(),a(),A=t(n(),1),xe(),_e(),Se(),j=o()})),M,N,P,F,I,L,R,z,B,Ee=e((()=>{M=`jpa/authors`,N=`jpa/post-author`,P=`Popular authors`,F=`Top authors by views, with their most viewed posts.`,I={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fauthors`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:_(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:_(!1,e)}})}function De(e){return(0,U.jsx)(k,{...e})}function Oe({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:De,attributes:{reportParams:_(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),C(),ue(),ae(),me(),se(),Te(),Ee(),U=o(),ce(),W=`storybook/authors`,G=fe(B),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,b]},J={render:V,args:{withComparison:!0},decorators:[w,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(S(`stats/top-authors`,`loading`),()=>S(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(S(`stats/top-authors`,`error`),()=>S(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(S(`stats/top-authors`,`empty`),()=>S(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...he,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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