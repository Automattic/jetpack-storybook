"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2713],{"../charts/src/charts/pie-chart/stories/index.stories.tsx"(T,x,o){o.r(x),o.d(x,{Animation:()=>a,CompositionAPI:()=>b,CustomLabelColors:()=>C,CustomLegendPositioning:()=>p,Default:()=>t,ErrorStates:()=>S,FixedDimensions:()=>r,InteractiveLegend:()=>m,WithCompositionLegend:()=>u,WithLegend:()=>n,WithSize:()=>s,WithTooltips:()=>c,__namedExportsOrder:()=>L,default:()=>f});var l=o("../charts/src/providers/chart-context/global-charts-provider.tsx"),h=o("../charts/src/stories/chart-decorator.tsx"),g=o("../charts/src/stories/legend-config.tsx"),y=o("../charts/src/stories/sample-data/index.ts"),v=o("../charts/src/stories/theme-config.tsx"),i=o("../charts/src/charts/pie-chart/pie-chart.tsx"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={title:"JS Packages/Charts Library/Charts/Pie Chart",component:i.A,parameters:{layout:"centered"},decorators:[h.OI],argTypes:{...h.xo,...v.jW,...g.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400},description:"Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space.",table:{category:"Dimensions"}},thickness:{control:{type:"range",min:0,max:1,step:.01},description:"Thickness of the pie (1 = full pie, <1 = donut)",table:{category:"Visual Style"}},padding:{control:{type:"range",min:0,max:100,step:1},description:"Internal padding around the chart",table:{category:"Dimensions"}},gapScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of gaps between segments (0 = no gaps)",table:{category:"Visual Style"}},cornerScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of rounded corners on segments (0 = sharp corners)",table:{category:"Visual Style"}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments",table:{category:"Labels"}},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments",table:{category:"Labels"}},showLabels:{control:"boolean",description:"Show or hide labels on pie segments",table:{category:"Labels"}}},render:({labelTextColor:d,labelBackgroundColor:D,...P})=>{const A=(0,g.D)(P),w=(0,e.jsx)(i.A,{...P,legend:A});return d||D?(0,e.jsx)(l.S,{theme:{labelTextColor:d,labelBackgroundColor:D},children:w}):w}},t={args:{...v.In,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:y.Mc,containerWidth:"432px",containerHeight:"432px"}},s={args:{...t.args,size:200}},r={args:{...t.args,width:300,height:300}},a={args:{...t.args,animation:!0}},c={args:{...t.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},n={args:{...t.args,showLegend:!0}},u={render:d=>{const D=(0,g.D)(d);return(0,e.jsx)(i.A,{size:300,data:d.data,legendValueDisplay:d.legendValueDisplay,chartId:"composition-pie-chart",children:(0,e.jsx)(i.A.Legend,{...D})})},args:{data:y.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},m={render:d=>(0,e.jsx)(l.S,{children:(0,e.jsx)(i.W,{chartId:"interactive-pie-chart",size:d.size,data:d.data,showLegend:!0,legend:(0,g.D)(d),legendValueDisplay:d.legendValueDisplay,children:(0,e.jsx)("p",{style:{color:"#666"},children:"Click legend items to show/hide segments. Percentages recalculate automatically for visible segments."})})}),args:{data:y.Mc,size:400,legendInteractive:!0},parameters:{docs:{description:{story:"Interactive legends allow users to toggle segment visibility by clicking legend items. When segments are hidden, the visible segments are recalculated to total 100%. Requires chartId and GlobalChartsProvider."}}}},p={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"432px"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},b={render:d=>{const D=d.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,e.jsxs)(i.W,{data:D,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:d.legendValueDisplay||"value",children:[(0,e.jsx)(i.W.HTML,{children:(0,e.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,e.jsxs)(i.W.SVG,{children:[(0,e.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,e.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,e.jsxs)(i.W.HTML,{children:[(0,e.jsx)(i.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,e.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,e.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,e.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,e.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,e.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,e.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})},args:{data:y.Mc,containerHeight:"700px",containerWidth:"600px"},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},C={args:{...t.args,showLegend:!0,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},S={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(i.A,{data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Invalid Percentage Total"}),(0,e.jsx)(i.A,{data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(i.A,{data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(i.A,{height:300,data:[{label:"A",value:100,percentage:100}]})]})]}),args:{containerHeight:"600px"},parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},L=["Default","WithSize","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","CompositionAPI","CustomLabelColors","ErrorStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200
  }
}`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
    return <PieChart size={300} data={args.data} legendValueDisplay={args.legendValueDisplay} chartId="composition-pie-chart">
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
}`,...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(T,x,o){o.d(x,{f:()=>f});var l=o("../number-formatters/src/index.ts"),h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=o("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=o("../charts/src/utils/format-percentage.ts");function v(t,s,r="percentage"){if(!s||r==="none")return"";if("percentage"in t){const a=t;switch(r){case"percentage":return(0,y.E)(a.percentage);case"value":return(0,l.ZV)(a.value);case"valueDisplay":return a.valueDisplay||(0,l.ZV)(a.value);default:return""}}return"value"in t&&t.value!==null?(0,l.ZV)(t.value):""}function i(t,s,r,a,c){if(s){const n=r||a;if(n)return{...t,glyphSize:c,renderGlyph:n}}return t}function e(t,s,r,a,c,n,u){const m=(p,b)=>{const{color:C,glyph:S,shapeStyles:L}=s({data:p,index:b,legendShape:u}),d={label:p.label,value:r?p.data?.length?.toString()||"0":"",color:C,shapeStyle:L};return i(d,a,S,n,c)};return t.map(m)}function _(t,s,r,a,c,n,u,m){const p=(b,C)=>{const{color:S,glyph:L,shapeStyles:d}=s({data:b,index:C,legendShape:m}),D={label:b.label,value:v(b,r,a),color:S,shapeStyle:d};return i(D,c,L,u,n)};return t.map(p)}function f(t,s={},r){const{showValues:a=!1,legendValueDisplay:c="percentage",withGlyph:n=!1,glyphSize:u=8,renderGlyph:m}=s,{getElementStyles:p}=(0,g.j)();return(0,h.useMemo)(()=>!t||!Array.isArray(t)||t.length===0?[]:"data"in t[0]?e(t,p,a,n,u,m,r):_(t,p,a,c,n,u,m,r),[t,p,a,c,n,u,m,r])}},"../charts/src/hooks/use-element-size.ts"(T,x,o){o.d(x,{L:()=>h});var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h({initialWidth:g=0,initialHeight:y=0}={}){const[v,i]=(0,l.useState)(g),[e,_]=(0,l.useState)(y),f=(0,l.useRef)(null);return[(0,l.useCallback)(s=>{if(f.current&&(f.current.disconnect(),f.current=null),s){const r=()=>{const c=s.getBoundingClientRect();i(c.width||0),_(c.height||0)};r();const a=new ResizeObserver(r);a.observe(s),f.current=a}},[]),v,e]}},"../charts/src/stories/legend-config.tsx"(T,x,o){o.d(x,{D:()=>h,r:()=>l});const l={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function h(g){const{legendPosition:y,legendAlignment:v,legendOrientation:i,legendShape:e,legendInteractive:_,legendItemClassName:f,legendMaxWidth:t,legendTextOverflow:s,legendShapeStyles:r,legendItemStyles:a}=g;if(!(y!==void 0||v!==void 0||i!==void 0||e!==void 0||_!==void 0||f!==void 0||t!==void 0||s!==void 0||r!==void 0||a!==void 0))return;const n={};return i!==void 0&&(n.orientation=i),y!==void 0&&(n.position=y),v!==void 0&&(n.alignment=v),e!==void 0&&(n.shape=e),_!==void 0&&(n.interactive=_),f!==void 0&&(n.itemClassName=f),(t!==void 0||s!==void 0)&&(n.labelStyles={},t!==void 0&&(n.labelStyles.maxWidth=t),s!==void 0&&(n.labelStyles.textOverflow=s)),r!==void 0&&(n.shapeStyles=r),a!==void 0&&(n.itemStyles=a),n}try{h.displayName="extractLegendConfig",h.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:h.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{l.displayName="legendArgTypes",l.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(T,x,o){o.d(x,{E:()=>h});var l=o("../number-formatters/src/index.ts");const h=g=>(0,l.ZV)(g/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}}]);
