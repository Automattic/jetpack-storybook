import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{Ct as s,t as c,un as l}from"./src-C8-aYLVb.js";import{Ot as u,Yt as d,jt as f,m as p,o as ee,v as te}from"./charts-provider-D7DbhhgI.js";import{a as m}from"./src-CgOypRmj.js";import"./rows-DAmD2BmE.js";import{r as h,t as ne}from"./leaderboard-skeleton-sj_7PrpE.js";import{n as g,r as _}from"./register-report-mocks-BF6xtkRu.js";import{t as re}from"./widget-state-D4AYNcog.js";import{n as v,r as y}from"./with-story-router-TjVyBU09.js";import{i as b,o as x}from"./build-leaderboard-chart-data-CpvuifvW.js";import{f as ie,l as ae,o as oe}from"./leaderboard-DmLzS-iq.js";import{T as se,b as ce,t as S}from"./src-DZdtdpA1.js";import{a as le,g as ue,h as de,i as fe,m as pe,n as me,p as he,r as C}from"./with-widget-canvas-Bsb6Mh0_.js";import{n as ge,t as _e}from"./register-stats-mocks-D1ZM73ai.js";import{n as ve,t as w}from"./force-stats-mock-state-C9aHrXhn.js";var T,E,D,O,ye=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:m(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function be(e,r,i){let a=u(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:x({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:f(e.value,a),previousValue:s,previousShare:c?f(s,a):void 0,delta:c?d(e.value,s):void 0}})}function xe({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(h,{data:be(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function Se(){let{reportParams:e}=te(),{primary:r,comparisonRows:i,hasComparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=s({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(k),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ee(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||c||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,c,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),x=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),S=g.length>1?g[g.length-2].label:null,le=S??n(`All referrers`,`jetpack-premium-analytics-pkg`),ue=S?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),S):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:O.content,children:[g.length>0&&(0,j.jsx)(ae,{label:le,ariaLabel:ue,onClick:x}),(0,j.jsx)(re,{isLoading:c,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(xe,{rows:v,withComparison:y,onDrillDown:b})})]}),(0,j.jsxs)(oe,{children:[(0,j.jsx)(ie,{report:`referrers`}),(0,j.jsx)(ce,{exporter:se,status:{isLoading:c,isFetching:l,isError:r.isError},rowCount:f.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(p,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Se,{})})})}var j,M,Ce=e((()=>{c(),S(),o(),r(),ye(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,we=e((()=>{N={attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,V,Te=e((()=>{P=`jpa/referrers`,F=`jpa/globe`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(A,{attributes:{reportParams:l(e)}})}function U(e){return(0,W.jsx)(A,{attributes:{reportParams:l(!1,e)}})}function Ee({withComparison:e,...t}){return(0,W.jsx)(pe,{...t,widgetType:De,renderModule:G,renderComponent:A,attributes:{reportParams:l(e)}})}var W,G,De,K,q,J,Y,X,Z,Q,$;e((()=>{c(),g(),_e(),ve(),de(),v(),le(),me(),Ce(),we(),Te(),W=i(),_(),ge(),G=`storybook/referrers`,De=fe(V,N),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:H,args:{withComparison:!1},decorators:[C,y]},J={render:H,args:{withComparison:!0},decorators:[C,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,y],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,W.jsx)(Ee,{...e}),args:{...he,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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