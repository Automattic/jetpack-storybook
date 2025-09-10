"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":((v,l,e)=>{e.r(l),e.d(l,{CompositionAPI:()=>f,CustomLabelColors:()=>P,CustomLegendPositioning:()=>y,Default:()=>r,ErrorStates:()=>T,Responsiveness:()=>j,WithCompositionLegend:()=>x,WithLegend:()=>u,WithTooltips:()=>m,__namedExportsOrder:()=>R,default:()=>d});var o=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),s=e("../charts/src/stories/chart-decorator.tsx"),i=e("../charts/src/stories/legend-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),p=e("../charts/src/stories/theme-config.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={title:"JS Packages/Charts/Types/Pie Chart",component:n.A,parameters:{layout:"centered"},decorators:[s.OI],argTypes:{...s.xo,...p.jW,...i.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments"},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments"},showLabels:{control:"boolean",description:"Show or hide labels on pie segments"}},render:({labelTextColor:g,labelBackgroundColor:M,...G})=>{const w=(0,t.jsx)(n.A,{...G});return g||M?(0,t.jsx)(o.S,{theme:{labelTextColor:g,labelBackgroundColor:M},children:w}):w}},r={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:a.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},m={args:{...r.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},u={args:{...r.args,showLegend:!0}},x={render:g=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(n.A,{size:300,data:g.data,showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal",legendValueDisplay:g.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(n.A,{size:300,data:g.data,legendValueDisplay:g.legendValueDisplay,children:(0,t.jsx)(n.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),args:{data:a.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},y={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},E={...r.args,resize:"both"};delete E.size;const j={args:E,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},f={render:g=>{const M=g.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(n.W,{data:M,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:g.legendValueDisplay||"value",children:[(0,t.jsx)(n.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(n.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(n.W.HTML,{children:[(0,t.jsx)(n.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:a.Mc},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},P={args:{...r.args,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},T={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(n.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},R=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                <PieChart size={300} data={args.data} showLegend={true} legendPosition="bottom" legendOrientation="horizontal" legendValueDisplay={args.legendValueDisplay} />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieChart size={300} data={args.data} legendValueDisplay={args.legendValueDisplay}>
                    <PieChart.Legend position="bottom" orientation="horizontal" alignment="center" />
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
}`,...y.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}}),"../charts/src/components/pie-chart/pie-chart.tsx":((v,l,e)=>{e.d(l,{W:()=>_e,A:()=>ve});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../charts/src/hooks/use-element-height.ts"),n=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const S=({withTooltips:h})=>{const{tooltipOpen:B,tooltipLeft:D,tooltipTop:b,tooltipData:L,hideTooltip:z,showTooltip:A}=(0,t.A)(),Y=(0,a.useCallback)((K,O)=>{if(!h)return;const V=(0,n.A)(K);V&&A({tooltipData:O,tooltipLeft:V.x,tooltipTop:V.y-10})},[h,A]),X=(0,a.useCallback)(()=>{h&&z()},[h,z]);return{onMouseMove:Y,onMouseLeave:X,tooltipOpen:B,tooltipData:L||null,tooltipLeft:D,tooltipTop:b}};var d=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),r=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),m=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),u=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),x=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),y=e("../charts/src/utils/create-composition.ts"),E=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),j=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),f=e("../charts/src/components/legend/legend.tsx"),P=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),T=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),R=e("../charts/src/components/private/chart-composition/chart-html.tsx"),g=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),M=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),G=e("../charts/src/components/tooltip/base-tooltip.tsx"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(w),te=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),H={};H.insert="head",H.singleton=!1;var Ne=ue()(te.A,H);const W=te.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ge=h=>{if(!h.length)return{isValid:!1,message:"No data available"};if(h.some(b=>b.percentage<0||b.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const D=h.reduce((b,L)=>b+L.percentage,0);return Math.abs(D-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},se=({data:h,chartId:B,withTooltips:D=!1,className:b,showLegend:L=!1,legendOrientation:z="horizontal",legendPosition:A="bottom",legendAlignment:Y="center",legendShape:X="circle",size:K,thickness:O=1,padding:V=20,gapScale:$=0,cornerScale:U=0,showLabels:xe=!0,legendValueDisplay:ne="percentage",children:ye=null})=>{const Q=(0,d.p)(),Z=(0,r.R)(B),[fe,be]=(0,p.v)(),{onMouseMove:Ce,onMouseLeave:Te,tooltipOpen:Se,tooltipData:oe,tooltipLeft:je,tooltipTop:Pe}=S({withTooltips:D}),De=(0,a.useMemo)(()=>({showValues:!0,legendValueDisplay:ne}),[ne]),Le=(0,j.f)(h,De),{isValid:ae,message:Ee}=ge(h),{svgChildren:Me,htmlChildren:Ae,otherChildren:Oe}=(0,P.n)(ye,"PieChart"),Be=(0,a.useMemo)(()=>({thickness:O,gapScale:$,cornerScale:U}),[O,$,U]);(0,m.t)({chartId:Z,legendItems:Le,chartType:"pie",isDataValid:ae,metadata:Be});const{resolveGroupColor:Ve}=(0,u.j)();if(!ae)return(0,c.jsx)("div",{className:(0,i.A)("pie-chart",W["pie-chart"],b),children:(0,c.jsx)("div",{className:W["error-message"],children:Ee})});const I=K,re=K,k=L&&A==="top"?re-be:re,Ie=Math.min(I,k)/2,ke=I/2,Re=k/2,we=$*(2*Math.PI/h.length),F=Ie-V,ie=O===0?0:F*(1-O),We=(F-ie)/2,ze=U?Math.min(U*F,We):0,Ke=h.map((C,_)=>({...C,index:_})),le={value:C=>C.value,fill:({group:C,index:_,color:J})=>Ve({group:C,index:_,overrideColor:J})};return(0,c.jsx)(g.O.Provider,{value:{chartId:Z,chartWidth:I,chartHeight:k},children:(0,c.jsxs)("div",{className:(0,i.A)("pie-chart",W["pie-chart"],b),style:{display:"flex",flexDirection:L&&A==="top"?"column-reverse":"column"},children:[(0,c.jsx)("svg",{viewBox:`0 0 ${I} ${k}`,preserveAspectRatio:"xMidYMid meet",width:I,height:k,children:(0,c.jsxs)(o.A,{top:Re,left:ke,children:[(0,c.jsx)(s.A,{data:Ke,pieValue:le.value,outerRadius:F,innerRadius:ie,padAngle:we,cornerRadius:ze,children:C=>C.arcs.map((_,J)=>{const[de,ce]=C.path.centroid(_),Ue=_.endAngle-_.startAngle>=.25,Fe=He=>Ce(He,_.data),q={d:C.path(_)||"",fill:le.fill(_.data)};D&&(q.onMouseMove=Fe,q.onMouseLeave=Te);const ee=12,Ge=(0,E.A)(_.data.label,{fontSize:ee}),pe=6,he=Ge+pe*2,me=ee+pe*2;return(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{...q}),xe&&Ue&&(0,c.jsxs)("g",{children:[Q.labelBackgroundColor&&(0,c.jsx)("rect",{x:de-he/2,y:ce-me/2,width:he,height:me,fill:Q.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,c.jsx)("text",{x:de,y:ce,dy:".33em",fill:Q.labelTextColor||"#333",fontSize:ee,textAnchor:"middle",pointerEvents:"none",children:_.data.label})]})]},`arc-${J}`)})}),Me]})}),L&&(0,c.jsx)(f.s,{orientation:z,position:A,alignment:Y,className:W["pie-chart-legend"],shape:X,ref:fe,chartId:Z}),D&&Se&&oe&&(0,c.jsx)(G.R,{data:oe,top:Pe||0,left:je||0,style:{transform:"translate(-50%, -100%)"}}),Ae,Oe]})})},N=h=>(0,a.useContext)(x.m)?(0,c.jsx)(se,{...h}):(0,c.jsx)(x.S,{children:(0,c.jsx)(se,{...h})});N.displayName="PieChart";const _e=(0,y.E)(N,{Legend:f.s,SVG:T.d,HTML:R.a}),ve=(0,y.E)((0,M.F)(N),{Legend:f.s,SVG:T.d,HTML:R.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((v,l,e)=>{e.d(l,{a:()=>s});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:i})=>(0,o.jsx)(o.Fragment,{children:i});s.displayName="Chart.HTML";try{s.displayName="Chart.HTML",s.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((v,l,e)=>{e.d(l,{d:()=>s});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:i})=>(0,o.jsx)(o.Fragment,{children:i});s.displayName="Chart.SVG";try{s.displayName="Chart.SVG",s.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((v,l,e)=>{e.d(l,{n:()=>i});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function i(a,p){return(0,s.useMemo)(()=>{const n=[],t=[],S=[];return s.Children.forEach(a,d=>{if((0,s.isValidElement)(d)){const m=d.type?.displayName;m===`${p}.SVG`||m==="Chart.SVG"?d.props?.children&&s.Children.forEach(d.props.children,u=>{n.push(u)}):m===`${p}.HTML`||m==="Chart.HTML"?d.props?.children&&s.Children.forEach(d.props.children,u=>{t.push(u)}):d.type===o.A?n.push(d):S.push(d)}}),{svgChildren:n,htmlChildren:t,otherChildren:S}},[a,p])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((v,l,e)=>{e.d(l,{R:()=>d});var o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),a={};a.insert="head",a.singleton=!1;var p=s()(i.A,a);const n=i.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=({data:r})=>(0,t.jsxs)(t.Fragment,{children:[r?.label,": ",r?.valueDisplay||r?.value]}),d=({data:r,top:m,left:u,component:x=S,children:y,className:E})=>(0,t.jsx)("div",{className:n.tooltip,style:{top:m,left:u},role:"tooltip",children:y||r&&(0,t.jsx)(x,{data:r,className:E})});try{d.displayName="BaseTooltip",d.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:d.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/legend-config.tsx":((v,l,e)=>{e.d(l,{r:()=>o});const o={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{o.displayName="legendArgTypes",o.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((v,l,e)=>{e.d(l,{A:()=>n});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(i),p=a()(s());p.push([v.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),p.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const n=p}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((v,l,e)=>{e.d(l,{A:()=>n});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(i),p=a()(s());p.push([v.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),p.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const n=p})}]);
