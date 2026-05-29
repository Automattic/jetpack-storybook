import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Ah as r,Hn as i,Mh as a,Oh as o,Wn as s,jh as c,kh as l,pg as u}from"./iframe-OggaCFDY.js";import{A as d,_ as f,a as ee,d as te,f as ne,g as p,h as re,i as m,m as ie,n as ae,p as oe,r as se,t as ce,y as le}from"./providers-C63iS_7Y.js";import{T as ue,d as de,f as fe,n as pe,p as me,r as he,s as ge,t as h}from"./esm-BjDwB2Px.js";import{a as _e,c as ve,i as ye,o as be,s as xe}from"./line-chart-DKX3FXtW.js";import{c as g,n as Se,o as Ce,r as we,s as Te,t as Ee}from"./chart-decorator-CEl2yHLK.js";import{n as De,r as Oe,t as ke}from"./legend-config-tJy46Dt1.js";import{n as Ae,t as _}from"./tooltip-config-DU_WVmuX.js";import{b as je,c as Me,y as v}from"./sample-data-BfcHm5eo.js";import{t as Ne}from"./stories-BDo-2GaK.js";import{c as Pe,d as y,i as Fe,l as Ie,n as Le,p as Re,r as ze,s as Be,t as Ve}from"./chart-layout-Bl7rN_s0.js";import{n as He,r as Ue,t as We}from"./tooltip-CZVbC68E.js";import{n as Ge,t as Ke}from"./svg-empty-state-IOxVqDCY.js";import{n as b,t as qe}from"./with-responsive-CPXB576o.js";import{t as Je}from"./line-chart-Ck-HobbG.js";var Ye,x,Xe=e((()=>{Ye=`_rise_sezj1_1`,x={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:Ye}})),Ze,Qe=e((()=>{c(),Ze=e=>!e?.length||e.some(e=>!e.data?.length)?a(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?a(`Invalid data`,`jetpack-charts`):null})),S,C,$e,et,tt=e((()=>{h(),S=t(u(),1),C=o(),$e=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,S.useContext)(ue);return(0,S.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},et=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,S.useContext)(ue),o=(0,S.useContext)(de),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let d=Number(s(u.date));if(!Number.isFinite(d))return null;let f=u.date.getTime(),ee=0,te=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===f),o=e?.value??0;if(t&&(ee+=o),!e||e.value==null)continue;let s=Number(c(t?ee:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});te.push((0,C.jsx)(`circle`,{cx:d,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return te.length===0?null:(0,C.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:te})}})),w=e((()=>{Qe(),tt()})),T,E,D,O,k,nt=e((()=>{s(),h(),c(),r(),T=t(u(),1),Be(),We(),m(),ce(),le(),Je(),ze(),Ve(),y(),Ke(),ve(),qe(),Xe(),w(),E=o(),D=(0,T.forwardRef)(({data:e,chartId:t,width:n,height:r,className:o,margin:s,withTooltips:c=!0,withTooltipCrosshairs:u,showLegend:d=!1,legend:f={},stacked:p=!0,stackOffset:m=`none`,smoothing:ce=!0,curveType:le,fillOpacity:ue,withStroke:de,renderTooltip:h=ye,animation:ve,options:g={},onPointerDown:Se,onPointerUp:Ce,onPointerMove:we,onPointerOut:Te,rescaleYOnLegendToggle:Ee=!0,children:De,gridVisibility:Oe,gap:ke=`md`},Ae)=>{let _=f.interactive??!1,je=f.shape??`rect`,Me=f.position??`bottom`,v=ae(),Ne=oe(e),y=ie(t),ze=(0,T.useRef)(null),[Be,Ve]=(0,T.useState)(void 0),[We,Ke]=(0,T.useState)(!1),b=(0,T.useRef)(null),{legendChildren:qe,nonLegendChildren:Je}=Fe(De,`AreaChart`),[Ye,Xe]=(0,T.useState)(),Qe=(0,T.useCallback)(e=>{Xe(e>0?e:r)},[r]);(0,T.useImperativeHandle)(Ae,()=>({getScales:()=>b.current?.getScales()||null,getChartDimensions:()=>b.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[b]);let S=ne(e),{getElementStyles:C,isSeriesVisible:tt}=re(),w=(0,T.useMemo)(()=>!y||!_?S.map((e,t)=>({series:e,index:t,isVisible:!0})):S.map((e,t)=>({series:e,index:t,isVisible:tt(y,e.label)})),[S,y,tt,_]),D=(0,T.useMemo)(()=>w.every(({isVisible:e})=>!e),[w]),{tooltipRef:O,onChartFocus:k,onChartBlur:nt,onChartKeyDown:A}=Ue({selectedIndex:Be,setSelectedIndex:Ve,isNavigating:We,setIsNavigating:Ke,chartRef:ze,totalPoints:S[0]?.data.length||0}),j=(0,T.useMemo)(()=>{if(Ee||!_||!S.length||!S[0].data.length||p&&m!==`none`)return;if(p){let e=Math.max(...S.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of S){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of S)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[S,p,m,_,Ee]),M=(0,T.useMemo)(()=>{let e=g?.axis?.x?.tickFormat||be(S);return{axis:{x:{orientation:`bottom`,numTicks:xe(S,n,e),tickFormat:e,display:!0,...g?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:i,display:!0,...g?.axis?.y}},xScale:{type:`time`,...g?.xScale},yScale:{type:`linear`,nice:!0,zero:p,...j?{domain:j}:{},...g?.yScale}}},[g,S,n,p,j]),rt=te(r,M,S,Ne),N=Ze(S),it=!N;se({chartId:y,legendItems:Pe(S,(0,T.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),je),chartType:`area`,isDataValid:it,metadata:(0,T.useMemo)(()=>({stacked:p,stackOffset:m,smoothing:ce,curveType:le}),[p,m,ce,le])});let P=ee(),F=!!ve&&!P,I={xAccessor:e=>e?.date,yAccessor:e=>e?.value},L=(0,T.useCallback)(()=>0,[]),R=(0,T.useMemo)(()=>new Set(w.filter(e=>e.isVisible).map(e=>e.series.label)),[w]),z=(0,T.useCallback)(e=>{if(!_)return h(e);let t=e?.tooltipData?.datumByKey;if(!t)return h(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>R.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&R.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return h({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[h,_,R]),B=ue??(p?.85:.4),V=de??!p;if(N)return(0,E.jsx)(`div`,{className:l(`area-chart`,x[`area-chart`]),children:N});let H=d&&(0,E.jsx)(Ie,{orientation:f.orientation??`horizontal`,alignment:f.alignment??`center`,position:Me,labelStyles:f.labelStyles,itemClassName:f.itemClassName,itemStyles:f.itemStyles,shapeStyles:f.shapeStyles,className:x[`area-chart__legend`],shape:je,chartId:y,interactive:_}),U=w.filter(({isVisible:e})=>e),W=_e(le,ce),G=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=C({data:e,index:t});return(0,E.jsx)(he,{dataKey:e?.label,data:e.data,xAccessor:I.xAccessor,yAccessor:n||!_?I.yAccessor:L,fill:r,fillOpacity:B,...p?{}:{renderLine:V,curve:W},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,E.jsx)(Re.Provider,{value:{chartId:y,chartRef:b,chartWidth:n,chartHeight:Ye||0},children:(0,E.jsx)(Le,{legendPosition:Me,legendElement:H,legendChildren:qe,gap:ke,className:l(`area-chart`,x[`area-chart`],{[x[`area-chart--animated`]]:F},o),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:Je,onContentHeightChange:Qe,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,E.jsx)(`div`,{role:`grid`,"aria-label":a(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:A,onFocus:k,onBlur:nt,children:t>0&&(0,E.jsx)(`div`,{ref:ze,children:(0,E.jsxs)(ge,{theme:Ne,width:n,height:t,margin:{...rt,...s},xScale:M.xScale,yScale:M.yScale,onPointerDown:Se,onPointerUp:Ce,onPointerMove:we,onPointerOut:Te,pointerEventsDataKey:`nearest`,children:[Oe!==`none`&&(0,E.jsx)(fe,{columns:!1,numTicks:4}),M.axis.x.display&&(0,E.jsx)(me,{...M.axis.x}),M.axis.y.display&&(0,E.jsx)(me,{...M.axis.y}),D?(0,E.jsx)(Ge,{x:n/2,y:t/2,width:n,height:t,children:a(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,!D&&p&&(0,E.jsx)(pe,{curve:W,offset:m,renderLine:V,children:w.map(G)}),!D&&!p&&w.map(G),c&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(He,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!p,renderTooltip:z,showVerticalCrosshair:u?.showVertical,showHorizontalCrosshair:u?.showHorizontal,selectedIndex:Be,tooltipRef:O,keyboardFocusedClassName:x[`area-chart__tooltip--keyboard-focused`],series:S}),(0,E.jsx)(et,{visibleSeries:U,stacked:p,stackOffset:m,getElementStyles:C,strokeColor:v.backgroundColor})]}),(0,E.jsx)($e,{chartRef:b,width:n,height:r||t,margin:s})]})})})}})})}),O=(0,T.forwardRef)((e,t)=>(0,T.useContext)(p)?(0,E.jsx)(D,{...e,ref:t}):(0,E.jsx)(f,{children:(0,E.jsx)(D,{...e,ref:t})})),O.displayName=`AreaChart`,d(O,{Legend:Ie}),k=d(b(O),{Legend:Ie})})),A,j,M=e((()=>{Se(),De(),Me(),Ce(),_(),nt(),A={title:`JS Packages/Charts Library/Charts/Area Chart`,component:k,parameters:{layout:`centered`},decorators:[Ee],argTypes:{...Oe,...g,...we,...Ae,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},j={...Te,data:v.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),rt=n({Animation:()=>U,AspectRatio:()=>H,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>F,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>V,GridVisibility:()=>X,LinearLines:()=>z,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>L,RescaleYOnLegendToggle:()=>W,SingleSeries:()=>B,Streamgraph:()=>R,Unstacked:()=>I,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>at,default:()=>it}),N,it,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,at,ot=e((()=>{Ne(),nt(),M(),N=o(),it={...A,title:`JS Packages/Charts Library/Charts/Area Chart`,component:A.component,argTypes:{...A.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},P=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=ke(e),s=a.data||j.data;t===`single`?s=[v[0]]:t===`multiple`?s=v.slice(0,4):t===`many`&&(s=v);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,N.jsx)(k,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},F=P.bind({}),F.args={...j,showLegend:!0},I=P.bind({}),I.args={...j,stacked:!1,showLegend:!0},I.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},L=P.bind({}),L.args={...j,stacked:!0,stackOffset:`expand`,showLegend:!0},L.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},R=P.bind({}),R.args={...j,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},R.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},z=P.bind({}),z.args={...j,curveType:`linear`,smoothing:!1,showLegend:!0},z.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},B=P.bind({}),B.args={...j,data:[je[0]]},V=P.bind({}),V.args={...j,width:600,height:300,showLegend:!0},H=P.bind({}),H.args={...j,aspectRatio:.3,showLegend:!0},U=P.bind({}),U.args={...j,animation:!0,showLegend:!0,legendInteractive:!0},W={name:`Y-axis rescales when legends toggle (default)`,render:e=>(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{children:`rescaleYOnLegendToggle: true (default)`}),(0,N.jsx)(k,{...e,rescaleYOnLegendToggle:!0})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h4`,{children:`rescaleYOnLegendToggle: false (pinned)`}),(0,N.jsx)(k,{...e,rescaleYOnLegendToggle:!1})]})]}),args:{...j,showLegend:!0,legend:{interactive:!0},width:480,height:280},parameters:{docs:{description:{story:`Click legend items to toggle series. The left chart rescales the Y axis to the visible series; the right chart pins the Y axis to the full data extent so the baseline stays put.`}}}},G={render:e=>{let t=ke(e);return(0,N.jsx)(k,{...F.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,N.jsx)(k.Legend,{...t})})},args:{...F.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=v.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Linear`}),(0,N.jsx)(k,{width:300,height:200,data:e,curveType:`linear`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,N.jsx)(k,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Monotone X`}),(0,N.jsx)(k,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Empty Data`}),(0,N.jsx)(k,{width:300,height:200,data:[]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Date Values`}),(0,N.jsx)(k,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Values`}),(0,N.jsx)(k,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Single Data Point`}),(0,N.jsx)(k,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=P.bind({}),J.args={...j,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=P.bind({}),Y.args={...j,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=v.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Default grid`}),(0,N.jsx)(k,{width:400,height:240,data:e})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,N.jsx)(k,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=P.bind({}),Z.args={...j,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,N.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,N.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:e.key}),(0,N.jsx)(`strong`,{children:e.value})]},e.key)),(0,N.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:`Total`}),(0,N.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=P.bind({}),Q.args={...j,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=P.bind({}),$.args={...j,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},at=[`Default`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`RescaleYOnLegendToggle`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`]}));ot();export{U as Animation,H as AspectRatio,K as CurveTypes,Z as CustomTooltip,F as Default,q as ErrorStates,J as FillOpacity,V as FixedDimensions,X as GridVisibility,z as LinearLines,$ as MismatchedXDomains,Q as NegativeValues,L as PercentageStack,W as RescaleYOnLegendToggle,B as SingleSeries,R as Streamgraph,I as Unstacked,G as WithCompositionLegend,Y as WithStroke,at as __namedExportsOrder,it as default,ot as n,rt as t};