"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":(y,d,e)=>{e.r(d),e.d(d,{CustomLegendPositioning:()=>j,CustomTheme:()=>_,Default:()=>l,Doughnut:()=>A,ErrorStates:()=>g,Thin:()=>f,WithLegend:()=>D,WithTooltipsDoughnut:()=>T,WithoutCenter:()=>h,__namedExportsOrder:()=>I,default:()=>p});var i=e("../charts/src/providers/theme/themes.ts"),o=e("../charts/src/stories/decorator-config.tsx"),a=e("../charts/src/stories/legend-config.tsx"),s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),u=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],p={title:"JS Packages/Charts/Types/Donut Chart",component:u.A,parameters:{layout:"centered"},decorators:o.p,argTypes:{...a.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:{type:"select"},options:["default","jetpack","woo"],mapping:{default:void 0,jetpack:i.QI,woo:i.pk},defaultValue:"default"},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},l={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:M,theme:"default",children:(0,t.jsxs)(s.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},h={args:{...l.args,children:void 0}},_={args:{...l.args,theme:i.pk}},g={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(u.A,{size:300,thickness:.6,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Value"}),(0,t.jsx)(u.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},f={args:{...l.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,t.jsxs)(s.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},A={args:{...l.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,t.jsxs)(s.A,{children:[(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},T={args:{...l.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},D={args:{...l.args,showLegend:!0}},j={args:{...l.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,t.jsx)(s.A,{children:(0,t.jsx)(n.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},I=["Default","WithoutCenter","CustomTheme","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","CustomLegendPositioning"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    theme: 'default',
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
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    theme: wooTheme
  }
}`,..._.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}},"../charts/src/components/pie-chart/pie-chart.tsx":(y,d,e)=>{e.d(d,{A:()=>se});var i=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),u=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const M=({withTooltips:r})=>{const{tooltipOpen:L,tooltipLeft:b,tooltipTop:v,tooltipData:E,hideTooltip:z,showTooltip:P}=(0,u.A)(),U=(0,s.useCallback)((O,C)=>{if(!r)return;const R=(0,n.A)(O);R&&P({tooltipData:C,tooltipLeft:R.x,tooltipTop:R.y-10})},[r,P]),N=(0,s.useCallback)(()=>{r&&z()},[r,z]);return{onMouseMove:U,onMouseLeave:N,tooltipOpen:L,tooltipData:E||null,tooltipLeft:b,tooltipTop:v}};var S=e("../charts/src/providers/chart-context/utils.ts"),p=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),l=e("../charts/src/providers/theme/theme-provider.tsx"),h=e("../charts/src/providers/theme/themes.ts"),_=e("../charts/src/components/legend/legend.tsx"),g=e("../charts/src/components/legend/use-chart-legend-data.ts"),f=e("../charts/src/components/shared/use-element-height.ts"),A=e("../charts/src/components/shared/with-responsive.tsx"),T=e("../charts/src/components/tooltip/base-tooltip.tsx"),D=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(D),I=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),K={};K.insert="head",K.singleton=!1;var Pe=j()(I.A,K);const V=I.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ne=r=>{if(!r.length)return{isValid:!1,message:"No data available"};if(r.some(v=>v.percentage<0||v.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const b=r.reduce((v,E)=>v+E.percentage,0);return Math.abs(b-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},Y=({data:r,chartId:L,withTooltips:b=!1,className:v,showLegend:E=!1,legendOrientation:z="horizontal",legendPosition:P="bottom",legendAlignment:U="center",legendShape:N="circle",size:O,thickness:C=1,padding:R=20,gapScale:G=0,cornerScale:W=0,children:oe=null})=>{const B=(0,l.RW)(),Q=(0,S.R)(L),[ae,re]=(0,f.v)(),{onMouseMove:ie,onMouseLeave:le,tooltipOpen:de,tooltipData:X,tooltipLeft:ce,tooltipTop:pe}=M({withTooltips:b}),ue=(0,s.useMemo)(()=>({showValues:!0}),[]),$=(0,g.B)(r,B,ue),{isValid:J,message:me}=ne(r),he=(0,s.useMemo)(()=>({thickness:C,gapScale:G,cornerScale:W}),[C,G,W]);if((0,S.t)(Q,$,B,"pie",J,he),!J)return(0,c.jsx)("div",{className:(0,a.A)("pie-chart",V["pie-chart"],v),children:(0,c.jsx)("div",{className:V["error-message"],children:me})});const Z=O,q=O,k=E&&P==="top"?q-re:q,_e=Math.min(Z,k)/2,ge=Z/2,fe=k/2,ve=G*(2*Math.PI/r.length),w=_e-R,ee=C===0?0:w*(1-C),xe=(w-ee)/2,ye=W?Math.min(W*w,xe):0,Se=r.map((m,x)=>({...m,index:x})),te={value:m=>m.value,fill:m=>m?.color||B.colors[m.index]};return(0,c.jsxs)("div",{className:(0,a.A)("pie-chart",V["pie-chart"],v),style:{display:"flex",flexDirection:E&&P==="top"?"column-reverse":"column"},children:[(0,c.jsx)("svg",{viewBox:`0 0 ${O} ${k}`,preserveAspectRatio:"xMidYMid meet",width:O,height:k,children:(0,c.jsxs)(i.A,{top:fe,left:ge,children:[(0,c.jsx)(o.A,{data:Se,pieValue:te.value,outerRadius:w,innerRadius:ee,padAngle:ve,cornerRadius:ye,children:m=>m.arcs.map((x,Ae)=>{const[Te,De]=m.path.centroid(x),je=x.endAngle-x.startAngle>=.25,be=Ee=>ie(Ee,x.data),H={d:m.path(x)||"",fill:te.fill(x.data)};return b&&(H.onMouseMove=be,H.onMouseLeave=le),(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{...H}),je&&(0,c.jsx)("text",{x:Te,y:De,dy:".33em",fill:B.labelBackgroundColor||h.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:x.data.label})]},`arc-${Ae}`)})}),oe]})}),E&&(0,c.jsx)(_.s,{items:$,orientation:z,position:P,alignment:U,className:V["pie-chart-legend"],shape:N,ref:ae,chartId:Q}),b&&de&&X&&(0,c.jsx)(T.R,{data:X,top:pe||0,left:ce||0,style:{transform:"translate(-50%, -100%)"}})]})},F=r=>(0,s.useContext)(p.mJ)?(0,c.jsx)(Y,{...r}):(0,c.jsx)(p.Sx,{children:(0,c.jsx)(Y,{...r})});F.displayName="PieChart";const se=(0,A.F)(F);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(y,d,e)=>{e.d(d,{R:()=>S});var i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),s={};s.insert="head",s.singleton=!1;var n=o()(a.A,s);const u=a.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=({data:p})=>(0,t.jsxs)(t.Fragment,{children:[p?.label,": ",p?.valueDisplay||p?.value]}),S=({data:p,top:l,left:h,component:_=M,children:g,className:f})=>(0,t.jsx)("div",{className:u.tooltip,style:{top:l,left:h},role:"tooltip",children:g||p&&(0,t.jsx)(_,{data:p,className:f})});try{S.displayName="BaseTooltip",S.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:S.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(y,d,e)=>{e.d(d,{p:()=>a});var i=e("../charts/src/providers/theme/theme-provider.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=[(s,{args:n})=>(0,o.jsx)(i.NP,{theme:n.theme,children:(0,o.jsx)("div",{style:{resize:n.resize??"both",overflow:"auto",padding:"1rem",width:n.containerWidth??"800px",height:n.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,o.jsx)(s,{})})})];try{a.displayName="sharedDecorator",a.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:a.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(y,d,e)=>{e.d(d,{r:()=>o});var i=e("../charts/src/providers/theme/themes.ts");const o={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:{type:"select"},options:{default:void 0,jetpack:i.QI,woo:i.pk},defaultValue:void 0,table:{category:"Theme"}}};try{o.displayName="legendArgTypes",o.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:o.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(y,d,e)=>{e.d(d,{A:()=>u});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(a),n=s()(o());n.push([y.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const u=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(y,d,e)=>{e.d(d,{A:()=>u});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(a),n=s()(o());n.push([y.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=n}}]);
