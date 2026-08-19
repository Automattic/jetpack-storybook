import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{ga as s,n as c}from"./build-module-CDRs4YxF.js";import{E as l,I as u,J as d,O as ee,P as f,at as te,q as p,tt as m,w as h}from"./report-metric-BJXFm3aW.js";import{r as ne}from"./hooks-Cynwb_KN.js";import{Cr as g,Nt as _,at as v,ct as y,kn as re,ot as b}from"./chart-tooltip-NxBvBReY.js";import{o as x}from"./src-B4PL4a3g.js";import{r as ie,t as ae}from"./leaderboard-skeleton-C6zwVn4I.js";import{t as oe}from"./widget-state-BwxLrgsq.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as S,t as me,w as he,x as C}from"./src-CGQy9yxW.js";import{n as ge,t as _e}from"./register-stats-mocks-C-NWTY1b.js";import{n as ve,t as w}from"./force-stats-mock-state-BTO-M4pg.js";var T,E,D,O,ye=e((()=>{T=`_placeholder_1d6co_1`,E=`_root_1d6co_9`,D=`_content_1d6co_18`,O={placeholder:T,root:E,content:D}}));function be(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function k(e){let t=x(e.link);return{label:be(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,r,i){let a=b(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...f({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:u({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:v(e.value,a),previousValue:s,previousShare:r&&s!==void 0?v(s,a):void 0,delta:r&&s!==void 0?y(e.value,s):void 0}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(ie,{data:xe(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function Ce({max:e}){let{reportParams:t}=te(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=ne(),{comparisonRows:c,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=re({...t,max:e},{maxRows:e}),m=(0,a.useMemo)(()=>(c?.rows??[]).map(k),[c]),h=(0,a.useMemo)(()=>m.find(e=>e.label===r)??null,[m,r]),g=!!h?.children?.length,_=g?h.children??[]:m,v=g?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{r&&!g&&!u&&!d&&!f&&o()},[r,g,u,d,f,o]);let y=(0,a.useCallback)(e=>{i(e.label)},[i]),b=g?(0,j.jsx)(ee,{label:n(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:o}):null;return(0,j.jsxs)(`div`,{className:O.content,children:[b,(0,j.jsx)(oe,{isLoading:u,isFetching:d,isError:m.length===0&&f,isEmpty:_.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ae,{rows:e}),children:(0,j.jsx)(Se,{rows:_,withComparison:v,onDrillDown:g?void 0:y})})]})}function A({attributes:e={}}){let t=e?.max??10;return(0,j.jsx)(m,{attributes:e,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(Ce,{max:t}),(0,j.jsx)(l,{children:(0,j.jsx)(h,{report:`clicks`})})]})})}var j,M,we=e((()=>{_(),me(),o(),r(),c(),ye(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Te=e((()=>{r(),c(),N={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,Ee=e((()=>{P=`jpa/clicks`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{max:10,reportParams:g(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{max:10,reportParams:g(!1,e)}})}function De({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{max:10,reportParams:g(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),p(),_e(),ve(),le(),ue(),se(),pe(),we(),Te(),Ee(),U=i(),d(),ge(),W=`storybook/clicks`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`loading`),()=>w(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`error`),()=>w(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`empty`),()=>w(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...he,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/clicks` is answered by the legacy\nstats mocks before the shared `setReportMockState` override can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral chart
glyph and "No clicks in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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