"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":((f,p,t)=>{t.d(p,{A:()=>u});var s=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(s),a=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),i=t.n(a),l=i()(n());l.push([f.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center;gap:20px}.eZbCQIWQICa2AgDw67bi{flex-direction:column-reverse}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),l.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart--legend-top":"eZbCQIWQICa2AgDw67bi",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const u=l}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((f,p,t)=>{t.d(p,{A:()=>u});var s=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(s),a=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),i=t.n(a),l=i()(n());l.push([f.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),l.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=l}),"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":((f,p,t)=>{t.d(p,{G:()=>ue,A:()=>ge});var s=t("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=t("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),i=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),l=t("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),u=t("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),m=t("../../../node_modules/.pnpm/@wordpress+i18n@6.8.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),o=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=t("../charts/src/hooks/use-element-height.ts"),g=t("../charts/src/hooks/use-interactive-legend-data.ts"),r=t("../charts/src/hooks/use-prefers-reduced-motion.ts"),v=t("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),C=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),A=t("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),y=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=t("../charts/src/utils/create-composition.ts"),T=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),M=t("../charts/src/components/legend/legend.tsx"),w=t("../charts/src/components/private/chart-composition/use-chart-children.ts"),b=t("../charts/src/components/private/chart-composition/chart-svg.tsx"),L=t("../charts/src/components/private/chart-composition/chart-html.tsx"),B=t("../charts/src/components/private/radial-wipe-animation/radial-wipe-animation.tsx"),c=t("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),ie=t("../charts/src/components/private/with-responsive/with-responsive.tsx"),le=t("../charts/src/components/tooltip/base-tooltip.tsx"),de=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ce=t.n(de),Q=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),H={};H.insert="head",H.singleton=!1;var Ye=ce()(Q.A,H);const O=Q.A.locals||{};var d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const pe=m.__,me=.03,he=P=>P.length?P.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:P.reduce((E,D)=>E+D.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},Z=({data:P,chartId:K,width:j=400,thickness:E=.4,clockwise:D=!0,withTooltips:N=!1,showLegend:W=!1,legendOrientation:_e="horizontal",legendPosition:G="bottom",legendAlignment:ve="center",legendMaxWidth:xe,legendTextOverflow:fe="wrap",legendItemClassName:Ce,legendShape:ye="circle",legendValueDisplay:X="percentage",legendInteractive:Y=!1,label:Se,animation:Te,note:Pe,className:Ae,children:je,tooltipOffsetX:$=0,tooltipOffsetY:J=-15})=>{const I=(0,v.R)(K),[be,U]=(0,h.v)(),{tooltipOpen:Le,tooltipLeft:Ee,tooltipTop:we,tooltipData:q,hideTooltip:ee,showTooltip:te}=(0,l.A)(),{containerRef:Me,TooltipInPortal:Oe}=(0,u.A)({detectBounds:!0,scroll:!0,debounce:0}),ne=(0,e.useCallback)((_,x)=>{const V=(0,s.A)(_);if(V){const Xe=W&&G==="top"?U:0;te({tooltipData:x.data,tooltipLeft:V.x+$,tooltipTop:V.y+Xe+J})}},[te,$,J,W,G,U]),De=(0,e.useCallback)(()=>{ee()},[ee]),Ie=(0,e.useCallback)(_=>x=>{ne(x,_)},[ne]),{isValid:se,message:Re}=he(P),{getElementStyles:oe,isSeriesVisible:We}=(0,C.j)(),{visibleData:Ge,allSegmentsHidden:ae,legendData:Ve}=(0,g.j)({data:P,chartId:I,legendInteractive:Y,isSeriesVisible:We}),z=(0,e.useMemo)(()=>({value:_=>_.value,sort:(_,x)=>x.value-_.value,fill:_=>oe({data:_,index:_.index}).color}),[oe]),Be=(0,e.useMemo)(()=>({showValues:!0,legendValueDisplay:X}),[X]),He=(0,T.f)(Ve,Be),{svgChildren:ke,htmlChildren:Ke,otherChildren:Ne}=(0,w.n)(je,"PieSemiCircleChart"),Ue=(0,e.useMemo)(()=>({thickness:E,clockwise:D}),[E,D]);(0,A.t)({chartId:I,legendItems:He,chartType:"pie-semi-circle",isDataValid:se,metadata:Ue});const ze=(0,r.j)();if(!se)return(0,d.jsx)("div",{className:O["pie-semi-circle-chart"],children:(0,d.jsx)("svg",{width:j,height:j/2,"data-testid":"pie-chart-svg",children:(0,d.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:O.error,children:Re})})});const F=j/2-(W&&G==="top"?U:0),R=Math.min(j/2,F),re=R*(1-E),Fe=Ge.map(_=>{const x=P.findIndex(V=>V.label===_.label);return{..._,index:x>=0?x:0}}),Qe=D?-Math.PI/2:Math.PI/2,Ze=D?Math.PI/2:-Math.PI/2;return(0,d.jsx)(c.O.Provider,{value:{chartId:I,chartWidth:j,chartHeight:R},children:(0,d.jsxs)("div",{ref:Me,className:(0,o.A)("pie-semi-circle-chart",O["pie-semi-circle-chart"],{[O["pie-semi-circle-chart--legend-top"]]:W&&G==="top"},Ae),"data-testid":"pie-chart-container",children:[(0,d.jsxs)("svg",{width:j,height:R,viewBox:`0 0 ${j} ${F}`,"data-testid":"pie-chart-svg",children:[(0,d.jsx)("defs",{children:(0,d.jsx)(B.A,{id:`radial-wipe-${I}`,radius:R,innerRadius:re,startAngle:"-180deg",wipePercentage:50})}),(0,d.jsx)(n.A,{top:F,left:j/2,mask:Te&&!ze?`url(#radial-wipe-${I})`:null,children:ae?(0,d.jsx)("text",{textAnchor:"middle",y:-R/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:pe("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.A,{data:Fe,pieValue:z.value,outerRadius:R,innerRadius:re,cornerRadius:3,padAngle:me,startAngle:Qe,endAngle:Ze,pieSort:z.sort,children:_=>_.arcs.map(x=>(0,d.jsx)("g",{onMouseMove:N?Ie(x):void 0,onMouseLeave:N?De:void 0,children:(0,d.jsx)("path",{d:_.path(x)||"",fill:z.fill(x.data),"data-testid":"pie-segment"})},x.data.label))}),(0,d.jsxs)(n.A,{children:[(0,d.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:O.label,children:Se}),(0,d.jsx)(i.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:O.note,children:Pe})]}),!ae&&ke]})})]}),N&&Le&&q&&(0,d.jsx)(Oe,{top:we||0,left:Ee||0,children:(0,d.jsx)("div",{role:"tooltip",children:(0,d.jsx)(le.R,{data:q,top:0,left:0,renderContainer:!1})})}),W&&(0,d.jsx)(M.s,{orientation:_e,position:G,alignment:ve,maxWidth:xe,textOverflow:fe,legendItemClassName:Ce,shape:ye,ref:be,chartId:I,interactive:Y}),Ke,Ne]})})},k=P=>(0,e.useContext)(y.m)?(0,d.jsx)(Z,{...P}):(0,d.jsx)(y.S,{children:(0,d.jsx)(Z,{...P})});k.displayName="PieSemiCircleChart";const ue=(0,S.E)(k,{Legend:M.s,SVG:b.d,HTML:L.a}),ge=(0,S.E)((0,ie.F)(k),{Legend:M.s,SVG:b.d,HTML:L.a})}),"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":((f,p,t)=>{t.r(p),t.d(p,{Animation:()=>v,CompositionAPI:()=>L,CustomLegendPositioning:()=>T,Default:()=>r,ErrorStates:()=>b,InteractiveLegend:()=>S,Responsiveness:()=>w,WithCompositionLegend:()=>y,WithLegend:()=>A,WithTooltips:()=>C,__namedExportsOrder:()=>B,default:()=>g});var s=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),a=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),i=t("../charts/src/stories/chart-decorator.tsx"),l=t("../charts/src/stories/theme-config.tsx"),u=t("../charts/src/stories/legend-config.tsx"),m=t("../charts/src/stories/sample-data/index.ts"),o=t("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:o.A,parameters:{layout:"centered"},decorators:[i.OI],argTypes:{...i.xo,...l.jW,...u.r,width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},r={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:m.f2,label:"OS",note:"Windows +10%",clockwise:!0}},v={args:{...r.args,animation:!0}},C={args:{...r.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},A={args:{...r.args,showLegend:!0}},y={render:c=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,e.jsx)(o.A,{width:400,data:c.data,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:c.legendPosition||"bottom",legendOrientation:c.legendOrientation||"horizontal",legendAlignment:c.legendAlignment||"center",legendMaxWidth:c.legendMaxWidth,legendTextOverflow:c.legendTextOverflow||"wrap"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Composition API with Legend Component"}),(0,e.jsx)(o.A,{width:400,data:c.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,e.jsx)(o.A.Legend,{position:c.legendPosition||"bottom",orientation:c.legendOrientation||"horizontal",alignment:c.legendAlignment||"center",maxWidth:c.legendMaxWidth,textOverflow:c.legendTextOverflow||"wrap"})})]})]}),args:{data:m.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},S={render:c=>(0,e.jsx)(a.S,{children:(0,e.jsxs)("div",{style:{padding:"20px"},children:[(0,e.jsx)("h3",{children:"Interactive Semi-Circle Chart"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages adjust automatically."}),(0,e.jsx)(o.G,{chartId:"interactive-semi-circle-chart",width:c.width||400,data:c.data,label:"Performance Metrics",note:"Click legend to filter",showLegend:!0,legendInteractive:!0,legendPosition:c.legendPosition||"bottom",legendOrientation:c.legendOrientation||"horizontal",legendAlignment:c.legendAlignment||"center"})]})}),args:{data:m.f2,width:400,containerHeight:"500px"},parameters:{docs:{description:{story:"Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider."}}}},T={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},M={...r.args,resize:"both"};delete M.width;const w={args:M,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},b={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(o.A,{width:300,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Total Percentage"}),(0,e.jsx)(o.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(o.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(o.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},L={render:c=>(0,e.jsxs)("div",{style:{padding:"2rem"},children:[(0,e.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,e.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom SVG Elements"}),(0,e.jsxs)(o.A,{width:400,data:c.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,e.jsx)(o.A.SVG,{children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(n.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,e.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,e.jsx)(o.A.HTML,{children:(0,e.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,e.jsx)(o.A,{width:400,data:c.data,label:"Performance",note:"Latest Results",children:(0,e.jsx)(o.A.HTML,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,e.jsx)(o.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,e.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,e.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,e.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,e.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,e.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,e.jsx)(o.A,{width:400,data:c.data,label:"Legacy Mode",note:"Still works!",children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(n.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,e.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:m.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},B=["Default","Animation","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
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
}`,...C.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...A.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((f,p,t)=>{t.d(p,{a:()=>n});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:a})=>(0,s.jsx)(s.Fragment,{children:a});n.displayName="Chart.HTML";try{n.displayName="Chart.HTML",n.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((f,p,t)=>{t.d(p,{d:()=>n});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:a})=>(0,s.jsx)(s.Fragment,{children:a});n.displayName="Chart.SVG";try{n.displayName="Chart.SVG",n.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((f,p,t)=>{t.d(p,{n:()=>a});var s=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a(i,l){return(0,n.useMemo)(()=>{const u=[],m=[],o=[];return n.Children.forEach(i,e=>{if((0,n.isValidElement)(e)){const g=e.type?.displayName;g===`${l}.SVG`||g==="Chart.SVG"?e.props?.children&&n.Children.forEach(e.props.children,r=>{u.push(r)}):g===`${l}.HTML`||g==="Chart.HTML"?e.props?.children&&n.Children.forEach(e.props.children,r=>{m.push(r)}):e.type===s.A?u.push(e):o.push(e)}}),{svgChildren:u,htmlChildren:m,otherChildren:o}},[i,l])}}),"../charts/src/components/private/radial-wipe-animation/radial-wipe-animation.tsx":((f,p,t)=>{t.d(p,{A:()=>a});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n({id:i,radius:l,innerRadius:u=0,durationMs:m=1e3,wipePercentage:o=100,direction:e="clockwise",startAngle:h="-90deg"}){const g=(l-u)*2+1,r=e==="clockwise"?-1:1,C=`${0<o&&o<=100?m*(100/o):0}ms`;return(0,s.jsx)("mask",{id:i,children:(0,s.jsx)("circle",{cx:0,cy:0,r:l,pathLength:"100",fill:"white",stroke:"black",strokeWidth:g,strokeDasharray:"100, 1000",strokeDashoffset:"0",style:{transform:`rotate(${h}) scaleY(${r})`},children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"100.1",dur:C,fill:"freeze",calcMode:"spline",keySplines:"0.42 0 0.58 1;0 0 1 1",keyTimes:`0;${o/100};1`})})})}const a=n;try{n.displayName="RadialWipeAnimation",n.__docgenInfo={description:"Renders a SVG mask that creates a radial wipe animation effect.",displayName:"RadialWipeAnimation",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},innerRadius:{defaultValue:{value:"0"},description:"",name:"innerRadius",required:!1,type:{name:"number"}},durationMs:{defaultValue:{value:"1000"},description:"",name:"durationMs",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90deg"},description:"",name:"startAngle",required:!1,type:{name:"Angle"}},direction:{defaultValue:{value:"clockwise"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"clockwise"'},{value:'"counter-clockwise"'}]}},wipePercentage:{defaultValue:{value:"100"},description:"",name:"wipePercentage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"]={docgenInfo:n.__docgenInfo,name:"RadialWipeAnimation",path:"../charts/src/components/private/radial-wipe-animation/radial-wipe-animation.tsx#RadialWipeAnimation"})}catch{}}),"../charts/src/components/tooltip/base-tooltip.tsx":((f,p,t)=>{t.d(p,{R:()=>e});var s=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(s),a=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),i={};i.insert="head",i.singleton=!1;var l=n()(a.A,i);const u=a.A.locals||{};var m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({data:h})=>(0,m.jsxs)(m.Fragment,{children:[h?.label,": ",h?.valueDisplay||h?.value]}),e=({data:h,top:g,left:r,component:v=o,children:C,className:A,style:y,renderContainer:S=!0})=>{const T=C||h&&(0,m.jsx)(v,{data:h,className:A});return S?(0,m.jsx)("div",{className:u.tooltip,style:{top:g,left:r,...y},role:"tooltip",children:T}):T};try{e.displayName="BaseTooltip",e.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:e.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-interactive-legend-data.ts":((f,p,t)=>{t.d(p,{j:()=>n});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n=({data:a,chartId:i,legendInteractive:l,isSeriesVisible:u})=>{const m=(0,s.useMemo)(()=>{if(!i||!l)return a;const h=a.filter(r=>u(i,r.label));if(h.length===0)return[];const g=h.reduce((r,v)=>r+v.value,0);return h.map(r=>({...r,percentage:g>0?r.value/g*100:0}))},[a,i,u,l]),o=(0,s.useMemo)(()=>l&&m.length===0,[l,m]),e=(0,s.useMemo)(()=>!l||!i?a:a.map(h=>u(i,h.label)&&m.find(v=>v.label===h.label)||h),[a,m,l,i,u]);return{visibleData:m,allSegmentsHidden:o,legendData:e}}}),"../charts/src/stories/legend-config.tsx":((f,p,t)=>{t.d(p,{r:()=>s});const s={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{s.displayName="legendArgTypes",s.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:s.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
