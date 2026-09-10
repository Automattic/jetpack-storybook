import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,xr as a}from"./build-module-zwSmKorH.js";import{a as o,c as s,u as c}from"./build-module-B_4WH6u1.js";import{At as l,bt as u,u as d}from"./build-module-CRH4RouM.js";import{t as f}from"./src-BjR_vYwV.js";import{W as p,i as m,t as h}from"./src-D_gpVFWl.js";import{n as g,r as _,t as v}from"./story-interval-options-C59XhMNq.js";import{r as y,t as b}from"./date-filters-panel-D05w-gn3.js";import{t as x}from"./date-interval-dropdown-iOYOBGjm.js";import{t as S}from"./date-year-filter-DkKH8G9A.js";import{i as C,n as w,r as T,t as E}from"./section-header-FGlZkd6k.js";function D(){let e=m(`last-30-days`,F);return{presetId:`last-30-days`,range:{from:e?.from,to:e?.to}}}function O(e,t){return e.range.from!==t.range.from||e.range.to!==t.range.to||e.presetId!==t.presetId}function k(){let e=D(),[t,n]=(0,N.useState)(e),[r,i]=(0,N.useState)(e),a=(0,N.useRef)(r);a.current=r;let[o,s]=(0,N.useState)(void 0),[c,l]=(0,N.useState)(void 0),u=(0,N.useCallback)((e,t)=>{let n={range:e??a.current.range,presetId:t??a.current.presetId};a.current=n,i(n)},[]),d=(0,N.useCallback)(()=>{n(a.current)},[]),f=(0,N.useCallback)(()=>{a.current=t,i(t)},[t]),p=(0,N.useCallback)((e,t)=>{s(t)},[]),m=v(r.presetId);return(0,P.jsx)(b,{range:r.range,appliedPresetId:t.presetId,appliedRange:t.range,comparisonPresetId:o,withIntervalControl:!0,interval:_(c,m),intervalOptions:m,onChange:u,onComparisonChange:p,onIntervalChange:l,onApply:d,onCancel:f,canApply:O(r,t),timeZone:F})}function A({containerElement:e}){let[t,n]=(0,N.useState)(p),[r,i]=(0,N.useState)(void 0),a=v(t);return(0,P.jsxs)(u,{direction:`row`,align:`center`,gap:`sm`,children:[(0,P.jsx)(S,{value:t,onSelect:(e,t)=>n(t),timeZone:F,containerElement:e}),(0,P.jsx)(x,{options:a,value:_(r,a),onChange:i})]})}function j({title:e,pinned:t}){return(0,P.jsx)(E,{title:e,pinned:t,children:(0,P.jsx)(k,{})})}function M({title:e}){let[t,n]=(0,N.useState)(null);return(0,P.jsx)(E,{ref:n,title:e,children:(0,P.jsx)(A,{containerElement:t})})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{h(),f(),s(),i(),N=e(n(),1),C(),y(),g(),T(),w(),P=r(),F=`America/New_York`,I={title:`Packages/Premium Analytics/UI/SectionHeader`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`Header for an analytics surface: a **title** names the section, and the date controls sit beside it on the same row.

The controls are a slot: the consumer passes them as \`children\` and keeps the date state, so the header stays purely presentational.`}}},argTypes:{children:{control:!1}},beforeEach:()=>{let e=o();return c({...e,timezone:{...e.timezone,string:F}}),()=>c(e)}},L={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsx)(j,{title:e})},R={args:{title:`Traffic for every site, network, and channel this account has ever measured`},render:({title:e})=>(0,P.jsx)(j,{title:e})},z={args:{title:`Insights`},render:({title:e})=>(0,P.jsx)(M,{title:e})},B={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsx)(`div`,{style:{inlineSize:520},children:(0,P.jsx)(j,{title:e})})},V={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsxs)(`div`,{style:{blockSize:320,overflowY:`auto`,timelineScope:`--section-header-pin`},children:[(0,P.jsx)(`div`,{style:{blockSize:48,paddingInline:24},children:`Something to scroll past, as the section tabs are.`}),(0,P.jsx)(j,{title:e,pinned:!0}),(0,P.jsx)(`div`,{style:{blockSize:900,paddingInline:24},children:`Content scrolling under the band.`})]})},H={args:{title:`Ten things I learned building a headless storefront`},render:({title:e})=>(0,P.jsxs)(`div`,{style:{blockSize:320,overflowY:`auto`,timelineScope:`--section-header-pin`},children:[(0,P.jsx)(`div`,{style:{blockSize:48,paddingInline:24},children:`Something to scroll past, as the section tabs are.`}),(0,P.jsx)(E,{pinned:!0,title:e,visual:(0,P.jsx)(l,{icon:a,size:28}),subTitle:`Post published on Feb 3, 2025. Performance from Feb 3, 2025 to Sep 2, 2026`,children:(0,P.jsx)(k,{})}),(0,P.jsx)(`div`,{style:{blockSize:900,paddingInline:24},children:`Content scrolling under the band.`})]})},U={args:{title:`Site traffic`},render:({title:e})=>(0,P.jsx)(E,{title:e})},W={args:{title:`Ten things I learned building a headless storefront`},render:({title:e})=>(0,P.jsx)(E,{title:e,visual:(0,P.jsx)(l,{icon:a,size:28}),subTitle:`Post published on Feb 3, 2025. Performance from Feb 3, 2025 to Sep 2, 2026`,children:(0,P.jsx)(k,{})})},G={render:()=>(0,P.jsx)(E,{busy:!0,title:(0,P.jsx)(d,{style:{display:`block`,blockSize:38,inlineSize:320}}),visual:(0,P.jsx)(l,{icon:a,size:28}),subTitle:(0,P.jsx)(d,{style:{display:`block`,blockSize:18,inlineSize:260}}),children:(0,P.jsx)(k,{})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
shows it at any window size.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <div style={{
    blockSize: 320,
    overflowY: 'auto',
    timelineScope: '--section-header-pin'
  }}>
            <div style={{
      blockSize: 48,
      paddingInline: 24
    }}>
                Something to scroll past, as the section tabs are.
            </div>
            <RollingSectionHeaderStory title={title} pinned />
            <div style={{
      blockSize: 900,
      paddingInline: 24
    }}>Content scrolling under the band.</div>
        </div>
}`,...V.parameters?.docs?.source},description:{story:`\`pinned\`: scroll the box below. The header clears the strip above it, pins at
the top, and condenses over the next 40px: the band's padding tightens and
the title drops a type-scale step. The effect follows the scroll in both
directions. Browsers without scroll-driven animations and readers who asked
for reduced motion keep the resting band; the pin itself needs neither.

The scroll box stands in for the surface: it declares the timeline scope the
band condenses on, and pads the content rather than itself, since the band
spans the page gutter on its own.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ten things I learned building a headless storefront'
  },
  render: ({
    title
  }) => <div style={{
    blockSize: 320,
    overflowY: 'auto',
    timelineScope: '--section-header-pin'
  }}>
            <div style={{
      blockSize: 48,
      paddingInline: 24
    }}>
                Something to scroll past, as the section tabs are.
            </div>
            <SectionHeader pinned title={title} visual={<Icon icon={post} size={28} />} subTitle="Post published on Feb 3, 2025. Performance from Feb 3, 2025 to Sep 2, 2026">
                <RollingDateControls />
            </SectionHeader>
            <div style={{
      blockSize: 900,
      paddingInline: 24
    }}>Content scrolling under the band.</div>
        </div>
}`,...H.parameters?.docs?.source},description:{story:`The detail-page instance pinned: as the box scrolls, the subtitle folds away
and the visual shrinks to the title's row, so the band condenses to the same
height as a header without a visual.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Site traffic'
  },
  render: ({
    title
  }) => <SectionHeader title={title} />
}`,...U.parameters?.docs?.source},description:{story:`The left half on its own: nothing in the controls slot.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ten things I learned building a headless storefront'
  },
  render: ({
    title
  }) => <SectionHeader title={title} visual={<Icon icon={post} size={28} />} subTitle="Post published on Feb 3, 2025. Performance from Feb 3, 2025 to Sep 2, 2026">
            <RollingDateControls />
        </SectionHeader>
}`,...W.parameters?.docs?.source},description:{story:`The **detail-page** instance: a resource's mark (here the type icon, a
thumbnail when the post has one) sits before the title, and a subtitle
states what the widgets below report on. The date controls sit on the
title's row.

The visual slot owns its box, so a consumer passes only the image or the
glyph. It is decorative by contract — the title already names the resource.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <SectionHeader busy title={<Skeleton style={{
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
}`,...G.parameters?.docs?.source},description:{story:`The same header before the resource resolves: the title and subtitle slots
hold skeletons, so the page does not read as blank while the grid draws.`,...G.parameters?.docs?.description}}},K=[`Default`,`LongTitle`,`YearSurface`,`Stacked`,`Pinned`,`PinnedWithVisual`,`WithoutControls`,`WithVisualAndSubtitle`,`LoadingResource`]}))();export{L as Default,G as LoadingResource,R as LongTitle,V as Pinned,H as PinnedWithVisual,B as Stacked,W as WithVisualAndSubtitle,U as WithoutControls,z as YearSurface,K as __namedExportsOrder,I as default};