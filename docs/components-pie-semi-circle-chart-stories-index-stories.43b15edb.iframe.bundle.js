"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(P,g,t)=>{t.r(g),t.d(g,{CompositionAPI:()=>s,CustomLegendPositioning:()=>b,Default:()=>v,ErrorStates:()=>I,Responsiveness:()=>w,WithCompositionLegend:()=>R,WithLegend:()=>y,WithTooltips:()=>C,__namedExportsOrder:()=>n,default:()=>_});var a=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=t("../charts/src/stories/decorator-config.tsx"),x=t("../charts/src/stories/legend-config.tsx"),d=t("../charts/src/stories/sample-data/index.ts"),l=t("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:l.A,parameters:{layout:"centered"},decorators:h.p,argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...x.r}},v={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:d.f2,label:"OS",note:"Windows +10%",clockwise:!0}},C={args:{...v.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},y={args:{...v.args,showLegend:!0}},R={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,e.jsx)(l.A,{width:400,data:d.f2,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Composition API with Legend Component"}),(0,e.jsx)(l.A,{width:400,data:d.f2,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,e.jsx)(l.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},b={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},E={...v.args,resize:"both"};delete E.width;const w={args:E,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},I={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(l.A,{width:300,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Total Percentage"}),(0,e.jsx)(l.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(l.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(l.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},s={render:()=>(0,e.jsxs)("div",{style:{padding:"2rem"},children:[(0,e.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,e.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom SVG Elements"}),(0,e.jsxs)(l.A,{width:400,data:d.f2,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,e.jsx)(l.A.SVG,{children:(0,e.jsxs)(a.A,{children:[(0,e.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,e.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,e.jsx)(l.A.HTML,{children:(0,e.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,e.jsx)(l.A,{width:400,data:d.f2,label:"Performance",note:"Latest Results",children:(0,e.jsx)(l.A.HTML,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,e.jsx)(l.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,e.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,e.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,e.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,e.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,e.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,e.jsx)(l.A,{width:400,data:d.f2,label:"Legacy Mode",note:"Still works!",children:(0,e.jsxs)(a.A,{children:[(0,e.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,e.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
}`,...C.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...y.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(P,g,t)=>{t.d(g,{A:()=>I});var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=t.n(r),x=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),l=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function e(s,n){s(n)}function D(s){var n=s===void 0?{}:s,c=n.innerRadius,p=n.outerRadius,m=n.cornerRadius,i=n.startAngle,u=n.endAngle,f=n.padAngle,o=n.padRadius,S=(0,d.A)();return c!=null&&e(S.innerRadius,c),p!=null&&e(S.outerRadius,p),m!=null&&e(S.cornerRadius,m),i!=null&&e(S.startAngle,i),u!=null&&e(S.endAngle,u),f!=null&&e(S.padAngle,f),o!=null&&e(S.padRadius,o),S}function _(s){var n=s===void 0?{}:s,c=n.x,p=n.x0,m=n.x1,i=n.y,u=n.y0,f=n.y1,o=n.defined,S=n.curve,j=d3Area();return c&&setNumberOrNumberAccessor(j.x,c),p&&setNumberOrNumberAccessor(j.x0,p),m&&setNumberOrNumberAccessor(j.x1,m),i&&setNumberOrNumberAccessor(j.y,i),u&&setNumberOrNumberAccessor(j.y0,u),f&&setNumberOrNumberAccessor(j.y1,f),o&&j.defined(o),S&&j.curve(S),j}function v(s){var n=s===void 0?{}:s,c=n.x,p=n.y,m=n.defined,i=n.curve,u=d3Line();return c&&setNumberOrNumberAccessor(u.x,c),p&&setNumberOrNumberAccessor(u.y,p),m&&u.defined(m),i&&u.curve(i),u}function C(s){var n=s===void 0?{}:s,c=n.startAngle,p=n.endAngle,m=n.padAngle,i=n.value,u=n.sort,f=n.sortValues,o=(0,l.A)();return(u===null||u!=null)&&o.sort(u),(f===null||f!=null)&&o.sortValues(f),i!=null&&o.value(i),m!=null&&e(o.padAngle,m),c!=null&&e(o.startAngle,c),p!=null&&e(o.endAngle,p),o}function y(s){var n=s===void 0?{}:s,c=n.angle,p=n.radius,m=n.defined,i=n.curve,u=d3RadialLine();return c&&setNumberOrNumberAccessor(u.angle,c),p&&setNumberOrNumberAccessor(u.radius,p),m&&u.defined(m),i&&u.curve(i),u}function R(s){var n=s.keys,c=s.value,p=s.order,m=s.offset,i=d3Stack();return n&&i.keys(n),c&&setNumberOrNumberAccessor(i.value,c),p&&i.order(stackOrder(p)),m&&i.offset(stackOffset(m)),i}var b=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function E(){return E=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(s[p]=c[p])}return s},E.apply(this,arguments)}function w(s,n){if(s==null)return{};var c={},p=Object.keys(s),m,i;for(i=0;i<p.length;i++)m=p[i],!(n.indexOf(m)>=0)&&(c[m]=s[m]);return c}function I(s){var n=s.className,c=s.top,p=s.left,m=s.data,i=m===void 0?[]:m,u=s.centroid,f=s.innerRadius,o=f===void 0?0:f,S=s.outerRadius,j=s.cornerRadius,F=s.startAngle,W=s.endAngle,ee=s.padAngle,Y=s.padRadius,L=s.pieSort,H=s.pieSortValues,O=s.pieValue,M=s.children,G=s.fill,N=G===void 0?"":G,K=w(s,b),z=D({innerRadius:o,outerRadius:S,cornerRadius:j,padRadius:Y}),V=C({startAngle:F,endAngle:W,padAngle:ee,value:O,sort:L,sortValues:H}),k=V(i);return M?a.createElement(a.Fragment,null,M({arcs:k,path:z,pie:V})):a.createElement(x.A,{className:"visx-pie-arcs-group",top:c,left:p},k.map(function(B,Z){return a.createElement("g",{key:"pie-arc-"+Z},a.createElement("path",E({className:h()("visx-pie-arc",n),d:z(B)||"",fill:N==null||typeof N=="string"?N:N(B)},K)),u?.(z.centroid(B),B))}))}},"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":(P,g,t)=>{t.d(g,{A:()=>Y});var a=t("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),r=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),h=t("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),x=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=t("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),l=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=t("../charts/src/providers/chart-context/utils.ts"),_=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),v=t("../charts/src/utils/create-composition.ts"),C=t("../charts/src/components/legend/legend.tsx"),y=t("../charts/src/components/legend/use-chart-legend-data.ts"),R=t("../charts/src/components/shared/chart-composition/use-chart-children.ts"),b=t("../charts/src/components/shared/chart-composition/chart-svg.tsx"),E=t("../charts/src/components/shared/chart-composition/chart-html.tsx"),w=t("../charts/src/components/shared/single-chart-context.tsx"),I=t("../charts/src/components/shared/use-element-height.ts"),s=t("../charts/src/components/shared/with-responsive.tsx"),n=t("../charts/src/components/tooltip/base-tooltip.tsx"),c=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(c),m=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),i={};i.insert="head",i.singleton=!1;var u=p()(m.A,i);const f=m.A.locals||{};var o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=.03,j=L=>L.length?L.some(M=>M.percentage<0||M.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:L.reduce((M,G)=>M+G.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},F=({data:L,chartId:H,width:O=400,thickness:M=.4,clockwise:G=!0,withTooltips:N=!1,showLegend:K=!1,legendOrientation:z="horizontal",legendPosition:V="bottom",legendAlignment:k="center",legendShape:B="circle",label:Z,note:ae,className:ie,children:le})=>{const $=(0,D.R)(H),[de,ce]=(0,I.v)(),{tooltipOpen:pe,tooltipLeft:me,tooltipTop:ue,tooltipData:X,hideTooltip:te,showTooltip:se}=(0,d.A)(),ne=(0,e.useCallback)((A,T)=>{const U=(0,a.A)(A);U&&se({tooltipData:T.data,tooltipLeft:U.x,tooltipTop:U.y-10})},[se]),he=(0,e.useCallback)(()=>{te()},[te]),ge=(0,e.useCallback)(A=>T=>{ne(T,A)},[ne]),{isValid:oe,message:_e}=j(L),{resolveGroupColor:re}=(0,_.jT)(),J=(0,e.useMemo)(()=>({value:A=>A.value,sort:(A,T)=>T.value-A.value,fill:({group:A,index:T,color:U})=>re({group:A,index:T,overrideColor:U})}),[re]),ve=(0,e.useMemo)(()=>({showValues:!0}),[]),xe=(0,y.B)(L,ve),{svgChildren:fe,htmlChildren:Ce,otherChildren:Se}=(0,R.n)(le,"PieSemiCircleChart"),ye=(0,e.useMemo)(()=>({thickness:M,clockwise:G}),[M,G]);if((0,D.t)({chartId:$,legendItems:xe,chartType:"pie-semi-circle",isDataValid:oe,metadata:ye}),!oe)return(0,o.jsx)("div",{className:f["pie-semi-circle-chart"],children:(0,o.jsx)("svg",{width:O,height:O/2,"data-testid":"pie-chart-svg",children:(0,o.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:f.error,children:_e})})});const q=O/2-(K&&V==="top"?ce:0),Q=Math.min(O/2,q),Ae=Q*(1-M),Te=L.map((A,T)=>({...A,index:T})),je=G?-Math.PI/2:Math.PI/2,Pe=G?Math.PI/2:-Math.PI/2;return(0,o.jsx)(w.ON.Provider,{value:{chartId:$,chartWidth:O,chartHeight:Q},children:(0,o.jsxs)("div",{className:(0,l.A)("pie-semi-circle-chart",f["pie-semi-circle-chart"],ie),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:K&&V==="top"?"column-reverse":"column"},children:[(0,o.jsx)("svg",{width:O,height:Q,viewBox:`0 0 ${O} ${q}`,"data-testid":"pie-chart-svg",children:(0,o.jsxs)(r.A,{top:q,left:O/2,children:[(0,o.jsx)(h.A,{data:Te,pieValue:J.value,outerRadius:Q,innerRadius:Ae,cornerRadius:3,padAngle:S,startAngle:je,endAngle:Pe,pieSort:J.sort,children:A=>A.arcs.map(T=>(0,o.jsx)("g",{onMouseMove:ge(T),onMouseLeave:he,children:(0,o.jsx)("path",{d:A.path(T)||"",fill:J.fill(T.data),"data-testid":"pie-segment"})},T.data.label))}),(0,o.jsxs)(r.A,{children:[(0,o.jsx)(x.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:f.label,children:Z}),(0,o.jsx)(x.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:f.note,children:ae})]}),fe]})}),N&&pe&&X&&(0,o.jsx)(n.R,{data:{label:X.label,value:X.value,valueDisplay:X.valueDisplay},top:ue||0,left:me||0}),K&&(0,o.jsx)(C.s,{orientation:z,position:V,alignment:k,shape:B,ref:de,chartId:$}),Ce,Se]})})},W=L=>(0,e.useContext)(_.mJ)?(0,o.jsx)(F,{...L}):(0,o.jsx)(_.Sx,{children:(0,o.jsx)(F,{...L})});W.displayName="PieSemiCircleChart";const ee=(0,v.E)(W,{Legend:C.s,SVG:b.d,HTML:E.a}),Y=(0,v.E)((0,s.F)(W),{Legend:C.s,SVG:b.d,HTML:E.a})},"../charts/src/components/shared/chart-composition/chart-html.tsx":(P,g,t)=>{t.d(g,{a:()=>r});var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:h})=>(0,a.jsx)(a.Fragment,{children:h});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/shared/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/components/shared/chart-composition/chart-svg.tsx":(P,g,t)=>{t.d(g,{d:()=>r});var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:h})=>(0,a.jsx)(a.Fragment,{children:h});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/shared/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/components/shared/chart-composition/use-chart-children.ts":(P,g,t)=>{t.d(g,{n:()=>h});var a=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h(x,d){return(0,r.useMemo)(()=>{const l=[],e=[],D=[];return r.Children.forEach(x,_=>{if((0,r.isValidElement)(_)){const C=_.type?.displayName;C===`${d}.SVG`||C==="Chart.SVG"?_.props?.children&&r.Children.forEach(_.props.children,y=>{l.push(y)}):C===`${d}.HTML`||C==="Chart.HTML"?_.props?.children&&r.Children.forEach(_.props.children,y=>{e.push(y)}):_.type===a.A?l.push(_):D.push(_)}}),{svgChildren:l,htmlChildren:e,otherChildren:D}},[x,d])}},"../charts/src/components/tooltip/base-tooltip.tsx":(P,g,t)=>{t.d(g,{R:()=>_});var a=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(a),h=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),x={};x.insert="head",x.singleton=!1;var d=r()(h.A,x);const l=h.A.locals||{};var e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=({data:v})=>(0,e.jsxs)(e.Fragment,{children:[v?.label,": ",v?.valueDisplay||v?.value]}),_=({data:v,top:C,left:y,component:R=D,children:b,className:E})=>(0,e.jsx)("div",{className:l.tooltip,style:{top:C,left:y},role:"tooltip",children:b||v&&(0,e.jsx)(R,{data:v,className:E})});try{_.displayName="BaseTooltip",_.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:_.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(P,g,t)=>{t.d(g,{p:()=>h});var a=t("../charts/src/providers/theme/theme-provider.tsx"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=[(x,{args:d})=>(0,r.jsx)(a.N,{theme:d.theme,children:(0,r.jsx)("div",{style:{resize:d.resize??"both",overflow:"auto",padding:"1rem",width:d.containerWidth??"800px",height:d.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,r.jsx)(x,{})})})];try{h.displayName="sharedDecorator",h.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:h.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(P,g,t)=>{t.d(g,{r:()=>a});const a={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{a.displayName="legendArgTypes",a.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":(P,g,t)=>{t.d(g,{A:()=>l});var a=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),h=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=t.n(h),d=x()(r());d.push([P.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),d.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const l=d},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(P,g,t)=>{t.d(g,{A:()=>l});var a=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),h=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=t.n(h),d=x()(r());d.push([P.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),d.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const l=d}}]);
