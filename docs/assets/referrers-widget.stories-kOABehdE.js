import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ao as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,r as ee,v as te}from"./hooks-CoUkEpLe.js";import{$t as u,t as d,ut as ne}from"./src-CNr7Vz18.js";import{Dt as f,Et as p,kt as m}from"./helpers-DsLddrcW.js";import"./constants-B1kGztHF.js";import{r as h,t as re}from"./leaderboard-skeleton-DYzIvhni.js";import{i as g,r as _}from"./register-report-mocks-Bu5BhXrU.js";import{N as v,S as y,j as b,v as x,w as ie}from"./report-metric-CQTkHkU7.js";import{a as S}from"./src-C557dOkr.js";import{t as ae}from"./widget-state-CsD67qiG.js";import{t as oe}from"./src-DW9UFJqJ.js";import{a as se,d as ce,f as le,h as C,i as ue,m as de,n as fe,p as pe,r as w,u as me}from"./with-widget-canvas-CVG5Pk5E.js";import{n as he,t as ge}from"./register-stats-mocks-DQRKD_-4.js";import{n as _e,t as T}from"./force-stats-mock-state-CIRQbR0B.js";var E,D,O,k,ve=e((()=>{E=`_placeholder_1oate_1`,D=`_root_1oate_9`,O=`_content_1oate_18`,k={placeholder:E,root:D,content:O}}));function A(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:S(e.link)??void 0,icon:e.icon,children:e.children?.map(A),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ye(e,n,i){let a=f(e.map(e=>e.value),n?e.map(e=>e.previousValue):[]);return e.map((e,o)=>{let s=e.previousValue,c=n&&s!==void 0,l=!!e.children?.length;return{id:`${o}-${e.href??e.label}`,...b({label:e.label,media:{kind:`favicon`,url:e.icon??void 0},action:v({href:e.href,hasChildren:l,drillDown:i?{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics-pkg`),e.label)}:void 0})}),currentValue:e.value,currentShare:p(e.value,a),previousValue:s,previousShare:c?p(s,a):void 0,delta:c?m(e.value,s):void 0}})}function be({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,M.jsx)(h,{data:ye(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:N})}function xe(){let{reportParams:e}=te(),{comparisonRows:n,hasComparison:i,isLoading:a,isFetching:s,isError:c,refetch:l}=ne({...e,max:10},{maxRows:10}),u=(0,o.useMemo)(()=>(n?.rows??[]).map(A),[n]),{drillDownItem:d,drillDown:f,resetDrillDown:p}=ee(),m=(0,o.useMemo)(()=>{let e=[],t=u;for(let n of d??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[u,d]);(0,o.useEffect)(()=>{!d?.length||a||s||c||m.length===d.length||(m.length?f(m.map(e=>e.label)):p())},[d,m,a,s,c,f,p]);let h=m.length?m[m.length-1]:null,g=h?h.children??[]:u,_=h?!!h.childrenHaveComparison:i,v=(0,o.useCallback)(e=>{f([...d??[],e.label])},[d,f]),y=(0,o.useCallback)(()=>{let e=m.slice(0,-1).map(e=>e.label);e.length?f(e):p()},[m,f,p]),b=m.length>1?m[m.length-2].label:null,x=b??t(`All referrers`,`jetpack-premium-analytics-pkg`),S=b?r(t(`Back to %s`,`jetpack-premium-analytics-pkg`),b):t(`View all referrers`,`jetpack-premium-analytics-pkg`);return(0,M.jsxs)(`div`,{className:k.content,children:[m.length>0&&(0,M.jsx)(ie,{label:x,ariaLabel:S,onClick:y}),(0,M.jsx)(ae,{isLoading:a,isFetching:s,isError:u.length===0&&c,isEmpty:u.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,M.jsx)(re,{rows:10}),children:(0,M.jsx)(be,{rows:g,withComparison:_,onDrillDown:v})})]})}function j({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsxs)(`div`,{className:k.root,children:[(0,M.jsx)(xe,{}),(0,M.jsx)(y,{children:(0,M.jsx)(x,{report:`referrers`})})]})})}var M,N,Se=e((()=>{d(),oe(),s(),n(),ve(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Ce=e((()=>{c(),P={icon:a,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,we=e((()=>{F=`jpa/referrers`,I=`Top referrers`,L=`Websites and search engines referring visitors to your site.`,R={content:`The sources that sent the most visitors to your site, sorted by clicks.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(j,{attributes:{reportParams:u(e)}})}function U(e){return(0,W.jsx)(j,{attributes:{reportParams:u(!1,e)}})}function Te({withComparison:e,...t}){return(0,W.jsx)(ce,{...t,widgetType:K,renderModule:G,renderComponent:j,attributes:{reportParams:u(e)}})}var W,G,K,q,J,Y,X,Z,Q,$,Ee;e((()=>{d(),_(),ge(),_e(),le(),de(),se(),fe(),Se(),Ce(),we(),W=i(),g(),he(),G=`storybook/referrers`,K=ue(V,P),q={title:`Packages/Premium Analytics/Widgets/Referrers`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},J={render:H,args:{withComparison:!1},decorators:[w,C]},Y={render:H,args:{withComparison:!0},decorators:[w,C]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`loading`),()=>T(`stats/referrers`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`error`),()=>T(`stats/referrers`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/referrers`,`empty`),()=>T(`stats/referrers`,null))},$={render:e=>(0,W.jsx)(Te,{...e}),args:{...me,withComparison:!0},argTypes:{...pe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nUses `forceStatsMockState`: the legacy stats mocks answer `stats/referrers`\nbefore `setReportMockState` can intercept it.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ee=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,Ee as __namedExportsOrder,q as default};