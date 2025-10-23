"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":((R,O,h)=>{h.d(O,{A:()=>s});var y=h("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=h("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),S=h.n(C),d=h("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),i=h("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),m=h("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function a(e,r){e(r)}function t(e){var r=e===void 0?{}:e,o=r.innerRadius,l=r.outerRadius,g=r.cornerRadius,c=r.startAngle,p=r.endAngle,_=r.padAngle,u=r.padRadius,x=(0,i.A)();return o!=null&&a(x.innerRadius,o),l!=null&&a(x.outerRadius,l),g!=null&&a(x.cornerRadius,g),c!=null&&a(x.startAngle,c),p!=null&&a(x.endAngle,p),_!=null&&a(x.padAngle,_),u!=null&&a(x.padRadius,u),x}function v(e){var r=e===void 0?{}:e,o=r.x,l=r.x0,g=r.x1,c=r.y,p=r.y0,_=r.y1,u=r.defined,x=r.curve,f=d3Area();return o&&setNumberOrNumberAccessor(f.x,o),l&&setNumberOrNumberAccessor(f.x0,l),g&&setNumberOrNumberAccessor(f.x1,g),c&&setNumberOrNumberAccessor(f.y,c),p&&setNumberOrNumberAccessor(f.y0,p),_&&setNumberOrNumberAccessor(f.y1,_),u&&f.defined(u),x&&f.curve(x),f}function L(e){var r=e===void 0?{}:e,o=r.x,l=r.y,g=r.defined,c=r.curve,p=d3Line();return o&&setNumberOrNumberAccessor(p.x,o),l&&setNumberOrNumberAccessor(p.y,l),g&&p.defined(g),c&&p.curve(c),p}function T(e){var r=e===void 0?{}:e,o=r.startAngle,l=r.endAngle,g=r.padAngle,c=r.value,p=r.sort,_=r.sortValues,u=(0,m.A)();return(p===null||p!=null)&&u.sort(p),(_===null||_!=null)&&u.sortValues(_),c!=null&&u.value(c),g!=null&&a(u.padAngle,g),o!=null&&a(u.startAngle,o),l!=null&&a(u.endAngle,l),u}function I(e){var r=e===void 0?{}:e,o=r.angle,l=r.radius,g=r.defined,c=r.curve,p=d3RadialLine();return o&&setNumberOrNumberAccessor(p.angle,o),l&&setNumberOrNumberAccessor(p.radius,l),g&&p.defined(g),c&&p.curve(c),p}function D(e){var r=e.keys,o=e.value,l=e.order,g=e.offset,c=d3Stack();return r&&c.keys(r),o&&setNumberOrNumberAccessor(c.value,o),l&&c.order(stackOrder(l)),g&&c.offset(stackOffset(g)),c}var b=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},A.apply(this,arguments)}function n(e,r){if(e==null)return{};var o={},l=Object.keys(e),g,c;for(c=0;c<l.length;c++)g=l[c],!(r.indexOf(g)>=0)&&(o[g]=e[g]);return o}function s(e){var r=e.className,o=e.top,l=e.left,g=e.data,c=g===void 0?[]:g,p=e.centroid,_=e.innerRadius,u=_===void 0?0:_,x=e.outerRadius,f=e.cornerRadius,B=e.startAngle,E=e.endAngle,M=e.padAngle,k=e.padRadius,K=e.pieSort,z=e.pieSortValues,V=e.pieValue,w=e.children,P=e.fill,j=P===void 0?"":P,H=n(e,b),W=t({innerRadius:u,outerRadius:x,cornerRadius:f,padRadius:k}),Y=T({startAngle:B,endAngle:E,padAngle:M,value:V,sort:K,sortValues:z}),F=Y(c);return w?y.createElement(y.Fragment,null,w({arcs:F,path:W,pie:Y})):y.createElement(d.A,{className:"visx-pie-arcs-group",top:o,left:l},F.map(function(N,U){return y.createElement("g",{key:"pie-arc-"+U},y.createElement("path",A({className:S()("visx-pie-arc",r),d:W(N)||"",fill:j==null||typeof j=="string"?j:j(N)},H)),p?.(W.centroid(N),N))}))}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((R,O,h)=>{h.d(O,{A:()=>S});function y(d){var i,m,a="";if(typeof d=="string"||typeof d=="number")a+=d;else if(typeof d=="object")if(Array.isArray(d)){var t=d.length;for(i=0;i<t;i++)d[i]&&(m=y(d[i]))&&(a&&(a+=" "),a+=m)}else for(m in d)d[m]&&(a&&(a+=" "),a+=m);return a}function C(){for(var d,i,m=0,a="",t=arguments.length;m<t;m++)(d=arguments[m])&&(i=y(d))&&(a&&(a+=" "),a+=i);return a}const S=C}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(R=>{var O=function(s){return h(s)&&!y(s)};function h(n){return!!n&&typeof n=="object"}function y(n){var s=Object.prototype.toString.call(n);return s==="[object RegExp]"||s==="[object Date]"||d(n)}var C=typeof Symbol=="function"&&Symbol.for,S=C?Symbol.for("react.element"):60103;function d(n){return n.$$typeof===S}function i(n){return Array.isArray(n)?[]:{}}function m(n,s){return s.clone!==!1&&s.isMergeableObject(n)?b(i(n),n,s):n}function a(n,s,e){return n.concat(s).map(function(r){return m(r,e)})}function t(n,s){if(!s.customMerge)return b;var e=s.customMerge(n);return typeof e=="function"?e:b}function v(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(s){return Object.propertyIsEnumerable.call(n,s)}):[]}function L(n){return Object.keys(n).concat(v(n))}function T(n,s){try{return s in n}catch{return!1}}function I(n,s){return T(n,s)&&!(Object.hasOwnProperty.call(n,s)&&Object.propertyIsEnumerable.call(n,s))}function D(n,s,e){var r={};return e.isMergeableObject(n)&&L(n).forEach(function(o){r[o]=m(n[o],e)}),L(s).forEach(function(o){I(n,o)||(T(n,o)&&e.isMergeableObject(s[o])?r[o]=t(o,e)(n[o],s[o],e):r[o]=m(s[o],e))}),r}function b(n,s,e){e=e||{},e.arrayMerge=e.arrayMerge||a,e.isMergeableObject=e.isMergeableObject||O,e.cloneUnlessOtherwiseSpecified=m;var r=Array.isArray(s),o=Array.isArray(n),l=r===o;return l?r?e.arrayMerge(n,s,e):D(n,s,e):m(s,e)}b.all=function(s,e){if(!Array.isArray(s))throw new Error("first argument should be an array");return s.reduce(function(r,o){return b(r,o,e)},{})};var A=b;R.exports=A}),"../charts/src/components/legend/stories/index.stories.tsx":((R,O,h)=>{h.r(O),h.d(O,{AlignmentOptions:()=>p,CustomShape:()=>u,DashboardExample:()=>c,Horizontal:()=>b,StandaloneLegendWithChartId:()=>l,TextOverflow:()=>_,Vertical:()=>A,WithBarChart:()=>r,WithLineChart:()=>s,__namedExportsOrder:()=>x,default:()=>L});var y=h("../charts/src/stories/chart-decorator.tsx"),C=h("../charts/src/stories/theme-config.tsx"),S=h("../charts/src/components/bar-chart/bar-chart.tsx"),d=h("../charts/src/components/line-chart/line-chart.tsx"),i=h("../charts/src/components/pie-chart/pie-chart.tsx"),m=h("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),a=h("../charts/src/components/legend/legend.tsx"),t=h("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L={title:"JS Packages/Charts/Composites/Legend",component:a.s,parameters:{layout:"centered"},decorators:[y.cg],argTypes:{...C.jW}},T=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],I=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],D=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],b={render:f=>{const{themeName:B,...E}=f;return(0,t.jsx)(a.s,{...E})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},A={render:f=>{const{themeName:B,...E}=f;return(0,t.jsx)(a.s,{...E})},args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},n=()=>{const f=(0,m.f)(T,{showValues:!1});return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(d.A,{data:T,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(a.s,{items:f,orientation:"horizontal",shape:"line"})]})},s={render:()=>(0,t.jsx)(n,{})},e=()=>{const f=(0,m.f)(I);return(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,t.jsx)(S.A,{data:I,showLegend:!1,width:400,height:300}),(0,t.jsx)(a.s,{items:f,orientation:"vertical"})]})},r={render:()=>(0,t.jsx)(e,{})},o=()=>(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsx)(d.A,{chartId:"standalone-legend-chart",data:T,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,t.jsx)(a.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),l={render:()=>(0,t.jsx)(o,{})},g=()=>(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,t.jsx)(d.A,{chartId:"dashboard-revenue",data:T,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,t.jsx)(S.A,{chartId:"dashboard-sales",data:I,showLegend:!1,width:280,height:200})]}),(0,t.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,t.jsx)(i.A,{chartId:"dashboard-devices",data:D,showLegend:!1})]})]})]}),(0,t.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,t.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,t.jsx)(a.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,t.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,t.jsx)(a.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,t.jsx)(a.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),c={render:()=>(0,t.jsx)(g,{}),parameters:{layout:"fullscreen"}},p={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"}},_={render:f=>{const{themeName:B,maxWidth:E,...M}=f,k=f.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},K=E?`Legend with ${f.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${E})`:"Legend without maxWidth constraint";return(0,t.jsxs)("div",{style:k,children:[(0,t.jsx)("h4",{style:{marginBottom:"10px"},children:K}),(0,t.jsx)(a.s,{...M,maxWidth:E})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},maxWidth:{control:{type:"range",min:0,max:300,step:10}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"]},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},u={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"}},x=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />
}`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />
}`,...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...l.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...c.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}}),"../charts/src/stories/chart-decorator.tsx":((R,O,h)=>{h.d(O,{OI:()=>d,cg:()=>i,xo:()=>m});var y=h("../charts/src/providers/chart-context/global-charts-provider.tsx"),C=h("../charts/src/stories/theme-config.tsx"),S=h("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(a,t)=>{const v=t.args;return i(()=>(0,S.jsx)("div",{style:{resize:v.resize||"both",overflow:"auto",padding:"1rem",width:v.containerWidth||"800px",height:v.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,S.jsx)(a,{})}),t)},i=(a,{args:t})=>{const v=t.themeName,L=C.yI[v||"default"];return(0,S.jsx)(y.S,{theme:L,children:(0,S.jsx)(a,{})})},m={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{d.displayName="chartDecorator",d.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:d.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{i.displayName="simpleChartDecorator",i.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:i.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{m.displayName="sharedChartArgTypes",m.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:m.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((R,O,h)=>{h.d(O,{jW:()=>d,yI:()=>S});var y=h("../charts/src/providers/chart-context/themes.ts");const C={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},S={default:y.zQ,jetpack:y.QI,woo:y.pk,custom:C},d={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{C.displayName="customTheme",C.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:C.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{S.displayName="CHART_THEME_MAP",S.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:S.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{d.displayName="themeArgTypes",d.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:d.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}})}]);
