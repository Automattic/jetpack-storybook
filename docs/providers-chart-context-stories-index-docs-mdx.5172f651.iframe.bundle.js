(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1069],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((l,n,r)=>{"use strict";r.d(n,{R:()=>s,x:()=>h});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},c=o.createContext(e);function s(i){const a=o.useContext(c);return o.useMemo(function(){return typeof i=="function"?i(a):{...a,...i}},[a,i])}function h(i){let a;return i.disableParentContext?a=typeof i.components=="function"?i.components(e):i.components||e:a=s(i.components),o.createElement(c.Provider,{value:a},i.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.1_/node_modules/@storybook/addon-docs/dist sync recursive":(l=>{function n(r){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.1_/node_modules/@storybook/addon-docs/dist sync recursive",l.exports=n}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/components sync recursive":(l=>{function n(r){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/components sync recursive",l.exports=n}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/theming sync recursive":(l=>{function n(r){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.1/node_modules/storybook/dist/theming sync recursive",l.exports=n}),"../charts/src/providers/chart-context/stories/index.docs.mdx":((l,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>a});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.1_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),h=r("../charts/src/providers/chart-context/stories/index.stories.tsx");function i(d){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...d.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.W8,{title:"JS Packages/Charts/Chart Context",of:h}),`
`,(0,e.jsx)(t.h1,{id:"global-charts-context",children:"Global Charts Context"}),`
`,(0,e.jsx)(t.p,{children:"The Global Charts Context provides centralized theme management, color coordination, and chart registration for multiple charts within an application. It ensures consistent styling and behavior across all chart components while optimizing performance through intelligent color caching and stable group assignments."}),`
`,(0,e.jsx)(s.Hl,{of:h.Default}),`
`,(0,e.jsx)(t.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(t.p,{children:"The Global Charts Context system consists of three main parts:"}),`
`,(0,e.jsxs)(t.ol,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"GlobalChartsProvider"})," - A React provider component that wraps your application"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"GlobalChartsContext"})," - The underlying React context that manages shared state"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Context hooks"})," - Utilities for accessing theme and registration functionality"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(t.h3,{id:"setting-up-the-provider",children:"Setting Up the Provider"}),`
`,(0,e.jsxs)(t.p,{children:["Wrap your application or chart components with ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})," to enable theme sharing and color coordination:"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { GlobalChartsProvider, LineChart, BarChart } from '@automattic/charts';

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
`,(0,e.jsx)(t.h3,{id:"basic-provider-props",children:"Basic Provider Props"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"theme"})})," ",(0,e.jsx)(t.em,{children:"(optional)"}),": Partial theme object to customize chart appearance"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:(0,e.jsx)(t.code,{children:"children"})}),": Chart components and other React elements"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"using-with-predefined-themes",children:"Using with Predefined Themes"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { GlobalChartsProvider, jetpackTheme, wooTheme } from '@automattic/charts';

// Using Jetpack theme
<GlobalChartsProvider theme={ jetpackTheme }>
	{ /* Charts will use Jetpack colors and styling */ }
</GlobalChartsProvider>

