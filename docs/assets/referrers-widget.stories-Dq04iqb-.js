import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{ko as s,n as c}from"./build-module-CDRs4YxF.js";import{$ as l,E as u,G as d,I as f,K as p,O as ee,P as m,rt as te,w as h}from"./report-metric-B-YE0BGo.js";import{r as ne}from"./hooks-DfhnP2CM.js";import{Ft as g,Nn as re,Tr as _,ct as v,st as y,ut as b}from"./chart-tooltip-BeeFq8Fh.js";import{r as x}from"./src-Kc5-yU5b.js";import{t as S}from"./leaderboard-chart-Di97lXGM.js";import{t as ie}from"./widget-state-1kps8gjQ.js";import{C as ae,D as oe,E as se,O as ce,S as le,T as ue,b as de,k as C,t as fe,w as pe,x as w}from"./src-BORDh2i7.js";import{n as me,t as he}from"./register-stats-mocks-FZe1SF2e.js";import{n as ge,t as T}from"./force-stats-mock-state-CXDdl0Qo.js";var E,D,O,k,_e=e((()=>{E=`_placeholder_1d6co_1`,D=`_root_1d6co_9`,O=`_content_1d6co_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:x(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ve(e,r,i){let a=v(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...m({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:f({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:y(e.value,a),previousValue:s,previousShare:c?y(s,a):void 0,delta:c?b(e.value,s):void 0}})}function ye({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(S,{data:ve(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N})}function be({max:e}){let{reportParams:r}=te(),{comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=re({...r,max:e},{maxRows:e}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(A),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ne(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),x=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),S=g.length>1?g[g.length-2].label:null,ae=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),oe=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(`div`,{className:k.content,children:[g.length>0&&(0,M.jsx)(ee,{label:ae,ariaLabel:oe,onClick:x}),(0,M.jsx)(ie,{isLoading:c,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:s,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(ye,{rows:v,withComparison:y,onDrillDown:b})})]})}function j({attributes:e={}}){let t=e?.max??10;return(0,M.jsx)(l,{attributes:e,children:(0,M.jsxs)(`div`,{className:k.root,children:[(0,M.jsx)(be,{max:t}),(0,M.jsx)(u,{children:(0,M.jsx)(h,{report:`referrers`})})]})})}var M,N,xe=e((()=>{g(),fe(),o(),r(),c(),_e(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Se=e((()=>{r(),c(),P={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),F,I,L,R,z,B,V,Ce=e((()=>{F=`jpa/referrers`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{max:10,reportParams:_(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{max:10,reportParams:_(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(ue,{...t,widgetType:K,renderModule:G,renderComponent:j,attributes:{max:10,reportParams:_(e)}})}var W,G,K,Te,q,J,Y,X,Z,Q,$;e((()=>{g(),d(),he(),ge(),se(),ce(),ae(),de(),xe(),Se(),Ce(),W=i(),p(),me(),G=`storybook/referrers`,K=le(V,P),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[w,C]},J={render:H,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...pe,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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