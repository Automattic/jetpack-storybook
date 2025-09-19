"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((W,y,e)=>{e.d(y,{A:()=>l});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),h=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function r(t,s){t(s)}function a(t){var s=t===void 0?{}:t,d=s.innerRadius,g=s.outerRadius,S=s.cornerRadius,_=s.startAngle,f=s.endAngle,R=s.padAngle,A=s.padRadius,D=(0,n.A)();return d!=null&&r(D.innerRadius,d),g!=null&&r(D.outerRadius,g),S!=null&&r(D.cornerRadius,S),_!=null&&r(D.startAngle,_),f!=null&&r(D.endAngle,f),R!=null&&r(D.padAngle,R),A!=null&&r(D.padRadius,A),D}function v(t){var s=t===void 0?{}:t,d=s.x,g=s.x0,S=s.x1,_=s.y,f=s.y0,R=s.y1,A=s.defined,D=s.curve,O=d3Area();return d&&setNumberOrNumberAccessor(O.x,d),g&&setNumberOrNumberAccessor(O.x0,g),S&&setNumberOrNumberAccessor(O.x1,S),_&&setNumberOrNumberAccessor(O.y,_),f&&setNumberOrNumberAccessor(O.y0,f),R&&setNumberOrNumberAccessor(O.y1,R),A&&O.defined(A),D&&O.curve(D),O}function L(t){var s=t===void 0?{}:t,d=s.x,g=s.y,S=s.defined,_=s.curve,f=d3Line();return d&&setNumberOrNumberAccessor(f.x,d),g&&setNumberOrNumberAccessor(f.y,g),S&&f.defined(S),_&&f.curve(_),f}function E(t){var s=t===void 0?{}:t,d=s.startAngle,g=s.endAngle,S=s.padAngle,_=s.value,f=s.sort,R=s.sortValues,A=(0,h.A)();return(f===null||f!=null)&&A.sort(f),(R===null||R!=null)&&A.sortValues(R),_!=null&&A.value(_),S!=null&&r(A.padAngle,S),d!=null&&r(A.startAngle,d),g!=null&&r(A.endAngle,g),A}function C(t){var s=t===void 0?{}:t,d=s.angle,g=s.radius,S=s.defined,_=s.curve,f=d3RadialLine();return d&&setNumberOrNumberAccessor(f.angle,d),g&&setNumberOrNumberAccessor(f.radius,g),S&&f.defined(S),_&&f.curve(_),f}function G(t){var s=t.keys,d=t.value,g=t.order,S=t.offset,_=d3Stack();return s&&_.keys(s),d&&setNumberOrNumberAccessor(_.value,d),g&&_.order(stackOrder(g)),S&&_.offset(stackOffset(S)),_}var I=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function F(){return F=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(t[g]=d[g])}return t},F.apply(this,arguments)}function i(t,s){if(t==null)return{};var d={},g=Object.keys(t),S,_;for(_=0;_<g.length;_++)S=g[_],!(s.indexOf(S)>=0)&&(d[S]=t[S]);return d}function l(t){var s=t.className,d=t.top,g=t.left,S=t.data,_=S===void 0?[]:S,f=t.centroid,R=t.innerRadius,A=R===void 0?0:R,D=t.outerRadius,O=t.cornerRadius,se=t.startAngle,b=t.endAngle,ie=t.padAngle,pe=t.padRadius,K=t.pieSort,Se=t.pieSortValues,Ce=t.pieValue,M=t.children,ne=t.fill,m=ne===void 0?"":ne,$=i(t,I),X=a({innerRadius:A,outerRadius:D,cornerRadius:O,padRadius:pe}),ae=E({startAngle:se,endAngle:b,padAngle:ie,value:Ce,sort:K,sortValues:Se}),q=ae(_);return M?u.createElement(u.Fragment,null,M({arcs:q,path:X,pie:ae})):u.createElement(o.A,{className:"visx-pie-arcs-group",top:d,left:g},q.map(function(ee,ge){return u.createElement("g",{key:"pie-arc-"+ge},u.createElement("path",F({className:p()("visx-pie-arc",s),d:X(ee)||"",fill:m==null||typeof m=="string"?m:m(ee)},$)),f?.(X.centroid(ee),ee))}))}}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.31.0/node_modules/@wordpress/deprecated/build-module/index.js":((W,y,e)=>{e.d(y,{A:()=>p});var u=e("../../../node_modules/.pnpm/@wordpress+hooks@4.31.0/node_modules/@wordpress/hooks/build-module/index.js");const c=Object.create(null);function p(o,n={}){const{since:h,version:r,alternative:a,plugin:v,link:L,hint:E}=n,C=v?` from ${v}`:"",G=h?` since version ${h}`:"",I=r?` and will be removed${C} in version ${r}`:"",F=a?` Please use ${a} instead.`:"",i=L?` See: ${L}`:"",l=E?` Note: ${E}`:"",t=`${o} is deprecated${G}${I}.${F}${i}${l}`;t in c||((0,u.Eo)("deprecated",o,n,t),console.warn(t),c[t]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((W,y,e)=>{e.d(y,{A:()=>p});function u(o){var n,h,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var a=o.length;for(n=0;n<a;n++)o[n]&&(h=u(o[n]))&&(r&&(r+=" "),r+=h)}else for(h in o)o[h]&&(r&&(r+=" "),r+=h);return r}function c(){for(var o,n,h=0,r="",a=arguments.length;h<a;h++)(o=arguments[h])&&(n=u(o))&&(r&&(r+=" "),r+=n);return r}const p=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":((W,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),n=o()(c());n.push([W.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),n.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const h=n}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((W,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),n=o()(c());n.push([W.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const h=n}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((W,y,e)=>{e.d(y,{A:()=>h});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),n=o()(c());n.push([W.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const h=n}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(W=>{var y=function(l){return e(l)&&!u(l)};function e(i){return!!i&&typeof i=="object"}function u(i){var l=Object.prototype.toString.call(i);return l==="[object RegExp]"||l==="[object Date]"||o(i)}var c=typeof Symbol=="function"&&Symbol.for,p=c?Symbol.for("react.element"):60103;function o(i){return i.$$typeof===p}function n(i){return Array.isArray(i)?[]:{}}function h(i,l){return l.clone!==!1&&l.isMergeableObject(i)?I(n(i),i,l):i}function r(i,l,t){return i.concat(l).map(function(s){return h(s,t)})}function a(i,l){if(!l.customMerge)return I;var t=l.customMerge(i);return typeof t=="function"?t:I}function v(i){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(i).filter(function(l){return Object.propertyIsEnumerable.call(i,l)}):[]}function L(i){return Object.keys(i).concat(v(i))}function E(i,l){try{return l in i}catch{return!1}}function C(i,l){return E(i,l)&&!(Object.hasOwnProperty.call(i,l)&&Object.propertyIsEnumerable.call(i,l))}function G(i,l,t){var s={};return t.isMergeableObject(i)&&L(i).forEach(function(d){s[d]=h(i[d],t)}),L(l).forEach(function(d){C(i,d)||(E(i,d)&&t.isMergeableObject(l[d])?s[d]=a(d,t)(i[d],l[d],t):s[d]=h(l[d],t))}),s}function I(i,l,t){t=t||{},t.arrayMerge=t.arrayMerge||r,t.isMergeableObject=t.isMergeableObject||y,t.cloneUnlessOtherwiseSpecified=h;var s=Array.isArray(l),d=Array.isArray(i),g=s===d;return g?s?t.arrayMerge(i,l,t):G(i,l,t):h(l,t)}I.all=function(l,t){if(!Array.isArray(l))throw new Error("first argument should be an array");return l.reduce(function(s,d){return I(s,d,t)},{})};var F=I;W.exports=F}),"../charts/src/components/bar-chart/bar-chart.tsx":((W,y,e)=>{e.d(y,{A:()=>be});var u=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),c=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),p=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),o=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),n=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),r=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),a=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),v=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),L=e("../../../node_modules/.pnpm/@wordpress+i18n@6.4.0/node_modules/@wordpress/i18n/build-module/index.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),G=e("../charts/src/hooks/use-xychart-theme.ts"),I=e("../charts/src/hooks/use-chart-data-transform.ts");const F=(x,B={enabled:!1})=>{const{enabled:w,minValueRatio:N=.6,maxValueRatio:Q=.008}=B;return(0,C.useMemo)(()=>{if(!w)return x;const V=[];for(const P of x)for(const k of P.data)k.value!==null&&k.value!==0&&V.push(k.value);if(V.length===0)return x;const Z=V.map(Math.abs),z=Math.min(...Z),re=Math.max(...Z),U=Math.min(z*N,re*Q);return x.map(P=>({...P,data:P.data.map(k=>k.value===0?{...k,visualValue:U}:k)}))},[x,w,N,Q])};var i=e("../charts/src/hooks/use-chart-margin.tsx"),l=e("../charts/src/hooks/use-element-height.ts"),t=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),d=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),g=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/utils/create-composition.ts"),_=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),f=e("../charts/src/components/legend/legend.tsx"),R=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),A=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),D=e("../charts/src/components/tooltip/accessible-tooltip.tsx"),O=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),se=e.n(O),b=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),ie={};ie.insert="head",ie.singleton=!1;var pe=se()(b.A,ie);const K=b.A.locals||{};var Se=e("../number-formatters/src/index.ts");const Ce=x=>new Date(x).toLocaleDateString(void 0,{month:"short",day:"numeric"}),M=x=>typeof x.paddingInner=="number"?x.paddingInner:0;function ne(x,B,w={}){const N=(0,C.useMemo)(()=>{const Q={type:"band",padding:.2,paddingInner:.1},V={type:"linear",nice:!0,zero:!1},Z=x?.[0]?.data?.[0]?.label?P=>P:Ce,z=Se.qe,re=P=>P?.label||P?.date,U=P=>{const k=P;return k?.visualValue!==void 0?k.visualValue:P?.value};return{vertical:{xTickFormat:Z,yTickFormat:z,tooltipLabelFormatter:Z,xAccessor:re,yAccessor:U,gridVisibility:"x",xScale:Q,yScale:V},horizontal:{xTickFormat:z,yTickFormat:Z,tooltipLabelFormatter:Z,xAccessor:U,yAccessor:re,gridVisibility:"y",xScale:V,yScale:Q}}},[x]);return(0,C.useMemo)(()=>{const Q=B?"horizontal":"vertical",{xTickFormat:V,yTickFormat:Z,tooltipLabelFormatter:z,xAccessor:re,yAccessor:U,gridVisibility:P,xScale:k,yScale:Ae}=N[Q],_e={...k,...w.xScale||{}},fe={...Ae,...w.yScale||{}},Te=B?w.axis?.y?.tickFormat:w.axis?.x?.tickFormat;return{gridVisibility:P,xScale:_e,yScale:fe,accessors:{xAccessor:re,yAccessor:U},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:V,...w.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:Z,...w.axis?.y||{}}},barGroup:{padding:M(B?fe:_e)},tooltip:{labelFormatter:Te||z}}},[N,w,B])}var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const $=L.__,X=x=>x?.length?x.some(w=>w.data.some(N=>isNaN(N.value)||N.value===null||N.value===void 0||!N.label&&(!("date"in N&&N.date)||isNaN(N.date.getTime()))))?"Invalid data":null:"No data available",ae=(x,B)=>`bar-pattern-${x}-${B}`,q=({data:x,chartId:B,width:w,height:N=400,className:Q,margin:V,withTooltips:Z=!1,showLegend:z=!1,legendOrientation:re="horizontal",legendPosition:U="bottom",legendAlignment:P="center",legendMaxWidth:k,legendTextOverflow:Ae="wrap",legendShape:_e="rect",gridVisibility:fe,renderTooltip:Te,options:Re={},orientation:Oe="vertical",withPatterns:me=!1,showZeroValues:ke=!1,children:Ve})=>{const xe=Oe==="horizontal",H=(0,t.R)(B),De=(0,G.O)(x),oe=(0,I.E)(x),Me=F(oe,{enabled:ke}),ze=(0,_.f)(oe),J=ne(Me,xe,Re),de=(0,i.a)(N,J,oe,De,xe),[we,le]=(0,l.v)(),Be=(0,C.useRef)(null),[ce,Ye]=(0,C.useState)(void 0),[Ue,ye]=(0,C.useState)(!1),Ne=Math.max(0,...x.map(T=>T.data?.length||0))*x.length,{tooltipRef:He,onChartFocus:Ge,onChartBlur:$e,onChartKeyDown:Pe}=(0,D.JZ)({selectedIndex:ce,setSelectedIndex:Ye,isNavigating:Ue,setIsNavigating:ye,chartRef:Be,totalPoints:Ne}),{getElementStyles:Y}=(0,s.j)(),te=(0,C.useCallback)(T=>()=>me?`url(#${ae(H,T)})`:Y({data:oe[T],index:T}).color,[me,Y,oe,H]),Xe=(0,C.useCallback)(({tooltipData:T})=>{const j=T?.nearestDatum?.datum;return j?(0,m.jsxs)("div",{className:K["bar-chart__tooltip"],children:[(0,m.jsx)("div",{className:K["bar-chart__tooltip-header"],children:T?.nearestDatum?.key}),(0,m.jsxs)("div",{className:K["bar-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:K["bar-chart__tooltip-label"],children:[J.tooltip.labelFormatter(j.label||(j.date?j.date.getTime():0),0,[]),":"]}),(0,m.jsx)("span",{className:K["bar-chart__tooltip-value"],children:j.value})]})]}):null},[J.tooltip]),We=(0,C.useCallback)((T,j)=>{const he=T%4,ue=ae(H,T),ve={id:ue,stroke:"white",strokeWidth:1,background:j};switch(he){case 0:default:return(0,m.jsx)(u.A,{...ve,width:5,height:5,orientation:["diagonal"]},ue);case 1:return(0,m.jsx)(c.A,{...ve,width:6,height:6,fill:"white"},ue);case 2:return(0,m.jsx)(p.A,{...ve,width:4,height:4},ue);case 3:return(0,m.jsx)(o.A,{...ve,size:8,height:3},ue)}},[H]),Fe=(0,C.useCallback)((T,j)=>`
			.visx-bar[fill="url(#${ae(H,T)})"] {
				stroke: ${j};
				stroke-width: 1;
				}
			`,[H]),Qe=(0,C.useCallback)(()=>{if(ce===void 0)return"";const T=Math.max(...x.map(Ze=>Ze.data.length)),j=Math.floor(ce/x.length),he=ce%x.length;if(j>=T||he>=x.length)return"";const ue=x[he];if(j>=ue.data.length)return"";const ve=he*T+j;return`
			.bar-chart[data-chart-id="bar-chart-${H}"] .visx-bar-group .visx-bar:nth-child(${ve+1}) {
				stroke: #005fcc;
				stroke-width: 2px;
			}
		`},[ce,x,H]),Le=X(oe),Ee=!Le,je=(0,C.useMemo)(()=>({orientation:Oe,withPatterns:me}),[Oe,me]);if((0,d.t)({chartId:H,legendItems:ze,chartType:"bar",isDataValid:Ee,metadata:je}),Le)return(0,m.jsx)("div",{className:(0,E.A)("bar-chart",K["bar-chart"]),children:Le});const Ke=fe??J.gridVisibility,Ie=Qe();return(0,m.jsx)(R.O.Provider,{value:{chartId:H,chartWidth:w,chartHeight:N-(z?le:0)},children:(0,m.jsxs)("div",{className:(0,E.A)("bar-chart",K["bar-chart"],Q),"data-testid":"bar-chart",role:"grid","aria-label":$("Bar chart","jetpack-charts"),style:{width:w,height:N,display:"flex",flexDirection:z&&U==="top"?"column-reverse":"column"},tabIndex:0,onKeyDown:Pe,onFocus:Ge,onBlur:$e,ref:Be,"data-chart-id":`bar-chart-${H}`,children:[(0,m.jsxs)(n.A,{theme:De,width:w,height:N-(z?le:0),margin:{...de,...V,...z&&U==="top"?{top:(de.top||0)+le}:{}},xScale:J.xScale,yScale:J.yScale,horizontal:xe,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(h.A,{columns:Ke.includes("y"),rows:Ke.includes("x"),numTicks:4}),me&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("defs",{"data-testid":"bar-chart-patterns",children:oe.map((T,j)=>We(j,Y({data:T,index:j}).color))}),(0,m.jsx)("style",{children:oe.map((T,j)=>Fe(j,Y({data:T,index:j}).color))})]}),Ie&&(0,m.jsx)("style",{children:Ie}),(0,m.jsx)(r.A,{padding:J.barGroup.padding,children:Me.map((T,j)=>(0,m.jsx)(a.A,{dataKey:T?.label,data:T.data,yAccessor:J.accessors.yAccessor,xAccessor:J.accessors.xAccessor,colorAccessor:te(j)},T?.label))}),(0,m.jsx)(v.A,{...J.axis.x}),(0,m.jsx)(v.A,{...J.axis.y}),Z&&(0,m.jsx)(D.OZ,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:Te||Xe,selectedIndex:ce,tooltipRef:He,keyboardFocusedClassName:K["bar-chart__tooltip--keyboard-focused"],series:x,mode:"individual"})]}),z&&(0,m.jsx)(f.s,{orientation:re,position:U,alignment:P,maxWidth:k,textOverflow:Ae,className:K["bar-chart__legend"],shape:_e,ref:we,chartId:H}),Ve]})})},ee=x=>(0,C.useContext)(g.m)?(0,m.jsx)(q,{...x}):(0,m.jsx)(g.S,{children:(0,m.jsx)(q,{...x})});ee.displayName="BarChart";const ge=(0,S.E)(ee,{Legend:f.s}),be=(0,S.E)((0,A.F)(ee),{Legend:f.s})}),"../charts/src/components/legend/stories/index.stories.tsx":((W,y,e)=>{e.r(y),e.d(y,{AlignmentOptions:()=>f,CustomShape:()=>A,DashboardExample:()=>_,Horizontal:()=>I,StandaloneLegendWithChartId:()=>g,TextOverflow:()=>R,Vertical:()=>F,WithBarChart:()=>s,WithLineChart:()=>l,__namedExportsOrder:()=>D,default:()=>L});var u=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../charts/src/components/bar-chart/bar-chart.tsx"),o=e("../charts/src/components/line-chart/line-chart.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),h=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),r=e("../charts/src/components/legend/legend.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts/Composites/Legend",component:r.s,parameters:{layout:"centered",docs:{description:{component:`
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
`}}},decorators:[u.cg],argTypes:{...c.jW}},E=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],C=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],G=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],I={render:O=>{const{themeName:se,...b}=O;return(0,a.jsx)(r.s,{...b})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},F={render:O=>{const{themeName:se,...b}=O;return(0,a.jsx)(r.s,{...b})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},i=()=>{const O=(0,h.f)(E,{showValues:!1});return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(o.A,{data:E,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(r.s,{items:O,orientation:"horizontal",shape:"line"})]})},l={render:()=>(0,a.jsx)(i,{}),parameters:{docs:{description:{story:"Legend used with LineChart data, positioned independently below the chart."}}}},t=()=>{const O=(0,h.f)(C);return(0,a.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,a.jsx)(p.A,{data:C,showLegend:!1,width:400,height:300}),(0,a.jsx)(r.s,{items:O,orientation:"vertical"})]})},s={render:()=>(0,a.jsx)(t,{}),parameters:{docs:{description:{story:"Legend used with BarChart data, positioned vertically beside the chart."}}}},d=()=>(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsx)(o.A,{chartId:"standalone-legend-chart",data:E,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,a.jsx)(r.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),g={render:()=>(0,a.jsx)(d,{}),parameters:{docs:{source:{code:`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
`}}}},S=()=>(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,a.jsx)(o.A,{chartId:"dashboard-revenue",data:E,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,a.jsx)(p.A,{chartId:"dashboard-sales",data:C,showLegend:!1,width:280,height:200})]}),(0,a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,a.jsx)(n.A,{chartId:"dashboard-devices",data:G,showLegend:!1})]})]})]}),(0,a.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,a.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,a.jsx)(r.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,a.jsx)(r.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,a.jsx)(r.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),_={render:()=>(0,a.jsx)(S,{}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
`}}}},f={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"},parameters:{docs:{description:{story:"Legend with custom alignment options."}}}},R={render:O=>{const{themeName:se,maxWidth:b,...ie}=O,pe=O.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},K=b?`Legend with ${O.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${b})`:"Legend without maxWidth constraint";return(0,a.jsxs)("div",{style:pe,children:[(0,a.jsx)("h4",{style:{marginBottom:"10px"},children:K}),(0,a.jsx)(r.s,{...ie,maxWidth:b})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Legend orientation"},maxWidth:{control:{type:"range",min:0,max:300,step:10},description:"Maximum width for legend items (pixels). Set to 0 to disable.",table:{type:{summary:"number | string | undefined"},defaultValue:{summary:"undefined"}}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"],description:"Text overflow behavior when maxWidth is set"},position:{control:{type:"radio"},options:["top","bottom"],description:"Vertical position of the legend"},alignment:{control:{type:"radio"},options:["start","center","end"],description:"Horizontal alignment of the legend"}},parameters:{docs:{description:{story:`
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
`}}}},A={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"},parameters:{docs:{description:{story:"Legend with circle shape instead of default rectangle."}}}},D=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />,
  parameters: {
    docs: {
      description: {
        story: 'Legend used with LineChart data, positioned independently below the chart.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}}),"../charts/src/components/pie-chart/pie-chart.tsx":((W,y,e)=>{e.d(y,{W:()=>Se,A:()=>Ce});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/hooks/use-element-height.ts"),h=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),r=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const a=({withTooltips:M})=>{const{tooltipOpen:ne,tooltipLeft:m,tooltipTop:$,tooltipData:X,hideTooltip:ae,showTooltip:q}=(0,r.A)(),ee=(0,o.useCallback)((be,x)=>{if(!M)return;const B=(0,h.A)(be);B&&q({tooltipData:x,tooltipLeft:B.x,tooltipTop:B.y-10})},[M,q]),ge=(0,o.useCallback)(()=>{M&&ae()},[M,ae]);return{onMouseMove:ee,onMouseLeave:ge,tooltipOpen:ne,tooltipData:X||null,tooltipLeft:m,tooltipTop:$}};var v=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),L=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),E=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),C=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),G=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),I=e("../charts/src/utils/create-composition.ts"),F=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),i=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),l=e("../charts/src/components/legend/legend.tsx"),t=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),s=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),d=e("../charts/src/components/private/chart-composition/chart-html.tsx"),g=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),S=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),_=e("../charts/src/components/tooltip/base-tooltip.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(f),A=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),D={};D.insert="head",D.singleton=!1;var O=R()(A.A,D);const se=A.A.locals||{};var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ie=M=>{if(!M.length)return{isValid:!1,message:"No data available"};if(M.some($=>$.percentage<0||$.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const m=M.reduce(($,X)=>$+X.percentage,0);return Math.abs(m-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},pe=({data:M,chartId:ne,withTooltips:m=!1,className:$,showLegend:X=!1,legendOrientation:ae="horizontal",legendPosition:q="bottom",legendAlignment:ee="center",legendMaxWidth:ge,legendTextOverflow:be="wrap",legendShape:x="circle",size:B,thickness:w=1,padding:N=20,gapScale:Q=0,cornerScale:V=0,showLabels:Z=!0,legendValueDisplay:z="percentage",children:re=null})=>{const U=(0,v.p)(),P=(0,L.R)(ne),[k,Ae]=(0,n.v)(),{onMouseMove:_e,onMouseLeave:fe,tooltipOpen:Te,tooltipData:Re,tooltipLeft:Oe,tooltipTop:me}=a({withTooltips:m}),ke=(0,o.useMemo)(()=>({showValues:!0,legendValueDisplay:z}),[z]),Ve=(0,i.f)(M,ke),{isValid:xe,message:H}=ie(M),{svgChildren:De,htmlChildren:oe,otherChildren:Me}=(0,t.n)(re,"PieChart"),ze=(0,o.useMemo)(()=>({thickness:w,gapScale:Q,cornerScale:V}),[w,Q,V]);(0,E.t)({chartId:P,legendItems:Ve,chartType:"pie",isDataValid:xe,metadata:ze});const{getElementStyles:J}=(0,C.j)();if(!xe)return(0,b.jsx)("div",{className:(0,p.A)("pie-chart",se["pie-chart"],$),children:(0,b.jsx)("div",{className:se["error-message"],children:H})});const de=B,we=B,le=X&&q==="top"?we-Ae:we,Be=Math.min(de,le)/2,ce=de/2,Ye=le/2,Ue=Q*(2*Math.PI/M.length),ye=Be-N,Ne=w===0?0:ye*(1-w),He=(ye-Ne)/2,Ge=V?Math.min(V*ye,He):0,$e=M.map((Y,te)=>({...Y,index:te})),Pe={value:Y=>Y.value,fill:Y=>J({data:Y,index:Y.index}).color};return(0,b.jsx)(g.O.Provider,{value:{chartId:P,chartWidth:de,chartHeight:le},children:(0,b.jsxs)("div",{className:(0,p.A)("pie-chart",se["pie-chart"],$),style:{display:"flex",flexDirection:X&&q==="top"?"column-reverse":"column"},children:[(0,b.jsx)("svg",{viewBox:`0 0 ${de} ${le}`,preserveAspectRatio:"xMidYMid meet",width:de,height:le,children:(0,b.jsxs)(u.A,{top:Ye,left:ce,children:[(0,b.jsx)(c.A,{data:$e,pieValue:Pe.value,outerRadius:ye,innerRadius:Ne,padAngle:Ue,cornerRadius:Ge,children:Y=>Y.arcs.map((te,Xe)=>{const[We,Fe]=Y.path.centroid(te),Qe=te.endAngle-te.startAngle>=.25,Le=he=>_e(he,te.data),Ee={d:Y.path(te)||"",fill:Pe.fill(te.data)};m&&(Ee.onMouseMove=Le,Ee.onMouseLeave=fe);const je=12,Ke=(0,F.A)(te.data.label,{fontSize:je}),Ie=6,T=Ke+Ie*2,j=je+Ie*2;return(0,b.jsxs)("g",{children:[(0,b.jsx)("path",{...Ee}),Z&&Qe&&(0,b.jsxs)("g",{children:[U.labelBackgroundColor&&(0,b.jsx)("rect",{x:We-T/2,y:Fe-j/2,width:T,height:j,fill:U.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,b.jsx)("text",{x:We,y:Fe,dy:".33em",fill:U.labelTextColor||"#333",fontSize:je,textAnchor:"middle",pointerEvents:"none",children:te.data.label})]})]},`arc-${Xe}`)})}),De]})}),X&&(0,b.jsx)(l.s,{orientation:ae,position:q,alignment:ee,maxWidth:ge,textOverflow:be,className:se["pie-chart-legend"],shape:x,ref:k,chartId:P}),m&&Te&&Re&&(0,b.jsx)(_.R,{data:Re,top:me||0,left:Oe||0,style:{transform:"translate(-50%, -100%)"}}),oe,Me]})})},K=M=>(0,o.useContext)(G.m)?(0,b.jsx)(pe,{...M}):(0,b.jsx)(G.S,{children:(0,b.jsx)(pe,{...M})});K.displayName="PieChart";const Se=(0,I.E)(K,{Legend:l.s,SVG:s.d,HTML:d.a}),Ce=(0,I.E)((0,S.F)(K),{Legend:l.s,SVG:s.d,HTML:d.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((W,y,e)=>{e.d(y,{a:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.HTML";try{c.displayName="Chart.HTML",c.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((W,y,e)=>{e.d(y,{d:()=>c});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:p})=>(0,u.jsx)(u.Fragment,{children:p});c.displayName="Chart.SVG";try{c.displayName="Chart.SVG",c.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((W,y,e)=>{e.d(y,{n:()=>p});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p(o,n){return(0,c.useMemo)(()=>{const h=[],r=[],a=[];return c.Children.forEach(o,v=>{if((0,c.isValidElement)(v)){const E=v.type?.displayName;E===`${n}.SVG`||E==="Chart.SVG"?v.props?.children&&c.Children.forEach(v.props.children,C=>{h.push(C)}):E===`${n}.HTML`||E==="Chart.HTML"?v.props?.children&&c.Children.forEach(v.props.children,C=>{r.push(C)}):v.type===u.A?h.push(v):a.push(v)}}),{svgChildren:h,htmlChildren:r,otherChildren:a}},[o,n])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((W,y,e)=>{e.d(y,{R:()=>v});var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),o={};o.insert="head",o.singleton=!1;var n=c()(p.A,o);const h=p.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=({data:L})=>(0,r.jsxs)(r.Fragment,{children:[L?.label,": ",L?.valueDisplay||L?.value]}),v=({data:L,top:E,left:C,component:G=a,children:I,className:F})=>(0,r.jsx)("div",{className:h.tooltip,style:{top:E,left:C},role:"tooltip",children:I||L&&(0,r.jsx)(G,{data:L,className:F})});try{v.displayName="BaseTooltip",v.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:v.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((W,y,e)=>{e.d(y,{OI:()=>o,cg:()=>n,xo:()=>h});var u=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(r,a)=>{const v=a.args;return n(()=>(0,p.jsx)("div",{style:{resize:v.resize||"both",overflow:"auto",padding:"1rem",width:v.containerWidth||"800px",height:v.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,p.jsx)(r,{})}),a)},n=(r,{args:a})=>{const v=a.themeName,L=c.yI[v||"default"];return(0,p.jsx)(u.S,{theme:L,children:(0,p.jsx)(r,{})})},h={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{o.displayName="chartDecorator",o.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:o.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{n.displayName="simpleChartDecorator",n.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:n.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{h.displayName="sharedChartArgTypes",h.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:h.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((W,y,e)=>{e.d(y,{jW:()=>o,yI:()=>p});var u=e("../charts/src/providers/chart-context/themes.ts");const c={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},p={default:u.zQ,jetpack:u.QI,woo:u.pk,custom:c},o={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{c.displayName="customTheme",c.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:c.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{o.displayName="themeArgTypes",o.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:o.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}})}]);