// Using WooCommerce theme
<GlobalChartsProvider theme={ wooTheme }>
	{ /* Charts will use WooCommerce colors and styling */ }
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.h2,{id:"color-coordination",children:"Color Coordination"}),`
`,(0,e.jsx)(t.h3,{id:"stable-colors-for-groups",children:"Stable Colors for Groups"}),`
`,(0,e.jsxs)(t.p,{children:["One of the key features of the Global Charts Context is ",(0,e.jsx)(t.strong,{children:"stable color assignment for groups"}),". When data series have a ",(0,e.jsx)(t.code,{children:"group"})," property, the same group will always receive the same color across all charts, even when data changes:"]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Try toggling the countries on/off in the Default story"})," - notice how each country maintains its assigned color regardless of which other countries are visible. This creates a consistent visual experience across multiple charts and data updates."]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Data with group assignments
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
`,(0,e.jsx)(t.h3,{id:"color-override-behavior",children:"Color Override Behavior"}),`
`,(0,e.jsx)(t.p,{children:"The context respects explicit color overrides while maintaining group stability for non-overridden elements:"}),`
`,(0,e.jsx)(s.Hl,{of:h.WithColorOverrides}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Some elements have color overrides, others use global coordination
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
`,(0,e.jsx)(t.h2,{id:"theme-system",children:"Theme System"}),`
`,(0,e.jsx)(t.h3,{id:"theme-structure",children:"Theme Structure"}),`
`,(0,e.jsx)(t.p,{children:"The Global Charts Context uses a comprehensive theme system that controls all visual aspects of charts:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`const customTheme: ChartTheme = {
	// Core colors used for data visualization
	colors: [ '#98C8DF', '#006DAB', '#A6DC80', '#1F9828', '#FF8C8F' ],

	// Chart background and labels
	backgroundColor: '#FFFFFF',
	labelBackgroundColor: 'transparent',
	labelTextColor: '#FFFFFF',

	// Grid and axis styling
	gridStyles: {
		stroke: '#DCDCDE',
		strokeWidth: 1,
	},
	xAxisLineStyles: { stroke: '#DCDCDE', strokeWidth: 1 },

	// Legend appearance
	legendLabelStyles: {
		color: 'var(--jp-gray-80, #2c3338)',
	},

	// Chart-specific theming
	leaderboardChart: {
		primaryColor: '#006DAB',
		secondaryColor: '#98C8DF',
		deltaColors: [ '#FF8C8F', '#757575', '#1F9828' ], // [negative, neutral, positive]
	},

	conversionFunnelChart: {
		primaryColor: '#006DAB',
		backgroundColor: '#F3F4F6',
	}
};

<GlobalChartsProvider theme={ customTheme }>
	{ /* All charts inherit these styles */ }
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.h3,{id:"theme-inheritance-and-merging",children:"Theme Inheritance and Merging"}),`
`,(0,e.jsx)(t.p,{children:"Themes are merged with the default theme, so you only need to specify the properties you want to customize:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Only customize colors - everything else uses defaults
const brandColors = {
	colors: [ '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7' ]
};

<GlobalChartsProvider theme={ brandColors }>
	{ /* Charts use custom colors but default grid, legends, etc. */ }
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.h2,{id:"chart-registration",children:"Chart Registration"}),`
`,(0,e.jsx)(t.h3,{id:"automatic-registration",children:"Automatic Registration"}),`
`,(0,e.jsx)(t.p,{children:"Charts automatically register themselves with the Global Charts Context when mounted. This enables features like:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Coordinated legends"})," - Multiple charts can share legend items"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Color synchronization"})," - Ensures consistent colors across charts"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Metadata sharing"})," - Charts can share contextual information"]}),`
`]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Charts automatically register with a unique ID
<LineChart
	data={ data }
	chartId="sales-trends" // Optional: provide explicit ID
/>

