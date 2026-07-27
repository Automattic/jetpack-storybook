import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,o as s}from"./build-module-DmVuor49.js";import{h as ee,p as c}from"./hooks-BrSH0A-q.js";import{Ct as l,J as u,X as d,fr as f,g as p,h as m,ln as te,m as h,q as g}from"./chart-tooltip-CryXugFS.js";import{t as _}from"./leaderboard-chart-Burbrno-.js";import{I as ne,L as re,S as ie,U as ae,b as oe,q as se,v as ce,z as v}from"./report-metric-3HVD-8p5.js";import{t as y}from"./widget-state-BdstlQQN.js";import{C as le,D as ue,E as de,O as fe,S as pe,T as me,b as he,k as b,t as x,w as ge,x as S}from"./src-CLCwEpcK.js";function _e(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:m(e),label:p(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ve=t((()=>{x()})),C,w,T,E,D,O,ye=t((()=>{C=`_labelLink_w5lmg_1`,w=`_labelText_w5lmg_2`,T=`_internalLink_w5lmg_3`,E=`_root_w5lmg_28`,D=`_content_w5lmg_36`,O={labelLink:C,labelText:w,internalLink:T,root:E,content:D}})),k,A=t((()=>{i(),o(),k={icon:s,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function be(e,t){return(0,P.jsx)(ce,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:O.internalLink,external:O.labelLink,plain:O.labelText},title:e.label})}function xe(e,t){let n=u(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:be(e,t),currentValue:e.plays,currentShare:g(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:g(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:d(e.plays,e.previousPlays)}))}function j({max:e}){let{reportParams:t}=se(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,hasData:l,isError:u,refetch:d}=te((0,N.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),f=(o||n.isPending)&&!l,p=(0,N.useMemo)(()=>_e(i?.rows??[]),[i]),m=(0,N.useMemo)(()=>ee(t),[t]),h=(0,N.useMemo)(()=>xe(p,m),[p,m]);return(0,P.jsx)(y,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:s,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(_,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(ae,{attributes:e,setError:t,children:(0,P.jsxs)(`div`,{className:O.root,children:[(0,P.jsx)(`div`,{className:O.content,children:(0,P.jsx)(j,{max:h(e.max,7)})}),(0,P.jsx)(ie,{children:(0,P.jsx)(oe,{report:`videos`})})]})})}var N,P,Se=t((()=>{l(),c(),x(),i(),o(),N=e(n(),1),ve(),ye(),A(),P=a()})),F,I,L,R,z,B,V,Ce=t((()=>{F=`jpa/videopress`,I=`VideoPress`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:7,reportParams:f(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:7,reportParams:f(!1,e)}})}function we({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:pe(V,k),renderModule:G,renderComponent:M,attributes:{max:7,reportParams:f(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{l(),ne(),de(),fe(),le(),he(),Se(),A(),Ce(),W=a(),re(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[S,b]},J={render:H,args:{withComparison:!0},decorators:[S,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/video-plays`,`loading`),()=>v(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/video-plays`,`error`),()=>v(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/video-plays`,`empty`),()=>v(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ge,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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