"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3857],{"../charts/src/components/legend/stories/index.api.mdx"(o,s,d){d.r(s),d.d(s,{default:()=>c});var h=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=d("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=d("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=d("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_esbuild@0.25.9_storybook@10.2.11_@te_623b11407ff81c3407704a8a948465b9/node_modules/@storybook/addon-docs/dist/blocks.js");function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{title:"JS Packages/Charts Library/Components/Legend/API Reference"}),`
`,(0,e.jsx)(n.h1,{id:"legend-api-reference",children:"Legend API Reference"}),`
`,(0,e.jsx)(n.p,{children:"This document provides comprehensive API documentation for the Legend component."}),`
`,(0,e.jsx)(n.h2,{id:"legend-component",children:"Legend Component"}),`
`,(0,e.jsx)(n.p,{children:"The Legend component displays chart legends with support for both standalone usage and chart context integration."}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"Props:"})}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Type"}),(0,e.jsx)(n.th,{children:"Default"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"items"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"BaseLegendItem[]"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsxs)(n.td,{children:["Array of legend items to display. Optional when using ",(0,e.jsx)(n.code,{children:"chartId"}),"."]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"chartId"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"ID of a chart to retrieve legend data from context. When provided, the legend automatically retrieves items from the chart."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"orientation"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal' | 'vertical'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'horizontal'"})}),(0,e.jsx)(n.td,{children:"Controls the layout direction of legend items."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"position"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'top' | 'bottom'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'bottom'"})}),(0,e.jsx)(n.td,{children:"Vertical position of the legend. Note: 'left' and 'right' positioning support planned for future implementation."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"alignment"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'start' | 'center' | 'end'"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'center'"})}),(0,e.jsx)(n.td,{children:"Horizontal alignment of legend items within the legend container."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"itemClassName"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name for legend items. Allows consumers to customize individual legend item styling."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"render"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(items: BaseLegendItem[]) => ReactNode"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Function for rendering a custom legend layout. Receives the legend items array and returns custom JSX."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"className"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name for the legend container."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"shape"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string | ShapeType"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"'rect'"})}),(0,e.jsx)(n.td,{children:"Shape of the legend glyph. Common values: 'rect', 'circle', 'line'."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"fill"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(item: LegendItem) => string"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"valueOrIdentityString"})}),(0,e.jsx)(n.td,{children:"Function that returns the fill color for each legend shape."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"size"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(item: LegendItem) => string | number"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"valueOrIdentityString"})}),(0,e.jsx)(n.td,{children:"Function that returns the size for each legend shape."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelFormat"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(item: unknown) => unknown"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"valueOrIdentity"})}),(0,e.jsx)(n.td,{children:"Function to format legend labels."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelTransform"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"(label: LegendItem) => LegendItem"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelTransformFactory"})}),(0,e.jsx)(n.td,{children:"Function to transform legend label objects."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"itemStyles"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendItemStyles"})}),(0,e.jsx)(n.td,{children:"see below"}),(0,e.jsxs)(n.td,{children:["CSS styles for each legend item. See ",(0,e.jsx)(n.code,{children:"LegendItemStyles"})," type below."]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelClassName"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"string"})}),(0,e.jsx)(n.td,{children:"-"}),(0,e.jsx)(n.td,{children:"Additional CSS class name for legend labels."})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"labelStyles"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendLabelStyles"})}),(0,e.jsx)(n.td,{children:"see below"}),(0,e.jsxs)(n.td,{children:["CSS styles for legend labels. See ",(0,e.jsx)(n.code,{children:"LegendLabelStyles"})," type below."]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"shapeStyles"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"LegendShapeStyles"})}),(0,e.jsx)(n.td,{children:"see below"}),(0,e.jsxs)(n.td,{children:["Styles for legend shapes. See ",(0,e.jsx)(n.code,{children:"LegendShapeStyles"})," type below."]})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"interactive"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"boolean"})}),(0,e.jsx)(n.td,{children:(0,e.jsx)(n.code,{children:"false"})}),(0,e.jsxs)(n.td,{children:["Enable interactive legend items that can toggle series visibility. Requires ",(0,e.jsx)(n.code,{children:"chartId"})," and ",(0,e.jsx)(n.code,{children:"GlobalChartsProvider"}),"."]})]})]})]}),`
`,(0,e.jsx)(n.h2,{id:"style-types",children:"Style Types"}),`
`,(0,e.jsx)(n.h3,{id:"legenditemstyles",children:"LegendItemStyles"}),`
`,(0,e.jsx)(n.p,{children:"Styles applied to each legend item."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type LegendItemStyles = {
	margin?: CSSProperties['margin'];  // Default: '0'
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'; // Default: 'row'
};
`})}),`
`,(0,e.jsx)(n.h3,{id:"legendlabelstyles",children:"LegendLabelStyles"}),`
`,(0,e.jsx)(n.p,{children:"Styles and text overflow behavior for legend labels."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type LegendLabelStyles = Pick< CSSProperties, 'justifyContent' | 'flex' | 'margin' > & {
	maxWidth?: string;                    // CSS value (e.g. '200px', '50%', '10rem')
	textOverflow?: 'ellipsis' | 'wrap';   // Default: 'wrap'
};
// Other defaults: { justifyContent: 'flex-start', flex: '0 0 auto', margin: '0 4px' }
`})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"maxWidth"})}),": Maximum width for legend label text. When set, text overflow behavior is controlled by ",(0,e.jsx)(n.code,{children:"textOverflow"}),"."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"textOverflow"})}),": ",(0,e.jsx)(n.code,{children:"'ellipsis'"})," truncates with ellipsis (ideal for widgets/small devices), ",(0,e.jsx)(n.code,{children:"'wrap'"})," wraps text to multiple lines (default, ideal for larger displays)."]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"legendshapestyles",children:"LegendShapeStyles"}),`
`,(0,e.jsx)(n.p,{children:"Styles for legend shapes (glyphs)."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type LegendShapeStyles = {
	width?: number;                      // Default: 16
	height?: number;                     // Default: 16
	margin?: CSSProperties['margin'];    // Default: '2px 4px 2px 0'
};
`})}),`
`,(0,e.jsx)(n.h2,{id:"baselegenditem-type",children:"BaseLegendItem Type"}),`
`,(0,e.jsx)(n.p,{children:"Represents a single item in the legend."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type BaseLegendItem = {
	/** Display label for the legend item */
	label: string;

	/** Value to display next to the label (e.g., percentage, count) */
	value: number | string;

	/** Color for the legend glyph */
	color: string;

	/** Optional custom size for the glyph */
	glyphSize?: number;

	/** Optional custom rendering function for the glyph */
	renderGlyph?: < Datum extends object >( props: GlyphProps< Datum > ) => ReactNode;

	/** Optional custom styles for the shape */
	shapeStyle?: CSSProperties & LineStyles;
};
`})}),`
`,(0,e.jsx)(n.h3,{id:"baselegenditem-properties",children:"BaseLegendItem Properties"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"label"})})," (required): The text displayed for this legend entry"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"value"})})," (required): The value shown next to the label (often a percentage or count)"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"color"})})," (required): The color used for the legend glyph/shape"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"glyphSize"})})," (optional): Custom size for the glyph in pixels. When provided, the glyph will be rendered at ",(0,e.jsx)(n.code,{children:"glyphSize * 2"})," dimensions"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"renderGlyph"})})," (optional): Custom function to render the glyph. Receives GlyphProps and returns a React node. Useful for custom symbols or complex glyphs"]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.code,{children:"shapeStyle"})})," (optional): Additional CSS and line styles to apply to the shape. Supports standard CSSProperties plus visx LineStyles"]}),`
`]}),`
`,(0,e.jsx)(n.h2,{id:"glyphprops-type",children:"GlyphProps Type"}),`
`,(0,e.jsx)(n.p,{children:"Props passed to custom glyph render functions."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-typescript",children:`type GlyphProps< Datum extends object > = {
	key: string;
	datum: Datum;
	index: number;
	color: string;
	size: number;
	x: number;
	y: number;
};
`})})]})}function c(t={}){const{wrapper:n}={...(0,l.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(r,{...t})}):r(t)}}}]);
