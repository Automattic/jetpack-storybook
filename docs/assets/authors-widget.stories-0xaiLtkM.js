import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-DVCOKQW8.js";import{n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{W as a,n as o}from"./build-module-DwipKI4I.js";import{n as s,t as c}from"./with-chart-theme-DrIxyUwD.js";import{t as l}from"./leaderboard-chart-CKWI5JUz.js";import{i as u}from"./metric-tabs-chart-7O-PXVMW.js";import{t as d}from"./src-BoA8oT8N.js";var f=e((()=>{r()}));function p({data:e=[],isLoading:t=!1,isRefetching:r=!1,withComparison:i=!1,legendLabels:o}){return t?(0,m.jsx)(u,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{data:e,withComparison:i,legendLabels:o,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}},emptyStateIcon:a,emptyStateText:n(`Learn about your most popular authors to better understand how they contribute to growing your site.`,`jetpack-premium-analytics`)}),r&&(0,m.jsx)(u,{})]})}var m,h=e((()=>{d(),r(),o(),t(),f(),m=i()})),g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{c(),h(),g=i(),_={title:`Packages/Premium Analytics/Widgets/Authors`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`The Authors widget. Renders the site's top authors by views as a leaderboard, sourced from the Jetpack Stats API, with optional period-over-period comparison. This is the presentational component — it takes already-built leaderboard rows via props and handles the loading, empty, and populated states.`}}},decorators:[s]},v=4820,y=e=>e/v*100,b=[{id:`Jane Cooper`,label:`Jane Cooper`,currentValue:4820,previousValue:0,currentShare:y(4820),previousShare:0,delta:0},{id:`Wade Warren`,label:`Wade Warren`,currentValue:3110,previousValue:0,currentShare:y(3110),previousShare:0,delta:0},{id:`Esther Howard`,label:`Esther Howard`,currentValue:2540,previousValue:0,currentShare:y(2540),previousShare:0,delta:0},{id:`Cameron Williamson`,label:`Cameron Williamson`,currentValue:1890,previousValue:0,currentShare:y(1890),previousShare:0,delta:0},{id:`Brooklyn Simmons`,label:`Brooklyn Simmons`,currentValue:1320,previousValue:0,currentShare:y(1320),previousShare:0,delta:0},{id:`Leslie Alexander`,label:`Leslie Alexander`,currentValue:760,previousValue:0,currentShare:y(760),previousShare:0,delta:0},{id:`Untracked authors`,label:`Untracked authors`,currentValue:410,previousValue:0,currentShare:y(410),previousShare:0,delta:0}],x=[{id:`Jane Cooper`,label:`Jane Cooper`,currentValue:4820,previousValue:3900,currentShare:y(4820),previousShare:y(3900),delta:23.6},{id:`Wade Warren`,label:`Wade Warren`,currentValue:3110,previousValue:3540,currentShare:y(3110),previousShare:y(3540),delta:-12.1},{id:`Esther Howard`,label:`Esther Howard`,currentValue:2540,previousValue:1980,currentShare:y(2540),previousShare:y(1980),delta:28.3},{id:`Cameron Williamson`,label:`Cameron Williamson`,currentValue:1890,previousValue:2010,currentShare:y(1890),previousShare:y(2010),delta:-6},{id:`Brooklyn Simmons`,label:`Brooklyn Simmons`,currentValue:1320,previousValue:0,currentShare:y(1320),previousShare:0,delta:100}],S={args:{data:b}},C={args:{data:x,withComparison:!0,legendLabels:{primary:`Jun 1 – 18, 2026`,comparison:`May 14 – 31, 2026`}}},w={args:{data:[],isLoading:!0}},T={args:{data:[]}},E=(e,t=`auto`)=>n=>(0,g.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,g.jsx)(n,{})}),D={args:{data:b},decorators:[E(`448px`)]},O={args:{data:b},decorators:[E(`576px`)]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockAuthors
  }
}`,...S.parameters?.docs?.source},description:{story:`Default populated state — top authors ranked by views for the period.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockAuthorsWithComparison,
    withComparison: true,
    legendLabels: {
      primary: 'Jun 1 – 18, 2026',
      comparison: 'May 14 – 31, 2026'
    }
  }
}`,...C.parameters?.docs?.source},description:{story:"Comparison state — each value shows its change versus the previous period\n(green for gains, red for losses), driven by each row's `previousValue`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    isLoading: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Loading state — the initial loading overlay renders while data is fetched.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...T.parameters?.docs?.source},description:{story:`Empty state — no authors recorded any views for the selected period.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockAuthors
  },
  decorators: [createSizeDecorator('448px')]
}`,...D.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockAuthors
  },
  decorators: [createSizeDecorator('576px')]
}`,...O.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint).`,...O.parameters?.docs?.description}}},k=[`Default`,`WithComparison`,`Loading`,`Empty`,`SizeMedium`,`SizeLarge`]}))();export{S as Default,T as Empty,w as Loading,O as SizeLarge,D as SizeMedium,C as WithComparison,k as __namedExportsOrder,_ as default};