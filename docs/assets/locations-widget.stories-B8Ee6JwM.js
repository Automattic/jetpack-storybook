import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{vt as l}from"./build-module-BX6MUpOQ2.js";import{Bt as ee,an as u,b as te,cn as ne,et as d,g as f,on as re,r as ie,tt as p}from"./hooks-DMvMF82z.js";import{t as ae,w as oe}from"./src-C-E2d-Lb.js";import{t as se}from"./src-D9EKr-XS.js";import{$t as m,et as ce,r as h}from"./date-period-dropdown-B2m_Zps5.js";import"./constants-B1kGztHF.js";import{r as le}from"./leaderboard-skeleton-Cvama-N1.js";import{i as g,r as _}from"./register-report-mocks-DJvsDrEY.js";import{E as ue,N as de,S as v,k as fe,w as pe}from"./report-metric-KoNBhZHx.js";import{t as me}from"./widget-state-BjdeynAz.js";import{t as he}from"./src-B1aUa2q-.js";import{a as ge,c as _e,d as y,i as ve,l as ye,n as be,o as xe,r as b,s as Se,u as Ce}from"./with-widget-canvas-CHVw9kKN.js";import{n as we,t as Te}from"./register-stats-mocks-CzoPqQ8T.js";import{n as Ee,t as x}from"./force-stats-mock-state-dgl8sN_W.js";var S,C,w,T,E,D,O,k,A,j,De=e((()=>{S=`_root_mw6wj_1`,C=`_backLink_mw6wj_9`,w=`_content_mw6wj_17`,T=`_bodyHeader_mw6wj_24`,E=`_stateArea_mw6wj_31`,D=`_chartArea_mw6wj_36`,O=`_leaderboardPanel_mw6wj_46`,k=`_leaderboard_mw6wj_46`,A=`_geoChart_mw6wj_62`,j={root:S,backLink:C,content:w,bodyHeader:T,stateArea:E,chartArea:D,leaderboardPanel:O,leaderboard:k,geoChart:A}}));function Oe(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ke({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:ee}=ce({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(Oe).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&l,refetch:ee}}var Ae=e((()=>{h()}));function je({geoGranularity:e}){let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ie();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,d=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:ae,isFetching:se,isError:m,refetch:ce}=ke({reportParams:n,max:10,geoMode:d,countryFilter:c?.code}),h=(0,a.useMemo)(()=>f.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[f]),g=(0,a.useMemo)(()=>{let e=re(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(n=>{let i=ee(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...de({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:d===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:u(n.value,e),previousShare:p&&a!==void 0?u(a,e):void 0,delta:p&&a!==void 0?ne(n.value,a):void 0}})},[f,d,p,o]),_=c?(0,N.jsx)(ue,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:j.backLink}):null,v=_?(0,N.jsx)(l,{direction:`row`,align:`center`,className:j.bodyHeader,children:_}):null;return(0,N.jsxs)(`div`,{className:j.content,children:[v,(0,N.jsx)(`div`,{className:j.stateArea,children:(0,N.jsx)(me,{isLoading:ae,isFetching:se,isError:m,isEmpty:f.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ce}]},empty:{icon:oe,description:t(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsxs)(`div`,{className:j.chartArea,children:[(0,N.jsx)(`div`,{className:j.leaderboardPanel,children:(0,N.jsx)(le,{data:g,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:j.leaderboard})}),(0,N.jsx)(`div`,{className:j.geoChart,children:(0,N.jsx)(fe,{rows:h,mode:d,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function M({attributes:e={}}){let t=e?.geoGranularity??F,n=Object.prototype.hasOwnProperty.call(P,t)?t:F;return(0,N.jsx)(f,{attributes:e,children:(0,N.jsxs)(`div`,{className:j.root,children:[(0,N.jsx)(je,{geoGranularity:n}),(0,N.jsx)(pe,{children:(0,N.jsx)(v,{report:`locations`,section:P[n]})})]})})}var N,P,F,Me=e((()=>{he(),ae(),s(),n(),se(),De(),Ae(),N=i(),P={country:`countries`,region:`regions`,city:`cities`},F=`country`})),I,Ne=e((()=>{n(),c(),d(),I={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:p,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),L,R,z,B,V,Pe,Fe,Ie=e((()=>{L=`jpa/locations`,R=`Top locations`,z=`Where your visitors are viewing from — by country, region, or city.`,B={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`stats`,Pe=`framed`,Fe={name:L,title:R,description:z,help:B,category:V,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function H(e){return(0,W.jsx)(M,{attributes:Le(e)})}function U(e){return(0,W.jsx)(M,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function Re(e){return(0,W.jsx)(M,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(Se,{...n,widgetType:G,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var W,Be,G,Ve,K,q,J,Y,X,Z,Q,$,He;e((()=>{h(),_e(),ge(),Ce(),be(),_(),Te(),Ee(),Me(),Ne(),Ie(),W=i(),g(),we(),Be=`storybook/locations`,G=ve(Fe,I),Ve={title:`Packages/Premium Analytics/Widgets/Locations`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[b,y]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[b,y]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[b,y]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[b,y]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`loading`),()=>x(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`error`),()=>x(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`empty`),()=>x(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(ze,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral location
glyph and the "stats will appear here" copy).`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},He=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,He as __namedExportsOrder,Ve as default};