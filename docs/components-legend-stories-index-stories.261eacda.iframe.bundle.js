"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx"(K,I,p){p.r(I),p.d(I,{AlignmentOptions:()=>k,CustomShape:()=>r,DashboardExample:()=>j,Default:()=>C,InteractiveLegend:()=>y,StandaloneLegendWithChartId:()=>s,TextOverflow:()=>N,Vertical:()=>x,WithBarChart:()=>t,WithLineChart:()=>v,__namedExportsOrder:()=>o,default:()=>D});var O=p("../charts/src/charts/bar-chart/bar-chart.tsx"),g=p("../charts/src/charts/line-chart/line-chart.tsx"),L=p("../charts/src/charts/pie-chart/pie-chart.tsx"),m=p("../charts/src/stories/chart-decorator.tsx"),a=p("../charts/src/stories/theme-config.tsx"),i=p("../charts/src/components/legend/legend.tsx"),e=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D={title:"JS Packages/Charts Library/Components/Legend",component:i.s,parameters:{layout:"centered"},decorators:[m.cg],argTypes:{...a.jW}},R=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],A=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],_=[{label:"Desktop",value:65},{label:"Mobile",value:35}],C={render:c=>{const{themeName:h,accentColor:u,...d}=c;return(0,e.jsx)(i.s,{...d})},args:{...a.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}]}},x={render:c=>{const{themeName:h,accentColor:u,...d}=c;return(0,e.jsx)(i.s,{...d})},args:{...a.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},v={render:()=>(0,e.jsx)(g.A,{data:R,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,chartId:"legend-line-chart",children:(0,e.jsx)(g.A.Legend,{})})},t={render:()=>(0,e.jsx)(O.A,{data:A,width:400,height:300,chartId:"legend-bar-chart",children:(0,e.jsx)(O.A.Legend,{})})},n=()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,e.jsx)(g.A,{chartId:"standalone-legend-chart",data:R,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,e.jsx)(i.s,{chartId:"standalone-legend-chart",shape:"line"})]}),s={render:()=>(0,e.jsx)(n,{})},S=()=>(0,e.jsx)(g.A,{chartId:"interactive-legend-demo",data:R,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!0}}),y={render:()=>(0,e.jsx)(S,{})},w=()=>(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,e.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,e.jsx)(g.A,{chartId:"dashboard-revenue",data:R,showLegend:!1,height:300,withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,e.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,e.jsx)(O.A,{chartId:"dashboard-sales",data:A,showLegend:!1,height:300})]}),(0,e.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,e.jsx)(L.A,{chartId:"dashboard-devices",data:_,showLegend:!1,height:300})]})]})]}),(0,e.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,e.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,e.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,e.jsx)(i.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,e.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,e.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,e.jsx)(i.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,e.jsx)(i.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),j={render:()=>(0,e.jsx)(w,{}),parameters:{layout:"fullscreen"}},k={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],alignment:"start"}},N={render:c=>{const{themeName:h,accentColor:u,...d}=c,f=c.labelStyles?.maxWidth,T=c.labelStyles?.textOverflow,b=c.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},E=f?`Legend with ${T==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${f})`:"Legend without maxWidth constraint";return(0,e.jsxs)("div",{style:b,children:[(0,e.jsx)("h4",{style:{marginBottom:"10px"},children:E}),(0,e.jsx)(i.s,{...d})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",labelStyles:{maxWidth:"150px",textOverflow:"wrap"},position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},labelStyles:{control:"object"},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},r={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],shape:"circle"}},o=["Default","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","InteractiveLegend","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    }]
  }
}`,...C.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart data={lineChartData} width={600} height={300} withGradientFill={false} withLegendGlyph={false} chartId="legend-line-chart">
            <LineChart.Legend />
        </LineChart>
}`,...v.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <BarChart data={barChartData} width={400} height={300} chartId="legend-bar-chart">
            <BarChart.Legend />
        </BarChart>
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...s.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLegendComponent />
}`,...y.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...j.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    alignment: 'start'
  }
}`,...k.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      themeName,
      accentColor,
      ...legendProps
    } = args;
    const maxWidth = args.labelStyles?.maxWidth;
    const textOverflow = args.labelStyles?.textOverflow;
    const containerStyle = args.orientation === 'horizontal' ? {
      width: '600px',
      border: '1px solid #ddd',
      padding: '20px'
    } : {
      width: '350px',
      border: '1px solid #ddd',
      padding: '20px'
    };
    const titleText = maxWidth ? \`Legend with \${textOverflow === 'ellipsis' ? 'Ellipsis' : 'Text Wrapping'} (maxWidth: \${maxWidth})\` : 'Legend without maxWidth constraint';
    return <div style={containerStyle}>
                <h4 style={{
        marginBottom: '10px'
      }}>{titleText}</h4>
                <Legend {...legendProps} />
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
    labelStyles: {
      maxWidth: '150px',
      textOverflow: 'wrap'
    },
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
    labelStyles: {
      control: 'object'
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
}`,...N.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    shape: 'circle'
  }
}`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(K,I,p){p.d(I,{A:()=>N});var O=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=p("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),L=p.n(g),m=p("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=p("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),i=p("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function e(r,o){r(o)}var l,D,R,A,_,C,x;function v(r){var o=r===void 0?{}:r,c=o.innerRadius,h=o.outerRadius,u=o.cornerRadius,d=o.startAngle,f=o.endAngle,T=o.padAngle,b=o.padRadius,E=(0,a.A)();return c!=null&&e(E.innerRadius,c),h!=null&&e(E.outerRadius,h),u!=null&&e(E.cornerRadius,u),d!=null&&e(E.startAngle,d),f!=null&&e(E.endAngle,f),T!=null&&e(E.padAngle,T),b!=null&&e(E.padRadius,b),E}function t(r){var o=r===void 0?{}:r,c=o.x,h=o.x0,u=o.x1,d=o.y,f=o.y0,T=o.y1,b=o.defined,E=o.curve,B=l();return c&&_(B.x,c),h&&_(B.x0,h),u&&_(B.x1,u),d&&_(B.y,d),f&&_(B.y0,f),T&&_(B.y1,T),b&&B.defined(b),E&&B.curve(E),B}function n(r){var o=r===void 0?{}:r,c=o.x,h=o.y,u=o.defined,d=o.curve,f=D();return c&&_(f.x,c),h&&_(f.y,h),u&&f.defined(u),d&&f.curve(d),f}function s(r){var o=r===void 0?{}:r,c=o.startAngle,h=o.endAngle,u=o.padAngle,d=o.value,f=o.sort,T=o.sortValues,b=(0,i.A)();return(f===null||f!=null)&&b.sort(f),(T===null||T!=null)&&b.sortValues(T),d!=null&&b.value(d),u!=null&&e(b.padAngle,u),c!=null&&e(b.startAngle,c),h!=null&&e(b.endAngle,h),b}function S(r){var o=r===void 0?{}:r,c=o.angle,h=o.radius,u=o.defined,d=o.curve,f=R();return c&&_(f.angle,c),h&&_(f.radius,h),u&&f.defined(u),d&&f.curve(d),f}function y(r){var o=r.keys,c=r.value,h=r.order,u=r.offset,d=A();return o&&d.keys(o),c&&_(d.value,c),h&&d.order(C(h)),u&&d.offset(x(u)),d}var w=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function j(){return j=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(r[h]=c[h])}return r},j.apply(this,arguments)}function k(r,o){if(r==null)return{};var c={},h=Object.keys(r),u,d;for(d=0;d<h.length;d++)u=h[d],!(o.indexOf(u)>=0)&&(c[u]=r[u]);return c}function N(r){var o=r.className,c=r.top,h=r.left,u=r.data,d=u===void 0?[]:u,f=r.centroid,T=r.innerRadius,b=T===void 0?0:T,E=r.outerRadius,B=r.cornerRadius,V=r.startAngle,G=r.endAngle,H=r.padAngle,$=r.padRadius,Q=r.pieSort,J=r.pieSortValues,X=r.pieValue,W=r.children,Y=r.fill,M=Y===void 0?"":Y,Z=k(r,w),P=v({innerRadius:b,outerRadius:E,cornerRadius:B,padRadius:$}),U=s({startAngle:V,endAngle:G,padAngle:H,value:X,sort:Q,sortValues:J}),z=U(d);return W?O.createElement(O.Fragment,null,W({arcs:z,path:P,pie:U})):O.createElement(m.A,{className:"visx-pie-arcs-group",top:c,left:h},z.map(function(F,q){return O.createElement("g",{key:"pie-arc-"+q},O.createElement("path",j({className:L()("visx-pie-arc",o),d:P(F)||"",fill:M==null||typeof M=="string"?M:M(F)},Z)),f?.(P.centroid(F),F))}))}},"../charts/src/stories/chart-decorator.tsx"(K,I,p){p.d(I,{OI:()=>i,cg:()=>D,xo:()=>R});var O=p("../number-formatters/src/index.ts"),g=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=p("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=p("../charts/src/stories/theme-config.tsx"),a=p("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(A,_)=>{const C=_.args,x=C.withPadding!==!1,v=C.showOffsetTestButtons===!0;return D(()=>{const n=(0,g.useRef)(null),s=(0,g.useRef)({x:0,y:0}),S=(0,g.useCallback)((r,o)=>{n.current&&(s.current.x+=r,s.current.y+=o,n.current.style.transform=`translate(${s.current.x}px, ${s.current.y}px)`)},[]),y=(0,g.useCallback)(()=>{n.current&&(s.current={x:0,y:0},n.current.style.transform="")},[]),w=(0,g.useCallback)(()=>S(-50,0),[S]),j=(0,g.useCallback)(()=>S(50,0),[S]),k=(0,g.useCallback)(()=>S(0,-50),[S]),N=(0,g.useCallback)(()=>S(0,50),[S]);return(0,a.jsxs)(a.Fragment,{children:[v&&(0,a.jsxs)("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,a.jsx)("span",{style:{fontSize:"12px",color:"#666",alignSelf:"center"},children:"Move container (no re-render):"}),(0,a.jsx)("button",{type:"button",onClick:w,children:"\u2190 Left"}),(0,a.jsx)("button",{type:"button",onClick:j,children:"Right \u2192"}),(0,a.jsx)("button",{type:"button",onClick:k,children:"\u2191 Up"}),(0,a.jsx)("button",{type:"button",onClick:N,children:"Down \u2193"}),(0,a.jsx)("button",{type:"button",onClick:y,children:"Reset"})]}),(0,a.jsx)("div",{ref:n,style:{resize:C.resize||"both",overflow:"auto",padding:x?"1rem":void 0,width:C.containerWidth||"800px",height:C.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(A,{})})]})},_)},e=A=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(A),l=({children:A,themeName:_="default",accentColor:C=m.Zs})=>{(0,g.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,O.xS)(window.navigator.language)},[]);const x=m.yI[_],v=e(C)?C:m.Zs,t=_==="custom"?`custom-${v}`:_;return(0,a.jsxs)(a.Fragment,{children:[_==="custom"&&(0,a.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand-weak: ${v};
						}
					`}),(0,a.jsx)(L.S,{theme:x,children:A},t)]})},D=(A,{args:_})=>{const C=_,x=C.themeName,v=C.accentColor;return(0,a.jsx)(l,{themeName:x,accentColor:v,children:(0,a.jsx)(A,{})})},R={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},showOffsetTestButtons:{control:"boolean",description:"Show buttons to move the container via DOM manipulation (no re-render) for testing tooltip positioning",table:{category:"Testing"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{i.displayName="chartDecorator",i.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:i.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{D.displayName="simpleChartDecorator",D.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:D.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{R.displayName="sharedChartArgTypes",R.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:R.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx"(K,I,p){p.d(I,{In:()=>e,Zs:()=>g,jW:()=>i,yI:()=>a});var O=p("../charts/src/providers/chart-context/themes.ts");const g="#4a19ab",L={colors:["var(--wpds-color-bg-interactive-brand-weak)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},m={colors:["#e63946","rgb(42, 157, 143)","hsl(48, 96%, 53%)","rgba(38, 70, 83, 0.9)","steelblue","hsl(280, 60%, 50%)","rgb(244, 162, 97)"],backgroundColor:"hsl(0, 0%, 98%)",gridColor:"rgba(0, 0, 0, 0.1)",gridColorDark:"rgba(255, 255, 255, 0.15)",gridStyles:{stroke:"rgb(200, 200, 200)",strokeWidth:1},geoChart:{featureFillColor:"hsl(0, 0%, 93%)"},leaderboardChart:{primaryColor:"rgb(42, 157, 143)",secondaryColor:"rgb(148, 206, 199)",deltaColors:["hsl(0, 70%, 50%)","rgb(150, 150, 150)","#2a9d8f"]},conversionFunnelChart:{primaryColor:"hsl(200, 60%, 45%)",positiveChangeColor:"rgb(42, 157, 143)",negativeChangeColor:"hsl(0, 70%, 50%)"}},a={default:O.z,custom:L,"mixed-color-formats":m},i={themeName:{control:{type:"select"},options:Object.keys(a),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:g,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},e={themeName:"default",accentColor:g};try{g.displayName="DEFAULT_ACCENT_COLOR",g.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:g.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{L.displayName="customTheme",L.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:L.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legend.displayName="legend",legend.__docgenInfo={description:"Legend specific settings",displayName:"legend",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legend"]={docgenInfo:legend.__docgenInfo,name:"legend",path:"../charts/src/stories/theme-config.tsx#legend"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{m.displayName="mixedColorFormatsTheme",m.__docgenInfo={description:`Theme that uses a variety of color formats (hex, RGB, RGBA, HSL, named)
to demonstrate and test color normalization support.`,displayName:"mixedColorFormatsTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#mixedColorFormatsTheme"]={docgenInfo:m.__docgenInfo,name:"mixedColorFormatsTheme",path:"../charts/src/stories/theme-config.tsx#mixedColorFormatsTheme"})}catch{}try{a.displayName="CHART_THEME_MAP",a.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:a.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{i.displayName="themeArgTypes",i.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:i.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(K,I,p){p.d(I,{A:()=>L});function O(m){var a,i,e="";if(typeof m=="string"||typeof m=="number")e+=m;else if(typeof m=="object")if(Array.isArray(m)){var l=m.length;for(a=0;a<l;a++)m[a]&&(i=O(m[a]))&&(e&&(e+=" "),e+=i)}else for(i in m)m[i]&&(e&&(e+=" "),e+=i);return e}function g(){for(var m,a,i=0,e="",l=arguments.length;i<l;i++)(m=arguments[i])&&(a=O(m))&&(e&&(e+=" "),e+=a);return e}const L=g},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(K){var I=function(n){return p(n)&&!O(n)};function p(t){return!!t&&typeof t=="object"}function O(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||m(t)}var g=typeof Symbol=="function"&&Symbol.for,L=g?Symbol.for("react.element"):60103;function m(t){return t.$$typeof===L}function a(t){return Array.isArray(t)?[]:{}}function i(t,n){return n.clone!==!1&&n.isMergeableObject(t)?x(a(t),t,n):t}function e(t,n,s){return t.concat(n).map(function(S){return i(S,s)})}function l(t,n){if(!n.customMerge)return x;var s=n.customMerge(t);return typeof s=="function"?s:x}function D(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return Object.propertyIsEnumerable.call(t,n)}):[]}function R(t){return Object.keys(t).concat(D(t))}function A(t,n){try{return n in t}catch{return!1}}function _(t,n){return A(t,n)&&!(Object.hasOwnProperty.call(t,n)&&Object.propertyIsEnumerable.call(t,n))}function C(t,n,s){var S={};return s.isMergeableObject(t)&&R(t).forEach(function(y){S[y]=i(t[y],s)}),R(n).forEach(function(y){_(t,y)||(A(t,y)&&s.isMergeableObject(n[y])?S[y]=l(y,s)(t[y],n[y],s):S[y]=i(n[y],s))}),S}function x(t,n,s){s=s||{},s.arrayMerge=s.arrayMerge||e,s.isMergeableObject=s.isMergeableObject||I,s.cloneUnlessOtherwiseSpecified=i;var S=Array.isArray(n),y=Array.isArray(t),w=S===y;return w?S?s.arrayMerge(t,n,s):C(t,n,s):i(n,s)}x.all=function(n,s){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(S,y){return x(S,y,s)},{})};var v=x;K.exports=v}}]);
