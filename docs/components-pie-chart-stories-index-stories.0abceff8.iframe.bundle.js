"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((b,p,e)=>{e.d(p,{A:()=>o});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),h=e.n(c),m=h()(s());m.push([b.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),m.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const o=m}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((b,p,e)=>{e.d(p,{A:()=>o});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),h=e.n(c),m=h()(s());m.push([b.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),m.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const o=m}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((b,p,e)=>{e.d(p,{f:()=>C});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),c=e("../charts/src/utils/format-percentage.ts");function h(n,a,i="percentage"){if(!a||i==="none")return"";if("percentage"in n){const l=n;switch(i){case"percentage":return(0,c.E)(l.percentage);case"value":return l.value.toString();case"valueDisplay":return l.valueDisplay||l.value.toString();default:return""}}return"value"in n?n.value.toString():""}function m(n,a,i,l,g){if(a){const u=i||l;if(u)return{...n,glyphSize:g,renderGlyph:u}}return n}function o(n,a,i,l,g,u,f){const y=(_,T)=>{const{color:S,glyph:M,shapeStyles:d}=a({data:_,index:T,legendShape:f}),P={label:_.label,value:i?_.data?.length?.toString()||"0":"",color:S,shapeStyle:d};return m(P,l,M,u,g)};return n.map(y)}function t(n,a,i,l,g,u,f,y){const _=(T,S)=>{const{color:M,glyph:d,shapeStyles:P}=a({data:T,index:S,legendShape:y}),B={label:T.label,value:h(T,i,l),color:M,shapeStyle:P};return m(B,g,d,f,u)};return n.map(_)}function C(n,a={},i){const{showValues:l=!1,legendValueDisplay:g="percentage",withGlyph:u=!1,glyphSize:f=8,renderGlyph:y}=a,{getElementStyles:_}=(0,s.j)();return(0,r.useMemo)(()=>!n||!Array.isArray(n)||n.length===0?[]:"data"in n[0]?o(n,_,l,u,f,y,i):t(n,_,l,g,u,f,y,i),[n,_,l,g,u,f,y,i])}}),"../charts/src/components/pie-chart/pie-chart.tsx":((b,p,e)=>{e.d(p,{W:()=>_e,A:()=>ve});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/hooks/use-element-height.ts"),o=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const C=({withTooltips:x})=>{const{tooltipOpen:W,tooltipLeft:L,tooltipTop:E,tooltipData:A,hideTooltip:z,showTooltip:O}=(0,t.A)(),N=(0,h.useCallback)((X,$)=>{if(!x)return;const w=(0,o.A)(X);w&&O({tooltipData:$,tooltipLeft:w.x,tooltipTop:w.y-10})},[x,O]),Y=(0,h.useCallback)(()=>{x&&z()},[x,z]);return{onMouseMove:N,onMouseLeave:Y,tooltipOpen:W,tooltipData:A||null,tooltipLeft:L,tooltipTop:E}};var n=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),a=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),l=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),g=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),u=e("../charts/src/utils/create-composition.ts"),f=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),y=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),_=e("../charts/src/components/legend/legend.tsx"),T=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),S=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),M=e("../charts/src/components/private/chart-composition/chart-html.tsx"),d=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),P=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),B=e("../charts/src/components/tooltip/base-tooltip.tsx"),V=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(V),te=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),G={};G.insert="head",G.singleton=!1;var Xe=ue()(te.A,G);const k=te.A.locals||{};var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ge=x=>{if(!x.length)return{isValid:!1,message:"No data available"};if(x.some(E=>E.percentage<0||E.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=x.reduce((E,A)=>E+A.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},ne=({data:x,chartId:W,withTooltips:L=!1,className:E,showLegend:A=!1,legendOrientation:z="horizontal",legendPosition:O="bottom",legendAlignment:N="center",legendMaxWidth:Y,legendTextOverflow:X="wrap",legendShape:$="circle",size:w,thickness:K=1,padding:xe=20,gapScale:Q=0,cornerScale:U=0,showLabels:ye=!0,legendValueDisplay:se="percentage",children:fe=null})=>{const Z=(0,n.p)(),J=(0,a.R)(W),[be,Ce]=(0,m.v)(),{onMouseMove:Te,onMouseLeave:Se,tooltipOpen:Pe,tooltipData:oe,tooltipLeft:je,tooltipTop:De}=C({withTooltips:L}),Ee=(0,h.useMemo)(()=>({showValues:!0,legendValueDisplay:se}),[se]),Me=(0,y.f)(x,Ee),{isValid:ae,message:Le}=ge(x),{svgChildren:Ae,htmlChildren:Oe,otherChildren:we}=(0,T.n)(fe,"PieChart"),Be=(0,h.useMemo)(()=>({thickness:K,gapScale:Q,cornerScale:U}),[K,Q,U]);(0,i.t)({chartId:J,legendItems:Me,chartType:"pie",isDataValid:ae,metadata:Be});const{getElementStyles:We}=(0,l.j)();if(!ae)return(0,v.jsx)("div",{className:(0,c.A)("pie-chart",k["pie-chart"],E),children:(0,v.jsx)("div",{className:k["error-message"],children:Le})});const I=w,re=w,R=A&&O==="top"?re-Ce:re,Ie=Math.min(I,R)/2,Re=I/2,Ve=R/2,ke=Q*(2*Math.PI/x.length),F=Ie-xe,le=K===0?0:F*(1-K),ze=(F-le)/2,Ke=U?Math.min(U*F,ze):0,Ue=x.map((j,D)=>({...j,index:D})),ie={value:j=>j.value,fill:j=>We({data:j,index:j.index}).color};return(0,v.jsx)(d.O.Provider,{value:{chartId:J,chartWidth:I,chartHeight:R},children:(0,v.jsxs)("div",{className:(0,c.A)("pie-chart",k["pie-chart"],E),style:{display:"flex",flexDirection:A&&O==="top"?"column-reverse":"column"},children:[(0,v.jsx)("svg",{viewBox:`0 0 ${I} ${R}`,preserveAspectRatio:"xMidYMid meet",width:I,height:R,children:(0,v.jsxs)(r.A,{top:Ve,left:Re,children:[(0,v.jsx)(s.A,{data:Ue,pieValue:ie.value,outerRadius:F,innerRadius:le,padAngle:ke,cornerRadius:Ke,children:j=>j.arcs.map((D,Fe)=>{const[de,ce]=j.path.centroid(D),Ge=D.endAngle-D.startAngle>=.25,He=Ye=>Te(Ye,D.data),q={d:j.path(D)||"",fill:ie.fill(D.data)};L&&(q.onMouseMove=He,q.onMouseLeave=Se);const ee=12,Ne=(0,f.A)(D.data.label,{fontSize:ee}),pe=6,he=Ne+pe*2,me=ee+pe*2;return(0,v.jsxs)("g",{children:[(0,v.jsx)("path",{...q}),ye&&Ge&&(0,v.jsxs)("g",{children:[Z.labelBackgroundColor&&(0,v.jsx)("rect",{x:de-he/2,y:ce-me/2,width:he,height:me,fill:Z.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,v.jsx)("text",{x:de,y:ce,dy:".33em",fill:Z.labelTextColor||"#333",fontSize:ee,textAnchor:"middle",pointerEvents:"none",children:D.data.label})]})]},`arc-${Fe}`)})}),Ae]})}),A&&(0,v.jsx)(_.s,{orientation:z,position:O,alignment:N,maxWidth:Y,textOverflow:X,className:k["pie-chart-legend"],shape:$,ref:be,chartId:J}),L&&Pe&&oe&&(0,v.jsx)(B.R,{data:oe,top:De||0,left:je||0,style:{transform:"translate(-50%, -100%)"}}),Oe,we]})})},H=x=>(0,h.useContext)(g.m)?(0,v.jsx)(ne,{...x}):(0,v.jsx)(g.S,{children:(0,v.jsx)(ne,{...x})});H.displayName="PieChart";const _e=(0,u.E)(H,{Legend:_.s,SVG:S.d,HTML:M.a}),ve=(0,u.E)((0,P.F)(H),{Legend:_.s,SVG:S.d,HTML:M.a})}),"../charts/src/components/pie-chart/stories/index.stories.tsx":((b,p,e)=>{e.r(p),e.d(p,{CompositionAPI:()=>_,CustomLabelColors:()=>T,CustomLegendPositioning:()=>u,Default:()=>a,ErrorStates:()=>S,Responsiveness:()=>y,WithCompositionLegend:()=>g,WithLegend:()=>l,WithTooltips:()=>i,__namedExportsOrder:()=>M,default:()=>n});var r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),s=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/legend-config.tsx"),h=e("../charts/src/stories/sample-data/index.ts"),m=e("../charts/src/stories/theme-config.tsx"),o=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts/Types/Pie Chart",component:o.A,parameters:{layout:"centered"},decorators:[s.OI],argTypes:{...s.xo,...m.jW,...c.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},labelTextColor:{control:{type:"color"},description:"Color of the label text displayed on pie chart segments"},labelBackgroundColor:{control:{type:"color"},description:"Background color for labels displayed on pie chart segments"},showLabels:{control:"boolean",description:"Show or hide labels on pie segments"}},render:({labelTextColor:d,labelBackgroundColor:P,...B})=>{const V=(0,t.jsx)(o.A,{...B});return d||P?(0,t.jsx)(r.S,{theme:{labelTextColor:d,labelBackgroundColor:P},children:V}):V}},a={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:h.Mc,resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},i={args:{...a.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},l={args:{...a.args,showLegend:!0}},g={render:d=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based Legend"}),(0,t.jsx)(o.A,{size:300,data:d.data,showLegend:!0,legendPosition:d.legendPosition||"bottom",legendOrientation:d.legendOrientation||"horizontal",legendAlignment:d.legendAlignment||"center",legendMaxWidth:d.legendMaxWidth,legendTextOverflow:d.legendTextOverflow||"wrap",legendValueDisplay:d.legendValueDisplay})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API with Legend Component"}),(0,t.jsx)(o.A,{size:300,data:d.data,legendValueDisplay:d.legendValueDisplay,children:(0,t.jsx)(o.A.Legend,{position:d.legendPosition||"bottom",orientation:d.legendOrientation||"horizontal",alignment:d.legendAlignment||"center",maxWidth:d.legendMaxWidth,textOverflow:d.legendTextOverflow||"wrap"})})]})]}),args:{data:h.Mc},parameters:{docs:{description:{story:"Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control."}}}},u={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},f={...a.args,resize:"both"};delete f.size;const y={args:f,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},_={render:d=>{const P=d.data||[{label:"Desktop",value:45,percentage:45},{label:"Mobile",value:30,percentage:30},{label:"Tablet",value:25,percentage:25}];return(0,t.jsx)("div",{style:{width:"600px",padding:"20px"},children:(0,t.jsxs)(o.W,{data:P,size:400,withTooltips:!0,thickness:.7,legendValueDisplay:d.legendValueDisplay||"value",children:[(0,t.jsx)(o.W.HTML,{children:(0,t.jsx)("h3",{style:{textAlign:"center",marginBottom:"20px"},children:"Device Usage Distribution"})}),(0,t.jsxs)(o.W.SVG,{children:[(0,t.jsx)("text",{x:0,y:0,textAnchor:"middle",style:{fontSize:"24px",fontWeight:"bold"},children:"100%"}),(0,t.jsx)("text",{x:0,y:20,textAnchor:"middle",style:{fontSize:"14px",fill:"#666"},children:"Total Users"})]}),(0,t.jsxs)(o.W.HTML,{children:[(0,t.jsx)(o.W.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"}),(0,t.jsxs)("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px",color:"#666"},children:[(0,t.jsx)("p",{style:{margin:0},children:"This example demonstrates the composition API where you can add:"}),(0,t.jsxs)("ul",{style:{margin:"5px 0 0 20px",padding:0},children:[(0,t.jsx)("li",{children:"SVG elements inside the chart using PieChart.SVG"}),(0,t.jsx)("li",{children:"HTML elements outside the chart using PieChart.HTML"}),(0,t.jsx)("li",{children:"Mix regular children with compound components"})]})]})]})]})})},args:{data:h.Mc},parameters:{docs:{description:{story:`Demonstrates the compound component pattern for PieChart composition.

Use \`<PieChart.SVG>\` to add custom SVG elements inside the chart area, and \`<PieChart.HTML>\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations`}}}},T={args:{...a.args,thickness:.85,data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45,color:"#FF6B6B"},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35,color:"#4ECDC4"},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20,color:"#45B7D1"}],labelTextColor:"#FFFFFF",labelBackgroundColor:"rgba(0, 0, 0, 0.75)",size:400},parameters:{docs:{description:{story:`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\`#FFFFFF\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\`rgba(0, 0, 0, 0.75)\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \`transparent\` to see the default behavior.`}}}},S={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(o.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(o.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(o.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(o.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},M=["Default","WithTooltips","WithLegend","WithCompositionLegend","CustomLegendPositioning","Responsiveness","CompositionAPI","CustomLabelColors","ErrorStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    resize: 'none',
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px'
  }
}`,...a.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...l.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based Legend</h3>
                <PieChart size={300} data={args.data} showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} legendValueDisplay={args.legendValueDisplay} />
            </div>
            <div>
                <h3>Composition API with Legend Component</h3>
                <PieChart size={300} data={args.data} legendValueDisplay={args.legendValueDisplay}>
                    <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieChart>
            </div>
        </div>,
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the new composition API allowing flexible component composition. The chart can be used with traditional props or with explicit child components for more control.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20
    }],
    thickness: 1,
    // Full pie chart
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'center',
    legendPosition: 'top',
    legendShape: 'circle',
    size: 400,
    containerWidth: '432px',
    containerHeight: '480px',
    resize: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const chartData = args.data || [{
      label: 'Desktop',
      value: 45,
      percentage: 45
    }, {
      label: 'Mobile',
      value: 30,
      percentage: 30
    }, {
      label: 'Tablet',
      value: 25,
      percentage: 25
    }];
    return <div style={{
      width: '600px',
      padding: '20px'
    }}>
                <PieChartUnresponsive data={chartData} size={400} withTooltips={true} thickness={0.7} legendValueDisplay={args.legendValueDisplay || 'value'}>
                    <PieChartUnresponsive.HTML>
                        <h3 style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
                            Device Usage Distribution
                        </h3>
                    </PieChartUnresponsive.HTML>

                    <PieChartUnresponsive.SVG>
                        <text x={0} y={0} textAnchor="middle" style={{
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
                            100%
                        </text>
                        <text x={0} y={20} textAnchor="middle" style={{
            fontSize: '14px',
            fill: '#666'
          }}>
                            Total Users
                        </text>
                    </PieChartUnresponsive.SVG>

                    <PieChartUnresponsive.HTML>
                        <PieChartUnresponsive.Legend position="bottom" orientation="horizontal" alignment="center" />
                        <div style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#666'
          }}>
                            <p style={{
              margin: 0
            }}>
                                This example demonstrates the composition API where you can add:
                            </p>
                            <ul style={{
              margin: '5px 0 0 20px',
              padding: 0
            }}>
                                <li>SVG elements inside the chart using PieChart.SVG</li>
                                <li>HTML elements outside the chart using PieChart.HTML</li>
                                <li>Mix regular children with compound components</li>
                            </ul>
                        </div>
                    </PieChartUnresponsive.HTML>
                </PieChartUnresponsive>
            </div>;
  },
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates the compound component pattern for PieChart composition.

Use \\\`<PieChart.SVG>\\\` to add custom SVG elements inside the chart area, and \\\`<PieChart.HTML>\\\` to add HTML elements outside the SVG.

This pattern provides:
- Clear intent about where children should render
- Type safety for different content types
- Flexibility to extend the chart with custom elements
- Backward compatibility with existing implementations\`
      }
    }
  }
}`,..._.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.85,
    // Slightly thinner for better label visibility
    data: [{
      label: 'Desktop',
      value: 45000,
      valueDisplay: '45K',
      percentage: 45,
      color: '#FF6B6B' // Light red segment
    }, {
      label: 'Mobile',
      value: 35000,
      valueDisplay: '35K',
      percentage: 35,
      color: '#4ECDC4' // Light teal segment
    }, {
      label: 'Tablet',
      value: 20000,
      valueDisplay: '20K',
      percentage: 20,
      color: '#45B7D1' // Light blue segment
    }],
    labelTextColor: '#FFFFFF',
    // White text for contrast against dark background
    labelBackgroundColor: 'rgba(0, 0, 0, 0.75)',
    // Dark semi-transparent background
    size: 400
  },
  parameters: {
    docs: {
      description: {
        story: \`This example demonstrates how to enable label backgrounds for enhanced readability. By default, labels have no background (transparent) to preserve the original chart appearance, but you can add backgrounds when needed.

**Key Features:**
- **labelTextColor**: White text (\\\`#FFFFFF\\\`) for contrast against dark background
- **labelBackgroundColor**: Dark semi-transparent background (\\\`rgba(0, 0, 0, 0.75)\\\`) - disabled by default
- **Custom segment colors**: Bright colors that would make default dark text hard to read
- **Opt-in enhancement**: Backgrounds only appear when explicitly set

Use the Storybook controls to experiment with different combinations. Try setting labelBackgroundColor to \\\`transparent\\\` to see the default behavior.\`
      }
    }
  }
}`,...T.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} data={[]} />
            </div>
            <div>
                <h3>Invalid Percentage Total</h3>
                <PieChart size={300} data={[{
        label: 'A',
        value: 30,
        percentage: 30
      }, {
        label: 'B',
        value: 40,
        percentage: 40
      }]} // Only adds up to 70%
      />
            </div>
            <div>
                <h3>Negative Values</h3>
                <PieChart size={300} data={[{
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
                <PieChart size={300} data={[{
        label: 'A',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of how the pie chart handles various error states and edge cases.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((b,p,e)=>{e.d(p,{a:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:c})=>(0,r.jsx)(r.Fragment,{children:c});s.displayName="Chart.HTML";try{s.displayName="Chart.HTML",s.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((b,p,e)=>{e.d(p,{d:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:c})=>(0,r.jsx)(r.Fragment,{children:c});s.displayName="Chart.SVG";try{s.displayName="Chart.SVG",s.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((b,p,e)=>{e.d(p,{n:()=>c});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c(h,m){return(0,s.useMemo)(()=>{const o=[],t=[],C=[];return s.Children.forEach(h,n=>{if((0,s.isValidElement)(n)){const i=n.type?.displayName;i===`${m}.SVG`||i==="Chart.SVG"?n.props?.children&&s.Children.forEach(n.props.children,l=>{o.push(l)}):i===`${m}.HTML`||i==="Chart.HTML"?n.props?.children&&s.Children.forEach(n.props.children,l=>{t.push(l)}):n.type===r.A?o.push(n):C.push(n)}}),{svgChildren:o,htmlChildren:t,otherChildren:C}},[h,m])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((b,p,e)=>{e.d(p,{R:()=>n});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),h={};h.insert="head",h.singleton=!1;var m=s()(c.A,h);const o=c.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=({data:a})=>(0,t.jsxs)(t.Fragment,{children:[a?.label,": ",a?.valueDisplay||a?.value]}),n=({data:a,top:i,left:l,component:g=C,children:u,className:f})=>(0,t.jsx)("div",{className:o.tooltip,style:{top:i,left:l},role:"tooltip",children:u||a&&(0,t.jsx)(g,{data:a,className:f})});try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((b,p,e)=>{e.d(p,{v:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({initialHeight:c=0}={}){const[h,m]=(0,r.useState)(c),o=(0,r.useRef)(null);return[(0,r.useCallback)(C=>{if(o.current&&(o.current.disconnect(),o.current=null),C){const n=()=>{m(C.getBoundingClientRect().height||0)};n();const a=new window.ResizeObserver(n);a.observe(C),o.current=a}},[]),h]}}),"../charts/src/stories/legend-config.tsx":((b,p,e)=>{e.d(p,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((b,p,e)=>{e.d(p,{E:()=>s});var r=e("../number-formatters/src/index.ts");const s=c=>(0,r.ZV)(c/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})})}]);
