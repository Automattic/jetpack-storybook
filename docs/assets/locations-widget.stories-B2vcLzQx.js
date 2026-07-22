import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as ee}from"./hooks-DQvGqNOc.js";import{t as l}from"./geo-chart-B-Dfo3z3.js";import{R as u,t as d}from"./build-module-mSZ45C5S.js";import{S as te,t as f}from"./src-B3le4dug.js";import{$t as p,L as ne,R as re,dt as m,er as h,v as ie}from"./chart-tooltip-Dp0VEc09.js";import{t as ae}from"./leaderboard-chart-CTrCapqH.js";import{M as g,N as oe,U as se,b as ce,w as le,z as _}from"./report-metric-4C1kNKUT.js";import{t as ue}from"./widget-state-CGtL2PSn.js";import{C as de,S as v,T as fe,b as y,t as b,w as x,x as S}from"./src-B0pFHV8V.js";import{n as C,t as w}from"./src-Vm-o0sC9.js";import{n as T,t as E}from"./register-stats-mocks-Cwu701UE.js";import{n as D,t as O}from"./force-stats-mock-state-CvyO2fnM.js";var k,A,j,M,N,P,F,I,L,R,pe=e((()=>{k=`_root_erick_1`,A=`_backLink_erick_9`,j=`_content_erick_17`,M=`_bodyHeader_erick_25`,N=`_stateArea_erick_32`,P=`_chartArea_erick_38`,F=`_leaderboardPanel_erick_48`,I=`_leaderboard_erick_48`,L=`_geoChart_erick_64`,R={root:k,backLink:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function me(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function he({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:u,refetch:d}=p({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),te=i.isPlaceholderData||a.isPlaceholderData,f=(o?.rows??[]).map(me).filter(e=>e!==null);return{data:f,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:f.length===0&&u,isPlaceholderData:te,refetch:d}}var ge=e((()=>{m()}));function z(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function _e({max:e,geoGranularity:r}){let{reportParams:i}=se(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:d,resetDrillDown:f}=ee();(0,a.useEffect)(()=>{r===`city`&&f()},[f,r]);let p=r===`country`?c:void 0,m=r===`country`&&p?`region`:r,{data:h,hasComparison:g,isLoading:oe,isFetching:_,isError:de,isPlaceholderData:v,refetch:fe}=he({reportParams:i,max:e,geoMode:m,countryFilter:m===`region`?p?.code:void 0}),[y,b]=(0,a.useState)({geoMode:m,selectedCountry:p});(0,a.useEffect)(()=>{v||b({geoMode:m,selectedCountry:p})},[p,m,v]);let x=v?y.geoMode:m,S=v?y.selectedCountry:p,C=S?.code.toUpperCase(),w=x===`region`&&!!C&&!o.has(C),T=x===`region`&&!!S&&!w,E=T?S:void 0,D=x===`city`,O=(0,a.useMemo)(()=>{let e=new Map;return D?(h.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[h,D]),k=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!C&&w,r=!!C&&H.has(C);!n&&!r&&!t.includes(ve)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(C),s(e=>{if(e.has(C))return e;let t=new Set(e);return t.add(C),t})))},[C,w]),A=(0,a.useMemo)(()=>{let e=[n(x===`region`&&!T?`Location`:`Country`,`jetpack-premium-analytics`),n(`Views`,`jetpack-premium-analytics`)];if(E){let t=E.code.toUpperCase(),n=h.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:z(t),f:E.name},n]]}return D?[e,...O.map(([e,t])=>[{v:z(e),f:t.countryFull},t.value])]:[e,...h.map(e=>[e.label,e.value])]},[O,h,E,x,D,T]),j=(0,a.useMemo)(()=>{let e=Math.max(...h.map(e=>e.value),0),r=Math.max(...h.map(e=>e.previousValue??0),0);return h.map(i=>{let a=ie(i.countryCode),o=i.previousValue,s=i.countryCode;return{id:i.key,...le({label:i.label,media:{kind:`flag`,url:a??void 0,country:i.countryFull},action:x===`country`&&s?{kind:`drillDown`,onClick:()=>d({code:s,name:i.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics`),i.countryFull)}:{kind:`static`}}),currentValue:i.value,previousValue:o,currentShare:ne(i.value,e),previousShare:g&&o!==void 0?ne(o,r):void 0,delta:g&&o!==void 0?re(i.value,o):void 0}})},[h,x,g,d]),M=S?(0,V.jsx)(ce,{label:n(`All Locations`,`jetpack-premium-analytics`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics`),onClick:f,className:R.backLink}):null,N=M?(0,V.jsx)(u,{direction:`row`,align:`center`,className:R.bodyHeader,children:M}):null;return(0,V.jsxs)(`div`,{className:R.content,children:[N,(0,V.jsx)(`div`,{className:R.stateArea,children:(0,V.jsx)(ue,{isLoading:oe,isFetching:_,isError:de,isEmpty:h.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:fe}]},empty:{icon:te,description:n(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,V.jsxs)(`div`,{className:R.chartArea,children:[(0,V.jsx)(`div`,{className:R.leaderboardPanel,children:(0,V.jsx)(ae,{data:j,withOverlayLabel:!0,withComparison:g,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,V.jsx)(`div`,{className:R.geoChart,children:(0,V.jsx)(l,{data:A,resizeDebounceTime:100,region:w?S?.code??`world`:`world`,resolution:w?`provinces`:`countries`,onError:k})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(_,{attributes:e,children:(0,V.jsx)(`div`,{className:R.root,children:(0,V.jsx)(_e,{max:t,geoGranularity:n})})})}var V,ve,H,ye=e((()=>{b(),f(),o(),r(),d(),pe(),ge(),V=i(),ve=`Requested map does not exist`,H=new Set})),U,be=e((()=>{r(),c(),w(),U={name:`jpa/locations`,title:n(`Locations`,`jetpack-premium-analytics`),help:{content:n(`The countries, regions, and cities where your visitors came from, sorted by views.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:C,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}}));function xe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:h(e)}}function W(e){return(0,K.jsx)(B,{attributes:xe(e)})}function G(e){return(0,K.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:h(!1,e)}})}function Se(e){return(0,K.jsx)(B,{...e})}function Ce({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(de,{...n,widgetType:Te,renderModule:we,renderComponent:Se,attributes:xe({withComparison:e,geoGranularity:t})})}var K,we,Te,Ee,q,J,Y,X,Z,Q,$,De;e((()=>{m(),x(),y(),g(),E(),D(),ye(),be(),K=i(),oe(),T(),we=`storybook/locations`,Te={name:U.name,title:U.title,icon:U.icon,attributes:U.attributes,example:U.example,presentation:`framed`},Ee={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[S]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[S]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[S]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Ce,{...e}),args:{...v,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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