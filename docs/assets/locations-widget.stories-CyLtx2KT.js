import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Qi as s,n as c}from"./build-module-CDRs4YxF.js";import{sn as ee,t as l}from"./src-gZ7yfSll.js";import{$ as u,E as d,G as f,K as p,O as te,P as ne,rt as re,w as m}from"./report-metric-BSLTmmnQ.js";import{t as ie}from"./geo-chart-D4RDoQZE.js";import{S as ae,t as oe}from"./src-Cvyt29m2.js";import{r as se}from"./hooks-BLL4WBUU.js";import{Cn as h,Ft as g,H as ce,Tr as _,c as le,ct as ue,l as v,st as de,ut as fe}from"./chart-tooltip-BPaTXkrb.js";import{t as pe}from"./leaderboard-chart-DqtZc7Wk.js";import{t as me}from"./widget-state-B_6vBDdf.js";import{C as he,D as y,E as b,O as x,S,T as C,b as w,k as T,t as E,w as ge,x as D}from"./src-CScpZfjj.js";import{n as O,t as _e}from"./register-stats-mocks-bAg4W-08.js";import{n as ve,t as k}from"./force-stats-mock-state-W-YhApRV.js";var ye,be,xe,A,j,M,N,P,F,I,Se=e((()=>{ye=`_root_erick_1`,be=`_backLink_erick_9`,xe=`_content_erick_17`,A=`_bodyHeader_erick_25`,j=`_stateArea_erick_32`,M=`_chartArea_erick_38`,N=`_leaderboardPanel_erick_48`,P=`_leaderboard_erick_48`,F=`_geoChart_erick_64`,I={root:ye,backLink:be,content:xe,bodyHeader:A,stateArea:j,chartArea:M,leaderboardPanel:N,leaderboard:P,geoChart:F}}));function Ce(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function we({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:u,refetch:d}=h({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),f=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(Ce).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:p.length===0&&u,isPlaceholderData:f,refetch:d}}var Te=e((()=>{g()}));function Ee(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function De({max:e,geoGranularity:r}){let{reportParams:i}=re(),[o,s]=(0,a.useState)(()=>new Set(z)),{drillDownItem:c,drillDown:l,resetDrillDown:u}=se();(0,a.useEffect)(()=>{r!==`country`&&u()},[u,r]);let d=r===`country`?c:void 0,f=r===`country`&&d?`region`:r,{data:p,hasComparison:m,isLoading:oe,isFetching:h,isError:g,isPlaceholderData:_,refetch:le}=we({reportParams:i,max:e,geoMode:f,countryFilter:d?.code}),[v,he]=(0,a.useState)({geoMode:f,selectedCountry:d});(0,a.useEffect)(()=>{_||he({geoMode:f,selectedCountry:d})},[d,f,_]);let y=_?v.geoMode:f,b=_?v.selectedCountry:d,x=b?.code.toUpperCase(),S=y===`region`&&!!x&&!o.has(x),C=y===`region`&&b&&!S?b:void 0,w=y===`city`||y===`region`&&!b,T=(0,a.useMemo)(()=>{let e=new Map;return w?(p.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[p,w]),E=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!x&&S,r=!!x&&z.has(x);!n&&!r&&!t.includes(Oe)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(z.add(x),s(e=>{if(e.has(x))return e;let t=new Set(e);return t.add(x),t})))},[x,S]),ge=(0,a.useMemo)(()=>{let e=[n(S?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(C){let t=C.code.toUpperCase(),n=p.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:Ee(t),f:C.name},n]]}return w?[e,...T.map(([e,t])=>[{v:Ee(e),f:t.countryFull},t.value])]:[e,...p.map(e=>[e.label,e.value])]},[T,p,C,w,S]),D=(0,a.useMemo)(()=>{let e=ue(p.map(e=>e.value),m?p.map(e=>e.previousValue):[]);return p.map(r=>{let i=ce(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...ne({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:y===`country`&&o?{kind:`drillDown`,onClick:()=>l({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:de(r.value,e),previousShare:m&&a!==void 0?de(a,e):void 0,delta:m&&a!==void 0?fe(r.value,a):void 0}})},[p,y,m,l]),O=b?(0,R.jsx)(te,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:u,className:I.backLink}):null,_e=O?(0,R.jsx)(ee,{direction:`row`,align:`center`,className:I.bodyHeader,children:O}):null;return(0,R.jsxs)(`div`,{className:I.content,children:[_e,(0,R.jsx)(`div`,{className:I.stateArea,children:(0,R.jsx)(me,{isLoading:oe,isFetching:h,isError:g,isEmpty:p.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},empty:{icon:ae,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,R.jsxs)(`div`,{className:I.chartArea,children:[(0,R.jsx)(`div`,{className:I.leaderboardPanel,children:(0,R.jsx)(pe,{data:D,withOverlayLabel:!0,withComparison:m,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:I.leaderboard})}),(0,R.jsx)(`div`,{className:I.geoChart,children:(0,R.jsx)(ie,{data:ge,resizeDebounceTime:100,region:S?b?.code??`world`:`world`,resolution:S?`provinces`:`countries`,onError:E})})]})})})]})}function L({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??V,r=Object.prototype.hasOwnProperty.call(B,n)?n:V;return(0,R.jsx)(u,{attributes:e,children:(0,R.jsxs)(`div`,{className:I.root,children:[(0,R.jsx)(De,{max:t,geoGranularity:r}),(0,R.jsx)(d,{children:(0,R.jsx)(m,{report:`locations`,section:B[r]})})]})})}var R,Oe,z,B,V,ke=e((()=>{E(),oe(),o(),r(),l(),Se(),Te(),R=i(),Oe=`Requested map does not exist`,z=new Set,B={country:`countries`,region:`regions`,city:`cities`},V=`country`})),Ae,je=e((()=>{r(),c(),le(),Ae={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:v,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze=e((()=>{Me=`jpa/locations`,Ne=`Top locations`,Pe=`Where your visitors are viewing from — by country, region, or city.`,Fe={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ie=`stats`,Le=`framed`,Re={name:Me,title:Ne,description:Pe,help:Fe,category:Ie,presentation:Le}}));function Be({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:_(e)}}function H(e){return(0,W.jsx)(L,{attributes:Be(e)})}function U(e){return(0,W.jsx)(L,{attributes:{geoGranularity:`country`,max:10,reportParams:_(!1,e)}})}function Ve(e){return(0,W.jsx)(L,{...e})}function He({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(C,{...n,widgetType:We,renderModule:Ue,renderComponent:Ve,attributes:Be({withComparison:e,geoGranularity:t})})}var W,Ue,We,G,K,q,J,Y,X,Z,Q,$,Ge;e((()=>{g(),b(),he(),x(),w(),f(),_e(),ve(),ke(),je(),ze(),W=i(),p(),O(),Ue=`storybook/locations`,We=S(Re,Ae),G={title:`Packages/Premium Analytics/Widgets/Locations`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,T]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,T]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,T]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,T]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,T],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,T],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,T],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(He,{...e}),args:{...ge,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ge=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Ge as __namedExportsOrder,G as default};