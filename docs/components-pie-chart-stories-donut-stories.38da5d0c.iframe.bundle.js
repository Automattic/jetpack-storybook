"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":((u,d,e)=>{e.r(d),e.d(d,{CustomLegendPositioning:()=>v,Default:()=>l,Doughnut:()=>x,ErrorStates:()=>y,Thin:()=>f,WithCompositionLegend:()=>E,WithLegend:()=>C,WithTooltipsDoughnut:()=>O,WithoutCenter:()=>g,__namedExportsOrder:()=>K,default:()=>_});var n=e("../charts/src/stories/chart-decorator.tsx"),o=e("../charts/src/stories/theme-config.tsx"),a=e("../charts/src/stories/legend-config.tsx"),r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../charts/src/components/pie-chart/pie-chart.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],_={title:"JS Packages/Charts/Types/Donut Chart",component:i.A,parameters:{layout:"centered"},decorators:[n.OI],argTypes:{...n.xo,...o.jW,...a.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},l={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:m,children:(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},g={args:{...l.args,children:void 0}},y={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)(i.A,{size:300,thickness:.6,data:[]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Single Value"}),(0,s.jsx)(i.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},f={args:{...l.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},x={args:{...l.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},O={args:{...l.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},C={args:{...l.args,showLegend:!0}},E={render:D=>(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Traditional Props-based"}),(0,s.jsx)(i.A,{size:300,data:D.data,thickness:.5,showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal",legendValueDisplay:D.legendValueDisplay,children:(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Composition API"}),(0,s.jsxs)(i.A,{size:300,data:D.data,thickness:.5,legendValueDisplay:D.legendValueDisplay,children:[(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,s.jsx)(i.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})]})]})]}),args:{data:m,thickness:.5},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},v={args:{...l.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,s.jsx)(r.A,{children:(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},K=["Default","WithoutCenter","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","WithCompositionLegend","CustomLegendPositioning"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center'
  }}>
            <div>
                <h3>Traditional Props-based</h3>
                <PieChart size={300} data={args.data} thickness={0.5} showLegend={true} legendPosition="bottom" legendOrientation="horizontal" legendValueDisplay={args.legendValueDisplay}>
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
                    <PieChart.Legend position="bottom" orientation="horizontal" alignment="center" />
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
}`,...E.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}}),"../charts/src/components/pie-chart/pie-chart.tsx":((u,d,e)=>{e.d(d,{W:()=>ue,A:()=>Se});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/hooks/use-element-height.ts"),i=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),s=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const m=({withTooltips:h})=>{const{tooltipOpen:b,tooltipLeft:L,tooltipTop:T,tooltipData:R,hideTooltip:N,showTooltip:j}=(0,s.A)(),H=(0,r.useCallback)((W,I)=>{if(!h)return;const B=(0,i.A)(W);B&&j({tooltipData:I,tooltipLeft:B.x,tooltipTop:B.y-10})},[h,j]),U=(0,r.useCallback)(()=>{h&&N()},[h,N]);return{onMouseMove:H,onMouseLeave:U,tooltipOpen:b,tooltipData:R||null,tooltipLeft:L,tooltipTop:T}};var c=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),_=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),l=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),g=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),y=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),f=e("../charts/src/utils/create-composition.ts"),x=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),O=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),C=e("../charts/src/components/legend/legend.tsx"),E=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),v=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),K=e("../charts/src/components/private/chart-composition/chart-html.tsx"),D=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),pe=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),he=e("../charts/src/components/tooltip/base-tooltip.tsx"),_e=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),me=e.n(_e),J=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),V={};V.insert="head",V.singleton=!1;var Fe=me()(J.A,V);const k=J.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ge=h=>{if(!h.length)return{isValid:!1,message:"No data available"};if(h.some(T=>T.percentage<0||T.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=h.reduce((T,R)=>T+R.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},q=({data:h,chartId:b,withTooltips:L=!1,className:T,showLegend:R=!1,legendOrientation:N="horizontal",legendPosition:j="bottom",legendAlignment:H="center",legendShape:U="circle",size:W,thickness:I=1,padding:B=20,gapScale:F=0,cornerScale:z=0,showLabels:ye=!0,legendValueDisplay:ee="percentage",children:fe=null})=>{const w=(0,c.p)(),X=(0,_.R)(b),[xe,Ce]=(0,t.v)(),{onMouseMove:Te,onMouseLeave:Ae,tooltipOpen:ve,tooltipData:te,tooltipLeft:Oe,tooltipTop:Ee}=m({withTooltips:L}),Le=(0,r.useMemo)(()=>({showValues:!0,legendValueDisplay:ee}),[ee]),Re=(0,O.f)(h,Le),{isValid:se,message:De}=ge(h),{svgChildren:je,htmlChildren:Ie,otherChildren:be}=(0,E.n)(fe,"PieChart"),Be=(0,r.useMemo)(()=>({thickness:I,gapScale:F,cornerScale:z}),[I,F,z]);(0,l.t)({chartId:X,legendItems:Re,chartType:"pie",isDataValid:se,metadata:Be});const{resolveGroupColor:Me}=(0,g.j)();if(!se)return(0,p.jsx)("div",{className:(0,a.A)("pie-chart",k["pie-chart"],T),children:(0,p.jsx)("div",{className:k["error-message"],children:De})});const M=W,oe=W,P=R&&j==="top"?oe-Ce:oe,Pe=Math.min(M,P)/2,Ke=M/2,ke=P/2,Ne=F*(2*Math.PI/h.length),Y=Pe-B,re=I===0?0:Y*(1-I),We=(Y-re)/2,ze=z?Math.min(z*Y,We):0,Ye=h.map((A,S)=>({...A,index:S})),ne={value:A=>A.value,fill:({group:A,index:S,color:Q})=>Me({group:A,index:S,overrideColor:Q})};return(0,p.jsx)(D.O.Provider,{value:{chartId:X,chartWidth:M,chartHeight:P},children:(0,p.jsxs)("div",{className:(0,a.A)("pie-chart",k["pie-chart"],T),style:{display:"flex",flexDirection:R&&j==="top"?"column-reverse":"column"},children:[(0,p.jsx)("svg",{viewBox:`0 0 ${M} ${P}`,preserveAspectRatio:"xMidYMid meet",width:M,height:P,children:(0,p.jsxs)(n.A,{top:ke,left:Ke,children:[(0,p.jsx)(o.A,{data:Ye,pieValue:ne.value,outerRadius:Y,innerRadius:re,padAngle:Ne,cornerRadius:ze,children:A=>A.arcs.map((S,Q)=>{const[ae,ie]=A.path.centroid(S),Ve=S.endAngle-S.startAngle>=.25,Ge=Ue=>Te(Ue,S.data),$={d:A.path(S)||"",fill:ne.fill(S.data)};L&&($.onMouseMove=Ge,$.onMouseLeave=Ae);const Z=12,He=(0,x.A)(S.data.label,{fontSize:Z}),ce=6,de=He+ce*2,le=Z+ce*2;return(0,p.jsxs)("g",{children:[(0,p.jsx)("path",{...$}),ye&&Ve&&(0,p.jsxs)("g",{children:[w.labelBackgroundColor&&(0,p.jsx)("rect",{x:ae-de/2,y:ie-le/2,width:de,height:le,fill:w.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,p.jsx)("text",{x:ae,y:ie,dy:".33em",fill:w.labelTextColor||"#333",fontSize:Z,textAnchor:"middle",pointerEvents:"none",children:S.data.label})]})]},`arc-${Q}`)})}),je]})}),R&&(0,p.jsx)(C.s,{orientation:N,position:j,alignment:H,className:k["pie-chart-legend"],shape:U,ref:xe,chartId:X}),L&&ve&&te&&(0,p.jsx)(he.R,{data:te,top:Ee||0,left:Oe||0,style:{transform:"translate(-50%, -100%)"}}),Ie,be]})})},G=h=>(0,r.useContext)(y.m)?(0,p.jsx)(q,{...h}):(0,p.jsx)(y.S,{children:(0,p.jsx)(q,{...h})});G.displayName="PieChart";const ue=(0,f.E)(G,{Legend:C.s,SVG:v.d,HTML:K.a}),Se=(0,f.E)((0,pe.F)(G),{Legend:C.s,SVG:v.d,HTML:K.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((u,d,e)=>{e.d(d,{a:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:a})=>(0,n.jsx)(n.Fragment,{children:a});o.displayName="Chart.HTML";try{o.displayName="Chart.HTML",o.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((u,d,e)=>{e.d(d,{d:()=>o});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({children:a})=>(0,n.jsx)(n.Fragment,{children:a});o.displayName="Chart.SVG";try{o.displayName="Chart.SVG",o.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((u,d,e)=>{e.d(d,{n:()=>a});var n=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a(r,t){return(0,o.useMemo)(()=>{const i=[],s=[],m=[];return o.Children.forEach(r,c=>{if((0,o.isValidElement)(c)){const l=c.type?.displayName;l===`${t}.SVG`||l==="Chart.SVG"?c.props?.children&&o.Children.forEach(c.props.children,g=>{i.push(g)}):l===`${t}.HTML`||l==="Chart.HTML"?c.props?.children&&o.Children.forEach(c.props.children,g=>{s.push(g)}):c.type===n.A?i.push(c):m.push(c)}}),{svgChildren:i,htmlChildren:s,otherChildren:m}},[r,t])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((u,d,e)=>{e.d(d,{R:()=>c});var n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),r={};r.insert="head",r.singleton=!1;var t=o()(a.A,r);const i=a.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({data:_})=>(0,s.jsxs)(s.Fragment,{children:[_?.label,": ",_?.valueDisplay||_?.value]}),c=({data:_,top:l,left:g,component:y=m,children:f,className:x})=>(0,s.jsx)("div",{className:i.tooltip,style:{top:l,left:g},role:"tooltip",children:f||_&&(0,s.jsx)(y,{data:_,className:x})});try{c.displayName="BaseTooltip",c.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:c.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/stories/chart-decorator.tsx":((u,d,e)=>{e.d(d,{OI:()=>r,cg:()=>t,xo:()=>i});var n=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),o=e("../charts/src/stories/theme-config.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(s,m)=>{const c=m.args;return t(()=>(0,a.jsx)("div",{style:{resize:c.resize||"both",overflow:"auto",padding:"1rem",width:c.containerWidth||"800px",height:c.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(s,{})}),m)},t=(s,{args:m})=>{const c=m.themeName,_=o.yI[c||"default"];return(0,a.jsx)(n.S,{theme:_,children:(0,a.jsx)(s,{})})},i={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{r.displayName="chartDecorator",r.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:r.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{t.displayName="simpleChartDecorator",t.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:t.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{i.displayName="sharedChartArgTypes",i.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:i.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/legend-config.tsx":((u,d,e)=>{e.d(d,{r:()=>n});const n={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{n.displayName="legendArgTypes",n.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:n.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((u,d,e)=>{e.d(d,{jW:()=>r,yI:()=>a});var n=e("../charts/src/providers/chart-context/themes.ts");const o={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},a={default:n.zQ,jetpack:n.QI,woo:n.pk,custom:o},r={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{o.displayName="customTheme",o.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:o.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{a.displayName="CHART_THEME_MAP",a.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:a.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{r.displayName="themeArgTypes",r.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:r.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((u,d,e)=>{e.d(d,{A:()=>i});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),t=r()(o());t.push([u.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),t.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const i=t}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((u,d,e)=>{e.d(d,{A:()=>i});var n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),t=r()(o());t.push([u.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),t.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const i=t})}]);
