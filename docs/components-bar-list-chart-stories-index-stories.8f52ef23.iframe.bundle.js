(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(D,p,t)=>{"use strict";t.r(p),t.d(p,{CustomLabelComponent:()=>M,CustomValueComponent:()=>q,Default:()=>m,MultiSeries:()=>H,__namedExportsOrder:()=>le,default:()=>se});var C=t("../number-formatters/src/index.ts"),F=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),B=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),e=t.n(B),_=["className","innerRef"];function g(){return g=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},g.apply(this,arguments)}function v(n,s){if(n==null)return{};var l={},o=Object.keys(n),f,S;for(S=0;S<o.length;S++)f=o[S],!(s.indexOf(f)>=0)&&(l[f]=n[f]);return l}function i(n){var s=n.className,l=n.innerRef,o=v(n,_);return F.createElement("circle",g({ref:l,className:e()("visx-circle",s)},o))}var r=t("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),u=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),b=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),a=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),d=t("../charts/src/components/bar-chart/bar-chart.tsx"),y=t("../charts/src/components/shared/with-responsive.tsx"),c=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=n=>{const s=n;return s&&"bandwidth"in s?s?.bandwidth()??0:0},A=({textProps:n,x:s,y:l,label:o,formatter:f})=>(0,c.jsx)(r.A,{...n,textAnchor:"start",x:s,y:l,children:f(o)}),w=({textProps:n,x:s,y:l,value:o,formatter:f})=>(0,c.jsx)(r.A,{...n,textAnchor:"end",x:s,y:l,fontWeight:500,children:f(o)}),z=({ticks:n,tickLabelProps:s,yOffset:l,labelPosition:o,valuePosition:f,data:S,labelFormatter:h,valueFormatter:P,LabelComponent:O=A,ValueComponent:T=w})=>{if(n.length===0)return null;const L=n.map(({value:R,index:I})=>typeof s=="function"?s(R,I,n):{});return n.map(({from:R,formattedValue:I},k)=>{const $=L[k]??{};delete $.textAnchor,delete $.dx;const X=S.reduce((K,{data:Y})=>K+(Y[k]?.value??0),0),Q=R.y+l;return(0,c.jsxs)(u.A,{children:[(0,c.jsx)(O,{textProps:$,x:o,y:Q,label:I,formatter:h}),(0,c.jsx)(T,{textProps:$,x:f,y:Q,value:X,formatter:P,data:S,index:k})]},k)})},G=(n,s,l,o)=>{if(!o)return 0;const f=n.map(({label:T})=>T),S=(0,b.A)({type:"band",range:[0,l],domain:f,...s}),h=(0,a.A)({domain:f,range:[0,E(S)],padding:s.paddingInner});return-(E(h)+6)},J=({data:n,width:s,height:l,options:o={},margin:f={left:0,right:20,bottom:0,top:0},...S})=>{const h=(0,F.useMemo)(()=>{const P=n.length>1,O={paddingInner:P?.3:.1,padding:P?.3:.1},T={zero:!0},L={...O,...o.yScale??{}},R={...T,...o.xScale??{}};return{yScale:L,xScale:R,labelPosition:o.labelPosition??(P?0:10),valueFormatter:o.valueFormatter??(I=>(0,C.qe)(I)),labelFormatter:o.labelFormatter??(I=>String(I)),valuePosition:o.valuePosition??s,yOffset:o.yOffset??G(n,L,l,P)}},[o,s,n,l]);return(0,c.jsx)(d.A,{orientation:"horizontal",gridVisibility:"none",data:n,width:s,height:l,margin:f,options:{axis:{y:{children:P=>(0,c.jsx)(z,{...P,data:n,yOffset:h.yOffset,labelPosition:h.labelPosition,valuePosition:h.valuePosition,labelFormatter:h.labelFormatter,valueFormatter:h.valueFormatter,LabelComponent:o.labelComponent,ValueComponent:o.valueComponent})},x:{children:()=>null}},xScale:h.xScale,yScale:h.yScale},...S})},W=(0,y.F)(J);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:null,description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:null,description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const ne=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],V=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var ae=`import { formatNumberCompact } from '@automattic/number-formatters';
import { Circle } from '@visx/shape';
import { Text } from '@visx/text';
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
`,Z={Default:{startLoc:{col:23,line:28},endLoc:{col:1,line:33},startBody:{col:23,line:28},endBody:{col:1,line:33}},MultiSeries:{startLoc:{col:27,line:34},endLoc:{col:1,line:39},startBody:{col:27,line:34},endBody:{col:1,line:39}},CustomLabelComponent:{startLoc:{col:36,line:40},endLoc:{col:1,line:76},startBody:{col:36,line:40},endBody:{col:1,line:76}},CustomValueComponent:{startLoc:{col:36,line:77},endLoc:{col:1,line:125},startBody:{col:36,line:77},endBody:{col:1,line:125}}};const se={title:"JS Packages/Charts/Types/Bar List Chart",component:W,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
import { Circle } from '@visx/shape';
import { Text } from '@visx/text';
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
};`,locationsMap:{default:{startLoc:{col:23,line:28},endLoc:{col:1,line:33},startBody:{col:23,line:28},endBody:{col:1,line:33}},"multi-series":{startLoc:{col:27,line:34},endLoc:{col:1,line:39},startBody:{col:27,line:34},endBody:{col:1,line:39}},"custom-label-component":{startLoc:{col:36,line:40},endLoc:{col:1,line:76},startBody:{col:36,line:40},endBody:{col:1,line:76}},"custom-value-component":{startLoc:{col:36,line:77},endLoc:{col:1,line:125},startBody:{col:36,line:77},endBody:{col:1,line:125}}}},layout:"centered"},decorators:[n=>(0,c.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,c.jsx)(n,{})})]},m={args:{withTooltips:!0,data:V}},H={args:{...m.args,data:ne}},M={args:{...m.args,data:V,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:n,x:s,y:l,label:o,formatter:f})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{cx:s+6,cy:l,r:8}),(0,c.jsx)(r.A,{...n,textAnchor:"start",x:s+24,y:l,fontWeight:500,children:f(o)})]})}}},q={args:{...m.args,data:ne,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:n,x:s,y:l,value:o,formatter:f,data:S,index:h})=>{const P=S[0].data[h].value,O=S[1].data[h].value,T=O===0?0:((P-O)/O*100).toFixed(0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{...n,textAnchor:"end",x:s,y:l,dx:-50,fontWeight:500,children:f(o)}),(0,c.jsx)(r.A,{...n,textAnchor:"end",x:s,y:l,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(T)>0?"+":""}${T}%`})]})},valueFormatter:n=>`$${(0,C.qe)(n)}`}}},le=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...m.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...H.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(D,p,t)=>{"use strict";t.d(p,{A:()=>le});var C=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),F=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),B=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),e=t("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),_=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),g=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),v=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),i=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),r=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),u=t("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),b=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../charts/src/providers/theme/theme-provider.tsx"),y=t("../charts/src/components/legend/base-legend.tsx"),c=t("../charts/src/components/shared/use-chart-data-transform.ts"),E=t("../charts/src/components/shared/use-chart-margin.tsx"),A=t("../charts/src/components/shared/use-element-height.ts"),w=t("../charts/src/components/shared/with-responsive.tsx"),z=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=t.n(z),J=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),W={};W.insert="head",W.singleton=!1;var ne=G()(J.A,W);const V=J.A.locals||{};var ae=t("../number-formatters/src/index.ts");const Z=n=>new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric"}),re=n=>typeof n.paddingInner=="number"?n.paddingInner:0;function se(n,s,l={}){const o=(0,a.useMemo)(()=>{const f={type:"band",padding:.2,paddingInner:.1},S={type:"linear",nice:!0,zero:!1},h=n?.[0]?.data?.[0]?.label?L=>L:Z,P=ae.qe,O=L=>L?.label||L?.date,T=L=>L?.value;return{vertical:{xTickFormat:h,yTickFormat:P,tooltipLabelFormatter:h,xAccessor:O,yAccessor:T,gridVisibility:"x",xScale:f,yScale:S},horizontal:{xTickFormat:P,yTickFormat:h,tooltipLabelFormatter:h,xAccessor:T,yAccessor:O,gridVisibility:"y",xScale:S,yScale:f}}},[n]);return(0,a.useMemo)(()=>{const f=s?"horizontal":"vertical",{xTickFormat:S,yTickFormat:h,tooltipLabelFormatter:P,xAccessor:O,yAccessor:T,gridVisibility:L,xScale:R,yScale:I}=o[f],k={...R,...l.xScale||{}},$={...I,...l.yScale||{}},X=s?l.axis?.y?.tickFormat:l.axis?.x?.tickFormat;return{gridVisibility:L,xScale:k,yScale:$,accessors:{xAccessor:O,yAccessor:T},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:S,...l.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:h,...l.axis?.y||{}}},barGroup:{padding:re(s?$:k)},tooltip:{labelFormatter:X||P}}},[o,l,s])}var m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const H=n=>n?.length?n.some(l=>l.data.some(o=>isNaN(o.value)||o.value===null||o.value===void 0||!o.label&&(!("date"in o&&o.date)||isNaN(o.date.getTime()))))?"Invalid data":null:"No data available",M=(n,s)=>`bar-pattern-${n}-${s}`,q=({data:n,width:s,height:l=400,className:o,margin:f,withTooltips:S=!1,showLegend:h=!1,legendOrientation:P="horizontal",legendAlignmentHorizontal:O="center",legendAlignmentVertical:T="bottom",legendShape:L="rect",gridVisibility:R,renderTooltip:I,options:k={},orientation:$="vertical",withPatterns:X=!1})=>{const Q=$==="horizontal",K=(0,a.useId)(),Y=(0,d.Ox)(n),U=(0,c.E)(n),N=se(U,Q,k),ie=(0,E.a)(l,N,U,Y,Q),[pe,ce]=(0,A.v)(),ee=(0,a.useCallback)((x,j)=>x?.options?.stroke||Y.colors[j%Y.colors.length],[Y]),fe=(0,a.useCallback)(x=>()=>X?`url(#${M(K,x)})`:ee(U[x],x),[X,ee,U,K]),he=(0,a.useCallback)(({tooltipData:x})=>{const j=x?.nearestDatum?.datum;return j?(0,m.jsxs)("div",{className:V["bar-chart__tooltip"],children:[(0,m.jsx)("div",{className:V["bar-chart__tooltip-header"],children:x?.nearestDatum?.key}),(0,m.jsxs)("div",{className:V["bar-chart__tooltip-row"],children:[(0,m.jsxs)("span",{className:V["bar-chart__tooltip-label"],children:[N.tooltip.labelFormatter(j.label||(j.date?j.date.getTime():0),0,[]),":"]}),(0,m.jsx)("span",{className:V["bar-chart__tooltip-value"],children:j.value})]})]}):null},[N.tooltip]),xe=(0,a.useCallback)((x,j)=>{const me=x%4,te=M(K,x),oe={id:te,stroke:"white",strokeWidth:1,background:j};switch(me){case 0:default:return(0,m.jsx)(C.A,{...oe,width:5,height:5,orientation:["diagonal"]},te);case 1:return(0,m.jsx)(F.A,{...oe,width:6,height:6,fill:"white"},te);case 2:return(0,m.jsx)(B.A,{...oe,width:4,height:4},te);case 3:return(0,m.jsx)(e.A,{...oe,size:8,height:3},te)}},[K]),ve=(0,a.useCallback)((x,j)=>`
			.visx-bar[fill="url(#${M(K,x)})"] {
				stroke: ${j};
				stroke-width: 1;
				}
			`,[K]),de=H(U);if(de)return(0,m.jsx)("div",{className:(0,b.A)("bar-chart",V["bar-chart"]),children:de});const ye=U.map((x,j)=>({label:x.label,value:"",color:ee(x,j),shapeStyle:x?.options?.legendShapeStyle})),ue=R??N.gridVisibility;return(0,m.jsxs)("div",{className:(0,b.A)("bar-chart",V["bar-chart"],o),"data-testid":"bar-chart",role:"img","aria-label":"bar chart",style:{width:s,height:l,display:"flex",flexDirection:h&&T==="top"?"column-reverse":"column"},children:[(0,m.jsxs)(_.A,{theme:Y,width:s,height:l-(h?ce:0),margin:{...ie,...f,...h&&T==="top"?{top:(ie.top||0)+ce}:{}},xScale:N.xScale,yScale:N.yScale,horizontal:Q,pointerEventsDataKey:"nearest",children:[(0,m.jsx)(g.A,{columns:ue.includes("y"),rows:ue.includes("x"),numTicks:4}),X&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("defs",{"data-testid":"bar-chart-patterns",children:U.map((x,j)=>xe(j,ee(x,j)))}),(0,m.jsx)("style",{children:U.map((x,j)=>ve(j,ee(x,j)))})]}),(0,m.jsx)(v.A,{padding:N.barGroup.padding,children:U.map((x,j)=>(0,m.jsx)(i.A,{dataKey:x?.label,data:x.data,yAccessor:N.accessors.yAccessor,xAccessor:N.accessors.xAccessor,colorAccessor:fe(j)},x?.label))}),(0,m.jsx)(r.A,{...N.axis.x}),(0,m.jsx)(r.A,{...N.axis.y}),S&&(0,m.jsx)(u.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:I||he})]}),h&&(0,m.jsx)(y.$,{items:ye,orientation:P,alignmentHorizontal:O,alignmentVertical:T,className:V["bar-chart__legend"],shape:L,ref:pe})]})},le=(0,w.F)(q);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendAlignmentHorizontal:{defaultValue:{value:"center"},description:"Legend horizontal alignment",name:"legendAlignmentHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},legendAlignmentVertical:{defaultValue:{value:"bottom"},description:"Legend vertical alignment",name:"legendAlignmentVertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(D,p,t)=>{"use strict";t.d(p,{A:()=>B});function C(e){var _,g,v="";if(typeof e=="string"||typeof e=="number")v+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(_=0;_<i;_++)e[_]&&(g=C(e[_]))&&(v&&(v+=" "),v+=g)}else for(g in e)e[g]&&(v&&(v+=" "),v+=g);return v}function F(){for(var e,_,g=0,v="",i=arguments.length;g<i;g++)(e=arguments[g])&&(_=C(e))&&(v&&(v+=" "),v+=_);return v}const B=F},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(D,p,t)=>{"use strict";t.d(p,{A:()=>g});var C=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),F=t.n(C),B=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=t.n(B),_=e()(F());_.push([D.id,".ntOQdGFaV5IXyaLCFF_r{display:flex;flex-direction:column}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),_.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const g=_},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js":(D,p,t)=>{var C=t("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");p.formatArgs=B,p.save=e,p.load=_,p.useColors=F,p.storage=g(),p.destroy=(()=>{let i=!1;return()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),p.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function F(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let i;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(i=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(i[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function B(i){if(i[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+i[0]+(this.useColors?"%c ":" ")+"+"+D.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;i.splice(1,0,r,"color: inherit");let u=0,b=0;i[0].replace(/%[a-zA-Z%]/g,a=>{a!=="%%"&&(u++,a==="%c"&&(b=u))}),i.splice(b,0,r)}p.log=console.debug||console.log||(()=>{});function e(i){try{i?p.storage.setItem("debug",i):p.storage.removeItem("debug")}catch{}}function _(){let i;try{i=p.storage.getItem("debug")||p.storage.getItem("DEBUG")}catch{}return!i&&typeof C<"u"&&"env"in C&&(i=C.env.DEBUG),i}function g(){try{return localStorage}catch{}}D.exports=t("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js")(p);const{formatters:v}=D.exports;v.j=function(i){try{return JSON.stringify(i)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/common.js":(D,p,t)=>{function C(F){e.debug=e,e.default=e,e.coerce=u,e.disable=i,e.enable=g,e.enabled=r,e.humanize=t("../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"),e.destroy=b,Object.keys(F).forEach(a=>{e[a]=F[a]}),e.names=[],e.skips=[],e.formatters={};function B(a){let d=0;for(let y=0;y<a.length;y++)d=(d<<5)-d+a.charCodeAt(y),d|=0;return e.colors[Math.abs(d)%e.colors.length]}e.selectColor=B;function e(a){let d,y=null,c,E;function A(...w){if(!A.enabled)return;const z=A,G=Number(new Date),J=G-(d||G);z.diff=J,z.prev=d,z.curr=G,d=G,w[0]=e.coerce(w[0]),typeof w[0]!="string"&&w.unshift("%O");let W=0;w[0]=w[0].replace(/%([a-zA-Z%])/g,(V,ae)=>{if(V==="%%")return"%";W++;const Z=e.formatters[ae];if(typeof Z=="function"){const re=w[W];V=Z.call(z,re),w.splice(W,1),W--}return V}),e.formatArgs.call(z,w),(z.log||e.log).apply(z,w)}return A.namespace=a,A.useColors=e.useColors(),A.color=e.selectColor(a),A.extend=_,A.destroy=e.destroy,Object.defineProperty(A,"enabled",{enumerable:!0,configurable:!1,get:()=>y!==null?y:(c!==e.namespaces&&(c=e.namespaces,E=e.enabled(a)),E),set:w=>{y=w}}),typeof e.init=="function"&&e.init(A),A}function _(a,d){const y=e(this.namespace+(typeof d>"u"?":":d)+a);return y.log=this.log,y}function g(a){e.save(a),e.namespaces=a,e.names=[],e.skips=[];const d=(typeof a=="string"?a:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const y of d)y[0]==="-"?e.skips.push(y.slice(1)):e.names.push(y)}function v(a,d){let y=0,c=0,E=-1,A=0;for(;y<a.length;)if(c<d.length&&(d[c]===a[y]||d[c]==="*"))d[c]==="*"?(E=c,A=y,c++):(y++,c++);else if(E!==-1)c=E+1,A++,y=A;else return!1;for(;c<d.length&&d[c]==="*";)c++;return c===d.length}function i(){const a=[...e.names,...e.skips.map(d=>"-"+d)].join(",");return e.enable(""),a}function r(a){for(const d of e.skips)if(v(a,d))return!1;for(const d of e.names)if(v(a,d))return!0;return!1}function u(a){return a instanceof Error?a.stack||a.message:a}function b(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}D.exports=C},"../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":D=>{var p=1e3,t=p*60,C=t*60,F=C*24,B=F*7,e=F*365.25;D.exports=function(r,u){u=u||{};var b=typeof r;if(b==="string"&&r.length>0)return _(r);if(b==="number"&&isFinite(r))return u.long?v(r):g(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function _(r){if(r=String(r),!(r.length>100)){var u=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(u){var b=parseFloat(u[1]),a=(u[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return b*e;case"weeks":case"week":case"w":return b*B;case"days":case"day":case"d":return b*F;case"hours":case"hour":case"hrs":case"hr":case"h":return b*C;case"minutes":case"minute":case"mins":case"min":case"m":return b*t;case"seconds":case"second":case"secs":case"sec":case"s":return b*p;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return b;default:return}}}}function g(r){var u=Math.abs(r);return u>=F?Math.round(r/F)+"d":u>=C?Math.round(r/C)+"h":u>=t?Math.round(r/t)+"m":u>=p?Math.round(r/p)+"s":r+"ms"}function v(r){var u=Math.abs(r);return u>=F?i(r,u,F,"day"):u>=C?i(r,u,C,"hour"):u>=t?i(r,u,t,"minute"):u>=p?i(r,u,p,"second"):r+" ms"}function i(r,u,b,a){var d=u>=b*1.5;return Math.round(r/b)+" "+a+(d?"s":"")}}}]);
