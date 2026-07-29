import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{$t as o,n as s}from"./build-module-DmVuor49.js";import{t as c,u as l}from"./build-module-B07GZ8y5.js";import{Ct as u,J as d,X as f,fr as p,hn as m,q as h}from"./chart-tooltip-D1h4g3rx.js";import{t as ee}from"./leaderboard-chart-Bj8FENM6.js";import{I as te,L as ne,S as re,U as ie,b as ae,q as oe}from"./report-metric-DrUls6Lq.js";import{t as se}from"./widget-state-DSBBpEYr.js";import{r as ce}from"./src-Zd-s9GkL.js";import{C as g,D as le,E as _,O as ue,S as de,T as fe,b as pe,k as v,t as me,w as y,x as b}from"./src-B7pwfil2.js";import{n as he,t as ge}from"./register-stats-mocks-C52TvaAD.js";import{n as _e,t as x}from"./force-stats-mock-state-BsgGbgiW.js";var S,C,w,T,E,ve=e((()=>{S=`_labelLink_dw8mz_1`,C=`_labelText_dw8mz_18`,w=`_root_dw8mz_27`,T=`_content_dw8mz_35`,E={labelLink:S,labelText:C,root:w,content:T}}));function ye(e,t){let n=d(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,label:e.href?(0,A.jsx)(l,{className:E.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,A.jsx)(`span`,{className:E.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:h(e.value,n),previousValue:i,previousShare:t&&i!==void 0?h(i,n):void 0,delta:t&&i!==void 0?f(e.value,i):void 0}})}function be(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:ce(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(ee,{data:ye(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function O({max:e}){let{reportParams:n}=oe(),{comparisonRows:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=m(n,{maxRows:e}),d=(0,i.useMemo)(()=>be(r?.rows??[]),[r]),f=a;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(se,{isLoading:s,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(D,{rows:d,withComparison:f})})}),(0,A.jsx)(re,{children:(0,A.jsx)(ae,{report:`downloads`})})]})}function k({attributes:e={}}){let t=e?.max??10;return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:(0,A.jsx)(O,{max:t})})})}var A,j,M=e((()=>{u(),a(),n(),s(),c(),me(),ve(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,xe=e((()=>{n(),s(),N={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,Se=e((()=>{P=`jpa/file-downloads`,F=`File downloads`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:10,reportParams:p(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:10,reportParams:p(!1,e)}})}function Ce({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{max:10,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),te(),ge(),_e(),_(),ue(),g(),pe(),M(),xe(),Se(),U=r(),ne(),he(),W=`storybook/file-downloads`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[b,v]},J={render:V,args:{withComparison:!0},decorators:[b,v]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,v],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,v],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,v],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...y,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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