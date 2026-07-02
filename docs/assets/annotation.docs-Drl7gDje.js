import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{gt as n}from"./esm-CZc15EgD.js";import{a as r,n as i,r as a,t as o}from"./blocks-BVHeT-Jf.js";import{t as s}from"./mdx-react-shim-BCiAakVU.js";import{Colored as c,Custom as l,Default as u,Horizontal as d,Mixed as f,Vertical as p,n as m,t as h}from"./annotation.stories-DYyGu6fN.js";function g(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{title:`JS Packages/Charts Library/Charts/Line Chart/Annotations`,of:h}),`
`,(0,v.jsx)(t.h1,{id:`line-chart-annotations`,children:`Line Chart Annotations`}),`
`,(0,v.jsx)(t.p,{children:`Annotations allow you to highlight specific data points or events on your line charts with contextual information. They support multiple visual styles, custom content, and interactive popovers for rich user experiences.`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,v.jsx)(t.p,{children:`The Line Chart component supports a compound component pattern for annotations, providing flexibility and declarative syntax:`}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`import { LineChart } from '@automattic/charts';

<LineChart data={ data }>
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={ { date: new Date( '2024-01-01' ), value: 100 } }
			title="Product Launch"
			subtitle="Version 2.0 released"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,v.jsx)(t.h2,{id:`api-reference`,children:`API Reference`}),`
`,(0,v.jsxs)(t.p,{children:[`For detailed information about annotation component props, types, and styling options, see the `,(0,v.jsx)(t.a,{href:`./?path=/docs/js-packages-charts-library-charts-line-chart-api-reference--docs`,children:`Line Chart API Reference`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,v.jsx)(t.h3,{id:`basic-annotations`,children:`Basic Annotations`}),`
`,(0,v.jsxs)(t.p,{children:[`The simplest annotation requires only a `,(0,v.jsx)(t.code,{children:`datum`}),`, `,(0,v.jsx)(t.code,{children:`title`}),`, and optionally a `,(0,v.jsx)(t.code,{children:`subtitle`}),`:`]}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<LineChart data={data}>
	<LineChart.AnnotationsOverlay>
		<LineChart.Annotation
			datum={sampleData[0].data[10]}
			title="Notable event"
			subtitle="This is a notable event"
		/>
	</LineChart.AnnotationsOverlay>
</LineChart>`}),`
`,(0,v.jsx)(t.h3,{id:`required-props`,children:`Required Props`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`datum`})}),`: A data point object with `,(0,v.jsx)(t.code,{children:`date`}),`, `,(0,v.jsx)(t.code,{children:`value`}),`, and optional `,(0,v.jsx)(t.code,{children:`label`}),` properties`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`title`})}),`: The main annotation text`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`optional-props`,children:`Optional Props`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`subtitle`})}),`: Additional descriptive text`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`subjectType`})}),`: Visual style (`,(0,v.jsx)(t.code,{children:`'circle'`}),`, `,(0,v.jsx)(t.code,{children:`'line-vertical'`}),`, `,(0,v.jsx)(t.code,{children:`'line-horizontal'`}),`)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`styles`})}),`: Custom styling options`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`renderLabel`})}),`: Custom label component`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`renderLabelPopover`})}),`: Interactive popover content`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`annotation-types`,children:`Annotation Types`}),`
`,(0,v.jsx)(t.h3,{id:`circle-annotations-default`,children:`Circle Annotations (Default)`}),`
`,(0,v.jsx)(t.p,{children:`Circle annotations place a small circle at the exact data point location:`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`vertical-line-annotations`,children:`Vertical Line Annotations`}),`
`,(0,v.jsx)(t.p,{children:`Vertical lines span the entire chart height at the data point's x-coordinate:`}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<LineChart.Annotation
	datum={dataPoint}
	title="Deployment"
	subtitle="Version 1.5 deployed"
	subjectType="line-vertical"
