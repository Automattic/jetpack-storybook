import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,ha as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,r as ee,v as te}from"./hooks-Cj_Fmvum.js";import{$t as u,ct as ne,t as d}from"./src-nYBQ2yP0.js";import{Dt as f,Et as p,kt as m}from"./helpers-B4MbMU4M.js";import"./constants-B1kGztHF.js";import{r as h,t as re}from"./leaderboard-skeleton-C6XvbQFD.js";import{i as g,r as _}from"./register-report-mocks-Dj6syrWc.js";import{N as v,S as y,j as ie,v as ae,w as oe}from"./report-metric-B1pu_NGS.js";import{a as se}from"./src-ByWK3DeM.js";import{t as ce}from"./widget-state-MjWQMHsw.js";import{t as le}from"./src-BtOn3QZQ.js";import{a as ue,d as de,f as b,h as x,i as fe,m as pe,n as me,p as he,r as S,u as ge}from"./with-widget-canvas-B-2SYneu.js";import{n as _e,t as ve}from"./register-stats-mocks-CF4pNHzT.js";import{n as ye,t as C}from"./force-stats-mock-state-0gsti5tD.js";var w,T,E,D,be=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function xe(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function O(e){let t=se(e.link);return{label:xe(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,n,i){let a=f(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...ie({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:v({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:n&&s!==void 0?p(s,a):void 0,delta:n&&s!==void 0?m(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(h,{data:Se(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function k(){let{reportParams:e}=te(),{drillDownItem:n,drillDown:r,resetDrillDown:i}=ee(),{comparisonRows:s,hasComparison:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ne({...e,max:10},{maxRows:10}),p=(0,a.useMemo)(()=>(s?.rows??[]).map(O),[s]),m=(0,a.useMemo)(()=>p.find(e=>e.label===n)??null,[p,n]),h=!!m?.children?.length,g=h?m.children??[]:p,_=h?!!m?.childrenHaveComparison:c;(0,a.useEffect)(()=>{n&&!h&&!l&&!u&&!d&&i()},[n,h,l,u,d,i]);let v=(0,a.useCallback)(e=>{r(e.label)},[r]),y=h?(0,j.jsx)(oe,{label:t(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,j.jsxs)(`div`,{className:D.content,children:[y,(0,j.jsx)(ce,{isLoading:l,isFetching:u,isError:p.length===0&&d,isEmpty:g.length===0,error:{description:t(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{icon:o,description:t(`No clicks in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(re,{rows:10}),children:(0,j.jsx)(Ce,{rows:g,withComparison:_,onDrillDown:h?void 0:v})})]})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsxs)(`div`,{className:D.root,children:[(0,j.jsx)(k,{}),(0,j.jsx)(y,{children:(0,j.jsx)(ae,{report:`clicks`})})]})})}var j,M,we=e((()=>{d(),le(),s(),n(),c(),be(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Te=e((()=>{c(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ee=e((()=>{P=`jpa/clicks`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:u(!1,e)}})}function De({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),_(),ve(),ye(),b(),pe(),ue(),me(),we(),Te(),Ee(),U=i(),g(),_e(),W=`storybook/clicks`,G=fe(B,N),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,x]},J={render:V,args:{withComparison:!0},decorators:[S,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/clicks`,`loading`),()=>C(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/clicks`,`error`),()=>C(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/clicks`,`empty`),()=>C(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...ge,withComparison:!0},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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