"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[338],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(C,x,e)=>{e.d(x,{aD:()=>g.aD});var g=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),r=(...l)=>{let c=config,p=l;p.length===1&&Array.isArray(p[0])&&([p]=p),p.length!==1&&typeof p[p.length-1]!="string"&&(c={...config,...p.pop()});let f=p[0];(p.length!==1||typeof f=="string")&&(f={},p.forEach(j=>{f[j]=j}));let _={};return Object.keys(f).forEach(j=>{_[j]=action(f[j],c)}),_},s=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+element@5.14.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(C,x,e)=>{e.d(x,{Z:()=>E});var g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let r,s,l,c;const p=/<(\/)?(\w+)\s*(\/)?>/g;function f(o,m,d,n,t){return{element:o,tokenStart:m,tokenLength:d,prevOffset:n,leadingTextStart:t,children:[]}}const _=(o,m)=>{if(r=o,s=0,l=[],c=[],p.lastIndex=0,!j(m))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do;while(v(m));return(0,g.createElement)(g.Fragment,null,...l)},j=o=>{const m=typeof o=="object",d=m&&Object.values(o);return m&&d.length&&d.every(n=>(0,g.isValidElement)(n))};function v(o){const m=i(),[d,n,t,a]=m,u=c.length,k=t>s?s:null;if(!o[n])return y(),!1;switch(d){case"no-more-tokens":if(u!==0){const{leadingTextStart:P,tokenStart:O}=c.pop();l.push(r.substr(P,O))}return y(),!1;case"self-closed":return u===0?(k!==null&&l.push(r.substr(k,t-k)),l.push(o[n]),s=t+a,!0):(h(f(o[n],t,a)),s=t+a,!0);case"opener":return c.push(f(o[n],t,a,t+a,k)),s=t+a,!0;case"closer":if(u===1)return b(t),s=t+a,!0;const T=c.pop(),S=r.substr(T.prevOffset,t-T.prevOffset);T.children.push(S),T.prevOffset=t+a;const w=f(T.element,T.tokenStart,T.tokenLength,t+a);return w.children=T.children,h(w),s=t+a,!0;default:return y(),!1}}function i(){const o=p.exec(r);if(o===null)return["no-more-tokens"];const m=o.index,[d,n,t,a]=o,u=d.length;return a?["self-closed",t,m,u]:n?["closer",t,m,u]:["opener",t,m,u]}function y(){const o=r.length-s;o!==0&&l.push(r.substr(s,o))}function h(o){const{element:m,tokenStart:d,tokenLength:n,prevOffset:t,children:a}=o,u=c[c.length-1],k=r.substr(u.prevOffset,d-u.prevOffset);k&&u.children.push(k),u.children.push((0,g.cloneElement)(m,null,...a)),u.prevOffset=t||d+n}function b(o){const{element:m,leadingTextStart:d,prevOffset:n,tokenStart:t,children:a}=c.pop(),u=o?r.substr(n,o-n):r.substr(n);u&&a.push(u),d!==null&&l.push(r.substr(d,t-d)),l.push((0,g.cloneElement)(m,null,...a))}const E=_},"../components/components/pricing-card/stories/index.stories.tsx":(C,x,e)=>{var b,E,o,m,d,n,t,a,u;e.r(x),e.d(x,{Minimal:()=>v,WithChildren:()=>y,__namedExportsOrder:()=>h,_default:()=>j,default:()=>p});var g=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),r=e("../components/components/pricing-card/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import { action } from '@storybook/addon-actions';
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
`,c={_default:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},Minimal:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},WithChildren:{startLoc:{col:29,line:38},endLoc:{col:18,line:46},startBody:{col:29,line:38},endBody:{col:18,line:46}}};const p={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},minimal:{startLoc:{col:53,line:16},endLoc:{col:86,line:16},startBody:{col:53,line:16},endBody:{col:86,line:16}},"with-children":{startLoc:{col:29,line:38},endLoc:{col:18,line:46},startBody:{col:29,line:38},endBody:{col:18,line:46}}}}},title:"JS Packages/Components/Pricing Card",component:r.Z,argTypes:{onCtaClick:{action:"clicked"}}},f=k=>(0,s.jsx)(r.Z,{...k});f.displayName="Template";const _={title:"Jetpack Backup",icon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,ctaText:"Get Jetpack Backup",infoText:"Special introductory pricing, all renewals are at full price. 14 day money back guarantee.",onCtaClick:(0,g.aD)("onCtaClick")},j=f.bind({});j.args=_;const v=f.bind({});v.args={..._,icon:null,ctaText:null,onCtaClick:null,infoText:null};const i=k=>(0,s.jsx)(r.Z,{...k,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Automated real-time backups"}),(0,s.jsx)("li",{children:"Easy one-click restores"}),(0,s.jsx)("li",{children:"Complete list of all site changes"}),(0,s.jsx)("li",{children:"Global server infrastructure"}),(0,s.jsx)("li",{children:"Best-in-class support"})]})});i.displayName="TemplateWithChildren";const y=i.bind({});y.args={..._},j.parameters={...j.parameters,docs:{...(b=j.parameters)==null?void 0:b.docs,source:{originalSource:"args => <PricingCard {...args} />",...(o=(E=j.parameters)==null?void 0:E.docs)==null?void 0:o.source}}},v.parameters={...v.parameters,docs:{...(m=v.parameters)==null?void 0:m.docs,source:{originalSource:"args => <PricingCard {...args} />",...(n=(d=v.parameters)==null?void 0:d.docs)==null?void 0:n.source}}},y.parameters={...y.parameters,docs:{...(t=y.parameters)==null?void 0:t.docs,source:{originalSource:`args => <PricingCard {...args}>
        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </PricingCard>`,...(u=(a=y.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const h=["_default","Minimal","WithChildren"]},"../components/components/pricing-card/index.tsx":(C,x,e)=>{e.d(x,{Z:()=>E});var g=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../components/components/terms-of-service/index.tsx"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(c),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),_={};_.insert="head",_.singleton=!1;var j=p()(f.Z,_);const v=f.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y=s.__,h=o=>o.fraction.indexOf("00")===-1,b=o=>{let{currencyCode:m="USD",priceDetails:d=y("/month, paid yearly","jetpack"),...n}=o;const t=(0,g.LR)(n.priceBefore,m),a=(0,g.LR)(n.priceAfter,m);return(0,i.jsxs)("div",{className:"jp-components__pricing-card",children:[n.icon&&(0,i.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof n.icon=="string"?(0,i.jsx)("img",{src:n.icon,alt:(0,s.gB)(y("Icon for the product %s","jetpack"),n.title)}):n.icon}),(0,i.jsx)("h1",{className:"jp-components__pricing-card__title",children:n.title}),(0,i.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[n.priceBefore!==n.priceAfter&&(0,i.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,i.jsx)("span",{className:"jp-components__pricing-card__currency",children:t.symbol}),(0,i.jsx)("span",{className:"jp-components__pricing-card__price",children:t.integer}),h(t)&&(0,i.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",t.fraction]}),(0,i.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}),(0,i.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,i.jsx)("span",{className:"jp-components__pricing-card__currency",children:a.symbol}),(0,i.jsx)("span",{className:"jp-components__pricing-card__price",children:a.integer}),h(a)&&(0,i.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:a.fraction})]}),(0,i.jsx)("span",{className:"jp-components__pricing-card__price-details",children:d})]}),n.children&&(0,i.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:n.children}),n.tosText&&(0,i.jsx)("div",{className:"jp-components__pricing-card__tos",children:n.tosText}),n.ctaText&&(0,i.jsxs)(i.Fragment,{children:[!n.tosText&&(0,i.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,i.jsx)(l.Z,{agreeButtonLabel:n.ctaText})}),(0,i.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,i.jsx)(r.ZP,{className:"jp-components__pricing-card__button",label:n.ctaText,onClick:n.onCtaClick,children:n.ctaText})})]}),n.infoText&&(0,i.jsx)("div",{className:"jp-components__pricing-card__info",children:n.infoText})]})};b.displayName="PricingCard";const E=b},"../components/components/terms-of-service/index.tsx":(C,x,e)=>{e.d(x,{Z:()=>n});var g=e("../../../node_modules/.pnpm/@wordpress+element@5.14.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(s),c=e("../components/tools/jp-redirect/index.ts"),p=e("../components/components/text/index.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(f),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),v={};v.insert="head",v.singleton=!1;var i=_()(j.Z,v);const y=j.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=r.__,E=t=>{let{className:a,multipleButtons:u,agreeButtonLabel:k}=t;return(0,h.jsx)(p.ZP,{className:l()(a,"terms-of-service"),children:u?(0,h.jsx)(o,{}):(0,h.jsx)(m,{agreeButtonLabel:k})})};E.displayName="TermsOfService";const o=()=>(0,g.Z)(b("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,h.jsx)(d,{slug:"wpcom-tos"}),shareDetailsLink:(0,h.jsx)(d,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),m=t=>{let{agreeButtonLabel:a}=t;return(0,g.Z)((0,r.gB)(b("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),a),{strong:(0,h.jsx)("strong",{}),tosLink:(0,h.jsx)(d,{slug:"wpcom-tos"}),shareDetailsLink:(0,h.jsx)(d,{slug:"jetpack-support-what-data-does-jetpack-sync"})})},d=t=>{let{slug:a,children:u}=t;return(0,h.jsx)("a",{className:"terms-of-service__link",href:(0,c.Z)(a),rel:"noopener noreferrer",target:"_blank",children:u})};d.displayName="Link";const n=E;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(t){}},"../components/tools/jp-redirect/index.ts":(C,x,e)=>{e.d(x,{Z:()=>g});function g(r){var f;let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const l={};let c;if(typeof window!="undefined"&&(c=(f=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:f.calypsoEnv),r.search("https://")===0){const _=new URL(r);r=`https://${_.host}${_.pathname}`,l.url=encodeURIComponent(r)}else l.source=encodeURIComponent(r);for(const _ in s)l[_]=encodeURIComponent(s[_]);return!Object.keys(l).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(l.site=jetpack_redirects.currentSiteRawUrl),c&&(l.calypso_env=c),"https://jetpack.com/redirect/?"+Object.keys(l).map(_=>_+"="+l[_]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(C,x,e)=>{e.d(x,{Z:()=>p});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(g),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),c=l()(r());c.push([C.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const p=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(C,x,e)=>{e.d(x,{Z:()=>p});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(g),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),c=l()(r());c.push([C.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const p=c}}]);})();
