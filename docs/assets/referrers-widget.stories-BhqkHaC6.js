import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Mo as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{b as ee,en as l,g as te,r as ne,rn as u,tn as d}from"./hooks-BH5dCSxw.js";import{$t as f,r as p,ut as re}from"./date-period-dropdown-BcXFcJdU.js";import{a as m}from"./src-DEuh9gkB.js";import"./constants-B1kGztHF.js";import{r as h,t as ie}from"./leaderboard-skeleton-Dq8ILokV.js";import{i as g,r as _}from"./register-report-mocks-VZYvRNvX.js";import{N as v,S as y,b,j as ae,w as oe}from"./report-metric-DHr5d9L1.js";import{t as se}from"./widget-state-CeqhaAs1.js";import{t as x}from"./src-BFVgsco2.js";import{a as ce,c as le,d as S,i as ue,l as de,n as fe,o as pe,r as C,s as me,u as he}from"./with-widget-canvas-CCj6JxN2.js";import{n as ge,t as _e}from"./register-stats-mocks-UXoHmAM3.js";import{n as ve,t as w}from"./force-stats-mock-state-CmacbUZF.js";var T,E,D,O,ye=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function k(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:m(e.link)??void 0,icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function be(e,r,i){let a=d(e.map(e=>e.value),r?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=r&&s!==void 0,ee=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...ae({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:v({href:e.href,hasChildren:ee,drillDown:i?{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:l(e.value,a),previousValue:s,previousShare:c?l(s,a):void 0,delta:c?u(e.value,s):void 0}})}function xe({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(h,{data:be(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function Se(){let{reportParams:e}=ee(),{comparisonRows:r,hasComparison:i,isLoading:s,isFetching:c,isError:l,refetch:te}=re({...e,max:10},{maxRows:10}),u=(0,a.useMemo)(()=>(r?.rows??[]).map(k),[r]),{drillDownItem:d,drillDown:f,resetDrillDown:p}=ne(),m=(0,a.useMemo)(()=>{let e=[],t=u;for(let n of d??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[u,d]);(0,a.useEffect)(()=>{!d?.length||s||c||l||m.length===d.length||(m.length?f(m.map(e=>e.label)):p())},[d,m,s,c,l,f,p]);let h=m.length?m[m.length-1]:null,g=h?h.children??[]:u,_=h?!!h.childrenHaveComparison:i,v=(0,a.useCallback)(e=>{f([...d??[],e.label])},[d,f]),y=(0,a.useCallback)(()=>{let e=m.slice(0,-1).map(e=>e.label);e.length?f(e):p()},[m,f,p]),b=m.length>1?m[m.length-2].label:null,ae=b??n(`All referrers`,`jetpack-premium-analytics-pkg`),x=b?t(n(`Back to %s`,`jetpack-premium-analytics-pkg`),b):n(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,j.jsxs)(`div`,{className:O.content,children:[m.length>0&&(0,j.jsx)(oe,{label:ae,ariaLabel:x,onClick:y}),(0,j.jsx)(se,{isLoading:s,isFetching:c,isError:u.length===0&&l,isEmpty:u.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:te}]},empty:{icon:o,description:n(`No referrers in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ie,{rows:10}),children:(0,j.jsx)(xe,{rows:g,withComparison:_,onDrillDown:v})})]})}function A({attributes:e={}}){return(0,j.jsx)(te,{attributes:e,children:(0,j.jsxs)(`div`,{className:O.root,children:[(0,j.jsx)(Se,{}),(0,j.jsx)(y,{children:(0,j.jsx)(b,{report:`referrers`})})]})})}var j,M,Ce=e((()=>{p(),x(),s(),r(),c(),ye(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,we=e((()=>{c(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Te=e((()=>{P=`jpa/referrers`,F=`Top referrers`,I=`Websites and search engines referring visitors to your site.`,L={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:f(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:f(!1,e)}})}function Ee({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:f(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),_(),_e(),ve(),le(),he(),ce(),fe(),Ce(),we(),Te(),U=i(),g(),ge(),W=`storybook/referrers`,G=ue(B,N),K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,S]},J={render:V,args:{withComparison:!0},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`loading`),()=>w(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`error`),()=>w(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/referrers`,`empty`),()=>w(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(Ee,{...e}),args:{...pe,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};