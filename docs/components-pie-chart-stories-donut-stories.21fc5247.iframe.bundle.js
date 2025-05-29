"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1830],{"../charts/src/components/pie-chart/stories/donut.stories.tsx":(f,i,e)=>{e.r(i),e.d(i,{CustomTheme:()=>_,Default:()=>d,ErrorStates:()=>S,Thin:()=>u,WithVerticalLegend:()=>p,WithoutCenter:()=>g,__namedExportsOrder:()=>A,default:()=>C});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),o=e("../charts/src/providers/theme/theme-provider.tsx"),a=e("../charts/src/providers/theme/themes.ts"),n=e("../charts/src/components/pie-chart/pie-chart.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { PieChart } from '../../pie-chart';
import type { Meta, StoryObj } from '@storybook/react';

const data = [
	{
		label: 'Active Users',
		value: 65000,
		valueDisplay: '65K',
		percentage: 65,
	},
	{
		label: 'Inactive Users',
		value: 35000,
		valueDisplay: '35K',
		percentage: 35,
	},
];

const meta = {
	title: 'JS Packages/Charts/Types/Donut Chart',
	component: PieChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		( Story, { args } ) => (
			<ThemeProvider theme={ args.theme }>
				<div
					style={ {
						resize: 'both',
						overflow: 'auto',
						padding: '2rem',
						width: '800px',
						aspectRatio: '1/1',
						minWidth: '400px',
						maxWidth: '1200px',
						height: '800px',
						border: '1px dashed #ccc',
					} }
				>
					<Story />
				</div>
			</ThemeProvider>
		),
	],
	argTypes: {
		size: {
			control: {
				type: 'range',
				min: 100,
				max: 800,
				step: 10,
				default: 400,
			},
		},
		thickness: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		gapScale: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		cornerScale: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		theme: {
			control: 'select',
			options: {
				default: undefined,
				jetpack: jetpackTheme,
				woo: wooTheme,
			},
			defaultValue: undefined,
		},
	},
} satisfies Meta< typeof PieChart >;

export default meta;
type Story = StoryObj< typeof PieChart >;

export const Default: Story = {
	args: {
		thickness: 0.4,
		gapScale: 0.03,
		padding: 20,
		cornerScale: 0.03,
		withTooltips: true,
		data,
		theme: 'default',
		showLegend: true,
		legendOrientation: 'horizontal',
		children: (
			<Group>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
					User Activity
				</Text>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
					Total: 100K Users
				</Text>
			</Group>
		),
	},
};

export const WithVerticalLegend: Story = {
	args: {
		...Default.args,
		legendOrientation: 'vertical',
	},
};

export const WithoutCenter: Story = {
	args: {
		...Default.args,
		children: undefined,
	},
};

export const CustomTheme: Story = {
	args: {
		...Default.args,
		theme: wooTheme,
	},
};

