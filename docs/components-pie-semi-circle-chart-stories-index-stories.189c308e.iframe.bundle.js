"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(b,g,e)=>{e.r(g),e.d(g,{CompositionAPI:()=>s,CustomLegendPositioning:()=>D,Default:()=>v,ErrorStates:()=>R,Responsiveness:()=>I,WithCompositionLegend:()=>M,WithLegend:()=>A,WithTooltips:()=>y,__namedExportsOrder:()=>n,default:()=>x});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../charts/src/stories/decorator-config.tsx"),_=e("../charts/src/stories/legend-config.tsx"),d=e("../charts/src/stories/sample-data/index.ts"),i=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:i.A,parameters:{layout:"centered"},decorators:h.p,argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},..._.r}},v={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:d.f2,label:"OS",note:"Windows +10%",clockwise:!0}},y={args:{...v.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},A={args:{...v.args,showLegend:!0}},M={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(i.A,{width:400,data:d.f2,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(i.A,{width:400,data:d.f2,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(i.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},D={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},L={...v.args,resize:"both"};delete L.width;const I={args:L,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},R={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(i.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(i.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(i.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},s={render:()=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(i.A,{width:400,data:d.f2,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(i.A.SVG,{children:(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(i.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(i.A,{width:400,data:d.f2,label:"Performance",note:"Latest Results",children:(0,t.jsx)(i.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(i.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(i.A,{width:400,data:d.f2,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(b,g,e)=>{e.d(g,{A:()=>R});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=e.n(o),_=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),i=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function t(s,n){s(n)}function w(s){var n=s===void 0?{}:s,c=n.innerRadius,p=n.outerRadius,u=n.cornerRadius,l=n.startAngle,m=n.endAngle,S=n.padAngle,C=n.padRadius,f=(0,d.A)();return c!=null&&t(f.innerRadius,c),p!=null&&t(f.outerRadius,p),u!=null&&t(f.cornerRadius,u),l!=null&&t(f.startAngle,l),m!=null&&t(f.endAngle,m),S!=null&&t(f.padAngle,S),C!=null&&t(f.padRadius,C),f}function x(s){var n=s===void 0?{}:s,c=n.x,p=n.x0,u=n.x1,l=n.y,m=n.y0,S=n.y1,C=n.defined,f=n.curve,a=d3Area();return c&&setNumberOrNumberAccessor(a.x,c),p&&setNumberOrNumberAccessor(a.x0,p),u&&setNumberOrNumberAccessor(a.x1,u),l&&setNumberOrNumberAccessor(a.y,l),m&&setNumberOrNumberAccessor(a.y0,m),S&&setNumberOrNumberAccessor(a.y1,S),C&&a.defined(C),f&&a.curve(f),a}function v(s){var n=s===void 0?{}:s,c=n.x,p=n.y,u=n.defined,l=n.curve,m=d3Line();return c&&setNumberOrNumberAccessor(m.x,c),p&&setNumberOrNumberAccessor(m.y,p),u&&m.defined(u),l&&m.curve(l),m}function y(s){var n=s===void 0?{}:s,c=n.startAngle,p=n.endAngle,u=n.padAngle,l=n.value,m=n.sort,S=n.sortValues,C=(0,i.A)();return(m===null||m!=null)&&C.sort(m),(S===null||S!=null)&&C.sortValues(S),l!=null&&C.value(l),u!=null&&t(C.padAngle,u),c!=null&&t(C.startAngle,c),p!=null&&t(C.endAngle,p),C}function A(s){var n=s===void 0?{}:s,c=n.angle,p=n.radius,u=n.defined,l=n.curve,m=d3RadialLine();return c&&setNumberOrNumberAccessor(m.angle,c),p&&setNumberOrNumberAccessor(m.radius,p),u&&m.defined(u),l&&m.curve(l),m}function M(s){var n=s.keys,c=s.value,p=s.order,u=s.offset,l=d3Stack();return n&&l.keys(n),c&&setNumberOrNumberAccessor(l.value,c),p&&l.order(stackOrder(p)),u&&l.offset(stackOffset(u)),l}var D=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function L(){return L=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(s[p]=c[p])}return s},L.apply(this,arguments)}function I(s,n){if(s==null)return{};var c={},p=Object.keys(s),u,l;for(l=0;l<p.length;l++)u=p[l],!(n.indexOf(u)>=0)&&(c[u]=s[u]);return c}function R(s){var n=s.className,c=s.top,p=s.left,u=s.data,l=u===void 0?[]:u,m=s.centroid,S=s.innerRadius,C=S===void 0?0:S,f=s.outerRadius,a=s.cornerRadius,X=s.startAngle,Q=s.endAngle,z=s.padAngle,W=s.padRadius,ee=s.pieSort,Y=s.pieSortValues,E=s.pieValue,V=s.children,O=s.fill,P=O===void 0?"":O,G=I(s,D),H=w({innerRadius:C,outerRadius:f,cornerRadius:a,padRadius:W}),B=y({startAngle:X,endAngle:Q,padAngle:z,value:E,sort:ee,sortValues:Y}),U=B(l);return V?r.createElement(r.Fragment,null,V({arcs:U,path:H,pie:B})):r.createElement(_.A,{className:"visx-pie-arcs-group",top:c,left:p},U.map(function(N,Z){return r.createElement("g",{key:"pie-arc-"+Z},r.createElement("path",L({className:h()("visx-pie-arc",n),d:H(N)||"",fill:P==null||typeof P=="string"?P:P(N)},G)),m?.(H.centroid(N),N))}))}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(b,g,e)=>{e.d(g,{A:()=>Y});var r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),h=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),_=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../charts/src/hooks/use-element-height.ts"),x=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),v=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),A=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),M=e("../charts/src/utils/create-composition.ts"),D=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),L=e("../charts/src/components/legend/legend.tsx"),I=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),R=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),s=e("../charts/src/components/private/chart-composition/chart-html.tsx"),n=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),c=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),p=e("../charts/src/components/tooltip/base-tooltip.tsx"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(u),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),S={};S.insert="head",S.singleton=!1;var C=l()(m.A,S);const f=m.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const X=.03,Q=E=>E.length?E.some(P=>P.percentage<0||P.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:E.reduce((P,G)=>P+G.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},z=({data:E,chartId:V,width:O=400,thickness:P=.4,clockwise:G=!0,withTooltips:H=!1,showLegend:B=!1,legendOrientation:U="horizontal",legendPosition:N="bottom",legendAlignment:Z="center",legendShape:ae="circle",label:ie,note:le,className:de,children:ce})=>{const $=(0,x.R)(V),[pe,me]=(0,w.v)(),{tooltipOpen:ue,tooltipLeft:he,tooltipTop:ge,tooltipData:k,hideTooltip:te,showTooltip:se}=(0,d.A)(),ne=(0,t.useCallback)((T,j)=>{const K=(0,r.A)(T);K&&se({tooltipData:j.data,tooltipLeft:K.x,tooltipTop:K.y-10})},[se]),_e=(0,t.useCallback)(()=>{te()},[te]),ve=(0,t.useCallback)(T=>j=>{ne(j,T)},[ne]),{isValid:oe,message:xe}=Q(E),{resolveGroupColor:re}=(0,v.j)(),J=(0,t.useMemo)(()=>({value:T=>T.value,sort:(T,j)=>j.value-T.value,fill:({group:T,index:j,color:K})=>re({group:T,index:j,overrideColor:K})}),[re]),fe=(0,t.useMemo)(()=>({showValues:!0}),[]),Ce=(0,D.f)(E,fe),{svgChildren:Se,htmlChildren:ye,otherChildren:Ae}=(0,I.n)(ce,"PieSemiCircleChart"),Te=(0,t.useMemo)(()=>({thickness:P,clockwise:G}),[P,G]);if((0,y.t)({chartId:$,legendItems:Ce,chartType:"pie-semi-circle",isDataValid:oe,metadata:Te}),!oe)return(0,a.jsx)("div",{className:f["pie-semi-circle-chart"],children:(0,a.jsx)("svg",{width:O,height:O/2,"data-testid":"pie-chart-svg",children:(0,a.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:f.error,children:xe})})});const q=O/2-(B&&N==="top"?me:0),F=Math.min(O/2,q),je=F*(1-P),Pe=E.map((T,j)=>({...T,index:j})),be=G?-Math.PI/2:Math.PI/2,Le=G?Math.PI/2:-Math.PI/2;return(0,a.jsx)(n.O.Provider,{value:{chartId:$,chartWidth:O,chartHeight:F},children:(0,a.jsxs)("div",{className:(0,i.A)("pie-semi-circle-chart",f["pie-semi-circle-chart"],de),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:B&&N==="top"?"column-reverse":"column"},children:[(0,a.jsx)("svg",{width:O,height:F,viewBox:`0 0 ${O} ${q}`,"data-testid":"pie-chart-svg",children:(0,a.jsxs)(o.A,{top:q,left:O/2,children:[(0,a.jsx)(h.A,{data:Pe,pieValue:J.value,outerRadius:F,innerRadius:je,cornerRadius:3,padAngle:X,startAngle:be,endAngle:Le,pieSort:J.sort,children:T=>T.arcs.map(j=>(0,a.jsx)("g",{onMouseMove:ve(j),onMouseLeave:_e,children:(0,a.jsx)("path",{d:T.path(j)||"",fill:J.fill(j.data),"data-testid":"pie-segment"})},j.data.label))}),(0,a.jsxs)(o.A,{children:[(0,a.jsx)(_.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:f.label,children:ie}),(0,a.jsx)(_.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:f.note,children:le})]}),Se]})}),H&&ue&&k&&(0,a.jsx)(p.R,{data:{label:k.label,value:k.value,valueDisplay:k.valueDisplay},top:ge||0,left:he||0}),B&&(0,a.jsx)(L.s,{orientation:U,position:N,alignment:Z,shape:ae,ref:pe,chartId:$}),ye,Ae]})})},W=E=>(0,t.useContext)(A.m)?(0,a.jsx)(z,{...E}):(0,a.jsx)(A.S,{children:(0,a.jsx)(z,{...E})});W.displayName="PieSemiCircleChart";const ee=(0,M.E)(W,{Legend:L.s,SVG:R.d,HTML:s.a}),Y=(0,M.E)((0,c.F)(W),{Legend:L.s,SVG:R.d,HTML:s.a})},"../charts/src/components/private/chart-composition/chart-html.tsx":(b,g,e)=>{e.d(g,{a:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:h})=>(0,r.jsx)(r.Fragment,{children:h});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/components/private/chart-composition/chart-svg.tsx":(b,g,e)=>{e.d(g,{d:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:h})=>(0,r.jsx)(r.Fragment,{children:h});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/components/private/chart-composition/use-chart-children.ts":(b,g,e)=>{e.d(g,{n:()=>h});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h(_,d){return(0,o.useMemo)(()=>{const i=[],t=[],w=[];return o.Children.forEach(_,x=>{if((0,o.isValidElement)(x)){const y=x.type?.displayName;y===`${d}.SVG`||y==="Chart.SVG"?x.props?.children&&o.Children.forEach(x.props.children,A=>{i.push(A)}):y===`${d}.HTML`||y==="Chart.HTML"?x.props?.children&&o.Children.forEach(x.props.children,A=>{t.push(A)}):x.type===r.A?i.push(x):w.push(x)}}),{svgChildren:i,htmlChildren:t,otherChildren:w}},[_,d])}},"../charts/src/components/tooltip/base-tooltip.tsx":(b,g,e)=>{e.d(g,{R:()=>x});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),_={};_.insert="head",_.singleton=!1;var d=o()(h.A,_);const i=h.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=({data:v})=>(0,t.jsxs)(t.Fragment,{children:[v?.label,": ",v?.valueDisplay||v?.value]}),x=({data:v,top:y,left:A,component:M=w,children:D,className:L})=>(0,t.jsx)("div",{className:i.tooltip,style:{top:y,left:A},role:"tooltip",children:D||v&&(0,t.jsx)(M,{data:v,className:L})});try{x.displayName="BaseTooltip",x.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:x.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(b,g,e)=>{e.d(g,{p:()=>h});var r=e("../charts/src/providers/theme/theme-provider.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=[(_,{args:d})=>(0,o.jsx)(r.N,{theme:d.theme,children:(0,o.jsx)("div",{style:{resize:d.resize??"both",overflow:"auto",padding:"1rem",width:d.containerWidth??"800px",height:d.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,o.jsx)(_,{})})})];try{h.displayName="sharedDecorator",h.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:h.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(b,g,e)=>{e.d(g,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(b,g,e)=>{e.d(g,{A:()=>i});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(h),d=_()(o());d.push([b.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),d.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const i=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(b,g,e)=>{e.d(g,{A:()=>i});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(h),d=_()(o());d.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),d.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const i=d}}]);
