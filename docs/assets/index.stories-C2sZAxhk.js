import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-uQYDX0pA.js";import{YS as l,cl as u,dS as ee,fS as d,mS as f,pS as p,uS as m,ul as h}from"./iframe-UR7yPd5s.js";import{A as te,_ as ne,a as re,d as ie,f as ae,g,h as oe,i as se,m as ce,n as le,p as ue,r as de,t as _,y as fe}from"./providers-Do29czeC.js";import{T as pe,d as me,f as he,n as ge,p as _e,r as ve,s as ye,t as be}from"./esm-CmAuVn16.js";import{a as xe,c as Se,i as Ce,o as we,s as Te}from"./line-chart-DRBVxYeT.js";import{n as Ee,r as De,t as Oe}from"./legend-config-CMmYe-9-.js";import{n as v,t as ke}from"./tooltip-config-PL8Zn6h3.js";import{b as Ae,c as je,y}from"./sample-data-BajYV1Sh.js";import{t as b}from"./stories-BmARXDDT.js";import{c as Me,d as Ne,i as Pe,l as Fe,n as Ie,p as Le,r as Re,s as ze,t as Be}from"./chart-layout-C4A8ED4q.js";import{n as Ve,r as He,t as Ue}from"./tooltip-i6sprsDY.js";import{n as We,t as x}from"./svg-empty-state-VD1pLegW.js";import{n as Ge,t as Ke}from"./with-responsive-CzkNSoi_.js";import{t as qe}from"./line-chart-B6XQOC8V.js";var Je,S,Ye=e((()=>{Je=`_rise_sezj1_1`,S={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:Je}})),Xe,C=e((()=>{p(),Xe=e=>!e?.length||e.some(e=>!e.data?.length)?f(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?f(`Invalid data`,`jetpack-charts`):null})),w,T,Ze,Qe,E=e((()=>{be(),w=t(l(),1),T=m(),Ze=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,w.useContext)(pe);return(0,w.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},Qe=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,w.useContext)(pe),o=(0,w.useContext)(me),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let ee=Number(s(u.date));if(!Number.isFinite(ee))return null;let d=u.date.getTime(),f=0,p=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===d),o=e?.value??0;if(t&&(f+=o),!e||e.value==null)continue;let s=Number(c(t?f:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});p.push((0,T.jsx)(`circle`,{cx:ee,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return p.length===0?null:(0,T.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:p})}})),$e=e((()=>{C(),E()})),D,O,k,A,j,et=e((()=>{h(),be(),p(),d(),D=t(l(),1),ze(),Ue(),se(),_(),fe(),qe(),Re(),Be(),Ne(),x(),Se(),Ke(),Ye(),$e(),O=m(),k=(0,D.forwardRef)(({data:e,chartId:t,width:n,height:r,className:i,margin:a,withTooltips:o=!0,withTooltipCrosshairs:s,showLegend:c=!1,legend:l={},stacked:d=!0,stackOffset:p=`none`,smoothing:m=!0,curveType:h,fillOpacity:te,withStroke:ne,renderTooltip:g=Ce,animation:se,options:_={},onPointerDown:fe,onPointerUp:pe,onPointerMove:me,onPointerOut:be,children:Se,gridVisibility:Ee,gap:De=`md`},Oe)=>{let v=l.interactive??!1,ke=l.shape??`rect`,Ae=l.position??`bottom`,je=le(),y=ue(e),b=ce(t),Ne=(0,D.useRef)(null),[Re,ze]=(0,D.useState)(void 0),[Be,Ue]=(0,D.useState)(!1),x=(0,D.useRef)(null),{legendChildren:Ge,nonLegendChildren:Ke}=Pe(Se,`AreaChart`),[qe,Je]=(0,D.useState)(),Ye=(0,D.useCallback)(e=>{Je(e>0?e:r)},[r]);(0,D.useImperativeHandle)(Oe,()=>({getScales:()=>x.current?.getScales()||null,getChartDimensions:()=>x.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[x]);let C=ae(e),{getElementStyles:w,isSeriesVisible:T}=oe(),E=(0,D.useMemo)(()=>!b||!v?C.map((e,t)=>({series:e,index:t,isVisible:!0})):C.map((e,t)=>({series:e,index:t,isVisible:T(b,e.label)})),[C,b,T,v]),$e=(0,D.useMemo)(()=>E.every(({isVisible:e})=>!e),[E]),{tooltipRef:k,onChartFocus:A,onChartBlur:j,onChartKeyDown:et}=He({selectedIndex:Re,setSelectedIndex:ze,isNavigating:Be,setIsNavigating:Ue,chartRef:Ne,totalPoints:C[0]?.data.length||0}),M=(0,D.useMemo)(()=>{if(!v||!C.length||!C[0].data.length||d&&p!==`none`)return;if(d){let e=Math.max(...C.map(e=>e.data.length)),t=0,n=0;for(let r=0;r<e;r++){let e=0,i=0;for(let t of C){let n=Number(t.data[r]?.value);Number.isNaN(n)||(n>=0?e+=n:i+=n)}e>t&&(t=e),i<n&&(n=i)}return[n,t]}let e=-1/0,t=1/0;for(let n of C)for(let r of n.data){let n=Number(r?.value);Number.isNaN(n)||(n>e&&(e=n),n<t&&(t=n))}if(e!==-1/0)return[Math.min(0,t),e]},[C,d,p,v]),N=(0,D.useMemo)(()=>{let e=_?.axis?.x?.tickFormat||we(C);return{axis:{x:{orientation:`bottom`,numTicks:Te(C,n,e),tickFormat:e,display:!0,..._?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:u,display:!0,..._?.axis?.y}},xScale:{type:`time`,..._?.xScale},yScale:{type:`linear`,nice:!0,zero:d,...M?{domain:M}:{},..._?.yScale}}},[_,C,n,d,M]),tt=ie(r,N,C,y),nt=Xe(C),P=!nt;de({chartId:b,legendItems:Me(C,(0,D.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),ke),chartType:`area`,isDataValid:P,metadata:(0,D.useMemo)(()=>({stacked:d,stackOffset:p,smoothing:m,curveType:h}),[d,p,m,h])});let rt=re(),F=!!se&&!rt,I={xAccessor:e=>e?.date,yAccessor:e=>e?.value},L=(0,D.useCallback)(()=>0,[]),R=(0,D.useMemo)(()=>new Set(E.filter(e=>e.isVisible).map(e=>e.series.label)),[E]),z=(0,D.useCallback)(e=>{if(!v)return g(e);let t=e?.tooltipData?.datumByKey;if(!t)return g(e);let n=Object.fromEntries(Object.entries(t).filter(([e])=>R.has(e)));if(Object.keys(n).length===0)return null;let r=e?.tooltipData?.nearestDatum,i=r&&R.has(r.key)?r:{...Object.values(n)[0],distance:r?.distance??0};return g({...e,tooltipData:{...e.tooltipData,datumByKey:n,nearestDatum:i}})},[g,v,R]),B=te??(d?.85:.4),V=ne??!d;if(nt)return(0,O.jsx)(`div`,{className:ee(`area-chart`,S[`area-chart`]),children:nt});let H=c&&(0,O.jsx)(Fe,{orientation:l.orientation??`horizontal`,alignment:l.alignment??`center`,position:Ae,labelStyles:l.labelStyles,itemClassName:l.itemClassName,itemStyles:l.itemStyles,shapeStyles:l.shapeStyles,className:S[`area-chart__legend`],shape:ke,chartId:b,interactive:v}),U=E.filter(({isVisible:e})=>e),W=xe(h,m),G=({series:e,index:t,isVisible:n})=>{let{color:r,lineStyles:i}=w({data:e,index:t});return(0,O.jsx)(ve,{dataKey:e?.label,data:e.data,xAccessor:I.xAccessor,yAccessor:n||!v?I.yAccessor:L,fill:r,fillOpacity:B,...d?{}:{renderLine:V,curve:W},lineProps:{stroke:r,...i},"data-testid":`area-chart-series-${t}`},e?.label||t)};return(0,O.jsx)(Le.Provider,{value:{chartId:b,chartRef:x,chartWidth:n,chartHeight:qe||0},children:(0,O.jsx)(Ie,{legendPosition:Ae,legendElement:H,legendChildren:Ge,gap:De,className:ee(`area-chart`,S[`area-chart`],{[S[`area-chart--animated`]]:F},i),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:Ke,onContentHeightChange:Ye,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,O.jsx)(`div`,{role:`grid`,"aria-label":f(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:et,onFocus:A,onBlur:j,children:t>0&&(0,O.jsx)(`div`,{ref:Ne,children:(0,O.jsxs)(ye,{theme:y,width:n,height:t,margin:{...tt,...a},xScale:N.xScale,yScale:N.yScale,onPointerDown:fe,onPointerUp:pe,onPointerMove:me,onPointerOut:be,pointerEventsDataKey:`nearest`,children:[Ee!==`none`&&(0,O.jsx)(he,{columns:!1,numTicks:4}),N.axis.x.display&&(0,O.jsx)(_e,{...N.axis.x}),N.axis.y.display&&(0,O.jsx)(_e,{...N.axis.y}),$e?(0,O.jsx)(We,{x:n/2,y:t/2,width:n,height:t,children:f(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,!$e&&d&&(0,O.jsx)(ge,{curve:W,offset:p,renderLine:V,children:E.map(G)}),!$e&&!d&&E.map(G),o&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Ve,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!d,renderTooltip:z,showVerticalCrosshair:s?.showVertical,showHorizontalCrosshair:s?.showHorizontal,selectedIndex:Re,tooltipRef:k,keyboardFocusedClassName:S[`area-chart__tooltip--keyboard-focused`],series:C}),(0,O.jsx)(Qe,{visibleSeries:U,stacked:d,stackOffset:p,getElementStyles:w,strokeColor:je.backgroundColor})]}),(0,O.jsx)(Ze,{chartRef:x,width:n,height:r||t,margin:a})]})})})}})})}),A=(0,D.forwardRef)((e,t)=>(0,D.useContext)(g)?(0,O.jsx)(k,{...e,ref:t}):(0,O.jsx)(ne,{children:(0,O.jsx)(k,{...e,ref:t})})),A.displayName=`AreaChart`,te(A,{Legend:Fe}),j=te(Ge(A),{Legend:Fe})})),M,N,tt=e((()=>{i(),Ee(),je(),a(),ke(),et(),M={title:`JS Packages/Charts Library/Charts/Area Chart`,component:j,parameters:{layout:`centered`},decorators:[c],argTypes:{...De,...r,...o,...v,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},N={...s,data:y.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),nt=n({Animation:()=>W,AspectRatio:()=>U,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>I,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>H,GridVisibility:()=>X,LinearLines:()=>B,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>R,SingleSeries:()=>V,Streamgraph:()=>z,Unstacked:()=>L,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>it,default:()=>rt}),P,rt,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,it,at=e((()=>{b(),et(),tt(),P=m(),rt={...M,title:`JS Packages/Charts Library/Charts/Area Chart`,component:M.component,argTypes:{...M.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},F=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Oe(e),s=a.data||N.data;t===`single`?s=[y[0]]:t===`multiple`?s=y.slice(0,4):t===`many`&&(s=y);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,P.jsx)(j,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},I=F.bind({}),I.args={...N,showLegend:!0},L=F.bind({}),L.args={...N,stacked:!1,showLegend:!0},L.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},R=F.bind({}),R.args={...N,stacked:!0,stackOffset:`expand`,showLegend:!0},R.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},z=F.bind({}),z.args={...N,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},z.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},B=F.bind({}),B.args={...N,curveType:`linear`,smoothing:!1,showLegend:!0},B.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},V=F.bind({}),V.args={...N,data:[Ae[0]]},H=F.bind({}),H.args={...N,width:600,height:300,showLegend:!0},U=F.bind({}),U.args={...N,aspectRatio:.3,showLegend:!0},W=F.bind({}),W.args={...N,animation:!0,showLegend:!0,legendInteractive:!0},G={render:e=>{let t=Oe(e);return(0,P.jsx)(j,{...I.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,P.jsx)(j.Legend,{...t})})},args:{...I.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=y.slice(0,3);return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Linear`}),(0,P.jsx)(j,{width:300,height:200,data:e,curveType:`linear`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,P.jsx)(j,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Monotone X`}),(0,P.jsx)(j,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,P.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Empty Data`}),(0,P.jsx)(j,{width:300,height:200,data:[]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Invalid Date Values`}),(0,P.jsx)(j,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Invalid Values`}),(0,P.jsx)(j,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Single Data Point`}),(0,P.jsx)(j,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=F.bind({}),J.args={...N,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=F.bind({}),Y.args={...N,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=y.slice(0,3);return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`Default grid`}),(0,P.jsx)(j,{width:400,height:240,data:e})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,P.jsx)(j,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=F.bind({}),Z.args={...N,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,P.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,P.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,P.jsx)(`span`,{children:e.key}),(0,P.jsx)(`strong`,{children:e.value})]},e.key)),(0,P.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,P.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,P.jsx)(`span`,{children:`Total`}),(0,P.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=F.bind({}),Q.args={...N,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=F.bind({}),$.args={...N,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},it=[`Default`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`]}));at();export{W as Animation,U as AspectRatio,K as CurveTypes,Z as CustomTooltip,I as Default,q as ErrorStates,J as FillOpacity,H as FixedDimensions,X as GridVisibility,B as LinearLines,$ as MismatchedXDomains,Q as NegativeValues,R as PercentageStack,V as SingleSeries,z as Streamgraph,L as Unstacked,G as WithCompositionLegend,Y as WithStroke,it as __namedExportsOrder,rt as default,at as n,nt as t};