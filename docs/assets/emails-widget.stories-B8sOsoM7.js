import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,E as ee,K as l,S as u,Y as d,q as te,w as ne}from"./report-metric-DcvQRJSL.js";import{Mt as re,Tt as f,Z as ie,hr as ae}from"./chart-tooltip-JeJCERB4.js";import{t as oe}from"./leaderboard-chart-Dg_lU9T0.js";import{t as se}from"./widget-state-Dkv6b-_W.js";import{C as ce,D as le,E as ue,O as de,S as fe,T as pe,b as me,k as p,t as m,w as h,x as g}from"./src-CatI5IZr.js";import{n as he,t as ge}from"./src-Cfu7o9bH.js";var _,v,y,b,x,S=e((()=>{_=`_root_17y45_1`,v=`_widget_17y45_12`,y=`_body_17y45_22`,b=`_leaderboard_17y45_30`,x={root:_,widget:v,body:y,leaderboard:b}}));function C(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let i=n(e);return{id:String(e.id),label:(0,E.jsx)(u,{id:e.postId,label:e.label,link:e.link,section:t===`clicks`?`email-clicks`:`email-opens`,variant:`overlay`}),currentValue:i/100,currentShare:ie(i,r),previousValue:0,previousShare:0,delta:0}})}function w(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,postId:e.id,link:typeof e.link==`string`?e.link:null,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function _e({attributes:e}){let n=e?.max??10,r=e?.metric??`opens`,{data:a,isLoading:s,isFetching:c,isError:l,refetch:u}=re({quantity:n>0?Math.min(n,30):30}),d=(0,i.useMemo)(()=>w(a,n),[a,n]);return(0,E.jsxs)(`div`,{className:x.widget,children:[(0,E.jsx)(`div`,{className:x.body,children:(0,E.jsx)(se,{isLoading:s,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load email stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(D,{rows:d,metric:r})})}),(0,E.jsx)(ee,{children:(0,E.jsx)(ne,{report:`emails`})})]})}function T({attributes:e={}}){return(0,E.jsx)(c,{attributes:e,children:(0,E.jsx)(_e,{attributes:e})})}var E,D,ve=e((()=>{f(),m(),a(),n(),s(),S(),E=r(),D=({rows:e=[],metric:t=`opens`})=>{let n=(0,i.useMemo)(()=>C(e,t),[e,t]);return(0,E.jsx)(`div`,{className:x.root,children:(0,E.jsx)(oe,{className:x.leaderboard,data:n,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}})})}})),O,ye=e((()=>{n(),s(),ge(),O={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:he,elements:[{label:t(`Open rate`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Click rate`,`jetpack-premium-analytics-pkg`),value:`clicks`}],relevance:`high`}],example:{attributes:{max:10,metric:`opens`}}}})),k,A,j,M,N,P,F,be=e((()=>{k=`jpa/stats-emails`,A=`Latest emails sent`,j=`Open and click rates for your latest emails.`,M={content:`Your most recently sent emails, including their open and click rates.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I(e){return(0,L.jsx)(T,{attributes:{max:e,metric:`opens`}})}function xe(e){return(0,L.jsx)(pe,{...e,widgetType:fe(F,O),renderModule:R,renderComponent:T,attributes:{max:6,metric:`opens`}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),m(),l(),ue(),de(),ce(),me(),ve(),ye(),be(),L=r(),te(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Emails\" widget. Lists the most recently sent emails with their open or click rate, rendered as a leaderboard. The displayed rate is the `metric` attribute (`relevance: 'high'`), exposed as a control by the widget host. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response)."}}}},B=[{id:1,postId:1,link:`https://example.com/stand-out/`,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,postId:2,link:`https://example.com/develop-locally/`,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,postId:3,link:`https://example.com/new-themes/`,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,postId:4,link:`https://example.com/languages/`,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,postId:5,link:`https://example.com/wordcamp-europe/`,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,postId:6,link:`https://example.com/collaborate/`,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,postId:1,link:`https://example.com/long-subject/`,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,postId:2,link:`https://example.com/monthly-digest/`,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(c,{attributes:{reportParams:ae()},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[g,H,p]},W={args:{rows:B,metric:`clicks`},decorators:[g,H,p]},G={render:()=>I(7),tags:[`!autodocs`],decorators:[g,p],beforeEach:()=>(d(`stats/emails/summary`,`loading`),()=>d(`stats/emails/summary`,null))},K={render:()=>I(8),tags:[`!autodocs`],decorators:[g,p],beforeEach:()=>(d(`stats/emails/summary`,`error`),()=>d(`stats/emails/summary`,null))},q={render:()=>I(9),tags:[`!autodocs`],decorators:[g,p],beforeEach:()=>(d(`stats/emails/summary`,`empty`),()=>d(`stats/emails/summary`,null))},J={args:{rows:V},decorators:[g,H,p]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`),H,p]},Z={args:{rows:B},decorators:[Y(`576px`),H,p]},Q={render:e=>(0,L.jsx)(xe,{...e}),args:{...h},argTypes:{...le}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [withWidgetCanvas, withEmailsWidgetRoot, withStoryRouter]
}`,...U.parameters?.docs?.source},description:{story:`Default populated state — latest emails (newest first) with their open rate.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    metric: 'clicks'
  },
  decorators: [withWidgetCanvas, withEmailsWidgetRoot, withStoryRouter]
}`,...W.parameters?.docs?.source},description:{story:"Click-rate view — the `metric` attribute set to click rate instead of open rate.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailsWithMax(7),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'loading');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...G.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailsWithMax(8),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'error');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailsWithMax(9),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'empty');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("Your latest emails
will appear here once you send a newsletter.").`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockLongLabelRows
  },
  decorators: [withWidgetCanvas, withEmailsWidgetRoot, withStoryRouter]
}`,...J.parameters?.docs?.source},description:{story:`Long subject lines are truncated with an ellipsis so rows stay single-line.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('448px'), withEmailsWidgetRoot, withStoryRouter]
}`,...X.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('576px'), withEmailsWidgetRoot, withStoryRouter]
}`,...Z.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <EmailsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ByClickRate`,`Loading`,`Error`,`Empty`,`LongLabels`,`SizeMedium`,`SizeLarge`,`WidgetDashboardWithWidget`]}))();export{W as ByClickRate,U as Default,q as Empty,K as Error,G as Loading,J as LongLabels,Z as SizeLarge,X as SizeMedium,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,z as default};