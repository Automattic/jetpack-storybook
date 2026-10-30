import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{B as ee,I as s,_ as c,f as te,o as ne,y as re}from"./charts-provider-CJceu84j.js";import{Ft as ie,t as l,vn as u}from"./src-DvzWgCqE.js";import{a as ae}from"./src-CXKaTWRV.js";import{t as oe}from"./widget-state-BygCceVJ.js";import{I as se,L as d,V as ce,i as f,n as p,r as m}from"./with-story-router-Bl7d_9HM.js";import"./constants-B9OTkkI1.js";import{r as h,t as le}from"./leaderboard-skeleton-9Ba15YQj.js";import{n as g,r as _}from"./register-report-mocks-CI2bPEM7.js";import{l as v,s as y}from"./locations-geo-chart-CRxPU1Bn.js";import{a as b,g as x,h as S,i as C,m as w,n as T,p as ue,r as E}from"./with-widget-canvas-BX79mBf6.js";import{n as de,t as fe}from"./use-no-views-empty-state-QN88uOmG.js";import{n as pe,t as me}from"./register-stats-mocks-Nvcu00DF.js";import{n as he,t as D}from"./force-stats-mock-state-B0U9Dr7D.js";var ge,_e,O,k,ve=e((()=>{ge=`_placeholder_1oate_1`,_e=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:ge,root:_e,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:ae(e.link)??void 0,icon:e.icon,spamDomain:c(e),children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,r,i){return e.map((e,a)=>{let o=!!e.children?.length;return{id:`${a}-${e.href??e.label}`,...y({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:v({href:e.href,hrefAs:`viewLink`,hasChildren:o,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&i?(0,M.jsx)(d,{domain:e.spamDomain,onConfirm:i}):void 0}),currentValue:e.value,previousValue:e.previousValue}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,M.jsx)(h,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:ye(e,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function xe(){let{reportParams:e}=ee(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ie({...e,max:10},{maxRows:10}),{markAsSpam:ae,spammedDomains:d}=se(),f=(0,a.useMemo)(()=>(i?.rows??[]).map(A).filter(e=>!e.spamDomain||!d.has(e.spamDomain)),[i,d]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ne(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||s||c||l||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,s,c,l,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=de({isLoading:s,isError:l,isEmpty:f.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),x=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),S=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),C=g.length>1?g[g.length-2].label:null,w=C??n(`All referrers`,`jetpack-premium-analytics-pkg`),T=C?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),C):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return te({csv:{exporter:re,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:f.length}}),(0,M.jsxs)(`div`,{className:k.content,children:[g.length>0&&(0,M.jsx)(ce,{label:w,ariaLabel:T,onClick:S}),(0,M.jsx)(oe,{isLoading:b.isLoading,isFetching:c,isError:f.length===0&&l,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:b.empty,renderLoading:(0,M.jsx)(le,{rows:10}),children:(0,M.jsx)(be,{rows:v,withComparison:y,onDrillDown:x,onMarkAsSpam:ae})})]})}function j({attributes:e={}}){return(0,M.jsx)(s,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{})})})}var M,N,Se=e((()=>{l(),f(),o(),r(),fe(),ve(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,H,Ce=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,actions:V}}));function U({withComparison:e}){return(0,G.jsx)(j,{attributes:{reportParams:u(e)}})}function W(e){return(0,G.jsx)(j,{attributes:{reportParams:u(!1,e)}})}function we({withComparison:e,...t}){return(0,G.jsx)(w,{...t,widgetType:q,renderModule:K,renderComponent:j,attributes:{reportParams:u(e)}})}var G,K,q,Te,J,Y,X,Z,Q,$,Ee;e((()=>{l(),g(),me(),he(),S(),p(),b(),T(),Se(),Ce(),G=i(),_(),pe(),K=`storybook/referrers`,q=C(H),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},J={render:U,args:{withComparison:!1},decorators:[E,m]},Y={render:U,args:{withComparison:!0},decorators:[E,m]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[E,m],beforeEach:()=>(D(`stats/referrers`,`loading`),()=>D(`stats/referrers`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[E,m],beforeEach:()=>(D(`stats/referrers`,`error`),()=>D(`stats/referrers`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[E,m],beforeEach:()=>(D(`stats/referrers`,`empty`),()=>D(`stats/referrers`,null))},$={render:e=>(0,G.jsx)(we,{...e}),args:{...ue,withComparison:!0},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},Ee=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/referrers`\nbefore `setReportMockState` can intercept it.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,Ee as __namedExportsOrder,Te as default};