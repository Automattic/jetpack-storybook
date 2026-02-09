"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1529],{"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"(D,E,t){t.d(E,{A:()=>n});var u=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),m=t.n(u),f=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(l),p=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function n(_){var C=_.top,z=C===void 0?0:C,b=_.left,L=b===void 0?0:b,a=_.className,c=_.children;return f.createElement(p.A,{className:v()("visx-glyph",a),top:z,left:L},c)}n.propTypes={top:m().number,left:m().number,className:m().string,children:m().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"(D,E,t){t.d(E,{A:()=>L});var u=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),m=t.n(u),f=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(l),p=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),n=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),_=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),C=["children","className","top","left","size"];function z(){return z=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var x=arguments[c];for(var e in x)Object.prototype.hasOwnProperty.call(x,e)&&(a[e]=x[e])}return a},z.apply(this,arguments)}function b(a,c){if(a==null)return{};var x={},e=Object.keys(a),r,o;for(o=0;o<e.length;o++)r=e[o],!(c.indexOf(r)>=0)&&(x[r]=a[r]);return x}function L(a){var c=a.children,x=a.className,e=a.top,r=a.left,o=a.size,g=b(a,C),i=(0,p.A)();return i.type(n.A),(typeof o=="number"||o)&&i.size(o),c?f.createElement(f.Fragment,null,c({path:i})):f.createElement(_.A,{top:e,left:r},f.createElement("path",z({className:v()("visx-glyph-star",x),d:i()||""},g)))}L.propTypes={children:m().func,className:m().string,top:m().number,left:m().number,size:m().oneOfType([m().number,m().func])}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(D,E,t){t.d(E,{A:()=>f});function u(l){var v,p,n="";if(typeof l=="string"||typeof l=="number")n+=l;else if(typeof l=="object")if(Array.isArray(l)){var _=l.length;for(v=0;v<_;v++)l[v]&&(p=u(l[v]))&&(n&&(n+=" "),n+=p)}else for(p in l)l[p]&&(n&&(n+=" "),n+=p);return n}function m(){for(var l,v,p=0,n="",_=arguments.length;p<_;p++)(l=arguments[p])&&(v=u(l))&&(n&&(n+=" "),n+=v);return n}const f=m},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(D){var E=function(r){return t(r)&&!u(r)};function t(e){return!!e&&typeof e=="object"}function u(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||l(e)}var m=typeof Symbol=="function"&&Symbol.for,f=m?Symbol.for("react.element"):60103;function l(e){return e.$$typeof===f}function v(e){return Array.isArray(e)?[]:{}}function p(e,r){return r.clone!==!1&&r.isMergeableObject(e)?c(v(e),e,r):e}function n(e,r,o){return e.concat(r).map(function(g){return p(g,o)})}function _(e,r){if(!r.customMerge)return c;var o=r.customMerge(e);return typeof o=="function"?o:c}function C(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.call(e,r)}):[]}function z(e){return Object.keys(e).concat(C(e))}function b(e,r){try{return r in e}catch{return!1}}function L(e,r){return b(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}function a(e,r,o){var g={};return o.isMergeableObject(e)&&z(e).forEach(function(i){g[i]=p(e[i],o)}),z(r).forEach(function(i){L(e,i)||(b(e,i)&&o.isMergeableObject(r[i])?g[i]=_(i,o)(e[i],r[i],o):g[i]=p(r[i],o))}),g}function c(e,r,o){o=o||{},o.arrayMerge=o.arrayMerge||n,o.isMergeableObject=o.isMergeableObject||E,o.cloneUnlessOtherwiseSpecified=p;var g=Array.isArray(r),i=Array.isArray(e),O=g===i;return O?g?o.arrayMerge(e,r,o):a(e,r,o):p(r,o)}c.all=function(r,o){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(g,i){return c(g,i,o)},{})};var x=c;D.exports=x},"../charts/src/charts/line-chart/stories/config.tsx"(D,E,t){t.d(E,{Em:()=>h,Nc:()=>d,pn:()=>y});var u=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),m=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),f=t.n(m),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=t.n(v),n=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),_=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),C=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),z=["children","className","top","left","size"];function b(){return b=Object.assign?Object.assign.bind():function(s){for(var T=1;T<arguments.length;T++){var P=arguments[T];for(var A in P)Object.prototype.hasOwnProperty.call(P,A)&&(s[A]=P[A])}return s},b.apply(this,arguments)}function L(s,T){if(s==null)return{};var P={},A=Object.keys(s),M,G;for(G=0;G<A.length;G++)M=A[G],!(T.indexOf(M)>=0)&&(P[M]=s[M]);return P}function a(s){var T=s.children,P=s.className,A=s.top,M=s.left,G=s.size,W=L(s,z),I=(0,n.A)();return I.type(_.A),(typeof G=="number"||G)&&I.size(G),T?l.createElement(l.Fragment,null,T({path:I})):l.createElement(C.A,{top:A,left:M},l.createElement("path",b({className:p()("visx-glyph-diamond",P),d:I()||""},W)))}a.propTypes={children:f().func,className:f().string,top:f().number,left:f().number,size:f().oneOfType([f().number,f().func])};var c=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),x=t.n(c),e=t("../charts/src/providers/chart-context/themes.ts"),r=t("../charts/src/stories/chart-decorator.tsx"),o=t("../charts/src/stories/legend-config.tsx"),g=t("../charts/src/stories/sample-data/index.ts"),i=t("../charts/src/stories/theme-config.tsx");const O={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},j={...O,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{O.displayName="tooltipArgTypes",O.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:O.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{j.displayName="lineChartTooltipArgTypes",j.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:j.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var R=t("../charts/src/charts/private/default-glyph/default-glyph.tsx"),S=t("../charts/src/charts/line-chart/line-chart.tsx");const h=x()(e.z,{glyphs:[s=>(0,l.createElement)(R.W,{...s,key:s.key}),s=>(0,l.createElement)(u.A,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color}),s=>(0,l.createElement)(a,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color})],annotationStyles:{label:{maxWidth:250}}}),d={title:"JS Packages/Charts Library/Charts/Line Chart",component:S.A,parameters:{layout:"centered"},decorators:[r.OI],argTypes:{...o.r,...i.jW,...r.xo,...j,data:{control:{type:"object"},description:"Array of series data to display in the chart",table:{category:"Data"}}}},y={...i.In,data:g.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{h.displayName="glyphTheme",h.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:h.__docgenInfo,name:"glyphTheme",path:"../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/charts/line-chart/stories/glyph.stories.tsx"(D,E,t){t.r(E),t.d(E,{Custom:()=>r,CustomPerDataPoint:()=>j,CustomSvg:()=>g,End:()=>e,InTooltip:()=>O,Start:()=>x,__namedExportsOrder:()=>R,default:()=>b});var u=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),m=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),f=t("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),l=t("../charts/src/stories/theme-config.tsx"),v=t("../charts/src/charts/line-chart/line-chart.tsx"),p=t("../charts/src/charts/line-chart/stories/config.tsx"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={...l.yI,glyph:p.Em},C=(S,{args:h})=>{const d=h,y=d.themeName,s=_[y||"default"];return(0,n.jsx)(m.S,{theme:s,children:(0,n.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:d.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,n.jsx)(S,{})})})},b={...p.Nc,title:"JS Packages/Charts Library/Charts/Line Chart/Glyphs",decorators:[C],argTypes:{...p.Nc.argTypes,themeName:{...l.jW.themeName,options:["default","custom","glyph"]},withStartGlyphs:{control:"boolean",description:"Show glyphs at line start",table:{category:"Glyphs"}},withEndGlyphs:{control:"boolean",description:"Show glyphs at line end",table:{category:"Glyphs"}},withLegendGlyph:{control:"boolean",description:"Show glyphs in legend",table:{category:"Glyphs"}},glyphType:{control:"radio",options:["default","star","heart"],description:"Glyph shape",table:{category:"Glyphs"}},glyphSize:{control:{type:"range",min:4,max:16,step:1},description:"Glyph size (radius)",table:{category:"Glyphs"}}}},L=({color:S,size:h,x:d,y})=>{const T=typeof d=="number"&&typeof y=="number"&&(d!==0||y!==0)?{transform:`translate(${d}, ${y})`}:{};return(0,n.jsx)("g",{...T,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:h*2,height:h*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,n.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:S,stroke:S,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},a=S=>{const{glyphType:h,glyphSize:d,...y}=S;let s=y.renderGlyph;h==="star"?s=({color:P,size:A,x:M,y:G})=>(0,n.jsx)(u.A,{top:G,left:M,size:A*A,fill:P}):h==="heart"&&(s=({color:P,size:A,x:M,y:G})=>(0,n.jsx)(L,{color:P,size:A,x:M,y:G}));const T=d?{radius:d}:y.glyphStyle;return(0,n.jsx)(v.A,{...y,renderGlyph:s,glyphStyle:T})},c={...p.pn,withStartGlyphs:!0},x=a.bind({});x.args={...c};const e=a.bind({});e.args={...c,withStartGlyphs:!1,withEndGlyphs:!0};const r=a.bind({});r.args={...c,withLegendGlyph:!0,renderGlyph:({color:S,size:h,x:d,y})=>(0,n.jsx)(u.A,{top:y,left:d,size:h*h,fill:S}),glyphStyle:{radius:10}};const o=({color:S,size:h,x:d,y})=>{const T=typeof d=="number"&&typeof y=="number"&&(d!==0||y!==0)?{transform:`translate(${d}, ${y})`}:{};return(0,n.jsx)("g",{...T,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:h*2,height:h*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,n.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:S,stroke:S,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},g=a.bind({});g.args={...c,withLegendGlyph:!0,renderGlyph:({color:S,size:h,x:d,y})=>(0,n.jsx)(o,{color:S,size:h,x:d,y}),glyphStyle:{radius:8}};const i=({tooltipData:S})=>{const h=(0,f.p)();return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{marginBottom:"0.5rem"},children:S?.nearestDatum?.datum?.date?.toLocaleDateString()}),(0,n.jsx)("div",{children:Object.entries(S?.datumByKey||{}).map(([d,y],s)=>{const{datum:T}=y;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.2rem"},children:[(0,n.jsx)("svg",{width:20,height:20,children:(0,n.jsx)(u.A,{size:100,top:10,left:10,fill:"#fff",stroke:h.colors[s%h.colors.length]})}),d,": ",T.value]})},d)})})]})},O=a.bind({});O.args={...c,renderGlyph:({color:S,size:h,x:d,y})=>(0,n.jsx)(u.A,{top:y,left:d,size:h*h,fill:"#fff",stroke:S}),glyphStyle:{radius:10},renderTooltip:i};const j=a.bind({});j.args={...c,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,themeName:"glyph",glyphStyle:{radius:8}};const R=["Start","End","Custom","CustomSvg","InTooltip","CustomPerDataPoint"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const {
    glyphType,
    glyphSize,
    ...chartProps
  } = args;

  // Determine renderGlyph based on glyphType control
  let renderGlyph = chartProps.renderGlyph;
  if (glyphType === 'star') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <GlyphStar top={y} left={x} size={size * size} fill={color} />;
  } else if (glyphType === 'heart') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <CustomHeartGlyph color={color} size={size} x={x} y={y} />;
  }

  // Determine glyphStyle based on glyphSize control
  const glyphStyle = glyphSize ? {
    radius: glyphSize
  } : chartProps.glyphStyle;
  return <LineChart {...chartProps} renderGlyph={renderGlyph} glyphStyle={glyphStyle} />;
}`,...x.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const {
    glyphType,
    glyphSize,
    ...chartProps
  } = args;

  // Determine renderGlyph based on glyphType control
  let renderGlyph = chartProps.renderGlyph;
  if (glyphType === 'star') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <GlyphStar top={y} left={x} size={size * size} fill={color} />;
  } else if (glyphType === 'heart') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <CustomHeartGlyph color={color} size={size} x={x} y={y} />;
  }

  // Determine glyphStyle based on glyphSize control
  const glyphStyle = glyphSize ? {
    radius: glyphSize
  } : chartProps.glyphStyle;
  return <LineChart {...chartProps} renderGlyph={renderGlyph} glyphStyle={glyphStyle} />;
}`,...e.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const {
    glyphType,
    glyphSize,
    ...chartProps
  } = args;

  // Determine renderGlyph based on glyphType control
  let renderGlyph = chartProps.renderGlyph;
  if (glyphType === 'star') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <GlyphStar top={y} left={x} size={size * size} fill={color} />;
  } else if (glyphType === 'heart') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <CustomHeartGlyph color={color} size={size} x={x} y={y} />;
  }

  // Determine glyphStyle based on glyphSize control
  const glyphStyle = glyphSize ? {
    radius: glyphSize
  } : chartProps.glyphStyle;
  return <LineChart {...chartProps} renderGlyph={renderGlyph} glyphStyle={glyphStyle} />;
}`,...r.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const {
    glyphType,
    glyphSize,
    ...chartProps
  } = args;

  // Determine renderGlyph based on glyphType control
  let renderGlyph = chartProps.renderGlyph;
  if (glyphType === 'star') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <GlyphStar top={y} left={x} size={size * size} fill={color} />;
  } else if (glyphType === 'heart') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <CustomHeartGlyph color={color} size={size} x={x} y={y} />;
  }

  // Determine glyphStyle based on glyphSize control
  const glyphStyle = glyphSize ? {
    radius: glyphSize
  } : chartProps.glyphStyle;
  return <LineChart {...chartProps} renderGlyph={renderGlyph} glyphStyle={glyphStyle} />;
}`,...g.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const {
    glyphType,
    glyphSize,
    ...chartProps
  } = args;

  // Determine renderGlyph based on glyphType control
  let renderGlyph = chartProps.renderGlyph;
  if (glyphType === 'star') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <GlyphStar top={y} left={x} size={size * size} fill={color} />;
  } else if (glyphType === 'heart') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <CustomHeartGlyph color={color} size={size} x={x} y={y} />;
  }

  // Determine glyphStyle based on glyphSize control
  const glyphStyle = glyphSize ? {
    radius: glyphSize
  } : chartProps.glyphStyle;
  return <LineChart {...chartProps} renderGlyph={renderGlyph} glyphStyle={glyphStyle} />;
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const {
    glyphType,
    glyphSize,
    ...chartProps
  } = args;

  // Determine renderGlyph based on glyphType control
  let renderGlyph = chartProps.renderGlyph;
  if (glyphType === 'star') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <GlyphStar top={y} left={x} size={size * size} fill={color} />;
  } else if (glyphType === 'heart') {
    renderGlyph = ({
      color,
      size,
      x,
      y
    }) => <CustomHeartGlyph color={color} size={size} x={x} y={y} />;
  }

  // Determine glyphStyle based on glyphSize control
  const glyphStyle = glyphSize ? {
    radius: glyphSize
  } : chartProps.glyphStyle;
  return <LineChart {...chartProps} renderGlyph={renderGlyph} glyphStyle={glyphStyle} />;
}`,...j.parameters?.docs?.source}}}},"../charts/src/stories/legend-config.tsx"(D,E,t){t.d(E,{r:()=>u});const u={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{u.displayName="legendArgTypes",u.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:u.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}}]);
