import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{On as s,Tt as c,t as l}from"./src-EFVFQWJ1.js";import{Jt as u,Yt as d,Zt as f,_ as p,o as ee,x as te}from"./charts-provider-BcXi6Auj.js";import{a as m}from"./src-BRGs5Z50.js";import"./rows-DAmD2BmE.js";import{r as h,t as ne}from"./leaderboard-skeleton-j9kb6SMG.js";import{n as g,r as _}from"./register-report-mocks-ByCR7QC_.js";import{t as re}from"./widget-state-DFLDEYqh.js";import{n as v,r as y}from"./with-story-router-Beljd9ki.js";import{g as ie,i as b,o as ae,p as oe,y as se}from"./leaderboard-Czv2wTZh.js";import{n as ce,s as le}from"./components-C3Tpl1Ga.js";import{t as x}from"./src-CCU8io4M.js";import{a as ue,g as de,h as fe,i as pe,m as me,n as he,p as ge,r as S}from"./with-widget-canvas-CuaJpnBg.js";import{n as _e,t as ve}from"./register-stats-mocks-C4RvxAur.js";import{n as ye,t as C}from"./force-stats-mock-state-CfGUzcXy.js";var w,T,E,D,be=e((()=>{w=`_placeholder_1oate_1`,T=`_root_1oate_9`,E=`_content_1oate_18`,D={placeholder:w,root:T,content:E}}));function O(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:m(e.link)??void 0,icon:e.icon,children:e.children?.map(O),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function xe(e,n,i){let a=d(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=n&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:ae({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:u(e.value,a),previousValue:s,previousShare:c?u(s,a):void 0,delta:c?f(e.value,s):void 0}})}function Se({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,A.jsx)(h,{data:xe(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:j})}function Ce(){let{reportParams:e}=te(),{primary:n,comparisonRows:i,hasComparison:o,isLoading:s,isFetching:l,isError:u,refetch:d}=c({...e,max:10},{maxRows:10}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(O),[i]),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ee(),g=(0,a.useMemo)(()=>{let e=[],t=f;for(let n of p??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[f,p]);(0,a.useEffect)(()=>{!p?.length||s||l||u||g.length===p.length||(g.length?m(g.map(e=>e.label)):h())},[p,g,s,l,u,m,h]);let _=g.length?g[g.length-1]:null,v=_?_.children??[]:f,y=_?!!_.childrenHaveComparison:o,b=(0,a.useCallback)(e=>{m([...p??[],e.label])},[p,m]),ae=(0,a.useCallback)(()=>{let e=g.slice(0,-1).map(e=>e.label);e.length?m(e):h()},[g,m,h]),x=g.length>1?g[g.length-2].label:null,ue=x??t(`All referrers`,`jetpack-premium-analytics-pkg`),de=x?r(t(`Back to %s`,`jetpack-premium-analytics-pkg`),x):t(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:D.content,children:[g.length>0&&(0,A.jsx)(ie,{label:ue,ariaLabel:de,onClick:ae}),(0,A.jsx)(re,{isLoading:s,isFetching:l,isError:f.length===0&&u,isEmpty:f.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,A.jsx)(ne,{rows:10}),children:(0,A.jsx)(Se,{rows:v,withComparison:y,onDrillDown:b})})]}),(0,A.jsxs)(oe,{children:[(0,A.jsx)(se,{report:`referrers`}),(0,A.jsx)(ce,{exporter:le,status:{isLoading:s,isFetching:l,isError:n.isError},rowCount:f.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Ce,{})})})}var A,j,we=e((()=>{l(),x(),o(),n(),be(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Te=e((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,Ee=e((()=>{N=`jpa/referrers`,P=`jpa/globe`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{reportParams:s(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:s(!1,e)}})}function De({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:s(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),ve(),ye(),fe(),v(),ue(),he(),we(),Te(),Ee(),U=i(),_(),_e(),W=`storybook/referrers`,G=pe(B,M),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[S,y]},J={render:V,args:{withComparison:!0},decorators:[S,y]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(C(`stats/referrers`,`loading`),()=>C(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(C(`stats/referrers`,`error`),()=>C(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(C(`stats/referrers`,`empty`),()=>C(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(De,{...e}),args:{...ge,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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