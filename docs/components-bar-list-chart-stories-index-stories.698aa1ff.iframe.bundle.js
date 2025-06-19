"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(N,L,e)=>{e.r(L),e.d(L,{CustomLabelComponent:()=>H,CustomValueComponent:()=>G,Default:()=>z,MultiSeries:()=>K,__namedExportsOrder:()=>u,default:()=>p});var C=e("../number-formatters/src/index.ts"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=e("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),B=e.n(T),f=["className","innerRef"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},l.apply(this,arguments)}function F(t,n){if(t==null)return{};var a={},r=Object.keys(t),m,x;for(x=0;x<r.length;x++)m=r[x],!(n.indexOf(m)>=0)&&(a[m]=t[m]);return a}function o(t){var n=t.className,a=t.innerRef,r=F(t,f);return v.createElement("circle",l({ref:a,className:B()("visx-circle",n)},r))}var s=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),h=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),P=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),i=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),y=e("../charts/src/components/bar-chart/bar-chart.tsx"),Y=e("../charts/src/components/shared/with-responsive.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I=t=>{const n=t;return n&&"bandwidth"in n?n?.bandwidth()??0:0},R=({textProps:t,x:n,y:a,label:r,formatter:m})=>(0,d.jsx)(s.A,{...t,textAnchor:"start",x:n,y:a,children:m(r)}),X=({textProps:t,x:n,y:a,value:r,formatter:m})=>(0,d.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,fontWeight:500,children:m(r)}),W=({ticks:t,tickLabelProps:n,yOffset:a,labelPosition:r,valuePosition:m,data:x,labelFormatter:_,valueFormatter:b,LabelComponent:D=R,ValueComponent:A=X})=>{if(t.length===0)return null;const $=t.map(({value:E,index:j})=>typeof n=="function"?n(E,j,t):{});return t.map(({from:E,formattedValue:j},S)=>{const V=$[S]??{};delete V.textAnchor,delete V.dx;const q=x.reduce((ae,{data:re})=>ae+(re[S]?.value??0),0),M=E.y+a;return(0,d.jsxs)(h.A,{children:[(0,d.jsx)(D,{textProps:V,x:r,y:M,label:j,formatter:_}),(0,d.jsx)(A,{textProps:V,x:m,y:M,value:q,formatter:b,data:x,index:S})]},S)})},Q=(t,n,a,r)=>{if(!r)return 0;const m=t.map(({label:A})=>A),x=(0,P.A)({type:"band",range:[0,a],domain:m,...n}),_=(0,i.A)({domain:m,range:[0,I(x)],padding:n.paddingInner});return-(I(_)+6)},U=({data:t,width:n,height:a,options:r={},margin:m={left:0,right:20,bottom:0,top:0},...x})=>{const _=(0,v.useMemo)(()=>{const b=t.length>1,D={paddingInner:b?.3:.1,padding:b?.3:.1},A={zero:!0},$={...D,...r.yScale??{}},E={...A,...r.xScale??{}};return{yScale:$,xScale:E,labelPosition:r.labelPosition??(b?0:10),valueFormatter:r.valueFormatter??(j=>(0,C.qe)(j)),labelFormatter:r.labelFormatter??(j=>String(j)),valuePosition:r.valuePosition??n,yOffset:r.yOffset??Q(t,$,a,b)}},[r,n,t,a]);return(0,d.jsx)(y.A,{orientation:"horizontal",gridVisibility:"none",data:t,width:n,height:a,margin:m,options:{axis:{y:{children:b=>(0,d.jsx)(W,{...b,data:t,yOffset:_.yOffset,labelPosition:_.labelPosition,valuePosition:_.valuePosition,labelFormatter:_.labelFormatter,valueFormatter:_.valueFormatter,LabelComponent:r.labelComponent,ValueComponent:r.valueComponent})},x:{children:()=>null}},xScale:_.xScale,yScale:_.yScale},...x})},c=(0,Y.F)(U);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const w=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],k=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var J=`import { formatNumberCompact } from '@automattic/number-formatters';
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
		showLegend: true,
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
		showLegend: true,
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
`,Z={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:41},startBody:{col:27,line:35},endBody:{col:1,line:41}},CustomLabelComponent:{startLoc:{col:36,line:42},endLoc:{col:1,line:78},startBody:{col:36,line:42},endBody:{col:1,line:78}},CustomValueComponent:{startLoc:{col:36,line:79},endLoc:{col:1,line:128},startBody:{col:36,line:79},endBody:{col:1,line:128}}};const p={title:"JS Packages/Charts/Types/Bar List Chart",component:c,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
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
    data: salesByChannel,
    showLegend: true
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
    showLegend: true,
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
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:41},startBody:{col:27,line:35},endBody:{col:1,line:41}},"custom-label-component":{startLoc:{col:36,line:42},endLoc:{col:1,line:78},startBody:{col:36,line:42},endBody:{col:1,line:78}},"custom-value-component":{startLoc:{col:36,line:79},endLoc:{col:1,line:128},startBody:{col:36,line:79},endBody:{col:1,line:128}}}},layout:"centered"},decorators:[t=>(0,d.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,d.jsx)(t,{})})]},z={args:{withTooltips:!0,data:k}},K={args:{...z.args,data:w,showLegend:!0}},H={args:{...z.args,data:k,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:t,x:n,y:a,label:r,formatter:m})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{cx:n+6,cy:a,r:8}),(0,d.jsx)(s.A,{...t,textAnchor:"start",x:n+24,y:a,fontWeight:500,children:m(r)})]})}}},G={args:{...z.args,data:w,showLegend:!0,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:t,x:n,y:a,value:r,formatter:m,data:x,index:_})=>{const b=x[0].data[_].value,D=x[1].data[_].value,A=D===0?0:((b-D)/D*100).toFixed(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,dx:-50,fontWeight:500,children:m(r)}),(0,d.jsx)(s.A,{...t,textAnchor:"end",x:n,y:a,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(A)>0?"+":""}${A}%`})]})},valueFormatter:t=>`$${(0,C.qe)(t)}`}}},u=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...z.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    showLegend: true
  }
}`,...K.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    showLegend: true,
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
}`,...G.parameters?.docs?.source}}}},"../charts/src/components/bar-chart/bar-chart.tsx":(N,L,e)=>{e.d(L,{A:()=>G});var C=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Lines.js"),v=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Circles.js"),T=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Waves.js"),B=e("../../../node_modules/.pnpm/@visx+pattern@3.12.0_react@18.3.1/node_modules/@visx/pattern/esm/patterns/Hexagons.js"),f=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/XYChart.js"),l=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/grid/Grid.js"),F=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarGroup.js"),o=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/series/BarSeries.js"),s=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/axis/Axis.js"),h=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),P=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../charts/src/providers/theme/theme-provider.tsx"),Y=e("../charts/src/components/legend/base-legend.tsx"),d=e("../charts/src/components/shared/use-chart-margin.tsx"),I=e("../charts/src/components/shared/use-element-height.ts"),R=e("../charts/src/components/shared/with-responsive.tsx"),X=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(X),Q=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss"),U={};U.insert="head",U.singleton=!1;var c=W()(Q.A,U);const w=Q.A.locals||{};var k=e("../number-formatters/src/index.ts");const J=u=>new Date(u).toLocaleDateString(void 0,{month:"short",day:"numeric"}),Z=u=>typeof u.paddingInner=="number"?u.paddingInner:0;function te(u,t,n={}){const a=(0,i.useMemo)(()=>{const r={type:"band",padding:.2,paddingInner:.1},m={type:"linear",nice:!0,zero:!1},x=u?.[0]?.data?.[0]?.label?A=>A:J,_=k.qe,b=A=>A?.label||A?.date,D=A=>A?.value;return{vertical:{xTickFormat:x,yTickFormat:_,tooltipLabelFormatter:x,xAccessor:b,yAccessor:D,gridVisibility:"x",xScale:r,yScale:m},horizontal:{xTickFormat:_,yTickFormat:x,tooltipLabelFormatter:x,xAccessor:D,yAccessor:b,gridVisibility:"y",xScale:m,yScale:r}}},[u]);return(0,i.useMemo)(()=>{const r=t?"horizontal":"vertical",{xTickFormat:m,yTickFormat:x,tooltipLabelFormatter:_,xAccessor:b,yAccessor:D,gridVisibility:A,xScale:$,yScale:E}=a[r],j={...$,...n.xScale||{}},S={...E,...n.yScale||{}},V=t?n.axis?.y?.tickFormat:n.axis?.x?.tickFormat;return{gridVisibility:A,xScale:j,yScale:S,accessors:{xAccessor:b,yAccessor:D},axis:{x:{orientation:"bottom",numTicks:4,tickFormat:m,...n.axis?.x||{}},y:{orientation:"left",numTicks:4,tickFormat:x,...n.axis?.y||{}}},barGroup:{padding:Z(t?S:j)},tooltip:{labelFormatter:V||_}}},[a,n,t])}var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const z=u=>u?.length?u.some(n=>n.data.some(a=>a.value===null||a.value===void 0||isNaN(a.value)||!a.label&&(!a.date||isNaN(a.date.getTime()))))?"Invalid data":null:"No data available",K=(u,t)=>`bar-pattern-${u}-${t}`,H=({data:u,width:t,height:n=400,className:a,margin:r,withTooltips:m=!1,showLegend:x=!1,legendOrientation:_="horizontal",legendShape:b="rect",gridVisibility:D,renderTooltip:A,options:$={},orientation:E="vertical",withPatterns:j=!1})=>{const S=E==="horizontal",V=(0,i.useId)(),q=(0,y.Ox)(u),M=te(u,S,$),ae=(0,d.a)(n,M,u,q,S),[re,de]=(0,I.v)(),ee=(0,i.useCallback)((g,O)=>g?.options?.stroke||q.colors[O%q.colors.length],[q]),ce=(0,i.useCallback)(g=>()=>j?`url(#${K(V,g)})`:ee(u[g],g),[j,ee,u,V]),ue=(0,i.useCallback)(({tooltipData:g})=>{const O=g?.nearestDatum?.datum;return O?(0,p.jsxs)("div",{className:w["bar-chart__tooltip"],children:[(0,p.jsx)("div",{className:w["bar-chart__tooltip-header"],children:g?.nearestDatum?.key}),(0,p.jsxs)("div",{className:w["bar-chart__tooltip-row"],children:[(0,p.jsxs)("span",{className:w["bar-chart__tooltip-label"],children:[M.tooltip.labelFormatter(O.label||O.date.getTime(),0,[]),":"]}),(0,p.jsx)("span",{className:w["bar-chart__tooltip-value"],children:O.value})]})]}):null},[M.tooltip]),me=(0,i.useCallback)((g,O)=>{const le=g%4,ie=K(V,g),ne={id:ie,key:ie,stroke:"white",strokeWidth:1,background:O};switch(le){case 0:default:return(0,p.jsx)(C.A,{...ne,width:5,height:5,orientation:["diagonal"]});case 1:return(0,p.jsx)(v.A,{...ne,width:6,height:6,fill:"white"});case 2:return(0,p.jsx)(T.A,{...ne,width:4,height:4});case 3:return(0,p.jsx)(B.A,{...ne,size:8,height:3})}},[V]),pe=(0,i.useCallback)((g,O)=>`
			.visx-bar[fill="url(#${K(V,g)})"] {
				stroke: ${O};
				stroke-width: 1;
				}
			`,[V]),se=z(u);if(se)return(0,p.jsx)("div",{className:(0,P.A)("bar-chart",w["bar-chart"]),children:se});const he=u.map((g,O)=>({label:g.label,value:"",color:ee(g,O),shapeStyle:g?.options?.legendShapeStyle})),oe=D??M.gridVisibility;return(0,p.jsxs)("div",{className:(0,P.A)("bar-chart",w["bar-chart"],a),"data-testid":"bar-chart",role:"img","aria-label":"bar chart",style:{width:t,height:n},children:[(0,p.jsxs)(f.A,{theme:q,width:t,height:n-de,margin:{...ae,...r},xScale:M.xScale,yScale:M.yScale,horizontal:S,pointerEventsDataKey:"nearest",children:[(0,p.jsx)(l.A,{columns:oe.includes("y"),rows:oe.includes("x"),numTicks:4}),j&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("defs",{"data-testid":"bar-chart-patterns",children:u.map((g,O)=>me(O,ee(g,O)))}),(0,p.jsx)("style",{children:u.map((g,O)=>pe(O,ee(g,O)))})]}),(0,p.jsx)(F.A,{padding:M.barGroup.padding,children:u.map((g,O)=>(0,p.jsx)(o.A,{dataKey:g?.label,data:g.data,yAccessor:M.accessors.yAccessor,xAccessor:M.accessors.xAccessor,colorAccessor:ce(O)},g?.label))}),(0,p.jsx)(s.A,{...M.axis.x}),(0,p.jsx)(s.A,{...M.axis.y}),m&&(0,p.jsx)(h.A,{detectBounds:!0,snapTooltipToDatumX:!0,snapTooltipToDatumY:!0,renderTooltip:A||ue})]}),x&&(0,p.jsx)(Y.$,{items:he,orientation:_,className:w["bar-chart__legend"],shape:b,ref:re})]})},G=(0,R.F)(H);try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:"{ yScale?: ScaleOptions; xScale?: ScaleOptions; axis?: { x?: AxisOptions; y?: AxisOptions; }; }"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:{value:"false"},description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:{value:"false"},description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:{value:"horizontal"},description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:{value:"rect"},description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"xy"'},{value:'"none"'}]}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:{value:"false"},description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the chart.",name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:null,description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-chart/bar-chart.tsx#barchart"]={docgenInfo:barchart.__docgenInfo,name:"barchart",path:"../charts/src/components/bar-chart/bar-chart.tsx#barchart"})}catch{}},"../charts/src/components/legend/base-legend.tsx":(N,L,e)=>{e.d(L,{$:()=>U});var C=e("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),v=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),T=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),B=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),f=e("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),l=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),F=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../charts/src/providers/theme/theme-provider.tsx"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(h),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),y={};y.insert="head",y.singleton=!1;var Y=P()(i.A,y);const d=i.A.locals||{};function I(c){return c&&typeof c=="object"&&"value"in c&&typeof c.value<"u"?c.value:c}function R(c){return String(I(c))}function X({scale:c,labelFormat:w}){return(k,J)=>({datum:k,index:J,text:`${w(k,J)}`,value:c(k)})}var W=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Q={horizontal:"row",vertical:"column"},U=(0,o.forwardRef)(({items:c,className:w,orientation:k="horizontal",shape:J="rect",fill:Z=R,size:te=R,labelFormat:p=I,labelTransform:z=X,shapeWidth:K=16,shapeHeight:H=16,shapeMargin:G="2px 4px 2px 0",labelAlign:u="left",labelFlex:t="1",labelMargin:n="0 4px",itemMargin:a="0",itemDirection:r="row",legendLabelProps:m,...x},_)=>{const b=(0,s.RW)(),D=(0,l.A)({domain:c.map(E=>E.label),range:c.map(E=>E.color)}),A=D.domain(),$=(0,o.useCallback)(({index:E})=>c[E]?.shapeStyle??b.legendShapeStyles?.[E]??{},[c,b]);return(0,W.jsx)(v.A,{scale:D,labelFormat:p,labelTransform:z,children:E=>(0,W.jsx)("div",{ref:_,role:"list","data-testid":`legend-${k}`,className:(0,F.A)(d.legend,d[`legend--${k}`],w),style:{flexDirection:Q[k],...b.legendContainerStyles},children:E.map((j,S)=>(0,W.jsxs)(T.A,{className:d["legend-item"],"data-testid":"legend-item",margin:a,flexDirection:r,...x,children:[c[S]?.renderGlyph?(0,W.jsx)("svg",{width:c[S]?.glyphSize*2,height:c[S]?.glyphSize*2,"data-testid":"legend-glyph",children:(0,W.jsx)(C.A,{children:c[S]?.renderGlyph({key:`legend-glyph-${j.text}`,datum:{},index:S,color:Z(j),size:c[S]?.glyphSize,x:c[S]?.glyphSize,y:c[S]?.glyphSize})})}):(0,W.jsx)(B.A,{shape:J,height:H,width:K,margin:G,item:A[S],itemIndex:S,label:j,fill:Z,size:te,shapeStyle:$}),(0,W.jsxs)(f.A,{style:{justifyContent:u,flex:t,margin:n,...b.legendLabelStyles},...m,children:[j.text,c.find(V=>V.label===j.text)?.value&&(0,W.jsx)("span",{className:d["legend-item-value"],children:c.find(V=>V.label===j.text)?.value})]})]},`legend-${j.text}-${S}`))})})});try{U.displayName="BaseLegend",U.__docgenInfo={description:"",displayName:"BaseLegend",props:{className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItemWithGlyph[] | LegendItemWithoutGlyph[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:U.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../charts/src/components/shared/use-chart-margin.tsx":(N,L,e)=>{e.d(L,{a:()=>l});var C=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),v=e("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),T=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),B=e("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const f=(F,o,s)=>{const h=F.map(i=>o(i,0,[])),P=h.reduce((i,y)=>i.length>=y.length?i:y,h[0]);return(0,B.A)(P,s)},l=(F,o,s,h,P=!1)=>{const i=(0,T.useMemo)(()=>{const y=s.flatMap(R=>R.data);if(P)return y.map(R=>R.label||o.axis?.y?.tickFormat(R.date.getTime(),0,[]));const Y=Math.min(...y.map(R=>R.value)),d=Math.max(...y.map(R=>R.value)),I=(0,C.A)({...o.yScale,domain:[Y,d],range:[F,0]});return(0,v.A)(I,o.axis?.y?.numTicks)},[o,s,F,P]);return(0,T.useMemo)(()=>{const y={top:10,right:20,bottom:20,left:20},Y=40,d=o.axis?.y?.orientation,I=d==="right"?h.axisStyles.y.right:h.axisStyles.y.left,X=(f(i,o.axis?.y?.tickFormat,I.axisLabel)??Y)+(I?.tickLength??0);return d==="right"?y.right=X:y.left=X,o.axis?.x?.orientation==="top"&&(y.top=20,y.bottom=10),y},[o,h,i])}},"../charts/src/components/shared/use-element-height.ts":(N,L,e)=>{e.d(L,{v:()=>v});var C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function v({initialHeight:T=0}={}){const[B,f]=(0,C.useState)(T),l=(0,C.useRef)(null);return[(0,C.useCallback)(o=>{if(l.current&&(l.current.disconnect(),l.current=null),o){const s=()=>{f(o.getBoundingClientRect().height||0)};s();const h=new window.ResizeObserver(s);h.observe(o),l.current=h}},[]),B]}},"../charts/src/components/shared/with-responsive.tsx":(N,L,e)=>{e.d(L,{F:()=>f});var C=e("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T={width:600,height:400},B=({resizeDebounceTime:l=300,maxWidth:F=1200,aspectRatio:o=.5})=>{const{parentRef:s,width:h}=(0,C.A)({debounceTime:l,enableDebounceLeadingCall:!0,initialSize:T}),P=h?Math.min(h,F):T.width,i=P*o;return{parentRef:s,width:P,height:i}};function f(l){return function({resizeDebounceTime:o=300,maxWidth:s=1200,aspectRatio:h=.5,...P}){const{parentRef:i,width:y,height:Y}=B({resizeDebounceTime:o,maxWidth:s,aspectRatio:h});return(0,v.jsx)("div",{ref:i,style:{width:"100%"},children:(0,v.jsx)(l,{width:y,height:Y,size:y,...P})})}}try{f.displayName="withResponsive",f.__docgenInfo={description:`A higher-order component that provides responsive dimensions
