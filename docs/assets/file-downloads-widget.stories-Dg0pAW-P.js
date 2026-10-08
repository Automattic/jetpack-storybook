import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bs as i,Vu as ee,ku as a,t as o}from"./build-module-DNhkEVJn.js";import{Nn as s,gt as te,t as c}from"./src-C-o_JghQ.js";import{_ as l,ln as u,on as d,sn as f,x as p}from"./charts-provider-BZoar1tL.js";import{a as ne}from"./src-DLofJud3.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-DuTKlhVk.js";import{n as ae,r as m}from"./with-story-router-Beljd9ki.js";import{n as oe,r as se}from"./register-report-mocks-BPy3MDBB.js";import{b as ce,i as le,m as h,o as ue}from"./leaderboard-Ccd3SiY3.js";import{t as de}from"./widget-state-Dfcn9KE_.js";import{c as fe,n as g}from"./components-DeSfO58P.js";import{t as _}from"./src-D13Udi0I.js";import{a as v,g as pe,h as me,i as he,m as ge,n as _e,p as ve,r as y}from"./with-widget-canvas-BofJtD4d.js";import{n as ye,t as be}from"./register-stats-mocks-nLC7SypV.js";import{n as xe,t as b}from"./force-stats-mock-state-Dmnt1SRj.js";var x,S,C,w=e((()=>{x=`_root_19tfr_1`,S=`_content_19tfr_9`,C={root:x,content:S}}));function T(e,t){let n=f(e.map(e=>e.value),t?e.map(e=>e.previousValue):[]);return e.map((e,r)=>{let i=e.previousValue;return{id:`${r}-${e.href??e.label}`,...le({label:e.label,media:{kind:`none`},action:ue({href:e.href,hasChildren:!1})}),currentValue:e.value,currentShare:d(e.value,n),previousValue:i,previousShare:t&&i!==void 0?d(i,n):void 0,delta:t&&i!==void 0?u(e.value,i):void 0}})}function E(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:ne(e.link,{allowRelative:!0})??void 0}))}function D({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(re,{data:T(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function O(){let{reportParams:e}=p(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=te(e,{maxRows:10}),l=(0,ee.useMemo)(()=>E(r?.rows??[]),[r]),u=i;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:C.content,children:(0,A.jsx)(de,{isLoading:a,isFetching:o,isError:l.length===0&&s,isEmpty:l.length===0,error:{description:t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,A.jsx)(ie,{rows:10}),children:(0,A.jsx)(D,{rows:l,withComparison:u})})}),(0,A.jsxs)(h,{children:[(0,A.jsx)(ce,{report:`downloads`}),(0,A.jsx)(g,{exporter:fe,status:{isLoading:a,isFetching:o,isError:n.isError},rowCount:l.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(O,{})})})}var A,j,M=e((()=>{c(),a(),n(),_(),w(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Se=e((()=>{o(),N={icon:i,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Ce=e((()=>{P=`jpa/file-downloads`,F=`Top downloaded`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:s(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:s(!1,e)}})}function we({withComparison:e,...t}){return(0,U.jsx)(ge,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:s(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),oe(),be(),xe(),me(),ae(),v(),_e(),M(),Se(),Ce(),U=r(),se(),ye(),W=`storybook/file-downloads`,G=he(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,m]},J={render:V,args:{withComparison:!0},decorators:[y,m]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,m],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(we,{...e}),args:{...ve,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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