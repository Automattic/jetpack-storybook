import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{Et as s,dn as c,t as l}from"./src-Cb67uYK_.js";import{It as u,ht as d,m as f,o as ee,v as te,vt as p}from"./charts-provider-lLnwFhJR.js";import{a as m}from"./src-B7ZRlWVF.js";import"./rows-DAmD2BmE.js";import{r as h,t as ne}from"./leaderboard-skeleton-BUGTUgz7.js";import{n as g,r as _}from"./register-report-mocks-DrSoJ9KN.js";import{t as re}from"./widget-state-CGJ_THew.js";import{n as v,r as y}from"./with-story-router-B8AmDh4M.js";import{i as b,o as x}from"./build-leaderboard-chart-data-BMsfj0Su.js";import{f as ie,l as ae,o as oe}from"./leaderboard-B-Zu7fpn.js";import{O as se,b as ce,t as le}from"./src-CIDqCknM.js";import{a as ue,g as de,h as fe,i as pe,m as me,n as he,p as ge,r as S}from"./with-widget-canvas-DLVzIgMG.js";import{n as _e,t as ve}from"./use-no-views-empty-state-CjNx2UE_.js";import{n as ye,t as be}from"./register-stats-mocks-CuPRjitt.js";import{n as xe,t as C}from"./force-stats-mock-state-B0EqimRY.js";var w,T,E,D,Se=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function Ce(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function O(e){let t=m(e.link);return{label:Ce(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function we(e,r,i){let a=d(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:r&&s!==void 0?p(s,a):void 0,delta:r&&s!==void 0?u(e.value,s):void 0}})}function Te({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,A.jsx)(h,{data:we(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function Ee(){let{reportParams:e}=te(),{drillDownItem:t,drillDown:r,resetDrillDown:i}=ee(),{primary:o,comparisonRows:c,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=s({...e,max:10},{maxRows:10}),m=(0,a.useMemo)(()=>(c?.rows??[]).map(O),[c]),h=(0,a.useMemo)(()=>m.find(e=>e.label===t)??null,[m,t]),g=!!h?.children?.length,_=g?h.children??[]:m,v=g?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{t&&!g&&!u&&!d&&!f&&i()},[t,g,u,d,f,i]);let y=_e({isLoading:u,isError:f,isEmpty:m.length===0},n(`You don’t have clicked links recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,a.useCallback)(e=>{r(e.label)},[r]),x=g?(0,A.jsx)(ae,{label:n(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:D.content,children:[x,(0,A.jsx)(re,{isLoading:y.isLoading,isFetching:d,isError:m.length===0&&f,isEmpty:_.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},empty:y.empty,renderLoading:(0,A.jsx)(ne,{rows:10}),children:(0,A.jsx)(Te,{rows:_,withComparison:v,onDrillDown:g?void 0:b})})]}),(0,A.jsxs)(oe,{children:[(0,A.jsx)(ie,{report:`clicks`}),(0,A.jsx)(ce,{exporter:se,status:{isLoading:u,isFetching:d,isError:o.isError},rowCount:m.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(f,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Ee,{})})})}var A,j,De=e((()=>{l(),le(),o(),r(),ve(),Se(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Oe=e((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,ke=e((()=>{N=`jpa/clicks`,P=`jpa/link`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:c(!1,e)}})}function Ae({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),be(),xe(),fe(),v(),ue(),he(),De(),Oe(),ke(),U=i(),_(),ye(),W=`storybook/clicks`,G=pe(B,M),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,y]},J={render:V,args:{withComparison:!0},decorators:[S,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(C(`stats/clicks`,`loading`),()=>C(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(C(`stats/clicks`,`error`),()=>C(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(C(`stats/clicks`,`empty`),()=>C(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Ae,{...e}),args:{...ge,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'loading');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/clicks`\nbefore `setReportMockState` can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'error');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'empty');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ClicksDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};