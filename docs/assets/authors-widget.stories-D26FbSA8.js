import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-CDRs4YxF.js";import{$ as l,E as u,G as d,K as f,M as ee,S as p,Y as m,b as te,rt as h,w as g}from"./report-metric-CZGk3pJU.js";import{G as _,Gt as v,t as y}from"./src-DCbi8ow8.js";import{r as ne}from"./hooks-DKyvbkrh.js";import{at as b,ct as x,kt as re,ot as S,w as ie}from"./chart-tooltip-mdsQYAXX.js";import{r as ae,t as oe}from"./leaderboard-skeleton-CCNH4Z2y.js";import{t as se}from"./widget-state-CEIPGY-o.js";import{C as ce,D as le,E as ue,O as de,S as fe,T as pe,b as me,k as C,t as w,w as he,x as T}from"./src-BenUPZSz.js";function ge(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function _e(e){let t=S(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:b(e.views,t),previousShare:r===void 0?void 0:b(r,t),delta:r===void 0?void 0:x(e.views,r)}})}function ve(e=[]){if(e.length===0)return[];let t=S(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ge(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:b(e.views,t),previousShare:n===void 0?void 0:b(n,t),delta:n===void 0?void 0:x(e.views,n),posts:_e(e.children??[])}})}var E,ye=t((()=>{w(),a(),E=`Untracked Authors`})),D,O,k,be=t((()=>{D=`_root_jzzhc_1`,O=`_content_jzzhc_9`,k={root:D,content:O}}));function xe({rows:e=[],max:t,isLoading:n=!1,isFetching:a=!1,isError:o=!1,refetch:c,withComparison:l=!1,legendLabels:d}){let{drillDownItem:f,drillDown:p,resetDrillDown:m}=ne(),h=(0,j.useMemo)(()=>f?e.find(e=>e.id===f)??null:null,[e,f]);(0,j.useEffect)(()=>{f&&!h&&!n&&!a&&m()},[f,h,n,a,m]);let g=(0,j.useMemo)(()=>h?h.posts.map(e=>({id:e.id,label:(0,M.jsx)(te,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...ee({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>p(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,h,p]),_=!!h;return(0,M.jsxs)(`div`,{className:k.content,children:[h&&(0,M.jsx)(u,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:m}),(0,M.jsx)(se,{isLoading:n,isFetching:a,isError:o,isEmpty:g.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:c?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]:void 0},empty:{icon:s,description:i(_?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(oe,{rows:t}),children:(0,M.jsx)(ae,{data:g,withComparison:l,withOverlayLabel:!0,showLegend:!1,legendLabels:d,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function Se({max:e}){let{reportParams:t}=h(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=_((0,j.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),u=(a||n.isPending)&&!s,d=(0,j.useMemo)(()=>ve(r?.rows??[]),[r]),f=(0,j.useMemo)(()=>re(t),[t]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(xe,{rows:d,max:e,isLoading:u,isFetching:o,isError:d.length===0&&c,refetch:l,withComparison:i,legendLabels:f}),(0,M.jsx)(g,{children:(0,M.jsx)(p,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Se,{max:ie(e.max,N)})})})}var j,M,N,Ce=t((()=>{y(),w(),a(),j=e(n(),1),c(),ye(),be(),M=o(),N=7})),P,we=t((()=>{a(),c(),P={icon:s,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),F,I,L,R,z,B,V,Te=t((()=>{F=`jpa/authors`,I=`Popular authors`,L=`Top authors by views, with their most viewed posts.`,R={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(A,{attributes:{max:7,reportParams:v(e)}})}function U(e){return(0,W.jsx)(A,{attributes:{max:7,reportParams:v(!1,e)}})}function Ee(e){return(0,W.jsx)(A,{...e})}function De({withComparison:e,...t}){return(0,W.jsx)(pe,{...t,widgetType:K,renderModule:G,renderComponent:Ee,attributes:{max:7,reportParams:v(e)}})}var W,G,K,Oe,q,J,Y,X,Z,Q,$;t((()=>{y(),ue(),ce(),de(),me(),d(),Ce(),we(),Te(),W=o(),f(),G=`storybook/authors`,K=fe(V,P),Oe={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:H,args:{withComparison:!1},decorators:[T,C]},J={render:H,args:{withComparison:!0},decorators:[T,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`loading`),()=>m(`stats/top-authors`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`error`),()=>m(`stats/top-authors`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`empty`),()=>m(`stats/top-authors`,null))},Q={render:e=>(0,W.jsx)(De,{...e}),args:{...he,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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