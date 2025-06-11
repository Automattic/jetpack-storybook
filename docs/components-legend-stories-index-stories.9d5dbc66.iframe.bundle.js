"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(f,r,e)=>{e.r(r),e.d(r,{Horizontal:()=>s,Vertical:()=>o,WithLongLabels:()=>t,__namedExportsOrder:()=>p,default:()=>i});var c=e("../charts/src/components/legend/base-legend.tsx"),d=`import { Meta, StoryObj } from '@storybook/react';
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
};`,locationsMap:{horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},"with-long-labels":{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}}},layout:"centered",docs:{description:{component:"A flexible legend component that can be customized with different styles and orientations."}}}},a=[{label:"Desktop",value:"86%",color:"#3858E9"},{label:"Mobile",value:"52%",color:"#80C8FF"}],s={args:{items:a,orientation:"horizontal"}},o={args:{items:a,orientation:"vertical"}},t={args:{items:[{label:"Very Long Desktop Usage",value:"86%",color:"#3858E9"},{label:"Extended Mobile Sessions",value:"52%",color:"#80C8FF"},{label:"Tablet Device Access",value:"35%",color:"#44B556"}],orientation:"horizontal"}},p=["Horizontal","Vertical","WithLongLabels"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
}`,...s.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'vertical'
  }
}`,...o.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(f,r,e)=>{e.d(r,{$:()=>S});var c=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),d=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),m=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),y=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),i=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/providers/theme/theme-provider.tsx"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(p),v=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),F={};F.insert="head",F.singleton=!1;var $=x()(v.A,F);const b=v.A.locals||{};function E(n){return n&&typeof n=="object"&&"value"in n&&typeof n.value<"u"?n.value:n}function O(n){return String(E(n))}function k({scale:n,labelFormat:D}){return(h,L)=>({datum:h,index:L,text:`${D(h,L)}`,value:n(h)})}var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B={horizontal:"row",vertical:"column"},S=(0,o.forwardRef)(({items:n,className:D,orientation:h="horizontal",shape:L="rect",fill:j=O,size:P=O,labelFormat:M=E,labelTransform:z=k,shapeWidth:I=16,shapeHeight:R=16,shapeMargin:V="2px 4px 2px 0",labelAlign:W="left",labelFlex:Y="1",labelMargin:K="0 4px",itemMargin:U="0",itemDirection:w="row",legendLabelProps:N,...H},X)=>{const C=(0,t.RW)(),A=(0,a.A)({domain:n.map(g=>g.label),range:n.map(g=>g.color)}),J=A.domain(),G=(0,o.useCallback)(({index:g})=>n[g]?.shapeStyle??C.legendShapeStyles?.[g]??{},[n,C]);return(0,u.jsx)(d.A,{scale:A,labelFormat:M,labelTransform:z,children:g=>(0,u.jsx)("div",{ref:X,role:"list","data-testid":`legend-${h}`,className:(0,s.A)(b.legend,b[`legend--${h}`],D),style:{flexDirection:B[h],...C.legendContainerStyles},children:g.map((_,l)=>(0,u.jsxs)(m.A,{className:b["legend-item"],"data-testid":"legend-item",margin:U,flexDirection:w,...H,children:[n[l]?.renderGlyph?(0,u.jsx)("svg",{width:n[l]?.glyphSize*2,height:n[l]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,u.jsx)(c.A,{children:n[l]?.renderGlyph({key:`legend-glyph-${_.text}`,datum:{},index:l,color:j(_),size:n[l]?.glyphSize,x:n[l]?.glyphSize,y:n[l]?.glyphSize})})}):(0,u.jsx)(y.A,{shape:L,height:R,width:I,margin:V,item:J[l],itemIndex:l,label:_,fill:j,size:P,shapeStyle:G}),(0,u.jsxs)(i.A,{style:{justifyContent:W,flex:Y,margin:K,...C.legendLabelStyles},...N,children:[_.text,n.find(T=>T.label===_.text)?.value&&(0,u.jsx)("span",{className:b["legend-item-value"],children:n.find(T=>T.label===_.text)?.value})]})]},`legend-${_.text}-${l}`))})})});try{S.displayName="BaseLegend",S.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:S.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(f,r,e)=>{e.d(r,{NP:()=>o,Ox:()=>s,RW:()=>a});var c=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../charts/src/providers/theme/themes.ts"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=(0,d.createContext)(m.zQ),a=()=>(0,d.useContext)(i),s=t=>{const p=a();return(0,d.useMemo)(()=>{const x=(t??[]).map(v=>v.options?.stroke).filter(v=>!!v);return(0,c.A)({...p,colors:[...x,...p.colors??[]]})},[p,t])},o=({theme:t={},children:p})=>{const x={...m.zQ,...t};return(0,y.jsx)(i.Provider,{value:x,children:p})};try{o.displayName="ThemeProvider",o.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:o.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{a.displayName="useChartTheme",a.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:a.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{s.displayName="useXYChartTheme",s.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:s.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(f,r,e)=>{e.d(r,{QI:()=>d,pk:()=>m,zQ:()=>c});const c={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},d={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},m={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(f,r,e)=>{e.d(r,{A:()=>a});var c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(c),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),y=e.n(m),i=y()(d());i.push([f.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),i.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const a=i}}]);
