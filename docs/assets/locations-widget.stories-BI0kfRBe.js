import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l}from"./build-module-CfSFqaK72.js";import{m as u,r as d,v as ee}from"./hooks-CoUkEpLe.js";import{t as f}from"./src-1TVG6j2F.js";import{$t as p,et as m,t as h}from"./src-CNr7Vz18.js";import{Dt as te,Et as g,kt as ne,st as re}from"./helpers-DsLddrcW.js";import"./constants-B1kGztHF.js";import{r as ie}from"./leaderboard-skeleton-DYzIvhni.js";import{i as ae,r as oe}from"./register-report-mocks-Bu5BhXrU.js";import{D as se,S as ce,j as le,v as ue,w as de}from"./report-metric-CQTkHkU7.js";import{t as fe}from"./widget-state-CsD67qiG.js";import{t as _}from"./src-DW9UFJqJ.js";import{a as v,d as pe,f as me,h as y,i as he,m as ge,n as _e,p as ve,r as b,u as ye}from"./with-widget-canvas-CVG5Pk5E.js";import{n as be,t as xe}from"./register-stats-mocks-DQRKD_-4.js";import{n as Se,t as x}from"./force-stats-mock-state-CIRQbR0B.js";var S,C,w,T,E,D,O,k,A,j,Ce=e((()=>{S=`_root_mw6wj_1`,C=`_backLink_mw6wj_9`,w=`_content_mw6wj_17`,T=`_bodyHeader_mw6wj_24`,E=`_stateArea_mw6wj_31`,D=`_chartArea_mw6wj_36`,O=`_leaderboardPanel_mw6wj_46`,k=`_leaderboard_mw6wj_46`,A=`_geoChart_mw6wj_62`,j={root:S,backLink:C,content:w,bodyHeader:T,stateArea:E,chartArea:D,leaderboardPanel:O,leaderboard:k,geoChart:A}}));function we(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Te({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=m({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(we).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var Ee=e((()=>{h()}));function De({geoGranularity:e}){let{reportParams:n}=ee(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=d();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,u=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:m,isFetching:h,isError:ae,refetch:oe}=Te({reportParams:n,max:10,geoMode:u,countryFilter:c?.code}),ce=(0,a.useMemo)(()=>f.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[f]),ue=(0,a.useMemo)(()=>{let e=te(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(n=>{let i=re(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...le({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:u===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:g(n.value,e),previousShare:p&&a!==void 0?g(a,e):void 0,delta:p&&a!==void 0?ne(n.value,a):void 0}})},[f,u,p,o]),_=c?(0,N.jsx)(de,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:j.backLink}):null,v=_?(0,N.jsx)(l,{direction:`row`,align:`center`,className:j.bodyHeader,children:_}):null;return(0,N.jsxs)(`div`,{className:j.content,children:[v,(0,N.jsx)(`div`,{className:j.stateArea,children:(0,N.jsx)(fe,{isLoading:m,isFetching:h,isError:ae,isEmpty:f.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:oe}]},children:(0,N.jsxs)(`div`,{className:j.chartArea,children:[(0,N.jsx)(`div`,{className:j.leaderboardPanel,children:(0,N.jsx)(ie,{data:ue,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:j.leaderboard})}),(0,N.jsx)(`div`,{className:j.geoChart,children:(0,N.jsx)(se,{rows:ce,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function M({attributes:e={}}){let t=e?.geoGranularity??F,n=Object.prototype.hasOwnProperty.call(P,t)?t:F;return(0,N.jsx)(u,{attributes:e,children:(0,N.jsxs)(`div`,{className:j.root,children:[(0,N.jsx)(De,{geoGranularity:n}),(0,N.jsx)(ce,{children:(0,N.jsx)(ue,{report:`locations`,section:P[n]})})]})})}var N,P,F,Oe=e((()=>{_(),s(),n(),f(),Ce(),Ee(),N=i(),P={country:`countries`,region:`regions`,city:`cities`},F=`country`})),I,ke=e((()=>{n(),c(),I={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),L,R,z,B,V,H,Ae,je=e((()=>{L=`jpa/locations`,R=`Top locations`,z=`Where your visitors are viewing from — by country, region, or city.`,B={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`stats`,H=`framed`,Ae={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function Me({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function U(e){return(0,G.jsx)(M,{attributes:Me(e)})}function W(e){return(0,G.jsx)(M,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Ne(e){return(0,G.jsx)(M,{...e})}function Pe({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(pe,{...n,widgetType:Ie,renderModule:Fe,renderComponent:Ne,attributes:Me({withComparison:e,geoGranularity:t})})}var G,Fe,Ie,Le,K,q,J,Y,X,Z,Q,$,Re;e((()=>{h(),me(),v(),ge(),_e(),oe(),xe(),Se(),Oe(),ke(),je(),G=i(),ae(),be(),Fe=`storybook/locations`,Ie=he(Ae,I),Le={title:`Packages/Premium Analytics/Widgets/Locations`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[b,y]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[b,y]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[b,y]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[b,y]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`loading`),()=>x(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`error`),()=>x(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`empty`),()=>x(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Pe,{...e}),args:{...ye,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Re=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Re as __namedExportsOrder,Le as default};