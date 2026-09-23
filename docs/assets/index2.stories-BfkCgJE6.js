import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-2QZQpBH2.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{D as l,L as ee,N as te,c as ne,f as re,h as ie,j as ae,k as oe,p as se}from"./build-module-YnrxtFuf.js";import{Ba as ce,Ha as u}from"./iframe-BY5BezYv.js";import{c as d,n as f,o as le,r as ue,s as de,t as fe}from"./chart-decorator-BT2bhX9y.js";import{J as pe,X as me,nt as he,o as p,s as ge,y as _e}from"./chart-scope-BwMdbIdN.js";import{D as ve,Dt as ye,T as be,Z as xe,a as Se,h as Ce,i as m,k as we,s as Te}from"./catalog-pointers-BC88IjyZ.js";import{a as Ee,c as De,d as Oe,f as ke,i as Ae,o as je,s as Me,u as Ne}from"./line-chart-D5aWKy3A.js";import{i as Pe,n as Fe,t as Ie}from"./legend-config-BJNKT_wW.js";import{n as Le,t as Re}from"./tooltip-config-B5skOp2s.js";import{D as h,O as ze,h as Be}from"./sample-data-BJw5YSHu.js";import{t as Ve}from"./stories-BeO3XMd1.js";import{i as He,t as g}from"./chart-instance-context-DnQ1_RLX.js";import{d as _,i as Ue,m as We,n as Ge,o as Ke,p as qe,t as Je}from"./chart-layout-DJ4-obOS.js";import{i as Ye,n as Xe,t as Ze}from"./tooltip-Dq8yaIZQ.js";import{a as Qe,g as $e,h as et,i as tt,n as nt,p as v,r as rt,s as it,t as y,v as at,y as ot}from"./xy-plot.module-DwDIzy2W.js";import{r as st,t as ct}from"./with-responsive-D-vuXKm2.js";import{i as lt,n as ut,t as dt}from"./svg-empty-state-DAZ1KTwz.js";import{t as ft}from"./line-chart-BAtOUxr3.js";var b,x,pt=n((()=>{b=`_rise_xqjue_1`,x={"area-chart":`_area-chart_xqjue_1`,"area-chart--animated":`_area-chart--animated_xqjue_4`,rise:b}})),mt,S=n((()=>{a(),et(),mt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>$e(e.value,{allowMissing:!1})||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),C,ht,gt,_t,vt=n((()=>{m(),C=t(r(),1),ht=c(),gt=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,C.useContext)(xe);return(0,C.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},_t=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,C.useContext)(xe),o=(0,C.useContext)(be),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,ee=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!ee||!ee.date||t&&n!==`none`)return null;let te=Number(s(ee.date));if(!Number.isFinite(te))return null;let ne=ee.date.getTime(),re=0,ie=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===ne),o=e?.value??0;if(t&&(re+=o),!e||e.value==null)continue;let s=Number(c(t?re:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});ie.push((0,ht.jsx)(`circle`,{cx:te,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return ie.length===0?null:(0,ht.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:ie})}})),yt=n((()=>{S(),vt()})),w,T,bt,E,D,O=n((()=>{u(),m(),a(),o(),w=t(r(),1),_(),Ze(),se(),ne(),at(),_e(),me(),ft(),Ue(),g(),Je(),dt(),v(),ke(),Qe(),ct(),Ee(),y(),pt(),yt(),T=c(),bt=(0,w.forwardRef)(({data:e,chartId:t,width:n,height:r,className:a,margin:o,withTooltips:c=!0,withTooltipCrosshairs:ne,showLegend:se=!1,legend:u={},stacked:d=!0,stackOffset:f=`none`,smoothing:le=!0,curveType:ue,fillOpacity:de,withStroke:fe,renderTooltip:me=Ae,animation:he,options:p={},onPointerDown:ge,onPointerUp:_e,onPointerMove:be,onPointerOut:xe,zoomable:m=!1,rescaleYOnVisibilityChange:Ee=!0,defaultHiddenSeries:ke,children:Pe,gridVisibility:Fe,gap:Ie=`md`},Le)=>{let Re=u.interactive??!1,h=u.shape??`rect`,ze=u.position??`bottom`,Be=ae(),Ve=te(e),g=ee(t),_=ot(g,ke),Ue=(0,w.useCallback)(e=>!_.has(e),[_]),Je=(0,w.useRef)(null),[Ze,Qe]=(0,w.useState)(void 0),[$e,et]=(0,w.useState)(!1),v=(0,w.useRef)(null),y=Ne({enabled:m,chartRef:v,userHandlers:{onPointerDown:ge,onPointerMove:be,onPointerUp:_e}}),{legendChildren:at,nonLegendChildren:st}=Ke(Pe,`AreaChart`),[ct,dt]=(0,w.useState)(),ft=(0,w.useCallback)(e=>{dt(e>0?e:r)},[r]);(0,w.useImperativeHandle)(Le,()=>({getScales:()=>v.current?.getScales()||null,getChartDimensions:()=>v.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[v]);let b=oe(e),{getElementStyles:pt}=ye(),S=(0,w.useMemo)(()=>b.map((e,t)=>({series:e,index:t,isVisible:!_.has(e.label)})),[b,_]),C=(0,w.useMemo)(()=>S.every(({isVisible:e})=>!e),[S]),ht=(0,w.useMemo)(()=>(!d||f===`none`)&&tt(b.filter(e=>Ue(e.label))),[b,Ue,d,f]),{tooltipRef:vt,onChartFocus:yt,onChartBlur:bt,onChartKeyDown:E}=Ye({selectedIndex:Ze,setSelectedIndex:Qe,isNavigating:$e,setIsNavigating:et,chartRef:Je,totalPoints:b[0]?.data.length||0}),D=(0,w.useMemo)(()=>{if(Ee||!b.length||!b[0].data.length||d&&f!==`none`)return;if(d){let e=Math.max(...b.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of b){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of b)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[b,d,f,Ee]),O=(0,w.useMemo)(()=>({axis:{x:Oe({dataSorted:b,width:n,axisOptions:p?.axis?.x,scaleDomain:p?.xScale?.domain,zoomDomain:y.domain,formatting:Be}),y:{orientation:`left`,numTicks:4,tickFormat:ce,display:!0,...p?.axis?.y}},xScale:{type:`time`,...p?.xScale,...y.domain?{domain:y.domain}:{}},yScale:{type:`linear`,nice:!0,zero:d,...D?{domain:D}:{},...p?.yScale}}),[p,b,n,d,D,y.domain,Be]),xt=l(r,O,b,Ve),k=mt(b),St=!k;re({chartId:g,legendItems:qe(b,(0,w.useMemo)(()=>({withGlyph:!1,glyphSize:0,collapseGroups:u.collapseGroups??!1,comparisonItem:u.comparisonItem??!1}),[u.collapseGroups,u.comparisonItem]),h),chartType:`area`,isDataValid:St,metadata:(0,w.useMemo)(()=>({stacked:d,stackOffset:f,smoothing:le,curveType:ue}),[d,f,le,ue])});let Ct=ie(),A=!!he&&!Ct,wt={xAccessor:e=>e?.date,yAccessor:e=>e?.value},j=(0,w.useCallback)(()=>0,[]),M=(0,w.useMemo)(()=>new Set(S.filter(e=>e.isVisible).map(e=>e.series.label)),[S]),N=(0,w.useMemo)(()=>pe(b.filter(e=>M.has(e.label)),p?.axis?.x?.tickResolution),[b,M,p?.axis?.x?.tickResolution]),P=(0,w.useCallback)(e=>{let t=e?.tooltipData?.datumByKey;if(!t)return me({...e,bucketInfo:N});let n=Object.fromEntries(Object.entries(t).filter(([e])=>M.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&M.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return me({...e,bucketInfo:N,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[me,M,N]),F=de??(d?.85:.4),I=fe??!d;if(k)return(0,T.jsx)(`div`,{className:s(`area-chart`,x[`area-chart`]),children:k});let L=se&&(0,T.jsx)(We,{orientation:u.orientation??`horizontal`,alignment:u.alignment??`center`,position:ze,labelStyles:u.labelStyles,itemClassName:u.itemClassName,itemStyles:u.itemStyles,shapeStyles:u.shapeStyles,className:x[`area-chart__legend`],shape:h,chartId:g,interactive:Re}),R=S.filter(({isVisible:e})=>e),z=it(ue,le),B=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=pt({data:e,index:t});return(0,T.jsx)(Te,{dataKey:e?.label,data:e.data,xAccessor:wt.xAccessor,yAccessor:n?wt.yAccessor:j,fill:r,fillOpacity:F,...d?{}:{renderLine:I,curve:z},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,T.jsx)(He.Provider,{value:{chartId:g,chartRef:v,isSeriesVisible:Ue,chartWidth:n,chartHeight:ct||0},children:(0,T.jsx)(Ge,{legendPosition:ze,legendElement:L,legendChildren:at,gap:Ie,className:s(`area-chart`,x[`area-chart`],{[x[`area-chart--animated`]]:A},a),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:st,onContentHeightChange:ft,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,T.jsx)(`div`,{ref:Je,role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:E,onFocus:yt,onBlur:bt,children:t>0&&(0,T.jsxs)(`div`,{className:nt[`xy-plot`],children:[m&&y.domain&&(0,T.jsx)(Me,{onClick:y.reset}),(0,T.jsxs)(Ce,{theme:Ve,width:n,height:t,margin:{...xt,...o},xScale:O.xScale,yScale:O.yScale,onPointerDown:y.handlers.onPointerDown,onPointerUp:y.handlers.onPointerUp,onPointerMove:y.handlers.onPointerMove,onPointerOut:xe,pointerEventsDataKey:`nearest`,children:[(0,T.jsx)(rt,{axis:`y`,numTicks:O.axis.y.numTicks,enabled:ht&&!O.axis.y.tickValues&&!p?.yScale?.domain,children:e=>(0,T.jsxs)(T.Fragment,{children:[!C&&Fe!==`none`&&(0,T.jsx)(ve,{columns:!1,numTicks:O.axis.y.numTicks,tickValues:e??O.axis.y.tickValues}),!C&&O.axis.x.display&&(0,T.jsx)(we,{...O.axis.x}),!C&&O.axis.y.display&&(0,T.jsx)(we,{...O.axis.y,...e?{tickValues:e}:{}})]})}),C?(0,T.jsx)(lt,{x:n/2,y:t/2,width:n,height:t,children:ut(Re,`series`)}):null,(0,T.jsxs)(je,{active:m,chartId:g,children:[!C&&d&&(0,T.jsx)(Se,{curve:z,offset:f,renderLine:I,children:S.map(B)}),!C&&!d&&S.map(B)]}),c&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Xe,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!d,renderTooltip:P,showVerticalCrosshair:ne?.showVertical,showHorizontalCrosshair:ne?.showHorizontal,selectedIndex:Ze,tooltipRef:vt,keyboardFocusedClassName:x[`area-chart__tooltip--keyboard-focused`],series:b}),(0,T.jsx)(_t,{visibleSeries:R,stacked:d,stackOffset:f,getElementStyles:pt,strokeColor:Ve.backgroundColor})]}),(0,T.jsx)(gt,{chartRef:v,width:n,height:r||t,margin:o}),m&&(0,T.jsx)(De,{drag:y.drag})]})]})})}})})}),E=(0,w.forwardRef)((e,t)=>(0,w.useContext)(p)?(0,T.jsx)(bt,{...e,ref:t}):(0,T.jsx)(ge,{children:(0,T.jsx)(bt,{...e,ref:t})})),E.displayName=`AreaChart`,he(E,{Legend:We}),D=he(st(E),{Legend:We})})),xt,k,St=n((()=>{f(),Fe(),Be(),le(),Re(),O(),xt={title:`JS Packages/Charts Library/Charts/Area Chart`,component:D,parameters:{layout:`centered`},decorators:[fe],argTypes:{...Pe,...d,...ue,...Le,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},k={...de,data:h.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),Ct=e({Animation:()=>V,AspectRatio:()=>B,CurveTypes:()=>G,CustomTooltip:()=>X,Default:()=>M,ErrorStates:()=>K,FillOpacity:()=>q,FixedDimensions:()=>z,GridVisibility:()=>Y,LinearLines:()=>L,MismatchedXDomains:()=>Q,NegativeValues:()=>Z,PercentageStack:()=>F,RescaleYOnVisibilityChange:()=>H,SingleSeries:()=>R,Streamgraph:()=>I,TimeAxisTickResolution:()=>$,Unstacked:()=>P,WithCompositionLegend:()=>W,WithDefaultHiddenSeries:()=>U,WithStroke:()=>J,Zoomable:()=>N,__namedExportsOrder:()=>Et,default:()=>wt}),A,wt,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Tt,$,Et,Dt=n((()=>{Ve(),O(),St(),A=c(),wt={...xt,title:`JS Packages/Charts Library/Charts/Area Chart`,component:xt.component,argTypes:{...xt.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},j=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Ie(e),s=a.data||k.data;t===`single`?s=[h[0]]:t===`multiple`?s=h.slice(0,4):t===`many`&&(s=h);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,A.jsx)(D,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},M=j.bind({}),M.args={...k,showLegend:!0},N=j.bind({}),N.args={...k,showLegend:!0,zoomable:!0},N.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},P=j.bind({}),P.args={...k,stacked:!1,showLegend:!0},P.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},F=j.bind({}),F.args={...k,stacked:!0,stackOffset:`expand`,showLegend:!0},F.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},I=j.bind({}),I.args={...k,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},I.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},L=j.bind({}),L.args={...k,curveType:`linear`,smoothing:!1,showLegend:!0},L.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},R=j.bind({}),R.args={...k,data:[ze[0]]},z=j.bind({}),z.args={...k,width:600,height:300,showLegend:!0},B=j.bind({}),B.args={...k,aspectRatio:.3,showLegend:!0},V=j.bind({}),V.args={...k,animation:!0,showLegend:!0,legendInteractive:!0},H={name:`Y-axis rescales when visible series change (default)`,render:e=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: true (default)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!0})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: false (pinned)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!1})]})]}),args:{...k,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},U=j.bind({}),U.args={...M.args,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`London`]},U.parameters={docs:{description:{story:`London is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}},W={render:e=>{let t=Ie(e);return(0,A.jsx)(D,{...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,A.jsx)(D.Legend,{...t})})},args:{...M.args,showLegend:!1},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},G={render:()=>{let e=h.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Linear`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`linear`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Monotone X`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},K={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Empty Data`}),(0,A.jsx)(D,{width:300,height:200,data:[]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Date Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Single Data Point`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},q=j.bind({}),q.args={...k,fillOpacity:.5,showLegend:!0},q.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},J=j.bind({}),J.args={...k,withStroke:!0,showLegend:!0},J.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},Y={render:()=>{let e=h.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Default grid`}),(0,A.jsx)(D,{width:400,height:240,data:e})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,A.jsx)(D,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},X=j.bind({}),X.args={...k,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,A.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,A.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:e.key}),(0,A.jsx)(`strong`,{children:e.value})]},e.key)),(0,A.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:`Total`}),(0,A.jsx)(`strong`,{children:r})]})]})}},X.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Z=j.bind({}),Z.args={...k,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Z.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},Q=j.bind({}),Q.args={...k,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},Q.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},Tt=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],$={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,A.jsx)(D,{width:460,height:220,data:Tt})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,A.jsx)(D,{width:460,height:220,data:Tt,options:{axis:{x:{tickResolution:`hour`}}}})]})]}),args:{containerWidth:`1020px`,containerHeight:`320px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution, `options.axis.x.tickResolution` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit `tickFormat` takes precedence over the hint."}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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