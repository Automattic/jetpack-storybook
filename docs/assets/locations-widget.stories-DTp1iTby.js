import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{an as s}from"./build-module-adLbGHUE.js";import{g as c,t as l}from"./build-module-Cz0-a3IT.js";import{t as u}from"./src-8Ffaq7aW.js";import{Bt as ee,dn as d,i as f,t as p,vt as m}from"./src-CKto-BOX.js";import{Nt as te,ft as ne,ht as re,jt as ie,m as h,o as ae,v as oe}from"./charts-provider-BRl9dX1Q.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-I5Q87Uij.js";import{n as g,r as _}from"./register-report-mocks-dPmE6ko-.js";import{t as ce}from"./widget-state-DFQ9ad5M.js";import{n as v,r as y}from"./with-story-router-Czpt5vw_.js";import{i as le}from"./build-leaderboard-chart-data-Dip2nV_a.js";import{f as ue,l as de,o as fe}from"./leaderboard-BaeipPqa.js";import{n as pe}from"./locations-geo-chart-DRy7LgBf.js";import{n as b}from"./locked-widget-TmLnI-ps.js";import{b as me,c as x,o as S,s as he,t as C,u as ge}from"./src-CIWLh7Qy.js";import{a as _e,g as ve,h as w,i as ye,m as T,n as E,p as D,r as O}from"./with-widget-canvas-Bstm6Za1.js";import{n as be,t as xe}from"./use-no-views-empty-state-BS98vMOo.js";import{n as Se,t as Ce}from"./register-stats-mocks-4I1U_p0j.js";import{n as we,t as k}from"./force-stats-mock-state-BRzebKKj.js";var A,j,M,N,P,F,I,L,Te,R,Ee=e((()=>{A=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,Te=`_geoChart_33236_58`,R={root:A,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:Te}}));function De({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Oe=e((()=>{o()}));function ke(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ae({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:ee}=m({...e,geoMode:n,max:t,...x(r)},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(ke),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:d.length===0&&u,refetch:ee}}var je=e((()=>{p(),o(),C()}));function Me({geoGranularity:e}){ee();let{reportParams:r}=oe(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=ae(),u=i?.country,d=e,p=0;i&&(d=i.region?`city`:`region`,p=i.region?2:1);let m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ae({reportParams:r,max:10,geoMode:d,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:y}=h,{data:b,hasComparison:x,isHeld:S}=De({...h,drillDepth:p,reportParams:r}),C=be({isLoading:g&&!S,isError:v,isEmpty:b.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),_e=(0,a.useMemo)(()=>ge(he(d),m),[d,m]),ve=(0,a.useMemo)(()=>(S?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,S]),w=f(`regions-cities`),ye=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||w)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=ne(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map(t=>{let n=ie(t.countryCode),i=t.previousValue;return{id:t.key,...le({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:re(t.value,r),previousShare:x&&i!==void 0?re(i,r):void 0,delta:x&&i!==void 0?te(t.value,i):void 0}})},[b,d,x,S,w,o]),T=i?.region&&e===`country`?i.country:null,E=(0,a.useCallback)(()=>{T?o({country:T}):l()},[T,l,o]),D=i?(0,B.jsx)(de,{label:T?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:T?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),T.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:E,current:i.region??i.country.name,className:R.trail}):null,O=D?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:D}):null;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[O,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ce,{isLoading:C.isLoading,isFetching:_,isError:v,isEmpty:b.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:C.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(c,{isDisabled:S,className:R.leaderboardPanel,children:(0,B.jsx)(se,{data:ye,loading:S,withOverlayLabel:!0,withComparison:x,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(pe,{rows:ve,mode:d,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(fe,{children:[(0,B.jsx)(ue,{report:`locations`,section:he(e)}),(0,B.jsx)(me,{exporter:_e,status:{isLoading:g,isFetching:_,isError:v},rowCount:b.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(S).includes(t)?t:V;return n!==`country`&&f(`regions-cities`)?(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(b,{feature:`regions-cities`})}):(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Me,{geoGranularity:n},n)})})}var B,V,Ne=e((()=>{p(),C(),l(),o(),r(),u(),xe(),Ee(),Oe(),je(),B=i(),V=`country`})),Pe,Fe=e((()=>{r(),Pe={attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Ie,Le,Re,ze,Be,Ve,He,Ue,We=e((()=>{Ie=`jpa/locations`,Le=`jpa/map-marker`,Re=`Top locations`,ze=`Where your visitors are viewing from — by country, region, or city.`,Be={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ve=`stats`,He=`framed`,Ue={name:Ie,icon:Le,title:Re,description:ze,help:Be,category:Ve,presentation:He}}));function Ge({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:d(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ge(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:d(!1,e)}})}function Ke(e){return(0,W.jsx)(z,{...e})}function qe({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(T,{...n,widgetType:Ye,renderModule:Je,renderComponent:Ke,attributes:Ge({withComparison:e,geoGranularity:t})})}var W,Je,Ye,G,K,q,J,Y,X,Z,Q,$,Xe;e((()=>{p(),w(),_e(),v(),E(),g(),Ce(),we(),Ne(),Fe(),We(),W=i(),_(),Se(),Je=`storybook/locations`,Ye=ye(Ue,Pe),G={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,y]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,y]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[O,y]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,y]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[O,y],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[O,y],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[O,y],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(qe,{...e}),args:{...D,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Xe=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Xe as __namedExportsOrder,G as default};