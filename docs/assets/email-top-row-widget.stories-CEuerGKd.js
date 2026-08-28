import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{As as o,Dn as s,Tn as c,ha as l,li as u,si as d,t as f}from"./build-module-CR6EsQjA.js";import{pn as ee,t as te}from"./src-B4VsOWlR.js";import{b as p,g as ne}from"./hooks-7KqDI4S5.js";import{Sn as re,m as ie,p as m,qt as h,t as g}from"./src-BjZ54zgU.js";import{f as ae,p as oe}from"./chart-tooltip-C5TWg7Oz.js";import{r as se,t as ce}from"./metric-tile-grid-skeleton-BrsT6dtF.js";import{G as le,K as _,Y as v}from"./report-metric-C25Xf5Nx.js";import{t as ue}from"./widget-state-KX6fpgAN.js";import{C as de,D as y,E as b,S as x,T as fe,b as pe,t as me,w as he,x as S}from"./src-DnbRbU6q.js";var C,w,T,ge=e((()=>{C=`_root_cqnu4_2`,w=`_content_cqnu4_14`,T={root:C,content:w}}));function _e(e,t){let n=Number(e[t]);return Number.isFinite(n)?n:0}function ve(e,t){let n=Number(e[t]);return Number.isFinite(n)&&n!==0?n:null}function ye(e){return!!e&&A.some(t=>{let n=e[t.key];return n!=null&&Number.isFinite(Number(n))})}function be(e,t){let n=[];for(let r of A){if(!r.views.includes(t))continue;let i=r.kind===`rate`?ve(e,r.key):_e(e,r.key);r.hideWhenZero&&!i||n.push({key:r.key,icon:r.icon,label:r.label(),value:i,dataFormat:r.kind===`rate`?k:O})}return n}function xe(e){return A.filter(t=>t.views.includes(e)).length}function Se({metric:e}){let{reportParams:t}=p(),n=re(t.post_id),r=n>0,a=ie(n,`rate`,{enabled:r}),o=m(n,`rate`,{enabled:r&&e===`clicks`}),s=e===`clicks`?[a,o]:[a],c=a.data?.summary,l=o.data?.summary,u=s.every(e=>e.data!==void 0),d=(0,i.useMemo)(()=>{if(!u)return;let t=e===`clicks`&&c&&l?{...c,...l}:c;return ye(t)?be(t,e):void 0},[u,c,l,e]),f=(0,i.useCallback)(()=>{a.refetch(),e===`clicks`&&o.refetch()},[o,e,a]);return(0,D.jsx)(j,{metrics:d,tileCount:xe(e),hasSelection:r,isLoading:s.some(e=>e.isLoading),isFetching:s.some(e=>e.isFetching),isError:s.some(e=>e.isError&&e.data===void 0),onRetry:f})}function E({attributes:e={}}){return(0,D.jsx)(ne,{attributes:e,children:(0,D.jsx)(Se,{metric:e.metric===`clicks`?`clicks`:`opens`})})}var D,O,k,A,j,Ce=e((()=>{g(),me(),a(),n(),f(),te(),ge(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k={type:`percentage`,options:{decimals:1,signDisplay:`never`}},A=[{key:`total_sends`,icon:c,label:()=>t(`Emails sent`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`]},{key:`unique_opens`,icon:u,label:()=>t(`Unique opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`],hideWhenZero:!0},{key:`total_opens`,icon:s,label:()=>t(`Total opens`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`opens`,`clicks`]},{key:`opens_rate`,icon:d,label:()=>t(`Open rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`opens`]},{key:`total_clicks`,icon:l,label:()=>t(`Total clicks`,`jetpack-premium-analytics-pkg`),kind:`count`,views:[`clicks`]},{key:`clicks_rate`,icon:d,label:()=>t(`Click rate`,`jetpack-premium-analytics-pkg`),kind:`rate`,views:[`clicks`]}],j=({metrics:e,tileCount:n,hasSelection:r=!1,isLoading:i=!1,isFetching:a=!1,isError:s=!1,onRetry:c})=>(0,D.jsx)(ee,{className:T.root,children:(0,D.jsx)(`div`,{className:T.content,children:(0,D.jsx)(ue,{isLoading:i,isFetching:a,isError:s,isEmpty:!e||e.length===0,error:{description:t(`We couldn't load this email's stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:c?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]:void 0},empty:{icon:o,description:t(r?`No stats are available for this email yet.`:`Select an email to see its stats.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ce,{tiles:n}),children:(0,D.jsx)(se,{tiles:e??[]})})})})})),M,we=e((()=>{n(),f(),ae(),M={icon:o,attributes:[{id:`metric`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:oe,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]}],example:{attributes:{metric:`opens`}}}})),N,P,F,I,L,R,z,Te=e((()=>{N=`jpa/email-top-row`,P=`Email highlights`,F=`Headline open and click totals for a single email, split into Opens and Clicks views.`,I={content:`Headline stats for a single email. The Opens view shows total sends, unique opens, total opens, and open rate; the Clicks view shows total sends, unique opens, total clicks, and click rate. Rates are measured against total sends. Figures are all-time and are not affected by the dashboard date range.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=U){return(0,V.jsx)(E,{attributes:{metric:e,reportParams:{...h(),post_id:t}}})}function Ee({metric:e,...t}){return(0,V.jsx)(fe,{...t,widgetType:x(z,M),renderModule:H,renderComponent:E,attributes:{metric:e,reportParams:{...h(!0),post_id:U}}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),b(),le(),de(),pe(),Ce(),we(),Te(),V=r(),_(),H=`storybook/email-top-row`,U=2e3,W=`stats/opens/emails`,G={title:`Packages/Premium Analytics/Widgets/EmailTopRow`,component:E,tags:[`autodocs`],argTypes:{metric:{control:`inline-radio`,options:[`opens`,`clicks`]}},parameters:{docs:{description:{component:'The "Email top row" widget. Shows a single email\'s all-time headline totals as a row of metric tiles, switching between the Opens view (total sends, unique opens, total opens, open rate) and the Clicks view (total sends, unique opens, total clicks, click rate) via the `metric` attribute. The email is selected by the host through `reportParams.post_id`. Clicks combines the per-post opens and clicks rate summaries; both endpoints are all-time and return no comparison rows, so the widget ignores the dashboard date range and never shows period-over-period deltas.'}}}},K={render:e=>B(e),args:{metric:`opens`},decorators:[S]},q={render:e=>B(e),args:{metric:`clicks`},decorators:[S]},J={render:e=>B(e,2001),tags:[`!autodocs`],args:{metric:`opens`},decorators:[S],beforeEach:()=>(v(W,`loading`),()=>v(W,null))},Y={render:e=>B(e,2002),tags:[`!autodocs`],args:{metric:`opens`},decorators:[S],beforeEach:()=>(v(W,`error`),()=>v(W,null))},X={render:e=>B(e,2003),tags:[`!autodocs`],args:{metric:`opens`},decorators:[S],beforeEach:()=>(v(W,`empty`),()=>v(W,null))},Z={render:({metric:e})=>(0,V.jsx)(E,{attributes:{metric:e,reportParams:h()}}),args:{metric:`opens`},decorators:[S]},Q={render:e=>(0,V.jsx)(Ee,{...e}),args:{...he,metric:`opens`},argTypes:{...y,metric:{control:`inline-radio`,options:[`opens`,`clicks`]}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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