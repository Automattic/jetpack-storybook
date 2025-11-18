"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2946],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss":((C,p,t)=>{t.d(p,{A:()=>u});var s=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(s),o=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=t.n(o),d=l()(n());d.push([C.id,".xQEsZ9upN7GZLvXugRlk{display:flex;flex-direction:column;text-align:center;gap:20px}.eZbCQIWQICa2AgDw67bi{flex-direction:column-reverse}.xQEsZ9upN7GZLvXugRlk .Be4Ltnfp1AL2Hm0Ga98E{margin-bottom:0;font-weight:600;font-size:16px}.xQEsZ9upN7GZLvXugRlk .hawVn9EjXqX20c2t8Lls{margin-top:0;font-size:14px}",""]),d.locals={"pie-semi-circle-chart":"xQEsZ9upN7GZLvXugRlk","pie-semi-circle-chart--legend-top":"eZbCQIWQICa2AgDw67bi",label:"Be4Ltnfp1AL2Hm0Ga98E",note:"hawVn9EjXqX20c2t8Lls"};const u=d}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((C,p,t)=>{t.d(p,{A:()=>u});var s=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(s),o=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),l=t.n(o),d=l()(n());d.push([C.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),d.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=d}),"../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx":((C,p,t)=>{t.d(p,{G:()=>pe,A:()=>me});var s=t("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=t("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),l=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),d=t("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),u=t("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),m=t("../../../node_modules/.pnpm/@wordpress+i18n@6.8.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),r=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=t("../charts/src/hooks/use-element-height.ts"),_=t("../charts/src/hooks/use-interactive-legend-data.ts"),a=t("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),v=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),T=t("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),f=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=t("../charts/src/utils/create-composition.ts"),P=t("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),j=t("../charts/src/components/legend/legend.tsx"),M=t("../charts/src/components/private/chart-composition/use-chart-children.ts"),A=t("../charts/src/components/private/chart-composition/chart-svg.tsx"),L=t("../charts/src/components/private/chart-composition/chart-html.tsx"),V=t("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),i=t("../charts/src/components/private/with-responsive/with-responsive.tsx"),re=t("../charts/src/components/tooltip/base-tooltip.tsx"),ae=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ie=t.n(ae),F=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),H={};H.insert="head",H.singleton=!1;var Fe=ie()(F.A,H);const w=F.A.locals||{};var c=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const le=m.__,de=.03,ce=y=>y.length?y.some(E=>E.percentage<0||E.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:y.reduce((E,O)=>E+O.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},Q=({data:y,chartId:K,width:b=400,thickness:E=.4,clockwise:O=!0,withTooltips:N=!1,showLegend:D=!1,legendOrientation:he="horizontal",legendPosition:I="bottom",legendAlignment:ue="center",legendMaxWidth:ge,legendTextOverflow:_e="wrap",legendItemClassName:ve,legendShape:xe="circle",legendValueDisplay:Z="percentage",legendInteractive:X=!1,label:Ce,note:fe,className:Se,children:ye,tooltipOffsetX:Y=0,tooltipOffsetY:$=-15})=>{const W=(0,a.R)(K),[Te,z]=(0,h.v)(),{tooltipOpen:Pe,tooltipLeft:je,tooltipTop:be,tooltipData:J,hideTooltip:q,showTooltip:ee}=(0,d.A)(),{containerRef:Ae,TooltipInPortal:Le}=(0,u.A)({detectBounds:!0,scroll:!0,debounce:0}),te=(0,e.useCallback)((g,x)=>{const R=(0,s.A)(g);if(R){const ke=D&&I==="top"?z:0;ee({tooltipData:x.data,tooltipLeft:R.x+Y,tooltipTop:R.y+ke+$})}},[ee,Y,$,D,I,z]),Ee=(0,e.useCallback)(()=>{q()},[q]),Me=(0,e.useCallback)(g=>x=>{te(x,g)},[te]),{isValid:ne,message:we}=ce(y),{getElementStyles:se,isSeriesVisible:Oe}=(0,v.j)(),{visibleData:De,allSegmentsHidden:oe,legendData:Ie}=(0,_.j)({data:y,chartId:W,legendInteractive:X,isSeriesVisible:Oe}),U=(0,e.useMemo)(()=>({value:g=>g.value,sort:(g,x)=>x.value-g.value,fill:g=>se({data:g,index:g.index}).color}),[se]),Ge=(0,e.useMemo)(()=>({showValues:!0,legendValueDisplay:Z}),[Z]),Re=(0,P.f)(Ie,Ge),{svgChildren:We,htmlChildren:Ve,otherChildren:He}=(0,M.n)(ye,"PieSemiCircleChart"),Be=(0,e.useMemo)(()=>({thickness:E,clockwise:O}),[E,O]);if((0,T.t)({chartId:W,legendItems:Re,chartType:"pie-semi-circle",isDataValid:ne,metadata:Be}),!ne)return(0,c.jsx)("div",{className:w["pie-semi-circle-chart"],children:(0,c.jsx)("svg",{width:b,height:b/2,"data-testid":"pie-chart-svg",children:(0,c.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:w.error,children:we})})});const k=b/2-(D&&I==="top"?z:0),G=Math.min(b/2,k),Ke=G*(1-E),Ne=De.map(g=>{const x=y.findIndex(R=>R.label===g.label);return{...g,index:x>=0?x:0}}),ze=O?-Math.PI/2:Math.PI/2,Ue=O?Math.PI/2:-Math.PI/2;return(0,c.jsx)(V.O.Provider,{value:{chartId:W,chartWidth:b,chartHeight:G},children:(0,c.jsxs)("div",{ref:Ae,className:(0,r.A)("pie-semi-circle-chart",w["pie-semi-circle-chart"],{[w["pie-semi-circle-chart--legend-top"]]:D&&I==="top"},Se),"data-testid":"pie-chart-container",children:[(0,c.jsx)("svg",{width:b,height:G,viewBox:`0 0 ${b} ${k}`,"data-testid":"pie-chart-svg",children:(0,c.jsx)(n.A,{top:k,left:b/2,children:oe?(0,c.jsx)("text",{textAnchor:"middle",y:-G/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:le("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{data:Ne,pieValue:U.value,outerRadius:G,innerRadius:Ke,cornerRadius:3,padAngle:de,startAngle:ze,endAngle:Ue,pieSort:U.sort,children:g=>g.arcs.map(x=>(0,c.jsx)("g",{onMouseMove:N?Me(x):void 0,onMouseLeave:N?Ee:void 0,children:(0,c.jsx)("path",{d:g.path(x)||"",fill:U.fill(x.data),"data-testid":"pie-segment"})},x.data.label))}),(0,c.jsxs)(n.A,{children:[(0,c.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:w.label,children:Ce}),(0,c.jsx)(l.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:w.note,children:fe})]}),!oe&&We]})})}),N&&Pe&&J&&(0,c.jsx)(Le,{top:be||0,left:je||0,children:(0,c.jsx)("div",{role:"tooltip",children:(0,c.jsx)(re.R,{data:J,top:0,left:0,renderContainer:!1})})}),D&&(0,c.jsx)(j.s,{orientation:he,position:I,alignment:ue,maxWidth:ge,textOverflow:_e,legendItemClassName:ve,shape:xe,ref:Te,chartId:W,interactive:X}),Ve,He]})})},B=y=>(0,e.useContext)(f.m)?(0,c.jsx)(Q,{...y}):(0,c.jsx)(f.S,{children:(0,c.jsx)(Q,{...y})});B.displayName="PieSemiCircleChart";const pe=(0,S.E)(B,{Legend:j.s,SVG:A.d,HTML:L.a}),me=(0,S.E)((0,i.F)(B),{Legend:j.s,SVG:A.d,HTML:L.a})}),"../charts/src/components/pie-semi-circle-chart/stories/index.stories.tsx":((C,p,t)=>{t.r(p),t.d(p,{CompositionAPI:()=>L,CustomLegendPositioning:()=>P,Default:()=>a,ErrorStates:()=>A,InteractiveLegend:()=>S,Responsiveness:()=>M,WithCompositionLegend:()=>f,WithLegend:()=>T,WithTooltips:()=>v,__namedExportsOrder:()=>V,default:()=>_});var s=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=t("../charts/src/stories/chart-decorator.tsx"),d=t("../charts/src/stories/theme-config.tsx"),u=t("../charts/src/stories/legend-config.tsx"),m=t("../charts/src/stories/sample-data/index.ts"),r=t("../charts/src/components/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"JS Packages/Charts/Types/Pie Semi Circle Chart",component:r.A,parameters:{layout:"centered"},decorators:[l.OI],argTypes:{...l.xo,...d.jW,...u.r,width:{control:{type:"range",min:100,max:1e3,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}}}},a={args:{containerWidth:"600px",containerHeight:"325px",resize:"none",thickness:.4,data:m.f2,label:"OS",note:"Windows +10%",clockwise:!0}},v={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Semi-circle pie chart with interactive tooltips that appear on hover."}}}},T={args:{...a.args,showLegend:!0}},f={render:i=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,e.jsx)(r.A,{width:400,data:i.data,label:"Performance Metrics",note:"Q4 2023 Results",showLegend:!0,legendPosition:i.legendPosition||"bottom",legendOrientation:i.legendOrientation||"horizontal",legendAlignment:i.legendAlignment||"center",legendMaxWidth:i.legendMaxWidth,legendTextOverflow:i.legendTextOverflow||"wrap"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Composition API with Legend Component"}),(0,e.jsx)(r.A,{width:400,data:i.data,label:"Performance Metrics",note:"Q4 2023 Results",children:(0,e.jsx)(r.A.Legend,{position:i.legendPosition||"bottom",orientation:i.legendOrientation||"horizontal",alignment:i.legendAlignment||"center",maxWidth:i.legendMaxWidth,textOverflow:i.legendTextOverflow||"wrap"})})]})]}),args:{data:m.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{docs:{description:{story:"Demonstrates the semi-circle chart composition API, allowing flexible component composition with explicit legend placement."}}}},S={render:i=>(0,e.jsx)(o.S,{children:(0,e.jsxs)("div",{style:{padding:"20px"},children:[(0,e.jsx)("h3",{children:"Interactive Semi-Circle Chart"}),(0,e.jsx)("p",{style:{marginBottom:"20px",color:"#666"},children:"Click legend items to show/hide segments. Percentages adjust automatically."}),(0,e.jsx)(r.G,{chartId:"interactive-semi-circle-chart",width:i.width||400,data:i.data,label:"Performance Metrics",note:"Click legend to filter",showLegend:!0,legendInteractive:!0,legendPosition:i.legendPosition||"bottom",legendOrientation:i.legendOrientation||"horizontal",legendAlignment:i.legendAlignment||"center"})]})}),args:{data:m.f2,width:400,containerHeight:"500px"},parameters:{docs:{description:{story:"Interactive semi-circle chart with clickable legend items. Hidden segments are excluded and percentages recalculate. Requires chartId and GlobalChartsProvider."}}}},P={args:{containerWidth:"600px",containerHeight:"350px",resize:"none",thickness:.4,data:[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:30},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:22},{label:"Windows",value:48e3,valueDisplay:"48K",percentage:48}],label:"OS",note:"Windows +10%",withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"end",legendPosition:"top",legendShape:"circle"},parameters:{docs:{description:{story:"Semi-circle pie chart with right-top positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with OS usage data."}}}},j={...a.args,resize:"both"};delete j.width;const M={args:j,parameters:{docs:{description:{story:"Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling."}}}},A={render:()=>(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Empty Data"}),(0,e.jsx)(r.A,{width:300,data:[]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Zero Total Percentage"}),(0,e.jsx)(r.A,{width:300,data:[{label:"A",value:0,percentage:0},{label:"B",value:0,percentage:0}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Negative Values"}),(0,e.jsx)(r.A,{width:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Single Data Point"}),(0,e.jsx)(r.A,{width:300,data:[{label:"Single Point",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the semi-circle pie chart handles various error states and edge cases."}}}},L={render:i=>(0,e.jsxs)("div",{style:{padding:"2rem"},children:[(0,e.jsx)("h2",{children:"PieSemiCircleChart Composition API"}),(0,e.jsx)("p",{children:"Demonstrates the flexible composition API with SVG and HTML compound components."}),(0,e.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",marginTop:"2rem"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom SVG Elements"}),(0,e.jsxs)(r.A,{width:400,data:i.data,label:"OS Usage",note:"Q4 2023",withTooltips:!0,children:[(0,e.jsx)(r.A.SVG,{children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(n.A,{x:0,y:-80,textAnchor:"middle",fontSize:14,fill:"#666",fontStyle:"italic",children:"Custom SVG Annotation"}),(0,e.jsx)("circle",{cx:0,cy:-90,r:3,fill:"#ff6b6b"})]})}),(0,e.jsx)(r.A.HTML,{children:(0,e.jsx)("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"12px",color:"#888"},children:"\u2728 Enhanced with custom annotations"})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"With Custom Legend and HTML Content"}),(0,e.jsx)(r.A,{width:400,data:i.data,label:"Performance",note:"Latest Results",children:(0,e.jsx)(r.A.HTML,{children:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,e.jsx)(r.A.Legend,{orientation:"horizontal",alignment:"center",shape:"circle"}),(0,e.jsx)("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"4px",fontSize:"12px"},children:"\u{1F50D} Hover segments for details"}),(0,e.jsxs)("div",{style:{fontSize:"10px",color:"#666",textAlign:"center",lineHeight:1.4},children:["Data updated: ",new Date().toLocaleString(),(0,e.jsx)("br",{}),"Source: Internal Analytics"]})]})})})]})]}),(0,e.jsxs)("div",{style:{marginTop:"3rem"},children:[(0,e.jsx)("h3",{children:"Legacy Support - Direct Group Components"}),(0,e.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"1rem"},children:"For backward compatibility, Group components are still supported directly:"}),(0,e.jsx)(r.A,{width:400,data:i.data,label:"Legacy Mode",note:"Still works!",children:(0,e.jsxs)(s.A,{children:[(0,e.jsx)(n.A,{x:0,y:-70,textAnchor:"middle",fontSize:12,fill:"#999",children:"Direct Group usage"}),(0,e.jsx)("rect",{x:-30,y:-85,width:60,height:2,fill:"#ddd"})]})})]})]}),args:{data:m.f2},argTypes:{legendInteractive:{table:{disable:!0}}},parameters:{layout:"fullscreen",docs:{description:{story:`
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
                `}}}},V=["Default","WithTooltips","WithLegend","WithCompositionLegend","InteractiveLegend","CustomLegendPositioning","Responsiveness","ErrorStates","CompositionAPI"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...T.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Semi-circle pie chart with responsive behavior. Uses width prop for unified width/height handling.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((C,p,t)=>{t.d(p,{a:()=>n});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:o})=>(0,s.jsx)(s.Fragment,{children:o});n.displayName="Chart.HTML";try{n.displayName="Chart.HTML",n.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((C,p,t)=>{t.d(p,{d:()=>n});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:o})=>(0,s.jsx)(s.Fragment,{children:o});n.displayName="Chart.SVG";try{n.displayName="Chart.SVG",n.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((C,p,t)=>{t.d(p,{n:()=>o});var s=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o(l,d){return(0,n.useMemo)(()=>{const u=[],m=[],r=[];return n.Children.forEach(l,e=>{if((0,n.isValidElement)(e)){const _=e.type?.displayName;_===`${d}.SVG`||_==="Chart.SVG"?e.props?.children&&n.Children.forEach(e.props.children,a=>{u.push(a)}):_===`${d}.HTML`||_==="Chart.HTML"?e.props?.children&&n.Children.forEach(e.props.children,a=>{m.push(a)}):e.type===s.A?u.push(e):r.push(e)}}),{svgChildren:u,htmlChildren:m,otherChildren:r}},[l,d])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((C,p,t)=>{t.d(p,{R:()=>e});var s=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(s),o=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),l={};l.insert="head",l.singleton=!1;var d=n()(o.A,l);const u=o.A.locals||{};var m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=({data:h})=>(0,m.jsxs)(m.Fragment,{children:[h?.label,": ",h?.valueDisplay||h?.value]}),e=({data:h,top:_,left:a,component:v=r,children:T,className:f,style:S,renderContainer:P=!0})=>{const j=T||h&&(0,m.jsx)(v,{data:h,className:f});return P?(0,m.jsx)("div",{className:u.tooltip,style:{top:_,left:a,...S},role:"tooltip",children:j}):j};try{e.displayName="BaseTooltip",e.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:e.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-interactive-legend-data.ts":((C,p,t)=>{t.d(p,{j:()=>n});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n=({data:o,chartId:l,legendInteractive:d,isSeriesVisible:u})=>{const m=(0,s.useMemo)(()=>{if(!l||!d)return o;const h=o.filter(a=>u(l,a.label));if(h.length===0)return[];const _=h.reduce((a,v)=>a+v.value,0);return h.map(a=>({...a,percentage:_>0?a.value/_*100:0}))},[o,l,u,d]),r=(0,s.useMemo)(()=>d&&m.length===0,[d,m]),e=(0,s.useMemo)(()=>!d||!l?o:o.map(h=>u(l,h.label)&&m.find(v=>v.label===h.label)||h),[o,m,d,l,u]);return{visibleData:m,allSegmentsHidden:r,legendData:e}}}),"../charts/src/stories/legend-config.tsx":((C,p,t)=>{t.d(p,{r:()=>s});const s={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."},legendInteractive:{control:{type:"boolean"},table:{category:"Legend"},description:"Enable interactive legend items that can toggle series visibility. Requires GlobalChartsProvider and chartId to be set."}};try{s.displayName="legendArgTypes",s.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:s.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
