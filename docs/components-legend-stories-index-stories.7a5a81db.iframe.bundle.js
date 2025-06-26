"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(x,r,e)=>{e.r(r),e.d(r,{Horizontal:()=>l,Vertical:()=>o,WithLongLabels:()=>n,__namedExportsOrder:()=>p,default:()=>i});var c=e("../charts/src/components/legend/base-legend.tsx"),d=`import { Meta, StoryObj } from '@storybook/react';
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
`,m={Horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},Vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},WithLongLabels:{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}};const i={title:"JS Packages/Charts/Composites/Legend",component:c.$,parameters:{storySource:{source:`import { BaseLegend } from '../base-legend';
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
};`,locationsMap:{horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},"with-long-labels":{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}}},layout:"centered",docs:{description:{component:"A flexible legend component that can be customized with different styles and orientations."}}}},a=[{label:"Desktop",value:"86%",color:"#3858E9"},{label:"Mobile",value:"52%",color:"#80C8FF"}],l={args:{items:a,orientation:"horizontal"}},o={args:{items:a,orientation:"vertical"}},n={args:{items:[{label:"Very Long Desktop Usage",value:"86%",color:"#3858E9"},{label:"Extended Mobile Sessions",value:"52%",color:"#80C8FF"},{label:"Tablet Device Access",value:"35%",color:"#44B556"}],orientation:"horizontal"}},p=["Horizontal","Vertical","WithLongLabels"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
}`,...l.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'vertical'
  }
}`,...o.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(x,r,e)=>{e.d(r,{$:()=>S});var c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),m=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),v=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),i=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(p),f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),D={};D.insert="head",D.singleton=!1;var q=b()(f.A,D);const y=f.A.locals||{};function E(t){return t&&typeof t=="object"&&"value"in t&&typeof t.value<"u"?t.value:t}function k(t){return String(E(t))}function B({scale:t,labelFormat:F}){return(h,L)=>({datum:h,index:L,text:`${F(h,L)}`,value:t(h)})}var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A={horizontal:"row",vertical:"column"},S=(0,o.forwardRef)(({items:t,className:F,orientation:h="horizontal",alignmentHorizontal:L="center",alignmentVertical:P="bottom",shape:z="rect",fill:T=k,size:M=k,labelFormat:V=E,labelTransform:R=B,shapeWidth:I=16,shapeHeight:Y=16,shapeMargin:W="2px 4px 2px 0",labelAlign:K="left",labelFlex:w="1",labelMargin:N="0 4px",itemMargin:U="0",itemDirection:H="row",legendLabelProps:G,...J},X)=>{const C=(0,n.RW)(),O=(0,a.A)({domain:t.map(g=>g.label),range:t.map(g=>g.color)}),$=O.domain(),Q=(0,o.useCallback)(({index:g})=>t[g]?.shapeStyle??C.legendShapeStyles?.[g]??{},[t,C]);return(0,u.jsx)(d.A,{scale:O,labelFormat:V,labelTransform:R,children:g=>(0,u.jsx)("div",{ref:X,role:"list","data-testid":`legend-${h}`,className:(0,l.A)(y.legend,y[`legend--${h}`],y[`legend--horizontal-align-${L}`],y[`legend--vertical-align-${P}`],F),style:{flexDirection:A[h],...C.legendContainerStyles},children:g.map((_,s)=>(0,u.jsxs)(m.A,{className:y["legend-item"],"data-testid":"legend-item",margin:U,flexDirection:H,...J,children:[t[s]?.renderGlyph?(0,u.jsx)("svg",{width:t[s]?.glyphSize*2,height:t[s]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,u.jsx)(c.A,{children:t[s]?.renderGlyph({key:`legend-glyph-${_.text}`,datum:{},index:s,color:T(_),size:t[s]?.glyphSize,x:t[s]?.glyphSize,y:t[s]?.glyphSize})})}):(0,u.jsx)(v.A,{shape:z,height:Y,width:I,margin:W,item:$[s],itemIndex:s,label:_,fill:T,size:M,shapeStyle:Q}),(0,u.jsxs)(i.A,{style:{justifyContent:K,flex:w,margin:N,...C.legendLabelStyles},...G,children:[_.text,t.find(j=>j.label===_.text)?.value&&(0,u.jsx)("span",{className:y["legend-item-value"],children:t.find(j=>j.label===_.text)?.value})]})]},`legend-${_.text}-${s}`))})})});try{S.displayName="BaseLegend",S.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignmentHorizontal:{defaultValue:{value:"center"},description:"",name:"alignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},alignmentVertical:{defaultValue:{value:"bottom"},description:"",name:"alignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:S.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(x,r,e)=>{e.d(r,{NP:()=>o,Ox:()=>l,RW:()=>a});var c=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/theme/themes.ts"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,d.createContext)(m.zQ),a=()=>(0,d.useContext)(i),l=n=>{const p=a();return(0,d.useMemo)(()=>{const b=(n??[]).map(f=>f.options?.stroke).filter(f=>!!f);return(0,c.A)({...p,colors:[...b,...p.colors??[]]})},[p,n])},o=({theme:n={},children:p})=>{const b={...m.zQ,...n};return(0,v.jsx)(i.Provider,{value:b,children:p})};try{o.displayName="ThemeProvider",o.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:o.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{a.displayName="useChartTheme",a.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:a.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{l.displayName="useXYChartTheme",l.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:l.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(x,r,e)=>{e.d(r,{QI:()=>d,pk:()=>m,zQ:()=>c});const c={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},d={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(x,r,e)=>{e.d(r,{A:()=>a});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(c),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),v=e.n(m),i=v()(d());i.push([x.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.MYFewOP21Y4GVm663D6z{position:relative}.MYFewOP21Y4GVm663D6z.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.MYFewOP21Y4GVm663D6z.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.MYFewOP21Y4GVm663D6z.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.soJYpRSvEDNrcSctfKPg{position:relative}.soJYpRSvEDNrcSctfKPg.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.soJYpRSvEDNrcSctfKPg.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.soJYpRSvEDNrcSctfKPg.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),i.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend--vertical-align-top":"MYFewOP21Y4GVm663D6z","legend--horizontal-align-left":"Sla7_x8BgBrFt0ij9Wti","legend--horizontal-align-center":"UW_XpeIz_5GpmlfPHgO7","legend--horizontal-align-right":"z_v3d3imptbDEps1ycxC","legend--vertical-align-bottom":"soJYpRSvEDNrcSctfKPg","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const a=i}}]);
