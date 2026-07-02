import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{n as i,t as a}from"./build-module-Da_5_6n_.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{a as l,r as u}from"./src-B1Hf-orG.js";import{A as ee,E as te,O as ne,P as d,S as re,Z as f,a as ie,b as ae,c as oe,k as p,o as se,r as ce,t as le,w as ue}from"./providers-BQ8Ha7b7.js";import{C as de,D as fe,T as pe,f as me,i as he,n as ge,t as _e,x as m}from"./esm-D1c-lJYS.js";import{a as ve,c as ye,d as be,f as xe,i as Se,l as Ce,o as we,p as h,s as Te,u as Ee}from"./line-chart-sO3pLtZa.js";import{c as De,n as Oe,o as ke,r as Ae,s as g,t as je}from"./chart-decorator-B4pv9Ypw.js";import{n as Me,r as Ne,t as Pe}from"./legend-config-DvuGdtSm.js";import{n as Fe,t as _}from"./tooltip-config-B5skOp2s.js";import{C as Ie,S as v,d as Le}from"./sample-data-BwMYxnT1.js";import{t as Re}from"./stories-CY2ySLWB.js";import{d as y,g as ze,i as Be,m as Ve,n as He,o as Ue,p as We,t as Ge,y as Ke}from"./chart-layout-qPEwL43q.js";import{i as qe,n as Je,t as Ye}from"./tooltip-weFTdiUO.js";import{n as Xe,t as Ze}from"./svg-empty-state-03-NIsUq.js";import{r as b,t as x}from"./with-responsive-Bj4H9YZF.js";import{t as Qe}from"./line-chart-xwhDOUye.js";var $e,S,et=n((()=>{$e=`_rise_sezj1_1`,S={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:$e}})),tt,nt=n((()=>{a(),tt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),C,w,rt,it,at=n((()=>{_e(),C=t(r(),1),w=c(),rt=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,C.useContext)(fe);return(0,C.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},it=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,C.useContext)(fe),o=(0,C.useContext)(m),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let ee=Number(s(u.date));if(!Number.isFinite(ee))return null;let te=u.date.getTime(),ne=0,d=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===te),o=e?.value??0;if(t&&(ne+=o),!e||e.value==null)continue;let s=Number(c(t?ne:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});d.push((0,w.jsx)(`circle`,{cx:ee,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return d.length===0?null:(0,w.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:d})}})),ot=n((()=>{nt(),at()})),T,E,D,O,k,st=n((()=>{l(),_e(),a(),o(),T=t(r(),1),y(),Ye(),se(),le(),d(),Qe(),Be(),Ge(),ze(),Ze(),h(),x(),ye(),et(),ot(),E=c(),D=(0,T.forwardRef)(({data:e,chartId:t,width:n,height:r,className:a,margin:o,withTooltips:c=!0,withTooltipCrosshairs:l,showLegend:ee=!1,legend:d={},stacked:f=!0,stackOffset:p=`none`,smoothing:se=!0,curveType:le,fillOpacity:fe,withStroke:_e,renderTooltip:m=Se,animation:ye,options:h={},onPointerDown:De,onPointerUp:Oe,onPointerMove:ke,onPointerOut:Ae,zoomable:g=!1,rescaleYOnLegendToggle:je=!0,children:Me,gridVisibility:Ne,gap:Pe=`md`},Fe)=>{let _=d.interactive??!1,Ie=d.shape??`rect`,v=d.position??`bottom`,Le=ce(),Re=ue(e),y=te(t),ze=(0,T.useRef)(null),[Be,Ge]=(0,T.useState)(void 0),[Ye,Ze]=(0,T.useState)(!1),b=(0,T.useRef)(null),x=Ce({enabled:g,chartRef:b,userHandlers:{onPointerDown:De,onPointerMove:ke,onPointerUp:Oe}}),{legendChildren:Qe,nonLegendChildren:$e}=Ue(Me,`AreaChart`),[et,nt]=(0,T.useState)(),C=(0,T.useCallback)(e=>{nt(e>0?e:r)},[r]);(0,T.useImperativeHandle)(Fe,()=>({getScales:()=>b.current?.getScales()||null,getChartDimensions:()=>b.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[b]);let w=re(e),{getElementStyles:at,isSeriesVisible:ot}=ne(),D=(0,T.useMemo)(()=>!y||!_?w.map((e,t)=>({series:e,index:t,isVisible:!0})):w.map((e,t)=>({series:e,index:t,isVisible:ot(y,e.label)})),[w,y,ot,_]),O=(0,T.useMemo)(()=>D.every(({isVisible:e})=>!e),[D]),{tooltipRef:k,onChartFocus:st,onChartBlur:ct,onChartKeyDown:A}=qe({selectedIndex:Be,setSelectedIndex:Ge,isNavigating:Ye,setIsNavigating:Ze,chartRef:ze,totalPoints:w[0]?.data.length||0}),lt=(0,T.useMemo)(()=>{if(je||!_||!w.length||!w[0].data.length||f&&p!==`none`)return;if(f){let e=Math.max(...w.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of w){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of w)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[w,f,p,_,je]),j=(0,T.useMemo)(()=>{let e=h?.axis?.x?.tickFormat||be(w);return{axis:{x:{orientation:`bottom`,numTicks:xe(w,n,e),tickFormat:e,display:!0,...h?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:u,display:!0,...h?.axis?.y}},xScale:{type:`time`,...h?.xScale,...x.domain?{domain:x.domain}:{}},yScale:{type:`linear`,nice:!0,zero:f,...lt?{domain:lt}:{},...h?.yScale}}},[h,w,n,f,lt,x.domain]),M=ae(r,j,w,Re),N=tt(w),P=!N;ie({chartId:y,legendItems:We(w,(0,T.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),Ie),chartType:`area`,isDataValid:P,metadata:(0,T.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:se,curveType:le}),[f,p,se,le])});let F=oe(),I=!!ye&&!F,L={xAccessor:e=>e?.date,yAccessor:e=>e?.value},R=(0,T.useCallback)(()=>0,[]),z=(0,T.useMemo)(()=>new Set(D.filter(e=>e.isVisible).map(e=>e.series.label)),[D]),B=(0,T.useCallback)(e=>{if(!_)return m(e);let t=e?.tooltipData?.datumByKey;if(!t)return m(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>z.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&z.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return m({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[m,_,z]),V=fe??(f?.85:.4),H=_e??!f;if(N)return(0,E.jsx)(`div`,{className:s(`area-chart`,S[`area-chart`]),children:N});let U=ee&&(0,E.jsx)(Ve,{orientation:d.orientation??`horizontal`,alignment:d.alignment??`center`,position:v,labelStyles:d.labelStyles,itemClassName:d.itemClassName,itemStyles:d.itemStyles,shapeStyles:d.shapeStyles,className:S[`area-chart__legend`],shape:Ie,chartId:y,interactive:_}),W=D.filter(({isVisible:e})=>e),G=Ee(le,se),K=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=at({data:e,index:t});return(0,E.jsx)(he,{dataKey:e?.label,data:e.data,xAccessor:L.xAccessor,yAccessor:n||!_?L.yAccessor:R,fill:r,fillOpacity:V,...f?{}:{renderLine:H,curve:G},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,E.jsx)(Ke.Provider,{value:{chartId:y,chartRef:b,chartWidth:n,chartHeight:et||0},children:(0,E.jsx)(He,{legendPosition:v,legendElement:U,legendChildren:Qe,gap:Pe,className:s(`area-chart`,S[`area-chart`],{[S[`area-chart--animated`]]:I},a),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:$e,onContentHeightChange:C,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,E.jsx)(`div`,{role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:A,onFocus:st,onBlur:ct,children:t>0&&(0,E.jsxs)(`div`,{ref:ze,style:{position:`relative`},children:[g&&x.domain&&(0,E.jsx)(we,{onClick:x.reset}),(0,E.jsxs)(me,{theme:Re,width:n,height:t,margin:{...M,...o},xScale:j.xScale,yScale:j.yScale,onPointerDown:x.handlers.onPointerDown,onPointerUp:x.handlers.onPointerUp,onPointerMove:x.handlers.onPointerMove,onPointerOut:Ae,pointerEventsDataKey:`nearest`,children:[Ne!==`none`&&(0,E.jsx)(de,{columns:!1,numTicks:4}),j.axis.x.display&&(0,E.jsx)(pe,{...j.axis.x}),j.axis.y.display&&(0,E.jsx)(pe,{...j.axis.y}),O?(0,E.jsx)(Xe,{x:n/2,y:t/2,width:n,height:t,children:i(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,(0,E.jsxs)(ve,{active:g,chartId:y,children:[!O&&f&&(0,E.jsx)(ge,{curve:G,offset:p,renderLine:H,children:D.map(K)}),!O&&!f&&D.map(K)]}),c&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Je,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:B,showVerticalCrosshair:l?.showVertical,showHorizontalCrosshair:l?.showHorizontal,selectedIndex:Be,tooltipRef:k,keyboardFocusedClassName:S[`area-chart__tooltip--keyboard-focused`],series:w}),(0,E.jsx)(it,{visibleSeries:W,stacked:f,stackOffset:p,getElementStyles:at,strokeColor:Le.backgroundColor})]}),(0,E.jsx)(rt,{chartRef:b,width:n,height:r||t,margin:o}),g&&(0,E.jsx)(Te,{drag:x.drag})]})]})})}})})}),O=(0,T.forwardRef)((e,t)=>(0,T.useContext)(p)?(0,E.jsx)(D,{...e,ref:t}):(0,E.jsx)(ee,{children:(0,E.jsx)(D,{...e,ref:t})})),O.displayName=`AreaChart`,f(O,{Legend:Ve}),k=f(b(O),{Legend:Ve})})),ct,A,lt=n((()=>{Oe(),Me(),Le(),ke(),_(),st(),ct={title:`JS Packages/Charts Library/Charts/Area Chart`,component:k,parameters:{layout:`centered`},decorators:[je],argTypes:{...Ne,...De,...Ae,...Fe,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},A={...g,data:v.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),j=e({Animation:()=>U,AspectRatio:()=>H,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>F,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>V,GridVisibility:()=>X,LinearLines:()=>z,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>L,RescaleYOnLegendToggle:()=>W,SingleSeries:()=>B,Streamgraph:()=>R,Unstacked:()=>I,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>ut,default:()=>N}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ut,dt=n((()=>{Re(),st(),lt(),M=c(),N={...ct,title:`JS Packages/Charts Library/Charts/Area Chart`,component:ct.component,argTypes:{...ct.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},P=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Pe(e),s=a.data||A.data;t===`single`?s=[v[0]]:t===`multiple`?s=v.slice(0,4):t===`many`&&(s=v);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,M.jsx)(k,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},F=P.bind({}),F.args={...A,showLegend:!0,zoomable:!0},I=P.bind({}),I.args={...A,stacked:!1,showLegend:!0},I.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},L=P.bind({}),L.args={...A,stacked:!0,stackOffset:`expand`,showLegend:!0},L.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},R=P.bind({}),R.args={...A,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},R.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},z=P.bind({}),z.args={...A,curveType:`linear`,smoothing:!1,showLegend:!0},z.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},B=P.bind({}),B.args={...A,data:[Ie[0]]},V=P.bind({}),V.args={...A,width:600,height:300,showLegend:!0},H=P.bind({}),H.args={...A,aspectRatio:.3,showLegend:!0},U=P.bind({}),U.args={...A,animation:!0,showLegend:!0,legendInteractive:!0},W={name:`Y-axis rescales when legends toggle (default)`,render:e=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`rescaleYOnLegendToggle: true (default)`}),(0,M.jsx)(k,{...e,rescaleYOnLegendToggle:!0})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`rescaleYOnLegendToggle: false (pinned)`}),(0,M.jsx)(k,{...e,rescaleYOnLegendToggle:!1})]})]}),args:{...A,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},G={render:e=>{let t=Pe(e);return(0,M.jsx)(k,{...F.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,M.jsx)(k.Legend,{...t})})},args:{...F.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=v.slice(0,3);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Linear`}),(0,M.jsx)(k,{width:300,height:200,data:e,curveType:`linear`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,M.jsx)(k,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Monotone X`}),(0,M.jsx)(k,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Empty Data`}),(0,M.jsx)(k,{width:300,height:200,data:[]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Invalid Date Values`}),(0,M.jsx)(k,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Invalid Values`}),(0,M.jsx)(k,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Single Data Point`}),(0,M.jsx)(k,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=P.bind({}),J.args={...A,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=P.bind({}),Y.args={...A,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=v.slice(0,3);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Default grid`}),(0,M.jsx)(k,{width:400,height:240,data:e})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,M.jsx)(k,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=P.bind({}),Z.args={...A,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,M.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,M.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,M.jsx)(`span`,{children:e.key}),(0,M.jsx)(`strong`,{children:e.value})]},e.key)),(0,M.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,M.jsx)(`span`,{children:`Total`}),(0,M.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=P.bind({}),Q.args={...A,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=P.bind({}),$.args={...A,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},ut=[`Default`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnLegendToggle`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`]}));dt();export{U as Animation,H as AspectRatio,K as CurveTypes,Z as CustomTooltip,F as Default,q as ErrorStates,J as FillOpacity,V as FixedDimensions,X as GridVisibility,z as LinearLines,$ as MismatchedXDomains,Q as NegativeValues,L as PercentageStack,W as RescaleYOnLegendToggle,B as SingleSeries,R as Streamgraph,I as Unstacked,G as WithCompositionLegend,Y as WithStroke,ut as __namedExportsOrder,N as default,dt as n,j as t};