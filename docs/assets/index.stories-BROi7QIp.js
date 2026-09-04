import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-D2pHJD-r.js";import{c as r,n as i,o as a,r as o,s,t as c}from"./chart-decorator-B1QyFBzV.js";import{n as l,r as u,t as d}from"./legend-config-BJNKT_wW.js";import{f,v as p}from"./sample-data-Cx3-uFO8.js";import{i as m,n as h,r as g,t as _}from"./pie-chart-DMW5iRjQ.js";var v=e({Animation:()=>w,CompositionAPI:()=>O,CustomLabelColors:()=>k,Default:()=>x,ErrorStates:()=>A,FixedDimensions:()=>C,WithCompositionLegend:()=>D,WithLegend:()=>E,WithSize:()=>S,WithTooltips:()=>T,__namedExportsOrder:()=>j,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{i(),l(),f(),a(),_(),m(),y=n(),b={title:`JS Packages/Charts Library/Charts/Pie Chart`,component:g,parameters:{layout:`centered`},decorators:[c],argTypes:{...o,...r,...u,legendValueDisplay:{control:{type:`select`},options:[`percentage`,`value`,`valueDisplay`,`none`],table:{category:`Legend`},description:`What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.`},size:{control:{type:`range`,min:100,max:800,step:10,default:400},description:`Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space.`,table:{category:`Dimensions`}},thickness:{control:{type:`range`,min:0,max:1,step:.01},description:`Thickness of the pie (1 = full pie, <1 = donut)`,table:{category:`Visual Style`}},padding:{control:{type:`range`,min:0,max:100,step:1},description:`Internal padding around the chart`,table:{category:`Dimensions`}},gapScale:{control:{type:`range`,min:0,max:1,step:.01},description:`Scale of gaps between segments (0 = no gaps)`,table:{category:`Visual Style`}},cornerScale:{control:{type:`range`,min:0,max:1,step:.01},description:`Scale of rounded corners on segments (0 = sharp corners)`,table:{category:`Visual Style`}},labelTextColor:{control:{type:`color`},description:"Color of the label text on pie segments. Sets `--a8c-charts-color-label-inverse`.",table:{category:`Labels`}},labelBackgroundColor:{control:{type:`color`},description:"Background color for labels on pie segments. Sets `--a8c-charts-color-label-background`.",table:{category:`Labels`}},showLabels:{control:`boolean`,description:`Show or hide labels on pie segments`,table:{category:`Labels`}}},render:({labelTextColor:e,labelBackgroundColor:t,...n})=>{let r=d(n),i=(0,y.jsx)(g,{...n,legend:r});return e||t?(0,y.jsx)(`div`,{style:{"--a8c-charts-color-label-inverse":e,"--a8c-charts-color-label-background":t},children:i}):i}},x={args:{...s,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:p,containerWidth:`432px`,containerHeight:`432px`}},S={args:{...x.args,size:200}},C={args:{...x.args,width:300,height:300}},w={args:{...x.args,animation:!0}},T={args:{...x.args,withTooltips:!0},parameters:{docs:{description:{story:`Pie chart with interactive tooltips that appear on hover.`}}}},E={args:{...x.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},D={render:e=>{let t=d(e);return(0,y.jsx)(g,{...e,legend:{interactive:t?.interactive},chartId:`composition-pie-chart`,children:(0,y.jsx)(g.Legend,{...t})})},args:{data:p},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},O={render:e=>(0,y.jsxs)(h,{data:e.data||[{label:`Desktop`,value:45},{label:`Mobile`,value:30},{label:`Tablet`,value:25}],size:400,withTooltips:!0,thickness:.7,legendValueDisplay:e.legendValueDisplay||`value`,children:[(0,y.jsx)(h.HTML,{children:(0,y.jsx)(`h3`,{style:{textAlign:`center`,marginBottom:`20px`},children:`Device Usage Distribution`})}),(0,y.jsxs)(h.SVG,{children:[(0,y.jsx)(`text`,{x:0,y:0,textAnchor:`middle`,style:{fontSize:`24px`,fontWeight:`bold`},children:`100%`}),(0,y.jsx)(`text`,{x:0,y:20,textAnchor:`middle`,style:{fontSize:`14px`,fill:`#666`},children:`Total Users`})]}),(0,y.jsxs)(h.HTML,{children:[(0,y.jsx)(h.Legend,{position:`bottom`,orientation:`horizontal`,alignment:`center`}),(0,y.jsxs)(`div`,{style:{marginTop:`20px`,padding:`10px`,backgroundColor:`#f5f5f5`,borderRadius:`4px`,fontSize:`14px`,color:`#666`},children:[(0,y.jsx)(`p`,{style:{margin:0},children:`This example demonstrates the composition API where you can add:`}),(0,y.jsxs)(`ul`,{style:{margin:`5px 0 0 20px`,padding:0},children:[(0,y.jsx)(`li`,{children:`SVG elements inside the chart using PieChart.SVG`}),(0,y.jsx)(`li`,{children:`HTML elements outside the chart using PieChart.HTML`}),(0,y.jsx)(`li`,{children:`Mix regular children with compound components`})]})]})]})]}),args:{data:p,containerHeight:`700px`,containerWidth:`600px`},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},k={args:{...x.args,showLegend:!0,thickness:.85,data:[{label:`Desktop`,value:45e3,valueDisplay:`45K`,color:`#FF6B6B`},{label:`Mobile`,value:35e3,valueDisplay:`35K`,color:`#4ECDC4`},{label:`Tablet`,value:2e4,valueDisplay:`20K`,color:`#45B7D1`}],labelTextColor:`#FFFFFF`,labelBackgroundColor:`rgba(0, 0, 0, 0.75)`},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default a label has no plate behind it, so it reads straight off the slice.

