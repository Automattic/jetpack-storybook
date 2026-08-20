import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,S as d,Y as f,g as p,it as m,ot as ee,rt as te,w as h}from"./report-metric-CZGk3pJU.js";import{Gt as g,V as ne,t as _}from"./src-DCbi8ow8.js";import{E as re,T as v,at as y,ct as ie,ot as ae,w as oe}from"./chart-tooltip-mdsQYAXX.js";import{r as b,t as se}from"./leaderboard-skeleton-CCNH4Z2y.js";import{t as ce}from"./widget-state-CEIPGY-o.js";import{C as le,D as ue,E as de,O as fe,S as pe,T as me,b as he,k as x,t as S,w as ge,x as C}from"./src-BenUPZSz.js";function _e(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:v(e),label:re(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ve=t((()=>{S()})),w,T,E,D,O,k,ye=t((()=>{w=`_labelLink_w5lmg_1`,T=`_labelText_w5lmg_2`,E=`_internalLink_w5lmg_3`,D=`_root_w5lmg_28`,O=`_content_w5lmg_36`,k={labelLink:w,labelText:T,internalLink:E,root:D,content:O}})),A,j=t((()=>{i(),s(),A={icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}}));function be(e,t){return(0,P.jsx)(p,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:k.internalLink,external:k.labelLink,plain:k.labelText},title:e.label})}function xe(e,t){let n=ae(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:be(e,t),currentValue:e.plays,currentShare:y(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:y(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:ie(e.plays,e.previousPlays)}))}function Se({max:e}){let{reportParams:t}=te(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=ne((0,N.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),f=(s||n.isPending)&&!l,p=(0,N.useMemo)(()=>_e(i?.rows??[]),[i]),m=(0,N.useMemo)(()=>ee(t),[t]),h=(0,N.useMemo)(()=>xe(p,m),[p,m]);return(0,P.jsx)(ce,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(se,{rows:e}),children:(0,P.jsx)(b,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(c,{attributes:e,setError:t,children:(0,P.jsxs)(`div`,{className:k.root,children:[(0,P.jsx)(`div`,{className:k.content,children:(0,P.jsx)(Se,{max:oe(e.max,7)})}),(0,P.jsx)(h,{children:(0,P.jsx)(d,{report:`videos`})})]})})}var N,P,Ce=t((()=>{_(),m(),S(),i(),s(),N=e(n(),1),ve(),ye(),j(),P=a()})),F,I,L,R,z,B,V,we=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:7,reportParams:g(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:7,reportParams:g(!1,e)}})}function Te({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:pe(V,A),renderModule:G,renderComponent:M,attributes:{max:7,reportParams:g(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),l(),de(),fe(),le(),he(),Ce(),j(),we(),W=a(),u(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[C,x]},J={render:H,args:{withComparison:!0},decorators:[C,x]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(f(`stats/video-plays`,`loading`),()=>f(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(f(`stats/video-plays`,`error`),()=>f(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(f(`stats/video-plays`,`empty`),()=>f(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...ge,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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