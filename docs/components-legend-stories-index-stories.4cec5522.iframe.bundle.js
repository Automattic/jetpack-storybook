"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(j,E,p){p.d(E,{A:()=>s});var O=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=p("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=p.n(u),h=p("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=p("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),m=p("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function t(e,r){e(r)}function n(e){var r=e===void 0?{}:e,a=r.innerRadius,c=r.outerRadius,g=r.cornerRadius,l=r.startAngle,d=r.endAngle,y=r.padAngle,f=r.padRadius,T=(0,i.A)();return a!=null&&t(T.innerRadius,a),c!=null&&t(T.outerRadius,c),g!=null&&t(T.cornerRadius,g),l!=null&&t(T.startAngle,l),d!=null&&t(T.endAngle,d),y!=null&&t(T.padAngle,y),f!=null&&t(T.padRadius,f),T}function R(e){var r=e===void 0?{}:e,a=r.x,c=r.x0,g=r.x1,l=r.y,d=r.y0,y=r.y1,f=r.defined,T=r.curve,_=d3Area();return a&&setNumberOrNumberAccessor(_.x,a),c&&setNumberOrNumberAccessor(_.x0,c),g&&setNumberOrNumberAccessor(_.x1,g),l&&setNumberOrNumberAccessor(_.y,l),d&&setNumberOrNumberAccessor(_.y0,d),y&&setNumberOrNumberAccessor(_.y1,y),f&&_.defined(f),T&&_.curve(T),_}function L(e){var r=e===void 0?{}:e,a=r.x,c=r.y,g=r.defined,l=r.curve,d=d3Line();return a&&setNumberOrNumberAccessor(d.x,a),c&&setNumberOrNumberAccessor(d.y,c),g&&d.defined(g),l&&d.curve(l),d}function S(e){var r=e===void 0?{}:e,a=r.startAngle,c=r.endAngle,g=r.padAngle,l=r.value,d=r.sort,y=r.sortValues,f=(0,m.A)();return(d===null||d!=null)&&f.sort(d),(y===null||y!=null)&&f.sortValues(y),l!=null&&f.value(l),g!=null&&t(f.padAngle,g),a!=null&&t(f.startAngle,a),c!=null&&t(f.endAngle,c),f}function b(e){var r=e===void 0?{}:e,a=r.angle,c=r.radius,g=r.defined,l=r.curve,d=d3RadialLine();return a&&setNumberOrNumberAccessor(d.angle,a),c&&setNumberOrNumberAccessor(d.radius,c),g&&d.defined(g),l&&d.curve(l),d}function A(e){var r=e.keys,a=e.value,c=e.order,g=e.offset,l=d3Stack();return r&&l.keys(r),a&&setNumberOrNumberAccessor(l.value,a),c&&l.order(stackOrder(c)),g&&l.offset(stackOffset(g)),l}var x=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},C.apply(this,arguments)}function o(e,r){if(e==null)return{};var a={},c=Object.keys(e),g,l;for(l=0;l<c.length;l++)g=c[l],!(r.indexOf(g)>=0)&&(a[g]=e[g]);return a}function s(e){var r=e.className,a=e.top,c=e.left,g=e.data,l=g===void 0?[]:g,d=e.centroid,y=e.innerRadius,f=y===void 0?0:y,T=e.outerRadius,_=e.cornerRadius,N=e.startAngle,I=e.endAngle,D=e.padAngle,K=e.padRadius,M=e.pieSort,z=e.pieSortValues,U=e.pieValue,P=e.children,W=e.fill,B=W===void 0?"":W,V=o(e,x),w=n({innerRadius:f,outerRadius:T,cornerRadius:_,padRadius:K}),F=S({startAngle:N,endAngle:I,padAngle:D,value:U,sort:M,sortValues:z}),Y=F(l);return P?O.createElement(O.Fragment,null,P({arcs:Y,path:w,pie:F})):O.createElement(h.A,{className:"visx-pie-arcs-group",top:a,left:c},Y.map(function(k,H){return O.createElement("g",{key:"pie-arc-"+H},O.createElement("path",C({className:v()("visx-pie-arc",r),d:w(k)||"",fill:B==null||typeof B=="string"?B:B(k)},V)),d?.(w.centroid(k),k))}))}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(j,E,p){p.d(E,{A:()=>v});function O(h){var i,m,t="";if(typeof h=="string"||typeof h=="number")t+=h;else if(typeof h=="object")if(Array.isArray(h)){var n=h.length;for(i=0;i<n;i++)h[i]&&(m=O(h[i]))&&(t&&(t+=" "),t+=m)}else for(m in h)h[m]&&(t&&(t+=" "),t+=m);return t}function u(){for(var h,i,m=0,t="",n=arguments.length;m<n;m++)(h=arguments[m])&&(i=O(h))&&(t&&(t+=" "),t+=i);return t}const v=u},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(j){var E=function(s){return p(s)&&!O(s)};function p(o){return!!o&&typeof o=="object"}function O(o){var s=Object.prototype.toString.call(o);return s==="[object RegExp]"||s==="[object Date]"||h(o)}var u=typeof Symbol=="function"&&Symbol.for,v=u?Symbol.for("react.element"):60103;function h(o){return o.$$typeof===v}function i(o){return Array.isArray(o)?[]:{}}function m(o,s){return s.clone!==!1&&s.isMergeableObject(o)?x(i(o),o,s):o}function t(o,s,e){return o.concat(s).map(function(r){return m(r,e)})}function n(o,s){if(!s.customMerge)return x;var e=s.customMerge(o);return typeof e=="function"?e:x}function R(o){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(o).filter(function(s){return Object.propertyIsEnumerable.call(o,s)}):[]}function L(o){return Object.keys(o).concat(R(o))}function S(o,s){try{return s in o}catch{return!1}}function b(o,s){return S(o,s)&&!(Object.hasOwnProperty.call(o,s)&&Object.propertyIsEnumerable.call(o,s))}function A(o,s,e){var r={};return e.isMergeableObject(o)&&L(o).forEach(function(a){r[a]=m(o[a],e)}),L(s).forEach(function(a){b(o,a)||(S(o,a)&&e.isMergeableObject(s[a])?r[a]=n(a,e)(o[a],s[a],e):r[a]=m(s[a],e))}),r}function x(o,s,e){e=e||{},e.arrayMerge=e.arrayMerge||t,e.isMergeableObject=e.isMergeableObject||E,e.cloneUnlessOtherwiseSpecified=m;var r=Array.isArray(s),a=Array.isArray(o),c=r===a;return c?r?e.arrayMerge(o,s,e):A(o,s,e):m(s,e)}x.all=function(s,e){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(r,a){return x(r,a,e)},{})};var C=x;j.exports=C},"../charts/src/components/legend/stories/index.stories.tsx"(j,E,p){p.r(E),p.d(E,{AlignmentOptions:()=>d,CustomShape:()=>f,DashboardExample:()=>l,Horizontal:()=>x,StandaloneLegendWithChartId:()=>c,TextOverflow:()=>y,Vertical:()=>C,WithBarChart:()=>r,WithLineChart:()=>s,__namedExportsOrder:()=>T,default:()=>L});var O=p("../charts/src/charts/bar-chart/bar-chart.tsx"),u=p("../charts/src/charts/line-chart/line-chart.tsx"),v=p("../charts/src/charts/pie-chart/pie-chart.tsx"),h=p("../charts/src/stories/chart-decorator.tsx"),i=p("../charts/src/stories/theme-config.tsx"),m=p("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),t=p("../charts/src/components/legend/legend.tsx"),n=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts Library/Components/Legend",component:t.s,parameters:{layout:"centered"},decorators:[h.cg],argTypes:{...i.jW}},S=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],b=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],A=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],x={render:_=>{const{themeName:N,accentColor:I,...D}=_;return(0,n.jsx)(t.s,{...D})},args:{...i.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},C={render:_=>{const{themeName:N,accentColor:I,...D}=_;return(0,n.jsx)(t.s,{...D})},args:{...i.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},o=()=>{const _=(0,m.f)(S,{showValues:!1});return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(u.A,{data:S,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(t.s,{items:_,orientation:"horizontal",shape:"line"})]})},s={render:()=>(0,n.jsx)(o,{})},e=()=>{const _=(0,m.f)(b);return(0,n.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,n.jsx)(O.A,{data:b,showLegend:!1,width:400,height:300}),(0,n.jsx)(t.s,{items:_,orientation:"vertical"})]})},r={render:()=>(0,n.jsx)(e,{})},a=()=>(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(u.A,{chartId:"standalone-legend-chart",data:S,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(t.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),c={render:()=>(0,n.jsx)(a,{})},g=()=>(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,n.jsx)(u.A,{chartId:"dashboard-revenue",data:S,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,n.jsx)(O.A,{chartId:"dashboard-sales",data:b,showLegend:!1,width:280,height:200})]}),(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,n.jsx)(v.A,{chartId:"dashboard-devices",data:A,showLegend:!1})]})]})]}),(0,n.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,n.jsx)(t.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,n.jsx)(t.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,n.jsx)(t.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),l={render:()=>(0,n.jsx)(g,{}),parameters:{layout:"fullscreen"}},d={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"}},y={render:_=>{const{themeName:N,maxWidth:I,...D}=_,K=_.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},M=I?`Legend with ${_.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${I})`:"Legend without maxWidth constraint";return(0,n.jsxs)("div",{style:K,children:[(0,n.jsx)("h4",{style:{marginBottom:"10px"},children:M}),(0,n.jsx)(t.s,{...D,maxWidth:I})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},maxWidth:{control:{type:"range",min:0,max:300,step:10}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"]},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},f={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"}},T=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />
}`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />
}`,...r.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}},"../charts/src/stories/chart-decorator.tsx"(j,E,p){p.d(E,{OI:()=>m,cg:()=>R,xo:()=>L});var O=p("../number-formatters/src/index.ts"),u=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=p("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=p("../charts/src/stories/theme-config.tsx"),i=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=(S,b)=>{const A=b.args,x=A.withPadding!==!1,C=A.showOffsetTestButtons===!0;return R(()=>{const s=(0,u.useRef)(null),e=(0,u.useRef)({x:0,y:0}),r=(0,u.useCallback)((y,f)=>{s.current&&(e.current.x+=y,e.current.y+=f,s.current.style.transform=`translate(${e.current.x}px, ${e.current.y}px)`)},[]),a=(0,u.useCallback)(()=>{s.current&&(e.current={x:0,y:0},s.current.style.transform="")},[]),c=(0,u.useCallback)(()=>r(-50,0),[r]),g=(0,u.useCallback)(()=>r(50,0),[r]),l=(0,u.useCallback)(()=>r(0,-50),[r]),d=(0,u.useCallback)(()=>r(0,50),[r]);return(0,i.jsxs)(i.Fragment,{children:[C&&(0,i.jsxs)("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,i.jsx)("span",{style:{fontSize:"12px",color:"#666",alignSelf:"center"},children:"Move container (no re-render):"}),(0,i.jsx)("button",{type:"button",onClick:c,children:"\u2190 Left"}),(0,i.jsx)("button",{type:"button",onClick:g,children:"Right \u2192"}),(0,i.jsx)("button",{type:"button",onClick:l,children:"\u2191 Up"}),(0,i.jsx)("button",{type:"button",onClick:d,children:"Down \u2193"}),(0,i.jsx)("button",{type:"button",onClick:a,children:"Reset"})]}),(0,i.jsx)("div",{ref:s,style:{resize:A.resize||"both",overflow:"auto",padding:x?"1rem":void 0,width:A.containerWidth||"800px",height:A.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,i.jsx)(S,{})})]})},b)},t=S=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(S),n=({children:S,themeName:b="default",accentColor:A=h.Zs})=>{(0,u.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,O.xS)(window.navigator.language)},[]);const x=h.yI[b],C=t(A)?A:h.Zs,o=b==="custom"?`custom-${C}`:b;return(0,i.jsxs)(i.Fragment,{children:[b==="custom"&&(0,i.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand: ${C};
						}
					`}),(0,i.jsx)(v.S,{theme:x,children:S},o)]})},R=(S,{args:b})=>{const A=b,x=A.themeName,C=A.accentColor;return(0,i.jsx)(n,{themeName:x,accentColor:C,children:(0,i.jsx)(S,{})})},L={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},showOffsetTestButtons:{control:"boolean",description:"Show buttons to move the container via DOM manipulation (no re-render) for testing tooltip positioning",table:{category:"Testing"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{m.displayName="chartDecorator",m.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:m.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{R.displayName="simpleChartDecorator",R.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:R.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{L.displayName="sharedChartArgTypes",L.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:L.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx"(j,E,p){p.d(E,{In:()=>m,Zs:()=>u,jW:()=>i,yI:()=>h});var O=p("../charts/src/providers/chart-context/themes.ts");const u="#4a19ab",v={colors:["var(--wpds-color-bg-interactive-brand)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},h={default:O.z,custom:v},i={themeName:{control:{type:"select"},options:Object.keys(h),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:u,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},m={themeName:"default",accentColor:u};try{u.displayName="DEFAULT_ACCENT_COLOR",u.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:u.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{v.displayName="customTheme",v.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:v.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{h.displayName="CHART_THEME_MAP",h.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:h.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{i.displayName="themeArgTypes",i.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:i.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}}}]);
