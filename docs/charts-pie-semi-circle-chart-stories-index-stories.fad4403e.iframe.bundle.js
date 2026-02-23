"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx"(P,p,e){e.r(p),e.d(p,{Animation:()=>c,CompositionAPI:()=>j,CustomLegendPositioning:()=>f,Default:()=>a,ErrorStates:()=>b,InteractiveLegend:()=>y,Responsiveness:()=>L,WithCompositionLegend:()=>C,WithLegend:()=>x,WithTooltips:()=>v,__namedExportsOrder:()=>D,default:()=>i});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=e("../charts/src/stories/chart-decorator.tsx"),l=e("../charts/src/stories/theme-config.tsx"),g=e("../charts/src/stories/legend-config.tsx"),_=e("../charts/src/stories/sample-data/index.ts"),s=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:s.A,parameters:{layout:"centered"},decorators:[m.OI],argTypes:{...m.xo,...l.jW,...g.r,width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},a={args:{...l.In,containerWidth:"600px",resize:"none",thickness:.4,data:_.f2,label:"OS",note:"Windows +10%",clockwise:!0}},c={args:{...a.args,animation:!0}},v={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},x={args:{...a.args,showLegend:!0}},C={render:h=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(s.A,{width:400,data:h.data,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:h.legendPosition||"bottom",legendOrientation:h.legendOrientation||"horizontal",legendAlignment:h.legendAlignment||"center",legendMaxWidth:h.legendMaxWidth,legendTextOverflow:h.legendTextOverflow||"wrap"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(s.A,{width:400,data:h.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(s.A.Legend,{position:h.legendPosition||"bottom",orientation:h.legendOrientation||"horizontal",alignment:h.legendAlignment||"center",maxWidth:h.legendMaxWidth,textOverflow:h.legendTextOverflow||"wrap"})})]})]}),args:{data:_.f2,containerWidth:"900px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},y={render:h=>(0,t.jsx)(d.S,{children:(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)("h3",{children:"Interactive Semi-Circle Chart"}),(0,t.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages adjust automatically."}),(0,t.jsx)(s.G,{chartId:"interactive-semi-circle-chart",width:h.width||400,data:h.data,label:"Performance Metrics",note:"Click legend to filter",showLegend:!0,legendInteractive:!0,legendPosition:h.legendPosition||"bottom",legendOrientation:h.legendOrientation||"horizontal",legendAlignment:h.legendAlignment||"center"})]})}),args:{data:_.f2,width:400},parameters:{docs:{description:{story:"Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider."}}}},f={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},T={...a.args,resize:"both"};delete T.width;const L={args:T,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},b={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(s.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(s.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(s.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(s.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),args:{containerHeight:"600px"},parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},j={render:h=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(s.A,{width:400,data:h.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(s.A.SVG,{children:(0,t.jsxs)(n.A,{children:[(0,t.jsx)(o.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(s.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(s.A,{width:400,data:h.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(s.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(s.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(s.A,{width:400,data:h.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(n.A,{children:[(0,t.jsx)(o.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:_.f2,containerHeight:"1000px",containerWidth:"1000px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{story:`
**New Composition API Features:**

The \`PieSemiCircleChart\` now supports a comprehensive composition API that allows you to add custom content both inside the SVG and as HTML elements around the chart.

**Available Compound Components:**

- \`PieSemiCircleChart.SVG\` - For custom SVG elements rendered inside the chart
- \`PieSemiCircleChart.HTML\` - For HTML content rendered outside the SVG
- \`PieSemiCircleChart.Legend\` - For flexible legend placement

**Key Benefits:**

1. **Flexible Layout Control** - Place content exactly where you need it
2. **Type Safety** - Full TypeScript support for all compound components
3. **Backward Compatibility** - Existing Group-based usage continues to work
4. **Robust Type Checking** - Uses displayName-based component identification instead of fragile type comparisons

**Usage Examples:**

\`\`\`tsx
<PieSemiCircleChart data={data} width={400}>
  <PieSemiCircleChart.SVG>
    <Group>
      <Text x={0} y={-50} textAnchor="middle">Custom SVG Text</Text>
    </Group>
  </PieSemiCircleChart.SVG>

  <PieSemiCircleChart.HTML>
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <PieSemiCircleChart.Legend orientation="horizontal" />
      <p>Custom HTML content</p>
    </div>
  </PieSemiCircleChart.HTML>
</PieSemiCircleChart>
\`\`\`
                `}}}},D=["Default","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    containerWidth: '600px',
    resize: 'none',
    thickness: 0.4,
    data,
    label: 'OS',
    note: 'Windows +10%',
    clockwise: true
  }
}`,...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...c.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based Legend</h3>
                <PieSemiCircleChart width={400} data={args.data} label="Performance Metrics" note="Q4 2023 Results" showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieSemiCircleChart width={400} data={args.data} label="Performance Metrics" note="Q4 2023 Results">
                    <PieSemiCircleChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieSemiCircleChart>
            </div>
        </div>,
  args: {
    data,
    containerWidth: '900px'
  },
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <div style={{
      padding: '20px'
    }}>
                <h3>Interactive Semi-Circle Chart</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. Percentages adjust automatically.
                </p>
                <PieSemiCircleChartUnresponsive chartId="interactive-semi-circle-chart" width={args.width || 400} data={args.data} label="Performance Metrics" note="Click legend to filter" showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} />
            </div>
        </GlobalChartsProvider>,
  args: {
    data,
    width: 400
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    containerWidth: '600px',
    containerHeight: '350px',
    resize: 'none',
    thickness: 0.4,
    data: [{
      label: 'MacOS',
      value: 30000,
      valueDisplay: '30K',
      percentage: 30
    }, {
      label: 'Linux',
      value: 22000,
      valueDisplay: '22K',
      percentage: 22
    }, {
      label: 'Windows',
      value: 48000,
      valueDisplay: '48K',
      percentage: 48
    }],
    label: 'OS',
    note: 'Windows +10%',
    withTooltips: true,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'end',
    legendPosition: 'top',
    legendShape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieSemiCircleChart width={300} data={[]} />
            </div>

            <div>
                <h3>Zero Total Percentage</h3>
                <PieSemiCircleChart width={300} data={[{
        label: 'A',
        value: 0,
        percentage: 0
      }, {
        label: 'B',
        value: 0,
        percentage: 0
      }]} />
            </div>

            <div>
                <h3>Negative Values</h3>
                <PieSemiCircleChart width={300} data={[{
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
                <PieSemiCircleChart width={300} data={[{
        label: 'Single Point',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  args: {
    containerHeight: '600px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the semi-circle pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '2rem'
  }}>
            <h2>PieSemiCircleChart Composition API</h2>
            <p>Demonstrates the flexible composition API with SVG and HTML compound components.</p>

            <div style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(2, 1fr)',
      marginTop: '2rem'
    }}>
                <div>
                    <h3>With Custom SVG Elements</h3>
                    <PieSemiCircleChart width={400} data={args.data} label="OS Usage" note="Q4 2023" withTooltips={true}>
                        <PieSemiCircleChart.SVG>
                            <Group>
                                <Text x={0} y={-80} textAnchor="middle" fontSize={14} fill="#666" fontStyle="italic">
                                    Custom SVG Annotation
                                </Text>
                                <circle cx={0} cy={-90} r={3} fill="#ff6b6b" />
                            </Group>
                        </PieSemiCircleChart.SVG>
                        <PieSemiCircleChart.HTML>
                            <div style={{
              marginTop: '1rem',
              textAlign: 'center',
              fontSize: '12px',
              color: '#888'
            }}>
                                \u2728 Enhanced with custom annotations
                            </div>
                        </PieSemiCircleChart.HTML>
                    </PieSemiCircleChart>
                </div>

                <div>
                    <h3>With Custom Legend and HTML Content</h3>
                    <PieSemiCircleChart width={400} data={args.data} label="Performance" note="Latest Results">
                        <PieSemiCircleChart.HTML>
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1rem'
            }}>
                                <PieSemiCircleChart.Legend orientation="horizontal" alignment="center" shape="circle" />
                                <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                                    \u{1F50D} Hover segments for details
                                </div>
                                <div style={{
                fontSize: '10px',
                color: '#666',
                textAlign: 'center',
                lineHeight: 1.4
              }}>
                                    Data updated: {new Date().toLocaleString()}
                                    <br />
                                    Source: Internal Analytics
                                </div>
                            </div>
                        </PieSemiCircleChart.HTML>
                    </PieSemiCircleChart>
                </div>
            </div>

            <div style={{
      marginTop: '3rem'
    }}>
                <h3>Legacy Support - Direct Group Components</h3>
                <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '1rem'
      }}>
                    For backward compatibility, Group components are still supported directly:
                </p>
                <PieSemiCircleChart width={400} data={args.data} label="Legacy Mode" note="Still works!">
                    <Group>
                        <Text x={0} y={-70} textAnchor="middle" fontSize={12} fill="#999">
                            Direct Group usage
                        </Text>
                        <rect x={-30} y={-85} width={60} height={2} fill="#ddd" />
                    </Group>
                </PieSemiCircleChart>
            </div>
        </div>,
  args: {
    data,
    containerHeight: '1000px',
    containerWidth: '1000px'
  },
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: \`
**New Composition API Features:**

The \\\`PieSemiCircleChart\\\` now supports a comprehensive composition API that allows you to add custom content both inside the SVG and as HTML elements around the chart.

**Available Compound Components:**

- \\\`PieSemiCircleChart.SVG\\\` - For custom SVG elements rendered inside the chart
- \\\`PieSemiCircleChart.HTML\\\` - For HTML content rendered outside the SVG
- \\\`PieSemiCircleChart.Legend\\\` - For flexible legend placement

**Key Benefits:**

1. **Flexible Layout Control** - Place content exactly where you need it
2. **Type Safety** - Full TypeScript support for all compound components
3. **Backward Compatibility** - Existing Group-based usage continues to work
4. **Robust Type Checking** - Uses displayName-based component identification instead of fragile type comparisons

**Usage Examples:**

\\\`\\\`\\\`tsx
<PieSemiCircleChart data={data} width={400}>
  <PieSemiCircleChart.SVG>
    <Group>
      <Text x={0} y={-50} textAnchor="middle">Custom SVG Text</Text>
    </Group>
  </PieSemiCircleChart.SVG>

  <PieSemiCircleChart.HTML>
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <PieSemiCircleChart.Legend orientation="horizontal" />
      <p>Custom HTML content</p>
    </div>
  </PieSemiCircleChart.HTML>
</PieSemiCircleChart>
\\\`\\\`\\\`
                \`
      }
    }
  }
}`,...j.parameters?.docs?.source}}}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(P,p,e){e.d(p,{G:()=>he,A:()=>ue});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),d=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),m=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@6.12.0/node_modules/@wordpress/i18n/build-module/index.mjs"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),r=e("../charts/src/components/legend/legend.tsx"),i=e("../charts/src/components/tooltip/base-tooltip.tsx"),a=e("../charts/src/hooks/use-element-size.ts"),c=e("../charts/src/hooks/use-interactive-legend-data.ts"),v=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),x=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),C=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),f=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),T=e("../charts/src/utils/create-composition.ts"),L=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),b=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),j=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),D=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),h=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),oe=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),ie=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),le=e.n(ie),F=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),V={};V.insert="head",V.singleton=!1;var $e=le()(F.A,V);const I=F.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const de=g.__,ce=({tooltipData:E})=>(0,u.jsx)(i.R,{data:E,top:0,left:0,renderContainer:!1}),pe=.03,me=E=>E.length?E.some(O=>O.percentage<0||O.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:E.reduce((O,R)=>O+R.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},Z=({data:E,chartId:H,width:M=400,thickness:O=.4,clockwise:R=!0,withTooltips:U=!1,showLegend:K=!1,legendOrientation:ge="horizontal",legendPosition:k="bottom",legendAlignment:_e="center",legendMaxWidth:ve,legendTextOverflow:xe="wrap",legendItemClassName:fe,legendShape:Ce="circle",legendValueDisplay:Q="percentage",legendInteractive:Y=!1,label:ye,animation:Se,note:Pe,className:Te,children:Ae,tooltipOffsetX:X=0,tooltipOffsetY:$=-15,renderTooltip:be=ce})=>{const W=(0,x.R)(H),[je,,Ee]=(0,a.L)(),{tooltipOpen:Le,tooltipLeft:Me,tooltipTop:Oe,tooltipData:J,hideTooltip:q,showTooltip:ee}=(0,m.A)(),{containerRef:we,TooltipInPortal:De,containerBounds:w}=(0,l.A)({detectBounds:!0,scroll:!0,debounce:0}),te=(0,s.useCallback)((S,A)=>{w.width===0||w.height===0||ee({tooltipData:A.data,tooltipLeft:S.clientX-w.left+X,tooltipTop:S.clientY-w.top+$})},[w.width,w.height,w.left,w.top,ee,X,$]),Ie=(0,s.useCallback)(()=>{q()},[q]),Re=(0,s.useCallback)(S=>A=>{te(A,S)},[te]),{isValid:ne,message:We}=me(E),{getElementStyles:se,isSeriesVisible:Ge}=(0,C.j)(),{visibleData:Ve,allSegmentsHidden:re,legendData:Be}=(0,c.j)({data:E,chartId:W,legendInteractive:Y,isSeriesVisible:Ge}),z=(0,s.useMemo)(()=>({value:S=>S.value,sort:(S,A)=>A.value-S.value,fill:S=>se({data:S,index:S.index}).color}),[se]),He=(0,s.useMemo)(()=>({showValues:!0,legendValueDisplay:Q}),[Q]),Ue=(0,t.f)(Be,He),{svgChildren:Ke,htmlChildren:ke,otherChildren:ze}=(0,L.n)(Ae,"PieSemiCircleChart"),Ne=(0,s.useMemo)(()=>({thickness:O,clockwise:R}),[O,R]);(0,y.t)({chartId:W,legendItems:Ue,chartType:"pie-semi-circle",isDataValid:ne,metadata:Ne});const Fe=(0,v.j)();if(!ne)return(0,u.jsx)("div",{className:I["pie-semi-circle-chart"],children:(0,u.jsx)("svg",{width:M,height:M/2,"data-testid":"pie-chart-svg",children:(0,u.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:I.error,children:We})})});const N=M/2-(K&&k==="top"?Ee:0),G=Math.min(M/2,N),ae=G*(1-O),Ze=Ve.map(S=>{const A=E.findIndex(Xe=>Xe.label===S.label);return{...S,index:A>=0?A:0}}),Qe=R?-Math.PI/2:Math.PI/2,Ye=R?Math.PI/2:-Math.PI/2;return(0,u.jsx)(h.O.Provider,{value:{chartId:W,chartWidth:M,chartHeight:G},children:(0,u.jsxs)("div",{ref:we,className:(0,_.A)("pie-semi-circle-chart",I["pie-semi-circle-chart"],{[I["pie-semi-circle-chart--legend-top"]]:K&&k==="top"},Te),"data-testid":"pie-chart-container",children:[(0,u.jsxs)("svg",{width:M,height:G,viewBox:`0 0 ${M} ${N}`,"data-testid":"pie-chart-svg",children:[(0,u.jsx)("defs",{children:(0,u.jsx)(D.A,{id:`radial-wipe-${W}`,radius:G,innerRadius:ae,startAngle:"-180deg",wipePercentage:50})}),(0,u.jsx)(n.A,{top:N,left:M/2,mask:Se&&!Fe?`url(#radial-wipe-${W})`:null,children:re?(0,u.jsx)("text",{textAnchor:"middle",y:-G/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:de("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.A,{data:Ze,pieValue:z.value,outerRadius:G,innerRadius:ae,cornerRadius:3,padAngle:pe,startAngle:Qe,endAngle:Ye,pieSort:z.sort,children:S=>S.arcs.map(A=>(0,u.jsx)("g",{onMouseMove:U?Re(A):void 0,onMouseLeave:U?Ie:void 0,children:(0,u.jsx)("path",{d:S.path(A)||"",fill:z.fill(A.data),"data-testid":"pie-segment"})},A.data.label))}),(0,u.jsxs)(n.A,{children:[(0,u.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:I.label,children:ye}),(0,u.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:I.note,children:Pe})]}),!re&&Ke]})})]}),U&&Le&&J&&(0,u.jsx)(De,{top:Oe||0,left:Me||0,children:(0,u.jsx)("div",{role:"tooltip",children:be({tooltipData:J})})}),K&&(0,u.jsx)(r.s,{orientation:ge,position:k,alignment:_e,maxWidth:ve,textOverflow:xe,legendItemClassName:fe,shape:Ce,ref:je,chartId:W,interactive:Y}),ke,ze]})})},B=E=>(0,s.useContext)(f.m)?(0,u.jsx)(Z,{...E}):(0,u.jsx)(f.S,{children:(0,u.jsx)(Z,{...E})});B.displayName="PieSemiCircleChart";const he=(0,T.E)(B,{Legend:r.s,SVG:b.d,HTML:j.a}),ue=(0,T.E)((0,oe.F)(B),{Legend:r.s,SVG:b.d,HTML:j.a})},"../charts/src/charts/private/chart-composition/chart-html.tsx"(P,p,e){e.d(p,{a:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,n.jsx)(n.Fragment,{children:d});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/charts/private/chart-composition/chart-svg.tsx"(P,p,e){e.d(p,{d:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,n.jsx)(n.Fragment,{children:d});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/charts/private/chart-composition/use-chart-children.ts"(P,p,e){e.d(p,{n:()=>d});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(m,l){return(0,o.useMemo)(()=>{const g=[],_=[],s=[];return o.Children.forEach(m,t=>{if((0,o.isValidElement)(t)){const i=t.type?.displayName;i===`${l}.SVG`||i==="Chart.SVG"?t.props?.children&&o.Children.forEach(t.props.children,a=>{g.push(a)}):i===`${l}.HTML`||i==="Chart.HTML"?t.props?.children&&o.Children.forEach(t.props.children,a=>{_.push(a)}):t.type===n.A?g.push(t):s.push(t)}}),{svgChildren:g,htmlChildren:_,otherChildren:s}},[m,l])}},"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"(P,p,e){e.d(p,{A:()=>d});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o({id:m,radius:l,innerRadius:g=0,durationMs:_=1e3,wipePercentage:s=100,direction:t="clockwise",startAngle:r="-90deg"}){const i=(l-g)*2+1,a=t==="clockwise"?-1:1,v=`${0<s&&s<=100?_*(100/s):0}ms`;return(0,n.jsx)("mask",{id:m,children:(0,n.jsx)("circle",{cx:0,cy:0,r:l,pathLength:"100",fill:"white",stroke:"black",strokeWidth:i,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${r}) scaleY(${a})`},children:(0,n.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:v,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${s/100};1`})})})}const d=o;try{o.displayName="RadialWipeAnimation",o.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:o.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(P,p,e){e.d(p,{f:()=>t});var n=e("../number-formatters/src/index.ts"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=e("../charts/src/utils/format-percentage.ts");function l(r,i,a="percentage"){if(!i||a==="none")return"";if("percentage"in r){const c=r;switch(a){case"percentage":return(0,m.E)(c.percentage);case"value":return(0,n.ZV)(c.value);case"valueDisplay":return c.valueDisplay||(0,n.ZV)(c.value);default:return""}}return"value"in r&&r.value!==null?(0,n.ZV)(r.value):""}function g(r,i,a,c,v){if(i){const x=a||c;if(x)return{...r,glyphSize:v,renderGlyph:x}}return r}function _(r,i,a,c,v,x,C){const y=(f,T)=>{const{color:L,glyph:b,shapeStyles:j}=i({data:f,index:T,legendShape:C}),D={label:f.label,value:a?f.data?.length?.toString()||"0":"",color:L,shapeStyle:j};return g(D,c,b,x,v)};return r.map(y)}function s(r,i,a,c,v,x,C,y){const f=(T,L)=>{const{color:b,glyph:j,shapeStyles:D}=i({data:T,index:L,legendShape:y}),h={label:T.label,value:l(T,a,c),color:b,shapeStyle:D};return g(h,v,j,C,x)};return r.map(f)}function t(r,i={},a){const{showValues:c=!1,legendValueDisplay:v="percentage",withGlyph:x=!1,glyphSize:C=8,renderGlyph:y}=i,{getElementStyles:f}=(0,d.j)();return(0,o.useMemo)(()=>!r||!Array.isArray(r)||r.length===0?[]:"data"in r[0]?_(r,f,c,x,C,y,a):s(r,f,c,v,x,C,y,a),[r,f,c,v,x,C,y,a])}},"../charts/src/components/tooltip/base-tooltip.tsx"(P,p,e){e.d(p,{R:()=>r});var n=e("../number-formatters/src/index.ts"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(o),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var g=d()(m.A,l);const _=m.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:i})=>(0,s.jsxs)(s.Fragment,{children:[i?.label,": ",i?.valueDisplay||(0,n.ZV)(i?.value)]}),r=({data:i,top:a,left:c,component:v=t,children:x,className:C,style:y,renderContainer:f=!0})=>{const T=x||i&&(0,s.jsx)(v,{data:i,className:C});return f?(0,s.jsx)("div",{className:_.tooltip,style:{top:a,left:c,...y},role:"tooltip",children:T}):T};try{r.displayName="BaseTooltip",r.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:r.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/hooks/use-element-size.ts"(P,p,e){e.d(p,{L:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({initialWidth:d=0,initialHeight:m=0}={}){const[l,g]=(0,n.useState)(d),[_,s]=(0,n.useState)(m),t=(0,n.useRef)(null);return[(0,n.useCallback)(i=>{if(t.current&&(t.current.disconnect(),t.current=null),i){const a=()=>{const v=i.getBoundingClientRect();g(v.width||0),s(v.height||0)};a();const c=new ResizeObserver(a);c.observe(i),t.current=c}},[]),l,_]}},"../charts/src/hooks/use-interactive-legend-data.ts"(P,p,e){e.d(p,{j:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const o=({data:d,chartId:m,legendInteractive:l,isSeriesVisible:g})=>{const _=(0,n.useMemo)(()=>{if(!m||!l)return d;const r=d.filter(a=>g(m,a.label));if(r.length===0)return[];const i=r.reduce((a,c)=>a+c.value,0);return r.map(a=>({...a,percentage:i>0?a.value/i*100:0}))},[d,m,g,l]),s=(0,n.useMemo)(()=>l&&_.length===0,[l,_]),t=(0,n.useMemo)(()=>!l||!m?d:d.map(r=>g(m,r.label)&&_.find(c=>c.label===r.label)||r),[d,_,l,m,g]);return{visibleData:_,allSegmentsHidden:s,legendData:t}}},"../charts/src/stories/legend-config.tsx"(P,p,e){e.d(p,{r:()=>n});const n={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(P,p,e){e.d(p,{E:()=>o});var n=e("../number-formatters/src/index.ts");const o=d=>(0,n.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(P,p,e){e.d(p,{A:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),l=m()(o());l.push([P.id,".y2tHU90POHGASQJWZmDo{display:flex;flex-direction:column;text-align:center;gap:20px}.P5wul1tUOMxydSPv_9Zo{flex-direction:column-reverse}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{margin-bottom:0;font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{margin-top:0;font-size:14px}",""]),l.locals={"pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo","pie-semi-circle-chart--legend-top":"P5wul1tUOMxydSPv_9Zo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const g=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"(P,p,e){e.d(p,{A:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),l=m()(o());l.push([P.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),l.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const g=l}}]);
