"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1529],{"../charts/src/charts/line-chart/stories/glyph.stories.tsx"(D,O,t){t.r(O),t.d(O,{Custom:()=>n,CustomPerDataPoint:()=>L,CustomSvg:()=>S,End:()=>e,InTooltip:()=>P,Start:()=>a,__namedExportsOrder:()=>R,default:()=>T});var x=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),y=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),g=t("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),l=t("../charts/src/stories/theme-config.tsx"),f=t("../charts/src/charts/line-chart/line-chart.tsx"),p=t("../charts/src/charts/line-chart/stories/config.tsx"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={...l.yI,glyph:p.Em},A=(v,{args:h})=>{const m=h,u=m.themeName,s=_[u||"default"];return(0,r.jsx)(y.S,{theme:s,children:(0,r.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",height:m.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,r.jsx)(v,{})})})},T={...p.Nc,title:"JS Packages/Charts Library/Charts/Line Chart/Glyphs",decorators:[A],argTypes:{...p.Nc.argTypes,themeName:{...l.jW.themeName,options:["default","custom","glyph"]},withStartGlyphs:{control:"boolean",description:"Show glyphs at line start",table:{category:"Glyphs"}},withEndGlyphs:{control:"boolean",description:"Show glyphs at line end",table:{category:"Glyphs"}},withLegendGlyph:{control:"boolean",description:"Show glyphs in legend",table:{category:"Glyphs"}},glyphType:{control:"radio",options:["default","star","heart"],description:"Glyph shape",table:{category:"Glyphs"}},glyphSize:{control:{type:"range",min:4,max:16,step:1},description:"Glyph size (radius)",table:{category:"Glyphs"}}}},C=({color:v,size:h,x:m,y:u})=>{const E=typeof m=="number"&&typeof u=="number"&&(m!==0||u!==0)?{transform:`translate(${m}, ${u})`}:{};return(0,r.jsx)("g",{...E,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:h*2,height:h*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,r.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:v,stroke:v,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},i=v=>{const{glyphType:h,glyphSize:m,...u}=v;let s=u.renderGlyph;h==="star"?s=({color:j,size:G,x:M,y:z})=>(0,r.jsx)(x.A,{top:z,left:M,size:G*G,fill:j}):h==="heart"&&(s=({color:j,size:G,x:M,y:z})=>(0,r.jsx)(C,{color:j,size:G,x:M,y:z}));const E=m?{radius:m}:u.glyphStyle;return(0,r.jsx)(f.A,{...u,renderGlyph:s,glyphStyle:E})},c={...p.pn,withStartGlyphs:!0},a=i.bind({});a.args={...c};const e=i.bind({});e.args={...c,withStartGlyphs:!1,withEndGlyphs:!0};const n=i.bind({});n.args={...c,withLegendGlyph:!0,renderGlyph:({color:v,size:h,x:m,y:u})=>(0,r.jsx)(x.A,{top:u,left:m,size:h*h,fill:v}),glyphStyle:{radius:10}};const o=({color:v,size:h,x:m,y:u})=>{const E=typeof m=="number"&&typeof u=="number"&&(m!==0||u!==0)?{transform:`translate(${m}, ${u})`}:{};return(0,r.jsx)("g",{...E,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:h*2,height:h*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,r.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:v,stroke:v,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},S=i.bind({});S.args={...c,withLegendGlyph:!0,renderGlyph:({color:v,size:h,x:m,y:u})=>(0,r.jsx)(o,{color:v,size:h,x:m,y:u}),glyphStyle:{radius:8}};const d=({tooltipData:v})=>{const h=(0,g.p)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{marginBottom:"0.5rem"},children:v?.nearestDatum?.datum?.date?.toLocaleDateString()}),(0,r.jsx)("div",{children:Object.entries(v?.datumByKey||{}).map(([m,u],s)=>{const{datum:E}=u;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.2rem"},children:[(0,r.jsx)("svg",{width:20,height:20,children:(0,r.jsx)(x.A,{size:100,top:10,left:10,fill:"#fff",stroke:h.colors[s%h.colors.length]})}),m,": ",E.value]})},m)})})]})},P=i.bind({});P.args={...c,renderGlyph:({color:v,size:h,x:m,y:u})=>(0,r.jsx)(x.A,{top:u,left:m,size:h*h,fill:"#fff",stroke:v}),glyphStyle:{radius:10},renderTooltip:d};const L=i.bind({});L.args={...c,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,themeName:"glyph",glyphStyle:{radius:8}};const R=["Start","End","Custom","CustomSvg","InTooltip","CustomPerDataPoint"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
}`,...e.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
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
}`,...S.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
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
}`,...L.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"(D,O,t){t.d(O,{A:()=>r});var x=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),y=t.n(x),g=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=t.n(l),p=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function r(_){var A=_.top,b=A===void 0?0:A,T=_.left,C=T===void 0?0:T,i=_.className,c=_.children;return g.createElement(p.A,{className:f()("visx-glyph",i),top:b,left:C},c)}r.propTypes={top:y().number,left:y().number,className:y().string,children:y().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"(D,O,t){t.d(O,{A:()=>C});var x=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),y=t.n(x),g=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=t.n(l),p=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),r=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),_=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),A=["children","className","top","left","size"];function b(){return b=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(i[e]=a[e])}return i},b.apply(this,arguments)}function T(i,c){if(i==null)return{};var a={},e=Object.keys(i),n,o;for(o=0;o<e.length;o++)n=e[o],!(c.indexOf(n)>=0)&&(a[n]=i[n]);return a}function C(i){var c=i.children,a=i.className,e=i.top,n=i.left,o=i.size,S=T(i,A),d=(0,p.A)();return d.type(r.A),(typeof o=="number"||o)&&d.size(o),c?g.createElement(g.Fragment,null,c({path:d})):g.createElement(_.A,{top:e,left:n},g.createElement("path",b({className:f()("visx-glyph-star",a),d:d()||""},S)))}C.propTypes={children:y().func,className:y().string,top:y().number,left:y().number,size:y().oneOfType([y().number,y().func])}},"../charts/src/charts/line-chart/stories/config.tsx"(D,O,t){t.d(O,{Em:()=>h,Nc:()=>m,pn:()=>u});var x=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),y=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),g=t.n(y),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=t.n(f),r=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),_=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),A=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),b=["children","className","top","left","size"];function T(){return T=Object.assign?Object.assign.bind():function(s){for(var E=1;E<arguments.length;E++){var j=arguments[E];for(var G in j)Object.prototype.hasOwnProperty.call(j,G)&&(s[G]=j[G])}return s},T.apply(this,arguments)}function C(s,E){if(s==null)return{};var j={},G=Object.keys(s),M,z;for(z=0;z<G.length;z++)M=G[z],!(E.indexOf(M)>=0)&&(j[M]=s[M]);return j}function i(s){var E=s.children,j=s.className,G=s.top,M=s.left,z=s.size,w=C(s,b),I=(0,r.A)();return I.type(_.A),(typeof z=="number"||z)&&I.size(z),E?l.createElement(l.Fragment,null,E({path:I})):l.createElement(A.A,{top:G,left:M},l.createElement("path",T({className:p()("visx-glyph-diamond",j),d:I()||""},w)))}i.propTypes={children:g().func,className:g().string,top:g().number,left:g().number,size:g().oneOfType([g().number,g().func])};var c=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),a=t.n(c),e=t("../charts/src/providers/chart-context/themes.ts"),n=t("../charts/src/stories/chart-decorator.tsx"),o=t("../charts/src/stories/legend-config.tsx"),S=t("../charts/src/stories/sample-data/index.ts"),d=t("../charts/src/stories/theme-config.tsx");const P={withTooltips:{control:{type:"boolean"},description:"Enable or disable interactive tooltips on hover",table:{category:"Tooltips"}},renderTooltip:{control:!1,description:"Custom render function for tooltip content",table:{disable:!0}}},L={...P,crosshairMode:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"Show crosshair lines on tooltip hover",table:{category:"Tooltips"}},withTooltipCrosshairs:{control:!1,table:{disable:!0}}};try{P.displayName="tooltipArgTypes",P.__docgenInfo={description:`Shared tooltip configuration for chart stories
Provides consistent argTypes across all chart tooltip stories`,displayName:"tooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"]={docgenInfo:P.__docgenInfo,name:"tooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#tooltipArgTypes"})}catch{}try{L.displayName="lineChartTooltipArgTypes",L.__docgenInfo={description:"Additional tooltip argTypes for line charts with crosshair support",displayName:"lineChartTooltipArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"]={docgenInfo:L.__docgenInfo,name:"lineChartTooltipArgTypes",path:"../charts/src/stories/tooltip-config.tsx#lineChartTooltipArgTypes"})}catch{}var R=t("../charts/src/charts/private/default-glyph/default-glyph.tsx"),v=t("../charts/src/charts/line-chart/line-chart.tsx");const h=a()(e.z,{glyphs:[s=>(0,l.createElement)(R.W,{...s,key:s.key}),s=>(0,l.createElement)(x.A,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color}),s=>(0,l.createElement)(i,{key:s.key,top:s.y,left:s.x,size:s.size*s.size,fill:s.color})],annotationStyles:{label:{maxWidth:250}}}),m={title:"JS Packages/Charts Library/Charts/Line Chart",component:v.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...o.r,...d.jW,...n.xo,...L,data:{control:{type:"object"},description:"Array of series data to display in the chart",table:{category:"Data"}}}},u={...d.In,data:S.B2.slice(0,4),withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{h.displayName="glyphTheme",h.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:h.__docgenInfo,name:"glyphTheme",path:"../charts/src/charts/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/legend-config.tsx"(D,O,t){t.d(O,{D:()=>y,r:()=>x});const x={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","line","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function y(g){const{legendPosition:l,legendAlignment:f,legendOrientation:p,legendShape:r,legendInteractive:_,legendItemClassName:A,legendMaxWidth:b,legendTextOverflow:T,legendShapeStyles:C,legendItemStyles:i}=g;if(!(l!==void 0||f!==void 0||p!==void 0||r!==void 0||_!==void 0||A!==void 0||b!==void 0||T!==void 0||C!==void 0||i!==void 0))return;const a={};return p!==void 0&&(a.orientation=p),l!==void 0&&(a.position=l),f!==void 0&&(a.alignment=f),r!==void 0&&(a.shape=r),_!==void 0&&(a.interactive=_),A!==void 0&&(a.itemClassName=A),(b!==void 0||T!==void 0)&&(a.labelStyles={},b!==void 0&&(a.labelStyles.maxWidth=b),T!==void 0&&(a.labelStyles.textOverflow=T)),C!==void 0&&(a.shapeStyles=C),i!==void 0&&(a.itemStyles=i),a}try{y.displayName="extractLegendConfig",y.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:y.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{x.displayName="legendArgTypes",x.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:x.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(D,O,t){t.d(O,{A:()=>g});function x(l){var f,p,r="";if(typeof l=="string"||typeof l=="number")r+=l;else if(typeof l=="object")if(Array.isArray(l)){var _=l.length;for(f=0;f<_;f++)l[f]&&(p=x(l[f]))&&(r&&(r+=" "),r+=p)}else for(p in l)l[p]&&(r&&(r+=" "),r+=p);return r}function y(){for(var l,f,p=0,r="",_=arguments.length;p<_;p++)(l=arguments[p])&&(f=x(l))&&(r&&(r+=" "),r+=f);return r}const g=y},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(D){var O=function(n){return t(n)&&!x(n)};function t(e){return!!e&&typeof e=="object"}function x(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||l(e)}var y=typeof Symbol=="function"&&Symbol.for,g=y?Symbol.for("react.element"):60103;function l(e){return e.$$typeof===g}function f(e){return Array.isArray(e)?[]:{}}function p(e,n){return n.clone!==!1&&n.isMergeableObject(e)?c(f(e),e,n):e}function r(e,n,o){return e.concat(n).map(function(S){return p(S,o)})}function _(e,n){if(!n.customMerge)return c;var o=n.customMerge(e);return typeof o=="function"?o:c}function A(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}function b(e){return Object.keys(e).concat(A(e))}function T(e,n){try{return n in e}catch{return!1}}function C(e,n){return T(e,n)&&!(Object.hasOwnProperty.call(e,n)&&Object.propertyIsEnumerable.call(e,n))}function i(e,n,o){var S={};return o.isMergeableObject(e)&&b(e).forEach(function(d){S[d]=p(e[d],o)}),b(n).forEach(function(d){C(e,d)||(T(e,d)&&o.isMergeableObject(n[d])?S[d]=_(d,o)(e[d],n[d],o):S[d]=p(n[d],o))}),S}function c(e,n,o){o=o||{},o.arrayMerge=o.arrayMerge||r,o.isMergeableObject=o.isMergeableObject||O,o.cloneUnlessOtherwiseSpecified=p;var S=Array.isArray(n),d=Array.isArray(e),P=S===d;return P?S?o.arrayMerge(e,n,o):i(e,n,o):p(n,o)}c.all=function(n,o){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(S,d){return c(S,d,o)},{})};var a=c;D.exports=a}}]);
