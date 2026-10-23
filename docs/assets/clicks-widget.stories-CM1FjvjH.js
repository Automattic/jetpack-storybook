import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{Ot as s,pn as c,t as l}from"./src-5g9sGwvT.js";import{F as u,Ft as d,Mt as f,Yt as p,f as ee,o as te,x as ne,z as re}from"./charts-provider-GU5rBGON.js";import{a as m}from"./src-CQ0z8Ix4.js";import{t as ie}from"./widget-state-5rQ0iNUT.js";import"./rows-DoJXoHhN.js";import{r as h,t as ae}from"./leaderboard-skeleton-CM000b_P.js";import{a as g,o as _}from"./widget-state-DTk7p_qL.js";import{n as v,r as y}from"./with-story-router-CyVN4A4U.js";import{i as oe}from"./leaderboard-C_OJb8Jy.js";import{i as b,o as x}from"./build-leaderboard-chart-data-DAUmUfq5.js";import{A as se,H as ce,M as le,N as ue,U as S,V as de,W as fe,j as C,t as pe}from"./src-f5L38IJp.js";import{n as me,t as he}from"./use-no-views-empty-state-dFYAd1OQ.js";import{n as ge,t as _e}from"./register-stats-mocks-Nvcu00DF.js";import{n as ve,t as w}from"./force-stats-mock-state-BwiHDkcF.js";var T,E,D,O,ye=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function be(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function k(e){let t=m(e.link);return{label:be(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,r,i){let a=f(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:d(e.value,a),previousValue:s,previousShare:r&&s!==void 0?d(s,a):void 0,delta:r&&s!==void 0?p(e.value,s):void 0}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,j.jsx)(h,{chartTitle:n(`Top links clicked`,`jetpack-premium-analytics-pkg`),data:xe(e,t,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:n(`Links`,`jetpack-premium-analytics-pkg`),metric:`clicks`}})}function Ce(){let{reportParams:e}=re(),{drillDownItem:t,drillDown:r,resetDrillDown:i}=te(),{primary:o,comparisonRows:c,hasComparison:l,isLoading:u,isFetching:d,isError:f,refetch:p}=s({...e,max:10},{maxRows:10}),m=(0,a.useMemo)(()=>(c?.rows??[]).map(k),[c]),h=(0,a.useMemo)(()=>m.find(e=>e.label===t)??null,[m,t]),g=!!h?.children?.length,_=g?h.children??[]:m,v=g?!!h?.childrenHaveComparison:l;(0,a.useEffect)(()=>{t&&!g&&!u&&!d&&!f&&i()},[t,g,u,d,f,i]);let y=me({isLoading:u,isError:f,isEmpty:m.length===0},n(`You don’t have clicked links recorded yet.`,`jetpack-premium-analytics-pkg`)),b=(0,a.useCallback)(e=>{r(e.label)},[r]),x=g?(0,j.jsx)(oe,{label:n(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return ee({report:`clicks`,csv:{exporter:ne,status:{isLoading:u,isFetching:d,isError:o.isError},rowCount:m.length}}),(0,j.jsxs)(`div`,{className:O.content,children:[x,(0,j.jsx)(ie,{isLoading:y.isLoading,isFetching:d,isError:m.length===0&&f,isEmpty:_.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]},empty:y.empty,renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(Se,{rows:_,withComparison:v,onDrillDown:g?void 0:b})})]})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Ce,{})})})}var j,M,we=e((()=>{l(),pe(),o(),r(),he(),ye(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,Te=e((()=>{N=`jpa/clicks`,P=`jpa/link`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:c(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(ce,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),_e(),ve(),S(),v(),ue(),se(),we(),Te(),U=i(),_(),ge(),W=`storybook/clicks`,G=le(B),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,y]},J={render:V,args:{withComparison:!0},decorators:[C,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/clicks`,`loading`),()=>w(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/clicks`,`error`),()=>w(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/clicks`,`empty`),()=>w(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...de,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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