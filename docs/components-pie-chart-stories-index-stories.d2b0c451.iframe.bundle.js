"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((v,l,e)=>{e.d(l,{A:()=>s});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),p=e.n(d),h=p()(n());h.push([v.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),h.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const s=h}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((v,l,e)=>{e.d(l,{A:()=>s});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),p=e.n(d),h=p()(n());h.push([v.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),h.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const s=h}),"../charts/src/components/pie-chart/pie-chart.tsx":((v,l,e)=>{e.d(l,{W:()=>ue,A:()=>ge});var o=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),p=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../charts/src/hooks/use-element-height.ts"),c=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),r=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),m=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),u=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),x=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),y=e("../charts/src/utils/create-composition.ts"),D=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),T=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),g=e("../charts/src/components/legend/legend.tsx"),f=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),S=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),w=e("../charts/src/components/private/chart-composition/chart-html.tsx"),a=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),L=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),z=e("../charts/src/components/tooltip/base-tooltip.tsx"),B=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),he=e.n(B),Q=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),K={};K.insert="head",K.singleton=!1;var nt=he()(Q.A,K);const W=Q.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const me=_=>{if(!_.length)return{isValid:!1,message:"No data available"};if(_.some(A=>A.percentage<0||A.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const P=_.reduce((A,M)=>A+M.percentage,0);return Math.abs(P-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},Z=({data:_,chartId:F,withTooltips:P=!1,className:A,showLegend:M=!1,legendOrientation:_e="horizontal",legendPosition:I="bottom",legendAlignment:ve="center",legendMaxWidth:xe,legendTextOverflow:ye="wrap",legendShape:fe="circle",size:J,thickness:V=1,padding:be=20,gapScale:G=0,cornerScale:R=0,showLabels:Ce=!0,legendValueDisplay:q="percentage",children:Te=null,tooltipOffsetX:Se=0,tooltipOffsetY:je=-15})=>{const H=(0,c.p)(),N=(0,r.R)(F),[Pe,ee]=(0,j.v)(),{tooltipOpen:Ae,tooltipLeft:De,tooltipTop:Le,tooltipData:te,hideTooltip:ne,showTooltip:Me}=(0,p.A)(),{containerRef:Ee,TooltipInPortal:Oe}=(0,h.A)({detectBounds:!0,scroll:!0,debounce:0}),we=(0,t.useCallback)(()=>{P&&ne()},[P,ne]),Be=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:q}),[q]),We=(0,T.f)(_,Be),{isValid:se,message:Ie}=me(_),{svgChildren:Ve,htmlChildren:Re,otherChildren:ke}=(0,f.n)(Te,"PieChart"),ze=(0,t.useMemo)(()=>({thickness:V,gapScale:G,cornerScale:R}),[V,G,R]);(0,m.t)({chartId:N,legendItems:We,chartType:"pie",isDataValid:se,metadata:ze});const{getElementStyles:Ke}=(0,u.j)();if(!se)return(0,i.jsx)("div",{className:(0,s.A)("pie-chart",W["pie-chart"],A),children:(0,i.jsx)("div",{className:W["error-message"],children:Ie})});const E=J,oe=J,O=M&&I==="top"?oe-ee:oe,Ue=Math.min(E,O)/2,Fe=E/2,Ge=O/2,He=G*(2*Math.PI/_.length),k=Ue-be,ae=V===0?0:k*(1-V),Ne=(k-ae)/2,Ye=R?Math.min(R*k,Ne):0,Xe=_.map((b,C)=>({...b,index:C})),re={value:b=>b.value,fill:b=>Ke({data:b,index:b.index}).color};return(0,i.jsx)(a.O.Provider,{value:{chartId:N,chartWidth:E,chartHeight:O},children:(0,i.jsxs)("div",{ref:Ee,className:(0,s.A)("pie-chart",W["pie-chart"],A),style:{display:"flex",flexDirection:M&&I==="top"?"column-reverse":"column"},children:[(0,i.jsx)("svg",{viewBox:`0 0 ${E} ${O}`,preserveAspectRatio:"xMidYMid meet",width:E,height:O,children:(0,i.jsxs)(n.A,{top:Ge,left:Fe,children:[(0,i.jsx)(d.A,{data:Xe,pieValue:re.value,outerRadius:k,innerRadius:ae,padAngle:He,cornerRadius:Ye,children:b=>b.arcs.map((C,$e)=>{const[ie,le]=b.path.centroid(C),Qe=C.endAngle-C.startAngle>=.25,Ze=et=>{if(!P)return;const $=(0,o.A)(et);if($){const tt=M&&I==="top"?ee:0;Me({tooltipData:C.data,tooltipLeft:$.x+Se,tooltipTop:$.y+tt+je})}},Je={d:b.path(C)||"",fill:re.fill(C.data),"data-testid":"pie-segment"},Y={};P&&(Y.onMouseMove=Ze,Y.onMouseLeave=we);const X=12,qe=(0,D.A)(C.data.label,{fontSize:X}),de=6,ce=qe+de*2,pe=X+de*2;return(0,i.jsxs)("g",{...Y,children:[(0,i.jsx)("path",{...Je}),Ce&&Qe&&(0,i.jsxs)("g",{children:[H.labelBackgroundColor&&(0,i.jsx)("rect",{x:ie-ce/2,y:le-pe/2,width:ce,height:pe,fill:H.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,i.jsx)("text",{x:ie,y:le,dy:".33em",fill:H.labelTextColor||"#333",fontSize:X,textAnchor:"middle",pointerEvents:"none",children:C.data.label})]})]},`arc-${$e}`)})}),Ve]})}),M&&(0,i.jsx)(g.s,{orientation:_e,position:I,alignment:ve,maxWidth:xe,textOverflow:ye,className:W["pie-chart-legend"],shape:fe,ref:Pe,chartId:N}),P&&Ae&&te&&(0,i.jsx)(Oe,{top:Le||0,left:De||0,children:(0,i.jsx)("div",{role:"tooltip",children:(0,i.jsx)(z.R,{data:te,top:0,left:0,renderContainer:!1})})}),Re,ke]})})},U=_=>(0,t.useContext)(x.m)?(0,i.jsx)(Z,{..._}):(0,i.jsx)(x.S,{children:(0,i.jsx)(Z,{..._})});U.displayName="PieChart";const ue=(0,y.E)(U,{Legend:g.s,SVG:S.d,HTML:w.a}),ge=(0,y.E)((0,L.F)(U),{Legend:g.s,SVG:S.d,HTML:w.a})}),"../charts/src/components/pie-chart/stories/index.stories.tsx":((v,l,e)=>{e.r(l),e.d(l,{CompositionAPI:()=>g,CustomLabelColors:()=>f,CustomLegendPositioning:()=>y,Default:()=>r,ErrorStates:()=>S,Responsiveness:()=>T,WithCompositionLegend:()=>x,WithLegend:()=>u,WithTooltips:()=>m,__namedExportsOrder:()=>w,default:()=>c});var o=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),n=e("../charts/src/stories/chart-decorator.tsx"),d=e("../charts/src/stories/legend-config.tsx"),p=e("../charts/src/stories/sample-data/index.ts"),h=e("../charts/src/stories/theme-config.tsx"),s=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/Charts/Types/Pie Chart",component:s.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...n.xo,...h.jW,...d.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments"},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments"},showLabels:{control:"boolean",description:"Show or hide labels on pie segments"}},render:({labelTextColor:a,labelBackgroundColor:L,...z})=>{const B=(0,t.jsx)(s.A,{...z});return a||L?(0,t.jsx)(o.S,{theme:{labelTextColor:a,labelBackgroundColor:L},children:B}):B}},r={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:p.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},m={args:{...r.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},u={args:{...r.args,showLegend:!0}},x={render:a=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(s.A,{size:300,data:a.data,showLegend:!0,legendPosition:a.legendPosition||"bottom",legendOrientation:a.legendOrientation||"horizontal",legendAlignment:a.legendAlignment||"center",legendMaxWidth:a.legendMaxWidth,legendTextOverflow:a.legendTextOverflow||"wrap",legendValueDisplay:a.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(s.A,{size:300,data:a.data,legendValueDisplay:a.legendValueDisplay,children:(0,t.jsx)(s.A.Legend,{position:a.legendPosition||"bottom",orientation:a.legendOrientation||"horizontal",alignment:a.legendAlignment||"center",maxWidth:a.legendMaxWidth,textOverflow:a.legendTextOverflow||"wrap"})})]})]}),args:{data:p.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},y={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},D={...r.args,resize:"both"};delete D.size;const T={args:D,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},g={render:a=>{const L=a.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(s.W,{data:L,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:a.legendValueDisplay||"value",children:[(0,t.jsx)(s.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(s.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(s.W.HTML,{children:[(0,t.jsx)(s.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:p.Mc},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},f={args:{...r.args,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},S={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(s.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},w=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((v,l,e)=>{e.d(l,{a:()=>n});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:d})=>(0,o.jsx)(o.Fragment,{children:d});n.displayName="Chart.HTML";try{n.displayName="Chart.HTML",n.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((v,l,e)=>{e.d(l,{d:()=>n});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:d})=>(0,o.jsx)(o.Fragment,{children:d});n.displayName="Chart.SVG";try{n.displayName="Chart.SVG",n.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((v,l,e)=>{e.d(l,{n:()=>d});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(p,h){return(0,n.useMemo)(()=>{const s=[],t=[],j=[];return n.Children.forEach(p,c=>{if((0,n.isValidElement)(c)){const m=c.type?.displayName;m===`${h}.SVG`||m==="Chart.SVG"?c.props?.children&&n.Children.forEach(c.props.children,u=>{s.push(u)}):m===`${h}.HTML`||m==="Chart.HTML"?c.props?.children&&n.Children.forEach(c.props.children,u=>{t.push(u)}):c.type===o.A?s.push(c):j.push(c)}}),{svgChildren:s,htmlChildren:t,otherChildren:j}},[p,h])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((v,l,e)=>{e.d(l,{R:()=>c});var o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),p={};p.insert="head",p.singleton=!1;var h=n()(d.A,p);const s=d.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({data:r})=>(0,t.jsxs)(t.Fragment,{children:[r?.label,": ",r?.valueDisplay||r?.value]}),c=({data:r,top:m,left:u,component:x=j,children:y,className:D,style:T,renderContainer:g=!0})=>{const f=y||r&&(0,t.jsx)(x,{data:r,className:D});return g?(0,t.jsx)("div",{className:s.tooltip,style:{top:m,left:u,...T},role:"tooltip",children:f}):f};try{c.displayName="BaseTooltip",c.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:c.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/legend-config.tsx":((v,l,e)=>{e.d(l,{r:()=>o});const o={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{o.displayName="legendArgTypes",o.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
