import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{h as a,t as o}from"./build-module-DuNGIx6S.js";import{Oo as s,t as c}from"./build-module-CR6EsQjA.js";import{b as l,g as u,r as ee}from"./hooks-cREvsp6i.js";import{Zt as d,ct as te,t as f}from"./src-CvkPqN20.js";import"./constants-B1kGztHF.js";import{gt as p,mt as m,pt as h}from"./chart-tooltip-4hRy2HEs.js";import{r as g}from"./src-CxXDuRh72.js";import{r as _,t as ne}from"./leaderboard-skeleton-DAiNv7SH.js";import{F as re,G as ie,K as v,N as y,S as b,b as x,w as ae}from"./report-metric-DdQV6uYX.js";import{t as oe}from"./widget-state-CGvrSu1Q.js";import{C as S,D as se,E as ce,O as le,S as ue,T as de,b as fe,k as C,t as pe,w as me,x as w}from"./src-VuGprZhv.js";import{n as he,t as ge}from"./register-stats-mocks-DHD2wfhO.js";import{n as _e,t as T}from"./force-stats-mock-state-BW5DX2pW.js";var E,D,O,k,ve=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:g(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,r,i){let a=m(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...y({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:re({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:h(e.value,a),previousValue:s,previousShare:c?h(s,a):void 0,delta:c?p(e.value,s):void 0}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(_,{data:ye(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N})}function xe(){let{reportParams:e}=l(),{comparisonRows:r,hasComparison:i,isLoading:o,isFetching:c,isError:u,refetch:d}=te({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(r?.rows??[]).map(A),[r]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ee(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||o||c||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,o,c,u,m,h]);let _=g.length?g[g.length-1]:null,re=_?_.children??[]:f,ie=_?!!_.childrenHaveComparison:i,v=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),y=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),b=g.length>1?g[g.length-2].label:null,x=b??n(`All referrers`,`jetpack-premium-analytics-pkg`),S=b?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),b):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(`div`,{className:k.content,children:[g.length>0&&(0,M.jsx)(ae,{label:x,ariaLabel:S,onClick:y}),(0,M.jsx)(oe,{isLoading:o,isFetching:c,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:s,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(ne,{rows:10}),children:(0,M.jsx)(be,{rows:re,withComparison:ie,onDrillDown:v})})]})}function j({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsxs)(`div`,{className:k.root,children:[(0,M.jsx)(xe,{}),(0,M.jsx)(b,{children:(0,M.jsx)(x,{report:`referrers`})})]})})}var M,N,Se=e((()=>{f(),pe(),o(),r(),c(),ve(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Ce=e((()=>{c(),P={icon:s,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,we=e((()=>{F=`jpa/referrers`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{reportParams:d(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{reportParams:d(!1,e)}})}function Te({withComparison:e,...t}){return(0,W.jsx)(de,{...t,widgetType:K,renderModule:G,renderComponent:j,attributes:{reportParams:d(e)}})}var W,G,K,Ee,q,J,Y,X,Z,Q,$;e((()=>{f(),ie(),ge(),_e(),ce(),le(),S(),fe(),Se(),Ce(),we(),W=i(),v(),he(),G=`storybook/referrers`,K=ue(V,P),Ee={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[w,C]},J={render:H,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...me,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/referrers`\nbefore `setReportMockState` can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,Ee as default};