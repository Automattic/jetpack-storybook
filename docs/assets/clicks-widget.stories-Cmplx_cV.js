import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Mt as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-DntS_Jp8.js";import{t as u,u as d}from"./build-module-DokNvSv5.js";import{L as f,Yn as p,rn as ee,ut as m}from"./chart-tooltip-B-p4R1ne.js";import{t as h}from"./leaderboard-chart-BMWgogS0.js";import{C as g,N as _,S as v,f as te,g as y,k as b}from"./report-metric-BEx9Ox4P.js";import{t as ne}from"./widget-state-jmx0JXRV.js";import{S as x,b as S,t as re,x as ie,y as ae}from"./src-bT7CpZTu.js";import{n as C,r as w}from"./with-widget-canvas-Dz43KNHY.js";import{n as oe,t as se}from"./register-stats-mocks-DTdk33pS.js";import{n as ce,t as T}from"./force-stats-mock-state-ORZ_zReY.js";var E,D,O,k,A,j,M,le=e((()=>{E=`_labelIcon_1bc0q_1`,D=`_labelLink_1bc0q_9`,O=`_labelText_1bc0q_10`,k=`_placeholder_1bc0q_31`,A=`_root_1bc0q_39`,j=`_content_1bc0q_48`,M={labelIcon:E,labelLink:D,labelText:O,placeholder:k,root:A,content:j}}));function N(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function P(e){return{label:N(e),value:e.views,previousValue:e.previousValue,...e.link?{href:e.link}:{},icon:e.icon,children:e.children?.map(P),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ue(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=!!e.children?.length,u=!!e.href&&!l,p=(0,I.jsx)(y,{label:e.label,imageUrl:e.icon??void 0,imageAlt:``,imageFallback:`hidden`,imageClassName:M.labelIcon});return{id:`${s}-${e.href??e.label}`,label:u?(0,I.jsx)(d,{className:M.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:p}):(0,I.jsx)(`span`,{className:M.labelText,title:e.label,children:p}),currentValue:e.value,currentShare:e.value/a*100,previousValue:c,previousShare:r&&c!==void 0?c/o*100:void 0,delta:r&&c!==void 0?f(e.value,c):void 0,...l&&i&&{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics`),e.label)}}})}function de({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,I.jsx)(h,{data:ue(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:L})}function fe({max:e}){let{reportParams:t}=_(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=l(),{comparisonRows:c,hasComparison:u,isLoading:d,isFetching:f,isError:p,refetch:m}=ee({...t,max:e},{maxRows:e}),h=(0,a.useMemo)(()=>(c?.rows??[]).map(P),[c]),g=(0,a.useMemo)(()=>h.find(e=>e.label===r)??null,[h,r]),v=!!g?.children?.length,y=v?g.children??[]:h,b=v?!!g?.childrenHaveComparison:u;(0,a.useEffect)(()=>{r&&!v&&!d&&!f&&!p&&o()},[r,v,d,f,p,o]);let x=(0,a.useCallback)(e=>{i(e.label)},[i]),S=v?(0,I.jsx)(te,{label:n(`All Clicks`,`jetpack-premium-analytics`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics`),onClick:o}):null;return(0,I.jsxs)(`div`,{className:M.content,children:[S,(0,I.jsx)(ne,{isLoading:d,isFetching:f,isError:h.length===0&&p,isEmpty:y.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(de,{rows:y,withComparison:b,onDrillDown:v?void 0:x})})]})}function F({attributes:e={}}){let t=e?.max??10;return(0,I.jsx)(b,{attributes:e,children:(0,I.jsx)(`div`,{className:M.root,children:(0,I.jsx)(fe,{max:t})})})}var I,L,R=e((()=>{m(),re(),o(),r(),c(),u(),le(),I=i(),L={type:`number`,options:{useMultipliers:!0,decimals:0}}})),z,B=e((()=>{r(),c(),z={name:`jpa/clicks`,title:n(`Clicks`,`jetpack-premium-analytics`),help:{content:n(`Most clicked external links to track engaging content.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{max:10,reportParams:p(e)}})}function H(e){return(0,U.jsx)(F,{attributes:{max:10,reportParams:p(!1,e)}})}function pe({withComparison:e,...t}){return(0,U.jsx)(S,{...t,widgetType:G,renderModule:W,renderComponent:F,attributes:{max:10,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),v(),se(),ce(),ie(),C(),R(),B(),U=i(),g(),oe(),W=`storybook/clicks`,G={name:z.name,title:z.title,icon:z.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[w]},J={render:V,args:{withComparison:!0},decorators:[w]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(T(`stats/clicks`,`loading`),()=>T(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(T(`stats/clicks`,`error`),()=>T(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(T(`stats/clicks`,`empty`),()=>T(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(pe,{...e}),args:{...ae,withComparison:!0},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'loading');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/clicks` is answered by the legacy\nstats mocks before the shared `setReportMockState` override can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'error');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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