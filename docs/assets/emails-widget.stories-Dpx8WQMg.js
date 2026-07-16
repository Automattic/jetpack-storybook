import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Ds as o,n as s}from"./build-module-C6Ow06jV.js";import{mt as c,ut as l}from"./chart-tooltip-DjozNI1k.js";import{n as u,t as d}from"./with-chart-theme-D6OMviAJ.js";import{t as f}from"./leaderboard-chart-Cl5ZDKsB.js";import{C as p,S as m,T as h,k as g}from"./report-metric-BDvGeXwR.js";import{t as _}from"./widget-state-CNNOqMwB.js";import{S as v,b as y,t as b,x as ee,y as te}from"./src-Dl15LA5n.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";var C,w,T,E,D=e((()=>{C=`_root_1gpaa_1`,w=`_leaderboard_1gpaa_10`,T=`_label_1gpaa_20`,E={root:C,leaderboard:w,label:T}}));function O(e,t){let n=e=>t===`opens`?e.opensRate:e.clicksRate,r=Math.max(...e.map(n),0);return e.map(e=>{let t=n(e);return{id:String(e.id),label:(0,M.jsx)(`span`,{className:E.label,title:e.label,children:e.label}),currentValue:t/100,currentShare:r>0?t/r*100:0,previousValue:0,previousShare:0,delta:0}})}function k(e,t){return(e?.data?.[0]?.items??[]).slice(0,t>0?t:void 0).map((e,t)=>({id:e.id??t,label:String(e.label??``),opensRate:e.opens_rate,clicksRate:e.clicks_rate}))}function A({attributes:e}){let n=e?.max??10,r=e?.metric??`opens`,{data:a,isLoading:s,isFetching:l,isError:u,refetch:d}=c({quantity:n>0?Math.min(n,30):30}),f=(0,i.useMemo)(()=>k(a,n),[a,n]);return(0,M.jsx)(_,{isLoading:s,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:t(`We couldn't load email stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:o,description:t(`Your latest emails will appear here once you send a newsletter.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(N,{rows:f,metric:r})})}function j({attributes:e={}}){return(0,M.jsx)(g,{attributes:e,children:(0,M.jsx)(A,{attributes:e})})}var M,N,P=e((()=>{l(),b(),a(),n(),s(),D(),M=r(),N=({rows:e=[],metric:t=`opens`})=>{let n=(0,i.useMemo)(()=>O(e,t),[e,t]);return(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(f,{className:E.leaderboard,data:n,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`percentage`,options:{decimals:2,signDisplay:`never`}}})})}})),F,I=e((()=>{n(),s(),F={name:`jpa/stats-emails`,title:t(`Emails`,`jetpack-premium-analytics`),help:{content:t(`Latest emails sent and their performance.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`metric`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Open rate`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Click rate`,`jetpack-premium-analytics`),value:`clicks`}],relevance:`high`}],example:{attributes:{max:10,metric:`opens`}}}}));function L(e){return(0,R.jsx)(j,{attributes:{max:e,metric:`opens`}})}function ne(e){return(0,R.jsx)(y,{...e,widgetType:{name:F.name,title:F.title,icon:F.icon,presentation:`framed`},renderModule:z,renderComponent:j,attributes:{max:6,metric:`opens`}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),d(),ee(),x(),P(),I(),R=r(),p(),z=`storybook/emails`,B={title:`Packages/Premium Analytics/Widgets/Emails`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Emails\" widget. Lists the most recently sent emails with their open or click rate, rendered as a leaderboard. The displayed rate is the `metric` attribute (`relevance: 'high'`), exposed as a control by the widget host. The close-up stories drive the presentational `EmailsLeaderboard` with fixtures; `WidgetDashboardWithWidget` mounts the real dashboard with the data-connected widget (fed by a mocked `stats/emails/summary` response)."}}},decorators:[u]},V=[{id:1,label:`4 Ways to Make Your Website Stand Out`,opensRate:38.1,clicksRate:3.81},{id:2,label:`Develop Locally on Linux with WordPress.com`,opensRate:41.2,clicksRate:5.98},{id:3,label:`10 Brand-New WordPress.com Themes for 2026`,opensRate:35.7,clicksRate:7.12},{id:4,label:`WordPress.com Is Now Available in More Languages`,opensRate:52.4,clicksRate:8.93},{id:5,label:`WordCamp Europe 2026: What to Expect`,opensRate:47.9,clicksRate:10.25},{id:6,label:`Click, Comment, Done: A Better Way to Collaborate`,opensRate:44.3,clicksRate:10.38}],H=[{id:1,label:`An exhaustively long, keyword-stuffed subject line that almost certainly needs to be truncated before it overflows the row`,opensRate:22.5,clicksRate:4.1},{id:2,label:`Your monthly digest: billing, new features, and what is coming next`,opensRate:33.8,clicksRate:6.7}],U={args:{rows:V},decorators:[S]},W={args:{rows:V,metric:`clicks`},decorators:[S]},G={render:()=>L(7),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(h(`stats/emails/summary`,`loading`),()=>h(`stats/emails/summary`,null))},K={render:()=>L(8),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(h(`stats/emails/summary`,`error`),()=>h(`stats/emails/summary`,null))},q={render:()=>L(9),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(h(`stats/emails/summary`,`empty`),()=>h(`stats/emails/summary`,null))},J={args:{rows:H},decorators:[S]},Y=(e,t=`auto`)=>n=>(0,R.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,containerType:`inline-size`,containerName:`widget`},children:(0,R.jsx)(n,{})}),X={args:{rows:V},decorators:[Y(`448px`)]},Z={args:{rows:V},decorators:[Y(`576px`)]},Q={render:e=>(0,R.jsx)(ne,{...e}),args:{...te},argTypes:{...v}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
  render: () => renderEmailsWithMax(7),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'loading');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...G.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailsWithMax(8),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'error');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailsWithMax(9),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/emails/summary', 'empty');
    return () => setReportMockState('stats/emails/summary', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("Your latest emails
will appear here once you send a newsletter.").`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ByClickRate`,`Loading`,`Error`,`Empty`,`LongLabels`,`SizeMedium`,`SizeLarge`,`WidgetDashboardWithWidget`]}))();export{W as ByClickRate,U as Default,q as Empty,K as Error,G as Loading,J as LongLabels,Z as SizeLarge,X as SizeMedium,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,B as default};