import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{En as o,On as s,Ts as c,ii as l,n as u,oi as ee,rl as te,ua as ne}from"./build-module-Bt8gOW8e.js";import{R as re,t as ie}from"./build-module-BAze1CUO.js";import{Kn as d,_t as ae,gt as f,ut as p}from"./chart-tooltip-Cd6R28vB.js";import{t as oe}from"./metric-tile-grid-Cx0v-Z8I.js";import{C as se,N as ce,S as m,T as h,k as g}from"./report-metric-BSkCvVUy.js";import{t as _}from"./widget-state-CqW7LysR.js";import{S as v,b as y,t as b,x,y as le}from"./src-ZlSzubd8.js";import{n as ue,r as S}from"./with-widget-canvas-Dz43KNHY.js";var C,w,T,de=e((()=>{C=`_root_1bdlz_2`,w=`_content_1bdlz_14`,T={root:C,content:w}}));function fe(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function E(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n/100:null}function pe(e){return!!e&&P.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function D(e,t){let n=[];for(let r of P){if(!r.views.includes(t))continue;let i=r.kind===`rate`?E(e,r.key):fe(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?N:M})}return n}function O(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function k({metric:e}){let{reportParams:t}=ce(),n=O(t.post_id),r=n>0,a=ae(n,`rate`,{enabled:r&&e===`opens`}),o=f(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?o:a,c=s.data?.summary,l=(0,i.useMemo)(()=>pe(c)?D(c,e):void 0,[c,e]);return(0,j.jsx)(F,{metrics:l,hasSelection:r,isLoading:s.isLoading,isFetching:s.isFetching,isError:s.isError&&!l,onRetry:s.refetch})}function A({attributes:e={}}){return(0,j.jsx)(g,{attributes:e,children:(0,j.jsx)(k,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var j,M,N,P,F,I=e((()=>{p(),b(),a(),n(),u(),ie(),de(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N={type:`percentage`,options:{decimals:1,signDisplay:`never`}},P=[{key:`total_sends`,icon:o,label:()=>t(`Total emails sent`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:ee,label:()=>t(`Unique opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:s,label:()=>t(`Total opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:l,label:()=>t(`Open rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:ne,label:()=>t(`Total clicks`,`jetpack-premium-analytics`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:te,label:()=>t(`Click rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`clicks`]}],F=({metrics:e,hasSelection:n=!1,isLoading:r=!1,isFetching:i=!1,isError:a=!1,onRetry:o})=>(0,j.jsx)(re,{className:T.root,children:(0,j.jsx)(`div`,{className:T.content,children:(0,j.jsx)(_,{isLoading:r,isFetching:i,isError:a,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:c,description:t(n?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(oe,{tiles:e??[]})})})})})),L,R=e((()=>{n(),u(),L={name:`jpa/email-top-row`,title:t(`Email top row`,`jetpack-premium-analytics`),icon:c,help:{content:t(`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`,`jetpack-premium-analytics`)},attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],relevance:`high`}],example:{attributes:{metric:`opens`}}}}));function z({metric:e,withComparison:t},n=H){return(0,B.jsx)(A,{attributes:{metric:e,reportParams:{...d(t),post_id:n}}})}function me({metric:e,withComparison:t,...n}){return(0,B.jsx)(y,{...n,widgetType:L,renderModule:V,renderComponent:A,attributes:{metric:e,reportParams:{...d(t),post_id:H}}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),x(),m(),ue(),I(),R(),B=r(),se(),V=`storybook/email-top-row`,H=2e3,U=`stats/opens/emails`,W={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:A,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]},withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Data comes from the per-post `stats/<opens|clicks>/emails/<postId>/rate` breakdown, which is all-time and returns no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},G={render:e=>z(e),args:{metric:`opens`,withComparison:!1},decorators:[S]},K={render:e=>z(e),args:{metric:`clicks`,withComparison:!1},decorators:[S]},q={render:e=>z(e),args:{metric:`opens`,withComparison:!0},decorators:[S]},J={render:e=>z(e,2001),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[S],beforeEach:()=>(h(U,`loading`),()=>h(U,null))},Y={render:e=>z(e,2002),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[S],beforeEach:()=>(h(U,`error`),()=>h(U,null))},X={render:e=>z(e,2003),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[S],beforeEach:()=>(h(U,`empty`),()=>h(U,null))},Z={render:({metric:e,withComparison:t})=>(0,B.jsx)(A,{attributes:{metric:e,reportParams:d(t)}}),args:{metric:`opens`,withComparison:!1},decorators:[S]},Q={render:e=>(0,B.jsx)(me,{...e}),args:{...le,metric:`opens`,withComparison:!0},argTypes:{...v,metric:{control:`inline-radio`,options:[`opens`,`clicks`]},withComparison:{control:`boolean`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args),
  args: {
    metric: 'opens',
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default populated state — the selected email's Opens totals.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args),
  args: {
    metric: 'clicks',
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The Clicks view — total opens, total clicks, and click rate for the same email.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args),
  args: {
    metric: 'opens',
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`With comparison \`reportParams\` from the date range picker. The rate breakdown
has no comparison data, so the widget renders the same tiles with no deltas
rather than inventing period-over-period values.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args, 2001),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  args: {
    metric: 'opens',
    withComparison: false
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
    metric: 'opens',
    withComparison: false
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
    metric: 'opens',
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(OPENS_MOCK_FRAGMENT, 'empty');
    return () => setReportMockState(OPENS_MOCK_FRAGMENT, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no stats for the email: the widget shows its empty state (the
envelope glyph and "No stats are available for this email yet.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    metric,
    withComparison
  }: EmailTopRowStoryControls) => <EmailTopRowRender attributes={{
    metric,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    metric: 'opens',
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:"No email selected (no `post_id`): the widget prompts to pick an email instead of\nfetching. This is how the widget renders on a report page before a row is chosen.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <EmailTopRowDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    metric: 'opens',
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: {
      control: 'inline-radio',
      options: ['opens', 'clicks']
    },
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ClicksView`,`WithComparison`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as ClicksView,G as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,W as default};