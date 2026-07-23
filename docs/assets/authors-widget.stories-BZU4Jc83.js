import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{c as r,n as i,t as a}from"./build-module-Da_5_6n_.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{n as s,nt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-C8fzb3OF.js";import{G as u,K as d,cr as f,f as p,ln as m,pt as h,yt as g}from"./chart-tooltip-oGdCeVNL.js";import{t as ee}from"./leaderboard-chart-DKm34nzM.js";import{E as _,F as te,G as ne,L as v,P as re,S as ie,V as ae}from"./report-metric-Bov3irZA.js";import{t as oe}from"./widget-state-CX0GrJEr.js";import{r as se}from"./src-BEwu3M69.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as y,t as b,w as pe,x}from"./src-DDBKoSc7.js";function me(e){let t=typeof e.label==`string`?e.label:``;return!t||t===C?i(`Untracked authors`,`jetpack-premium-analytics`):t}function S(e){let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map((e,n)=>{let r=e.previousViews;return{id:e.id==null?e.link??`post-${n}`:String(e.id),title:typeof e.label==`string`?e.label:String(e.label??``),link:e.link??null,currentValue:e.views,previousValue:r,currentShare:u(e.views,t),previousShare:r===void 0?void 0:u(r,t),delta:r===void 0?void 0:d(e.views,r)}})}function he(e=[]){if(e.length===0)return[];let t=Math.max(...e.map(e=>Math.max(e.views,e.previousViews??0)),1);return e.map(e=>{let n=e.previousViews;return{id:e.key,label:me(e),avatarUrl:e.icon??null,currentValue:e.views,previousValue:n,currentShare:u(e.views,t),previousShare:n===void 0?void 0:u(n,t),delta:n===void 0?void 0:d(e.views,n),posts:S(e.children??[])}})}var C,ge=t((()=>{b(),a(),C=`Untracked Authors`})),w,T,E,_e=t((()=>{w=`_root_buj5x_1`,T=`_content_buj5x_11`,E={root:w,content:T}}));function ve({rows:e=[],isLoading:t=!1,isFetching:n=!1,isError:a=!1,refetch:o,withComparison:s=!1,legendLabels:u}){let{drillDownItem:d,drillDown:f,resetDrillDown:p}=l(),m=(0,O.useMemo)(()=>d?e.find(e=>e.id===d)??null:null,[e,d]);(0,O.useEffect)(()=>{d&&!m&&!t&&!n&&p()},[d,m,t,n,p]);let h=(0,O.useMemo)(()=>m?m.posts.map(e=>{let t=se(e.link);return{id:e.id,..._({label:e.title,media:{kind:`none`},action:t?{kind:`link`,href:t}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta}}):e.map(e=>({id:e.id,..._({label:e.label,media:{kind:`avatar`,url:e.avatarUrl??void 0,name:e.label},action:e.posts.length>0?{kind:`drillDown`,onClick:()=>f(e.id),ariaLabel:r(i(`View posts by %s`,`jetpack-premium-analytics`),e.label)}:{kind:`static`}}),currentValue:e.currentValue,previousValue:e.previousValue,currentShare:e.currentShare,previousShare:e.previousShare,delta:e.delta})),[e,m,f]),g=!!m;return(0,k.jsxs)(`div`,{className:E.content,children:[m&&(0,k.jsx)(ie,{label:i(`All authors`,`jetpack-premium-analytics`),onClick:p}),(0,k.jsx)(oe,{isLoading:t,isFetching:n,isError:a,isEmpty:h.length===0,error:{description:i(`We couldn't load authors. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:i(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:c,description:i(g?`This author has no posts with views for the selected period.`:`No author views in this period.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(ee,{data:h,withComparison:s,withOverlayLabel:!0,showLegend:!1,legendLabels:u,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})]})}function ye({max:e}){let{reportParams:t}=ne(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=m((0,O.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),u=(a||n.isPending)&&!s,d=(0,O.useMemo)(()=>he(r?.rows??[]),[r]),f=(0,O.useMemo)(()=>h(t),[t]);return(0,k.jsx)(ve,{rows:d,isLoading:u,isFetching:o,isError:d.length===0&&c,refetch:l,withComparison:i,legendLabels:f})}function D({attributes:e={}}){return(0,k.jsx)(ae,{attributes:e,children:(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(ye,{max:p(e.max,A)})})})}var O,k,A,j=t((()=>{g(),b(),a(),O=e(n(),1),s(),ge(),_e(),k=o(),A=7})),M,N=t((()=>{a(),s(),M={icon:c,attributes:[{id:`max`,label:i(`Maximum authors`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}})),P,F,I,L,R,z,B,be=t((()=>{P=`jpa/authors`,F=`Authors`,I=`Top authors by views, with their most viewed posts.`,L={content:`The authors whose content received the most views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(D,{attributes:{max:7,reportParams:f(e)}})}function H(e){return(0,U.jsx)(D,{attributes:{max:7,reportParams:f(!1,e)}})}function xe(e){return(0,U.jsx)(D,{...e})}function Se({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:xe,attributes:{max:7,reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),ue(),ce(),y(),re(),j(),N(),be(),U=o(),te(),W=`storybook/authors`,G=de(B,M),K={title:`Packages/Premium Analytics/Widgets/Authors`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Authors" widget. Displays top authors by views from the Jetpack Stats top-authors endpoint. Rows show author avatars and drill down into linked post rows; comparison mode carries period-over-period deltas into both author and post views.`}}}},q={render:V,args:{withComparison:!1},decorators:[x]},J={render:V,args:{withComparison:!0},decorators:[x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/top-authors`,`loading`),()=>v(`stats/top-authors`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/top-authors`,`error`),()=>v(`stats/top-authors`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/top-authors`,`empty`),()=>v(`stats/top-authors`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{...pe,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAuthors,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'loading');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/top-authors', 'error');
    return () => setReportMockState('stats/top-authors', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAuthorsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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