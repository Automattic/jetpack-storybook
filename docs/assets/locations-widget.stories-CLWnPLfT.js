import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{Qi as c,n as l}from"./build-module-CDRs4YxF.js";import{ln as u,t as d}from"./src-BBn93Agk.js";import{$ as f,E as ee,G as p,K as m,M as te,S as ne,rt as re,w as ie}from"./report-metric-BRpjNMrs.js";import{t as ae}from"./geo-chart-Z0fV_LSR.js";import{t as oe}from"./types-BRp4aAtL.js";import{t as h,w as se}from"./src-BKLK-O8P.js";import{G as g,qt as _,t as v}from"./src-Lp3ZIoIq.js";import{n as y,t as b}from"./src-DE8Ki5qG.js";import{r as ce}from"./hooks-4ckUfM6_.js";import"./constants-B1kGztHF.js";import{R as le,c as x,it as ue,l as de,ot as fe,rt as pe}from"./chart-tooltip-DCxwmuhC.js";import{r as me}from"./leaderboard-skeleton-duz6EoTb.js";import{t as he}from"./widget-state-DNAyBTFz.js";import{C as ge,D as _e,E as S,O as ve,S as ye,T as be,b as xe,k as C,t as Se,w as Ce,x as w}from"./src-Bu8E2mr6.js";import{n as we,t as Te}from"./register-stats-mocks-BjoVZ7pZ.js";import{n as Ee,t as T}from"./force-stats-mock-state-D35EpIHt.js";var E,D,O,k,A,j,M,N,P,F,De=e((()=>{E=`_root_erick_1`,D=`_backLink_erick_9`,O=`_content_erick_17`,k=`_bodyHeader_erick_25`,A=`_stateArea_erick_32`,j=`_chartArea_erick_38`,M=`_leaderboardPanel_erick_48`,N=`_leaderboard_erick_48`,P=`_geoChart_erick_64`,F={root:E,backLink:D,content:O,bodyHeader:k,stateArea:A,chartArea:j,leaderboardPanel:M,leaderboard:N,geoChart:P}}));function Oe(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ke({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=g({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(Oe).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var Ae=e((()=>{v()}));function I(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function je(e){let n=e.locations.slice(0,Pe),i=n.map(e=>`${e.label}: ${y(e.value)}`),a=e.locations.length-n.length;return a>0&&i.push(t(r(`…and %d more location`,`…and %d more locations`,a,`jetpack-premium-analytics-pkg`),a)),i.join(`<br />`)}function Me({geoGranularity:e}){let{reportParams:r}=re(),[i,a]=(0,o.useState)(()=>new Set(z)),{drillDownItem:s,drillDown:c,resetDrillDown:l}=ce();(0,o.useEffect)(()=>{e!==`country`&&l()},[l,e]);let d=e===`country`?s:void 0,f=e===`country`&&d?`region`:e,{data:p,hasComparison:m,isLoading:ne,isFetching:ie,isError:h,refetch:g}=ke({reportParams:r,max:10,geoMode:f,countryFilter:d?.code}),_=d?.code.toUpperCase(),v=f===`region`&&!!_&&!i.has(_),y=f===`region`&&d&&!v?d:void 0,b=f===`city`||f===`region`&&!d,x=(0,o.useMemo)(()=>{let e=new Map;return b?(p.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value,locations:[...r?.locations??[],t]})}),Array.from(e.entries())):[]},[p,b]),de=(0,o.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!_&&v,r=!!_&&z.has(_);!n&&!r&&!t.includes(Ne)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(z.add(_),a(e=>{if(e.has(_))return e;let t=new Set(e);return t.add(_),t})))},[_,v]),ge=(0,o.useMemo)(()=>{let e=[n(v?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(y){let t=y.code.toUpperCase(),n=p.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:I(t),f:y.name},n]]}if(b){let t=f===`region`;return[t?[...e,{type:`string`,role:oe.tooltip,p:{html:!0}}]:e,...x.map(([e,n])=>{let r=[{v:I(e),f:n.countryFull},n.value];return t?[...r,je(n)]:r})]}return[e,...p.map(e=>[e.label,e.value])]},[x,p,y,f,b,v]),_e=(0,o.useMemo)(()=>{let e=ue(p.map(e=>e.value),m?p.map(e=>e.previousValue):[]);return p.map(r=>{let i=le(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...te({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:f===`country`&&o?{kind:`drillDown`,onClick:()=>c({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:pe(r.value,e),previousShare:m&&a!==void 0?pe(a,e):void 0,delta:m&&a!==void 0?fe(r.value,a):void 0}})},[p,f,m,c]),S=d?(0,R.jsx)(ee,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:l,className:F.backLink}):null,ve=S?(0,R.jsx)(u,{direction:`row`,align:`center`,className:F.bodyHeader,children:S}):null;return(0,R.jsxs)(`div`,{className:F.content,children:[ve,(0,R.jsx)(`div`,{className:F.stateArea,children:(0,R.jsx)(he,{isLoading:ne,isFetching:ie,isError:h,isEmpty:p.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:se,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,R.jsxs)(`div`,{className:F.chartArea,children:[(0,R.jsx)(`div`,{className:F.leaderboardPanel,children:(0,R.jsx)(me,{data:_e,withOverlayLabel:!0,withComparison:m,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:F.leaderboard})}),(0,R.jsx)(`div`,{className:F.geoChart,children:(0,R.jsx)(ae,{data:ge,resizeDebounceTime:100,region:v?d?.code??`world`:`world`,resolution:v?`provinces`:`countries`,onError:de})})]})})})]})}function L({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.prototype.hasOwnProperty.call(B,t)?t:V;return(0,R.jsx)(f,{attributes:e,children:(0,R.jsxs)(`div`,{className:F.root,children:[(0,R.jsx)(Me,{geoGranularity:n}),(0,R.jsx)(ie,{children:(0,R.jsx)(ne,{report:`locations`,section:B[n]})})]})})}var R,Ne,z,B,V,Pe,Fe=e((()=>{Se(),b(),h(),s(),i(),d(),De(),Ae(),R=a(),Ne=`Requested map does not exist`,z=new Set,B={country:`countries`,region:`regions`,city:`cities`},V=`country`,Pe=10})),Ie,Le=e((()=>{i(),l(),x(),Ie={icon:c,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:de,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Re,ze,Be,Ve,He,Ue,We,Ge=e((()=>{Re=`jpa/locations`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We={name:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue}}));function Ke({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:_(e)}}function H(e){return(0,W.jsx)(L,{attributes:Ke(e)})}function U(e){return(0,W.jsx)(L,{attributes:{geoGranularity:`country`,reportParams:_(!1,e)}})}function qe(e){return(0,W.jsx)(L,{...e})}function Je({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(be,{...n,widgetType:G,renderModule:Ye,renderComponent:qe,attributes:Ke({withComparison:e,geoGranularity:t})})}var W,Ye,G,Xe,K,q,J,Y,X,Z,Q,$,Ze;e((()=>{v(),S(),ge(),ve(),xe(),p(),Te(),Ee(),Fe(),Le(),Ge(),W=a(),m(),we(),Ye=`storybook/locations`,G=ye(We,Ie),Xe={title:`Packages/Premium Analytics/Widgets/Locations`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[w,C]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[w,C]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[w,C]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[w,C]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/location-views`,`loading`),()=>T(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/location-views`,`error`),()=>T(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/location-views`,`empty`),()=>T(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Je,{...e}),args:{...Ce,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ze=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Ze as __namedExportsOrder,Xe as default};