import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{j as a,t as o}from"./build-module-Dxhc9xxH.js";import{Kt as ee,Pn as s,t as c}from"./src-CAeVry9S.js";import{R as l,W as te,m as ne,o as re,x as ie,y as u}from"./charts-provider-BLx_AWUL.js";import{a as d}from"./src-CHc5LFf_.js";import{t as ae}from"./widget-state-DErObxxB.js";import{B as oe,V as f,i as p,n as m,q as se,r as h}from"./with-story-router-B_BVTNMj.js";import"./constants-obwTJAVB.js";import{r as g,t as ce}from"./leaderboard-skeleton-MNxbT5P_.js";import{n as _,r as v}from"./register-report-mocks-DkiLvmPg.js";import{l as y,s as b}from"./locations-geo-chart-DRdQgcwJ.js";import{a as x,c as S,i as C,l as w,o as le,r as T,s as ue,u as de}from"./with-widget-canvas-k5bFVn7R.js";import{n as fe,t as pe}from"./use-no-views-empty-state-1IGHBHJ5.js";import{n as me,t as he}from"./register-stats-mocks-CutN0CmB.js";import{n as ge,t as E}from"./force-stats-mock-state-C0AFQ1mu.js";var D,O,k,A,_e=e((()=>{D=`_placeholder_1oate_1`,O=`_root_1oate_9`,k=`_content_1oate_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:d(e.link)??void 0,icon:e.icon,spamDomain:u(e),children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ve(e,r,i){return e.map((e,a)=>{let o=!!e.children?.length;return{id:`${a}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:y({href:e.href,hrefAs:`viewLink`,hasChildren:o,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&i?(0,N.jsx)(f,{domain:e.spamDomain,onConfirm:i}):void 0}),currentValue:e.value,previousValue:e.previousValue}})}function ye({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,N.jsx)(g,{data:ve(e,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:P,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function be(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ee({...e,max:10},{maxRows:10}),{markAsSpam:d,spammedDomains:f}=oe(),p=(0,a.useMemo)(()=>(i?.rows??[]).map(j).filter(e=>!e.spamDomain||!f.has(e.spamDomain)),[i,f]),{drillDownItem:m,drillDown:h,resetDrillDown:g}=re(),_=(0,a.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,a.useEffect)(()=>{!m?.length||s||c||l||_.length===m.length||(_.length?h(_.map(e=>e.label)):g())},[m,_,s,c,l,h,g]);let v=_.length?_[_.length-1]:null,y=v?v.children??[]:p,b=v?!!v.childrenHaveComparison:o,x=fe({isLoading:s,isError:l,isEmpty:p.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),S=(0,a.useCallback)(e=>{h([...m??[],e.label])},[m,h]),C=(0,a.useCallback)(()=>{let e=_.slice(0,-1).map(e=>e.label);e.length?h(e):g()},[_,h,g]),w=_.length>1?_[_.length-2].label:null,le=w??n(`All referrers`,`jetpack-premium-analytics-pkg`),T=w?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),w):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return ne({csv:{exporter:ie,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:p.length}}),(0,N.jsxs)(`div`,{className:A.content,children:[_.length>0&&(0,N.jsx)(se,{label:le,ariaLabel:T,onClick:C}),(0,N.jsx)(ae,{isLoading:x.isLoading,isFetching:c,isError:p.length===0&&l,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:x.empty,renderLoading:(0,N.jsx)(ce,{rows:10}),children:(0,N.jsx)(ye,{rows:y,withComparison:b,onDrillDown:S,onMarkAsSpam:d})})]})}function M({attributes:e={}}){return(0,N.jsx)(l,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(be,{})})})}var N,P,xe=e((()=>{c(),p(),o(),r(),pe(),_e(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,R,z,B,V,H,U,Se=e((()=>{F=`jpa/referrers`,I=`jpa/globe`,L=`Top referrers`,R=`Websites and search engines referring visitors to your site.`,z={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],U={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,actions:H}}));function W({withComparison:e}){return(0,K.jsx)(M,{attributes:{reportParams:s(e)}})}function G(e){return(0,K.jsx)(M,{attributes:{reportParams:s(!1,e)}})}function Ce({withComparison:e,...t}){return(0,K.jsx)(S,{...t,widgetType:we,renderModule:q,renderComponent:M,attributes:{reportParams:s(e)}})}var K,q,we,Te,J,Y,X,Z,Q,$,Ee;e((()=>{c(),_(),he(),ge(),w(),m(),le(),T(),xe(),Se(),K=i(),v(),me(),q=`storybook/referrers`,we=x(U),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},J={render:W,args:{withComparison:!1},decorators:[C,h]},Y={render:W,args:{withComparison:!0},decorators:[C,h]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},$={tags:[`widget-dashboard`],render:e=>(0,K.jsx)(Ce,{...e}),args:{...ue,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},Ee=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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