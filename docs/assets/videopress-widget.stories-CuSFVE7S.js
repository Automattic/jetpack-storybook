import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,o as s}from"./build-module-DmVuor49.js";import{t as c,u as l}from"./build-module-Cn1Un7go.js";import{G as u,K as d,an as f,cr as p,f as m,m as h,p as ee,yt as g}from"./chart-tooltip-sTMsgHbZ.js";import{t as te}from"./leaderboard-chart-BPTqMFhB.js";import{F as _,M as ne,N as re,U as v,g as y,v as ie,z as ae}from"./report-metric-D5hry_ac.js";import{t as oe}from"./widget-state-CSKYcGm6.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as b,t as x,w as me,x as S}from"./src-7Fe8UaL9.js";function he(e=[]){return e.map(e=>({key:ee(e),label:h(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}))}var ge=t((()=>{x()})),C,w,T,E,D,O=t((()=>{C=`_labelLink_11ha7_1`,w=`_labelText_11ha7_2`,T=`_root_11ha7_25`,E=`_content_11ha7_33`,D={labelLink:C,labelText:w,root:T,content:E}})),k,A=t((()=>{i(),o(),k={icon:s,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function _e(e){let t=Math.max(...e.flatMap(e=>[e.plays,e.previousPlays??0]),1);return e.map(e=>({id:e.key,label:e.link?(0,N.jsx)(l,{className:D.labelLink,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,N.jsx)(`span`,{className:D.labelText,title:e.label,children:e.label}),currentValue:e.plays,currentShare:u(e.plays,t),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:u(e.previousPlays,t),delta:e.previousPlays===void 0?void 0:d(e.plays,e.previousPlays)}))}function ve({max:e}){let{reportParams:t}=v(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,hasData:l,isError:u,refetch:d}=f((0,M.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),p=(o||n.isPending)&&!l,m=(0,M.useMemo)(()=>he(i?.rows??[]),[i]),h=(0,M.useMemo)(()=>_e(m),[m]);return(0,N.jsx)(oe,{isLoading:p,isFetching:c,isError:m.length===0&&u,isEmpty:m.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:s,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(te,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(ae,{attributes:e,setError:t,children:(0,N.jsxs)(`div`,{className:D.root,children:[(0,N.jsx)(`div`,{className:D.content,children:(0,N.jsx)(ve,{max:m(e.max,7)})}),(0,N.jsx)(ie,{children:(0,N.jsx)(y,{report:`videos`})})]})})}var M,N,P=t((()=>{g(),x(),i(),o(),c(),M=e(n(),1),ge(),O(),A(),N=a()})),F,I,L,R,z,B,V,ye=t((()=>{F=`jpa/videopress`,I=`VideoPress`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{max:7,reportParams:p(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{max:7,reportParams:p(!1,e)}})}function be({withComparison:e,...t}){return(0,W.jsx)(fe,{...t,widgetType:de(V,k),renderModule:G,renderComponent:j,attributes:{max:7,reportParams:p(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),ne(),le(),ue(),se(),pe(),P(),A(),ye(),W=a(),re(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[S,b]},J={render:H,args:{withComparison:!0},decorators:[S,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(_(`stats/video-plays`,`loading`),()=>_(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(_(`stats/video-plays`,`error`),()=>_(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(_(`stats/video-plays`,`empty`),()=>_(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(be,{...e}),args:{...me,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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