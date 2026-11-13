import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{Lt as ee,Sn as s,t as c}from"./src-CU_16BOb.js";import{H as te,I as l,_ as ne,f as re,o as ie,y as ae}from"./charts-provider-DOirnpAA.js";import{a as oe}from"./src-BFIL1wP1.js";import{t as se}from"./widget-state-DnbF8hrz.js";import{B as ce,G as le,V as u,i as d,n as f,r as p}from"./with-story-router-CI3ZTRlv.js";import"./constants-qKcHC8ID.js";import{r as m,t as ue}from"./leaderboard-skeleton-FNRYZS_s.js";import{n as h,r as g}from"./register-report-mocks-C2D4cGS-.js";import{l as _,s as v}from"./locations-geo-chart-BvNRBuvd.js";import{a as y,c as b,i as x,l as S,o as C,r as w,s as de,u as fe}from"./with-widget-canvas-_EJfaAe7.js";import{n as pe,t as me}from"./use-no-views-empty-state-BIupyoWW.js";import{n as he,t as ge}from"./register-stats-mocks-BLfWbTqK.js";import{n as _e,t as T}from"./force-stats-mock-state-BGfGpqBC.js";var E,D,O,k,ve=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:oe(e.link)??void 0,icon:e.icon,spamDomain:ne(e),children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,r,i){return e.map((e,a)=>{let o=!!e.children?.length;return{id:`${a}-${e.href??e.label}`,...v({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hrefAs:`viewLink`,hasChildren:o,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&i?(0,M.jsx)(u,{domain:e.spamDomain,onConfirm:i}):void 0}),currentValue:e.value,previousValue:e.previousValue}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,M.jsx)(m,{data:ye(e,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function xe(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:ne}=ee({...e,max:10},{maxRows:10}),{markAsSpam:oe,spammedDomains:u}=ce(),d=(0,o.useMemo)(()=>(i?.rows??[]).map(A).filter(e=>!e.spamDomain||!u.has(e.spamDomain)),[i,u]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=ie(),h=(0,o.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,o.useEffect)(()=>{!f?.length||s||c||l||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,s,c,l,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:a,y=pe({isLoading:s,isError:l,isEmpty:d.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,o.useCallback)(e=>{p([...f??[],e.label])},[f,p]),x=(0,o.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),S=h.length>1?h[h.length-2].label:null,C=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),w=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return re({csv:{exporter:ae,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:d.length}}),(0,M.jsxs)(`div`,{className:k.content,children:[h.length>0&&(0,M.jsx)(le,{label:C,ariaLabel:w,onClick:x}),(0,M.jsx)(se,{isLoading:y.isLoading,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ne}]},empty:y.empty,renderLoading:(0,M.jsx)(ue,{rows:10}),children:(0,M.jsx)(be,{rows:_,withComparison:v,onDrillDown:b,onMarkAsSpam:oe})})]})}function j({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{})})})}var M,N,Se=e((()=>{c(),d(),a(),r(),me(),ve(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,H,Ce=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,actions:V}}));function U({withComparison:e}){return(0,G.jsx)(j,{attributes:{reportParams:s(e)}})}function W(e){return(0,G.jsx)(j,{attributes:{reportParams:s(!1,e)}})}function we({withComparison:e,...t}){return(0,G.jsx)(b,{...t,widgetType:q,renderModule:K,renderComponent:j,attributes:{reportParams:s(e)}})}var G,K,q,Te,J,Y,X,Z,Q,$,Ee;e((()=>{c(),h(),ge(),_e(),S(),f(),C(),w(),Se(),Ce(),G=i(),g(),he(),K=`storybook/referrers`,q=y(H),Te={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},J={render:U,args:{withComparison:!1},decorators:[x,p]},Y={render:U,args:{withComparison:!0},decorators:[x,p]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},$={tags:[`widget-dashboard`],render:e=>(0,G.jsx)(we,{...e}),args:{...de,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},Ee=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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