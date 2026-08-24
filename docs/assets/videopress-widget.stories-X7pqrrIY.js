import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-CDRs4YxF.js";import{J as c,S as l,Z as u,at as ee,ct as te,g as d,ot as f,q as p,tt as ne,w as re}from"./report-metric-CUJ3Gh6_.js";import{U as ie,qt as m,t as h}from"./src-56SjHKng.js";import"./constants-B1kGztHF.js";import{C as ae,it as oe,ot as se,rt as g,w as ce}from"./chart-tooltip-WHUgZUgy.js";import{r as _,t as le}from"./leaderboard-skeleton-pUPanKH1.js";import{t as ue}from"./widget-state-B-6QxAet.js";import{C as de,D as fe,E as pe,O as me,S as he,T as v,b as y,k as b,t as x,w as ge,x as S}from"./src-KyGwFKrH.js";function _e(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:ae(e),label:ce(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ve=t((()=>{x()})),C,w,T,E,D,O,ye=t((()=>{C=`_labelLink_w5lmg_1`,w=`_labelText_w5lmg_2`,T=`_internalLink_w5lmg_3`,E=`_root_w5lmg_28`,D=`_content_w5lmg_36`,O={labelLink:C,labelText:w,internalLink:T,root:E,content:D}}));function k(e,t){return(0,N.jsx)(d,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:O.internalLink,external:O.labelLink,plain:O.labelText},title:e.label})}function be(e,t){let n=oe(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:k(e,t),currentValue:e.plays,currentShare:g(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:g(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:se(e.plays,e.previousPlays)}))}function A(){let{reportParams:e}=ee(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:s,isError:c,refetch:l}=ie((0,M.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),u=a||t.isPending,d=(0,M.useMemo)(()=>_e(n?.rows??[]),[n]),f=(0,M.useMemo)(()=>te(e),[e]),p=(0,M.useMemo)(()=>be(d,f),[d,f]);return(0,N.jsx)(ue,{isLoading:u,isFetching:s,isError:d.length===0&&c,isEmpty:d.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(le,{rows:10}),children:(0,N.jsx)(_,{data:p,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(ne,{attributes:e,setError:t,children:(0,N.jsxs)(`div`,{className:O.root,children:[(0,N.jsx)(`div`,{className:O.content,children:(0,N.jsx)(A,{})}),(0,N.jsx)(re,{children:(0,N.jsx)(l,{report:`videos`})})]})})}var M,N,xe=t((()=>{h(),f(),x(),i(),s(),M=e(n(),1),ve(),ye(),N=a()})),P,Se=t((()=>{s(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,Ce=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{reportParams:m(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{reportParams:m(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(v,{...t,widgetType:he(V,P),renderModule:G,renderComponent:j,attributes:{reportParams:m(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),p(),pe(),me(),de(),y(),xe(),Se(),Ce(),W=a(),c(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[S,b]},J={render:H,args:{withComparison:!0},decorators:[S,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(u(`stats/video-plays`,`loading`),()=>u(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(u(`stats/video-plays`,`error`),()=>u(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(u(`stats/video-plays`,`empty`),()=>u(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ge,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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