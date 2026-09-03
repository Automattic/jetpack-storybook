import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-2QZQpBH2.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{a as l,r as u}from"./src-bVDQDti1.js";import{c as d,n as f,o as p,r as m,s as ee,t as te}from"./chart-decorator-BeVJfxcV.js";import{K as ne,g as re,o as ie,s as ae}from"./chart-scope-DAWEnJfd.js";import{A as oe,D as h,E as se,G as ce,Ht as le,O as ue,R as de,S as fe,Wt as pe,Y as me,_t as he,a as ge,c as _e,q as ve,r as ye,s as be,t as xe,u as Se,w as Ce}from"./providers-DDei1wCC.js";import{a as g,c as we,i as Te,o as Ee,s as De,u as Oe}from"./line-chart-B9cyhHfr.js";import{i as ke,n as Ae,t as je}from"./legend-config-BJNKT_wW.js";import{n as Me,t as Ne}from"./tooltip-config-B5skOp2s.js";import{C as _,f as Pe,w as Fe}from"./sample-data-Cx3-uFO8.js";import{t as Ie}from"./stories-C2dMXeet.js";import{d as Le,i as Re,m as ze,n as Be,o as Ve,p as He,t as Ue,w as We,x as Ge}from"./chart-layout-saB4cVPh.js";import{i as Ke,n as qe,t as v}from"./tooltip-0yfbcBIk.js";import{a as Je,c as Ye,i as Xe,o as y,r as Ze,s as b}from"./time-axis-CfYH7Lve.js";import{r as Qe,t as $e}from"./with-responsive-C_2-eSyX.js";import{i as et,n as tt,t as nt}from"./svg-empty-state-Df8VtrxB.js";import{t as rt}from"./line-chart-LpKMUBZo.js";var it,x,at=n((()=>{it=`_rise_xqjue_1`,x={"area-chart":`_area-chart_xqjue_1`,"area-chart--animated":`_area-chart--animated_xqjue_4`,rise:it}})),ot,S=n((()=>{a(),ot=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),C,st,ct,lt,ut=n((()=>{h(),C=t(r(),1),st=c(),ct=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,C.useContext)(he);return(0,C.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},lt=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,C.useContext)(he),o=(0,C.useContext)(ce),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let d=Number(s(u.date));if(!Number.isFinite(d))return null;let f=u.date.getTime(),p=0,m=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===f),o=e?.value??0;if(t&&(p+=o),!e||e.value==null)continue;let s=Number(c(t?p:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});m.push((0,st.jsx)(`circle`,{cx:d,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return m.length===0?null:(0,st.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:m})}})),dt=n((()=>{S(),ut()})),w,T,ft,E,D,pt=n((()=>{l(),h(),a(),o(),w=t(r(),1),Le(),v(),_e(),xe(),b(),re(),rt(),Re(),Ge(),Ue(),nt(),y(),$e(),g(),at(),dt(),T=c(),ft=(0,w.forwardRef)(({data:e,chartId:t,width:n,height:r,className:a,margin:o,withTooltips:c=!0,withTooltipCrosshairs:l,showLegend:d=!1,legend:f={},stacked:p=!0,stackOffset:m=`none`,smoothing:ee=!0,curveType:te,fillOpacity:ne,withStroke:re,renderTooltip:ie=Te,animation:ae,options:h={},onPointerDown:ce,onPointerUp:he,onPointerMove:_e,onPointerOut:xe,zoomable:g=!1,rescaleYOnVisibilityChange:ke,rescaleYOnLegendToggle:Ae,defaultHiddenSeries:je,children:Me,gridVisibility:Ne,gap:_=`md`},Pe)=>{let Fe=f.interactive??!1,Ie=f.shape??`rect`,Le=f.position??`bottom`,Re=ke??Ae??!0,Ue=ge(),Ge=ye(),v=se(e),y=le(t),b=Ye(y,je),Qe=(0,w.useCallback)(e=>!b.has(e),[b]),$e=(0,w.useRef)(null),[nt,rt]=(0,w.useState)(void 0),[it,at]=(0,w.useState)(!1),S=(0,w.useRef)(null),C=Oe({enabled:g,chartRef:S,userHandlers:{onPointerDown:ce,onPointerMove:_e,onPointerUp:he}}),{legendChildren:st,nonLegendChildren:ut}=Ve(Me,`AreaChart`),[dt,ft]=(0,w.useState)(),E=(0,w.useCallback)(e=>{ft(e>0?e:r)},[r]);(0,w.useImperativeHandle)(Pe,()=>({getScales:()=>S.current?.getScales()||null,getChartDimensions:()=>S.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[S]);let D=Ce(e),{getElementStyles:pt}=pe(),O=(0,w.useMemo)(()=>D.map((e,t)=>({series:e,index:t,isVisible:!b.has(e.label)})),[D,b]),k=(0,w.useMemo)(()=>O.every(({isVisible:e})=>!e),[O]),{tooltipRef:mt,onChartFocus:ht,onChartBlur:A,onChartKeyDown:gt}=Ke({selectedIndex:nt,setSelectedIndex:rt,isNavigating:it,setIsNavigating:at,chartRef:$e,totalPoints:D[0]?.data.length||0}),j=(0,w.useMemo)(()=>{if(Re||!D.length||!D[0].data.length||p&&m!==`none`)return;if(p){let e=Math.max(...D.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of D){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of D)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[D,p,m,Re]),M=(0,w.useMemo)(()=>{let{tickResolution:e,tickFormat:t,...r}=h?.axis?.x??{},i=t||Xe(D,e,Ge);return{axis:{x:{orientation:`bottom`,numTicks:Je(D,n,i),tickFormat:i,display:!0,...r},y:{orientation:`left`,numTicks:4,tickFormat:u,display:!0,...h?.axis?.y}},xScale:{type:`time`,...h?.xScale,...C.domain?{domain:C.domain}:{}},yScale:{type:`linear`,nice:!0,zero:p,...j?{domain:j}:{},...h?.yScale}}},[h,D,n,p,j,C.domain,Ge]),N=fe(r,M,D,v),P=ot(D),F=!P;be({chartId:y,legendItems:He(D,(0,w.useMemo)(()=>({withGlyph:!1,glyphSize:0,collapseGroups:f.collapseGroups??!1}),[f.collapseGroups]),Ie),chartType:`area`,isDataValid:F,metadata:(0,w.useMemo)(()=>({stacked:p,stackOffset:m,smoothing:ee,curveType:te}),[p,m,ee,te])});let I=Se(),L=!!ae&&!I,R={xAccessor:e=>e?.date,yAccessor:e=>e?.value},z=(0,w.useCallback)(()=>0,[]),B=(0,w.useMemo)(()=>new Set(O.filter(e=>e.isVisible).map(e=>e.series.label)),[O]),V=(0,w.useCallback)(e=>{let t=e?.tooltipData?.datumByKey;if(!t)return ie(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>B.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&B.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return ie({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[ie,B]),H=ne??(p?.85:.4),U=re??!p;if(P)return(0,T.jsx)(`div`,{className:s(`area-chart`,x[`area-chart`]),children:P});let W=d&&(0,T.jsx)(ze,{orientation:f.orientation??`horizontal`,alignment:f.alignment??`center`,position:Le,labelStyles:f.labelStyles,itemClassName:f.itemClassName,itemStyles:f.itemStyles,shapeStyles:f.shapeStyles,className:x[`area-chart__legend`],shape:Ie,chartId:y,interactive:Fe}),G=O.filter(({isVisible:e})=>e),K=Ze(te,ee),q=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=pt({data:e,index:t});return(0,T.jsx)(oe,{dataKey:e?.label,data:e.data,xAccessor:R.xAccessor,yAccessor:n?R.yAccessor:z,fill:r,fillOpacity:H,...p?{}:{renderLine:U,curve:K},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,T.jsx)(We.Provider,{value:{chartId:y,chartRef:S,isSeriesVisible:Qe,chartWidth:n,chartHeight:dt||0},children:(0,T.jsx)(Be,{legendPosition:Le,legendElement:W,legendChildren:st,gap:_,className:s(`area-chart`,x[`area-chart`],{[x[`area-chart--animated`]]:L},a),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:ut,onContentHeightChange:E,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,T.jsx)(`div`,{role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:gt,onFocus:ht,onBlur:A,children:t>0&&(0,T.jsxs)(`div`,{ref:$e,style:{position:`relative`},children:[g&&C.domain&&(0,T.jsx)(De,{onClick:C.reset}),(0,T.jsxs)(de,{theme:v,width:n,height:t,margin:{...N,...o},xScale:M.xScale,yScale:M.yScale,onPointerDown:C.handlers.onPointerDown,onPointerUp:C.handlers.onPointerUp,onPointerMove:C.handlers.onPointerMove,onPointerOut:xe,pointerEventsDataKey:`nearest`,children:[!k&&Ne!==`none`&&(0,T.jsx)(ve,{columns:!1,numTicks:4}),!k&&M.axis.x.display&&(0,T.jsx)(me,{...M.axis.x}),!k&&M.axis.y.display&&(0,T.jsx)(me,{...M.axis.y}),k?(0,T.jsx)(et,{x:n/2,y:t/2,width:n,height:t,children:tt(Fe,`series`)}):null,(0,T.jsxs)(Ee,{active:g,chartId:y,children:[!k&&p&&(0,T.jsx)(ue,{curve:K,offset:m,renderLine:U,children:O.map(q)}),!k&&!p&&O.map(q)]}),c&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(qe,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!p,renderTooltip:V,showVerticalCrosshair:l?.showVertical,showHorizontalCrosshair:l?.showHorizontal,selectedIndex:nt,tooltipRef:mt,keyboardFocusedClassName:x[`area-chart__tooltip--keyboard-focused`],series:D}),(0,T.jsx)(lt,{visibleSeries:G,stacked:p,stackOffset:m,getElementStyles:pt,strokeColor:v.backgroundColor??Ue.backgroundColor})]}),(0,T.jsx)(ct,{chartRef:S,width:n,height:r||t,margin:o}),g&&(0,T.jsx)(we,{drag:C.drag})]})]})})}})})}),E=(0,w.forwardRef)((e,t)=>(0,w.useContext)(ie)?(0,T.jsx)(ft,{...e,ref:t}):(0,T.jsx)(ae,{children:(0,T.jsx)(ft,{...e,ref:t})})),E.displayName=`AreaChart`,ne(E,{Legend:ze}),D=ne(Qe(E),{Legend:ze})})),O,k,mt=n((()=>{f(),Ae(),Pe(),p(),Ne(),pt(),O={title:`JS Packages/Charts Library/Charts/Area Chart`,component:D,parameters:{layout:`centered`},decorators:[te],argTypes:{...ke,...d,...m,...Me,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},k={...ee,data:_.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),ht=e({Animation:()=>V,AspectRatio:()=>B,CurveTypes:()=>G,CustomTooltip:()=>X,Default:()=>M,ErrorStates:()=>K,FillOpacity:()=>q,FixedDimensions:()=>z,GridVisibility:()=>Y,LinearLines:()=>L,MismatchedXDomains:()=>Q,NegativeValues:()=>Z,PercentageStack:()=>F,RescaleYOnVisibilityChange:()=>H,SingleSeries:()=>R,Streamgraph:()=>I,TimeAxisTickResolution:()=>$,Unstacked:()=>P,WithCompositionLegend:()=>W,WithDefaultHiddenSeries:()=>U,WithStroke:()=>J,Zoomable:()=>N,__namedExportsOrder:()=>vt,default:()=>gt}),A,gt,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,_t,$,vt,yt=n((()=>{Ie(),pt(),mt(),A=c(),gt={...O,title:`JS Packages/Charts Library/Charts/Area Chart`,component:O.component,argTypes:{...O.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},j=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=je(e),s=a.data||k.data;t===`single`?s=[_[0]]:t===`multiple`?s=_.slice(0,4):t===`many`&&(s=_);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,A.jsx)(D,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},M=j.bind({}),M.args={...k,showLegend:!0},N=j.bind({}),N.args={...k,showLegend:!0,zoomable:!0},N.parameters={docs:{description:{story:"With `zoomable`, drag horizontally across the plot to zoom into a range. A reset button appears while zoomed to restore the full domain. Defaults to `false`."}}},P=j.bind({}),P.args={...k,stacked:!1,showLegend:!0},P.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},F=j.bind({}),F.args={...k,stacked:!0,stackOffset:`expand`,showLegend:!0},F.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},I=j.bind({}),I.args={...k,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},I.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},L=j.bind({}),L.args={...k,curveType:`linear`,smoothing:!1,showLegend:!0},L.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},R=j.bind({}),R.args={...k,data:[Fe[0]]},z=j.bind({}),z.args={...k,width:600,height:300,showLegend:!0},B=j.bind({}),B.args={...k,aspectRatio:.3,showLegend:!0},V=j.bind({}),V.args={...k,animation:!0,showLegend:!0,legendInteractive:!0},H={name:`Y-axis rescales when visible series change (default)`,render:e=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: true (default)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!0})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h4`,{children:`rescaleYOnVisibilityChange: false (pinned)`}),(0,A.jsx)(D,{...e,rescaleYOnVisibilityChange:!1})]})]}),args:{...k,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},U=j.bind({}),U.args={...M.args,legendInteractive:!0,chartId:`default-hidden-series-demo`,defaultHiddenSeries:[`London`]},U.parameters={docs:{description:{story:`London is hidden from the initial render and marked inactive in the legend. Select its legend item to reveal it.`}}},W={render:e=>{let t=je(e);return(0,A.jsx)(D,{...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,A.jsx)(D.Legend,{...t})})},args:{...M.args,showLegend:!1},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},G={render:()=>{let e=_.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Linear`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`linear`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Monotone X`}),(0,A.jsx)(D,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},K={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Empty Data`}),(0,A.jsx)(D,{width:300,height:200,data:[]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Date Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Invalid Values`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Single Data Point`}),(0,A.jsx)(D,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},q=j.bind({}),q.args={...k,fillOpacity:.5,showLegend:!0},q.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},J=j.bind({}),J.args={...k,withStroke:!0,showLegend:!0},J.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},Y={render:()=>{let e=_.slice(0,3);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Default grid`}),(0,A.jsx)(D,{width:400,height:240,data:e})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,A.jsx)(D,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},X=j.bind({}),X.args={...k,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,A.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,A.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:e.key}),(0,A.jsx)(`strong`,{children:e.value})]},e.key)),(0,A.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,A.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,A.jsx)(`span`,{children:`Total`}),(0,A.jsx)(`strong`,{children:r})]})]})}},X.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Z=j.bind({}),Z.args={...k,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Z.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},Q=j.bind({}),Q.args={...k,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},Q.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},_t=[{label:`Views`,data:[{date:new Date(2026,7,2,13),value:42}],options:{}}],$={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Lone hourly bucket, resolution inferred → date tick`}),(0,A.jsx)(D,{width:460,height:220,data:_t})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Same point, tickResolution: 'hour' → hour tick`}),(0,A.jsx)(D,{width:460,height:220,data:_t,options:{axis:{x:{tickResolution:`hour`}}}})]})]}),args:{containerWidth:`1020px`,containerHeight:`320px`},parameters:{docs:{description:{story:"When the caller already knows the data's bucket resolution, `options.axis.x.tickResolution` declares it and the automatic formatter uses it instead of inferring the resolution from point spacing. An explicit `tickFormat` takes precedence over the hint."}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},vt=[`Default`,`Zoomable`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnVisibilityChange`,`WithDefaultHiddenSeries`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`,`TimeAxisTickResolution`]}));yt();export{V as Animation,B as AspectRatio,G as CurveTypes,X as CustomTooltip,M as Default,K as ErrorStates,q as FillOpacity,z as FixedDimensions,Y as GridVisibility,L as LinearLines,Q as MismatchedXDomains,Z as NegativeValues,F as PercentageStack,H as RescaleYOnVisibilityChange,R as SingleSeries,I as Streamgraph,$ as TimeAxisTickResolution,P as Unstacked,W as WithCompositionLegend,U as WithDefaultHiddenSeries,J as WithStroke,N as Zoomable,vt as __namedExportsOrder,gt as default,yt as n,ht as t};