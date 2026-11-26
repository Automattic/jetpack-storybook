import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{_ as s,t as c}from"./src-CFLkDNMV.js";import{i as l,t as u}from"./src-DJ2NcAj-.js";import{Pn as d,Yn as ee,ct as te,p as f,t as p,un as m,ut as ne,vn as re}from"./src-CAeVry9S.js";import{Jt as h,R as g,W as ie,u as ae,wt as _}from"./charts-provider-BLx_AWUL.js";import{t as oe}from"./widget-state-DErObxxB.js";import{i as se}from"./with-story-router-MWDQDqlW.js";import{t as ce}from"./metric-value-BBFxSweR.js";import{n as le}from"./chart-tooltip-CGmSbSOI.js";import{t as ue}from"./stacked-area-chart-kZqHwjZE.js";import{n as de,r as fe}from"./register-report-mocks-DkiLvmPg.js";import{o as pe}from"./metric-tabs-chart-skeleton-D6aQAS_f.js";import{a as me,c as he,i as v,l as ge,o as _e,r as ve,s as ye,u as be}from"./with-widget-canvas-70fvrBgk.js";import{n as xe,t as Se}from"./register-stats-mocks-CutN0CmB.js";import{n as Ce,t as y}from"./force-stats-mock-state-C0AFQ1mu.js";var b,x,S,C,w,T,E,D,we=e((()=>{b=`_root_mppgz_1`,x=`_body_mppgz_9`,S=`_totals_mppgz_17`,C=`_total_mppgz_17`,w=`_label_mppgz_38`,T=`_share_mppgz_45`,E=`_chart_mppgz_50`,D={root:b,body:x,totals:S,total:C,label:w,share:T,chart:E}}));function Te(){return{human:i(`Human`,`jetpack-premium-analytics-pkg`),ai:i(`AI bots`,`jetpack-premium-analytics-pkg`),other:i(`Other bots`,`jetpack-premium-analytics-pkg`),blocked:i(`Blocked`,`jetpack-premium-analytics-pkg`)}}function Ee(e){let t=ee(e.from,e.to)<=k?`hour`:f(e.interval,re),n=(0,O.useMemo)(()=>({...e,period:t}),[e,t]),r=ne(n),{primary:i,timezone:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:d}=te(n),p=i.data,h=(0,O.useMemo)(()=>{let e=Te(),t=p?.summary,n=m.reduce((e,n)=>e+(t?.[n]??0),0);return m.map(r=>{let i=t?.[r]??0,o=(p?.data??[]).flatMap(e=>{let t=s(e.date_start,a),n=s(e.date_end,a);return t?[{date:t,endDate:n,value:e[r]}]:[]});return{key:r,label:e[r],total:i,share:n>0?i/n:null,series:{label:e[r],data:o,options:r===`blocked`?{stroke:A}:{}}}})},[p,a]),g=h.some(e=>e.total>0);return{sources:h,period:t,isLoading:o,isFetching:c,isError:l&&!p?.data.length,isEmpty:r||!o&&!g,isRangeTooLong:r,error:u,refetch:d}}var O,k,A,De=e((()=>{p(),c(),a(),O=t(n(),1),k=2,A=`var(--a8c-charts-color-trend-down)`}));function Oe({chartType:e}){let{reportParams:t}=ie(),{sources:n,period:a,isLoading:o,isFetching:s,isError:c,isEmpty:u,isRangeTooLong:d,error:ee,refetch:te}=Ee(t),f=(0,ke.useMemo)(()=>n.map(e=>e.series),[n]),p=ae(f);return(0,M.jsx)(`div`,{className:D.root,children:(0,M.jsx)(oe,{isLoading:o,isFetching:s,isError:c,isEmpty:u,error:h(ee,{retryDescription:i(`We couldn't load your requests. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:te}),empty:d?{description:i(`Requests are available for up to a year at a time. Choose a shorter period.`,`jetpack-premium-analytics-pkg`)}:void 0,children:(0,M.jsxs)(`div`,{className:D.body,children:[(0,M.jsx)(`ul`,{className:D.totals,children:n.map((t,n)=>(0,M.jsxs)(`li`,{className:D.total,children:[(0,M.jsxs)(`span`,{className:D.label,children:[(0,M.jsx)(le,{indicatorType:e===`bar`?`rect`:`line`,style:p[n]}),t.label]}),(0,M.jsx)(ce,{value:t.total,dataFormat:_,fontSize:`2xl`}),t.share!==null&&(0,M.jsx)(`span`,{className:D.share,children:r(i(`%s of requests`,`jetpack-premium-analytics-pkg`),l(t.share,`percentage`,{decimals:1,signDisplay:`never`}))})]},t.key))}),e===`bar`?(0,M.jsx)(pe,{className:D.chart,series:f,layout:`stacked`,dataFormat:_,tickResolution:a,showLegend:!1}):(0,M.jsx)(ue,{className:D.chart,series:f,dataFormat:_,tickResolution:a})]})})})}function j({attributes:e={},setError:t}){return(0,M.jsx)(g,{attributes:e,setError:t,children:(0,M.jsx)(Oe,{chartType:e?.chartType===`bar`?`bar`:`area`})})}var ke,M,Ae=e((()=>{u(),se(),a(),ke=t(n(),1),we(),De(),M=o()})),N,P,F,I,L,R,z,B,V,je=e((()=>{N=`ai-traffic/requests-by-source`,P=`jpa/people`,F=`Requests by source`,I=`See how many requests came from people, AI bots and other bots, and how many were blocked.`,L={content:`Every request your site received, split by who made it. These are requests, not views, so totals include bots and will be higher than the views in your Traffic tab.`},R=`traffic`,z=`framed`,B=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`area`,label:`Area chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],V={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z,attributes:B}}));function H(e){return(0,U.jsx)(j,{attributes:{reportParams:d(!1,e)}})}function Me(e){return(0,U.jsx)(j,{...e})}var U,Ne,W,Pe,Fe,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ge(),_e(),ve(),de(),Se(),Ce(),Ae(),je(),U=o(),fe(),xe(),Ne=`storybook/requests-by-source`,W=`stats/ua-queries`,Pe=me(V),Fe={title:`Packages/Premium Analytics/Widgets/RequestsBySource`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Requests by source" widget of the AI tab. Totals the requests the edge saw from people, AI bots and other bots, and those it blocked, and stacks them over the dashboard date range.`}}}},G={render:()=>H(`last-30-days`),decorators:[v]},K={render:()=>H(`today`),decorators:[v]},q={render:()=>(0,U.jsx)(j,{attributes:{reportParams:d(!1,`last-30-days`),chartType:`bar`}}),decorators:[v]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`loading`),()=>y(W,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`error`),()=>y(W,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`error-retryable`),()=>y(W,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`empty`),()=>y(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(he,{...e,widgetType:Pe,renderModule:Ne,renderComponent:Me,attributes:{reportParams:d(!1)}}),args:ye,argTypes:be},$=[`Default`,`Hourly`,`Bars`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-30-days'),
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('today'),
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`A window of two days or fewer is drawn by the hour.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RequestsBySourceRender attributes={{
    reportParams: getDefaultQueryParams(false, 'last-30-days'),
    chartType: 'bar'
  }} />,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The chart type setting swaps the stacked areas for stacked bars.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'loading');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'error');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'error-retryable');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'empty');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={RENDER_MODULE} renderComponent={DashboardRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false)
  }} />,
  args: DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
  argTypes: widgetDashboardWithWidgetArgTypes
}`,...Q.parameters?.docs?.source}}}}))();export{q as Bars,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,K as Hourly,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};