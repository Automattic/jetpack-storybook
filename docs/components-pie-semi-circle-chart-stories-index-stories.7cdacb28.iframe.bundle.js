"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(j,_,e)=>{e.r(_),e.d(_,{CompositionAPI:()=>s,CustomLegendPositioning:()=>E,Default:()=>v,ErrorStates:()=>G,Responsiveness:()=>w,WithCompositionLegend:()=>R,WithLegend:()=>S,WithTooltips:()=>C,__namedExportsOrder:()=>n,default:()=>f});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../charts/src/stories/decorator-config.tsx"),x=e("../charts/src/stories/legend-config.tsx"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:5},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:1},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:2}],f={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:o.A,parameters:{layout:"centered"},decorators:h.p,argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...x.r}},v={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:a,label:"OS",note:"Windows +10%",clockwise:!0}},C={args:{...v.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},S={args:{...v.args,showLegend:!0}},R={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(o.A,{width:400,data:a,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(o.A,{width:400,data:a,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(o.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},E={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},O={...v.args,resize:"both"};delete O.width;const w={args:O,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},G={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},s={render:()=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(o.A,{width:400,data:a,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(o.A.SVG,{children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(o.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(o.A,{width:400,data:a,label:"Performance",note:"Latest Results",children:(0,t.jsx)(o.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(o.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(o.A,{width:400,data:a,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},n=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...S.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(j,_,e)=>{e.d(_,{A:()=>G});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=e.n(r),x=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),t=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function a(s,n){s(n)}function I(s){var n=s===void 0?{}:s,p=n.innerRadius,m=n.outerRadius,u=n.cornerRadius,d=n.startAngle,c=n.endAngle,A=n.padAngle,g=n.padRadius,i=(0,o.A)();return p!=null&&a(i.innerRadius,p),m!=null&&a(i.outerRadius,m),u!=null&&a(i.cornerRadius,u),d!=null&&a(i.startAngle,d),c!=null&&a(i.endAngle,c),A!=null&&a(i.padAngle,A),g!=null&&a(i.padRadius,g),i}function f(s){var n=s===void 0?{}:s,p=n.x,m=n.x0,u=n.x1,d=n.y,c=n.y0,A=n.y1,g=n.defined,i=n.curve,T=d3Area();return p&&setNumberOrNumberAccessor(T.x,p),m&&setNumberOrNumberAccessor(T.x0,m),u&&setNumberOrNumberAccessor(T.x1,u),d&&setNumberOrNumberAccessor(T.y,d),c&&setNumberOrNumberAccessor(T.y0,c),A&&setNumberOrNumberAccessor(T.y1,A),g&&T.defined(g),i&&T.curve(i),T}function v(s){var n=s===void 0?{}:s,p=n.x,m=n.y,u=n.defined,d=n.curve,c=d3Line();return p&&setNumberOrNumberAccessor(c.x,p),m&&setNumberOrNumberAccessor(c.y,m),u&&c.defined(u),d&&c.curve(d),c}function C(s){var n=s===void 0?{}:s,p=n.startAngle,m=n.endAngle,u=n.padAngle,d=n.value,c=n.sort,A=n.sortValues,g=(0,t.A)();return(c===null||c!=null)&&g.sort(c),(A===null||A!=null)&&g.sortValues(A),d!=null&&g.value(d),u!=null&&a(g.padAngle,u),p!=null&&a(g.startAngle,p),m!=null&&a(g.endAngle,m),g}function S(s){var n=s===void 0?{}:s,p=n.angle,m=n.radius,u=n.defined,d=n.curve,c=d3RadialLine();return p&&setNumberOrNumberAccessor(c.angle,p),m&&setNumberOrNumberAccessor(c.radius,m),u&&c.defined(u),d&&c.curve(d),c}function R(s){var n=s.keys,p=s.value,m=s.order,u=s.offset,d=d3Stack();return n&&d.keys(n),p&&setNumberOrNumberAccessor(d.value,p),m&&d.order(stackOrder(m)),u&&d.offset(stackOffset(u)),d}var E=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function O(){return O=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var p=arguments[n];for(var m in p)Object.prototype.hasOwnProperty.call(p,m)&&(s[m]=p[m])}return s},O.apply(this,arguments)}function w(s,n){if(s==null)return{};var p={},m=Object.keys(s),u,d;for(d=0;d<m.length;d++)u=m[d],!(n.indexOf(u)>=0)&&(p[u]=s[u]);return p}function G(s){var n=s.className,p=s.top,m=s.left,u=s.data,d=u===void 0?[]:u,c=s.centroid,A=s.innerRadius,g=A===void 0?0:A,i=s.outerRadius,T=s.cornerRadius,k=s.startAngle,K=s.endAngle,W=s.padAngle,te=s.padRadius,X=s.pieSort,P=s.pieSortValues,H=s.pieValue,b=s.children,M=s.fill,D=M===void 0?"":M,Q=w(s,E),N=I({innerRadius:g,outerRadius:i,cornerRadius:T,padRadius:te}),z=C({startAngle:k,endAngle:K,padAngle:W,value:H,sort:X,sortValues:P}),V=z(d);return b?l.createElement(l.Fragment,null,b({arcs:V,path:N,pie:z})):l.createElement(x.A,{className:"visx-pie-arcs-group",top:p,left:m},V.map(function(B,Y){return l.createElement("g",{key:"pie-arc-"+Y},l.createElement("path",O({className:h()("visx-pie-arc",n),d:N(B)||"",fill:D==null||typeof D=="string"?D:D(B)},Q)),c?.(N.centroid(B),B))}))}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(j,_,e)=>{e.d(_,{A:()=>X});var l=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),h=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),x=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),I=e("../charts/src/hooks/use-global-chart-theme.ts"),f=e("../charts/src/providers/chart-context/utils.ts"),v=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),C=e("../charts/src/utils/create-composition.ts"),S=e("../charts/src/components/legend/legend.tsx"),R=e("../charts/src/components/legend/use-chart-legend-data.ts"),E=e("../charts/src/components/shared/chart-composition/use-chart-children.ts"),O=e("../charts/src/components/shared/chart-composition/chart-svg.tsx"),w=e("../charts/src/components/shared/chart-composition/chart-html.tsx"),G=e("../charts/src/components/shared/single-chart-context.tsx"),s=e("../charts/src/components/shared/use-element-height.ts"),n=e("../charts/src/components/shared/with-responsive.tsx"),p=e("../charts/src/components/tooltip/base-tooltip.tsx"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(m),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),c={};c.insert="head",c.singleton=!1;var A=u()(d.A,c);const g=d.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T=.03,k=P=>P.length?P.some(M=>M.percentage<0||M.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:P.reduce((M,D)=>M+D.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},K=({data:P,chartId:H,width:b=400,thickness:M=.4,clockwise:D=!0,withTooltips:Q=!1,showLegend:N=!1,legendOrientation:z="horizontal",legendPosition:V="bottom",legendAlignment:B="center",legendShape:Y="circle",label:ie,note:le,className:de,children:ce})=>{const Z=(0,I.u)(),$=(0,f.R)(H),[pe,me]=(0,s.v)(),{tooltipOpen:ue,tooltipLeft:he,tooltipTop:ge,tooltipData:U,hideTooltip:se,showTooltip:ne}=(0,o.A)(),oe=(0,a.useCallback)((y,L)=>{const ee=(0,l.A)(y);ee&&ne({tooltipData:L.data,tooltipLeft:ee.x,tooltipTop:ee.y-10})},[ne]),_e=(0,a.useCallback)(()=>{se()},[se]),ve=(0,a.useCallback)(y=>L=>{oe(L,y)},[oe]),{isValid:re,message:xe}=k(P),J=(0,a.useMemo)(()=>({value:y=>y.value,sort:(y,L)=>L.value-y.value,fill:y=>y.color||Z.colors[y.index%Z.colors.length]}),[Z.colors]),fe=(0,a.useMemo)(()=>({showValues:!0}),[]),ae=(0,R.B)(P,fe),{svgChildren:Ce,htmlChildren:Se,otherChildren:ye}=(0,E.n)(ce,"PieSemiCircleChart"),Ae=(0,a.useMemo)(()=>({thickness:M,clockwise:D}),[M,D]);if((0,f.t)({chartId:$,legendItems:ae,chartType:"pie-semi-circle",isDataValid:re,metadata:Ae}),!re)return(0,i.jsx)("div",{className:g["pie-semi-circle-chart"],children:(0,i.jsx)("svg",{width:b,height:b/2,"data-testid":"pie-chart-svg",children:(0,i.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:g.error,children:xe})})});const q=b/2-(N&&V==="top"?me:0),F=Math.min(b/2,q),Te=F*(1-M),je=P.map((y,L)=>({...y,index:L})),Pe=D?-Math.PI/2:Math.PI/2,be=D?Math.PI/2:-Math.PI/2;return(0,i.jsx)(G.ON.Provider,{value:{chartId:$,chartWidth:b,chartHeight:F},children:(0,i.jsxs)("div",{className:(0,t.A)("pie-semi-circle-chart",g["pie-semi-circle-chart"],de),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:N&&V==="top"?"column-reverse":"column"},children:[(0,i.jsx)("svg",{width:b,height:F,viewBox:`0 0 ${b} ${q}`,"data-testid":"pie-chart-svg",children:(0,i.jsxs)(r.A,{top:q,left:b/2,children:[(0,i.jsx)(h.A,{data:je,pieValue:J.value,outerRadius:F,innerRadius:Te,cornerRadius:3,padAngle:T,startAngle:Pe,endAngle:be,pieSort:J.sort,children:y=>y.arcs.map(L=>(0,i.jsx)("g",{onMouseMove:ve(L),onMouseLeave:_e,children:(0,i.jsx)("path",{d:y.path(L)||"",fill:J.fill(L.data),"data-testid":"pie-segment"})},L.data.label))}),(0,i.jsxs)(r.A,{children:[(0,i.jsx)(x.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:g.label,children:ie}),(0,i.jsx)(x.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:g.note,children:le})]}),Ce]})}),Q&&ue&&U&&(0,i.jsx)(p.R,{data:{label:U.label,value:U.value,valueDisplay:U.valueDisplay},top:ge||0,left:he||0}),N&&(0,i.jsx)(S.s,{items:ae,orientation:z,position:V,alignment:B,shape:Y,ref:pe,chartId:$}),Se,ye]})})},W=P=>(0,a.useContext)(v.mJ)?(0,i.jsx)(K,{...P}):(0,i.jsx)(v.Sx,{children:(0,i.jsx)(K,{...P})});W.displayName="PieSemiCircleChart";const te=(0,C.E)(W,{Legend:S.s,SVG:O.d,HTML:w.a}),X=(0,C.E)((0,n.F)(W),{Legend:S.s,SVG:O.d,HTML:w.a})},"../charts/src/components/shared/chart-composition/chart-html.tsx":(j,_,e)=>{e.d(_,{a:()=>r});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:h})=>(0,l.jsx)(l.Fragment,{children:h});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/shared/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/components/shared/chart-composition/chart-svg.tsx":(j,_,e)=>{e.d(_,{d:()=>r});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:h})=>(0,l.jsx)(l.Fragment,{children:h});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/shared/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/components/shared/chart-composition/use-chart-children.ts":(j,_,e)=>{e.d(_,{n:()=>h});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h(x,o){return(0,r.useMemo)(()=>{const t=[],a=[],I=[];return r.Children.forEach(x,f=>{if((0,r.isValidElement)(f)){const C=f.type?.displayName;C===`${o}.SVG`||C==="Chart.SVG"?f.props?.children&&r.Children.forEach(f.props.children,S=>{t.push(S)}):C===`${o}.HTML`||C==="Chart.HTML"?f.props?.children&&r.Children.forEach(f.props.children,S=>{a.push(S)}):f.type===l.A?t.push(f):I.push(f)}}),{svgChildren:t,htmlChildren:a,otherChildren:I}},[x,o])}},"../charts/src/components/tooltip/base-tooltip.tsx":(j,_,e)=>{e.d(_,{R:()=>f});var l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(l),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),x={};x.insert="head",x.singleton=!1;var o=r()(h.A,x);const t=h.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I=({data:v})=>(0,a.jsxs)(a.Fragment,{children:[v?.label,": ",v?.valueDisplay||v?.value]}),f=({data:v,top:C,left:S,component:R=I,children:E,className:O})=>(0,a.jsx)("div",{className:t.tooltip,style:{top:C,left:S},role:"tooltip",children:E||v&&(0,a.jsx)(R,{data:v,className:O})});try{f.displayName="BaseTooltip",f.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:f.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(j,_,e)=>{e.d(_,{p:()=>h});var l=e("../charts/src/providers/theme/theme-provider.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=[(x,{args:o})=>(0,r.jsx)(l.N,{theme:o.theme,children:(0,r.jsx)("div",{style:{resize:o.resize??"both",overflow:"auto",padding:"1rem",width:o.containerWidth??"800px",height:o.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,r.jsx)(x,{})})})];try{h.displayName="sharedDecorator",h.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:h.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(j,_,e)=>{e.d(_,{r:()=>l});const l={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{l.displayName="legendArgTypes",l.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:l.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(j,_,e)=>{e.d(_,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(l),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=e.n(h),o=x()(r());o.push([j.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),o.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const t=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(j,_,e)=>{e.d(_,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(l),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=e.n(h),o=x()(r());o.push([j.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const t=o}}]);
