"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1383],{"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((M,T,e)=>{e.d(T,{A:()=>y});var v=e("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const D=Object.create(null);function y(i,u={}){const{since:s,version:l,alternative:o,plugin:d,link:p,hint:c}=u,r=d?` from ${d}`:"",m=s?` since version ${s}`:"",x=l?` and will be removed${r} in version ${l}`:"",S=o?` Please use ${o} instead.`:"",a=p?` See: ${p}`:"",t=c?` Note: ${c}`:"",n=`${i} is deprecated${m}${x}.${S}${a}${t}`;n in D||((0,v.Eo)("deprecated",i,u,n),console.warn(n),D[n]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((M,T,e)=>{e.d(T,{A:()=>y});function v(i){var u,s,l="";if(typeof i=="string"||typeof i=="number")l+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(u=0;u<o;u++)i[u]&&(s=v(i[u]))&&(l&&(l+=" "),l+=s)}else for(s in i)i[s]&&(l&&(l+=" "),l+=s);return l}function D(){for(var i,u,s=0,l="",o=arguments.length;s<o;s++)(i=arguments[s])&&(u=v(i))&&(l&&(l+=" "),l+=u);return l}const y=D}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((M,T,e)=>{e.d(T,{A:()=>s});var v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),D=e.n(v),y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),i=e.n(y),u=i()(D());u.push([M.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),u.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const s=u}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(M=>{var T=function(t){return e(t)&&!v(t)};function e(a){return!!a&&typeof a=="object"}function v(a){var t=Object.prototype.toString.call(a);return t==="[object RegExp]"||t==="[object Date]"||i(a)}var D=typeof Symbol=="function"&&Symbol.for,y=D?Symbol.for("react.element"):60103;function i(a){return a.$$typeof===y}function u(a){return Array.isArray(a)?[]:{}}function s(a,t){return t.clone!==!1&&t.isMergeableObject(a)?x(u(a),a,t):a}function l(a,t,n){return a.concat(t).map(function(f){return s(f,n)})}function o(a,t){if(!t.customMerge)return x;var n=t.customMerge(a);return typeof n=="function"?n:x}function d(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(t){return Object.propertyIsEnumerable.call(a,t)}):[]}function p(a){return Object.keys(a).concat(d(a))}function c(a,t){try{return t in a}catch{return!1}}function r(a,t){return c(a,t)&&!(Object.hasOwnProperty.call(a,t)&&Object.propertyIsEnumerable.call(a,t))}function m(a,t,n){var f={};return n.isMergeableObject(a)&&p(a).forEach(function(g){f[g]=s(a[g],n)}),p(t).forEach(function(g){r(a,g)||(c(a,g)&&n.isMergeableObject(t[g])?f[g]=o(g,n)(a[g],t[g],n):f[g]=s(t[g],n))}),f}function x(a,t,n){n=n||{},n.arrayMerge=n.arrayMerge||l,n.isMergeableObject=n.isMergeableObject||T,n.cloneUnlessOtherwiseSpecified=s;var f=Array.isArray(t),g=Array.isArray(a),B=f===g;return B?f?n.arrayMerge(a,t,n):m(a,t,n):s(t,n)}x.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(f,g){return x(f,g,n)},{})};var S=x;M.exports=S}),"../charts/src/components/bar-chart/bar-chart.tsx":((M,T,e)=>{e.d(T,{A:()=>je});var v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),D=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),y=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),i=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),d=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@6.4.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/hooks/use-xychart-theme.ts"),x=e("../charts/src/hooks/use-chart-data-transform.ts");const S=(h,V={enabled:!1})=>{const{enabled:O,minValueRatio:C=.6,maxValueRatio:k=.008}=V;return(0,r.useMemo)(()=>{if(!O)return h;const I=[];for(const j of h)for(const A of j.data)A.value!==null&&A.value!==0&&I.push(A.value);if(I.length===0)return h;const R=I.map(Math.abs),P=Math.min(...R),K=Math.max(...R),F=Math.min(P*C,K*k);return h.map(j=>({...j,data:j.data.map(A=>A.value===0?{...A,visualValue:F}:A)}))},[h,O,C,k])};var a=e("../charts/src/hooks/use-chart-margin.tsx"),t=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),f=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),g=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),B=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),N=e("../charts/src/utils/create-composition.ts"),ee=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),E=e("../charts/src/components/legend/legend.tsx"),X=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ve=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),ce=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),xe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=e.n(xe),ue=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),te={};te.insert="head",te.singleton=!1;var Je=_e()(ue.A,te);const z=ue.A.locals||{};var Se=e("../number-formatters/src/index.ts");const Te=h=>new Date(h).toLocaleDateString(void 0,{month:"short",day:"numeric"}),De=h=>typeof h.paddingInner=="number"?h.paddingInner:0;function we(h,V,O={}){const C=(0,r.useMemo)(()=>{const k={type:"band",padding:.2,paddingInner:.1},I={type:"linear",nice:!0,zero:!1},R=h?.[0]?.data?.[0]?.label?j=>j:Te,P=Se.qe,K=j=>j?.label||j?.date,F=j=>{const A=j;return A?.visualValue!==void 0?A.visualValue:j?.value};return{vertical:{xTickFormat:R,yTickFormat:P,tooltipLabelFormatter:R,xAccessor:K,yAccessor:F,gridVisibility:"x",xScale:k,yScale:I},horizontal:{xTickFormat:P,yTickFormat:R,tooltipLabelFormatter:R,xAccessor:F,yAccessor:K,gridVisibility:"y",xScale:I,yScale:k}}},[h]);return(0,r.useMemo)(()=>{const k=V?"horizontal":"vertical",{xTickFormat:I,yTickFormat:R,tooltipLabelFormatter:P,xAccessor:K,yAccessor:F,gridVisibility:j,xScale:A,yScale:re}=C[k],J={...A,...O.xScale||{}},Q={...re,...O.yScale||{}},oe=V?O.axis?.y?.tickFormat:O.axis?.x?.tickFormat;return{gridVisibility:j,xScale:J,yScale:Q,accessors:{xAccessor:K,yAccessor:F},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:I,...O.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:R,...O.axis?.y||{}}},barGroup:{padding:De(V?Q:J)},tooltip:{labelFormatter:oe||P}}},[C,O,V])}var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Ce=p.__,Oe=h=>h?.length?h.some(O=>O.data.some(C=>isNaN(C.value)||C.value===null||C.value===void 0||!C.label&&(!("date"in C&&C.date)||isNaN(C.date.getTime()))))?"Invalid data":null:"No data available",ae=(h,V)=>`bar-pattern-${h}-${V}`,pe=({data:h,chartId:V,width:O,height:C=400,className:k,margin:I,withTooltips:R=!1,showLegend:P=!1,legendOrientation:K="horizontal",legendPosition:F="bottom",legendAlignment:j="center",legendMaxWidth:A,legendTextOverflow:re="wrap",legendItemClassName:J,legendShape:Q="rect",gridVisibility:oe,renderTooltip:Ee,options:Ae={},orientation:ne="vertical",withPatterns:Y=!1,showZeroValues:Ve=!1,children:Me})=>{const ie=ne==="horizontal",L=(0,n.R)(V),me=(0,m.O)(h),G=(0,x.E)(h),he=S(G,{enabled:Ve}),Pe=(0,ee.f)(G),W=we(he,ie,Ae),fe=(0,a.a)(C,W,G,me,ie),[Le,le]=(0,t.v)(),ge=(0,r.useRef)(null),[$,Be]=(0,r.useState)(void 0),[Re,We]=(0,r.useState)(!1),Ie=Math.max(0,...h.map(_=>_.data?.length||0))*h.length,{tooltipRef:Fe,onChartFocus:ze,onChartBlur:ke,onChartKeyDown:Ne}=(0,ce.JZ)({selectedIndex:$,setSelectedIndex:Be,isNavigating:Re,setIsNavigating:We,chartRef:ge,totalPoints:Ie}),{getElementStyles:q}=(0,f.j)(),Ke=(0,r.useCallback)(_=>()=>Y?`url(#${ae(L,_)})`:q({data:G[_],index:_}).color,[Y,q,G,L]),Ge=(0,r.useCallback)(({tooltipData:_})=>{const w=_?.nearestDatum?.datum;return w?(0,b.jsxs)("div",{className:z["bar-chart__tooltip"],children:[(0,b.jsx)("div",{className:z["bar-chart__tooltip-header"],children:_?.nearestDatum?.key}),(0,b.jsxs)("div",{className:z["bar-chart__tooltip-row"],children:[(0,b.jsxs)("span",{className:z["bar-chart__tooltip-label"],children:[W.tooltip.labelFormatter(w.label||(w.date?w.date.getTime():0),0,[]),":"]}),(0,b.jsx)("span",{className:z["bar-chart__tooltip-value"],children:w.value})]})]}):null},[W.tooltip]),Ue=(0,r.useCallback)((_,w)=>{const H=_%4,U=ae(L,_),Z={id:U,stroke:"white",strokeWidth:1,background:w};switch(H){case 0:default:return(0,b.jsx)(v.A,{...Z,width:5,height:5,orientation:["diagonal"]},U);case 1:return(0,b.jsx)(D.A,{...Z,width:6,height:6,fill:"white"},U);case 2:return(0,b.jsx)(y.A,{...Z,width:4,height:4},U);case 3:return(0,b.jsx)(i.A,{...Z,size:8,height:3},U)}},[L]),$e=(0,r.useCallback)((_,w)=>`
			.visx-bar[fill="url(#${ae(L,_)})"] {
				stroke: ${w};
				stroke-width: 1;
				}
			`,[L]),He=(0,r.useCallback)(()=>{if($===void 0)return"";const _=Math.max(...h.map(Xe=>Xe.data.length)),w=Math.floor($/h.length),H=$%h.length;if(w>=_||H>=h.length)return"";const U=h[H];if(w>=U.data.length)return"";const Z=H*_+w;return`
			.bar-chart[data-chart-id="bar-chart-${L}"] .visx-bar-group .visx-bar:nth-child(${Z+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[$,h,L]),de=Oe(G),Ze=!de,Ye=(0,r.useMemo)(()=>({orientation:ne,withPatterns:Y}),[ne,Y]);if((0,g.t)({chartId:L,legendItems:Pe,chartType:"bar",isDataValid:Ze,metadata:Ye}),de)return(0,b.jsx)("div",{className:(0,c.A)("bar-chart",z["bar-chart"]),children:de});const ye=oe??W.gridVisibility,be=He();return(0,b.jsx)(X.O.Provider,{value:{chartId:L,chartWidth:O,chartHeight:C-(P?le:0)},children:(0,b.jsxs)("div",{className:(0,c.A)("bar-chart",z["bar-chart"],k),"data-testid":"bar-chart",role:"grid","aria-label":Ce("Bar chart","jetpack-charts"),style:{width:O,height:C,display:"flex",flexDirection:P&&F==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Ne,onFocus:ze,onBlur:ke,ref:ge,"data-chart-id":`bar-chart-${L}`,children:[(0,b.jsxs)(u.A,{theme:me,width:O,height:C-(P?le:0),margin:{...fe,...I,...P&&F==="top"?{top:(fe.top||0)+le}:{}},xScale:W.xScale,yScale:W.yScale,horizontal:ie,pointerEventsDataKey:"nearest",children:[(0,b.jsx)(s.A,{columns:ye.includes("y"),rows:ye.includes("x"),numTicks:4}),Y&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("defs",{"data-testid":"bar-chart-patterns",children:G.map((_,w)=>Ue(w,q({data:_,index:w}).color))}),(0,b.jsx)("style",{children:G.map((_,w)=>$e(w,q({data:_,index:w}).color))})]}),be&&(0,b.jsx)("style",{children:be}),(0,b.jsx)(l.A,{padding:W.barGroup.padding,children:he.map((_,w)=>(0,b.jsx)(o.A,{dataKey:_?.label,data:_.data,yAccessor:W.accessors.yAccessor,xAccessor:W.accessors.xAccessor,colorAccessor:Ke(w)},_?.label))}),(0,b.jsx)(d.A,{...W.axis.x}),(0,b.jsx)(d.A,{...W.axis.y}),R&&(0,b.jsx)(ce.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:Ee||Ge,selectedIndex:$,tooltipRef:Fe,keyboardFocusedClassName:z["bar-chart__tooltip--keyboard-focused"],series:h,mode:"individual"})]}),P&&(0,b.jsx)(E.s,{orientation:K,position:F,alignment:j,maxWidth:A,textOverflow:re,legendItemClassName:J,className:z["bar-chart__legend"],shape:Q,ref:Le,chartId:L}),Me]})})},se=h=>(0,r.useContext)(B.m)?(0,b.jsx)(pe,{...h}):(0,b.jsx)(B.S,{children:(0,b.jsx)(pe,{...h})});se.displayName="BarChart";const Qe=(0,N.E)(se,{Legend:E.s}),je=(0,N.E)((0,ve.F)(se),{Legend:E.s})}),"../charts/src/components/bar-chart/stories/index.stories.tsx":((M,T,e)=>{e.r(T),e.d(T,{CustomLegendPositioning:()=>f,Default:()=>d,ErrorStates:()=>S,FixedDimensions:()=>m,HorizontalBarChart:()=>g,ManyDataSeries:()=>r,SingleSeries:()=>p,SmartFormatting:()=>a,TimeSeries:()=>c,WithCompositionLegend:()=>n,WithLegend:()=>t,WithPatterns:()=>x,ZeroValueComparison:()=>N,__namedExportsOrder:()=>ee,default:()=>o});var v=e("../charts/src/stories/chart-decorator.tsx"),D=e("../charts/src/stories/theme-config.tsx"),y=e("../charts/src/stories/legend-config.tsx"),i=e("../charts/src/stories/sample-data/index.ts"),u=e("../charts/src/components/bar-chart/bar-chart.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o={title:"JS Packages/Charts/Types/Bar Chart",component:u.A,parameters:{layout:"centered"},decorators:[v.OI],argTypes:{...v.xo,...D.jW,...y.r}},d={args:{withTooltips:!0,data:[i._E[0],i._E[1],i._E[2]],gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300}},p={args:{...d.args,data:[i._E[0]]},parameters:{docs:{description:{story:"Bar chart with a single data series."}}}},c={args:{...d.args,data:[{...i.Sb[0],label:"Data with dateString and date",data:[...i.Sb[0].data,{dateString:"2024-01-31",value:2230},{dateString:"2024-02-01",value:2580},{date:new Date("2024-02-02 00:00:00"),value:3500},{dateString:"2024-02-03 00:00:00",value:1500},{dateString:"2024-02-04",value:2500},{dateString:"2024-02-05 00:00",value:3e3}]}],options:{axis:{x:{tickFormat:E=>new Date(E).toLocaleDateString("en-US",{dateStyle:"short"})}}}},parameters:{docs:{description:{story:"Bar chart with a time series."}}}},r={args:{...d.args,data:i._E},parameters:{docs:{description:{story:"Bar chart with many data series."}}}},m={args:{...d.args,width:800,height:400,data:[i._E[0],i._E[1],i._E[2]]},parameters:{docs:{description:{story:"Bar chart with fixed dimensions that override the responsive behavior."}}}},x={args:{...d.args,withPatterns:!0,data:d.args.data.map(E=>({...E,data:E.data.filter(X=>parseInt(X.label)>=2016)}))}},S={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"20px"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,s.jsx)(u.A,{data:[]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Invalid Data"}),(0,s.jsx)("div",{style:{width:"400px",height:"300px"},children:(0,s.jsx)(u.A,{data:[{label:"Invalid Series",data:[{date:new Date("invalid"),value:10,label:"Invalid Date"},{date:new Date("2024-01-02"),value:null,label:"Null Value"}],options:{}}]})})]})]})};S.parameters={docs:{description:{story:"Examples of how the bar chart handles various error states including empty data and invalid data."}}};const a={args:{withTooltips:!0,data:i.Gv,gridVisibility:"x"}};a.parameters={docs:{description:{story:'Demonstrates the Smart Formatting feature (formatYTick) that automatically formats Y-axis tick labels based on the data range. Values \u22651B are formatted as "1.23B", \u22651M as "1.2M", \u22651K as "1k", and smaller values as "1,234". This example shows revenue in billions and users in millions.'}}};const t={args:{...d.args,showLegend:!0}},n={render:E=>(0,s.jsx)("div",{style:{width:"800px"},children:(0,s.jsx)(u.A,{data:E.data||[i._E[0],i._E[1],i._E[2]],withTooltips:!0,gridVisibility:"x",maxWidth:1200,aspectRatio:.5,children:(0,s.jsx)(u.A.Legend,{orientation:E.legendOrientation||"horizontal",alignment:E.legendAlignment||"center",position:E.legendPosition||"bottom",maxWidth:E.legendMaxWidth,textOverflow:E.legendTextOverflow||"wrap"})})}),parameters:{docs:{description:{story:"Demonstrates using the composition API with `<BarChart.Legend />` as a child component. This provides the same functionality as the `showLegend` prop but allows for more flexible composition patterns."}}}},f={args:{withTooltips:!0,data:i._E.slice(0,3),gridVisibility:"x",maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top"},parameters:{docs:{description:{story:"Bar chart with top-left positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities."}}}},g={args:{...d.args,data:[i._E[0],i._E[1],i._E[2]],orientation:"horizontal",gridVisibility:"none"}},B=[{group:"United States",label:"United States",data:[{label:"1896",value:0},{label:"1900",value:0},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:3}]},{group:"Great Britain",label:"Great Britain",data:[{label:"1896",value:1},{label:"1900",value:0},{label:"1904",value:1},{label:"1908",value:10},{label:"1912",value:9}]},{group:"Japan",label:"Japan",data:[{label:"1896",value:2},{label:"1900",value:1},{label:"1904",value:2},{label:"1908",value:1},{label:"1912",value:2}]}],N={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"40px"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Zero Value Display: Disabled (Default)"}),(0,s.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are not visually displayed. Bars with zero values have no height."}),(0,s.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,s.jsx)(u.A,{data:B,showZeroValues:!1,withTooltips:!0,gridVisibility:"x"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Zero Value Display: Enabled"}),(0,s.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Zero values are visually displayed with minimum height bars. The tooltip still shows the actual value of 0, while the bar has a small visual height for better UX."}),(0,s.jsx)("div",{style:{width:"600px",height:"300px"},children:(0,s.jsx)(u.A,{data:B,showZeroValues:!0,withTooltips:!0,gridVisibility:"x"})})]})]}),parameters:{docs:{description:{story:"Comparison showing the difference between disabled and enabled zero value display modes. The feature preserves data integrity by keeping the original value for tooltips while providing visual feedback through minimum bar heights."}}}},ee=["Default","SingleSeries","TimeSeries","ManyDataSeries","FixedDimensions","WithPatterns","ErrorStates","SmartFormatting","WithLegend","WithCompositionLegend","CustomLegendPositioning","HorizontalBarChart","ZeroValueComparison"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    // limit to 3 series for better readability
    gridVisibility: 'x',
    maxWidth: 1200,
    aspectRatio: 0.5,
    resizeDebounceTime: 300
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [medalCountsData[0], medalCountsData[1], medalCountsData[2]],
    orientation: 'horizontal',
    gridVisibility: 'none'
  }
}`,...g.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}}}),"../charts/src/components/tooltip/accessible-tooltip.tsx":((M,T,e)=>{e.d(T,{JZ:()=>s,OZ:()=>u});var v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),D=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({renderTooltip:l,selectedIndex:o,tooltipRef:d,keyboardFocusedClassName:p,series:c=[],mode:r="group",...m})=>{const x=(0,y.useContext)(D.A),S=(0,y.useMemo)(()=>{if(r!=="individual")return[];if(c.length===0)return[];const t=Math.max(...c.map(f=>f.data.length)),n=[];for(let f=0;f<t;f++)for(let g=0;g<c.length;g++){const B=c[g];f<B.data.length&&n.push({datum:B.data[f],seriesLabel:B.label,seriesIndex:g,dataPointIndex:f})}return n},[c,r]);(0,y.useEffect)(()=>{if(o===void 0){x?.hideTooltip();return}if(r==="group")c.forEach((t,n)=>{if(o<t.data.length){const f=t.data[o];x?.showTooltip({datum:f,key:t.label,index:n})}});else if(r==="individual"&&o<S.length){const t=S[o];x?.showTooltip({datum:t.datum,key:t.seriesLabel,index:t.seriesIndex})}},[o,S,c]);const a=(0,y.useMemo)(()=>{if(l)return t=>{const n=l(t);return o!==void 0?(0,i.jsx)("div",{ref:d,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:p,"data-testid":`chart-tooltip-${o}`,children:n},`chart-tooltip-${o}`):(0,i.jsx)("div",{role:"tooltip","aria-live":"polite",children:n})}},[l,o,d,p]);return(0,i.jsx)(v.A,{...m,renderTooltip:a})},s=({selectedIndex:l,setSelectedIndex:o,isNavigating:d,setIsNavigating:p,chartRef:c,totalPoints:r})=>{const m=(0,y.useCallback)(t=>{t&&l!==void 0&&t.focus()},[l]),x=(0,y.useCallback)(()=>{!d&&l!==void 0&&o(0)},[d,l,o]),S=(0,y.useCallback)(()=>{p(!1)},[p]),a=(0,y.useCallback)(t=>{if(r===0)return;if(t.key==="Tab"){c.current?.focus(),o(void 0),p(!1);return}const n=l===void 0?-1:l;if(n+1>=r&&["ArrowRight"].includes(t.key)){c.current?.focus(),o(void 0),p(!1);return}t.preventDefault(),["ArrowRight"].includes(t.key)?(p(!0),o((n+1)%r)):["ArrowLeft"].includes(t.key)?(p(!0),o((n-1+r)%r)):t.key==="Escape"&&(o(void 0),p(!1),c.current?.focus())},[r,l,o,p,c]);return{tooltipRef:m,onChartFocus:x,onChartBlur:S,onChartKeyDown:a}};try{u.displayName="AccessibleTooltip",u.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:u.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{s.displayName="useKeyboardNavigation",s.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:s.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}}),"../charts/src/hooks/use-chart-data-transform.ts":((M,T,e)=>{e.d(T,{E:()=>l});var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),y=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),i=e("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const u=o=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(o),s=o=>{const d=o.trim();if(u(d)){const c=(0,D.H)(d);return(0,y.f)(c)?c:new Date(NaN)}const p=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const c of p){const r=(0,i.qg)(d,c,new Date);if((0,y.f)(r))return r}return new Date(NaN)},l=o=>(0,v.useMemo)(()=>{const d=o?.[0]?.data?.[0];return d&&("date"in d||"dateString"in d)?o.map(c=>({...c,data:c.data.map(r=>{let m;return"date"in r&&r.date?m=r.date:"dateString"in r&&r.dateString&&(m=s(r.dateString)),{...r,date:m}}).sort((r,m)=>!r.date||!m.date?0:r.date.getTime()-m.date.getTime())})):o},[o])}),"../charts/src/hooks/use-chart-margin.tsx":((M,T,e)=>{e.d(T,{a:()=>s});var v=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),D=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const u=(l,o,d)=>{const p=l.map(r=>o(r,0,[])),c=p.reduce((r,m)=>r.length>=m.length?r:m,p[0]);return(0,i.A)(c,d)},s=(l,o,d,p,c=!1)=>{const r=(0,y.useMemo)(()=>{const m=d.flatMap(t=>t.data);if(c)return m.map(t=>t.label||o.axis?.y?.tickFormat(t.date.getTime(),0,[]));const x=Math.min(...m.map(t=>t.value)),S=Math.max(...m.map(t=>t.value)),a=(0,v.A)({...o.yScale,domain:[x,S],range:[l,0]});return(0,D.A)(a,o.axis?.y?.numTicks)},[o,d,l,c]);return(0,y.useMemo)(()=>{const m={top:10,right:20,bottom:20,left:20},x=40,S=o.axis?.y?.orientation,a=S==="right"?p.axisStyles.y.right:p.axisStyles.y.left,n=(u(r,o.axis?.y?.tickFormat,a.axisLabel)??x)+(a?.tickLength??0);return S==="right"?m.right=n:m.left=n,o.axis?.x?.orientation==="top"&&(m.top=20,m.bottom=10),m},[o,p,r])}}),"../charts/src/hooks/use-xychart-theme.ts":((M,T,e)=>{e.d(T,{O:()=>i});var v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),D=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const i=u=>{const s=(0,y.p)();return(0,D.useMemo)(()=>{const l=(u??[]).map(o=>o.options?.stroke).filter(o=>!!o);return(0,v.A)({...s,colors:[...l,...s.colors??[]]})},[s,u])}}),"../charts/src/stories/legend-config.tsx":((M,T,e)=>{e.d(T,{r:()=>v});const v={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."}};try{v.displayName="legendArgTypes",v.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:v.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
