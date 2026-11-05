import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{B as s,I as c,Sn as ee,f as te,o as l}from"./charts-provider-CXfkGtsB.js";import{Zr as u,t as ne,v as re}from"./build-module-d2u2hqwO.js";import{t as d}from"./src-CPjV9w9v.js";import{Tt as f,o as p,qt as ie,t as m,vn as h}from"./src-D_TtMBSK.js";import{t as ae}from"./widget-state-CXQalhFB.js";import{O as g,U as oe,c as _,d as se,l as ce,o as v,s as y,t as b}from"./src-IG38QtFd.js";import"./constants-BbL1KRds.js";import{r as le}from"./leaderboard-skeleton-DpCJ3FKj.js";import{n as x,r as ue}from"./register-report-mocks-DLedm_o9.js";import{n as de,s as fe}from"./locations-geo-chart-D3EZV8qV.js";import{n as S,r as C}from"./with-story-router-CY8VeMuG.js";import{a as pe,c as w,i as me,l as he,n as T,o as ge,r as E,s as _e}from"./with-widget-canvas-D0XA6-gC.js";import{n as ve,t as D}from"./use-no-views-empty-state-DyEt_HUP.js";import{n as O,t as k}from"./register-stats-mocks-DjNQZaeB.js";import{n as ye,t as A}from"./force-stats-mock-state-CZj0bC7n.js";var j,M,N,P,F,I,L,be,xe,R,Se=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,L=`_leaderboardPanel_33236_42`,be=`_leaderboard_33236_42`,xe=`_geoChart_33236_58`,R={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:be,geoChart:xe}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let a=JSON.stringify(i),[s,c]=(0,o.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==a||s.data!==e)&&c({drillDepth:r,paramsKey:a,data:e,hasComparison:t}),n&&s&&s.paramsKey===a&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var we=e((()=>{a()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:te,refetch:l}=f({...e,geoMode:n,max:t,..._(r)},{maxRows:t}),u=(0,o.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:u,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:u.length===0&&te,refetch:l}}var De=e((()=>{m(),a(),b()}));function Oe(e,t){return e===0?t:[`region`,`city`][e-1]}function ke({geoGranularity:e}){ie();let{reportParams:r}=s(),{drillDownItem:i,drillDown:a,resetDrillDown:c}=l(),ne=i?.country,d=0;i&&(d=i.region?2:1);let f=Oe(d,e),m=(0,o.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ee({reportParams:r,max:10,geoMode:f,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:b}=h,{data:x,hasComparison:ue,isHeld:S,drillDepth:C}=Ce({...h,drillDepth:d,reportParams:r}),pe=ce(y(Oe(C,e))),w=ve({isLoading:g&&!S,isError:v,isEmpty:x.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),me=(0,o.useMemo)(()=>se(y(f),m),[f,m]),he=(0,o.useMemo)(()=>(S?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,S]),T=p(`regions-cities`),ge=(0,o.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>a({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>a({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return x.map(t=>{let n=ee(t.countryCode);return{id:t.key,...fe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[x,f,S,T,a]),E=i?.region&&e===`country`?i.country:null,_e=(0,o.useCallback)(()=>{E?a({country:E}):c()},[E,c,a]),D=i?(0,B.jsx)(oe,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:_e,current:i.region??i.country.name,className:R.trail}):null,O=D?(0,B.jsx)(u,{direction:`row`,align:`center`,className:R.bodyHeader,children:D}):null,k=n(`Top locations`,`jetpack-premium-analytics-pkg`);return te({report:`locations`,section:y(e),csv:{exporter:me,status:{isLoading:g,isFetching:_,isError:v},rowCount:x.length}}),(0,B.jsxs)(`div`,{className:R.content,children:[O,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ae,{isLoading:w.isLoading,isFetching:_,isError:v,isEmpty:x.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},empty:w.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(re,{isDisabled:S,className:R.leaderboardPanel,children:(0,B.jsx)(le,{data:ge,loading:S,withOverlayLabel:!0,withComparison:ue,showLegend:!1,columns:{label:pe,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard,chartTitle:k})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(de,{chartTitle:k,rows:he,mode:f,focusCountry:ne,resizeDebounceTime:100})})]})})})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(v).includes(t)?t:V;return n!==`country`&&p(`regions-cities`)?(0,B.jsx)(c,{attributes:e,children:(0,B.jsx)(g,{feature:`regions-cities`})}):(0,B.jsx)(c,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(ke,{geoGranularity:n},n)})})}var B,V,Ae=e((()=>{m(),b(),ne(),a(),r(),d(),D(),Se(),we(),De(),B=i(),V=`country`})),je,Me=e((()=>{je={example:{attributes:{geoGranularity:`country`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Ne=`jpa/locations`,Pe=`jpa/map-marker`,Fe=`Top locations`,Ie=`Where your visitors are viewing from — by country, region, or city.`,Le={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Re=`stats`,ze=`framed`,Be=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ve={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:h(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ue(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:h(!1,e)}})}function We(e){return(0,W.jsx)(z,{...e})}function Ge({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(_e,{...n,widgetType:qe,renderModule:Ke,renderComponent:We,attributes:Ue({withComparison:e,geoGranularity:t})})}var W,Ke,qe,Je,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),w(),pe(),S(),T(),x(),k(),ye(),Ae(),Me(),He(),W=i(),ue(),O(),Ke=`storybook/locations`,qe=me(Ve,je),Je={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,C]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,C]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,C]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ge,{...e}),args:{...ge,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Je as default};