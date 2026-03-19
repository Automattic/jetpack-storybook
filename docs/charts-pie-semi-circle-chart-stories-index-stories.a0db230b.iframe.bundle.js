"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx"(S,p,e){e.r(p),e.d(p,{Animation:()=>u,CompositionAPI:()=>x,Default:()=>s,ErrorStates:()=>T,FixedDimensions:()=>l,WithCompositionLegend:()=>C,WithLegend:()=>m,WithTooltips:()=>v,__namedExportsOrder:()=>j,default:()=>n});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/legend-config.tsx"),h=e("../charts/src/stories/sample-data/index.ts"),d=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:d.A,parameters:{layout:"centered"},decorators:[i.OI],argTypes:{...i.xo,...c.jW,...a.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}},render:f=>{const E=(0,a.D)(f);return(0,t.jsx)(d.A,{...f,legend:E})}},s={args:{...c.In,thickness:.4,data:h.f2,label:"OS",note:"Windows +10%",clockwise:!0},parameters:{docs:{description:{story:"Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio."}}}},l={render:f=>(0,t.jsx)(d.A,{width:f.width,data:f.data,label:f.label,note:f.note,thickness:f.thickness,clockwise:f.clockwise,height:f.height}),args:{...s.args,resize:"none",width:600,height:300},parameters:{docs:{description:{story:"Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions."}}}},u={args:{...s.args,animation:!0}},v={args:{...s.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},m={args:{...s.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},C={render:f=>{const E=(0,a.D)(f);return(0,t.jsx)(d.A,{...s.args,...f,legend:{interactive:E?.interactive},chartId:"composition-semi-circle-chart",children:(0,t.jsx)(d.A.Legend,{...E})})},args:{data:h.f2},parameters:{docs:{description:{story:"Composition API using `<PieSemiCircleChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},T={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(d.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Value"}),(0,t.jsx)(d.A,{width:300,data:[{label:"A",value:0},{label:"B",value:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(d.A,{width:300,data:[{label:"A",value:-30},{label:"B",value:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(d.A,{height:300,data:[{label:"Single Point",value:100}]})]})]}),args:{containerHeight:600},parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},x={render:f=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(d.A,{height:300,data:f.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(d.A.SVG,{children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(d.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(d.A,{height:300,data:f.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(d.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(d.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(d.A,{height:200,data:f.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:h.f2,containerHeight:"1000px",containerWidth:"1000px"},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},j=["Default","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","ErrorStates","CompositionAPI"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const legend = extractLegendConfig(args);
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
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    containerHeight: 600
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the semi-circle pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(S,p,e){e.d(p,{A:()=>Te});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),i=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),c=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),a=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@6.14.0/node_modules/@wordpress/i18n/build-module/index.mjs"),d=e("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),s=e("../charts/src/components/legend/legend.tsx"),l=e("../charts/src/components/tooltip/base-tooltip.tsx"),u=e("../charts/src/hooks/use-data-with-percentages.ts"),v=e("../charts/src/hooks/use-interactive-legend-data.ts"),m=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),C=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),T=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),x=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),j=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),f=e("../charts/src/utils/create-composition.ts"),E=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),M=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),w=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),U=e("../charts/src/charts/private/chart-layout/chart-layout.tsx"),pe=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),he=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),ue=e("../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx"),_e=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),ge=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),fe=e.n(ge),Q=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),N={};N.insert="head",N.singleton=!1;var nt=fe()(Q.A,N);const O=Q.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ve=h.__,ye=({tooltipData:P})=>(0,_.jsx)(l.R,{data:P,top:0,left:0,renderContainer:!1}),xe=.03,Se=400,Ce=P=>P.length?P.some(b=>b.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:P.reduce((b,V)=>b+V.value,0)<=0?{isValid:!1,message:"Invalid data: Total value must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},$=({data:P,chartId:z,width:I,height:b,thickness:V=.4,clockwise:B=!0,withTooltips:F=!1,showLegend:je=!1,legend:L={},legendValueDisplay:J="percentage",label:Ae,animation:Pe,note:Ee,className:be,children:Le,tooltipOffsetX:q=0,tooltipOffsetY:ee=-15,renderTooltip:De=ye,gap:Oe="md"})=>{const te=L.interactive??!1,se=L.position??"bottom",R=(0,C.R)(z),{tooltipOpen:Me,tooltipLeft:we,tooltipTop:Re,tooltipData:ne,hideTooltip:ae,showTooltip:oe}=(0,c.A)(),{containerRef:Ie,TooltipInPortal:Ve,containerBounds:D}=(0,a.A)({detectBounds:!0,scroll:!0,debounce:0}),re=(0,g.useCallback)((y,A)=>{D.width===0||D.height===0||oe({tooltipData:A.data,tooltipLeft:y.clientX-D.left+q,tooltipTop:y.clientY-D.top+ee})},[D.width,D.height,D.left,D.top,oe,q,ee]),We=(0,g.useCallback)(()=>{ae()},[ae]),Ge=(0,g.useCallback)(y=>A=>{re(A,y)},[re]),{isValid:ie,message:Be}=Ce(P),{getElementStyles:le,isSeriesVisible:ke}=(0,T.j)(),Ke=(0,u.T)(P),{visibleData:Ue,allSegmentsHidden:de,legendData:Ne}=(0,v.j)({data:Ke,chartId:R,legendInteractive:te,isSeriesVisible:ke}),Y=(0,g.useMemo)(()=>({value:y=>y.value,sort:(y,A)=>A.value-y.value,fill:y=>le({data:y,index:y.index}).color}),[le]),He=(0,g.useMemo)(()=>({showValues:!0,legendValueDisplay:J}),[J]),ze=(0,n.f)(Ne,He),{svgChildren:Fe,htmlChildren:Ye,legendChildren:Ze,otherChildren:Xe}=(0,E.n)(Le,"PieSemiCircleChart"),Qe=(0,g.useMemo)(()=>({thickness:V,clockwise:B}),[V,B]);(0,x.t)({chartId:R,legendItems:ze,chartType:"pie-semi-circle",isDataValid:ie,metadata:Qe});const $e=(0,m.j)(),Z=I||Se;if(!ie){const y=b?Math.min(I||b*2,b*2):Z,A=y/2;return(0,_.jsx)("div",{className:O["pie-semi-circle-chart"],children:(0,_.jsx)("svg",{width:y,height:A,"data-testid":"pie-chart-svg",children:(0,_.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:O.error,children:Be})})})}const Je=Ue.map(y=>{const A=P.findIndex(X=>X.label===y.label);return{...y,index:A>=0?A:0}}),qe=B?-Math.PI/2:Math.PI/2,et=B?Math.PI/2:-Math.PI/2,tt=je&&(0,_.jsx)(s.s,{orientation:L.orientation??"horizontal",position:se,alignment:L.alignment??"center",labelStyles:L.labelStyles,itemClassName:L.itemClassName,itemStyles:L.itemStyles,shapeStyles:L.shapeStyles,shape:L.shape??"circle",chartId:R,interactive:te});return(0,_.jsx)(he.O.Provider,{value:{chartId:R},children:(0,_.jsx)(U.R,{legendPosition:se,legendElement:tt,legendChildren:Ze,gap:Oe,className:(0,t.A)("pie-semi-circle-chart",O["pie-semi-circle-chart"],{[O["pie-semi-circle-chart--responsive"]]:!I&&!b},be),style:{width:I||void 0,height:b||void 0},"data-testid":"pie-chart-container",trailingContent:(0,_.jsxs)(_.Fragment,{children:[F&&Me&&ne&&(0,_.jsx)(Ve,{top:Re||0,left:we||0,children:(0,_.jsx)("div",{role:"tooltip",children:De({tooltipData:ne})})}),Ye,Xe]}),children:({contentWidth:y,contentHeight:A})=>{const X=y>0?y:Z,st=A>0?A:b||Z/2,W=Math.min(X,st*2),G=W/2,k=G,ce=k*(1-V);return(0,_.jsx)(d.B,{ref:Ie,align:"center",justify:"center",className:O["pie-semi-circle-chart__centering"],children:(0,_.jsxs)("svg",{width:W,height:G,viewBox:`0 0 ${W} ${G}`,"data-testid":"pie-chart-svg",children:[(0,_.jsx)("defs",{children:(0,_.jsx)(pe.A,{id:`radial-wipe-${R}`,radius:k,innerRadius:ce,startAngle:"-180deg",wipePercentage:50})}),(0,_.jsx)(o.A,{top:G,left:W/2,mask:Pe&&!$e?`url(#radial-wipe-${R})`:null,children:de?(0,_.jsx)(ue.R,{x:0,y:-k/2,width:W,height:G,children:ve("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.A,{data:Je,pieValue:Y.value,outerRadius:k,innerRadius:ce,cornerRadius:3,padAngle:xe,startAngle:qe,endAngle:et,pieSort:Y.sort,children:me=>me.arcs.map(K=>(0,_.jsx)("g",{onMouseMove:F?Ge(K):void 0,onMouseLeave:F?We:void 0,children:(0,_.jsx)("path",{d:me.path(K)||"",fill:Y.fill(K.data),"data-testid":"pie-segment"})},K.data.label))}),(0,_.jsxs)(o.A,{children:[(0,_.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:O.label,children:Ae}),(0,_.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:O.note,children:Ee})]}),!de&&Fe]})})]})})}})})},H=P=>(0,g.useContext)(j.m)?(0,_.jsx)($,{...P}):(0,_.jsx)(j.S,{children:(0,_.jsx)($,{...P})});H.displayName="PieSemiCircleChart";const at=(0,f.E)(H,{Legend:s.s,SVG:M.d,HTML:w.a}),Te=(0,f.E)((0,_e.F)(H),{Legend:s.s,SVG:M.d,HTML:w.a})},"../charts/src/charts/private/chart-composition/chart-html.tsx"(S,p,e){e.d(p,{a:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:i})=>(0,o.jsx)(o.Fragment,{children:i});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/charts/private/chart-composition/chart-svg.tsx"(S,p,e){e.d(p,{d:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:i})=>(0,o.jsx)(o.Fragment,{children:i});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"(S,p,e){e.d(p,{A:()=>i});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({id:c,radius:a,innerRadius:h=0,durationMs:d=1e3,wipePercentage:t=100,direction:g="clockwise",startAngle:n="-90deg"}){const s=(a-h)*2+1,l=g==="clockwise"?-1:1,v=`${0<t&&t<=100?d*(100/t):0}ms`;return(0,o.jsx)("mask",{id:c,children:(0,o.jsx)("circle",{cx:0,cy:0,r:a,pathLength:"100",fill:"white",stroke:"black",strokeWidth:s,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${n}) scaleY(${l})`},children:(0,o.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:v,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${t/100};1`})})})}const i=r;try{r.displayName="RadialWipeAnimation",r.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:r.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}},"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx"(S,p,e){e.d(p,{R:()=>g});var o=e("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"),a={};a.insert="head",a.singleton=!1;var h=i()(c.A,a);const d=c.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({x:n,y:s,width:l,height:u,children:v})=>(0,t.jsx)("foreignObject",{x:n-l/2,y:s-u/2,width:l,height:u,children:(0,t.jsx)(o.B,{align:"center",justify:"center",className:d["svg-empty-state"],children:v})});try{g.displayName="SvgEmptyState",g.__docgenInfo={description:`Renders empty-state text inside an SVG using foreignObject so that the
message wraps onto multiple lines instead of being clipped.

The component centers the text within the specified area.`,displayName:"SvgEmptyState",props:{x:{defaultValue:null,description:"X coordinate of the center point",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"Y coordinate of the center point",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Available width for the text area",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Available height for the text area",name:"height",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"Text content",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"]={docgenInfo:g.__docgenInfo,name:"SvgEmptyState",path:"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(S,p,e){e.d(p,{f:()=>g});var o=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),c=e("../charts/src/utils/format-percentage.ts");function a(n,s,l="percentage"){if(!s||l==="none")return"";if("percentage"in n)switch(l){case"percentage":return(0,c.E)(n.percentage);case"value":return(0,o.ZV)(n.value);case"valueDisplay":return n.valueDisplay||(0,o.ZV)(n.value);default:return""}return"value"in n&&n.value!==null?(0,o.ZV)(n.value):""}function h(n,s,l,u,v){if(s){const m=l||u;if(m)return{...n,glyphSize:v,renderGlyph:m}}return n}function d(n,s,l,u,v,m,C){const T=(x,j)=>{const{color:f,glyph:E,shapeStyles:M}=s({data:x,index:j,legendShape:C}),w={label:x.label,value:l?x.data?.length?.toString()||"0":"",color:f,shapeStyle:M};return h(w,u,E,m,v)};return n.map(T)}function t(n,s,l,u,v,m,C,T){const x=(j,f)=>{const{color:E,glyph:M,shapeStyles:w}=s({data:j,index:f,legendShape:T}),U={label:j.label,value:a(j,l,u),color:E,shapeStyle:w};return h(U,v,M,C,m)};return n.map(x)}function g(n,s={},l){const{showValues:u=!1,legendValueDisplay:v="percentage",withGlyph:m=!1,glyphSize:C=8,renderGlyph:T}=s,{getElementStyles:x}=(0,i.j)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?d(n,x,u,m,C,T,l):t(n,x,u,v,m,C,T,l),[n,x,u,v,m,C,T,l])}},"../charts/src/components/tooltip/base-tooltip.tsx"(S,p,e){e.d(p,{R:()=>n});var o=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),a={};a.insert="head",a.singleton=!1;var h=i()(c.A,a);const d=c.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({data:s})=>(0,t.jsxs)(t.Fragment,{children:[s?.label,": ",s?.valueDisplay||(0,o.ZV)(s?.value)]}),n=({data:s,top:l,left:u,component:v=g,children:m,className:C,style:T,renderContainer:x=!0})=>{const j=m||s&&(0,t.jsx)(v,{data:s,className:C});return x?(0,t.jsx)("div",{className:d.tooltip,style:{top:l,left:u,...T},role:"tooltip",children:j}):j};try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/hooks/use-data-with-percentages.ts"(S,p,e){e.d(p,{T:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=i=>(0,o.useMemo)(()=>{const c=i.reduce((a,h)=>a+h.value,0);return i.map(a=>({...a,percentage:c>0?a.value/c*100:0}))},[i])},"../charts/src/hooks/use-interactive-legend-data.ts"(S,p,e){e.d(p,{j:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=({data:i,chartId:c,legendInteractive:a,isSeriesVisible:h})=>{const d=(0,o.useMemo)(()=>{if(!c||!a)return i;const n=i.filter(l=>h(c,l.label));if(n.length===0)return[];const s=n.reduce((l,u)=>l+u.value,0);return n.map(l=>({...l,percentage:s>0?l.value/s*100:0}))},[i,c,h,a]),t=(0,o.useMemo)(()=>a&&d.length===0,[a,d]),g=(0,o.useMemo)(()=>{if(!a||!c)return i;const n=new Map(d.map(s=>[s.label,s]));return i.map(s=>h(c,s.label)&&n.get(s.label)||s)},[i,d,a,c,h]);return{visibleData:d,allSegmentsHidden:t,legendData:g}}},"../charts/src/stories/legend-config.tsx"(S,p,e){e.d(p,{D:()=>r,r:()=>o});const o={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function r(i){const{legendPosition:c,legendAlignment:a,legendOrientation:h,legendShape:d,legendInteractive:t,legendItemClassName:g,legendMaxWidth:n,legendTextOverflow:s,legendShapeStyles:l,legendItemStyles:u}=i;if(!(c!==void 0||a!==void 0||h!==void 0||d!==void 0||t!==void 0||g!==void 0||n!==void 0||s!==void 0||l!==void 0||u!==void 0))return;const m={};return h!==void 0&&(m.orientation=h),c!==void 0&&(m.position=c),a!==void 0&&(m.alignment=a),d!==void 0&&(m.shape=d),t!==void 0&&(m.interactive=t),g!==void 0&&(m.itemClassName=g),(n!==void 0||s!==void 0)&&(m.labelStyles={},n!==void 0&&(m.labelStyles.maxWidth=n),s!==void 0&&(m.labelStyles.textOverflow=s)),l!==void 0&&(m.shapeStyles=l),u!==void 0&&(m.itemStyles=u),m}try{r.displayName="extractLegendConfig",r.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:r.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{o.displayName="legendArgTypes",o.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(S,p,e){e.d(p,{E:()=>r});var o=e("../number-formatters/src/index.ts");const r=i=>(0,o.ZV)(i/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(S,p,e){e.d(p,{A:()=>h});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),c=e.n(i),a=c()(r());a.push([S.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.WENq8fKmimSfVshCk2zm{width:100%;height:100%}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),a.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__centering":"WENq8fKmimSfVshCk2zm","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const h=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"(S,p,e){e.d(p,{A:()=>h});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),c=e.n(i),a=c()(r());a.push([S.id,".W96yaSYqyuTgaNOtqtwb{text-align:center;width:100%;height:100%;font-size:var(--wpds-font-size-md, 13px);color:var(--wpds-color-fg-content-neutral-weak, #6d6d6d)}",""]),a.locals={"svg-empty-state":"W96yaSYqyuTgaNOtqtwb"};const h=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"(S,p,e){e.d(p,{A:()=>h});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),c=e.n(i),a=c()(r());a.push([S.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),a.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const h=a}}]);
