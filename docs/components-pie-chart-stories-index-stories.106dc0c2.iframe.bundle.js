(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(m,d,e)=>{var $,Z,q,ee,se,te,oe,ne,ae,re,le,de,ie,ce,pe,me,ue,_e,he,ge,ve,fe,ye,xe;"use strict";e.r(d),e.d(d,{Default:()=>v,Doughnut:()=>I,ErrorStates:()=>W,Responsiveness:()=>B,WithHorizontalLegend:()=>L,WithTooltips:()=>M,WithTooltipsDoughnut:()=>k,WithVerticalLegend:()=>F,__namedExportsOrder:()=>Pe,default:()=>Ee});var i=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),a=e("../charts/src/providers/theme/theme-provider.tsx"),s=e("../charts/src/providers/theme/themes.ts"),o=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),y=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const j=({withTooltips:_})=>{const{tooltipOpen:O,tooltipLeft:b,tooltipTop:A,tooltipData:V,hideTooltip:S,showTooltip:z}=(0,y.A)(),H=(0,c.useCallback)((N,J)=>{if(!_)return;const D=(0,p.A)(N);D&&z({tooltipData:J,tooltipLeft:D.x,tooltipTop:D.y-10})},[_,z]),G=(0,c.useCallback)(()=>{_&&S()},[_,S]);return{onMouseMove:H,onMouseLeave:G,tooltipOpen:O,tooltipData:V||null,tooltipLeft:b,tooltipTop:A}};var g=e("../charts/src/components/legend/base-legend.tsx"),u=e("../charts/src/components/shared/with-responsive.tsx"),T=e("../charts/src/components/tooltip/base-tooltip.tsx"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(E),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss"),x={};x.insert="head",x.singleton=!1;var Y=U()(C.A,x);const P=C.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Ae=_=>{if(!_.length)return{isValid:!1,message:"No data available"};if(_.some(A=>A.percentage<0||A.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const b=_.reduce((A,V)=>A+V.percentage,0);return Math.abs(b-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},R=({data:_,withTooltips:O=!1,className:b,showLegend:A,legendOrientation:V,size:S,thickness:z=1,padding:H=20,gapScale:G=0,cornerScale:N=0,children:J=null})=>{const D=(0,a.R)(),{onMouseMove:be,onMouseLeave:Re,tooltipOpen:we,tooltipData:Se,tooltipLeft:Le,tooltipTop:Fe}=j({withTooltips:O}),{isValid:Ie,message:Me}=Ae(_);if(!Ie)return(0,t.jsx)("div",{className:(0,l.A)("pie-chart",P["pie-chart"],b),children:(0,t.jsx)("div",{className:P["error-message"],children:Me})});const je=S,Te=S,ke=Math.min(je,Te)/2,Be=je/2,We=Te/2,Ve=G*(2*Math.PI/_.length),K=ke-H,Ce=K*(1-z),ze=(K-Ce)/2,Ne=N?Math.min(N*K,ze):0,Ke=_.map((h,f)=>({...h,index:f})),Oe={value:h=>h.value,fill:h=>(h==null?void 0:h.color)||D.colors[h.index]},Ue=_.map((h,f)=>({label:h.label,value:h.value.toString(),color:D.colors[f%D.colors.length]}));return(0,t.jsxs)("div",{className:(0,l.A)("pie-chart",P["pie-chart"],b),children:[(0,t.jsx)("svg",{viewBox:`0 0 ${S} ${S}`,preserveAspectRatio:"xMidYMid meet",width:S,height:S,children:(0,t.jsxs)(i.A,{top:We,left:Be,children:[(0,t.jsx)(o.A,{data:Ke,pieValue:Oe.value,outerRadius:K,innerRadius:Ce,padAngle:Ve,cornerRadius:Ne,children:h=>h.arcs.map((f,Ye)=>{const[He,Ge]=h.path.centroid(f),Je=f.endAngle-f.startAngle>=.25,Qe=Xe=>be(Xe,f.data),Q={d:h.path(f)||"",fill:Oe.fill(f.data)};return O&&(Q.onMouseMove=Qe,Q.onMouseLeave=Re),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{...Q}),Je&&(0,t.jsx)("text",{x:He,y:Ge,dy:".33em",fill:D.labelBackgroundColor||s.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:f.data.label})]},`arc-${Ye}`)})}),J]})}),A&&(0,t.jsx)(g.$,{items:Ue,orientation:V,className:P["pie-chart-legend"]}),O&&we&&Se&&(0,t.jsx)(T.R,{data:Se,top:Fe||0,left:Le||0,style:{transform:"translate(-50%, -100%)"}})]})};R.displayName="PieChart";const w=(0,u.F)(R);try{R.displayName="PieChart",R.__docgenInfo={description:"",displayName:"PieChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:R.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch(_){}const De=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],Ee={title:"JS Packages/Charts/Types/Pie Chart",component:w,parameters:{layout:"centered"},decorators:[(_,{args:O})=>(0,t.jsx)(a.N,{theme:O.theme,children:(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,t.jsx)(_,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},legendOrientation:{control:"radio",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:s.QI,woo:s.pk},defaultValue:void 0}}},v={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:De,theme:"default",showLegend:!1,legendOrientation:"horizontal"}},L={args:{...v.args,showLegend:!0,size:600,legendOrientation:"horizontal"}},F={args:{...v.args,showLegend:!0,size:600,legendOrientation:"vertical"}},I={args:{...v.args,thickness:.5,padding:0,gapScale:.03,cornerScale:.03,children:(0,t.jsxs)(i.A,{children:[(0,t.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,t.jsx)(r.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},M={args:{...v.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},k={args:{...v.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},X={...v.args};delete X.size;const B={args:X,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},W={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(w,{size:300,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Invalid Percentage Total"}),(0,t.jsx)(w,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Negative Values"}),(0,t.jsx)(w,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Data Point"}),(0,t.jsx)(w,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},Pe=["Default","WithHorizontalLegend","WithVerticalLegend","Doughnut","WithTooltips","WithTooltipsDoughnut","Responsiveness","ErrorStates"];v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    thickness: 1,
    gapScale: 0,
    padding: 20,
    cornerScale: 0,
    withTooltips: false,
    data,
    theme: 'default',
    showLegend: false,
    legendOrientation: 'horizontal'
  }
}`,...(q=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}},L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'horizontal'
  }
}`,...(te=(se=L.parameters)==null?void 0:se.docs)==null?void 0:te.source}}},F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'vertical'
  }
}`,...(ae=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}},I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5,
    padding: 0,
    gapScale: 0.03,
    cornerScale: 0.03,
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
}`,...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}},M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}},k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(_e=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}},B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...(ve=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}},W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}}},"../charts/src/components/legend/base-legend.tsx":(m,d,e)=>{"use strict";e.d(d,{$:()=>g});var i=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),r=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(s),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss"),p={};p.insert="head",p.singleton=!1;var y=o()(l.A,p);const c=l.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j={horizontal:"row",vertical:"column"},g=({items:u,className:T,orientation:E="horizontal"})=>{const U=(0,r.A)({domain:u.map(C=>C.label),range:u.map(C=>C.color)});return(0,n.jsx)("div",{className:(0,a.A)(c.legend,c[`legend--${E}`],T),role:"list",children:(0,n.jsx)(i.A,{scale:U,direction:j[E],shape:"rect",shapeWidth:16,shapeHeight:16,className:c["legend-items"],children:C=>(0,n.jsx)("div",{className:c[`legend--${E}`],children:C.map(x=>{var Y,P;return(0,n.jsxs)("div",{className:c["legend-item"],children:[(0,n.jsx)("svg",{width:16,height:16,children:(0,n.jsx)("rect",{width:16,height:16,fill:x.value,className:c["legend-item-swatch"]})}),(0,n.jsxs)("span",{className:c["legend-item-label"],children:[x.text,((Y=u.find(t=>t.label===x.text))==null?void 0:Y.value)&&(0,n.jsx)("span",{className:c["legend-item-value"],children:(P=u.find(t=>t.label===x.text))==null?void 0:P.value})]})]},x.text)})})})})};try{g.displayName="BaseLegend",g.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:g.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch(u){}},"../charts/src/components/shared/with-responsive.tsx":(m,d,e)=>{"use strict";e.d(d,{F:()=>a});var i=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(s,o){const{maxWidth:l=1200,aspectRatio:p=.5,debounceTime:y=50}=o||{};return function(n){const{parentRef:j,width:g}=(0,i.A)({debounceTime:y,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),u=g?Math.min(g,l):600,T=u*p;return(0,r.jsx)("div",{ref:j,style:{width:"100%",minHeight:`${T}px`},children:(0,r.jsx)(s,{width:u,height:T,size:u,...n})})}}try{a.displayName="withResponsive",a.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from @visx/responsive.`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:a.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch(s){}},"../charts/src/components/tooltip/base-tooltip.tsx":(m,d,e)=>{"use strict";e.d(d,{R:()=>c});var i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss"),s={};s.insert="head",s.singleton=!1;var o=r()(a.A,s);const l=a.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({data:n})=>(0,p.jsxs)(p.Fragment,{children:[n==null?void 0:n.label,": ",(n==null?void 0:n.valueDisplay)||(n==null?void 0:n.value)]}),c=({data:n,top:j,left:g,component:u=y,children:T,className:E})=>(0,p.jsx)("div",{className:l.tooltip,style:{top:j,left:g},role:"tooltip",children:T||n&&(0,p.jsx)(u,{data:n,className:E})});try{c.displayName="BaseTooltip",c.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:c.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch(n){}},"../charts/src/providers/theme/theme-provider.tsx":(m,d,e)=>{"use strict";e.d(d,{N:()=>l,R:()=>o});var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../charts/src/providers/theme/themes.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,i.createContext)(r.zQ),o=()=>(0,i.useContext)(s),l=({theme:p={},children:y})=>{const c={...r.zQ,...p};return(0,a.jsx)(s.Provider,{value:c,children:y})};try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:l.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch(p){}try{o.displayName="useChartTheme",o.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:o.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch(p){}},"../charts/src/providers/theme/themes.ts":(m,d,e)=>{"use strict";e.d(d,{QI:()=>r,pk:()=>a,zQ:()=>i});const i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:0,gridColor:"",gridColorDark:""},r={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:0,gridColor:"",gridColorDark:""},a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:0,gridColor:"",gridColorDark:""}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss":(m,d,e)=>{"use strict";e.d(d,{A:()=>l});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(a),o=s()(r());o.push([m.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),o.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss":(m,d,e)=>{"use strict";e.d(d,{A:()=>l});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(a),o=s()(r());o.push([m.id,".s6qS3V8pL7zk4p_SuIGQ{position:relative}",""]),o.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss":(m,d,e)=>{"use strict";e.d(d,{A:()=>l});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(a),o=s()(r());o.push([m.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const l=o},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(m,d,e)=>{"use strict";var i=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function a(){}a.resetWarningCache=r,m.exports=function(){function s(p,y,c,n,j,g){if(g!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:a,resetWarningCache:r};return l.PropTypes=l,l}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(m,d,e)=>{if(!1)var i,r;else m.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":m=>{"use strict";var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";m.exports=d}}]);})();
