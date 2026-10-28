import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{i as n}from"./react-Cv2K7F_-.js";import{t as r}from"./mdx-react-shim-C2Qp68IM.js";import{a as i,n as a,r as o,t as s}from"./blocks-DVJGTlLh.js";import{Animation as c,CustomRenderProps as l,Default as u,EmptyData as d,FixedDimensions as f,HighConversion as p,Loading as m,NegativeChange as h,ShortHeight as g,WithoutChangeIndicator as _,WithoutTooltips as v,n as y,t as b}from"./index.stories-6aKJFPga.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{title:`JS Packages/Charts Library/Charts/Conversion Funnel Chart`,of:b}),`
`,(0,C.jsx)(t.h1,{id:`conversion-funnel-chart`,children:`Conversion Funnel Chart`}),`
`,(0,C.jsx)(t.p,{children:`A focused conversion funnel chart component for visualizing step-by-step conversion rates with a prominent main metric display and change indicators.`}),`
`,(0,C.jsx)(s,{of:u}),`
`,(0,C.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,C.jsx)(t.p,{children:`The ConversionFunnelChart component provides a specialized visualization for tracking user conversion through sequential steps, featuring:`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:`Clear funnel visualization with proportional bar heights and light backgrounds`}),`
`,(0,C.jsx)(t.li,{children:`Main conversion rate highlighting with positive/negative change indicators`}),`
`,(0,C.jsx)(t.li,{children:`Dynamic color theming with automatic bar background adaptation`}),`
`,(0,C.jsx)(t.li,{children:`Complete customization control via render props`}),`
`,(0,C.jsx)(t.li,{children:`Flexible layouts that adapt to container size`}),`
`,(0,C.jsx)(t.li,{children:`TypeScript support with full type definitions`}),`
`,(0,C.jsx)(t.li,{children:`Accessible design with semantic markup`}),`
`,(0,C.jsx)(t.li,{children:`Integration with global charts theme system`}),`
`]}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`import { ConversionFunnelChart } from '@automattic/charts';
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
`,(0,C.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,C.jsxs)(t.p,{children:[`For detailed information about component props, types, and method signatures, see the `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-conversion-funnel-chart-api-reference--docs`,children:`Conversion Funnel Chart API Reference`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,C.jsx)(t.h3,{id:`simple-conversion-funnel`,children:`Simple Conversion Funnel`}),`
`,(0,C.jsx)(t.p,{children:`The most basic implementation requires only the main conversion rate and steps data:`}),`
`,(0,C.jsx)(s,{of:u}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
/>`}),`
`,(0,C.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`mainRate`})}),`: The primary conversion rate to highlight (0-100)`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`steps`})}),`: Array of funnel steps with id, label, rate, and optional count`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`changeIndicator`})}),`: Change indicator text (e.g., "+2%", "-1.5%")`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`loading`})}),`: Whether the chart is in loading state`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`height`})}),`: Height of the chart container. Accepts a number (pixels) or CSS string. Falls back to `,(0,C.jsx)(t.code,{children:`style.height`}),` if set, otherwise defaults to `,(0,C.jsx)(t.code,{children:`"100%"`})]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`className`})}),`: Additional CSS class name for styling`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`chartId`})}),`: Optional unique identifier for the chart`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`style`})}),`: Custom styling for the chart container`]}),`
`]}),`
`,(0,C.jsxs)(t.p,{children:[`For detailed prop information and render prop types, see the `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-conversion-funnel-chart-api-reference--docs`,children:`Conversion Funnel Chart API Reference`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`chart-variations`,children:`Chart Variations`}),`
`,(0,C.jsx)(t.h3,{id:`positive-change-indicator-default`,children:`Positive Change Indicator (Default)`}),`
`,(0,C.jsx)(t.p,{children:`Shows growth with positive styling:`}),`
`,(0,C.jsx)(s,{of:u}),`
`,(0,C.jsx)(t.h3,{id:`negative-change-indicator`,children:`Negative Change Indicator`}),`
`,(0,C.jsx)(t.p,{children:`Displays decline with appropriate visual treatment:`}),`
`,(0,C.jsx)(s,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`high-conversion-rates`,children:`High Conversion Rates`}),`
`,(0,C.jsx)(t.p,{children:`Optimized for displaying higher conversion percentages:`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`without-change-indicator`,children:`Without Change Indicator`}),`
`,(0,C.jsx)(t.p,{children:`Clean presentation focused solely on current metrics:`}),`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	steps={ecommerceFunnelData}
	// No changeIndicator prop
/>`}),`
`,(0,C.jsx)(t.h2,{id:`loading-and-empty-states`,children:`Loading and Empty States`}),`
`,(0,C.jsx)(t.h3,{id:`loading-state`,children:`Loading State`}),`
`,(0,C.jsx)(t.p,{children:`Shows skeleton or loading indicators while data is being fetched:`}),`
`,(0,C.jsx)(s,{of:m}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
	loading={true}
/>`}),`
`,(0,C.jsx)(t.h3,{id:`empty-data`,children:`Empty Data`}),`
`,(0,C.jsx)(t.p,{children:`Gracefully handles empty or missing data:`}),`
`,(0,C.jsx)(s,{of:d}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={0}
	steps={[]}
/>`}),`
`,(0,C.jsx)(t.h2,{id:`customization-with-render-props`,children:`Customization with Render Props`}),`
`,(0,C.jsx)(t.h3,{id:`complete-customization`,children:`Complete Customization`}),`
`,(0,C.jsx)(t.p,{children:`Full control over component rendering with custom render functions:`}),`
`,(0,C.jsx)(s,{of:l}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
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
	renderTooltip={({ step, content }) => (
		<div style={{ minWidth: '200px' }}>
			<div>{step.label}</div>
			{content.value && (
				<div style={{ fontSize: '18px', fontWeight: 'bold' }}>{content.value}</div>
			)}
			{content.rows?.map(row => (
				<div key={row.label}>
					{row.label}: <strong>{row.value}</strong>
				</div>
			))}
		</div>
	)}
	tooltipStyle={{
		background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		borderRadius: '12px',
		padding: '16px 20px',
		color: 'white'
	}}
/>`}),`
`,(0,C.jsx)(t.h3,{id:`available-render-props`,children:`Available Render Props`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`renderMainMetric`})}),`: Customize the main conversion rate display`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`renderStepLabel`})}),`: Customize individual step labels. Render plain text only: screen readers cannot reach it, and a link or button in it is never announced.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`renderStepRate`})}),`: Customize individual step rate displays. Render plain text only, as for `,(0,C.jsx)(t.code,{children:`renderStepLabel`}),`.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`getTooltipContent`})}),`: Set what each step's tooltip shows: a `,(0,C.jsx)(t.code,{children:`value`}),` beside the step's name and labeled `,(0,C.jsx)(t.code,{children:`rows`}),` below it. Screen readers read the tooltip as the selected step's description, without the name.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`renderTooltip`})}),`: Customize the tooltip's layout. Render the `,(0,C.jsx)(t.code,{children:`content`}),` it receives. Screen readers read the whole rendered tooltip as the selected step's description, including the step's name if it shows one. It sits inside the dark tooltip box, so let it inherit the box colors.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`tooltipStyle`})}),`: Restyle the tooltip box itself, such as its background, radius or padding. Set `,(0,C.jsx)(t.code,{children:`color`}),` with any background change.`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`disabling-components`,children:`Disabling Components`}),`
`,(0,C.jsxs)(t.p,{children:[`Return `,(0,C.jsx)(t.code,{children:`null`}),` from render props to disable specific parts:`]}),`
`,(0,C.jsx)(s,{of:v}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	changeIndicator="+2%"
	steps={ecommerceFunnelData}
	renderMainMetric={() => null}  // Hide main metric
	renderTooltip={() => null}     // Disable tooltips
/>`}),`
`,(0,C.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,C.jsx)(t.h3,{id:`custom-container-styling`,children:`Custom Container Styling`}),`
`,(0,C.jsxs)(t.p,{children:[`Use the `,(0,C.jsx)(t.code,{children:`style`}),` prop or `,(0,C.jsx)(t.code,{children:`className`}),` prop to customize the chart container:`]}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={10.3}
	steps={funnelData}
	className="my-custom-funnel"
	style={{
		backgroundColor: '#f8f9fa',
		padding: '20px',
		borderRadius: '8px'
	}}
/>`}),`
`,(0,C.jsx)(t.h2,{id:`theming-integration`,children:`Theming Integration`}),`
`,(0,C.jsx)(t.p,{children:`Conversion Funnel Charts integrate seamlessly with the chart theming system. The default theme has neutral styling, and is automatically applied to all charts unless a custom theme is provided.`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`Step colors come from the palette custom properties, not the theme object.`}),` Set as many of the five slots as you need; an unset slot is skipped, and charts generates accessible colors beyond whatever you set:`]}),`
`,(0,C.jsx)(o,{language:`css`,code:`.a8c-charts-scope {
	--a8c-charts-color-series-1: #FF6B6B;
	--a8c-charts-color-series-2: #4ECDC4;
	--a8c-charts-color-series-3: #45B7D1;
}`}),`
`,(0,C.jsxs)(t.p,{children:[`Every other color works the same way — declare its catalog role. The closest declaration inside the provider tree wins, so scope the rule to one dashboard, or to `,(0,C.jsx)(t.code,{children:`.a8c-charts-scope`}),` to move every chart on the page:`]}),`
`,(0,C.jsx)(o,{language:`css`,code:`.my-dashboard {
	/* The plate behind each step: */
	--a8c-charts-color-surface-secondary: #f0f0f0;
	/* The step-to-step change figures: */
	--a8c-charts-color-trend-up: #008030;
	--a8c-charts-color-trend-down: #cc1818;
}`}),`
`,(0,C.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,C.jsxs)(t.p,{children:[`By default, the chart fills its parent container's height (`,(0,C.jsx)(t.code,{children:`height="100%"`}),`), consistent with other chart components in the library. The parent container must have an explicit height for this to take effect. To use a fixed height, pass the `,(0,C.jsx)(t.code,{children:`height`}),` prop:`]}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`{/* Fixed height */}
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
`,(0,C.jsx)(t.p,{children:`Below 180px of height the chart tightens the spacing between the rate, the step labels and the bars, so the bars keep their room in a short container:`}),`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsxs)(t.p,{children:[`For more details on responsive behavior, see the `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#responsive-design`,children:`Responsive Design section`}),` in the introduction.`]}),`
`,(0,C.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,C.jsx)(t.p,{children:`The Conversion Funnel Chart component supports an optional entry animation that creates a smooth reveal effect when the chart first renders:`}),`
`,(0,C.jsx)(s,{of:c}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`<ConversionFunnelChart
	mainRate={ 10.3 }
	steps={ funnelData }
	animation={ true }
/>`}),`
`,(0,C.jsx)(t.h3,{id:`animation-behavior`,children:`Animation Behavior`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Opt-in`}),`: Animation is disabled by default and must be explicitly enabled with the `,(0,C.jsx)(t.code,{children:`animation`}),` prop`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Accessibility`}),`: Automatically respects the user's `,(0,C.jsx)(t.code,{children:`prefers-reduced-motion`}),` system setting - animation will not play for users who prefer reduced motion`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Effect`}),`: Creates a rising effect where funnel bars grow from the bottom to their full height, revealing the conversion data progressively`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Duration`}),`: 1000ms (1 second) with ease-out timing`]}),`
`]}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`Note`}),`: The animation plays once when the chart initially renders and does not repeat.`]}),`
`,(0,C.jsx)(t.h2,{id:`use-cases-and-examples`,children:`Use Cases and Examples`}),`
`,(0,C.jsx)(t.h3,{id:`e-commerce-conversion-funnel`,children:`E-commerce Conversion Funnel`}),`
`,(0,C.jsx)(t.p,{children:`Track customer journey from initial visit to purchase:`}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`const ecommerceFunnel = [
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
`,(0,C.jsx)(t.h3,{id:`saas-signup-funnel`,children:`SaaS Signup Funnel`}),`
`,(0,C.jsx)(t.p,{children:`Monitor user activation through key onboarding steps:`}),`
`,(0,C.jsx)(o,{language:`tsx`,code:`const saasFunnel = [
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
`,(0,C.jsx)(t.h3,{id:`marketing-funnel-analysis`,children:`Marketing Funnel Analysis`}),`
`,(0,C.jsx)(t.p,{children:`Track user journey from awareness to conversion across marketing channels.`}),`
`,(0,C.jsx)(t.h3,{id:`content-engagement`,children:`Content Engagement`}),`
`,(0,C.jsx)(t.p,{children:`Measure content consumption funnel from page views to conversions.`}),`
`,(0,C.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,C.jsxs)(t.p,{children:[`The steps form a single-select `,(0,C.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/listbox/`,rel:`nofollow`,children:`listbox`}),` where selection follows focus, with one Tab stop. A focused step is selected and shows its tooltip, just as a clicked one does.`]}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Tab`}),`: Enters the funnel on the last focused step, else the selected step, else the first step. The next Tab leaves the funnel and clears the selection.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Left/Right arrows`}),`: Move focus and the selection to the previous or next step. They are swapped in a right-to-left layout and do not wrap.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Home/End`}),`: Move focus and the selection to the first or last step.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Escape`}),`: Clear the selection and hide the tooltip. Focus stays on the step.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Enter/Space`}),`: Select the focused step again after Escape.`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Set `,(0,C.jsx)(t.code,{children:`ariaLabel`}),` to name the chart. See `,(0,C.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-introduction--docs#accessible-names`,children:`Accessible names`}),`.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`ARIA Roles`}),`: The steps sit in a horizontal `,(0,C.jsx)(t.code,{children:`role="listbox"`}),` labeled "Funnel steps", and each step uses `,(0,C.jsx)(t.code,{children:`role="option"`})]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`ARIA Labels`}),`: Each step has `,(0,C.jsx)(t.code,{children:`aria-label`}),` with the step name and rate, such as "Cart, 71.1%"`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Selection State`}),`: The selected step has `,(0,C.jsx)(t.code,{children:`aria-selected="true"`}),`, the others `,(0,C.jsx)(t.code,{children:`aria-selected="false"`})]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Descriptions`}),`: The selected step's `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` points at its tooltip, leaving out the name line, so the default reads "7,110 items Conversion rate 71.1%". The tooltip itself is hidden from screen readers, so it is read only as the description.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Visible Text`}),`: The step labels and rates above the bars are hidden from screen readers, so the listbox holds only its options. Each option's name carries the step's label and rate, and the selected option's description adds the tooltip's numbers`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Loading States`}),`: Loading and empty states provide appropriate text content`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`interactive-behavior`,children:`Interactive Behavior`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Click/Touch`}),`: Clicking or tapping a step selects it and shows its tooltip at the pointer`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Focus`}),`: Focusing a step from the keyboard selects it and shows its tooltip, anchored at the top center of the step`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Selection State`}),`: Only one step can be selected at a time, with visual feedback`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Deselection`}),`: Moving focus out of the funnel, clicking outside it or pressing Escape clears the selection`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsxs)(t.strong,{children:[`Roving `,(0,C.jsx)(t.code,{children:`tabIndex`})]}),`: One step has `,(0,C.jsx)(t.code,{children:`tabIndex={0}`}),` and the others `,(0,C.jsx)(t.code,{children:`tabIndex={-1}`}),`. Dimmed (non-selected) steps stay reachable with the arrow keys.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Visual Focus Indicators`}),`: The focused step shows a focus ring when focus comes from the keyboard`]}),`
`]})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),r(),i(),y()}))();export{S as default};