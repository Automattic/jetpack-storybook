"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((b,c,e)=>{e.d(c,{A:()=>s});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),g=e.n(p),h=g()(o());h.push([b.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),h.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const s=h}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((b,c,e)=>{e.d(c,{A:()=>s});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),g=e.n(p),h=g()(o());h.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),h.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const s=h}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((b,c,e)=>{e.d(c,{f:()=>C});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),p=e("../charts/src/utils/format-percentage.ts");function g(n,a,i="percentage"){if(!a||i==="none")return"";if("percentage"in n){const l=n;switch(i){case"percentage":return(0,p.E)(l.percentage);case"value":return l.value.toString();case"valueDisplay":return l.valueDisplay||l.value.toString();default:return""}}return"value"in n?n.value.toString():""}function h(n,a,i,l,_){if(a){const m=i||l;if(m)return{...n,glyphSize:_,renderGlyph:m}}return n}function s(n,a,i,l,_,m,y){const x=(u,f)=>{const{color:T,glyph:E,shapeStyles:d}=a({data:u,index:f,legendShape:y}),P={label:u.label,value:i?u.data?.length?.toString()||"0":"",color:T,shapeStyle:d};return h(P,l,E,m,_)};return n.map(x)}function t(n,a,i,l,_,m,y,x){const u=(f,T)=>{const{color:E,glyph:d,shapeStyles:P}=a({data:f,index:T,legendShape:x}),O={label:f.label,value:g(f,i,l),color:E,shapeStyle:P};return h(O,_,d,y,m)};return n.map(u)}function C(n,a={},i){const{showValues:l=!1,legendValueDisplay:_="percentage",withGlyph:m=!1,glyphSize:y=8,renderGlyph:x}=a,{getElementStyles:u}=(0,o.j)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?s(n,u,l,m,y,x,i):t(n,u,l,_,m,y,x,i),[n,u,l,_,m,y,x,i])}}),"../charts/src/components/pie-chart/pie-chart.tsx":((b,c,e)=>{e.d(c,{W:()=>ue,A:()=>ge});var r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),g=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),a=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),l=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),_=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=e("../charts/src/utils/create-composition.ts"),y=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),x=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),u=e("../charts/src/components/legend/legend.tsx"),f=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),T=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),E=e("../charts/src/components/private/chart-composition/chart-html.tsx"),d=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),P=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),O=e("../charts/src/components/tooltip/base-tooltip.tsx"),W=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),he=e.n(W),Q=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),U={};U.insert="head",U.singleton=!1;var nt=he()(Q.A,U);const I=Q.A.locals||{};var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const me=S=>{if(!S.length)return{isValid:!1,message:"No data available"};if(S.some(A=>A.percentage<0||A.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const M=S.reduce((A,L)=>A+L.percentage,0);return Math.abs(M-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},Z=({data:S,chartId:F,withTooltips:M=!1,className:A,showLegend:L=!1,legendOrientation:_e="horizontal",legendPosition:R="bottom",legendAlignment:ve="center",legendMaxWidth:xe,legendTextOverflow:fe="wrap",legendShape:ye="circle",size:J,thickness:V=1,padding:be=20,gapScale:G=0,cornerScale:k=0,showLabels:Ce=!0,legendValueDisplay:q="percentage",children:Te=null,tooltipOffsetX:Se=0,tooltipOffsetY:Pe=-15})=>{const H=(0,n.p)(),N=(0,a.R)(F),[je,ee]=(0,C.v)(),{tooltipOpen:De,tooltipLeft:Ee,tooltipTop:Me,tooltipData:te,hideTooltip:ne,showTooltip:Ae}=(0,g.A)(),{containerRef:Le,TooltipInPortal:Oe}=(0,h.A)({detectBounds:!0,scroll:!0,debounce:0}),we=(0,t.useCallback)(()=>{M&&ne()},[M,ne]),Be=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:q}),[q]),We=(0,x.f)(S,Be),{isValid:se,message:Ie}=me(S),{svgChildren:Re,htmlChildren:Ve,otherChildren:ke}=(0,f.n)(Te,"PieChart"),ze=(0,t.useMemo)(()=>({thickness:V,gapScale:G,cornerScale:k}),[V,G,k]);(0,i.t)({chartId:N,legendItems:We,chartType:"pie",isDataValid:se,metadata:ze});const{getElementStyles:Ue}=(0,l.j)();if(!se)return(0,v.jsx)("div",{className:(0,s.A)("pie-chart",I["pie-chart"],A),children:(0,v.jsx)("div",{className:I["error-message"],children:Ie})});const w=J,oe=J,B=L&&R==="top"?oe-ee:oe,Ke=Math.min(w,B)/2,Fe=w/2,Ge=B/2,He=G*(2*Math.PI/S.length),z=Ke-be,ae=V===0?0:z*(1-V),Ne=(z-ae)/2,Ye=k?Math.min(k*z,Ne):0,Xe=S.map((j,D)=>({...j,index:D})),re={value:j=>j.value,fill:j=>Ue({data:j,index:j.index}).color};return(0,v.jsx)(d.O.Provider,{value:{chartId:N,chartWidth:w,chartHeight:B},children:(0,v.jsxs)("div",{ref:Le,className:(0,s.A)("pie-chart",I["pie-chart"],A),style:{display:"flex",flexDirection:L&&R==="top"?"column-reverse":"column"},children:[(0,v.jsx)("svg",{viewBox:`0 0 ${w} ${B}`,preserveAspectRatio:"xMidYMid meet",width:w,height:B,children:(0,v.jsxs)(o.A,{top:Ge,left:Fe,children:[(0,v.jsx)(p.A,{data:Xe,pieValue:re.value,outerRadius:z,innerRadius:ae,padAngle:He,cornerRadius:Ye,children:j=>j.arcs.map((D,$e)=>{const[le,ie]=j.path.centroid(D),Qe=D.endAngle-D.startAngle>=.25,Ze=et=>{if(!M)return;const $=(0,r.A)(et);if($){const tt=L&&R==="top"?ee:0;Ae({tooltipData:D.data,tooltipLeft:$.x+Se,tooltipTop:$.y+tt+Pe})}},Je={d:j.path(D)||"",fill:re.fill(D.data),"data-testid":"pie-segment"},Y={};M&&(Y.onMouseMove=Ze,Y.onMouseLeave=we);const X=12,qe=(0,y.A)(D.data.label,{fontSize:X}),de=6,ce=qe+de*2,pe=X+de*2;return(0,v.jsxs)("g",{...Y,children:[(0,v.jsx)("path",{...Je}),Ce&&Qe&&(0,v.jsxs)("g",{children:[H.labelBackgroundColor&&(0,v.jsx)("rect",{x:le-ce/2,y:ie-pe/2,width:ce,height:pe,fill:H.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,v.jsx)("text",{x:le,y:ie,dy:".33em",fill:H.labelTextColor||"#333",fontSize:X,textAnchor:"middle",pointerEvents:"none",children:D.data.label})]})]},`arc-${$e}`)})}),Re]})}),L&&(0,v.jsx)(u.s,{orientation:_e,position:R,alignment:ve,maxWidth:xe,textOverflow:fe,className:I["pie-chart-legend"],shape:ye,ref:je,chartId:N}),M&&De&&te&&(0,v.jsx)(Oe,{top:Me||0,left:Ee||0,children:(0,v.jsx)("div",{role:"tooltip",children:(0,v.jsx)(O.R,{data:te,top:0,left:0,renderContainer:!1})})}),Ve,ke]})})},K=S=>(0,t.useContext)(_.m)?(0,v.jsx)(Z,{...S}):(0,v.jsx)(_.S,{children:(0,v.jsx)(Z,{...S})});K.displayName="PieChart";const ue=(0,m.E)(K,{Legend:u.s,SVG:T.d,HTML:E.a}),ge=(0,m.E)((0,P.F)(K),{Legend:u.s,SVG:T.d,HTML:E.a})}),"../charts/src/components/pie-chart/stories/index.stories.tsx":((b,c,e)=>{e.r(c),e.d(c,{CompositionAPI:()=>u,CustomLabelColors:()=>f,CustomLegendPositioning:()=>m,Default:()=>a,ErrorStates:()=>T,Responsiveness:()=>x,WithCompositionLegend:()=>_,WithLegend:()=>l,WithTooltips:()=>i,__namedExportsOrder:()=>E,default:()=>n});var r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),o=e("../charts/src/stories/chart-decorator.tsx"),p=e("../charts/src/stories/legend-config.tsx"),g=e("../charts/src/stories/sample-data/index.ts"),h=e("../charts/src/stories/theme-config.tsx"),s=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts/Types/Pie Chart",component:s.A,parameters:{layout:"centered"},decorators:[o.OI],argTypes:{...o.xo,...h.jW,...p.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments"},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments"},showLabels:{control:"boolean",description:"Show or hide labels on pie segments"}},render:({labelTextColor:d,labelBackgroundColor:P,...O})=>{const W=(0,t.jsx)(s.A,{...O});return d||P?(0,t.jsx)(r.S,{theme:{labelTextColor:d,labelBackgroundColor:P},children:W}):W}},a={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:g.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},i={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},l={args:{...a.args,showLegend:!0}},_={render:d=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(s.A,{size:300,data:d.data,showLegend:!0,legendPosition:d.legendPosition||"bottom",legendOrientation:d.legendOrientation||"horizontal",legendAlignment:d.legendAlignment||"center",legendMaxWidth:d.legendMaxWidth,legendTextOverflow:d.legendTextOverflow||"wrap",legendValueDisplay:d.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(s.A,{size:300,data:d.data,legendValueDisplay:d.legendValueDisplay,children:(0,t.jsx)(s.A.Legend,{position:d.legendPosition||"bottom",orientation:d.legendOrientation||"horizontal",alignment:d.legendAlignment||"center",maxWidth:d.legendMaxWidth,textOverflow:d.legendTextOverflow||"wrap"})})]})]}),args:{data:g.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},m={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},y={...a.args,resize:"both"};delete y.size;const x={args:y,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},u={render:d=>{const P=d.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(s.W,{data:P,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:d.legendValueDisplay||"value",children:[(0,t.jsx)(s.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(s.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(s.W.HTML,{children:[(0,t.jsx)(s.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:g.Mc},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},f={args:{...a.args,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},T={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(s.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},E=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    resize: 'none',
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px'
  }
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...l.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based Legend</h3>
                <PieChart size={300} data={args.data} showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} legendValueDisplay={args.legendValueDisplay} />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieChart size={300} data={args.data} legendValueDisplay={args.legendValueDisplay}>
                    <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieChart>
            </div>
        </div>,
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20
    }],
    thickness: 1,
    // Full pie chart
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'center',
    legendPosition: 'top',
    legendShape: 'circle',
    size: 400,
    containerWidth: '432px',
    containerHeight: '480px',
    resize: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const chartData = args.data || [{
      label: 'Desktop',
      value: 45,
      percentage: 45
    }, {
      label: 'Mobile',
      value: 30,
      percentage: 30
    }, {
      label: 'Tablet',
      value: 25,
      percentage: 25
    }];
    return <div style={{
      width: '600px',
      padding: '20px'
    }}>
                <PieChartUnresponsive data={chartData} size={400} withTooltips={true} thickness={0.7} legendValueDisplay={args.legendValueDisplay || 'value'}>
                    <PieChartUnresponsive.HTML>
                        <h3 style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
                            Device Usage Distribution
                        </h3>
                    </PieChartUnresponsive.HTML>

                    <PieChartUnresponsive.SVG>
                        <text x={0} y={0} textAnchor="middle" style={{
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
                            100%
                        </text>
                        <text x={0} y={20} textAnchor="middle" style={{
            fontSize: '14px',
            fill: '#666'
          }}>
                            Total Users
                        </text>
                    </PieChartUnresponsive.SVG>

                    <PieChartUnresponsive.HTML>
                        <PieChartUnresponsive.Legend position="bottom" orientation="horizontal" alignment="center" />
                        <div style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#666'
          }}>
                            <p style={{
              margin: 0
            }}>
                                This example demonstrates the composition API where you can add:
                            </p>
                            <ul style={{
              margin: '5px 0 0 20px',
              padding: 0
            }}>
                                <li>SVG elements inside the chart using PieChart.SVG</li>
                                <li>HTML elements outside the chart using PieChart.HTML</li>
                                <li>Mix regular children with compound components</li>
                            </ul>
                        </div>
                    </PieChartUnresponsive.HTML>
                </PieChartUnresponsive>
            </div>;
  },
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates the compound component pattern for PieChart composition.

