(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304,5718],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((b,l,o)=>{"use strict";o.d(l,{R:()=>r,x:()=>c});var u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},g=u.createContext(e);function r(i){const d=u.useContext(g);return u.useMemo(function(){return typeof i=="function"?i(d):{...d,...i}},[d,i])}function c(i){let d;return i.disableParentContext?d=typeof i.components=="function"?i.components(e):i.components||e:d=r(i.components),u.createElement(g.Provider,{value:d},i.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(b=>{function l(o){var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}l.keys=()=>[],l.resolve=l,l.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",b.exports=l}),"../../../node_modules/.pnpm/@wordpress+deprecated@4.30.0/node_modules/@wordpress/deprecated/build-module/index.js":((b,l,o)=>{"use strict";o.d(l,{A:()=>g});var u=o("../../../node_modules/.pnpm/@wordpress+hooks@4.30.0/node_modules/@wordpress/hooks/build-module/index.js");const e=Object.create(null);function g(r,c={}){const{since:i,version:d,alternative:m,plugin:t,link:S,hint:_}=c,T=t?` from ${t}`:"",O=i?` since version ${i}`:"",C=d?` and will be removed${T} in version ${d}`:"",y=m?` Please use ${m} instead.`:"",n=S?` See: ${S}`:"",a=_?` Note: ${_}`:"",s=`${r} is deprecated${O}${C}.${y}${n}${a}`;s in e||((0,u.Eo)("deprecated",r,c,s),console.warn(s),e[s]=!0)}}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((b,l,o)=>{"use strict";o.d(l,{A:()=>g});function u(r){var c,i,d="";if(typeof r=="string"||typeof r=="number")d+=r;else if(typeof r=="object")if(Array.isArray(r)){var m=r.length;for(c=0;c<m;c++)r[c]&&(i=u(r[c]))&&(d&&(d+=" "),d+=i)}else for(i in r)r[i]&&(d&&(d+=" "),d+=i);return d}function e(){for(var r,c,i=0,d="",m=arguments.length;i<m;i++)(r=arguments[i])&&(c=u(r))&&(d&&(d+=" "),d+=c);return d}const g=e}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(b=>{"use strict";var l=function(a){return o(a)&&!u(a)};function o(n){return!!n&&typeof n=="object"}function u(n){var a=Object.prototype.toString.call(n);return a==="[object RegExp]"||a==="[object Date]"||r(n)}var e=typeof Symbol=="function"&&Symbol.for,g=e?Symbol.for("react.element"):60103;function r(n){return n.$$typeof===g}function c(n){return Array.isArray(n)?[]:{}}function i(n,a){return a.clone!==!1&&a.isMergeableObject(n)?C(c(n),n,a):n}function d(n,a,s){return n.concat(a).map(function(p){return i(p,s)})}function m(n,a){if(!a.customMerge)return C;var s=a.customMerge(n);return typeof s=="function"?s:C}function t(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(a){return Object.propertyIsEnumerable.call(n,a)}):[]}function S(n){return Object.keys(n).concat(t(n))}function _(n,a){try{return a in n}catch{return!1}}function T(n,a){return _(n,a)&&!(Object.hasOwnProperty.call(n,a)&&Object.propertyIsEnumerable.call(n,a))}function O(n,a,s){var p={};return s.isMergeableObject(n)&&S(n).forEach(function(h){p[h]=i(n[h],s)}),S(a).forEach(function(h){T(n,h)||(_(n,h)&&s.isMergeableObject(a[h])?p[h]=m(h,s)(n[h],a[h],s):p[h]=i(a[h],s))}),p}function C(n,a,s){s=s||{},s.arrayMerge=s.arrayMerge||d,s.isMergeableObject=s.isMergeableObject||l,s.cloneUnlessOtherwiseSpecified=i;var p=Array.isArray(a),h=Array.isArray(n),M=p===h;return M?p?s.arrayMerge(n,a,s):O(n,a,s):i(a,s)}C.all=function(a,s){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(p,h){return C(p,h,s)},{})};var y=C;b.exports=y}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(b=>{function l(o){var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}l.keys=()=>[],l.resolve=l,l.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",b.exports=l}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(b=>{function l(o){var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}l.keys=()=>[],l.resolve=l,l.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",b.exports=l}),"../charts/src/components/bar-list-chart/stories/index.docs.mdx":((b,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>d});var u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),g=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=o("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),c=o("../charts/src/components/bar-list-chart/stories/index.stories.tsx");function i(m){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,g.R)(),...m.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{title:"JS Packages/Charts/Types/Bar List Chart",of:c}),`
`,(0,e.jsx)(t.h1,{id:"bar-list-chart",children:"Bar List Chart"}),`
`,(0,e.jsx)(t.p,{children:"A specialized horizontal bar chart component that displays data as a ranked list with labels and values positioned alongside the bars. Ideal for showing comparisons between categories or time periods."}),`
`,(0,e.jsx)(r.Hl,{of:c.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The BarListChart component extends the BarChart component to create a list-style visualization that combines horizontal bars with text labels and values. It automatically handles positioning of labels on the left and values on the right, making it perfect for dashboards and reports that need to display ranked data clearly."}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`import { BarListChart } from '@automattic/charts';

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
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-data",children:"Single Series Data"}),`
`,(0,e.jsx)(t.p,{children:"The simplest implementation displays a single series of data with automatic formatting:"}),`
`,(0,e.jsx)(r.Hl,{of:c.Default}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`const singleSeriesData = [
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
`,(0,e.jsx)(r.Hl,{of:c.MultiSeries}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`const multiSeriesData = [
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
`,(0,e.jsxs)(t.p,{children:["For detailed prop information and configuration options, see the ",(0,e.jsx)(t.a,{href:"#api-reference",children:"API Reference"})," section below."]}),`
`,(0,e.jsx)(t.h2,{id:"chart-types",children:"Chart Types"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-default",children:"Single Series (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Best for displaying a simple ranked list of items:"}),`
`,(0,e.jsx)(r.Hl,{of:c.Default}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Compact layout with minimal padding"}),`
`,(0,e.jsx)(t.li,{children:"Labels positioned closer to bars"}),`
`,(0,e.jsx)(t.li,{children:"Values displayed with compact number formatting"}),`
`,(0,e.jsx)(t.li,{children:"Ideal for product rankings, performance metrics"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-comparison",children:"Multi-Series Comparison"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for comparing data across time periods or categories:"}),`
`,(0,e.jsx)(r.Hl,{of:c.MultiSeries}),`
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
`,(0,e.jsx)(r.Hl,{of:c.CustomLabelComponent}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`import { Circle } from '@visx/shape';
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
`,(0,e.jsx)(r.Hl,{of:c.CustomValueComponent}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(t.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(t.p,{children:"BarListChart inherits styling from the chart theme system and automatically applies appropriate colors based on series groups. Multi-series charts use distinct colors for each series, while single-series charts use the primary theme color."}),`
`,(0,e.jsx)(t.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(t.h3,{id:"scale-configuration",children:"Scale Configuration"}),`
`,(0,e.jsx)(t.p,{children:"Customize the chart scales for precise control over bar sizing and spacing:"}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(r.kL,{language:"jsx",code:`<BarListChart
data={ data }
options={ {
	yOffset: -20,          // Vertical offset for text
	labelPosition: 10,     // Fixed label position
	valuePosition: 380,    // Fixed value position
} }
/>`}),`
`,(0,e.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(t.p,{children:"BarListChart inherits accessibility features from the underlying BarChart component, including keyboard navigation support when tooltips are enabled and proper ARIA attributes for screen readers."}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(t.h3,{id:"barlistchart",children:"BarListChart"}),`
`,(0,e.jsx)(t.p,{children:"A horizontal bar chart component optimized for list-style data presentation."}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Prop"}),(0,e.jsx)(t.th,{children:"Type"}),(0,e.jsx)(t.th,{children:"Default"}),(0,e.jsx)(t.th,{children:"Description"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"data"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"SeriesData[]"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"Required."})," Array of series data objects"]})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"width"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"number"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Chart width in pixels"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"height"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"number"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"400"})}),(0,e.jsx)(t.td,{children:"Chart height in pixels"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"margin"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"ChartMargin"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"{ left: 0, right: 20, bottom: 0, top: 0 }"})}),(0,e.jsx)(t.td,{children:"Chart margins"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"withTooltips"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"boolean"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"false"})}),(0,e.jsx)(t.td,{children:"Enable interactive tooltips"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"renderTooltip"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"Function"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"options"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"BarListChartOptions"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"{}"})}),(0,e.jsx)(t.td,{children:"Chart configuration options"})]})]})]}),`
`,(0,e.jsx)(t.h3,{id:"seriesdata-type",children:"SeriesData Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type SeriesData = {
	group: string;
	label: string;
	data: Array<{
		label: string;
		value: number;
	}>;
};
`})}),`
`,(0,e.jsx)(t.h3,{id:"barlistchartoptions-type",children:"BarListChartOptions Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type BarListChartOptions = {
	yScale?: Omit<ScaleOptions, 'type'>;
	xScale?: Omit<ScaleOptions, 'type'>;
	labelFormatter?: (value: string) => string;
	valueFormatter?: (value: number) => string;
	yOffset?: number;
	labelPosition?: number;
	valuePosition?: number;
	labelComponent?: ComponentType<RenderLabelProps>;
	valueComponent?: ComponentType<RenderValueProps>;
};
`})}),`
`,(0,e.jsx)(t.h3,{id:"renderlabelprops-type",children:"RenderLabelProps Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type RenderLabelProps = {
	textProps: TextProps;
	x: number;
	y: number;
	label: string;
	formatter: (value: string) => string;
};
`})}),`
`,(0,e.jsx)(t.h3,{id:"rendervalueprops-type",children:"RenderValueProps Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type RenderValueProps = {
	textProps: TextProps;
	x: number;
	y: number;
	value: number;
	data: SeriesData[];
	index: number;
	formatter: (value: number) => string;
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"migration-from-bar-chart",children:"Migration from Bar Chart"}),`
`,(0,e.jsx)(t.p,{children:"If you're currently using a horizontal BarChart for list-style data, BarListChart provides a more optimized experience:"}),`
`,(0,e.jsx)(r.kL,{language:"jsx",code:`
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
`]})]})}function d(m={}){const{wrapper:t}={...(0,g.R)(),...m.components};return t?(0,e.jsx)(t,{...m,children:(0,e.jsx)(i,{...m})}):i(m)}}),"../charts/src/components/bar-list-chart/stories/index.stories.tsx":((b,l,o)=>{"use strict";o.r(l),o.d(l,{CustomLabelComponent:()=>h,CustomValueComponent:()=>M,Default:()=>s,MultiSeries:()=>p,__namedExportsOrder:()=>B,default:()=>a});var u=o("../number-formatters/src/index.ts"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=o("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=o.n(g),c=["className","innerRef"];function i(){return i=Object.assign?Object.assign.bind():function(x){for(var f=1;f<arguments.length;f++){var j=arguments[f];for(var v in j)Object.prototype.hasOwnProperty.call(j,v)&&(x[v]=j[v])}return x},i.apply(this,arguments)}function d(x,f){if(x==null)return{};var j={},v=Object.keys(x),P,A;for(A=0;A<v.length;A++)P=v[A],!(f.indexOf(P)>=0)&&(j[P]=x[P]);return j}function m(x){var f=x.className,j=x.innerRef,v=d(x,c);return e.createElement("circle",i({ref:j,className:r()("visx-circle",f)},v))}var t=o("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),S=o("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),_=o("../charts/src/stories/chart-decorator.tsx"),T=o("../charts/src/stories/theme-config.tsx"),O=o("../charts/src/stories/sample-data/index.ts"),C=o("../charts/src/components/bar-list-chart/bar-list-chart.tsx"),y=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a={title:"JS Packages/Charts/Types/Bar List Chart",component:C.A,parameters:{layout:"centered"},decorators:[_.OI],argTypes:{..._.xo,...T.jW}},s={args:{withTooltips:!0,data:O.V_,containerWidth:"600px",containerHeight:"332px"}},p={args:{...s.args,data:O._v}},h={args:{...s.args,data:O.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:x,x:f,y:j,label:v,formatter:P})=>{const L=(0,S.p)().colors[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{cx:f+6,cy:j,r:8,fill:L}),(0,y.jsx)(t.A,{...x,textAnchor:"start",x:f+24,y:j,fontWeight:500,children:P(v)})]})}}}},M={args:{...s.args,data:O._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:x,x:f,y:j,value:v,formatter:P,data:A,index:L})=>{const w=A[0].data[L].value,D=A[1].data[L].value,E=D===0?0:((w-D)/D*100).toFixed(0);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.A,{...x,textAnchor:"end",x:f,y:j,dx:-50,fontWeight:500,children:P(v)}),(0,y.jsx)(t.A,{...x,textAnchor:"end",x:f,y:j,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(E)>0?"+":""}${E}%`})]})},valueFormatter:x=>`$${(0,u.qe)(x)}`}}},B=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct,
    containerWidth: '600px',
    containerHeight: '332px'
  }
}`,...s.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}})}]);
