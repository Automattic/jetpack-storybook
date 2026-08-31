import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as ee,t as i}from"./build-module-DuNGIx6S.js";import{As as a,t as o}from"./build-module-CR6EsQjA.js";import{g as s,m as c}from"./hooks-BGIXIQfF.js";import{Zt as l,h as te,t as u}from"./src-CIvzYRO3.js";import{n as ne,t as re}from"./src-CA9PQN4z.js";import"./constants-B1kGztHF.js";import{f as d,p as ie}from"./chart-tooltip-CTHKN2KK.js";import{t as ae}from"./leaderboard-skeleton-BxnVJPvD.js";import{t as oe}from"./metric-list-BfeG_WeZ.js";import{G as se,I as ce,K as le,S as f,Y as p,b as ue}from"./report-metric-Y-c2yHc9.js";import{t as m}from"./widget-state-DuSTjAxR.js";import{C as h,D as de,E as fe,O as pe,S as me,T as he,b as ge,k as g,t as _,w as v,x as y}from"./src-1LVpgw3R.js";var b,x,S,C,_e=e((()=>{b=`_widget_1veb5_3`,x=`_body_1veb5_11`,S=`_list_1veb5_18`,C={widget:b,body:x,list:S}}));function ve(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,postId:e.id,link:typeof e.link==`string`?e.link:null,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function ye({attributes:e}){let n=e?.metric??`opens`,{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=te({quantity:10}),l=(0,ee.useMemo)(()=>ve(r,10),[r]);return(0,T.jsxs)(`div`,{className:C.widget,children:[(0,T.jsx)(`div`,{className:C.body,children:(0,T.jsx)(m,{isLoading:i,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:t(`We couldn't load email stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:a,description:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(ae,{rows:10}),children:(0,T.jsx)(D,{rows:l,metric:n})})}),(0,T.jsx)(f,{children:(0,T.jsx)(ue,{report:`emails`})})]})}function w({attributes:e={}}){return(0,T.jsx)(s,{attributes:e,children:(0,T.jsx)(ye,{attributes:e})})}var T,E,D,be=e((()=>{u(),re(),_(),i(),n(),o(),_e(),T=r(),E={opens:`email-opens`,clicks:`email-clicks`},D=({rows:e=[],metric:t=`opens`})=>{let n=c(E[t]),r=e.map(e=>{let r=t===`clicks`?e.clicksRate:e.opensRate;return{id:e.id,label:(0,T.jsx)(ce,{id:e.postId,label:e.label,link:e.link,search:n,title:e.label}),value:ne(r/100,`percentage`,{decimals:2,signDisplay:`never`})}});return(0,T.jsx)(oe,{className:C.list,items:r})}})),O,xe=e((()=>{n(),o(),d(),O={icon:a,attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ie,elements:[{label:t(`By open rate`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`By click rate`,`jetpack-premium-analytics-pkg`),value:`clicks`}],relevance:`high`}],example:{attributes:{metric:`opens`}}}})),k,A,j,M,N,P,F,Se=e((()=>{k=`jpa/stats-emails`,A=`Latest emails sent`,j=`Open and click rates for your latest emails.`,M={content:`Your most recently sent emails, including their open and click rates.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I(){return(0,L.jsx)(w,{attributes:{metric:`opens`}})}function Ce(e){return(0,L.jsx)(he,{...e,widgetType:me(F,O),renderModule:R,renderComponent:w,attributes:{metric:`opens`}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),_(),se(),fe(),pe(),h(),ge(),be(),xe(),Se(),L=r(),le(),R=`storybook/emails`,z={title:`Packages/Premium Analytics/Widgets/Emails`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`Lists the latest emails with their open or click rate. Close-up stories use fixtures; the dashboard story uses a mocked report.`}}}},B=[{id:1,postId:1,link:`https://example.com/stand-out/`,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,postId:2,link:`https://example.com/develop-locally/`,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,postId:3,link:`https://example.com/new-themes/`,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,postId:4,link:`https://example.com/languages/`,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,postId:5,link:`https://example.com/wordcamp-europe/`,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,postId:6,link:`https://example.com/collaborate/`,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],V=[{id:1,postId:1,link:`https://example.com/long-subject/`,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,postId:2,link:`https://example.com/monthly-digest/`,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],H=e=>(0,L.jsx)(s,{attributes:{reportParams:l()},children:(0,L.jsx)(e,{})}),U={args:{rows:B},decorators:[y,H,g]},W={args:{rows:B,metric:`clicks`},decorators:[y,H,g]},G={render:I,tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(p(`stats/emails/summary`,`loading`),()=>p(`stats/emails/summary`,null))},K={render:I,tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(p(`stats/emails/summary`,`error`),()=>p(`stats/emails/summary`,null))},q={render:I,tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(p(`stats/emails/summary`,`empty`),()=>p(`stats/emails/summary`,null))},J={args:{rows:V},decorators:[y,H,g]},Y=(e,t=`auto`)=>n=>(0,L.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,L.jsx)(n,{})}),X={args:{rows:B},decorators:[Y(`448px`),H,g]},Z={args:{rows:B},decorators:[Y(`576px`),H,g]},Q={render:e=>(0,L.jsx)(Ce,{...e}),args:{...v},argTypes:{...de}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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