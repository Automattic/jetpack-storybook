import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{J as c,S as ee,Z as l,b as u,q as te,tt as d,w as ne}from"./report-metric-BywRn0bl.js";import{c as re,qt as ie,t as f}from"./src-BqoIAWGs.js";import"./constants-B1kGztHF.js";import{c as ae,l as oe,rt as se}from"./chart-tooltip-CBXJFs6e.js";import{r as ce,t as le}from"./leaderboard-skeleton-ZY6utfuo.js";import{t as p}from"./widget-state-CCVIVgZN.js";import{C as ue,D as de,E as fe,O as pe,S as me,T as m,b as he,k as h,t as g,w as ge,x as _}from"./src-CNbqXo4B.js";var v,y,b,x,S,C=e((()=>{v=`_root_1rd4a_1`,y=`_widget_1rd4a_12`,b=`_body_1rd4a_20`,x=`_leaderboard_1rd4a_28`,S={root:v,widget:y,body:b,leaderboard:x}}));function w(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let i=n(e);return{id:String(e.id),label:(0,E.jsx)(u,{id:e.postId,label:e.label,link:e.link,section:t===`clicks`?`email-clicks`:`email-opens`,variant:`overlay`}),currentValue:i/100,currentShare:se(i,r),previousValue:0,previousShare:0,delta:0}})}function _e(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,postId:e.id,link:typeof e.link==`string`?e.link:null,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function ve({attributes:e}){let n=e?.metric??`opens`,{data:r,isLoading:a,isFetching:s,isError:c,refetch:l}=re({quantity:10}),u=(0,i.useMemo)(()=>_e(r,10),[r]);return(0,E.jsxs)(`div`,{className:S.widget,children:[(0,E.jsx)(`div`,{className:S.body,children:(0,E.jsx)(p,{isLoading:a,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load email stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:o,description:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(le,{rows:10}),children:(0,E.jsx)(D,{rows:u,metric:n})})}),(0,E.jsx)(ne,{children:(0,E.jsx)(ee,{report:`emails`})})]})}function T({attributes:e={}}){return(0,E.jsx)(d,{attributes:e,children:(0,E.jsx)(ve,{attributes:e})})}var E,D,ye=e((()=>{f(),g(),a(),n(),s(),C(),E=r(),D=({rows:e=[],metric:t=`opens`})=>{let n=(0,i.useMemo)(()=>w(e,t),[e,t]);return(0,E.jsx)(`div`,{className:S.root,children:(0,E.jsx)(ce,{className:S.leaderboard,data:n,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}})})}})),O,be=e((()=>{n(),s(),ae(),O={icon:o,attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:oe,elements:[{label:t(`By open rate`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`By click rate`,`jetpack-premium-analytics-pkg`),value:`clicks`}],relevance:`high`}],example:{attributes:{metric:`opens`}}}})),k,A,j,M,N,P,F,xe=e((()=>{k=`jpa/stats-emails`,A=`Latest emails sent`,j=`Open and click rates for your latest emails.`,M={content:`Your most recently sent emails, including their open and click rates.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I(){return(0,L.jsx)(T,{attributes:{metric:`opens`}})}function Se(e){return(0,L.jsx)(m,{...e,widgetType:me(F,O),renderModule:R,renderComponent:T,attributes:{metric:`opens`}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),g(),te(),fe(),pe(),ue(),he(),ye(),be(),xe(),L=r(),c(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Emails\" widget. Lists the most recently sent emails with their open or click rate, rendered as a leaderboard. The displayed rate is the `metric` attribute (`relevance: 'high'`), exposed as a control by the widget host. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response)."}}}},B=[{id:1,postId:1,link:`https://example.com/stand-out/`,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,postId:2,link:`https://example.com/develop-locally/`,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,postId:3,link:`https://example.com/new-themes/`,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,postId:4,link:`https://example.com/languages/`,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,postId:5,link:`https://example.com/wordcamp-europe/`,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,postId:6,link:`https://example.com/collaborate/`,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,postId:1,link:`https://example.com/long-subject/`,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,postId:2,link:`https://example.com/monthly-digest/`,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(d,{attributes:{reportParams:ie()},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[_,H,h]},W={args:{rows:B,metric:`clicks`},decorators:[_,H,h]},G={render:I,tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(l(`stats/emails/summary`,`loading`),()=>l(`stats/emails/summary`,null))},K={render:I,tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(l(`stats/emails/summary`,`error`),()=>l(`stats/emails/summary`,null))},q={render:I,tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(l(`stats/emails/summary`,`empty`),()=>l(`stats/emails/summary`,null))},J={args:{rows:V},decorators:[_,H,h]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`),H,h]},Z={args:{rows:B},decorators:[Y(`576px`),H,h]},Q={render:e=>(0,L.jsx)(Se,{...e}),args:{...ge},argTypes:{...de}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
  render: renderEmails,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'loading');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...G.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmails,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'error');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmails,
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