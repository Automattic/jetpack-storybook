import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{t as s,vn as c,xt as ee}from"./src-DEqAZ4sf.js";import{Qt as l,Zt as u,_ as d,en as f,o as te,x as ne}from"./charts-provider-D34yyWgy.js";import{a as p}from"./src-BiQgbVkg.js";import"./rows-DAmD2BmE.js";import{r as m,t as re}from"./leaderboard-skeleton-CoxmvrYZ.js";import{n as h,r as g}from"./register-report-mocks-70LcEL2n.js";import{t as ie}from"./widget-state-BstI_c-b.js";import{n as _,r as v}from"./with-story-router-Beljd9ki.js";import{g as ae,i as y,o as oe,p as se,y as ce}from"./leaderboard-CfIu1yBU.js";import{n as le,u as b}from"./components-BFr_xsmo.js";import{t as ue}from"./src-Dd0ZFnE5.js";import{a as x,g as de,h as fe,i as pe,m as me,n as he,p as ge,r as S}from"./with-widget-canvas-Dqqnpcnu.js";import{n as _e,t as ve}from"./register-stats-mocks-D6iatP2a.js";import{n as ye,t as C}from"./force-stats-mock-state-BZqn3rgh.js";var w,T,E,D,be=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function xe(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function O(e){let t=p(e.link);return{label:xe(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,n,i){let a=l(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...y({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:oe({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:s,previousShare:n&&s!==void 0?u(s,a):void 0,delta:n&&s!==void 0?f(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,A.jsx)(m,{data:Se(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function we(){let{reportParams:e}=ne(),{drillDownItem:n,drillDown:r,resetDrillDown:i}=te(),{primary:o,comparisonRows:s,hasComparison:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ee({...e,max:10},{maxRows:10}),p=(0,a.useMemo)(()=>(s?.rows??[]).map(O),[s]),m=(0,a.useMemo)(()=>p.find(e=>e.label===n)??null,[p,n]),h=!!m?.children?.length,g=h?m.children??[]:p,_=h?!!m?.childrenHaveComparison:c;(0,a.useEffect)(()=>{n&&!h&&!l&&!u&&!d&&i()},[n,h,l,u,d,i]);let v=(0,a.useCallback)(e=>{r(e.label)},[r]),y=h?(0,A.jsx)(ae,{label:t(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:D.content,children:[y,(0,A.jsx)(ie,{isLoading:l,isFetching:u,isError:p.length===0&&d,isEmpty:g.length===0,error:{description:t(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,A.jsx)(re,{rows:10}),children:(0,A.jsx)(Ce,{rows:g,withComparison:_,onDrillDown:h?void 0:v})})]}),(0,A.jsxs)(se,{children:[(0,A.jsx)(ce,{report:`clicks`}),(0,A.jsx)(le,{exporter:b,status:{isLoading:l,isFetching:u,isError:o.isError},rowCount:p.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(we,{})})})}var A,j,Te=e((()=>{s(),ue(),o(),n(),be(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Ee=e((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,De=e((()=>{N=`jpa/clicks`,P=`jpa/link`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:c(!1,e)}})}function Oe({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),h(),ve(),ye(),fe(),_(),x(),he(),Te(),Ee(),De(),U=i(),g(),_e(),W=`storybook/clicks`,G=pe(B,M),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,v]},J={render:V,args:{withComparison:!0},decorators:[S,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,v],beforeEach:()=>(C(`stats/clicks`,`loading`),()=>C(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,v],beforeEach:()=>(C(`stats/clicks`,`error`),()=>C(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,v],beforeEach:()=>(C(`stats/clicks`,`empty`),()=>C(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ge,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};