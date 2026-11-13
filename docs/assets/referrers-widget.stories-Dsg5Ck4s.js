import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{Cn as s,Rt as ee,t as c}from"./src-Bm9MmJNJ.js";import{H as te,I as l,_ as ne,f as re,o as ie,y as ae}from"./charts-provider--4PxmYT1.js";import{a as oe}from"./src-Bi28EiYF.js";import{t as se}from"./widget-state-DnbF8hrz.js";import{B as ce,G as le,V as u,i as d,n as f,r as p}from"./with-story-router-BHhTIJcO.js";import"./constants-Cx6tCf49.js";import{r as m,t as ue}from"./leaderboard-skeleton-BhhbTeeJ.js";import{n as h,r as g}from"./register-report-mocks-D3lWkH8m.js";import{l as _,s as v}from"./locations-geo-chart-CcaJS0IV.js";import{a as y,c as b,i as x,l as S,o as C,r as de,s as fe,u as pe}from"./with-widget-canvas-ZzmEYGII.js";import{n as me,t as he}from"./use-no-views-empty-state-CtsKnzht.js";import{n as ge,t as _e}from"./register-stats-mocks-BLfWbTqK.js";import{n as ve,t as w}from"./force-stats-mock-state-fgUq0aLM.js";var ye,T,E,D,be=e((()=>{ye=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:ye,root:T,content:E}}));function O(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:oe(e.link)??void 0,icon:e.icon,spamDomain:ne(e),children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,r,i){return e.map((e,a)=>{let o=!!e.children?.length;return{id:`${a}-${e.href??e.label}`,...v({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hrefAs:`viewLink`,hasChildren:o,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&i?(0,A.jsx)(u,{domain:e.spamDomain,onConfirm:i}):void 0}),currentValue:e.value,previousValue:e.previousValue}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,A.jsx)(m,{data:xe(e,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function Ce(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:ne}=ee({...e,max:10},{maxRows:10}),{markAsSpam:oe,spammedDomains:u}=ce(),d=(0,o.useMemo)(()=>(i?.rows??[]).map(O).filter(e=>!e.spamDomain||!u.has(e.spamDomain)),[i,u]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=ie(),h=(0,o.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,o.useEffect)(()=>{!f?.length||s||c||l||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,s,c,l,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:a,y=me({isLoading:s,isError:l,isEmpty:d.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,o.useCallback)(e=>{p([...f??[],e.label])},[f,p]),x=(0,o.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),S=h.length>1?h[h.length-2].label:null,C=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),de=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return re({csv:{exporter:ae,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:d.length}}),(0,A.jsxs)(`div`,{className:D.content,children:[h.length>0&&(0,A.jsx)(le,{label:C,ariaLabel:de,onClick:x}),(0,A.jsx)(se,{isLoading:y.isLoading,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ne}]},empty:y.empty,renderLoading:(0,A.jsx)(ue,{rows:10}),children:(0,A.jsx)(Se,{rows:_,withComparison:v,onDrillDown:b,onMarkAsSpam:oe})})]})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Ce,{})})})}var A,j,we=e((()=>{c(),d(),a(),r(),he(),be(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,Te=e((()=>{M=`jpa/referrers`,N=`jpa/globe`,P=`Top referrers`,F=`Websites and search engines referring visitors to your site.`,I={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:s(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:s(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(b,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:s(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),h(),_e(),ve(),S(),f(),C(),de(),we(),Te(),U=i(),g(),ge(),W=`storybook/referrers`,G=y(B),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,p]},J={render:V,args:{withComparison:!0},decorators:[x,p]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(Ee,{...e}),args:{...fe,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};