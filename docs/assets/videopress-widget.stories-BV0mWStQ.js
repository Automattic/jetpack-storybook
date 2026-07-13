import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-Bt8gOW8e.js";import{It as c,V as ee,d as te,p as l,s as u}from"./hooks-DLXILeQ8.js";import{t as d,u as f}from"./build-module-Bh3mpS28.js";import{F as p,a as m,c as h,i as g,o as _}from"./chart-tooltip-CMA-3XdT.js";import{t as v}from"./leaderboard-chart-sMEIUgwU.js";import{n as y,r as b,t as x}from"./register-report-mocks-CnZ_77AT.js";import{t as S}from"./widget-state-DECP44YO.js";import{i as C,n as w,r as ne,t as re}from"./widget-dashboard-with-widget-089p4ezJ.js";import{t as T}from"./src-BW7XE8Jy.js";function E(e,t){let n=new Map(h(t).map(e=>[m(e),e.plays]));return h(e).map(e=>{let t=m(e);return{key:t,label:_(e),link:e.link,plays:e.plays,previousPlays:n.get(t)??null}})}var D=t((()=>{T()})),O,k,A,j=t((()=>{O=`_labelLink_d8nn2_1`,k=`_labelText_d8nn2_2`,A={labelLink:O,labelText:k}})),M,N=t((()=>{i(),s(),M={name:`jpa/videopress`,title:r(`VideoPress`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function P(e,t){let n=Math.max(...e.flatMap(e=>[e.plays,e.previousPlays??0]),1);return e.map(e=>{let r=e.previousPlays??0;return{id:e.key,label:e.link?(0,R.jsx)(f,{className:A.labelLink,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,R.jsx)(`span`,{className:A.labelText,title:e.label,children:e.label}),currentValue:e.plays,currentShare:e.plays/n*100,previousValue:r,previousShare:t?r/n*100:0,delta:t?p(e.plays,r):0}})}function F({max:e}){let{reportParams:t}=te(),{primary:n,comparison:i,hasComparison:a,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=ee((0,L.useMemo)(()=>({...t,max:e}),[t,e])),f=(s||n.isPending)&&!l,p=n.data,m=i.data,h=(0,L.useMemo)(()=>E(p,m),[p,m]),g=a&&h.some(e=>e.previousPlays!==null),_=(0,L.useMemo)(()=>P(h,g),[h,g]);return(0,R.jsx)(S,{isLoading:f,isFetching:c,isError:u,isEmpty:h.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:o,description:r(`Learn which VideoPress videos your visitors watch most to understand what keeps them engaged.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(v,{data:_,withComparison:g,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function I({attributes:e={},setError:t}){return(0,R.jsx)(u,{attributes:e,setError:t,children:(0,R.jsx)(F,{max:g(e.max,7)})})}var L,R,z=t((()=>{l(),T(),i(),s(),d(),L=e(n(),1),D(),j(),N(),R=a()}));function B({withComparison:e}){return(0,U.jsx)(I,{attributes:{max:7,reportParams:c(e)}})}function V(e){return(0,U.jsx)(I,{attributes:{max:7,reportParams:c(!1,e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(w,{...t,widgetType:M,renderModule:W,renderComponent:I,attributes:{max:7,reportParams:c(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{l(),x(),ne(),z(),N(),U=a(),y(),W=`storybook/videopress`,G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,U.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(b(`stats/video-plays`,`loading`),()=>b(`stats/video-plays`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(b(`stats/video-plays`,`error`),()=>b(`stats/video-plays`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(b(`stats/video-plays`,`empty`),()=>b(`stats/video-plays`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...re,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
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