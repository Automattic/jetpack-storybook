(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7568],{"../connection/components/connect-screen/basic/stories/index.stories.jsx":(c,a,e)=>{var k,P,M,D,A,O,B,W,I,L,z,R;"use strict";e.r(a),e.d(a,{Connecting:()=>d,Errored:()=>p,Footer:()=>u,__namedExportsOrder:()=>Z,_default:()=>l,default:()=>N});var i=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../components/components/terms-of-service/index.tsx"),t=e("../components/components/action-button/index.jsx"),n=e("../components/tools/jp-redirect/index.ts"),r=e("../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../connection/components/connect-screen/layout/index.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(g),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss"),x={};x.insert="head",x.singleton=!1;var q=m()(E.Z,x);const ee=E.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=o.__,J=(f,S)=>{switch(f){case"fail_domain_forbidden":case"fail_ip_forbidden":case"fail_domain_tld":case"fail_subdomain_wpcom":case"siteurl_private_ip":return v("Your site host is on a private network. Jetpack can only connect to public sites.","jetpack")}if(S)return(0,r.Z)(v("Unavailable in <a>Offline Mode</a>","jetpack"),{a:(0,s.jsx)("a",{href:(0,n.Z)("jetpack-support-development-mode"),target:"_blank",rel:"noopener noreferrer"})})},C=({title:f,images:S,children:F,assetBaseUrl:K,isLoading:G,buttonLabel:T,handleButtonClick:X,displayButtonError:Y,errorCode:H,buttonIsLoading:V,loadingLabel:Q,footer:U,isOfflineMode:w,logo:$})=>(0,s.jsx)(_.Z,{title:f,assetBaseUrl:K,images:S,className:"jp-connection__connect-screen"+(G?" jp-connection__connect-screen__loading":""),logo:$,children:(0,s.jsxs)("div",{className:"jp-connection__connect-screen__content",children:[F,(0,s.jsx)("div",{className:"jp-connection__connect-screen__tos",children:(0,s.jsx)(h.Z,{agreeButtonLabel:T})}),(0,s.jsx)(t.Z,{label:T,onClick:X,displayError:Y||w,errorMessage:J(H,w),isLoading:V,isDisabled:w}),(0,s.jsx)("span",{className:"jp-connection__connect-screen__loading-message",role:"status",children:V?Q||v("Loading","jetpack"):""}),U&&(0,s.jsx)("div",{className:"jp-connection__connect-screen__footer",children:U})]})}),N={title:"JS Packages/Connection/Connect Screen",component:C},y=f=>(0,s.jsxs)(C,{...f,children:[(0,s.jsx)("p",{children:"Secure and speed up your site for free with Jetpack's powerful WordPress tools"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Measure your impact with beautiful stats"}),(0,s.jsx)("li",{children:"Speed up your site with optimized images"}),(0,s.jsx)("li",{children:"Protect your site against bot attacks"}),(0,s.jsx)("li",{children:"Get notifications if your site goes offline"}),(0,s.jsx)("li",{children:"Enhance your site with dozens of other features"})]})]}),b={buttonIsLoading:!1,buttonLabel:"Set up Jetpack",displayButtonError:!1,handleButtonClick:(0,i.aD)("onButtonClick"),title:"Over 5 million WordPress sites are faster and more secure",assetBaseUrl:"/",images:["connect-right.png"]},l=y.bind({});l.args=b;const d=y.bind({});d.args={...b,buttonIsLoading:!0};const p=y.bind({});p.args={...b,displayButtonError:!0};const u=y.bind({});u.args={...b,footer:(0,s.jsx)("div",{children:"Hi I'm a Footer"})},l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(M=(P=l.parameters)==null?void 0:P.docs)==null?void 0:M.source}}},d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(O=(A=d.parameters)==null?void 0:A.docs)==null?void 0:O.source}}},p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(I=(W=p.parameters)==null?void 0:W.docs)==null?void 0:I.source}}},u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`props => <ConnectScreenVisual {...props}>
        <p>Secure and speed up your site for free with Jetpack's powerful WordPress tools</p>

        <ul>
            <li>Measure your impact with beautiful stats</li>
            <li>Speed up your site with optimized images</li>
            <li>Protect your site against bot attacks</li>
            <li>Get notifications if your site goes offline</li>
            <li>Enhance your site with dozens of other features</li>
        </ul>
    </ConnectScreenVisual>`,...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const Z=["_default","Connecting","Errored","Footer"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,a)=>{var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var j={}.hasOwnProperty,h="[native code]";function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var _=typeof o;if(_==="string"||_==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var g=t.apply(null,o);g&&n.push(g)}}else if(_==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var m in o)j.call(o,m)&&o[m]&&n.push(m)}}}return n.join(" ")}c.exports?(t.default=t,c.exports=t):(e=[],i=function(){return t}.apply(a,e),i!==void 0&&(c.exports=i))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/basic/style.scss":(c,a,e)=>{"use strict";e.d(a,{Z:()=>r});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(h),n=t()(j());n.push([c.id,".jp-connection__connect-screen{--spacing-base: 8px}.jp-connection__connect-screen__loading{display:none}.jp-connection__connect-screen .terms-of-service{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*3);max-width:360px}.jp-connection__connect-screen .terms-of-service a{text-decoration:underline}.jp-connection__connect-screen .jp-action-button{margin-top:40px}.jp-connection__connect-screen .jp-action-button--button{border-radius:4px;font-weight:600}.jp-connection__connect-screen .jp-action-button button{max-width:100%}.jp-connection__connect-screen .jp-action-button button:disabled{color:rgba(255,255,255,.4)}@media(max-width: 782px){.jp-connection__connect-screen .jp-action-button button{max-width:none;width:100%}}.jp-connection__connect-screen__loading-message{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;white-space:nowrap}.jp-connection__connect-screen__loading-message:empty{display:none}.jp-connection__connect-screen__footer{margin-top:32px}",""]);const r=n}}]);})();
