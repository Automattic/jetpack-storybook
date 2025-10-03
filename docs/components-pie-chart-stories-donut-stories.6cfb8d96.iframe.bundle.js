"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((u,d,e)=>{e.d(d,{A:()=>i});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),n=e.n(a),t=n()(s());t.push([u.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),t.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const i=t}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((u,d,e)=>{e.d(d,{A:()=>i});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js"),n=e.n(a),t=n()(s());t.push([u.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),t.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const i=t}),"../charts/src/components/pie-chart/pie-chart.tsx":((u,d,e)=>{e.d(d,{W:()=>me,A:()=>ge});var r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/hooks/use-element-height.ts"),c=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),_=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),l=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),g=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),x=e("../charts/src/utils/create-composition.ts"),v=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),O=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),S=e("../charts/src/components/legend/legend.tsx"),C=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),E=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),b=e("../charts/src/components/private/chart-composition/chart-html.tsx"),h=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),de=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),le=e("../charts/src/components/tooltip/base-tooltip.tsx"),pe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),he=e.n(pe),F=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),W={};W.insert="head",W.singleton=!1;var st=he()(F.A,W);const P=F.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _e=f=>{if(!f.length)return{isValid:!1,message:"No data available"};if(f.some(R=>R.percentage<0||R.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=f.reduce((R,j)=>R+j.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},X=({data:f,chartId:z,withTooltips:L=!1,className:R,showLegend:j=!1,legendOrientation:ue="horizontal",legendPosition:B="bottom",legendAlignment:Se="center",legendMaxWidth:fe,legendTextOverflow:ye="wrap",legendItemClassName:xe,legendShape:Ce="circle",size:Q,thickness:M=1,padding:Te=20,gapScale:Y=0,cornerScale:K=0,showLabels:Ae=!0,legendValueDisplay:$="percentage",children:ve=null,tooltipOffsetX:Oe=0,tooltipOffsetY:Ee=-15})=>{const V=(0,c.p)(),w=(0,_.R)(z),[Le,Z]=(0,m.v)(),{tooltipOpen:Re,tooltipLeft:je,tooltipTop:De,tooltipData:J,hideTooltip:q,showTooltip:Ie}=(0,n.A)(),{containerRef:be,TooltipInPortal:Pe}=(0,t.A)({detectBounds:!0,scroll:!0,debounce:0}),Be=(0,o.useCallback)(()=>{L&&q()},[L,q]),Me=(0,o.useMemo)(()=>({showValues:!0,legendValueDisplay:$}),[$]),Ke=(0,O.f)(f,Me),{isValid:ee,message:ke}=_e(f),{svgChildren:We,htmlChildren:Ne,otherChildren:ze}=(0,C.n)(ve,"PieChart"),Ye=(0,o.useMemo)(()=>({thickness:M,gapScale:Y,cornerScale:K}),[M,Y,K]);(0,l.t)({chartId:w,legendItems:Ke,chartType:"pie",isDataValid:ee,metadata:Ye});const{getElementStyles:Ve}=(0,g.j)();if(!ee)return(0,p.jsx)("div",{className:(0,i.A)("pie-chart",P["pie-chart"],R),children:(0,p.jsx)("div",{className:P["error-message"],children:ke})});const D=Q,te=Q,I=j&&B==="top"?te-Z:te,we=Math.min(D,I)/2,Ge=D/2,He=I/2,Ue=Y*(2*Math.PI/f.length),k=we-Te,oe=M===0?0:k*(1-M),Fe=(k-oe)/2,Xe=K?Math.min(K*k,Fe):0,Qe=f.map((T,A)=>({...T,index:A})),se={value:T=>T.value,fill:T=>Ve({data:T,index:T.index}).color};return(0,p.jsx)(h.O.Provider,{value:{chartId:w,chartWidth:D,chartHeight:I},children:(0,p.jsxs)("div",{ref:be,className:(0,i.A)("pie-chart",P["pie-chart"],R),style:{display:"flex",flexDirection:j&&B==="top"?"column-reverse":"column"},children:[(0,p.jsx)("svg",{viewBox:`0 0 ${D} ${I}`,preserveAspectRatio:"xMidYMid meet",width:D,height:I,children:(0,p.jsxs)(s.A,{top:He,left:Ge,children:[(0,p.jsx)(a.A,{data:Qe,pieValue:se.value,outerRadius:k,innerRadius:oe,padAngle:Ue,cornerRadius:Xe,children:T=>T.arcs.map((A,$e)=>{const[re,ne]=T.path.centroid(A),Ze=A.endAngle-A.startAngle>=.25,Je=tt=>{if(!L)return;const U=(0,r.A)(tt);if(U){const ot=j&&B==="top"?Z:0;Ie({tooltipData:A.data,tooltipLeft:U.x+Oe,tooltipTop:U.y+ot+Ee})}},qe={d:T.path(A)||"",fill:se.fill(A.data),"data-testid":"pie-segment"},G={};L&&(G.onMouseMove=Je,G.onMouseLeave=Be);const H=12,et=(0,v.A)(A.data.label,{fontSize:H}),ae=6,ie=et+ae*2,ce=H+ae*2;return(0,p.jsxs)("g",{...G,children:[(0,p.jsx)("path",{...qe}),Ae&&Ze&&(0,p.jsxs)("g",{children:[V.labelBackgroundColor&&(0,p.jsx)("rect",{x:re-ie/2,y:ne-ce/2,width:ie,height:ce,fill:V.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,p.jsx)("text",{x:re,y:ne,dy:".33em",fill:V.labelTextColor||"#333",fontSize:H,textAnchor:"middle",pointerEvents:"none",children:A.data.label})]})]},`arc-${$e}`)})}),We]})}),j&&(0,p.jsx)(S.s,{orientation:ue,position:B,alignment:Se,maxWidth:fe,textOverflow:ye,legendItemClassName:xe,className:P["pie-chart-legend"],shape:Ce,ref:Le,chartId:w}),L&&Re&&J&&(0,p.jsx)(Pe,{top:De||0,left:je||0,children:(0,p.jsx)("div",{role:"tooltip",children:(0,p.jsx)(le.R,{data:J,top:0,left:0,renderContainer:!1})})}),Ne,ze]})})},N=f=>(0,o.useContext)(y.m)?(0,p.jsx)(X,{...f}):(0,p.jsx)(y.S,{children:(0,p.jsx)(X,{...f})});N.displayName="PieChart";const me=(0,x.E)(N,{Legend:S.s,SVG:E.d,HTML:b.a}),ge=(0,x.E)((0,de.F)(N),{Legend:S.s,SVG:E.d,HTML:b.a})}),"../charts/src/components/pie-chart/stories/donut.stories.tsx":((u,d,e)=>{e.r(d),e.d(d,{CustomLegendPositioning:()=>E,Default:()=>l,Doughnut:()=>v,ErrorStates:()=>y,Thin:()=>x,WithCompositionLegend:()=>C,WithLegend:()=>S,WithTooltipsDoughnut:()=>O,WithoutCenter:()=>g,__namedExportsOrder:()=>b,default:()=>_});var r=e("../charts/src/stories/chart-decorator.tsx"),s=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/legend-config.tsx"),n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../charts/src/components/pie-chart/pie-chart.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],_={title:"JS Packages/Charts/Types/Donut Chart",component:i.A,parameters:{layout:"centered"},decorators:[r.OI],argTypes:{...r.xo,...s.jW,...a.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},l={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:m,children:(0,o.jsxs)(n.A,{children:[(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},g={args:{...l.args,children:void 0}},y={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)(i.A,{size:300,thickness:.6,data:[]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Single Value"}),(0,o.jsx)(i.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},x={args:{...l.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,o.jsxs)(n.A,{children:[(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},v={args:{...l.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,o.jsxs)(n.A,{children:[(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},O={args:{...l.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},S={args:{...l.args,showLegend:!0}},C={render:h=>(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Traditional Props-based"}),(0,o.jsx)(i.A,{size:300,data:h.data,thickness:.5,showLegend:!0,legendPosition:h.legendPosition||"bottom",legendOrientation:h.legendOrientation||"horizontal",legendAlignment:h.legendAlignment||"center",legendMaxWidth:h.legendMaxWidth,legendTextOverflow:h.legendTextOverflow||"wrap",legendValueDisplay:h.legendValueDisplay,children:(0,o.jsxs)(n.A,{children:[(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Composition API"}),(0,o.jsxs)(i.A,{size:300,data:h.data,thickness:.5,legendValueDisplay:h.legendValueDisplay,children:[(0,o.jsxs)(n.A,{children:[(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,o.jsx)(i.A.Legend,{position:h.legendPosition||"bottom",orientation:h.legendOrientation||"horizontal",alignment:h.legendAlignment||"center",maxWidth:h.legendMaxWidth,textOverflow:h.legendTextOverflow||"wrap"})]})]})]}),args:{data:m,thickness:.5},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},E={args:{...l.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,o.jsx)(n.A,{children:(0,o.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},b=["Default","WithoutCenter","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","WithCompositionLegend","CustomLegendPositioning"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px',
    resize: 'none',
    thickness: 0.5,
    gapScale: 0.03,
    padding: 20,
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
}`,...l.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    thickness: 0.5
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}}),"../charts/src/components/private/chart-composition/chart-html.tsx":((u,d,e)=>{e.d(d,{a:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:a})=>(0,r.jsx)(r.Fragment,{children:a});s.displayName="Chart.HTML";try{s.displayName="Chart.HTML",s.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((u,d,e)=>{e.d(d,{d:()=>s});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({children:a})=>(0,r.jsx)(r.Fragment,{children:a});s.displayName="Chart.SVG";try{s.displayName="Chart.SVG",s.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((u,d,e)=>{e.d(d,{n:()=>a});var r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a(n,t){return(0,s.useMemo)(()=>{const i=[],o=[],m=[];return s.Children.forEach(n,c=>{if((0,s.isValidElement)(c)){const l=c.type?.displayName;l===`${t}.SVG`||l==="Chart.SVG"?c.props?.children&&s.Children.forEach(c.props.children,g=>{i.push(g)}):l===`${t}.HTML`||l==="Chart.HTML"?c.props?.children&&s.Children.forEach(c.props.children,g=>{o.push(g)}):c.type===r.A?i.push(c):m.push(c)}}),{svgChildren:i,htmlChildren:o,otherChildren:m}},[n,t])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((u,d,e)=>{e.d(d,{R:()=>c});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.101.3/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.101.3/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),n={};n.insert="head",n.singleton=!1;var t=s()(a.A,n);const i=a.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({data:_})=>(0,o.jsxs)(o.Fragment,{children:[_?.label,": ",_?.valueDisplay||_?.value]}),c=({data:_,top:l,left:g,component:y=m,children:x,className:v,style:O,renderContainer:S=!0})=>{const C=x||_&&(0,o.jsx)(y,{data:_,className:v});return S?(0,o.jsx)("div",{className:i.tooltip,style:{top:l,left:g,...O},role:"tooltip",children:C}):C};try{c.displayName="BaseTooltip",c.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},renderContainer:{defaultValue:{value:"true"},description:`Whether to render the tooltip container div. When false, only renders the content.
Useful when the tooltip is rendered inside a portal or custom container.`,name:"renderContainer",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:c.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((u,d,e)=>{e.d(d,{OI:()=>n,cg:()=>t,xo:()=>i});var r=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),s=e("../charts/src/stories/theme-config.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(o,m)=>{const c=m.args;return t(()=>(0,a.jsx)("div",{style:{resize:c.resize||"both",overflow:"auto",padding:"1rem",width:c.containerWidth||"800px",height:c.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(o,{})}),m)},t=(o,{args:m})=>{const c=m.themeName,_=s.yI[c||"default"];return(0,a.jsx)(r.S,{theme:_,children:(0,a.jsx)(o,{})})},i={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{n.displayName="chartDecorator",n.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:n.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{t.displayName="simpleChartDecorator",t.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:t.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{i.displayName="sharedChartArgTypes",i.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:i.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/legend-config.tsx":((u,d,e)=>{e.d(d,{r:()=>r});const r={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'},legendMaxWidth:{control:{type:"text"},table:{category:"Legend"},description:'Maximum width for legend items as CSS value (e.g. "200px", "50%", "10rem"). When set, text overflow behavior is controlled by legendTextOverflow.'},legendTextOverflow:{control:{type:"select"},options:["wrap","ellipsis"],table:{category:"Legend"},description:'Controls how text behaves when it exceeds legendMaxWidth. "ellipsis" truncates with ... (ideal for widgets), "wrap" allows text to wrap to multiple lines.'},legendItemClassName:{control:{type:"text"},table:{category:"Legend"},description:"Additional CSS class name for legend items. This allows consumers to customize individual legend item styling."}};try{r.displayName="legendArgTypes",r.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:r.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((u,d,e)=>{e.d(d,{jW:()=>n,yI:()=>a});var r=e("../charts/src/providers/chart-context/themes.ts");const s={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},a={default:r.zQ,jetpack:r.QI,woo:r.pk,custom:s},n={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{s.displayName="customTheme",s.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:s.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{a.displayName="CHART_THEME_MAP",a.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:a.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{n.displayName="themeArgTypes",n.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:n.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}})}]);
