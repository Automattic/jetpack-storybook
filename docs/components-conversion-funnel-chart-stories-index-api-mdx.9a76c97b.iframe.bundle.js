(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7012],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((c,t,r)=>{"use strict";r.d(t,{R:()=>l,x:()=>a});var s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},i=s.createContext(e);function l(o){const d=s.useContext(i);return s.useMemo(function(){return typeof o=="function"?o(d):{...d,...o}},[d,o])}function a(o){let d;return o.disableParentContext?d=typeof o.components=="function"?o.components(e):o.components||e:d=l(o.components),s.createElement(i.Provider,{value:d},o.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(c=>{function t(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",c.exports=t}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(c=>{function t(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",c.exports=t}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(c=>{function t(r){var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",c.exports=t}),"../charts/src/components/conversion-funnel-chart/stories/index.api.mdx":((c,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=r("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=r("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.26_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs");function a(d){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...d.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{title:"JS Packages/Charts/Types/Conversion Funnel Chart/API Reference"}),`
`,(0,e.jsx)(n.h1,{id:"conversion-funnel-chart-api-reference",children:"Conversion Funnel Chart API Reference"}),`
`,(0,e.jsx)(n.h2,{id:"conversionfunnelchart",children:"ConversionFunnelChart"}),`
`,(0,e.jsx)(n.p,{children:"Main component for displaying conversion funnel visualizations."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"mainRate"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"number"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Main conversion rate to highlight (0-100)"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"steps"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"FunnelStep[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Array of funnel steps"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"changeIndicator"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:'Change indicator (e.g., "+2%", "-1.5%")'})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"loading"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsx)(n.td,{children:"Whether the chart is in loading state"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Optional unique identifier for the chart"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"style"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"React.CSSProperties"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom styling for the chart container"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderStepLabel"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: StepLabelRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for step labels"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderStepRate"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: StepRateRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for step rates"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderMainMetric"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: MainMetricRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for main metric section"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderTooltip"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(props: TooltipRenderProps) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom render function for tooltip content"})]})]})]}),`
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
`})})]})}function o(d={}){const{wrapper:n}={...(0,i.R)(),...d.components};return n?(0,e.jsx)(n,{...d,children:(0,e.jsx)(a,{...d})}):a(d)}})}]);
