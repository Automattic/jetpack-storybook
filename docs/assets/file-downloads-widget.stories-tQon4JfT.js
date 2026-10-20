import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-CDZL_1rk.js";import{pn as o,t as s,wt as ee}from"./src-ZjHV2sqR.js";import{Lt as c,gt as l,m as u,v as te,yt as d}from"./charts-provider-DmTfgW6u.js";import{a as f}from"./src-isz3RBrT2.js";import"./rows-DAmD2BmE.js";import{r as p,t as m}from"./leaderboard-skeleton-DWGXZ4uv.js";import{n as ne,r as re}from"./register-report-mocks-BmL3qzYr.js";import{t as ie}from"./widget-state-B6BF76Fg.js";import{n as ae,r as h}from"./with-story-router-B8AmDh4M.js";import{i as oe,o as se}from"./build-leaderboard-chart-data-CoXxseL4.js";import{f as ce,o as le}from"./leaderboard-pRae8XCa.js";import{C as g,k as ue,t as de}from"./src-B0Rsgp69.js";import{a as fe,g as pe,h as _,i as v,m as me,n as he,p as ge,r as y}from"./with-widget-canvas-fgX8Iy8a.js";import{n as _e,t as ve}from"./use-no-views-empty-state-CA04MmPV.js";import{n as ye,t as be}from"./register-stats-mocks-Clz1DhQG.js";import{n as xe,t as b}from"./force-stats-mock-state-DPNShNVf.js";var x,S,C,w=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function T(e,t){let n=l(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...oe({label:e.label,media:{kind:`none`},action:se({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:d(e.value,n),previousValue:i,previousShare:t&&i!==void 0?d(i,n):void 0,delta:t&&i!==void 0?c(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:f(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:n=!1}){return(0,A.jsx)(p,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:T(e,n),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function O(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ee(e,{maxRows:10}),u=(0,i.useMemo)(()=>E(r?.rows??[]),[r]),d=a,f=_e({isLoading:o,isError:c,isEmpty:u.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:C.content,children:(0,A.jsx)(ie,{isLoading:f.isLoading,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:f.empty,renderLoading:(0,A.jsx)(m,{rows:10}),children:(0,A.jsx)(D,{rows:u,withComparison:d})})}),(0,A.jsxs)(le,{children:[(0,A.jsx)(ce,{report:`downloads`}),(0,A.jsx)(g,{exporter:ue,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:u.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{s(),a(),n(),de(),ve(),w(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,Se=e((()=>{N=`jpa/file-downloads`,P=`jpa/download`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:o(!1,e)}})}function Ce({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),ne(),be(),xe(),_(),ae(),fe(),he(),M(),Se(),U=r(),re(),ye(),W=`storybook/file-downloads`,G=v(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,h]},J={render:V,args:{withComparison:!0},decorators:[y,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...ge,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderFileDownloadsWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderFileDownloadsWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderFileDownloadsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/file-downloads', 'loading');
    return () => forceStatsMockState('stats/file-downloads', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderFileDownloadsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/file-downloads', 'error');
    return () => forceStatsMockState('stats/file-downloads', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderFileDownloadsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/file-downloads', 'empty');
    return () => forceStatsMockState('stats/file-downloads', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <FileDownloadsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};