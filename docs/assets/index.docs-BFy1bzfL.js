import{n as e}from"./chunk-zsgVPwQN.js";import{nv as t}from"./iframe-C_Yf1wf8.js";import{r as n}from"./react-r4CN-Fa-.js";import{t as r}from"./mdx-react-shim-B8tihIgt.js";import{i,n as a,r as o,t as s}from"./blocks-nje3c7qk.js";import{AlignmentOptions as c,CustomShape as l,DashboardExample as u,Default as d,InteractiveLegend as f,StandaloneLegendWithChartId as p,TextOverflow as m,Vertical as h,WithBarChart as g,WithLineChart as _,n as v,t as y}from"./index.stories-Yvn40teF.js";function b(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:`JS Packages/Charts Library/Components/Legend`,of:y}),`
`,(0,S.jsx)(t.h1,{id:`legend`,children:`Legend`}),`
`,(0,S.jsx)(t.p,{children:`The Legend component provides a flexible way to display chart legends either as standalone components or integrated with charts through the chart context.`}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsx)(t.p,{children:`The Legend component offers multiple ways to display chart legends, from simple standalone usage to advanced context-based integration:`}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { Legend, LineChart } from '@automattic/charts';

// Composition API (recommended)

<LineChart data={ salesData } chartId="sales-chart">
	<LineChart.Legend />
</LineChart>

// Standalone usage with manual data

<Legend
	items={ [
		{ label: 'Series 1', value: '25%', color: '#3858E9' },
		{ label: 'Series 2', value: '35%', color: '#80C8FF' },
	] }
/>`}),`
`,(0,S.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend-api-reference--docs`,children:`Legend API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,S.jsx)(t.h3,{id:`default-legend`,children:`Default Legend`}),`
`,(0,S.jsx)(t.p,{children:`The default horizontal orientation displays legend items in a row, ideal for legends positioned above or below charts:`}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<Legend
	items={ [
		{ label: 'Desktop', value: '65%', color: '#3858E9' },
		{ label: 'Mobile', value: '35%', color: '#80C8FF' },
	] }
/>`}),`
`,(0,S.jsx)(t.h3,{id:`vertical-legend`,children:`Vertical Legend`}),`
`,(0,S.jsx)(t.p,{children:`The vertical orientation displays legend items in a column, perfect for legends positioned beside charts:`}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<Legend
	items={ [
		{ label: 'Desktop', value: '65%', color: '#3858E9' },
		{ label: 'Mobile', value: '35%', color: '#80C8FF' },
		{ label: 'Tablet', value: '12%', color: '#44B556' },
	] }
	orientation="vertical"
/>`}),`
`,(0,S.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,S.jsx)(t.p,{children:`When using the Legend component in standalone mode, you need either:`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`items`})}),`: Array of legend items with `,(0,S.jsx)(t.code,{children:`label`}),`, `,(0,S.jsx)(t.code,{children:`color`}),`, and optional `,(0,S.jsx)(t.code,{children:`value`}),` properties, OR`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`chartId`})}),`: The ID of a chart whose legend data should be displayed`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed information about all optional props, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-components-legend-api-reference--docs`,children:`Legend API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h3,{id:`important-notes`,children:`Important Notes`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`When both `,(0,S.jsx)(t.code,{children:`items`}),` and `,(0,S.jsx)(t.code,{children:`chartId`}),` are provided, `,(0,S.jsx)(t.code,{children:`items`}),` takes precedence`]}),`
`,(0,S.jsxs)(t.li,{children:[`The `,(0,S.jsx)(t.code,{children:`render`}),` prop provides complete control over legend rendering, bypassing the default layout`]}),`
`,(0,S.jsxs)(t.li,{children:[`Text overflow is enabled by setting `,(0,S.jsx)(t.code,{children:`labelStyles.maxWidth`}),`; `,(0,S.jsx)(t.code,{children:`textOverflow`}),` is optional and defaults to `,(0,S.jsx)(t.code,{children:`'wrap'`})]}),`
`,(0,S.jsx)(t.li,{children:`The component uses visx LegendOrdinal internally but provides a simplified, more flexible API`}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`integration-with-charts`,children:`Integration with Charts`}),`
`,(0,S.jsx)(t.h3,{id:`composition-api-recommended`,children:`Composition API (Recommended)`}),`
`,(0,S.jsxs)(t.p,{children:[`The recommended way to add legends to charts is the composition API. Use the chart's `,(0,S.jsx)(t.code,{children:`Legend`}),` compound component as a child for explicit placement and configuration:`]}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { LineChart } from '@automattic/charts';

<LineChart data={ lineChartData } chartId="sales-chart">
	<LineChart.Legend />
</LineChart>`}),`
`,(0,S.jsx)(t.p,{children:`This works with all chart types that support legends:`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { BarChart } from '@automattic/charts';

<BarChart data={ barChartData } chartId="quarterly-sales">
	<BarChart.Legend />
</BarChart>`}),`
`,(0,S.jsx)(t.h4,{id:`key-benefits`,children:`Key Benefits`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Explicit Placement`}),`: The legend is part of the chart's component tree, making placement clear and predictable`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Automatic Data`}),`: Legend items are derived from the chart's data automatically`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Full Configuration`}),`: Supports all legend props including `,(0,S.jsx)(t.code,{children:`position`}),`, `,(0,S.jsx)(t.code,{children:`alignment`}),`, `,(0,S.jsx)(t.code,{children:`orientation`}),`, `,(0,S.jsx)(t.code,{children:`shape`}),`, and `,(0,S.jsx)(t.code,{children:`interactive`})]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Type Safety`}),`: Full TypeScript support with chart-specific legend types`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`standalone-legend-with-chart-context`,children:`Standalone Legend with Chart Context`}),`
`,(0,S.jsx)(t.p,{children:`For decoupled layouts such as dashboards, the Legend component can retrieve data from charts automatically using the chart context:`}),`
`,(0,S.jsx)(s,{of:p}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<div>
	{/* Chart with legend hidden but still registering data */}
	<LineChart
		chartId="standalone-legend-chart"
		data={ lineChartData }
		showLegend={ false }
		width={ 400 }
		height={ 200 }
	/>

	{/* Standalone legend that automatically gets data from chart context */}
	<Legend
		chartId="standalone-legend-chart"
	/>

</div>`}),`
`,(0,S.jsx)(t.h4,{id:`how-it-works`,children:`How It Works`}),`
`,(0,S.jsxs)(t.ol,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Chart Registration`}),`: When a chart is rendered with a `,(0,S.jsx)(t.code,{children:`chartId`}),`, it automatically registers its legend data in the chart context`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Data Retrieval`}),`: The Legend component can then retrieve this data using the same `,(0,S.jsx)(t.code,{children:`chartId`})]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Decoupled Display`}),`: The legend can be placed anywhere in your layout, completely independent from the chart`]}),`
`]}),`
`,(0,S.jsx)(t.h4,{id:`important-notes-1`,children:`Important Notes`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`The chart and legend must be wrapped in the same GlobalChartsProvider context`}),`
`,(0,S.jsxs)(t.li,{children:[`The `,(0,S.jsx)(t.code,{children:`chartId`}),` must match exactly between chart and legend`]}),`
`,(0,S.jsxs)(t.li,{children:[`Charts with `,(0,S.jsx)(t.code,{children:`showLegend={false}`}),` still register their legend data`]}),`
`,(0,S.jsxs)(t.li,{children:[`If no chart with the given `,(0,S.jsx)(t.code,{children:`chartId`}),` exists, the legend will render nothing`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`interactive-legends`,children:`Interactive Legends`}),`
`,(0,S.jsx)(t.p,{children:`Interactive legends allow users to toggle series visibility by clicking or using keyboard navigation.`}),`
`,(0,S.jsx)(t.h3,{id:`basic-interactive-legend`,children:`Basic Interactive Legend`}),`
`,(0,S.jsxs)(t.p,{children:[`Enable interactive legends using the composition API by passing `,(0,S.jsx)(t.code,{children:`interactive`}),` to the chart's Legend compound component:`]}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { LineChart } from '@automattic/charts';

