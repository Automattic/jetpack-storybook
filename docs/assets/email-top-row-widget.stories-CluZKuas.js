import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{En as o,On as s,Ts as c,ii as ee,n as l,oi as te,rl as ne,ua as re}from"./build-module-Bt8gOW8e.js";import{M as ie,T as u,d,in as f,j as p,s as ae}from"./hooks-B7SdK40L.js";import{R as oe,t as se}from"./build-module-BAze1CUO.js";import{t as m}from"./metric-tile-grid-Bl_A01kS.js";import{i as h,n as g,t as _}from"./register-report-mocks-qW9KCv_n.js";import{t as v}from"./widget-state-CHNibOSr.js";import{S as y,b,t as x,x as S,y as ce}from"./src-DblJSBuJ.js";var C,w,T,le=e((()=>{C=`_root_1bdlz_2`,w=`_content_1bdlz_14`,T={root:C,content:w}}));function ue(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function de(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n/100:null}function fe(e){return!!e&&M.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function pe(e,t){let n=[];for(let r of M){if(!r.views.includes(t))continue;let i=r.kind===`rate`?de(e,r.key):ue(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?j:A})}return n}function E(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function D({metric:e}){let{reportParams:t}=d(),n=E(t.post_id),r=n>0,a=ie(n,`rate`,{enabled:r&&e===`opens`}),o=p(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?o:a,c=s.data?.summary;return(0,k.jsx)(N,{metrics:(0,i.useMemo)(()=>fe(c)?pe(c,e):void 0,[c,e]),hasSelection:r,isLoading:s.isLoading,isFetching:s.isFetching,isError:s.isError,onRetry:s.refetch})}function O({attributes:e={}}){return(0,k.jsx)(ae,{attributes:e,children:(0,k.jsx)(D,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var k,A,j,M,N,P=e((()=>{u(),x(),a(),n(),l(),se(),le(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={type:`percentage`,options:{decimals:1,signDisplay:`never`}},M=[{key:`total_sends`,icon:o,label:()=>t(`Total emails sent`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:te,label:()=>t(`Unique opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:s,label:()=>t(`Total opens`,`jetpack-premium-analytics`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:ee,label:()=>t(`Open rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:re,label:()=>t(`Total clicks`,`jetpack-premium-analytics`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:ne,label:()=>t(`Click rate`,`jetpack-premium-analytics`),kind:`rate`,views:[`clicks`]}],N=({metrics:e,hasSelection:n=!1,isLoading:r=!1,isFetching:i=!1,isError:a=!1,onRetry:o})=>(0,k.jsx)(oe,{className:T.root,children:(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(v,{isLoading:r,isFetching:i,isError:a,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:o?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]:void 0},empty:{icon:c,description:t(n?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(m,{tiles:e??[]})})})})})),F,I=e((()=>{n(),l(),F={name:`jpa/email-top-row`,title:t(`Email top row`,`jetpack-premium-analytics`),icon:c,help:{content:t(`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`,`jetpack-premium-analytics`)},attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],relevance:`high`}],example:{attributes:{metric:`opens`}}}}));function L({metric:e,withComparison:t},n=V){return(0,z.jsx)(O,{attributes:{metric:e,reportParams:{...f(t),post_id:n}}})}function R({metric:e,withComparison:t,...n}){return(0,z.jsx)(b,{...n,widgetType:F,renderModule:B,renderComponent:O,attributes:{metric:e,reportParams:{...f(t),post_id:V}}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),S(),_(),P(),I(),z=r(),g(),B=`storybook/email-top-row`,V=2e3,H=`stats/opens/emails`,U=e=>(0,z.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,z.jsx)(e,{})}),W={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:O,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]},withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Data comes from the per-post `stats/<opens|clicks>/emails/<postId>/rate` breakdown, which is all-time and returns no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},G={render:e=>L(e),args:{metric:`opens`,withComparison:!1},decorators:[U]},K={render:e=>L(e),args:{metric:`clicks`,withComparison:!1},decorators:[U]},q={render:e=>L(e),args:{metric:`opens`,withComparison:!0},decorators:[U]},J={render:e=>L(e,2001),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[U],beforeEach:()=>(h(H,`loading`),()=>h(H,null))},Y={render:e=>L(e,2002),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[U],beforeEach:()=>(h(H,`error`),()=>h(H,null))},X={render:e=>L(e,2003),tags:[`!autodocs`],args:{metric:`opens`,withComparison:!1},decorators:[U],beforeEach:()=>(h(H,`empty`),()=>h(H,null))},Z={render:({metric:e,withComparison:t})=>(0,z.jsx)(O,{attributes:{metric:e,reportParams:f(t)}}),args:{metric:`opens`,withComparison:!1},decorators:[U]},Q={render:e=>(0,z.jsx)(R,{...e}),args:{...ce,metric:`opens`,withComparison:!0},argTypes:{...y,metric:{control:`inline-radio`,options:[`opens`,`clicks`]},withComparison:{control:`boolean`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
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