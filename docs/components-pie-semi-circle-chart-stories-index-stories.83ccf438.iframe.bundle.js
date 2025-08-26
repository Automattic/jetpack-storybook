"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":(T,h,r)=>{r.r(h),r.d(h,{CompositionAPI:()=>t,CustomLegendPositioning:()=>b,Default:()=>g,ErrorStates:()=>E,Responsiveness:()=>O,WithCompositionLegend:()=>P,WithLegend:()=>y,WithTooltips:()=>v,__namedExportsOrder:()=>n,default:()=>_});var o=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=r("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),u=r("../charts/src/stories/decorator-config.tsx"),x=r("../charts/src/stories/legend-config.tsx"),m=r("../charts/src/stories/sample-data/index.ts"),l=r("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:l.A,parameters:{layout:"centered"},decorators:u.p,argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},...x.r}},g={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:m.f2,label:"OS",note:"Windows +10%",clockwise:!0}},v={args:{...g.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},y={args:{...g.args,showLegend:!0}},P={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,e.jsx)(l.A,{width:400,data:m.f2,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Composition API with Legend Component"}),(0,e.jsx)(l.A,{width:400,data:m.f2,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,e.jsx)(l.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})})]})]}),parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},b={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},L={...g.args,resize:"both"};delete L.width;const O={args:L,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},E={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(l.A,{width:300,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Total Percentage"}),(0,e.jsx)(l.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(l.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(l.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},t={render:()=>(0,e.jsxs)("div",{style:{padding:"2rem"},children:[(0,e.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,e.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom SVG Elements"}),(0,e.jsxs)(l.A,{width:400,data:m.f2,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,e.jsx)(l.A.SVG,{children:(0,e.jsxs)(o.A,{children:[(0,e.jsx)(s.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,e.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,e.jsx)(l.A.HTML,{children:(0,e.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,e.jsx)(l.A,{width:400,data:m.f2,label:"Performance",note:"Latest Results",children:(0,e.jsx)(l.A.HTML,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,e.jsx)(l.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,e.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,e.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,e.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,e.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,e.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,e.jsx)(l.A,{width:400,data:m.f2,label:"Legacy Mode",note:"Still works!",children:(0,e.jsxs)(o.A,{children:[(0,e.jsx)(s.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,e.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},n=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...y.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(T,h,r)=>{r.d(h,{A:()=>E});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=r("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=r.n(s),x=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),m=r("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),l=r("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function e(t,n){t(n)}function j(t){var n=t===void 0?{}:t,a=n.innerRadius,d=n.outerRadius,c=n.cornerRadius,i=n.startAngle,p=n.endAngle,C=n.padAngle,f=n.padRadius,S=(0,m.A)();return a!=null&&e(S.innerRadius,a),d!=null&&e(S.outerRadius,d),c!=null&&e(S.cornerRadius,c),i!=null&&e(S.startAngle,i),p!=null&&e(S.endAngle,p),C!=null&&e(S.padAngle,C),f!=null&&e(S.padRadius,f),S}function _(t){var n=t===void 0?{}:t,a=n.x,d=n.x0,c=n.x1,i=n.y,p=n.y0,C=n.y1,f=n.defined,S=n.curve,A=d3Area();return a&&setNumberOrNumberAccessor(A.x,a),d&&setNumberOrNumberAccessor(A.x0,d),c&&setNumberOrNumberAccessor(A.x1,c),i&&setNumberOrNumberAccessor(A.y,i),p&&setNumberOrNumberAccessor(A.y0,p),C&&setNumberOrNumberAccessor(A.y1,C),f&&A.defined(f),S&&A.curve(S),A}function g(t){var n=t===void 0?{}:t,a=n.x,d=n.y,c=n.defined,i=n.curve,p=d3Line();return a&&setNumberOrNumberAccessor(p.x,a),d&&setNumberOrNumberAccessor(p.y,d),c&&p.defined(c),i&&p.curve(i),p}function v(t){var n=t===void 0?{}:t,a=n.startAngle,d=n.endAngle,c=n.padAngle,i=n.value,p=n.sort,C=n.sortValues,f=(0,l.A)();return(p===null||p!=null)&&f.sort(p),(C===null||C!=null)&&f.sortValues(C),i!=null&&f.value(i),c!=null&&e(f.padAngle,c),a!=null&&e(f.startAngle,a),d!=null&&e(f.endAngle,d),f}function y(t){var n=t===void 0?{}:t,a=n.angle,d=n.radius,c=n.defined,i=n.curve,p=d3RadialLine();return a&&setNumberOrNumberAccessor(p.angle,a),d&&setNumberOrNumberAccessor(p.radius,d),c&&p.defined(c),i&&p.curve(i),p}function P(t){var n=t.keys,a=t.value,d=t.order,c=t.offset,i=d3Stack();return n&&i.keys(n),a&&setNumberOrNumberAccessor(i.value,a),d&&i.order(stackOrder(d)),c&&i.offset(stackOffset(c)),i}var b=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function L(){return L=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(t[d]=a[d])}return t},L.apply(this,arguments)}function O(t,n){if(t==null)return{};var a={},d=Object.keys(t),c,i;for(i=0;i<d.length;i++)c=d[i],!(n.indexOf(c)>=0)&&(a[c]=t[c]);return a}function E(t){var n=t.className,a=t.top,d=t.left,c=t.data,i=c===void 0?[]:c,p=t.centroid,C=t.innerRadius,f=C===void 0?0:C,S=t.outerRadius,A=t.cornerRadius,N=t.startAngle,B=t.endAngle,W=t.padAngle,H=t.padRadius,K=t.pieSort,k=t.pieSortValues,z=t.pieValue,M=t.children,G=t.fill,w=G===void 0?"":G,U=O(t,b),R=j({innerRadius:f,outerRadius:S,cornerRadius:A,padRadius:H}),V=v({startAngle:N,endAngle:B,padAngle:W,value:z,sort:K,sortValues:k}),I=V(i);return M?o.createElement(o.Fragment,null,M({arcs:I,path:R,pie:V})):o.createElement(x.A,{className:"visx-pie-arcs-group",top:a,left:d},I.map(function(D,F){return o.createElement("g",{key:"pie-arc-"+F},o.createElement("path",L({className:u()("visx-pie-arc",n),d:R(D)||"",fill:w==null||typeof w=="string"?w:w(D)},U)),p?.(R.centroid(D),D))}))}},"../charts/src/components/shared/chart-composition/chart-html.tsx":(T,h,r)=>{r.d(h,{a:()=>s});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:u})=>(0,o.jsx)(o.Fragment,{children:u});s.displayName="Chart.HTML";try{s.displayName="Chart.HTML",s.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/shared/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}},"../charts/src/components/shared/chart-composition/chart-svg.tsx":(T,h,r)=>{r.d(h,{d:()=>s});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:u})=>(0,o.jsx)(o.Fragment,{children:u});s.displayName="Chart.SVG";try{s.displayName="Chart.SVG",s.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/shared/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}},"../charts/src/components/shared/chart-composition/use-chart-children.ts":(T,h,r)=>{r.d(h,{n:()=>u});var o=r("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function u(x,m){return(0,s.useMemo)(()=>{const l=[],e=[],j=[];return s.Children.forEach(x,_=>{if((0,s.isValidElement)(_)){const v=_.type?.displayName;v===`${m}.SVG`||v==="Chart.SVG"?_.props?.children&&s.Children.forEach(_.props.children,y=>{l.push(y)}):v===`${m}.HTML`||v==="Chart.HTML"?_.props?.children&&s.Children.forEach(_.props.children,y=>{e.push(y)}):_.type===o.A?l.push(_):j.push(_)}}),{svgChildren:l,htmlChildren:e,otherChildren:j}},[x,m])}},"../charts/src/components/tooltip/base-tooltip.tsx":(T,h,r)=>{r.d(h,{R:()=>_});var o=r("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=r.n(o),u=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),x={};x.insert="head",x.singleton=!1;var m=s()(u.A,x);const l=u.A.locals||{};var e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({data:g})=>(0,e.jsxs)(e.Fragment,{children:[g?.label,": ",g?.valueDisplay||g?.value]}),_=({data:g,top:v,left:y,component:P=j,children:b,className:L})=>(0,e.jsx)("div",{className:l.tooltip,style:{top:v,left:y},role:"tooltip",children:b||g&&(0,e.jsx)(P,{data:g,className:L})});try{_.displayName="BaseTooltip",_.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:_.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(T,h,r)=>{r.d(h,{p:()=>u});var o=r("../charts/src/providers/theme/theme-provider.tsx"),s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=[(x,{args:m})=>(0,s.jsx)(o.N,{theme:m.theme,children:(0,s.jsx)("div",{style:{resize:m.resize??"both",overflow:"auto",padding:"1rem",width:m.containerWidth??"800px",height:m.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,s.jsx)(x,{})})})];try{u.displayName="sharedDecorator",u.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:u.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(T,h,r)=>{r.d(h,{r:()=>o});const o={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{o.displayName="legendArgTypes",o.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(T,h,r)=>{r.d(h,{A:()=>l});var o=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=r.n(o),u=r("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),x=r.n(u),m=x()(s());m.push([T.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),m.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const l=m}}]);
