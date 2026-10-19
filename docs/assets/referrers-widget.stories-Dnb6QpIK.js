import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{Ot as s,dn as c,t as l}from"./src-C8GYyU0i.js";import{m as u,o as ee,v as te,vt as d,xt as f,zt as p}from"./charts-provider-DMMnHAE0.js";import{a as m}from"./src-Bg5sNiCT.js";import"./rows-DAmD2BmE.js";import{r as h,t as ne}from"./leaderboard-skeleton-Bq0o3xmu.js";import{n as g,r as _}from"./register-report-mocks-CafIPn6t.js";import{t as re}from"./widget-state-DC5iYoxU.js";import{n as v,r as y}from"./with-story-router-B8AmDh4M.js";import{i as b,o as x}from"./build-leaderboard-chart-data-BPjyEssm.js";import{f as ie,l as ae,o as oe}from"./leaderboard-B6KlccvI.js";import{C as se,O as ce,t as le}from"./src-Df1NMb_K.js";import{a as S,g as ue,h as de,i as fe,m as pe,n as me,p as he,r as C}from"./with-widget-canvas-BJBM-7vC.js";import{n as ge,t as _e}from"./use-no-views-empty-state-VBoVzsor.js";import{n as ve,t as ye}from"./register-stats-mocks-D2ipU5vx.js";import{n as be,t as w}from"./force-stats-mock-state-vgyxnUBA.js";var T,E,D,O,xe=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:m(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,r,i){let a=d(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:f(e.value,a),previousValue:s,previousShare:c?f(s,a):void 0,delta:c?p(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,j.jsx)(h,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:Se(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function we(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=s({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(k),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ee(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=ge({isLoading:c,isError:u,isEmpty:f.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),x=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),le=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),S=g.length>1?g[g.length-2].label:null,ue=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),de=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:O.content,children:[g.length>0&&(0,j.jsx)(ae,{label:ue,ariaLabel:de,onClick:le}),(0,j.jsx)(re,{isLoading:b.isLoading,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:b.empty,renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(Ce,{rows:v,withComparison:y,onDrillDown:x})})]}),(0,j.jsxs)(oe,{children:[(0,j.jsx)(ie,{report:`referrers`}),(0,j.jsx)(se,{exporter:ce,status:{isLoading:c,isFetching:l,isError:r.isError},rowCount:f.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(we,{})})})}var j,M,Te=e((()=>{l(),le(),o(),r(),_e(),xe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Ee=e((()=>{N={attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,V,De=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(A,{attributes:{reportParams:c(e)}})}function U(e){return(0,W.jsx)(A,{attributes:{reportParams:c(!1,e)}})}function Oe({withComparison:e,...t}){return(0,W.jsx)(pe,{...t,widgetType:K,renderModule:G,renderComponent:A,attributes:{reportParams:c(e)}})}var W,G,K,ke,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),ye(),be(),de(),v(),S(),me(),Te(),Ee(),De(),W=i(),_(),ve(),G=`storybook/referrers`,K=fe(V,N),ke={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[C,y]},J={render:H,args:{withComparison:!0},decorators:[C,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(Oe,{...e}),args:{...he,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,ke as default};