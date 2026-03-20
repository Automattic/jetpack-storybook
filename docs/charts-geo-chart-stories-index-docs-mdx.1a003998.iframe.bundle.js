"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2860,3589,7354],{"../charts/src/charts/geo-chart/stories/index.docs.mdx"(_,l,t){t.r(l),t.d(l,{default:()=>h});var i=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=t("../../../node_modules/.pnpm/@storybook+addon-docs@10.3.1_@types+react@18.3.28_esbuild@0.25.9_storybook@10.3.1_@test_31531eedea616ad6bc3608443831948f/node_modules/@storybook/addon-docs/dist/blocks.js"),n=t("../charts/src/charts/geo-chart/stories/index.stories.tsx"),r=t("../charts/src/charts/geo-chart/stories/tooltip.stories.tsx");function a(c){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts Library/Charts/Geo Chart",of:n}),`
`,(0,e.jsx)(s.h1,{id:"geo-chart",children:"Geo Chart"}),`
`,(0,e.jsx)(s.p,{children:"Geo Charts visualize geographical data on an interactive world map, making it easy to understand the distribution of values across countries."}),`
`,(0,e.jsx)(o.Hl,{of:n.Default}),`
`,(0,e.jsx)(s.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart component provides a clean, accessible solution for displaying country-level data on a world map. Built on Google Charts GeoChart, it supports interactive tooltips, automatic color scaling, and integration with the chart theme system:"}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GeoChart } from '@automattic/charts';
import '@automattic/charts/style.css';

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsxs)(s.p,{children:["For detailed information about component props and types, see the ",(0,e.jsx)(s.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(s.h3,{id:"simple-geo-chart",children:"Simple Geo Chart"}),`
`,(0,e.jsxs)(s.p,{children:["The simplest geo chart requires data, width, and height. The ",(0,e.jsx)(s.code,{children:"data"})," prop uses Google Charts format - an array where the first row contains column headers and subsequent rows contain data. Countries can be identified by full name or ISO 3166-1 alpha-2 codes (full names are recommended):"]}),`
`,(0,e.jsx)(o.Hl,{of:n.Default}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
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
`,(0,e.jsx)(s.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"data"})}),": Array in Google Charts format - first row is headers, subsequent rows are data. Countries can be identified by full name (e.g., 'United States', 'Canada') or ISO 3166-1 alpha-2 codes (e.g., 'US', 'CA')"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Layout & Dimensions:"})}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"width"})}),": Width of the chart in pixels. When omitted, fills parent container width"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"height"})}),": Height of the chart in pixels. When omitted, fills parent container height (parent must have explicit height)"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"aspectRatio"})}),": Height as a fraction of width (e.g., ",(0,e.jsx)(s.code,{children:"0.625"})," = 62.5% height). When provided, height is calculated from width"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"maxWidth"})}),": Maximum width constraint for responsive charts (default: ",(0,e.jsx)(s.code,{children:"1200"}),")"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"resizeDebounceTime"})}),": Debounce delay for resize events in ms (default: ",(0,e.jsx)(s.code,{children:"300"}),")"]}),`
`]}),`
`,(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Styling & Customization:"})}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"className"})}),": Additional CSS class name for custom styling"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"renderPlaceholder"})}),": Custom render function for the loading placeholder"]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["For detailed prop information and type definitions, see the ",(0,e.jsx)(s.a,{href:"./?path=/docs/js-packages-charts-library-charts-geo-chart-api-reference--docs",children:"Geo Chart API Reference"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart supports the full Google Charts data format, enabling powerful customization options:"}),`
`,(0,e.jsx)(s.h3,{id:"custom-tooltips",children:"Custom Tooltips"}),`
`,(0,e.jsxs)(s.p,{children:["You can customize tooltip content using column roles. Add a tooltip column to your data with ",(0,e.jsx)(s.code,{children:"{ type: 'string', role: 'tooltip' }"}),":"]}),`
`,(0,e.jsx)(o.Hl,{of:r.PlainText}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip' }],
		['United States', 1000, 'United States: 1,000 orders (40% of total)'],
		['Canada', 500, 'Canada: 500 orders (20% of total)'],
		['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h3,{id:"html-tooltips",children:"HTML Tooltips"}),`
`,(0,e.jsxs)(s.p,{children:["For rich tooltip content with HTML formatting, add ",(0,e.jsx)(s.code,{children:"p: { html: true }"})," to the tooltip column:"]}),`
`,(0,e.jsx)(o.Hl,{of:r.HTML}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Value', { type: 'string', role: 'tooltip', p: { html: true } }],
		['United States', 1000, '<b>United States</b><br/>1,000 orders'],
		['Canada', 500, '<b>Canada</b><br/>500 orders'],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h4,{id:"security-considerations",children:"Security Considerations"}),`
`,(0,e.jsxs)(s.p,{children:["When using HTML tooltips via ",(0,e.jsx)(s.code,{children:"p: { html: true }"}),", any HTML in the tooltip content will be rendered by the browser. If tooltip strings come from user-generated input or external data sources, you ",(0,e.jsx)(s.strong,{children:"must"})," sanitize them first to prevent cross-site scripting (XSS) attacks."]}),`
`,(0,e.jsx)(s.h3,{id:"formatted-values",children:"Formatted Values"}),`
`,(0,e.jsxs)(s.p,{children:["Separate the display format from the actual value using cell objects with ",(0,e.jsx)(s.code,{children:"v"})," (value) and ",(0,e.jsx)(s.code,{children:"f"})," (formatted) properties:"]}),`
`,(0,e.jsx)(o.Hl,{of:r.FormattedValues}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Revenue'],
		['United States', { v: 1234567, f: '$1.23M' }],
		['Canada', { v: 543210, f: '$543K' }],
		['United Kingdom', { v: 789012, f: '$789K' }],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.p,{children:"This ensures proper data scaling while displaying user-friendly labels."}),`
`,(0,e.jsx)(s.h3,{id:"complex-html-tooltips",children:"Complex HTML Tooltips"}),`
`,(0,e.jsx)(s.p,{children:"Combine HTML tooltips with custom styling for rich, interactive experiences:"}),`
`,(0,e.jsx)(o.Hl,{of:r.Complex}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ [
		['Country', 'Orders', { type: 'string', role: 'tooltip', p: { html: true } }],
		[
			'United States',
			1000,
			\`<div style="padding: 12px; font-family: sans-serif;">
				<div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
				<div style="color: #666;">Orders: <strong>1,000</strong></div>
				<div style="color: #666;">Share: <strong>40%</strong></div>
			</div>\`,
		],
	] }
	width={ 800 }
	height={ 500 }
/>`}),`
`,(0,e.jsx)(s.h2,{id:"loading-state",children:"Loading State"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart displays a loading placeholder while Google Charts loads its resources from the CDN."}),`
`,(0,e.jsx)(s.h3,{id:"default-loading-placeholder",children:"Default Loading Placeholder"}),`
`,(0,e.jsx)(s.p,{children:'By default, a simple "Loading map" text is shown while Google Charts loads:'}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
/>
// Shows "Loading map" until Google Charts is ready`}),`
`,(0,e.jsx)(s.h3,{id:"custom-loading-placeholder",children:"Custom Loading Placeholder"}),`
`,(0,e.jsxs)(s.p,{children:["You can provide a custom loading placeholder using the ",(0,e.jsx)(s.code,{children:"renderPlaceholder"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`<GeoChart
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
`,(0,e.jsx)(s.p,{children:"This is useful when you want to show a skeleton loader, spinner, or branded loading state that matches your application's design."}),`
`,(0,e.jsx)(s.h2,{id:"country-identification",children:"Country Identification"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart accepts countries in two formats:"}),`
`,(0,e.jsx)(s.h3,{id:"full-country-names-recommended",children:"Full Country Names (Recommended)"}),`
`,(0,e.jsx)(s.p,{children:"Use full country names for better readability:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"United States"}),", ",(0,e.jsx)(s.strong,{children:"Canada"}),", ",(0,e.jsx)(s.strong,{children:"United Kingdom"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Germany"}),", ",(0,e.jsx)(s.strong,{children:"France"}),", ",(0,e.jsx)(s.strong,{children:"Japan"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Australia"}),", ",(0,e.jsx)(s.strong,{children:"Brazil"}),", ",(0,e.jsx)(s.strong,{children:"India"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"China"}),", ",(0,e.jsx)(s.strong,{children:"Mexico"}),", ",(0,e.jsx)(s.strong,{children:"Spain"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Italy"}),", ",(0,e.jsx)(s.strong,{children:"Netherlands"}),", ",(0,e.jsx)(s.strong,{children:"Sweden"})]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"iso-3166-1-alpha-2-codes",children:"ISO 3166-1 Alpha-2 Codes"}),`
`,(0,e.jsx)(s.p,{children:"Alternatively, you can use two-letter ISO country codes:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"US"}),", ",(0,e.jsx)(s.strong,{children:"CA"}),", ",(0,e.jsx)(s.strong,{children:"GB"}),", ",(0,e.jsx)(s.strong,{children:"DE"}),", ",(0,e.jsx)(s.strong,{children:"FR"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"JP"}),", ",(0,e.jsx)(s.strong,{children:"AU"}),", ",(0,e.jsx)(s.strong,{children:"BR"}),", ",(0,e.jsx)(s.strong,{children:"IN"}),", ",(0,e.jsx)(s.strong,{children:"CN"})]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"MX"}),", ",(0,e.jsx)(s.strong,{children:"ES"}),", ",(0,e.jsx)(s.strong,{children:"IT"}),", ",(0,e.jsx)(s.strong,{children:"NL"}),", ",(0,e.jsx)(s.strong,{children:"SE"})]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["For a complete list of country codes, refer to the ",(0,e.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",rel:"nofollow",children:"ISO 3166-1 alpha-2 codes"}),"."]}),`
`,(0,e.jsx)(s.h2,{id:"interactive-features",children:"Interactive Features"}),`
`,(0,e.jsx)(s.h3,{id:"hover-tooltips",children:"Hover Tooltips"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart includes built-in interactive tooltips powered by Google Charts that display on hover. By default, tooltips show:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Country name"}),`
`,(0,e.jsx)(s.li,{children:"Value for that country"}),`
`]}),`
`,(0,e.jsx)(s.p,{children:"You can customize tooltips using the tooltip column role (see Advanced Features above)."}),`
`,(0,e.jsx)(s.p,{children:"Tooltips are automatically enabled and positioned for optimal readability."}),`
`,(0,e.jsx)(s.h3,{id:"color-scaling",children:"Color Scaling"}),`
`,(0,e.jsx)(s.p,{children:"The chart automatically scales colors based on data values:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"No data"}),": Countries without values use the default theme color (",(0,e.jsx)(s.code,{children:"datalessRegionColor"}),")"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Low values"}),": Displayed with lighter colors"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"High values"}),": Displayed with the full primary theme color"]}),`
`]}),`
`,(0,e.jsxs)(s.p,{children:["The color scale is configured via Google Charts' ",(0,e.jsx)(s.code,{children:"colorAxis"})," option, using the theme's primary color range."]}),`
`,(0,e.jsx)(s.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsxs)(s.p,{children:["Add custom styles using the ",(0,e.jsx)(s.code,{children:"className"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`.custom-geo-chart {
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

<GeoChart
	data={ ordersByCountry }
	width={ 800 }
	height={ 500 }
	className="custom-geo-chart"
/>`}),`
`,(0,e.jsx)(s.h2,{id:"theming-integration",children:"Theming Integration"}),`
`,(0,e.jsxs)(s.p,{children:["Geo Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in ",(0,e.jsx)(s.code,{children:"GlobalChartsProvider"})," and passing a custom theme object with the properties you want to override to the ",(0,e.jsx)(s.code,{children:"theme"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`import { GlobalChartsProvider, GeoChart, type ChartTheme } from '@automattic/charts';

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
`,(0,e.jsx)(s.p,{children:"The chart uses the following theme properties:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"colors[0]"})}),": Primary color for data visualization (used for color axis range)"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"backgroundColor"})}),": Background color for the map"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:(0,e.jsx)(s.code,{children:"geoChart.featureFillColor"})}),": Fill color for countries without data"]}),`
`]}),`
`,(0,e.jsx)(s.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,(0,e.jsxs)(s.p,{children:["Like other charts in this library, GeoChart supports responsive sizing. By default, it ",(0,e.jsx)(s.strong,{children:"fills its parent container's dimensions"}),":"]}),`
`,(0,e.jsx)(o.kL,{language:"tsx",code:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '100%', height: '400px' }}>
	<GeoChart data={ordersByCountry} />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%' }}>
	<GeoChart data={ordersByCountry} aspectRatio={0.625} />
</div>

// Fixed dimensions
<GeoChart data={ordersByCountry} width={800} height={500} />`}),`
`,(0,e.jsxs)(s.p,{children:["For more details on responsive behavior, see the ",(0,e.jsx)(s.a,{href:"./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design",children:"Responsive Design section"})," in the introduction."]}),`
`,(0,e.jsx)(s.h2,{id:"map-projection",children:"Map Projection"}),`
`,(0,e.jsx)(s.p,{children:"The Geo Chart uses Google Charts' default Mercator projection for world map visualization. The map automatically scales to fit within the specified dimensions."}),`
`,(0,e.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,e.jsx)(s.h3,{id:"data-preparation",children:"Data Preparation"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Use full country names"}),": Recommended for better readability (e.g., 'United States' instead of 'US')"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"ISO codes supported"}),": Two-letter ISO 3166-1 alpha-2 codes also work if needed"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Validate data"}),": Check that values are positive numbers"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Consider scale"}),": Large value ranges will show more dramatic color differences"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Alternative views"}),": Consider providing a data table or list view for users who prefer non-visual data"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Color contrast"}),": The automatic color scaling maintains theme consistency, but test with your specific color choices"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Keyboard navigation"}),": Currently, the chart is primarily mouse-driven; consider complementing with keyboard-accessible data views"]}),`
`]}),`
`,(0,e.jsx)(s.h2,{id:"accessibility-1",children:"Accessibility"}),`
`,(0,e.jsx)(s.h3,{id:"mouse-interaction",children:"Mouse Interaction"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Hover"}),": Move the mouse over any country to see its data in a tooltip"]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Visual feedback"}),": Countries with data show graduated colors based on value magnitude"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsx)(s.p,{children:"Google Charts provides some built-in accessibility features. For better accessibility:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Provide a data table or list alongside the chart"}),`
`,(0,e.jsx)(s.li,{children:"Use descriptive headings to introduce the geographical data"}),`
`,(0,e.jsxs)(s.li,{children:["Consider adding ",(0,e.jsx)(s.code,{children:"aria-label"})," or ",(0,e.jsx)(s.code,{children:"aria-describedby"})," to the container element"]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsx)(s.p,{children:"Google Charts GeoChart does not support keyboard navigation, so this limitation is inherited by this component. For full accessibility:"}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsx)(s.li,{children:"Complement the chart with a keyboard-accessible data table"}),`
`,(0,e.jsx)(s.li,{children:"Provide text summaries of key insights"}),`
`,(0,e.jsx)(s.li,{children:"Consider using the chart as a visual supplement to accessible data presentations"}),`
`]})]})}function h(c={}){const{wrapper:s}={...(0,d.R)(),...c.components};return s?(0,e.jsx)(s,{...c,children:(0,e.jsx)(a,{...c})}):a(c)}},"../charts/src/charts/geo-chart/stories/index.stories.tsx"(_,l,t){t.r(l),t.d(l,{AspectRatio:()=>h,Default:()=>r,EmptyData:()=>s,EuropeanCountries:()=>p,FixedDimensions:()=>a,SingleCountry:()=>c,USStates:()=>u,__namedExportsOrder:()=>m,default:()=>n});var i=t("../charts/src/stories/sample-data/index.ts"),e=t("../charts/src/charts/geo-chart/geo-chart.tsx"),d=t("../charts/src/charts/geo-chart/stories/config.tsx");const n={...d.s,title:"JS Packages/Charts Library/Charts/Geo Chart",component:e.A},r={args:{...d._}},a={args:{...r.args,width:600,height:300}},h={args:{...r.args,aspectRatio:.5}},c={args:{...r.args,data:[["Country","Views"],["United States",1500]]}},s={args:{...r.args,data:[["Country","Views"]]}},u={args:{...r.args,region:"US",resolution:"provinces",data:i.fP}},p={args:{...r.args,region:"150",resolution:"countries",data:i.F_}},m=["Default","FixedDimensions","AspectRatio","SingleCountry","EmptyData","USStates","EuropeanCountries"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs
  }
}`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: 600,
    height: 300
  }
}`,...a.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    aspectRatio: 0.5
  }
}`,...h.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [['Country', 'Views'], ['United States', 1500]]
  }
}`,...c.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [['Country', 'Views']]
  }
}`,...s.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    region: 'US',
    resolution: 'provinces',
    data: viewsByUSState
  }
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    region: '150',
    resolution: 'countries',
    data: viewsByEuropeanCountry
  }
}`,...p.parameters?.docs?.source}}}},"../charts/src/charts/geo-chart/stories/tooltip.stories.tsx"(_,l,t){t.r(l),t.d(l,{Complex:()=>a,FormattedValues:()=>n,HTML:()=>o,PlainText:()=>r,__namedExportsOrder:()=>h,default:()=>d});var i=t("../charts/src/charts/geo-chart/stories/config.tsx");const d={...i.s,title:"JS Packages/Charts Library/Charts/Geo Chart/Tooltips"},o={args:{...i._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,"<b>United States</b><br/>1,000 orders"],["Canada",500,"<b>Canada</b><br/>500 orders"],["United Kingdom",450,"<b>United Kingdom</b><br/>450 orders"],["Germany",400,"<b>Germany</b><br/>400 orders"]]}},n={args:{...i._,data:[["Country","Revenue"],["United States",{v:1234567,f:"$1.23M"}],["Canada",{v:543210,f:"$543K"}],["United Kingdom",{v:789012,f:"$789K"}],["Germany",{v:456789,f:"$457K"}],["France",{v:321098,f:"$321K"}]]}},r={args:{...i._,data:[["Country","Orders",{type:"string",role:"tooltip"}],["United States",1e3,"United States: 1,000 orders (40% of total)"],["Canada",500,"Canada: 500 orders (20% of total)"],["United Kingdom",450,"United Kingdom: 450 orders (18% of total)"],["Germany",400,"Germany: 400 orders (16% of total)"],["France",150,"France: 150 orders (6% of total)"]]}},a={args:{...i._,data:[["Country","Orders",{type:"string",role:"tooltip",p:{html:!0}}],["United States",1e3,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
                    <div style="color: #666;">Orders: <strong>1,000</strong></div>
                    <div style="color: #666;">Share: <strong>40%</strong></div>
                </div>`],["Canada",500,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1E8}\u{1F1E6} Canada</div>
                    <div style="color: #666;">Orders: <strong>500</strong></div>
                    <div style="color: #666;">Share: <strong>20%</strong></div>
                </div>`],["United Kingdom",450,`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1EC}\u{1F1E7} United Kingdom</div>
                    <div style="color: #666;">Orders: <strong>450</strong></div>
                    <div style="color: #666;">Share: <strong>18%</strong></div>
                </div>`]]}},h=["HTML","FormattedValues","PlainText","Complex"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip',
      p: {
        html: true
      }
    }], ['United States', 1000, '<b>United States</b><br/>1,000 orders'], ['Canada', 500, '<b>Canada</b><br/>500 orders'], ['United Kingdom', 450, '<b>United Kingdom</b><br/>450 orders'], ['Germany', 400, '<b>Germany</b><br/>400 orders']]
  }
}`,...o.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Revenue'], ['United States', {
      v: 1234567,
      f: '$1.23M'
    }], ['Canada', {
      v: 543210,
      f: '$543K'
    }], ['United Kingdom', {
      v: 789012,
      f: '$789K'
    }], ['Germany', {
      v: 456789,
      f: '$457K'
    }], ['France', {
      v: 321098,
      f: '$321K'
    }]]
  }
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip'
    }], ['United States', 1000, 'United States: 1,000 orders (40% of total)'], ['Canada', 500, 'Canada: 500 orders (20% of total)'], ['United Kingdom', 450, 'United Kingdom: 450 orders (18% of total)'], ['Germany', 400, 'Germany: 400 orders (16% of total)'], ['France', 150, 'France: 150 orders (6% of total)']]
  }
}`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...geoChartStoryArgs,
    data: [['Country', 'Orders', {
      type: 'string',
      role: 'tooltip',
      p: {
        html: true
      }
    }], ['United States', 1000, \`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1FA}\u{1F1F8} United States</div>
                    <div style="color: #666;">Orders: <strong>1,000</strong></div>
                    <div style="color: #666;">Share: <strong>40%</strong></div>
                </div>\`], ['Canada', 500, \`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1E8}\u{1F1E6} Canada</div>
                    <div style="color: #666;">Orders: <strong>500</strong></div>
                    <div style="color: #666;">Share: <strong>20%</strong></div>
                </div>\`], ['United Kingdom', 450, \`<div style="padding: 12px; font-family: sans-serif;">
                    <div style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">\u{1F1EC}\u{1F1E7} United Kingdom</div>
                    <div style="color: #666;">Orders: <strong>450</strong></div>
                    <div style="color: #666;">Share: <strong>18%</strong></div>
                </div>\`]]
  }
}`,...a.parameters?.docs?.source}}}},"../charts/src/charts/geo-chart/geo-chart.tsx"(_,l,t){t.d(l,{A:()=>T});var i=t("../../../node_modules/.pnpm/@wordpress+i18n@6.15.0/node_modules/@wordpress/i18n/build-module/index.mjs"),e=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react-google-charts@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-google-charts/dist/index.js"),n=t("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),r=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),a=t("../charts/src/utils/color-utils.ts"),h=t("../charts/src/utils/resolve-css-var.ts"),c=t("../charts/src/charts/private/with-responsive/with-responsive.tsx"),s=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=t.n(s),p=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"),m={};m.insert="head",m.singleton=!1;var w=u()(p.A,m);const j=p.A.locals||{};var g=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=i.__,C="#ffffff",D="#ffffff",E=({className:x,data:v,width:S,height:b,region:U="world",resolution:A="countries",renderPlaceholder:P})=>{const{getElementStyles:B,theme:{geoChart:{featureFillColor:F},backgroundColor:L}}=(0,n.j)(),k=(0,g.jsx)("div",{className:(0,e.A)("geo-chart",j.container,x),"data-testid":"geo-chart-loading",style:{width:S,height:b},children:P?P():y("Loading map","jetpack-charts")}),R=B({index:0}).color,M=(0,a.iK)(R,.8),I=(0,a.HU)(L,null,h.q)||D,G=(0,a.HU)(F,null,h.q)||C,K=(0,d.useMemo)(()=>v.length>0&&v[0].some(f=>typeof f=="object"&&f!==null&&"role"in f&&f.role==="tooltip"&&"p"in f&&typeof f.p=="object"&&f.p!==null&&"html"in f.p&&f.p.html===!0),[v]),W=(0,d.useMemo)(()=>({...U!=="world"&&{region:U},...A!=="countries"&&{resolution:A},colorAxis:{colors:[M,R]},backgroundColor:I,datalessRegionColor:G,defaultColor:G,tooltip:{trigger:"focus",isHtml:K},legend:"none",keepAspectRatio:!0}),[U,A,M,R,I,G,K]);return(0,g.jsx)("div",{className:(0,e.A)("geo-chart",j.container,x),"data-testid":"geo-chart",style:{width:S,height:b,backgroundColor:L},children:(0,g.jsx)(o.t1,{chartType:"GeoChart",width:S,height:b,data:v,options:W,loader:k})})},O=x=>(0,d.useContext)(r.m)?(0,g.jsx)(E,{...x}):(0,g.jsx)(r.S,{children:(0,g.jsx)(E,{...x})});O.displayName="GeoChart";const T=(0,c.F)(O);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},region:{defaultValue:{value:"'world'"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},resolution:{defaultValue:{value:"'countries'"},description:`Resolution level for the map.
- 'countries': Country-level (default for 'world')
- 'provinces': State/province level (use with specific region like 'US')
- 'metros': Metropolitan areas (US only)`,name:"resolution",required:!1,type:{name:"enum",value:[{value:'"countries"'},{value:'"provinces"'},{value:'"metros"'}]}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#ResponsiveChart"})}catch{}try{GeoChart.displayName="GeoChart",GeoChart.__docgenInfo={description:"",displayName:"GeoChart",props:{data:{defaultValue:null,description:`Data in Google Charts native format for maximum flexibility.
First row contains column headers, subsequent rows contain data.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes
(e.g., 'United States' or 'US').`,name:"data",required:!0,type:{name:"GeoData"}},region:{defaultValue:{value:"world"},description:`Region to display. Use 'world' for global view, 'US' for United States,
or any ISO 3166-1 alpha-2 country code.`,name:"region",required:!1,type:{name:"GeoRegion"}},resolution:{defaultValue:{value:"countries"},description:`Resolution level for the map.
- 'countries': Country-level (default for 'world')
- 'provinces': State/province level (use with specific region like 'US')
- 'metros': Metropolitan areas (US only)`,name:"resolution",required:!1,type:{name:"enum",value:[{value:'"countries"'},{value:'"provinces"'},{value:'"metros"'}]}},renderPlaceholder:{defaultValue:null,description:`Optional render function for the loading placeholder.
Called while Google Charts is loading.`,name:"renderPlaceholder",required:!1,type:{name:"() => ReactNode"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"]={docgenInfo:GeoChart.__docgenInfo,name:"GeoChart",path:"../charts/src/charts/geo-chart/geo-chart.tsx#GeoChart"})}catch{}},"../charts/src/charts/geo-chart/stories/config.tsx"(_,l,t){t.d(l,{_:()=>r,s:()=>n});var i=t("../charts/src/stories/chart-decorator.tsx"),e=t("../charts/src/stories/theme-config.tsx"),d=t("../charts/src/stories/sample-data/index.ts"),o=t("../charts/src/charts/geo-chart/geo-chart.tsx");const n={title:"JS Packages/Charts Library/Charts/Geo Chart",component:o.A,parameters:{layout:"centered"},decorators:[i.OI],argTypes:{...i.xo,...e.jW}},r={data:d.M8,withPadding:!1};try{GeoData.displayName="GeoData",GeoData.__docgenInfo={description:`Data format for GeoChart - uses Google Charts native data format for maximum flexibility.
First element is the header row, subsequent elements are data rows.

