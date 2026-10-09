import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{At as s}from"./build-module-D2aEjqke.js";import{g as c,t as l}from"./build-module-DzDhwiMd.js";import{t as u}from"./src-DSKrH2vS.js";import{Lt as d,On as f,ht as p,t as m}from"./src-eFflVWkb.js";import{Jt as ee,Ut as te,Yt as ne,Zt as re,_ as h,o as ie,x as ae}from"./charts-provider-CG5jlyMR.js";import"./rows-DAmD2BmE.js";import{r as oe}from"./leaderboard-skeleton-DsfQpqQ8.js";import{n as g,r as _}from"./register-report-mocks-CaddGZDb.js";import{t as se}from"./widget-state-Dy1Xd117.js";import{n as v,r as y}from"./with-story-router-Beljd9ki.js";import{g as ce,i as le,p as ue,y as de}from"./leaderboard-Bd0dcrkK.js";import{n as fe,w as pe}from"./components-D1il1gd6.js";import{d as b,l as x,p as me,t as S,u as he}from"./src-B1RxCXze.js";import{a as ge,g as C,h as w,i as T,m as _e,n as E,p as ve,r as D}from"./with-widget-canvas-fJNR6VE0.js";import{n as ye,t as be}from"./register-stats-mocks-D5UjlxjH.js";import{n as xe,t as O}from"./force-stats-mock-state-DAUuJlfM.js";var Se,k,A,j,M,N,P,F,I,L,Ce=e((()=>{Se=`_root_33236_1`,k=`_trail_33236_9`,A=`_content_33236_13`,j=`_bodyHeader_33236_20`,M=`_stateArea_33236_27`,N=`_chartArea_33236_32`,P=`_leaderboardPanel_33236_42`,F=`_leaderboard_33236_42`,I=`_geoChart_33236_58`,L={root:Se,trail:k,content:A,bodyHeader:j,stateArea:M,chartArea:N,leaderboardPanel:P,leaderboard:F,geoChart:I}}));function we({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Te=e((()=>{o()}));function Ee(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function De({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=p({...e,geoMode:n,max:t,...b(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Ee),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var Oe=e((()=>{m(),o(),S()}));function ke({geoGranularity:e}){d();let{reportParams:n}=ae(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=ie(),u=i?.country,f=e,p=0;i&&(f=i.region?`city`:`region`,p=i.region?2:1);let m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=De({reportParams:n,max:10,geoMode:f,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:y}=h,{data:b,hasComparison:x,isHeld:S}=we({...h,drillDepth:p,reportParams:n}),ge=(0,a.useMemo)(()=>me(he(f),m),[f,m]),C=(0,a.useMemo)(()=>(S?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,S]),w=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ne(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map(t=>{let r=te(t.countryCode),i=t.previousValue;return{id:t.key,...le({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ee(t.value,n),previousShare:x&&i!==void 0?ee(i,n):void 0,delta:x&&i!==void 0?re(t.value,i):void 0}})},[b,f,x,S,o]),T=i?.region&&e===`country`?i.country:null,_e=(0,a.useCallback)(()=>{T?o({country:T}):l()},[T,l,o]),E=i?(0,z.jsx)(ce,{label:T?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:T?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),T.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:_e,current:i.region??i.country.name,className:L.trail}):null,ve=E?(0,z.jsx)(s,{direction:`row`,align:`center`,className:L.bodyHeader,children:E}):null;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:L.content,children:[ve,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(se,{isLoading:g&&!S,isFetching:_,isError:v,isEmpty:b.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(c,{isDisabled:S,className:L.leaderboardPanel,children:(0,z.jsx)(oe,{data:w,loading:S,withOverlayLabel:!0,withComparison:x,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(pe,{rows:C,mode:f,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,z.jsxs)(ue,{children:[(0,z.jsx)(de,{report:`locations`,section:he(e)}),(0,z.jsx)(fe,{exporter:ge,status:{isLoading:g,isFetching:_,isError:v},rowCount:b.length})]})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(x).includes(t)?t:B;return(0,z.jsx)(h,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(ke,{geoGranularity:n},n)})})}var z,B,Ae=e((()=>{m(),S(),l(),o(),n(),u(),Ce(),Te(),Oe(),z=i(),B=`country`})),V,je=e((()=>{n(),V={attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(R,{attributes:Ve(e)})}function U(e){return(0,W.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function He(e){return(0,W.jsx)(R,{...e})}function Ue({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(_e,{...n,widgetType:Ge,renderModule:We,renderComponent:He,attributes:Ve({withComparison:e,geoGranularity:t})})}var W,We,Ge,Ke,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),w(),ge(),v(),E(),g(),be(),xe(),Ae(),je(),Be(),W=i(),_(),ye(),We=`storybook/locations`,Ge=T(ze,V),Ke={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,y]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,y]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,y]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ue,{...e}),args:{...ve,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...C,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Ke as default};