import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-Bb7IR3OP.js";import{$ as l,E as u,K as d,M as f,O as p,S as ee,Y as m,q as h,rt as g,w as _}from"./report-metric-CZ_ken0i.js";import{r as te}from"./hooks-Dbt-ErLF.js";import{J as v,X as y,_t as ne,dn as re,dr as b,m as ie,q as x,xt as S}from"./chart-tooltip-Cy1KmVj5.js";import{t as ae}from"./leaderboard-chart-4iD11gle.js";import{C as oe,D as se,E as ce,O as le,S as ue,T as de,b as fe,k as C,t as w,w as pe,x as T}from"./src-D2tjZxka.js";import{t as me}from"./widget-state-DsOOAZP_.js";function he(e){let t=typeof e.label==`string`?e.label:``;return!t||t===E?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ge(e){let t=v(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:x(e.views,t),previousShare:r===void 0?void 0:x(r,t),delta:r===void 0?void 0:y(e.views,r)}})}function _e(e=[]){if(e.length===0)return[];let t=v(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:he(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:x(e.views,t),previousShare:n===void 0?void 0:x(n,t),delta:n===void 0?void 0:y(e.views,n),posts:ge(e.children??[])}})}var E,ve=t((()=>{w(),a(),E=`Untracked Authors`})),D,O,k,ye=t((()=>{D=`_root_buj5x_1`,O=`_content_buj5x_11`,k={root:D,content:O}}));function be({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:d,resetDrillDown:m}=te(),h=(0,j.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,j.useEffect)(()=>{u&&!h&&!t&&!n&&m()},[u,h,t,n,m]);let g=(0,j.useMemo)(()=>h?h.posts.map(e=>({id:e.id,label:(0,M.jsx)(ee,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...f({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>d(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,h,d]),_=!!h;return(0,M.jsxs)(`div`,{className:k.content,children:[h&&(0,M.jsx)(p,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:m}),(0,M.jsx)(me,{isLoading:t,isFetching:n,isError:a,isEmpty:g.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:i(_?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(ae,{data:g,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function xe({max:e}){let{reportParams:t}=g(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=re((0,j.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),d=(a||n.isPending)&&!s,f=(0,j.useMemo)(()=>_e(r?.rows??[]),[r]),p=(0,j.useMemo)(()=>ne(t),[t]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(be,{rows:f,isLoading:d,isFetching:o,isError:f.length===0&&c,refetch:l,withComparison:i,legendLabels:p}),(0,M.jsx)(u,{children:(0,M.jsx)(_,{report:`authors`})})]})}function A({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{max:ie(e.max,N)})})})}var j,M,N,Se=t((()=>{S(),w(),a(),j=e(n(),1),c(),ve(),ye(),M=o(),N=7})),Ce,we=t((()=>{a(),c(),Ce={icon:s,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),P,F,I,L,R,z,B,Te=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{max:7,reportParams:b(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{max:7,reportParams:b(!1,e)}})}function Ee(e){return(0,U.jsx)(A,{...e})}function De({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:Ee,attributes:{max:7,reportParams:b(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{S(),ce(),oe(),le(),fe(),d(),Se(),we(),Te(),U=o(),h(),W=`storybook/authors`,G=ue(B,Ce),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[T,C]},J={render:V,args:{withComparison:!0},decorators:[T,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`loading`),()=>m(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`error`),()=>m(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(m(`stats/top-authors`,`empty`),()=>m(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...pe,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};