import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,t as a}from"./build-module-BXs6jvWf.js";import{n as o,t as s}from"./clsx-DtTNkXd0.js";import{t as c}from"./jsx-runtime-CFwixLRt.js";import{a as l,r as ee}from"./src-Crkqd2VY.js";import{Dt as te,j as ne,o as u,s as d,xt as f,yt as re}from"./chart-scope-DsuaszGe.js";import{$ as ie,A as ae,E as oe,Et as se,O as ce,g as le,i as ue,n as de,t as fe}from"./esm-BqlVY1a0.js";import{E as pe,M as me,O as he,S as ge,a as _e,o as ve,t as ye,u as be,w as xe}from"./providers-c3t5O_ZT.js";import{a as Se,c as Ce,d as we,f as p,i as Te,o as Ee,s as De,u as Oe}from"./line-chart-bX-qJwYb.js";import{c as ke,l as Ae,n as je,r as Me,s as Ne,t as Pe}from"./chart-decorator-ClegYhw4.js";import{i as Fe,n as Ie,t as Le}from"./legend-config-bcak0szs.js";import{n as Re,t as ze}from"./tooltip-config-DZqe68Fu.js";import{O as m,h as Be,k as Ve}from"./sample-data-BM1OOuQd.js";import{t as He}from"./stories-CX0i6ZVN.js";import{i as Ue,t as We}from"./chart-instance-context-Cwco7BG_.js";import{d as Ge,i as h,m as Ke,n as qe,o as Je,p as Ye,t as Xe}from"./chart-layout-D9-rWSu8.js";import{a as Ze,i as Qe,n as $e,o as et,t as tt}from"./tooltip-DTLShgfA.js";import{C as nt,S as rt,_ as it,b as at,f as ot,g as st,i as ct,n as lt,o as ut,p as dt,r as g,t as _,y as ft}from"./xy-plot.module-DZbfMu4a.js";import{r as pt,t as v}from"./with-responsive-PaMIejia.js";import{i as mt,n as ht,t as gt}from"./svg-empty-state-Hmd86QP3.js";import{t as _t}from"./line-chart-D-pWK8vJ.js";var vt,yt,bt=e((()=>{vt=`_rise_xqjue_1`,yt={"area-chart":`_area-chart_xqjue_1`,"area-chart--animated":`_area-chart--animated_xqjue_4`,rise:vt}})),xt,y=e((()=>{a(),ft(),xt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>at(e.value,{allowMissing:!1})||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),b,x,St,Ct,S=e((()=>{fe(),b=t(r(),1),x=c(),St=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,b.useContext)(ie);return(0,b.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},Ct=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,b.useContext)(ie),o=(0,b.useContext)(oe),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,ee=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!ee||!ee.date||t&&n!==`none`)return null;let te=Number(s(ee.date));if(!Number.isFinite(te))return null;let ne=ee.date.getTime(),u=0,d=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===ne),o=e?.value??0;if(t&&(u+=o),!e||e.value==null)continue;let s=Number(c(t?u:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});d.push((0,x.jsx)(`circle`,{cx:te,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return d.length===0?null:(0,x.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:d})}})),C=e((()=>{y(),S()})),w,T,wt,Tt,E,Et=e((()=>{l(),fe(),a(),o(),w=t(r(),1),Ge(),tt(),et(),ve(),ye(),rt(),ne(),f(),_t(),h(),We(),Xe(),gt(),it(),ot(),p(),g(),v(),Se(),_(),bt(),C(),T=c(),wt=(0,w.forwardRef)(({data:e,ariaLabel:t,chartId:n,width:r,height:a,className:o,margin:c,withTooltips:l=!0,withTooltipCrosshairs:te,showLegend:ne=!1,legend:u={},stacked:d=!0,stackOffset:f=`none`,smoothing:ie=!0,curveType:oe,fillOpacity:fe,withStroke:ve,renderTooltip:ye=Te,animation:Se,options:p={},onPointerDown:ke,onPointerUp:Ae,onPointerMove:je,onPointerOut:Me,zoomable:Ne=!1,rescaleYOnVisibilityChange:Pe=!0,defaultHiddenSeries:Fe,children:Ie,gridVisibility:Le,gap:Re=`md`,compactWhenShort:ze=!1},m)=>{let Be=u.interactive??!1,Ve=u.shape??`rect`,He=u.position??`bottom`,We=pe(),Ge=he(e),h=me(n),Xe=nt(h,Fe),et=(0,w.useCallback)(e=>!Xe.has(e),[Xe]),tt=(0,w.useRef)(null),[rt,it]=(0,w.useState)(void 0),[at,ot]=(0,w.useState)(!1),g=(0,w.useRef)(null),_=Oe({enabled:Ne,chartRef:g,userHandlers:{onPointerDown:ke,onPointerMove:je,onPointerUp:Ae}}),{legendChildren:ft,nonLegendChildren:pt}=Je(Ie,`AreaChart`),{isCompact:v,compactMargin:gt}=ct(ze,a),[_t,vt]=(0,w.useState)(),bt=(0,w.useCallback)(e=>{vt(e>0?e:a)},[a]);(0,w.useImperativeHandle)(m,()=>({getScales:()=>g.current?.getScales()||null,getChartDimensions:()=>g.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[g]);let y=xe(e),{getElementStyles:b}=se(),x=(0,w.useMemo)(()=>y.map((e,t)=>({series:e,index:t,isVisible:!Xe.has(e.label)})),[y,Xe]),S=(0,w.useMemo)(()=>x.every(({isVisible:e})=>!e),[x]),C=(0,w.useMemo)(()=>y.filter(e=>et(e.label)),[y,et]),wt=(0,w.useMemo)(()=>(!d||f===`none`)&&st(C),[C,d,f]),Tt=(0,w.useMemo)(()=>JSON.stringify(C.map(e=>e.label)),[C]),{tooltipRef:E,onChartFocus:Et,onChartBlur:Dt,onChartKeyDown:D}=Qe({selectedIndex:rt,setSelectedIndex:it,isNavigating:at,setIsNavigating:ot,chartRef:tt,totalPoints:(0,w.useMemo)(()=>Ze(C),[C]).count,visibleSeriesKey:Tt}),Ot=(0,w.useMemo)(()=>{if(Pe||!y.length||!y[0].data.length||d&&f!==`none`)return;if(d){let e=Math.max(...y.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of y){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of y)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[y,d,f,Pe]),O=(0,w.useMemo)(()=>({axis:{x:{...we({dataSorted:y,width:r,axisOptions:p?.axis?.x,scaleDomain:p?.xScale?.domain,zoomDomain:_.domain,formatting:We}),...v&&{display:!1}},y:{orientation:`left`,numTicks:4,tickFormat:ee,display:!0,...p?.axis?.y,...v&&{display:!1}}},xScale:{type:`time`,...p?.xScale,..._.domain?{domain:_.domain}:{}},yScale:{type:`linear`,nice:!0,zero:d,...Ot?{domain:Ot}:{},...p?.yScale}}),[p,y,r,d,Ot,_.domain,We,v]),k=ge(a,O,y,Ge),kt=xt(y),A=!kt;_e({chartId:h,legendItems:Ye(y,(0,w.useMemo)(()=>({withGlyph:!1,glyphSize:0,collapseGroups:u.collapseGroups??!1,comparisonItem:u.comparisonItem??!1,comparisonSeriesItems:u.comparisonSeriesItems}),[u.collapseGroups,u.comparisonItem,u.comparisonSeriesItems]),Ve),chartType:`area`,isDataValid:A,metadata:(0,w.useMemo)(()=>({stacked:d,stackOffset:f,smoothing:ie,curveType:oe}),[d,f,ie,oe])});let j=be(),M=!!Se&&!j,N={xAccessor:e=>e?.date,yAccessor:e=>e?.value},P=(0,w.useCallback)(()=>0,[]),F=(0,w.useMemo)(()=>new Set(x.filter(e=>e.isVisible).map(e=>e.series.label)),[x]),I=(0,w.useMemo)(()=>re(y.filter(e=>F.has(e.label)),p?.axis?.x?.tickResolution),[y,F,p?.axis?.x?.tickResolution]),L=(0,w.useCallback)(e=>{let t=e?.tooltipData?.datumByKey;if(!t)return ye({...e,bucketInfo:I});let n=Object.fromEntries(Object.entries(t).filter(([e])=>F.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&F.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return ye({...e,bucketInfo:I,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[ye,F,I]),R=fe??(d?.85:.4),z=ve??!d;if(kt)return(0,T.jsx)(`div`,{className:s(`area-chart`,yt[`area-chart`]),children:kt});let B=ne&&!v&&(0,T.jsx)(Ke,{orientation:u.orientation??`horizontal`,alignment:u.alignment??`center`,position:He,labelStyles:u.labelStyles,itemClassName:u.itemClassName,itemStyles:u.itemStyles,shapeStyles:u.shapeStyles,className:yt[`area-chart__legend`],shape:Ve,chartId:h,interactive:Be}),V=x.filter(({isVisible:e})=>e),H=ut(oe,ie),U=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=b({data:e,index:t});return(0,T.jsx)(ue,{dataKey:e?.label,data:e.data,xAccessor:N.xAccessor,yAccessor:n?N.yAccessor:P,fill:r,fillOpacity:R,...d?{}:{renderLine:z,curve:H},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,T.jsx)(Ue.Provider,{value:{chartId:h,chartRef:g,isSeriesVisible:et,chartWidth:r,chartHeight:_t||0},children:(0,T.jsx)(qe,{legendPosition:He,legendElement:B,legendChildren:v?[]:ft,gap:Re,className:s(`area-chart`,yt[`area-chart`],{[yt[`area-chart--animated`]]:M},o),style:{width:r,height:a},"data-testid":`area-chart`,trailingContent:pt,onContentHeightChange:bt,children:({contentHeight:e})=>{let n=e>0?e:a;return(0,T.jsx)(`div`,{ref:tt,role:`application`,"aria-label":t??i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:D,onFocus:Et,onBlur:Dt,children:n>0&&(0,T.jsxs)(`div`,{className:lt[`xy-plot`],children:[Ne&&_.domain&&(0,T.jsx)(De,{onClick:_.reset}),(0,T.jsxs)(le,{accessibilityLabel:``,theme:Ge,width:r,height:n,margin:{...k,...gt,...c},xScale:O.xScale,yScale:O.yScale,onPointerDown:_.handlers.onPointerDown,onPointerUp:_.handlers.onPointerUp,onPointerMove:_.handlers.onPointerMove,onPointerOut:Me,pointerEventsDataKey:`nearest`,children:[(0,T.jsx)(dt,{axis:`y`,numTicks:O.axis.y.numTicks,decimals:wt&&!O.axis.y.tickValues&&!p?.yScale?.domain?0:void 0,children:e=>(0,T.jsxs)(T.Fragment,{children:[!S&&Le!==`none`&&!v&&(0,T.jsx)(ce,{columns:!1,numTicks:O.axis.y.numTicks,tickValues:e??O.axis.y.tickValues}),!S&&O.axis.x.display&&(0,T.jsx)(ae,{...O.axis.x}),!S&&O.axis.y.display&&(0,T.jsx)(ae,{...O.axis.y,...e?{tickValues:e}:{}})]})}),S?(0,T.jsx)(mt,{x:r/2,y:n/2,width:r,height:n,children:ht(Be&&!v,`series`)}):null,(0,T.jsxs)(Ee,{active:Ne,chartId:h,children:[!S&&d&&(0,T.jsx)(de,{curve:H,offset:f,renderLine:z,children:x.map(U)}),!S&&!d&&x.map(U)]}),l&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)($e,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!d,renderTooltip:L,showVerticalCrosshair:te?.showVertical,showHorizontalCrosshair:te?.showHorizontal,selectedIndex:rt,tooltipRef:E,keyboardFocusedClassName:yt[`area-chart__tooltip--keyboard-focused`],series:C}),(0,T.jsx)(Ct,{visibleSeries:V,stacked:d,stackOffset:f,getElementStyles:b,strokeColor:Ge.backgroundColor})]}),(0,T.jsx)(St,{chartRef:g,width:r,height:a||n,margin:c}),Ne&&(0,T.jsx)(Ce,{drag:_.drag})]})]})})}})})}),Tt=(0,w.forwardRef)((e,t)=>(0,w.useContext)(u)?(0,T.jsx)(wt,{...e,ref:t}):(0,T.jsx)(d,{children:(0,T.jsx)(wt,{...e,ref:t})})),Tt.displayName=`AreaChart`,te(Tt,{Legend:Ke}),E=te(pt(Tt),{Legend:Ke})})),Dt,D,Ot=e((()=>{je(),Ie(),Be(),Ne(),ze(),Et(),Dt={title:`JS Packages/Charts Library/Charts/Area Chart`,component:E,parameters:{layout:`centered`},decorators:[Pe],argTypes:{...Fe,...Ae,...Me,...Re,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},D={...ke,data:m.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),O=n({Animation:()=>V,AspectRatio:()=>B,CompactWhenShort:()=>M,CurveTypes:()=>G,CustomTooltip:()=>X,Default:()=>j,ErrorStates:()=>K,FillOpacity:()=>q,FixedDimensions:()=>z,GridVisibility:()=>Y,LinearLines:()=>L,MismatchedXDomains:()=>Q,NegativeValues:()=>Z,PercentageStack:()=>F,RescaleYOnVisibilityChange:()=>H,SingleSeries:()=>R,Streamgraph:()=>I,TimeAxisTickResolution:()=>$,Unstacked:()=>P,WithCompositionLegend:()=>W,WithDefaultHiddenSeries:()=>U,WithStroke:()=>J,Zoomable:()=>N,__namedExportsOrder:()=>jt,default:()=>kt}),k,kt,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,At,$,jt,Mt=e((()=>{He(),Et(),Ot(),k=c(),kt={...Dt,title:`JS Packages/Charts Library/Charts/Area Chart`,component:Dt.component,argTypes:{...Dt.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},A=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Le(e),s=a.data||D.data;t===`single`?s=[m[0]]:t===`multiple`?s=m.slice(0,4):t===`many`&&(s=m);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,k.jsx)(E,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},j=A.bind({}),j.args={...D,showLegend:!0},M=A.bind({}),M.args={...D,showLegend:!0,compactWhenShort:!0,containerHeight:`120px`,resize:`vertical`},M.parameters={docs:{description:{story:"Below `theme.compactWhenShort.below` (140px by default) the chart drops its axes, grid and legend. Drag the container taller to bring them back."}}},N=A.bind({}),N.args={...D,showLegend:!0,zoomable:!0},N.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},P=A.bind({}),P.args={...D,stacked:!1,showLegend:!0},P.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},F=A.bind({}),F.args={...D,stacked:!0,stackOffset:`expand`,showLegend:!0},F.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},I=A.bind({}),I.args={...D,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},I.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},L=A.bind({}),L.args={...D,curveType:`linear`,smoothing:!1,showLegend:!0},L.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},R=A.bind({}),R.args={...D,data:[Ve[0]]},z=A.bind({}),z.args={...D,width:600,height:300,showLegend:!0},B=A.bind({}),B.args={...D,aspectRatio:.3,showLegend:!0},V=A.bind({}),V.args={...D,animation:!0,showLegend:!0,legendInteractive:!0},H={name:`Y-axis rescales when visible series change (default)`,render:e=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: true (default)`}),(0,k.jsx)(E,{...e,rescaleYOnVisibilityChange:!0})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: false (pinned)`}),(0,k.jsx)(E,{...e,rescaleYOnVisibilityChange:!1})]})]}),args:{...D,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},U=A.bind({}),U.args={...j.args,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`London`]},U.parameters={docs:{description:{story:`London is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}},W={render:e=>{let t=Le(e);return(0,k.jsx)(E,{...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,k.jsx)(E.Legend,{...t})})},args:{...j.args,showLegend:!1},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},G={render:()=>{let e=m.slice(0,3);return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Linear`}),(0,k.jsx)(E,{width:300,height:200,data:e,curveType:`linear`})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,k.jsx)(E,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Monotone X`}),(0,k.jsx)(E,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},K={render:()=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Empty Data`}),(0,k.jsx)(E,{width:300,height:200,data:[]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Invalid Date Values`}),(0,k.jsx)(E,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Invalid Values`}),(0,k.jsx)(E,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Single Data Point`}),(0,k.jsx)(E,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},q=A.bind({}),q.args={...D,fillOpacity:.5,showLegend:!0},q.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},J=A.bind({}),J.args={...D,withStroke:!0,showLegend:!0},J.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},Y={render:()=>{let e=m.slice(0,3);return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Default grid`}),(0,k.jsx)(E,{width:400,height:240,data:e})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,k.jsx)(E,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},X=A.bind({}),X.args={...D,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,k.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,k.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,k.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,k.jsx)(`span`,{children:e.key}),(0,k.jsx)(`strong`,{children:e.value})]},e.key)),(0,k.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,k.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,k.jsx)(`span`,{children:`Total`}),(0,k.jsx)(`strong`,{children:r})]})]})}},X.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Z=A.bind({}),Z.args={...D,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Z.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},Q=A.bind({}),Q.args={...D,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},Q.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},At=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],$={render:()=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,k.jsx)(E,{width:460,height:220,data:At})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,k.jsx)(E,{width:460,height:220,data:At,options:{axis:{x:{tickResolution:`hour`}}}})]})]}),args:{containerWidth:`1020px`,containerHeight:`320px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution, `options.axis.x.tickResolution` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit `tickFormat` takes precedence over the hint."}}}},jt=[`Default`,`CompactWhenShort`,`Zoomable`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnVisibilityChange`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`,`TimeAxisTickResolution`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}}}));Mt();export{V as Animation,B as AspectRatio,M as CompactWhenShort,G as CurveTypes,X as CustomTooltip,j as Default,K as ErrorStates,q as FillOpacity,z as FixedDimensions,Y as GridVisibility,L as LinearLines,Q as MismatchedXDomains,Z as NegativeValues,F as PercentageStack,H as RescaleYOnVisibilityChange,R as SingleSeries,I as Streamgraph,$ as TimeAxisTickResolution,P as Unstacked,W as WithCompositionLegend,U as WithDefaultHiddenSeries,J as WithStroke,N as Zoomable,jt as __namedExportsOrder,kt as default,Mt as n,O as t};