import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-C4FfPSXZ.js";import{i as r,n as i}from"./blocks-CdVAWafO.js";import{t as a}from"./mdx-react-shim-DCxAIc8O.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Charts/Sparkline/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`sparkline-api-reference`,children:`Sparkline API Reference`}),`
`,(0,c.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,c.jsxs)(t.p,{children:[`Sparkline is a preconfigured variant of `,(0,c.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-charts-line-chart--docs`,children:`LineChart`}),` optimized for compact, inline visualizations. It provides a simplified API while using LineChart's rendering engine internally.`]}),`
`,(0,c.jsx)(t.h2,{id:`sparkline`,children:`Sparkline`}),`
`,(0,c.jsx)(t.p,{children:`Main component for rendering minimal trend visualizations.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of numeric values to plot`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`width`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`100`})}),(0,c.jsx)(t.td,{children:`Width of the sparkline in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`height`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`40`})}),(0,c.jsx)(t.td,{children:`Height of the sparkline in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`size`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Size for responsive variant (equivalent to width for square charts)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`color`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`theme color`}),(0,c.jsx)(t.td,{children:`Color for the line stroke (hex or CSS color)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`strokeWidth`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1.5`})}),(0,c.jsx)(t.td,{children:`Line stroke width in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withGradientFill`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`true`})}),(0,c.jsx)(t.td,{children:`Whether to render the gradient fill beneath the line`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`gradient`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`GradientConfig`})}),(0,c.jsx)(t.td,{children:`auto`}),(0,c.jsx)(t.td,{children:`Gradient configuration for area fill`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`className`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class name`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`chartId`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom chart identifier for unique gradient/element identification`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`margin`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`object`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{2,2,2,2}`})}),(0,c.jsx)(t.td,{children:`Margin around the chart`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`animation`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsxs)(t.td,{children:[`Enable entry animation on initial render. Creates a rising effect where the line scales up from the bottom. Automatically respects user's `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`aspectRatio`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Height-to-width ratio (e.g. `,(0,c.jsx)(t.code,{children:`0.3`}),`) for responsive charts; the chart is contained within its parent on both axes. Used when `,(0,c.jsx)(t.code,{children:`width`}),`/`,(0,c.jsx)(t.code,{children:`height`}),` are omitted (responsive variant only).`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`maxWidth`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1200`})}),(0,c.jsx)(t.td,{children:`Maximum width for responsive charts (responsive variant only)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`resizeDebounceTime`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`300`})}),(0,c.jsx)(t.td,{children:`Debounce time for resize events in ms (responsive variant only)`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`sparklinedatapoint`,children:`SparklineDataPoint`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type SparklineDataPoint = number;
`})}),`
`,(0,c.jsx)(t.p,{children:`Simple numeric value for plotting.`}),`
`,(0,c.jsx)(t.h3,{id:`gradientconfig`,children:`GradientConfig`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type GradientConfig = {
	/** Start color for gradient (defaults to color prop) */
	from?: string;
	/** End color for gradient (defaults to theme backgroundColor) */
	to?: string;
	/** Start opacity (0-1), defaults to 0.5 */
	fromOpacity?: number;
	/** End opacity (0-1), defaults to 0.0 */
	toOpacity?: number;
};
`})}),`
`,(0,c.jsx)(t.h3,{id:`sparklineprops`,children:`SparklineProps`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`interface SparklineProps {
	/** Array of numeric values to plot */
	data: SparklineDataPoint[];
	/** Width of the sparkline in pixels */
	width?: number;
	/** Height of the sparkline in pixels */
	height?: number;
	/** Size (used by responsive variant, equivalent to width for square charts) */
	size?: number;
	/** Color for the line stroke (hex or CSS color) */
	color?: string;
	/** Line stroke width in pixels */
	strokeWidth?: number;
	/** Whether to render the gradient fill beneath the line */
	withGradientFill?: boolean;
	/** Gradient configuration for area fill */
	gradient?: GradientConfig;
	/** Additional CSS class name */
	className?: string;
	/** Chart ID for unique gradient/element identification */
	chartId?: string;
	/** Margin around the chart */
	margin?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`exports`,children:`Exports`}),`
`,(0,c.jsx)(t.h3,{id:`default-export`,children:`Default Export`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Sparkline } from '@automattic/charts';
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The default export is the `,(0,c.jsx)(t.strong,{children:`responsive variant`}),` that automatically adjusts to container width.`]}),`
`,(0,c.jsx)(t.h3,{id:`named-exports`,children:`Named Exports`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SparklineUnresponsive } from '@automattic/charts';
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`SparklineUnresponsive`}),`: Fixed-size variant without responsive behavior. Use this when you want explicit width/height control without automatic resizing.`]}),`
`,(0,c.jsx)(t.h2,{id:`css-classes`,children:`CSS Classes`}),`
`,(0,c.jsx)(t.p,{children:`The component uses BEM-style CSS classes for styling:`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Class`}),(0,c.jsx)(t.th,{children:`Applied When`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`.sparkline`})}),(0,c.jsx)(t.td,{children:`Always`}),(0,c.jsx)(t.td,{children:`Base class applied to all sparklines`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`.sparkline--empty`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data.length === 0`})}),(0,c.jsx)(t.td,{children:`Applied when data is empty. Use for custom empty state styling`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`.sparkline--single-point`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data.length === 1`})}),(0,c.jsx)(t.td,{children:`Applied when rendering a single data point as a circle`})]})]})]}),`
`,(0,c.jsx)(t.h3,{id:`custom-styling-example`,children:`Custom Styling Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.sparkline--empty {
	background: rgba(0, 0, 0, 0.02);
	border: 1px dashed rgba(0, 0, 0, 0.1);
	border-radius: 4px;
}

.sparkline {
	/* Custom styles for all sparklines */
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,c.jsxs)(t.p,{children:[`The default `,(0,c.jsx)(t.code,{children:`Sparkline`}),` export includes responsive sizing. By default, it `,(0,c.jsx)(t.strong,{children:`fills its parent container's dimensions`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Fill parent container (default) - parent needs explicit height
<div style={{ width: '200px', height: '60px' }}>
	<Sparkline data={data} />
</div>

// Use aspect ratio - height calculated from width
<div style={{ width: '100%', maxWidth: '200px' }}>
	<Sparkline data={data} aspectRatio={0.3} />
</div>

// Fixed size (named export)
<SparklineUnresponsive data={data} width={120} height={48} />
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Responsive Props:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatio`}),`: Height as a fraction of width (e.g., 0.3 = 30% height); if the parent is shorter than that height, the chart shrinks both axes to fit rather than overflowing (contained on both axes). When omitted, fills parent height.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxWidth`}),`: Maximum width constraint (default: 1200)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resizeDebounceTime`}),`: Debounce delay for resize events (default: 300ms)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`edge-case-handling`,children:`Edge Case Handling`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Scenario`}),(0,c.jsx)(t.th,{children:`Behavior`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[`Empty data (`,(0,c.jsx)(t.code,{children:`[]`}),`)`]}),(0,c.jsxs)(t.td,{children:[`Renders empty div with `,(0,c.jsx)(t.code,{children:`sparkline--empty`}),` class`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[`Single point (`,(0,c.jsx)(t.code,{children:`[42]`}),`)`]}),(0,c.jsx)(t.td,{children:`Renders a circle at the center`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[`Two points (`,(0,c.jsx)(t.code,{children:`[10, 20]`}),`)`]}),(0,c.jsx)(t.td,{children:`Renders minimal line between points`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Negative values`}),(0,c.jsx)(t.td,{children:`Fully supported, chart scales automatically`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Flat line (all same)`}),(0,c.jsx)(t.td,{children:`Renders horizontal line`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Missing data prop`}),(0,c.jsx)(t.td,{children:`Treated as empty array`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`theme-integration`,children:`Theme Integration`}),`
`,(0,c.jsx)(t.p,{children:`Sparklines use the global charts theme when available:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GlobalChartsProvider } from '@automattic/charts';

<GlobalChartsProvider theme={customTheme}>
	<Sparkline data={data} />
</GlobalChartsProvider>
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Theme Properties Used:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`colors[0]`}),`: Default line color (when `,(0,c.jsx)(t.code,{children:`color`}),` prop not provided)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`backgroundColor`}),`: Default gradient `,(0,c.jsx)(t.code,{children:`to`}),` color`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`typescript-usage`,children:`TypeScript Usage`}),`
`,(0,c.jsx)(t.p,{children:`Full TypeScript support with exported types:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import type {
	SparklineProps,
	GradientConfig,
	SparklineDataPoint
} from '@automattic/charts';

const config: GradientConfig = {
	from: '#4CAF50',
	to: '#ffffff',
	fromOpacity: 0.8,
	toOpacity: 0.1,
};

const data: SparklineDataPoint[] = [10, 15, 12, 18, 22, 25];

<Sparkline data={data} gradient={config} />
`})}),`
`,(0,c.jsx)(t.h2,{id:`relationship-to-linechart`,children:`Relationship to LineChart`}),`
`,(0,c.jsx)(t.p,{children:`Sparkline is built on LineChart with the following preconfigured settings:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Sparkline internally uses LineChart like this:
<LineChart
	data={transformedSeriesData}  // number[] → SeriesData[]
	gridVisibility="none"
	options={{
		axis: {
			x: { display: false },
			y: { display: false }
		}
	}}
	showLegend={false}
	withTooltips={false}
	withGradientFill={true}
	curveType="monotone"
	margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
/>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`For more control over rendering, use LineChart directly with these props. See `,(0,c.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-charts-line-chart-api-reference--docs`,children:`LineChart API Reference`}),` for full documentation.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};