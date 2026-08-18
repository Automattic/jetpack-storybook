import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{E as ee,J as c,S as l,Z as u,q as d,tt as f,w as te}from"./report-metric-TMKCu6gf.js";import{Bt as ne,Cr as re,Nt as p,at as ie,c as ae,l as oe}from"./chart-tooltip-Be73Yb4J.js";import{t as se}from"./leaderboard-chart-CdU9ecbf.js";import{t as ce}from"./widget-state-C-TJKMCy.js";import{C as m,D as le,E as ue,O as de,S as h,T as fe,b as pe,k as g,t as _,w as v,x as y}from"./src-C9u1tQDw.js";var b,x,S,C,w,me=e((()=>{b=`_root_17y45_1`,x=`_widget_17y45_12`,S=`_body_17y45_22`,C=`_leaderboard_17y45_30`,w={root:b,widget:x,body:S,leaderboard:C}}));function he(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let i=n(e);return{id:String(e.id),label:(0,E.jsx)(l,{id:e.postId,label:e.label,link:e.link,section:t===`clicks`?`email-clicks`:`email-opens`,variant:`overlay`}),currentValue:i/100,currentShare:ie(i,r),previousValue:0,previousShare:0,delta:0}})}function ge(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,postId:e.id,link:typeof e.link==`string`?e.link:null,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function _e({attributes:e}){let n=e?.max??10,r=e?.metric??`opens`,{data:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ne({quantity:n>0?Math.min(n,30):30}),d=(0,i.useMemo)(()=>ge(a,n),[a,n]);return(0,E.jsxs)(`div`,{className:w.widget,children:[(0,E.jsx)(`div`,{className:w.body,children:(0,E.jsx)(ce,{isLoading:s,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load email stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(D,{rows:d,metric:r})})}),(0,E.jsx)(ee,{children:(0,E.jsx)(te,{report:`emails`})})]})}function T({attributes:e={}}){return(0,E.jsx)(f,{attributes:e,children:(0,E.jsx)(_e,{attributes:e})})}var E,D,ve=e((()=>{p(),_(),a(),n(),s(),me(),E=r(),D=({rows:e=[],metric:t=`opens`})=>{let n=(0,i.useMemo)(()=>he(e,t),[e,t]);return(0,E.jsx)(`div`,{className:w.root,children:(0,E.jsx)(se,{className:w.leaderboard,data:n,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}})})}})),O,ye=e((()=>{n(),s(),ae(),O={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:oe,elements:[{label:t(`By open rate`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`By click rate`,`jetpack-premium-analytics-pkg`),value:`clicks`}],relevance:`high`}],example:{attributes:{max:10,metric:`opens`}}}})),k,A,j,M,N,P,F,be=e((()=>{k=`jpa/stats-emails`,A=`Latest emails sent`,j=`Open and click rates for your latest emails.`,M={content:`Your most recently sent emails, including their open and click rates.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I(e){return(0,L.jsx)(T,{attributes:{max:e,metric:`opens`}})}function xe(e){return(0,L.jsx)(fe,{...e,widgetType:h(F,O),renderModule:R,renderComponent:T,attributes:{max:6,metric:`opens`}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),_(),d(),ue(),de(),m(),pe(),ve(),ye(),be(),L=r(),c(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Emails\" widget. Lists the most recently sent emails with their open or click rate, rendered as a leaderboard. The displayed rate is the `metric` attribute (`relevance: 'high'`), exposed as a control by the widget host. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response)."}}}},B=[{id:1,postId:1,link:`https://example.com/stand-out/`,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,postId:2,link:`https://example.com/develop-locally/`,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,postId:3,link:`https://example.com/new-themes/`,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,postId:4,link:`https://example.com/languages/`,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,postId:5,link:`https://example.com/wordcamp-europe/`,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,postId:6,link:`https://example.com/collaborate/`,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,postId:1,link:`https://example.com/long-subject/`,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,postId:2,link:`https://example.com/monthly-digest/`,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(f,{attributes:{reportParams:re()},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[y,H,g]},W={args:{rows:B,metric:`clicks`},decorators:[y,H,g]},G={render:()=>I(7),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(u(`stats/emails/summary`,`loading`),()=>u(`stats/emails/summary`,null))},K={render:()=>I(8),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(u(`stats/emails/summary`,`error`),()=>u(`stats/emails/summary`,null))},q={render:()=>I(9),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(u(`stats/emails/summary`,`empty`),()=>u(`stats/emails/summary`,null))},J={args:{rows:V},decorators:[y,H,g]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`),H,g]},Z={args:{rows:B},decorators:[Y(`576px`),H,g]},Q={render:e=>(0,L.jsx)(xe,{...e}),args:{...v},argTypes:{...le}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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