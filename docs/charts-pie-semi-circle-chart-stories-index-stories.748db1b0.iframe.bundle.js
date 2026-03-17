"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx"(T,u,e){e.r(u),e.d(u,{Animation:()=>c,CompositionAPI:()=>v,Default:()=>s,ErrorStates:()=>C,FixedDimensions:()=>o,WithCompositionLegend:()=>S,WithLegend:()=>m,WithTooltips:()=>f,__namedExportsOrder:()=>A,default:()=>n});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../charts/src/stories/chart-decorator.tsx"),h=e("../charts/src/stories/theme-config.tsx"),d=e("../charts/src/stories/legend-config.tsx"),g=e("../charts/src/stories/sample-data/index.ts"),l=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:l.A,parameters:{layout:"centered"},decorators:[i.OI],argTypes:{...i.xo,...h.jW,...d.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}},render:_=>{const b=(0,d.D)(_);return(0,t.jsx)(l.A,{..._,legend:b})}},s={args:{...h.In,thickness:.4,data:g.f2,label:"OS",note:"Windows +10%",clockwise:!0},parameters:{docs:{description:{story:"Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio."}}}},o={render:_=>(0,t.jsx)(l.A,{width:_.width,data:_.data,label:_.label,note:_.note,thickness:_.thickness,clockwise:_.clockwise,height:_.height}),args:{...s.args,resize:"none",width:600,height:300},parameters:{docs:{description:{story:"Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions."}}}},c={args:{...s.args,animation:!0}},f={args:{...s.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},m={args:{...s.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},S={render:_=>{const b=(0,d.D)(_);return(0,t.jsx)(l.A,{...s.args,..._,legend:{interactive:b?.interactive},chartId:"composition-semi-circle-chart",children:(0,t.jsx)(l.A.Legend,{...b})})},args:{data:g.f2},parameters:{docs:{description:{story:"Composition API using `<PieSemiCircleChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},C={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(l.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(l.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(l.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(l.A,{height:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),args:{containerHeight:600},parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},v={render:_=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(l.A,{height:300,data:_.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(l.A.SVG,{children:(0,t.jsxs)(a.A,{children:[(0,t.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(l.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(l.A,{height:300,data:_.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(l.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(l.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(l.A,{height:200,data:_.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(a.A,{children:[(0,t.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:g.f2,containerHeight:"1000px",containerWidth:"1000px"},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},A=["Default","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","ErrorStates","CompositionAPI"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...c.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(T,u,e){e.d(u,{A:()=>Se});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),i=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),d=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@6.14.0/node_modules/@wordpress/i18n/build-module/index.mjs"),l=e("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),s=e("../charts/src/components/legend/legend.tsx"),o=e("../charts/src/components/tooltip/base-tooltip.tsx"),c=e("../charts/src/hooks/use-interactive-legend-data.ts"),f=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),m=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),S=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),C=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),v=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),A=e("../charts/src/utils/create-composition.ts"),_=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),b=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),O=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),R=e("../charts/src/charts/private/chart-layout/chart-layout.tsx"),K=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),pe=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),he=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),ue=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ge=e.n(ue),X=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),U={};U.insert="head",U.singleton=!1;var et=ge()(X.A,U);const M=X.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _e=g.__,fe=({tooltipData:j})=>(0,p.jsx)(o.R,{data:j,top:0,left:0,renderContainer:!1}),xe=.03,ve=400,ye=j=>j.length?j.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:j.reduce((E,V)=>E+V.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},$=({data:j,chartId:z,width:I,height:E,thickness:V=.4,clockwise:W=!0,withTooltips:F=!1,showLegend:Ce=!1,legend:L={},legendValueDisplay:J="percentage",label:Te,animation:Ae,note:Pe,className:je,children:be,tooltipOffsetX:q=0,tooltipOffsetY:ee=-15,renderTooltip:Ee=fe,gap:Le="md"})=>{const te=L.interactive??!1,ne=L.position??"bottom",w=(0,m.R)(z),{tooltipOpen:De,tooltipLeft:Me,tooltipTop:Oe,tooltipData:se,hideTooltip:ae,showTooltip:re}=(0,h.A)(),{containerRef:we,TooltipInPortal:Re,containerBounds:D}=(0,d.A)({detectBounds:!0,scroll:!0,debounce:0}),oe=(0,x.useCallback)((y,P)=>{D.width===0||D.height===0||re({tooltipData:P.data,tooltipLeft:y.clientX-D.left+q,tooltipTop:y.clientY-D.top+ee})},[D.width,D.height,D.left,D.top,re,q,ee]),Ie=(0,x.useCallback)(()=>{ae()},[ae]),Ve=(0,x.useCallback)(y=>P=>{oe(P,y)},[oe]),{isValid:ie,message:We}=ye(j),{getElementStyles:le,isSeriesVisible:Ge}=(0,S.j)(),{visibleData:Be,allSegmentsHidden:de,legendData:ke}=(0,c.j)({data:j,chartId:w,legendInteractive:te,isSeriesVisible:Ge}),Y=(0,x.useMemo)(()=>({value:y=>y.value,sort:(y,P)=>P.value-y.value,fill:y=>le({data:y,index:y.index}).color}),[le]),He=(0,x.useMemo)(()=>({showValues:!0,legendValueDisplay:J}),[J]),Ke=(0,n.f)(ke,He),{svgChildren:Ue,htmlChildren:Ne,legendChildren:ze,otherChildren:Fe}=(0,_.n)(be,"PieSemiCircleChart"),Ye=(0,x.useMemo)(()=>({thickness:V,clockwise:W}),[V,W]);(0,C.t)({chartId:w,legendItems:Ke,chartType:"pie-semi-circle",isDataValid:ie,metadata:Ye});const Ze=(0,f.j)(),Z=I||ve;if(!ie){const y=E?Math.min(I||E*2,E*2):Z,P=y/2;return(0,p.jsx)("div",{className:M["pie-semi-circle-chart"],children:(0,p.jsx)("svg",{width:y,height:P,"data-testid":"pie-chart-svg",children:(0,p.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:M.error,children:We})})})}const Qe=Be.map(y=>{const P=j.findIndex(Q=>Q.label===y.label);return{...y,index:P>=0?P:0}}),Xe=W?-Math.PI/2:Math.PI/2,$e=W?Math.PI/2:-Math.PI/2,Je=Ce&&(0,p.jsx)(s.s,{orientation:L.orientation??"horizontal",position:ne,alignment:L.alignment??"center",labelStyles:L.labelStyles,itemClassName:L.itemClassName,itemStyles:L.itemStyles,shapeStyles:L.shapeStyles,shape:L.shape??"circle",chartId:w,interactive:te});return(0,p.jsx)(pe.O.Provider,{value:{chartId:w},children:(0,p.jsx)(R.R,{ref:we,legendPosition:ne,legendElement:Je,legendChildren:ze,gap:Le,className:(0,t.A)("pie-semi-circle-chart",M["pie-semi-circle-chart"],{[M["pie-semi-circle-chart--responsive"]]:!I&&!E},je),style:{width:I||void 0,height:E||void 0},"data-testid":"pie-chart-container",trailingContent:(0,p.jsxs)(p.Fragment,{children:[F&&De&&se&&(0,p.jsx)(Re,{top:Oe||0,left:Me||0,children:(0,p.jsx)("div",{role:"tooltip",children:Ee({tooltipData:se})})}),Ne,Fe]}),children:({contentWidth:y,contentHeight:P})=>{const Q=y>0?y:Z,qe=P>0?P:E||Z/2,G=Math.min(Q,qe*2),B=G/2,k=B,ce=k*(1-V);return(0,p.jsx)(l.B,{align:"center",justify:"center",className:M["pie-semi-circle-chart__centering"],children:(0,p.jsxs)("svg",{width:G,height:B,viewBox:`0 0 ${G} ${B}`,"data-testid":"pie-chart-svg",children:[(0,p.jsx)("defs",{children:(0,p.jsx)(K.A,{id:`radial-wipe-${w}`,radius:k,innerRadius:ce,startAngle:"-180deg",wipePercentage:50})}),(0,p.jsx)(a.A,{top:B,left:G/2,mask:Ae&&!Ze?`url(#radial-wipe-${w})`:null,children:de?(0,p.jsx)("text",{textAnchor:"middle",y:-k/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:_e("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.A,{data:Qe,pieValue:Y.value,outerRadius:k,innerRadius:ce,cornerRadius:3,padAngle:xe,startAngle:Xe,endAngle:$e,pieSort:Y.sort,children:me=>me.arcs.map(H=>(0,p.jsx)("g",{onMouseMove:F?Ve(H):void 0,onMouseLeave:F?Ie:void 0,children:(0,p.jsx)("path",{d:me.path(H)||"",fill:Y.fill(H.data),"data-testid":"pie-segment"})},H.data.label))}),(0,p.jsxs)(a.A,{children:[(0,p.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:M.label,children:Te}),(0,p.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:M.note,children:Pe})]}),!de&&Ue]})})]})})}})})},N=j=>(0,x.useContext)(v.m)?(0,p.jsx)($,{...j}):(0,p.jsx)(v.S,{children:(0,p.jsx)($,{...j})});N.displayName="PieSemiCircleChart";const tt=(0,A.E)(N,{Legend:s.s,SVG:b.d,HTML:O.a}),Se=(0,A.E)((0,he.F)(N),{Legend:s.s,SVG:b.d,HTML:O.a})},"../charts/src/charts/private/chart-composition/chart-html.tsx"(T,u,e){e.d(u,{a:()=>r});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:i})=>(0,a.jsx)(a.Fragment,{children:i});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/charts/private/chart-composition/chart-svg.tsx"(T,u,e){e.d(u,{d:()=>r});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:i})=>(0,a.jsx)(a.Fragment,{children:i});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"(T,u,e){e.d(u,{A:()=>i});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({id:h,radius:d,innerRadius:g=0,durationMs:l=1e3,wipePercentage:t=100,direction:x="clockwise",startAngle:n="-90deg"}){const s=(d-g)*2+1,o=x==="clockwise"?-1:1,f=`${0<t&&t<=100?l*(100/t):0}ms`;return(0,a.jsx)("mask",{id:h,children:(0,a.jsx)("circle",{cx:0,cy:0,r:d,pathLength:"100",fill:"white",stroke:"black",strokeWidth:s,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${n}) scaleY(${o})`},children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:f,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${t/100};1`})})})}const i=r;try{r.displayName="RadialWipeAnimation",r.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:r.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(T,u,e){e.d(u,{f:()=>x});var a=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),h=e("../charts/src/utils/format-percentage.ts");function d(n,s,o="percentage"){if(!s||o==="none")return"";if("percentage"in n){const c=n;switch(o){case"percentage":return(0,h.E)(c.percentage);case"value":return(0,a.ZV)(c.value);case"valueDisplay":return c.valueDisplay||(0,a.ZV)(c.value);default:return""}}return"value"in n&&n.value!==null?(0,a.ZV)(n.value):""}function g(n,s,o,c,f){if(s){const m=o||c;if(m)return{...n,glyphSize:f,renderGlyph:m}}return n}function l(n,s,o,c,f,m,S){const C=(v,A)=>{const{color:_,glyph:b,shapeStyles:O}=s({data:v,index:A,legendShape:S}),R={label:v.label,value:o?v.data?.length?.toString()||"0":"",color:_,shapeStyle:O};return g(R,c,b,m,f)};return n.map(C)}function t(n,s,o,c,f,m,S,C){const v=(A,_)=>{const{color:b,glyph:O,shapeStyles:R}=s({data:A,index:_,legendShape:C}),K={label:A.label,value:d(A,o,c),color:b,shapeStyle:R};return g(K,f,O,S,m)};return n.map(v)}function x(n,s={},o){const{showValues:c=!1,legendValueDisplay:f="percentage",withGlyph:m=!1,glyphSize:S=8,renderGlyph:C}=s,{getElementStyles:v}=(0,i.j)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?l(n,v,c,m,S,C,o):t(n,v,c,f,m,S,C,o),[n,v,c,f,m,S,C,o])}},"../charts/src/components/tooltip/base-tooltip.tsx"(T,u,e){e.d(u,{R:()=>n});var a=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),d={};d.insert="head",d.singleton=!1;var g=i()(h.A,d);const l=h.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=({data:s})=>(0,t.jsxs)(t.Fragment,{children:[s?.label,": ",s?.valueDisplay||(0,a.ZV)(s?.value)]}),n=({data:s,top:o,left:c,component:f=x,children:m,className:S,style:C,renderContainer:v=!0})=>{const A=m||s&&(0,t.jsx)(f,{data:s,className:S});return v?(0,t.jsx)("div",{className:l.tooltip,style:{top:o,left:c,...C},role:"tooltip",children:A}):A};try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/hooks/use-interactive-legend-data.ts"(T,u,e){e.d(u,{j:()=>r});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=({data:i,chartId:h,legendInteractive:d,isSeriesVisible:g})=>{const l=(0,a.useMemo)(()=>{if(!h||!d)return i;const n=i.filter(o=>g(h,o.label));if(n.length===0)return[];const s=n.reduce((o,c)=>o+c.value,0);return n.map(o=>({...o,percentage:s>0?o.value/s*100:0}))},[i,h,g,d]),t=(0,a.useMemo)(()=>d&&l.length===0,[d,l]),x=(0,a.useMemo)(()=>!d||!h?i:i.map(n=>g(h,n.label)&&l.find(c=>c.label===n.label)||n),[i,l,d,h,g]);return{visibleData:l,allSegmentsHidden:t,legendData:x}}},"../charts/src/stories/legend-config.tsx"(T,u,e){e.d(u,{D:()=>r,r:()=>a});const a={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function r(i){const{legendPosition:h,legendAlignment:d,legendOrientation:g,legendShape:l,legendInteractive:t,legendItemClassName:x,legendMaxWidth:n,legendTextOverflow:s,legendShapeStyles:o,legendItemStyles:c}=i;if(!(h!==void 0||d!==void 0||g!==void 0||l!==void 0||t!==void 0||x!==void 0||n!==void 0||s!==void 0||o!==void 0||c!==void 0))return;const m={};return g!==void 0&&(m.orientation=g),h!==void 0&&(m.position=h),d!==void 0&&(m.alignment=d),l!==void 0&&(m.shape=l),t!==void 0&&(m.interactive=t),x!==void 0&&(m.itemClassName=x),(n!==void 0||s!==void 0)&&(m.labelStyles={},n!==void 0&&(m.labelStyles.maxWidth=n),s!==void 0&&(m.labelStyles.textOverflow=s)),o!==void 0&&(m.shapeStyles=o),c!==void 0&&(m.itemStyles=c),m}try{r.displayName="extractLegendConfig",r.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:r.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{a.displayName="legendArgTypes",a.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(T,u,e){e.d(u,{E:()=>r});var a=e("../number-formatters/src/index.ts");const r=i=>(0,a.ZV)(i/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(T,u,e){e.d(u,{A:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),h=e.n(i),d=h()(r());d.push([T.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.WENq8fKmimSfVshCk2zm{width:100%;height:100%}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),d.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__centering":"WENq8fKmimSfVshCk2zm","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const g=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"(T,u,e){e.d(u,{A:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),h=e.n(i),d=h()(r());d.push([T.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),d.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const g=d}}]);
