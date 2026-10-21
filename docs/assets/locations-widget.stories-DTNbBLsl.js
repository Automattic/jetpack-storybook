import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{an as s}from"./build-module-DhwsekaI.js";import{t as c,v as ee}from"./build-module-BVQ1F0gg.js";import{t as l}from"./src-FMtXFCwi.js";import{Ht as te,bt as u,o as d,pn as f,t as p}from"./src-5g9sGwvT.js";import{Et as ne,Ot as re,dt as ie,m,mt as ae,o as oe,v as se}from"./charts-provider-Dz_9KfQe.js";import{Q as h,X as g,Y as _,Z as ce,c as v,ct as y,d as le,l as ue,lt as b,o as de,ot as x,s as S,st as C,t as w,x as fe}from"./src-CwWcdYh9.js";import{t as pe}from"./widget-state-CgiqWOxt.js";import{n as me}from"./locked-widget-fqwZfb5_.js";import"./rows-DoJXoHhN.js";import{r as he}from"./leaderboard-skeleton-Ciu6IUKd.js";import{a as T,o as ge}from"./widget-state-B6SJsJzX.js";import{n as E,r as D}from"./with-story-router-Bwg0edRp.js";import{i as _e}from"./build-leaderboard-chart-data-B1eNI0zc.js";import{f as ve,l as ye,o as be}from"./leaderboard-bG98GUJZ.js";import{n as xe}from"./locations-geo-chart-BY6acH3c.js";import{n as Se,t as O}from"./use-no-views-empty-state-BMJXzusd.js";import{n as k,t as A}from"./register-stats-mocks-Nvcu00DF.js";import{n as Ce,t as j}from"./force-stats-mock-state-BBDmAC5l.js";var we,Te,Ee,De,M,N,P,F,I,L,Oe=e((()=>{we=`_root_33236_1`,Te=`_trail_33236_9`,Ee=`_content_33236_13`,De=`_bodyHeader_33236_20`,M=`_stateArea_33236_27`,N=`_chartArea_33236_32`,P=`_leaderboardPanel_33236_42`,F=`_leaderboard_33236_42`,I=`_geoChart_33236_58`,L={root:we,trail:Te,content:Ee,bodyHeader:De,stateArea:M,chartArea:N,leaderboardPanel:P,leaderboard:F,geoChart:I}}));function ke({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Ae=e((()=>{o()}));function je(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Me({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:te}=u({...e,geoMode:n,max:t,...v(r)},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(je),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:d.length===0&&l,refetch:te}}var Ne=e((()=>{p(),o(),w()}));function R(e,t){return e===0?t:[`region`,`city`][e-1]}function Pe({geoGranularity:e}){te();let{reportParams:r}=se(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=oe(),l=i?.country,u=0;i&&(u=i.region?2:1);let f=R(u,e),p=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),m=Me({reportParams:r,max:10,geoMode:f,filter:p}),{isLoading:h,isFetching:g,isError:_,refetch:ce}=m,{data:v,hasComparison:y,isHeld:b,drillDepth:de}=ke({...m,drillDepth:u,reportParams:r}),x=ue(S(R(de,e))),C=Se({isLoading:h&&!b,isError:_,isEmpty:v.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),w=(0,a.useMemo)(()=>le(S(f),p),[f,p]),me=(0,a.useMemo)(()=>(b?[]:v).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[v,b]),T=d(`regions-cities`),ge=(0,a.useMemo)(()=>{let e=e=>{if(b||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=ie(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map(t=>{let n=ne(t.countryCode),i=t.previousValue;return{id:t.key,..._e({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ae(t.value,r),previousShare:y&&i!==void 0?ae(i,r):void 0,delta:y&&i!==void 0?re(t.value,i):void 0}})},[v,f,y,b,T,o]),E=i?.region&&e===`country`?i.country:null,D=(0,a.useCallback)(()=>{E?o({country:E}):c()},[E,c,o]),O=i?(0,B.jsx)(ye,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:D,current:i.region??i.country.name,className:L.trail}):null,k=O?(0,B.jsx)(s,{direction:`row`,align:`center`,className:L.bodyHeader,children:O}):null,A=n(`Top locations`,`jetpack-premium-analytics-pkg`);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:L.content,children:[k,(0,B.jsx)(`div`,{className:L.stateArea,children:(0,B.jsx)(pe,{isLoading:C.isLoading,isFetching:g,isError:_,isEmpty:v.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ce}]},empty:C.empty,children:(0,B.jsxs)(`div`,{className:L.chartArea,children:[(0,B.jsx)(ee,{isDisabled:b,className:L.leaderboardPanel,children:(0,B.jsx)(he,{data:ge,loading:b,withOverlayLabel:!0,withComparison:y,showLegend:!1,columns:{label:x,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard,chartTitle:A})}),(0,B.jsx)(`div`,{className:L.geoChart,children:(0,B.jsx)(xe,{chartTitle:A,rows:me,mode:f,focusCountry:l,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(be,{children:[(0,B.jsx)(ve,{report:`locations`,section:S(e)}),(0,B.jsx)(fe,{exporter:w,status:{isLoading:h,isFetching:g,isError:_},rowCount:v.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(de).includes(t)?t:V;return n!==`country`&&d(`regions-cities`)?(0,B.jsx)(m,{attributes:e,children:(0,B.jsx)(me,{feature:`regions-cities`})}):(0,B.jsx)(m,{attributes:e,children:(0,B.jsx)(`div`,{className:L.root,children:(0,B.jsx)(Pe,{geoGranularity:n},n)})})}var B,V,Fe=e((()=>{p(),w(),c(),o(),r(),l(),O(),Oe(),Ae(),Ne(),B=i(),V=`country`})),H,Ie=e((()=>{H={example:{attributes:{geoGranularity:`country`}}}})),Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{Le=`jpa/locations`,Re=`jpa/map-marker`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ge={name:Le,icon:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue,attributes:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function U(e){return(0,G.jsx)(z,{attributes:qe(e)})}function W(e){return(0,G.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Je(e){return(0,G.jsx)(z,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(C,{...n,widgetType:Ze,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var G,Xe,Ze,Qe,K,q,J,Y,X,Z,Q,$,$e;e((()=>{p(),y(),h(),E(),_(),T(),A(),Ce(),Fe(),Ie(),Ke(),G=i(),ge(),k(),Xe=`storybook/locations`,Ze=ce(Ge,H),Qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[g,D]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[g,D]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[g,D]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[g,D]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[g,D],beforeEach:()=>(j(`stats/location-views`,`loading`),()=>j(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[g,D],beforeEach:()=>(j(`stats/location-views`,`error`),()=>j(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[g,D],beforeEach:()=>(j(`stats/location-views`,`empty`),()=>j(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Ye,{...e}),args:{...x,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$e=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,$e as __namedExportsOrder,Qe as default};