import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Zc as i,n as a}from"./build-module-C3k6FW0l.js";import{Tt as o,d as s,f as c,g as l,kt as u,s as d}from"./hooks-OmBpvbqt.js";import{M as f,t as p,w as m}from"./build-module-BaW3sO3b.js";import{D as h,r as g}from"./chart-tooltip-CxVEHNoT.js";import{t as _}from"./leaderboard-chart-BsZ89MQM.js";import{n as v}from"./widget-loading-overlay-DuWNNIK1.js";import{n as ee,t as te}from"./register-report-mocks-CP7Bd8zi.js";import{i as ne,n as re,r as y,t as b}from"./widget-dashboard-with-widget-CWVbHkG1.js";import{t as x}from"./src-mBwSElQw.js";import{n as ie,t as S}from"./register-stats-mocks-tAtwOtc5.js";var C,w,T,E,D=e((()=>{C=`_root_fii7d_1`,w=`_placeholder_fii7d_9`,T=`_itemLabel_fii7d_17`,E={root:C,placeholder:w,itemLabel:T}}));function O(e,t){let n=String(e.label??``);return{key:n,label:g(n,t===`browser`?A:j),views:e.value}}function k({reportParams:e,max:t,deviceProperty:n}){let{primary:r,comparison:i,hasComparison:a,isLoading:o,isError:s,error:c}=l({...e,deviceProperty:n}),d=u(c);return{data:(r.data?.data?.[0]?.items??[]).map(e=>O(e,n)).slice(0,t>0?t:void 0),comparisonData:(i.data?.data?.[0]?.items??[]).map(e=>O(e,n)).slice(0,t>0?t:void 0),hasComparison:a,isLoading:o,isError:s,errorReason:d}}var A,j,M=e((()=>{n(),c(),x(),A={chrome:t(`Chrome`,`jetpack-premium-analytics`),safari:t(`Safari`,`jetpack-premium-analytics`),firefox:t(`Firefox`,`jetpack-premium-analytics`),edge:t(`Edge`,`jetpack-premium-analytics`),opera:t(`Opera`,`jetpack-premium-analytics`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics`),ie:t(`IE`,`jetpack-premium-analytics`),yandex:t(`Yandex`,`jetpack-premium-analytics`),miui:t(`Mi Browser`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)},j={windows:t(`Windows`,`jetpack-premium-analytics`),mac:t(`macOS`,`jetpack-premium-analytics`),android:t(`Android`,`jetpack-premium-analytics`),linux:t(`Linux`,`jetpack-premium-analytics`),ios:t(`iOS`,`jetpack-premium-analytics`),ipad:t(`iPad`,`jetpack-premium-analytics`),iphone:t(`iPhone`,`jetpack-premium-analytics`),ipados:t(`iPadOS`,`jetpack-premium-analytics`),macos:t(`macOS`,`jetpack-premium-analytics`),chrome:t(`Chrome OS`,`jetpack-premium-analytics`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)}}));function N({max:e,platformDimension:n}){let{reportParams:r}=s(),{data:i,comparisonData:a,hasComparison:o,isLoading:c,isError:l,errorReason:u}=k({reportParams:r,max:e,deviceProperty:n});if(l)return(0,F.jsx)(m,{align:`center`,justify:`center`,className:E.placeholder,children:(0,F.jsx)(f,{children:t(u===`upgrade-required`?`Platform stats are not included in your current plan.`:`Could not load platform data.`,`jetpack-premium-analytics`)})});if(c&&i.length===0)return(0,F.jsx)(v,{});let d=Math.max(...i.map(e=>e.views),0),p=Math.max(...a.map(e=>e.views),0),g=new Map(a.map(e=>[e.key,e.views]));return(0,F.jsx)(_,{data:i.map((e,t)=>({id:`${t}-${e.key}`,label:(0,F.jsx)(m,{align:`center`,className:E.itemLabel,children:(0,F.jsx)(f,{children:e.label})}),currentValue:e.views,currentShare:d>0?e.views/d*100:0,previousValue:g.get(e.key)??0,previousShare:p>0?(g.get(e.key)??0)/p*100:0,delta:h(e.views,g.get(e.key)??0)})),loading:c,withComparison:o,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`No platform data in this period.`,`jetpack-premium-analytics`),dataFormat:I})}function P({attributes:e}){let t=e?.max??10,n=e?.platformDimension??`browser`;return(0,F.jsx)(d,{attributes:e,children:(0,F.jsx)(`div`,{className:E.root,children:(0,F.jsx)(N,{max:t,platformDimension:n})})})}var F,I,L=e((()=>{n(),p(),x(),D(),M(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),R,z=e((()=>{n(),a(),R={name:`jpa/top-platforms`,title:t(`Top Platforms`,`jetpack-premium-analytics`),icon:i,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`},{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Browser`,`jetpack-premium-analytics`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics`),value:`platform`}],relevance:`high`}],example:{attributes:{max:10,platformDimension:`browser`}}}}));function B({withComparison:e,platformDimension:t}){return{max:10,platformDimension:t,reportParams:o(e)}}function V(e){return(0,W.jsx)(P,{attributes:B(e)})}function H(e){return(0,W.jsx)(P,{...e})}function U({withComparison:e,platformDimension:t,...n}){return(0,W.jsx)(re,{...n,widgetType:K,renderModule:G,renderComponent:H,attributes:B({withComparison:e,platformDimension:t})})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),y(),te(),S(),L(),z(),W=r(),ee(),ie(),G=`storybook/top-platforms`,K={name:R.name,title:R.title,icon:R.icon,attributes:R.attributes,example:R.example,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},Y={render:V,args:{withComparison:!1,platformDimension:`browser`},decorators:[q]},X={render:V,args:{withComparison:!0,platformDimension:`browser`},decorators:[q]},Z={render:V,args:{withComparison:!1,platformDimension:`platform`},decorators:[q]},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...b,withComparison:!0,platformDimension:`browser`},argTypes:{...ne,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: false,
    platformDimension: 'browser'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: true,
    platformDimension: 'browser'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderTopPlatformsWidget,
  args: {
    withComparison: false,
    platformDimension: 'platform'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`ByOS`,`WidgetDashboardWithWidget`]}))();export{Z as ByOS,Y as Default,Q as WidgetDashboardWithWidget,X as WithComparison,$ as __namedExportsOrder,J as default};