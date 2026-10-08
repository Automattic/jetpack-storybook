import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{Ot as l}from"./build-module-pI6Uihcg.js";import{g as u,t as d}from"./build-module-BtEJE2d0.js";import{t as f}from"./src-DxT5sHjl.js";import{In as p,Lt as ee,ht as m,t as h}from"./src-Z37TxxUR.js";import{Ut as te,_ as g,en as ne,o as re,rn as ie,tn as ae,x as oe}from"./charts-provider-CG5ToIfO.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-DnH6g0RE.js";import{n as _,r as ce}from"./register-report-mocks-sLZjBBTA.js";import{t as le}from"./widget-state-CoImO_GJ.js";import{n as v,r as y}from"./with-story-router-Beljd9ki.js";import{g as ue,i as de,p as fe,y as pe}from"./leaderboard-DIIAbqtB.js";import{n as me,w as he}from"./components-lJgx6nGt.js";import{C as b,S as ge,T as _e,t as x,x as S}from"./src-C5IrtadX.js";import{a as C,g as w,h as ve,i as T,m as ye,n as be,p as xe,r as E}from"./with-widget-canvas-C5uv15Jp.js";import{n as Se,t as Ce}from"./register-stats-mocks-CVv9ayF8.js";import{n as we,t as D}from"./force-stats-mock-state-DnyiisQY.js";var Te,Ee,De,Oe,ke,O,k,A,j,M,Ae=e((()=>{Te=`_root_33236_1`,Ee=`_trail_33236_9`,De=`_content_33236_13`,Oe=`_bodyHeader_33236_20`,ke=`_stateArea_33236_27`,O=`_chartArea_33236_32`,k=`_leaderboardPanel_33236_42`,A=`_leaderboard_33236_42`,j=`_geoChart_33236_58`,M={root:Te,trail:Ee,content:De,bodyHeader:Oe,stateArea:ke,chartArea:O,leaderboardPanel:k,leaderboard:A,geoChart:j}}));function je({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Me=e((()=>{s()}));function Ne(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Pe({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=m({...e,geoMode:n,max:t,...b(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Ne),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var Fe=e((()=>{h(),s(),x()}));function Ie({geoGranularity:e}){ee();let{reportParams:n}=oe(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=re(),c=i?.country,d=e,f=0;i&&(d=i.region?`city`:`region`,f=i.region?2:1);let p=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),m=Pe({reportParams:n,max:10,geoMode:d,filter:p}),{isLoading:h,isFetching:g,isError:_,refetch:ce}=m,{data:v,hasComparison:y,isHeld:b}=je({...m,drillDepth:f,reportParams:n}),x=(0,a.useMemo)(()=>_e(ge(d),p),[d,p]),S=(0,a.useMemo)(()=>(b?[]:v).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[v,b]),C=(0,a.useMemo)(()=>{let e=e=>{if(b||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ae(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map(t=>{let r=te(t.countryCode),i=t.previousValue;return{id:t.key,...de({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ne(t.value,n),previousShare:y&&i!==void 0?ne(i,n):void 0,delta:y&&i!==void 0?ie(t.value,i):void 0}})},[v,d,y,b,o]),w=i?.region&&e===`country`?i.country:null,ve=(0,a.useCallback)(()=>{w?o({country:w}):s()},[w,s,o]),T=i?(0,P.jsx)(ue,{label:w?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:w?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),w.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:ve,current:i.region??i.country.name,className:M.trail}):null,ye=T?(0,P.jsx)(l,{direction:`row`,align:`center`,className:M.bodyHeader,children:T}):null;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:M.content,children:[ye,(0,P.jsx)(`div`,{className:M.stateArea,children:(0,P.jsx)(le,{isLoading:h&&!b,isFetching:g,isError:_,isEmpty:v.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ce}]},children:(0,P.jsxs)(`div`,{className:M.chartArea,children:[(0,P.jsx)(u,{isDisabled:b,className:M.leaderboardPanel,children:(0,P.jsx)(se,{data:C,loading:b,withOverlayLabel:!0,withComparison:y,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:M.leaderboard})}),(0,P.jsx)(`div`,{className:M.geoChart,children:(0,P.jsx)(he,{rows:S,mode:d,focusCountry:c,resizeDebounceTime:100})})]})})})]}),(0,P.jsxs)(fe,{children:[(0,P.jsx)(pe,{report:`locations`,section:ge(e)}),(0,P.jsx)(me,{exporter:x,status:{isLoading:h,isFetching:g,isError:_},rowCount:v.length})]})]})}function N({attributes:e={}}){let t=e?.geoGranularity??F,n=Object.values(S).includes(t)?t:F;return(0,P.jsx)(g,{attributes:e,children:(0,P.jsx)(`div`,{className:M.root,children:(0,P.jsx)(Ie,{geoGranularity:n},n)})})}var P,F,Le=e((()=>{h(),x(),d(),s(),n(),f(),Ae(),Me(),Fe(),P=i(),F=`country`})),I,Re=e((()=>{n(),c(),I={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),L,R,z,B,V,ze,Be,Ve=e((()=>{L=`jpa/locations`,R=`Top locations`,z=`Where your visitors are viewing from — by country, region, or city.`,B={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`stats`,ze=`framed`,Be={name:L,title:R,description:z,help:B,category:V,presentation:ze}}));function He({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(N,{attributes:He(e)})}function U(e){return(0,W.jsx)(N,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Ue(e){return(0,W.jsx)(N,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ye,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:He({withComparison:e,geoGranularity:t})})}var W,Ge,Ke,G,K,q,J,Y,X,Z,Q,$,qe;e((()=>{h(),ve(),C(),v(),be(),_(),Ce(),we(),Le(),Re(),Ve(),W=i(),ce(),Se(),Ge=`storybook/locations`,Ke=T(Be,I),G={title:`Packages/Premium Analytics/Widgets/Locations`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,y]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,y]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,y]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,y]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[E,y],beforeEach:()=>(D(`stats/location-views`,`loading`),()=>D(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[E,y],beforeEach:()=>(D(`stats/location-views`,`error`),()=>D(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[E,y],beforeEach:()=>(D(`stats/location-views`,`empty`),()=>D(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(We,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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