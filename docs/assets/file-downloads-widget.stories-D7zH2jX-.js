import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bs as i,Vu as a,ku as o,t as s}from"./build-module-DNhkEVJn.js";import{_ as c,dn as l,fn as u,mn as d,x as ee}from"./charts-provider-BdME75-o.js";import{fn as f,mt as p,t as m}from"./src-rfo0sAv_.js";import"./rows-DAmD2BmE.js";import{r as te,t as ne}from"./leaderboard-skeleton-DnnTTf5J.js";import{n as re,r as h}from"./with-story-router-F7qzOROC.js";import{n as ie,r as ae}from"./register-report-mocks-C_NZW4bT.js";import{b as oe,i as se,m as ce,o as g}from"./leaderboard-CoLtXl3I.js";import{t as le}from"./widget-state-Dbjbf2k6.js";import{a as ue}from"./src-Ce7eATd2.js";import{f as de,o as fe}from"./report-metric-mlNAn3-h.js";import{t as _}from"./src-DR0p1hHQ.js";import{a as v,d as pe,f as me,i as he,n as ge,p as _e,r as y,u as ve}from"./with-widget-canvas-BIO8a09x.js";import{n as ye,t as be}from"./register-stats-mocks-CWDCRsUy.js";import{n as xe,t as b}from"./force-stats-mock-state-CSZCKXcI.js";var x,S,C,w=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function T(e,t){let n=u(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...se({label:e.label,media:{kind:`none`},action:g({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:l(e.value,n),previousValue:i,previousShare:t&&i!==void 0?l(i,n):void 0,delta:t&&i!==void 0?d(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:ue(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(te,{data:T(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function O(){let{reportParams:e}=ee(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:o,isFetching:s,isError:c,refetch:l}=p(e,{maxRows:10}),u=(0,a.useMemo)(()=>E(r?.rows??[]),[r]),d=i;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:C.content,children:(0,A.jsx)(le,{isLoading:o,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,A.jsx)(ne,{rows:10}),children:(0,A.jsx)(D,{rows:u,withComparison:d})})}),(0,A.jsxs)(ce,{children:[(0,A.jsx)(oe,{report:`downloads`}),(0,A.jsx)(fe,{exporter:de,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:u.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{m(),o(),n(),_(),w(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Se=e((()=>{s(),N={icon:i,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ce=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:f(!1,e)}})}function we({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ie(),be(),xe(),me(),re(),v(),ge(),M(),Se(),Ce(),U=r(),ae(),ye(),W=`storybook/file-downloads`,G=he(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,h]},J={render:V,args:{withComparison:!0},decorators:[y,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(we,{...e}),args:{...ve,withComparison:!0},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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