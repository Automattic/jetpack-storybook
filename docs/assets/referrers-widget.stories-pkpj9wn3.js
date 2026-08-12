import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{ko as s,n as c}from"./build-module-CDRs4YxF.js";import{$ as l,E as u,K as d,M as f,O as ee,P as p,q as m,rt as te,w as h}from"./report-metric-CfDrBwgo.js";import{r as ne}from"./hooks-Dg4KXyoc.js";import{An as re,Mt as g,Sr as _,at as v,it as y,st as b}from"./chart-tooltip-r8TscMPi.js";import{t as x}from"./leaderboard-chart-v72FTA72.js";import{r as S}from"./src-D37KzZNQ.js";import{t as ie}from"./widget-state-teBrQEcv.js";import{C,D as w,E as ae,O as oe,S as se,T as ce,b as le,k as T,t as ue,w as de,x as E}from"./src-C3nV94bs.js";import{n as fe,t as pe}from"./register-stats-mocks-DFz5SG_H.js";import{n as me,t as D}from"./force-stats-mock-state-Covf7njC.js";var O,k,A,j,he=e((()=>{O=`_placeholder_1d6co_1`,k=`_root_1d6co_9`,A=`_content_1d6co_18`,j={placeholder:O,root:k,content:A}}));function M(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:S(e.link)??void 0,icon:e.icon,children:e.children?.map(M),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ge(e,r,i){let a=v(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...f({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:p({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:y(e.value,a),previousValue:s,previousShare:c?y(s,a):void 0,delta:c?b(e.value,s):void 0}})}function _e({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,P.jsx)(x,{data:ge(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:ye})}function ve({max:e}){let{reportParams:r}=te(),{comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=re({...r,max:e},{maxRows:e}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(M),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ne(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),x=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),S=g.length>1?g[g.length-2].label:null,C=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),w=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,P.jsxs)(`div`,{className:j.content,children:[g.length>0&&(0,P.jsx)(ee,{label:C,ariaLabel:w,onClick:x}),(0,P.jsx)(ie,{isLoading:c,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:s,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(_e,{rows:v,withComparison:y,onDrillDown:b})})]})}function N({attributes:e={}}){let t=e?.max??10;return(0,P.jsx)(l,{attributes:e,children:(0,P.jsxs)(`div`,{className:j.root,children:[(0,P.jsx)(ve,{max:t}),(0,P.jsx)(u,{children:(0,P.jsx)(h,{report:`referrers`})})]})})}var P,ye,be=e((()=>{g(),ue(),o(),r(),c(),he(),P=i(),ye={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,xe=e((()=>{r(),c(),F={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/referrers`,L=`Top referrers`,R=`Websites and search engines referring visitors to your site.`,z={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({withComparison:e}){return(0,G.jsx)(N,{attributes:{max:10,reportParams:_(e)}})}function W(e){return(0,G.jsx)(N,{attributes:{max:10,reportParams:_(!1,e)}})}function Ce({withComparison:e,...t}){return(0,G.jsx)(ce,{...t,widgetType:we,renderModule:K,renderComponent:N,attributes:{max:10,reportParams:_(e)}})}var G,K,we,Te,q,J,Y,X,Z,Q,$;e((()=>{g(),d(),pe(),me(),ae(),oe(),C(),le(),be(),xe(),Se(),G=i(),m(),fe(),K=`storybook/referrers`,we=se(H,F),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:U,args:{withComparison:!1},decorators:[E,T]},J={render:U,args:{withComparison:!0},decorators:[E,T]},Y={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`loading`),()=>D(`stats/referrers`,null))},X={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`error`),()=>D(`stats/referrers`,null))},Z={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`empty`),()=>D(`stats/referrers`,null))},Q={render:e=>(0,G.jsx)(Ce,{...e}),args:{...de,withComparison:!0},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,Te as default};