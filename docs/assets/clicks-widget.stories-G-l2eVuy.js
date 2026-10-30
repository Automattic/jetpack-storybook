import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{B as ee,I as s,S as te,f as ne,o as re}from"./charts-provider-D6OKzkvv.js";import{Nt as ie,t as c,vn as l}from"./src-BIvck5w8.js";import{a as u}from"./src-DLsgqff_.js";import{t as ae}from"./widget-state-BygCceVJ.js";import{V as oe,i as d,n as f,r as p}from"./with-story-router-B1BxcZ6u.js";import"./constants-B9OTkkI1.js";import{r as m,t as se}from"./leaderboard-skeleton-Cwkv6Nvj.js";import{n as h,r as g}from"./register-report-mocks-CHPOiMpA.js";import{l as _,s as v}from"./locations-geo-chart-DeRwkkX5.js";import{a as y,g as b,h as ce,i as le,m as ue,n as de,p as fe,r as x}from"./with-widget-canvas-Bty13YgO.js";import{n as pe,t as me}from"./use-no-views-empty-state-CWA15MSX.js";import{n as he,t as ge}from"./register-stats-mocks-Nvcu00DF.js";import{n as _e,t as S}from"./force-stats-mock-state-VhRqVoOl.js";var C,w,T,E,ve=e((()=>{C=`_placeholder_1oate_1`,w=`_root_1oate_9`,T=`_content_1oate_18`,E={placeholder:C,root:w,content:T}}));function ye(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function D(e){let t=u(e.link);return{label:ye(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(D),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function be(e,r){return e.map((e,i)=>{let a=!!e.children?.length;return{id:`${i}-${e.href??e.label}`,...v({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hasChildren:a,drillDown:r?{onClick:()=>r(e),ariaLabel:t(n(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,previousValue:e.previousValue}})}function xe({rows:e=[],withComparison:t=!1,onDrillDown:r}){return(0,k.jsx)(m,{chartTitle:n(`Top links clicked`,`jetpack-premium-analytics-pkg`),data:be(e,r),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:n(`Links`,`jetpack-premium-analytics-pkg`),metric:`clicks`}})}function Se(){let{reportParams:e}=ee(),{drillDownItem:t,drillDown:r,resetDrillDown:i}=re(),{primary:o,comparisonRows:s,hasComparison:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ie({...e,max:10},{maxRows:10}),p=(0,a.useMemo)(()=>(s?.rows??[]).map(D),[s]),m=(0,a.useMemo)(()=>p.find(e=>e.label===t)??null,[p,t]),h=!!m?.children?.length,g=h?m.children??[]:p,_=h?!!m?.childrenHaveComparison:c;(0,a.useEffect)(()=>{t&&!h&&!l&&!u&&!d&&i()},[t,h,l,u,d,i]);let v=pe({isLoading:l,isError:d,isEmpty:p.length===0},n(`You don’t have clicked links recorded yet.`,`jetpack-premium-analytics-pkg`)),y=(0,a.useCallback)(e=>{r(e.label)},[r]),b=h?(0,k.jsx)(oe,{label:n(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return ne({csv:{exporter:te,status:{isLoading:l,isFetching:u,isError:o.isError},rowCount:p.length}}),(0,k.jsxs)(`div`,{className:E.content,children:[b,(0,k.jsx)(ae,{isLoading:v.isLoading,isFetching:u,isError:p.length===0&&d,isEmpty:g.length===0,error:{description:n(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:v.empty,renderLoading:(0,k.jsx)(se,{rows:10}),children:(0,k.jsx)(xe,{rows:g,withComparison:_,onDrillDown:h?void 0:y})})]})}function O({attributes:e={}}){return(0,k.jsx)(s,{attributes:e,children:(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(Se,{})})})}var k,A,j=e((()=>{c(),d(),o(),r(),me(),ve(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,Ce=e((()=>{M=`jpa/clicks`,N=`jpa/link`,P=`Top links clicked`,F=`Most clicked external links on your site.`,I={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fclicks`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:l(!1,e)}})}function we({withComparison:e,...t}){return(0,U.jsx)(ue,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),h(),ge(),_e(),ce(),f(),y(),de(),j(),Ce(),U=i(),g(),he(),W=`storybook/clicks`,G=le(B),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,p]},J={render:V,args:{withComparison:!0},decorators:[x,p]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(S(`stats/clicks`,`loading`),()=>S(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(S(`stats/clicks`,`error`),()=>S(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,p],beforeEach:()=>(S(`stats/clicks`,`empty`),()=>S(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(we,{...e}),args:{...fe,withComparison:!0},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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