<LineChart data={ data } chartId="sales-chart">
	<LineChart.Legend interactive={ true } />
</LineChart>`}),`
`,(0,S.jsxs)(t.p,{children:[`Alternatively, use the props-based approach with `,(0,S.jsx)(t.code,{children:`showLegend`}),` and the `,(0,S.jsx)(t.code,{children:`legend`}),` config object:`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<LineChart
	data={ data }
	chartId="sales-chart"
	showLegend={ true }
	legend={{ interactive: true }}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`standalone-interactive-legend`,children:`Standalone Interactive Legend`}),`
`,(0,S.jsxs)(t.p,{children:[`Interactive legends also work with standalone Legend components. Set `,(0,S.jsx)(t.code,{children:`legend.interactive`}),` on the chart so it filters visible series, and `,(0,S.jsx)(t.code,{children:`interactive`}),` on the Legend so it renders clickable toggle controls. `,(0,S.jsx)(t.code,{children:`chartId`}),` is also required for this to work.`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<GlobalChartsProvider>
	<LineChart
		chartId="sales-chart"
		data={ salesData }
		showLegend={ false }
		legend={{ interactive: true }}
	/>

	<Legend
		chartId="sales-chart"
		interactive={ true }
	/>
</GlobalChartsProvider>`}),`
`,(0,S.jsx)(t.h3,{id:`features`,children:`Features`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Click/Tap Interaction`}),`: Toggle series visibility by clicking on legend items`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Keyboard Support`}),`: Use Tab to focus items, Enter or Space to toggle`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Visual Feedback`}),`: Hidden series appear with reduced opacity and strikethrough text`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Color Stability`}),`: Series colors remain consistent when toggling visibility`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Accessibility`}),`: Full ARIA support with `,(0,S.jsx)(t.code,{children:`role="button"`}),`, `,(0,S.jsx)(t.code,{children:`aria-pressed`}),`, and descriptive `,(0,S.jsx)(t.code,{children:`aria-label`})]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`requirements`,children:`Requirements`}),`
`,(0,S.jsx)(t.p,{children:`Interactive legends require:`}),`
`,(0,S.jsxs)(t.ol,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`GlobalChartsProvider`}),`: Must wrap both chart and legend`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`chartId`}),`: A unique identifier to connect chart and legend`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`legend.interactive`}),`: Set to `,(0,S.jsx)(t.code,{children:`true`}),` in the chart's `,(0,S.jsx)(t.code,{children:`legend`}),` config object`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`current-limitations`,children:`Current Limitations`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`The `,(0,S.jsx)(t.code,{children:`render`}),` prop is not compatible with interactive legends (`,(0,S.jsx)(t.code,{children:`legend.interactive`}),` mode will be disabled)`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,S.jsx)(t.h3,{id:`alignment-options`,children:`Alignment Options`}),`
`,(0,S.jsx)(t.p,{children:`Control the horizontal alignment of legend items within the legend container:`}),`
`,(0,S.jsx)(s,{of:c}),`
`,(0,S.jsxs)(t.p,{children:[`Available alignment values: `,(0,S.jsx)(t.code,{children:`'start'`}),`, `,(0,S.jsx)(t.code,{children:`'center'`}),` (default), `,(0,S.jsx)(t.code,{children:`'end'`})]}),`
`,(0,S.jsx)(t.h3,{id:`text-overflow-and-wrapping`,children:`Text Overflow and Wrapping`}),`
`,(0,S.jsx)(t.p,{children:`The Legend component provides comprehensive text overflow handling for long labels:`}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(t.h4,{id:`text-overflow-modes`,children:`Text Overflow Modes`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Wrap`}),` (default): Text wraps naturally to multiple lines when it exceeds `,(0,S.jsx)(t.code,{children:`maxWidth`})]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Ellipsis`}),`: Truncates text with ellipsis (...) and shows tooltip on hover`]}),`
`]}),`
`,(0,S.jsx)(t.h4,{id:`use-cases`,children:`Use Cases`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Widgets/Dashboards`}),`: Use ellipsis mode with small `,(0,S.jsx)(t.code,{children:`maxWidth`}),` values`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Full Displays`}),`: Use wrap mode with larger `,(0,S.jsx)(t.code,{children:`maxWidth`}),` values`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Mobile`}),`: Use vertical orientation with appropriate `,(0,S.jsx)(t.code,{children:`maxWidth`})]}),`
`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<Legend
	items={ items }
	labelStyles={ { maxWidth: '150px', textOverflow: 'ellipsis' } }
	alignment="center"
