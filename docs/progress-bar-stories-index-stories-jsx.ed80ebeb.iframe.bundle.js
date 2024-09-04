"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9809],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(b,l,e)=>{var k,v,f,x,P,E,h,S,T;e.r(l),e.d(l,{Complete:()=>p,Halfway:()=>c,Initial:()=>d,__namedExportsOrder:()=>B,default:()=>R});var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(u),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),o={};o.insert="head",o.singleton=!1;var a=s()(r.A,o);const n=r.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=({className:t,total:j=100,value:y})=>{if(y==null)return null;const A=Math.min(Math.round(y/j*100),100),M={width:`${A}%`};return(0,_.jsxs)("div",{className:(0,i.A)(t,n["progress-bar"]),children:[(0,_.jsx)("div",{className:n["progress-bar__wrapper"],children:(0,_.jsx)("div",{"aria-valuemax":j,"aria-valuemin":0,"aria-valuenow":Math.min(y,j),className:n["progress-bar__bar"],role:"progressbar",style:M})}),(0,_.jsx)("p",{className:n["progress-bar__percent"],children:`${A}%`})]})},g=w;w.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@return {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1}}};const R={title:"Plugins/Protect/Progress Bar",component:g,parameters:{layout:"centered"},decorators:[t=>(0,_.jsx)("div",{style:{width:480},children:(0,_.jsx)(t,{})})]},d=t=>(0,_.jsx)(g,{...t});d.args={value:0,total:100};const c=t=>(0,_.jsx)(g,{...t});c.args={value:50,total:100};const p=t=>(0,_.jsx)(g,{...t});p.args={value:100,total:100};const B=["Initial","Halfway","Complete"];d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}},c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}},p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(b,l,e)=>{e.d(l,{A:()=>u});function m(s){var r,o,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var n=s.length;for(r=0;r<n;r++)s[r]&&(o=m(s[r]))&&(a&&(a+=" "),a+=o)}else for(o in s)s[o]&&(a&&(a+=" "),a+=o);return a}function i(){for(var s,r,o=0,a="",n=arguments.length;o<n;o++)(s=arguments[o])&&(r=m(s))&&(a&&(a+=" "),a+=r);return a}const u=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(b,l,e)=>{e.d(l,{A:()=>o});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(u),r=s()(i());r.push([b.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*3)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),r.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const o=r}}]);})();