import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-CDRs4YxF.js";import{C as ee,b as c,g as l,x as u}from"./hooks-DUOrsHNJ.js";import{K as te,qt as d,t as f}from"./src-B6uEpSpZ.js";import"./constants-B1kGztHF.js";import{M as p,N as m,ft as h,ht as ne,pt as re}from"./chart-tooltip-CGYcCFon.js";import{r as ie,t as g}from"./leaderboard-skeleton-ulRQ6g0H.js";import{K as ae,S as oe,X as _,g as se,q as ce,w as le}from"./report-metric-BNr0NJxZ.js";import{t as ue}from"./widget-state-CSopoMAz.js";import{C as de,D as fe,E as v,O as pe,S as me,T as he,b as ge,k as y,t as b,w as _e,x}from"./src-DEA7VHtw.js";function ve(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:p(e),label:m(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var ye=t((()=>{b()})),S,C,w,T,E,D,O,be=t((()=>{S=`_labelLink_2cupw_1`,C=`_labelText_2cupw_2`,w=`_internalLink_2cupw_3`,T=`_titleText_2cupw_32`,E=`_root_2cupw_48`,D=`_content_2cupw_56`,O={labelLink:S,labelText:C,internalLink:w,titleText:T,root:E,content:D}}));function xe(e,t){return(0,N.jsx)(se,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:O.internalLink,external:O.labelLink,plain:O.labelText,text:O.titleText},title:e.label})}function k(e,t){let n=re(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:xe(e,t),currentValue:e.plays,currentShare:h(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:h(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:ne(e.plays,e.previousPlays)}))}function A(){let{reportParams:e}=c(),{primary:t,comparisonRows:n,hasComparison:i,isLoading:a,isFetching:s,isError:l,refetch:u}=te((0,M.useMemo)(()=>({...e,max:10}),[e]),{maxRows:10}),d=a||t.isPending,f=(0,M.useMemo)(()=>ve(n?.rows??[]),[n]),p=(0,M.useMemo)(()=>ee(e),[e]),m=(0,M.useMemo)(()=>k(f,p),[f,p]);return(0,N.jsx)(ue,{isLoading:d,isFetching:s,isError:f.length===0&&l,isEmpty:f.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(g,{rows:10}),children:(0,N.jsx)(ie,{data:m,withComparison:i,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(l,{attributes:e,setError:t,children:(0,N.jsxs)(`div`,{className:O.root,children:[(0,N.jsx)(`div`,{className:O.content,children:(0,N.jsx)(A,{})}),(0,N.jsx)(le,{children:(0,N.jsx)(oe,{report:`videos`})})]})})}var M,N,Se=t((()=>{f(),u(),b(),i(),s(),M=e(n(),1),ye(),be(),N=a()})),P,Ce=t((()=>{s(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,we=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{reportParams:d(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{reportParams:d(!1,e)}})}function Te({withComparison:e,...t}){return(0,W.jsx)(he,{...t,widgetType:me(V,P),renderModule:G,renderComponent:j,attributes:{reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),ae(),v(),pe(),de(),ge(),Se(),Ce(),we(),W=a(),ce(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[x,y]},J={render:H,args:{withComparison:!0},decorators:[x,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(_(`stats/video-plays`,`loading`),()=>_(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(_(`stats/video-plays`,`error`),()=>_(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(_(`stats/video-plays`,`empty`),()=>_(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{..._e,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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