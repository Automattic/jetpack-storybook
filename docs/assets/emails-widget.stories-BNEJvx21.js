import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Ft as o,n as s}from"./build-module-DwipKI4I.js";import{a as c,f as l,u}from"./hooks-BkMq8H4B.js";import{A as d,E as f,S as p,t as ee}from"./build-module-BS7goqaJ.js";import{D as te,t as ne}from"./build-module-Bx6LKLuo.js";import{n as re,t as ie}from"./with-chart-theme-Bk-T8fvq.js";import{t as ae}from"./leaderboard-chart-D4sSSddh.js";import{i as oe}from"./metric-tabs-chart-Dx5A3qS6.js";import{n as m,t as se}from"./register-report-mocks-BIUjg-sg.js";import{i as ce,n as h,r as g,t as _}from"./widget-dashboard-with-widget-CDauWJqA.js";import{t as le}from"./src-BPYmK-P8.js";var v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{v=`_root_rws37_1`,y=`_header_rws37_10`,b=`_title_rws37_17`,x=`_headerTitle_rws37_30`,S=`_headerIcon_rws37_38`,C=`_metricSelect_rws37_42`,w=`_content_rws37_49`,T=`_leaderboard_rws37_58`,E=`_label_rws37_67`,D=`_placeholder_rws37_77`,O={root:v,header:y,title:b,headerTitle:x,headerIcon:S,metricSelect:C,content:w,leaderboard:T,label:E,placeholder:D}})),A,j=e((()=>{n(),s(),A={name:`jpa/stats-emails`,title:t(`Emails`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function ue(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let t=n(e);return{id:String(e.id),label:(0,N.jsx)(`span`,{className:O.label,title:e.label,children:e.label}),currentValue:t/100,currentShare:r>0?t/r*100:0,previousValue:0,previousShare:0,delta:0}})}function de(){return(0,N.jsxs)(`span`,{className:O.headerTitle,children:[(0,N.jsx)(f,{icon:A.icon,size:20,className:O.headerIcon}),(0,N.jsx)(`span`,{children:t(`Emails`,`jetpack-premium-analytics`)})]})}function M(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function fe({attributes:e}){let t=e?.max??10,{data:n,isLoading:r,isFetching:a,isError:o}=l({quantity:t>0?Math.min(t,30):30});return(0,N.jsx)(P,{rows:(0,i.useMemo)(()=>M(n,t),[n,t]),isLoading:r,isFetching:a,isError:o})}function pe({attributes:e={}}){return(0,N.jsx)(c,{attributes:e,children:(0,N.jsx)(fe,{attributes:e})})}var N,P,F=e((()=>{u(),le(),ne(),a(),n(),ee(),k(),j(),N=r(),P=({rows:e=[],isLoading:n=!1,isFetching:r=!1,isError:a=!1,initialMetric:o=`opens`})=>{let[s,c]=(0,i.useState)(o),l=(0,i.useCallback)(e=>c(e),[]),u=(0,i.useMemo)(()=>ue(e,s),[e,s]),f;return f=a?(0,N.jsx)(p,{align:`center`,justify:`center`,className:O.placeholder,children:(0,N.jsx)(d,{children:t(`Unable to load email stats.`,`jetpack-premium-analytics`)})}):n&&e.length===0?(0,N.jsx)(oe,{}):(0,N.jsx)(ae,{className:O.leaderboard,data:u,loading:r,withComparison:!1,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics`),dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}}),(0,N.jsxs)(p,{className:O.root,children:[(0,N.jsxs)(p,{direction:`row`,justify:`space-between`,align:`center`,className:O.header,children:[(0,N.jsx)(d,{className:O.title,children:(0,N.jsx)(de,{})}),(0,N.jsx)(te,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:t(`View by`,`jetpack-premium-analytics`),hideLabelFromVision:!0,value:s,options:[{label:t(`Open rate`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Click rate`,`jetpack-premium-analytics`),value:`clicks`}],onChange:l,className:O.metricSelect})]}),(0,N.jsx)(`div`,{className:O.content,children:f})]})}}));function I(e){return(0,L.jsx)(h,{...e,widgetType:{name:A.name,title:A.title,icon:A.icon,presentation:`full-bleed`},renderModule:R,renderComponent:pe,attributes:{max:6}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{se(),ie(),g(),F(),j(),L=r(),m(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:P,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Emails" widget. Lists the most recently sent emails with a selector to switch between open rate and click rate, rendered as a leaderboard. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response).'}}},decorators:[re]},B=[{id:1,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(`div`,{style:{width:`100%`,height:`320px`},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[H]},W={args:{rows:B,initialMetric:`clicks`},decorators:[H]},G={args:{rows:[],isLoading:!0},decorators:[H]},K={args:{rows:[]},decorators:[H]},q={args:{isError:!0},decorators:[H]},J={args:{rows:V},decorators:[H]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`)]},Z={args:{rows:B},decorators:[Y(`576px`)]},Q={render:e=>(0,L.jsx)(I,{...e}),args:{..._},argTypes:{...ce}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [withWidgetCanvas]
}`,...U.parameters?.docs?.source},description:{story:`Default populated state — latest emails (newest first) with their open rate.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    initialMetric: 'clicks'
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Click-rate view — the selector defaults to click rate instead of open rate.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    isLoading: true
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Loading state — the loading overlay renders while data is fetched.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Empty state — no emails have been sent yet.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isError: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Error state — the report could not be loaded.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockLongLabelRows
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Long subject lines are truncated with an ellipsis so rows stay single-line.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('448px')]
}`,...X.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('576px')]
}`,...Z.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <EmailsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ByClickRate`,`Loading`,`Empty`,`ErrorState`,`LongLabels`,`SizeMedium`,`SizeLarge`,`WidgetDashboardWithWidget`]}))();export{W as ByClickRate,U as Default,K as Empty,q as ErrorState,G as Loading,J as LongLabels,Z as SizeLarge,X as SizeMedium,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,z as default};