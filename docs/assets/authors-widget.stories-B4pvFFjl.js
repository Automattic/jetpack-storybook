import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{n as s,nt as c}from"./build-module-DoJYX5DX.js";import{D as l,G as u,N as d,S as f,W as p,Z as m,b as ee,k as te,q as h,tt as g}from"./report-metric-c1D_qvJb.js";import{r as ne}from"./hooks-DlgDlL-g.js";import{J as _,X as v,_t as re,dn as ie,m as ae,q as y,ur as b,xt as x}from"./chart-tooltip-zAw7regG.js";import{t as oe}from"./leaderboard-chart-Bj8wjLto.js";import{t as se}from"./widget-state-BTUmQLxQ.js";import{C as ce,D as le,E as ue,O as de,S as fe,T as pe,b as me,k as S,t as C,w as he,x as w}from"./src-C3TDM8h_.js";function ge(e){let t=typeof e.label==`string`?e.label:``;return!t||t===T?r(`Untracked authors`,`jetpack-premium-analytics-pkg`):t}function _e(e){let t=_(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),postId:e.id??void 0,title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:y(e.views,t),previousShare:r===void 0?void 0:y(r,t),delta:r===void 0?void 0:v(e.views,r)}})}function ve(e=[]){if(e.length===0)return[];let t=_(e.map(e=>e.views),e.map(e=>e.previousViews));return e.map(e=>{let n=e.previousViews;return{id:e.key,label:ge(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:y(e.views,t),previousShare:n===void 0?void 0:y(n,t),delta:n===void 0?void 0:v(e.views,n),posts:_e(e.children??[])}})}var T,ye=t((()=>{C(),i(),T=`Untracked Authors`})),E,D,O,be=t((()=>{E=`_root_buj5x_1`,D=`_content_buj5x_11`,O={root:E,content:D}}));function xe({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:i=!1,refetch:o,withComparison:s=!1,legendLabels:l}){let{drillDownItem:u,drillDown:f,resetDrillDown:p}=ne(),m=(0,A.useMemo)(()=>u?e.find(e=>e.id===u)??null:null,[e,u]);(0,A.useEffect)(()=>{u&&!m&&!t&&!n&&p()},[u,m,t,n,p]);let h=(0,A.useMemo)(()=>m?m.posts.map(e=>({id:e.id,label:(0,j.jsx)(ee,{id:e.postId,label:e.title,link:e.link}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})):e.map(e=>({id:e.id,...d({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:a(r(`View posts by %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,j.jsxs)(`div`,{className:O.content,children:[m&&(0,j.jsx)(te,{label:r(`All authors`,`jetpack-premium-analytics-pkg`),onClick:p}),(0,j.jsx)(se,{isLoading:t,isFetching:n,isError:i,isEmpty:h.length===0,error:{description:r(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:c,description:r(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsx)(oe,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:l,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function Se({max:e}){let{reportParams:t}=g(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:u}=ie((0,A.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),d=(a||n.isPending)&&!s,p=(0,A.useMemo)(()=>ve(r?.rows??[]),[r]),m=(0,A.useMemo)(()=>re(t),[t]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(xe,{rows:p,isLoading:d,isFetching:o,isError:p.length===0&&c,refetch:u,withComparison:i,legendLabels:m}),(0,j.jsx)(l,{children:(0,j.jsx)(f,{report:`authors`})})]})}function k({attributes:e={}}){return(0,j.jsx)(m,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Se,{max:ae(e.max,M)})})})}var A,j,M,Ce=t((()=>{x(),C(),i(),A=e(n(),1),s(),ye(),be(),j=o(),M=7})),N,we=t((()=>{i(),s(),N={icon:c,attributes:[{id:`max`,label:r(`Maximum authors`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}})),P,F,I,L,R,z,B,Te=t((()=>{P=`jpa/authors`,F=`Popular authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:7,reportParams:b(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:7,reportParams:b(!1,e)}})}function Ee(e){return(0,U.jsx)(k,{...e})}function De({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:Ee,attributes:{max:7,reportParams:b(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),ue(),ce(),de(),me(),p(),Ce(),we(),Te(),U=o(),u(),W=`storybook/authors`,G=fe(B,N),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,S]},J={render:V,args:{withComparison:!0},decorators:[w,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(h(`stats/top-authors`,`loading`),()=>h(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(h(`stats/top-authors`,`error`),()=>h(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(h(`stats/top-authors`,`empty`),()=>h(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...he,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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