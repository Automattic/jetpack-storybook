import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,Ws as o,t as s}from"./build-module-zwSmKorH.js";import{b as ee,en as c,g as l,rn as u,tn as d}from"./hooks-1sbxUh5m.js";import{at as te,en as f,i as p}from"./date-filters-panel-B9i11_yc.js";import{a as ne}from"./src-CnU4gkhF.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-DslJcObl.js";import{i as m,r as h}from"./register-report-mocks-CU-0P7gZ.js";import{N as g,S as ae,b as oe,j as se}from"./report-metric-BEd5pxf6.js";import{t as ce}from"./widget-state-DTTvqQeU.js";import{t as _}from"./src-Q8WIHIXL.js";import{a as v,c as y,d as b,i as le,l as ue,n as de,o as fe,r as x,s as pe,u as me}from"./with-widget-canvas-0dl_RFTX.js";import{n as he,t as ge}from"./register-stats-mocks-guVTm97D.js";import{n as _e,t as S}from"./force-stats-mock-state-DDSge2Tv.js";var C,w,T,ve=e((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function ye(e,t){let n=d(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:g({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:c(e.value,n),previousValue:i,previousShare:t&&i!==void 0?c(i,n):void 0,delta:t&&i!==void 0?u(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:ne(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(re,{data:ye(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function O(){let{reportParams:e}=ee(),{comparisonRows:n,hasComparison:r,isLoading:a,isFetching:s,isError:c,refetch:l}=te(e,{maxRows:10}),u=(0,i.useMemo)(()=>E(n?.rows??[]),[n]),d=r;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:T.content,children:(0,A.jsx)(ce,{isLoading:a,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ie,{rows:10}),children:(0,A.jsx)(D,{rows:u,withComparison:d})})}),(0,A.jsx)(ae,{children:(0,A.jsx)(oe,{report:`downloads`})})]})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{p(),a(),n(),s(),_(),ve(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,be=e((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,xe=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:f(!1,e)}})}function Se({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),h(),ge(),_e(),y(),me(),v(),de(),M(),be(),xe(),U=r(),m(),he(),W=`storybook/file-downloads`,G=le(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,b]},J={render:V,args:{withComparison:!0},decorators:[x,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/file-downloads`,`loading`),()=>S(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/file-downloads`,`error`),()=>S(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/file-downloads`,`empty`),()=>S(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{...fe,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the download glyph
and "No file downloads in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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