import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{Ot as ee}from"./build-module-pI6Uihcg.js";import{g as l,t as u}from"./build-module-LTJwAqGH.js";import{t as d}from"./src-CszOvDkW.js";import{Fn as f,Pt as te,ft as p,t as m}from"./src-DvocT_eu.js";import{Kt as ne,_ as h,dn as re,fn as ie,mn as ae,o as oe,x as se}from"./charts-provider-VarQFi2V.js";import"./rows-DAmD2BmE.js";import{r as ce}from"./leaderboard-skeleton-Br219bQg.js";import{n as g,r as _}from"./with-story-router-Beljd9ki.js";import{n as v,r as y}from"./register-report-mocks-D3l4FDwU.js";import{_ as le,b as ue,i as de,m as fe}from"./leaderboard-C9i9ePS9.js";import{t as pe}from"./widget-state-Bhhwb_Lx.js";import{O as me,o as he}from"./report-metric-Cl2YztoW.js";import{C as b,D as ge,T as _e,t as x,w as ve}from"./src-BNP5TNCK.js";import{a as ye,d as S,f as C,i as w,n as T,p as be,r as E,u as xe}from"./with-widget-canvas-OldBBwNX.js";import{n as Se,t as Ce}from"./register-stats-mocks-CmfgIAR2.js";import{n as we,t as D}from"./force-stats-mock-state-BWR90Dmu.js";var O,k,A,j,M,N,P,F,I,L,Te=e((()=>{O=`_root_33236_1`,k=`_trail_33236_9`,A=`_content_33236_13`,j=`_bodyHeader_33236_20`,M=`_stateArea_33236_27`,N=`_chartArea_33236_32`,P=`_leaderboardPanel_33236_42`,F=`_leaderboard_33236_42`,I=`_geoChart_33236_58`,L={root:O,trail:k,content:A,bodyHeader:j,stateArea:M,chartArea:N,leaderboardPanel:P,leaderboard:F,geoChart:I}}));function Ee({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var De=e((()=>{s()}));function Oe(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function ke({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:u}=p({...e,geoMode:n,max:t,..._e(r)},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(Oe),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:d.length===0&&l,refetch:u}}var Ae=e((()=>{m(),s(),x()}));function je({geoGranularity:e}){te();let{reportParams:n}=se(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=oe(),c=i?.country,u=e,d=0;i&&(u=i.region?`city`:`region`,d=i.region?2:1);let f=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),p=ke({reportParams:n,max:10,geoMode:u,filter:f}),{isLoading:m,isFetching:h,isError:g,refetch:_}=p,{data:v,hasComparison:y,isHeld:b}=Ee({...p,drillDepth:d,reportParams:n}),_e=(0,a.useMemo)(()=>ge(ve(u),f),[u,f]),x=(0,a.useMemo)(()=>(b?[]:v).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[v,b]),ye=(0,a.useMemo)(()=>{let e=e=>{if(b||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return u===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:u===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ie(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map(t=>{let r=ne(t.countryCode),i=t.previousValue;return{id:t.key,...de({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:re(t.value,n),previousShare:y&&i!==void 0?re(i,n):void 0,delta:y&&i!==void 0?ae(t.value,i):void 0}})},[v,u,y,b,o]),S=i?.region&&e===`country`?i.country:null,C=(0,a.useCallback)(()=>{S?o({country:S}):s()},[S,s,o]),w=i?(0,z.jsx)(le,{label:S?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:S?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),S.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:C,current:i.region??i.country.name,className:L.trail}):null,T=w?(0,z.jsx)(ee,{direction:`row`,align:`center`,className:L.bodyHeader,children:w}):null;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:L.content,children:[T,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(pe,{isLoading:m&&!b,isFetching:h,isError:g,isEmpty:v.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(l,{isDisabled:b,className:L.leaderboardPanel,children:(0,z.jsx)(ce,{data:ye,loading:b,withOverlayLabel:!0,withComparison:y,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(me,{rows:x,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]}),(0,z.jsxs)(fe,{children:[(0,z.jsx)(ue,{report:`locations`,section:ve(e)}),(0,z.jsx)(he,{exporter:_e,status:{isLoading:m,isFetching:h,isError:g},rowCount:v.length})]})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(b).includes(t)?t:B;return(0,z.jsx)(h,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(je,{geoGranularity:n},n)})})}var z,B,Me=e((()=>{m(),x(),u(),s(),n(),d(),Te(),De(),Ae(),z=i(),B=`country`})),Ne,Pe=e((()=>{n(),c(),Ne={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Fe=`jpa/locations`,Ie=`Top locations`,Le=`Where your visitors are viewing from — by country, region, or city.`,Re={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},ze=`stats`,Be=`framed`,Ve={name:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function V({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(R,{attributes:V(e)})}function U(e){return(0,W.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Ue(e){return(0,W.jsx)(R,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(S,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:V({withComparison:e,geoGranularity:t})})}var W,Ge,Ke,qe,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),C(),ye(),g(),T(),v(),Ce(),we(),Me(),Pe(),He(),W=i(),y(),Se(),Ge=`storybook/locations`,Ke=w(Ve,Ne),qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,_]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,_]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,_]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,_]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(D(`stats/location-views`,`loading`),()=>D(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(D(`stats/location-views`,`error`),()=>D(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(D(`stats/location-views`,`empty`),()=>D(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(We,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...be,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,qe as default};