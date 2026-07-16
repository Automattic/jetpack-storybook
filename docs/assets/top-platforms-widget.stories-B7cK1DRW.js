import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{R as o,W as s,t as c}from"./build-module-tgGieqUZ.js";import{C as l,t as u}from"./src-B3le4dug.js";import{L as d,S as f,St as p,Yn as m,d as h,or as g,ut as _}from"./chart-tooltip-D391HsEs.js";import{t as v}from"./leaderboard-chart-BsvsfHxv.js";import{C as y,N as b,S as x,k as S}from"./report-metric-rOGqqN_8.js";import{t as ee}from"./widget-state-CzHLjliM.js";import{S as te,b as ne,t as C,x as re,y as ie}from"./src-Cv7mlpCY.js";import{n as ae,r as w}from"./with-widget-canvas-Dz43KNHY.js";import{n as oe,t as T}from"./register-stats-mocks-IZuWy5pg.js";import{n as E,t as D}from"./force-stats-mock-state-D7Q5aRpf.js";var O,k,A,j,se=e((()=>{O=`_root_al0b4_1`,k=`_content_al0b4_9`,A=`_itemLabel_al0b4_17`,j={root:O,content:k,itemLabel:A}}));function ce(e,t){let n=String(e.label??``);return{key:n,label:h(n,t===`browser`?M:N),views:e.value,previousViews:e.previousValue}}function le({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=p({...e,deviceProperty:n},{maxRows:t}),u=g(c),d=(r?.rows??[]).map(e=>ce(e,n));return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:d.length===0&&s,errorReason:u,refetch:l}}var M,N,ue=e((()=>{n(),_(),C(),M={chrome:t(`Chrome`,`jetpack-premium-analytics`),safari:t(`Safari`,`jetpack-premium-analytics`),firefox:t(`Firefox`,`jetpack-premium-analytics`),edge:t(`Edge`,`jetpack-premium-analytics`),opera:t(`Opera`,`jetpack-premium-analytics`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics`),ie:t(`IE`,`jetpack-premium-analytics`),yandex:t(`Yandex`,`jetpack-premium-analytics`),miui:t(`Mi Browser`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)},N={windows:t(`Windows`,`jetpack-premium-analytics`),mac:t(`macOS`,`jetpack-premium-analytics`),android:t(`Android`,`jetpack-premium-analytics`),linux:t(`Linux`,`jetpack-premium-analytics`),ios:t(`iOS`,`jetpack-premium-analytics`),ipad:t(`iPad`,`jetpack-premium-analytics`),iphone:t(`iPhone`,`jetpack-premium-analytics`),ipados:t(`iPadOS`,`jetpack-premium-analytics`),macos:t(`macOS`,`jetpack-premium-analytics`),chrome:t(`Chrome OS`,`jetpack-premium-analytics`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)}}));function de({max:e,platformDimension:n}){let{reportParams:r}=b(),{data:i,hasComparison:a,isLoading:c,isFetching:u,isError:p,errorReason:m,refetch:h}=le({reportParams:r,max:e,deviceProperty:n}),g=Math.max(...i.map(e=>e.views),0),_=Math.max(...i.map(e=>e.previousViews??0),0),y=a,x=i.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,label:(0,F.jsx)(o,{align:`center`,className:j.itemLabel,children:(0,F.jsx)(s,{children:e.label})}),currentValue:e.views,currentShare:g>0?e.views/g*100:0,previousValue:n,previousShare:y&&n!==void 0?f(n,_):void 0,delta:y&&n!==void 0?d(e.views,n):void 0}}),S=m===`upgrade-required`;return(0,F.jsx)(`div`,{className:j.content,children:(0,F.jsx)(ee,{isLoading:c,isFetching:u,isError:p,isEmpty:i.length===0,error:{description:t(S?`Platform stats are not included in your current plan.`:`We couldn't load platform data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:S?void 0:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:h}]},empty:{icon:l,description:t(`No platform data in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(v,{data:x,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:I})})})}function P({attributes:e}){let t=e?.max??10,n=e?.platformDimension??`browser`;return(0,F.jsx)(S,{attributes:e,children:(0,F.jsx)(`div`,{className:j.root,children:(0,F.jsx)(de,{max:t,platformDimension:n})})})}var F,I,fe=e((()=>{u(),n(),c(),C(),se(),ue(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,R=e((()=>{n(),a(),L={name:`jpa/top-platforms`,title:t(`Top Platforms`,`jetpack-premium-analytics`),help:{content:t(`Top browsers and operating systems your visitors use.`,`jetpack-premium-analytics`)},icon:i,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`},{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Browser`,`jetpack-premium-analytics`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics`),value:`platform`}],relevance:`high`}],example:{attributes:{max:10,platformDimension:`browser`}}}}));function z({withComparison:e,platformDimension:t}){return{max:10,platformDimension:t,reportParams:m(e)}}function B(e){return(0,H.jsx)(P,{attributes:z(e)})}function V(e){return(0,H.jsx)(P,{attributes:{max:10,platformDimension:`browser`,reportParams:m(!1,e)}})}function pe(e){return(0,H.jsx)(P,{...e})}function me({withComparison:e,platformDimension:t,...n}){return(0,H.jsx)(ne,{...n,widgetType:W,renderModule:U,renderComponent:pe,attributes:z({withComparison:e,platformDimension:t})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),re(),ae(),x(),T(),E(),fe(),R(),H=r(),y(),oe(),U=`storybook/top-platforms`,W={name:L.name,title:L.title,icon:L.icon,attributes:L.attributes,example:L.example,presentation:`framed`},G={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:B,args:{withComparison:!1,platformDimension:`browser`},decorators:[w]},q={render:B,args:{withComparison:!0,platformDimension:`browser`},decorators:[w]},J={render:B,args:{withComparison:!1,platformDimension:`platform`},decorators:[w]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(D(`stats/devices`,`loading`),()=>D(`stats/devices`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(D(`stats/devices`,`error`),()=>D(`stats/devices`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(D(`stats/devices`,`empty`),()=>D(`stats/devices`,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...ie,withComparison:!0,platformDimension:`browser`},argTypes:{...te,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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