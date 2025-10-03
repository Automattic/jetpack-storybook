"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((M,y,e)=>{e.d(y,{A:()=>i});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function r(t,s){t(s)}function a(t){var s=t===void 0?{}:t,d=s.innerRadius,g=s.outerRadius,S=s.cornerRadius,_=s.startAngle,f=s.endAngle,I=s.padAngle,A=s.padRadius,w=(0,n.A)();return d!=null&&r(w.innerRadius,d),g!=null&&r(w.outerRadius,g),S!=null&&r(w.cornerRadius,S),_!=null&&r(w.startAngle,_),f!=null&&r(w.endAngle,f),I!=null&&r(w.padAngle,I),A!=null&&r(w.padRadius,A),w}function v(t){var s=t===void 0?{}:t,d=s.x,g=s.x0,S=s.x1,_=s.y,f=s.y0,I=s.y1,A=s.defined,w=s.curve,T=d3Area();return d&&setNumberOrNumberAccessor(T.x,d),g&&setNumberOrNumberAccessor(T.x0,g),S&&setNumberOrNumberAccessor(T.x1,S),_&&setNumberOrNumberAccessor(T.y,_),f&&setNumberOrNumberAccessor(T.y0,f),I&&setNumberOrNumberAccessor(T.y1,I),A&&T.defined(A),w&&T.curve(w),T}function L(t){var s=t===void 0?{}:t,d=s.x,g=s.y,S=s.defined,_=s.curve,f=d3Line();return d&&setNumberOrNumberAccessor(f.x,d),g&&setNumberOrNumberAccessor(f.y,g),S&&f.defined(S),_&&f.curve(_),f}function E(t){var s=t===void 0?{}:t,d=s.startAngle,g=s.endAngle,S=s.padAngle,_=s.value,f=s.sort,I=s.sortValues,A=(0,h.A)();return(f===null||f!=null)&&A.sort(f),(I===null||I!=null)&&A.sortValues(I),_!=null&&A.value(_),S!=null&&r(A.padAngle,S),d!=null&&r(A.startAngle,d),g!=null&&r(A.endAngle,g),A}function b(t){var s=t===void 0?{}:t,d=s.angle,g=s.radius,S=s.defined,_=s.curve,f=d3RadialLine();return d&&setNumberOrNumberAccessor(f.angle,d),g&&setNumberOrNumberAccessor(f.radius,g),S&&f.defined(S),_&&f.curve(_),f}function G(t){var s=t.keys,d=t.value,g=t.order,S=t.offset,_=d3Stack();return s&&_.keys(s),d&&setNumberOrNumberAccessor(_.value,d),g&&_.order(stackOrder(g)),S&&_.offset(stackOffset(S)),_}var j=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function B(){return B=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(t[g]=d[g])}return t},B.apply(this,arguments)}function o(t,s){if(t==null)return{};var d={},g=Object.keys(t),S,_;for(_=0;_<g.length;_++)S=g[_],!(s.indexOf(S)>=0)&&(d[S]=t[S]);return d}function i(t){var s=t.className,d=t.top,g=t.left,S=t.data,_=S===void 0?[]:S,f=t.centroid,I=t.innerRadius,A=I===void 0?0:I,w=t.outerRadius,T=t.cornerRadius,J=t.startAngle,C=t.endAngle,ie=t.padAngle,ue=t.padRadius,W=t.pieSort,Ce=t.pieSortValues,be=t.pieValue,F=t.children,le=t.fill,m=le===void 0?"":le,q=o(t,j),X=a({innerRadius:A,outerRadius:w,cornerRadius:T,padRadius:ue}),de=E({startAngle:J,endAngle:C,padAngle:ie,value:be,sort:W,sortValues:Ce}),ae=de(_);return F?u.createElement(u.Fragment,null,F({arcs:ae,path:X,pie:de})):u.createElement(l.A,{className:"visx-pie-arcs-group",top:d,left:g},ae.map(function(ne,Ee){return u.createElement("g",{key:"pie-arc-"+Ee},u.createElement("path",B({className:p()("visx-pie-arc",s),d:X(ne)||"",fill:m==null||typeof m=="string"?m:m(ne)},q)),f?.(X.centroid(ne),ne))}))}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((M,y,e)=>{e.d(y,{A:()=>p});var u=e("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const c=Object.create(null);function p(l,n={}){const{since:h,version:r,alternative:a,plugin:v,link:L,hint:E}=n,b=v?` from ${v}`:"",G=h?` since version ${h}`:"",j=r?` and will be removed${b} in version ${r}`:"",B=a?` Please use ${a} instead.`:"",o=L?` See: ${L}`:"",i=E?` Note: ${E}`:"",t=`${l} is deprecated${G}${j}.${B}${o}${i}`;t in c||((0,u.Eo)("deprecated",l,n,t),console.warn(t),c[t]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((M,y,e)=>{e.d(y,{A:()=>p});function u(l){var n,h,r="";if(typeof l=="string"||typeof l=="number")r+=l;else if(typeof l=="object")if(Array.isArray(l)){var a=l.length;for(n=0;n<a;n++)l[n]&&(h=u(l[n]))&&(r&&(r+=" "),r+=h)}else for(h in l)l[h]&&(r&&(r+=" "),r+=h);return r}function c(){for(var l,n,h=0,r="",a=arguments.length;h<a;h++)(l=arguments[h])&&(n=u(l))&&(r&&(r+=" "),r+=n);return r}const p=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((M,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),n=l()(c());n.push([M.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),n.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const h=n}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((M,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),n=l()(c());n.push([M.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const h=n}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((M,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),n=l()(c());n.push([M.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const h=n}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(M=>{var y=function(i){return e(i)&&!u(i)};function e(o){return!!o&&typeof o=="object"}function u(o){var i=Object.prototype.toString.call(o);return i==="[object RegExp]"||i==="[object Date]"||l(o)}var c=typeof Symbol=="function"&&Symbol.for,p=c?Symbol.for("react.element"):60103;function l(o){return o.$$typeof===p}function n(o){return Array.isArray(o)?[]:{}}function h(o,i){return i.clone!==!1&&i.isMergeableObject(o)?j(n(o),o,i):o}function r(o,i,t){return o.concat(i).map(function(s){return h(s,t)})}function a(o,i){if(!i.customMerge)return j;var t=i.customMerge(o);return typeof t=="function"?t:j}function v(o){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(o).filter(function(i){return Object.propertyIsEnumerable.call(o,i)}):[]}function L(o){return Object.keys(o).concat(v(o))}function E(o,i){try{return i in o}catch{return!1}}function b(o,i){return E(o,i)&&!(Object.hasOwnProperty.call(o,i)&&Object.propertyIsEnumerable.call(o,i))}function G(o,i,t){var s={};return t.isMergeableObject(o)&&L(o).forEach(function(d){s[d]=h(o[d],t)}),L(i).forEach(function(d){b(o,d)||(E(o,d)&&t.isMergeableObject(i[d])?s[d]=a(d,t)(o[d],i[d],t):s[d]=h(i[d],t))}),s}function j(o,i,t){t=t||{},t.arrayMerge=t.arrayMerge||r,t.isMergeableObject=t.isMergeableObject||y,t.cloneUnlessOtherwiseSpecified=h;var s=Array.isArray(i),d=Array.isArray(o),g=s===d;return g?s?t.arrayMerge(o,i,t):G(o,i,t):h(i,t)}j.all=function(i,t){if(!Array.isArray(i))throw new Error("first argument should be an array");return i.reduce(function(s,d){return j(s,d,t)},{})};var B=j;M.exports=B}),"../charts/src/components/bar-chart/bar-chart.tsx":((M,y,e)=>{e.d(y,{A:()=>Ke});var u=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),c=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),p=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),l=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),r=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),L=e("../../../node_modules/.pnpm/@wordpress+i18n@6.4.0/node_modules/@wordpress/i18n/build-module/index.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),G=e("../charts/src/hooks/use-xychart-theme.ts"),j=e("../charts/src/hooks/use-chart-data-transform.ts");const B=(x,V={enabled:!1})=>{const{enabled:N,minValueRatio:R=.6,maxValueRatio:ee=.008}=V;return(0,b.useMemo)(()=>{if(!N)return x;const z=[];for(const P of x)for(const k of P.data)k.value!==null&&k.value!==0&&z.push(k.value);if(z.length===0)return x;const K=z.map(Math.abs),Y=Math.min(...K),te=Math.max(...K),Q=Math.min(Y*R,te*ee);return x.map(P=>({...P,data:P.data.map(k=>k.value===0?{...k,visualValue:Q}:k)}))},[x,N,R,ee])};var o=e("../charts/src/hooks/use-chart-margin.tsx"),i=e("../charts/src/hooks/use-element-height.ts"),t=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),d=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),g=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/utils/create-composition.ts"),_=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),f=e("../charts/src/components/legend/legend.tsx"),I=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),A=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),w=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(T),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ie={};ie.insert="head",ie.singleton=!1;var ue=J()(C.A,ie);const W=C.A.locals||{};var Ce=e("../number-formatters/src/index.ts");const be=x=>new Date(x).toLocaleDateString(void 0,{month:"short",day:"numeric"}),F=x=>typeof x.paddingInner=="number"?x.paddingInner:0;function le(x,V,N={}){const R=(0,b.useMemo)(()=>{const ee={type:"band",padding:.2,paddingInner:.1},z={type:"linear",nice:!0,zero:!1},K=x?.[0]?.data?.[0]?.label?P=>P:be,Y=Ce.qe,te=P=>P?.label||P?.date,Q=P=>{const k=P;return k?.visualValue!==void 0?k.visualValue:P?.value};return{vertical:{xTickFormat:K,yTickFormat:Y,tooltipLabelFormatter:K,xAccessor:te,yAccessor:Q,gridVisibility:"x",xScale:ee,yScale:z},horizontal:{xTickFormat:Y,yTickFormat:K,tooltipLabelFormatter:K,xAccessor:Q,yAccessor:te,gridVisibility:"y",xScale:z,yScale:ee}}},[x]);return(0,b.useMemo)(()=>{const ee=V?"horizontal":"vertical",{xTickFormat:z,yTickFormat:K,tooltipLabelFormatter:Y,xAccessor:te,yAccessor:Q,gridVisibility:P,xScale:k,yScale:ge}=R[ee],ce={...k,...N.xScale||{}},ye={...ge,...N.yScale||{}},ve=V?N.axis?.y?.tickFormat:N.axis?.x?.tickFormat;return{gridVisibility:P,xScale:ce,yScale:ye,accessors:{xAccessor:te,yAccessor:Q},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:z,...N.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:K,...N.axis?.y||{}}},barGroup:{padding:F(V?ye:ce)},tooltip:{labelFormatter:ve||Y}}},[R,N,V])}var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const q=L.__,X=x=>x?.length?x.some(N=>N.data.some(R=>isNaN(R.value)||R.value===null||R.value===void 0||!R.label&&(!("date"in R&&R.date)||isNaN(R.date.getTime()))))?"Invalid data":null:"No data available",de=(x,V)=>`bar-pattern-${x}-${V}`,ae=({data:x,chartId:V,width:N,height:R=400,className:ee,margin:z,withTooltips:K=!1,showLegend:Y=!1,legendOrientation:te="horizontal",legendPosition:Q="bottom",legendAlignment:P="center",legendMaxWidth:k,legendTextOverflow:ge="wrap",legendItemClassName:ce,legendShape:ye="rect",gridVisibility:ve,renderTooltip:ke,options:Ve={},orientation:Ae="vertical",withPatterns:he=!1,showZeroValues:je=!1,children:ze})=>{const Te=Ae==="horizontal",U=(0,t.R)(V),Ie=(0,G.O)(x),re=(0,j.E)(x),Re=B(re,{enabled:je}),De=(0,_.f)(re),$=le(Re,Te,Ve),we=(0,o.a)(R,$,re,Ie,Te),[Ye,Oe]=(0,i.v)(),Me=(0,b.useRef)(null),[pe,_e]=(0,b.useState)(void 0),[Be,fe]=(0,b.useState)(!1),Ue=Math.max(0,...x.map(O=>O.data?.length||0))*x.length,{tooltipRef:He,onChartFocus:Ge,onChartBlur:$e,onChartKeyDown:Se}=(0,w.JZ)({selectedIndex:pe,setSelectedIndex:_e,isNavigating:Be,setIsNavigating:fe,chartRef:Me,totalPoints:Ue}),{getElementStyles:xe}=(0,s.j)(),Xe=(0,b.useCallback)(O=>()=>he?`url(#${de(U,O)})`:xe({data:re[O],index:O}).color,[he,xe,re,U]),Qe=(0,b.useCallback)(({tooltipData:O})=>{const D=O?.nearestDatum?.datum;return D?(0,m.jsxs)("div",{className:W["bar-chart__tooltip"],children:[(0,m.jsx)("div",{className:W["bar-chart__tooltip-header"],children:O?.nearestDatum?.key}),(0,m.jsxs)("div",{className:W["bar-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:W["bar-chart__tooltip-label"],children:[$.tooltip.labelFormatter(D.label||(D.date?D.date.getTime():0),0,[]),":"]}),(0,m.jsx)("span",{className:W["bar-chart__tooltip-value"],children:D.value})]})]}):null},[$.tooltip]),Ze=(0,b.useCallback)((O,D)=>{const oe=O%4,se=de(U,O),me={id:se,stroke:"white",strokeWidth:1,background:D};switch(oe){case 0:default:return(0,m.jsx)(u.A,{...me,width:5,height:5,orientation:["diagonal"]},se);case 1:return(0,m.jsx)(c.A,{...me,width:6,height:6,fill:"white"},se);case 2:return(0,m.jsx)(p.A,{...me,width:4,height:4},se);case 3:return(0,m.jsx)(l.A,{...me,size:8,height:3},se)}},[U]),Ne=(0,b.useCallback)((O,D)=>`
			.visx-bar[fill="url(#${de(U,O)})"] {
				stroke: ${D};
				stroke-width: 1;
				}
			`,[U]),Z=(0,b.useCallback)(()=>{if(pe===void 0)return"";const O=Math.max(...x.map(Fe=>Fe.data.length)),D=Math.floor(pe/x.length),oe=pe%x.length;if(D>=O||oe>=x.length)return"";const se=x[oe];if(D>=se.data.length)return"";const me=oe*O+D;return`
			.bar-chart[data-chart-id="bar-chart-${U}"] .visx-bar-group .visx-bar:nth-child(${me+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[pe,x,U]),H=X(re),Je=!H,Pe=(0,b.useMemo)(()=>({orientation:Ae,withPatterns:he}),[Ae,he]);if((0,d.t)({chartId:U,legendItems:De,chartType:"bar",isDataValid:Je,metadata:Pe}),H)return(0,m.jsx)("div",{className:(0,E.A)("bar-chart",W["bar-chart"]),children:H});const Le=ve??$.gridVisibility,We=Z();return(0,m.jsx)(I.O.Provider,{value:{chartId:U,chartWidth:N,chartHeight:R-(Y?Oe:0)},children:(0,m.jsxs)("div",{className:(0,E.A)("bar-chart",W["bar-chart"],ee),"data-testid":"bar-chart",role:"grid","aria-label":q("Bar chart","jetpack-charts"),style:{width:N,height:R,display:"flex",flexDirection:Y&&Q==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Se,onFocus:Ge,onBlur:$e,ref:Me,"data-chart-id":`bar-chart-${U}`,children:[(0,m.jsxs)(n.A,{theme:Ie,width:N,height:R-(Y?Oe:0),margin:{...we,...z,...Y&&Q==="top"?{top:(we.top||0)+Oe}:{}},xScale:$.xScale,yScale:$.yScale,horizontal:Te,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(h.A,{columns:Le.includes("y"),rows:Le.includes("x"),numTicks:4}),he&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("defs",{"data-testid":"bar-chart-patterns",children:re.map((O,D)=>Ze(D,xe({data:O,index:D}).color))}),(0,m.jsx)("style",{children:re.map((O,D)=>Ne(D,xe({data:O,index:D}).color))})]}),We&&(0,m.jsx)("style",{children:We}),(0,m.jsx)(r.A,{padding:$.barGroup.padding,children:Re.map((O,D)=>(0,m.jsx)(a.A,{dataKey:O?.label,data:O.data,yAccessor:$.accessors.yAccessor,xAccessor:$.accessors.xAccessor,colorAccessor:Xe(D)},O?.label))}),(0,m.jsx)(v.A,{...$.axis.x}),(0,m.jsx)(v.A,{...$.axis.y}),K&&(0,m.jsx)(w.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:ke||Qe,selectedIndex:pe,tooltipRef:He,keyboardFocusedClassName:W["bar-chart__tooltip--keyboard-focused"],series:x,mode:"individual"})]}),Y&&(0,m.jsx)(f.s,{orientation:te,position:Q,alignment:P,maxWidth:k,textOverflow:ge,legendItemClassName:ce,className:W["bar-chart__legend"],shape:ye,ref:Ye,chartId:U}),ze]})})},ne=x=>(0,b.useContext)(g.m)?(0,m.jsx)(ae,{...x}):(0,m.jsx)(g.S,{children:(0,m.jsx)(ae,{...x})});ne.displayName="BarChart";const Ee=(0,S.E)(ne,{Legend:f.s}),Ke=(0,S.E)((0,A.F)(ne),{Legend:f.s})}),"../charts/src/components/legend/stories/index.stories.tsx":((M,y,e)=>{e.r(y),e.d(y,{AlignmentOptions:()=>f,CustomShape:()=>A,DashboardExample:()=>_,Horizontal:()=>j,StandaloneLegendWithChartId:()=>g,TextOverflow:()=>I,Vertical:()=>B,WithBarChart:()=>s,WithLineChart:()=>i,__namedExportsOrder:()=>w,default:()=>L});var u=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../charts/src/components/bar-chart/bar-chart.tsx"),l=e("../charts/src/components/line-chart/line-chart.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),h=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),r=e("../charts/src/components/legend/legend.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts/Composites/Legend",component:r.s,parameters:{layout:"centered",docs:{description:{component:`
The Legend component provides a flexible way to display chart legends either as standalone components or integrated with charts through the chart context.

## Key Features

- **Standalone Usage**: Display legends independently from charts
- **Context Integration**: Automatically retrieve legend data from charts using \`chartId\`
- **Flexible Positioning**: Place legends anywhere in your layout
- **Works with Hidden Legends**: Charts with \`showLegend={false}\` still provide data to standalone legends
- **Full Customization**: Inherits all props from BaseLegend for complete control

## Usage Examples

### Basic Usage with Manual Data
\`\`\`jsx
<Legend
  items={[
    { label: 'Series 1', value: '25%', color: '#3858E9' },
    { label: 'Series 2', value: '35%', color: '#80C8FF' }
  ]}
  orientation="horizontal"
/>
\`\`\`

### Automatic Data from Chart Context
\`\`\`jsx
// Chart registers its legend data with chartId
<LineChart
  chartId="sales-chart"
  data={salesData}
  showLegend={false} // Legend hidden on chart
/>

// Standalone legend retrieves data automatically
<Legend
  chartId="sales-chart"
  orientation="vertical"
  alignment="end"
/>
\`\`\`

### Dashboard Layout Example
\`\`\`jsx
<div className="dashboard">
  <div className="charts-grid">
    <LineChart chartId="revenue" showLegend={false} />
    <BarChart chartId="units" showLegend={false} />
    <PieChart chartId="regions" showLegend={false} />
  </div>
  <aside className="legend-panel">
    <Legend chartId="revenue" />
    <Legend chartId="units" />
    <Legend chartId="regions" />
  </aside>
</div>
\`\`\`
`}}},decorators:[u.cg],argTypes:{...c.jW}},E=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],b=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],G=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],j={render:T=>{const{themeName:J,...C}=T;return(0,a.jsx)(r.s,{...C})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},B={render:T=>{const{themeName:J,...C}=T;return(0,a.jsx)(r.s,{...C})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},o=()=>{const T=(0,h.f)(E,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(l.A,{data:E,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(r.s,{items:T,orientation:"horizontal",shape:"line"})]})},i={render:()=>(0,a.jsx)(o,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const T=(0,h.f)(b);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(p.A,{data:b,showLegend:!1,width:400,height:300}),(0,a.jsx)(r.s,{items:T,orientation:"vertical"})]})},s={render:()=>(0,a.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},d=()=>(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(l.A,{chartId:"standalone-legend-chart",data:E,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(r.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),g={render:()=>(0,a.jsx)(d,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  {/* Chart with legend hidden but still registering data */}
  <LineChart
    chartId="standalone-legend-chart"
    data={lineChartData}
    showLegend={false}
    width={400}
    height={200}
  />
  {/* Standalone legend that automatically gets data from chart context */}
  <Legend chartId="standalone-legend-chart" orientation="horizontal" />
</div>`},description:{story:`
## Standalone Legend with Chart Context Integration

This example demonstrates the power of the Legend component's context integration feature.

### How It Works

1. **Chart Registration**: When a chart is rendered with a \`chartId\`, it automatically registers its legend data in the chart context
2. **Data Retrieval**: The Legend component can then retrieve this data using the same \`chartId\`
3. **Decoupled Display**: The legend can be placed anywhere in your layout, completely independent from the chart

### Key Benefits

- **Flexible Layouts**: Create complex dashboard layouts with centralized legend areas
- **Consistent Legends**: Multiple charts can share legend styles and positioning
- **Dynamic Updates**: Legend automatically updates when chart data changes
- **No Prop Drilling**: No need to pass legend data through multiple component levels

### Code Example

\`\`\`jsx
// Chart with hidden legend
<LineChart
  chartId="standalone-legend-chart"
  data={lineChartData}
  showLegend={false}
  width={400}
  height={200}
/>

// Standalone legend that retrieves data automatically
<Legend
  chartId="standalone-legend-chart"
  orientation="horizontal"
/>
\`\`\`

### Important Notes

- The chart and legend must be wrapped in the same GlobalChartsProvider context
- The \`chartId\` must match exactly between chart and legend
- Charts with \`showLegend={false}\` still register their legend data
- If no chart with the given \`chartId\` exists, the legend will render nothing
`}}}},S=()=>(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(l.A,{chartId:"dashboard-revenue",data:E,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(p.A,{chartId:"dashboard-sales",data:b,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(n.A,{chartId:"dashboard-devices",data:G,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(r.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(r.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(r.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),_={render:()=>(0,a.jsx)(S,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
## Real-World Dashboard Example

This example demonstrates a complete dashboard implementation using Legend with chart context integration.

### Key Implementation Details

1. **Chart Setup**: Each chart has a unique \`chartId\` and \`showLegend={false}\`
2. **Centralized Legends**: All legends are placed in a dedicated sidebar
3. **Automatic Data Sync**: Legends automatically retrieve data from their respective charts
4. **Clean Layout**: Charts remain uncluttered while legends are easily accessible

### Benefits of This Approach

- **Consistent Legend Styling**: All legends share the same visual style
- **Space Efficiency**: Charts can use full width without legend taking up space
- **Better Mobile Experience**: Legends can be collapsed or repositioned on smaller screens
- **Easier Maintenance**: Legend updates only need to happen in one place

### Implementation Code

\`\`\`jsx
// Charts with hidden legends
<LineChart chartId="dashboard-revenue" data={revenueData} showLegend={false} />
<BarChart chartId="dashboard-sales" data={salesData} showLegend={false} />
<PieChart chartId="dashboard-devices" data={deviceData} showLegend={false} />

// Centralized legend panel
<aside>
  <Legend chartId="dashboard-revenue" orientation="vertical" />
  <Legend chartId="dashboard-sales" orientation="vertical" />
  <Legend chartId="dashboard-devices" orientation="vertical" />
</aside>
\`\`\`
`}}}},f={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},I={render:T=>{const{themeName:J,maxWidth:C,...ie}=T,ue=T.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},W=C?`Legend with ${T.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${C})`:"Legend without maxWidth constraint";return(0,a.jsxs)("div",{style:ue,children:[(0,a.jsx)("h4",{style:{marginBottom:"10px"},children:W}),(0,a.jsx)(r.s,{...ie,maxWidth:C})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Legend orientation"},maxWidth:{control:{type:"range",min:0,max:300,step:10},description:"Maximum width for legend items (pixels). Set to 0 to disable.",table:{type:{summary:"number | string | undefined"},defaultValue:{summary:"undefined"}}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"],description:"Text overflow behavior when maxWidth is set"},position:{control:{type:"radio"},options:["top","bottom"],description:"Vertical position of the legend"},alignment:{control:{type:"radio"},options:["start","center","end"],description:"Horizontal alignment of the legend"}},parameters:{docs:{description:{story:`
## Text Overflow and Wrapping

This interactive story demonstrates all the text overflow and wrapping features of the Legend component.

### Features

- **Text Overflow Modes**:
  - **Wrap** (default): Text wraps naturally to multiple lines when it exceeds maxWidth
  - **Ellipsis**: Truncates text with ellipsis (...) and shows tooltip on hover

- **Orientation**: Switch between horizontal and vertical layouts
- **Max Width**: Adjust the maximum width constraint with the slider (50-300px)
- **Position & Alignment**: Control legend placement

### Use Cases

- **Widgets/Dashboards**: Use ellipsis mode with small maxWidth values
- **Full Displays**: Use wrap mode with larger maxWidth values
- **Mobile**: Use vertical orientation with appropriate maxWidth

### Accessibility
When using ellipsis mode, truncated text automatically includes a \`title\` attribute for screen readers and displays a native tooltip on hover showing the complete text.

Try different combinations using the controls above to see how the legend adapts to various constraints!
`}}}},A={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},w=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }],
    orientation: 'horizontal'
  }
}`,...j.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Tablet',
      value: '12%',
      color: '#44B556'
    }],
    orientation: 'vertical'
  }
}`,...B.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with BarChart data, positioned vertically beside the chart.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />,
  parameters: {
    docs: {
      source: {
        code: \`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  {/* Chart with legend hidden but still registering data */}
  <LineChart
    chartId="standalone-legend-chart"
    data={lineChartData}
    showLegend={false}
    width={400}
    height={200}
  />
  {/* Standalone legend that automatically gets data from chart context */}
  <Legend chartId="standalone-legend-chart" orientation="horizontal" />
</div>\`
      },
      description: {
        story: \`
## Standalone Legend with Chart Context Integration

This example demonstrates the power of the Legend component's context integration feature.

### How It Works

1. **Chart Registration**: When a chart is rendered with a \\\`chartId\\\`, it automatically registers its legend data in the chart context
2. **Data Retrieval**: The Legend component can then retrieve this data using the same \\\`chartId\\\`
3. **Decoupled Display**: The legend can be placed anywhere in your layout, completely independent from the chart

### Key Benefits

- **Flexible Layouts**: Create complex dashboard layouts with centralized legend areas
- **Consistent Legends**: Multiple charts can share legend styles and positioning
- **Dynamic Updates**: Legend automatically updates when chart data changes
- **No Prop Drilling**: No need to pass legend data through multiple component levels

### Code Example

\\\`\\\`\\\`jsx
// Chart with hidden legend
<LineChart
  chartId="standalone-legend-chart"
  data={lineChartData}
  showLegend={false}
  width={400}
  height={200}
/>

// Standalone legend that retrieves data automatically
<Legend
  chartId="standalone-legend-chart"
  orientation="horizontal"
/>
\\\`\\\`\\\`

### Important Notes

- The chart and legend must be wrapped in the same GlobalChartsProvider context
- The \\\`chartId\\\` must match exactly between chart and legend
- Charts with \\\`showLegend={false}\\\` still register their legend data
- If no chart with the given \\\`chartId\\\` exists, the legend will render nothing
\`
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
## Real-World Dashboard Example

This example demonstrates a complete dashboard implementation using Legend with chart context integration.

### Key Implementation Details

1. **Chart Setup**: Each chart has a unique \\\`chartId\\\` and \\\`showLegend={false}\\\`
2. **Centralized Legends**: All legends are placed in a dedicated sidebar
3. **Automatic Data Sync**: Legends automatically retrieve data from their respective charts
4. **Clean Layout**: Charts remain uncluttered while legends are easily accessible

### Benefits of This Approach

- **Consistent Legend Styling**: All legends share the same visual style
- **Space Efficiency**: Charts can use full width without legend taking up space
- **Better Mobile Experience**: Legends can be collapsed or repositioned on smaller screens
- **Easier Maintenance**: Legend updates only need to happen in one place

### Implementation Code

\\\`\\\`\\\`jsx
// Charts with hidden legends
<LineChart chartId="dashboard-revenue" data={revenueData} showLegend={false} />
<BarChart chartId="dashboard-sales" data={salesData} showLegend={false} />
<PieChart chartId="dashboard-devices" data={deviceData} showLegend={false} />

// Centralized legend panel
<aside>
  <Legend chartId="dashboard-revenue" orientation="vertical" />
  <Legend chartId="dashboard-sales" orientation="vertical" />
  <Legend chartId="dashboard-devices" orientation="vertical" />
</aside>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,..._.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Series 1',
      value: '25%',
      color: '#3858E9'
    }, {
      label: 'Series 2',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Series 3',
      value: '40%',
      color: '#44B556'
    }],
    orientation: 'horizontal',
    alignment: 'start'
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend with custom alignment options.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      maxWidth,
      ...restProps
    } = args;
    const containerStyle = args.orientation === 'horizontal' ? {
      width: '600px',
      border: '1px solid #ddd',
      padding: '20px'
    } : {
      width: '350px',
      border: '1px solid #ddd',
      padding: '20px'
    };
    const titleText = maxWidth ? \`Legend with \${args.textOverflow === 'ellipsis' ? 'Ellipsis' : 'Text Wrapping'} (maxWidth: \${maxWidth})\` : 'Legend without maxWidth constraint';
    return <div style={containerStyle}>
                <h4 style={{
        marginBottom: '10px'
      }}>{titleText}</h4>
                <Legend {...restProps} maxWidth={maxWidth} />
            </div>;
  },
  args: {
    items: [{
      label: 'Very Long Legend Item Label That Demonstrates Text Overflow Behavior',
      value: '25%',
      color: '#3858E9'
    }, {
      label: 'Another Extremely Long Label for Testing Different Display Options',
      value: '35%',
      color: '#80C8FF'
    }, {
      label: 'Short Label',
      value: '15%',
      color: '#44B556'
    }, {
      label: 'Medium Length Label Text',
      value: '25%',
      color: '#FFC107'
    }],
    orientation: 'horizontal',
    maxWidth: 150,
    textOverflow: 'wrap',
    position: 'bottom',
    alignment: 'center'
  },
  argTypes: {
    orientation: {
      control: {
        type: 'radio'
      },
      options: ['horizontal', 'vertical'],
      description: 'Legend orientation'
    },
    maxWidth: {
      control: {
        type: 'range',
        min: 0,
        max: 300,
        step: 10
      },
      description: 'Maximum width for legend items (pixels). Set to 0 to disable.',
      table: {
        type: {
          summary: 'number | string | undefined'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    textOverflow: {
      control: {
        type: 'radio'
      },
      options: ['wrap', 'ellipsis'],
      description: 'Text overflow behavior when maxWidth is set'
    },
    position: {
      control: {
        type: 'radio'
      },
      options: ['top', 'bottom'],
      description: 'Vertical position of the legend'
    },
    alignment: {
      control: {
        type: 'radio'
      },
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of the legend'
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
## Text Overflow and Wrapping

This interactive story demonstrates all the text overflow and wrapping features of the Legend component.

### Features

- **Text Overflow Modes**:
  - **Wrap** (default): Text wraps naturally to multiple lines when it exceeds maxWidth
  - **Ellipsis**: Truncates text with ellipsis (...) and shows tooltip on hover

- **Orientation**: Switch between horizontal and vertical layouts
- **Max Width**: Adjust the maximum width constraint with the slider (50-300px)
- **Position & Alignment**: Control legend placement

### Use Cases

- **Widgets/Dashboards**: Use ellipsis mode with small maxWidth values
- **Full Displays**: Use wrap mode with larger maxWidth values
- **Mobile**: Use vertical orientation with appropriate maxWidth

### Accessibility
When using ellipsis mode, truncated text automatically includes a \\\`title\\\` attribute for screen readers and displays a native tooltip on hover showing the complete text.

Try different combinations using the controls above to see how the legend adapts to various constraints!
\`
      }
    }
  }
}`,...I.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Desktop',
      value: '65%',
      color: '#3858E9'
    }, {
      label: 'Mobile',
      value: '35%',
      color: '#80C8FF'
    }],
    orientation: 'horizontal',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend with circle shape instead of default rectangle.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}}}),"../charts/src/components/pie-chart/pie-chart.tsx":((M,y,e)=>{e.d(y,{W:()=>Ce,A:()=>be});var u=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/hooks/use-element-height.ts"),v=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),L=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),E=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),b=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),G=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),j=e("../charts/src/utils/create-composition.ts"),B=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),o=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),i=e("../charts/src/components/legend/legend.tsx"),t=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),s=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),d=e("../charts/src/components/private/chart-composition/chart-html.tsx"),g=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),S=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),_=e("../charts/src/components/tooltip/base-tooltip.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(f),A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),w={};w.insert="head",w.singleton=!1;var T=I()(A.A,w);const J=A.A.locals||{};var C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ie=F=>{if(!F.length)return{isValid:!1,message:"No data available"};if(F.some(q=>q.percentage<0||q.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const m=F.reduce((q,X)=>q+X.percentage,0);return Math.abs(m-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},ue=({data:F,chartId:le,withTooltips:m=!1,className:q,showLegend:X=!1,legendOrientation:de="horizontal",legendPosition:ae="bottom",legendAlignment:ne="center",legendMaxWidth:Ee,legendTextOverflow:Ke="wrap",legendItemClassName:x,legendShape:V="circle",size:N,thickness:R=1,padding:ee=20,gapScale:z=0,cornerScale:K=0,showLabels:Y=!0,legendValueDisplay:te="percentage",children:Q=null,tooltipOffsetX:P=0,tooltipOffsetY:k=-15})=>{const ge=(0,v.p)(),ce=(0,L.R)(le),[ye,ve]=(0,a.v)(),{tooltipOpen:ke,tooltipLeft:Ve,tooltipTop:Ae,tooltipData:he,hideTooltip:je,showTooltip:ze}=(0,l.A)(),{containerRef:Te,TooltipInPortal:U}=(0,n.A)({detectBounds:!0,scroll:!0,debounce:0}),Ie=(0,r.useCallback)(()=>{m&&je()},[m,je]),re=(0,r.useMemo)(()=>({showValues:!0,legendValueDisplay:te}),[te]),Re=(0,o.f)(F,re),{isValid:De,message:$}=ie(F),{svgChildren:we,htmlChildren:Ye,otherChildren:Oe}=(0,t.n)(Q,"PieChart"),Me=(0,r.useMemo)(()=>({thickness:R,gapScale:z,cornerScale:K}),[R,z,K]);(0,E.t)({chartId:ce,legendItems:Re,chartType:"pie",isDataValid:De,metadata:Me});const{getElementStyles:pe}=(0,b.j)();if(!De)return(0,C.jsx)("div",{className:(0,h.A)("pie-chart",J["pie-chart"],q),children:(0,C.jsx)("div",{className:J["error-message"],children:$})});const _e=N,Be=N,fe=X&&ae==="top"?Be-ve:Be,Ue=Math.min(_e,fe)/2,He=_e/2,Ge=fe/2,$e=z*(2*Math.PI/F.length),Se=Ue-ee,xe=R===0?0:Se*(1-R),Xe=(Se-xe)/2,Qe=K?Math.min(K*Se,Xe):0,Ze=F.map((Z,H)=>({...Z,index:H})),Ne={value:Z=>Z.value,fill:Z=>pe({data:Z,index:Z.index}).color};return(0,C.jsx)(g.O.Provider,{value:{chartId:ce,chartWidth:_e,chartHeight:fe},children:(0,C.jsxs)("div",{ref:Te,className:(0,h.A)("pie-chart",J["pie-chart"],q),style:{display:"flex",flexDirection:X&&ae==="top"?"column-reverse":"column"},children:[(0,C.jsx)("svg",{viewBox:`0 0 ${_e} ${fe}`,preserveAspectRatio:"xMidYMid meet",width:_e,height:fe,children:(0,C.jsxs)(c.A,{top:Ge,left:He,children:[(0,C.jsx)(p.A,{data:Ze,pieValue:Ne.value,outerRadius:Se,innerRadius:xe,padAngle:$e,cornerRadius:Qe,children:Z=>Z.arcs.map((H,Je)=>{const[Pe,Le]=Z.path.centroid(H),We=H.endAngle-H.startAngle>=.25,O=st=>{if(!m)return;const et=(0,u.A)(st);if(et){const at=X&&ae==="top"?ve:0;ze({tooltipData:H.data,tooltipLeft:et.x+P,tooltipTop:et.y+at+k})}},D={d:Z.path(H)||"",fill:Ne.fill(H.data),"data-testid":"pie-segment"},oe={};m&&(oe.onMouseMove=O,oe.onMouseLeave=Ie);const se=12,me=(0,B.A)(H.data.label,{fontSize:se}),qe=6,Fe=me+qe*2,tt=se+qe*2;return(0,C.jsxs)("g",{...oe,children:[(0,C.jsx)("path",{...D}),Y&&We&&(0,C.jsxs)("g",{children:[ge.labelBackgroundColor&&(0,C.jsx)("rect",{x:Pe-Fe/2,y:Le-tt/2,width:Fe,height:tt,fill:ge.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,C.jsx)("text",{x:Pe,y:Le,dy:".33em",fill:ge.labelTextColor||"#333",fontSize:se,textAnchor:"middle",pointerEvents:"none",children:H.data.label})]})]},`arc-${Je}`)})}),we]})}),X&&(0,C.jsx)(i.s,{orientation:de,position:ae,alignment:ne,maxWidth:Ee,textOverflow:Ke,legendItemClassName:x,className:J["pie-chart-legend"],shape:V,ref:ye,chartId:ce}),m&&ke&&he&&(0,C.jsx)(U,{top:Ae||0,left:Ve||0,children:(0,C.jsx)("div",{role:"tooltip",children:(0,C.jsx)(_.R,{data:he,top:0,left:0,renderContainer:!1})})}),Ye,Oe]})})},W=F=>(0,r.useContext)(G.m)?(0,C.jsx)(ue,{...F}):(0,C.jsx)(G.S,{children:(0,C.jsx)(ue,{...F})});W.displayName="PieChart";const Ce=(0,j.E)(W,{Legend:i.s,SVG:s.d,HTML:d.a}),be=(0,j.E)((0,S.F)(W),{Legend:i.s,SVG:s.d,HTML:d.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((M,y,e)=>{e.d(y,{a:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.HTML";try{c.displayName="Chart.HTML",c.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((M,y,e)=>{e.d(y,{d:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.SVG";try{c.displayName="Chart.SVG",c.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((M,y,e)=>{e.d(y,{n:()=>p});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p(l,n){return(0,c.useMemo)(()=>{const h=[],r=[],a=[];return c.Children.forEach(l,v=>{if((0,c.isValidElement)(v)){const E=v.type?.displayName;E===`${n}.SVG`||E==="Chart.SVG"?v.props?.children&&c.Children.forEach(v.props.children,b=>{h.push(b)}):E===`${n}.HTML`||E==="Chart.HTML"?v.props?.children&&c.Children.forEach(v.props.children,b=>{r.push(b)}):v.type===u.A?h.push(v):a.push(v)}}),{svgChildren:h,htmlChildren:r,otherChildren:a}},[l,n])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((M,y,e)=>{e.d(y,{R:()=>v});var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var n=c()(p.A,l);const h=p.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({data:L})=>(0,r.jsxs)(r.Fragment,{children:[L?.label,": ",L?.valueDisplay||L?.value]}),v=({data:L,top:E,left:b,component:G=a,children:j,className:B,style:o,renderContainer:i=!0})=>{const t=j||L&&(0,r.jsx)(G,{data:L,className:B});return i?(0,r.jsx)("div",{className:h.tooltip,style:{top:E,left:b,...o},role:"tooltip",children:t}):t};try{v.displayName="BaseTooltip",v.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:v.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((M,y,e)=>{e.d(y,{OI:()=>l,cg:()=>n,xo:()=>h});var u=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(r,a)=>{const v=a.args;return n(()=>(0,p.jsx)("div",{style:{resize:v.resize||"both",overflow:"auto",padding:"1rem",width:v.containerWidth||"800px",height:v.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,p.jsx)(r,{})}),a)},n=(r,{args:a})=>{const v=a.themeName,L=c.yI[v||"default"];return(0,p.jsx)(u.S,{theme:L,children:(0,p.jsx)(r,{})})},h={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{l.displayName="chartDecorator",l.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:l.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{n.displayName="simpleChartDecorator",n.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:n.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{h.displayName="sharedChartArgTypes",h.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:h.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((M,y,e)=>{e.d(y,{jW:()=>l,yI:()=>p});var u=e("../charts/src/providers/chart-context/themes.ts");const c={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},p={default:u.zQ,jetpack:u.QI,woo:u.pk,custom:c},l={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{c.displayName="customTheme",c.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:c.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{l.displayName="themeArgTypes",l.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:l.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}})}]);
