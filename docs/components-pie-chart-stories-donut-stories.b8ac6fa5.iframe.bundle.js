"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":((f,d,e)=>{e.r(d),e.d(d,{CustomLegendPositioning:()=>A,Default:()=>l,Doughnut:()=>g,ErrorStates:()=>S,Thin:()=>u,WithCompositionLegend:()=>T,WithLegend:()=>_,WithTooltipsDoughnut:()=>C,WithoutCenter:()=>h,__namedExportsOrder:()=>L,default:()=>p});var a=e("../charts/src/stories/chart-decorator.tsx"),n=e("../charts/src/stories/theme-config.tsx"),c=e("../charts/src/stories/legend-config.tsx"),o=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),t=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),i=e("../charts/src/components/pie-chart/pie-chart.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],p={title:"JS Packages/Charts/Types/Donut Chart",component:i.A,parameters:{layout:"centered"},decorators:[a.OI],argTypes:{...a.xo,...n.jW,...c.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}}}},l={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:m,children:(0,s.jsxs)(o.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},h={args:{...l.args,children:void 0}},S={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)(i.A,{size:300,thickness:.6,data:[]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Single Value"}),(0,s.jsx)(i.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},u={args:{...l.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,s.jsxs)(o.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},g={args:{...l.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,s.jsxs)(o.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},C={args:{...l.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},_={args:{...l.args,showLegend:!0}},T={render:b=>(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Traditional Props-based"}),(0,s.jsx)(i.A,{size:300,data:b.data,thickness:.5,showLegend:!0,legendPosition:"bottom",legendOrientation:"horizontal",legendValueDisplay:b.legendValueDisplay,children:(0,s.jsxs)(o.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Composition API"}),(0,s.jsxs)(i.A,{size:300,data:b.data,thickness:.5,legendValueDisplay:b.legendValueDisplay,children:[(0,s.jsxs)(o.A,{children:[(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:16,y:-8,children:"User Stats"}),(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:14,y:12,fill:"#666",children:"100K Total"})]}),(0,s.jsx)(i.A.Legend,{position:"bottom",orientation:"horizontal",alignment:"center"})]})]})]}),args:{data:m,thickness:.5},parameters:{docs:{description:{story:"Demonstrates the donut chart composition API, allowing flexible combination of chart elements and legends."}}}},A={args:{...l.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,s.jsx)(o.A,{children:(0,s.jsx)(t.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},L=["Default","WithoutCenter","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","WithCompositionLegend","CustomLegendPositioning"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...h.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,..._.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}}),"../charts/src/components/legend/hooks/use-chart-legend-items.ts":((f,d,e)=>{e.d(d,{f:()=>m});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),c=e("../charts/src/utils/format-percentage.ts"),o=e("../charts/src/utils/get-styles.ts");function t(r,p,l="percentage"){if(!p||l==="none")return"";if("percentage"in r){const h=r;switch(l){case"percentage":return(0,c.E)(h.percentage);case"value":return h.value.toString();case"valueDisplay":return h.valueDisplay||h.value.toString();default:return""}}return"value"in r?r.value.toString():""}function i(r,p,l,h,S,u,g){const C=(_,T)=>{const{shapeStyles:A}=(0,o.jU)(_,T,p,g),L={label:_.label,value:l?_.data?.length?.toString()||"0":"",color:(0,o.gO)(_,T,p.colors),shapeStyle:A,group:_.group,index:T,overrideColor:_.options?.stroke};return h&&u?{...L,glyphSize:S,renderGlyph:u}:L};return r.map(C)}function s(r,p,l,h,S,u,g){const C=(_,T)=>{const A={label:_.label,value:t(_,l,h),color:_.color??p.colors[T%p.colors.length],group:_.group,index:T,overrideColor:_.color};return S&&g?{...A,glyphSize:u,renderGlyph:g}:A};return r.map(C)}function m(r,p={},l){const{showValues:h=!1,legendValueDisplay:S="percentage",withGlyph:u=!1,glyphSize:g=8,renderGlyph:C}=p,_=(0,n.p)();return(0,a.useMemo)(()=>!r||!Array.isArray(r)||r.length===0?[]:"data"in r[0]?i(r,_,h,u,g,C,l):s(r,_,h,S,u,g,C),[r,_,h,S,u,g,C,l])}}),"../charts/src/components/pie-chart/pie-chart.tsx":((f,d,e)=>{e.d(d,{W:()=>ge,A:()=>Se});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/hooks/use-element-height.ts"),i=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),s=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const m=({withTooltips:x})=>{const{tooltipOpen:P,tooltipLeft:R,tooltipTop:O,tooltipData:D,hideTooltip:N,showTooltip:j}=(0,s.A)(),G=(0,o.useCallback)((W,I)=>{if(!x)return;const M=(0,i.A)(W);M&&j({tooltipData:I,tooltipLeft:M.x,tooltipTop:M.y-10})},[x,j]),H=(0,o.useCallback)(()=>{x&&N()},[x,N]);return{onMouseMove:G,onMouseLeave:H,tooltipOpen:P,tooltipData:D||null,tooltipLeft:R,tooltipTop:O}};var r=e("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),p=e("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),l=e("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),h=e("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),S=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),u=e("../charts/src/utils/create-composition.ts"),g=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js"),C=e("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),_=e("../charts/src/components/legend/legend.tsx"),T=e("../charts/src/components/private/chart-composition/use-chart-children.ts"),A=e("../charts/src/components/private/chart-composition/chart-svg.tsx"),L=e("../charts/src/components/private/chart-composition/chart-html.tsx"),b=e("../charts/src/components/private/single-chart-context/single-chart-context.tsx"),pe=e("../charts/src/components/private/with-responsive/with-responsive.tsx"),he=e("../charts/src/components/tooltip/base-tooltip.tsx"),_e=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),me=e.n(_e),J=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),V={};V.insert="head",V.singleton=!1;var Fe=me()(J.A,V);const k=J.A.locals||{};var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ue=x=>{if(!x.length)return{isValid:!1,message:"No data available"};if(x.some(O=>O.percentage<0||O.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const R=x.reduce((O,D)=>O+D.percentage,0);return Math.abs(R-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},q=({data:x,chartId:P,withTooltips:R=!1,className:O,showLegend:D=!1,legendOrientation:N="horizontal",legendPosition:j="bottom",legendAlignment:G="center",legendShape:H="circle",size:W,thickness:I=1,padding:M=20,gapScale:F=0,cornerScale:z=0,showLabels:ye=!0,legendValueDisplay:ee="percentage",children:fe=null})=>{const w=(0,r.p)(),X=(0,p.R)(P),[xe,Ce]=(0,t.v)(),{onMouseMove:Te,onMouseLeave:Ae,tooltipOpen:ve,tooltipData:te,tooltipLeft:Oe,tooltipTop:Ee}=m({withTooltips:R}),Le=(0,o.useMemo)(()=>({showValues:!0,legendValueDisplay:ee}),[ee]),Re=(0,C.f)(x,Le),{isValid:se,message:De}=ue(x),{svgChildren:be,htmlChildren:je,otherChildren:Ie}=(0,T.n)(fe,"PieChart"),Pe=(0,o.useMemo)(()=>({thickness:I,gapScale:F,cornerScale:z}),[I,F,z]);(0,l.t)({chartId:X,legendItems:Re,chartType:"pie",isDataValid:se,metadata:Pe});const{resolveGroupColor:Me}=(0,h.j)();if(!se)return(0,y.jsx)("div",{className:(0,c.A)("pie-chart",k["pie-chart"],O),children:(0,y.jsx)("div",{className:k["error-message"],children:De})});const B=W,oe=W,K=D&&j==="top"?oe-Ce:oe,Be=Math.min(B,K)/2,Ke=B/2,ke=K/2,Ne=F*(2*Math.PI/x.length),Y=Be-M,re=I===0?0:Y*(1-I),We=(Y-re)/2,ze=z?Math.min(z*Y,We):0,Ye=x.map((E,v)=>({...E,index:v})),ne={value:E=>E.value,fill:({group:E,index:v,color:Q})=>Me({group:E,index:v,overrideColor:Q})};return(0,y.jsx)(b.O.Provider,{value:{chartId:X,chartWidth:B,chartHeight:K},children:(0,y.jsxs)("div",{className:(0,c.A)("pie-chart",k["pie-chart"],O),style:{display:"flex",flexDirection:D&&j==="top"?"column-reverse":"column"},children:[(0,y.jsx)("svg",{viewBox:`0 0 ${B} ${K}`,preserveAspectRatio:"xMidYMid meet",width:B,height:K,children:(0,y.jsxs)(a.A,{top:ke,left:Ke,children:[(0,y.jsx)(n.A,{data:Ye,pieValue:ne.value,outerRadius:Y,innerRadius:re,padAngle:Ne,cornerRadius:ze,children:E=>E.arcs.map((v,Q)=>{const[ae,ie]=E.path.centroid(v),Ve=v.endAngle-v.startAngle>=.25,Ue=He=>Te(He,v.data),$={d:E.path(v)||"",fill:ne.fill(v.data)};R&&($.onMouseMove=Ue,$.onMouseLeave=Ae);const Z=12,Ge=(0,g.A)(v.data.label,{fontSize:Z}),ce=6,le=Ge+ce*2,de=Z+ce*2;return(0,y.jsxs)("g",{children:[(0,y.jsx)("path",{...$}),ye&&Ve&&(0,y.jsxs)("g",{children:[w.labelBackgroundColor&&(0,y.jsx)("rect",{x:ae-le/2,y:ie-de/2,width:le,height:de,fill:w.labelBackgroundColor,rx:4,ry:4,pointerEvents:"none"}),(0,y.jsx)("text",{x:ae,y:ie,dy:".33em",fill:w.labelTextColor||"#333",fontSize:Z,textAnchor:"middle",pointerEvents:"none",children:v.data.label})]})]},`arc-${Q}`)})}),be]})}),D&&(0,y.jsx)(_.s,{orientation:N,position:j,alignment:G,className:k["pie-chart-legend"],shape:H,ref:xe,chartId:X}),R&&ve&&te&&(0,y.jsx)(he.R,{data:te,top:Ee||0,left:Oe||0,style:{transform:"translate(-50%, -100%)"}}),je,Ie]})})},U=x=>(0,o.useContext)(S.m)?(0,y.jsx)(q,{...x}):(0,y.jsx)(S.S,{children:(0,y.jsx)(q,{...x})});U.displayName="PieChart";const ge=(0,u.E)(U,{Legend:_.s,SVG:A.d,HTML:L.a}),Se=(0,u.E)((0,pe.F)(U),{Legend:_.s,SVG:A.d,HTML:L.a})}),"../charts/src/components/private/chart-composition/chart-html.tsx":((f,d,e)=>{e.d(d,{a:()=>n});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:c})=>(0,a.jsx)(a.Fragment,{children:c});n.displayName="Chart.HTML";try{n.displayName="Chart.HTML",n.__docgenInfo={description:`Compound component for HTML children in charts.
This component serves as a marker for HTML content that should be rendered
outside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.HTML",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"]={docgenInfo:Chart.HTML.__docgenInfo,name:"Chart.HTML",path:"../charts/src/components/private/chart-composition/chart-html.tsx#Chart.HTML"})}catch{}}),"../charts/src/components/private/chart-composition/chart-svg.tsx":((f,d,e)=>{e.d(d,{d:()=>n});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({children:c})=>(0,a.jsx)(a.Fragment,{children:c});n.displayName="Chart.SVG";try{n.displayName="Chart.SVG",n.__docgenInfo={description:`Compound component for SVG children in charts.
This component serves as a marker for SVG content that should be rendered
inside the chart's SVG element. The actual rendering is handled by the parent chart.`,displayName:"Chart.SVG",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"]={docgenInfo:Chart.SVG.__docgenInfo,name:"Chart.SVG",path:"../charts/src/components/private/chart-composition/chart-svg.tsx#Chart.SVG"})}catch{}}),"../charts/src/components/private/chart-composition/use-chart-children.ts":((f,d,e)=>{e.d(d,{n:()=>c});var a=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c(o,t){return(0,n.useMemo)(()=>{const i=[],s=[],m=[];return n.Children.forEach(o,r=>{if((0,n.isValidElement)(r)){const l=r.type?.displayName;l===`${t}.SVG`||l==="Chart.SVG"?r.props?.children&&n.Children.forEach(r.props.children,h=>{i.push(h)}):l===`${t}.HTML`||l==="Chart.HTML"?r.props?.children&&n.Children.forEach(r.props.children,h=>{s.push(h)}):r.type===a.A?i.push(r):m.push(r)}}),{svgChildren:i,htmlChildren:s,otherChildren:m}},[o,t])}}),"../charts/src/components/tooltip/base-tooltip.tsx":((f,d,e)=>{e.d(d,{R:()=>r});var a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),o={};o.insert="head",o.singleton=!1;var t=n()(c.A,o);const i=c.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=({data:p})=>(0,s.jsxs)(s.Fragment,{children:[p?.label,": ",p?.valueDisplay||p?.value]}),r=({data:p,top:l,left:h,component:S=m,children:u,className:g})=>(0,s.jsx)("div",{className:i.tooltip,style:{top:l,left:h},role:"tooltip",children:u||p&&(0,s.jsx)(S,{data:p,className:g})});try{r.displayName="BaseTooltip",r.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:r.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}}),"../charts/src/hooks/use-element-height.ts":((f,d,e)=>{e.d(d,{v:()=>n});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n({initialHeight:c=0}={}){const[o,t]=(0,a.useState)(c),i=(0,a.useRef)(null);return[(0,a.useCallback)(m=>{if(i.current&&(i.current.disconnect(),i.current=null),m){const r=()=>{t(m.getBoundingClientRect().height||0)};r();const p=new window.ResizeObserver(r);p.observe(m),i.current=p}},[]),o]}}),"../charts/src/stories/chart-decorator.tsx":((f,d,e)=>{e.d(d,{OI:()=>o,cg:()=>t,xo:()=>i});var a=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),n=e("../charts/src/stories/theme-config.tsx"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(s,m)=>{const r=m.args;return t(()=>(0,c.jsx)("div",{style:{resize:r.resize||"both",overflow:"auto",padding:"1rem",width:r.containerWidth||"800px",height:r.containerHeight,maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,c.jsx)(s,{})}),m)},t=(s,{args:m})=>{const r=m.themeName,p=n.yI[r||"default"];return(0,c.jsx)(a.S,{theme:p,children:(0,c.jsx)(s,{})})},i={maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}},containerWidth:{control:{type:"text"},description:'CSS width value for the chart container (e.g., "400px", "100%")'},containerHeight:{control:{type:"text"},description:'CSS height value for the chart container (e.g., "400px", "100%")'},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],description:"Resize behavior for the chart container"}};try{o.displayName="chartDecorator",o.__docgenInfo={description:`Shared decorator for chart stories with GlobalChartsProvider and dynamic theme support
Provides a resizable container for testing responsive behavior
Composes with simpleChartDecorator to add container styling
Supports configurable container dimensions via containerWidth/containerHeight args`,displayName:"chartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#chartDecorator"]={docgenInfo:o.__docgenInfo,name:"chartDecorator",path:"../charts/src/stories/chart-decorator.tsx#chartDecorator"})}catch{}try{t.displayName="simpleChartDecorator",t.__docgenInfo={description:`Simple decorator for chart context stories with GlobalChartsProvider but no container styling
Used for stories that display multiple charts in custom layouts`,displayName:"simpleChartDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"]={docgenInfo:t.__docgenInfo,name:"simpleChartDecorator",path:"../charts/src/stories/chart-decorator.tsx#simpleChartDecorator"})}catch{}try{i.displayName="sharedChartArgTypes",i.__docgenInfo={description:"Shared argTypes for common chart controls",displayName:"sharedChartArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"]={docgenInfo:i.__docgenInfo,name:"sharedChartArgTypes",path:"../charts/src/stories/chart-decorator.tsx#sharedChartArgTypes"})}catch{}}),"../charts/src/stories/legend-config.tsx":((f,d,e)=>{e.d(d,{r:()=>a});const a={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},legendValueDisplay:{control:{type:"select"},options:["percentage","value","valueDisplay","none"],table:{category:"Legend"},description:'What type of value to display in the legend when showValues is true. Note: Enable "showLegend" to see the effect of this control.'}};try{a.displayName="legendArgTypes",a.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}}),"../charts/src/stories/theme-config.tsx":((f,d,e)=>{e.d(d,{jW:()=>o,yI:()=>c});var a=e("../charts/src/providers/chart-context/themes.ts");const n={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2},leaderboardChart:{primaryColor:"#073B3A",secondaryColor:"#0B6E4F"}},c={default:a.zQ,jetpack:a.QI,woo:a.pk,custom:n},o={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{n.displayName="customTheme",n.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:n.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{c.displayName="CHART_THEME_MAP",c.__docgenInfo={description:"Centralized theme map for all chart stories",displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:c.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{o.displayName="themeArgTypes",o.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:o.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}}),"../charts/src/utils/format-percentage.ts":((f,d,e)=>{e.d(d,{E:()=>n});var a=e("../number-formatters/src/index.ts");const n=c=>(0,a.ZV)(c/100,{numberFormatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}})}),"../charts/src/utils/get-styles.ts":((f,d,e)=>{e.d(d,{c0:()=>a,gO:()=>n,jU:()=>c});function a(o,t,i){const s=i?.lineChart?.lineStyles?.[o.options?.type],m=i?.seriesLineStyles?.[t%i.seriesLineStyles.length];return o.options?.seriesLineStyle??s??m??{}}function n(o,t,i){return o.options?.stroke??i[t%i.length]}function c(o,t,i,s){const m=o.options?.legendShapeStyle??{},r=s==="line"?a(o,t,i):{},p=i.legendShapeStyles?.[t],l={...m,...r};return Object.values(l).some(h=>h!=null&&h!=="")?{shapeStyles:l}:{shapeStyles:p??{}}}}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":((f,d,e)=>{e.d(d,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(c),t=o()(n());t.push([f.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),t.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const i=t}),"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":((f,d,e)=>{e.d(d,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(c),t=o()(n());t.push([f.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),t.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const i=t})}]);
