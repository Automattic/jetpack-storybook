import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{Ot as ee}from"./build-module-pI6Uihcg.js";import{g as l,t as u}from"./build-module-Drp4xrQo.js";import{t as d}from"./src-oQnCxhjj.js";import{Nn as f,Pt as te,ft as p,t as m}from"./src-Zo99gLKt.js";import{Vt as ne,_ as h,ln as re,o as ie,on as ae,sn as oe,x as se}from"./charts-provider-DpVvz7da.js";import"./rows-DAmD2BmE.js";import{r as ce}from"./leaderboard-skeleton-wr_5ixoH.js";import{n as g,r as _}from"./with-story-router-Beljd9ki.js";import{n as v,r as y}from"./register-report-mocks-CYTjegco.js";import{_ as le,b as ue,i as de,m as fe}from"./leaderboard-NfzhRO2J.js";import{t as pe}from"./widget-state-TPA9IvjW.js";import{n as me,w as he}from"./components-BHL0GXpC.js";import{C as b,S as ge,T as _e,t as x,x as S}from"./src-CZ4mN7nt.js";import{a as C,g as w,h as T,i as E,m as ve,n as ye,p as be,r as D}from"./with-widget-canvas-CmZT9ovd.js";import{n as xe,t as Se}from"./register-stats-mocks-5t94xTq2.js";import{n as Ce,t as O}from"./force-stats-mock-state-D4WE7fMI.js";var we,Te,Ee,De,Oe,ke,k,A,j,M,Ae=e((()=>{we=`_root_33236_1`,Te=`_trail_33236_9`,Ee=`_content_33236_13`,De=`_bodyHeader_33236_20`,Oe=`_stateArea_33236_27`,ke=`_chartArea_33236_32`,k=`_leaderboardPanel_33236_42`,A=`_leaderboard_33236_42`,j=`_geoChart_33236_58`,M={root:we,trail:Te,content:Ee,bodyHeader:De,stateArea:Oe,chartArea:ke,leaderboardPanel:k,leaderboard:A,geoChart:j}}));function je({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Me=e((()=>{s()}));function Ne(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Pe({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:u}=p({...e,geoMode:n,max:t,...b(r)},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(Ne),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:d.length===0&&l,refetch:u}}var Fe=e((()=>{m(),s(),x()}));function Ie({geoGranularity:e}){te();let{reportParams:n}=se(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ie(),c=i?.country,u=e,d=0;i&&(u=i.region?`city`:`region`,d=i.region?2:1);let f=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),p=Pe({reportParams:n,max:10,geoMode:u,filter:f}),{isLoading:m,isFetching:h,isError:g,refetch:_}=p,{data:v,hasComparison:y,isHeld:b}=je({...p,drillDepth:d,reportParams:n}),x=(0,a.useMemo)(()=>_e(ge(u),f),[u,f]),S=(0,a.useMemo)(()=>(b?[]:v).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[v,b]),C=(0,a.useMemo)(()=>{let e=e=>{if(b||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return u===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:u===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=oe(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map(t=>{let r=ne(t.countryCode),i=t.previousValue;return{id:t.key,...de({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ae(t.value,n),previousShare:y&&i!==void 0?ae(i,n):void 0,delta:y&&i!==void 0?re(t.value,i):void 0}})},[v,u,y,b,o]),w=i?.region&&e===`country`?i.country:null,T=(0,a.useCallback)(()=>{w?o({country:w}):s()},[w,s,o]),E=i?(0,P.jsx)(le,{label:w?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:w?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),w.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:T,current:i.region??i.country.name,className:M.trail}):null,ve=E?(0,P.jsx)(ee,{direction:`row`,align:`center`,className:M.bodyHeader,children:E}):null;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:M.content,children:[ve,(0,P.jsx)(`div`,{className:M.stateArea,children:(0,P.jsx)(pe,{isLoading:m&&!b,isFetching:h,isError:g,isEmpty:v.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},children:(0,P.jsxs)(`div`,{className:M.chartArea,children:[(0,P.jsx)(l,{isDisabled:b,className:M.leaderboardPanel,children:(0,P.jsx)(ce,{data:C,loading:b,withOverlayLabel:!0,withComparison:y,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:M.leaderboard})}),(0,P.jsx)(`div`,{className:M.geoChart,children:(0,P.jsx)(he,{rows:S,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]}),(0,P.jsxs)(fe,{children:[(0,P.jsx)(ue,{report:`locations`,section:ge(e)}),(0,P.jsx)(me,{exporter:x,status:{isLoading:m,isFetching:h,isError:g},rowCount:v.length})]})]})}function N({attributes:e={}}){let t=e?.geoGranularity??F,n=Object.values(S).includes(t)?t:F;return(0,P.jsx)(h,{attributes:e,children:(0,P.jsx)(`div`,{className:M.root,children:(0,P.jsx)(Ie,{geoGranularity:n},n)})})}var P,F,Le=e((()=>{m(),x(),u(),s(),n(),d(),Ae(),Me(),Fe(),P=i(),F=`country`})),I,Re=e((()=>{n(),c(),I={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),L,R,z,B,V,ze,Be,Ve=e((()=>{L=`jpa/locations`,R=`Top locations`,z=`Where your visitors are viewing from — by country, region, or city.`,B={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`stats`,ze=`framed`,Be={name:L,title:R,description:z,help:B,category:V,presentation:ze}}));function He({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(N,{attributes:He(e)})}function U(e){return(0,W.jsx)(N,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Ue(e){return(0,W.jsx)(N,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ve,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:He({withComparison:e,geoGranularity:t})})}var W,Ge,Ke,G,K,q,J,Y,X,Z,Q,$,qe;e((()=>{m(),T(),C(),g(),ye(),v(),Se(),Ce(),Le(),Re(),Ve(),W=i(),y(),xe(),Ge=`storybook/locations`,Ke=E(Be,I),G={title:`Packages/Premium Analytics/Widgets/Locations`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,_]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,_]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,_]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,_]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,_],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,_],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,_],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(We,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},qe=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,qe as __namedExportsOrder,G as default};