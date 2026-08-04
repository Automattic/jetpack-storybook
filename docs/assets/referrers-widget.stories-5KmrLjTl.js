import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DoJYX5DX.js";import{D as l,F as u,G as ee,N as d,S as f,W as p,Z as m,k as te,tt as ne}from"./report-metric-BZKq9I9M.js";import{r as re}from"./hooks-Cb9u9nvt.js";import{J as h,X as g,q as _,ur as v,xt as y,yn as ie}from"./chart-tooltip-BHxZ4UFz.js";import{t as b}from"./leaderboard-chart-CjkzsgMY.js";import{r as x}from"./src-B7__Z5UC.js";import{t as ae}from"./widget-state-muBMjCZx.js";import{C as oe,D as se,E as ce,O as le,S as ue,T as de,b as fe,k as S,t as pe,w as me,x as C}from"./src-Cpa-QPvJ.js";import{n as he,t as ge}from"./register-stats-mocks-xbxLfDBb.js";import{n as _e,t as w}from"./force-stats-mock-state-Cer6nttX.js";var T,E,D,O,ve=e((()=>{T=`_placeholder_1d6co_1`,E=`_root_1d6co_9`,D=`_content_1d6co_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:x(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,r,i){let a=h(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...d({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:u({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:_(e.value,a),previousValue:s,previousShare:c?_(s,a):void 0,delta:c?g(e.value,s):void 0}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(b,{data:ye(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function xe({max:e}){let{reportParams:r}=ne(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:l,isError:u,refetch:ee}=ie({...r,max:e},{maxRows:e}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(k),[i]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=re(),h=(0,a.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,a.useEffect)(()=>{!f?.length||s||l||u||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,s,l,u,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:o,y=(0,a.useCallback)(e=>{p([...f??[],e.label])},[f,p]),b=(0,a.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,oe=x??n(`All referrers`,`jetpack-premium-analytics-pkg`),se=x?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),x):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(`div`,{className:O.content,children:[h.length>0&&(0,j.jsx)(te,{label:oe,ariaLabel:se,onClick:b}),(0,j.jsx)(ae,{isLoading:s,isFetching:l,isError:d.length===0&&u,isEmpty:d.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsx)(be,{rows:_,withComparison:v,onDrillDown:y})})]})}function A({attributes:e={}}){let t=e?.max??10;return(0,j.jsx)(m,{attributes:e,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(xe,{max:t}),(0,j.jsx)(l,{children:(0,j.jsx)(f,{report:`referrers`})})]})})}var j,M,Se=e((()=>{y(),pe(),o(),r(),s(),ve(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Ce=e((()=>{r(),s(),N={icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,we=e((()=>{P=`jpa/referrers`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{max:10,reportParams:v(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{max:10,reportParams:v(!1,e)}})}function Te({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{max:10,reportParams:v(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),p(),ge(),_e(),ce(),le(),oe(),fe(),Se(),Ce(),we(),U=i(),ee(),he(),W=`storybook/referrers`,G=ue(B,N),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{...me,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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