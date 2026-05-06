import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{c as n,n as r,o as i,r as a,s as o,t as s}from"./chart-decorator-Zt-Og2NM.js";import{Gm as c}from"./iframe-C1-dXDKI.js";import{_ as l,t as u}from"./providers-D962D43q.js";import{n as d,r as f,t as p}from"./legend-config-tJy46Dt1.js";import{c as m,m as h}from"./sample-data-BfcHm5eo.js";import{i as g,n as _,r as v,t as y}from"./pie-chart-BKRmwPq4.js";var b=t({Animation:()=>E,CompositionAPI:()=>A,CustomLabelColors:()=>j,Default:()=>C,ErrorStates:()=>M,FixedDimensions:()=>T,WithCompositionLegend:()=>k,WithLegend:()=>O,WithSize:()=>w,WithTooltips:()=>D,__namedExportsOrder:()=>N,default:()=>S}),x,S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{u(),r(),d(),m(),i(),y(),g(),x=c(),S={title:`JS Packages/Charts Library/Charts/Pie Chart`,component:v,parameters:{layout:`centered`},decorators:[s],argTypes:{...a,...n,...f,legendValueDisplay:{control:{type:`select`},options:[`percentage`,`value`,`valueDisplay`,`none`],table:{category:`Legend`},description:`What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.`},size:{control:{type:`range`,min:100,max:800,step:10,default:400},description:`Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space.`,table:{category:`Dimensions`}},thickness:{control:{type:`range`,min:0,max:1,step:.01},description:`Thickness of the pie (1 = full pie, <1 = donut)`,table:{category:`Visual Style`}},padding:{control:{type:`range`,min:0,max:100,step:1},description:`Internal padding around the chart`,table:{category:`Dimensions`}},gapScale:{control:{type:`range`,min:0,max:1,step:.01},description:`Scale of gaps between segments (0 = no gaps)`,table:{category:`Visual Style`}},cornerScale:{control:{type:`range`,min:0,max:1,step:.01},description:`Scale of rounded corners on segments (0 = sharp corners)`,table:{category:`Visual Style`}},labelTextColor:{control:{type:`color`},description:`Color of the label text displayed on pie chart segments`,table:{category:`Labels`}},labelBackgroundColor:{control:{type:`color`},description:`Background color for labels displayed on pie chart segments`,table:{category:`Labels`}},showLabels:{control:`boolean`,description:`Show or hide labels on pie segments`,table:{category:`Labels`}}},render:({labelTextColor:e,labelBackgroundColor:t,...n})=>{let r=p(n),i=(0,x.jsx)(v,{...n,legend:r});return e||t?(0,x.jsx)(l,{theme:{labelTextColor:e,labelBackgroundColor:t},children:i}):i}},C={args:{...o,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:h,containerWidth:`432px`,containerHeight:`432px`}},w={args:{...C.args,size:200}},T={args:{...C.args,width:300,height:300}},E={args:{...C.args,animation:!0}},D={args:{...C.args,withTooltips:!0},parameters:{docs:{description:{story:`Pie chart with interactive tooltips that appear on hover.`}}}},O={args:{...C.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},k={render:e=>{let t=p(e);return(0,x.jsx)(v,{...e,legend:{interactive:t?.interactive},chartId:`composition-pie-chart`,children:(0,x.jsx)(v.Legend,{...t})})},args:{data:h},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},A={render:e=>(0,x.jsxs)(_,{data:e.data||[{label:`Desktop`,value:45},{label:`Mobile`,value:30},{label:`Tablet`,value:25}],size:400,withTooltips:!0,thickness:.7,legendValueDisplay:e.legendValueDisplay||`value`,children:[(0,x.jsx)(_.HTML,{children:(0,x.jsx)(`h3`,{style:{textAlign:`center`,marginBottom:`20px`},children:`Device Usage Distribution`})}),(0,x.jsxs)(_.SVG,{children:[(0,x.jsx)(`text`,{x:0,y:0,textAnchor:`middle`,style:{fontSize:`24px`,fontWeight:`bold`},children:`100%`}),(0,x.jsx)(`text`,{x:0,y:20,textAnchor:`middle`,style:{fontSize:`14px`,fill:`#666`},children:`Total Users`})]}),(0,x.jsxs)(_.HTML,{children:[(0,x.jsx)(_.Legend,{position:`bottom`,orientation:`horizontal`,alignment:`center`}),(0,x.jsxs)(`div`,{style:{marginTop:`20px`,padding:`10px`,backgroundColor:`#f5f5f5`,borderRadius:`4px`,fontSize:`14px`,color:`#666`},children:[(0,x.jsx)(`p`,{style:{margin:0},children:`This example demonstrates the composition API where you can add:`}),(0,x.jsxs)(`ul`,{style:{margin:`5px 0 0 20px`,padding:0},children:[(0,x.jsx)(`li`,{children:`SVG elements inside the chart using PieChart.SVG`}),(0,x.jsx)(`li`,{children:`HTML elements outside the chart using PieChart.HTML`}),(0,x.jsx)(`li`,{children:`Mix regular children with compound components`})]})]})]})]}),args:{data:h,containerHeight:`700px`,containerWidth:`600px`},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},j={args:{...C.args,showLegend:!0,thickness:.85,data:[{label:`Desktop`,value:45e3,valueDisplay:`45K`,color:`#FF6B6B`},{label:`Mobile`,value:35e3,valueDisplay:`35K`,color:`#4ECDC4`},{label:`Tablet`,value:2e4,valueDisplay:`20K`,color:`#45B7D1`}],labelTextColor:`#FFFFFF`,labelBackgroundColor:`rgba(0, 0, 0, 0.75)`},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},M={render:()=>(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{children:`Empty Data`}),(0,x.jsx)(v,{height:300,data:[]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{children:`Negative Values`}),(0,x.jsx)(v,{height:300,data:[{label:`A`,value:-30},{label:`B`,value:130}]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{children:`Single Data Point`}),(0,x.jsx)(v,{height:300,data:[{label:`A`,value:100}]})]})]}),args:{containerHeight:`600px`},parameters:{docs:{description:{story:`Examples of how the pie chart handles various error states and edge cases.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    thickness: 1,
    gapScale: 0,
    cornerScale: 0,
    withTooltips: false,
    data,
    containerWidth: '432px',
    containerHeight: '432px'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 300
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} legend={{
      interactive: legend?.interactive
    }} chartId="composition-pie-chart">
                <PieChart.Legend {...legend} />
            </PieChart>;
  },
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Composition API using \`<PieChart.Legend />\` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const chartData = args.data || [{
      label: 'Desktop',
      value: 45
    }, {
      label: 'Mobile',
      value: 30
    }, {
      label: 'Tablet',
      value: 25
    }];
    return <PieChartUnresponsive data={chartData} size={400} withTooltips={true} thickness={0.7} legendValueDisplay={args.legendValueDisplay || 'value'}>
                <PieChartUnresponsive.HTML>
                    <h3 style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>Device Usage Distribution</h3>
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
            </PieChartUnresponsive>;
  },
  args: {
    data,
    containerHeight: '700px',
    containerWidth: '600px'
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    thickness: 0.85,
    // Slightly thinner for better label visibility
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      color: '#FF6B6B' // Light red segment
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      color: '#4ECDC4' // Light teal segment
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      color: '#45B7D1' // Light blue segment
    }],
    labelTextColor: '#FFFFFF',
    // White text for contrast against dark background
    labelBackgroundColor: 'rgba(0, 0, 0, 0.75)' // Dark semi-transparent background
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart height={300} data={[]} />
            </div>
            <div>
                <h3>Negative Values</h3>
                <PieChart height={300} data={[{
        label: 'A',
        value: -30
      }, {
        label: 'B',
        value: 130
      }]} />
            </div>
            <div>
                <h3>Single Data Point</h3>
                <PieChart height={300} data={[{
        label: 'A',
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
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithSize`,`FixedDimensions`,`Animation`,`WithTooltips`,`WithLegend`,`WithCompositionLegend`,`CompositionAPI`,`CustomLabelColors`,`ErrorStates`]}));P();export{E as Animation,A as CompositionAPI,j as CustomLabelColors,C as Default,M as ErrorStates,T as FixedDimensions,k as WithCompositionLegend,O as WithLegend,w as WithSize,D as WithTooltips,N as __namedExportsOrder,S as default,P as n,b as t};