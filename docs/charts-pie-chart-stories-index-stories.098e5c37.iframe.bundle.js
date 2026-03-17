"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2713],{"../charts/src/charts/pie-chart/stories/index.stories.tsx"(L,v,o){o.r(v),o.d(v,{Animation:()=>a,CompositionAPI:()=>y,CustomLabelColors:()=>b,CustomLegendPositioning:()=>d,Default:()=>t,ErrorStates:()=>x,FixedDimensions:()=>r,InteractiveLegend:()=>h,WithCompositionLegend:()=>g,WithLegend:()=>n,WithSize:()=>i,WithTooltips:()=>c,__namedExportsOrder:()=>T,default:()=>_});var p=o("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=o("../charts/src/stories/chart-decorator.tsx"),u=o("../charts/src/stories/legend-config.tsx"),f=o("../charts/src/stories/sample-data/index.ts"),C=o("../charts/src/stories/theme-config.tsx"),s=o("../charts/src/charts/pie-chart/pie-chart.tsx"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"JS Packages/Charts Library/Charts/Pie Chart",component:s.A,parameters:{layout:"centered"},decorators:[m.OI],argTypes:{...m.xo,...C.jW,...u.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400},description:"Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space.",table:{category:"Dimensions"}},thickness:{control:{type:"range",min:0,max:1,step:.01},description:"Thickness of the pie (1 = full pie, <1 = donut)",table:{category:"Visual Style"}},padding:{control:{type:"range",min:0,max:100,step:1},description:"Internal padding around the chart",table:{category:"Dimensions"}},gapScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of gaps between segments (0 = no gaps)",table:{category:"Visual Style"}},cornerScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of rounded corners on segments (0 = sharp corners)",table:{category:"Visual Style"}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments",table:{category:"Labels"}},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments",table:{category:"Labels"}},showLabels:{control:"boolean",description:"Show or hide labels on pie segments",table:{category:"Labels"}}},render:({labelTextColor:l,labelBackgroundColor:S,...P})=>{const A=(0,u.D)(P),w=(0,e.jsx)(s.A,{...P,legend:A});return l||S?(0,e.jsx)(p.S,{theme:{labelTextColor:l,labelBackgroundColor:S},children:w}):w}},t={args:{...C.In,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:f.Mc,containerWidth:"432px",containerHeight:"432px"}},i={args:{...t.args,size:200}},r={args:{...t.args,width:300,height:300}},a={args:{...t.args,animation:!0}},c={args:{...t.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},n={args:{...t.args,showLegend:!0}},g={render:l=>{const S=(0,u.D)(l);return(0,e.jsx)(s.A,{...l,chartId:"composition-pie-chart",children:(0,e.jsx)(s.A.Legend,{...S})})},args:{data:f.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},h={render:l=>(0,e.jsx)(p.S,{children:(0,e.jsx)(s.W,{chartId:"interactive-pie-chart",size:l.size,data:l.data,showLegend:!0,legend:(0,u.D)(l),legendValueDisplay:l.legendValueDisplay,children:(0,e.jsx)("p",{style:{color:"#666"},children:"Click legend items to show/hide segments. Percentages recalculate automatically for visible segments."})})}),args:{data:f.Mc,size:400,legendInteractive:!0},parameters:{docs:{description:{story:"Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider."}}}},d={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"432px"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},y={render:l=>{const S=l.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,e.jsxs)(s.W,{data:S,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:l.legendValueDisplay||"value",children:[(0,e.jsx)(s.W.HTML,{children:(0,e.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,e.jsxs)(s.W.SVG,{children:[(0,e.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,e.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,e.jsxs)(s.W.HTML,{children:[(0,e.jsx)(s.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,e.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,e.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,e.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,e.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,e.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,e.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})},args:{data:f.Mc,containerHeight:"700px",containerWidth:"600px"},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},b={args:{...t.args,showLegend:!0,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)"},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},x={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(s.A,{data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Percentage Total"}),(0,e.jsx)(s.A,{data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(s.A,{data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(s.A,{height:300,data:[{label:"A",value:100,percentage:100}]})]})]}),args:{containerHeight:"600px"},parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},T=["Default","WithSize","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CompositionAPI","CustomLabelColors","ErrorStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 300
  }
}`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...n.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart {...args} chartId="composition-pie-chart">
                <PieChart.Legend {...legend} />
            </PieChart>;
  },
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
}`,...g.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <PieChartUnresponsive chartId="interactive-pie-chart" size={args.size} data={args.data} showLegend={true} legend={extractLegendConfig(args)} legendValueDisplay={args.legendValueDisplay}>
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
    size: 400,
    legendInteractive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(L,v,o){o.d(v,{f:()=>_});var p=o("../number-formatters/src/index.ts"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=o("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),f=o("../charts/src/utils/format-percentage.ts");function C(t,i,r="percentage"){if(!i||r==="none")return"";if("percentage"in t){const a=t;switch(r){case"percentage":return(0,f.E)(a.percentage);case"value":return(0,p.ZV)(a.value);case"valueDisplay":return a.valueDisplay||(0,p.ZV)(a.value);default:return""}}return"value"in t&&t.value!==null?(0,p.ZV)(t.value):""}function s(t,i,r,a,c){if(i){const n=r||a;if(n)return{...t,glyphSize:c,renderGlyph:n}}return t}function e(t,i,r,a,c,n,g){const h=(d,y)=>{const{color:b,glyph:x,shapeStyles:T}=i({data:d,index:y,legendShape:g}),l={label:d.label,value:r?d.data?.length?.toString()||"0":"",color:b,shapeStyle:T};return s(l,a,x,n,c)};return t.map(h)}function D(t,i,r,a,c,n,g,h){const d=(y,b)=>{const{color:x,glyph:T,shapeStyles:l}=i({data:y,index:b,legendShape:h}),S={label:y.label,value:C(y,r,a),color:x,shapeStyle:l};return s(S,c,T,g,n)};return t.map(d)}function _(t,i={},r){const{showValues:a=!1,legendValueDisplay:c="percentage",withGlyph:n=!1,glyphSize:g=8,renderGlyph:h}=i,{getElementStyles:d}=(0,u.j)();return(0,m.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?e(t,d,a,n,g,h,r):D(t,d,a,c,n,g,h,r),[t,d,a,c,n,g,h,r])}},"../charts/src/stories/legend-config.tsx"(L,v,o){o.d(v,{D:()=>m,r:()=>p});const p={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function m(u){const{legendPosition:f,legendAlignment:C,legendOrientation:s,legendShape:e,legendInteractive:D,legendItemClassName:_,legendMaxWidth:t,legendTextOverflow:i,legendShapeStyles:r,legendItemStyles:a}=u;if(!(f!==void 0||C!==void 0||s!==void 0||e!==void 0||D!==void 0||_!==void 0||t!==void 0||i!==void 0||r!==void 0||a!==void 0))return;const n={};return s!==void 0&&(n.orientation=s),f!==void 0&&(n.position=f),C!==void 0&&(n.alignment=C),e!==void 0&&(n.shape=e),D!==void 0&&(n.interactive=D),_!==void 0&&(n.itemClassName=_),(t!==void 0||i!==void 0)&&(n.labelStyles={},t!==void 0&&(n.labelStyles.maxWidth=t),i!==void 0&&(n.labelStyles.textOverflow=i)),r!==void 0&&(n.shapeStyles=r),a!==void 0&&(n.itemStyles=a),n}try{m.displayName="extractLegendConfig",m.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:m.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{p.displayName="legendArgTypes",p.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(L,v,o){o.d(v,{E:()=>m});var p=o("../number-formatters/src/index.ts");const m=u=>(0,p.ZV)(u/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
