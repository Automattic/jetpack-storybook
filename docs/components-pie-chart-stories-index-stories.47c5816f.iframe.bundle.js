"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":((C,h,e)=>{e.r(h),e.d(h,{CompositionAPI:()=>m,CustomLabelColors:()=>S,CustomLegendPositioning:()=>g,Default:()=>a,ErrorStates:()=>T,Responsiveness:()=>b,WithCompositionLegend:()=>v,WithLegend:()=>i,WithTooltips:()=>p,__namedExportsOrder:()=>M,default:()=>s});var r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),o=e("../charts/src/stories/chart-decorator.tsx"),d=e("../charts/src/stories/legend-config.tsx"),l=e("../charts/src/stories/sample-data/index.ts"),c=e("../charts/src/stories/theme-config.tsx"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s={title:"JS Packages/Charts/Types/Pie Chart",component:n.A,parameters:{layout:"centered"},decorators:[o.OI],argTypes:{...o.xo,...c.jW,...d.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments"},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments"},showLabels:{control:"boolean",description:"Show or hide labels on pie segments"}},render:({labelTextColor:u,labelBackgroundColor:A,...F})=>{const R=(0,t.jsx)(n.A,{...F});return u||A?(0,t.jsx)(r.S,{theme:{labelTextColor:u,labelBackgroundColor:A},children:R}):R}},a={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:l.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},p={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},i={args:{...a.args,showLegend:!0}},v={render:u=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(n.A,{size:300,data:u.data,showLegend:!0,legendPosition:u.legendPosition||"bottom",legendOrientation:u.legendOrientation||"horizontal",legendAlignment:u.legendAlignment||"center",legendMaxWidth:u.legendMaxWidth,legendTextOverflow:u.legendTextOverflow||"wrap",legendValueDisplay:u.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(n.A,{size:300,data:u.data,legendValueDisplay:u.legendValueDisplay,children:(0,t.jsx)(n.A.Legend,{position:u.legendPosition||"bottom",orientation:u.legendOrientation||"horizontal",alignment:u.legendAlignment||"center",maxWidth:u.legendMaxWidth,textOverflow:u.legendTextOverflow||"wrap"})})]})]}),args:{data:l.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},g={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},f={...a.args,resize:"both"};delete f.size;const b={args:f,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},m={render:u=>{const A=u.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(n.W,{data:A,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:u.legendValueDisplay||"value",children:[(0,t.jsx)(n.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(n.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(n.W.HTML,{children:[(0,t.jsx)(n.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:l.Mc},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},S={args:{...a.args,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},T={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(n.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(n.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},M=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((C,h,e)=>{e.d(h,{f:()=>_});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),d=e("../charts/src/utils/format-percentage.ts"),l=e("../charts/src/utils/get-styles.ts");function c(s,a,p="percentage"){if(!a||p==="none")return"";if("percentage"in s){const i=s;switch(p){case"percentage":return(0,d.E)(i.percentage);case"value":return i.value.toString();case"valueDisplay":return i.valueDisplay||i.value.toString();default:return""}}return"value"in s?s.value.toString():""}function n(s,a,p,i,v,g,f){const b=(m,S)=>{const{shapeStyles:T}=(0,l.jU)(m,S,a,f),M={label:m.label,value:p?m.data?.length?.toString()||"0":"",color:(0,l.gO)(m,S,a.colors),shapeStyle:T,group:m.group,index:S,overrideColor:m.options?.stroke};return i&&g?{...M,glyphSize:v,renderGlyph:g}:M};return s.map(b)}function t(s,a,p,i,v,g,f){const b=(m,S)=>{const T={label:m.label,value:c(m,p,i),color:m.color??a.colors[S%a.colors.length],group:m.group,index:S,overrideColor:m.color};return v&&f?{...T,glyphSize:g,renderGlyph:f}:T};return s.map(b)}function _(s,a={},p){const{showValues:i=!1,legendValueDisplay:v="percentage",withGlyph:g=!1,glyphSize:f=8,renderGlyph:b}=a,m=(0,o.p)();return(0,r.useMemo)(()=>!s||!Array.isArray(s)||s.length===0?[]:"data"in s[0]?n(s,m,i,g,f,b,p):t(s,m,i,v,g,f,b),[s,m,i,v,g,f,b,p])}}),"../charts/src/components/pie-chart/pie-chart.tsx":((C,h,e)=>{e.d(h,{W:()=>ve,A:()=>xe});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../charts/src/hooks/use-element-height.ts"),n=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const _=({withTooltips:y})=>{const{tooltipOpen:B,tooltipLeft:E,tooltipTop:j,tooltipData:L,hideTooltip:V,showTooltip:O}=(0,t.A)(),N=(0,l.useCallback)((X,$)=>{if(!y)return;const w=(0,n.A)(X);w&&O({tooltipData:$,tooltipLeft:w.x,tooltipTop:w.y-10})},[y,O]),Y=(0,l.useCallback)(()=>{y&&V()},[y,V]);return{onMouseMove:N,onMouseLeave:Y,tooltipOpen:B,tooltipData:L||null,tooltipLeft:E,tooltipTop:j}};var s=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),a=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),p=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),i=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),v=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),g=e("../charts/src/utils/create-composition.ts"),f=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),b=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),m=e("../charts/src/components/legend/legend.tsx"),S=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),T=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),M=e("../charts/src/components/private/chart-composition/chart-html.tsx"),u=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),A=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),F=e("../charts/src/components/tooltip/base-tooltip.tsx"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ge=e.n(R),ne=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),G={};G.insert="head",G.singleton=!1;var Xe=ge()(ne.A,G);const k=ne.A.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _e=y=>{if(!y.length)return{isValid:!1,message:"No data available"};if(y.some(j=>j.percentage<0||j.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const E=y.reduce((j,L)=>j+L.percentage,0);return Math.abs(E-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},se=({data:y,chartId:B,withTooltips:E=!1,className:j,showLegend:L=!1,legendOrientation:V="horizontal",legendPosition:O="bottom",legendAlignment:N="center",legendMaxWidth:Y,legendTextOverflow:X="wrap",legendShape:$="circle",size:w,thickness:z=1,padding:ye=20,gapScale:Q=0,cornerScale:U=0,showLabels:fe=!0,legendValueDisplay:oe="percentage",children:be=null})=>{const Z=(0,s.p)(),J=(0,a.R)(B),[Ce,Se]=(0,c.v)(),{onMouseMove:Te,onMouseLeave:Pe,tooltipOpen:je,tooltipData:ae,tooltipLeft:De,tooltipTop:Me}=_({withTooltips:E}),Ee=(0,l.useMemo)(()=>({showValues:!0,legendValueDisplay:oe}),[oe]),Le=(0,b.f)(y,Ee),{isValid:re,message:Ae}=_e(y),{svgChildren:Oe,htmlChildren:we,otherChildren:Be}=(0,S.n)(be,"PieChart"),We=(0,l.useMemo)(()=>({thickness:z,gapScale:Q,cornerScale:U}),[z,Q,U]);(0,p.t)({chartId:J,legendItems:Le,chartType:"pie",isDataValid:re,metadata:We});const{resolveGroupColor:Ie}=(0,i.j)();if(!re)return(0,x.jsx)("div",{className:(0,d.A)("pie-chart",k["pie-chart"],j),children:(0,x.jsx)("div",{className:k["error-message"],children:Ae})});const W=w,le=w,I=L&&O==="top"?le-Se:le,Re=Math.min(W,I)/2,ke=W/2,Ve=I/2,ze=Q*(2*Math.PI/y.length),K=Re-ye,ie=z===0?0:K*(1-z),Ue=(K-ie)/2,Ke=U?Math.min(U*K,Ue):0,Fe=y.map((D,P)=>({...D,index:P})),de={value:D=>D.value,fill:({group:D,index:P,color:q})=>Ie({group:D,index:P,overrideColor:q})};return(0,x.jsx)(u.O.Provider,{value:{chartId:J,chartWidth:W,chartHeight:I},children:(0,x.jsxs)("div",{className:(0,d.A)("pie-chart",k["pie-chart"],j),style:{display:"flex",flexDirection:L&&O==="top"?"column-reverse":"column"},children:[(0,x.jsx)("svg",{viewBox:`0 0 ${W} ${I}`,preserveAspectRatio:"xMidYMid meet",width:W,height:I,children:(0,x.jsxs)(r.A,{top:Ve,left:ke,children:[(0,x.jsx)(o.A,{data:Fe,pieValue:de.value,outerRadius:K,innerRadius:ie,padAngle:ze,cornerRadius:Ke,children:D=>D.arcs.map((P,q)=>{const[ce,pe]=D.path.centroid(P),Ge=P.endAngle-P.startAngle>=.25,He=Ye=>Te(Ye,P.data),ee={d:D.path(P)||"",fill:de.fill(P.data)};E&&(ee.onMouseMove=He,ee.onMouseLeave=Pe);const te=12,Ne=(0,f.A)(P.data.label,{fontSize:te}),he=6,me=Ne+he*2,ue=te+he*2;return(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{...ee}),fe&&Ge&&(0,x.jsxs)("g",{children:[Z.labelBackgroundColor&&(0,x.jsx)("rect",{x:ce-me/2,y:pe-ue/2,width:me,height:ue,fill:Z.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,x.jsx)("text",{x:ce,y:pe,dy:".33em",fill:Z.labelTextColor||"#333",fontSize:te,textAnchor:"middle",pointerEvents:"none",children:P.data.label})]})]},`arc-${q}`)})}),Oe]})}),L&&(0,x.jsx)(m.s,{orientation:V,position:O,alignment:N,maxWidth:Y,textOverflow:X,className:k["pie-chart-legend"],shape:$,ref:Ce,chartId:J}),E&&je&&ae&&(0,x.jsx)(F.R,{data:ae,top:Me||0,left:De||0,style:{transform:"translate(-50%, -100%)"}}),we,Be]})})},H=y=>(0,l.useContext)(v.m)?(0,x.jsx)(se,{...y}):(0,x.jsx)(v.S,{children:(0,x.jsx)(se,{...y})});H.displayName="PieChart";const ve=(0,g.E)(H,{Legend:m.s,SVG:T.d,HTML:M.a}),xe=(0,g.E)((0,A.F)(H),{Legend:m.s,SVG:T.d,HTML:M.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((C,h,e)=>{e.d(h,{a:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,r.jsx)(r.Fragment,{children:d});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((C,h,e)=>{e.d(h,{d:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,r.jsx)(r.Fragment,{children:d});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((C,h,e)=>{e.d(h,{n:()=>d});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(l,c){return(0,o.useMemo)(()=>{const n=[],t=[],_=[];return o.Children.forEach(l,s=>{if((0,o.isValidElement)(s)){const p=s.type?.displayName;p===`${c}.SVG`||p==="Chart.SVG"?s.props?.children&&o.Children.forEach(s.props.children,i=>{n.push(i)}):p===`${c}.HTML`||p==="Chart.HTML"?s.props?.children&&o.Children.forEach(s.props.children,i=>{t.push(i)}):s.type===r.A?n.push(s):_.push(s)}}),{svgChildren:n,htmlChildren:t,otherChildren:_}},[l,c])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((C,h,e)=>{e.d(h,{R:()=>s});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var c=o()(d.A,l);const n=d.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=({data:a})=>(0,t.jsxs)(t.Fragment,{children:[a?.label,": ",a?.valueDisplay||a?.value]}),s=({data:a,top:p,left:i,component:v=_,children:g,className:f})=>(0,t.jsx)("div",{className:n.tooltip,style:{top:p,left:i},role:"tooltip",children:g||a&&(0,t.jsx)(v,{data:a,className:f})});try{s.displayName="BaseTooltip",s.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:s.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((C,h,e)=>{e.d(h,{v:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({initialHeight:d=0}={}){const[l,c]=(0,r.useState)(d),n=(0,r.useRef)(null);return[(0,r.useCallback)(_=>{if(n.current&&(n.current.disconnect(),n.current=null),_){const s=()=>{c(_.getBoundingClientRect().height||0)};s();const a=new window.ResizeObserver(s);a.observe(_),n.current=a}},[]),l]}}),"../charts/src/stories/legend-config.tsx":((C,h,e)=>{e.d(h,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((C,h,e)=>{e.d(h,{E:()=>o});var r=e("../number-formatters/src/index.ts");const o=d=>(0,r.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}),"../charts/src/utils/get-styles.ts":((C,h,e)=>{e.d(h,{c0:()=>r,gO:()=>o,jU:()=>d});function r(l,c,n){const t=n?.lineChart?.lineStyles?.[l.options?.type],_=n?.seriesLineStyles?.[c%n.seriesLineStyles.length];return l.options?.seriesLineStyle??t??_??{}}function o(l,c,n){return l.options?.stroke??n[c%n.length]}function d(l,c,n,t){const _=l.options?.legendShapeStyle??{},s=t==="line"?r(l,c,n):{},a=n.legendShapeStyles?.[c],p={..._,...s};return Object.values(p).some(i=>i!=null&&i!=="")?{shapeStyles:p}:{shapeStyles:a??{}}}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((C,h,e)=>{e.d(h,{A:()=>n});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),c=l()(o());c.push([C.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),c.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const n=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((C,h,e)=>{e.d(h,{A:()=>n});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),c=l()(o());c.push([C.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),c.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const n=c})}]);
