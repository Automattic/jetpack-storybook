import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{gt as n}from"./esm-DHTiNPSn.js";import{a as r,n as i}from"./blocks-ByQd_mAU.js";import{t as a}from"./mdx-react-shim-C-nnfKny.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`JS Packages/Charts Library/Components/Legend/API Reference`}),`
`,(0,c.jsx)(t.h1,{id:`legend-api-reference`,children:`Legend API Reference`}),`
`,(0,c.jsx)(t.p,{children:`This document provides comprehensive API documentation for the Legend component.`}),`
`,(0,c.jsx)(t.h2,{id:`legend-component`,children:`Legend Component`}),`
`,(0,c.jsx)(t.p,{children:`The Legend component displays chart legends with support for both standalone usage and chart context integration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Props:`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Prop`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`items`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`BaseLegendItem[]`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsxs)(t.td,{children:[`Array of legend items to display. Optional when using `,(0,c.jsx)(t.code,{children:`chartId`}),`.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`chartId`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`ID of a chart to retrieve legend data from context. When provided, the legend automatically retrieves items from the chart.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`orientation`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'horizontal' | 'vertical'`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'horizontal'`})}),(0,c.jsx)(t.td,{children:`Controls the layout direction of legend items.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`position`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'top' | 'bottom'`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'bottom'`})}),(0,c.jsx)(t.td,{children:`Position of the legend relative to the chart content. Controls which slot the legend renders in when using the composition API.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`alignment`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'start' | 'center' | 'end'`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'center'`})}),(0,c.jsx)(t.td,{children:`Horizontal alignment of legend items within the legend container.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`itemClassName`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class name for legend items. Allows consumers to customize individual legend item styling.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`render`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(items: BaseLegendItem[]) => ReactNode`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Function for rendering a custom legend layout. Receives the legend items array and returns custom JSX.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`className`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class name for the legend container.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shape`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string | ShapeType`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'rect'`})}),(0,c.jsx)(t.td,{children:`Shape of the legend glyph. Common values: 'rect', 'circle', 'line'.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`fill`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(item: LegendItem) => string`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`valueOrIdentityString`})}),(0,c.jsx)(t.td,{children:`Function that returns the fill color for each legend shape.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`size`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(item: LegendItem) => string | number`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`valueOrIdentityString`})}),(0,c.jsx)(t.td,{children:`Function that returns the size for each legend shape.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelFormat`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(item: unknown) => unknown`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`valueOrIdentity`})}),(0,c.jsx)(t.td,{children:`Function to format legend labels.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelTransform`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`(label: LegendItem) => LegendItem`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelTransformFactory`})}),(0,c.jsx)(t.td,{children:`Function to transform legend label objects.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`itemStyles`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`LegendItemStyles`})}),(0,c.jsx)(t.td,{children:`see below`}),(0,c.jsxs)(t.td,{children:[`CSS styles for each legend item. See `,(0,c.jsx)(t.code,{children:`LegendItemStyles`}),` type below.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelClassName`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`string`})}),(0,c.jsx)(t.td,{children:`-`}),(0,c.jsx)(t.td,{children:`Additional CSS class name for legend labels.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`labelStyles`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`LegendLabelStyles`})}),(0,c.jsx)(t.td,{children:`see below`}),(0,c.jsxs)(t.td,{children:[`CSS styles for legend labels. See `,(0,c.jsx)(t.code,{children:`LegendLabelStyles`}),` type below.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shapeStyles`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`LegendShapeStyles`})}),(0,c.jsx)(t.td,{children:`see below`}),(0,c.jsxs)(t.td,{children:[`Styles for legend shapes. See `,(0,c.jsx)(t.code,{children:`LegendShapeStyles`}),` type below.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`interactive`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`false`})}),(0,c.jsxs)(t.td,{children:[`Enable interactive legend items that can toggle series visibility. Requires `,(0,c.jsx)(t.code,{children:`chartId`}),` and `,(0,c.jsx)(t.code,{children:`GlobalChartsProvider`}),`.`]})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`style-types`,children:`Style Types`}),`
`,(0,c.jsx)(t.h3,{id:`legenditemstyles`,children:`LegendItemStyles`}),`
`,(0,c.jsx)(t.p,{children:`Styles applied to each legend item.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type LegendItemStyles = {
	margin?: CSSProperties['margin'];  // Default: '0'
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'; // Default: 'row'
};
`})}),`
`,(0,c.jsx)(t.h3,{id:`legendlabelstyles`,children:`LegendLabelStyles`}),`
`,(0,c.jsx)(t.p,{children:`Styles and text overflow behavior for legend labels.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type LegendLabelStyles = Pick< CSSProperties, 'justifyContent' | 'flex' | 'margin' > & {
	maxWidth?: string;                    // CSS value (e.g. '200px', '50%', '10rem')
	textOverflow?: 'ellipsis' | 'wrap';   // Default: 'wrap'
};
// Other defaults: { justifyContent: 'flex-start', flex: '0 0 auto', margin: '0 4px' }
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`maxWidth`})}),`: Maximum width for legend label text. When set, text overflow behavior is controlled by `,(0,c.jsx)(t.code,{children:`textOverflow`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`textOverflow`})}),`: `,(0,c.jsx)(t.code,{children:`'ellipsis'`}),` truncates with ellipsis (ideal for widgets/small devices), `,(0,c.jsx)(t.code,{children:`'wrap'`}),` wraps text to multiple lines (default, ideal for larger displays).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`legendshapestyles`,children:`LegendShapeStyles`}),`
`,(0,c.jsx)(t.p,{children:`Styles for legend shapes (glyphs).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type LegendShapeStyles = {
	width?: number;                      // Default: 16
	height?: number;                     // Default: 16
	margin?: CSSProperties['margin'];    // Default: '2px 4px 2px 0'
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`baselegenditem-type`,children:`BaseLegendItem Type`}),`
`,(0,c.jsx)(t.p,{children:`Represents a single item in the legend.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type BaseLegendItem = {
	/** Display label for the legend item */
	label: string;

	/** Value to display next to the label (e.g., percentage, count) */
	value?: number | string;

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
`,(0,c.jsx)(t.h3,{id:`baselegenditem-properties`,children:`BaseLegendItem Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`label`})}),` (required): The text displayed for this legend entry`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`value`})}),` (optional): The value shown next to the label (often a percentage or count)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`color`})}),` (required): The color used for the legend glyph/shape`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`glyphSize`})}),` (optional): Custom size for the glyph in pixels. When provided, the glyph will be rendered at `,(0,c.jsx)(t.code,{children:`glyphSize * 2`}),` dimensions`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`renderGlyph`})}),` (optional): Custom function to render the glyph. Receives GlyphProps and returns a React node. Useful for custom symbols or complex glyphs`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`shapeStyle`})}),` (optional): Additional CSS and line styles to apply to the shape. Supports standard CSSProperties plus visx LineStyles`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`glyphprops-type`,children:`GlyphProps Type`}),`
`,(0,c.jsx)(t.p,{children:`Props passed to custom glyph render functions.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type GlyphProps< Datum extends object > = {
	key: string;
	datum: Datum;
	index: number;
	color: string;
	size: number;
	x: number;
	y: number;
};
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};