"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(E,v,e)=>{e.r(v),e.d(v,{CustomLegendPositioning:()=>P,Default:()=>g,ErrorStates:()=>b,Responsiveness:()=>j,WithLegend:()=>S,WithTooltips:()=>_,__namedExportsOrder:()=>K,default:()=>w});var p=e("../charts/src/providers/theme/themes.ts"),y=e("../charts/src/stories/decorator-config.tsx"),m=e("../charts/src/stories/legend-config.tsx"),c=e("../charts/src/components/pie-chart/pie-chart.tsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],w={title:"JS Packages/Charts/Types/Pie Chart",component:c.A,parameters:{layout:"centered"},decorators:y.p,argTypes:{...m.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:{type:"select"},options:["default","jetpack","woo"],mapping:{default:void 0,jetpack:p.QI,woo:p.pk},defaultValue:"default"},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},g={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:A,theme:"default",resize:"none",size:400,containerWidth:"432px",containerHeight:"432px"}},_={args:{...g.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},S={args:{...g.args,showLegend:!0}},P={args:{data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],thickness:1,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,showLegend:!0,legendOrientation:"vertical",legendAlignment:"center",legendPosition:"top",legendShape:"circle",size:400,containerWidth:"432px",containerHeight:"480px",resize:"none"},parameters:{docs:{description:{story:"Pie chart with top-end positioned vertical legend. This demonstrates non-default legend positioning to showcase different legend placement possibilities with device usage data."}}}},B={...g.args,resize:"both"};delete B.size;const j={args:B,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},b={render:()=>(0,n.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Empty Data"}),(0,n.jsx)(c.A,{size:300,data:[]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Invalid Percentage Total"}),(0,n.jsx)(c.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Negative Values"}),(0,n.jsx)(c.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Single Data Point"}),(0,n.jsx)(c.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},K=["Default","WithTooltips","WithLegend","CustomLegendPositioning","Responsiveness","ErrorStates"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...S.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(E,v,e)=>{e.d(v,{A:()=>$});var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(y),c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),n=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),A=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function h(s,t){s(t)}function w(s){var t=s===void 0?{}:s,d=t.innerRadius,o=t.outerRadius,a=t.cornerRadius,l=t.startAngle,i=t.endAngle,x=t.padAngle,u=t.padRadius,r=(0,n.A)();return d!=null&&h(r.innerRadius,d),o!=null&&h(r.outerRadius,o),a!=null&&h(r.cornerRadius,a),l!=null&&h(r.startAngle,l),i!=null&&h(r.endAngle,i),x!=null&&h(r.padAngle,x),u!=null&&h(r.padRadius,u),r}function g(s){var t=s===void 0?{}:s,d=t.x,o=t.x0,a=t.x1,l=t.y,i=t.y0,x=t.y1,u=t.defined,r=t.curve,f=d3Area();return d&&setNumberOrNumberAccessor(f.x,d),o&&setNumberOrNumberAccessor(f.x0,o),a&&setNumberOrNumberAccessor(f.x1,a),l&&setNumberOrNumberAccessor(f.y,l),i&&setNumberOrNumberAccessor(f.y0,i),x&&setNumberOrNumberAccessor(f.y1,x),u&&f.defined(u),r&&f.curve(r),f}function _(s){var t=s===void 0?{}:s,d=t.x,o=t.y,a=t.defined,l=t.curve,i=d3Line();return d&&setNumberOrNumberAccessor(i.x,d),o&&setNumberOrNumberAccessor(i.y,o),a&&i.defined(a),l&&i.curve(l),i}function S(s){var t=s===void 0?{}:s,d=t.startAngle,o=t.endAngle,a=t.padAngle,l=t.value,i=t.sort,x=t.sortValues,u=(0,A.A)();return(i===null||i!=null)&&u.sort(i),(x===null||x!=null)&&u.sortValues(x),l!=null&&u.value(l),a!=null&&h(u.padAngle,a),d!=null&&h(u.startAngle,d),o!=null&&h(u.endAngle,o),u}function P(s){var t=s===void 0?{}:s,d=t.angle,o=t.radius,a=t.defined,l=t.curve,i=d3RadialLine();return d&&setNumberOrNumberAccessor(i.angle,d),o&&setNumberOrNumberAccessor(i.radius,o),a&&i.defined(a),l&&i.curve(l),i}function B(s){var t=s.keys,d=s.value,o=s.order,a=s.offset,l=d3Stack();return t&&l.keys(t),d&&setNumberOrNumberAccessor(l.value,d),o&&l.order(stackOrder(o)),a&&l.offset(stackOffset(a)),l}var j=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function b(){return b=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var d=arguments[t];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(s[o]=d[o])}return s},b.apply(this,arguments)}function K(s,t){if(s==null)return{};var d={},o=Object.keys(s),a,l;for(l=0;l<o.length;l++)a=o[l],!(t.indexOf(a)>=0)&&(d[a]=s[a]);return d}function $(s){var t=s.className,d=s.top,o=s.left,a=s.data,l=a===void 0?[]:a,i=s.centroid,x=s.innerRadius,u=x===void 0?0:x,r=s.outerRadius,f=s.cornerRadius,R=s.startAngle,O=s.endAngle,C=s.padAngle,W=s.padRadius,N=s.pieSort,k=s.pieSortValues,U=s.pieValue,L=s.children,M=s.fill,T=M===void 0?"":M,H=K(s,j),I=w({innerRadius:u,outerRadius:r,cornerRadius:f,padRadius:W}),F=S({startAngle:R,endAngle:O,padAngle:C,value:U,sort:N,sortValues:k}),Y=F(l);return L?p.createElement(p.Fragment,null,L({arcs:Y,path:I,pie:F})):p.createElement(c.A,{className:"visx-pie-arcs-group",top:d,left:o},Y.map(function(z,Q){return p.createElement("g",{key:"pie-arc-"+Q},p.createElement("path",b({className:m()("visx-pie-arc",t),d:I(z)||"",fill:T==null||typeof T=="string"?T:T(z)},H)),i?.(I.centroid(z),z))}))}},"../charts/src/components/pie-chart/pie-chart.tsx":(E,v,e)=>{e.d(v,{A:()=>u});var p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/hooks/use-global-chart-theme.ts"),A=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),h=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const w=({withTooltips:r})=>{const{tooltipOpen:f,tooltipLeft:R,tooltipTop:O,tooltipData:C,hideTooltip:W,showTooltip:N}=(0,h.A)(),k=(0,c.useCallback)((L,M)=>{if(!r)return;const T=(0,A.A)(L);T&&N({tooltipData:M,tooltipLeft:T.x,tooltipTop:T.y-10})},[r,N]),U=(0,c.useCallback)(()=>{r&&W()},[r,W]);return{onMouseMove:k,onMouseLeave:U,tooltipOpen:f,tooltipData:C||null,tooltipLeft:R,tooltipTop:O}};var g=e("../charts/src/providers/chart-context/utils.ts"),_=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),S=e("../charts/src/components/legend/legend.tsx"),P=e("../charts/src/components/legend/use-chart-legend-data.ts"),B=e("../charts/src/components/shared/use-element-height.ts"),j=e("../charts/src/components/shared/with-responsive.tsx"),b=e("../charts/src/components/tooltip/base-tooltip.tsx"),K=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),$=e.n(K),s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),t={};t.insert="head",t.singleton=!1;var d=$()(s.A,t);const o=s.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=r=>{if(!r.length)return{isValid:!1,message:"No data available"};if(r.some(O=>O.percentage<0||O.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const R=r.reduce((O,C)=>O+C.percentage,0);return Math.abs(R-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},i=({data:r,chartId:f,withTooltips:R=!1,className:O,showLegend:C=!1,legendOrientation:W="horizontal",legendPosition:N="bottom",legendAlignment:k="center",legendShape:U="circle",size:L,thickness:M=1,padding:T=20,gapScale:H=0,cornerScale:I=0,children:F=null})=>{const Y=(0,n.u)(),z=(0,g.R)(f),[Q,oe]=(0,B.v)(),{onMouseMove:re,onMouseLeave:le,tooltipOpen:ie,tooltipData:Z,tooltipLeft:de,tooltipTop:ce}=w({withTooltips:R}),pe=(0,c.useMemo)(()=>({showValues:!0}),[]),q=(0,P.B)(r,pe),{isValid:ee,message:ue}=l(r),me=(0,c.useMemo)(()=>({thickness:M,gapScale:H,cornerScale:I}),[M,H,I]);if((0,g.t)({chartId:z,legendItems:q,chartType:"pie",isDataValid:ee,metadata:me}),!ee)return(0,a.jsx)("div",{className:(0,m.A)("pie-chart",o["pie-chart"],O),children:(0,a.jsx)("div",{className:o["error-message"],children:ue})});const te=L,se=L,G=C&&N==="top"?se-oe:se,he=Math.min(te,G)/2,ge=te/2,_e=G/2,fe=H*(2*Math.PI/r.length),X=he-T,ae=M===0?0:X*(1-M),ve=(X-ae)/2,ye=I?Math.min(I*X,ve):0,xe=r.map((D,V)=>({...D,index:V})),ne={value:D=>D.value,fill:D=>D?.color||Y.colors[D.index]};return(0,a.jsxs)("div",{className:(0,m.A)("pie-chart",o["pie-chart"],O),style:{display:"flex",flexDirection:C&&N==="top"?"column-reverse":"column"},children:[(0,a.jsx)("svg",{viewBox:`0 0 ${L} ${G}`,preserveAspectRatio:"xMidYMid meet",width:L,height:G,children:(0,a.jsxs)(p.A,{top:_e,left:ge,children:[(0,a.jsx)(y.A,{data:xe,pieValue:ne.value,outerRadius:X,innerRadius:ae,padAngle:fe,cornerRadius:ye,children:D=>D.arcs.map((V,be)=>{const[Ae,Se]=D.path.centroid(V),je=V.endAngle-V.startAngle>=.25,Oe=Pe=>re(Pe,V.data),J={d:D.path(V)||"",fill:ne.fill(V.data)};return R&&(J.onMouseMove=Oe,J.onMouseLeave=le),(0,a.jsxs)("g",{children:[(0,a.jsx)("path",{...J}),je&&(0,a.jsx)("text",{x:Ae,y:Se,dy:".33em",fill:Y.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:V.data.label})]},`arc-${be}`)})}),F]})}),C&&(0,a.jsx)(S.s,{items:q,orientation:W,position:N,alignment:k,className:o["pie-chart-legend"],shape:U,ref:Q,chartId:z}),R&&ie&&Z&&(0,a.jsx)(b.R,{data:Z,top:ce||0,left:de||0,style:{transform:"translate(-50%, -100%)"}})]})},x=r=>(0,c.useContext)(_.mJ)?(0,a.jsx)(i,{...r}):(0,a.jsx)(_.Sx,{children:(0,a.jsx)(i,{...r})});x.displayName="PieChart";const u=(0,j.F)(x);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(E,v,e)=>{e.d(v,{R:()=>g});var p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(p),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),c={};c.insert="head",c.singleton=!1;var n=y()(m.A,c);const A=m.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=({data:_})=>(0,h.jsxs)(h.Fragment,{children:[_?.label,": ",_?.valueDisplay||_?.value]}),g=({data:_,top:S,left:P,component:B=w,children:j,className:b})=>(0,h.jsx)("div",{className:A.tooltip,style:{top:S,left:P},role:"tooltip",children:j||_&&(0,h.jsx)(B,{data:_,className:b})});try{g.displayName="BaseTooltip",g.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:g.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(E,v,e)=>{e.d(v,{p:()=>m});var p=e("../charts/src/providers/theme/theme-provider.tsx"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=[(c,{args:n})=>(0,y.jsx)(p.N,{theme:n.theme,children:(0,y.jsx)("div",{style:{resize:n.resize??"both",overflow:"auto",padding:"1rem",width:n.containerWidth??"800px",height:n.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,y.jsx)(c,{})})})];try{m.displayName="sharedDecorator",m.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:m.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(E,v,e)=>{e.d(v,{r:()=>p});const p={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{p.displayName="legendArgTypes",p.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:p.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(E,v,e)=>{e.d(v,{A:()=>A});var p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(p),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(m),n=c()(y());n.push([E.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const A=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(E,v,e)=>{e.d(v,{A:()=>A});var p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(p),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(m),n=c()(y());n.push([E.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const A=n}}]);
