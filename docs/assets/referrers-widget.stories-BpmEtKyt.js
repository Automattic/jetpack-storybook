import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{B as ee,I as s,_ as c,f as te,o as ne,y as re}from"./charts-provider-BiyRt4h-.js";import{Ft as ie,t as l,vn as u}from"./src-aCc7BZix.js";import{a as d}from"./src-DWvRdhPT.js";import{t as ae}from"./widget-state-CXQalhFB.js";import{R as oe,U as se,t as f,z as p}from"./src-C4QqeVtv.js";import"./constants-C4wn2DPw.js";import{r as m,t as ce}from"./leaderboard-skeleton-tHgAVUjz.js";import{n as h,r as g}from"./register-report-mocks-96WLwTjC.js";import{l as _,s as v}from"./locations-geo-chart-BjWFPFXu.js";import{n as y,r as b}from"./with-story-router-CoVtpIXZ.js";import{a as x,c as S,i as C,l as w,n as le,o as T,r as E,s as ue}from"./with-widget-canvas-CqmF9C9_.js";import{n as de,t as fe}from"./use-no-views-empty-state-C7Yx0RT-.js";import{n as pe,t as me}from"./register-stats-mocks-DjNQZaeB.js";import{n as he,t as D}from"./force-stats-mock-state-C3DDVlk_.js";var O,k,A,j,ge=e((()=>{O=`_placeholder_1oate_1`,k=`_root_1oate_9`,A=`_content_1oate_18`,j={placeholder:O,root:k,content:A}}));function M(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:d(e.link)??void 0,icon:e.icon,spamDomain:c(e),children:e.children?.map(M),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function _e(e,r,i){return e.map((e,a)=>{let o=!!e.children?.length;return{id:`${a}-${e.href??e.label}`,...v({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hrefAs:`viewLink`,hasChildren:o,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&i?(0,P.jsx)(p,{domain:e.spamDomain,onConfirm:i}):void 0}),currentValue:e.value,previousValue:e.previousValue}})}function ve({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,P.jsx)(m,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:_e(e,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:be,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function ye(){let{reportParams:e}=ee(),{primary:r,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ie({...e,max:10},{maxRows:10}),{markAsSpam:d,spammedDomains:f}=oe(),p=(0,o.useMemo)(()=>(i?.rows??[]).map(M).filter(e=>!e.spamDomain||!f.has(e.spamDomain)),[i,f]),{drillDownItem:m,drillDown:h,resetDrillDown:g}=ne(),_=(0,o.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,o.useEffect)(()=>{!m?.length||s||c||l||_.length===m.length||(_.length?h(_.map(e=>e.label)):g())},[m,_,s,c,l,h,g]);let v=_.length?_[_.length-1]:null,y=v?v.children??[]:p,b=v?!!v.childrenHaveComparison:a,x=de({isLoading:s,isError:l,isEmpty:p.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),S=(0,o.useCallback)(e=>{h([...m??[],e.label])},[m,h]),C=(0,o.useCallback)(()=>{let e=_.slice(0,-1).map(e=>e.label);e.length?h(e):g()},[_,h,g]),w=_.length>1?_[_.length-2].label:null,le=w??n(`All referrers`,`jetpack-premium-analytics-pkg`),T=w?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),w):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return te({csv:{exporter:re,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:p.length}}),(0,P.jsxs)(`div`,{className:j.content,children:[_.length>0&&(0,P.jsx)(se,{label:le,ariaLabel:T,onClick:C}),(0,P.jsx)(ae,{isLoading:x.isLoading,isFetching:c,isError:p.length===0&&l,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:x.empty,renderLoading:(0,P.jsx)(ce,{rows:10}),children:(0,P.jsx)(ve,{rows:y,withComparison:b,onDrillDown:S,onMarkAsSpam:d})})]})}function N({attributes:e={}}){return(0,P.jsx)(s,{attributes:e,children:(0,P.jsx)(`div`,{className:j.root,children:(0,P.jsx)(ye,{})})})}var P,be,xe=e((()=>{l(),f(),a(),r(),fe(),ge(),P=i(),be={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,R,z,B,V,H,U,Se=e((()=>{F=`jpa/referrers`,I=`jpa/globe`,L=`Top referrers`,R=`Websites and search engines referring visitors to your site.`,z={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],U={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,actions:H}}));function W({withComparison:e}){return(0,K.jsx)(N,{attributes:{reportParams:u(e)}})}function G(e){return(0,K.jsx)(N,{attributes:{reportParams:u(!1,e)}})}function Ce({withComparison:e,...t}){return(0,K.jsx)(ue,{...t,widgetType:Te,renderModule:we,renderComponent:N,attributes:{reportParams:u(e)}})}var K,we,Te,Ee,q,J,Y,X,Z,Q,$;e((()=>{l(),h(),me(),he(),S(),y(),x(),le(),xe(),Se(),K=i(),g(),pe(),we=`storybook/referrers`,Te=C(U),Ee={title:`Packages/Premium Analytics/Widgets/Referrers`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},q={render:W,args:{withComparison:!1},decorators:[E,b]},J={render:W,args:{withComparison:!0},decorators:[E,b]},Y={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[E,b],beforeEach:()=>(D(`stats/referrers`,`loading`),()=>D(`stats/referrers`,null))},X={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[E,b],beforeEach:()=>(D(`stats/referrers`,`error`),()=>D(`stats/referrers`,null))},Z={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[E,b],beforeEach:()=>(D(`stats/referrers`,`empty`),()=>D(`stats/referrers`,null))},Q={render:e=>(0,K.jsx)(Ce,{...e}),args:{...T,withComparison:!0},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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