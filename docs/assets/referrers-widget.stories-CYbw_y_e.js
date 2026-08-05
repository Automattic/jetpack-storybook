import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Do as s,n as c}from"./build-module-Bb7IR3OP.js";import{A as l,E as u,G as d,M as ee,S as f,W as p,Z as m,tt as te,w as h}from"./report-metric-C2qSdc10.js";import{r as ne}from"./hooks-D8xIM8Ni.js";import{J as g,X as _,q as v,ur as y,xt as b,yn as re}from"./chart-tooltip-Q7InuXI3.js";import{t as x}from"./leaderboard-chart-DDNzyKO1.js";import{r as S}from"./src-Bl-JIeZA.js";import{C,D as ie,E as ae,O as oe,S as se,T as ce,b as le,k as w,t as ue,w as de,x as T}from"./src-Chtk5f2b.js";import{t as fe}from"./widget-state-BcIxksOs.js";import{n as pe,t as me}from"./register-stats-mocks-CJc_LZBp.js";import{n as he,t as E}from"./force-stats-mock-state-C9a8q0MB.js";var D,O,k,A,ge=e((()=>{D=`_placeholder_1d6co_1`,O=`_root_1d6co_9`,k=`_content_1d6co_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:S(e.link)??void 0,icon:e.icon,children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function _e(e,r,i){let a=g(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,u=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...l({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:ee({href:e.href,hasChildren:u,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:v(e.value,a),previousValue:s,previousShare:c?v(s,a):void 0,delta:c?_(e.value,s):void 0}})}function ve({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,N.jsx)(x,{data:_e(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:P})}function ye({max:e}){let{reportParams:r}=te(),{comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:d,refetch:ee}=re({...r,max:e},{maxRows:e}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(j),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ne(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||d||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,d,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),x=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),S=g.length>1?g[g.length-2].label:null,C=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),ie=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,N.jsxs)(`div`,{className:A.content,children:[g.length>0&&(0,N.jsx)(u,{label:C,ariaLabel:ie,onClick:x}),(0,N.jsx)(fe,{isLoading:c,isFetching:l,isError:f.length===0&&d,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:{icon:s,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(ve,{rows:v,withComparison:y,onDrillDown:b})})]})}function M({attributes:e={}}){let t=e?.max??10;return(0,N.jsx)(m,{attributes:e,children:(0,N.jsxs)(`div`,{className:A.root,children:[(0,N.jsx)(ye,{max:t}),(0,N.jsx)(h,{children:(0,N.jsx)(f,{report:`referrers`})})]})})}var N,P,be=e((()=>{b(),ue(),o(),r(),c(),ge(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),xe,Se=e((()=>{r(),c(),xe={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),F,I,L,R,z,B,V,Ce=e((()=>{F=`jpa/referrers`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:10,reportParams:y(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:10,reportParams:y(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(ce,{...t,widgetType:K,renderModule:G,renderComponent:M,attributes:{max:10,reportParams:y(e)}})}var W,G,K,Te,q,J,Y,X,Z,Q,$;e((()=>{b(),p(),me(),he(),ae(),oe(),C(),le(),be(),Se(),Ce(),W=i(),d(),pe(),G=`storybook/referrers`,K=se(V,xe),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[T,w]},J={render:H,args:{withComparison:!0},decorators:[T,w]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...de,withComparison:!0},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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