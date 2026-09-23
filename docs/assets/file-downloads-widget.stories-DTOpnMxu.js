import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Hs as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{_n as c,hn as l,m as u,mn as d,v as ee}from"./hooks-D2-uOzcc.js";import{$t as f,it as te,t as p}from"./src-0ge7d6kt.js";import"./constants-B1kGztHF.js";import{r as ne,t as re}from"./leaderboard-skeleton-CDMNyzgV.js";import{i as ie,r as m}from"./register-report-mocks-DAHzORiq.js";import{N as ae,S as oe,j as se,v as ce}from"./report-metric--Et_iyvv.js";import{a as le}from"./src-CLbal5TQ.js";import{t as ue}from"./widget-state-BlFCjv4l.js";import{t as de}from"./src-Ddik3icB.js";import{a as h,d as g,f as _,h as v,i as fe,m as pe,n as me,p as he,r as y,u as ge}from"./with-widget-canvas-q45aoI9y.js";import{n as _e,t as ve}from"./register-stats-mocks-BZi9sgqC.js";import{n as ye,t as b}from"./force-stats-mock-state-DzBZCkRi.js";var x,S,C,be=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function w(e,t){let n=l(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:ae({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:d(e.value,n),previousValue:i,previousShare:t&&i!==void 0?d(i,n):void 0,delta:t&&i!==void 0?c(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:le(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:t=!1}){return(0,k.jsx)(ne,{data:w(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A})}function D(){let{reportParams:e}=ee(),{comparisonRows:n,hasComparison:r,isLoading:o,isFetching:s,isError:c,refetch:l}=te(e,{maxRows:10}),u=(0,a.useMemo)(()=>T(n?.rows??[]),[n]),d=r;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:C.content,children:(0,k.jsx)(ue,{isLoading:o,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:i,description:t(`No file downloads in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(re,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:d})})}),(0,k.jsx)(oe,{children:(0,k.jsx)(ce,{report:`downloads`})})]})}function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{p(),o(),n(),s(),de(),be(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N=e((()=>{s(),M={icon:i,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,xe=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function Se({withComparison:e,...t}){return(0,U.jsx)(g,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),m(),ve(),ye(),_(),pe(),h(),me(),j(),N(),xe(),U=r(),ie(),_e(),W=`storybook/file-downloads`,G=fe(B,M),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,v]},J={render:V,args:{withComparison:!0},decorators:[y,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{...ge,withComparison:!0},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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