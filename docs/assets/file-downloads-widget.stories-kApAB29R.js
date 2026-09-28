import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Hs as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{m as c,v as l}from"./hooks-Jpux5s_Q.js";import{$t as u,it as d,t as f}from"./src-DS7qFbB1.js";import{Dt as ee,Et as p,kt as te}from"./helpers-Bf4_LFd3.js";import"./constants-B1kGztHF.js";import{r as ne,t as re}from"./leaderboard-skeleton-D0ZHP65v.js";import{i as ie,r as m}from"./register-report-mocks-C6RWe7pX.js";import{N as ae,S as oe,j as se,v as ce}from"./report-metric-CQoahLwb.js";import{a as le}from"./src-CSMsNMNg.js";import{t as ue}from"./widget-state-BPr5Sxun.js";import{t as h}from"./src-BSvb-ww2.js";import{a as g,d as de,f as fe,h as _,i as pe,m as me,n as he,p as ge,r as v,u as _e}from"./with-widget-canvas-Caa9atnh.js";import{n as ve,t as ye}from"./register-stats-mocks-BTt9fmdy.js";import{n as be,t as y}from"./force-stats-mock-state-Ds3UHWPD.js";var b,x,S,C=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function w(e,t){let n=ee(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:ae({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:p(e.value,n),previousValue:i,previousShare:t&&i!==void 0?p(i,n):void 0,delta:t&&i!==void 0?te(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:le(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:t=!1}){return(0,k.jsx)(ne,{data:w(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A})}function D(){let{reportParams:e}=l(),{comparisonRows:n,hasComparison:r,isLoading:i,isFetching:o,isError:s,refetch:c}=d(e,{maxRows:10}),u=(0,a.useMemo)(()=>T(n?.rows??[]),[n]),f=r;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:S.content,children:(0,k.jsx)(ue,{isLoading:i,isFetching:o,isError:u.length===0&&s,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,k.jsx)(re,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:f})})}),(0,k.jsx)(oe,{children:(0,k.jsx)(ce,{report:`downloads`})})]})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{f(),o(),n(),h(),C(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N=e((()=>{s(),M={icon:i,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,xe=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:u(!1,e)}})}function Se({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),m(),ye(),be(),fe(),me(),g(),he(),j(),N(),xe(),U=r(),ie(),ve(),W=`storybook/file-downloads`,G=pe(B,M),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[v,_]},J={render:V,args:{withComparison:!0},decorators:[v,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/file-downloads`,`loading`),()=>y(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/file-downloads`,`error`),()=>y(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/file-downloads`,`empty`),()=>y(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{..._e,withComparison:!0},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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