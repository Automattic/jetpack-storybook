"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx"(w,I,l){l.r(I),l.d(I,{AlignmentOptions:()=>t,CustomShape:()=>p,DashboardExample:()=>r,Default:()=>O,InteractiveLegend:()=>k,StandaloneLegendWithChartId:()=>j,TextOverflow:()=>d,Vertical:()=>T,WithBarChart:()=>_,WithLineChart:()=>a,__namedExportsOrder:()=>y,default:()=>D});var A=l("../charts/src/charts/bar-chart/bar-chart.tsx"),m=l("../charts/src/charts/line-chart/line-chart.tsx"),L=l("../charts/src/charts/pie-chart/pie-chart.tsx"),h=l("../charts/src/stories/chart-decorator.tsx"),s=l("../charts/src/stories/theme-config.tsx"),u=l("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),e=l("../charts/src/components/legend/legend.tsx"),n=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D={title:"JS Packages/Charts Library/Components/Legend",component:e.s,parameters:{layout:"centered"},decorators:[h.cg],argTypes:{...s.jW}},x=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],f=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],b=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],O={render:i=>{const{themeName:g,accentColor:v,...S}=i;return(0,n.jsx)(e.s,{...S})},args:{...s.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}]}},T={render:i=>{const{themeName:g,accentColor:v,...S}=i;return(0,n.jsx)(e.s,{...S})},args:{...s.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},o=()=>{const i=(0,u.f)(x,{showValues:!1});return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(m.A,{data:x,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(e.s,{items:i,orientation:"horizontal",shape:"line"})]})},a={render:()=>(0,n.jsx)(o,{})},c=()=>{const i=(0,u.f)(f);return(0,n.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,n.jsx)(A.A,{data:f,showLegend:!1,width:400,height:300}),(0,n.jsx)(e.s,{items:i,orientation:"vertical"})]})},_={render:()=>(0,n.jsx)(c,{})},C=()=>(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(m.A,{chartId:"standalone-legend-chart",data:x,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(e.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),j={render:()=>(0,n.jsx)(C,{})},N=()=>(0,n.jsx)(m.A,{chartId:"interactive-legend-demo",data:x,showLegend:!0,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1,legendInteractive:!0}),k={render:()=>(0,n.jsx)(N,{})},M=()=>(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,n.jsx)(m.A,{chartId:"dashboard-revenue",data:x,showLegend:!1,height:300,withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,n.jsx)(A.A,{chartId:"dashboard-sales",data:f,showLegend:!1,height:300})]}),(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,n.jsx)(L.A,{chartId:"dashboard-devices",data:b,showLegend:!1,height:300})]})]})]}),(0,n.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,n.jsx)(e.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,n.jsx)(e.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,n.jsx)(e.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),r={render:()=>(0,n.jsx)(M,{}),parameters:{layout:"fullscreen"}},t={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"}},d={render:i=>{const{themeName:g,maxWidth:v,...S}=i,E=i.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},R=v?`Legend with ${i.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${v})`:"Legend without maxWidth constraint";return(0,n.jsxs)("div",{style:E,children:[(0,n.jsx)("h4",{style:{marginBottom:"10px"},children:R}),(0,n.jsx)(e.s,{...S,maxWidth:v})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},maxWidth:{control:{type:"range",min:0,max:300,step:10}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"]},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},p={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"}},y=["Default","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","InteractiveLegend","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />
}`,...a.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />
}`,..._.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...j.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLegendComponent />
}`,...k.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...r.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(w,I,l){l.d(I,{A:()=>M});var A=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=l("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),L=l.n(m),h=l("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=l("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),u=l("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function e(r,t){r(t)}var n,B,D,x,f,b,O;function T(r){var t=r===void 0?{}:r,d=t.innerRadius,p=t.outerRadius,y=t.cornerRadius,i=t.startAngle,g=t.endAngle,v=t.padAngle,S=t.padRadius,E=(0,s.A)();return d!=null&&e(E.innerRadius,d),p!=null&&e(E.outerRadius,p),y!=null&&e(E.cornerRadius,y),i!=null&&e(E.startAngle,i),g!=null&&e(E.endAngle,g),v!=null&&e(E.padAngle,v),S!=null&&e(E.padRadius,S),E}function o(r){var t=r===void 0?{}:r,d=t.x,p=t.x0,y=t.x1,i=t.y,g=t.y0,v=t.y1,S=t.defined,E=t.curve,R=n();return d&&f(R.x,d),p&&f(R.x0,p),y&&f(R.x1,y),i&&f(R.y,i),g&&f(R.y0,g),v&&f(R.y1,v),S&&R.defined(S),E&&R.curve(E),R}function a(r){var t=r===void 0?{}:r,d=t.x,p=t.y,y=t.defined,i=t.curve,g=B();return d&&f(g.x,d),p&&f(g.y,p),y&&g.defined(y),i&&g.curve(i),g}function c(r){var t=r===void 0?{}:r,d=t.startAngle,p=t.endAngle,y=t.padAngle,i=t.value,g=t.sort,v=t.sortValues,S=(0,u.A)();return(g===null||g!=null)&&S.sort(g),(v===null||v!=null)&&S.sortValues(v),i!=null&&S.value(i),y!=null&&e(S.padAngle,y),d!=null&&e(S.startAngle,d),p!=null&&e(S.endAngle,p),S}function _(r){var t=r===void 0?{}:r,d=t.angle,p=t.radius,y=t.defined,i=t.curve,g=D();return d&&f(g.angle,d),p&&f(g.radius,p),y&&g.defined(y),i&&g.curve(i),g}function C(r){var t=r.keys,d=r.value,p=r.order,y=r.offset,i=x();return t&&i.keys(t),d&&f(i.value,d),p&&i.order(b(p)),y&&i.offset(O(y)),i}var j=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function N(){return N=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var d=arguments[t];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(r[p]=d[p])}return r},N.apply(this,arguments)}function k(r,t){if(r==null)return{};var d={},p=Object.keys(r),y,i;for(i=0;i<p.length;i++)y=p[i],!(t.indexOf(y)>=0)&&(d[y]=r[y]);return d}function M(r){var t=r.className,d=r.top,p=r.left,y=r.data,i=y===void 0?[]:y,g=r.centroid,v=r.innerRadius,S=v===void 0?0:v,E=r.outerRadius,R=r.cornerRadius,V=r.startAngle,H=r.endAngle,$=r.padAngle,G=r.padRadius,Q=r.pieSort,J=r.pieSortValues,X=r.pieValue,F=r.children,Y=r.fill,K=Y===void 0?"":Y,Z=k(r,j),W=T({innerRadius:S,outerRadius:E,cornerRadius:R,padRadius:G}),z=c({startAngle:V,endAngle:H,padAngle:$,value:X,sort:Q,sortValues:J}),U=z(i);return F?A.createElement(A.Fragment,null,F({arcs:U,path:W,pie:z})):A.createElement(h.A,{className:"visx-pie-arcs-group",top:d,left:p},U.map(function(P,q){return A.createElement("g",{key:"pie-arc-"+q},A.createElement("path",N({className:L()("visx-pie-arc",t),d:W(P)||"",fill:K==null||typeof K=="string"?K:K(P)},Z)),g?.(W.centroid(P),P))}))}},"../charts/src/stories/chart-decorator.tsx"(w,I,l){l.d(I,{OI:()=>u,cg:()=>B,xo:()=>D});var A=l("../number-formatters/src/index.ts"),m=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=l("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=l("../charts/src/stories/theme-config.tsx"),s=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=(x,f)=>{const b=f.args,O=b.withPadding!==!1,T=b.showOffsetTestButtons===!0;return B(()=>{const a=(0,m.useRef)(null),c=(0,m.useRef)({x:0,y:0}),_=(0,m.useCallback)((r,t)=>{a.current&&(c.current.x+=r,c.current.y+=t,a.current.style.transform=`translate(${c.current.x}px, ${c.current.y}px)`)},[]),C=(0,m.useCallback)(()=>{a.current&&(c.current={x:0,y:0},a.current.style.transform="")},[]),j=(0,m.useCallback)(()=>_(-50,0),[_]),N=(0,m.useCallback)(()=>_(50,0),[_]),k=(0,m.useCallback)(()=>_(0,-50),[_]),M=(0,m.useCallback)(()=>_(0,50),[_]);return(0,s.jsxs)(s.Fragment,{children:[T&&(0,s.jsxs)("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,s.jsx)("span",{style:{fontSize:"12px",color:"#666",alignSelf:"center"},children:"Move container (no re-render):"}),(0,s.jsx)("button",{type:"button",onClick:j,children:"\u2190 Left"}),(0,s.jsx)("button",{type:"button",onClick:N,children:"Right \u2192"}),(0,s.jsx)("button",{type:"button",onClick:k,children:"\u2191 Up"}),(0,s.jsx)("button",{type:"button",onClick:M,children:"Down \u2193"}),(0,s.jsx)("button",{type:"button",onClick:C,children:"Reset"})]}),(0,s.jsx)("div",{ref:a,style:{resize:b.resize||"both",overflow:"auto",padding:O?"1rem":void 0,width:b.containerWidth||"800px",height:b.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,s.jsx)(x,{})})]})},f)},e=x=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(x),n=({children:x,themeName:f="default",accentColor:b=h.Zs})=>{(0,m.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,A.xS)(window.navigator.language)},[]);const O=h.yI[f],T=e(b)?b:h.Zs,o=f==="custom"?`custom-${T}`:f;return(0,s.jsxs)(s.Fragment,{children:[f==="custom"&&(0,s.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand: ${T};
						}
					`}),(0,s.jsx)(L.S,{theme:O,children:x},o)]})},B=(x,{args:f})=>{const b=f,O=b.themeName,T=b.accentColor;return(0,s.jsx)(n,{themeName:O,accentColor:T,children:(0,s.jsx)(x,{})})},D={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},showOffsetTestButtons:{control:"boolean",description:"Show buttons to move the container via DOM manipulation (no re-render) for testing tooltip positioning",table:{category:"Testing"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{u.displayName="chartDecorator",u.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:u.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{B.displayName="simpleChartDecorator",B.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:B.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{D.displayName="sharedChartArgTypes",D.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:D.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx"(w,I,l){l.d(I,{In:()=>u,Zs:()=>m,jW:()=>s,yI:()=>h});var A=l("../charts/src/providers/chart-context/themes.ts");const m="#4a19ab",L={colors:["var(--wpds-color-bg-interactive-brand)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},h={default:A.z,custom:L},s={themeName:{control:{type:"select"},options:Object.keys(h),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:m,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},u={themeName:"default",accentColor:m};try{m.displayName="DEFAULT_ACCENT_COLOR",m.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:m.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{L.displayName="customTheme",L.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:L.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legend.displayName="legend",legend.__docgenInfo={description:"Legend specific settings",displayName:"legend",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legend"]={docgenInfo:legend.__docgenInfo,name:"legend",path:"../charts/src/stories/theme-config.tsx#legend"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{h.displayName="CHART_THEME_MAP",h.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:h.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{s.displayName="themeArgTypes",s.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:s.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(w,I,l){l.d(I,{A:()=>L});function A(h){var s,u,e="";if(typeof h=="string"||typeof h=="number")e+=h;else if(typeof h=="object")if(Array.isArray(h)){var n=h.length;for(s=0;s<n;s++)h[s]&&(u=A(h[s]))&&(e&&(e+=" "),e+=u)}else for(u in h)h[u]&&(e&&(e+=" "),e+=u);return e}function m(){for(var h,s,u=0,e="",n=arguments.length;u<n;u++)(h=arguments[u])&&(s=A(h))&&(e&&(e+=" "),e+=s);return e}const L=m},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(w){var I=function(a){return l(a)&&!A(a)};function l(o){return!!o&&typeof o=="object"}function A(o){var a=Object.prototype.toString.call(o);return a==="[object RegExp]"||a==="[object Date]"||h(o)}var m=typeof Symbol=="function"&&Symbol.for,L=m?Symbol.for("react.element"):60103;function h(o){return o.$$typeof===L}function s(o){return Array.isArray(o)?[]:{}}function u(o,a){return a.clone!==!1&&a.isMergeableObject(o)?O(s(o),o,a):o}function e(o,a,c){return o.concat(a).map(function(_){return u(_,c)})}function n(o,a){if(!a.customMerge)return O;var c=a.customMerge(o);return typeof c=="function"?c:O}function B(o){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(o).filter(function(a){return Object.propertyIsEnumerable.call(o,a)}):[]}function D(o){return Object.keys(o).concat(B(o))}function x(o,a){try{return a in o}catch{return!1}}function f(o,a){return x(o,a)&&!(Object.hasOwnProperty.call(o,a)&&Object.propertyIsEnumerable.call(o,a))}function b(o,a,c){var _={};return c.isMergeableObject(o)&&D(o).forEach(function(C){_[C]=u(o[C],c)}),D(a).forEach(function(C){f(o,C)||(x(o,C)&&c.isMergeableObject(a[C])?_[C]=n(C,c)(o[C],a[C],c):_[C]=u(a[C],c))}),_}function O(o,a,c){c=c||{},c.arrayMerge=c.arrayMerge||e,c.isMergeableObject=c.isMergeableObject||I,c.cloneUnlessOtherwiseSpecified=u;var _=Array.isArray(a),C=Array.isArray(o),j=_===C;return j?_?c.arrayMerge(o,a,c):b(o,a,c):u(a,c)}O.all=function(a,c){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(_,C){return O(_,C,c)},{})};var T=O;w.exports=T}}]);
