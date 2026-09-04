import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-B4ONLoAz.js";import{i as r,n as i,r as a,t as o}from"./blocks-CBloGn9A.js";import{t as s}from"./mdx-react-shim-BqhL27Jd.js";import{Default as c,HostLocaleAndTimeZoneFormatDates as l,WithColorOverrides as u,n as d,t as f}from"./index.stories-xKD24pPT.js";function p(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{title:`JS Packages/Charts Library/Chart Context`,of:f}),`
`,(0,h.jsx)(t.h1,{id:`global-charts-context`,children:`Global Charts Context`}),`
`,(0,h.jsx)(t.p,{children:`The Global Charts Context provides centralized theme management, color coordination, and chart registration for multiple charts within an application. It ensures consistent styling and behavior across all chart components while optimizing performance through intelligent color caching and stable group assignments.`}),`
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsx)(t.p,{children:`The Global Charts Context system consists of three main parts:`}),`
`,(0,h.jsxs)(t.ol,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`GlobalChartsProvider`}),` - A React provider component that wraps your application`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`GlobalChartsContext`}),` - The underlying React context that manages shared state`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Context hooks`}),` - Utilities for accessing theme and registration functionality`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,h.jsxs)(t.p,{children:[`For detailed information about provider props, context values, and type definitions, see the `,(0,h.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-global-context-api-reference--docs`,children:`API Reference`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,h.jsx)(t.h3,{id:`setting-up-the-provider`,children:`Setting Up the Provider`}),`
`,(0,h.jsxs)(t.p,{children:[`Wrap your application or chart components with `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`}),` to enable theme sharing and color coordination:`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { GlobalChartsProvider, LineChart, BarChart } from '@automattic/charts';

function App() {
	return (
		<GlobalChartsProvider>
			<div className="dashboard">
				<LineChart data={ salesData } />
				<BarChart data={ conversionData } />
				{ /* All charts share the same theme and color coordination */ }
			</div>
		</GlobalChartsProvider>
	);
}`}),`
`,(0,h.jsx)(t.h3,{id:`basic-provider-props`,children:`Basic Provider Props`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`theme`})}),` `,(0,h.jsx)(t.em,{children:`(optional)`}),`: Partial theme object to customize chart appearance`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`locale`})}),` `,(0,h.jsx)(t.em,{children:`(optional)`}),`: BCP-47 tag every date label is rendered in, e.g. `,(0,h.jsx)(t.code,{children:`de-DE`})]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`timeZone`})}),` `,(0,h.jsx)(t.em,{children:`(optional)`}),`: IANA zone every date label is dated in, e.g. `,(0,h.jsx)(t.code,{children:`Asia/Tokyo`})]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`children`})}),`: Chart components and other React elements`]}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dates-locale-and-time-zone`,children:`Dates: locale and time zone`}),`
`,(0,h.jsxs)(t.p,{children:[`The time axis and the built-in tooltips of `,(0,h.jsx)(t.code,{children:`LineChart`}),`, `,(0,h.jsx)(t.code,{children:`AreaChart`}),` and
`,(0,h.jsx)(t.code,{children:`BarChart`}),` render their dates through the provider's `,(0,h.jsx)(t.code,{children:`locale`}),` and `,(0,h.jsx)(t.code,{children:`timeZone`}),`. Set
them from whatever the host already knows — a WordPress site's user locale and
site timezone, say — and pass plain strings; the library never reaches for a
WordPress package to resolve them. `,(0,h.jsx)(t.code,{children:`locale`}),` is a BCP-47 tag, and WordPress's
underscored form (`,(0,h.jsx)(t.code,{children:`en_US`}),`) is repaired for you; a value `,(0,h.jsx)(t.code,{children:`Intl`}),` still cannot use
falls back to the runtime's own and warns in development.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`<GlobalChartsProvider locale="de-DE" timeZone="Asia/Tokyo">
	<LineChart data={ data } />
