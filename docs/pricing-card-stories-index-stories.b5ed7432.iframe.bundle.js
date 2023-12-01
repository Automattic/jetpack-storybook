"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[338],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(w,j,t)=>{t.d(j,{aD:()=>C});var u="actions",a="storybook/actions",c=`${a}/panel`,d=`${a}/action-event`,p=`${a}/action-clear`,y="$___storybook.isCyclic",f=t("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_=t("@storybook/preview-api"),x={depth:10,clearOnStoryChange:!0,limit:50},v=(n={})=>{Object.assign(x,n)},i=(n,r)=>{let e=Object.getPrototypeOf(n);return!e||r(e)?e:i(e,r)},h=n=>!!(typeof n=="object"&&n&&i(n,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof n.persist=="function"),g=n=>{if(h(n)){let r=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));r.persist();let e=Object.getOwnPropertyDescriptor(r,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...e,value:Object.create(o.constructor.prototype)}),r}return n};function C(n,r={}){let e={...x,...r},o=function(...s){let l=_.addons.getChannel(),m=(0,f.Z)(),b=5,k=s.map(g),O=s.length>1?k:k[0],T={id:m,count:0,data:{name:n,args:O},options:{...e,maxDepth:b+(e.depth||3),allowFunction:e.allowFunction||!1}};l.emit(d,T)};return o.isAction=!0,o}var E=(...n)=>{let r=config,e=n;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(r={...config,...e.pop()});let o=e[0];(e.length!==1||typeof o=="string")&&(o={},e.forEach(l=>{o[l]=l}));let s={};return Object.keys(o).forEach(l=>{s[l]=action(o[l],r)}),s}},"../../../node_modules/.pnpm/@wordpress+element@5.24.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(w,j,t)=>{t.d(j,{Z:()=>E});var u=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let a,c,d,p;const y=/<(\/)?(\w+)\s*(\/)?>/g;function f(n,r,e,o,s){return{element:n,tokenStart:r,tokenLength:e,prevOffset:o,leadingTextStart:s,children:[]}}const _=(n,r)=>{if(a=n,c=0,d=[],p=[],y.lastIndex=0,!x(r))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(v(r));return(0,u.createElement)(u.Fragment,null,...d)},x=n=>{const r=typeof n=="object",e=r&&Object.values(n);return r&&e.length&&e.every(o=>(0,u.isValidElement)(o))};function v(n){const r=i(),[e,o,s,l]=r,m=p.length,b=s>c?c:null;if(!n[o])return h(),!1;switch(e){case"no-more-tokens":if(m!==0){const{leadingTextStart:S,tokenStart:P}=p.pop();d.push(a.substr(S,P))}return h(),!1;case"self-closed":return m===0?(b!==null&&d.push(a.substr(b,s-b)),d.push(n[o]),c=s+l,!0):(g(f(n[o],s,l)),c=s+l,!0);case"opener":return p.push(f(n[o],s,l,s+l,b)),c=s+l,!0;case"closer":if(m===1)return C(s),c=s+l,!0;const k=p.pop(),O=a.substr(k.prevOffset,s-k.prevOffset);k.children.push(O),k.prevOffset=s+l;const T=f(k.element,k.tokenStart,k.tokenLength,s+l);return T.children=k.children,g(T),c=s+l,!0;default:return h(),!1}}function i(){const n=y.exec(a);if(n===null)return["no-more-tokens"];const r=n.index,[e,o,s,l]=n,m=e.length;return l?["self-closed",s,r,m]:o?["closer",s,r,m]:["opener",s,r,m]}function h(){const n=a.length-c;n!==0&&d.push(a.substr(c,n))}function g(n){const{element:r,tokenStart:e,tokenLength:o,prevOffset:s,children:l}=n,m=p[p.length-1],b=a.substr(m.prevOffset,e-m.prevOffset);b&&m.children.push(b),m.children.push((0,u.cloneElement)(r,null,...l)),m.prevOffset=s||e+o}function C(n){const{element:r,leadingTextStart:e,prevOffset:o,tokenStart:s,children:l}=p.pop(),m=n?a.substr(o,n-o):a.substr(o);m&&l.push(m),e!==null&&d.push(a.substr(e,s-e)),d.push((0,u.cloneElement)(r,null,...l))}const E=_},"../components/components/pricing-card/stories/index.stories.tsx":(w,j,t)=>{var C,E,n,r,e,o,s,l,m;t.r(j),t.d(j,{Minimal:()=>v,WithChildren:()=>h,__namedExportsOrder:()=>g,_default:()=>x,default:()=>y});var u=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),a=t("../components/components/pricing-card/index.tsx"),c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import { action } from '@storybook/addon-actions';
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
`,p={_default:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},Minimal:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},WithChildren:{startLoc:{col:29,line:38},endLoc:{col:18,line:46},startBody:{col:29,line:38},endBody:{col:18,line:46}}};const y={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},minimal:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},"with-children":{startLoc:{col:29,line:38},endLoc:{col:18,line:46},startBody:{col:29,line:38},endBody:{col:18,line:46}}}}},title:"JS Packages/Components/Pricing Card",component:a.Z,argTypes:{onCtaClick:{action:"clicked"}}},f=b=>(0,c.jsx)(a.Z,{...b});f.displayName="Template";const _={title:"Jetpack Backup",icon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,ctaText:"Get Jetpack Backup",infoText:"Special introductory pricing, all renewals are at full price. 14 day money back guarantee.",onCtaClick:(0,u.aD)("onCtaClick")},x=f.bind({});x.args=_;const v=f.bind({});v.args={..._,icon:null,ctaText:null,onCtaClick:null,infoText:null};const i=b=>(0,c.jsx)(a.Z,{...b,children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Automated real-time backups"}),(0,c.jsx)("li",{children:"Easy one-click restores"}),(0,c.jsx)("li",{children:"Complete list of all site changes"}),(0,c.jsx)("li",{children:"Global server infrastructure"}),(0,c.jsx)("li",{children:"Best-in-class support"})]})});i.displayName="TemplateWithChildren";const h=i.bind({});h.args={..._},x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:"args => <PricingCard {...args} />",...(n=(E=x.parameters)==null?void 0:E.docs)==null?void 0:n.source}}},v.parameters={...v.parameters,docs:{...(r=v.parameters)==null?void 0:r.docs,source:{originalSource:"args => <PricingCard {...args} />",...(o=(e=v.parameters)==null?void 0:e.docs)==null?void 0:o.source}}},h.parameters={...h.parameters,docs:{...(s=h.parameters)==null?void 0:s.docs,source:{originalSource:`args => <PricingCard {...args}>
        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </PricingCard>`,...(m=(l=h.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const g=["_default","Minimal","WithChildren"]},"../components/components/pricing-card/index.tsx":(w,j,t)=>{t.d(j,{Z:()=>E});var u=t("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),d=t("../components/components/terms-of-service/index.tsx"),p=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=t.n(p),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),_={};_.insert="head",_.singleton=!1;var x=y()(f.Z,_);const v=f.Z.locals||{};var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=c.__,g=n=>n.fraction.indexOf("00")===-1,C=({currencyCode:n="USD",priceDetails:r=h("/month, paid yearly","jetpack"),...e})=>{const o=(0,u.LR)(e.priceBefore,n),s=(0,u.LR)(e.priceAfter,n);return(0,i.jsxs)("div",{className:"jp-components__pricing-card",children:[e.icon&&(0,i.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof e.icon=="string"?(0,i.jsx)("img",{src:e.icon,alt:(0,c.gB)(h("Icon for the product %s","jetpack"),e.title)}):e.icon}),(0,i.jsx)("h1",{className:"jp-components__pricing-card__title",children:e.title}),(0,i.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[e.priceBefore!==e.priceAfter&&(0,i.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,i.jsx)("span",{className:"jp-components__pricing-card__currency",children:o.symbol}),(0,i.jsx)("span",{className:"jp-components__pricing-card__price",children:o.integer}),g(o)&&(0,i.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",o.fraction]}),(0,i.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}),(0,i.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,i.jsx)("span",{className:"jp-components__pricing-card__currency",children:s.symbol}),(0,i.jsx)("span",{className:"jp-components__pricing-card__price",children:s.integer}),g(s)&&(0,i.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:s.fraction})]}),(0,i.jsx)("span",{className:"jp-components__pricing-card__price-details",children:r})]}),e.children&&(0,i.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:e.children}),e.tosText&&(0,i.jsx)("div",{className:"jp-components__pricing-card__tos",children:e.tosText}),e.ctaText&&(0,i.jsxs)(i.Fragment,{children:[!e.tosText&&(0,i.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,i.jsx)(d.Z,{agreeButtonLabel:e.ctaText})}),(0,i.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,i.jsx)(a.ZP,{className:"jp-components__pricing-card__button",label:e.ctaText,onClick:e.onCtaClick,children:e.ctaText})})]}),e.infoText&&(0,i.jsx)("div",{className:"jp-components__pricing-card__info",children:e.infoText})]})};C.displayName="PricingCard";const E=C},"../components/components/terms-of-service/index.tsx":(w,j,t)=>{t.d(j,{Z:()=>o});var u=t("../../../node_modules/.pnpm/@wordpress+element@5.24.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),a=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),c=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=t.n(c),p=t("../components/tools/jp-redirect/index.ts"),y=t("../components/components/text/index.tsx"),f=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=t.n(f),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),v={};v.insert="head",v.singleton=!1;var i=_()(x.Z,v);const h=x.Z.locals||{};var g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=a.__,E=({className:s,multipleButtons:l,agreeButtonLabel:m})=>(0,g.jsx)(y.ZP,{className:d()(s,"terms-of-service"),children:l?(0,g.jsx)(n,{}):(0,g.jsx)(r,{agreeButtonLabel:m})});E.displayName="TermsOfService";const n=()=>(0,u.Z)(C("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,g.jsx)(e,{slug:"wpcom-tos"}),shareDetailsLink:(0,g.jsx)(e,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),r=({agreeButtonLabel:s})=>(0,u.Z)((0,a.gB)(C("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),s),{strong:(0,g.jsx)("strong",{}),tosLink:(0,g.jsx)(e,{slug:"wpcom-tos"}),shareDetailsLink:(0,g.jsx)(e,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),e=({slug:s,children:l})=>(0,g.jsx)("a",{className:"terms-of-service__link",href:(0,p.Z)(s),rel:"noopener noreferrer",target:"_blank",children:l});e.displayName="Link";const o=E;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(s){}},"../components/tools/jp-redirect/index.ts":(w,j,t)=>{t.d(j,{Z:()=>u});function u(a,c={}){var f;const d={};let p;if(typeof window!="undefined"&&(p=(f=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:f.calypsoEnv),a.search("https://")===0){const _=new URL(a);a=`https://${_.host}${_.pathname}`,d.url=encodeURIComponent(a)}else d.source=encodeURIComponent(a);for(const _ in c)d[_]=encodeURIComponent(c[_]);return!Object.keys(d).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(d.site=jetpack_redirects.currentSiteRawUrl),p&&(d.calypso_env=p),"https://jetpack.com/redirect/?"+Object.keys(d).map(_=>_+"="+d[_]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(w,j,t)=>{t.d(j,{Z:()=>y});var u=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(u),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(c),p=d()(a());p.push([w.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const y=p},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(w,j,t)=>{t.d(j,{Z:()=>y});var u=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(u),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(c),p=d()(a());p.push([w.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const y=p}}]);})();
