import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ws as i,t as a}from"./build-module-CR6EsQjA.js";import{b as o,g as s}from"./hooks-7KqDI4S5.js";import{T as c,t as l}from"./src-CldFJNXL.js";import{qt as u,t as d,y as f}from"./src-BjZ54zgU.js";import"./constants-B1kGztHF.js";import{M as p,V as m,_t as ee,f as te,ht as ne,mt as h,p as re}from"./chart-tooltip-C5TWg7Oz.js";import{r as ie,t as ae}from"./leaderboard-skeleton-B4J2iQ2E.js";import{G as oe,K as se,N as ce}from"./report-metric-C25Xf5Nx.js";import{t as le}from"./widget-state-KX6fpgAN.js";import{C as ue,D as de,E as g,S as fe,T as pe,b as me,t as _,w as he,x as v}from"./src-DnbRbU6q.js";import{n as ge,t as _e}from"./register-stats-mocks-DkV_VHgn.js";import{n as ve,t as y}from"./force-stats-mock-state-Dcoq-XVm.js";var b,x,S,ye=e((()=>{b=`_root_jzzhc_1`,x=`_content_jzzhc_9`,S={root:b,content:x}}));function be(e,t){let n=String(e.label??``);return{key:n,label:m(n,t===`browser`?C:w),views:e.value,previousViews:e.previousValue}}function xe({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=f({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(e=>be(e,n)),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var C,w,Se=e((()=>{n(),d(),_(),C={chrome:t(`Chrome`,`jetpack-premium-analytics-pkg`),safari:t(`Safari`,`jetpack-premium-analytics-pkg`),firefox:t(`Firefox`,`jetpack-premium-analytics-pkg`),edge:t(`Edge`,`jetpack-premium-analytics-pkg`),opera:t(`Opera`,`jetpack-premium-analytics-pkg`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:t(`IE`,`jetpack-premium-analytics-pkg`),yandex:t(`Yandex`,`jetpack-premium-analytics-pkg`),miui:t(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)},w={windows:t(`Windows`,`jetpack-premium-analytics-pkg`),mac:t(`macOS`,`jetpack-premium-analytics-pkg`),android:t(`Android`,`jetpack-premium-analytics-pkg`),linux:t(`Linux`,`jetpack-premium-analytics-pkg`),ios:t(`iOS`,`jetpack-premium-analytics-pkg`),ipad:t(`iPad`,`jetpack-premium-analytics-pkg`),iphone:t(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:t(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:t(`macOS`,`jetpack-premium-analytics-pkg`),chrome:t(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)}}));function T({platformDimension:e}){let{reportParams:n}=o(),{data:r,hasComparison:i,isLoading:a,isFetching:s,isError:l,error:u,refetch:d}=xe({reportParams:n,max:10,deviceProperty:e}),f=ne(r.map(e=>e.views),i?r.map(e=>e.previousViews):[]),m=r.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,...ce({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,currentShare:h(e.views,f),previousValue:n,previousShare:i&&n!==void 0?h(n,f):void 0,delta:i&&n!==void 0?ee(e.views,n):void 0}});return(0,D.jsx)(`div`,{className:S.content,children:(0,D.jsx)(le,{isLoading:a,isFetching:s,isError:l,isEmpty:r.length===0,error:p(u,{retryDescription:t(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:{icon:c,description:t(`No platform data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ae,{rows:10}),children:(0,D.jsx)(ie,{data:m,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:O})})})}function E({attributes:e}){let t=e?.platformDimension??`browser`;return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(`div`,{className:S.root,children:(0,D.jsx)(T,{platformDimension:t})})})}var D,O,k=e((()=>{l(),n(),_(),ye(),Se(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}}})),A,Ce=e((()=>{n(),a(),te(),A={icon:i,attributes:[{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:re,elements:[{label:t(`Browser`,`jetpack-premium-analytics-pkg`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics-pkg`),value:`platform`}],relevance:`high`}],example:{attributes:{platformDimension:`browser`}}}})),j,M,N,P,F,I,L,we=e((()=>{j=`jpa/top-platforms`,M=`Top platforms`,N=`Top browsers and operating systems your visitors use.`,P={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`traffic`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:u(e)}}function z(e){return(0,V.jsx)(E,{attributes:R(e)})}function B(e){return(0,V.jsx)(E,{attributes:{platformDimension:`browser`,reportParams:u(!1,e)}})}function Te(e){return(0,V.jsx)(E,{...e})}function Ee({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(pe,{...n,widgetType:U,renderModule:H,renderComponent:Te,attributes:R({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),g(),ue(),me(),oe(),_e(),ve(),k(),Ce(),we(),V=r(),se(),ge(),H=`storybook/top-platforms`,U=fe(L,A),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:z,args:{withComparison:!1,platformDimension:`browser`},decorators:[v]},K={render:z,args:{withComparison:!0,platformDimension:`browser`},decorators:[v]},q={render:z,args:{withComparison:!1,platformDimension:`platform`},decorators:[v]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`loading`),()=>y(`stats/devices`,null))},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`error`),()=>y(`stats/devices`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`error-retryable`),()=>y(`stats/devices`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`empty`),()=>y(`stats/devices`,null))},Q={render:e=>(0,V.jsx)(Ee,{...e}),args:{...he,withComparison:!0,platformDimension:`browser`},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: false,
    platformDimension: 'browser'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: true,
    platformDimension: 'browser'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: false,
    platformDimension: 'platform'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices', 'loading');
    return () => forceStatsMockState('stats/devices', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices', 'error');
    return () => forceStatsMockState('stats/devices', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices', 'error-retryable');
    return () => forceStatsMockState('stats/devices', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices', 'empty');
    return () => forceStatsMockState('stats/devices', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral device
glyph and "No platform data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TopPlatformsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    platformDimension: 'browser'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    },
    platformDimension: {
      control: 'radio',
      options: ['browser', 'platform'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`ByOS`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as ByOS,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};