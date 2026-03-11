"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1069,3513],{"../charts/src/providers/chart-context/stories/index.docs.mdx"(X,O,a){a.r(O),a.d(O,{default:()=>C});var D=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),R=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),x=a("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js"),y=a("../charts/src/providers/chart-context/stories/index.stories.tsx");function L(m){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,R.R)(),...m.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.W8,{title:"JS Packages/Charts Library/Chart Context",of:y}),`
`,(0,e.jsx)(t.h1,{id:"global-charts-context",children:"Global Charts Context"}),`
`,(0,e.jsx)(t.p,{children:"The Global Charts Context provides centralized theme management, color coordination, and chart registration for multiple charts within an application. It ensures consistent styling and behavior across all chart components while optimizing performance through intelligent color caching and stable group assignments."}),`
`,(0,e.jsx)(x.Hl,{of:y.Default}),`
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`import { GlobalChartsProvider, LineChart, BarChart } from '@automattic/charts';

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
`,(0,e.jsx)(t.h2,{id:"color-coordination",children:"Color Coordination"}),`
`,(0,e.jsx)(t.h3,{id:"stable-colors-for-groups",children:"Stable Colors for Groups"}),`
`,(0,e.jsxs)(t.p,{children:["One of the key features of the Global Charts Context is ",(0,e.jsx)(t.strong,{children:"stable color assignment for groups"}),". When data series have a ",(0,e.jsx)(t.code,{children:"group"})," property, the same group will always receive the same color across all charts, even when data changes:"]}),`
`,(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Try toggling the countries on/off in the Default story"})," - notice how each country maintains its assigned color regardless of which other countries are visible. This creates a consistent visual experience across multiple charts and data updates."]}),`
`,(0,e.jsx)(x.kL,{language:"tsx",code:`// Data with group assignments
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
`,(0,e.jsx)(x.Hl,{of:y.WithColorOverrides}),`
`,(0,e.jsx)(x.kL,{language:"tsx",code:`// Some elements have color overrides, others use global coordination
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`const customTheme: ChartTheme = {
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
	legend: {
		labelStyles: {
			color: 'var(--jp-gray-80, #2c3338)',
		},
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`// Only customize colors - everything else uses defaults
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`// Charts automatically register with a unique ID
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`import { useGlobalChartsContext } from '@automattic/charts';

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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`import { useGlobalChartsTheme } from '@automattic/charts';

function ThemeAwareComponent() {
	const theme = useGlobalChartsTheme();

	return (
		<div style={ {
			backgroundColor: theme.backgroundColor,
			color: theme.legend?.labelStyles?.color
		} }>
			Styled using global chart theme
		</div>
	);
}`}),`
`,(0,e.jsx)(t.h3,{id:"usechartregistration",children:"useChartRegistration"}),`
`,(0,e.jsx)(t.p,{children:"Register custom charts with the global context:"}),`
`,(0,e.jsx)(x.kL,{language:"tsx",code:`import { useChartRegistration } from '@automattic/charts';

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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`function CustomChartElement( { seriesData, index, isHighlighted } ) {
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`function DashboardWithCentralizedLegends() {
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`// Theme with 3 colors
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
`,(0,e.jsx)(x.kL,{language:"tsx",code:`// This will throw a helpful error
function ChartWithoutProvider() {
	const context = useGlobalChartsContext(); // Error: must be used within GlobalChartsProvider
	return <div>Chart content</div>;
}`})]})}function C(m={}){const{wrapper:t}={...(0,R.R)(),...m.components};return t?(0,e.jsx)(t,{...m,children:(0,e.jsx)(L,{...m})}):L(m)}},"../charts/src/providers/chart-context/stories/index.stories.tsx"(X,O,a){a.r(O),a.d(O,{Default:()=>s,WithColorOverrides:()=>n,__namedExportsOrder:()=>c,default:()=>b});var D=a("../charts/src/charts/line-chart/line-chart.tsx"),e=a("../charts/src/charts/bar-chart/bar-chart.tsx"),R=a("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),x=a("../charts/src/charts/bar-list-chart/bar-list-chart.tsx"),y=a("../charts/src/charts/pie-chart/pie-chart.tsx"),L=a("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),C=a("../charts/src/stories/chart-decorator.tsx"),m=a("../charts/src/stories/sample-data/index.ts"),t=a("../charts/src/stories/theme-config.tsx"),u=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b={title:"JS Packages/Charts Library/Global Context",parameters:{layout:"centered"},decorators:[C.cg],argTypes:{...t.jW,showUnitedStates:{control:{type:"boolean"},description:"Show United States data in all charts",defaultValue:!0},showGreatBritain:{control:{type:"boolean"},description:"Show Great Britain data in all charts",defaultValue:!0},showJapan:{control:{type:"boolean"},description:"Show Japan data in all charts",defaultValue:!0}}},k=[m._E[0],m._E[1],m._E[2]],K=m.Cg,z=m.cb,W=[{...m.Mc[0],label:"United States",group:"united-states"},{...m.Mc[1],label:"Great Britain",group:"great-britain"},{...m.Mc[2],label:"Japan",group:"japan"}],S=(r,i)=>r.filter(o=>!(o.group==="united-states"&&!i.showUnitedStates||o.group==="great-britain"&&!i.showGreatBritain||o.group==="japan"&&!i.showJapan)),B=(r,i)=>r.filter(o=>!(o.group==="united-states"&&!i.showUnitedStates||o.group==="great-britain"&&!i.showGreatBritain||o.group==="japan"&&!i.showJapan)),p=[{...m._E[0],options:{stroke:"#e74c3c"}},m._E[1],m._E[2]],v=m.Cg.map((r,i)=>i<=1?{...r,options:{...r.options,stroke:"#e74c3c"}}:r),_=[{...m.cb[0],options:{stroke:"#e74c3c"}},m.cb[1],m.cb[2]],g=[{...W[0],color:"#e74c3c"},{...W[1]},{...W[2]}],P=({args:r})=>{const i=S(K,r),o=S(k,r),l=B(W,r),f=S(z,r),h=B(W,r);return(0,u.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4rem",width:"100%"},children:[(0,u.jsx)(D.A,{data:i,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,u.jsx)(e.A,{data:o,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,u.jsx)(R.A,{data:l,width:350,label:"Semi-Circle Chart",withTooltips:!0,showLegend:!0}),(0,u.jsx)(x.A,{data:f,width:350,height:250,withTooltips:!0}),(0,u.jsx)(y.A,{size:300,data:l,withTooltips:!0,showLegend:!0}),(0,u.jsx)(y.A,{size:300,thickness:.5,data:h,withTooltips:!0,showLegend:!0}),(0,u.jsx)(L.A,{data:m.EJ,withComparison:!0,showLegend:!0})]})},M=({args:r})=>{const i=S(v,r),o=S(p,r),l=B(g,r),f=S(_,r),h=B(g,r);return(0,u.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4rem",width:"100%"},children:[(0,u.jsx)(D.A,{data:i,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,u.jsx)(e.A,{data:o,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,u.jsx)(R.A,{data:l,width:350,label:"Semi-Circle Chart",withTooltips:!0,showLegend:!0}),(0,u.jsx)(x.A,{data:f,width:350,height:250,withTooltips:!0}),(0,u.jsx)(y.A,{size:300,data:l,withTooltips:!0,showLegend:!0}),(0,u.jsx)(y.A,{size:300,thickness:.5,data:h,withTooltips:!0,showLegend:!0}),(0,u.jsx)(L.A,{data:m.EJ,withComparison:!0,showLegend:!0,secondaryColor:"#e74c3c"})]})},s={render:(r,{args:i})=>(0,u.jsx)(P,{args:i}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},n={render:(r,{args:i})=>(0,u.jsx)(M,{args:i}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},c=["Default","WithColorOverrides"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGrid args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...s.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGridWithColorOverrides args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...n.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(X,O,a){a.d(O,{A:()=>M});var D=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),R=a.n(e),x=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),y=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),L=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function C(s,n){s(n)}var m,t,u,V,b,k,K;function z(s){var n=s===void 0?{}:s,c=n.innerRadius,r=n.outerRadius,i=n.cornerRadius,o=n.startAngle,l=n.endAngle,f=n.padAngle,h=n.padRadius,d=(0,y.A)();return c!=null&&C(d.innerRadius,c),r!=null&&C(d.outerRadius,r),i!=null&&C(d.cornerRadius,i),o!=null&&C(d.startAngle,o),l!=null&&C(d.endAngle,l),f!=null&&C(d.padAngle,f),h!=null&&C(d.padRadius,h),d}function W(s){var n=s===void 0?{}:s,c=n.x,r=n.x0,i=n.x1,o=n.y,l=n.y0,f=n.y1,h=n.defined,d=n.curve,A=m();return c&&b(A.x,c),r&&b(A.x0,r),i&&b(A.x1,i),o&&b(A.y,o),l&&b(A.y0,l),f&&b(A.y1,f),h&&A.defined(h),d&&A.curve(d),A}function S(s){var n=s===void 0?{}:s,c=n.x,r=n.y,i=n.defined,o=n.curve,l=t();return c&&b(l.x,c),r&&b(l.y,r),i&&l.defined(i),o&&l.curve(o),l}function B(s){var n=s===void 0?{}:s,c=n.startAngle,r=n.endAngle,i=n.padAngle,o=n.value,l=n.sort,f=n.sortValues,h=(0,L.A)();return(l===null||l!=null)&&h.sort(l),(f===null||f!=null)&&h.sortValues(f),o!=null&&h.value(o),i!=null&&C(h.padAngle,i),c!=null&&C(h.startAngle,c),r!=null&&C(h.endAngle,r),h}function p(s){var n=s===void 0?{}:s,c=n.angle,r=n.radius,i=n.defined,o=n.curve,l=u();return c&&b(l.angle,c),r&&b(l.radius,r),i&&l.defined(i),o&&l.curve(o),l}function v(s){var n=s.keys,c=s.value,r=s.order,i=s.offset,o=V();return n&&o.keys(n),c&&b(o.value,c),r&&o.order(k(r)),i&&o.offset(K(i)),o}var _=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function g(){return g=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var c=arguments[n];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(s[r]=c[r])}return s},g.apply(this,arguments)}function P(s,n){if(s==null)return{};var c={},r=Object.keys(s),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(c[i]=s[i]);return c}function M(s){var n=s.className,c=s.top,r=s.left,i=s.data,o=i===void 0?[]:i,l=s.centroid,f=s.innerRadius,h=f===void 0?0:f,d=s.outerRadius,A=s.cornerRadius,Z=s.startAngle,Q=s.endAngle,ne=s.padAngle,re=s.padRadius,te=s.pieSort,$=s.pieSortValues,ce=s.pieValue,ae=s.children,E=s.fill,I=E===void 0?"":E,H=P(s,_),w=z({innerRadius:h,outerRadius:d,cornerRadius:A,padRadius:re}),F=B({startAngle:Z,endAngle:Q,padAngle:ne,value:ce,sort:te,sortValues:$}),J=F(o);return ae?D.createElement(D.Fragment,null,ae({arcs:J,path:w,pie:F})):D.createElement(x.A,{className:"visx-pie-arcs-group",top:c,left:r},J.map(function(U,ie){return D.createElement("g",{key:"pie-arc-"+ie},D.createElement("path",g({className:R()("visx-pie-arc",n),d:w(U)||"",fill:I==null||typeof I=="string"?I:I(U)},H)),l?.(w.centroid(U),U))}))}},"../charts/src/charts/bar-list-chart/bar-list-chart.tsx"(X,O,a){a.d(O,{A:()=>B});var D=a("../number-formatters/src/index.ts"),e=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),R=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),x=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),y=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),L=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),C=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),m=a("../charts/src/charts/bar-chart/bar-chart.tsx"),t=a("../charts/src/charts/private/with-responsive/with-responsive.tsx"),u=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V=p=>{const v=p;return v&&"bandwidth"in v?v?.bandwidth()??0:0},b=({textProps:p,x:v,y:_,label:g,formatter:P})=>(0,u.jsx)(y.A,{...p,textAnchor:"start",x:v,y:_,children:P(g)}),k=({textProps:p,x:v,y:_,value:g,formatter:P})=>(0,u.jsx)(y.A,{...p,textAnchor:"end",x:v,y:_,fontWeight:500,children:P(g)}),K=({ticks:p,tickLabelProps:v,yOffset:_,labelPosition:g,valuePosition:P,data:M,labelFormatter:s,valueFormatter:n,LabelComponent:c=b,ValueComponent:r=k})=>{if(p.length===0)return null;const i=p.map(({value:o,index:l})=>typeof v=="function"?v(o,l,p):{});return p.map(({from:o,formattedValue:l},f)=>{const h=i[f]??{};delete h.textAnchor,delete h.dx;const d=M.reduce((Z,{data:Q})=>Z+(Q[f]?.value??0),0),A=o.y+_;return(0,u.jsxs)(e.A,{children:[(0,u.jsx)(c,{textProps:h,x:g,y:A,label:l,formatter:s}),(0,u.jsx)(r,{textProps:h,x:P,y:A,value:d,formatter:n,data:M,index:f})]},f)})},z=(p,v,_,g)=>{if(!g)return 0;const P=p.map(({label:r})=>r),M=(0,x.A)({type:"band",range:[0,_],domain:P,...v}),s=(0,R.A)({domain:P,range:[0,V(M)],padding:v.paddingInner});return-(V(s)+6)},W=({data:p,width:v,height:_,options:g={},margin:P={left:0,right:20,bottom:0,top:0},...M})=>{const s=(0,L.useMemo)(()=>{const n=p.length>1,c={paddingInner:n?.3:.1,padding:n?.3:.1},r={zero:!0},i={...c,...g.yScale??{}},o={...r,...g.xScale??{}};return{yScale:i,xScale:o,labelPosition:g.labelPosition??(n?0:10),valueFormatter:g.valueFormatter??(l=>(0,D.qe)(l)),labelFormatter:g.labelFormatter??(l=>String(l)),valuePosition:g.valuePosition??v,yOffset:g.yOffset??z(p,i,_,n)}},[g,v,p,_]);return(0,u.jsx)(m.f,{orientation:"horizontal",gridVisibility:"none",data:p,width:v,height:_,margin:P,options:{axis:{y:{children:n=>(0,u.jsx)(K,{...n,data:p,yOffset:s.yOffset,labelPosition:s.labelPosition,valuePosition:s.valuePosition,labelFormatter:s.labelFormatter,valueFormatter:s.valueFormatter,LabelComponent:g.labelComponent,ValueComponent:g.valueComponent})},x:{children:()=>null}},xScale:s.xScale,yScale:s.yScale},...M})},S=p=>(0,L.useContext)(C.m)?(0,u.jsx)(W,{...p}):(0,u.jsx)(C.S,{children:(0,u.jsx)(W,{...p})});S.displayName="BarListChart";const B=(0,t.F)(S);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},legend:{defaultValue:null,description:`Legend configuration object for controlling legend appearance and behavior.
Includes orientation, position, alignment, shape, styling, and interactivity options.`,name:"legend",required:!1,type:{name:"ChartLegendConfig<SeriesData[]>"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{S.displayName="BarListChart",S.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:`Maximum diameter of the pie in pixels (pie and donut charts only).
The pie will shrink if the container is smaller than this value.
When omitted, the pie fills the available space.`,name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:`Legend configuration object for controlling legend appearance and behavior.
Includes orientation, position, alignment, shape, styling, and interactivity options.`,name:"legend",required:!1,type:{name:"ChartLegendConfig<SeriesData[]>"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:S.__docgenInfo,name:"BarListChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(X,O,a){a.d(O,{A:()=>ae});var D=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),e=a("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),R=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),x=a("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),y=a("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),L=a("../../../node_modules/.pnpm/@wordpress+i18n@6.14.0/node_modules/@wordpress/i18n/build-module/index.mjs"),C=a("../../../node_modules/.pnpm/@wordpress+ui@0.8.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),m=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=a("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),V=a("../charts/src/components/legend/legend.tsx"),b=a("../charts/src/components/tooltip/base-tooltip.tsx"),k=a("../charts/src/hooks/use-element-size.ts"),K=a("../charts/src/hooks/use-interactive-legend-data.ts"),z=a("../charts/src/hooks/use-prefers-reduced-motion.ts"),W=a("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),S=a("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),B=a("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),p=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),v=a("../charts/src/utils/create-composition.ts"),_=a("../charts/src/charts/private/chart-composition/use-chart-children.ts"),g=a("../charts/src/charts/private/chart-composition/render-legend-slot.ts"),P=a("../charts/src/charts/private/chart-composition/chart-svg.tsx"),M=a("../charts/src/charts/private/chart-composition/chart-html.tsx"),s=a("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),n=a("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),c=a("../charts/src/charts/private/with-responsive/with-responsive.tsx"),r=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=a.n(r),o=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var f=i()(o.A,l);const h=o.A.locals||{};var d=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=L.__,Z=({tooltipData:E})=>(0,d.jsx)(b.R,{data:E,top:0,left:0,renderContainer:!1}),Q=.03,ne=400,re=E=>E.length?E.some(w=>w.percentage<0||w.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:E.reduce((w,F)=>w+F.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},te=({data:E,chartId:I,width:H,height:w,thickness:F=.4,clockwise:J=!0,withTooltips:U=!1,showLegend:ie=!1,legend:G={},legendValueDisplay:he="percentage",label:Se,animation:Ee,note:we,className:Te,children:Re,tooltipOffsetX:ue=0,tooltipOffsetY:me=-15,renderTooltip:Le=Z,gap:Oe="md"})=>{const pe=G.interactive??!1,oe=G.position??"bottom",Y=(0,W.R)(I),[Me,ge,xe]=(0,k.L)(),{tooltipOpen:We,tooltipLeft:Be,tooltipTop:Ve,tooltipData:ve,hideTooltip:fe,showTooltip:je}=(0,x.A)(),{containerRef:Ge,TooltipInPortal:Ie,containerBounds:N}=(0,y.A)({detectBounds:!0,scroll:!0,debounce:0}),ye=(0,t.useCallback)((j,T)=>{N.width===0||N.height===0||je({tooltipData:T.data,tooltipLeft:j.clientX-N.left+ue,tooltipTop:j.clientY-N.top+me})},[N.width,N.height,N.left,N.top,je,ue,me]),Fe=(0,t.useCallback)(()=>{fe()},[fe]),Ue=(0,t.useCallback)(j=>T=>{ye(T,j)},[ye]),{isValid:Ce,message:Ne}=re(E),{getElementStyles:be,isSeriesVisible:ke}=(0,S.j)(),{visibleData:Ke,allSegmentsHidden:_e,legendData:ze}=(0,K.j)({data:E,chartId:Y,legendInteractive:pe,isSeriesVisible:ke}),le=(0,t.useMemo)(()=>({value:j=>j.value,sort:(j,T)=>T.value-j.value,fill:j=>be({data:j,index:j.index}).color}),[be]),He=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:he}),[he]),Je=(0,u.f)(ze,He),{svgChildren:Xe,htmlChildren:Ye,legendChildren:Pe,otherChildren:Ze}=(0,_.n)(Re,"PieSemiCircleChart"),Qe=(0,t.useMemo)(()=>({thickness:F,clockwise:J}),[F,J]);(0,B.t)({chartId:Y,legendItems:Je,chartType:"pie-semi-circle",isDataValid:Ce,metadata:Qe});const $e=(0,z.j)(),de=H||ne;if(!Ce){const j=w?Math.min(H||w*2,w*2):de,T=j/2;return(0,d.jsx)("div",{className:h["pie-semi-circle-chart"],children:(0,d.jsx)("svg",{width:j,height:T,"data-testid":"pie-chart-svg",children:(0,d.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:h.error,children:Ne})})})}const qe=ge>0?ge:de,et=xe>0?xe:w||de/2,q=Math.min(qe,et*2),ee=q/2,se=ee,De=se*(1-F),tt=Ke.map(j=>{const T=E.findIndex(nt=>nt.label===j.label);return{...j,index:T>=0?T:0}}),at=J?-Math.PI/2:Math.PI/2,st=J?Math.PI/2:-Math.PI/2,Ae=ie&&(0,d.jsx)(V.s,{orientation:G.orientation??"horizontal",position:oe,alignment:G.alignment??"center",labelStyles:G.labelStyles,itemClassName:G.itemClassName,itemStyles:G.itemStyles,shapeStyles:G.shapeStyles,shape:G.shape??"circle",chartId:Y,interactive:pe});return(0,d.jsx)(n.O.Provider,{value:{chartId:Y,chartWidth:q,chartHeight:ee},children:(0,d.jsxs)(C.B,{ref:Ge,direction:"column",gap:Oe,className:(0,m.A)("pie-semi-circle-chart",h["pie-semi-circle-chart"],{[h["pie-semi-circle-chart--responsive"]]:!H&&!w},Te),style:{width:H||void 0,height:w||void 0},"data-testid":"pie-chart-container",children:[oe==="top"&&Ae,(0,g.W)(Pe,"top"),(0,d.jsx)("div",{ref:Me,className:h["pie-semi-circle-chart__svg-wrapper"],children:(0,d.jsxs)("svg",{width:q,height:ee,viewBox:`0 0 ${q} ${ee}`,"data-testid":"pie-chart-svg",children:[(0,d.jsx)("defs",{children:(0,d.jsx)(s.A,{id:`radial-wipe-${Y}`,radius:se,innerRadius:De,startAngle:"-180deg",wipePercentage:50})}),(0,d.jsx)(D.A,{top:ee,left:q/2,mask:Ee&&!$e?`url(#radial-wipe-${Y})`:null,children:_e?(0,d.jsx)("text",{textAnchor:"middle",y:-se/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:A("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.A,{data:tt,pieValue:le.value,outerRadius:se,innerRadius:De,cornerRadius:3,padAngle:Q,startAngle:at,endAngle:st,pieSort:le.sort,children:j=>j.arcs.map(T=>(0,d.jsx)("g",{onMouseMove:U?Ue(T):void 0,onMouseLeave:U?Fe:void 0,children:(0,d.jsx)("path",{d:j.path(T)||"",fill:le.fill(T.data),"data-testid":"pie-segment"})},T.data.label))}),(0,d.jsxs)(D.A,{children:[(0,d.jsx)(R.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:h.label,children:Se}),(0,d.jsx)(R.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:h.note,children:we})]}),!_e&&Xe]})})]})}),oe==="bottom"&&Ae,(0,g.W)(Pe,"bottom"),U&&We&&ve&&(0,d.jsx)(Ie,{top:Ve||0,left:Be||0,children:(0,d.jsx)("div",{role:"tooltip",children:Le({tooltipData:ve})})}),Ye,Ze]})})},$=E=>(0,t.useContext)(p.m)?(0,d.jsx)(te,{...E}):(0,d.jsx)(p.S,{children:(0,d.jsx)(te,{...E})});$.displayName="PieSemiCircleChart";const ce=(0,v.E)($,{Legend:V.s,SVG:P.d,HTML:M.a}),ae=(0,v.E)((0,c.F)($),{Legend:V.s,SVG:P.d,HTML:M.a})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.3_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(X,O,a){a.d(O,{A:()=>L});var D=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=a.n(D),R=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),x=a.n(R),y=x()(e());y.push([X.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.Cgrbza8Mc3XENCqfqeMT{flex:1;min-height:0;min-width:0;width:100%;display:flex;align-items:center;justify-content:center}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),y.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__svg-wrapper":"Cgrbza8Mc3XENCqfqeMT","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const L=y}}]);
