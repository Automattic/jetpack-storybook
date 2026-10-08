import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r,u as i}from"./build-module-2QZQpBH2.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{ai as c,ku as l,t as u,zu as ee}from"./build-module-DNhkEVJn.js";import{Xa as d,qa as f}from"./iframe-BGlSahQw.js";import{An as te,Bn as p,Ot as ne}from"./build-module-pI6Uihcg.js";import{t as re}from"./src-Dx1evuzS.js";import{n as m,t as ie}from"./src-BDJs-0ZM.js";import{Nn as h,Xn as g,t as _,ut as ae}from"./src-CKBRZpnB.js";import{_ as oe}from"./charts-provider-D0YW08zg.js";import{m as se,t as ce}from"./data-DPKgjZvT.js";import{n as le,o as v,r as ue,s as y}from"./register-report-mocks-CumqECwP.js";import{t as de}from"./widget-state-DUGg3gEZ.js";import{t as b}from"./src-D6TJyxfa.js";import{a as fe,g as pe,h as me,i as he,m as ge,n as _e,p as ve,r as x}from"./with-widget-canvas-DfMMfJNO.js";var S,C,w,T,E,D,O,ye=e((()=>{S=`_root_1i6zp_1`,C=`_progress_1i6zp_9`,w=`_progressMeter_1i6zp_24`,T=`_isOverLimit_1i6zp_46`,E=`_progressLabel_1i6zp_55`,D=`_note_1i6zp_61`,O={root:S,progress:C,progressMeter:w,isOverLimit:T,progressLabel:E,note:D}}));function be(e){return t(e>=2?`You've surpassed your limit for two consecutive periods already.`:`You've surpassed your limit the past month.`,`jetpack-premium-analytics-pkg`)}function xe(){let e=d()?.site,t=e?.wpcom?.blog_id;return!e?.admin_url||!t?void 0:`${e.admin_url}admin.php?page=stats#!/stats/purchase/${t}?from=jetpack-premium-analytics&productType=commercial&redirect_uri=admin.php%3Fpage%3Djetpack-premium-analytics-wp-admin`}function Se({limit:e,usage:r,daysToReset:a,overLimitMonths:s}){let c=r??0,l=c>=e,u=xe();return(0,j.jsxs)(ne,{className:O.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,j.jsxs)(`div`,{className:o(O.progress,l&&O.isOverLimit),children:[(0,j.jsx)(`progress`,{className:O.progressMeter,value:Math.min(c,e),max:e,"aria-label":t(`Plan usage`,`jetpack-premium-analytics-pkg`)}),(0,j.jsx)(p,{className:O.progressLabel,variant:`body-sm`,children:i(t(`%1$s / %2$s views`,`jetpack-premium-analytics-pkg`),m(c,`number`,{decimals:0}),m(e,`number`,{decimals:0}))}),a!==void 0&&(0,j.jsx)(p,{className:O.progressLabel,variant:`body-sm`,children:i(n(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics-pkg`),a)})]}),(!!s||u)&&(0,j.jsxs)(p,{className:O.note,variant:`body-sm`,children:[s?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`strong`,{children:be(s)}),` `]}):null,u&&ee(t(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics-pkg`),{a:(0,j.jsx)(te,{href:u})})]})]})}function k(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:a}=ae(),o=e?.views_limit,s=typeof o==`number`&&o>0,l=d()?.site?.host===`vip`;return(0,j.jsx)(de,{isLoading:n,isFetching:r,isError:!e&&i,isEmpty:!s,error:{description:t(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:c,description:t(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics-pkg`)},children:s&&(0,j.jsx)(Se,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:l?null:e?.over_limit_months})})}function A({attributes:e={}}){return(0,j.jsx)(oe,{attributes:e,children:(0,j.jsx)(k,{})})}var j,Ce=e((()=>{f(),_(),ie(),b(),l(),r(),u(),re(),a(),ye(),j=s()})),M,we=e((()=>{u(),M={icon:c,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,Te=e((()=>{N=`jpa/plan-usage`,P=`Plan usage`,F=`How your billable views compare to your plan's monthly limit.`,I={content:`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e){return()=>(y(`jetpack-stats/usage`,e),g.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{y(`jetpack-stats/usage`,null),g.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function V({vip:e}){return()=>(v(`jetpack-stats/usage`,se),e&&(window.JetpackScriptData.site.host=`vip`),g.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{v(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,g.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function H(){return(0,U.jsx)(A,{attributes:{reportParams:h()}})}function Ee(e){return(0,U.jsx)(ge,{...e,widgetType:he(z,M),renderModule:W,renderComponent:A,attributes:{reportParams:h(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ce(),le(),me(),fe(),_e(),Ce(),we(),Te(),U=s(),ue(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},W=`storybook/plan-usage`,G={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},K={render:H,decorators:[x]},q={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:B(`loading`)},J={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:B(`error`)},Y={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:B(`empty`)},X={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:V({vip:!1})},Z={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:V({vip:!0})},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...ve},argTypes:{...pe}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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