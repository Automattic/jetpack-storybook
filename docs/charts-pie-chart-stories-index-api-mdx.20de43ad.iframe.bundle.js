"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4516],{"../charts/src/charts/pie-chart/stories/index.api.mdx"(h,r,d){d.r(r),d.d(r,{default:()=>l});var o=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=d("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),c=d("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js");function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.W8,{title:"JS Packages/Charts Library/Charts/Pie Chart/API Reference"}),`
`,(0,e.jsx)(n.h1,{id:"pie-chart-api-reference",children:"Pie Chart API Reference"}),`
`,(0,e.jsx)(n.h2,{id:"piechart",children:"PieChart"}),`
`,(0,e.jsx)(n.p,{children:"Main component for rendering pie and donut charts."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"data"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"DataPointPercentage[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of data objects with label, value, and percentage"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"width"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Width of the chart container in pixels. When omitted, fills parent width"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"height"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Height of the chart container in pixels. When omitted, fills parent height"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"size"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Maximum diameter of the pie in pixels. The pie shrinks if the container is smaller. When omitted, fills available space"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"gap"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"GapSize"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'md'"})}),(0,e.jsx)(n.td,{children:"Gap between chart elements (SVG, legend, children). Uses WordPress design system tokens"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"thickness"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1"})}),(0,e.jsx)(n.td,{children:"Thickness of the pie chart segments (0-1). Values less than 1 create donut charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"padding"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"20"})}),(0,e.jsx)(n.td,{children:"Padding around the chart in pixels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"gapScale"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0"})}),(0,e.jsx)(n.td,{children:"Scale of gaps between segments (0-1)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"cornerScale"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"0"})}),(0,e.jsx)(n.td,{children:"Scale of corner rounding for segments (0-1)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"withTooltips"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Enable interactive tooltips on hover"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(params: PieChartRenderTooltipParams) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"animation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsxs)(n.td,{children:["Enable entry animation on initial render. Creates a radial wipe reveal effect. Automatically respects user's ",(0,e.jsx)(n.code,{children:"prefers-reduced-motion"})," system setting"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"showLegend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Display chart legend"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"legend"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ChartLegendConfig"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"undefined"})}),(0,e.jsxs)(n.td,{children:["Legend configuration object. See ",(0,e.jsx)(n.a,{href:"#chartlegendconfig-type",children:"ChartLegendConfig"}),". When ",(0,e.jsx)(n.code,{children:"interactive"})," is enabled, requires ",(0,e.jsx)(n.code,{children:"chartId"})," and ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"}),". When segments are hidden, percentages recalculate so visible segments total 100%."]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"children"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Optional content to render inside chart center (useful for donut charts)"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class names"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom chart identifier for accessibility"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"maxWidth"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Maximum width for responsive charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"aspectRatio"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"1"})}),(0,e.jsx)(n.td,{children:"Aspect ratio for responsive charts"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"resizeDebounceTime"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"100"})}),(0,e.jsx)(n.td,{children:"Debounce time for resize events (ms)"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"theme-properties",children:"Theme Properties"}),`
`,(0,e.jsx)(n.p,{children:"The following properties can be customized via the theme system:"}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelTextColor"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'#FFFFFF'"})}),(0,e.jsx)(n.td,{children:"Color of text displayed on pie chart segments"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelBackgroundColor"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'transparent'"})}),(0,e.jsx)(n.td,{children:"Background color for labels. Set to any color value to enable label backgrounds"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"compound-components",children:"Compound Components"}),`
`,(0,e.jsx)(n.h3,{id:"piechartsvg",children:"PieChart.SVG"}),`
`,(0,e.jsx)(n.p,{children:"Container for SVG elements to be rendered inside the chart area."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<PieChart.SVG>
  <text x={0} y={0}>Center Text</text>
</PieChart.SVG>
`})}),`
`,(0,e.jsx)(n.h3,{id:"piecharthtml",children:"PieChart.HTML"}),`
`,(0,e.jsx)(n.p,{children:"Container for HTML elements to be rendered outside the SVG area."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<PieChart.HTML>
  <h3>Chart Title</h3>
  <PieChart.Legend />
</PieChart.HTML>
`})}),`
`,(0,e.jsx)(n.h3,{id:"piechartlegend",children:"PieChart.Legend"}),`
`,(0,e.jsx)(n.p,{children:"The Legend component for displaying chart data labels. Can be used either as a prop or within composition:"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`// As a prop
<PieChart showLegend={true} legend={{ position: 'bottom' }} />

// With composition
<PieChart>
  <PieChart.Legend position="bottom" orientation="horizontal" />
</PieChart>
`})}),`
`,(0,e.jsx)(n.h2,{id:"piechartrendertooltipparams-type",children:"PieChartRenderTooltipParams Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type PieChartRenderTooltipParams = {
	/** The data point being hovered, including label, value, and percentage. */
	tooltipData: DataPointPercentage;
};
`})}),`
`,(0,e.jsx)(n.h2,{id:"datapointpercentage-type",children:"DataPointPercentage Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointPercentage = {
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
`,(0,e.jsx)(n.h2,{id:"chartlegendconfig-type",children:"ChartLegendConfig Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type ChartLegendConfig = {
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
`})})]})}function l(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(i,{...t})}):i(t)}}}]);
