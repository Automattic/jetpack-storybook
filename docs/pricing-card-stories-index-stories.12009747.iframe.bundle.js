(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[338],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs":(v,x,e)=>{"use strict";e.d(x,{aD:()=>m});var _=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),a=e("@storybook/preview-api"),l=e("@storybook/global"),o=e("@storybook/core-events/preview-errors"),r="actions",u="storybook/actions",i=`${u}/panel`,h=`${u}/action-event`,f=`${u}/action-clear`,y="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},c=(s={})=>{Object.assign(E,s)},j=(s,n)=>{let t=Object.getPrototypeOf(s);return!t||n(t)?t:j(t,n)},k=s=>!!(typeof s=="object"&&s&&j(s,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof s.persist=="function"),O=s=>{if(k(s)){let n=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),p=t==null?void 0:t.value;return typeof p=="object"&&(p==null?void 0:p.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(p.constructor.prototype)}),n}return s},d=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,_.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function m(s,n={}){let t={...E,...n},p=function(...w){var P,R;if(n.implicit){let L=(P="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:P.storyRenders.find(S=>S.phase==="playing"||S.phase==="rendering");if(L){let S=!((R=window==null?void 0:window.FEATURES)!=null&&R.disallowImplicitActionsInRenderV8),I=new o.ImplicitActionsDuringRendering({phase:L.phase,name:s,deprecated:S});if(S)console.warn(I);else throw I}}let b=a.addons.getChannel(),A=d(),T=5,C=w.map(O),D=w.length>1?C:C[0],B={id:A,count:0,data:{name:s,args:D},options:{...t,maxDepth:T+(t.depth||3),allowFunction:t.allowFunction||!1}};b.emit(h,B)};return p.isAction=!0,p.implicit=n.implicit,p}var g=(...s)=>{let n=E,t=s;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...E,...t.pop()});let p=t[0];(t.length!==1||typeof p=="string")&&(p={},t.forEach(b=>{p[b]=b}));let w={};return Object.keys(p).forEach(b=>{w[b]=m(p[b],n)}),w}},"../components/components/pricing-card/stories/index.stories.tsx":(v,x,e)=>{var c,j,k,O,d,m,g,s,n;"use strict";e.r(x),e.d(x,{Minimal:()=>h,WithChildren:()=>y,__namedExportsOrder:()=>E,_default:()=>i,default:()=>o});var _=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),a=e("../components/components/pricing-card/index.tsx"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o={title:"JS Packages/Components/Pricing Card",component:a.Z,argTypes:{onCtaClick:{action:"clicked"}}},r=t=>(0,l.jsx)(a.Z,{...t}),u={title:"Jetpack Backup",icon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,ctaText:"Get Jetpack Backup",infoText:"Special introductory pricing, all renewals are at full price. 14 day money back guarantee.",onCtaClick:(0,_.aD)("onCtaClick")},i=r.bind({});i.args=u;const h=r.bind({});h.args={...u,icon:null,ctaText:null,onCtaClick:null,infoText:null};const y=(t=>(0,l.jsx)(a.Z,{...t,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Automated real-time backups"}),(0,l.jsx)("li",{children:"Easy one-click restores"}),(0,l.jsx)("li",{children:"Complete list of all site changes"}),(0,l.jsx)("li",{children:"Global server infrastructure"}),(0,l.jsx)("li",{children:"Best-in-class support"})]})})).bind({});y.args={...u},i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"args => <PricingCard {...args} />",...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}},h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:"args => <PricingCard {...args} />",...(m=(d=h.parameters)==null?void 0:d.docs)==null?void 0:m.source}}},y.parameters={...y.parameters,docs:{...(g=y.parameters)==null?void 0:g.docs,source:{originalSource:`args => <PricingCard {...args}>
        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </PricingCard>`,...(n=(s=y.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const E=["_default","Minimal","WithChildren"]},"../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(v,x,e)=>{"use strict";e.d(x,{Z:()=>O});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let a,l,o,r;const u=/<(\/)?(\w+)\s*(\/)?>/g;function i(d,m,g,s,n){return{element:d,tokenStart:m,tokenLength:g,prevOffset:s,leadingTextStart:n,children:[]}}const h=(d,m)=>{if(a=d,l=0,o=[],r=[],u.lastIndex=0,!f(m))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(y(m));return(0,_.createElement)(_.Fragment,null,...o)},f=d=>{const m=typeof d=="object",g=m&&Object.values(d);return m&&g.length&&g.every(s=>(0,_.isValidElement)(s))};function y(d){const m=E(),[g,s,n,t]=m,p=r.length,w=n>l?l:null;if(!d[s])return c(),!1;switch(g){case"no-more-tokens":if(p!==0){const{leadingTextStart:C,tokenStart:D}=r.pop();o.push(a.substr(C,D))}return c(),!1;case"self-closed":return p===0?(w!==null&&o.push(a.substr(w,n-w)),o.push(d[s]),l=n+t,!0):(j(i(d[s],n,t)),l=n+t,!0);case"opener":return r.push(i(d[s],n,t,n+t,w)),l=n+t,!0;case"closer":if(p===1)return k(n),l=n+t,!0;const b=r.pop(),A=a.substr(b.prevOffset,n-b.prevOffset);b.children.push(A),b.prevOffset=n+t;const T=i(b.element,b.tokenStart,b.tokenLength,n+t);return T.children=b.children,j(T),l=n+t,!0;default:return c(),!1}}function E(){const d=u.exec(a);if(d===null)return["no-more-tokens"];const m=d.index,[g,s,n,t]=d,p=g.length;return t?["self-closed",n,m,p]:s?["closer",n,m,p]:["opener",n,m,p]}function c(){const d=a.length-l;d!==0&&o.push(a.substr(l,d))}function j(d){const{element:m,tokenStart:g,tokenLength:s,prevOffset:n,children:t}=d,p=r[r.length-1],w=a.substr(p.prevOffset,g-p.prevOffset);w&&p.children.push(w),p.children.push((0,_.cloneElement)(m,null,...t)),p.prevOffset=n||g+s}function k(d){const{element:m,leadingTextStart:g,prevOffset:s,tokenStart:n,children:t}=r.pop(),p=d?a.substr(s,d-s):a.substr(s);p&&t.push(p),g!==null&&o.push(a.substr(g,n-g)),o.push((0,_.cloneElement)(m,null,...t))}const O=h},"../components/components/loading-placeholder/index.tsx":(v,x,e)=>{"use strict";e.d(x,{Z:()=>c});var _=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(_),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(o),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),i={};i.insert="head",i.singleton=!1;var h=r()(u.Z,i);const f=u.Z.locals||{};var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=({children:j=null,width:k=null,height:O=null,className:d=""})=>(0,y.jsx)("div",{className:a()(f.placeholder,d),style:{width:k,height:O},children:j});try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch(j){}},"../components/components/pricing-card/index.tsx":(v,x,e)=>{"use strict";e.d(x,{Z:()=>d});var _=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),a=e("../components/components/loading-placeholder/index.tsx"),l=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../components/components/terms-of-service/index.tsx"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(u),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),f={};f.insert="head",f.singleton=!1;var y=i()(h.Z,f);const E=h.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=o.__,k=m=>m.fraction.indexOf("00")===-1,d=({currencyCode:m="USD",priceDetails:g=j("/month, paid yearly","jetpack"),...s})=>{const n=(0,_.LR)(s.priceBefore,m),t=(0,_.LR)(s.priceAfter,m);return(0,c.jsxs)("div",{className:"jp-components__pricing-card",children:[s.icon&&(0,c.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof s.icon=="string"?(0,c.jsx)("img",{src:s.icon,alt:(0,o.gB)(j("Icon for the product %s","jetpack"),s.title)}):s.icon}),(0,c.jsx)("h1",{className:"jp-components__pricing-card__title",children:s.title}),(0,c.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[s.priceBefore!==s.priceAfter&&s.priceAfter>0?(0,c.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,c.jsx)("span",{className:"jp-components__pricing-card__currency",children:n.symbol}),(0,c.jsx)("span",{className:"jp-components__pricing-card__price",children:n.integer}),k(n)&&(0,c.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",n.fraction]}),(0,c.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}):(0,c.jsx)(a.Z,{width:"100%",height:48}),s.priceAfter>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,c.jsx)("span",{className:"jp-components__pricing-card__currency",children:t.symbol}),(0,c.jsx)("span",{className:"jp-components__pricing-card__price",children:t.integer}),k(t)&&(0,c.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:t.fraction})]}),(0,c.jsx)("span",{className:"jp-components__pricing-card__price-details",children:g})]})]}),s.children&&(0,c.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:s.children}),s.tosText&&(0,c.jsx)("div",{className:"jp-components__pricing-card__tos",children:s.tosText}),s.ctaText&&(0,c.jsxs)(c.Fragment,{children:[!s.tosText&&(0,c.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,c.jsx)(r.Z,{agreeButtonLabel:s.ctaText})}),(0,c.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,c.jsx)(l.ZP,{className:"jp-components__pricing-card__button",label:s.ctaText,onClick:s.onCtaClick,children:s.ctaText})})]}),s.infoText&&(0,c.jsx)("div",{className:"jp-components__pricing-card__info",children:s.infoText})]})}},"../components/components/terms-of-service/index.tsx":(v,x,e)=>{"use strict";e.d(x,{Z:()=>s});var _=e("../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(l),r=e("../components/tools/jp-redirect/index.ts"),u=e("../components/components/text/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(i),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),y={};y.insert="head",y.singleton=!1;var E=h()(f.Z,y);const c=f.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=a.__,O=({className:n,multipleButtons:t,agreeButtonLabel:p})=>(0,j.jsx)(u.ZP,{className:o()(n,"terms-of-service"),children:t?(0,j.jsx)(d,{multipleButtonsLabels:t}):(0,j.jsx)(m,{agreeButtonLabel:p})}),d=({multipleButtonsLabels:n})=>Array.isArray(n)&&n.length>1?(0,_.Z)((0,a.gB)(k("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),n[0],n[1]),{strong:(0,j.jsx)("strong",{}),tosLink:(0,j.jsx)(g,{slug:"wpcom-tos"}),shareDetailsLink:(0,j.jsx)(g,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,_.Z)(k("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),{tosLink:(0,j.jsx)(g,{slug:"wpcom-tos"}),shareDetailsLink:(0,j.jsx)(g,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),m=({agreeButtonLabel:n})=>(0,_.Z)((0,a.gB)(k("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),n),{strong:(0,j.jsx)("strong",{}),tosLink:(0,j.jsx)(g,{slug:"wpcom-tos"}),shareDetailsLink:(0,j.jsx)(g,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),g=({slug:n,children:t})=>(0,j.jsx)("a",{className:"terms-of-service__link",href:(0,r.Z)(n),rel:"noopener noreferrer",target:"_blank",children:t}),s=O;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(n){}},"../components/tools/jp-redirect/index.ts":(v,x,e)=>{"use strict";e.d(x,{Z:()=>_});function _(a,l={}){var i,h;const o={};let r;if(typeof window!="undefined"&&(r=(i=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:i.calypsoEnv),a.search("https://")===0){const f=new URL(a);a=`https://${f.host}${f.pathname}`,o.url=encodeURIComponent(a)}else o.source=encodeURIComponent(a);for(const f in l)o[f]=encodeURIComponent(l[f]);return!Object.keys(o).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(o.site=(h=jetpack_redirects.currentBlogID)!=null?h:jetpack_redirects.currentSiteRawUrl),r&&(o.calypso_env=r),"https://jetpack.com/redirect/?"+Object.keys(o).map(f=>f+"="+o[f]).join("&")}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(v,x)=>{var e,_;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty,l="[native code]";function o(){for(var r=[],u=0;u<arguments.length;u++){var i=arguments[u];if(i){var h=typeof i;if(h==="string"||h==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var f=o.apply(null,i);f&&r.push(f)}}else if(h==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var y in i)a.call(i,y)&&i[y]&&r.push(y)}}}return r.join(" ")}v.exports?(o.default=o,v.exports=o):(e=[],_=function(){return o}.apply(x,e),_!==void 0&&(v.exports=_))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(v,x,e)=>{"use strict";e.d(x,{Z:()=>u});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(_),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),r=o()(a());r.push([v.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),r.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const u=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(v,x,e)=>{"use strict";e.d(x,{Z:()=>u});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(_),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),r=o()(a());r.push([v.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const u=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(v,x,e)=>{"use strict";e.d(x,{Z:()=>u});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(_),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),r=o()(a());r.push([v.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const u=r}}]);})();
