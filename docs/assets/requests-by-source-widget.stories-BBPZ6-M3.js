import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{m as s,t as c}from"./src-CUJg-cBz.js";import{i as l,t as u}from"./src-CGjOx5jA.js";import{Kn as ee,at as te,hn as d,jn as f,p as ne,sn as re,st as ie,t as p}from"./src-DtAepqU0.js";import{H as m,I as h,Ut as ae,bt as g,c as oe}from"./charts-provider-DkedSwrU.js";import{t as se}from"./widget-state-BDhu7m0a.js";import{i as ce}from"./with-story-router-CzDy6ojP.js";import{t as le}from"./metric-value-CD-2f1o8.js";import{n as ue}from"./chart-tooltip-fe0E7UN-.js";import{t as de}from"./stacked-area-chart-DsZMvVEd.js";import{n as fe,r as pe}from"./register-report-mocks-lvHardrX.js";import{o as me}from"./metric-tabs-chart-skeleton-DI6usnnn.js";import{a as he,c as ge,i as _,l as _e,o as ve,r as ye,s as be,u as xe}from"./with-widget-canvas-CRasz-j_.js";import{n as Se,t as Ce}from"./register-stats-mocks-CutN0CmB.js";import{n as we,t as v}from"./force-stats-mock-state-BqPQTJdL.js";var y,b,x,S,C,w,T,E,Te=e((()=>{y=`_root_mppgz_1`,b=`_body_mppgz_9`,x=`_totals_mppgz_17`,S=`_total_mppgz_17`,C=`_label_mppgz_38`,w=`_share_mppgz_45`,T=`_chart_mppgz_50`,E={root:y,body:b,totals:x,total:S,label:C,share:w,chart:T}}));function Ee(){return{human:i(`Human`,`jetpack-premium-analytics-pkg`),ai:i(`AI bots`,`jetpack-premium-analytics-pkg`),other:i(`Other bots`,`jetpack-premium-analytics-pkg`),blocked:i(`Blocked`,`jetpack-premium-analytics-pkg`)}}function De(e){let t=ee(e.from,e.to)<=O?`hour`:ne(e.interval,d),n=(0,D.useMemo)(()=>({...e,period:t}),[e,t]),r=ie(n),{primary:i,timezone:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:f}=te(n),p=i.data,m=(0,D.useMemo)(()=>{let e=Ee(),t=p?.summary,n=re.reduce((e,n)=>e+(t?.[n]??0),0);return re.map(r=>{let i=t?.[r]??0,o=(p?.data??[]).flatMap(e=>{let t=s(e.date_start,a),n=s(e.date_end,a);return t?[{date:t,endDate:n,value:e[r]}]:[]});return{key:r,label:e[r],total:i,share:n>0?i/n:null,series:{label:e[r],data:o,options:r===`blocked`?{stroke:k}:{}}}})},[p,a]),h=m.some(e=>e.total>0);return{sources:m,period:t,isLoading:o,isFetching:c,isError:l&&!p?.data.length,isEmpty:r||!o&&!h,isRangeTooLong:r,error:u,refetch:f}}var D,O,k,Oe=e((()=>{p(),c(),a(),D=t(n(),1),O=2,k=`var(--a8c-charts-color-trend-down)`}));function ke({chartType:e}){let{reportParams:t}=m(),{sources:n,period:a,isLoading:o,isFetching:s,isError:c,isEmpty:u,isRangeTooLong:ee,error:te,refetch:d}=De(t),f=(0,j.useMemo)(()=>n.map(e=>e.series),[n]),ne=oe(f);return(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(se,{isLoading:o,isFetching:s,isError:c,isEmpty:u,error:ae(te,{retryDescription:i(`We couldn't load your requests. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:ee?{description:i(`Requests are available for up to a year at a time. Choose a shorter period.`,`jetpack-premium-analytics-pkg`)}:void 0,children:(0,M.jsxs)(`div`,{className:E.body,children:[(0,M.jsx)(`ul`,{className:E.totals,children:n.map((t,n)=>(0,M.jsxs)(`li`,{className:E.total,children:[(0,M.jsxs)(`span`,{className:E.label,children:[(0,M.jsx)(ue,{indicatorType:e===`bar`?`rect`:`line`,style:ne[n]}),t.label]}),(0,M.jsx)(le,{value:t.total,dataFormat:g,fontSize:`2xl`}),t.share!==null&&(0,M.jsx)(`span`,{className:E.share,children:r(i(`%s of requests`,`jetpack-premium-analytics-pkg`),l(t.share,`percentage`,{decimals:1,signDisplay:`never`}))})]},t.key))}),e===`bar`?(0,M.jsx)(me,{className:E.chart,series:f,layout:`stacked`,dataFormat:g,tickResolution:a,showLegend:!1}):(0,M.jsx)(de,{className:E.chart,series:f,dataFormat:g,tickResolution:a})]})})})}function A({attributes:e={},setError:t}){return(0,M.jsx)(h,{attributes:e,setError:t,children:(0,M.jsx)(ke,{chartType:e?.chartType===`bar`?`bar`:`area`})})}var j,M,Ae=e((()=>{u(),ce(),a(),j=t(n(),1),Te(),Oe(),M=o()})),N,P,F,I,L,R,z,B,V,je=e((()=>{N=`ai-traffic/requests-by-source`,P=`jpa/people`,F=`Requests by source`,I=`See how many requests came from people, AI bots and other bots, and how many were blocked.`,L={content:`Every request your site received, split by who made it. These are requests, not views, so totals include bots and will be higher than the views in your Traffic tab.`},R=`traffic`,z=`framed`,B=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`area`,label:`Area chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],V={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z,attributes:B}}));function H(e){return(0,U.jsx)(A,{attributes:{reportParams:f(!1,e)}})}function Me(e){return(0,U.jsx)(A,{...e})}var U,Ne,W,Pe,Fe,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),_e(),ve(),ye(),fe(),Ce(),we(),Ae(),je(),U=o(),pe(),Se(),Ne=`storybook/requests-by-source`,W=`stats/ua-queries`,Pe=he(V),Fe={title:`Packages/Premium Analytics/Widgets/RequestsBySource`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Requests by source" widget of the AI tab. Totals the requests the edge saw from people, AI bots and other bots, and those it blocked, and stacks them over the dashboard date range.`}}}},G={render:()=>H(`last-30-days`),decorators:[_]},K={render:()=>H(`today`),decorators:[_]},q={render:()=>(0,U.jsx)(A,{attributes:{reportParams:f(!1,`last-30-days`),chartType:`bar`}}),decorators:[_]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(W,`loading`),()=>v(W,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(W,`error`),()=>v(W,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(W,`error-retryable`),()=>v(W,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(v(W,`empty`),()=>v(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(ge,{...e,widgetType:Pe,renderModule:Ne,renderComponent:Me,attributes:{reportParams:f(!1)}}),args:be,argTypes:xe},$=[`Default`,`Hourly`,`Bars`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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