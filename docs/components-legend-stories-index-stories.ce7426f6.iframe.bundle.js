"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4696],{"../charts/src/components/legend/stories/index.stories.tsx":(P,y,i)=>{i.r(y),i.d(y,{Horizontal:()=>d,Vertical:()=>b,WithLongLabels:()=>u,__namedExportsOrder:()=>_,default:()=>m});var o=i("../charts/src/components/legend/base-legend.tsx"),x=`import { Meta, StoryObj } from '@storybook/react';
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
`,n={Horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},Vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},WithLongLabels:{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}};const m={title:"JS Packages/Charts/Composites/Legend",component:o.$,parameters:{storySource:{source:`import { BaseLegend } from '../base-legend';
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
};`,locationsMap:{horizontal:{startLoc:{col:26,line:24},endLoc:{col:1,line:29},startBody:{col:26,line:24},endBody:{col:1,line:29}},vertical:{startLoc:{col:24,line:30},endLoc:{col:1,line:35},startBody:{col:24,line:30},endBody:{col:1,line:35}},"with-long-labels":{startLoc:{col:30,line:36},endLoc:{col:1,line:53},startBody:{col:30,line:36},endBody:{col:1,line:53}}}},layout:"centered",docs:{description:{component:"A flexible legend component that can be customized with different styles and orientations."}}}},p=[{label:"Desktop",value:"86%",color:"#3858E9"},{label:"Mobile",value:"52%",color:"#80C8FF"}],d={args:{items:p,orientation:"horizontal"}},b={args:{items:p,orientation:"vertical"}},u={args:{items:[{label:"Very Long Desktop Usage",value:"86%",color:"#3858E9"},{label:"Extended Mobile Sessions",value:"52%",color:"#80C8FF"},{label:"Tablet Device Access",value:"35%",color:"#44B556"}],orientation:"horizontal"}},_=["Horizontal","Vertical","WithLongLabels"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'horizontal'
  }
}`,...d.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockData,
    orientation: 'vertical'
  }
}`,...b.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js":(P,y,i)=>{i.d(y,{A:()=>de});var o=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=i("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=i.n(x),c=i("../../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=i.n(c),p=["flexDirection","alignItems","margin","display","children"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},d.apply(this,arguments)}function b(e,a){if(e==null)return{};var t={},l=Object.keys(e),s,r;for(r=0;r<l.length;r++)s=l[r],!(a.indexOf(s)>=0)&&(t[s]=e[s]);return t}function u(e){var a=e.flexDirection,t=a===void 0?"row":a,l=e.alignItems,s=l===void 0?"center":l,r=e.margin,g=r===void 0?"0":r,h=e.display,v=h===void 0?"flex":h,f=e.children,O=b(e,p);return o.createElement("div",d({className:"visx-legend-item",style:{display:v,alignItems:s,flexDirection:t,margin:g}},O),f)}u.propTypes={alignItems:n().string,margin:n().oneOfType([n().string,n().number]),children:n().node,display:n().string};var _=["flex","label","margin","align","children"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},w.apply(this,arguments)}function A(e,a){if(e==null)return{};var t={},l=Object.keys(e),s,r;for(r=0;r<l.length;r++)s=l[r],!(a.indexOf(s)>=0)&&(t[s]=e[s]);return t}function L(e){var a=e.flex,t=a===void 0?"1":a,l=e.label,s=e.margin,r=s===void 0?"5px 0":s,g=e.align,h=g===void 0?"left":g,v=e.children,f=A(e,_);return o.createElement("div",w({className:"visx-legend-label",style:{justifyContent:h,display:"flex",flex:t,margin:r}},f),v||l)}L.propTypes={align:n().string,label:n().node,flex:n().oneOfType([n().string,n().number]),margin:n().oneOfType([n().string,n().number]),children:n().node};function B(){return B=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},B.apply(this,arguments)}function S(e){var a=e.fill,t=e.width,l=e.height,s=e.style;return o.createElement("div",{style:B({width:t,height:l,background:a},s)})}S.propTypes={fill:n().string,width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};var z=i("../../../node_modules/.pnpm/@visx+group@3.12.0_react@18.3.1/node_modules/@visx/group/esm/Group.js");function E(e){var a=e.fill,t=e.width,l=e.height,s=e.style,r=typeof t=="string"||typeof t>"u"?0:t,g=typeof l=="string"||typeof l>"u"?0:l,h=Math.max(r,g),v=h/2;return o.createElement("svg",{width:h,height:h},o.createElement(z.A,{top:v,left:v},o.createElement("circle",{r:v,fill:a,style:s})))}E.propTypes={fill:n().string,width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};function D(e){var a=e.fill,t=e.width,l=e.height,s=e.style,r=typeof l=="string"||typeof l>"u"?0:l,g=typeof s?.strokeWidth=="number"?s?.strokeWidth:2;return o.createElement("svg",{width:t,height:l},o.createElement(z.A,{top:r/2-g/2},o.createElement("line",{x1:0,x2:t,y1:0,y2:0,stroke:a,strokeWidth:g,style:s})))}D.propTypes={fill:n().string,width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},j.apply(this,arguments)}var $=function(){};function ae(e){var a=e.shape,t=a===void 0?"rect":a,l=e.fill,s=l===void 0?$:l,r=e.size,g=r===void 0?$:r,h=e.width,v=e.height,f=e.label,O=e.item,M=e.itemIndex,C=e.shapeStyle,W=C===void 0?$:C,T={width:h,height:v,item:O,itemIndex:M,label:f,fill:s(j({},f)),size:g(j({},f)),style:W(j({},f))};return typeof t=="string"?t==="circle"?o.createElement(E,T):t==="line"?o.createElement(D,T):o.createElement(S,T):o.isValidElement(t)?o.cloneElement(t,T):t?o.createElement(t,T):null}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},I.apply(this,arguments)}function R(e){var a=e.shape,t=a===void 0?S:a,l=e.width,s=e.height,r=e.margin,g=e.label,h=e.item,v=e.itemIndex,f=e.fill,O=e.size,M=e.shapeStyle;return o.createElement("div",{className:"visx-legend-shape",style:{display:"flex",width:O?O(I({},g)):l,height:O?O(I({},g)):s,margin:r}},ae({shape:t,item:h,itemIndex:v,label:g,width:l,height:s,fill:f,shapeStyle:M}))}R.propTypes={itemIndex:n().number.isRequired,margin:n().oneOfType([n().string,n().number]),width:n().oneOfType([n().string,n().number]),height:n().oneOfType([n().string,n().number])};function U(e){return e&&typeof e=="object"&&"value"in e&&typeof e.value<"u"?e.value:e}function H(e){return String(U(e))}function se(e){var a=e.scale,t=e.labelFormat;return function(l,s){return{datum:l,index:s,text:""+t(l,s),value:a(l)}}}var oe=["className","style","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","shapeStyle","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","legendLabelProps","children"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},F.apply(this,arguments)}function ie(e,a){if(e==null)return{};var t={},l=Object.keys(e),s,r;for(r=0;r<l.length;r++)s=l[r],!(a.indexOf(s)>=0)&&(t[s]=e[s]);return t}var re={display:"flex"};function V(e){var a=e.className,t=e.style,l=t===void 0?re:t,s=e.scale,r=e.shape,g=e.domain,h=e.fill,v=h===void 0?H:h,f=e.size,O=f===void 0?H:f,M=e.labelFormat,C=M===void 0?U:M,W=e.labelTransform,T=W===void 0?se:W,K=e.shapeWidth,ce=K===void 0?15:K,J=e.shapeHeight,me=J===void 0?15:J,Y=e.shapeMargin,pe=Y===void 0?"2px 4px 2px 0":Y,ue=e.shapeStyle,X=e.labelAlign,ge=X===void 0?"left":X,G=e.labelFlex,he=G===void 0?"1":G,Q=e.labelMargin,ve=Q===void 0?"0 4px":Q,Z=e.itemMargin,fe=Z===void 0?"0":Z,q=e.direction,ye=q===void 0?"column":q,ee=e.itemDirection,be=ee===void 0?"row":ee,_e=e.legendLabelProps,ne=e.children,xe=ie(e,oe),te=g||("domain"in s?s.domain():[]),Oe=T({scale:s,labelFormat:C}),le=te.map(Oe);return ne?o.createElement(o.Fragment,null,ne(le)):o.createElement("div",{className:m()("visx-legend",a),style:F({},l,{flexDirection:ye})},le.map(function(k,N){return o.createElement(u,F({key:"legend-"+k.text+"-"+N,margin:fe,flexDirection:be},xe),o.createElement(R,{shape:r,height:me,width:ce,margin:pe,item:te[N],itemIndex:N,label:k,fill:v,size:O,shapeStyle:ue}),o.createElement(L,F({label:k.text,flex:he,margin:ve,align:ge},_e)))}))}V.propTypes={children:n().func,className:n().string,domain:n().array,shapeWidth:n().oneOfType([n().string,n().number]),shapeHeight:n().oneOfType([n().string,n().number]),shapeMargin:n().oneOfType([n().string,n().number]),labelAlign:n().string,labelFlex:n().oneOfType([n().string,n().number]),labelMargin:n().oneOfType([n().string,n().number]),itemMargin:n().oneOfType([n().string,n().number]),fill:n().func,size:n().func,shapeStyle:n().func};function de(e){return o.createElement(V,e)}},"../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js":(P,y,i)=>{i.d(y,{A:()=>c});var o=i("../../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js"),x=i("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/operators/scaleOperator.js"),n=(0,x.A)("domain","range","reverse","unknown");function c(m){return n((0,o.A)(),m)}},"../charts/src/components/legend/base-legend.tsx":(P,y,i)=>{i.d(y,{$:()=>A});var o=i("../../../node_modules/.pnpm/@visx+legend@3.12.0_react@18.3.1/node_modules/@visx/legend/esm/legends/Ordinal.js"),x=i("../../../node_modules/.pnpm/@visx+scale@3.12.0/node_modules/@visx/scale/esm/scales/ordinal.js"),n=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=i("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=i.n(c),p=i("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss"),d={};d.insert="head",d.singleton=!1;var b=m()(p.A,d);const u=p.A.locals||{};var _=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w={horizontal:"row",vertical:"column"},A=({items:L,className:B,orientation:S="horizontal"})=>{const z=(0,x.A)({domain:L.map(E=>E.label),range:L.map(E=>E.color)});return(0,_.jsx)("div",{className:(0,n.A)(u.legend,u[`legend--${S}`],B),role:"list","data-testid":`legend-${S}`,children:(0,_.jsx)(o.A,{scale:z,direction:w[S],shape:"rect",shapeWidth:16,shapeHeight:16,className:u["legend-items"],children:E=>(0,_.jsx)("div",{className:u[`legend--${S}`],children:E.map(D=>(0,_.jsxs)("div",{className:u["legend-item"],role:"listitem","data-testid":"legend-item",children:[(0,_.jsx)("svg",{width:16,height:16,role:"img",children:(0,_.jsx)("rect",{width:16,height:16,fill:D.value,className:u["legend-item-swatch"],"data-testid":"legend-marker",role:"presentation"})}),(0,_.jsxs)("span",{className:u["legend-item-label"],children:[D.text,L.find(j=>j.label===D.text)?.value&&(0,_.jsx)("span",{className:u["legend-item-value"],children:L.find(j=>j.label===D.text)?.value})]})]},D.text))})})})};try{A.displayName="BaseLegend",A.__docgenInfo={description:"",displayName:"BaseLegend",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LegendItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"ScaleOrdinal<StringLike, unknown, never>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../charts/src/components/legend/base-legend.tsx#BaseLegend"]={docgenInfo:A.__docgenInfo,name:"BaseLegend",path:"../charts/src/components/legend/base-legend.tsx#BaseLegend"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(P,y,i)=>{i.d(y,{A:()=>n});function o(c){var m,p,d="";if(typeof c=="string"||typeof c=="number")d+=c;else if(typeof c=="object")if(Array.isArray(c)){var b=c.length;for(m=0;m<b;m++)c[m]&&(p=o(c[m]))&&(d&&(d+=" "),d+=p)}else for(p in c)c[p]&&(d&&(d+=" "),d+=p);return d}function x(){for(var c,m,p=0,d="",b=arguments.length;p<b;p++)(c=arguments[p])&&(m=o(c))&&(d&&(d+=" "),d+=m);return d}const n=x},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../charts/src/components/legend/legend.module.scss":(P,y,i)=>{i.d(y,{A:()=>p});var o=i("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=i.n(o),n=i("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=i.n(n),m=c()(x());m.push([P.id,".DUIr1VlHncoHLePmjlDS{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px}.twRvJqPSdo3D0YUj3YBt{display:flex;flex-direction:column;gap:8px}.Jopyl2B1ji7ssDCPDVmI{display:flex;align-items:center;gap:8px;font-size:.875rem}.Jm5pF35m9hvJUFFWW0uS{border-radius:2px}.AyocUvYOPM3rztxeHhaJ{color:var(--jp-gray-80, #2c3338);display:flex;align-items:center;gap:.5rem}.NIomw0MXKp7BuYFn68y0{font-weight:500}",""]),m.locals={"legend--horizontal":"DUIr1VlHncoHLePmjlDS","legend--vertical":"twRvJqPSdo3D0YUj3YBt","legend-item":"Jopyl2B1ji7ssDCPDVmI","legend-item-swatch":"Jm5pF35m9hvJUFFWW0uS","legend-item-label":"AyocUvYOPM3rztxeHhaJ","legend-item-value":"NIomw0MXKp7BuYFn68y0"};const p=m}}]);
