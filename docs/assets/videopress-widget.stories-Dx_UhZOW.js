import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{s as o,t as s}from"./build-module-DNhkEVJn.js";import{m as c,v as l}from"./hooks-DH3-JNWL.js";import{cn as u,it as ee,t as d}from"./src-DpgL0FdG.js";import{B as te,H as f,U as ne}from"./helpers-CJzma_Xa.js";import"./rows-DAmD2BmE.js";import{n as re,r as p}from"./with-story-router-BpwrYb0I.js";import{n as m,r as h,s as g}from"./register-report-mocks-DtgScvB3.js";import{b as _,t as ie}from"./leaderboard-CnmFkXVt.js";import{o as ae}from"./report-metric-Cry7njEf.js";import{E as v,t as y}from"./src-Acb0qbNd.js";import{a as b,d as x,f as S,i as C,n as w,p as T,r as E,u as D}from"./with-widget-canvas-CUhGZWiM.js";function oe(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:f(e),label:ne(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var se=t((()=>{y()}));function ce(e){return{id:e.key,label:e.label,value:e.plays,previousValue:e.previousPlays,action:{kind:`videoLink`,id:e.id,href:e.link}}}function le(){let{reportParams:e}=l(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:u}=ee((0,k.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),d=(0,k.useMemo)(()=>oe(n?.rows??[]).map(ce),[n]),f=a||t.isPending;return(0,A.jsx)(ie,{rows:d,status:{isLoading:f,isFetching:o,isError:d.length===0&&s,hasComparison:i,refetch:u},error:te(c,{retryDescription:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),footer:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(_,{report:`videos`}),(0,A.jsx)(ae,{exporter:v,status:{isLoading:f,isFetching:o,isError:t.isError},rowCount:d.length})]})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(c,{attributes:e,setError:t,children:(0,A.jsx)(le,{})})}var k,A,j=t((()=>{d(),y(),i(),k=e(n(),1),se(),A=a()})),M,N=t((()=>{s(),M={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,V=t((()=>{P=`jpa/videopress`,F=`Top videos`,I=`Your most played VideoPress videos, sourced from Jetpack Stats.`,L={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function H({withComparison:e}){return(0,W.jsx)(O,{attributes:{reportParams:u(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{reportParams:u(!1,e)}})}function ue({withComparison:e,...t}){return(0,W.jsx)(x,{...t,widgetType:C(B,M),renderModule:G,renderComponent:O,attributes:{reportParams:u(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),m(),S(),re(),b(),w(),j(),N(),V(),W=a(),h(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[E,p]},J={render:H,args:{withComparison:!0},decorators:[E,p]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[E,p],beforeEach:()=>(g(`stats/video-plays`,`loading`),()=>g(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[E,p],beforeEach:()=>(g(`stats/video-plays`,`error`),()=>g(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[E,p],beforeEach:()=>(g(`stats/video-plays`,`empty`),()=>g(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(ue,{...e}),args:{...D,withComparison:!0},argTypes:{...T,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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