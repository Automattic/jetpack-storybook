import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{c as r,n as i,t as a}from"./build-module-Da_5_6n_.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{n as s,nt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-CkWGVC2L.js";import{Ct as u,J as d,X as f,_t as p,fr as m,m as h,pn as g,q as _}from"./chart-tooltip-BOkbfvqL.js";import{t as ee}from"./leaderboard-chart-CBppGjBe.js";import{I as te,L as ne,O as v,S as re,U as ie,b as ae,q as oe,w as se,z as y}from"./report-metric-Bj8e507q.js";import{t as ce}from"./widget-state-DcrSRSuQ.js";import{r as le}from"./src-DHhOiV-s.js";import{C as ue,D as de,E as fe,O as b,S as pe,T as me,b as he,k as x,t as S,w as ge,x as C}from"./src-BujDAHCN.js";function _e(e){let t=typeof e.label==`string`?e.label:``;return!t||t===w?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function ve(e){let t=d(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:_(e.views,t),previousShare:r===void 0?void 0:_(r,t),delta:r===void 0?void 0:f(e.views,r)}})}function ye(e=[]){if(e.length===0)return[];let t=d(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:_e(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:_(e.views,t),previousShare:n===void 0?void 0:_(n,t),delta:n===void 0?void 0:f(e.views,n),posts:ve(e.children??[])}})}var w,be=t((()=>{S(),a(),w=`Untracked Authors`})),T,E,D,xe=t((()=>{T=`_root_buj5x_1`,E=`_content_buj5x_11`,D={root:T,content:E}}));function Se({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:u}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=l(),m=(0,k.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,k.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,k.useMemo)(()=>m?m.posts.map(e=>{let t=le(e.link);return{id:e.id,...v({label:e.title,media:{kind:`none`},action:t?{kind:`link`,href:t}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}):e.map(e=>({id:e.id,...v({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,A.jsxs)(`div`,{className:D.content,children:[m&&(0,A.jsx)(se,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,A.jsx)(ce,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:c,description:i(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ee,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:u,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function Ce({max:e}){let{reportParams:t}=oe(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=g((0,k.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),u=(a||n.isPending)&&!s,d=(0,k.useMemo)(()=>ye(r?.rows??[]),[r]),f=(0,k.useMemo)(()=>p(t),[t]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Se,{rows:d,isLoading:u,isFetching:o,isError:d.length===0&&c,refetch:l,withComparison:i,legendLabels:f}),(0,A.jsx)(re,{children:(0,A.jsx)(ae,{report:`authors`})})]})}function O({attributes:e={}}){return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Ce,{max:h(e.max,j)})})})}var k,A,j,M=t((()=>{u(),S(),a(),k=e(n(),1),s(),be(),xe(),A=o(),j=7})),N,we=t((()=>{a(),s(),N={icon:c,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),P,F,I,L,R,z,B,Te=t((()=>{P=`jpa/authors`,F=`Authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{max:7,reportParams:m(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{max:7,reportParams:m(!1,e)}})}function Ee(e){return(0,U.jsx)(O,{...e})}function De({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:Ee,attributes:{max:7,reportParams:m(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{u(),fe(),ue(),b(),he(),te(),M(),we(),Te(),U=o(),ne(),W=`storybook/authors`,G=pe(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,x]},J={render:V,args:{withComparison:!0},decorators:[C,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(y(`stats/top-authors`,`loading`),()=>y(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(y(`stats/top-authors`,`error`),()=>y(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(y(`stats/top-authors`,`empty`),()=>y(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...ge,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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