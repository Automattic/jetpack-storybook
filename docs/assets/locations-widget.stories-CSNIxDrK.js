import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{j as a,t as o}from"./build-module-Dxhc9xxH.js";import{It as s,t as c}from"./build-module-1mnmt-Cy.js";import{Kn as ee}from"./build-module-vwO17YW3.js";import{In as l,It as u,in as d,s as f,t as p}from"./src-BVv1R588.js";import{t as m}from"./src-DMHlbKtp.js";import{R as h,W as te,cn as ne,m as re,o as ie}from"./charts-provider-DVBrFPaa.js";import{t as ae}from"./widget-state-CqPm5upe.js";import{N as g,Y as oe,d as se,f as ce,i as _,l as v,m as le,n as y,r as b,u as x}from"./with-story-router-Buc1zMFG.js";import"./constants-4LY2Ogim.js";import{r as ue}from"./leaderboard-skeleton-BRgiGhSp.js";import{n as S,r as de}from"./register-report-mocks-Dzl9RUVR.js";import{n as fe,s as pe}from"./locations-geo-chart-Dbf-Xvw_.js";import{a as me,c as C,i as w,l as he,o as T,r as ge,s as E,u as D}from"./with-widget-canvas-BqMy9p20.js";import{n as _e,t as O}from"./use-no-views-empty-state-CKi4wBm4.js";import{n as k,t as ve}from"./register-stats-mocks-CutN0CmB.js";import{n as ye,t as A}from"./force-stats-mock-state-DltsELiR.js";var j,M,N,P,F,I,L,R,be,z,xe=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,L=`_leaderboardPanel_33236_42`,R=`_leaderboard_33236_42`,be=`_geoChart_33236_58`,z={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:R,geoChart:be}}));function Se({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Ce=e((()=>{o()}));function we(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Te({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:d}=u({...e,geoMode:n,max:t,...se(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(we),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:f.length===0&&l,refetch:d}}var Ee=e((()=>{p(),o(),_()}));function De(e,t){return e===0?t:[`region`,`city`][e-1]}function Oe({geoGranularity:e}){d();let{reportParams:r}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=ie(),l=i?.country,u=0;i&&(u=i.region?2:1);let p=De(u,e),m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Te({reportParams:r,max:10,geoMode:p,filter:m}),{isLoading:g,isFetching:se,isError:_,refetch:v}=h,{data:y,hasComparison:b,isHeld:S,drillDepth:de}=Se({...h,drillDepth:u,reportParams:r}),me=ce(x(De(de,e))),C=_e({isLoading:g&&!S,isError:_,isEmpty:y.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),w=(0,a.useMemo)(()=>le(x(p),m),[p,m]),he=(0,a.useMemo)(()=>(S?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,S]),T=f(`regions-cities`),ge=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return y.map(t=>{let n=ne(t.countryCode);return{id:t.key,...pe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[y,p,S,T,o]),E=i?.region&&e===`country`?i.country:null,D=(0,a.useCallback)(()=>{E?o({country:E}):c()},[E,c,o]),O=i?(0,V.jsx)(oe,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:D,current:i.region??i.country.name,className:z.trail}):null,k=O?(0,V.jsx)(ee,{direction:`row`,align:`center`,className:z.bodyHeader,children:O}):null;return re({report:`locations`,section:x(e),csv:{exporter:w,status:{isLoading:g,isError:_},rowCount:y.length}}),(0,V.jsxs)(`div`,{className:z.content,children:[k,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(ae,{isLoading:C.isLoading,isFetching:se,isError:_,isEmpty:y.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},empty:C.empty,children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(s,{isDisabled:S,className:z.leaderboardPanel,children:(0,V.jsx)(ue,{data:ge,loading:S,withOverlayLabel:!0,withComparison:b,showLegend:!1,columns:{label:me,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(fe,{rows:he,mode:p,focusCountry:l,resizeDebounceTime:100})})]})})})]})}function B({attributes:e={}}){let t=e?.geoGranularity??H,n=Object.values(v).includes(t)?t:H;return n!==`country`&&f(`regions-cities`)?(0,V.jsx)(h,{attributes:e,children:(0,V.jsx)(g,{feature:`regions-cities`})}):(0,V.jsx)(h,{attributes:e,children:(0,V.jsx)(`div`,{className:z.root,children:(0,V.jsx)(Oe,{geoGranularity:n},n)})})}var V,H,ke=e((()=>{p(),_(),c(),o(),r(),m(),O(),xe(),Ce(),Ee(),V=i(),H=`country`})),Ae,je=e((()=>{Ae={example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze=[{id:`geoGranularity`,type:`jpa/toggle-group`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Be={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re,attributes:ze}}));function He({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:l(e)}}function U(e){return(0,G.jsx)(B,{attributes:He(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,reportParams:l(!1,e)}})}function Ue(e){return(0,G.jsx)(B,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(C,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:He({withComparison:e,geoGranularity:t})})}var G,Ge,Ke,qe,K,q,J,Y,X,Z,Q,$,Je;e((()=>{p(),he(),T(),y(),ge(),S(),ve(),ye(),ke(),je(),Ve(),G=i(),de(),k(),Ge=`storybook/locations`,Ke=me(Be,Ae),qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[w,b]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[w,b]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[w,b]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[w,b]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},$={tags:[`widget-dashboard`],render:e=>(0,G.jsx)(We,{...e}),args:{...E,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...D,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Je=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...$.parameters?.docs?.source}}}}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Je as __namedExportsOrder,qe as default};