</GlobalChartsProvider>`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.p,{children:`Leave either out and that half falls back to the JavaScript runtime's own — the
viewer's browser locale and browser time zone. That is the default, so nothing
changes for a consumer that sets neither, but it does mean two people viewing
the same site from different countries see different axes until the host sets
them.`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`timeZone`}),` re-dates the instants you supply rather than relabeling them, so a
value that is really a calendar day moves under it: `,(0,h.jsx)(t.code,{children:`new Date( '2026-08-02' )`}),` is
UTC midnight, which is Aug 1 in `,(0,h.jsx)(t.code,{children:`America/Los_Angeles`}),`. A `,(0,h.jsx)(t.code,{children:`dateString`}),` point moves
the same way but by a viewer-dependent amount, because `,(0,h.jsx)(t.code,{children:`parseAsLocalDate`}),` reads it
as midnight in the browser's zone. Supply true instants alongside a `,(0,h.jsx)(t.code,{children:`timeZone`}),`, or
set only `,(0,h.jsx)(t.code,{children:`locale`}),` for day-bucketed data. CHARTS-268 has the detail.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Two things neither prop reaches. `,(0,h.jsx)(t.code,{children:`HeatmapChart`}),` builds its labels in
`,(0,h.jsx)(t.code,{children:`buildCalendarHeatmapData`}),`, a plain function the host calls outside the provider,
so they stay in English on the browser's calendar. And the boundaries that promote
a tick to its date or its year are read on the Gregorian calendar, so a
non-Gregorian `,(0,h.jsx)(t.code,{children:`locale`}),` labels its own new year while the year tick still lands on
January 1.`]}),`
`,(0,h.jsx)(t.h2,{id:`color-coordination`,children:`Color Coordination`}),`
`,(0,h.jsx)(t.h3,{id:`the-series-palette`,children:`The Series Palette`}),`
`,(0,h.jsx)(t.p,{children:`Series colors come from five CSS custom properties, declared on the provider wrapper and resolved once per provider:`}),`
`,(0,h.jsx)(a,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-color-series-1: #3858e9;
	--a8c-charts-color-series-2: #007a5a;
	--a8c-charts-color-series-3: #b3261e;
}`}),`
`,(0,h.jsxs)(t.p,{children:[`Only slot 1 has a default, and it reads `,(0,h.jsx)(t.code,{children:`--wp-admin-theme-color`}),` first — so in wp-admin, charts follow the site's admin color scheme with no configuration at all. The design system's brand token is the next leg, reached only where that variable is unset. Set more slots to widen the palette; charts generates accessible colors beyond whatever you set.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The order matters and is not interchangeable: on every React admin screen WordPress loads its own design-token stylesheet, which pins the brand token to a static value that does not track the color scheme. `,(0,h.jsx)(t.code,{children:`TOKENS.md`}),` has the detail.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`A slot left unset is skipped and the palette compacts.`}),` Set only slots 1 and 3 and the palette is two colors, in the order written — there is no gap where slot 2 would have been.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Five slots is a cap on `,(0,h.jsx)(t.em,{children:`seeds`}),`, not on series. A chart with twenty series still gets twenty distinct colors; the slots decide what the generator starts from.`]}),`
`,(0,h.jsx)(t.p,{children:`Precedence for a series color, highest first:`}),`
`,(0,h.jsxs)(t.ol,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`options.stroke`}),` on that series — the per-series override.`]}),`
`,(0,h.jsxs)(t.li,{children:[`A CSS declaration of `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-series-N`}),` anywhere between the chart and the provider.`]}),`
`,(0,h.jsx)(t.li,{children:`The catalog default, which only slot 1 has.`}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[`Because the palette resolves once at the provider wrapper, a slot set on a chart's `,(0,h.jsx)(t.em,{children:`own`}),` element has no effect — the colors were resolved before that element existed. Scope the rule to a wrapper around the chart, or use `,(0,h.jsx)(t.code,{children:`options.stroke`}),` for a single series.`]}),`
`,(0,h.jsx)(a,{language:`css`,code:`.my-dashboard {
	--a8c-charts-color-series-1: #3858e9;
	--a8c-charts-color-series-2: #007a5a;
}`}),`
`,(0,h.jsx)(t.h3,{id:`stable-colors-for-groups`,children:`Stable Colors for Groups`}),`
`,(0,h.jsxs)(t.p,{children:[`One of the key features of the Global Charts Context is `,(0,h.jsx)(t.strong,{children:`stable color assignment for groups`}),`. When data series have a `,(0,h.jsx)(t.code,{children:`group`}),` property, the same group will always receive the same color across all charts, even when data changes:`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Try toggling the countries on/off in the Default story`}),` - notice how each country maintains its assigned color regardless of which other countries are visible. This creates a consistent visual experience across multiple charts and data updates.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`// Data with group assignments
const data = [
	{
		label: 'United States Sales',
		group: 'united-states', // This group will always get the same color
		data: [ /* time series data */ ],
		options: {}
	},
	{
		label: 'Great Britain Sales',
		group: 'great-britain', // Different group, different stable color
		data: [ /* time series data */ ],
		options: {}
	}
];`}),`
`,(0,h.jsx)(t.h3,{id:`color-override-behavior`,children:`Color Override Behavior`}),`
`,(0,h.jsx)(t.p,{children:`The context respects explicit color overrides while maintaining group stability for non-overridden elements:`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`// Some elements have color overrides, others use global coordination
const dataWithOverrides = [
	{
		label: 'Priority Metric',
		group: 'priority',
		options: { stroke: '#e74c3c' }, // Red override - always red
		data: [ /* data */ ]
	},
	{
		label: 'Standard Metric',
		group: 'standard', // Uses coordinated theme color
		data: [ /* data */ ]
	}
];`}),`
`,(0,h.jsx)(t.h2,{id:`theme-system`,children:`Theme System`}),`
`,(0,h.jsx)(t.h3,{id:`theme-structure`,children:`Theme Structure`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Colors are CSS, not JS.`}),` Every color a chart paints has a `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-*`}),` catalog role behind it, declared anywhere inside the provider tree. The closest declaration wins, so scope a rule to one dashboard, or to `,(0,h.jsx)(t.code,{children:`.a8c-charts-scope`}),` to reach every chart on the page:`]}),`
`,(0,h.jsx)(a,{language:`css`,code:`.my-dashboard {
	/* Chart background and label plates */
	--a8c-charts-color-background: #fff;
	--a8c-charts-color-label-background: transparent;
	--a8c-charts-color-label-inverse: #ffffff;

	/* Grid, axis, ticks and their labels */
	--a8c-charts-color-grid: #dbdbdb;
	--a8c-charts-color-axis-x: #dbdbdb;
	--a8c-charts-color-tick-x: #dbdbdb;
	--a8c-charts-color-label-axis: #1e1e1e;

	/* Every label at once, legend included */
	--a8c-charts-color-label: #1e1e1e;

	/* Trend figures, on the leaderboard and funnel */
	--a8c-charts-color-trend-up: #008030;
	--a8c-charts-color-trend-neutral: #707070;
	--a8c-charts-color-trend-down: #cc1818;

	/* Floating surfaces: the funnel plate, the geo dataless fill */
	--a8c-charts-color-surface-secondary: #f4f4f4;
}`}),`
`,(0,h.jsxs)(t.p,{children:[`Series colors work the same way, through the five `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-series-*`}),` slots. See `,(0,h.jsx)(t.a,{href:`#the-series-palette`,children:`The Series Palette`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`theme`}),` prop carries shape and spacing — `,(0,h.jsx)(t.code,{children:`tickLength`}),`, stroke widths, font weights, the heatmap's compact sizing, the annotation geometry. Colors are not among them: each one is a role you set in CSS, as above. If you are upgrading from a version whose `,(0,h.jsx)(t.code,{children:`theme`}),` took colors, `,(0,h.jsx)(t.code,{children:`TOKENS.md`}),` maps each of those fields to the role that replaces it.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`<GlobalChartsProvider theme={ { tickLength: 6 } }>
	{ /* All charts inherit this */ }
</GlobalChartsProvider>`}),`
`,(0,h.jsx)(t.h3,{id:`theme-inheritance-and-merging`,children:`Theme Inheritance and Merging`}),`
`,(0,h.jsx)(t.p,{children:`Themes are merged with the default theme, so you only need to specify the properties you want to customize.`}),`
`,(0,h.jsxs)(t.p,{children:[`Colors are not part of that merge at all — they reach a chart through the catalog, so leaving the `,(0,h.jsx)(t.code,{children:`theme`}),` prop off entirely still gives a chart the design system's colors.`]}),`
`,(0,h.jsx)(t.h3,{id:`css-custom-property-overrides`,children:`CSS Custom Property Overrides`}),`
`,(0,h.jsxs)(t.p,{children:[`The package's `,(0,h.jsx)(t.code,{children:`--a8c-charts-*`}),` token catalog is emitted once, on the `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`}),` wrapper element, so you can retheme any chart with plain CSS — no `,(0,h.jsx)(t.code,{children:`theme`}),` prop required, as long as a `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`}),` is present (every chart either sits under one explicitly or auto-mounts its own). Set the role you want to change on the provider wrapper, or on any element `,(0,h.jsx)(t.strong,{children:`inside`}),` the provider tree that is an `,(0,h.jsx)(t.strong,{children:`ancestor`}),` of the chart; the closest such declaration wins:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`.my-dashboard {
	--a8c-charts-color-grid: #e0e0e0;
	--a8c-charts-color-trend-up: #007a3d;
}
`})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<GlobalChartsProvider>
	<div className="my-dashboard">
		<LineChart data={ salesData } />
	</div>
</GlobalChartsProvider>
`})}),`
`,(0,h.jsxs)(t.p,{children:[`Setting these on an ancestor of `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`}),` has no effect — the provider's own declaration on its wrapper always beats a value inherited from further up the tree. To theme every chart on a page, target the scope class itself instead of an ancestor:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`.a8c-charts-scope {
	--a8c-charts-color-grid: #e0e0e0;
}
`})}),`
`,(0,h.jsxs)(t.p,{children:[`That rule matches every provider wrapper — including the one a bare chart mounts for itself — and it beats the catalog default, which is declared through `,(0,h.jsx)(t.code,{children:`:where()`}),` at zero specificity. If you previously set `,(0,h.jsx)(t.code,{children:`--a8c-charts-*`}),` on `,(0,h.jsx)(t.code,{children:`:root`}),` or on a wrapper above your charts, this is the replacement. See TOKENS.md for the full precedence order.`]}),`
`,(0,h.jsx)(t.p,{children:`Two placements need care:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`A chart's own class reaches everything it paints, but not the palette.`}),` Setting a role on the element a chart's `,(0,h.jsx)(t.code,{children:`className`}),` lands on — `,(0,h.jsx)(t.code,{children:`.line-chart { --a8c-charts-color-grid: … }`}),` — moves the gridlines, axis lines and tick labels, because each of those carries its `,(0,h.jsx)(t.code,{children:`var()`}),` chain onto the element and resolves it there. It does not move the series colors or the chart background: those are read as strings in JS, at the chart's scope element, which is an ancestor of the class you targeted. Scope a rule for those to a wrapper `,(0,h.jsx)(t.strong,{children:`around`}),` the chart.`]}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsxs)(t.strong,{children:[(0,h.jsx)(t.code,{children:`@wordpress/theme`}),`'s `,(0,h.jsx)(t.code,{children:`ThemeProvider`}),` belongs above `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`})]}),`, not between it and a chart. The catalog reads its `,(0,h.jsx)(t.code,{children:`--wpds-*`}),` tokens at the provider wrapper, so a `,(0,h.jsx)(t.code,{children:`ThemeProvider`}),` mounted below that wrapper is never consulted and CSS-painted colors keep the light-mode spec values.`]}),`
`]}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsxs)(t.strong,{children:[`The `,(0,h.jsx)(t.code,{children:`theme`}),` prop is not a second override path — it carries no colors at all.`]}),` A role has one source outside the catalog: a CSS declaration of it. What `,(0,h.jsx)(t.code,{children:`theme`}),` carries is shape and spacing — `,(0,h.jsx)(t.code,{children:`tickLength`}),`, `,(0,h.jsx)(t.code,{children:`gridStyles.strokeWidth`}),`, `,(0,h.jsx)(t.code,{children:`svgLabelSmall.fontFamily`}),`, the annotation geometry, the leaderboard's gaps.`]}),`
`,(0,h.jsx)(t.p,{children:`Two roles are narrower than their obvious name, so that moving one thing does not move four:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`--a8c-charts-color-label-axis`}),` derives from `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-label`}),`. Set the broad one to move every label — legend labels, heatmap cell values, funnel labels, the line-chart tooltip — or the narrow one to move only the SVG axis labels.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`--a8c-charts-color-surface`}),` — the annotation label, `,(0,h.jsx)(t.code,{children:`.x-zoom__reset`}),`, tooltips — is a sibling of `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-background`}),`, not a child, so the chart's background and the surfaces over it move independently.`]}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[`The axes go the other way: there is no broad axis role, only `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-axis-x`}),` / `,(0,h.jsx)(t.code,{children:`-tick-x`}),` and `,(0,h.jsx)(t.code,{children:`--a8c-charts-color-axis-y`}),` / `,(0,h.jsx)(t.code,{children:`-tick-y`}),`. The y pair resolves to `,(0,h.jsx)(t.code,{children:`none`}),`, so that axis carries labels only until you declare one.`]}),`
`,(0,h.jsx)(t.p,{children:`See TOKENS.md for the full catalog and precedence order.`}),`
`,(0,h.jsx)(t.h2,{id:`chart-registration`,children:`Chart Registration`}),`
`,(0,h.jsx)(t.h3,{id:`automatic-registration`,children:`Automatic Registration`}),`
`,(0,h.jsx)(t.p,{children:`Charts automatically register themselves with the Global Charts Context when mounted. This enables features like:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Coordinated legends`}),` - Multiple charts can share legend items`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Color synchronization`}),` - Ensures consistent colors across charts`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Metadata sharing`}),` - Charts can share contextual information`]}),`
`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`// Charts automatically register with a unique ID
<LineChart
	data={ data }
	chartId="sales-trends" // Optional: provide explicit ID
