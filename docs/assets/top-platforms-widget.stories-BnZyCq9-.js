import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{In as o,ft as s,t as c}from"./src-BVv1R588.js";import{Jt as l,R as u,W as ee,Xt as d,m as f}from"./charts-provider-DVBrFPaa.js";import{t as te}from"./widget-state-CqPm5upe.js";import{i as p}from"./with-story-router-Buc1zMFG.js";import"./constants-4LY2Ogim.js";import{r as ne,t as re}from"./leaderboard-skeleton-BRgiGhSp.js";import{n as m,r as h}from"./register-report-mocks-Dzl9RUVR.js";import{s as ie}from"./locations-geo-chart-Dbf-Xvw_.js";import{a as g,c as ae,i as _,l as oe,o as se,r as ce,s as le,u as ue}from"./with-widget-canvas-BqMy9p20.js";import{n as de,t as fe}from"./use-no-views-empty-state-CKi4wBm4.js";import{n as pe,t as me}from"./register-stats-mocks-CutN0CmB.js";import{n as he,t as v}from"./force-stats-mock-state-DltsELiR.js";var y,b,x,ge=e((()=>{y=`_root_19tfr_1`,b=`_content_19tfr_9`,x={root:y,content:b}}));function _e(e,t){let n=String(e.label??``);return{key:n,label:d(n,t===`browser`?S:C),views:e.value,previousViews:e.previousValue}}function ve({reportParams:e,max:t,deviceProperty:n}){let{primary:r,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:ee}=s({...e,deviceProperty:n},{maxRows:t}),d=(i?.rows??[]).map(e=>_e(e,n)),f=d.length===0&&l;return{data:d,hasComparison:a,isLoading:o,isFetching:c,isError:f,csvIsError:r.isError,csvIsPlaceholderData:r.isPlaceholderData,error:f?u:null,refetch:ee}}var S,C,ye=e((()=>{i(),c(),p(),S={chrome:r(`Chrome`,`jetpack-premium-analytics-pkg`),safari:r(`Safari`,`jetpack-premium-analytics-pkg`),firefox:r(`Firefox`,`jetpack-premium-analytics-pkg`),edge:r(`Edge`,`jetpack-premium-analytics-pkg`),opera:r(`Opera`,`jetpack-premium-analytics-pkg`),samsung:r(`Samsung Internet`,`jetpack-premium-analytics-pkg`),ie:r(`IE`,`jetpack-premium-analytics-pkg`),yandex:r(`Yandex`,`jetpack-premium-analytics-pkg`),miui:r(`Mi Browser`,`jetpack-premium-analytics-pkg`),other:r(`Other`,`jetpack-premium-analytics-pkg`)},C={windows:r(`Windows`,`jetpack-premium-analytics-pkg`),mac:r(`macOS`,`jetpack-premium-analytics-pkg`),android:r(`Android`,`jetpack-premium-analytics-pkg`),linux:r(`Linux`,`jetpack-premium-analytics-pkg`),ios:r(`iOS`,`jetpack-premium-analytics-pkg`),ipad:r(`iPad`,`jetpack-premium-analytics-pkg`),iphone:r(`iPhone`,`jetpack-premium-analytics-pkg`),ipados:r(`iPadOS`,`jetpack-premium-analytics-pkg`),macos:r(`macOS`,`jetpack-premium-analytics-pkg`),chrome:r(`Chrome OS`,`jetpack-premium-analytics-pkg`),android_tablet:r(`Android Tablet`,`jetpack-premium-analytics-pkg`),other:r(`Other`,`jetpack-premium-analytics-pkg`)}}));function be({platformDimension:e}){let{reportParams:t}=ee(),{data:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,csvIsError:c,csvIsPlaceholderData:u,error:d,refetch:p}=ve({reportParams:t,max:10,deviceProperty:e}),m=de({isLoading:a,isError:s,isEmpty:n.length===0},r(`You don’t have platforms recorded yet.`,`jetpack-premium-analytics-pkg`)),h=e===`platform`;f({csv:{rows:n,columns:(0,T.useMemo)(()=>[{label:r(h?`Operating system`:`Browser`,`jetpack-premium-analytics-pkg`),getValue:e=>e.label},{label:r(`Views`,`jetpack-premium-analytics-pkg`),getValue:e=>e.views}],[h]),filenamePrefix:h?`top-operating-systems`:`top-browsers`,hasDateRange:!0,status:{isLoading:a,isError:c,isPlaceholderData:u}}});let g=n.map((e,t)=>({id:`${t}-${e.key}`,...ie({label:e.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:e.views,previousValue:e.previousViews}));return(0,E.jsx)(`div`,{className:x.content,children:(0,E.jsx)(te,{isLoading:m.isLoading,isFetching:o,isError:s,isEmpty:n.length===0,error:l(d,{retryDescription:r(`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:m.empty,renderLoading:(0,E.jsx)(re,{rows:10}),children:(0,E.jsx)(ne,{data:g,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:D,columns:{label:r(e===`platform`?`Operating systems`:`Browsers`,`jetpack-premium-analytics-pkg`),metric:`views`}})})})}function w({attributes:e}){let t=e?.platformDimension??`browser`;return(0,E.jsx)(u,{attributes:e,children:(0,E.jsx)(`div`,{className:x.root,children:(0,E.jsx)(be,{platformDimension:t})})})}var T,E,D,xe=e((()=>{i(),p(),T=t(n(),1),fe(),ge(),ye(),E=a(),D={type:`number`,options:{useMultipliers:!0,decimals:0}}})),O,Se=e((()=>{O={example:{attributes:{platformDimension:`browser`}}}})),k,A,j,M,N,P,F,I,L,Ce=e((()=>{k=`jpa/top-platforms`,A=`jpa/desktop`,j=`Top platforms`,M=`Top browsers and operating systems your visitors use.`,N={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`traffic`,F=`framed`,I=[{id:`platformDimension`,type:`jpa/toggle-group`,label:`View by`,relevance:`high`,elements:[{value:`browser`,label:`Browser`},{value:`platform`,label:`OS`}]}],L={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F,attributes:I}}));function R({withComparison:e,platformDimension:t}){return{platformDimension:t,reportParams:o(e)}}function z(e){return(0,V.jsx)(w,{attributes:R(e)})}function B(e){return(0,V.jsx)(w,{attributes:{platformDimension:`browser`,reportParams:o(!1,e)}})}function we(e){return(0,V.jsx)(w,{...e})}function Te({withComparison:e,platformDimension:t,...n}){return(0,V.jsx)(ae,{...n,widgetType:U,renderModule:H,renderComponent:we,attributes:R({withComparison:e,platformDimension:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),oe(),se(),ce(),m(),me(),he(),xe(),Se(),Ce(),V=a(),h(),pe(),H=`storybook/top-platforms`,U=g(L,O),W={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:w,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:z,args:{withComparison:!1,platformDimension:`browser`},decorators:[_]},K={render:z,args:{withComparison:!0,platformDimension:`browser`},decorators:[_]},q={render:z,args:{withComparison:!1,platformDimension:`platform`},decorators:[_]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`loading`),()=>v(`stats/devices`,null))},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`error`),()=>v(`stats/devices`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`error-retryable`),()=>v(`stats/devices`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(`stats/devices`,`empty`),()=>v(`stats/devices`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(Te,{...e}),args:{...le,withComparison:!0,platformDimension:`browser`},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`ByOS`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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