to the wrapped chart component using useParentSize from`,displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/shared/with-responsive.tsx#withResponsive"]={docgenInfo:f.__docgenInfo,name:"withResponsive",path:"../charts/src/components/shared/with-responsive.tsx#withResponsive"})}catch{}},"../charts/src/providers/theme/theme-provider.tsx":(N,L,e)=>{e.d(L,{NP:()=>o,Ox:()=>F,RW:()=>l});var C=e("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=e("../charts/src/providers/theme/themes.ts"),B=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=(0,v.createContext)(T.zQ),l=()=>(0,v.useContext)(f),F=s=>{const h=l();return(0,v.useMemo)(()=>{const P=(s??[]).map(i=>i.options?.stroke).filter(i=>!!i);return(0,C.A)({...h,colors:[...P,...h.colors??[]]})},[h,s])},o=({theme:s={},children:h})=>{const P={...T.zQ,...s};return(0,B.jsx)(f.Provider,{value:P,children:h})};try{o.displayName="ThemeProvider",o.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"{}"},description:"Optional partial theme override",name:"theme",required:!1,type:{name:"Partial<ChartTheme>"}},children:{defaultValue:null,description:"Child components that will have access to the theme",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"]={docgenInfo:o.__docgenInfo,name:"ThemeProvider",path:"../charts/src/providers/theme/theme-provider.tsx#ThemeProvider"})}catch{}try{l.displayName="useChartTheme",l.__docgenInfo={description:"Hook to access chart theme",displayName:"useChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useChartTheme"]={docgenInfo:l.__docgenInfo,name:"useChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useChartTheme"})}catch{}try{F.displayName="useXYChartTheme",F.__docgenInfo={description:"",displayName:"useXYChartTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"]={docgenInfo:F.__docgenInfo,name:"useXYChartTheme",path:"../charts/src/providers/theme/theme-provider.tsx#useXYChartTheme"})}catch{}},"../charts/src/providers/theme/themes.ts":(N,L,e)=>{e.d(L,{QI:()=>v,pk:()=>T,zQ:()=>C});const C={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},v={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#98C8DF","#006DAB","#A6DC80","#1F9828","#FF8C8F"],gridStyles:{stroke:"#DCDCDE",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{color:"var(--jp-gray-80, #2c3338)"}},T={backgroundColor:"#FFFFFF",labelBackgroundColor:"#FFFFFF",colors:["#80C8FF","#B999FF","#3858E9"],gridStyles:{stroke:"#787C82",strokeWidth:1},tickLength:4,gridColor:"",gridColorDark:"",xTickLineStyles:{stroke:"black"},xAxisLineStyles:{stroke:"#DCDCDE",strokeWidth:1},legendLabelStyles:{fontSize:"12px",fontWeight:400,color:"#757575"},legendContainerStyles:{gap:"8px"}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/bar-chart/bar-chart.module.scss":(N,L,e)=>{e.d(L,{A:()=>l});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(C),T=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),B=e.n(T),f=B()(v());f.push([N.id,".ntOQdGFaV5IXyaLCFF_r{position:relative}.ntOQdGFaV5IXyaLCFF_r svg{overflow:visible}.qr9JnCKf5SC5eFWzLhpx{margin-top:1rem}",""]),f.locals={"bar-chart":"ntOQdGFaV5IXyaLCFF_r","bar-chart-legend":"qr9JnCKf5SC5eFWzLhpx"};const l=f},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(N,L,e)=>{e.d(L,{A:()=>l});var C=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(C),T=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),B=e.n(T),f=B()(v());f.push([N.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),f.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const l=f}}]);
