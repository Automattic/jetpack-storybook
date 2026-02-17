"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx"(M,R,d){d.r(R),d.d(R,{AlignmentOptions:()=>k,CustomShape:()=>t,DashboardExample:()=>N,Horizontal:()=>C,StandaloneLegendWithChartId:()=>D,TextOverflow:()=>r,Vertical:()=>v,WithBarChart:()=>_,WithLineChart:()=>a,__namedExportsOrder:()=>g,default:()=>I});var b=d("../charts/src/charts/bar-chart/bar-chart.tsx"),y=d("../charts/src/charts/line-chart/line-chart.tsx"),E=d("../charts/src/charts/pie-chart/pie-chart.tsx"),h=d("../charts/src/stories/chart-decorator.tsx"),s=d("../charts/src/stories/theme-config.tsx"),f=d("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),e=d("../charts/src/components/legend/legend.tsx"),n=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I={title:"JS Packages/Charts Library/Components/Legend",component:e.s,parameters:{layout:"centered"},decorators:[h.cg],argTypes:{...s.jW}},x=[{label:"Desktop",data:[{date:new Date("2023-01-01"),value:100},{date:new Date("2023-01-02"),value:150},{date:new Date("2023-01-03"),value:120}]},{label:"Mobile",data:[{date:new Date("2023-01-01"),value:80},{date:new Date("2023-01-02"),value:90},{date:new Date("2023-01-03"),value:110}]}],u=[{label:"Q1 Sales",data:[{label:"Jan",value:1e3},{label:"Feb",value:1200},{label:"Mar",value:1100}]},{label:"Q2 Sales",data:[{label:"Jan",value:800},{label:"Feb",value:900},{label:"Mar",value:1e3}]}],A=[{label:"Desktop",value:65,percentage:65},{label:"Mobile",value:35,percentage:35}],C={render:i=>{const{themeName:m,accentColor:c,...p}=i;return(0,n.jsx)(e.s,{...p})},args:{...s.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal"}},v={render:i=>{const{themeName:m,accentColor:c,...p}=i;return(0,n.jsx)(e.s,{...p})},args:{...s.In,items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"},{label:"Tablet",value:"12%",color:"#44B556"}],orientation:"vertical"}},o=()=>{const i=(0,f.f)(x,{showValues:!1});return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(y.A,{data:x,showLegend:!1,width:600,height:300,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(e.s,{items:i,orientation:"horizontal",shape:"line"})]})},a={render:()=>(0,n.jsx)(o,{})},l=()=>{const i=(0,f.f)(u);return(0,n.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"flex-start"},children:[(0,n.jsx)(b.A,{data:u,showLegend:!1,width:400,height:300}),(0,n.jsx)(e.s,{items:i,orientation:"vertical"})]})},_={render:()=>(0,n.jsx)(l,{})},S=()=>(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsx)(y.A,{chartId:"standalone-legend-chart",data:x,showLegend:!1,width:400,height:200,withGradientFill:!1,withLegendGlyph:!1}),(0,n.jsx)(e.s,{chartId:"standalone-legend-chart",orientation:"horizontal",shape:"line"})]}),D={render:()=>(0,n.jsx)(S,{})},K=()=>(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"20px",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Revenue Trends"}),(0,n.jsx)(y.A,{chartId:"dashboard-revenue",data:x,showLegend:!1,width:600,height:200,withGradientFill:!1,withLegendGlyph:!1})]}),(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Sales by Quarter"}),(0,n.jsx)(b.A,{chartId:"dashboard-sales",data:u,showLegend:!1,width:280,height:200})]}),(0,n.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Device Distribution"}),(0,n.jsx)(E.A,{chartId:"dashboard-devices",data:A,showLegend:!1})]})]})]}),(0,n.jsxs)("aside",{style:{backgroundColor:"white",padding:"20px",borderRadius:"4px"},children:[(0,n.jsx)("h3",{style:{margin:"0 0 20px 0"},children:"Legend"}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Revenue Trends"}),(0,n.jsx)(e.s,{chartId:"dashboard-revenue",orientation:"vertical",shape:"line"})]}),(0,n.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Sales by Quarter"}),(0,n.jsx)(e.s,{chartId:"dashboard-sales",orientation:"vertical"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{style:{margin:"0 0 10px 0",fontSize:"14px",color:"#666"},children:"Device Distribution"}),(0,n.jsx)(e.s,{chartId:"dashboard-devices",orientation:"vertical",shape:"circle"})]})]})]}),N={render:()=>(0,n.jsx)(K,{}),parameters:{layout:"fullscreen"}},k={args:{items:[{label:"Series 1",value:"25%",color:"#3858E9"},{label:"Series 2",value:"35%",color:"#80C8FF"},{label:"Series 3",value:"40%",color:"#44B556"}],orientation:"horizontal",alignment:"start"}},r={render:i=>{const{themeName:m,maxWidth:c,...p}=i,T=i.orientation==="horizontal"?{width:"600px",border:"1px solid #ddd",padding:"20px"}:{width:"350px",border:"1px solid #ddd",padding:"20px"},O=c?`Legend with ${i.textOverflow==="ellipsis"?"Ellipsis":"Text Wrapping"} (maxWidth: ${c})`:"Legend without maxWidth constraint";return(0,n.jsxs)("div",{style:T,children:[(0,n.jsx)("h4",{style:{marginBottom:"10px"},children:O}),(0,n.jsx)(e.s,{...p,maxWidth:c})]})},args:{items:[{label:"Very Long Legend Item Label That Demonstrates Text Overflow Behavior",value:"25%",color:"#3858E9"},{label:"Another Extremely Long Label for Testing Different Display Options",value:"35%",color:"#80C8FF"},{label:"Short Label",value:"15%",color:"#44B556"},{label:"Medium Length Label Text",value:"25%",color:"#FFC107"}],orientation:"horizontal",maxWidth:150,textOverflow:"wrap",position:"bottom",alignment:"center"},argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},maxWidth:{control:{type:"range",min:0,max:300,step:10}},textOverflow:{control:{type:"radio"},options:["wrap","ellipsis"]},position:{control:{type:"radio"},options:["top","bottom"]},alignment:{control:{type:"radio"},options:["start","center","end"]}}},t={args:{items:[{label:"Desktop",value:"65%",color:"#3858E9"},{label:"Mobile",value:"35%",color:"#80C8FF"}],orientation:"horizontal",shape:"circle"}},g=["Horizontal","Vertical","WithLineChart","WithBarChart","StandaloneLegendWithChartId","DashboardExample","AlignmentOptions","TextOverflow","CustomShape"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithLineChartData />
}`,...a.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <WithBarChartData />
}`,..._.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <StandaloneLegendWithChartIdComponent />
}`,...D.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardWithCentralizedLegend />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...N.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(M,R,d){d.d(R,{A:()=>k});var b=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=d("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),E=d.n(y),h=d("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=d("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),f=d("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function e(r,t){r(t)}var n,B,I,x,u,A,C;function v(r){var t=r===void 0?{}:r,g=t.innerRadius,i=t.outerRadius,m=t.cornerRadius,c=t.startAngle,p=t.endAngle,T=t.padAngle,O=t.padRadius,L=(0,s.A)();return g!=null&&e(L.innerRadius,g),i!=null&&e(L.outerRadius,i),m!=null&&e(L.cornerRadius,m),c!=null&&e(L.startAngle,c),p!=null&&e(L.endAngle,p),T!=null&&e(L.padAngle,T),O!=null&&e(L.padRadius,O),L}function o(r){var t=r===void 0?{}:r,g=t.x,i=t.x0,m=t.x1,c=t.y,p=t.y0,T=t.y1,O=t.defined,L=t.curve,j=n();return g&&u(j.x,g),i&&u(j.x0,i),m&&u(j.x1,m),c&&u(j.y,c),p&&u(j.y0,p),T&&u(j.y1,T),O&&j.defined(O),L&&j.curve(L),j}function a(r){var t=r===void 0?{}:r,g=t.x,i=t.y,m=t.defined,c=t.curve,p=B();return g&&u(p.x,g),i&&u(p.y,i),m&&p.defined(m),c&&p.curve(c),p}function l(r){var t=r===void 0?{}:r,g=t.startAngle,i=t.endAngle,m=t.padAngle,c=t.value,p=t.sort,T=t.sortValues,O=(0,f.A)();return(p===null||p!=null)&&O.sort(p),(T===null||T!=null)&&O.sortValues(T),c!=null&&O.value(c),m!=null&&e(O.padAngle,m),g!=null&&e(O.startAngle,g),i!=null&&e(O.endAngle,i),O}function _(r){var t=r===void 0?{}:r,g=t.angle,i=t.radius,m=t.defined,c=t.curve,p=I();return g&&u(p.angle,g),i&&u(p.radius,i),m&&p.defined(m),c&&p.curve(c),p}function S(r){var t=r.keys,g=r.value,i=r.order,m=r.offset,c=x();return t&&c.keys(t),g&&u(c.value,g),i&&c.order(A(i)),m&&c.offset(C(m)),c}var D=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function K(){return K=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var g=arguments[t];for(var i in g)Object.prototype.hasOwnProperty.call(g,i)&&(r[i]=g[i])}return r},K.apply(this,arguments)}function N(r,t){if(r==null)return{};var g={},i=Object.keys(r),m,c;for(c=0;c<i.length;c++)m=i[c],!(t.indexOf(m)>=0)&&(g[m]=r[m]);return g}function k(r){var t=r.className,g=r.top,i=r.left,m=r.data,c=m===void 0?[]:m,p=r.centroid,T=r.innerRadius,O=T===void 0?0:T,L=r.outerRadius,j=r.cornerRadius,V=r.startAngle,H=r.endAngle,$=r.padAngle,G=r.padRadius,Q=r.pieSort,J=r.pieSortValues,X=r.pieValue,F=r.children,Y=r.fill,w=Y===void 0?"":Y,Z=N(r,D),W=v({innerRadius:O,outerRadius:L,cornerRadius:j,padRadius:G}),z=l({startAngle:V,endAngle:H,padAngle:$,value:X,sort:Q,sortValues:J}),U=z(c);return F?b.createElement(b.Fragment,null,F({arcs:U,path:W,pie:z})):b.createElement(h.A,{className:"visx-pie-arcs-group",top:g,left:i},U.map(function(P,q){return b.createElement("g",{key:"pie-arc-"+q},b.createElement("path",K({className:E()("visx-pie-arc",t),d:W(P)||"",fill:w==null||typeof w=="string"?w:w(P)},Z)),p?.(W.centroid(P),P))}))}},"../charts/src/stories/chart-decorator.tsx"(M,R,d){d.d(R,{OI:()=>f,cg:()=>B,xo:()=>I});var b=d("../number-formatters/src/index.ts"),y=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=d("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=d("../charts/src/stories/theme-config.tsx"),s=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=(x,u)=>{const A=u.args,C=A.withPadding!==!1,v=A.showOffsetTestButtons===!0;return B(()=>{const a=(0,y.useRef)(null),l=(0,y.useRef)({x:0,y:0}),_=(0,y.useCallback)((r,t)=>{a.current&&(l.current.x+=r,l.current.y+=t,a.current.style.transform=`translate(${l.current.x}px, ${l.current.y}px)`)},[]),S=(0,y.useCallback)(()=>{a.current&&(l.current={x:0,y:0},a.current.style.transform="")},[]),D=(0,y.useCallback)(()=>_(-50,0),[_]),K=(0,y.useCallback)(()=>_(50,0),[_]),N=(0,y.useCallback)(()=>_(0,-50),[_]),k=(0,y.useCallback)(()=>_(0,50),[_]);return(0,s.jsxs)(s.Fragment,{children:[v&&(0,s.jsxs)("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,s.jsx)("span",{style:{fontSize:"12px",color:"#666",alignSelf:"center"},children:"Move container (no re-render):"}),(0,s.jsx)("button",{type:"button",onClick:D,children:"\u2190 Left"}),(0,s.jsx)("button",{type:"button",onClick:K,children:"Right \u2192"}),(0,s.jsx)("button",{type:"button",onClick:N,children:"\u2191 Up"}),(0,s.jsx)("button",{type:"button",onClick:k,children:"Down \u2193"}),(0,s.jsx)("button",{type:"button",onClick:S,children:"Reset"})]}),(0,s.jsx)("div",{ref:a,style:{resize:A.resize||"both",overflow:"auto",padding:C?"1rem":void 0,width:A.containerWidth||"800px",height:A.containerHeight||"400px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,s.jsx)(x,{})})]})},u)},e=x=>/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(x),n=({children:x,themeName:u="default",accentColor:A=h.Zs})=>{(0,y.useEffect)(()=>{typeof window<"u"&&window.navigator?.language&&(0,b.xS)(window.navigator.language)},[]);const C=h.yI[u],v=e(A)?A:h.Zs,o=u==="custom"?`custom-${v}`:u;return(0,s.jsxs)(s.Fragment,{children:[u==="custom"&&(0,s.jsx)("style",{children:`
						:root {
							--wpds-color-bg-interactive-brand: ${v};
						}
					`}),(0,s.jsx)(E.S,{theme:C,children:x},o)]})},B=(x,{args:u})=>{const A=u,C=A.themeName,v=A.accentColor;return(0,s.jsx)(n,{themeName:C,accentColor:v,children:(0,s.jsx)(x,{})})},I={maxWidth:{control:{type:"number",min:100,max:1200},description:"Maximum width of the chart in pixels (responsive mode)",table:{category:"Dimensions"}},aspectRatio:{control:{type:"number",min:0,max:1},description:"Height as a ratio of width (0-1, responsive mode)",table:{category:"Dimensions"}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4},description:"Debounce time in ms for resize events (performance)",table:{category:"Performance"}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},showOffsetTestButtons:{control:"boolean",description:"Show buttons to move the container via DOM manipulation (no re-render) for testing tooltip positioning",table:{category:"Testing"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{f.displayName="chartDecorator",f.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:f.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{B.displayName="simpleChartDecorator",B.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts
Ensures number formatters use browser locale in Storybook environment`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:B.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{I.displayName="sharedChartArgTypes",I.__docgenInfo={description:"Shared argTypes for common chart controls (dimensions, container settings)",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:I.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx"(M,R,d){d.d(R,{In:()=>f,Zs:()=>y,jW:()=>s,yI:()=>h});var b=d("../charts/src/providers/chart-context/themes.ts");const y="#4a19ab",E={colors:["var(--wpds-color-bg-interactive-brand)"],seriesLineStyles:[{},{strokeDasharray:"5 8"}],geoChart:{featureFillColor:"#ffffff"},gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},h={default:b.z,custom:E},s={themeName:{control:{type:"select"},options:Object.keys(h),defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}},accentColor:{control:{type:"color"},description:"Accent color for the custom theme (used for primary chart elements)",defaultValue:y,table:{category:"Theme"},if:{arg:"themeName",eq:"custom"}}},f={themeName:"default",accentColor:y};try{y.displayName="DEFAULT_ACCENT_COLOR",y.__docgenInfo={description:"Default accent color for custom theme in Storybook",displayName:"DEFAULT_ACCENT_COLOR",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"]={docgenInfo:y.__docgenInfo,name:"DEFAULT_ACCENT_COLOR",path:"../charts/src/stories/theme-config.tsx#DEFAULT_ACCENT_COLOR"})}catch{}try{E.displayName="customTheme",E.__docgenInfo={description:"Custom theme using a CSS variable for dynamic color generation",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:E.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{svgLabelSmall.displayName="svgLabelSmall",svgLabelSmall.__docgenInfo={description:"Styles for small SVG text (eg. axis tick labels), passed through to the XYChart theme.",displayName:"svgLabelSmall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#svgLabelSmall"]={docgenInfo:svgLabelSmall.__docgenInfo,name:"svgLabelSmall",path:"../charts/src/stories/theme-config.tsx#svgLabelSmall"})}catch{}try{geoChart.displayName="geoChart",geoChart.__docgenInfo={description:"GeoChart specific settings",displayName:"geoChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#geoChart"]={docgenInfo:geoChart.__docgenInfo,name:"geoChart",path:"../charts/src/stories/theme-config.tsx#geoChart"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{sparkline.displayName="sparkline",sparkline.__docgenInfo={description:"Sparkline specific settings",displayName:"sparkline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#sparkline"]={docgenInfo:sparkline.__docgenInfo,name:"sparkline",path:"../charts/src/stories/theme-config.tsx#sparkline"})}catch{}try{h.displayName="CHART_THEME_MAP",h.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:h.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{s.displayName="themeArgTypes",s.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:s.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(M,R,d){d.d(R,{A:()=>E});function b(h){var s,f,e="";if(typeof h=="string"||typeof h=="number")e+=h;else if(typeof h=="object")if(Array.isArray(h)){var n=h.length;for(s=0;s<n;s++)h[s]&&(f=b(h[s]))&&(e&&(e+=" "),e+=f)}else for(f in h)h[f]&&(e&&(e+=" "),e+=f);return e}function y(){for(var h,s,f=0,e="",n=arguments.length;f<n;f++)(h=arguments[f])&&(s=b(h))&&(e&&(e+=" "),e+=s);return e}const E=y},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(M){var R=function(a){return d(a)&&!b(a)};function d(o){return!!o&&typeof o=="object"}function b(o){var a=Object.prototype.toString.call(o);return a==="[object RegExp]"||a==="[object Date]"||h(o)}var y=typeof Symbol=="function"&&Symbol.for,E=y?Symbol.for("react.element"):60103;function h(o){return o.$$typeof===E}function s(o){return Array.isArray(o)?[]:{}}function f(o,a){return a.clone!==!1&&a.isMergeableObject(o)?C(s(o),o,a):o}function e(o,a,l){return o.concat(a).map(function(_){return f(_,l)})}function n(o,a){if(!a.customMerge)return C;var l=a.customMerge(o);return typeof l=="function"?l:C}function B(o){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(o).filter(function(a){return Object.propertyIsEnumerable.call(o,a)}):[]}function I(o){return Object.keys(o).concat(B(o))}function x(o,a){try{return a in o}catch{return!1}}function u(o,a){return x(o,a)&&!(Object.hasOwnProperty.call(o,a)&&Object.propertyIsEnumerable.call(o,a))}function A(o,a,l){var _={};return l.isMergeableObject(o)&&I(o).forEach(function(S){_[S]=f(o[S],l)}),I(a).forEach(function(S){u(o,S)||(x(o,S)&&l.isMergeableObject(a[S])?_[S]=n(S,l)(o[S],a[S],l):_[S]=f(a[S],l))}),_}function C(o,a,l){l=l||{},l.arrayMerge=l.arrayMerge||e,l.isMergeableObject=l.isMergeableObject||R,l.cloneUnlessOtherwiseSpecified=f;var _=Array.isArray(a),S=Array.isArray(o),D=_===S;return D?_?l.arrayMerge(o,a,l):A(o,a,l):f(a,l)}C.all=function(a,l){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(_,S){return C(_,S,l)},{})};var v=C;M.exports=v}}]);
