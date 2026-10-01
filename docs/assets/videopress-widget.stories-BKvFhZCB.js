import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{s as o,t as s}from"./build-module-DNhkEVJn.js";import{m as c,v as l}from"./hooks-QRByV9Uq.js";import{Q as u,nn as d,t as f}from"./src-DkTnZFaK.js";import{B as ee,H as te,U as ne}from"./helpers-Bxmj6qb6.js";import"./rows-DAmD2BmE.js";import{n as p,r as m}from"./with-story-router-C2eTsgCd.js";import{n as h,r as g,s as _}from"./register-report-mocks-6zBcENt4.js";import{b as v,t as y}from"./leaderboard-nnQu9tjJ.js";import{t as b}from"./src-BjGO-V3v.js";import{a as x,d as S,f as C,i as w,n as T,p as re,r as E,u as ie}from"./with-widget-canvas-BAewXotS.js";function ae(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:te(e),label:ne(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var oe=t((()=>{b()}));function se(e){return{id:e.key,label:e.label,value:e.plays,previousValue:e.previousPlays,action:{kind:`videoLink`,id:e.id,href:e.link}}}function ce(){let{reportParams:e}=l(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:d}=u((0,O.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),f=(0,O.useMemo)(()=>ae(n?.rows??[]).map(se),[n]);return(0,k.jsx)(y,{rows:f,status:{isLoading:a||t.isPending,isFetching:o,isError:f.length===0&&s,hasComparison:i,refetch:d},error:ee(c,{retryDescription:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),footer:(0,k.jsx)(v,{report:`videos`})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(c,{attributes:e,setError:t,children:(0,k.jsx)(ce,{})})}var O,k,A=t((()=>{f(),b(),i(),O=e(n(),1),oe(),k=a()})),j,M=t((()=>{s(),j={icon:o,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B=t((()=>{N=`jpa/videopress`,P=`Top videos`,F=`Your most played VideoPress videos, sourced from Jetpack Stats.`,I={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V({withComparison:e}){return(0,W.jsx)(D,{attributes:{reportParams:d(e)}})}function H(e){return(0,W.jsx)(D,{attributes:{reportParams:d(!1,e)}})}function U({withComparison:e,...t}){return(0,W.jsx)(S,{...t,widgetType:w(z,j),renderModule:G,renderComponent:D,attributes:{reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),h(),C(),p(),x(),T(),A(),M(),B(),W=a(),g(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:V,args:{withComparison:!1},decorators:[E,m]},J={render:V,args:{withComparison:!0},decorators:[E,m]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[E,m],beforeEach:()=>(_(`stats/video-plays`,`loading`),()=>_(`stats/video-plays`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[E,m],beforeEach:()=>(_(`stats/video-plays`,`error`),()=>_(`stats/video-plays`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[E,m],beforeEach:()=>(_(`stats/video-plays`,`empty`),()=>_(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...ie,withComparison:!0},argTypes:{...re,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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