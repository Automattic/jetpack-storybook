import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{$r as i,ou as a,t as o,ta as s,ti as c,vu as l,xn as u,yn as d}from"./build-module-D8x1-0PG.js";import{Zr as f}from"./build-module-BIs_8VLE.js";import{t as p}from"./src-D8xhFOpT.js";import{J as ee,Y as m,_n as h,t as g,yn as _}from"./src-52cnEbCc.js";import{Dt as te,H as ne,I as re,_t as ie}from"./charts-provider-BoFsWvxX.js";import{t as ae}from"./widget-state-CIbtadTL.js";import{i as oe}from"./with-story-router-Cr63Gky7.js";import{n as se,r as ce,s as v}from"./register-report-mocks-BlzsUi-e.js";import{r as le,t as ue}from"./metric-tile-grid-skeleton-DhOGMiMc.js";import{a as de,c as fe,i as y,l as pe,o as me,r as he,s as b,u as ge}from"./with-widget-canvas-DeHA7jRZ.js";var x,S,C,_e=e((()=>{x=`_root_cqnu4_2`,S=`_content_cqnu4_14`,C={root:x,content:S}}));function w(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:null}function ve(e,t,n){return te({total:w(e,n.total)??0,unique:w(e,n.unique)??0,sends:w(e,`total_sends`)??0})?w(e,t):null}function ye(e,t,n){return!((w(e,t)??0)>0||w(e,n)===0)}function be(e,t){if(e.kind===`rate`)return ve(t,e.key,e.signals);let n=w(t,e.key);return e.zeroIsUnknown?n||null:n}function xe(e){return!!e&&O.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function Se(e,t){return O.filter(n=>n.views.includes(t)&&!(n.kind===`count`&&n.uniqueOf&&ye(e,n.key,n.uniqueOf))).map(t=>({key:t.key,icon:t.icon,label:t.label(),value:be(t,e),dataFormat:t.kind===`rate`?D:ie}))}function Ce(e){return O.filter(t=>t.views.includes(e)).length}function we({metric:e}){let{reportParams:t}=ne(),n=h(t.post_id),r=n>0,i=m(n,`rate`,{enabled:r}),a=i.data?.summary,o=e===`clicks`||i.isSuccess&&!((w(a??{},`total_sends`)??0)>0),s=ee(n,`rate`,{enabled:r&&o}),c=s.data?.summary,u=o?[i,s]:[i],d=u.every(e=>e.data!==void 0),f=(0,l.useMemo)(()=>{if(!d)return;let t=e===`clicks`?{...a,...c}:{...c,...a};return xe(t)?Se(t,e):void 0},[d,a,c,e]),p=(0,l.useCallback)(()=>{i.refetch(),o&&s.refetch()},[s,o,i]);return(0,E.jsx)(k,{metrics:f,tileCount:Ce(e),hasSelection:r,isLoading:u.some(e=>e.isLoading),isFetching:u.some(e=>e.isFetching),isError:u.some(e=>e.isError&&e.data===void 0),onRetry:p})}function T({attributes:e={}}){return(0,E.jsx)(re,{attributes:e,children:(0,E.jsx)(we,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var E,D,O,k,A=e((()=>{g(),oe(),a(),n(),o(),p(),_e(),E=r(),D={type:`percentage`,options:{decimals:1,signDisplay:`never`}},O=[{key:`total_sends`,icon:d,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],zeroIsUnknown:!0},{key:`unique_opens`,icon:c,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],uniqueOf:`total_opens`},{key:`total_opens`,icon:u,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:i,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`],signals:{total:`total_opens`,unique:`unique_opens`}},{key:`total_clicks`,icon:s,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:i,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`],signals:{total:`total_clicks`,unique:`unique_clicks`}}],k=({metrics:e,tileCount:n,hasSelection:r=!1,isLoading:i=!1,isFetching:a=!1,isError:o=!1,onRetry:s})=>(0,E.jsx)(f,{className:C.root,children:(0,E.jsx)(`div`,{className:C.content,children:(0,E.jsx)(ae,{isLoading:i,isFetching:a,isError:o,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:s?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]:void 0},empty:{description:t(r?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(ue,{tiles:n}),children:(0,E.jsx)(le,{tiles:e??[]})})})})})),j,Te=e((()=>{j={attributes:[],example:{attributes:{metric:`opens`}}}})),M,N,P,F,I,L,R,z,Ee=e((()=>{M=`jpa/email-top-row`,N=`jpa/envelope`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends, and show a dash when those went unrecorded. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(T,{attributes:{metric:e,reportParams:{..._(),post_id:t}}})}function De({metric:e,...t}){return(0,V.jsx)(fe,{...t,widgetType:de(z,j),renderModule:H,renderComponent:T,attributes:{metric:e,reportParams:{..._(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),pe(),se(),me(),he(),A(),Te(),Ee(),V=r(),ce(),H=`storybook/email-top-row`,U=2e3,W=e=>`emails/${e}/rate`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:T,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. The Clicks view combines the per-post opens and clicks rate summaries, and the Opens view reads the clicks one only for a legacy send with no recorded sends; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[y]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[y]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(v(W(2001),`loading`),()=>v(W(2001),null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(v(W(2002),`error`),()=>v(W(2002),null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[y],beforeEach:()=>(v(W(2003),`empty`),()=>v(W(2003),null))},Z={render:({metric:e})=>(0,V.jsx)(T,{attributes:{metric:e,reportParams:_()}}),args:{metric:`opens`},decorators:[y]},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(De,{...e}),args:{...b,metric:`opens`},argTypes:{...ge,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},$=[`Default`,`ClicksView`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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