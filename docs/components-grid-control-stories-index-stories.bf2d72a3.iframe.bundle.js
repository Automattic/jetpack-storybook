"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3063],{"../charts/src/components/grid-control/stories/index.stories.tsx":(O,d,s)=>{s.r(d),s.d(d,{BothAxes:()=>c,Default:()=>v,__namedExportsOrder:()=>C,default:()=>p});var _=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),a=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/linear.js"),l=s("../charts/src/components/grid-control/grid-control.tsx"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import { StoryFn, Meta } from '@storybook/react';
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
`,x={Default:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}},BothAxes:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}}};const p={parameters:{storySource:{source:`import { scaleBand, scaleLinear } from '@visx/scale';
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
};`,locationsMap:{default:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}},"both-axes":{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}}}}},title:"JS Packages/Charts/Composites/GridControl",component:l.A,argTypes:{gridVisibility:{control:{type:"select"},options:["x","y","xy","none"]}}},g=E=>{const h=(0,_.A)({domain:["A","B","C"],range:[0,100]}),P=(0,a.A)({domain:[0,100],range:[100,0]});return(0,r.jsx)("svg",{width:200,height:200,children:(0,r.jsx)(l.A,{...E,width:200,height:200,xScale:h,yScale:P,gridVisibility:E.gridVisibility,className:E.className})})},v=g.bind({});v.args={gridVisibility:"x"};const c=g.bind({});c.args={gridVisibility:"xy"};const C=["Default","BothAxes"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
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
}`,...v.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
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
}`,...c.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/grids/GridColumns.js":(O,d,s)=>{s.d(d,{A:()=>A});var _=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=s.n(_),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=s.n(r),x=s("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/lib/shapes/Line.js"),p=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),g=s("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js"),v=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),c=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/coerceNumber.js"),C=s("../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js"),E=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function P(e,t){if(e==null)return{};var n={},o=Object.keys(e),u,i;for(i=0;i<o.length;i++)u=o[i],!(t.indexOf(u)>=0)&&(n[u]=e[u]);return n}function A(e){var t=e.top,n=t===void 0?0:t,o=e.left,u=o===void 0?0:o,i=e.scale,b=e.height,M=e.stroke,I=M===void 0?"#eaf0f6":M,B=e.strokeWidth,K=B===void 0?1:B,U=e.strokeDasharray,G=e.className,S=e.numTicks,W=S===void 0?10:S,N=e.lineStyle,R=e.offset,T=e.tickValues,L=e.children,V=P(e,E),w=T??(0,v.A)(i,W),$=(R??0)+(0,C.A)(i)/2,k=w.map(function(y,j){var f,D=((f=(0,c.A)(i(y)))!=null?f:0)+$;return{index:j,from:new g.A({x:D,y:0}),to:new g.A({x:D,y:b})}});return l.createElement(p.A,{className:m()("visx-columns",G),top:n,left:u},L?L({lines:k}):k.map(function(y){var j=y.from,f=y.to,D=y.index;return l.createElement(x.default,h({key:"column-line-"+D,from:j,to:f,stroke:I,strokeWidth:K,strokeDasharray:U,style:N},V))}))}A.propTypes={tickValues:a().array,height:a().number.isRequired}},"../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/grids/GridRows.js":(O,d,s)=>{s.d(d,{A:()=>A});var _=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=s.n(_),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=s.n(r),x=s("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/lib/shapes/Line.js"),p=s("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),g=s("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js"),v=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),c=s("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/coerceNumber.js"),C=s("../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js"),E=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function P(e,t){if(e==null)return{};var n={},o=Object.keys(e),u,i;for(i=0;i<o.length;i++)u=o[i],!(t.indexOf(u)>=0)&&(n[u]=e[u]);return n}function A(e){var t=e.top,n=t===void 0?0:t,o=e.left,u=o===void 0?0:o,i=e.scale,b=e.width,M=e.stroke,I=M===void 0?"#eaf0f6":M,B=e.strokeWidth,K=B===void 0?1:B,U=e.strokeDasharray,G=e.className,S=e.children,W=e.numTicks,N=W===void 0?10:W,R=e.lineStyle,T=e.offset,L=e.tickValues,V=P(e,E),w=L??(0,v.A)(i,N),$=(T??0)+(0,C.A)(i)/2,k=w.map(function(y,j){var f,D=((f=(0,c.A)(i(y)))!=null?f:0)+$;return{index:j,from:new g.A({x:0,y:D}),to:new g.A({x:b,y:D})}});return l.createElement(p.A,{className:m()("visx-rows",G),top:n,left:u},S?S({lines:k}):k.map(function(y){var j=y.from,f=y.to,D=y.index;return l.createElement(x.default,h({key:"row-line-"+D,from:j,to:f,stroke:I,strokeWidth:K,strokeDasharray:U,style:R},V))}))}A.propTypes={tickValues:a().array,width:a().number.isRequired}},"../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/utils/getScaleBandwidth.js":(O,d,s)=>{s.d(d,{A:()=>_});function _(a){return"bandwidth"in a?a.bandwidth():0}},"../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js":(O,d,s)=>{s.d(d,{A:()=>_});var _=function(){function a(r){var m=r.x,x=m===void 0?0:m,p=r.y,g=p===void 0?0:p;this.x=0,this.y=0,this.x=x,this.y=g}var l=a.prototype;return l.value=function(){return{x:this.x,y:this.y}},l.toArray=function(){return[this.x,this.y]},a}()},"../charts/src/components/grid-control/grid-control.tsx":(O,d,s)=>{s.d(d,{A:()=>E});var _=s("../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/grids/GridRows.js"),a=s("../../../node_modules/.pnpm/@visx+grid@3.12.0_react@18.3.1/node_modules/@visx/grid/esm/grids/GridColumns.js"),l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=s.n(r),x=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/grid-control/grid-control.module.scss"),p={};p.insert="head",p.singleton=!1;var g=m()(x.A,p);const v=x.A.locals||{};var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=({width:h,height:P,xScale:A,yScale:e,gridVisibility:t="x",top:n=0})=>(0,c.jsxs)("g",{transform:`translate(0, ${n})`,className:v["grid-control"],children:[t.includes("x")&&(0,c.jsx)(_.A,{scale:A,width:h,"data-testid":"x-grid"}),t.includes("y")&&(0,c.jsx)(a.A,{scale:e,height:P,"data-testid":"y-grid"})]})},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/grid-control/grid-control.module.scss":(O,d,s)=>{s.d(d,{A:()=>x});var _=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(_),l=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(l),m=r()(a());m.push([O.id,".GutApwxtG16iNvtl8Nuj .visx-line{stroke:#d7d6d6;stroke-width:1px;shape-rendering:crispEdges}",""]),m.locals={"grid-control":"GutApwxtG16iNvtl8Nuj"};const x=m}}]);
