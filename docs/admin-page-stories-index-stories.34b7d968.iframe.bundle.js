"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../components/components/admin-page/stories/index.stories.tsx":(N,p,n)=>{var I,x,C,R,O,U;n.r(p),n.d(p,{CustomHeader:()=>c,__namedExportsOrder:()=>_,_default:()=>m,default:()=>h});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../components/components/jetpack-logo/index.tsx"),u=n("../components/components/text/index.tsx"),o=n("../components/components/admin-page/index.tsx"),r=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=n.n(r),g=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),a={};a.insert="head",a.singleton=!1;var k=f()(g.Z,a);const A=g.Z.locals||{};var y=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,S={_default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},CustomHeader:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}};const h={parameters:{storySource:{source:`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Admin Page',
  component: AdminPage,
  argTypes: {
    moduleName: {
      control: 'text',
      defaultValue: 'Jetpack'
    },
    showHeader: {
      control: 'boolean',
      defaultValue: true
    },
    showFooter: {
      control: 'boolean',
      defaultValue: true
    },
    showBackground: {
      control: 'boolean',
      defaultValue: true
    }
  }
} as ComponentMeta<typeof AdminPage>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof AdminPage> = args => <AdminPage {...args} />;

// Export Default story
export const _default = Template.bind({});
export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: <div className={styles['custom-header']}>
            <JetpackLogo height={40} />
            <Text className={styles['logo-title']} weight="regular">
                Next Product is coming up
            </Text>
        </div>
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
CustomHeader.parameters = {
  ...CustomHeader.parameters,
  docs: {
    ...CustomHeader.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage {...args} />",
      ...CustomHeader.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:o.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},T=j=>(0,y.jsx)(o.Z,{...j});T.displayName="Template";const m=T.bind({}),c=T.bind({});c.args={header:(0,y.jsxs)("div",{className:A["custom-header"],children:[(0,y.jsx)(d.Z,{height:40}),(0,y.jsx)(u.ZP,{className:A["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"args => <AdminPage {...args} />",...(C=(x=m.parameters)==null?void 0:x.docs)==null?void 0:C.source}}},c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:"args => <AdminPage {...args} />",...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const _=["_default","CustomHeader"]},"../components/components/layout/use-breakpoint-match/index.ts":(N,p,n)=>{n.d(p,{Z:()=>y});var l=n("../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=n.n(d),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),r={};r.insert="head",r.singleton=!1;var f=u()(o.Z,r);const g=o.Z.locals||{},a=["sm","md","lg"],k=(E,S,h)=>{const T=a.indexOf(E),m=T+1,c=S.includes("=");let _=[];return S.startsWith("<")&&(_=a.slice(0,c?m:T)),S.startsWith(">")&&(_=a.slice(c?T:m)),_!=null&&_.length?_.some(I=>h[I]):h[E]},y=(E,S)=>{const h=Array.isArray(E)?E:[E],T=Array.isArray(S)?S:[S],[m,c,_]=a,I=(0,l.Z)(g[m]),x=(0,l.Z)(g[c]),C=(0,l.Z)(g[_]),R={sm:I,md:x,lg:C};return h.map((O,U)=>{const j=T[U];return j?k(O,j,R):R[O]})}},"../components/tools/jp-redirect/index.ts":(N,p,n)=>{n.d(p,{Z:()=>l});function l(d){var g;let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o={};let r;if(typeof window!="undefined"&&(r=(g=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:g.calypsoEnv),d.search("https://")===0){const a=new URL(d);d=`https://${a.host}${a.pathname}`,o.url=encodeURIComponent(d)}else o.source=encodeURIComponent(d);for(const a in u)o[a]=encodeURIComponent(u[a]);return!Object.keys(o).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(o.site=jetpack_redirects.currentSiteRawUrl),r&&(o.calypso_env=r),"https://jetpack.com/redirect/?"+Object.keys(o).map(a=>a+"="+o[a]).join("&")}},"../connection/state/store.jsx":(N,p,n)=>{n.d(p,{t:()=>v});var l=n("../api/index.jsx");const d="SET_CONNECTION_STATUS",u="SET_CONNECTION_STATUS_IS_FETCHING",o="FETCH_CONNECTION_STATUS",r="SET_SITE_IS_REGISTERING",f="SET_USER_IS_CONNECTING",g="SET_REGISTRATION_ERROR",a="CLEAR_REGISTRATION_ERROR",k="REGISTER_SITE",A="SET_AUTHORIZATION_URL",y="CONNECT_USER",E="DISCONNECT_USER_SUCCESS",S="FETCH_AUTHORIZATION_URL",h="SET_CONNECTED_PLUGINS",T="REFRESH_CONNECTED_PLUGINS",m="SET_CONNECTION_ERRORS",c="SET_IS_OFFLINE_MODE",_=e=>({type:d,connectionStatus:e}),I=e=>({type:u,isFetching:e}),x=()=>({type:o}),C=e=>({type:r,isRegistering:e}),R=e=>({type:f,isConnecting:e}),O=()=>({type:E}),U=e=>({type:g,registrationError:e}),j=()=>({type:a}),M=e=>({type:A,authorizationUrl:e}),z=e=>({type:S,redirectUri:e}),H=e=>({type:h,connectedPlugins:e}),K=e=>({type:m,connectionErrors:e}),J=e=>({type:c,isOfflineMode:e});function W(){let{from:e,redirectFunc:t,redirectUri:s}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield R(!0),yield{type:y,from:e,redirectFunc:t,redirectUri:s}}()}function V(e){let{registrationNonce:t,redirectUri:s}=e;return function*(){yield j(),yield C(!0);try{const i=yield{type:k,registrationNonce:t,redirectUri:s};return yield _({isRegistered:!0}),yield M(i.authorizeUrl),yield C(!1),Promise.resolve(i)}catch(i){return yield U(i),yield C(!1),Promise.reject(i)}}()}const L={setConnectionStatus:_,setConnectionStatusIsFetching:I,fetchConnectionStatus:x,fetchAuthorizationUrl:z,setSiteIsRegistering:C,setUserIsConnecting:R,setRegistrationError:U,clearRegistrationError:j,setAuthorizationUrl:M,registerSite:V,connectUser:W,disconnectUserSuccess:O,setConnectedPlugins:H,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(s=>l.ZP.fetchConnectedPlugins().then(i=>{t(H(i)),s(i)}))},setConnectionErrors:K,setIsOfflineMode:J};var Y=n("../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const v="jetpack-connection",X=e=>{let{registrationNonce:t,redirectUri:s}=e;return l.ZP.registerSite(t,s)},Q=(0,Y.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:s,redirectFunc:i,redirectUri:w}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((b,Se)=>{t(v).getAuthorizationUrl(w).then(D=>{const Te=i||(he=>window.location.assign(he)),G=new URL(D);s&&G.searchParams.set("from",encodeURIComponent(s));const Z=G.toString();Te(Z),b(Z)}).catch(D=>{Se(D)})})}}),$={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return l.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:X,CONNECT_USER:Q};var B=n("../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{...e,...t.connectionStatus};case E:return{...e,isUserConnected:!1}}return e},ee=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.connectedPlugins}return e},te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.isFetching}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return t.isRegistering}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.isConnecting}return e},oe=(e,t)=>{switch(t.type){case a:return!1;case g:return t.registrationError;default:return e}},re=(e,t)=>{switch(t.type){case A:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.connectionErrors}return e},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return t.isConnecting}return e},ce=(0,B.UY)({connectionStatus:q,connectionStatusIsFetching:te,siteIsRegistering:ne,userIsConnecting:se,registrationError:oe,authorizationUrl:re,userConnectionData:ae,connectedPlugins:ee,connectionErrors:de,isOfflineMode:le});var ie=n("../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ue=n("../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const me={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var s=arguments.length,i=new Array(s>1?s-1:0),w=1;w<s;w++)i[w-1]=arguments[w];const b=(0,ie.Y)(v).hasFinishedResolution("getAuthorizationUrl",i);return t&&!b&&(0,ue.W)(v).finishResolution("getAuthorizationUrl",i),t},*fulfill(e){const t=yield L.fetchAuthorizationUrl(e);yield L.setAuthorizationUrl(t.authorizeUrl)}}}},_e={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,s;return(s=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:s.wpcomUser},getBlogId:e=>{var t,s;return(s=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:s.blogId}}};var pe=n("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/defineProperty.js"),ge=n.n(pe),fe=n("../../../node_modules/.pnpm/@wordpress+data@9.8.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");class P{static mayBeInit(t,s){P.store===null&&(P.store=(0,fe.Z)(t,s),(0,B.z2)(P.store))}}ge()(P,"store",null);const Ee=P,F=window.JP_CONNECTION_INITIAL_STATE;F||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ee.mayBeInit(v,{__experimentalUseThunks:!0,reducer:ce,actions:L,selectors:_e,resolvers:me,controls:$,initialState:F||{}})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(N,p,n)=>{n.d(p,{Z:()=>f});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=n.n(l),u=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=n.n(u),r=o()(d());r.push([N.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),r.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const f=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(N,p,n)=>{n.d(p,{Z:()=>f});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=n.n(l),u=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=n.n(u),r=o()(d());r.push([N.id,"",""]),r.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const f=r}}]);})();
