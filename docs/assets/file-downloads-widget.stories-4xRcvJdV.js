import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{$t as o,n as s}from"./build-module-DmVuor49.js";import{t as c,u as l}from"./build-module-D9vmvjeg.js";import{$t as u,L as d,Yn as f,ut as p}from"./chart-tooltip-sRlAmTLU.js";import{t as m}from"./leaderboard-chart-Dj5M2tQS.js";import{C as h,N as ee,S as te,c as ne,k as re,u as ie}from"./report-metric-CYbuD8eS.js";import{t as ae}from"./widget-state-D-SZHbdN.js";import{C as oe,S as se,b as ce,t as le,w as g,x as _,y as ue}from"./src-gAUmaX0_.js";import{n as v,r as y}from"./with-widget-canvas-Dz43KNHY.js";import{n as b,t as x}from"./register-stats-mocks-Dm-4y142.js";import{n as de,t as S}from"./force-stats-mock-state-CDbyk4-w.js";var C,w,T,E,D,fe=e((()=>{C=`_labelLink_dw8mz_1`,w=`_labelText_dw8mz_18`,T=`_root_dw8mz_27`,E=`_content_dw8mz_35`,D={labelLink:C,labelText:w,root:T,content:E}}));function O(e){if(typeof e==`number`)return e;if(typeof e==`string`){let t=Number.parseInt(e,10);return Number.isNaN(t)?null:t}return null}function pe(e){if(!e||typeof e!=`object`)return null;let t=e,n=O(t.status);if(n!==null)return n;if(t.data&&typeof t.data==`object`){let e=t.data,n=O(e.status);if(n!==null)return n}if(t.response&&typeof t.response==`object`){let e=t.response,n=O(e.status);if(n!==null)return n}return null}function k(e){if(!e||typeof e!=`object`)return``;let t=e;return[t.message,t.error,t.code,t.data&&typeof t.data==`object`?t.data.message:void 0,t.data&&typeof t.data==`object`?t.data.error:void 0,t.response&&typeof t.response==`object`?t.response.message:void 0].filter(e=>typeof e==`string`).join(` `)}function A(e){let n=k(e).toLowerCase(),r=n.includes(`file download`)&&(n.includes(`not available`)||n.includes(`jetpack site`));if(pe(e)===R||r)return t(`File download stats are not available for Jetpack sites.`,`jetpack-premium-analytics`)}function j(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue;return{id:`${i}-${e.href??e.label}`,label:e.href?(0,I.jsx)(l,{className:D.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,I.jsx)(`span`,{className:D.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:e.value/n*100,previousValue:a,previousShare:t&&a!==void 0?a/r*100:void 0,delta:t&&a!==void 0?d(e.value,a):void 0}})}function M(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:e.link}))}function N({rows:e=[],withComparison:t=!1}){return(0,I.jsx)(m,{data:j(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:L})}function P({max:e}){let{reportParams:n}=ee(),{comparisonRows:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:d,refetch:f}=u(n,{maxRows:e}),p=A(d),m=(0,i.useMemo)(()=>M(r?.rows??[]),[r]),h=a;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:D.content,children:(0,I.jsx)(ae,{isLoading:s,isFetching:c,isError:m.length===0&&l,isEmpty:m.length===0,error:{description:p??t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics`),actions:p?[]:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(N,{rows:m,withComparison:h})})}),(0,I.jsx)(ie,{children:(0,I.jsx)(ne,{report:`downloads`})})]})}function F({attributes:e={}}){let t=e?.max??10;return(0,I.jsx)(re,{attributes:e,children:(0,I.jsx)(`div`,{className:D.root,children:(0,I.jsx)(P,{max:t})})})}var I,L,R,z=e((()=>{p(),a(),n(),s(),c(),le(),fe(),I=r(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R=404})),B,me=e((()=>{n(),s(),B={name:`jpa/file-downloads`,title:t(`File downloads`,`jetpack-premium-analytics`),help:{content:t(`Most downloaded files from your site.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{max:10,reportParams:f(e)}})}function H(e){return(0,U.jsx)(F,{attributes:{max:10,reportParams:f(!1,e)}})}function he({withComparison:e,...t}){return(0,U.jsx)(ce,{...t,widgetType:G,renderModule:W,renderComponent:F,attributes:{max:10,reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),te(),x(),de(),_(),oe(),v(),z(),me(),U=r(),h(),b(),W=`storybook/file-downloads`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,g]},J={render:V,args:{withComparison:!0},decorators:[y,g]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(S(`stats/file-downloads`,`loading`),()=>S(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(S(`stats/file-downloads`,`error`),()=>S(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>(S(`stats/file-downloads`,`empty`),()=>S(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(he,{...e}),args:{...ue,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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