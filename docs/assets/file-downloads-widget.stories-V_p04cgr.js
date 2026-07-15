import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Ls as o,n as s}from"./build-module-C6Ow06jV.js";import{t as c,u as l}from"./build-module-JNPAD9ni.js";import{$t as u,L as d,qn as f,ut as p}from"./chart-tooltip-CUX16cP7.js";import{t as m}from"./leaderboard-chart-XM60kwlD.js";import{C as h,N as ee,S as te,k as ne}from"./report-metric-QhKtTa9H.js";import{t as re}from"./widget-state-Dk-a_PPZ.js";import{S as ie,b as ae,t as oe,x as g,y as _}from"./src-aMG-tOD-.js";import{n as v,r as y}from"./with-widget-canvas-Dz43KNHY.js";import{n as b,t as x}from"./register-stats-mocks-CVgmSkDI.js";import{n as S,t as C}from"./force-stats-mock-state-DwV5IRY8.js";var w,T,E,D,O,k=e((()=>{w=`_labelLink_db1pj_1`,T=`_labelText_db1pj_18`,E=`_root_db1pj_27`,D=`_content_db1pj_35`,O={labelLink:w,labelText:T,root:E,content:D}}));function A(e){if(typeof e==`number`)return e;if(typeof e==`string`){let t=Number.parseInt(e,10);return Number.isNaN(t)?null:t}return null}function se(e){if(!e||typeof e!=`object`)return null;let t=e,n=A(t.status);if(n!==null)return n;if(t.data&&typeof t.data==`object`){let e=t.data,n=A(e.status);if(n!==null)return n}if(t.response&&typeof t.response==`object`){let e=t.response,n=A(e.status);if(n!==null)return n}return null}function ce(e){if(!e||typeof e!=`object`)return``;let t=e;return[t.message,t.error,t.code,t.data&&typeof t.data==`object`?t.data.message:void 0,t.data&&typeof t.data==`object`?t.data.error:void 0,t.response&&typeof t.response==`object`?t.response.message:void 0].filter(e=>typeof e==`string`).join(` `)}function le(e){let n=ce(e).toLowerCase(),r=n.includes(`file download`)&&(n.includes(`not available`)||n.includes(`jetpack site`));if(se(e)===L||r)return t(`File download stats are not available for Jetpack sites.`,`jetpack-premium-analytics`)}function ue(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue;return{id:`${i}-${e.href??e.label}`,label:e.href?(0,F.jsx)(l,{className:O.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,F.jsx)(`span`,{className:O.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:e.value/n*100,previousValue:a,previousShare:t&&a!==void 0?a/r*100:void 0,delta:t&&a!==void 0?d(e.value,a):void 0}})}function j(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:e.link}))}function M({rows:e=[],withComparison:t=!1}){return(0,F.jsx)(m,{data:ue(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:I})}function N({max:e}){let{reportParams:n}=ee(),{comparisonRows:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:d,refetch:f}=u(n,{maxRows:e}),p=le(d),m=(0,i.useMemo)(()=>j(r?.rows??[]),[r]),h=a;return(0,F.jsx)(`div`,{className:O.content,children:(0,F.jsx)(re,{isLoading:s,isFetching:c,isError:m.length===0&&l,isEmpty:m.length===0,error:{description:p??t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics`),actions:p?[]:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(M,{rows:m,withComparison:h})})})}function P({attributes:e={}}){let t=e?.max??10;return(0,F.jsx)(ne,{attributes:e,children:(0,F.jsx)(`div`,{className:O.root,children:(0,F.jsx)(N,{max:t})})})}var F,I,L,R=e((()=>{p(),a(),n(),s(),c(),oe(),k(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L=404})),z,B=e((()=>{n(),s(),z={name:`jpa/file-downloads`,title:t(`File downloads`,`jetpack-premium-analytics`),help:{content:t(`Most downloaded files from your site.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(P,{attributes:{max:10,reportParams:f(e)}})}function H(e){return(0,U.jsx)(P,{attributes:{max:10,reportParams:f(!1,e)}})}function de({withComparison:e,...t}){return(0,U.jsx)(ae,{...t,widgetType:G,renderModule:W,renderComponent:P,attributes:{max:10,reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),te(),x(),S(),g(),v(),R(),B(),U=r(),h(),b(),W=`storybook/file-downloads`,G={name:z.name,title:z.title,icon:z.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y]},J={render:V,args:{withComparison:!0},decorators:[y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(C(`stats/file-downloads`,`loading`),()=>C(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(C(`stats/file-downloads`,`error`),()=>C(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(C(`stats/file-downloads`,`empty`),()=>C(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(de,{...e}),args:{..._,withComparison:!0},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderFileDownloadsWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderFileDownloadsWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderFileDownloadsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/file-downloads', 'loading');
    return () => forceStatsMockState('stats/file-downloads', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderFileDownloadsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/file-downloads', 'error');
    return () => forceStatsMockState('stats/file-downloads', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderFileDownloadsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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