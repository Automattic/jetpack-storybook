"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(Y,j,e)=>{e.r(j),e.d(j,{CustomLabelComponent:()=>X,CustomValueComponent:()=>J,Default:()=>N,MultiSeries:()=>K,__namedExportsOrder:()=>m,default:()=>u});var S=e("../number-formatters/src/index.ts"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),V=e.n(C),g=["className","innerRef"];function i(){return i=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},i.apply(this,arguments)}function L(t,n){if(t==null)return{};var a={},r=Object.keys(t),p,h;for(h=0;h<r.length;h++)p=r[h],!(n.indexOf(p)>=0)&&(a[p]=t[p]);return a}function l(t){var n=t.className,a=t.innerRef,r=L(t,g);return y.createElement("circle",i({ref:a,className:V()("visx-circle",n)},r))}var s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),f=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),T=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),d=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),_=e("../charts/src/components/bar-chart/bar-chart.tsx"),G=e("../charts/src/components/shared/with-responsive.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I=t=>{const n=t;return n&&"bandwidth"in n?n?.bandwidth()??0:0},B=({textProps:t,x:n,y:a,label:r,formatter:p})=>(0,o.jsx)(s.A,{...t,textAnchor:"start",x:n,y:a,children:p(r)}),q=({textProps:t,x:n,y:a,value:r,formatter:p})=>(0,o.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,fontWeight:500,children:p(r)}),W=({ticks:t,tickLabelProps:n,yOffset:a,labelPosition:r,valuePosition:p,data:h,labelFormatter:b,valueFormatter:A,LabelComponent:O=B,ValueComponent:x=q})=>{if(t.length===0)return null;const U=t.map(({value:H,index:w})=>typeof n=="function"?n(H,w,t):{});return t.map(({from:H,formattedValue:w},D)=>{const F=U[D]??{};delete F.textAnchor,delete F.dx;const E=h.reduce((Z,{data:M})=>Z+(M[D]?.value??0),0),z=H.y+a;return(0,o.jsxs)(f.A,{children:[(0,o.jsx)(O,{textProps:F,x:r,y:z,label:w,formatter:b}),(0,o.jsx)(x,{textProps:F,x:p,y:z,value:E,formatter:A,data:h,index:D})]},D)})},ee=(t,n,a,r)=>{if(!r)return 0;const p=t.map(({label:x})=>x),h=(0,T.A)({type:"band",range:[0,a],domain:p,...n}),b=(0,d.A)({domain:p,range:[0,I(h)],padding:n.paddingInner});return-(I(b)+6)},$=({data:t,width:n,height:a,options:r={},margin:p={left:0,right:20,bottom:0,top:0},...h})=>{const b=(0,y.useMemo)(()=>{const A=t.length>1,O={paddingInner:A?.3:.1,padding:A?.3:.1},x={zero:!0},U={...O,...r.yScale??{}},H={...x,...r.xScale??{}};return{yScale:U,xScale:H,labelPosition:r.labelPosition??(A?0:10),valueFormatter:r.valueFormatter??(w=>(0,S.qe)(w)),labelFormatter:r.labelFormatter??(w=>String(w)),valuePosition:r.valuePosition??n,yOffset:r.yOffset??ee(t,U,a,A)}},[r,n,t,a]);return(0,o.jsx)(_.A,{orientation:"horizontal",gridVisibility:"none",data:t,width:n,height:a,margin:p,options:{axis:{y:{children:A=>(0,o.jsx)(W,{...A,data:t,yOffset:b.yOffset,labelPosition:b.labelPosition,valuePosition:b.valuePosition,labelFormatter:b.labelFormatter,valueFormatter:b.valueFormatter,LabelComponent:r.labelComponent,ValueComponent:r.valueComponent})},x:{children:()=>null}},xScale:b.xScale,yScale:b.yScale},...h})},c=(0,G.F)($);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:null,description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:null,description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const R=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],k=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var Q=`import { formatNumberCompact } from '@automattic/number-formatters';
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
`,ne={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},CustomLabelComponent:{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},CustomValueComponent:{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}};const u={title:"JS Packages/Charts/Types/Bar List Chart",component:c,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
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
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},"custom-label-component":{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},"custom-value-component":{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}}},layout:"centered"},decorators:[t=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(t,{})})]},N={args:{withTooltips:!0,data:k}},K={args:{...N.args,data:R}},X={args:{...N.args,data:k,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:t,x:n,y:a,label:r,formatter:p})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{cx:n+6,cy:a,r:8}),(0,o.jsx)(s.A,{...t,textAnchor:"start",x:n+24,y:a,fontWeight:500,children:p(r)})]})}}},J={args:{...N.args,data:R,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:t,x:n,y:a,value:r,formatter:p,data:h,index:b})=>{const A=h[0].data[b].value,O=h[1].data[b].value,x=O===0?0:((A-O)/O*100).toFixed(0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,dx:-50,fontWeight:500,children:p(r)}),(0,o.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(x)>0?"+":""}${x}%`})]})},valueFormatter:t=>`$${(0,S.qe)(t)}`}}},m=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...N.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...K.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(Y,j,e)=>{e.d(j,{A:()=>J});var S=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),y=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),V=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),g=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),i=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),L=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),T=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../charts/src/providers/theme/theme-provider.tsx"),G=e("../charts/src/components/legend/base-legend.tsx"),o=e("../charts/src/components/shared/use-chart-margin.tsx"),I=e("../charts/src/components/shared/use-element-height.ts"),B=e("../charts/src/components/shared/with-responsive.tsx"),q=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(q),ee=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),$={};$.insert="head",$.singleton=!1;var c=W()(ee.A,$);const R=ee.A.locals||{};var k=e("../number-formatters/src/index.ts");const Q=m=>new Date(m).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ne=m=>typeof m.paddingInner=="number"?m.paddingInner:0;function ae(m,t,n={}){const a=(0,d.useMemo)(()=>{const r={type:"band",padding:.2,paddingInner:.1},p={type:"linear",nice:!0,zero:!1},h=m?.[0]?.data?.[0]?.label?x=>x:Q,b=k.qe,A=x=>x?.label||x?.date,O=x=>x?.value;return{vertical:{xTickFormat:h,yTickFormat:b,tooltipLabelFormatter:h,xAccessor:A,yAccessor:O,gridVisibility:"x",xScale:r,yScale:p},horizontal:{xTickFormat:b,yTickFormat:h,tooltipLabelFormatter:h,xAccessor:O,yAccessor:A,gridVisibility:"y",xScale:p,yScale:r}}},[m]);return(0,d.useMemo)(()=>{const r=t?"horizontal":"vertical",{xTickFormat:p,yTickFormat:h,tooltipLabelFormatter:b,xAccessor:A,yAccessor:O,gridVisibility:x,xScale:U,yScale:H}=a[r],w={...U,...n.xScale||{}},D={...H,...n.yScale||{}},F=t?n.axis?.y?.tickFormat:n.axis?.x?.tickFormat;return{gridVisibility:x,xScale:w,yScale:D,accessors:{xAccessor:A,yAccessor:O},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:p,...n.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:h,...n.axis?.y||{}}},barGroup:{padding:ne(t?D:w)},tooltip:{labelFormatter:F||b}}},[a,n,t])}var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N=m=>m?.length?m.some(n=>n.data.some(a=>a.value===null||a.value===void 0||isNaN(a.value)||!a.label&&(!a.date||isNaN(a.date.getTime()))))?"Invalid data":null:"No data available",K=(m,t)=>`bar-pattern-${m}-${t}`,X=({data:m,width:t,height:n=400,className:a,margin:r,withTooltips:p=!1,showLegend:h=!1,legendOrientation:b="horizontal",legendAlignmentHorizontal:A="center",legendAlignmentVertical:O="bottom",legendShape:x="rect",gridVisibility:U,renderTooltip:H,options:w={},orientation:D="vertical",withPatterns:F=!1})=>{const E=D==="horizontal",z=(0,d.useId)(),Z=(0,_.Ox)(m),M=ae(m,E,w),se=(0,o.a)(n,M,m,Z,E),[ue,oe]=(0,I.v)(),te=(0,d.useCallback)((v,P)=>v?.options?.stroke||Z.colors[P%Z.colors.length],[Z]),me=(0,d.useCallback)(v=>()=>F?`url(#${K(z,v)})`:te(m[v],v),[F,te,m,z]),pe=(0,d.useCallback)(({tooltipData:v})=>{const P=v?.nearestDatum?.datum;return P?(0,u.jsxs)("div",{className:R["bar-chart__tooltip"],children:[(0,u.jsx)("div",{className:R["bar-chart__tooltip-header"],children:v?.nearestDatum?.key}),(0,u.jsxs)("div",{className:R["bar-chart__tooltip-row"],children:[(0,u.jsxs)("span",{className:R["bar-chart__tooltip-label"],children:[M.tooltip.labelFormatter(P.label||P.date.getTime(),0,[]),":"]}),(0,u.jsx)("span",{className:R["bar-chart__tooltip-value"],children:P.value})]})]}):null},[M.tooltip]),he=(0,d.useCallback)((v,P)=>{const de=v%4,ce=K(z,v),re={id:ce,key:ce,stroke:"white",strokeWidth:1,background:P};switch(de){case 0:default:return(0,u.jsx)(S.A,{...re,width:5,height:5,orientation:["diagonal"]});case 1:return(0,u.jsx)(y.A,{...re,width:6,height:6,fill:"white"});case 2:return(0,u.jsx)(C.A,{...re,width:4,height:4});case 3:return(0,u.jsx)(V.A,{...re,size:8,height:3})}},[z]),fe=(0,d.useCallback)((v,P)=>`
			.visx-bar[fill="url(#${K(z,v)})"] {
				stroke: ${P};
				stroke-width: 1;
				}
			`,[z]),le=N(m);if(le)return(0,u.jsx)("div",{className:(0,T.A)("bar-chart",R["bar-chart"]),children:le});const ge=m.map((v,P)=>({label:v.label,value:"",color:te(v,P),shapeStyle:v?.options?.legendShapeStyle})),ie=U??M.gridVisibility;return(0,u.jsxs)("div",{className:(0,T.A)("bar-chart",R["bar-chart"],a),"data-testid":"bar-chart",role:"img","aria-label":"bar chart",style:{width:t,height:n,position:"relative"},children:[(0,u.jsxs)(g.A,{theme:Z,width:t,height:n-(h?oe:0),margin:{...se,...r,...h&&O==="top"?{top:(se.top||0)+oe}:{}},xScale:M.xScale,yScale:M.yScale,horizontal:E,pointerEventsDataKey:"nearest",children:[(0,u.jsx)(i.A,{columns:ie.includes("y"),rows:ie.includes("x"),numTicks:4}),F&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("defs",{"data-testid":"bar-chart-patterns",children:m.map((v,P)=>he(P,te(v,P)))}),(0,u.jsx)("style",{children:m.map((v,P)=>fe(P,te(v,P)))})]}),(0,u.jsx)(L.A,{padding:M.barGroup.padding,children:m.map((v,P)=>(0,u.jsx)(l.A,{dataKey:v?.label,data:v.data,yAccessor:M.accessors.yAccessor,xAccessor:M.accessors.xAccessor,colorAccessor:me(P)},v?.label))}),(0,u.jsx)(s.A,{...M.axis.x}),(0,u.jsx)(s.A,{...M.axis.y}),p&&(0,u.jsx)(f.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:H||pe})]}),h&&(0,u.jsx)(G.$,{items:ge,orientation:b,alignmentHorizontal:A,alignmentVertical:O,className:R["bar-chart__legend"],shape:x,ref:ue})]})},J=(0,B.F)(X);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../charts/src/components/legend/base-legend.tsx":(Y,j,e)=>{e.d(j,{$:()=>$});var S=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),C=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),V=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),g=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),i=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),L=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/theme/theme-provider.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(f),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),_={};_.insert="head",_.singleton=!1;var G=T()(d.A,_);const o=d.A.locals||{};function I(c){return c&&typeof c=="object"&&"value"in c&&typeof c.value<"u"?c.value:c}function B(c){return String(I(c))}function q({scale:c,labelFormat:R}){return(k,Q)=>({datum:k,index:Q,text:`${R(k,Q)}`,value:c(k)})}var W=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ee={horizontal:"row",vertical:"column"},$=(0,l.forwardRef)(({items:c,className:R,orientation:k="horizontal",alignmentHorizontal:Q="center",alignmentVertical:ne="bottom",shape:ae="rect",fill:u=B,size:N=B,labelFormat:K=I,labelTransform:X=q,shapeWidth:J=16,shapeHeight:m=16,shapeMargin:t="2px 4px 2px 0",labelAlign:n="left",labelFlex:a="1",labelMargin:r="0 4px",itemMargin:p="0",itemDirection:h="row",legendLabelProps:b,...A},O)=>{const x=(0,s.RW)(),U=(0,i.A)({domain:c.map(D=>D.label),range:c.map(D=>D.color)}),H=U.domain(),w=(0,l.useCallback)(({index:D})=>c[D]?.shapeStyle??x.legendShapeStyles?.[D]??{},[c,x]);return(0,W.jsx)(y.A,{scale:U,labelFormat:K,labelTransform:X,children:D=>(0,W.jsx)("div",{ref:O,role:"list","data-testid":`legend-${k}`,className:(0,L.A)(o.legend,o[`legend--${k}`],o[`legend--horizontal-align-${Q}`],o[`legend--vertical-align-${ne}`],R),style:{flexDirection:ee[k],...x.legendContainerStyles},children:D.map((F,E)=>(0,W.jsxs)(C.A,{className:o["legend-item"],"data-testid":"legend-item",margin:p,flexDirection:h,...A,children:[c[E]?.renderGlyph?(0,W.jsx)("svg",{width:c[E]?.glyphSize*2,height:c[E]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,W.jsx)(S.A,{children:c[E]?.renderGlyph({key:`legend-glyph-${F.text}`,datum:{},index:E,color:u(F),size:c[E]?.glyphSize,x:c[E]?.glyphSize,y:c[E]?.glyphSize})})}):(0,W.jsx)(V.A,{shape:ae,height:m,width:J,margin:t,item:H[E],itemIndex:E,label:F,fill:u,size:N,shapeStyle:w}),(0,W.jsxs)(g.A,{style:{justifyContent:n,flex:a,margin:r,...x.legendLabelStyles},...b,children:[F.text,c.find(z=>z.label===F.text)?.value&&(0,W.jsx)("span",{className:o["legend-item-value"],children:c.find(z=>z.label===F.text)?.value})]})]},`legend-${F.text}-${E}`))})})});try{$.displayName="BaseLegend",$.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignmentHorizontal:{defaultValue:{value:"center"},description:"",name:"alignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},alignmentVertical:{defaultValue:{value:"bottom"},description:"",name:"alignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:$.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/shared/use-chart-margin.tsx":(Y,j,e)=>{e.d(j,{a:()=>i});var S=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),y=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),V=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const g=(L,l,s)=>{const f=L.map(d=>l(d,0,[])),T=f.reduce((d,_)=>d.length>=_.length?d:_,f[0]);return(0,V.A)(T,s)},i=(L,l,s,f,T=!1)=>{const d=(0,C.useMemo)(()=>{const _=s.flatMap(B=>B.data);if(T)return _.map(B=>B.label||l.axis?.y?.tickFormat(B.date.getTime(),0,[]));const G=Math.min(..._.map(B=>B.value)),o=Math.max(..._.map(B=>B.value)),I=(0,S.A)({...l.yScale,domain:[G,o],range:[L,0]});return(0,y.A)(I,l.axis?.y?.numTicks)},[l,s,L,T]);return(0,C.useMemo)(()=>{const _={top:10,right:20,bottom:20,left:20},G=40,o=l.axis?.y?.orientation,I=o==="right"?f.axisStyles.y.right:f.axisStyles.y.left,q=(g(d,l.axis?.y?.tickFormat,I.axisLabel)??G)+(I?.tickLength??0);return o==="right"?_.right=q:_.left=q,l.axis?.x?.orientation==="top"&&(_.top=20,_.bottom=10),_},[l,f,d])}},"../charts/src/components/shared/use-element-height.ts":(Y,j,e)=>{e.d(j,{v:()=>y});var S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function y({initialHeight:C=0}={}){const[V,g]=(0,S.useState)(C),i=(0,S.useRef)(null);return[(0,S.useCallback)(l=>{if(i.current&&(i.current.disconnect(),i.current=null),l){const s=()=>{g(l.getBoundingClientRect().height||0)};s();const f=new window.ResizeObserver(s);f.observe(l),i.current=f}},[]),V]}},"../charts/src/components/shared/with-responsive.tsx":(Y,j,e)=>{e.d(j,{F:()=>g});var S=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C={width:600,height:400},V=({resizeDebounceTime:i=300,maxWidth:L=1200,aspectRatio:l=.5})=>{const{parentRef:s,width:f}=(0,S.A)({debounceTime:i,enableDebounceLeadingCall:!0,initialSize:C}),T=f?Math.min(f,L):C.width,d=T*l;return{parentRef:s,width:T,height:d}};function g(i){return function({resizeDebounceTime:l=300,maxWidth:s=1200,aspectRatio:f=.5,...T}){const{parentRef:d,width:_,height:G}=V({resizeDebounceTime:l,maxWidth:s,aspectRatio:f});return(0,y.jsx)("div",{ref:d,style:{width:"100%"},children:(0,y.jsx)(i,{width:_,height:G,size:_,...T})})}}try{g.displayName="withResponsive",g.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:g.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(Y,j,e)=>{e.d(j,{NP:()=>l,Ox:()=>L,RW:()=>i});var S=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../charts/src/providers/theme/themes.ts"),V=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=(0,y.createContext)(C.zQ),i=()=>(0,y.useContext)(g),L=s=>{const f=i();return(0,y.useMemo)(()=>{const T=(s??[]).map(d=>d.options?.stroke).filter(d=>!!d);return(0,S.A)({...f,colors:[...T,...f.colors??[]]})},[f,s])},l=({theme:s={},children:f})=>{const T={...C.zQ,...s};return(0,V.jsx)(g.Provider,{value:T,children:f})};try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:l.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{i.displayName="useChartTheme",i.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:i.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{L.displayName="useXYChartTheme",L.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:L.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(Y,j,e)=>{e.d(j,{QI:()=>y,pk:()=>C,zQ:()=>S});const S={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},y={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},C={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Y,j,e)=>{e.d(j,{A:()=>i});var S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(S),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),V=e.n(C),g=V()(y());g.push([Y.id,".ntOQdGFaV5IXyaLCFF_r{position:relative}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),g.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const i=g},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(Y,j,e)=>{e.d(j,{A:()=>i});var S=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(S),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),V=e.n(C),g=V()(y());g.push([Y.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.MYFewOP21Y4GVm663D6z{position:absolute;top:0;z-index:10}.MYFewOP21Y4GVm663D6z.Sla7_x8BgBrFt0ij9Wti{left:0}.MYFewOP21Y4GVm663D6z.UW_XpeIz_5GpmlfPHgO7{left:50%;transform:translateX(-50%)}.MYFewOP21Y4GVm663D6z.z_v3d3imptbDEps1ycxC{right:0}.soJYpRSvEDNrcSctfKPg{position:relative}.soJYpRSvEDNrcSctfKPg.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.soJYpRSvEDNrcSctfKPg.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.soJYpRSvEDNrcSctfKPg.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),g.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend--vertical-align-top":"MYFewOP21Y4GVm663D6z","legend--horizontal-align-left":"Sla7_x8BgBrFt0ij9Wti","legend--horizontal-align-center":"UW_XpeIz_5GpmlfPHgO7","legend--horizontal-align-right":"z_v3d3imptbDEps1ycxC","legend--vertical-align-bottom":"soJYpRSvEDNrcSctfKPg","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const i=g}}]);
