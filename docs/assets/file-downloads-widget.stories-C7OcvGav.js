import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{Vs as o,n as s}from"./build-module-CDRs4YxF.js";import{Y as c,t as l}from"./src-BQ937R3D.js";import{b as ee,g as u}from"./hooks-CJHqeXG6.js";import{Y as te,qt as d,t as f}from"./src-D1tXW3KS.js";import"./constants-B1kGztHF.js";import{ct as ne,st as p,ut as re}from"./chart-tooltip-CJkbpBFZ.js";import{r as m}from"./src-C3lUf8Gf2.js";import{r as ie,t as ae}from"./leaderboard-skeleton-gvycnogW.js";import{K as oe,S as se,q as h,w as g}from"./report-metric-BqX9gfYB.js";import{t as ce}from"./widget-state-CVfjMKju.js";import{C as le,D as ue,E as de,O as fe,S as _,T as v,b as pe,k as y,t as me,w as he,x as b}from"./src-DEgW9igf.js";import{n as ge,t as _e}from"./register-stats-mocks-BotGiewq.js";import{n as ve,t as x}from"./force-stats-mock-state-C2MKN6tR.js";var S,C,w,T,E,ye=e((()=>{S=`_labelLink_dw8mz_1`,C=`_labelText_dw8mz_18`,w=`_root_dw8mz_27`,T=`_content_dw8mz_35`,E={labelLink:S,labelText:C,root:w,content:T}}));function be(e,t){let n=ne(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,label:e.href?(0,j.jsx)(c,{className:E.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,j.jsx)(`span`,{className:E.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:p(e.value,n),previousValue:i,previousShare:t&&i!==void 0?p(i,n):void 0,delta:t&&i!==void 0?re(e.value,i):void 0}})}function D(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:m(e.link,{allowRelative:!0})??void 0}))}function O({rows:e=[],withComparison:t=!1}){return(0,j.jsx)(ie,{data:be(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function k(){let{reportParams:e}=ee(),{comparisonRows:n,hasComparison:r,isLoading:a,isFetching:s,isError:c,refetch:l}=te(e,{maxRows:10}),u=(0,i.useMemo)(()=>D(n?.rows??[]),[n]),d=r;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{className:E.content,children:(0,j.jsx)(ce,{isLoading:a,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(O,{rows:u,withComparison:d})})}),(0,j.jsx)(g,{children:(0,j.jsx)(se,{report:`downloads`})})]})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(`div`,{className:E.root,children:(0,j.jsx)(k,{})})})}var j,M,xe=e((()=>{f(),a(),n(),s(),l(),me(),ye(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Se=e((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ce=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:d(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:d(!1,e)}})}function we({withComparison:e,...t}){return(0,U.jsx)(v,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:d(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),oe(),_e(),ve(),de(),fe(),le(),pe(),xe(),Se(),Ce(),U=r(),h(),ge(),W=`storybook/file-downloads`,G=_(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[b,y]},J={render:V,args:{withComparison:!0},decorators:[b,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(we,{...e}),args:{...he,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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