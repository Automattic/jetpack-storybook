(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(u,l,e)=>{var $,Z,q,ee,se,te,oe,ne,ae,re,de,le,ie,ce,pe,me,ue,_e,he,ge,ve,fe,ye,xe;"use strict";e.r(l),e.d(l,{Default:()=>y,Doughnut:()=>I,ErrorStates:()=>V,FixedDimensions:()=>W,WithHorizontalLegend:()=>F,WithTooltips:()=>k,WithTooltipsDoughnut:()=>B,WithVerticalLegend:()=>M,__namedExportsOrder:()=>Pe,default:()=>Ee});var i=e("../charts/src/providers/theme/theme-provider.tsx"),a=e("../charts/src/providers/theme/themes.ts"),r=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),c=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n=({withTooltips:m})=>{const{tooltipOpen:T,tooltipLeft:b,tooltipTop:C,tooltipData:N,hideTooltip:P,showTooltip:U}=(0,c.A)(),J=(0,f.useCallback)((Y,R)=>{if(!m)return;const z=(0,d.A)(Y);z&&U({tooltipData:R,tooltipLeft:z.x,tooltipTop:z.y-10})},[m,U]),Q=(0,f.useCallback)(()=>{m&&P()},[m,P]);return{onMouseMove:J,onMouseLeave:Q,tooltipOpen:T,tooltipData:N||null,tooltipLeft:b,tooltipTop:C}};var j=e("../charts/src/components/legend/base-legend.tsx"),g=e("../charts/src/components/shared/with-responsive.tsx"),_=e("../charts/src/components/tooltip/base-tooltip.tsx"),S=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(S),K=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss"),x={};x.insert="head",x.singleton=!1;var D=O()(K.A,x);const E=K.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=m=>{if(!m.length)return{isValid:!1,message:"No data available"};if(m.some(C=>C.percentage<0||C.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const b=m.reduce((C,N)=>C+N.percentage,0);return Math.abs(b-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},L=({data:m,withTooltips:T=!1,className:b,showLegend:C,legendOrientation:N,size:P,thickness:U=1,padding:J=20,gapScale:Q=0,cornerScale:Y=0})=>{const R=(0,i.R)(),{onMouseMove:z,onMouseLeave:De,tooltipOpen:Ae,tooltipData:je,tooltipLeft:be,tooltipTop:Re}=n({withTooltips:T}),{isValid:we,message:Le}=w(m);if(!we)return(0,o.jsx)("div",{className:(0,t.A)("pie-chart",E["pie-chart"],b),children:(0,o.jsx)("div",{className:E["error-message"],children:Le})});const Se=P,Te=P,Fe=Math.min(Se,Te)/2,Me=Se/2,Ie=Te/2,ke=Q*(2*Math.PI/m.length),H=Fe-J,Ce=H*(1-U),Be=(H-Ce)/2,We=Y?Math.min(Y*H,Be):0,Ve=m.map((h,v)=>({...h,index:v})),Oe={value:h=>h.value,fill:h=>(h==null?void 0:h.color)||R.colors[h.index]},Ne=m.map((h,v)=>({label:h.label,value:h.value.toString(),color:R.colors[v%R.colors.length]}));return(0,o.jsxs)("div",{className:(0,t.A)("pie-chart",E["pie-chart"],b),children:[(0,o.jsx)("svg",{viewBox:`0 0 ${P} ${P}`,preserveAspectRatio:"xMidYMid meet",children:(0,o.jsx)(r.A,{top:Ie,left:Me,children:(0,o.jsx)(s.A,{data:Ve,pieValue:Oe.value,outerRadius:H,innerRadius:Ce,padAngle:ke,cornerRadius:We,children:h=>h.arcs.map((v,ze)=>{const[Ke,Ue]=h.path.centroid(v),Ye=v.endAngle-v.startAngle>=.25,He=Je=>z(Je,v.data),X={d:h.path(v)||"",fill:Oe.fill(v.data)};return T&&(X.onMouseMove=He,X.onMouseLeave=De),(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{...X}),Ye&&(0,o.jsx)("text",{x:Ke,y:Ue,dy:".33em",fill:R.labelBackgroundColor||a.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:v.data.label})]},`arc-${ze}`)})})})}),C&&(0,o.jsx)(j.$,{items:Ne,orientation:N,className:E["pie-chart-legend"]}),T&&Ae&&je&&(0,o.jsx)(_.R,{data:je,top:Re||0,left:be||0,style:{transform:"translate(-50%, -100%)"}})]})};L.displayName="PieChart";const A=(0,g.F)(L);try{L.displayName="PieChart",L.__docgenInfo={description:"",displayName:"PieChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:L.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch(m){}const G=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],Ee={title:"JS Packages/Charts/Types/Pie Chart",component:A,parameters:{layout:"centered"},decorators:[(m,{args:T})=>(0,o.jsx)(i.N,{theme:T.theme,children:(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",border:"1px dashed #ccc"},children:(0,o.jsx)(m,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},legendOrientation:{control:"radio",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:a.QI,woo:a.pk},defaultValue:void 0}}},y={args:{size:400,thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:G,theme:"default",showLegend:!1,legendOrientation:"horizontal"}},F={args:{...y.args,showLegend:!0,legendOrientation:"horizontal"}},M={args:{...y.args,showLegend:!0,legendOrientation:"vertical"}},I={args:{...y.args,thickness:.5},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},k={args:{...y.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},B={args:{...y.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},W={render:m=>(0,o.jsx)("div",{style:{width:"400px"},children:(0,o.jsx)(A,{...m})}),args:{size:400,thickness:1,padding:20,data:G,withTooltips:!0,theme:"default",showLegend:!1},parameters:{docs:{description:{story:"Pie chart with fixed dimensions that override the responsive behavior. Uses size prop instead of width/height."}}}},V={render:()=>(0,o.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Empty Data"}),(0,o.jsx)(A,{size:300,data:[]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Invalid Percentage Total"}),(0,o.jsx)(A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Negative Values"}),(0,o.jsx)(A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Single Data Point"}),(0,o.jsx)(A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},Pe=["Default","WithHorizontalLegend","WithVerticalLegend","Doughnut","WithTooltips","WithTooltipsDoughnut","FixedDimensions","ErrorStates"];y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 400,
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
}`,...(q=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}},F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'horizontal'
  }
}`,...(te=(se=F.parameters)==null?void 0:se.docs)==null?void 0:te.source}}},M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendOrientation: 'vertical'
  }
}`,...(ae=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}},I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.5
  },
  parameters: {
    docs: {
      description: {
        story: 'Doughnut chart variant with the thickness set to 0.5 (50%).'
      }
    }
  }
}`,...(le=(de=I.parameters)==null?void 0:de.docs)==null?void 0:le.source}}},k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}},B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(_e=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}},W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '400px'
  }}>
            <PieChart {...args} />
        </div>,
  args: {
    size: 400,
    thickness: 1,
    padding: 20,
    data,
    withTooltips: true,
    theme: 'default',
    showLegend: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with fixed dimensions that override the responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...(ve=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}},V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}}},"../charts/src/components/legend/base-legend.tsx":(u,l,e)=>{"use strict";e.d(l,{$:()=>g});var i=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss"),c={};c.insert="head",c.singleton=!1;var f=t()(d.A,c);const p=d.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j={horizontal:"row",vertical:"column"},g=({items:_,className:S,orientation:O="horizontal"})=>{const K=(0,a.A)({domain:_.map(x=>x.label),range:_.map(x=>x.color)});return(0,n.jsx)("div",{className:(0,r.A)(p.legend,p[`legend--${O}`],S),role:"list",children:(0,n.jsx)(i.A,{scale:K,direction:j[O],shape:"rect",shapeWidth:16,shapeHeight:16,className:p["legend-items"],children:x=>(0,n.jsx)("div",{className:p[`legend--${O}`],children:x.map(D=>{var E,o;return(0,n.jsxs)("div",{className:p["legend-item"],children:[(0,n.jsx)("svg",{width:16,height:16,children:(0,n.jsx)("rect",{width:16,height:16,fill:D.value,className:p["legend-item-swatch"]})}),(0,n.jsxs)("span",{className:p["legend-item-label"],children:[D.text,((E=_.find(w=>w.label===D.text))==null?void 0:E.value)&&(0,n.jsx)("span",{className:p["legend-item-value"],children:(o=_.find(w=>w.label===D.text))==null?void 0:o.value})]})]},D.text)})})})})};try{g.displayName="BaseLegend",g.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:g.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch(_){}},"../charts/src/components/shared/with-responsive.tsx":(u,l,e)=>{"use strict";e.d(l,{F:()=>r});var i=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function r(s,t){const{maxWidth:d=1200,aspectRatio:c=.5,debounceTime:f=50}=t||{};return function(n){const{parentRef:j,width:g}=(0,i.A)({debounceTime:f,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),_=g?Math.min(g,d):600,S=_*c;return(0,a.jsx)("div",{ref:j,style:{width:"100%",minHeight:`${S}px`},children:(0,a.jsx)(s,{width:_,height:S,size:_,...n})})}}try{r.displayName="withResponsive",r.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from @visx/responsive.`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:r.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch(s){}},"../charts/src/components/tooltip/base-tooltip.tsx":(u,l,e)=>{"use strict";e.d(l,{R:()=>p});var i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(i),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss"),s={};s.insert="head",s.singleton=!1;var t=a()(r.A,s);const d=r.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=({data:n})=>(0,c.jsxs)(c.Fragment,{children:[n==null?void 0:n.label,": ",(n==null?void 0:n.valueDisplay)||(n==null?void 0:n.value)]}),p=({data:n,top:j,left:g,component:_=f,children:S,className:O})=>(0,c.jsx)("div",{className:d.tooltip,style:{top:j,left:g},role:"tooltip",children:S||n&&(0,c.jsx)(_,{data:n,className:O})});try{p.displayName="BaseTooltip",p.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:p.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch(n){}},"../charts/src/providers/theme/theme-provider.tsx":(u,l,e)=>{"use strict";e.d(l,{N:()=>d,R:()=>t});var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/providers/theme/themes.ts"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,i.createContext)(a.zQ),t=()=>(0,i.useContext)(s),d=({theme:c={},children:f})=>{const p={...a.zQ,...c};return(0,r.jsx)(s.Provider,{value:p,children:f})};try{d.displayName="ThemeProvider",d.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:d.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch(c){}try{t.displayName="useChartTheme",t.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:t.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch(c){}},"../charts/src/providers/theme/themes.ts":(u,l,e)=>{"use strict";e.d(l,{QI:()=>a,pk:()=>r,zQ:()=>i});const i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:0,gridColor:"",gridColorDark:""},a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:0,gridColor:"",gridColorDark:""},r={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:0,gridColor:"",gridColorDark:""}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss":(u,l,e)=>{"use strict";e.d(l,{A:()=>d});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(i),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),t=s()(a());t.push([u.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),t.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const d=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss":(u,l,e)=>{"use strict";e.d(l,{A:()=>d});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(i),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),t=s()(a());t.push([u.id,".s6qS3V8pL7zk4p_SuIGQ{position:relative}",""]),t.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const d=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss":(u,l,e)=>{"use strict";e.d(l,{A:()=>d});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(i),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),t=s()(a());t.push([u.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),t.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const d=t},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(u,l,e)=>{"use strict";var i=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function a(){}function r(){}r.resetWarningCache=a,u.exports=function(){function s(c,f,p,n,j,g){if(g!==i){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}s.isRequired=s;function t(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:t,element:s,elementType:s,instanceOf:t,node:s,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:a};return d.PropTypes=d,d}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(u,l,e)=>{if(!1)var i,a;else u.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":u=>{"use strict";var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";u.exports=l}}]);})();