/>`}),`
`,(0,v.jsx)(t.h3,{id:`horizontal-line-annotations`,children:`Horizontal Line Annotations`}),`
`,(0,v.jsx)(t.p,{children:`Horizontal lines span the entire chart width at the data point's y-coordinate:`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<LineChart.Annotation
	datum={dataPoint}
	title="Target Threshold"
	subtitle="Performance benchmark"
	subjectType="line-horizontal"
/>`}),`
`,(0,v.jsx)(t.h3,{id:`mixed-annotations`,children:`Mixed Annotations`}),`
`,(0,v.jsx)(t.p,{children:`You can combine different annotation types in the same chart:`}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`styling-and-customization`,children:`Styling and Customization`}),`
`,(0,v.jsx)(t.h3,{id:`custom-colors`,children:`Custom Colors`}),`
`,(0,v.jsxs)(t.p,{children:[`Override default colors using the `,(0,v.jsx)(t.code,{children:`styles`}),` prop:`]}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<LineChart.Annotation
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
`,(0,v.jsx)(t.h3,{id:`styling-options`,children:`Styling Options`}),`
`,(0,v.jsxs)(t.p,{children:[`The `,(0,v.jsx)(t.code,{children:`styles`}),` prop accepts the following nested objects, based on the `,(0,v.jsx)(t.a,{href:`https://airbnb.io/visx/docs/annotation`,rel:`nofollow`,children:`visx annotation types`}),`:`]}),`
`,(0,v.jsx)(t.h4,{id:`circlesubject`,children:(0,v.jsx)(t.code,{children:`circleSubject`})}),`
`,(0,v.jsx)(t.p,{children:`Controls the appearance of circle annotations:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`className`}),`: Circle class name`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`fill`}),`: Circle background color`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`stroke`}),`: Circle border color`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`radius`}),`: Circle size`]}),`
`]}),`
`,(0,v.jsx)(t.h4,{id:`linesubject`,children:(0,v.jsx)(t.code,{children:`lineSubject`})}),`
`,(0,v.jsx)(t.p,{children:`Controls vertical and horizontal line appearance:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`className`}),`: Line class name`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`stroke`}),`: Line color`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`strokeWidth`}),`: Line thickness`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`orientation`}),`: Line orientation (`,(0,v.jsx)(t.code,{children:`'vertical'`}),`, `,(0,v.jsx)(t.code,{children:`'horizontal'`}),`)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`min`}),`: The minimum coordinate of the line`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`max`}),`: The maximum coordinate of the line`]}),`
`]}),`
`,(0,v.jsx)(t.h4,{id:`connector`,children:(0,v.jsx)(t.code,{children:`connector`})}),`
`,(0,v.jsx)(t.p,{children:`Controls the line connecting the annotation to its label:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`className`}),`: Connector class name`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`type`}),`: Connector type (`,(0,v.jsx)(t.code,{children:`'line'`}),`, `,(0,v.jsx)(t.code,{children:`'elbow'`}),`)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`stroke`}),`: Connector color`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`pathProps`}),`: Optional additional props`]}),`
`]}),`
`,(0,v.jsx)(t.h4,{id:`label`,children:(0,v.jsx)(t.code,{children:`label`})}),`
`,(0,v.jsx)(t.p,{children:`Controls the text label appearance:`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`anchorLineStroke`}),`: Stroke color of anchor line`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`backgroundFill`}),`: Background color of label`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`backgroundPadding`}),`: Padding of text from background`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`backgroundProps`}),`: Additional props to be passed to background SVGRectElement`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`className`}),`: Optional class name to apply to container`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`fontColor`}),`: Color of title and subtitle text`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`horizontalAnchor`}),`: Whether the label is horizontally anchored to the start, middle, or end of its x position`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`resizeObserverPolyfill`}),`: Optionally inject a ResizeObserver polyfill, else this `,(0,v.jsx)(t.em,{children:`must`}),` be globally available`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`showAnchorLine`}),`: Whether to render a line indicating label text anchor`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`showBackground`}),`: Whether to render a label background`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`subtitleFontSize`}),`: Optional subtitle font size`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`subtitleFontWeight`}),`: Optional subtitle font weight`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`subtitleDy`}),`: The vertical offset of the subtitle from the title`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`titleFontSize`}),`: Optional title font size`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`titleFontWeight`}),`: Optional title font weight`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`titleProps`}),`: Optional title Text props (to override color, etc.)`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`verticalAnchor`}),`: Whether the label is vertically anchored to the start, middle, or end of its y position`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`width`}),`: Width of annotation, including background, for text wrapping`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`maxWidth`}),`: Maximum label width`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`x`}),` / `,(0,v.jsx)(t.code,{children:`y`}),`: Position overrides (`,(0,v.jsx)(t.code,{children:`'start'`}),`, `,(0,v.jsx)(t.code,{children:`'end'`}),`, or number)`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`theme-integration`,children:`Theme Integration`}),`
`,(0,v.jsxs)(t.p,{children:[`Annotations inherit styling from your chart theme. You can customize annotation styles by defining `,(0,v.jsx)(t.code,{children:`annotationStyles`}),` in your theme object:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`const customTheme = {
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
`,(0,v.jsx)(t.h2,{id:`custom-annotations`,children:`Custom Annotations`}),`
`,(0,v.jsx)(t.h3,{id:`custom-label-rendering`,children:`Custom Label Rendering`}),`
`,(0,v.jsxs)(t.p,{children:[`Create fully custom annotation labels using the `,(0,v.jsx)(t.code,{children:`renderLabel`}),` prop:`]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Important`}),`: When using `,(0,v.jsx)(t.code,{children:`renderLabel`}),`, smart positioning is disabled. The annotation will be positioned exactly at the data point coordinates without automatic boundary adjustments.`]}),`
`,(0,v.jsx)(o,{of:l}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`const DeployIcon = () => (
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
`,(0,v.jsx)(t.h3,{id:`interactive-popovers`,children:`Interactive Popovers`}),`
`,(0,v.jsxs)(t.p,{children:[`Add rich interactive content with `,(0,v.jsx)(t.code,{children:`renderLabelPopover`}),`:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<LineChart.Annotation
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
`,(0,v.jsxs)(t.p,{children:[`When both `,(0,v.jsx)(t.code,{children:`renderLabel`}),` and `,(0,v.jsx)(t.code,{children:`renderLabelPopover`}),` are provided, the label becomes clickable and opens the popover content.`]}),`
`,(0,v.jsxs)(t.p,{children:[`Popovers use the native `,(0,v.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`HTML Popover API`}),` with `,(0,v.jsx)(t.code,{children:`popovertarget`}),` and `,(0,v.jsx)(t.code,{children:`popover`}),` attributes, which provides built-in show/hide behavior, focus management, and accessibility features. The implementation includes fallback handling for test environments and browsers that don't support the `,(0,v.jsx)(t.code,{children:`:popover-open`}),` pseudo-class.`]}),`
`,(0,v.jsxs)(t.p,{children:[`Due to `,(0,v.jsx)(t.a,{href:`https://bugs.webkit.org/show_bug.cgi?id=23113`,rel:`nofollow`,children:`Safari's foreignObject positioning bug`}),`, interactive popovers are positioned in the viewport center rather than next to the annotation. This ensures functionality while the browser issue is resolved.`]}),`
`,(0,v.jsx)(t.h2,{id:`advanced-features`,children:`Advanced Features`}),`
`,(0,v.jsx)(t.h3,{id:`smart-positioning`,children:`Smart Positioning`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Basic annotations`}),` (without custom `,(0,v.jsx)(t.code,{children:`renderLabel`}),`) automatically adjust their position to stay within chart boundaries:`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Horizontal overflow`}),`: Labels flip to the left when approaching the right edge`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Vertical overflow`}),`: Labels reposition above or below to avoid clipping`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Multi-line content`}),`: Height is measured dynamically for accurate positioning`]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Note`}),`: Smart positioning is `,(0,v.jsx)(t.strong,{children:`not available`}),` for custom annotations using `,(0,v.jsx)(t.code,{children:`renderLabel`}),`. Custom annotations are positioned at the exact data point coordinates with `,(0,v.jsx)(t.code,{children:`dx: 0, dy: 0`}),` offset.`]}),`
`,(0,v.jsx)(t.h3,{id:`label-positioning`,children:`Label Positioning`}),`
`,(0,v.jsx)(t.p,{children:`Control label placement with positioning options:`}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`// Position at chart edges
<LineChart.Annotation
	styles={{
		label: {
			x: 'start', // 'start', 'end', or number
			y: 'start', // 'start', 'end', or number
		}
	}}
/>`}),`
`,(0,v.jsx)(t.h3,{id:`zero-value-support`,children:`Zero Value Support`}),`
`,(0,v.jsxs)(t.p,{children:[`Annotations work correctly with zero values (unlike some chart libraries that treat `,(0,v.jsx)(t.code,{children:`0`}),` as falsy):`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`<LineChart.Annotation
	datum={{ date: new Date('2024-01-01'), value: 0 }}
	title="Baseline"
	subtitle="Starting point"
/>`}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Annotations are focusable with Tab navigation`}),`
`,(0,v.jsx)(t.li,{children:`Interactive popovers can be opened with Enter or Space`}),`
`,(0,v.jsx)(t.li,{children:`Popovers can be closed with Escape key`}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`screen-reader-support`,children:`Screen Reader Support`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Interactive annotation buttons have `,(0,v.jsx)(t.code,{children:`aria-label`}),` attributes`]}),`
`,(0,v.jsx)(t.li,{children:`Close buttons have descriptive labels`}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Note`}),`: Custom popover content does not currently have explicit ARIA roles or `,(0,v.jsx)(t.code,{children:`aria-describedby`}),` relationships. Content relies on the native Popover API's built-in accessibility features.`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Focus returns to the annotation trigger when closed`}),`
`,(0,v.jsx)(t.li,{children:`Visual focus indicators are provided`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`examples-and-stories`,children:`Examples and Stories`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`?path=/story/js-packages-charts-library-charts-line-chart-annotations--default`,children:(0,v.jsx)(t.strong,{children:`Default`})}),`: Basic circle annotations`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`?path=/story/js-packages-charts-library-charts-line-chart-annotations--vertical`,children:(0,v.jsx)(t.strong,{children:`Vertical`})}),`: Vertical line annotations`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`?path=/story/js-packages-charts-library-charts-line-chart-annotations--horizontal`,children:(0,v.jsx)(t.strong,{children:`Horizontal`})}),`: Horizontal line annotations`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`?path=/story/js-packages-charts-library-charts-line-chart-annotations--mixed`,children:(0,v.jsx)(t.strong,{children:`Mixed`})}),`: Combined annotation types`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`?path=/story/js-packages-charts-library-charts-line-chart-annotations--colored`,children:(0,v.jsx)(t.strong,{children:`Colored`})}),`: Custom styling examples`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.a,{href:`?path=/story/js-packages-charts-library-charts-line-chart-annotations--custom-vertical`,children:(0,v.jsx)(t.strong,{children:`Custom Vertical`})}),`: Custom interactive annotations`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`migration-from-legacy-api`,children:`Migration from Legacy API`}),`
`,(0,v.jsxs)(t.p,{children:[`If you're upgrading from the deprecated `,(0,v.jsx)(t.code,{children:`annotations`}),` prop:`]}),`
`,(0,v.jsx)(a,{language:`jsx`,code:`// Old API (deprecated)
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
`,(0,v.jsx)(t.p,{children:`The new compound component pattern provides better TypeScript support, more flexibility, and clearer composition.`})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m()}))();export{_ as default};