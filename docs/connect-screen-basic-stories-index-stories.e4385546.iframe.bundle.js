"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[954],{"../connection/components/connect-screen/basic/stories/index.stories.jsx":(h,c,e)=>{e.r(c),e.d(c,{Connecting:()=>t,Errored:()=>s,Footer:()=>r,__namedExportsOrder:()=>T,_default:()=>o,default:()=>A});var u=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../components/tools/jp-redirect/index.ts"),m=e("../components/components/terms-of-service/index.tsx"),a=e("../components/components/action-button/index.jsx"),f=e("../../../node_modules/.pnpm/@wordpress+element@6.24.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../connection/components/connect-screen/layout/index.tsx"),P=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(P),x=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../connection/components/connect-screen/basic/style.scss"),g={};g.insert="head",g.singleton=!1;var J=B()(x.A,g);const M=x.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=k.__,L=(i,j)=>{switch(i){case"fail_domain_forbidden":case"fail_ip_forbidden":case"fail_domain_tld":case"fail_subdomain_wpcom":case"siteurl_private_ip":return l("Your site host is on a private network. Jetpack can only connect to public sites.","jetpack-connection-js");case"connection_disabled":return l("This site has been suspended.","jetpack-connection-js")}if(j)return(0,f.A)(l("Unavailable in <a>Offline Mode</a>","jetpack-connection-js"),{a:(0,n.jsx)("a",{href:(0,_.A)("jetpack-support-development-mode"),target:"_blank",rel:"noopener noreferrer"})})},S=({title:i,images:j,children:D,assetBaseUrl:O,isLoading:R,buttonLabel:E,handleButtonClick:U,displayButtonError:I,errorCode:V,buttonIsLoading:v,loadingLabel:W,footer:C,isOfflineMode:y,logo:z})=>(0,n.jsx)(w.A,{title:i,assetBaseUrl:O,images:j,className:"jp-connection__connect-screen"+(R?" jp-connection__connect-screen__loading":""),logo:z,children:(0,n.jsxs)("div",{className:"jp-connection__connect-screen__content",children:[D,(0,n.jsx)("div",{className:"jp-connection__connect-screen__tos",children:(0,n.jsx)(m.A,{agreeButtonLabel:E})}),(0,n.jsx)(a.A,{label:E,onClick:U,displayError:I||y,errorMessage:L(V,y),isLoading:v,isDisabled:y}),(0,n.jsx)("span",{className:"jp-connection__connect-screen__loading-message",role:"status",children:v?W||l("Loading","jetpack-connection-js"):""}),C&&(0,n.jsx)("div",{className:"jp-connection__connect-screen__footer",children:C})]})});var G=`import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenVisual from '../visual';

export default {
	title: 'JS Packages/Connection/Connect Screen',
	component: ConnectScreenVisual,
};

// Export additional stories using pre-defined values
const Template = props => (
	<ConnectScreenVisual { ...props }>
		<p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

		<ul>
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
	footer: <div>Hi I&apos;m a Footer</div>,
};
`,N={_default:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}},Connecting:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}},Errored:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}},Footer:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}}};const A={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenVisual from '../visual';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Connection/Connect Screen',
  component: ConnectScreenVisual
};

// Export additional stories using pre-defined values
const Template = props => /*#__PURE__*/_jsxs(ConnectScreenVisual, {
  ...props,
  children: [/*#__PURE__*/_jsx("p", {
    children: "Secure and speed up your site for free with Jetpack's powerful WordPress tools"
  }), /*#__PURE__*/_jsxs("ul", {
    children: [/*#__PURE__*/_jsx("li", {
      children: "Speed up your site with optimized images"
    }), /*#__PURE__*/_jsx("li", {
      children: "Protect your site against bot attacks"
    }), /*#__PURE__*/_jsx("li", {
      children: "Get notifications if your site goes offline"
    }), /*#__PURE__*/_jsx("li", {
      children: "Enhance your site with dozens of other features"
    })]
  })]
});
const DefaultArgs = {
  // action button props
  buttonIsLoading: false,
  buttonLabel: 'Set up Jetpack',
  displayButtonError: false,
  handleButtonClick: action('onButtonClick'),
  // connect screen props
  title: 'Over 5 million WordPress sites are faster and more secure',
  assetBaseUrl: '/',
  images: ['connect-right.png']
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const Connecting = Template.bind({});
Connecting.args = {
  ...DefaultArgs,
  buttonIsLoading: true
};
export const Errored = Template.bind({});
Errored.args = {
  ...DefaultArgs,
  displayButtonError: true
};
export const Footer = Template.bind({});
Footer.args = {
  ...DefaultArgs,
  footer: /*#__PURE__*/_jsx("div", {
    children: "Hi I'm a Footer"
  })
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}},connecting:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}},errored:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}},footer:{startLoc:{col:17,line:11},endLoc:{col:2,line:26},startBody:{col:17,line:11},endBody:{col:2,line:26}}}}},title:"JS Packages/Connection/Connect Screen",component:S},d=i=>(0,n.jsxs)(S,{...i,children:[(0,n.jsx)("p",{children:"Secure and speed up your site for free with Jetpack's powerful WordPress tools"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Speed up your site with optimized images"}),(0,n.jsx)("li",{children:"Protect your site against bot attacks"}),(0,n.jsx)("li",{children:"Get notifications if your site goes offline"}),(0,n.jsx)("li",{children:"Enhance your site with dozens of other features"})]})]}),p={buttonIsLoading:!1,buttonLabel:"Set up Jetpack",displayButtonError:!1,handleButtonClick:(0,u.XI)("onButtonClick"),title:"Over 5 million WordPress sites are faster and more secure",assetBaseUrl:"/",images:["connect-right.png"]},o=d.bind({});o.args=p;const t=d.bind({});t.args={...p,buttonIsLoading:!0};const s=d.bind({});s.args={...p,displayButtonError:!0};const r=d.bind({});r.args={...p,footer:(0,n.jsx)("div",{children:"Hi I'm a Footer"})};const T=["_default","Connecting","Errored","Footer"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...o.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...t.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...s.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack&apos;s powerful WordPress tools</p>

        <ul>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...r.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../connection/components/connect-screen/basic/style.scss":(h,c,e)=>{e.d(c,{A:()=>f});var u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(u),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(_),a=m()(b());a.push([h.id,".jp-connection__connect-screen{--spacing-base: 8px}.jp-connection__connect-screen__loading{display:none}.jp-connection__connect-screen .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*3);max-width:360px}.jp-connection__connect-screen .terms-of-service a{text-decoration:underline}.jp-connection__connect-screen .jp-action-button{margin-top:40px}.jp-connection__connect-screen .jp-action-button--button{border-radius:4px;font-weight:600}.jp-connection__connect-screen .jp-action-button button{max-width:100%}.jp-connection__connect-screen .jp-action-button button:disabled{color:hsla(0,0%,100%,.4)}@media(max-width: 782px){.jp-connection__connect-screen .jp-action-button button{max-width:none;width:100%}}.jp-connection__connect-screen__loading-message{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;white-space:nowrap}.jp-connection__connect-screen__loading-message:empty{display:none}.jp-connection__connect-screen__footer{margin-top:32px}",""]);const f=a}}]);
