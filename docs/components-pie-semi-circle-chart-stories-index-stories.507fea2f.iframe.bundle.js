"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":((y,c,e)=>{e.d(c,{A:()=>p});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),g=e.n(l),h=g()(s());h.push([y.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),h.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const p=h}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((y,c,e)=>{e.d(c,{A:()=>p});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),g=e.n(l),h=g()(s());h.push([y.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),h.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const p=h}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((y,c,e)=>{e.d(c,{f:()=>t});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),l=e("../charts/src/utils/format-percentage.ts");function g(n,d,a="percentage"){if(!d||a==="none")return"";if("percentage"in n){const i=n;switch(a){case"percentage":return(0,l.E)(i.percentage);case"value":return i.value.toString();case"valueDisplay":return i.valueDisplay||i.value.toString();default:return""}}return"value"in n?n.value.toString():""}function h(n,d,a,i,_){if(d){const u=a||i;if(u)return{...n,glyphSize:_,renderGlyph:u}}return n}function p(n,d,a,i,_,u,v){const T=(x,S)=>{const{color:A,glyph:b,shapeStyles:m}=d({data:x,index:S,legendShape:v}),O={label:x.label,value:a?x.data?.length?.toString()||"0":"",color:A,shapeStyle:m};return h(O,i,b,u,_)};return n.map(T)}function o(n,d,a,i,_,u,v,T){const x=(S,A)=>{const{color:b,glyph:m,shapeStyles:O}=d({data:S,index:A,legendShape:T}),R={label:S.label,value:g(S,a,i),color:b,shapeStyle:O};return h(R,_,m,v,u)};return n.map(x)}function t(n,d={},a){const{showValues:i=!1,legendValueDisplay:_="percentage",withGlyph:u=!1,glyphSize:v=8,renderGlyph:T}=d,{getElementStyles:x}=(0,s.j)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?p(n,x,i,u,v,T,a):o(n,x,i,_,u,v,T,a),[n,x,i,_,u,v,T,a])}}),"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":((y,c,e)=>{e.d(c,{A:()=>te});var r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),l=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),g=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),d=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),a=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),i=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),_=e("../charts/src/utils/create-composition.ts"),u=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),v=e("../charts/src/components/legend/legend.tsx"),T=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),x=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),S=e("../charts/src/components/private/chart-composition/chart-html.tsx"),A=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),b=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),m=e("../charts/src/components/tooltip/base-tooltip.tsx"),O=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(O),k=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),G={};G.insert="head",G.singleton=!1;var Me=R()(k.A,G);const D=k.A.locals||{};var C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const q=.03,ee=j=>j.length?j.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:j.reduce((E,M)=>E+M.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},F=({data:j,chartId:V,width:L=400,thickness:E=.4,clockwise:M=!0,withTooltips:ne=!1,showLegend:B=!1,legendOrientation:se="horizontal",legendPosition:H="bottom",legendAlignment:oe="center",legendMaxWidth:re,legendTextOverflow:ae="wrap",legendShape:ie="circle",legendValueDisplay:X="percentage",label:le,note:de,className:ce,children:pe})=>{const K=(0,n.R)(V),[me,he]=(0,t.v)(),{tooltipOpen:ue,tooltipLeft:ge,tooltipTop:_e,tooltipData:w,hideTooltip:Z,showTooltip:Q}=(0,h.A)(),Y=(0,o.useCallback)((f,P)=>{const z=(0,r.A)(f);z&&Q({tooltipData:P.data,tooltipLeft:z.x,tooltipTop:z.y-10})},[Q]),ve=(0,o.useCallback)(()=>{Z()},[Z]),xe=(0,o.useCallback)(f=>P=>{Y(P,f)},[Y]),{isValid:$,message:Ce}=ee(j),{getElementStyles:J}=(0,d.j)(),U=(0,o.useMemo)(()=>({value:f=>f.value,sort:(f,P)=>P.value-f.value,fill:f=>J({data:f,index:f.index}).color}),[J]),fe=(0,o.useMemo)(()=>({showValues:!0,legendValueDisplay:X}),[X]),Se=(0,u.f)(j,fe),{svgChildren:ye,htmlChildren:Te,otherChildren:Pe}=(0,T.n)(pe,"PieSemiCircleChart"),Ae=(0,o.useMemo)(()=>({thickness:E,clockwise:M}),[E,M]);if((0,a.t)({chartId:K,legendItems:Se,chartType:"pie-semi-circle",isDataValid:$,metadata:Ae}),!$)return(0,C.jsx)("div",{className:D["pie-semi-circle-chart"],children:(0,C.jsx)("svg",{width:L,height:L/2,"data-testid":"pie-chart-svg",children:(0,C.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:D.error,children:Ce})})});const N=L/2-(B&&H==="top"?he:0),I=Math.min(L/2,N),je=I*(1-E),Le=j.map((f,P)=>({...f,index:P})),Ee=M?-Math.PI/2:Math.PI/2,be=M?Math.PI/2:-Math.PI/2;return(0,C.jsx)(A.O.Provider,{value:{chartId:K,chartWidth:L,chartHeight:I},children:(0,C.jsxs)("div",{className:(0,p.A)("pie-semi-circle-chart",D["pie-semi-circle-chart"],ce),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:B&&H==="top"?"column-reverse":"column"},children:[(0,C.jsx)("svg",{width:L,height:I,viewBox:`0 0 ${L} ${N}`,"data-testid":"pie-chart-svg",children:(0,C.jsxs)(s.A,{top:N,left:L/2,children:[(0,C.jsx)(l.A,{data:Le,pieValue:U.value,outerRadius:I,innerRadius:je,cornerRadius:3,padAngle:q,startAngle:Ee,endAngle:be,pieSort:U.sort,children:f=>f.arcs.map(P=>(0,C.jsx)("g",{onMouseMove:xe(P),onMouseLeave:ve,children:(0,C.jsx)("path",{d:f.path(P)||"",fill:U.fill(P.data),"data-testid":"pie-segment"})},P.data.label))}),(0,C.jsxs)(s.A,{children:[(0,C.jsx)(g.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:D.label,children:le}),(0,C.jsx)(g.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:D.note,children:de})]}),ye]})}),ne&&ue&&w&&(0,C.jsx)(m.R,{data:{label:w.label,value:w.value,valueDisplay:w.valueDisplay},top:_e||0,left:ge||0}),B&&(0,C.jsx)(v.s,{orientation:se,position:H,alignment:oe,maxWidth:re,textOverflow:ae,shape:ie,ref:me,chartId:K}),Te,Pe]})})},W=j=>(0,o.useContext)(i.m)?(0,C.jsx)(F,{...j}):(0,C.jsx)(i.S,{children:(0,C.jsx)(F,{...j})});W.displayName="PieSemiCircleChart";const Oe=(0,_.E)(W,{Legend:v.s,SVG:x.d,HTML:S.a}),te=(0,_.E)((0,b.F)(W),{Legend:v.s,SVG:x.d,HTML:S.a})}),"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":((y,c,e)=>{e.r(c),e.d(c,{CompositionAPI:()=>A,CustomLegendPositioning:()=>v,Default:()=>a,ErrorStates:()=>S,Responsiveness:()=>x,WithCompositionLegend:()=>u,WithLegend:()=>_,WithTooltips:()=>i,__namedExportsOrder:()=>b,default:()=>d});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=e("../charts/src/stories/chart-decorator.tsx"),g=e("../charts/src/stories/theme-config.tsx"),h=e("../charts/src/stories/legend-config.tsx"),p=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:o.A,parameters:{layout:"centered"},decorators:[l.OI],argTypes:{...l.xo,...g.jW,...h.r,width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},a={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:p.f2,label:"OS",note:"Windows +10%",clockwise:!0}},i={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},_={args:{...a.args,showLegend:!0}},u={render:m=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(o.A,{width:400,data:m.data,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:m.legendPosition||"bottom",legendOrientation:m.legendOrientation||"horizontal",legendAlignment:m.legendAlignment||"center",legendMaxWidth:m.legendMaxWidth,legendTextOverflow:m.legendTextOverflow||"wrap"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(o.A,{width:400,data:m.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(o.A.Legend,{position:m.legendPosition||"bottom",orientation:m.legendOrientation||"horizontal",alignment:m.legendAlignment||"center",maxWidth:m.legendMaxWidth,textOverflow:m.legendTextOverflow||"wrap"})})]})]}),args:{data:p.f2},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},v={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},T={...a.args,resize:"both"};delete T.width;const x={args:T,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},S={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},A={render:m=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(o.A,{width:400,data:m.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(o.A.SVG,{children:(0,t.jsxs)(r.A,{children:[(0,t.jsx)(s.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(o.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(o.A,{width:400,data:m.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(o.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(o.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(o.A,{width:400,data:m.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(r.A,{children:[(0,t.jsx)(s.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:p.f2},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},b=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,..._.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based Legend</h3>
                <PieSemiCircleChart width={400} data={args.data} label="Performance Metrics" note="Q4 2023 Results" showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieSemiCircleChart width={400} data={args.data} label="Performance Metrics" note="Q4 2023 Results">
                    <PieSemiCircleChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieSemiCircleChart>
            </div>
        </div>,
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
                    <PieSemiCircleChart width={400} data={args.data} label="OS Usage" note="Q4 2023" withTooltips={true}>
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
                    <PieSemiCircleChart width={400} data={args.data} label="Performance" note="Latest Results">
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
                <PieSemiCircleChart width={400} data={args.data} label="Legacy Mode" note="Still works!">
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
    data
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
}`,...A.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((y,c,e)=>{e.d(c,{a:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:l})=>(0,r.jsx)(r.Fragment,{children:l});s.displayName="Chart.HTML";try{s.displayName="Chart.HTML",s.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((y,c,e)=>{e.d(c,{d:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:l})=>(0,r.jsx)(r.Fragment,{children:l});s.displayName="Chart.SVG";try{s.displayName="Chart.SVG",s.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((y,c,e)=>{e.d(c,{n:()=>l});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l(g,h){return(0,s.useMemo)(()=>{const p=[],o=[],t=[];return s.Children.forEach(g,n=>{if((0,s.isValidElement)(n)){const a=n.type?.displayName;a===`${h}.SVG`||a==="Chart.SVG"?n.props?.children&&s.Children.forEach(n.props.children,i=>{p.push(i)}):a===`${h}.HTML`||a==="Chart.HTML"?n.props?.children&&s.Children.forEach(n.props.children,i=>{o.push(i)}):n.type===r.A?p.push(n):t.push(n)}}),{svgChildren:p,htmlChildren:o,otherChildren:t}},[g,h])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((y,c,e)=>{e.d(c,{R:()=>n});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),g={};g.insert="head",g.singleton=!1;var h=s()(l.A,g);const p=l.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:d})=>(0,o.jsxs)(o.Fragment,{children:[d?.label,": ",d?.valueDisplay||d?.value]}),n=({data:d,top:a,left:i,component:_=t,children:u,className:v})=>(0,o.jsx)("div",{className:p.tooltip,style:{top:a,left:i},role:"tooltip",children:u||d&&(0,o.jsx)(_,{data:d,className:v})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((y,c,e)=>{e.d(c,{v:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({initialHeight:l=0}={}){const[g,h]=(0,r.useState)(l),p=(0,r.useRef)(null);return[(0,r.useCallback)(t=>{if(p.current&&(p.current.disconnect(),p.current=null),t){const n=()=>{h(t.getBoundingClientRect().height||0)};n();const d=new window.ResizeObserver(n);d.observe(t),p.current=d}},[]),g]}}),"../charts/src/stories/legend-config.tsx":((y,c,e)=>{e.d(c,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((y,c,e)=>{e.d(c,{E:()=>s});var r=e("../number-formatters/src/index.ts");const s=l=>(0,r.ZV)(l/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
