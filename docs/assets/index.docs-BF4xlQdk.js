import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-CobL7fFH.js";import{i as r,n as i,r as a,t as o}from"./blocks-DL52wKns.js";import{t as s}from"./mdx-react-shim-DN7ItthV.js";import{AdvancedFormatting as c,Animation as l,CurrencyFormatting as u,CustomColors as d,CustomLabel as f,Default as p,EmptyData as m,EmptyDataWithChildren as h,FitRows as g,FitRowsInteractive as _,Interactive as v,LargeValues as y,Loading as b,NegativeGrowth as x,NumberFormatting as S,OverlayLabelWithImage as C,SmallDataset as w,WithCompositionLegend as T,WithLegendLabels as E,WithOverlayLabel as D,WithoutComparison as O,n as k,t as A}from"./index.stories-DD0s5G3m.js";function j(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{title:`JS Packages/Charts Library/Charts/Leaderboard Chart`,of:A}),`
`,(0,N.jsx)(t.h1,{id:`leaderboard-chart`,children:`Leaderboard Chart`}),`
`,(0,N.jsx)(t.p,{children:`A flexible and accessible leaderboard chart component for displaying ranked data with optional comparison values and legend support.`}),`
`,(0,N.jsx)(o,{of:p}),`
`,(0,N.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,N.jsx)(t.p,{children:`The Leaderboard Chart component provides a clean, responsive visualization for displaying ranked data with optional comparison values. Built with WordPress components, it supports customizable colors, flexible formatting, and accessibility-friendly defaults.`}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`import { LeaderboardChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<LeaderboardChart
	data={data}
	withComparison={true}
	primaryColor="#3858E9"
	secondaryColor="#66BDFF"
/>`}),`
`,(0,N.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,N.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-leaderboard-chart-api-reference--docs`,children:`Leaderboard Chart API Reference`}),`.`]}),`
`,(0,N.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,N.jsx)(t.h3,{id:`simple-leaderboard-chart`,children:`Simple Leaderboard Chart`}),`
`,(0,N.jsxs)(t.p,{children:[`The simplest leaderboard chart requires only a `,(0,N.jsx)(t.code,{children:`data`}),` prop with pre-processed leaderboard entries:`]}),`
`,(0,N.jsx)(o,{of:O}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
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
`,(0,N.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`data`})}),`: Array of LeaderboardEntry objects with pre-processed data including shares and deltas`]}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Visual Features:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`withComparison`})}),`: Show comparison data (previous period bars and delta values) - `,(0,N.jsx)(t.code,{children:`false`}),` by default`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`withOverlayLabel`})}),`: Overlay labels on top of the bars instead of beside them - `,(0,N.jsx)(t.code,{children:`false`}),` by default`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`primaryColor`})}),`: Primary color for current period bars (theme default)`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`secondaryColor`})}),`: Secondary color for comparison period bars (theme default)`]}),`
`]}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`Data Formatting:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`valueFormatter`})}),`: Custom formatter function for values - defaults to `,(0,N.jsx)(t.code,{children:`formatMetricValue`}),` with compact notation`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`deltaFormatter`})}),`: Custom formatter function for delta values - defaults to percentage formatting`]}),`
`]}),`
`,(0,N.jsx)(t.p,{children:(0,N.jsx)(t.strong,{children:`State & Styling:`})}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`loading`})}),`: Whether the chart is in loading state - `,(0,N.jsx)(t.code,{children:`false`}),` by default`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`fitRows`})}),`: Show only complete rows that fit a height-constrained container instead of scrolling - `,(0,N.jsx)(t.code,{children:`false`}),` by default`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`className`})}),`: Additional CSS class name for the chart container`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`style`})}),`: Custom styling including CSS custom properties for border radius`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsxs)(t.strong,{children:[(0,N.jsx)(t.code,{children:`width`}),` / `,(0,N.jsx)(t.code,{children:`height`})]}),`: Optional fixed chart container dimensions`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,N.jsx)(t.code,{children:`0.4`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:(0,N.jsx)(t.code,{children:`gap`})}),`: Spacing between legend and chart content (Stack gap token/value)`]}),`
`]}),`
`,(0,N.jsxs)(t.p,{children:[`For detailed prop information, type definitions, and examples, see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-leaderboard-chart-api-reference--docs`,children:`Leaderboard Chart API Reference`}),`.`]}),`
`,(0,N.jsx)(t.h2,{id:`comparison-features`,children:`Comparison Features`}),`
`,(0,N.jsx)(t.h3,{id:`with-comparison-data`,children:`With Comparison Data`}),`
`,(0,N.jsx)(t.p,{children:`Display both current and previous period data with delta indicators:`}),`
`,(0,N.jsx)(o,{of:p}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	withComparison={true}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`negative-growth-handling`,children:`Negative Growth Handling`}),`
`,(0,N.jsx)(t.p,{children:`The chart automatically handles negative growth with appropriate color coding:`}),`
`,(0,N.jsx)(o,{of:x}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`// Data with negative deltas will show in warning colors
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
`,(0,N.jsx)(t.h2,{id:`data-formatting`,children:`Data Formatting`}),`
`,(0,N.jsx)(t.h3,{id:`custom-value-formatting`,children:`Custom Value Formatting`}),`
`,(0,N.jsxs)(t.p,{children:[`Customize how values are displayed using the `,(0,N.jsx)(t.code,{children:`valueFormatter`}),` prop:`]}),`
`,(0,N.jsx)(o,{of:u}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
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
`,(0,N.jsx)(t.h3,{id:`number-formatting`,children:`Number Formatting`}),`
`,(0,N.jsx)(t.p,{children:`For non-currency values, use number formatting:`}),`
`,(0,N.jsx)(o,{of:S}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	valueFormatter={(value) =>
		formatMetricValue(value, 'number', {
			useMultipliers: false,
			decimals: 0,
		})
	}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`advanced-formatting`,children:`Advanced Formatting`}),`
`,(0,N.jsx)(t.p,{children:`Handle different value ranges with conditional formatting:`}),`
`,(0,N.jsx)(o,{of:c}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
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
`,(0,N.jsx)(t.h2,{id:`interactive-items`,children:`Interactive Items`}),`
`,(0,N.jsxs)(t.p,{children:[`Any entry with an `,(0,N.jsx)(t.code,{children:`onClick`}),` field becomes a clickable, keyboard-accessible row. The row renders as a `,(0,N.jsx)(t.code,{children:`<button>`}),` (activatable with Enter or Space) and reveals a chevron on hover or focus. Rows without `,(0,N.jsx)(t.code,{children:`onClick`}),` remain inert.`]}),`
`,(0,N.jsxs)(t.p,{children:[`By default the button's accessible name is derived from its rendered content (the label plus the formatted value). For an image-only JSX label whose text content doesn't yield a clean name, set the optional `,(0,N.jsx)(t.code,{children:`ariaLabel`}),` field on the entry to give assistive tech a deterministic name.`]}),`
`,(0,N.jsx)(t.p,{children:`Configuring what happens on click — for example, drilling down into a sub-view — is the consumer's responsibility, not the chart's:`}),`
`,(0,N.jsx)(o,{of:v}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
data={ data.map( d => ( {
	...d,
	onClick: () => drillDown( d.id ),
} ) ) }
/>`}),`
`,(0,N.jsx)(t.h2,{id:`data-states`,children:`Data States`}),`
`,(0,N.jsx)(t.h3,{id:`loading-state`,children:`Loading State`}),`
`,(0,N.jsx)(t.p,{children:`Display loading indicator while data is being fetched:`}),`
`,(0,N.jsx)(o,{of:b}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	loading={true}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`empty-data`,children:`Empty Data`}),`
`,(0,N.jsx)(t.p,{children:`Gracefully handle empty data arrays:`}),`
`,(0,N.jsx)(o,{of:m}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={[]}
	withComparison={true}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`empty-data-with-children`,children:`Empty Data with Children`}),`
`,(0,N.jsx)(t.p,{children:`Children passed to the composition API still render in empty-data state:`}),`
`,(0,N.jsx)(o,{of:h}),`
`,(0,N.jsx)(t.h3,{id:`small-datasets`,children:`Small Datasets`}),`
`,(0,N.jsx)(t.p,{children:`Handle minimal datasets effectively:`}),`
`,(0,N.jsx)(o,{of:w}),`
`,(0,N.jsx)(t.h3,{id:`large-values`,children:`Large Values`}),`
`,(0,N.jsx)(t.p,{children:`Automatically format large numeric values:`}),`
`,(0,N.jsx)(o,{of:y}),`
`,(0,N.jsx)(t.h2,{id:`data-preparation`,children:`Data Preparation`}),`
`,(0,N.jsx)(t.h3,{id:`transforming-raw-data`,children:`Transforming Raw Data`}),`
`,(0,N.jsx)(t.p,{children:`The LeaderboardChart expects pre-processed data. You'll need to transform your raw data into the required format:`}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`// Transform your raw data into LeaderboardEntry format
function transformRawData(rawData) {
	const maxValue = Math.max(...rawData.map(item => item.current_period.value));

	return rawData.map(item => {
		// A row absent from the comparison period has an unknown previous
		// value; leave the comparison fields undefined so the chart shows
		// its missing-data placeholder.
		const previousValue = item.previous_period?.value;

		return {
			id: item.id,
			label: item.name,
			currentValue: item.current_period.value,
			previousValue,
			currentShare: (item.current_period.value / maxValue) * 100,
			previousShare: previousValue !== undefined ? (previousValue / maxValue) * 100 : undefined,
			// Omit delta when the percentage change cannot be calculated,
			// such as from a previous value of 0.
			delta: previousValue
				? ((item.current_period.value - previousValue) / previousValue) * 100
				: undefined,
		};
	});
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
`,(0,N.jsx)(t.h3,{id:`share-calculation`,children:`Share Calculation`}),`
`,(0,N.jsxs)(t.p,{children:[`Calculate the `,(0,N.jsx)(t.code,{children:`currentShare`}),` and `,(0,N.jsx)(t.code,{children:`previousShare`}),` values to determine bar widths:`]}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`// For relative scaling (bars relative to max value)
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
`,(0,N.jsx)(t.h2,{id:`legends`,children:`Legends`}),`
`,(0,N.jsxs)(t.p,{children:[`Use the composition API to add a legend by placing `,(0,N.jsx)(t.code,{children:`<LeaderboardChart.Legend />`}),` as a child:`]}),`
`,(0,N.jsx)(o,{of:T}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart data={data} withComparison={true}>
	<LeaderboardChart.Legend />
</LeaderboardChart>`}),`
`,(0,N.jsxs)(t.p,{children:[`Use `,(0,N.jsx)(t.code,{children:`legendLabels`}),` to show descriptive labels (e.g. date ranges) for the primary and comparison series:`]}),`
`,(0,N.jsx)(o,{of:E}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	withComparison={true}
	showLegend={true}
	legendLabels={{
		primary: 'Aug 11-Sep 9, 2025',
		comparison: 'Jul 11-Aug 11, 2025',
	}}
/>`}),`
`,(0,N.jsxs)(t.p,{children:[`For full legend configuration options — positioning, orientation, shapes, interactivity, and the composition API — see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend--docs`,children:`Legend component docs`}),`.`]}),`
`,(0,N.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,N.jsx)(t.h3,{id:`custom-colors`,children:`Custom Colors`}),`
`,(0,N.jsx)(t.p,{children:`Override default theme colors with custom primary and secondary colors:`}),`
`,(0,N.jsx)(o,{of:d}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	withComparison={true}
	primaryColor="red"
	secondaryColor="green"
/>`}),`
`,(0,N.jsx)(t.h3,{id:`custom-labels`,children:`Custom Labels`}),`
`,(0,N.jsx)(t.p,{children:`Use React components as labels for rich content display:`}),`
`,(0,N.jsx)(o,{of:f}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`const CustomLabelComponent = ({ label, imageColor }) => (
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
`,(0,N.jsx)(t.h3,{id:`overlay-labels`,children:`Overlay Labels`}),`
`,(0,N.jsx)(t.p,{children:`Position labels on top of bars for a more compact display:`}),`
`,(0,N.jsx)(o,{of:D}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	withOverlayLabel={true}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`advanced-overlay-styling`,children:`Advanced Overlay Styling`}),`
`,(0,N.jsx)(t.p,{children:`Combine overlay labels with custom styling and transparent colors:`}),`
`,(0,N.jsx)(o,{of:C}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={richLabelData}
	withComparison={true}
	withOverlayLabel={true}
	primaryColor="rgba(56, 88, 233, 0.08)" // Semi-transparent
	style={{
		'--a8c-charts-border-radius-leaderboard-bar': '4px',
	}}
/>`}),`
`,(0,N.jsx)(t.h3,{id:`css-custom-properties`,children:`CSS Custom Properties`}),`
`,(0,N.jsx)(t.p,{children:`The component supports CSS custom properties for advanced styling:`}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={data}
	style={{
		'--a8c-charts-border-radius-leaderboard-bar': '8px',
	}}
	className="myCustomChart"
/>`}),`
`,(0,N.jsx)(a,{language:`css`,code:`.myCustomChart {
	--a8c-charts-border-radius-leaderboard-bar: 8px;
}`}),`
`,(0,N.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,N.jsxs)(t.p,{children:[`Leaderboard Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,N.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,N.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, LeaderboardChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<LeaderboardChart data={data} />
</GlobalChartsProvider>`}),`
`,(0,N.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,N.jsxs)(t.p,{children:[`By default, leaderboard charts `,(0,N.jsx)(t.strong,{children:`fill their parent container's dimensions`}),`. The parent must have an explicit height, or the chart must receive an `,(0,N.jsx)(t.code,{children:`aspectRatio`}),`:`]}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`// Fill parent container (default) - parent needs explicit height
	<div style={{ width: '100%', height: '320px' }}>
		<LeaderboardChart data={ data } showLegend={ true } />
	</div>

	// Use aspect ratio - height from width, contained if the parent is shorter
	<div style={{ width: '100%' }}>
		<LeaderboardChart data={ data } aspectRatio={ 0.4 } showLegend={ true } />
	</div>

	// Fixed dimensions
	<LeaderboardChart
		data={ data }
		width={ 300 }
		height={ 400 }
		showLegend={ true }
	/>`}),`
`,(0,N.jsxs)(t.p,{children:[`By default, when content is taller than the available area, the content region scrolls and the legend remains visible without overlap. Set `,(0,N.jsx)(t.code,{children:`fitRows`}),` inside a height-constrained container to hide rows that do not fit instead. The example below uses `,(0,N.jsx)(t.code,{children:`LeaderboardChartUnresponsive`}),` because refits are debounced with the parent resize on the responsive export, which lags a live drag:`]}),`
`,(0,N.jsx)(o,{of:g}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`import { LeaderboardChartUnresponsive } from '@automattic/charts';

<div style={{ height: '180px' }}>
	<LeaderboardChartUnresponsive data={ data } fitRows />
</div>`}),`
`,(0,N.jsx)(t.p,{children:`Hidden rows also leave the tab order and the accessibility tree, so keyboard focus only ever lands on a fully visible row — tab through the example below to verify:`}),`
`,(0,N.jsx)(o,{of:_}),`
`,(0,N.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,N.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,N.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,N.jsx)(t.p,{children:`The Leaderboard Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,N.jsx)(o,{of:l}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`<LeaderboardChart
	data={ data }
	animation={ true }
/>`}),`
`,(0,N.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,N.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,N.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Effect`}),`: Creates a stretching effect where bars grow from left to right, revealing the leaderboard data progressively`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,N.jsx)(t.h2,{id:`advanced-usage`,children:`Advanced Usage`}),`
`,(0,N.jsx)(t.h3,{id:`e-commerce-sales-channels`,children:`E-commerce Sales Channels`}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`
const salesData = [
	{ id: 'organic', label: 'Organic Search', currentValue: 45000, previousValue: 38000, currentShare: 100, previousShare: 84, delta: 18 },
	{ id: 'paid', label: 'Paid Advertising', currentValue: 32000, previousValue: 35000, currentShare: 71, previousShare: 78, delta: -9 },
	{ id: 'social', label: 'Social Media', currentValue: 18000, previousValue: 15000, currentShare: 40, previousShare: 33, delta: 20 },
	{ id: 'email', label: 'Email Marketing', currentValue: 12000, previousValue: 11000, currentShare: 27, previousShare: 24, delta: 9 },
];

<LeaderboardChart data={salesData} withComparison={true} />
`}),`
`,(0,N.jsx)(t.h3,{id:`traffic-sources`,children:`Traffic Sources`}),`
`,(0,N.jsx)(a,{language:`tsx`,code:`
const trafficData = [
	{ id: 'direct', label: 'Direct', currentValue: 15420, previousValue: 13200, currentShare: 100, previousShare: 86, delta: 17 },
	{ id: 'search', label: 'Search Engines', currentValue: 12350, previousValue: 11800, currentShare: 80, previousShare: 77, delta: 5 },
	{ id: 'social', label: 'Social Networks', currentValue: 8760, previousValue: 9200, currentShare: 57, previousShare: 60, delta: -5 },
];

<LeaderboardChart data={trafficData} withComparison={true} />
`}),`
`,(0,N.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,N.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Interactive legends are keyboard accessible when `,(0,N.jsx)(t.code,{children:`legend.interactive`}),` is enabled.`]}),`
`,(0,N.jsx)(t.li,{children:`Legend items can be toggled via keyboard using standard button interaction.`}),`
`,(0,N.jsxs)(t.li,{children:[`Rows with `,(0,N.jsx)(t.code,{children:`onClick`}),` render as native `,(0,N.jsx)(t.code,{children:`<button>`}),` elements and are activatable with Enter or Space.`]}),`
`,(0,N.jsxs)(t.li,{children:[`An interactive row's accessible name comes from its content (label + value); set the entry's `,(0,N.jsx)(t.code,{children:`ariaLabel`}),` to override it for image-only labels.`]}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:`Uses semantic text content for labels and values.`}),`
`,(0,N.jsx)(t.li,{children:`Legend items expose visible labels and state when interactive.`}),`
`,(0,N.jsx)(t.li,{children:`Value and delta text supplement color-based feedback.`}),`
`]}),`
`,(0,N.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsx)(t.li,{children:`Interactive legend items use standard focus behavior and visible focus indicators from the shared legend component.`}),`
`,(0,N.jsxs)(t.li,{children:[`By default, the chart content area scrolls in constrained layouts, keeping focused legend controls visible and non-overlapping. With `,(0,N.jsx)(t.code,{children:`fitRows`}),`, rows that do not fit are removed from the focus order and accessibility tree.`]}),`
`]})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;e((()=>{N=t(),s(),r(),k()}))();export{M as default};