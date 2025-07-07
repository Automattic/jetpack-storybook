"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(v,d,e)=>{e.r(d),e.d(d,{Horizontal:()=>t,Vertical:()=>s,WithLongLabels:()=>r,__namedExportsOrder:()=>u,default:()=>l});var i=e("../charts/src/components/legend/base-legend.tsx"),c=`import { Meta, StoryObj } from '@storybook/react';
import { BaseLegend } from '../base-legend';

const meta: Meta< typeof BaseLegend > = {
	title: 'JS Packages/Charts/Composites/Legend',
	component: BaseLegend,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A flexible legend component that can be customized with different styles and orientations.',
			},
		},
	},
};

export default meta;
type Story = StoryObj< typeof BaseLegend >;

const mockData = [
	{ label: 'Desktop', value: '86%', color: '#3858E9' },
	{ label: 'Mobile', value: '52%', color: '#80C8FF' },
];

export const Horizontal: Story = {
	args: {
		items: mockData,
		orientation: 'horizontal',
	},
};

export const Vertical: Story = {
	args: {
		items: mockData,
		orientation: 'vertical',
	},
};

export const WithLongLabels: Story = {
	args: {
		items: [
			{ label: 'Very Long Desktop Usage', value: '86%', color: '#3858E9' },
			{ label: 'Extended Mobile Sessions', value: '52%', color: '#80C8FF' },
			{ label: 'Tablet Device Access', value: '35%', color: '#44B556' },
		],
		orientation: 'horizontal',
	},
};
`,m={Horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},Vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},WithLongLabels:{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}};const l={title:"JS Packages/Charts/Composites/Legend",component:i.$,parameters:{storySource:{source:`import { BaseLegend } from '../base-legend';
const meta = {
  title: 'JS Packages/Charts/Composites/Legend',
  component: BaseLegend,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible legend component that can be customized with different styles and orientations.'
      }
    }
  }
};
export default meta;
const mockData = [{
  label: 'Desktop',
  value: '86%',
  color: '#3858E9'
}, {
  label: 'Mobile',
  value: '52%',
  color: '#80C8FF'
}];
export const Horizontal = {
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
};
export const Vertical = {
  args: {
    items: mockData,
    orientation: 'vertical'
  }
};
export const WithLongLabels = {
  args: {
    items: [{
      label: 'Very Long Desktop Usage',
      value: '86%',
      color: '#3858E9'
    }, {
      label: 'Extended Mobile Sessions',
      value: '52%',
      color: '#80C8FF'
    }, {
      label: 'Tablet Device Access',
      value: '35%',
      color: '#44B556'
    }],
    orientation: 'horizontal'
  }
};`,locationsMap:{horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},"with-long-labels":{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}}},layout:"centered",docs:{description:{component:"A flexible legend component that can be customized with different styles and orientations."}}}},o=[{label:"Desktop",value:"86%",color:"#3858E9"},{label:"Mobile",value:"52%",color:"#80C8FF"}],t={args:{items:o,orientation:"horizontal"}},s={args:{items:o,orientation:"vertical"}},r={args:{items:[{label:"Very Long Desktop Usage",value:"86%",color:"#3858E9"},{label:"Extended Mobile Sessions",value:"52%",color:"#80C8FF"},{label:"Tablet Device Access",value:"35%",color:"#44B556"}],orientation:"horizontal"}},u=["Horizontal","Vertical","WithLongLabels"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
}`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'vertical'
  }
}`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Very Long Desktop Usage',
      value: '86%',
      color: '#3858E9'
    }, {
      label: 'Extended Mobile Sessions',
      value: '52%',
      color: '#80C8FF'
    }, {
      label: 'Tablet Device Access',
      value: '35%',
      color: '#44B556'
    }],
    orientation: 'horizontal'
  }
}`,...r.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(v,d,e)=>{e.d(d,{$:()=>S});var i=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),c=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),m=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),a=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),l=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),o=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../charts/src/providers/theme/theme-provider.tsx"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(u),y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),D={};D.insert="head",D.singleton=!1;var q=b()(y.A,D);const x=y.A.locals||{};function E(n){return n&&typeof n=="object"&&"value"in n&&typeof n.value<"u"?n.value:n}function k(n){return String(E(n))}function A({scale:n,labelFormat:F}){return(h,L)=>({datum:h,index:L,text:`${F(h,L)}`,value:n(h)})}var g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B={horizontal:"row",vertical:"column"},S=(0,s.forwardRef)(({items:n,className:F,orientation:h="horizontal",alignmentHorizontal:L="center",alignmentVertical:P="bottom",shape:z="rect",fill:T=k,size:M=k,labelFormat:R=E,labelTransform:V=A,shapeWidth:I=16,shapeHeight:W=16,shapeMargin:Y="2px 4px 2px 0",labelAlign:K="left",labelFlex:w="1",labelMargin:U="0 4px",itemMargin:N="0",itemDirection:H="row",legendLabelProps:G,...X},J)=>{const C=(0,r.RW)(),O=(0,o.A)({domain:n.map(_=>_.label),range:n.map(_=>_.color)}),$=O.domain(),Q=(0,s.useCallback)(({index:_})=>n[_]?.shapeStyle??C.legendShapeStyles?.[_]??{},[n,C]);return(0,g.jsx)(c.A,{scale:O,labelFormat:R,labelTransform:V,children:_=>(0,g.jsx)("div",{ref:J,role:"list","data-testid":`legend-${h}`,className:(0,t.A)(x.legend,x[`legend--${h}`],x[`legend--horizontal-align-${L}`],x[`legend--vertical-align-${P}`],F),style:{flexDirection:B[h],...C.legendContainerStyles},children:_.map((f,p)=>(0,g.jsxs)(m.A,{className:x["legend-item"],"data-testid":"legend-item",margin:N,flexDirection:H,...X,children:[n[p]?.renderGlyph?(0,g.jsx)("svg",{width:n[p]?.glyphSize*2,height:n[p]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,g.jsx)(i.A,{children:n[p]?.renderGlyph({key:`legend-glyph-${f.text}`,datum:{},index:p,color:T(f),size:n[p]?.glyphSize,x:n[p]?.glyphSize,y:n[p]?.glyphSize})})}):(0,g.jsx)(a.A,{shape:z,height:W,width:I,margin:Y,item:$[p],itemIndex:p,label:f,fill:T,size:M,shapeStyle:Q}),(0,g.jsxs)(l.A,{style:{justifyContent:K,flex:w,margin:U,...C.legendLabelStyles},...G,children:[f.text,n.find(j=>j.label===f.text)?.value&&(0,g.jsx)("span",{className:x["legend-item-value"],children:n.find(j=>j.label===f.text)?.value})]})]},`legend-${f.text}-${p}`))})})});try{S.displayName="BaseLegend",S.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignmentHorizontal:{defaultValue:{value:"center"},description:"",name:"alignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},alignmentVertical:{defaultValue:{value:"bottom"},description:"",name:"alignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:S.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(v,d,e)=>{e.d(d,{NP:()=>s,Ox:()=>t,RW:()=>o});var i=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/theme/themes.ts"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,c.createContext)(m.zQ),o=()=>(0,c.useContext)(l),t=r=>{const u=o();return(0,c.useMemo)(()=>{const b=(r??[]).map(y=>y.options?.stroke).filter(y=>!!y);return(0,i.A)({...u,colors:[...b,...u.colors??[]]})},[u,r])},s=({theme:r={},children:u})=>{const b={...m.zQ,...r};return(0,a.jsx)(l.Provider,{value:b,children:u})};try{s.displayName="ThemeProvider",s.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:s.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{o.displayName="useChartTheme",o.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:o.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{t.displayName="useXYChartTheme",t.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:t.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(v,d,e)=>{e.d(d,{QI:()=>c,pk:()=>m,zQ:()=>i});const i={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},c={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(v,d,e)=>{e.d(d,{A:()=>m});function i(a){var l,o,t="";if(typeof a=="string"||typeof a=="number")t+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(l=0;l<s;l++)a[l]&&(o=i(a[l]))&&(t&&(t+=" "),t+=o)}else for(o in a)a[o]&&(t&&(t+=" "),t+=o);return t}function c(){for(var a,l,o=0,t="",s=arguments.length;o<s;o++)(a=arguments[o])&&(l=i(a))&&(t&&(t+=" "),t+=l);return t}const m=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(v,d,e)=>{e.d(d,{A:()=>o});var i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),l=a()(c());l.push([v.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.MYFewOP21Y4GVm663D6z{position:relative}.MYFewOP21Y4GVm663D6z.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.MYFewOP21Y4GVm663D6z.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.MYFewOP21Y4GVm663D6z.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.soJYpRSvEDNrcSctfKPg{position:relative}.soJYpRSvEDNrcSctfKPg.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.soJYpRSvEDNrcSctfKPg.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.soJYpRSvEDNrcSctfKPg.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),l.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend--vertical-align-top":"MYFewOP21Y4GVm663D6z","legend--horizontal-align-left":"Sla7_x8BgBrFt0ij9Wti","legend--horizontal-align-center":"UW_XpeIz_5GpmlfPHgO7","legend--horizontal-align-right":"z_v3d3imptbDEps1ycxC","legend--vertical-align-bottom":"soJYpRSvEDNrcSctfKPg","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const o=l}}]);
