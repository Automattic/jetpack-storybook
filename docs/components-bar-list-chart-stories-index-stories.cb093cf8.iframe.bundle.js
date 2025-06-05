"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(G,S,s)=>{s.r(S),s.d(S,{CustomLabelComponent:()=>f,CustomValueComponent:()=>y,Default:()=>u,MultiSeries:()=>x,__namedExportsOrder:()=>U,default:()=>z});var P=s("../number-formatters/src/index.ts"),A=s("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Circle.js"),h=s("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),j=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),w=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),O=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),D=s("../charts/src/components/bar-chart/bar-chart.tsx"),F=s("../charts/src/components/shared/with-responsive.tsx"),a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const B=t=>{const e=t;return e&&"bandwidth"in e?e?.bandwidth()??0:0},E=({textProps:t,x:e,y:r,label:n,formatter:o})=>(0,a.jsx)(h.A,{...t,textAnchor:"start",x:e,y:r,children:o(n)}),W=({textProps:t,x:e,y:r,value:n,formatter:o})=>(0,a.jsx)(h.A,{...t,textAnchor:"end",x:e,y:r,fontWeight:500,children:o(n)}),R=({ticks:t,tickLabelProps:e,yOffset:r,labelPosition:n,valuePosition:o,data:c,labelFormatter:l,valueFormatter:i,LabelComponent:d=E,ValueComponent:m=W})=>{if(t.length===0)return null;const v=t.map(({value:g,index:p})=>typeof e=="function"?e(g,p,t):{});return t.map(({from:g,formattedValue:p},b)=>{const C=v[b]??{};delete C.textAnchor,delete C.dx;const q=c.reduce((k,{data:I})=>k+(I[b]?.value??0),0),_=g.y+r;return(0,a.jsxs)(T.A,{children:[(0,a.jsx)(d,{textProps:C,x:n,y:_,label:p,formatter:l}),(0,a.jsx)(m,{textProps:C,x:o,y:_,value:q,formatter:i,data:c,index:b})]},b)})},N=(t,e,r,n)=>{if(!n)return 0;const o=t.map(({label:m})=>m),c=(0,w.A)({type:"band",range:[0,r],domain:o,...e}),l=(0,O.A)({domain:o,range:[0,B(c)],padding:e.paddingInner});return-(B(l)+6)},M=({data:t,width:e,height:r,options:n={},margin:o={left:0,right:20,bottom:0,top:0},...c})=>{const l=(0,j.useMemo)(()=>{const i=t.length>1,d={paddingInner:i?.3:.1,padding:i?.3:.1},m={zero:!0},v={...d,...n.yScale??{}},g={...m,...n.xScale??{}};return{yScale:v,xScale:g,labelPosition:n.labelPosition??(i?0:10),valueFormatter:n.valueFormatter??(p=>(0,P.qe)(p)),labelFormatter:n.labelFormatter??(p=>String(p)),valuePosition:n.valuePosition??e,yOffset:n.yOffset??N(t,v,r,i)}},[n,e,t,r]);return(0,a.jsx)(D.A,{orientation:"horizontal",gridVisibility:"none",data:t,width:e,height:r,margin:o,options:{axis:{y:{children:i=>(0,a.jsx)(R,{...i,data:t,yOffset:l.yOffset,labelPosition:l.labelPosition,valuePosition:l.valuePosition,labelFormatter:l.labelFormatter,valueFormatter:l.valueFormatter,LabelComponent:n.labelComponent,ValueComponent:n.valueComponent})},x:{children:()=>null}},xScale:l.xScale,yScale:l.yScale},...c})},$=(0,F.F)(M);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const L=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],V=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var J=`import { formatNumberCompact } from '@automattic/number-formatters';
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
`,Y={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:41},startBody:{col:27,line:35},endBody:{col:1,line:41}},CustomLabelComponent:{startLoc:{col:36,line:42},endLoc:{col:1,line:78},startBody:{col:36,line:42},endBody:{col:1,line:78}},CustomValueComponent:{startLoc:{col:36,line:79},endLoc:{col:1,line:128},startBody:{col:36,line:79},endBody:{col:1,line:128}}};const z={title:"JS Packages/Charts/Types/Bar List Chart",component:$,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
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
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:41},startBody:{col:27,line:35},endBody:{col:1,line:41}},"custom-label-component":{startLoc:{col:36,line:42},endLoc:{col:1,line:78},startBody:{col:36,line:42},endBody:{col:1,line:78}},"custom-value-component":{startLoc:{col:36,line:79},endLoc:{col:1,line:128},startBody:{col:36,line:79},endBody:{col:1,line:128}}}},layout:"centered"},decorators:[t=>(0,a.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,a.jsx)(t,{})})]},u={args:{withTooltips:!0,data:V}},x={args:{...u.args,data:L,showLegend:!0}},f={args:{...u.args,data:V,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:t,x:e,y:r,label:n,formatter:o})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.A,{cx:e+6,cy:r,r:8}),(0,a.jsx)(h.A,{...t,textAnchor:"start",x:e+24,y:r,fontWeight:500,children:o(n)})]})}}},y={args:{...u.args,data:L,showLegend:!0,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:t,x:e,y:r,value:n,formatter:o,data:c,index:l})=>{const i=c[0].data[l].value,d=c[1].data[l].value,m=d===0?0:((i-d)/d*100).toFixed(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.A,{...t,textAnchor:"end",x:e,y:r,dx:-50,fontWeight:500,children:o(n)}),(0,a.jsx)(h.A,{...t,textAnchor:"end",x:e,y:r,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(m)>0?"+":""}${m}%`})]})},valueFormatter:t=>`$${(0,P.qe)(t)}`}}},U=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct
  }
}`,...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel,
    showLegend: true
  }
}`,...x.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}}}]);
