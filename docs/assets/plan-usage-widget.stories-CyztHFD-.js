import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{h as c,t as l}from"./build-module-CbwHEf9N.js";import{ci as u,n as d}from"./build-module-CDRs4YxF.js";import{Cn as f,q as ee,sn as p,t as te}from"./src-Du1NNcpU.js";import{$ as ne,G as re,J as m,K as ie,Q as ae,X as oe,Y as h}from"./report-metric-BKwjdeE_.js";import{Oc as se,jc as g}from"./iframe-CGtRQeFu.js";import{n as _,t as ce}from"./src-CgWd-SVF.js";import{Ft as v,Tr as y,Vr as b,yn as le}from"./chart-tooltip-BeT-x7uk.js";import{t as ue}from"./widget-state-CTEdNW-p.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as _e,w as ve,x}from"./src-Bq-o1bYq.js";var S,C,w,T,E,D,O,ye=e((()=>{S=`_root_1i6zp_1`,C=`_progress_1i6zp_9`,w=`_progressMeter_1i6zp_24`,T=`_isOverLimit_1i6zp_46`,E=`_progressLabel_1i6zp_55`,D=`_note_1i6zp_61`,O={root:S,progress:C,progressMeter:w,isOverLimit:T,progressLabel:E,note:D}}));function be(e){return n(e>=2?`You've surpassed your limit for two consecutive periods already.`:`You've surpassed your limit the past month.`,`jetpack-premium-analytics-pkg`)}function xe(){let e=g()?.site,t=e?.wpcom?.blog_id;return!e?.admin_url||!t?void 0:`${e.admin_url}admin.php?page=stats#!/stats/purchase/${t}?from=jetpack-premium-analytics&productType=commercial&redirect_uri=admin.php%3Fpage%3Djetpack-premium-analytics-wp-admin`}function Se({limit:e,usage:i,daysToReset:a,overLimitMonths:s}){let l=i??0,u=l>=e,d=xe();return(0,A.jsxs)(p,{className:O.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,A.jsxs)(`div`,{className:o(O.progress,u&&O.isOverLimit),children:[(0,A.jsx)(`progress`,{className:O.progressMeter,value:Math.min(l,e),max:e,"aria-label":n(`Plan usage`,`jetpack-premium-analytics-pkg`)}),(0,A.jsx)(f,{className:O.progressLabel,variant:`body-sm`,children:t(n(`%1$s / %2$s views`,`jetpack-premium-analytics-pkg`),_(l,`number`,{decimals:0}),_(e,`number`,{decimals:0}))}),a!==void 0&&(0,A.jsx)(f,{className:O.progressLabel,variant:`body-sm`,children:t(r(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics-pkg`),a)})]}),(!!s||d)&&(0,A.jsxs)(f,{className:O.note,variant:`body-sm`,children:[s?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`strong`,{children:be(s)}),` `]}):null,d&&c(n(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics-pkg`),{a:(0,A.jsx)(ee,{href:d})})]})]})}function Ce(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:a}=le(),o=e?.views_limit,s=typeof o==`number`&&o>0,c=g()?.site?.host===`vip`;return(0,A.jsx)(ue,{isLoading:t,isFetching:r,isError:!e&&i,isEmpty:!s,error:{description:n(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:u,description:n(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics-pkg`)},children:s&&(0,A.jsx)(Se,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:c?null:e?.over_limit_months})})}function k({attributes:e={}}){return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(Ce,{})})}var A,we=e((()=>{se(),v(),ce(),_e(),l(),i(),d(),te(),a(),ye(),A=s()})),j,Te=e((()=>{d(),j={icon:u,attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,Ee=e((()=>{M=`jpa/plan-usage`,N=`Plan usage`,P=`How your billable views compare to your plan's monthly limit.`,F={content:`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z(e){return()=>(h(`jetpack-stats/usage`,e),b.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{h(`jetpack-stats/usage`,null),b.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function B({vip:e}){return()=>(m(`jetpack-stats/usage`,ae),e&&(window.JetpackScriptData.site.host=`vip`),b.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{m(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,b.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function V(){return(0,U.jsx)(k,{attributes:{reportParams:y()}})}function H(e){return(0,U.jsx)(he,{...e,widgetType:me(R,j),renderModule:W,renderComponent:k,attributes:{reportParams:y(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),oe(),re(),pe(),de(),ge(),we(),Te(),Ee(),U=s(),ie(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},W=`storybook/plan-usage`,G={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},K={render:V,decorators:[x]},q={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:z(`loading`)},J={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:z(`error`)},Y={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:z(`empty`)},X={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:B({vip:!1})},Z={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:B({vip:!0})},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...ve},argTypes:{...fe}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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