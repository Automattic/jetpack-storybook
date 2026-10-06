import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{Kt as l,_ as u,dn as d,fn as f,mn as ee,o as te,x as ne}from"./charts-provider-anfyGsni.js";import{Ot as re}from"./build-module-pI6Uihcg.js";import{g as ie,t as p}from"./build-module-CoPVQs84.js";import{t as m}from"./src-DcLe4Q8-.js";import{Mt as ae,fn as h,t as g,ut as _}from"./src-BA0D9M6V.js";import"./rows-DAmD2BmE.js";import{r as oe}from"./leaderboard-skeleton-XF9iwas0.js";import{n as v,r as y}from"./with-story-router-D7Twxnvj.js";import{n as b,r as x}from"./register-report-mocks-DpGO4M3z.js";import{_ as se,b as ce,i as le,m as ue}from"./leaderboard-elUnVk74.js";import{t as de}from"./widget-state-Cmr7gNAU.js";import{O as fe,o as pe}from"./report-metric-Bxx4Rg9I.js";import{C as S,D as me,T as he,t as C,w as ge}from"./src-CWZ4y_mc.js";import{a as _e,d as w,f as ve,i as T,n as E,p as ye,r as D,u as be}from"./with-widget-canvas-lVH9KC5b.js";import{n as xe,t as Se}from"./register-stats-mocks-Bg0pSd3s.js";import{n as Ce,t as O}from"./force-stats-mock-state-DXFycYqj.js";var k,A,j,M,N,P,F,I,we,L,Te=e((()=>{k=`_root_33236_1`,A=`_trail_33236_9`,j=`_content_33236_13`,M=`_bodyHeader_33236_20`,N=`_stateArea_33236_27`,P=`_chartArea_33236_32`,F=`_leaderboardPanel_33236_42`,I=`_leaderboard_33236_42`,we=`_geoChart_33236_58`,L={root:k,trail:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:we}}));function Ee({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var De=e((()=>{s()}));function Oe(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function ke({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=_({...e,geoMode:n,max:t,...he(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Oe),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var Ae=e((()=>{g(),s(),C()}));function je({geoGranularity:e}){ae();let{reportParams:n}=ne(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=te(),c=i?.country,u=e,p=0;i&&(u=i.region?`city`:`region`,p=i.region?2:1);let m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=ke({reportParams:n,max:10,geoMode:u,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:y}=h,{data:b,hasComparison:x,isHeld:S}=Ee({...h,drillDepth:p,reportParams:n}),he=(0,a.useMemo)(()=>me(ge(u),m),[u,m]),C=(0,a.useMemo)(()=>(S?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,S]),_e=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return u===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:u===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=f(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map(t=>{let r=l(t.countryCode),i=t.previousValue;return{id:t.key,...le({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:d(t.value,n),previousShare:x&&i!==void 0?d(i,n):void 0,delta:x&&i!==void 0?ee(t.value,i):void 0}})},[b,u,x,S,o]),w=i?.region&&e===`country`?i.country:null,ve=(0,a.useCallback)(()=>{w?o({country:w}):s()},[w,s,o]),T=i?(0,z.jsx)(se,{label:w?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:w?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),w.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:ve,current:i.region??i.country.name,className:L.trail}):null,E=T?(0,z.jsx)(re,{direction:`row`,align:`center`,className:L.bodyHeader,children:T}):null;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:L.content,children:[E,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(de,{isLoading:g&&!S,isFetching:_,isError:v,isEmpty:b.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(ie,{isDisabled:S,className:L.leaderboardPanel,children:(0,z.jsx)(oe,{data:_e,loading:S,withOverlayLabel:!0,withComparison:x,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(fe,{rows:C,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]}),(0,z.jsxs)(ue,{children:[(0,z.jsx)(ce,{report:`locations`,section:ge(e)}),(0,z.jsx)(pe,{exporter:he,status:{isLoading:g,isFetching:_,isError:v},rowCount:b.length})]})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(S).includes(t)?t:B;return(0,z.jsx)(u,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(je,{geoGranularity:n},n)})})}var z,B,Me=e((()=>{g(),C(),p(),s(),n(),m(),Te(),De(),Ae(),z=i(),B=`country`})),Ne,Pe=e((()=>{n(),c(),Ne={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Fe=`jpa/locations`,Ie=`Top locations`,Le=`Where your visitors are viewing from — by country, region, or city.`,Re={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},ze=`stats`,Be=`framed`,Ve={name:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function V({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:h(e)}}function H(e){return(0,W.jsx)(R,{attributes:V(e)})}function U(e){return(0,W.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:h(!1,e)}})}function Ue(e){return(0,W.jsx)(R,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(w,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:V({withComparison:e,geoGranularity:t})})}var W,Ge,Ke,qe,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ve(),_e(),v(),E(),b(),Se(),Ce(),Me(),Pe(),He(),W=i(),x(),xe(),Ge=`storybook/locations`,Ke=T(Ve,Ne),qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,y]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,y]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,y]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(We,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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