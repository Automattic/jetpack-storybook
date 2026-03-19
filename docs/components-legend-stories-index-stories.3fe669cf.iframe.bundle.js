"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx"(M,R,d){d.r(R),d.d(R,{AlignmentOptions:()=>k,CustomShape:()=>r,DashboardExample:()=>D,Default:()=>S,InteractiveLegend:()=>_,StandaloneLegendWithChartId:()=>a,TextOverflow:()=>N,Vertical:()=>C,WithBarChart:()=>t,WithLineChart:()=>A,__namedExportsOrder:()=>n,default:()=>I});var b=d("../charts/src/charts/bar-chart/bar-chart.tsx"),g=d("../charts/src/charts/line-chart/line-chart.tsx"),E=d("../charts/src/charts/pie-chart/pie-chart.tsx"),p=d("../charts/src/stories/chart-decorator.tsx"),s=d("../charts/src/stories/theme-config.tsx"),c=d("../charts/src/components/legend/legend.tsx"),e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I={title:"JS Packages/Charts Library/Components/Legend",component:c.s,parameters:{layout:"centered"},decorators:[p.cg],argTypes:{...s.jW}},L=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],O=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],f=[{label:"Desktop",value:65},{label:"Mobile",value:35}],S={render:i=>{const{themeName:h,accentColor:u,...l}=i;return(0,e.jsx)(c.s,{...l})},args:{...s.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}]}},C={render:i=>{const{themeName:h,accentColor:u,...l}=i;return(0,e.jsx)(c.s,{...l})},args:{...s.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},A={render:()=>(0,e.jsx)(g.A,{data:L,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,chartId:"legend-line-chart",children:(0,e.jsx)(g.A.Legend,{})})},t={render:()=>(0,e.jsx)(b.A,{data:O,width:400,height:300,chartId:"legend-bar-chart",children:(0,e.jsx)(b.A.Legend,{})})},o=()=>(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,e.jsx)(g.A,{chartId:"standalone-legend-chart",data:L,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,e.jsx)(c.s,{chartId:"standalone-legend-chart",shape:"line"})]}),a={render:()=>(0,e.jsx)(o,{})},y=()=>(0,e.jsx)(g.A,{chartId:"interactive-legend-demo",data:L,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legend:{interactive:!0}}),_={render:()=>(0,e.jsx)(y,{})},w=()=>(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,e.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,e.jsx)(g.A,{chartId:"dashboard-revenue",data:L,showLegend:!1,height:300,withGradientFill:!1,withLegendGlyph:!1})]}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,e.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,e.jsx)(b.A,{chartId:"dashboard-sales",data:O,showLegend:!1,height:300})]}),(0,e.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,e.jsx)(E.A,{chartId:"dashboard-devices",data:f,showLegend:!1,height:300})]})]})]}),(0,e.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,e.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,e.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,e.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,e.jsx)(c.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,e.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,e.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,e.jsx)(c.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,e.jsx)(c.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),D={render:()=>(0,e.jsx)(w,{}),parameters:{layout:"fullscreen"}},k={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],alignment:"start"}},N={render:i=>{const{themeName:h,accentColor:u,...l}=i,m=i.labelStyles?.maxWidth,v=i.labelStyles?.textOverflow,x=i.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},T=m?`Legend with ${v==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${m})`:"Legend without maxWidth constraint";return(0,e.jsxs)("div",{style:x,children:[(0,e.jsx)("h4",{style:{marginBottom:"10px"},children:T}),(0,e.jsx)(c.s,{...l})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",labelStyles:{maxWidth:"150px",textOverflow:"wrap"},position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},labelStyles:{control:"object"},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},r={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],shape:"circle"}},n=["Default","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","InteractiveLegend","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <LineChart data={lineChartData} width={600} height={300} withGradientFill={false} withLegendGlyph={false} chartId="legend-line-chart">
            <LineChart.Legend />
        </LineChart>
}`,...A.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <BarChart data={barChartData} width={400} height={300} chartId="legend-bar-chart">
            <BarChart.Legend />
        </BarChart>
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...a.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLegendComponent />
}`,..._.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(M,R,d){d.d(R,{A:()=>N});var b=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=d("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),E=d.n(g),p=d("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=d("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),c=d("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function e(r,n){r(n)}var B,I,L,O,f,S,C;function A(r){var n=r===void 0?{}:r,i=n.innerRadius,h=n.outerRadius,u=n.cornerRadius,l=n.startAngle,m=n.endAngle,v=n.padAngle,x=n.padRadius,T=(0,s.A)();return i!=null&&e(T.innerRadius,i),h!=null&&e(T.outerRadius,h),u!=null&&e(T.cornerRadius,u),l!=null&&e(T.startAngle,l),m!=null&&e(T.endAngle,m),v!=null&&e(T.padAngle,v),x!=null&&e(T.padRadius,x),T}function t(r){var n=r===void 0?{}:r,i=n.x,h=n.x0,u=n.x1,l=n.y,m=n.y0,v=n.y1,x=n.defined,T=n.curve,j=B();return i&&f(j.x,i),h&&f(j.x0,h),u&&f(j.x1,u),l&&f(j.y,l),m&&f(j.y0,m),v&&f(j.y1,v),x&&j.defined(x),T&&j.curve(T),j}function o(r){var n=r===void 0?{}:r,i=n.x,h=n.y,u=n.defined,l=n.curve,m=I();return i&&f(m.x,i),h&&f(m.y,h),u&&m.defined(u),l&&m.curve(l),m}function a(r){var n=r===void 0?{}:r,i=n.startAngle,h=n.endAngle,u=n.padAngle,l=n.value,m=n.sort,v=n.sortValues,x=(0,c.A)();return(m===null||m!=null)&&x.sort(m),(v===null||v!=null)&&x.sortValues(v),l!=null&&x.value(l),u!=null&&e(x.padAngle,u),i!=null&&e(x.startAngle,i),h!=null&&e(x.endAngle,h),x}function y(r){var n=r===void 0?{}:r,i=n.angle,h=n.radius,u=n.defined,l=n.curve,m=L();return i&&f(m.angle,i),h&&f(m.radius,h),u&&m.defined(u),l&&m.curve(l),m}function _(r){var n=r.keys,i=r.value,h=r.order,u=r.offset,l=O();return n&&l.keys(n),i&&f(l.value,i),h&&l.order(S(h)),u&&l.offset(C(u)),l}var w=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function D(){return D=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var h in i)Object.prototype.hasOwnProperty.call(i,h)&&(r[h]=i[h])}return r},D.apply(this,arguments)}function k(r,n){if(r==null)return{};var i={},h=Object.keys(r),u,l;for(l=0;l<h.length;l++)u=h[l],!(n.indexOf(u)>=0)&&(i[u]=r[u]);return i}function N(r){var n=r.className,i=r.top,h=r.left,u=r.data,l=u===void 0?[]:u,m=r.centroid,v=r.innerRadius,x=v===void 0?0:v,T=r.outerRadius,j=r.cornerRadius,V=r.startAngle,H=r.endAngle,G=r.padAngle,$=r.padRadius,Q=r.pieSort,J=r.pieSortValues,X=r.pieValue,W=r.children,Y=r.fill,K=Y===void 0?"":Y,Z=k(r,w),F=A({innerRadius:x,outerRadius:T,cornerRadius:j,padRadius:$}),U=a({startAngle:V,endAngle:H,padAngle:G,value:X,sort:Q,sortValues:J}),z=U(l);return W?b.createElement(b.Fragment,null,W({arcs:z,path:F,pie:U})):b.createElement(p.A,{className:"visx-pie-arcs-group",top:i,left:h},z.map(function(P,q){return b.createElement("g",{key:"pie-arc-"+q},b.createElement("path",D({className:E()("visx-pie-arc",n),d:F(P)||"",fill:K==null||typeof K=="string"?K:K(P)},Z)),m?.(F.centroid(P),P))}))}},"../charts/src/stories/chart-decorator.tsx"(M,R,d){d.d(R,{OI:()=>c,cg:()=>I,xo:()=>L});var b=d("../number-formatters/src/index.ts"),g=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=d("../charts/src/providers/chart-context/global-charts-provider.tsx"),p=d("../charts/src/stories/theme-config.tsx"),s=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=(O,f)=>{const S=f.args,C=S.withPadding!==!1,A=S.showOffsetTestButtons===!0;return I(()=>{const o=(0,g.useRef)(null),a=(0,g.useRef)({x:0,y:0}),y=(0,g.useCallback)((r,n)=>{o.current&&(a.current.x+=r,a.current.y+=n,o.current.style.transform=`translate(${a.current.x}px, ${a.current.y}px)`)},[]),_=(0,g.useCallback)(()=>{o.current&&(a.current={x:0,y:0},o.current.style.transform="")},[]),w=(0,g.useCallback)(()=>y(-50,0),[y]),D=(0,g.useCallback)(()=>y(50,0),[y]),k=(0,g.useCallback)(()=>y(0,-50),[y]),N=(0,g.useCallback)(()=>y(0,50),[y]);return(0,s.jsxs)(s.Fragment,{children:[A&&(0,s.jsxs)("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,s.jsx)("span",{style:{fontSize:"12px",color:"#666",alignSelf:"center"},children:"Move container (no re-render):"}),(0,s.jsx)("button",{type:"button",onClick:w,children:"\u2190 Left"}),(0,s.jsx)("button",{type:"button",onClick:D,children:"Right \u2192"}),(0,s.jsx)("button",{type:"button",onClick:k,children:"\u2191 Up"}),(0,s.jsx)("button",{type:"button",onClick:N,children:"Down \u2193"}),(0,s.jsx)("button",{type:"button",onClick:_,children:"Reset"})]}),(0,s.jsx)("div",{ref:o,style:{resize:S.resize||"both",overflow:"auto",padding:C?"1rem":void 0,width:S.containerWidth||"800px",height:S.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,s.jsx)(O,{})})]})},f)},e=O=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(O),B=({children:O,themeName:f="default",accentColor:S=p.Zs})=>{(0,g.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,b.xS)(window.navigator.language)},[]);const C=p.yI[f],A=e(S)?S:p.Zs,t=f==="custom"?`custom-${A}`:f;return(0,s.jsxs)(s.Fragment,{children:[f==="custom"&&(0,s.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand-weak: ${A};
						}
					`}),(0,s.jsx)(E.S,{theme:C,children:O},t)]})},I=(O,{args:f})=>{const S=f,C=S.themeName,A=S.accentColor;return(0,s.jsx)(B,{themeName:C,accentColor:A,children:(0,s.jsx)(O,{})})},L={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},showOffsetTestButtons:{control:"boolean",description:"Show buttons to move the container via DOM manipulation (no re-render) for testing tooltip positioning",table:{category:"Testing"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{c.displayName="chartDecorator",c.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:c.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{I.displayName="simpleChartDecorator",I.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:I.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{L.displayName="sharedChartArgTypes",L.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:L.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx"(M,R,d){d.d(R,{In:()=>c,Zs:()=>g,jW:()=>s,yI:()=>p});var b=d("../charts/src/providers/chart-context/themes.ts");const g="#4a19ab",E={colors:["var(--wpds-color-bg-interactive-brand-weak)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},p={default:b.z,custom:E},s={themeName:{control:{type:"select"},options:Object.keys(p),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:g,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},c={themeName:"default",accentColor:g};try{g.displayName="DEFAULT_ACCENT_COLOR",g.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:g.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{E.displayName="customTheme",E.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:E.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legend.displayName="legend",legend.__docgenInfo={description:"Legend specific settings",displayName:"legend",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legend"]={docgenInfo:legend.__docgenInfo,name:"legend",path:"../charts/src/stories/theme-config.tsx#legend"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{p.displayName="CHART_THEME_MAP",p.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:p.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{s.displayName="themeArgTypes",s.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:s.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(M,R,d){d.d(R,{A:()=>E});function b(p){var s,c,e="";if(typeof p=="string"||typeof p=="number")e+=p;else if(typeof p=="object")if(Array.isArray(p)){var B=p.length;for(s=0;s<B;s++)p[s]&&(c=b(p[s]))&&(e&&(e+=" "),e+=c)}else for(c in p)p[c]&&(e&&(e+=" "),e+=c);return e}function g(){for(var p,s,c=0,e="",B=arguments.length;c<B;c++)(p=arguments[c])&&(s=b(p))&&(e&&(e+=" "),e+=s);return e}const E=g},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(M){var R=function(o){return d(o)&&!b(o)};function d(t){return!!t&&typeof t=="object"}function b(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||p(t)}var g=typeof Symbol=="function"&&Symbol.for,E=g?Symbol.for("react.element"):60103;function p(t){return t.$$typeof===E}function s(t){return Array.isArray(t)?[]:{}}function c(t,o){return o.clone!==!1&&o.isMergeableObject(t)?C(s(t),t,o):t}function e(t,o,a){return t.concat(o).map(function(y){return c(y,a)})}function B(t,o){if(!o.customMerge)return C;var a=o.customMerge(t);return typeof a=="function"?a:C}function I(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return Object.propertyIsEnumerable.call(t,o)}):[]}function L(t){return Object.keys(t).concat(I(t))}function O(t,o){try{return o in t}catch{return!1}}function f(t,o){return O(t,o)&&!(Object.hasOwnProperty.call(t,o)&&Object.propertyIsEnumerable.call(t,o))}function S(t,o,a){var y={};return a.isMergeableObject(t)&&L(t).forEach(function(_){y[_]=c(t[_],a)}),L(o).forEach(function(_){f(t,_)||(O(t,_)&&a.isMergeableObject(o[_])?y[_]=B(_,a)(t[_],o[_],a):y[_]=c(o[_],a))}),y}function C(t,o,a){a=a||{},a.arrayMerge=a.arrayMerge||e,a.isMergeableObject=a.isMergeableObject||R,a.cloneUnlessOtherwiseSpecified=c;var y=Array.isArray(o),_=Array.isArray(t),w=y===_;return w?y?a.arrayMerge(t,o,a):S(t,o,a):c(o,a)}C.all=function(o,a){if(!Array.isArray(o))throw new Error("first argument should be an array");return o.reduce(function(y,_){return C(y,_,a)},{})};var A=C;M.exports=A}}]);
