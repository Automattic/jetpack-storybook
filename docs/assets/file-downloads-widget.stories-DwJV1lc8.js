import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{p as ee,t as i}from"./build-module-nWjoY2Yf.js";import{jt as te,t as a,xn as o}from"./src-0XClGMDx.js";import{H as ne,I as s,b as re,f as ie}from"./charts-provider-BKHh8K1i.js";import{a as c}from"./src-PCKrVuqr.js";import{t as ae}from"./widget-state-D6mj8swk.js";import{i as l,n as u,r as d}from"./with-story-router-W3LGe3w3.js";import"./constants-m1ZDneCk.js";import{r as oe,t as se}from"./leaderboard-skeleton-BRAxeAtK.js";import{n as f,r as p}from"./register-report-mocks-Ch99HCsV.js";import{l as ce,s as le}from"./locations-geo-chart-sT-8xR5_.js";import{a as m,c as ue,i as h,l as g,o as _,r as v,s as y,u as b}from"./with-widget-canvas-Dk66dcs4.js";import{n as de,t as fe}from"./use-no-views-empty-state-CZW10kIJ.js";import{n as pe,t as me}from"./register-stats-mocks-CgwFqLbO.js";import{n as he,t as x}from"./force-stats-mock-state-BAjXKLs7.js";var S,C,w,ge=e((()=>{S=`_root_19tfr_1`,C=`_content_19tfr_9`,w={root:S,content:C}}));function _e(e){return e.map((e,t)=>({id:`${t}-${e.href??e.label}`,...le({label:e.label,media:{kind:`none`},action:ce({href:e.href,hasChildren:!1})}),currentValue:e.value,previousValue:e.previousValue}))}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:c(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(oe,{data:_e(e),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=ne(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=te(e,{maxRows:10}),l=(0,ee.useMemo)(()=>T(r?.rows??[]),[r]),u=i,d=de({isLoading:a,isError:s,isEmpty:l.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return ie({csv:{exporter:re,status:{isLoading:a,isFetching:o,isError:n.isError},rowCount:l.length}}),(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ae,{isLoading:d.isLoading,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:d.empty,renderLoading:(0,k.jsx)(se,{rows:10}),children:(0,k.jsx)(E,{rows:l,withComparison:u})})})}function O({attributes:e={}}){return(0,k.jsx)(s,{attributes:e,children:(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{a(),i(),n(),l(),fe(),ge(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,ve=e((()=>{M=`jpa/file-downloads`,N=`jpa/download`,P=`Top downloaded`,F=`Most downloaded files on your site.`,I={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fdownloads`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:o(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:o(!1,e)}})}function ye({withComparison:e,...t}){return(0,U.jsx)(ue,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:o(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{a(),f(),me(),he(),g(),u(),_(),v(),j(),ve(),U=r(),p(),pe(),W=`storybook/file-downloads`,G=m(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[h,d]},J={render:V,args:{withComparison:!0},decorators:[h,d]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[h,d],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[h,d],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[h,d],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(ye,{...e}),args:{...y,withComparison:!0},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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