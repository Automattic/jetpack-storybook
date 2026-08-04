import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Mt as s,n as c}from"./build-module-DoJYX5DX.js";import{D as l,F as u,G as d,N as f,S as p,W as m,Z as h,k as ee,tt as te}from"./report-metric-D7ckCXfW.js";import{r as ne}from"./hooks-B_Y8VRGl.js";import{J as g,X as _,_n as re,q as v,ur as y,xt as b}from"./chart-tooltip-DU2Kl93e.js";import{t as x}from"./leaderboard-chart-DnRhrfgV.js";import{r as ie}from"./src-CcWO-i_3.js";import{t as ae}from"./widget-state-DbOGFekp.js";import{C as oe,D as se,E as ce,O as le,S as ue,T as de,b as fe,k as S,t as pe,w as me,x as C}from"./src-Cj1qWGZF.js";import{n as he,t as ge}from"./register-stats-mocks-B6JsyBh2.js";import{n as _e,t as w}from"./force-stats-mock-state-mJD-UoEK.js";var T,E,D,O,ve=e((()=>{T=`_placeholder_1d6co_1`,E=`_root_1d6co_9`,D=`_content_1d6co_18`,O={placeholder:T,root:E,content:D}}));function ye(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function k(e){let t=ie(e.link);return{label:ye(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function be(e,r,i){let a=g(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...f({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:u({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:v(e.value,a),previousValue:s,previousShare:r&&s!==void 0?v(s,a):void 0,delta:r&&s!==void 0?_(e.value,s):void 0}})}function xe({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(x,{data:be(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function Se({max:e}){let{reportParams:t}=te(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=ne(),{comparisonRows:c,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=re({...t,max:e},{maxRows:e}),m=(0,a.useMemo)(()=>(c?.rows??[]).map(k),[c]),h=(0,a.useMemo)(()=>m.find(e=>e.label===r)??null,[m,r]),g=!!h?.children?.length,_=g?h.children??[]:m,v=g?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{r&&!g&&!u&&!d&&!f&&o()},[r,g,u,d,f,o]);let y=(0,a.useCallback)(e=>{i(e.label)},[i]),b=g?(0,j.jsx)(ee,{label:n(`All Clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:o}):null;return(0,j.jsxs)(`div`,{className:O.content,children:[b,(0,j.jsx)(ae,{isLoading:u,isFetching:d,isError:m.length===0&&f,isEmpty:_.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsx)(xe,{rows:_,withComparison:v,onDrillDown:g?void 0:y})})]})}function A({attributes:e={}}){let t=e?.max??10;return(0,j.jsx)(h,{attributes:e,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(Se,{max:t}),(0,j.jsx)(l,{children:(0,j.jsx)(p,{report:`clicks`})})]})})}var j,M,Ce=e((()=>{b(),pe(),o(),r(),c(),ve(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,we=e((()=>{r(),c(),N={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,Te=e((()=>{P=`jpa/clicks`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{max:10,reportParams:y(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{max:10,reportParams:y(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{max:10,reportParams:y(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),m(),ge(),_e(),ce(),le(),oe(),fe(),Ce(),we(),Te(),U=i(),d(),he(),W=`storybook/clicks`,G=ue(B,N),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`loading`),()=>w(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`error`),()=>w(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`empty`),()=>w(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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