Use \\\`<PieChart.SVG>\\\` to add custom SVG elements inside the chart area, and \\\`<PieChart.HTML>\\\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.85,
    // Slightly thinner for better label visibility
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45,
      color: '#FF6B6B' // Light red segment
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35,
      color: '#4ECDC4' // Light teal segment
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20,
      color: '#45B7D1' // Light blue segment
    }],
    labelTextColor: '#FFFFFF',
    // White text for contrast against dark background
    labelBackgroundColor: 'rgba(0, 0, 0, 0.75)',
    // Dark semi-transparent background
    size: 400
  },
  parameters: {
    docs: {
      description: {
        story: \`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\\\`#FFFFFF\\\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\\\`rgba(0, 0, 0, 0.75)\\\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \\\`transparent\\\` to see the default behavior.\`
      }
    }
  }
}`,...f.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} data={[]} />
            </div>
            <div>
                <h3>Invalid Percentage Total</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 30,
        percentage: 30
      }, {
        label: 'B',
        value: 40,
        percentage: 40
      }]} // Only adds up to 70%
      />
            </div>
            <div>
                <h3>Negative Values</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: -30,
        percentage: -30
      }, {
        label: 'B',
        value: 130,
        percentage: 130
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((b,c,e)=>{e.d(c,{a:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:p})=>(0,r.jsx)(r.Fragment,{children:p});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((b,c,e)=>{e.d(c,{d:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:p})=>(0,r.jsx)(r.Fragment,{children:p});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((b,c,e)=>{e.d(c,{n:()=>p});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p(g,h){return(0,o.useMemo)(()=>{const s=[],t=[],C=[];return o.Children.forEach(g,n=>{if((0,o.isValidElement)(n)){const i=n.type?.displayName;i===`${h}.SVG`||i==="Chart.SVG"?n.props?.children&&o.Children.forEach(n.props.children,l=>{s.push(l)}):i===`${h}.HTML`||i==="Chart.HTML"?n.props?.children&&o.Children.forEach(n.props.children,l=>{t.push(l)}):n.type===r.A?s.push(n):C.push(n)}}),{svgChildren:s,htmlChildren:t,otherChildren:C}},[g,h])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((b,c,e)=>{e.d(c,{R:()=>n});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),g={};g.insert="head",g.singleton=!1;var h=o()(p.A,g);const s=p.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=({data:a})=>(0,t.jsxs)(t.Fragment,{children:[a?.label,": ",a?.valueDisplay||a?.value]}),n=({data:a,top:i,left:l,component:_=C,children:m,className:y,style:x,renderContainer:u=!0})=>{const f=m||a&&(0,t.jsx)(_,{data:a,className:y});return u?(0,t.jsx)("div",{className:s.tooltip,style:{top:i,left:l,...x},role:"tooltip",children:f}):f};try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((b,c,e)=>{e.d(c,{v:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({initialHeight:p=0}={}){const[g,h]=(0,r.useState)(p),s=(0,r.useRef)(null);return[(0,r.useCallback)(C=>{if(s.current&&(s.current.disconnect(),s.current=null),C){const n=()=>{h(C.getBoundingClientRect().height||0)};n();const a=new window.ResizeObserver(n);a.observe(C),s.current=a}},[]),g]}}),"../charts/src/stories/legend-config.tsx":((b,c,e)=>{e.d(c,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((b,c,e)=>{e.d(c,{E:()=>o});var r=e("../number-formatters/src/index.ts");const o=p=>(0,r.ZV)(p/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
