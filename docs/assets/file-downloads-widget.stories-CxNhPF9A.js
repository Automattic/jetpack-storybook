import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{$t as o,n as s}from"./build-module-DmVuor49.js";import{g as c,t as l}from"./build-module-CHiiu6oh.js";import{$n as u,L as d,nn as ee,ut as f}from"./chart-tooltip-BvgG-AYI.js";import{t as p}from"./leaderboard-chart-DH4PuFYg.js";import{C as m,N as te,S as ne,c as re,k as ie,u as ae}from"./report-metric-AOwBJK5s.js";import{t as oe}from"./widget-state-mSlNQTI4.js";import{C as se,D as h,E as ce,S as le,T as g,b as _,t as v,w as ue,x as y}from"./src-D1_U5EeO.js";import{n as b,t as x}from"./register-stats-mocks-Qnv4pdut.js";import{n as S,t as C}from"./force-stats-mock-state-CTj21b4X.js";var w,T,E,D,O,de=e((()=>{w=`_labelLink_dw8mz_1`,T=`_labelText_dw8mz_18`,E=`_root_dw8mz_27`,D=`_content_dw8mz_35`,O={labelLink:w,labelText:T,root:E,content:D}}));function k(e){if(typeof e==`number`)return e;if(typeof e==`string`){let t=Number.parseInt(e,10);return Number.isNaN(t)?null:t}return null}function fe(e){if(!e||typeof e!=`object`)return null;let t=e,n=k(t.status);if(n!==null)return n;if(t.data&&typeof t.data==`object`){let e=t.data,n=k(e.status);if(n!==null)return n}if(t.response&&typeof t.response==`object`){let e=t.response,n=k(e.status);if(n!==null)return n}return null}function pe(e){if(!e||typeof e!=`object`)return``;let t=e;return[t.message,t.error,t.code,t.data&&typeof t.data==`object`?t.data.message:void 0,t.data&&typeof t.data==`object`?t.data.error:void 0,t.response&&typeof t.response==`object`?t.response.message:void 0].filter(e=>typeof e==`string`).join(` `)}function A(e){let n=pe(e).toLowerCase(),r=n.includes(`file download`)&&(n.includes(`not available`)||n.includes(`jetpack site`));if(fe(e)===R||r)return t(`File download stats are not available for Jetpack sites.`,`jetpack-premium-analytics`)}function j(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue;return{id:`${i}-${e.href??e.label}`,label:e.href?(0,I.jsx)(c,{className:O.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,I.jsx)(`span`,{className:O.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:e.value/n*100,previousValue:a,previousShare:t&&a!==void 0?a/r*100:void 0,delta:t&&a!==void 0?d(e.value,a):void 0}})}function M(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:e.link}))}function N({rows:e=[],withComparison:t=!1}){return(0,I.jsx)(p,{data:j(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:L})}function P({max:e}){let{reportParams:n}=te(),{comparisonRows:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=ee(n,{maxRows:e}),f=A(u),p=(0,i.useMemo)(()=>M(r?.rows??[]),[r]),m=a;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:O.content,children:(0,I.jsx)(oe,{isLoading:s,isFetching:c,isError:p.length===0&&l,isEmpty:p.length===0,error:{description:f??t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics`),actions:f?[]:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(N,{rows:p,withComparison:m})})}),(0,I.jsx)(ae,{children:(0,I.jsx)(re,{report:`downloads`})})]})}function F({attributes:e={}}){let t=e?.max??10;return(0,I.jsx)(ie,{attributes:e,children:(0,I.jsx)(`div`,{className:O.root,children:(0,I.jsx)(P,{max:t})})})}var I,L,R,z=e((()=>{f(),a(),n(),s(),l(),v(),de(),I=r(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R=404})),B,me=e((()=>{n(),s(),B={name:`jpa/file-downloads`,title:t(`File downloads`,`jetpack-premium-analytics`),help:{content:t(`The files your visitors downloaded most often, sorted by number of downloads.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:o,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{max:10,reportParams:u(e)}})}function H(e){return(0,U.jsx)(F,{attributes:{max:10,reportParams:u(!1,e)}})}function he({withComparison:e,...t}){return(0,U.jsx)(se,{...t,widgetType:G,renderModule:W,renderComponent:F,attributes:{max:10,reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),ne(),x(),S(),ue(),ce(),_(),z(),me(),U=r(),m(),b(),W=`storybook/file-downloads`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,h]},J={render:V,args:{withComparison:!0},decorators:[y,h]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(C(`stats/file-downloads`,`loading`),()=>C(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(C(`stats/file-downloads`,`error`),()=>C(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(C(`stats/file-downloads`,`empty`),()=>C(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(he,{...e}),args:{...le,withComparison:!0},argTypes:{...g,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the download glyph
and "No file downloads in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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