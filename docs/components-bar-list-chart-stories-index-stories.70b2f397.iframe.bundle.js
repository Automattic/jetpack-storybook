"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(Y,j,e)=>{e.r(j),e.d(j,{CustomLabelComponent:()=>$,CustomValueComponent:()=>X,Default:()=>N,MultiSeries:()=>K,__namedExportsOrder:()=>u,default:()=>c});var b=e("../number-formatters/src/index.ts"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=e.n(C),f=["className","innerRef"];function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},p.apply(this,arguments)}function A(t,n){if(t==null)return{};var a={},r=Object.keys(t),m,g;for(g=0;g<r.length;g++)m=r[g],!(n.indexOf(m)>=0)&&(a[m]=t[m]);return a}function l(t){var n=t.className,a=t.innerRef,r=A(t,f);return y.createElement("circle",p({ref:a,className:T()("visx-circle",n)},r))}var s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),O=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),i=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),S=e("../charts/src/components/bar-chart/bar-chart.tsx"),J=e("../charts/src/components/shared/with-responsive.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const W=t=>{const n=t;return n&&"bandwidth"in n?n?.bandwidth()??0:0},B=({textProps:t,x:n,y:a,label:r,formatter:m})=>(0,o.jsx)(s.A,{...t,textAnchor:"start",x:n,y:a,children:m(r)}),q=({textProps:t,x:n,y:a,value:r,formatter:m})=>(0,o.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,fontWeight:500,children:m(r)}),I=({ticks:t,tickLabelProps:n,yOffset:a,labelPosition:r,valuePosition:m,data:g,labelFormatter:_,valueFormatter:P,LabelComponent:D=B,ValueComponent:x=q})=>{if(t.length===0)return null;const U=t.map(({value:H,index:w})=>typeof n=="function"?n(H,w,t):{});return t.map(({from:H,formattedValue:w},F)=>{const V=U[F]??{};delete V.textAnchor,delete V.dx;const E=g.reduce((Z,{data:M})=>Z+(M[F]?.value??0),0),z=H.y+a;return(0,o.jsxs)(h.A,{children:[(0,o.jsx)(D,{textProps:V,x:r,y:z,label:w,formatter:_}),(0,o.jsx)(x,{textProps:V,x:m,y:z,value:E,formatter:P,data:g,index:F})]},F)})},ee=(t,n,a,r)=>{if(!r)return 0;const m=t.map(({label:x})=>x),g=(0,O.A)({type:"band",range:[0,a],domain:m,...n}),_=(0,i.A)({domain:m,range:[0,W(g)],padding:n.paddingInner});return-(W(_)+6)},G=({data:t,width:n,height:a,options:r={},margin:m={left:0,right:20,bottom:0,top:0},...g})=>{const _=(0,y.useMemo)(()=>{const P=t.length>1,D={paddingInner:P?.3:.1,padding:P?.3:.1},x={zero:!0},U={...D,...r.yScale??{}},H={...x,...r.xScale??{}};return{yScale:U,xScale:H,labelPosition:r.labelPosition??(P?0:10),valueFormatter:r.valueFormatter??(w=>(0,b.qe)(w)),labelFormatter:r.labelFormatter??(w=>String(w)),valuePosition:r.valuePosition??n,yOffset:r.yOffset??ee(t,U,a,P)}},[r,n,t,a]);return(0,o.jsx)(S.A,{orientation:"horizontal",gridVisibility:"none",data:t,width:n,height:a,margin:m,options:{axis:{y:{children:P=>(0,o.jsx)(I,{...P,data:t,yOffset:_.yOffset,labelPosition:_.labelPosition,valuePosition:_.valuePosition,labelFormatter:_.labelFormatter,valueFormatter:_.valueFormatter,LabelComponent:r.labelComponent,ValueComponent:r.valueComponent})},x:{children:()=>null}},xScale:_.xScale,yScale:_.yScale},...g})},d=(0,J.F)(G);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:null,description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:null,description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const R=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],k=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var Q=`import { formatNumberCompact } from '@automattic/number-formatters';
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
`,ne={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},CustomLabelComponent:{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},CustomValueComponent:{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}};const c={title:"JS Packages/Charts/Types/Bar List Chart",component:d,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
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
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:40},startBody:{col:27,line:35},endBody:{col:1,line:40}},"custom-label-component":{startLoc:{col:36,line:41},endLoc:{col:1,line:77},startBody:{col:36,line:41},endBody:{col:1,line:77}},"custom-value-component":{startLoc:{col:36,line:78},endLoc:{col:1,line:126},startBody:{col:36,line:78},endBody:{col:1,line:126}}}},layout:"centered"},decorators:[t=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(t,{})})]},N={args:{withTooltips:!0,data:k}},K={args:{...N.args,data:R}},$={args:{...N.args,data:k,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:t,x:n,y:a,label:r,formatter:m})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{cx:n+6,cy:a,r:8}),(0,o.jsx)(s.A,{...t,textAnchor:"start",x:n+24,y:a,fontWeight:500,children:m(r)})]})}}},X={args:{...N.args,data:R,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:t,x:n,y:a,value:r,formatter:m,data:g,index:_})=>{const P=g[0].data[_].value,D=g[1].data[_].value,x=D===0?0:((P-D)/D*100).toFixed(0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,dx:-50,fontWeight:500,children:m(r)}),(0,o.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(x)>0?"+":""}${x}%`})]})},valueFormatter:t=>`$${(0,b.qe)(t)}`}}},u=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...N.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...K.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(Y,j,e)=>{e.d(j,{A:()=>X});var b=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),y=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),T=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),p=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),A=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),O=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../charts/src/providers/theme/theme-provider.tsx"),J=e("../charts/src/components/legend/base-legend.tsx"),o=e("../charts/src/components/shared/use-chart-margin.tsx"),W=e("../charts/src/components/shared/use-element-height.ts"),B=e("../charts/src/components/shared/with-responsive.tsx"),q=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(q),ee=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),G={};G.insert="head",G.singleton=!1;var d=I()(ee.A,G);const R=ee.A.locals||{};var k=e("../number-formatters/src/index.ts");const Q=u=>new Date(u).toLocaleDateString(void 0,{month:"short",day:"numeric"}),ne=u=>typeof u.paddingInner=="number"?u.paddingInner:0;function ae(u,t,n={}){const a=(0,i.useMemo)(()=>{const r={type:"band",padding:.2,paddingInner:.1},m={type:"linear",nice:!0,zero:!1},g=u?.[0]?.data?.[0]?.label?x=>x:Q,_=k.qe,P=x=>x?.label||x?.date,D=x=>x?.value;return{vertical:{xTickFormat:g,yTickFormat:_,tooltipLabelFormatter:g,xAccessor:P,yAccessor:D,gridVisibility:"x",xScale:r,yScale:m},horizontal:{xTickFormat:_,yTickFormat:g,tooltipLabelFormatter:g,xAccessor:D,yAccessor:P,gridVisibility:"y",xScale:m,yScale:r}}},[u]);return(0,i.useMemo)(()=>{const r=t?"horizontal":"vertical",{xTickFormat:m,yTickFormat:g,tooltipLabelFormatter:_,xAccessor:P,yAccessor:D,gridVisibility:x,xScale:U,yScale:H}=a[r],w={...U,...n.xScale||{}},F={...H,...n.yScale||{}},V=t?n.axis?.y?.tickFormat:n.axis?.x?.tickFormat;return{gridVisibility:x,xScale:w,yScale:F,accessors:{xAccessor:P,yAccessor:D},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:m,...n.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:g,...n.axis?.y||{}}},barGroup:{padding:ne(t?F:w)},tooltip:{labelFormatter:V||_}}},[a,n,t])}var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N=u=>u?.length?u.some(n=>n.data.some(a=>a.value===null||a.value===void 0||isNaN(a.value)||!a.label&&(!a.date||isNaN(a.date.getTime()))))?"Invalid data":null:"No data available",K=(u,t)=>`bar-pattern-${u}-${t}`,$=({data:u,width:t,height:n=400,className:a,margin:r,withTooltips:m=!1,showLegend:g=!1,legendOrientation:_="horizontal",legendAlignmentHorizontal:P="center",legendAlignmentVertical:D="bottom",legendShape:x="rect",gridVisibility:U,renderTooltip:H,options:w={},orientation:F="vertical",withPatterns:V=!1})=>{const E=F==="horizontal",z=(0,i.useId)(),Z=(0,S.Ox)(u),M=ae(u,E,w),se=(0,o.a)(n,M,u,Z,E),[ue,oe]=(0,W.v)(),te=(0,i.useCallback)((v,L)=>v?.options?.stroke||Z.colors[L%Z.colors.length],[Z]),me=(0,i.useCallback)(v=>()=>V?`url(#${K(z,v)})`:te(u[v],v),[V,te,u,z]),pe=(0,i.useCallback)(({tooltipData:v})=>{const L=v?.nearestDatum?.datum;return L?(0,c.jsxs)("div",{className:R["bar-chart__tooltip"],children:[(0,c.jsx)("div",{className:R["bar-chart__tooltip-header"],children:v?.nearestDatum?.key}),(0,c.jsxs)("div",{className:R["bar-chart__tooltip-row"],children:[(0,c.jsxs)("span",{className:R["bar-chart__tooltip-label"],children:[M.tooltip.labelFormatter(L.label||L.date.getTime(),0,[]),":"]}),(0,c.jsx)("span",{className:R["bar-chart__tooltip-value"],children:L.value})]})]}):null},[M.tooltip]),he=(0,i.useCallback)((v,L)=>{const de=v%4,ce=K(z,v),re={id:ce,key:ce,stroke:"white",strokeWidth:1,background:L};switch(de){case 0:default:return(0,c.jsx)(b.A,{...re,width:5,height:5,orientation:["diagonal"]});case 1:return(0,c.jsx)(y.A,{...re,width:6,height:6,fill:"white"});case 2:return(0,c.jsx)(C.A,{...re,width:4,height:4});case 3:return(0,c.jsx)(T.A,{...re,size:8,height:3})}},[z]),ge=(0,i.useCallback)((v,L)=>`
			.visx-bar[fill="url(#${K(z,v)})"] {
				stroke: ${L};
				stroke-width: 1;
				}
			`,[z]),le=N(u);if(le)return(0,c.jsx)("div",{className:(0,O.A)("bar-chart",R["bar-chart"]),children:le});const fe=u.map((v,L)=>({label:v.label,value:"",color:te(v,L),shapeStyle:v?.options?.legendShapeStyle})),ie=U??M.gridVisibility;return(0,c.jsxs)("div",{className:(0,O.A)("bar-chart",R["bar-chart"],a),"data-testid":"bar-chart",role:"img","aria-label":"bar chart",style:{width:t,height:n,position:"relative"},children:[(0,c.jsxs)(f.A,{theme:Z,width:t,height:n-(g?oe:0),margin:{...se,...r,...g&&D==="top"?{top:(se.top||0)+oe}:{}},xScale:M.xScale,yScale:M.yScale,horizontal:E,pointerEventsDataKey:"nearest",children:[(0,c.jsx)(p.A,{columns:ie.includes("y"),rows:ie.includes("x"),numTicks:4}),V&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("defs",{"data-testid":"bar-chart-patterns",children:u.map((v,L)=>he(L,te(v,L)))}),(0,c.jsx)("style",{children:u.map((v,L)=>ge(L,te(v,L)))})]}),(0,c.jsx)(A.A,{padding:M.barGroup.padding,children:u.map((v,L)=>(0,c.jsx)(l.A,{dataKey:v?.label,data:v.data,yAccessor:M.accessors.yAccessor,xAccessor:M.accessors.xAccessor,colorAccessor:me(L)},v?.label))}),(0,c.jsx)(s.A,{...M.axis.x}),(0,c.jsx)(s.A,{...M.axis.y}),m&&(0,c.jsx)(h.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:H||pe})]}),g&&(0,c.jsx)(J.$,{items:fe,orientation:_,alignmentHorizontal:P,alignmentVertical:D,className:R["bar-chart__legend"],shape:x,ref:ue})]})},X=(0,B.F)($);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../charts/src/components/legend/base-legend.tsx":(Y,j,e)=>{e.d(j,{$:()=>G});var b=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),C=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),T=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),f=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),p=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),A=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/theme/theme-provider.tsx"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(h),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),S={};S.insert="head",S.singleton=!1;var J=O()(i.A,S);const o=i.A.locals||{};function W(d){return d&&typeof d=="object"&&"value"in d&&typeof d.value<"u"?d.value:d}function B(d){return String(W(d))}function q({scale:d,labelFormat:R}){return(k,Q)=>({datum:k,index:Q,text:`${R(k,Q)}`,value:d(k)})}var I=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ee={horizontal:"row",vertical:"column"},G=(0,l.forwardRef)(({items:d,className:R,orientation:k="horizontal",alignmentHorizontal:Q="center",alignmentVertical:ne="bottom",shape:ae="rect",fill:c=B,size:N=B,labelFormat:K=W,labelTransform:$=q,shapeWidth:X=16,shapeHeight:u=16,shapeMargin:t="2px 4px 2px 0",labelAlign:n="left",labelFlex:a="1",labelMargin:r="0 4px",itemMargin:m="0",itemDirection:g="row",legendLabelProps:_,...P},D)=>{const x=(0,s.RW)(),U=(0,p.A)({domain:d.map(F=>F.label),range:d.map(F=>F.color)}),H=U.domain(),w=(0,l.useCallback)(({index:F})=>d[F]?.shapeStyle??x.legendShapeStyles?.[F]??{},[d,x]);return(0,I.jsx)(y.A,{scale:U,labelFormat:K,labelTransform:$,children:F=>(0,I.jsx)("div",{ref:D,role:"list","data-testid":`legend-${k}`,className:(0,A.A)(o.legend,o[`legend--${k}`],o[`legend--horizontal-align-${Q}`],o[`legend--vertical-align-${ne}`],R),style:{flexDirection:ee[k],...x.legendContainerStyles},children:F.map((V,E)=>(0,I.jsxs)(C.A,{className:o["legend-item"],"data-testid":"legend-item",margin:m,flexDirection:g,...P,children:[d[E]?.renderGlyph?(0,I.jsx)("svg",{width:d[E]?.glyphSize*2,height:d[E]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,I.jsx)(b.A,{children:d[E]?.renderGlyph({key:`legend-glyph-${V.text}`,datum:{},index:E,color:c(V),size:d[E]?.glyphSize,x:d[E]?.glyphSize,y:d[E]?.glyphSize})})}):(0,I.jsx)(T.A,{shape:ae,height:u,width:X,margin:t,item:H[E],itemIndex:E,label:V,fill:c,size:N,shapeStyle:w}),(0,I.jsxs)(f.A,{style:{justifyContent:n,flex:a,margin:r,...x.legendLabelStyles},..._,children:[V.text,d.find(z=>z.label===V.text)?.value&&(0,I.jsx)("span",{className:o["legend-item-value"],children:d.find(z=>z.label===V.text)?.value})]})]},`legend-${V.text}-${E}`))})})});try{G.displayName="BaseLegend",G.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignmentHorizontal:{defaultValue:{value:"center"},description:"",name:"alignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},alignmentVertical:{defaultValue:{value:"bottom"},description:"",name:"alignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:G.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/shared/use-chart-margin.tsx":(Y,j,e)=>{e.d(j,{a:()=>p});var b=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),y=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const f=(A,l,s)=>{const h=A.map(i=>l(i,0,[])),O=h.reduce((i,S)=>i.length>=S.length?i:S,h[0]);return(0,T.A)(O,s)},p=(A,l,s,h,O=!1)=>{const i=(0,C.useMemo)(()=>{const S=s.flatMap(B=>B.data);if(O)return S.map(B=>B.label||l.axis?.y?.tickFormat(B.date.getTime(),0,[]));const J=Math.min(...S.map(B=>B.value)),o=Math.max(...S.map(B=>B.value)),W=(0,b.A)({...l.yScale,domain:[J,o],range:[A,0]});return(0,y.A)(W,l.axis?.y?.numTicks)},[l,s,A,O]);return(0,C.useMemo)(()=>{const S={top:10,right:20,bottom:20,left:20},J=40,o=l.axis?.y?.orientation,W=o==="right"?h.axisStyles.y.right:h.axisStyles.y.left,q=(f(i,l.axis?.y?.tickFormat,W.axisLabel)??J)+(W?.tickLength??0);return o==="right"?S.right=q:S.left=q,l.axis?.x?.orientation==="top"&&(S.top=20,S.bottom=10),S},[l,h,i])}},"../charts/src/components/shared/use-element-height.ts":(Y,j,e)=>{e.d(j,{v:()=>y});var b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function y({initialHeight:C=0}={}){const[T,f]=(0,b.useState)(C),p=(0,b.useRef)(null);return[(0,b.useCallback)(l=>{if(p.current&&(p.current.disconnect(),p.current=null),l){const s=()=>{f(l.getBoundingClientRect().height||0)};s();const h=new window.ResizeObserver(s);h.observe(l),p.current=h}},[]),T]}},"../charts/src/components/shared/with-responsive.tsx":(Y,j,e)=>{e.d(j,{F:()=>T});var b=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=({resizeDebounceTime:f=300,maxWidth:p=1200,aspectRatio:A=.5})=>{const{parentRef:l,width:s}=(0,b.A)({debounceTime:f,enableDebounceLeadingCall:!0}),h=s>0?Math.min(s,p):0,O=h*A;return{parentRef:l,width:h,height:O}};function T(f){return function({resizeDebounceTime:A=300,maxWidth:l=1200,aspectRatio:s=.5,...h}){const{parentRef:O,width:i,height:S}=C({resizeDebounceTime:A,maxWidth:l,aspectRatio:s});return(0,y.jsx)("div",{ref:O,style:{width:"100%",height:h.height??"auto"},children:(0,y.jsx)(f,{width:i,height:S,size:i,...h})})}}try{T.displayName="withResponsive",T.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:T.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(Y,j,e)=>{e.d(j,{NP:()=>l,Ox:()=>A,RW:()=>p});var b=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=e("../charts/src/providers/theme/themes.ts"),T=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=(0,y.createContext)(C.zQ),p=()=>(0,y.useContext)(f),A=s=>{const h=p();return(0,y.useMemo)(()=>{const O=(s??[]).map(i=>i.options?.stroke).filter(i=>!!i);return(0,b.A)({...h,colors:[...O,...h.colors??[]]})},[h,s])},l=({theme:s={},children:h})=>{const O={...C.zQ,...s};return(0,T.jsx)(f.Provider,{value:O,children:h})};try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:l.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{p.displayName="useChartTheme",p.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:p.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{A.displayName="useXYChartTheme",A.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:A.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(Y,j,e)=>{e.d(j,{QI:()=>y,pk:()=>C,zQ:()=>b});const b={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},y={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},C={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(Y,j,e)=>{e.d(j,{A:()=>p});var b=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(b),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),T=e.n(C),f=T()(y());f.push([Y.id,".ntOQdGFaV5IXyaLCFF_r{position:relative}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),f.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const p=f},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(Y,j,e)=>{e.d(j,{A:()=>p});var b=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(b),C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),T=e.n(C),f=T()(y());f.push([Y.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.MYFewOP21Y4GVm663D6z{position:absolute;top:0;z-index:10}.MYFewOP21Y4GVm663D6z.Sla7_x8BgBrFt0ij9Wti{left:0}.MYFewOP21Y4GVm663D6z.UW_XpeIz_5GpmlfPHgO7{left:50%;transform:translateX(-50%)}.MYFewOP21Y4GVm663D6z.z_v3d3imptbDEps1ycxC{right:0}.soJYpRSvEDNrcSctfKPg{position:relative}.soJYpRSvEDNrcSctfKPg.Sla7_x8BgBrFt0ij9Wti{justify-content:flex-start}.soJYpRSvEDNrcSctfKPg.UW_XpeIz_5GpmlfPHgO7{justify-content:center}.soJYpRSvEDNrcSctfKPg.z_v3d3imptbDEps1ycxC{justify-content:flex-end}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),f.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend--vertical-align-top":"MYFewOP21Y4GVm663D6z","legend--horizontal-align-left":"Sla7_x8BgBrFt0ij9Wti","legend--horizontal-align-center":"UW_XpeIz_5GpmlfPHgO7","legend--horizontal-align-right":"z_v3d3imptbDEps1ycxC","legend--vertical-align-bottom":"soJYpRSvEDNrcSctfKPg","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const p=f}}]);
