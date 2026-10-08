import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{As as i,Cn as a,Tn as o,Vu as s,ai as c,ku as l,pa as u,si as d,t as f}from"./build-module-DNhkEVJn.js";import{Ot as p}from"./build-module-pI6Uihcg.js";import{t as ee}from"./src-hdrg9oTW.js";import{In as m,Pn as h,R as te,t as g,z as ne}from"./src-Ferr21sN.js";import{_ as re,et as ie,x as ae}from"./charts-provider-DxgSZITe.js";import{n as oe,r as se,s as _}from"./register-report-mocks-kbDmbfoa.js";import{t as ce}from"./widget-state-B3svSGRb.js";import{r as le,t as v}from"./metric-tile-grid-skeleton-BNepG26p.js";import{t as ue}from"./src-C4KwzsSl.js";import{a as de,g as fe,h as pe,i as me,m as y,n as b,p as he,r as x}from"./with-widget-canvas-DV93GYy7.js";var S,C,w,ge=e((()=>{S=`_root_cqnu4_2`,C=`_content_cqnu4_14`,w={root:S,content:C}}));function T(e,t){let n=e[t];return typeof n==`number`&&Number.isFinite(n)?n:null}function _e(e,t,n){return ie({total:T(e,n.total)??0,unique:T(e,n.unique)??0,sends:T(e,`total_sends`)??0})?T(e,t):null}function ve(e,t,n){return!((T(e,t)??0)>0||T(e,n)===0)}function ye(e,t){if(e.kind===`rate`)return _e(t,e.key,e.signals);let n=T(t,e.key);return e.zeroIsUnknown?n||null:n}function be(e){return!!e&&A.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function xe(e,t){return A.filter(n=>n.views.includes(t)&&!(n.kind===`count`&&n.uniqueOf&&ve(e,n.key,n.uniqueOf))).map(t=>({key:t.key,icon:t.icon,label:t.label(),value:ye(t,e),dataFormat:t.kind===`rate`?k:O}))}function Se(e){return A.filter(t=>t.views.includes(e)).length}function Ce({metric:e}){let{reportParams:t}=ae(),n=h(t.post_id),r=n>0,i=ne(n,`rate`,{enabled:r}),a=i.data?.summary,o=e===`clicks`||i.isSuccess&&!((T(a??{},`total_sends`)??0)>0),c=te(n,`rate`,{enabled:r&&o}),l=c.data?.summary,u=o?[i,c]:[i],d=u.every(e=>e.data!==void 0),f=(0,s.useMemo)(()=>{if(!d)return;let t=e===`clicks`?{...a,...l}:{...l,...a};return be(t)?xe(t,e):void 0},[d,a,l,e]),p=(0,s.useCallback)(()=>{i.refetch(),o&&c.refetch()},[c,o,i]);return(0,D.jsx)(j,{metrics:f,tileCount:Se(e),hasSelection:r,isLoading:u.some(e=>e.isLoading),isFetching:u.some(e=>e.isFetching),isError:u.some(e=>e.isError&&e.data===void 0),onRetry:p})}function E({attributes:e={}}){return(0,D.jsx)(re,{attributes:e,children:(0,D.jsx)(Ce,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var D,O,k,A,j,we=e((()=>{g(),ue(),l(),n(),f(),ee(),ge(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k={type:`percentage`,options:{decimals:1,signDisplay:`never`}},A=[{key:`total_sends`,icon:a,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],zeroIsUnknown:!0},{key:`unique_opens`,icon:d,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],uniqueOf:`total_opens`},{key:`total_opens`,icon:o,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:c,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`],signals:{total:`total_opens`,unique:`unique_opens`}},{key:`total_clicks`,icon:u,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:c,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`],signals:{total:`total_clicks`,unique:`unique_clicks`}}],j=({metrics:e,tileCount:n,hasSelection:r=!1,isLoading:a=!1,isFetching:o=!1,isError:s=!1,onRetry:c})=>(0,D.jsx)(p,{className:w.root,children:(0,D.jsx)(`div`,{className:w.content,children:(0,D.jsx)(ce,{isLoading:a,isFetching:o,isError:s,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:c?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]:void 0},empty:{icon:i,description:t(r?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(v,{tiles:n}),children:(0,D.jsx)(le,{tiles:e??[]})})})})})),M,Te=e((()=>{f(),M={icon:i,attributes:[],example:{attributes:{metric:`opens`}}}})),N,P,F,I,L,R,z,Ee=e((()=>{N=`jpa/email-top-row`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total opens, total clicks, and click rate. Rates are measured against total sends, and show a dash when those went unrecorded. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(E,{attributes:{metric:e,reportParams:{...m(),post_id:t}}})}function De({metric:e,...t}){return(0,V.jsx)(y,{...t,widgetType:me(z,M),renderModule:H,renderComponent:E,attributes:{metric:e,reportParams:{...m(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),pe(),oe(),de(),b(),we(),Te(),Ee(),V=r(),se(),H=`storybook/email-top-row`,U=2e3,W=e=>`emails/${e}/rate`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:E,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. The Clicks view combines the per-post opens and clicks rate summaries, and the Opens view reads the clicks one only for a legacy send with no recorded sends; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[x]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[x]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[x],beforeEach:()=>(_(W(2001),`loading`),()=>_(W(2001),null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[x],beforeEach:()=>(_(W(2002),`error`),()=>_(W(2002),null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[x],beforeEach:()=>(_(W(2003),`empty`),()=>_(W(2003),null))},Z={render:({metric:e})=>(0,V.jsx)(E,{attributes:{metric:e,reportParams:m()}}),args:{metric:`opens`},decorators:[x]},Q={render:e=>(0,V.jsx)(De,{...e}),args:{...he,metric:`opens`},argTypes:{...fe,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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