import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{al as i,n as a}from"./build-module-C6Ow06jV.js";import{R as o,W as s,t as c}from"./build-module-JNPAD9ni.js";import{C as l,t as u}from"./src-Bf8IXmOS.js";import{L as d,St as f,ir as p,l as ee,p as m,qn as h,ut as g}from"./chart-tooltip-DEOETmgz.js";import{t as _}from"./leaderboard-chart-Bf-RcmZn.js";import{C as v,N as te,S as y,k as b}from"./report-metric-ClL1ddFN.js";import{t as ne}from"./widget-state-CrdZLJk6.js";import{S as re,b as ie,t as x,x as ae,y as oe}from"./src-R2JdAVT2.js";import{n as se,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as C,t as ce}from"./register-stats-mocks-D6pR8ZIX.js";import{n as w,t as T}from"./force-stats-mock-state-9ER1fmOu.js";var E,D,O,k,le=e((()=>{E=`_root_al0b4_1`,D=`_content_al0b4_9`,O=`_itemLabel_al0b4_17`,k={root:E,content:D,itemLabel:O}}));function ue(e,t){let n=String(e.label??``);return{key:n,label:m(n,t===`browser`?j:M),views:e.value,previousViews:e.previousValue}}function A({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=f({...e,deviceProperty:n},{maxRows:t}),u=p(c),d=(r?.rows??[]).map(e=>ue(e,n));return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:d.length===0&&s,errorReason:u,refetch:l}}var j,M,de=e((()=>{n(),g(),x(),j={chrome:t(`Chrome`,`jetpack-premium-analytics`),safari:t(`Safari`,`jetpack-premium-analytics`),firefox:t(`Firefox`,`jetpack-premium-analytics`),edge:t(`Edge`,`jetpack-premium-analytics`),opera:t(`Opera`,`jetpack-premium-analytics`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics`),ie:t(`IE`,`jetpack-premium-analytics`),yandex:t(`Yandex`,`jetpack-premium-analytics`),miui:t(`Mi Browser`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)},M={windows:t(`Windows`,`jetpack-premium-analytics`),mac:t(`macOS`,`jetpack-premium-analytics`),android:t(`Android`,`jetpack-premium-analytics`),linux:t(`Linux`,`jetpack-premium-analytics`),ios:t(`iOS`,`jetpack-premium-analytics`),ipad:t(`iPad`,`jetpack-premium-analytics`),iphone:t(`iPhone`,`jetpack-premium-analytics`),ipados:t(`iPadOS`,`jetpack-premium-analytics`),macos:t(`macOS`,`jetpack-premium-analytics`),chrome:t(`Chrome OS`,`jetpack-premium-analytics`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)}}));function fe({max:e,platformDimension:n}){let{reportParams:r}=te(),{data:i,hasComparison:a,isLoading:c,isFetching:u,isError:f,errorReason:p,refetch:m}=A({reportParams:r,max:e,deviceProperty:n}),h=Math.max(...i.map(e=>e.views),0),g=Math.max(...i.map(e=>e.previousViews??0),0),v=a,y=i.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,label:(0,P.jsx)(o,{align:`center`,className:k.itemLabel,children:(0,P.jsx)(s,{children:e.label})}),currentValue:e.views,currentShare:h>0?e.views/h*100:0,previousValue:n,previousShare:v&&n!==void 0?ee(n,g):void 0,delta:v&&n!==void 0?d(e.views,n):void 0}}),b=p===`upgrade-required`;return(0,P.jsx)(`div`,{className:k.content,children:(0,P.jsx)(ne,{isLoading:c,isFetching:u,isError:f,isEmpty:i.length===0,error:{description:t(b?`Platform stats are not included in your current plan.`:`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:b?void 0:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:l,description:t(`No platform data in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(_,{data:y,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:F})})})}function N({attributes:e}){let t=e?.max??10,n=e?.platformDimension??`browser`;return(0,P.jsx)(b,{attributes:e,children:(0,P.jsx)(`div`,{className:k.root,children:(0,P.jsx)(fe,{max:t,platformDimension:n})})})}var P,F,I=e((()=>{u(),n(),c(),x(),le(),de(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,R=e((()=>{n(),a(),L={name:`jpa/top-platforms`,title:t(`Top Platforms`,`jetpack-premium-analytics`),help:{content:t(`Top browsers and operating systems your visitors use.`,`jetpack-premium-analytics`)},icon:i,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`},{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Browser`,`jetpack-premium-analytics`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics`),value:`platform`}],relevance:`high`}],example:{attributes:{max:10,platformDimension:`browser`}}}}));function z({withComparison:e,platformDimension:t}){return{max:10,platformDimension:t,reportParams:h(e)}}function B(e){return(0,H.jsx)(N,{attributes:z(e)})}function V(e){return(0,H.jsx)(N,{attributes:{max:10,platformDimension:`browser`,reportParams:h(!1,e)}})}function pe(e){return(0,H.jsx)(N,{...e})}function me({withComparison:e,platformDimension:t,...n}){return(0,H.jsx)(ie,{...n,widgetType:W,renderModule:U,renderComponent:pe,attributes:z({withComparison:e,platformDimension:t})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ae(),se(),y(),ce(),w(),I(),R(),H=r(),v(),C(),U=`storybook/top-platforms`,W={name:L.name,title:L.title,icon:L.icon,attributes:L.attributes,example:L.example,presentation:`framed`},G={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:B,args:{withComparison:!1,platformDimension:`browser`},decorators:[S]},q={render:B,args:{withComparison:!0,platformDimension:`browser`},decorators:[S]},J={render:B,args:{withComparison:!1,platformDimension:`platform`},decorators:[S]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(T(`stats/devices`,`loading`),()=>T(`stats/devices`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(T(`stats/devices`,`error`),()=>T(`stats/devices`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(T(`stats/devices`,`empty`),()=>T(`stats/devices`,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...oe,withComparison:!0,platformDimension:`browser`},argTypes:{...re,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: false,
    platformDimension: 'browser'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: true,
    platformDimension: 'browser'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: false,
    platformDimension: 'platform'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices', 'loading');
    return () => forceStatsMockState('stats/devices', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices', 'error');
    return () => forceStatsMockState('stats/devices', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPlatformsOnPreset('last-365-days'),
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`ByOS`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as ByOS,K as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};