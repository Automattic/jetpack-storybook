import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,r,t as i}from"./build-module-Da_5_6n_.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{O as c,t as l}from"./build-module-DrryaqBL.js";import{ct as u,n as d}from"./build-module-DmVuor49.js";import{Vi as ee,Wi as f}from"./iframe-CxXb0wEU.js";import{R as te,W as p,t as ne,u as re}from"./build-module-s1rX69Gq.js";import{n as m,t as h}from"./src-3Lv7Etdm.js";import{Yt as g,dt as _,er as v,hr as y}from"./chart-tooltip-IKMM6k6K.js";import{A as ie,D as b,E as x,O as ae,T as S,j as oe,w as se}from"./report-metric-Cl9zgJsV.js";import{t as ce}from"./widget-state-C6ykyujP.js";import{C as le,S as ue,T as de,b as fe,t as pe,w as C,x as w}from"./src-jWH5buQC.js";var T,E,D,O,k,A,j,me=e((()=>{T=`_root_1i6zp_1`,E=`_progress_1i6zp_9`,D=`_progressMeter_1i6zp_24`,O=`_isOverLimit_1i6zp_46`,k=`_progressLabel_1i6zp_55`,A=`_note_1i6zp_61`,j={root:T,progress:E,progressMeter:D,isOverLimit:O,progressLabel:k,note:A}}));function M(e){return n(e>=2?`You've surpassed your limit for two consecutive periods already.`:`You've surpassed your limit the past month.`,`jetpack-premium-analytics`)}function N(){let e=f()?.site,t=e?.wpcom?.blog_id;return!e?.admin_url||!t?void 0:`${e.admin_url}admin.php?page=stats#!/stats/purchase/${t}?from=jetpack-premium-analytics&productType=commercial&redirect_uri=admin.php%3Fpage%3Djetpack-premium-analytics-wp-admin`}function P({limit:e,usage:i,daysToReset:a,overLimitMonths:s}){let l=i??0,u=l>=e,d=N();return(0,L.jsxs)(te,{className:j.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,L.jsxs)(`div`,{className:o(j.progress,u&&j.isOverLimit),children:[(0,L.jsx)(`progress`,{className:j.progressMeter,value:Math.min(l,e),max:e,"aria-label":n(`Plan usage`,`jetpack-premium-analytics`)}),(0,L.jsx)(p,{className:j.progressLabel,variant:`body-sm`,children:t(n(`%1$s / %2$s views`,`jetpack-premium-analytics`),m(l,`number`,{decimals:0}),m(e,`number`,{decimals:0}))}),a!==void 0&&(0,L.jsx)(p,{className:j.progressLabel,variant:`body-sm`,children:t(r(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics`),a)})]}),(!!s||d)&&(0,L.jsxs)(p,{className:j.note,variant:`body-sm`,children:[s?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`strong`,{children:M(s)}),` `]}):null,d&&c(n(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics`),{a:(0,L.jsx)(re,{href:d})})]})]})}function F(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:a}=g(),o=e?.views_limit,s=typeof o==`number`&&o>0,c=f()?.site?.host===`vip`;return(0,L.jsx)(ce,{isLoading:t,isFetching:r,isError:!e&&i,isEmpty:!s,error:{description:n(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:a}]},empty:{icon:u,description:n(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics`)},children:s&&(0,L.jsx)(P,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:c?null:e?.over_limit_months})})}function I({attributes:e={}}){return(0,L.jsx)(oe,{attributes:e,children:(0,L.jsx)(F,{})})}var L,R=e((()=>{ee(),_(),h(),pe(),l(),i(),d(),ne(),a(),me(),L=s()})),z,he=e((()=>{i(),d(),z={name:`jpa/plan-usage`,title:n(`Plan usage`,`jetpack-premium-analytics`),icon:u,help:{content:n(`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},attributes:[],example:{attributes:{}}}}));function B(e){return()=>(b(`jetpack-stats/usage`,e),y.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{b(`jetpack-stats/usage`,null),y.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function V({vip:e}){return()=>(x(`jetpack-stats/usage`,ie),e&&(window.JetpackScriptData.site.host=`vip`),y.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{x(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,y.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function H(){return(0,U.jsx)(I,{attributes:{reportParams:v()}})}function ge(e){return(0,U.jsx)(le,{...e,widgetType:{...z,presentation:`framed`},renderModule:W,renderComponent:I,attributes:{reportParams:v(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ae(),se(),C(),fe(),R(),he(),U=s(),S(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},W=`storybook/plan-usage`,G={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:I,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},K={render:H,decorators:[w]},q={render:H,tags:[`!autodocs`],decorators:[w],beforeEach:B(`loading`)},J={render:H,tags:[`!autodocs`],decorators:[w],beforeEach:B(`error`)},Y={render:H,tags:[`!autodocs`],decorators:[w],beforeEach:B(`empty`)},X={render:H,tags:[`!autodocs`],decorators:[w],beforeEach:V({vip:!1})},Z={render:H,tags:[`!autodocs`],decorators:[w],beforeEach:V({vip:!0})},Q={render:e=>(0,U.jsx)(ge,{...e}),args:{...ue},argTypes:{...de}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default state — the current-cycle usage gauge.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageState('loading')
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageState('error')
}`,...J.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageState('empty')
}`,...Y.parameters?.docs?.source},description:{story:`Resolved without a usable limit — the forced empty response carries no
\`views_limit\`, the same shape legacy or unplanned sites report — so the widget
shows its unavailable state (the neutral percent glyph and "Plan usage isn't
available for your current plan.").`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageOverLimit({
    vip: false
  })
}`,...X.parameters?.docs?.source},description:{story:`Over-limit state — usage has exceeded the limit for two consecutive cycles, so
the meter fills red and the bold over-limit warning precedes the upgrade note.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageOverLimit({
    vip: true
  })
}`,...Z.parameters?.docs?.source},description:{story:`Over-limit on a VIP site — the same over-limit reading, but \`site.host\` is
\`'vip'\`, so the over-limit warning is suppressed (matching the Stats "Plan
usage" section). The red fill remains; only the warning is gone.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PlanUsageDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Unavailable`,`OverLimit`,`OverLimitVip`,`WidgetDashboardWithWidget`]}))();export{K as Default,J as Error,q as Loading,X as OverLimit,Z as OverLimitVip,Y as Unavailable,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};