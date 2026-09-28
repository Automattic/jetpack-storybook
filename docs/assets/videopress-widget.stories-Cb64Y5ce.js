import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{s as o,t as s}from"./build-module-2iv4IIRq.js";import{f as ee,m as c,v as l}from"./hooks-Jpux5s_Q.js";import{$t as u,Q as te,t as d}from"./src-DS7qFbB1.js";import{Dt as f,Et as p,H as ne,U as re,kt as ie}from"./helpers-Bf4_LFd3.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-D0ZHP65v.js";import{c as m,i as se,r as h}from"./register-report-mocks-C6RWe7pX.js";import{S as ce,j as le,v as g}from"./report-metric-CQoahLwb.js";import{t as _}from"./widget-state-BPr5Sxun.js";import{t as v}from"./src-BSvb-ww2.js";import{a as ue,d as de,f as fe,h as y,i as b,m as x,n as S,p as pe,r as C,u as me}from"./with-widget-canvas-Caa9atnh.js";function he(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:ne(e),label:re(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ge=t((()=>{v()})),w,T,E,_e=t((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function D(e,t){let n=f(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,...le({label:e.label,media:{kind:`none`},action:{kind:`videoLink`,id:e.id,href:e.link,search:t}}),currentValue:e.plays,currentShare:p(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:p(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:ie(e.plays,e.previousPlays)}))}function O(){let{reportParams:e}=l(),t=ee(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:u}=te((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),d=o||n.isPending,f=(0,A.useMemo)(()=>he(i?.rows??[]),[i]),p=(0,A.useMemo)(()=>D(f,t),[f,t]);return(0,j.jsx)(_,{isLoading:d,isFetching:s,isError:f.length===0&&c,isEmpty:f.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,j.jsx)(oe,{rows:10}),children:(0,j.jsx)(ae,{data:p,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function k({attributes:e={},setError:t}){return(0,j.jsx)(c,{attributes:e,setError:t,children:(0,j.jsxs)(`div`,{className:E.root,children:[(0,j.jsx)(`div`,{className:E.content,children:(0,j.jsx)(O,{})}),(0,j.jsx)(ce,{children:(0,j.jsx)(g,{report:`videos`})})]})})}var A,j,M=t((()=>{d(),v(),i(),A=e(n(),1),ge(),_e(),j=a()})),N,P=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,ve=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(k,{attributes:{reportParams:u(e)}})}function U(e){return(0,W.jsx)(k,{attributes:{reportParams:u(!1,e)}})}function ye({withComparison:e,...t}){return(0,W.jsx)(de,{...t,widgetType:b(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:u(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),h(),fe(),x(),ue(),S(),M(),P(),ve(),W=a(),se(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[C,y]},J={render:H,args:{withComparison:!0},decorators:[C,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(m(`stats/video-plays`,`loading`),()=>m(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(m(`stats/video-plays`,`error`),()=>m(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(m(`stats/video-plays`,`empty`),()=>m(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(ye,{...e}),args:{...me,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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