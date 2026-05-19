import{n as e}from"./chunk-zsgVPwQN.js";import{sS as t}from"./iframe-DoiyZpmE.js";import{r as n}from"./react-BP0fqC2N.js";import{t as r}from"./mdx-react-shim-CJP_k6mu.js";import{i,n as a,r as o,t as s}from"./blocks-1xaeHRb4.js";import{Animation as c,CustomRenderProps as l,Default as u,EmptyData as d,FixedDimensions as f,HighConversion as p,Loading as m,NegativeChange as h,WithoutChangeIndicator as g,WithoutTooltips as _,n as v,t as y}from"./index.stories-Dy1RXDcc.js";function b(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,of:y}),`
`,(0,S.jsx)(t.h1,{id:`conversion-funnel-chart`,children:`Conversion Funnel Chart`}),`
`,(0,S.jsx)(t.p,{children:`A focused conversion funnel chart component for visualizing step-by-step conversion rates with a prominent main metric display and change indicators.`}),`
`,(0,S.jsx)(s,{of:u}),`
`,(0,S.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,S.jsx)(t.p,{children:`The ConversionFunnelChart component provides a specialized visualization for tracking user conversion through sequential steps, featuring:`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsx)(t.li,{children:`Clear funnel visualization with proportional bar heights and light backgrounds`}),`
`,(0,S.jsx)(t.li,{children:`Main conversion rate highlighting with positive/negative change indicators`}),`
`,(0,S.jsx)(t.li,{children:`Dynamic color theming with automatic bar background adaptation`}),`
`,(0,S.jsx)(t.li,{children:`Complete customization control via render props`}),`
`,(0,S.jsx)(t.li,{children:`Flexible layouts that adapt to container size`}),`
`,(0,S.jsx)(t.li,{children:`TypeScript support with full type definitions`}),`
`,(0,S.jsx)(t.li,{children:`Accessible design with semantic markup`}),`
`,(0,S.jsx)(t.li,{children:`Integration with global charts theme system`}),`
`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { ConversionFunnelChart } from '@automattic/charts';
import '@automattic/charts/style.css';

const funnelData = [
	{ id: 'sessions', label: 'Sessions', rate: 100, count: 10000 },
	{ id: 'cart', label: 'Cart', rate: 71.1, count: 7110 },
	{ id: 'checkout', label: 'Checkout', rate: 52.5, count: 5250 },
	{ id: 'purchase', label: 'Purchase', rate: 10.3, count: 1030 },
];

<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={funnelData}
/>`}),`
`,(0,S.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-conversion-funnel-chart-api-reference--docs`,children:`Conversion Funnel Chart API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,S.jsx)(t.h3,{id:`simple-conversion-funnel`,children:`Simple Conversion Funnel`}),`
`,(0,S.jsx)(t.p,{children:`The most basic implementation requires only the main conversion rate and steps data:`}),`
`,(0,S.jsx)(s,{of:u}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`mainRate`})}),`: The primary conversion rate to highlight (0-100)`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`steps`})}),`: Array of funnel steps with id, label, rate, and optional count`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`changeIndicator`})}),`: Change indicator text (e.g., "+2%", "-1.5%")`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`loading`})}),`: Whether the chart is in loading state`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`height`})}),`: Height of the chart container. Accepts a number (pixels) or CSS string. Falls back to `,(0,S.jsx)(t.code,{children:`style.height`}),` if set, otherwise defaults to `,(0,S.jsx)(t.code,{children:`"100%"`})]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`className`})}),`: Additional CSS class name for styling`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`chartId`})}),`: Optional unique identifier for the chart`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`style`})}),`: Custom styling for the chart container`]}),`
`]}),`
`,(0,S.jsxs)(t.p,{children:[`For detailed prop information and render prop types, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-conversion-funnel-chart-api-reference--docs`,children:`Conversion Funnel Chart API Reference`}),`.`]}),`
`,(0,S.jsx)(t.h2,{id:`chart-variations`,children:`Chart Variations`}),`
`,(0,S.jsx)(t.h3,{id:`positive-change-indicator-default`,children:`Positive Change Indicator (Default)`}),`
`,(0,S.jsx)(t.p,{children:`Shows growth with positive styling:`}),`
`,(0,S.jsx)(s,{of:u}),`
`,(0,S.jsx)(t.h3,{id:`negative-change-indicator`,children:`Negative Change Indicator`}),`
`,(0,S.jsx)(t.p,{children:`Displays decline with appropriate visual treatment:`}),`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(t.h3,{id:`high-conversion-rates`,children:`High Conversion Rates`}),`
`,(0,S.jsx)(t.p,{children:`Optimized for displaying higher conversion percentages:`}),`
`,(0,S.jsx)(s,{of:p}),`
`,(0,S.jsx)(t.h3,{id:`without-change-indicator`,children:`Without Change Indicator`}),`
`,(0,S.jsx)(t.p,{children:`Clean presentation focused solely on current metrics:`}),`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	steps={ecommerceFunnelData}
	// No changeIndicator prop
/>`}),`
`,(0,S.jsx)(t.h2,{id:`loading-and-empty-states`,children:`Loading and Empty States`}),`
`,(0,S.jsx)(t.h3,{id:`loading-state`,children:`Loading State`}),`
`,(0,S.jsx)(t.p,{children:`Shows skeleton or loading indicators while data is being fetched:`}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
	loading={true}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`empty-data`,children:`Empty Data`}),`
`,(0,S.jsx)(t.p,{children:`Gracefully handles empty or missing data:`}),`
`,(0,S.jsx)(s,{of:d}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={0}
	steps={[]}
/>`}),`
`,(0,S.jsx)(t.h2,{id:`customization-with-render-props`,children:`Customization with Render Props`}),`
`,(0,S.jsx)(t.h3,{id:`complete-customization`,children:`Complete Customization`}),`
`,(0,S.jsx)(t.p,{children:`Full control over component rendering with custom render functions:`}),`
`,(0,S.jsx)(s,{of:l}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
	renderMainMetric={({ mainRate, changeIndicator, className }) => (
		<div className={className} style={{
			background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			borderRadius: '12px',
			padding: '24px',
			color: 'white',
			textAlign: 'center'
		}}>
			<h3>Overall Conversion Rate</h3>
			<span style={{ fontSize: '42px', fontWeight: 'bold' }}>
				{mainRate.toFixed(1)}%
			</span>
			{changeIndicator && (
				<span style={{
					backgroundColor: changeIndicator.startsWith('+')
						? 'rgba(16, 185, 129, 0.2)'
						: 'rgba(239, 68, 68, 0.2)',
					color: changeIndicator.startsWith('+') ? '#10b981' : '#ef4444',
					padding: '6px 12px',
					borderRadius: '8px'
				}}>
					{changeIndicator}
				</span>
			)}
		</div>
	)}
	renderTooltip={({ step }) => (
		<div style={{
			background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			borderRadius: '12px',
			padding: '16px 20px',
			color: 'white',
			minWidth: '200px'
		}}>
			<div>{step.label}</div>
			<div style={{ fontSize: '18px', fontWeight: 'bold' }}>
				{step.rate.toFixed(1)}%
				{step.count && <span> • {step.count.toLocaleString()} items</span>}
			</div>
		</div>
	)}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`available-render-props`,children:`Available Render Props`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`renderMainMetric`})}),`: Customize the main conversion rate display`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`renderStepLabel`})}),`: Customize individual step labels`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`renderStepRate`})}),`: Customize individual step rate displays`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:(0,S.jsx)(t.code,{children:`renderTooltip`})}),`: Customize tooltip content and styling`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`disabling-components`,children:`Disabling Components`}),`
`,(0,S.jsxs)(t.p,{children:[`Return `,(0,S.jsx)(t.code,{children:`null`}),` from render props to disable specific parts:`]}),`
`,(0,S.jsx)(s,{of:_}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
	renderMainMetric={() => null}  // Hide main metric
	renderTooltip={() => null}     // Disable tooltips
/>`}),`
`,(0,S.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,S.jsx)(t.h3,{id:`custom-container-styling`,children:`Custom Container Styling`}),`
`,(0,S.jsxs)(t.p,{children:[`Use the `,(0,S.jsx)(t.code,{children:`style`}),` prop or `,(0,S.jsx)(t.code,{children:`className`}),` prop to customize the chart container:`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	steps={funnelData}
	className="my-custom-funnel"
	style={{
		backgroundColor: '#f8f9fa',
		padding: '20px',
		borderRadius: '8px'
	}}
/>`}),`
`,(0,S.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,S.jsxs)(t.p,{children:[`Conversion Funnel Charts integrate seamlessly with the chart theming system. The default theme has neutral colors and styling, and is automatically applied to all charts unless a custom theme is provided. A custom theme can be provided by wrapping your chart in `,(0,S.jsx)(t.code,{children:`GlobalChartsProvider`}),` and passing a custom theme object with the properties you want to override to the `,(0,S.jsx)(t.code,{children:`theme`}),` prop:`]}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`import { GlobalChartsProvider, ConversionFunnelChart, type ChartTheme } from '@automattic/charts';

const customTheme: ChartTheme = {
	colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
};

<GlobalChartsProvider theme={customTheme}>
	<ConversionFunnelChart mainRate={10.3} steps={funnelData} />
</GlobalChartsProvider>`}),`
`,(0,S.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,S.jsxs)(t.p,{children:[`By default, the chart fills its parent container's height (`,(0,S.jsx)(t.code,{children:`height="100%"`}),`), consistent with other chart components in the library. The parent container must have an explicit height for this to take effect. To use a fixed height, pass the `,(0,S.jsx)(t.code,{children:`height`}),` prop:`]}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`{/* Fixed height */}
<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={funnelData}
	height="200px"
/>

{/* Fill parent container (default) */}
<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={funnelData}
/>`}),`
`,(0,S.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,S.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,S.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,S.jsx)(t.p,{children:`The Conversion Funnel Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,S.jsx)(s,{of:c}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={ 10.3 }
	steps={ funnelData }
	animation={ true }
/>`}),`
`,(0,S.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,S.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,S.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Effect`}),`: Creates a rising effect where funnel bars grow from the bottom to their full height, revealing the conversion data progressively`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,S.jsx)(t.h2,{id:`use-cases-and-examples`,children:`Use Cases and Examples`}),`
`,(0,S.jsx)(t.h3,{id:`e-commerce-conversion-funnel`,children:`E-commerce Conversion Funnel`}),`
`,(0,S.jsx)(t.p,{children:`Track customer journey from initial visit to purchase:`}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`const ecommerceFunnel = [
	{ id: 'sessions', label: 'Sessions', rate: 100 },
	{ id: 'product_views', label: 'Product Views', rate: 45.2 },
	{ id: 'cart', label: 'Add to Cart', rate: 28.8 },
	{ id: 'checkout', label: 'Checkout', rate: 18.1 },
	{ id: 'purchase', label: 'Purchase', rate: 12.3 },
];

<ConversionFunnelChart
	mainRate={12.3}
	changeIndicator="+3.2%"
	steps={ecommerceFunnel}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`saas-signup-funnel`,children:`SaaS Signup Funnel`}),`
`,(0,S.jsx)(t.p,{children:`Monitor user activation through key onboarding steps:`}),`
`,(0,S.jsx)(o,{language:`tsx`,code:`const saasFunnel = [
	{ id: 'visitors', label: 'Visitors', rate: 100 },
	{ id: 'trial', label: 'Trial Signup', rate: 12.5 },
	{ id: 'activation', label: 'Activated', rate: 8.2 },
	{ id: 'subscription', label: 'Paid Plan', rate: 3.1 },
];

<ConversionFunnelChart
	mainRate={3.1}
	changeIndicator="-0.4%"
	steps={saasFunnel}
/>`}),`
`,(0,S.jsx)(t.h3,{id:`marketing-funnel-analysis`,children:`Marketing Funnel Analysis`}),`
`,(0,S.jsx)(t.p,{children:`Track user journey from awareness to conversion across marketing channels.`}),`
`,(0,S.jsx)(t.h3,{id:`content-engagement`,children:`Content Engagement`}),`
`,(0,S.jsx)(t.p,{children:`Measure content consumption funnel from page views to conversions.`}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Tab Navigation`}),`: Funnel step bars are focusable and accessible via Tab key`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Enter/Space`}),`: Activate step interactions and show tooltips`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Escape`}),`: Clear selections and hide tooltips`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Focus Management`}),`: Blurred steps have `,(0,S.jsx)(t.code,{children:`tabIndex={-1}`}),` to prevent focus`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`ARIA Roles`}),`: Each funnel step uses `,(0,S.jsx)(t.code,{children:`role="button"`}),` for proper semantic meaning`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`ARIA Labels`}),`: Each step has `,(0,S.jsx)(t.code,{children:`aria-label`}),` with the step name`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Alternative Text`}),`: Step labels and rates are accessible to screen readers`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Loading States`}),`: Loading and empty states provide appropriate text content`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`interactive-behavior`,children:`Interactive Behavior`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Click/Touch`}),`: Steps can be clicked or tapped to show detailed tooltips`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Keyboard Activation`}),`: Enter and Space keys trigger the same interactions as clicks`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Selection State`}),`: Only one step can be selected at a time, with visual feedback`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Deselection`}),`: Clicking the same step again or pressing Escape clears the selection`]}),`
`]}),`
`,(0,S.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Logical Tab Order`}),`: Focus moves through steps in visual order`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsxs)(t.strong,{children:[`Dynamic `,(0,S.jsx)(t.code,{children:`tabIndex`})]}),`: Blurred (non-selected) steps are removed from tab order when another step is selected`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.strong,{children:`Visual Focus Indicators`}),`: CSS focus styles provide clear visual feedback`]}),`
`]})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),r(),i(),v()}))();export{x as default};