import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ws as i,t as a}from"./build-module-DNhkEVJn.js";import{In as o,V as s,t as c}from"./src-Ferr21sN.js";import{Mt as l,_ as u,dt as d,en as f,rn as ee,tn as p,x as te}from"./charts-provider-DxgSZITe.js";import"./rows-DAmD2BmE.js";import{r as ne,t as re}from"./leaderboard-skeleton-DRgvJvCB.js";import{n as m,r as ie}from"./register-report-mocks-kbDmbfoa.js";import{t as ae}from"./widget-state-B3svSGRb.js";import{i as oe}from"./leaderboard-CSHzRqY0.js";import{t as h}from"./src-C4KwzsSl.js";import{a as se,g,h as ce,i as le,m as ue,n as de,p as fe,r as _}from"./with-widget-canvas-DV93GYy7.js";import{n as pe,t as me}from"./register-stats-mocks-PYQT7y_I.js";import{n as he,t as v}from"./force-stats-mock-state-DXl8K8ls.js";var y,b,x,S=e((()=>{y=`_root_19tfr_1`,b=`_content_19tfr_9`,x={root:y,content:b}}));function C(e,t){let n=String(e.label??``);return{key:n,label:l(n,t===`browser`?w:T),views:e.value,previousViews:e.previousValue}}function ge({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:c,error:l,refetch:u}=s({...e,deviceProperty:n},{maxRows:t}),d=(r?.rows??[]).map(e=>C(e,n)),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?l:null,refetch:u}}var w,T,_e=e((()=>{n(),c(),h(),w={chrome:t(`Chrome`,`jetpack-premium-analytics-pkg`),safari:t(`Safari`,`jetpack-premium-analytics-pkg`),firefox:t(`Firefox`,`jetpack-premium-analytics-pkg`),edge:t(`Edge`,`jetpack-premium-analytics-pkg`),opera:t(`Opera`,`jetpack-premium-analytics-pkg`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:t(`IE`,`jetpack-premium-analytics-pkg`),yandex:t(`Yandex`,`jetpack-premium-analytics-pkg`),miui:t(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)},T={windows:t(`Windows`,`jetpack-premium-analytics-pkg`),mac:t(`macOS`,`jetpack-premium-analytics-pkg`),android:t(`Android`,`jetpack-premium-analytics-pkg`),linux:t(`Linux`,`jetpack-premium-analytics-pkg`),ios:t(`iOS`,`jetpack-premium-analytics-pkg`),ipad:t(`iPad`,`jetpack-premium-analytics-pkg`),iphone:t(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:t(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:t(`macOS`,`jetpack-premium-analytics-pkg`),chrome:t(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)}}));function ve({platformDimension:e}){let{reportParams:n}=te(),{data:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=ge({reportParams:n,max:10,deviceProperty:e}),u=p(r.map(e=>e.views),i?r.map(e=>e.previousViews):[]),m=r.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,...oe({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,currentShare:f(e.views,u),previousValue:n,previousShare:i&&n!==void 0?f(n,u):void 0,delta:i&&n!==void 0?ee(e.views,n):void 0}});return(0,D.jsx)(`div`,{className:x.content,children:(0,D.jsx)(ae,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:d(c,{retryDescription:t(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),renderLoading:(0,D.jsx)(re,{rows:10}),children:(0,D.jsx)(ne,{data:m,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:O})})})}function E({attributes:e}){let t=e?.platformDimension??`browser`;return(0,D.jsx)(u,{attributes:e,children:(0,D.jsx)(`div`,{className:x.root,children:(0,D.jsx)(ve,{platformDimension:t})})})}var D,O,ye=e((()=>{n(),h(),S(),_e(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}}})),k,A=e((()=>{n(),a(),k={icon:i,attributes:[{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Browser`,`jetpack-premium-analytics-pkg`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics-pkg`),value:`platform`}],relevance:`high`}],example:{attributes:{platformDimension:`browser`}}}})),j,M,N,P,F,I,L,be=e((()=>{j=`jpa/top-platforms`,M=`Top platforms`,N=`Top browsers and operating systems your visitors use.`,P={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`traffic`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:o(e)}}function z(e){return(0,V.jsx)(E,{attributes:R(e)})}function B(e){return(0,V.jsx)(E,{attributes:{platformDimension:`browser`,reportParams:o(!1,e)}})}function xe(e){return(0,V.jsx)(E,{...e})}function Se({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(ue,{...n,widgetType:U,renderModule:H,renderComponent:xe,attributes:R({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),ce(),se(),de(),m(),me(),he(),ye(),A(),be(),V=r(),ie(),pe(),H=`storybook/top-platforms`,U=le(L,k),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:z,args:{withComparison:!1,platformDimension:`browser`},decorators:[_]},K={render:z,args:{withComparison:!0,platformDimension:`browser`},decorators:[_]},q={render:z,args:{withComparison:!1,platformDimension:`platform`},decorators:[_]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`loading`),()=>v(`stats/devices`,null))},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`error`),()=>v(`stats/devices`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`error-retryable`),()=>v(`stats/devices`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`empty`),()=>v(`stats/devices`,null))},Q={render:e=>(0,V.jsx)(Se,{...e}),args:{...fe,withComparison:!0,platformDimension:`browser`},argTypes:{...g,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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