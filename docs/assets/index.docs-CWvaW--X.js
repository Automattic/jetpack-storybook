import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-B0Z8ftDN.js";import{i as r,n as i,r as a,t as o}from"./blocks-5UYLAk2X.js";import{t as s}from"./mdx-react-shim-DRoQEJSN.js";import{Default as c,n as l,t as u}from"./index.stories-CV7wIijz.js";import{Complex as d,FormattedValues as f,HTML as p,PlainText as m,t as h}from"./tooltip.stories-DZq4MTtS.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{title:`JS Packages/Charts Library/Charts/Geo Chart`,of:u}),`
`,(0,v.jsx)(t.h1,{id:`geo-chart`,children:`Geo Chart`}),`
`,(0,v.jsx)(t.p,{children:`Geo Charts visualize geographical data on an interactive world map, making it easy to understand the distribution of values across countries.`}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,v.jsx)(t.p,{children:`The Geo Chart component provides a clean, accessible solution for displaying country-level data on a world map. Built on Google Charts GeoChart, it supports interactive tooltips, automatic color scaling, and integration with the chart theme system:`}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`import { GeoChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,v.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,v.jsxs)(t.p,{children:[`For detailed information about component props and types, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs`,children:`Geo Chart API Reference`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,v.jsx)(t.h3,{id:`simple-geo-chart`,children:`Simple Geo Chart`}),`
`,(0,v.jsxs)(t.p,{children:[`The simplest geo chart requires data, width, and height. The `,(0,v.jsx)(t.code,{children:`data`}),` prop uses Google Charts format - an array where the first row contains column headers and subsequent rows contain data. Countries can be identified by full name or ISO 3166-1 alpha-2 codes (full names are recommended):`]}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ [
		['Country', 'Orders'],
		['United States', 1000],
		['Canada', 500],
		['United Kingdom', 450],
		['Germany', 400],
		['Australia', 350],
		['France', 300],
		['Mexico', 250],
		['Japan', 200],
		['Brazil', 150],
		['India', 120],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,v.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`data`})}),`: Array in Google Charts format - first row is headers, subsequent rows are data. Countries can be identified by full name (e.g., 'United States', 'Canada') or ISO 3166-1 alpha-2 codes (e.g., 'US', 'CA')`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Layout & Dimensions:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`width`})}),`: Width of the chart in pixels. When omitted, fills parent container width`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`height`})}),`: Height of the chart in pixels. When omitted, fills parent container height (parent must have explicit height)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`aspectRatio`})}),`: Height-to-width ratio (e.g. `,(0,v.jsx)(t.code,{children:`0.625`}),`) for responsive charts; the chart is contained within its parent on both axes. When omitted, fills the parent container's height`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width constraint for responsive charts (default: `,(0,v.jsx)(t.code,{children:`1200`}),`)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`resizeDebounceTime`})}),`: Debounce delay for resize events in ms (default: `,(0,v.jsx)(t.code,{children:`300`}),`)`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Map Scope:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`region`})}),`: Region to display — `,(0,v.jsx)(t.code,{children:`'world'`}),` (default) or an ISO 3166-1 alpha-2 country code (e.g., `,(0,v.jsx)(t.code,{children:`'US'`}),`)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`resolution`})}),`: Map resolution — `,(0,v.jsx)(t.code,{children:`'countries'`}),` (default), `,(0,v.jsx)(t.code,{children:`'provinces'`}),` (use with a specific region), or `,(0,v.jsx)(t.code,{children:`'metros'`}),` (US only)`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Styling & Customization:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`className`})}),`: Additional CSS class name for custom styling`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`renderPlaceholder`})}),`: Custom render function for the loading placeholder`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Error Handling:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`onError`})}),`: Callback fired when Google Charts emits a chart error, including draw errors rendered into the chart container (e.g. a missing map file)`]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[`For detailed prop information and type definitions, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs`,children:`Geo Chart API Reference`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`advanced-features`,children:`Advanced Features`}),`
