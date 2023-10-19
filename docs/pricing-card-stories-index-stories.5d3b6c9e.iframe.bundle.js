"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[338],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(w,j,s)=>{s.d(j,{aD:()=>C});var u="actions",i="storybook/actions",l=`${i}/panel`,d=`${i}/action-event`,m=`${i}/action-clear`,v="$___storybook.isCyclic",f=s("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_=s("@storybook/preview-api"),x={depth:10,clearOnStoryChange:!0,limit:50},b=(t={})=>{Object.assign(x,t)},c=(t,r)=>{let n=Object.getPrototypeOf(t);return!n||r(n)?n:c(n,r)},h=t=>!!(typeof t=="object"&&t&&c(t,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof t.persist=="function"),g=t=>{if(h(t)){let r=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));r.persist();let n=Object.getOwnPropertyDescriptor(r,"view"),e=n==null?void 0:n.value;return typeof e=="object"&&(e==null?void 0:e.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...n,value:Object.create(e.constructor.prototype)}),r}return t};function C(t,r={}){let n={...x,...r},e=function(...o){let a=_.addons.getChannel(),p=(0,f.Z)(),y=5,k=o.map(g),O=o.length>1?k:k[0],T={id:p,count:0,data:{name:t,args:O},options:{...n,maxDepth:y+(n.depth||3),allowFunction:n.allowFunction||!1}};a.emit(d,T)};return e.isAction=!0,e}var E=(...t)=>{let r=config,n=t;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(r={...config,...n.pop()});let e=n[0];(n.length!==1||typeof e=="string")&&(e={},n.forEach(a=>{e[a]=a}));let o={};return Object.keys(e).forEach(a=>{o[a]=action(e[a],r)}),o}},"../../../node_modules/.pnpm/@wordpress+element@5.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(w,j,s)=>{s.d(j,{Z:()=>E});var u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let i,l,d,m;const v=/<(\/)?(\w+)\s*(\/)?>/g;function f(t,r,n,e,o){return{element:t,tokenStart:r,tokenLength:n,prevOffset:e,leadingTextStart:o,children:[]}}const _=(t,r)=>{if(i=t,l=0,d=[],m=[],v.lastIndex=0,!x(r))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(b(r));return(0,u.createElement)(u.Fragment,null,...d)},x=t=>{const r=typeof t=="object",n=r&&Object.values(t);return r&&n.length&&n.every(e=>(0,u.isValidElement)(e))};function b(t){const r=c(),[n,e,o,a]=r,p=m.length,y=o>l?l:null;if(!t[e])return h(),!1;switch(n){case"no-more-tokens":if(p!==0){const{leadingTextStart:S,tokenStart:P}=m.pop();d.push(i.substr(S,P))}return h(),!1;case"self-closed":return p===0?(y!==null&&d.push(i.substr(y,o-y)),d.push(t[e]),l=o+a,!0):(g(f(t[e],o,a)),l=o+a,!0);case"opener":return m.push(f(t[e],o,a,o+a,y)),l=o+a,!0;case"closer":if(p===1)return C(o),l=o+a,!0;const k=m.pop(),O=i.substr(k.prevOffset,o-k.prevOffset);k.children.push(O),k.prevOffset=o+a;const T=f(k.element,k.tokenStart,k.tokenLength,o+a);return T.children=k.children,g(T),l=o+a,!0;default:return h(),!1}}function c(){const t=v.exec(i);if(t===null)return["no-more-tokens"];const r=t.index,[n,e,o,a]=t,p=n.length;return a?["self-closed",o,r,p]:e?["closer",o,r,p]:["opener",o,r,p]}function h(){const t=i.length-l;t!==0&&d.push(i.substr(l,t))}function g(t){const{element:r,tokenStart:n,tokenLength:e,prevOffset:o,children:a}=t,p=m[m.length-1],y=i.substr(p.prevOffset,n-p.prevOffset);y&&p.children.push(y),p.children.push((0,u.cloneElement)(r,null,...a)),p.prevOffset=o||n+e}function C(t){const{element:r,leadingTextStart:n,prevOffset:e,tokenStart:o,children:a}=m.pop(),p=t?i.substr(e,t-e):i.substr(e);p&&a.push(p),n!==null&&d.push(i.substr(n,o-n)),d.push((0,u.cloneElement)(r,null,...a))}const E=_},"../components/components/pricing-card/stories/index.stories.tsx":(w,j,s)=>{var C,E,t,r,n,e,o,a,p;s.r(j),s.d(j,{Minimal:()=>b,WithChildren:()=>h,__namedExportsOrder:()=>g,_default:()=>x,default:()=>v});var u=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),i=s("../components/components/pricing-card/index.tsx"),l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import { action } from '@storybook/addon-actions';
import PricingCard from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Pricing Card',
	component: PricingCard,
	// TODO: Storybook Actions are not working. See https://github.com/storybookjs/storybook/issues/7215
	argTypes: {
		onCtaClick: { action: 'clicked' },
	},
} as ComponentMeta< typeof PricingCard >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof PricingCard > = args => <PricingCard { ...args } />;

