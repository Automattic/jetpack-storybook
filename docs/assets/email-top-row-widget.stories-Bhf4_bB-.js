import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{En as o,On as s,ci as c,ga as l,js as u,n as d,ui as f}from"./build-module-CDRs4YxF.js";import{lr as ee,t as te}from"./src-Cj2yZD02.js";import{$ as ne,K as re,Y as p,q as m,rt as ie}from"./report-metric-DtkHkW5i.js";import{Ct as h,Mr as ae,Mt as oe,Nt as se,pr as g}from"./chart-tooltip-DRpnI8PA.js";import{t as ce}from"./metric-tile-grid-De4ZRTkf.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as me,t as _,w as v,x as y}from"./src-CUWChwKq.js";import{t as he}from"./widget-state-C2ZQVK4C.js";import{n as ge,t as b}from"./src-Cj4i2bvN.js";var x,S,C,_e=e((()=>{x=`_root_cqnu4_2`,S=`_content_cqnu4_14`,C={root:x,content:S}}));function ve(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function ye(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n:null}function be(e){return!!e&&O.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function xe(e,t){let n=[];for(let r of O){if(!r.views.includes(t))continue;let i=r.kind===`rate`?ye(e,r.key):ve(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?D:E})}return n}function Se({metric:e}){let{reportParams:t}=ie(),n=ae(t.post_id),r=n>0,a=se(n,`rate`,{enabled:r}),o=oe(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?[a,o]:[a],c=a.data?.summary,l=o.data?.summary,u=s.every(e=>e.data!==void 0),d=(0,i.useMemo)(()=>{if(!u)return;let t=e===`clicks`&&c&&l?{...c,...l}:c;return be(t)?xe(t,e):void 0},[u,c,l,e]),f=(0,i.useCallback)(()=>{a.refetch(),e===`clicks`&&o.refetch()},[o,e,a]);return(0,T.jsx)(k,{metrics:d,hasSelection:r,isLoading:s.some(e=>e.isLoading),isFetching:s.some(e=>e.isFetching),isError:s.some(e=>e.isError&&e.data===void 0),onRetry:f})}function w({attributes:e={}}){return(0,T.jsx)(ne,{attributes:e,children:(0,T.jsx)(Se,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var T,E,D,O,k,A=e((()=>{h(),_(),a(),n(),d(),te(),_e(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D={type:`percentage`,options:{decimals:1,signDisplay:`never`}},O=[{key:`total_sends`,icon:o,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:f,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:s,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:c,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:l,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:c,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`]}],k=({metrics:e,hasSelection:n=!1,isLoading:r=!1,isFetching:i=!1,isError:a=!1,onRetry:o})=>(0,T.jsx)(ee,{className:C.root,children:(0,T.jsx)(`div`,{className:C.content,children:(0,T.jsx)(he,{isLoading:r,isFetching:i,isError:a,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:o?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]:void 0},empty:{icon:u,description:t(n?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},children:(0,T.jsx)(ce,{tiles:e??[]})})})})})),j,M=e((()=>{n(),d(),b(),j={icon:u,attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ge,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]}],example:{attributes:{metric:`opens`}}}})),N,P,F,I,L,R,z,Ce=e((()=>{N=`jpa/email-top-row`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total sends, unique opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(w,{attributes:{metric:e,reportParams:{...g(),post_id:t}}})}function we({metric:e,...t}){return(0,V.jsx)(pe,{...t,widgetType:fe(z,j),renderModule:H,renderComponent:w,attributes:{metric:e,reportParams:{...g(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),de(),re(),le(),me(),A(),M(),Ce(),V=r(),m(),H=`storybook/email-top-row`,U=2e3,W=`stats/opens/emails`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:w,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total sends, unique opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Clicks combines the per-post opens and clicks rate summaries; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[y]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[y]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(p(W,`loading`),()=>p(W,null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(p(W,`error`),()=>p(W,null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(p(W,`empty`),()=>p(W,null))},Z={render:({metric:e})=>(0,V.jsx)(w,{attributes:{metric:e,reportParams:g()}}),args:{metric:`opens`},decorators:[y]},Q={render:e=>(0,V.jsx)(we,{...e}),args:{...v,metric:`opens`},argTypes:{...ue,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args),
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default populated state — the selected email's Opens totals.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args),
  args: {
    metric: 'clicks'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The Clicks view — total sends, unique opens, total clicks, and click rate for
the same email.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args, 2001),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(OPENS_MOCK_FRAGMENT, 'loading');
    return () => setReportMockState(OPENS_MOCK_FRAGMENT, null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load with no data yet: the widget shows its loading overlay.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args, 2002),
  tags: ['!autodocs'],
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(OPENS_MOCK_FRAGMENT, 'error');
    return () => setReportMockState(OPENS_MOCK_FRAGMENT, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args, 2003),
  tags: ['!autodocs'],
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(OPENS_MOCK_FRAGMENT, 'empty');
    return () => setReportMockState(OPENS_MOCK_FRAGMENT, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no stats for the email: the widget shows its empty state (the
envelope glyph and "No stats are available for this email yet.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    metric
  }: EmailTopRowStoryControls) => <EmailTopRowRender attributes={{
    metric,
    reportParams: getDefaultQueryParams()
  }} />,
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:"No email selected (no `post_id`): the widget prompts to pick an email instead of\nfetching. This is how the widget renders on a report page before a row is chosen.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <EmailTopRowDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    metric: 'opens'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: {
      control: 'inline-radio',
      options: ['opens', 'clicks']
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ClicksView`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as ClicksView,K as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};