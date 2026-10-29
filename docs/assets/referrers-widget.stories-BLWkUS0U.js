import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{B as s,I as c,_ as l,f as ee,in as u,o as te,sn as d,xn as f,y as ne}from"./charts-provider-BXWttMH6.js";import{Ft as re,t as p,vn as m}from"./src-DvzWgCqE.js";import{a as h}from"./src-CDsJ1V0E.js";import{t as ie}from"./widget-state-B-3KFlZy.js";import{I as ae,L as g,V as oe,i as _,n as v,r as y}from"./with-story-router-TeMi98u_.js";import"./constants-B9OTkkI1.js";import{r as b,t as se}from"./leaderboard-skeleton-C-y8R1eG.js";import{n as ce,r as x}from"./register-report-mocks-CI2bPEM7.js";import{l as le,s as ue}from"./locations-geo-chart-C6hMt7oL.js";import{a as S,g as C,h as w,i as de,m as fe,n as pe,p as me,r as T}from"./with-widget-canvas-ke8j5asA.js";import{n as he,t as ge}from"./use-no-views-empty-state-DXp1UMfh.js";import{n as _e,t as ve}from"./register-stats-mocks-Nvcu00DF.js";import{n as ye,t as E}from"./force-stats-mock-state-B0U9Dr7D.js";var D,O,k,A,be=e((()=>{D=`_placeholder_1oate_1`,O=`_root_1oate_9`,k=`_content_1oate_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:h(e.link)??void 0,icon:e.icon,spamDomain:l(e),children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,r,i,a){let o=u(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,ee=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...ue({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:le({href:e.href,hrefAs:`viewLink`,hasChildren:ee,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0}),trailingAction:e.spamDomain&&a?(0,N.jsx)(g,{domain:e.spamDomain,onConfirm:a}):void 0}),currentValue:e.value,currentShare:d(e.value,o),previousValue:c,previousShare:l?d(c,o):void 0,delta:l?f(e.value,c):void 0}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:r,onMarkAsSpam:i}){return(0,N.jsx)(b,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:xe(e,t,r,i),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:we,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function Ce(){let{reportParams:e}=s(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=re({...e,max:10},{maxRows:10}),{markAsSpam:f,spammedDomains:p}=ae(),m=(0,a.useMemo)(()=>(i?.rows??[]).map(j).filter(e=>!e.spamDomain||!p.has(e.spamDomain)),[i,p]),{drillDownItem:h,drillDown:g,resetDrillDown:_}=te(),v=(0,a.useMemo)(()=>{let e=[],t=m;for(let n of h??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[m,h]);(0,a.useEffect)(()=>{!h?.length||c||l||u||v.length===h.length||(v.length?g(v.map(e=>e.label)):_())},[h,v,c,l,u,g,_]);let y=v.length?v[v.length-1]:null,b=y?y.children??[]:m,ce=y?!!y.childrenHaveComparison:o,x=he({isLoading:c,isError:u,isEmpty:m.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),le=(0,a.useCallback)(e=>{g([...h??[],e.label])},[h,g]),ue=(0,a.useCallback)(()=>{let e=v.slice(0,-1).map(e=>e.label);e.length?g(e):_()},[v,g,_]),S=v.length>1?v[v.length-2].label:null,C=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),w=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return ee({csv:{exporter:ne,status:{isLoading:c,isFetching:l,isError:r.isError},rowCount:m.length}}),(0,N.jsxs)(`div`,{className:A.content,children:[v.length>0&&(0,N.jsx)(oe,{label:C,ariaLabel:w,onClick:ue}),(0,N.jsx)(ie,{isLoading:x.isLoading,isFetching:l,isError:m.length===0&&u,isEmpty:m.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:x.empty,renderLoading:(0,N.jsx)(se,{rows:10}),children:(0,N.jsx)(Se,{rows:b,withComparison:ce,onDrillDown:le,onMarkAsSpam:f})})]})}function M({attributes:e={}}){return(0,N.jsx)(c,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(Ce,{})})})}var N,we,Te=e((()=>{p(),_(),o(),r(),ge(),be(),N=i(),we={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,H,Ee=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,actions:V}}));function U({withComparison:e}){return(0,G.jsx)(M,{attributes:{reportParams:m(e)}})}function W(e){return(0,G.jsx)(M,{attributes:{reportParams:m(!1,e)}})}function De({withComparison:e,...t}){return(0,G.jsx)(fe,{...t,widgetType:q,renderModule:K,renderComponent:M,attributes:{reportParams:m(e)}})}var G,K,q,Oe,J,Y,X,Z,Q,$,ke;e((()=>{p(),ce(),ve(),ye(),w(),v(),S(),pe(),Te(),Ee(),G=i(),x(),_e(),K=`storybook/referrers`,q=de(H),Oe={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) list the domain with a "View in new tab" action beside it, and rows named after a domain also offer "Mark as spam"; rows that drill down remain buttons.`}}}},J={render:U,args:{withComparison:!1},decorators:[T,y]},Y={render:U,args:{withComparison:!0},decorators:[T,y]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[T,y],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[T,y],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[T,y],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},$={render:e=>(0,G.jsx)(De,{...e}),args:{...me,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},ke=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,ke as __namedExportsOrder,Oe as default};