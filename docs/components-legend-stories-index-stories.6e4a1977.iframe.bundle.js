"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((N,v,l)=>{l.d(v,{A:()=>a});var x=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=l("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),E=l.n(C),g=l("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=l("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),h=l("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function t(e,r){e(r)}function o(e){var r=e===void 0?{}:e,s=r.innerRadius,i=r.outerRadius,m=r.cornerRadius,c=r.startAngle,d=r.endAngle,S=r.padAngle,_=r.padRadius,T=(0,p.A)();return s!=null&&t(T.innerRadius,s),i!=null&&t(T.outerRadius,i),m!=null&&t(T.cornerRadius,m),c!=null&&t(T.startAngle,c),d!=null&&t(T.endAngle,d),S!=null&&t(T.padAngle,S),_!=null&&t(T.padRadius,_),T}function R(e){var r=e===void 0?{}:e,s=r.x,i=r.x0,m=r.x1,c=r.y,d=r.y0,S=r.y1,_=r.defined,T=r.curve,f=d3Area();return s&&setNumberOrNumberAccessor(f.x,s),i&&setNumberOrNumberAccessor(f.x0,i),m&&setNumberOrNumberAccessor(f.x1,m),c&&setNumberOrNumberAccessor(f.y,c),d&&setNumberOrNumberAccessor(f.y0,d),S&&setNumberOrNumberAccessor(f.y1,S),_&&f.defined(_),T&&f.curve(T),f}function L(e){var r=e===void 0?{}:e,s=r.x,i=r.y,m=r.defined,c=r.curve,d=d3Line();return s&&setNumberOrNumberAccessor(d.x,s),i&&setNumberOrNumberAccessor(d.y,i),m&&d.defined(m),c&&d.curve(c),d}function u(e){var r=e===void 0?{}:e,s=r.startAngle,i=r.endAngle,m=r.padAngle,c=r.value,d=r.sort,S=r.sortValues,_=(0,h.A)();return(d===null||d!=null)&&_.sort(d),(S===null||S!=null)&&_.sortValues(S),c!=null&&_.value(c),m!=null&&t(_.padAngle,m),s!=null&&t(_.startAngle,s),i!=null&&t(_.endAngle,i),_}function A(e){var r=e===void 0?{}:e,s=r.angle,i=r.radius,m=r.defined,c=r.curve,d=d3RadialLine();return s&&setNumberOrNumberAccessor(d.angle,s),i&&setNumberOrNumberAccessor(d.radius,i),m&&d.defined(m),c&&d.curve(c),d}function b(e){var r=e.keys,s=e.value,i=e.order,m=e.offset,c=d3Stack();return r&&c.keys(r),s&&setNumberOrNumberAccessor(c.value,s),i&&c.order(stackOrder(i)),m&&c.offset(stackOffset(m)),c}var y=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},O.apply(this,arguments)}function n(e,r){if(e==null)return{};var s={},i=Object.keys(e),m,c;for(c=0;c<i.length;c++)m=i[c],!(r.indexOf(m)>=0)&&(s[m]=e[m]);return s}function a(e){var r=e.className,s=e.top,i=e.left,m=e.data,c=m===void 0?[]:m,d=e.centroid,S=e.innerRadius,_=S===void 0?0:S,T=e.outerRadius,f=e.cornerRadius,B=e.startAngle,I=e.endAngle,D=e.padAngle,M=e.padRadius,k=e.pieSort,z=e.pieSortValues,U=e.pieValue,w=e.children,W=e.fill,j=W===void 0?"":W,V=n(e,y),P=o({innerRadius:_,outerRadius:T,cornerRadius:f,padRadius:M}),Y=u({startAngle:B,endAngle:I,padAngle:D,value:U,sort:k,sortValues:z}),F=Y(c);return w?x.createElement(x.Fragment,null,w({arcs:F,path:P,pie:Y})):x.createElement(g.A,{className:"visx-pie-arcs-group",top:s,left:i},F.map(function(K,H){return x.createElement("g",{key:"pie-arc-"+H},x.createElement("path",O({className:E()("visx-pie-arc",r),d:P(K)||"",fill:j==null||typeof j=="string"?j:j(K)},V)),d?.(P.centroid(K),K))}))}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((N,v,l)=>{l.d(v,{A:()=>E});function x(g){var p,h,t="";if(typeof g=="string"||typeof g=="number")t+=g;else if(typeof g=="object")if(Array.isArray(g)){var o=g.length;for(p=0;p<o;p++)g[p]&&(h=x(g[p]))&&(t&&(t+=" "),t+=h)}else for(h in g)g[h]&&(t&&(t+=" "),t+=h);return t}function C(){for(var g,p,h=0,t="",o=arguments.length;h<o;h++)(g=arguments[h])&&(p=x(g))&&(t&&(t+=" "),t+=p);return t}const E=C}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(N=>{var v=function(a){return l(a)&&!x(a)};function l(n){return!!n&&typeof n=="object"}function x(n){var a=Object.prototype.toString.call(n);return a==="[object RegExp]"||a==="[object Date]"||g(n)}var C=typeof Symbol=="function"&&Symbol.for,E=C?Symbol.for("react.element"):60103;function g(n){return n.$$typeof===E}function p(n){return Array.isArray(n)?[]:{}}function h(n,a){return a.clone!==!1&&a.isMergeableObject(n)?y(p(n),n,a):n}function t(n,a,e){return n.concat(a).map(function(r){return h(r,e)})}function o(n,a){if(!a.customMerge)return y;var e=a.customMerge(n);return typeof e=="function"?e:y}function R(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(a){return Object.propertyIsEnumerable.call(n,a)}):[]}function L(n){return Object.keys(n).concat(R(n))}function u(n,a){try{return a in n}catch{return!1}}function A(n,a){return u(n,a)&&!(Object.hasOwnProperty.call(n,a)&&Object.propertyIsEnumerable.call(n,a))}function b(n,a,e){var r={};return e.isMergeableObject(n)&&L(n).forEach(function(s){r[s]=h(n[s],e)}),L(a).forEach(function(s){A(n,s)||(u(n,s)&&e.isMergeableObject(a[s])?r[s]=o(s,e)(n[s],a[s],e):r[s]=h(a[s],e))}),r}function y(n,a,e){e=e||{},e.arrayMerge=e.arrayMerge||t,e.isMergeableObject=e.isMergeableObject||v,e.cloneUnlessOtherwiseSpecified=h;var r=Array.isArray(a),s=Array.isArray(n),i=r===s;return i?r?e.arrayMerge(n,a,e):b(n,a,e):h(a,e)}y.all=function(a,e){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(r,s){return y(r,s,e)},{})};var O=y;N.exports=O}),"../charts/src/components/legend/stories/index.stories.tsx":((N,v,l)=>{l.r(v),l.d(v,{AlignmentOptions:()=>d,CustomShape:()=>_,DashboardExample:()=>c,Horizontal:()=>y,StandaloneLegendWithChartId:()=>i,TextOverflow:()=>S,Vertical:()=>O,WithBarChart:()=>r,WithLineChart:()=>a,__namedExportsOrder:()=>T,default:()=>L});var x=l("../charts/src/charts/bar-chart/bar-chart.tsx"),C=l("../charts/src/charts/line-chart/line-chart.tsx"),E=l("../charts/src/charts/pie-chart/pie-chart.tsx"),g=l("../charts/src/stories/chart-decorator.tsx"),p=l("../charts/src/stories/theme-config.tsx"),h=l("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),t=l("../charts/src/components/legend/legend.tsx"),o=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts Library/Components/Legend",component:t.s,parameters:{layout:"centered"},decorators:[g.cg],argTypes:{...p.jW}},u=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],A=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],b=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],y={render:f=>{const{themeName:B,accentColor:I,...D}=f;return(0,o.jsx)(t.s,{...D})},args:{...p.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},O={render:f=>{const{themeName:B,accentColor:I,...D}=f;return(0,o.jsx)(t.s,{...D})},args:{...p.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},n=()=>{const f=(0,h.f)(u,{showValues:!1});return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,o.jsx)(C.A,{data:u,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,o.jsx)(t.s,{items:f,orientation:"horizontal",shape:"line"})]})},a={render:()=>(0,o.jsx)(n,{})},e=()=>{const f=(0,h.f)(A);return(0,o.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,o.jsx)(x.A,{data:A,showLegend:!1,width:400,height:300}),(0,o.jsx)(t.s,{items:f,orientation:"vertical"})]})},r={render:()=>(0,o.jsx)(e,{})},s=()=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,o.jsx)(C.A,{chartId:"standalone-legend-chart",data:u,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,o.jsx)(t.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),i={render:()=>(0,o.jsx)(s,{})},m=()=>(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,o.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,o.jsx)(C.A,{chartId:"dashboard-revenue",data:u,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,o.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,o.jsx)(x.A,{chartId:"dashboard-sales",data:A,showLegend:!1,width:280,height:200})]}),(0,o.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,o.jsx)(E.A,{chartId:"dashboard-devices",data:b,showLegend:!1})]})]})]}),(0,o.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,o.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,o.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,o.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,o.jsx)(t.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,o.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,o.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,o.jsx)(t.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,o.jsx)(t.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),c={render:()=>(0,o.jsx)(m,{}),parameters:{layout:"fullscreen"}},d={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"}},S={render:f=>{const{themeName:B,maxWidth:I,...D}=f,M=f.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},k=I?`Legend with ${f.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${I})`:"Legend without maxWidth constraint";return(0,o.jsxs)("div",{style:M,children:[(0,o.jsx)("h4",{style:{marginBottom:"10px"},children:k}),(0,o.jsx)(t.s,{...D,maxWidth:I})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},maxWidth:{control:{type:"range",min:0,max:300,step:10}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"]},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},_={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"}},T=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />
}`,...a.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...c.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}}),"../charts/src/stories/chart-decorator.tsx":((N,v,l)=>{l.d(v,{OI:()=>h,cg:()=>R,xo:()=>L});var x=l("../number-formatters/src/index.ts"),C=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=l("../charts/src/providers/chart-context/global-charts-provider.tsx"),g=l("../charts/src/stories/theme-config.tsx"),p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=(u,A)=>{const b=A.args,y=b.withPadding!==!1;return R(()=>(0,p.jsx)("div",{style:{resize:b.resize||"both",overflow:"auto",padding:y?"1rem":void 0,width:b.containerWidth||"800px",height:b.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,p.jsx)(u,{})}),A)},t=u=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(u),o=({children:u,themeName:A="default",accentColor:b=g.Zs})=>{(0,C.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,x.xS)(window.navigator.language)},[]);const y=g.yI[A],O=t(b)?b:g.Zs,n=A==="custom"?`custom-${O}`:A;return(0,p.jsxs)(p.Fragment,{children:[A==="custom"&&(0,p.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand: ${O};
						}
					`}),(0,p.jsx)(E.S,{theme:y,children:u},n)]})},R=(u,{args:A})=>{const b=A,y=b.themeName,O=b.accentColor;return(0,p.jsx)(o,{themeName:y,accentColor:O,children:(0,p.jsx)(u,{})})},L={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{h.displayName="chartDecorator",h.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:h.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{R.displayName="simpleChartDecorator",R.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:R.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{L.displayName="sharedChartArgTypes",L.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:L.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((N,v,l)=>{l.d(v,{In:()=>h,Zs:()=>C,jW:()=>p,yI:()=>g});var x=l("../charts/src/providers/chart-context/themes.ts");const C="#4a19ab",E={colors:["var(--wpds-color-bg-interactive-brand)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},g={default:x.z,custom:E},p={themeName:{control:{type:"select"},options:Object.keys(g),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:C,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},h={themeName:"default",accentColor:C};try{C.displayName="DEFAULT_ACCENT_COLOR",C.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:C.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{E.displayName="customTheme",E.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:E.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{g.displayName="CHART_THEME_MAP",g.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:g.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{p.displayName="themeArgTypes",p.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:p.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}try{h.displayName="sharedThemeArgs",h.__docgenInfo={description:`Shared default args for theme-related controls in chart stories
These provide actual default values that appear in Storybook controls`,displayName:"sharedThemeArgs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sharedThemeArgs"]={docgenInfo:h.__docgenInfo,name:"sharedThemeArgs",path:"../charts/src/stories/theme-config.tsx#sharedThemeArgs"})}catch{}})}]);
