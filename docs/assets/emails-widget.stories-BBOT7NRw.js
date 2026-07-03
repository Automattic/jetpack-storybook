import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Nt as o,n as s}from"./build-module-Dj4HXO1h.js";import{a as c,f as l,u}from"./hooks-C2G0ceeu.js";import{A as d,S as f,t as p}from"./build-module-ByI6tcn1.js";import{D as m,t as h}from"./build-module-DX4wQU9k.js";import{n as g,t as _}from"./with-chart-theme-q93wHfLY.js";import{t as v}from"./leaderboard-chart-CmpKCnC2.js";import{i as y}from"./metric-tabs-chart-DtgfUnx6.js";import{n as b,t as ee}from"./register-report-mocks-DeMk1-rz.js";import{i as te,n as ne,r as re,t as ie}from"./widget-dashboard-with-widget-CiwUt7x4.js";import{t as ae}from"./src-CT-IrEZK.js";var x,S,C,w,T,E,D,oe=e((()=>{x=`_root_1p385_1`,S=`_header_1p385_9`,C=`_metricSelect_1p385_15`,w=`_leaderboard_1p385_22`,T=`_label_1p385_31`,E=`_placeholder_1p385_41`,D={root:x,header:S,metricSelect:C,leaderboard:w,label:T,placeholder:E}}));function O(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let t=n(e);return{id:String(e.id),label:(0,M.jsx)(`span`,{className:D.label,title:e.label,children:e.label}),currentValue:t/100,currentShare:r>0?t/r*100:0,previousValue:0,previousShare:0,delta:0}})}function k(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function A({attributes:e}){let t=e?.max??10,{data:n,isLoading:r,isFetching:a,isError:o}=l({quantity:t>0?Math.min(t,30):30});return(0,M.jsx)(N,{rows:(0,i.useMemo)(()=>k(n,t),[n,t]),isLoading:r,isFetching:a,isError:o})}function j({attributes:e={}}){return(0,M.jsx)(c,{attributes:e,children:(0,M.jsx)(A,{attributes:e})})}var M,N,P=e((()=>{u(),ae(),h(),a(),n(),p(),oe(),M=r(),N=({rows:e=[],isLoading:n=!1,isFetching:r=!1,isError:a=!1,initialMetric:o=`opens`})=>{let[s,c]=(0,i.useState)(o),l=(0,i.useCallback)(e=>c(e),[]),u=(0,i.useMemo)(()=>O(e,s),[e,s]),p;return p=a?(0,M.jsx)(d,{className:D.placeholder,children:t(`Unable to load email stats.`,`jetpack-premium-analytics`)}):n&&e.length===0?(0,M.jsx)(y,{}):(0,M.jsx)(v,{className:D.leaderboard,data:u,loading:r,withComparison:!1,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics`),dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}}),(0,M.jsxs)(f,{className:D.root,children:[(0,M.jsx)(f,{direction:`row`,justify:`flex-end`,align:`center`,className:D.header,children:(0,M.jsx)(m,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:t(`View by`,`jetpack-premium-analytics`),hideLabelFromVision:!0,value:s,options:[{label:t(`Open rate`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Click rate`,`jetpack-premium-analytics`),value:`clicks`}],onChange:l,className:D.metricSelect})}),p]})}})),F,I=e((()=>{n(),s(),F={name:`jpa/stats-emails`,title:t(`Emails`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function L(e){return(0,R.jsx)(ne,{...e,widgetType:{name:F.name,title:F.title,icon:F.icon,presentation:`framed`},renderModule:z,renderComponent:j,attributes:{max:6}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ee(),_(),re(),P(),I(),R=r(),b(),z=`storybook/emails`,B={title:`Packages/Premium Analytics/Widgets/Emails`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Emails" widget. Lists the most recently sent emails with a selector to switch between open rate and click rate, rendered as a leaderboard. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response).'}}},decorators:[g]},V=[{id:1,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],H=[{id:1,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],U={args:{rows:V}},W={args:{rows:V,initialMetric:`clicks`}},G={args:{rows:[],isLoading:!0}},K={args:{rows:[]}},q={args:{isError:!0}},J={args:{rows:H}},Y=(e,t=`auto`)=>n=>(0,R.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,R.jsx)(n,{})}),X={args:{rows:V},decorators:[Y(`448px`)]},Z={args:{rows:V},decorators:[Y(`576px`)]},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...ie},argTypes:{...te}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  }
}`,...U.parameters?.docs?.source},description:{story:`Default populated state — latest emails (newest first) with their open rate.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    initialMetric: 'clicks'
  }
}`,...W.parameters?.docs?.source},description:{story:`Click-rate view — the selector defaults to click rate instead of open rate.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    isLoading: true
  }
}`,...G.parameters?.docs?.source},description:{story:`Loading state — the loading overlay renders while data is fetched.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...K.parameters?.docs?.source},description:{story:`Empty state — no emails have been sent yet.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isError: true
  }
}`,...q.parameters?.docs?.source},description:{story:`Error state — the report could not be loaded.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockLongLabelRows
  }
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ByClickRate`,`Loading`,`Empty`,`ErrorState`,`LongLabels`,`SizeMedium`,`SizeLarge`,`WidgetDashboardWithWidget`]}))();export{W as ByClickRate,U as Default,K as Empty,q as ErrorState,G as Loading,J as LongLabels,Z as SizeLarge,X as SizeMedium,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,B as default};