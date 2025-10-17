"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((v,l,e)=>{e.d(l,{A:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),h=e.n(d),c=h()(s());c.push([v.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden;align-items:center;gap:20px}",""]),c.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const u=c}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((v,l,e)=>{e.d(l,{A:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),h=e.n(d),c=h()(s());c.push([v.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),c.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=c}),"../charts/src/components/pie-chart/pie-chart.tsx":((v,l,e)=>{e.d(l,{W:()=>ge,A:()=>_e});var a=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),c=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../charts/src/hooks/use-element-height.ts"),n=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),i=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),t=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),f=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),R=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),b=e("../charts/src/utils/create-composition.ts"),p=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),S=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),_=e("../charts/src/components/legend/legend.tsx"),y=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),j=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),C=e("../charts/src/components/private/chart-composition/chart-html.tsx"),D=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),E=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),P=e("../charts/src/components/tooltip/base-tooltip.tsx"),Y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(Y),K=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),o={};o.insert="head",o.singleton=!1;var V=O()(K.A,o);const W=K.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=x=>{if(!x.length)return{isValid:!1,message:"No data available"};if(x.some(M=>M.percentage<0||M.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=x.reduce((M,I)=>M+I.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},U=({data:x,chartId:X,withTooltips:L=!1,className:M,showLegend:I=!1,legendOrientation:xe="horizontal",legendPosition:G="bottom",legendAlignment:ve="center",legendMaxWidth:fe,legendTextOverflow:ye="wrap",legendItemClassName:Ae,legendShape:Te="circle",size:te,thickness:k=1,padding:Se=0,gapScale:$=0,cornerScale:H=0,showLabels:je=!0,legendValueDisplay:se="percentage",children:Ce=null,tooltipOffsetX:De=0,tooltipOffsetY:Ee=-15})=>{const Q=(0,n.p)(),Z=(0,i.R)(X),[Pe,ne]=(0,g.v)(),{tooltipOpen:Oe,tooltipLeft:Le,tooltipTop:Me,tooltipData:oe,hideTooltip:re,showTooltip:be}=(0,h.A)(),{containerRef:We,TooltipInPortal:Ie}=(0,c.A)({detectBounds:!0,scroll:!0,debounce:0}),Re=(0,m.useCallback)(()=>{L&&re()},[L,re]),ze=(0,m.useMemo)(()=>({showValues:!0,legendValueDisplay:se}),[se]),we=(0,S.f)(x,ze),{isValid:ae,message:Ke}=B(x),{svgChildren:Ve,htmlChildren:Be,otherChildren:Ue}=(0,y.n)(Ce,"PieChart"),Ge=(0,m.useMemo)(()=>({thickness:k,gapScale:$,cornerScale:H}),[k,$,H]);(0,t.t)({chartId:Z,legendItems:we,chartType:"pie",isDataValid:ae,metadata:Ge});const{getElementStyles:ke}=(0,f.j)();if(!ae)return(0,r.jsx)("div",{className:(0,u.A)("pie-chart",W["pie-chart"],M),children:(0,r.jsx)("div",{className:W["error-message"],children:Ke})});const z=te,ie=te,w=I&&G==="top"?ie-ne:ie,He=Math.min(z,w)/2,Ne=z/2,Ye=w/2,Fe=$*(2*Math.PI/x.length),N=He-Se,le=k===0?0:N*(1-k),Xe=(N-le)/2,$e=H?Math.min(H*N,Xe):0,Qe=x.map((A,T)=>({...A,index:T})),de={value:A=>A.value,fill:A=>ke({data:A,index:A.index}).color};return(0,r.jsx)(D.O.Provider,{value:{chartId:Z,chartWidth:z,chartHeight:w},children:(0,r.jsxs)("div",{ref:We,className:(0,u.A)("pie-chart",W["pie-chart"],M),style:{display:"flex",flexDirection:I&&G==="top"?"column-reverse":"column"},children:[(0,r.jsx)("svg",{viewBox:`0 0 ${z} ${w}`,preserveAspectRatio:"xMidYMid meet",width:z,height:w,children:(0,r.jsxs)(s.A,{top:Ye,left:Ne,children:[(0,r.jsx)(d.A,{data:Qe,pieValue:de.value,outerRadius:N,innerRadius:le,padAngle:Fe,cornerRadius:$e,children:A=>A.arcs.map((T,Ze)=>{const[ce,pe]=A.path.centroid(T),Je=T.endAngle-T.startAngle>=.25,qe=st=>{if(!L)return;const ee=(0,a.A)(st);if(ee){const nt=I&&G==="top"?ne:0;be({tooltipData:T.data,tooltipLeft:ee.x+De,tooltipTop:ee.y+nt+Ee})}},et={d:A.path(T)||"",fill:de.fill(T.data),"data-testid":"pie-segment"},J={};L&&(J.onMouseMove=qe,J.onMouseLeave=Re);const q=12,tt=(0,p.A)(T.data.label,{fontSize:q}),he=6,me=tt+he*2,ue=q+he*2;return(0,r.jsxs)("g",{...J,children:[(0,r.jsx)("path",{...et}),je&&Je&&(0,r.jsxs)("g",{children:[Q.labelBackgroundColor&&(0,r.jsx)("rect",{x:ce-me/2,y:pe-ue/2,width:me,height:ue,fill:Q.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,r.jsx)("text",{x:ce,y:pe,dy:".33em",fill:Q.labelTextColor||"#333",fontSize:q,textAnchor:"middle",pointerEvents:"none",children:T.data.label})]})]},`arc-${Ze}`)})}),Ve]})}),I&&(0,r.jsx)(_.s,{orientation:xe,position:G,alignment:ve,maxWidth:fe,textOverflow:ye,legendItemClassName:Ae,className:W["pie-chart-legend"],shape:Te,ref:Pe,chartId:Z}),L&&Oe&&oe&&(0,r.jsx)(Ie,{top:Me||0,left:Le||0,children:(0,r.jsx)("div",{role:"tooltip",children:(0,r.jsx)(P.R,{data:oe,top:0,left:0,renderContainer:!1})})}),Be,Ue]})})},F=x=>(0,m.useContext)(R.m)?(0,r.jsx)(U,{...x}):(0,r.jsx)(R.S,{children:(0,r.jsx)(U,{...x})});F.displayName="PieChart";const ge=(0,b.E)(F,{Legend:_.s,SVG:j.d,HTML:C.a}),_e=(0,b.E)((0,E.F)(F),{Legend:_.s,SVG:j.d,HTML:C.a})}),"../charts/src/components/pie-chart/stories/donut.stories.tsx":((v,l,e)=>{e.r(l),e.d(l,{CustomLegend:()=>O,CustomLegendPositioning:()=>P,Default:()=>p,Doughnut:()=>j,ErrorStates:()=>_,Thin:()=>y,WithCompositionLegend:()=>E,WithLegend:()=>D,WithTooltipsDoughnut:()=>C,WithoutCenter:()=>S,__namedExportsOrder:()=>K,default:()=>b});var a=e("../../../node_modules/.pnpm/@wordpress+components@30.4.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@30.4.0_@types+react@18.3.25_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../charts/src/stories/chart-decorator.tsx"),c=e("../charts/src/stories/theme-config.tsx"),u=e("../charts/src/stories/legend-config.tsx"),m=e("../charts/src/stories/sample-data/index.ts"),g=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],b={title:"JS Packages/Charts/Types/Donut Chart",component:i.A,parameters:{layout:"centered"},decorators:[h.OI],argTypes:{...h.xo,...c.jW,...u.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},p={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,cornerScale:.03,withTooltips:!0,data:f,children:(0,t.jsxs)(g.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},S={args:{...p.args,children:void 0}},_={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(i.A,{size:300,thickness:.6,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Value"}),(0,t.jsx)(i.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},y={args:{...p.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,t.jsxs)(g.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},j={args:{...p.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,t.jsxs)(g.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},C={args:{...p.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},D={args:{...p.args,showLegend:!0,containerHeight:"500px"}},E={render:o=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Traditional Props-based"}),(0,t.jsx)(i.A,{size:300,data:o.data,thickness:.5,showLegend:!0,legendPosition:o.legendPosition||"bottom",legendOrientation:o.legendOrientation||"horizontal",legendAlignment:o.legendAlignment||"center",legendMaxWidth:o.legendMaxWidth,legendTextOverflow:o.legendTextOverflow||"wrap",legendValueDisplay:o.legendValueDisplay,children:(0,t.jsxs)(g.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Composition API"}),(0,t.jsxs)(i.A,{size:300,data:o.data,thickness:.5,legendValueDisplay:o.legendValueDisplay,children:[(0,t.jsxs)(g.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,t.jsx)(i.A.Legend,{position:o.legendPosition||"bottom",orientation:o.legendOrientation||"horizontal",alignment:o.legendAlignment||"center",maxWidth:o.legendMaxWidth,textOverflow:o.legendTextOverflow||"wrap"})]})]})]}),args:{data:f,thickness:.5,containerHeight:"500px"},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},P={args:{...p.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,t.jsx)(g.A,{children:(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},Y=({chartItems:o,items:V,withComparison:W})=>(0,t.jsx)("div",{style:{display:"inline-grid",gridTemplateColumns:"1fr auto auto",gap:"var(--wpds-spacing-05, 5px) var(--wpds-spacing-10, 10px)"},children:V.map((r,B)=>{const{color:U}=o[B];return(0,t.jsxs)(d.Fragment,{children:[(0,t.jsxs)(a.A,{direction:"row",justify:"flex-start",gap:2,children:[(0,t.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",flexShrink:0,backgroundColor:U}}),(0,t.jsx)(s.A,{size:"small",children:r.label})]}),(0,t.jsx)(s.A,{size:"small",weight:600,style:{textAlign:"right"},children:r.formattedValue}),(0,t.jsx)(s.A,{size:"small",style:{textAlign:"right",color:"#008a20"},children:W&&r.comparison})]},B)})}),O={render:o=>(0,t.jsx)(i.W,{...o,children:(0,t.jsx)(i.W.Legend,{render:V=>(0,t.jsx)(Y,{chartItems:V,items:m.AC,withComparison:o.withComparison})})}),args:{...p.args,data:m.TW.map(o=>({...o,label:""})),thickness:.3,cornerScale:.03,gapScale:.01,size:164,withComparison:!0,withTooltips:!1,containerHeight:"300px"},parameters:{docs:{description:{story:"Demonstrates how to customize the legend using the render prop."}}}},K=["Default","WithoutCenter","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","WithCompositionLegend","CustomLegendPositioning","CustomLegend"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px',
    resize: 'none',
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...p.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...S.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
            <div>
                <h3>Empty Data</h3>
                <PieChart size={300} thickness={0.6} data={[]} />
            </div>
            <div>
                <h3>Single Value</h3>
                <PieChart size={300} thickness={0.6} data={[{
        label: 'Single',
        value: 100,
        percentage: 100
      }]} />
            </div>
        </div>
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    size: 700,
    containerWidth: '732px',
    containerHeight: '732px',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...y.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    gapScale: 0.03,
    cornerScale: 0.03,
    size: 600,
    containerWidth: '632px',
    containerHeight: '632px',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    \u{1F369} Doughnut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fill="#008A20" fontSize={18} y={16}>
                    Three donuts for the price of one!
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    withTooltips: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart with interactive tooltips that appear on hover.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    containerHeight: '500px'
  }
}`,...D.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based</h3>
                <PieChart size={300} data={args.data} thickness={0.5} showLegend={true} legendPosition={args.legendPosition || 'bottom'} legendOrientation={args.legendOrientation || 'horizontal'} legendAlignment={args.legendAlignment || 'center'} legendMaxWidth={args.legendMaxWidth} legendTextOverflow={args.legendTextOverflow || 'wrap'} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                </PieChart>
            </div>
            <div>
                <h3>Composition API</h3>
                <PieChart size={300} data={args.data} thickness={0.5} legendValueDisplay={args.legendValueDisplay}>
                    <Group>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={16} y={-8}>
                            User Stats
                        </Text>
                        <Text textAnchor="middle" verticalAnchor="middle" fontSize={14} y={12} fill="#666">
                            100K Total
                        </Text>
                    </Group>
                    <PieChart.Legend position={args.legendPosition || 'bottom'} orientation={args.legendOrientation || 'horizontal'} alignment={args.legendAlignment || 'center'} maxWidth={args.legendMaxWidth} textOverflow={args.legendTextOverflow || 'wrap'} />
                </PieChart>
            </div>
        </div>,
  args: {
    data,
    thickness: 0.5,
    containerHeight: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.4,
    showLegend: true,
    legendOrientation: 'vertical',
    legendAlignment: 'start',
    legendPosition: 'top',
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
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={-8}>
                    Distribution
                </Text>
            </Group>
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with vertical legend positioned at the top left.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <PieChartUnresponsive {...args}>
            <PieChartUnresponsive.Legend
    // eslint-disable-next-line react/jsx-no-bind
    render={items => <WooPieLegend chartItems={items} items={customerRevenueLegendData} withComparison={args.withComparison} />} />
        </PieChartUnresponsive>,
  args: {
    ...Default.args,
    data: customerRevenueData.map(segment => ({
      ...segment,
      label: ''
    })),
    thickness: 0.3,
    cornerScale: 0.03,
    gapScale: 0.01,
    size: 164,
    withComparison: true,
    withTooltips: false,
    containerHeight: '300px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to customize the legend using the render prop.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((v,l,e)=>{e.d(l,{a:()=>s});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:d})=>(0,a.jsx)(a.Fragment,{children:d});s.displayName="Chart.HTML";try{s.displayName="Chart.HTML",s.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((v,l,e)=>{e.d(l,{d:()=>s});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:d})=>(0,a.jsx)(a.Fragment,{children:d});s.displayName="Chart.SVG";try{s.displayName="Chart.SVG",s.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((v,l,e)=>{e.d(l,{n:()=>d});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d(h,c){return(0,s.useMemo)(()=>{const u=[],m=[],g=[];return s.Children.forEach(h,n=>{if((0,s.isValidElement)(n)){const t=n.type?.displayName;t===`${c}.SVG`||t==="Chart.SVG"?n.props?.children&&s.Children.forEach(n.props.children,f=>{u.push(f)}):t===`${c}.HTML`||t==="Chart.HTML"?n.props?.children&&s.Children.forEach(n.props.children,f=>{m.push(f)}):n.type===a.A?u.push(n):g.push(n)}}),{svgChildren:u,htmlChildren:m,otherChildren:g}},[h,c])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((v,l,e)=>{e.d(l,{R:()=>n});var a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),h={};h.insert="head",h.singleton=!1;var c=s()(d.A,h);const u=d.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=({data:i})=>(0,m.jsxs)(m.Fragment,{children:[i?.label,": ",i?.valueDisplay||i?.value]}),n=({data:i,top:t,left:f,component:R=g,children:b,className:p,style:S,renderContainer:_=!0})=>{const y=b||i&&(0,m.jsx)(R,{data:i,className:p});return _?(0,m.jsx)("div",{className:u.tooltip,style:{top:t,left:f,...S},role:"tooltip",children:y}):y};try{n.displayName="BaseTooltip",n.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:n.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/legend-config.tsx":((v,l,e)=>{e.d(l,{r:()=>a});const a={showLegend:{control:{type:"boolean"},description:"Show or hide the legend",table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],description:"Position of the legend relative to the chart",table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],description:"Horizontal alignment of the legend within its position",table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of legend items",table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],description:"Shape of the legend marker icon",table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."}};try{a.displayName="legendArgTypes",a.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}})}]);
