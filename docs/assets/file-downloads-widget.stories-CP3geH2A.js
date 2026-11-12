import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as ee}from"./build-module-D8x1-0PG.js";import{B as te,I as a,b as o,f as ne}from"./charts-provider-BmHzZhpi.js";import{Sn as s,jt as c,t as l}from"./src-BcILQ8ng.js";import{a as u}from"./src-2y_BLceg.js";import{t as re}from"./widget-state-DnbF8hrz.js";import{t as d}from"./src-BXUpbDcT.js";import"./constants-JU419spr.js";import{r as f,t as ie}from"./leaderboard-skeleton-BYzOIm-8.js";import{n as p,r as ae}from"./register-report-mocks-DEKgkFm4.js";import{l as m,s as oe}from"./locations-geo-chart-Cn5rUZiD.js";import{n as se,r as h}from"./with-story-router-CceBZUiL.js";import{a as ce,c as g,i as _,l as v,o as y,r as b,s as x,u as le}from"./with-widget-canvas-BXILxgDl.js";import{n as ue,t as de}from"./use-no-views-empty-state-Dp1iAn10.js";import{n as fe,t as pe}from"./register-stats-mocks-BLfWbTqK.js";import{n as me,t as S}from"./force-stats-mock-state-CZ4B651-.js";var C,w,T,he=e((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function ge(e){return e.map((e,t)=>({id:`${t}-${e.href??e.label}`,...oe({label:e.label,media:{kind:`none`},action:m({href:e.href,hasChildren:!1})}),currentValue:e.value,previousValue:e.previousValue}))}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:u(e.link,{allowRelative:!0})??void 0}))}function _e({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(f,{data:ge(e),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:s,isError:l,refetch:u}=c(e,{maxRows:10}),d=(0,ee.useMemo)(()=>E(r?.rows??[]),[r]),f=i,p=ue({isLoading:a,isError:l,isEmpty:d.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return ne({csv:{exporter:o,status:{isLoading:a,isFetching:s,isError:n.isError},rowCount:d.length}}),(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(re,{isLoading:p.isLoading,isFetching:s,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:p.empty,renderLoading:(0,k.jsx)(ie,{rows:10}),children:(0,k.jsx)(_e,{rows:d,withComparison:f})})})}function O({attributes:e={}}){return(0,k.jsx)(a,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{l(),i(),n(),d(),de(),he(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,ve=e((()=>{M=`jpa/file-downloads`,N=`jpa/download`,P=`Top downloaded`,F=`Most downloaded files on your site.`,I={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fdownloads`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:s(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:s(!1,e)}})}function ye({withComparison:e,...t}){return(0,U.jsx)(g,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:s(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),p(),pe(),me(),v(),se(),y(),b(),j(),ve(),U=r(),ae(),fe(),W=`storybook/file-downloads`,G=ce(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[_,h]},J={render:V,args:{withComparison:!0},decorators:[_,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(S(`stats/file-downloads`,`loading`),()=>S(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(S(`stats/file-downloads`,`error`),()=>S(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[_,h],beforeEach:()=>(S(`stats/file-downloads`,`empty`),()=>S(`stats/file-downloads`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(ye,{...e}),args:{...x,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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