"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2586],{"../charts/src/components/pie-chart/stories/index.stories.tsx":(y,d,e)=>{e.r(d),e.d(d,{Default:()=>t,Doughnut:()=>c,ErrorStates:()=>S,Responsiveness:()=>u,WithHorizontalLegend:()=>g,WithTooltips:()=>v,WithTooltipsDoughnut:()=>_,WithVerticalLegend:()=>m,__namedExportsOrder:()=>T,default:()=>i});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),n=e("../charts/src/providers/theme/theme-provider.tsx"),r=e("../charts/src/providers/theme/themes.ts"),o=e("../charts/src/components/pie-chart/pie-chart.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=[{label:"MacOS",value:3e4,valueDisplay:"30K",percentage:23},{label:"Linux",value:22e3,valueDisplay:"22K",percentage:17},{label:"Windows",value:8e4,valueDisplay:"80K",percentage:60}],i={title:"JS Packages/Charts/Types/Pie Chart",component:o.A,parameters:{layout:"centered"},decorators:[(f,{args:B})=>(0,s.jsx)(n.N,{theme:B.theme,children:(0,s.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,s.jsx)(f,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},padding:{control:{type:"range",min:0,max:100,step:1}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},legendOrientation:{control:"radio",options:["horizontal","vertical"]},theme:{control:"select",options:{default:void 0,jetpack:r.QI,woo:r.pk},defaultValue:void 0}}},t={args:{thickness:1,gapScale:0,padding:20,cornerScale:0,withTooltips:!1,data:p,theme:"default",showLegend:!1,legendOrientation:"horizontal"}},g={args:{...t.args,showLegend:!0,size:600,legendOrientation:"horizontal"}},m={args:{...t.args,showLegend:!0,size:600,legendOrientation:"vertical"}},c={args:{...t.args,thickness:.5,padding:0,gapScale:.03,cornerScale:.03,children:(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"\u{1F369} Doughnut"}),(0,s.jsx)(a.A,{textAnchor:"middle",verticalAnchor:"middle",fill:"#008A20",fontSize:18,y:16,children:"Three donuts for the price of one!"})]})},parameters:{docs:{description:{story:"Doughnut chart variant with the thickness set to 0.5 (50%)."}}}},v={args:{...t.args,withTooltips:!0},parameters:{docs:{description:{story:"Pie chart with interactive tooltips that appear on hover."}}}},_={args:{...t.args,thickness:.5,withTooltips:!0},parameters:{docs:{description:{story:"Doughnut chart with interactive tooltips that appear on hover."}}}},O={...t.args};delete O.size;const u={args:O,parameters:{docs:{description:{story:"Pie chart with responsive behavior. Uses size prop instead of width/height."}}}},S={render:()=>(0,s.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Empty Data"}),(0,s.jsx)(o.A,{size:300,data:[]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Invalid Percentage Total"}),(0,s.jsx)(o.A,{size:300,data:[{label:"A",value:30,percentage:30},{label:"B",value:40,percentage:40}]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Negative Values"}),(0,s.jsx)(o.A,{size:300,data:[{label:"A",value:-30,percentage:-30},{label:"B",value:130,percentage:130}]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Single Data Point"}),(0,s.jsx)(o.A,{size:300,data:[{label:"A",value:100,percentage:100}]})]})]}),parameters:{docs:{description:{story:"Examples of how the pie chart handles various error states and edge cases."}}}},T=["Default","WithHorizontalLegend","WithVerticalLegend","Doughnut","WithTooltips","WithTooltipsDoughnut","Responsiveness","ErrorStates"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'horizontal'
  }
}`,...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    size: 600,
    legendOrientation: 'vertical'
  }
}`,...m.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: responsiveArgs,
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with responsive behavior. Uses size prop instead of width/height.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(y,d,e)=>{e.d(d,{$:()=>m});var l=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss"),p={};p.insert="head",p.singleton=!1;var C=o()(s.A,p);const i=s.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={horizontal:"row",vertical:"column"},m=({items:c,className:v,orientation:_="horizontal"})=>{const O=(0,a.A)({domain:c.map(u=>u.label),range:c.map(u=>u.color)});return(0,t.jsx)("div",{className:(0,n.A)(i.legend,i[`legend--${_}`],v),role:"list","data-testid":`legend-${_}`,children:(0,t.jsx)(l.A,{scale:O,direction:g[_],shape:"rect",shapeWidth:16,shapeHeight:16,className:i["legend-items"],children:u=>(0,t.jsx)("div",{className:i[`legend--${_}`],children:u.map(S=>(0,t.jsxs)("div",{className:i["legend-item"],role:"listitem","data-testid":"legend-item",children:[(0,t.jsx)("svg",{width:16,height:16,role:"img",children:(0,t.jsx)("rect",{width:16,height:16,fill:S.value,className:i["legend-item-swatch"],"data-testid":"legend-marker",role:"presentation"})}),(0,t.jsxs)("span",{className:i["legend-item-label"],children:[S.text,c.find(T=>T.label===S.text)?.value&&(0,t.jsx)("span",{className:i["legend-item-value"],children:c.find(T=>T.label===S.text)?.value})]})]},S.text))})})})};try{m.displayName="BaseLegend",m.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:m.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(y,d,e)=>{e.d(d,{A:()=>H});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),a=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),o=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const C=({withTooltips:h})=>{const{tooltipOpen:P,tooltipLeft:L,tooltipTop:E,tooltipData:b,hideTooltip:D,showTooltip:M}=(0,o.A)(),I=(0,s.useCallback)((w,W)=>{if(!h)return;const A=(0,r.A)(w);A&&M({tooltipData:W,tooltipLeft:A.x,tooltipTop:A.y-10})},[h,M]),F=(0,s.useCallback)(()=>{h&&D()},[h,D]);return{onMouseMove:I,onMouseLeave:F,tooltipOpen:P,tooltipData:b||null,tooltipLeft:L,tooltipTop:E}};var i=e("../charts/src/providers/theme/theme-provider.tsx"),t=e("../charts/src/providers/theme/themes.ts"),g=e("../charts/src/components/legend/base-legend.tsx"),m=e("../charts/src/components/shared/with-responsive.tsx"),c=e("../charts/src/components/tooltip/base-tooltip.tsx"),v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(v),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss"),u={};u.insert="head",u.singleton=!1;var S=_()(O.A,u);const T=O.A.locals||{};var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=h=>{if(!h.length)return{isValid:!1,message:"No data available"};if(h.some(E=>E.percentage<0||E.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=h.reduce((E,b)=>E+b.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},R=({data:h,withTooltips:P=!1,className:L,showLegend:E,legendOrientation:b,size:D,thickness:M=1,padding:I=20,gapScale:F=0,cornerScale:w=0,children:W=null})=>{const A=(0,i.R)(),{onMouseMove:G,onMouseLeave:J,tooltipOpen:X,tooltipData:V,tooltipLeft:Q,tooltipTop:$}=C({withTooltips:P}),{isValid:Z,message:q}=B(h);if(!Z)return(0,f.jsx)("div",{className:(0,n.A)("pie-chart",T["pie-chart"],L),children:(0,f.jsx)("div",{className:T["error-message"],children:q})});const K=D,N=D,ee=Math.min(K,N)/2,se=K/2,te=N/2,oe=F*(2*Math.PI/h.length),k=ee-I,U=k*(1-M),ne=(k-U)/2,ae=w?Math.min(w*k,ne):0,re=h.map((x,j)=>({...x,index:j})),Y={value:x=>x.value,fill:x=>x?.color||A.colors[x.index]},de=h.map((x,j)=>({label:x.label,value:x.value.toString(),color:A.colors[j%A.colors.length]}));return(0,f.jsxs)("div",{className:(0,n.A)("pie-chart",T["pie-chart"],L),children:[(0,f.jsx)("svg",{viewBox:`0 0 ${D} ${D}`,preserveAspectRatio:"xMidYMid meet",width:D,height:D,children:(0,f.jsxs)(l.A,{top:te,left:se,children:[(0,f.jsx)(a.A,{data:re,pieValue:Y.value,outerRadius:k,innerRadius:U,padAngle:oe,cornerRadius:ae,children:x=>x.arcs.map((j,le)=>{const[ie,ce]=x.path.centroid(j),pe=j.endAngle-j.startAngle>=.25,me=ue=>G(ue,j.data),z={d:x.path(j)||"",fill:Y.fill(j.data)};return P&&(z.onMouseMove=me,z.onMouseLeave=J),(0,f.jsxs)("g",{children:[(0,f.jsx)("path",{...z}),pe&&(0,f.jsx)("text",{x:ie,y:ce,dy:".33em",fill:A.labelBackgroundColor||t.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:j.data.label})]},`arc-${le}`)})}),W]})}),E&&(0,f.jsx)(g.$,{items:de,orientation:b,className:T["pie-chart-legend"]}),P&&X&&V&&(0,f.jsx)(c.R,{data:V,top:$||0,left:Q||0,style:{transform:"translate(-50%, -100%)"}})]})};R.displayName="PieChart";const H=(0,m.F)(R);try{R.displayName="PieChart",R.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"unknown"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"unknown"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; }; xScale?: { ...; }; axis?: { ...; }; }"}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:R.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(y,d,e)=>{e.d(d,{F:()=>n});var l=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(r,o){const{maxWidth:s=1200,aspectRatio:p=.5,debounceTime:C=50}=o||{};return function(t){const{parentRef:g,width:m}=(0,l.A)({debounceTime:C,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),c=m?Math.min(m,s):600,v=t.height??c*p;return(0,a.jsx)("div",{ref:g,style:{width:"100%"},children:(0,a.jsx)(r,{width:c,height:v,size:c,...t})})}}try{n.displayName="withResponsive",n.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from @visx/responsive.`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:n.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(y,d,e)=>{e.d(d,{R:()=>i});var l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(l),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss"),r={};r.insert="head",r.singleton=!1;var o=a()(n.A,r);const s=n.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=({data:t})=>(0,p.jsxs)(p.Fragment,{children:[t?.label,": ",t?.valueDisplay||t?.value]}),i=({data:t,top:g,left:m,component:c=C,children:v,className:_})=>(0,p.jsx)("div",{className:s.tooltip,style:{top:g,left:m},role:"tooltip",children:v||t&&(0,p.jsx)(c,{data:t,className:_})});try{i.displayName="BaseTooltip",i.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:i.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(y,d,e)=>{e.d(d,{N:()=>s,R:()=>o});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../charts/src/providers/theme/themes.ts"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,l.createContext)(a.zQ),o=()=>(0,l.useContext)(r),s=({theme:p={},children:C})=>{const i={...a.zQ,...p};return(0,n.jsx)(r.Provider,{value:i,children:C})};try{s.displayName="ThemeProvider",s.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:s.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{o.displayName="useChartTheme",o.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:o.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(y,d,e)=>{e.d(d,{QI:()=>a,pk:()=>n,zQ:()=>l});const l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},a={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},n={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss":(y,d,e)=>{e.d(d,{A:()=>s});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),o=r()(a());o.push([y.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),o.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const s=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/pie-chart/pie-chart.module.scss":(y,d,e)=>{e.d(d,{A:()=>s});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),o=r()(a());o.push([y.id,".s6qS3V8pL7zk4p_SuIGQ{position:relative}",""]),o.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const s=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/tooltip/base-tooltip.module.scss":(y,d,e)=>{e.d(d,{A:()=>s});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),o=r()(a());o.push([y.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}",""]),o.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const s=o}}]);
