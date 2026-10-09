import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{Ct as s,t as c,wn as l}from"./src-BXGbBQuk.js";import{$t as u,Xt as d,Zt as f,_ as p,o as ee,x as te}from"./charts-provider-CPqqWd8T.js";import{a as m}from"./src-CO_V8Snc.js";import"./rows-DAmD2BmE.js";import{r as h,t as g}from"./leaderboard-skeleton-CzpMkhaw.js";import{n as _,r as v}from"./register-report-mocks-HpcX_mM9.js";import{t as ne}from"./widget-state-Ct82KwxU.js";import{n as y,r as b}from"./with-story-router-Beljd9ki.js";import{g as re,i as x,o as ie,p as ae,y as oe}from"./leaderboard-CH7EAciD.js";import{n as se,u as ce}from"./components-zhFTPI41.js";import{t as le}from"./src-BO6UD8Zu.js";import{a as ue,g as de,h as fe,i as pe,m as me,n as he,p as ge,r as S}from"./with-widget-canvas-Bkxis0Y9.js";import{n as _e,t as ve}from"./register-stats-mocks-C8L9U9rH.js";import{n as ye,t as C}from"./force-stats-mock-state-CH1j2nnE.js";var w,T,E,D,be=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function xe(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function O(e){let t=m(e.link);return{label:xe(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,n,i){let a=f(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...x({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:ie({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:d(e.value,a),previousValue:s,previousShare:n&&s!==void 0?d(s,a):void 0,delta:n&&s!==void 0?u(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,A.jsx)(h,{data:Se(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function we(){let{reportParams:e}=te(),{drillDownItem:n,drillDown:r,resetDrillDown:i}=ee(),{primary:o,comparisonRows:c,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=s({...e,max:10},{maxRows:10}),m=(0,a.useMemo)(()=>(c?.rows??[]).map(O),[c]),h=(0,a.useMemo)(()=>m.find(e=>e.label===n)??null,[m,n]),_=!!h?.children?.length,v=_?h.children??[]:m,y=_?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{n&&!_&&!u&&!d&&!f&&i()},[n,_,u,d,f,i]);let b=(0,a.useCallback)(e=>{r(e.label)},[r]),x=_?(0,A.jsx)(re,{label:t(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:D.content,children:[x,(0,A.jsx)(ne,{isLoading:u,isFetching:d,isError:m.length===0&&f,isEmpty:v.length===0,error:{description:t(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},renderLoading:(0,A.jsx)(g,{rows:10}),children:(0,A.jsx)(Ce,{rows:v,withComparison:y,onDrillDown:_?void 0:b})})]}),(0,A.jsxs)(ae,{children:[(0,A.jsx)(oe,{report:`clicks`}),(0,A.jsx)(se,{exporter:ce,status:{isLoading:u,isFetching:d,isError:o.isError},rowCount:m.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(we,{})})})}var A,j,Te=e((()=>{c(),le(),o(),n(),be(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Ee=e((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,De=e((()=>{N=`jpa/clicks`,P=`jpa/link`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:l(!1,e)}})}function Oe({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),_(),ve(),ye(),fe(),y(),ue(),he(),Te(),Ee(),De(),U=i(),v(),_e(),W=`storybook/clicks`,G=pe(B,M),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,b]},J={render:V,args:{withComparison:!0},decorators:[S,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(C(`stats/clicks`,`loading`),()=>C(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(C(`stats/clicks`,`error`),()=>C(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(C(`stats/clicks`,`empty`),()=>C(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ge,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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