"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7568],{"../connection/components/connect-screen/basic/stories/index.stories.jsx":(y,c,e)=>{var C,j,w,x,B,E,k,v,L,P,V,T;e.r(c),e.d(c,{Connecting:()=>s,Errored:()=>r,Footer:()=>i,__namedExportsOrder:()=>A,_default:()=>o,default:()=>O});var p=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../components/components/terms-of-service/index.tsx"),f=e("../components/components/action-button/index.jsx"),u=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(u),W=e("../connection/components/connect-screen/layout/index.jsx"),z=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(z),b=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss"),_={};_.insert="head",_.singleton=!1;var X=D()(b.Z,_);const Y=b.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=g=>{const{title:F,images:J,children:R,assetBaseUrl:U,isLoading:G,showConnectButton:N,buttonLabel:M,handleButtonClick:Z,displayButtonError:K,buttonIsLoading:H,footer:I}=g;return(0,n.jsx)(W.Z,{title:F,assetBaseUrl:U,images:J,className:"jp-connection__connect-screen"+(G?" jp-connection__connect-screen__loading":""),children:(0,n.jsxs)("div",{className:"jp-connection__connect-screen__content",children:[R,N&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"jp-connection__connect-screen__tos",children:(0,n.jsx)(m.Z,{agreeButtonLabel:M})}),(0,n.jsx)(f.Z,{label:M,onClick:Z,displayError:K,isLoading:H})]}),I&&(0,n.jsx)("div",{className:"jp-connection__connect-screen__footer",children:I})]})})};a.displayName="ConnectScreenVisual",a.propTypes={title:t().string,images:t().arrayOf(t().string),assetBaseUrl:t().string,isLoading:t().bool,showConnectButton:t().bool,buttonLabel:t().string.isRequired,handleButtonClick:t().func,displayButtonError:t().bool,buttonIsLoading:t().bool,footer:t().node},a.defaultProps={showConnectButton:!0,isLoading:!1,buttonIsLoading:!1,displayButtonError:!1,handleButtonClick:()=>{},footer:null},a.__docgenInfo={description:`The Connection Screen Visual component..

