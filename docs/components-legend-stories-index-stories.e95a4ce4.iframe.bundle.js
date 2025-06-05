"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(S,O,l)=>{l.r(O),l.d(O,{Horizontal:()=>p,Vertical:()=>s,WithLongLabels:()=>d,__namedExportsOrder:()=>g,default:()=>c});var b=l("../charts/src/components/legend/base-legend.tsx"),n=`import { Meta, StoryObj } from '@storybook/react';
import { BaseLegend } from '../base-legend';

const meta: Meta< typeof BaseLegend > = {
	title: 'JS Packages/Charts/Composites/Legend',
	component: BaseLegend,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A flexible legend component that can be customized with different styles and orientations.',
			},
		},
	},
};

export default meta;
type Story = StoryObj< typeof BaseLegend >;

const mockData = [
	{ label: 'Desktop', value: '86%', color: '#3858E9' },
	{ label: 'Mobile', value: '52%', color: '#80C8FF' },
];

export const Horizontal: Story = {
	args: {
		items: mockData,
		orientation: 'horizontal',
	},
};

export const Vertical: Story = {
	args: {
		items: mockData,
		orientation: 'vertical',
	},
};

export const WithLongLabels: Story = {
	args: {
		items: [
			{ label: 'Very Long Desktop Usage', value: '86%', color: '#3858E9' },
			{ label: 'Extended Mobile Sessions', value: '52%', color: '#80C8FF' },
			{ label: 'Tablet Device Access', value: '35%', color: '#44B556' },
		],
		orientation: 'horizontal',
	},
};
`,a={Horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},Vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},WithLongLabels:{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}};const c={title:"JS Packages/Charts/Composites/Legend",component:b.$,parameters:{storySource:{source:`import { BaseLegend } from '../base-legend';
const meta = {
  title: 'JS Packages/Charts/Composites/Legend',
  component: BaseLegend,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible legend component that can be customized with different styles and orientations.'
      }
    }
  }
};
export default meta;
const mockData = [{
  label: 'Desktop',
  value: '86%',
  color: '#3858E9'
}, {
  label: 'Mobile',
  value: '52%',
  color: '#80C8FF'
}];
export const Horizontal = {
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
};
export const Vertical = {
  args: {
    items: mockData,
    orientation: 'vertical'
  }
};
export const WithLongLabels = {
  args: {
    items: [{
      label: 'Very Long Desktop Usage',
      value: '86%',
      color: '#3858E9'
    }, {
      label: 'Extended Mobile Sessions',
      value: '52%',
      color: '#80C8FF'
    }, {
      label: 'Tablet Device Access',
      value: '35%',
      color: '#44B556'
    }],
    orientation: 'horizontal'
  }
};`,locationsMap:{horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},"with-long-labels":{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}}},layout:"centered",docs:{description:{component:"A flexible legend component that can be customized with different styles and orientations."}}}},y=[{label:"Desktop",value:"86%",color:"#3858E9"},{label:"Mobile",value:"52%",color:"#80C8FF"}],p={args:{items:y,orientation:"horizontal"}},s={args:{items:y,orientation:"vertical"}},d={args:{items:[{label:"Very Long Desktop Usage",value:"86%",color:"#3858E9"},{label:"Extended Mobile Sessions",value:"52%",color:"#80C8FF"},{label:"Tablet Device Access",value:"35%",color:"#44B556"}],orientation:"horizontal"}},g=["Horizontal","Vertical","WithLongLabels"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
}`,...p.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'vertical'
  }
}`,...s.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Very Long Desktop Usage',
      value: '86%',
      color: '#3858E9'
    }, {
      label: 'Extended Mobile Sessions',
      value: '52%',
      color: '#80C8FF'
    }, {
      label: 'Tablet Device Access',
      value: '35%',
      color: '#44B556'
    }],
    orientation: 'horizontal'
  }
}`,...d.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js":(S,O,l)=>{l.d(O,{A:()=>p});var b=l("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=l.n(b),a=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=["flexDirection","alignItems","margin","display","children"];function c(){return c=Object.assign?Object.assign.bind():function(s){for(var d=1;d<arguments.length;d++){var g=arguments[d];for(var f in g)Object.prototype.hasOwnProperty.call(g,f)&&(s[f]=g[f])}return s},c.apply(this,arguments)}function y(s,d){if(s==null)return{};var g={},f=Object.keys(s),L,h;for(h=0;h<f.length;h++)L=f[h],!(d.indexOf(L)>=0)&&(g[L]=s[L]);return g}function p(s){var d=s.flexDirection,g=d===void 0?"row":d,f=s.alignItems,L=f===void 0?"center":f,h=s.margin,t=h===void 0?"0":h,m=s.display,i=m===void 0?"flex":m,o=s.children,e=y(s,u);return a.createElement("div",c({className:"visx-legend-item",style:{display:i,alignItems:L,flexDirection:g,margin:t}},e),o)}p.propTypes={alignItems:n().string,margin:n().oneOfType([n().string,n().number]),children:n().node,display:n().string}},"../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js":(S,O,l)=>{l.d(O,{A:()=>p});var b=l("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=l.n(b),a=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=["flex","label","margin","align","children"];function c(){return c=Object.assign?Object.assign.bind():function(s){for(var d=1;d<arguments.length;d++){var g=arguments[d];for(var f in g)Object.prototype.hasOwnProperty.call(g,f)&&(s[f]=g[f])}return s},c.apply(this,arguments)}function y(s,d){if(s==null)return{};var g={},f=Object.keys(s),L,h;for(h=0;h<f.length;h++)L=f[h],!(d.indexOf(L)>=0)&&(g[L]=s[L]);return g}function p(s){var d=s.flex,g=d===void 0?"1":d,f=s.label,L=s.margin,h=L===void 0?"5px 0":L,t=s.align,m=t===void 0?"left":t,i=s.children,o=y(s,u);return a.createElement("div",c({className:"visx-legend-label",style:{justifyContent:m,display:"flex",flex:g,margin:h}},o),i||f)}p.propTypes={align:n().string,label:n().node,flex:n().oneOfType([n().string,n().number]),margin:n().oneOfType([n().string,n().number]),children:n().node}},"../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js":(S,O,l)=>{l.d(O,{A:()=>h});var b=l("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=l.n(b),a=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function u(){return u=Object.assign?Object.assign.bind():function(t){for(var m=1;m<arguments.length;m++){var i=arguments[m];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},u.apply(this,arguments)}function c(t){var m=t.fill,i=t.width,o=t.height,e=t.style;return a.createElement("div",{style:u({width:i,height:o,background:m},e)})}c.propTypes={fill:n().string,width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};var y=l("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function p(t){var m=t.fill,i=t.width,o=t.height,e=t.style,_=typeof i=="string"||typeof i>"u"?0:i,r=typeof o=="string"||typeof o>"u"?0:o,x=Math.max(_,r),v=x/2;return a.createElement("svg",{width:x,height:x},a.createElement(y.A,{top:v,left:v},a.createElement("circle",{r:v,fill:m,style:e})))}p.propTypes={fill:n().string,width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};function s(t){var m=t.fill,i=t.width,o=t.height,e=t.style,_=typeof o=="string"||typeof o>"u"?0:o,r=typeof e?.strokeWidth=="number"?e?.strokeWidth:2;return a.createElement("svg",{width:i,height:o},a.createElement(y.A,{top:_/2-r/2},a.createElement("line",{x1:0,x2:i,y1:0,y2:0,stroke:m,strokeWidth:r,style:e})))}s.propTypes={fill:n().string,width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};function d(){return d=Object.assign?Object.assign.bind():function(t){for(var m=1;m<arguments.length;m++){var i=arguments[m];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},d.apply(this,arguments)}var g=function(){};function f(t){var m=t.shape,i=m===void 0?"rect":m,o=t.fill,e=o===void 0?g:o,_=t.size,r=_===void 0?g:_,x=t.width,v=t.height,j=t.label,E=t.item,A=t.itemIndex,P=t.shapeStyle,I=P===void 0?g:P,D={width:x,height:v,item:E,itemIndex:A,label:j,fill:e(d({},j)),size:r(d({},j)),style:I(d({},j))};return typeof i=="string"?i==="circle"?a.createElement(p,D):i==="line"?a.createElement(s,D):a.createElement(c,D):a.isValidElement(i)?a.cloneElement(i,D):i?a.createElement(i,D):null}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var m=1;m<arguments.length;m++){var i=arguments[m];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},L.apply(this,arguments)}function h(t){var m=t.shape,i=m===void 0?c:m,o=t.width,e=t.height,_=t.margin,r=t.label,x=t.item,v=t.itemIndex,j=t.fill,E=t.size,A=t.shapeStyle;return a.createElement("div",{className:"visx-legend-shape",style:{display:"flex",width:E?E(L({},r)):o,height:E?E(L({},r)):e,margin:_}},f({shape:i,item:x,itemIndex:v,label:r,width:o,height:e,fill:j,shapeStyle:A}))}h.propTypes={itemIndex:n().number.isRequired,margin:n().oneOfType([n().string,n().number]),width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])}},"../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js":(S,O,l)=>{l.d(O,{A:()=>o});var b=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=l("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=l.n(n),u=l("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=l.n(u),y=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),p=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),s=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js");function d(e){return e&&typeof e=="object"&&"value"in e&&typeof e.value<"u"?e.value:e}function g(e){return String(d(e))}function f(e){var _=e.scale,r=e.labelFormat;return function(x,v){return{datum:x,index:v,text:""+r(x,v),value:_(x)}}}var L=["className","style","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","shapeStyle","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","legendLabelProps","children"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var _=1;_<arguments.length;_++){var r=arguments[_];for(var x in r)Object.prototype.hasOwnProperty.call(r,x)&&(e[x]=r[x])}return e},h.apply(this,arguments)}function t(e,_){if(e==null)return{};var r={},x=Object.keys(e),v,j;for(j=0;j<x.length;j++)v=x[j],!(_.indexOf(v)>=0)&&(r[v]=e[v]);return r}var m={display:"flex"};function i(e){var _=e.className,r=e.style,x=r===void 0?m:r,v=e.scale,j=e.shape,E=e.domain,A=e.fill,P=A===void 0?g:A,I=e.size,D=I===void 0?g:I,C=e.labelFormat,U=C===void 0?d:C,z=e.labelTransform,K=z===void 0?f:z,W=e.shapeWidth,H=W===void 0?15:W,V=e.shapeHeight,N=V===void 0?15:V,w=e.shapeMargin,$=w===void 0?"2px 4px 2px 0":w,k=e.shapeStyle,R=e.labelAlign,M=R===void 0?"left":R,T=e.labelFlex,F=T===void 0?"1":T,B=e.labelMargin,ne=B===void 0?"0 4px":B,X=e.itemMargin,te=X===void 0?"0":X,G=e.direction,le=G===void 0?"column":G,Q=e.itemDirection,ae=Q===void 0?"row":Q,se=e.legendLabelProps,Z=e.children,oe=t(e,L),q=E||("domain"in v?v.domain():[]),re=K({scale:v,labelFormat:U}),ee=q.map(re);return Z?b.createElement(b.Fragment,null,Z(ee)):b.createElement("div",{className:c()("visx-legend",_),style:h({},x,{flexDirection:le})},ee.map(function(Y,J){return b.createElement(y.A,h({key:"legend-"+Y.text+"-"+J,margin:te,flexDirection:ae},oe),b.createElement(s.A,{shape:j,height:N,width:H,margin:$,item:q[J],itemIndex:J,label:Y,fill:P,size:D,shapeStyle:k}),b.createElement(p.A,h({label:Y.text,flex:F,margin:ne,align:M},se)))}))}i.propTypes={children:a().func,className:a().string,domain:a().array,shapeWidth:a().oneOfType([a().string,a().number]),shapeHeight:a().oneOfType([a().string,a().number]),shapeMargin:a().oneOfType([a().string,a().number]),labelAlign:a().string,labelFlex:a().oneOfType([a().string,a().number]),labelMargin:a().oneOfType([a().string,a().number]),itemMargin:a().oneOfType([a().string,a().number]),fill:a().func,size:a().func,shapeStyle:a().func};function o(e){return b.createElement(i,e)}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js":(S,O,l)=>{l.d(O,{A:()=>u});var b=l("../../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js"),n=l("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/operators/scaleOperator.js"),a=(0,n.A)("domain","range","reverse","unknown");function u(c){return a((0,b.A)(),c)}},"../charts/src/components/legend/base-legend.tsx":(S,O,l)=>{l.d(O,{$:()=>_});var b=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),n=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendItem.js"),a=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendShape.js"),u=l("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Legend/LegendLabel.js"),c=l("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),y=l("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=l("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=l.n(s),g=l("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss"),f={};f.insert="head",f.singleton=!1;var L=d()(g.A,f);const h=g.A.locals||{};function t(r){return r&&typeof r=="object"&&"value"in r&&typeof r.value<"u"?r.value:r}function m(r){return String(t(r))}function i({scale:r,labelFormat:x}){return(v,j)=>({datum:v,index:j,text:`${x(v,j)}`,value:r(v)})}var o=l("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e={horizontal:"row",vertical:"column"},_=({items:r,className:x,orientation:v="horizontal",shape:j="rect",fill:E=m,size:A=m,labelFormat:P=t,labelTransform:I=i,shapeWidth:D=16,shapeHeight:C=16,shapeMargin:U="2px 4px 2px 0",labelAlign:z="left",labelFlex:K="1",labelMargin:W="0 4px",itemMargin:H="0",itemDirection:V="row",legendLabelProps:N,...w})=>{const $=(0,c.A)({domain:r.map(M=>M.label),range:r.map(M=>M.color)}),k=$.domain(),R=(0,p.useCallback)(({index:M})=>r[M]?.shapeStyle??{},[r]);return(0,o.jsx)(b.A,{scale:$,labelFormat:P,labelTransform:I,children:M=>(0,o.jsx)("div",{role:"list","data-testid":`legend-${v}`,className:(0,y.A)(h.legend,h[`legend--${v}`],x),style:{flexDirection:e[v]},children:M.map((T,F)=>(0,o.jsxs)(n.A,{className:h["legend-item"],"data-testid":"legend-item",margin:H,flexDirection:V,...w,children:[(0,o.jsx)(a.A,{shape:j,height:C,width:D,margin:U,item:k[F],itemIndex:F,label:T,fill:E,size:A,shapeStyle:R}),(0,o.jsxs)(u.A,{label:T.text,flex:K,margin:W,align:z,className:h["legend-item-label"],...N,children:[T.text,r.find(B=>B.label===T.text)?.value&&(0,o.jsx)("span",{className:h["legend-item-value"],children:r.find(B=>B.label===T.text)?.value})]})]},`legend-${T.text}-${F}`))})})};try{_.displayName="BaseLegend",_.__docgenInfo={description:"",displayName:"BaseLegend",props:{size:{defaultValue:null,description:"Legend item size accessor function.",name:"size",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string | number"}},className:{defaultValue:null,description:"Classname to be applied to legend container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional render function override.",name:"children",required:!1,type:{name:"(labels: { datum: any; index: number; text: string; value?: any; }[]) => React.ReactNode"}},style:{defaultValue:null,description:"Styles to be applied to the legend container.",name:"style",required:!1,type:{name:"React.CSSProperties"}},fill:{defaultValue:null,description:"Legend item fill accessor function.",name:"fill",required:!1,type:{name:"(label: { datum: any; index: number; text: string; value?: any; }) => string"}},domain:{defaultValue:null,description:"Legend domain.",name:"domain",required:!1,type:{name:"any[]"}},shapeWidth:{defaultValue:{value:"16"},description:"Width of the legend shape.",name:"shapeWidth",required:!1,type:{name:"string | number"}},shapeHeight:{defaultValue:{value:"16"},description:"Height of the legend shape.",name:"shapeHeight",required:!1,type:{name:"string | number"}},shapeMargin:{defaultValue:{value:"2px 4px 2px 0"},description:"Margin of the legend shape.",name:"shapeMargin",required:!1,type:{name:"string | number"}},labelAlign:{defaultValue:{value:"left"},description:"Flex-box alignment of legend item labels.",name:"labelAlign",required:!1,type:{name:"string"}},labelFlex:{defaultValue:{value:"1"},description:"Flex-box flex of legend item labels.",name:"labelFlex",required:!1,type:{name:"string | number"}},labelMargin:{defaultValue:{value:"0 4px"},description:"Margin of legend item labels.",name:"labelMargin",required:!1,type:{name:"string | number"}},itemMargin:{defaultValue:{value:"0"},description:"Margin of legend items.",name:"itemMargin",required:!1,type:{name:"string | number"}},itemDirection:{defaultValue:{value:"row"},description:"Flex direction of legend items.",name:"itemDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},shape:{defaultValue:{value:"rect"},description:"Legend shape string preset or Element or Component.",name:"shape",required:!1,type:{name:"LegendShape<any, any>"}},labelFormat:{defaultValue:null,description:"Given a legend item and its index, returns an item label.",name:"labelFormat",required:!1,type:{name:"LabelFormatter<any>"}},labelTransform:{defaultValue:null,description:"Given the legend scale and labelFormatter, returns a label with datum, index, value, and label.",name:"labelTransform",required:!1,type:{name:"LabelFormatterFactory<ScaleOrdinal<any, any, never>>"}},legendLabelProps:{defaultValue:null,description:"Additional props to be set on LegendLabel.",name:"legendLabelProps",required:!1,type:{name:"Partial<LegendLabelProps>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:_.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(S,O,l)=>{l.d(O,{A:()=>a});function b(u){var c,y,p="";if(typeof u=="string"||typeof u=="number")p+=u;else if(typeof u=="object")if(Array.isArray(u)){var s=u.length;for(c=0;c<s;c++)u[c]&&(y=b(u[c]))&&(p&&(p+=" "),p+=y)}else for(y in u)u[y]&&(p&&(p+=" "),p+=y);return p}function n(){for(var u,c,y=0,p="",s=arguments.length;y<s;y++)(u=arguments[y])&&(c=b(u))&&(p&&(p+=" "),p+=c);return p}const a=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../charts/src/components/legend/legend.module.scss":(S,O,l)=>{l.d(O,{A:()=>y});var b=l("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=l.n(b),a=l("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),u=l.n(a),c=u()(n());c.push([S.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;font-size:.875rem}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),c.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const y=c}}]);
