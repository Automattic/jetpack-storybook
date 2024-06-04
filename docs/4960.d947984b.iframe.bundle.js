"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4960],{"../components/components/action-button/index.jsx":(g,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(r),n=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(n),A=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../components/components/button/index.tsx"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(d),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-button/style.module.scss"),E={};E.insert="head",E.singleton=!1;var i=j()(y.Z,E);const b=y.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=o.__,h=f=>{const{label:a,onClick:v,isLoading:x=!1,loadingText:w,isDisabled:D,displayError:O=!1,errorMessage:M=u("An error occurred. Please try again.","jetpack"),customClass:k}=f,I=w||(0,_.jsx)(c.ZP,{});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Z,{className:s()(b.button,"jp-action-button--button",k),label:a,onClick:v,variant:"primary",disabled:x||D,children:x?I:a}),O&&(0,_.jsx)("p",{className:s()(b.error,"jp-action-button__error"),children:M})]})};h.propTypes={label:t().string.isRequired,onClick:t().func,isLoading:t().bool,isDisabled:t().bool,displayError:t().bool,errorMessage:t().oneOfType([t().string,t().element])};const m=h;h.__docgenInfo={description:`The Jetpack Action button.

This component extends the regular \`Button\` component and adds a \`isLoading\` prop that will disable and display a spinner, giving the user the feedback that some action is happening. It also provides a generic error message.

It is useful to async actions when the user has to wait the result of a request or process.

@param {object} props - The properties.
@returns {React.Component} The \`ActionButton\` component.`,methods:[],displayName:"ActionButton",props:{label:{description:"The button label.",type:{name:"string"},required:!0},onClick:{description:"The callback to be called on click.",type:{name:"func"},required:!1},isLoading:{description:"Will disable the button and display a spinner if set to true.",type:{name:"bool"},required:!1},isDisabled:{description:"Will disable the button with no spinner.",type:{name:"bool"},required:!1},displayError:{description:"Displays an error message",type:{name:"bool"},required:!1},errorMessage:{description:"The error message string",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1}}}},"../components/components/button/index.tsx":(g,p,e)=>{e.d(p,{Z:()=>f});var c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),A=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(A),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(j),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),i={};i.insert="head",i.singleton=!1;var b=y()(E.Z,i);const _=E.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=s.__,m=(0,d.forwardRef)((a,v)=>{var P,C;const{children:x,variant:w="primary",size:D="normal",weight:O="bold",icon:M,iconSize:k,disabled:I,isDestructive:z,isLoading:T,isExternalLink:L,className:N,text:B,fullWidth:R,...S}=a,Z=l()(_.button,N,{[_.normal]:D==="normal",[_.small]:D==="small",[_.icon]:!!M,[_.loading]:T,[_.regular]:O==="regular",[_["full-width"]]:R,[_["is-icon-button"]]:!!M&&!x});S.ref=v;const V=D==="normal"?20:16,G=L&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.Z,{size:V,icon:t.Z,className:_["external-icon"]}),(0,u.jsx)(c.Z,{as:"span",children:h("(opens in a new tab)","jetpack")})]}),U=L?"_blank":void 0,K=(x==null?void 0:x[0])&&x[0]!==null&&((C=(P=x==null?void 0:x[0])==null?void 0:P.props)==null?void 0:C.className)!=="components-tooltip";return(0,u.jsxs)(o.ZP,{target:U,variant:w,className:l()(Z,{"has-text":!!M&&K}),icon:L?void 0:M,iconSize:k,disabled:I,"aria-disabled":I,isDestructive:z,text:B,...S,children:[T&&(0,u.jsx)(r.ZP,{}),(0,u.jsx)("span",{children:x}),G]})});m.displayName="Button";const f=m;try{m.displayName="Button",m.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(a){}},"../components/components/jetpack-logo/index.tsx":(g,p,e)=>{e.d(p,{Z:()=>l});var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=c.__,l=({logoColor:d="#069e08",showText:j=!0,className:y,height:E=32,...i})=>{const b=j?"0 0 118 32":"0 0 32 32";return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:b,className:r()("jetpack-logo",y),"aria-labelledby":"jetpack-logo-title",height:E,...i,role:"img",children:[(0,n.jsx)("title",{id:"jetpack-logo-title",children:t("Jetpack Logo","jetpack")}),(0,n.jsx)("path",{fill:d,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,n.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,n.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,n.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,n.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,n.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,n.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})}},"../components/components/terms-of-service/index.tsx":(g,p,e)=>{e.d(p,{Z:()=>f});var c=e("../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(r),n=e("../components/tools/jp-redirect/index.ts"),t=e("../components/components/text/index.tsx"),A=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(A),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),j={};j.insert="head",j.singleton=!1;var y=l()(d.Z,j);const E=d.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=o.__,_=({className:a,multipleButtons:v,agreeButtonLabel:x})=>(0,i.jsx)(t.ZP,{className:s()(a,"terms-of-service"),children:v?(0,i.jsx)(u,{multipleButtonsLabels:v}):(0,i.jsx)(h,{agreeButtonLabel:x})}),u=({multipleButtonsLabels:a})=>Array.isArray(a)&&a.length>1?(0,c.Z)((0,o.gB)(b("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),a[0],a[1]),{strong:(0,i.jsx)("strong",{}),tosLink:(0,i.jsx)(m,{slug:"wpcom-tos"}),shareDetailsLink:(0,i.jsx)(m,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,c.Z)(b("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),{tosLink:(0,i.jsx)(m,{slug:"wpcom-tos"}),shareDetailsLink:(0,i.jsx)(m,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),h=({agreeButtonLabel:a})=>(0,c.Z)((0,o.gB)(b("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),a),{strong:(0,i.jsx)("strong",{}),tosLink:(0,i.jsx)(m,{slug:"wpcom-tos"}),shareDetailsLink:(0,i.jsx)(m,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),m=({slug:a,children:v})=>(0,i.jsx)("a",{className:"terms-of-service__link",href:(0,n.Z)(a),rel:"noopener noreferrer",target:"_blank",children:v}),f=_;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(a){}},"../components/tools/jp-redirect/index.ts":(g,p,e)=>{e.d(p,{Z:()=>c});function c(o,r={}){var A,l;const s={};let n;if(typeof window!="undefined"&&(n=(A=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:A.calypsoEnv),o.search("https://")===0){const d=new URL(o);o=`https://${d.host}${d.pathname}`,s.url=encodeURIComponent(o)}else s.source=encodeURIComponent(o);for(const d in r)s[d]=encodeURIComponent(r[d]);return!Object.keys(s).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(s.site=(l=jetpack_redirects.currentBlogID)!=null?l:jetpack_redirects.currentSiteRawUrl),n&&(s.calypso_env=n),"https://jetpack.com/redirect/?"+Object.keys(s).map(d=>d+"="+s[d]).join("&")}},"../connection/components/connect-screen/layout/index.tsx":(g,p,e)=>{e.d(p,{Z:()=>_});var c=e("../components/components/jetpack-logo/index.tsx"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=({images:u,assetBaseUrl:h=""})=>{if(!(u!=null&&u.length))return null;const m=u.map((f,a)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)("img",{src:h+f,alt:""})},a));return(0,n.jsx)("div",{className:"jp-connection__connect-screen__image-slider",children:m})};var l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(l),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/layout/style.scss"),y={};y.insert="head",y.singleton=!1;var E=d()(j.Z,y);const i=j.Z.locals||{},_=({title:u,children:h,className:m,assetBaseUrl:f,images:a,logo:v,rna:x=!1})=>{const w=a==null?void 0:a.length;return(0,n.jsxs)("div",{className:r()("jp-connection__connect-screen-layout",w?"jp-connection__connect-screen-layout__two-columns":"",m?" "+m:""),children:[x&&(0,n.jsxs)("div",{className:"jp-connection__connect-screen-layout__color-blobs",children:[(0,n.jsx)("div",{className:"jp-connection__connect-screen-layout__color-blobs__green"}),(0,n.jsx)("div",{className:"jp-connection__connect-screen-layout__color-blobs__yellow"}),(0,n.jsx)("div",{className:"jp-connection__connect-screen-layout__color-blobs__blue"})]}),(0,n.jsxs)("div",{className:"jp-connection__connect-screen-layout__left",children:[v||(0,n.jsx)(c.Z,{}),(0,n.jsx)("h2",{children:u}),h]}),w?(0,n.jsx)("div",{className:"jp-connection__connect-screen-layout__right",children:(0,n.jsx)(A,{images:a,assetBaseUrl:f})}):null]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-button/style.module.scss":(g,p,e)=>{e.d(p,{Z:()=>j});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/getUrl.js"),t=e.n(n),A=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMkMyMCA3LjU4MTcyIDE2LjQxODMgNCAxMiA0QzcuNTgxNzIgNCA0IDcuNTgxNzIgNCAxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMFoiIHN0cm9rZT0iI0Q2MzYzOSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTEzIDdIMTFWMTNIMTNWN1oiIGZpbGw9IiNENjM2MzkiLz4KPHBhdGggZD0iTTEzIDE1SDExVjE3SDEzVjE1WiIgZmlsbD0iI0Q2MzYzOSIvPgo8L3N2Zz4K"),e.b),l=s()(o()),d=t()(A);l.push([g.id,".BgbyqGEBANLv2zB4Z6W5{color:var(--jp-red);line-height:25px;padding-left:25px;background:url("+d+") no-repeat 0 0}.QkQdeTpjkXVoqoiBz85d{--spacing-base: 8px;min-width:264px}",""]),l.locals={error:"BgbyqGEBANLv2zB4Z6W5",button:"QkQdeTpjkXVoqoiBz85d"};const j=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(g,p,e)=>{e.d(p,{Z:()=>t});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),n=s()(o());n.push([g.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),n.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const t=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(g,p,e)=>{e.d(p,{Z:()=>t});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),n=s()(o());n.push([g.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const t=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../connection/components/connect-screen/layout/style.scss":(g,p,e)=>{e.d(p,{Z:()=>j});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/getUrl.js"),t=e.n(n),A=new URL(e("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEVHcEwFnwUInggGnggGnggHnAcAnwUFnQcAnwcGnwkFnQgGnQgFnwcGnQYFnQcFnAcGnQkDnwdhiL0pAAAAEnRSTlMAMF//f2Aw7yBQ3+9gcIBgcED+HDbkAAAAZklEQVR4Ae3LNwICARDDQC0+cv7/Y8mwV9odSfWIcf/+VegnGkIvDaGXKvTTn/Gz+Uf5xTL0K1XotS7fs5H6GHvvaO8d7c3j7rdgHne/A/PYt/cO+R42oYdN6OEQetiFHo4A//6dAXqtBEkmtWutAAAAAElFTkSuQmCC"),e.b),l=s()(o()),d=t()(A);l.push([g.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jp-connection__connect-screen-layout{background:var(--jp-white);box-shadow:0 0 40px rgba(0,0,0,.08);border-radius:4px}.jp-connection__connect-screen-layout__loading{display:none}.jp-connection__connect-screen-layout__left,.jp-connection__connect-screen-layout__right{box-sizing:border-box}.jp-connection__connect-screen-layout__left{padding:calc(var(--spacing-base)*3)}@media(min-width: 600px){.jp-connection__connect-screen-layout__left{padding:64px 96px}}.jp-connection__connect-screen-layout__left .jetpack-logo{margin-bottom:24px}.jp-connection__connect-screen-layout__left h2{font-style:normal;font-weight:bold;font-size:36px;line-height:40px;color:var(--jp-black);margin-top:32px;margin-bottom:0}.jp-connection__connect-screen-layout__left h3{font-style:normal;font-weight:500;font-size:24px;line-height:32px;color:var(--jp-black);margin-top:32px;margin-bottom:0}.jp-connection__connect-screen-layout__left p,.jp-connection__connect-screen-layout__left li{font-style:normal;font-weight:normal;font-size:16px;line-height:24px}.jp-connection__connect-screen-layout__left p{color:#101517;margin:16px 0}.jp-connection__connect-screen-layout__left a{font-size:var(--font-body);color:var(--jp-black);text-decoration:underline;height:auto;font:inherit;padding:0}.jp-connection__connect-screen-layout__left a:hover{color:var(--jp-black);text-decoration-thickness:var(--jp-underline-thickness)}.jp-connection__connect-screen-layout__left a:focus{color:var(--jp-black);box-shadow:none !important}.jp-connection__connect-screen-layout__left ul{list-style-type:none;padding:0}.jp-connection__connect-screen-layout__left ul li{background:url('+d+") no-repeat;background-size:24px;padding-left:30px;margin-bottom:9px;color:var(--jp-black)}.jp-connection__connect-screen-layout__right{padding:64px 0}.jp-connection__connect-screen-layout__right img{max-width:100%}.jp-connection__connect-screen-layout__two-columns{display:flex;flex-wrap:wrap}.jp-connection__connect-screen-layout__two-columns .jp-connection__connect-screen-layout__left{flex-grow:1;flex-basis:100%}@media(min-width: 1080px){.jp-connection__connect-screen-layout__two-columns .jp-connection__connect-screen-layout__left{flex-basis:52%}}.jp-connection__connect-screen-layout__two-columns .jp-connection__connect-screen-layout__right{flex-grow:1;flex-basis:47%;background:#f9f9f6;display:none}@media(min-width: 1080px){.jp-connection__connect-screen-layout__two-columns .jp-connection__connect-screen-layout__right{display:block}}.rna{overflow:hidden}.rna .jp-connection__connect-screen-layout__left{position:relative;z-index:2}.rna .jp-connection__connect-screen-layout__left h2{margin-top:0;font-weight:700}.rna .jp-connection__connect-screen-layout__left h3{margin-top:24px}@media(min-width: 600px){.rna .jp-connection__connect-screen-layout__left{padding:4rem 6rem 4rem 4rem}}@media(min-width: 1080px){.rna .jp-connection__connect-screen-required-plan__pricing-card{position:absolute;top:calc(var(--spacing-base)*9.25);right:calc(var(--spacing-base)*-45)}}.rna .jp-connection__connect-screen-required-plan__pricing-card .jp-components__pricing-card{border-radius:var(--jp-border-radius-rna);width:425px;max-width:100%}.rna .jp-connection__connect-screen-required-plan__pricing-card .jp-components__pricing-card__title{margin-top:.625rem}@media(min-width: 960px){.rna .jp-connection__connect-screen-required-plan__pricing-card .jp-components__pricing-card{padding:3rem}}.rna .jp-connection__connect-screen-required-plan__pricing-card .components-button{margin-bottom:0}.rna .jp-backup-dashboard-promotion ul.jp-product-promote li{margin-bottom:.75rem}.rna .jp-connection__connect-screen-layout__color-blobs{display:none;position:absolute;top:0;right:0;width:363px;height:677px;z-index:1;clip-path:polygon(100% 0, 100% 100%, 0 0, 0 0)}.rna .jp-connection__connect-screen-layout__color-blobs__blue,.rna .jp-connection__connect-screen-layout__color-blobs__yellow,.rna .jp-connection__connect-screen-layout__color-blobs__green{position:absolute;filter:blur(50px);border-radius:50%}.rna .jp-connection__connect-screen-layout__color-blobs__blue{width:400px;height:400px;right:-100px;top:-275px;z-index:3;background-color:var(--jp-blue-5)}.rna .jp-connection__connect-screen-layout__color-blobs__yellow{width:250px;height:250px;right:-25px;top:10px;z-index:2;background-color:var(--jp-yellow-5)}.rna .jp-connection__connect-screen-layout__color-blobs__green{width:300px;height:300px;right:0;top:175px;z-index:1;background-color:var(--jp-green-5)}@media(min-width: 1080px){.rna .jp-connection__connect-screen-layout__color-blobs{display:initial}}",""]);const j=l},"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEVHcEwFnwUInggGnggGnggHnAcAnwUFnQcAnwcGnwkFnQgGnQgFnwcGnQYFnQcFnAcGnQkDnwdhiL0pAAAAEnRSTlMAMF//f2Aw7yBQ3+9gcIBgcED+HDbkAAAAZklEQVR4Ae3LNwICARDDQC0+cv7/Y8mwV9odSfWIcf/+VegnGkIvDaGXKvTTn/Gz+Uf5xTL0K1XotS7fs5H6GHvvaO8d7c3j7rdgHne/A/PYt/cO+R42oYdN6OEQetiFHo4A//6dAXqtBEkmtWutAAAAAElFTkSuQmCC":g=>{g.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEVHcEwFnwUInggGnggGnggHnAcAnwUFnQcAnwcGnwkFnQgGnQgFnwcGnQYFnQcFnAcGnQkDnwdhiL0pAAAAEnRSTlMAMF//f2Aw7yBQ3+9gcIBgcED+HDbkAAAAZklEQVR4Ae3LNwICARDDQC0+cv7/Y8mwV9odSfWIcf/+VegnGkIvDaGXKvTTn/Gz+Uf5xTL0K1XotS7fs5H6GHvvaO8d7c3j7rdgHne/A/PYt/cO+R42oYdN6OEQetiFHo4A//6dAXqtBEkmtWutAAAAAElFTkSuQmCC"},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMkMyMCA3LjU4MTcyIDE2LjQxODMgNCAxMiA0QzcuNTgxNzIgNCA0IDcuNTgxNzIgNCAxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMFoiIHN0cm9rZT0iI0Q2MzYzOSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTEzIDdIMTFWMTNIMTNWN1oiIGZpbGw9IiNENjM2MzkiLz4KPHBhdGggZD0iTTEzIDE1SDExVjE3SDEzVjE1WiIgZmlsbD0iI0Q2MzYzOSIvPgo8L3N2Zz4K":g=>{g.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMkMyMCA3LjU4MTcyIDE2LjQxODMgNCAxMiA0QzcuNTgxNzIgNCA0IDcuNTgxNzIgNCAxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMFoiIHN0cm9rZT0iI0Q2MzYzOSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTEzIDdIMTFWMTNIMTNWN1oiIGZpbGw9IiNENjM2MzkiLz4KPHBhdGggZD0iTTEzIDE1SDExVjE3SDEzVjE1WiIgZmlsbD0iI0Q2MzYzOSIvPgo8L3N2Zz4K"}}]);})();
