"use strict";(()=>{var ye=Object.defineProperty;var fe=(_,n,s)=>n in _?ye(_,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):_[n]=s;var Z=(_,n,s)=>(fe(_,typeof n!="symbol"?n+"":n,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../components/components/admin-page/stories/index.stories.tsx":(_,n,s)=>{var R,x,I,O,N,U;s.r(n),s.d(n,{CustomHeader:()=>i,__namedExportsOrder:()=>E,_default:()=>p,default:()=>f});var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=s("../components/components/jetpack-logo/index.tsx"),u=s("../components/components/text/index.tsx"),r=s("../components/components/admin-page/index.tsx"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=s.n(a),g=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),l={};l.insert="head",l.singleton=!1;var m=S()(g.Z,l);const A=g.Z.locals||{};var h=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
} as ComponentMeta< typeof AdminPage >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] } weight="regular">
				Next Product is coming up
			</Text>
		</div>
	),
};
`,C={_default:{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}},CustomHeader:{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}}};const f={parameters:{storySource:{source:`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
} as ComponentMeta< typeof AdminPage >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] } weight="regular">
				Next Product is coming up
			</Text>
		</div>
	),
};
`,locationsMap:{default:{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}},"custom-header":{startLoc:{col:53,line:20},endLoc:{col:86,line:20},startBody:{col:53,line:20},endBody:{col:86,line:20}}}}},title:"JS Packages/Components/Admin Page",component:r.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},y=j=>(0,h.jsx)(r.Z,{...j});y.displayName="Template";const p=y.bind({}),i=y.bind({});i.args={header:(0,h.jsxs)("div",{className:A["custom-header"],children:[(0,h.jsx)(d.Z,{height:40}),(0,h.jsx)(u.ZP,{className:A["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"args => <AdminPage {...args} />",...(I=(x=p.parameters)==null?void 0:x.docs)==null?void 0:I.source}}},i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"args => <AdminPage {...args} />",...(U=(N=i.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const E=["_default","CustomHeader"]},"../connection/state/store.jsx":(_,n,s)=>{s.d(n,{t:()=>P});var c=s("../api/index.jsx");const d="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",r="FETCH_CONNECTION_STATUS",a="SET_SITE_IS_REGISTERING",S="SET_USER_IS_CONNECTING",g="SET_REGISTRATION_ERROR",l="CLEAR_REGISTRATION_ERROR",m="REGISTER_SITE",A="SET_AUTHORIZATION_URL",h="CONNECT_USER",T="DISCONNECT_USER_SUCCESS",C="FETCH_AUTHORIZATION_URL",f="SET_CONNECTED_PLUGINS",y="REFRESH_CONNECTED_PLUGINS",p="SET_CONNECTION_ERRORS",i="SET_IS_OFFLINE_MODE",E=e=>({type:d,connectionStatus:e}),R=e=>({type:u,isFetching:e}),x=()=>({type:r}),I=e=>({type:a,isRegistering:e}),O=e=>({type:S,isConnecting:e}),N=()=>({type:T}),U=e=>({type:g,registrationError:e}),j=()=>({type:l}),D=e=>({type:A,authorizationUrl:e}),z=e=>({type:C,redirectUri:e}),M=e=>({type:f,connectedPlugins:e}),K=e=>({type:p,connectionErrors:e}),J=e=>({type:i,isOfflineMode:e});function*W({from:e,redirectFunc:t,redirectUri:o}={}){yield O(!0),yield{type:h,from:e,redirectFunc:t,redirectUri:o}}function*V({registrationNonce:e,redirectUri:t}){yield j(),yield I(!0);try{const o=yield{type:m,registrationNonce:e,redirectUri:t};return yield E({isRegistered:!0}),yield D(o.authorizeUrl),yield I(!1),Promise.resolve(o)}catch(o){return yield U(o),yield I(!1),Promise.reject(o)}}const v={setConnectionStatus:E,setConnectionStatusIsFetching:R,fetchConnectionStatus:x,fetchAuthorizationUrl:z,setSiteIsRegistering:I,setUserIsConnecting:O,setRegistrationError:U,clearRegistrationError:j,setAuthorizationUrl:D,registerSite:V,connectUser:W,disconnectUserSuccess:N,setConnectedPlugins:M,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>c.ZP.fetchConnectedPlugins().then(o=>{e(M(o)),t(o)})),setConnectionErrors:K,setIsOfflineMode:J};var Y=s("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const P="jetpack-connection",X=({registrationNonce:e,redirectUri:t})=>c.ZP.registerSite(e,t),Q=(0,Y.R)(({resolveSelect:e})=>({from:t,redirectFunc:o,redirectUri:L}={})=>new Promise((ge,Se)=>{e(P).getAuthorizationUrl(L).then(b=>{const Te=o||(Ce=>window.location.assign(Ce)),H=new URL(b);t&&H.searchParams.set("from",encodeURIComponent(t));const G=H.toString();Te(G),ge(G)}).catch(b=>{Se(b)})})),$={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>c.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:X,CONNECT_USER:Q};var B=s("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=(e={},t)=>{switch(t.type){case d:return{...e,...t.connectionStatus};case T:return{...e,isUserConnected:!1}}return e},ee=(e={},t)=>{switch(t.type){case f:return t.connectedPlugins}return e},te=(e=!1,t)=>{switch(t.type){case u:return t.isFetching}return e},se=(e=!1,t)=>{switch(t.type){case a:return t.isRegistering}return e},oe=(e=!1,t)=>{switch(t.type){case S:return t.isConnecting}return e},ne=(e,t)=>{switch(t.type){case l:return!1;case g:return t.registrationError;default:return e}},re=(e,t)=>{switch(t.type){case A:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=(e={},t)=>{switch(t.type){case p:return t.connectionErrors}return e},ce=(e=!1,t)=>{switch(t.type){case i:return t.isConnecting}return e},le=(0,B.UY)({connectionStatus:q,connectionStatusIsFetching:te,siteIsRegistering:se,userIsConnecting:oe,registrationError:ne,authorizationUrl:re,userConnectionData:ae,connectedPlugins:ee,connectionErrors:de,isOfflineMode:ce});var ie=s("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=s("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const ue={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const o=!!e.authorizationUrl,L=(0,ie.Y)(P).hasFinishedResolution("getAuthorizationUrl",t);return o&&!L&&(0,_e.W)(P).finishResolution("getAuthorizationUrl",t),o},*fulfill(e){const t=yield v.fetchAuthorizationUrl(e);yield v.setAuthorizationUrl(t.authorizeUrl)}}}},me={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,o;return(o=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:o.wpcomUser},getBlogId:e=>{var t,o;return(o=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:o.blogId}}};var pe=s("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const w=class{static mayBeInit(t,o){w.store===null&&(w.store=(0,pe.Z)(t,o),(0,B.z2)(w.store))}};let k=w;Z(k,"store",null);const Ee=k,F=window.JP_CONNECTION_INITIAL_STATE;F||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(P,{__experimentalUseThunks:!0,reducer:le,actions:v,selectors:me,resolvers:ue,controls:$,initialState:F||{}})},"../components/components/layout/use-breakpoint-match/index.ts":(_,n,s)=>{s.d(n,{Z:()=>h});var c=s("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=s.n(d),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var S=u()(r.Z,a);const g=r.Z.locals||{},l=["sm","md","lg"],m=(T,C,f)=>{const y=l.indexOf(T),p=y+1,i=C.includes("=");let E=[];return C.startsWith("<")&&(E=l.slice(0,i?p:y)),C.startsWith(">")&&(E=l.slice(i?y:p)),E!=null&&E.length?E.some(R=>f[R]):f[T]},h=(T,C)=>{const f=Array.isArray(T)?T:[T],y=Array.isArray(C)?C:[C],[p,i,E]=l,R=(0,c.Z)(g[p]),x=(0,c.Z)(g[i]),I=(0,c.Z)(g[E]),O={sm:R,md:x,lg:I};return f.map((N,U)=>{const j=y[U];return j?m(N,j,O):O[N]})}},"../components/tools/jp-redirect/index.ts":(_,n,s)=>{s.d(n,{Z:()=>c});function c(d,u={}){var g,l;const r={};let a;if(typeof window!="undefined"&&(a=(g=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:g.calypsoEnv),d.search("https://")===0){const m=new URL(d);d=`https://${m.host}${m.pathname}`,r.url=encodeURIComponent(d)}else r.source=encodeURIComponent(d);for(const m in u)r[m]=encodeURIComponent(u[m]);return!Object.keys(r).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(r.site=(l=jetpack_redirects.currentBlogID)!=null?l:jetpack_redirects.currentSiteRawUrl),a&&(r.calypso_env=a),"https://jetpack.com/redirect/?"+Object.keys(r).map(m=>m+"="+r[m]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(_,n,s)=>{s.d(n,{Z:()=>S});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(c),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(u),a=r()(d());a.push([_.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),a.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const S=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(_,n,s)=>{s.d(n,{Z:()=>S});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(c),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(u),a=r()(d());a.push([_.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const S=a}}]);})();