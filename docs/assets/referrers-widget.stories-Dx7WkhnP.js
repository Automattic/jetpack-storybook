import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Oo as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{bt as l,fn as u,t as d}from"./src-ByGJk8Gp.js";import{_ as f,dn as p,fn as m,mn as h,o as ee,x as te}from"./charts-provider-CJog4E7r.js";import"./rows-DAmD2BmE.js";import{r as g,t as ne}from"./leaderboard-skeleton-CLxBpjDt.js";import{n as _,r as v}from"./with-story-router-Beljd9ki.js";import{n as y,r as b}from"./register-report-mocks-AxM45C0w.js";import{_ as re,b as ie,i as ae,m as oe,o as x}from"./leaderboard-R99y6-YE.js";import{t as se}from"./widget-state-DdDpx9ou.js";import{a as S}from"./src-deUIbX9U.js";import{d as ce,o as le}from"./report-metric-nXAYU6Kh.js";import{t as C}from"./src-CaWYvifl.js";import{a as ue,d as de,f as fe,i as pe,n as me,p as he,r as w,u as ge}from"./with-widget-canvas-CcJbLZqo.js";import{n as _e,t as ve}from"./register-stats-mocks-DFhLdcBb.js";import{n as ye,t as T}from"./force-stats-mock-state-3xGJ8G6D.js";var E,D,O,k,be=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:S(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,n,i){let a=m(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=n&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...ae({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:c?p(s,a):void 0,delta:c?h(e.value,s):void 0}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(g,{data:xe(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:we})}function Ce(){let{reportParams:e}=te(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:u,refetch:d}=l({...e,max:10},{maxRows:10}),f=(0,o.useMemo)(()=>(i?.rows??[]).map(A),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ee(),g=(0,o.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,o.useEffect)(()=>{!p?.length||s||c||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,s,c,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:a,b=(0,o.useCallback)(e=>{m([...p??[],e.label])},[p,m]),ae=(0,o.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),x=g.length>1?g[g.length-2].label:null,S=x??t(`All referrers`,`jetpack-premium-analytics-pkg`),C=x?r(t(`Back to %s`,`jetpack-premium-analytics-pkg`),x):t(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:k.content,children:[g.length>0&&(0,M.jsx)(re,{label:S,ariaLabel:C,onClick:ae}),(0,M.jsx)(se,{isLoading:s,isFetching:c,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,M.jsx)(ne,{rows:10}),children:(0,M.jsx)(Se,{rows:v,withComparison:y,onDrillDown:b})})]}),(0,M.jsxs)(oe,{children:[(0,M.jsx)(ie,{report:`referrers`}),(0,M.jsx)(le,{exporter:ce,status:{isLoading:s,isFetching:c,isError:n.isError},rowCount:f.length})]})]})}function j({attributes:e={}}){return(0,M.jsx)(f,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Ce,{})})})}var M,we,Te=e((()=>{d(),C(),s(),n(),be(),M=i(),we={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Ee=e((()=>{c(),N={icon:a,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,De=e((()=>{P=`jpa/referrers`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(j,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(j,{attributes:{reportParams:u(!1,e)}})}function Oe({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:j,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),y(),ve(),ye(),fe(),_(),ue(),me(),Te(),Ee(),De(),U=i(),b(),_e(),W=`storybook/referrers`,G=pe(B,N),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[w,v]},J={render:V,args:{withComparison:!0},decorators:[w,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,v],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,v],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[w,v],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ge,withComparison:!0},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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