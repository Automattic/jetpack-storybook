(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2265],{"../components/components/alert/stories/index.stories.jsx":(_,l,e)=>{var m,u,w;"use strict";e.r(l),e.d(l,{__namedExportsOrder:()=>p,_default:()=>c,default:()=>i});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../components/components/alert/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import React from 'react';
import Alert from '../index';

export default {
	title: 'JS Packages/Components/Alert',
	component: Alert,
	argTypes: {
		level: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'success', 'warning', 'error' ],
		},
	},
};

const Template = args => <Alert { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	level: 'info',
	children: "Don't forget to check your email for the latest news.",
	showIcon: true,
};
`,a={_default:{startLoc:{col:17,line:17},endLoc:{col:46,line:17},startBody:{col:17,line:17},endBody:{col:46,line:17}}};const i={parameters:{storySource:{source:`import React from 'react';
import Alert from '../index';

export default {
	title: 'JS Packages/Components/Alert',
	component: Alert,
	argTypes: {
		level: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'success', 'warning', 'error' ],
		},
	},
};

const Template = args => <Alert { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	level: 'info',
	children: "Don't forget to check your email for the latest news.",
	showIcon: true,
};
`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:46,line:17},startBody:{col:17,line:17},endBody:{col:46,line:17}}}}},title:"JS Packages/Components/Alert",component:n.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]}}},r=E=>(0,d.jsx)(n.Z,{...E});r.displayName="Template";const c=r.bind({});c.args={level:"info",children:"Don't forget to check your email for the latest news.",showIcon:!0},c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Alert {...args} />",...(w=(u=c.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const p=["_default"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,l,e)=>{"use strict";e.d(l,{Z:()=>d});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function n({icon:t,size:a=24,...i},r){return(0,s.cloneElement)(t,{width:a,height:a,...i,ref:r})}const d=(0,s.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(_,l,e)=>{"use strict";e.d(l,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(_,l,e)=>{"use strict";e.d(l,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(n.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(_,l,e)=>{"use strict";e.d(l,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(n.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,l,e)=>{"use strict";e.d(l,{Cd:()=>t,G:()=>a,UL:()=>p,Wj:()=>v,mg:()=>c,y$:()=>r});var s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=e.n(s),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=o=>(0,d.createElement)("circle",o),a=o=>(0,d.createElement)("g",o),i=o=>createElement("line",o),r=o=>(0,d.createElement)("path",o),c=o=>(0,d.createElement)("polygon",o),p=o=>(0,d.createElement)("rect",o),m=o=>createElement("defs",o),u=o=>createElement("radialGradient",o),w=o=>createElement("linearGradient",o),E=o=>createElement("stop",o),v=(0,d.forwardRef)(({className:o,isPressed:j,...g},f)=>{const h={...g,className:n()(o,{"is-pressed":j})||void 0,"aria-hidden":!0,focusable:!1};return(0,d.createElement)("svg",{...h,ref:f})});v.displayName="SVG"},"../components/components/alert/index.tsx":(_,l,e)=>{"use strict";e.d(l,{Z:()=>g});var s=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(a),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(c),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/alert/style.module.scss"),u={};u.insert="head",u.singleton=!1;var w=p()(m.Z,u);const E=m.Z.locals||{};var v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=f=>{switch(f){case"error":return s.Z;case"warning":return s.Z;case"info":return n.Z;case"success":return d.Z;default:return s.Z}},j=({level:f,children:h,showIcon:x})=>{const A=i()(E.container,E[`is-${f}`]);return(0,v.jsxs)("div",{className:A,children:[x&&(0,v.jsx)("div",{className:E["icon-wrapper"],children:(0,v.jsx)(t.Z,{icon:o(f),className:E.icon})}),(0,v.jsx)("div",{children:h})]})};j.displayName="Alert",j.defaultProps={level:"warning",showIcon:!0};const g=j},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,l)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var n={}.hasOwnProperty,d="[native code]";function t(){for(var a=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var c=typeof r;if(c==="string"||c==="number")a.push(r);else if(Array.isArray(r)){if(r.length){var p=t.apply(null,r);p&&a.push(p)}}else if(c==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){a.push(r.toString());continue}for(var m in r)n.call(r,m)&&r[m]&&a.push(m)}}}return a.join(" ")}_.exports?(t.default=t,_.exports=t):(e=[],s=function(){return t}.apply(l,e),s!==void 0&&(_.exports=s))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/alert/style.module.scss":(_,l,e)=>{"use strict";e.d(l,{Z:()=>i});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(d),a=t()(n());a.push([_.id,".Dr0cuxITW73j59FHThKT{display:flex;font-size:var(--font-body);line-height:calc(var(--spacing-base)*3);min-height:calc(var(--spacing-base)*3);align-items:center;margin:calc(var(--spacing-base)*2) 0}.MvLl9qD45yS7rUIyU2b9{margin-right:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);align-self:flex-start}.ohoU9eXsknJB46U8_yUC{color:var(--jp-red)}.ohoU9eXsknJB46U8_yUC .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-red)}.xcWqXBF4JgwHVsWxcq7h{color:var(--jp-yellow-40)}.xcWqXBF4JgwHVsWxcq7h .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-yellow-40)}.uZCUo9QKwj0rhAqpnax_{color:var(--jp-blue-40)}.uZCUo9QKwj0rhAqpnax_ .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-blue-40)}._77DMIzaNHFlGFVGYEe5{color:var(--jp-green)}._77DMIzaNHFlGFVGYEe5 .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-green)}",""]),a.locals={container:"Dr0cuxITW73j59FHThKT","icon-wrapper":"MvLl9qD45yS7rUIyU2b9","is-error":"ohoU9eXsknJB46U8_yUC",icon:"ANCBGRVQXZHwMJxaTEgq","is-warning":"xcWqXBF4JgwHVsWxcq7h","is-info":"uZCUo9QKwj0rhAqpnax_","is-success":"_77DMIzaNHFlGFVGYEe5"};const i=a}}]);})();