export const ErrorStates: Story = {
	render: () => (
		<div style={ { display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(2, 1fr)' } }>
			<div>
				<h3>Empty Data</h3>
				<PieChart size={ 300 } thickness={ 0.6 } data={ [] } />
			</div>
			<div>
				<h3>Single Value</h3>
				<PieChart
					size={ 300 }
					thickness={ 0.6 }
					data={ [ { label: 'Single', value: 100, percentage: 100 } ] }
				/>
			</div>
		</div>
	),
};

export const Thin: Story = {
	args: {
		...Default.args,
		thickness: 0.2,
		gapScale: 0.01,
		children: (
			<Group>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 24 } y={ -16 }>
					Thin Donut
				</Text>
				<Text textAnchor="middle" verticalAnchor="middle" fontSize={ 18 } y={ 16 }>
					Thickness: 20%
				</Text>
			</Group>
		),
	},
};
`,j={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:115},startBody:{col:23,line:88},endBody:{col:1,line:115}},WithVerticalLegend:{startLoc:{col:34,line:116},endLoc:{col:1,line:121},startBody:{col:34,line:116},endBody:{col:1,line:121}},WithoutCenter:{startLoc:{col:29,line:122},endLoc:{col:1,line:127},startBody:{col:29,line:122},endBody:{col:1,line:127}},CustomTheme:{startLoc:{col:27,line:128},endLoc:{col:1,line:133},startBody:{col:27,line:128},endBody:{col:1,line:133}},ErrorStates:{startLoc:{col:27,line:134},endLoc:{col:1,line:163},startBody:{col:27,line:134},endBody:{col:1,line:163}},Thin:{startLoc:{col:20,line:164},endLoc:{col:1,line:185},startBody:{col:20,line:164},endBody:{col:1,line:185}}};const c=[{label:"Active Users",value:65e3,valueDisplay:"65K",percentage:65},{label:"Inactive Users",value:35e3,valueDisplay:"35K",percentage:35}],C={title:"JS Packages/Charts/Types/Donut Chart",component:n.A,parameters:{storySource:{source:`import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { ThemeProvider, jetpackTheme, wooTheme } from '../../../providers/theme';
import { PieChart } from '../../pie-chart';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const data = [{
  label: 'Active Users',
  value: 65000,
  valueDisplay: '65K',
  percentage: 65
}, {
  label: 'Inactive Users',
  value: 35000,
  valueDisplay: '35K',
  percentage: 35
}];
const meta = {
  title: 'JS Packages/Charts/Types/Donut Chart',
  component: PieChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story, {
    args
  }) => /*#__PURE__*/_jsx(ThemeProvider, {
    theme: args.theme,
    children: /*#__PURE__*/_jsx("div", {
      style: {
        resize: 'both',
        overflow: 'auto',
        padding: '2rem',
        width: '800px',
        aspectRatio: '1/1',
        minWidth: '400px',
        maxWidth: '1200px',
        height: '800px',
        border: '1px dashed #ccc'
      },
      children: /*#__PURE__*/_jsx(Story, {})
    })
  })],
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 100,
        max: 800,
        step: 10,
        default: 400
      }
    },
    thickness: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    gapScale: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    cornerScale: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    theme: {
      control: 'select',
      options: {
        default: undefined,
        jetpack: jetpackTheme,
        woo: wooTheme
      },
      defaultValue: undefined
    }
  }
};
export default meta;
export const Default = {
  args: {
    thickness: 0.4,
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    theme: 'default',
    showLegend: true,
    legendOrientation: 'horizontal',
    children: /*#__PURE__*/_jsxs(Group, {
      children: [/*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 24,
        y: -16,
        children: "User Activity"
      }), /*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 18,
        y: 16,
        children: "Total: 100K Users"
      })]
    })
  }
};
export const WithVerticalLegend = {
  args: {
    ...Default.args,
    legendOrientation: 'vertical'
  }
};
export const WithoutCenter = {
  args: {
    ...Default.args,
    children: undefined
  }
};
export const CustomTheme = {
  args: {
    ...Default.args,
    theme: wooTheme
  }
};
export const ErrorStates = {
  render: () => /*#__PURE__*/_jsxs("div", {
    style: {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Empty Data"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        thickness: 0.6,
        data: []
      })]
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Single Value"
      }), /*#__PURE__*/_jsx(PieChart, {
        size: 300,
        thickness: 0.6,
        data: [{
          label: 'Single',
          value: 100,
          percentage: 100
        }]
      })]
    })]
  })
};
export const Thin = {
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    children: /*#__PURE__*/_jsxs(Group, {
      children: [/*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 24,
        y: -16,
        children: "Thin Donut"
      }), /*#__PURE__*/_jsx(Text, {
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 18,
        y: 16,
        children: "Thickness: 20%"
      })]
    })
  }
};`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:115},startBody:{col:23,line:88},endBody:{col:1,line:115}},"with-vertical-legend":{startLoc:{col:34,line:116},endLoc:{col:1,line:121},startBody:{col:34,line:116},endBody:{col:1,line:121}},"without-center":{startLoc:{col:29,line:122},endLoc:{col:1,line:127},startBody:{col:29,line:122},endBody:{col:1,line:127}},"custom-theme":{startLoc:{col:27,line:128},endLoc:{col:1,line:133},startBody:{col:27,line:128},endBody:{col:1,line:133}},"error-states":{startLoc:{col:27,line:134},endLoc:{col:1,line:163},startBody:{col:27,line:134},endBody:{col:1,line:163}},thin:{startLoc:{col:20,line:164},endLoc:{col:1,line:185},startBody:{col:20,line:164},endBody:{col:1,line:185}}}},layout:"centered"},decorators:[(T,{args:v})=>(0,t.jsx)(o.N,{theme:v.theme,children:(0,t.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",aspectRatio:"1/1",minWidth:"400px",maxWidth:"1200px",height:"800px",border:"1px dashed #ccc"},children:(0,t.jsx)(T,{})})})],argTypes:{size:{control:{type:"range",min:100,max:800,step:10,default:400}},thickness:{control:{type:"range",min:0,max:1,step:.01}},gapScale:{control:{type:"range",min:0,max:1,step:.01}},cornerScale:{control:{type:"range",min:0,max:1,step:.01}},theme:{control:"select",options:{default:void 0,jetpack:a.QI,woo:a.pk},defaultValue:void 0}}},d={args:{thickness:.4,gapScale:.03,padding:20,cornerScale:.03,withTooltips:!0,data:c,theme:"default",showLegend:!0,legendOrientation:"horizontal",children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(s.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"User Activity"}),(0,t.jsx)(s.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Total: 100K Users"})]})}},p={args:{...d.args,legendOrientation:"vertical"}},g={args:{...d.args,children:void 0}},_={args:{...d.args,theme:a.pk}},S={render:()=>(0,t.jsxs)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(2, 1fr)"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Empty Data"}),(0,t.jsx)(n.A,{size:300,thickness:.6,data:[]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Single Value"}),(0,t.jsx)(n.A,{size:300,thickness:.6,data:[{label:"Single",value:100,percentage:100}]})]})]})},u={args:{...d.args,thickness:.2,gapScale:.01,children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(s.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:24,y:-16,children:"Thin Donut"}),(0,t.jsx)(s.A,{textAnchor:"middle",verticalAnchor:"middle",fontSize:18,y:16,children:"Thickness: 20%"})]})}},A=["Default","WithVerticalLegend","WithoutCenter","CustomTheme","ErrorStates","Thin"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 0.4,
    gapScale: 0.03,
    padding: 20,
    cornerScale: 0.03,
    withTooltips: true,
    data,
    theme: 'default',
    showLegend: true,
    legendOrientation: 'horizontal',
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    User Activity
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Total: 100K Users
                </Text>
            </Group>
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    legendOrientation: 'vertical'
  }
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    theme: wooTheme
  }
}`,..._.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    thickness: 0.2,
    gapScale: 0.01,
    children: <Group>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={24} y={-16}>
                    Thin Donut
                </Text>
                <Text textAnchor="middle" verticalAnchor="middle" fontSize={18} y={16}>
                    Thickness: 20%
                </Text>
            </Group>
  }
}`,...u.parameters?.docs?.source}}}},"../charts/src/components/legend/base-legend.tsx":(f,i,e)=>{e.d(i,{$:()=>d});var l=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),s=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),m={};m.insert="head",m.singleton=!1;var j=n()(t.A,m);const c=t.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C={horizontal:"row",vertical:"column"},d=({items:p,className:g,orientation:_="horizontal"})=>{const S=(0,s.A)({domain:p.map(u=>u.label),range:p.map(u=>u.color)});return(0,r.jsx)("div",{className:(0,o.A)(c.legend,c[`legend--${_}`],g),role:"list","data-testid":`legend-${_}`,children:(0,r.jsx)(l.A,{scale:S,direction:C[_],shape:"rect",shapeWidth:16,shapeHeight:16,className:c["legend-items"],children:u=>(0,r.jsx)("div",{className:c[`legend--${_}`],children:u.map(A=>(0,r.jsxs)("div",{className:c["legend-item"],role:"listitem","data-testid":"legend-item",children:[(0,r.jsx)("svg",{width:16,height:16,role:"img",children:(0,r.jsx)("rect",{width:16,height:16,fill:A.value,className:c["legend-item-swatch"],"data-testid":"legend-marker",role:"presentation"})}),(0,r.jsxs)("span",{className:c["legend-item-label"],children:[A.text,p.find(T=>T.label===A.text)?.value&&(0,r.jsx)("span",{className:c["legend-item-value"],children:p.find(T=>T.label===A.text)?.value})]})]},A.text))})})})};try{d.displayName="BaseLegend",d.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:d.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/pie-chart/pie-chart.tsx":(f,i,e)=>{e.d(i,{A:()=>G});var l=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),s=e("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/@visx+event@3.12.0/node_modules/@visx/event/esm/localPoint.js"),n=e("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const j=({withTooltips:h})=>{const{tooltipOpen:O,tooltipLeft:L,tooltipTop:P,tooltipData:k,hideTooltip:E,showTooltip:b}=(0,n.A)(),w=(0,t.useCallback)((B,U)=>{if(!h)return;const D=(0,a.A)(B);D&&b({tooltipData:U,tooltipLeft:D.x,tooltipTop:D.y-10})},[h,b]),I=(0,t.useCallback)(()=>{h&&E()},[h,E]);return{onMouseMove:w,onMouseLeave:I,tooltipOpen:O,tooltipData:k||null,tooltipLeft:L,tooltipTop:P}};var c=e("../charts/src/providers/theme/theme-provider.tsx"),r=e("../charts/src/providers/theme/themes.ts"),C=e("../charts/src/components/legend/base-legend.tsx"),d=e("../charts/src/components/shared/with-responsive.tsx"),p=e("../charts/src/components/tooltip/base-tooltip.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(g),S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss"),u={};u.insert="head",u.singleton=!1;var A=_()(S.A,u);const T=S.A.locals||{};var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Y=h=>{if(!h.length)return{isValid:!1,message:"No data available"};if(h.some(P=>P.percentage<0||P.value<0))return{isValid:!1,message:"Invalid data: Negative values are not allowed"};const L=h.reduce((P,k)=>P+k.percentage,0);return Math.abs(L-100)>.01?{isValid:!1,message:"Invalid percentage total: Must equal 100"}:{isValid:!0,message:""}},R=({data:h,withTooltips:O=!1,className:L,showLegend:P,legendOrientation:k,size:E,thickness:b=1,padding:w=20,gapScale:I=0,cornerScale:B=0,children:U=null})=>{const D=(0,c.R)(),{onMouseMove:H,onMouseLeave:J,tooltipOpen:X,tooltipData:V,tooltipLeft:Q,tooltipTop:$}=j({withTooltips:O}),{isValid:Z,message:q}=Y(h);if(!Z)return(0,v.jsx)("div",{className:(0,o.A)("pie-chart",T["pie-chart"],L),children:(0,v.jsx)("div",{className:T["error-message"],children:q})});const W=E,z=E,ee=Math.min(W,z)/2,te=W/2,ne=z/2,se=I*(2*Math.PI/h.length),M=ee-w,K=M*(1-b),oe=(M-K)/2,ae=B?Math.min(B*M,oe):0,re=h.map((x,y)=>({...x,index:y})),N={value:x=>x.value,fill:x=>x?.color||D.colors[x.index]},le=h.map((x,y)=>({label:x.label,value:x.value.toString(),color:D.colors[y%D.colors.length]}));return(0,v.jsxs)("div",{className:(0,o.A)("pie-chart",T["pie-chart"],L),children:[(0,v.jsx)("svg",{viewBox:`0 0 ${E} ${E}`,preserveAspectRatio:"xMidYMid meet",width:E,height:E,children:(0,v.jsxs)(l.A,{top:ne,left:te,children:[(0,v.jsx)(s.A,{data:re,pieValue:N.value,outerRadius:M,innerRadius:K,padAngle:se,cornerRadius:ae,children:x=>x.arcs.map((y,de)=>{const[ie,ce]=x.path.centroid(y),pe=y.endAngle-y.startAngle>=.25,me=ue=>H(ue,y.data),F={d:x.path(y)||"",fill:N.fill(y.data)};return O&&(F.onMouseMove=me,F.onMouseLeave=J),(0,v.jsxs)("g",{children:[(0,v.jsx)("path",{...F}),pe&&(0,v.jsx)("text",{x:ie,y:ce,dy:".33em",fill:D.labelBackgroundColor||r.zQ.labelBackgroundColor,fontSize:12,textAnchor:"middle",pointerEvents:"none",children:y.data.label})]},`arc-${de}`)})}),U]})}),P&&(0,v.jsx)(C.$,{items:le,orientation:k,className:T["pie-chart-legend"]}),O&&X&&V&&(0,v.jsx)(p.R,{data:V,top:$||0,left:Q||0,style:{transform:"translate(-50%, -100%)"}})]})};R.displayName="PieChart";const G=(0,d.F)(R);try{R.displayName="PieChart",R.__docgenInfo={description:"",displayName:"PieChart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"unknown"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"unknown"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Use the children prop to render additional elements on the chart.",name:"children",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"DataPointPercentage[]"}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: { type?: keyof ScaleTypeToScaleConfig<DefaultOutput, StringLike, DefaultThresholdInput>; zero?: boolean; domain?: [...]; range?: [...]; }; xScale?: { ...; }; axis?: { ...; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},thickness:{defaultValue:{value:"1"},description:`Thickness of the pie chart.
A value between 0 and 1, where 0 means no thickness
and 1 means the maximum thickness.`,name:"thickness",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Add padding to the chart",name:"padding",required:!1,type:{name:"number"}},gapScale:{defaultValue:{value:"0"},description:`Scale of the gap between groups in the pie chart
A value between 0 and 1, where 0 means no gap.`,name:"gapScale",required:!1,type:{name:"number"}},cornerScale:{defaultValue:{value:"0"},description:`Scale of the corner radius for the pie chart segments.
A value between 0 and 1, where 0 means no corner radius.`,name:"cornerScale",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius in pixels. If > 0, creates a donut chart. Defaults to 0.",name:"innerRadius",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/pie-chart/pie-chart.tsx#PieChart"]={docgenInfo:R.__docgenInfo,name:"PieChart",path:"../charts/src/components/pie-chart/pie-chart.tsx#PieChart"})}catch{}},"../charts/src/components/shared/with-responsive.tsx":(f,i,e)=>{e.d(i,{F:()=>o});var l=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o(a,n){const{maxWidth:t=1200,aspectRatio:m=.5,debounceTime:j=50}=n||{};return function(r){const{parentRef:C,width:d}=(0,l.A)({debounceTime:j,enableDebounceLeadingCall:!0,initialSize:{width:600,height:400}}),p=d?Math.min(d,t):600,g=r.height??p*m;return(0,s.jsx)("div",{ref:C,style:{width:"100%"},children:(0,s.jsx)(a,{width:p,height:g,size:p,...r})})}}try{o.displayName="withResponsive",o.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:o.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/components/tooltip/base-tooltip.tsx":(f,i,e)=>{e.d(i,{R:()=>c});var l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss"),a={};a.insert="head",a.singleton=!1;var n=s()(o.A,a);const t=o.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({data:r})=>(0,m.jsxs)(m.Fragment,{children:[r?.label,": ",r?.valueDisplay||r?.value]}),c=({data:r,top:C,left:d,component:p=j,children:g,className:_})=>(0,m.jsx)("div",{className:t.tooltip,style:{top:C,left:d},role:"tooltip",children:g||r&&(0,m.jsx)(p,{data:r,className:_})});try{c.displayName="BaseTooltip",c.__docgenInfo={description:"",displayName:"BaseTooltip",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"TooltipData"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<TooltipComponentProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"]={docgenInfo:c.__docgenInfo,name:"BaseTooltip",path:"../charts/src/components/tooltip/base-tooltip.tsx#BaseTooltip"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(f,i,e)=>{e.d(i,{N:()=>t,R:()=>n});var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/theme/themes.ts"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,l.createContext)(s.zQ),n=()=>(0,l.useContext)(a),t=({theme:m={},children:j})=>{const c={...s.zQ,...m};return(0,o.jsx)(a.Provider,{value:c,children:j})};try{t.displayName="ThemeProvider",t.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:t.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{n.displayName="useChartTheme",n.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:n.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(f,i,e)=>{e.d(i,{QI:()=>s,pk:()=>o,zQ:()=>l});const l={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},s={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}},o={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(f,i,e)=>{e.d(i,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),n=a()(s());n.push([f.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),n.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const t=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/pie-chart/pie-chart.module.scss":(f,i,e)=>{e.d(i,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),n=a()(s());n.push([f.id,".s6qS3V8pL7zk4p_SuIGQ{position:relative}",""]),n.locals={"pie-chart":"s6qS3V8pL7zk4p_SuIGQ"};const t=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/tooltip/base-tooltip.module.scss":(f,i,e)=>{e.d(i,{A:()=>t});var l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),n=a()(s());n.push([f.id,".cv61OZzUGkuyGeBQsHYq{padding:.5rem;background-color:rgba(0,0,0,.85);color:#fff;border-radius:4px;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:absolute;pointer-events:none;transform:translate(-50%, -100%)}.visx-tooltip-glyph svg{width:10px;height:10px}",""]),n.locals={tooltip:"cv61OZzUGkuyGeBQsHYq"};const t=n}}]);
