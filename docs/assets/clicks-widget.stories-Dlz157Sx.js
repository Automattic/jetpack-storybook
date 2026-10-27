import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{F as s,f as c,in as l,o as ee,tn as u,vn as d,x as te,z as ne}from"./charts-provider-CXD9czsp.js";import{At as re,hn as f,t as p}from"./src-BEwaewMJ.js";import{a as m}from"./src-Ojbc_lr1.js";import{t as ie}from"./widget-state-BHtIizq9.js";import{F as ae,i as h,n as g,r as _}from"./with-story-router-9a5WlFpA.js";import"./constants-B9OTkkI1.js";import{r as v,t as oe}from"./leaderboard-skeleton-BSMHFXct.js";import{n as y,r as b}from"./register-report-mocks-D47Rougd.js";import{l as x,s as se}from"./locations-geo-chart-BROEMqI_.js";import{a as ce,g as le,h as ue,i as de,m as fe,n as pe,p as me,r as S}from"./with-widget-canvas-m8lOxuNC.js";import{n as he,t as ge}from"./use-no-views-empty-state-CVxmdHWd.js";import{n as _e,t as ve}from"./register-stats-mocks-Nvcu00DF.js";import{n as ye,t as C}from"./force-stats-mock-state-BxPlbF2m.js";var w,T,E,D,be=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function xe(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function O(e){let t=m(e.link);return{label:xe(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,r,i){let a=u(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...se({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:l(e.value,a),previousValue:s,previousShare:r&&s!==void 0?l(s,a):void 0,delta:r&&s!==void 0?d(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,A.jsx)(v,{chartTitle:n(`Top links clicked`,`jetpack-premium-analytics-pkg`),data:Se(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:n(`Links`,`jetpack-premium-analytics-pkg`),metric:`clicks`}})}function we(){let{reportParams:e}=ne(),{drillDownItem:t,drillDown:r,resetDrillDown:i}=ee(),{primary:o,comparisonRows:s,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=re({...e,max:10},{maxRows:10}),m=(0,a.useMemo)(()=>(s?.rows??[]).map(O),[s]),h=(0,a.useMemo)(()=>m.find(e=>e.label===t)??null,[m,t]),g=!!h?.children?.length,_=g?h.children??[]:m,v=g?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{t&&!g&&!u&&!d&&!f&&i()},[t,g,u,d,f,i]);let y=he({isLoading:u,isError:f,isEmpty:m.length===0},n(`You don’t have clicked links recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,a.useCallback)(e=>{r(e.label)},[r]),x=g?(0,A.jsx)(ae,{label:n(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return c({csv:{exporter:te,status:{isLoading:u,isFetching:d,isError:o.isError},rowCount:m.length}}),(0,A.jsxs)(`div`,{className:D.content,children:[x,(0,A.jsx)(ie,{isLoading:y.isLoading,isFetching:d,isError:m.length===0&&f,isEmpty:_.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},empty:y.empty,renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(Ce,{rows:_,withComparison:v,onDrillDown:g?void 0:b})})]})}function k({attributes:e={}}){return(0,A.jsx)(s,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(we,{})})})}var A,j,Te=e((()=>{p(),h(),o(),r(),ge(),be(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,Ee=e((()=>{M=`jpa/clicks`,N=`jpa/link`,P=`Top links clicked`,F=`Most clicked external links on your site.`,I={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fclicks`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:f(!1,e)}})}function De({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),y(),ve(),ye(),ue(),g(),ce(),pe(),Te(),Ee(),U=i(),b(),_e(),W=`storybook/clicks`,G=de(B),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,_]},J={render:V,args:{withComparison:!0},decorators:[S,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(C(`stats/clicks`,`loading`),()=>C(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(C(`stats/clicks`,`error`),()=>C(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(C(`stats/clicks`,`empty`),()=>C(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...me,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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