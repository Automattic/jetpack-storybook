import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{an as s}from"./build-module-DhwsekaI.js";import{t as c,v as l}from"./build-module-BVQ1F0gg.js";import{t as u}from"./src-BlGMEEBc.js";import{St as d,Wt as f,hn as p,o as m,t as h}from"./src-BEwaewMJ.js";import{F as g,Ft as ee,Mt as te,Yt as ne,f as re,o as ie,qt as ae,z as oe}from"./charts-provider-BgxsEvl0.js";import{t as se}from"./widget-state-BwHOn80-.js";import{n as _}from"./locked-widget-D7g55Aat.js";import"./rows-DoJXoHhN.js";import{r as ce}from"./leaderboard-skeleton-ef4y5mU-.js";import{a as v,o as y}from"./widget-state-BjN9cSfn.js";import{n as le,r as b}from"./with-story-router-DjfOWuXu.js";import{i as ue}from"./leaderboard-Db47wbhp.js";import{i as de}from"./build-leaderboard-chart-data-C6WLdPtZ.js";import{n as fe}from"./locations-geo-chart-XbRe4C1m.js";import{A as x,H as S,M as pe,N as me,U as C,V as he,W as ge,c as w,d as _e,j as T,l as ve,o as E,s as D,t as O}from"./src-DMQdrIso.js";import{n as ye,t as k}from"./use-no-views-empty-state-CXvYkt1x.js";import{n as A,t as j}from"./register-stats-mocks-Nvcu00DF.js";import{n as be,t as M}from"./force-stats-mock-state-BeeB_aDt.js";var N,P,F,I,L,xe,Se,Ce,we,R,Te=e((()=>{N=`_root_33236_1`,P=`_trail_33236_9`,F=`_content_33236_13`,I=`_bodyHeader_33236_20`,L=`_stateArea_33236_27`,xe=`_chartArea_33236_32`,Se=`_leaderboardPanel_33236_42`,Ce=`_leaderboard_33236_42`,we=`_geoChart_33236_58`,R={root:N,trail:P,content:F,bodyHeader:I,stateArea:L,chartArea:xe,leaderboardPanel:Se,leaderboard:Ce,geoChart:we}}));function Ee({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var De=e((()=>{o()}));function Oe(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function ke({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:f}=d({...e,geoMode:n,max:t,...w(r)},{maxRows:t}),p=(0,a.useMemo)(()=>(i?.rows??[]).map(Oe),[i]);return{data:p,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:p.length===0&&u,refetch:f}}var Ae=e((()=>{h(),o(),O()}));function je(e,t){return e===0?t:[`region`,`city`][e-1]}function Me({geoGranularity:e}){f();let{reportParams:r}=oe(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=ie(),u=i?.country,d=0;i&&(d=i.region?2:1);let p=je(d,e),h=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),g=ke({reportParams:r,max:10,geoMode:p,filter:h}),{isLoading:_,isFetching:v,isError:y,refetch:le}=g,{data:b,hasComparison:x,isHeld:S,drillDepth:pe}=Ee({...g,drillDepth:d,reportParams:r}),me=ve(D(je(pe,e))),C=ye({isLoading:_&&!S,isError:y,isEmpty:b.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),he=(0,a.useMemo)(()=>_e(D(p),h),[p,h]),ge=(0,a.useMemo)(()=>(S?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,S]),w=m(`regions-cities`),T=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||w)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=te(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map(t=>{let n=ae(t.countryCode),i=t.previousValue;return{id:t.key,...de({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ee(t.value,r),previousShare:x&&i!==void 0?ee(i,r):void 0,delta:x&&i!==void 0?ne(t.value,i):void 0}})},[b,p,x,S,w,o]),E=i?.region&&e===`country`?i.country:null,O=(0,a.useCallback)(()=>{E?o({country:E}):c()},[E,c,o]),k=i?(0,B.jsx)(ue,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:O,current:i.region??i.country.name,className:R.trail}):null,A=k?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:k}):null,j=n(`Top locations`,`jetpack-premium-analytics-pkg`);return re({report:`locations`,section:D(e),csv:{exporter:he,status:{isLoading:_,isFetching:v,isError:y},rowCount:b.length}}),(0,B.jsxs)(`div`,{className:R.content,children:[A,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(se,{isLoading:C.isLoading,isFetching:v,isError:y,isEmpty:b.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},empty:C.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(l,{isDisabled:S,className:R.leaderboardPanel,children:(0,B.jsx)(ce,{data:T,loading:S,withOverlayLabel:!0,withComparison:x,showLegend:!1,columns:{label:me,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard,chartTitle:j})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(fe,{chartTitle:j,rows:ge,mode:p,focusCountry:u,resizeDebounceTime:100})})]})})})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(E).includes(t)?t:V;return n!==`country`&&m(`regions-cities`)?(0,B.jsx)(g,{attributes:e,children:(0,B.jsx)(_,{feature:`regions-cities`})}):(0,B.jsx)(g,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Me,{geoGranularity:n},n)})})}var B,V,Ne=e((()=>{h(),O(),c(),o(),r(),u(),k(),Te(),De(),Ae(),B=i(),V=`country`})),Pe,Fe=e((()=>{Pe={example:{attributes:{geoGranularity:`country`}}}})),Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge=e((()=>{Ie=`jpa/locations`,Le=`jpa/map-marker`,Re=`Top locations`,ze=`Where your visitors are viewing from — by country, region, or city.`,Be={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ve=`stats`,He=`framed`,Ue=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],We={name:Ie,icon:Le,title:Re,description:ze,help:Be,category:Ve,presentation:He,attributes:Ue}}));function Ke({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ke(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function qe(e){return(0,W.jsx)(z,{...e})}function Je({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(S,{...n,widgetType:G,renderModule:Ye,renderComponent:qe,attributes:Ke({withComparison:e,geoGranularity:t})})}var W,Ye,G,Xe,K,q,J,Y,X,Z,Q,$,Ze;e((()=>{h(),C(),me(),le(),x(),v(),j(),be(),Ne(),Fe(),Ge(),W=i(),y(),A(),Ye=`storybook/locations`,G=pe(We,Pe),Xe={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,b]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,b]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,b]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,b]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(M(`stats/location-views`,`loading`),()=>M(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(M(`stats/location-views`,`error`),()=>M(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,b],beforeEach:()=>(M(`stats/location-views`,`empty`),()=>M(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Je,{...e}),args:{...he,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Ze=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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