(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2265],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,d,e)=>{"use strict";e.d(d,{Z:()=>o});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t(l){let{icon:a,size:r=24,...i}=l;return(0,s.cloneElement)(a,{width:r,height:r,...i})}const o=t},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js":(_,d,e)=>{"use strict";e.d(d,{Z:()=>l});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,s.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(t.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/info.js":(_,d,e)=>{"use strict";e.d(d,{Z:()=>l});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,s.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(t.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/warning.js":(_,d,e)=>{"use strict";e.d(d,{Z:()=>l});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,s.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(t.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,d,e)=>{"use strict";e.d(d,{Cd:()=>l,G:()=>a,UL:()=>m,Wj:()=>v,mg:()=>c,y$:()=>i});var s=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),t=e.n(s),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const l=n=>(0,o.createElement)("circle",n),a=n=>(0,o.createElement)("g",n),r=n=>createElement("line",n),i=n=>(0,o.createElement)("path",n),c=n=>(0,o.createElement)("polygon",n),m=n=>(0,o.createElement)("rect",n),E=n=>createElement("defs",n),p=n=>createElement("radialGradient",n),w=n=>createElement("linearGradient",n),u=n=>createElement("stop",n),v=n=>{let{className:f,isPressed:h,...j}=n;const g={...j,className:t()(f,{"is-pressed":h})||void 0,"aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",g)}},"../components/components/alert/stories/index.stories.jsx":(_,d,e)=>{var E,p,w;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>m,_default:()=>c,default:()=>r});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../components/components/alert/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import React from 'react';
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
`,a={_default:{startLoc:{col:17,line:15},endLoc:{col:44,line:15},startBody:{col:17,line:15},endBody:{col:44,line:15}}};const r={parameters:{storySource:{source:`import React from 'react';
import Alert from '../index';
export default {
  title: 'JS Packages/Components/Alert',
  component: Alert,
  argTypes: {
    level: {
      control: {
        type: 'select'
      },
      options: ['info', 'success', 'warning', 'error']
    }
  }
};
const Template = args => <Alert {...args} />;
export const _default = Template.bind({});
_default.args = {
  level: 'info',
  children: "Don't forget to check your email for the latest news.",
  showIcon: true
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <Alert {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:44,line:15},startBody:{col:17,line:15},endBody:{col:44,line:15}}}}},title:"JS Packages/Components/Alert",component:t.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]}}},i=u=>(0,o.jsx)(t.Z,{...u});i.displayName="Template";const c=i.bind({});c.args={level:"info",children:"Don't forget to check your email for the latest news.",showIcon:!0},c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Alert {...args} />",...(w=(p=c.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const m=["_default"]},"../components/components/alert/index.tsx":(_,d,e)=>{"use strict";e.d(d,{Z:()=>h});var s=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/warning.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/info.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(c),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/alert/style.module.scss"),p={};p.insert="head",p.singleton=!1;var w=m()(E.Z,p);const u=E.Z.locals||{};var v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=j=>{switch(j){case"error":return s.Z;case"warning":return s.Z;case"info":return t.Z;case"success":return o.Z;default:return s.Z}},f=j=>{let{level:g,children:x,showIcon:A}=j;const P=r()(u.container,u[`is-${g}`]);return(0,v.jsxs)("div",{className:P,children:[A&&(0,v.jsx)("div",{className:u["icon-wrapper"],children:(0,v.jsx)(l.Z,{icon:n(g),className:u.icon})}),(0,v.jsx)("div",{children:x})]})};f.displayName="Alert",f.defaultProps={level:"warning",showIcon:!0};const h=f},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(_,d)=>{var e,s;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var t={}.hasOwnProperty;function o(){for(var l=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if(i==="string"||i==="number")l.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&l.push(c)}}else if(i==="object")if(r.toString===Object.prototype.toString)for(var m in r)t.call(r,m)&&r[m]&&l.push(m);else l.push(r.toString())}}return l.join(" ")}_.exports?(o.default=o,_.exports=o):(e=[],s=function(){return o}.apply(d,e),s!==void 0&&(_.exports=s))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/alert/style.module.scss":(_,d,e)=>{"use strict";e.d(d,{Z:()=>r});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(s),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(o),a=l()(t());a.push([_.id,".Dr0cuxITW73j59FHThKT{display:flex;font-size:var(--font-body);line-height:calc(var(--spacing-base)*3);min-height:calc(var(--spacing-base)*3);align-items:center;margin:calc(var(--spacing-base)*2) 0}.MvLl9qD45yS7rUIyU2b9{margin-right:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);align-self:flex-start}.ohoU9eXsknJB46U8_yUC{color:var(--jp-red)}.ohoU9eXsknJB46U8_yUC .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-red)}.xcWqXBF4JgwHVsWxcq7h{color:var(--jp-yellow-40)}.xcWqXBF4JgwHVsWxcq7h .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-yellow-40)}.uZCUo9QKwj0rhAqpnax_{color:var(--jp-blue-40)}.uZCUo9QKwj0rhAqpnax_ .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-blue-40)}._77DMIzaNHFlGFVGYEe5{color:var(--jp-green)}._77DMIzaNHFlGFVGYEe5 .ANCBGRVQXZHwMJxaTEgq{fill:var(--jp-green)}",""]),a.locals={container:"Dr0cuxITW73j59FHThKT","icon-wrapper":"MvLl9qD45yS7rUIyU2b9","is-error":"ohoU9eXsknJB46U8_yUC",icon:"ANCBGRVQXZHwMJxaTEgq","is-warning":"xcWqXBF4JgwHVsWxcq7h","is-info":"uZCUo9QKwj0rhAqpnax_","is-success":"_77DMIzaNHFlGFVGYEe5"};const r=a}}]);})();
