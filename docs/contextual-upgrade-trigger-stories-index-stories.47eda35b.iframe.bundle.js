"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[510],{"../components/components/contextual-upgrade-trigger/stories/index.stories.tsx":(y,r,e)=>{var t,o,u,g,x,T;e.r(r),e.d(r,{Default:()=>s,Link:()=>n,__namedExportsOrder:()=>j,default:()=>a});var c=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),d=e("../components/components/contextual-upgrade-trigger/index.tsx"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import { action } from '@storybook/addon-actions';
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
`,l={Default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},Link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}};const a={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}},link:{startLoc:{col:17,line:7},endLoc:{col:63,line:7},startBody:{col:17,line:7},endBody:{col:63,line:7}}}}},title:"JS Packages/Components/Contextual Upgrade Trigger",component:d.Z},p=f=>(0,i.jsx)(d.Z,{...f});p.displayName="Template";const _={description:"Current status of the product (i.e. how many updates per day)",cta:"Text action line, recommending the next tier",onClick:(0,c.aD)("onClick")},s=p.bind({});s.args=_;const n=p.bind({});n.args={..._,onClick:null,href:"https://jetpack.com"},s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(u=(o=s.parameters)==null?void 0:o.docs)==null?void 0:u.source}}},n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"args => <ContextualUpgradeTrigger {...args} />",...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const j=["Default","Link"]},"../components/components/contextual-upgrade-trigger/index.tsx":(y,r,e)=>{e.d(r,{Z:()=>g});var c=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(i),l=e("../components/components/icon-tooltip/index.tsx"),a=e("../components/components/text/index.tsx"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(p),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),n={};n.insert="head",n.singleton=!1;var j=_()(s.Z,n);const t=s.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=x=>{let{description:T,cta:f,onClick:k,href:D,openInNewTab:v=!1,className:b,tooltipText:C=""}=x;const h=D!==void 0?"a":"button",L=h==="a"?{href:D,...v&&{target:"_blank"}}:{onClick:k};return(0,o.jsxs)("div",{className:m()(t.cut,b),children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(a.ZP,{className:t.description,children:T}),C&&(0,o.jsx)(l.Z,{className:t.iconContainer,iconSize:16,offset:4,children:(0,o.jsx)(a.ZP,{variant:"body-small",children:C})})]}),(0,o.jsx)("div",{children:(0,o.jsx)(h,{...L,children:(0,o.jsx)(a.ZP,{className:t.cta,children:f})})})]}),(0,o.jsx)(c.Z,{icon:d.Z,className:t.icon,size:30})]})};u.displayName="ContextualUpgradeTrigger";const g=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(y,r,e)=>{e.d(r,{Z:()=>a});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(c),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(i),l=m()(d());l.push([y.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out;pointer-events:none}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),l.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const a=l}}]);})();
