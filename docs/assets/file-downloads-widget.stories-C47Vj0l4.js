import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-CDZL_1rk.js";import{pn as o,t as s,wt as c}from"./src-CFs84l7c.js";import{Lt as l,gt as u,m as d,v as ee,yt as f}from"./charts-provider-DwDs1k0n.js";import{a as p}from"./src-DIu-iWqU2.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-BnAxdV5e.js";import{n as re,r as ie}from"./register-report-mocks-CUUO0DYG.js";import{t as ae}from"./widget-state-HGsnRJAb.js";import{n as oe,r as m}from"./with-story-router-B8AmDh4M.js";import{i as se,o as ce}from"./build-leaderboard-chart-data-DierAzTT.js";import{f as le,o as ue}from"./leaderboard-BwG2EreL.js";import{C as h,k as g,t as _}from"./src-BcJ3rA0v.js";import{a as de,g as fe,h as pe,i as me,m as he,n as ge,p as _e,r as v}from"./with-widget-canvas-BX31JTd0.js";import{n as ve,t as ye}from"./use-no-views-empty-state-BqUrp9AL.js";import{n as be,t as xe}from"./register-stats-mocks-DeGOo2e_.js";import{n as Se,t as y}from"./force-stats-mock-state-Bd8fyjOy.js";var b,x,S,C=e((()=>{b=`_root_19tfr_1`,x=`_content_19tfr_9`,S={root:b,content:x}}));function w(e,t){let n=u(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:ce({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:f(e.value,n),previousValue:i,previousShare:t&&i!==void 0?f(i,n):void 0,delta:t&&i!==void 0?l(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:p(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(te,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:w(e,n),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=ee(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:l,refetch:u}=c(e,{maxRows:10}),d=(0,i.useMemo)(()=>T(r?.rows??[]),[r]),f=a,p=ve({isLoading:o,isError:l,isEmpty:d.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{className:S.content,children:(0,k.jsx)(ae,{isLoading:p.isLoading,isFetching:s,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:p.empty,renderLoading:(0,k.jsx)(ne,{rows:10}),children:(0,k.jsx)(E,{rows:d,withComparison:f})})}),(0,k.jsxs)(ue,{children:[(0,k.jsx)(le,{report:`downloads`}),(0,k.jsx)(h,{exporter:g,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:d.length})]})]})}function O({attributes:e={}}){return(0,k.jsx)(d,{attributes:e,children:(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{s(),a(),n(),_(),ye(),C(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Ce=e((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,we=e((()=>{N=`jpa/file-downloads`,P=`jpa/download`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:o(!1,e)}})}function Te({withComparison:e,...t}){return(0,U.jsx)(he,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),re(),xe(),Se(),pe(),oe(),de(),ge(),j(),Ce(),we(),U=r(),ie(),be(),W=`storybook/file-downloads`,G=me(B,M),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[v,m]},J={render:V,args:{withComparison:!0},decorators:[v,m]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v,m],beforeEach:()=>(y(`stats/file-downloads`,`loading`),()=>y(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v,m],beforeEach:()=>(y(`stats/file-downloads`,`error`),()=>y(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[v,m],beforeEach:()=>(y(`stats/file-downloads`,`empty`),()=>y(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{..._e,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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