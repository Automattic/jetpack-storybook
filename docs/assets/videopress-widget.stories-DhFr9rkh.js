import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-CDRs4YxF.js";import{E as c,K as l,L as u,X as d,et as f,it as ee,q as p,v as m,w as h,z as te}from"./report-metric-BZ-9rtlV.js";import{Q as ne,Tt as g,Z as _,_ as re,dn as ie,et as ae,g as oe,hr as v,v as se}from"./chart-tooltip-BMeWiyL-.js";import{t as y}from"./leaderboard-chart-C0CTrh99.js";import{t as ce}from"./widget-state-B8RHjzuI.js";import{C as le,D as ue,E as de,O as fe,S as pe,T as me,b as he,k as b,t as x,w as ge,x as S}from"./src-B4C48Aim.js";function _e(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:re(e),label:se(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ve=t((()=>{x()})),C,w,T,E,D,O,ye=t((()=>{C=`_labelLink_w5lmg_1`,w=`_labelText_w5lmg_2`,T=`_internalLink_w5lmg_3`,E=`_root_w5lmg_28`,D=`_content_w5lmg_36`,O={labelLink:C,labelText:w,internalLink:T,root:E,content:D}})),k,A=t((()=>{i(),s(),k={icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}}));function be(e,t){return(0,N.jsx)(m,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:O.internalLink,external:O.labelLink,plain:O.labelText},title:e.label})}function xe(e,t){let n=ne(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:be(e,t),currentValue:e.plays,currentShare:_(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:_(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:ae(e.plays,e.previousPlays)}))}function Se({max:e}){let{reportParams:t}=ee(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=ie((0,M.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),f=(s||n.isPending)&&!l,p=(0,M.useMemo)(()=>_e(i?.rows??[]),[i]),m=(0,M.useMemo)(()=>te(t),[t]),h=(0,M.useMemo)(()=>xe(p,m),[p,m]);return(0,N.jsx)(ce,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(y,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(f,{attributes:e,setError:t,children:(0,N.jsxs)(`div`,{className:O.root,children:[(0,N.jsx)(`div`,{className:O.content,children:(0,N.jsx)(Se,{max:oe(e.max,7)})}),(0,N.jsx)(c,{children:(0,N.jsx)(h,{report:`videos`})})]})})}var M,N,Ce=t((()=>{g(),u(),x(),i(),s(),M=e(n(),1),ve(),ye(),A(),N=a()})),P,F,I,L,R,z,B,we=t((()=>{P=`jpa/videopress`,F=`Top videos`,I=`Your most played VideoPress videos, sourced from Jetpack Stats.`,L={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,W.jsx)(j,{attributes:{max:7,reportParams:v(e)}})}function H(e){return(0,W.jsx)(j,{attributes:{max:7,reportParams:v(!1,e)}})}function U({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:pe(B,k),renderModule:G,renderComponent:j,attributes:{max:7,reportParams:v(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),l(),de(),fe(),le(),he(),Ce(),A(),we(),W=a(),p(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:V,args:{withComparison:!1},decorators:[S,b]},J={render:V,args:{withComparison:!0},decorators:[S,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(d(`stats/video-plays`,`loading`),()=>d(`stats/video-plays`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(d(`stats/video-plays`,`error`),()=>d(`stats/video-plays`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(d(`stats/video-plays`,`empty`),()=>d(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...ge,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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