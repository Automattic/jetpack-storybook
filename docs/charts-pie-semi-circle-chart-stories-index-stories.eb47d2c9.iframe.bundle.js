"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx"(P,m,e){e.r(m),e.d(m,{Animation:()=>v,CompositionAPI:()=>E,CustomLegendPositioning:()=>T,Default:()=>s,ErrorStates:()=>b,FixedDimensions:()=>d,InteractiveLegend:()=>C,WithCompositionLegend:()=>S,WithLegend:()=>y,WithTooltips:()=>x,__namedExportsOrder:()=>M,default:()=>o});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),c=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=e("../charts/src/stories/chart-decorator.tsx"),l=e("../charts/src/stories/theme-config.tsx"),g=e("../charts/src/stories/legend-config.tsx"),_=e("../charts/src/stories/sample-data/index.ts"),i=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:i.A,parameters:{layout:"centered"},decorators:[h.OI],argTypes:{...h.xo,...l.jW,...g.r,width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},s={args:{...l.In,thickness:.4,data:_.f2,label:"OS",note:"Windows +10%",clockwise:!0},parameters:{docs:{description:{story:"Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio."}}}},d={render:p=>(0,t.jsx)(i.A,{width:p.width,data:p.data,label:p.label,note:p.note,thickness:p.thickness,clockwise:p.clockwise,height:p.height}),args:{...s.args,resize:"none",width:600,height:300},parameters:{docs:{description:{story:"Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions."}}}},v={args:{...s.args,animation:!0}},x={args:{...s.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},y={args:{...s.args,showLegend:!0}},S={render:p=>(0,t.jsx)(i.A,{data:p.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(i.A.Legend,{position:p.legendPosition||"bottom",orientation:p.legendOrientation||"horizontal",alignment:p.legendAlignment||"center",labelStyles:{maxWidth:p.legendMaxWidth,textOverflow:p.legendTextOverflow||"wrap"}})}),args:{data:_.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},C={render:p=>(0,t.jsx)(c.S,{children:(0,t.jsx)(i.A,{chartId:"interactive-semi-circle-chart",data:p.data,label:"Performance Metrics",note:"Click legend to filter",showLegend:!0,legendInteractive:!0,legendPosition:p.legendPosition||"bottom",legendOrientation:p.legendOrientation||"horizontal",legendAlignment:p.legendAlignment||"center",children:(0,t.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages adjust automatically."})})}),args:{data:_.f2},parameters:{docs:{description:{story:"Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider."}}}},T={args:{thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},b={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(i.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(i.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(i.A,{height:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),args:{containerHeight:600},parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},E={render:p=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(i.A,{height:300,data:p.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(i.A.SVG,{children:(0,t.jsxs)(n.A,{children:[(0,t.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(i.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(i.A,{height:300,data:p.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(i.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(i.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(i.A,{height:200,data:p.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(n.A,{children:[(0,t.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:_.f2,containerHeight:"1000px",containerWidth:"1000px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},M=["Default","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","ErrorStates","CompositionAPI"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    thickness: 0.4,
    data,
    label: 'OS',
    note: 'Windows +10%',
    clockwise: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <PieSemiCircleChart width={args.width} data={args.data} label={args.label} note={args.note} thickness={args.thickness} clockwise={args.clockwise} height={args.height} />,
  args: {
    ...Default.args,
    resize: 'none',
    width: 600,
    height: 300
  },
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <PieSemiCircleChart data={args.data} label="Performance Metrics" note="Q4 2023 Results">
            <PieSemiCircleChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} labelStyles={{
      maxWidth: args.legendMaxWidth,
      textOverflow: args.legendTextOverflow || 'wrap'
    }} />
        </PieSemiCircleChart>,
  args: {
    data
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <PieSemiCircleChart chartId="interactive-semi-circle-chart" data={args.data} label="Performance Metrics" note="Click legend to filter" showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'}>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. Percentages adjust automatically.
                </p>
            </PieSemiCircleChart>
        </GlobalChartsProvider>,
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...T.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
                <PieSemiCircleChart height={300} data={[{
        label: 'Single Point',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  args: {
    containerHeight: 600
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the semi-circle pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
                    <PieSemiCircleChart height={300} data={args.data} label="OS Usage" note="Q4 2023" withTooltips={true}>
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
                    <PieSemiCircleChart height={300} data={args.data} label="Performance" note="Latest Results">
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
                <PieSemiCircleChart height={200} data={args.data} label="Legacy Mode" note="Still works!">
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
}`,...E.parameters?.docs?.source}}}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(P,m,e){e.d(m,{A:()=>Ce});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),l=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@6.13.0/node_modules/@wordpress/i18n/build-module/index.mjs"),_=e("../../../node_modules/.pnpm/@wordpress+ui@0.7.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),o=e("../charts/src/components/legend/legend.tsx"),s=e("../charts/src/components/tooltip/base-tooltip.tsx"),d=e("../charts/src/hooks/use-element-size.ts"),v=e("../charts/src/hooks/use-interactive-legend-data.ts"),x=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),y=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),S=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),C=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),T=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),b=e("../charts/src/utils/create-composition.ts"),E=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),M=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),p=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),k=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),pe=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),me=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),he=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(he),Z=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),H={};H.insert="head",H.singleton=!1;var ot=ue()(Z.A,H);const D=Z.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ge=g.__,_e=({tooltipData:j})=>(0,u.jsx)(s.R,{data:j,top:0,left:0,renderContainer:!1}),ve=.03,xe=400,fe=j=>j.length?j.some(L=>L.percentage<0||L.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:j.reduce((L,I)=>L+I.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},Q=({data:j,chartId:U,width:R,height:L,thickness:I=.4,clockwise:V=!0,withTooltips:z=!1,showLegend:ye=!1,legendOrientation:Se="horizontal",legendPosition:N="bottom",legendAlignment:Te="center",legendMaxWidth:Pe,legendTextOverflow:Ae="wrap",legendItemClassName:be,legendShape:je="circle",legendValueDisplay:X="percentage",legendInteractive:$=!1,label:Ee,animation:Le,note:Me,className:we,children:De,tooltipOffsetX:J=0,tooltipOffsetY:q=-15,renderTooltip:Oe=_e,gap:Re="md"})=>{const O=(0,y.R)(U),[Ie,ee,te]=(0,d.L)(),{tooltipOpen:We,tooltipLeft:Ge,tooltipTop:Ve,tooltipData:ne,hideTooltip:se,showTooltip:ae}=(0,h.A)(),{containerRef:Be,TooltipInPortal:ke,containerBounds:w}=(0,l.A)({detectBounds:!0,scroll:!0,debounce:0}),re=(0,t.useCallback)((f,A)=>{w.width===0||w.height===0||ae({tooltipData:A.data,tooltipLeft:f.clientX-w.left+J,tooltipTop:f.clientY-w.top+q})},[w.width,w.height,w.left,w.top,ae,J,q]),He=(0,t.useCallback)(()=>{se()},[se]),Ke=(0,t.useCallback)(f=>A=>{re(A,f)},[re]),{isValid:oe,message:Ue}=fe(j),{getElementStyles:ie,isSeriesVisible:ze}=(0,S.j)(),{visibleData:Ne,allSegmentsHidden:le,legendData:Fe}=(0,v.j)({data:j,chartId:O,legendInteractive:$,isSeriesVisible:ze}),F=(0,t.useMemo)(()=>({value:f=>f.value,sort:(f,A)=>A.value-f.value,fill:f=>ie({data:f,index:f.index}).color}),[ie]),Ye=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:X}),[X]),Ze=(0,a.f)(Fe,Ye),{svgChildren:Qe,htmlChildren:Xe,otherChildren:$e}=(0,E.n)(De,"PieSemiCircleChart"),Je=(0,t.useMemo)(()=>({thickness:I,clockwise:V}),[I,V]);(0,C.t)({chartId:O,legendItems:Ze,chartType:"pie-semi-circle",isDataValid:oe,metadata:Je});const qe=(0,x.j)(),Y=R||xe;if(!oe){const f=L?Math.min(R||L*2,L*2):Y,A=f/2;return(0,u.jsx)("div",{className:D["pie-semi-circle-chart"],children:(0,u.jsx)("svg",{width:f,height:A,"data-testid":"pie-chart-svg",children:(0,u.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:D.error,children:Ue})})})}const et=ee>0?ee:Y,tt=te>0?te:L||Y/2,W=Math.min(et,tt*2),G=W/2,B=G,ce=B*(1-I),nt=Ne.map(f=>{const A=j.findIndex(rt=>rt.label===f.label);return{...f,index:A>=0?A:0}}),st=V?-Math.PI/2:Math.PI/2,at=V?Math.PI/2:-Math.PI/2,de=ye&&(0,u.jsx)(o.s,{orientation:Se,position:N,alignment:Te,labelStyles:{maxWidth:Pe,textOverflow:Ae},itemClassName:be,shape:je,chartId:O,interactive:$});return(0,u.jsx)(pe.O.Provider,{value:{chartId:O,chartWidth:W,chartHeight:G},children:(0,u.jsxs)(_.B,{ref:Be,direction:"column",gap:Re,className:(0,i.A)("pie-semi-circle-chart",D["pie-semi-circle-chart"],{[D["pie-semi-circle-chart--responsive"]]:!R&&!L},we),style:{width:R||void 0,height:L||void 0},"data-testid":"pie-chart-container",children:[N==="top"&&de,(0,u.jsx)("div",{ref:Ie,className:D["pie-semi-circle-chart__svg-wrapper"],children:(0,u.jsxs)("svg",{width:W,height:G,viewBox:`0 0 ${W} ${G}`,"data-testid":"pie-chart-svg",children:[(0,u.jsx)("defs",{children:(0,u.jsx)(k.A,{id:`radial-wipe-${O}`,radius:B,innerRadius:ce,startAngle:"-180deg",wipePercentage:50})}),(0,u.jsx)(n.A,{top:G,left:W/2,mask:Le&&!qe?`url(#radial-wipe-${O})`:null,children:le?(0,u.jsx)("text",{textAnchor:"middle",y:-B/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:ge("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.A,{data:nt,pieValue:F.value,outerRadius:B,innerRadius:ce,cornerRadius:3,padAngle:ve,startAngle:st,endAngle:at,pieSort:F.sort,children:f=>f.arcs.map(A=>(0,u.jsx)("g",{onMouseMove:z?Ke(A):void 0,onMouseLeave:z?He:void 0,children:(0,u.jsx)("path",{d:f.path(A)||"",fill:F.fill(A.data),"data-testid":"pie-segment"})},A.data.label))}),(0,u.jsxs)(n.A,{children:[(0,u.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:D.label,children:Ee}),(0,u.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:D.note,children:Me})]}),!le&&Qe]})})]})}),N!=="top"&&de,z&&We&&ne&&(0,u.jsx)(ke,{top:Ve||0,left:Ge||0,children:(0,u.jsx)("div",{role:"tooltip",children:Oe({tooltipData:ne})})}),Xe,$e]})})},K=j=>(0,t.useContext)(T.m)?(0,u.jsx)(Q,{...j}):(0,u.jsx)(T.S,{children:(0,u.jsx)(Q,{...j})});K.displayName="PieSemiCircleChart";const it=(0,b.E)(K,{Legend:o.s,SVG:M.d,HTML:p.a}),Ce=(0,b.E)((0,me.F)(K),{Legend:o.s,SVG:M.d,HTML:p.a})},"../charts/src/charts/private/chart-composition/chart-html.tsx"(P,m,e){e.d(m,{a:()=>r});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:c})=>(0,n.jsx)(n.Fragment,{children:c});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/charts/private/chart-composition/chart-svg.tsx"(P,m,e){e.d(m,{d:()=>r});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:c})=>(0,n.jsx)(n.Fragment,{children:c});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/charts/private/chart-composition/use-chart-children.ts"(P,m,e){e.d(m,{n:()=>c});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c(h,l){return(0,r.useMemo)(()=>{const g=[],_=[],i=[];return r.Children.forEach(h,t=>{if((0,r.isValidElement)(t)){const o=t.type?.displayName;o===`${l}.SVG`||o==="Chart.SVG"?t.props?.children&&r.Children.forEach(t.props.children,s=>{g.push(s)}):o===`${l}.HTML`||o==="Chart.HTML"?t.props?.children&&r.Children.forEach(t.props.children,s=>{_.push(s)}):t.type===n.A?g.push(t):i.push(t)}}),{svgChildren:g,htmlChildren:_,otherChildren:i}},[h,l])}},"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"(P,m,e){e.d(m,{A:()=>c});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({id:h,radius:l,innerRadius:g=0,durationMs:_=1e3,wipePercentage:i=100,direction:t="clockwise",startAngle:a="-90deg"}){const o=(l-g)*2+1,s=t==="clockwise"?-1:1,v=`${0<i&&i<=100?_*(100/i):0}ms`;return(0,n.jsx)("mask",{id:h,children:(0,n.jsx)("circle",{cx:0,cy:0,r:l,pathLength:"100",fill:"white",stroke:"black",strokeWidth:o,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${a}) scaleY(${s})`},children:(0,n.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:v,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${i/100};1`})})})}const c=r;try{r.displayName="RadialWipeAnimation",r.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:r.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(P,m,e){e.d(m,{f:()=>t});var n=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),h=e("../charts/src/utils/format-percentage.ts");function l(a,o,s="percentage"){if(!o||s==="none")return"";if("percentage"in a){const d=a;switch(s){case"percentage":return(0,h.E)(d.percentage);case"value":return(0,n.ZV)(d.value);case"valueDisplay":return d.valueDisplay||(0,n.ZV)(d.value);default:return""}}return"value"in a&&a.value!==null?(0,n.ZV)(a.value):""}function g(a,o,s,d,v){if(o){const x=s||d;if(x)return{...a,glyphSize:v,renderGlyph:x}}return a}function _(a,o,s,d,v,x,y){const S=(C,T)=>{const{color:b,glyph:E,shapeStyles:M}=o({data:C,index:T,legendShape:y}),p={label:C.label,value:s?C.data?.length?.toString()||"0":"",color:b,shapeStyle:M};return g(p,d,E,x,v)};return a.map(S)}function i(a,o,s,d,v,x,y,S){const C=(T,b)=>{const{color:E,glyph:M,shapeStyles:p}=o({data:T,index:b,legendShape:S}),k={label:T.label,value:l(T,s,d),color:E,shapeStyle:p};return g(k,v,M,y,x)};return a.map(C)}function t(a,o={},s){const{showValues:d=!1,legendValueDisplay:v="percentage",withGlyph:x=!1,glyphSize:y=8,renderGlyph:S}=o,{getElementStyles:C}=(0,c.j)();return(0,r.useMemo)(()=>!a||!Array.isArray(a)||a.length===0?[]:"data"in a[0]?_(a,C,d,x,y,S,s):i(a,C,d,v,x,y,S,s),[a,C,d,v,x,y,S,s])}},"../charts/src/components/tooltip/base-tooltip.tsx"(P,m,e){e.d(m,{R:()=>a});var n=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var g=c()(h.A,l);const _=h.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:o})=>(0,i.jsxs)(i.Fragment,{children:[o?.label,": ",o?.valueDisplay||(0,n.ZV)(o?.value)]}),a=({data:o,top:s,left:d,component:v=t,children:x,className:y,style:S,renderContainer:C=!0})=>{const T=x||o&&(0,i.jsx)(v,{data:o,className:y});return C?(0,i.jsx)("div",{className:_.tooltip,style:{top:s,left:d,...S},role:"tooltip",children:T}):T};try{a.displayName="BaseTooltip",a.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:a.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/hooks/use-element-size.ts"(P,m,e){e.d(m,{L:()=>r});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r({initialWidth:c=0,initialHeight:h=0}={}){const[l,g]=(0,n.useState)(c),[_,i]=(0,n.useState)(h),t=(0,n.useRef)(null);return[(0,n.useCallback)(o=>{if(t.current&&(t.current.disconnect(),t.current=null),o){const s=()=>{const v=o.getBoundingClientRect();g(v.width||0),i(v.height||0)};s();const d=new ResizeObserver(s);d.observe(o),t.current=d}},[]),l,_]}},"../charts/src/hooks/use-interactive-legend-data.ts"(P,m,e){e.d(m,{j:()=>r});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=({data:c,chartId:h,legendInteractive:l,isSeriesVisible:g})=>{const _=(0,n.useMemo)(()=>{if(!h||!l)return c;const a=c.filter(s=>g(h,s.label));if(a.length===0)return[];const o=a.reduce((s,d)=>s+d.value,0);return a.map(s=>({...s,percentage:o>0?s.value/o*100:0}))},[c,h,g,l]),i=(0,n.useMemo)(()=>l&&_.length===0,[l,_]),t=(0,n.useMemo)(()=>!l||!h?c:c.map(a=>g(h,a.label)&&_.find(d=>d.label===a.label)||a),[c,_,l,h,g]);return{visibleData:_,allSegmentsHidden:i,legendData:t}}},"../charts/src/stories/legend-config.tsx"(P,m,e){e.d(m,{r:()=>n});const n={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(P,m,e){e.d(m,{E:()=>r});var n=e("../number-formatters/src/index.ts");const r=c=>(0,n.ZV)(c/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(P,m,e){e.d(m,{A:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),h=e.n(c),l=h()(r());l.push([P.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.Cgrbza8Mc3XENCqfqeMT{flex:1;min-height:0;min-width:0;width:100%;display:flex;align-items:center;justify-content:center}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),l.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__svg-wrapper":"Cgrbza8Mc3XENCqfqeMT","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const g=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"(P,m,e){e.d(m,{A:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),h=e.n(c),l=h()(r());l.push([P.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),l.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const g=l}}]);
