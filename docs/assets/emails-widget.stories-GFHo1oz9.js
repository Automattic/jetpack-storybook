import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{n as o,ys as s}from"./build-module-C3k6FW0l.js";import{f as c,m as l,s as u}from"./hooks-4VpYJsJn.js";import{M as d,t as f,w as p}from"./build-module-BaW3sO3b.js";import{n as m,t as h}from"./with-chart-theme-tg2QN4_0.js";import{t as g}from"./leaderboard-chart-3JvuuCXB.js";import{i as _}from"./metric-tabs-chart-BIkdItAS.js";import{n as v,t as y}from"./register-report-mocks-q6Vgt6_e.js";import{i as b,n as ee,r as te,t as ne}from"./widget-dashboard-with-widget-D_XUOquy.js";import{t as re}from"./src-DZC-Wrwi.js";var x,S,C,w,T,E=e((()=>{x=`_root_1wg3n_1`,S=`_leaderboard_1wg3n_10`,C=`_label_1wg3n_20`,w=`_placeholder_1wg3n_30`,T={root:x,leaderboard:S,label:C,placeholder:w}}));function D(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let t=n(e);return{id:String(e.id),label:(0,j.jsx)(`span`,{className:T.label,title:e.label,children:e.label}),currentValue:t/100,currentShare:r>0?t/r*100:0,previousValue:0,previousShare:0,delta:0}})}function O(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function k({attributes:e}){let t=e?.max??10,n=e?.metric??`opens`,{data:r,isLoading:a,isFetching:o,isError:s}=l({quantity:t>0?Math.min(t,30):30});return(0,j.jsx)(M,{rows:(0,i.useMemo)(()=>O(r,t),[r,t]),isLoading:a,isFetching:o,isError:s,metric:n})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(k,{attributes:e})})}var j,M,N=e((()=>{c(),re(),a(),n(),f(),E(),j=r(),M=({rows:e=[],isLoading:n=!1,isFetching:r=!1,isError:a=!1,metric:o=`opens`})=>{let s=(0,i.useMemo)(()=>D(e,o),[e,o]),c;return c=a?(0,j.jsx)(p,{align:`center`,justify:`center`,className:T.placeholder,children:(0,j.jsx)(d,{children:t(`Unable to load email stats.`,`jetpack-premium-analytics`)})}):n&&e.length===0?(0,j.jsx)(_,{}):(0,j.jsx)(g,{className:T.leaderboard,data:s,loading:r,withComparison:!1,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics`),dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}}),(0,j.jsx)(`div`,{className:T.root,children:c})}})),P,F=e((()=>{n(),o(),P={name:`jpa/stats-emails`,title:t(`Emails`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`metric`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Open rate`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Click rate`,`jetpack-premium-analytics`),value:`clicks`}],relevance:`high`}],example:{attributes:{max:10,metric:`opens`}}}}));function I(e){return(0,L.jsx)(ee,{...e,widgetType:{name:P.name,title:P.title,icon:P.icon,presentation:`framed`},renderModule:R,renderComponent:A,attributes:{max:6,metric:`opens`}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),h(),te(),N(),F(),L=r(),v(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Emails\" widget. Lists the most recently sent emails with their open or click rate, rendered as a leaderboard. The displayed rate is the `metric` attribute (`relevance: 'high'`), exposed as a control by the widget host. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response)."}}},decorators:[m]},B=[{id:1,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(`div`,{style:{width:`100%`,height:`320px`},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[H]},W={args:{rows:B,metric:`clicks`},decorators:[H]},G={args:{rows:[],isLoading:!0},decorators:[H]},K={args:{rows:[]},decorators:[H]},q={args:{isError:!0},decorators:[H]},J={args:{rows:V},decorators:[H]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`)]},Z={args:{rows:B},decorators:[Y(`576px`)]},Q={render:e=>(0,L.jsx)(I,{...e}),args:{...ne},argTypes:{...b}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [withWidgetCanvas]
}`,...U.parameters?.docs?.source},description:{story:`Default populated state — latest emails (newest first) with their open rate.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    metric: 'clicks'
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:"Click-rate view — the `metric` attribute set to click rate instead of open rate.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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