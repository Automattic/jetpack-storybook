import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,pa as s,t as c}from"./build-module-DNhkEVJn.js";import{Ct as ee,Mn as l,t as u}from"./src-DaK69sZi.js";import{_ as d,en as f,o as te,rn as p,tn as m,x as h}from"./charts-provider-NzRWn2Ym.js";import{a as g}from"./src-CHbA2cqj.js";import"./rows-DAmD2BmE.js";import{r as _,t as ne}from"./leaderboard-skeleton-CW6B9hAw.js";import{n as v,r as y}from"./register-report-mocks-VJFbswj6.js";import{t as re}from"./widget-state-B9pWNd0S.js";import{n as b,r as x}from"./with-story-router-Beljd9ki.js";import{g as ie,i as ae,o as oe,p as se,y as ce}from"./leaderboard-D9cqX8_-.js";import{n as le,u as ue}from"./components-DRmKY8W7.js";import{t as S}from"./src-MCPGnmPw.js";import{a as de,g as fe,h as pe,i as me,m as he,n as ge,p as _e,r as C}from"./with-widget-canvas-CkfUJIiV.js";import{n as ve,t as ye}from"./register-stats-mocks-CpPiB2T6.js";import{n as be,t as w}from"./force-stats-mock-state-DNEJDUTU.js";var T,E,D,O,xe=e((()=>{T=`_placeholder_1oate_1`,E=`_root_1oate_9`,D=`_content_1oate_18`,O={placeholder:T,root:E,content:D}}));function Se(e){return typeof e.label==`string`&&e.label?e.label:e.link??``}function k(e){let t=g(e.link);return{label:Se(e),value:e.views,previousValue:e.previousValue,...t?{href:t}:{},icon:e.icon,children:e.children?.map(k),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function Ce(e,n,i){let a=m(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...ae({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:oe({href:e.href,hasChildren:c,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View clicked links for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:f(e.value,a),previousValue:s,previousShare:n&&s!==void 0?f(s,a):void 0,delta:n&&s!==void 0?p(e.value,s):void 0}})}function we({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,j.jsx)(_,{data:Ce(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:M})}function Te(){let{reportParams:e}=h(),{drillDownItem:n,drillDown:r,resetDrillDown:i}=te(),{primary:o,comparisonRows:s,hasComparison:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ee({...e,max:10},{maxRows:10}),p=(0,a.useMemo)(()=>(s?.rows??[]).map(k),[s]),m=(0,a.useMemo)(()=>p.find(e=>e.label===n)??null,[p,n]),g=!!m?.children?.length,_=g?m.children??[]:p,v=g?!!m?.childrenHaveComparison:c;(0,a.useEffect)(()=>{n&&!g&&!l&&!u&&!d&&i()},[n,g,l,u,d,i]);let y=(0,a.useCallback)(e=>{r(e.label)},[r]),b=g?(0,j.jsx)(ie,{label:t(`All clicks`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all clicks`,`jetpack-premium-analytics-pkg`),onClick:i}):null;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:O.content,children:[b,(0,j.jsx)(re,{isLoading:l,isFetching:u,isError:p.length===0&&d,isEmpty:_.length===0,error:{description:t(`We couldn't load clicks. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,j.jsx)(ne,{rows:10}),children:(0,j.jsx)(we,{rows:_,withComparison:v,onDrillDown:g?void 0:y})})]}),(0,j.jsxs)(se,{children:[(0,j.jsx)(ce,{report:`clicks`}),(0,j.jsx)(le,{exporter:ue,status:{isLoading:l,isFetching:u,isError:o.isError},rowCount:p.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(d,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Te,{})})})}var j,M,Ee=e((()=>{u(),S(),o(),n(),xe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,De=e((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Oe=e((()=>{P=`jpa/clicks`,F=`Top links clicked`,I=`Most clicked external links on your site.`,L={content:`The external links your visitors clicked most often, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(A,{attributes:{reportParams:l(e)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:l(!1,e)}})}function ke({withComparison:e,...t}){return(0,U.jsx)(he,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:l(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),v(),ye(),be(),pe(),b(),de(),ge(),Ee(),De(),Oe(),U=i(),y(),ve(),W=`storybook/clicks`,G=me(B,N),K={title:`Packages/Premium Analytics/Widgets/Clicks`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Clicks" widget. Shows the most-clicked external domains as a ranked leaderboard, using the global dashboard date range. Top-level rows drill down into clicked destination URLs when available.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,x]},J={render:V,args:{withComparison:!0},decorators:[C,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/clicks`,`loading`),()=>w(`stats/clicks`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/clicks`,`error`),()=>w(`stats/clicks`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/clicks`,`empty`),()=>w(`stats/clicks`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{..._e,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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