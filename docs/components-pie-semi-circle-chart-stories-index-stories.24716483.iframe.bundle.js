"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":((f,h,e)=>{e.d(h,{A:()=>a});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),p=c()(o());p.push([f.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),p.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const a=p}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((f,h,e)=>{e.d(h,{A:()=>a});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),p=c()(o());p.push([f.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),p.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const a=p}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((f,h,e)=>{e.d(h,{f:()=>t});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),d=e("../charts/src/utils/format-percentage.ts"),c=e("../charts/src/utils/get-styles.ts");function p(n,m,l="percentage"){if(!m||l==="none")return"";if("percentage"in n){const i=n;switch(l){case"percentage":return(0,d.E)(i.percentage);case"value":return i.value.toString();case"valueDisplay":return i.valueDisplay||i.value.toString();default:return""}}return"value"in n?n.value.toString():""}function a(n,m,l,i,S,_,g){const P=(u,C)=>{const{shapeStyles:A}=(0,c.jU)(u,C,m,g),b={label:u.label,value:l?u.data?.length?.toString()||"0":"",color:(0,c.gO)(u,C,m.colors),shapeStyle:A,group:u.group,index:C,overrideColor:u.options?.stroke};return i&&_?{...b,glyphSize:S,renderGlyph:_}:b};return n.map(P)}function s(n,m,l,i,S,_,g){const P=(u,C)=>{const A={label:u.label,value:p(u,l,i),color:u.color??m.colors[C%m.colors.length],group:u.group,index:C,overrideColor:u.color};return S&&g?{...A,glyphSize:_,renderGlyph:g}:A};return n.map(P)}function t(n,m={},l){const{showValues:i=!1,legendValueDisplay:S="percentage",withGlyph:_=!1,glyphSize:g=8,renderGlyph:P}=m,u=(0,o.p)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?a(n,u,i,_,g,P,l):s(n,u,i,S,_,g,P),[n,u,i,S,_,g,P,l])}}),"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":((f,h,e)=>{e.d(h,{A:()=>te});var r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),p=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),m=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),l=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),i=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/utils/create-composition.ts"),_=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),g=e("../charts/src/components/legend/legend.tsx"),P=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),u=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),C=e("../charts/src/components/private/chart-composition/chart-html.tsx"),A=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),b=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),v=e("../charts/src/components/tooltip/base-tooltip.tsx"),$=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n($),N=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),R={};R.insert="head",R.singleton=!1;var Me=J()(N.A,R);const O=N.A.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const q=.03,ee=j=>j.length?j.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:j.reduce((E,M)=>E+M.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},z=({data:j,chartId:W,width:L=400,thickness:E=.4,clockwise:M=!0,withTooltips:ne=!1,showLegend:V=!1,legendOrientation:se="horizontal",legendPosition:B="bottom",legendAlignment:oe="center",legendMaxWidth:re,legendTextOverflow:ae="wrap",legendShape:ie="circle",legendValueDisplay:k="percentage",label:le,note:ce,className:de,children:pe})=>{const H=(0,n.R)(W),[me,he]=(0,t.v)(),{tooltipOpen:ue,tooltipLeft:ge,tooltipTop:_e,tooltipData:w,hideTooltip:F,showTooltip:X}=(0,p.A)(),Z=(0,s.useCallback)((y,T)=>{const D=(0,r.A)(y);D&&X({tooltipData:T.data,tooltipLeft:D.x,tooltipTop:D.y-10})},[X]),ve=(0,s.useCallback)(()=>{F()},[F]),xe=(0,s.useCallback)(y=>T=>{Z(T,y)},[Z]),{isValid:Q,message:Se}=ee(j),{resolveGroupColor:Y}=(0,m.j)(),K=(0,s.useMemo)(()=>({value:y=>y.value,sort:(y,T)=>T.value-y.value,fill:({group:y,index:T,color:D})=>Y({group:y,index:T,overrideColor:D})}),[Y]),Ce=(0,s.useMemo)(()=>({showValues:!0,legendValueDisplay:k}),[k]),fe=(0,_.f)(j,Ce),{svgChildren:ye,htmlChildren:Te,otherChildren:Pe}=(0,P.n)(pe,"PieSemiCircleChart"),Ae=(0,s.useMemo)(()=>({thickness:E,clockwise:M}),[E,M]);if((0,l.t)({chartId:H,legendItems:fe,chartType:"pie-semi-circle",isDataValid:Q,metadata:Ae}),!Q)return(0,x.jsx)("div",{className:O["pie-semi-circle-chart"],children:(0,x.jsx)("svg",{width:L,height:L/2,"data-testid":"pie-chart-svg",children:(0,x.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:O.error,children:Se})})});const U=L/2-(V&&B==="top"?he:0),I=Math.min(L/2,U),je=I*(1-E),Le=j.map((y,T)=>({...y,index:T})),Ee=M?-Math.PI/2:Math.PI/2,be=M?Math.PI/2:-Math.PI/2;return(0,x.jsx)(A.O.Provider,{value:{chartId:H,chartWidth:L,chartHeight:I},children:(0,x.jsxs)("div",{className:(0,a.A)("pie-semi-circle-chart",O["pie-semi-circle-chart"],de),"data-testid":"pie-chart-container",style:{display:"flex",flexDirection:V&&B==="top"?"column-reverse":"column"},children:[(0,x.jsx)("svg",{width:L,height:I,viewBox:`0 0 ${L} ${U}`,"data-testid":"pie-chart-svg",children:(0,x.jsxs)(o.A,{top:U,left:L/2,children:[(0,x.jsx)(d.A,{data:Le,pieValue:K.value,outerRadius:I,innerRadius:je,cornerRadius:3,padAngle:q,startAngle:Ee,endAngle:be,pieSort:K.sort,children:y=>y.arcs.map(T=>(0,x.jsx)("g",{onMouseMove:xe(T),onMouseLeave:ve,children:(0,x.jsx)("path",{d:y.path(T)||"",fill:K.fill(T.data),"data-testid":"pie-segment"})},T.data.label))}),(0,x.jsxs)(o.A,{children:[(0,x.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:O.label,children:le}),(0,x.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:O.note,children:ce})]}),ye]})}),ne&&ue&&w&&(0,x.jsx)(v.R,{data:{label:w.label,value:w.value,valueDisplay:w.valueDisplay},top:_e||0,left:ge||0}),V&&(0,x.jsx)(g.s,{orientation:se,position:B,alignment:oe,maxWidth:re,textOverflow:ae,shape:ie,ref:me,chartId:H}),Te,Pe]})})},G=j=>(0,s.useContext)(i.m)?(0,x.jsx)(z,{...j}):(0,x.jsx)(i.S,{children:(0,x.jsx)(z,{...j})});G.displayName="PieSemiCircleChart";const Oe=(0,S.E)(G,{Legend:g.s,SVG:u.d,HTML:C.a}),te=(0,S.E)((0,b.F)(G),{Legend:g.s,SVG:u.d,HTML:C.a})}),"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":((f,h,e)=>{e.r(h),e.d(h,{CompositionAPI:()=>A,CustomLegendPositioning:()=>g,Default:()=>l,ErrorStates:()=>C,Responsiveness:()=>u,WithCompositionLegend:()=>_,WithLegend:()=>S,WithTooltips:()=>i,__namedExportsOrder:()=>b,default:()=>m});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),p=e("../charts/src/stories/legend-config.tsx"),a=e("../charts/src/stories/sample-data/index.ts"),s=e("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:s.A,parameters:{layout:"centered"},decorators:[d.OI],argTypes:{...d.xo,...c.jW,...p.r,width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},l={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:a.f2,label:"OS",note:"Windows +10%",clockwise:!0}},i={args:{...l.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},S={args:{...l.args,showLegend:!0}},_={render:v=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(s.A,{width:400,data:v.data,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:v.legendPosition||"bottom",legendOrientation:v.legendOrientation||"horizontal",legendAlignment:v.legendAlignment||"center",legendMaxWidth:v.legendMaxWidth,legendTextOverflow:v.legendTextOverflow||"wrap"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(s.A,{width:400,data:v.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(s.A.Legend,{position:v.legendPosition||"bottom",orientation:v.legendOrientation||"horizontal",alignment:v.legendAlignment||"center",maxWidth:v.legendMaxWidth,textOverflow:v.legendTextOverflow||"wrap"})})]})]}),args:{data:a.f2},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},g={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},P={...l.args,resize:"both"};delete P.width;const u={args:P,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},C={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(s.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(s.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(s.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(s.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},A={render:v=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(s.A,{width:400,data:v.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(s.A.SVG,{children:(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(s.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(s.A,{width:400,data:v.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(s.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(s.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(s.A,{width:400,data:v.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:a.f2},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},b=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...S.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((f,h,e)=>{e.d(h,{a:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,r.jsx)(r.Fragment,{children:d});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((f,h,e)=>{e.d(h,{d:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:d})=>(0,r.jsx)(r.Fragment,{children:d});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((f,h,e)=>{e.d(h,{n:()=>d});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(c,p){return(0,o.useMemo)(()=>{const a=[],s=[],t=[];return o.Children.forEach(c,n=>{if((0,o.isValidElement)(n)){const l=n.type?.displayName;l===`${p}.SVG`||l==="Chart.SVG"?n.props?.children&&o.Children.forEach(n.props.children,i=>{a.push(i)}):l===`${p}.HTML`||l==="Chart.HTML"?n.props?.children&&o.Children.forEach(n.props.children,i=>{s.push(i)}):n.type===r.A?a.push(n):t.push(n)}}),{svgChildren:a,htmlChildren:s,otherChildren:t}},[c,p])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((f,h,e)=>{e.d(h,{R:()=>n});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var p=o()(d.A,c);const a=d.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:m})=>(0,s.jsxs)(s.Fragment,{children:[m?.label,": ",m?.valueDisplay||m?.value]}),n=({data:m,top:l,left:i,component:S=t,children:_,className:g})=>(0,s.jsx)("div",{className:a.tooltip,style:{top:l,left:i},role:"tooltip",children:_||m&&(0,s.jsx)(S,{data:m,className:g})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((f,h,e)=>{e.d(h,{v:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({initialHeight:d=0}={}){const[c,p]=(0,r.useState)(d),a=(0,r.useRef)(null);return[(0,r.useCallback)(t=>{if(a.current&&(a.current.disconnect(),a.current=null),t){const n=()=>{p(t.getBoundingClientRect().height||0)};n();const m=new window.ResizeObserver(n);m.observe(t),a.current=m}},[]),c]}}),"../charts/src/stories/legend-config.tsx":((f,h,e)=>{e.d(h,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((f,h,e)=>{e.d(h,{E:()=>o});var r=e("../number-formatters/src/index.ts");const o=d=>(0,r.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}),"../charts/src/utils/get-styles.ts":((f,h,e)=>{e.d(h,{c0:()=>r,gO:()=>o,jU:()=>d});function r(c,p,a){const s=a?.lineChart?.lineStyles?.[c.options?.type],t=a?.seriesLineStyles?.[p%a.seriesLineStyles.length];return c.options?.seriesLineStyle??s??t??{}}function o(c,p,a){return c.options?.stroke??a[p%a.length]}function d(c,p,a,s){const t=c.options?.legendShapeStyle??{},n=s==="line"?r(c,p,a):{},m=a.legendShapeStyles?.[p],l={...t,...n};return Object.values(l).some(i=>i!=null&&i!=="")?{shapeStyles:l}:{shapeStyles:m??{}}}})}]);