Country identifiers can be either full country names or ISO 3166-1 alpha-2 codes (e.g., 'United States' or 'US').
Full names are recommended for better readability in tooltips.`,displayName:"GeoData",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/geo-chart/stories/config.tsx#GeoData"]={docgenInfo:GeoData.__docgenInfo,name:"GeoData",path:"../charts/src/charts/geo-chart/stories/config.tsx#GeoData"})}catch{}},"../charts/src/charts/private/with-responsive/with-responsive.tsx"(_,l,t){t.d(l,{F:()=>s});var i=t("../../../node_modules/.pnpm/@visx+responsive@3.12.0_react@18.3.1/node_modules/@visx/responsive/esm/hooks/useParentSize.js"),e=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=t.n(e),o=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/with-responsive/with-responsive.module.scss"),n={};n.insert="head",n.singleton=!1;var r=d()(o.A,n);const a=o.A.locals||{};var h=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({resizeDebounceTime:u=300,maxWidth:p=1200,aspectRatio:m})=>{const{parentRef:w,width:j,height:g}=(0,i.A)({debounceTime:u,enableDebounceLeadingCall:!0}),y=j>0?Math.min(j,p):0,C=m!==void 0?y*m:g;return{parentRef:w,width:y,height:C,hasAspectRatio:m!==void 0}};function s(u){return function({resizeDebounceTime:m=300,maxWidth:w=1200,aspectRatio:j,size:g,width:y,height:C,...D}){const{parentRef:E,width:O,height:T,hasAspectRatio:x}=c({resizeDebounceTime:m,maxWidth:w,aspectRatio:j}),v=O||y||0,S=T||C||0,b=x?"auto":"100%";return(0,h.jsx)("div",{ref:E,"data-testid":"responsive-wrapper",className:a.container,style:{width:y??"100%",height:C??b},children:(0,h.jsx)(u,{width:v,height:S,size:g,...D})})}}try{s.displayName="withResponsive",s.__docgenInfo={description:"A higher-order component that provides responsive dimensions\nto the wrapped chart component using useParentSize from `@visx/responsive`.",displayName:"withResponsive",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"]={docgenInfo:s.__docgenInfo,name:"withResponsive",path:"../charts/src/charts/private/with-responsive/with-responsive.tsx#withResponsive"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/geo-chart/geo-chart.module.scss"(_,l,t){t.d(l,{A:()=>r});var i=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(i),d=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),o=t.n(d),n=o()(e());n.push([_.id,".lAFi7oOf7oa6dhX2GP1E{position:relative;display:flex;justify-content:center;align-items:center}",""]),n.locals={container:"lAFi7oOf7oa6dhX2GP1E"};const r=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/private/with-responsive/with-responsive.module.scss"(_,l,t){t.d(l,{A:()=>r});var i=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(i),d=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),o=t.n(d),n=o()(e());n.push([_.id,".dAliwoUz2qgTlolGLhfq{min-width:0;min-height:0}",""]),n.locals={container:"dAliwoUz2qgTlolGLhfq"};const r=n}}]);
