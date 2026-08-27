import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{Bs as o,t as s}from"./build-module-CR6EsQjA.js";import{b as ee,g as c}from"./hooks-Cs5xAI4e.js";import{Q as te,qt as l,t as u}from"./src-DvcQwQzT.js";import"./constants-B1kGztHF.js";import{_t as d,ht as ne,mt as f}from"./chart-tooltip-D5YrBc4g.js";import{r as re}from"./src-vRCwR_z22.js";import{r as ie,t as ae}from"./leaderboard-skeleton-BOJbwJto.js";import{F as oe,G as se,K as p,N as m,S as h,b as g}from"./report-metric-DGt_a2Rg.js";import{t as _}from"./widget-state-9PpMooDZ.js";import{C as ce,D as le,E as ue,O as de,S as fe,T as pe,b as me,k as v,t as he,w as ge,x as y}from"./src-DZFdWC_e.js";import{n as _e,t as ve}from"./register-stats-mocks-uErXAo9Y.js";import{n as ye,t as b}from"./force-stats-mock-state-D2VrdW3j.js";var x,S,C,be=e((()=>{x=`_root_jzzhc_1`,S=`_content_jzzhc_9`,C={root:x,content:S}}));function w(e,t){let n=ne(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...m({label:e.label,media:{kind:`none`},action:oe({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:f(e.value,n),previousValue:i,previousShare:t&&i!==void 0?f(i,n):void 0,delta:t&&i!==void 0?d(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:re(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:t=!1}){return(0,k.jsx)(ie,{data:w(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A})}function D(){let{reportParams:e}=ee(),{comparisonRows:n,hasComparison:r,isLoading:a,isFetching:s,isError:c,refetch:l}=te(e,{maxRows:10}),u=(0,i.useMemo)(()=>T(n?.rows??[]),[n]),d=r;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:C.content,children:(0,k.jsx)(_,{isLoading:a,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ae,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:d})})}),(0,k.jsx)(h,{children:(0,k.jsx)(g,{report:`downloads`})})]})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{u(),a(),n(),s(),he(),be(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N=e((()=>{s(),M={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,xe=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:l(!1,e)}})}function Se({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),se(),ve(),ye(),ue(),de(),ce(),me(),j(),N(),xe(),U=r(),p(),_e(),W=`storybook/file-downloads`,G=fe(B,M),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,v]},J={render:V,args:{withComparison:!0},decorators:[y,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{...ge,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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