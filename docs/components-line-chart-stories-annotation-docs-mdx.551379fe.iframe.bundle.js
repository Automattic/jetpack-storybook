(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3601,7733],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(u,r,t)=>{"use strict";t.d(r,{R:()=>o,x:()=>s});var i=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},a=i.createContext(e);function o(h){const d=i.useContext(a);return i.useMemo(function(){return typeof h=="function"?h(d):{...d,...h}},[d,h])}function s(h){let d;return h.disableParentContext?d=typeof h.components=="function"?h.components(e):h.components||e:d=o(h.components),i.createElement(a.Provider,{value:d},h.children)}},"../charts/src/components/line-chart/stories/annotation.docs.mdx":(u,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var i=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=t("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),s=t("../charts/src/components/line-chart/stories/annotation.stories.tsx");function h(p){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...p.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.W8,{title:"JS Packages/Charts/Types/Line Chart/Annotations",of:s}),`
`,(0,e.jsx)(n.h1,{id:"line-chart-annotations",children:"Line Chart Annotations"}),`
`,(0,e.jsx)(n.p,{children:"Annotations allow you to highlight specific data points or events on your line charts with contextual information. They support multiple visual styles, custom content, and interactive popovers for rich user experiences."}),`
`,(0,e.jsx)(o.Hl,{of:s.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(n.p,{children:"The Line Chart component supports a compound component pattern for annotations, providing flexibility and declarative syntax:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`import { LineChart } from '@automattic/jetpack-charts';

<LineChart data={ data }>
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={ { date: new Date( '2024-01-01' ), value: 100 } }
			title="Product Launch"
			subtitle="Version 2.0 released"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,e.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,(0,e.jsx)(n.h3,{id:"basic-annotations",children:"Basic Annotations"}),`
`,(0,e.jsxs)(n.p,{children:["The simplest annotation requires only a ",(0,e.jsx)(n.code,{children:"datum"}),", ",(0,e.jsx)(n.code,{children:"title"}),", and optionally a ",(0,e.jsx)(n.code,{children:"subtitle"}),":"]}),`
`,(0,e.jsx)(o.Hl,{of:s.Default}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<LineChart data={data}>
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={sampleData[0].data[10]}
			title="Notable event"
			subtitle="This is a notable event"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,e.jsx)(n.h3,{id:"required-props",children:"Required Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"datum"})}),": A data point object with ",(0,e.jsx)(n.code,{children:"date"}),", ",(0,e.jsx)(n.code,{children:"value"}),", and optional ",(0,e.jsx)(n.code,{children:"label"})," properties"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"title"})}),": The main annotation text"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"optional-props",children:"Optional Props"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"subtitle"})}),": Additional descriptive text"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"subjectType"})}),": Visual style (",(0,e.jsx)(n.code,{children:"'circle'"}),", ",(0,e.jsx)(n.code,{children:"'line-vertical'"}),", ",(0,e.jsx)(n.code,{children:"'line-horizontal'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"styles"})}),": Custom styling options"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"renderLabel"})}),": Custom label component"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"renderLabelPopover"})}),": Interactive popover content"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"annotation-types",children:"Annotation Types"}),`
`,(0,e.jsx)(n.h3,{id:"circle-annotations-default",children:"Circle Annotations (Default)"}),`
`,(0,e.jsx)(n.p,{children:"Circle annotations place a small circle at the exact data point location:"}),`
`,(0,e.jsx)(o.Hl,{of:s.Default}),`
`,(0,e.jsx)(n.h3,{id:"vertical-line-annotations",children:"Vertical Line Annotations"}),`
`,(0,e.jsx)(n.p,{children:"Vertical lines span the entire chart height at the data point's x-coordinate:"}),`
`,(0,e.jsx)(o.Hl,{of:s.Vertical}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={dataPoint}
	title="Deployment"
	subtitle="Version 1.5 deployed"
	subjectType="line-vertical"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"horizontal-line-annotations",children:"Horizontal Line Annotations"}),`
`,(0,e.jsx)(n.p,{children:"Horizontal lines span the entire chart width at the data point's y-coordinate:"}),`
`,(0,e.jsx)(o.Hl,{of:s.Horizontal}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={dataPoint}
	title="Target Threshold"
	subtitle="Performance benchmark"
	subjectType="line-horizontal"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"mixed-annotations",children:"Mixed Annotations"}),`
`,(0,e.jsx)(n.p,{children:"You can combine different annotation types in the same chart:"}),`
`,(0,e.jsx)(o.Hl,{of:s.Mixed}),`
`,(0,e.jsx)(n.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsxs)(n.p,{children:["Override default colors using the ",(0,e.jsx)(n.code,{children:"styles"})," prop:"]}),`
`,(0,e.jsx)(o.Hl,{of:s.Colored}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={dataPoint}
	title="Alert"
	subtitle="Threshold exceeded"
	styles={{
		circleSubject: {
			fill: 'var(--jp-red)',
		},
		connector: {
			stroke: 'var(--jp-red)',
		},
		label: {
			backgroundFill: 'var(--jp-red)',
			fontColor: '#fff',
			showAnchorLine: false,
		},
	}}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"styling-options",children:"Styling Options"}),`
`,(0,e.jsxs)(n.p,{children:["The ",(0,e.jsx)(n.code,{children:"styles"})," prop accepts the following nested objects, based on the ",(0,e.jsx)(n.a,{href:"https://airbnb.io/visx/docs/annotation",rel:"nofollow",children:"visx annotation types"}),":"]}),`
`,(0,e.jsx)(n.h4,{id:"circlesubject",children:(0,e.jsx)(n.code,{children:"circleSubject"})}),`
`,(0,e.jsx)(n.p,{children:"Controls the appearance of circle annotations:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"className"}),": Circle class name"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"fill"}),": Circle background color"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"stroke"}),": Circle border color"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"radius"}),": Circle size"]}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"linesubject",children:(0,e.jsx)(n.code,{children:"lineSubject"})}),`
`,(0,e.jsx)(n.p,{children:"Controls vertical and horizontal line appearance:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"className"}),": Line class name"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"stroke"}),": Line color"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"strokeWidth"}),": Line thickness"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"orientation"}),": Line orientation (",(0,e.jsx)(n.code,{children:"'vertical'"}),", ",(0,e.jsx)(n.code,{children:"'horizontal'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"min"}),": The minimum coordinate of the line"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"max"}),": The maximum coordinate of the line"]}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"connector",children:(0,e.jsx)(n.code,{children:"connector"})}),`
`,(0,e.jsx)(n.p,{children:"Controls the line connecting the annotation to its label:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"className"}),": Connector class name"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"type"}),": Connector type (",(0,e.jsx)(n.code,{children:"'line'"}),", ",(0,e.jsx)(n.code,{children:"'elbow'"}),")"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"stroke"}),": Connector color"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"pathProps"}),": Optional additional props"]}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"label",children:(0,e.jsx)(n.code,{children:"label"})}),`
`,(0,e.jsx)(n.p,{children:"Controls the text label appearance:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"anchorLineStroke"}),": Stroke color of anchor line"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"backgroundFill"}),": Background color of label"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"backgroundPadding"}),": Padding of text from background"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"backgroundProps"}),": Additional props to be passed to background SVGRectElement"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"className"}),": Optional class name to apply to container"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"fontColor"}),": Color of title and subtitle text"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"horizontalAnchor"}),": Whether the label is horizontally anchored to the start, middle, or end of its x position"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"resizeObserverPolyfill"}),": Optionally inject a ResizeObserver polyfill, else this ",(0,e.jsx)(n.em,{children:"must"})," be globally available"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"showAnchorLine"}),": Whether to render a line indicating label text anchor"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"showBackground"}),": Whether to render a label background"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"subtitleFontSize"}),": Optional subtitle font size"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"subtitleFontWeight"}),": Optional subtitle font weight"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"subtitleDy"}),": The vertical offset of the subtitle from the title"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"titleFontSize"}),": Optional title font size"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"titleFontWeight"}),": Optional title font weight"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"titleProps"}),": Optional title Text props (to override color, etc.)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"verticalAnchor"}),": Whether the label is vertically anchored to the start, middle, or end of its y position"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"width"}),": Width of annotation, including background, for text wrapping"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"maxWidth"}),": Maximum label width"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"x"})," / ",(0,e.jsx)(n.code,{children:"y"}),": Position overrides (",(0,e.jsx)(n.code,{children:"'start'"}),", ",(0,e.jsx)(n.code,{children:"'end'"}),", or number)"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"theme-integration",children:"Theme Integration"}),`
`,(0,e.jsx)(n.p,{children:"Annotations inherit styling from your chart theme. Default themes provide consistent styling:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Jetpack Theme"}),": Gray colors with subtle styling"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Woo Theme"}),": Black accents for higher contrast"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Custom Themes"}),": Define ",(0,e.jsx)(n.code,{children:"annotationStyles"})," in your theme object"]}),`
`]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`const customTheme = {
	...jetpackTheme,
	annotationStyles: {
		label: {
			backgroundFill: '#f0f8ff',
			anchorLineStroke: '#0066cc',
		},
		circleSubject: {
			fill: '#0066cc',
			radius: 6,
		},
		connector: {
			stroke: '#0066cc',
		},
	},
};`}),`
`,(0,e.jsx)(n.h2,{id:"custom-annotations",children:"Custom Annotations"}),`
`,(0,e.jsx)(n.h3,{id:"custom-label-rendering",children:"Custom Label Rendering"}),`
`,(0,e.jsxs)(n.p,{children:["Create fully custom annotation labels using the ",(0,e.jsx)(n.code,{children:"renderLabel"})," prop:"]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Important"}),": When using ",(0,e.jsx)(n.code,{children:"renderLabel"}),", smart positioning is disabled. The annotation will be positioned exactly at the data point coordinates without automatic boundary adjustments."]}),`
`,(0,e.jsx)(o.Hl,{of:s.Custom}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`const DeployIcon = () => (
	<span style={{
		background: 'black',
		color: 'white',
		width: '24px',
		height: '24px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '50%'
	}}>
		D
	</span>
);

<LineChart.Annotation
	datum={ dataPoint }
	title="Deployed"
	subjectType="line-vertical"
	renderLabel={ () => (
		<span style={ { transform: 'translate(0, 6px)' } }>
			<DeployIcon />
		</span>
	) }
/>`}),`
`,(0,e.jsx)(n.h3,{id:"interactive-popovers",children:"Interactive Popovers"}),`
`,(0,e.jsxs)(n.p,{children:["Add rich interactive content with ",(0,e.jsx)(n.code,{children:"renderLabelPopover"}),":"]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={dataPoint}
	title="Deployment"
	renderLabel={() => <DeployIcon />}
	renderLabelPopover={({ title, subtitle }) => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
			<div style={{
				display: 'flex',
				alignItems: 'center',
				gap: '6px'
			}}>
				<DeployIcon />
				<strong>Deploy finished</strong>
			</div>
			<p style={{ margin: 0 }}>
				Thu. Apr 24, 2025. 09:57:23 UTC
			</p>
		</div>
	)}
/>`}),`
`,(0,e.jsxs)(n.p,{children:["When both ",(0,e.jsx)(n.code,{children:"renderLabel"})," and ",(0,e.jsx)(n.code,{children:"renderLabelPopover"})," are provided, the label becomes clickable and opens the popover content."]}),`
`,(0,e.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),`
`,(0,e.jsx)(n.h3,{id:"smart-positioning",children:"Smart Positioning"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Basic annotations"})," (without custom ",(0,e.jsx)(n.code,{children:"renderLabel"}),") automatically adjust their position to stay within chart boundaries:"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Horizontal overflow"}),": Labels flip to the left when approaching the right edge"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Vertical overflow"}),": Labels reposition above or below to avoid clipping"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Multi-line content"}),": Height is measured dynamically for accurate positioning"]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": Smart positioning is ",(0,e.jsx)(n.strong,{children:"not available"})," for custom annotations using ",(0,e.jsx)(n.code,{children:"renderLabel"}),". Custom annotations are positioned at the exact data point coordinates with ",(0,e.jsx)(n.code,{children:"dx: 0, dy: 0"})," offset."]}),`
`,(0,e.jsx)(n.h3,{id:"label-positioning",children:"Label Positioning"}),`
`,(0,e.jsx)(n.p,{children:"Control label placement with positioning options:"}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`// Position at chart edges
<LineChart.Annotation
	styles={{
		label: {
			x: 'start', // 'start', 'end', or number
			y: 'start', // 'start', 'end', or number
		}
	}}
/>`}),`
`,(0,e.jsx)(n.h3,{id:"zero-value-support",children:"Zero Value Support"}),`
`,(0,e.jsxs)(n.p,{children:["Annotations work correctly with zero values (unlike some chart libraries that treat ",(0,e.jsx)(n.code,{children:"0"})," as falsy):"]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={{ date: new Date('2024-01-01'), value: 0 }}
	title="Baseline"
	subtitle="Starting point"
/>`}),`
`,(0,e.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,e.jsx)(n.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Annotations are focusable with Tab navigation"}),`
`,(0,e.jsx)(n.li,{children:"Interactive popovers can be opened with Enter or Space"}),`
`,(0,e.jsx)(n.li,{children:"Popovers can be closed with Escape key"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"screen-reader-support",children:"Screen Reader Support"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Interactive annotation buttons have ",(0,e.jsx)(n.code,{children:"aria-label"})," attributes"]}),`
`,(0,e.jsx)(n.li,{children:"Close buttons have descriptive labels"}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Note"}),": Custom popover content does not currently have explicit ARIA roles or ",(0,e.jsx)(n.code,{children:"aria-describedby"})," relationships. Content relies on the native Popover API's built-in accessibility features."]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"focus-management",children:"Focus Management"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Focus returns to the annotation trigger when closed"}),`
`,(0,e.jsx)(n.li,{children:"Visual focus indicators are provided"}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"browser-compatibility",children:"Browser Compatibility"}),`
`,(0,e.jsx)(n.h3,{id:"safari-considerations",children:"Safari Considerations"}),`
`,(0,e.jsxs)(n.p,{children:["Due to ",(0,e.jsx)(n.a,{href:"https://bugs.webkit.org/show_bug.cgi?id=23113",rel:"nofollow",children:"Safari's foreignObject positioning bug"}),", interactive popovers are positioned in the viewport center rather than next to the annotation. This ensures functionality while the browser issue is resolved."]}),`
`,(0,e.jsx)(n.h3,{id:"popover-api-support",children:"Popover API Support"}),`
`,(0,e.jsxs)(n.p,{children:["The component uses the native ",(0,e.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"HTML Popover API"})," with ",(0,e.jsx)(n.code,{children:"popovertarget"})," and ",(0,e.jsx)(n.code,{children:"popover"})," attributes. This provides built-in show/hide behavior, focus management, and accessibility features. The implementation includes fallback handling for test environments and browsers that don't support the ",(0,e.jsx)(n.code,{children:":popover-open"})," pseudo-class."]}),`
`,(0,e.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),`
`,(0,e.jsx)(n.h3,{id:"linechartannotationsoverlay",children:"LineChart.AnnotationsOverlay"}),`
`,(0,e.jsx)(n.p,{children:"Container component that manages annotation rendering and chart synchronization."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"children"}),": Annotation components"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"linechartannotation",children:"LineChart.Annotation"}),`
`,(0,e.jsx)(n.p,{children:"Individual annotation component."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"datum"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"DataPointDate"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Data point to annotate"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"title"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:[(0,e.jsx)(n.strong,{children:"Required."})," Main annotation text"]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"subtitle"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional descriptive text"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"subjectType"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle' | 'line-vertical' | 'line-horizontal'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'circle'"})}),(0,e.jsx)(n.td,{children:"Visual annotation style"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"styles"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"AnnotationStyles"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Custom styling options"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderLabel"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"FC<{title: string, subtitle?: string}>"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:["Custom label component. ",(0,e.jsx)(n.strong,{children:"Disables smart positioning."})]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"renderLabelPopover"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"FC<{title: string, subtitle?: string}>"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Interactive popover content"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"testId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Test identifier"})]})]})]}),`
`,(0,e.jsx)(n.h3,{id:"datapointdate-type",children:"DataPointDate Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type DataPointDate = {
	date: Date;
	value: number;
	label?: string;
};
`})}),`
`,(0,e.jsx)(n.h3,{id:"annotationstyles-type",children:"AnnotationStyles Type"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type AnnotationStyles = {
	circleSubject?: {
		fill?: string;
		stroke?: string;
		radius?: number;
		// ... other circle properties
	};
	lineSubject?: {
		stroke?: string;
		strokeWidth?: number;
		// ... other line properties
	};
	connector?: {
		stroke?: string;
		strokeWidth?: number;
		// ... other connector properties
	};
	label?: {
		backgroundFill?: string;
		fontColor?: string;
		showAnchorLine?: boolean;
		maxWidth?: number;
		x?: number | 'start' | 'end';
		y?: number | 'start' | 'end';
		// ... other label properties
	};
};
`})}),`
`,(0,e.jsx)(n.h2,{id:"examples-and-stories",children:"Examples and Stories"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"?path=/story/js-packages-charts-types-line-chart-annotations--default",children:(0,e.jsx)(n.strong,{children:"Default"})}),": Basic circle annotations"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"?path=/story/js-packages-charts-types-line-chart-annotations--vertical",children:(0,e.jsx)(n.strong,{children:"Vertical"})}),": Vertical line annotations"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"?path=/story/js-packages-charts-types-line-chart-annotations--horizontal",children:(0,e.jsx)(n.strong,{children:"Horizontal"})}),": Horizontal line annotations"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"?path=/story/js-packages-charts-types-line-chart-annotations--mixed",children:(0,e.jsx)(n.strong,{children:"Mixed"})}),": Combined annotation types"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"?path=/story/js-packages-charts-types-line-chart-annotations--colored",children:(0,e.jsx)(n.strong,{children:"Colored"})}),": Custom styling examples"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"?path=/story/js-packages-charts-types-line-chart-annotations--custom-vertical",children:(0,e.jsx)(n.strong,{children:"Custom Vertical"})}),": Custom interactive annotations"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"migration-from-legacy-api",children:"Migration from Legacy API"}),`
`,(0,e.jsxs)(n.p,{children:["If you're upgrading from the deprecated ",(0,e.jsx)(n.code,{children:"annotations"})," prop:"]}),`
`,(0,e.jsx)(o.kL,{language:"jsx",code:`// Old API (deprecated)
<LineChart
data={data}
annotations={[
	{
		datum: dataPoint,
		title: "Event",
		subjectType: "circle"
	}
]}
/>

// New API

<LineChart data={ data }>
<LineChart.AnnotationsOverlay>
	<LineChart.Annotation datum={ dataPoint } title="Event" subjectType="circle" />
</LineChart.AnnotationsOverlay>
</LineChart>
`}),`
`,(0,e.jsx)(n.p,{children:"The new compound component pattern provides better TypeScript support, more flexibility, and clearer composition."})]})}function d(p={}){const{wrapper:n}={...(0,a.R)(),...p.components};return n?(0,e.jsx)(n,{...p,children:(0,e.jsx)(h,{...p})}):h(p)}},"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":u=>{function r(t){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",u.exports=r},"../charts/src/components/line-chart/stories/annotation.stories.tsx":(u,r,t)=>{"use strict";t.r(r),t.d(r,{Colored:()=>g,Custom:()=>C,Default:()=>n,Horizontal:()=>c,Mixed:()=>m,Vertical:()=>x,__namedExportsOrder:()=>E,default:()=>h});var i=t("../charts/src/stories/sample-data/index.ts"),e=t("../charts/src/components/line-chart/line-chart.tsx"),a=t("../charts/src/components/line-chart/stories/config.tsx"),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h={...a.Nc,title:"JS Packages/Charts/Types/Line Chart/Annotations",args:{...a.pn}},d=R=>P=>(0,o.jsx)(e.A,{...P,children:(0,o.jsxs)(e.A.AnnotationsOverlay,{children:[(0,o.jsx)(e.A.Annotation,{datum:i.B2[0].data[10],title:"Notable event",subtitle:"This is a notable event",...R?.[0]||{}}),(0,o.jsx)(e.A.Annotation,{datum:i.B2[1].data[i.B2[1].data.length-10],title:"Another notable event",subtitle:"This is another notable event",...R?.[1]||{}}),(0,o.jsx)(e.A.Annotation,{datum:i.B2[2].data[i.B2[2].data.length-51],title:"Concerning event",subtitle:"This is a concerning event",...R?.[2]||{}})]})}),n=d([{},{},{styles:{circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),x=d([{subjectType:"line-vertical"},{subjectType:"line-vertical"},{subjectType:"line-vertical",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),c=d([{subjectType:"line-horizontal"},{subjectType:"line-horizontal"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),m=d([{subjectType:"circle"},{subjectType:"line-vertical"},{subjectType:"line-horizontal",styles:{connector:{stroke:"var(--jp-red)"},label:{anchorLineStroke:"var(--jp-red)"}}}]).bind({}),g=d([{styles:{label:{backgroundFill:"#98C8DF",showAnchorLine:!1},circleSubject:{fill:"#98C8DF"},connector:{stroke:"#98C8DF"}}},{styles:{label:{backgroundFill:"#006DAB",fontColor:"#fff",showAnchorLine:!1},circleSubject:{fill:"#006DAB"},connector:{stroke:"#006DAB"}}},{styles:{label:{backgroundFill:"var(--jp-red)",showAnchorLine:!1,fontColor:"#fff"},circleSubject:{fill:"var(--jp-red)"},connector:{stroke:"var(--jp-red)"}}}]).bind({}),y=()=>(0,o.jsx)("span",{style:{background:"black",color:"white",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"D"}),L={subjectType:"line-vertical",styles:{label:{showAnchorLine:!1,y:"start"}},title:"Deployed",renderLabel:()=>(0,o.jsx)("span",{style:{transform:"translate(0, 6px)"},children:(0,o.jsx)(y,{})}),renderLabelPopover:()=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,o.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,o.jsx)(y,{}),(0,o.jsx)("strong",{children:"Deploy finished"})]}),(0,o.jsx)("p",{style:{margin:0},children:"Thu. Apr 24, 2025. 09:57:23 UTC"})]})},f=()=>(0,o.jsx)("span",{style:{background:"var(--jp-red)",color:"white",width:"20px",height:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"},children:"!"}),I={subjectType:"circle",styles:{circleSubject:{radius:0},label:{showAnchorLine:!1},connector:{stroke:"transparent"}},title:"Alert",renderLabel:()=>(0,o.jsx)(f,{}),renderLabelPopover:()=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,o.jsxs)("div",{style:{margin:0,display:"flex",alignItems:"center",gap:"6px",paddingBlock:"0.25rem "},children:[(0,o.jsx)(f,{}),(0,o.jsx)("strong",{children:"Origin HTTP 5xx Response Codes Rate Anomaly [Beta]"})]}),(0,o.jsx)("p",{style:{margin:0},children:"Unusually high number of HTTP 5xx response codes detected on Origin"})]})},C=d([{...L},{...L},{...I}]).bind({}),E=["Default","Vertical","Horizontal","Mixed","Colored","Custom"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{}, {}, {
  styles: {
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...n.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-vertical',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...x.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal'
}, {
  subjectType: 'line-horizontal',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...c.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  subjectType: 'circle'
}, {
  subjectType: 'line-vertical'
}, {
  subjectType: 'line-horizontal',
  styles: {
    connector: {
      stroke: 'var(--jp-red)'
    },
    label: {
      anchorLineStroke: 'var(--jp-red)'
    }
  }
}])`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  styles: {
    label: {
      backgroundFill: '#98C8DF',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#98C8DF'
    },
    connector: {
      stroke: '#98C8DF'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: '#006DAB',
      fontColor: '#fff',
      showAnchorLine: false
    },
    circleSubject: {
      fill: '#006DAB'
    },
    connector: {
      stroke: '#006DAB'
    }
  }
}, {
  styles: {
    label: {
      backgroundFill: 'var(--jp-red)',
      showAnchorLine: false,
      fontColor: '#fff'
    },
    circleSubject: {
      fill: 'var(--jp-red)'
    },
    connector: {
      stroke: 'var(--jp-red)'
    }
  }
}])`,...g.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createAnnotationTemplate([{
  ...customTopAnnotationArgs
}, {
  ...customTopAnnotationArgs
}, {
  ...customBottomAnnotationArgs
}])`,...C.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js":(u,r,t)=>{"use strict";t.d(r,{A:()=>d});var i=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),e=t.n(i),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),s=t.n(o),h=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function d(p){var n=p.top,T=n===void 0?0:n,x=p.left,O=x===void 0?0:x,c=p.className,j=p.children;return a.createElement(h.A,{className:s()("visx-glyph",c),top:T,left:O},j)}d.propTypes={top:e().number,left:e().number,className:e().string,children:e().node}},"../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js":(u,r,t)=>{"use strict";t.d(r,{A:()=>O});var i=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),e=t.n(i),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),s=t.n(o),h=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),p=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),n=["children","className","top","left","size"];function T(){return T=Object.assign?Object.assign.bind():function(c){for(var j=1;j<arguments.length;j++){var m=arguments[j];for(var _ in m)Object.prototype.hasOwnProperty.call(m,_)&&(c[_]=m[_])}return c},T.apply(this,arguments)}function x(c,j){if(c==null)return{};var m={},_=Object.keys(c),g,y;for(y=0;y<_.length;y++)g=_[y],!(j.indexOf(g)>=0)&&(m[g]=c[g]);return m}function O(c){var j=c.children,m=c.className,_=c.top,g=c.left,y=c.size,L=x(c,n),f=(0,h.A)();return f.type(d.A),(typeof y=="number"||y)&&f.size(y),j?a.createElement(a.Fragment,null,j({path:f})):a.createElement(p.A,{top:_,left:g},a.createElement("path",T({className:s()("visx-glyph-star",m),d:f()||""},L)))}O.propTypes={children:e().func,className:e().string,top:e().number,left:e().number,size:e().oneOfType([e().number,e().func])}},"../charts/src/components/line-chart/stories/config.tsx":(u,r,t)=>{"use strict";t.d(r,{Em:()=>E,Nc:()=>R,pn:()=>P});var i=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),e=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(e),o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=t.n(s),d=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),p=t("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/diamond.js"),n=t("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/Glyph.js"),T=["children","className","top","left","size"];function x(){return x=Object.assign?Object.assign.bind():function(l){for(var b=1;b<arguments.length;b++){var S=arguments[b];for(var A in S)Object.prototype.hasOwnProperty.call(S,A)&&(l[A]=S[A])}return l},x.apply(this,arguments)}function O(l,b){if(l==null)return{};var S={},A=Object.keys(l),k,v;for(v=0;v<A.length;v++)k=A[v],!(b.indexOf(k)>=0)&&(S[k]=l[k]);return S}function c(l){var b=l.children,S=l.className,A=l.top,k=l.left,v=l.size,M=O(l,T),D=(0,d.A)();return D.type(p.A),(typeof v=="number"||v)&&D.size(v),b?o.createElement(o.Fragment,null,b({path:D})):o.createElement(n.A,{top:A,left:k},o.createElement("path",x({className:h()("visx-glyph-diamond",S),d:D()||""},M)))}c.propTypes={children:a().func,className:a().string,top:a().number,left:a().number,size:a().oneOfType([a().number,a().func])};var j=t("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),m=t.n(j),_=t("../charts/src/providers/chart-context/global-charts-provider.tsx"),g=t("../charts/src/providers/theme/themes.ts"),y=t("../charts/src/stories/legend-config.tsx"),L=t("../charts/src/stories/sample-data/index.ts"),f=t("../charts/src/stories/theme-config.tsx"),I=t("../charts/src/components/private/default-glyph/default-glyph.tsx"),B=t("../charts/src/components/line-chart/line-chart.tsx"),C=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=m()(g.QI,{glyphs:[l=>(0,o.createElement)(I.W,{...l,key:l.key}),l=>(0,o.createElement)(i.A,{key:l.key,top:l.y,left:l.x,size:l.size*l.size,fill:l.color}),l=>(0,o.createElement)(c,{key:l.key,top:l.y,left:l.x,size:l.size*l.size,fill:l.color})],annotationStyles:{label:{maxWidth:250}}}),R={title:"JS Packages/Charts/Types/Line Chart",component:B.A,parameters:{layout:"centered"},decorators:[(l,{args:b})=>{const S=f.yI[b.themeName||"default"];return(0,C.jsx)(_.S,{theme:S,children:(0,C.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,C.jsx)(l,{})})})}],argTypes:{...y.r,...f.jW,maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},P={data:L.B2,withGradientFill:!1,withLegendGlyph:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0};try{E.displayName="glyphTheme",E.__docgenInfo={description:"Custom storybook theme with glyphs",displayName:"glyphTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/line-chart/stories/config.tsx#glyphTheme"]={docgenInfo:E.__docgenInfo,name:"glyphTheme",path:"../charts/src/components/line-chart/stories/config.tsx#glyphTheme"})}catch{}},"../charts/src/stories/legend-config.tsx":(u,r,t)=>{"use strict";t.d(r,{r:()=>i});const i={showLegend:{control:{type:"boolean"},table:{category:"Legend"}},legendPosition:{control:{type:"select"},options:["top","bottom"],table:{category:"Legend"}},legendAlignment:{control:{type:"select"},options:["start","center","end"],table:{category:"Legend"}},legendOrientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:"Legend"}},legendShape:{control:{type:"select"},options:["circle","rect"],table:{category:"Legend"}},withLegendGlyph:{control:{type:"boolean"},table:{category:"Legend"},description:"Show glyphs in legend (Line charts only)"}};try{i.displayName="legendArgTypes",i.__docgenInfo={description:`Shared legend configuration for chart stories
Provides consistent argTypes and decorators across all chart legend stories`,displayName:"legendArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/legend-config.tsx#legendArgTypes"]={docgenInfo:i.__docgenInfo,name:"legendArgTypes",path:"../charts/src/stories/legend-config.tsx#legendArgTypes"})}catch{}},"../charts/src/stories/theme-config.tsx":(u,r,t)=>{"use strict";t.d(r,{jW:()=>o,yI:()=>a});var i=t("../charts/src/providers/theme/themes.ts");const e={colors:["#073B3A","#0B6E4F","#08A045","#6BBF59","#DDB771"],seriesLineStyles:[{strokeWidth:1,strokeDasharray:"8 8",strokeLinecap:"square"},{strokeDasharray:"5 8",strokeWidth:2,strokeLinecap:"square"}],gridStyles:{stroke:"#ffe3e3",strokeWidth:2}},a={default:i.zQ,jetpack:i.QI,woo:i.pk,custom:e},o={themeName:{control:{type:"select"},options:["default","jetpack","woo","custom"],defaultValue:"default",description:"Select a theme to apply to the chart",table:{category:"Theme"}}};try{e.displayName="customTheme",e.__docgenInfo={description:"Custom theme with earth tones and dashed line styles for demonstration",displayName:"customTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#customTheme"]={docgenInfo:e.__docgenInfo,name:"customTheme",path:"../charts/src/stories/theme-config.tsx#customTheme"})}catch{}try{backgroundColor.displayName="backgroundColor",backgroundColor.__docgenInfo={description:"Background color for chart components",displayName:"backgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#backgroundColor"]={docgenInfo:backgroundColor.__docgenInfo,name:"backgroundColor",path:"../charts/src/stories/theme-config.tsx#backgroundColor"})}catch{}try{labelBackgroundColor.displayName="labelBackgroundColor",labelBackgroundColor.__docgenInfo={description:"Background color for labels",displayName:"labelBackgroundColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelBackgroundColor"]={docgenInfo:labelBackgroundColor.__docgenInfo,name:"labelBackgroundColor",path:"../charts/src/stories/theme-config.tsx#labelBackgroundColor"})}catch{}try{labelTextColor.displayName="labelTextColor",labelTextColor.__docgenInfo={description:"Text color for labels",displayName:"labelTextColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#labelTextColor"]={docgenInfo:labelTextColor.__docgenInfo,name:"labelTextColor",path:"../charts/src/stories/theme-config.tsx#labelTextColor"})}catch{}try{colors.displayName="colors",colors.__docgenInfo={description:"Array of colors used for data visualization",displayName:"colors",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#colors"]={docgenInfo:colors.__docgenInfo,name:"colors",path:"../charts/src/stories/theme-config.tsx#colors"})}catch{}try{gridStyles.displayName="gridStyles",gridStyles.__docgenInfo={description:"Optional CSS styles for grid lines",displayName:"gridStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridStyles"]={docgenInfo:gridStyles.__docgenInfo,name:"gridStyles",path:"../charts/src/stories/theme-config.tsx#gridStyles"})}catch{}try{tickLength.displayName="tickLength",tickLength.__docgenInfo={description:"Length of axis ticks in pixels",displayName:"tickLength",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#tickLength"]={docgenInfo:tickLength.__docgenInfo,name:"tickLength",path:"../charts/src/stories/theme-config.tsx#tickLength"})}catch{}try{gridColor.displayName="gridColor",gridColor.__docgenInfo={description:"Color of the grid lines",displayName:"gridColor",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColor"]={docgenInfo:gridColor.__docgenInfo,name:"gridColor",path:"../charts/src/stories/theme-config.tsx#gridColor"})}catch{}try{gridColorDark.displayName="gridColorDark",gridColorDark.__docgenInfo={description:"Color of the grid lines in dark mode",displayName:"gridColorDark",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#gridColorDark"]={docgenInfo:gridColorDark.__docgenInfo,name:"gridColorDark",path:"../charts/src/stories/theme-config.tsx#gridColorDark"})}catch{}try{xTickLineStyles.displayName="xTickLineStyles",xTickLineStyles.__docgenInfo={description:"Styles for x-axis tick lines",displayName:"xTickLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xTickLineStyles"]={docgenInfo:xTickLineStyles.__docgenInfo,name:"xTickLineStyles",path:"../charts/src/stories/theme-config.tsx#xTickLineStyles"})}catch{}try{xAxisLineStyles.displayName="xAxisLineStyles",xAxisLineStyles.__docgenInfo={description:"Styles for x-axis line",displayName:"xAxisLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#xAxisLineStyles"]={docgenInfo:xAxisLineStyles.__docgenInfo,name:"xAxisLineStyles",path:"../charts/src/stories/theme-config.tsx#xAxisLineStyles"})}catch{}try{seriesLineStyles.displayName="seriesLineStyles",seriesLineStyles.__docgenInfo={description:"Styles for series lines",displayName:"seriesLineStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#seriesLineStyles"]={docgenInfo:seriesLineStyles.__docgenInfo,name:"seriesLineStyles",path:"../charts/src/stories/theme-config.tsx#seriesLineStyles"})}catch{}try{legendShapeStyles.displayName="legendShapeStyles",legendShapeStyles.__docgenInfo={description:"Styles for legend shapes",displayName:"legendShapeStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendShapeStyles"]={docgenInfo:legendShapeStyles.__docgenInfo,name:"legendShapeStyles",path:"../charts/src/stories/theme-config.tsx#legendShapeStyles"})}catch{}try{glyphs.displayName="glyphs",glyphs.__docgenInfo={description:"Array of render functions for glyphs",displayName:"glyphs",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#glyphs"]={docgenInfo:glyphs.__docgenInfo,name:"glyphs",path:"../charts/src/stories/theme-config.tsx#glyphs"})}catch{}try{legendLabelStyles.displayName="legendLabelStyles",legendLabelStyles.__docgenInfo={description:"Styles for legend labels",displayName:"legendLabelStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendLabelStyles"]={docgenInfo:legendLabelStyles.__docgenInfo,name:"legendLabelStyles",path:"../charts/src/stories/theme-config.tsx#legendLabelStyles"})}catch{}try{legendContainerStyles.displayName="legendContainerStyles",legendContainerStyles.__docgenInfo={description:"Styles for legend container",displayName:"legendContainerStyles",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#legendContainerStyles"]={docgenInfo:legendContainerStyles.__docgenInfo,name:"legendContainerStyles",path:"../charts/src/stories/theme-config.tsx#legendContainerStyles"})}catch{}try{leaderboardChart.displayName="leaderboardChart",leaderboardChart.__docgenInfo={description:"LeaderboardChart specific settings",displayName:"leaderboardChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#leaderboardChart"]={docgenInfo:leaderboardChart.__docgenInfo,name:"leaderboardChart",path:"../charts/src/stories/theme-config.tsx#leaderboardChart"})}catch{}try{conversionFunnelChart.displayName="conversionFunnelChart",conversionFunnelChart.__docgenInfo={description:"ConversionFunnelChart specific settings",displayName:"conversionFunnelChart",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#conversionFunnelChart"]={docgenInfo:conversionFunnelChart.__docgenInfo,name:"conversionFunnelChart",path:"../charts/src/stories/theme-config.tsx#conversionFunnelChart"})}catch{}try{a.displayName="CHART_THEME_MAP",a.__docgenInfo={description:`Centralized theme map for all chart stories
Note: customStorybook theme is added by line chart stories`,displayName:"CHART_THEME_MAP",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"]={docgenInfo:a.__docgenInfo,name:"CHART_THEME_MAP",path:"../charts/src/stories/theme-config.tsx#CHART_THEME_MAP"})}catch{}try{o.displayName="themeArgTypes",o.__docgenInfo={description:"Shared argTypes for theme control",displayName:"themeArgTypes",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/stories/theme-config.tsx#themeArgTypes"]={docgenInfo:o.__docgenInfo,name:"themeArgTypes",path:"../charts/src/stories/theme-config.tsx#themeArgTypes"})}catch{}},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":u=>{function r(t){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",u.exports=r},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":u=>{function r(t){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",u.exports=r}}]);
