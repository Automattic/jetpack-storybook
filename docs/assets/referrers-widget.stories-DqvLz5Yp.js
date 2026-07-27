import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-BjdAwQVW.js";import{G as u,K as d,_n as f,cr as p,yt as m}from"./chart-tooltip-ft5eh2zw.js";import{t as h}from"./leaderboard-chart-Bz28Aall.js";import{A as g,I as _,L as v,O as y,S as ee,U as b,b as x,q as te,w as ne}from"./report-metric-_fJwbHgb.js";import{t as re}from"./widget-state-BpVpEBQ5.js";import{r as S}from"./src-4FN4JKzw.js";import{C,D as w,E as ie,O as ae,S as oe,T as se,b as ce,k as T,t as le,w as ue,x as E}from"./src-CFctVIbM.js";import{n as de,t as fe}from"./register-stats-mocks-BDUTAKzN.js";import{n as pe,t as D}from"./force-stats-mock-state-C4CbT_gS.js";var O,k,A,j,me=e((()=>{O=`_placeholder_1d6co_1`,k=`_root_1d6co_9`,A=`_content_1d6co_18`,j={placeholder:O,root:k,content:A}}));function M(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:S(e.link)??void 0,icon:e.icon,children:e.children?.map(M),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function he(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,f=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...y({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:g({href:e.href,hasChildren:f,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:c,previousShare:l?u(c,o):void 0,delta:l?d(e.value,c):void 0}})}function ge({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,P.jsx)(h,{data:he(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:F})}function _e({max:e}){let{reportParams:r}=te(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:u,isError:d,refetch:p}=f({...r,max:e},{maxRows:e}),m=(0,a.useMemo)(()=>(i?.rows??[]).map(M),[i]),{drillDownItem:h,drillDown:g,resetDrillDown:_}=l(),v=(0,a.useMemo)(()=>{let e=[],t=m;for(let n of h??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[m,h]);(0,a.useEffect)(()=>{!h?.length||s||u||d||v.length===h.length||(v.length?g(v.map(e=>e.label)):_())},[h,v,s,u,d,g,_]);let y=v.length?v[v.length-1]:null,ee=y?y.children??[]:m,b=y?!!y.childrenHaveComparison:o,x=(0,a.useCallback)(e=>{g([...h??[],e.label])},[h,g]),S=(0,a.useCallback)(()=>{let e=v.slice(0,-1).map(e=>e.label);e.length?g(e):_()},[v,g,_]),C=v.length>1?v[v.length-2].label:null,w=C??n(`All referrers`,`jetpack-premium-analytics`),ie=C?t(n(`Back to %s`,`jetpack-premium-analytics`),C):n(`View all referrers`,`jetpack-premium-analytics`);return(0,P.jsxs)(`div`,{className:j.content,children:[v.length>0&&(0,P.jsx)(ne,{label:w,ariaLabel:ie,onClick:S}),(0,P.jsx)(re,{isLoading:s,isFetching:u,isError:m.length===0&&d,isEmpty:m.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:p}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(ge,{rows:ee,withComparison:b,onDrillDown:x})})]})}function N({attributes:e={}}){let t=e?.max??10;return(0,P.jsx)(b,{attributes:e,children:(0,P.jsxs)(`div`,{className:j.root,children:[(0,P.jsx)(_e,{max:t}),(0,P.jsx)(ee,{children:(0,P.jsx)(x,{report:`referrers`})})]})})}var P,F,ve=e((()=>{m(),le(),o(),r(),s(),me(),P=i(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),ye,be=e((()=>{r(),s(),ye={icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,xe=e((()=>{I=`jpa/referrers`,L=`Referrers`,R=`Websites and search engines referring visitors to your site.`,z={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({withComparison:e}){return(0,G.jsx)(N,{attributes:{max:10,reportParams:p(e)}})}function W(e){return(0,G.jsx)(N,{attributes:{max:10,reportParams:p(!1,e)}})}function Se({withComparison:e,...t}){return(0,G.jsx)(se,{...t,widgetType:Ce,renderModule:K,renderComponent:N,attributes:{max:10,reportParams:p(e)}})}var G,K,Ce,we,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),fe(),pe(),ie(),ae(),C(),ce(),ve(),be(),xe(),G=i(),v(),de(),K=`storybook/referrers`,Ce=oe(H,ye),we={title:`Packages/Premium Analytics/Widgets/Referrers`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:U,args:{withComparison:!1},decorators:[E,T]},J={render:U,args:{withComparison:!0},decorators:[E,T]},Y={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`loading`),()=>D(`stats/referrers`,null))},X={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`error`),()=>D(`stats/referrers`,null))},Z={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`empty`),()=>D(`stats/referrers`,null))},Q={render:e=>(0,G.jsx)(Se,{...e}),args:{...ue,withComparison:!0},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'loading');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/referrers` is answered by the\nlegacy stats mocks before the shared `setReportMockState` override can\nintercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'error');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'empty');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral globe
glyph and "No referrers in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ReferrersDashboardStory {...args} />,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,we as default};