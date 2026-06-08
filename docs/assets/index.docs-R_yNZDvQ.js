import{n as e}from"./chunk-zsgVPwQN.js";import{fv as t}from"./iframe-33AOSa0J.js";import{r as n}from"./react-D5QKnfSX.js";import{t as r}from"./mdx-react-shim-BmVAWLvt.js";import{i,n as a,r as o}from"./blocks-Cb6NUQkV.js";function s(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`JS Packages/Charts Library/Introduction`}),`
`,(0,l.jsx)(t.h1,{id:`automattic-charts`,children:`Automattic Charts`}),`
`,(0,l.jsxs)(t.p,{children:[`A comprehensive charting library for displaying interactive data visualizations within Automattic products. Built on top of modern libraries like `,(0,l.jsx)(t.code,{children:`@visx/xychart`}),` and designed for accessibility, responsiveness, and ease of use.`]}),`
`,(0,l.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`✨ `,(0,l.jsx)(t.strong,{children:`Rich Chart Types`}),` - Bar charts, bar list charts, conversion funnel charts, donut charts, geo charts, leaderboard visualizations, line charts, pie charts, and sparklines`]}),`
`,(0,l.jsxs)(t.li,{children:[`🎨 `,(0,l.jsx)(t.strong,{children:`Themeable`}),` - Built-in default theme with custom theme support`]}),`
`,(0,l.jsxs)(t.li,{children:[`📱 `,(0,l.jsx)(t.strong,{children:`Responsive`}),` - Automatically adapts to container size and viewport changes`]}),`
`,(0,l.jsxs)(t.li,{children:[`♿ `,(0,l.jsx)(t.strong,{children:`Accessible`}),` - Full keyboard navigation, screen reader support, and ARIA compliance`]}),`
`,(0,l.jsxs)(t.li,{children:[`🔧 `,(0,l.jsx)(t.strong,{children:`Compound Components`}),` - Flexible API using compound component patterns for advanced features`]}),`
`,(0,l.jsxs)(t.li,{children:[`🖱️ `,(0,l.jsx)(t.strong,{children:`Interactive`}),` - Tooltips, legends, annotations, and hover effects`]}),`
`,(0,l.jsxs)(t.li,{children:[`🎯 `,(0,l.jsx)(t.strong,{children:`TypeScript`}),` - Full TypeScript support with comprehensive type definitions`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`quick-start`,children:`Quick Start`}),`
`,(0,l.jsx)(t.h3,{id:`installation`,children:`Installation`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-bash`,children:`npm install @automattic/charts
# or
pnpm add @automattic/charts
# or
yarn add @automattic/charts
`})}),`
`,(0,l.jsx)(t.h3,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,l.jsx)(o,{language:`jsx`,code:`import { LineChart, GlobalChartsProvider } from '@automattic/charts';

const data = [
	{
		label: 'Views',
		data: [
			{ date: new Date('2024-01-01'), value: 1200 },
			{ date: new Date('2024-01-02'), value: 1400 },
			{ date: new Date('2024-01-03'), value: 1100 },
		],
		options: {}
	}
];

function MyChart() {
	return (
		<GlobalChartsProvider>
			<LineChart data={data} />
		</GlobalChartsProvider>
	);
}`}),`
`,(0,l.jsx)(t.h3,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,l.jsx)(t.p,{children:`Some chart components use WordPress design tokens for consistent spacing and styling. If your application doesn't already include the WordPress theme package, you'll need to import the design tokens CSS:`}),`
`,(0,l.jsx)(o,{language:`jsx`,code:`// Add this import to your app's entry point if tokens aren't already available
import '@wordpress/theme/design-tokens.css';`}),`
`,(0,l.jsx)(t.p,{children:`In WordPress environments (wp-admin, Gutenberg editor), these tokens are typically already loaded. For standalone applications or Storybook, you may need to add this import explicitly.`}),`
`,(0,l.jsx)(t.h2,{id:`available-chart-types`,children:`Available Chart Types`}),`
`,(0,l.jsx)(t.h3,{id:`bar-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-chart--docs`,children:`Bar Chart`})}),`
`,(0,l.jsx)(t.p,{children:`Ideal for comparing values across categories, with vertical and horizontal orientations.`}),`
`,(0,l.jsx)(t.h3,{id:`bar-list-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-bar-list-chart--docs`,children:`Bar List Chart`})}),`
`,(0,l.jsx)(t.p,{children:`A horizontal bar chart with customizable labels and value positioning, perfect for displaying categorized data with text annotations.`}),`
`,(0,l.jsx)(t.h3,{id:`conversion-funnel-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-conversion-funnel-chart--docs`,children:`Conversion Funnel Chart`})}),`
`,(0,l.jsx)(t.p,{children:`A specialized chart for visualizing conversion funnels with interactive bar selection, hover effects, and step-by-step progression tracking.`}),`
`,(0,l.jsx)(t.h3,{id:`donut-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-donut-chart--docs`,children:`Donut Chart`})}),`
`,(0,l.jsx)(t.p,{children:`A variation of pie charts with a hollow center for additional content display.`}),`
`,(0,l.jsx)(t.h3,{id:`geo-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-geo-chart--docs`,children:`Geo Chart`})}),`
`,(0,l.jsx)(t.p,{children:`Visualizes geographical data on an interactive world map, making it easy to understand the distribution of values across countries.`}),`
`,(0,l.jsx)(t.h3,{id:`leaderboard-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-leaderboard-chart--docs`,children:`Leaderboard Chart`})}),`
`,(0,l.jsx)(t.p,{children:`Specialized for ranking data with progress bars and comparison values.`}),`
`,(0,l.jsx)(t.h3,{id:`line-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-line-chart--docs`,children:`Line Chart`})}),`
`,(0,l.jsx)(t.p,{children:`Perfect for displaying trends over time, with support for multiple data series, annotations, and various curve types.`}),`
`,(0,l.jsx)(t.h3,{id:`pie-chart`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-pie-chart--docs`,children:`Pie Chart`})}),`
`,(0,l.jsx)(t.p,{children:`Great for showing parts of a whole, with customizable thickness and gap spacing.`}),`
`,(0,l.jsx)(t.h3,{id:`sparkline`,children:(0,l.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-sparkline--docs`,children:`Sparkline`})}),`
`,(0,l.jsx)(t.p,{children:`A minimal, word-sized chart component designed for showing trends at a glance, perfect for dashboard metrics and inline data visualization.`}),`
`,(0,l.jsx)(t.h2,{id:`core-concepts`,children:`Core Concepts`}),`
`,(0,l.jsx)(t.h3,{id:`data-format`,children:`Data Format`}),`
`,(0,l.jsxs)(t.p,{children:[`Charts expect data in a standardized format with `,(0,l.jsx)(t.code,{children:`date`}),` (for time-series) or category values and numeric `,(0,l.jsx)(t.code,{children:`value`}),` properties.`]}),`
`,(0,l.jsx)(t.h3,{id:`theme-system`,children:`Theme System`}),`
`,(0,l.jsxs)(t.p,{children:[`Use the `,(0,l.jsx)(t.code,{children:`GlobalChartsProvider`}),` component to apply consistent styling across all charts. Create custom themes by defining the properties you want to override, such as colors, grid styling, and typography.`]}),`
`,(0,l.jsx)(t.h3,{id:`responsive-design`,children:`Responsive Design`}),`
`,(0,l.jsxs)(t.p,{children:[`All charts automatically adapt to their container size using the `,(0,l.jsx)(t.code,{children:`withResponsive`}),` higher-order component. By default, charts `,(0,l.jsx)(t.strong,{children:`fill their parent container's dimensions`}),` rather than calculating height from a fixed aspect ratio.`]}),`
`,(0,l.jsx)(t.h4,{id:`default-behavior-fill-container`,children:`Default Behavior (Fill Container)`}),`
`,(0,l.jsx)(t.p,{children:`When you omit dimension props, the chart expands to fill its parent container:`}),`
`,(0,l.jsx)(o,{language:`jsx`,code:`// Chart fills parent container's width and height
<div style={{ width: '100%', height: '400px' }}>
	<LineChart data={data} />
</div>`}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Important`}),`: The parent container must have an explicit height. Without a defined height, the chart cannot determine how tall to render.`]}),`
`,(0,l.jsx)(t.h4,{id:`aspect-ratio-mode`,children:`Aspect Ratio Mode`}),`
`,(0,l.jsxs)(t.p,{children:[`For layouts where you want height calculated from width, pass the `,(0,l.jsx)(t.code,{children:`aspectRatio`}),` prop:`]}),`
`,(0,l.jsx)(o,{language:`jsx`,code:`// Height = width × aspectRatio (e.g., 2:1 ratio)
<div style={{ width: '100%' }}>
	<LineChart data={data} aspectRatio={0.5} />
</div>`}),`
`,(0,l.jsx)(t.p,{children:`This is useful for responsive layouts where the container width varies but you want consistent proportions.`}),`
`,(0,l.jsx)(t.h4,{id:`fixed-dimensions`,children:`Fixed Dimensions`}),`
`,(0,l.jsxs)(t.p,{children:[`For complete control, specify explicit `,(0,l.jsx)(t.code,{children:`width`}),` and `,(0,l.jsx)(t.code,{children:`height`}),` props:`]}),`
`,(0,l.jsx)(o,{language:`jsx`,code:`<LineChart data={data} width={800} height={400} />`}),`
`,(0,l.jsx)(t.h4,{id:`responsive-props`,children:`Responsive Props`}),`
`,(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:`Prop`}),(0,l.jsx)(t.th,{children:`Type`}),(0,l.jsx)(t.th,{children:`Default`}),(0,l.jsx)(t.th,{children:`Description`})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`width`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`number`})}),(0,l.jsx)(t.td,{children:`-`}),(0,l.jsx)(t.td,{children:`Fixed width in pixels (omit for responsive)`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`height`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`number`})}),(0,l.jsx)(t.td,{children:`-`}),(0,l.jsx)(t.td,{children:`Fixed height in pixels (omit for responsive)`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`aspectRatio`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`number`})}),(0,l.jsx)(t.td,{children:`-`}),(0,l.jsxs)(t.td,{children:[`Height as ratio of width (e.g., `,(0,l.jsx)(t.code,{children:`0.5`}),` = half width)`]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`maxWidth`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`number`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`1200`})}),(0,l.jsx)(t.td,{children:`Maximum width constraint`})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`resizeDebounceTime`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`number`})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:`300`})}),(0,l.jsx)(t.td,{children:`Debounce delay for resize events (ms)`})]})]})]}),`
`,(0,l.jsx)(t.h4,{id:`unresponsive-variants`,children:`Unresponsive Variants`}),`
`,(0,l.jsx)(t.p,{children:`Each chart exports an "Unresponsive" variant for cases where you need direct control without the responsive wrapper:`}),`
`,(0,l.jsx)(o,{language:`jsx`,code:`import { LineChartUnresponsive } from '@automattic/charts';

// Requires explicit width and height
<LineChartUnresponsive data={data} width={800} height={400} />`}),`
`,(0,l.jsx)(t.h3,{id:`compound-components`,children:`Compound Components`}),`
`,(0,l.jsx)(t.p,{children:`Advanced features like annotations, legends, and tooltips are implemented as compound components for maximum flexibility.`}),`
`,(0,l.jsx)(t.h2,{id:`development`,children:`Development`}),`
`,(0,l.jsx)(t.h3,{id:`running-storybook-locally`,children:`Running Storybook Locally`}),`
`,(0,l.jsx)(t.p,{children:`To explore all available charts and their variations:`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-bash`,children:`# From the charts package directory
pnpm run storybook

# Or from the Jetpack monorepo root
pnpm -F @automattic/charts storybook
`})}),`
`,(0,l.jsx)(t.h3,{id:`contributing`,children:`Contributing`}),`
`,(0,l.jsxs)(t.p,{children:[`Ready to contribute? Check out the `,(0,l.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md`,rel:`nofollow`,children:`Jetpack contributing guide`}),` and the `,(0,l.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/blob/trunk/projects/js-packages/charts/docs/ai-documentation-guide.md`,rel:`nofollow`,children:`Charts AI documentation guide`}),` for detailed information on adding new features and documentation.`]}),`
`,(0,l.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/tree/trunk/projects/js-packages/charts`,rel:`nofollow`,children:`GitHub Repository`})}),`
`,(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/tree/trunk/projects/js-packages/charts/README.md`,rel:`nofollow`,children:`Package Documentation`})}),`
`,(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/tree/trunk/projects/js-packages/charts/src/types.ts`,rel:`nofollow`,children:`TypeScript Definitions`})}),`
`,(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:`https://github.com/Automattic/jetpack/blob/trunk/docs/CONTRIBUTING.md`,rel:`nofollow`,children:`Contributing Guidelines`})}),`
`]}),`
`,(0,l.jsx)(t.p,{children:`Start exploring the components and examples in the sidebar to see the full capabilities of the Automattic Charts library!`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(),r(),i()}))();export{c as default};