"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2713],{"../charts/src/charts/pie-chart/stories/index.stories.tsx"(C,y,n){n.r(y),n.d(y,{Animation:()=>i,CompositionAPI:()=>_,CustomLabelColors:()=>h,Default:()=>e,ErrorStates:()=>x,FixedDimensions:()=>a,WithCompositionLegend:()=>u,WithLegend:()=>s,WithSize:()=>o,WithTooltips:()=>l,__namedExportsOrder:()=>L,default:()=>f});var d=n("../charts/src/providers/chart-context/global-charts-provider.tsx"),p=n("../charts/src/stories/chart-decorator.tsx"),g=n("../charts/src/stories/legend-config.tsx"),m=n("../charts/src/stories/sample-data/index.ts"),c=n("../charts/src/stories/theme-config.tsx"),r=n("../charts/src/charts/pie-chart/pie-chart.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f={title:"JS Packages/Charts Library/Charts/Pie Chart",component:r.A,parameters:{layout:"centered"},decorators:[p.OI],argTypes:{...p.xo,...c.jW,...g.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},size:{control:{type:"range",min:100,max:800,step:10,default:400},description:"Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space.",table:{category:"Dimensions"}},thickness:{control:{type:"range",min:0,max:1,step:.01},description:"Thickness of the pie (1 = full pie, <1 = donut)",table:{category:"Visual Style"}},padding:{control:{type:"range",min:0,max:100,step:1},description:"Internal padding around the chart",table:{category:"Dimensions"}},gapScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of gaps between segments (0 = no gaps)",table:{category:"Visual Style"}},cornerScale:{control:{type:"range",min:0,max:1,step:.01},description:"Scale of rounded corners on segments (0 = sharp corners)",table:{category:"Visual Style"}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments",table:{category:"Labels"}},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments",table:{category:"Labels"}},showLabels:{control:"boolean",description:"Show or hide labels on pie segments",table:{category:"Labels"}}},render:({labelTextColor:b,labelBackgroundColor:v,...T})=>{const D=(0,g.D)(T),E=(0,t.jsx)(r.A,{...T,legend:D});return b||v?(0,t.jsx)(d.S,{theme:{labelTextColor:b,labelBackgroundColor:v},children:E}):E}},e={args:{...c.In,thickness:1,gapScale:0,cornerScale:0,withTooltips:!1,data:m.Mc,containerWidth:"432px",containerHeight:"432px"}},o={args:{...e.args,size:200}},a={args:{...e.args,width:300,height:300}},i={args:{...e.args,animation:!0}},l={args:{...e.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},s={args:{...e.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},u={render:b=>{const v=(0,g.D)(b);return(0,t.jsx)(r.A,{...b,legend:{interactive:v?.interactive},chartId:"composition-pie-chart",children:(0,t.jsx)(r.A.Legend,{...v})})},args:{data:m.Mc},parameters:{docs:{description:{story:"Composition API using `<PieChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},_={render:b=>{const v=b.data||[{label:"Desktop",value:45},{label:"Mobile",value:30},{label:"Tablet",value:25}];return(0,t.jsxs)(r.W,{data:v,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:b.legendValueDisplay||"value",children:[(0,t.jsx)(r.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(r.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(r.W.HTML,{children:[(0,t.jsx)(r.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})},args:{data:m.Mc,containerHeight:"700px",containerWidth:"600px"},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},h={args:{...e.args,showLegend:!0,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)"},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},x={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(r.A,{height:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(r.A,{height:300,data:[{label:"A",value:-30},{label:"B",value:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(r.A,{height:300,data:[{label:"A",value:100}]})]})]}),args:{containerHeight:"600px"},parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},L=["Default","WithSize","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","CompositionAPI","CustomLabelColors","ErrorStates"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 200
  }
}`,...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 300,
    height: 300
  }
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}},"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx"(C,y,n){n.d(y,{R:()=>f});var d=n("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),p=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=n.n(p),m=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"),c={};c.insert="head",c.singleton=!1;var r=g()(m.A,c);const t=m.A.locals||{};var S=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({x:e,y:o,width:a,height:i,children:l})=>(0,S.jsx)("foreignObject",{x:e-a/2,y:o-i/2,width:a,height:i,children:(0,S.jsx)(d.B,{align:"center",justify:"center",className:t["svg-empty-state"],children:l})});try{f.displayName="SvgEmptyState",f.__docgenInfo={description:`Renders empty-state text inside an SVG using foreignObject so that the
message wraps onto multiple lines instead of being clipped.

The component centers the text within the specified area.`,displayName:"SvgEmptyState",props:{x:{defaultValue:null,description:"X coordinate of the center point",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"Y coordinate of the center point",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Available width for the text area",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Available height for the text area",name:"height",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"Text content",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"]={docgenInfo:f.__docgenInfo,name:"SvgEmptyState",path:"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(C,y,n){n.d(y,{f:()=>f});var d=n("../number-formatters/src/index.ts"),p=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=n("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=n("../charts/src/utils/format-percentage.ts");function c(e,o,a="percentage"){if(!o||a==="none")return"";if("percentage"in e)switch(a){case"percentage":return(0,m.E)(e.percentage);case"value":return(0,d.ZV)(e.value);case"valueDisplay":return e.valueDisplay||(0,d.ZV)(e.value);default:return""}return"value"in e&&e.value!==null?(0,d.ZV)(e.value):""}function r(e,o,a,i,l){if(o){const s=a||i;if(s)return{...e,glyphSize:l,renderGlyph:s}}return e}function t(e,o,a,i,l,s,u){const _=(h,x)=>{const{color:L,glyph:b,shapeStyles:v}=o({data:h,index:x,legendShape:u}),T={label:h.label,value:a?h.data?.length?.toString()||"0":"",color:L,shapeStyle:v};return r(T,i,b,s,l)};return e.map(_)}function S(e,o,a,i,l,s,u,_){const h=(x,L)=>{const{color:b,glyph:v,shapeStyles:T}=o({data:x,index:L,legendShape:_}),D={label:x.label,value:c(x,a,i),color:b,shapeStyle:T};return r(D,l,v,u,s)};return e.map(h)}function f(e,o={},a){const{showValues:i=!1,legendValueDisplay:l="percentage",withGlyph:s=!1,glyphSize:u=8,renderGlyph:_}=o,{getElementStyles:h}=(0,g.j)();return(0,p.useMemo)(()=>!e||!Array.isArray(e)||e.length===0?[]:"data"in e[0]?t(e,h,i,s,u,_,a):S(e,h,i,l,s,u,_,a),[e,h,i,l,s,u,_,a])}},"../charts/src/stories/legend-config.tsx"(C,y,n){n.d(y,{D:()=>p,r:()=>d});const d={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","line","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function p(g){const{legendPosition:m,legendAlignment:c,legendOrientation:r,legendShape:t,legendInteractive:S,legendItemClassName:f,legendMaxWidth:e,legendTextOverflow:o,legendShapeStyles:a,legendItemStyles:i}=g;if(!(m!==void 0||c!==void 0||r!==void 0||t!==void 0||S!==void 0||f!==void 0||e!==void 0||o!==void 0||a!==void 0||i!==void 0))return;const s={};return r!==void 0&&(s.orientation=r),m!==void 0&&(s.position=m),c!==void 0&&(s.alignment=c),t!==void 0&&(s.shape=t),S!==void 0&&(s.interactive=S),f!==void 0&&(s.itemClassName=f),(e!==void 0||o!==void 0)&&(s.labelStyles={},e!==void 0&&(s.labelStyles.maxWidth=e),o!==void 0&&(s.labelStyles.textOverflow=o)),a!==void 0&&(s.shapeStyles=a),i!==void 0&&(s.itemStyles=i),s}try{p.displayName="extractLegendConfig",p.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:p.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{d.displayName="legendArgTypes",d.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:d.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(C,y,n){n.d(y,{E:()=>p});var d=n("../number-formatters/src/index.ts");const p=g=>(0,d.ZV)(g/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"(C,y,n){n.d(y,{A:()=>r});var d=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=n.n(d),g=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=n.n(g),c=m()(p());c.push([C.id,".W96yaSYqyuTgaNOtqtwb{text-align:center;width:100%;height:100%;font-size:var(--wpds-font-size-md, 13px);color:var(--wpds-color-fg-content-neutral-weak, #6d6d6d)}",""]),c.locals={"svg-empty-state":"W96yaSYqyuTgaNOtqtwb"};const r=c}}]);
