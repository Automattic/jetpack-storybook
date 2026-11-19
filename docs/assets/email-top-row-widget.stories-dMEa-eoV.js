import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{p as i,t as a}from"./build-module-nWjoY2Yf.js";import{$r as o,t as s,ta as c,ti as l,xn as u,yn as d}from"./build-module-BkPf3OFg.js";import{Zr as f}from"./build-module-DfajCjHN.js";import{t as p}from"./src-DADrLB41.js";import{Q as ee,Z as te,t as m,xn as h,yn as g}from"./src-0XClGMDx.js";import{At as ne,H as re,I as ie,bt as ae}from"./charts-provider-CYmDaW5z.js";import{t as oe}from"./widget-state-CkWN1S5r.js";import{i as se}from"./with-story-router-CF7aYVi2.js";import{n as ce,r as le,s as _}from"./register-report-mocks-Ch99HCsV.js";import{r as v,t as ue}from"./metric-tile-grid-skeleton-DagP4KBu.js";import{a as de,c as fe,i as y,l as pe,o as b,r as x,s as me,u as he}from"./with-widget-canvas-CVioQD6x.js";var S,C,w,ge=e((()=>{S=`_root_cqnu4_2`,C=`_content_cqnu4_14`,w={root:S,content:C}}));function T(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:null}function _e(e,t,n){return ne({total:T(e,n.total)??0,unique:T(e,n.unique)??0,sends:T(e,`total_sends`)??0})?T(e,t):null}function ve(e,t,n){return!((T(e,t)??0)>0||T(e,n)===0)}function ye(e,t){if(e.kind===`rate`)return _e(t,e.key,e.signals);let n=T(t,e.key);return e.zeroIsUnknown?n||null:n}function be(e){return!!e&&k.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function xe(e,t){return k.filter(n=>n.views.includes(t)&&!(n.kind===`count`&&n.uniqueOf&&ve(e,n.key,n.uniqueOf))).map(t=>({key:t.key,icon:t.icon,label:t.label(),value:ye(t,e),dataFormat:t.kind===`rate`?O:ae}))}function Se(e){return k.filter(t=>t.views.includes(e)).length}function Ce({metric:e}){let{reportParams:t}=re(),n=g(t.post_id),r=n>0,a=ee(n,`rate`,{enabled:r}),o=a.data?.summary,s=e===`clicks`||a.isSuccess&&!((T(o??{},`total_sends`)??0)>0),c=te(n,`rate`,{enabled:r&&s}),l=c.data?.summary,u=s?[a,c]:[a],d=u.every(e=>e.data!==void 0),f=(0,i.useMemo)(()=>{if(!d)return;let t=e===`clicks`?{...o,...l}:{...l,...o};return be(t)?xe(t,e):void 0},[d,o,l,e]),p=(0,i.useCallback)(()=>{a.refetch(),s&&c.refetch()},[c,s,a]);return(0,D.jsx)(A,{metrics:f,tileCount:Se(e),hasSelection:r,isLoading:u.some(e=>e.isLoading),isFetching:u.some(e=>e.isFetching),isError:u.some(e=>e.isError&&e.data===void 0),onRetry:p})}function E({attributes:e={}}){return(0,D.jsx)(ie,{attributes:e,children:(0,D.jsx)(Ce,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var D,O,k,A,we=e((()=>{m(),se(),a(),n(),s(),p(),ge(),D=r(),O={type:`percentage`,options:{decimals:1,signDisplay:`never`}},k=[{key:`total_sends`,icon:d,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],zeroIsUnknown:!0},{key:`unique_opens`,icon:l,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],uniqueOf:`total_opens`},{key:`total_opens`,icon:u,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:o,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`],signals:{total:`total_opens`,unique:`unique_opens`}},{key:`total_clicks`,icon:c,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:o,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`],signals:{total:`total_clicks`,unique:`unique_clicks`}}],A=({metrics:e,tileCount:n,hasSelection:r=!1,isLoading:i=!1,isFetching:a=!1,isError:o=!1,onRetry:s})=>(0,D.jsx)(f,{className:w.root,children:(0,D.jsx)(`div`,{className:w.content,children:(0,D.jsx)(oe,{isLoading:i,isFetching:a,isError:o,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:s?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]:void 0},empty:{description:t(r?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ue,{tiles:n}),children:(0,D.jsx)(v,{tiles:e??[]})})})})})),j,Te=e((()=>{j={attributes:[],example:{attributes:{metric:`opens`}}}})),M,N,P,F,I,L,R,z,Ee=e((()=>{M=`jpa/email-top-row`,N=`jpa/envelope`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends, and show a dash when those went unrecorded. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(E,{attributes:{metric:e,reportParams:{...h(),post_id:t}}})}function De({metric:e,...t}){return(0,V.jsx)(fe,{...t,widgetType:de(z,j),renderModule:H,renderComponent:E,attributes:{metric:e,reportParams:{...h(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),pe(),ce(),b(),x(),we(),Te(),Ee(),V=r(),le(),H=`storybook/email-top-row`,U=2e3,W=e=>`emails/${e}/rate`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:E,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. The Clicks view combines the per-post opens and clicks rate summaries, and the Opens view reads the clicks one only for a legacy send with no recorded sends; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[y]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[y]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(_(W(2001),`loading`),()=>_(W(2001),null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(_(W(2002),`error`),()=>_(W(2002),null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(_(W(2003),`empty`),()=>_(W(2003),null))},Z={render:({metric:e})=>(0,V.jsx)(E,{attributes:{metric:e,reportParams:h()}}),args:{metric:`opens`},decorators:[y]},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(De,{...e}),args:{...me,metric:`opens`},argTypes:{...he,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},$=[`Default`,`ClicksView`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no stats for the email: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as ClicksView,K as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};