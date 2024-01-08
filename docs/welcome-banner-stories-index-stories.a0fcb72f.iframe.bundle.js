"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4383],{"../../packages/my-jetpack/_inc/components/welcome-banner/stories/index.stories.js":(y,i,e)=>{var I,W,L;e.r(i),e.d(i,{Default:()=>R,__namedExportsOrder:()=>K,default:()=>J});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),t=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),d=e("../../packages/my-jetpack/_inc/state/store.js"),o=e("../components/components/layout/container/index.tsx"),_=e("../components/components/layout/col/index.tsx"),g=e("../components/components/text/index.tsx"),p=e("../components/components/button/index.tsx"),m=e("../connection/components/use-connection/index.jsx"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),c=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),u=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),l=e("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js");function v(){const{dismissWelcomeBanner:P}=(0,x.Z)(d.t),{hasBeenDismissed:O}=(0,l.Z)(C=>{const{getWelcomeBannerHasBeen:U}=C(d.t);return{hasBeenDismissed:U()}});return{hasBeenDismissed:O,dismissWelcomeBanner:P}}var w=e("../../packages/my-jetpack/_inc/components/card/index.jsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(b),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/welcome-banner/style.module.scss"),f={};f.insert="head",f.singleton=!1;var S=k()(E.Z,f);const h=E.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const D=s.__,M=()=>{const{recordEvent:P}=(0,c.Z)(),{hasBeenDismissed:O,dismissWelcomeBanner:C}=v(),[U,Y]=(0,a.useState)(!O),{isRegistered:V,isUserConnected:z}=(0,m.Z)(),Z=(0,u.Z)("/connection"),N=!V||!z;(0,a.useEffect)(()=>{U&&P("jetpack_myjetpack_welcome_banner_view")},[U,P]);const Q=(0,a.useCallback)(()=>{P("jetpack_myjetpack_welcome_banner_dismiss_click"),Y(!1),C()},[P,C]),H=(0,a.useCallback)(()=>{P("jetpack_myjetpack_welcome_banner_finish_connection_click"),Z()},[P,Z]);return U?(0,j.jsx)(o.Z,{horizontalSpacing:3,className:h["banner-container"],children:(0,j.jsxs)(_.Z,{lg:12,className:h.banner,children:[(0,j.jsx)(w.U,{className:h["banner-card"],children:(0,j.jsxs)(o.Z,{horizontalSpacing:0,horizontalGap:0,className:h["banner-content"],children:[(0,j.jsxs)(_.Z,{sm:6,md:8,lg:6,className:h["banner-description"],children:[(0,j.jsx)(g.ZP,{variant:"headline-small",mb:3,children:D("Welcome to Jetpack!","jetpack-my-jetpack")}),(0,j.jsx)(g.ZP,{variant:"body",mb:2,children:D("Jetpack is a suite of security, performance, and growth tools made for WordPress sites by the WordPress experts.","jetpack-my-jetpack")}),(0,j.jsx)(g.ZP,{variant:"body",mb:N?4:0,children:D("It\u2019s the ultimate toolkit for best-in-class websites, with everything you need to grow your business. Choose a plan below to get started.","jetpack-my-jetpack")}),N&&(0,j.jsx)(p.Z,{variant:"primary",onClick:H,children:D("Finish setting up Jetpack","jetpack-my-jetpack")})]}),(0,j.jsx)(_.Z,{sm:6,md:8,lg:6,className:h["banner-image"]})]})}),(0,j.jsx)(p.Z,{className:h.dismiss,title:D("Dismiss","jetpack-my-jetpack"),variant:"secondary",size:"small",icon:n.Z,onClick:Q})]})}):null};M.displayName="WelcomeBanner";const T=M;M.__docgenInfo={description:`Component that renders the Welcome banner on My Jetpack.

