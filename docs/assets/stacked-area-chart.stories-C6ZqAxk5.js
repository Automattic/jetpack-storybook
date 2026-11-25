import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./clsx-DtTNkXd0.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Kn as o}from"./build-module-vwO17YW3.js";import{yt as s}from"./chart-scope-CBu9nYZr.js";import{t as c}from"./area-chart-8AT-PLtT.js";import{t as l}from"./src-ploW-8yJ.js";import{$t as u,J as d,Q as f,Zt as p,c as m,et as h,q as g,s as _,tn as v,tt as y}from"./charts-provider-fEgqAkG9.js";import{n as b,t as x}from"./with-chart-theme-g9gtwTcl.js";import{t as S}from"./constants-zhlAM2wx.js";import{t as C}from"./dated-tooltip-jgRCQ0Rs.js";import{n as w,t as T}from"./chart-tooltip-TobEfcK6.js";var E,D,O,k=e((()=>{E=`_chart_1ictj_1`,D=`_chartContent_1ictj_6`,O={chart:E,chartContent:D}}));function A({series:e,className:t,chartTitle:n,dataFormat:r,tickResolution:a,compactWhenShort:l=!1}){let f=d(n),g=h(a),{displayResolution:_}=s(e,g),b=m(e),x=(0,j.useCallback)(e=>y(e,_,a),[_,a]),S=(0,j.useCallback)(t=>{let n=w({tooltipData:t.tooltipData,series:e,seriesStyles:b,dataFormat:r,formatDate:x});return n&&(0,M.jsx)(C,{model:n,indicatorType:`line`})},[r,b,e,x]),T=(0,j.useMemo)(()=>v(e),[e]),E=r.options?.currencyCode,D=(0,j.useMemo)(()=>({...T?{yScale:{domain:u(r.type)}}:{},axis:{x:{tickResolution:g},y:{tickFormat:p(r.type,void 0,E)}}}),[g,r.type,E,T]);return(0,M.jsx)(o,{direction:`column`,className:i(O.chart,t),children:(0,M.jsx)(c,{ariaLabel:f,className:O.chartContent,data:e,options:D,maxWidth:1/0,compactWhenShort:l,resizeDebounceTime:50,stacked:!0,rescaleYOnVisibilityChange:!1,fillOpacity:N,withStroke:!0,curveType:`monotone`,showLegend:!1,withTooltips:!T,renderTooltip:S})})}var j,M,N,P=e((()=>{l(),r(),j=t(n(),1),S(),f(),g(),_(),T(),k(),M=a(),N=.25})),F,I,L,R,z,B,V,H,U,W;e((()=>{x(),P(),F=a(),I={title:`Packages/Premium Analytics/Widgets Toolkit/Components/StackedAreaChart`,component:A,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[b,e=>(0,F.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,F.jsx)(e,{})})]},L=Array.from({length:7},(e,t)=>new Date(2026,6,t+1)),R=Array.from({length:24},(e,t)=>new Date(2026,6,1,t)),z=(e,t,n,r)=>({label:e,...r&&{options:{stroke:r}},data:t.map((e,t)=>({date:e,value:n(t)}))}),B=[z(`Human`,L,e=>5200+e*310),z(`AI bots`,L,e=>1400+e%3*220),z(`Other bots`,L,e=>900+e%2*180),z(`Blocked`,L,e=>240+e*15,`#d63638`)],V={args:{series:B,dataFormat:{type:`number`},tickResolution:`day`}},H={args:{series:[z(`Human`,R,e=>180+Math.round(120*Math.sin(e/4)**2)),z(`AI bots`,R,e=>40+e%5*9),z(`Other bots`,R,e=>30+e%4*6)],dataFormat:{type:`number`},tickResolution:`hour`}},U={decorators:[e=>(0,F.jsx)(`div`,{style:{width:`100%`,height:`120px`},children:(0,F.jsx)(e,{})})],args:{series:B,dataFormat:{type:`number`},tickResolution:`day`,compactWhenShort:!0}},W=[`Default`,`Hourly`,`Sparkline`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    series: dailySeries,
    dataFormat: {
      type: 'number'
    },
    tickResolution: 'day'
  }
}`,...V.parameters?.docs?.source},description:{story:`Default: four parts of one total, by the day. The y-axis tops out at the stack's total.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    series: [part('Human', hours, index => 180 + Math.round(120 * Math.sin(index / 4) ** 2)), part('AI bots', hours, index => 40 + index % 5 * 9), part('Other bots', hours, index => 30 + index % 4 * 6)],
    dataFormat: {
      type: 'number'
    },
    tickResolution: 'hour'
  }
}`,...H.parameters?.docs?.source},description:{story:`Hourly: one day by the hour, with times on the axis and in the tooltip.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    height: '120px'
  }}>
                <Story />
            </div>],
  args: {
    series: dailySeries,
    dataFormat: {
      type: 'number'
    },
    tickResolution: 'day',
    compactWhenShort: true
  }
}`,...U.parameters?.docs?.source},description:{story:`Sparkline: how the chart degrades on a tile too short for its axes.`,...U.parameters?.docs?.description}}}}))();export{V as Default,H as Hourly,U as Sparkline,W as __namedExportsOrder,I as default};