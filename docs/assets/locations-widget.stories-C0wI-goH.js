import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,r as ee,v as te}from"./hooks-DlwzzcWQ.js";import{Ot as u}from"./build-module-pI6Uihcg.js";import{g as ne,t as d}from"./build-module-D9C-LNQr.js";import{t as f}from"./src-BanKyDVD.js";import{Mt as re,fn as p,t as m,ut as h}from"./src-qLceMyav.js";import{Dt as ie,Tt as ae,at as oe,wt as g}from"./helpers-BotXJmg4.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-BR5Be1ix.js";import{n as _,r as v}from"./with-story-router-CvMS9E-0.js";import{n as y,r as b}from"./register-report-mocks-B9j2WY3D.js";import{_ as ce,b as le,i as ue,m as de}from"./leaderboard-B5IaVmf0.js";import{t as fe}from"./widget-state-HVO_bcq_.js";import{O as pe,o as me}from"./report-metric-BOCwgQq4.js";import{C as x,D as he,T as ge,t as S,w as _e}from"./src-CqDLerFk.js";import{a as ve,d as C,f as w,i as T,n as E,p as ye,r as D,u as be}from"./with-widget-canvas-CY_IQ1y7.js";import{n as xe,t as Se}from"./register-stats-mocks-BrWvqCqy.js";import{n as Ce,t as O}from"./force-stats-mock-state-BbGK6nUE.js";var k,A,j,M,N,P,F,I,L,R,we=e((()=>{k=`_root_33236_1`,A=`_trail_33236_9`,j=`_content_33236_13`,M=`_bodyHeader_33236_20`,N=`_stateArea_33236_27`,P=`_chartArea_33236_32`,F=`_leaderboardPanel_33236_42`,I=`_leaderboard_33236_42`,L=`_geoChart_33236_58`,R={root:k,trail:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function Te({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Ee=e((()=>{s()}));function De(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Oe({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:ee,refetch:te}=h({...e,geoMode:n,max:t,...ge(r)},{maxRows:t}),u=(0,a.useMemo)(()=>(i?.rows??[]).map(De),[i]);return{data:u,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u.length===0&&ee,refetch:te}}var ke=e((()=>{m(),s(),S()}));function Ae({geoGranularity:e}){re();let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ee(),c=i?.country,l=e,d=0;i&&(l=i.region?`city`:`region`,d=i.region?2:1);let f=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),p=Oe({reportParams:n,max:10,geoMode:l,filter:f}),{isLoading:m,isFetching:h,isError:_,refetch:v}=p,{data:y,hasComparison:b,isHeld:x}=Te({...p,drillDepth:d,reportParams:n}),ge=(0,a.useMemo)(()=>he(_e(l),f),[l,f]),S=(0,a.useMemo)(()=>(x?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,x]),ve=(0,a.useMemo)(()=>{let e=e=>{if(x||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return l===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:l===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ae(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map(t=>{let r=oe(t.countryCode),i=t.previousValue;return{id:t.key,...ue({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:g(t.value,n),previousShare:b&&i!==void 0?g(i,n):void 0,delta:b&&i!==void 0?ie(t.value,i):void 0}})},[y,l,b,x,o]),C=i?.region&&e===`country`?i.country:null,w=(0,a.useCallback)(()=>{C?o({country:C}):s()},[C,s,o]),T=i?(0,B.jsx)(ce,{label:C?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:C?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),C.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:w,current:i.region??i.country.name,className:R.trail}):null,E=T?(0,B.jsx)(u,{direction:`row`,align:`center`,className:R.bodyHeader,children:T}):null;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[E,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(fe,{isLoading:m&&!x,isFetching:h,isError:_,isEmpty:y.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(ne,{isDisabled:x,className:R.leaderboardPanel,children:(0,B.jsx)(se,{data:ve,loading:x,withOverlayLabel:!0,withComparison:b,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(pe,{rows:S,mode:l,focusCountry:c,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(de,{children:[(0,B.jsx)(le,{report:`locations`,section:_e(e)}),(0,B.jsx)(me,{exporter:ge,status:{isLoading:m,isFetching:h,isError:_},rowCount:y.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(x).includes(t)?t:V;return(0,B.jsx)(l,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Ae,{geoGranularity:n},n)})})}var B,V,je=e((()=>{m(),S(),d(),s(),n(),f(),we(),Ee(),ke(),B=i(),V=`country`})),Me,Ne=e((()=>{n(),c(),Me={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Pe=`jpa/locations`,Fe=`Top locations`,Ie=`Where your visitors are viewing from — by country, region, or city.`,Le={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Re=`stats`,ze=`framed`,Be={name:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze}}));function H({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function U(e){return(0,G.jsx)(z,{attributes:H(e)})}function W(e){return(0,G.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function He(e){return(0,G.jsx)(z,{...e})}function Ue({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(C,{...n,widgetType:Ge,renderModule:We,renderComponent:He,attributes:H({withComparison:e,geoGranularity:t})})}var G,We,Ge,Ke,K,q,J,Y,X,Z,Q,$,qe;e((()=>{m(),w(),ve(),_(),E(),y(),Se(),Ce(),je(),Ne(),Ve(),G=i(),b(),xe(),We=`storybook/locations`,Ge=T(Be,Me),Ke={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,v]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,v]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,v]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,v]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[D,v],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[D,v],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[D,v],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Ue,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},qe=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,qe as __namedExportsOrder,Ke as default};