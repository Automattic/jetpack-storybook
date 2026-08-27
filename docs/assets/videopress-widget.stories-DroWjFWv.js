import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-CDRs4YxF.js";import{b as ee,g as c,m as l}from"./hooks-_15AMfA4.js";import{K as u,qt as d,t as f}from"./src-Cs-bVoJf.js";import"./constants-B1kGztHF.js";import{M as p,N as m,ft as h,ht as te,pt as ne}from"./chart-tooltip-Cjp3lBbh.js";import{r as re,t as ie}from"./leaderboard-skeleton-B19OO2HL.js";import{G as g,J as _,M as v,S as ae,W as oe,b as se}from"./report-metric-BhXzGciG.js";import{t as ce}from"./widget-state-iBVRxxbM.js";import{C as y,D as le,E as ue,O as de,S as fe,T as b,b as x,k as S,t as C,w as pe,x as w}from"./src-D5_pyvCh.js";function me(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:p(e),label:m(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var he=t((()=>{C()})),T,E,D,ge=t((()=>{T=`_root_jzzhc_1`,E=`_content_jzzhc_9`,D={root:T,content:E}}));function _e(e,t){let n=ne(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,...v({label:e.label,media:{kind:`none`},action:{kind:`videoLink`,id:e.id,href:e.link,search:t}}),currentValue:e.plays,currentShare:h(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:h(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:te(e.plays,e.previousPlays)}))}function O(){let{reportParams:e}=ee(),t=l(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:d,refetch:f}=u((0,A.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),p=s||n.isPending,m=(0,A.useMemo)(()=>me(i?.rows??[]),[i]),h=(0,A.useMemo)(()=>_e(m,t),[m,t]);return(0,j.jsx)(ce,{isLoading:p,isFetching:c,isError:m.length===0&&d,isEmpty:m.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ie,{rows:10}),children:(0,j.jsx)(re,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function k({attributes:e={},setError:t}){return(0,j.jsx)(c,{attributes:e,setError:t,children:(0,j.jsxs)(`div`,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(O,{})}),(0,j.jsx)(ae,{children:(0,j.jsx)(se,{report:`videos`})})]})})}var A,j,M=t((()=>{f(),C(),i(),s(),A=e(n(),1),he(),ge(),j=a()})),N,P=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,ve=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(k,{attributes:{reportParams:d(e)}})}function U(e){return(0,W.jsx)(k,{attributes:{reportParams:d(!1,e)}})}function ye({withComparison:e,...t}){return(0,W.jsx)(b,{...t,widgetType:fe(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),oe(),ue(),de(),y(),x(),M(),P(),ve(),W=a(),g(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[w,S]},J={render:H,args:{withComparison:!0},decorators:[w,S]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(_(`stats/video-plays`,`loading`),()=>_(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(_(`stats/video-plays`,`error`),()=>_(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(_(`stats/video-plays`,`empty`),()=>_(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(ye,{...e}),args:{...pe,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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