import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-DEADEY_R.js";import{g as u,t as d}from"./build-module-CHiiu6oh.js";import{$n as f,L as p,S as m,cn as h,ut as g}from"./chart-tooltip-BvgG-AYI.js";import{t as _}from"./leaderboard-chart-DH4PuFYg.js";import{C as v,N as ee,S as y,c as b,f as te,g as x,k as S,u as C}from"./report-metric-AOwBJK5s.js";import{t as ne}from"./widget-state-mSlNQTI4.js";import{C as w,D as T,E,S as re,T as ie,b as ae,t as oe,w as se,x as D}from"./src-D1_U5EeO.js";import{n as ce,t as le}from"./register-stats-mocks-Qnv4pdut.js";import{n as ue,t as O}from"./force-stats-mock-state-CTj21b4X.js";var k,A,j,M,N,P,F,de=e((()=>{k=`_labelIcon_1bc0q_1`,A=`_labelLink_1bc0q_9`,j=`_labelText_1bc0q_10`,M=`_placeholder_1bc0q_31`,N=`_root_1bc0q_39`,P=`_content_1bc0q_48`,F={labelIcon:k,labelLink:A,labelText:j,placeholder:M,root:N,content:P}}));function I(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:e.link??void 0,icon:e.icon,children:e.children?.map(I),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function fe(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,d=!!e.children?.length,f=!!e.href&&!d,h=(0,R.jsx)(x,{label:e.label,imageUrl:e.icon??void 0,imageAlt:``,imageFallback:`hidden`,imageClassName:F.labelIcon});return{id:`${s}-${e.href??e.label}`,label:f?(0,R.jsx)(u,{className:F.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:h}):(0,R.jsx)(`span`,{className:F.labelText,title:e.label,children:h}),currentValue:e.value,currentShare:e.value/a*100,previousValue:c,previousShare:l?m(c,o):void 0,delta:l?p(e.value,c):void 0,...d&&i&&{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}}})}function pe({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,R.jsx)(_,{data:fe(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:z})}function me({max:e}){let{reportParams:r}=ee(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:u,isError:d,refetch:f}=h({...r,max:e},{maxRows:e}),p=(0,a.useMemo)(()=>(i?.rows??[]).map(I),[i]),{drillDownItem:m,drillDown:g,resetDrillDown:_}=l(),v=(0,a.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,a.useEffect)(()=>{!m?.length||s||u||d||v.length===m.length||(v.length?g(v.map(e=>e.label)):_())},[m,v,s,u,d,g,_]);let y=v.length?v[v.length-1]:null,b=y?y.children??[]:p,x=y?!!y.childrenHaveComparison:o,S=(0,a.useCallback)(e=>{g([...m??[],e.label])},[m,g]),C=(0,a.useCallback)(()=>{let e=v.slice(0,-1).map(e=>e.label);e.length?g(e):_()},[v,g,_]),w=v.length>1?v[v.length-2].label:null,T=w??n(`All referrers`,`jetpack-premium-analytics`),E=w?t(n(`Back to %s`,`jetpack-premium-analytics`),w):n(`View all referrers`,`jetpack-premium-analytics`);return(0,R.jsxs)(`div`,{className:F.content,children:[v.length>0&&(0,R.jsx)(te,{label:T,ariaLabel:E,onClick:C}),(0,R.jsx)(ne,{isLoading:s,isFetching:u,isError:p.length===0&&d,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(pe,{rows:b,withComparison:x,onDrillDown:S})})]})}function L({attributes:e={}}){let t=e?.max??10;return(0,R.jsx)(S,{attributes:e,children:(0,R.jsxs)(`div`,{className:F.root,children:[(0,R.jsx)(me,{max:t}),(0,R.jsx)(C,{children:(0,R.jsx)(b,{report:`referrers`})})]})})}var R,z,he=e((()=>{g(),oe(),o(),r(),s(),d(),de(),R=i(),z={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,ge=e((()=>{r(),s(),B={name:`jpa/referrers`,title:n(`Referrers`,`jetpack-premium-analytics`),help:{content:n(`The sources that sent the most visitors to your site, sorted by clicks.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(L,{attributes:{max:10,reportParams:f(e)}})}function H(e){return(0,U.jsx)(L,{attributes:{max:10,reportParams:f(!1,e)}})}function _e({withComparison:e,...t}){return(0,U.jsx)(w,{...t,widgetType:G,renderModule:W,renderComponent:L,attributes:{max:10,reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),y(),le(),ue(),se(),E(),ae(),he(),ge(),U=i(),v(),ce(),W=`storybook/referrers`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[D,T]},J={render:V,args:{withComparison:!0},decorators:[D,T]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[D,T],beforeEach:()=>(O(`stats/referrers`,`loading`),()=>O(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[D,T],beforeEach:()=>(O(`stats/referrers`,`error`),()=>O(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[D,T],beforeEach:()=>(O(`stats/referrers`,`empty`),()=>O(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(_e,{...e}),args:{...re,withComparison:!0},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'loading');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/referrers` is answered by the\nlegacy stats mocks before the shared `setReportMockState` override can\nintercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'error');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'empty');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral globe
glyph and "No referrers in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ReferrersDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};