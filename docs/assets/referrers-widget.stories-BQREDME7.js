import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{At as s,pn as c,t as l}from"./src-5g9sGwvT.js";import{Ot as u,dt as d,m as f,mt as p,o as ee,v as te}from"./charts-provider-Dz_9KfQe.js";import{E as ne,Q as m,X as h,Y as g,Z as _,ct as v,lt as y,ot as b,st as x,t as S,x as re}from"./src-CwWcdYh9.js";import{a as C}from"./src-BHkmuvTS.js";import{t as ie}from"./widget-state-CgiqWOxt.js";import"./rows-DoJXoHhN.js";import{r as ae,t as oe}from"./leaderboard-skeleton-Ciu6IUKd.js";import{a as se,o as ce}from"./widget-state-B6SJsJzX.js";import{n as le,r as w}from"./with-story-router-Bwg0edRp.js";import{i as ue,o as de}from"./build-leaderboard-chart-data-B1eNI0zc.js";import{f as fe,l as pe,o as me}from"./leaderboard-bG98GUJZ.js";import{n as he,t as ge}from"./use-no-views-empty-state-BMJXzusd.js";import{n as _e,t as ve}from"./register-stats-mocks-Nvcu00DF.js";import{n as ye,t as T}from"./force-stats-mock-state-BBDmAC5l.js";var E,D,O,k,be=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:C(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,r,i){let a=d(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...ue({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:de({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:c?p(s,a):void 0,delta:c?u(e.value,s):void 0}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,M.jsx)(ae,{chartTitle:n(`Top referrers`,`jetpack-premium-analytics-pkg`),data:xe(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N,columns:{label:n(`Referrers`,`jetpack-premium-analytics-pkg`),metric:`views`}})}function Ce(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=s({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(A),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ee(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=he({isLoading:c,isError:u,isEmpty:f.length===0},n(`You don’t have referrers recorded yet.`,`jetpack-premium-analytics-pkg`)),x=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),S=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),C=g.length>1?g[g.length-2].label:null,ae=C??n(`All referrers`,`jetpack-premium-analytics-pkg`),se=C?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),C):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:k.content,children:[g.length>0&&(0,M.jsx)(pe,{label:ae,ariaLabel:se,onClick:S}),(0,M.jsx)(ie,{isLoading:b.isLoading,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:b.empty,renderLoading:(0,M.jsx)(oe,{rows:10}),children:(0,M.jsx)(Se,{rows:v,withComparison:y,onDrillDown:x})})]}),(0,M.jsxs)(me,{children:[(0,M.jsx)(fe,{report:`referrers`}),(0,M.jsx)(re,{exporter:ne,status:{isLoading:c,isFetching:l,isError:r.isError},rowCount:f.length})]})]})}function j({attributes:e={}}){return(0,M.jsx)(f,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Ce,{})})})}var M,N,we=e((()=>{l(),S(),o(),r(),ge(),be(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,Te=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{reportParams:c(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{reportParams:c(!1,e)}})}function Ee({withComparison:e,...t}){return(0,W.jsx)(x,{...t,widgetType:De,renderModule:G,renderComponent:j,attributes:{reportParams:c(e)}})}var W,G,De,K,q,J,Y,X,Z,Q,$;e((()=>{l(),se(),ve(),ye(),v(),le(),m(),g(),we(),Te(),W=i(),ce(),_e(),G=`storybook/referrers`,De=_(V),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[h,w]},J={render:H,args:{withComparison:!0},decorators:[h,w]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[h,w],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[h,w],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[h,w],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(Ee,{...e}),args:{...b,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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