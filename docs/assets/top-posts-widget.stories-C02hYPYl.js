import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{O as i,t as a}from"./build-module-BKPJrKLH.js";import{n as o,t as s}from"./with-chart-theme-BMReWjxj.js";import{f as c}from"./helpers-DTq8thV7.js";import{t as l}from"./leaderboard-chart-CrSvVuVF.js";import{n as u}from"./widget-loading-overlay-D5sNVgaF.js";import{t as d}from"./src-DBKJhQAi.js";var f,p,m=e((()=>{f=`_labelLink_1bude_1`,p={labelLink:f}}));function h(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue??0;return{id:`${i}-${e.href}`,label:(0,g.jsx)(_,{label:e.label,href:e.href}),currentValue:e.value,currentShare:e.value/n*100,previousValue:a,previousShare:t&&a>0?a/r*100:0,delta:t?c(e.value,a):0}})}var g,_,v,y=e((()=>{n(),a(),d(),m(),g=r(),_=({label:e,href:t})=>(0,g.jsx)(`a`,{className:p.labelLink,href:t,target:`_blank`,rel:`noopener noreferrer`,title:e,children:e}),v=({rows:e=[],isLoading:n=!1,isError:r=!1,withComparison:a=!1,showLegend:o=!1,legendLabels:s})=>r?(0,g.jsx)(i,{children:t(`Unable to load top posts.`,`jetpack-premium-analytics`)}):n&&(!e||e.length===0)?(0,g.jsx)(u,{}):(0,g.jsx)(l,{data:h(e,a),loading:n,withComparison:a,withOverlayLabel:!0,showLegend:o,legendLabels:s,emptyStateText:t(`No views in this period.`,`jetpack-premium-analytics`),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})),b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{s(),y(),b=r(),x={title:`Packages/Premium Analytics/Widgets/TopPosts`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top posts & pages" widget. Renders the most-viewed posts and pages for the period as a leaderboard, with each row linking to the published content. This is a presentational component — it takes already-fetched rows via props and handles the loading, error, empty, and populated states.`}}},decorators:[o]},S=[{label:`How we cut our build times in half`,value:12840,previousValue:9870,href:`https://example.com/cut-build-times-in-half`,type:`post`},{label:`Pricing`,value:9320,previousValue:10110,href:`https://example.com/pricing`,type:`page`},{label:`10 lessons from scaling to a million users`,value:7610,previousValue:5400,href:`https://example.com/lessons-scaling-million-users`,type:`post`},{label:`About us`,value:4180,previousValue:4360,href:`https://example.com/about`,type:`page`},{label:`A practical guide to feature flags`,value:2950,previousValue:0,href:`https://example.com/guide-to-feature-flags`,type:`post`}],C=[{label:`An exhaustively long, keyword-stuffed headline that almost certainly needs to be truncated before it overflows the row`,value:8400,href:`https://example.com/very-long-headline-that-needs-truncation`,type:`post`},{label:`Frequently asked questions about billing, refunds, and account management`,value:5120,href:`https://example.com/faq-billing-refunds-account-management`,type:`page`},{label:`Changelog`,value:2010,href:`https://example.com/changelog`,type:`page`}],w={args:{rows:S}},T={args:{rows:S,withComparison:!0,showLegend:!0,legendLabels:{primary:`Jun 1 – 18, 2026`,comparison:`May 14 – 31, 2026`}}},E={args:{rows:[],isLoading:!0}},D={args:{rows:[]}},O={args:{isError:!0}},k={args:{rows:C}},A=(e,t=`auto`)=>n=>(0,b.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,b.jsx)(n,{})}),j={args:{rows:S},decorators:[A(`448px`)]},M={args:{rows:S},decorators:[A(`576px`)]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  }
}`,...w.parameters?.docs?.source},description:{story:`Default populated state — a mix of posts and pages ranked by views.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows,
    withComparison: true,
    showLegend: true,
    legendLabels: {
      primary: 'Jun 1 – 18, 2026',
      comparison: 'May 14 – 31, 2026'
    }
  }
}`,...T.parameters?.docs?.source},description:{story:"Comparison state — each value shows its change versus the previous period\n(green for gains, red for losses), driven by each row's `previousValue`.\nMirrors the overlay comparison mode of the toolkit's `LeaderboardChart`.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    isLoading: true
  }
}`,...E.parameters?.docs?.source},description:{story:`Loading state — the chart renders its loading overlay while data is fetched.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...D.parameters?.docs?.source},description:{story:`Empty state — no views were recorded for the selected period.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isError: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Error state — the report could not be loaded.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockLongLabelRows
  }
}`,...k.parameters?.docs?.source},description:{story:`Long titles are truncated with an ellipsis so rows stay single-line.`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('448px')]
}`,...j.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint).`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    rows: mockRows
  },
  decorators: [createSizeDecorator('576px')]
}`,...M.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint).`,...M.parameters?.docs?.description}}},N=[`Default`,`WithComparison`,`Loading`,`NoViews`,`ErrorState`,`LongLabels`,`SizeMedium`,`SizeLarge`]}))();export{w as Default,O as ErrorState,E as Loading,k as LongLabels,D as NoViews,M as SizeLarge,j as SizeMedium,T as WithComparison,N as __namedExportsOrder,x as default};