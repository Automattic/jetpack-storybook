"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(M,f,e)=>{e.r(f),e.d(f,{CompositionAPI:()=>s,CustomLegendPositioning:()=>b,Default:()=>m,ErrorStates:()=>w,Responsiveness:()=>R,WithCompositionLegend:()=>D,WithLegend:()=>j,WithTooltips:()=>P,__namedExportsOrder:()=>n,default:()=>E});var p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),u=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),v=e("../charts/src/stories/decorator-config.tsx"),_=e("../charts/src/stories/legend-config.tsx"),a=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}],E={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:a.A,parameters:{layout:"centered"},decorators:v.p,argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},..._.r}},m={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:r,label:"OS",note:"Windows +10%",clockwise:!0}},P={args:{...m.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},j={args:{...m.args,showLegend:!0}},D={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(a.A,{width:400,data:r,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(a.A,{width:400,data:r,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(a.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},b={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},O={...m.args,resize:"both"};delete O.width;const R={args:O,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},w={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(a.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(a.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(a.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(a.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},s={render:()=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(a.A,{width:400,data:r,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(a.A.SVG,{children:(0,t.jsxs)(p.A,{children:[(0,t.jsx)(u.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(a.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(a.A,{width:400,data:r,label:"Performance",note:"Latest Results",children:(0,t.jsx)(a.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(a.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(a.A,{width:400,data:r,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(p.A,{children:[(0,t.jsx)(u.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},n=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    containerWidth: '600px',
    containerHeight: '325px',
    resize: 'none',
    thickness: 0.4,
    data,
    label: 'OS',
    note: 'Windows +10%',
    clockwise: true
  }
}`,...m.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...j.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based Legend</h3>
                <PieSemiCircleChart width={400} data={data} label="Performance Metrics" note="Q4 2023 Results" showLegend={true} legendPosition="bottom" legendOrientation="horizontal" />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieSemiCircleChart width={400} data={data} label="Performance Metrics" note="Q4 2023 Results">
                    <PieSemiCircleChart.Legend position="bottom" orientation="horizontal" alignment="center" />
                </PieSemiCircleChart>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    containerWidth: '600px',
    containerHeight: '350px',
    resize: 'none',
    thickness: 0.4,
    data: [{
      label: 'MacOS',
      value: 30000,
      valueDisplay: '30K',
      percentage: 30
    }, {
      label: 'Linux',
      value: 22000,
      valueDisplay: '22K',
      percentage: 22
    }, {
      label: 'Windows',
      value: 48000,
      valueDisplay: '48K',
      percentage: 48
    }],
    label: 'OS',
    note: 'Windows +10%',
    withTooltips: true,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'end',
    legendPosition: 'top',
    legendShape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
                <PieSemiCircleChart width={300} data={[{
        label: 'Single Point',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the semi-circle pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
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
                    <PieSemiCircleChart width={400} data={data} label="OS Usage" note="Q4 2023" withTooltips={true}>
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
                    <PieSemiCircleChart width={400} data={data} label="Performance" note="Latest Results">
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
                <PieSemiCircleChart width={400} data={data} label="Legacy Mode" note="Still works!">
                    <Group>
                        <Text x={0} y={-70} textAnchor="middle" fontSize={12} fill="#999">
                            Direct Group usage
                        </Text>
                        <rect x={-30} y={-85} width={60} height={2} fill="#ddd" />
                    </Group>
                </PieSemiCircleChart>
            </div>
        </div>,
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
}`,...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(M,f,e)=>{e.d(f,{A:()=>w});var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(u),_=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),t=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function r(s,n){s(n)}function G(s){var n=s===void 0?{}:s,d=n.innerRadius,l=n.outerRadius,c=n.cornerRadius,i=n.startAngle,o=n.endAngle,C=n.padAngle,h=n.padRadius,x=(0,a.A)();return d!=null&&r(x.innerRadius,d),l!=null&&r(x.outerRadius,l),c!=null&&r(x.cornerRadius,c),i!=null&&r(x.startAngle,i),o!=null&&r(x.endAngle,o),C!=null&&r(x.padAngle,C),h!=null&&r(x.padRadius,h),x}function E(s){var n=s===void 0?{}:s,d=n.x,l=n.x0,c=n.x1,i=n.y,o=n.y0,C=n.y1,h=n.defined,x=n.curve,S=d3Area();return d&&setNumberOrNumberAccessor(S.x,d),l&&setNumberOrNumberAccessor(S.x0,l),c&&setNumberOrNumberAccessor(S.x1,c),i&&setNumberOrNumberAccessor(S.y,i),o&&setNumberOrNumberAccessor(S.y0,o),C&&setNumberOrNumberAccessor(S.y1,C),h&&S.defined(h),x&&S.curve(x),S}function m(s){var n=s===void 0?{}:s,d=n.x,l=n.y,c=n.defined,i=n.curve,o=d3Line();return d&&setNumberOrNumberAccessor(o.x,d),l&&setNumberOrNumberAccessor(o.y,l),c&&o.defined(c),i&&o.curve(i),o}function P(s){var n=s===void 0?{}:s,d=n.startAngle,l=n.endAngle,c=n.padAngle,i=n.value,o=n.sort,C=n.sortValues,h=(0,t.A)();return(o===null||o!=null)&&h.sort(o),(C===null||C!=null)&&h.sortValues(C),i!=null&&h.value(i),c!=null&&r(h.padAngle,c),d!=null&&r(h.startAngle,d),l!=null&&r(h.endAngle,l),h}function j(s){var n=s===void 0?{}:s,d=n.angle,l=n.radius,c=n.defined,i=n.curve,o=d3RadialLine();return d&&setNumberOrNumberAccessor(o.angle,d),l&&setNumberOrNumberAccessor(o.radius,l),c&&o.defined(c),i&&o.curve(i),o}function D(s){var n=s.keys,d=s.value,l=s.order,c=s.offset,i=d3Stack();return n&&i.keys(n),d&&setNumberOrNumberAccessor(i.value,d),l&&i.order(stackOrder(l)),c&&i.offset(stackOffset(c)),i}var b=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function O(){return O=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var d=arguments[n];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}return s},O.apply(this,arguments)}function R(s,n){if(s==null)return{};var d={},l=Object.keys(s),c,i;for(i=0;i<l.length;i++)c=l[i],!(n.indexOf(c)>=0)&&(d[c]=s[c]);return d}function w(s){var n=s.className,d=s.top,l=s.left,c=s.data,i=c===void 0?[]:c,o=s.centroid,C=s.innerRadius,h=C===void 0?0:C,x=s.outerRadius,S=s.cornerRadius,F=s.startAngle,K=s.endAngle,ne=s.padAngle,Y=s.padRadius,y=s.pieSort,z=s.pieSortValues,T=s.pieValue,L=s.children,N=s.fill,V=N===void 0?"":N,U=R(s,b),k=G({innerRadius:h,outerRadius:x,cornerRadius:S,padRadius:Y}),W=P({startAngle:F,endAngle:K,padAngle:ne,value:T,sort:y,sortValues:z}),X=W(i);return L?p.createElement(p.Fragment,null,L({arcs:X,path:k,pie:W})):p.createElement(_.A,{className:"visx-pie-arcs-group",top:d,left:l},X.map(function(B,$){return p.createElement("g",{key:"pie-arc-"+$},p.createElement("path",O({className:v()("visx-pie-arc",n),d:k(B)||"",fill:V==null||typeof V=="string"?V:V(B)},U)),o?.(k.centroid(B),B))}))}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(M,f,e)=>{e.d(f,{A:()=>Y});var p=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),v=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),_=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),a=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),G=e("../charts/src/hooks/use-global-chart-theme.ts"),E=e("../charts/src/providers/chart-context/utils.ts"),m=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),P=e("../charts/src/utils/create-composition.ts"),j=e("../charts/src/components/legend/legend.tsx"),D=e("../charts/src/components/legend/use-chart-legend-data.ts"),b=e("../charts/src/components/shared/single-chart-context.tsx"),O=e("../charts/src/components/shared/use-element-height.ts"),R=e("../charts/src/components/shared/with-responsive.tsx"),w=e("../charts/src/components/tooltip/base-tooltip.tsx"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var c=n()(d.A,l);const i=d.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=.03,h=y=>y.length?y.some(L=>L.percentage<0||L.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:y.reduce((L,N)=>L+N.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},x=({children:y})=>(0,o.jsx)(o.Fragment,{children:y});x.displayName="PieSemiCircleChart.SVG";const S=({children:y})=>(0,o.jsx)(o.Fragment,{children:y});S.displayName="PieSemiCircleChart.HTML";const F=({data:y,chartId:z,width:T=400,thickness:L=.4,clockwise:N=!0,withTooltips:V=!1,showLegend:U=!1,legendOrientation:k="horizontal",legendPosition:W="bottom",legendAlignment:X="center",legendShape:B="circle",label:$,note:pe,className:me,children:oe})=>{const J=(0,G.u)(),q=(0,E.R)(z),[ue,he]=(0,O.v)(),{tooltipOpen:ge,tooltipLeft:ve,tooltipTop:_e,tooltipData:Q,hideTooltip:re,showTooltip:ae}=(0,a.A)(),ie=(0,r.useCallback)((g,A)=>{const H=(0,p.A)(g);H&&ae({tooltipData:A.data,tooltipLeft:H.x,tooltipTop:H.y-10})},[ae]),xe=(0,r.useCallback)(()=>{re()},[re]),fe=(0,r.useCallback)(g=>A=>{ie(A,g)},[ie]),{isValid:le,message:ye}=h(y),ee=(0,r.useMemo)(()=>({value:g=>g.value,sort:(g,A)=>A.value-g.value,fill:g=>g.color||J.colors[g.index%J.colors.length]}),[J.colors]),Ce=(0,r.useMemo)(()=>({showValues:!0}),[]),de=(0,D.B)(y,Ce),{svgChildren:Se,htmlChildren:Ae,otherChildren:Pe}=(0,r.useMemo)(()=>{const g=[],A=[],H=[];return r.Children.forEach(oe,I=>{if((0,r.isValidElement)(I)){const ce=I.type?.displayName;ce==="PieSemiCircleChart.SVG"?r.Children.forEach(I.props.children,se=>{g.push(se)}):ce==="PieSemiCircleChart.HTML"?r.Children.forEach(I.props.children,se=>{A.push(se)}):I.type===u.A?g.push(I):H.push(I)}}),{svgChildren:g,htmlChildren:A,otherChildren:H}},[oe]),je=(0,r.useMemo)(()=>({thickness:L,clockwise:N}),[L,N]);if((0,E.t)({chartId:q,legendItems:de,chartType:"pie-semi-circle",isDataValid:le,metadata:je}),!le)return(0,o.jsx)("div",{className:i["pie-semi-circle-chart"],children:(0,o.jsx)("svg",{width:T,height:T/2,"data-testid":"pie-chart-svg",children:(0,o.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:i.error,children:ye})})});const te=T/2-(U&&W==="top"?he:0),Z=Math.min(T/2,te),be=Z*(1-L),Te=y.map((g,A)=>({...g,index:A})),Le=N?-Math.PI/2:Math.PI/2,Ee=N?Math.PI/2:-Math.PI/2;return(0,o.jsx)(b.ON.Provider,{value:{chartId:q,chartWidth:T,chartHeight:Z},children:(0,o.jsxs)("div",{className:(0,t.A)("pie-semi-circle-chart",i["pie-semi-circle-chart"],me),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:U&&W==="top"?"column-reverse":"column"},children:[(0,o.jsx)("svg",{width:T,height:Z,viewBox:`0 0 ${T} ${te}`,"data-testid":"pie-chart-svg",children:(0,o.jsxs)(u.A,{top:te,left:T/2,children:[(0,o.jsx)(v.A,{data:Te,pieValue:ee.value,outerRadius:Z,innerRadius:be,cornerRadius:3,padAngle:C,startAngle:Le,endAngle:Ee,pieSort:ee.sort,children:g=>g.arcs.map(A=>(0,o.jsx)("g",{onMouseMove:fe(A),onMouseLeave:xe,children:(0,o.jsx)("path",{d:g.path(A)||"",fill:ee.fill(A.data),"data-testid":"pie-segment"})},A.data.label))}),(0,o.jsxs)(u.A,{children:[(0,o.jsx)(_.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:i.label,children:$}),(0,o.jsx)(_.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:i.note,children:pe})]}),Se]})}),V&&ge&&Q&&(0,o.jsx)(w.R,{data:{label:Q.label,value:Q.value,valueDisplay:Q.valueDisplay},top:_e||0,left:ve||0}),U&&(0,o.jsx)(j.s,{items:de,orientation:k,position:W,alignment:X,shape:B,ref:ue,chartId:q}),Ae,Pe]})})},K=y=>(0,r.useContext)(m.mJ)?(0,o.jsx)(F,{...y}):(0,o.jsx)(m.Sx,{children:(0,o.jsx)(F,{...y})});K.displayName="PieSemiCircleChart";const ne=(0,P.E)(K,{Legend:j.s,SVG:x,HTML:S}),Y=(0,P.E)((0,R.F)(K),{Legend:j.s,SVG:x,HTML:S})},"../charts/src/components/tooltip/base-tooltip.tsx":(M,f,e)=>{e.d(f,{R:()=>E});var p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(p),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),_={};_.insert="head",_.singleton=!1;var a=u()(v.A,_);const t=v.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const G=({data:m})=>(0,r.jsxs)(r.Fragment,{children:[m?.label,": ",m?.valueDisplay||m?.value]}),E=({data:m,top:P,left:j,component:D=G,children:b,className:O})=>(0,r.jsx)("div",{className:t.tooltip,style:{top:P,left:j},role:"tooltip",children:b||m&&(0,r.jsx)(D,{data:m,className:O})});try{E.displayName="BaseTooltip",E.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:E.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(M,f,e)=>{e.d(f,{p:()=>v});var p=e("../charts/src/providers/theme/theme-provider.tsx"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=[(_,{args:a})=>(0,u.jsx)(p.N,{theme:a.theme,children:(0,u.jsx)("div",{style:{resize:a.resize??"both",overflow:"auto",padding:"1rem",width:a.containerWidth??"800px",height:a.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,u.jsx)(_,{})})})];try{v.displayName="sharedDecorator",v.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:v.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(M,f,e)=>{e.d(f,{r:()=>p});const p={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{p.displayName="legendArgTypes",p.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(M,f,e)=>{e.d(f,{A:()=>t});var p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(p),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(v),a=_()(u());a.push([M.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),a.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const t=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(M,f,e)=>{e.d(f,{A:()=>t});var p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(p),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(v),a=_()(u());a.push([M.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),a.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const t=a}}]);
