import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{s as o,t as s}from"./build-module-2iv4IIRq.js";import{Ot as c,f as l,fn as u,hn as d,kt as f,m as p,pn as m,v as ee}from"./hooks-BiR584UK.js";import{et as te,r as h,tn as g}from"./date-period-dropdown-CqAKI-XK.js";import"./constants-C7AKabD4.js";import{r as _,t as ne}from"./leaderboard-skeleton-C32xT_IJ.js";import{c as v,i as re,r as y}from"./register-report-mocks-CbBR8hcQ.js";import{b as ie,k as ae,v as oe}from"./report-metric-BtYx7su6.js";import{t as b}from"./widget-state-DKQB40mR.js";import{t as x}from"./src-C-waaVCI.js";import{a as se,c as ce,d as S,i as le,l as C,n as w,o as ue,r as T,s as de,u as fe}from"./with-widget-canvas-BtuJorLO.js";function pe(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:c(e),label:f(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var me=t((()=>{x()})),E,D,O,he=t((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function ge(e,t){let n=m(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,...ae({label:e.label,media:{kind:`none`},action:{kind:`videoLink`,id:e.id,href:e.link,search:t}}),currentValue:e.plays,currentShare:u(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:u(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:d(e.plays,e.previousPlays)}))}function _e(){let{reportParams:e}=ee(),t=l(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:u,refetch:d}=te((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),f=s||n.isPending,p=(0,A.useMemo)(()=>pe(i?.rows??[]),[i]),m=(0,A.useMemo)(()=>ge(p,t),[p,t]);return(0,j.jsx)(b,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(_,{data:m,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function k({attributes:e={},setError:t}){return(0,j.jsx)(p,{attributes:e,setError:t,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(_e,{})}),(0,j.jsx)(ie,{children:(0,j.jsx)(oe,{report:`videos`})})]})})}var A,j,M=t((()=>{h(),x(),i(),s(),A=e(n(),1),me(),he(),j=a()})),N,P=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,ve=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(k,{attributes:{reportParams:g(e)}})}function U(e){return(0,W.jsx)(k,{attributes:{reportParams:g(!1,e)}})}function ye({withComparison:e,...t}){return(0,W.jsx)(de,{...t,widgetType:le(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:g(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),y(),ce(),fe(),se(),w(),M(),P(),ve(),W=a(),re(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[T,S]},J={render:H,args:{withComparison:!0},decorators:[T,S]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(v(`stats/video-plays`,`loading`),()=>v(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(v(`stats/video-plays`,`error`),()=>v(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(v(`stats/video-plays`,`empty`),()=>v(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(ye,{...e}),args:{...ue,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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