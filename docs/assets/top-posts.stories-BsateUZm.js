import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-DVCOKQW8.js";import{n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o,u as s}from"./build-module-CzzND3BY.js";import{n as c,t as l}from"./with-chart-theme-ClS8NMQP.js";import{p as u}from"./chart-tooltip-BLuroPMZ.js";import{t as d}from"./leaderboard-chart-D-Z8TNh2.js";import{i as f}from"./metric-tabs-chart-B_AVtlSH.js";import{t as p}from"./src-BmPEvo9p.js";var m,h,g=e((()=>{m=`_labelLink_1bude_1`,h={labelLink:m}}));function _(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue??0;return{id:`${i}-${e.href}`,label:(0,v.jsx)(s,{className:h.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}),currentValue:e.value,currentShare:e.value/n*100,previousValue:a,previousShare:t&&a>0?a/r*100:0,delta:t?u(e.value,a):0}})}var v,y,b=e((()=>{p(),r(),o(),t(),g(),v=i(),y=({rows:e=[],isLoading:t=!1,isError:r=!1,withComparison:i=!1,showLegend:o=!1,legendLabels:s})=>r?(0,v.jsx)(a,{children:n(`Unable to load top posts.`,`jetpack-premium-analytics`)}):t&&(!e||e.length===0)?(0,v.jsx)(f,{}):(0,v.jsx)(d,{data:_(e,i),loading:t,withComparison:i,withOverlayLabel:!0,showLegend:o,legendLabels:s,emptyStateText:n(`No views in this period.`,`jetpack-premium-analytics`),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})),x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{l(),b(),x=i(),S={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:y,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top posts & pages" widget. Renders the most-viewed posts and pages for the period as a leaderboard, with each row linking to the published content. This is the presentational layer — it takes already-fetched rows via props and handles the loading, error, empty, and populated states. The data-connected widget (render.tsx default export) wraps this in WidgetRoot and feeds it the designated useStatsTopPosts hook.`}}},decorators:[c]},C=[{label:`How we cut our build times in half`,value:12840,previousValue:9870,href:`https://example.com/cut-build-times-in-half`,type:`post`},{label:`Pricing`,value:9320,previousValue:10110,href:`https://example.com/pricing`,type:`page`},{label:`10 lessons from scaling to a million users`,value:7610,previousValue:5400,href:`https://example.com/lessons-scaling-million-users`,type:`post`},{label:`About us`,value:4180,previousValue:4360,href:`https://example.com/about`,type:`page`},{label:`A practical guide to feature flags`,value:2950,previousValue:0,href:`https://example.com/guide-to-feature-flags`,type:`post`}],w=[{label:`An exhaustively long, keyword-stuffed headline that almost certainly needs to be truncated before it overflows the row`,value:8400,href:`https://example.com/very-long-headline-that-needs-truncation`,type:`post`},{label:`Frequently asked questions about billing, refunds, and account management`,value:5120,href:`https://example.com/faq-billing-refunds-account-management`,type:`page`},{label:`Changelog`,value:2010,href:`https://example.com/changelog`,type:`page`}],T={args:{rows:C}},E={args:{rows:C,withComparison:!0,showLegend:!0,legendLabels:{primary:`Jun 1 – 18, 2026`,comparison:`May 14 – 31, 2026`}}},D={args:{rows:[],isLoading:!0}},O={args:{rows:[]}},k={args:{isError:!0}},A={args:{rows:w}},j=(e,t=`auto`)=>n=>(0,x.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,x.jsx)(n,{})}),M={args:{rows:C},decorators:[j(`448px`)]},N={args:{rows:C},decorators:[j(`576px`)]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  }
}`,...T.parameters?.docs?.source},description:{story:`Default populated state — a mix of posts and pages ranked by views.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    withComparison: true,
    showLegend: true,
    legendLabels: {
      primary: 'Jun 1 – 18, 2026',
      comparison: 'May 14 – 31, 2026'
    }
  }
}`,...E.parameters?.docs?.source},description:{story:"Comparison state — each value shows its change versus the previous period\n(green for gains, red for losses), driven by each row's `previousValue`.\nMirrors the overlay comparison mode of the toolkit's `LeaderboardChart`.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    isLoading: true
  }
}`,...D.parameters?.docs?.source},description:{story:`Loading state — the chart renders its loading overlay while data is fetched.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...O.parameters?.docs?.source},description:{story:`Empty state — no views were recorded for the selected period.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isError: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Error state — the report could not be loaded.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockLongLabelRows
  }
}`,...A.parameters?.docs?.source},description:{story:`Long titles are truncated with an ellipsis so rows stay single-line.`,...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('448px')]
}`,...M.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint).`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('576px')]
}`,...N.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint).`,...N.parameters?.docs?.description}}},P=[`Default`,`WithComparison`,`Loading`,`NoViews`,`ErrorState`,`LongLabels`,`SizeMedium`,`SizeLarge`]}))();export{T as Default,k as ErrorState,D as Loading,A as LongLabels,O as NoViews,N as SizeLarge,M as SizeMedium,E as WithComparison,P as __namedExportsOrder,S as default};