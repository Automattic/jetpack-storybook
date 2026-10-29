import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{B as s,I as c,f as ee,in as te,o as ne,sn as l,xn as re,yn as ie}from"./charts-provider-BXWttMH6.js";import{an as ae}from"./build-module-BN2Djb9A.js";import{t as oe,v as se}from"./build-module-BVQ1F0gg.js";import{t as u}from"./src-C0nwXc6l.js";import{Tt as d,o as ce,qt as le,t as f,vn as p}from"./src-DvzWgCqE.js";import{t as ue}from"./widget-state-B-3KFlZy.js";import{D as m,V as de,d as h,f as fe,i as g,l as pe,m as me,n as _,r as v,u as y}from"./with-story-router-TeMi98u_.js";import"./constants-B9OTkkI1.js";import{r as he}from"./leaderboard-skeleton-C-y8R1eG.js";import{n as b,r as ge}from"./register-report-mocks-CI2bPEM7.js";import{n as _e,s as ve}from"./locations-geo-chart-C6hMt7oL.js";import{a as ye,g as x,h as be,i as xe,m as S,n as C,p as w,r as T}from"./with-widget-canvas-ke8j5asA.js";import{n as Se,t as E}from"./use-no-views-empty-state-DXp1UMfh.js";import{n as D,t as O}from"./register-stats-mocks-Nvcu00DF.js";import{n as Ce,t as k}from"./force-stats-mock-state-B0U9Dr7D.js";var A,j,M,N,P,F,I,L,we,R,Te=e((()=>{A=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,we=`_geoChart_33236_58`,R={root:A,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:we}}));function Ee({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var De=e((()=>{o()}));function Oe(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function ke({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:te,refetch:ne}=d({...e,geoMode:n,max:t,...h(r)},{maxRows:t}),l=(0,a.useMemo)(()=>(i?.rows??[]).map(Oe),[i]);return{data:l,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l.length===0&&te,refetch:ne}}var Ae=e((()=>{f(),o(),g()}));function je(e,t){return e===0?t:[`region`,`city`][e-1]}function Me({geoGranularity:e}){le();let{reportParams:r}=s(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=ne(),oe=i?.country,u=0;i&&(u=i.region?2:1);let d=je(u,e),f=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),p=ke({reportParams:r,max:10,geoMode:d,filter:f}),{isLoading:m,isFetching:h,isError:g,refetch:pe}=p,{data:_,hasComparison:v,isHeld:b,drillDepth:ge}=Ee({...p,drillDepth:u,reportParams:r}),ye=fe(y(je(ge,e))),x=Se({isLoading:m&&!b,isError:g,isEmpty:_.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),be=(0,a.useMemo)(()=>me(y(d),f),[d,f]),xe=(0,a.useMemo)(()=>(b?[]:_).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[_,b]),S=ce(`regions-cities`),C=(0,a.useMemo)(()=>{let e=e=>{if(b||!e.countryCode||S)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=te(_.map(e=>e.value),v?_.map(e=>e.previousValue):[]);return _.map(t=>{let n=ie(t.countryCode),i=t.previousValue;return{id:t.key,...ve({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:l(t.value,r),previousShare:v&&i!==void 0?l(i,r):void 0,delta:v&&i!==void 0?re(t.value,i):void 0}})},[_,d,v,b,S,o]),w=i?.region&&e===`country`?i.country:null,T=(0,a.useCallback)(()=>{w?o({country:w}):c()},[w,c,o]),E=i?(0,B.jsx)(de,{label:w?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:w?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),w.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:T,current:i.region??i.country.name,className:R.trail}):null,D=E?(0,B.jsx)(ae,{direction:`row`,align:`center`,className:R.bodyHeader,children:E}):null,O=n(`Top locations`,`jetpack-premium-analytics-pkg`);return ee({report:`locations`,section:y(e),csv:{exporter:be,status:{isLoading:m,isFetching:h,isError:g},rowCount:_.length}}),(0,B.jsxs)(`div`,{className:R.content,children:[D,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ue,{isLoading:x.isLoading,isFetching:h,isError:g,isEmpty:_.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:pe}]},empty:x.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(se,{isDisabled:b,className:R.leaderboardPanel,children:(0,B.jsx)(he,{data:C,loading:b,withOverlayLabel:!0,withComparison:v,showLegend:!1,columns:{label:ye,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard,chartTitle:O})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(_e,{chartTitle:O,rows:xe,mode:d,focusCountry:oe,resizeDebounceTime:100})})]})})})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(pe).includes(t)?t:V;return n!==`country`&&ce(`regions-cities`)?(0,B.jsx)(c,{attributes:e,children:(0,B.jsx)(m,{feature:`regions-cities`})}):(0,B.jsx)(c,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Me,{geoGranularity:n},n)})})}var B,V,Ne=e((()=>{f(),g(),oe(),o(),r(),u(),E(),Te(),De(),Ae(),B=i(),V=`country`})),Pe,Fe=e((()=>{Pe={example:{attributes:{geoGranularity:`country`}}}})),Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge=e((()=>{Ie=`jpa/locations`,Le=`jpa/map-marker`,Re=`Top locations`,ze=`Where your visitors are viewing from — by country, region, or city.`,Be={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ve=`stats`,He=`framed`,Ue=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],We={name:Ie,icon:Le,title:Re,description:ze,help:Be,category:Ve,presentation:He,attributes:Ue}}));function Ke({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ke(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function qe(e){return(0,W.jsx)(z,{...e})}function Je({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(S,{...n,widgetType:G,renderModule:Ye,renderComponent:qe,attributes:Ke({withComparison:e,geoGranularity:t})})}var W,Ye,G,Xe,K,q,J,Y,X,Z,Q,$,Ze;e((()=>{f(),be(),ye(),_(),C(),b(),O(),Ce(),Ne(),Fe(),Ge(),W=i(),ge(),D(),Ye=`storybook/locations`,G=xe(We,Pe),Xe={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,v]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,v]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,v]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,v]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,v],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,v],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,v],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Je,{...e}),args:{...w,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Ze=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Ze as __namedExportsOrder,Xe as default};