import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-kEi5XErg.js";import{i as r,n as i}from"./blocks-B8uU7BWl.js";import{t as a}from"./mdx-react-shim-CBPw60Aj.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Charts/Line Chart/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`line-chart-api-reference`,children:`Line Chart API Reference`}),`
`,(0,c.jsx)(t.h2,{id:`linechart`,children:`LineChart`}),`
`,(0,c.jsx)(t.p,{children:`Main chart component with responsive behavior by default.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`SeriesData[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of data series to display`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`width`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number?`})}),(0,c.jsx)(t.td,{children:`responsive`}),(0,c.jsx)(t.td,{children:`Chart width in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`height`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number?`})}),(0,c.jsx)(t.td,{children:`responsive`}),(0,c.jsx)(t.td,{children:`Chart height in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`aspectRatio`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Height-to-width ratio (e.g. `,(0,c.jsx)(t.code,{children:`0.4`}),`) for responsive charts; the chart is contained within its parent on both axes. Used when `,(0,c.jsx)(t.code,{children:`width`}),`/`,(0,c.jsx)(t.code,{children:`height`}),` are omitted.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`curveType`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'smooth' | 'linear' | 'monotone'?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'smooth'`})}),(0,c.jsx)(t.td,{children:`Line curve interpolation type`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withGradientFill`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Fill area under lines with gradient`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withTooltips`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`true`})}),(0,c.jsx)(t.td,{children:`Enable interactive tooltips`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withTooltipCrosshairs`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{ showVertical?: boolean; showHorizontal?: boolean }?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Show crosshair guides with tooltips`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`zoomable`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Enable drag-to-zoom on the X axis. Dragging horizontally rescales the X axis to the selected range; a "Reset zoom" button appears in the top-right while zoomed`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`animation`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsxs)(t.td,{children:[`Enable entry animation on initial render. Creates a rising effect where lines scale up from the bottom. Automatically respects user's `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`showLegend`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Display chart legend`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`legend`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`SeriesChartLegendConfig`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`undefined`})}),(0,c.jsxs)(t.td,{children:[`Legend configuration object. See `,(0,c.jsx)(t.a,{href:`#serieschartlegendconfig-type`,children:`SeriesChartLegendConfig`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`rescaleYOnVisibilityChange`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`true`})}),(0,c.jsxs)(t.td,{children:[`Whether the value axis rescales to the visible series when the visible set changes. Set `,(0,c.jsx)(t.code,{children:`false`}),` to pin it to the full data range so the baseline doesn't move as series are hidden`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withStartGlyphs`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Show markers at the first data point of each series`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withLegendGlyph`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Use custom glyphs in legend`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderGlyph`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(props: GlyphProps) => ReactNode?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom glyph render function`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`glyphStyle`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`SVGProps<SVGCircleElement>?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{}`})}),(0,c.jsx)(t.td,{children:`Styling for chart glyphs`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderTooltip`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(params: RenderTooltipParams) => ReactNode?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom tooltip render function`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`margin`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{ top?: number; right?: number; bottom?: number; left?: number }?`})}),(0,c.jsx)(t.td,{children:`calculated`}),(0,c.jsx)(t.td,{children:`Chart margins`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`options`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ChartOptions?`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{}`})}),(0,c.jsx)(t.td,{children:`Advanced axis and scale configuration`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`onPointerDown`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(event: EventHandlerParams) => void?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Pointer down event handler`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`onPointerUp`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(event: EventHandlerParams) => void?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Pointer up event handler`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`onPointerMove`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(event: EventHandlerParams) => void?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Pointer move event handler`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`onPointerOut`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(event: PointerEvent) => void?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Pointer out event handler`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`children`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ReactNode?`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Child components (e.g., annotations)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`gap`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`GapSize`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'md'`})}),(0,c.jsx)(t.td,{children:`Gap between chart elements (SVG, legend, children). Uses WordPress design system tokens`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`linechartannotationsoverlay`,children:`LineChart.AnnotationsOverlay`}),`
`,(0,c.jsx)(t.p,{children:`Container component that manages annotation rendering and chart synchronization.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children`}),`: Annotation components`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`linechartannotation`,children:`LineChart.Annotation`}),`
`,(0,c.jsx)(t.p,{children:`Individual annotation component for highlighting specific data points or events.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`datum`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`DataPointDate`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Data point to annotate`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`title`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Main annotation text`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`subtitle`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional descriptive text`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`subjectType`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'circle' | 'line-vertical' | 'line-horizontal'`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'circle'`})}),(0,c.jsx)(t.td,{children:`Visual annotation style`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`styles`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`AnnotationStyles`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom styling options`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderLabel`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`FC<{title: string, subtitle?: string}>`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Custom label component. `,(0,c.jsx)(t.strong,{children:`Disables smart positioning.`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderLabelPopover`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`FC<{title: string, subtitle?: string}>`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Interactive popover content`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`testId`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Test identifier`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`seriesdata-type`,children:`SeriesData Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type SeriesData = {
	label: string;
	data: DataPointDate[];
	options?: {
		gradient?: {
			from?: string;
			to?: string;
			fromOpacity?: number;
			toOpacity?: number;
			stops?: Array<{
				offset: string;
				color?: string;
				opacity?: number;
			}>;
		};
		stroke?: string;
		seriesLineStyle?: LineStyles;
		legendShapeStyle?: CSSProperties;
		type?: 'comparison'; // Semantic type for automatic theme styling
	};
};
`})}),`
`,(0,c.jsx)(t.h3,{id:`gradient-options`,children:`Gradient Options`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`gradient`}),` option in `,(0,c.jsx)(t.code,{children:`SeriesData.options`}),` accepts the following configuration:`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Basic Gradient (Two-Color):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`from`}),`: Start color (hex, rgb, CSS variable) - defaults to series color`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to`}),`: End color (hex, rgb, CSS variable) - defaults to transparent background`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fromOpacity`}),`: Start opacity (0-1, default: 0.4)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toOpacity`}),`: End opacity (0-1, default: 0.1)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Advanced Gradient (Multi-Stop):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stops`}),`: Array of gradient stops for complex gradients`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`offset`}),`: Position along gradient (percentage string, e.g., '25%')`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`color`}),`: Color at this stop (hex, rgb, CSS variable) - defaults to line color if omitted`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`opacity`}),`: Opacity at this stop (0-1, default: 1)`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: When using `,(0,c.jsx)(t.code,{children:`stops`}),`, the `,(0,c.jsx)(t.code,{children:`from`}),`, `,(0,c.jsx)(t.code,{children:`to`}),`, `,(0,c.jsx)(t.code,{children:`fromOpacity`}),`, and `,(0,c.jsx)(t.code,{children:`toOpacity`}),` properties are ignored.`]}),`
`,(0,c.jsx)(t.h2,{id:`datapointdate-type`,children:`DataPointDate Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type DataPointDate = {
	date?: Date;
	dateString?: string; // Multiple formats supported
	value: number | null;
	label?: string;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`annotationstyles-type`,children:`AnnotationStyles Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type AnnotationStyles = {
	circleSubject?: {
		fill?: string;
		stroke?: string;
		radius?: number;
		// ... other circle properties
	};
	lineSubject?: {
		stroke?: string;
		strokeWidth?: number;
		// ... other line properties
	};
	connector?: {
		stroke?: string;
		strokeWidth?: number;
		// ... other connector properties
	};
	label?: {
		backgroundFill?: string;
		fontColor?: string;
		showAnchorLine?: boolean;
		maxWidth?: number;
		x?: number | 'start' | 'end';
		y?: number | 'start' | 'end';
		// ... other label properties
	};
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`chartoptions-type`,children:`ChartOptions Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type ChartOptions = {
	yScale?: {
		type?: 'linear' | 'log';
		zero?: boolean;
		domain?: [number, number];
		nice?: boolean;
	};
	xScale?: {
		type?: 'time' | 'linear';
		domain?: [Date, Date] | [number, number];
	};
	axis?: {
		x?: {
			orientation?: 'top' | 'bottom';
			numTicks?: number;
			tickFormat?: (value: any) => string;
			// Declared bucket resolution of the data; the automatic tick
			// formatter uses it instead of inferring from point spacing.
			// The time span still constrains the choice; ignored when
			// tickFormat is set.
			tickResolution?: 'hour' | 'day' | 'week' | 'month' | 'year';
		};
		y?: {
			orientation?: 'left' | 'right';
			numTicks?: number;
			tickFormat?: (value: number) => string;
		};
	};
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`serieschartlegendconfig-type`,children:`SeriesChartLegendConfig Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type SeriesChartLegendConfig = {
	orientation?: 'horizontal' | 'vertical';
	position?: 'top' | 'bottom';
	alignment?: 'start' | 'center' | 'end';
	shape?: LegendShape;
	interactive?: boolean;
	// Collapse series sharing a \`group\` into one item (line, bar, area charts only).
	collapseGroups?: boolean;
	itemClassName?: string;
	itemStyles?: LegendItemStyles;
	labelStyles?: LegendLabelStyles;
	shapeStyles?: LegendShapeStyles;
};
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};