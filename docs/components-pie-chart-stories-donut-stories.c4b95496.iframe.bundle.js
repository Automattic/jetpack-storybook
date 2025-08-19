"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":(P,f,e)=>{e.r(f),e.d(f,{CustomLegendPositioning:()=>t,CustomTheme:()=>j,Default:()=>g,Doughnut:()=>C,ErrorStates:()=>b,Thin:()=>S,WithLegend:()=>n,WithTooltipsDoughnut:()=>L,WithoutCenter:()=>T,__namedExportsOrder:()=>i,default:()=>A});var u=e("../charts/src/providers/theme/themes.ts"),v=e("../charts/src/stories/decorator-config.tsx"),h=e("../charts/src/stories/legend-config.tsx"),p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),y=e("../charts/src/components/pie-chart/pie-chart.tsx"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],A={title:"JS Packages/Charts/Types/Donut Chart",component:y.A,parameters:{layout:"centered"},decorators:v.p,argTypes:{...h.r,size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:{type:"select"},options:["default","jetpack","woo"],mapping:{default:void 0,jetpack:u.QI,woo:u.pk},defaultValue:"default"},maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},g={args:{size:400,containerWidth:"432px",containerHeight:"432px",resize:"none",thickness:.5,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:B,theme:"default",children:(0,a.jsxs)(p.A,{children:[(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},T={args:{...g.args,children:void 0}},j={args:{...g.args,theme:u.pk}},b={render:()=>(0,a.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Empty Data"}),(0,a.jsx)(y.A,{size:300,thickness:.6,data:[]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Single Value"}),(0,a.jsx)(y.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},S={args:{...g.args,thickness:.2,gapScale:.01,size:700,containerWidth:"732px",containerHeight:"732px",children:(0,a.jsxs)(p.A,{children:[(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},C={args:{...g.args,thickness:.5,gapScale:.03,cornerScale:.03,size:600,containerWidth:"632px",containerHeight:"632px",children:(0,a.jsxs)(p.A,{children:[(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},L={args:{...g.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},n={args:{...g.args,showLegend:!0}},t={args:{...g.args,thickness:.4,showLegend:!0,legendOrientation:"vertical",legendAlignment:"start",legendPosition:"top",data:[{label:"Desktop",value:45e3,valueDisplay:"45K",percentage:45},{label:"Mobile",value:35e3,valueDisplay:"35K",percentage:35},{label:"Tablet",value:2e4,valueDisplay:"20K",percentage:20}],children:(0,a.jsx)(p.A,{children:(0,a.jsx)(c.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:-8,children:"Distribution"})})},parameters:{docs:{description:{story:"Donut chart with vertical legend positioned at the top left."}}}},i=["Default","WithoutCenter","CustomTheme","ErrorStates","Thin","Doughnut","WithTooltipsDoughnut","WithLegend","CustomLegendPositioning"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...T.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    theme: wooTheme
  }
}`,...j.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true
  }
}`,...n.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js":(P,f,e)=>{e.d(f,{A:()=>L});var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=e.n(v),p=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),y=e("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function a(n,t){n(t)}function B(n){var t=n===void 0?{}:n,i=t.innerRadius,o=t.outerRadius,s=t.cornerRadius,l=t.startAngle,d=t.endAngle,x=t.padAngle,m=t.padRadius,r=(0,c.A)();return i!=null&&a(r.innerRadius,i),o!=null&&a(r.outerRadius,o),s!=null&&a(r.cornerRadius,s),l!=null&&a(r.startAngle,l),d!=null&&a(r.endAngle,d),x!=null&&a(r.padAngle,x),m!=null&&a(r.padRadius,m),r}function R(n){var t=n===void 0?{}:n,i=t.x,o=t.x0,s=t.x1,l=t.y,d=t.y0,x=t.y1,m=t.defined,r=t.curve,_=d3Area();return i&&setNumberOrNumberAccessor(_.x,i),o&&setNumberOrNumberAccessor(_.x0,o),s&&setNumberOrNumberAccessor(_.x1,s),l&&setNumberOrNumberAccessor(_.y,l),d&&setNumberOrNumberAccessor(_.y0,d),x&&setNumberOrNumberAccessor(_.y1,x),m&&_.defined(m),r&&_.curve(r),_}function A(n){var t=n===void 0?{}:n,i=t.x,o=t.y,s=t.defined,l=t.curve,d=d3Line();return i&&setNumberOrNumberAccessor(d.x,i),o&&setNumberOrNumberAccessor(d.y,o),s&&d.defined(s),l&&d.curve(l),d}function g(n){var t=n===void 0?{}:n,i=t.startAngle,o=t.endAngle,s=t.padAngle,l=t.value,d=t.sort,x=t.sortValues,m=(0,y.A)();return(d===null||d!=null)&&m.sort(d),(x===null||x!=null)&&m.sortValues(x),l!=null&&m.value(l),s!=null&&a(m.padAngle,s),i!=null&&a(m.startAngle,i),o!=null&&a(m.endAngle,o),m}function T(n){var t=n===void 0?{}:n,i=t.angle,o=t.radius,s=t.defined,l=t.curve,d=d3RadialLine();return i&&setNumberOrNumberAccessor(d.angle,i),o&&setNumberOrNumberAccessor(d.radius,o),s&&d.defined(s),l&&d.curve(l),d}function j(n){var t=n.keys,i=n.value,o=n.order,s=n.offset,l=d3Stack();return t&&l.keys(t),i&&setNumberOrNumberAccessor(l.value,i),o&&l.order(stackOrder(o)),s&&l.offset(stackOffset(s)),l}var b=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function S(){return S=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},S.apply(this,arguments)}function C(n,t){if(n==null)return{};var i={},o=Object.keys(n),s,l;for(l=0;l<o.length;l++)s=o[l],!(t.indexOf(s)>=0)&&(i[s]=n[s]);return i}function L(n){var t=n.className,i=n.top,o=n.left,s=n.data,l=s===void 0?[]:s,d=n.centroid,x=n.innerRadius,m=x===void 0?0:x,r=n.outerRadius,_=n.cornerRadius,M=n.startAngle,D=n.endAngle,V=n.padAngle,w=n.padRadius,W=n.pieSort,U=n.pieSortValues,G=n.pieValue,N=n.children,I=n.fill,O=I===void 0?"":I,H=C(n,b),k=B({innerRadius:m,outerRadius:r,cornerRadius:_,padRadius:w}),Y=g({startAngle:M,endAngle:D,padAngle:V,value:G,sort:W,sortValues:U}),F=Y(l);return N?u.createElement(u.Fragment,null,N({arcs:F,path:k,pie:Y})):u.createElement(p.A,{className:"visx-pie-arcs-group",top:i,left:o},F.map(function(K,Q){return u.createElement("g",{key:"pie-arc-"+Q},u.createElement("path",S({className:h()("visx-pie-arc",t),d:k(K)||"",fill:O==null||typeof O=="string"?O:O(K)},H)),d?.(k.centroid(K),K))}))}},"../charts/src/components/pie-chart/pie-chart.tsx":(P,f,e)=>{e.d(f,{A:()=>m});var u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),v=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../charts/src/hooks/use-global-chart-theme.ts"),y=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),a=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js");const B=({withTooltips:r})=>{const{tooltipOpen:_,tooltipLeft:M,tooltipTop:D,tooltipData:V,hideTooltip:w,showTooltip:W}=(0,a.A)(),U=(0,p.useCallback)((N,I)=>{if(!r)return;const O=(0,y.A)(N);O&&W({tooltipData:I,tooltipLeft:O.x,tooltipTop:O.y-10})},[r,W]),G=(0,p.useCallback)(()=>{r&&w()},[r,w]);return{onMouseMove:U,onMouseLeave:G,tooltipOpen:_,tooltipData:V||null,tooltipLeft:M,tooltipTop:D}};var R=e("../charts/src/providers/chart-context/utils.ts"),A=e("../charts/src/providers/chart-context/global-charts-provider.tsx"),g=e("../charts/src/components/legend/legend.tsx"),T=e("../charts/src/components/legend/use-chart-legend-data.ts"),j=e("../charts/src/components/shared/use-element-height.ts"),b=e("../charts/src/components/shared/with-responsive.tsx"),S=e("../charts/src/components/tooltip/base-tooltip.tsx"),C=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(C),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),t={};t.insert="head",t.singleton=!1;var i=L()(n.A,t);const o=n.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=r=>{if(!r.length)return{isValid:!1,message:"No data available"};if(r.some(D=>D.percentage<0||D.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const M=r.reduce((D,V)=>D+V.percentage,0);return Math.abs(M-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},d=({data:r,chartId:_,withTooltips:M=!1,className:D,showLegend:V=!1,legendOrientation:w="horizontal",legendPosition:W="bottom",legendAlignment:U="center",legendShape:G="circle",size:N,thickness:I=1,padding:O=20,gapScale:H=0,cornerScale:k=0,children:Y=null})=>{const F=(0,c.u)(),K=(0,R.R)(_),[Q,oe]=(0,j.v)(),{onMouseMove:re,onMouseLeave:ie,tooltipOpen:le,tooltipData:Z,tooltipLeft:de,tooltipTop:ce}=B({withTooltips:M}),ue=(0,p.useMemo)(()=>({showValues:!0}),[]),q=(0,T.B)(r,ue),{isValid:ee,message:pe}=l(r),me=(0,p.useMemo)(()=>({thickness:I,gapScale:H,cornerScale:k}),[I,H,k]);if((0,R.t)({chartId:K,legendItems:q,chartType:"pie",isDataValid:ee,metadata:me}),!ee)return(0,s.jsx)("div",{className:(0,h.A)("pie-chart",o["pie-chart"],D),children:(0,s.jsx)("div",{className:o["error-message"],children:pe})});const te=N,ne=N,X=V&&W==="top"?ne-oe:ne,he=Math.min(te,X)/2,ge=te/2,_e=X/2,fe=H*(2*Math.PI/r.length),$=he-O,se=I===0?0:$*(1-I),ve=($-se)/2,xe=k?Math.min(k*$,ve):0,ye=r.map((E,z)=>({...E,index:z})),ae={value:E=>E.value,fill:E=>E?.color||F.colors[E.index]};return(0,s.jsxs)("div",{className:(0,h.A)("pie-chart",o["pie-chart"],D),style:{display:"flex",flexDirection:V&&W==="top"?"column-reverse":"column"},children:[(0,s.jsx)("svg",{viewBox:`0 0 ${N} ${X}`,preserveAspectRatio:"xMidYMid meet",width:N,height:X,children:(0,s.jsxs)(u.A,{top:_e,left:ge,children:[(0,s.jsx)(v.A,{data:ye,pieValue:ae.value,outerRadius:$,innerRadius:se,padAngle:fe,cornerRadius:xe,children:E=>E.arcs.map((z,Ae)=>{const[Se,be]=E.path.centroid(z),De=z.endAngle-z.startAngle>=.25,Te=je=>re(je,z.data),J={d:E.path(z)||"",fill:ae.fill(z.data)};return M&&(J.onMouseMove=Te,J.onMouseLeave=ie),(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{...J}),De&&(0,s.jsx)("text",{x:Se,y:be,dy:".33em",fill:F.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:z.data.label})]},`arc-${Ae}`)})}),Y]})}),V&&(0,s.jsx)(g.s,{items:q,orientation:w,position:W,alignment:U,className:o["pie-chart-legend"],shape:G,ref:Q,chartId:K}),M&&le&&Z&&(0,s.jsx)(S.R,{data:Z,top:ce||0,left:de||0,style:{transform:"translate(-50%, -100%)"}})]})},x=r=>(0,p.useContext)(A.mJ)?(0,s.jsx)(d,{...r}):(0,s.jsx)(A.Sx,{children:(0,s.jsx)(d,{...r})});x.displayName="PieChart";const m=(0,b.F)(x);try{piechart.displayName="piechart",piechart.__docgenInfo={description:"",displayName:"piechart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"circle"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<DataPointPercentage[], number>"}},legendPosition:{defaultValue:{value:"bottom"},description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:{value:"center"},description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#piechart"]={docgenInfo:piechart.__docgenInfo,name:"piechart",path:"../charts/src/components/pie-chart/pie-chart.tsx#piechart"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(P,f,e)=>{e.d(f,{R:()=>R});var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(u),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),p={};p.insert="head",p.singleton=!1;var c=v()(h.A,p);const y=h.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=({data:A})=>(0,a.jsxs)(a.Fragment,{children:[A?.label,": ",A?.valueDisplay||A?.value]}),R=({data:A,top:g,left:T,component:j=B,children:b,className:S})=>(0,a.jsx)("div",{className:y.tooltip,style:{top:g,left:T},role:"tooltip",children:b||A&&(0,a.jsx)(j,{data:A,className:S})});try{R.displayName="BaseTooltip",R.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:{value:`( { data }: TooltipComponentProps ) => (
	<>
		{ data?.label }: { data?.valueDisplay || data?.value }
	</>
)`},description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:R.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/stories/decorator-config.tsx":(P,f,e)=>{e.d(f,{p:()=>h});var u=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=[(p,{args:c})=>(0,v.jsx)(u.N,{theme:c.theme,children:(0,v.jsx)("div",{style:{resize:c.resize??"both",overflow:"auto",padding:"1rem",width:c.containerWidth??"800px",height:c.containerHeight??"600px",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,v.jsx)(p,{})})})];try{h.displayName="sharedDecorator",h.__docgenInfo={description:"Shared decorator for legend stories with theme support and resizable container",displayName:"sharedDecorator",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/decorator-config.tsx#sharedDecorator"]={docgenInfo:h.__docgenInfo,name:"sharedDecorator",path:"../charts/src/stories/decorator-config.tsx#sharedDecorator"})}catch{}},"../charts/src/stories/legend-config.tsx":(P,f,e)=>{e.d(f,{r:()=>u});const u={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{u.displayName="legendArgTypes",u.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:u.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(P,f,e)=>{e.d(f,{A:()=>y});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(u),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(h),c=p()(v());c.push([P.id,".s6qS3V8pL7zk4p_SuIGQ{display:flex;flex-direction:column;overflow:hidden}",""]),c.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const y=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(P,f,e)=>{e.d(f,{A:()=>y});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(u),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(h),c=p()(v());c.push([P.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),c.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const y=c}}]);
