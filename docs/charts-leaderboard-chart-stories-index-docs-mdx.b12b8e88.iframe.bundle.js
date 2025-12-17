(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[596],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(d=>{function n(s){var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",d.exports=n}),"../charts/src/charts/leaderboard-chart/stories/index.docs.mdx":((d,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>h});var i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.0.8_@test_ca37a3433c216fd610726ebbc5860d83/node_modules/@storybook/addon-docs/dist/blocks.js"),t=s("../charts/src/charts/leaderboard-chart/stories/index.stories.tsx");function c(o){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{title:"JS Packages/Charts Library/Charts/Leaderboard Chart",of:t}),`
`,(0,e.jsx)(a.h1,{id:"leaderboard-chart",children:"Leaderboard Chart"}),`
`,(0,e.jsx)(a.p,{children:"A flexible and accessible leaderboard chart component for displaying ranked data with WordPress ProgressBar components and optional comparison values."}),`
`,(0,e.jsx)(r.Hl,{of:t.Default}),`
`,(0,e.jsx)(a.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(a.p,{children:"The Leaderboard Chart component provides a clean, responsive visualization for displaying ranked data with optional comparison values. Built with WordPress components, it supports customizable colors, flexible formatting, and comprehensive accessibility features:"}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`import { LeaderboardChart } from '@automattic/charts';

<LeaderboardChart
	data={data}
	withComparison={true}
	primaryColor="#3858E9"
	secondaryColor="#66BDFF"
/>`}),`
`,(0,e.jsx)(a.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(a.p,{children:["For detailed information about component props, types, and method signatures, see the ",(0,e.jsx)(a.a,{href:"./?path=/docs/js-packages-charts-library-charts-leaderboard-chart-api-reference--docs",children:"Leaderboard Chart API Reference"}),"."]}),`
`,(0,e.jsx)(a.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(a.h3,{id:"simple-leaderboard-chart",children:"Simple Leaderboard Chart"}),`
`,(0,e.jsxs)(a.p,{children:["The simplest leaderboard chart requires only a ",(0,e.jsx)(a.code,{children:"data"})," prop with pre-processed leaderboard entries:"]}),`
`,(0,e.jsx)(r.Hl,{of:t.WithoutComparison}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={[
		{
			id: 'direct',
			label: 'Direct',
			currentValue: 12500,
			previousValue: 10000,
			currentShare: 100,
			previousShare: 80,
			delta: 25,
		},
		{
			id: 'social',
			label: 'Social Media',
			currentValue: 8750,
			previousValue: 9500,
			currentShare: 70,
			previousShare: 76,
			delta: -7.9,
		}
	]}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"data"})}),": Array of LeaderboardEntry objects with pre-processed data including shares and deltas"]}),`
`]}),`
`,(0,e.jsx)(a.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsx)(a.p,{children:(0,e.jsx)(a.strong,{children:"Visual Features:"})}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"withComparison"})}),": Show comparison data (previous period bars and delta values) - ",(0,e.jsx)(a.code,{children:"false"})," by default"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"withOverlayLabel"})}),": Overlay labels on top of the bars instead of beside them - ",(0,e.jsx)(a.code,{children:"false"})," by default"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"primaryColor"})}),": Primary color for current period bars (theme default)"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"secondaryColor"})}),": Secondary color for comparison period bars (theme default)"]}),`
`]}),`
`,(0,e.jsx)(a.p,{children:(0,e.jsx)(a.strong,{children:"Data Formatting:"})}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"valueFormatter"})}),": Custom formatter function for values - defaults to ",(0,e.jsx)(a.code,{children:"formatMetricValue"})," with compact notation"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"deltaFormatter"})}),": Custom formatter function for delta values - defaults to percentage formatting"]}),`
`]}),`
`,(0,e.jsx)(a.p,{children:(0,e.jsx)(a.strong,{children:"State & Styling:"})}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"loading"})}),": Whether the chart is in loading state - ",(0,e.jsx)(a.code,{children:"false"})," by default"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"className"})}),": Additional CSS class name for the chart container"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:(0,e.jsx)(a.code,{children:"style"})}),": Custom styling including CSS custom properties for border radius"]}),`
`]}),`
`,(0,e.jsxs)(a.p,{children:["For detailed prop information, type definitions, and examples, see the ",(0,e.jsx)(a.a,{href:"./?path=/docs/js-packages-charts-library-charts-leaderboard-chart-api-reference--docs",children:"Leaderboard Chart API Reference"}),"."]}),`
`,(0,e.jsx)(a.h2,{id:"comparison-features",children:"Comparison Features"}),`
`,(0,e.jsx)(a.h3,{id:"with-comparison-data",children:"With Comparison Data"}),`
`,(0,e.jsx)(a.p,{children:"Display both current and previous period data with delta indicators:"}),`
`,(0,e.jsx)(r.Hl,{of:t.Default}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	withComparison={true}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"without-comparison",children:"Without Comparison"}),`
`,(0,e.jsx)(a.p,{children:"Focus on current period data only:"}),`
`,(0,e.jsx)(r.Hl,{of:t.WithoutComparison}),`
`,(0,e.jsx)(a.h3,{id:"negative-growth-handling",children:"Negative Growth Handling"}),`
`,(0,e.jsx)(a.p,{children:"The chart automatically handles negative growth with appropriate color coding:"}),`
`,(0,e.jsx)(r.Hl,{of:t.NegativeGrowth}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`// Data with negative deltas will show in warning colors
const dataWithDeclines = [
	{
		id: 'declining',
		label: 'Declining Channel',
		currentValue: 8000,
		previousValue: 10000,
		currentShare: 80,
		previousShare: 100,
		delta: -20, // Negative growth
	}
];`}),`
`,(0,e.jsx)(a.h2,{id:"data-formatting",children:"Data Formatting"}),`
`,(0,e.jsx)(a.h3,{id:"custom-value-formatting",children:"Custom Value Formatting"}),`
`,(0,e.jsxs)(a.p,{children:["Customize how values are displayed using the ",(0,e.jsx)(a.code,{children:"valueFormatter"})," prop:"]}),`
`,(0,e.jsx)(r.Hl,{of:t.CurrencyFormatting}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	withComparison={true}
	valueFormatter={(value) =>
		formatMetricValue(value, 'currency', {
			useMultipliers: true,
			decimals: 1,
		})
	}
	deltaFormatter={(value) =>
		formatMetricValue(value / 100, 'average', {
			decimals: 0,
		})
	}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"number-formatting",children:"Number Formatting"}),`
`,(0,e.jsx)(a.p,{children:"For non-currency values, use number formatting:"}),`
`,(0,e.jsx)(r.Hl,{of:t.NumberFormatting}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	valueFormatter={(value) =>
		formatMetricValue(value, 'number', {
			useMultipliers: false,
			decimals: 0,
		})
	}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"advanced-formatting",children:"Advanced Formatting"}),`
`,(0,e.jsx)(a.p,{children:"Handle different value ranges with conditional formatting:"}),`
`,(0,e.jsx)(r.Hl,{of:t.AdvancedFormatting}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={largeValues}
	valueFormatter={(value) => {
		if (value >= 1000000) {
			return formatMetricValue(value, 'currency', {
				useMultipliers: true,
				decimals: 1,
			});
		}
		return formatMetricValue(value, 'currency', {
			useMultipliers: false,
			decimals: 0,
		});
	}}
	deltaFormatter={(value) =>
		formatMetricValue(value / 100, 'average', {
			decimals: 1,
			signDisplay: 'always',
		})
	}
/>`}),`
`,(0,e.jsx)(a.h2,{id:"visual-customization",children:"Visual Customization"}),`
`,(0,e.jsx)(a.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsx)(a.p,{children:"Override default theme colors with custom primary and secondary colors:"}),`
`,(0,e.jsx)(r.Hl,{of:t.CustomColors}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	withComparison={true}
	primaryColor="red"
	secondaryColor="green"
/>`}),`
`,(0,e.jsx)(a.h3,{id:"custom-labels",children:"Custom Labels"}),`
`,(0,e.jsx)(a.p,{children:"Use React components as labels for rich content display:"}),`
`,(0,e.jsx)(r.Hl,{of:t.CustomLabel}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`const CustomLabelComponent = ({ label, imageColor }) => (
	<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
		<img
			src={\`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='\${encodeURIComponent(imageColor)}'/></svg>\`}
			alt="icon"
			style={{ width: '28px', height: '28px', borderRadius: '4px' }}
		/>
		<span>{label}</span>
	</div>
);

<LeaderboardChart
	data={dataWithImages.map(entry => ({
		...entry,
		label: <CustomLabelComponent label={entry.label} imageColor={entry.imageColor} />
	}))}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"overlay-labels",children:"Overlay Labels"}),`
`,(0,e.jsx)(a.p,{children:"Position labels on top of bars for a more compact display:"}),`
`,(0,e.jsx)(r.Hl,{of:t.WithOverlayLabel}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	withOverlayLabel={true}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"advanced-overlay-styling",children:"Advanced Overlay Styling"}),`
`,(0,e.jsx)(a.p,{children:"Combine overlay labels with custom styling and transparent colors:"}),`
`,(0,e.jsx)(r.Hl,{of:t.OverlayLabelWithImage}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={richLabelData}
	withComparison={true}
	withOverlayLabel={true}
	primaryColor="rgba(56, 88, 233, 0.08)" // Semi-transparent
	style={{
		'--a8c--charts--leaderboard--bar--border-radius': '4px',
		fontFamily: '"SF Pro Text", sans-serif',
	}}
/>`}),`
`,(0,e.jsx)(a.h2,{id:"legend-configuration",children:"Legend Configuration"}),`
`,(0,e.jsx)(a.h3,{id:"basic-legend",children:"Basic Legend"}),`
`,(0,e.jsx)(a.p,{children:"Display a legend to help users understand the data visualization:"}),`
`,(0,e.jsx)(r.Hl,{of:t.WithLegend}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	withComparison={true}
	showLegend={true}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"custom-legend-labels",children:"Custom Legend Labels"}),`
`,(0,e.jsx)(a.p,{children:"Customize legend labels with specific date ranges or descriptive text:"}),`
`,(0,e.jsx)(r.Hl,{of:t.CustomLegendLabels}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	withComparison={true}
	showLegend={true}
	legendLabels={{
		primary: 'Aug 11-Sep 9, 2025',
		comparison: 'Jul 11-Aug 11, 2025',
	}}
/>`}),`
`,(0,e.jsx)(a.p,{children:(0,e.jsx)(a.strong,{children:"Legend Configuration Options:"})}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsx)(a.li,{children:"Control legend positioning, alignment, and visual appearance"}),`
`,(0,e.jsx)(a.li,{children:"Customize legend shapes and sizes"}),`
`,(0,e.jsx)(a.li,{children:"Add custom labels for different time periods or data series"}),`
`]}),`
`,(0,e.jsxs)(a.p,{children:["See the ",(0,e.jsx)(a.a,{href:"./?path=/docs/js-packages-charts-library-charts-leaderboard-chart-api-reference--docs",children:"API Reference"})," for detailed prop information."]}),`
`,(0,e.jsx)(a.h2,{id:"data-states",children:"Data States"}),`
`,(0,e.jsx)(a.h3,{id:"loading-state",children:"Loading State"}),`
`,(0,e.jsx)(a.p,{children:"Display loading indicator while data is being fetched:"}),`
`,(0,e.jsx)(r.Hl,{of:t.Loading}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	loading={true}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"empty-data",children:"Empty Data"}),`
`,(0,e.jsx)(a.p,{children:"Gracefully handle empty data arrays:"}),`
`,(0,e.jsx)(r.Hl,{of:t.EmptyData}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={[]}
	withComparison={true}
/>`}),`
`,(0,e.jsx)(a.h3,{id:"small-datasets",children:"Small Datasets"}),`
`,(0,e.jsx)(a.p,{children:"Handle minimal datasets effectively:"}),`
`,(0,e.jsx)(r.Hl,{of:t.SmallDataset}),`
`,(0,e.jsx)(a.h3,{id:"large-values",children:"Large Values"}),`
`,(0,e.jsx)(a.p,{children:"Automatically format large numeric values:"}),`
`,(0,e.jsx)(r.Hl,{of:t.LargeValues}),`
`,(0,e.jsx)(a.h2,{id:"data-preparation",children:"Data Preparation"}),`
`,(0,e.jsx)(a.h3,{id:"transforming-raw-data",children:"Transforming Raw Data"}),`
`,(0,e.jsx)(a.p,{children:"The LeaderboardChart expects pre-processed data. You'll need to transform your raw data into the required format:"}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`// Transform your raw data into LeaderboardEntry format
function transformRawData(rawData) {
	const maxValue = Math.max(...rawData.map(item => item.current_period.value));

	return rawData.map(item => ({
		id: item.id,
		label: item.name,
		currentValue: item.current_period.value,
		previousValue: item.previous_period.value,
		currentShare: (item.current_period.value / maxValue) * 100,
		previousShare: (item.previous_period.value / maxValue) * 100,
		delta: ((item.current_period.value - item.previous_period.value) / item.previous_period.value) * 100,
	}));
}

function ProcessedDataChart() {
	const processedData = transformRawData(rawData);

	return (
		<LeaderboardChart
			data={processedData}
			withComparison={true}
		/>
	);
}`}),`
`,(0,e.jsx)(a.h3,{id:"share-calculation",children:"Share Calculation"}),`
`,(0,e.jsxs)(a.p,{children:["Calculate the ",(0,e.jsx)(a.code,{children:"currentShare"})," and ",(0,e.jsx)(a.code,{children:"previousShare"})," values to determine bar widths:"]}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`// For relative scaling (bars relative to max value)
const maxCurrentValue = Math.max(...data.map(item => item.currentValue));
const maxPreviousValue = Math.max(...data.map(item => item.previousValue));

const processedData = data.map(item => ({
	...item,
	currentShare: (item.currentValue / maxCurrentValue) * 100,
	previousShare: (item.previousValue / maxPreviousValue) * 100,
}));

// For absolute scaling (bars relative to same baseline)
const maxValue = Math.max(
	...data.map(item => Math.max(item.currentValue, item.previousValue))
);

const processedData = data.map(item => ({
	...item,
	currentShare: (item.currentValue / maxValue) * 100,
	previousShare: (item.previousValue / maxValue) * 100,
}));`}),`
`,(0,e.jsx)(a.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(a.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,(0,e.jsx)(a.p,{children:"The component supports CSS custom properties for advanced styling:"}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={data}
	style={{
		'--a8c--charts--leaderboard--bar--border-radius': '8px',
	}}
	className="myCustomChart"
/>`}),`
`,(0,e.jsx)(r.kL,{language:"css",code:`.myCustomChart {
	--a8c--charts--leaderboard--bar--border-radius: 8px;
	font-family: "Custom Font", sans-serif;
}`}),`
`,(0,e.jsx)(a.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(a.p,{children:["Leaderboard Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(a.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(a.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`import { GlobalChartsProvider, LeaderboardChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<LeaderboardChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(a.h2,{id:"animation",children:"Animation"}),`
`,(0,e.jsx)(a.p,{children:"The Leaderboard Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:"}),`
`,(0,e.jsx)(r.Hl,{of:t.Animation}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`<LeaderboardChart
	data={ data }
	animation={ true }
/>`}),`
`,(0,e.jsx)(a.h3,{id:"animation-behavior",children:"Animation Behavior"}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:"Opt-in"}),": Animation is disabled by default and must be explicitly enabled with the ",(0,e.jsx)(a.code,{children:"animation"})," prop"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:"Accessibility"}),": Automatically respects the user's ",(0,e.jsx)(a.code,{children:"prefers-reduced-motion"})," system setting - animation will not play for users who prefer reduced motion"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:"Effect"}),": Creates a stretching effect where bars grow from left to right, revealing the leaderboard data progressively"]}),`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:"Duration"}),": 1000ms (1 second) with ease-out timing"]}),`
`]}),`
`,(0,e.jsxs)(a.p,{children:[(0,e.jsx)(a.strong,{children:"Note"}),": The animation plays once when the chart initially renders and does not repeat."]}),`
`,(0,e.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:["Built with semantic WordPress components (",(0,e.jsx)(a.code,{children:"Grid"}),", ",(0,e.jsx)(a.code,{children:"VStack"}),", ",(0,e.jsx)(a.code,{children:"Text"}),")"]}),`
`,(0,e.jsx)(a.li,{children:"Screen reader accessible through proper text content"}),`
`,(0,e.jsx)(a.li,{children:"Color information supplemented with text values (not color-dependent)"}),`
`,(0,e.jsx)(a.li,{children:"Responsive design that adapts to system font size preferences"}),`
`,(0,e.jsx)(a.li,{children:"No interactive elements - functions as a display-only component"}),`
`]}),`
`,(0,e.jsx)(a.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(a.p,{children:"Supports all modern browsers with CSS Grid and ES6+ features:"}),`
`,(0,e.jsxs)(a.ul,{children:[`
`,(0,e.jsxs)(a.li,{children:[(0,e.jsx)(a.strong,{children:"Chrome"}),": 57+, ",(0,e.jsx)(a.strong,{children:"Firefox"}),": 52+, ",(0,e.jsx)(a.strong,{children:"Safari"}),": 10.1+, ",(0,e.jsx)(a.strong,{children:"Edge"}),": 16+"]}),`
`,(0,e.jsx)(a.li,{children:"Relies on WordPress Gutenberg component browser support"}),`
`,(0,e.jsx)(a.li,{children:"Internet Explorer not supported"}),`
`,(0,e.jsx)(a.li,{children:"Mobile-friendly with responsive design"}),`
`]}),`
`,(0,e.jsx)(a.h2,{id:"examples",children:"Examples"}),`
`,(0,e.jsx)(a.h3,{id:"e-commerce-sales-channels",children:"E-commerce Sales Channels"}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`
const salesData = [
	{ id: 'organic', label: 'Organic Search', currentValue: 45000, previousValue: 38000, currentShare: 100, previousShare: 84, delta: 18 },
	{ id: 'paid', label: 'Paid Advertising', currentValue: 32000, previousValue: 35000, currentShare: 71, previousShare: 78, delta: -9 },
	{ id: 'social', label: 'Social Media', currentValue: 18000, previousValue: 15000, currentShare: 40, previousShare: 33, delta: 20 },
	{ id: 'email', label: 'Email Marketing', currentValue: 12000, previousValue: 11000, currentShare: 27, previousShare: 24, delta: 9 },
];

<LeaderboardChart data={salesData} withComparison={true} />
`}),`
`,(0,e.jsx)(a.h3,{id:"traffic-sources",children:"Traffic Sources"}),`
`,(0,e.jsx)(r.kL,{language:"tsx",code:`
const trafficData = [
	{ id: 'direct', label: 'Direct', currentValue: 15420, previousValue: 13200, currentShare: 100, previousShare: 86, delta: 17 },
	{ id: 'search', label: 'Search Engines', currentValue: 12350, previousValue: 11800, currentShare: 80, previousShare: 77, delta: 5 },
	{ id: 'social', label: 'Social Networks', currentValue: 8760, previousValue: 9200, currentShare: 57, previousShare: 60, delta: -5 },
];

<LeaderboardChart data={trafficData} withComparison={true} />
`})]})}function h(o={}){const{wrapper:a}={...(0,l.R)(),...o.components};return a?(0,e.jsx)(a,{...o,children:(0,e.jsx)(c,{...o})}):c(o)}})}]);
