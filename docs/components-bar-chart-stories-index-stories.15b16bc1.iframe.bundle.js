"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((L,D,e)=>{e.d(D,{A:()=>b});function v(o){var d,s,l="";if(typeof o=="string"||typeof o=="number")l+=o;else if(typeof o=="object")if(Array.isArray(o)){var n=o.length;for(d=0;d<n;d++)o[d]&&(s=v(o[d]))&&(l&&(l+=" "),l+=s)}else for(s in o)o[s]&&(l&&(l+=" "),l+=s);return l}function w(){for(var o,d,s=0,l="",n=arguments.length;s<n;s++)(o=arguments[s])&&(d=v(o))&&(l&&(l+=" "),l+=d);return l}const b=w}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((L,D,e)=>{e.d(D,{A:()=>s});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=e.n(v),b=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(b),d=o()(w());d.push([L.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),d.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const s=d}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(L=>{var D=function(t){return e(t)&&!v(t)};function e(a){return!!a&&typeof a=="object"}function v(a){var t=Object.prototype.toString.call(a);return t==="[object RegExp]"||t==="[object Date]"||o(a)}var w=typeof Symbol=="function"&&Symbol.for,b=w?Symbol.for("react.element"):60103;function o(a){return a.$$typeof===b}function d(a){return Array.isArray(a)?[]:{}}function s(a,t){return t.clone!==!1&&t.isMergeableObject(a)?x(d(a),a,t):a}function l(a,t,i){return a.concat(t).map(function(f){return s(f,i)})}function n(a,t){if(!t.customMerge)return x;var i=t.customMerge(a);return typeof i=="function"?i:x}function c(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(t){return Object.propertyIsEnumerable.call(a,t)}):[]}function h(a){return Object.keys(a).concat(c(a))}function u(a,t){try{return t in a}catch{return!1}}function r(a,t){return u(a,t)&&!(Object.hasOwnProperty.call(a,t)&&Object.propertyIsEnumerable.call(a,t))}function p(a,t,i){var f={};return i.isMergeableObject(a)&&h(a).forEach(function(y){f[y]=s(a[y],i)}),h(t).forEach(function(y){r(a,y)||(u(a,y)&&i.isMergeableObject(t[y])?f[y]=n(y,i)(a[y],t[y],i):f[y]=s(t[y],i))}),f}function x(a,t,i){i=i||{},i.arrayMerge=i.arrayMerge||l,i.isMergeableObject=i.isMergeableObject||D,i.cloneUnlessOtherwiseSpecified=s;var f=Array.isArray(t),y=Array.isArray(a),B=f===y;return B?f?i.arrayMerge(a,t,i):p(a,t,i):s(t,i)}x.all=function(t,i){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(f,y){return x(f,y,i)},{})};var S=x;L.exports=S}),"../charts/src/components/bar-chart/bar-chart.tsx":((L,D,e)=>{e.d(D,{A:()=>Oe});var v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),w=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),b=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),o=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),d=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),c=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.4.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/hooks/use-xychart-theme.ts"),x=e("../charts/src/hooks/use-chart-data-transform.ts");const S=(m,A={enabled:!1})=>{const{enabled:O,minValueRatio:C=.6,maxValueRatio:N=.008}=A;return(0,r.useMemo)(()=>{if(!O)return m;const I=[];for(const E of m)for(const V of E.data)V.value!==null&&V.value!==0&&I.push(V.value);if(I.length===0)return m;const R=I.map(Math.abs),M=Math.min(...R),G=Math.max(...R),z=Math.min(M*C,G*N);return m.map(E=>({...E,data:E.data.map(V=>V.value===0?{...V,visualValue:z}:V)}))},[m,O,C,N])};var a=e("../charts/src/hooks/use-chart-margin.tsx"),t=e("../charts/src/hooks/use-element-height.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),f=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),B=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),k=e("../charts/src/utils/create-composition.ts"),ae=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),j=e("../charts/src/components/legend/legend.tsx"),K=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),q=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),H=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),xe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=e.n(xe),pe=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),se={};se.insert="head",se.singleton=!1;var Je=_e()(pe.A,se);const F=pe.A.locals||{};var Se=e("../number-formatters/src/index.ts");const Te=m=>new Date(m).toLocaleDateString(void 0,{month:"short",day:"numeric"}),De=m=>typeof m.paddingInner=="number"?m.paddingInner:0;function we(m,A,O={}){const C=(0,r.useMemo)(()=>{const N={type:"band",padding:.2,paddingInner:.1},I={type:"linear",nice:!0,zero:!1},R=m?.[0]?.data?.[0]?.label?E=>E:Te,M=Se.qe,G=E=>E?.label||E?.date,z=E=>{const V=E;return V?.visualValue!==void 0?V.visualValue:E?.value};return{vertical:{xTickFormat:R,yTickFormat:M,tooltipLabelFormatter:R,xAccessor:G,yAccessor:z,gridVisibility:"x",xScale:N,yScale:I},horizontal:{xTickFormat:M,yTickFormat:R,tooltipLabelFormatter:R,xAccessor:z,yAccessor:G,gridVisibility:"y",xScale:I,yScale:N}}},[m]);return(0,r.useMemo)(()=>{const N=A?"horizontal":"vertical",{xTickFormat:I,yTickFormat:R,tooltipLabelFormatter:M,xAccessor:G,yAccessor:z,gridVisibility:E,xScale:V,yScale:ne}=C[N],Q={...V,...O.xScale||{}},ee={...ne,...O.yScale||{}},ie=A?O.axis?.y?.tickFormat:O.axis?.x?.tickFormat;return{gridVisibility:E,xScale:Q,yScale:ee,accessors:{xAccessor:G,yAccessor:z},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:I,...O.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:R,...O.axis?.y||{}}},barGroup:{padding:De(A?ee:Q)},tooltip:{labelFormatter:ie||M}}},[C,O,A])}var g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Ce=h.__,je=m=>m?.length?m.some(O=>O.data.some(C=>isNaN(C.value)||C.value===null||C.value===void 0||!C.label&&(!("date"in C&&C.date)||isNaN(C.date.getTime()))))?"Invalid data":null:"No data available",re=(m,A)=>`bar-pattern-${m}-${A}`,me=({data:m,chartId:A,width:O,height:C=400,className:N,margin:I,withTooltips:R=!1,showLegend:M=!1,legendOrientation:G="horizontal",legendPosition:z="bottom",legendAlignment:E="center",legendMaxWidth:V,legendTextOverflow:ne="wrap",legendItemClassName:Q,legendShape:ee="rect",gridVisibility:ie,renderTooltip:Ee,options:Ve={},orientation:le="vertical",withPatterns:J=!1,showZeroValues:Ae=!1,children:Me})=>{const de=le==="horizontal",P=(0,i.R)(A),he=(0,p.O)(m),U=(0,x.E)(m),fe=S(U,{enabled:Ae}),Pe=(0,ae.f)(U),W=we(fe,de,Ve),ye=(0,a.a)(C,W,U,he,de),[Le,ce]=(0,t.v)(),ge=(0,r.useRef)(null),[Y,Be]=(0,r.useState)(void 0),[Re,We]=(0,r.useState)(!1),Ie=Math.max(0,...m.map(_=>_.data?.length||0))*m.length,{tooltipRef:ze,onChartFocus:Fe,onChartBlur:Ne,onChartKeyDown:ke}=(0,H.JZ)({selectedIndex:Y,setSelectedIndex:Be,isNavigating:Re,setIsNavigating:We,chartRef:ge,totalPoints:Ie}),{getElementStyles:te}=(0,f.j)(),Ke=(0,r.useCallback)(_=>()=>J?`url(#${re(P,_)})`:te({data:U[_],index:_}).color,[J,te,U,P]),Ge=(0,r.useCallback)(({tooltipData:_})=>{const T=_?.nearestDatum?.datum;return T?(0,g.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,g.jsx)("div",{className:F["bar-chart__tooltip-header"],children:_?.nearestDatum?.key}),(0,g.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,g.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[W.tooltip.labelFormatter(T.label||(T.date?T.date.getTime():0),0,[]),":"]}),(0,g.jsx)("span",{className:F["bar-chart__tooltip-value"],children:T.value})]})]}):null},[W.tooltip]),Ue=(0,r.useCallback)((_,T)=>{const X=_%4,Z=re(P,_),$={id:Z,stroke:"white",strokeWidth:1,background:T};switch(X){case 0:default:return(0,g.jsx)(v.A,{...$,width:5,height:5,orientation:["diagonal"]},Z);case 1:return(0,g.jsx)(w.A,{...$,width:6,height:6,fill:"white"},Z);case 2:return(0,g.jsx)(b.A,{...$,width:4,height:4},Z);case 3:return(0,g.jsx)(o.A,{...$,size:8,height:3},Z)}},[P]),He=(0,r.useCallback)((_,T)=>`
			.visx-bar[fill="url(#${re(P,_)})"] {
				stroke: ${T};
				stroke-width: 1;
				}
			`,[P]),Ze=(0,r.useCallback)(()=>{if(Y===void 0)return"";const _=Math.max(...m.map($e=>$e.data.length)),T=Math.floor(Y/m.length),X=Y%m.length;if(T>=_||X>=m.length)return"";const Z=m[X];if(T>=Z.data.length)return"";const $=X*_+T;return`
			.bar-chart[data-chart-id="bar-chart-${P}"] .visx-bar-group .visx-bar:nth-child(${$+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[Y,m,P]),ue=je(U),Ye=!ue,Xe=(0,r.useMemo)(()=>({orientation:le,withPatterns:J}),[le,J]);if((0,y.t)({chartId:P,legendItems:Pe,chartType:"bar",isDataValid:Ye,metadata:Xe}),ue)return(0,g.jsx)("div",{className:(0,u.A)("bar-chart",F["bar-chart"]),children:ue});const be=ie??W.gridVisibility,ve=Ze();return(0,g.jsx)(K.O.Provider,{value:{chartId:P,chartWidth:O,chartHeight:C-(M?ce:0)},children:(0,g.jsxs)("div",{className:(0,u.A)("bar-chart",F["bar-chart"],N),"data-testid":"bar-chart",role:"grid","aria-label":Ce("Bar chart","jetpack-charts"),style:{width:O,height:C,display:"flex",flexDirection:M&&z==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ke,onFocus:Fe,onBlur:Ne,ref:ge,"data-chart-id":`bar-chart-${P}`,children:[(0,g.jsxs)(d.A,{theme:he,width:O,height:C-(M?ce:0),margin:{...ye,...I,...M&&z==="top"?{top:(ye.top||0)+ce}:{}},xScale:W.xScale,yScale:W.yScale,horizontal:de,pointerEventsDataKey:"nearest",children:[(0,g.jsx)(s.A,{columns:be.includes("y"),rows:be.includes("x"),numTicks:4}),J&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("defs",{"data-testid":"bar-chart-patterns",children:U.map((_,T)=>Ue(T,te({data:_,index:T}).color))}),(0,g.jsx)("style",{children:U.map((_,T)=>He(T,te({data:_,index:T}).color))})]}),ve&&(0,g.jsx)("style",{children:ve}),(0,g.jsx)(l.A,{padding:W.barGroup.padding,children:fe.map((_,T)=>(0,g.jsx)(n.A,{dataKey:_?.label,data:_.data,yAccessor:W.accessors.yAccessor,xAccessor:W.accessors.xAccessor,colorAccessor:Ke(T)},_?.label))}),(0,g.jsx)(c.A,{...W.axis.x}),(0,g.jsx)(c.A,{...W.axis.y}),R&&(0,g.jsx)(H.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:Ee||Ge,selectedIndex:Y,tooltipRef:ze,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:m,mode:"individual"})]}),M&&(0,g.jsx)(j.s,{orientation:G,position:z,alignment:E,maxWidth:V,textOverflow:ne,legendItemClassName:Q,className:F["bar-chart__legend"],shape:ee,ref:Le,chartId:P}),Me]})})},oe=m=>(0,r.useContext)(B.m)?(0,g.jsx)(me,{...m}):(0,g.jsx)(B.S,{children:(0,g.jsx)(me,{...m})});oe.displayName="BarChart";const qe=(0,k.E)(oe,{Legend:j.s}),Oe=(0,k.E)((0,q.F)(oe),{Legend:j.s})}),"../charts/src/components/bar-chart/stories/index.stories.tsx":((L,D,e)=>{e.r(D),e.d(D,{CustomLegendPositioning:()=>f,Default:()=>c,ErrorStates:()=>S,FixedDimensions:()=>p,HorizontalBarChart:()=>y,ManyDataSeries:()=>r,SingleSeries:()=>h,SmartFormatting:()=>a,TimeSeries:()=>u,WithCompositionLegend:()=>i,WithLegend:()=>t,WithPatterns:()=>x,ZeroValueComparison:()=>k,__namedExportsOrder:()=>ae,default:()=>n});var v=e("../charts/src/stories/chart-decorator.tsx"),w=e("../charts/src/stories/theme-config.tsx"),b=e("../charts/src/stories/legend-config.tsx"),o=e("../charts/src/stories/sample-data/index.ts"),d=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts/Types/Bar Chart",component:d.A,parameters:{layout:"centered"},decorators:[v.OI],argTypes:{...v.xo,...w.jW,...b.r,orientation:{control:{type:"radio"},options:["vertical","horizontal"],description:"Bar orientation",table:{category:"Visual Style"}},gridVisibility:{control:{type:"radio"},options:["none","x","y","both"],description:"Grid line visibility",table:{category:"Visual Style"}},seriesCount:{control:{type:"radio"},options:["single","multiple","many"],description:"Number of data series",table:{category:"Data"}},withPatterns:{control:"boolean",description:"Use patterns for bars",table:{category:"Visual Style"}}},render:j=>{const{seriesCount:K,...q}=j;let H=q.data;return K==="single"?H=[o._E[0]]:K==="multiple"?H=[o._E[0],o._E[1],o._E[2]]:K==="many"&&(H=o._E),(0,s.jsx)(d.A,{...q,data:H})}},c={args:{withTooltips:!0,data:[o._E[0],o._E[1],o._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},h={args:{...c.args,data:[o._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},u={args:{...c.args,data:[{...o.Sb[0],label:"Data with dateString and date",data:[...o.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:j=>new Date(j).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},r={args:{...c.args,data:o._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},p={args:{...c.args,width:800,height:400,data:[o._E[0],o._E[1],o._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},x={args:{...c.args,withPatterns:!0,data:c.args.data.map(j=>({...j,data:j.data.filter(K=>parseInt(K.label)>=2016)}))}},S={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,s.jsx)(d.A,{data:[]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Invalid Data"}),(0,s.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,s.jsx)(d.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};S.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const a={args:{withTooltips:!0,data:o.Gv,gridVisibility:"x"}};a.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const t={args:{...c.args,showLegend:!0}},i={render:j=>(0,s.jsx)("div",{style:{width:"800px"},children:(0,s.jsx)(d.A,{data:j.data||[o._E[0],o._E[1],o._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,s.jsx)(d.A.Legend,{orientation:j.legendOrientation||"horizontal",alignment:j.legendAlignment||"center",position:j.legendPosition||"bottom",maxWidth:j.legendMaxWidth,textOverflow:j.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},f={args:{withTooltips:!0,data:o._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},y={args:{...c.args,data:[o._E[0],o._E[1],o._E[2]],orientation:"horizontal",gridVisibility:"none"}},B=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],k={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,s.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,s.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,s.jsx)(d.A,{data:B,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,s.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,s.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,s.jsx)(d.A,{data:B,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},ae=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...c.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a single data series.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      ...trafficData[0],
      label: 'Data with dateString and date',
      data: [...trafficData[0].data, {
        dateString: '2024-01-31',
        value: 2230
      }, {
        dateString: '2024-02-01',
        value: 2580
      }, {
        date: new Date('2024-02-02 00:00:00'),
        value: 3500
      }, {
        dateString: '2024-02-03 00:00:00',
        value: 1500
      }, {
        dateString: '2024-02-04',
        value: 2500
      }, {
        dateString: '2024-02-05 00:00',
        value: 3000
      }]
    }],
    options: {
      axis: {
        x: {
          tickFormat: (timestamp: number) => {
            const date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
              dateStyle: 'short'
            });
          }
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a time series.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: medalCountsData
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with many data series.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 800,
    height: 400,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with fixed dimensions that override the responsive behavior.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withPatterns: true,
    data: Default.args.data.map(country => {
      return {
        ...country,
        data: country.data.filter(d => parseInt(d.label) >= 2016)
      };
    })
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '20px'
  }}>
            <div>
                <h3>Empty Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[]} />
                </div>
            </div>

            <div>
                <h3>Invalid Data</h3>
                <div style={{
        width: '400px',
        height: '300px'
      }}>
                    <BarChart data={[{
          label: 'Invalid Series',
          data: [{
            date: new Date('invalid'),
            value: 10,
            label: 'Invalid Date'
          }, {
            date: new Date('2024-01-02'),
            value: null,
            label: 'Null Value'
          }],
          options: {}
        }]} />
                </div>
            </div>
        </div>
}`,...S.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: largeValuesData,
    gridVisibility: 'x'
  }
}`,...a.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...t.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '800px'
  }}>
            <BarChart data={args.data || [medalCountsData[0], medalCountsData[1], medalCountsData[2]]} withTooltips={true} gridVisibility="x" maxWidth={1200} aspectRatio={0.5}>
                <BarChart.Legend orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} position={args.legendPosition || 'bottom'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
            </BarChart>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the composition API with \`<BarChart.Legend />\` as a child component. This provides the same functionality as the \`showLegend\` prop but allows for more flexible composition patterns.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: medalCountsData.slice(0, 3),
    // Use first 3 series for cleaner legend
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300,
    // showLegend defaults to false, explicitly enabling for demonstration
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'start',
    legendPosition: 'top'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...y.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '40px'
  }}>
            <div>
                <h3>Zero Value Display: Disabled (Default)</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are not visually displayed. Bars with zero values have no height.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={false} withTooltips={true} gridVisibility="x" />
                </div>
            </div>

            <div>
                <h3>Zero Value Display: Enabled</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Zero values are visually displayed with minimum height bars. The tooltip still shows the
                    actual value of 0, while the bar has a small visual height for better UX.
                </p>
                <div style={{
        width: '600px',
        height: '300px'
      }}>
                    <BarChart data={dataWithZeroValues} showZeroValues={true} withTooltips={true} gridVisibility="x" />
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}}}),"../charts/src/components/tooltip/accessible-tooltip.tsx":((L,D,e)=>{e.d(D,{JZ:()=>s,OZ:()=>d});var v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),w=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=({renderTooltip:l,selectedIndex:n,tooltipRef:c,keyboardFocusedClassName:h,series:u=[],mode:r="group",...p})=>{const x=(0,b.useContext)(w.A),S=(0,b.useMemo)(()=>{if(r!=="individual")return[];if(u.length===0)return[];const t=Math.max(...u.map(f=>f.data.length)),i=[];for(let f=0;f<t;f++)for(let y=0;y<u.length;y++){const B=u[y];f<B.data.length&&i.push({datum:B.data[f],seriesLabel:B.label,seriesIndex:y,dataPointIndex:f})}return i},[u,r]);(0,b.useEffect)(()=>{if(n===void 0){x?.hideTooltip();return}if(r==="group")u.forEach((t,i)=>{if(n<t.data.length){const f=t.data[n];x?.showTooltip({datum:f,key:t.label,index:i})}});else if(r==="individual"&&n<S.length){const t=S[n];x?.showTooltip({datum:t.datum,key:t.seriesLabel,index:t.seriesIndex})}},[n,S,u]);const a=(0,b.useMemo)(()=>{if(l)return t=>{const i=l(t);return n!==void 0?(0,o.jsx)("div",{ref:c,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:h,"data-testid":`chart-tooltip-${n}`,children:i},`chart-tooltip-${n}`):(0,o.jsx)("div",{role:"tooltip","aria-live":"polite",children:i})}},[l,n,c,h]);return(0,o.jsx)(v.A,{...p,renderTooltip:a})},s=({selectedIndex:l,setSelectedIndex:n,isNavigating:c,setIsNavigating:h,chartRef:u,totalPoints:r})=>{const p=(0,b.useCallback)(t=>{t&&l!==void 0&&t.focus()},[l]),x=(0,b.useCallback)(()=>{!c&&l!==void 0&&n(0)},[c,l,n]),S=(0,b.useCallback)(()=>{h(!1)},[h]),a=(0,b.useCallback)(t=>{if(r===0)return;if(t.key==="Tab"){u.current?.focus(),n(void 0),h(!1);return}const i=l===void 0?-1:l;if(i+1>=r&&["ArrowRight"].includes(t.key)){u.current?.focus(),n(void 0),h(!1);return}t.preventDefault(),["ArrowRight"].includes(t.key)?(h(!0),n((i+1)%r)):["ArrowLeft"].includes(t.key)?(h(!0),n((i-1+r)%r)):t.key==="Escape"&&(n(void 0),h(!1),u.current?.focus())},[r,l,n,h,u]);return{tooltipRef:p,onChartFocus:x,onChartBlur:S,onChartKeyDown:a}};try{d.displayName="AccessibleTooltip",d.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:d.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{s.displayName="useKeyboardNavigation",s.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:s.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}}),"../charts/src/hooks/use-chart-data-transform.ts":((L,D,e)=>{e.d(D,{E:()=>l});var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),b=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),o=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const d=n=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(n),s=n=>{const c=n.trim();if(d(c)){const u=(0,w.H)(c);return(0,b.f)(u)?u:new Date(NaN)}const h=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const u of h){const r=(0,o.qg)(c,u,new Date);if((0,b.f)(r))return r}return new Date(NaN)},l=n=>(0,v.useMemo)(()=>{const c=n?.[0]?.data?.[0];return c&&("date"in c||"dateString"in c)?n.map(u=>({...u,data:u.data.map(r=>{let p;return"date"in r&&r.date?p=r.date:"dateString"in r&&r.dateString&&(p=s(r.dateString)),{...r,date:p}}).sort((r,p)=>!r.date||!p.date?0:r.date.getTime()-p.date.getTime())})):n},[n])}),"../charts/src/hooks/use-chart-margin.tsx":((L,D,e)=>{e.d(D,{a:()=>s});var v=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),w=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const d=(l,n,c)=>{const h=l.map(r=>n(r,0,[])),u=h.reduce((r,p)=>r.length>=p.length?r:p,h[0]);return(0,o.A)(u,c)},s=(l,n,c,h,u=!1)=>{const r=(0,b.useMemo)(()=>{const p=c.flatMap(t=>t.data);if(u)return p.map(t=>t.label||n.axis?.y?.tickFormat(t.date.getTime(),0,[]));const x=Math.min(...p.map(t=>t.value)),S=Math.max(...p.map(t=>t.value)),a=(0,v.A)({...n.yScale,domain:[x,S],range:[l,0]});return(0,w.A)(a,n.axis?.y?.numTicks)},[n,c,l,u]);return(0,b.useMemo)(()=>{const p={top:10,right:20,bottom:20,left:20},x=40,S=n.axis?.y?.orientation,a=S==="right"?h.axisStyles.y.right:h.axisStyles.y.left,i=(d(r,n.axis?.y?.tickFormat,a.axisLabel)??x)+(a?.tickLength??0);return S==="right"?p.right=i:p.left=i,n.axis?.x?.orientation==="top"&&(p.top=20,p.bottom=10),p},[n,h,r])}}),"../charts/src/hooks/use-xychart-theme.ts":((L,D,e)=>{e.d(D,{O:()=>o});var v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const o=d=>{const s=(0,b.p)();return(0,w.useMemo)(()=>{const l=(d??[]).map(n=>n.options?.stroke).filter(n=>!!n);return(0,v.A)({...s,colors:[...l,...s.colors??[]]})},[s,d])}}),"../charts/src/stories/legend-config.tsx":((L,D,e)=>{e.d(D,{r:()=>v});const v={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{v.displayName="legendArgTypes",v.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:v.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
