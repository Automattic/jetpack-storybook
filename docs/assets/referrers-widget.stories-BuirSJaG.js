import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DoJYX5DX.js";import{D as l,F as u,G as ee,N as d,S as f,W as p,Z as m,k as te,tt as ne}from"./report-metric-Bgzb6Mqp.js";import{r as re}from"./hooks-CokVAque.js";import{J as h,X as g,q as _,ur as v,xt as y,yn as ie}from"./chart-tooltip-9T5OabQ2.js";import{t as b}from"./leaderboard-chart-Dcyg9t5i.js";import{r as x}from"./src-D5hzsG3A.js";import{t as ae}from"./widget-state-BNpSSJiM.js";import{C as S,D as oe,E as se,O as ce,S as le,T as ue,b as de,k as C,t as fe,w as pe,x as w}from"./src-B1eM00lO.js";import{n as me,t as he}from"./register-stats-mocks-DylargOm.js";import{n as ge,t as T}from"./force-stats-mock-state-C2zTk9HH.js";var E,D,O,k,_e=e((()=>{E=`_placeholder_1d6co_1`,D=`_root_1d6co_9`,O=`_content_1d6co_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:x(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ve(e,n,i){let a=h(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=n&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...d({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:u({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:_(e.value,a),previousValue:s,previousShare:c?_(s,a):void 0,delta:c?g(e.value,s):void 0}})}function ye({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(b,{data:ve(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N})}function be({max:e}){let{reportParams:n}=ne(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:l,isError:u,refetch:ee}=ie({...n,max:e},{maxRows:e}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(A),[i]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=re(),h=(0,a.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,a.useEffect)(()=>{!f?.length||s||l||u||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,s,l,u,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:o,y=(0,a.useCallback)(e=>{p([...f??[],e.label])},[f,p]),b=(0,a.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,S=x??t(`All referrers`,`jetpack-premium-analytics-pkg`),oe=x?r(t(`Back to %s`,`jetpack-premium-analytics-pkg`),x):t(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(`div`,{className:k.content,children:[h.length>0&&(0,M.jsx)(te,{label:S,ariaLabel:oe,onClick:b}),(0,M.jsx)(ae,{isLoading:s,isFetching:l,isError:d.length===0&&u,isEmpty:d.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:{icon:c,description:t(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsx)(ye,{rows:_,withComparison:v,onDrillDown:y})})]})}function j({attributes:e={}}){let t=e?.max??10;return(0,M.jsx)(m,{attributes:e,children:(0,M.jsxs)(`div`,{className:k.root,children:[(0,M.jsx)(be,{max:t}),(0,M.jsx)(l,{children:(0,M.jsx)(f,{report:`referrers`})})]})})}var M,N,xe=e((()=>{y(),fe(),o(),n(),s(),_e(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Se=e((()=>{n(),s(),P={icon:c,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),F,I,L,R,z,B,V,Ce=e((()=>{F=`jpa/referrers`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{max:10,reportParams:v(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{max:10,reportParams:v(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(ue,{...t,widgetType:K,renderModule:G,renderComponent:j,attributes:{max:10,reportParams:v(e)}})}var W,G,K,q,J,Y,X,Z,Q,$,Te;e((()=>{y(),p(),he(),ge(),se(),ce(),S(),de(),xe(),Se(),Ce(),W=i(),ee(),me(),G=`storybook/referrers`,K=le(V,P),q={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},J={render:H,args:{withComparison:!1},decorators:[w,C]},Y={render:H,args:{withComparison:!0},decorators:[w,C]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},$={render:e=>(0,W.jsx)(we,{...e}),args:{...pe,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'loading');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/referrers` is answered by the\nlegacy stats mocks before the shared `setReportMockState` override can\nintercept it.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'error');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'empty');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral globe
glyph and "No referrers in this period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Te=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,Te as __namedExportsOrder,q as default};