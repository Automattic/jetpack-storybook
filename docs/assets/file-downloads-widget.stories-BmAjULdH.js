import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bs as i,Vu as ee,ku as a,t as o}from"./build-module-DNhkEVJn.js";import{m as s,v as te}from"./hooks-BNYntG_W.js";import{cn as c,t as l,ut as u}from"./src-Cz6uELaK.js";import{Et as d,Ot as f,Tt as p}from"./helpers-BSsxUP7j.js";import"./rows-DAmD2BmE.js";import{r as ne,t as re}from"./leaderboard-skeleton-DlAmydDf.js";import{n as ie,r as m}from"./with-story-router-DJq7_igr.js";import{n as ae,r as oe}from"./register-report-mocks-DXhMAhe-.js";import{b as se,i as ce,m as h,o as le}from"./leaderboard-CZlr_3b3.js";import{t as ue}from"./widget-state-Dibf9iiP.js";import{a as de}from"./src-CUTF5VR_.js";import{o as g}from"./report-metric-5nJejdqs.js";import{k as _,t as v}from"./src-Da-6qwPK.js";import{a as fe,d as pe,f as me,i as he,n as ge,p as _e,r as y,u as ve}from"./with-widget-canvas-Exi8inW-.js";import{n as ye,t as be}from"./register-stats-mocks-l7pl8CZM.js";import{n as xe,t as b}from"./force-stats-mock-state-DhA7nUcc.js";var x,S,C,w=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function T(e,t){let n=d(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...ce({label:e.label,media:{kind:`none`},action:le({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:p(e.value,n),previousValue:i,previousShare:t&&i!==void 0?p(i,n):void 0,delta:t&&i!==void 0?f(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:de(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(ne,{data:T(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function O(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=u(e,{maxRows:10}),l=(0,ee.useMemo)(()=>E(r?.rows??[]),[r]),d=i;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:C.content,children:(0,A.jsx)(ue,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,A.jsx)(re,{rows:10}),children:(0,A.jsx)(D,{rows:l,withComparison:d})})}),(0,A.jsxs)(h,{children:[(0,A.jsx)(se,{report:`downloads`}),(0,A.jsx)(g,{exporter:_,status:{isLoading:a,isFetching:o,isError:n.isError},rowCount:l.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(s,{attributes:e,children:(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{l(),a(),n(),v(),w(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Se=e((()=>{o(),N={icon:i,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ce=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:c(!1,e)}})}function we({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ae(),be(),xe(),me(),ie(),fe(),ge(),M(),Se(),Ce(),U=r(),oe(),ye(),W=`storybook/file-downloads`,G=he(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,m]},J={render:V,args:{withComparison:!0},decorators:[y,m]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(we,{...e}),args:{...ve,withComparison:!0},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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