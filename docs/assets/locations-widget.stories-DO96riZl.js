import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{At as ee}from"./build-module-DmDwTLpf2.js";import{m as l,r as u,v as te}from"./hooks-kF76mxMz.js";import{t as d}from"./src-DR_ZGDyy.js";import{$t as f,Z as ne,t as p,yt as re}from"./src-1XQjh_E-.js";import{Dt as ie,Et as ae,kt as oe,st as se}from"./helpers-BYqeNQBs.js";import"./rows-DAmD2BmE.js";import{r as ce}from"./leaderboard-skeleton-B13iLD2V.js";import{n as le,r as m}from"./with-story-router-B-DNnBby.js";import{n as ue,r as h}from"./register-report-mocks-DB4ahSQv.js";import{_ as de,b as g,i as fe,m as _}from"./leaderboard-CvI16ebY.js";import{t as pe}from"./widget-state-BO-zr6K3.js";import{m as me}from"./report-metric-4vRqaAoR.js";import{t as v}from"./src-BE_bk_Vf.js";import{a as y,d as he,f as ge,i as _e,n as ve,p as ye,r as b,u as be}from"./with-widget-canvas-nkWdocfO.js";import{n as xe,t as Se}from"./register-stats-mocks-rmuXZCUG.js";import{n as Ce,t as x}from"./force-stats-mock-state-DSXtJq0j.js";var S,C,w,we,Te,T,E,D,O,k,Ee=e((()=>{S=`_root_33236_1`,C=`_trail_33236_9`,w=`_content_33236_13`,we=`_bodyHeader_33236_20`,Te=`_stateArea_33236_27`,T=`_chartArea_33236_32`,E=`_leaderboardPanel_33236_42`,D=`_leaderboard_33236_42`,O=`_geoChart_33236_58`,k={root:S,trail:C,content:w,bodyHeader:we,stateArea:Te,chartArea:T,leaderboardPanel:E,leaderboard:D,geoChart:O}}));function De(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Oe({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:ee,refetch:l}=ne({...e,geoMode:n,max:t,...r?{filter_by_country:r.country}:{},...r?.region?{filter_by_region:r.region}:{}},{maxRows:t}),u=(i?.rows??[]).map(De);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&ee,refetch:l}}var ke=e((()=>{p()}));function Ae({geoGranularity:e}){re();let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=u(),c=i?.country,l=e;i&&(l=i.region?`city`:`region`);let{data:d,hasComparison:f,isLoading:ne,isFetching:p,isError:le,refetch:m}=Oe({reportParams:n,max:10,geoMode:l,filter:i?{country:i.country.code,region:i.region}:void 0}),ue=(0,a.useMemo)(()=>d.filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[d]),h=(0,a.useMemo)(()=>{let e=e=>{if(!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return l===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:l===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ie(d.map(e=>e.value),f?d.map(e=>e.previousValue):[]);return d.map(t=>{let r=se(t.countryCode),i=t.previousValue;return{id:t.key,...fe({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ae(t.value,n),previousShare:f&&i!==void 0?ae(i,n):void 0,delta:f&&i!==void 0?oe(t.value,i):void 0}})},[d,l,f,o]),g=i?.region&&e===`country`?i.country:null,_=(0,a.useCallback)(()=>{g?o({country:g}):s()},[g,s,o]),v=i?(0,j.jsx)(de,{label:g?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:g?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),g.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:_,current:i.region??i.country.name,className:k.trail}):null,y=v?(0,j.jsx)(ee,{direction:`row`,align:`center`,className:k.bodyHeader,children:v}):null;return(0,j.jsxs)(`div`,{className:k.content,children:[y,(0,j.jsx)(`div`,{className:k.stateArea,children:(0,j.jsx)(pe,{isLoading:ne,isFetching:p,isError:le,isEmpty:d.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},children:(0,j.jsxs)(`div`,{className:k.chartArea,children:[(0,j.jsx)(`div`,{className:k.leaderboardPanel,children:(0,j.jsx)(ce,{data:h,withOverlayLabel:!0,withComparison:f,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:k.leaderboard})}),(0,j.jsx)(`div`,{className:k.geoChart,children:(0,j.jsx)(me,{rows:ue,mode:l,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function A({attributes:e={}}){let t=e?.geoGranularity??N,n=Object.prototype.hasOwnProperty.call(M,t)?t:N;return(0,j.jsx)(l,{attributes:e,children:(0,j.jsxs)(`div`,{className:k.root,children:[(0,j.jsx)(Ae,{geoGranularity:n},n),(0,j.jsx)(_,{children:(0,j.jsx)(g,{report:`locations`,section:M[n]})})]})})}var j,M,N,je=e((()=>{p(),v(),s(),n(),d(),Ee(),ke(),j=i(),M={country:`countries`,region:`regions`,city:`cities`},N=`country`})),P,Me=e((()=>{n(),c(),P={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),F,I,L,R,z,B,V,Ne=e((()=>{F=`jpa/locations`,I=`Top locations`,L=`Where your visitors are viewing from — by country, region, or city.`,R={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function U(e){return(0,G.jsx)(A,{attributes:H(e)})}function W(e){return(0,G.jsx)(A,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Pe(e){return(0,G.jsx)(A,{...e})}function Fe({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(he,{...n,widgetType:Le,renderModule:Ie,renderComponent:Pe,attributes:H({withComparison:e,geoGranularity:t})})}var G,Ie,Le,Re,K,q,J,Y,X,Z,Q,$,ze;e((()=>{p(),ge(),y(),le(),ve(),ue(),Se(),Ce(),je(),Me(),Ne(),G=i(),h(),xe(),Ie=`storybook/locations`,Le=_e(V,P),Re={title:`Packages/Premium Analytics/Widgets/Locations`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[b,m]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[b,m]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[b,m]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[b,m]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[b,m],beforeEach:()=>(x(`stats/location-views`,`loading`),()=>x(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[b,m],beforeEach:()=>(x(`stats/location-views`,`error`),()=>x(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[b,m],beforeEach:()=>(x(`stats/location-views`,`empty`),()=>x(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Fe,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ze=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,ze as __namedExportsOrder,Re as default};