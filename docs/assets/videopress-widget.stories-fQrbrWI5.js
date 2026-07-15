import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-Bt8gOW8e.js";import{t as c,u as l}from"./build-module-BAze1CUO.js";import{Kn as u,Kt as d,L as f,a as p,i as m,o as h,ut as g}from"./chart-tooltip-Cd6R28vB.js";import{t as _}from"./leaderboard-chart-D4uyqD7q.js";import{C as v,N as y,S as ee,T as b,k as te}from"./report-metric-BSkCvVUy.js";import{t as ne}from"./widget-state-CqW7LysR.js";import{S as x,b as S,t as C,x as w,y as T}from"./src-ZlSzubd8.js";import{n as E,r as D}from"./with-widget-canvas-Dz43KNHY.js";function O(e=[]){return e.map(e=>({key:p(e),label:h(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}))}var k=t((()=>{C()})),A,j,M,N=t((()=>{A=`_labelLink_d8nn2_1`,j=`_labelText_d8nn2_2`,M={labelLink:A,labelText:j}})),P,F=t((()=>{i(),s(),P={name:`jpa/videopress`,title:r(`VideoPress`,`jetpack-premium-analytics`),help:{content:r(`Most popular videos uploaded to your site. Learn more about their performance.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function I(e){let t=Math.max(...e.flatMap(e=>[e.plays,e.previousPlays??0]),1);return e.map(e=>({id:e.key,label:e.link?(0,z.jsx)(l,{className:M.labelLink,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,z.jsx)(`span`,{className:M.labelText,title:e.label,children:e.label}),currentValue:e.plays,currentShare:e.plays/t*100,previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:e.previousPlays/t*100,delta:e.previousPlays===void 0?void 0:f(e.plays,e.previousPlays)}))}function re({max:e}){let{reportParams:t}=y(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:f}=d((0,R.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),p=(s||n.isPending)&&!l,m=(0,R.useMemo)(()=>O(i?.rows??[]),[i]),h=(0,R.useMemo)(()=>I(m),[m]);return(0,z.jsx)(ne,{isLoading:p,isFetching:c,isError:m.length===0&&u,isEmpty:m.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics`)},children:(0,z.jsx)(_,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function L({attributes:e={},setError:t}){return(0,z.jsx)(te,{attributes:e,setError:t,children:(0,z.jsx)(re,{max:m(e.max,7)})})}var R,z,B=t((()=>{g(),C(),i(),s(),c(),R=e(n(),1),k(),N(),F(),z=a()}));function V({withComparison:e}){return(0,W.jsx)(L,{attributes:{max:7,reportParams:u(e)}})}function H(e){return(0,W.jsx)(L,{attributes:{max:7,reportParams:u(!1,e)}})}function U({withComparison:e,...t}){return(0,W.jsx)(S,{...t,widgetType:P,renderModule:G,renderComponent:L,attributes:{max:7,reportParams:u(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),ee(),w(),E(),B(),F(),W=a(),v(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:V,args:{withComparison:!1},decorators:[D]},J={render:V,args:{withComparison:!0},decorators:[D]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(b(`stats/video-plays`,`loading`),()=>b(`stats/video-plays`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(b(`stats/video-plays`,`error`),()=>b(`stats/video-plays`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(b(`stats/video-plays`,`empty`),()=>b(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...T,withComparison:!0},argTypes:{...x,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVideoPress,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderVideoPress,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with each video's period-over-period delta (green for gains,
red for losses) driven by the mocked comparison window.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoPressOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/video-plays', 'loading');
    return () => setReportMockState('stats/video-plays', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoPressOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/video-plays', 'error');
    return () => setReportMockState('stats/video-plays', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoPressOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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