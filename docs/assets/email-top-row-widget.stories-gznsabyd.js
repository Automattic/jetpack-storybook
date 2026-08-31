import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{As as o,Dn as s,Tn as c,ha as l,li as u,si as d,t as f}from"./build-module-CR6EsQjA.js";import{pn as ee,t as te}from"./src-D6PMt8tR.js";import{b as ne,g as p}from"./hooks-CUSknawF.js";import{Zt as m,_ as re,t as h,v as ie,wn as ae}from"./src-C2AQjIRh.js";import{r as g,t as oe}from"./metric-tile-grid-skeleton-Y8109Bm4.js";import{G as se,K as ce,Y as _}from"./report-metric-BSl0-YQU.js";import{t as le}from"./widget-state-B-jzCnOt.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as v,t as y,w as b,x}from"./src-ChEoqzrF.js";var S,C,w,he=e((()=>{S=`_root_cqnu4_2`,C=`_content_cqnu4_14`,w={root:S,content:C}}));function ge(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function _e(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n:null}function ve(e){return!!e&&k.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function ye(e,t){let n=[];for(let r of k){if(!r.views.includes(t))continue;let i=r.kind===`rate`?_e(e,r.key):ge(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?O:D})}return n}function be(e){return k.filter(t=>t.views.includes(e)).length}function xe({metric:e}){let{reportParams:t}=ne(),n=ae(t.post_id),r=n>0,a=ie(n,`rate`,{enabled:r}),o=re(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?[a,o]:[a],c=a.data?.summary,l=o.data?.summary,u=s.every(e=>e.data!==void 0),d=(0,i.useMemo)(()=>{if(!u)return;let t=e===`clicks`&&c&&l?{...c,...l}:c;return ve(t)?ye(t,e):void 0},[u,c,l,e]),f=(0,i.useCallback)(()=>{a.refetch(),e===`clicks`&&o.refetch()},[o,e,a]);return(0,E.jsx)(A,{metrics:d,tileCount:be(e),hasSelection:r,isLoading:s.some(e=>e.isLoading),isFetching:s.some(e=>e.isFetching),isError:s.some(e=>e.isError&&e.data===void 0),onRetry:f})}function T({attributes:e={}}){return(0,E.jsx)(p,{attributes:e,children:(0,E.jsx)(xe,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var E,D,O,k,A,j=e((()=>{h(),y(),a(),n(),f(),te(),he(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O={type:`percentage`,options:{decimals:1,signDisplay:`never`}},k=[{key:`total_sends`,icon:c,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:u,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:s,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:d,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:l,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:d,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`]}],A=({metrics:e,tileCount:n,hasSelection:r=!1,isLoading:i=!1,isFetching:a=!1,isError:s=!1,onRetry:c})=>(0,E.jsx)(ee,{className:w.root,children:(0,E.jsx)(`div`,{className:w.content,children:(0,E.jsx)(le,{isLoading:i,isFetching:a,isError:s,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:c?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]:void 0},empty:{icon:o,description:t(r?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(oe,{tiles:n}),children:(0,E.jsx)(g,{tiles:e??[]})})})})})),M,Se=e((()=>{f(),M={icon:o,attributes:[],example:{attributes:{metric:`opens`}}}})),N,P,F,I,L,R,z,Ce=e((()=>{N=`jpa/email-top-row`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total sends, unique opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(T,{attributes:{metric:e,reportParams:{...m(),post_id:t}}})}function we({metric:e,...t}){return(0,V.jsx)(me,{...t,widgetType:pe(z,M),renderModule:H,renderComponent:T,attributes:{metric:e,reportParams:{...m(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),fe(),se(),ue(),v(),j(),Se(),Ce(),V=r(),ce(),H=`storybook/email-top-row`,U=2e3,W=`stats/opens/emails`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:T,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total sends, unique opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Clicks combines the per-post opens and clicks rate summaries; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[x]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[x]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[x],beforeEach:()=>(_(W,`loading`),()=>_(W,null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[x],beforeEach:()=>(_(W,`error`),()=>_(W,null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[x],beforeEach:()=>(_(W,`empty`),()=>_(W,null))},Z={render:({metric:e})=>(0,V.jsx)(T,{attributes:{metric:e,reportParams:m()}}),args:{metric:`opens`},decorators:[x]},Q={render:e=>(0,V.jsx)(we,{...e}),args:{...b,metric:`opens`},argTypes:{...de,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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