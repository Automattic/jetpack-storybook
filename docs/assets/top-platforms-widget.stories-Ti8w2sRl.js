import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gs as i,n as a}from"./build-module-CDRs4YxF.js";import{Cn as o,sn as s,t as c}from"./src-C6B5gdNV.js";import{$ as l,G as u,K as d,rt as ee}from"./report-metric-C6pCab4k.js";import{C as te,t as f}from"./src-Cvyt29m2.js";import{C as ne,Ft as p,P as m,Tr as h,Xt as re,c as ie,ct as g,l as ae,st as _,ut as oe}from"./chart-tooltip-DSIzdQY_.js";import{t as se}from"./leaderboard-chart-UDzooFA0.js";import{t as ce}from"./widget-state-Cv5IFYZm.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as me,t as v,w as he,x as y}from"./src-DTUbRQhI.js";import{n as ge,t as _e}from"./register-stats-mocks-DFxAUtBC.js";import{n as ve,t as b}from"./force-stats-mock-state-W-9jebYL.js";var x,S,C,w,ye=e((()=>{x=`_root_al0b4_1`,S=`_content_al0b4_9`,C=`_itemLabel_al0b4_17`,w={root:x,content:S,itemLabel:C}}));function be(e,t){let n=String(e.label??``);return{key:n,label:m(n,t===`browser`?T:E),views:e.value,previousViews:e.previousValue}}function xe({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=re({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(e=>be(e,n)),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var T,E,Se=e((()=>{n(),p(),v(),T={chrome:t(`Chrome`,`jetpack-premium-analytics-pkg`),safari:t(`Safari`,`jetpack-premium-analytics-pkg`),firefox:t(`Firefox`,`jetpack-premium-analytics-pkg`),edge:t(`Edge`,`jetpack-premium-analytics-pkg`),opera:t(`Opera`,`jetpack-premium-analytics-pkg`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:t(`IE`,`jetpack-premium-analytics-pkg`),yandex:t(`Yandex`,`jetpack-premium-analytics-pkg`),miui:t(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)},E={windows:t(`Windows`,`jetpack-premium-analytics-pkg`),mac:t(`macOS`,`jetpack-premium-analytics-pkg`),android:t(`Android`,`jetpack-premium-analytics-pkg`),linux:t(`Linux`,`jetpack-premium-analytics-pkg`),ios:t(`iOS`,`jetpack-premium-analytics-pkg`),ipad:t(`iPad`,`jetpack-premium-analytics-pkg`),iphone:t(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:t(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:t(`macOS`,`jetpack-premium-analytics-pkg`),chrome:t(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:t(`Other`,`jetpack-premium-analytics-pkg`)}}));function Ce({max:e,platformDimension:n}){let{reportParams:r}=ee(),{data:i,hasComparison:a,isLoading:c,isFetching:l,isError:u,error:d,refetch:f}=xe({reportParams:r,max:e,deviceProperty:n}),p=g(i.map(e=>e.views),a?i.map(e=>e.previousViews):[]),m=i.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,label:(0,O.jsx)(s,{align:`center`,className:w.itemLabel,children:(0,O.jsx)(o,{children:e.label})}),currentValue:e.views,currentShare:_(e.views,p),previousValue:n,previousShare:a&&n!==void 0?_(n,p):void 0,delta:a&&n!==void 0?oe(e.views,n):void 0}});return(0,O.jsx)(`div`,{className:w.content,children:(0,O.jsx)(ce,{isLoading:c,isFetching:l,isError:u,isEmpty:i.length===0,error:ne(d,{retryDescription:t(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:te,description:t(`No platform data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(se,{data:m,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:k})})})}function D({attributes:e}){let t=e?.max??10,n=e?.platformDimension??`browser`;return(0,O.jsx)(l,{attributes:e,children:(0,O.jsx)(`div`,{className:w.root,children:(0,O.jsx)(Ce,{max:t,platformDimension:n})})})}var O,k,we=e((()=>{f(),n(),c(),v(),ye(),Se(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}}})),A,Te=e((()=>{n(),a(),ie(),A={icon:i,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ae,elements:[{label:t(`Browser`,`jetpack-premium-analytics-pkg`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics-pkg`),value:`platform`}],relevance:`high`}],example:{attributes:{max:10,platformDimension:`browser`}}}})),j,M,N,P,F,I,L,Ee=e((()=>{j=`jpa/top-platforms`,M=`Top platforms`,N=`Top browsers and operating systems your visitors use.`,P={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`traffic`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({withComparison:e,platformDimension:t}){return{max:10,platformDimension:t,reportParams:h(e)}}function z(e){return(0,V.jsx)(D,{attributes:R(e)})}function B(e){return(0,V.jsx)(D,{attributes:{max:10,platformDimension:`browser`,reportParams:h(!1,e)}})}function De(e){return(0,V.jsx)(D,{...e})}function Oe({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(pe,{...n,widgetType:U,renderModule:H,renderComponent:De,attributes:R({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),de(),le(),me(),u(),_e(),ve(),we(),Te(),Ee(),V=r(),d(),ge(),H=`storybook/top-platforms`,U=fe(L,A),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:z,args:{withComparison:!1,platformDimension:`browser`},decorators:[y]},K={render:z,args:{withComparison:!0,platformDimension:`browser`},decorators:[y]},q={render:z,args:{withComparison:!1,platformDimension:`platform`},decorators:[y]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices`,`loading`),()=>b(`stats/devices`,null))},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices`,`error`),()=>b(`stats/devices`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices`,`error-retryable`),()=>b(`stats/devices`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices`,`empty`),()=>b(`stats/devices`,null))},Q={render:e=>(0,V.jsx)(Oe,{...e}),args:{...he,withComparison:!0,platformDimension:`browser`},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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