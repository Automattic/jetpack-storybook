import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,pa as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,r as ee,v as te}from"./hooks-BLqiQAo1.js";import{ft as ne,on as u,t as d}from"./src-CYsE7k2C.js";import{Ct as f,St as p,Tt as m}from"./helpers-CuvMQgtI.js";import"./rows-DAmD2BmE.js";import{r as h,t as re}from"./leaderboard-skeleton-CZ2MIKWT.js";import{n as g,r as _}from"./with-story-router-CQialOj3.js";import{n as v,r as y}from"./register-report-mocks-Cl7DkZ85.js";import{_ as ie,b as ae,i as oe,m as se,o as ce}from"./leaderboard-C8yRRYga.js";import{t as le}from"./widget-state-DuXZshQ9.js";import{a as ue}from"./src-bOc4dLeu.js";import{m as de,o as b}from"./report-metric-CdQxtLJ8.js";import{t as fe}from"./src-YSEsS-A6.js";import{a as pe,d as me,f as he,i as ge,n as _e,p as ve,r as x,u as ye}from"./with-widget-canvas-5StrgGnN.js";import{n as be,t as xe}from"./register-stats-mocks-Bw2cgAqZ.js";import{n as Se,t as S}from"./force-stats-mock-state-UC4Wf_On.js";var C,w,T,E,Ce=e((()=>{C=`_placeholder_1oate_1`,w=`_root_1oate_9`,T=`_content_1oate_18`,E={placeholder:C,root:w,content:T}}));function we(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function D(e){let t=ue(e.link);return{label:we(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(D),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function O(e,n,i){let a=f(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...oe({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:ce({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:n&&s!==void 0?p(s,a):void 0,delta:n&&s!==void 0?m(e.value,s):void 0}})}function Te({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(h,{data:O(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function k(){let{reportParams:e}=te(),{drillDownItem:n,drillDown:r,resetDrillDown:i}=ee(),{primary:o,comparisonRows:s,hasComparison:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ne({...e,max:10},{maxRows:10}),p=(0,a.useMemo)(()=>(s?.rows??[]).map(D),[s]),m=(0,a.useMemo)(()=>p.find(e=>e.label===n)??null,[p,n]),h=!!m?.children?.length,g=h?m.children??[]:p,_=h?!!m?.childrenHaveComparison:c;(0,a.useEffect)(()=>{n&&!h&&!l&&!u&&!d&&i()},[n,h,l,u,d,i]);let v=(0,a.useCallback)(e=>{r(e.label)},[r]),y=h?(0,j.jsx)(ie,{label:t(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:E.content,children:[y,(0,j.jsx)(le,{isLoading:l,isFetching:u,isError:p.length===0&&d,isEmpty:g.length===0,error:{description:t(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,j.jsx)(re,{rows:10}),children:(0,j.jsx)(Te,{rows:g,withComparison:_,onDrillDown:h?void 0:v})})]}),(0,j.jsxs)(se,{children:[(0,j.jsx)(ae,{report:`clicks`}),(0,j.jsx)(b,{exporter:de,status:{isLoading:l,isFetching:u,isError:o.isError},rowCount:p.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:E.root,children:(0,j.jsx)(k,{})})})}var j,M,Ee=e((()=>{d(),fe(),o(),n(),Ce(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,De=e((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Oe=e((()=>{P=`jpa/clicks`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:u(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:u(!1,e)}})}function ke({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:u(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),v(),xe(),Se(),he(),g(),pe(),_e(),Ee(),De(),Oe(),U=i(),y(),be(),W=`storybook/clicks`,G=ge(B,N),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[x,_]},J={render:V,args:{withComparison:!0},decorators:[x,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(S(`stats/clicks`,`loading`),()=>S(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(S(`stats/clicks`,`error`),()=>S(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(S(`stats/clicks`,`empty`),()=>S(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...ye,withComparison:!0},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderClicksWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'loading');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/clicks`\nbefore `setReportMockState` can intercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'error');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderClicksOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/clicks', 'empty');
    return () => forceStatsMockState('stats/clicks', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ClicksDashboardStory {...args} />,
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