import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{$i as o,Gu as s,Nu as c,t as l}from"./build-module-zwSmKorH.js";import{mt as ee}from"./build-module-Cb539diK.js";import{At as u,M as d,Mt as te,b as ne,g as f,j as p,kt as re,r as ie,ut as ae}from"./hooks-DNZMHnxQ.js";import{t as oe}from"./geo-chart-D6iZy6A9.js";import{t as se}from"./types-BRp4aAtL.js";import{t as m,w as ce}from"./src-DFNM1k7F.js";import{t as h}from"./src-DyecqeLL.js";import{n as g,t as le}from"./src-70XJ1sgU.js";import{en as _,i as v,tt as y}from"./date-filters-panel-Cw3UGjzx.js";import"./constants-B1kGztHF.js";import{r as ue}from"./leaderboard-skeleton-BcaKdMjF.js";import{G as b,K as x,N as de,S,b as fe,w as pe}from"./report-metric-De-Z_6bt.js";import{t as me}from"./widget-state-BzKu7cft.js";import{C as he,D as ge,E as C,O as _e,S as ve,T as ye,b as be,k as w,t as xe,w as Se,x as T}from"./src-CtAUGKfD.js";import{n as Ce,t as we}from"./register-stats-mocks-Bn2dZJ6v.js";import{n as Te,t as E}from"./force-stats-mock-state-DTc5KGqE.js";var D,O,k,A,j,M,N,P,F,I,Ee=e((()=>{D=`_root_mw6wj_1`,O=`_backLink_mw6wj_9`,k=`_content_mw6wj_17`,A=`_bodyHeader_mw6wj_24`,j=`_stateArea_mw6wj_31`,M=`_chartArea_mw6wj_36`,N=`_leaderboardPanel_mw6wj_46`,P=`_leaderboard_mw6wj_46`,F=`_geoChart_mw6wj_62`,I={root:D,backLink:O,content:k,bodyHeader:A,stateArea:j,chartArea:M,leaderboardPanel:N,leaderboard:P,geoChart:F}}));function De(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:ee}=y({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(De).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&l,refetch:ee}}var ke=e((()=>{v()}));function Ae(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function je(e){let n=e.locations.slice(0,Pe),i=n.map(e=>`${e.label}: ${g(e.value)}`),a=e.locations.length-n.length;return a>0&&i.push(t(r(`…and %d more location`,`…and %d more locations`,a,`jetpack-premium-analytics-pkg`),a)),i.join(`<br />`)}function Me({geoGranularity:e}){let{reportParams:r}=ne(),[i,a]=(0,s.useState)(()=>new Set(z)),{drillDownItem:o,drillDown:c,resetDrillDown:l}=ie();(0,s.useEffect)(()=>{e!==`country`&&l()},[l,e]);let d=e===`country`?o:void 0,f=e===`country`&&d?`region`:e,{data:p,hasComparison:m,isLoading:h,isFetching:g,isError:le,refetch:_}=Oe({reportParams:r,max:10,geoMode:f,countryFilter:d?.code}),v=d?.code.toUpperCase(),y=f===`region`&&!!v&&!i.has(v),b=f===`region`&&d&&!y?d:void 0,x=f===`city`||f===`region`&&!d,S=(0,s.useMemo)(()=>{let e=new Map;return x?(p.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value,locations:[...r?.locations??[],t]})}),Array.from(e.entries())):[]},[p,x]),fe=(0,s.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!v&&y,r=!!v&&z.has(v);!n&&!r&&!t.includes(Ne)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(z.add(v),a(e=>{if(e.has(v))return e;let t=new Set(e);return t.add(v),t})))},[v,y]),he=(0,s.useMemo)(()=>{let e=[n(y?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(b){let t=b.code.toUpperCase(),n=p.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:Ae(t),f:b.name},n]]}if(x){let t=f===`region`;return[t?[...e,{type:`string`,role:se.tooltip,p:{html:!0}}]:e,...S.map(([e,n])=>{let r=[{v:Ae(e),f:n.countryFull},n.value];return t?[...r,je(n)]:r})]}return[e,...p.map(e=>[e.label,e.value])]},[S,p,b,f,x,y]),ge=(0,s.useMemo)(()=>{let e=u(p.map(e=>e.value),m?p.map(e=>e.previousValue):[]);return p.map(r=>{let i=ae(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...de({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:f===`country`&&o?{kind:`drillDown`,onClick:()=>c({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:re(r.value,e),previousShare:m&&a!==void 0?re(a,e):void 0,delta:m&&a!==void 0?te(r.value,a):void 0}})},[p,f,m,c]),C=d?(0,R.jsx)(pe,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:l,className:I.backLink}):null,_e=C?(0,R.jsx)(ee,{direction:`row`,align:`center`,className:I.bodyHeader,children:C}):null;return(0,R.jsxs)(`div`,{className:I.content,children:[_e,(0,R.jsx)(`div`,{className:I.stateArea,children:(0,R.jsx)(me,{isLoading:h,isFetching:g,isError:le,isEmpty:p.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:ce,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,R.jsxs)(`div`,{className:I.chartArea,children:[(0,R.jsx)(`div`,{className:I.leaderboardPanel,children:(0,R.jsx)(ue,{data:ge,withOverlayLabel:!0,withComparison:m,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:I.leaderboard})}),(0,R.jsx)(`div`,{className:I.geoChart,children:(0,R.jsx)(oe,{data:he,resizeDebounceTime:100,region:y?d?.code??`world`:`world`,resolution:y?`provinces`:`countries`,onError:fe})})]})})})]})}function L({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.prototype.hasOwnProperty.call(B,t)?t:V;return(0,R.jsx)(f,{attributes:e,children:(0,R.jsxs)(`div`,{className:I.root,children:[(0,R.jsx)(Me,{geoGranularity:n}),(0,R.jsx)(S,{children:(0,R.jsx)(fe,{report:`locations`,section:B[n]})})]})})}var R,Ne,z,B,V,Pe,Fe=e((()=>{xe(),le(),m(),c(),i(),h(),Ee(),ke(),R=a(),Ne=`Requested map does not exist`,z=new Set,B={country:`countries`,region:`regions`,city:`cities`},V=`country`,Pe=10})),Ie,Le=e((()=>{i(),l(),p(),Ie={icon:o,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:d,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Re,ze,Be,Ve,He,Ue,We,Ge=e((()=>{Re=`jpa/locations`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We={name:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue}}));function Ke({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:_(e)}}function H(e){return(0,W.jsx)(L,{attributes:Ke(e)})}function U(e){return(0,W.jsx)(L,{attributes:{geoGranularity:`country`,reportParams:_(!1,e)}})}function qe(e){return(0,W.jsx)(L,{...e})}function Je({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ye,{...n,widgetType:G,renderModule:Ye,renderComponent:qe,attributes:Ke({withComparison:e,geoGranularity:t})})}var W,Ye,G,Xe,K,q,J,Y,X,Z,Q,$,Ze;e((()=>{v(),C(),he(),_e(),be(),b(),we(),Te(),Fe(),Le(),Ge(),W=a(),x(),Ce(),Ye=`storybook/locations`,G=ve(We,Ie),Xe={title:`Packages/Premium Analytics/Widgets/Locations`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,w]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,w]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,w]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,w]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`loading`),()=>E(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`error`),()=>E(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`empty`),()=>E(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Je,{...e}),args:{...Se,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ze=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Ze as __namedExportsOrder,Xe as default};