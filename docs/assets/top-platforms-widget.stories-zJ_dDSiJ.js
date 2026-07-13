import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,rl as a}from"./build-module-Bt8gOW8e.js";import{It as o,Wt as s,d as c,p as l,s as u,w as d}from"./hooks-B9pl-bi6.js";import{K as f,R as p,t as m}from"./build-module-Bh3mpS28.js";import{F as h,d as g,u as _}from"./chart-tooltip-K7FkvQTF.js";import{t as v}from"./leaderboard-chart-sMEIUgwU.js";import{n as y}from"./widget-loading-overlay-CIdE75ul.js";import{n as ee,t as te}from"./register-report-mocks-CKzPsK87.js";import{i as b,n as x,r as S,t as C}from"./widget-dashboard-with-widget-jnt98QEH.js";import{t as w}from"./src-dhyDKvrB.js";import{n as T,t as E}from"./register-stats-mocks-Clob1ipQ.js";var D,O,k,A,ne=e((()=>{D=`_root_fii7d_1`,O=`_placeholder_fii7d_9`,k=`_itemLabel_fii7d_17`,A={root:D,placeholder:O,itemLabel:k}}));function re(e,t){let n=String(e.label??``);return{key:n,label:g(n,t===`browser`?j:M),views:e.value,previousViews:e.previousValue}}function ie({reportParams:e,max:t,deviceProperty:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isError:o,error:c}=d({...e,deviceProperty:n},{maxRows:t}),l=s(c);return{data:(r?.rows??[]).map(e=>re(e,n)),hasComparison:i,isLoading:a,isError:o,errorReason:l}}var j,M,ae=e((()=>{n(),l(),w(),j={chrome:t(`Chrome`,`jetpack-premium-analytics`),safari:t(`Safari`,`jetpack-premium-analytics`),firefox:t(`Firefox`,`jetpack-premium-analytics`),edge:t(`Edge`,`jetpack-premium-analytics`),opera:t(`Opera`,`jetpack-premium-analytics`),samsung:t(`Samsung Internet`,`jetpack-premium-analytics`),ie:t(`IE`,`jetpack-premium-analytics`),yandex:t(`Yandex`,`jetpack-premium-analytics`),miui:t(`Mi Browser`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)},M={windows:t(`Windows`,`jetpack-premium-analytics`),mac:t(`macOS`,`jetpack-premium-analytics`),android:t(`Android`,`jetpack-premium-analytics`),linux:t(`Linux`,`jetpack-premium-analytics`),ios:t(`iOS`,`jetpack-premium-analytics`),ipad:t(`iPad`,`jetpack-premium-analytics`),iphone:t(`iPhone`,`jetpack-premium-analytics`),ipados:t(`iPadOS`,`jetpack-premium-analytics`),macos:t(`macOS`,`jetpack-premium-analytics`),chrome:t(`Chrome OS`,`jetpack-premium-analytics`),android_tablet:t(`Android Tablet`,`jetpack-premium-analytics`),other:t(`Other`,`jetpack-premium-analytics`)}}));function N({max:e,platformDimension:n}){let{reportParams:r}=c(),{data:i,hasComparison:a,isLoading:o,isError:s,errorReason:l}=ie({reportParams:r,max:e,deviceProperty:n});if(s)return(0,F.jsx)(p,{align:`center`,justify:`center`,className:A.placeholder,children:(0,F.jsx)(f,{children:t(l===`upgrade-required`?`Platform stats are not included in your current plan.`:`Could not load platform data.`,`jetpack-premium-analytics`)})});if(o&&i.length===0)return(0,F.jsx)(y,{});let u=Math.max(...i.map(e=>e.views),0),d=Math.max(...i.map(e=>e.previousViews??0),0),m=a;return(0,F.jsx)(v,{data:i.map((e,t)=>{let n=e.previousViews;return{id:`${t}-${e.key}`,label:(0,F.jsx)(p,{align:`center`,className:A.itemLabel,children:(0,F.jsx)(f,{children:e.label})}),currentValue:e.views,currentShare:u>0?e.views/u*100:0,previousValue:n,previousShare:m&&n!==void 0?_(n,d):void 0,delta:m&&n!==void 0?h(e.views,n):void 0}}),loading:o,withComparison:a,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`No platform data in this period.`,`jetpack-premium-analytics`),dataFormat:I})}function P({attributes:e}){let t=e?.max??10,n=e?.platformDimension??`browser`;return(0,F.jsx)(u,{attributes:e,children:(0,F.jsx)(`div`,{className:A.root,children:(0,F.jsx)(N,{max:t,platformDimension:n})})})}var F,I,L=e((()=>{n(),m(),w(),ne(),ae(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),R,z=e((()=>{n(),i(),R={name:`jpa/top-platforms`,title:t(`Top Platforms`,`jetpack-premium-analytics`),icon:a,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`},{id:`platformDimension`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Browser`,`jetpack-premium-analytics`),value:`browser`},{label:t(`OS`,`jetpack-premium-analytics`),value:`platform`}],relevance:`high`}],example:{attributes:{max:10,platformDimension:`browser`}}}}));function B({withComparison:e,platformDimension:t}){return{max:10,platformDimension:t,reportParams:o(e)}}function V(e){return(0,W.jsx)(P,{attributes:B(e)})}function H(e){return(0,W.jsx)(P,{...e})}function U({withComparison:e,platformDimension:t,...n}){return(0,W.jsx)(x,{...n,widgetType:K,renderModule:G,renderComponent:H,attributes:B({withComparison:e,platformDimension:t})})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),S(),te(),E(),L(),z(),W=r(),ee(),T(),G=`storybook/top-platforms`,K={name:R.name,title:R.title,icon:R.icon,attributes:R.attributes,example:R.example,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/TopPlatforms`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Top Platforms\" widget. Shows browser and OS breakdown as a ranked leaderboard. The active dimension is the `platformDimension` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},Y={render:V,args:{withComparison:!1,platformDimension:`browser`},decorators:[q]},X={render:V,args:{withComparison:!0,platformDimension:`browser`},decorators:[q]},Z={render:V,args:{withComparison:!1,platformDimension:`platform`},decorators:[q]},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...C,withComparison:!0,platformDimension:`browser`},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},platformDimension:{control:`radio`,options:[`browser`,`platform`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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