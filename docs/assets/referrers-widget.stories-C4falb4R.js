import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-grhlHtsz.js";import{G as u,K as d,_n as ee,cr as f,yt as p}from"./chart-tooltip-BlKjI_Wq.js";import{t as m}from"./leaderboard-chart-tWAEaWWA.js";import{E as h,F as g,G as te,O as _,P as v,S as ne,V as y,b,v as re}from"./report-metric-DKRyj5b-.js";import{t as ie}from"./widget-state-BGeUKz9u.js";import{C as ae,D as x,E as S,O as C,S as oe,T as se,b as ce,k as w,t as le,w as ue,x as T}from"./src-CINJv1gg.js";import{n as de,t as fe}from"./register-stats-mocks-C89taBwM.js";import{n as pe,t as E}from"./force-stats-mock-state-C9VwIlaK.js";var me,D,O,k,he=e((()=>{me=`_placeholder_1d6co_1`,D=`_root_1d6co_9`,O=`_content_1d6co_18`,k={placeholder:me,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:e.link??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ge(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,ee=!!e.children?.length;return{id:`${s}-${e.href??e.label}`,...h({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:_({href:e.href,hasChildren:ee,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:c,previousShare:l?u(c,o):void 0,delta:l?d(e.value,c):void 0}})}function _e({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(m,{data:ge(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N})}function ve({max:e}){let{reportParams:r}=te(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:u,isError:d,refetch:f}=ee({...r,max:e},{maxRows:e}),p=(0,a.useMemo)(()=>(i?.rows??[]).map(A),[i]),{drillDownItem:m,drillDown:h,resetDrillDown:g}=l(),_=(0,a.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,a.useEffect)(()=>{!m?.length||s||u||d||_.length===m.length||(_.length?h(_.map(e=>e.label)):g())},[m,_,s,u,d,h,g]);let v=_.length?_[_.length-1]:null,y=v?v.children??[]:p,b=v?!!v.childrenHaveComparison:o,re=(0,a.useCallback)(e=>{h([...m??[],e.label])},[m,h]),ae=(0,a.useCallback)(()=>{let e=_.slice(0,-1).map(e=>e.label);e.length?h(e):g()},[_,h,g]),x=_.length>1?_[_.length-2].label:null,S=x??n(`All referrers`,`jetpack-premium-analytics`),C=x?t(n(`Back to %s`,`jetpack-premium-analytics`),x):n(`View all referrers`,`jetpack-premium-analytics`);return(0,M.jsxs)(`div`,{className:k.content,children:[_.length>0&&(0,M.jsx)(ne,{label:S,ariaLabel:C,onClick:ae}),(0,M.jsx)(ie,{isLoading:s,isFetching:u,isError:p.length===0&&d,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(_e,{rows:y,withComparison:b,onDrillDown:re})})]})}function j({attributes:e={}}){let t=e?.max??10;return(0,M.jsx)(y,{attributes:e,children:(0,M.jsxs)(`div`,{className:k.root,children:[(0,M.jsx)(ve,{max:t}),(0,M.jsx)(b,{children:(0,M.jsx)(re,{report:`referrers`})})]})})}var M,N,ye=e((()=>{p(),le(),o(),r(),s(),he(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,be=e((()=>{r(),s(),P={icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),F,I,L,R,z,B,V,xe=e((()=>{F=`jpa/referrers`,I=`Referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{max:10,reportParams:f(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{max:10,reportParams:f(!1,e)}})}function Se({withComparison:e,...t}){return(0,W.jsx)(se,{...t,widgetType:K,renderModule:G,renderComponent:j,attributes:{max:10,reportParams:f(e)}})}var W,G,K,q,J,Y,X,Z,Q,$,Ce;e((()=>{p(),v(),fe(),pe(),S(),C(),ae(),ce(),ye(),be(),xe(),W=i(),g(),de(),G=`storybook/referrers`,K=oe(V,P),q={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},J={render:H,args:{withComparison:!1},decorators:[T,w]},Y={render:H,args:{withComparison:!0},decorators:[T,w]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`loading`),()=>E(`stats/referrers`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`error`),()=>E(`stats/referrers`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/referrers`,`empty`),()=>E(`stats/referrers`,null))},$={render:e=>(0,W.jsx)(Se,{...e}),args:{...ue,withComparison:!0},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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