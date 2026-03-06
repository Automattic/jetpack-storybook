"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1069,3513],{"../charts/src/providers/chart-context/stories/index.docs.mdx"(K,L,a){a.r(L),a.d(L,{default:()=>y});var S=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),T=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),x=a("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js"),j=a("../charts/src/providers/chart-context/stories/index.stories.tsx");function O(u){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,T.R)(),...u.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.W8,{title:"JS Packages/Charts Library/Chart Context",of:j}),`
`,(0,e.jsx)(t.h1,{id:"global-charts-context",children:"Global Charts Context"}),`
`,(0,e.jsx)(t.p,{children:"The Global Charts Context provides centralized theme management, color coordination, and chart registration for multiple charts within an application. It ensures consistent styling and behavior across all chart components while optimizing performance through intelligent color caching and stable group assignments."}),`
`,(0,e.jsx)(x.Hl,{of:j.Default}),`
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
`,(0,e.jsx)(x.Hl,{of:j.WithColorOverrides}),`
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
}`})]})}function y(u={}){const{wrapper:t}={...(0,T.R)(),...u.components};return t?(0,e.jsx)(t,{...u,children:(0,e.jsx)(O,{...u})}):O(u)}},"../charts/src/providers/chart-context/stories/index.stories.tsx"(K,L,a){a.r(L),a.d(L,{Default:()=>n,WithColorOverrides:()=>s,__namedExportsOrder:()=>c,default:()=>C});var S=a("../charts/src/charts/line-chart/line-chart.tsx"),e=a("../charts/src/charts/bar-chart/bar-chart.tsx"),T=a("../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"),x=a("../charts/src/charts/bar-list-chart/bar-list-chart.tsx"),j=a("../charts/src/charts/pie-chart/pie-chart.tsx"),O=a("../charts/src/charts/leaderboard-chart/leaderboard-chart.tsx"),y=a("../charts/src/stories/chart-decorator.tsx"),u=a("../charts/src/stories/sample-data/index.ts"),t=a("../charts/src/stories/theme-config.tsx"),h=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C={title:"JS Packages/Charts Library/Global Context",parameters:{layout:"centered"},decorators:[y.cg],argTypes:{...t.jW,showUnitedStates:{control:{type:"boolean"},description:"Show United States data in all charts",defaultValue:!0},showGreatBritain:{control:{type:"boolean"},description:"Show Great Britain data in all charts",defaultValue:!0},showJapan:{control:{type:"boolean"},description:"Show Japan data in all charts",defaultValue:!0}}},U=[u._E[0],u._E[1],u._E[2]],N=u.Cg,k=u.cb,V=[{...u.Mc[0],label:"United States",group:"united-states"},{...u.Mc[1],label:"Great Britain",group:"great-britain"},{...u.Mc[2],label:"Japan",group:"japan"}],D=(r,o)=>r.filter(l=>!(l.group==="united-states"&&!o.showUnitedStates||l.group==="great-britain"&&!o.showGreatBritain||l.group==="japan"&&!o.showJapan)),W=(r,o)=>r.filter(l=>!(l.group==="united-states"&&!o.showUnitedStates||l.group==="great-britain"&&!o.showGreatBritain||l.group==="japan"&&!o.showJapan)),p=[{...u._E[0],options:{stroke:"#e74c3c"}},u._E[1],u._E[2]],v=u.Cg.map((r,o)=>o<=1?{...r,options:{...r.options,stroke:"#e74c3c"}}:r),b=[{...u.cb[0],options:{stroke:"#e74c3c"}},u.cb[1],u.cb[2]],g=[{...V[0],color:"#e74c3c"},{...V[1]},{...V[2]}],_=({args:r})=>{const o=D(N,r),l=D(U,r),d=W(V,r),m=D(k,r),i=W(V,r);return(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4rem",width:"100%"},children:[(0,h.jsx)(S.A,{data:o,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,h.jsx)(e.A,{data:l,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,h.jsx)(T.A,{data:d,width:350,label:"Semi-Circle Chart",withTooltips:!0,showLegend:!0}),(0,h.jsx)(x.A,{data:m,width:350,height:250,withTooltips:!0}),(0,h.jsx)(j.A,{size:300,data:d,withTooltips:!0,showLegend:!0}),(0,h.jsx)(j.A,{size:300,thickness:.5,data:i,withTooltips:!0,showLegend:!0}),(0,h.jsx)(O.A,{data:u.EJ,withComparison:!0,showLegend:!0})]})},M=({args:r})=>{const o=D(v,r),l=D(p,r),d=W(g,r),m=D(b,r),i=W(g,r);return(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4rem",width:"100%"},children:[(0,h.jsx)(S.A,{data:o,width:350,height:250,withGradientFill:!1,showLegend:!0,withTooltips:!0,margin:{bottom:40}}),(0,h.jsx)(e.A,{data:l,width:350,height:250,withTooltips:!0,showLegend:!0}),(0,h.jsx)(T.A,{data:d,width:350,label:"Semi-Circle Chart",withTooltips:!0,showLegend:!0}),(0,h.jsx)(x.A,{data:m,width:350,height:250,withTooltips:!0}),(0,h.jsx)(j.A,{size:300,data:d,withTooltips:!0,showLegend:!0}),(0,h.jsx)(j.A,{size:300,thickness:.5,data:i,withTooltips:!0,showLegend:!0}),(0,h.jsx)(O.A,{data:u.EJ,withComparison:!0,showLegend:!0,secondaryColor:"#e74c3c"})]})},n={render:(r,{args:o})=>(0,h.jsx)(_,{args:o}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},s={render:(r,{args:o})=>(0,h.jsx)(M,{args:o}),args:{showUnitedStates:!0,showGreatBritain:!0,showJapan:!0}},c=["Default","WithColorOverrides"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGrid args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...n.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_, {
    args
  }) => <ChartGridWithColorOverrides args={args} />,
  args: {
    showUnitedStates: true,
    showGreatBritain: true,
    showJapan: true
  }
}`,...s.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"(K,L,a){a.d(L,{A:()=>M});var S=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=a.n(e),x=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),j=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/arc.js"),O=a("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/pie.js");function y(n,s){n(s)}var u,t,h,I,C,U,N;function k(n){var s=n===void 0?{}:n,c=s.innerRadius,r=s.outerRadius,o=s.cornerRadius,l=s.startAngle,d=s.endAngle,m=s.padAngle,i=s.padRadius,P=(0,j.A)();return c!=null&&y(P.innerRadius,c),r!=null&&y(P.outerRadius,r),o!=null&&y(P.cornerRadius,o),l!=null&&y(P.startAngle,l),d!=null&&y(P.endAngle,d),m!=null&&y(P.padAngle,m),i!=null&&y(P.padRadius,i),P}function V(n){var s=n===void 0?{}:n,c=s.x,r=s.x0,o=s.x1,l=s.y,d=s.y0,m=s.y1,i=s.defined,P=s.curve,A=u();return c&&C(A.x,c),r&&C(A.x0,r),o&&C(A.x1,o),l&&C(A.y,l),d&&C(A.y0,d),m&&C(A.y1,m),i&&A.defined(i),P&&A.curve(P),A}function D(n){var s=n===void 0?{}:n,c=s.x,r=s.y,o=s.defined,l=s.curve,d=t();return c&&C(d.x,c),r&&C(d.y,r),o&&d.defined(o),l&&d.curve(l),d}function W(n){var s=n===void 0?{}:n,c=s.startAngle,r=s.endAngle,o=s.padAngle,l=s.value,d=s.sort,m=s.sortValues,i=(0,O.A)();return(d===null||d!=null)&&i.sort(d),(m===null||m!=null)&&i.sortValues(m),l!=null&&i.value(l),o!=null&&y(i.padAngle,o),c!=null&&y(i.startAngle,c),r!=null&&y(i.endAngle,r),i}function p(n){var s=n===void 0?{}:n,c=s.angle,r=s.radius,o=s.defined,l=s.curve,d=h();return c&&C(d.angle,c),r&&C(d.radius,r),o&&d.defined(o),l&&d.curve(l),d}function v(n){var s=n.keys,c=n.value,r=n.order,o=n.offset,l=I();return s&&l.keys(s),c&&C(l.value,c),r&&l.order(U(r)),o&&l.offset(N(o)),l}var b=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function g(){return g=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r])}return n},g.apply(this,arguments)}function _(n,s){if(n==null)return{};var c={},r=Object.keys(n),o,l;for(l=0;l<r.length;l++)o=r[l],!(s.indexOf(o)>=0)&&(c[o]=n[o]);return c}function M(n){var s=n.className,c=n.top,r=n.left,o=n.data,l=o===void 0?[]:o,d=n.centroid,m=n.innerRadius,i=m===void 0?0:m,P=n.outerRadius,A=n.cornerRadius,Z=n.startAngle,q=n.endAngle,ne=n.padAngle,te=n.padRadius,Q=n.pieSort,de=n.pieSortValues,se=n.pieValue,w=n.children,H=n.fill,G=H===void 0?"":H,R=_(n,b),B=k({innerRadius:i,outerRadius:P,cornerRadius:A,padRadius:te}),z=W({startAngle:Z,endAngle:q,padAngle:ne,value:se,sort:Q,sortValues:de}),J=z(l);return w?S.createElement(S.Fragment,null,w({arcs:J,path:B,pie:z})):S.createElement(x.A,{className:"visx-pie-arcs-group",top:c,left:r},J.map(function(X,re){return S.createElement("g",{key:"pie-arc-"+re},S.createElement("path",g({className:T()("visx-pie-arc",s),d:B(X)||"",fill:G==null||typeof G=="string"?G:G(X)},R)),d?.(B.centroid(X),X))}))}},"../charts/src/charts/bar-list-chart/bar-list-chart.tsx"(K,L,a){a.d(L,{A:()=>W});var S=a("../number-formatters/src/index.ts"),e=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),T=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),x=a("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/createScale.js"),j=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),O=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),u=a("../charts/src/charts/bar-chart/bar-chart.tsx"),t=a("../charts/src/charts/private/with-responsive/with-responsive.tsx"),h=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const I=p=>{const v=p;return v&&"bandwidth"in v?v?.bandwidth()??0:0},C=({textProps:p,x:v,y:b,label:g,formatter:_})=>(0,h.jsx)(j.A,{...p,textAnchor:"start",x:v,y:b,children:_(g)}),U=({textProps:p,x:v,y:b,value:g,formatter:_})=>(0,h.jsx)(j.A,{...p,textAnchor:"end",x:v,y:b,fontWeight:500,children:_(g)}),N=({ticks:p,tickLabelProps:v,yOffset:b,labelPosition:g,valuePosition:_,data:M,labelFormatter:n,valueFormatter:s,LabelComponent:c=C,ValueComponent:r=U})=>{if(p.length===0)return null;const o=p.map(({value:l,index:d})=>typeof v=="function"?v(l,d,p):{});return p.map(({from:l,formattedValue:d},m)=>{const i=o[m]??{};delete i.textAnchor,delete i.dx;const P=M.reduce((Z,{data:q})=>Z+(q[m]?.value??0),0),A=l.y+b;return(0,h.jsxs)(e.A,{children:[(0,h.jsx)(c,{textProps:i,x:g,y:A,label:d,formatter:n}),(0,h.jsx)(r,{textProps:i,x:_,y:A,value:P,formatter:s,data:M,index:m})]},m)})},k=(p,v,b,g)=>{if(!g)return 0;const _=p.map(({label:r})=>r),M=(0,x.A)({type:"band",range:[0,b],domain:_,...v}),n=(0,T.A)({domain:_,range:[0,I(M)],padding:v.paddingInner});return-(I(n)+6)},V=({data:p,width:v,height:b,options:g={},margin:_={left:0,right:20,bottom:0,top:0},...M})=>{const n=(0,O.useMemo)(()=>{const s=p.length>1,c={paddingInner:s?.3:.1,padding:s?.3:.1},r={zero:!0},o={...c,...g.yScale??{}},l={...r,...g.xScale??{}};return{yScale:o,xScale:l,labelPosition:g.labelPosition??(s?0:10),valueFormatter:g.valueFormatter??(d=>(0,S.qe)(d)),labelFormatter:g.labelFormatter??(d=>String(d)),valuePosition:g.valuePosition??v,yOffset:g.yOffset??k(p,o,b,s)}},[g,v,p,b]);return(0,h.jsx)(u.f,{orientation:"horizontal",gridVisibility:"none",data:p,width:v,height:b,margin:_,options:{axis:{y:{children:s=>(0,h.jsx)(N,{...s,data:p,yOffset:n.yOffset,labelPosition:n.labelPosition,valuePosition:n.valuePosition,labelFormatter:n.labelFormatter,valueFormatter:n.valueFormatter,LabelComponent:g.labelComponent,ValueComponent:g.valueComponent})},x:{children:()=>null}},xScale:n.xScale,yScale:n.yScale},...M})},D=p=>(0,O.useContext)(y.m)?(0,h.jsx)(V,{...p}):(0,h.jsx)(y.S,{children:(0,h.jsx)(V,{...p})});D.displayName="BarListChart";const W=(0,t.F)(D);try{ResponsiveChart.displayName="ResponsiveChart",ResponsiveChart.__docgenInfo={description:"",displayName:"ResponsiveChart",props:{className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},options:{defaultValue:null,description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},margin:{defaultValue:null,description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for all chart types that render series.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"1200"},description:"The maximum width of the chart. Defaults to 1200.",name:"maxWidth",required:!1,type:{name:"number"}},aspectRatio:{defaultValue:null,description:`The aspect ratio of the chart (height = width * aspectRatio).
When provided, height is calculated from width.
When omitted, the chart fills the parent container's height.`,name:"aspectRatio",required:!1,type:{name:"number"}},resizeDebounceTime:{defaultValue:{value:"300"},description:"Child render updates upon resize are delayed until debounceTime milliseconds after the last resize event is observed.",name:"resizeDebounceTime",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"]={docgenInfo:ResponsiveChart.__docgenInfo,name:"ResponsiveChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#ResponsiveChart"})}catch{}try{D.displayName="BarListChart",D.__docgenInfo={description:"",displayName:"BarListChart",props:{options:{defaultValue:{value:"{}"},description:"More options for the chart.",name:"options",required:!1,type:{name:'{ yScale: Omit<ScaleOptions, "type">; xScale: Omit<ScaleOptions, "type">; labelFormatter?: (value: string) => string; valueFormatter?: (value: number) => string; ... 4 more ...; valueComponent?: ComponentType<...>; }'}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"(params: RenderTooltipParams<DataPointDate>) => ReactNode"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},withPatterns:{defaultValue:null,description:"",name:"withPatterns",required:!1,type:{name:"boolean"}},showZeroValues:{defaultValue:null,description:"",name:"showZeroValues",required:!1,type:{name:"boolean"}},legendInteractive:{defaultValue:null,description:`Enable interactive legend items that can toggle series visibility.
Supported for all chart types that render series.
Requires chartId and GlobalChartsProvider.
For pie charts, percentages are recalculated so visible segments total 100%.`,name:"legendInteractive",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"Array of data points to display in the chart",name:"data",required:!0,type:{name:"SeriesData[]"}},chartId:{defaultValue:null,description:"Optional unique identifier for the chart (auto-generated if not provided)",name:"chartId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class name for the chart container",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart container in pixels. When omitted, the chart fills its parent's width.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart container in pixels. When omitted, the chart fills its parent's height.",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:null,description:`Maximum diameter of the pie in pixels (pie and donut charts only).
The pie will shrink if the container is smaller than this value.
When omitted, the pie fills the available space.`,name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:`{
		left: 0,
		right: 20,
		bottom: 0,
		top: 0,
	}`},description:"Chart margins",name:"margin",required:!1,type:{name:"{ top?: number; right?: number; bottom?: number; left?: number; }"}},onPointerDown:{defaultValue:null,description:"Callback function for pointer down event",name:"onPointerDown",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerUp:{defaultValue:null,description:"Callback function for pointer up event",name:"onPointerUp",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerMove:{defaultValue:null,description:"Callback function for pointer move event",name:"onPointerMove",required:!1,type:{name:"(event: EventHandlerParams<DataPoint | DataPointDate>) => void"}},onPointerOut:{defaultValue:null,description:"Callback function for pointer out event",name:"onPointerOut",required:!1,type:{name:"(event: PointerEvent<Element>) => void"}},withTooltips:{defaultValue:null,description:"Whether to show tooltips on hover. False by default.",name:"withTooltips",required:!1,type:{name:"boolean"}},showLegend:{defaultValue:null,description:"Whether to show legend",name:"showLegend",required:!1,type:{name:"boolean"}},legendOrientation:{defaultValue:null,description:"Legend orientation",name:"legendOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},legendShape:{defaultValue:null,description:"Legend shape",name:"legendShape",required:!1,type:{name:"LegendShape<SeriesData[], number>"}},legendPosition:{defaultValue:null,description:`Legend position (where the legend appears)
TODO: Add 'left' | 'right' positioning support in future implementation`,name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},legendAlignment:{defaultValue:null,description:"Legend alignment within its position",name:"legendAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},legendMaxWidth:{defaultValue:null,description:`Maximum width for legend items. When set, text overflow behavior is controlled by legendTextOverflow.
Should be a CSS value string (e.g. '200px', '50%', '10rem')`,name:"legendMaxWidth",required:!1,type:{name:"string"}},legendTextOverflow:{defaultValue:null,description:`Controls how text behaves when it exceeds legendMaxWidth.
- 'ellipsis': Truncate with ellipsis (ideal for widgets/small devices)
- 'wrap': Wrap text to multiple lines (default, ideal for larger displays)`,name:"legendTextOverflow",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"ellipsis"'}]}},legendItemClassName:{defaultValue:null,description:`Additional CSS class name for legend items.
This allows consumers to customize individual legend item styling.`,name:"legendItemClassName",required:!1,type:{name:"string"}},gridVisibility:{defaultValue:null,description:"Grid visibility. x is default when orientation is vertical. y is default when orientation is horizontal.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},animation:{defaultValue:null,description:"Whether to show chart animation on initial render or not",name:"animation",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"'md'"},description:`Gap between chart elements (SVG, legend, children).
Uses WordPress design system tokens.`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"]={docgenInfo:D.__docgenInfo,name:"BarListChart",path:"../charts/src/charts/bar-list-chart/bar-list-chart.tsx#BarListChart"})}catch{}},"../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.tsx"(K,L,a){a.d(L,{A:()=>se});var S=a("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),e=a("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/esm/shapes/Pie.js"),T=a("../../../node_modules/.pnpm/@visx+text@3.12.0_react@18.3.1/node_modules/@visx/text/esm/Text.js"),x=a("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltip.js"),j=a("../../../node_modules/.pnpm/@visx+tooltip@3.12.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js"),O=a("../../../node_modules/.pnpm/@wordpress+i18n@6.13.0/node_modules/@wordpress/i18n/build-module/index.mjs"),y=a("../../../node_modules/.pnpm/@wordpress+ui@0.7.0_@types+react@18.3.28_react-dom@18.3.1_react@18.3.1__react@18.3.1_stylelint@16.26.1/node_modules/@wordpress/ui/build-module/stack/stack.mjs"),u=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=a("../charts/src/components/legend/hooks/use-chart-legend-items.ts"),I=a("../charts/src/components/legend/legend.tsx"),C=a("../charts/src/components/tooltip/base-tooltip.tsx"),U=a("../charts/src/hooks/use-element-size.ts"),N=a("../charts/src/hooks/use-interactive-legend-data.ts"),k=a("../charts/src/hooks/use-prefers-reduced-motion.ts"),V=a("../charts/src/providers/chart-context/hooks/use-chart-id.ts"),D=a("../charts/src/providers/chart-context/hooks/use-global-charts-context.ts"),W=a("../charts/src/providers/chart-context/hooks/use-chart-registration.ts"),p=a("../charts/src/providers/chart-context/global-charts-provider.tsx"),v=a("../charts/src/utils/create-composition.ts"),b=a("../charts/src/charts/private/chart-composition/use-chart-children.ts"),g=a("../charts/src/charts/private/chart-composition/chart-svg.tsx"),_=a("../charts/src/charts/private/chart-composition/chart-html.tsx"),M=a("../charts/src/charts/private/radial-wipe-animation/radial-wipe-animation.tsx"),n=a("../charts/src/charts/private/single-chart-context/single-chart-context.tsx"),s=a("../charts/src/charts/private/with-responsive/with-responsive.tsx"),c=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.105.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=a.n(c),o=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"),l={};l.insert="head",l.singleton=!1;var d=r()(o.A,l);const m=o.A.locals||{};var i=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=O.__,A=({tooltipData:w})=>(0,i.jsx)(C.R,{data:w,top:0,left:0,renderContainer:!1}),Z=.03,q=400,ne=w=>w.length?w.some(R=>R.percentage<0||R.value<0)?{isValid:!1,message:"Invalid data: Negative values are not allowed"}:w.reduce((R,B)=>R+B.percentage,0)<=0?{isValid:!1,message:"Invalid percentage total: Must be greater than 0"}:{isValid:!0,message:""}:{isValid:!1,message:"No data available"},te=({data:w,chartId:H,width:G,height:R,thickness:B=.4,clockwise:z=!0,withTooltips:J=!1,showLegend:X=!1,legendOrientation:re="horizontal",legendPosition:ie="bottom",legendAlignment:Se="center",legendMaxWidth:Ae,legendTextOverflow:De="wrap",legendItemClassName:we,legendShape:Ee="circle",legendValueDisplay:ce="percentage",legendInteractive:he=!1,label:Te,animation:Oe,note:Le,className:Re,children:Me,tooltipOffsetX:ue=0,tooltipOffsetY:me=-15,renderTooltip:Ve=A,gap:We="md"})=>{const Y=(0,V.R)(H),[Ge,pe,ge]=(0,U.L)(),{tooltipOpen:Ie,tooltipLeft:Be,tooltipTop:Fe,tooltipData:xe,hideTooltip:ve,showTooltip:fe}=(0,x.A)(),{containerRef:Ue,TooltipInPortal:Ne,containerBounds:F}=(0,j.A)({detectBounds:!0,scroll:!0,debounce:0}),je=(0,t.useCallback)((f,E)=>{F.width===0||F.height===0||fe({tooltipData:E.data,tooltipLeft:f.clientX-F.left+ue,tooltipTop:f.clientY-F.top+me})},[F.width,F.height,F.left,F.top,fe,ue,me]),ke=(0,t.useCallback)(()=>{ve()},[ve]),ze=(0,t.useCallback)(f=>E=>{je(E,f)},[je]),{isValid:ye,message:Ke}=ne(w),{getElementStyles:Ce,isSeriesVisible:He}=(0,D.j)(),{visibleData:Je,allSegmentsHidden:be,legendData:Xe}=(0,N.j)({data:w,chartId:Y,legendInteractive:he,isSeriesVisible:He}),oe=(0,t.useMemo)(()=>({value:f=>f.value,sort:(f,E)=>E.value-f.value,fill:f=>Ce({data:f,index:f.index}).color}),[Ce]),Ye=(0,t.useMemo)(()=>({showValues:!0,legendValueDisplay:ce}),[ce]),Ze=(0,h.f)(Xe,Ye),{svgChildren:qe,htmlChildren:Qe,otherChildren:$e}=(0,b.n)(Me,"PieSemiCircleChart"),et=(0,t.useMemo)(()=>({thickness:B,clockwise:z}),[B,z]);(0,W.t)({chartId:Y,legendItems:Ze,chartType:"pie-semi-circle",isDataValid:ye,metadata:et});const tt=(0,k.j)(),le=G||q;if(!ye){const f=R?Math.min(G||R*2,R*2):le,E=f/2;return(0,i.jsx)("div",{className:m["pie-semi-circle-chart"],children:(0,i.jsx)("svg",{width:f,height:E,"data-testid":"pie-chart-svg",children:(0,i.jsx)("text",{x:"50%",y:"50%",textAnchor:"middle",className:m.error,children:Ke})})})}const at=pe>0?pe:le,nt=ge>0?ge:R||le/2,$=Math.min(at,nt*2),ee=$/2,ae=ee,_e=ae*(1-B),st=Je.map(f=>{const E=w.findIndex(ot=>ot.label===f.label);return{...f,index:E>=0?E:0}}),rt=z?-Math.PI/2:Math.PI/2,it=z?Math.PI/2:-Math.PI/2,Pe=X&&(0,i.jsx)(I.s,{orientation:re,position:ie,alignment:Se,labelStyles:{maxWidth:Ae,textOverflow:De},itemClassName:we,shape:Ee,chartId:Y,interactive:he});return(0,i.jsx)(n.O.Provider,{value:{chartId:Y,chartWidth:$,chartHeight:ee},children:(0,i.jsxs)(y.B,{ref:Ue,direction:"column",gap:We,className:(0,u.A)("pie-semi-circle-chart",m["pie-semi-circle-chart"],{[m["pie-semi-circle-chart--responsive"]]:!G&&!R},Re),style:{width:G||void 0,height:R||void 0},"data-testid":"pie-chart-container",children:[ie==="top"&&Pe,(0,i.jsx)("div",{ref:Ge,className:m["pie-semi-circle-chart__svg-wrapper"],children:(0,i.jsxs)("svg",{width:$,height:ee,viewBox:`0 0 ${$} ${ee}`,"data-testid":"pie-chart-svg",children:[(0,i.jsx)("defs",{children:(0,i.jsx)(M.A,{id:`radial-wipe-${Y}`,radius:ae,innerRadius:_e,startAngle:"-180deg",wipePercentage:50})}),(0,i.jsx)(S.A,{top:ee,left:$/2,mask:Oe&&!tt?`url(#radial-wipe-${Y})`:null,children:be?(0,i.jsx)("text",{textAnchor:"middle",y:-ae/2,fill:"#ccc",fontSize:"14",fontFamily:"-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",children:P("All segments are hidden. Click legend items to show data.","jetpack-charts")}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.A,{data:st,pieValue:oe.value,outerRadius:ae,innerRadius:_e,cornerRadius:3,padAngle:Z,startAngle:rt,endAngle:it,pieSort:oe.sort,children:f=>f.arcs.map(E=>(0,i.jsx)("g",{onMouseMove:J?ze(E):void 0,onMouseLeave:J?ke:void 0,children:(0,i.jsx)("path",{d:f.path(E)||"",fill:oe.fill(E.data),"data-testid":"pie-segment"})},E.data.label))}),(0,i.jsxs)(S.A,{children:[(0,i.jsx)(T.A,{textAnchor:"middle",verticalAnchor:"start",y:-40,className:m.label,children:Te}),(0,i.jsx)(T.A,{textAnchor:"middle",verticalAnchor:"start",y:-20,className:m.note,children:Le})]}),!be&&qe]})})]})}),ie!=="top"&&Pe,J&&Ie&&xe&&(0,i.jsx)(Ne,{top:Fe||0,left:Be||0,children:(0,i.jsx)("div",{role:"tooltip",children:Ve({tooltipData:xe})})}),Qe,$e]})})},Q=w=>(0,t.useContext)(p.m)?(0,i.jsx)(te,{...w}):(0,i.jsx)(p.S,{children:(0,i.jsx)(te,{...w})});Q.displayName="PieSemiCircleChart";const de=(0,v.E)(Q,{Legend:I.s,SVG:g.d,HTML:_.a}),se=(0,v.E)((0,s.F)(Q),{Legend:I.s,SVG:g.d,HTML:_.a})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.2.0_postcss@8.5.6_typescript@5.9.3_webpack@5.105.2/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.97.2_webpack@5.105.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[3]!../charts/src/charts/pie-semi-circle-chart/pie-semi-circle-chart.module.scss"(K,L,a){a.d(L,{A:()=>O});var S=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=a.n(S),T=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.105.2/node_modules/css-loader/dist/runtime/api.js"),x=a.n(T),j=x()(e());j.push([K.id,".bV7yngp0KJksT3KWESOY{height:100%;width:100%}.Cgrbza8Mc3XENCqfqeMT{flex:1;min-height:0;min-width:0;width:100%;display:flex;align-items:center;justify-content:center}.y2tHU90POHGASQJWZmDo .G2RXDUG5544pD7xZQvQX{font-weight:600;font-size:16px}.y2tHU90POHGASQJWZmDo .ovUESKmv5uTp_6xWdBYA{font-size:14px}",""]),j.locals={"pie-semi-circle-chart--responsive":"bV7yngp0KJksT3KWESOY","pie-semi-circle-chart__svg-wrapper":"Cgrbza8Mc3XENCqfqeMT","pie-semi-circle-chart":"y2tHU90POHGASQJWZmDo",label:"G2RXDUG5544pD7xZQvQX",note:"ovUESKmv5uTp_6xWdBYA"};const O=j}}]);
