import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-DgwmljhP.js";import{i as r,n as i}from"./blocks-LXHYIXoj.js";import{t as a}from"./mdx-react-shim-9vfRmuWl.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Charts/Heatmap Chart/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`heatmap-chart-api-reference`,children:`Heatmap Chart API Reference`}),`
`,(0,c.jsx)(t.h2,{id:`heatmapchart`,children:`HeatmapChart`}),`
`,(0,c.jsxs)(t.p,{children:[`Main component for rendering a two-dimensional heatmap. Cells are laid out with CSS Grid
and shaded with CSS `,(0,c.jsx)(t.code,{children:`color-mix`}),`, so the scale adapts to the chart background.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`HeatmapColumn[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of columns; each column contains an optional label and an array of cells.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`rowLabels`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string[]`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`[]`})}),(0,c.jsx)(t.td,{children:`y-axis labels by row index. Empty entries render blank.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`compact`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Compact mode: tighten cell gaps, suppress in-cell values, and thin axis labels.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`showValues`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`!compact`})}),(0,c.jsx)(t.td,{children:`Render the numeric value inside each cell (compact notation for large numbers; the tooltip and aria-label keep full precision).`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`maxCellWidth`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Maximum cell width in pixels in non-compact mode. Cells stop growing at this width while narrower containers may still shrink them.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`maxCellHeight`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Maximum cell height in pixels in non-compact mode. Applying it content-sizes the chart vertically so unused container height does not stretch the rows.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`minCellWidth`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`0`})}),(0,c.jsx)(t.td,{children:`Minimum cell width in pixels in non-compact mode. The grid overflows horizontally instead of shrinking cells below this width.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`minCellHeight`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`0`})}),(0,c.jsx)(t.td,{children:`Minimum cell height in pixels in non-compact mode. The grid overflows vertically instead of shrinking cells below this height.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`primaryColor`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`theme / palette`}),(0,c.jsxs)(t.td,{children:[`Color the scale interpolates toward at the highest value. Resolution order: this prop > `,(0,c.jsx)(t.code,{children:`heatmapChart.primaryColor`}),` > palette `,(0,c.jsx)(t.code,{children:`colors[0]`}),`.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withTooltips`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Show a tooltip on cell hover or keyboard navigation.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderTooltip`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(data: HeatmapTooltipData) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Custom tooltip render function. Receives `,(0,c.jsx)(t.code,{children:`HeatmapTooltipData`}),`. The default tooltip formats numeric values with `,(0,c.jsx)(t.code,{children:`@automattic/number-formatters`}),`.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`width`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Fixed width in pixels. When omitted, the chart fills its parent's width.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`height`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Fixed height in pixels. When omitted, the chart fills its parent's height.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`aspectRatio`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Height-to-width ratio (e.g. `,(0,c.jsx)(t.code,{children:`0.4`}),`) for responsive charts; the chart is contained within its parent on both axes. Used when `,(0,c.jsx)(t.code,{children:`width`}),`/`,(0,c.jsx)(t.code,{children:`height`}),` are omitted.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`chartId`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom chart identifier used in accessibility attributes.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`className`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class for the outermost element.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`gap`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`GapSize`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'md'`})}),(0,c.jsx)(t.td,{children:`Gap between chart layout regions (chart area, legend, children). Uses WordPress design system tokens.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`children`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Composition children, e.g. `,(0,c.jsx)(t.code,{children:`<HeatmapChart.Legend />`}),`.`]})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`heatmapchartlegend`,children:`HeatmapChart.Legend`}),`
`,(0,c.jsxs)(t.p,{children:[`Sub-component that renders a sequential gradient scale from the lightest to the fullest color, annotated with the min and max values present in `,(0,c.jsx)(t.code,{children:`data`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`<HeatmapChart data={ columns } rowLabels={ rowLabels }>
	<HeatmapChart.Legend />
</HeatmapChart>
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`steps`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`5`})}),(0,c.jsx)(t.td,{children:`Number of color swatches in the scale.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`lessLabel`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'Less'`})}),(0,c.jsx)(t.td,{children:`Label shown to the left of the swatches.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`moreLabel`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'More'`})}),(0,c.jsx)(t.td,{children:`Label shown to the right of the swatches.`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`heatmapcolumn-type`,children:`HeatmapColumn Type`}),`
`,(0,c.jsx)(t.p,{children:`A single column in the heatmap matrix (rendered left→right); its cells render top→bottom.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type HeatmapColumn = {
	/** x-axis label for this column. Empty or omitted renders blank. */
	label?: string;
	/** Ordered array of cells for this column. */
	data: HeatmapCell[];
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`heatmapcell-type`,children:`HeatmapCell Type`}),`
`,(0,c.jsx)(t.p,{children:`A single cell in the heatmap.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type HeatmapCell = {
	/** Per-cell label used in the tooltip / accessible name. */
	label?: string;
	/** Numeric value. Use null to mark an empty / missing cell. */
	value: number | null;
	/**
	 * Leave the cell's grid slot empty: nothing is painted and the cell is
	 * skipped by hover and keyboard navigation, while the slot keeps its
	 * place so the rest of the grid doesn't shift.
	 */
	hidden?: boolean;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`heatmaptooltipdata-type`,children:`HeatmapTooltipData Type`}),`
`,(0,c.jsxs)(t.p,{children:[`Data passed to `,(0,c.jsx)(t.code,{children:`renderTooltip`}),` when a cell is hovered or selected via keyboard.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type HeatmapTooltipData = {
	/** Cell value, or null for an empty cell. */
	value: number | null;
	/** Row label from \`rowLabels\` at this cell's row index. */
	rowLabel?: string;
	/** Column label from the column's \`label\` property. */
	columnLabel?: string;
	/** Per-cell label from \`HeatmapCell.label\`. */
	cellLabel?: string;
	/** Zero-based row index of the cell. */
	row: number;
	/** Zero-based column index of the cell. */
	column: number;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`buildcalendarheatmapdata`,children:`buildCalendarHeatmapData`}),`
`,(0,c.jsxs)(t.p,{children:[`Utility function that converts a flat time-series into the `,(0,c.jsx)(t.code,{children:`HeatmapColumn[]`}),` / `,(0,c.jsx)(t.code,{children:`rowLabels`}),` structure used by `,(0,c.jsx)(t.code,{children:`HeatmapChart`}),`, producing a calendar/contribution-style layout.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Signature:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function buildCalendarHeatmapData(
	series: DataPointDate[],
	options?: { weekStartsOn?: 0 | 1; hideOutOfRangeDays?: boolean }
): CalendarHeatmapResult
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Parameter`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`series`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`DataPointDate[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of data points with a `,(0,c.jsx)(t.code,{children:`date`}),` (or `,(0,c.jsx)(t.code,{children:`dateString`}),`) and a numeric `,(0,c.jsx)(t.code,{children:`value`}),`.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`options.weekStartsOn`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`0 | 1`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1`})}),(0,c.jsxs)(t.td,{children:[`Day the week starts on: `,(0,c.jsx)(t.code,{children:`0`}),` = Sunday, `,(0,c.jsx)(t.code,{children:`1`}),` = Monday.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`options.hideOutOfRangeDays`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`true`})}),(0,c.jsxs)(t.td,{children:[`Mark the week-completion days outside the series' date span as hidden cells (empty grid slots) instead of blank cells, giving the calendar ragged edges. Pass `,(0,c.jsx)(t.code,{children:`false`}),` to keep them as blank cells.`]})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`CalendarHeatmapResult`})]}),`
`,(0,c.jsx)(t.h2,{id:`calendarheatmapresult-type`,children:`CalendarHeatmapResult Type`}),`
`,(0,c.jsxs)(t.p,{children:[`Return value of `,(0,c.jsx)(t.code,{children:`buildCalendarHeatmapData`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type CalendarHeatmapResult = {
	/** Columns to pass directly to HeatmapChart's \`data\` prop. */
	data: HeatmapColumn[];
	/** Row labels to pass directly to HeatmapChart's \`rowLabels\` prop. */
	rowLabels: string[];
};
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};