import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-CDZL_1rk.js";import{St as ee,dn as o,t as s}from"./src-BE2RxwT8.js";import{m as c,v as te,vt as l,xt as u,zt as d}from"./charts-provider-BeJ3bTFr.js";import{a as f}from"./src-pMvB-SDM.js";import"./rows-DAmD2BmE.js";import{r as ne,t as p}from"./leaderboard-skeleton-D5cFqZLb.js";import{n as m,r as re}from"./register-report-mocks-C9HMC87W.js";import{t as ie}from"./widget-state-CaMvP3kz.js";import{n as ae,r as h}from"./with-story-router-B8AmDh4M.js";import{i as oe,o as se}from"./build-leaderboard-chart-data-CdcGNjHe.js";import{f as ce,o as g}from"./leaderboard-BtTmazTZ.js";import{C as le,k as ue,t as de}from"./src-CrQaC0Kl.js";import{a as fe,g as pe,h as _,i as me,m as he,n as ge,p as _e,r as v}from"./with-widget-canvas-C89hLCT2.js";import{n as ve,t as ye}from"./use-no-views-empty-state-ChUitYoO.js";import{n as be,t as xe}from"./register-stats-mocks-CQApnBJo.js";import{n as Se,t as y}from"./force-stats-mock-state-DKPSB5yo.js";var b,x,S,C=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function w(e,t){let n=l(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...oe({label:e.label,media:{kind:`none`},action:se({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:u(e.value,n),previousValue:i,previousShare:t&&i!==void 0?u(i,n):void 0,delta:t&&i!==void 0?d(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:f(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(ne,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:w(e,n),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ee(e,{maxRows:10}),u=(0,i.useMemo)(()=>T(r?.rows??[]),[r]),d=a,f=ve({isLoading:o,isError:c,isEmpty:u.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:S.content,children:(0,k.jsx)(ie,{isLoading:f.isLoading,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:f.empty,renderLoading:(0,k.jsx)(p,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:d})})}),(0,k.jsxs)(g,{children:[(0,k.jsx)(ce,{report:`downloads`}),(0,k.jsx)(le,{exporter:ue,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:u.length})]})]})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{s(),a(),n(),de(),ye(),C(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Ce=e((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,we=e((()=>{N=`jpa/file-downloads`,P=`jpa/download`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:o(!1,e)}})}function Te({withComparison:e,...t}){return(0,U.jsx)(he,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),m(),xe(),Se(),_(),ae(),fe(),ge(),j(),Ce(),we(),U=r(),re(),be(),W=`storybook/file-downloads`,G=me(B,M),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[v,h]},J={render:V,args:{withComparison:!0},decorators:[v,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v,h],beforeEach:()=>(y(`stats/file-downloads`,`loading`),()=>y(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v,h],beforeEach:()=>(y(`stats/file-downloads`,`error`),()=>y(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[v,h],beforeEach:()=>(y(`stats/file-downloads`,`empty`),()=>y(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{..._e,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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