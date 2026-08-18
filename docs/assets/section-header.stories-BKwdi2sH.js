import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{sn as i,t as a}from"./src-DjYWc0xO.js";import{a as o,l as s,t as c}from"./src-CtNOjlNY.js";import{n as l,r as u,t as d}from"./story-interval-options-i3LAjYPy.js";import{r as f,t as p}from"./date-filters-panel-CYYUtr8N.js";import{t as m}from"./date-interval-dropdown-2STSsV6b.js";import{t as h}from"./date-year-filter-ahruTVlq.js";import{a as g,i as _,n as v,o as y,r as b,t as x}from"./section-header-BNsZ5NLN.js";function S(){let e=o(`last-30-days`,M);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function C(e,t){return e.range.from!==t.range.from||e.range.to!==t.range.to||e.presetId!==t.presetId}function w({onAppliedChange:e}){let t=S(),[n,r]=(0,k.useState)(t),[i,a]=(0,k.useState)(t),o=(0,k.useRef)(i);o.current=i;let[s,c]=(0,k.useState)(void 0),[l,f]=(0,k.useState)(void 0),m=(0,k.useCallback)(e=>u(l,d(e)),[l]),h=(0,k.useCallback)((e,t)=>{let n={range:e??o.current.range,presetId:t??o.current.presetId};o.current=n,a(n)},[]),g=(0,k.useCallback)(()=>{r(o.current),e({range:o.current.range,presetId:o.current.presetId,comparisonPresetId:s,interval:m(o.current.presetId)})},[e,s,m]),_=(0,k.useCallback)(()=>{o.current=n,a(n)},[n]),v=(0,k.useCallback)((t,r)=>{c(r),C(o.current,n)||e({range:n.range,presetId:n.presetId,comparisonPresetId:r,interval:m(n.presetId)})},[e,n,m]),y=(0,k.useCallback)(t=>{f(t),C(o.current,n)||e({range:n.range,presetId:n.presetId,comparisonPresetId:s,interval:t})},[e,n,s]),b=C(i,n),x=d(n.presetId);return(0,A.jsx)(p,{presetId:i.presetId,range:i.range,appliedPresetId:n.presetId,appliedRange:n.range,comparisonPresetId:s,withIntervalControl:!0,interval:u(l,x),intervalOptions:x,onChange:h,onComparisonChange:v,onIntervalChange:y,onApply:g,onCancel:_,canApply:b,timeZone:M})}function T(){let e=o(s,M);return{range:{from:e?.from,to:e?.to},presetId:s,interval:d(s)[0]}}function E({containerElement:e,onSelectionChange:t}){let[n,r]=(0,k.useState)(T),[a,o]=(0,k.useState)(void 0),s=d(n.presetId);return(0,A.jsxs)(i,{direction:`row`,align:`center`,gap:`sm`,children:[(0,A.jsx)(h,{value:n.presetId,onSelect:(e,n)=>{let i={range:e,presetId:n,interval:u(a,d(n))};r(i),t(i)},timeZone:M,containerElement:e}),(0,A.jsx)(m,{options:s,value:u(a,s),onChange:e=>{o(e),t({...n,interval:e})}})]})}function D({title:e,condenseOnScroll:t}){let[n,r]=(0,k.useState)(()=>{let e=S();return{range:e.range,presetId:e.presetId,interval:d(e.presetId)[0]}});return(0,A.jsx)(x,{title:e,subtitle:b(n),condenseOnScroll:t,children:(0,A.jsx)(w,{onAppliedChange:r})})}function O({title:e}){let[t,n]=(0,k.useState)(null),[r,i]=(0,k.useState)(T);return(0,A.jsx)(`div`,{ref:n,children:(0,A.jsx)(x,{title:e,subtitle:b(r),children:(0,A.jsx)(E,{containerElement:t,onSelectionChange:i})})})}var k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{c(),a(),k=e(n(),1),y(),f(),l(),g(),_(),v(),A=r(),j={title:`Packages/Premium Analytics/UI/SectionHeader`,component:x,tags:[`autodocs`],parameters:{docs:{description:{component:`Header for an analytics surface. A **title** names the section and a **subtitle** describes the active date configuration, on a row of its own so its length never costs the controls width.

The controls are a slot: the consumer passes them as \`children\`, keeps the date state, and derives the subtitle from the *applied* range, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}}},M=`America/New_York`,N={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsx)(D,{title:e})},P={args:{title:`Traffic for every site, network, and channel this account has ever measured`},render:({title:e})=>(0,A.jsx)(D,{title:e})},F={args:{title:`Insights`},render:({title:e})=>(0,A.jsx)(O,{title:e})},I={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsx)(`div`,{style:{inlineSize:520},children:(0,A.jsx)(D,{title:e})})},L=`--section-header-pin`,R={position:`absolute`,insetBlockStart:0,inlineSize:1,blockSize:40,visibility:`hidden`,pointerEvents:`none`,viewTimelineName:L,viewTimelineAxis:`block`},z={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsxs)(`div`,{style:{blockSize:320,overflowY:`auto`},children:[(0,A.jsx)(`div`,{style:{blockSize:48},children:`Something to scroll past, as the section tabs are.`}),(0,A.jsxs)(`div`,{style:{position:`relative`,timelineScope:L},children:[(0,A.jsx)(`div`,{style:R,"aria-hidden":`true`}),(0,A.jsx)(`div`,{style:{position:`sticky`,insetBlockStart:0,background:`var(--wpds-color-background-surface-neutral-strong)`},children:(0,A.jsx)(D,{title:e,condenseOnScroll:!0})}),(0,A.jsx)(`div`,{style:{blockSize:900}})]})]})},B={args:{title:`Site traffic`,subtitle:`Last 30 days`},render:({title:e,subtitle:t})=>(0,A.jsx)(x,{title:e,subtitle:t})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...N.parameters?.docs?.source},description:{story:`The **Traffic-like** instance: rolling presets, custom range, chart interval,
and comparison in the slot.

The subtitle derives from the *applied* configuration, so it holds still
while a range edit is staged and only moves on Apply. Picking a comparison or
an interval moves it right away, matching how those commit on their own.

The interval control is a glyph, so the subtitle is the only place its choice
is readable, and where the coercion shows: switching to a preset that
disallows the active bucket falls back to the finest one it allows.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Traffic for every site, network, and channel this account has ever measured'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...P.parameters?.docs?.source},description:{story:`A title long enough to overflow its track: it truncates with an ellipsis
instead of wrapping or compressing the date controls, which keep their
natural width for as long as the title stays above its floor.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Insights'
  },
  render: ({
    title
  }) => <YearSectionHeaderStory title={title} />
}`,...F.parameters?.docs?.source},description:{story:`The **Insights-like** instance: the year surface (all time plus calendar
years) and the chart interval in the slot.

Per the design's instances table, this surface carries *no comparison
control* but does carry the interval one. Its ranges are the longest the
dashboard offers, so its subtitle carries no length — the years are already
in the range itself — and names only the bucket.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <div style={{
    inlineSize: 520
  }}>
            <RollingSectionHeaderStory title={title} />
        </div>
}`,...I.parameters?.docs?.source},description:{story:`The same header in a box too narrow for two halves: the title and the
controls stack, and the controls read from the start edge.

The switch follows this wrapper's width, not the viewport's, so the story
shows it at any window size.`,...I.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <div style={{
    blockSize: 320,
    overflowY: 'auto'
  }}>
            <div style={{
      blockSize: 48
    }}>Something to scroll past, as the section tabs are.</div>
            <div style={{
      position: 'relative',
      timelineScope: PIN_TIMELINE
    }}>
                <div style={PIN_MARKER_STYLE} aria-hidden="true" />
                <div style={{
        position: 'sticky',
        insetBlockStart: 0,
        background: 'var(--wpds-color-background-surface-neutral-strong)'
      }}>
                    <RollingSectionHeaderStory title={title} condenseOnScroll />
                </div>
                <div style={{
        blockSize: 900
      }} />
            </div>
        </div>
}`,...z.parameters?.docs?.source},description:{story:`\`condenseOnScroll\` on a pinned header: scroll the box below, and once the
header clears the strip above it and pins, the subtitle fades and gives its
row back over the next 40px. Nothing condenses while the header is still on
its way up, and the effect reverses as you scroll back up. Browsers without
scroll-driven animations, surfaces that publish no pin marker, and readers
who asked for reduced motion all keep the subtitle in place.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic',
    subtitle: 'Last 30 days'
  },
  render: ({
    title,
    subtitle
  }) => <SectionHeader title={title} subtitle={subtitle} />
}`,...B.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...B.parameters?.docs?.description}}},V=[`Default`,`LongTitle`,`YearSurface`,`Stacked`,`CondensingOnScroll`,`WithoutControls`]}))();export{z as CondensingOnScroll,N as Default,P as LongTitle,I as Stacked,B as WithoutControls,F as YearSurface,V as __namedExportsOrder,j as default};