**Key Features:**
- **Label text**: white, for contrast against the dark plate — \`--a8c-charts-color-label-inverse\`
- **Label plate**: dark and semi-transparent, \`rgba(0, 0, 0, 0.75)\` — \`--a8c-charts-color-label-background\`, \`transparent\` by default
- **Custom segment colors**: bright colors that would make default dark text hard to read
- **Opt-in enhancement**: the plate appears only once you set its role

The controls below set the two roles on a wrapper around the chart, which is how a consumer declares them.`}}}},A={render:()=>(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,gridTemplateColumns:`repeat(2, 1fr)`},children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{children:`Empty Data`}),(0,y.jsx)(g,{height:300,data:[]})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{children:`Negative Values`}),(0,y.jsx)(g,{height:300,data:[{label:`A`,value:-30},{label:`B`,value:130}]})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{children:`Single Data Point`}),(0,y.jsx)(g,{height:300,data:[{label:`A`,value:100}]})]})]}),args:{containerHeight:`600px`},parameters:{docs:{description:{story:`Examples of how the pie chart handles various error states and edge cases.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 300
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig<ChartLegendConfig<DataPointPercentage[]>>(args);
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        story: \`This example demonstrates how to enable label backgrounds for enhanced readability. By default a label has no plate behind it, so it reads straight off the slice.

**Key Features:**
- **Label text**: white, for contrast against the dark plate — \\\`--a8c-charts-color-label-inverse\\\`
- **Label plate**: dark and semi-transparent, \\\`rgba(0, 0, 0, 0.75)\\\` — \\\`--a8c-charts-color-label-background\\\`, \\\`transparent\\\` by default
- **Custom segment colors**: bright colors that would make default dark text hard to read
- **Opt-in enhancement**: the plate appears only once you set its role

The controls below set the two roles on a wrapper around the chart, which is how a consumer declares them.\`
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithSize`,`FixedDimensions`,`Animation`,`WithTooltips`,`WithLegend`,`WithCompositionLegend`,`CompositionAPI`,`CustomLabelColors`,`ErrorStates`]}));M();export{w as Animation,O as CompositionAPI,k as CustomLabelColors,x as Default,A as ErrorStates,C as FixedDimensions,D as WithCompositionLegend,E as WithLegend,S as WithSize,T as WithTooltips,j as __namedExportsOrder,b as default,M as n,v as t};