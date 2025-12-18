(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7518],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(i=>{function t(d){var s=new Error("Cannot find module '"+d+"'");throw s.code="MODULE_NOT_FOUND",s}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",i.exports=t}),"../charts/src/charts/line-chart/stories/index.api.mdx":((i,t,d)=>{"use strict";d.r(t),d.d(t,{default:()=>h});var s=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=d("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=d("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/blocks.js");function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...r.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts Library/Charts/Line Chart/API Reference"}),`
`,(0,e.jsx)(n.h1,{id:"line-chart-api-reference",children:"Line Chart API Reference"}),`
`,(0,e.jsx)(n.h2,{id:"linechart",children:"LineChart"}),`
`,(0,e.jsx)(n.p,{children:"Main chart component with responsive behavior by default."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"SeriesData[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data series to display"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"width"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number?"})}),(0,e.jsx)(n.td,{children:"responsive"}),(0,e.jsx)(n.td,{children:"Chart width in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"height"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number?"})}),(0,e.jsx)(n.td,{children:"responsive"}),(0,e.jsx)(n.td,{children:"Chart height in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"curveType"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'smooth' | 'linear' | 'monotone'?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'smooth'"})}),(0,e.jsx)(n.td,{children:"Line curve interpolation type"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withGradientFill"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Fill area under lines with gradient"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"true"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltipCrosshairs"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{ showVertical?: boolean; showHorizontal?: boolean }?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Show crosshair guides with tooltips"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"animation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsxs)(n.td,{children:["Enable entry animation on initial render. Creates a rising effect where lines scale up from the bottom. Automatically respects user's ",(0,e.jsx)(n.code,{children:"prefers-reduced-motion"})," system setting"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display chart legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendOrientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Legend layout orientation"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendAlignment"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'start' | 'center' | 'end'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Legend alignment within its position"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendPosition"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Legend position (where the legend appears)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendShape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'line'"})}),(0,e.jsx)(n.td,{children:"Shape used in legend markers"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legendInteractive"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsxs)(n.td,{children:["Enable interactive legend items that toggle series visibility. Requires ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"})," and ",(0,e.jsx)(n.code,{children:"chartId"})," to be set."]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withStartGlyphs"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Show markers at the first data point of each series"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withLegendGlyph"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Use custom glyphs in legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderGlyph"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: GlyphProps) => ReactNode?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom glyph render function"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"glyphStyle"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"SVGProps<SVGCircleElement>?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{}"})}),(0,e.jsx)(n.td,{children:"Styling for chart glyphs"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(params: RenderTooltipParams) => ReactNode?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"margin"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{ top?: number; right?: number; bottom?: number; left?: number }?"})}),(0,e.jsx)(n.td,{children:"calculated"}),(0,e.jsx)(n.td,{children:"Chart margins"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"options"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ChartOptions?"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"{}"})}),(0,e.jsx)(n.td,{children:"Advanced axis and scale configuration"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerDown"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer down event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerUp"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer up event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerMove"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: EventHandlerParams) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer move event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"onPointerOut"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(event: PointerEvent) => void?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Pointer out event handler"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"children"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ReactNode?"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Child components (e.g., annotations)"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"linechartannotationsoverlay",children:"LineChart.AnnotationsOverlay"}),`
`,(0,e.jsx)(n.p,{children:"Container component that manages annotation rendering and chart synchronization."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"children"}),": Annotation components"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"linechartannotation",children:"LineChart.Annotation"}),`
`,(0,e.jsx)(n.p,{children:"Individual annotation component for highlighting specific data points or events."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"datum"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"DataPointDate"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Data point to annotate"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"title"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Main annotation text"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"subtitle"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional descriptive text"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"subjectType"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle' | 'line-vertical' | 'line-horizontal'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle'"})}),(0,e.jsx)(n.td,{children:"Visual annotation style"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"styles"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"AnnotationStyles"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom styling options"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderLabel"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"FC<{title: string, subtitle?: string}>"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:["Custom label component. ",(0,e.jsx)(n.strong,{children:"Disables smart positioning."})]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderLabelPopover"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"FC<{title: string, subtitle?: string}>"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Interactive popover content"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"testId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Test identifier"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"seriesdata-type",children:"SeriesData Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type SeriesData = {
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
`,(0,e.jsx)(n.h3,{id:"gradient-options",children:"Gradient Options"}),`
`,(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"gradient"})," option in ",(0,e.jsx)(n.code,{children:"SeriesData.options"})," accepts the following configuration:"]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Basic Gradient (Two-Color):"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"from"}),": Start color (hex, rgb, CSS variable) - defaults to series color"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"to"}),": End color (hex, rgb, CSS variable) - defaults to transparent background"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"fromOpacity"}),": Start opacity (0-1, default: 0.4)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"toOpacity"}),": End opacity (0-1, default: 0.1)"]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Advanced Gradient (Multi-Stop):"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"stops"}),": Array of gradient stops for complex gradients",`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"offset"}),": Position along gradient (percentage string, e.g., '25%')"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"color"}),": Color at this stop (hex, rgb, CSS variable) - defaults to line color if omitted"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"opacity"}),": Opacity at this stop (0-1, default: 1)"]}),`
`]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": When using ",(0,e.jsx)(n.code,{children:"stops"}),", the ",(0,e.jsx)(n.code,{children:"from"}),", ",(0,e.jsx)(n.code,{children:"to"}),", ",(0,e.jsx)(n.code,{children:"fromOpacity"}),", and ",(0,e.jsx)(n.code,{children:"toOpacity"})," properties are ignored."]}),`
`,(0,e.jsx)(n.h2,{id:"datapointdate-type",children:"DataPointDate Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointDate = {
	date?: Date;
	dateString?: string; // Multiple formats supported
	value: number | null;
	label?: string;
};
`})}),`
`,(0,e.jsx)(n.h2,{id:"annotationstyles-type",children:"AnnotationStyles Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type AnnotationStyles = {
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
`,(0,e.jsx)(n.h2,{id:"chartoptions-type",children:"ChartOptions Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type ChartOptions = {
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
		};
		y?: {
			orientation?: 'left' | 'right';
			numTicks?: number;
			tickFormat?: (value: number) => string;
		};
	};
};
`})})]})}function h(r={}){const{wrapper:n}={...(0,c.R)(),...r.components};return n?(0,e.jsx)(n,{...r,children:(0,e.jsx)(l,{...r})}):l(r)}})}]);
