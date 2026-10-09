import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-Cm3Kd3py.js";import{On as o,t as s,yt as ee}from"./src-eFflVWkb.js";import{Jt as c,Yt as l,Zt as u,_ as d,x as te}from"./charts-provider-CG5jlyMR.js";import{a as f}from"./src-Dc8Be7Yx.js";import"./rows-DAmD2BmE.js";import{r as ne,t as re}from"./leaderboard-skeleton-DsfQpqQ8.js";import{n as ie,r as ae}from"./register-report-mocks-CaddGZDb.js";import{t as oe}from"./widget-state-Dy1Xd117.js";import{n as p,r as m}from"./with-story-router-Beljd9ki.js";import{i as h,o as g,p as _,y as se}from"./leaderboard-Bd0dcrkK.js";import{c as ce,n as le}from"./components-D1il1gd6.js";import{t as ue}from"./src-B1RxCXze.js";import{a as de,g as fe,h as pe,i as me,m as he,n as ge,p as _e,r as v}from"./with-widget-canvas-fJNR6VE0.js";import{n as ve,t as ye}from"./register-stats-mocks-D5UjlxjH.js";import{n as be,t as y}from"./force-stats-mock-state-DAUuJlfM.js";var b,x,S,xe=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function C(e,t){let n=l(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...h({label:e.label,media:{kind:`none`},action:g({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:c(e.value,n),previousValue:i,previousShare:t&&i!==void 0?c(i,n):void 0,delta:t&&i!==void 0?u(e.value,i):void 0}})}function w(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:f(e.link,{allowRelative:!0})??void 0}))}function T({rows:e=[],withComparison:t=!1}){return(0,O.jsx)(ne,{data:C(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:k})}function E(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ee(e,{maxRows:10}),u=(0,i.useMemo)(()=>w(r?.rows??[]),[r]),d=a;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{className:S.content,children:(0,O.jsx)(oe,{isLoading:o,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,O.jsx)(re,{rows:10}),children:(0,O.jsx)(T,{rows:u,withComparison:d})})}),(0,O.jsxs)(_,{children:[(0,O.jsx)(se,{report:`downloads`}),(0,O.jsx)(le,{exporter:ce,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:u.length})]})]})}function D({attributes:e={}}){return(0,O.jsx)(d,{attributes:e,children:(0,O.jsx)(`div`,{className:S.root,children:(0,O.jsx)(E,{})})})}var O,k,A=e((()=>{s(),a(),n(),ue(),xe(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}}})),j,M=e((()=>{j={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,Se=e((()=>{N=`jpa/file-downloads`,P=`jpa/download`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(D,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:o(!1,e)}})}function Ce({withComparison:e,...t}){return(0,U.jsx)(he,{...t,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),ie(),ye(),be(),pe(),p(),de(),ge(),A(),M(),Se(),U=r(),ae(),ve(),W=`storybook/file-downloads`,G=me(B,j),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[v,m]},J={render:V,args:{withComparison:!0},decorators:[v,m]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v,m],beforeEach:()=>(y(`stats/file-downloads`,`loading`),()=>y(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v,m],beforeEach:()=>(y(`stats/file-downloads`,`error`),()=>y(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[v,m],beforeEach:()=>(y(`stats/file-downloads`,`empty`),()=>y(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{..._e,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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