@param {object} props -- The properties.
@returns {React.Component} The \`ConnectScreenRequiredPlanVisual\` component.`,methods:[],displayName:"ConnectScreenVisual",props:{showConnectButton:{defaultValue:{value:"true",computed:!1},description:"Whether the connection button appears or not.",type:{name:"bool"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the connection status is still loading.",type:{name:"bool"},required:!1},buttonIsLoading:{defaultValue:{value:"false",computed:!1},description:"Whether the button is loading or not.",type:{name:"bool"},required:!1},displayButtonError:{defaultValue:{value:"false",computed:!1},description:"Whether the error message appears or not.",type:{name:"bool"},required:!1},handleButtonClick:{defaultValue:{value:"() => {}",computed:!1},description:"Callback to be called on button click.",type:{name:"func"},required:!1},footer:{defaultValue:{value:"null",computed:!1},description:"Node that will be rendered after ToS",type:{name:"node"},required:!1},title:{description:"The Title.",type:{name:"string"},required:!1},images:{description:"Images to display on the right side.",type:{name:"arrayOf",value:{name:"string"}},required:!1},assetBaseUrl:{description:"The assets base URL.",type:{name:"string"},required:!1},buttonLabel:{description:"Text label to be used into button.",type:{name:"string"},required:!0}}};const S=a;var Q=`/* eslint-disable react/react-in-jsx-scope */
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
	showConnectButton: true,
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
`,$={_default:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}},Connecting:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}},Errored:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}},Footer:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}}};const O={parameters:{storySource:{source:`
import { action } from '@storybook/addon-actions';
import React from 'react';
import ConnectScreenVisual from '../visual';
export default {
  title: 'JS Packages/Connection/Connect Screen',
  component: ConnectScreenVisual
};

// Export additional stories using pre-defined values
const Template = props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>;
const DefaultArgs = {
  // action button props
  buttonIsLoading: false,
  buttonLabel: 'Set up Jetpack',
  displayButtonError: false,
  showConnectButton: true,
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
  footer: <div>Hi I'm a Footer</div>
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "props => <ConnectScreenVisual {...props}>\\n        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>\\n\\n        <ul>\\n            <li>Measure your impact with beautiful stats</li>\\n            <li>Speed up your site with optimized images</li>\\n            <li>Protect your site against bot attacks</li>\\n            <li>Get notifications if your site goes offline</li>\\n            <li>Enhance your site with dozens of other features</li>\\n        </ul>\\n    </ConnectScreenVisual>",
      ..._default.parameters?.docs?.source
    }
  }
};
Connecting.parameters = {
  ...Connecting.parameters,
  docs: {
    ...Connecting.parameters?.docs,
    source: {
      originalSource: "props => <ConnectScreenVisual {...props}>\\n        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>\\n\\n        <ul>\\n            <li>Measure your impact with beautiful stats</li>\\n            <li>Speed up your site with optimized images</li>\\n            <li>Protect your site against bot attacks</li>\\n            <li>Get notifications if your site goes offline</li>\\n            <li>Enhance your site with dozens of other features</li>\\n        </ul>\\n    </ConnectScreenVisual>",
      ...Connecting.parameters?.docs?.source
    }
  }
};
Errored.parameters = {
  ...Errored.parameters,
  docs: {
    ...Errored.parameters?.docs,
    source: {
      originalSource: "props => <ConnectScreenVisual {...props}>\\n        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>\\n\\n        <ul>\\n            <li>Measure your impact with beautiful stats</li>\\n            <li>Speed up your site with optimized images</li>\\n            <li>Protect your site against bot attacks</li>\\n            <li>Get notifications if your site goes offline</li>\\n            <li>Enhance your site with dozens of other features</li>\\n        </ul>\\n    </ConnectScreenVisual>",
      ...Errored.parameters?.docs?.source
    }
  }
};
Footer.parameters = {
  ...Footer.parameters,
  docs: {
    ...Footer.parameters?.docs,
    source: {
      originalSource: "props => <ConnectScreenVisual {...props}>\\n        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>\\n\\n        <ul>\\n            <li>Measure your impact with beautiful stats</li>\\n            <li>Speed up your site with optimized images</li>\\n            <li>Protect your site against bot attacks</li>\\n            <li>Get notifications if your site goes offline</li>\\n            <li>Enhance your site with dozens of other features</li>\\n        </ul>\\n    </ConnectScreenVisual>",
      ...Footer.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}},connecting:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}},errored:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}},footer:{startLoc:{col:17,line:11},endLoc:{col:26,line:21},startBody:{col:17,line:11},endBody:{col:26,line:21}}}}},title:"JS Packages/Connection/Connect Screen",component:S},l=g=>(0,n.jsxs)(S,{...g,children:[(0,n.jsx)("p",{children:"Secure and speed up your site for free with Jetpack's powerful WordPress tools"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Measure your impact with beautiful stats"}),(0,n.jsx)("li",{children:"Speed up your site with optimized images"}),(0,n.jsx)("li",{children:"Protect your site against bot attacks"}),(0,n.jsx)("li",{children:"Get notifications if your site goes offline"}),(0,n.jsx)("li",{children:"Enhance your site with dozens of other features"})]})]});l.displayName="Template";const d={buttonIsLoading:!1,buttonLabel:"Set up Jetpack",displayButtonError:!1,showConnectButton:!0,handleButtonClick:(0,p.aD)("onButtonClick"),title:"Over 5 million WordPress sites are faster and more secure",assetBaseUrl:"/",images:["connect-right.png"]},o=l.bind({});o.args=d;const s=l.bind({});s.args={...d,buttonIsLoading:!0};const r=l.bind({});r.args={...d,displayButtonError:!0};const i=l.bind({});i.args={...d,footer:(0,n.jsx)("div",{children:"Hi I'm a Footer"})},o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}},s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}},r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}},i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(T=(V=i.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const A=["_default","Connecting","Errored","Footer"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss":(y,c,e)=>{e.d(c,{Z:()=>t});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(p),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(m),u=f()(h());u.push([y.id,".jp-connection__connect-screen{--spacing-base: 8px}.jp-connection__connect-screen__loading{display:none}.jp-connection__connect-screen .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*3);max-width:360px}.jp-connection__connect-screen .terms-of-service a{text-decoration:underline}.jp-connection__connect-screen .jp-action-button{margin-top:40px}.jp-connection__connect-screen .jp-action-button--button{border-radius:4px;font-weight:600}.jp-connection__connect-screen .jp-action-button button{max-width:100%}.jp-connection__connect-screen .jp-action-button button:disabled{color:rgba(255,255,255,.4)}@media(max-width: 782px){.jp-connection__connect-screen .jp-action-button button{max-width:none;width:100%}}.jp-connection__connect-screen__footer{margin-top:32px}",""]);const t=u}}]);})();