/>`}),`
`,(0,S.jsx)(t.h3,{id:`custom-shape`,children:`Custom Shape`}),`
`,(0,S.jsx)(t.p,{children:`By default, legends use rectangular shapes, but you can customize the glyph shape:`}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<Legend
	items={ items }
	shape="circle"
/>`}),`
`,(0,S.jsxs)(t.p,{children:[`Available shapes: `,(0,S.jsx)(t.code,{children:`'rect'`}),` (default), `,(0,S.jsx)(t.code,{children:`'circle'`}),`, `,(0,S.jsx)(t.code,{children:`'line'`})]}),`
`,(0,S.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,S.jsxs)(t.p,{children:[`The legend's appearance can be customized globally through the `,(0,S.jsx)(t.code,{children:`legend`}),` property on the chart theme. This applies consistent styling to all legends rendered within a `,(0,S.jsx)(t.code,{children:`GlobalChartsProvider`}),`:`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { GlobalChartsProvider, LineChart } from '@automattic/charts';

<GlobalChartsProvider theme={ {
	legend: {
		// Styles applied to every legend label
		labelStyles: {
			color: '#1e3a5f',
			fontWeight: 600,
		},
		// Styles applied to the legend container
		containerStyles: {
			gap: '12px',
		},
		// Per-index styles applied to legend shapes
		shapeStyles: [
			{ fill: '#3858E9', rx: 4 },
			{ fill: '#80C8FF', rx: 4 },
		],
	},
} }>
	<LineChart data={ data } />
</GlobalChartsProvider>`}),`
`,(0,S.jsx)(t.h4,{id:`theme-legend-properties`,children:`Theme Legend Properties`}),`
`,(0,S.jsxs)(t.table,{children:[(0,S.jsx)(t.thead,{children:(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.th,{children:`Property`}),(0,S.jsx)(t.th,{children:`Type`}),(0,S.jsx)(t.th,{children:`Description`})]})}),(0,S.jsxs)(t.tbody,{children:[(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{children:(0,S.jsx)(t.code,{children:`legend.labelStyles`})}),(0,S.jsx)(t.td,{children:(0,S.jsx)(t.code,{children:`CSSProperties`})}),(0,S.jsx)(t.td,{children:`CSS styles spread onto every legend label element.`})]}),(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{children:(0,S.jsx)(t.code,{children:`legend.containerStyles`})}),(0,S.jsx)(t.td,{children:(0,S.jsx)(t.code,{children:`CSSProperties`})}),(0,S.jsx)(t.td,{children:`CSS styles spread onto the legend container element.`})]}),(0,S.jsxs)(t.tr,{children:[(0,S.jsx)(t.td,{children:(0,S.jsx)(t.code,{children:`legend.shapeStyles`})}),(0,S.jsx)(t.td,{children:(0,S.jsx)(t.code,{children:`Record<string, unknown>[]`})}),(0,S.jsxs)(t.td,{children:[`Per-index styles applied to legend shape glyphs. Used as a fallback when series data does not provide its own `,(0,S.jsx)(t.code,{children:`legendShapeStyle`}),`.`]})]})]})]}),`
`,(0,S.jsx)(t.h2,{id:`advanced-usage`,children:`Advanced Usage`}),`
`,(0,S.jsx)(t.h3,{id:`custom-rendering-with-render-prop`,children:`Custom Rendering with Render Prop`}),`
`,(0,S.jsxs)(t.p,{children:[`For complete control over legend rendering, use the `,(0,S.jsx)(t.code,{children:`render`}),` prop to provide a custom layout function. Here is an example of a custom layout where the item color is synced with the chart segment color by referencing the generated item in the global charts context:`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<Legend
	chartId="chart-with-custom-legend"
	render={ ( items ) => (
		<div className="custom-legend">
			{ customLegendItems.map( ( customLegendItem, i ) => (
				<div key={ i } className="custom-legend-item">
					<span
						className="legend-bullet"
						style={ { backgroundColor: items[i].color } }
						aria-hidden="true"
					></span>
					<span>{ customLegendItem.label }: { customLegendItem.value }</span>
				</div>
			) ) }
		</div>
	) }
/>`}),`
`,(0,S.jsxs)(t.p,{children:[`The `,(0,S.jsx)(t.code,{children:`render`}),` prop receives the legend items array and allows you to create completely custom legend layouts, bypassing the default visx-based rendering.`]}),`
`,(0,S.jsx)(t.h3,{id:`custom-glyphs`,children:`Custom Glyphs`}),`
`,(0,S.jsx)(t.p,{children:`Provide custom glyph rendering functions for unique symbols or complex visualizations:`}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`const CustomGlyph = ( { color, size } ) => (
	<circle fill={ color } r={ size } />
);

<Legend
	items={ [
		{
			label: 'Series 1',
			value: '42%',
			color: '#3858E9',
			glyphSize: 8,
			renderGlyph: CustomGlyph,
		},
	] }
/>`}),`
`,(0,S.jsxs)(t.p,{children:[`Custom glyphs should be centered at the provided `,(0,S.jsx)(t.code,{children:`x`}),` and `,(0,S.jsx)(t.code,{children:`y`}),` coordinates. The glyph will be rendered at `,(0,S.jsx)(t.code,{children:`glyphSize * 2`}),` dimensions.`]}),`
`,(0,S.jsx)(t.h3,{id:`dashboard-with-centralized-legends`,children:`Dashboard with Centralized Legends`}),`
`,(0,S.jsx)(t.p,{children:`This example demonstrates a complete dashboard implementation using Legend with chart context integration:`}),`
`,(0,S.jsx)(s,{of:u}),`
`,(0,S.jsx)(t.p,{children:`Key implementation details:`}),`
`,(0,S.jsxs)(t.ol,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Chart Setup`}),`: Each chart has a unique `,(0,S.jsx)(t.code,{children:`chartId`}),` and `,(0,S.jsx)(t.code,{children:`showLegend={false}`})]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Centralized Legends`}),`: All legends are placed in a dedicated sidebar`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Automatic Data Sync`}),`: Legends automatically retrieve data from their respective charts`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Clean Layout`}),`: Charts remain uncluttered while legends are easily accessible`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.h3,{id:`semantic-html`,children:`Semantic HTML`}),`
`,(0,S.jsxs)(t.p,{children:[`The Legend component renders as a semantic list (`,(0,S.jsx)(t.code,{children:`role="list"`}),`) with each legend item properly structured for screen readers.`]}),`
`,(0,S.jsx)(t.h3,{id:`text-truncation`,children:`Text Truncation`}),`
`,(0,S.jsxs)(t.p,{children:[`When using ellipsis mode, truncated text automatically includes a `,(0,S.jsx)(t.code,{children:`title`}),` attribute for screen readers and displays a native tooltip on hover showing the complete text.`]}),`
`,(0,S.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,S.jsx)(t.p,{children:`Legend items are rendered as standard DOM elements and follow native accessibility patterns. When using interactive legends, keyboard navigation follows ARIA best practices:`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Tab`}),`: Focus individual legend items`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Enter/Space`}),`: Toggle series visibility`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Screen Reader`}),`: Announces current visibility state ("visible" or "hidden")`]}),`
`]})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),r(),i(),v()}))();export{x as default};