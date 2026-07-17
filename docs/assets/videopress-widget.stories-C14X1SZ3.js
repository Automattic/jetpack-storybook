import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,o as s}from"./build-module-DmVuor49.js";import{g as c,t as l}from"./build-module-LU_6Qj-1.js";import{L as u,Xn as d,a as f,i as p,o as m,qt as h,ut as g}from"./chart-tooltip-Cq5jhKaK.js";import{t as ee}from"./leaderboard-chart-CekMEsG2.js";import{C as te,N as _,S as ne,T as v,c as re,k as ie,u as ae}from"./report-metric-DM2LTy4R.js";import{t as y}from"./widget-state-Cc04oFW3.js";import{C as oe,D as b,E as se,S as x,T as S,b as C,t as w,w as ce,x as T}from"./src-LAPZU3wC.js";function E(e=[]){return e.map(e=>({key:f(e),label:m(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}))}var D=t((()=>{w()})),O,k,A,j,M,le=t((()=>{O=`_labelLink_11ha7_1`,k=`_labelText_11ha7_2`,A=`_root_11ha7_25`,j=`_content_11ha7_33`,M={labelLink:O,labelText:k,root:A,content:j}})),N,P=t((()=>{i(),o(),N={name:`jpa/videopress`,title:r(`VideoPress`,`jetpack-premium-analytics`),help:{content:r(`The published videos your visitors watched most often, sorted by views.`,`jetpack-premium-analytics`),links:[{label:r(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function F(e){let t=Math.max(...e.flatMap(e=>[e.plays,e.previousPlays??0]),1);return e.map(e=>({id:e.key,label:e.link?(0,z.jsx)(c,{className:M.labelLink,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,z.jsx)(`span`,{className:M.labelText,title:e.label,children:e.label}),currentValue:e.plays,currentShare:e.plays/t*100,previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:e.previousPlays/t*100,delta:e.previousPlays===void 0?void 0:u(e.plays,e.previousPlays)}))}function I({max:e}){let{reportParams:t}=_(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,hasData:l,isError:u,refetch:d}=h((0,R.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),f=(o||n.isPending)&&!l,p=(0,R.useMemo)(()=>E(i?.rows??[]),[i]),m=(0,R.useMemo)(()=>F(p),[p]);return(0,z.jsx)(y,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:s,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics`)},children:(0,z.jsx)(ee,{data:m,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function L({attributes:e={},setError:t}){return(0,z.jsx)(ie,{attributes:e,setError:t,children:(0,z.jsxs)(`div`,{className:M.root,children:[(0,z.jsx)(`div`,{className:M.content,children:(0,z.jsx)(I,{max:p(e.max,7)})}),(0,z.jsx)(ae,{children:(0,z.jsx)(re,{report:`videos`})})]})})}var R,z,B=t((()=>{g(),w(),i(),o(),l(),R=e(n(),1),D(),le(),P(),z=a()}));function V({withComparison:e}){return(0,W.jsx)(L,{attributes:{max:7,reportParams:d(e)}})}function H(e){return(0,W.jsx)(L,{attributes:{max:7,reportParams:d(!1,e)}})}function U({withComparison:e,...t}){return(0,W.jsx)(oe,{...t,widgetType:N,renderModule:G,renderComponent:L,attributes:{max:7,reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),ne(),ce(),se(),C(),B(),P(),W=a(),te(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:V,args:{withComparison:!1},decorators:[T,b]},J={render:V,args:{withComparison:!0},decorators:[T,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(v(`stats/video-plays`,`loading`),()=>v(`stats/video-plays`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(v(`stats/video-plays`,`error`),()=>v(`stats/video-plays`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(v(`stats/video-plays`,`empty`),()=>v(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...x,withComparison:!0},argTypes:{...S,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVideoPress,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderVideoPress,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with each video's period-over-period delta (green for gains,
red for losses) driven by the mocked comparison window.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoPressOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/video-plays', 'loading');
    return () => setReportMockState('stats/video-plays', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoPressOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/video-plays', 'error');
    return () => setReportMockState('stats/video-plays', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoPressOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/video-plays', 'empty');
    return () => setReportMockState('stats/video-plays', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the video glyph and
the "learn which videos your visitors watch most" hint).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <VideoPressDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};