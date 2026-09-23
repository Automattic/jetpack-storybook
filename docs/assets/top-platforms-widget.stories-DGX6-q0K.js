import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ks as i,t as a}from"./build-module-2iv4IIRq.js";import{Ot as o,Rt as s,_n as c,hn as l,m as u,mn as d,v as ee}from"./hooks-D2-uOzcc.js";import{T as te,t as f}from"./src-C-E2d-Lb.js";import{$t as p,t as m,w as h}from"./src-0ge7d6kt.js";import"./constants-B1kGztHF.js";import{r as ne,t as g}from"./leaderboard-skeleton-CDMNyzgV.js";import{i as re,r as ie}from"./register-report-mocks-DAHzORiq.js";import{j as ae}from"./report-metric--Et_iyvv.js";import{t as oe}from"./widget-state-BlFCjv4l.js";import{t as _}from"./src-Ddik3icB.js";import{a as se,d as ce,f as le,i as ue,n as de,p as fe,r as v,u as y}from"./with-widget-canvas-q45aoI9y.js";import{n as pe,t as me}from"./register-stats-mocks-BZi9sgqC.js";import{n as he,t as b}from"./force-stats-mock-state-DzBZCkRi.js";var x,S,C,ge=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function _e(e,t){let n=String(e.label??``);return{key:n,label:s(n,t===`browser`?w:T),views:e.value,previousViews:e.previousValue}}function ve({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=h({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(e=>_e(e,n)),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var w,T,ye=e((()=>{n(),m(),_(),w={chrome:t(`Chrome`,`jetpack-premium-analytics-pkg`),safari:t(`Safari`,`jetpack-premium-analytics-pkg`),firefox:t(`Firefox`,`jetpack-premium-analytics-pkg`),edge:t(`Edge`,`jetpack-premium-analytics-pkg`),opera:t(`Opera`,`jetpack-premium-analytics-pkg`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:t(`IE`,`jetpack-premium-analytics-pkg`),yandex:t(`Yandex`,`jetpack-premium-analytics-pkg`),miui:t(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)},T={windows:t(`Windows`,`jetpack-premium-analytics-pkg`),mac:t(`macOS`,`jetpack-premium-analytics-pkg`),android:t(`Android`,`jetpack-premium-analytics-pkg`),linux:t(`Linux`,`jetpack-premium-analytics-pkg`),ios:t(`iOS`,`jetpack-premium-analytics-pkg`),ipad:t(`iPad`,`jetpack-premium-analytics-pkg`),iphone:t(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:t(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:t(`macOS`,`jetpack-premium-analytics-pkg`),chrome:t(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)}}));function E({platformDimension:e}){let{reportParams:n}=ee(),{data:r,hasComparison:i,isLoading:a,isFetching:s,isError:u,error:f,refetch:p}=ve({reportParams:n,max:10,deviceProperty:e}),m=l(r.map(e=>e.views),i?r.map(e=>e.previousViews):[]),h=r.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,...ae({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,currentShare:d(e.views,m),previousValue:n,previousShare:i&&n!==void 0?d(n,m):void 0,delta:i&&n!==void 0?c(e.views,n):void 0}});return(0,O.jsx)(`div`,{className:C.content,children:(0,O.jsx)(oe,{isLoading:a,isFetching:s,isError:u,isEmpty:r.length===0,error:o(f,{retryDescription:t(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:te,description:t(`No platform data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(g,{rows:10}),children:(0,O.jsx)(ne,{data:h,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:k})})})}function D({attributes:e}){let t=e?.platformDimension??`browser`;return(0,O.jsx)(u,{attributes:e,children:(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(E,{platformDimension:t})})})}var O,k,be=e((()=>{f(),n(),_(),ge(),ye(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}}})),A,xe=e((()=>{n(),a(),A={icon:i,attributes:[{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Browser`,`jetpack-premium-analytics-pkg`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics-pkg`),value:`platform`}],relevance:`high`}],example:{attributes:{platformDimension:`browser`}}}})),j,M,N,P,F,I,L,Se=e((()=>{j=`jpa/top-platforms`,M=`Top platforms`,N=`Top browsers and operating systems your visitors use.`,P={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`traffic`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:p(e)}}function z(e){return(0,V.jsx)(D,{attributes:R(e)})}function B(e){return(0,V.jsx)(D,{attributes:{platformDimension:`browser`,reportParams:p(!1,e)}})}function Ce(e){return(0,V.jsx)(D,{...e})}function we({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(ce,{...n,widgetType:U,renderModule:H,renderComponent:Ce,attributes:R({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),le(),se(),de(),ie(),me(),he(),be(),xe(),Se(),V=r(),re(),pe(),H=`storybook/top-platforms`,U=ue(L,A),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:z,args:{withComparison:!1,platformDimension:`browser`},decorators:[v]},K={render:z,args:{withComparison:!0,platformDimension:`browser`},decorators:[v]},q={render:z,args:{withComparison:!1,platformDimension:`platform`},decorators:[v]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices`,`loading`),()=>b(`stats/devices`,null))},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices`,`error`),()=>b(`stats/devices`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices`,`error-retryable`),()=>b(`stats/devices`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices`,`empty`),()=>b(`stats/devices`,null))},Q={render:e=>(0,V.jsx)(we,{...e}),args:{...y,withComparison:!0,platformDimension:`browser`},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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