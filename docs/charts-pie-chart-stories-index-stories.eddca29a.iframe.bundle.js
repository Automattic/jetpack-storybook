"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2713],{"../charts/src/charts/pie-chart/stories/index.stories.tsx"(_,m,a){a.r(m),a.d(m,{Animation:()=>r,CompositionAPI:()=>u,CustomLabelColors:()=>y,CustomLegendPositioning:()=>p,Default:()=>t,ErrorStates:()=>v,FixedDimensions:()=>s,InteractiveLegend:()=>h,WithCompositionLegend:()=>g,WithLegend:()=>d,WithSize:()=>i,WithTooltips:()=>c,__namedExportsOrder:()=>T,default:()=>f});var l=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),b=a("../charts/src/stories/chart-decorator.tsx"),C=a("../charts/src/stories/legend-config.tsx"),x=a("../charts/src/stories/sample-data/index.ts"),D=a("../charts/src/stories/theme-config.tsx"),o=a("../charts/src/charts/pie-chart/pie-chart.tsx"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={title:"JS Packages/Charts Library/Charts/Pie Chart",component:o.A,parameters:{layout:"centered"},decorators:[b.OI],argTypes:{...b.xo,...D.jW,...C.r,size:{control:{type:"range",min:100,max:800,step:10,default:400},description:"Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space.",table:{category:"Dimensions"}},thickness:{control:{type:"range",min:0,max:1,step:.01},description:"Thickness of the pie (1 = full pie, <1 = donut)",table:{category:"Visual Style"}},padding:{control:{type:"range",min:0,max:100,step:1},description:"Internal padding around the chart",table:{category:"Dimensions"}},gapScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of gaps between segments (0 = no gaps)",table:{category:"Visual Style"}},cornerScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of rounded corners on segments (0 = sharp corners)",table:{category:"Visual Style"}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments",table:{category:"Labels"}},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments",table:{category:"Labels"}},showLabels:{control:"boolean",description:"Show or hide labels on pie segments",table:{category:"Labels"}}},render:({labelTextColor:n,labelBackgroundColor:P,...L})=>{const S=(0,e.jsx)(o.A,{...L});return n||P?(0,e.jsx)(l.S,{theme:{labelTextColor:n,labelBackgroundColor:P},children:S}):S}},t={args:{...D.In,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:x.Mc,containerWidth:"432px",containerHeight:"432px"}},i={args:{...t.args,size:200}},s={args:{...t.args,width:300,height:300}},r={args:{...t.args,animation:!0}},c={args:{...t.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},d={args:{...t.args,showLegend:!0}},g={render:n=>(0,e.jsx)(o.A,{size:300,data:n.data,legendValueDisplay:n.legendValueDisplay,children:(0,e.jsx)(o.A.Legend,{position:n.legendPosition||"bottom",orientation:n.legendOrientation||"horizontal",alignment:n.legendAlignment||"center",maxWidth:n.legendMaxWidth,textOverflow:n.legendTextOverflow||"wrap"})}),args:{data:x.Mc},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},h={render:n=>(0,e.jsx)(l.S,{children:(0,e.jsx)(o.W,{chartId:"interactive-pie-chart",size:n.size,data:n.data,showLegend:!0,legendInteractive:!0,legendPosition:n.legendPosition||"bottom",legendOrientation:n.legendOrientation||"horizontal",legendAlignment:n.legendAlignment||"center",legendValueDisplay:n.legendValueDisplay,children:(0,e.jsx)("p",{style:{color:"#666"},children:"Click legend items to show/hide segments. Percentages recalculate automatically for visible segments."})})}),args:{data:x.Mc,size:400},parameters:{docs:{description:{story:"Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider."}}}},p={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"432px"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},u={render:n=>{const P=n.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,e.jsxs)(o.W,{data:P,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:n.legendValueDisplay||"value",children:[(0,e.jsx)(o.W.HTML,{children:(0,e.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,e.jsxs)(o.W.SVG,{children:[(0,e.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,e.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,e.jsxs)(o.W.HTML,{children:[(0,e.jsx)(o.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,e.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,e.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,e.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,e.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,e.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,e.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})},args:{data:x.Mc,containerHeight:"700px",containerWidth:"600px"},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},y={args:{...t.args,showLegend:!0,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},v={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(o.A,{data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Percentage Total"}),(0,e.jsx)(o.A,{data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(o.A,{data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(o.A,{height:300,data:[{label:"A",value:100,percentage:100}]})]})]}),args:{containerHeight:"600px"},parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},T=["Default","WithSize","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CompositionAPI","CustomLabelColors","ErrorStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200
  }
}`,...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 300
  }
}`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...r.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...d.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <PieChart size={300} data={args.data} legendValueDisplay={args.legendValueDisplay}>
            <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
        </PieChart>,
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
        story: 'Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <PieChartUnresponsive chartId="interactive-pie-chart" size={args.size} data={args.data} showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendValueDisplay={args.legendValueDisplay}>
                <p style={{
        color: '#666'
      }}>
                    Click legend items to show/hide segments. Percentages recalculate automatically for
                    visible segments.
                </p>
            </PieChartUnresponsive>
        </GlobalChartsProvider>,
  args: {
    data,
    size: 400
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    containerHeight: '432px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
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
}`,...y.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart data={[]} />
            </div>
            <div>
                <h3>Invalid Percentage Total</h3>
                <PieChart data={[{
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
                <PieChart data={[{
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
                <PieChart height={300} data={[{
        label: 'A',
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
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(_,m,a){a.d(m,{f:()=>f});var l=a("../number-formatters/src/index.ts"),b=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=a("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),x=a("../charts/src/utils/format-percentage.ts");function D(t,i,s="percentage"){if(!i||s==="none")return"";if("percentage"in t){const r=t;switch(s){case"percentage":return(0,x.E)(r.percentage);case"value":return(0,l.ZV)(r.value);case"valueDisplay":return r.valueDisplay||(0,l.ZV)(r.value);default:return""}}return"value"in t&&t.value!==null?(0,l.ZV)(t.value):""}function o(t,i,s,r,c){if(i){const d=s||r;if(d)return{...t,glyphSize:c,renderGlyph:d}}return t}function e(t,i,s,r,c,d,g){const h=(p,u)=>{const{color:y,glyph:v,shapeStyles:T}=i({data:p,index:u,legendShape:g}),n={label:p.label,value:s?p.data?.length?.toString()||"0":"",color:y,shapeStyle:T};return o(n,r,v,d,c)};return t.map(h)}function w(t,i,s,r,c,d,g,h){const p=(u,y)=>{const{color:v,glyph:T,shapeStyles:n}=i({data:u,index:y,legendShape:h}),P={label:u.label,value:D(u,s,r),color:v,shapeStyle:n};return o(P,c,T,g,d)};return t.map(p)}function f(t,i={},s){const{showValues:r=!1,legendValueDisplay:c="percentage",withGlyph:d=!1,glyphSize:g=8,renderGlyph:h}=i,{getElementStyles:p}=(0,C.j)();return(0,b.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?e(t,p,r,d,g,h,s):w(t,p,r,c,d,g,h,s),[t,p,r,c,d,g,h,s])}},"../charts/src/hooks/use-element-size.ts"(_,m,a){a.d(m,{L:()=>b});var l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function b({initialWidth:C=0,initialHeight:x=0}={}){const[D,o]=(0,l.useState)(C),[e,w]=(0,l.useState)(x),f=(0,l.useRef)(null);return[(0,l.useCallback)(i=>{if(f.current&&(f.current.disconnect(),f.current=null),i){const s=()=>{const c=i.getBoundingClientRect();o(c.width||0),w(c.height||0)};s();const r=new ResizeObserver(s);r.observe(i),f.current=r}},[]),D,e]}},"../charts/src/stories/legend-config.tsx"(_,m,a){a.d(m,{r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(_,m,a){a.d(m,{E:()=>b});var l=a("../number-formatters/src/index.ts");const b=C=>(0,l.ZV)(C/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
