"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx"(T,h,e){e.r(h),e.d(h,{Animation:()=>c,CompositionAPI:()=>v,Default:()=>n,ErrorStates:()=>C,FixedDimensions:()=>i,WithCompositionLegend:()=>S,WithLegend:()=>p,WithTooltips:()=>f,__namedExportsOrder:()=>j,default:()=>s});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=e("../charts/src/stories/chart-decorator.tsx"),m=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/legend-config.tsx"),_=e("../charts/src/stories/sample-data/index.ts"),d=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:d.A,parameters:{layout:"centered"},decorators:[l.OI],argTypes:{...l.xo,...m.jW,...a.r,legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}},render:y=>{const E=(0,a.D)(y);return(0,t.jsx)(d.A,{...y,legend:E})}},n={args:{...m.In,thickness:.4,data:_.f2,label:"OS",note:"Windows +10%",clockwise:!0},parameters:{docs:{description:{story:"Responsive semi-circle pie chart. Resize the dashed container to see the chart adapt while maintaining a 2:1 width-to-height ratio."}}}},i={render:y=>(0,t.jsx)(d.A,{width:y.width,data:y.data,label:y.label,note:y.note,thickness:y.thickness,clockwise:y.clockwise,height:y.height}),args:{...n.args,resize:"none",width:600,height:300},parameters:{docs:{description:{story:"Semi-circle pie chart with fixed pixel dimensions. The chart will maintain a 2:1 width-to-height ratio within the provided dimensions."}}}},c={args:{...n.args,animation:!0}},f={args:{...n.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},p={args:{...n.args,showLegend:!0},parameters:{docs:{description:{story:"Props-based legend using `showLegend` and the `legend` config object. Use Storybook controls to adjust legend position, alignment, orientation, shape, and interactivity."}}}},S={render:y=>{const E=(0,a.D)(y);return(0,t.jsx)(d.A,{...n.args,...y,legend:{interactive:E?.interactive},chartId:"composition-semi-circle-chart",children:(0,t.jsx)(d.A.Legend,{...E})})},args:{data:_.f2},parameters:{docs:{description:{story:"Composition API using `<PieSemiCircleChart.Legend />` as a child component for explicit legend placement and configuration. This is the recommended approach for flexible legend positioning."}}}},C={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(d.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(d.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(d.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(d.A,{height:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),args:{containerHeight:600},parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},v={render:y=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(d.A,{height:300,data:y.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(d.A.SVG,{children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(d.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(d.A,{height:300,data:y.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(d.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(d.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(d.A,{height:200,data:y.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:_.f2,containerHeight:"1000px",containerWidth:"1000px"},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},j=["Default","FixedDimensions","Animation","WithTooltips","WithLegend","WithCompositionLegend","ErrorStates","CompositionAPI"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(T,h,e){e.d(h,{A:()=>Ce});var o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),l=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),m=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),a=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),_=e("../../../node_modules/.pnpm/@wordpress+i18n@6.14.0/node_modules/@wordpress/i18n/build-module/index.mjs"),d=e("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),n=e("../charts/src/components/legend/legend.tsx"),i=e("../charts/src/components/tooltip/base-tooltip.tsx"),c=e("../charts/src/hooks/use-interactive-legend-data.ts"),f=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),p=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),S=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),C=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),v=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),j=e("../charts/src/utils/create-composition.ts"),y=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),E=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),M=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),R=e("../charts/src/charts/private/chart-layout/chart-layout.tsx"),U=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),me=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),he=e("../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx"),ue=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),_e=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ge=e.n(_e),Q=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),N={};N.insert="head",N.singleton=!1;var tt=ge()(Q.A,N);const O=Q.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const fe=_.__,ye=({tooltipData:P})=>(0,u.jsx)(i.R,{data:P,top:0,left:0,renderContainer:!1}),ve=.03,xe=400,Se=P=>P.length?P.some(b=>b.percentage<0||b.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:P.reduce((b,V)=>b+V.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},$=({data:P,chartId:z,width:I,height:b,thickness:V=.4,clockwise:B=!0,withTooltips:F=!1,showLegend:Te=!1,legend:L={},legendValueDisplay:J="percentage",label:je,animation:Ae,note:Pe,className:Ee,children:be,tooltipOffsetX:q=0,tooltipOffsetY:ee=-15,renderTooltip:Le=ye,gap:De="md"})=>{const te=L.interactive??!1,se=L.position??"bottom",w=(0,p.R)(z),{tooltipOpen:Oe,tooltipLeft:Me,tooltipTop:we,tooltipData:ne,hideTooltip:ae,showTooltip:oe}=(0,m.A)(),{containerRef:Re,TooltipInPortal:Ie,containerBounds:D}=(0,a.A)({detectBounds:!0,scroll:!0,debounce:0}),re=(0,g.useCallback)((x,A)=>{D.width===0||D.height===0||oe({tooltipData:A.data,tooltipLeft:x.clientX-D.left+q,tooltipTop:x.clientY-D.top+ee})},[D.width,D.height,D.left,D.top,oe,q,ee]),Ve=(0,g.useCallback)(()=>{ae()},[ae]),We=(0,g.useCallback)(x=>A=>{re(A,x)},[re]),{isValid:ie,message:Ge}=Se(P),{getElementStyles:le,isSeriesVisible:Be}=(0,S.j)(),{visibleData:ke,allSegmentsHidden:de,legendData:Ke}=(0,c.j)({data:P,chartId:w,legendInteractive:te,isSeriesVisible:Be}),Y=(0,g.useMemo)(()=>({value:x=>x.value,sort:(x,A)=>A.value-x.value,fill:x=>le({data:x,index:x.index}).color}),[le]),Ue=(0,g.useMemo)(()=>({showValues:!0,legendValueDisplay:J}),[J]),Ne=(0,s.f)(Ke,Ue),{svgChildren:He,htmlChildren:ze,legendChildren:Fe,otherChildren:Ye}=(0,y.n)(be,"PieSemiCircleChart"),Ze=(0,g.useMemo)(()=>({thickness:V,clockwise:B}),[V,B]);(0,C.t)({chartId:w,legendItems:Ne,chartType:"pie-semi-circle",isDataValid:ie,metadata:Ze});const Xe=(0,f.j)(),Z=I||xe;if(!ie){const x=b?Math.min(I||b*2,b*2):Z,A=x/2;return(0,u.jsx)("div",{className:O["pie-semi-circle-chart"],children:(0,u.jsx)("svg",{width:x,height:A,"data-testid":"pie-chart-svg",children:(0,u.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:O.error,children:Ge})})})}const Qe=ke.map(x=>{const A=P.findIndex(X=>X.label===x.label);return{...x,index:A>=0?A:0}}),$e=B?-Math.PI/2:Math.PI/2,Je=B?Math.PI/2:-Math.PI/2,qe=Te&&(0,u.jsx)(n.s,{orientation:L.orientation??"horizontal",position:se,alignment:L.alignment??"center",labelStyles:L.labelStyles,itemClassName:L.itemClassName,itemStyles:L.itemStyles,shapeStyles:L.shapeStyles,shape:L.shape??"circle",chartId:w,interactive:te});return(0,u.jsx)(me.O.Provider,{value:{chartId:w},children:(0,u.jsx)(R.R,{legendPosition:se,legendElement:qe,legendChildren:Fe,gap:De,className:(0,t.A)("pie-semi-circle-chart",O["pie-semi-circle-chart"],{[O["pie-semi-circle-chart--responsive"]]:!I&&!b},Ee),style:{width:I||void 0,height:b||void 0},"data-testid":"pie-chart-container",trailingContent:(0,u.jsxs)(u.Fragment,{children:[F&&Oe&&ne&&(0,u.jsx)(Ie,{top:we||0,left:Me||0,children:(0,u.jsx)("div",{role:"tooltip",children:Le({tooltipData:ne})})}),ze,Ye]}),children:({contentWidth:x,contentHeight:A})=>{const X=x>0?x:Z,et=A>0?A:b||Z/2,W=Math.min(X,et*2),G=W/2,k=G,ce=k*(1-V);return(0,u.jsx)(d.B,{ref:Re,align:"center",justify:"center",className:O["pie-semi-circle-chart__centering"],children:(0,u.jsxs)("svg",{width:W,height:G,viewBox:`0 0 ${W} ${G}`,"data-testid":"pie-chart-svg",children:[(0,u.jsx)("defs",{children:(0,u.jsx)(U.A,{id:`radial-wipe-${w}`,radius:k,innerRadius:ce,startAngle:"-180deg",wipePercentage:50})}),(0,u.jsx)(o.A,{top:G,left:W/2,mask:Ae&&!Xe?`url(#radial-wipe-${w})`:null,children:de?(0,u.jsx)(he.R,{x:0,y:-k/2,width:W,height:G,children:fe("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.A,{data:Qe,pieValue:Y.value,outerRadius:k,innerRadius:ce,cornerRadius:3,padAngle:ve,startAngle:$e,endAngle:Je,pieSort:Y.sort,children:pe=>pe.arcs.map(K=>(0,u.jsx)("g",{onMouseMove:F?We(K):void 0,onMouseLeave:F?Ve:void 0,children:(0,u.jsx)("path",{d:pe.path(K)||"",fill:Y.fill(K.data),"data-testid":"pie-segment"})},K.data.label))}),(0,u.jsxs)(o.A,{children:[(0,u.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:O.label,children:je}),(0,u.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:O.note,children:Pe})]}),!de&&He]})})]})})}})})},H=P=>(0,g.useContext)(v.m)?(0,u.jsx)($,{...P}):(0,u.jsx)(v.S,{children:(0,u.jsx)($,{...P})});H.displayName="PieSemiCircleChart";const st=(0,j.E)(H,{Legend:n.s,SVG:E.d,HTML:M.a}),Ce=(0,j.E)((0,ue.F)(H),{Legend:n.s,SVG:E.d,HTML:M.a})},"../charts/src/charts/private/chart-composition/chart-html.tsx"(T,h,e){e.d(h,{a:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:l})=>(0,o.jsx)(o.Fragment,{children:l});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/charts/private/chart-composition/chart-svg.tsx"(T,h,e){e.d(h,{d:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:l})=>(0,o.jsx)(o.Fragment,{children:l});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"(T,h,e){e.d(h,{A:()=>l});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({id:m,radius:a,innerRadius:_=0,durationMs:d=1e3,wipePercentage:t=100,direction:g="clockwise",startAngle:s="-90deg"}){const n=(a-_)*2+1,i=g==="clockwise"?-1:1,f=`${0<t&&t<=100?d*(100/t):0}ms`;return(0,o.jsx)("mask",{id:m,children:(0,o.jsx)("circle",{cx:0,cy:0,r:a,pathLength:"100",fill:"white",stroke:"black",strokeWidth:n,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${s}) scaleY(${i})`},children:(0,o.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:f,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${t/100};1`})})})}const l=r;try{r.displayName="RadialWipeAnimation",r.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:r.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}},"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx"(T,h,e){e.d(h,{R:()=>g});var o=e("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"),a={};a.insert="head",a.singleton=!1;var _=l()(m.A,a);const d=m.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({x:s,y:n,width:i,height:c,children:f})=>(0,t.jsx)("foreignObject",{x:s-i/2,y:n-c/2,width:i,height:c,children:(0,t.jsx)(o.B,{align:"center",justify:"center",className:d["svg-empty-state"],children:f})});try{g.displayName="SvgEmptyState",g.__docgenInfo={description:`Renders empty-state text inside an SVG using foreignObject so that the
message wraps onto multiple lines instead of being clipped.

The component centers the text within the specified area.`,displayName:"SvgEmptyState",props:{x:{defaultValue:null,description:"X coordinate of the center point",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"Y coordinate of the center point",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Available width for the text area",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Available height for the text area",name:"height",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"Text content",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"]={docgenInfo:g.__docgenInfo,name:"SvgEmptyState",path:"../charts/src/charts/private/svg-empty-state/svg-empty-state.tsx#SvgEmptyState"})}catch{}},"../charts/src/components/legend/hooks/use-chart-legend-items.ts"(T,h,e){e.d(h,{f:()=>g});var o=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),m=e("../charts/src/utils/format-percentage.ts");function a(s,n,i="percentage"){if(!n||i==="none")return"";if("percentage"in s){const c=s;switch(i){case"percentage":return(0,m.E)(c.percentage);case"value":return(0,o.ZV)(c.value);case"valueDisplay":return c.valueDisplay||(0,o.ZV)(c.value);default:return""}}return"value"in s&&s.value!==null?(0,o.ZV)(s.value):""}function _(s,n,i,c,f){if(n){const p=i||c;if(p)return{...s,glyphSize:f,renderGlyph:p}}return s}function d(s,n,i,c,f,p,S){const C=(v,j)=>{const{color:y,glyph:E,shapeStyles:M}=n({data:v,index:j,legendShape:S}),R={label:v.label,value:i?v.data?.length?.toString()||"0":"",color:y,shapeStyle:M};return _(R,c,E,p,f)};return s.map(C)}function t(s,n,i,c,f,p,S,C){const v=(j,y)=>{const{color:E,glyph:M,shapeStyles:R}=n({data:j,index:y,legendShape:C}),U={label:j.label,value:a(j,i,c),color:E,shapeStyle:R};return _(U,f,M,S,p)};return s.map(v)}function g(s,n={},i){const{showValues:c=!1,legendValueDisplay:f="percentage",withGlyph:p=!1,glyphSize:S=8,renderGlyph:C}=n,{getElementStyles:v}=(0,l.j)();return(0,r.useMemo)(()=>!s||!Array.isArray(s)||s.length===0?[]:"data"in s[0]?d(s,v,c,p,S,C,i):t(s,v,c,f,p,S,C,i),[s,v,c,f,p,S,C,i])}},"../charts/src/components/tooltip/base-tooltip.tsx"(T,h,e){e.d(h,{R:()=>s});var o=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),a={};a.insert="head",a.singleton=!1;var _=l()(m.A,a);const d=m.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({data:n})=>(0,t.jsxs)(t.Fragment,{children:[n?.label,": ",n?.valueDisplay||(0,o.ZV)(n?.value)]}),s=({data:n,top:i,left:c,component:f=g,children:p,className:S,style:C,renderContainer:v=!0})=>{const j=p||n&&(0,t.jsx)(f,{data:n,className:S});return v?(0,t.jsx)("div",{className:d.tooltip,style:{top:i,left:c,...C},role:"tooltip",children:j}):j};try{s.displayName="BaseTooltip",s.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:s.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/hooks/use-interactive-legend-data.ts"(T,h,e){e.d(h,{j:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=({data:l,chartId:m,legendInteractive:a,isSeriesVisible:_})=>{const d=(0,o.useMemo)(()=>{if(!m||!a)return l;const s=l.filter(i=>_(m,i.label));if(s.length===0)return[];const n=s.reduce((i,c)=>i+c.value,0);return s.map(i=>({...i,percentage:n>0?i.value/n*100:0}))},[l,m,_,a]),t=(0,o.useMemo)(()=>a&&d.length===0,[a,d]),g=(0,o.useMemo)(()=>!a||!m?l:l.map(s=>_(m,s.label)&&d.find(c=>c.label===s.label)||s),[l,d,a,m,_]);return{visibleData:d,allSegmentsHidden:t,legendData:g}}},"../charts/src/stories/legend-config.tsx"(T,h,e){e.d(h,{D:()=>r,r:()=>o});const o={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for individual legend items. This allows consumers to customize legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."},legendShapeStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:"{ width?: number; height?: number; margin?: string | number }"}},description:"Styles for legend shapes (width, height, margin)."},legendItemStyles:{control:{type:"object"},table:{category:"Legend",type:{summary:'{ margin?: string | number; flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" }'}},description:"Styles for each legend item (margin, flexDirection)."}};function r(l){const{legendPosition:m,legendAlignment:a,legendOrientation:_,legendShape:d,legendInteractive:t,legendItemClassName:g,legendMaxWidth:s,legendTextOverflow:n,legendShapeStyles:i,legendItemStyles:c}=l;if(!(m!==void 0||a!==void 0||_!==void 0||d!==void 0||t!==void 0||g!==void 0||s!==void 0||n!==void 0||i!==void 0||c!==void 0))return;const p={};return _!==void 0&&(p.orientation=_),m!==void 0&&(p.position=m),a!==void 0&&(p.alignment=a),d!==void 0&&(p.shape=d),t!==void 0&&(p.interactive=t),g!==void 0&&(p.itemClassName=g),(s!==void 0||n!==void 0)&&(p.labelStyles={},s!==void 0&&(p.labelStyles.maxWidth=s),n!==void 0&&(p.labelStyles.textOverflow=n)),i!==void 0&&(p.shapeStyles=i),c!==void 0&&(p.itemStyles=c),p}try{r.displayName="extractLegendConfig",r.__docgenInfo={description:"Extracts flat legend story args into a `ChartLegendConfig` object.\nUse in story render functions to bridge flat Storybook controls to the nested `legend` prop.",displayName:"extractLegendConfig",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#extractLegendConfig"]={docgenInfo:r.__docgenInfo,name:"extractLegendConfig",path:"../charts/src/stories/legend-config.tsx#extractLegendConfig"})}catch{}try{o.displayName="legendArgTypes",o.__docgenInfo={description:"Shared legend configuration for chart stories.\nProvides consistent argTypes and decorators across all chart legend stories.\n\nThese use flat keys for reliable Storybook controls. Use `extractLegendConfig`\nin render functions to map them to the nested `legend` prop.",displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/utils/format-percentage.ts"(T,h,e){e.d(h,{E:()=>r});var o=e("../number-formatters/src/index.ts");const r=l=>(0,o.ZV)(l/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(T,h,e){e.d(h,{A:()=>_});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(l),a=m()(r());a.push([T.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.WENq8fKmimSfVshCk2zm{width:100%;height:100%}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),a.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__centering":"WENq8fKmimSfVshCk2zm","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const _=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/svg-empty-state/svg-empty-state.module.scss"(T,h,e){e.d(h,{A:()=>_});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(l),a=m()(r());a.push([T.id,".W96yaSYqyuTgaNOtqtwb{text-align:center;width:100%;height:100%;font-size:var(--wpds-font-size-md, 13px);color:var(--wpds-color-fg-content-neutral-weak, #6d6d6d)}",""]),a.locals={"svg-empty-state":"W96yaSYqyuTgaNOtqtwb"};const _=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"(T,h,e){e.d(h,{A:()=>_});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),m=e.n(l),a=m()(r());a.push([T.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),a.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const _=a}}]);
