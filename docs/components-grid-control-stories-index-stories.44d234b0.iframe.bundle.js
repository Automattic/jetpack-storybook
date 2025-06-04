"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3063],{"../charts/src/components/grid-control/stories/index.stories.tsx":(P,p,s)=>{s.r(p),s.d(p,{BothAxes:()=>_,Default:()=>g,__namedExportsOrder:()=>le,default:()=>ie});var x=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),y=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/linear.js"),h=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=s.n(h),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=s.n(v),B=s("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/lib/shapes/Line.js"),F=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),D=s("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js"),J=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),X=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/coerceNumber.js");function Y(e){return"bandwidth"in e?e.bandwidth():0}var ee=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}function se(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function z(e){var t=e.top,n=t===void 0?0:t,o=e.left,a=o===void 0?0:o,r=e.scale,V=e.width,S=e.stroke,w=S===void 0?"#eaf0f6":S,k=e.strokeWidth,W=k===void 0?1:k,M=e.strokeDasharray,R=e.className,b=e.children,O=e.numTicks,$=O===void 0?10:O,N=e.lineStyle,A=e.offset,C=e.tickValues,I=se(e,ee),K=C??(0,J.A)(r,$),U=(A??0)+Y(r)/2,T=K.map(function(d,u){var c,m=((c=(0,X.A)(r(d)))!=null?c:0)+U;return{index:u,from:new D.A({x:0,y:m}),to:new D.A({x:V,y:m})}});return l.createElement(F.A,{className:f()("visx-rows",R),top:n,left:a},b?b({lines:T}):T.map(function(d){var u=d.from,c=d.to,m=d.index;return l.createElement(B.default,L({key:"row-line-"+m,from:u,to:c,stroke:w,strokeWidth:W,strokeDasharray:M,style:N},I))}))}z.propTypes={tickValues:i().array,width:i().number.isRequired};var te=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}function ne(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function H(e){var t=e.top,n=t===void 0?0:t,o=e.left,a=o===void 0?0:o,r=e.scale,V=e.height,S=e.stroke,w=S===void 0?"#eaf0f6":S,k=e.strokeWidth,W=k===void 0?1:k,M=e.strokeDasharray,R=e.className,b=e.numTicks,O=b===void 0?10:b,$=e.lineStyle,N=e.offset,A=e.tickValues,C=e.children,I=ne(e,te),K=A??(0,J.A)(r,O),U=(N??0)+Y(r)/2,T=K.map(function(d,u){var c,m=((c=(0,X.A)(r(d)))!=null?c:0)+U;return{index:u,from:new D.A({x:m,y:0}),to:new D.A({x:m,y:V})}});return l.createElement(F.A,{className:f()("visx-columns",R),top:n,left:a},C?C({lines:T}):T.map(function(d){var u=d.from,c=d.to,m=d.index;return l.createElement(B.default,E({key:"column-line-"+m,from:u,to:c,stroke:w,strokeWidth:W,strokeDasharray:M,style:$},I))}))}H.propTypes={tickValues:i().array,height:i().number.isRequired};var oe=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),re=s.n(oe),Q=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/grid-control/grid-control.module.scss"),G={};G.insert="head",G.singleton=!1;var de=re()(Q.A,G);const ae=Q.A.locals||{};var j=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Z=({width:e,height:t,xScale:n,yScale:o,gridVisibility:a="x",top:r=0})=>(0,j.jsxs)("g",{transform:`translate(0, ${r})`,className:ae["grid-control"],children:[a.includes("x")&&(0,j.jsx)(z,{scale:n,width:e,"data-testid":"x-grid"}),a.includes("y")&&(0,j.jsx)(H,{scale:o,height:t,"data-testid":"y-grid"})]});var me=`import { StoryFn, Meta } from '@storybook/react';
import { scaleBand, scaleLinear } from '@visx/scale';
import GridControl from '../grid-control';

// Define metadata for the story
export default {
	title: 'JS Packages/Charts/Composites/GridControl',
	component: GridControl,
	argTypes: {
		gridVisibility: {
			control: { type: 'select' },
			options: [ 'x', 'y', 'xy', 'none' ],
		},
	},
} as Meta< typeof GridControl >;

