import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{a as i,l as a,t as o}from"./src-B6ulckTz.js";import{t as s}from"./date-filters-panel-gGXD0vrz.js";import{t as c}from"./date-year-filter-B7Xk-any.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./section-header-aJfvUfXL.js";function h(){let e=i(`last-30-days`,w);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function g(e,t){return e.range.from!==t.range.from||e.range.to!==t.range.to||e.presetId!==t.presetId}function _({containerElement:e,onAppliedChange:t}){let n=h(),[r,i]=(0,x.useState)(n),[a,o]=(0,x.useState)(n),c=(0,x.useRef)(a);c.current=a;let[l,u]=(0,x.useState)(void 0),d=(0,x.useCallback)((e,t)=>{let n={range:e??c.current.range,presetId:t??c.current.presetId};c.current=n,o(n)},[]),f=(0,x.useCallback)(()=>{i(c.current),t({range:c.current.range,presetId:c.current.presetId,comparisonPresetId:l})},[t,l]),p=(0,x.useCallback)(()=>{c.current=r,o(r)},[r]),m=(0,x.useCallback)((e,n)=>{u(n),g(c.current,r)||t({range:r.range,presetId:r.presetId,comparisonPresetId:n})},[t,r]),_=g(a,r);return(0,S.jsx)(s,{presetId:a.presetId,range:a.range,appliedPresetId:r.presetId,appliedRange:r.range,comparisonPresetId:l,onChange:d,onComparisonChange:m,onApply:f,onCancel:p,canApply:_,timeZone:w,containerElement:e})}function v({containerElement:e,onSelectionChange:t}){let[n,r]=(0,x.useState)(a);return(0,S.jsx)(c,{value:n,onSelect:(e,n)=>{r(n),t({range:e,presetId:n})},timeZone:w,containerElement:e})}function y({title:e}){let[t,n]=(0,x.useState)(null),[r,i]=(0,x.useState)(()=>{let e=h();return{range:e.range,presetId:e.presetId}});return(0,S.jsx)(`div`,{ref:n,children:(0,S.jsx)(m,{title:e,subtitle:p(r),children:(0,S.jsx)(_,{containerElement:t,onAppliedChange:i})})})}function b({title:e}){let[t,n]=(0,x.useState)(null),[r,o]=(0,x.useState)(()=>{let e=i(a,w);return{range:{from:e?.from,to:e?.to},presetId:a}});return(0,S.jsx)(`div`,{ref:n,children:(0,S.jsx)(m,{title:e,subtitle:p(r),children:(0,S.jsx)(v,{containerElement:t,onSelectionChange:o})})})}var x,S,C,w,T,E,D,O;t((()=>{o(),x=e(n(),1),f(),l(),u(),d(),S=r(),C={title:`Packages/Premium Analytics/UI/SectionHeader`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:`Two-halves header for an analytics surface. The left half anchors the instance: a **title** naming the section plus a **subtitle** describing the active date configuration.

The right half is a slot: the consumer passes the date controls as \`children\`, keeps the date state, and derives the subtitle from the *applied* range, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}}},w=`America/New_York`,T={args:{title:`Site traffic`},render:({title:e})=>(0,S.jsx)(y,{title:e})},E={args:{title:`Insights`},render:({title:e})=>(0,S.jsx)(b,{title:e})},D={args:{title:`Site traffic`,subtitle:`Last 30 days`},render:({title:e,subtitle:t})=>(0,S.jsx)(m,{title:e,subtitle:t})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...T.parameters?.docs?.source},description:{story:`The **Traffic-like** instance: rolling presets, custom range, and comparison
in the slot.

The subtitle derives from the *applied* configuration, so it holds still
while a range edit is staged and only moves on Apply. Picking a comparison
moves it right away, matching how comparison commits on its own. Once the
interval control lands it will name the active interval too.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Insights'
  },
  render: ({
    title
  }) => <YearSectionHeaderStory title={title} />
}`,...E.parameters?.docs?.source},description:{story:`The **Insights-like** instance: the year surface (all time plus calendar
years) in the slot.

Per the design's instances table, this surface carries *no comparison
control*. Its multi-year ranges are what the subtitle describes in years
rather than an unreadable month count.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic',
    subtitle: 'Last 30 days'
  },
  render: ({
    title,
    subtitle
  }) => <SectionHeader title={title} subtitle={subtitle} />
}`,...D.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...D.parameters?.docs?.description}}},O=[`Default`,`YearSurface`,`WithoutControls`]}))();export{T as Default,D as WithoutControls,E as YearSurface,O as __namedExportsOrder,C as default};