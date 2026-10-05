import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Oo as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,r as ee,v as te}from"./hooks-D4JKjoBV.js";import{mt as ne,on as u,t as d}from"./src-DET7R-ZN.js";import{Ct as f,St as p,Tt as m}from"./helpers-DiXxdgqu.js";import"./rows-DAmD2BmE.js";import{r as h,t as re}from"./leaderboard-skeleton-Dw8VgU_k.js";import{n as g,r as _}from"./with-story-router-C9Mkrjt-.js";import{n as v,r as y}from"./register-report-mocks-CeqHRuL3.js";import{_ as ie,b as ae,i as b,m as oe,o as x}from"./leaderboard-DgU56Ubq.js";import{t as se}from"./widget-state-BLeT3I-c.js";import{a as ce}from"./src-BHhJCNAZ.js";import{d as le,o as ue}from"./report-metric-DZaraPBm.js";import{t as S}from"./src-CgrCAb16.js";import{a as de,d as fe,f as pe,i as me,n as he,p as ge,r as C,u as _e}from"./with-widget-canvas-CTgxh6Qa.js";import{n as ve,t as ye}from"./register-stats-mocks-D1dsqfnE.js";import{n as be,t as w}from"./force-stats-mock-state-kgLVPzkk.js";var T,E,D,O,xe=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:ce(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Se(e,n,i){let a=f(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=n&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:c?p(s,a):void 0,delta:c?m(e.value,s):void 0}})}function Ce({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(h,{data:Se(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function we(){let{reportParams:e}=te(),{primary:n,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ne({...e,max:10},{maxRows:10}),d=(0,o.useMemo)(()=>(i?.rows??[]).map(k),[i]),{drillDownItem:f,drillDown:p,resetDrillDown:m}=ee(),h=(0,o.useMemo)(()=>{let e=[],t=d;for(let n of f??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[d,f]);(0,o.useEffect)(()=>{!f?.length||s||c||l||h.length===f.length||(h.length?p(h.map(e=>e.label)):m())},[f,h,s,c,l,p,m]);let g=h.length?h[h.length-1]:null,_=g?g.children??[]:d,v=g?!!g.childrenHaveComparison:a,y=(0,o.useCallback)(e=>{p([...f??[],e.label])},[f,p]),b=(0,o.useCallback)(()=>{let e=h.slice(0,-1).map(e=>e.label);e.length?p(e):m()},[h,p,m]),x=h.length>1?h[h.length-2].label:null,ce=x??t(`All referrers`,`jetpack-premium-analytics-pkg`),S=x?r(t(`Back to %s`,`jetpack-premium-analytics-pkg`),x):t(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:O.content,children:[h.length>0&&(0,j.jsx)(ie,{label:ce,ariaLabel:S,onClick:b}),(0,j.jsx)(se,{isLoading:s,isFetching:c,isError:d.length===0&&l,isEmpty:d.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,j.jsx)(re,{rows:10}),children:(0,j.jsx)(Ce,{rows:_,withComparison:v,onDrillDown:y})})]}),(0,j.jsxs)(oe,{children:[(0,j.jsx)(ae,{report:`referrers`}),(0,j.jsx)(ue,{exporter:le,status:{isLoading:s,isFetching:c,isError:n.isError},rowCount:d.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(we,{})})})}var j,M,Te=e((()=>{d(),S(),s(),n(),xe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Ee=e((()=>{c(),N={icon:a,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,De=e((()=>{P=`jpa/referrers`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:u(!1,e)}})}function Oe({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),v(),ye(),be(),pe(),g(),de(),he(),Te(),Ee(),De(),U=i(),y(),ve(),W=`storybook/referrers`,G=me(B,N),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,_]},J={render:V,args:{withComparison:!0},decorators:[C,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{..._e,withComparison:!0},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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