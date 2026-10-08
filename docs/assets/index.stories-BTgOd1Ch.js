import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-2QZQpBH2.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{Ia as l,Ra as u}from"./iframe-C6-ohgXk.js";import{A as ee,E as te,O as ne,Q as re,Tt as ie,g as ae,i as oe,n as se,t as d}from"./esm-DG7VpAg_.js";import{Tt as f,_t as ce,j as p,o as le,s as ue,yt as de}from"./chart-scope-J2SALc3t.js";import{E as fe,M as pe,O as me,S as he,a as ge,o as _e,t as ve,u as ye,w as be}from"./providers-BqBl5ES3.js";import{a as xe,c as Se,d as Ce,f as m,i as we,o as Te,s as Ee,u as De}from"./line-chart-Dp7oIt_M.js";import{c as Oe,l as ke,n as Ae,r as je,s as h,t as Me}from"./chart-decorator-DYcmYScg.js";import{i as Ne,n as Pe,t as Fe}from"./legend-config-BJNKT_wW.js";import{n as Ie,t as Le}from"./tooltip-config-B5skOp2s.js";import{D as g,O as Re,h as ze}from"./sample-data-BJw5YSHu.js";import{t as Be}from"./stories-kTZpr6ls.js";import{i as Ve,t as He}from"./chart-instance-context-DnQ1_RLX.js";import{d as _,i as v,m as Ue,n as We,o as Ge,p as Ke,t as qe}from"./chart-layout-BGNehu_5.js";import{i as Je,n as Ye,t as Xe}from"./tooltip-1r3g5r8O.js";import{a as Ze,g as Qe,h as $e,i as et,n as tt,p as nt,r as rt,s as it,t as y,v as b,y as at}from"./xy-plot.module-BV6QrJHr.js";import{r as ot,t as st}from"./with-responsive-BH5Ak85a.js";import{i as ct,n as lt,t as ut}from"./svg-empty-state-Cg9WGw9i.js";import{t as dt}from"./line-chart-DY7jlAmw.js";var ft,x,S=n((()=>{ft=`_rise_xqjue_1`,x={"area-chart":`_area-chart_xqjue_1`,"area-chart--animated":`_area-chart--animated_xqjue_4`,rise:ft}})),pt,mt=n((()=>{a(),$e(),pt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>Qe(e.value,{allowMissing:!1})||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),C,w,ht,gt,_t=n((()=>{d(),C=t(r(),1),w=c(),ht=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,C.useContext)(re);return(0,C.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},gt=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,C.useContext)(re),o=(0,C.useContext)(te),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let ee=Number(s(u.date));if(!Number.isFinite(ee))return null;let ne=u.date.getTime(),ie=0,ae=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===ne),o=e?.value??0;if(t&&(ie+=o),!e||e.value==null)continue;let s=Number(c(t?ie:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});ae.push((0,w.jsx)(`circle`,{cx:ee,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return ae.length===0?null:(0,w.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:ae})}})),vt=n((()=>{mt(),_t()})),T,E,yt,bt,D,xt=n((()=>{u(),d(),a(),o(),T=t(r(),1),_(),Xe(),_e(),ve(),b(),p(),de(),dt(),v(),He(),qe(),ut(),nt(),m(),Ze(),st(),xe(),y(),S(),vt(),E=c(),yt=(0,T.forwardRef)(({data:e,ariaLabel:t,chartId:n,width:r,height:a,className:o,margin:c,withTooltips:u=!0,withTooltipCrosshairs:te,showLegend:re=!1,legend:d={},stacked:f=!0,stackOffset:p=`none`,smoothing:le=!0,curveType:ue,fillOpacity:de,withStroke:_e,renderTooltip:ve=we,animation:xe,options:m={},onPointerDown:Oe,onPointerUp:ke,onPointerMove:Ae,onPointerOut:je,zoomable:h=!1,rescaleYOnVisibilityChange:Me=!0,defaultHiddenSeries:Ne,children:Pe,gridVisibility:Fe,gap:Ie=`md`},Le)=>{let g=d.interactive??!1,Re=d.shape??`rect`,ze=d.position??`bottom`,Be=fe(),He=me(e),_=pe(n),v=at(_,Ne),qe=(0,T.useCallback)(e=>!v.has(e),[v]),Xe=(0,T.useRef)(null),[Ze,Qe]=(0,T.useState)(void 0),[$e,nt]=(0,T.useState)(!1),y=(0,T.useRef)(null),b=De({enabled:h,chartRef:y,userHandlers:{onPointerDown:Oe,onPointerMove:Ae,onPointerUp:ke}}),{legendChildren:ot,nonLegendChildren:st}=Ge(Pe,`AreaChart`),[ut,dt]=(0,T.useState)(),ft=(0,T.useCallback)(e=>{dt(e>0?e:a)},[a]);(0,T.useImperativeHandle)(Le,()=>({getScales:()=>y.current?.getScales()||null,getChartDimensions:()=>y.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[y]);let S=be(e),{getElementStyles:mt}=ie(),C=(0,T.useMemo)(()=>S.map((e,t)=>({series:e,index:t,isVisible:!v.has(e.label)})),[S,v]),w=(0,T.useMemo)(()=>C.every(({isVisible:e})=>!e),[C]),_t=(0,T.useMemo)(()=>(!f||p===`none`)&&et(S.filter(e=>qe(e.label))),[S,qe,f,p]),{tooltipRef:vt,onChartFocus:yt,onChartBlur:bt,onChartKeyDown:D}=Je({selectedIndex:Ze,setSelectedIndex:Qe,isNavigating:$e,setIsNavigating:nt,chartRef:Xe,totalPoints:S[0]?.data.length||0}),xt=(0,T.useMemo)(()=>{if(Me||!S.length||!S[0].data.length||f&&p!==`none`)return;if(f){let e=Math.max(...S.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of S){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of S)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[S,f,p,Me]),O=(0,T.useMemo)(()=>({axis:{x:Ce({dataSorted:S,width:r,axisOptions:m?.axis?.x,scaleDomain:m?.xScale?.domain,zoomDomain:b.domain,formatting:Be}),y:{orientation:`left`,numTicks:4,tickFormat:l,display:!0,...m?.axis?.y}},xScale:{type:`time`,...m?.xScale,...b.domain?{domain:b.domain}:{}},yScale:{type:`linear`,nice:!0,zero:f,...xt?{domain:xt}:{},...m?.yScale}}),[m,S,r,f,xt,b.domain,Be]),k=he(a,O,S,He),St=pt(S),Ct=!St;ge({chartId:_,legendItems:Ke(S,(0,T.useMemo)(()=>({withGlyph:!1,glyphSize:0,collapseGroups:d.collapseGroups??!1,comparisonItem:d.comparisonItem??!1}),[d.collapseGroups,d.comparisonItem]),Re),chartType:`area`,isDataValid:Ct,metadata:(0,T.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:le,curveType:ue}),[f,p,le,ue])});let A=ye(),wt=!!xe&&!A,j={xAccessor:e=>e?.date,yAccessor:e=>e?.value},M=(0,T.useCallback)(()=>0,[]),N=(0,T.useMemo)(()=>new Set(C.filter(e=>e.isVisible).map(e=>e.series.label)),[C]),P=(0,T.useMemo)(()=>ce(S.filter(e=>N.has(e.label)),m?.axis?.x?.tickResolution),[S,N,m?.axis?.x?.tickResolution]),F=(0,T.useCallback)(e=>{let t=e?.tooltipData?.datumByKey;if(!t)return ve({...e,bucketInfo:P});let n=Object.fromEntries(Object.entries(t).filter(([e])=>N.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&N.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return ve({...e,bucketInfo:P,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[ve,N,P]),I=de??(f?.85:.4),L=_e??!f;if(St)return(0,E.jsx)(`div`,{className:s(`area-chart`,x[`area-chart`]),children:St});let R=re&&(0,E.jsx)(Ue,{orientation:d.orientation??`horizontal`,alignment:d.alignment??`center`,position:ze,labelStyles:d.labelStyles,itemClassName:d.itemClassName,itemStyles:d.itemStyles,shapeStyles:d.shapeStyles,className:x[`area-chart__legend`],shape:Re,chartId:_,interactive:g}),z=C.filter(({isVisible:e})=>e),B=it(ue,le),V=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=mt({data:e,index:t});return(0,E.jsx)(oe,{dataKey:e?.label,data:e.data,xAccessor:j.xAccessor,yAccessor:n?j.yAccessor:M,fill:r,fillOpacity:I,...f?{}:{renderLine:L,curve:B},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,E.jsx)(Ve.Provider,{value:{chartId:_,chartRef:y,isSeriesVisible:qe,chartWidth:r,chartHeight:ut||0},children:(0,E.jsx)(We,{legendPosition:ze,legendElement:R,legendChildren:ot,gap:Ie,className:s(`area-chart`,x[`area-chart`],{[x[`area-chart--animated`]]:wt},o),style:{width:r,height:a},"data-testid":`area-chart`,trailingContent:st,onContentHeightChange:ft,children:({contentHeight:e})=>{let n=e>0?e:a;return(0,E.jsx)(`div`,{ref:Xe,role:`application`,"aria-label":t??i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:D,onFocus:yt,onBlur:bt,children:n>0&&(0,E.jsxs)(`div`,{className:tt[`xy-plot`],children:[h&&b.domain&&(0,E.jsx)(Ee,{onClick:b.reset}),(0,E.jsxs)(ae,{accessibilityLabel:``,theme:He,width:r,height:n,margin:{...k,...c},xScale:O.xScale,yScale:O.yScale,onPointerDown:b.handlers.onPointerDown,onPointerUp:b.handlers.onPointerUp,onPointerMove:b.handlers.onPointerMove,onPointerOut:je,pointerEventsDataKey:`nearest`,children:[(0,E.jsx)(rt,{axis:`y`,numTicks:O.axis.y.numTicks,enabled:_t&&!O.axis.y.tickValues&&!m?.yScale?.domain,children:e=>(0,E.jsxs)(E.Fragment,{children:[!w&&Fe!==`none`&&(0,E.jsx)(ne,{columns:!1,numTicks:O.axis.y.numTicks,tickValues:e??O.axis.y.tickValues}),!w&&O.axis.x.display&&(0,E.jsx)(ee,{...O.axis.x}),!w&&O.axis.y.display&&(0,E.jsx)(ee,{...O.axis.y,...e?{tickValues:e}:{}})]})}),w?(0,E.jsx)(ct,{x:r/2,y:n/2,width:r,height:n,children:lt(g,`series`)}):null,(0,E.jsxs)(Te,{active:h,chartId:_,children:[!w&&f&&(0,E.jsx)(se,{curve:B,offset:p,renderLine:L,children:C.map(V)}),!w&&!f&&C.map(V)]}),u&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ye,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:F,showVerticalCrosshair:te?.showVertical,showHorizontalCrosshair:te?.showHorizontal,selectedIndex:Ze,tooltipRef:vt,keyboardFocusedClassName:x[`area-chart__tooltip--keyboard-focused`],series:S}),(0,E.jsx)(gt,{visibleSeries:z,stacked:f,stackOffset:p,getElementStyles:mt,strokeColor:He.backgroundColor})]}),(0,E.jsx)(ht,{chartRef:y,width:r,height:a||n,margin:c}),h&&(0,E.jsx)(Se,{drag:b.drag})]})]})})}})})}),bt=(0,T.forwardRef)((e,t)=>(0,T.useContext)(le)?(0,E.jsx)(yt,{...e,ref:t}):(0,E.jsx)(ue,{children:(0,E.jsx)(yt,{...e,ref:t})})),bt.displayName=`AreaChart`,f(bt,{Legend:Ue}),D=f(ot(bt),{Legend:Ue})})),O,k,St=n((()=>{Ae(),Pe(),ze(),h(),Le(),xt(),O={title:`JS Packages/Charts Library/Charts/Area Chart`,component:D,parameters:{layout:`centered`},decorators:[Me],argTypes:{...Ne,...ke,...je,...Ie,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},k={...Oe,data:g.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),Ct=e({Animation:()=>V,AspectRatio:()=>B,CurveTypes:()=>G,CustomTooltip:()=>X,Default:()=>M,ErrorStates:()=>K,FillOpacity:()=>q,FixedDimensions:()=>z,GridVisibility:()=>Y,LinearLines:()=>L,MismatchedXDomains:()=>Q,NegativeValues:()=>Z,PercentageStack:()=>F,RescaleYOnVisibilityChange:()=>H,SingleSeries:()=>R,Streamgraph:()=>I,TimeAxisTickResolution:()=>$,Unstacked:()=>P,WithCompositionLegend:()=>W,WithDefaultHiddenSeries:()=>U,WithStroke:()=>J,Zoomable:()=>N,__namedExportsOrder:()=>Et,default:()=>wt}),A,wt,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Tt,$,Et,Dt=n((()=>{Be(),xt(),St(),A=c(),wt={...O,title:`JS Packages/Charts Library/Charts/Area Chart`,component:O.component,argTypes:{...O.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},j=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Fe(e),s=a.data||k.data;t===`single`?s=[g[0]]:t===`multiple`?s=g.slice(0,4):t===`many`&&(s=g);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,A.jsx)(D,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},M=j.bind({}),M.args={...k,showLegend:!0},N=j.bind({}),N.args={...k,showLegend:!0,zoomable:!0},N.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},P=j.bind({}),P.args={...k,stacked:!1,showLegend:!0},P.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},F=j.bind({}),F.args={...k,stacked:!0,stackOffset:`expand`,showLegend:!0},F.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},I=j.bind({}),I.args={...k,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},I.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},L=j.bind({}),L.args={...k,curveType:`linear`,smoothing:!1,showLegend:!0},L.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},R=j.bind({}),R.args={...k,data:[Re[0]]},z=j.bind({}),z.args={...k,width:600,height:300,showLegend:!0},B=j.bind({}),B.args={...k,aspectRatio:.3,showLegend:!0},V=j.bind({}),V.args={...k,animation:!0,showLegend:!0,legendInteractive:!0},H={name:`Y-axis rescales when visible series change (default)`,render:e=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: true (default)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!0})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: false (pinned)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!1})]})]}),args:{...k,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},U=j.bind({}),U.args={...M.args,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`London`]},U.parameters={docs:{description:{story:`London is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}},W={render:e=>{let t=Fe(e);return(0,A.jsx)(D,{...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,A.jsx)(D.Legend,{...t})})},args:{...M.args,showLegend:!1},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},G={render:()=>{let e=g.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Linear`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`linear`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Monotone X`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},K={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Empty Data`}),(0,A.jsx)(D,{width:300,height:200,data:[]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Date Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Single Data Point`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},q=j.bind({}),q.args={...k,fillOpacity:.5,showLegend:!0},q.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},J=j.bind({}),J.args={...k,withStroke:!0,showLegend:!0},J.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},Y={render:()=>{let e=g.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Default grid`}),(0,A.jsx)(D,{width:400,height:240,data:e})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,A.jsx)(D,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},X=j.bind({}),X.args={...k,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,A.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,A.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:e.key}),(0,A.jsx)(`strong`,{children:e.value})]},e.key)),(0,A.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:`Total`}),(0,A.jsx)(`strong`,{children:r})]})]})}},X.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Z=j.bind({}),Z.args={...k,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Z.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},Q=j.bind({}),Q.args={...k,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},Q.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},Tt=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],$={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,A.jsx)(D,{width:460,height:220,data:Tt})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,A.jsx)(D,{width:460,height:220,data:Tt,options:{axis:{x:{tickResolution:`hour`}}}})]})]}),args:{containerWidth:`1020px`,containerHeight:`320px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution, `options.axis.x.tickResolution` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit `tickFormat` takes precedence over the hint."}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Y-axis rescales when visible series change (default)',
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h4>rescaleYOnVisibilityChange: true (default)</h4>
                <AreaChart {...args} rescaleYOnVisibilityChange />
            </div>
            <div>
                <h4>rescaleYOnVisibilityChange: false (pinned)</h4>
                <AreaChart {...args} rescaleYOnVisibilityChange={false} />
            </div>
        </div>,
  args: {
    ...areaChartStoryArgs,
    showLegend: true,
    legend: {
      interactive: true
    },
    width: 480,
    height: 280
  },
  parameters: {
    docs: {
      description: {
        story: 'Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
    return <AreaChart {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-area-chart">
                <AreaChart.Legend {...legend} />
            </AreaChart>;
  },
  args: {
    ...Default.args,
    showLegend: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<AreaChart.Legend />\` as a child component for explicit legend placement and configuration.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    seriesCount,
    dimensionMode,
    crosshairMode,
    withTooltipCrosshairs,
    ...chartProps
  } = args;
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
  const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Lone hourly bucket, resolution inferred → date tick</h3>
                <AreaChart width={460} height={220} data={loneHourlyBucket} />
            </div>
            <div>
                <h3>Same point, tickResolution: &apos;hour&apos; → hour tick</h3>
                <AreaChart width={460} height={220} data={loneHourlyBucket} options={{
        axis: {
          x: {
            tickResolution: 'hour'
          }
        }
      }} />
            </div>
        </div>,
  args: {
    containerWidth: '1020px',
    containerHeight: '320px'
  },
  parameters: {
    docs: {
      description: {
        story: "When the caller already knows the data's bucket resolution, \`options.axis.x.tickResolution\` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit \`tickFormat\` takes precedence over the hint."
      }
    }
  }
}`,...$.parameters?.docs?.source}}},Et=[`Default`,`Zoomable`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnVisibilityChange`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`,`TimeAxisTickResolution`]}));Dt();export{V as Animation,B as AspectRatio,G as CurveTypes,X as CustomTooltip,M as Default,K as ErrorStates,q as FillOpacity,z as FixedDimensions,Y as GridVisibility,L as LinearLines,Q as MismatchedXDomains,Z as NegativeValues,F as PercentageStack,H as RescaleYOnVisibilityChange,R as SingleSeries,I as Streamgraph,$ as TimeAxisTickResolution,P as Unstacked,W as WithCompositionLegend,U as WithDefaultHiddenSeries,J as WithStroke,N as Zoomable,Et as __namedExportsOrder,wt as default,Dt as n,Ct as t};