import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{I as o,Mt as s,Nn as c,P as l,Zt as u,ct as d,n as f,ut as ee}from"./build-module-DmVuor49.js";import{W as te,t as ne}from"./build-module-Di51vuKx.js";import{$n as p,bt as re,ut as m,yt as h}from"./chart-tooltip-Dlx-EoLb.js";import{t as g}from"./metric-tile-grid-Ds6tJbNl.js";import{C as _,N as v,S as y,T as b,k as x}from"./report-metric-Bh4yj25D.js";import{t as ie}from"./widget-state-Dx4QMqsU.js";import{C as ae,S as oe,T as se,b as ce,t as le,w as S,x as C}from"./src-BQdFjPxU.js";import{n as w,t as T}from"./src-B06dgEKz.js";var E,D,O,ue=e((()=>{E=`_root_cqnu4_2`,D=`_content_cqnu4_14`,O={root:E,content:D}}));function de(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function fe(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n:null}function pe(e){return!!e&&I.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function k(e,t){let n=[];for(let r of I){if(!r.views.includes(t))continue;let i=r.kind===`rate`?fe(e,r.key):de(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?F:P})}return n}function A(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function j({metric:e}){let{reportParams:t}=v(),n=A(t.post_id),r=n>0,a=re(n,`rate`,{enabled:r}),o=h(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?[a,o]:[a],c=a.data?.summary,l=o.data?.summary,u=s.every(e=>e.data!==void 0),d=(0,i.useMemo)(()=>{if(!u)return;let t=e===`clicks`&&c&&l?{...c,...l}:c;return pe(t)?k(t,e):void 0},[u,c,l,e]),f=(0,i.useCallback)(()=>{a.refetch(),e===`clicks`&&o.refetch()},[o,e,a]);return(0,N.jsx)(L,{metrics:d,hasSelection:r,isLoading:s.some(e=>e.isLoading),isFetching:s.some(e=>e.isFetching),isError:s.some(e=>e.isError&&e.data===void 0),onRetry:f})}function M({attributes:e={}}){return(0,N.jsx)(x,{attributes:e,children:(0,N.jsx)(j,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var N,P,F,I,L,R=e((()=>{m(),le(),a(),n(),f(),ne(),ue(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F={type:`percentage`,options:{decimals:1,signDisplay:`never`}},I=[{key:`total_sends`,icon:l,label:()=>t(`Emails sent`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:ee,label:()=>t(`Unique opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:o,label:()=>t(`Total opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:d,label:()=>t(`Open rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:s,label:()=>t(`Total clicks`,`jetpack-premium-analytics`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:c,label:()=>t(`Click rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`clicks`]}],L=({metrics:e,hasSelection:n=!1,isLoading:r=!1,isFetching:i=!1,isError:a=!1,onRetry:o})=>(0,N.jsx)(te,{className:O.root,children:(0,N.jsx)(`div`,{className:O.content,children:(0,N.jsx)(ie,{isLoading:r,isFetching:i,isError:a,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:u,description:t(n?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(g,{tiles:e??[]})})})})})),z,me=e((()=>{n(),f(),T(),z={name:`jpa/email-top-row`,title:t(`Email highlights`,`jetpack-premium-analytics`),icon:u,help:{content:t(`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total sends, unique opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`,`jetpack-premium-analytics`)},attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:w,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}]}],example:{attributes:{metric:`opens`}}}}));function B({metric:e},t=U){return(0,V.jsx)(M,{attributes:{metric:e,reportParams:{...p(),post_id:t}}})}function he({metric:e,...t}){return(0,V.jsx)(ae,{...t,widgetType:z,renderModule:H,renderComponent:M,attributes:{metric:e,reportParams:{...p(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),S(),y(),ce(),R(),me(),V=r(),_(),H=`storybook/email-top-row`,U=2e3,W=`stats/opens/emails`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:M,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total sends, unique opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Clicks combines the per-post opens and clicks rate summaries; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[C]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[C]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[C],beforeEach:()=>(b(W,`loading`),()=>b(W,null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[C],beforeEach:()=>(b(W,`error`),()=>b(W,null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[C],beforeEach:()=>(b(W,`empty`),()=>b(W,null))},Z={render:({metric:e})=>(0,V.jsx)(M,{attributes:{metric:e,reportParams:p()}}),args:{metric:`opens`},decorators:[C]},Q={render:e=>(0,V.jsx)(he,{...e}),args:{...oe,metric:`opens`},argTypes:{...se,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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