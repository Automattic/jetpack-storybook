"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6937],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":((P,m,e)=>{e.d(m,{A:()=>h});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),i=c()(r());i.push([P.id,".y2tHU90POHGASQJWZmDo{display:flex;flex-direction:column;text-align:center;gap:20px}.P5wul1tUOMxydSPv_9Zo{flex-direction:column-reverse}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{margin-bottom:0;font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{margin-top:0;font-size:14px}",""]),i.locals={"pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo","pie-semi-circle-chart--legend-top":"P5wul1tUOMxydSPv_9Zo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const h=i}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((P,m,e)=>{e.d(m,{A:()=>h});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),c=e.n(d),i=c()(r());i.push([P.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),i.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const h=i}),"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx":((P,m,e)=>{e.d(m,{G:()=>ue,A:()=>ge});var s=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),_=e("../../../node_modules/.pnpm/@wordpress+i18n@6.10.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),l=e("../charts/src/components/legend/legend.tsx"),a=e("../charts/src/components/tooltip/base-tooltip.tsx"),p=e("../charts/src/hooks/use-element-height.ts"),v=e("../charts/src/hooks/use-interactive-legend-data.ts"),x=e("../charts/src/hooks/use-prefers-reduced-motion.ts"),C=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),y=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),f=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),T=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),b=e("../charts/src/utils/create-composition.ts"),E=e("../charts/src/charts/private/chart-composition/use-chart-children.ts"),j=e("../charts/src/charts/private/chart-composition/chart-svg.tsx"),O=e("../charts/src/charts/private/chart-composition/chart-html.tsx"),u=e("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),ie=e("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),le=e("../charts/src/charts/private/with-responsive/with-responsive.tsx"),de=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ce=e.n(de),Z=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),H={};H.insert="head",H.singleton=!1;var $e=ce()(Z.A,H);const w=Z.A.locals||{};var g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const pe=_.__,me=.03,he=L=>L.length?L.some(D=>D.percentage<0||D.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:L.reduce((D,I)=>D+I.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},Q=({data:L,chartId:K,width:M=400,thickness:D=.4,clockwise:I=!0,withTooltips:k=!1,showLegend:G=!1,legendOrientation:_e="horizontal",legendPosition:V="bottom",legendAlignment:ve="center",legendMaxWidth:xe,legendTextOverflow:fe="wrap",legendItemClassName:Ce,legendShape:ye="circle",legendValueDisplay:Y="percentage",legendInteractive:$=!1,label:Se,animation:Pe,note:Te,className:Ae,children:be,tooltipOffsetX:X=0,tooltipOffsetY:J=-15})=>{const R=(0,C.R)(K),[je,z]=(0,p.v)(),{tooltipOpen:Ee,tooltipLeft:Le,tooltipTop:Me,tooltipData:q,hideTooltip:ee,showTooltip:te}=(0,i.A)(),{containerRef:Oe,TooltipInPortal:De}=(0,h.A)({detectBounds:!0,scroll:!0,debounce:0}),ne=(0,t.useCallback)((S,A)=>{const B=(0,s.A)(S);if(B){const Ye=G&&V==="top"?z:0;te({tooltipData:A.data,tooltipLeft:B.x+X,tooltipTop:B.y+Ye+J})}},[te,X,J,G,V,z]),we=(0,t.useCallback)(()=>{ee()},[ee]),Ie=(0,t.useCallback)(S=>A=>{ne(A,S)},[ne]),{isValid:se,message:Re}=he(L),{getElementStyles:re,isSeriesVisible:We}=(0,y.j)(),{visibleData:Ge,allSegmentsHidden:ae,legendData:Ve}=(0,v.j)({data:L,chartId:R,legendInteractive:$,isSeriesVisible:We}),N=(0,t.useMemo)(()=>({value:S=>S.value,sort:(S,A)=>A.value-S.value,fill:S=>re({data:S,index:S.index}).color}),[re]),Be=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:Y}),[Y]),He=(0,n.f)(Ve,Be),{svgChildren:Ue,htmlChildren:Ke,otherChildren:ke}=(0,E.n)(be,"PieSemiCircleChart"),ze=(0,t.useMemo)(()=>({thickness:D,clockwise:I}),[D,I]);(0,f.t)({chartId:R,legendItems:He,chartType:"pie-semi-circle",isDataValid:se,metadata:ze});const Ne=(0,x.j)();if(!se)return(0,g.jsx)("div",{className:w["pie-semi-circle-chart"],children:(0,g.jsx)("svg",{width:M,height:M/2,"data-testid":"pie-chart-svg",children:(0,g.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:w.error,children:Re})})});const F=M/2-(G&&V==="top"?z:0),W=Math.min(M/2,F),oe=W*(1-D),Fe=Ge.map(S=>{const A=L.findIndex(B=>B.label===S.label);return{...S,index:A>=0?A:0}}),Ze=I?-Math.PI/2:Math.PI/2,Qe=I?Math.PI/2:-Math.PI/2;return(0,g.jsx)(ie.O.Provider,{value:{chartId:R,chartWidth:M,chartHeight:W},children:(0,g.jsxs)("div",{ref:Oe,className:(0,o.A)("pie-semi-circle-chart",w["pie-semi-circle-chart"],{[w["pie-semi-circle-chart--legend-top"]]:G&&V==="top"},Ae),"data-testid":"pie-chart-container",children:[(0,g.jsxs)("svg",{width:M,height:W,viewBox:`0 0 ${M} ${F}`,"data-testid":"pie-chart-svg",children:[(0,g.jsx)("defs",{children:(0,g.jsx)(u.A,{id:`radial-wipe-${R}`,radius:W,innerRadius:oe,startAngle:"-180deg",wipePercentage:50})}),(0,g.jsx)(r.A,{top:F,left:M/2,mask:Pe&&!Ne?`url(#radial-wipe-${R})`:null,children:ae?(0,g.jsx)("text",{textAnchor:"middle",y:-W/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:pe("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.A,{data:Fe,pieValue:N.value,outerRadius:W,innerRadius:oe,cornerRadius:3,padAngle:me,startAngle:Ze,endAngle:Qe,pieSort:N.sort,children:S=>S.arcs.map(A=>(0,g.jsx)("g",{onMouseMove:k?Ie(A):void 0,onMouseLeave:k?we:void 0,children:(0,g.jsx)("path",{d:S.path(A)||"",fill:N.fill(A.data),"data-testid":"pie-segment"})},A.data.label))}),(0,g.jsxs)(r.A,{children:[(0,g.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:w.label,children:Se}),(0,g.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:w.note,children:Te})]}),!ae&&Ue]})})]}),k&&Ee&&q&&(0,g.jsx)(De,{top:Me||0,left:Le||0,children:(0,g.jsx)("div",{role:"tooltip",children:(0,g.jsx)(a.R,{data:q,top:0,left:0,renderContainer:!1})})}),G&&(0,g.jsx)(l.s,{orientation:_e,position:V,alignment:ve,maxWidth:xe,textOverflow:fe,legendItemClassName:Ce,shape:ye,ref:je,chartId:R,interactive:$}),Ke,ke]})})},U=L=>(0,t.useContext)(T.m)?(0,g.jsx)(Q,{...L}):(0,g.jsx)(T.S,{children:(0,g.jsx)(Q,{...L})});U.displayName="PieSemiCircleChart";const ue=(0,b.E)(U,{Legend:l.s,SVG:j.d,HTML:O.a}),ge=(0,b.E)((0,le.F)(U),{Legend:l.s,SVG:j.d,HTML:O.a})}),"../charts/src/charts/pie-semi-circle-chart/stories/index.stories.tsx":((P,m,e)=>{e.r(m),e.d(m,{Animation:()=>p,CompositionAPI:()=>j,CustomLegendPositioning:()=>f,Default:()=>a,ErrorStates:()=>E,InteractiveLegend:()=>y,Responsiveness:()=>b,WithCompositionLegend:()=>C,WithLegend:()=>x,WithTooltips:()=>v,__namedExportsOrder:()=>O,default:()=>l});var s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),c=e("../charts/src/stories/chart-decorator.tsx"),i=e("../charts/src/stories/theme-config.tsx"),h=e("../charts/src/stories/legend-config.tsx"),_=e("../charts/src/stories/sample-data/index.ts"),o=e("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l={title:"JS Packages/Charts Library/Charts/Pie Semi Circle Chart",component:o.A,parameters:{layout:"centered"},decorators:[c.OI],argTypes:{...c.xo,...i.jW,...h.r,width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},a={args:{...i.In,containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:_.f2,label:"OS",note:"Windows +10%",clockwise:!0}},p={args:{...a.args,animation:!0}},v={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},x={args:{...a.args,showLegend:!0}},C={render:u=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(o.A,{width:400,data:u.data,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:u.legendPosition||"bottom",legendOrientation:u.legendOrientation||"horizontal",legendAlignment:u.legendAlignment||"center",legendMaxWidth:u.legendMaxWidth,legendTextOverflow:u.legendTextOverflow||"wrap"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(o.A,{width:400,data:u.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,t.jsx)(o.A.Legend,{position:u.legendPosition||"bottom",orientation:u.legendOrientation||"horizontal",alignment:u.legendAlignment||"center",maxWidth:u.legendMaxWidth,textOverflow:u.legendTextOverflow||"wrap"})})]})]}),args:{data:_.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},y={render:u=>(0,t.jsx)(d.S,{children:(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)("h3",{children:"Interactive Semi-Circle Chart"}),(0,t.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages adjust automatically."}),(0,t.jsx)(o.G,{chartId:"interactive-semi-circle-chart",width:u.width||400,data:u.data,label:"Performance Metrics",note:"Click legend to filter",showLegend:!0,legendInteractive:!0,legendPosition:u.legendPosition||"bottom",legendOrientation:u.legendOrientation||"horizontal",legendAlignment:u.legendAlignment||"center"})]})}),args:{data:_.f2,width:400,containerHeight:"500px"},parameters:{docs:{description:{story:"Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider."}}}},f={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},T={...a.args,resize:"both"};delete T.width;const b={args:T,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},E={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{width:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Zero Total Percentage"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(o.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},j={render:u=>(0,t.jsxs)("div",{style:{padding:"2rem"},children:[(0,t.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,t.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom SVG Elements"}),(0,t.jsxs)(o.A,{width:400,data:u.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,t.jsx)(o.A.SVG,{children:(0,t.jsxs)(s.A,{children:[(0,t.jsx)(r.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,t.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,t.jsx)(o.A.HTML,{children:(0,t.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,t.jsx)(o.A,{width:400,data:u.data,label:"Performance",note:"Latest Results",children:(0,t.jsx)(o.A.HTML,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,t.jsx)(o.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,t.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,t.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,t.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,t.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,t.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,t.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,t.jsx)(o.A,{width:400,data:u.data,label:"Legacy Mode",note:"Still works!",children:(0,t.jsxs)(s.A,{children:[(0,t.jsx)(r.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,t.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:_.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},O=["Default","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    containerWidth: '600px',
    containerHeight: '325px',
    resize: 'none',
    thickness: 0.4,
    data,
    label: 'OS',
    note: 'Windows +10%',
    clockwise: true
  }
}`,...a.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...p.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <GlobalChartsProvider>
            <div style={{
      padding: '20px'
    }}>
                <h3>Interactive Semi-Circle Chart</h3>
                <p style={{
        marginBottom: '20px',
        color: '#666'
      }}>
                    Click legend items to show/hide segments. Percentages adjust automatically.
                </p>
                <PieSemiCircleChartUnresponsive chartId="interactive-semi-circle-chart" width={args.width || 400} data={args.data} label="Performance Metrics" note="Click legend to filter" showLegend={true} legendInteractive={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} />
            </div>
        </GlobalChartsProvider>,
  args: {
    data,
    width: 400,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
  argTypes: {
    legendInteractive: {
      table: {
        disable: true
      }
    }
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
}`,...j.parameters?.docs?.source}}}}),"../charts/src/charts/private/chart-composition/chart-html.tsx":((P,m,e)=>{e.d(m,{a:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:d})=>(0,s.jsx)(s.Fragment,{children:d});r.displayName="Chart.HTML";try{r.displayName="Chart.HTML",r.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/charts/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/charts/private/chart-composition/chart-svg.tsx":((P,m,e)=>{e.d(m,{d:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({children:d})=>(0,s.jsx)(s.Fragment,{children:d});r.displayName="Chart.SVG";try{r.displayName="Chart.SVG",r.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/charts/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/charts/private/chart-composition/use-chart-children.ts":((P,m,e)=>{e.d(m,{n:()=>d});var s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(c,i){return(0,r.useMemo)(()=>{const h=[],_=[],o=[];return r.Children.forEach(c,t=>{if((0,r.isValidElement)(t)){const l=t.type?.displayName;l===`${i}.SVG`||l==="Chart.SVG"?t.props?.children&&r.Children.forEach(t.props.children,a=>{h.push(a)}):l===`${i}.HTML`||l==="Chart.HTML"?t.props?.children&&r.Children.forEach(t.props.children,a=>{_.push(a)}):t.type===s.A?h.push(t):o.push(t)}}),{svgChildren:h,htmlChildren:_,otherChildren:o}},[c,i])}}),"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx":((P,m,e)=>{e.d(m,{A:()=>d});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r({id:c,radius:i,innerRadius:h=0,durationMs:_=1e3,wipePercentage:o=100,direction:t="clockwise",startAngle:n="-90deg"}){const l=(i-h)*2+1,a=t==="clockwise"?-1:1,v=`${0<o&&o<=100?_*(100/o):0}ms`;return(0,s.jsx)("mask",{id:c,children:(0,s.jsx)("circle",{cx:0,cy:0,r:i,pathLength:"100",fill:"white",stroke:"black",strokeWidth:l,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${n}) scaleY(${a})`},children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:v,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${o/100};1`})})})}const d=r;try{r.displayName="RadialWipeAnimation",r.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:r.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((P,m,e)=>{e.d(m,{f:()=>t});var s=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),c=e("../charts/src/utils/format-percentage.ts");function i(n,l,a="percentage"){if(!l||a==="none")return"";if("percentage"in n){const p=n;switch(a){case"percentage":return(0,c.E)(p.percentage);case"value":return(0,s.ZV)(p.value);case"valueDisplay":return p.valueDisplay||(0,s.ZV)(p.value);default:return""}}return"value"in n&&n.value!==null?(0,s.ZV)(n.value):""}function h(n,l,a,p,v){if(l){const x=a||p;if(x)return{...n,glyphSize:v,renderGlyph:x}}return n}function _(n,l,a,p,v,x,C){const y=(f,T)=>{const{color:b,glyph:E,shapeStyles:j}=l({data:f,index:T,legendShape:C}),O={label:f.label,value:a?f.data?.length?.toString()||"0":"",color:b,shapeStyle:j};return h(O,p,E,x,v)};return n.map(y)}function o(n,l,a,p,v,x,C,y){const f=(T,b)=>{const{color:E,glyph:j,shapeStyles:O}=l({data:T,index:b,legendShape:y}),u={label:T.label,value:i(T,a,p),color:E,shapeStyle:O};return h(u,v,j,C,x)};return n.map(f)}function t(n,l={},a){const{showValues:p=!1,legendValueDisplay:v="percentage",withGlyph:x=!1,glyphSize:C=8,renderGlyph:y}=l,{getElementStyles:f}=(0,d.j)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?_(n,f,p,x,C,y,a):o(n,f,p,v,x,C,y,a),[n,f,p,v,x,C,y,a])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((P,m,e)=>{e.d(m,{R:()=>n});var s=e("../number-formatters/src/index.ts"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),i={};i.insert="head",i.singleton=!1;var h=d()(c.A,i);const _=c.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=({data:l})=>(0,o.jsxs)(o.Fragment,{children:[l?.label,": ",l?.valueDisplay||(0,s.ZV)(l?.value)]}),n=({data:l,top:a,left:p,component:v=t,children:x,className:C,style:y,renderContainer:f=!0})=>{const T=x||l&&(0,o.jsx)(v,{data:l,className:C});return f?(0,o.jsx)("div",{className:_.tooltip,style:{top:a,left:p,...y},role:"tooltip",children:T}):T};try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || formatNumber( data?.value ) }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((P,m,e)=>{e.d(m,{v:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r({initialHeight:d=0}={}){const[c,i]=(0,s.useState)(d),h=(0,s.useRef)(null);return[(0,s.useCallback)(o=>{if(h.current&&(h.current.disconnect(),h.current=null),o){const t=()=>{i(o.getBoundingClientRect().height||0)};t();const n=new window.ResizeObserver(t);n.observe(o),h.current=n}},[]),c]}}),"../charts/src/hooks/use-interactive-legend-data.ts":((P,m,e)=>{e.d(m,{j:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=({data:d,chartId:c,legendInteractive:i,isSeriesVisible:h})=>{const _=(0,s.useMemo)(()=>{if(!c||!i)return d;const n=d.filter(a=>h(c,a.label));if(n.length===0)return[];const l=n.reduce((a,p)=>a+p.value,0);return n.map(a=>({...a,percentage:l>0?a.value/l*100:0}))},[d,c,h,i]),o=(0,s.useMemo)(()=>i&&_.length===0,[i,_]),t=(0,s.useMemo)(()=>!i||!c?d:d.map(n=>h(c,n.label)&&_.find(p=>p.label===n.label)||n),[d,_,i,c,h]);return{visibleData:_,allSegmentsHidden:o,legendData:t}}}),"../charts/src/stories/legend-config.tsx":((P,m,e)=>{e.d(m,{r:()=>s});const s={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{s.displayName="legendArgTypes",s.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:s.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((P,m,e)=>{e.d(m,{E:()=>r});var s=e("../number-formatters/src/index.ts");const r=d=>(0,s.ZV)(d/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
