"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx"(A,g,e){e.r(g),e.d(g,{Animation:()=>v,CompositionAPI:()=>L,CustomLegendPositioning:()=>T,Default:()=>s,ErrorStates:()=>b,FixedDimensions:()=>l,InteractiveLegend:()=>y,WithCompositionLegend:()=>C,WithLegend:()=>S,WithTooltips:()=>p,__namedExportsOrder:()=>w,default:()=>i});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),u=e("../charts/src/stories/legend-config.tsx"),f=e("../charts/src/stories/sample-data/index.ts"),r=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:r.A,parameters:{layout:"centered"},decorators:[m.OI],argTypes:{...m.xo,...c.jW,...u.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}},render:h=>{const M=(0,u.D)(h);return(0,t.jsx)(r.A,{...h,legend:M})}},s={args:{...c.In,thickness:.4,data:f.f2,label:"OS",note:"Windows +10%",clockwise:!0},parameters:{docs:{description:{story:"Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio."}}}},l={render:h=>(0,t.jsx)(r.A,{width:h.width,data:h.data,label:h.label,note:h.note,thickness:h.thickness,clockwise:h.clockwise,height:h.height}),args:{...s.args,resize:"none",width:600,height:300},parameters:{docs:{description:{story:"Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions."}}}},v={args:{...s.args,animation:!0}},p={args:{...s.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},S={args:{...s.args,showLegend:!0}},C={render:h=>{const M=(0,u.D)(h);return(0,t.jsx)(r.A,{data:h.data,label:"Performance Metrics",note:"Q4 2023 Results",chartId:"composition-semi-circle-chart",children:(0,t.jsx)(r.A.Legend,{...M})})},args:{data:f.f2},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},y={render:h=>(0,t.jsx)(d.S,{children:(0,t.jsx)(r.A,{chartId:"interactive-semi-circle-chart",data:h.data,label:"Performance Metrics",note:"Click legend to filter",showLegend:!0,legend:(0,u.D)(h),legendValueDisplay:h.legendValueDisplay,children:(0,t.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages adjust automatically."})})}),args:{data:f.f2,legendInteractive:!0},parameters:{docs:{description:{story:"Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider."}}}},T={args:{thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},b={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(r.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(r.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(r.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(r.A,{height:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),args:{containerHeight:600},parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},L={render:h=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(r.A,{height:300,data:h.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(r.A.SVG,{children:(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(r.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(r.A,{height:300,data:h.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(r.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(r.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(r.A,{height:200,data:h.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:f.f2,containerHeight:"1000px",containerWidth:"1000px"},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},w=["Default","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","ErrorStates","CompositionAPI"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...v.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieSemiCircleChart data={args.data} label="Performance Metrics" note="Q4 2023 Results" chartId="composition-semi-circle-chart">
                <PieSemiCircleChart.Legend {...legend} />
            </PieSemiCircleChart>;
  },
  args: {
    data
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
            <PieSemiCircleChart chartId="interactive-semi-circle-chart" data={args.data} label="Performance Metrics" note="Click legend to filter" showLegend={true} legend={extractLegendConfig(args)} legendValueDisplay={args.legendValueDisplay}>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. Percentages adjust automatically.
                </p>
            </PieSemiCircleChart>
        </GlobalChartsProvider>,
  args: {
    data,
    legendInteractive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(A,g,e){e.d(g,{A:()=>Te});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),d=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),m=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),c=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),u=e("../../../node_modules/.pnpm/@wordpress+i18n@6.14.0/node_modules/@wordpress/i18n/build-module/index.mjs"),f=e("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),i=e("../charts/src/components/legend/legend.tsx"),s=e("../charts/src/components/tooltip/base-tooltip.tsx"),l=e("../charts/src/hooks/use-element-size.ts"),v=e("../charts/src/hooks/use-interactive-legend-data.ts"),p=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),S=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),C=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),T=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),b=e("../charts/src/utils/create-composition.ts"),L=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),w=e("../charts/src/charts/private/chart-composition/render-legend-slot.ts"),h=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),M=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),he=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),ue=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),ge=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),_e=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),fe=e.n(_e),Q=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),K={};K.insert="head",K.singleton=!1;var st=fe()(Q.A,K);const I=Q.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ve=u.__,xe=({tooltipData:j})=>(0,_.jsx)(s.R,{data:j,top:0,left:0,renderContainer:!1}),ye=.03,Se=400,Ce=j=>j.length?j.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:j.reduce((E,V)=>E+V.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},X=({data:j,chartId:N,width:W,height:E,thickness:V=.4,clockwise:k=!0,withTooltips:z=!1,showLegend:Pe=!1,legend:D={},legendValueDisplay:$="percentage",label:Ae,animation:be,note:je,className:Le,children:Ee,tooltipOffsetX:J=0,tooltipOffsetY:q=-15,renderTooltip:De=xe,gap:we="md"})=>{const ee=D.interactive??!1,F=D.position??"bottom",R=(0,S.R)(N),[Me,te,ne]=(0,l.L)(),{tooltipOpen:Oe,tooltipLeft:Ie,tooltipTop:Re,tooltipData:se,hideTooltip:ae,showTooltip:re}=(0,m.A)(),{containerRef:We,TooltipInPortal:Ve,containerBounds:O}=(0,c.A)({detectBounds:!0,scroll:!0,debounce:0}),oe=(0,t.useCallback)((x,P)=>{O.width===0||O.height===0||re({tooltipData:P.data,tooltipLeft:x.clientX-O.left+J,tooltipTop:x.clientY-O.top+q})},[O.width,O.height,O.left,O.top,re,J,q]),Ge=(0,t.useCallback)(()=>{ae()},[ae]),Be=(0,t.useCallback)(x=>P=>{oe(P,x)},[oe]),{isValid:ie,message:ke}=Ce(j),{getElementStyles:le,isSeriesVisible:He}=(0,C.j)(),{visibleData:Ke,allSegmentsHidden:de,legendData:Ue}=(0,v.j)({data:j,chartId:R,legendInteractive:ee,isSeriesVisible:He}),Y=(0,t.useMemo)(()=>({value:x=>x.value,sort:(x,P)=>P.value-x.value,fill:x=>le({data:x,index:x.index}).color}),[le]),Ne=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:$}),[$]),ze=(0,n.f)(Ue,Ne),{svgChildren:Fe,htmlChildren:Ye,legendChildren:ce,otherChildren:Ze}=(0,L.n)(Ee,"PieSemiCircleChart"),Qe=(0,t.useMemo)(()=>({thickness:V,clockwise:k}),[V,k]);(0,y.t)({chartId:R,legendItems:ze,chartType:"pie-semi-circle",isDataValid:ie,metadata:Qe});const Xe=(0,p.j)(),Z=W||Se;if(!ie){const x=E?Math.min(W||E*2,E*2):Z,P=x/2;return(0,_.jsx)("div",{className:I["pie-semi-circle-chart"],children:(0,_.jsx)("svg",{width:x,height:P,"data-testid":"pie-chart-svg",children:(0,_.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:I.error,children:ke})})})}const $e=te>0?te:Z,Je=ne>0?ne:E||Z/2,G=Math.min($e,Je*2),B=G/2,H=B,pe=H*(1-V),qe=Ke.map(x=>{const P=j.findIndex(nt=>nt.label===x.label);return{...x,index:P>=0?P:0}}),et=k?-Math.PI/2:Math.PI/2,tt=k?Math.PI/2:-Math.PI/2,me=Pe&&(0,_.jsx)(i.s,{orientation:D.orientation??"horizontal",position:F,alignment:D.alignment??"center",labelStyles:D.labelStyles,itemClassName:D.itemClassName,itemStyles:D.itemStyles,shapeStyles:D.shapeStyles,shape:D.shape??"circle",chartId:R,interactive:ee});return(0,_.jsx)(ue.O.Provider,{value:{chartId:R,chartWidth:G,chartHeight:B},children:(0,_.jsxs)(f.B,{ref:We,direction:"column",gap:we,className:(0,r.A)("pie-semi-circle-chart",I["pie-semi-circle-chart"],{[I["pie-semi-circle-chart--responsive"]]:!W&&!E},Le),style:{width:W||void 0,height:E||void 0},"data-testid":"pie-chart-container",children:[F==="top"&&me,(0,w.W)(ce,"top"),(0,_.jsx)("div",{ref:Me,className:I["pie-semi-circle-chart__svg-wrapper"],children:(0,_.jsxs)("svg",{width:G,height:B,viewBox:`0 0 ${G} ${B}`,"data-testid":"pie-chart-svg",children:[(0,_.jsx)("defs",{children:(0,_.jsx)(he.A,{id:`radial-wipe-${R}`,radius:H,innerRadius:pe,startAngle:"-180deg",wipePercentage:50})}),(0,_.jsx)(a.A,{top:B,left:G/2,mask:be&&!Xe?`url(#radial-wipe-${R})`:null,children:de?(0,_.jsx)("text",{textAnchor:"middle",y:-H/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:ve("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o.A,{data:qe,pieValue:Y.value,outerRadius:H,innerRadius:pe,cornerRadius:3,padAngle:ye,startAngle:et,endAngle:tt,pieSort:Y.sort,children:x=>x.arcs.map(P=>(0,_.jsx)("g",{onMouseMove:z?Be(P):void 0,onMouseLeave:z?Ge:void 0,children:(0,_.jsx)("path",{d:x.path(P)||"",fill:Y.fill(P.data),"data-testid":"pie-segment"})},P.data.label))}),(0,_.jsxs)(a.A,{children:[(0,_.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:I.label,children:Ae}),(0,_.jsx)(d.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:I.note,children:je})]}),!de&&Fe]})})]})}),F==="bottom"&&me,(0,w.W)(ce,"bottom"),z&&Oe&&se&&(0,_.jsx)(Ve,{top:Re||0,left:Ie||0,children:(0,_.jsx)("div",{role:"tooltip",children:De({tooltipData:se})})}),Ye,Ze]})})},U=j=>(0,t.useContext)(T.m)?(0,_.jsx)(X,{...j}):(0,_.jsx)(T.S,{children:(0,_.jsx)(X,{...j})});U.displayName="PieSemiCircleChart";const at=(0,b.E)(U,{Legend:i.s,SVG:h.d,HTML:M.a}),Te=(0,b.E)((0,ge.F)(U),{Legend:i.s,SVG:h.d,HTML:M.a})},"../charts/src/charts/private/chart-composition/chart-html.tsx"(A,g,e){e.d(g,{a:()=>o});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,a.jsx)(a.Fragment,{children:d});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/charts/private/chart-composition/chart-svg.tsx"(A,g,e){e.d(g,{d:()=>o});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,a.jsx)(a.Fragment,{children:d});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"(A,g,e){e.d(g,{A:()=>d});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o({id:m,radius:c,innerRadius:u=0,durationMs:f=1e3,wipePercentage:r=100,direction:t="clockwise",startAngle:n="-90deg"}){const i=(c-u)*2+1,s=t==="clockwise"?-1:1,v=`${0<r&&r<=100?f*(100/r):0}ms`;return(0,a.jsx)("mask",{id:m,children:(0,a.jsx)("circle",{cx:0,cy:0,r:c,pathLength:"100",fill:"white",stroke:"black",strokeWidth:i,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${n}) scaleY(${s})`},children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:v,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${r/100};1`})})})}const d=o;try{o.displayName="RadialWipeAnimation",o.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:o.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(A,g,e){e.d(g,{f:()=>t});var a=e("../number-formatters/src/index.ts"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=e("../charts/src/utils/format-percentage.ts");function c(n,i,s="percentage"){if(!i||s==="none")return"";if("percentage"in n){const l=n;switch(s){case"percentage":return(0,m.E)(l.percentage);case"value":return(0,a.ZV)(l.value);case"valueDisplay":return l.valueDisplay||(0,a.ZV)(l.value);default:return""}}return"value"in n&&n.value!==null?(0,a.ZV)(n.value):""}function u(n,i,s,l,v){if(i){const p=s||l;if(p)return{...n,glyphSize:v,renderGlyph:p}}return n}function f(n,i,s,l,v,p,S){const C=(y,T)=>{const{color:b,glyph:L,shapeStyles:w}=i({data:y,index:T,legendShape:S}),h={label:y.label,value:s?y.data?.length?.toString()||"0":"",color:b,shapeStyle:w};return u(h,l,L,p,v)};return n.map(C)}function r(n,i,s,l,v,p,S,C){const y=(T,b)=>{const{color:L,glyph:w,shapeStyles:h}=i({data:T,index:b,legendShape:C}),M={label:T.label,value:c(T,s,l),color:L,shapeStyle:h};return u(M,v,w,S,p)};return n.map(y)}function t(n,i={},s){const{showValues:l=!1,legendValueDisplay:v="percentage",withGlyph:p=!1,glyphSize:S=8,renderGlyph:C}=i,{getElementStyles:y}=(0,d.j)();return(0,o.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?f(n,y,l,p,S,C,s):r(n,y,l,v,p,S,C,s),[n,y,l,v,p,S,C,s])}},"../charts/src/components/tooltip/base-tooltip.tsx"(A,g,e){e.d(g,{R:()=>n});var a=e("../number-formatters/src/index.ts"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(o),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var u=d()(m.A,c);const f=m.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:i})=>(0,r.jsxs)(r.Fragment,{children:[i?.label,": ",i?.valueDisplay||(0,a.ZV)(i?.value)]}),n=({data:i,top:s,left:l,component:v=t,children:p,className:S,style:C,renderContainer:y=!0})=>{const T=p||i&&(0,r.jsx)(v,{data:i,className:S});return y?(0,r.jsx)("div",{className:f.tooltip,style:{top:s,left:l,...C},role:"tooltip",children:T}):T};try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/hooks/use-element-size.ts"(A,g,e){e.d(g,{L:()=>o});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({initialWidth:d=0,initialHeight:m=0}={}){const[c,u]=(0,a.useState)(d),[f,r]=(0,a.useState)(m),t=(0,a.useRef)(null);return[(0,a.useCallback)(i=>{if(t.current&&(t.current.disconnect(),t.current=null),i){const s=()=>{const v=i.getBoundingClientRect();u(v.width||0),r(v.height||0)};s();const l=new ResizeObserver(s);l.observe(i),t.current=l}},[]),c,f]}},"../charts/src/hooks/use-interactive-legend-data.ts"(A,g,e){e.d(g,{j:()=>o});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const o=({data:d,chartId:m,legendInteractive:c,isSeriesVisible:u})=>{const f=(0,a.useMemo)(()=>{if(!m||!c)return d;const n=d.filter(s=>u(m,s.label));if(n.length===0)return[];const i=n.reduce((s,l)=>s+l.value,0);return n.map(s=>({...s,percentage:i>0?s.value/i*100:0}))},[d,m,u,c]),r=(0,a.useMemo)(()=>c&&f.length===0,[c,f]),t=(0,a.useMemo)(()=>!c||!m?d:d.map(n=>u(m,n.label)&&f.find(l=>l.label===n.label)||n),[d,f,c,m,u]);return{visibleData:f,allSegmentsHidden:r,legendData:t}}},"../charts/src/stories/legend-config.tsx"(A,g,e){e.d(g,{D:()=>o,r:()=>a});const a={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function o(d){const{legendPosition:m,legendAlignment:c,legendOrientation:u,legendShape:f,legendInteractive:r,legendItemClassName:t,legendMaxWidth:n,legendTextOverflow:i,legendShapeStyles:s,legendItemStyles:l}=d;if(!(m!==void 0||c!==void 0||u!==void 0||f!==void 0||r!==void 0||t!==void 0||n!==void 0||i!==void 0||s!==void 0||l!==void 0))return;const p={};return u!==void 0&&(p.orientation=u),m!==void 0&&(p.position=m),c!==void 0&&(p.alignment=c),f!==void 0&&(p.shape=f),r!==void 0&&(p.interactive=r),t!==void 0&&(p.itemClassName=t),(n!==void 0||i!==void 0)&&(p.labelStyles={},n!==void 0&&(p.labelStyles.maxWidth=n),i!==void 0&&(p.labelStyles.textOverflow=i)),s!==void 0&&(p.shapeStyles=s),l!==void 0&&(p.itemStyles=l),p}try{o.displayName="extractLegendConfig",o.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:o.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{a.displayName="legendArgTypes",a.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(A,g,e){e.d(g,{E:()=>o});var a=e("../number-formatters/src/index.ts");const o=d=>(0,a.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(A,g,e){e.d(g,{A:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),c=m()(o());c.push([A.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.Cgrbza8Mc3XENCqfqeMT{flex:1;min-height:0;min-width:0;width:100%;display:flex;align-items:center;justify-content:center}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),c.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__svg-wrapper":"Cgrbza8Mc3XENCqfqeMT","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const u=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"(A,g,e){e.d(g,{A:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),c=m()(o());c.push([A.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),c.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=c}}]);
