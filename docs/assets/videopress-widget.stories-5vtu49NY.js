import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,o as s}from"./build-module-DoJYX5DX.js";import{F as c,G as l,L as ee,S as u,W as d,Z as f,q as p,tt as te,v as m,w as h}from"./report-metric-BSNNRPgL.js";import{J as ne,X as re,g as ie,h as ae,m as oe,q as g,sn as se,ur as _,xt as v}from"./chart-tooltip-BRZ2PClR.js";import{t as ce}from"./leaderboard-chart-DhGcDyhH.js";import{C as le,D as ue,E as de,O as fe,S as pe,T as me,b as he,k as y,t as b,w as ge,x}from"./src-BE9SVcov.js";import{t as _e}from"./widget-state-CFIUT-OU.js";function ve(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:ae(e),label:ie(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ye=t((()=>{b()})),S,C,w,T,E,D,be=t((()=>{S=`_labelLink_w5lmg_1`,C=`_labelText_w5lmg_2`,w=`_internalLink_w5lmg_3`,T=`_root_w5lmg_28`,E=`_content_w5lmg_36`,D={labelLink:S,labelText:C,internalLink:w,root:T,content:E}})),O,k=t((()=>{i(),o(),O={icon:s,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}}));function xe(e,t){return(0,P.jsx)(m,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:D.internalLink,external:D.labelLink,plain:D.labelText},title:e.label})}function A(e,t){let n=ne(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:xe(e,t),currentValue:e.plays,currentShare:g(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:g(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:re(e.plays,e.previousPlays)}))}function j({max:e}){let{reportParams:t}=te(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,hasData:l,isError:u,refetch:d}=se((0,N.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),f=(o||n.isPending)&&!l,p=(0,N.useMemo)(()=>ve(i?.rows??[]),[i]),m=(0,N.useMemo)(()=>ee(t),[t]),h=(0,N.useMemo)(()=>A(p,m),[p,m]);return(0,P.jsx)(_e,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:s,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(ce,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(f,{attributes:e,setError:t,children:(0,P.jsxs)(`div`,{className:D.root,children:[(0,P.jsx)(`div`,{className:D.content,children:(0,P.jsx)(j,{max:oe(e.max,7)})}),(0,P.jsx)(h,{children:(0,P.jsx)(u,{report:`videos`})})]})})}var N,P,Se=t((()=>{v(),c(),b(),i(),o(),N=e(n(),1),ye(),be(),k(),P=a()})),F,I,L,R,z,B,V,Ce=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:7,reportParams:_(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:7,reportParams:_(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:pe(V,O),renderModule:G,renderComponent:M,attributes:{max:7,reportParams:_(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),d(),de(),fe(),le(),he(),Se(),k(),Ce(),W=a(),l(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[x,y]},J={render:H,args:{withComparison:!0},decorators:[x,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(p(`stats/video-plays`,`loading`),()=>p(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(p(`stats/video-plays`,`error`),()=>p(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(p(`stats/video-plays`,`empty`),()=>p(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ge,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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