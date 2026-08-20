import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-CDRs4YxF.js";import{E as l,J as u,O as d,P as f,S as p,Z as m,at as h,q as g,tt as _,w as v}from"./report-metric-mgfJDJ0k.js";import{r as ee}from"./hooks-C9iDVlLe.js";import{Cn as y,Cr as b,Nt as x,at as S,ct as C,kt as te,ot as ne,w as re}from"./chart-tooltip-DKfOwesw.js";import{r as ie,t as ae}from"./leaderboard-skeleton-Dm1nKmy7.js";import{t as oe}from"./widget-state-UmEbSe_V.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as w,t as T,w as me,x as E}from"./src-C7fcb0YA.js";function he(e){let t=typeof e.label==`string`?e.label:``;return!t||t===D?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ge(e){let t=ne(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:S(e.views,t),previousShare:r===void 0?void 0:S(r,t),delta:r===void 0?void 0:C(e.views,r)}})}function _e(e=[]){if(e.length===0)return[];let t=ne(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:he(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:S(e.views,t),previousShare:n===void 0?void 0:S(n,t),delta:n===void 0?void 0:C(e.views,n),posts:ge(e.children??[])}})}var D,ve=t((()=>{T(),a(),D=`Untracked Authors`})),O,k,A,ye=t((()=>{O=`_root_jzzhc_1`,k=`_content_jzzhc_9`,A={root:O,content:k}}));function be({rows:e=[],max:t,isLoading:n=!1,isFetching:a=!1,isError:o=!1,refetch:c,withComparison:l=!1,legendLabels:u}){let{drillDownItem:m,drillDown:h,resetDrillDown:g}=ee(),_=(0,M.useMemo)(()=>m?e.find(e=>e.id===m)??null:null,[e,m]);(0,M.useEffect)(()=>{m&&!_&&!n&&!a&&g()},[m,_,n,a,g]);let v=(0,M.useMemo)(()=>_?_.posts.map(e=>({id:e.id,label:(0,N.jsx)(p,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...f({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>h(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,_,h]),y=!!_;return(0,N.jsxs)(`div`,{className:A.content,children:[_&&(0,N.jsx)(d,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:g}),(0,N.jsx)(oe,{isLoading:n,isFetching:a,isError:o,isEmpty:v.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:c?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]:void 0},empty:{icon:s,description:i(y?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(ae,{rows:t}),children:(0,N.jsx)(ie,{data:v,withComparison:l,withOverlayLabel:!0,showLegend:!1,legendLabels:u,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function xe({max:e}){let{reportParams:t}=h(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:u}=y((0,M.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),d=(a||n.isPending)&&!s,f=(0,M.useMemo)(()=>_e(r?.rows??[]),[r]),p=(0,M.useMemo)(()=>te(t),[t]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(be,{rows:f,max:e,isLoading:d,isFetching:o,isError:f.length===0&&c,refetch:u,withComparison:i,legendLabels:p}),(0,N.jsx)(l,{children:(0,N.jsx)(v,{report:`authors`})})]})}function j({attributes:e={}}){return(0,N.jsx)(_,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(xe,{max:re(e.max,P)})})})}var M,N,P,Se=t((()=>{x(),T(),a(),M=e(n(),1),c(),ve(),ye(),N=o(),P=7})),F,Ce=t((()=>{a(),c(),F={icon:s,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),I,L,R,z,B,V,H,we=t((()=>{I=`jpa/authors`,L=`Popular authors`,R=`Top authors by views, with their most viewed posts.`,z={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({withComparison:e}){return(0,G.jsx)(j,{attributes:{max:7,reportParams:b(e)}})}function W(e){return(0,G.jsx)(j,{attributes:{max:7,reportParams:b(!1,e)}})}function Te(e){return(0,G.jsx)(j,{...e})}function Ee({withComparison:e,...t}){return(0,G.jsx)(fe,{...t,widgetType:K,renderModule:De,renderComponent:Te,attributes:{max:7,reportParams:b(e)}})}var G,De,K,Oe,q,J,Y,X,Z,Q,$;t((()=>{x(),le(),se(),ue(),pe(),g(),Se(),Ce(),we(),G=o(),u(),De=`storybook/authors`,K=de(H,F),Oe={title:`Packages/Premium Analytics/Widgets/Authors`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:U,args:{withComparison:!1},decorators:[E,w]},J={render:U,args:{withComparison:!0},decorators:[E,w]},Y={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[E,w],beforeEach:()=>(m(`stats/top-authors`,`loading`),()=>m(`stats/top-authors`,null))},X={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[E,w],beforeEach:()=>(m(`stats/top-authors`,`error`),()=>m(`stats/top-authors`,null))},Z={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[E,w],beforeEach:()=>(m(`stats/top-authors`,`empty`),()=>m(`stats/top-authors`,null))},Q={render:e=>(0,G.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,Oe as default};