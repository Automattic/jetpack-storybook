"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9809],{"../../plugins/protect/src/js/components/progress-bar/stories/index.stories.jsx":(b,d,e)=>{var w,v,k,f,x,P,E,h,S;e.r(d),e.d(d,{Complete:()=>p,Halfway:()=>c,Initial:()=>n,__namedExportsOrder:()=>B,default:()=>R});var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(u),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss"),r={};r.insert="head",r.singleton=!1;var o=s()(a.A,r);const l=a.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=({className:t,total:j=100,value:T=0})=>{const A=Math.min(Math.round(T/j*100),100),M={width:`${A}%`};return(0,_.jsxs)("div",{className:(0,i.A)(t,l["progress-bar"]),children:[(0,_.jsx)("div",{className:l["progress-bar__wrapper"],children:(0,_.jsx)("div",{"aria-valuemax":j,"aria-valuemin":0,"aria-valuenow":Math.min(T,j),className:l["progress-bar__bar"],role:"progressbar",style:M})}),(0,_.jsx)("p",{className:l["progress-bar__percent"],children:`${A}%`})]})},g=y;y.__docgenInfo={description:`Progress Bar component

@param {object} props           - Component props
@param {string} props.className - Additional classnames
@param {number} props.total     - Total integer
@param {number} props.value     - Progress integer
@return {object} ProgressBar React component.`,methods:[],displayName:"ProgressBar",props:{total:{defaultValue:{value:"100",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1}}};const R={title:"Plugins/Protect/Progress Bar",component:g,parameters:{layout:"centered"},decorators:[t=>(0,_.jsx)("div",{style:{width:480},children:(0,_.jsx)(t,{})})]},n=t=>(0,_.jsx)(g,{...t});n.args={value:0,total:100};const c=t=>(0,_.jsx)(g,{...t});c.args={value:50,total:100};const p=t=>(0,_.jsx)(g,{...t});p.args={value:100,total:100};const B=["Initial","Halfway","Complete"];n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}},c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(P=(x=c.parameters)==null?void 0:x.docs)==null?void 0:P.source}}},p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(S=(h=p.parameters)==null?void 0:h.docs)==null?void 0:S.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(b,d,e)=>{e.d(d,{A:()=>u});function m(s){var a,r,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(a=0;a<l;a++)s[a]&&(r=m(s[a]))&&(o&&(o+=" "),o+=r)}else for(r in s)s[r]&&(o&&(o+=" "),o+=r);return o}function i(){for(var s,a,r=0,o="",l=arguments.length;r<l;r++)(s=arguments[r])&&(a=m(s))&&(o&&(o+=" "),o+=a);return o}const u=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/progress-bar/style.module.scss":(b,d,e)=>{e.d(d,{A:()=>r});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(u),a=s()(i());a.push([b.id,".adw_MxwSWmsRE8kLLm2_{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(var(--spacing-base)*2)}.pGciXd_TRRoeXV3y_sbL{width:100%;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-gray-5)}.nPrWVtknY_INQkTREEJy{height:9px;border-radius:calc(var(--spacing-base)*3);background-color:var(--jp-green-40);transition:width 200ms}.wNBwHd7yUSTyykFPZPeO{font-weight:600;line-height:24px;color:var(--jp-gray-90);margin-left:auto;padding-left:var(--spacing-base)}",""]),a.locals={"progress-bar":"adw_MxwSWmsRE8kLLm2_","progress-bar__wrapper":"pGciXd_TRRoeXV3y_sbL","progress-bar__bar":"nPrWVtknY_INQkTREEJy","progress-bar__percent":"wNBwHd7yUSTyykFPZPeO"};const r=a}}]);})();