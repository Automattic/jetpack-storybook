import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-BAZ_9OzW.js";import{Eh as l,Gm as u,Hm as d,Hn as ee,Um as f,Vm as p,Wm as m,Wn as te}from"./iframe-17Vf6jhm.js";import{A as ne,_ as re,a as ie,d as ae,f as oe,g as se,h as ce,i as le,m as ue,n as de,p as fe,r as pe,t as h,y as me}from"./providers-DC0WE4ti.js";import{a as he,d as ge,f as _e,i as ve,o as ye,t as be,u as xe,w as Se}from"./esm-Cd7NCohA.js";import{a as Ce,c as we,i as Te,o as Ee,s as De}from"./line-chart-4FQXvcCs.js";import{n as Oe,r as ke,t as Ae}from"./legend-config-tJy46Dt1.js";import{n as g,t as je}from"./tooltip-config-DU_WVmuX.js";import{b as Me,c as Ne,y as _}from"./sample-data-BfcHm5eo.js";import{t as v}from"./stories-DVhrfnNi.js";import{c as Pe,d as Fe,i as Ie,l as Le,n as Re,p as ze,r as Be,s as Ve,t as He}from"./chart-layout-BfkTGWnw.js";import{n as Ue,r as We,t as Ge}from"./tooltip-CEXaX4ro.js";import{n as Ke,t as y}from"./svg-empty-state-DKwI4vTB.js";import{n as qe,t as Je}from"./with-responsive-wabGry6b.js";import{t as Ye}from"./line-chart-ssNFmPsl.js";var Xe,b,Ze=e((()=>{Xe=`_rise_sezj1_1`,b={"area-chart":`_area-chart_sezj1_1`,"area-chart--animated":`_area-chart--animated_sezj1_4`,rise:Xe}})),Qe,x=e((()=>{m(),Qe=e=>!e?.length||e.some(e=>!e.data?.length)?u(`No data available`,`jetpack-charts`):e.some(e=>e.data.some(e=>isNaN(e.value)||e.value===null||e.value===void 0||`date`in e&&e.date&&isNaN(e.date.getTime())))?u(`Invalid data`,`jetpack-charts`):null})),S,C,$e,et,w=e((()=>{be(),S=t(l(),1),C=p(),$e=({chartRef:e,width:t,height:n,margin:r})=>{let i=(0,S.useContext)(Se);return(0,S.useImperativeHandle)(e,()=>({getScales:()=>!i?.xScale||!i?.yScale?null:{xScale:i.xScale,yScale:i.yScale},getChartDimensions:()=>({width:t,height:n,margin:r||{}})}),[i,t,n,r]),null},et=({visibleSeries:e,stacked:t,stackOffset:n,getElementStyles:r,strokeColor:i})=>{let a=(0,S.useContext)(Se),o=(0,S.useContext)(xe),s=a?.xScale,c=a?.yScale,l=o?.tooltipOpen,u=o?.tooltipData?.nearestDatum?.datum;if(!l||!s||!c||!u||!u.date||t&&n!==`none`)return null;let d=Number(s(u.date));if(!Number.isFinite(d))return null;let ee=u.date.getTime(),f=0,p=[];for(let{series:n,index:a}of e){let e=n.data.find(e=>e.date?.getTime()===ee),o=e?.value??0;if(t&&(f+=o),!e||e.value==null)continue;let s=Number(c(t?f:o));if(!Number.isFinite(s))continue;let{color:l}=r({data:n,index:a});p.push((0,C.jsx)(`circle`,{cx:d,cy:s,r:4,fill:l,stroke:i,strokeWidth:1.5,paintOrder:`fill`,"data-testid":`area-chart-hover-glyph-${a}`},n.label||a))}return p.length===0?null:(0,C.jsx)(`g`,{pointerEvents:`none`,className:`area-chart__hover-glyphs`,children:p})}})),T=e((()=>{x(),w()})),E,D,O,k,A,tt=e((()=>{te(),be(),m(),f(),E=t(l(),1),Ve(),Ge(),le(),h(),me(),Ye(),Be(),He(),Fe(),y(),we(),Je(),Ze(),T(),D=p(),O=(0,E.forwardRef)(({data:e,chartId:t,width:n,height:r,className:i,margin:a,withTooltips:o=!0,withTooltipCrosshairs:s,showLegend:c=!1,legend:l={},stacked:f=!0,stackOffset:p=`none`,smoothing:m=!0,curveType:te,fillOpacity:ne,withStroke:re,renderTooltip:se=Te,animation:le,options:h={},onPointerDown:me,onPointerUp:be,onPointerMove:xe,onPointerOut:Se,children:we,gridVisibility:Oe,gap:ke=`md`},Ae)=>{let g=l.interactive??!1,je=l.shape??`rect`,Me=l.position??`bottom`,Ne=de(),_=fe(e),v=ue(t),Fe=(0,E.useRef)(null),[Be,Ve]=(0,E.useState)(void 0),[He,Ge]=(0,E.useState)(!1),y=(0,E.useRef)(null),{legendChildren:qe,nonLegendChildren:Je}=Ie(we,`AreaChart`),[Ye,Xe]=(0,E.useState)(),Ze=(0,E.useCallback)(e=>{Xe(e>0?e:r)},[r]);(0,E.useImperativeHandle)(Ae,()=>({getScales:()=>y.current?.getScales()||null,getChartDimensions:()=>y.current?.getChartDimensions()||{width:0,height:0,margin:{}}}),[y]);let x=oe(e),{getElementStyles:S,isSeriesVisible:C}=ce(),w=(0,E.useMemo)(()=>!v||!g?x.map((e,t)=>({series:e,index:t,isVisible:!0})):x.map((e,t)=>({series:e,index:t,isVisible:C(v,e.label)})),[x,v,C,g]),T=(0,E.useMemo)(()=>w.every(({isVisible:e})=>!e),[w]),{tooltipRef:O,onChartFocus:k,onChartBlur:A,onChartKeyDown:tt}=We({selectedIndex:Be,setSelectedIndex:Ve,isNavigating:He,setIsNavigating:Ge,chartRef:Fe,totalPoints:x[0]?.data.length||0}),j=(0,E.useMemo)(()=>{let e=h?.axis?.x?.tickFormat||Ee(x);return{axis:{x:{orientation:`bottom`,numTicks:De(x,n,e),tickFormat:e,display:!0,...h?.axis?.x},y:{orientation:`left`,numTicks:4,tickFormat:ee,display:!0,...h?.axis?.y}},xScale:{type:`time`,...h?.xScale},yScale:{type:`linear`,nice:!0,zero:f,...h?.yScale}}},[h,x,n,f]),M=ae(r,j,x,_),nt=Qe(x),rt=!nt;pe({chartId:v,legendItems:Pe(x,(0,E.useMemo)(()=>({withGlyph:!1,glyphSize:0}),[]),je),chartType:`area`,isDataValid:rt,metadata:(0,E.useMemo)(()=>({stacked:f,stackOffset:p,smoothing:m,curveType:te}),[f,p,m,te])});let N=ie(),P={xAccessor:e=>e?.date,yAccessor:e=>e?.value},F=ne??(f?.85:.4),I=re??!f;if(nt)return(0,D.jsx)(`div`,{className:d(`area-chart`,b[`area-chart`]),children:nt});let L=c&&(0,D.jsx)(Le,{orientation:l.orientation??`horizontal`,alignment:l.alignment??`center`,position:Me,labelStyles:l.labelStyles,itemClassName:l.itemClassName,itemStyles:l.itemStyles,shapeStyles:l.shapeStyles,className:b[`area-chart__legend`],shape:je,chartId:v,interactive:g}),R=w.filter(({isVisible:e})=>e),z=Ce(te,m);return(0,D.jsx)(ze.Provider,{value:{chartId:v,chartRef:y,chartWidth:n,chartHeight:Ye||0},children:(0,D.jsx)(Re,{legendPosition:Me,legendElement:L,legendChildren:qe,gap:ke,className:d(`area-chart`,b[`area-chart`],{[b[`area-chart--animated`]]:le&&!N},i),style:{width:n,height:r},"data-testid":`area-chart`,trailingContent:Je,onContentHeightChange:Ze,children:({contentHeight:e})=>{let t=e>0?e:r;return(0,D.jsx)(`div`,{role:`grid`,"aria-label":u(`Area chart`,`jetpack-charts`),tabIndex:0,onKeyDown:tt,onFocus:k,onBlur:A,children:t>0&&(0,D.jsx)(`div`,{ref:Fe,children:(0,D.jsxs)(ye,{theme:_,width:n,height:t,margin:{...M,...a},xScale:j.xScale,yScale:j.yScale,onPointerDown:me,onPointerUp:be,onPointerMove:xe,onPointerOut:Se,pointerEventsDataKey:`nearest`,children:[Oe!==`none`&&(0,D.jsx)(ge,{columns:!1,numTicks:4}),j.axis.x.display&&(0,D.jsx)(_e,{...j.axis.x}),j.axis.y.display&&(0,D.jsx)(_e,{...j.axis.y}),T?(0,D.jsx)(Ke,{x:n/2,y:t/2,width:n,height:t,children:u(`All series are hidden. Click legend items to show data.`,`jetpack-charts`)}):null,!T&&f&&(0,D.jsx)(ve,{curve:z,offset:p,renderLine:I,children:R.map(({series:e,index:t})=>{let{color:n,lineStyles:r}=S({data:e,index:t});return(0,D.jsx)(he,{dataKey:e?.label,data:e.data,...P,fill:n,fillOpacity:F,lineProps:{stroke:n,...r},"data-testid":`area-chart-series-${t}`},e?.label||t)})}),!T&&!f&&R.map(({series:e,index:t})=>{let{color:n,lineStyles:r}=S({data:e,index:t});return(0,D.jsx)(he,{dataKey:e?.label,data:e.data,...P,fill:n,fillOpacity:F,renderLine:I,curve:z,lineProps:{stroke:n,...r},"data-testid":`area-chart-series-${t}`},e?.label||t)}),o&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Ue,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!f,renderTooltip:se,showVerticalCrosshair:s?.showVertical,showHorizontalCrosshair:s?.showHorizontal,selectedIndex:Be,tooltipRef:O,keyboardFocusedClassName:b[`area-chart__tooltip--keyboard-focused`],series:x}),(0,D.jsx)(et,{visibleSeries:R,stacked:f,stackOffset:p,getElementStyles:S,strokeColor:Ne.backgroundColor})]}),(0,D.jsx)($e,{chartRef:y,width:n,height:r||t,margin:a})]})})})}})})}),k=(0,E.forwardRef)((e,t)=>(0,E.useContext)(se)?(0,D.jsx)(O,{...e,ref:t}):(0,D.jsx)(re,{children:(0,D.jsx)(O,{...e,ref:t})})),k.displayName=`AreaChart`,ne(k,{Legend:Le}),A=ne(qe(k),{Legend:Le})})),j,M,nt=e((()=>{i(),Oe(),Ne(),a(),je(),tt(),j={title:`JS Packages/Charts Library/Charts/Area Chart`,component:A,parameters:{layout:`centered`},decorators:[c],argTypes:{...ke,...r,...o,...g,data:{control:{type:`object`},description:`Array of series data to display in the chart`,table:{category:`Data`}}}},M={...s,data:_.slice(0,4),stacked:!0,stackOffset:`none`,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:`bottom`},y:{orientation:`left`}}},withTooltips:!0}})),rt=n({Animation:()=>W,AspectRatio:()=>U,CurveTypes:()=>K,CustomTooltip:()=>Z,Default:()=>I,ErrorStates:()=>q,FillOpacity:()=>J,FixedDimensions:()=>H,GridVisibility:()=>X,LinearLines:()=>B,MismatchedXDomains:()=>$,NegativeValues:()=>Q,PercentageStack:()=>R,SingleSeries:()=>V,Streamgraph:()=>z,Unstacked:()=>L,WithCompositionLegend:()=>G,WithStroke:()=>Y,__namedExportsOrder:()=>it,default:()=>P}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,it,at=e((()=>{v(),tt(),nt(),N=p(),P={...j,title:`JS Packages/Charts Library/Charts/Area Chart`,component:j.component,argTypes:{...j.argTypes,seriesCount:{control:{type:`radio`},options:[`single`,`multiple`,`many`],description:`Number of data series`,table:{category:`Data`}},dimensionMode:{control:{type:`radio`},options:[`responsive`,`fixed`],description:`Chart sizing mode`,table:{category:`Dimensions`}},stacked:{control:`boolean`,description:`Stack series on top of each other`,table:{category:`Visual Style`}},stackOffset:{control:{type:`radio`},options:[`none`,`expand`,`wiggle`,`silhouette`],description:`Stack offset strategy (only applies when stacked is true)`,table:{category:`Visual Style`}},smoothing:{control:`boolean`,description:`Enable curve smoothing`,table:{category:`Visual Style`}},curveType:{control:{type:`radio`},options:[`linear`,`smooth`,`monotone`],description:`Curve interpolation type`,table:{category:`Visual Style`}},fillOpacity:{control:{type:`range`,min:0,max:1,step:.05},description:`Fill opacity for the areas (0–1)`,table:{category:`Visual Style`}},withStroke:{control:`boolean`,description:`Render a stroke (line) on top of each area`,table:{category:`Visual Style`}}}},F=e=>{let{seriesCount:t,dimensionMode:n,crosshairMode:r,withTooltipCrosshairs:i,...a}=e,o=Ae(e),s=a.data||M.data;t===`single`?s=[_[0]]:t===`multiple`?s=_.slice(0,4):t===`many`&&(s=_);let c={};n===`fixed`&&(c={width:800,height:400});let l;return r===`vertical`?l={showVertical:!0}:r===`horizontal`?l={showHorizontal:!0}:r===`both`&&(l={showVertical:!0,showHorizontal:!0}),(0,N.jsx)(A,{...a,...c,data:s,legend:o,withTooltipCrosshairs:l})},I=F.bind({}),I.args={...M,showLegend:!0},L=F.bind({}),L.args={...M,stacked:!1,showLegend:!0},L.parameters={docs:{description:{story:"When `stacked={ false }`, series are rendered as overlapping filled areas. Use `fillOpacity` to control transparency so overlapping series remain visible."}}},R=F.bind({}),R.args={...M,stacked:!0,stackOffset:`expand`,showLegend:!0},R.parameters={docs:{description:{story:'`stackOffset="expand"` produces a 100% stacked area chart — each x-position is normalised to 1.0, useful for showing relative composition over time.'}}},z=F.bind({}),z.args={...M,stacked:!0,stackOffset:`wiggle`,showLegend:!0,smoothing:!0},z.parameters={docs:{description:{story:'`stackOffset="wiggle"` produces a streamgraph layout. Each series flows around a central baseline, minimising weighted change in slope.'}}},B=F.bind({}),B.args={...M,curveType:`linear`,smoothing:!1,showLegend:!0},B.parameters={docs:{description:{story:'Stacked area chart with straight (linear) edges between data points. Use `curveType="linear"` (or `smoothing={ false }`) when you want a precise, unsmoothed visualisation.'}}},V=F.bind({}),V.args={...M,data:[Me[0]]},H=F.bind({}),H.args={...M,width:600,height:300,showLegend:!0},U=F.bind({}),U.args={...M,aspectRatio:.3,showLegend:!0},W=F.bind({}),W.args={...M,animation:!0,showLegend:!0},G={render:e=>{let t=Ae(e);return(0,N.jsx)(A,{...I.args,...e,legend:{interactive:t?.interactive},chartId:`composition-area-chart`,children:(0,N.jsx)(A.Legend,{...t})})},args:{...I.args},parameters:{docs:{description:{story:"Composition API using `<AreaChart.Legend />` as a child component for explicit legend placement and configuration."}}}},K={render:()=>{let e=_.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(3, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Linear`}),(0,N.jsx)(A,{width:300,height:200,data:e,curveType:`linear`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Smooth (Catmull-Rom)`}),(0,N.jsx)(A,{width:300,height:200,data:e,curveType:`smooth`})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Monotone X`}),(0,N.jsx)(A,{width:300,height:200,data:e,curveType:`monotone`})]})]})},parameters:{docs:{description:{story:"The three available curve types. `linear` connects points with straight lines; `smooth` uses Catmull-Rom interpolation; `monotone` prevents overshooting on steep changes."}}}},q={render:()=>(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Empty Data`}),(0,N.jsx)(A,{width:300,height:200,data:[]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Date Values`}),(0,N.jsx)(A,{width:300,height:200,data:[{label:`Invalid Dates`,data:[{date:new Date(`invalid`),value:10},{date:new Date(`2024-01-02`),value:20}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Invalid Values`}),(0,N.jsx)(A,{width:300,height:200,data:[{label:`Invalid Values`,data:[{date:new Date(`2024-01-01`),value:NaN},{date:new Date(`2024-01-02`),value:null}]}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Single Data Point`}),(0,N.jsx)(A,{width:300,height:200,data:[{label:`Single Point`,data:[{date:new Date(`2024-01-01`),value:100}]}]})]})]}),parameters:{docs:{description:{story:`How the area chart handles common edge cases.`}}}},J=F.bind({}),J.args={...M,fillOpacity:.5,showLegend:!0},J.parameters={docs:{description:{story:"Use `fillOpacity` to control how transparent the bands are. Defaults: `0.85` for stacked, `0.4` for unstacked."}}},Y=F.bind({}),Y.args={...M,withStroke:!0,showLegend:!0},Y.parameters={docs:{description:{story:"`withStroke={ true }` renders a stroke on top of each band. By default, stroke is off in stacked mode and on in unstacked mode."}}},X={render:()=>{let e=_.slice(0,3);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Default grid`}),(0,N.jsx)(A,{width:400,height:240,data:e})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`gridVisibility="none"`}),(0,N.jsx)(A,{width:400,height:240,data:e,gridVisibility:`none`})]})]})},parameters:{docs:{description:{story:'`gridVisibility` controls grid rendering. Use `"none"` for compact / inline visualisations like sparkline-style cards.'}}}},Z=F.bind({}),Z.args={...M,showLegend:!0,renderTooltip:({tooltipData:e})=>{let t=e?.nearestDatum?.datum;if(!t)return null;let n=Object.entries(e?.datumByKey||{}).map(([e,t])=>({key:e,value:t.datum.value})),r=n.reduce((e,t)=>e+(t.value??0),0);return(0,N.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,N.jsx)(`div`,{style:{fontWeight:600,marginBottom:6},children:t.date?.toLocaleDateString()}),n.map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:e.key}),(0,N.jsx)(`strong`,{children:e.value})]},e.key)),(0,N.jsx)(`hr`,{style:{margin:`6px 0`,opacity:.3}}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{children:`Total`}),(0,N.jsx)(`strong`,{children:r})]})]})}},Z.parameters={docs:{description:{story:"`renderTooltip` lets you render any React content inside the tooltip portal. The portal background is theme-driven; do not override it in custom content."}}},Q=F.bind({}),Q.args={...M,showLegend:!0,stacked:!0,stackOffset:`none`,data:[{label:`Inflows`,data:[{date:new Date(`2024-01-01`),value:30},{date:new Date(`2024-02-01`),value:35},{date:new Date(`2024-03-01`),value:50},{date:new Date(`2024-04-01`),value:42},{date:new Date(`2024-05-01`),value:60}]},{label:`Outflows`,data:[{date:new Date(`2024-01-01`),value:-15},{date:new Date(`2024-02-01`),value:-20},{date:new Date(`2024-03-01`),value:-10},{date:new Date(`2024-04-01`),value:-25},{date:new Date(`2024-05-01`),value:-18}]}]},Q.parameters={docs:{description:{story:'Mixed positive/negative values with `stackOffset="none"`. Hover glyphs follow the running total, matching where d3-stack draws the band edges.'}}},$=F.bind({}),$.args={...M,showLegend:!0,data:[{label:`Daily`,data:[{date:new Date(`2024-01-01`),value:10},{date:new Date(`2024-01-02`),value:12},{date:new Date(`2024-01-03`),value:14},{date:new Date(`2024-01-04`),value:16},{date:new Date(`2024-01-05`),value:18}]},{label:`Sparse`,data:[{date:new Date(`2024-01-02`),value:5},{date:new Date(`2024-01-03`),value:8},{date:new Date(`2024-01-04`),value:6}]}]},$.parameters={docs:{description:{story:`Series with non-matching x-domains. d3-stack treats missing values as zero; the hover-glyph overlay matches that convention so subsequent series glyphs stay on the correct stacked edge.`}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},it=[`Default`,`Unstacked`,`PercentageStack`,`Streamgraph`,`LinearLines`,`SingleSeries`,`FixedDimensions`,`AspectRatio`,`Animation`,`WithCompositionLegend`,`CurveTypes`,`ErrorStates`,`FillOpacity`,`WithStroke`,`GridVisibility`,`CustomTooltip`,`NegativeValues`,`MismatchedXDomains`]}));at();export{W as Animation,U as AspectRatio,K as CurveTypes,Z as CustomTooltip,I as Default,q as ErrorStates,J as FillOpacity,H as FixedDimensions,X as GridVisibility,B as LinearLines,$ as MismatchedXDomains,Q as NegativeValues,R as PercentageStack,V as SingleSeries,z as Streamgraph,L as Unstacked,G as WithCompositionLegend,Y as WithStroke,it as __namedExportsOrder,P as default,at as n,rt as t};