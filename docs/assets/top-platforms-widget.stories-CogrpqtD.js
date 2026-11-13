import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Cn as o,et as s,t as c}from"./src-Bm9MmJNJ.js";import{H as l,I as u,Kt as d,Wt as f,f as p}from"./charts-provider-iKLRcVDw.js";import{t as ee}from"./widget-state-BC9EBmmc.js";import{i as m}from"./with-story-router-B_cck7yz.js";import"./constants-Cx6tCf49.js";import{r as te,t as ne}from"./leaderboard-skeleton-DcPZprAW.js";import{n as h,r as g}from"./register-report-mocks-D3lWkH8m.js";import{s as re}from"./locations-geo-chart-Bi_QuuG5.js";import{a as _,c as ie,i as v,l as ae,o as oe,r as se,s as ce,u as le}from"./with-widget-canvas-BhyYVwV4.js";import{n as ue,t as de}from"./use-no-views-empty-state-CLu4JZ1y.js";import{n as fe,t as pe}from"./register-stats-mocks-BLfWbTqK.js";import{n as me,t as y}from"./force-stats-mock-state-fgUq0aLM.js";var b,x,S,he=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function ge(e,t){let n=String(e.label??``);return{key:n,label:d(n,t===`browser`?C:w),views:e.value,previousViews:e.previousValue}}function _e({reportParams:e,max:t,deviceProperty:n}){let{primary:r,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:d}=s({...e,deviceProperty:n},{maxRows:t}),f=(i?.rows??[]).map(e=>ge(e,n)),p=f.length===0&&l;return{data:f,hasComparison:a,isLoading:o,isFetching:c,isError:p,csvIsError:r.isError,csvIsPlaceholderData:r.isPlaceholderData,error:p?u:null,refetch:d}}var C,w,ve=e((()=>{i(),c(),m(),C={chrome:r(`Chrome`,`jetpack-premium-analytics-pkg`),safari:r(`Safari`,`jetpack-premium-analytics-pkg`),firefox:r(`Firefox`,`jetpack-premium-analytics-pkg`),edge:r(`Edge`,`jetpack-premium-analytics-pkg`),opera:r(`Opera`,`jetpack-premium-analytics-pkg`),samsung:r(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:r(`IE`,`jetpack-premium-analytics-pkg`),yandex:r(`Yandex`,`jetpack-premium-analytics-pkg`),miui:r(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:r(`Other`,`jetpack-premium-analytics-pkg`)},w={windows:r(`Windows`,`jetpack-premium-analytics-pkg`),mac:r(`macOS`,`jetpack-premium-analytics-pkg`),android:r(`Android`,`jetpack-premium-analytics-pkg`),linux:r(`Linux`,`jetpack-premium-analytics-pkg`),ios:r(`iOS`,`jetpack-premium-analytics-pkg`),ipad:r(`iPad`,`jetpack-premium-analytics-pkg`),iphone:r(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:r(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:r(`macOS`,`jetpack-premium-analytics-pkg`),chrome:r(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:r(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:r(`Other`,`jetpack-premium-analytics-pkg`)}}));function ye({platformDimension:e}){let{reportParams:t}=l(),{data:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,csvIsError:c,csvIsPlaceholderData:u,error:d,refetch:m}=_e({reportParams:t,max:10,deviceProperty:e}),h=ue({isLoading:a,isError:s,isEmpty:n.length===0},r(`You don’t have platforms recorded yet.`,`jetpack-premium-analytics-pkg`)),g=e===`platform`;p({csv:{rows:n,columns:(0,E.useMemo)(()=>[{label:r(g?`Operating system`:`Browser`,`jetpack-premium-analytics-pkg`),getValue:e=>e.label},{label:r(`Views`,`jetpack-premium-analytics-pkg`),getValue:e=>e.views}],[g]),filenamePrefix:g?`top-operating-systems`:`top-browsers`,hasDateRange:!0,status:{isLoading:a,isFetching:o,isError:c,isPlaceholderData:u}}});let _=n.map((e,t)=>({id:`${t}-${e.key}`,...re({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,previousValue:e.previousViews}));return(0,D.jsx)(`div`,{className:S.content,children:(0,D.jsx)(ee,{isLoading:h.isLoading,isFetching:o,isError:s,isEmpty:n.length===0,error:f(d,{retryDescription:r(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:h.empty,renderLoading:(0,D.jsx)(ne,{rows:10}),children:(0,D.jsx)(te,{data:_,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:O,columns:{label:r(e===`platform`?`Operating systems`:`Browsers`,`jetpack-premium-analytics-pkg`),metric:`views`}})})})}function T({attributes:e}){let t=e?.platformDimension??`browser`;return(0,D.jsx)(u,{attributes:e,children:(0,D.jsx)(`div`,{className:S.root,children:(0,D.jsx)(ye,{platformDimension:t})})})}var E,D,O,be=e((()=>{i(),m(),E=t(n(),1),de(),he(),ve(),D=a(),O={type:`number`,options:{useMultipliers:!0,decimals:0}}})),k,xe=e((()=>{k={example:{attributes:{platformDimension:`browser`}}}})),A,j,M,N,P,F,I,L,R,Se=e((()=>{A=`jpa/top-platforms`,j=`jpa/desktop`,M=`Top platforms`,N=`Top browsers and operating systems your visitors use.`,P={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`traffic`,I=`framed`,L=[{id:`platformDimension`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`browser`,label:`Browser`},{value:`platform`,label:`OS`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:o(e)}}function B(e){return(0,H.jsx)(T,{attributes:z(e)})}function V(e){return(0,H.jsx)(T,{attributes:{platformDimension:`browser`,reportParams:o(!1,e)}})}function Ce(e){return(0,H.jsx)(T,{...e})}function we({withComparison:e,platformDimension:t,...n}){return(0,H.jsx)(ie,{...n,widgetType:W,renderModule:U,renderComponent:Ce,attributes:z({withComparison:e,platformDimension:t})})}var H,U,W,Te,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),ae(),oe(),se(),h(),pe(),me(),be(),xe(),Se(),H=a(),g(),fe(),U=`storybook/top-platforms`,W=_(R,k),Te={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:B,args:{withComparison:!1,platformDimension:`browser`},decorators:[v]},K={render:B,args:{withComparison:!0,platformDimension:`browser`},decorators:[v]},q={render:B,args:{withComparison:!1,platformDimension:`platform`},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`loading`),()=>y(`stats/devices`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`error`),()=>y(`stats/devices`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`error-retryable`),()=>y(`stats/devices`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices`,`empty`),()=>y(`stats/devices`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(we,{...e}),args:{...ce,withComparison:!0,platformDimension:`browser`},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`ByOS`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as ByOS,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Te as default};