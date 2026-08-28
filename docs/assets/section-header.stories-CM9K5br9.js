import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{a as i,c as a,u as o}from"./build-module-p9Y1HebF.js";import{pn as s,t as c}from"./src-DPcva-6C.js";import{a as l,rt as u,t as d,u as f}from"./src-CYv4Ec0l.js";import{n as p,r as m,t as h}from"./story-interval-options-C59XhMNq.js";import{r as g,t as _}from"./date-filters-panel-7qg-_Vuj.js";import{t as v}from"./date-interval-dropdown-DvOt94x7.js";import{t as y}from"./date-year-filter-Bpm_IsZ1.js";import{a as b,i as x,n as S,o as C,r as w,t as T}from"./section-header-BMgZNymE.js";function E(){let e=l(`last-30-days`,I);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function D(e,t){return e.range.from!==t.range.from||e.range.to!==t.range.to||e.presetId!==t.presetId}function O(e,t){return t?u(e,t):void 0}function k({onAppliedChange:e}){let t=E(),[n,r]=(0,P.useState)(t),[i,a]=(0,P.useState)(t),o=(0,P.useRef)(i);o.current=i;let[s,c]=(0,P.useState)(void 0),[l,u]=(0,P.useState)(void 0),d=(0,P.useCallback)(e=>m(l,h(e)),[l]),f=(0,P.useCallback)((e,t)=>{let n={range:e??o.current.range,presetId:t??o.current.presetId};o.current=n,a(n)},[]),p=(0,P.useCallback)(()=>{r(o.current),e({range:o.current.range,presetId:o.current.presetId,comparisonPresetId:s,comparisonRange:O(o.current.range,s),interval:d(o.current.presetId)})},[e,s,d]),g=(0,P.useCallback)(()=>{o.current=n,a(n)},[n]),v=(0,P.useCallback)((t,r)=>{c(r),D(o.current,n)||e({range:n.range,presetId:n.presetId,comparisonPresetId:r,comparisonRange:O(n.range,r),interval:d(n.presetId)})},[e,n,d]),y=(0,P.useCallback)(t=>{u(t),D(o.current,n)||e({range:n.range,presetId:n.presetId,comparisonPresetId:s,comparisonRange:O(n.range,s),interval:t})},[e,n,s]),b=D(i,n),x=h(n.presetId);return(0,F.jsx)(_,{presetId:i.presetId,range:i.range,appliedPresetId:n.presetId,appliedRange:n.range,comparisonPresetId:s,withIntervalControl:!0,interval:m(l,x),intervalOptions:x,onChange:f,onComparisonChange:v,onIntervalChange:y,onApply:p,onCancel:g,canApply:b,timeZone:I})}function A(){let e=l(f,I);return{range:{from:e?.from,to:e?.to},presetId:f,interval:h(f)[0]}}function j({containerElement:e,onSelectionChange:t}){let[n,r]=(0,P.useState)(A),[i,a]=(0,P.useState)(void 0),o=h(n.presetId);return(0,F.jsxs)(s,{direction:`row`,align:`center`,gap:`sm`,children:[(0,F.jsx)(y,{value:n.presetId,onSelect:(e,n)=>{let a={range:e,presetId:n,interval:m(i,h(n))};r(a),t(a)},timeZone:I,containerElement:e}),(0,F.jsx)(v,{options:o,value:m(i,o),onChange:e=>{a(e),t({...n,interval:e})}})]})}function M({title:e,condenseOnScroll:t}){let[n,r]=(0,P.useState)(()=>{let e=E();return{range:e.range,presetId:e.presetId,interval:h(e.presetId)[0]}});return(0,F.jsx)(T,{title:e,subtitle:w(n),condenseOnScroll:t,children:(0,F.jsx)(k,{onAppliedChange:r})})}function N({title:e}){let[t,n]=(0,P.useState)(null),[r,i]=(0,P.useState)(A);return(0,F.jsx)(`div`,{ref:n,children:(0,F.jsx)(T,{title:e,subtitle:w(r),children:(0,F.jsx)(j,{containerElement:t,onSelectionChange:i})})})}var P,F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{d(),c(),a(),P=e(n(),1),C(),g(),p(),b(),x(),S(),F=r(),I=`America/New_York`,L={title:`Packages/Premium Analytics/UI/SectionHeader`,component:T,tags:[`autodocs`],parameters:{docs:{description:{component:`Header for an analytics surface. A **title** names the section and a **subtitle** describes the active date configuration, on a row of its own so its length never costs the controls width.

The controls are a slot: the consumer passes them as \`children\`, keeps the date state, and derives the subtitle from the *applied* range, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}},beforeEach:()=>{let e=i();return o({...e,timezone:{...e.timezone,string:I}}),()=>o(e)}},R={args:{title:`Site traffic`},render:({title:e})=>(0,F.jsx)(M,{title:e})},z={args:{title:`Traffic for every site, network, and channel this account has ever measured`},render:({title:e})=>(0,F.jsx)(M,{title:e})},B={args:{title:`Insights`},render:({title:e})=>(0,F.jsx)(N,{title:e})},V={args:{title:`Site traffic`},render:({title:e})=>(0,F.jsx)(`div`,{style:{inlineSize:520},children:(0,F.jsx)(M,{title:e})})},H=`--section-header-pin`,U={position:`absolute`,insetBlockStart:0,inlineSize:1,blockSize:40,visibility:`hidden`,pointerEvents:`none`,viewTimelineName:H,viewTimelineAxis:`block`},W={args:{title:`Site traffic`},render:({title:e})=>(0,F.jsxs)(`div`,{style:{blockSize:320,overflowY:`auto`},children:[(0,F.jsx)(`div`,{style:{blockSize:48},children:`Something to scroll past, as the section tabs are.`}),(0,F.jsxs)(`div`,{style:{position:`relative`,timelineScope:H},children:[(0,F.jsx)(`div`,{style:U,"aria-hidden":`true`}),(0,F.jsx)(`div`,{style:{position:`sticky`,insetBlockStart:0,background:`var(--wpds-color-background-surface-neutral-strong)`},children:(0,F.jsx)(M,{title:e,condenseOnScroll:!0})}),(0,F.jsx)(`div`,{style:{blockSize:900}})]})]})},G={args:{title:`Site traffic`,subtitle:`Last 30 days`},render:({title:e,subtitle:t})=>(0,F.jsx)(T,{title:e,subtitle:t})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...R.parameters?.docs?.source},description:{story:`The **Traffic-like** instance: rolling presets, custom range, chart interval,
and comparison in the slot.

The subtitle derives from the *applied* configuration, so it holds still
while a range edit is staged and only moves on Apply. Picking a comparison or
an interval moves it right away, matching how those commit on their own.

The interval control is a glyph, so the subtitle is the only place its choice
is readable, and where the coercion shows: switching to a preset that
disallows the active bucket falls back to the finest one it allows.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Traffic for every site, network, and channel this account has ever measured'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...z.parameters?.docs?.source},description:{story:`A title long enough to overflow its track: it truncates with an ellipsis
instead of wrapping or compressing the date controls, which keep their
natural width for as long as the title stays above its floor.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Insights'
  },
  render: ({
    title
  }) => <YearSectionHeaderStory title={title} />
}`,...B.parameters?.docs?.source},description:{story:`The **Insights-like** instance: the year surface (all time plus calendar
years) and the chart interval in the slot.

Per the design's instances table, this surface carries *no comparison
control* but does carry the interval one. Its ranges are the longest the
dashboard offers, so its subtitle carries no length — the years are already
in the range itself — and names only the bucket.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`The same header in a box too narrow for two halves: the title and the
controls stack, and the controls read from the start edge.

The switch follows this wrapper's width, not the viewport's, so the story
shows it at any window size.`,...V.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`\`condenseOnScroll\` on a pinned header: scroll the box below, and once the
header clears the strip above it and pins, the subtitle fades and gives its
row back over the next 40px. Nothing condenses while the header is still on
its way up, and the effect reverses as you scroll back up. Browsers without
scroll-driven animations, surfaces that publish no pin marker, and readers
who asked for reduced motion all keep the subtitle in place.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic',
    subtitle: 'Last 30 days'
  },
  render: ({
    title,
    subtitle
  }) => <SectionHeader title={title} subtitle={subtitle} />
}`,...G.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...G.parameters?.docs?.description}}},K=[`Default`,`LongTitle`,`YearSurface`,`Stacked`,`CondensingOnScroll`,`WithoutControls`]}))();export{W as CondensingOnScroll,R as Default,z as LongTitle,V as Stacked,G as WithoutControls,B as YearSurface,K as __namedExportsOrder,L as default};