`,(0,v.jsx)(t.p,{children:`The Geo Chart supports the full Google Charts data format, enabling powerful customization options:`}),`
`,(0,v.jsx)(t.h3,{id:`custom-tooltips`,children:`Custom Tooltips`}),`
`,(0,v.jsxs)(t.p,{children:[`You can customize tooltip content using column roles. Add a tooltip column to your data with `,(0,v.jsx)(t.code,{children:`{ type: 'string', role: 'tooltip' }`}),`:`]}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip' }],
		['United States', 1000, 'United States: 1,000 orders (40% of total)'],
		['Canada', 500, 'Canada: 500 orders (20% of total)'],
		['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,v.jsx)(t.h3,{id:`html-tooltips`,children:`HTML Tooltips`}),`
`,(0,v.jsxs)(t.p,{children:[`For rich tooltip content with HTML formatting, add `,(0,v.jsx)(t.code,{children:`p: { html: true }`}),` to the tooltip column:`]}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip', p: { html: true } }],
		['United States', 1000, '<b>United States</b><br/>1,000 orders'],
		['Canada', 500, '<b>Canada</b><br/>500 orders'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,v.jsx)(t.h4,{id:`security`,children:`Security`}),`
`,(0,v.jsxs)(t.p,{children:[`HTML tooltip content is automatically sanitized to prevent cross-site scripting (XSS) attacks. Dangerous elements (e.g., `,(0,v.jsx)(t.code,{children:`<script>`}),`, `,(0,v.jsx)(t.code,{children:`<iframe>`}),`) and event-handler attributes (e.g., `,(0,v.jsx)(t.code,{children:`onclick`}),`) are stripped before rendering.`]}),`
`,(0,v.jsx)(t.h3,{id:`formatted-values`,children:`Formatted Values`}),`
`,(0,v.jsxs)(t.p,{children:[`Separate the display format from the actual value using cell objects with `,(0,v.jsx)(t.code,{children:`v`}),` (value) and `,(0,v.jsx)(t.code,{children:`f`}),` (formatted) properties:`]}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ [
		['Country', 'Revenue'],
		['United States', { v: 1234567, f: '$1.23M' }],
		['Canada', { v: 543210, f: '$543K' }],
		['United Kingdom', { v: 789012, f: '$789K' }],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,v.jsx)(t.p,{children:`This ensures proper data scaling while displaying user-friendly labels.`}),`
`,(0,v.jsx)(t.h3,{id:`complex-html-tooltips`,children:`Complex HTML Tooltips`}),`
`,(0,v.jsx)(t.p,{children:`Combine HTML tooltips with custom styling for rich, interactive experiences:`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ [
		['Country', 'Orders', { type: 'string', role: 'tooltip', p: { html: true } }],
		[
			'United States',
			1000,
			\`<div style="padding: 12px; font-family: sans-serif;">
				<div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">🇺🇸 United States</div>
				<div style="color: #666;">Orders: <strong>1,000</strong></div>
				<div style="color: #666;">Share: <strong>40%</strong></div>
			</div>\`,
		],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,v.jsx)(t.h2,{id:`loading-state`,children:`Loading State`}),`
