import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r,u as i}from"./build-module-2QZQpBH2.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{ai as c,ku as l,t as u,zu as ee}from"./build-module-DNhkEVJn.js";import{At as te,Hn as d,Mn as ne}from"./build-module-DmDwTLpf2.js";import{m as re}from"./hooks-DH3-JNWL.js";import{Qa as f,Ya as ie}from"./iframe-D5NbBOl7.js";import{t as ae}from"./src-CLuBpAvm.js";import{n as p,t as oe}from"./src-CSuWBKc0.js";import{Ln as m,cn as h,nt as se,t as g}from"./src-DpgL0FdG.js";import{m as ce,t as le}from"./data-B0e7dRpf.js";import{n as ue,o as _,r as de,s as v}from"./register-report-mocks-DtgScvB3.js";import{t as fe}from"./widget-state-DPMTxYWG.js";import{t as pe}from"./src-Acb0qbNd.js";import{a as me,d as he,f as ge,i as y,n as _e,p as ve,r as b,u as ye}from"./with-widget-canvas-CUhGZWiM.js";var x,S,C,w,T,E,D,be=e((()=>{x=`_root_1i6zp_1`,S=`_progress_1i6zp_9`,C=`_progressMeter_1i6zp_24`,w=`_isOverLimit_1i6zp_46`,T=`_progressLabel_1i6zp_55`,E=`_note_1i6zp_61`,D={root:x,progress:S,progressMeter:C,isOverLimit:w,progressLabel:T,note:E}}));function xe(e){return t(e>=2?`You've surpassed your limit for two consecutive periods already.`:`You've surpassed your limit the past month.`,`jetpack-premium-analytics-pkg`)}function Se(){let e=f()?.site,t=e?.wpcom?.blog_id;return!e?.admin_url||!t?void 0:`${e.admin_url}admin.php?page=stats#!/stats/purchase/${t}?from=jetpack-premium-analytics&productType=commercial&redirect_uri=admin.php%3Fpage%3Djetpack-premium-analytics-wp-admin`}function Ce({limit:e,usage:r,daysToReset:a,overLimitMonths:s}){let c=r??0,l=c>=e,u=Se();return(0,A.jsxs)(te,{className:D.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,A.jsxs)(`div`,{className:o(D.progress,l&&D.isOverLimit),children:[(0,A.jsx)(`progress`,{className:D.progressMeter,value:Math.min(c,e),max:e,"aria-label":t(`Plan usage`,`jetpack-premium-analytics-pkg`)}),(0,A.jsx)(d,{className:D.progressLabel,variant:`body-sm`,children:i(t(`%1$s / %2$s views`,`jetpack-premium-analytics-pkg`),p(c,`number`,{decimals:0}),p(e,`number`,{decimals:0}))}),a!==void 0&&(0,A.jsx)(d,{className:D.progressLabel,variant:`body-sm`,children:i(n(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics-pkg`),a)})]}),(!!s||u)&&(0,A.jsxs)(d,{className:D.note,variant:`body-sm`,children:[s?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`strong`,{children:xe(s)}),` `]}):null,u&&ee(t(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics-pkg`),{a:(0,A.jsx)(ne,{href:u})})]})]})}function O(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:a}=se(),o=e?.views_limit,s=typeof o==`number`&&o>0,l=f()?.site?.host===`vip`;return(0,A.jsx)(fe,{isLoading:n,isFetching:r,isError:!e&&i,isEmpty:!s,error:{description:t(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:c,description:t(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics-pkg`)},children:s&&(0,A.jsx)(Ce,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:l?null:e?.over_limit_months})})}function k({attributes:e={}}){return(0,A.jsx)(re,{attributes:e,children:(0,A.jsx)(O,{})})}var A,we=e((()=>{ie(),g(),oe(),pe(),l(),r(),u(),ae(),a(),be(),A=s()})),j,Te=e((()=>{u(),j={icon:c,attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,Ee=e((()=>{M=`jpa/plan-usage`,N=`Plan usage`,P=`How your billable views compare to your plan's monthly limit.`,F={content:`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z(e){return()=>(v(`jetpack-stats/usage`,e),m.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{v(`jetpack-stats/usage`,null),m.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function B({vip:e}){return()=>(_(`jetpack-stats/usage`,ce),e&&(window.JetpackScriptData.site.host=`vip`),m.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{_(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,m.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function V(){return(0,U.jsx)(k,{attributes:{reportParams:h()}})}function H(e){return(0,U.jsx)(he,{...e,widgetType:y(R,j),renderModule:W,renderComponent:k,attributes:{reportParams:h(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),le(),ue(),ge(),me(),_e(),we(),Te(),Ee(),U=s(),de(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},W=`storybook/plan-usage`,G={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},K={render:V,decorators:[b]},q={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:z(`loading`)},J={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:z(`error`)},Y={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:z(`empty`)},X={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:B({vip:!1})},Z={render:V,tags:[`!autodocs`],decorators:[b],beforeEach:B({vip:!0})},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...ye},argTypes:{...ve}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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