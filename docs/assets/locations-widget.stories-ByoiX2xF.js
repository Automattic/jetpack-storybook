import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{B as s,I as c,Sn as ee,f as te,o as l}from"./charts-provider-L6kRC6Ms.js";import{Zr as u,t as ne,v as re}from"./build-module-BEvijrel.js";import{t as d}from"./src-DvswlVtx.js";import{Tt as f,bn as p,o as ie,qt as ae,t as m}from"./src-CJxWIdUQ.js";import{t as oe}from"./widget-state-it4WpRiv.js";import{O as h,U as se,c as g,d as ce,l as le,o as _,s as v,t as y}from"./src-D6ZS30CO.js";import"./constants-DWFmLs_j.js";import{r as ue}from"./leaderboard-skeleton-BVW4lQoh.js";import{n as b,r as de}from"./register-report-mocks-DpRCW8_j.js";import{n as fe,s as pe}from"./locations-geo-chart-CJAWfllm.js";import{n as x,r as S}from"./with-story-router-DQAiREyT.js";import{a as me,c as C,i as he,l as ge,n as w,o as _e,r as T,s as E}from"./with-widget-canvas-DsO1jqQd.js";import{n as ve,t as D}from"./use-no-views-empty-state-DN96gEru.js";import{n as O,t as ye}from"./register-stats-mocks-BLfWbTqK.js";import{n as be,t as k}from"./force-stats-mock-state-BxqehQ73.js";var A,j,M,N,P,F,I,L,R,z,xe=e((()=>{A=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,R=`_geoChart_33236_58`,z={root:A,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:R}}));function Se({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let a=JSON.stringify(i),[s,c]=(0,o.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==a||s.data!==e)&&c({drillDepth:r,paramsKey:a,data:e,hasComparison:t}),n&&s&&s.paramsKey===a&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Ce=e((()=>{a()}));function we(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Te({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:te,refetch:l}=f({...e,geoMode:n,max:t,...g(r)},{maxRows:t}),u=(0,o.useMemo)(()=>(i?.rows??[]).map(we),[i]);return{data:u,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:u.length===0&&te,refetch:l}}var Ee=e((()=>{m(),a(),y()}));function De(e,t){return e===0?t:[`region`,`city`][e-1]}function Oe({geoGranularity:e}){ae();let{reportParams:r}=s(),{drillDownItem:i,drillDown:a,resetDrillDown:c}=l(),ne=i?.country,d=0;i&&(d=i.region?2:1);let f=De(d,e),p=(0,o.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),m=Te({reportParams:r,max:10,geoMode:f,filter:p}),{isLoading:h,isFetching:g,isError:_,refetch:y}=m,{data:b,hasComparison:de,isHeld:x,drillDepth:S}=Se({...m,drillDepth:d,reportParams:r}),me=le(v(De(S,e))),C=ve({isLoading:h&&!x,isError:_,isEmpty:b.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),he=(0,o.useMemo)(()=>ce(v(f),p),[f,p]),ge=(0,o.useMemo)(()=>(x?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,x]),w=ie(`regions-cities`),_e=(0,o.useMemo)(()=>{let e=e=>{if(x||!e.countryCode||w)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>a({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>a({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return b.map(t=>{let n=ee(t.countryCode);return{id:t.key,...pe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[b,f,x,w,a]),T=i?.region&&e===`country`?i.country:null,E=(0,o.useCallback)(()=>{T?a({country:T}):c()},[T,c,a]),D=i?(0,V.jsx)(se,{label:T?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:T?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),T.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:E,current:i.region??i.country.name,className:z.trail}):null,O=D?(0,V.jsx)(u,{direction:`row`,align:`center`,className:z.bodyHeader,children:D}):null;return te({report:`locations`,section:v(e),csv:{exporter:he,status:{isLoading:h,isFetching:g,isError:_},rowCount:b.length}}),(0,V.jsxs)(`div`,{className:z.content,children:[O,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(oe,{isLoading:C.isLoading,isFetching:g,isError:_,isEmpty:b.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:C.empty,children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(re,{isDisabled:x,className:z.leaderboardPanel,children:(0,V.jsx)(ue,{data:_e,loading:x,withOverlayLabel:!0,withComparison:de,showLegend:!1,columns:{label:me,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(fe,{rows:ge,mode:f,focusCountry:ne,resizeDebounceTime:100})})]})})})]})}function B({attributes:e={}}){let t=e?.geoGranularity??H,n=Object.values(_).includes(t)?t:H;return n!==`country`&&ie(`regions-cities`)?(0,V.jsx)(c,{attributes:e,children:(0,V.jsx)(h,{feature:`regions-cities`})}):(0,V.jsx)(c,{attributes:e,children:(0,V.jsx)(`div`,{className:z.root,children:(0,V.jsx)(Oe,{geoGranularity:n},n)})})}var V,H,ke=e((()=>{m(),y(),ne(),a(),r(),d(),D(),xe(),Ce(),Ee(),V=i(),H=`country`})),Ae,je=e((()=>{Ae={example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Be={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re,attributes:ze}}));function He({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function U(e){return(0,G.jsx)(B,{attributes:He(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Ue(e){return(0,G.jsx)(B,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(E,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:He({withComparison:e,geoGranularity:t})})}var G,Ge,Ke,qe,K,q,J,Y,X,Z,Q,$,Je;e((()=>{m(),C(),me(),x(),w(),b(),ye(),be(),ke(),je(),Ve(),G=i(),de(),O(),Ge=`storybook/locations`,Ke=he(Be,Ae),qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,S]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,S]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,S]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,S]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(We,{...e}),args:{..._e,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Je=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Je as __namedExportsOrder,qe as default};