const DefaultArgs = {
	title: 'Jetpack Backup',
	icon: "data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",
	priceBefore: 9,
	priceAfter: 4.5,
	ctaText: 'Get Jetpack Backup',
	infoText:
		'Special introductory pricing, all renewals are at full price. 14 day money back guarantee.',
	onCtaClick: action( 'onCtaClick' ),
};

// Export Default story
export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const Minimal = Template.bind( {} );
Minimal.args = {
	...DefaultArgs,
	icon: null,
	ctaText: null,
	onCtaClick: null,
	infoText: null,
};

const TemplateWithChildren = args => (
	<PricingCard { ...args }>
		<ul>
			<li>Automated real-time backups</li>
			<li>Easy one-click restores</li>
			<li>Complete list of all site changes</li>
			<li>Global server infrastructure</li>
			<li>Best-in-class support</li>
		</ul>
	</PricingCard>
);
export const WithChildren = TemplateWithChildren.bind( {} );
WithChildren.args = {
	...DefaultArgs,
};
`,m={_default:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},Minimal:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},WithChildren:{startLoc:{col:29,line:38},endLoc:{col:18,line:46},startBody:{col:29,line:38},endBody:{col:18,line:46}}};const v={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import PricingCard from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Pricing Card',
  component: PricingCard,
  // TODO: Storybook Actions are not working. See https://github.com/storybookjs/storybook/issues/7215
  argTypes: {
    onCtaClick: {
      action: 'clicked'
    }
  }
} as ComponentMeta<typeof PricingCard>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof PricingCard> = args => <PricingCard {...args} />;
const DefaultArgs = {
  title: 'Jetpack Backup',
  icon: "data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",
  priceBefore: 9,
  priceAfter: 4.5,
  ctaText: 'Get Jetpack Backup',
  infoText: 'Special introductory pricing, all renewals are at full price. 14 day money back guarantee.',
  onCtaClick: action('onCtaClick')
};

// Export Default story
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const Minimal = Template.bind({});
Minimal.args = {
  ...DefaultArgs,
  icon: null,
  ctaText: null,
  onCtaClick: null,
  infoText: null
};
const TemplateWithChildren = args => <PricingCard {...args}>
        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </PricingCard>;
export const WithChildren = TemplateWithChildren.bind({});
WithChildren.args = {
  ...DefaultArgs
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <PricingCard {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
Minimal.parameters = {
  ...Minimal.parameters,
  docs: {
    ...Minimal.parameters?.docs,
    source: {
      originalSource: "args => <PricingCard {...args} />",
      ...Minimal.parameters?.docs?.source
    }
  }
};
WithChildren.parameters = {
  ...WithChildren.parameters,
  docs: {
    ...WithChildren.parameters?.docs,
    source: {
      originalSource: "args => <PricingCard {...args}>\\n        <ul>\\n            <li>Automated real-time backups</li>\\n            <li>Easy one-click restores</li>\\n            <li>Complete list of all site changes</li>\\n            <li>Global server infrastructure</li>\\n            <li>Best-in-class support</li>\\n        </ul>\\n    </PricingCard>",
      ...WithChildren.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},minimal:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},"with-children":{startLoc:{col:29,line:38},endLoc:{col:18,line:46},startBody:{col:29,line:38},endBody:{col:18,line:46}}}}},title:"JS Packages/Components/Pricing Card",component:i.Z,argTypes:{onCtaClick:{action:"clicked"}}},f=y=>(0,l.jsx)(i.Z,{...y});f.displayName="Template";const _={title:"Jetpack Backup",icon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,ctaText:"Get Jetpack Backup",infoText:"Special introductory pricing, all renewals are at full price. 14 day money back guarantee.",onCtaClick:(0,u.aD)("onCtaClick")},x=f.bind({});x.args=_;const b=f.bind({});b.args={..._,icon:null,ctaText:null,onCtaClick:null,infoText:null};const c=y=>(0,l.jsx)(i.Z,{...y,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Automated real-time backups"}),(0,l.jsx)("li",{children:"Easy one-click restores"}),(0,l.jsx)("li",{children:"Complete list of all site changes"}),(0,l.jsx)("li",{children:"Global server infrastructure"}),(0,l.jsx)("li",{children:"Best-in-class support"})]})});c.displayName="TemplateWithChildren";const h=c.bind({});h.args={..._},x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:"args => <PricingCard {...args} />",...(t=(E=x.parameters)==null?void 0:E.docs)==null?void 0:t.source}}},b.parameters={...b.parameters,docs:{...(r=b.parameters)==null?void 0:r.docs,source:{originalSource:"args => <PricingCard {...args} />",...(e=(n=b.parameters)==null?void 0:n.docs)==null?void 0:e.source}}},h.parameters={...h.parameters,docs:{...(o=h.parameters)==null?void 0:o.docs,source:{originalSource:`args => <PricingCard {...args}>
        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </PricingCard>`,...(p=(a=h.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const g=["_default","Minimal","WithChildren"]},"../components/components/pricing-card/index.tsx":(w,j,s)=>{s.d(j,{Z:()=>E});var u=s("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),l=s("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),d=s("../components/components/terms-of-service/index.tsx"),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=s.n(m),f=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),_={};_.insert="head",_.singleton=!1;var x=v()(f.Z,_);const b=f.Z.locals||{};var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=l.__,g=t=>t.fraction.indexOf("00")===-1,C=t=>{let{currencyCode:r="USD",priceDetails:n=h("/month, paid yearly","jetpack"),...e}=t;const o=(0,u.LR)(e.priceBefore,r),a=(0,u.LR)(e.priceAfter,r);return(0,c.jsxs)("div",{className:"jp-components__pricing-card",children:[e.icon&&(0,c.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof e.icon=="string"?(0,c.jsx)("img",{src:e.icon,alt:(0,l.gB)(h("Icon for the product %s","jetpack"),e.title)}):e.icon}),(0,c.jsx)("h1",{className:"jp-components__pricing-card__title",children:e.title}),(0,c.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[e.priceBefore!==e.priceAfter&&(0,c.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,c.jsx)("span",{className:"jp-components__pricing-card__currency",children:o.symbol}),(0,c.jsx)("span",{className:"jp-components__pricing-card__price",children:o.integer}),g(o)&&(0,c.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",o.fraction]}),(0,c.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}),(0,c.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,c.jsx)("span",{className:"jp-components__pricing-card__currency",children:a.symbol}),(0,c.jsx)("span",{className:"jp-components__pricing-card__price",children:a.integer}),g(a)&&(0,c.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:a.fraction})]}),(0,c.jsx)("span",{className:"jp-components__pricing-card__price-details",children:n})]}),e.children&&(0,c.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:e.children}),e.tosText&&(0,c.jsx)("div",{className:"jp-components__pricing-card__tos",children:e.tosText}),e.ctaText&&(0,c.jsxs)(c.Fragment,{children:[!e.tosText&&(0,c.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,c.jsx)(d.Z,{agreeButtonLabel:e.ctaText})}),(0,c.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,c.jsx)(i.ZP,{className:"jp-components__pricing-card__button",label:e.ctaText,onClick:e.onCtaClick,children:e.ctaText})})]}),e.infoText&&(0,c.jsx)("div",{className:"jp-components__pricing-card__info",children:e.infoText})]})};C.displayName="PricingCard";const E=C},"../components/components/terms-of-service/index.tsx":(w,j,s)=>{s.d(j,{Z:()=>e});var u=s("../../../node_modules/.pnpm/@wordpress+element@5.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),i=s("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),l=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=s.n(l),m=s("../components/tools/jp-redirect/index.ts"),v=s("../components/components/text/index.tsx"),f=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(f),x=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),b={};b.insert="head",b.singleton=!1;var c=_()(x.Z,b);const h=x.Z.locals||{};var g=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=i.__,E=o=>{let{className:a,multipleButtons:p,agreeButtonLabel:y}=o;return(0,g.jsx)(v.ZP,{className:d()(a,"terms-of-service"),children:p?(0,g.jsx)(t,{}):(0,g.jsx)(r,{agreeButtonLabel:y})})};E.displayName="TermsOfService";const t=()=>(0,u.Z)(C("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,g.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,g.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),r=o=>{let{agreeButtonLabel:a}=o;return(0,u.Z)((0,i.gB)(C("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),a),{strong:(0,g.jsx)("strong",{}),tosLink:(0,g.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,g.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})})},n=o=>{let{slug:a,children:p}=o;return(0,g.jsx)("a",{className:"terms-of-service__link",href:(0,m.Z)(a),rel:"noopener noreferrer",target:"_blank",children:p})};n.displayName="Link";const e=E;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(o){}},"../components/tools/jp-redirect/index.ts":(w,j,s)=>{s.d(j,{Z:()=>u});function u(i){var f;let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const d={};let m;if(typeof window!="undefined"&&(m=(f=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:f.calypsoEnv),i.search("https://")===0){const _=new URL(i);i=`https://${_.host}${_.pathname}`,d.url=encodeURIComponent(i)}else d.source=encodeURIComponent(i);for(const _ in l)d[_]=encodeURIComponent(l[_]);return!Object.keys(d).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(d.site=jetpack_redirects.currentSiteRawUrl),m&&(d.calypso_env=m),"https://jetpack.com/redirect/?"+Object.keys(d).map(_=>_+"="+d[_]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(w,j,s)=>{s.d(j,{Z:()=>v});var u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(u),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=s.n(l),m=d()(i());m.push([w.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const v=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(w,j,s)=>{s.d(j,{Z:()=>v});var u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(u),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=s.n(l),m=d()(i());m.push([w.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const v=m}}]);})();
