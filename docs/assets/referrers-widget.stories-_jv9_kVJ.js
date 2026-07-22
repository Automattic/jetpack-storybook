import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-BzjiFeg5.js";import{G as u,K as d,_n as f,cr as p,yt as m}from"./chart-tooltip-sTMsgHbZ.js";import{t as h}from"./leaderboard-chart-BPTqMFhB.js";import{E as g,M as _,N as v,U as ee,b as te,g as y,v as ne,w as b,z as re}from"./report-metric-D5hry_ac.js";import{t as ie}from"./widget-state-CSKYcGm6.js";import{C as x,D as S,E as C,O as w,S as ae,T as oe,b as se,k as T,t as ce,w as le,x as E}from"./src-7Fe8UaL9.js";import{n as ue,t as de}from"./register-stats-mocks-D_Ft4UVJ.js";import{n as fe,t as D}from"./force-stats-mock-state-BybZpunD.js";var O,k,A,j,pe=e((()=>{O=`_placeholder_1d6co_1`,k=`_root_1d6co_9`,A=`_content_1d6co_18`,j={placeholder:O,root:k,content:A}}));function M(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:e.link??void 0,icon:e.icon,children:e.children?.map(M),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function me(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,f=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:g({href:e.href,hasChildren:f,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:c,previousShare:l?u(c,o):void 0,delta:l?d(e.value,c):void 0}})}function he({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,P.jsx)(h,{data:me(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:F})}function ge({max:e}){let{reportParams:r}=ee(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:u,isError:d,refetch:p}=f({...r,max:e},{maxRows:e}),m=(0,a.useMemo)(()=>(i?.rows??[]).map(M),[i]),{drillDownItem:h,drillDown:g,resetDrillDown:_}=l(),v=(0,a.useMemo)(()=>{let e=[],t=m;for(let n of h??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[m,h]);(0,a.useEffect)(()=>{!h?.length||s||u||d||v.length===h.length||(v.length?g(v.map(e=>e.label)):_())},[h,v,s,u,d,g,_]);let y=v.length?v[v.length-1]:null,ne=y?y.children??[]:m,b=y?!!y.childrenHaveComparison:o,re=(0,a.useCallback)(e=>{g([...h??[],e.label])},[h,g]),x=(0,a.useCallback)(()=>{let e=v.slice(0,-1).map(e=>e.label);e.length?g(e):_()},[v,g,_]),S=v.length>1?v[v.length-2].label:null,C=S??n(`All referrers`,`jetpack-premium-analytics`),w=S?t(n(`Back to %s`,`jetpack-premium-analytics`),S):n(`View all referrers`,`jetpack-premium-analytics`);return(0,P.jsxs)(`div`,{className:j.content,children:[v.length>0&&(0,P.jsx)(te,{label:C,ariaLabel:w,onClick:x}),(0,P.jsx)(ie,{isLoading:s,isFetching:u,isError:m.length===0&&d,isEmpty:m.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:p}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(he,{rows:ne,withComparison:b,onDrillDown:re})})]})}function N({attributes:e={}}){let t=e?.max??10;return(0,P.jsx)(re,{attributes:e,children:(0,P.jsxs)(`div`,{className:j.root,children:[(0,P.jsx)(ge,{max:t}),(0,P.jsx)(ne,{children:(0,P.jsx)(y,{report:`referrers`})})]})})}var P,F,_e=e((()=>{m(),ce(),o(),r(),s(),pe(),P=i(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,ve=e((()=>{r(),s(),I={icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),L,R,z,B,V,H,U,ye=e((()=>{L=`jpa/referrers`,R=`Referrers`,z=`Websites and search engines referring visitors to your site.`,B={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({withComparison:e}){return(0,K.jsx)(N,{attributes:{max:10,reportParams:p(e)}})}function G(e){return(0,K.jsx)(N,{attributes:{max:10,reportParams:p(!1,e)}})}function be({withComparison:e,...t}){return(0,K.jsx)(oe,{...t,widgetType:Se,renderModule:xe,renderComponent:N,attributes:{max:10,reportParams:p(e)}})}var K,xe,Se,q,J,Y,X,Z,Q,$,Ce;e((()=>{m(),_(),de(),fe(),C(),w(),x(),se(),_e(),ve(),ye(),K=i(),v(),ue(),xe=`storybook/referrers`,Se=ae(U,I),q={title:`Packages/Premium Analytics/Widgets/Referrers`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},J={render:W,args:{withComparison:!1},decorators:[E,T]},Y={render:W,args:{withComparison:!0},decorators:[E,T]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`loading`),()=>D(`stats/referrers`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`error`),()=>D(`stats/referrers`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[E,T],beforeEach:()=>(D(`stats/referrers`,`empty`),()=>D(`stats/referrers`,null))},$={render:e=>(0,K.jsx)(be,{...e}),args:{...le,withComparison:!0},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'loading');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/referrers` is answered by the\nlegacy stats mocks before the shared `setReportMockState` override can\nintercept it.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'error');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'empty');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral globe
glyph and "No referrers in this period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ce=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,Ce as __namedExportsOrder,q as default};