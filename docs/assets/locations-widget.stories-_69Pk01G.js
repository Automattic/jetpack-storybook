import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{Qi as c,n as l}from"./build-module-CDRs4YxF.js";import{ln as ee,t as u}from"./src-C8ETpxlN.js";import{E as te,J as d,P as ne,S as f,at as re,q as p,tt as ie,w as ae}from"./report-metric-BywRn0bl.js";import{t as oe}from"./geo-chart-Z0fV_LSR.js";import{t as se}from"./types-BRp4aAtL.js";import{t as m,w as ce}from"./src-BKLK-O8P.js";import{G as h,qt as g,t as _}from"./src-BqoIAWGs.js";import{n as v,t as y}from"./src-DE8Ki5qG.js";import{r as le}from"./hooks-qCdIU8MM.js";import"./constants-B1kGztHF.js";import{R as ue,c as b,it as de,l as fe,ot as pe,rt as me}from"./chart-tooltip-CBXJFs6e.js";import{r as he}from"./leaderboard-skeleton-ZY6utfuo.js";import{t as ge}from"./widget-state-CCVIVgZN.js";import{C as _e,D as ve,E as x,O as ye,S as be,T as xe,b as Se,k as S,t as Ce,w as we,x as C}from"./src-CNbqXo4B.js";import{n as Te,t as Ee}from"./register-stats-mocks-ByWRxNNa.js";import{n as De,t as w}from"./force-stats-mock-state-B5MpKMJm.js";var T,E,D,O,k,A,j,M,N,P,Oe=e((()=>{T=`_root_erick_1`,E=`_backLink_erick_9`,D=`_content_erick_17`,O=`_bodyHeader_erick_25`,k=`_stateArea_erick_32`,A=`_chartArea_erick_38`,j=`_leaderboardPanel_erick_48`,M=`_leaderboard_erick_48`,N=`_geoChart_erick_64`,P={root:T,backLink:E,content:D,bodyHeader:O,stateArea:k,chartArea:A,leaderboardPanel:j,leaderboard:M,geoChart:N}}));function ke(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Ae({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:ee}=h({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(ke).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&l,refetch:ee}}var je=e((()=>{_()}));function F(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function Me(e){let n=e.locations.slice(0,Pe),i=n.map(e=>`${e.label}: ${v(e.value)}`),a=e.locations.length-n.length;return a>0&&i.push(t(r(`…and %d more location`,`…and %d more locations`,a,`jetpack-premium-analytics-pkg`),a)),i.join(`<br />`)}function Ne({geoGranularity:e}){let{reportParams:r}=re(),[i,a]=(0,o.useState)(()=>new Set(z)),{drillDownItem:s,drillDown:c,resetDrillDown:l}=le();(0,o.useEffect)(()=>{e!==`country`&&l()},[l,e]);let u=e===`country`?s:void 0,d=e===`country`&&u?`region`:e,{data:f,hasComparison:p,isLoading:ie,isFetching:ae,isError:m,refetch:h}=Ae({reportParams:r,max:10,geoMode:d,countryFilter:u?.code}),g=u?.code.toUpperCase(),_=d===`region`&&!!g&&!i.has(g),v=d===`region`&&u&&!_?u:void 0,y=d===`city`||d===`region`&&!u,b=(0,o.useMemo)(()=>{let e=new Map;return y?(f.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value,locations:[...r?.locations??[],t]})}),Array.from(e.entries())):[]},[f,y]),fe=(0,o.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!g&&_,r=!!g&&z.has(g);!n&&!r&&!t.includes(R)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(z.add(g),a(e=>{if(e.has(g))return e;let t=new Set(e);return t.add(g),t})))},[g,_]),_e=(0,o.useMemo)(()=>{let e=[n(_?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(v){let t=v.code.toUpperCase(),n=f.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:F(t),f:v.name},n]]}if(y){let t=d===`region`;return[t?[...e,{type:`string`,role:se.tooltip,p:{html:!0}}]:e,...b.map(([e,n])=>{let r=[{v:F(e),f:n.countryFull},n.value];return t?[...r,Me(n)]:r})]}return[e,...f.map(e=>[e.label,e.value])]},[b,f,v,d,y,_]),ve=(0,o.useMemo)(()=>{let e=de(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(r=>{let i=ue(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...ne({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:d===`country`&&o?{kind:`drillDown`,onClick:()=>c({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:me(r.value,e),previousShare:p&&a!==void 0?me(a,e):void 0,delta:p&&a!==void 0?pe(r.value,a):void 0}})},[f,d,p,c]),x=u?(0,L.jsx)(te,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:l,className:P.backLink}):null,ye=x?(0,L.jsx)(ee,{direction:`row`,align:`center`,className:P.bodyHeader,children:x}):null;return(0,L.jsxs)(`div`,{className:P.content,children:[ye,(0,L.jsx)(`div`,{className:P.stateArea,children:(0,L.jsx)(ge,{isLoading:ie,isFetching:ae,isError:m,isEmpty:f.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:ce,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,L.jsxs)(`div`,{className:P.chartArea,children:[(0,L.jsx)(`div`,{className:P.leaderboardPanel,children:(0,L.jsx)(he,{data:ve,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:P.leaderboard})}),(0,L.jsx)(`div`,{className:P.geoChart,children:(0,L.jsx)(oe,{data:_e,resizeDebounceTime:100,region:_?u?.code??`world`:`world`,resolution:_?`provinces`:`countries`,onError:fe})})]})})})]})}function I({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.prototype.hasOwnProperty.call(B,t)?t:V;return(0,L.jsx)(ie,{attributes:e,children:(0,L.jsxs)(`div`,{className:P.root,children:[(0,L.jsx)(Ne,{geoGranularity:n}),(0,L.jsx)(ae,{children:(0,L.jsx)(f,{report:`locations`,section:B[n]})})]})})}var L,R,z,B,V,Pe,Fe=e((()=>{Ce(),y(),m(),s(),i(),u(),Oe(),je(),L=a(),R=`Requested map does not exist`,z=new Set,B={country:`countries`,region:`regions`,city:`cities`},V=`country`,Pe=10})),Ie,Le=e((()=>{i(),l(),b(),Ie={icon:c,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:fe,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Re,ze,Be,Ve,He,Ue,We,Ge=e((()=>{Re=`jpa/locations`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We={name:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue}}));function Ke({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:g(e)}}function H(e){return(0,W.jsx)(I,{attributes:Ke(e)})}function U(e){return(0,W.jsx)(I,{attributes:{geoGranularity:`country`,reportParams:g(!1,e)}})}function qe(e){return(0,W.jsx)(I,{...e})}function Je({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(xe,{...n,widgetType:G,renderModule:Ye,renderComponent:qe,attributes:Ke({withComparison:e,geoGranularity:t})})}var W,Ye,G,Xe,K,q,J,Y,X,Z,Q,$,Ze;e((()=>{_(),x(),_e(),ye(),Se(),p(),Ee(),De(),Fe(),Le(),Ge(),W=a(),d(),Te(),Ye=`storybook/locations`,G=be(We,Ie),Xe={title:`Packages/Premium Analytics/Widgets/Locations`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[C,S]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[C,S]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[C,S]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[C,S]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/location-views`,`loading`),()=>w(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/location-views`,`error`),()=>w(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/location-views`,`empty`),()=>w(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Je,{...e}),args:{...we,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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