import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,xr as a}from"./build-module-zwSmKorH.js";import{a as o,c as s,u as c}from"./build-module-D_uWNNNl.js";import{Bt as l,mn as u,u as d}from"./build-module-D5hqcG7F.js";import{t as f}from"./src-LHtjE2ZJ.js";import{i as p,l as m,t as h}from"./src-DtKtURUU.js";import{n as g,r as _,t as v}from"./story-interval-options-C59XhMNq.js";import{r as y,t as b}from"./date-filters-panel-CCl4aujk.js";import{t as x}from"./date-interval-dropdown-LwZa25IH.js";import{t as S}from"./date-year-filter-DFxIcV1O.js";import{i as C,n as w,r as T,t as E}from"./section-header-8jz9FfoM.js";function D(){let e=p(`last-30-days`,F);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function O(e,t){return e.range.from!==t.range.from||e.range.to!==t.range.to||e.presetId!==t.presetId}function k(){let e=D(),[t,n]=(0,N.useState)(e),[r,i]=(0,N.useState)(e),a=(0,N.useRef)(r);a.current=r;let[o,s]=(0,N.useState)(void 0),[c,l]=(0,N.useState)(void 0),u=(0,N.useCallback)((e,t)=>{let n={range:e??a.current.range,presetId:t??a.current.presetId};a.current=n,i(n)},[]),d=(0,N.useCallback)(()=>{n(a.current)},[]),f=(0,N.useCallback)(()=>{a.current=t,i(t)},[t]),p=(0,N.useCallback)((e,t)=>{s(t)},[]),m=v(r.presetId);return(0,P.jsx)(b,{range:r.range,appliedPresetId:t.presetId,appliedRange:t.range,comparisonPresetId:o,withIntervalControl:!0,interval:_(c,m),intervalOptions:m,onChange:u,onComparisonChange:p,onIntervalChange:l,onApply:d,onCancel:f,canApply:O(r,t),timeZone:F})}function A({containerElement:e}){let[t,n]=(0,N.useState)(m),[r,i]=(0,N.useState)(void 0),a=v(t);return(0,P.jsxs)(l,{direction:`row`,align:`center`,gap:`sm`,children:[(0,P.jsx)(S,{value:t,onSelect:(e,t)=>n(t),timeZone:F,containerElement:e}),(0,P.jsx)(x,{options:a,value:_(r,a),onChange:i})]})}function j({title:e,condenseOnScroll:t}){return(0,P.jsx)(E,{title:e,condenseOnScroll:t,children:(0,P.jsx)(k,{})})}function M({title:e}){let[t,n]=(0,N.useState)(null);return(0,P.jsx)(`div`,{ref:n,children:(0,P.jsx)(E,{title:e,children:(0,P.jsx)(A,{containerElement:t})})})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;t((()=>{h(),f(),s(),i(),N=e(n(),1),C(),y(),g(),T(),w(),P=r(),F=`America/New_York`,I={title:`Packages/Premium Analytics/UI/SectionHeader`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`Header for an analytics surface: a **title** names the section, and the date controls sit beside it on the same row.

The controls are a slot: the consumer passes them as \`children\` and keeps the date state, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}},beforeEach:()=>{let e=o();return c({...e,timezone:{...e.timezone,string:F}}),()=>c(e)}},L={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsx)(j,{title:e})},R={args:{title:`Traffic for every site, network, and channel this account has ever measured`},render:({title:e})=>(0,P.jsx)(j,{title:e})},z={args:{title:`Insights`},render:({title:e})=>(0,P.jsx)(M,{title:e})},B={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsx)(`div`,{style:{inlineSize:520},children:(0,P.jsx)(j,{title:e})})},V=`--section-header-pin`,H={position:`absolute`,insetBlockStart:0,inlineSize:1,blockSize:40,visibility:`hidden`,pointerEvents:`none`,viewTimelineName:V,viewTimelineAxis:`block`},U={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsxs)(`div`,{style:{blockSize:320,overflowY:`auto`},children:[(0,P.jsx)(`div`,{style:{blockSize:48},children:`Something to scroll past, as the section tabs are.`}),(0,P.jsxs)(`div`,{style:{position:`relative`,timelineScope:V},children:[(0,P.jsx)(`div`,{style:H,"aria-hidden":`true`}),(0,P.jsx)(`div`,{style:{position:`sticky`,insetBlockStart:0,background:`var(--wpds-color-background-surface-neutral-strong)`},children:(0,P.jsx)(j,{title:e,condenseOnScroll:!0})}),(0,P.jsx)(`div`,{style:{blockSize:900}})]})]})},W={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsx)(E,{title:e})},G={args:{title:`Ten things I learned building a headless storefront`},render:({title:e})=>(0,P.jsx)(E,{headingLevel:1,title:e,visual:(0,P.jsx)(u,{icon:a,size:28}),subTitle:`Post published on Feb 3, 2025. Performance from Feb 3, 2025 to Sep 2, 2026`,children:(0,P.jsx)(k,{})})},K={render:()=>(0,P.jsx)(E,{headingLevel:1,busy:!0,title:(0,P.jsx)(d,{style:{display:`block`,blockSize:38,inlineSize:320}}),visual:(0,P.jsx)(u,{icon:a,size:28}),subTitle:(0,P.jsx)(d,{style:{display:`block`,blockSize:18,inlineSize:260}}),children:(0,P.jsx)(k,{})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...L.parameters?.docs?.source},description:{story:`The **Traffic-like** instance: rolling presets, custom range, chart interval,
and comparison in the slot.

Range edits are staged and land on Apply; a comparison or interval pick
commits on its own, the way \`useReportDateFilters\` has it. Switching to a
preset that disallows the active bucket falls back to the finest one it
allows.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Traffic for every site, network, and channel this account has ever measured'
  },
  render: ({
    title
  }) => <RollingSectionHeaderStory title={title} />
}`,...R.parameters?.docs?.source},description:{story:`A title long enough to overflow its track: it truncates with an ellipsis
instead of wrapping or compressing the date controls, which keep their
natural width for as long as the title stays above its floor.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Insights'
  },
  render: ({
    title
  }) => <YearSectionHeaderStory title={title} />
}`,...z.parameters?.docs?.source},description:{story:`The **Insights-like** instance: the year surface (all time plus calendar
years) and the chart interval in the slot.

Per the design's instances table, this surface carries *no comparison
control* but does carry the interval one.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`The same header in a box too narrow for two halves: the title and the
controls stack, and the controls read from the start edge.

The switch follows this wrapper's width, not the viewport's, so the story
shows it at any window size.`,...B.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`\`condenseOnScroll\` on a pinned header: scroll the box below, and once the
header clears the strip above it and pins, the title drops a type-scale step
over the next 40px. Nothing condenses while the header is still on its way
up, and the effect reverses as you scroll back up. Browsers without
scroll-driven animations, surfaces that publish no pin marker, and readers
who asked for reduced motion all keep the resting title.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <SectionHeader title={title} />
}`,...W.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ten things I learned building a headless storefront'
  },
  render: ({
    title
  }) => <SectionHeader headingLevel={1} title={title} visual={<Icon icon={post} size={28} />} subTitle="Post published on Feb 3, 2025. Performance from Feb 3, 2025 to Sep 2, 2026">
            <RollingDateControls />
        </SectionHeader>
}`,...G.parameters?.docs?.source},description:{story:`The **detail-page** instance: a resource names the page, so the title is its
\`h1\`, its mark (here the type icon, a thumbnail when the post has one) sits
before it, and a subtitle states what the widgets below report on.

The visual slot owns its box, so a consumer passes only the image or the
glyph. It is decorative by contract — the title already names the resource.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <SectionHeader headingLevel={1} busy title={<Skeleton style={{
    display: 'block',
    blockSize: 38,
    inlineSize: 320
  }} />} visual={<Icon icon={post} size={28} />} subTitle={<Skeleton style={{
    display: 'block',
    blockSize: 18,
    inlineSize: 260
  }} />}>
            <RollingDateControls />
        </SectionHeader>
}`,...K.parameters?.docs?.source},description:{story:`The same header before the resource resolves: the title and subtitle slots
hold skeletons, so the page does not read as blank while the grid draws.`,...K.parameters?.docs?.description}}},q=[`Default`,`LongTitle`,`YearSurface`,`Stacked`,`CondensingOnScroll`,`WithoutControls`,`WithVisualAndSubtitle`,`LoadingResource`]}))();export{U as CondensingOnScroll,L as Default,K as LoadingResource,R as LongTitle,B as Stacked,G as WithVisualAndSubtitle,W as WithoutControls,z as YearSurface,q as __namedExportsOrder,I as default};