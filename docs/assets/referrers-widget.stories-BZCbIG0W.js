import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ao as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,r as ee,v as te}from"./hooks-CoL__6GQ.js";import{$t as u,t as d,ut as ne}from"./src-N7kxR1RU.js";import{Dt as f,Et as p,kt as m}from"./helpers-Cm5ZV6e7.js";import"./constants-B1kGztHF.js";import{r as h,t as re}from"./leaderboard-skeleton-D4A1VzGH.js";import{i as g,r as _}from"./register-report-mocks-Bc1uuzDP.js";import{N as v,S as y,j as b,v as x,w as ie}from"./report-metric-Ad5LWGgc.js";import{a as S}from"./src-D_dm9-Xz.js";import{t as ae}from"./widget-state-a0l-BqGx.js";import{t as oe}from"./src-BnLaj3c2.js";import{a as se,d as ce,f as le,h as C,i as ue,m as de,n as fe,p as pe,r as w,u as me}from"./with-widget-canvas-D92XTD_i.js";import{n as he,t as ge}from"./register-stats-mocks-Bq8sfJyT.js";import{n as _e,t as T}from"./force-stats-mock-state-1UzuCc2D.js";var E,D,O,k,ve=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:S(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,n,i){let a=f(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=n&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:v({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:c?p(s,a):void 0,delta:c?m(e.value,s):void 0}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(h,{data:ye(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N})}function xe(){let{reportParams:e}=te(),{comparisonRows:n,hasComparison:i,isLoading:s,isFetching:c,isError:l,refetch:u}=ne({...e,max:10},{maxRows:10}),d=(0,o.useMemo)(()=>(n?.rows??[]).map(A),[n]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=ee(),h=(0,o.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,o.useEffect)(()=>{!f?.length||s||c||l||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,s,c,l,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:i,y=(0,o.useCallback)(e=>{p([...f??[],e.label])},[f,p]),b=(0,o.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,S=x??t(`All referrers`,`jetpack-premium-analytics-pkg`),oe=x?r(t(`Back to %s`,`jetpack-premium-analytics-pkg`),x):t(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(`div`,{className:k.content,children:[h.length>0&&(0,M.jsx)(ie,{label:S,ariaLabel:oe,onClick:b}),(0,M.jsx)(ae,{isLoading:s,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:a,description:t(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(re,{rows:10}),children:(0,M.jsx)(be,{rows:_,withComparison:v,onDrillDown:y})})]})}function j({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsxs)(`div`,{className:k.root,children:[(0,M.jsx)(xe,{}),(0,M.jsx)(y,{children:(0,M.jsx)(x,{report:`referrers`})})]})})}var M,N,Se=e((()=>{d(),oe(),s(),n(),c(),ve(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Ce,we=e((()=>{c(),Ce={icon:a,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Te=e((()=>{P=`jpa/referrers`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(j,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(j,{attributes:{reportParams:u(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(ce,{...t,widgetType:G,renderModule:W,renderComponent:j,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),_(),ge(),_e(),le(),de(),se(),fe(),Se(),we(),Te(),U=i(),g(),he(),W=`storybook/referrers`,G=ue(B,Ce),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,C]},J={render:V,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...me,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/referrers`\nbefore `setReportMockState` can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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