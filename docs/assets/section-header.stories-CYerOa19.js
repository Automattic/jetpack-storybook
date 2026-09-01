import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{a as i,c as a,u as o}from"./build-module-p9Y1HebF.js";import{pn as s,t as c}from"./src-uPr0Y33k.js";import{i as l,l as u,t as d}from"./src-DvRpjVz4.js";import{n as f,r as p,t as m}from"./story-interval-options-C59XhMNq.js";import{r as h,t as g}from"./date-filters-panel-Xb4TfMTK.js";import{t as _}from"./date-interval-dropdown-DpcfPwS_.js";import{t as v}from"./date-year-filter-DoKgBo3k.js";import{i as y,n as b,r as x,t as S}from"./section-header-DsH-pELf.js";function C(){let e=l(`last-30-days`,j);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function w(e,t){return e.range.from!==t.range.from||e.range.to!==t.range.to||e.presetId!==t.presetId}function T(){let e=C(),[t,n]=(0,k.useState)(e),[r,i]=(0,k.useState)(e),a=(0,k.useRef)(r);a.current=r;let[o,s]=(0,k.useState)(void 0),[c,l]=(0,k.useState)(void 0),u=(0,k.useCallback)((e,t)=>{let n={range:e??a.current.range,presetId:t??a.current.presetId};a.current=n,i(n)},[]),d=(0,k.useCallback)(()=>{n(a.current)},[]),f=(0,k.useCallback)(()=>{a.current=t,i(t)},[t]),h=(0,k.useCallback)((e,t)=>{s(t)},[]),_=m(r.presetId);return(0,A.jsx)(g,{presetId:r.presetId,range:r.range,appliedPresetId:t.presetId,appliedRange:t.range,comparisonPresetId:o,withIntervalControl:!0,interval:p(c,_),intervalOptions:_,onChange:u,onComparisonChange:h,onIntervalChange:l,onApply:d,onCancel:f,canApply:w(r,t),timeZone:j})}function E({containerElement:e}){let[t,n]=(0,k.useState)(u),[r,i]=(0,k.useState)(void 0),a=m(t);return(0,A.jsxs)(s,{direction:`row`,align:`center`,gap:`sm`,children:[(0,A.jsx)(v,{value:t,onSelect:(e,t)=>n(t),timeZone:j,containerElement:e}),(0,A.jsx)(_,{options:a,value:p(r,a),onChange:i})]})}function D({title:e,condenseOnScroll:t}){return(0,A.jsx)(S,{title:e,condenseOnScroll:t,children:(0,A.jsx)(T,{})})}function O({title:e}){let[t,n]=(0,k.useState)(null);return(0,A.jsx)(`div`,{ref:n,children:(0,A.jsx)(S,{title:e,children:(0,A.jsx)(E,{containerElement:t})})})}var k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{d(),c(),a(),k=e(n(),1),y(),h(),f(),x(),b(),A=r(),j=`America/New_York`,M={title:`Packages/Premium Analytics/UI/SectionHeader`,component:S,tags:[`autodocs`],parameters:{docs:{description:{component:`Header for an analytics surface: a **title** names the section, and the date controls sit beside it on the same row.

The controls are a slot: the consumer passes them as \`children\` and keeps the date state, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}},beforeEach:()=>{let e=i();return o({...e,timezone:{...e.timezone,string:j}}),()=>o(e)}},N={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsx)(D,{title:e})},P={args:{title:`Traffic for every site, network, and channel this account has ever measured`},render:({title:e})=>(0,A.jsx)(D,{title:e})},F={args:{title:`Insights`},render:({title:e})=>(0,A.jsx)(O,{title:e})},I={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsx)(`div`,{style:{inlineSize:520},children:(0,A.jsx)(D,{title:e})})},L=`--section-header-pin`,R={position:`absolute`,insetBlockStart:0,inlineSize:1,blockSize:40,visibility:`hidden`,pointerEvents:`none`,viewTimelineName:L,viewTimelineAxis:`block`},z={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsxs)(`div`,{style:{blockSize:320,overflowY:`auto`},children:[(0,A.jsx)(`div`,{style:{blockSize:48},children:`Something to scroll past, as the section tabs are.`}),(0,A.jsxs)(`div`,{style:{position:`relative`,timelineScope:L},children:[(0,A.jsx)(`div`,{style:R,"aria-hidden":`true`}),(0,A.jsx)(`div`,{style:{position:`sticky`,insetBlockStart:0,background:`var(--wpds-color-background-surface-neutral-strong)`},children:(0,A.jsx)(D,{title:e,condenseOnScroll:!0})}),(0,A.jsx)(`div`,{style:{blockSize:900}})]})]})},B={args:{title:`Site traffic`},render:({title:e})=>(0,A.jsx)(S,{title:e})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...N.parameters?.docs?.source},description:{story:`The **Traffic-like** instance: rolling presets, custom range, chart interval,
and comparison in the slot.

Range edits are staged and land on Apply; a comparison or interval pick
commits on its own, the way \`useReportDateFilters\` has it. Switching to a
preset that disallows the active bucket falls back to the finest one it
allows.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
control* but does carry the interval one.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
header clears the strip above it and pins, the title drops a type-scale step
over the next 40px. Nothing condenses while the header is still on its way
up, and the effect reverses as you scroll back up. Browsers without
scroll-driven animations, surfaces that publish no pin marker, and readers
who asked for reduced motion all keep the resting title.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <SectionHeader title={title} />
}`,...B.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...B.parameters?.docs?.description}}},V=[`Default`,`LongTitle`,`YearSurface`,`Stacked`,`CondensingOnScroll`,`WithoutControls`]}))();export{z as CondensingOnScroll,N as Default,P as LongTitle,I as Stacked,B as WithoutControls,F as YearSurface,V as __namedExportsOrder,M as default};