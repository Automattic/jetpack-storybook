(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3466],{"../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(y,t,e)=>{"use strict";e.d(t,{W:()=>r});var a=e("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function r(i){return a.Z.dispatch(i)}},"../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(y,t,e)=>{"use strict";e.d(t,{Y:()=>r});var a=e("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function r(i){return a.Z.select(i)}},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(y,t,e)=>{"use strict";e.d(t,{Z:()=>i});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:s,size:l=24,...g},x){return(0,a.cloneElement)(s,{width:l,height:l,...g,ref:x})}const i=(0,a.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(y,t,e)=>{"use strict";e.d(t,{Z:()=>s});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,a.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(r.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(y,t,e)=>{"use strict";e.d(t,{Z:()=>s});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.41.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,a.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(r.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../plugins/protect/src/js/components/scan-footer/stories/index.stories.jsx":(y,t,e)=>{var R,k,F;"use strict";e.r(t),e.d(t,{Default:()=>O,__namedExportsOrder:()=>A,default:()=>P});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../components/tools/jp-redirect/index.ts"),i=e("../components/components/text/index.tsx"),s=e("../components/components/button/index.tsx"),l=e("../components/components/contextual-upgrade-trigger/index.tsx"),g=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),x=e("../../../node_modules/.pnpm/@wordpress+i18n@4.43.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../plugins/protect/src/js/constants.js"),o=e("../../plugins/protect/src/js/hooks/use-analytics-tracks/index.js"),u=e("../../plugins/protect/src/js/hooks/use-protect-data/index.js"),j=e("../../plugins/protect/src/js/components/seventy-five-layout/index.jsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(n),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/scan-footer/styles.module.scss"),p={};p.insert="head",p.singleton=!1;var C=d()(_.Z,p);const h=_.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=x.__,v=()=>{const{adminUrl:M,siteSuffix:U}=window.jetpackProtectInitialState||{},{run:I}=(0,g.Z)({productSlug:m.o,redirectUrl:M}),{recordEventHandler:L}=(0,o.Z)(),N=L("jetpack_protect_footer_get_scan_link_click",I),{hasRequiredPlan:Z}=(0,u.Z)();if(Z){const B=(0,r.Z)("jetpack-scan-dash",{site:U});return(0,c.jsxs)("div",{className:h["product-section"],children:[(0,c.jsx)(i.Dx,{children:f("Get access to our Cloud","jetpack-protect")}),(0,c.jsx)(i.ZP,{mb:3,children:f("With your Protect upgrade, you have free access to scan your site on our Cloud, so you can be aware and fix your threats even if your site goes down. ","jetpack-protect")}),(0,c.jsx)(s.Z,{variant:"secondary",weight:"regular",href:B,children:f("Go to Cloud","jetpack-protect")})]})}return(0,c.jsxs)("div",{className:h["product-section"],children:[(0,c.jsx)(i.Dx,{children:f("Advanced scan results","jetpack-protect")}),(0,c.jsx)(i.ZP,{mb:3,children:f("Upgrade Jetpack Protect to get advanced scan tools, including one-click fixes for most threats and malware scanning.","jetpack-protect")}),(0,c.jsx)(l.Z,{description:f("Looking for advanced scan results and one-click fixes?","jetpack-protect"),cta:f("Upgrade Jetpack Protect now","jetpack-protect"),onClick:N})]})};v.displayName="ProductPromotion";const E=()=>{const{hasRequiredPlan:M}=(0,u.Z)();if(M){const I=(0,r.Z)("protect-footer-learn-more-scan");return(0,c.jsxs)("div",{className:h["info-section"],children:[(0,c.jsx)(i.Dx,{children:f("Line-by-line scanning","jetpack-protect")}),(0,c.jsxs)(i.ZP,{mb:2,children:[f("We actively review line-by-line of your site files to identify threats and vulnerabilities. Jetpack monitors millions of websites to keep your site secure all the time. ","jetpack-protect"),(0,c.jsx)(s.Z,{variant:"link",target:"_blank",weight:"regular",href:I,children:f("Learn more","jetpack-protect")})]})]})}const U=(0,r.Z)("jetpack-protect-footer-learn-more");return(0,c.jsxs)("div",{className:h["info-section"],children:[(0,c.jsx)(i.Dx,{children:f("Over 22,000 listed vulnerabilities","jetpack-protect")}),(0,c.jsx)(i.ZP,{mb:3,children:f("Every day we check your plugin, theme, and WordPress versions against our 22,000 listed vulnerabilities powered by WPScan, an Automattic brand.","jetpack-protect")}),(0,c.jsx)(s.Z,{variant:"link",isExternalLink:!0,href:U,weight:"regular",children:f("Learn more","jetpack-protect")})]})};E.displayName="FooterInfo";const w=()=>(0,c.jsx)(j.Z,{main:(0,c.jsx)(v,{}),secondary:(0,c.jsx)(E,{}),preserveSecondaryOnMobile:!0});w.displayName="ScanFooter",w.__docgenInfo={description:"",methods:[],displayName:"ScanFooter"};const S=w;var b=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ScanFooter from '../index.jsx';

export default {
	title: 'Plugins/Protect/Scan Footer',
	component: ScanFooter,
};

const FooterTemplate = args => <ScanFooter { ...args } />;
export const Default = FooterTemplate.bind( {} );
`,T={Default:{startLoc:{col:23,line:8},endLoc:{col:55,line:8},startBody:{col:23,line:8},endBody:{col:55,line:8}}};const P={parameters:{storySource:{source:`
import React from 'react';
import ScanFooter from '../index.jsx';
export default {
  title: 'Plugins/Protect/Scan Footer',
  component: ScanFooter
};
const FooterTemplate = args => <ScanFooter {...args} />;
export const Default = FooterTemplate.bind({});
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ScanFooter {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:55,line:8},startBody:{col:23,line:8},endBody:{col:55,line:8}}}}},title:"Plugins/Protect/Scan Footer",component:S},D=M=>(0,c.jsx)(S,{...M});D.displayName="FooterTemplate";const O=D.bind({});O.parameters={...O.parameters,docs:{...(R=O.parameters)==null?void 0:R.docs,source:{originalSource:"args => <ScanFooter {...args} />",...(F=(k=O.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const A=["Default"]},"../components/components/contextual-upgrade-trigger/index.tsx":(y,t,e)=>{"use strict";e.d(t,{Z:()=>p});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.34.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(i),l=e("../components/components/icon-tooltip/index.tsx"),g=e("../components/components/text/index.tsx"),x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(x),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss"),u={};u.insert="head",u.singleton=!1;var j=m()(o.Z,u);const n=o.Z.locals||{};var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=C=>{let{description:h,cta:c,onClick:f,href:v,openInNewTab:E=!1,className:w,tooltipText:S=""}=C;const b=v!==void 0?"a":"button",T=b==="a"?{href:v,...E&&{target:"_blank"}}:{onClick:f};return(0,d.jsxs)("div",{className:s()(n.cut,w),children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(g.ZP,{className:n.description,children:h}),S&&(0,d.jsx)(l.Z,{className:n.iconContainer,iconSize:16,offset:4,children:(0,d.jsx)(g.ZP,{variant:"body-small",children:S})})]}),(0,d.jsx)("div",{children:(0,d.jsx)(b,{...T,children:(0,d.jsx)(g.ZP,{className:n.cta,children:c})})})]}),(0,d.jsx)(a.Z,{icon:r.Z,className:n.icon,size:30})]})};_.displayName="ContextualUpgradeTrigger";const p=_},"../components/components/layout/col/index.tsx":(y,t,e)=>{"use strict";e.d(t,{Z:()=>_});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(s),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),x={};x.insert="head",x.singleton=!1;var m=l()(g.Z,x);const o=g.Z.locals||{},u=Number(o.smCols),j=Number(o.mdCols),n=Number(o.lgCols),_=p=>{const{children:C,tagName:h="div",className:c}=p,f=Math.min(u,typeof p.sm=="number"?p.sm:u),v=Math.min(u,typeof p.sm=="object"?p.sm.start:0),E=Math.min(u,typeof p.sm=="object"?p.sm.end:0),w=Math.min(j,typeof p.md=="number"?p.md:j),S=Math.min(j,typeof p.md=="object"?p.md.start:0),b=Math.min(j,typeof p.md=="object"?p.md.end:0),T=Math.min(n,typeof p.lg=="number"?p.lg:n),P=Math.min(n,typeof p.lg=="object"?p.lg.start:0),D=Math.min(n,typeof p.lg=="object"?p.lg.end:0),O=r()(c,{[o[`col-sm-${f}`]]:!(v&&E),[o[`col-sm-${v}-start`]]:v>0,[o[`col-sm-${E}-end`]]:E>0,[o[`col-md-${w}`]]:!(S&&b),[o[`col-md-${S}-start`]]:S>0,[o[`col-md-${b}-end`]]:b>0,[o[`col-lg-${T}`]]:!(P&&D),[o[`col-lg-${P}-start`]]:P>0,[o[`col-lg-${D}-end`]]:D>0});return(0,i.createElement)(h,{className:O},C)}},"../components/components/layout/container/index.tsx":(y,t,e)=>{"use strict";e.d(t,{Z:()=>j});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(s),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),x={};x.insert="head",x.singleton=!1;var m=l()(g.Z,x);const o=g.Z.locals||{},j=n=>{let{children:d,fluid:_=!1,tagName:p="div",className:C,horizontalGap:h=1,horizontalSpacing:c=1}=n;const f=(0,i.useMemo)(()=>{const E=`calc( var(--horizontal-spacing) * ${c} )`,w=`calc( var(--horizontal-spacing) * ${h} )`;return{paddingTop:E,paddingBottom:E,rowGap:w}},[h,c]),v=r()(C,o.container,{[o.fluid]:_});return(0,i.createElement)(p,{className:v,style:f},d)}},"../components/components/layout/use-breakpoint-match/index.ts":(y,t,e)=>{"use strict";e.d(t,{Z:()=>j});var a=e("../../../node_modules/.pnpm/@wordpress+compose@6.20.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),l={};l.insert="head",l.singleton=!1;var g=i()(s.Z,l);const x=s.Z.locals||{},m=["sm","md","lg"],o=(n,d,_)=>{const p=m.indexOf(n),C=p+1,h=d.includes("=");let c=[];return d.startsWith("<")&&(c=m.slice(0,h?C:p)),d.startsWith(">")&&(c=m.slice(h?p:C)),c!=null&&c.length?c.some(f=>_[f]):_[n]},j=(n,d)=>{const _=Array.isArray(n)?n:[n],p=Array.isArray(d)?d:[d],[C,h,c]=m,f=(0,a.Z)(x[C]),v=(0,a.Z)(x[h]),E=(0,a.Z)(x[c]),w={sm:f,md:v,lg:E};return _.map((S,b)=>{const T=p[b];return T?o(S,T,w):w[S]})}},"../components/tools/jp-redirect/index.ts":(y,t,e)=>{"use strict";e.d(t,{Z:()=>a});function a(r){var x;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s={};let l;if(typeof window!="undefined"&&(l=(x=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:x.calypsoEnv),r.search("https://")===0){const m=new URL(r);r=`https://${m.host}${m.pathname}`,s.url=encodeURIComponent(r)}else s.source=encodeURIComponent(r);for(const m in i)s[m]=encodeURIComponent(i[m]);return!Object.keys(s).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(s.site=jetpack_redirects.currentSiteRawUrl),l&&(s.calypso_env=l),"https://jetpack.com/redirect/?"+Object.keys(s).map(m=>m+"="+s[m]).join("&")}},"../connection/hooks/use-product-checkout-workflow/index.jsx":(y,t,e)=>{"use strict";e.d(t,{Z:()=>_});var a=e("../api/index.jsx");function r(p,C,h,c){const f=new URL("https://wordpress.com/checkout/"),v=new URL(`${f}${C}/${p}`);return v.searchParams.set("redirect_to",h),c||v.searchParams.set("unlinked","1"),v.searchParams.set("site",C),v.toString()}var i=e("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),s=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),l=e.n(s),g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("../connection/components/use-connection/index.jsx"),m=e("../connection/state/store.jsx");const o=l()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:u,apiRoot:j,apiNonce:n,siteSuffix:d}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};function _(){let{productSlug:p,redirectUrl:C,siteSuffix:h=d,siteProductAvailabilityHandler:c=null,from:f}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};o("productSlug is %s",p),o("redirectUrl is %s",C),o("siteSuffix is %s",h),o("from is %s",f);const[v,E]=(0,g.useState)(!1),{registerSite:w}=(0,i.Z)(m.t),{isUserConnected:S,isRegistered:b,handleConnectUser:T}=(0,x.Z)({redirectUri:C,from:f}),P=r(p,h,C,S);o("checkoutProductUrl is %s",P),o("isUserConnected is %s",S);const D=()=>Promise.resolve(c&&c()).then(A=>{if(A)return o("handleAfterRegistration: Site has a product associated"),T();o("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",P),window.location.href=P}),O=A=>{if(A&&A.preventDefault(),E(!0),b)return D();w({registrationNonce:u,redirectUri:C}).then(D)};return(0,g.useEffect)(()=>{a.ZP.setApiRoot(j),a.ZP.setApiNonce(n)},[]),{run:O,isRegistered:b,hasCheckoutStarted:v}}},"../../plugins/protect/src/js/components/seventy-five-layout/index.jsx":(y,t,e)=>{"use strict";e.d(t,{Z:()=>x});var a=e("../components/components/layout/use-breakpoint-match/index.ts"),r=e("../components/components/layout/container/index.tsx"),i=e("../components/components/layout/col/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=m=>{let{main:o,secondary:u,preserveSecondaryOnMobile:j=!1}=m;const[n,d]=(0,a.Z)(["sm","lg"]),_=!j&&n;return(0,l.jsxs)(r.Z,{horizontalSpacing:0,horizontalGap:0,fluid:!1,children:[!_&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{sm:12,md:4,lg:6,children:o}),d&&(0,l.jsx)(i.Z,{lg:1}),(0,l.jsx)(i.Z,{sm:12,md:4,lg:5,children:u})]}),_&&(0,l.jsx)(i.Z,{children:o})]})};g.displayName="SeventyFiveLayout",g.__docgenInfo={description:`SeventyFive layout meta component
The component name references to
the sections disposition of the layout.
FiftyFifty, 75, thus 7|5 means the cols numbers
for main and secondary sections respectively,
in large lg viewport size.

@param {object} props                            - Component props
@param {React.ReactNode} props.main              - Main section component
@param {React.ReactNode} props.secondary         - Secondary section component
@param {boolean} props.preserveSecondaryOnMobile - Whether to show secondary section on mobile
@returns {React.ReactNode} 					    - React meta-component`,methods:[],displayName:"SeventyFiveLayout",props:{preserveSecondaryOnMobile:{defaultValue:{value:"false",computed:!1},required:!1}}};const x=g},"../../plugins/protect/src/js/constants.js":(y,t,e)=>{"use strict";e.d(t,{K:()=>a,o:()=>r});const a="https://wordpress.org/support/plugin/jetpack-protect/",r="jetpack_scan"},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/contextual-upgrade-trigger/style.module.scss":(y,t,e)=>{"use strict";e.d(t,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),l=s()(r());l.push([y.id,'.Oq5VJazodqT8DRArRoxp{border:2px solid var(--jp-green-40);border-radius:var(--jp-border-radius);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);display:flex;justify-content:space-between;align-items:center;gap:calc(var(--spacing-base)*3);text-align:left;background:none;width:100%;position:relative;color:var(--jp-gray-80)}.Oq5VJazodqT8DRArRoxp button,.Oq5VJazodqT8DRArRoxp a{all:unset;color:var(--jp-gray-80);cursor:pointer}.Oq5VJazodqT8DRArRoxp button::after,.Oq5VJazodqT8DRArRoxp a::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.Oq5VJazodqT8DRArRoxp:focus-within{border-color:var(--jp-black)}.Oq5VJazodqT8DRArRoxp:focus-within .Bywo2wyizrCdXXNpwdXg,.Oq5VJazodqT8DRArRoxp:hover .Bywo2wyizrCdXXNpwdXg{transform:translateX(calc(var(--spacing-base) * 2))}.Oq5VJazodqT8DRArRoxp:focus-within .zuIQ07dt5U76xbhLQiTo,.Oq5VJazodqT8DRArRoxp:hover .zuIQ07dt5U76xbhLQiTo{text-decoration:underline;text-decoration-thickness:2px}.Oq5VJazodqT8DRArRoxp .zuIQ07dt5U76xbhLQiTo{font-weight:bold}.zuIQ07dt5U76xbhLQiTo{font-weight:bold}.Bywo2wyizrCdXXNpwdXg{fill:var(--jp-green-40);transition:transform .1s ease-out}.y5NDwkTOd8txiISmZyVA{margin:0 0 0 calc(var(--spacing-base)/3);display:inline;vertical-align:middle}.y5NDwkTOd8txiISmZyVA svg{z-index:10;position:relative}.p0S9wGbKtLdTVFUqPNKY{display:inline}',""]),l.locals={cut:"Oq5VJazodqT8DRArRoxp",icon:"Bywo2wyizrCdXXNpwdXg",cta:"zuIQ07dt5U76xbhLQiTo",iconContainer:"y5NDwkTOd8txiISmZyVA",description:"p0S9wGbKtLdTVFUqPNKY"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(y,t,e)=>{"use strict";e.d(t,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),l=s()(r());l.push([y.id,"",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(y,t,e)=>{"use strict";e.d(t,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),l=s()(r());l.push([y.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(y,t,e)=>{"use strict";e.d(t,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),l=s()(r());l.push([y.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/scan-footer/styles.module.scss":(y,t,e)=>{"use strict";e.d(t,{Z:()=>g});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(i),l=s()(r());l.push([y.id,".hJJcqHRgVoarmfZ0aa0w,.yI8LjQNIMSl0m2XIFb4l{margin-top:calc(var(--spacing-base)*7);margin-bottom:calc(var(--spacing-base)*7)}",""]),l.locals={"product-section":"hJJcqHRgVoarmfZ0aa0w","info-section":"yI8LjQNIMSl0m2XIFb4l"};const g=l},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(y,t,e)=>{var a=e("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");t.formatArgs=i,t.save=s,t.load=l,t.useColors=r,t.storage=g(),t.destroy=(()=>{let m=!1;return()=>{m||(m=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function r(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function i(m){if(m[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+m[0]+(this.useColors?"%c ":" ")+"+"+y.exports.humanize(this.diff),!this.useColors)return;const o="color: "+this.color;m.splice(1,0,o,"color: inherit");let u=0,j=0;m[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(u++,n==="%c"&&(j=u))}),m.splice(j,0,o)}t.log=console.debug||console.log||(()=>{});function s(m){try{m?t.storage.setItem("debug",m):t.storage.removeItem("debug")}catch(o){}}function l(){let m;try{m=t.storage.getItem("debug")}catch(o){}return!m&&typeof a!="undefined"&&"env"in a&&(m=a.env.DEBUG),m}function g(){try{return localStorage}catch(m){}}y.exports=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(t);const{formatters:x}=y.exports;x.j=function(m){try{return JSON.stringify(m)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(y,t,e)=>{function a(r){s.debug=s,s.default=s,s.coerce=u,s.disable=x,s.enable=g,s.enabled=m,s.humanize=e("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),s.destroy=j,Object.keys(r).forEach(n=>{s[n]=r[n]}),s.names=[],s.skips=[],s.formatters={};function i(n){let d=0;for(let _=0;_<n.length;_++)d=(d<<5)-d+n.charCodeAt(_),d|=0;return s.colors[Math.abs(d)%s.colors.length]}s.selectColor=i;function s(n){let d,_=null,p,C;function h(...c){if(!h.enabled)return;const f=h,v=Number(new Date),E=v-(d||v);f.diff=E,f.prev=d,f.curr=v,d=v,c[0]=s.coerce(c[0]),typeof c[0]!="string"&&c.unshift("%O");let w=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(b,T)=>{if(b==="%%")return"%";w++;const P=s.formatters[T];if(typeof P=="function"){const D=c[w];b=P.call(f,D),c.splice(w,1),w--}return b}),s.formatArgs.call(f,c),(f.log||s.log).apply(f,c)}return h.namespace=n,h.useColors=s.useColors(),h.color=s.selectColor(n),h.extend=l,h.destroy=s.destroy,Object.defineProperty(h,"enabled",{enumerable:!0,configurable:!1,get:()=>_!==null?_:(p!==s.namespaces&&(p=s.namespaces,C=s.enabled(n)),C),set:c=>{_=c}}),typeof s.init=="function"&&s.init(h),h}function l(n,d){const _=s(this.namespace+(typeof d=="undefined"?":":d)+n);return _.log=this.log,_}function g(n){s.save(n),s.namespaces=n,s.names=[],s.skips=[];let d;const _=(typeof n=="string"?n:"").split(/[\s,]+/),p=_.length;for(d=0;d<p;d++)_[d]&&(n=_[d].replace(/\*/g,".*?"),n[0]==="-"?s.skips.push(new RegExp("^"+n.slice(1)+"$")):s.names.push(new RegExp("^"+n+"$")))}function x(){const n=[...s.names.map(o),...s.skips.map(o).map(d=>"-"+d)].join(",");return s.enable(""),n}function m(n){if(n[n.length-1]==="*")return!0;let d,_;for(d=0,_=s.skips.length;d<_;d++)if(s.skips[d].test(n))return!1;for(d=0,_=s.names.length;d<_;d++)if(s.names[d].test(n))return!0;return!1}function o(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function u(n){return n instanceof Error?n.stack||n.message:n}function j(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return s.enable(s.load()),s}y.exports=a},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":y=>{var t=1e3,e=t*60,a=e*60,r=a*24,i=r*7,s=r*365.25;y.exports=function(o,u){u=u||{};var j=typeof o;if(j==="string"&&o.length>0)return l(o);if(j==="number"&&isFinite(o))return u.long?x(o):g(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function l(o){if(o=String(o),!(o.length>100)){var u=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(u){var j=parseFloat(u[1]),n=(u[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return j*s;case"weeks":case"week":case"w":return j*i;case"days":case"day":case"d":return j*r;case"hours":case"hour":case"hrs":case"hr":case"h":return j*a;case"minutes":case"minute":case"mins":case"min":case"m":return j*e;case"seconds":case"second":case"secs":case"sec":case"s":return j*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return j;default:return}}}}function g(o){var u=Math.abs(o);return u>=r?Math.round(o/r)+"d":u>=a?Math.round(o/a)+"h":u>=e?Math.round(o/e)+"m":u>=t?Math.round(o/t)+"s":o+"ms"}function x(o){var u=Math.abs(o);return u>=r?m(o,u,r,"day"):u>=a?m(o,u,a,"hour"):u>=e?m(o,u,e,"minute"):u>=t?m(o,u,t,"second"):o+" ms"}function m(o,u,j,n){var d=u>=j*1.5;return Math.round(o/j)+" "+n+(d?"s":"")}}}]);})();
