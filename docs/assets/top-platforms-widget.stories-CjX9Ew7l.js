import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{R as o,W as s,t as c}from"./build-module-iNgY12ZR.js";import{C as l,t as u}from"./src-B3le4dug.js";import{Ar as d,G as f,It as p,J as ee,K as te,b as m,ur as h,xt as g}from"./chart-tooltip-BS0AHuyV.js";import{t as ne}from"./leaderboard-chart-CbpVeilC.js";import{I as _,L as re,U as v,q as ie}from"./report-metric-CypFTt88.js";import{t as ae}from"./widget-state-DnMIufY4.js";import{C as oe,D as se,E as ce,S as le,T as ue,b as de,t as y,w as fe,x as b}from"./src-DxVm3OnV.js";import{n as pe,t as me}from"./src-4y6VNgNE.js";import{n as he,t as ge}from"./register-stats-mocks-Cz0eqO3K.js";import{n as _e,t as x}from"./force-stats-mock-state-Cf3ymO9f.js";var S,C,w,T,ve=e((()=>{S=`_root_al0b4_1`,C=`_content_al0b4_9`,w=`_itemLabel_al0b4_17`,T={root:S,content:C,itemLabel:w}}));function ye(e,t){let n=String(e.label??``);return{key:n,label:m(n,t===`browser`?E:D),views:e.value,previousViews:e.previousValue}}function be({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=p({...e,deviceProperty:n},{maxRows:t}),u=d(c),f=(r?.rows??[]).map(e=>ye(e,n));return{data:f,hasComparison:i,isLoading:a,isFetching:o,isError:f.length===0&&s,errorReason:u,refetch:l}}var E,D,xe=e((()=>{n(),g(),y(),E={chrome:t(`Chrome`,`jetpack-premium-analytics`),safari:t(`Safari`,`jetpack-premium-analytics`),firefox:t(`Firefox`,`jetpack-premium-analytics`),edge:t(`Edge`,`jetpack-premium-analytics`),opera:t(`Opera`,`jetpack-premium-analytics`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics`),ie:t(`IE`,`jetpack-premium-analytics`),yandex:t(`Yandex`,`jetpack-premium-analytics`),miui:t(`Mi Browser`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)},D={windows:t(`Windows`,`jetpack-premium-analytics`),mac:t(`macOS`,`jetpack-premium-analytics`),android:t(`Android`,`jetpack-premium-analytics`),linux:t(`Linux`,`jetpack-premium-analytics`),ios:t(`iOS`,`jetpack-premium-analytics`),ipad:t(`iPad`,`jetpack-premium-analytics`),iphone:t(`iPhone`,`jetpack-premium-analytics`),ipados:t(`iPadOS`,`jetpack-premium-analytics`),macos:t(`macOS`,`jetpack-premium-analytics`),chrome:t(`Chrome OS`,`jetpack-premium-analytics`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)}}));function Se({max:e,platformDimension:n}){let{reportParams:r}=ie(),{data:i,hasComparison:a,isLoading:c,isFetching:u,isError:d,errorReason:p,refetch:m}=be({reportParams:r,max:e,deviceProperty:n}),h=te(i.map(e=>e.views),a?i.map(e=>e.previousViews):[]),g=i.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,label:(0,k.jsx)(o,{align:`center`,className:T.itemLabel,children:(0,k.jsx)(s,{children:e.label})}),currentValue:e.views,currentShare:f(e.views,h),previousValue:n,previousShare:a&&n!==void 0?f(n,h):void 0,delta:a&&n!==void 0?ee(e.views,n):void 0}}),_=p===`upgrade-required`;return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(ae,{isLoading:c,isFetching:u,isError:d,isEmpty:i.length===0,error:{description:t(_?`Platform stats are not included in your current plan.`:`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:_?void 0:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:l,description:t(`No platform data in this period.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(ne,{data:g,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})})}function O({attributes:e}){let t=e?.max??10,n=e?.platformDimension??`browser`;return(0,k.jsx)(v,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(Se,{max:t,platformDimension:n})})})}var k,A,Ce=e((()=>{u(),n(),c(),y(),ve(),xe(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),j,we=e((()=>{n(),a(),me(),j={icon:i,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:pe,elements:[{label:t(`Browser`,`jetpack-premium-analytics`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics`),value:`platform`}],relevance:`high`}],example:{attributes:{max:10,platformDimension:`browser`}}}})),M,N,P,F,I,L,R,Te=e((()=>{M=`jpa/top-platforms`,N=`Top Platforms`,P=`Top browsers and operating systems your visitors use.`,F={content:`A breakdown of the operating systems and browsers your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`traffic`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,platformDimension:t}){return{max:10,platformDimension:t,reportParams:h(e)}}function B(e){return(0,H.jsx)(O,{attributes:z(e)})}function V(e){return(0,H.jsx)(O,{attributes:{max:10,platformDimension:`browser`,reportParams:h(!1,e)}})}function Ee(e){return(0,H.jsx)(O,{...e})}function De({withComparison:e,platformDimension:t,...n}){return(0,H.jsx)(ue,{...n,widgetType:W,renderModule:U,renderComponent:Ee,attributes:z({withComparison:e,platformDimension:t})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ce(),oe(),de(),_(),ge(),_e(),Ce(),we(),Te(),H=r(),re(),he(),U=`storybook/top-platforms`,W=le(R,j),G={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:B,args:{withComparison:!1,platformDimension:`browser`},decorators:[b]},q={render:B,args:{withComparison:!0,platformDimension:`browser`},decorators:[b]},J={render:B,args:{withComparison:!1,platformDimension:`platform`},decorators:[b]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices`,`loading`),()=>x(`stats/devices`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices`,`error`),()=>x(`stats/devices`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices`,`empty`),()=>x(`stats/devices`,null))},Q={render:e=>(0,H.jsx)(De,{...e}),args:{...fe,withComparison:!0,platformDimension:`browser`},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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