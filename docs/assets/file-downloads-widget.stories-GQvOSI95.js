import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{j as ee,t as i}from"./build-module-Dxhc9xxH.js";import{Cn as a,jt as te,t as o}from"./src-DYUzie_4.js";import{H as ne,I as s,b as c,f as re}from"./charts-provider-DO3mFpTF.js";import{a as l}from"./src-C6EvQyw6.js";import{t as ie}from"./widget-state-CkZvFpOp.js";import{i as u,n as d,r as f}from"./with-story-router-eSHEwlx0.js";import"./constants-zhlAM2wx.js";import{r as p,t as m}from"./leaderboard-skeleton-Bq7kSY_J.js";import{n as h,r as g}from"./register-report-mocks-BeYde27u.js";import{l as _,s as v}from"./locations-geo-chart-hikZ0-HS.js";import{a as y,c as ae,i as b,l as oe,o as se,r as ce,s as le,u as ue}from"./with-widget-canvas-CEyx1APf.js";import{n as de,t as fe}from"./use-no-views-empty-state-Ct3UVtjB.js";import{n as pe,t as me}from"./register-stats-mocks-CJOniopw.js";import{n as he,t as x}from"./force-stats-mock-state-BeA_SS9Q.js";var S,C,w,ge=e((()=>{S=`_root_19tfr_1`,C=`_content_19tfr_9`,w={root:S,content:C}}));function _e(e){return e.map((e,t)=>({id:`${t}-${e.href??e.label}`,...v({label:e.label,media:{kind:`none`},action:_({href:e.href,hasChildren:!1})}),currentValue:e.value,previousValue:e.previousValue}))}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:l(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(p,{data:_e(e),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=ne(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:l}=te(e,{maxRows:10}),u=(0,ee.useMemo)(()=>T(r?.rows??[]),[r]),d=i,f=de({isLoading:a,isError:s,isEmpty:u.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return re({csv:{exporter:c,status:{isLoading:a,isFetching:o,isError:n.isError},rowCount:u.length}}),(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ie,{isLoading:f.isLoading,isFetching:o,isError:u.length===0&&s,isEmpty:u.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:f.empty,renderLoading:(0,k.jsx)(m,{rows:10}),children:(0,k.jsx)(E,{rows:u,withComparison:d})})})}function O({attributes:e={}}){return(0,k.jsx)(s,{attributes:e,children:(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{o(),i(),n(),u(),fe(),ge(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,ve=e((()=>{M=`jpa/file-downloads`,N=`jpa/download`,P=`Top downloaded`,F=`Most downloaded files on your site.`,I={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fdownloads`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:a(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:a(!1,e)}})}function ye({withComparison:e,...t}){return(0,U.jsx)(ae,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:a(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),h(),me(),he(),oe(),d(),se(),ce(),j(),ve(),U=r(),g(),pe(),W=`storybook/file-downloads`,G=y(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[b,f]},J={render:V,args:{withComparison:!0},decorators:[b,f]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,f],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,f],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,f],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(ye,{...e}),args:{...le,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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