/>

// The context tracks:
// - Legend items from this chart
// - Chart type ('line-chart')
// - Any additional metadata`}),`
`,(0,h.jsx)(t.h2,{id:`series-visibility`,children:`Series Visibility`}),`
`,(0,h.jsxs)(t.p,{children:[`The context tracks which series are hidden per chart (by `,(0,h.jsx)(t.code,{children:`chartId`}),`) and exposes three ways to change that state, each suited to a different caller:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`toggleSeriesVisibility( chartId, seriesLabel )`})}),` — flips a series' current state. This is what an interactive legend (`,(0,h.jsx)(t.code,{children:`legend.interactive`}),`) calls on click; use it when you don't know or don't care about the series' current visibility.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`setSeriesVisibility( chartId, seriesLabel, visible )`})}),` — the absolute counterpart to the toggle. Use it when the caller already knows the target state, e.g. driving visibility from an external control instead of a click.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:(0,h.jsx)(t.code,{children:`setChartHiddenSeries( chartId, seriesLabels )`})}),` — replaces a chart's entire hidden set in one call, rather than toggling series one at a time. The `,(0,h.jsx)(t.code,{children:`defaultHiddenSeries`}),` prop (available on `,(0,h.jsx)(t.code,{children:`LineChart`}),`, `,(0,h.jsx)(t.code,{children:`AreaChart`}),`, and `,(0,h.jsx)(t.code,{children:`BarChart`}),`) writes through this for its first defined value; later values for the same `,(0,h.jsx)(t.code,{children:`chartId`}),` are ignored, and user changes persist across remounts until the `,(0,h.jsx)(t.code,{children:`chartId`}),` changes.`]}),`
`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { useGlobalChartsContext } from '@automattic/charts';

