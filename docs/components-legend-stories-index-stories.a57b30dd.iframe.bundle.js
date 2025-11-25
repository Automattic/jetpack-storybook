"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((N,E,c)=>{c.d(E,{A:()=>a});var x=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=c("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=c.n(C),p=c("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),g=c("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),h=c("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function t(e,r){e(r)}function o(e){var r=e===void 0?{}:e,s=r.innerRadius,i=r.outerRadius,m=r.cornerRadius,l=r.startAngle,d=r.endAngle,S=r.padAngle,u=r.padRadius,T=(0,g.A)();return s!=null&&t(T.innerRadius,s),i!=null&&t(T.outerRadius,i),m!=null&&t(T.cornerRadius,m),l!=null&&t(T.startAngle,l),d!=null&&t(T.endAngle,d),S!=null&&t(T.padAngle,S),u!=null&&t(T.padRadius,u),T}function R(e){var r=e===void 0?{}:e,s=r.x,i=r.x0,m=r.x1,l=r.y,d=r.y0,S=r.y1,u=r.defined,T=r.curve,_=d3Area();return s&&setNumberOrNumberAccessor(_.x,s),i&&setNumberOrNumberAccessor(_.x0,i),m&&setNumberOrNumberAccessor(_.x1,m),l&&setNumberOrNumberAccessor(_.y,l),d&&setNumberOrNumberAccessor(_.y0,d),S&&setNumberOrNumberAccessor(_.y1,S),u&&_.defined(u),T&&_.curve(T),_}function L(e){var r=e===void 0?{}:e,s=r.x,i=r.y,m=r.defined,l=r.curve,d=d3Line();return s&&setNumberOrNumberAccessor(d.x,s),i&&setNumberOrNumberAccessor(d.y,i),m&&d.defined(m),l&&d.curve(l),d}function f(e){var r=e===void 0?{}:e,s=r.startAngle,i=r.endAngle,m=r.padAngle,l=r.value,d=r.sort,S=r.sortValues,u=(0,h.A)();return(d===null||d!=null)&&u.sort(d),(S===null||S!=null)&&u.sortValues(S),l!=null&&u.value(l),m!=null&&t(u.padAngle,m),s!=null&&t(u.startAngle,s),i!=null&&t(u.endAngle,i),u}function O(e){var r=e===void 0?{}:e,s=r.angle,i=r.radius,m=r.defined,l=r.curve,d=d3RadialLine();return s&&setNumberOrNumberAccessor(d.angle,s),i&&setNumberOrNumberAccessor(d.radius,i),m&&d.defined(m),l&&d.curve(l),d}function v(e){var r=e.keys,s=e.value,i=e.order,m=e.offset,l=d3Stack();return r&&l.keys(r),s&&setNumberOrNumberAccessor(l.value,s),i&&l.order(stackOrder(i)),m&&l.offset(stackOffset(m)),l}var y=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},A.apply(this,arguments)}function n(e,r){if(e==null)return{};var s={},i=Object.keys(e),m,l;for(l=0;l<i.length;l++)m=i[l],!(r.indexOf(m)>=0)&&(s[m]=e[m]);return s}function a(e){var r=e.className,s=e.top,i=e.left,m=e.data,l=m===void 0?[]:m,d=e.centroid,S=e.innerRadius,u=S===void 0?0:S,T=e.outerRadius,_=e.cornerRadius,j=e.startAngle,I=e.endAngle,D=e.padAngle,M=e.padRadius,w=e.pieSort,z=e.pieSortValues,U=e.pieValue,k=e.children,W=e.fill,B=W===void 0?"":W,V=n(e,y),P=o({innerRadius:u,outerRadius:T,cornerRadius:_,padRadius:M}),F=f({startAngle:j,endAngle:I,padAngle:D,value:U,sort:w,sortValues:z}),Y=F(l);return k?x.createElement(x.Fragment,null,k({arcs:Y,path:P,pie:F})):x.createElement(p.A,{className:"visx-pie-arcs-group",top:s,left:i},Y.map(function(K,H){return x.createElement("g",{key:"pie-arc-"+H},x.createElement("path",A({className:b()("visx-pie-arc",r),d:P(K)||"",fill:B==null||typeof B=="string"?B:B(K)},V)),d?.(P.centroid(K),K))}))}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((N,E,c)=>{c.d(E,{A:()=>b});function x(p){var g,h,t="";if(typeof p=="string"||typeof p=="number")t+=p;else if(typeof p=="object")if(Array.isArray(p)){var o=p.length;for(g=0;g<o;g++)p[g]&&(h=x(p[g]))&&(t&&(t+=" "),t+=h)}else for(h in p)p[h]&&(t&&(t+=" "),t+=h);return t}function C(){for(var p,g,h=0,t="",o=arguments.length;h<o;h++)(p=arguments[h])&&(g=x(p))&&(t&&(t+=" "),t+=g);return t}const b=C}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(N=>{var E=function(a){return c(a)&&!x(a)};function c(n){return!!n&&typeof n=="object"}function x(n){var a=Object.prototype.toString.call(n);return a==="[object RegExp]"||a==="[object Date]"||p(n)}var C=typeof Symbol=="function"&&Symbol.for,b=C?Symbol.for("react.element"):60103;function p(n){return n.$$typeof===b}function g(n){return Array.isArray(n)?[]:{}}function h(n,a){return a.clone!==!1&&a.isMergeableObject(n)?y(g(n),n,a):n}function t(n,a,e){return n.concat(a).map(function(r){return h(r,e)})}function o(n,a){if(!a.customMerge)return y;var e=a.customMerge(n);return typeof e=="function"?e:y}function R(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(a){return Object.propertyIsEnumerable.call(n,a)}):[]}function L(n){return Object.keys(n).concat(R(n))}function f(n,a){try{return a in n}catch{return!1}}function O(n,a){return f(n,a)&&!(Object.hasOwnProperty.call(n,a)&&Object.propertyIsEnumerable.call(n,a))}function v(n,a,e){var r={};return e.isMergeableObject(n)&&L(n).forEach(function(s){r[s]=h(n[s],e)}),L(a).forEach(function(s){O(n,s)||(f(n,s)&&e.isMergeableObject(a[s])?r[s]=o(s,e)(n[s],a[s],e):r[s]=h(a[s],e))}),r}function y(n,a,e){e=e||{},e.arrayMerge=e.arrayMerge||t,e.isMergeableObject=e.isMergeableObject||E,e.cloneUnlessOtherwiseSpecified=h;var r=Array.isArray(a),s=Array.isArray(n),i=r===s;return i?r?e.arrayMerge(n,a,e):v(n,a,e):h(a,e)}y.all=function(a,e){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(r,s){return y(r,s,e)},{})};var A=y;N.exports=A}),"../charts/src/components/legend/stories/index.stories.tsx":((N,E,c)=>{c.r(E),c.d(E,{AlignmentOptions:()=>d,CustomShape:()=>u,DashboardExample:()=>l,Horizontal:()=>y,StandaloneLegendWithChartId:()=>i,TextOverflow:()=>S,Vertical:()=>A,WithBarChart:()=>r,WithLineChart:()=>a,__namedExportsOrder:()=>T,default:()=>L});var x=c("../charts/src/stories/chart-decorator.tsx"),C=c("../charts/src/stories/theme-config.tsx"),b=c("../charts/src/components/bar-chart/bar-chart.tsx"),p=c("../charts/src/components/line-chart/line-chart.tsx"),g=c("../charts/src/components/pie-chart/pie-chart.tsx"),h=c("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),t=c("../charts/src/components/legend/legend.tsx"),o=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts/Composites/Legend",component:t.s,parameters:{layout:"centered"},decorators:[x.cg],argTypes:{...C.jW}},f=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],O=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],v=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],y={render:_=>{const{themeName:j,accentColor:I,...D}=_;return(0,o.jsx)(t.s,{...D})},args:{...C.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},A={render:_=>{const{themeName:j,accentColor:I,...D}=_;return(0,o.jsx)(t.s,{...D})},args:{...C.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},n=()=>{const _=(0,h.f)(f,{showValues:!1});return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,o.jsx)(p.A,{data:f,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,o.jsx)(t.s,{items:_,orientation:"horizontal",shape:"line"})]})},a={render:()=>(0,o.jsx)(n,{})},e=()=>{const _=(0,h.f)(O);return(0,o.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,o.jsx)(b.A,{data:O,showLegend:!1,width:400,height:300}),(0,o.jsx)(t.s,{items:_,orientation:"vertical"})]})},r={render:()=>(0,o.jsx)(e,{})},s=()=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,o.jsx)(p.A,{chartId:"standalone-legend-chart",data:f,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,o.jsx)(t.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),i={render:()=>(0,o.jsx)(s,{})},m=()=>(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,o.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,o.jsx)(p.A,{chartId:"dashboard-revenue",data:f,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,o.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,o.jsx)(b.A,{chartId:"dashboard-sales",data:O,showLegend:!1,width:280,height:200})]}),(0,o.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,o.jsx)(g.A,{chartId:"dashboard-devices",data:v,showLegend:!1})]})]})]}),(0,o.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,o.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,o.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,o.jsx)(t.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,o.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,o.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,o.jsx)(t.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,o.jsx)(t.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),l={render:()=>(0,o.jsx)(m,{}),parameters:{layout:"fullscreen"}},d={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"}},S={render:_=>{const{themeName:j,maxWidth:I,...D}=_,M=_.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},w=I?`Legend with ${_.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${I})`:"Legend without maxWidth constraint";return(0,o.jsxs)("div",{style:M,children:[(0,o.jsx)("h4",{style:{marginBottom:"10px"},children:w}),(0,o.jsx)(t.s,{...D,maxWidth:I})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},maxWidth:{control:{type:"range",min:0,max:300,step:10}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"]},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},u={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"}},T=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      accentColor,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
  args: {
    ...sharedThemeArgs,
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
}`,...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      accentColor,
      ...legendProps
    } = args;
    return <Legend {...legendProps} />;
  },
  args: {
    ...sharedThemeArgs,
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
}`,...A.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />
}`,...a.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }
}`,...d.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      options: ['horizontal', 'vertical']
    },
    maxWidth: {
      control: {
        type: 'range',
        min: 0,
        max: 300,
        step: 10
      }
    },
    textOverflow: {
      control: {
        type: 'radio'
      },
      options: ['wrap', 'ellipsis']
    },
    position: {
      control: {
        type: 'radio'
      },
      options: ['top', 'bottom']
    },
    alignment: {
      control: {
        type: 'radio'
      },
      options: ['start', 'center', 'end']
    }
  }
}`,...S.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }
}`,...u.parameters?.docs?.source}}}}),"../charts/src/stories/chart-decorator.tsx":((N,E,c)=>{c.d(E,{OI:()=>h,cg:()=>R,xo:()=>L});var x=c("../number-formatters/src/index.ts"),C=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=c("../charts/src/providers/chart-context/global-charts-provider.tsx"),p=c("../charts/src/stories/theme-config.tsx"),g=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=(f,O)=>{const v=O.args;return R(()=>(0,g.jsx)("div",{style:{resize:v.resize||"both",overflow:"auto",padding:"1rem",width:v.containerWidth||"800px",height:v.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,g.jsx)(f,{})}),O)},t=f=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(f),o=({children:f,themeName:O="default",accentColor:v=p.Zs})=>{(0,C.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,x.xS)(window.navigator.language)},[]);const y=p.yI[O],A=t(v)?v:p.Zs,n=O==="custom"?`custom-${A}`:O;return(0,g.jsxs)(g.Fragment,{children:[O==="custom"&&(0,g.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand: ${A};
						}
					`}),(0,g.jsx)(b.S,{theme:y,children:f},n)]})},R=(f,{args:O})=>{const v=O,y=v.themeName,A=v.accentColor;return(0,g.jsx)(o,{themeName:y,accentColor:A,children:(0,g.jsx)(f,{})})},L={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{h.displayName="chartDecorator",h.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:h.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{R.displayName="simpleChartDecorator",R.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:R.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{L.displayName="sharedChartArgTypes",L.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:L.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((N,E,c)=>{c.d(E,{In:()=>h,Zs:()=>C,jW:()=>g,yI:()=>p});var x=c("../charts/src/providers/chart-context/themes.ts");const C="#4a19ab",b={colors:["--wpds-color-bg-interactive-brand"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},p={default:x.zQ,jetpack:x.QI,woo:x.pk,custom:b},g={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:C,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},h={themeName:"default",accentColor:C};try{C.displayName="DEFAULT_ACCENT_COLOR",C.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:C.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{b.displayName="customTheme",b.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:b.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{g.displayName="themeArgTypes",g.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:g.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}try{h.displayName="sharedThemeArgs",h.__docgenInfo={description:`Shared default args for theme-related controls in chart stories
These provide actual default values that appear in Storybook controls`,displayName:"sharedThemeArgs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sharedThemeArgs"]={docgenInfo:h.__docgenInfo,name:"sharedThemeArgs",path:"../charts/src/stories/theme-config.tsx#sharedThemeArgs"})}catch{}})}]);
