"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2638],{"../connection/components/connect-screen/required-plan/stories/index.stories.jsx":(f,a,e)=>{var D,O,I,q,M,N,V,Z,U;e.r(a),e.d(a,{Connecting:()=>g,Errored:()=>j,__namedExportsOrder:()=>X,_default:()=>_,default:()=>F});var c=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../components/components/action-button/index.jsx"),d=e("../components/tools/jp-redirect/index.ts"),i=e("../components/components/pricing-card/index.tsx"),p=e("../components/components/terms-of-service/index.tsx"),h=e("../../../node_modules/.pnpm/@wordpress+element@5.29.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),x=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),L=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),A=e.n(L),n=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),v=e.n(n),k=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=e.n(k),B=e("../connection/components/connect-screen/layout/index.jsx"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(m),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/required-plan/style.scss"),l={};l.insert="head",l.singleton=!1;var b=S()(t.Z,l);const ce=t.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const T=x.__,J=v()("jetpack:connection:ConnectScreenRequiredPlanVisual"),y=w=>{const{title:H,buttonLabel:W,children:Y,priceBefore:Q,priceAfter:$,pricingIcon:ee,pricingTitle:ne,pricingCurrencyCode:te,isLoading:oe,handleButtonClick:z,displayButtonError:se,buttonIsLoading:K,logo:re,isOfflineMode:E,rna:G=!1}=w;J("props are %o",w);const ie=(0,h.Z)(T("Already have a subscription? <connectButton/>","jetpack"),{connectButton:(0,s.jsx)(r.Z,{label:T("Log in to get started","jetpack"),onClick:z,isLoading:K})}),ae=E?(0,h.Z)(T("Unavailable in <a>Offline Mode</a>","jetpack"),{a:(0,s.jsx)("a",{href:(0,d.Z)("jetpack-support-development-mode"),target:"_blank",rel:"noopener noreferrer"})}):void 0;return(0,s.jsx)(B.Z,{title:H,className:A()("jp-connection__connect-screen-required-plan",oe?"jp-connection__connect-screen-required-plan__loading":"",G?"rna":""),logo:re,rna:G,children:(0,s.jsxs)("div",{className:"jp-connection__connect-screen-required-plan__content",children:[Y,(0,s.jsx)("div",{className:"jp-connection__connect-screen-required-plan__pricing-card",children:(0,s.jsxs)(i.Z,{title:ne,icon:ee,priceBefore:Q,currencyCode:te,priceAfter:$,children:[(0,s.jsx)(p.Z,{agreeButtonLabel:W}),(0,s.jsx)(r.Z,{label:W,onClick:z,displayError:se||E,errorMessage:ae,isLoading:K,isDisabled:E})]})}),!E&&(0,s.jsx)("div",{className:"jp-connection__connect-screen-required-plan__with-subscription",children:ie})]})})};y.displayName="ConnectScreenRequiredPlanVisual",y.propTypes={pricingTitle:o().string.isRequired,priceBefore:o().number.isRequired,priceAfter:o().number.isRequired,pricingCurrencyCode:o().string,title:o().string,buttonLabel:o().string,pricingIcon:o().oneOfType([o().string,o().element]),isLoading:o().bool,handleButtonClick:o().func,displayButtonError:o().bool,buttonIsLoading:o().bool,logo:o().element,isOfflineMode:o().bool},y.defaultProps={pricingCurrencyCode:"USD",isLoading:!1,buttonIsLoading:!1,displayButtonError:!1,handleButtonClick:()=>{}};const R=y;y.__docgenInfo={description:`The Connection Screen Visual component for consumers that require a Plan.

@param {object} props -- The properties.
@returns {React.Component} The \`ConnectScreenRequiredPlanVisual\` component.`,methods:[],displayName:"ConnectScreenRequiredPlanVisual",props:{pricingCurrencyCode:{defaultValue:{value:"'USD'",computed:!1},description:"The Currency code, eg 'USD'.",type:{name:"string"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the connection status is still loading.",type:{name:"bool"},required:!1},buttonIsLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the button loading state is active or not.",type:{name:"bool"},required:!1},displayButtonError:{defaultValue:{value:"false",computed:!1},description:"Whether the button error is active or not.",type:{name:"bool"},required:!1},handleButtonClick:{defaultValue:{value:"() => {}",computed:!1},description:"Callback that is applied into click for all buttons.",type:{name:"func"},required:!1},pricingTitle:{description:"The Pricing Card Title.",type:{name:"string"},required:!0},priceBefore:{description:"Price before discount.",type:{name:"number"},required:!0},priceAfter:{description:"Price after discount.",type:{name:"number"},required:!0},title:{description:"The Title.",type:{name:"string"},required:!1},buttonLabel:{description:"The Connect Button label.",type:{name:"string"},required:!1},pricingIcon:{description:"The Pricing Card Icon.",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1},logo:{description:"The logo to display at the top of the component.",type:{name:"element"},required:!1},isOfflineMode:{description:"Whether the site is in offline mode.",type:{name:"bool"},required:!1}}};var le=`/* eslint-disable react/react-in-jsx-scope */
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenRequiredPlanVisual from '../visual';

export default {
	title: 'JS Packages/Connection/Connect Screen with Required Plan',
	component: ConnectScreenRequiredPlanVisual,
};

// Export additional stories using pre-defined values
const Template = args => (
	<ConnectScreenRequiredPlanVisual { ...args }>
		<h3>Save every change and get back online quickly with one\u2011click restores.</h3>

		<ul>
			<li>Automated real-time backups</li>
			<li>Easy one-click restores</li>
			<li>Complete list of all site changes</li>
			<li>Global server infrastructure</li>
			<li>Best-in-class support</li>
		</ul>
	</ConnectScreenRequiredPlanVisual>
);

const DefaultArgs = {
	title: 'The best real\u2011time WordPress backups',
	pricingIcon:
		"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",
	priceBefore: 9,
	priceAfter: 4.5,
	pricingTitle: 'Jetpack Backup',
	buttonLabel: 'Get Jetpack Backup',
	isLoading: false,
	handleButtonClick: action( 'onButtonClick' ),
	displayButtonError: false,
	buttonIsLoading: false,
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const Connecting = Template.bind( {} );
Connecting.args = {
	...DefaultArgs,
	buttonIsLoading: true,
};

export const Errored = Template.bind( {} );
Errored.args = {
	...DefaultArgs,
	displayButtonError: true,
};
`,de={_default:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Connecting:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Errored:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}}};const F={parameters:{storySource:{source:`
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenRequiredPlanVisual from '../visual';

export default {
	title: 'JS Packages/Connection/Connect Screen with Required Plan',
	component: ConnectScreenRequiredPlanVisual,
};

// Export additional stories using pre-defined values
const Template = args => (
	<ConnectScreenRequiredPlanVisual { ...args }>
		<h3>Save every change and get back online quickly with one\u2011click restores.</h3>

		<ul>
			<li>Automated real-time backups</li>
			<li>Easy one-click restores</li>
			<li>Complete list of all site changes</li>
			<li>Global server infrastructure</li>
			<li>Best-in-class support</li>
		</ul>
	</ConnectScreenRequiredPlanVisual>
);

const DefaultArgs = {
	title: 'The best real\u2011time WordPress backups',
	pricingIcon:
		"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",
	priceBefore: 9,
	priceAfter: 4.5,
	pricingTitle: 'Jetpack Backup',
	buttonLabel: 'Get Jetpack Backup',
	isLoading: false,
	handleButtonClick: action( 'onButtonClick' ),
	displayButtonError: false,
	buttonIsLoading: false,
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const Connecting = Template.bind( {} );
Connecting.args = {
	...DefaultArgs,
	buttonIsLoading: true,
};

export const Errored = Template.bind( {} );
Errored.args = {
	...DefaultArgs,
	displayButtonError: true,
};
`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},connecting:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},errored:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}}}}},title:"JS Packages/Connection/Connect Screen with Required Plan",component:R},C=w=>(0,s.jsxs)(R,{...w,children:[(0,s.jsx)("h3",{children:"Save every change and get back online quickly with one\u2011click restores."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Automated real-time backups"}),(0,s.jsx)("li",{children:"Easy one-click restores"}),(0,s.jsx)("li",{children:"Complete list of all site changes"}),(0,s.jsx)("li",{children:"Global server infrastructure"}),(0,s.jsx)("li",{children:"Best-in-class support"})]})]});C.displayName="Template";const P={title:"The best real\u2011time WordPress backups",pricingIcon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,pricingTitle:"Jetpack Backup",buttonLabel:"Get Jetpack Backup",isLoading:!1,handleButtonClick:(0,c.aD)("onButtonClick"),displayButtonError:!1,buttonIsLoading:!1},_=C.bind({});_.args=P;const g=C.bind({});g.args={...P,buttonIsLoading:!0};const j=C.bind({});j.args={...P,displayButtonError:!0},_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>`,...(I=(O=_.parameters)==null?void 0:O.docs)==null?void 0:I.source}}},g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>`,...(N=(M=g.parameters)==null?void 0:M.docs)==null?void 0:N.source}}},j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`args => <ConnectScreenRequiredPlanVisual {...args}>
        <h3>Save every change and get back online quickly with one\u2011click restores.</h3>

        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </ConnectScreenRequiredPlanVisual>`,...(U=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};const X=["_default","Connecting","Errored"]},"../components/components/pricing-card/index.tsx":(f,a,e)=>{e.d(a,{Z:()=>B});var c=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../components/components/terms-of-service/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(i),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),x={};x.insert="head",x.singleton=!1;var L=p()(h.Z,x);const A=h.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=r.__,k=m=>m.fraction.indexOf("00")===-1,o=({currencyCode:m="USD",priceDetails:S=v("/month, paid yearly","jetpack"),...t})=>{const l=(0,c.LR)(t.priceBefore,m),b=(0,c.LR)(t.priceAfter,m);return(0,n.jsxs)("div",{className:"jp-components__pricing-card",children:[t.icon&&(0,n.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof t.icon=="string"?(0,n.jsx)("img",{src:t.icon,alt:(0,r.gB)(v("Icon for the product %s","jetpack"),t.title)}):t.icon}),(0,n.jsx)("h1",{className:"jp-components__pricing-card__title",children:t.title}),(0,n.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[t.priceBefore!==t.priceAfter&&(0,n.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,n.jsx)("span",{className:"jp-components__pricing-card__currency",children:l.symbol}),(0,n.jsx)("span",{className:"jp-components__pricing-card__price",children:l.integer}),k(l)&&(0,n.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",l.fraction]}),(0,n.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}),(0,n.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,n.jsx)("span",{className:"jp-components__pricing-card__currency",children:b.symbol}),(0,n.jsx)("span",{className:"jp-components__pricing-card__price",children:b.integer}),k(b)&&(0,n.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:b.fraction})]}),(0,n.jsx)("span",{className:"jp-components__pricing-card__price-details",children:S})]}),t.children&&(0,n.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:t.children}),t.tosText&&(0,n.jsx)("div",{className:"jp-components__pricing-card__tos",children:t.tosText}),t.ctaText&&(0,n.jsxs)(n.Fragment,{children:[!t.tosText&&(0,n.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,n.jsx)(d.Z,{agreeButtonLabel:t.ctaText})}),(0,n.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,n.jsx)(u.ZP,{className:"jp-components__pricing-card__button",label:t.ctaText,onClick:t.onCtaClick,children:t.ctaText})})]}),t.infoText&&(0,n.jsx)("div",{className:"jp-components__pricing-card__info",children:t.infoText})]})};o.displayName="PricingCard";const B=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(f,a,e)=>{e.d(a,{Z:()=>p});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),i=d()(u());i.push([f.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const p=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/required-plan/style.scss":(f,a,e)=>{e.d(a,{Z:()=>p});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),i=d()(u());i.push([f.id,"@media(min-width: 1080px){.jp-connection__connect-screen-layout__left{width:calc(100% - 384px - var(--spacing-base)*4)}}@media(min-width: 1080px){.jp-connection__connect-screen-required-plan{position:relative;background:linear-gradient(to right, white 70%, #f9f9f6 30%)}}.jp-connection__connect-screen-required-plan__loading{display:none}.jp-connection__connect-screen-required-plan ul.jp-product-promote{margin-block-start:calc(var(--spacing-base)*3);margin-block-end:calc(var(--spacing-base)*4)}@media(min-width: 1080px){.jp-connection__connect-screen-required-plan__pricing-card{position:absolute;top:calc(var(--spacing-base)*8);right:calc(var(--spacing-base)*12)}}.jp-connection__connect-screen-required-plan__pricing-card .jp-action-button--button.components-button{width:100%;height:auto;font-size:18px;font-weight:500;background:var(--jp-black) !important;color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-connection__connect-screen-required-plan__pricing-card .jp-action-button--button.components-button:disabled{background:var(--jp-gray) !important;color:var(--jp-gray-20) !important}.jp-connection__connect-screen-required-plan__pricing-card .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.jp-connection__connect-screen-required-plan__with-subscription{margin-top:calc(var(--spacing-base)*4);display:flex;flex-wrap:wrap;justify-content:flex-start;gap:1ch;line-height:1}.jp-connection__connect-screen-required-plan__with-subscription .jp-action-button--button.components-button.is-primary{display:inline;font-size:var(--font-title-small);line-height:20px;color:var(--jp-black) !important;background:inherit !important;text-decoration:underline;width:auto;min-width:0;height:auto;font:inherit;padding:0}.jp-connection__connect-screen-required-plan__with-subscription .jp-action-button--button.components-button.is-primary:hover{background:inherit;text-decoration-thickness:var(--jp-underline-thickness)}.jp-connection__connect-screen-required-plan__with-subscription .jp-action-button--button.components-button.is-primary:focus{background:inherit;box-shadow:none !important}.jp-connection__connect-screen-required-plan__with-subscription .jp-components-spinner__inner,.jp-connection__connect-screen-required-plan__with-subscription .jp-components-spinner__outer{border-top-color:var(--jp-black);border-right-color:var(--jp-black)}",""]);const p=i}}]);})();
