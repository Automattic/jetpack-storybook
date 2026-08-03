import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{_t as r,vt as i}from"./esm-D0l9BCmF.js";import{I as a,L as o}from"./esm-BymEYRN_.js";import{c as s,r as c,s as l,t as u}from"./chart-decorator-DQbCDioh.js";import{r as d,t as f}from"./legend-config-BJNKT_wW.js";import{y as p}from"./sample-data-Cx3-uFO8.js";import{t as m}from"./stories-Dj6ouTaf.js";import{n as h,t as g}from"./pie-semi-circle-chart-BPhP5tSE.js";var _=e({Animation:()=>S,CompositionAPI:()=>D,Default:()=>b,ErrorStates:()=>E,FixedDimensions:()=>x,WithCompositionLegend:()=>T,WithLegend:()=>w,WithTooltips:()=>C,__namedExportsOrder:()=>O,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{r(),a(),m(),g(),v=n(),y={title:`JS Packages/Charts Library/Charts/Pie Semi Circle Chart`,component:h,parameters:{layout:`centered`},decorators:[u],argTypes:{...c,...s,...d,legendValueDisplay:{control:{type:`select`},options:[`percentage`,`value`,`valueDisplay`,`none`],table:{category:`Legend`},description:`What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.`},width:{control:{type:`range`,min:100,max:1e3,step:10}},height:{control:{type:`range`,min:100,max:1e3,step:10}},thickness:{control:{type:`range`,min:0,max:1,step:.01}}},render:e=>{let t=f(e);return(0,v.jsx)(h,{...e,legend:t})}},b={args:{...l,thickness:.4,data:p,label:`OS`,note:`Windows +10%`,clockwise:!0},parameters:{docs:{description:{story:`Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio.`}}}},x={render:e=>(0,v.jsx)(h,{width:e.width,data:e.data,label:e.label,note:e.note,thickness:e.thickness,clockwise:e.clockwise,height:e.height}),args:{...b.args,resize:`none`,width:600,height:300},parameters:{docs:{description:{story:`Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions.`}}}},S={args:{...b.args,animation:!0}},C={args:{...b.args,withTooltips:!0},parameters:{docs:{description:{story:`Semi-circle pie chart with interactive tooltips that appear on hover.`}}}},w={args:{...b.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},T={render:e=>{let t=f(e);return(0,v.jsx)(h,{...b.args,...e,legend:{interactive:t?.interactive},chartId:`composition-semi-circle-chart`,children:(0,v.jsx)(h.Legend,{...t})})},args:{data:p},parameters:{docs:{description:{story:"Composition API using `<PieSemiCircleChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},E={render:()=>(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Empty Data`}),(0,v.jsx)(h,{width:300,data:[]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Zero Total Value`}),(0,v.jsx)(h,{width:300,data:[{label:`A`,value:0},{label:`B`,value:0}]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Negative Values`}),(0,v.jsx)(h,{width:300,data:[{label:`A`,value:-30},{label:`B`,value:130}]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Single Data Point`}),(0,v.jsx)(h,{height:300,data:[{label:`Single Point`,value:100}]})]})]}),args:{containerHeight:`600px`},parameters:{docs:{description:{story:`Examples of how the semi-circle pie chart handles various error states and edge cases.`}}}},D={render:e=>(0,v.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,v.jsx)(`h2`,{children:`PieSemiCircleChart Composition API`}),(0,v.jsx)(`p`,{children:`Demonstrates the flexible composition API with SVG and HTML compound components.`}),(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`,marginTop:`2rem`},children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`With Custom SVG Elements`}),(0,v.jsxs)(h,{height:300,data:e.data,label:`OS Usage`,note:`Q4 2023`,withTooltips:!0,children:[(0,v.jsx)(h.SVG,{children:(0,v.jsxs)(i,{children:[(0,v.jsx)(o,{x:0,y:-80,textAnchor:`middle`,fontSize:14,fill:`#666`,fontStyle:`italic`,children:`Custom SVG Annotation`}),(0,v.jsx)(`circle`,{cx:0,cy:-90,r:3,fill:`#ff6b6b`})]})}),(0,v.jsx)(h.HTML,{children:(0,v.jsx)(`div`,{style:{marginTop:`1rem`,textAlign:`center`,fontSize:`12px`,color:`#888`},children:`✨ Enhanced with custom annotations`})})]})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`With Custom Legend and HTML Content`}),(0,v.jsx)(h,{height:300,data:e.data,label:`Performance`,note:`Latest Results`,children:(0,v.jsx)(h.HTML,{children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`1rem`,marginTop:`1rem`},children:[(0,v.jsx)(h.Legend,{orientation:`horizontal`,alignment:`center`,shape:`circle`}),(0,v.jsx)(`div`,{style:{padding:`0.5rem 1rem`,backgroundColor:`#f0f0f0`,borderRadius:`4px`,fontSize:`12px`},children:`🔍 Hover segments for details`}),(0,v.jsxs)(`div`,{style:{fontSize:`10px`,color:`#666`,textAlign:`center`,lineHeight:1.4},children:[`Data updated: `,new Date().toLocaleString(),(0,v.jsx)(`br`,{}),`Source: Internal Analytics`]})]})})})]})]}),(0,v.jsxs)(`div`,{style:{marginTop:`3rem`},children:[(0,v.jsx)(`h3`,{children:`Legacy Support - Direct Group Components`}),(0,v.jsx)(`p`,{style:{fontSize:`14px`,color:`#666`,marginBottom:`1rem`},children:`For backward compatibility, Group components are still supported directly:`}),(0,v.jsx)(h,{height:200,data:e.data,label:`Legacy Mode`,note:`Still works!`,children:(0,v.jsxs)(i,{children:[(0,v.jsx)(o,{x:0,y:-70,textAnchor:`middle`,fontSize:12,fill:`#999`,children:`Direct Group usage`}),(0,v.jsx)(`rect`,{x:-30,y:-85,width:60,height:2,fill:`#ddd`})]})})]})]}),args:{data:p,containerHeight:`1000px`,containerWidth:`1000px`},parameters:{layout:`fullscreen`,docs:{description:{story:`
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
                `}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Props-based legend using \`showLegend\` and the \`legend\` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig<ChartLegendConfig<DataPointPercentage[]>>(args);
    return <PieSemiCircleChart {...Default.args} {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-semi-circle-chart">
                <PieSemiCircleChart.Legend {...legend} />
            </PieSemiCircleChart>;
  },
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<PieSemiCircleChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
                <h3>Zero Total Value</h3>
                <PieSemiCircleChart width={300} data={[{
        label: 'A',
        value: 0
      }, {
        label: 'B',
        value: 0
      }]} />
            </div>

            <div>
                <h3>Negative Values</h3>
                <PieSemiCircleChart width={300} data={[{
        label: 'A',
        value: -30
      }, {
        label: 'B',
        value: 130
      }]} />
            </div>

            <div>
                <h3>Single Data Point</h3>
                <PieSemiCircleChart height={300} data={[{
        label: 'Single Point',
        value: 100
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
                                ✨ Enhanced with custom annotations
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
                                    🔍 Hover segments for details
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`FixedDimensions`,`Animation`,`WithTooltips`,`WithLegend`,`WithCompositionLegend`,`ErrorStates`,`CompositionAPI`]}));k();export{S as Animation,D as CompositionAPI,b as Default,E as ErrorStates,x as FixedDimensions,T as WithCompositionLegend,w as WithLegend,C as WithTooltips,O as __namedExportsOrder,y as default,k as n,_ as t};