import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Do as s,n as c}from"./build-module-Bb7IR3OP.js";import{$ as l,E as u,K as ee,M as d,O as te,P as f,q as p,rt as ne,w as m}from"./report-metric-BRuIZsuS.js";import{r as re}from"./hooks-DG9KdyvZ.js";import{J as h,X as g,dr as _,q as v,xt as y,yn as ie}from"./chart-tooltip-DXg9f6a_.js";import{t as b}from"./leaderboard-chart-DHV5QBYt.js";import{r as x}from"./src-Bqh2kJe7.js";import{C as S,D as C,E as ae,O as oe,S as se,T as ce,b as le,k as w,t as ue,w as de,x as T}from"./src-DijKZpVl.js";import{t as fe}from"./widget-state-BPMsNppS.js";import{n as pe,t as me}from"./register-stats-mocks-CX7Bv2DD.js";import{n as he,t as E}from"./force-stats-mock-state-wuQo_xpf.js";var D,O,k,A,ge=e((()=>{D=`_placeholder_1d6co_1`,O=`_root_1d6co_9`,k=`_content_1d6co_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:x(e.link)??void 0,icon:e.icon,children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function _e(e,r,i){let a=h(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...d({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:f({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:v(e.value,a),previousValue:s,previousShare:c?v(s,a):void 0,delta:c?g(e.value,s):void 0}})}function ve({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,N.jsx)(b,{data:_e(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:P})}function ye({max:e}){let{reportParams:r}=ne(),{comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:ee}=ie({...r,max:e},{maxRows:e}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(j),[i]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=re(),h=(0,a.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,a.useEffect)(()=>{!f?.length||c||l||u||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,c,l,u,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:o,y=(0,a.useCallback)(e=>{p([...f??[],e.label])},[f,p]),b=(0,a.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,S=x??n(`All referrers`,`jetpack-premium-analytics-pkg`),C=x?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),x):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,N.jsxs)(`div`,{className:A.content,children:[h.length>0&&(0,N.jsx)(te,{label:S,ariaLabel:C,onClick:b}),(0,N.jsx)(fe,{isLoading:c,isFetching:l,isError:d.length===0&&u,isEmpty:d.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:{icon:s,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(ve,{rows:_,withComparison:v,onDrillDown:y})})]})}function M({attributes:e={}}){let t=e?.max??10;return(0,N.jsx)(l,{attributes:e,children:(0,N.jsxs)(`div`,{className:A.root,children:[(0,N.jsx)(ye,{max:t}),(0,N.jsx)(u,{children:(0,N.jsx)(m,{report:`referrers`})})]})})}var N,P,be=e((()=>{y(),ue(),o(),r(),c(),ge(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),xe,Se=e((()=>{r(),c(),xe={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),F,I,L,R,z,B,V,Ce=e((()=>{F=`jpa/referrers`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:10,reportParams:_(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:10,reportParams:_(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(ce,{...t,widgetType:K,renderModule:G,renderComponent:M,attributes:{max:10,reportParams:_(e)}})}var W,G,K,Te,q,J,Y,X,Z,Q,$;e((()=>{y(),ee(),me(),he(),ae(),oe(),S(),le(),be(),Se(),Ce(),W=i(),p(),pe(),G=`storybook/referrers`,K=se(V,xe),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[T,w]},J={render:H,args:{withComparison:!0},decorators:[T,w]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...de,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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