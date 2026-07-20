import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-DdpHciZ3.js";import{i as r,n as i}from"./blocks-CTWCXOtc.js";import{t as a}from"./mdx-react-shim-DMcP3cNW.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Charts/Pie Chart/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`pie-chart-api-reference`,children:`Pie Chart API Reference`}),`
`,(0,c.jsx)(t.h2,{id:`piechart`,children:`PieChart`}),`
`,(0,c.jsx)(t.p,{children:`Main component for rendering pie and donut charts.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`DataPointPercentage[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of data objects with label, value, and percentage`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`width`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Width of the chart container in pixels. When omitted, fills parent width`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`height`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Height of the chart container in pixels. When omitted, fills parent height`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`size`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`gap`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`GapSize`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'md'`})}),(0,c.jsx)(t.td,{children:`Gap between chart elements (SVG, legend, children). Uses WordPress design system tokens`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`thickness`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1`})}),(0,c.jsx)(t.td,{children:`Thickness of the pie chart segments (0-1). Values less than 1 create donut charts`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`padding`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`20`})}),(0,c.jsx)(t.td,{children:`Padding around the chart in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`gapScale`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`0`})}),(0,c.jsx)(t.td,{children:`Scale of gaps between segments (0-1)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`cornerScale`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`0`})}),(0,c.jsx)(t.td,{children:`Scale of corner rounding for segments (0-1)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withTooltips`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Enable interactive tooltips on hover`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderTooltip`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(params: PieChartRenderTooltipParams) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom tooltip render function`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`animation`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsxs)(t.td,{children:[`Enable entry animation on initial render. Creates a radial wipe reveal effect. Automatically respects user's `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`showLegend`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Display chart legend`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`legend`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ChartLegendConfig`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`undefined`})}),(0,c.jsxs)(t.td,{children:[`Legend configuration object. See `,(0,c.jsx)(t.a,{href:`#chartlegendconfig-type`,children:`ChartLegendConfig`}),`. When `,(0,c.jsx)(t.code,{children:`interactive`}),` is enabled, requires `,(0,c.jsx)(t.code,{children:`chartId`}),` and `,(0,c.jsx)(t.code,{children:`GlobalChartsProvider`}),`. When segments are hidden, percentages recalculate so visible segments total 100%.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`children`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Optional content to render inside chart center (useful for donut charts)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`className`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class names`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`chartId`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom chart identifier for accessibility`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`maxWidth`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Maximum width for responsive charts`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`aspectRatio`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1`})}),(0,c.jsx)(t.td,{children:`Height-to-width ratio for responsive charts; the chart is contained within its parent on both axes.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`resizeDebounceTime`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`100`})}),(0,c.jsx)(t.td,{children:`Debounce time for resize events (ms)`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`theme-properties`,children:`Theme Properties`}),`
`,(0,c.jsx)(t.p,{children:`The following properties can be customized via the theme system:`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelTextColor`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'#FFFFFF'`})}),(0,c.jsx)(t.td,{children:`Color of text displayed on pie chart segments`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelBackgroundColor`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'transparent'`})}),(0,c.jsx)(t.td,{children:`Background color for labels. Set to any color value to enable label backgrounds`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`compound-components`,children:`Compound Components`}),`
`,(0,c.jsx)(t.h3,{id:`piechartsvg`,children:`PieChart.SVG`}),`
`,(0,c.jsx)(t.p,{children:`Container for SVG elements to be rendered inside the chart area.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`<PieChart.SVG>
  <text x={0} y={0}>Center Text</text>
</PieChart.SVG>
`})}),`
`,(0,c.jsx)(t.h3,{id:`piecharthtml`,children:`PieChart.HTML`}),`
`,(0,c.jsx)(t.p,{children:`Container for HTML elements to be rendered outside the SVG area.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`<PieChart.HTML>
  <h3>Chart Title</h3>
  <PieChart.Legend />
</PieChart.HTML>
`})}),`
`,(0,c.jsx)(t.h3,{id:`piechartlegend`,children:`PieChart.Legend`}),`
`,(0,c.jsx)(t.p,{children:`The Legend component for displaying chart data labels. Can be used either as a prop or within composition:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`// As a prop
<PieChart showLegend={true} legend={{ position: 'bottom' }} />

// With composition
<PieChart>
  <PieChart.Legend position="bottom" orientation="horizontal" />
</PieChart>
`})}),`
`,(0,c.jsx)(t.h2,{id:`piechartrendertooltipparams-type`,children:`PieChartRenderTooltipParams Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type PieChartRenderTooltipParams = {
	/** The data point being hovered, including label, value, and percentage. */
	tooltipData: DataPointPercentage;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`datapointpercentage-type`,children:`DataPointPercentage Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type DataPointPercentage = {
	/** Label for the data point */
	label: string;
	/** Numerical value */
	value: number;
	/** Formatted value for display */
	valueDisplay?: string;
	/** Percentage value (must sum to 100 across all data points) */
	percentage: number;
	/** Optional custom color override */
	color?: string;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`chartlegendconfig-type`,children:`ChartLegendConfig Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type ChartLegendConfig = {
	orientation?: 'horizontal' | 'vertical';
	position?: 'top' | 'bottom';
	alignment?: 'start' | 'center' | 'end';
	shape?: LegendShape;
	interactive?: boolean;
	itemClassName?: string;
	itemStyles?: LegendItemStyles;
	labelStyles?: LegendLabelStyles;
	shapeStyles?: LegendShapeStyles;
};
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};