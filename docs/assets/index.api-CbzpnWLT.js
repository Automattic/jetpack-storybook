import{n as e}from"./chunk-zsgVPwQN.js";import{fv as t}from"./iframe-33AOSa0J.js";import{r as n}from"./react-D5QKnfSX.js";import{t as r}from"./mdx-react-shim-BmVAWLvt.js";import{i,n as a}from"./blocks-Cb6NUQkV.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`conversion-funnel-chart-api-reference`,children:`Conversion Funnel Chart API Reference`}),`
`,(0,c.jsx)(t.h2,{id:`conversionfunnelchart`,children:`ConversionFunnelChart`}),`
`,(0,c.jsx)(t.p,{children:`Main component for displaying conversion funnel visualizations.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`mainRate`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Main conversion rate to highlight (0-100)`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`steps`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`FunnelStep[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Required.`}),` Array of funnel steps`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`changeIndicator`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Change indicator (e.g., "+2%", "-1.5%")`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`loading`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsx)(t.td,{children:`Whether the chart is in loading state`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`animation`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsxs)(t.td,{children:[`Enable entry animation on initial render. Funnel bars grow from bottom to full height. Automatically respects user's `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`height`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string | number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`"100%"`})}),(0,c.jsxs)(t.td,{children:[`Height of the chart container. Accepts a number (pixels) or CSS string (e.g., `,(0,c.jsx)(t.code,{children:`"400px"`}),`, `,(0,c.jsx)(t.code,{children:`"100%"`}),`). Falls back to `,(0,c.jsx)(t.code,{children:`style.height`}),` if set, otherwise defaults to `,(0,c.jsx)(t.code,{children:`"100%"`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`className`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class name`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`chartId`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Optional unique identifier for the chart`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`style`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`React.CSSProperties`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom styling for the chart container`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderStepLabel`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(props: StepLabelRenderProps) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom render function for step labels`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderStepRate`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(props: StepRateRenderProps) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom render function for step rates`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderMainMetric`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(props: MainMetricRenderProps) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom render function for main metric section`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`renderTooltip`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(props: TooltipRenderProps) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Custom render function for tooltip content`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`funnelstep-type`,children:`FunnelStep Type`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`interface FunnelStep {
	id: string;           // Unique identifier
	label: string;        // Display name for the step
	rate: number;         // Conversion rate as percentage (0-100)
	count?: number;       // Optional absolute count
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`render-prop-types`,children:`Render Prop Types`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`interface StepLabelRenderProps {
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),r(),i()}))();export{s as default};