// Create a template for the stories
const Template: StoryFn< typeof GridControl > = args => {
	const xScale = scaleBand( { domain: [ 'A', 'B', 'C' ], range: [ 0, 100 ] } );
	const yScale = scaleLinear( { domain: [ 0, 100 ], range: [ 100, 0 ] } );

	return (
		<svg width={ 200 } height={ 200 }>
			<GridControl
				{ ...args }
				width={ 200 }
				height={ 200 }
				xScale={ xScale }
				yScale={ yScale }
				gridVisibility={ args.gridVisibility }
				className={ args.className }
			/>
		</svg>
	);
};

// Define stories for each grid visibility option
export const Default = Template.bind( {} );
Default.args = {
	gridVisibility: 'x',
};

export const BothAxes = Template.bind( {} );
BothAxes.args = {
	gridVisibility: 'xy',
};
`,ue={Default:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}},BothAxes:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}}};const ie={parameters:{storySource:{source:`import { scaleBand, scaleLinear } from '@visx/scale';
import GridControl from '../grid-control';

// Define metadata for the story
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Charts/Composites/GridControl',
  component: GridControl,
  argTypes: {
    gridVisibility: {
      control: {
        type: 'select'
      },
      options: ['x', 'y', 'xy', 'none']
    }
  }
};

// Create a template for the stories
const Template = args => {
  const xScale = scaleBand({
    domain: ['A', 'B', 'C'],
    range: [0, 100]
  });
  const yScale = scaleLinear({
    domain: [0, 100],
    range: [100, 0]
  });
  return /*#__PURE__*/_jsx("svg", {
    width: 200,
    height: 200,
    children: /*#__PURE__*/_jsx(GridControl, {
      ...args,
      width: 200,
      height: 200,
      xScale: xScale,
      yScale: yScale,
      gridVisibility: args.gridVisibility,
      className: args.className
    })
  });
};

// Define stories for each grid visibility option
export const Default = Template.bind({});
Default.args = {
  gridVisibility: 'x'
};
export const BothAxes = Template.bind({});
BothAxes.args = {
  gridVisibility: 'xy'
};`,locationsMap:{default:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}},"both-axes":{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}}}}},title:"JS Packages/Charts/Composites/GridControl",component:Z,argTypes:{gridVisibility:{control:{type:"select"},options:["x","y","xy","none"]}}},q=e=>{const t=(0,x.A)({domain:["A","B","C"],range:[0,100]}),n=(0,y.A)({domain:[0,100],range:[100,0]});return(0,j.jsx)("svg",{width:200,height:200,children:(0,j.jsx)(Z,{...e,width:200,height:200,xScale:t,yScale:n,gridVisibility:e.gridVisibility,className:e.className})})},g=q.bind({});g.args={gridVisibility:"x"};const _=q.bind({});_.args={gridVisibility:"xy"};const le=["Default","BothAxes"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const xScale = scaleBand({
    domain: ['A', 'B', 'C'],
    range: [0, 100]
  });
  const yScale = scaleLinear({
    domain: [0, 100],
    range: [100, 0]
  });
  return <svg width={200} height={200}>
            <GridControl {...args} width={200} height={200} xScale={xScale} yScale={yScale} gridVisibility={args.gridVisibility} className={args.className} />
        </svg>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const xScale = scaleBand({
    domain: ['A', 'B', 'C'],
    range: [0, 100]
  });
  const yScale = scaleLinear({
    domain: [0, 100],
    range: [100, 0]
  });
  return <svg width={200} height={200}>
            <GridControl {...args} width={200} height={200} xScale={xScale} yScale={yScale} gridVisibility={args.gridVisibility} className={args.className} />
        </svg>;
}`,..._.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js":(P,p,s)=>{s.d(p,{A:()=>x});var x=function(){function y(i){var l=i.x,v=l===void 0?0:l,f=i.y,B=f===void 0?0:f;this.x=0,this.y=0,this.x=v,this.y=B}var h=y.prototype;return h.value=function(){return{x:this.x,y:this.y}},h.toArray=function(){return[this.x,this.y]},y}()},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/grid-control/grid-control.module.scss":(P,p,s)=>{s.d(p,{A:()=>v});var x=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=s.n(x),h=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=s.n(h),l=i()(y());l.push([P.id,".GutApwxtG16iNvtl8Nuj .visx-line{stroke:#d7d6d6;stroke-width:1px;shape-rendering:crispEdges}",""]),l.locals={"grid-control":"GutApwxtG16iNvtl8Nuj"};const v=l}}]);
