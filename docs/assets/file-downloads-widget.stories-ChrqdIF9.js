import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{pn as o,t as s,wt as c}from"./src-5g9sGwvT.js";import{Ot as l,dt as u,m as d,mt as f,v as ee}from"./charts-provider-Dz_9KfQe.js";import{D as p,Q as m,X as h,Y as te,Z as ne,ct as re,lt as ie,ot as ae,st as oe,t as se,x as ce}from"./src-CwWcdYh9.js";import{a as le}from"./src-BHkmuvTS.js";import{t as g}from"./widget-state-CgiqWOxt.js";import"./rows-DoJXoHhN.js";import{r as ue,t as _}from"./leaderboard-skeleton-Ciu6IUKd.js";import{a as de,o as fe}from"./widget-state-B6SJsJzX.js";import{n as v,r as y}from"./with-story-router-Bwg0edRp.js";import{i as pe,o as me}from"./build-leaderboard-chart-data-B1eNI0zc.js";import{f as he,o as ge}from"./leaderboard-bG98GUJZ.js";import{n as _e,t as ve}from"./use-no-views-empty-state-BMJXzusd.js";import{n as ye,t as be}from"./register-stats-mocks-Nvcu00DF.js";import{n as xe,t as b}from"./force-stats-mock-state-BBDmAC5l.js";var x,S,C,w=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function T(e,t){let n=u(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...pe({label:e.label,media:{kind:`none`},action:me({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:f(e.value,n),previousValue:i,previousShare:t&&i!==void 0?f(i,n):void 0,delta:t&&i!==void 0?l(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:le(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:n=!1}){return(0,A.jsx)(ue,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:T(e,n),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function O(){let{reportParams:e}=ee(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:l,refetch:u}=c(e,{maxRows:10}),d=(0,i.useMemo)(()=>E(r?.rows??[]),[r]),f=a,m=_e({isLoading:o,isError:l,isEmpty:d.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:C.content,children:(0,A.jsx)(g,{isLoading:m.isLoading,isFetching:s,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:m.empty,renderLoading:(0,A.jsx)(_,{rows:10}),children:(0,A.jsx)(D,{rows:d,withComparison:f})})}),(0,A.jsxs)(ge,{children:[(0,A.jsx)(he,{report:`downloads`}),(0,A.jsx)(ce,{exporter:p,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:d.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{s(),a(),n(),se(),ve(),w(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,Se=e((()=>{N=`jpa/file-downloads`,P=`jpa/download`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:o(!1,e)}})}function Ce({withComparison:e,...t}){return(0,U.jsx)(oe,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),de(),be(),xe(),re(),v(),m(),te(),M(),Se(),U=r(),fe(),ye(),W=`storybook/file-downloads`,G=ne(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[h,y]},J={render:V,args:{withComparison:!0},decorators:[h,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[h,y],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[h,y],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[h,y],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...ae,withComparison:!0},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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