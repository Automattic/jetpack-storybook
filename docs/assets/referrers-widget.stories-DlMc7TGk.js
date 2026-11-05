import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{B as ee,I as s,_ as c,f as te,o as ne,y as re}from"./charts-provider-Dywd-o-P.js";import{Ft as ie,bn as l,t as u}from"./src-BG_TKhyf.js";import{a as d}from"./src-CXndrmd6.js";import{t as ae}from"./widget-state-Dbd-m3rt.js";import{R as oe,U as se,t as f,z as p}from"./src-B5UWDf40.js";import"./constants-Ds2Tofyv.js";import{r as m,t as ce}from"./leaderboard-skeleton-DKmoeqOa.js";import{n as h,r as g}from"./register-report-mocks-CisljdiM.js";import{l as _,s as v}from"./locations-geo-chart-CiPZ6gVi.js";import{n as y,r as b}from"./with-story-router-C-QssHt2.js";import{a as x,c as S,i as le,l as C,n as ue,o as w,r as T,s as de}from"./with-widget-canvas-BmtrsUpz.js";import{n as fe,t as pe}from"./use-no-views-empty-state-D636xfBu.js";import{n as me,t as he}from"./register-stats-mocks-BLfWbTqK.js";import{n as ge,t as E}from"./force-stats-mock-state-CiHtRTGa.js";var D,O,k,A,_e=e((()=>{D=`_placeholder_1oate_1`,O=`_root_1oate_9`,k=`_content_1oate_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:d(e.link)??void 0,icon:e.icon,spamDomain:c(e),children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ve(e,r,i){return e.map((e,a)=>{let o=!!e.children?.length;return{id:`${a}-${e.href??e.label}`,...v({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hrefAs:`viewLink`,hasChildren:o,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&i?(0,N.jsx)(p,{domain:e.spamDomain,onConfirm:i}):void 0}),currentValue:e.value,previousValue:e.previousValue}})}function ye({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,N.jsx)(m,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:ve(e,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:xe,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function be(){let{reportParams:e}=ee(),{primary:r,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ie({...e,max:10},{maxRows:10}),{markAsSpam:d,spammedDomains:f}=oe(),p=(0,o.useMemo)(()=>(i?.rows??[]).map(j).filter(e=>!e.spamDomain||!f.has(e.spamDomain)),[i,f]),{drillDownItem:m,drillDown:h,resetDrillDown:g}=ne(),_=(0,o.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,o.useEffect)(()=>{!m?.length||s||c||l||_.length===m.length||(_.length?h(_.map(e=>e.label)):g())},[m,_,s,c,l,h,g]);let v=_.length?_[_.length-1]:null,y=v?v.children??[]:p,b=v?!!v.childrenHaveComparison:a,x=fe({isLoading:s,isError:l,isEmpty:p.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),S=(0,o.useCallback)(e=>{h([...m??[],e.label])},[m,h]),le=(0,o.useCallback)(()=>{let e=_.slice(0,-1).map(e=>e.label);e.length?h(e):g()},[_,h,g]),C=_.length>1?_[_.length-2].label:null,ue=C??n(`All referrers`,`jetpack-premium-analytics-pkg`),w=C?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),C):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return te({csv:{exporter:re,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:p.length}}),(0,N.jsxs)(`div`,{className:A.content,children:[_.length>0&&(0,N.jsx)(se,{label:ue,ariaLabel:w,onClick:le}),(0,N.jsx)(ae,{isLoading:x.isLoading,isFetching:c,isError:p.length===0&&l,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:x.empty,renderLoading:(0,N.jsx)(ce,{rows:10}),children:(0,N.jsx)(ye,{rows:y,withComparison:b,onDrillDown:S,onMarkAsSpam:d})})]})}function M({attributes:e={}}){return(0,N.jsx)(s,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(be,{})})})}var N,xe,Se=e((()=>{u(),f(),a(),r(),pe(),_e(),N=i(),xe={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,H,Ce=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,actions:V}}));function U({withComparison:e}){return(0,G.jsx)(M,{attributes:{reportParams:l(e)}})}function W(e){return(0,G.jsx)(M,{attributes:{reportParams:l(!1,e)}})}function we({withComparison:e,...t}){return(0,G.jsx)(de,{...t,widgetType:Te,renderModule:K,renderComponent:M,attributes:{reportParams:l(e)}})}var G,K,Te,Ee,q,J,Y,X,Z,Q,$;e((()=>{u(),h(),he(),ge(),S(),y(),x(),ue(),Se(),Ce(),G=i(),g(),me(),K=`storybook/referrers`,Te=le(H),Ee={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},q={render:U,args:{withComparison:!1},decorators:[T,b]},J={render:U,args:{withComparison:!0},decorators:[T,b]},Y={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},X={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Z={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},Q={render:e=>(0,G.jsx)(we,{...e}),args:{...w,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,Ee as default};