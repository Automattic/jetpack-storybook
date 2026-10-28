import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{F as s,bn as c,f as l,o as u,on as d,rn as ee,v as te,z as ne}from"./charts-provider-DvCItWWe.js";import{Mt as re,hn as f,t as p}from"./src-DfQ3R5pV.js";import{a as m}from"./src-BEYjxjSJ.js";import{t as ie}from"./widget-state-CzEbVQbD.js";import{F as ae,i as h,n as g,r as _}from"./with-story-router-BOUjhEmL.js";import"./constants-B9OTkkI1.js";import{r as v,t as oe}from"./leaderboard-skeleton-CC-fUPBN.js";import{n as y,r as b}from"./register-report-mocks-xm2nLXrN.js";import{l as x,s as S}from"./locations-geo-chart-BRGp6Sbo.js";import{a as C,g as se,h as ce,i as le,m as ue,n as de,p as fe,r as w}from"./with-widget-canvas-BR7crPqd.js";import{n as pe,t as me}from"./use-no-views-empty-state-CKOMQvw-.js";import{n as he,t as ge}from"./register-stats-mocks-Nvcu00DF.js";import{n as _e,t as T}from"./force-stats-mock-state-rsmsojFj.js";var E,D,O,k,ve=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:m(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,r,i){let a=ee(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,l=r&&s!==void 0,u=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...S({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:u,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:d(e.value,a),previousValue:s,previousShare:l?d(s,a):void 0,delta:l?c(e.value,s):void 0}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,M.jsx)(v,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:ye(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function xe(){let{reportParams:e}=ne(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,isError:d,refetch:ee}=re({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(A),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=u(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||s||c||d||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,s,c,d,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=pe({isLoading:s,isError:d,isEmpty:f.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),x=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),S=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),C=g.length>1?g[g.length-2].label:null,se=C??n(`All referrers`,`jetpack-premium-analytics-pkg`),ce=C?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),C):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return l({csv:{exporter:te,status:{isLoading:s,isFetching:c,isError:r.isError},rowCount:f.length}}),(0,M.jsxs)(`div`,{className:k.content,children:[g.length>0&&(0,M.jsx)(ae,{label:se,ariaLabel:ce,onClick:S}),(0,M.jsx)(ie,{isLoading:b.isLoading,isFetching:c,isError:f.length===0&&d,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:b.empty,renderLoading:(0,M.jsx)(oe,{rows:10}),children:(0,M.jsx)(be,{rows:v,withComparison:y,onDrillDown:x})})]})}function j({attributes:e={}}){return(0,M.jsx)(s,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(xe,{})})})}var M,N,Se=e((()=>{p(),h(),o(),r(),me(),ve(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Ce,P,F,I,L,R,z,B,V,we=e((()=>{Ce=`jpa/referrers`,P=`jpa/globe`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Freferrers`}],V={name:Ce,icon:P,title:F,description:I,help:L,category:R,presentation:z,actions:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{reportParams:f(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{reportParams:f(!1,e)}})}function Te({withComparison:e,...t}){return(0,W.jsx)(ue,{...t,widgetType:K,renderModule:G,renderComponent:j,attributes:{reportParams:f(e)}})}var W,G,K,Ee,q,J,Y,X,Z,Q,$;e((()=>{p(),y(),ge(),_e(),ce(),g(),C(),de(),Se(),we(),W=i(),b(),he(),G=`storybook/referrers`,K=le(V),Ee={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[w,_]},J={render:H,args:{withComparison:!0},decorators:[w,_]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...fe,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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