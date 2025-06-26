(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(V,c,e)=>{"use strict";e.r(c),e.d(c,{CustomLabelComponent:()=>Q,CustomValueComponent:()=>Z,Default:()=>H,MultiSeries:()=>$,__namedExportsOrder:()=>C,default:()=>b});var f=e("../number-formatters/src/index.ts"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),F=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(F),y=["className","innerRef"];function g(){return g=Object.assign?Object.assign.bind():function(l){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(l[m]=u[m])}return l},g.apply(this,arguments)}function j(l,d){if(l==null)return{};var u={},m=Object.keys(l),S,T;for(T=0;T<m.length;T++)S=m[T],!(d.indexOf(S)>=0)&&(u[S]=l[S]);return u}function r(l){var d=l.className,u=l.innerRef,m=j(l,y);return h.createElement("circle",g({ref:u,className:n()("visx-circle",d)},m))}var t=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),s=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),p=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),o=e("../charts/src/components/bar-chart/bar-chart.tsx"),_=e("../charts/src/components/shared/with-responsive.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=l=>{const d=l;return d&&"bandwidth"in d?d?.bandwidth()??0:0},x=({textProps:l,x:d,y:u,label:m,formatter:S})=>(0,i.jsx)(t.A,{...l,textAnchor:"start",x:d,y:u,children:S(m)}),O=({textProps:l,x:d,y:u,value:m,formatter:S})=>(0,i.jsx)(t.A,{...l,textAnchor:"end",x:d,y:u,fontWeight:500,children:S(m)}),D=({ticks:l,tickLabelProps:d,yOffset:u,labelPosition:m,valuePosition:S,data:T,labelFormatter:L,valueFormatter:E,LabelComponent:R=x,ValueComponent:P=O})=>{if(l.length===0)return null;const X=l.map(({value:J,index:N})=>typeof d=="function"?d(J,N,l):{});return l.map(({from:J,formattedValue:N},k)=>{const M=X[k]??{};delete M.textAnchor,delete M.dx;const z=T.reduce((te,{data:K})=>te+(K[k]?.value??0),0),Y=J.y+u;return(0,i.jsxs)(s.A,{children:[(0,i.jsx)(R,{textProps:M,x:m,y:Y,label:N,formatter:L}),(0,i.jsx)(P,{textProps:M,x:S,y:Y,value:z,formatter:E,data:T,index:k})]},k)})},G=(l,d,u,m)=>{if(!m)return 0;const S=l.map(({label:P})=>P),T=(0,p.A)({type:"band",range:[0,u],domain:S,...d}),L=(0,a.A)({domain:S,range:[0,B(T)],padding:d.paddingInner});return-(B(L)+6)},U=({data:l,width:d,height:u,options:m={},margin:S={left:0,right:20,bottom:0,top:0},...T})=>{const L=(0,h.useMemo)(()=>{const E=l.length>1,R={paddingInner:E?.3:.1,padding:E?.3:.1},P={zero:!0},X={...R,...m.yScale??{}},J={...P,...m.xScale??{}};return{yScale:X,xScale:J,labelPosition:m.labelPosition??(E?0:10),valueFormatter:m.valueFormatter??(N=>(0,f.qe)(N)),labelFormatter:m.labelFormatter??(N=>String(N)),valuePosition:m.valuePosition??d,yOffset:m.yOffset??G(l,X,u,E)}},[m,d,l,u]);return(0,i.jsx)(o.A,{orientation:"horizontal",gridVisibility:"none",data:l,width:d,height:u,margin:S,options:{axis:{y:{children:E=>(0,i.jsx)(D,{...E,data:l,yOffset:L.yOffset,labelPosition:L.labelPosition,valuePosition:L.valuePosition,labelFormatter:L.labelFormatter,valueFormatter:L.valueFormatter,LabelComponent:m.labelComponent,ValueComponent:m.valueComponent})},x:{children:()=>null}},xScale:L.xScale,yScale:L.yScale},...T})},v=(0,_.F)(U);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:null,description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:null,description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const I=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],W=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var q=`import { formatNumberCompact } from '@automattic/number-formatters';
import { Circle } from '@visx/shape';
import { Text } from '@visx/text';
import React from 'react';
import BarListChart from '../bar-list-chart';
import { salesByChannel, salesByProduct } from './sample-data';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta< typeof BarListChart > = {
	title: 'JS Packages/Charts/Types/Bar List Chart',
	component: BarListChart,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div
				style={ {
					resize: 'both',
					overflow: 'auto',
					padding: '2rem',
					width: '800px',
					maxWidth: '1200px',
					border: '1px dashed #ccc',
					display: 'inline-block',
				} }
			>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj< typeof BarListChart >;

// Default story with multiple series
export const Default: Story = {
	args: {
		withTooltips: true,
		data: salesByProduct,
	},
};

export const MultiSeries: Story = {
	args: {
		...Default.args,
		data: salesByChannel,
	},
};

export const CustomLabelComponent: Story = {
	args: {
		...Default.args,
		data: salesByProduct,
		width: 450,
		margin: {
			top: 0,
			right: 100,
			bottom: 0,
			left: 0,
		},
		options: {
			labelComponent: ( { textProps, x, y, label, formatter } ) => {
				return (
					<>
						<Circle cx={ x + 6 } cy={ y } r={ 8 } />
						<Text { ...textProps } textAnchor="start" x={ x + 24 } y={ y } fontWeight={ 500 }>
							{ formatter( label ) }
						</Text>
					</>
				);
			},
		},
	},
};

export const CustomValueComponent: Story = {
	args: {
		...Default.args,
		data: salesByChannel,
		width: 450,
		margin: {
			top: 0,
			right: 100,
			bottom: 0,
			left: 0,
		},
		options: {
			valueComponent: ( { textProps, x, y, value, formatter, data, index } ) => {
				const currentValue = data[ 0 ].data[ index ].value;
				const previousValue = data[ 1 ].data[ index ].value;
				const percentage =
					previousValue === 0
						? 0
						: ( ( ( currentValue - previousValue ) / previousValue ) * 100 ).toFixed( 0 );

				return (
					<>
						<Text { ...textProps } textAnchor="end" x={ x } y={ y } dx={ -50 } fontWeight={ 500 }>
							{ formatter( value ) }
						</Text>
						<Text
							{ ...textProps }
							textAnchor="end"
							x={ x }
							y={ y }
							dx={ -10 }
							fill="#008A20"
							fontWeight={ 500 }
						>
							{ \`\${ Number( percentage ) > 0 ? '+' : '' }\${ percentage }%\` }
						</Text>
					</>
				);
			},
			valueFormatter: ( value: number ) => \`$\${ formatNumberCompact( value ) }\`,
		},
	},
};
`,ee={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},CustomLabelComponent:{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},CustomValueComponent:{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}};const b={title:"JS Packages/Charts/Types/Bar List Chart",component:v,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
import { Circle } from '@visx/shape';
import { Text } from '@visx/text';
import React from 'react';
import BarListChart from '../bar-list-chart';
import { salesByChannel, salesByProduct } from './sample-data';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Charts/Types/Bar List Chart',
  component: BarListChart,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      resize: 'both',
      overflow: 'auto',
      padding: '2rem',
      width: '800px',
      maxWidth: '1200px',
      border: '1px dashed #ccc',
      display: 'inline-block'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export default meta;
// Default story with multiple series
export const Default = {
  args: {
    withTooltips: true,
    data: salesByProduct
  }
};
export const MultiSeries = {
  args: {
    ...Default.args,
    data: salesByChannel
  }
};
export const CustomLabelComponent = {
  args: {
    ...Default.args,
    data: salesByProduct,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      labelComponent: ({
        textProps,
        x,
        y,
        label,
        formatter
      }) => {
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(Circle, {
            cx: x + 6,
            cy: y,
            r: 8
          }), /*#__PURE__*/_jsx(Text, {
            ...textProps,
            textAnchor: "start",
            x: x + 24,
            y: y,
            fontWeight: 500,
            children: formatter(label)
          })]
        });
      }
    }
  }
};
export const CustomValueComponent = {
  args: {
    ...Default.args,
    data: salesByChannel,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      valueComponent: ({
        textProps,
        x,
        y,
        value,
        formatter,
        data,
        index
      }) => {
        const currentValue = data[0].data[index].value;
        const previousValue = data[1].data[index].value;
        const percentage = previousValue === 0 ? 0 : ((currentValue - previousValue) / previousValue * 100).toFixed(0);
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(Text, {
            ...textProps,
            textAnchor: "end",
            x: x,
            y: y,
            dx: -50,
            fontWeight: 500,
            children: formatter(value)
          }), /*#__PURE__*/_jsx(Text, {
            ...textProps,
            textAnchor: "end",
            x: x,
            y: y,
            dx: -10,
            fill: "#008A20",
            fontWeight: 500,
            children: \`\${Number(percentage) > 0 ? '+' : ''}\${percentage}%\`
          })]
        });
      },
      valueFormatter: value => \`$\${formatNumberCompact(value)}\`
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},"custom-label-component":{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},"custom-value-component":{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}}},layout:"centered"},decorators:[l=>(0,i.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,i.jsx)(l,{})})]},H={args:{withTooltips:!0,data:W}},$={args:{...H.args,data:I}},Q={args:{...H.args,data:W,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:l,x:d,y:u,label:m,formatter:S})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{cx:d+6,cy:u,r:8}),(0,i.jsx)(t.A,{...l,textAnchor:"start",x:d+24,y:u,fontWeight:500,children:S(m)})]})}}},Z={args:{...H.args,data:I,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:l,x:d,y:u,value:m,formatter:S,data:T,index:L})=>{const E=T[0].data[L].value,R=T[1].data[L].value,P=R===0?0:((E-R)/R*100).toFixed(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.A,{...l,textAnchor:"end",x:d,y:u,dx:-50,fontWeight:500,children:S(m)}),(0,i.jsx)(t.A,{...l,textAnchor:"end",x:d,y:u,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(P)>0?"+":""}${P}%`})]})},valueFormatter:l=>`$${(0,f.qe)(l)}`}}},C=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...H.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...$.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByProduct,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      labelComponent: ({
        textProps,
        x,
        y,
        label,
        formatter
      }) => {
        return <>
                        <Circle cx={x + 6} cy={y} r={8} />
                        <Text {...textProps} textAnchor="start" x={x + 24} y={y} fontWeight={500}>
                            {formatter(label)}
                        </Text>
                    </>;
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    width: 450,
    margin: {
      top: 0,
      right: 100,
      bottom: 0,
      left: 0
    },
    options: {
      valueComponent: ({
        textProps,
        x,
        y,
        value,
        formatter,
        data,
        index
      }) => {
        const currentValue = data[0].data[index].value;
        const previousValue = data[1].data[index].value;
        const percentage = previousValue === 0 ? 0 : ((currentValue - previousValue) / previousValue * 100).toFixed(0);
        return <>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-50} fontWeight={500}>
                            {formatter(value)}
                        </Text>
                        <Text {...textProps} textAnchor="end" x={x} y={y} dx={-10} fill="#008A20" fontWeight={500}>
                            {\`\${Number(percentage) > 0 ? '+' : ''}\${percentage}%\`}
                        </Text>
                    </>;
      },
      valueFormatter: (value: number) => \`$\${formatNumberCompact(value)}\`
    }
  }
}`,...Z.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(V,c,e)=>{"use strict";e.d(c,{A:()=>Z});var f=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),h=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),F=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),n=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),y=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),j=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),r=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),t=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../charts/src/providers/theme/theme-provider.tsx"),_=e("../charts/src/components/legend/base-legend.tsx"),i=e("../charts/src/components/shared/use-chart-margin.tsx"),B=e("../charts/src/components/shared/use-element-height.ts"),x=e("../charts/src/components/shared/with-responsive.tsx"),O=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(O),G=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),U={};U.insert="head",U.singleton=!1;var v=D()(G.A,U);const I=G.A.locals||{};var W=e("../number-formatters/src/index.ts");const q=C=>new Date(C).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ee=C=>typeof C.paddingInner=="number"?C.paddingInner:0;function ne(C,l,d={}){const u=(0,a.useMemo)(()=>{const m={type:"band",padding:.2,paddingInner:.1},S={type:"linear",nice:!0,zero:!1},T=C?.[0]?.data?.[0]?.label?P=>P:q,L=W.qe,E=P=>P?.label||P?.date,R=P=>P?.value;return{vertical:{xTickFormat:T,yTickFormat:L,tooltipLabelFormatter:T,xAccessor:E,yAccessor:R,gridVisibility:"x",xScale:m,yScale:S},horizontal:{xTickFormat:L,yTickFormat:T,tooltipLabelFormatter:T,xAccessor:R,yAccessor:E,gridVisibility:"y",xScale:S,yScale:m}}},[C]);return(0,a.useMemo)(()=>{const m=l?"horizontal":"vertical",{xTickFormat:S,yTickFormat:T,tooltipLabelFormatter:L,xAccessor:E,yAccessor:R,gridVisibility:P,xScale:X,yScale:J}=u[m],N={...X,...d.xScale||{}},k={...J,...d.yScale||{}},M=l?d.axis?.y?.tickFormat:d.axis?.x?.tickFormat;return{gridVisibility:P,xScale:N,yScale:k,accessors:{xAccessor:E,yAccessor:R},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:S,...d.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:T,...d.axis?.y||{}}},barGroup:{padding:ee(l?k:N)},tooltip:{labelFormatter:M||L}}},[u,d,l])}var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const H=C=>C?.length?C.some(d=>d.data.some(u=>u.value===null||u.value===void 0||isNaN(u.value)||!u.label&&(!u.date||isNaN(u.date.getTime()))))?"Invalid data":null:"No data available",$=(C,l)=>`bar-pattern-${C}-${l}`,Q=({data:C,width:l,height:d=400,className:u,margin:m,withTooltips:S=!1,showLegend:T=!1,legendOrientation:L="horizontal",legendAlignmentHorizontal:E="center",legendAlignmentVertical:R="bottom",legendShape:P="rect",gridVisibility:X,renderTooltip:J,options:N={},orientation:k="vertical",withPatterns:M=!1})=>{const z=k==="horizontal",Y=(0,a.useId)(),te=(0,o.Ox)(C),K=ne(C,z,N),se=(0,i.a)(d,K,C,te,z),[ue,oe]=(0,B.v)(),ae=(0,a.useCallback)((A,w)=>A?.options?.stroke||te.colors[w%te.colors.length],[te]),me=(0,a.useCallback)(A=>()=>M?`url(#${$(Y,A)})`:ae(C[A],A),[M,ae,C,Y]),pe=(0,a.useCallback)(({tooltipData:A})=>{const w=A?.nearestDatum?.datum;return w?(0,b.jsxs)("div",{className:I["bar-chart__tooltip"],children:[(0,b.jsx)("div",{className:I["bar-chart__tooltip-header"],children:A?.nearestDatum?.key}),(0,b.jsxs)("div",{className:I["bar-chart__tooltip-row"],children:[(0,b.jsxs)("span",{className:I["bar-chart__tooltip-label"],children:[K.tooltip.labelFormatter(w.label||w.date.getTime(),0,[]),":"]}),(0,b.jsx)("span",{className:I["bar-chart__tooltip-value"],children:w.value})]})]}):null},[K.tooltip]),he=(0,a.useCallback)((A,w)=>{const de=A%4,ce=$(Y,A),re={id:ce,key:ce,stroke:"white",strokeWidth:1,background:w};switch(de){case 0:default:return(0,b.jsx)(f.A,{...re,width:5,height:5,orientation:["diagonal"]});case 1:return(0,b.jsx)(h.A,{...re,width:6,height:6,fill:"white"});case 2:return(0,b.jsx)(F.A,{...re,width:4,height:4});case 3:return(0,b.jsx)(n.A,{...re,size:8,height:3})}},[Y]),fe=(0,a.useCallback)((A,w)=>`
			.visx-bar[fill="url(#${$(Y,A)})"] {
				stroke: ${w};
				stroke-width: 1;
				}
			`,[Y]),le=H(C);if(le)return(0,b.jsx)("div",{className:(0,p.A)("bar-chart",I["bar-chart"]),children:le});const ge=C.map((A,w)=>({label:A.label,value:"",color:ae(A,w),shapeStyle:A?.options?.legendShapeStyle})),ie=X??K.gridVisibility;return(0,b.jsxs)("div",{className:(0,p.A)("bar-chart",I["bar-chart"],u),"data-testid":"bar-chart",role:"img","aria-label":"bar chart",style:{width:l,height:d,position:"relative"},children:[(0,b.jsxs)(y.A,{theme:te,width:l,height:d-(T?oe:0),margin:{...se,...m,...T&&R==="top"?{top:(se.top||0)+oe}:{}},xScale:K.xScale,yScale:K.yScale,horizontal:z,pointerEventsDataKey:"nearest",children:[(0,b.jsx)(g.A,{columns:ie.includes("y"),rows:ie.includes("x"),numTicks:4}),M&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("defs",{"data-testid":"bar-chart-patterns",children:C.map((A,w)=>he(w,ae(A,w)))}),(0,b.jsx)("style",{children:C.map((A,w)=>fe(w,ae(A,w)))})]}),(0,b.jsx)(j.A,{padding:K.barGroup.padding,children:C.map((A,w)=>(0,b.jsx)(r.A,{dataKey:A?.label,data:A.data,yAccessor:K.accessors.yAccessor,xAccessor:K.accessors.xAccessor,colorAccessor:me(w)},A?.label))}),(0,b.jsx)(t.A,{...K.axis.x}),(0,b.jsx)(t.A,{...K.axis.y}),S&&(0,b.jsx)(s.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:J||pe})]}),T&&(0,b.jsx)(_.$,{items:ge,orientation:L,alignmentHorizontal:E,alignmentVertical:R,className:I["bar-chart__legend"],shape:P,ref:ue})]})},Z=(0,x.F)(Q);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../charts/src/components/legend/base-legend.tsx":(V,c,e)=>{"use strict";e.d(c,{$:()=>U});var f=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),h=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),F=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),n=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),y=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),g=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),j=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../charts/src/providers/theme/theme-provider.tsx"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(s),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),o={};o.insert="head",o.singleton=!1;var _=p()(a.A,o);const i=a.A.locals||{};function B(v){return v&&typeof v=="object"&&"value"in v&&typeof v.value<"u"?v.value:v}function x(v){return String(B(v))}function O({scale:v,labelFormat:I}){return(W,q)=>({datum:W,index:q,text:`${I(W,q)}`,value:v(W)})}var D=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const G={horizontal:"row",vertical:"column"},U=(0,r.forwardRef)(({items:v,className:I,orientation:W="horizontal",alignmentHorizontal:q="center",alignmentVertical:ee="bottom",shape:ne="rect",fill:b=x,size:H=x,labelFormat:$=B,labelTransform:Q=O,shapeWidth:Z=16,shapeHeight:C=16,shapeMargin:l="2px 4px 2px 0",labelAlign:d="left",labelFlex:u="1",labelMargin:m="0 4px",itemMargin:S="0",itemDirection:T="row",legendLabelProps:L,...E},R)=>{const P=(0,t.RW)(),X=(0,g.A)({domain:v.map(k=>k.label),range:v.map(k=>k.color)}),J=X.domain(),N=(0,r.useCallback)(({index:k})=>v[k]?.shapeStyle??P.legendShapeStyles?.[k]??{},[v,P]);return(0,D.jsx)(h.A,{scale:X,labelFormat:$,labelTransform:Q,children:k=>(0,D.jsx)("div",{ref:R,role:"list","data-testid":`legend-${W}`,className:(0,j.A)(i.legend,i[`legend--${W}`],i[`legend--horizontal-align-${q}`],i[`legend--vertical-align-${ee}`],I),style:{flexDirection:G[W],...P.legendContainerStyles},children:k.map((M,z)=>(0,D.jsxs)(F.A,{className:i["legend-item"],"data-testid":"legend-item",margin:S,flexDirection:T,...E,children:[v[z]?.renderGlyph?(0,D.jsx)("svg",{width:v[z]?.glyphSize*2,height:v[z]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,D.jsx)(f.A,{children:v[z]?.renderGlyph({key:`legend-glyph-${M.text}`,datum:{},index:z,color:b(M),size:v[z]?.glyphSize,x:v[z]?.glyphSize,y:v[z]?.glyphSize})})}):(0,D.jsx)(n.A,{shape:ne,height:C,width:Z,margin:l,item:J[z],itemIndex:z,label:M,fill:b,size:H,shapeStyle:N}),(0,D.jsxs)(y.A,{style:{justifyContent:d,flex:u,margin:m,...P.legendLabelStyles},...L,children:[M.text,v.find(Y=>Y.label===M.text)?.value&&(0,D.jsx)("span",{className:i["legend-item-value"],children:v.find(Y=>Y.label===M.text)?.value})]})]},`legend-${M.text}-${z}`))})})});try{U.displayName="BaseLegend",U.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignmentHorizontal:{defaultValue:{value:"center"},description:"",name:"alignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},alignmentVertical:{defaultValue:{value:"bottom"},description:"",name:"alignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:U.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/shared/use-chart-margin.tsx":(V,c,e)=>{"use strict";e.d(c,{a:()=>g});var f=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),h=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),F=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const y=(j,r,t)=>{const s=j.map(a=>r(a,0,[])),p=s.reduce((a,o)=>a.length>=o.length?a:o,s[0]);return(0,n.A)(p,t)},g=(j,r,t,s,p=!1)=>{const a=(0,F.useMemo)(()=>{const o=t.flatMap(x=>x.data);if(p)return o.map(x=>x.label||r.axis?.y?.tickFormat(x.date.getTime(),0,[]));const _=Math.min(...o.map(x=>x.value)),i=Math.max(...o.map(x=>x.value)),B=(0,f.A)({...r.yScale,domain:[_,i],range:[j,0]});return(0,h.A)(B,r.axis?.y?.numTicks)},[r,t,j,p]);return(0,F.useMemo)(()=>{const o={top:10,right:20,bottom:20,left:20},_=40,i=r.axis?.y?.orientation,B=i==="right"?s.axisStyles.y.right:s.axisStyles.y.left,O=(y(a,r.axis?.y?.tickFormat,B.axisLabel)??_)+(B?.tickLength??0);return i==="right"?o.right=O:o.left=O,r.axis?.x?.orientation==="top"&&(o.top=20,o.bottom=10),o},[r,s,a])}},"../charts/src/components/shared/use-element-height.ts":(V,c,e)=>{"use strict";e.d(c,{v:()=>h});var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function h({initialHeight:F=0}={}){const[n,y]=(0,f.useState)(F),g=(0,f.useRef)(null);return[(0,f.useCallback)(r=>{if(g.current&&(g.current.disconnect(),g.current=null),r){const t=()=>{y(r.getBoundingClientRect().height||0)};t();const s=new window.ResizeObserver(t);s.observe(r),g.current=s}},[]),n]}},"../charts/src/components/shared/with-responsive.tsx":(V,c,e)=>{"use strict";e.d(c,{F:()=>n});var f=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const F=({resizeDebounceTime:y=300,maxWidth:g=1200,aspectRatio:j=.5})=>{const{parentRef:r,width:t}=(0,f.A)({debounceTime:y,enableDebounceLeadingCall:!0}),s=t>0?Math.min(t,g):0,p=s*j;return{parentRef:r,width:s,height:p}};function n(y){return function({resizeDebounceTime:j=300,maxWidth:r=1200,aspectRatio:t=.5,...s}){const{parentRef:p,width:a,height:o}=F({resizeDebounceTime:j,maxWidth:r,aspectRatio:t});return(0,h.jsx)("div",{ref:p,style:{width:"100%",height:s.height??"auto"},children:(0,h.jsx)(y,{width:a,height:o,size:a,...s})})}}try{n.displayName="withResponsive",n.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:n.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(V,c,e)=>{"use strict";e.d(c,{NP:()=>r,Ox:()=>j,RW:()=>g});var f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),F=e("../charts/src/providers/theme/themes.ts"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,h.createContext)(F.zQ),g=()=>(0,h.useContext)(y),j=t=>{const s=g();return(0,h.useMemo)(()=>{const p=(t??[]).map(a=>a.options?.stroke).filter(a=>!!a);return(0,f.A)({...s,colors:[...p,...s.colors??[]]})},[s,t])},r=({theme:t={},children:s})=>{const p={...F.zQ,...t};return(0,n.jsx)(y.Provider,{value:p,children:s})};try{r.displayName="ThemeProvider",r.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:r.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{g.displayName="useChartTheme",g.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:g.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{j.displayName="useXYChartTheme",j.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:j.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(V,c,e)=>{"use strict";e.d(c,{QI:()=>h,pk:()=>F,zQ:()=>f});const f={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},h={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"},annotationStyles:{label:{anchorLineStroke:"var(--jp-gray-80, #2c3338)",backgroundFill:"#fff"},connector:{stroke:"var(--jp-gray-80, #2c3338)"},circleSubject:{stroke:"transparent",fill:"var(--jp-gray-80, #2c3338)",radius:5}}},F={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"},annotationStyles:{label:{anchorLineStroke:"black",backgroundFill:"#fff"},connector:{stroke:"black"},circleSubject:{stroke:"transparent",fill:"black",radius:5}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(V,c,e)=>{"use strict";e.d(c,{A:()=>g});var f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(f),F=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(F),y=n()(h());y.push([V.id,".ntOQdGFaV5IXyaLCFF_r{position:relative}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),y.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const g=y},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(V,c,e)=>{"use strict";e.d(c,{A:()=>g});var f=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(f),F=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(F),y=n()(h());y.push([V.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.MYFewOP21Y4GVm663D6z{position:absolute;top:0;z-index:10}.MYFewOP21Y4GVm663D6z.Sla7_x8BgBrFt0ij9Wti{left:0}.MYFewOP21Y4GVm663D6z.UW_XpeIz_5GpmlfPHgO7{left:50%;transform:translateX(-50%)}.MYFewOP21Y4GVm663D6z.z_v3d3imptbDEps1ycxC{right:0}.soJYpRSvEDNrcSctfKPg{position:relative}.soJYpRSvEDNrcSctfKPg.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.soJYpRSvEDNrcSctfKPg.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.soJYpRSvEDNrcSctfKPg.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),y.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend--vertical-align-top":"MYFewOP21Y4GVm663D6z","legend--horizontal-align-left":"Sla7_x8BgBrFt0ij9Wti","legend--horizontal-align-center":"UW_XpeIz_5GpmlfPHgO7","legend--horizontal-align-right":"z_v3d3imptbDEps1ycxC","legend--vertical-align-bottom":"soJYpRSvEDNrcSctfKPg","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const g=y},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(V,c,e)=>{var f=e("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");c.formatArgs=F,c.save=n,c.load=y,c.useColors=h,c.storage=g(),c.destroy=(()=>{let r=!1;return()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),c.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function h(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let r;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(r=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(r[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function F(r){if(r[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+r[0]+(this.useColors?"%c ":" ")+"+"+V.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;r.splice(1,0,t,"color: inherit");let s=0,p=0;r[0].replace(/%[a-zA-Z%]/g,a=>{a!=="%%"&&(s++,a==="%c"&&(p=s))}),r.splice(p,0,t)}c.log=console.debug||console.log||(()=>{});function n(r){try{r?c.storage.setItem("debug",r):c.storage.removeItem("debug")}catch{}}function y(){let r;try{r=c.storage.getItem("debug")||c.storage.getItem("DEBUG")}catch{}return!r&&typeof f<"u"&&"env"in f&&(r=f.env.DEBUG),r}function g(){try{return localStorage}catch{}}V.exports=e("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(c);const{formatters:j}=V.exports;j.j=function(r){try{return JSON.stringify(r)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(V,c,e)=>{function f(h){n.debug=n,n.default=n,n.coerce=s,n.disable=r,n.enable=g,n.enabled=t,n.humanize=e("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),n.destroy=p,Object.keys(h).forEach(a=>{n[a]=h[a]}),n.names=[],n.skips=[],n.formatters={};function F(a){let o=0;for(let _=0;_<a.length;_++)o=(o<<5)-o+a.charCodeAt(_),o|=0;return n.colors[Math.abs(o)%n.colors.length]}n.selectColor=F;function n(a){let o,_=null,i,B;function x(...O){if(!x.enabled)return;const D=x,G=Number(new Date),U=G-(o||G);D.diff=U,D.prev=o,D.curr=G,o=G,O[0]=n.coerce(O[0]),typeof O[0]!="string"&&O.unshift("%O");let v=0;O[0]=O[0].replace(/%([a-zA-Z%])/g,(W,q)=>{if(W==="%%")return"%";v++;const ee=n.formatters[q];if(typeof ee=="function"){const ne=O[v];W=ee.call(D,ne),O.splice(v,1),v--}return W}),n.formatArgs.call(D,O),(D.log||n.log).apply(D,O)}return x.namespace=a,x.useColors=n.useColors(),x.color=n.selectColor(a),x.extend=y,x.destroy=n.destroy,Object.defineProperty(x,"enabled",{enumerable:!0,configurable:!1,get:()=>_!==null?_:(i!==n.namespaces&&(i=n.namespaces,B=n.enabled(a)),B),set:O=>{_=O}}),typeof n.init=="function"&&n.init(x),x}function y(a,o){const _=n(this.namespace+(typeof o>"u"?":":o)+a);return _.log=this.log,_}function g(a){n.save(a),n.namespaces=a,n.names=[],n.skips=[];const o=(typeof a=="string"?a:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const _ of o)_[0]==="-"?n.skips.push(_.slice(1)):n.names.push(_)}function j(a,o){let _=0,i=0,B=-1,x=0;for(;_<a.length;)if(i<o.length&&(o[i]===a[_]||o[i]==="*"))o[i]==="*"?(B=i,x=_,i++):(_++,i++);else if(B!==-1)i=B+1,x++,_=x;else return!1;for(;i<o.length&&o[i]==="*";)i++;return i===o.length}function r(){const a=[...n.names,...n.skips.map(o=>"-"+o)].join(",");return n.enable(""),a}function t(a){for(const o of n.skips)if(j(a,o))return!1;for(const o of n.names)if(j(a,o))return!0;return!1}function s(a){return a instanceof Error?a.stack||a.message:a}function p(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}V.exports=f},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":V=>{var c=1e3,e=c*60,f=e*60,h=f*24,F=h*7,n=h*365.25;V.exports=function(t,s){s=s||{};var p=typeof t;if(p==="string"&&t.length>0)return y(t);if(p==="number"&&isFinite(t))return s.long?j(t):g(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function y(t){if(t=String(t),!(t.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(s){var p=parseFloat(s[1]),a=(s[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return p*n;case"weeks":case"week":case"w":return p*F;case"days":case"day":case"d":return p*h;case"hours":case"hour":case"hrs":case"hr":case"h":return p*f;case"minutes":case"minute":case"mins":case"min":case"m":return p*e;case"seconds":case"second":case"secs":case"sec":case"s":return p*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return p;default:return}}}}function g(t){var s=Math.abs(t);return s>=h?Math.round(t/h)+"d":s>=f?Math.round(t/f)+"h":s>=e?Math.round(t/e)+"m":s>=c?Math.round(t/c)+"s":t+"ms"}function j(t){var s=Math.abs(t);return s>=h?r(t,s,h,"day"):s>=f?r(t,s,f,"hour"):s>=e?r(t,s,e,"minute"):s>=c?r(t,s,c,"second"):t+" ms"}function r(t,s,p,a){var o=s>=p*1.5;return Math.round(t/p)+" "+a+(o?"s":"")}}}]);