// The context tracks:
// - Legend items from this chart
// - Chart type ('line-chart')
// - Any additional metadata`}),`
`,(0,e.jsx)(t.h2,{id:"context-hooks",children:"Context Hooks"}),`
`,(0,e.jsx)(t.h3,{id:"useglobalchartscontext",children:"useGlobalChartsContext"}),`
`,(0,e.jsx)(t.p,{children:"Access the full context for advanced chart functionality:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { useGlobalChartsContext } from '@automattic/charts';

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
`,(0,e.jsx)(t.h3,{id:"useglobalchartstheme",children:"useGlobalChartsTheme"}),`
`,(0,e.jsx)(t.p,{children:"Access just the theme when you only need styling information:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { useGlobalChartsTheme } from '@automattic/charts';

function ThemeAwareComponent() {
	const theme = useGlobalChartsTheme();

	return (
		<div style={ {
			backgroundColor: theme.backgroundColor,
			color: theme.legendLabelStyles?.color
		} }>
			Styled using global chart theme
		</div>
	);
}`}),`
`,(0,e.jsx)(t.h3,{id:"usechartregistration",children:"useChartRegistration"}),`
`,(0,e.jsx)(t.p,{children:"Register custom charts with the global context:"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`import { useChartRegistration } from '@automattic/charts';

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
`,(0,e.jsx)(t.h2,{id:"performance-considerations",children:"Performance Considerations"}),`
`,(0,e.jsx)(t.h3,{id:"color-caching",children:"Color Caching"}),`
`,(0,e.jsx)(t.p,{children:"The Global Charts Context implements intelligent color caching to optimize performance:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"HSL conversion caching"})," - Color format conversions are cached and reused"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Hue analysis"})," - Color relationships are pre-computed for better color selection"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Group mapping persistence"})," - Group-to-color assignments persist across renders"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"efficient-updates",children:"Efficient Updates"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Stable references"})," - Context functions use ",(0,e.jsx)(t.code,{children:"useCallback"})," for stable references"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Selective re-renders"})," - Only charts that need updates are re-rendered when context changes"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Deep comparison"})," - Legend items use deep comparison to prevent unnecessary updates"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"advanced-usage",children:"Advanced Usage"}),`
`,(0,e.jsx)(t.h3,{id:"custom-element-styling",children:"Custom Element Styling"}),`
`,(0,e.jsxs)(t.p,{children:["Use the context's ",(0,e.jsx)(t.code,{children:"getElementStyles"})," function to get consistent styling for custom chart elements:"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`function CustomChartElement( { seriesData, index, isHighlighted } ) {
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
`,(0,e.jsx)(t.h3,{id:"multi-chart-coordination",children:"Multi-Chart Coordination"}),`
`,(0,e.jsx)(t.p,{children:"The chart registration system enables powerful coordination between charts and standalone legends, allowing for flexible dashboard layouts with centralized legend areas."}),`
`,(0,e.jsx)(t.h4,{id:"chart-registration-for-standalone-legends",children:"Chart Registration for Standalone Legends"}),`
`,(0,e.jsxs)(t.p,{children:["When charts register with a ",(0,e.jsx)(t.code,{children:"chartId"}),", their legend data becomes available to standalone Legend components anywhere in your application:"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`function DashboardWithCentralizedLegends() {
	return (
		<GlobalChartsProvider theme={ wooTheme }>
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
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Key Benefits:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Flexible Layouts"})," - Create complex dashboard designs with legends positioned anywhere"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Automatic Updates"})," - Legend data updates automatically when chart data changes"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"No Prop Drilling"})," - No need to pass legend data through component hierarchies"]}),`
`]}),`
`,(0,e.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(t.h3,{id:"globalchartsprovider",children:"GlobalChartsProvider"}),`
`,(0,e.jsx)(t.p,{children:"The main provider component that enables chart context functionality."}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Prop"}),(0,e.jsx)(t.th,{children:"Type"}),(0,e.jsx)(t.th,{children:"Default"}),(0,e.jsx)(t.th,{children:"Description"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"theme"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"Partial<ChartTheme>"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"defaultTheme"})}),(0,e.jsx)(t.td,{children:"Custom theme object that gets merged with the default theme"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"children"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"ReactNode"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"Required."})," Chart components and other React elements"]})]})]})]}),`
`,(0,e.jsx)(t.h3,{id:"globalchartscontextvalue",children:"GlobalChartsContextValue"}),`
`,(0,e.jsxs)(t.p,{children:["The context value shape provided by ",(0,e.jsx)(t.code,{children:"useGlobalChartsContext"}),":"]}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`interface GlobalChartsContextValue {
	// Chart registry
	charts: Map<string, ChartRegistration>;
	registerChart: (id: string, data: ChartRegistration) => void;
	unregisterChart: (id: string) => void;
	getChartData: (id: string) => ChartRegistration | undefined;

	// Theme and styling
	theme: CompleteChartTheme;
	getElementStyles: (params: GetElementStylesParams) => ElementStyles;
}
`})}),`
`,(0,e.jsx)(t.h3,{id:"chartregistration-type",children:"ChartRegistration Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`interface ChartRegistration {
	legendItems: BaseLegendItem[];
	chartType: string;
	metadata?: Record<string, unknown>;
}
`})}),`
`,(0,e.jsx)(t.h3,{id:"elementstyles-type",children:"ElementStyles Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`interface ElementStyles {
	color: string;
	lineStyles: CSSProperties & LineStyles;
	glyph?: (props: GlyphProps) => ReactNode;
	shapeStyles: CSSProperties & LineStyles;
}
`})}),`
`,(0,e.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(t.h3,{id:"theme-color-considerations",children:"Theme Color Considerations"}),`
`,(0,e.jsx)(t.p,{children:"When creating custom themes, ensure sufficient contrast between background and foreground colors to meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)"}),`
`,(0,e.jsx)(t.h3,{id:"automatic-color-generation",children:"Automatic Color Generation"}),`
`,(0,e.jsx)(t.p,{children:"When your data has more series than colors defined in your theme, the Global Charts Context automatically generates additional colors using a sophisticated algorithm:"}),`
`,(0,e.jsx)(t.h4,{id:"golden-ratio-distribution",children:"Golden Ratio Distribution"}),`
`,(0,e.jsxs)(t.p,{children:["The system uses the ",(0,e.jsx)(t.strong,{children:"golden ratio (\u03C6 \u2248 0.618)"})," to generate mathematically pleasing color distributions:"]}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Hue spacing"})," - New hues are distributed for optimal visual separation"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Hue range constraint"})," - Generated colors stay within an expanded range (130%) of your theme's existing colors"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Wrap-around handling"})," - Intelligently handles cases where theme colors span across the 0\xB0 hue boundary"]}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Note that only hex colors are supported for generating colors."})}),`
`,(0,e.jsx)(t.h4,{id:"accessibility-first-generation",children:"Accessibility-First Generation"}),`
`,(0,e.jsx)(t.p,{children:"All generated colors maintain WCAG AA compliance:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Base lightness: 35%"})," - Ensures 4.5:1 contrast ratio against white backgrounds"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Lightness variations"})," - Creates 4 levels (35%, 43%, 51%, 59%) for variety while maintaining accessibility"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Saturation variations"})," - Uses 3 levels (60%, 75%, 90%) for visual distinction"]}),`
`]}),`
`,(0,e.jsx)(t.h4,{id:"perceptual-distance-optimization",children:"Perceptual Distance Optimization"}),`
`,(0,e.jsx)(t.p,{children:"The algorithm ensures visual distinction between colors:"}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Minimum distance threshold"})," - Maintains 25+ units of perceptual distance between colors"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Smart retry logic"})," - Up to 50 attempts per color to find sufficiently different options"]}),`
`,(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Distance calculation"})," - Uses weighted HSL distance optimized for chart readability"]}),`
`]}),`
`,(0,e.jsx)(t.h4,{id:"practical-example",children:"Practical Example"}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// Theme with 3 colors
const limitedTheme = {
	colors: [ '#006DAB', '#1F9828', '#FF8C8F' ]
};

// Data with 8 series - 5 additional colors will be auto-generated
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
<GlobalChartsProvider theme={ limitedTheme }>
	<LineChart data={ dataWithManySeries } />
	<BarChart data={ dataWithManySeries } />
</GlobalChartsProvider>`}),`
`,(0,e.jsx)(t.p,{children:"This ensures that even with limited theme colors, your charts maintain visual harmony, accessibility compliance, and consistent color assignments across your entire application."}),`
`,(0,e.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,(0,e.jsx)(t.h3,{id:"common-issues",children:"Common Issues"}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Charts not inheriting theme:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["Ensure charts are wrapped with ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"})]}),`
`,(0,e.jsx)(t.li,{children:"Check that the theme object is properly structured"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Colors not staying consistent:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsxs)(t.li,{children:["Verify that data points include consistent ",(0,e.jsx)(t.code,{children:"group"})," properties"]}),`
`,(0,e.jsx)(t.li,{children:"Check for conflicting color overrides in individual chart data"}),`
`]}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Performance issues:"})}),`
`,(0,e.jsxs)(t.ul,{children:[`
`,(0,e.jsx)(t.li,{children:"Avoid creating new theme objects on every render"}),`
`,(0,e.jsxs)(t.li,{children:["Use ",(0,e.jsx)(t.code,{children:"useMemo"})," for complex theme calculations"]}),`
`,(0,e.jsx)(t.li,{children:"Minimize frequent context value changes"}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"error-boundaries",children:"Error Boundaries"}),`
`,(0,e.jsxs)(t.p,{children:["The context includes error handling for invalid usage, for example, accessing the context outside of a ",(0,e.jsx)(t.code,{children:"GlobalChartsProvider"}),":"]}),`
`,(0,e.jsx)(s.kL,{language:"tsx",code:`// This will throw a helpful error
function ChartWithoutProvider() {
	const context = useGlobalChartsContext(); // Error: must be used within GlobalChartsProvider
	return <div>Chart content</div>;
}`})]})}function a(d={}){const{wrapper:t}={...(0,c.R)(),...d.components};return t?(0,e.jsx)(t,{...d,children:(0,e.jsx)(i,{...d})}):i(d)}})}]);
