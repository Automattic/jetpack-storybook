import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{F as s,f as c,in as l,o as u,tn as d,v as ee,vn as f,z as te}from"./charts-provider-CHpSzGut.js";import{Mt as ne,hn as p,t as m}from"./src-BEwaewMJ.js";import{a as h}from"./src-DsVr2TrU.js";import{t as re}from"./widget-state-BwHOn80-.js";import"./constants-B9OTkkI1.js";import{r as g,t as ie}from"./leaderboard-skeleton-CTUQ1y61.js";import{n as _,r as v}from"./register-report-mocks-D47Rougd.js";import{M as ae,i as y,n as b,r as x}from"./with-story-router-B7u0fWxg.js";import{l as S,s as C}from"./locations-geo-chart-Di6ZUBL2.js";import{a as w,g as oe,h as se,i as ce,m as le,n as ue,p as de,r as T}from"./with-widget-canvas-aKDVvh1v.js";import{n as fe,t as pe}from"./use-no-views-empty-state-bJgzD4tv.js";import{n as me,t as he}from"./register-stats-mocks-Nvcu00DF.js";import{n as ge,t as E}from"./force-stats-mock-state-BxPlbF2m.js";var D,O,k,A,_e=e((()=>{D=`_placeholder_1oate_1`,O=`_root_1oate_9`,k=`_content_1oate_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:h(e.link)??void 0,icon:e.icon,children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ve(e,r,i){let a=d(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,u=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...C({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:S({href:e.href,hasChildren:u,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:l(e.value,a),previousValue:s,previousShare:c?l(s,a):void 0,delta:c?f(e.value,s):void 0}})}function ye({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,N.jsx)(g,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:ve(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:P,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function be(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:s,isFetching:l,isError:d,refetch:f}=ne({...e,max:10},{maxRows:10}),p=(0,a.useMemo)(()=>(i?.rows??[]).map(j),[i]),{drillDownItem:m,drillDown:h,resetDrillDown:g}=u(),_=(0,a.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,a.useEffect)(()=>{!m?.length||s||l||d||_.length===m.length||(_.length?h(_.map(e=>e.label)):g())},[m,_,s,l,d,h,g]);let v=_.length?_[_.length-1]:null,y=v?v.children??[]:p,b=v?!!v.childrenHaveComparison:o,x=fe({isLoading:s,isError:d,isEmpty:p.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),S=(0,a.useCallback)(e=>{h([...m??[],e.label])},[m,h]),C=(0,a.useCallback)(()=>{let e=_.slice(0,-1).map(e=>e.label);e.length?h(e):g()},[_,h,g]),w=_.length>1?_[_.length-2].label:null,oe=w??n(`All referrers`,`jetpack-premium-analytics-pkg`),se=w?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),w):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return c({csv:{exporter:ee,status:{isLoading:s,isFetching:l,isError:r.isError},rowCount:p.length}}),(0,N.jsxs)(`div`,{className:A.content,children:[_.length>0&&(0,N.jsx)(ae,{label:oe,ariaLabel:se,onClick:C}),(0,N.jsx)(re,{isLoading:x.isLoading,isFetching:l,isError:p.length===0&&d,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:x.empty,renderLoading:(0,N.jsx)(ie,{rows:10}),children:(0,N.jsx)(ye,{rows:y,withComparison:b,onDrillDown:S})})]})}function M({attributes:e={}}){return(0,N.jsx)(s,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(be,{})})})}var N,P,xe=e((()=>{m(),y(),o(),r(),pe(),_e(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,R,z,B,V,H,U,Se=e((()=>{F=`jpa/referrers`,I=`jpa/globe`,L=`Top referrers`,R=`Websites and search engines referring visitors to your site.`,z={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],U={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,actions:H}}));function W({withComparison:e}){return(0,K.jsx)(M,{attributes:{reportParams:p(e)}})}function G(e){return(0,K.jsx)(M,{attributes:{reportParams:p(!1,e)}})}function Ce({withComparison:e,...t}){return(0,K.jsx)(le,{...t,widgetType:Te,renderModule:we,renderComponent:M,attributes:{reportParams:p(e)}})}var K,we,Te,Ee,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),he(),ge(),se(),b(),w(),ue(),xe(),Se(),K=i(),v(),me(),we=`storybook/referrers`,Te=ce(U),Ee={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:W,args:{withComparison:!1},decorators:[T,x]},J={render:W,args:{withComparison:!0},decorators:[T,x]},Y={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[T,x],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},X={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[T,x],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Z={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[T,x],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},Q={render:e=>(0,K.jsx)(Ce,{...e}),args:{...de,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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