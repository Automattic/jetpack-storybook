import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-_6UNQmiR.js";import{P as c,d as ee,kt as l,p as u,s as d}from"./hooks-CP7fk61H.js";import{t as f,u as p}from"./build-module-Cc4XIcM8.js";import{F as m,a as h,c as g,i as _,o as v}from"./chart-tooltip-IALKmxWf.js";import{t as y}from"./leaderboard-chart-Cy6wyqUG.js";import{n as b,r as x,t as S}from"./register-report-mocks-D4rXi2Yc.js";import{t as C}from"./widget-state-mcZ8KLjM.js";import{i as w,n as T,r as te,t as ne}from"./widget-dashboard-with-widget-hqnGGtas.js";import{t as E}from"./src-DhnG6eek.js";function D(e,t){let n=new Map(g(t).map(e=>[h(e),e.plays]));return g(e).map(e=>{let t=h(e);return{key:t,label:v(e),link:e.link,plays:e.plays,previousPlays:n.get(t)??null}})}var O=t((()=>{E()})),k,A,j,M=t((()=>{k=`_labelLink_d8nn2_1`,A=`_labelText_d8nn2_2`,j={labelLink:k,labelText:A}})),N,P=t((()=>{i(),s(),N={name:`jpa/videopress`,title:r(`VideoPress`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function F(e,t){let n=Math.max(...e.flatMap(e=>[e.plays,e.previousPlays??0]),1);return e.map(e=>{let r=e.previousPlays??0;return{id:e.key,label:e.link?(0,R.jsx)(p,{className:j.labelLink,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,R.jsx)(`span`,{className:j.labelText,title:e.label,children:e.label}),currentValue:e.plays,currentShare:e.plays/n*100,previousValue:r,previousShare:t?r/n*100:0,delta:t?m(e.plays,r):0}})}function re({max:e}){let{reportParams:t}=ee(),{primary:n,comparison:i,hasComparison:a,isLoading:s,isFetching:l,hasData:u,isError:d,refetch:f}=c((0,L.useMemo)(()=>({...t,max:e}),[t,e])),p=(s||n.isPending)&&!u,m=n.data,h=i.data,g=(0,L.useMemo)(()=>D(m,h),[m,h]),_=a&&g.some(e=>e.previousPlays!==null),v=(0,L.useMemo)(()=>F(g,_),[g,_]);return(0,R.jsx)(C,{isLoading:p,isFetching:l,isError:d,isEmpty:g.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:o,description:r(`Learn which VideoPress videos your visitors watch most to understand what keeps them engaged.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(y,{data:v,withComparison:_,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function I({attributes:e={},setError:t}){return(0,R.jsx)(d,{attributes:e,setError:t,children:(0,R.jsx)(re,{max:_(e.max,7)})})}var L,R,z=t((()=>{u(),E(),i(),s(),f(),L=e(n(),1),O(),M(),P(),R=a()}));function B({withComparison:e}){return(0,U.jsx)(I,{attributes:{max:7,reportParams:l(e)}})}function V(e){return(0,U.jsx)(I,{attributes:{max:7,reportParams:l(!1,e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(T,{...t,widgetType:N,renderModule:W,renderComponent:I,attributes:{max:7,reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{u(),S(),te(),z(),P(),U=a(),b(),W=`storybook/videopress`,G=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,U.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/video-plays`,`loading`),()=>x(`stats/video-plays`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/video-plays`,`error`),()=>x(`stats/video-plays`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/video-plays`,`empty`),()=>x(`stats/video-plays`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...ne,withComparison:!0},argTypes:{...w,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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