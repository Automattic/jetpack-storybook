import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Wr as s,n as c}from"./build-module-CDRs4YxF.js";import{E as l,J as u,O as d,P as f,Q as p,S as ee,Y as m,nt as h,ot as g,w as _}from"./report-metric-DvbymNiD.js";import{r as te}from"./hooks-C570DXv9.js";import{$ as v,Ct as ne,Dt as y,_n as re,_r as b,et as x,nt as ie,v as ae}from"./chart-tooltip-JHv3HFje.js";import{t as oe}from"./leaderboard-chart-98BYhS9Q.js";import{t as se}from"./widget-state-DIziXein.js";import{C as ce,D as le,E as ue,O as de,S as fe,T as pe,b as me,k as S,t as C,w as he,x as w}from"./src-B1MCLR9S.js";function ge(e){let t=typeof e.label==`string`?e.label:``;return!t||t===T?i(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function _e(e){let t=x(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:v(e.views,t),previousShare:r===void 0?void 0:v(r,t),delta:r===void 0?void 0:ie(e.views,r)}})}function ve(e=[]){if(e.length===0)return[];let t=x(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ge(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:v(e.views,t),previousShare:n===void 0?void 0:v(n,t),delta:n===void 0?void 0:ie(e.views,n),posts:_e(e.children??[])}})}var T,ye=t((()=>{C(),a(),T=`Untracked Authors`})),E,D,O,be=t((()=>{E=`_root_buj5x_1`,D=`_content_buj5x_11`,O={root:E,content:D}}));function xe({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:c=!1,legendLabels:l}){let{drillDownItem:u,drillDown:p,resetDrillDown:m}=te(),h=(0,A.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,A.useEffect)(()=>{u&&!h&&!t&&!n&&m()},[u,h,t,n,m]);let g=(0,A.useMemo)(()=>h?h.posts.map(e=>({id:e.id,label:(0,j.jsx)(ee,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...f({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>p(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,h,p]),_=!!h;return(0,j.jsxs)(`div`,{className:O.content,children:[h&&(0,j.jsx)(d,{label:i(`All authors`,`jetpack-premium-analytics-pkg`),onClick:m}),(0,j.jsx)(se,{isLoading:t,isFetching:n,isError:a,isEmpty:g.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:s,description:i(_?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsx)(oe,{data:g,withComparison:c,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function Se({max:e}){let{reportParams:t}=g(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:u}=re((0,A.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),d=(a||n.isPending)&&!s,f=(0,A.useMemo)(()=>ve(r?.rows??[]),[r]),p=(0,A.useMemo)(()=>ne(t),[t]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(xe,{rows:f,isLoading:d,isFetching:o,isError:f.length===0&&c,refetch:u,withComparison:i,legendLabels:p}),(0,j.jsx)(l,{children:(0,j.jsx)(_,{report:`authors`})})]})}function k({attributes:e={}}){return(0,j.jsx)(h,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Se,{max:ae(e.max,M)})})})}var A,j,M,Ce=t((()=>{y(),C(),a(),A=e(n(),1),c(),ye(),be(),j=o(),M=7})),N,we=t((()=>{a(),c(),N={icon:s,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),P,F,I,L,R,z,B,Te=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:7,reportParams:b(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:7,reportParams:b(!1,e)}})}function Ee(e){return(0,U.jsx)(k,{...e})}function De({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:Ee,attributes:{max:7,reportParams:b(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),ue(),ce(),de(),me(),u(),Ce(),we(),Te(),U=o(),m(),W=`storybook/authors`,G=fe(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,S]},J={render:V,args:{withComparison:!0},decorators:[w,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(p(`stats/top-authors`,`loading`),()=>p(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(p(`stats/top-authors`,`error`),()=>p(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(p(`stats/top-authors`,`empty`),()=>p(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...he,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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