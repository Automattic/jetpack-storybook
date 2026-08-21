import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{ko as s,n as c}from"./build-module-CDRs4YxF.js";import{$ as l,E as ee,G as u,K as d,M as f,P as p,S as m,rt as te,w as h}from"./report-metric-BRpjNMrs.js";import{qt as g,t as _,tt as ne}from"./src-Lp3ZIoIq.js";import{r as re}from"./hooks-4ckUfM6_.js";import"./constants-B1kGztHF.js";import{it as v,ot as y,rt as b}from"./chart-tooltip-DCxwmuhC.js";import{r as x}from"./src-Chgs8Uyh2.js";import{r as ie,t as ae}from"./leaderboard-skeleton-duz6EoTb.js";import{t as oe}from"./widget-state-DNAyBTFz.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as S,t as me,w as he,x as C}from"./src-Bu8E2mr6.js";import{n as ge,t as _e}from"./register-stats-mocks-BjoVZ7pZ.js";import{n as ve,t as w}from"./force-stats-mock-state-D35EpIHt.js";var T,E,D,O,ye=e((()=>{T=`_placeholder_1d6co_1`,E=`_root_1d6co_9`,D=`_content_1d6co_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:x(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function be(e,r,i){let a=v(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...f({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:p({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:b(e.value,a),previousValue:s,previousShare:c?b(s,a):void 0,delta:c?y(e.value,s):void 0}})}function xe({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(ie,{data:be(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function Se(){let{reportParams:e}=te(),{comparisonRows:r,hasComparison:i,isLoading:o,isFetching:c,isError:l,refetch:u}=ne({...e,max:10},{maxRows:10}),d=(0,a.useMemo)(()=>(r?.rows??[]).map(k),[r]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=re(),h=(0,a.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,a.useEffect)(()=>{!f?.length||o||c||l||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,o,c,l,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:i,y=(0,a.useCallback)(e=>{p([...f??[],e.label])},[f,p]),b=(0,a.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,ie=x??n(`All referrers`,`jetpack-premium-analytics-pkg`),se=x?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),x):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(`div`,{className:O.content,children:[h.length>0&&(0,j.jsx)(ee,{label:ie,ariaLabel:se,onClick:b}),(0,j.jsx)(oe,{isLoading:o,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:s,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(xe,{rows:_,withComparison:v,onDrillDown:y})})]})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(Se,{}),(0,j.jsx)(h,{children:(0,j.jsx)(m,{report:`referrers`})})]})})}var j,M,Ce=e((()=>{_(),me(),o(),r(),c(),ye(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,we=e((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Te=e((()=>{P=`jpa/referrers`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:g(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:g(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:g(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),u(),_e(),ve(),le(),ue(),se(),pe(),Ce(),we(),Te(),U=i(),d(),ge(),W=`storybook/referrers`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...he,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};