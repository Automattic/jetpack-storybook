import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Mt as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-ByI8BUwy.js";import{t as u,u as d}from"./build-module-DrY6laDU.js";import{L as f,R as p,dt as m,er as h,sn as ee}from"./chart-tooltip-BOekm0Z5.js";import{t as g}from"./leaderboard-chart-BBBbnReQ.js";import{H as te,M as _,R as v,b as ne,g as y,j as b,v as x,w as S}from"./report-metric-BwY4Mv0i.js";import{t as re}from"./widget-state-Bc82xo0x.js";import{C as ie,D as C,E as ae,S as oe,T as se,b as ce,t as le,w as ue,x as w}from"./src-DatP540Y.js";import{n as T,t as de}from"./register-stats-mocks-Ekro8b5d.js";import{n as fe,t as E}from"./force-stats-mock-state-B6t5GQEc.js";var D,O,k,A,j,M,N,pe=e((()=>{D=`_labelIcon_1bc0q_1`,O=`_labelLink_1bc0q_9`,k=`_labelText_1bc0q_10`,A=`_placeholder_1bc0q_31`,j=`_root_1bc0q_39`,M=`_content_1bc0q_48`,N={labelIcon:D,labelLink:O,labelText:k,placeholder:A,root:j,content:M}}));function me(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function P(e){return{label:me(e),value:e.views,previousValue:e.previousValue,...e.link?{href:e.link}:{},icon:e.icon,children:e.children?.map(P),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function he(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=!!e.children?.length,u=!!e.href&&!l,m=(0,R.jsx)(S,{label:e.label,imageUrl:e.icon??void 0,imageAlt:``,imageFallback:`hidden`,imageClassName:N.labelIcon});return{id:`${s}-${e.href??e.label}`,label:u?(0,R.jsx)(d,{className:N.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:m}):(0,R.jsx)(`span`,{className:N.labelText,title:e.label,children:m}),currentValue:e.value,currentShare:f(e.value,a),previousValue:c,previousShare:r&&c!==void 0?f(c,o):void 0,delta:r&&c!==void 0?p(e.value,c):void 0,...l&&i&&{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics`),e.label)}}})}function F({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,R.jsx)(g,{data:he(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:z})}function I({max:e}){let{reportParams:t}=te(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=l(),{comparisonRows:c,hasComparison:u,isLoading:d,isFetching:f,isError:p,refetch:m}=ee({...t,max:e},{maxRows:e}),h=(0,a.useMemo)(()=>(c?.rows??[]).map(P),[c]),g=(0,a.useMemo)(()=>h.find(e=>e.label===r)??null,[h,r]),_=!!g?.children?.length,v=_?g.children??[]:h,y=_?!!g?.childrenHaveComparison:u;(0,a.useEffect)(()=>{r&&!_&&!d&&!f&&!p&&o()},[r,_,d,f,p,o]);let b=(0,a.useCallback)(e=>{i(e.label)},[i]),x=_?(0,R.jsx)(ne,{label:n(`All Clicks`,`jetpack-premium-analytics`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics`),onClick:o}):null;return(0,R.jsxs)(`div`,{className:N.content,children:[x,(0,R.jsx)(re,{isLoading:d,isFetching:f,isError:h.length===0&&p,isEmpty:v.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(F,{rows:v,withComparison:y,onDrillDown:_?void 0:b})})]})}function L({attributes:e={}}){let t=e?.max??10;return(0,R.jsx)(v,{attributes:e,children:(0,R.jsxs)(`div`,{className:N.root,children:[(0,R.jsx)(I,{max:t}),(0,R.jsx)(x,{children:(0,R.jsx)(y,{report:`clicks`})})]})})}var R,z,ge=e((()=>{m(),le(),o(),r(),c(),u(),pe(),R=i(),z={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,_e=e((()=>{r(),c(),B={name:`jpa/clicks`,title:n(`Clicks`,`jetpack-premium-analytics`),help:{content:n(`The external links your visitors clicked most often, sorted by clicks.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(L,{attributes:{max:10,reportParams:h(e)}})}function H(e){return(0,U.jsx)(L,{attributes:{max:10,reportParams:h(!1,e)}})}function ve({withComparison:e,...t}){return(0,U.jsx)(ie,{...t,widgetType:G,renderModule:W,renderComponent:L,attributes:{max:10,reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),b(),de(),fe(),ue(),ae(),ce(),ge(),_e(),U=i(),_(),T(),W=`storybook/clicks`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,C]},J={render:V,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(E(`stats/clicks`,`loading`),()=>E(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(E(`stats/clicks`,`error`),()=>E(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(E(`stats/clicks`,`empty`),()=>E(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(ve,{...e}),args:{...oe,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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