"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1904],{"../charts/src/components/line-chart/stories/glyph.stories.tsx":(j,v,l)=>{l.r(v),l.d(v,{Custom:()=>w,CustomSvg:()=>D,InTooltip:()=>p,Start:()=>i,__namedExportsOrder:()=>k,default:()=>B});var x=l("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),r=l.n(x),u=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=l("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=l.n(m),S=l("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol.js"),_=l("../../../node_modules/.pnpm/d3-shape@1.3.7/node_modules/d3-shape/src/symbol/star.js"),z=l("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function T(e){var t=e.top,a=t===void 0?0:t,n=e.left,s=n===void 0?0:n,o=e.className,C=e.children;return u.createElement(z.A,{className:h()("visx-glyph",o),top:a,left:s},C)}T.propTypes={top:r().number,left:r().number,className:r().string,children:r().node};var G=["children","className","top","left","size"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},L.apply(this,arguments)}function P(e,t){if(e==null)return{};var a={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(a[s]=e[s]);return a}function y(e){var t=e.children,a=e.className,n=e.top,s=e.left,o=e.size,C=P(e,G),c=(0,S.A)();return c.type(_.A),(typeof o=="number"||o)&&c.size(o),t?u.createElement(u.Fragment,null,t({path:c})):u.createElement(T,{top:n,left:s},u.createElement("path",L({className:h()("visx-glyph-star",a),d:c()||""},C)))}y.propTypes={children:r().func,className:r().string,top:r().number,left:r().number,size:r().oneOfType([r().number,r().func])};var E=l("../charts/src/providers/theme/theme-provider.tsx"),A=l("../charts/src/components/line-chart/line-chart.tsx"),b=l("../charts/src/components/line-chart/stories/config.tsx"),d=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),M=`import { GlyphStar } from '@visx/glyph';
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
`,U={Start:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},Custom:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},CustomSvg:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},InTooltip:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}}};const B={parameters:{storySource:{source:`/* wp:polyfill */
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
};`,locationsMap:{start:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},custom:{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},"custom-svg":{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}},"in-tooltip":{startLoc:{col:17,line:14},endLoc:{col:2,line:16},startBody:{col:17,line:14},endBody:{col:2,line:16}}}}},...b.N,title:"JS Packages/Charts/Types/Line Chart/Glyphs"},g=e=>(0,d.jsx)(A.A,{...e}),f={...b.p,withStartGlyphs:!0},i=g.bind({});i.args={...f};const w=g.bind({});w.args={...f,showLegend:!0,withLegendGlyph:!0,renderGlyph:({color:e,size:t,x:a,y:n})=>(0,d.jsx)(y,{top:n,left:a,size:t*t,fill:e}),glyphStyle:{radius:10}};const O=({color:e,size:t,x:a,y:n})=>{const o=typeof a=="number"&&typeof n=="number"&&(a!==0||n!==0)?{transform:`translate(${a}, ${n})`}:{};return(0,d.jsx)("g",{...o,children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t*2,height:t*2,viewBox:"0 0 24 24",style:{overflow:"visible",pointerEvents:"none"},children:(0,d.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",fill:e,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -12)"})})})},D=g.bind({});D.args={...f,showLegend:!0,withLegendGlyph:!0,renderGlyph:({color:e,size:t,x:a,y:n})=>(0,d.jsx)(O,{color:e,size:t,x:a,y:n}),glyphStyle:{radius:8}};const R=({tooltipData:e})=>{const t=(0,E.RW)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{marginBottom:"0.5rem"},children:e?.nearestDatum?.datum?.date?.toLocaleDateString()}),(0,d.jsx)("div",{children:Object.entries(e?.datumByKey||{}).map(([a,n],s)=>{const{datum:o}=n;return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.2rem"},children:[(0,d.jsx)("svg",{width:20,height:20,children:(0,d.jsx)(y,{size:10*10,top:10,left:10,fill:"#fff",stroke:t.colors[s%t.colors.length]})}),a,": ",o.value]})},a)})})]})},p=g.bind({});p.args={...f,renderGlyph:({color:e,size:t,x:a,y:n})=>(0,d.jsx)(y,{top:n,left:a,size:t*t,fill:"#fff",stroke:e}),glyphStyle:{radius:10},renderTooltip:R};const k=["Start","Custom","CustomSvg","InTooltip"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...i.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...D.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <LineChart {...args} />",...p.parameters?.docs?.source}}}},"../charts/src/components/line-chart/stories/config.tsx":(j,v,l)=>{l.d(v,{N:()=>h,p:()=>S});var x=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=l("../charts/src/components/line-chart/line-chart.tsx"),u=l("../charts/src/components/line-chart/stories/sample-data.ts"),m=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h={title:"JS Packages/Charts/Types/Line Chart",component:r.A,parameters:{layout:"centered"},decorators:[_=>(0,m.jsx)("div",{style:{resize:"both",overflow:"auto",padding:"2rem",width:"800px",maxWidth:"1200px",border:"1px dashed #ccc",display:"inline-block"},children:(0,m.jsx)(_,{})})],argTypes:{maxWidth:{control:{type:"number",min:100,max:1200}},aspectRatio:{control:{type:"number",min:0,max:1}},resizeDebounceTime:{control:{type:"number",min:0,max:1e4}}}},S={data:u.A,showLegend:!1,legendOrientation:"horizontal",withGradientFill:!1,smoothing:!0,maxWidth:1200,aspectRatio:.5,resizeDebounceTime:300,options:{axis:{x:{orientation:"bottom"},y:{orientation:"left"}}},withTooltips:!0}},"../charts/src/components/line-chart/stories/sample-data.ts":(j,v,l)=>{l.d(v,{A:()=>r});const r=[{label:"London",data:[{date:new Date("2022-01-01"),value:7.8},{date:new Date("2022-01-08"),value:7.2},{date:new Date("2022-01-15"),value:6.9},{date:new Date("2022-01-22"),value:6.5},{date:new Date("2022-01-29"),value:7.1},{date:new Date("2022-02-05"),value:8.3},{date:new Date("2022-02-12"),value:8.9},{date:new Date("2022-02-19"),value:9.2},{date:new Date("2022-02-26"),value:8.7},{date:new Date("2022-03-05"),value:9.4},{date:new Date("2022-03-12"),value:10.2},{date:new Date("2022-03-19"),value:11.5},{date:new Date("2022-03-26"),value:12.3},{date:new Date("2022-04-02"),value:13.1},{date:new Date("2022-04-09"),value:13.8},{date:new Date("2022-04-16"),value:14.6},{date:new Date("2022-04-23"),value:15.2},{date:new Date("2022-04-30"),value:15.9},{date:new Date("2022-05-07"),value:16.7},{date:new Date("2022-05-14"),value:17.4},{date:new Date("2022-05-21"),value:18.2},{date:new Date("2022-05-28"),value:18.9},{date:new Date("2022-06-04"),value:19.7},{date:new Date("2022-06-11"),value:20.5},{date:new Date("2022-06-18"),value:21.3},{date:new Date("2022-06-25"),value:22.1},{date:new Date("2022-07-02"),value:22.8},{date:new Date("2022-07-09"),value:23.6},{date:new Date("2022-07-16"),value:24.4},{date:new Date("2022-07-23"),value:25.2},{date:new Date("2022-07-30"),value:24.8},{date:new Date("2022-08-06"),value:24.1},{date:new Date("2022-08-13"),value:23.5},{date:new Date("2022-08-20"),value:22.8},{date:new Date("2022-08-27"),value:21.9},{date:new Date("2022-09-03"),value:20.7},{date:new Date("2022-09-10"),value:19.5},{date:new Date("2022-09-17"),value:18.3},{date:new Date("2022-09-24"),value:17.1},{date:new Date("2022-10-01"),value:16.2},{date:new Date("2022-10-08"),value:15.1},{date:new Date("2022-10-15"),value:14.2},{date:new Date("2022-10-22"),value:13.1},{date:new Date("2022-10-29"),value:12.2},{date:new Date("2022-11-05"),value:11.1},{date:new Date("2022-11-12"),value:10.2},{date:new Date("2022-11-19"),value:9.1},{date:new Date("2022-11-26"),value:8.2},{date:new Date("2022-12-03"),value:7.1},{date:new Date("2022-12-10"),value:6.2},{date:new Date("2022-12-17"),value:5.5},{date:new Date("2022-12-24"),value:5.2},{date:new Date("2022-12-31"),value:6.8},{date:new Date("2023-01-01"),value:8.2},{date:new Date("2023-01-08"),value:7.9},{date:new Date("2023-01-15"),value:5.1},{date:new Date("2023-01-22"),value:4.8},{date:new Date("2023-01-29"),value:6.3},{date:new Date("2023-02-05"),value:7.2},{date:new Date("2023-02-12"),value:9.4},{date:new Date("2023-02-19"),value:8.7},{date:new Date("2023-02-26"),value:7.1},{date:new Date("2023-03-05"),value:8.3},{date:new Date("2023-03-12"),value:9.5},{date:new Date("2023-03-19"),value:11.2},{date:new Date("2023-03-26"),value:12.8},{date:new Date("2023-04-02"),value:13.4},{date:new Date("2023-04-09"),value:14.1},{date:new Date("2023-04-16"),value:15.3},{date:new Date("2023-04-23"),value:14.8},{date:new Date("2023-04-30"),value:15.7},{date:new Date("2023-05-07"),value:16.9},{date:new Date("2023-05-14"),value:17.2},{date:new Date("2023-05-21"),value:18.4},{date:new Date("2023-05-28"),value:19.1},{date:new Date("2023-06-04"),value:20.3},{date:new Date("2023-06-11"),value:21.5},{date:new Date("2023-06-18"),value:22.8},{date:new Date("2023-06-25"),value:21.9},{date:new Date("2023-07-02"),value:23.1},{date:new Date("2023-07-09"),value:22.7},{date:new Date("2023-07-16"),value:24.2},{date:new Date("2023-07-23"),value:23.8},{date:new Date("2023-07-30"),value:22.9},{date:new Date("2023-08-06"),value:23.4},{date:new Date("2023-08-13"),value:22.8},{date:new Date("2023-08-20"),value:21.9},{date:new Date("2023-08-27"),value:20.7},{date:new Date("2023-09-03"),value:19.8},{date:new Date("2023-09-10"),value:18.9},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:16.8},{date:new Date("2023-10-01"),value:15.9},{date:new Date("2023-10-08"),value:14.7},{date:new Date("2023-10-15"),value:13.8},{date:new Date("2023-10-22"),value:12.9},{date:new Date("2023-10-29"),value:11.7},{date:new Date("2023-11-05"),value:10.8},{date:new Date("2023-11-12"),value:9.9},{date:new Date("2023-11-19"),value:8.7},{date:new Date("2023-11-26"),value:7.8},{date:new Date("2023-12-03"),value:6.9},{date:new Date("2023-12-10"),value:5.8},{date:new Date("2023-12-17"),value:4.9},{date:new Date("2023-12-24"),value:5.7},{date:new Date("2023-12-31"),value:6.2}]},{label:"Canberra",data:[{date:new Date("2022-01-01"),value:27.9},{date:new Date("2022-01-08"),value:28.4},{date:new Date("2022-01-15"),value:29.2},{date:new Date("2022-01-22"),value:28.9},{date:new Date("2022-01-29"),value:28.1},{date:new Date("2022-02-05"),value:27.3},{date:new Date("2022-02-12"),value:26.5},{date:new Date("2022-02-19"),value:25.4},{date:new Date("2022-02-26"),value:24.2},{date:new Date("2022-03-05"),value:23.1},{date:new Date("2022-03-12"),value:22.3},{date:new Date("2022-03-19"),value:21.2},{date:new Date("2022-03-26"),value:20.1},{date:new Date("2022-04-02"),value:19.2},{date:new Date("2022-04-09"),value:18.1},{date:new Date("2022-04-16"),value:16.9},{date:new Date("2022-04-23"),value:15.8},{date:new Date("2022-04-30"),value:14.9},{date:new Date("2022-05-07"),value:13.8},{date:new Date("2022-05-14"),value:12.9},{date:new Date("2022-05-21"),value:11.8},{date:new Date("2022-05-28"),value:10.9},{date:new Date("2022-06-04"),value:9.8},{date:new Date("2022-06-11"),value:8.9},{date:new Date("2022-06-18"),value:8.1},{date:new Date("2022-06-25"),value:7.5},{date:new Date("2022-07-02"),value:6.9},{date:new Date("2022-07-09"),value:6.7},{date:new Date("2022-07-16"),value:7.1},{date:new Date("2022-07-23"),value:7.9},{date:new Date("2022-07-30"),value:8.8},{date:new Date("2022-08-06"),value:9.9},{date:new Date("2022-08-13"),value:11.2},{date:new Date("2022-08-20"),value:12.4},{date:new Date("2022-08-27"),value:13.6},{date:new Date("2022-09-03"),value:14.8},{date:new Date("2022-09-10"),value:16.1},{date:new Date("2022-09-17"),value:17.3},{date:new Date("2022-09-24"),value:18.5},{date:new Date("2022-10-01"),value:19.8},{date:new Date("2022-10-08"),value:21.1},{date:new Date("2022-10-15"),value:22.3},{date:new Date("2022-10-22"),value:23.5},{date:new Date("2022-10-29"),value:24.6},{date:new Date("2022-11-05"),value:25.7},{date:new Date("2022-11-12"),value:26.5},{date:new Date("2022-11-19"),value:27.4},{date:new Date("2022-11-26"),value:28.2},{date:new Date("2022-12-03"),value:28.9},{date:new Date("2022-12-10"),value:29.5},{date:new Date("2022-12-17"),value:29.1},{date:new Date("2022-12-24"),value:28.2},{date:new Date("2022-12-31"),value:28.7},{date:new Date("2023-01-01"),value:28.5},{date:new Date("2023-01-08"),value:29.2},{date:new Date("2023-01-15"),value:30.1},{date:new Date("2023-01-22"),value:29.8},{date:new Date("2023-01-29"),value:28.9},{date:new Date("2023-02-05"),value:27.8},{date:new Date("2023-02-12"),value:26.9},{date:new Date("2023-02-19"),value:25.7},{date:new Date("2023-02-26"),value:24.8},{date:new Date("2023-03-05"),value:23.9},{date:new Date("2023-03-12"),value:22.8},{date:new Date("2023-03-19"),value:21.7},{date:new Date("2023-03-26"),value:20.8},{date:new Date("2023-04-02"),value:19.6},{date:new Date("2023-04-09"),value:18.4},{date:new Date("2023-04-16"),value:17.2},{date:new Date("2023-04-23"),value:16.1},{date:new Date("2023-04-30"),value:15.3},{date:new Date("2023-05-07"),value:14.2},{date:new Date("2023-05-14"),value:13.1},{date:new Date("2023-05-21"),value:12.3},{date:new Date("2023-05-28"),value:11.4},{date:new Date("2023-06-04"),value:10.2},{date:new Date("2023-06-11"),value:9.1},{date:new Date("2023-06-18"),value:8.3},{date:new Date("2023-06-25"),value:7.8},{date:new Date("2023-07-02"),value:7.1},{date:new Date("2023-07-09"),value:6.9},{date:new Date("2023-07-16"),value:7.2},{date:new Date("2023-07-23"),value:8.1},{date:new Date("2023-07-30"),value:9.3},{date:new Date("2023-08-06"),value:10.4},{date:new Date("2023-08-13"),value:11.6},{date:new Date("2023-08-20"),value:12.8},{date:new Date("2023-08-27"),value:13.9},{date:new Date("2023-09-03"),value:15.2},{date:new Date("2023-09-10"),value:16.4},{date:new Date("2023-09-17"),value:17.6},{date:new Date("2023-09-24"),value:18.9},{date:new Date("2023-10-01"),value:20.1},{date:new Date("2023-10-08"),value:21.3},{date:new Date("2023-10-15"),value:22.5},{date:new Date("2023-10-22"),value:23.7},{date:new Date("2023-10-29"),value:24.8},{date:new Date("2023-11-05"),value:25.9},{date:new Date("2023-11-12"),value:26.7},{date:new Date("2023-11-19"),value:27.8},{date:new Date("2023-11-26"),value:28.6},{date:new Date("2023-12-03"),value:29.4},{date:new Date("2023-12-10"),value:30.2},{date:new Date("2023-12-17"),value:29.8},{date:new Date("2023-12-24"),value:28.9},{date:new Date("2023-12-31"),value:29.3}]},{label:"Mars",data:[{date:new Date("2022-01-01"),value:-62},{date:new Date("2022-01-08"),value:-63},{date:new Date("2022-01-15"),value:-64},{date:new Date("2022-01-22"),value:-62},{date:new Date("2022-01-29"),value:-61},{date:new Date("2022-02-05"),value:-59},{date:new Date("2022-02-12"),value:-56},{date:new Date("2022-02-19"),value:-53},{date:new Date("2022-02-26"),value:-50},{date:new Date("2022-03-05"),value:-47},{date:new Date("2022-03-12"),value:-44},{date:new Date("2022-03-19"),value:-41},{date:new Date("2022-03-26"),value:-37},{date:new Date("2022-04-02"),value:-34},{date:new Date("2022-04-09"),value:-31},{date:new Date("2022-04-16"),value:-27},{date:new Date("2022-04-23"),value:-24},{date:new Date("2022-04-30"),value:-21},{date:new Date("2022-05-07"),value:-17},{date:new Date("2022-05-14"),value:-14},{date:new Date("2022-05-21"),value:-11},{date:new Date("2022-05-28"),value:-7},{date:new Date("2022-06-04"),value:-4},{date:new Date("2022-06-11"),value:-1},{date:new Date("2022-06-18"),value:1},{date:new Date("2022-06-25"),value:3},{date:new Date("2022-07-02"),value:6},{date:new Date("2022-07-09"),value:9},{date:new Date("2022-07-16"),value:11},{date:new Date("2022-07-23"),value:13},{date:new Date("2022-07-30"),value:16},{date:new Date("2022-08-06"),value:18},{date:new Date("2022-08-13"),value:21},{date:new Date("2022-08-20"),value:23},{date:new Date("2022-08-27"),value:21},{date:new Date("2022-09-03"),value:19},{date:new Date("2022-09-10"),value:16},{date:new Date("2022-09-17"),value:13},{date:new Date("2022-09-24"),value:9},{date:new Date("2022-10-01"),value:6},{date:new Date("2022-10-08"),value:3},{date:new Date("2022-10-15"),value:-1},{date:new Date("2022-10-22"),value:-4},{date:new Date("2022-10-29"),value:-7},{date:new Date("2022-11-05"),value:-11},{date:new Date("2022-11-12"),value:-14},{date:new Date("2022-11-19"),value:-17},{date:new Date("2022-11-26"),value:-21},{date:new Date("2022-12-03"),value:-24},{date:new Date("2022-12-10"),value:-27},{date:new Date("2022-12-17"),value:-31},{date:new Date("2022-12-24"),value:-36},{date:new Date("2022-12-31"),value:-37},{date:new Date("2023-01-01"),value:-63},{date:new Date("2023-01-08"),value:-64},{date:new Date("2023-01-15"),value:-65},{date:new Date("2023-01-22"),value:-63},{date:new Date("2023-01-29"),value:-62},{date:new Date("2023-02-05"),value:-60},{date:new Date("2023-02-12"),value:-58},{date:new Date("2023-02-19"),value:-55},{date:new Date("2023-02-26"),value:-52},{date:new Date("2023-03-05"),value:-48},{date:new Date("2023-03-12"),value:-45},{date:new Date("2023-03-19"),value:-42},{date:new Date("2023-03-26"),value:-38},{date:new Date("2023-04-02"),value:-35},{date:new Date("2023-04-09"),value:-32},{date:new Date("2023-04-16"),value:-28},{date:new Date("2023-04-23"),value:-25},{date:new Date("2023-04-30"),value:-22},{date:new Date("2023-05-07"),value:-18},{date:new Date("2023-05-14"),value:-15},{date:new Date("2023-05-21"),value:-12},{date:new Date("2023-05-28"),value:-8},{date:new Date("2023-06-04"),value:-5},{date:new Date("2023-06-11"),value:-2},{date:new Date("2023-06-18"),value:0},{date:new Date("2023-06-25"),value:2},{date:new Date("2023-07-02"),value:5},{date:new Date("2023-07-09"),value:8},{date:new Date("2023-07-16"),value:10},{date:new Date("2023-07-23"),value:12},{date:new Date("2023-07-30"),value:15},{date:new Date("2023-08-06"),value:17},{date:new Date("2023-08-13"),value:20},{date:new Date("2023-08-20"),value:22},{date:new Date("2023-08-27"),value:20},{date:new Date("2023-09-03"),value:18},{date:new Date("2023-09-10"),value:15},{date:new Date("2023-09-17"),value:12},{date:new Date("2023-09-24"),value:8},{date:new Date("2023-10-01"),value:5},{date:new Date("2023-10-08"),value:2},{date:new Date("2023-10-15"),value:-2},{date:new Date("2023-10-22"),value:-5},{date:new Date("2023-10-29"),value:-8},{date:new Date("2023-11-05"),value:-12},{date:new Date("2023-11-12"),value:-15},{date:new Date("2023-11-19"),value:-18},{date:new Date("2023-11-26"),value:-22},{date:new Date("2023-12-03"),value:-25},{date:new Date("2023-12-10"),value:-28},{date:new Date("2023-12-17"),value:-32},{date:new Date("2023-12-24"),value:-35},{date:new Date("2023-12-31"),value:-38}]}]}}]);
