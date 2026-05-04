import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-DwrEV2tA.js";import{Dh as l,Gm as u,Hm as d,Hn as ee,Km as f,Um as p,Wm as te,Wn as ne}from"./iframe-BvHdSuXa.js";import{A as re,_ as ie,a as ae,d as oe,f as se,g as ce,h as le,i as ue,m as de,n as fe,p as pe,r as me,t as m,y as he}from"./providers-Ds9MaS8t.js";import{a as ge,d as _e,f as ve,i as ye,o as be,t as xe,u as Se,w as Ce}from"./esm-XbCWuar9.js";import{a as we,c as Te,i as Ee,o as De,s as Oe}from"./line-chart-ChMM6sW2.js";import{n as ke,r as Ae,t as je}from"./legend-config-tJy46Dt1.js";import{n as h,t as Me}from"./tooltip-config-DU_WVmuX.js";import{b as Ne,c as Pe,y as g}from"./sample-data-BfcHm5eo.js";import{t as _}from"./stories-pTXcSlhm.js";import{c as Fe,d as Ie,i as Le,l as Re,n as ze,p as Be,r as Ve,s as He,t as Ue}from"./chart-layout-BluQdCAB.js";import{n as We,r as Ge,t as Ke}from"./tooltip-BtZYISyP.js";import{n as qe,t as v}from"./svg-empty-state-DtNEp1aT.js";import{n as Je,t as Ye}from"./with-responsive-Bo2v3V2m.js";import{t as Xe}from"./line-chart-D5KnWsRV.js";var Ze,y,Qe=e((()=>{Ze=`_rise_sezj1_1`,y={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:Ze}})),$e,b=e((()=>{u(),$e=e=>!e?.length||e.some(e=>!e.data?.length)?f(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?f(`Invalid data`,`jetpack-charts`):null})),x,S,et,tt,C=e((()=>{xe(),x=t(l(),1),S=d(),et=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,x.useContext)(Ce);return(0,x.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},tt=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,x.useContext)(Ce),o=(0,x.useContext)(Se),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let d=Number(s(u.date));if(!Number.isFinite(d))return null;let ee=u.date.getTime(),f=0,p=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===ee),o=e?.value??0;if(t&&(f+=o),!e||e.value==null)continue;let s=Number(c(t?f:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});p.push((0,S.jsx)(`circle`,{cx:d,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return p.length===0?null:(0,S.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:p})}})),w=e((()=>{b(),C()})),T,E,D,O,k,nt=e((()=>{ne(),xe(),u(),te(),T=t(l(),1),He(),Ke(),ue(),m(),he(),Xe(),Ve(),Ue(),Ie(),v(),Te(),Ye(),Qe(),w(),E=d(),D=(0,T.forwardRef)(({data:e,chartId:t,width:n,height:r,className:i,margin:a,withTooltips:o=!0,withTooltipCrosshairs:s,showLegend:c=!1,legend:l={},stacked:u=!0,stackOffset:d=`none`,smoothing:te=!0,curveType:ne,fillOpacity:re,withStroke:ie,renderTooltip:ce=Ee,animation:ue,options:m={},onPointerDown:he,onPointerUp:xe,onPointerMove:Se,onPointerOut:Ce,children:Te,gridVisibility:ke,gap:Ae=`md`},je)=>{let h=l.interactive??!1,Me=l.shape??`rect`,Ne=l.position??`bottom`,Pe=fe(),g=pe(e),_=de(t),Ie=(0,T.useRef)(null),[Ve,He]=(0,T.useState)(void 0),[Ue,Ke]=(0,T.useState)(!1),v=(0,T.useRef)(null),{legendChildren:Je,nonLegendChildren:Ye}=Le(Te,`AreaChart`),[Xe,Ze]=(0,T.useState)(),Qe=(0,T.useCallback)(e=>{Ze(e>0?e:r)},[r]);(0,T.useImperativeHandle)(je,()=>({getScales:()=>v.current?.getScales()||null,getChartDimensions:()=>v.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[v]);let b=se(e),{getElementStyles:x,isSeriesVisible:S}=le(),C=(0,T.useMemo)(()=>!_||!h?b.map((e,t)=>({series:e,index:t,isVisible:!0})):b.map((e,t)=>({series:e,index:t,isVisible:S(_,e.label)})),[b,_,S,h]),w=(0,T.useMemo)(()=>C.every(({isVisible:e})=>!e),[C]),{tooltipRef:D,onChartFocus:O,onChartBlur:k,onChartKeyDown:nt}=Ge({selectedIndex:Ve,setSelectedIndex:He,isNavigating:Ue,setIsNavigating:Ke,chartRef:Ie,totalPoints:b[0]?.data.length||0}),A=(0,T.useMemo)(()=>{let e=m?.axis?.x?.tickFormat||De(b);return{axis:{x:{orientation:`bottom`,numTicks:Oe(b,n,e),tickFormat:e,display:!0,...m?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:ee,display:!0,...m?.axis?.y}},xScale:{type:`time`,...m?.xScale},yScale:{type:`linear`,nice:!0,zero:u,...m?.yScale}}},[m,b,n,u]),j=oe(r,A,b,g),M=$e(b),rt=!M;me({chartId:_,legendItems:Fe(b,(0,T.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),Me),chartType:`area`,isDataValid:rt,metadata:(0,T.useMemo)(()=>({stacked:u,stackOffset:d,smoothing:te,curveType:ne}),[u,d,te,ne])});let N=ae(),P={xAccessor:e=>e?.date,yAccessor:e=>e?.value},F=re??(u?.85:.4),I=ie??!u;if(M)return(0,E.jsx)(`div`,{className:p(`area-chart`,y[`area-chart`]),children:M});let L=c&&(0,E.jsx)(Re,{orientation:l.orientation??`horizontal`,alignment:l.alignment??`center`,position:Ne,labelStyles:l.labelStyles,itemClassName:l.itemClassName,itemStyles:l.itemStyles,shapeStyles:l.shapeStyles,className:y[`area-chart__legend`],shape:Me,chartId:_,interactive:h}),R=C.filter(({isVisible:e})=>e),z=we(ne,te);return(0,E.jsx)(Be.Provider,{value:{chartId:_,chartRef:v,chartWidth:n,chartHeight:Xe||0},children:(0,E.jsx)(ze,{legendPosition:Ne,legendElement:L,legendChildren:Je,gap:Ae,className:p(`area-chart`,y[`area-chart`],{[y[`area-chart--animated`]]:ue&&!N},i),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:Ye,onContentHeightChange:Qe,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,E.jsx)(`div`,{role:`grid`,"aria-label":f(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:nt,onFocus:O,onBlur:k,children:t>0&&(0,E.jsx)(`div`,{ref:Ie,children:(0,E.jsxs)(be,{theme:g,width:n,height:t,margin:{...j,...a},xScale:A.xScale,yScale:A.yScale,onPointerDown:he,onPointerUp:xe,onPointerMove:Se,onPointerOut:Ce,pointerEventsDataKey:`nearest`,children:[ke!==`none`&&(0,E.jsx)(_e,{columns:!1,numTicks:4}),A.axis.x.display&&(0,E.jsx)(ve,{...A.axis.x}),A.axis.y.display&&(0,E.jsx)(ve,{...A.axis.y}),w?(0,E.jsx)(qe,{x:n/2,y:t/2,width:n,height:t,children:f(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,!w&&u&&(0,E.jsx)(ye,{curve:z,offset:d,renderLine:I,children:R.map(({series:e,index:t})=>{let{color:n,lineStyles:r}=x({data:e,index:t});return(0,E.jsx)(ge,{dataKey:e?.label,data:e.data,...P,fill:n,fillOpacity:F,lineProps:{stroke:n,...r},"data-testid":`area-chart-series-${t}`},e?.label||t)})}),!w&&!u&&R.map(({series:e,index:t})=>{let{color:n,lineStyles:r}=x({data:e,index:t});return(0,E.jsx)(ge,{dataKey:e?.label,data:e.data,...P,fill:n,fillOpacity:F,renderLine:I,curve:z,lineProps:{stroke:n,...r},"data-testid":`area-chart-series-${t}`},e?.label||t)}),o&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(We,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!u,renderTooltip:ce,showVerticalCrosshair:s?.showVertical,showHorizontalCrosshair:s?.showHorizontal,selectedIndex:Ve,tooltipRef:D,keyboardFocusedClassName:y[`area-chart__tooltip--keyboard-focused`],series:b}),(0,E.jsx)(tt,{visibleSeries:R,stacked:u,stackOffset:d,getElementStyles:x,strokeColor:Pe.backgroundColor})]}),(0,E.jsx)(et,{chartRef:v,width:n,height:r||t,margin:a})]})})})}})})}),O=(0,T.forwardRef)((e,t)=>(0,T.useContext)(ce)?(0,E.jsx)(D,{...e,ref:t}):(0,E.jsx)(ie,{children:(0,E.jsx)(D,{...e,ref:t})})),O.displayName=`AreaChart`,re(O,{Legend:Re}),k=re(Je(O),{Legend:Re})})),A,j,M=e((()=>{i(),ke(),Pe(),a(),Me(),nt(),A={title:`JS Packages/Charts Library/Charts/Area Chart`,component:k,parameters:{layout:`centered`},decorators:[c],argTypes:{...Ae,...r,...o,...h,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},j={...s,data:g.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),rt=n({Animation:()=>W,AspectRatio:()=>U,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>I,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>H,GridVisibility:()=>X,LinearLines:()=>B,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>R,SingleSeries:()=>V,Streamgraph:()=>z,Unstacked:()=>L,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>it,default:()=>P}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,it,at=e((()=>{_(),nt(),M(),N=d(),P={...A,title:`JS Packages/Charts Library/Charts/Area Chart`,component:A.component,argTypes:{...A.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},F=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=je(e),s=a.data||j.data;t===`single`?s=[g[0]]:t===`multiple`?s=g.slice(0,4):t===`many`&&(s=g);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,N.jsx)(k,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},I=F.bind({}),I.args={...j,showLegend:!0},L=F.bind({}),L.args={...j,stacked:!1,showLegend:!0},L.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},R=F.bind({}),R.args={...j,stacked:!0,stackOffset:`expand`,showLegend:!0},R.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},z=F.bind({}),z.args={...j,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},z.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},B=F.bind({}),B.args={...j,curveType:`linear`,smoothing:!1,showLegend:!0},B.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},V=F.bind({}),V.args={...j,data:[Ne[0]]},H=F.bind({}),H.args={...j,width:600,height:300,showLegend:!0},U=F.bind({}),U.args={...j,aspectRatio:.3,showLegend:!0},W=F.bind({}),W.args={...j,animation:!0,showLegend:!0},G={render:e=>{let t=je(e);return(0,N.jsx)(k,{...I.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,N.jsx)(k.Legend,{...t})})},args:{...I.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=g.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Linear`}),(0,N.jsx)(k,{width:300,height:200,data:e,curveType:`linear`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,N.jsx)(k,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Monotone X`}),(0,N.jsx)(k,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Empty Data`}),(0,N.jsx)(k,{width:300,height:200,data:[]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Date Values`}),(0,N.jsx)(k,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Values`}),(0,N.jsx)(k,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Single Data Point`}),(0,N.jsx)(k,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=F.bind({}),J.args={...j,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=F.bind({}),Y.args={...j,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=g.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Default grid`}),(0,N.jsx)(k,{width:400,height:240,data:e})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,N.jsx)(k,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=F.bind({}),Z.args={...j,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,N.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,N.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:e.key}),(0,N.jsx)(`strong`,{children:e.value})]},e.key)),(0,N.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:`Total`}),(0,N.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=F.bind({}),Q.args={...j,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=F.bind({}),$.args={...j,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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