"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[593,2885],{"../charts/src/charts/bar-list-chart/stories/index.docs.mdx"(M,O,l){l.r(O),l.d(O,{default:()=>m});var E=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),S=l("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=l("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js"),c=l("../charts/src/charts/bar-list-chart/stories/index.stories.tsx");function u(v){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,S.R)(),...v.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{title:"JS Packages/Charts Library/Charts/Bar List Chart",of:c}),`
`,(0,e.jsx)(t.h1,{id:"bar-list-chart",children:"Bar List Chart"}),`
`,(0,e.jsx)(t.p,{children:"A specialized horizontal bar chart component that displays data as a ranked list with labels and values positioned alongside the bars. Ideal for showing comparisons between categories or time periods."}),`
`,(0,e.jsx)(i.Hl,{of:c.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The BarListChart component extends the BarChart component to create a list-style visualization that combines horizontal bars with text labels and values. It automatically handles positioning of labels on the left and values on the right, making it perfect for dashboards and reports that need to display ranked data clearly."}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { BarListChart } from '@automattic/charts';

const data = [
	{
		group: 'primary',
		label: 'Sales By Product',
		data: [
			{ label: 'Product A', value: 32400 },
			{ label: 'Product B', value: 20000 },
			{ label: 'Product C', value: 15000 },
		],
	},
];

<BarListChart data={ data } />`}),`
`,(0,e.jsx)(t.p,{children:"Key features:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Automatic label and value positioning"}),`
`,(0,e.jsx)(t.li,{children:"Support for single and multi-series data"}),`
`,(0,e.jsx)(t.li,{children:"Customizable formatters for labels and values"}),`
`,(0,e.jsx)(t.li,{children:"Custom component rendering for advanced styling"}),`
`,(0,e.jsx)(t.li,{children:"Responsive design with automatic sizing"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-data",children:"Single Series Data"}),`
`,(0,e.jsx)(t.p,{children:"The simplest implementation displays a single series of data with automatic formatting:"}),`
`,(0,e.jsx)(i.Hl,{of:c.Default}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`const singleSeriesData = [
	{
		group: 'primary',
		label: 'Sales By Product',
		data: [
			{ label: 'Behemoth hat', value: 32400 },
			{ label: 'Margarita top', value: 20000 },
			{ label: 'Berlioz dress', value: 15000 },
			{ label: 'Woland shirt', value: 16000 },
		],
	},
];

<BarListChart
	data={ singleSeriesData }
	withTooltips={ true }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-data",children:"Multi-Series Data"}),`
`,(0,e.jsx)(t.p,{children:"Compare data across different time periods or categories:"}),`
`,(0,e.jsx)(i.Hl,{of:c.MultiSeries}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`const multiSeriesData = [
	{
		group: 'primary',
		label: 'Jan 21-Aug 8, 2024',
		data: [
			{ label: 'Organic search', value: 30000 },
			{ label: 'Affiliates', value: 19000 },
			{ label: 'Display', value: 18000 },
		],
	},
	{
		group: 'comparison',
		label: 'Jan 21-Aug 8, 2023',
		data: [
			{ label: 'Organic search', value: 20000 },
			{ label: 'Affiliates', value: 15000 },
			{ label: 'Display', value: 19900 },
		],
	},
];

<BarListChart data={ multiSeriesData } />`}),`
`,(0,e.jsx)(t.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"data"})}),": Array of SeriesData objects containing the chart data"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:["For detailed prop information and configuration options, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-charts-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"chart-types",children:"Chart Types"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-default",children:"Single Series (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Best for displaying a simple ranked list of items:"}),`
`,(0,e.jsx)(i.Hl,{of:c.Default}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Compact layout with minimal padding"}),`
`,(0,e.jsx)(t.li,{children:"Labels positioned closer to bars"}),`
`,(0,e.jsx)(t.li,{children:"Values displayed with compact number formatting"}),`
`,(0,e.jsx)(t.li,{children:"Ideal for product rankings, performance metrics"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-comparison",children:"Multi-Series Comparison"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for comparing data across time periods or categories:"}),`
`,(0,e.jsx)(i.Hl,{of:c.MultiSeries}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Increased padding for better visual separation"}),`
`,(0,e.jsx)(t.li,{children:"Grouped bars for comparison"}),`
`,(0,e.jsx)(t.li,{children:"Automatic calculation of totals for value display"}),`
`,(0,e.jsx)(t.li,{children:"Color coding based on series groups"}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(t.h3,{id:"custom-label-components",children:"Custom Label Components"}),`
`,(0,e.jsx)(t.p,{children:"Create custom label rendering with icons or enhanced styling:"}),`
`,(0,e.jsx)(i.Hl,{of:c.CustomLabelComponent}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`import { Circle } from '@visx/shape';
import { Text } from '@visx/text';

<BarListChart
	data={ data }
	options={ {
		labelComponent: ( { textProps, x, y, label, formatter } ) => (
			<>
				<Circle cx={ x + 6 } cy={ y } r={ 8 } />
				<Text
					{ ...textProps }
					textAnchor="start"
					x={ x + 24 }
					y={ y }
					fontWeight={ 500 }
				>
					{ formatter( label ) }
				</Text>
			</>
		),
	} }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"custom-value-components",children:"Custom Value Components"}),`
`,(0,e.jsx)(t.p,{children:"Display additional information alongside values:"}),`
`,(0,e.jsx)(i.Hl,{of:c.CustomValueComponent}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarListChart
	data={ data }
	options={ {
		valueComponent: ( { textProps, x, y, value, formatter, data, index } ) => {
			const currentValue = data[0].data[index].value;
			const previousValue = data[1].data[index].value;
			const percentage = previousValue === 0 ? 0 :
				(((currentValue - previousValue) / previousValue) * 100).toFixed(0);

			return (
				<>
					<Text
						{ ...textProps }
						textAnchor="end"
						x={ x }
						y={ y }
						dx={ -50 }
						fontWeight={ 500 }
					>
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
		valueFormatter: ( value ) => \`$\${ formatNumberCompact( value ) }\`,
	} }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"formatting-options",children:"Formatting Options"}),`
`,(0,e.jsxs)(t.p,{children:["The ",(0,e.jsx)(t.code,{children:"options"})," prop accepts various formatting and positioning controls:"]}),`
`,(0,e.jsx)(t.h4,{id:"labelformatter",children:(0,e.jsx)(t.code,{children:"labelFormatter"})}),`
`,(0,e.jsx)(t.p,{children:"Controls how labels are displayed:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`options: {
	labelFormatter: (value) => value.toUpperCase()
}
`})}),`
`,(0,e.jsx)(t.h4,{id:"valueformatter",children:(0,e.jsx)(t.code,{children:"valueFormatter"})}),`
`,(0,e.jsx)(t.p,{children:"Controls how values are formatted:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:"options: {\n	valueFormatter: (value) => `$${formatNumberCompact(value)}`\n}\n"})}),`
`,(0,e.jsxs)(t.h4,{id:"labelposition-and-valueposition",children:[(0,e.jsx)(t.code,{children:"labelPosition"})," and ",(0,e.jsx)(t.code,{children:"valuePosition"})]}),`
`,(0,e.jsx)(t.p,{children:"Control the horizontal positioning of text elements:"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`options: {
	labelPosition: 20,    // X position for labels
	valuePosition: 400,   // X position for values
}
`})}),`
`,(0,e.jsx)(t.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(t.p,{children:["Bar List Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(t.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(i.kL,{language:"tsx",code:`import { GlobalChartsProvider, BarListChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<BarListChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(t.p,{children:["By default, BarListChart ",(0,e.jsx)(t.strong,{children:"fills its parent container's dimensions"}),". The parent must have an explicit height:"]}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '300px' }}>
	<BarListChart data={data} />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%' }}>
	<BarListChart data={data} aspectRatio={0.4} />
</div>

// Fixed dimensions
<BarListChart data={data} width={600} height={300} />`}),`
`,(0,e.jsxs)(t.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(t.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(t.p,{children:"The Bar List Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(i.Hl,{of:c.Animation}),`
`,(0,e.jsx)(i.kL,{language:"tsx",code:`<BarListChart
	data={ data }
	animation={ true }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(t.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(t.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Effect"}),": Creates a stretching effect where bars grow from left to right, revealing the data progressively"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(t.h3,{id:"scale-configuration",children:"Scale Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Customize the chart scales for precise control over bar sizing and spacing:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarListChart
	data={ data }
	options={ {
		yScale: {
			paddingInner: 0.4,  // Space between bars
			padding: 0.2,       // Outer padding
		},
		xScale: {
			zero: true,         // Always start from zero
		},
	} }
/>`}),`
`,(0,e.jsx)(t.h3,{id:"automatic-layout-calculation",children:"Automatic Layout Calculation"}),`
`,(0,e.jsx)(t.p,{children:"The component automatically calculates optimal positioning based on:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Number of data series (single vs multi-series)"}),`
`,(0,e.jsx)(t.li,{children:"Chart dimensions"}),`
`,(0,e.jsx)(t.li,{children:"Content overflow considerations"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:"For multi-series charts, the component automatically adjusts:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Bar thickness and spacing"}),`
`,(0,e.jsx)(t.li,{children:"Label positioning"}),`
`,(0,e.jsx)(t.li,{children:"Y-offset calculations for proper text alignment"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"custom-positioning",children:"Custom Positioning"}),`
`,(0,e.jsx)(t.p,{children:"Override automatic positioning when needed:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`<BarListChart
	data={ data }
	options={ {
		yOffset: -20,          // Vertical offset for text
		labelPosition: 10,     // Fixed label position
		valuePosition: 380,    // Fixed value position
	} }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(t.p,{children:"BarListChart inherits accessibility features from the underlying BarChart component, including keyboard navigation support when tooltips are enabled and proper ARIA attributes for screen readers."}),`
`,(0,e.jsx)(t.h2,{id:"migration-from-bar-chart",children:"Migration from Bar Chart"}),`
`,(0,e.jsx)(t.p,{children:"If you're currently using a horizontal BarChart for list-style data, BarListChart provides a more optimized experience:"}),`
`,(0,e.jsx)(i.kL,{language:"jsx",code:`
// Old approach with BarChart
<BarChart
	orientation="horizontal"
	data={ data }
	// Complex custom axis configuration needed
	options={ {
		axis: {
			y: { /* complex custom renderer */ },
			x: { children: () => null }
		}
	} }
/>

// New approach with BarListChart
<BarListChart data={ data } />
`}),`
`,(0,e.jsx)(t.p,{children:"Benefits of migration:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Automatic label and value positioning"}),`
`,(0,e.jsx)(t.li,{children:"Built-in formatting with sensible defaults"}),`
`,(0,e.jsx)(t.li,{children:"Simplified API for common use cases"}),`
`]})]})}function m(v={}){const{wrapper:t}={...(0,S.R)(),...v.components};return t?(0,e.jsx)(t,{...v,children:(0,e.jsx)(u,{...v})}):u(v)}},"../charts/src/charts/bar-list-chart/stories/index.stories.tsx"(M,O,l){l.r(O),l.d(O,{Animation:()=>h,AspectRatio:()=>s,CustomLabelComponent:()=>y,CustomValueComponent:()=>A,Default:()=>o,FixedDimensions:()=>r,MultiSeries:()=>f,__namedExportsOrder:()=>_,default:()=>n});var E=l("../number-formatters/src/index.ts"),e=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=l("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=l.n(S),c=["className","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(d){for(var x=1;x<arguments.length;x++){var p=arguments[x];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(d[g]=p[g])}return d},u.apply(this,arguments)}function m(d,x){if(d==null)return{};var p={},g=Object.keys(d),C,b;for(b=0;b<g.length;b++)C=g[b],!(x.indexOf(C)>=0)&&(p[C]=d[C]);return p}function v(d){var x=d.className,p=d.innerRef,g=m(d,c);return e.createElement("circle",u({ref:p,className:i()("visx-circle",x)},g))}var t=l("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),j=l("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),T=l("../charts/src/stories/chart-decorator.tsx"),V=l("../charts/src/stories/theme-config.tsx"),B=l("../charts/src/stories/sample-data/index.ts"),D=l("../charts/src/charts/bar-list-chart/bar-list-chart.tsx"),P=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n={title:"JS Packages/Charts Library/Charts/Bar List Chart",component:D.A,parameters:{layout:"centered"},decorators:[T.OI],argTypes:{...T.xo,...V.jW}},o={args:{...V.In,withTooltips:!0,data:B.V_}},r={args:{...o.args,width:600,height:300}},s={args:{...o.args,aspectRatio:.3}},f={args:{...o.args,data:B._v}},h={args:{...o.args,animation:!0}},y={args:{...o.args,data:B.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:d,x,y:p,label:g,formatter:C})=>{const L=(0,j.p)().colors[1];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,{cx:x+6,cy:p,r:8,fill:L}),(0,P.jsx)(t.A,{...d,textAnchor:"start",x:x+24,y:p,fontWeight:500,children:C(g)})]})}}}},A={args:{...o.args,data:B._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:d,x,y:p,value:g,formatter:C,data:b,index:L})=>{const w=b[0].data[L].value,R=b[1].data[L].value,I=R===0?0:((w-R)/R*100).toFixed(0);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(t.A,{...d,textAnchor:"end",x,y:p,dx:-50,fontWeight:500,children:C(g)}),(0,P.jsx)(t.A,{...d,textAnchor:"end",x,y:p,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(I)>0?"+":""}${I}%`})]})},valueFormatter:d=>`$${(0,E.qe)(d)}`}}},_=["Default","FixedDimensions","AspectRatio","MultiSeries","Animation","CustomLabelComponent","CustomValueComponent"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...sharedThemeArgs,
    withTooltips: true,
    data: salesByProduct
  }
}`,...o.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...r.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.3
  }
}`,...s.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animation: true
  }
}`,...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      xScale: {},
      yScale: {},
      labelComponent: ({
        textProps,
        x,
        y,
        label,
        formatter
      }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const theme = useGlobalChartsTheme();
        const circleColor = theme.colors[1]; // Use second theme color for contrast

        return <>
                        <Circle cx={x + 6} cy={y} r={8} fill={circleColor} />
                        <Text {...textProps} textAnchor="start" x={x + 24} y={y} fontWeight={500}>
                            {formatter(label)}
                        </Text>
                    </>;
      }
    }
  }
}`,...y.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      xScale: {},
      yScale: {},
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
}`,...A.parameters?.docs?.source}}}},"../charts/src/charts/bar-list-chart/bar-list-chart.tsx"(M,O,l){l.d(O,{A:()=>o});var E=l("../number-formatters/src/index.ts"),e=l("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),S=l("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),i=l("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),c=l("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),u=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=l("../charts/src/providers/chart-context/global-charts-provider.tsx"),v=l("../charts/src/charts/bar-chart/bar-chart.tsx"),t=l("../charts/src/charts/private/with-responsive/with-responsive.tsx"),j=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T=r=>{const s=r;return s&&"bandwidth"in s?s?.bandwidth()??0:0},V=({textProps:r,x:s,y:f,label:h,formatter:y})=>(0,j.jsx)(c.A,{...r,textAnchor:"start",x:s,y:f,children:y(h)}),B=({textProps:r,x:s,y:f,value:h,formatter:y})=>(0,j.jsx)(c.A,{...r,textAnchor:"end",x:s,y:f,fontWeight:500,children:y(h)}),D=({ticks:r,tickLabelProps:s,yOffset:f,labelPosition:h,valuePosition:y,data:A,labelFormatter:_,valueFormatter:d,LabelComponent:x=V,ValueComponent:p=B})=>{if(r.length===0)return null;const g=r.map(({value:C,index:b})=>typeof s=="function"?s(C,b,r):{});return r.map(({from:C,formattedValue:b},L)=>{const w=g[L]??{};delete w.textAnchor,delete w.dx;const R=A.reduce((W,{data:F})=>W+(F[L]?.value??0),0),I=C.y+f;return(0,j.jsxs)(e.A,{children:[(0,j.jsx)(x,{textProps:w,x:h,y:I,label:b,formatter:_}),(0,j.jsx)(p,{textProps:w,x:y,y:I,value:R,formatter:d,data:A,index:L})]},L)})},P=(r,s,f,h)=>{if(!h)return 0;const y=r.map(({label:p})=>p),A=(0,i.A)({type:"band",range:[0,f],domain:y,...s}),_=(0,S.A)({domain:y,range:[0,T(A)],padding:s.paddingInner});return-(T(_)+6)},a=({data:r,width:s,height:f,options:h={},margin:y={left:0,right:20,bottom:0,top:0},...A})=>{const _=(0,u.useMemo)(()=>{const d=r.length>1,x={paddingInner:d?.3:.1,padding:d?.3:.1},p={zero:!0},g={...x,...h.yScale??{}},C={...p,...h.xScale??{}};return{yScale:g,xScale:C,labelPosition:h.labelPosition??(d?0:10),valueFormatter:h.valueFormatter??(b=>(0,E.qe)(b)),labelFormatter:h.labelFormatter??(b=>String(b)),valuePosition:h.valuePosition??s,yOffset:h.yOffset??P(r,g,f,d)}},[h,s,r,f]);return(0,j.jsx)(v.f,{orientation:"horizontal",gridVisibility:"none",data:r,width:s,height:f,margin:y,options:{axis:{y:{children:d=>(0,j.jsx)(D,{...d,data:r,yOffset:_.yOffset,labelPosition:_.labelPosition,valuePosition:_.valuePosition,labelFormatter:_.labelFormatter,valueFormatter:_.valueFormatter,LabelComponent:h.labelComponent,ValueComponent:h.valueComponent})},x:{children:()=>null}},xScale:_.xScale,yScale:_.yScale},...A})},n=r=>(0,u.useContext)(m.m)?(0,j.jsx)(a,{...r}):(0,j.jsx)(m.S,{children:(0,j.jsx)(a,{...r})});n.displayName="BarListChart";const o=(0,t.F)(n);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},legend:{defaultValue:null,description:`Legend configuration object for controlling legend appearance and behavior.
Includes orientation, position, alignment, shape, styling, and interactivity options.`,name:"legend",required:!1,type:{name:"ChartLegendConfig<SeriesData[]>"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{n.displayName="BarListChart",n.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:`Maximum diameter of the pie in pixels (pie and donut charts only).
The pie will shrink if the container is smaller than this value.
When omitted, the pie fills the available space.`,name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:`Legend configuration object for controlling legend appearance and behavior.
Includes orientation, position, alignment, shape, styling, and interactivity options.`,name:"legend",required:!1,type:{name:"ChartLegendConfig<SeriesData[]>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:n.__docgenInfo,name:"BarListChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"(M,O,l){l.d(O,{A:()=>S});function E(i){var c,u,m="";if(typeof i=="string"||typeof i=="number")m+=i;else if(typeof i=="object")if(Array.isArray(i)){var v=i.length;for(c=0;c<v;c++)i[c]&&(u=E(i[c]))&&(m&&(m+=" "),m+=u)}else for(u in i)i[u]&&(m&&(m+=" "),m+=u);return m}function e(){for(var i,c,u=0,m="",v=arguments.length;u<v;u++)(i=arguments[u])&&(c=E(i))&&(m&&(m+=" "),m+=c);return m}const S=e},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(M){var O=function(n){return l(n)&&!E(n)};function l(a){return!!a&&typeof a=="object"}function E(a){var n=Object.prototype.toString.call(a);return n==="[object RegExp]"||n==="[object Date]"||i(a)}var e=typeof Symbol=="function"&&Symbol.for,S=e?Symbol.for("react.element"):60103;function i(a){return a.$$typeof===S}function c(a){return Array.isArray(a)?[]:{}}function u(a,n){return n.clone!==!1&&n.isMergeableObject(a)?D(c(a),a,n):a}function m(a,n,o){return a.concat(n).map(function(r){return u(r,o)})}function v(a,n){if(!n.customMerge)return D;var o=n.customMerge(a);return typeof o=="function"?o:D}function t(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(n){return Object.propertyIsEnumerable.call(a,n)}):[]}function j(a){return Object.keys(a).concat(t(a))}function T(a,n){try{return n in a}catch{return!1}}function V(a,n){return T(a,n)&&!(Object.hasOwnProperty.call(a,n)&&Object.propertyIsEnumerable.call(a,n))}function B(a,n,o){var r={};return o.isMergeableObject(a)&&j(a).forEach(function(s){r[s]=u(a[s],o)}),j(n).forEach(function(s){V(a,s)||(T(a,s)&&o.isMergeableObject(n[s])?r[s]=v(s,o)(a[s],n[s],o):r[s]=u(n[s],o))}),r}function D(a,n,o){o=o||{},o.arrayMerge=o.arrayMerge||m,o.isMergeableObject=o.isMergeableObject||O,o.cloneUnlessOtherwiseSpecified=u;var r=Array.isArray(n),s=Array.isArray(a),f=r===s;return f?r?o.arrayMerge(a,n,o):B(a,n,o):u(n,o)}D.all=function(n,o){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(r,s){return D(r,s,o)},{})};var P=D;M.exports=P}}]);
