import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Ds as o,En as s,On as c,al as l,ci as u,fa as ee,n as d,oi as f}from"./build-module-C6Ow06jV.js";import{R as p,t as m}from"./build-module-JNPAD9ni.js";import{Yn as h,_t as g,gt as te,ut as _}from"./chart-tooltip-DBIL072k.js";import{t as ne}from"./metric-tile-grid-vuR1TfjP.js";import{C as v,N as re,S as ie,T as y,k as ae}from"./report-metric-CUr3DTql.js";import{t as oe}from"./widget-state-LIaJ5Lda.js";import{S as se,b as ce,t as le,x as ue,y as b}from"./src-CtnfvB7C.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";var C,w,T,E=e((()=>{C=`_root_1bdlz_2`,w=`_content_1bdlz_14`,T={root:C,content:w}}));function D(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function de(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n/100:null}function fe(e){return!!e&&P.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function pe(e,t){let n=[];for(let r of P){if(!r.views.includes(t))continue;let i=r.kind===`rate`?de(e,r.key):D(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?N:M})}return n}function O(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function k({metric:e}){let{reportParams:t}=re(),n=O(t.post_id),r=n>0,a=g(n,`rate`,{enabled:r&&e===`opens`}),o=te(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?o:a,c=s.data?.summary,l=(0,i.useMemo)(()=>fe(c)?pe(c,e):void 0,[c,e]);return(0,j.jsx)(F,{metrics:l,hasSelection:r,isLoading:s.isLoading,isFetching:s.isFetching,isError:s.isError&&!l,onRetry:s.refetch})}function A({attributes:e={}}){return(0,j.jsx)(ae,{attributes:e,children:(0,j.jsx)(k,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var j,M,N,P,F,I=e((()=>{_(),le(),a(),n(),d(),m(),E(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N={type:`percentage`,options:{decimals:1,signDisplay:`never`}},P=[{key:`total_sends`,icon:s,label:()=>t(`Total emails sent`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:u,label:()=>t(`Unique opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:c,label:()=>t(`Total opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:f,label:()=>t(`Open rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:ee,label:()=>t(`Total clicks`,`jetpack-premium-analytics`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:l,label:()=>t(`Click rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`clicks`]}],F=({metrics:e,hasSelection:n=!1,isLoading:r=!1,isFetching:i=!1,isError:a=!1,onRetry:s})=>(0,j.jsx)(p,{className:T.root,children:(0,j.jsx)(`div`,{className:T.content,children:(0,j.jsx)(oe,{isLoading:r,isFetching:i,isError:a,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:s?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:s}]:void 0},empty:{icon:o,description:t(n?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(ne,{tiles:e??[]})})})})})),L,R=e((()=>{n(),d(),L={name:`jpa/email-top-row`,title:t(`Email top row`,`jetpack-premium-analytics`),icon:o,help:{content:t(`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`,`jetpack-premium-analytics`)},attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],relevance:`high`}],example:{attributes:{metric:`opens`}}}}));function z({metric:e,withComparison:t},n=H){return(0,B.jsx)(A,{attributes:{metric:e,reportParams:{...h(t),post_id:n}}})}function me({metric:e,withComparison:t,...n}){return(0,B.jsx)(ce,{...n,widgetType:L,renderModule:V,renderComponent:A,attributes:{metric:e,reportParams:{...h(t),post_id:H}}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ue(),ie(),x(),I(),R(),B=r(),v(),V=`storybook/email-top-row`,H=2e3,U=`stats/opens/emails`,W={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:A,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]},withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Data comes from the per-post `stats/<opens|clicks>/emails/<postId>/rate` breakdown, which is all-time and returns no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},G={render:e=>z(e),args:{metric:`opens`,withComparison:!1},decorators:[S]},K={render:e=>z(e),args:{metric:`clicks`,withComparison:!1},decorators:[S]},q={render:e=>z(e),args:{metric:`opens`,withComparison:!0},decorators:[S]},J={render:e=>z(e,2001),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[S],beforeEach:()=>(y(U,`loading`),()=>y(U,null))},Y={render:e=>z(e,2002),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[S],beforeEach:()=>(y(U,`error`),()=>y(U,null))},X={render:e=>z(e,2003),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[S],beforeEach:()=>(y(U,`empty`),()=>y(U,null))},Z={render:({metric:e,withComparison:t})=>(0,B.jsx)(A,{attributes:{metric:e,reportParams:h(t)}}),args:{metric:`opens`,withComparison:!1},decorators:[S]},Q={render:e=>(0,B.jsx)(me,{...e}),args:{...b,metric:`opens`,withComparison:!0},argTypes:{...se,metric:{control:`inline-radio`,options:[`opens`,`clicks`]},withComparison:{control:`boolean`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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