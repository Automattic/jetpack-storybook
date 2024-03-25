"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7568],{"../connection/components/connect-screen/basic/stories/index.stories.jsx":(j,c,e)=>{var v,C,E,k,B,L,P,T,D,M,A,O;e.r(c),e.d(c,{Connecting:()=>o,Errored:()=>s,Footer:()=>r,__namedExportsOrder:()=>Z,_default:()=>t,default:()=>N});var p=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),b=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../components/components/terms-of-service/index.tsx"),m=e("../components/components/action-button/index.jsx"),l=e("../components/tools/jp-redirect/index.ts"),_=e("../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),z=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),J=e("../connection/components/connect-screen/layout/index.tsx"),F=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(F),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss"),f={};f.insert="head",f.singleton=!1;var ee=R()(x.Z,f);const ne=x.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=z.__,U=(a,y)=>{switch(a){case"fail_domain_forbidden":case"fail_ip_forbidden":case"fail_domain_tld":case"fail_subdomain_wpcom":case"siteurl_private_ip":return g("Your site host is on a private network. Jetpack can only connect to public sites.","jetpack")}if(y)return(0,_.Z)(g("Unavailable in <a>Offline Mode</a>","jetpack"),{a:(0,n.jsx)("a",{href:(0,l.Z)("jetpack-support-development-mode"),target:"_blank",rel:"noopener noreferrer"})})},S=({title:a,images:y,children:G,assetBaseUrl:K,isLoading:H,buttonLabel:V,handleButtonClick:X,displayButtonError:Y,errorCode:Q,buttonIsLoading:I,loadingLabel:$,footer:W,isOfflineMode:h,logo:q})=>(0,n.jsx)(J.Z,{title:a,assetBaseUrl:K,images:y,className:"jp-connection__connect-screen"+(H?" jp-connection__connect-screen__loading":""),logo:q,children:(0,n.jsxs)("div",{className:"jp-connection__connect-screen__content",children:[G,(0,n.jsx)("div",{className:"jp-connection__connect-screen__tos",children:(0,n.jsx)(u.Z,{agreeButtonLabel:V})}),(0,n.jsx)(m.Z,{label:V,onClick:X,displayError:Y||h,errorMessage:U(Q,h),isLoading:I,isDisabled:h}),(0,n.jsx)("span",{className:"jp-connection__connect-screen__loading-message",role:"status",children:I?$||g("Loading","jetpack"):""}),W&&(0,n.jsx)("div",{className:"jp-connection__connect-screen__footer",children:W})]})});S.displayName="ConnectScreenVisual";const w=S;var te=`/* eslint-disable react/react-in-jsx-scope */
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenVisual from '../visual';

export default {
	title: 'JS Packages/Connection/Connect Screen',
	component: ConnectScreenVisual,
};

// Export additional stories using pre-defined values
const Template = props => (
	<ConnectScreenVisual { ...props }>
		<p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

		<ul>
			<li>Measure your impact with beautiful stats</li>
			<li>Speed up your site with optimized images</li>
			<li>Protect your site against bot attacks</li>
			<li>Get notifications if your site goes offline</li>
			<li>Enhance your site with dozens of other features</li>
		</ul>
	</ConnectScreenVisual>
);

const DefaultArgs = {
	// action button props
	buttonIsLoading: false,
	buttonLabel: 'Set up Jetpack',
	displayButtonError: false,
	handleButtonClick: action( 'onButtonClick' ),
	// connect screen props
	title: 'Over 5 million WordPress sites are faster and more secure',
	assetBaseUrl: '/',
	images: [ 'connect-right.png' ],
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

export const Footer = Template.bind( {} );
Footer.args = {
	...DefaultArgs,
	footer: <div>Hi I'm a Footer</div>,
};
`,oe={_default:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Connecting:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Errored:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Footer:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}}};const N={parameters:{storySource:{source:`
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenVisual from '../visual';

export default {
	title: 'JS Packages/Connection/Connect Screen',
	component: ConnectScreenVisual,
};

// Export additional stories using pre-defined values
const Template = props => (
	<ConnectScreenVisual { ...props }>
		<p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

		<ul>
			<li>Measure your impact with beautiful stats</li>
			<li>Speed up your site with optimized images</li>
			<li>Protect your site against bot attacks</li>
			<li>Get notifications if your site goes offline</li>
			<li>Enhance your site with dozens of other features</li>
		</ul>
	</ConnectScreenVisual>
);

const DefaultArgs = {
	// action button props
	buttonIsLoading: false,
	buttonLabel: 'Set up Jetpack',
	displayButtonError: false,
	handleButtonClick: action( 'onButtonClick' ),
	// connect screen props
	title: 'Over 5 million WordPress sites are faster and more secure',
	assetBaseUrl: '/',
	images: [ 'connect-right.png' ],
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

export const Footer = Template.bind( {} );
Footer.args = {
	...DefaultArgs,
	footer: <div>Hi I'm a Footer</div>,
};
`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},connecting:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},errored:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},footer:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}}}}},title:"JS Packages/Connection/Connect Screen",component:w},i=a=>(0,n.jsxs)(w,{...a,children:[(0,n.jsx)("p",{children:"Secure and speed up your site for free with Jetpack's powerful WordPress tools"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Measure your impact with beautiful stats"}),(0,n.jsx)("li",{children:"Speed up your site with optimized images"}),(0,n.jsx)("li",{children:"Protect your site against bot attacks"}),(0,n.jsx)("li",{children:"Get notifications if your site goes offline"}),(0,n.jsx)("li",{children:"Enhance your site with dozens of other features"})]})]});i.displayName="Template";const d={buttonIsLoading:!1,buttonLabel:"Set up Jetpack",displayButtonError:!1,handleButtonClick:(0,p.aD)("onButtonClick"),title:"Over 5 million WordPress sites are faster and more secure",assetBaseUrl:"/",images:["connect-right.png"]},t=i.bind({});t.args=d;const o=i.bind({});o.args={...d,buttonIsLoading:!0};const s=i.bind({});s.args={...d,displayButtonError:!0};const r=i.bind({});r.args={...d,footer:(0,n.jsx)("div",{children:"Hi I'm a Footer"})},t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}},o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}},s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}},r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(O=(A=r.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const Z=["_default","Connecting","Errored","Footer"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss":(j,c,e)=>{e.d(c,{Z:()=>_});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(p),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(u),l=m()(b());l.push([j.id,".jp-connection__connect-screen{--spacing-base: 8px}.jp-connection__connect-screen__loading{display:none}.jp-connection__connect-screen .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*3);max-width:360px}.jp-connection__connect-screen .terms-of-service a{text-decoration:underline}.jp-connection__connect-screen .jp-action-button{margin-top:40px}.jp-connection__connect-screen .jp-action-button--button{border-radius:4px;font-weight:600}.jp-connection__connect-screen .jp-action-button button{max-width:100%}.jp-connection__connect-screen .jp-action-button button:disabled{color:rgba(255,255,255,.4)}@media(max-width: 782px){.jp-connection__connect-screen .jp-action-button button{max-width:none;width:100%}}.jp-connection__connect-screen__loading-message{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;white-space:nowrap}.jp-connection__connect-screen__loading-message:empty{display:none}.jp-connection__connect-screen__footer{margin-top:32px}",""]);const _=l}}]);})();
