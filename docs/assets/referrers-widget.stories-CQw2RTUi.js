import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{At as s,pn as c,t as l}from"./src-5g9sGwvT.js";import{F as u,Ft as d,Mt as f,Yt as p,f as ee,o as te,v as ne,z as re}from"./charts-provider-bUtI3a4j.js";import{a as m}from"./src-DwJ-Sp05.js";import{t as ie}from"./widget-state-DmJn3qOC.js";import"./rows-DoJXoHhN.js";import{r as h,t as ae}from"./leaderboard-skeleton-C5ZIz2fL.js";import{a as g,o as _}from"./widget-state-QAs2RT9y.js";import{n as v,r as y}from"./with-story-router-CyVN4A4U.js";import{i as oe}from"./leaderboard-CBd6vP-k.js";import{i as b,o as x}from"./build-leaderboard-chart-data-DKIdE2af.js";import{A as S,H as C,M as w,N as se,U as ce,V as le,W as ue,j as T,t as de}from"./src-8B4VP-Wm.js";import{n as fe,t as pe}from"./use-no-views-empty-state-CxhOKb5k.js";import{n as me,t as he}from"./register-stats-mocks-Nvcu00DF.js";import{n as ge,t as E}from"./force-stats-mock-state-BRgWvvYE.js";var D,O,k,A,_e=e((()=>{D=`_placeholder_1oate_1`,O=`_root_1oate_9`,k=`_content_1oate_18`,A={placeholder:D,root:O,content:k}}));function j(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:m(e.link)??void 0,icon:e.icon,children:e.children?.map(j),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ve(e,r,i){let a=f(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:d(e.value,a),previousValue:s,previousShare:c?d(s,a):void 0,delta:c?p(e.value,s):void 0}})}function ye({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,N.jsx)(h,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:ve(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:xe,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function be(){let{reportParams:e}=re(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=s({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(j),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=te(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=fe({isLoading:c,isError:u,isEmpty:f.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),x=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),S=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),C=g.length>1?g[g.length-2].label:null,w=C??n(`All referrers`,`jetpack-premium-analytics-pkg`),se=C?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),C):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return ee({report:`referrers`,csv:{exporter:ne,status:{isLoading:c,isFetching:l,isError:r.isError},rowCount:f.length}}),(0,N.jsxs)(`div`,{className:A.content,children:[g.length>0&&(0,N.jsx)(oe,{label:w,ariaLabel:se,onClick:S}),(0,N.jsx)(ie,{isLoading:b.isLoading,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:b.empty,renderLoading:(0,N.jsx)(ae,{rows:10}),children:(0,N.jsx)(ye,{rows:v,withComparison:y,onDrillDown:x})})]})}function M({attributes:e={}}){return(0,N.jsx)(u,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(be,{})})})}var N,xe,Se=e((()=>{l(),de(),o(),r(),pe(),_e(),N=i(),xe={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,Ce=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{reportParams:c(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{reportParams:c(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(C,{...t,widgetType:Te,renderModule:G,renderComponent:M,attributes:{reportParams:c(e)}})}var W,G,Te,K,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),he(),ge(),ce(),v(),se(),S(),Se(),Ce(),W=i(),_(),me(),G=`storybook/referrers`,Te=w(V),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[T,y]},J={render:H,args:{withComparison:!0},decorators:[T,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,y],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,y],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,y],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...le,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};