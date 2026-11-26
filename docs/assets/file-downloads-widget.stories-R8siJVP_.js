import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{j as i,t as a}from"./build-module-Dxhc9xxH.js";import{Bt as o,Pn as s,t as c}from"./src-CAeVry9S.js";import{R as l,S as ee,W as te,m as ne}from"./charts-provider-BAK03wIh.js";import{a as u}from"./src-CurAK1ut.js";import{t as d}from"./widget-state-BDhu7m0a.js";import{i as f,n as p,r as m}from"./with-story-router-1HJ-45N0.js";import"./constants-obwTJAVB.js";import{r as re,t as ie}from"./leaderboard-skeleton-i6bY8Ivd.js";import{n as ae,r as oe}from"./register-report-mocks-DkiLvmPg.js";import{l as h,s as g}from"./locations-geo-chart-BP-izUDy.js";import{a as _,c as v,i as y,l as b,o as se,r as ce,s as le,u as ue}from"./with-widget-canvas-BDHYxNN6.js";import{n as de,t as fe}from"./use-no-views-empty-state-O8YsokRI.js";import{n as pe,t as me}from"./register-stats-mocks-CutN0CmB.js";import{n as he,t as x}from"./force-stats-mock-state-C0AFQ1mu.js";var S,C,w,ge=e((()=>{S=`_root_19tfr_1`,C=`_content_19tfr_9`,w={root:S,content:C}}));function _e(e){return e.map((e,t)=>({id:`${t}-${e.href??e.label}`,...g({label:e.label,media:{kind:`none`},action:h({href:e.href,hasChildren:!1})}),currentValue:e.value,previousValue:e.previousValue}))}function ve(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:u(e.link,{allowRelative:!0})??void 0}))}function T({rows:e=[],withComparison:n=!1}){return(0,O.jsx)(re,{data:_e(e),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:k,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function E(){let{reportParams:e}=te(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=o(e,{maxRows:10}),f=(0,i.useMemo)(()=>ve(r?.rows??[]),[r]),p=a,m=de({isLoading:s,isError:l,isEmpty:f.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return ne({csv:{exporter:ee,status:{isLoading:s,isFetching:c,isError:n.isError},rowCount:f.length}}),(0,O.jsx)(`div`,{className:w.content,children:(0,O.jsx)(d,{isLoading:m.isLoading,isFetching:c,isError:f.length===0&&l,isEmpty:f.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:m.empty,renderLoading:(0,O.jsx)(ie,{rows:10}),children:(0,O.jsx)(T,{rows:f,withComparison:p})})})}function D({attributes:e={}}){return(0,O.jsx)(l,{attributes:e,children:(0,O.jsx)(`div`,{className:w.root,children:(0,O.jsx)(E,{})})})}var O,k,A=e((()=>{c(),a(),n(),f(),fe(),ge(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}}})),j,M,N,P,F,I,L,R,z,ye=e((()=>{j=`jpa/file-downloads`,M=`jpa/download`,N=`Top downloaded`,P=`Most downloaded files on your site.`,F={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`stats`,L=`framed`,R=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fdownloads`}],z={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L,actions:R}}));function B({withComparison:e}){return(0,U.jsx)(D,{attributes:{reportParams:s(e)}})}function V(e){return(0,U.jsx)(D,{attributes:{reportParams:s(!1,e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(v,{...t,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:s(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),ae(),me(),he(),b(),p(),se(),ce(),A(),ye(),U=r(),oe(),pe(),W=`storybook/file-downloads`,G=_(z),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:B,args:{withComparison:!1},decorators:[y,m]},J={render:B,args:{withComparison:!0},decorators:[y,m]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(H,{...e}),args:{...le,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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