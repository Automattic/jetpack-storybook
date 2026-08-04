import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{$t as o,n as s}from"./build-module-DoJYX5DX.js";import{D as c,G as l,S as ee,W as u,Z as d,tt as f}from"./report-metric-BZKq9I9M.js";import{t as p,u as m}from"./build-module-LhXlECjP.js";import{J as te,X as ne,pn as re,q as h,ur as g,xt as _}from"./chart-tooltip-BHxZ4UFz.js";import{t as ie}from"./leaderboard-chart-CjkzsgMY.js";import{r as ae}from"./src-B7__Z5UC.js";import{t as v}from"./widget-state-muBMjCZx.js";import{C as oe,D as se,E as ce,O as le,S as ue,T as de,b as y,k as b,t as fe,w as pe,x}from"./src-Cpa-QPvJ.js";import{n as me,t as he}from"./register-stats-mocks-xbxLfDBb.js";import{n as ge,t as S}from"./force-stats-mock-state-Cer6nttX.js";var C,w,T,E,D,_e=e((()=>{C=`_labelLink_dw8mz_1`,w=`_labelText_dw8mz_18`,T=`_root_dw8mz_27`,E=`_content_dw8mz_35`,D={labelLink:C,labelText:w,root:T,content:E}}));function ve(e,t){let n=te(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,label:e.href?(0,A.jsx)(m,{className:D.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,A.jsx)(`span`,{className:D.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:h(e.value,n),previousValue:i,previousShare:t&&i!==void 0?h(i,n):void 0,delta:t&&i!==void 0?ne(e.value,i):void 0}})}function O(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:ae(e.link,{allowRelative:!0})??void 0}))}function ye({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(ie,{data:ve(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function be({max:e}){let{reportParams:n}=f(),{comparisonRows:r,hasComparison:a,isLoading:s,isFetching:l,isError:u,refetch:d}=re(n,{maxRows:e}),p=(0,i.useMemo)(()=>O(r?.rows??[]),[r]),m=a;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(v,{isLoading:s,isFetching:l,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ye,{rows:p,withComparison:m})})}),(0,A.jsx)(c,{children:(0,A.jsx)(ee,{report:`downloads`})})]})}function k({attributes:e={}}){let t=e?.max??10;return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(be,{max:t})})})}var A,j,M=e((()=>{_(),a(),n(),s(),p(),fe(),_e(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,xe=e((()=>{n(),s(),N={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,Se=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:10,reportParams:g(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:10,reportParams:g(!1,e)}})}function Ce({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{max:10,reportParams:g(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),u(),he(),ge(),ce(),le(),oe(),y(),M(),xe(),Se(),U=r(),l(),me(),W=`storybook/file-downloads`,G=ue(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,b]},J={render:V,args:{withComparison:!0},decorators:[x,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/file-downloads`,`loading`),()=>S(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/file-downloads`,`error`),()=>S(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/file-downloads`,`empty`),()=>S(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...pe,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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