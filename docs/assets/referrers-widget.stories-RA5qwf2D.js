import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-DehlFOqW.js";import{G as u,K as d,_n as f,cr as p,yt as m}from"./chart-tooltip-BtX3Jjce.js";import{t as h}from"./leaderboard-chart-6vbiAia1.js";import{E as g,M as _,N as v,U as ee,b as te,g as y,v as b,w as x,z as S}from"./report-metric-CWPPaMwH.js";import{t as ne}from"./widget-state-CE3oTs97.js";import{C,D as w,E as T,S as E,T as re,b as ie,t as ae,w as oe,x as D}from"./src-BAp3Kd5h.js";import{n as se,t as O}from"./register-stats-mocks-DGkfWl-d.js";import{n as ce,t as k}from"./force-stats-mock-state-me5gilGe.js";var A,j,M,N,le=e((()=>{A=`_placeholder_1d6co_1`,j=`_root_1d6co_9`,M=`_content_1d6co_18`,N={placeholder:A,root:j,content:M}}));function P(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:e.link??void 0,icon:e.icon,children:e.children?.map(P),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ue(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,f=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...x({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:g({href:e.href,hasChildren:f,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:c,previousShare:l?u(c,o):void 0,delta:l?d(e.value,c):void 0}})}function de({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,I.jsx)(h,{data:ue(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:L})}function fe({max:e}){let{reportParams:r}=ee(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:u,isError:d,refetch:p}=f({...r,max:e},{maxRows:e}),m=(0,a.useMemo)(()=>(i?.rows??[]).map(P),[i]),{drillDownItem:h,drillDown:g,resetDrillDown:_}=l(),v=(0,a.useMemo)(()=>{let e=[],t=m;for(let n of h??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[m,h]);(0,a.useEffect)(()=>{!h?.length||s||u||d||v.length===h.length||(v.length?g(v.map(e=>e.label)):_())},[h,v,s,u,d,g,_]);let y=v.length?v[v.length-1]:null,b=y?y.children??[]:m,x=y?!!y.childrenHaveComparison:o,S=(0,a.useCallback)(e=>{g([...h??[],e.label])},[h,g]),C=(0,a.useCallback)(()=>{let e=v.slice(0,-1).map(e=>e.label);e.length?g(e):_()},[v,g,_]),w=v.length>1?v[v.length-2].label:null,T=w??n(`All referrers`,`jetpack-premium-analytics`),E=w?t(n(`Back to %s`,`jetpack-premium-analytics`),w):n(`View all referrers`,`jetpack-premium-analytics`);return(0,I.jsxs)(`div`,{className:N.content,children:[v.length>0&&(0,I.jsx)(te,{label:T,ariaLabel:E,onClick:C}),(0,I.jsx)(ne,{isLoading:s,isFetching:u,isError:m.length===0&&d,isEmpty:m.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:p}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(de,{rows:b,withComparison:x,onDrillDown:S})})]})}function F({attributes:e={}}){let t=e?.max??10;return(0,I.jsx)(S,{attributes:e,children:(0,I.jsxs)(`div`,{className:N.root,children:[(0,I.jsx)(fe,{max:t}),(0,I.jsx)(b,{children:(0,I.jsx)(y,{report:`referrers`})})]})})}var I,L,R=e((()=>{m(),ae(),o(),r(),s(),le(),I=i(),L={type:`number`,options:{useMultipliers:!0,decimals:0}}})),z,B=e((()=>{r(),s(),z={name:`jpa/referrers`,title:n(`Referrers`,`jetpack-premium-analytics`),help:{content:n(`The sources that sent the most visitors to your site, sorted by clicks.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{max:10,reportParams:p(e)}})}function H(e){return(0,U.jsx)(F,{attributes:{max:10,reportParams:p(!1,e)}})}function pe({withComparison:e,...t}){return(0,U.jsx)(C,{...t,widgetType:G,renderModule:W,renderComponent:F,attributes:{max:10,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),O(),ce(),oe(),T(),ie(),R(),B(),U=i(),v(),se(),W=`storybook/referrers`,G={name:z.name,title:z.title,icon:z.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[D,w]},J={render:V,args:{withComparison:!0},decorators:[D,w]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(k(`stats/referrers`,`loading`),()=>k(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(k(`stats/referrers`,`error`),()=>k(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(k(`stats/referrers`,`empty`),()=>k(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(pe,{...e}),args:{...E,withComparison:!0},argTypes:{...re,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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