import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{Ot as s,pn as c,t as l}from"./src-5g9sGwvT.js";import{Ot as u,dt as d,m as f,mt as p,o as ee,v as te}from"./charts-provider-Dz_9KfQe.js";import{Q as m,X as h,Y as g,Z as _,ct as v,k as ne,lt as y,ot as b,st as x,t as re,x as ie}from"./src-CwWcdYh9.js";import{a as ae}from"./src-BHkmuvTS.js";import{t as oe}from"./widget-state-CgiqWOxt.js";import"./rows-DoJXoHhN.js";import{r as se,t as ce}from"./leaderboard-skeleton-Ciu6IUKd.js";import{a as le,o as ue}from"./widget-state-B6SJsJzX.js";import{n as de,r as S}from"./with-story-router-Bwg0edRp.js";import{i as fe,o as pe}from"./build-leaderboard-chart-data-B1eNI0zc.js";import{f as me,l as he,o as ge}from"./leaderboard-bG98GUJZ.js";import{n as _e,t as ve}from"./use-no-views-empty-state-BMJXzusd.js";import{n as ye,t as be}from"./register-stats-mocks-Nvcu00DF.js";import{n as xe,t as C}from"./force-stats-mock-state-BBDmAC5l.js";var w,T,E,D,Se=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function Ce(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function O(e){let t=ae(e.link);return{label:Ce(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function we(e,r,i){let a=d(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...fe({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:pe({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:r&&s!==void 0?p(s,a):void 0,delta:r&&s!==void 0?u(e.value,s):void 0}})}function k({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,j.jsx)(se,{chartTitle:n(`Top links clicked`,`jetpack-premium-analytics-pkg`),data:we(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:n(`Links`,`jetpack-premium-analytics-pkg`),metric:`clicks`}})}function Te(){let{reportParams:e}=te(),{drillDownItem:t,drillDown:r,resetDrillDown:i}=ee(),{primary:o,comparisonRows:c,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=s({...e,max:10},{maxRows:10}),m=(0,a.useMemo)(()=>(c?.rows??[]).map(O),[c]),h=(0,a.useMemo)(()=>m.find(e=>e.label===t)??null,[m,t]),g=!!h?.children?.length,_=g?h.children??[]:m,v=g?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{t&&!g&&!u&&!d&&!f&&i()},[t,g,u,d,f,i]);let y=_e({isLoading:u,isError:f,isEmpty:m.length===0},n(`You don’t have clicked links recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,a.useCallback)(e=>{r(e.label)},[r]),x=g?(0,j.jsx)(he,{label:n(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:D.content,children:[x,(0,j.jsx)(oe,{isLoading:y.isLoading,isFetching:d,isError:m.length===0&&f,isEmpty:_.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},empty:y.empty,renderLoading:(0,j.jsx)(ce,{rows:10}),children:(0,j.jsx)(k,{rows:_,withComparison:v,onDrillDown:g?void 0:b})})]}),(0,j.jsxs)(ge,{children:[(0,j.jsx)(me,{report:`clicks`}),(0,j.jsx)(ie,{exporter:ne,status:{isLoading:u,isFetching:d,isError:o.isError},rowCount:m.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(f,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:(0,j.jsx)(Te,{})})})}var j,M,Ee=e((()=>{l(),re(),o(),r(),ve(),Se(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,De=e((()=>{N=`jpa/clicks`,P=`jpa/link`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:c(!1,e)}})}function Oe({withComparison:e,...t}){return(0,U.jsx)(x,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),le(),be(),xe(),v(),de(),m(),g(),Ee(),De(),U=i(),ue(),ye(),W=`storybook/clicks`,G=_(B),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[h,S]},J={render:V,args:{withComparison:!0},decorators:[h,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[h,S],beforeEach:()=>(C(`stats/clicks`,`loading`),()=>C(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[h,S],beforeEach:()=>(C(`stats/clicks`,`error`),()=>C(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[h,S],beforeEach:()=>(C(`stats/clicks`,`empty`),()=>C(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...b,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'loading');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/clicks`\nbefore `setReportMockState` can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'error');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'empty');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ClicksDashboardStory {...args} />,
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