`,(0,v.jsx)(t.p,{children:`The Geo Chart displays a loading placeholder while Google Charts loads its resources from the CDN.`}),`
`,(0,v.jsx)(t.h3,{id:`default-loading-placeholder`,children:`Default Loading Placeholder`}),`
`,(0,v.jsx)(t.p,{children:`By default, a simple "Loading map" text is shown while Google Charts loads:`}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>
// Shows "Loading map" until Google Charts is ready`}),`
`,(0,v.jsx)(t.h3,{id:`custom-loading-placeholder`,children:`Custom Loading Placeholder`}),`
`,(0,v.jsxs)(t.p,{children:[`You can provide a custom loading placeholder using the `,(0,v.jsx)(t.code,{children:`renderPlaceholder`}),` prop:`]}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
	renderPlaceholder={ () => (
		<div className="custom-loading">
			<Spinner />
			<span>Loading world map...</span>
		</div>
	) }
/>`}),`
`,(0,v.jsx)(t.p,{children:`This is useful when you want to show a skeleton loader, spinner, or branded loading state that matches your application's design.`}),`
`,(0,v.jsx)(t.h2,{id:`country-identification`,children:`Country Identification`}),`
`,(0,v.jsx)(t.p,{children:`The Geo Chart accepts countries in two formats:`}),`
`,(0,v.jsx)(t.h3,{id:`full-country-names-recommended`,children:`Full Country Names (Recommended)`}),`
`,(0,v.jsx)(t.p,{children:`Use full country names for better readability:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`United States`}),`, `,(0,v.jsx)(t.strong,{children:`Canada`}),`, `,(0,v.jsx)(t.strong,{children:`United Kingdom`})]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Germany`}),`, `,(0,v.jsx)(t.strong,{children:`France`}),`, `,(0,v.jsx)(t.strong,{children:`Japan`})]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Australia`}),`, `,(0,v.jsx)(t.strong,{children:`Brazil`}),`, `,(0,v.jsx)(t.strong,{children:`India`})]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`China`}),`, `,(0,v.jsx)(t.strong,{children:`Mexico`}),`, `,(0,v.jsx)(t.strong,{children:`Spain`})]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Italy`}),`, `,(0,v.jsx)(t.strong,{children:`Netherlands`}),`, `,(0,v.jsx)(t.strong,{children:`Sweden`})]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`iso-3166-1-alpha-2-codes`,children:`ISO 3166-1 Alpha-2 Codes`}),`
`,(0,v.jsx)(t.p,{children:`Alternatively, you can use two-letter ISO country codes:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`US`}),`, `,(0,v.jsx)(t.strong,{children:`CA`}),`, `,(0,v.jsx)(t.strong,{children:`GB`}),`, `,(0,v.jsx)(t.strong,{children:`DE`}),`, `,(0,v.jsx)(t.strong,{children:`FR`})]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`JP`}),`, `,(0,v.jsx)(t.strong,{children:`AU`}),`, `,(0,v.jsx)(t.strong,{children:`BR`}),`, `,(0,v.jsx)(t.strong,{children:`IN`}),`, `,(0,v.jsx)(t.strong,{children:`CN`})]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`MX`}),`, `,(0,v.jsx)(t.strong,{children:`ES`}),`, `,(0,v.jsx)(t.strong,{children:`IT`}),`, `,(0,v.jsx)(t.strong,{children:`NL`}),`, `,(0,v.jsx)(t.strong,{children:`SE`})]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[`For a complete list of country codes, refer to the `,(0,v.jsx)(t.a,{href:`https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`,rel:`nofollow`,children:`ISO 3166-1 alpha-2 codes`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`interactive-features`,children:`Interactive Features`}),`
`,(0,v.jsx)(t.h3,{id:`hover-tooltips`,children:`Hover Tooltips`}),`
`,(0,v.jsx)(t.p,{children:`The Geo Chart includes built-in interactive tooltips powered by Google Charts that display on hover. By default, tooltips show:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Country name`}),`
`,(0,v.jsx)(t.li,{children:`Value for that country`}),`
`]}),`
`,(0,v.jsx)(t.p,{children:`You can customize tooltips using the tooltip column role (see Advanced Features above).`}),`
`,(0,v.jsx)(t.p,{children:`Tooltips are automatically enabled and positioned for optimal readability.`}),`
`,(0,v.jsx)(t.h3,{id:`color-scaling`,children:`Color Scaling`}),`
`,(0,v.jsx)(t.p,{children:`The chart automatically scales colors based on data values:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`No data`}),`: Countries without values use the default theme color (`,(0,v.jsx)(t.code,{children:`datalessRegionColor`}),`)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Low values`}),`: Displayed with lighter colors`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`High values`}),`: Displayed with the full primary theme color`]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[`The color scale is configured via Google Charts' `,(0,v.jsx)(t.code,{children:`colorAxis`}),` option, using the theme's primary color range.`]}),`
`,(0,v.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,v.jsxs)(t.p,{children:[`Add custom styles using the `,(0,v.jsx)(t.code,{children:`className`}),` prop:`]}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`.custom-geo-chart {
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
	className="custom-geo-chart"
/>`}),`
`,(0,v.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,v.jsxs)(t.p,{children:[`Geo Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,v.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,v.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, GeoChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
	backgroundColor: '#f5f5f5',
	geoChart: {
		featureFillColor: '#e0e0e0',
	},
};

<GlobalChartsProvider theme={customTheme}>
	<GeoChart
		data={ ordersByCountry }
		width={ 800 }
		height={ 500 }
	/>
</GlobalChartsProvider>`}),`
`,(0,v.jsx)(t.p,{children:`The chart uses the following theme properties:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`colors[0]`})}),`: Primary color for data visualization (used for color axis range)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`backgroundColor`})}),`: Background color for the map`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`geoChart.featureFillColor`})}),`: Fill color for countries without data`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,v.jsxs)(t.p,{children:[`Like other charts in this library, GeoChart supports responsive sizing. By default, it `,(0,v.jsx)(t.strong,{children:`fills its parent container's dimensions`}),`:`]}),`
`,(0,v.jsx)(a,{language:`tsx`,code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<GeoChart data={ordersByCountry} />
</div>

// Use aspect ratio - height from width, contained if the parent is shorter
<div style={{ width: '100%' }}>
	<GeoChart data={ordersByCountry} aspectRatio={0.625} />
</div>

// Fixed dimensions
<GeoChart data={ordersByCountry} width={800} height={500} />`}),`
`,(0,v.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,v.jsx)(t.h2,{id:`map-projection`,children:`Map Projection`}),`
`,(0,v.jsx)(t.p,{children:`The Geo Chart uses Google Charts' default Mercator projection for world map visualization. The map automatically scales to fit within the specified dimensions.`}),`
`,(0,v.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,v.jsx)(t.h3,{id:`data-preparation`,children:`Data Preparation`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Use full country names`}),`: Recommended for better readability (e.g., 'United States' instead of 'US')`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`ISO codes supported`}),`: Two-letter ISO 3166-1 alpha-2 codes also work if needed`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Validate data`}),`: Check that values are positive numbers`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Consider scale`}),`: Large value ranges will show more dramatic color differences`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Alternative views`}),`: Consider providing a data table or list view for users who prefer non-visual data`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Color contrast`}),`: The automatic color scaling maintains theme consistency, but test with your specific color choices`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Keyboard navigation`}),`: Currently, the chart is primarily mouse-driven; consider complementing with keyboard-accessible data views`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility-1`,children:`Accessibility`}),`
`,(0,v.jsx)(t.h3,{id:`mouse-interaction`,children:`Mouse Interaction`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Hover`}),`: Move the mouse over any country to see its data in a tooltip`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Visual feedback`}),`: Countries with data show graduated colors based on value magnitude`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,v.jsx)(t.p,{children:`Google Charts provides some built-in accessibility features. For better accessibility:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Provide a data table or list alongside the chart`}),`
`,(0,v.jsx)(t.li,{children:`Use descriptive headings to introduce the geographical data`}),`
`,(0,v.jsxs)(t.li,{children:[`Consider adding `,(0,v.jsx)(t.code,{children:`aria-label`}),` or `,(0,v.jsx)(t.code,{children:`aria-describedby`}),` to the container element`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,v.jsx)(t.p,{children:`Google Charts GeoChart does not support keyboard navigation, so this limitation is inherited by this component. For full accessibility:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Complement the chart with a keyboard-accessible data table`}),`
`,(0,v.jsx)(t.li,{children:`Provide text summaries of key insights`}),`
`,(0,v.jsx)(t.li,{children:`Consider using the chart as a visual supplement to accessible data presentations`}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),l(),h()}))();export{_ as default};