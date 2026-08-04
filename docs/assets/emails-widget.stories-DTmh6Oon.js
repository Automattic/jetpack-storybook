import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DoJYX5DX.js";import{D as ee,G as c,S as te,W as l,Z as u,b as d,q as f}from"./report-metric-D7ckCXfW.js";import{Ot as ne,q as re,ur as ie,xt as p}from"./chart-tooltip-DU2Kl93e.js";import{t as ae}from"./leaderboard-chart-DnRhrfgV.js";import{t as oe}from"./widget-state-DbOGFekp.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as m,k as h,t as g,w as pe,x as _}from"./src-Cj1qWGZF.js";import{n as me,t as he}from"./src-BO3AIrGa.js";var v,y,b,x,S,ge=e((()=>{v=`_root_17y45_1`,y=`_widget_17y45_12`,b=`_body_17y45_22`,x=`_leaderboard_17y45_30`,S={root:v,widget:y,body:b,leaderboard:x}}));function _e(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let i=n(e);return{id:String(e.id),label:(0,E.jsx)(d,{id:e.postId,label:e.label,link:e.link,section:t===`clicks`?`email-clicks`:`email-opens`,variant:`overlay`}),currentValue:i/100,currentShare:re(i,r),previousValue:0,previousShare:0,delta:0}})}function C(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,postId:e.id,link:typeof e.link==`string`?e.link:null,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function w({attributes:e}){let n=e?.max??10,r=e?.metric??`opens`,{data:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ne({quantity:n>0?Math.min(n,30):30}),d=(0,i.useMemo)(()=>C(a,n),[a,n]);return(0,E.jsxs)(`div`,{className:S.widget,children:[(0,E.jsx)(`div`,{className:S.body,children:(0,E.jsx)(oe,{isLoading:s,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load email stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(D,{rows:d,metric:r})})}),(0,E.jsx)(ee,{children:(0,E.jsx)(te,{report:`emails`})})]})}function T({attributes:e={}}){return(0,E.jsx)(u,{attributes:e,children:(0,E.jsx)(w,{attributes:e})})}var E,D,ve=e((()=>{p(),g(),a(),n(),s(),ge(),E=r(),D=({rows:e=[],metric:t=`opens`})=>{let n=(0,i.useMemo)(()=>_e(e,t),[e,t]);return(0,E.jsx)(`div`,{className:S.root,children:(0,E.jsx)(ae,{className:S.leaderboard,data:n,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}})})}})),O,ye=e((()=>{n(),s(),he(),O={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:me,elements:[{label:t(`Open rate`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Click rate`,`jetpack-premium-analytics-pkg`),value:`clicks`}],relevance:`high`}],example:{attributes:{max:10,metric:`opens`}}}})),k,A,j,M,N,P,F,be=e((()=>{k=`jpa/stats-emails`,A=`Latest emails sent`,j=`Open and click rates for your latest emails.`,M={content:`Your most recently sent emails, including their open and click rates.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I(e){return(0,L.jsx)(T,{attributes:{max:e,metric:`opens`}})}function xe(e){return(0,L.jsx)(fe,{...e,widgetType:de(F,O),renderModule:R,renderComponent:T,attributes:{max:6,metric:`opens`}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),g(),l(),le(),ue(),se(),m(),ve(),ye(),be(),L=r(),c(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Emails\" widget. Lists the most recently sent emails with their open or click rate, rendered as a leaderboard. The displayed rate is the `metric` attribute (`relevance: 'high'`), exposed as a control by the widget host. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response)."}}}},B=[{id:1,postId:1,link:`https://example.com/stand-out/`,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,postId:2,link:`https://example.com/develop-locally/`,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,postId:3,link:`https://example.com/new-themes/`,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,postId:4,link:`https://example.com/languages/`,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,postId:5,link:`https://example.com/wordcamp-europe/`,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,postId:6,link:`https://example.com/collaborate/`,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,postId:1,link:`https://example.com/long-subject/`,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,postId:2,link:`https://example.com/monthly-digest/`,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(u,{attributes:{reportParams:ie()},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[_,H,h]},W={args:{rows:B,metric:`clicks`},decorators:[_,H,h]},G={render:()=>I(7),tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(f(`stats/emails/summary`,`loading`),()=>f(`stats/emails/summary`,null))},K={render:()=>I(8),tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(f(`stats/emails/summary`,`error`),()=>f(`stats/emails/summary`,null))},q={render:()=>I(9),tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(f(`stats/emails/summary`,`empty`),()=>f(`stats/emails/summary`,null))},J={args:{rows:V},decorators:[_,H,h]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`),H,h]},Z={args:{rows:B},decorators:[Y(`576px`),H,h]},Q={render:e=>(0,L.jsx)(xe,{...e}),args:{...pe},argTypes:{...ce}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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