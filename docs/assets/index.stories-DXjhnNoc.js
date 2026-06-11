import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{_r as r,_x as i,eS as a,gx as o,hx as s,mx as c,px as l,yr as u}from"./iframe-Duqk36yz.js";import{A as ee,_ as d,a as te,d as ne,f as re,g as f,h as ie,i as p,m as ae,n as oe,p as se,r as ce,t as le,y as ue}from"./providers-CQrRBo3q.js";import{T as de,d as fe,f as pe,n as me,p as he,r as ge,s as _e,t as m}from"./esm-C-NlcXpa.js";import{a as ve,c as ye,d as be,f as xe,i as Se,l as Ce,o as we,p as h,s as Te,u as Ee}from"./line-chart-BqC27nsf.js";import{c as De,n as Oe,o as ke,r as Ae,s as g,t as je}from"./chart-decorator-CwmXoWpe.js";import{n as Me,r as Ne,t as Pe}from"./legend-config-B-kNliUM.js";import{n as Fe,t as _}from"./tooltip-config-CEr-LTSR.js";import{b as Ie,c as Le,y as v}from"./sample-data-aNf8uISY.js";import{t as Re}from"./stories-gBXmkw2y.js";import{c as ze,d as y,i as Be,l as Ve,n as He,p as Ue,r as We,s as Ge,t as Ke}from"./chart-layout-BMdfphw_.js";import{n as qe,r as Je,t as Ye}from"./tooltip-OVR-i59X.js";import{n as Xe,t as Ze}from"./svg-empty-state-r4ofoBf0.js";import{n as b,t as x}from"./with-responsive-rWk8Hj2P.js";import{t as Qe}from"./line-chart-Cnsdu5Iy.js";var $e,S,et=e((()=>{$e=`_rise_sezj1_1`,S={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:$e}})),tt,nt=e((()=>{o(),tt=e=>!e?.length||e.some(e=>!e.data?.length)?i(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?i(`Invalid data`,`jetpack-charts`):null})),C,w,rt,it,at=e((()=>{m(),C=t(a(),1),w=l(),rt=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,C.useContext)(de);return(0,C.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},it=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,C.useContext)(de),o=(0,C.useContext)(fe),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let ee=Number(s(u.date));if(!Number.isFinite(ee))return null;let d=u.date.getTime(),te=0,ne=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===d),o=e?.value??0;if(t&&(te+=o),!e||e.value==null)continue;let s=Number(c(t?te:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});ne.push((0,w.jsx)(`circle`,{cx:ee,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return ne.length===0?null:(0,w.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:ne})}})),ot=e((()=>{nt(),at()})),T,E,D,O,k,st=e((()=>{u(),m(),o(),s(),T=t(a(),1),Ge(),Ye(),p(),le(),ue(),Qe(),We(),Ke(),y(),Ze(),h(),x(),ye(),et(),ot(),E=l(),D=(0,T.forwardRef)(({data:e,chartId:t,width:n,height:a,className:o,margin:s,withTooltips:l=!0,withTooltipCrosshairs:u,showLegend:ee=!1,legend:d={},stacked:f=!0,stackOffset:p=`none`,smoothing:le=!0,curveType:ue,fillOpacity:de,withStroke:fe,renderTooltip:m=Se,animation:ye,options:h={},onPointerDown:De,onPointerUp:Oe,onPointerMove:ke,onPointerOut:Ae,zoomable:g=!1,rescaleYOnLegendToggle:je=!0,children:Me,gridVisibility:Ne,gap:Pe=`md`},Fe)=>{let _=d.interactive??!1,Ie=d.shape??`rect`,Le=d.position??`bottom`,v=oe(),Re=se(e),y=ae(t),We=(0,T.useRef)(null),[Ge,Ke]=(0,T.useState)(void 0),[Ye,Ze]=(0,T.useState)(!1),b=(0,T.useRef)(null),x=Ce({enabled:g,chartRef:b,userHandlers:{onPointerDown:De,onPointerMove:ke,onPointerUp:Oe}}),{legendChildren:Qe,nonLegendChildren:$e}=Be(Me,`AreaChart`),[et,nt]=(0,T.useState)(),C=(0,T.useCallback)(e=>{nt(e>0?e:a)},[a]);(0,T.useImperativeHandle)(Fe,()=>({getScales:()=>b.current?.getScales()||null,getChartDimensions:()=>b.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[b]);let w=re(e),{getElementStyles:at,isSeriesVisible:ot}=ie(),D=(0,T.useMemo)(()=>!y||!_?w.map((e,t)=>({series:e,index:t,isVisible:!0})):w.map((e,t)=>({series:e,index:t,isVisible:ot(y,e.label)})),[w,y,ot,_]),O=(0,T.useMemo)(()=>D.every(({isVisible:e})=>!e),[D]),{tooltipRef:k,onChartFocus:st,onChartBlur:ct,onChartKeyDown:A}=Je({selectedIndex:Ge,setSelectedIndex:Ke,isNavigating:Ye,setIsNavigating:Ze,chartRef:We,totalPoints:w[0]?.data.length||0}),lt=(0,T.useMemo)(()=>{if(je||!_||!w.length||!w[0].data.length||f&&p!==`none`)return;if(f){let e=Math.max(...w.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of w){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of w)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[w,f,p,_,je]),j=(0,T.useMemo)(()=>{let e=h?.axis?.x?.tickFormat||be(w);return{axis:{x:{orientation:`bottom`,numTicks:xe(w,n,e),tickFormat:e,display:!0,...h?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:r,display:!0,...h?.axis?.y}},xScale:{type:`time`,...h?.xScale,...x.domain?{domain:x.domain}:{}},yScale:{type:`linear`,nice:!0,zero:f,...lt?{domain:lt}:{},...h?.yScale}}},[h,w,n,f,lt,x.domain]),M=ne(a,j,w,Re),N=tt(w),P=!N;ce({chartId:y,legendItems:ze(w,(0,T.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),Ie),chartType:`area`,isDataValid:P,metadata:(0,T.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:le,curveType:ue}),[f,p,le,ue])});let F=te(),I=!!ye&&!F,L={xAccessor:e=>e?.date,yAccessor:e=>e?.value},R=(0,T.useCallback)(()=>0,[]),z=(0,T.useMemo)(()=>new Set(D.filter(e=>e.isVisible).map(e=>e.series.label)),[D]),B=(0,T.useCallback)(e=>{if(!_)return m(e);let t=e?.tooltipData?.datumByKey;if(!t)return m(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>z.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&z.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return m({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[m,_,z]),V=de??(f?.85:.4),H=fe??!f;if(N)return(0,E.jsx)(`div`,{className:c(`area-chart`,S[`area-chart`]),children:N});let U=ee&&(0,E.jsx)(Ve,{orientation:d.orientation??`horizontal`,alignment:d.alignment??`center`,position:Le,labelStyles:d.labelStyles,itemClassName:d.itemClassName,itemStyles:d.itemStyles,shapeStyles:d.shapeStyles,className:S[`area-chart__legend`],shape:Ie,chartId:y,interactive:_}),W=D.filter(({isVisible:e})=>e),G=Ee(ue,le),K=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=at({data:e,index:t});return(0,E.jsx)(ge,{dataKey:e?.label,data:e.data,xAccessor:L.xAccessor,yAccessor:n||!_?L.yAccessor:R,fill:r,fillOpacity:V,...f?{}:{renderLine:H,curve:G},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,E.jsx)(Ue.Provider,{value:{chartId:y,chartRef:b,chartWidth:n,chartHeight:et||0},children:(0,E.jsx)(He,{legendPosition:Le,legendElement:U,legendChildren:Qe,gap:Pe,className:c(`area-chart`,S[`area-chart`],{[S[`area-chart--animated`]]:I},o),style:{width:n,height:a},"data-testid":`area-chart`,trailingContent:$e,onContentHeightChange:C,children:({contentHeight:e})=>{let t=e>0?e:a;return(0,E.jsx)(`div`,{role:`grid`,"aria-label":i(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:A,onFocus:st,onBlur:ct,children:t>0&&(0,E.jsxs)(`div`,{ref:We,style:{position:`relative`},children:[g&&x.domain&&(0,E.jsx)(we,{onClick:x.reset}),(0,E.jsxs)(_e,{theme:Re,width:n,height:t,margin:{...M,...s},xScale:j.xScale,yScale:j.yScale,onPointerDown:x.handlers.onPointerDown,onPointerUp:x.handlers.onPointerUp,onPointerMove:x.handlers.onPointerMove,onPointerOut:Ae,pointerEventsDataKey:`nearest`,children:[Ne!==`none`&&(0,E.jsx)(pe,{columns:!1,numTicks:4}),j.axis.x.display&&(0,E.jsx)(he,{...j.axis.x}),j.axis.y.display&&(0,E.jsx)(he,{...j.axis.y}),O?(0,E.jsx)(Xe,{x:n/2,y:t/2,width:n,height:t,children:i(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,(0,E.jsxs)(ve,{active:g,chartId:y,children:[!O&&f&&(0,E.jsx)(me,{curve:G,offset:p,renderLine:H,children:D.map(K)}),!O&&!f&&D.map(K)]}),l&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(qe,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:B,showVerticalCrosshair:u?.showVertical,showHorizontalCrosshair:u?.showHorizontal,selectedIndex:Ge,tooltipRef:k,keyboardFocusedClassName:S[`area-chart__tooltip--keyboard-focused`],series:w}),(0,E.jsx)(it,{visibleSeries:W,stacked:f,stackOffset:p,getElementStyles:at,strokeColor:v.backgroundColor})]}),(0,E.jsx)(rt,{chartRef:b,width:n,height:a||t,margin:s}),g&&(0,E.jsx)(Te,{drag:x.drag})]})]})})}})})}),O=(0,T.forwardRef)((e,t)=>(0,T.useContext)(f)?(0,E.jsx)(D,{...e,ref:t}):(0,E.jsx)(d,{children:(0,E.jsx)(D,{...e,ref:t})})),O.displayName=`AreaChart`,ee(O,{Legend:Ve}),k=ee(b(O),{Legend:Ve})})),ct,A,lt=e((()=>{Oe(),Me(),Le(),ke(),_(),st(),ct={title:`JS Packages/Charts Library/Charts/Area Chart`,component:k,parameters:{layout:`centered`},decorators:[je],argTypes:{...Ne,...De,...Ae,...Fe,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},A={...g,data:v.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),j=n({Animation:()=>U,AspectRatio:()=>H,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>F,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>V,GridVisibility:()=>X,LinearLines:()=>z,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>L,RescaleYOnLegendToggle:()=>W,SingleSeries:()=>B,Streamgraph:()=>R,Unstacked:()=>I,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>ut,default:()=>N}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ut,dt=e((()=>{Re(),st(),lt(),M=l(),N={...ct,title:`JS Packages/Charts Library/Charts/Area Chart`,component:ct.component,argTypes:{...ct.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},P=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Pe(e),s=a.data||A.data;t===`single`?s=[v[0]]:t===`multiple`?s=v.slice(0,4):t===`many`&&(s=v);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,M.jsx)(k,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},F=P.bind({}),F.args={...A,showLegend:!0,zoomable:!0},I=P.bind({}),I.args={...A,stacked:!1,showLegend:!0},I.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},L=P.bind({}),L.args={...A,stacked:!0,stackOffset:`expand`,showLegend:!0},L.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},R=P.bind({}),R.args={...A,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},R.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},z=P.bind({}),z.args={...A,curveType:`linear`,smoothing:!1,showLegend:!0},z.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},B=P.bind({}),B.args={...A,data:[Ie[0]]},V=P.bind({}),V.args={...A,width:600,height:300,showLegend:!0},H=P.bind({}),H.args={...A,aspectRatio:.3,showLegend:!0},U=P.bind({}),U.args={...A,animation:!0,showLegend:!0,legendInteractive:!0},W={name:`Y-axis rescales when legends toggle (default)`,render:e=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`rescaleYOnLegendToggle: true (default)`}),(0,M.jsx)(k,{...e,rescaleYOnLegendToggle:!0})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`rescaleYOnLegendToggle: false (pinned)`}),(0,M.jsx)(k,{...e,rescaleYOnLegendToggle:!1})]})]}),args:{...A,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},G={render:e=>{let t=Pe(e);return(0,M.jsx)(k,{...F.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,M.jsx)(k.Legend,{...t})})},args:{...F.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=v.slice(0,3);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Linear`}),(0,M.jsx)(k,{width:300,height:200,data:e,curveType:`linear`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,M.jsx)(k,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Monotone X`}),(0,M.jsx)(k,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Empty Data`}),(0,M.jsx)(k,{width:300,height:200,data:[]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Invalid Date Values`}),(0,M.jsx)(k,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Invalid Values`}),(0,M.jsx)(k,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Single Data Point`}),(0,M.jsx)(k,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=P.bind({}),J.args={...A,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=P.bind({}),Y.args={...A,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=v.slice(0,3);return(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Default grid`}),(0,M.jsx)(k,{width:400,height:240,data:e})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,M.jsx)(k,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=P.bind({}),Z.args={...A,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,M.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,M.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,M.jsx)(`span`,{children:e.key}),(0,M.jsx)(`strong`,{children:e.value})]},e.key)),(0,M.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,M.jsx)(`span`,{children:`Total`}),(0,M.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=P.bind({}),Q.args={...A,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=P.bind({}),$.args={...A,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
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