@returns {object} The WelcomeBanner component.`,methods:[],displayName:"WelcomeBanner"};var A=`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { initStore } from '../../../state/store';
import WelcomeBanner from '../index.jsx';

initStore();

export default {
	title: 'Packages/My Jetpack/Welcome Banner',
	component: WelcomeBanner,
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <WelcomeBanner { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = {};
`,G={Default:{startLoc:{col:17,line:13},endLoc:{col:1,line:19},startBody:{col:17,line:13},endBody:{col:1,line:19}}};(0,d.N)();const J={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { initStore } from '../../../state/store';
import WelcomeBanner from '../index.jsx';

initStore();

export default {
	title: 'Packages/My Jetpack/Welcome Banner',
	component: WelcomeBanner,
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <WelcomeBanner { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = {};
`,locationsMap:{default:{startLoc:{col:17,line:13},endLoc:{col:1,line:19},startBody:{col:17,line:13},endBody:{col:1,line:19}}}}},title:"Packages/My Jetpack/Welcome Banner",component:T},B=P=>(0,j.jsx)(r.UT,{children:(0,j.jsx)(t.Z5,{children:(0,j.jsx)(t.AW,{path:"/",element:(0,j.jsx)(T,{...P})})})});B.displayName="Template";const R=B.bind({});R.parameters={},R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<WelcomeBanner {...args} />} />
        </Routes>
    </HashRouter>`,...(L=(W=R.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const K=["Default"]},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(y,i,e)=>{e.d(i,{Z:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:d,size:o=24,..._},g){return(0,a.cloneElement)(d,{width:o,height:o,..._,ref:g})}const t=(0,a.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js":(y,i,e)=>{e.d(i,{Z:()=>d});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,a.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(r.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(y,i,e)=>{e.d(i,{Z:()=>d});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,a.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(r.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../analytics/index.jsx":(y,i,e)=>{e.d(i,{Z:()=>m});var a=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),r=e.n(a);const t=r()("dops:analytics");let d,o;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function _(s,n){let c="";if(typeof s=="object"){for(const u in s)c+="&x_"+encodeURIComponent(u)+"="+encodeURIComponent(s[u]);t("Bumping stats %o",s)}else c="&x_"+encodeURIComponent(s)+"="+encodeURIComponent(n),t('Bumping stat "%s" in group "%s"',n,s);return c}function g(s,n){let c="";if(typeof s=="object"){for(const u in s)c+="&"+encodeURIComponent(u)+"="+encodeURIComponent(s[u]);t("Built stats %o",s)}else c="&"+encodeURIComponent(s)+"="+encodeURIComponent(n),t('Built stat "%s" in group "%s"',n,s);return c}const p={initialize:function(s,n,c){p.setUser(s,n),p.setSuperProps(c),p.identifyUser()},setGoogleAnalyticsEnabled:function(s,n=null){this.googleAnalyticsEnabled=s,this.googleAnalyticsKey=n},setMcAnalyticsEnabled:function(s){this.mcAnalyticsEnabled=s},setUser:function(s,n){o={ID:s,username:n}},setSuperProps:function(s){d=s},assignSuperProps:function(s){d=Object.assign(d||{},s)},mc:{bumpStat:function(s,n){const c=_(s,n);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+c+"&t="+Math.random())},bumpStatWithPageView:function(s,n){const c=g(s,n);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+c+"&t="+Math.random())}},pageView:{record:function(s,n){p.tracks.recordPageView(s),p.ga.recordPageView(s,n)}},purchase:{record:function(s,n,c,u,x,l,v){p.ga.recordPurchase(s,n,c,u,x,l,v)}},tracks:{recordEvent:function(s,n){if(n=n||{},s.indexOf("akismet_")!==0&&s.indexOf("jetpack_")!==0){t('- Event name must be prefixed by "akismet_" or "jetpack_"');return}d&&(t("- Super Props: %o",d),n=Object.assign(n,d)),t('Record event "%s" called with props %s',s,JSON.stringify(n)),window._tkq.push(["recordEvent",s,n])},recordJetpackClick:function(s){const n=typeof s=="object"?s:{target:s};p.tracks.recordEvent("jetpack_wpa_click",n)},recordPageView:function(s){p.tracks.recordEvent("akismet_page_view",{path:s})},setOptOut:function(s){t("Pushing setOptOut: %o",s),window._tkq.push(["setOptOut",s])}},ga:{initialized:!1,initialize:function(){let s={};p.ga.initialized||(o&&(s={userId:"u-"+o.ID}),window.ga("create",this.googleAnalyticsKey,"auto",s),p.ga.initialized=!0)},recordPageView:function(s,n){p.ga.initialize(),t("Recording Page View ~ [URL: "+s+"] [Title: "+n+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",s),window.ga("send",{hitType:"pageview",page:s,title:n}))},recordEvent:function(s,n,c,u){p.ga.initialize();let x="Recording Event ~ [Category: "+s+"] [Action: "+n+"]";typeof c!="undefined"&&(x+=" [Option Label: "+c+"]"),typeof u!="undefined"&&(x+=" [Option Value: "+u+"]"),t(x),this.googleAnalyticsEnabled&&window.ga("send","event",s,n,c,u)},recordPurchase:function(s,n,c,u,x,l,v){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:s,revenue:u,currency:v}),window.ga("ecommerce:addItem",{id:s,name:n,sku:c,price:x,quantity:l}),window.ga("ecommerce:send")}},identifyUser:function(){o&&window._tkq.push(["identifyUser",o.ID,o.username])},setProperties:function(s){window._tkq.push(["setProperties",s])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},m=p},"../../packages/my-jetpack/_inc/components/card/index.jsx":(y,i,e)=>{e.d(i,{U:()=>x,Z:()=>v});var a=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(r),d=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=e.n(d),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(g),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss"),s={};s.insert="head",s.singleton=!1;var n=p()(m.Z,s);const c=m.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=w=>{const{children:b,className:k}=w,E=t()(c.container,k);return(0,u.jsx)("div",{className:E,children:b})};x.displayName="CardWrapper";const l=w=>{const{title:b,headerRightContent:k,className:E,children:f}=w;return(0,u.jsxs)(x,{className:E,children:[(0,u.jsxs)("div",{className:c.title,children:[(0,u.jsx)("div",{className:c.name,children:(0,u.jsx)(a.ZP,{variant:"title-medium",children:b})}),k]}),f]})};l.displayName="Card",l.propTypes={children:o().node,title:o().string.isRequired,className:o().string,headerRightContent:o().node};const v=l;x.__docgenInfo={description:"",methods:[],displayName:"CardWrapper"},l.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{description:"",type:{name:"node"},required:!1},title:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},headerRightContent:{description:"",type:{name:"node"},required:!1}}}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(y,i,e)=>{e.d(i,{Z:()=>o});var a=e("../analytics/index.jsx"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const o=()=>{var S;const{isUserConnected:_,connectedPlugins:g,userConnectionData:p={}}=(0,t.Z)(),{login:m,ID:s}=((S=p.currentUser)==null?void 0:S.wpcomUser)||{};(0,r.useEffect)(()=>{_&&s&&m&&a.Z.initialize(s,m)},[s,_,m]);const n=Object.keys(g||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:c,ga:u,mc:x,pageView:l,purchase:v,setGoogleAnalyticsEnabled:w,setMcAnalyticsEnabled:b,setProperties:k,tracks:E}=a.Z,f=(0,r.useCallback)((h,j)=>{var D;E.recordEvent(h,{...j,version:(D=window==null?void 0:window.myJetpackInitialState)==null?void 0:D.myJetpackVersion,referring_plugins:n})},[]);return{clearedIdentity:c,ga:u,mc:x,pageView:l,purchase:v,recordEvent:f,setGoogleAnalyticsEnabled:w,setMcAnalyticsEnabled:b,setProperties:k,tracks:E}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(y,i,e)=>{e.d(i,{Z:()=>r});var a=e("../connection/components/use-connection/index.jsx");function r(){const{apiRoot:t,apiNonce:d}=myJetpackRest,{topJetpackMenuItemUrl:o}=myJetpackInitialState,_=(0,a.Z)({apiRoot:t,apiNonce:d}),g=_.isRegistered;return{apiNonce:d,apiRoot:t,..._,isSiteConnected:g,topJetpackMenuItemUrl:o}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(y,i,e)=>{e.d(i,{Z:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function t(d){const o=(0,r.s0)();return(0,a.useCallback)(()=>o(d),[o,d])}},"../components/components/layout/col/index.tsx":(y,i,e)=>{e.d(i,{Z:()=>x});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(d),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),g={};g.insert="head",g.singleton=!1;var p=o()(_.Z,g);const m=_.Z.locals||{},s=Number(m.smCols),n=Number(m.mdCols),c=Number(m.lgCols),x=l=>{const{children:v,tagName:w="div",className:b}=l,k=Math.min(s,typeof l.sm=="number"?l.sm:s),E=Math.min(s,typeof l.sm=="object"?l.sm.start:0),f=Math.min(s,typeof l.sm=="object"?l.sm.end:0),S=Math.min(n,typeof l.md=="number"?l.md:n),h=Math.min(n,typeof l.md=="object"?l.md.start:0),j=Math.min(n,typeof l.md=="object"?l.md.end:0),D=Math.min(c,typeof l.lg=="number"?l.lg:c),M=Math.min(c,typeof l.lg=="object"?l.lg.start:0),T=Math.min(c,typeof l.lg=="object"?l.lg.end:0),A=r()(b,{[m[`col-sm-${k}`]]:!(E&&f),[m[`col-sm-${E}-start`]]:E>0,[m[`col-sm-${f}-end`]]:f>0,[m[`col-md-${S}`]]:!(h&&j),[m[`col-md-${h}-start`]]:h>0,[m[`col-md-${j}-end`]]:j>0,[m[`col-lg-${D}`]]:!(M&&T),[m[`col-lg-${M}-start`]]:M>0,[m[`col-lg-${T}-end`]]:T>0});return(0,t.createElement)(w,{className:A},v)}},"../components/components/layout/container/index.tsx":(y,i,e)=>{e.d(i,{Z:()=>n});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(d),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),g={};g.insert="head",g.singleton=!1;var p=o()(_.Z,g);const m=_.Z.locals||{},n=({children:c,fluid:u=!1,tagName:x="div",className:l,horizontalGap:v=1,horizontalSpacing:w=1})=>{const b=(0,t.useMemo)(()=>{const E=`calc( var(--horizontal-spacing) * ${w} )`,f=`calc( var(--horizontal-spacing) * ${v} )`;return{paddingTop:E,paddingBottom:E,rowGap:f}},[v,w]),k=r()(l,m.container,{[m.fluid]:u});return(0,t.createElement)(x,{className:k,style:b},c)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(y,i,e)=>{e.d(i,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),o=d()(r());o.push([y.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const _=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(y,i,e)=>{e.d(i,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),o=d()(r());o.push([y.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const _=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss":(y,i,e)=>{e.d(i,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),o=d()(r());o.push([y.id,".pecv05IGfM82FIHp9Q4E{padding:calc(var(--spacing-base)*3);background:var(--jp-white);border:1px solid var(--jp-gray-5);border-radius:var(--jp-border-radius-rna);box-shadow:0 4px 12px 0px rgba(0,0,0,.06);height:100%;display:flex;flex-direction:column}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid rgba(0,0,0,0)}.pecv05IGfM82FIHp9Q4E.Hv659vLLaZ8SaSWyxtAZ{box-shadow:0 0 0 1.5px var(--jp-red-60)}.i1rUritEO7pQO4fsj9PF{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:var(--spacing-base)}.i1rUritEO7pQO4fsj9PF h3{font-weight:700}.YP7299HZXBCUg1n1NUqU{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}",""]),o.locals={container:"pecv05IGfM82FIHp9Q4E","is-link":"jgcGPDlYaLnB6QcRWSWR","has-error":"Hv659vLLaZ8SaSWyxtAZ",title:"i1rUritEO7pQO4fsj9PF",name:"YP7299HZXBCUg1n1NUqU"};const _=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/welcome-banner/style.module.scss":(y,i,e)=>{e.d(i,{Z:()=>s});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/getUrl.js"),_=e.n(o),g=new URL(e("../../packages/my-jetpack/_inc/components/welcome-banner/assets/images/site-cards.png"),e.b),p=d()(r()),m=_()(g);p.push([y.id,".AdJCPR_BY8MFTBNZyc8t{position:relative}.AdJCPR_BY8MFTBNZyc8t>.OkfUZt8I_AR4QJYri35J{padding:0;overflow:hidden}.AdJCPR_BY8MFTBNZyc8t>.i3jxckeDKltVM16ihguQ{position:absolute;top:16px;right:16px;padding:8px;background-color:var(--jp-white);box-shadow:0px 0px 5px 1px rgba(0,0,0,.1);border-radius:50%;transform:scale(0.75)}.AdJCPR_BY8MFTBNZyc8t>.i3jxckeDKltVM16ihguQ:hover,.AdJCPR_BY8MFTBNZyc8t>.i3jxckeDKltVM16ihguQ:focus{background-color:var(--jp-white)}.imZOy0ptrqxO0gIREMKC{margin-top:24px}.Z3wWxub1UlVjEtwPk4fq{padding:0}.p4a2lymyYxJcfYoDjGJL{padding:24px 16px}@media screen and (min-width: 600){.p4a2lymyYxJcfYoDjGJL{padding:32px 24px}}@media screen and (min-width: 960px){.p4a2lymyYxJcfYoDjGJL{padding:48px 12px 48px 48px}}.llNZwVA50CbKmLcfG_yD{background-image:url("+m+"),radial-gradient(circle at 90% 30%, rgba(6, 158, 8, 0.15) 0%, rgba(255, 255, 255, 0) 35%),radial-gradient(circle at 75% 65%, rgba(206, 217, 242, 0.5) 5%, rgba(255, 255, 255, 0) 15%),radial-gradient(circle at 90% 90%, rgba(245, 230, 179, 0.5) 0%, rgba(255, 255, 255, 0) 25%);background-repeat:no-repeat;background-size:cover}@media screen and (max-width: 960px){.llNZwVA50CbKmLcfG_yD{background-image:url("+m+"),radial-gradient(circle at 55% 30%, rgba(6, 158, 8, 0.15) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(circle at 25% 40%, rgba(206, 217, 242, 0.5) 5%, rgba(255, 255, 255, 0) 50%),radial-gradient(circle at 50% 85%, rgba(245, 230, 179, 0.3) 0%, rgba(255, 255, 255, 0) 35%);order:-1;min-height:160px}}",""]),p.locals={banner:"AdJCPR_BY8MFTBNZyc8t","banner-card":"OkfUZt8I_AR4QJYri35J",dismiss:"i3jxckeDKltVM16ihguQ","banner-container":"imZOy0ptrqxO0gIREMKC","banner-content":"Z3wWxub1UlVjEtwPk4fq","banner-description":"p4a2lymyYxJcfYoDjGJL","banner-image":"llNZwVA50CbKmLcfG_yD"};const s=p},"../../packages/my-jetpack/_inc/components/welcome-banner/assets/images/site-cards.png":(y,i,e)=>{y.exports=e.p+"static/media/site-cards.143fca7a.png"}}]);})();
