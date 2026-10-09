import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Cn as i,Gu as a,Ms as o,Nu as s,Tn as c,ha as l,li as u,si as d,t as f}from"./build-module-Cm3Kd3py.js";import{At as p}from"./build-module-D2aEjqke.js";import{t as ee}from"./src-DIfNM21w.js";import{En as te,On as m,R as ne,t as h,z as re}from"./src-EFVFQWJ1.js";import{_ as ie,et as g,x as ae}from"./charts-provider-BcXi6Auj.js";import{n as oe,r as se,s as _}from"./register-report-mocks-ByCR7QC_.js";import{t as ce}from"./widget-state-DFLDEYqh.js";import{r as le,t as ue}from"./metric-tile-grid-skeleton-D2GkFXsG.js";import{t as de}from"./src-CCU8io4M.js";import{a as fe,g as v,h as pe,i as me,m as he,n as ge,p as _e,r as y}from"./with-widget-canvas-CuaJpnBg.js";var b,x,S,ve=e((()=>{b=`_root_cqnu4_2`,x=`_content_cqnu4_14`,S={root:b,content:x}}));function C(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:null}function ye(e,t,n){return g({total:C(e,n.total)??0,unique:C(e,n.unique)??0,sends:C(e,`total_sends`)??0})?C(e,t):null}function be(e,t,n){return!((C(e,t)??0)>0||C(e,n)===0)}function xe(e,t){if(e.kind===`rate`)return ye(t,e.key,e.signals);let n=C(t,e.key);return e.zeroIsUnknown?n||null:n}function Se(e){return!!e&&k.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function Ce(e,t){return k.filter(n=>n.views.includes(t)&&!(n.kind===`count`&&n.uniqueOf&&be(e,n.key,n.uniqueOf))).map(t=>({key:t.key,icon:t.icon,label:t.label(),value:xe(t,e),dataFormat:t.kind===`rate`?O:D}))}function w(e){return k.filter(t=>t.views.includes(e)).length}function we({metric:e}){let{reportParams:t}=ae(),n=te(t.post_id),r=n>0,i=re(n,`rate`,{enabled:r}),o=i.data?.summary,s=e===`clicks`||i.isSuccess&&!((C(o??{},`total_sends`)??0)>0),c=ne(n,`rate`,{enabled:r&&s}),l=c.data?.summary,u=s?[i,c]:[i],d=u.every(e=>e.data!==void 0),f=(0,a.useMemo)(()=>{if(!d)return;let t=e===`clicks`?{...o,...l}:{...l,...o};return Se(t)?Ce(t,e):void 0},[d,o,l,e]),p=(0,a.useCallback)(()=>{i.refetch(),s&&c.refetch()},[c,s,i]);return(0,E.jsx)(A,{metrics:f,tileCount:w(e),hasSelection:r,isLoading:u.some(e=>e.isLoading),isFetching:u.some(e=>e.isFetching),isError:u.some(e=>e.isError&&e.data===void 0),onRetry:p})}function T({attributes:e={}}){return(0,E.jsx)(ie,{attributes:e,children:(0,E.jsx)(we,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var E,D,O,k,A,Te=e((()=>{h(),de(),s(),n(),f(),ee(),ve(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O={type:`percentage`,options:{decimals:1,signDisplay:`never`}},k=[{key:`total_sends`,icon:i,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],zeroIsUnknown:!0},{key:`unique_opens`,icon:u,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],uniqueOf:`total_opens`},{key:`total_opens`,icon:c,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:d,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`],signals:{total:`total_opens`,unique:`unique_opens`}},{key:`total_clicks`,icon:l,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:d,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`],signals:{total:`total_clicks`,unique:`unique_clicks`}}],A=({metrics:e,tileCount:n,hasSelection:r=!1,isLoading:i=!1,isFetching:a=!1,isError:s=!1,onRetry:c})=>(0,E.jsx)(p,{className:S.root,children:(0,E.jsx)(`div`,{className:S.content,children:(0,E.jsx)(ce,{isLoading:i,isFetching:a,isError:s,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:c?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]:void 0},empty:{icon:o,description:t(r?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(ue,{tiles:n}),children:(0,E.jsx)(le,{tiles:e??[]})})})})})),j,Ee=e((()=>{j={attributes:[],example:{attributes:{metric:`opens`}}}})),M,N,P,F,I,L,R,z,De=e((()=>{M=`jpa/email-top-row`,N=`jpa/envelope`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends, and show a dash when those went unrecorded. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(T,{attributes:{metric:e,reportParams:{...m(),post_id:t}}})}function Oe({metric:e,...t}){return(0,V.jsx)(he,{...t,widgetType:me(z,j),renderModule:H,renderComponent:T,attributes:{metric:e,reportParams:{...m(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),pe(),oe(),fe(),ge(),Te(),Ee(),De(),V=r(),se(),H=`storybook/email-top-row`,U=2e3,W=e=>`emails/${e}/rate`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:T,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. The Clicks view combines the per-post opens and clicks rate summaries, and the Opens view reads the clicks one only for a legacy send with no recorded sends; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[y]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[y]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(_(W(2001),`loading`),()=>_(W(2001),null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(_(W(2002),`error`),()=>_(W(2002),null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(_(W(2003),`empty`),()=>_(W(2003),null))},Z={render:({metric:e})=>(0,V.jsx)(T,{attributes:{metric:e,reportParams:m()}}),args:{metric:`opens`},decorators:[y]},Q={render:e=>(0,V.jsx)(Oe,{...e}),args:{..._e,metric:`opens`},argTypes:{...v,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`The Clicks view — total opens, total clicks, and click rate for the same email.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args, 2001),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(rateMockFragment(2001), 'loading');
    return () => setReportMockState(rateMockFragment(2001), null);
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => renderEmailTopRow(args, 2002),
  tags: ['!autodocs'],
  args: {
    metric: 'opens'
  },
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(rateMockFragment(2002), 'error');
    return () => setReportMockState(rateMockFragment(2002), null);
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
    setReportMockState(rateMockFragment(2003), 'empty');
    return () => setReportMockState(rateMockFragment(2003), null);
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