import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,o as s}from"./build-module-DmVuor49.js";import{h as ee,p as c}from"./hooks-Cl8yPu-U.js";import{G as l,K as u,an as te,cr as d,f,m as p,p as m,yt as h}from"./chart-tooltip-CN-zierK.js";import{t as ne}from"./leaderboard-chart-Cf0d5el5.js";import{F as re,G as ie,L as g,P as ae,V as oe,b as se,g as ce,v as le}from"./report-metric-D7MbdAaA.js";import{t as ue}from"./widget-state-cFvrqNOS.js";import{C as _,D as v,E as de,O as fe,S as pe,T as me,b as he,k as y,t as b,w as ge,x}from"./src-D_GQJy_9.js";function _e(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:m(e),label:p(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var S=t((()=>{b()})),C,w,T,E,D,O,ve=t((()=>{C=`_labelLink_w5lmg_1`,w=`_labelText_w5lmg_2`,T=`_internalLink_w5lmg_3`,E=`_root_w5lmg_28`,D=`_content_w5lmg_36`,O={labelLink:C,labelText:w,internalLink:T,root:E,content:D}})),k,A=t((()=>{i(),o(),k={icon:s,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function ye(e,t){return(0,P.jsx)(ce,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:O.internalLink,external:O.labelLink,plain:O.labelText},title:e.label})}function be(e,t){let n=Math.max(...e.flatMap(e=>[e.plays,e.previousPlays??0]),1);return e.map(e=>({id:e.key,label:ye(e,t),currentValue:e.plays,currentShare:l(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:l(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:u(e.plays,e.previousPlays)}))}function j({max:e}){let{reportParams:t}=ie(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:o,isFetching:c,hasData:l,isError:u,refetch:d}=te((0,N.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),f=(o||n.isPending)&&!l,p=(0,N.useMemo)(()=>_e(i?.rows??[]),[i]),m=(0,N.useMemo)(()=>ee(t),[t]),h=(0,N.useMemo)(()=>be(p,m),[p,m]);return(0,P.jsx)(ue,{isLoading:f,isFetching:c,isError:p.length===0&&u,isEmpty:p.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:s,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(ne,{data:h,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(oe,{attributes:e,setError:t,children:(0,P.jsxs)(`div`,{className:O.root,children:[(0,P.jsx)(`div`,{className:O.content,children:(0,P.jsx)(j,{max:f(e.max,7)})}),(0,P.jsx)(se,{children:(0,P.jsx)(le,{report:`videos`})})]})})}var N,P,xe=t((()=>{h(),c(),b(),i(),o(),N=e(n(),1),S(),ve(),A(),P=a()})),F,I,L,R,z,B,V,Se=t((()=>{F=`jpa/videopress`,I=`VideoPress`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:7,reportParams:d(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:7,reportParams:d(!1,e)}})}function Ce({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:pe(V,k),renderModule:G,renderComponent:M,attributes:{max:7,reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),ae(),de(),fe(),_(),he(),xe(),A(),Se(),W=a(),re(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[x,y]},J={render:H,args:{withComparison:!0},decorators:[x,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(g(`stats/video-plays`,`loading`),()=>g(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(g(`stats/video-plays`,`error`),()=>g(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(g(`stats/video-plays`,`empty`),()=>g(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(Ce,{...e}),args:{...ge,withComparison:!0},argTypes:{...v,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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