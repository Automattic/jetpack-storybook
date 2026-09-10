import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,r,t as i}from"./build-module-yGZutq_9.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{Nu as c,Uu as ee,li as l,t as u}from"./build-module-zwSmKorH.js";import{Mt as d,R as te,bt as f}from"./build-module-CRH4RouM.js";import{y as ne}from"./wp-date-settings-DLNINDS7.js";import{Qa as re,to as p}from"./iframe-BYanx7i4.js";import{t as ie}from"./src-BqCkdrF5.js";import{n as m,t as ae}from"./src-Cl_EpdMl.js";import{Cn as h,Z as oe,en as g,i as _}from"./date-filters-panel-COo45nW1.js";import{J as se,Q as ce,X as v,Z as y,et as le,q as ue}from"./report-metric-DR_MK8Ct.js";import{t as de}from"./widget-state-D9eoMxI9.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as ve,w as ye,x as b}from"./src-BD8QFf1n.js";var x,S,C,w,T,E,D,be=e((()=>{x=`_root_1i6zp_1`,S=`_progress_1i6zp_9`,C=`_progressMeter_1i6zp_24`,w=`_isOverLimit_1i6zp_46`,T=`_progressLabel_1i6zp_55`,E=`_note_1i6zp_61`,D={root:x,progress:S,progressMeter:C,isOverLimit:w,progressLabel:T,note:E}}));function xe(e){return n(e>=2?`You've surpassed your limit for two consecutive periods already.`:`You've surpassed your limit the past month.`,`jetpack-premium-analytics-pkg`)}function Se(){let e=p()?.site,t=e?.wpcom?.blog_id;return!e?.admin_url||!t?void 0:`${e.admin_url}admin.php?page=stats#!/stats/purchase/${t}?from=jetpack-premium-analytics&productType=commercial&redirect_uri=admin.php%3Fpage%3Djetpack-premium-analytics-wp-admin`}function Ce({limit:e,usage:i,daysToReset:a,overLimitMonths:s}){let c=i??0,l=c>=e,u=Se();return(0,A.jsxs)(f,{className:D.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,A.jsxs)(`div`,{className:o(D.progress,l&&D.isOverLimit),children:[(0,A.jsx)(`progress`,{className:D.progressMeter,value:Math.min(c,e),max:e,"aria-label":n(`Plan usage`,`jetpack-premium-analytics-pkg`)}),(0,A.jsx)(d,{className:D.progressLabel,variant:`body-sm`,children:t(n(`%1$s / %2$s views`,`jetpack-premium-analytics-pkg`),m(c,`number`,{decimals:0}),m(e,`number`,{decimals:0}))}),a!==void 0&&(0,A.jsx)(d,{className:D.progressLabel,variant:`body-sm`,children:t(r(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics-pkg`),a)})]}),(!!s||u)&&(0,A.jsxs)(d,{className:D.note,variant:`body-sm`,children:[s?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`strong`,{children:xe(s)}),` `]}):null,u&&ee(n(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics-pkg`),{a:(0,A.jsx)(te,{href:u})})]})]})}function O(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:a}=oe(),o=e?.views_limit,s=typeof o==`number`&&o>0,c=p()?.site?.host===`vip`;return(0,A.jsx)(de,{isLoading:t,isFetching:r,isError:!e&&i,isEmpty:!s,error:{description:n(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:l,description:n(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics-pkg`)},children:s&&(0,A.jsx)(Ce,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:c?null:e?.over_limit_months})})}function k({attributes:e={}}){return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(O,{})})}var A,we=e((()=>{re(),_(),ae(),ve(),c(),i(),u(),ie(),a(),be(),A=s()})),j,Te=e((()=>{u(),j={icon:l,attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,Ee=e((()=>{M=`jpa/plan-usage`,N=`Plan usage`,P=`How your billable views compare to your plan's monthly limit.`,F={content:`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z(e){return()=>(y(`jetpack-stats/usage`,e),h.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{y(`jetpack-stats/usage`,null),h.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function B({vip:e}){return()=>(v(`jetpack-stats/usage`,le),e&&(window.JetpackScriptData.site.host=`vip`),h.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{v(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,h.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function V(){return(0,U.jsx)(k,{attributes:{reportParams:g()}})}function H(e){return(0,U.jsx)(ge,{...e,widgetType:he(R,j),renderModule:W,renderComponent:k,attributes:{reportParams:g(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ce(),ue(),me(),fe(),_e(),we(),Te(),Ee(),U=s(),se(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},W=`storybook/plan-usage`,G={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},K={render:V,decorators:[b]},q={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:z(`loading`)},J={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:z(`error`)},Y={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:z(`empty`)},X={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:B({vip:!1})},Z={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:B({vip:!0})},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...ye},argTypes:{...pe}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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