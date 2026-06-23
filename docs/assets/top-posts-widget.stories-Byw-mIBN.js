import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{b as i,t as a}from"./build-module-Bq_LvuMM.js";import{n as o,t as s}from"./with-chart-theme-hbu5XYFg.js";import{f as c,t as l}from"./helpers-CMpary0h.js";import{t as u}from"./leaderboard-chart-DNr2sMkm.js";import{r as d}from"./report-metric-BuREiKLO.js";import{n as f}from"./widget-loading-overlay-TLaOlHJV.js";var p=e((()=>{d(),l()})),m,h,g=e((()=>{m=`_labelLink_1bude_1`,h={labelLink:m}}));function _(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue??0;return{id:`${i}-${e.href}`,label:(0,v.jsx)(y,{label:e.label,href:e.href}),currentValue:e.value,currentShare:e.value/n*100,previousValue:a,previousShare:t&&a>0?a/r*100:0,delta:t?c(e.value,a):0}})}var v,y,b,x=e((()=>{n(),a(),p(),g(),v=r(),y=({label:e,href:t})=>(0,v.jsx)(`a`,{className:h.labelLink,href:t,target:`_blank`,rel:`noopener noreferrer`,title:e,children:e}),b=({rows:e=[],isLoading:n=!1,isError:r=!1,withComparison:a=!1,showLegend:o=!1,legendLabels:s})=>r?(0,v.jsx)(i,{children:t(`Unable to load top posts.`,`jetpack-premium-analytics`)}):n&&(!e||e.length===0)?(0,v.jsx)(f,{}):(0,v.jsx)(u,{data:_(e,a),loading:n,withComparison:a,withOverlayLabel:!0,showLegend:o,legendLabels:s,emptyStateText:t(`No views in this period.`,`jetpack-premium-analytics`),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{s(),x(),S=r(),C={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:b,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top posts & pages" widget. Renders the most-viewed posts and pages for the period as a leaderboard, with each row linking to the published content. This is a presentational component — it takes already-fetched rows via props and handles the loading, error, empty, and populated states.`}}},decorators:[o]},w=[{label:`How we cut our build times in half`,value:12840,previousValue:9870,href:`https://example.com/cut-build-times-in-half`,type:`post`},{label:`Pricing`,value:9320,previousValue:10110,href:`https://example.com/pricing`,type:`page`},{label:`10 lessons from scaling to a million users`,value:7610,previousValue:5400,href:`https://example.com/lessons-scaling-million-users`,type:`post`},{label:`About us`,value:4180,previousValue:4360,href:`https://example.com/about`,type:`page`},{label:`A practical guide to feature flags`,value:2950,previousValue:0,href:`https://example.com/guide-to-feature-flags`,type:`post`}],T=[{label:`An exhaustively long, keyword-stuffed headline that almost certainly needs to be truncated before it overflows the row`,value:8400,href:`https://example.com/very-long-headline-that-needs-truncation`,type:`post`},{label:`Frequently asked questions about billing, refunds, and account management`,value:5120,href:`https://example.com/faq-billing-refunds-account-management`,type:`page`},{label:`Changelog`,value:2010,href:`https://example.com/changelog`,type:`page`}],E={args:{rows:w}},D={args:{rows:w,withComparison:!0,showLegend:!0,legendLabels:{primary:`Jun 1 – 18, 2026`,comparison:`May 14 – 31, 2026`}}},O={args:{rows:[],isLoading:!0}},k={args:{rows:[]}},A={args:{isError:!0}},j={args:{rows:T}},M=(e,t=`auto`)=>n=>(0,S.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,S.jsx)(n,{})}),N={args:{rows:w},decorators:[M(`448px`)]},P={args:{rows:w},decorators:[M(`576px`)]},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  }
}`,...E.parameters?.docs?.source},description:{story:`Default populated state — a mix of posts and pages ranked by views.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    withComparison: true,
    showLegend: true,
    legendLabels: {
      primary: 'Jun 1 – 18, 2026',
      comparison: 'May 14 – 31, 2026'
    }
  }
}`,...D.parameters?.docs?.source},description:{story:"Comparison state — each value shows its change versus the previous period\n(green for gains, red for losses), driven by each row's `previousValue`.\nMirrors the overlay comparison mode of the toolkit's `LeaderboardChart`.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    isLoading: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Loading state — the chart renders its loading overlay while data is fetched.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...k.parameters?.docs?.source},description:{story:`Empty state — no views were recorded for the selected period.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isError: true
  }
}`,...A.parameters?.docs?.source},description:{story:`Error state — the report could not be loaded.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockLongLabelRows
  }
}`,...j.parameters?.docs?.source},description:{story:`Long titles are truncated with an ellipsis so rows stay single-line.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('448px')]
}`,...N.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('576px')]
}`,...P.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint).`,...P.parameters?.docs?.description}}},F=[`Default`,`WithComparison`,`Loading`,`NoViews`,`ErrorState`,`LongLabels`,`SizeMedium`,`SizeLarge`]}))();export{E as Default,A as ErrorState,O as Loading,j as LongLabels,k as NoViews,P as SizeLarge,N as SizeMedium,D as WithComparison,F as __namedExportsOrder,C as default};