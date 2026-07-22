import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Mt as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-DQvGqNOc.js";import{L as u,R as d,dt as f,er as p,sn as ee}from"./chart-tooltip-Dp0VEc09.js";import{t as m}from"./leaderboard-chart-CTrCapqH.js";import{E as h,M as g,N as _,U as v,b as te,g as y,v as b,w as x,z as S}from"./report-metric-4C1kNKUT.js";import{t as ne}from"./widget-state-CGtL2PSn.js";import{C as re,D as C,E as ie,S as w,T as ae,b as T,t as E,w as oe,x as D}from"./src-B0pFHV8V.js";import{n as se,t as ce}from"./register-stats-mocks-Cwu701UE.js";import{n as O,t as k}from"./force-stats-mock-state-CvyO2fnM.js";var A,j,M,N,le=e((()=>{A=`_placeholder_1d6co_1`,j=`_root_1d6co_9`,M=`_content_1d6co_18`,N={placeholder:A,root:j,content:M}}));function ue(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function P(e){return{label:ue(e),value:e.views,previousValue:e.previousValue,...e.link?{href:e.link}:{},icon:e.icon,children:e.children?.map(P),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function de(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...x({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:h({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:c,previousShare:r&&c!==void 0?u(c,o):void 0,delta:r&&c!==void 0?d(e.value,c):void 0}})}function fe({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,L.jsx)(m,{data:de(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:R})}function F({max:e}){let{reportParams:t}=v(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=l(),{comparisonRows:c,hasComparison:u,isLoading:d,isFetching:f,isError:p,refetch:m}=ee({...t,max:e},{maxRows:e}),h=(0,a.useMemo)(()=>(c?.rows??[]).map(P),[c]),g=(0,a.useMemo)(()=>h.find(e=>e.label===r)??null,[h,r]),_=!!g?.children?.length,y=_?g.children??[]:h,b=_?!!g?.childrenHaveComparison:u;(0,a.useEffect)(()=>{r&&!_&&!d&&!f&&!p&&o()},[r,_,d,f,p,o]);let x=(0,a.useCallback)(e=>{i(e.label)},[i]),S=_?(0,L.jsx)(te,{label:n(`All Clicks`,`jetpack-premium-analytics`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics`),onClick:o}):null;return(0,L.jsxs)(`div`,{className:N.content,children:[S,(0,L.jsx)(ne,{isLoading:d,isFetching:f,isError:h.length===0&&p,isEmpty:y.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(fe,{rows:y,withComparison:b,onDrillDown:_?void 0:x})})]})}function I({attributes:e={}}){let t=e?.max??10;return(0,L.jsx)(S,{attributes:e,children:(0,L.jsxs)(`div`,{className:N.root,children:[(0,L.jsx)(F,{max:t}),(0,L.jsx)(b,{children:(0,L.jsx)(y,{report:`clicks`})})]})})}var L,R,z=e((()=>{f(),E(),o(),r(),c(),le(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,pe=e((()=>{r(),c(),B={name:`jpa/clicks`,title:n(`Clicks`,`jetpack-premium-analytics`),help:{content:n(`The external links your visitors clicked most often, sorted by clicks.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(I,{attributes:{max:10,reportParams:p(e)}})}function H(e){return(0,U.jsx)(I,{attributes:{max:10,reportParams:p(!1,e)}})}function me({withComparison:e,...t}){return(0,U.jsx)(re,{...t,widgetType:G,renderModule:W,renderComponent:I,attributes:{max:10,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),g(),ce(),O(),oe(),ie(),T(),z(),pe(),U=i(),_(),se(),W=`storybook/clicks`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[D,C]},J={render:V,args:{withComparison:!0},decorators:[D,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[D,C],beforeEach:()=>(k(`stats/clicks`,`loading`),()=>k(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[D,C],beforeEach:()=>(k(`stats/clicks`,`error`),()=>k(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[D,C],beforeEach:()=>(k(`stats/clicks`,`empty`),()=>k(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...w,withComparison:!0},argTypes:{...ae,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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