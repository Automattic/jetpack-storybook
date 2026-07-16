import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{Ji as s,n as c}from"./build-module-C6Ow06jV.js";import{r as l}from"./hooks-BCwpDVcN.js";import{t as u}from"./geo-chart-DkHObVKW.js";import{R as ee,t as d}from"./build-module-JNPAD9ni.js";import{S as f,t as p}from"./src-Bf8IXmOS.js";import{L as te,S as ne,Yn as m,Yt as h,_ as re,ut as g}from"./chart-tooltip-Bwx4eCVq.js";import{t as ie}from"./leaderboard-chart-Cl5ZDKsB.js";import{C as _,N as ae,S as oe,f as se,g as ce,k as le}from"./report-metric-B72VApPh.js";import{t as ue}from"./widget-state-Dmr7irPM.js";import{S as de,b as v,t as fe,x as y,y as b}from"./src-6_I1H9ps.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as C,t as w}from"./register-stats-mocks-BO81tq56.js";import{n as T,t as E}from"./force-stats-mock-state-Dz_5q8P4.js";var D,O,k,A,j,M,N,P,F,I,L,R,pe=e((()=>{D=`_root_13yt5_1`,O=`_backLink_13yt5_9`,k=`_content_13yt5_17`,A=`_bodyHeader_13yt5_25`,j=`_stateArea_13yt5_32`,M=`_chartArea_13yt5_38`,N=`_leaderboardPanel_13yt5_48`,P=`_leaderboard_13yt5_48`,F=`_leaderboardLabel_13yt5_64`,I=`_geoChart_13yt5_81`,L=`_leaderboardImage_13yt5_117`,R={root:D,backLink:O,content:k,bodyHeader:A,stateArea:j,chartArea:M,leaderboardPanel:N,leaderboard:P,leaderboardLabel:F,geoChart:I,leaderboardImage:L}}));function me(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function he({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:ee,refetch:d}=h({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),f=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(me).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:p.length===0&&ee,isPlaceholderData:f,refetch:d}}var ge=e((()=>{g()}));function z(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function _e({max:e,geoGranularity:n}){let{reportParams:i}=ae(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:d,resetDrillDown:p}=l();(0,a.useEffect)(()=>{n===`city`&&p()},[p,n]);let m=n===`country`?c:void 0,h=n===`country`&&m?`region`:n,{data:g,hasComparison:_,isLoading:oe,isFetching:le,isError:de,isPlaceholderData:v,refetch:fe}=he({reportParams:i,max:e,geoMode:h,countryFilter:h===`region`?m?.code:void 0}),[y,b]=(0,a.useState)({geoMode:h,selectedCountry:m});(0,a.useEffect)(()=>{v||b({geoMode:h,selectedCountry:m})},[m,h,v]);let x=v?y.geoMode:h,S=v?y.selectedCountry:m,C=S?.code.toUpperCase(),w=x===`region`&&!!C&&!o.has(C),T=x===`region`&&!!S&&!w,E=T?S:void 0,D=x===`city`,O=(0,a.useMemo)(()=>{let e=new Map;return D?(g.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[g,D]),k=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!C&&w,r=!!C&&H.has(C);!n&&!r&&!t.includes(ve)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(C),s(e=>{if(e.has(C))return e;let t=new Set(e);return t.add(C),t})))},[C,w]),A=(0,a.useMemo)(()=>{let e=[t(x===`region`&&!T?`Location`:`Country`,`jetpack-premium-analytics`),t(`Views`,`jetpack-premium-analytics`)];if(E){let t=E.code.toUpperCase(),n=g.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:z(t),f:E.name},n]]}return D?[e,...O.map(([e,t])=>[{v:z(e),f:t.countryFull},t.value])]:[e,...g.map(e=>[e.label,e.value])]},[O,g,E,x,D,T]),j=(0,a.useMemo)(()=>{let e=Math.max(...g.map(e=>e.value),0),n=Math.max(...g.map(e=>e.previousValue??0),0);return g.map(i=>{let a=re(i.countryCode),o=i.previousValue;return{id:i.key,label:(0,V.jsx)(`div`,{className:R.leaderboardLabel,children:(0,V.jsx)(ce,{label:i.label,imageUrl:a??void 0,imageAlt:r(t(`Flag of %s`,`jetpack-premium-analytics`),i.countryFull),imageClassName:R.leaderboardImage})}),currentValue:i.value,previousValue:o,currentShare:e>0?i.value/e*100:0,previousShare:_&&o!==void 0?ne(o,n):void 0,delta:_&&o!==void 0?te(i.value,o):void 0,...x===`country`&&i.countryCode&&{onClick:()=>d({code:i.countryCode,name:i.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics`),i.countryFull)}}})},[g,x,_,d]),M=S?(0,V.jsx)(se,{label:t(`All Locations`,`jetpack-premium-analytics`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics`),onClick:p,className:R.backLink}):null,N=M?(0,V.jsx)(ee,{direction:`row`,align:`center`,className:R.bodyHeader,children:M}):null;return(0,V.jsxs)(`div`,{className:R.content,children:[N,(0,V.jsx)(`div`,{className:R.stateArea,children:(0,V.jsx)(ue,{isLoading:oe,isFetching:le,isError:de,isEmpty:g.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:fe}]},empty:{icon:f,description:t(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,V.jsxs)(`div`,{className:R.chartArea,children:[(0,V.jsx)(`div`,{className:R.leaderboardPanel,children:(0,V.jsx)(ie,{data:j,withOverlayLabel:!0,withComparison:_,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,V.jsx)(`div`,{className:R.geoChart,children:(0,V.jsx)(u,{data:A,resizeDebounceTime:100,region:w?S?.code??`world`:`world`,resolution:w?`provinces`:`countries`,onError:k})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(le,{attributes:e,children:(0,V.jsx)(`div`,{className:R.root,children:(0,V.jsx)(_e,{max:t,geoGranularity:n})})})}var V,ve,H,ye=e((()=>{fe(),p(),o(),n(),d(),pe(),ge(),V=i(),ve=`Requested map does not exist`,H=new Set})),U,be=e((()=>{n(),c(),U={name:`jpa/locations`,title:t(`Locations`,`jetpack-premium-analytics`),help:{content:t(`Visitors’ viewing location by countries, regions and cities.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:t(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}}));function xe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:m(e)}}function W(e){return(0,K.jsx)(B,{attributes:xe(e)})}function G(e){return(0,K.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:m(!1,e)}})}function Se(e){return(0,K.jsx)(B,{...e})}function Ce({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(v,{...n,widgetType:Te,renderModule:we,renderComponent:Se,attributes:xe({withComparison:e,geoGranularity:t})})}var K,we,Te,Ee,q,J,Y,X,Z,Q,$,De;e((()=>{g(),y(),x(),oe(),w(),T(),ye(),be(),K=i(),_(),C(),we=`storybook/locations`,Te={name:U.name,title:U.title,icon:U.icon,attributes:U.attributes,example:U.example,presentation:`framed`},Ee={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[S]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[S]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[S]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(E(`stats/location-views`,`loading`),()=>E(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(E(`stats/location-views`,`error`),()=>E(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(E(`stats/location-views`,`empty`),()=>E(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Ce,{...e}),args:{...b,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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
      options: ['country', 'city'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...$.parameters?.docs?.source}}},De=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,q as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,J as WithComparison,De as __namedExportsOrder,Ee as default};