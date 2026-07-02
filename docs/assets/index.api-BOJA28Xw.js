import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{gt as n}from"./esm-Bzirca8x.js";import{a as r,n as i}from"./blocks-B3kootgi.js";import{t as a}from"./mdx-react-shim-KubDj3SE.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Global Context/API Reference`}),`
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

	// Series visibility management for interactive legends
	toggleSeriesVisibility: (chartId: string, seriesLabel: string) => void;
	isSeriesVisible: (chartId: string, seriesLabel: string) => boolean;
	getHiddenSeries: (chartId: string) => Set<string>;

	// Color palette resolution state
	isColorPaletteResolved: boolean;
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isColorPaletteResolved`}),` is `,(0,c.jsx)(t.code,{children:`false`}),` until the provider's color cache has been resolved from the DOM and painted. Chart components can use this to defer CSS transitions or animations that would otherwise interpolate from a fallback color to the resolved theme color on initial render.`]}),`
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
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`barStyles`}),` carries bar-specific styling resolved from the theme by semantic series type (e.g. `,(0,c.jsx)(t.code,{children:`barChart.barStyles.comparison`}),`) — `,(0,c.jsx)(t.code,{children:`{ widthFactor?, opacity? }`}),`. It is `,(0,c.jsx)(t.code,{children:`{}`}),` for series with no matching bar style and for non-`,(0,c.jsx)(t.code,{children:`SeriesData`}),` inputs.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};