function VisibilityControls( { chartId } ) {
	const { toggleSeriesVisibility, setSeriesVisibility, setChartHiddenSeries } =
		useGlobalChartsContext();

	return (
		<>
			{ /* Don't know or care about the current state: just flip it, like a legend click would. */ }
			<button onClick={ () => toggleSeriesVisibility( chartId, 'Revenue' ) }>
				Toggle Revenue
			</button>

			{ /* Know the target state: drive visibility from an external control. */ }
			<button onClick={ () => setSeriesVisibility( chartId, 'Revenue', true ) }>
				Show Revenue
			</button>
			<button onClick={ () => setSeriesVisibility( chartId, 'Revenue', false ) }>
				Hide Revenue
			</button>

			{ /* Replace the whole hidden set in one call, e.g. to reset to a preset view. */ }
			<button onClick={ () => setChartHiddenSeries( chartId, [ 'Costs', 'Refunds' ] ) }>
				Reset to defaults
			</button>
		</>
	);
}`}),`
`,(0,h.jsx)(t.h2,{id:`context-hooks`,children:`Context Hooks`}),`
`,(0,h.jsx)(t.h3,{id:`useglobalchartscontext`,children:`useGlobalChartsContext`}),`
`,(0,h.jsx)(t.p,{children:`Access the full context for advanced chart functionality:`}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { useGlobalChartsContext } from '@automattic/charts';

function CustomChart() {
	const {
		theme,
		getElementStyles,
		registerChart,
		unregisterChart,
		getChartData
	} = useGlobalChartsContext();

	// Get consistent styling for chart elements
	const elementStyles = getElementStyles( {
		data: myDataPoint,
		index: 0,
		overrideColor: undefined,
		legendShape: 'line'
	} );

	return (
		<div style={ { color: elementStyles.color } }>
			{ /* Custom chart implementation */ }
		</div>
	);
}`}),`
`,(0,h.jsx)(t.h3,{id:`usechartscopeelement`,children:`useChartScopeElement`}),`
`,(0,h.jsxs)(t.p,{children:[`Returns the element a chart's tokens resolve against — the wrapper the chart renders into, which is where an override set anywhere between the provider and that chart has landed. Pair it with `,(0,h.jsx)(t.code,{children:`normalizeColorToHex`}),` and `,(0,h.jsx)(t.code,{children:`resolveCssVariable`}),` when JS needs a `,(0,h.jsx)(t.em,{children:`resolved`}),` color rather than the token string: computing text contrast against the chart background, for example, or feeding a color to Google Charts, which cannot read `,(0,h.jsx)(t.code,{children:`var()`}),`.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import {
	useChartScopeElement,
	normalizeColorToHex,
	resolveCssVariable,
} from '@automattic/charts';

function ContrastAwareLabel() {
	const scopeElement = useChartScopeElement();

	// Resolves at call time, so the result follows a light/dark switch
	// even when the role's value never changes. Empty input returns ''.
	const backgroundHex = normalizeColorToHex(
		'var(--a8c-charts-color-background, #fff)',
		scopeElement,
		resolveCssVariable
	);

	return <span>{ backgroundHex }</span>;
}`}),`
`,(0,h.jsxs)(t.p,{children:[`Resolve at this element rather than at `,(0,h.jsx)(t.code,{children:`document.documentElement`}),` or at the provider wrapper. Either of those sees only what is declared at or above it, so a chart-scoped override — one set between the provider and a single chart — would be invisible to JS while still painting in CSS, and the two paint paths would disagree. `,(0,h.jsx)(t.code,{children:`area-chart`}),`, `,(0,h.jsx)(t.code,{children:`line-chart`}),`, `,(0,h.jsx)(t.code,{children:`geo-chart`}),` and `,(0,h.jsx)(t.code,{children:`heatmap-chart`}),` all take this path.`]}),`
`,(0,h.jsx)(t.h3,{id:`useglobalchartstheme`,children:`useGlobalChartsTheme`}),`
`,(0,h.jsx)(t.p,{children:`Access just the theme when you only need the non-color settings — sizing, weights, tick length. For colors, declare the catalog role on your own element instead: it inherits from the provider wrapper, so it already carries whatever the charts beside it are using, and it keeps following an override the theme snapshot would miss.`}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { useGlobalChartsTheme } from '@automattic/charts';

function ThemeAwareComponent() {
	const theme = useGlobalChartsTheme();

	return (
		<div
			className="my-panel"
			style={ { paddingInline: theme.tickLength } }
		>
			Styled using global chart theme
		</div>
	);
}`}),`
`,(0,h.jsx)(a,{language:`css`,code:`.my-panel {
	background: var(--a8c-charts-color-background, #fff);
	color: var(--a8c-charts-color-label, #1e1e1e);
}`}),`
`,(0,h.jsx)(t.h3,{id:`usechartformatting`,children:`useChartFormatting`}),`
`,(0,h.jsx)(t.p,{children:`Read the locale and time zone dates are rendered in, for a custom tooltip or
label that has to agree with the axis:`}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { useChartFormatting } from '@automattic/charts';

function BucketLabel( { date } ) {
	const { locale, timeZone } = useChartFormatting();

	return <span>{ date.toLocaleDateString( locale, { timeZone } ) }</span>;
}`}),`
`,(0,h.jsx)(t.p,{children:`Outside a provider it returns an empty object rather than throwing, so both
halves fall back to the runtime's own.`}),`
`,(0,h.jsx)(t.h3,{id:`usechartregistration`,children:`useChartRegistration`}),`
`,(0,h.jsx)(t.p,{children:`Register custom charts with the global context:`}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { useChartRegistration } from '@automattic/charts';

function CustomChart( { data, chartId } ) {
	// Register this chart with the global context
	useChartRegistration( {
		chartId: chartId || 'custom-chart',
		legendItems: data.map( item => ( {
			label: item.label,
			color: item.color
		} ) ),
		chartType: 'custom-chart',
		isDataValid: data.length > 0,
		metadata: { customProperty: 'value' }
	} );

	return <div>{ /* Chart implementation */ }</div>;
}`}),`
`,(0,h.jsx)(t.h2,{id:`date-bucket-classification`,children:`Date Bucket Classification`}),`
`,(0,h.jsx)(t.h3,{id:`getbucketinfo`,children:`getBucketInfo`}),`
`,(0,h.jsxs)(t.p,{children:[`Unlike the hooks above, this is a plain function — it reads no context and
needs no `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`LineChart`}),` and `,(0,h.jsx)(t.code,{children:`AreaChart`}),` classify a series' time bucket to pick their axis
and tooltip formats. `,(0,h.jsx)(t.code,{children:`getBucketInfo( data, tickResolution? )`}),` exposes that
same classification for a consumer building its own label:`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { getBucketInfo } from '@automattic/charts';

const bucketInfo = getBucketInfo( data, tickResolution );
// { bucket: 'day', displayResolution: 'day' }`}),`
`,(0,h.jsxs)(t.p,{children:[`It returns two fields because labeling and semantics diverge. A weekly
series is labeled with calendar dates exactly as a daily one is, so
`,(0,h.jsx)(t.code,{children:`displayResolution`}),` (`,(0,h.jsx)(t.code,{children:`Exclude< TickResolution, 'week' >`}),`) is what a date
format keys on. But a consumer may still need to know the series is weekly —
to write "Week of 5 Aug" rather than a bare date, say — and that is what
`,(0,h.jsx)(t.code,{children:`bucket`}),` carries.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`bucket`}),` only reports `,(0,h.jsx)(t.code,{children:`'week'`}),` when a caller declares it, via the same
`,(0,h.jsx)(t.code,{children:`tickResolution`}),` handed to the chart's `,(0,h.jsx)(t.code,{children:`options.axis.x`}),`. Seven-day spacing is
indistinguishable from sparse daily data, so `,(0,h.jsx)(t.code,{children:`getBucketInfo`}),` cannot recover a
week on its own; an undeclared weekly series reports `,(0,h.jsx)(t.code,{children:`'day'`}),` in both fields.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Inside a custom tooltip`}),`, read it directly: `,(0,h.jsx)(t.code,{children:`LineChart`}),` and `,(0,h.jsx)(t.code,{children:`AreaChart`}),`
always call `,(0,h.jsx)(t.code,{children:`renderTooltip`}),` with `,(0,h.jsx)(t.code,{children:`bucketInfo`}),` attached, so a custom renderer
needs no separate call and no cast.`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`<LineChart
	data={ data }
	renderTooltip={ params => {
		const heading =
			params.bucketInfo?.bucket === 'week' ? 'Week of …' : 'Day of …';
		return <span>{ heading }</span>;
	} }
/>`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsxs)(t.strong,{children:[`Anywhere else — `,(0,h.jsx)(t.code,{children:`tickFormat`}),` above all — call `,(0,h.jsx)(t.code,{children:`getBucketInfo`}),` yourself.`]}),`
visx fixes the `,(0,h.jsx)(t.code,{children:`tickFormat`}),` signature to `,(0,h.jsx)(t.code,{children:`( value, index, values ) => string`}),`,
so a chart has no channel to hand it `,(0,h.jsx)(t.code,{children:`bucketInfo`}),` the way it hands
`,(0,h.jsx)(t.code,{children:`renderTooltip`}),`. Call `,(0,h.jsx)(t.code,{children:`getBucketInfo`}),` in the component body with the same data
and `,(0,h.jsx)(t.code,{children:`tickResolution`}),` the chart receives, and close over the result:`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`import { getBucketInfo } from '@automattic/charts';

function MyChart( { data, tickResolution } ) {
	const bucketInfo = getBucketInfo( data, tickResolution );

	const tickFormat = ( timestamp ) =>
		bucketInfo.bucket === 'week' ? formatWeek( timestamp ) : formatDay( timestamp );

	return (
		<LineChart
			data={ data }
			options={ { axis: { x: { tickResolution, tickFormat } } } }
		/>
	);
}`}),`
`,(0,h.jsx)(t.h2,{id:`performance-considerations`,children:`Performance Considerations`}),`
`,(0,h.jsx)(t.h3,{id:`color-caching`,children:`Color Caching`}),`
`,(0,h.jsx)(t.p,{children:`The Global Charts Context implements intelligent color caching to optimize performance:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`HSL conversion caching`}),` - Color format conversions are cached and reused`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Hue analysis`}),` - Color relationships are pre-computed for better color selection`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Group mapping persistence`}),` - Group-to-color assignments persist across renders`]}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`efficient-updates`,children:`Efficient Updates`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Stable references`}),` - Context functions use `,(0,h.jsx)(t.code,{children:`useCallback`}),` for stable references`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Selective re-renders`}),` - Only charts that need updates are re-rendered when context changes`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Deep comparison`}),` - Legend items use deep comparison to prevent unnecessary updates`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`advanced-usage`,children:`Advanced Usage`}),`
`,(0,h.jsx)(t.h3,{id:`custom-element-styling`,children:`Custom Element Styling`}),`
`,(0,h.jsxs)(t.p,{children:[`Use the context's `,(0,h.jsx)(t.code,{children:`getElementStyles`}),` function to get consistent styling for custom chart elements:`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`function CustomChartElement( { seriesData, index, isHighlighted } ) {
	const { getElementStyles } = useGlobalChartsContext();

	const styles = getElementStyles( {
		data: seriesData,
		index,
		overrideColor: isHighlighted ? '#FF0000' : undefined,
		legendShape: 'circle'
	} );

	return (
		<circle
			fill={ styles.color }
			stroke={ styles.lineStyles.stroke }
			strokeWidth={ styles.lineStyles.strokeWidth }
			r="5"
		/>
	);
}`}),`
`,(0,h.jsx)(t.h3,{id:`multi-chart-coordination`,children:`Multi-Chart Coordination`}),`
`,(0,h.jsx)(t.p,{children:`The chart registration system enables powerful coordination between charts and standalone legends, allowing for flexible dashboard layouts with centralized legend areas.`}),`
`,(0,h.jsx)(t.h4,{id:`chart-registration-for-standalone-legends`,children:`Chart Registration for Standalone Legends`}),`
`,(0,h.jsxs)(t.p,{children:[`When charts register with a `,(0,h.jsx)(t.code,{children:`chartId`}),`, their legend data becomes available to standalone Legend components anywhere in your application:`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`function DashboardWithCentralizedLegends() {
	return (
		<GlobalChartsProvider>
			<div className="dashboard-layout">
				{ /* Charts with hidden legends but registered data */ }
				<div className="charts-grid">
					<LineChart
						chartId="revenue-trends"
						data={ revenueData }
						showLegend={ false }
						width={ 600 }
						height={ 200 }
					/>
					<BarChart
						chartId="sales-quarters"
						data={ salesData }
						showLegend={ false }
						width={ 300 }
						height={ 200 }
					/>
					<PieChart
						chartId="device-distribution"
						data={ deviceData }
						showLegend={ false }
					/>
				</div>

				{ /* Centralized legend panel retrieves data automatically */ }
				<aside className="legend-panel">
					<h3>Revenue Trends</h3>
					<Legend chartId="revenue-trends" orientation="vertical" shape="line" />

					<h3>Sales by Quarter</h3>
					<Legend chartId="sales-quarters" orientation="vertical" />

					<h3>Device Distribution</h3>
					<Legend chartId="device-distribution" orientation="vertical" shape="circle" />
				</aside>
			</div>
		</GlobalChartsProvider>
	);
}`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`Key Benefits:`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Flexible Layouts`}),` - Create complex dashboard designs with legends positioned anywhere`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Automatic Updates`}),` - Legend data updates automatically when chart data changes`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`No Prop Drilling`}),` - No need to pass legend data through component hierarchies`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsx)(t.h3,{id:`color-considerations`,children:`Color Considerations`}),`
`,(0,h.jsx)(t.p,{children:`When setting the catalog roles, ensure sufficient contrast between background and foreground colors to meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)`}),`
`,(0,h.jsx)(t.h3,{id:`automatic-color-generation`,children:`Automatic Color Generation`}),`
`,(0,h.jsx)(t.p,{children:`When your data has more series than the palette has seeds, the Global Charts Context automatically generates additional colors using a sophisticated algorithm:`}),`
`,(0,h.jsx)(t.h4,{id:`golden-ratio-distribution`,children:`Golden Ratio Distribution`}),`
`,(0,h.jsxs)(t.p,{children:[`The system uses the `,(0,h.jsx)(t.strong,{children:`golden ratio (φ ≈ 0.618)`}),` to generate mathematically pleasing color distributions:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Hue spacing`}),` - New hues are distributed for optimal visual separation`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Hue range constraint`}),` - Generated colors stay within an expanded range (130%) of the palette slots you set`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Wrap-around handling`}),` - Intelligently handles cases where those colors span across the 0° hue boundary`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`Note that only hex colors are supported for generating colors.`})}),`
`,(0,h.jsx)(t.h4,{id:`accessibility-first-generation`,children:`Accessibility-First Generation`}),`
`,(0,h.jsx)(t.p,{children:`All generated colors maintain WCAG AA compliance:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Base lightness: 35%`}),` - Ensures 4.5:1 contrast ratio against white backgrounds`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Lightness variations`}),` - Creates 4 levels (35%, 43%, 51%, 59%) for variety while maintaining accessibility`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Saturation variations`}),` - Uses 3 levels (60%, 75%, 90%) for visual distinction`]}),`
`]}),`
`,(0,h.jsx)(t.h4,{id:`perceptual-distance-optimization`,children:`Perceptual Distance Optimization`}),`
`,(0,h.jsx)(t.p,{children:`The algorithm ensures visual distinction between colors:`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Minimum distance threshold`}),` - Maintains 25+ units of perceptual distance between colors`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Smart retry logic`}),` - Up to 50 attempts per color to find sufficiently different options`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Distance calculation`}),` - Uses weighted HSL distance optimized for chart readability`]}),`
`]}),`
`,(0,h.jsx)(t.h4,{id:`practical-example`,children:`Practical Example`}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`/* Three seeds, set as CSS. */
.dashboard .a8c-charts-scope {
	--a8c-charts-color-series-1: #006DAB;
	--a8c-charts-color-series-2: #1F9828;
	--a8c-charts-color-series-3: #FF8C8F;
}`}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`// Data with 8 series - 5 additional colors will be auto-generated
const dataWithManySeries = [
	{ label: 'Series 1', group: 'A' }, // Uses #006DAB
	{ label: 'Series 2', group: 'B' }, // Uses #1F9828
	{ label: 'Series 3', group: 'C' }, // Uses #FF8C8F
	{ label: 'Series 4', group: 'D' }, // Auto-generated: ~hsl(193, 75%, 43%)
	{ label: 'Series 5', group: 'E' }, // Auto-generated: ~hsl(76, 60%, 51%)
	{ label: 'Series 6', group: 'F' }, // Auto-generated: ~hsl(318, 90%, 35%)
	{ label: 'Series 7', group: 'G' }, // Auto-generated: ~hsl(201, 75%, 59%)
	{ label: 'Series 8', group: 'H' }, // Auto-generated: ~hsl(84, 60%, 35%)
];

// All colors remain consistent across charts and re-renders
<div className="dashboard">
	<GlobalChartsProvider>
		<LineChart data={ dataWithManySeries } />
		<BarChart data={ dataWithManySeries } />
	</GlobalChartsProvider>
</div>`}),`
`,(0,h.jsx)(t.p,{children:`This ensures that even with a small palette, your charts maintain visual harmony, accessibility compliance, and consistent color assignments across your entire application.`}),`
`,(0,h.jsx)(t.h2,{id:`troubleshooting`,children:`Troubleshooting`}),`
`,(0,h.jsx)(t.h3,{id:`common-issues`,children:`Common Issues`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`Charts not inheriting theme:`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Ensure charts are wrapped with `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`})]}),`
`,(0,h.jsx)(t.li,{children:`Check that the theme object is properly structured`}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`Colors not staying consistent:`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Verify that data points include consistent `,(0,h.jsx)(t.code,{children:`group`}),` properties`]}),`
`,(0,h.jsx)(t.li,{children:`Check for conflicting color overrides in individual chart data`}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`Performance issues:`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Avoid creating new theme objects on every render`}),`
`,(0,h.jsxs)(t.li,{children:[`Use `,(0,h.jsx)(t.code,{children:`useMemo`}),` for complex theme calculations`]}),`
`,(0,h.jsx)(t.li,{children:`Minimize frequent context value changes`}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`error-boundaries`,children:`Error Boundaries`}),`
`,(0,h.jsxs)(t.p,{children:[`The context includes error handling for invalid usage, for example, accessing the context outside of a `,(0,h.jsx)(t.code,{children:`GlobalChartsProvider`}),`:`]}),`
`,(0,h.jsx)(a,{language:`tsx`,code:`// This will throw a helpful error
function ChartWithoutProvider() {
	const context = useGlobalChartsContext(); // Error: must be used within GlobalChartsProvider
	return <div>Chart content</div>;
}`})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),r(),d()}))();export{m as default};