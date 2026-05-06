import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-BvSGibSh.js";import{Hn as l,Jm as u,Mh as d,Wn as f,Xm as p,Ym as m,Zm as ee,qm as h}from"./iframe-a3w8-EdC.js";import{A as te,_ as ne,a as re,d as ie,f as ae,g as oe,h as se,i as ce,m as le,n as ue,p as de,r as fe,t as g,y as pe}from"./providers-MDsPuesa.js";import{a as me,d as he,f as ge,i as _e,o as ve,t as ye,u as be,w as xe}from"./esm-BwLtigq9.js";import{a as Se,c as Ce,i as we,o as Te,s as Ee}from"./line-chart-D9bdz4S8.js";import{n as De,r as Oe,t as ke}from"./legend-config-tJy46Dt1.js";import{n as _,t as Ae}from"./tooltip-config-DU_WVmuX.js";import{b as je,c as Me,y as v}from"./sample-data-BfcHm5eo.js";import{t as y}from"./stories-CiSZGtzZ.js";import{c as Ne,d as Pe,i as Fe,l as Ie,n as Le,p as Re,r as ze,s as Be,t as Ve}from"./chart-layout-ChigIQg0.js";import{n as He,r as Ue,t as We}from"./tooltip-C2tZu3b2.js";import{n as Ge,t as b}from"./svg-empty-state-BMTrQmPY.js";import{n as Ke,t as qe}from"./with-responsive-D4bpwg0h.js";import{t as Je}from"./line-chart-BZeqvfEF.js";var Ye,x,Xe=e((()=>{Ye=`_rise_sezj1_1`,x={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:Ye}})),Ze,S=e((()=>{p(),Ze=e=>!e?.length||e.some(e=>!e.data?.length)?ee(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?ee(`Invalid data`,`jetpack-charts`):null})),C,w,Qe,$e,T=e((()=>{ye(),C=t(d(),1),w=h(),Qe=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,C.useContext)(xe);return(0,C.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},$e=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,C.useContext)(xe),o=(0,C.useContext)(be),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let d=Number(s(u.date));if(!Number.isFinite(d))return null;let f=u.date.getTime(),p=0,m=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===f),o=e?.value??0;if(t&&(p+=o),!e||e.value==null)continue;let s=Number(c(t?p:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});m.push((0,w.jsx)(`circle`,{cx:d,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return m.length===0?null:(0,w.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:m})}})),E=e((()=>{S(),T()})),D,O,et,k,A,tt=e((()=>{f(),ye(),p(),m(),D=t(d(),1),Be(),We(),ce(),g(),pe(),Je(),ze(),Ve(),Pe(),b(),Ce(),qe(),Xe(),E(),O=h(),et=(0,D.forwardRef)(({data:e,chartId:t,width:n,height:r,className:i,margin:a,withTooltips:o=!0,withTooltipCrosshairs:s,showLegend:c=!1,legend:d={},stacked:f=!0,stackOffset:p=`none`,smoothing:m=!0,curveType:h,fillOpacity:te,withStroke:ne,renderTooltip:oe=we,animation:ce,options:g={},onPointerDown:pe,onPointerUp:ye,onPointerMove:be,onPointerOut:xe,children:Ce,gridVisibility:De,gap:Oe=`md`},ke)=>{let _=d.interactive??!1,Ae=d.shape??`rect`,je=d.position??`bottom`,Me=ue(),v=de(e),y=le(t),Pe=(0,D.useRef)(null),[ze,Be]=(0,D.useState)(void 0),[Ve,We]=(0,D.useState)(!1),b=(0,D.useRef)(null),{legendChildren:Ke,nonLegendChildren:qe}=Fe(Ce,`AreaChart`),[Je,Ye]=(0,D.useState)(),Xe=(0,D.useCallback)(e=>{Ye(e>0?e:r)},[r]);(0,D.useImperativeHandle)(ke,()=>({getScales:()=>b.current?.getScales()||null,getChartDimensions:()=>b.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[b]);let S=ae(e),{getElementStyles:C,isSeriesVisible:w}=se(),T=(0,D.useMemo)(()=>!y||!_?S.map((e,t)=>({series:e,index:t,isVisible:!0})):S.map((e,t)=>({series:e,index:t,isVisible:w(y,e.label)})),[S,y,w,_]),E=(0,D.useMemo)(()=>T.every(({isVisible:e})=>!e),[T]),{tooltipRef:et,onChartFocus:k,onChartBlur:A,onChartKeyDown:tt}=Ue({selectedIndex:ze,setSelectedIndex:Be,isNavigating:Ve,setIsNavigating:We,chartRef:Pe,totalPoints:S[0]?.data.length||0}),j=(0,D.useMemo)(()=>{let e=g?.axis?.x?.tickFormat||Te(S);return{axis:{x:{orientation:`bottom`,numTicks:Ee(S,n,e),tickFormat:e,display:!0,...g?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:l,display:!0,...g?.axis?.y}},xScale:{type:`time`,...g?.xScale},yScale:{type:`linear`,nice:!0,zero:f,...g?.yScale}}},[g,S,n,f]),M=ie(r,j,S,v),nt=Ze(S),rt=!nt;fe({chartId:y,legendItems:Ne(S,(0,D.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),Ae),chartType:`area`,isDataValid:rt,metadata:(0,D.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:m,curveType:h}),[f,p,m,h])});let N=re(),P={xAccessor:e=>e?.date,yAccessor:e=>e?.value},F=te??(f?.85:.4),I=ne??!f;if(nt)return(0,O.jsx)(`div`,{className:u(`area-chart`,x[`area-chart`]),children:nt});let L=c&&(0,O.jsx)(Ie,{orientation:d.orientation??`horizontal`,alignment:d.alignment??`center`,position:je,labelStyles:d.labelStyles,itemClassName:d.itemClassName,itemStyles:d.itemStyles,shapeStyles:d.shapeStyles,className:x[`area-chart__legend`],shape:Ae,chartId:y,interactive:_}),R=T.filter(({isVisible:e})=>e),z=Se(h,m);return(0,O.jsx)(Re.Provider,{value:{chartId:y,chartRef:b,chartWidth:n,chartHeight:Je||0},children:(0,O.jsx)(Le,{legendPosition:je,legendElement:L,legendChildren:Ke,gap:Oe,className:u(`area-chart`,x[`area-chart`],{[x[`area-chart--animated`]]:ce&&!N},i),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:qe,onContentHeightChange:Xe,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,O.jsx)(`div`,{role:`grid`,"aria-label":ee(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:tt,onFocus:k,onBlur:A,children:t>0&&(0,O.jsx)(`div`,{ref:Pe,children:(0,O.jsxs)(ve,{theme:v,width:n,height:t,margin:{...M,...a},xScale:j.xScale,yScale:j.yScale,onPointerDown:pe,onPointerUp:ye,onPointerMove:be,onPointerOut:xe,pointerEventsDataKey:`nearest`,children:[De!==`none`&&(0,O.jsx)(he,{columns:!1,numTicks:4}),j.axis.x.display&&(0,O.jsx)(ge,{...j.axis.x}),j.axis.y.display&&(0,O.jsx)(ge,{...j.axis.y}),E?(0,O.jsx)(Ge,{x:n/2,y:t/2,width:n,height:t,children:ee(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,!E&&f&&(0,O.jsx)(_e,{curve:z,offset:p,renderLine:I,children:R.map(({series:e,index:t})=>{let{color:n,lineStyles:r}=C({data:e,index:t});return(0,O.jsx)(me,{dataKey:e?.label,data:e.data,...P,fill:n,fillOpacity:F,lineProps:{stroke:n,...r},"data-testid":`area-chart-series-${t}`},e?.label||t)})}),!E&&!f&&R.map(({series:e,index:t})=>{let{color:n,lineStyles:r}=C({data:e,index:t});return(0,O.jsx)(me,{dataKey:e?.label,data:e.data,...P,fill:n,fillOpacity:F,renderLine:I,curve:z,lineProps:{stroke:n,...r},"data-testid":`area-chart-series-${t}`},e?.label||t)}),o&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(He,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:oe,showVerticalCrosshair:s?.showVertical,showHorizontalCrosshair:s?.showHorizontal,selectedIndex:ze,tooltipRef:et,keyboardFocusedClassName:x[`area-chart__tooltip--keyboard-focused`],series:S}),(0,O.jsx)($e,{visibleSeries:R,stacked:f,stackOffset:p,getElementStyles:C,strokeColor:Me.backgroundColor})]}),(0,O.jsx)(Qe,{chartRef:b,width:n,height:r||t,margin:a})]})})})}})})}),k=(0,D.forwardRef)((e,t)=>(0,D.useContext)(oe)?(0,O.jsx)(et,{...e,ref:t}):(0,O.jsx)(ne,{children:(0,O.jsx)(et,{...e,ref:t})})),k.displayName=`AreaChart`,te(k,{Legend:Ie}),A=te(Ke(k),{Legend:Ie})})),j,M,nt=e((()=>{i(),De(),Me(),a(),Ae(),tt(),j={title:`JS Packages/Charts Library/Charts/Area Chart`,component:A,parameters:{layout:`centered`},decorators:[c],argTypes:{...Oe,...r,...o,..._,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},M={...s,data:v.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),rt=n({Animation:()=>W,AspectRatio:()=>U,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>I,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>H,GridVisibility:()=>X,LinearLines:()=>B,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>R,SingleSeries:()=>V,Streamgraph:()=>z,Unstacked:()=>L,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>it,default:()=>P}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,it,at=e((()=>{y(),tt(),nt(),N=h(),P={...j,title:`JS Packages/Charts Library/Charts/Area Chart`,component:j.component,argTypes:{...j.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},F=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=ke(e),s=a.data||M.data;t===`single`?s=[v[0]]:t===`multiple`?s=v.slice(0,4):t===`many`&&(s=v);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,N.jsx)(A,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},I=F.bind({}),I.args={...M,showLegend:!0},L=F.bind({}),L.args={...M,stacked:!1,showLegend:!0},L.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},R=F.bind({}),R.args={...M,stacked:!0,stackOffset:`expand`,showLegend:!0},R.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},z=F.bind({}),z.args={...M,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},z.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},B=F.bind({}),B.args={...M,curveType:`linear`,smoothing:!1,showLegend:!0},B.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},V=F.bind({}),V.args={...M,data:[je[0]]},H=F.bind({}),H.args={...M,width:600,height:300,showLegend:!0},U=F.bind({}),U.args={...M,aspectRatio:.3,showLegend:!0},W=F.bind({}),W.args={...M,animation:!0,showLegend:!0},G={render:e=>{let t=ke(e);return(0,N.jsx)(A,{...I.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,N.jsx)(A.Legend,{...t})})},args:{...I.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=v.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Linear`}),(0,N.jsx)(A,{width:300,height:200,data:e,curveType:`linear`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,N.jsx)(A,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Monotone X`}),(0,N.jsx)(A,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Empty Data`}),(0,N.jsx)(A,{width:300,height:200,data:[]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Date Values`}),(0,N.jsx)(A,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Values`}),(0,N.jsx)(A,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Single Data Point`}),(0,N.jsx)(A,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=F.bind({}),J.args={...M,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=F.bind({}),Y.args={...M,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=v.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Default grid`}),(0,N.jsx)(A,{width:400,height:240,data:e})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,N.jsx)(A,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=F.bind({}),Z.args={...M,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,N.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,N.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:e.key}),(0,N.jsx)(`strong`,{children:e.value})]},e.key)),(0,N.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:`Total`}),(0,N.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=F.bind({}),Q.args={...M,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=F.bind({}),$.args={...M,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <AreaChart {...Default.args} {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-area-chart">
                <AreaChart.Legend {...legend} />
            </AreaChart>;
  },
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<AreaChart.Legend />\` as a child component for explicit legend placement and configuration.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const curveData = sampleData.slice(0, 3);
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
                <div>
                    <h3>Linear</h3>
                    <AreaChart width={300} height={200} data={curveData} curveType="linear" />
                </div>
                <div>
                    <h3>Smooth (Catmull-Rom)</h3>
                    <AreaChart width={300} height={200} data={curveData} curveType="smooth" />
                </div>
                <div>
                    <h3>Monotone X</h3>
                    <AreaChart width={300} height={200} data={curveData} curveType="monotone" />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'The three available curve types. \`linear\` connects points with straight lines; \`smooth\` uses Catmull-Rom interpolation; \`monotone\` prevents overshooting on steep changes.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <AreaChart width={300} height={200} data={[]} />
            </div>
            <div>
                <h3>Invalid Date Values</h3>
                <AreaChart width={300} height={200} data={[{
        label: 'Invalid Dates',
        data: [{
          date: new Date('invalid'),
          value: 10
        }, {
          date: new Date('2024-01-02'),
          value: 20
        }]
      }]} />
            </div>
            <div>
                <h3>Invalid Values</h3>
                <AreaChart width={300} height={200} data={[{
        label: 'Invalid Values',
        data: [{
          date: new Date('2024-01-01'),
          value: NaN
        }, {
          date: new Date('2024-01-02'),
          value: null as number | null
        }]
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <AreaChart width={300} height={200} data={[{
        label: 'Single Point',
        data: [{
          date: new Date('2024-01-01'),
          value: 100
        }]
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'How the area chart handles common edge cases.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = sampleData.slice(0, 3);
    return <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(2, 1fr)'
    }}>
                <div>
                    <h3>Default grid</h3>
                    <AreaChart width={400} height={240} data={data} />
                </div>
                <div>
                    <h3>gridVisibility=&quot;none&quot;</h3>
                    <AreaChart width={400} height={240} data={data} gridVisibility="none" />
                </div>
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`gridVisibility\` controls grid rendering. Use \`"none"\` for compact / inline visualisations like sparkline-style cards.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig(args);
  let data = chartProps.data || areaChartStoryArgs.data;
  if (seriesCount === 'single') {
    data = [sampleData[0]];
  } else if (seriesCount === 'multiple') {
    data = sampleData.slice(0, 4);
  } else if (seriesCount === 'many') {
    data = sampleData;
  }
  let dimensions = {};
  if (dimensionMode === 'fixed') {
    dimensions = {
      width: 800,
      height: 400
    };
  }
  let crosshairConfig;
  if (crosshairMode === 'vertical') {
    crosshairConfig = {
      showVertical: true
    };
  } else if (crosshairMode === 'horizontal') {
    crosshairConfig = {
      showHorizontal: true
    };
  } else if (crosshairMode === 'both') {
    crosshairConfig = {
      showVertical: true,
      showHorizontal: true
    };
  }
  return <AreaChart {...chartProps} {...dimensions} data={data} legend={legend} withTooltipCrosshairs={crosshairConfig} />;
}`,...$.parameters?.docs?.source}}},it=[`Default`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`]}));at();export{W as Animation,U as AspectRatio,K as CurveTypes,Z as CustomTooltip,I as Default,q as ErrorStates,J as FillOpacity,H as FixedDimensions,X as GridVisibility,B as LinearLines,$ as MismatchedXDomains,Q as NegativeValues,R as PercentageStack,V as SingleSeries,z as Streamgraph,L as Unstacked,G as WithCompositionLegend,Y as WithStroke,it as __namedExportsOrder,P as default,at as n,rt as t};