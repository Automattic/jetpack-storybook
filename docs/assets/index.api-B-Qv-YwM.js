import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{bt as n}from"./esm-C7X5ggGm.js";import{i as r,n as i}from"./blocks-BcDryjfR.js";import{t as a}from"./mdx-react-shim-h9m_hMS9.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Charts/Bar List Chart/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`bar-list-chart-api-reference`,children:`Bar List Chart API Reference`}),`
`,(0,c.jsx)(t.h2,{id:`barlistchart`,children:`BarListChart`}),`
`,(0,c.jsx)(t.p,{children:`A horizontal bar chart component optimized for list-style data presentation.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`data`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`SeriesData[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of series data objects`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`width`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Chart width in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`height`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`400`})}),(0,c.jsx)(t.td,{children:`Chart height in pixels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`margin`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ChartMargin`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{ left: 0, right: 20, bottom: 0, top: 0 }`})}),(0,c.jsx)(t.td,{children:`Chart margins`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`withTooltips`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Enable interactive tooltips`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`animation`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsxs)(t.td,{children:[`Enable entry animation on initial render. Bars stretch from left to right. Automatically respects user's `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderTooltip`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Function`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom tooltip render function`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`options`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`BarListChartOptions`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`{}`})}),(0,c.jsx)(t.td,{children:`Chart configuration options`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`seriesdata-type`,children:`SeriesData Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type SeriesData = {
	group: string;
	label: string;
	data: Array<{
		label: string;
		value: number;
	}>;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`barlistchartoptions-type`,children:`BarListChartOptions Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type BarListChartOptions = {
	yScale?: Omit<ScaleOptions, 'type'>;
	xScale?: Omit<ScaleOptions, 'type'>;
	labelFormatter?: (value: string) => string;
	valueFormatter?: (value: number) => string;
	yOffset?: number;
	labelPosition?: number;
	valuePosition?: number;
	labelComponent?: ComponentType<RenderLabelProps>;
	valueComponent?: ComponentType<RenderValueProps>;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`renderlabelprops-type`,children:`RenderLabelProps Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type RenderLabelProps = {
	textProps: TextProps;
	x: number;
	y: number;
	label: string;
	formatter: (value: string) => string;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`rendervalueprops-type`,children:`RenderValueProps Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type RenderValueProps = {
	textProps: TextProps;
	x: number;
	y: number;
	value: number;
	data: SeriesData[];
	index: number;
	formatter: (value: number) => string;
};
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};