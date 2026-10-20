import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{At as s,pn as c,t as l}from"./src-ZjHV2sqR.js";import{Lt as u,gt as ee,m as d,o as te,v as ne,yt as f}from"./charts-provider-DmTfgW6u.js";import{a as p}from"./src-isz3RBrT2.js";import"./rows-DAmD2BmE.js";import{r as m,t as re}from"./leaderboard-skeleton-DWGXZ4uv.js";import{n as h,r as g}from"./register-report-mocks-BmL3qzYr.js";import{t as ie}from"./widget-state-B6BF76Fg.js";import{n as _,r as v}from"./with-story-router-B8AmDh4M.js";import{i as y,o as b}from"./build-leaderboard-chart-data-CoXxseL4.js";import{f as ae,l as oe,o as se}from"./leaderboard-pRae8XCa.js";import{C as ce,O as le,t as ue}from"./src-B0Rsgp69.js";import{a as x,g as de,h as S,i as fe,m as pe,n as me,p as he,r as C}from"./with-widget-canvas-fgX8Iy8a.js";import{n as ge,t as _e}from"./use-no-views-empty-state-CA04MmPV.js";import{n as ve,t as ye}from"./register-stats-mocks-Clz1DhQG.js";import{n as be,t as w}from"./force-stats-mock-state-DPNShNVf.js";var T,E,D,O,xe=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:p(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,r,i){let a=ee(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...y({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:b({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:f(e.value,a),previousValue:s,previousShare:c?f(s,a):void 0,delta:c?u(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,j.jsx)(m,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:Se(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function we(){let{reportParams:e}=ne(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:ee}=s({...e,max:10},{maxRows:10}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(k),[i]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=te(),h=(0,a.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,a.useEffect)(()=>{!f?.length||c||l||u||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,c,l,u,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:o,y=ge({isLoading:c,isError:u,isEmpty:d.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,a.useCallback)(e=>{p([...f??[],e.label])},[f,p]),ue=(0,a.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,de=x??n(`All referrers`,`jetpack-premium-analytics-pkg`),S=x?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),x):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:O.content,children:[h.length>0&&(0,j.jsx)(oe,{label:de,ariaLabel:S,onClick:ue}),(0,j.jsx)(ie,{isLoading:y.isLoading,isFetching:l,isError:d.length===0&&u,isEmpty:d.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:y.empty,renderLoading:(0,j.jsx)(re,{rows:10}),children:(0,j.jsx)(Ce,{rows:_,withComparison:v,onDrillDown:b})})]}),(0,j.jsxs)(se,{children:[(0,j.jsx)(ae,{report:`referrers`}),(0,j.jsx)(ce,{exporter:le,status:{isLoading:c,isFetching:l,isError:r.isError},rowCount:d.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(d,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(we,{})})})}var j,M,Te=e((()=>{l(),ue(),o(),r(),_e(),xe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,Ee=e((()=>{N=`jpa/referrers`,P=`jpa/globe`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:c(!1,e)}})}function De({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),h(),ye(),be(),S(),_(),x(),me(),Te(),Ee(),U=i(),g(),ve(),W=`storybook/referrers`,G=fe(B),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,v]},J={render:V,args:{withComparison:!0},decorators:[C,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,v],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,v],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,v],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...he,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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