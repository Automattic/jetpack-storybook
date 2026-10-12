import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Sn as i,V as a,t as o}from"./src-2a88cYSx.js";import{C as s,in as c,nn as l,tn as u,vt as d,y as f,zt as p}from"./charts-provider-Bk38zIJq.js";import"./rows-DAmD2BmE.js";import{r as m,t as ee}from"./leaderboard-skeleton-CrHv2TjK.js";import{n as h,r as g}from"./register-report-mocks-iviv8n0s.js";import{t as te}from"./widget-state-BlUbrcDn.js";import{i as ne}from"./leaderboard-DkZGpeBt.js";import{t as _}from"./src-ZGXLokk_.js";import{a as re,g as ie,h as ae,i as oe,m as se,n as ce,p as le,r as v}from"./with-widget-canvas-Agk44m9m.js";import{n as ue,t as de}from"./register-stats-mocks-BsY0KMTS.js";import{n as fe,t as y}from"./force-stats-mock-state-Djnm6Goo.js";var b,x,S,pe=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function me(e,t){let n=String(e.label??``);return{key:n,label:p(n,t===`browser`?C:w),views:e.value,previousViews:e.previousValue}}function he({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:o,isFetching:s,isError:c,error:l,refetch:u}=a({...e,deviceProperty:n},{maxRows:t}),d=(r?.rows??[]).map(e=>me(e,n)),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:o,isFetching:s,isError:f,error:f?l:null,refetch:u}}var C,w,ge=e((()=>{n(),o(),_(),C={chrome:t(`Chrome`,`jetpack-premium-analytics-pkg`),safari:t(`Safari`,`jetpack-premium-analytics-pkg`),firefox:t(`Firefox`,`jetpack-premium-analytics-pkg`),edge:t(`Edge`,`jetpack-premium-analytics-pkg`),opera:t(`Opera`,`jetpack-premium-analytics-pkg`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:t(`IE`,`jetpack-premium-analytics-pkg`),yandex:t(`Yandex`,`jetpack-premium-analytics-pkg`),miui:t(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)},w={windows:t(`Windows`,`jetpack-premium-analytics-pkg`),mac:t(`macOS`,`jetpack-premium-analytics-pkg`),android:t(`Android`,`jetpack-premium-analytics-pkg`),linux:t(`Linux`,`jetpack-premium-analytics-pkg`),ios:t(`iOS`,`jetpack-premium-analytics-pkg`),ipad:t(`iPad`,`jetpack-premium-analytics-pkg`),iphone:t(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:t(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:t(`macOS`,`jetpack-premium-analytics-pkg`),chrome:t(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)}}));function _e({platformDimension:e}){let{reportParams:n}=s(),{data:r,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:p,refetch:h}=he({reportParams:n,max:10,deviceProperty:e}),g=l(r.map(e=>e.views),i?r.map(e=>e.previousViews):[]),_=r.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,...ne({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,currentShare:u(e.views,g),previousValue:n,previousShare:i&&n!==void 0?u(n,g):void 0,delta:i&&n!==void 0?c(e.views,n):void 0}});return(0,E.jsx)(`div`,{className:S.content,children:(0,E.jsx)(te,{isLoading:a,isFetching:o,isError:f,isEmpty:r.length===0,error:d(p,{retryDescription:t(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),renderLoading:(0,E.jsx)(ee,{rows:10}),children:(0,E.jsx)(m,{data:_,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:D})})})}function T({attributes:e}){let t=e?.platformDimension??`browser`;return(0,E.jsx)(f,{attributes:e,children:(0,E.jsx)(`div`,{className:S.root,children:(0,E.jsx)(_e,{platformDimension:t})})})}var E,D,ve=e((()=>{n(),_(),pe(),ge(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}}})),O,ye=e((()=>{n(),O={attributes:[{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Browser`,`jetpack-premium-analytics-pkg`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics-pkg`),value:`platform`}],relevance:`high`}],example:{attributes:{platformDimension:`browser`}}}})),k,A,j,M,N,P,F,I,be=e((()=>{k=`jpa/top-platforms`,A=`jpa/desktop`,j=`Top platforms`,M=`Top browsers and operating systems your visitors use.`,N={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`traffic`,F=`framed`,I={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:i(e)}}function R(e){return(0,V.jsx)(T,{attributes:L(e)})}function z(e){return(0,V.jsx)(T,{attributes:{platformDimension:`browser`,reportParams:i(!1,e)}})}function xe(e){return(0,V.jsx)(T,{...e})}function B({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(se,{...n,widgetType:U,renderModule:H,renderComponent:xe,attributes:L({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),ae(),re(),ce(),h(),de(),fe(),ve(),ye(),be(),V=r(),g(),ue(),H=`storybook/top-platforms`,U=oe(I,O),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:R,args:{withComparison:!1,platformDimension:`browser`},decorators:[v]},K={render:R,args:{withComparison:!0,platformDimension:`browser`},decorators:[v]},q={render:R,args:{withComparison:!1,platformDimension:`platform`},decorators:[v]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`loading`),()=>y(`stats/devices`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`error`),()=>y(`stats/devices`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`error-retryable`),()=>y(`stats/devices`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`empty`),()=>y(`stats/devices`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...le,withComparison:!0,platformDimension:`browser`},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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