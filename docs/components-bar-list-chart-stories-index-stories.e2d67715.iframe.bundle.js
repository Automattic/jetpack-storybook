(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(L,p,e)=>{"use strict";e.r(p),e.d(p,{CustomLabelComponent:()=>R,CustomValueComponent:()=>q,Default:()=>m,MultiSeries:()=>K,__namedExportsOrder:()=>se,default:()=>oe});var C=e("../number-formatters/src/index.ts"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),B=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(B),V=["className","innerRef"];function O(){return O=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},O.apply(this,arguments)}function N(t,s){if(t==null)return{};var l={},o=Object.keys(t),h,g;for(g=0;g<o.length;g++)h=o[g],!(s.indexOf(h)>=0)&&(l[h]=t[h]);return l}function d(t){var s=t.className,l=t.innerRef,o=N(t,V);return _.createElement("circle",O({ref:l,className:n()("visx-circle",s)},o))}var r=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),u=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),a=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),c=e("../charts/src/components/bar-chart/bar-chart.tsx"),v=e("../charts/src/components/shared/with-responsive.tsx"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=t=>{const s=t;return s&&"bandwidth"in s?s?.bandwidth()??0:0},F=({textProps:t,x:s,y:l,label:o,formatter:h})=>(0,i.jsx)(r.A,{...t,textAnchor:"start",x:s,y:l,children:h(o)}),A=({textProps:t,x:s,y:l,value:o,formatter:h})=>(0,i.jsx)(r.A,{...t,textAnchor:"end",x:s,y:l,fontWeight:500,children:h(o)}),E=({ticks:t,tickLabelProps:s,yOffset:l,labelPosition:o,valuePosition:h,data:g,labelFormatter:f,valueFormatter:S,LabelComponent:T=F,ValueComponent:j=A})=>{if(t.length===0)return null;const w=t.map(({value:W,index:z})=>typeof s=="function"?s(W,z,t):{});return t.map(({from:W,formattedValue:z},k)=>{const $=w[k]??{};delete $.textAnchor,delete $.dx;const Y=g.reduce((H,{data:J})=>H+(J[k]?.value??0),0),Q=W.y+l;return(0,i.jsxs)(u.A,{children:[(0,i.jsx)(T,{textProps:$,x:o,y:Q,label:z,formatter:f}),(0,i.jsx)(j,{textProps:$,x:h,y:Q,value:Y,formatter:S,data:g,index:k})]},k)})},G=(t,s,l,o)=>{if(!o)return 0;const h=t.map(({label:j})=>j),g=(0,y.A)({type:"band",range:[0,l],domain:h,...s}),f=(0,a.A)({domain:h,range:[0,D(g)],padding:s.paddingInner});return-(D(f)+6)},X=({data:t,width:s,height:l,options:o={},margin:h={left:0,right:20,bottom:0,top:0},...g})=>{const f=(0,_.useMemo)(()=>{const S=t.length>1,T={paddingInner:S?.3:.1,padding:S?.3:.1},j={zero:!0},w={...T,...o.yScale??{}},W={...j,...o.xScale??{}};return{yScale:w,xScale:W,labelPosition:o.labelPosition??(S?0:10),valueFormatter:o.valueFormatter??(z=>(0,C.qe)(z)),labelFormatter:o.labelFormatter??(z=>String(z)),valuePosition:o.valuePosition??s,yOffset:o.yOffset??G(t,w,l,S)}},[o,s,t,l]);return(0,i.jsx)(c.A,{orientation:"horizontal",gridVisibility:"none",data:t,width:s,height:l,margin:h,options:{axis:{y:{children:S=>(0,i.jsx)(E,{...S,data:t,yOffset:f.yOffset,labelPosition:f.labelPosition,valuePosition:f.valuePosition,labelFormatter:f.labelFormatter,valueFormatter:f.valueFormatter,LabelComponent:o.labelComponent,ValueComponent:o.valueComponent})},x:{children:()=>null}},xScale:f.xScale,yScale:f.yScale},...g})},M=(0,v.F)(X);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:null,description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:null,description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const te=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],P=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var ne=`import { formatNumberCompact } from '@automattic/number-formatters';
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
`,Z={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},CustomLabelComponent:{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},CustomValueComponent:{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}};const oe={title:"JS Packages/Charts/Types/Bar List Chart",component:M,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
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
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},"custom-label-component":{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},"custom-value-component":{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}}},layout:"centered"},decorators:[t=>(0,i.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,i.jsx)(t,{})})]},m={args:{withTooltips:!0,data:P}},K={args:{...m.args,data:te}},R={args:{...m.args,data:P,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:t,x:s,y:l,label:o,formatter:h})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{cx:s+6,cy:l,r:8}),(0,i.jsx)(r.A,{...t,textAnchor:"start",x:s+24,y:l,fontWeight:500,children:h(o)})]})}}},q={args:{...m.args,data:te,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:t,x:s,y:l,value:o,formatter:h,data:g,index:f})=>{const S=g[0].data[f].value,T=g[1].data[f].value,j=T===0?0:((S-T)/T*100).toFixed(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{...t,textAnchor:"end",x:s,y:l,dx:-50,fontWeight:500,children:h(o)}),(0,i.jsx)(r.A,{...t,textAnchor:"end",x:s,y:l,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(j)>0?"+":""}${j}%`})]})},valueFormatter:t=>`$${(0,C.qe)(t)}`}}},se=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...m.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...K.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(L,p,e)=>{"use strict";e.d(p,{A:()=>se});var C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),_=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),B=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),n=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),V=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),O=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),N=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),d=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),r=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),u=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),y=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../charts/src/providers/theme/theme-provider.tsx"),v=e("../charts/src/components/legend/base-legend.tsx"),i=e("../charts/src/components/shared/use-chart-data-transform.ts"),D=e("../charts/src/components/shared/use-chart-margin.tsx"),F=e("../charts/src/components/shared/use-element-height.ts"),A=e("../charts/src/components/shared/with-responsive.tsx"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(E),X=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),M={};M.insert="head",M.singleton=!1;var te=G()(X.A,M);const P=X.A.locals||{};var ne=e("../number-formatters/src/index.ts");const Z=t=>new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ae=t=>typeof t.paddingInner=="number"?t.paddingInner:0;function oe(t,s,l={}){const o=(0,a.useMemo)(()=>{const h={type:"band",padding:.2,paddingInner:.1},g={type:"linear",nice:!0,zero:!1},f=t?.[0]?.data?.[0]?.label?w=>w:Z,S=ne.qe,T=w=>w?.label||w?.date,j=w=>w?.value;return{vertical:{xTickFormat:f,yTickFormat:S,tooltipLabelFormatter:f,xAccessor:T,yAccessor:j,gridVisibility:"x",xScale:h,yScale:g},horizontal:{xTickFormat:S,yTickFormat:f,tooltipLabelFormatter:f,xAccessor:j,yAccessor:T,gridVisibility:"y",xScale:g,yScale:h}}},[t]);return(0,a.useMemo)(()=>{const h=s?"horizontal":"vertical",{xTickFormat:g,yTickFormat:f,tooltipLabelFormatter:S,xAccessor:T,yAccessor:j,gridVisibility:w,xScale:W,yScale:z}=o[h],k={...W,...l.xScale||{}},$={...z,...l.yScale||{}},Y=s?l.axis?.y?.tickFormat:l.axis?.x?.tickFormat;return{gridVisibility:w,xScale:k,yScale:$,accessors:{xAccessor:T,yAccessor:j},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:g,...l.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:f,...l.axis?.y||{}}},barGroup:{padding:ae(s?$:k)},tooltip:{labelFormatter:Y||S}}},[o,l,s])}var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const K=t=>t?.length?t.some(l=>l.data.some(o=>isNaN(o.value)||o.value===null||o.value===void 0||!o.label&&(!("date"in o&&o.date)||isNaN(o.date.getTime()))))?"Invalid data":null:"No data available",R=(t,s)=>`bar-pattern-${t}-${s}`,q=({data:t,width:s,height:l=400,className:o,margin:h,withTooltips:g=!1,showLegend:f=!1,legendOrientation:S="horizontal",legendAlignmentHorizontal:T="center",legendAlignmentVertical:j="bottom",legendShape:w="rect",gridVisibility:W,renderTooltip:z,options:k={},orientation:$="vertical",withPatterns:Y=!1})=>{const Q=$==="horizontal",H=(0,a.useId)(),J=(0,c.Ox)(t),U=(0,i.E)(t),I=oe(U,Q,k),le=(0,D.a)(l,I,U,J,Q),[pe,ie]=(0,F.v)(),ee=(0,a.useCallback)((x,b)=>x?.options?.stroke||J.colors[b%J.colors.length],[J]),he=(0,a.useCallback)(x=>()=>Y?`url(#${R(H,x)})`:ee(U[x],x),[Y,ee,U,H]),fe=(0,a.useCallback)(({tooltipData:x})=>{const b=x?.nearestDatum?.datum;return b?(0,m.jsxs)("div",{className:P["bar-chart__tooltip"],children:[(0,m.jsx)("div",{className:P["bar-chart__tooltip-header"],children:x?.nearestDatum?.key}),(0,m.jsxs)("div",{className:P["bar-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:P["bar-chart__tooltip-label"],children:[I.tooltip.labelFormatter(b.label||(b.date?b.date.getTime():0),0,[]),":"]}),(0,m.jsx)("span",{className:P["bar-chart__tooltip-value"],children:b.value})]})]}):null},[I.tooltip]),xe=(0,a.useCallback)((x,b)=>{const ue=x%4,me=R(H,x),re={id:me,key:me,stroke:"white",strokeWidth:1,background:b};switch(ue){case 0:default:return(0,m.jsx)(C.A,{...re,width:5,height:5,orientation:["diagonal"]});case 1:return(0,m.jsx)(_.A,{...re,width:6,height:6,fill:"white"});case 2:return(0,m.jsx)(B.A,{...re,width:4,height:4});case 3:return(0,m.jsx)(n.A,{...re,size:8,height:3})}},[H]),ve=(0,a.useCallback)((x,b)=>`
			.visx-bar[fill="url(#${R(H,x)})"] {
				stroke: ${b};
				stroke-width: 1;
				}
			`,[H]),ce=K(U);if(ce)return(0,m.jsx)("div",{className:(0,y.A)("bar-chart",P["bar-chart"]),children:ce});const ye=U.map((x,b)=>({label:x.label,value:"",color:ee(x,b),shapeStyle:x?.options?.legendShapeStyle})),de=W??I.gridVisibility;return(0,m.jsxs)("div",{className:(0,y.A)("bar-chart",P["bar-chart"],o),"data-testid":"bar-chart",role:"img","aria-label":"bar chart",style:{width:s,height:l,display:"flex",flexDirection:f&&j==="top"?"column-reverse":"column"},children:[(0,m.jsxs)(V.A,{theme:J,width:s,height:l-(f?ie:0),margin:{...le,...h,...f&&j==="top"?{top:(le.top||0)+ie}:{}},xScale:I.xScale,yScale:I.yScale,horizontal:Q,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(O.A,{columns:de.includes("y"),rows:de.includes("x"),numTicks:4}),Y&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("defs",{"data-testid":"bar-chart-patterns",children:U.map((x,b)=>xe(b,ee(x,b)))}),(0,m.jsx)("style",{children:U.map((x,b)=>ve(b,ee(x,b)))})]}),(0,m.jsx)(N.A,{padding:I.barGroup.padding,children:U.map((x,b)=>(0,m.jsx)(d.A,{dataKey:x?.label,data:x.data,yAccessor:I.accessors.yAccessor,xAccessor:I.accessors.xAccessor,colorAccessor:he(b)},x?.label))}),(0,m.jsx)(r.A,{...I.axis.x}),(0,m.jsx)(r.A,{...I.axis.y}),g&&(0,m.jsx)(u.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:z||fe})]}),f&&(0,m.jsx)(v.$,{items:ye,orientation:S,alignmentHorizontal:T,alignmentVertical:j,className:P["bar-chart__legend"],shape:w,ref:pe})]})},se=(0,A.F)(q);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(L,p,e)=>{"use strict";e.d(p,{A:()=>O});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(C),B=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(B),V=n()(_());V.push([L.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),V.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const O=V},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(L,p,e)=>{var C=e("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");p.formatArgs=B,p.save=n,p.load=V,p.useColors=_,p.storage=O(),p.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),p.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function _(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let d;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(d=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(d[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function B(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+L.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;d.splice(1,0,r,"color: inherit");let u=0,y=0;d[0].replace(/%[a-zA-Z%]/g,a=>{a!=="%%"&&(u++,a==="%c"&&(y=u))}),d.splice(y,0,r)}p.log=console.debug||console.log||(()=>{});function n(d){try{d?p.storage.setItem("debug",d):p.storage.removeItem("debug")}catch{}}function V(){let d;try{d=p.storage.getItem("debug")||p.storage.getItem("DEBUG")}catch{}return!d&&typeof C<"u"&&"env"in C&&(d=C.env.DEBUG),d}function O(){try{return localStorage}catch{}}L.exports=e("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(p);const{formatters:N}=L.exports;N.j=function(d){try{return JSON.stringify(d)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(L,p,e)=>{function C(_){n.debug=n,n.default=n,n.coerce=u,n.disable=d,n.enable=O,n.enabled=r,n.humanize=e("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),n.destroy=y,Object.keys(_).forEach(a=>{n[a]=_[a]}),n.names=[],n.skips=[],n.formatters={};function B(a){let c=0;for(let v=0;v<a.length;v++)c=(c<<5)-c+a.charCodeAt(v),c|=0;return n.colors[Math.abs(c)%n.colors.length]}n.selectColor=B;function n(a){let c,v=null,i,D;function F(...A){if(!F.enabled)return;const E=F,G=Number(new Date),X=G-(c||G);E.diff=X,E.prev=c,E.curr=G,c=G,A[0]=n.coerce(A[0]),typeof A[0]!="string"&&A.unshift("%O");let M=0;A[0]=A[0].replace(/%([a-zA-Z%])/g,(P,ne)=>{if(P==="%%")return"%";M++;const Z=n.formatters[ne];if(typeof Z=="function"){const ae=A[M];P=Z.call(E,ae),A.splice(M,1),M--}return P}),n.formatArgs.call(E,A),(E.log||n.log).apply(E,A)}return F.namespace=a,F.useColors=n.useColors(),F.color=n.selectColor(a),F.extend=V,F.destroy=n.destroy,Object.defineProperty(F,"enabled",{enumerable:!0,configurable:!1,get:()=>v!==null?v:(i!==n.namespaces&&(i=n.namespaces,D=n.enabled(a)),D),set:A=>{v=A}}),typeof n.init=="function"&&n.init(F),F}function V(a,c){const v=n(this.namespace+(typeof c>"u"?":":c)+a);return v.log=this.log,v}function O(a){n.save(a),n.namespaces=a,n.names=[],n.skips=[];const c=(typeof a=="string"?a:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const v of c)v[0]==="-"?n.skips.push(v.slice(1)):n.names.push(v)}function N(a,c){let v=0,i=0,D=-1,F=0;for(;v<a.length;)if(i<c.length&&(c[i]===a[v]||c[i]==="*"))c[i]==="*"?(D=i,F=v,i++):(v++,i++);else if(D!==-1)i=D+1,F++,v=F;else return!1;for(;i<c.length&&c[i]==="*";)i++;return i===c.length}function d(){const a=[...n.names,...n.skips.map(c=>"-"+c)].join(",");return n.enable(""),a}function r(a){for(const c of n.skips)if(N(a,c))return!1;for(const c of n.names)if(N(a,c))return!0;return!1}function u(a){return a instanceof Error?a.stack||a.message:a}function y(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}L.exports=C},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":L=>{var p=1e3,e=p*60,C=e*60,_=C*24,B=_*7,n=_*365.25;L.exports=function(r,u){u=u||{};var y=typeof r;if(y==="string"&&r.length>0)return V(r);if(y==="number"&&isFinite(r))return u.long?N(r):O(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function V(r){if(r=String(r),!(r.length>100)){var u=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(u){var y=parseFloat(u[1]),a=(u[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return y*n;case"weeks":case"week":case"w":return y*B;case"days":case"day":case"d":return y*_;case"hours":case"hour":case"hrs":case"hr":case"h":return y*C;case"minutes":case"minute":case"mins":case"min":case"m":return y*e;case"seconds":case"second":case"secs":case"sec":case"s":return y*p;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return y;default:return}}}}function O(r){var u=Math.abs(r);return u>=_?Math.round(r/_)+"d":u>=C?Math.round(r/C)+"h":u>=e?Math.round(r/e)+"m":u>=p?Math.round(r/p)+"s":r+"ms"}function N(r){var u=Math.abs(r);return u>=_?d(r,u,_,"day"):u>=C?d(r,u,C,"hour"):u>=e?d(r,u,e,"minute"):u>=p?d(r,u,p,"second"):r+" ms"}function d(r,u,y,a){var c=u>=y*1.5;return Math.round(r/y)+" "+a+(c?"s":"")}}}]);
