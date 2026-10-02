import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{At as ee}from"./build-module-DmDwTLpf2.js";import{m as l,r as u,v as te}from"./hooks-BNYntG_W.js";import{t as d}from"./src-CPfH96fF.js";import{Ot as ne,cn as f,ot as re,t as p}from"./src-Cz6uELaK.js";import{Et as ie,Ot as ae,Tt as m,ot as oe}from"./helpers-BSsxUP7j.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-DlAmydDf.js";import{n as ce,r as h}from"./with-story-router-DJq7_igr.js";import{n as le,r as ue}from"./register-report-mocks-DXhMAhe-.js";import{_ as de,b as g,i as fe,m as _}from"./leaderboard-CZlr_3b3.js";import{t as pe}from"./widget-state-Dibf9iiP.js";import{f as me}from"./report-metric-5nJejdqs.js";import{t as v}from"./src-Da-6qwPK.js";import{a as he,d as ge,f as _e,i as ve,n as ye,p as be,r as y,u as xe}from"./with-widget-canvas-Exi8inW-.js";import{n as Se,t as Ce}from"./register-stats-mocks-l7pl8CZM.js";import{n as we,t as b}from"./force-stats-mock-state-DhA7nUcc.js";var x,S,C,w,T,E,D,O,k,A,Te=e((()=>{x=`_root_33236_1`,S=`_trail_33236_9`,C=`_content_33236_13`,w=`_bodyHeader_33236_20`,T=`_stateArea_33236_27`,E=`_chartArea_33236_32`,D=`_leaderboardPanel_33236_42`,O=`_leaderboard_33236_42`,k=`_geoChart_33236_58`,A={root:x,trail:S,content:C,bodyHeader:w,stateArea:T,chartArea:E,leaderboardPanel:D,leaderboard:O,geoChart:k}}));function Ee(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function De({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:ee,refetch:l}=re({...e,geoMode:n,max:t,...r?{filter_by_country:r.country}:{},...r?.region?{filter_by_region:r.region}:{}},{maxRows:t}),u=(i?.rows??[]).map(Ee);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&ee,refetch:l}}var Oe=e((()=>{p()}));function ke({geoGranularity:e}){ne();let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=u(),c=i?.country,l=e;i&&(l=i.region?`city`:`region`);let{data:d,hasComparison:f,isLoading:re,isFetching:p,isError:ce,refetch:h}=De({reportParams:n,max:10,geoMode:l,filter:i?{country:i.country.code,region:i.region}:void 0}),le=(0,a.useMemo)(()=>d.filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[d]),ue=(0,a.useMemo)(()=>{let e=e=>{if(!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return l===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:l===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ie(d.map(e=>e.value),f?d.map(e=>e.previousValue):[]);return d.map(t=>{let r=oe(t.countryCode),i=t.previousValue;return{id:t.key,...fe({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:m(t.value,n),previousShare:f&&i!==void 0?m(i,n):void 0,delta:f&&i!==void 0?ae(t.value,i):void 0}})},[d,l,f,o]),g=i?.region&&e===`country`?i.country:null,_=(0,a.useCallback)(()=>{g?o({country:g}):s()},[g,s,o]),v=i?(0,M.jsx)(de,{label:g?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:g?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),g.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:_,current:i.region??i.country.name,className:A.trail}):null,he=v?(0,M.jsx)(ee,{direction:`row`,align:`center`,className:A.bodyHeader,children:v}):null;return(0,M.jsxs)(`div`,{className:A.content,children:[he,(0,M.jsx)(`div`,{className:A.stateArea,children:(0,M.jsx)(pe,{isLoading:re,isFetching:p,isError:ce,isEmpty:d.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},children:(0,M.jsxs)(`div`,{className:A.chartArea,children:[(0,M.jsx)(`div`,{className:A.leaderboardPanel,children:(0,M.jsx)(se,{data:ue,withOverlayLabel:!0,withComparison:f,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:A.leaderboard})}),(0,M.jsx)(`div`,{className:A.geoChart,children:(0,M.jsx)(me,{rows:le,mode:l,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function j({attributes:e={}}){let t=e?.geoGranularity??P,n=Object.prototype.hasOwnProperty.call(N,t)?t:P;return(0,M.jsx)(l,{attributes:e,children:(0,M.jsxs)(`div`,{className:A.root,children:[(0,M.jsx)(ke,{geoGranularity:n},n),(0,M.jsx)(_,{children:(0,M.jsx)(g,{report:`locations`,section:N[n]})})]})})}var M,N,P,Ae=e((()=>{p(),v(),s(),n(),d(),Te(),Oe(),M=i(),N={country:`countries`,region:`regions`,city:`cities`},P=`country`})),F,je=e((()=>{n(),c(),F={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),I,L,R,z,B,V,Me,Ne=e((()=>{I=`jpa/locations`,L=`Top locations`,R=`Where your visitors are viewing from — by country, region, or city.`,z={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,Me={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function Pe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(j,{attributes:Pe(e)})}function U(e){return(0,W.jsx)(j,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Fe(e){return(0,W.jsx)(j,{...e})}function Ie({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ge,{...n,widgetType:Re,renderModule:Le,renderComponent:Fe,attributes:Pe({withComparison:e,geoGranularity:t})})}var W,Le,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),_e(),he(),ce(),ye(),le(),Ce(),we(),Ae(),je(),Ne(),W=i(),ue(),Se(),Le=`storybook/locations`,Re=ve(Me,F),ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[y,h]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[y,h]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[y,h]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[y,h]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/location-views`,`loading`),()=>b(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/location-views`,`error`),()=>b(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[y,h],beforeEach:()=>(b(`stats/location-views`,`empty`),()=>b(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ie,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...be,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'region'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'empty');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,ze as default};