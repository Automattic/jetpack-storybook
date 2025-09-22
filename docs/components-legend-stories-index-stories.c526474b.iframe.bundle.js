"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((B,y,e)=>{e.d(y,{A:()=>i});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function r(t,s){t(s)}function a(t){var s=t===void 0?{}:t,d=s.innerRadius,g=s.outerRadius,S=s.cornerRadius,_=s.startAngle,f=s.endAngle,I=s.padAngle,A=s.padRadius,D=(0,n.A)();return d!=null&&r(D.innerRadius,d),g!=null&&r(D.outerRadius,g),S!=null&&r(D.cornerRadius,S),_!=null&&r(D.startAngle,_),f!=null&&r(D.endAngle,f),I!=null&&r(D.padAngle,I),A!=null&&r(D.padRadius,A),D}function v(t){var s=t===void 0?{}:t,d=s.x,g=s.x0,S=s.x1,_=s.y,f=s.y0,I=s.y1,A=s.defined,D=s.curve,T=d3Area();return d&&setNumberOrNumberAccessor(T.x,d),g&&setNumberOrNumberAccessor(T.x0,g),S&&setNumberOrNumberAccessor(T.x1,S),_&&setNumberOrNumberAccessor(T.y,_),f&&setNumberOrNumberAccessor(T.y0,f),I&&setNumberOrNumberAccessor(T.y1,I),A&&T.defined(A),D&&T.curve(D),T}function L(t){var s=t===void 0?{}:t,d=s.x,g=s.y,S=s.defined,_=s.curve,f=d3Line();return d&&setNumberOrNumberAccessor(f.x,d),g&&setNumberOrNumberAccessor(f.y,g),S&&f.defined(S),_&&f.curve(_),f}function E(t){var s=t===void 0?{}:t,d=s.startAngle,g=s.endAngle,S=s.padAngle,_=s.value,f=s.sort,I=s.sortValues,A=(0,h.A)();return(f===null||f!=null)&&A.sort(f),(I===null||I!=null)&&A.sortValues(I),_!=null&&A.value(_),S!=null&&r(A.padAngle,S),d!=null&&r(A.startAngle,d),g!=null&&r(A.endAngle,g),A}function b(t){var s=t===void 0?{}:t,d=s.angle,g=s.radius,S=s.defined,_=s.curve,f=d3RadialLine();return d&&setNumberOrNumberAccessor(f.angle,d),g&&setNumberOrNumberAccessor(f.radius,g),S&&f.defined(S),_&&f.curve(_),f}function H(t){var s=t.keys,d=t.value,g=t.order,S=t.offset,_=d3Stack();return s&&_.keys(s),d&&setNumberOrNumberAccessor(_.value,d),g&&_.order(stackOrder(g)),S&&_.offset(stackOffset(S)),_}var j=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function N(){return N=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(t[g]=d[g])}return t},N.apply(this,arguments)}function o(t,s){if(t==null)return{};var d={},g=Object.keys(t),S,_;for(_=0;_<g.length;_++)S=g[_],!(s.indexOf(S)>=0)&&(d[S]=t[S]);return d}function i(t){var s=t.className,d=t.top,g=t.left,S=t.data,_=S===void 0?[]:S,f=t.centroid,I=t.innerRadius,A=I===void 0?0:I,D=t.outerRadius,T=t.cornerRadius,q=t.startAngle,C=t.endAngle,ie=t.padAngle,me=t.padRadius,F=t.pieSort,Se=t.pieSortValues,Ce=t.pieValue,K=t.children,le=t.fill,m=le===void 0?"":le,ee=o(t,j),Q=a({innerRadius:A,outerRadius:D,cornerRadius:T,padRadius:me}),de=E({startAngle:q,endAngle:C,padAngle:ie,value:Ce,sort:F,sortValues:Se}),se=de(_);return K?u.createElement(u.Fragment,null,K({arcs:se,path:Q,pie:de})):u.createElement(l.A,{className:"visx-pie-arcs-group",top:d,left:g},se.map(function(ae,Ee){return u.createElement("g",{key:"pie-arc-"+Ee},u.createElement("path",N({className:p()("visx-pie-arc",s),d:Q(ae)||"",fill:m==null||typeof m=="string"?m:m(ae)},ee)),f?.(Q.centroid(ae),ae))}))}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((B,y,e)=>{e.d(y,{A:()=>p});var u=e("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const c=Object.create(null);function p(l,n={}){const{since:h,version:r,alternative:a,plugin:v,link:L,hint:E}=n,b=v?` from ${v}`:"",H=h?` since version ${h}`:"",j=r?` and will be removed${b} in version ${r}`:"",N=a?` Please use ${a} instead.`:"",o=L?` See: ${L}`:"",i=E?` Note: ${E}`:"",t=`${l} is deprecated${H}${j}.${N}${o}${i}`;t in c||((0,u.Eo)("deprecated",l,n,t),console.warn(t),c[t]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((B,y,e)=>{e.d(y,{A:()=>p});function u(l){var n,h,r="";if(typeof l=="string"||typeof l=="number")r+=l;else if(typeof l=="object")if(Array.isArray(l)){var a=l.length;for(n=0;n<a;n++)l[n]&&(h=u(l[n]))&&(r&&(r+=" "),r+=h)}else for(h in l)l[h]&&(r&&(r+=" "),r+=h);return r}function c(){for(var l,n,h=0,r="",a=arguments.length;h<a;h++)(l=arguments[h])&&(n=u(l))&&(r&&(r+=" "),r+=n);return r}const p=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((B,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),n=l()(c());n.push([B.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),n.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const h=n}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((B,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),n=l()(c());n.push([B.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const h=n}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((B,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),n=l()(c());n.push([B.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const h=n}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(B=>{var y=function(i){return e(i)&&!u(i)};function e(o){return!!o&&typeof o=="object"}function u(o){var i=Object.prototype.toString.call(o);return i==="[object RegExp]"||i==="[object Date]"||l(o)}var c=typeof Symbol=="function"&&Symbol.for,p=c?Symbol.for("react.element"):60103;function l(o){return o.$$typeof===p}function n(o){return Array.isArray(o)?[]:{}}function h(o,i){return i.clone!==!1&&i.isMergeableObject(o)?j(n(o),o,i):o}function r(o,i,t){return o.concat(i).map(function(s){return h(s,t)})}function a(o,i){if(!i.customMerge)return j;var t=i.customMerge(o);return typeof t=="function"?t:j}function v(o){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(o).filter(function(i){return Object.propertyIsEnumerable.call(o,i)}):[]}function L(o){return Object.keys(o).concat(v(o))}function E(o,i){try{return i in o}catch{return!1}}function b(o,i){return E(o,i)&&!(Object.hasOwnProperty.call(o,i)&&Object.propertyIsEnumerable.call(o,i))}function H(o,i,t){var s={};return t.isMergeableObject(o)&&L(o).forEach(function(d){s[d]=h(o[d],t)}),L(i).forEach(function(d){b(o,d)||(E(o,d)&&t.isMergeableObject(i[d])?s[d]=a(d,t)(o[d],i[d],t):s[d]=h(i[d],t))}),s}function j(o,i,t){t=t||{},t.arrayMerge=t.arrayMerge||r,t.isMergeableObject=t.isMergeableObject||y,t.cloneUnlessOtherwiseSpecified=h;var s=Array.isArray(i),d=Array.isArray(o),g=s===d;return g?s?t.arrayMerge(o,i,t):H(o,i,t):h(i,t)}j.all=function(i,t){if(!Array.isArray(i))throw new Error("first argument should be an array");return i.reduce(function(s,d){return j(s,d,t)},{})};var N=j;B.exports=N}),"../charts/src/components/bar-chart/bar-chart.tsx":((B,y,e)=>{e.d(y,{A:()=>Ke});var u=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),c=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),p=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),l=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),r=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),L=e("../../../node_modules/.pnpm/@wordpress+i18n@6.4.0/node_modules/@wordpress/i18n/build-module/index.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),H=e("../charts/src/hooks/use-xychart-theme.ts"),j=e("../charts/src/hooks/use-chart-data-transform.ts");const N=(x,k={enabled:!1})=>{const{enabled:w,minValueRatio:M=.6,maxValueRatio:G=.008}=k;return(0,b.useMemo)(()=>{if(!w)return x;const V=[];for(const P of x)for(const W of P.data)W.value!==null&&W.value!==0&&V.push(W.value);if(V.length===0)return x;const $=V.map(Math.abs),z=Math.min(...$),ne=Math.max(...$),Z=Math.min(z*M,ne*G);return x.map(P=>({...P,data:P.data.map(W=>W.value===0?{...W,visualValue:Z}:W)}))},[x,w,M,G])};var o=e("../charts/src/hooks/use-chart-margin.tsx"),i=e("../charts/src/hooks/use-element-height.ts"),t=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),d=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),g=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/utils/create-composition.ts"),_=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),f=e("../charts/src/components/legend/legend.tsx"),I=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),A=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),D=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),q=e.n(T),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ie={};ie.insert="head",ie.singleton=!1;var me=q()(C.A,ie);const F=C.A.locals||{};var Se=e("../number-formatters/src/index.ts");const Ce=x=>new Date(x).toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=x=>typeof x.paddingInner=="number"?x.paddingInner:0;function le(x,k,w={}){const M=(0,b.useMemo)(()=>{const G={type:"band",padding:.2,paddingInner:.1},V={type:"linear",nice:!0,zero:!1},$=x?.[0]?.data?.[0]?.label?P=>P:Ce,z=Se.qe,ne=P=>P?.label||P?.date,Z=P=>{const W=P;return W?.visualValue!==void 0?W.visualValue:P?.value};return{vertical:{xTickFormat:$,yTickFormat:z,tooltipLabelFormatter:$,xAccessor:ne,yAccessor:Z,gridVisibility:"x",xScale:G,yScale:V},horizontal:{xTickFormat:z,yTickFormat:$,tooltipLabelFormatter:$,xAccessor:Z,yAccessor:ne,gridVisibility:"y",xScale:V,yScale:G}}},[x]);return(0,b.useMemo)(()=>{const G=k?"horizontal":"vertical",{xTickFormat:V,yTickFormat:$,tooltipLabelFormatter:z,xAccessor:ne,yAccessor:Z,gridVisibility:P,xScale:W,yScale:ue}=M[G],ye={...W,...w.xScale||{}},ge={...ue,...w.yScale||{}},be=k?w.axis?.y?.tickFormat:w.axis?.x?.tickFormat;return{gridVisibility:P,xScale:ye,yScale:ge,accessors:{xAccessor:ne,yAccessor:Z},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:V,...w.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:$,...w.axis?.y||{}}},barGroup:{padding:K(k?ge:ye)},tooltip:{labelFormatter:be||z}}},[M,w,k])}var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ee=L.__,Q=x=>x?.length?x.some(w=>w.data.some(M=>isNaN(M.value)||M.value===null||M.value===void 0||!M.label&&(!("date"in M&&M.date)||isNaN(M.date.getTime()))))?"Invalid data":null:"No data available",de=(x,k)=>`bar-pattern-${x}-${k}`,se=({data:x,chartId:k,width:w,height:M=400,className:G,margin:V,withTooltips:$=!1,showLegend:z=!1,legendOrientation:ne="horizontal",legendPosition:Z="bottom",legendAlignment:P="center",legendMaxWidth:W,legendTextOverflow:ue="wrap",legendShape:ye="rect",gridVisibility:ge,renderTooltip:be,options:ke={},orientation:Ae="vertical",withPatterns:ce=!1,showZeroValues:je=!1,children:Ve})=>{const Te=Ae==="horizontal",Y=(0,t.R)(k),Ie=(0,H.O)(x),re=(0,j.E)(x),Re=N(re,{enabled:je}),De=(0,_.f)(re),X=le(Re,Te,ke),we=(0,o.a)(M,X,re,Ie,Te),[ze,Oe]=(0,i.v)(),Me=(0,b.useRef)(null),[he,_e]=(0,b.useState)(void 0),[Be,fe]=(0,b.useState)(!1),Ye=Math.max(0,...x.map(O=>O.data?.length||0))*x.length,{tooltipRef:Ue,onChartFocus:He,onChartBlur:Ge,onChartKeyDown:ve}=(0,D.JZ)({selectedIndex:he,setSelectedIndex:_e,isNavigating:Be,setIsNavigating:fe,chartRef:Me,totalPoints:Ye}),{getElementStyles:xe}=(0,s.j)(),$e=(0,b.useCallback)(O=>()=>ce?`url(#${de(Y,O)})`:xe({data:re[O],index:O}).color,[ce,xe,re,Y]),Xe=(0,b.useCallback)(({tooltipData:O})=>{const R=O?.nearestDatum?.datum;return R?(0,m.jsxs)("div",{className:F["bar-chart__tooltip"],children:[(0,m.jsx)("div",{className:F["bar-chart__tooltip-header"],children:O?.nearestDatum?.key}),(0,m.jsxs)("div",{className:F["bar-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:F["bar-chart__tooltip-label"],children:[X.tooltip.labelFormatter(R.label||(R.date?R.date.getTime():0),0,[]),":"]}),(0,m.jsx)("span",{className:F["bar-chart__tooltip-value"],children:R.value})]})]}):null},[X.tooltip]),Qe=(0,b.useCallback)((O,R)=>{const oe=O%4,te=de(Y,O),pe={id:te,stroke:"white",strokeWidth:1,background:R};switch(oe){case 0:default:return(0,m.jsx)(u.A,{...pe,width:5,height:5,orientation:["diagonal"]},te);case 1:return(0,m.jsx)(c.A,{...pe,width:6,height:6,fill:"white"},te);case 2:return(0,m.jsx)(p.A,{...pe,width:4,height:4},te);case 3:return(0,m.jsx)(l.A,{...pe,size:8,height:3},te)}},[Y]),Ne=(0,b.useCallback)((O,R)=>`
			.visx-bar[fill="url(#${de(Y,O)})"] {
				stroke: ${R};
				stroke-width: 1;
				}
			`,[Y]),J=(0,b.useCallback)(()=>{if(he===void 0)return"";const O=Math.max(...x.map(Fe=>Fe.data.length)),R=Math.floor(he/x.length),oe=he%x.length;if(R>=O||oe>=x.length)return"";const te=x[oe];if(R>=te.data.length)return"";const pe=oe*O+R;return`
			.bar-chart[data-chart-id="bar-chart-${Y}"] .visx-bar-group .visx-bar:nth-child(${pe+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[he,x,Y]),U=Q(re),Ze=!U,Pe=(0,b.useMemo)(()=>({orientation:Ae,withPatterns:ce}),[Ae,ce]);if((0,d.t)({chartId:Y,legendItems:De,chartType:"bar",isDataValid:Ze,metadata:Pe}),U)return(0,m.jsx)("div",{className:(0,E.A)("bar-chart",F["bar-chart"]),children:U});const Le=ge??X.gridVisibility,We=J();return(0,m.jsx)(I.O.Provider,{value:{chartId:Y,chartWidth:w,chartHeight:M-(z?Oe:0)},children:(0,m.jsxs)("div",{className:(0,E.A)("bar-chart",F["bar-chart"],G),"data-testid":"bar-chart",role:"grid","aria-label":ee("Bar chart","jetpack-charts"),style:{width:w,height:M,display:"flex",flexDirection:z&&Z==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:ve,onFocus:He,onBlur:Ge,ref:Me,"data-chart-id":`bar-chart-${Y}`,children:[(0,m.jsxs)(n.A,{theme:Ie,width:w,height:M-(z?Oe:0),margin:{...we,...V,...z&&Z==="top"?{top:(we.top||0)+Oe}:{}},xScale:X.xScale,yScale:X.yScale,horizontal:Te,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(h.A,{columns:Le.includes("y"),rows:Le.includes("x"),numTicks:4}),ce&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("defs",{"data-testid":"bar-chart-patterns",children:re.map((O,R)=>Qe(R,xe({data:O,index:R}).color))}),(0,m.jsx)("style",{children:re.map((O,R)=>Ne(R,xe({data:O,index:R}).color))})]}),We&&(0,m.jsx)("style",{children:We}),(0,m.jsx)(r.A,{padding:X.barGroup.padding,children:Re.map((O,R)=>(0,m.jsx)(a.A,{dataKey:O?.label,data:O.data,yAccessor:X.accessors.yAccessor,xAccessor:X.accessors.xAccessor,colorAccessor:$e(R)},O?.label))}),(0,m.jsx)(v.A,{...X.axis.x}),(0,m.jsx)(v.A,{...X.axis.y}),$&&(0,m.jsx)(D.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:be||Xe,selectedIndex:he,tooltipRef:Ue,keyboardFocusedClassName:F["bar-chart__tooltip--keyboard-focused"],series:x,mode:"individual"})]}),z&&(0,m.jsx)(f.s,{orientation:ne,position:Z,alignment:P,maxWidth:W,textOverflow:ue,className:F["bar-chart__legend"],shape:ye,ref:ze,chartId:Y}),Ve]})})},ae=x=>(0,b.useContext)(g.m)?(0,m.jsx)(se,{...x}):(0,m.jsx)(g.S,{children:(0,m.jsx)(se,{...x})});ae.displayName="BarChart";const Ee=(0,S.E)(ae,{Legend:f.s}),Ke=(0,S.E)((0,A.F)(ae),{Legend:f.s})}),"../charts/src/components/legend/stories/index.stories.tsx":((B,y,e)=>{e.r(y),e.d(y,{AlignmentOptions:()=>f,CustomShape:()=>A,DashboardExample:()=>_,Horizontal:()=>j,StandaloneLegendWithChartId:()=>g,TextOverflow:()=>I,Vertical:()=>N,WithBarChart:()=>s,WithLineChart:()=>i,__namedExportsOrder:()=>D,default:()=>L});var u=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../charts/src/components/bar-chart/bar-chart.tsx"),l=e("../charts/src/components/line-chart/line-chart.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),h=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),r=e("../charts/src/components/legend/legend.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts/Composites/Legend",component:r.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[u.cg],argTypes:{...c.jW}},E=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],b=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],H=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],j={render:T=>{const{themeName:q,...C}=T;return(0,a.jsx)(r.s,{...C})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},N={render:T=>{const{themeName:q,...C}=T;return(0,a.jsx)(r.s,{...C})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},o=()=>{const T=(0,h.f)(E,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(l.A,{data:E,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(r.s,{items:T,orientation:"horizontal",shape:"line"})]})},i={render:()=>(0,a.jsx)(o,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const T=(0,h.f)(b);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(p.A,{data:b,showLegend:!1,width:400,height:300}),(0,a.jsx)(r.s,{items:T,orientation:"vertical"})]})},s={render:()=>(0,a.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},d=()=>(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(l.A,{chartId:"standalone-legend-chart",data:E,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(r.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),g={render:()=>(0,a.jsx)(d,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
`}}}},S=()=>(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(l.A,{chartId:"dashboard-revenue",data:E,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(p.A,{chartId:"dashboard-sales",data:b,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(n.A,{chartId:"dashboard-devices",data:H,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(r.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(r.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(r.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),_={render:()=>(0,a.jsx)(S,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},f={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},I={render:T=>{const{themeName:q,maxWidth:C,...ie}=T,me=T.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},F=C?`Legend with ${T.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${C})`:"Legend without maxWidth constraint";return(0,a.jsxs)("div",{style:me,children:[(0,a.jsx)("h4",{style:{marginBottom:"10px"},children:F}),(0,a.jsx)(r.s,{...ie,maxWidth:C})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Legend orientation"},maxWidth:{control:{type:"range",min:0,max:300,step:10},description:"Maximum width for legend items (pixels). Set to 0 to disable.",table:{type:{summary:"number | string | undefined"},defaultValue:{summary:"undefined"}}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"],description:"Text overflow behavior when maxWidth is set"},position:{control:{type:"radio"},options:["top","bottom"],description:"Vertical position of the legend"},alignment:{control:{type:"radio"},options:["start","center","end"],description:"Horizontal alignment of the legend"}},parameters:{docs:{description:{story:`
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
`}}}},A={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},D=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}}),"../charts/src/components/pie-chart/pie-chart.tsx":((B,y,e)=>{e.d(y,{W:()=>Se,A:()=>Ce});var u=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/hooks/use-element-height.ts"),v=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),L=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),E=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),b=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),H=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),j=e("../charts/src/utils/create-composition.ts"),N=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),o=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),i=e("../charts/src/components/legend/legend.tsx"),t=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),s=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),d=e("../charts/src/components/private/chart-composition/chart-html.tsx"),g=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),S=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),_=e("../charts/src/components/tooltip/base-tooltip.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(f),A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),D={};D.insert="head",D.singleton=!1;var T=I()(A.A,D);const q=A.A.locals||{};var C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ie=K=>{if(!K.length)return{isValid:!1,message:"No data available"};if(K.some(ee=>ee.percentage<0||ee.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const m=K.reduce((ee,Q)=>ee+Q.percentage,0);return Math.abs(m-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},me=({data:K,chartId:le,withTooltips:m=!1,className:ee,showLegend:Q=!1,legendOrientation:de="horizontal",legendPosition:se="bottom",legendAlignment:ae="center",legendMaxWidth:Ee,legendTextOverflow:Ke="wrap",legendShape:x="circle",size:k,thickness:w=1,padding:M=20,gapScale:G=0,cornerScale:V=0,showLabels:$=!0,legendValueDisplay:z="percentage",children:ne=null,tooltipOffsetX:Z=0,tooltipOffsetY:P=-15})=>{const W=(0,v.p)(),ue=(0,L.R)(le),[ye,ge]=(0,a.v)(),{tooltipOpen:be,tooltipLeft:ke,tooltipTop:Ae,tooltipData:ce,hideTooltip:je,showTooltip:Ve}=(0,l.A)(),{containerRef:Te,TooltipInPortal:Y}=(0,n.A)({detectBounds:!0,scroll:!0,debounce:0}),Ie=(0,r.useCallback)(()=>{m&&je()},[m,je]),re=(0,r.useMemo)(()=>({showValues:!0,legendValueDisplay:z}),[z]),Re=(0,o.f)(K,re),{isValid:De,message:X}=ie(K),{svgChildren:we,htmlChildren:ze,otherChildren:Oe}=(0,t.n)(ne,"PieChart"),Me=(0,r.useMemo)(()=>({thickness:w,gapScale:G,cornerScale:V}),[w,G,V]);(0,E.t)({chartId:ue,legendItems:Re,chartType:"pie",isDataValid:De,metadata:Me});const{getElementStyles:he}=(0,b.j)();if(!De)return(0,C.jsx)("div",{className:(0,h.A)("pie-chart",q["pie-chart"],ee),children:(0,C.jsx)("div",{className:q["error-message"],children:X})});const _e=k,Be=k,fe=Q&&se==="top"?Be-ge:Be,Ye=Math.min(_e,fe)/2,Ue=_e/2,He=fe/2,Ge=G*(2*Math.PI/K.length),ve=Ye-M,xe=w===0?0:ve*(1-w),$e=(ve-xe)/2,Xe=V?Math.min(V*ve,$e):0,Qe=K.map((J,U)=>({...J,index:U})),Ne={value:J=>J.value,fill:J=>he({data:J,index:J.index}).color};return(0,C.jsx)(g.O.Provider,{value:{chartId:ue,chartWidth:_e,chartHeight:fe},children:(0,C.jsxs)("div",{ref:Te,className:(0,h.A)("pie-chart",q["pie-chart"],ee),style:{display:"flex",flexDirection:Q&&se==="top"?"column-reverse":"column"},children:[(0,C.jsx)("svg",{viewBox:`0 0 ${_e} ${fe}`,preserveAspectRatio:"xMidYMid meet",width:_e,height:fe,children:(0,C.jsxs)(c.A,{top:He,left:Ue,children:[(0,C.jsx)(p.A,{data:Qe,pieValue:Ne.value,outerRadius:ve,innerRadius:xe,padAngle:Ge,cornerRadius:Xe,children:J=>J.arcs.map((U,Ze)=>{const[Pe,Le]=J.path.centroid(U),We=U.endAngle-U.startAngle>=.25,O=tt=>{if(!m)return;const qe=(0,u.A)(tt);if(qe){const st=Q&&se==="top"?ge:0;Ve({tooltipData:U.data,tooltipLeft:qe.x+Z,tooltipTop:qe.y+st+P})}},R={d:J.path(U)||"",fill:Ne.fill(U.data),"data-testid":"pie-segment"},oe={};m&&(oe.onMouseMove=O,oe.onMouseLeave=Ie);const te=12,pe=(0,N.A)(U.data.label,{fontSize:te}),Je=6,Fe=pe+Je*2,et=te+Je*2;return(0,C.jsxs)("g",{...oe,children:[(0,C.jsx)("path",{...R}),$&&We&&(0,C.jsxs)("g",{children:[W.labelBackgroundColor&&(0,C.jsx)("rect",{x:Pe-Fe/2,y:Le-et/2,width:Fe,height:et,fill:W.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,C.jsx)("text",{x:Pe,y:Le,dy:".33em",fill:W.labelTextColor||"#333",fontSize:te,textAnchor:"middle",pointerEvents:"none",children:U.data.label})]})]},`arc-${Ze}`)})}),we]})}),Q&&(0,C.jsx)(i.s,{orientation:de,position:se,alignment:ae,maxWidth:Ee,textOverflow:Ke,className:q["pie-chart-legend"],shape:x,ref:ye,chartId:ue}),m&&be&&ce&&(0,C.jsx)(Y,{top:Ae||0,left:ke||0,children:(0,C.jsx)("div",{role:"tooltip",children:(0,C.jsx)(_.R,{data:ce,top:0,left:0,renderContainer:!1})})}),ze,Oe]})})},F=K=>(0,r.useContext)(H.m)?(0,C.jsx)(me,{...K}):(0,C.jsx)(H.S,{children:(0,C.jsx)(me,{...K})});F.displayName="PieChart";const Se=(0,j.E)(F,{Legend:i.s,SVG:s.d,HTML:d.a}),Ce=(0,j.E)((0,S.F)(F),{Legend:i.s,SVG:s.d,HTML:d.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((B,y,e)=>{e.d(y,{a:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.HTML";try{c.displayName="Chart.HTML",c.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((B,y,e)=>{e.d(y,{d:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.SVG";try{c.displayName="Chart.SVG",c.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((B,y,e)=>{e.d(y,{n:()=>p});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p(l,n){return(0,c.useMemo)(()=>{const h=[],r=[],a=[];return c.Children.forEach(l,v=>{if((0,c.isValidElement)(v)){const E=v.type?.displayName;E===`${n}.SVG`||E==="Chart.SVG"?v.props?.children&&c.Children.forEach(v.props.children,b=>{h.push(b)}):E===`${n}.HTML`||E==="Chart.HTML"?v.props?.children&&c.Children.forEach(v.props.children,b=>{r.push(b)}):v.type===u.A?h.push(v):a.push(v)}}),{svgChildren:h,htmlChildren:r,otherChildren:a}},[l,n])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((B,y,e)=>{e.d(y,{R:()=>v});var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var n=c()(p.A,l);const h=p.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({data:L})=>(0,r.jsxs)(r.Fragment,{children:[L?.label,": ",L?.valueDisplay||L?.value]}),v=({data:L,top:E,left:b,component:H=a,children:j,className:N,style:o,renderContainer:i=!0})=>{const t=j||L&&(0,r.jsx)(H,{data:L,className:N});return i?(0,r.jsx)("div",{className:h.tooltip,style:{top:E,left:b,...o},role:"tooltip",children:t}):t};try{v.displayName="BaseTooltip",v.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:v.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((B,y,e)=>{e.d(y,{OI:()=>l,cg:()=>n,xo:()=>h});var u=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(r,a)=>{const v=a.args;return n(()=>(0,p.jsx)("div",{style:{resize:v.resize||"both",overflow:"auto",padding:"1rem",width:v.containerWidth||"800px",height:v.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,p.jsx)(r,{})}),a)},n=(r,{args:a})=>{const v=a.themeName,L=c.yI[v||"default"];return(0,p.jsx)(u.S,{theme:L,children:(0,p.jsx)(r,{})})},h={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{l.displayName="chartDecorator",l.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:l.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{n.displayName="simpleChartDecorator",n.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:n.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{h.displayName="sharedChartArgTypes",h.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:h.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((B,y,e)=>{e.d(y,{jW:()=>l,yI:()=>p});var u=e("../charts/src/providers/chart-context/themes.ts");const c={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},p={default:u.zQ,jetpack:u.QI,woo:u.pk,custom:c},l={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{c.displayName="customTheme",c.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:c.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{l.displayName="themeArgTypes",l.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:l.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}})}]);
