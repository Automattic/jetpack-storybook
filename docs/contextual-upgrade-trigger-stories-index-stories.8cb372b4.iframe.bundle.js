"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[510],{"../components/components/contextual-upgrade-trigger/stories/index.stories.tsx":(E,r,s)=>{var m,e,l,c,j,x;s.r(r),s.d(r,{Default:()=>d,Link:()=>o,__namedExportsOrder:()=>A,default:()=>t});var p=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),i=s("../components/components/contextual-upgrade-trigger/index.tsx"),u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import { action } from '@storybook/addon-actions';
import ContextualUpgradeTrigger from '../index';

export default {
	title: 'JS Packages/Components/Contextual Upgrade Trigger',
	component: ContextualUpgradeTrigger,
};

const Template = args => <ContextualUpgradeTrigger { ...args } />;

const DefaultArgs = {
	description: 'Current status of the product (i.e. how many updates per day)',
	cta: 'Text action line, recommending the next tier',
	onClick: action( 'onClick' ),
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const Link = Template.bind( {} );
Link.args = {
	...DefaultArgs,
	onClick: null,
	href: 'https://jetpack.com',
};
`,n={Default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},Link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}};const t={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import ContextualUpgradeTrigger from '../index';
export default {
  title: 'JS Packages/Components/Contextual Upgrade Trigger',
  component: ContextualUpgradeTrigger
};
const Template = args => <ContextualUpgradeTrigger {...args} />;
const DefaultArgs = {
  description: 'Current status of the product (i.e. how many updates per day)',
  cta: 'Text action line, recommending the next tier',
  onClick: action('onClick')
};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export const Link = Template.bind({});
Link.args = {
  ...DefaultArgs,
  onClick: null,
  href: 'https://jetpack.com'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ContextualUpgradeTrigger {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...Link.parameters?.docs,
    source: {
      originalSource: "args => <ContextualUpgradeTrigger {...args} />",
      ...Link.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}}}},title:"JS Packages/Components/Contextual Upgrade Trigger",component:i.Z},g=h=>(0,u.jsx)(i.Z,{...h});g.displayName="Template";const b={description:"Current status of the product (i.e. how many updates per day)",cta:"Text action line, recommending the next tier",onClick:(0,p.aD)("onClick")},d=g.bind({});d.args=b;const o=g.bind({});o.args={...b,onClick:null,href:"https://jetpack.com"},d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(l=(e=d.parameters)==null?void 0:e.docs)==null?void 0:l.source}}},o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(x=(j=o.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const A=["Default","Link"]},"../components/components/button/index.tsx":(E,r,s)=>{s.d(r,{Z:()=>j});var p=s("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),u=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),_=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),n=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=s.n(n),g=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=s.n(b),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),A={};A.insert="head",A.singleton=!1;var m=d()(o.Z,A);const e=o.Z.locals||{};var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=(0,g.forwardRef)((x,h)=>{var z,C;const{children:a,variant:f="primary",size:y="normal",weight:O="bold",icon:v,iconSize:w,disabled:T,isDestructive:L,isLoading:k,isExternalLink:P,className:V,text:R,fullWidth:S,...D}=x,X=t()(e.button,V,{[e.normal]:y==="normal",[e.small]:y==="small",[e.icon]:!!v,[e.loading]:k,[e.regular]:O==="regular",[e["full-width"]]:S,[e["is-icon-button"]]:!!v&&!a});D.ref=h;const B=y==="normal"?20:16,I=P&&(0,l.jsx)(u.Z,{size:B,icon:_.Z,className:e["external-icon"]}),U=P?"_blank":void 0,Z=(a==null?void 0:a[0])&&a[0]!==null&&((C=(z=a==null?void 0:a[0])==null?void 0:z.props)==null?void 0:C.className)!=="components-tooltip";return(0,l.jsxs)(p.ZP,{target:U,variant:f,className:t()(X,{"has-text":!!v&&Z}),icon:P?void 0:v,iconSize:w,disabled:T,"aria-disabled":T,isDestructive:L,text:R,...D,children:[k&&(0,l.jsx)(i.ZP,{}),(0,l.jsx)("span",{children:a}),I]})});c.displayName="Button";const j=c;try{c.displayName="Button",c.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:c.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(x){}},"../components/components/contextual-upgrade-trigger/index.tsx":(E,r,s)=>{s.d(r,{Z:()=>c});var p=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),u=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=s.n(u),n=s("../components/components/icon-tooltip/index.tsx"),t=s("../components/components/text/index.tsx"),g=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=s.n(g),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),o={};o.insert="head",o.singleton=!1;var A=b()(d.Z,o);const m=d.Z.locals||{};var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=({description:j,cta:x,onClick:h,href:a,openInNewTab:f=!1,className:y,tooltipText:O=""})=>{const v=a!==void 0?"a":"button",w=v==="a"?{href:a,...f&&{target:"_blank"}}:{onClick:h};return(0,e.jsxs)("div",{className:_()(m.cut,y),children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(t.ZP,{className:m.description,children:j}),O&&(0,e.jsx)(n.Z,{className:m.iconContainer,iconSize:16,offset:4,children:(0,e.jsx)(t.ZP,{variant:"body-small",children:O})})]}),(0,e.jsx)("div",{children:(0,e.jsx)(v,{...w,children:(0,e.jsx)(t.ZP,{className:m.cta,children:x})})})]}),(0,e.jsx)(p.Z,{icon:i.Z,className:m.icon,size:30})]})};l.displayName="ContextualUpgradeTrigger";const c=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(E,r,s)=>{s.d(r,{Z:()=>t});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(p),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=s.n(u),n=_()(i());n.push([E.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),n.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const t=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(E,r,s)=>{s.d(r,{Z:()=>t});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(p),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=s.n(u),n=_()(i());n.push([E.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out;pointer-events:none}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),n.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const t=n}}]);})();