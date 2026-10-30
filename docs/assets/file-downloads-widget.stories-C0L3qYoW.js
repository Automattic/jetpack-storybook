import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-sy00sX6O.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as ee}from"./build-module-CPdP9iK8.js";import{B as te,I as a,b as ne,f as re}from"./charts-provider-CQF40eTg.js";import{kt as o,t as s,vn as c}from"./src-BwEQ_OJQ.js";import{a as l}from"./src-BcIGLfXO.js";import{t as ie}from"./widget-state-C5-GuX-o.js";import{i as u,n as d,r as f}from"./with-story-router-DkeR1qN6.js";import"./constants-B9OTkkI1.js";import{r as ae,t as oe}from"./leaderboard-skeleton-D_AZPH-Z.js";import{n as p,r as se}from"./register-report-mocks-B-OTOegr.js";import{l as ce,s as le}from"./locations-geo-chart-DX-XwRw1.js";import{a as m,g as h,h as g,i as _,m as v,n as y,p as ue,r as b}from"./with-widget-canvas-8ry8XA2Z.js";import{n as de,t as fe}from"./use-no-views-empty-state-DLccOkT0.js";import{n as pe,t as me}from"./register-stats-mocks-Cy5KDOyv.js";import{n as he,t as x}from"./force-stats-mock-state-DO-ju_N1.js";var S,C,w,ge=e((()=>{S=`_root_19tfr_1`,C=`_content_19tfr_9`,w={root:S,content:C}}));function _e(e){return e.map((e,t)=>({id:`${t}-${e.href??e.label}`,...le({label:e.label,media:{kind:`none`},action:ce({href:e.href,hasChildren:!1})}),currentValue:e.value,previousValue:e.previousValue}))}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:l(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(ae,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:_e(e),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:s,isError:c,refetch:l}=o(e,{maxRows:10}),u=(0,ee.useMemo)(()=>T(r?.rows??[]),[r]),d=i,f=de({isLoading:a,isError:c,isEmpty:u.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return re({csv:{exporter:ne,status:{isLoading:a,isFetching:s,isError:n.isError},rowCount:u.length}}),(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ie,{isLoading:f.isLoading,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:f.empty,renderLoading:(0,k.jsx)(oe,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:d})})})}function O({attributes:e={}}){return(0,k.jsx)(a,{attributes:e,children:(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{s(),i(),n(),u(),fe(),ge(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,ve=e((()=>{M=`jpa/file-downloads`,N=`jpa/download`,P=`Top downloaded`,F=`Most downloaded files on your site.`,I={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fdownloads`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:c(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:c(!1,e)}})}function ye({withComparison:e,...t}){return(0,U.jsx)(v,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),p(),me(),he(),g(),d(),m(),y(),j(),ve(),U=r(),se(),pe(),W=`storybook/file-downloads`,G=_(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[b,f]},J={render:V,args:{withComparison:!0},decorators:[b,f]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,f],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,f],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,f],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(ye,{...e}),args:{...ue,withComparison:!0},argTypes:{...h,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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