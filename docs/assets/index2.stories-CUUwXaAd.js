import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-DyKOxfM8.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{a as l,r as ee}from"./src-CbapNz2w.js";import{A as te,I as ne,M as u,O as re,S as ie,a as ae,b as oe,c as se,et as d,j as f,o as ce,r as le,t as ue,w as de}from"./providers-DvNSO8An.js";import{C as fe,D as pe,T as me,f as he,i as ge,n as _e,t as ve,x as ye}from"./esm-BymEYRN_.js";import{a as be,c as xe,i as Se,o as Ce,s as we,u as Te}from"./line-chart-C2Dioz3V.js";import{c as p,n as Ee,o as De,r as Oe,s as ke,t as Ae}from"./chart-decorator-DK3GABk0.js";import{i as je,n as Me,t as Ne}from"./legend-config-BJNKT_wW.js";import{n as Pe,t as Fe}from"./tooltip-config-B5skOp2s.js";import{C as m,f as h,w as Ie}from"./sample-data-Cx3-uFO8.js";import{t as Le}from"./stories-DvLwYeYg.js";import{d as Re,i as ze,m as Be,n as Ve,o as He,p as Ue,t as We,w as Ge,x as g}from"./chart-layout-3qf9LgLx.js";import{i as Ke,n as qe,t as Je}from"./tooltip-U0foRXwH.js";import{n as Ye,t as Xe}from"./svg-empty-state-CX0LKoep.js";import{a as Ze,i as Qe,o as $e,r as et}from"./time-axis-Dadt7TlY.js";import{r as tt,t as nt}from"./with-responsive-C8GKPThw.js";import{t as _}from"./line-chart-DM4VySuq.js";var v,y,rt=n((()=>{v=`_rise_uhkqb_1`,y={"area-chart":`_area-chart_uhkqb_1`,"area-chart--animated":`_area-chart--animated_uhkqb_4`,rise:v}})),it,at=n((()=>{a(),it=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),b,ot,st,ct,lt=n((()=>{ve(),b=t(r(),1),ot=c(),st=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,b.useContext)(pe);return(0,b.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},ct=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,b.useContext)(pe),o=(0,b.useContext)(ye),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,ee=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!ee||!ee.date||t&&n!==`none`)return null;let te=Number(s(ee.date));if(!Number.isFinite(te))return null;let ne=ee.date.getTime(),u=0,re=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===ne),o=e?.value??0;if(t&&(u+=o),!e||e.value==null)continue;let s=Number(c(t?u:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});re.push((0,ot.jsx)(`circle`,{cx:te,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return re.length===0?null:(0,ot.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:re})}})),x=n((()=>{at(),lt()})),S,C,w,T,E,D=n((()=>{l(),ve(),a(),o(),S=t(r(),1),Re(),Je(),ce(),ue(),ne(),_(),ze(),We(),g(),Xe(),$e(),nt(),be(),rt(),x(),C=c(),w=(0,S.forwardRef)(({data:e,chartId:t,width:n,height:r,className:a,margin:o,withTooltips:c=!0,withTooltipCrosshairs:l,showLegend:ne=!1,legend:u={},stacked:d=!0,stackOffset:f=`none`,smoothing:ce=!0,curveType:ue,fillOpacity:pe,withStroke:ve,renderTooltip:ye=Se,animation:be,options:p={},onPointerDown:Ee,onPointerUp:De,onPointerMove:Oe,onPointerOut:ke,zoomable:Ae=!1,rescaleYOnVisibilityChange:je,rescaleYOnLegendToggle:Me,children:Ne,gridVisibility:Pe,gap:Fe=`md`},m)=>{let h=u.interactive??!1,Ie=u.shape??`rect`,Le=u.position??`bottom`,Re=je??Me??!0,ze=le(),We=de(e),g=re(t),Je=(0,S.useRef)(null),[Xe,$e]=(0,S.useState)(void 0),[tt,nt]=(0,S.useState)(!1),_=(0,S.useRef)(null),v=Te({enabled:Ae,chartRef:_,userHandlers:{onPointerDown:Ee,onPointerMove:Oe,onPointerUp:De}}),{legendChildren:rt,nonLegendChildren:at}=He(Ne,`AreaChart`),[b,ot]=(0,S.useState)(),lt=(0,S.useCallback)(e=>{ot(e>0?e:r)},[r]);(0,S.useImperativeHandle)(m,()=>({getScales:()=>_.current?.getScales()||null,getChartDimensions:()=>_.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[_]);let x=ie(e),{getElementStyles:w,isSeriesVisible:T}=te(),E=(0,S.useMemo)(()=>!g||!h?x.map((e,t)=>({series:e,index:t,isVisible:!0})):x.map((e,t)=>({series:e,index:t,isVisible:T(g,e.label)})),[x,g,T,h]),D=(0,S.useMemo)(()=>E.every(({isVisible:e})=>!e),[E]),{tooltipRef:O,onChartFocus:k,onChartBlur:ut,onChartKeyDown:dt}=Ke({selectedIndex:Xe,setSelectedIndex:$e,isNavigating:tt,setIsNavigating:nt,chartRef:Je,totalPoints:x[0]?.data.length||0}),A=(0,S.useMemo)(()=>{if(Re||!h||!x.length||!x[0].data.length||d&&f!==`none`)return;if(d){let e=Math.max(...x.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of x){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of x)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[x,d,f,h,Re]),j=(0,S.useMemo)(()=>{let{tickResolution:e,...t}=p?.axis?.x??{},r=t.tickFormat||Qe(x,e);return{axis:{x:{orientation:`bottom`,numTicks:Ze(x,n,r),tickFormat:r,display:!0,...t},y:{orientation:`left`,numTicks:4,tickFormat:ee,display:!0,...p?.axis?.y}},xScale:{type:`time`,...p?.xScale,...v.domain?{domain:v.domain}:{}},yScale:{type:`linear`,nice:!0,zero:d,...A?{domain:A}:{},...p?.yScale}}},[p,x,n,d,A,v.domain]),M=oe(r,j,x,We),N=it(x),P=!N;ae({chartId:g,legendItems:Ue(x,(0,S.useMemo)(()=>({withGlyph:!1,glyphSize:0,collapseGroups:u.collapseGroups??!1}),[u.collapseGroups]),Ie),chartType:`area`,isDataValid:P,metadata:(0,S.useMemo)(()=>({stacked:d,stackOffset:f,smoothing:ce,curveType:ue}),[d,f,ce,ue])});let F=se(),I=!!be&&!F,L={xAccessor:e=>e?.date,yAccessor:e=>e?.value},R=(0,S.useCallback)(()=>0,[]),z=(0,S.useMemo)(()=>new Set(E.filter(e=>e.isVisible).map(e=>e.series.label)),[E]),B=(0,S.useCallback)(e=>{if(!h)return ye(e);let t=e?.tooltipData?.datumByKey;if(!t)return ye(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>z.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&z.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return ye({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[ye,h,z]),V=pe??(d?.85:.4),H=ve??!d;if(N)return(0,C.jsx)(`div`,{className:s(`area-chart`,y[`area-chart`]),children:N});let U=ne&&(0,C.jsx)(Be,{orientation:u.orientation??`horizontal`,alignment:u.alignment??`center`,position:Le,labelStyles:u.labelStyles,itemClassName:u.itemClassName,itemStyles:u.itemStyles,shapeStyles:u.shapeStyles,className:y[`area-chart__legend`],shape:Ie,chartId:g,interactive:h}),W=E.filter(({isVisible:e})=>e),G=et(ue,ce),K=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=w({data:e,index:t});return(0,C.jsx)(ge,{dataKey:e?.label,data:e.data,xAccessor:L.xAccessor,yAccessor:n||!h?L.yAccessor:R,fill:r,fillOpacity:V,...d?{}:{renderLine:H,curve:G},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,C.jsx)(Ge.Provider,{value:{chartId:g,chartRef:_,chartWidth:n,chartHeight:b||0},children:(0,C.jsx)(Ve,{legendPosition:Le,legendElement:U,legendChildren:rt,gap:Fe,className:s(`area-chart`,y[`area-chart`],{[y[`area-chart--animated`]]:I},a),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:at,onContentHeightChange:lt,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,C.jsx)(`div`,{role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:dt,onFocus:k,onBlur:ut,children:t>0&&(0,C.jsxs)(`div`,{ref:Je,style:{position:`relative`},children:[Ae&&v.domain&&(0,C.jsx)(we,{onClick:v.reset}),(0,C.jsxs)(he,{theme:We,width:n,height:t,margin:{...M,...o},xScale:j.xScale,yScale:j.yScale,onPointerDown:v.handlers.onPointerDown,onPointerUp:v.handlers.onPointerUp,onPointerMove:v.handlers.onPointerMove,onPointerOut:ke,pointerEventsDataKey:`nearest`,children:[!D&&Pe!==`none`&&(0,C.jsx)(fe,{columns:!1,numTicks:4}),!D&&j.axis.x.display&&(0,C.jsx)(me,{...j.axis.x}),!D&&j.axis.y.display&&(0,C.jsx)(me,{...j.axis.y}),D?(0,C.jsx)(Ye,{x:n/2,y:t/2,width:n,height:t,children:i(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,(0,C.jsxs)(Ce,{active:Ae,chartId:g,children:[!D&&d&&(0,C.jsx)(_e,{curve:G,offset:f,renderLine:H,children:E.map(K)}),!D&&!d&&E.map(K)]}),c&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(qe,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!d,renderTooltip:B,showVerticalCrosshair:l?.showVertical,showHorizontalCrosshair:l?.showHorizontal,selectedIndex:Xe,tooltipRef:O,keyboardFocusedClassName:y[`area-chart__tooltip--keyboard-focused`],series:x}),(0,C.jsx)(ct,{visibleSeries:W,stacked:d,stackOffset:f,getElementStyles:w,strokeColor:We.backgroundColor??ze.backgroundColor})]}),(0,C.jsx)(st,{chartRef:_,width:n,height:r||t,margin:o}),Ae&&(0,C.jsx)(xe,{drag:v.drag})]})]})})}})})}),T=(0,S.forwardRef)((e,t)=>(0,S.useContext)(f)?(0,C.jsx)(w,{...e,ref:t}):(0,C.jsx)(u,{children:(0,C.jsx)(w,{...e,ref:t})})),T.displayName=`AreaChart`,d(T,{Legend:Be}),E=d(tt(T),{Legend:Be})})),O,k,ut=n((()=>{Ee(),Me(),h(),De(),Fe(),D(),O={title:`JS Packages/Charts Library/Charts/Area Chart`,component:E,parameters:{layout:`centered`},decorators:[Ae],argTypes:{...je,...p,...Oe,...Pe,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},k={...ke,data:m.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),dt=e({Animation:()=>H,AspectRatio:()=>V,CurveTypes:()=>G,CustomTooltip:()=>X,Default:()=>N,ErrorStates:()=>K,FillOpacity:()=>q,FixedDimensions:()=>B,GridVisibility:()=>Y,LinearLines:()=>R,MismatchedXDomains:()=>Q,NegativeValues:()=>Z,PercentageStack:()=>I,RescaleYOnVisibilityChange:()=>U,SingleSeries:()=>z,Streamgraph:()=>L,TimeAxisTickResolution:()=>$,Unstacked:()=>F,WithCompositionLegend:()=>W,WithStroke:()=>J,Zoomable:()=>P,__namedExportsOrder:()=>pt,default:()=>j}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,ft,$,pt,mt=n((()=>{Le(),D(),ut(),A=c(),j={...O,title:`JS Packages/Charts Library/Charts/Area Chart`,component:O.component,argTypes:{...O.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},M=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Ne(e),s=a.data||k.data;t===`single`?s=[m[0]]:t===`multiple`?s=m.slice(0,4):t===`many`&&(s=m);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,A.jsx)(E,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},N=M.bind({}),N.args={...k,showLegend:!0},P=M.bind({}),P.args={...k,showLegend:!0,zoomable:!0},P.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},F=M.bind({}),F.args={...k,stacked:!1,showLegend:!0},F.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},I=M.bind({}),I.args={...k,stacked:!0,stackOffset:`expand`,showLegend:!0},I.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},L=M.bind({}),L.args={...k,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},L.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},R=M.bind({}),R.args={...k,curveType:`linear`,smoothing:!1,showLegend:!0},R.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},z=M.bind({}),z.args={...k,data:[Ie[0]]},B=M.bind({}),B.args={...k,width:600,height:300,showLegend:!0},V=M.bind({}),V.args={...k,aspectRatio:.3,showLegend:!0},H=M.bind({}),H.args={...k,animation:!0,showLegend:!0,legendInteractive:!0},U={name:`Y-axis rescales when visible series change (default)`,render:e=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: true (default)`}),(0,A.jsx)(E,{...e,rescaleYOnVisibilityChange:!0})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: false (pinned)`}),(0,A.jsx)(E,{...e,rescaleYOnVisibilityChange:!1})]})]}),args:{...k,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},W={render:e=>{let t=Ne(e);return(0,A.jsx)(E,{...N.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,A.jsx)(E.Legend,{...t})})},args:{...N.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},G={render:()=>{let e=m.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Linear`}),(0,A.jsx)(E,{width:300,height:200,data:e,curveType:`linear`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,A.jsx)(E,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Monotone X`}),(0,A.jsx)(E,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},K={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Empty Data`}),(0,A.jsx)(E,{width:300,height:200,data:[]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Date Values`}),(0,A.jsx)(E,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Values`}),(0,A.jsx)(E,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Single Data Point`}),(0,A.jsx)(E,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},q=M.bind({}),q.args={...k,fillOpacity:.5,showLegend:!0},q.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},J=M.bind({}),J.args={...k,withStroke:!0,showLegend:!0},J.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},Y={render:()=>{let e=m.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Default grid`}),(0,A.jsx)(E,{width:400,height:240,data:e})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,A.jsx)(E,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},X=M.bind({}),X.args={...k,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,A.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,A.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:e.key}),(0,A.jsx)(`strong`,{children:e.value})]},e.key)),(0,A.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:`Total`}),(0,A.jsx)(`strong`,{children:r})]})]})}},X.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Z=M.bind({}),Z.args={...k,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Z.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},Q=M.bind({}),Q.args={...k,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},Q.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},ft=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],$={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,A.jsx)(E,{width:460,height:220,data:ft})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,A.jsx)(E,{width:460,height:220,data:ft,options:{axis:{x:{tickResolution:`hour`}}}})]})]}),args:{containerWidth:`1020px`,containerHeight:`320px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution, `options.axis.x.tickResolution` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit `tickFormat` takes precedence over the hint."}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},pt=[`Default`,`Zoomable`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnVisibilityChange`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`,`TimeAxisTickResolution`]}));mt();export{H as Animation,V as AspectRatio,G as CurveTypes,X as CustomTooltip,N as Default,K as ErrorStates,q as FillOpacity,B as FixedDimensions,Y as GridVisibility,R as LinearLines,Q as MismatchedXDomains,Z as NegativeValues,I as PercentageStack,U as RescaleYOnVisibilityChange,z as SingleSeries,L as Streamgraph,$ as TimeAxisTickResolution,F as Unstacked,W as WithCompositionLegend,J as WithStroke,P as Zoomable,pt as __namedExportsOrder,j as default,mt as n,dt as t};