import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Mt as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-CBzr9xao.js";import{G as u,K as d,cr as f,hn as ee,yt as p}from"./chart-tooltip-DzdvRvIG.js";import{t as m}from"./leaderboard-chart-CNyZilu9.js";import{E as h,F as g,G as te,O as _,P as v,S as ne,V as y,b,v as x}from"./report-metric-BSxL4ZYF.js";import{t as re}from"./widget-state-BBYsrWkJ.js";import{r as ie}from"./src-Co3t-ffB.js";import{C as ae,D as oe,E as se,O as ce,S as le,T as ue,b as de,k as S,t as fe,w as pe,x as C}from"./src-D2qCugPl.js";import{n as me,t as he}from"./register-stats-mocks-DgW4JyT_.js";import{n as ge,t as w}from"./force-stats-mock-state-DOMWjC-n.js";var T,E,D,O,_e=e((()=>{T=`_placeholder_1d6co_1`,E=`_root_1d6co_9`,D=`_content_1d6co_18`,O={placeholder:T,root:E,content:D}}));function ve(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function k(e){let t=ie(e.link);return{label:ve(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...h({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:c,previousShare:r&&c!==void 0?u(c,o):void 0,delta:r&&c!==void 0?d(e.value,c):void 0}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(m,{data:ye(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function xe({max:e}){let{reportParams:t}=te(),{drillDownItem:r,drillDown:i,resetDrillDown:o}=l(),{comparisonRows:c,hasComparison:u,isLoading:d,isFetching:f,isError:p,refetch:m}=ee({...t,max:e},{maxRows:e}),h=(0,a.useMemo)(()=>(c?.rows??[]).map(k),[c]),g=(0,a.useMemo)(()=>h.find(e=>e.label===r)??null,[h,r]),_=!!g?.children?.length,v=_?g.children??[]:h,y=_?!!g?.childrenHaveComparison:u;(0,a.useEffect)(()=>{r&&!_&&!d&&!f&&!p&&o()},[r,_,d,f,p,o]);let b=(0,a.useCallback)(e=>{i(e.label)},[i]),x=_?(0,j.jsx)(ne,{label:n(`All Clicks`,`jetpack-premium-analytics`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics`),onClick:o}):null;return(0,j.jsxs)(`div`,{className:O.content,children:[x,(0,j.jsx)(re,{isLoading:d,isFetching:f,isError:h.length===0&&p,isEmpty:v.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:s,description:n(`No clicks in this period.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(be,{rows:v,withComparison:y,onDrillDown:_?void 0:b})})]})}function A({attributes:e={}}){let t=e?.max??10;return(0,j.jsx)(y,{attributes:e,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(xe,{max:t}),(0,j.jsx)(b,{children:(0,j.jsx)(x,{report:`clicks`})})]})})}var j,M,Se=e((()=>{p(),fe(),o(),r(),c(),_e(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Ce=e((()=>{r(),c(),N={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,we=e((()=>{P=`jpa/clicks`,F=`Clicks`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{max:10,reportParams:f(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{max:10,reportParams:f(!1,e)}})}function Te({withComparison:e,...t}){return(0,U.jsx)(ue,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{max:10,reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),v(),he(),ge(),se(),ce(),ae(),de(),Se(),Ce(),we(),U=i(),g(),me(),W=`storybook/clicks`,G=le(B,N),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`loading`),()=>w(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`error`),()=>w(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/clicks`,`empty`),()=>w(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{...pe,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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