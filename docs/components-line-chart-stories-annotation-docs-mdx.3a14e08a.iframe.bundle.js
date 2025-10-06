(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3601],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((c,o,i)=>{"use strict";i.d(o,{R:()=>t,x:()=>l});var s=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=s.createContext(e);function t(r){const a=s.useContext(h);return s.useMemo(function(){return typeof r=="function"?r(a):{...a,...r}},[a,r])}function l(r){let a;return r.disableParentContext?a=typeof r.components=="function"?r.components(e):r.components||e:a=t(r.components),s.createElement(h.Provider,{value:a},r.children)}}),"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":(c=>{function o(i){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",c.exports=o}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":(c=>{function o(i){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",c.exports=o}),"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":(c=>{function o(i){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",c.exports=o}),"../charts/src/components/line-chart/stories/annotation.docs.mdx":((c,o,i)=>{"use strict";i.r(o),i.d(o,{default:()=>a});var s=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=i("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.25_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=i("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.25_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),l=i("../charts/src/components/line-chart/stories/annotation.stories.tsx");function r(d){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,h.R)(),...d.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{title:"JS Packages/Charts/Types/Line Chart/Annotations",of:l}),`
`,(0,e.jsx)(n.h1,{id:"line-chart-annotations",children:"Line Chart Annotations"}),`
`,(0,e.jsx)(n.p,{children:"Annotations allow you to highlight specific data points or events on your line charts with contextual information. They support multiple visual styles, custom content, and interactive popovers for rich user experiences."}),`
`,(0,e.jsx)(t.Hl,{of:l.Default}),`
`,(0,e.jsx)(n.h2,{id:"overview",children:"Overview"}),`
`,(0,e.jsx)(n.p,{children:"The Line Chart component supports a compound component pattern for annotations, providing flexibility and declarative syntax:"}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`import { LineChart } from '@automattic/jetpack-charts';

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
`,(0,e.jsx)(t.Hl,{of:l.Default}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart data={data}>
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
`,(0,e.jsx)(t.Hl,{of:l.Default}),`
`,(0,e.jsx)(n.h3,{id:"vertical-line-annotations",children:"Vertical Line Annotations"}),`
`,(0,e.jsx)(n.p,{children:"Vertical lines span the entire chart height at the data point's x-coordinate:"}),`
`,(0,e.jsx)(t.Hl,{of:l.Vertical}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={dataPoint}
	title="Deployment"
	subtitle="Version 1.5 deployed"
	subjectType="line-vertical"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"horizontal-line-annotations",children:"Horizontal Line Annotations"}),`
`,(0,e.jsx)(n.p,{children:"Horizontal lines span the entire chart width at the data point's y-coordinate:"}),`
`,(0,e.jsx)(t.Hl,{of:l.Horizontal}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart.Annotation
	datum={dataPoint}
	title="Target Threshold"
	subtitle="Performance benchmark"
	subjectType="line-horizontal"
/>`}),`
`,(0,e.jsx)(n.h3,{id:"mixed-annotations",children:"Mixed Annotations"}),`
`,(0,e.jsx)(n.p,{children:"You can combine different annotation types in the same chart:"}),`
`,(0,e.jsx)(t.Hl,{of:l.Mixed}),`
`,(0,e.jsx)(n.h2,{id:"styling-and-customization",children:"Styling and Customization"}),`
`,(0,e.jsx)(n.h3,{id:"custom-colors",children:"Custom Colors"}),`
`,(0,e.jsxs)(n.p,{children:["Override default colors using the ",(0,e.jsx)(n.code,{children:"styles"})," prop:"]}),`
`,(0,e.jsx)(t.Hl,{of:l.Colored}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart.Annotation
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
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const customTheme = {
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
`,(0,e.jsx)(t.Hl,{of:l.Custom}),`
`,(0,e.jsx)(t.kL,{language:"jsx",code:`const DeployIcon = () => (
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
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart.Annotation
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
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Position at chart edges
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
`,(0,e.jsx)(t.kL,{language:"jsx",code:`<LineChart.Annotation
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
`,(0,e.jsxs)(n.p,{children:["For detailed information about annotation component props, types, and styling options, see the ",(0,e.jsx)(n.a,{href:"./?path=/docs/js-packages-charts-types-line-chart-api-reference--docs",children:"Line Chart API Reference"}),"."]}),`
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
`,(0,e.jsx)(t.kL,{language:"jsx",code:`// Old API (deprecated)
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
`,(0,e.jsx)(n.p,{children:"The new compound component pattern provides better TypeScript support, more flexibility, and clearer composition."})]})}function a(d={}){const{wrapper:n}={...(0,h.R)(),...d.components};return n?(0,e.jsx)(n,{...d,children:(0,e.jsx)(r,{...d})}):r(d)}})}]);
