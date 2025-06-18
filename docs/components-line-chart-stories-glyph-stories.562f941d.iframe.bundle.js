"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1904],{"../charts/src/components/line-chart/stories/glyph.stories.tsx":(T,g,s)=>{s.r(g),s.d(g,{Custom:()=>l,CustomPerDataPoint:()=>c,CustomSvg:()=>i,InTooltip:()=>p,Start:()=>a,__namedExportsOrder:()=>C,default:()=>S});var y=s("../../../node_modules/.pnpm/@visx+glyph@3.12.0_react@18.3.1/node_modules/@visx/glyph/esm/glyphs/GlyphStar.js"),P=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=s("../charts/src/providers/theme/theme-provider.tsx"),f=s("../charts/src/components/line-chart/line-chart.tsx"),u=s("../charts/src/components/line-chart/stories/config.tsx"),t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),j=`import { GlyphStar } from '@visx/glyph';
import React from 'react';
import { useChartTheme } from '../../../providers/theme';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import type { DataPointDate } from '../../../types';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import type { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip';

const meta: Meta< typeof LineChart > = {
	...lineChartMetaArgs,
	title: 'JS Packages/Charts/Types/Line Chart/Glyphs',
} satisfies Meta< typeof LineChart >;

export default meta;

const Template: StoryFn< typeof LineChart > = args => <LineChart { ...args } />;

const glyphStoryArgs = {
	...lineChartStoryArgs,
	withStartGlyphs: true,
};

export const Start: StoryObj< typeof LineChart > = Template.bind( {} );
Start.args = {
	...glyphStoryArgs,
};

export const Custom: StoryObj< typeof LineChart > = Template.bind( {} );
Custom.args = {
	...glyphStoryArgs,
	showLegend: true,
	withLegendGlyph: true,
	renderGlyph: ( { color, size, x, y } ) => {
		return <GlyphStar top={ y } left={ x } size={ size * size } fill={ color } />;
	},
	glyphStyle: {
		radius: 10,
	},
};

const CustomStarGlyph = ( { color, size, x, y } ) => {
	const hasXY = typeof x === 'number' && typeof y === 'number' && ( x !== 0 || y !== 0 );
	const groupProps = hasXY ? { transform: \`translate(\${ x }, \${ y })\` } : {};
	return (
		<g { ...groupProps }>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={ size * 2 }
				height={ size * 2 }
				viewBox="0 0 24 24"
				style={ { overflow: 'visible', pointerEvents: 'none' } }
			>
				<path
					d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
					fill={ color }
					stroke={ color }
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					transform="translate(-12, -12)"
				/>
			</svg>
		</g>
	);
};

export const CustomSvg: StoryObj< typeof LineChart > = Template.bind( {} );
CustomSvg.args = {
	...glyphStoryArgs,
	showLegend: true,
	withLegendGlyph: true,
	renderGlyph: ( { color, size, x, y } ) => (
		<CustomStarGlyph color={ color } size={ size } x={ x } y={ y } />
	),
	glyphStyle: {
		radius: 8,
	},
};

const ToolTipWithGlyph = ( { tooltipData }: RenderTooltipParams< DataPointDate > ) => {
	const providerTheme = useChartTheme();

	return (
		<div>
			<div style={ { marginBottom: '0.5rem' } }>
				{ tooltipData?.nearestDatum?.datum?.date?.toLocaleDateString() }
			</div>
			<div>
				{ Object.entries( tooltipData?.datumByKey || {} ).map( ( [ key, value ], index ) => {
					const { datum } = value as { datum: { value: number } };
					return (
						<div key={ key }>
							<div
								style={ {
									display: 'flex',
									alignItems: 'center',
									gap: '0.5rem',
									marginBottom: '0.2rem',
								} }
							>
								<svg width={ 20 } height={ 20 }>
									<GlyphStar
										size={ 10 * 10 }
										top={ 10 }
										left={ 10 }
										fill={ '#fff' }
										stroke={ providerTheme.colors[ index % providerTheme.colors.length ] }
									/>
								</svg>
								{ key }: { datum.value }
							</div>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export const InTooltip: StoryObj< typeof LineChart > = Template.bind( {} );
InTooltip.args = {
	...glyphStoryArgs,
	renderGlyph: ( { color, size, x, y } ) => {
		return <GlyphStar top={ y } left={ x } size={ size * size } fill={ '#fff' } stroke={ color } />;
	},
	glyphStyle: {
		radius: 10,
	},
	renderTooltip: ToolTipWithGlyph,
};

export const CustomPerDataPoint: StoryObj< typeof LineChart > = Template.bind( {} );
CustomPerDataPoint.args = {
	...glyphStoryArgs,
	showLegend: true,
	withStartGlyphs: true,
	withLegendGlyph: true,
	themeName: 'customStorybook', // Mock prop used to switch the rendered theme in the storybook.
	glyphStyle: {
		radius: 8,
	},
};
`,w={Start:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},Custom:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},CustomSvg:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},InTooltip:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},CustomPerDataPoint:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}}};const S={parameters:{storySource:{source:`/* wp:polyfill */
/* wp:polyfill esnext.iterator.map */
import { GlyphStar } from '@visx/glyph';
import React from 'react';
import { useChartTheme } from '../../../providers/theme';
import LineChart from '../line-chart';
import { lineChartMetaArgs, lineChartStoryArgs } from './config';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  ...lineChartMetaArgs,
  title: 'JS Packages/Charts/Types/Line Chart/Glyphs'
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(LineChart, {
  ...args
});
const glyphStoryArgs = {
  ...lineChartStoryArgs,
  withStartGlyphs: true
};
export const Start = Template.bind({});
Start.args = {
  ...glyphStoryArgs
};
export const Custom = Template.bind({});
Custom.args = {
  ...glyphStoryArgs,
  showLegend: true,
  withLegendGlyph: true,
  renderGlyph: ({
    color,
    size,
    x,
    y
  }) => {
    return /*#__PURE__*/_jsx(GlyphStar, {
      top: y,
      left: x,
      size: size * size,
      fill: color
    });
  },
  glyphStyle: {
    radius: 10
  }
};
const CustomStarGlyph = ({
  color,
  size,
  x,
  y
}) => {
  const hasXY = typeof x === 'number' && typeof y === 'number' && (x !== 0 || y !== 0);
  const groupProps = hasXY ? {
    transform: \`translate(\${x}, \${y})\`
  } : {};
  return /*#__PURE__*/_jsx("g", {
    ...groupProps,
    children: /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size * 2,
      height: size * 2,
      viewBox: "0 0 24 24",
      style: {
        overflow: 'visible',
        pointerEvents: 'none'
      },
      children: /*#__PURE__*/_jsx("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
        fill: color,
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transform: "translate(-12, -12)"
      })
    })
  });
};
export const CustomSvg = Template.bind({});
CustomSvg.args = {
  ...glyphStoryArgs,
  showLegend: true,
  withLegendGlyph: true,
  renderGlyph: ({
    color,
    size,
    x,
    y
  }) => /*#__PURE__*/_jsx(CustomStarGlyph, {
    color: color,
    size: size,
    x: x,
    y: y
  }),
  glyphStyle: {
    radius: 8
  }
};
const ToolTipWithGlyph = ({
  tooltipData
}) => {
  const providerTheme = useChartTheme();
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        marginBottom: '0.5rem'
      },
      children: tooltipData?.nearestDatum?.datum?.date?.toLocaleDateString()
    }), /*#__PURE__*/_jsx("div", {
      children: Object.entries(tooltipData?.datumByKey || {}).map(([key, value], index) => {
        const {
          datum
        } = value;
        return /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.2rem'
            },
            children: [/*#__PURE__*/_jsx("svg", {
              width: 20,
              height: 20,
              children: /*#__PURE__*/_jsx(GlyphStar, {
                size: 10 * 10,
                top: 10,
                left: 10,
                fill: '#fff',
                stroke: providerTheme.colors[index % providerTheme.colors.length]
              })
            }), key, ": ", datum.value]
          })
        }, key);
      })
    })]
  });
};
export const InTooltip = Template.bind({});
InTooltip.args = {
  ...glyphStoryArgs,
  renderGlyph: ({
    color,
    size,
    x,
    y
  }) => {
    return /*#__PURE__*/_jsx(GlyphStar, {
      top: y,
      left: x,
      size: size * size,
      fill: '#fff',
      stroke: color
    });
  },
  glyphStyle: {
    radius: 10
  },
  renderTooltip: ToolTipWithGlyph
};
export const CustomPerDataPoint = Template.bind({});
CustomPerDataPoint.args = {
  ...glyphStoryArgs,
  showLegend: true,
  withStartGlyphs: true,
  withLegendGlyph: true,
  themeName: 'customStorybook',
  // Mock prop used to switch the rendered theme in the storybook.
  glyphStyle: {
    radius: 8
  }
};`,locationsMap:{start:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},custom:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},"custom-svg":{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},"in-tooltip":{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},"custom-per-data-point":{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}}}}},...u.N,title:"JS Packages/Charts/Types/Line Chart/Glyphs"},h=n=>(0,t.jsx)(f.A,{...n}),d={...u.p,withStartGlyphs:!0},a=h.bind({});a.args={...d};const l=h.bind({});l.args={...d,showLegend:!0,withLegendGlyph:!0,renderGlyph:({color:n,size:e,x:r,y:o})=>(0,t.jsx)(y.A,{top:o,left:r,size:e*e,fill:n}),glyphStyle:{radius:10}};const v=({color:n,size:e,x:r,y:o})=>{const m=typeof r=="number"&&typeof o=="number"&&(r!==0||o!==0)?{transform:`translate(${r}, ${o})`}:{};return(0,t.jsx)("g",{...m,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e*2,height:e*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,t.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:n,stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},i=h.bind({});i.args={...d,showLegend:!0,withLegendGlyph:!0,renderGlyph:({color:n,size:e,x:r,y:o})=>(0,t.jsx)(v,{color:n,size:e,x:r,y:o}),glyphStyle:{radius:8}};const L=({tooltipData:n})=>{const e=(0,x.RW)();return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{marginBottom:"0.5rem"},children:n?.nearestDatum?.datum?.date?.toLocaleDateString()}),(0,t.jsx)("div",{children:Object.entries(n?.datumByKey||{}).map(([r,o],_)=>{const{datum:m}=o;return(0,t.jsx)("div",{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.2rem"},children:[(0,t.jsx)("svg",{width:20,height:20,children:(0,t.jsx)(y.A,{size:10*10,top:10,left:10,fill:"#fff",stroke:e.colors[_%e.colors.length]})}),r,": ",m.value]})},r)})})]})},p=h.bind({});p.args={...d,renderGlyph:({color:n,size:e,x:r,y:o})=>(0,t.jsx)(y.A,{top:o,left:r,size:e*e,fill:"#fff",stroke:n}),glyphStyle:{radius:10},renderTooltip:L};const c=h.bind({});c.args={...d,showLegend:!0,withStartGlyphs:!0,withLegendGlyph:!0,themeName:"customStorybook",glyphStyle:{radius:8}};const C=["Start","Custom","CustomSvg","InTooltip","CustomPerDataPoint"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...a.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...l.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...i.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...c.parameters?.docs?.source}}}}}]);
