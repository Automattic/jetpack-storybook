"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(y,d,e)=>{e.r(d),e.d(d,{CustomLegendPositioning:()=>h,Default:()=>r,ErrorStates:()=>g,Responsiveness:()=>_,WithLegend:()=>m,WithTooltips:()=>l,__namedExportsOrder:()=>V,default:()=>D});var i=e("../charts/src/providers/theme/themes.ts"),a=e("../charts/src/stories/decorator-config.tsx"),n=e("../charts/src/stories/legend-config.tsx"),s=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],D={title:"JS Packages/Charts/Types/Pie Chart",component:s.A,parameters:{layout:"centered"},decorators:a.p,argTypes:{...n.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:{type:"select"},options:["default","jetpack","woo"],mapping:{default:void 0,jetpack:i.QI,woo:i.pk},defaultValue:"default"},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},r={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:u,theme:"default",resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},l={args:{...r.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},m={args:{...r.args,showLegend:!0}},h={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},j={...r.args,resize:"both"};delete j.size;const _={args:j,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},g={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(s.A,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(s.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},V=["Default","WithTooltips","WithLegend","CustomLegendPositioning","Responsiveness","ErrorStates"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default',
    resize: 'none',
    size: 400,
    containerWidth: '432px',
    containerHeight: '432px'
  }
}`,...r.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}},"../charts/src/components/pie-chart/pie-chart.tsx":(y,d,e)=>{e.d(d,{A:()=>ae});var i=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),u=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const D=({withTooltips:o})=>{const{tooltipOpen:E,tooltipLeft:x,tooltipTop:v,tooltipData:S,hideTooltip:M,showTooltip:P}=(0,u.A)(),z=(0,s.useCallback)((T,A)=>{if(!o)return;const O=(0,t.A)(T);O&&P({tooltipData:A,tooltipLeft:O.x,tooltipTop:O.y-10})},[o,P]),W=(0,s.useCallback)(()=>{o&&M()},[o,M]);return{onMouseMove:z,onMouseLeave:W,tooltipOpen:E,tooltipData:S||null,tooltipLeft:x,tooltipTop:v}};var r=e("../charts/src/providers/chart-context/utils.ts"),l=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=e("../charts/src/providers/theme/theme-provider.tsx"),h=e("../charts/src/providers/theme/themes.ts"),j=e("../charts/src/components/legend/legend.tsx"),_=e("../charts/src/components/legend/use-chart-legend-data.ts"),g=e("../charts/src/components/shared/use-element-height.ts"),V=e("../charts/src/components/shared/with-responsive.tsx"),q=e("../charts/src/components/tooltip/base-tooltip.tsx"),ee=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),te=e.n(ee),N=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),B={};B.insert="head",B.singleton=!1;var Ee=te()(N.A,B);const C=N.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const se=o=>{if(!o.length)return{isValid:!1,message:"No data available"};if(o.some(v=>v.percentage<0||v.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const x=o.reduce((v,S)=>v+S.percentage,0);return Math.abs(x-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},U=({data:o,chartId:E,withTooltips:x=!1,className:v,showLegend:S=!1,legendOrientation:M="horizontal",legendPosition:P="bottom",legendAlignment:z="center",legendShape:W="circle",size:T,thickness:A=1,padding:O=20,gapScale:K=0,cornerScale:L=0,children:ne=null})=>{const R=(0,m.RW)(),Y=(0,r.R)(E),[oe,re]=(0,g.v)(),{onMouseMove:le,onMouseLeave:ie,tooltipOpen:de,tooltipData:G,tooltipLeft:ce,tooltipTop:pe}=D({withTooltips:x}),ue=(0,s.useMemo)(()=>({showValues:!0}),[]),F=(0,_.B)(o,R,ue),{isValid:Q,message:me}=se(o),he=(0,s.useMemo)(()=>({thickness:A,gapScale:K,cornerScale:L}),[A,K,L]);if((0,r.t)(Y,F,R,"pie",Q,he),!Q)return(0,c.jsx)("div",{className:(0,n.A)("pie-chart",C["pie-chart"],v),children:(0,c.jsx)("div",{className:C["error-message"],children:me})});const X=T,$=T,I=S&&P==="top"?$-re:$,_e=Math.min(X,I)/2,ge=X/2,ve=I/2,fe=K*(2*Math.PI/o.length),w=_e-O,J=A===0?0:w*(1-A),ye=(w-J)/2,xe=L?Math.min(L*w,ye):0,Se=o.map((p,f)=>({...p,index:f})),Z={value:p=>p.value,fill:p=>p?.color||R.colors[p.index]};return(0,c.jsxs)("div",{className:(0,n.A)("pie-chart",C["pie-chart"],v),style:{display:"flex",flexDirection:S&&P==="top"?"column-reverse":"column"},children:[(0,c.jsx)("svg",{viewBox:`0 0 ${T} ${I}`,preserveAspectRatio:"xMidYMid meet",width:T,height:I,children:(0,c.jsxs)(i.A,{top:ve,left:ge,children:[(0,c.jsx)(a.A,{data:Se,pieValue:Z.value,outerRadius:w,innerRadius:J,padAngle:fe,cornerRadius:xe,children:p=>p.arcs.map((f,be)=>{const[je,Pe]=p.path.centroid(f),Te=f.endAngle-f.startAngle>=.25,Ae=De=>le(De,f.data),k={d:p.path(f)||"",fill:Z.fill(f.data)};return x&&(k.onMouseMove=Ae,k.onMouseLeave=ie),(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{...k}),Te&&(0,c.jsx)("text",{x:je,y:Pe,dy:".33em",fill:R.labelBackgroundColor||h.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:f.data.label})]},`arc-${be}`)})}),ne]})}),S&&(0,c.jsx)(j.s,{items:F,orientation:M,position:P,alignment:z,className:C["pie-chart-legend"],shape:W,ref:oe,chartId:Y}),x&&de&&G&&(0,c.jsx)(q.R,{data:G,top:pe||0,left:ce||0,style:{transform:"translate(-50%, -100%)"}})]})},H=o=>(0,s.useContext)(l.mJ)?(0,c.jsx)(U,{...o}):(0,c.jsx)(l.Sx,{children:(0,c.jsx)(U,{...o})});H.displayName="PieChart";const ae=(0,V.F)(H);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(y,d,e)=>{e.d(d,{R:()=>r});var i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(i),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),s={};s.insert="head",s.singleton=!1;var t=a()(n.A,s);const u=n.A.locals||{};var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=({data:l})=>(0,b.jsxs)(b.Fragment,{children:[l?.label,": ",l?.valueDisplay||l?.value]}),r=({data:l,top:m,left:h,component:j=D,children:_,className:g})=>(0,b.jsx)("div",{className:u.tooltip,style:{top:m,left:h},role:"tooltip",children:_||l&&(0,b.jsx)(j,{data:l,className:g})});try{r.displayName="BaseTooltip",r.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:r.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(y,d,e)=>{e.d(d,{p:()=>n});var i=e("../charts/src/providers/theme/theme-provider.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=[(s,{args:t})=>(0,a.jsx)(i.NP,{theme:t.theme,children:(0,a.jsx)("div",{style:{resize:t.resize??"both",overflow:"auto",padding:"1rem",width:t.containerWidth??"800px",height:t.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,a.jsx)(s,{})})})];try{n.displayName="sharedDecorator",n.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:n.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(y,d,e)=>{e.d(d,{r:()=>a});var i=e("../charts/src/providers/theme/themes.ts");const a={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"},theme:{control:{type:"select"},options:{default:void 0,jetpack:i.QI,woo:i.pk},defaultValue:void 0,table:{category:"Theme"}}};try{a.displayName="legendArgTypes",a.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:a.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(y,d,e)=>{e.d(d,{A:()=>u});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(i),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),t=s()(a());t.push([y.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),t.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const u=t},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(y,d,e)=>{e.d(d,{A:()=>u});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(i),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),t=s()(a());t.push([y.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),t.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const u=t}}]);
