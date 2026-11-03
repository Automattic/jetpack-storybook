import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-sy00sX6O.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-CPdP9iK8.js";import{B as s,I as c,f as ee,o as l,vn as u}from"./charts-provider-DsX-Fp7L.js";import{Lr as d,t as te,v as ne}from"./build-module-CCbOH6zx.js";import{t as f}from"./src-_q2KQq4p.js";import{Tt as p,o as m,qt as re,t as h,vn as g}from"./src-eG9MNHBB.js";import{t as ie}from"./widget-state-EVLgG9Ub.js";import{c as _,d as ae,l as oe,o as v,s as y,t as b,w as se,z as ce}from"./src-DDRGoopA.js";import"./constants-DF4Qoi8L.js";import{r as le}from"./leaderboard-skeleton-C6WqtTfZ.js";import{n as x,r as ue}from"./register-report-mocks-4SvdwSTg.js";import{n as de,s as fe}from"./locations-geo-chart-CigMr60a.js";import{n as S,r as C}from"./with-story-router-CsJFVsVX.js";import{a as pe,c as w,i as me,l as he,n as T,o as ge,r as E,s as _e}from"./with-widget-canvas-36u0dStu.js";import{n as ve,t as D}from"./use-no-views-empty-state-VnbZRGw-.js";import{n as O,t as k}from"./register-stats-mocks-Cy5KDOyv.js";import{n as ye,t as A}from"./force-stats-mock-state-C0IYZ2Zb.js";var j,M,N,P,F,I,L,R,be,z,xe=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,L=`_leaderboardPanel_33236_42`,R=`_leaderboard_33236_42`,be=`_geoChart_33236_58`,z={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:R,geoChart:be}}));function Se({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let a=JSON.stringify(i),[s,c]=(0,o.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==a||s.data!==e)&&c({drillDepth:r,paramsKey:a,data:e,hasComparison:t}),n&&s&&s.paramsKey===a&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Ce=e((()=>{a()}));function we(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Te({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:u}=p({...e,geoMode:n,max:t,..._(r)},{maxRows:t}),d=(0,o.useMemo)(()=>(i?.rows??[]).map(we),[i]);return{data:d,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:d.length===0&&l,refetch:u}}var Ee=e((()=>{h(),a(),b()}));function De(e,t){return e===0?t:[`region`,`city`][e-1]}function Oe({geoGranularity:e}){re();let{reportParams:r}=s(),{drillDownItem:i,drillDown:a,resetDrillDown:c}=l(),te=i?.country,f=0;i&&(f=i.region?2:1);let p=De(f,e),h=(0,o.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),g=Te({reportParams:r,max:10,geoMode:p,filter:h}),{isLoading:_,isFetching:v,isError:b,refetch:se}=g,{data:x,hasComparison:ue,isHeld:S,drillDepth:C}=Se({...g,drillDepth:f,reportParams:r}),pe=oe(y(De(C,e))),w=ve({isLoading:_&&!S,isError:b,isEmpty:x.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),me=(0,o.useMemo)(()=>ae(y(p),h),[p,h]),he=(0,o.useMemo)(()=>(S?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,S]),T=m(`regions-cities`),ge=(0,o.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>a({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>a({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return x.map(t=>{let n=u(t.countryCode);return{id:t.key,...fe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[x,p,S,T,a]),E=i?.region&&e===`country`?i.country:null,_e=(0,o.useCallback)(()=>{E?a({country:E}):c()},[E,c,a]),D=i?(0,V.jsx)(ce,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:_e,current:i.region??i.country.name,className:z.trail}):null,O=D?(0,V.jsx)(d,{direction:`row`,align:`center`,className:z.bodyHeader,children:D}):null,k=n(`Top locations`,`jetpack-premium-analytics-pkg`);return ee({report:`locations`,section:y(e),csv:{exporter:me,status:{isLoading:_,isFetching:v,isError:b},rowCount:x.length}}),(0,V.jsxs)(`div`,{className:z.content,children:[O,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(ie,{isLoading:w.isLoading,isFetching:v,isError:b,isEmpty:x.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:se}]},empty:w.empty,children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(ne,{isDisabled:S,className:z.leaderboardPanel,children:(0,V.jsx)(le,{data:ge,loading:S,withOverlayLabel:!0,withComparison:ue,showLegend:!1,columns:{label:pe,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard,chartTitle:k})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(de,{chartTitle:k,rows:he,mode:p,focusCountry:te,resizeDebounceTime:100})})]})})})]})}function B({attributes:e={}}){let t=e?.geoGranularity??H,n=Object.values(v).includes(t)?t:H;return n!==`country`&&m(`regions-cities`)?(0,V.jsx)(c,{attributes:e,children:(0,V.jsx)(se,{feature:`regions-cities`})}):(0,V.jsx)(c,{attributes:e,children:(0,V.jsx)(`div`,{className:z.root,children:(0,V.jsx)(Oe,{geoGranularity:n},n)})})}var V,H,ke=e((()=>{h(),b(),te(),a(),r(),f(),D(),xe(),Ce(),Ee(),V=i(),H=`country`})),Ae,je=e((()=>{Ae={example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Be={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re,attributes:ze}}));function He({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:g(e)}}function U(e){return(0,G.jsx)(B,{attributes:He(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,reportParams:g(!1,e)}})}function Ue(e){return(0,G.jsx)(B,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(_e,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:He({withComparison:e,geoGranularity:t})})}var G,Ge,Ke,qe,K,q,J,Y,X,Z,Q,$,Je;e((()=>{h(),w(),pe(),S(),T(),x(),k(),ye(),ke(),je(),Ve(),G=i(),ue(),O(),Ge=`storybook/locations`,Ke=me(Be,Ae),qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,C]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,C]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,C]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,C]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(We,{...e}),args:{...ge,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},Je=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Je as __namedExportsOrder,qe as default};