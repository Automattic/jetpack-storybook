"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7568],{"../connection/components/connect-screen/basic/stories/index.stories.jsx":(j,c,e)=>{var v,L,w,B,E,k,T,P,M,V,O,D;e.r(c),e.d(c,{Connecting:()=>s,Errored:()=>r,Footer:()=>i,__namedExportsOrder:()=>G,_default:()=>o,default:()=>Z});var m=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("../components/tools/jp-redirect/index.ts"),_=e("../components/components/terms-of-service/index.tsx"),d=e("../components/components/action-button/index.jsx"),g=e("../../../node_modules/.pnpm/@wordpress+element@5.29.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),J=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),R=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=e.n(R),U=e("../connection/components/connect-screen/layout/index.jsx"),F=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(F),S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss"),y={};y.insert="head",y.singleton=!1;var oe=N()(S.Z,y);const se=S.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=J.__,a=h=>{const{title:K,images:H,children:X,assetBaseUrl:Y,isLoading:Q,buttonLabel:I,handleButtonClick:$,displayButtonError:q,errorCode:A,buttonIsLoading:W,loadingLabel:ee,footer:z,isOfflineMode:u,logo:te}=h,ne=(()=>{switch(A){case"fail_domain_forbidden":case"fail_ip_forbidden":case"fail_domain_tld":case"fail_subdomain_wpcom":case"siteurl_private_ip":return b("Your site host is on a private network. Jetpack can only connect to public sites.","jetpack")}if(u)return(0,g.Z)(b("Unavailable in <a>Offline Mode</a>","jetpack"),{a:(0,t.jsx)("a",{href:(0,f.Z)("jetpack-support-development-mode"),target:"_blank",rel:"noopener noreferrer"})})})(A,u);return(0,t.jsx)(U.Z,{title:K,assetBaseUrl:Y,images:H,className:"jp-connection__connect-screen"+(Q?" jp-connection__connect-screen__loading":""),logo:te,children:(0,t.jsxs)("div",{className:"jp-connection__connect-screen__content",children:[X,(0,t.jsx)("div",{className:"jp-connection__connect-screen__tos",children:(0,t.jsx)(_.Z,{agreeButtonLabel:I})}),(0,t.jsx)(d.Z,{label:I,onClick:$,displayError:q||u,errorMessage:ne,isLoading:W,isDisabled:u}),(0,t.jsx)("span",{className:"jp-connection__connect-screen__loading-message",role:"status",children:W?ee:""}),z&&(0,t.jsx)("div",{className:"jp-connection__connect-screen__footer",children:z})]})})};a.displayName="ConnectScreenVisual",a.propTypes={title:n().string,images:n().arrayOf(n().string),assetBaseUrl:n().string,isLoading:n().bool,buttonLabel:n().string.isRequired,handleButtonClick:n().func,displayButtonError:n().bool,errorCode:n().string,buttonIsLoading:n().bool,loadingLabel:n().string,footer:n().node,isOfflineMode:n().bool,logo:n().element},a.defaultProps={isLoading:!1,buttonIsLoading:!1,loadingLabel:b("Loading","jetpack"),displayButtonError:!1,errorCode:null,handleButtonClick:()=>{},footer:null,isOfflineMode:!1};const C=a;a.__docgenInfo={description:`The Connection Screen Visual component..

