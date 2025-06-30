"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3063],{"../charts/src/components/grid-control/stories/index.stories.tsx":(E,p,t)=>{t.r(p),t.d(p,{BothAxes:()=>_,Default:()=>h,__namedExportsOrder:()=>le,default:()=>ie});var x=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/band.js"),y=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/linear.js"),g=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),i=t.n(g),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=t("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(f),O=t("../../../node_modules/.pnpm/@visx+shape@3.12.0_react@18.3.1/node_modules/@visx/shape/lib/shapes/Line.js"),F=t("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js"),B=t("../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js"),Y=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/getTicks.js"),J=t("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/utils/coerceNumber.js");function X(e){return"bandwidth"in e?e.bandwidth():0}var ee=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N.apply(this,arguments)}function te(e,s){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(s.indexOf(a)>=0)&&(n[a]=e[a]);return n}function H(e){var s=e.top,n=s===void 0?0:s,o=e.left,a=o===void 0?0:o,r=e.scale,w=e.width,j=e.stroke,G=j===void 0?"#eaf0f6":j,k=e.strokeWidth,W=k===void 0?1:k,R=e.strokeDasharray,M=e.className,b=e.children,V=e.numTicks,$=V===void 0?10:V,D=e.lineStyle,A=e.offset,C=e.tickValues,I=te(e,ee),K=C??(0,Y.A)(r,$),U=(A??0)+X(r)/2,T=K.map(function(d,u){var c,m=((c=(0,J.A)(r(d)))!=null?c:0)+U;return{index:u,from:new B.A({x:0,y:m}),to:new B.A({x:w,y:m})}});return l.createElement(F.A,{className:v()("visx-rows",M),top:n,left:a},b?b({lines:T}):T.map(function(d){var u=d.from,c=d.to,m=d.index;return l.createElement(O.default,N({key:"row-line-"+m,from:u,to:c,stroke:G,strokeWidth:W,strokeDasharray:R,style:D},I))}))}H.propTypes={tickValues:i().array,width:i().number.isRequired};var se=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}function ne(e,s){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(s.indexOf(a)>=0)&&(n[a]=e[a]);return n}function z(e){var s=e.top,n=s===void 0?0:s,o=e.left,a=o===void 0?0:o,r=e.scale,w=e.height,j=e.stroke,G=j===void 0?"#eaf0f6":j,k=e.strokeWidth,W=k===void 0?1:k,R=e.strokeDasharray,M=e.className,b=e.numTicks,V=b===void 0?10:b,$=e.lineStyle,D=e.offset,A=e.tickValues,C=e.children,I=ne(e,se),K=A??(0,Y.A)(r,V),U=(D??0)+X(r)/2,T=K.map(function(d,u){var c,m=((c=(0,J.A)(r(d)))!=null?c:0)+U;return{index:u,from:new B.A({x:m,y:0}),to:new B.A({x:m,y:w})}});return l.createElement(F.A,{className:v()("visx-columns",M),top:n,left:a},C?C({lines:T}):T.map(function(d){var u=d.from,c=d.to,m=d.index;return l.createElement(O.default,L({key:"column-line-"+m,from:u,to:c,stroke:G,strokeWidth:W,strokeDasharray:R,style:$},I))}))}z.propTypes={tickValues:i().array,height:i().number.isRequired};var oe=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),re=t.n(oe),Q=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/grid-control/grid-control.module.scss"),P={};P.insert="head",P.singleton=!1;var de=re()(Q.A,P);const ae=Q.A.locals||{};var S=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Z=({width:e,height:s,xScale:n,yScale:o,gridVisibility:a="x",top:r=0})=>(0,S.jsxs)("g",{transform:`translate(0, ${r})`,className:ae["grid-control"],children:[a.includes("x")&&(0,S.jsx)(H,{scale:n,width:e,"data-testid":"x-grid"}),a.includes("y")&&(0,S.jsx)(z,{scale:o,height:s,"data-testid":"y-grid"})]});try{gridcontrol.displayName="gridcontrol",gridcontrol.__docgenInfo={description:"",displayName:"gridcontrol",props:{width:{defaultValue:null,description:"Width of the grid in pixels",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Height of the grid in pixels",name:"height",required:!0,type:{name:"number"}},gridVisibility:{defaultValue:{value:"x"},description:"Grid visibility. x is default.",name:"gridVisibility",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"x"'},{value:'"y"'},{value:'"xy"'}]}},xScale:{defaultValue:null,description:`X-axis scale for the grid
TODO: Fix any type after resolving visx scale type issues`,name:"xScale",required:!0,type:{name:"any"}},yScale:{defaultValue:null,description:`Y-axis scale for the grid
TODO: Fix any type after resolving visx scale type issues`,name:"yScale",required:!0,type:{name:"any"}},top:{defaultValue:{value:"0"},description:"Top offset for the grid",name:"top",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/grid-control/grid-control.tsx#gridcontrol"]={docgenInfo:gridcontrol.__docgenInfo,name:"gridcontrol",path:"../charts/src/components/grid-control/grid-control.tsx#gridcontrol"})}catch{}var me=`import { StoryFn, Meta } from '@storybook/react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}},"both-axes":{startLoc:{col:17,line:20},endLoc:{col:1,line:42},startBody:{col:17,line:20},endBody:{col:1,line:42}}}}},title:"JS Packages/Charts/Composites/GridControl",component:Z,argTypes:{gridVisibility:{control:{type:"select"},options:["x","y","xy","none"]}}},q=e=>{const s=(0,x.A)({domain:["A","B","C"],range:[0,100]}),n=(0,y.A)({domain:[0,100],range:[100,0]});return(0,S.jsx)("svg",{width:200,height:200,children:(0,S.jsx)(Z,{...e,width:200,height:200,xScale:s,yScale:n,gridVisibility:e.gridVisibility,className:e.className})})},h=q.bind({});h.args={gridVisibility:"x"};const _=q.bind({});_.args={gridVisibility:"xy"};const le=["Default","BothAxes"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
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
}`,..._.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+point@3.12.0/node_modules/@visx/point/esm/Point.js":(E,p,t)=>{t.d(p,{A:()=>x});var x=function(){function y(i){var l=i.x,f=l===void 0?0:l,v=i.y,O=v===void 0?0:v;this.x=0,this.y=0,this.x=f,this.y=O}var g=y.prototype;return g.value=function(){return{x:this.x,y:this.y}},g.toArray=function(){return[this.x,this.y]},y}()},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/grid-control/grid-control.module.scss":(E,p,t)=>{t.d(p,{A:()=>f});var x=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=t.n(x),g=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=t.n(g),l=i()(y());l.push([E.id,".GutApwxtG16iNvtl8Nuj .visx-line{stroke:#d7d6d6;stroke-width:1px;shape-rendering:crispEdges}",""]),l.locals={"grid-control":"GutApwxtG16iNvtl8Nuj"};const f=l}}]);
