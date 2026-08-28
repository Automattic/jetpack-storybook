import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{s as o,t as s}from"./build-module-CR6EsQjA.js";import{b as ee,g as c,m as l}from"./hooks-CbHlOjBJ.js";import{K as u,qt as d,t as f}from"./src-S8dwwP-L.js";import"./constants-B1kGztHF.js";import{F as p,P as m,_t as h,ht as te,mt as g}from"./chart-tooltip-C5SZQ4wO.js";import{r as ne,t as _}from"./leaderboard-skeleton-CrLrM12R.js";import{G as re,K as ie,N as ae,S as oe,Y as v,b as se}from"./report-metric-DtUXol8-.js";import{t as y}from"./widget-state-Bdg17ABQ.js";import{C as ce,D as le,E as ue,O as b,S as x,T as S,b as de,k as C,t as w,w as fe,x as T}from"./src-o_A-3WdV.js";function pe(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:m(e),label:p(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var me=t((()=>{w()})),E,D,O,he=t((()=>{E=`_root_jzzhc_1`,D=`_content_jzzhc_9`,O={root:E,content:D}}));function ge(e,t){let n=te(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,...ae({label:e.label,media:{kind:`none`},action:{kind:`videoLink`,id:e.id,href:e.link,search:t}}),currentValue:e.plays,currentShare:g(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:g(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:h(e.plays,e.previousPlays)}))}function _e(){let{reportParams:e}=ee(),t=l(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:d,refetch:f}=u((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),p=s||n.isPending,m=(0,A.useMemo)(()=>pe(i?.rows??[]),[i]),h=(0,A.useMemo)(()=>ge(m,t),[m,t]);return(0,j.jsx)(y,{isLoading:p,isFetching:c,isError:m.length===0&&d,isEmpty:m.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(_,{rows:10}),children:(0,j.jsx)(ne,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function k({attributes:e={},setError:t}){return(0,j.jsx)(c,{attributes:e,setError:t,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(_e,{})}),(0,j.jsx)(oe,{children:(0,j.jsx)(se,{report:`videos`})})]})})}var A,j,M=t((()=>{f(),w(),i(),s(),A=e(n(),1),me(),he(),j=a()})),N,P=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,ve=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(k,{attributes:{reportParams:d(e)}})}function U(e){return(0,W.jsx)(k,{attributes:{reportParams:d(!1,e)}})}function ye({withComparison:e,...t}){return(0,W.jsx)(S,{...t,widgetType:x(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),re(),ue(),b(),ce(),de(),M(),P(),ve(),W=a(),ie(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[T,C]},J={render:H,args:{withComparison:!0},decorators:[T,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(v(`stats/video-plays`,`loading`),()=>v(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(v(`stats/video-plays`,`error`),()=>v(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(v(`stats/video-plays`,`empty`),()=>v(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(ye,{...e}),args:{...fe,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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