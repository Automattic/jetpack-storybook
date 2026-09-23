import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l}from"./build-module-l8c-_EUg2.js";import{Yt as u,_n as d,hn as ee,m as f,mn as te,r as ne,v as re}from"./hooks-BUZ9Zoks.js";import{t as p,w as ie}from"./src-C-E2d-Lb.js";import{t as m}from"./src-BVc__o-w.js";import{$t as h,et as g,t as _}from"./src-Wxkln24X.js";import"./constants-B1kGztHF.js";import{r as ae}from"./leaderboard-skeleton-z3sFb1Mg.js";import{i as oe,r as se}from"./register-report-mocks-CqoR1wHP.js";import{D as ce,S as le,j as ue,v,w as de}from"./report-metric-DXCWiM-I.js";import{t as fe}from"./widget-state-CxKn5D7s.js";import{t as pe}from"./src-u1EzvIeu.js";import{a as me,d as he,f as ge,h as y,i as _e,m as ve,n as ye,p as be,r as b,u as xe}from"./with-widget-canvas-BUM4SWZO.js";import{n as Se,t as Ce}from"./register-stats-mocks-CA8076M4.js";import{n as we,t as x}from"./force-stats-mock-state-CSHxnvOu.js";var S,C,w,T,E,D,O,k,A,j,Te=e((()=>{S=`_root_mw6wj_1`,C=`_backLink_mw6wj_9`,w=`_content_mw6wj_17`,T=`_bodyHeader_mw6wj_24`,E=`_stateArea_mw6wj_31`,D=`_chartArea_mw6wj_36`,O=`_leaderboardPanel_mw6wj_46`,k=`_leaderboard_mw6wj_46`,A=`_geoChart_mw6wj_62`,j={root:S,backLink:C,content:w,bodyHeader:T,stateArea:E,chartArea:D,leaderboardPanel:O,leaderboard:k,geoChart:A}}));function Ee(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function De({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=g({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(Ee).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var Oe=e((()=>{_()}));function ke({geoGranularity:e}){let{reportParams:n}=re(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ne();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,f=e===`country`&&c?`region`:e,{data:p,hasComparison:m,isLoading:h,isFetching:g,isError:_,refetch:oe}=De({reportParams:n,max:10,geoMode:f,countryFilter:c?.code}),se=(0,a.useMemo)(()=>p.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[p]),le=(0,a.useMemo)(()=>{let e=ee(p.map(e=>e.value),m?p.map(e=>e.previousValue):[]);return p.map(n=>{let i=u(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...ue({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:f===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:te(n.value,e),previousShare:m&&a!==void 0?te(a,e):void 0,delta:m&&a!==void 0?d(n.value,a):void 0}})},[p,f,m,o]),v=c?(0,N.jsx)(de,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:j.backLink}):null,pe=v?(0,N.jsx)(l,{direction:`row`,align:`center`,className:j.bodyHeader,children:v}):null;return(0,N.jsxs)(`div`,{className:j.content,children:[pe,(0,N.jsx)(`div`,{className:j.stateArea,children:(0,N.jsx)(fe,{isLoading:h,isFetching:g,isError:_,isEmpty:p.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:oe}]},empty:{icon:ie,description:t(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsxs)(`div`,{className:j.chartArea,children:[(0,N.jsx)(`div`,{className:j.leaderboardPanel,children:(0,N.jsx)(ae,{data:le,withOverlayLabel:!0,withComparison:m,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:j.leaderboard})}),(0,N.jsx)(`div`,{className:j.geoChart,children:(0,N.jsx)(ce,{rows:se,mode:f,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function M({attributes:e={}}){let t=e?.geoGranularity??F,n=Object.prototype.hasOwnProperty.call(P,t)?t:F;return(0,N.jsx)(f,{attributes:e,children:(0,N.jsxs)(`div`,{className:j.root,children:[(0,N.jsx)(ke,{geoGranularity:n}),(0,N.jsx)(le,{children:(0,N.jsx)(v,{report:`locations`,section:P[n]})})]})})}var N,P,F,Ae=e((()=>{pe(),p(),s(),n(),m(),Te(),Oe(),N=i(),P={country:`countries`,region:`regions`,city:`cities`},F=`country`})),I,je=e((()=>{n(),c(),I={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),L,R,z,B,Me,Ne,Pe,Fe=e((()=>{L=`jpa/locations`,R=`Top locations`,z=`Where your visitors are viewing from — by country, region, or city.`,B={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Me=`stats`,Ne=`framed`,Pe={name:L,title:R,description:z,help:B,category:Me,presentation:Ne}}));function V({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:h(e)}}function H(e){return(0,W.jsx)(M,{attributes:V(e)})}function U(e){return(0,W.jsx)(M,{attributes:{geoGranularity:`country`,reportParams:h(!1,e)}})}function Ie(e){return(0,W.jsx)(M,{...e})}function Le({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(he,{...n,widgetType:ze,renderModule:Re,renderComponent:Ie,attributes:V({withComparison:e,geoGranularity:t})})}var W,Re,ze,Be,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ge(),me(),ve(),ye(),se(),Ce(),we(),Ae(),je(),Fe(),W=i(),oe(),Se(),Re=`storybook/locations`,ze=_e(Pe,I),Be={title:`Packages/Premium Analytics/Widgets/Locations`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[b,y]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[b,y]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[b,y]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[b,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`loading`),()=>x(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`error`),()=>x(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[b,y],beforeEach:()=>(x(`stats/location-views`,`empty`),()=>x(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Le,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...be,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral location
glyph and the "stats will appear here" copy).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Be as default};