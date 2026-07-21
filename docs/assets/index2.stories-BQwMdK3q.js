import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-Da_5_6n_.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{a as l,r as u}from"./src-B1Hf-orG.js";import{A as ee,E as te,O as ne,P as d,Q as f,R as re,S as ie,a as ae,b as oe,c as se,k as p,o as ce,r as le,t as ue,w as de}from"./providers-D8kYWlIB.js";import{C as fe,D as pe,T as me,f as he,i as ge,n as _e,t as ve,x as ye}from"./esm-D4bKXU70.js";import{a as be,c as xe,d as Se,f as Ce,i as we,l as Te,o as Ee,p as m,s as De,u as Oe}from"./line-chart-gj8AUbfY.js";import{c as ke,n as Ae,o as je,r as Me,s as h,t as Ne}from"./chart-decorator-DZrcZddZ.js";import{n as Pe,r as Fe,t as Ie}from"./legend-config-DvuGdtSm.js";import{n as Le,t as g}from"./tooltip-config-B5skOp2s.js";import{C as _,f as Re,w as ze}from"./sample-data-Cx3-uFO8.js";import{t as Be}from"./stories-DrK5Mwz7.js";import{d as v,g as Ve,i as He,m as Ue,n as We,o as Ge,p as Ke,t as qe,y as Je}from"./chart-layout-BMhlBvl5.js";import{i as Ye,n as Xe,t as Ze}from"./tooltip-DUHQCO5P.js";import{n as Qe,t as $e}from"./svg-empty-state-Dzu4CcsP.js";import{r as y,t as b}from"./with-responsive-Cw14H_Vu.js";import{t as et}from"./line-chart-D9SphdVP.js";var tt,x,nt=n((()=>{tt=`_rise_uhkqb_1`,x={"area-chart":`_area-chart_uhkqb_1`,"area-chart--animated":`_area-chart--animated_uhkqb_4`,rise:tt}})),rt,it=n((()=>{a(),rt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),S,C,at,ot,st=n((()=>{ve(),S=t(r(),1),C=c(),at=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,S.useContext)(pe);return(0,S.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},ot=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,S.useContext)(pe),o=(0,S.useContext)(ye),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let ee=Number(s(u.date));if(!Number.isFinite(ee))return null;let te=u.date.getTime(),ne=0,d=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===te),o=e?.value??0;if(t&&(ne+=o),!e||e.value==null)continue;let s=Number(c(t?ne:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});d.push((0,C.jsx)(`circle`,{cx:ee,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return d.length===0?null:(0,C.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:d})}})),ct=n((()=>{it(),st()})),w,T,E,D,O,lt=n((()=>{l(),ve(),a(),o(),w=t(r(),1),v(),Ze(),ce(),ue(),d(),et(),He(),qe(),Ve(),$e(),m(),b(),xe(),nt(),ct(),T=c(),E=(0,w.forwardRef)(({data:e,chartId:t,width:n,height:r,className:a,margin:o,withTooltips:c=!0,withTooltipCrosshairs:l,showLegend:ee=!1,legend:d={},stacked:f=!0,stackOffset:p=`none`,smoothing:ce=!0,curveType:ue,fillOpacity:pe,withStroke:ve,renderTooltip:ye=we,animation:xe,options:m={},onPointerDown:ke,onPointerUp:Ae,onPointerMove:je,onPointerOut:Me,zoomable:h=!1,rescaleYOnLegendToggle:Ne=!0,children:Pe,gridVisibility:Fe,gap:Ie=`md`},Le)=>{let g=d.interactive??!1,_=d.shape??`rect`,Re=d.position??`bottom`,ze=le(),Be=de(e),v=te(t),Ve=(0,w.useRef)(null),[He,qe]=(0,w.useState)(void 0),[Ze,$e]=(0,w.useState)(!1),y=(0,w.useRef)(null),b=Te({enabled:h,chartRef:y,userHandlers:{onPointerDown:ke,onPointerMove:je,onPointerUp:Ae}}),{legendChildren:et,nonLegendChildren:tt}=Ge(Pe,`AreaChart`),[nt,it]=(0,w.useState)(),S=(0,w.useCallback)(e=>{it(e>0?e:r)},[r]);(0,w.useImperativeHandle)(Le,()=>({getScales:()=>y.current?.getScales()||null,getChartDimensions:()=>y.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[y]);let C=ie(e),{getElementStyles:st,isSeriesVisible:ct}=ne(),E=(0,w.useMemo)(()=>!v||!g?C.map((e,t)=>({series:e,index:t,isVisible:!0})):C.map((e,t)=>({series:e,index:t,isVisible:ct(v,e.label)})),[C,v,ct,g]),D=(0,w.useMemo)(()=>E.every(({isVisible:e})=>!e),[E]),{tooltipRef:O,onChartFocus:lt,onChartBlur:k,onChartKeyDown:A}=Ye({selectedIndex:He,setSelectedIndex:qe,isNavigating:Ze,setIsNavigating:$e,chartRef:Ve,totalPoints:C[0]?.data.length||0}),ut=(0,w.useMemo)(()=>{if(Ne||!g||!C.length||!C[0].data.length||f&&p!==`none`)return;if(f){let e=Math.max(...C.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of C){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of C)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[C,f,p,g,Ne]),j=(0,w.useMemo)(()=>{let e=m?.axis?.x?.tickFormat||Se(C);return{axis:{x:{orientation:`bottom`,numTicks:Ce(C,n,e),tickFormat:e,display:!0,...m?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:u,display:!0,...m?.axis?.y}},xScale:{type:`time`,...m?.xScale,...b.domain?{domain:b.domain}:{}},yScale:{type:`linear`,nice:!0,zero:f,...ut?{domain:ut}:{},...m?.yScale}}},[m,C,n,f,ut,b.domain]),M=oe(r,j,C,Be),N=rt(C),P=!N;ae({chartId:v,legendItems:Ke(C,(0,w.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),_),chartType:`area`,isDataValid:P,metadata:(0,w.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:ce,curveType:ue}),[f,p,ce,ue])});let F=se(),I=!!xe&&!F,L={xAccessor:e=>e?.date,yAccessor:e=>e?.value},R=(0,w.useCallback)(()=>0,[]),z=(0,w.useMemo)(()=>new Set(E.filter(e=>e.isVisible).map(e=>e.series.label)),[E]),B=(0,w.useCallback)(e=>{if(!g)return ye(e);let t=e?.tooltipData?.datumByKey;if(!t)return ye(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>z.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&z.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return ye({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[ye,g,z]),V=pe??(f?.85:.4),H=ve??!f;if(N)return(0,T.jsx)(`div`,{className:s(`area-chart`,x[`area-chart`]),children:N});let U=ee&&(0,T.jsx)(Ue,{orientation:d.orientation??`horizontal`,alignment:d.alignment??`center`,position:Re,labelStyles:d.labelStyles,itemClassName:d.itemClassName,itemStyles:d.itemStyles,shapeStyles:d.shapeStyles,className:x[`area-chart__legend`],shape:_,chartId:v,interactive:g}),W=E.filter(({isVisible:e})=>e),G=Oe(ue,ce),K=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=st({data:e,index:t});return(0,T.jsx)(ge,{dataKey:e?.label,data:e.data,xAccessor:L.xAccessor,yAccessor:n||!g?L.yAccessor:R,fill:r,fillOpacity:V,...f?{}:{renderLine:H,curve:G},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,T.jsx)(Je.Provider,{value:{chartId:v,chartRef:y,chartWidth:n,chartHeight:nt||0},children:(0,T.jsx)(We,{legendPosition:Re,legendElement:U,legendChildren:et,gap:Ie,className:s(`area-chart`,x[`area-chart`],{[x[`area-chart--animated`]]:I},a),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:tt,onContentHeightChange:S,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,T.jsx)(`div`,{role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:A,onFocus:lt,onBlur:k,children:t>0&&(0,T.jsxs)(`div`,{ref:Ve,style:{position:`relative`},children:[h&&b.domain&&(0,T.jsx)(Ee,{onClick:b.reset}),(0,T.jsxs)(he,{theme:Be,width:n,height:t,margin:{...M,...o},xScale:j.xScale,yScale:j.yScale,onPointerDown:b.handlers.onPointerDown,onPointerUp:b.handlers.onPointerUp,onPointerMove:b.handlers.onPointerMove,onPointerOut:Me,pointerEventsDataKey:`nearest`,children:[Fe!==`none`&&(0,T.jsx)(fe,{columns:!1,numTicks:4}),j.axis.x.display&&(0,T.jsx)(me,{...j.axis.x}),j.axis.y.display&&(0,T.jsx)(me,{...j.axis.y}),D?(0,T.jsx)(Qe,{x:n/2,y:t/2,width:n,height:t,children:i(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,(0,T.jsxs)(be,{active:h,chartId:v,children:[!D&&f&&(0,T.jsx)(_e,{curve:G,offset:p,renderLine:H,children:E.map(K)}),!D&&!f&&E.map(K)]}),c&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Xe,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:B,showVerticalCrosshair:l?.showVertical,showHorizontalCrosshair:l?.showHorizontal,selectedIndex:He,tooltipRef:O,keyboardFocusedClassName:x[`area-chart__tooltip--keyboard-focused`],series:C}),(0,T.jsx)(ot,{visibleSeries:W,stacked:f,stackOffset:p,getElementStyles:st,strokeColor:re(ze.backgroundColor)??ze.backgroundColor})]}),(0,T.jsx)(at,{chartRef:y,width:n,height:r||t,margin:o}),h&&(0,T.jsx)(De,{drag:b.drag})]})]})})}})})}),D=(0,w.forwardRef)((e,t)=>(0,w.useContext)(p)?(0,T.jsx)(E,{...e,ref:t}):(0,T.jsx)(ee,{children:(0,T.jsx)(E,{...e,ref:t})})),D.displayName=`AreaChart`,f(D,{Legend:Ue}),O=f(y(D),{Legend:Ue})})),k,A,ut=n((()=>{Ae(),Pe(),Re(),je(),g(),lt(),k={title:`JS Packages/Charts Library/Charts/Area Chart`,component:O,parameters:{layout:`centered`},decorators:[Ne],argTypes:{...Fe,...ke,...Me,...Le,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},A={...h,data:_.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),j=e({Animation:()=>U,AspectRatio:()=>H,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>F,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>V,GridVisibility:()=>X,LinearLines:()=>z,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>L,RescaleYOnLegendToggle:()=>W,SingleSeries:()=>B,Streamgraph:()=>R,Unstacked:()=>I,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>dt,default:()=>N}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,dt,ft=n((()=>{Be(),lt(),ut(),M=c(),N={...k,title:`JS Packages/Charts Library/Charts/Area Chart`,component:k.component,argTypes:{...k.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},P=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Ie(e),s=a.data||A.data;t===`single`?s=[_[0]]:t===`multiple`?s=_.slice(0,4):t===`many`&&(s=_);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,M.jsx)(O,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},F=P.bind({}),F.args={...A,showLegend:!0,zoomable:!0},I=P.bind({}),I.args={...A,stacked:!1,showLegend:!0},I.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},L=P.bind({}),L.args={...A,stacked:!0,stackOffset:`expand`,showLegend:!0},L.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},R=P.bind({}),R.args={...A,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},R.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},z=P.bind({}),z.args={...A,curveType:`linear`,smoothing:!1,showLegend:!0},z.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},B=P.bind({}),B.args={...A,data:[ze[0]]},V=P.bind({}),V.args={...A,width:600,height:300,showLegend:!0},H=P.bind({}),H.args={...A,aspectRatio:.3,showLegend:!0},U=P.bind({}),U.args={...A,animation:!0,showLegend:!0,legendInteractive:!0},W={name:`Y-axis rescales when legends toggle (default)`,render:e=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`rescaleYOnLegendToggle: true (default)`}),(0,M.jsx)(O,{...e,rescaleYOnLegendToggle:!0})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`rescaleYOnLegendToggle: false (pinned)`}),(0,M.jsx)(O,{...e,rescaleYOnLegendToggle:!1})]})]}),args:{...A,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},G={render:e=>{let t=Ie(e);return(0,M.jsx)(O,{...F.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,M.jsx)(O.Legend,{...t})})},args:{...F.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=_.slice(0,3);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Linear`}),(0,M.jsx)(O,{width:300,height:200,data:e,curveType:`linear`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,M.jsx)(O,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Monotone X`}),(0,M.jsx)(O,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Empty Data`}),(0,M.jsx)(O,{width:300,height:200,data:[]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Invalid Date Values`}),(0,M.jsx)(O,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Invalid Values`}),(0,M.jsx)(O,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Single Data Point`}),(0,M.jsx)(O,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=P.bind({}),J.args={...A,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=P.bind({}),Y.args={...A,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=_.slice(0,3);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Default grid`}),(0,M.jsx)(O,{width:400,height:240,data:e})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,M.jsx)(O,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=P.bind({}),Z.args={...A,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,M.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,M.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,M.jsx)(`span`,{children:e.key}),(0,M.jsx)(`strong`,{children:e.value})]},e.key)),(0,M.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,M.jsx)(`span`,{children:`Total`}),(0,M.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=P.bind({}),Q.args={...A,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=P.bind({}),$.args={...A,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
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
  name: 'Y-axis rescales when legends toggle (default)',
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h4>rescaleYOnLegendToggle: true (default)</h4>
                <AreaChart {...args} rescaleYOnLegendToggle />
            </div>
            <div>
                <h4>rescaleYOnLegendToggle: false (pinned)</h4>
                <AreaChart {...args} rescaleYOnLegendToggle={false} />
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig<ChartLegendConfig<SeriesData[]>>(args);
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},dt=[`Default`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnLegendToggle`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`]}));ft();export{U as Animation,H as AspectRatio,K as CurveTypes,Z as CustomTooltip,F as Default,q as ErrorStates,J as FillOpacity,V as FixedDimensions,X as GridVisibility,z as LinearLines,$ as MismatchedXDomains,Q as NegativeValues,L as PercentageStack,W as RescaleYOnLegendToggle,B as SingleSeries,R as Streamgraph,I as Unstacked,G as WithCompositionLegend,Y as WithStroke,dt as __namedExportsOrder,N as default,ft as n,j as t};