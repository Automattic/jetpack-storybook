import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{n as s,zt as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-cK9fwjLF.js";import{t as u,u as d}from"./build-module-CGOM1VGu.js";import{C as f,R as p,dt as m,er as h,ln as ee}from"./chart-tooltip-2oFiw6P7.js";import{t as g}from"./leaderboard-chart-C0DlQr44.js";import{H as te,M as _,R as v,b as ne,g as y,j as b,v as x,w as S}from"./report-metric-DjUmE-hC.js";import{t as re}from"./widget-state-5V0DcZeV.js";import{C,D as w,E as T,S as ie,T as ae,b as oe,t as se,w as ce,x as E}from"./src-tFanuavE.js";import{n as le,t as ue}from"./register-stats-mocks-BkhUX_Gb.js";import{n as de,t as D}from"./force-stats-mock-state-mxjQrAn7.js";var O,k,A,j,M,N,P,fe=e((()=>{O=`_labelIcon_1bc0q_1`,k=`_labelLink_1bc0q_9`,A=`_labelText_1bc0q_10`,j=`_placeholder_1bc0q_31`,M=`_root_1bc0q_39`,N=`_content_1bc0q_48`,P={labelIcon:O,labelLink:k,labelText:A,placeholder:j,root:M,content:N}}));function F(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:e.link??void 0,icon:e.icon,children:e.children?.map(F),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function pe(e,r,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=r&&c!==void 0,u=!!e.children?.length,m=!!e.href&&!u,h=(0,R.jsx)(S,{label:e.label,imageUrl:e.icon??void 0,imageAlt:``,imageFallback:`hidden`,imageClassName:P.labelIcon});return{id:`${s}-${e.href??e.label}`,label:m?(0,R.jsx)(d,{className:P.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:h}):(0,R.jsx)(`span`,{className:P.labelText,title:e.label,children:h}),currentValue:e.value,currentShare:e.value/a*100,previousValue:c,previousShare:l?f(c,o):void 0,delta:l?p(e.value,c):void 0,...u&&i&&{onClick:()=>i(e),ariaLabel:t(n(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}}})}function me({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,R.jsx)(g,{data:pe(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:z})}function I({max:e}){let{reportParams:r}=te(),{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:u,isError:d,refetch:f}=ee({...r,max:e},{maxRows:e}),p=(0,a.useMemo)(()=>(i?.rows??[]).map(F),[i]),{drillDownItem:m,drillDown:h,resetDrillDown:g}=l(),_=(0,a.useMemo)(()=>{let e=[],t=p;for(let n of m??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[p,m]);(0,a.useEffect)(()=>{!m?.length||s||u||d||_.length===m.length||(_.length?h(_.map(e=>e.label)):g())},[m,_,s,u,d,h,g]);let v=_.length?_[_.length-1]:null,y=v?v.children??[]:p,b=v?!!v.childrenHaveComparison:o,x=(0,a.useCallback)(e=>{h([...m??[],e.label])},[m,h]),S=(0,a.useCallback)(()=>{let e=_.slice(0,-1).map(e=>e.label);e.length?h(e):g()},[_,h,g]),C=_.length>1?_[_.length-2].label:null,w=C??n(`All referrers`,`jetpack-premium-analytics`),T=C?t(n(`Back to %s`,`jetpack-premium-analytics`),C):n(`View all referrers`,`jetpack-premium-analytics`);return(0,R.jsxs)(`div`,{className:P.content,children:[_.length>0&&(0,R.jsx)(ne,{label:w,ariaLabel:T,onClick:S}),(0,R.jsx)(re,{isLoading:s,isFetching:u,isError:p.length===0&&d,isEmpty:p.length===0,error:{description:n(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:c,description:n(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(me,{rows:y,withComparison:b,onDrillDown:x})})]})}function L({attributes:e={}}){let t=e?.max??10;return(0,R.jsx)(v,{attributes:e,children:(0,R.jsxs)(`div`,{className:P.root,children:[(0,R.jsx)(I,{max:t}),(0,R.jsx)(x,{children:(0,R.jsx)(y,{report:`referrers`})})]})})}var R,z,he=e((()=>{m(),se(),o(),r(),s(),u(),fe(),R=i(),z={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,ge=e((()=>{r(),s(),B={name:`jpa/referrers`,title:n(`Referrers`,`jetpack-premium-analytics`),help:{content:n(`The sources that sent the most visitors to your site, sorted by clicks.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:c,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(L,{attributes:{max:10,reportParams:h(e)}})}function H(e){return(0,U.jsx)(L,{attributes:{max:10,reportParams:h(!1,e)}})}function _e({withComparison:e,...t}){return(0,U.jsx)(C,{...t,widgetType:G,renderModule:W,renderComponent:L,attributes:{max:10,reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),b(),ue(),de(),ce(),T(),oe(),he(),ge(),U=i(),_(),le(),W=`storybook/referrers`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[E,w]},J={render:V,args:{withComparison:!0},decorators:[E,w]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[E,w],beforeEach:()=>(D(`stats/referrers`,`loading`),()=>D(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[E,w],beforeEach:()=>(D(`stats/referrers`,`error`),()=>D(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[E,w],beforeEach:()=>(D(`stats/referrers`,`empty`),()=>D(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(_e,{...e}),args:{...ie,withComparison:!0},argTypes:{...ae,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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