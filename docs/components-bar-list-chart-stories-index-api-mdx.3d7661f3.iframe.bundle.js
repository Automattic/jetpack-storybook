(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4633],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((i,n,r)=>{"use strict";r.d(n,{R:()=>l,x:()=>a});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},c=o.createContext(e);function l(d){const s=o.useContext(c);return o.useMemo(function(){return typeof d=="function"?d(s):{...s,...d}},[s,d])}function a(d){let s;return d.disableParentContext?s=typeof d.components=="function"?d.components(e):d.components||e:s=l(d.components),o.createElement(c.Provider,{value:s},d.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(i=>{function n(r){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",i.exports=n}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(i=>{function n(r){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",i.exports=n}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(i=>{function n(r){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",i.exports=n}),"../charts/src/components/bar-list-chart/stories/index.api.mdx":((i,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>d});var o=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs");function a(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"JS Packages/Charts/Types/Bar List Chart/API Reference"}),`
`,(0,e.jsx)(t.h1,{id:"bar-list-chart-api-reference",children:"Bar List Chart API Reference"}),`
`,(0,e.jsx)(t.h2,{id:"barlistchart",children:"BarListChart"}),`
`,(0,e.jsx)(t.p,{children:"A horizontal bar chart component optimized for list-style data presentation."}),`
`,(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"Prop"}),(0,e.jsx)(t.th,{children:"Type"}),(0,e.jsx)(t.th,{children:"Default"}),(0,e.jsx)(t.th,{children:"Description"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"data"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"SeriesData[]"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"Required."})," Array of series data objects"]})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"width"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"number"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Chart width in pixels"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"height"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"number"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"400"})}),(0,e.jsx)(t.td,{children:"Chart height in pixels"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"margin"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"ChartMargin"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"{ left: 0, right: 20, bottom: 0, top: 0 }"})}),(0,e.jsx)(t.td,{children:"Chart margins"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"withTooltips"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"boolean"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"false"})}),(0,e.jsx)(t.td,{children:"Enable interactive tooltips"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"renderTooltip"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"Function"})}),(0,e.jsx)(t.td,{children:"-"}),(0,e.jsx)(t.td,{children:"Custom tooltip render function"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"options"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"BarListChartOptions"})}),(0,e.jsx)(t.td,{children:(0,e.jsx)(t.code,{children:"{}"})}),(0,e.jsx)(t.td,{children:"Chart configuration options"})]})]})]}),`
`,(0,e.jsx)(t.h2,{id:"seriesdata-type",children:"SeriesData Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type SeriesData = {
	group: string;
	label: string;
	data: Array<{
		label: string;
		value: number;
	}>;
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"barlistchartoptions-type",children:"BarListChartOptions Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type BarListChartOptions = {
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
`,(0,e.jsx)(t.h2,{id:"renderlabelprops-type",children:"RenderLabelProps Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type RenderLabelProps = {
	textProps: TextProps;
	x: number;
	y: number;
	label: string;
	formatter: (value: string) => string;
};
`})}),`
`,(0,e.jsx)(t.h2,{id:"rendervalueprops-type",children:"RenderValueProps Type"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:`type RenderValueProps = {
	textProps: TextProps;
	x: number;
	y: number;
	value: number;
	data: SeriesData[];
	index: number;
	formatter: (value: number) => string;
};
`})})]})}function d(s={}){const{wrapper:t}={...(0,c.R)(),...s.components};return t?(0,e.jsx)(t,{...s,children:(0,e.jsx)(a,{...s})}):a(s)}})}]);
