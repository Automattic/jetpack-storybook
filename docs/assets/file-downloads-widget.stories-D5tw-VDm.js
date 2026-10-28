import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{F as o,bn as s,f as ee,on as c,rn as l,y as u,z as d}from"./charts-provider-CYqb6BOr.js";import{Et as te,hn as f,t as p}from"./src-DfQ3R5pV.js";import{a as m}from"./src-B2LwOkIk.js";import{t as ne}from"./widget-state-BBdc069e.js";import{i as re,n as ie,r as h}from"./with-story-router-Bo0YjvIH.js";import"./constants-B9OTkkI1.js";import{r as g,t as ae}from"./leaderboard-skeleton-MxRUJwm_.js";import{n as oe,r as se}from"./register-report-mocks-xm2nLXrN.js";import{l as ce,s as le}from"./locations-geo-chart-CAPc8VA6.js";import{a as _,g as ue,h as de,i as fe,m as pe,n as v,p as y,r as b}from"./with-widget-canvas-CQ23aStp.js";import{n as me,t as he}from"./use-no-views-empty-state-bIazHZ_I.js";import{n as ge,t as _e}from"./register-stats-mocks-Nvcu00DF.js";import{n as ve,t as x}from"./force-stats-mock-state-rsmsojFj.js";var S,C,w,ye=e((()=>{S=`_root_19tfr_1`,C=`_content_19tfr_9`,w={root:S,content:C}}));function be(e,t){let n=l(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...le({label:e.label,media:{kind:`none`},action:ce({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:c(e.value,n),previousValue:i,previousShare:t&&i!==void 0?c(i,n):void 0,delta:t&&i!==void 0?s(e.value,i):void 0}})}function T(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:m(e.link,{allowRelative:!0})??void 0}))}function E({rows:e=[],withComparison:n=!1}){return(0,k.jsx)(g,{chartTitle:t(`Top downloaded`,`jetpack-premium-analytics-pkg`),data:be(e,n),withComparison:n,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Files`,`jetpack-premium-analytics-pkg`),metric:`downloads`}})}function D(){let{reportParams:e}=d(),{primary:n,comparisonRows:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=te(e,{maxRows:10}),f=(0,i.useMemo)(()=>T(r?.rows??[]),[r]),p=a,m=me({isLoading:o,isError:c,isEmpty:f.length===0},t(`You don’t have downloads recorded yet.`,`jetpack-premium-analytics-pkg`));return ee({csv:{exporter:u,status:{isLoading:o,isFetching:s,isError:n.isError},rowCount:f.length}}),(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ne,{isLoading:m.isLoading,isFetching:s,isError:f.length===0&&c,isEmpty:f.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:m.empty,renderLoading:(0,k.jsx)(ae,{rows:10}),children:(0,k.jsx)(E,{rows:f,withComparison:p})})})}function O({attributes:e={}}){return(0,k.jsx)(o,{attributes:e,children:(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(D,{})})})}var k,A,j=e((()=>{p(),a(),n(),re(),he(),ye(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,xe=e((()=>{M=`jpa/file-downloads`,N=`jpa/download`,P=`Top downloaded`,F=`Most downloaded files on your site.`,I={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fdownloads`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function V({withComparison:e}){return(0,U.jsx)(O,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function Se({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),oe(),_e(),ve(),de(),ie(),_(),v(),j(),xe(),U=r(),se(),ge(),W=`storybook/file-downloads`,G=fe(B),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[b,h]},J={render:V,args:{withComparison:!0},decorators:[b,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b,h],beforeEach:()=>(x(`stats/file-downloads`,`loading`),()=>x(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b,h],beforeEach:()=>(x(`stats/file-downloads`,`error`),()=>x(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b,h],beforeEach:()=>(x(`stats/file-downloads`,`empty`),()=>x(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{...y,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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