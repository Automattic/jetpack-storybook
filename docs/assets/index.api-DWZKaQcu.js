import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-Dow_X4ns.js";import{i as r,n as i}from"./blocks-BQpgQ9pA.js";import{t as a}from"./mdx-react-shim-Ir8BoYTq.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Global Context/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`global-charts-context-api-reference`,children:`Global Charts Context API Reference`}),`
`,(0,c.jsx)(t.p,{children:`This document provides comprehensive API documentation for the Global Charts Context system.`}),`
`,(0,c.jsx)(t.h2,{id:`globalchartsprovider`,children:`GlobalChartsProvider`}),`
`,(0,c.jsx)(t.p,{children:`The main provider component that enables chart context functionality.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`theme`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Partial<ChartTheme>`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`defaultTheme`})}),(0,c.jsx)(t.td,{children:`Custom theme object that gets merged with the default theme`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`children`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Chart components and other React elements`]})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`globalchartscontextvalue`,children:`GlobalChartsContextValue`}),`
`,(0,c.jsxs)(t.p,{children:[`The context value shape provided by `,(0,c.jsx)(t.code,{children:`useGlobalChartsContext`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`interface GlobalChartsContextValue {
	// Chart registry
	charts: Map<string, ChartRegistration>;
	registerChart: (id: string, data: ChartRegistration) => void;
	unregisterChart: (id: string) => void;
	getChartData: (id: string) => ChartRegistration | undefined;

	// Theme and styling
	theme: CompleteChartTheme;
	getElementStyles: (params: GetElementStylesParams) => ElementStyles;

	// Series visibility management shared by charts and legends
	toggleSeriesVisibility: (chartId: string, seriesLabel: string) => void;
	// Absolute counterpart to the toggle, for callers that know the target state.
	setSeriesVisibility: (chartId: string, seriesLabel: string, visible: boolean) => void;
	// Replaces a chart's entire hidden set.
	setChartHiddenSeries: (chartId: string, seriesLabels: readonly string[]) => void;
	// Applies a chart's defaults once. A no-op for a chart that has already been seeded.
	seedChartHiddenSeries: (chartId: string, seriesLabels: readonly string[]) => void;
	// Whether this chart's defaults have already been seeded, in this or an earlier mount.
	hasSeededChart: (chartId: string) => boolean;
	isSeriesVisible: (chartId: string, seriesLabel: string) => boolean;
	getHiddenSeries: (chartId: string) => Set<string>;

	// Color palette resolution state
	isColorPaletteResolved: boolean;
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Member notes:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Member`}),(0,c.jsx)(t.th,{children:`Note`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`seedChartHiddenSeries`})}),(0,c.jsxs)(t.td,{children:[`Backs the `,(0,c.jsx)(t.code,{children:`defaultHiddenSeries`}),` prop. The provider records which chart IDs it has seeded, so a chart that unmounts and comes back keeps whatever the reader had shown or hidden.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`isColorPaletteResolved`})}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`false`}),` until the color cache has resolved from the DOM and painted. Use it to defer transitions that would otherwise interpolate from a fallback color.`]})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`For theming and CSS custom-property overrides, see the `,(0,c.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-global-context--docs`,children:`Global Charts Context guide`}),` and `,(0,c.jsx)(t.code,{children:`TOKENS.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`chartregistration-type`,children:`ChartRegistration Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`interface ChartRegistration {
	legendItems: BaseLegendItem[];
	chartType: ChartType;
	metadata?: Record<string, unknown>;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`elementstyles-type`,children:`ElementStyles Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type ElementStyles = {
	color: string;
	lineStyles: LineStyles;
	barStyles: BarStyles;
	glyph: <Datum extends object>(props: GlyphProps<Datum>) => ReactNode;
	shapeStyles: CSSProperties & LineStyles;
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`barStyles`}),` carries bar-specific styling resolved from the theme by semantic series type (e.g. `,(0,c.jsx)(t.code,{children:`barChart.barStyles.comparison`}),`) — `,(0,c.jsx)(t.code,{children:`{ widthFactor?, opacity? }`}),`. It is `,(0,c.jsx)(t.code,{children:`{}`}),` for series with no matching bar style and for non-`,(0,c.jsx)(t.code,{children:`SeriesData`}),` inputs.`]}),`
`,(0,c.jsx)(t.h2,{id:`token-resolution-in-js`,children:`Token resolution in JS`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function useChartScopeElement(): HTMLElement | null;

function normalizeColorToHex(
	color: string,
	element?: HTMLElement | null,
	resolveCss?: ( value: string, el?: HTMLElement | null ) => string | null
): string;

function resolveCssVariable( value: string, element?: HTMLElement | null ): string | null;
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`normalizeColorToHex`}),` returns a `,(0,c.jsx)(t.code,{children:`var(...)`}),` input unchanged when `,(0,c.jsx)(t.code,{children:`resolveCss`}),` is omitted — it converts formats, it does not read the cascade.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Which element to resolve against, and why it matters, is covered in the `,(0,c.jsx)(t.a,{href:`?path=/docs/js-packages-charts-library-global-context--docs`,children:`Global Charts Context guide`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};