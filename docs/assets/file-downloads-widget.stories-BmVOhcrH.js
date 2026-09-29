import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bs as i,Vu as a,ku as o,t as s}from"./build-module-DNhkEVJn.js";import{m as c,v as l}from"./hooks-D2xDsDek.js";import{$t as u,t as d,tt as ee}from"./src-BQm7ulfE.js";import{Dt as te,Et as f,kt as ne}from"./helpers-C4geY7qm.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-_NEWBKDe.js";import{n as ae,r as p}from"./register-report-mocks-D41zNnG-.js";import{D as oe,k as se,m as ce,v as le}from"./report-metric-CufdiPOl.js";import{a as ue}from"./src-Dn_UlYHW.js";import{t as de}from"./widget-state-Bax881-s.js";import{t as m}from"./src-DWnp96qG.js";import{a as h,d as g,f as fe,h as _,i as pe,m as me,n as he,p as ge,r as v,u as _e}from"./with-widget-canvas-D2L9hByW.js";import{n as ve,t as ye}from"./register-stats-mocks-DQmu4Se0.js";import{n as be,t as y}from"./force-stats-mock-state-L3wZHmMk.js";var b,x,S,C=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function w(e,t){let n=te(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...oe({label:e.label,media:{kind:`none`},action:se({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:f(e.value,n),previousValue:i,previousShare:t&&i!==void 0?f(i,n):void 0,delta:t&&i!==void 0?ne(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:ue(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:t=!1}){return(0,k.jsx)(re,{data:w(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:A})}function D(){let{reportParams:e}=l(),{comparisonRows:n,hasComparison:r,isLoading:i,isFetching:o,isError:s,refetch:c}=ee(e,{maxRows:10}),u=(0,a.useMemo)(()=>T(n?.rows??[]),[n]),d=r;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:S.content,children:(0,k.jsx)(de,{isLoading:i,isFetching:o,isError:u.length===0&&s,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,k.jsx)(ie,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:d})})}),(0,k.jsx)(le,{children:(0,k.jsx)(ce,{report:`downloads`})})]})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{d(),o(),n(),m(),C(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N=e((()=>{s(),M={icon:i,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,xe=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:u(!1,e)}})}function Se({withComparison:e,...t}){return(0,U.jsx)(g,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ae(),ye(),be(),fe(),me(),h(),he(),j(),N(),xe(),U=r(),p(),ve(),W=`storybook/file-downloads`,G=pe(B,M),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[v,_]},J={render:V,args:{withComparison:!0},decorators:[v,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/file-downloads`,`loading`),()=>y(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/file-downloads`,`error`),()=>y(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/file-downloads`,`empty`),()=>y(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{..._e,withComparison:!0},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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