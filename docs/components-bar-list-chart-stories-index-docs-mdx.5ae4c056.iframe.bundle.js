(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4304,5718],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((C,c,a)=>{"use strict";a.d(c,{R:()=>l,x:()=>p});var f=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},y=f.createContext(e);function l(d){const s=f.useContext(y);return f.useMemo(function(){return typeof d=="function"?d(s):{...s,...d}},[s,d])}function p(d){let s;return d.disableParentContext?s=typeof d.components=="function"?d.components(e):d.components||e:s=l(d.components),f.createElement(y.Provider,{value:s},d.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(C=>{function c(a){var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}c.keys=()=>[],c.resolve=c,c.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",C.exports=c}),"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":((C,c,a)=>{"use strict";a.d(c,{A:()=>y});function f(l){var p,d,s="";if(typeof l=="string"||typeof l=="number")s+=l;else if(typeof l=="object")if(Array.isArray(l)){var n=l.length;for(p=0;p<n;p++)l[p]&&(d=f(l[p]))&&(s&&(s+=" "),s+=d)}else for(d in l)l[d]&&(s&&(s+=" "),s+=d);return s}function e(){for(var l,p,d=0,s="",n=arguments.length;d<n;d++)(l=arguments[d])&&(p=f(l))&&(s&&(s+=" "),s+=p);return s}const y=e}),"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":(C=>{"use strict";var c=function(o){return a(o)&&!f(o)};function a(r){return!!r&&typeof r=="object"}function f(r){var o=Object.prototype.toString.call(r);return o==="[object RegExp]"||o==="[object Date]"||l(r)}var e=typeof Symbol=="function"&&Symbol.for,y=e?Symbol.for("react.element"):60103;function l(r){return r.$$typeof===y}function p(r){return Array.isArray(r)?[]:{}}function d(r,o){return o.clone!==!1&&o.isMergeableObject(r)?j(p(r),r,o):r}function s(r,o,i){return r.concat(o).map(function(x){return d(x,i)})}function n(r,o){if(!o.customMerge)return j;var i=o.customMerge(r);return typeof i=="function"?i:j}function t(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(o){return Object.propertyIsEnumerable.call(r,o)}):[]}function g(r){return Object.keys(r).concat(t(r))}function m(r,o){try{return o in r}catch{return!1}}function u(r,o){return m(r,o)&&!(Object.hasOwnProperty.call(r,o)&&Object.propertyIsEnumerable.call(r,o))}function h(r,o,i){var x={};return i.isMergeableObject(r)&&g(r).forEach(function(b){x[b]=d(r[b],i)}),g(o).forEach(function(b){u(r,b)||(m(r,b)&&i.isMergeableObject(o[b])?x[b]=n(b,i)(r[b],o[b],i):x[b]=d(o[b],i))}),x}function j(r,o,i){i=i||{},i.arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||c,i.cloneUnlessOtherwiseSpecified=d;var x=Array.isArray(o),b=Array.isArray(r),D=x===b;return D?x?i.arrayMerge(r,o,i):h(r,o,i):d(o,i)}j.all=function(o,i){if(!Array.isArray(o))throw new Error("first argument should be an array");return o.reduce(function(x,b){return j(x,b,i)},{})};var v=j;C.exports=v}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(C=>{function c(a){var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}c.keys=()=>[],c.resolve=c,c.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",C.exports=c}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(C=>{function c(a){var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}c.keys=()=>[],c.resolve=c,c.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",C.exports=c}),"../charts/src/components/bar-list-chart/stories/index.docs.mdx":((C,c,a)=>{"use strict";a.r(c),a.d(c,{default:()=>s});var f=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=a("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),p=a("../charts/src/components/bar-list-chart/stories/index.stories.tsx");function d(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,y.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"JS Packages/Charts/Types/Bar List Chart",of:p}),`
`,(0,e.jsx)(t.h1,{id:"bar-list-chart",children:"Bar List Chart"}),`
`,(0,e.jsx)(t.p,{children:"A specialized horizontal bar chart component that displays data as a ranked list with labels and values positioned alongside the bars. Ideal for showing comparisons between categories or time periods."}),`
`,(0,e.jsx)(l.Hl,{of:p.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The BarListChart component extends the BarChart component to create a list-style visualization that combines horizontal bars with text labels and values. It automatically handles positioning of labels on the left and values on the right, making it perfect for dashboards and reports that need to display ranked data clearly."}),`
`,(0,e.jsx)(l.kL,{language:"jsx",code:`import { BarListChart } from '@automattic/charts';

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
`,(0,e.jsxs)(t.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-types-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-data",children:"Single Series Data"}),`
`,(0,e.jsx)(t.p,{children:"The simplest implementation displays a single series of data with automatic formatting:"}),`
`,(0,e.jsx)(l.Hl,{of:p.Default}),`
`,(0,e.jsx)(l.kL,{language:"jsx",code:`const singleSeriesData = [
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
`,(0,e.jsx)(l.Hl,{of:p.MultiSeries}),`
`,(0,e.jsx)(l.kL,{language:"jsx",code:`const multiSeriesData = [
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
`,(0,e.jsxs)(t.p,{children:["For detailed prop information and configuration options, see the ",(0,e.jsx)(t.a,{href:"./?path=/docs/js-packages-charts-types-bar-list-chart-api-reference--docs",children:"Bar List Chart API Reference"}),"."]}),`
`,(0,e.jsx)(t.h2,{id:"chart-types",children:"Chart Types"}),`
`,(0,e.jsx)(t.h3,{id:"single-series-default",children:"Single Series (Default)"}),`
`,(0,e.jsx)(t.p,{children:"Best for displaying a simple ranked list of items:"}),`
`,(0,e.jsx)(l.Hl,{of:p.Default}),`
`,(0,e.jsx)(t.p,{children:"Characteristics:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Compact layout with minimal padding"}),`
`,(0,e.jsx)(t.li,{children:"Labels positioned closer to bars"}),`
`,(0,e.jsx)(t.li,{children:"Values displayed with compact number formatting"}),`
`,(0,e.jsx)(t.li,{children:"Ideal for product rankings, performance metrics"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"multi-series-comparison",children:"Multi-Series Comparison"}),`
`,(0,e.jsx)(t.p,{children:"Perfect for comparing data across time periods or categories:"}),`
`,(0,e.jsx)(l.Hl,{of:p.MultiSeries}),`
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
`,(0,e.jsx)(l.Hl,{of:p.CustomLabelComponent}),`
`,(0,e.jsx)(l.kL,{language:"jsx",code:`import { Circle } from '@visx/shape';
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
`,(0,e.jsx)(l.Hl,{of:p.CustomValueComponent}),`
`,(0,e.jsx)(l.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:`<BarListChart
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:`
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
`]})]})}function s(n={}){const{wrapper:t}={...(0,y.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}}),"../charts/src/components/bar-list-chart/stories/index.stories.tsx":((C,c,a)=>{"use strict";a.r(c),a.d(c,{CustomLabelComponent:()=>b,CustomValueComponent:()=>D,Default:()=>i,MultiSeries:()=>x,__namedExportsOrder:()=>w,default:()=>o});var f=a("../number-formatters/src/index.ts"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=a.n(y),p=["className","innerRef"];function d(){return d=Object.assign?Object.assign.bind():function(_){for(var S=1;S<arguments.length;S++){var T=arguments[S];for(var O in T)Object.prototype.hasOwnProperty.call(T,O)&&(_[O]=T[O])}return _},d.apply(this,arguments)}function s(_,S){if(_==null)return{};var T={},O=Object.keys(_),A,P;for(P=0;P<O.length;P++)A=O[P],!(S.indexOf(A)>=0)&&(T[A]=_[A]);return T}function n(_){var S=_.className,T=_.innerRef,O=s(_,p);return e.createElement("circle",d({ref:T,className:l()("visx-circle",S)},O))}var t=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),g=a("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts"),m=a("../charts/src/stories/chart-decorator.tsx"),u=a("../charts/src/stories/theme-config.tsx"),h=a("../charts/src/stories/sample-data/index.ts"),j=a("../charts/src/components/bar-list-chart/bar-list-chart.tsx"),v=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o={title:"JS Packages/Charts/Types/Bar List Chart",component:j.A,parameters:{layout:"centered"},decorators:[m.OI],argTypes:{...m.xo,...u.jW}},i={args:{withTooltips:!0,data:h.V_,containerWidth:"600px",containerHeight:"332px"}},x={args:{...i.args,data:h._v}},b={args:{...i.args,data:h.V_,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},labelComponent:({textProps:_,x:S,y:T,label:O,formatter:A})=>{const V=(0,g.p)().colors[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{cx:S+6,cy:T,r:8,fill:V}),(0,v.jsx)(t.A,{..._,textAnchor:"start",x:S+24,y:T,fontWeight:500,children:A(O)})]})}}}},D={args:{...i.args,data:h._v,width:450,margin:{top:0,right:100,bottom:0,left:0},options:{xScale:{},yScale:{},valueComponent:({textProps:_,x:S,y:T,value:O,formatter:A,data:P,index:V})=>{const L=P[0].data[V].value,E=P[1].data[V].value,M=E===0?0:((L-E)/E*100).toFixed(0);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.A,{..._,textAnchor:"end",x:S,y:T,dx:-50,fontWeight:500,children:A(O)}),(0,v.jsx)(t.A,{..._,textAnchor:"end",x:S,y:T,dx:-10,fill:"#008A20",fontWeight:500,children:`${Number(M)>0?"+":""}${M}%`})]})},valueFormatter:_=>`$${(0,f.qe)(_)}`}}},w=["Default","MultiSeries","CustomLabelComponent","CustomValueComponent"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    withTooltips: true,
    data: salesByProduct,
    containerWidth: '600px',
    containerHeight: '332px'
  }
}`,...i.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: salesByChannel
  }
}`,...x.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}}),"../charts/src/components/tooltip/accessible-tooltip.tsx":((C,c,a)=>{"use strict";a.d(c,{JZ:()=>d,OZ:()=>p});var f=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/components/Tooltip.js"),e=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/context/TooltipContext.js"),y=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=({renderTooltip:s,selectedIndex:n,tooltipRef:t,keyboardFocusedClassName:g,series:m=[],mode:u="group",...h})=>{const j=(0,y.useContext)(e.A),v=(0,y.useMemo)(()=>{if(u!=="individual")return[];if(m.length===0)return[];const o=Math.max(...m.map(x=>x.data.length)),i=[];for(let x=0;x<o;x++)for(let b=0;b<m.length;b++){const D=m[b];x<D.data.length&&i.push({datum:D.data[x],seriesLabel:D.label,seriesIndex:b,dataPointIndex:x})}return i},[m,u]);(0,y.useEffect)(()=>{if(n===void 0){j?.hideTooltip();return}if(u==="group")m.forEach((o,i)=>{if(n<o.data.length){const x=o.data[n];j?.showTooltip({datum:x,key:o.label,index:i})}});else if(u==="individual"&&n<v.length){const o=v[n];j?.showTooltip({datum:o.datum,key:o.seriesLabel,index:o.seriesIndex})}},[n,v,m]);const r=(0,y.useMemo)(()=>{if(s)return o=>{const i=s(o);return n!==void 0?(0,l.jsx)("div",{ref:t,tabIndex:-1,role:"tooltip","aria-atomic":"true",className:g,"data-testid":`chart-tooltip-${n}`,children:i},`chart-tooltip-${n}`):(0,l.jsx)("div",{role:"tooltip","aria-live":"polite",children:i})}},[s,n,t,g]);return(0,l.jsx)(f.A,{...h,renderTooltip:r})},d=({selectedIndex:s,setSelectedIndex:n,isNavigating:t,setIsNavigating:g,chartRef:m,totalPoints:u})=>{const h=(0,y.useCallback)(o=>{o&&s!==void 0&&o.focus()},[s]),j=(0,y.useCallback)(()=>{!t&&s!==void 0&&n(0)},[t,s,n]),v=(0,y.useCallback)(()=>{g(!1)},[g]),r=(0,y.useCallback)(o=>{if(u===0)return;if(o.key==="Tab"){m.current?.focus(),n(void 0),g(!1);return}const i=s===void 0?-1:s;if(i+1>=u&&["ArrowRight"].includes(o.key)){m.current?.focus(),n(void 0),g(!1);return}o.preventDefault(),["ArrowRight"].includes(o.key)?(g(!0),n((i+1)%u)):["ArrowLeft"].includes(o.key)?(g(!0),n((i-1+u)%u)):o.key==="Escape"&&(n(void 0),g(!1),m.current?.focus())},[u,s,n,g,m]);return{tooltipRef:h,onChartFocus:j,onChartBlur:v,onChartKeyDown:r}};try{p.displayName="AccessibleTooltip",p.__docgenInfo={description:"",displayName:"AccessibleTooltip",props:{renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"(element: HTMLDivElement) => void"}},keyboardFocusedClassName:{defaultValue:null,description:"",name:"keyboardFocusedClassName",required:!1,type:{name:"string"}},tooltipData:{defaultValue:null,description:`Flattened tooltip data prepared by parent component
Each index corresponds to one tooltip to show`,name:"tooltipData",required:!1,type:{name:"FlattenedTooltipData[]"}},series:{defaultValue:{value:"[]"},description:`For line charts: series data to show all series at selected data point
When provided, shows all series instead of individual tooltips`,name:"series",required:!1,type:{name:"SeriesData[]"}},mode:{defaultValue:{value:"group"},description:`Whether to combine tooltip information from multiple series into a single tooltip. This is useful for line charts.
Or to show individual tooltips for each series. This is useful for bar charts.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"group"'},{value:'"individual"'}]}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<DataPointDate>) => React.ReactNode"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"]={docgenInfo:p.__docgenInfo,name:"AccessibleTooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#AccessibleTooltip"})}catch{}try{d.displayName="useKeyboardNavigation",d.__docgenInfo={description:"",displayName:"useKeyboardNavigation",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},setSelectedIndex:{defaultValue:null,description:"",name:"setSelectedIndex",required:!0,type:{name:"(index: number) => void"}},isNavigating:{defaultValue:null,description:"",name:"isNavigating",required:!0,type:{name:"boolean"}},setIsNavigating:{defaultValue:null,description:"",name:"setIsNavigating",required:!0,type:{name:"(navigating: boolean) => void"}},chartRef:{defaultValue:null,description:"",name:"chartRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},totalPoints:{defaultValue:null,description:"Total number of navigation points (length of tooltip data array)",name:"totalPoints",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"]={docgenInfo:d.__docgenInfo,name:"useKeyboardNavigation",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#useKeyboardNavigation"})}catch{}try{accessibletooltip.displayName="accessibletooltip",accessibletooltip.__docgenInfo={description:`This is a wrapper component which bails early if tooltip is not visible.
If scroll detection is enabled in UseTooltipPortalOptions, this avoids re-rendering
the component on every scroll. If many charts with Tooltips are rendered on a page,
this also avoids creating many resize observers / hitting browser limits.`,displayName:"accessibletooltip",props:{renderTooltip:{defaultValue:null,description:`When TooltipContext.tooltipOpen=true, this function is invoked and if the
return value is non-null, its content is rendered inside the tooltip container.
Content will be rendered in an HTML parent.`,name:"renderTooltip",required:!0,type:{name:"(params: RenderTooltipParams<Datum>) => React.ReactNode"}},renderGlyph:{defaultValue:null,description:"Function which handles rendering glyphs.",name:"renderGlyph",required:!1,type:{name:"(params: RenderTooltipGlyphProps<Datum>) => React.ReactNode"}},snapTooltipToDatumX:{defaultValue:null,description:"Whether to snap tooltip + crosshair x-coord to the nearest Datum x-coord instead of the event x-coord.",name:"snapTooltipToDatumX",required:!1,type:{name:"boolean"}},snapTooltipToDatumY:{defaultValue:null,description:"Whether to snap tooltip + crosshair y-coord to the nearest Datum y-coord instead of the event y-coord.",name:"snapTooltipToDatumY",required:!1,type:{name:"boolean"}},showVerticalCrosshair:{defaultValue:null,description:"Whether to show a vertical line at tooltip position.",name:"showVerticalCrosshair",required:!1,type:{name:"boolean"}},showHorizontalCrosshair:{defaultValue:null,description:"Whether to show a horizontal line at tooltip position.",name:"showHorizontalCrosshair",required:!1,type:{name:"boolean"}},showDatumGlyph:{defaultValue:null,description:"Whether to show a glyph at the tooltip position for the (single) nearest Datum.",name:"showDatumGlyph",required:!1,type:{name:"boolean"}},showSeriesGlyphs:{defaultValue:null,description:"Whether to show a glyph for the nearest Datum in each series.",name:"showSeriesGlyphs",required:!1,type:{name:"boolean"}},verticalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"verticalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},horizontalCrosshairStyle:{defaultValue:null,description:"Optional styles for the vertical crosshair, if visible.",name:"horizontalCrosshairStyle",required:!1,type:{name:"React.SVGProps<SVGLineElement>"}},glyphStyle:{defaultValue:null,description:"Optional styles for the point, if visible.",name:"glyphStyle",required:!1,type:{name:"React.SVGProps<SVGCircleElement>"}},resizeObserverPolyfill:{defaultValue:null,description:`Tooltip depends on ResizeObserver, which may be polyfilled globally,
passed to XYChart, or injected into this component.`,name:"resizeObserverPolyfill",required:!1,type:{name:"new (cb: ResizeObserverCallback) => ResizeObserver"}},className:{defaultValue:null,description:"Optional className to apply to the Tooltip in addition to `visx-tooltip`.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Styles to apply, unless `unstyled=true`.",name:"style",required:!1,type:{name:"React.CSSProperties"}},offsetLeft:{defaultValue:null,description:"Offset the `left` position of the Tooltip by this margin.",name:"offsetLeft",required:!1,type:{name:"number"}},offsetTop:{defaultValue:null,description:"Offset the `top` position of the Tooltip by this margin.",name:"offsetTop",required:!1,type:{name:"number"}},applyPositionStyle:{defaultValue:null,description:"Applies position: 'absolute' for tooltips to correctly position themselves\nwhen `unstyled=true`. In a future major release this will be the default behavior.",name:"applyPositionStyle",required:!1,type:{name:"boolean"}},unstyled:{defaultValue:null,description:"Whether to omit applying any style, except `left` / `top`.\nIn most cases if this is `true` a developer must do one of the following\nfor positioning to work correctly:\n- set `applyPositionStyle=true`\n- create a CSS selector like: `.visx-tooltip { position: 'absolute' }`",name:"unstyled",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"React to nested scroll changes, don't use this if you know your view is static",name:"scroll",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Optional z-index to set on the Portal.",name:"zIndex",required:!1,type:{name:"string | number"}},debounce:{defaultValue:null,description:"Debounce resize or scroll events in milliseconds (needed for positioning)",name:"debounce",required:!1,type:{name:"number | { scroll: number; resize: number; }"}},detectBounds:{defaultValue:null,description:"whether TooltipWithBounds should be used to auto-detect (page) boundaries and reposition itself.",name:"detectBounds",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"]={docgenInfo:accessibletooltip.__docgenInfo,name:"accessibletooltip",path:"../charts/src/components/tooltip/accessible-tooltip.tsx#accessibletooltip"})}catch{}}),"../charts/src/hooks/use-chart-data-transform.ts":((C,c,a)=>{"use strict";a.d(c,{E:()=>s});var f=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js"),y=a("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js"),l=a("../../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parse.js");const p=n=>/T.*[Z]$|T.*[+-]\d{2}:?\d{2}$/.test(n),d=n=>{const t=n.trim();if(p(t)){const m=(0,e.H)(t);return(0,y.f)(m)?m:new Date(NaN)}const g=["yyyy-MM-dd","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd'T'HH:mm:ss","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm"];for(const m of g){const u=(0,l.qg)(t,m,new Date);if((0,y.f)(u))return u}return new Date(NaN)},s=n=>(0,f.useMemo)(()=>{const t=n?.[0]?.data?.[0];return t&&("date"in t||"dateString"in t)?n.map(m=>({...m,data:m.data.map(u=>{let h;return"date"in u&&u.date?h=u.date:"dateString"in u&&u.dateString&&(h=d(u.dateString)),{...u,date:h}}).sort((u,h)=>!u.date||!h.date?0:u.date.getTime()-h.date.getTime())})):n},[n])}),"../charts/src/hooks/use-chart-margin.tsx":((C,c,a)=>{"use strict";a.d(c,{a:()=>d});var f=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),e=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),y=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/util/getStringWidth.js");const p=(s,n,t)=>{const g=s.map(u=>n(u,0,[])),m=g.reduce((u,h)=>u.length>=h.length?u:h,g[0]);return(0,l.A)(m,t)},d=(s,n,t,g,m=!1)=>{const u=(0,y.useMemo)(()=>{const h=t.flatMap(o=>o.data);if(m)return h.map(o=>o.label||n.axis?.y?.tickFormat(o.date.getTime(),0,[]));const j=Math.min(...h.map(o=>o.value)),v=Math.max(...h.map(o=>o.value)),r=(0,f.A)({...n.yScale,domain:[j,v],range:[s,0]});return(0,e.A)(r,n.axis?.y?.numTicks)},[n,t,s,m]);return(0,y.useMemo)(()=>{const h={top:10,right:20,bottom:20,left:20},j=40,v=n.axis?.y?.orientation,r=v==="right"?g.axisStyles.y.right:g.axisStyles.y.left,i=(p(u,n.axis?.y?.tickFormat,r.axisLabel)??j)+(r?.tickLength??0);return v==="right"?h.right=i:h.left=i,n.axis?.x?.orientation==="top"&&(h.top=20,h.bottom=10),h},[n,g,u])}}),"../charts/src/hooks/use-xychart-theme.ts":((C,c,a)=>{"use strict";a.d(c,{O:()=>l});var f=a("../../../node_modules/.pnpm/@visx+xychart@3.12.0_@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3._4b886f56cd4cf4d0010e6b97cb6a93f7/node_modules/@visx/xychart/esm/theme/buildChartTheme.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=a("../charts/src/providers/chart-context/hooks/use-global-charts-theme.ts");const l=p=>{const d=(0,y.p)();return(0,e.useMemo)(()=>{const s=(p??[]).map(n=>n.options?.stroke).filter(n=>!!n);return(0,f.A)({...d,colors:[...s,...d.colors??[]]})},[d,p])}})}]);
