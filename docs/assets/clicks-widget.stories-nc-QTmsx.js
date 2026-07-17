import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Mt as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-rz8RVAOs.js";import{t as u,u as d}from"./build-module-WNS23NaA.js";import{L as f,Yn as p,rn as ee,ut as m}from"./chart-tooltip-DMgEXtyG.js";import{t as h}from"./leaderboard-chart-DV6psgvz.js";import{C as g,N as te,S as _,c as v,f as ne,g as y,k as b,u as x}from"./report-metric-BmlYe5tZ.js";import{t as S}from"./widget-state-CPJBhgdL.js";import{C as re,S as ie,b as ae,t as oe,w as C,x as se,y as ce}from"./src-B_XkmHiU.js";import{n as le,r as w}from"./with-widget-canvas-Dz43KNHY.js";import{n as ue,t as T}from"./register-stats-mocks-U70o5rGX.js";import{n as E,t as D}from"./force-stats-mock-state-2ChyspaL.js";var O,k,A,j,M,N,P,de=e((()=>{O=`_labelIcon_1bc0q_1`,k=`_labelLink_1bc0q_9`,A=`_labelText_1bc0q_10`,j=`_placeholder_1bc0q_31`,M=`_root_1bc0q_39`,N=`_content_1bc0q_48`,P={labelIcon:O,labelLink:k,labelText:A,placeholder:j,root:M,content:N}}));function fe(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function F(e){return{label:fe(e),value:e.views,previousValue:e.previousValue,...e.link?{href:e.link}:{},icon:e.icon,children:e.children?.map(F),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function pe(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=!!e.children?.length,u=!!e.href&&!l,p=(0,R.jsx)(y,{label:e.label,imageUrl:e.icon??void 0,imageAlt:``,imageFallback:`hidden`,imageClassName:P.labelIcon});return{id:`${s}-${e.href??e.label}`,label:u?(0,R.jsx)(d,{className:P.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:p}):(0,R.jsx)(`span`,{className:P.labelText,title:e.label,children:p}),currentValue:e.value,currentShare:e.value/a*100,previousValue:c,previousShare:r&&c!==void 0?c/o*100:void 0,delta:r&&c!==void 0?f(e.value,c):void 0,...l&&i&&{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics`),e.label)}}})}function me({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,R.jsx)(h,{data:pe(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:z})}function I({max:e}){let{reportParams:t}=te(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=l(),{comparisonRows:c,hasComparison:u,isLoading:d,isFetching:f,isError:p,refetch:m}=ee({...t,max:e},{maxRows:e}),h=(0,a.useMemo)(()=>(c?.rows??[]).map(F),[c]),g=(0,a.useMemo)(()=>h.find(e=>e.label===r)??null,[h,r]),_=!!g?.children?.length,v=_?g.children??[]:h,y=_?!!g?.childrenHaveComparison:u;(0,a.useEffect)(()=>{r&&!_&&!d&&!f&&!p&&o()},[r,_,d,f,p,o]);let b=(0,a.useCallback)(e=>{i(e.label)},[i]),x=_?(0,R.jsx)(ne,{label:n(`All Clicks`,`jetpack-premium-analytics`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics`),onClick:o}):null;return(0,R.jsxs)(`div`,{className:P.content,children:[x,(0,R.jsx)(S,{isLoading:d,isFetching:f,isError:h.length===0&&p,isEmpty:v.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(me,{rows:v,withComparison:y,onDrillDown:_?void 0:b})})]})}function L({attributes:e={}}){let t=e?.max??10;return(0,R.jsx)(b,{attributes:e,children:(0,R.jsxs)(`div`,{className:P.root,children:[(0,R.jsx)(I,{max:t}),(0,R.jsx)(x,{children:(0,R.jsx)(v,{report:`clicks`})})]})})}var R,z,he=e((()=>{m(),oe(),o(),r(),c(),u(),de(),R=i(),z={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,ge=e((()=>{r(),c(),B={name:`jpa/clicks`,title:n(`Clicks`,`jetpack-premium-analytics`),help:{content:n(`Most clicked external links to track engaging content.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(L,{attributes:{max:10,reportParams:p(e)}})}function H(e){return(0,U.jsx)(L,{attributes:{max:10,reportParams:p(!1,e)}})}function _e({withComparison:e,...t}){return(0,U.jsx)(ae,{...t,widgetType:G,renderModule:W,renderComponent:L,attributes:{max:10,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),T(),E(),se(),re(),le(),he(),ge(),U=i(),g(),ue(),W=`storybook/clicks`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,C]},J={render:V,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(D(`stats/clicks`,`loading`),()=>D(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(D(`stats/clicks`,`error`),()=>D(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(D(`stats/clicks`,`empty`),()=>D(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(_e,{...e}),args:{...ce,withComparison:!0},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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