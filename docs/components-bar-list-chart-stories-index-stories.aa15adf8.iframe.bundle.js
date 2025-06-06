"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304],{"../charts/src/components/bar-list-chart/stories/index.stories.tsx":(X,S,i)=>{i.r(S),i.d(S,{CustomLabelComponent:()=>f,CustomValueComponent:()=>y,Default:()=>u,MultiSeries:()=>x,__namedExportsOrder:()=>J,default:()=>G});var B=i("../number-formatters/src/index.ts"),L=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),T=i("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=i.n(T),O=["className","innerRef"];function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},P.apply(this,arguments)}function D(t,e){if(t==null)return{};var a={},n=Object.keys(t),r,l;for(l=0;l<n.length;l++)r=n[l],!(e.indexOf(r)>=0)&&(a[r]=t[r]);return a}function E(t){var e=t.className,a=t.innerRef,n=D(t,O);return L.createElement("circle",P({ref:a,className:w()("visx-circle",e)},n))}var h=i("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),F=i("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),R=i("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),W=i("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),N=i("../charts/src/components/bar-chart/bar-chart.tsx"),M=i("../charts/src/components/shared/with-responsive.tsx"),o=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=t=>{const e=t;return e&&"bandwidth"in e?e?.bandwidth()??0:0},$=({textProps:t,x:e,y:a,label:n,formatter:r})=>(0,o.jsx)(h.A,{...t,textAnchor:"start",x:e,y:a,children:r(n)}),z=({textProps:t,x:e,y:a,value:n,formatter:r})=>(0,o.jsx)(h.A,{...t,textAnchor:"end",x:e,y:a,fontWeight:500,children:r(n)}),U=({ticks:t,tickLabelProps:e,yOffset:a,labelPosition:n,valuePosition:r,data:l,labelFormatter:s,valueFormatter:c,LabelComponent:d=$,ValueComponent:m=z})=>{if(t.length===0)return null;const v=t.map(({value:g,index:p})=>typeof e=="function"?e(g,p,t):{});return t.map(({from:g,formattedValue:p},b)=>{const C=v[b]??{};delete C.textAnchor,delete C.dx;const Y=l.reduce((H,{data:K})=>H+(K[b]?.value??0),0),_=g.y+a;return(0,o.jsxs)(F.A,{children:[(0,o.jsx)(d,{textProps:C,x:n,y:_,label:p,formatter:s}),(0,o.jsx)(m,{textProps:C,x:r,y:_,value:Y,formatter:c,data:l,index:b})]},b)})},q=(t,e,a,n)=>{if(!n)return 0;const r=t.map(({label:m})=>m),l=(0,R.A)({type:"band",range:[0,a],domain:r,...e}),s=(0,W.A)({domain:r,range:[0,j(l)],padding:e.paddingInner});return-(j(s)+6)},k=({data:t,width:e,height:a,options:n={},margin:r={left:0,right:20,bottom:0,top:0},...l})=>{const s=(0,L.useMemo)(()=>{const c=t.length>1,d={paddingInner:c?.3:.1,padding:c?.3:.1},m={zero:!0},v={...d,...n.yScale??{}},g={...m,...n.xScale??{}};return{yScale:v,xScale:g,labelPosition:n.labelPosition??(c?0:10),valueFormatter:n.valueFormatter??(p=>(0,B.qe)(p)),labelFormatter:n.labelFormatter??(p=>String(p)),valuePosition:n.valuePosition??e,yOffset:n.yOffset??q(t,v,a,c)}},[n,e,t,a]);return(0,o.jsx)(N.A,{orientation:"horizontal",gridVisibility:"none",data:t,width:e,height:a,margin:r,options:{axis:{y:{children:c=>(0,o.jsx)(U,{...c,data:t,yOffset:s.yOffset,labelPosition:s.labelPosition,valuePosition:s.valuePosition,labelFormatter:s.labelFormatter,valueFormatter:s.valueFormatter,LabelComponent:n.labelComponent,ValueComponent:n.valueComponent})},x:{children:()=>null}},xScale:s.xScale,yScale:s.yScale},...l})},I=(0,M.F)(k);try{barlistchart.displayName="barlistchart",barlistchart.__docgenInfo={description:"",displayName:"barlistchart",props:{size:{defaultValue:null,description:"Size of the chart in pixels for pie and donut charts",name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart in pixels",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart in pixels",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<object>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"]={docgenInfo:barlistchart.__docgenInfo,name:"barlistchart",path:"../charts/src/components/bar-list-chart/bar-list-chart.tsx#barlistchart"})}catch{}const V=[{group:"primary",label:"Jan 21-Aug 8, 2024",data:[{label:"Organic search",value:3e4},{label:"Affiliates",value:19e3},{label:"Display",value:18e3},{label:"Organic shopping",value:16e3}]},{group:"comparison",label:"Jan 21-Aug 8, 2023",data:[{label:"Organic search",value:2e4},{label:"Affiliates",value:15e3},{label:"Display",value:19900},{label:"Organic shopping",value:20500}]}],A=[{group:"primary",label:"Sales By Product",data:[{label:"Behemoth hat ",value:32400},{label:"Margarita top",value:2e4},{label:"Berlioz dress",value:15e3},{label:"Woland shirt",value:16e3},{label:"Azazello top",value:2e4}]}];var Q=`import { formatNumberCompact } from '@automattic/number-formatters';
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
`,Z={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},MultiSeries:{startLoc:{col:27,line:35},endLoc:{col:1,line:41},startBody:{col:27,line:35},endBody:{col:1,line:41}},CustomLabelComponent:{startLoc:{col:36,line:42},endLoc:{col:1,line:78},startBody:{col:36,line:42},endBody:{col:1,line:78}},CustomValueComponent:{startLoc:{col:36,line:79},endLoc:{col:1,line:128},startBody:{col:36,line:79},endBody:{col:1,line:128}}};const G={title:"JS Packages/Charts/Types/Bar List Chart",component:I,parameters:{storySource:{source:`import { formatNumberCompact } from '@automattic/number-formatters';
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
};`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:34},startBody:{col:23,line:29},endBody:{col:1,line:34}},"multi-series":{startLoc:{col:27,line:35},endLoc:{col:1,line:41},startBody:{col:27,line:35},endBody:{col:1,line:41}},"custom-label-component":{startLoc:{col:36,line:42},endLoc:{col:1,line:78},startBody:{col:36,line:42},endBody:{col:1,line:78}},"custom-value-component":{startLoc:{col:36,line:79},endLoc:{col:1,line:128},startBody:{col:36,line:79},endBody:{col:1,line:128}}}},layout:"centered"},decorators:[t=>(0,o.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,o.jsx)(t,{})})]},u={args:{withTooltips:!0,data:A}},x={args:{...u.args,data:V,showLegend:!0}},f={args:{...u.args,data:A,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{labelComponent:({textProps:t,x:e,y:a,label:n,formatter:r})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{cx:e+6,cy:a,r:8}),(0,o.jsx)(h.A,{...t,textAnchor:"start",x:e+24,y:a,fontWeight:500,children:r(n)})]})}}},y={args:{...u.args,data:V,showLegend:!0,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{valueComponent:({textProps:t,x:e,y:a,value:n,formatter:r,data:l,index:s})=>{const c=l[0].data[s].value,d=l[1].data[s].value,m=d===0?0:((c-d)/d*100).toFixed(0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.A,{...t,textAnchor:"end",x:e,y:a,dx:-50,fontWeight:500,children:r(n)}),(0,o.jsx)(h.A,{...t,textAnchor:"end",x:e,y:a,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(m)>0?"+":""}${m}%`})]})},valueFormatter:t=>`$${(0,B.qe)(t)}`}}},J=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
