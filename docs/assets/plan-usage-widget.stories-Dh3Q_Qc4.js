import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r,u as i}from"./build-module-DQ5lAs4a.js";import{n as a,t as o}from"./clsx-SUvPW2lx.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{j as c,t as l}from"./build-module-DMs68Vfd.js";import{n as u,oi as d}from"./build-module-C6Ow06jV.js";import{Fr as f,Mr as ee}from"./iframe-CW3xvqUb.js";import{R as te,W as p,t as ne,u as re}from"./build-module-JNPAD9ni.js";import{n as m,t as h}from"./src-DQmpJRyV.js";import{Gt as ie,Yn as g,ar as _,ut as v}from"./chart-tooltip-nADfm_Mf.js";import{C as y,E as ae,O as oe,S as se,T as b,k as ce,w as x}from"./report-metric-wrdm6Ope.js";import{t as le}from"./widget-state-BQUg2hcx.js";import{S as ue,b as de,t as S,x as C,y as w}from"./src-C53InzDV.js";var T,E,D,O,k,A,j,fe=e((()=>{T=`_root_1i6zp_1`,E=`_progress_1i6zp_9`,D=`_progressMeter_1i6zp_24`,O=`_isOverLimit_1i6zp_46`,k=`_progressLabel_1i6zp_55`,A=`_note_1i6zp_61`,j={root:T,progress:E,progressMeter:D,isOverLimit:O,progressLabel:k,note:A}}));function pe(e){return t(e>=2?`You've surpassed your limit for two consecutive periods already.`:`You've surpassed your limit the past month.`,`jetpack-premium-analytics`)}function me(){let e=f()?.site,t=e?.wpcom?.blog_id;return!e?.admin_url||!t?void 0:`${e.admin_url}admin.php?page=stats#!/stats/purchase/${t}?from=jetpack-premium-analytics&productType=commercial&redirect_uri=admin.php%3Fpage%3Djetpack-premium-analytics-wp-admin`}function he({limit:e,usage:r,daysToReset:a,overLimitMonths:s}){let l=r??0,u=l>=e,d=me();return(0,P.jsxs)(te,{className:j.root,direction:`column`,align:`stretch`,justify:`safe center`,gap:`md`,children:[(0,P.jsxs)(`div`,{className:o(j.progress,u&&j.isOverLimit),children:[(0,P.jsx)(`progress`,{className:j.progressMeter,value:Math.min(l,e),max:e,"aria-label":t(`Plan usage`,`jetpack-premium-analytics`)}),(0,P.jsx)(p,{className:j.progressLabel,variant:`body-sm`,children:i(t(`%1$s / %2$s views`,`jetpack-premium-analytics`),m(l,`number`,{decimals:0}),m(e,`number`,{decimals:0}))}),a!==void 0&&(0,P.jsx)(p,{className:j.progressLabel,variant:`body-sm`,children:i(n(`Restarts in %d day`,`Restarts in %d days`,a,`jetpack-premium-analytics`),a)})]}),(!!s||d)&&(0,P.jsxs)(p,{className:j.note,variant:`body-sm`,children:[s?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`strong`,{children:pe(s)}),` `]}):null,d&&c(t(`Do you want to increase your views limit? <a>Upgrade now</a>`,`jetpack-premium-analytics`),{a:(0,P.jsx)(re,{href:d})})]})]})}function M(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:a}=ie(),o=e?.views_limit,s=typeof o==`number`&&o>0,c=f()?.site?.host===`vip`;return(0,P.jsx)(le,{isLoading:n,isFetching:r,isError:!e&&i,isEmpty:!s,error:{description:t(`We couldn't load plan usage. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:a}]},empty:{icon:d,description:t(`Plan usage isn't available for your current plan.`,`jetpack-premium-analytics`)},children:s&&(0,P.jsx)(he,{limit:o,usage:e?.current_usage?.views_count,daysToReset:e?.current_usage?.days_to_reset,overLimitMonths:c?null:e?.over_limit_months})})}function N({attributes:e={}}){return(0,P.jsx)(ce,{attributes:e,children:(0,P.jsx)(M,{})})}var P,F=e((()=>{ee(),v(),h(),S(),l(),r(),u(),ne(),a(),fe(),P=s()})),I,L=e((()=>{r(),u(),I={name:`jpa/plan-usage`,title:t(`Plan usage`,`jetpack-premium-analytics`),icon:d,help:{content:t(`Billable views are your total views minus your two highest-traffic days each billing cycle, so big spikes won't count against your limit. You'll only need to upgrade if you exceed your limit for three cycles in a row.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/free-or-paid/`}]},attributes:[],example:{attributes:{}}}}));function R(e){return()=>(b(`jetpack-stats/usage`,e),_.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{b(`jetpack-stats/usage`,null),_.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function z({vip:e}){return()=>(x(`jetpack-stats/usage`,oe),e&&(window.JetpackScriptData.site.host=`vip`),_.removeQueries({queryKey:[`stats-app`,`plan-usage`]}),()=>{x(`jetpack-stats/usage`,null),e&&delete window.JetpackScriptData.site.host,_.removeQueries({queryKey:[`stats-app`,`plan-usage`]})})}function B({withComparison:e}){return(0,V.jsx)(N,{attributes:{reportParams:g(e)}})}function ge({withComparison:e,...t}){return(0,V.jsx)(de,{...t,widgetType:{...I,presentation:`framed`},renderModule:H,renderComponent:N,attributes:{reportParams:g(e)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ae(),se(),C(),F(),L(),V=s(),y(),window.JetpackScriptData={...window.JetpackScriptData,site:{...window.JetpackScriptData?.site,admin_url:`https://example.com/wp-admin/`,wpcom:{blog_id:123456789}}},H=`storybook/plan-usage`,U=e=>(0,V.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,V.jsx)(e,{})}),W={title:`Packages/Premium Analytics/Widgets/PlanUsage`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Plan usage" widget. Shows billable views used in the current billing cycle against the plan's limit as a horizontal usage meter — figures and days-until-reset inside the bar, an upgrade note below it — following the Stats "Plan usage" section. The usage endpoint is a point-in-time reading with no date range or comparison period.`}}}},G={render:B,args:{withComparison:!1},decorators:[U]},K={render:B,args:{withComparison:!0},decorators:[U],parameters:{docs:{description:{story:`The usage endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.`}}}},q={render:B,args:{withComparison:!1},tags:[`!autodocs`],decorators:[U],beforeEach:R(`loading`)},J={render:B,args:{withComparison:!1},tags:[`!autodocs`],decorators:[U],beforeEach:R(`error`)},Y={render:B,args:{withComparison:!1},tags:[`!autodocs`],decorators:[U],beforeEach:R(`empty`)},X={render:B,args:{withComparison:!1},tags:[`!autodocs`],decorators:[U],beforeEach:z({vip:!1})},Z={render:B,args:{withComparison:!1},tags:[`!autodocs`],decorators:[U],beforeEach:z({vip:!0})},Q={render:e=>(0,V.jsx)(ge,{...e}),args:{...w,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default state — the current-cycle usage gauge.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The usage endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.'
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Comparison state — comparison report params are supplied, but the usage
endpoint has no comparison data, so this renders identically to Default.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: false
  },
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageState('loading')
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageState('error')
}`,...J.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageState('empty')
}`,...Y.parameters?.docs?.source},description:{story:`Resolved without a usable limit — the forced empty response carries no
\`views_limit\`, the same shape legacy or unplanned sites report — so the widget
shows its unavailable state (the neutral percent glyph and "Plan usage isn't
available for your current plan.").`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forcePlanUsageOverLimit({
    vip: false
  })
}`,...X.parameters?.docs?.source},description:{story:`Over-limit state — usage has exceeded the limit for two consecutive cycles, so
the meter fills red and the bold over-limit warning precedes the upgrade note.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPlanUsage,
  args: {
    withComparison: false
  },
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
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Unavailable`,`OverLimit`,`OverLimitVip`,`WidgetDashboardWithWidget`]}))();export{G as Default,J as Error,q as Loading,X as OverLimit,Z as OverLimitVip,Y as Unavailable,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};