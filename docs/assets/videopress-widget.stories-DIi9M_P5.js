import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,S as d,Y as f,g as p,it as m,ot as ee,rt as te,w as ne}from"./report-metric-CPA6R3m5.js";import{Gt as h,V as re,t as g}from"./src-Cmxy-Z5o.js";import{E as ie,T as ae,at as _,ct as oe,ot as se,w as v}from"./chart-tooltip-DowEDPST.js";import{r as ce,t as le}from"./leaderboard-skeleton-262W4iHj.js";import{t as ue}from"./widget-state-CJmMNZzn.js";import{C as de,D as fe,E as pe,O as me,S as he,T as ge,b as _e,k as y,t as b,w as ve,x}from"./src-Oqkq0snT.js";function ye(e=[]){return e.map(e=>{let t=Number(e.id);return{...Number.isInteger(t)&&t>0?{id:t}:{},key:ae(e),label:ie(e),link:e.link,plays:e.plays,previousPlays:e.previousPlays}})}var be=t((()=>{b()})),S,C,w,T,E,D,O=t((()=>{S=`_labelLink_w5lmg_1`,C=`_labelText_w5lmg_2`,w=`_internalLink_w5lmg_3`,T=`_root_w5lmg_28`,E=`_content_w5lmg_36`,D={labelLink:S,labelText:C,internalLink:w,root:T,content:E}})),k,A=t((()=>{i(),s(),k={icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:7}}}}));function xe(e,t){return(0,P.jsx)(p,{id:e.id,label:e.label,link:e.link,search:t,classNames:{internal:D.internalLink,external:D.labelLink,plain:D.labelText},title:e.label})}function j(e,t){let n=se(e.map(e=>e.plays),e.map(e=>e.previousPlays));return e.map(e=>({id:e.key,label:xe(e,t),currentValue:e.plays,currentShare:_(e.plays,n),previousValue:e.previousPlays,previousShare:e.previousPlays===void 0?void 0:_(e.previousPlays,n),delta:e.previousPlays===void 0?void 0:oe(e.plays,e.previousPlays)}))}function Se({max:e}){let{reportParams:t}=te(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=re((0,N.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),d=s||n.isPending,f=(0,N.useMemo)(()=>ye(i?.rows??[]),[i]),p=(0,N.useMemo)(()=>ee(t),[t]),m=(0,N.useMemo)(()=>j(f,p),[f,p]);return(0,P.jsx)(ue,{isLoading:d,isFetching:c,isError:f.length===0&&l,isEmpty:f.length===0,error:{description:r(`We couldn't load video plays. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:o,description:r(`No VideoPress plays in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(le,{rows:e}),children:(0,P.jsx)(ce,{data:m,withComparison:a,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(c,{attributes:e,setError:t,children:(0,P.jsxs)(`div`,{className:D.root,children:[(0,P.jsx)(`div`,{className:D.content,children:(0,P.jsx)(Se,{max:v(e.max,7)})}),(0,P.jsx)(ne,{children:(0,P.jsx)(d,{report:`videos`})})]})})}var N,P,Ce=t((()=>{g(),m(),b(),i(),s(),N=e(n(),1),be(),O(),A(),P=a()})),F,I,L,R,z,B,V,we=t((()=>{F=`jpa/videopress`,I=`Top videos`,L=`Your most played VideoPress videos, sourced from Jetpack Stats.`,R={content:`The published videos your visitors watched most often, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(M,{attributes:{max:7,reportParams:h(e)}})}function U(e){return(0,W.jsx)(M,{attributes:{max:7,reportParams:h(!1,e)}})}function Te({withComparison:e,...t}){return(0,W.jsx)(ge,{...t,widgetType:he(V,k),renderModule:G,renderComponent:M,attributes:{max:7,reportParams:h(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),l(),pe(),me(),de(),_e(),Ce(),A(),we(),W=a(),u(),G=`storybook/videopress`,K={title:`Packages/Premium Analytics/Widgets/VideoPress`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played VideoPress videos as a leaderboard, with internal video-detail links and optional period-over-period comparison. It is sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`; in Storybook the data is served by `registerReportMocks`."}}}},q={render:H,args:{withComparison:!1},decorators:[x,y]},J={render:H,args:{withComparison:!0},decorators:[x,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(f(`stats/video-plays`,`loading`),()=>f(`stats/video-plays`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(f(`stats/video-plays`,`error`),()=>f(`stats/video-plays`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,y],beforeEach:()=>(f(`stats/video-plays`,`empty`),()=>f(`stats/video-plays`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...ve,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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