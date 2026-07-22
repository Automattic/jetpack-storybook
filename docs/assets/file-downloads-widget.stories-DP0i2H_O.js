import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{$t as o,n as s}from"./build-module-DmVuor49.js";import{t as c,u as l}from"./build-module-BsqisNX3.js";import{G as u,K as d,cr as f,dn as p,yt as m}from"./chart-tooltip-uAa_MJ2w.js";import{t as h}from"./leaderboard-chart-CWqm-xwG.js";import{F as ee,G as te,P as ne,V as re,b as ie,v as ae}from"./report-metric-BOiH0bgT.js";import{t as g}from"./widget-state-CXb8J7nX.js";import{C as oe,D as se,E as ce,O as le,S as ue,T as de,b as fe,k as _,t as pe,w as v,x as y}from"./src-OKsa0p6O.js";import{n as me,t as he}from"./register-stats-mocks-6fiyDnbW.js";import{n as ge,t as b}from"./force-stats-mock-state-DgRdXJf3.js";var x,S,C,w,T,_e=e((()=>{x=`_labelLink_dw8mz_1`,S=`_labelText_dw8mz_18`,C=`_root_dw8mz_27`,w=`_content_dw8mz_35`,T={labelLink:x,labelText:S,root:C,content:w}}));function E(e){if(typeof e==`number`)return e;if(typeof e==`string`){let t=Number.parseInt(e,10);return Number.isNaN(t)?null:t}return null}function ve(e){if(!e||typeof e!=`object`)return null;let t=e,n=E(t.status);if(n!==null)return n;if(t.data&&typeof t.data==`object`){let e=t.data,n=E(e.status);if(n!==null)return n}if(t.response&&typeof t.response==`object`){let e=t.response,n=E(e.status);if(n!==null)return n}return null}function ye(e){if(!e||typeof e!=`object`)return``;let t=e;return[t.message,t.error,t.code,t.data&&typeof t.data==`object`?t.data.message:void 0,t.data&&typeof t.data==`object`?t.data.error:void 0,t.response&&typeof t.response==`object`?t.response.message:void 0].filter(e=>typeof e==`string`).join(` `)}function be(e){let n=ye(e).toLowerCase(),r=n.includes(`file download`)&&(n.includes(`not available`)||n.includes(`jetpack site`));if(ve(e)===M||r)return t(`File download stats are not available for Jetpack sites.`,`jetpack-premium-analytics`)}function xe(e,t){let n=Math.max(...e.map(e=>e.value),1),r=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,i)=>{let a=e.previousValue;return{id:`${i}-${e.href??e.label}`,label:e.href?(0,A.jsx)(l,{className:T.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,A.jsx)(`span`,{className:T.labelText,title:e.label,children:e.label}),currentValue:e.value,currentShare:u(e.value,n),previousValue:a,previousShare:t&&a!==void 0?u(a,r):void 0,delta:t&&a!==void 0?d(e.value,a):void 0}})}function D(e){return e.map(e=>({label:e.shortLabel??String(e.label??``),value:e.downloads,previousValue:e.previousDownloads,href:e.link}))}function Se({rows:e=[],withComparison:t=!1}){return(0,A.jsx)(h,{data:xe(e,t),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function O({max:e}){let{reportParams:n}=te(),{comparisonRows:r,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=p(n,{maxRows:e}),f=be(u),m=(0,i.useMemo)(()=>D(r?.rows??[]),[r]),h=a;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:T.content,children:(0,A.jsx)(g,{isLoading:s,isFetching:c,isError:m.length===0&&l,isEmpty:m.length===0,error:{description:f??t(`We couldn't load file downloads. Please try again in a moment.`,`jetpack-premium-analytics`),actions:f?[]:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:o,description:t(`No file downloads in this period.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(Se,{rows:m,withComparison:h})})}),(0,A.jsx)(ie,{children:(0,A.jsx)(ae,{report:`downloads`})})]})}function k({attributes:e={}}){let t=e?.max??10;return(0,A.jsx)(re,{attributes:e,children:(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(O,{max:t})})})}var A,j,M,Ce=e((()=>{m(),a(),n(),s(),c(),pe(),_e(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=404})),N,we=e((()=>{n(),s(),N={icon:o,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,Te=e((()=>{P=`jpa/file-downloads`,F=`File downloads`,I=`Most downloaded files on your site.`,L={content:`The files your visitors downloaded most often, sorted by number of downloads.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:10,reportParams:f(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:10,reportParams:f(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(de,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{max:10,reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ne(),he(),ge(),ce(),le(),oe(),fe(),Ce(),we(),Te(),U=r(),ee(),me(),W=`storybook/file-downloads`,G=ue(B,N),K={title:`Packages/Premium Analytics/Widgets/FileDownloads`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "File downloads" widget. Shows the most-downloaded files as a ranked leaderboard, using the global dashboard date range. Each row links to the file URL when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[y,_]},J={render:V,args:{withComparison:!0},decorators:[y,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y,_],beforeEach:()=>(b(`stats/file-downloads`,`loading`),()=>b(`stats/file-downloads`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y,_],beforeEach:()=>(b(`stats/file-downloads`,`error`),()=>b(`stats/file-downloads`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[y,_],beforeEach:()=>(b(`stats/file-downloads`,`empty`),()=>b(`stats/file-downloads`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...v,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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