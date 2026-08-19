import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Qi as s,n as c}from"./build-module-CDRs4YxF.js";import{ln as l,t as u}from"./src-BA4kSjBt.js";import{E as d,J as f,O as ee,P as p,at as te,q as m,tt as h,w as g}from"./report-metric-BJXFm3aW.js";import{t as ne}from"./geo-chart-DbInNXAr.js";import{t as re,w as ie}from"./src-BKLK-O8P.js";import{r as ae}from"./hooks-Cynwb_KN.js";import{B as oe,Cr as _,Nt as v,at as se,c as y,ct as ce,l as le,ot as ue,xn as b}from"./chart-tooltip-NxBvBReY.js";import{r as de}from"./leaderboard-skeleton-C6zwVn4I.js";import{t as fe}from"./widget-state-BwxLrgsq.js";import{C as pe,D as x,E as S,O as C,S as w,T,b as E,k as D,t as me,w as he,x as O}from"./src-CGQy9yxW.js";import{n as k,t as ge}from"./register-stats-mocks-C-NWTY1b.js";import{n as _e,t as A}from"./force-stats-mock-state-BTO-M4pg.js";var j,M,N,P,F,I,ve,ye,be,L,xe=e((()=>{j=`_root_erick_1`,M=`_backLink_erick_9`,N=`_content_erick_17`,P=`_bodyHeader_erick_25`,F=`_stateArea_erick_32`,I=`_chartArea_erick_38`,ve=`_leaderboardPanel_erick_48`,ye=`_leaderboard_erick_48`,be=`_geoChart_erick_64`,L={root:j,backLink:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:ve,leaderboard:ye,geoChart:be}}));function Se(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Ce({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:d,refetch:f}=b({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),ee=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(Se).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:p.length===0&&d,isPlaceholderData:ee,refetch:f}}var we=e((()=>{v()}));function Te(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function Ee({max:e,geoGranularity:r}){let{reportParams:i}=te(),[o,s]=(0,a.useState)(()=>new Set(B)),{drillDownItem:c,drillDown:u,resetDrillDown:d}=ae();(0,a.useEffect)(()=>{r!==`country`&&d()},[d,r]);let f=r===`country`?c:void 0,m=r===`country`&&f?`region`:r,{data:h,hasComparison:g,isLoading:re,isFetching:_,isError:v,isPlaceholderData:y,refetch:le}=Ce({reportParams:i,max:e,geoMode:m,countryFilter:f?.code}),[b,pe]=(0,a.useState)({geoMode:m,selectedCountry:f});(0,a.useEffect)(()=>{y||pe({geoMode:m,selectedCountry:f})},[f,m,y]);let x=y?b.geoMode:m,S=y?b.selectedCountry:f,C=S?.code.toUpperCase(),w=x===`region`&&!!C&&!o.has(C),T=x===`region`&&S&&!w?S:void 0,E=x===`city`||x===`region`&&!S,D=(0,a.useMemo)(()=>{let e=new Map;return E?(h.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[h,E]),me=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!C&&w,r=!!C&&B.has(C);!n&&!r&&!t.includes(De)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(B.add(C),s(e=>{if(e.has(C))return e;let t=new Set(e);return t.add(C),t})))},[C,w]),he=(0,a.useMemo)(()=>{let e=[n(w?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(T){let t=T.code.toUpperCase(),n=h.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:Te(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:Te(e),f:t.countryFull},t.value])]:[e,...h.map(e=>[e.label,e.value])]},[D,h,T,E,w]),O=(0,a.useMemo)(()=>{let e=ue(h.map(e=>e.value),g?h.map(e=>e.previousValue):[]);return h.map(r=>{let i=oe(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...p({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:x===`country`&&o?{kind:`drillDown`,onClick:()=>u({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:se(r.value,e),previousShare:g&&a!==void 0?se(a,e):void 0,delta:g&&a!==void 0?ce(r.value,a):void 0}})},[h,x,g,u]),k=S?(0,z.jsx)(ee,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:d,className:L.backLink}):null,ge=k?(0,z.jsx)(l,{direction:`row`,align:`center`,className:L.bodyHeader,children:k}):null;return(0,z.jsxs)(`div`,{className:L.content,children:[ge,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(fe,{isLoading:re,isFetching:_,isError:v,isEmpty:h.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},empty:{icon:ie,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(`div`,{className:L.leaderboardPanel,children:(0,z.jsx)(de,{data:O,withOverlayLabel:!0,withComparison:g,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(ne,{data:he,resizeDebounceTime:100,region:w?S?.code??`world`:`world`,resolution:w?`provinces`:`countries`,onError:me})})]})})})]})}function R({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??H,r=Object.prototype.hasOwnProperty.call(V,n)?n:H;return(0,z.jsx)(h,{attributes:e,children:(0,z.jsxs)(`div`,{className:L.root,children:[(0,z.jsx)(Ee,{max:t,geoGranularity:r}),(0,z.jsx)(d,{children:(0,z.jsx)(g,{report:`locations`,section:V[r]})})]})})}var z,De,B,V,H,Oe=e((()=>{me(),re(),o(),r(),u(),xe(),we(),z=i(),De=`Requested map does not exist`,B=new Set,V={country:`countries`,region:`regions`,city:`cities`},H=`country`})),ke,Ae=e((()=>{r(),c(),y(),ke={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:le,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),je,Me,Ne,Pe,Fe,Ie,Le,Re=e((()=>{je=`jpa/locations`,Me=`Top locations`,Ne=`Where your visitors are viewing from — by country, region, or city.`,Pe={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Fe=`stats`,Ie=`framed`,Le={name:je,title:Me,description:Ne,help:Pe,category:Fe,presentation:Ie}}));function ze({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:_(e)}}function U(e){return(0,G.jsx)(R,{attributes:ze(e)})}function W(e){return(0,G.jsx)(R,{attributes:{geoGranularity:`country`,max:10,reportParams:_(!1,e)}})}function Be(e){return(0,G.jsx)(R,{...e})}function Ve({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(T,{...n,widgetType:Ue,renderModule:He,renderComponent:Be,attributes:ze({withComparison:e,geoGranularity:t})})}var G,He,Ue,We,K,q,J,Y,X,Z,Q,$,Ge;e((()=>{v(),S(),pe(),C(),E(),m(),ge(),_e(),Oe(),Ae(),Re(),G=i(),f(),k(),He=`storybook/locations`,Ue=w(Le,ke),We={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,D]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,D]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[O,D]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,D]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[O,D],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[O,D],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[O,D],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Ve,{...e}),args:{...he,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'region'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'empty');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral location
glyph and the "stats will appear here" copy).`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <LocationsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 1,
    withComparison: true,
    geoGranularity: 'country'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    },
    geoGranularity: {
      control: 'radio',
      options: ['country', 'region', 'city'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...$.parameters?.docs?.source}}},Ge=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Ge as __namedExportsOrder,We as default};