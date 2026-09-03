import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-2QZQpBH2.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{a as l,r as u}from"./src-bVDQDti1.js";import{c as ee,n as d,o as f,r as p,s as te,t as ne}from"./chart-decorator-CR7Psxjf.js";import{K as re,W as ie,Y as ae,g as oe,o as se,s as m}from"./chart-scope-tYY-F3az.js";import{A as ce,D as le,E as ue,G as de,O as fe,R as pe,S as me,U as he,Vt as ge,a as _e,c as ve,ht as ye,q as be,r as xe,s as Se,t as Ce,u as we,w as Te,zt as Ee}from"./providers-DYLZKlI2.js";import{a as De,c as Oe,d as ke,f as Ae,i as je,o as Me,s as Ne,u as Pe}from"./line-chart-DCBq9Ibl.js";import{i as Fe,n as Ie,t as Le}from"./legend-config-BJNKT_wW.js";import{n as Re,t as ze}from"./tooltip-config-B5skOp2s.js";import{C as h,f as Be,w as Ve}from"./sample-data-Cx3-uFO8.js";import{t as He}from"./stories-DNczHwP5.js";import{d as Ue,i as We,m as Ge,n as Ke,o as qe,p as Je,t as Ye,w as Xe,x as g}from"./chart-layout-DiZ25s57.js";import{i as Ze,n as Qe,t as _}from"./tooltip-FwwjJIPJ.js";import{d as $e,f as et,i as tt,n as nt,t as rt,u as it}from"./xy-plot.module-D_0HUaUO.js";import{r as at,t as ot}from"./with-responsive-DvIdtCEe.js";import{i as st,n as ct,t as lt}from"./svg-empty-state-Bnwrgr3M.js";import{t as v}from"./line-chart-Dq7RH0tL.js";var y,b,ut=n((()=>{y=`_rise_xqjue_1`,b={"area-chart":`_area-chart_xqjue_1`,"area-chart--animated":`_area-chart--animated_xqjue_4`,rise:y}})),dt,ft=n((()=>{a(),dt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),x,pt,mt,ht,gt=n((()=>{le(),x=t(r(),1),pt=c(),mt=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,x.useContext)(ye);return(0,x.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},ht=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,x.useContext)(ye),o=(0,x.useContext)(he),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let ee=Number(s(u.date));if(!Number.isFinite(ee))return null;let d=u.date.getTime(),f=0,p=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===d),o=e?.value??0;if(t&&(f+=o),!e||e.value==null)continue;let s=Number(c(t?f:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});p.push((0,pt.jsx)(`circle`,{cx:ee,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return p.length===0?null:(0,pt.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:p})}})),S=n((()=>{ft(),gt()})),C,w,T,E,D,_t=n((()=>{l(),le(),a(),o(),C=t(r(),1),Ue(),_(),ve(),Ce(),$e(),oe(),re(),v(),We(),g(),Ye(),lt(),it(),Ae(),ot(),De(),rt(),ut(),S(),w=c(),T=(0,C.forwardRef)(({data:e,chartId:t,width:n,height:r,className:a,margin:o,withTooltips:c=!0,withTooltipCrosshairs:l,showLegend:ee=!1,legend:d={},stacked:f=!0,stackOffset:p=`none`,smoothing:te=!0,curveType:ne,fillOpacity:re,withStroke:ae,renderTooltip:oe=je,animation:se,options:m={},onPointerDown:le,onPointerUp:he,onPointerMove:ve,onPointerOut:ye,zoomable:Ce=!1,rescaleYOnVisibilityChange:De,rescaleYOnLegendToggle:Ae,defaultHiddenSeries:Fe,children:Ie,gridVisibility:Le,gap:Re=`md`},ze)=>{let h=d.interactive??!1,Be=d.shape??`rect`,Ve=d.position??`bottom`,He=De??Ae??!0,Ue=_e(),We=xe(),Ye=ue(e),g=Ee(t),_=et(g,Fe),$e=(0,C.useCallback)(e=>!_.has(e),[_]),rt=(0,C.useRef)(null),[it,at]=(0,C.useState)(void 0),[ot,lt]=(0,C.useState)(!1),v=(0,C.useRef)(null),y=Pe({enabled:Ce,chartRef:v,userHandlers:{onPointerDown:le,onPointerMove:ve,onPointerUp:he}}),{legendChildren:ut,nonLegendChildren:ft}=qe(Ie,`AreaChart`),[x,pt]=(0,C.useState)(),gt=(0,C.useCallback)(e=>{pt(e>0?e:r)},[r]);(0,C.useImperativeHandle)(ze,()=>({getScales:()=>v.current?.getScales()||null,getChartDimensions:()=>v.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[v]);let S=Te(e),{getElementStyles:T}=ge(),E=(0,C.useMemo)(()=>S.map((e,t)=>({series:e,index:t,isVisible:!_.has(e.label)})),[S,_]),D=(0,C.useMemo)(()=>E.every(({isVisible:e})=>!e),[E]),{tooltipRef:_t,onChartFocus:O,onChartBlur:k,onChartKeyDown:vt}=Ze({selectedIndex:it,setSelectedIndex:at,isNavigating:ot,setIsNavigating:lt,chartRef:rt,totalPoints:S[0]?.data.length||0}),yt=(0,C.useMemo)(()=>{if(He||!S.length||!S[0].data.length||f&&p!==`none`)return;if(f){let e=Math.max(...S.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of S){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of S)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[S,f,p,He]),A=(0,C.useMemo)(()=>({axis:{x:ke({dataSorted:S,width:n,axisOptions:m?.axis?.x,scaleDomain:m?.xScale?.domain,zoomDomain:y.domain,formatting:We}),y:{orientation:`left`,numTicks:4,tickFormat:u,display:!0,...m?.axis?.y}},xScale:{type:`time`,...m?.xScale,...y.domain?{domain:y.domain}:{}},yScale:{type:`linear`,nice:!0,zero:f,...yt?{domain:yt}:{},...m?.yScale}}),[m,S,n,f,yt,y.domain,We]),bt=me(r,A,S,Ye),j=dt(S),M=!j;Se({chartId:g,legendItems:Je(S,(0,C.useMemo)(()=>({withGlyph:!1,glyphSize:0,collapseGroups:d.collapseGroups??!1}),[d.collapseGroups]),Be),chartType:`area`,isDataValid:M,metadata:(0,C.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:te,curveType:ne}),[f,p,te,ne])});let N=we(),P=!!se&&!N,F={xAccessor:e=>e?.date,yAccessor:e=>e?.value},I=(0,C.useCallback)(()=>0,[]),L=(0,C.useMemo)(()=>new Set(E.filter(e=>e.isVisible).map(e=>e.series.label)),[E]),R=(0,C.useMemo)(()=>ie(S.filter(e=>L.has(e.label)),m?.axis?.x?.tickResolution),[S,L,m?.axis?.x?.tickResolution]),z=(0,C.useCallback)(e=>{let t=e?.tooltipData?.datumByKey;if(!t)return oe({...e,bucketInfo:R});let n=Object.fromEntries(Object.entries(t).filter(([e])=>L.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&L.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return oe({...e,bucketInfo:R,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[oe,L,R]),B=re??(f?.85:.4),V=ae??!f;if(j)return(0,w.jsx)(`div`,{className:s(`area-chart`,b[`area-chart`]),children:j});let H=ee&&(0,w.jsx)(Ge,{orientation:d.orientation??`horizontal`,alignment:d.alignment??`center`,position:Ve,labelStyles:d.labelStyles,itemClassName:d.itemClassName,itemStyles:d.itemStyles,shapeStyles:d.shapeStyles,className:b[`area-chart__legend`],shape:Be,chartId:g,interactive:h}),U=E.filter(({isVisible:e})=>e),W=tt(ne,te),G=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=T({data:e,index:t});return(0,w.jsx)(ce,{dataKey:e?.label,data:e.data,xAccessor:F.xAccessor,yAccessor:n?F.yAccessor:I,fill:r,fillOpacity:B,...f?{}:{renderLine:V,curve:W},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,w.jsx)(Xe.Provider,{value:{chartId:g,chartRef:v,isSeriesVisible:$e,chartWidth:n,chartHeight:x||0},children:(0,w.jsx)(Ke,{legendPosition:Ve,legendElement:H,legendChildren:ut,gap:Re,className:s(`area-chart`,b[`area-chart`],{[b[`area-chart--animated`]]:P},a),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:ft,onContentHeightChange:gt,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,w.jsx)(`div`,{role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:vt,onFocus:O,onBlur:k,children:t>0&&(0,w.jsxs)(`div`,{ref:rt,className:nt[`xy-plot`],children:[Ce&&y.domain&&(0,w.jsx)(Ne,{onClick:y.reset}),(0,w.jsxs)(pe,{theme:Ye,width:n,height:t,margin:{...bt,...o},xScale:A.xScale,yScale:A.yScale,onPointerDown:y.handlers.onPointerDown,onPointerUp:y.handlers.onPointerUp,onPointerMove:y.handlers.onPointerMove,onPointerOut:ye,pointerEventsDataKey:`nearest`,children:[!D&&Le!==`none`&&(0,w.jsx)(de,{columns:!1,numTicks:4}),!D&&A.axis.x.display&&(0,w.jsx)(be,{...A.axis.x}),!D&&A.axis.y.display&&(0,w.jsx)(be,{...A.axis.y}),D?(0,w.jsx)(st,{x:n/2,y:t/2,width:n,height:t,children:ct(h,`series`)}):null,(0,w.jsxs)(Me,{active:Ce,chartId:g,children:[!D&&f&&(0,w.jsx)(fe,{curve:W,offset:p,renderLine:V,children:E.map(G)}),!D&&!f&&E.map(G)]}),c&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Qe,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:z,showVerticalCrosshair:l?.showVertical,showHorizontalCrosshair:l?.showHorizontal,selectedIndex:it,tooltipRef:_t,keyboardFocusedClassName:b[`area-chart__tooltip--keyboard-focused`],series:S}),(0,w.jsx)(ht,{visibleSeries:U,stacked:f,stackOffset:p,getElementStyles:T,strokeColor:Ye.backgroundColor??Ue.backgroundColor})]}),(0,w.jsx)(mt,{chartRef:v,width:n,height:r||t,margin:o}),Ce&&(0,w.jsx)(Oe,{drag:y.drag})]})]})})}})})}),E=(0,C.forwardRef)((e,t)=>(0,C.useContext)(se)?(0,w.jsx)(T,{...e,ref:t}):(0,w.jsx)(m,{children:(0,w.jsx)(T,{...e,ref:t})})),E.displayName=`AreaChart`,ae(E,{Legend:Ge}),D=ae(at(E),{Legend:Ge})})),O,k,vt=n((()=>{d(),Ie(),Be(),f(),ze(),_t(),O={title:`JS Packages/Charts Library/Charts/Area Chart`,component:D,parameters:{layout:`centered`},decorators:[ne],argTypes:{...Fe,...ee,...p,...Re,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},k={...te,data:h.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),yt=e({Animation:()=>V,AspectRatio:()=>B,CurveTypes:()=>G,CustomTooltip:()=>X,Default:()=>M,ErrorStates:()=>K,FillOpacity:()=>q,FixedDimensions:()=>z,GridVisibility:()=>Y,LinearLines:()=>L,MismatchedXDomains:()=>Q,NegativeValues:()=>Z,PercentageStack:()=>F,RescaleYOnVisibilityChange:()=>H,SingleSeries:()=>R,Streamgraph:()=>I,TimeAxisTickResolution:()=>$,Unstacked:()=>P,WithCompositionLegend:()=>W,WithDefaultHiddenSeries:()=>U,WithStroke:()=>J,Zoomable:()=>N,__namedExportsOrder:()=>St,default:()=>bt}),A,bt,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,xt,$,St,Ct=n((()=>{He(),_t(),vt(),A=c(),bt={...O,title:`JS Packages/Charts Library/Charts/Area Chart`,component:O.component,argTypes:{...O.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},j=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Le(e),s=a.data||k.data;t===`single`?s=[h[0]]:t===`multiple`?s=h.slice(0,4):t===`many`&&(s=h);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,A.jsx)(D,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},M=j.bind({}),M.args={...k,showLegend:!0},N=j.bind({}),N.args={...k,showLegend:!0,zoomable:!0},N.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},P=j.bind({}),P.args={...k,stacked:!1,showLegend:!0},P.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},F=j.bind({}),F.args={...k,stacked:!0,stackOffset:`expand`,showLegend:!0},F.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},I=j.bind({}),I.args={...k,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},I.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},L=j.bind({}),L.args={...k,curveType:`linear`,smoothing:!1,showLegend:!0},L.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},R=j.bind({}),R.args={...k,data:[Ve[0]]},z=j.bind({}),z.args={...k,width:600,height:300,showLegend:!0},B=j.bind({}),B.args={...k,aspectRatio:.3,showLegend:!0},V=j.bind({}),V.args={...k,animation:!0,showLegend:!0,legendInteractive:!0},H={name:`Y-axis rescales when visible series change (default)`,render:e=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: true (default)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!0})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: false (pinned)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!1})]})]}),args:{...k,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},U=j.bind({}),U.args={...M.args,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`London`]},U.parameters={docs:{description:{story:`London is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}},W={render:e=>{let t=Le(e);return(0,A.jsx)(D,{...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,A.jsx)(D.Legend,{...t})})},args:{...M.args,showLegend:!1},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},G={render:()=>{let e=h.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Linear`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`linear`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Monotone X`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},K={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Empty Data`}),(0,A.jsx)(D,{width:300,height:200,data:[]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Date Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Single Data Point`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},q=j.bind({}),q.args={...k,fillOpacity:.5,showLegend:!0},q.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},J=j.bind({}),J.args={...k,withStroke:!0,showLegend:!0},J.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},Y={render:()=>{let e=h.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Default grid`}),(0,A.jsx)(D,{width:400,height:240,data:e})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,A.jsx)(D,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},X=j.bind({}),X.args={...k,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,A.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,A.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:e.key}),(0,A.jsx)(`strong`,{children:e.value})]},e.key)),(0,A.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:`Total`}),(0,A.jsx)(`strong`,{children:r})]})]})}},X.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Z=j.bind({}),Z.args={...k,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Z.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},Q=j.bind({}),Q.args={...k,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},Q.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},xt=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],$={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,A.jsx)(D,{width:460,height:220,data:xt})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,A.jsx)(D,{width:460,height:220,data:xt,options:{axis:{x:{tickResolution:`hour`}}}})]})]}),args:{containerWidth:`1020px`,containerHeight:`320px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution, `options.axis.x.tickResolution` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit `tickFormat` takes precedence over the hint."}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},St=[`Default`,`Zoomable`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnVisibilityChange`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`,`TimeAxisTickResolution`]}));Ct();export{V as Animation,B as AspectRatio,G as CurveTypes,X as CustomTooltip,M as Default,K as ErrorStates,q as FillOpacity,z as FixedDimensions,Y as GridVisibility,L as LinearLines,Q as MismatchedXDomains,Z as NegativeValues,F as PercentageStack,H as RescaleYOnVisibilityChange,R as SingleSeries,I as Streamgraph,$ as TimeAxisTickResolution,P as Unstacked,W as WithCompositionLegend,U as WithDefaultHiddenSeries,J as WithStroke,N as Zoomable,St as __namedExportsOrder,bt as default,Ct as n,yt as t};