@param {object} props -- The properties.
@returns {React.Component} The \`ConnectScreenRequiredPlanVisual\` component.`,methods:[],displayName:"ConnectScreenVisual",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the connection status is still loading.",type:{name:"bool"},required:!1},buttonIsLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the button is loading or not.",type:{name:"bool"},required:!1},loadingLabel:{defaultValue:{value:"__( 'Loading', 'jetpack' )",computed:!0},description:"Text read by screen readers after the button is activated",type:{name:"string"},required:!1},displayButtonError:{defaultValue:{value:"false",computed:!1},description:"Whether the error message appears or not.",type:{name:"bool"},required:!1},errorCode:{defaultValue:{value:"null",computed:!1},description:"The connection error code.",type:{name:"string"},required:!1},handleButtonClick:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to be called on button click.",type:{name:"func"},required:!1},footer:{defaultValue:{value:"null",computed:!1},description:"Node that will be rendered after ToS",type:{name:"node"},required:!1},isOfflineMode:{defaultValue:{value:"false",computed:!1},description:"Whether the site is in offline mode.",type:{name:"bool"},required:!1},title:{description:"The Title.",type:{name:"string"},required:!1},images:{description:"Images to display on the right side.",type:{name:"arrayOf",value:{name:"string"}},required:!1},assetBaseUrl:{description:"The assets base URL.",type:{name:"string"},required:!1},buttonLabel:{description:"Text label to be used into button.",type:{name:"string"},required:!0},logo:{description:"The logo to display at the top of the component.",type:{name:"element"},required:!1}}};var re=`/* eslint-disable react/react-in-jsx-scope */
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
`,ie={_default:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Connecting:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Errored:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},Footer:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}}};const Z={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},connecting:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},errored:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}},footer:{startLoc:{col:17,line:12},endLoc:{col:1,line:24},startBody:{col:17,line:12},endBody:{col:1,line:24}}}}},title:"JS Packages/Connection/Connect Screen",component:C},l=h=>(0,t.jsxs)(C,{...h,children:[(0,t.jsx)("p",{children:"Secure and speed up your site for free with Jetpack's powerful WordPress tools"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Measure your impact with beautiful stats"}),(0,t.jsx)("li",{children:"Speed up your site with optimized images"}),(0,t.jsx)("li",{children:"Protect your site against bot attacks"}),(0,t.jsx)("li",{children:"Get notifications if your site goes offline"}),(0,t.jsx)("li",{children:"Enhance your site with dozens of other features"})]})]});l.displayName="Template";const p={buttonIsLoading:!1,buttonLabel:"Set up Jetpack",displayButtonError:!1,handleButtonClick:(0,m.aD)("onButtonClick"),title:"Over 5 million WordPress sites are faster and more secure",assetBaseUrl:"/",images:["connect-right.png"]},o=l.bind({});o.args=p;const s=l.bind({});s.args={...p,buttonIsLoading:!0};const r=l.bind({});r.args={...p,displayButtonError:!0};const i=l.bind({});i.args={...p,footer:(0,t.jsx)("div",{children:"Hi I'm a Footer"})},o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source}}},s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(k=(E=s.parameters)==null?void 0:E.docs)==null?void 0:k.source}}},r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(M=(P=r.parameters)==null?void 0:P.docs)==null?void 0:M.source}}},i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(D=(O=i.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const G=["_default","Connecting","Errored","Footer"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss":(j,c,e)=>{e.d(c,{Z:()=>g});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(m),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(f),d=_()(x());d.push([j.id,".jp-connection__connect-screen{--spacing-base: 8px}.jp-connection__connect-screen__loading{display:none}.jp-connection__connect-screen .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*3);max-width:360px}.jp-connection__connect-screen .terms-of-service a{text-decoration:underline}.jp-connection__connect-screen .jp-action-button{margin-top:40px}.jp-connection__connect-screen .jp-action-button--button{border-radius:4px;font-weight:600}.jp-connection__connect-screen .jp-action-button button{max-width:100%}.jp-connection__connect-screen .jp-action-button button:disabled{color:rgba(255,255,255,.4)}@media(max-width: 782px){.jp-connection__connect-screen .jp-action-button button{max-width:none;width:100%}}.jp-connection__connect-screen__loading-message{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;white-space:nowrap}.jp-connection__connect-screen__loading-message:empty{display:none}.jp-connection__connect-screen__footer{margin-top:32px}",""]);const g=d}}]);})();
