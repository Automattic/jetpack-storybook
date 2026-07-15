import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{To as s,n as c}from"./build-module-C6Ow06jV.js";import{r as l}from"./hooks-C47J0OGj.js";import{t as u,u as d}from"./build-module-DuNcCzez.js";import{L as f,an as p,l as m,qn as h,ut as g}from"./chart-tooltip-Dc8Tt97r.js";import{t as _}from"./leaderboard-chart-3hwIbsvS.js";import{C as v,N as ee,S as y,f as te,g as b,k as x}from"./report-metric-B706NzWO.js";import{t as ne}from"./widget-state-Cf3sSCrO.js";import{S,b as C,t as w,x as T,y as E}from"./src-CA3GnO6U.js";import{n as re,r as D}from"./with-widget-canvas-Dz43KNHY.js";import{n as ie,t as ae}from"./register-stats-mocks-B06JMeah.js";import{n as oe,t as O}from"./force-stats-mock-state-bHZEaAPv.js";var k,A,j,M,N,P,F,se=e((()=>{k=`_labelIcon_m6d0s_1`,A=`_labelLink_m6d0s_9`,j=`_labelText_m6d0s_10`,M=`_placeholder_m6d0s_31`,N=`_root_m6d0s_39`,P=`_content_m6d0s_48`,F={labelIcon:k,labelLink:A,labelText:j,placeholder:M,root:N,content:P}}));function I(e){return{label:e.label,value:e.views,previousValue:e.previousValue,href:e.link??void 0,icon:e.icon,children:e.children?.map(I),...e.childrenHaveComparison?{childrenHaveComparison:!0}:{}}}function ce(e,n,i){let a=Math.max(...e.map(e=>e.value),1),o=Math.max(...e.map(e=>e.previousValue??0),1);return e.map((e,s)=>{let c=e.previousValue,l=n&&c!==void 0,u=!!e.children?.length,p=!!e.href&&!u,h=(0,R.jsx)(b,{label:e.label,imageUrl:e.icon??void 0,imageAlt:``,imageFallback:`hidden`,imageClassName:F.labelIcon});return{id:`${s}-${e.href??e.label}`,label:p?(0,R.jsx)(d,{className:F.labelLink,href:e.href,variant:`unstyled`,openInNewTab:!0,title:e.label,children:h}):(0,R.jsx)(`span`,{className:F.labelText,title:e.label,children:h}),currentValue:e.value,currentShare:e.value/a*100,previousValue:c,previousShare:l?m(c,o):void 0,delta:l?f(e.value,c):void 0,...u&&i&&{onClick:()=>i(e),ariaLabel:r(t(`View referrers for %s`,`jetpack-premium-analytics`),e.label)}}})}function le({rows:e=[],withComparison:t=!1,onDrillDown:n}){return(0,R.jsx)(_,{data:ce(e,t,n),withComparison:t,withOverlayLabel:!0,showLegend:!1,dataFormat:z})}function ue({max:e}){let{reportParams:n}=ee(),{comparisonRows:i,hasComparison:o,isLoading:c,isFetching:u,isError:d,refetch:f}=p({...n,max:e},{maxRows:e}),m=(0,a.useMemo)(()=>(i?.rows??[]).map(I),[i]),{drillDownItem:h,drillDown:g,resetDrillDown:_}=l(),v=(0,a.useMemo)(()=>{let e=[],t=m;for(let n of h??[]){let r=t.find(e=>e.label===n);if(!r?.children?.length)break;e.push(r),t=r.children}return e},[m,h]);(0,a.useEffect)(()=>{!h?.length||c||u||d||v.length===h.length||(v.length?g(v.map(e=>e.label)):_())},[h,v,c,u,d,g,_]);let y=v.length?v[v.length-1]:null,b=y?y.children??[]:m,x=y?!!y.childrenHaveComparison:o,S=(0,a.useCallback)(e=>{g([...h??[],e.label])},[h,g]),C=(0,a.useCallback)(()=>{let e=v.slice(0,-1).map(e=>e.label);e.length?g(e):_()},[v,g,_]),w=v.length>1?v[v.length-2].label:null,T=w??t(`All referrers`,`jetpack-premium-analytics`),E=w?r(t(`Back to %s`,`jetpack-premium-analytics`),w):t(`View all referrers`,`jetpack-premium-analytics`);return(0,R.jsxs)(`div`,{className:F.content,children:[v.length>0&&(0,R.jsx)(te,{label:T,ariaLabel:E,onClick:C}),(0,R.jsx)(ne,{isLoading:c,isFetching:u,isError:m.length===0&&d,isEmpty:m.length===0,error:{description:t(`We couldn't load referrers. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:s,description:t(`No referrers in this period.`,`jetpack-premium-analytics`)},children:(0,R.jsx)(le,{rows:b,withComparison:x,onDrillDown:S})})]})}function L({attributes:e={}}){let t=e?.max??10;return(0,R.jsx)(x,{attributes:e,children:(0,R.jsx)(`div`,{className:F.root,children:(0,R.jsx)(ue,{max:t})})})}var R,z,de=e((()=>{g(),w(),o(),n(),c(),u(),se(),R=i(),z={type:`number`,options:{useMultipliers:!0,decimals:0}}})),B,fe=e((()=>{n(),c(),B={name:`jpa/referrers`,title:t(`Referrers`,`jetpack-premium-analytics`),help:{content:t(`Websites referring visitors sorted by most clicked. Learn about where your audience comes from.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function V({withComparison:e}){return(0,U.jsx)(L,{attributes:{max:10,reportParams:h(e)}})}function H(e){return(0,U.jsx)(L,{attributes:{max:10,reportParams:h(!1,e)}})}function pe({withComparison:e,...t}){return(0,U.jsx)(C,{...t,widgetType:G,renderModule:W,renderComponent:L,attributes:{max:10,reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),y(),ae(),oe(),T(),re(),de(),fe(),U=i(),v(),ie(),W=`storybook/referrers`,G={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Referrers`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Referrers" widget. Shows the websites and search engines referring visitors to the site as a ranked leaderboard, using the global dashboard date range. Referrer groups drill down into their sources and domains; URL-backed leaf rows (no children) render as outbound links that open in a new tab, while rows that drill down remain buttons.`}}}},q={render:V,args:{withComparison:!1},decorators:[D]},J={render:V,args:{withComparison:!0},decorators:[D]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(O(`stats/referrers`,`loading`),()=>O(`stats/referrers`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(O(`stats/referrers`,`error`),()=>O(`stats/referrers`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(O(`stats/referrers`,`empty`),()=>O(`stats/referrers`,null))},Q={render:e=>(0,U.jsx)(pe,{...e}),args:{...E,withComparison:!0},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderReferrersWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'loading');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"First load: the fetch is in flight, so the widget shows its loading state. The\nmock is forced to never resolve for the duration of this story.\n\nForced through `forceStatsMockState`: `stats/referrers` is answered by the\nlegacy stats mocks before the shared `setReportMockState` override can\nintercept it.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/referrers', 'error');
    return () => forceStatsMockState('stats/referrers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderReferrersOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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