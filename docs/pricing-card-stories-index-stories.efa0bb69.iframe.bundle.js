"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[338],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.1.6/node_modules/@storybook/addon-actions/dist/index.mjs":(k,f,s)=>{s.d(f,{aD:()=>c});var _=s("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),r=s("@storybook/preview-api"),a=s("@storybook/global"),l=s("@storybook/core-events/preview-errors"),d="actions",m="storybook/actions",h=`${m}/panel`,j=`${m}/action-event`,g=`${m}/action-clear`,w="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},t=(e={})=>{Object.assign(E,e)},x=(e,n)=>{let o=Object.getPrototypeOf(e);return!o||n(o)?o:x(o,n)},b=e=>!!(typeof e=="object"&&e&&x(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),O=e=>{if(b(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let o=Object.getOwnPropertyDescriptor(n,"view"),p=o==null?void 0:o.value;return typeof p=="object"&&(p==null?void 0:p.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...o,value:Object.create(p.constructor.prototype)}),n}return e},i=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,_.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function c(e,n={}){let o={...E,...n},p=function(...v){var A,L;if(n.implicit){let R=(A="__STORYBOOK_PREVIEW__"in a.global?a.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:A.storyRenders.find(S=>S.phase==="playing"||S.phase==="rendering");if(R){let S=!((L=window==null?void 0:window.FEATURES)!=null&&L.disallowImplicitActionsInRenderV8),I=new l.ImplicitActionsDuringRendering({phase:R.phase,name:e,deprecated:S});if(S)console.warn(I);else throw I}}let y=r.addons.getChannel(),D=i(),T=5,C=v.map(O),P=v.length>1?C:C[0],B={id:D,count:0,data:{name:e,args:P},options:{...o,maxDepth:T+(o.depth||3),allowFunction:o.allowFunction||!1}};y.emit(j,B)};return p.isAction=!0,p.implicit=n.implicit,p}var u=(...e)=>{let n=E,o=e;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(n={...E,...o.pop()});let p=o[0];(o.length!==1||typeof p=="string")&&(p={},o.forEach(y=>{p[y]=y}));let v={};return Object.keys(p).forEach(y=>{v[y]=c(p[y],n)}),v}},"../components/components/pricing-card/stories/index.stories.tsx":(k,f,s)=>{var t,x,b,O,i,c,u,e,n;s.r(f),s.d(f,{Minimal:()=>j,WithChildren:()=>w,__namedExportsOrder:()=>E,_default:()=>h,default:()=>l});var _=s("../../../node_modules/.pnpm/@storybook+addon-actions@8.1.6/node_modules/@storybook/addon-actions/dist/index.mjs"),r=s("../components/components/pricing-card/index.tsx"),a=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l={title:"JS Packages/Components/Pricing Card",component:r.Z,argTypes:{onCtaClick:{action:"clicked"}}},d=o=>(0,a.jsx)(r.Z,{...o}),m={title:"Jetpack Backup",icon:"data:image/svg+xml,%3Csvg width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m21.092 15.164.019-1.703v-.039c0-1.975-1.803-3.866-4.4-3.866-2.17 0-3.828 1.351-4.274 2.943l-.426 1.524-1.581-.065a2.92 2.92 0 0 0-.12-.002c-1.586 0-2.977 1.344-2.977 3.133 0 1.787 1.388 3.13 2.973 3.133H22.399c1.194 0 2.267-1.016 2.267-2.4 0-1.235-.865-2.19-1.897-2.368l-1.677-.29Zm-10.58-3.204a4.944 4.944 0 0 0-.201-.004c-2.75 0-4.978 2.298-4.978 5.133s2.229 5.133 4.978 5.133h12.088c2.357 0 4.267-1.97 4.267-4.4 0-2.18-1.538-3.99-3.556-4.339v-.06c0-3.24-2.865-5.867-6.4-5.867-2.983 0-5.49 1.871-6.199 4.404Z' fill='%23000'/%3E%3C/svg%3E",priceBefore:9,priceAfter:4.5,ctaText:"Get Jetpack Backup",infoText:"Special introductory pricing, all renewals are at full price. 14 day money back guarantee.",onCtaClick:(0,_.aD)("onCtaClick")},h=d.bind({});h.args=m;const j=d.bind({});j.args={...m,icon:null,ctaText:null,onCtaClick:null,infoText:null};const w=(o=>(0,a.jsx)(r.Z,{...o,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Automated real-time backups"}),(0,a.jsx)("li",{children:"Easy one-click restores"}),(0,a.jsx)("li",{children:"Complete list of all site changes"}),(0,a.jsx)("li",{children:"Global server infrastructure"}),(0,a.jsx)("li",{children:"Best-in-class support"})]})})).bind({});w.args={...m},h.parameters={...h.parameters,docs:{...(t=h.parameters)==null?void 0:t.docs,source:{originalSource:"args => <PricingCard {...args} />",...(b=(x=h.parameters)==null?void 0:x.docs)==null?void 0:b.source}}},j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:"args => <PricingCard {...args} />",...(c=(i=j.parameters)==null?void 0:i.docs)==null?void 0:c.source}}},w.parameters={...w.parameters,docs:{...(u=w.parameters)==null?void 0:u.docs,source:{originalSource:`args => <PricingCard {...args}>
        <ul>
            <li>Automated real-time backups</li>
            <li>Easy one-click restores</li>
            <li>Complete list of all site changes</li>
            <li>Global server infrastructure</li>
            <li>Best-in-class support</li>
        </ul>
    </PricingCard>`,...(n=(e=w.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const E=["_default","Minimal","WithChildren"]},"../../../node_modules/.pnpm/@wordpress+element@6.2.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(k,f,s)=>{s.d(f,{Z:()=>O});var _=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let r,a,l,d;const m=/<(\/)?(\w+)\s*(\/)?>/g;function h(i,c,u,e,n){return{element:i,tokenStart:c,tokenLength:u,prevOffset:e,leadingTextStart:n,children:[]}}const j=(i,c)=>{if(r=i,a=0,l=[],d=[],m.lastIndex=0,!g(c))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(w(c));return(0,_.createElement)(_.Fragment,null,...l)},g=i=>{const c=typeof i=="object",u=c&&Object.values(i);return c&&u.length&&u.every(e=>(0,_.isValidElement)(e))};function w(i){const c=E(),[u,e,n,o]=c,p=d.length,v=n>a?a:null;if(!i[e])return t(),!1;switch(u){case"no-more-tokens":if(p!==0){const{leadingTextStart:C,tokenStart:P}=d.pop();l.push(r.substr(C,P))}return t(),!1;case"self-closed":return p===0?(v!==null&&l.push(r.substr(v,n-v)),l.push(i[e]),a=n+o,!0):(x(h(i[e],n,o)),a=n+o,!0);case"opener":return d.push(h(i[e],n,o,n+o,v)),a=n+o,!0;case"closer":if(p===1)return b(n),a=n+o,!0;const y=d.pop(),D=r.substr(y.prevOffset,n-y.prevOffset);y.children.push(D),y.prevOffset=n+o;const T=h(y.element,y.tokenStart,y.tokenLength,n+o);return T.children=y.children,x(T),a=n+o,!0;default:return t(),!1}}function E(){const i=m.exec(r);if(i===null)return["no-more-tokens"];const c=i.index,[u,e,n,o]=i,p=u.length;return o?["self-closed",n,c,p]:e?["closer",n,c,p]:["opener",n,c,p]}function t(){const i=r.length-a;i!==0&&l.push(r.substr(a,i))}function x(i){const{element:c,tokenStart:u,tokenLength:e,prevOffset:n,children:o}=i,p=d[d.length-1],v=r.substr(p.prevOffset,u-p.prevOffset);v&&p.children.push(v),p.children.push((0,_.cloneElement)(c,null,...o)),p.prevOffset=n||u+e}function b(i){const{element:c,leadingTextStart:u,prevOffset:e,tokenStart:n,children:o}=d.pop(),p=i?r.substr(e,i-e):r.substr(e);p&&o.push(p),u!==null&&l.push(r.substr(u,n-u)),l.push((0,_.cloneElement)(c,null,...o))}const O=j},"../components/components/loading-placeholder/index.tsx":(k,f,s)=>{s.d(f,{Z:()=>E});var _=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(a),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss"),m={};m.insert="head",m.singleton=!1;var h=l()(d.Z,m);const j=d.Z.locals||{};var g=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=({children:t=null,width:x=null,height:b=null,className:O=""})=>(0,g.jsx)("div",{className:(0,_.Z)(j.placeholder,O),style:{width:x,height:b},children:t});try{loadingplaceholder.displayName="loadingplaceholder",loadingplaceholder.__docgenInfo={description:"",displayName:"loadingplaceholder",props:{width:{defaultValue:{value:"null"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"null"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/loading-placeholder/index.tsx#loadingplaceholder"]={docgenInfo:loadingplaceholder.__docgenInfo,name:"loadingplaceholder",path:"../components/components/loading-placeholder/index.tsx#loadingplaceholder"})}catch(t){}},"../components/components/pricing-card/index.tsx":(k,f,s)=>{s.d(f,{Z:()=>i});var _=s("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),r=s("../components/components/loading-placeholder/index.tsx"),a=s("../../../node_modules/.pnpm/@wordpress+components@28.2.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),l=s("../../../node_modules/.pnpm/@wordpress+i18n@5.2.0/node_modules/@wordpress/i18n/build-module/index.js"),d=s("../components/components/terms-of-service/index.tsx"),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=s.n(m),j=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss"),g={};g.insert="head",g.singleton=!1;var w=h()(j.Z,g);const E=j.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=l.__,b=c=>c.fraction.indexOf("00")===-1,i=({currencyCode:c="USD",priceDetails:u=x("/month, paid yearly","jetpack"),...e})=>{const n=(0,_.LR)(e.priceBefore,c),o=(0,_.LR)(e.priceAfter,c);return(0,t.jsxs)("div",{className:"jp-components__pricing-card",children:[e.icon&&(0,t.jsx)("div",{className:"jp-components__pricing-card__icon",children:typeof e.icon=="string"?(0,t.jsx)("img",{src:e.icon,alt:(0,l.gB)(x("Icon for the product %s","jetpack"),e.title)}):e.icon}),(0,t.jsx)("h1",{className:"jp-components__pricing-card__title",children:e.title}),(0,t.jsxs)("div",{className:"jp-components__pricing-card__pricing",children:[e.priceBefore!==e.priceAfter&&e.priceAfter>0?(0,t.jsxs)("div",{className:"jp-components__pricing-card__price-before",children:[(0,t.jsx)("span",{className:"jp-components__pricing-card__currency",children:n.symbol}),(0,t.jsx)("span",{className:"jp-components__pricing-card__price",children:n.integer}),b(n)&&(0,t.jsxs)("span",{className:"jp-components__pricing-card__price-decimal",children:[" ",n.fraction]}),(0,t.jsx)("div",{className:"jp-components__pricing-card__price-strikethrough"})]}):(0,t.jsx)(r.Z,{width:"100%",height:48}),e.priceAfter>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"jp-components__pricing-card__price-after",children:[(0,t.jsx)("span",{className:"jp-components__pricing-card__currency",children:o.symbol}),(0,t.jsx)("span",{className:"jp-components__pricing-card__price",children:o.integer}),b(o)&&(0,t.jsx)("span",{className:"jp-components__pricing-card__price-decimal",children:o.fraction})]}),(0,t.jsx)("span",{className:"jp-components__pricing-card__price-details",children:u})]})]}),e.children&&(0,t.jsx)("div",{className:"jp-components__pricing-card__extra-content-wrapper",children:e.children}),e.tosText&&(0,t.jsx)("div",{className:"jp-components__pricing-card__tos",children:e.tosText}),e.ctaText&&(0,t.jsxs)(t.Fragment,{children:[!e.tosText&&(0,t.jsx)("div",{className:"jp-components__pricing-card__tos",children:(0,t.jsx)(d.Z,{agreeButtonLabel:e.ctaText})}),(0,t.jsx)("div",{className:"jp-components__pricing-card__cta",children:(0,t.jsx)(a.ZP,{className:"jp-components__pricing-card__button",label:e.ctaText,onClick:e.onCtaClick,children:e.ctaText})})]}),e.infoText&&(0,t.jsx)("div",{className:"jp-components__pricing-card__info",children:e.infoText})]})}},"../components/components/terms-of-service/index.tsx":(k,f,s)=>{s.d(f,{Z:()=>u});var _=s("../../../node_modules/.pnpm/@wordpress+element@6.2.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),r=s("../../../node_modules/.pnpm/@wordpress+i18n@5.2.0/node_modules/@wordpress/i18n/build-module/index.js"),a=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=s("../components/tools/jp-redirect/index.ts"),d=s("../components/components/text/index.tsx"),m=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=s.n(m),j=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),g={};g.insert="head",g.singleton=!1;var w=h()(j.Z,g);const E=j.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=r.__,b=({className:e,multipleButtons:n,agreeButtonLabel:o})=>(0,t.jsx)(d.ZP,{className:(0,a.Z)(e,"terms-of-service"),children:n?(0,t.jsx)(O,{multipleButtonsLabels:n}):(0,t.jsx)(i,{agreeButtonLabel:o})}),O=({multipleButtonsLabels:e})=>Array.isArray(e)&&e.length>1?(0,_.Z)((0,r.gB)(x("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),e[0],e[1]),{strong:(0,t.jsx)("strong",{}),tosLink:(0,t.jsx)(c,{slug:"wpcom-tos"}),shareDetailsLink:(0,t.jsx)(c,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,_.Z)(x("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),{tosLink:(0,t.jsx)(c,{slug:"wpcom-tos"}),shareDetailsLink:(0,t.jsx)(c,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),i=({agreeButtonLabel:e})=>(0,_.Z)((0,r.gB)(x("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),e),{strong:(0,t.jsx)("strong",{}),tosLink:(0,t.jsx)(c,{slug:"wpcom-tos"}),shareDetailsLink:(0,t.jsx)(c,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),c=({slug:e,children:n})=>(0,t.jsx)("a",{className:"terms-of-service__link",href:(0,l.Z)(e),rel:"noopener noreferrer",target:"_blank",children:n}),u=b;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(e){}},"../components/tools/jp-redirect/index.ts":(k,f,s)=>{s.d(f,{Z:()=>_});function _(r,a={}){var h,j;const l={};let d;if(typeof window!="undefined"&&(d=(h=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:h.calypsoEnv),r.search("https://")===0){const g=new URL(r);r=`https://${g.host}${g.pathname}`,l.url=encodeURIComponent(r)}else l.source=encodeURIComponent(r);for(const g in a)l[g]=encodeURIComponent(a[g]);return!Object.keys(l).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(l.site=(j=jetpack_redirects.currentBlogID)!=null?j:jetpack_redirects.currentSiteRawUrl),d&&(l.calypso_env=d),"https://jetpack.com/redirect/?"+Object.keys(l).map(g=>g+"="+l[g]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/loading-placeholder/style.module.scss":(k,f,s)=>{s.d(f,{Z:()=>m});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(_),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),l=s.n(a),d=l()(r());d.push([k.id,"@keyframes K_japm57cgQUkLicpDjc{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.HPpt7x0pOvb8NIhtflCX{background-color:var(--jp-gray);animation:K_japm57cgQUkLicpDjc 1.5s infinite;height:100%;width:100%}",""]),d.locals={placeholder:"HPpt7x0pOvb8NIhtflCX",pulse:"K_japm57cgQUkLicpDjc"};const m=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-card/style.scss":(k,f,s)=>{s.d(f,{Z:()=>m});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(_),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),l=s.n(a),d=l()(r());d.push([k.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-components__pricing-card{width:-moz-fit-content;width:fit-content;max-width:384px;padding:24px 24px 32px;background:var(--jp-white);box-shadow:0px 10px 40px rgba(0,0,0,.08);border-radius:var(--jp-border-radius)}@media screen and (min-width: 600px){.jp-components__pricing-card{padding:32px 32px 44px}}.jp-components__pricing-card__icon img{height:32px;width:32px}.jp-components__pricing-card__title{margin:16px 0 24px;color:#101517;font-size:32px;line-height:38px}.jp-components__pricing-card__pricing{display:flex;flex-wrap:wrap}.jp-components__pricing-card__price-before,.jp-components__pricing-card__price-after{display:inline-block;margin-bottom:8px;padding:0 2px;font-size:54px;font-weight:700;line-height:40px}.jp-components__pricing-card__price-before{position:relative;margin-right:16px;color:var(--jp-gray-20)}.jp-components__pricing-card__price-strikethrough{position:absolute;width:100%;height:3px;left:0px;top:20px;background:var(--jp-pink);border-radius:1.5px}.jp-components__pricing-card__price-after{color:var(--jp-black)}.jp-components__pricing-card__currency{vertical-align:super;font-size:var(--font-title-small);font-weight:400;line-height:20px}.jp-components__pricing-card__price-details{align-self:flex-end;margin-bottom:8px;font-size:14px;font-weight:400;line-height:17px;color:var(--jp-gray-50);letter-spacing:-0.02em}.jp-components__pricing-card__price-decimal{font-size:var(--font-label);line-height:14px;vertical-align:top}.jp-components__pricing-card__button{width:100%;height:auto;font-size:18px;background:var(--jp-black);color:var(--jp-white) !important;border-radius:var(--jp-border-radius);padding:14px 24px;margin:24px 0px 32px;justify-content:center;align-items:center}.jp-components__pricing-card__info,.jp-components__pricing-card__tos{font-size:var(--font-label);line-height:20px;letter-spacing:-0.02em;color:var(--jp-gray-60)}.jp-components__pricing-card__tos{margin-top:24px}',""]);const m=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(k,f,s)=>{s.d(f,{Z:()=>m});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(_),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),l=s.n(a),d=l()(r());d.push([k.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const m=d}}]);})();