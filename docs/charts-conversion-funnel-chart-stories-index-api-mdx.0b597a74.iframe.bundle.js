(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6291],{"../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive":(o=>{function d(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}d.keys=()=>[],d.resolve=d,d.id="../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/_browser-chunks sync recursive",o.exports=d}),"../charts/src/charts/conversion-funnel-chart/stories/index.api.mdx":((o,d,r)=>{"use strict";r.r(d),r.d(d,{default:()=>h});var s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=r("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_esbuild@0.25.9_storybook@10.1.10_@tes_8b6d8444bcdd16ef895876f31adb8bdf/node_modules/@storybook/addon-docs/dist/blocks.js");function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"JS Packages/Charts Library/Charts/Conversion Funnel Chart/API Reference"}),`
`,(0,e.jsx)(n.h1,{id:"conversion-funnel-chart-api-reference",children:"Conversion Funnel Chart API Reference"}),`
`,(0,e.jsx)(n.h2,{id:"conversionfunnelchart",children:"ConversionFunnelChart"}),`
`,(0,e.jsx)(n.p,{children:"Main component for displaying conversion funnel visualizations."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"mainRate"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Main conversion rate to highlight (0-100)"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"steps"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"FunnelStep[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of funnel steps"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"changeIndicator"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:'Change indicator (e.g., "+2%", "-1.5%")'})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"loading"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Whether the chart is in loading state"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"animation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsxs)(n.td,{children:["Enable entry animation on initial render. Funnel bars grow from bottom to full height. Automatically respects user's ",(0,e.jsx)(n.code,{children:"prefers-reduced-motion"})," system setting"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Optional unique identifier for the chart"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"style"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"React.CSSProperties"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom styling for the chart container"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderStepLabel"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: StepLabelRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for step labels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderStepRate"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: StepRateRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for step rates"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderMainMetric"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: MainMetricRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for main metric section"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: TooltipRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for tooltip content"})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"funnelstep-type",children:"FunnelStep Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`interface FunnelStep {
	id: string;           // Unique identifier
	label: string;        // Display name for the step
	rate: number;         // Conversion rate as percentage (0-100)
	count?: number;       // Optional absolute count
}
`})}),`
`,(0,e.jsx)(n.h2,{id:"render-prop-types",children:"Render Prop Types"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`interface StepLabelRenderProps {
	step: FunnelStep;
	index: number;
	className?: string;
}

interface StepRateRenderProps {
	step: FunnelStep;
	index: number;
	className?: string;
}

interface MainMetricRenderProps {
	mainRate: number;
	changeIndicator?: string;
	className?: string;
	changeColor?: string;
}

interface TooltipRenderProps {
	step: FunnelStep;
	index: number;
	top: number;
	left: number;
	className?: string;
}
`})})]})}function h(t={}){const{wrapper:n}={...(0,c.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(i,{...t})}):i(t)}})}]);
