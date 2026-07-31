import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{i,t as a}from"./src-Ddlvl-_o.js";import{t as o}from"./date-filters-panel-1FmQ3i6d.js";import{t as s}from"./date-year-filter-CwxeJBsT.js";import{i as c,n as l,r as u,t as d}from"./section-header-AKf_sIZN.js";function f(){let e=i(`last-30-days`,b);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function p({containerElement:e}){let t=f(),[n,r]=(0,_.useState)(t),[i,a]=(0,_.useState)(t),s=(0,_.useRef)(i);s.current=i;let[c,l]=(0,_.useState)(void 0),u=(0,_.useCallback)((e,t)=>{let n={range:e??s.current.range,presetId:t??s.current.presetId};s.current=n,a(n)},[]),d=(0,_.useCallback)(()=>{r(s.current)},[]),p=(0,_.useCallback)(()=>{s.current=n,a(n)},[n]),m=(0,_.useCallback)((e,t)=>{l(t)},[]),h=i.range.from!==n.range.from||i.range.to!==n.range.to||i.presetId!==n.presetId;return(0,v.jsx)(o,{presetId:i.presetId,range:i.range,appliedPresetId:n.presetId,appliedRange:n.range,comparisonPresetId:c,onChange:u,onComparisonChange:m,onApply:d,onCancel:p,canApply:h,timeZone:b,containerElement:e})}function m({containerElement:e}){let[t,n]=(0,_.useState)(`all-time`);return(0,v.jsx)(s,{value:t,onSelect:(e,t)=>n(t),timeZone:b,containerElement:e})}function h({title:e,subtitle:t}){let[n,r]=(0,_.useState)(null);return(0,v.jsx)(`div`,{ref:r,children:(0,v.jsx)(d,{title:e,subtitle:t,children:(0,v.jsx)(p,{containerElement:n})})})}function g({title:e,subtitle:t}){let[n,r]=(0,_.useState)(null);return(0,v.jsx)(`div`,{ref:r,children:(0,v.jsx)(d,{title:e,subtitle:t,children:(0,v.jsx)(m,{containerElement:n})})})}var _,v,y,b,x,S,C,w;t((()=>{a(),_=e(n(),1),c(),u(),l(),v=r(),y={title:`Packages/Premium Analytics/UI/SectionHeader`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`Two-halves header for an analytics surface. The left half anchors the instance: a **title** naming the section plus a **subtitle** describing the active date configuration.

The right half is a slot: the consumer passes the date controls as \`children\`, keeps the date state, and derives the subtitle from the *applied* range, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}}},b=`America/New_York`,x={args:{title:`Site traffic`,subtitle:`Last 30 days`},render:({title:e,subtitle:t})=>(0,v.jsx)(h,{title:e,subtitle:t})},S={args:{title:`Insights`,subtitle:`All time`},render:({title:e,subtitle:t})=>(0,v.jsx)(g,{title:e,subtitle:t})},C={args:{title:`Site traffic`,subtitle:`Last 30 days`},render:({title:e,subtitle:t})=>(0,v.jsx)(d,{title:e,subtitle:t})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic',
    subtitle: 'Last 30 days'
  },
  render: ({
    title,
    subtitle
  }) => <RollingSectionHeaderStory title={title} subtitle={subtitle} />
}`,...x.parameters?.docs?.source},description:{story:`The **Traffic-like** instance: rolling presets, custom range, and comparison
in the slot.

The subtitle is a static arg here; in product it derives from the *applied*
preset/range and, once the interval control lands, the active interval.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Insights',
    subtitle: 'All time'
  },
  render: ({
    title,
    subtitle
  }) => <YearSectionHeaderStory title={title} subtitle={subtitle} />
}`,...S.parameters?.docs?.source},description:{story:`The **Insights-like** instance: the year surface (all time plus calendar
years) in the slot.

Per the design's instances table, this surface carries *no comparison
control*.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic',
    subtitle: 'Last 30 days'
  },
  render: ({
    title,
    subtitle
  }) => <SectionHeader title={title} subtitle={subtitle} />
}`,...C.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...C.parameters?.docs?.description}}},w=[`Default`,`YearSurface`,`WithoutControls`]}))();export{x as Default,C as WithoutControls,S as YearSurface,w as __namedExportsOrder,y as default};