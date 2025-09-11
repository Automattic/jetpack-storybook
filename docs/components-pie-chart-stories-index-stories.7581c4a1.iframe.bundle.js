"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":((b,h,e)=>{e.r(h),e.d(h,{CompositionAPI:()=>u,CustomLabelColors:()=>C,CustomLegendPositioning:()=>m,Default:()=>a,ErrorStates:()=>S,Responsiveness:()=>f,WithCompositionLegend:()=>_,WithLegend:()=>i,WithTooltips:()=>p,__namedExportsOrder:()=>E,default:()=>n});var r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),o=e("../charts/src/stories/chart-decorator.tsx"),d=e("../charts/src/stories/legend-config.tsx"),l=e("../charts/src/stories/sample-data/index.ts"),c=e("../charts/src/stories/theme-config.tsx"),s=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts/Types/Pie Chart",component:s.A,parameters:{layout:"centered"},decorators:[o.OI],argTypes:{...o.xo,...c.jW,...d.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments"},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments"},showLabels:{control:"boolean",description:"Show or hide labels on pie segments"}},render:({labelTextColor:T,labelBackgroundColor:A,...G})=>{const w=(0,t.jsx)(s.A,{...G});return T||A?(0,t.jsx)(r.S,{theme:{labelTextColor:T,labelBackgroundColor:A},children:w}):w}},a={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:l.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},p={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},i={args:{...a.args,showLegend:!0}},_={render:T=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(s.A,{size:300,data:T.data,showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal",legendValueDisplay:T.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(s.A,{size:300,data:T.data,legendValueDisplay:T.legendValueDisplay,children:(0,t.jsx)(s.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),args:{data:l.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},m={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},y={...a.args,resize:"both"};delete y.size;const f={args:y,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},u={render:T=>{const A=T.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(s.W,{data:A,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:T.legendValueDisplay||"value",children:[(0,t.jsx)(s.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(s.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(s.W.HTML,{children:[(0,t.jsx)(s.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:l.Mc},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},C={args:{...a.args,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},S={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(s.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},E=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...i.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((b,h,e)=>{e.d(h,{f:()=>g});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),d=e("../charts/src/utils/format-percentage.ts"),l=e("../charts/src/utils/get-styles.ts");function c(n,a,p="percentage"){if(!a||p==="none")return"";if("percentage"in n){const i=n;switch(p){case"percentage":return(0,d.E)(i.percentage);case"value":return i.value.toString();case"valueDisplay":return i.valueDisplay||i.value.toString();default:return""}}return"value"in n?n.value.toString():""}function s(n,a,p,i,_,m,y){const f=(u,C)=>{const{shapeStyles:S}=(0,l.jU)(u,C,a,y),E={label:u.label,value:p?u.data?.length?.toString()||"0":"",color:(0,l.gO)(u,C,a.colors),shapeStyle:S,group:u.group,index:C,overrideColor:u.options?.stroke};return i&&m?{...E,glyphSize:_,renderGlyph:m}:E};return n.map(f)}function t(n,a,p,i,_,m,y){const f=(u,C)=>{const S={label:u.label,value:c(u,p,i),color:u.color??a.colors[C%a.colors.length],group:u.group,index:C,overrideColor:u.color};return _&&y?{...S,glyphSize:m,renderGlyph:y}:S};return n.map(f)}function g(n,a={},p){const{showValues:i=!1,legendValueDisplay:_="percentage",withGlyph:m=!1,glyphSize:y=8,renderGlyph:f}=a,u=(0,o.p)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?s(n,u,i,m,y,f,p):t(n,u,i,_,m,y,f),[n,u,i,_,m,y,f,p])}}),"../charts/src/components/pie-chart/pie-chart.tsx":((b,h,e)=>{e.d(h,{W:()=>_e,A:()=>ve});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../charts/src/hooks/use-element-height.ts"),s=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const g=({withTooltips:x})=>{const{tooltipOpen:I,tooltipLeft:L,tooltipTop:P,tooltipData:M,hideTooltip:z,showTooltip:O}=(0,t.A)(),Y=(0,l.useCallback)((U,B)=>{if(!x)return;const R=(0,s.A)(U);R&&O({tooltipData:B,tooltipLeft:R.x,tooltipTop:R.y-10})},[x,O]),X=(0,l.useCallback)(()=>{x&&z()},[x,z]);return{onMouseMove:Y,onMouseLeave:X,tooltipOpen:I,tooltipData:M||null,tooltipLeft:L,tooltipTop:P}};var n=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),a=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),p=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),i=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),_=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=e("../charts/src/utils/create-composition.ts"),y=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),f=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),u=e("../charts/src/components/legend/legend.tsx"),C=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),S=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),E=e("../charts/src/components/private/chart-composition/chart-html.tsx"),T=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),A=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),G=e("../charts/src/components/tooltip/base-tooltip.tsx"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),me=e.n(w),te=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),H={};H.insert="head",H.singleton=!1;var Ne=me()(te.A,H);const W=te.A.locals||{};var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ge=x=>{if(!x.length)return{isValid:!1,message:"No data available"};if(x.some(P=>P.percentage<0||P.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=x.reduce((P,M)=>P+M.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},se=({data:x,chartId:I,withTooltips:L=!1,className:P,showLegend:M=!1,legendOrientation:z="horizontal",legendPosition:O="bottom",legendAlignment:Y="center",legendShape:X="circle",size:U,thickness:B=1,padding:R=20,gapScale:$=0,cornerScale:K=0,showLabels:xe=!0,legendValueDisplay:ne="percentage",children:ye=null})=>{const Q=(0,n.p)(),Z=(0,a.R)(I),[fe,be]=(0,c.v)(),{onMouseMove:Ce,onMouseLeave:Se,tooltipOpen:Te,tooltipData:oe,tooltipLeft:je,tooltipTop:Pe}=g({withTooltips:L}),De=(0,l.useMemo)(()=>({showValues:!0,legendValueDisplay:ne}),[ne]),Ee=(0,f.f)(x,De),{isValid:ae,message:Le}=ge(x),{svgChildren:Me,htmlChildren:Ae,otherChildren:Oe}=(0,C.n)(ye,"PieChart"),Be=(0,l.useMemo)(()=>({thickness:B,gapScale:$,cornerScale:K}),[B,$,K]);(0,p.t)({chartId:Z,legendItems:Ee,chartType:"pie",isDataValid:ae,metadata:Be});const{resolveGroupColor:Ie}=(0,i.j)();if(!ae)return(0,v.jsx)("div",{className:(0,d.A)("pie-chart",W["pie-chart"],P),children:(0,v.jsx)("div",{className:W["error-message"],children:Le})});const k=U,re=U,V=M&&O==="top"?re-be:re,Re=Math.min(k,V)/2,ke=k/2,Ve=V/2,we=$*(2*Math.PI/x.length),F=Re-R,le=B===0?0:F*(1-B),We=(F-le)/2,ze=K?Math.min(K*F,We):0,Ue=x.map((D,j)=>({...D,index:j})),ie={value:D=>D.value,fill:({group:D,index:j,color:J})=>Ie({group:D,index:j,overrideColor:J})};return(0,v.jsx)(T.O.Provider,{value:{chartId:Z,chartWidth:k,chartHeight:V},children:(0,v.jsxs)("div",{className:(0,d.A)("pie-chart",W["pie-chart"],P),style:{display:"flex",flexDirection:M&&O==="top"?"column-reverse":"column"},children:[(0,v.jsx)("svg",{viewBox:`0 0 ${k} ${V}`,preserveAspectRatio:"xMidYMid meet",width:k,height:V,children:(0,v.jsxs)(r.A,{top:Ve,left:ke,children:[(0,v.jsx)(o.A,{data:Ue,pieValue:ie.value,outerRadius:F,innerRadius:le,padAngle:we,cornerRadius:ze,children:D=>D.arcs.map((j,J)=>{const[de,ce]=D.path.centroid(j),Ke=j.endAngle-j.startAngle>=.25,Fe=He=>Ce(He,j.data),q={d:D.path(j)||"",fill:ie.fill(j.data)};L&&(q.onMouseMove=Fe,q.onMouseLeave=Se);const ee=12,Ge=(0,y.A)(j.data.label,{fontSize:ee}),pe=6,he=Ge+pe*2,ue=ee+pe*2;return(0,v.jsxs)("g",{children:[(0,v.jsx)("path",{...q}),xe&&Ke&&(0,v.jsxs)("g",{children:[Q.labelBackgroundColor&&(0,v.jsx)("rect",{x:de-he/2,y:ce-ue/2,width:he,height:ue,fill:Q.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,v.jsx)("text",{x:de,y:ce,dy:".33em",fill:Q.labelTextColor||"#333",fontSize:ee,textAnchor:"middle",pointerEvents:"none",children:j.data.label})]})]},`arc-${J}`)})}),Me]})}),M&&(0,v.jsx)(u.s,{orientation:z,position:O,alignment:Y,className:W["pie-chart-legend"],shape:X,ref:fe,chartId:Z}),L&&Te&&oe&&(0,v.jsx)(G.R,{data:oe,top:Pe||0,left:je||0,style:{transform:"translate(-50%, -100%)"}}),Ae,Oe]})})},N=x=>(0,l.useContext)(_.m)?(0,v.jsx)(se,{...x}):(0,v.jsx)(_.S,{children:(0,v.jsx)(se,{...x})});N.displayName="PieChart";const _e=(0,m.E)(N,{Legend:u.s,SVG:S.d,HTML:E.a}),ve=(0,m.E)((0,A.F)(N),{Legend:u.s,SVG:S.d,HTML:E.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((b,h,e)=>{e.d(h,{a:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,r.jsx)(r.Fragment,{children:d});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((b,h,e)=>{e.d(h,{d:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,r.jsx)(r.Fragment,{children:d});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((b,h,e)=>{e.d(h,{n:()=>d});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(l,c){return(0,o.useMemo)(()=>{const s=[],t=[],g=[];return o.Children.forEach(l,n=>{if((0,o.isValidElement)(n)){const p=n.type?.displayName;p===`${c}.SVG`||p==="Chart.SVG"?n.props?.children&&o.Children.forEach(n.props.children,i=>{s.push(i)}):p===`${c}.HTML`||p==="Chart.HTML"?n.props?.children&&o.Children.forEach(n.props.children,i=>{t.push(i)}):n.type===r.A?s.push(n):g.push(n)}}),{svgChildren:s,htmlChildren:t,otherChildren:g}},[l,c])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((b,h,e)=>{e.d(h,{R:()=>n});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var c=o()(d.A,l);const s=d.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({data:a})=>(0,t.jsxs)(t.Fragment,{children:[a?.label,": ",a?.valueDisplay||a?.value]}),n=({data:a,top:p,left:i,component:_=g,children:m,className:y})=>(0,t.jsx)("div",{className:s.tooltip,style:{top:p,left:i},role:"tooltip",children:m||a&&(0,t.jsx)(_,{data:a,className:y})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((b,h,e)=>{e.d(h,{v:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({initialHeight:d=0}={}){const[l,c]=(0,r.useState)(d),s=(0,r.useRef)(null);return[(0,r.useCallback)(g=>{if(s.current&&(s.current.disconnect(),s.current=null),g){const n=()=>{c(g.getBoundingClientRect().height||0)};n();const a=new window.ResizeObserver(n);a.observe(g),s.current=a}},[]),l]}}),"../charts/src/stories/legend-config.tsx":((b,h,e)=>{e.d(h,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((b,h,e)=>{e.d(h,{E:()=>o});var r=e("../number-formatters/src/index.ts");const o=d=>(0,r.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}),"../charts/src/utils/get-styles.ts":((b,h,e)=>{e.d(h,{c0:()=>r,gO:()=>o,jU:()=>d});function r(l,c,s){const t=s?.lineChart?.lineStyles?.[l.options?.type],g=s?.seriesLineStyles?.[c%s.seriesLineStyles.length];return l.options?.seriesLineStyle??t??g??{}}function o(l,c,s){return l.options?.stroke??s[c%s.length]}function d(l,c,s,t){const g=l.options?.legendShapeStyle??{},n=t==="line"?r(l,c,s):{},a=s.legendShapeStyles?.[c],p={...g,...n};return Object.values(p).some(i=>i!=null&&i!=="")?{shapeStyles:p}:{shapeStyles:a??{}}}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((b,h,e)=>{e.d(h,{A:()=>s});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),c=l()(o());c.push([b.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),c.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const s=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((b,h,e)=>{e.d(h,{A:()=>s});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),c=l()(o());c.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),c.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const s=c})}]);
