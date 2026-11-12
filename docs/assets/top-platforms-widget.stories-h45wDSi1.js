import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{B as i,I as a,Vt as o,cn as s}from"./charts-provider-CG5oTpIE.js";import{$ as c,Sn as l,t as u}from"./src-BcILQ8ng.js";import{t as d}from"./widget-state-DnbF8hrz.js";import{t as f}from"./src-BYo4kEZS.js";import"./constants-JU419spr.js";import{r as ee,t as te}from"./leaderboard-skeleton-7nsRevJS.js";import{n as p,r as m}from"./register-report-mocks-DEKgkFm4.js";import{s as h}from"./locations-geo-chart-C-iEnNbf.js";import{a as ne,c as re,i as g,l as ie,o as ae,r as oe,s as se,u as ce}from"./with-widget-canvas-BilWRZpu.js";import{n as le,t as ue}from"./use-no-views-empty-state-yocQDpJJ.js";import{n as de,t as _}from"./register-stats-mocks-BLfWbTqK.js";import{n as fe,t as v}from"./force-stats-mock-state-CZ4B651-.js";var y,b,x,pe=e((()=>{y=`_root_19tfr_1`,b=`_content_19tfr_9`,x={root:y,content:b}}));function me(e,t){let n=String(e.label??``);return{key:n,label:s(n,t===`browser`?S:C),views:e.value,previousViews:e.previousValue}}function he({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:l,refetch:u}=c({...e,deviceProperty:n},{maxRows:t}),d=(r?.rows??[]).map(e=>me(e,n)),f=d.length===0&&s;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?l:null,refetch:u}}var S,C,ge=e((()=>{n(),u(),f(),S={chrome:t(`Chrome`,`jetpack-premium-analytics-pkg`),safari:t(`Safari`,`jetpack-premium-analytics-pkg`),firefox:t(`Firefox`,`jetpack-premium-analytics-pkg`),edge:t(`Edge`,`jetpack-premium-analytics-pkg`),opera:t(`Opera`,`jetpack-premium-analytics-pkg`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:t(`IE`,`jetpack-premium-analytics-pkg`),yandex:t(`Yandex`,`jetpack-premium-analytics-pkg`),miui:t(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)},C={windows:t(`Windows`,`jetpack-premium-analytics-pkg`),mac:t(`macOS`,`jetpack-premium-analytics-pkg`),android:t(`Android`,`jetpack-premium-analytics-pkg`),linux:t(`Linux`,`jetpack-premium-analytics-pkg`),ios:t(`iOS`,`jetpack-premium-analytics-pkg`),ipad:t(`iPad`,`jetpack-premium-analytics-pkg`),iphone:t(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:t(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:t(`macOS`,`jetpack-premium-analytics-pkg`),chrome:t(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)}}));function w({platformDimension:e}){let{reportParams:n}=i(),{data:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:f}=he({reportParams:n,max:10,deviceProperty:e}),p=le({isLoading:s,isError:l,isEmpty:r.length===0},t(`You don’t have platforms recorded yet.`,`jetpack-premium-analytics-pkg`)),m=r.map((e,t)=>({id:`${t}-${e.key}`,...h({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,previousValue:e.previousViews}));return(0,E.jsx)(`div`,{className:x.content,children:(0,E.jsx)(d,{isLoading:p.isLoading,isFetching:c,isError:l,isEmpty:r.length===0,error:o(u,{retryDescription:t(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:p.empty,renderLoading:(0,E.jsx)(te,{rows:10}),children:(0,E.jsx)(ee,{data:m,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:D,columns:{label:t(e===`platform`?`Operating systems`:`Browsers`,`jetpack-premium-analytics-pkg`),metric:`views`}})})})}function T({attributes:e}){let t=e?.platformDimension??`browser`;return(0,E.jsx)(a,{attributes:e,children:(0,E.jsx)(`div`,{className:x.root,children:(0,E.jsx)(w,{platformDimension:t})})})}var E,D,_e=e((()=>{n(),f(),ue(),pe(),ge(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}}})),O,ve=e((()=>{O={example:{attributes:{platformDimension:`browser`}}}})),k,A,j,M,N,P,F,I,L,ye=e((()=>{k=`jpa/top-platforms`,A=`jpa/desktop`,j=`Top platforms`,M=`Top browsers and operating systems your visitors use.`,N={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`traffic`,F=`framed`,I=[{id:`platformDimension`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`browser`,label:`Browser`},{value:`platform`,label:`OS`}]}],L={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F,attributes:I}}));function R({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:l(e)}}function z(e){return(0,V.jsx)(T,{attributes:R(e)})}function B(e){return(0,V.jsx)(T,{attributes:{platformDimension:`browser`,reportParams:l(!1,e)}})}function be(e){return(0,V.jsx)(T,{...e})}function xe({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(re,{...n,widgetType:U,renderModule:H,renderComponent:be,attributes:R({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ie(),ae(),oe(),p(),_(),fe(),_e(),ve(),ye(),V=r(),m(),de(),H=`storybook/top-platforms`,U=ne(L,O),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:z,args:{withComparison:!1,platformDimension:`browser`},decorators:[g]},K={render:z,args:{withComparison:!0,platformDimension:`browser`},decorators:[g]},q={render:z,args:{withComparison:!1,platformDimension:`platform`},decorators:[g]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices`,`loading`),()=>v(`stats/devices`,null))},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices`,`error`),()=>v(`stats/devices`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices`,`error-retryable`),()=>v(`stats/devices`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices`,`empty`),()=>v(`stats/devices`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(xe,{...e}),args:{...se,withComparison:!0,platformDimension:`browser`},argTypes:{...ce,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`ByOS`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as ByOS,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};