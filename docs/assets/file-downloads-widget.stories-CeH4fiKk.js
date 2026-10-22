import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{pn as o,t as s,wt as ee}from"./src-5g9sGwvT.js";import{F as c,Ft as l,Mt as u,Yt as d,f as te,y as ne,z as re}from"./charts-provider-bUtI3a4j.js";import{a as f}from"./src-DwJ-Sp05.js";import{t as ie}from"./widget-state-DmJn3qOC.js";import"./rows-DoJXoHhN.js";import{r as ae,t as oe}from"./leaderboard-skeleton-C5ZIz2fL.js";import{a as se,o as p}from"./widget-state-QAs2RT9y.js";import{n as m,r as h}from"./with-story-router-CyVN4A4U.js";import{i as ce,o as le}from"./build-leaderboard-chart-data-DKIdE2af.js";import{A as ue,H as de,M as g,N as _,U as v,V as y,W as fe,j as b,t as pe}from"./src-8B4VP-Wm.js";import{n as me,t as he}from"./use-no-views-empty-state-CxhOKb5k.js";import{n as ge,t as _e}from"./register-stats-mocks-Nvcu00DF.js";import{n as ve,t as x}from"./force-stats-mock-state-BRgWvvYE.js";var S,C,w,ye=e((()=>{S=`_root_19tfr_1`,C=`_content_19tfr_9`,w={root:S,content:C}}));function T(e,t){let n=u(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...ce({label:e.label,media:{kind:`none`},action:le({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:l(e.value,n),previousValue:i,previousShare:t&&i!==void 0?l(i,n):void 0,delta:t&&i!==void 0?d(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:f(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:n=!1}){return(0,A.jsx)(ae,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:T(e,n),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function O(){let{reportParams:e}=re(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ee(e,{maxRows:10}),u=(0,i.useMemo)(()=>E(r?.rows??[]),[r]),d=a,f=me({isLoading:o,isError:c,isEmpty:u.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return te({report:`downloads`,csv:{exporter:ne,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:u.length}}),(0,A.jsx)(`div`,{className:w.content,children:(0,A.jsx)(ie,{isLoading:f.isLoading,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:f.empty,renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(D,{rows:u,withComparison:d})})})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(`div`,{className:w.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{s(),a(),n(),pe(),he(),ye(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,be=e((()=>{N=`jpa/file-downloads`,P=`jpa/download`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:o(!1,e)}})}function xe({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),se(),_e(),ve(),v(),m(),_(),ue(),M(),be(),U=r(),p(),ge(),W=`storybook/file-downloads`,G=g(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[b,h]},J={render:V,args:{withComparison:!0},decorators:[b,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,h],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,h],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,h],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(xe,{...e}),args:{...y,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};