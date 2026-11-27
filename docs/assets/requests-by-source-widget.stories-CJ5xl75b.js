import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{_ as s,t as c}from"./src-CFLkDNMV.js";import{i as l,t as u}from"./src-D0IZ3Tm7.js";import{In as d,Zn as ee,bn as te,ct as f,p,t as m,un as h,ut as ne}from"./src-l1BVQSEn.js";import{Jt as g,R as _,W as re,u as ie,wt as v}from"./charts-provider-CztY3Jeb.js";import{t as ae}from"./widget-state-CqPm5upe.js";import{i as oe}from"./with-story-router-B4g1hwKi.js";import{t as se}from"./metric-value-B4sEOfTs.js";import{n as ce}from"./chart-tooltip-BnrRYAp5.js";import{t as le}from"./stacked-area-chart-CpbQRaKs.js";import{n as ue,r as de}from"./register-report-mocks-CDOnqFid.js";import{o as fe}from"./metric-tabs-chart-skeleton-B8pkrxfR.js";import{a as pe,c as me,i as y,l as he,o as ge,r as _e,s as ve,u as ye}from"./with-widget-canvas-6h2CritM.js";import{n as be,t as xe}from"./register-stats-mocks-CutN0CmB.js";import{n as Se,t as b}from"./force-stats-mock-state-B1gYIcKs.js";var x,S,C,w,T,E,D,O,Ce=e((()=>{x=`_root_mppgz_1`,S=`_body_mppgz_9`,C=`_totals_mppgz_17`,w=`_total_mppgz_17`,T=`_label_mppgz_38`,E=`_share_mppgz_45`,D=`_chart_mppgz_50`,O={root:x,body:S,totals:C,total:w,label:T,share:E,chart:D}}));function we(){return{human:i(`Human`,`jetpack-premium-analytics-pkg`),ai:i(`AI bots`,`jetpack-premium-analytics-pkg`),other:i(`Other bots`,`jetpack-premium-analytics-pkg`),blocked:i(`Blocked`,`jetpack-premium-analytics-pkg`)}}function Te(e){let t=ee(e.from,e.to)<=A?`hour`:p(e.interval,te),n=(0,k.useMemo)(()=>({...e,period:t}),[e,t]),r=ne(n),{primary:i,timezone:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:d}=f(n),m=i.data,g=(0,k.useMemo)(()=>{let e=we(),t=m?.summary,n=h.reduce((e,n)=>e+(t?.[n]??0),0);return h.map(r=>{let i=t?.[r]??0,o=(m?.data??[]).flatMap(e=>{let t=s(e.date_start,a),n=s(e.date_end,a);return t?[{date:t,endDate:n,value:e[r]}]:[]});return{key:r,label:e[r],total:i,share:n>0?i/n:null,series:{label:e[r],data:o,options:r===`blocked`?{stroke:j}:{}}}})},[m,a]),_=g.some(e=>e.total>0);return{sources:g,period:t,isLoading:o,isFetching:c,isError:l&&!m?.data.length,isEmpty:r||!o&&!_,isRangeTooLong:r,error:u,refetch:d}}var k,A,j,Ee=e((()=>{m(),c(),a(),k=t(n(),1),A=2,j=`var(--a8c-charts-color-trend-down)`}));function De({chartType:e}){let{reportParams:t}=re(),{sources:n,period:a,isLoading:o,isFetching:s,isError:c,isEmpty:u,isRangeTooLong:d,error:ee,refetch:te}=Te(t),f=(0,Oe.useMemo)(()=>n.map(e=>e.series),[n]),p=ie(f);return(0,N.jsx)(`div`,{className:O.root,children:(0,N.jsx)(ae,{isLoading:o,isFetching:s,isError:c,isEmpty:u,error:g(ee,{retryDescription:i(`We couldn't load your requests. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:te}),empty:d?{description:i(`Requests are available for up to a year at a time. Choose a shorter period.`,`jetpack-premium-analytics-pkg`)}:void 0,children:(0,N.jsxs)(`div`,{className:O.body,children:[(0,N.jsx)(`ul`,{className:O.totals,children:n.map((t,n)=>(0,N.jsxs)(`li`,{className:O.total,children:[(0,N.jsxs)(`span`,{className:O.label,children:[(0,N.jsx)(ce,{indicatorType:e===`bar`?`rect`:`line`,style:p[n]}),t.label]}),(0,N.jsx)(se,{value:t.total,dataFormat:v,fontSize:`2xl`}),t.share!==null&&(0,N.jsx)(`span`,{className:O.share,children:r(i(`%s of requests`,`jetpack-premium-analytics-pkg`),l(t.share,`percentage`,{decimals:1,signDisplay:`never`}))})]},t.key))}),e===`bar`?(0,N.jsx)(fe,{className:O.chart,series:f,layout:`stacked`,dataFormat:v,tickResolution:a,showLegend:!1}):(0,N.jsx)(le,{className:O.chart,series:f,dataFormat:v,tickResolution:a})]})})})}function M({attributes:e={},setError:t}){return(0,N.jsx)(_,{attributes:e,setError:t,children:(0,N.jsx)(De,{chartType:e?.chartType===`bar`?`bar`:`area`})})}var Oe,N,ke=e((()=>{u(),oe(),a(),Oe=t(n(),1),Ce(),Ee(),N=o()})),P,F,I,L,R,z,B,V,H,Ae=e((()=>{P=`ai-traffic/requests-by-source`,F=`jpa/people`,I=`Requests by source`,L=`See how many requests came from people, AI bots and other bots, and how many were blocked.`,R={content:`Every request your site received, split by who made it. These are requests, not views, so totals include bots and will be higher than the views in your Traffic tab.`},z=`traffic`,B=`framed`,V=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`area`,label:`Area chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function U(e){return(0,W.jsx)(M,{attributes:{reportParams:d(!1,e)}})}function je(e){return(0,W.jsx)(M,{...e})}var W,Me,G,Ne,Pe,K,q,J,Y,X,Z,Q,$,Fe;e((()=>{m(),he(),ge(),_e(),ue(),xe(),Se(),ke(),Ae(),W=o(),de(),be(),Me=`storybook/requests-by-source`,G=`stats/ua-queries`,Ne=pe(H),Pe={title:`Packages/Premium Analytics/Widgets/RequestsBySource`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Requests by source" widget of the AI tab. Totals the requests the edge saw from people, AI bots and other bots, and those it blocked, and stacks them over the dashboard date range.`}}}},K={render:()=>U(`last-30-days`),decorators:[y]},q={render:()=>U(`today`),decorators:[y]},J={render:()=>(0,W.jsx)(M,{attributes:{reportParams:d(!1,`last-30-days`),chartType:`bar`}}),decorators:[y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(G,`loading`),()=>b(G,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(G,`error`),()=>b(G,null))},Z={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(G,`error-retryable`),()=>b(G,null))},Q={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(G,`empty`),()=>b(G,null))},$={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(me,{...e,widgetType:Ne,renderModule:Me,renderComponent:je,attributes:{reportParams:d(!1)}}),args:ve,argTypes:ye},Fe=[`Default`,`Hourly`,`Bars`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-30-days'),
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('today'),
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`A window of two days or fewer is drawn by the hour.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RequestsBySourceRender attributes={{
    reportParams: getDefaultQueryParams(false, 'last-30-days'),
    chartType: 'bar'
  }} />,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The chart type setting swaps the stacked areas for stacked bars.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'loading');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'error');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'error-retryable');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'empty');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={RENDER_MODULE} renderComponent={DashboardRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false)
  }} />,
  args: DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
  argTypes: widgetDashboardWithWidgetArgTypes
}`,...$.parameters?.docs?.source}}}}))();export{J as Bars,K as Default,Q as Empty,X as Error,Z as ErrorRetryable,q as Hourly,Y as Loading,$ as WidgetDashboardWithWidget,Fe as __namedExportsOrder,Pe as default};