import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r,u as i}from"./build-module-2QZQpBH2.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{Nu as c,Uu as ee,si as l,t as u}from"./build-module-Cm3Kd3py.js";import{At as te,Hn as d,Mn as f}from"./build-module-D2aEjqke.js";import{t as p}from"./src-CmIFFHLz.js";import{n as m,t as h}from"./src-J-7rF5AD.js";import{Ln as g,Sn as _,t as ne}from"./src-2a88cYSx.js";import{N as re,P as ie,h as ae,y as oe}from"./charts-provider-Bk38zIJq.js";import{m as se,t as ce}from"./data-BM9h4Sif.js";import{n as le,o as v,r as ue,s as y}from"./register-report-mocks-iviv8n0s.js";import{t as de}from"./widget-state-BlUbrcDn.js";import{t as fe}from"./src-ZGXLokk_.js";import{a as pe,g as me,h as he,i as ge,m as _e,n as ve,p as ye,r as b}from"./with-widget-canvas-Agk44m9m.js";var x,S,C,w,T,E,D,be=e((()=>{x=`_root_1i6zp_1`,S=`_progress_1i6zp_9`,C=`_progressMeter_1i6zp_24`,w=`_isOverLimit_1i6zp_46`,T=`_progressLabel_1i6zp_55`,E=`_note_1i6zp_61`,D={root:x,progress:S,progressMeter:C,isOverLimit:w,progressLabel:T,note:E}}));function xe({limit:e,usage:r,daysToReset:a,overLimitMonths:s}){let c=r??0,l=c>=e,u=ie(),p=re(s);return(0,k.jsxs)(te,{className:D.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,k.jsxs)(`div`,{className:o(D.progress,l&&D.isOverLimit),children:[(0,k.jsx)(`progress`,{className:D.progressMeter,value:Math.min(c,e),max:e,"aria-label":t(`Plan usage`,`jetpack-premium-analytics-pkg`)}),(0,k.jsx)(d,{className:D.progressLabel,variant:`body-sm`,children:i(t(`%1$s / %2$s views`,`jetpack-premium-analytics-pkg`),m(c,`number`,{decimals:0}),m(e,`number`,{decimals:0}))}),a!==void 0&&(0,k.jsx)(d,{className:D.progressLabel,variant:`body-sm`,children:i(n(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics-pkg`),a)})]}),(p||u)&&(0,k.jsxs)(d,{className:D.note,variant:`body-sm`,children:[p&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`strong`,{children:p}),` `]}),u&&ee(t(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics-pkg`),{a:(0,k.jsx)(f,{href:u})})]})]})}function Se(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:a,limit:o,overLimitMonths:s}=ae();return(0,k.jsx)(de,{isLoading:n,isFetching:r,isError:!e&&i,isEmpty:!o,error:{description:t(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a}]},empty:{icon:l,description:t(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics-pkg`)},children:o!==null&&(0,k.jsx)(xe,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:s})})}function O({attributes:e={}}){return(0,k.jsx)(oe,{attributes:e,children:(0,k.jsx)(Se,{})})}var k,A=e((()=>{h(),fe(),c(),r(),u(),p(),a(),be(),k=s()})),j,Ce=e((()=>{j={attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,z,we=e((()=>{M=`jpa/plan-usage`,N=`jpa/percent`,P=`Plan usage`,F=`How your billable views compare to your plan's monthly limit.`,I={content:`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e){return()=>(y(`jetpack-stats/usage`,e),g.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{y(`jetpack-stats/usage`,null),g.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function V({vip:e}){return()=>(v(`jetpack-stats/usage`,se),e&&(window.JetpackScriptData.site.host=`vip`),g.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{v(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,g.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function H(){return(0,U.jsx)(O,{attributes:{reportParams:_()}})}function Te(e){return(0,U.jsx)(_e,{...e,widgetType:ge(z,j),renderModule:W,renderComponent:O,attributes:{reportParams:_(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ne(),ce(),le(),he(),pe(),ve(),A(),Ce(),we(),U=s(),ue(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},W=`storybook/plan-usage`,G={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},K={render:H,decorators:[b]},q={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:B(`loading`)},J={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:B(`error`)},Y={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:B(`empty`)},X={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:V({vip:!1})},Z={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:V({vip:!0})},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{...ye},argTypes:{...me}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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