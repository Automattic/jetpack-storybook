"use strict";(()=>{var Ce=Object.defineProperty;var ye=(m,o,n)=>o in m?Ce(m,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[o]=n;var K=(m,o,n)=>(ye(m,typeof o!="symbol"?o+"":o,n),n);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../components/components/admin-page/stories/index.stories.tsx":(m,o,n)=>{var R,x,y,N,O,U;n.r(o),n.d(o,{CustomHeader:()=>i,__namedExportsOrder:()=>g,_default:()=>p,default:()=>C});var l=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=n("../components/components/jetpack-logo/index.tsx"),_=n("../components/components/text/index.tsx"),r=n("../components/components/admin-page/index.tsx"),a=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=n.n(a),E=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),d={};d.insert="head",d.singleton=!1;var k=f()(E.Z,d);const A=E.Z.locals||{};var I=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,T={_default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},CustomHeader:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}};const C={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:r.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},h=j=>(0,I.jsx)(r.Z,{...j});h.displayName="Template";const p=h.bind({}),i=h.bind({});i.args={header:(0,I.jsxs)("div",{className:A["custom-header"],children:[(0,I.jsx)(c.Z,{height:40}),(0,I.jsx)(_.ZP,{className:A["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"args => <AdminPage {...args} />",...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}},i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"args => <AdminPage {...args} />",...(U=(O=i.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const g=["_default","CustomHeader"]},"../components/components/layout/use-breakpoint-match/index.ts":(m,o,n)=>{n.d(o,{Z:()=>I});var l=n("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=n.n(c),r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var f=_()(r.Z,a);const E=r.Z.locals||{},d=["sm","md","lg"],k=(S,T,C)=>{const h=d.indexOf(S),p=h+1,i=T.includes("=");let g=[];return T.startsWith("<")&&(g=d.slice(0,i?p:h)),T.startsWith(">")&&(g=d.slice(i?h:p)),g!=null&&g.length?g.some(R=>C[R]):C[S]},I=(S,T)=>{const C=Array.isArray(S)?S:[S],h=Array.isArray(T)?T:[T],[p,i,g]=d,R=(0,l.Z)(E[p]),x=(0,l.Z)(E[i]),y=(0,l.Z)(E[g]),N={sm:R,md:x,lg:y};return C.map((O,U)=>{const j=h[U];return j?k(O,j,N):N[O]})}},"../components/tools/jp-redirect/index.ts":(m,o,n)=>{n.d(o,{Z:()=>l});function l(c){var E;let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r={};let a;if(typeof window!="undefined"&&(a=(E=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:E.calypsoEnv),c.search("https://")===0){const d=new URL(c);c=`https://${d.host}${d.pathname}`,r.url=encodeURIComponent(c)}else r.source=encodeURIComponent(c);for(const d in _)r[d]=encodeURIComponent(_[d]);return!Object.keys(r).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(r.site=jetpack_redirects.currentSiteRawUrl),a&&(r.calypso_env=a),"https://jetpack.com/redirect/?"+Object.keys(r).map(d=>d+"="+r[d]).join("&")}},"../connection/state/store.jsx":(m,o,n)=>{n.d(o,{t:()=>w});var l=n("../api/index.jsx");const c="SET_CONNECTION_STATUS",_="SET_CONNECTION_STATUS_IS_FETCHING",r="FETCH_CONNECTION_STATUS",a="SET_SITE_IS_REGISTERING",f="SET_USER_IS_CONNECTING",E="SET_REGISTRATION_ERROR",d="CLEAR_REGISTRATION_ERROR",k="REGISTER_SITE",A="SET_AUTHORIZATION_URL",I="CONNECT_USER",S="DISCONNECT_USER_SUCCESS",T="FETCH_AUTHORIZATION_URL",C="SET_CONNECTED_PLUGINS",h="REFRESH_CONNECTED_PLUGINS",p="SET_CONNECTION_ERRORS",i="SET_IS_OFFLINE_MODE",g=e=>({type:c,connectionStatus:e}),R=e=>({type:_,isFetching:e}),x=()=>({type:r}),y=e=>({type:a,isRegistering:e}),N=e=>({type:f,isConnecting:e}),O=()=>({type:S}),U=e=>({type:E,registrationError:e}),j=()=>({type:d}),H=e=>({type:A,authorizationUrl:e}),J=e=>({type:T,redirectUri:e}),B=e=>({type:C,connectedPlugins:e}),W=e=>({type:p,connectionErrors:e}),V=e=>({type:i,isOfflineMode:e});function Y(){let{from:e,redirectFunc:t,redirectUri:s}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield N(!0),yield{type:I,from:e,redirectFunc:t,redirectUri:s}}()}function X(e){let{registrationNonce:t,redirectUri:s}=e;return function*(){yield j(),yield y(!0);try{const u=yield{type:k,registrationNonce:t,redirectUri:s};return yield g({isRegistered:!0}),yield H(u.authorizeUrl),yield y(!1),Promise.resolve(u)}catch(u){return yield U(u),yield y(!1),Promise.reject(u)}}()}const b={setConnectionStatus:g,setConnectionStatusIsFetching:R,fetchConnectionStatus:x,fetchAuthorizationUrl:J,setSiteIsRegistering:y,setUserIsConnecting:N,setRegistrationError:U,clearRegistrationError:j,setAuthorizationUrl:H,registerSite:X,connectUser:Y,disconnectUserSuccess:O,setConnectedPlugins:B,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise(s=>l.ZP.fetchConnectedPlugins().then(u=>{t(B(u)),s(u)}))},setConnectionErrors:W,setIsOfflineMode:V};var Q=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const w="jetpack-connection",$=e=>{let{registrationNonce:t,redirectUri:s}=e;return l.ZP.registerSite(t,s)},q=(0,Q.R)(e=>{let{resolveSelect:t}=e;return function(){let{from:s,redirectFunc:u,redirectUri:P}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((D,Se)=>{t(w).getAuthorizationUrl(P).then(M=>{const Te=u||(he=>window.location.assign(he)),Z=new URL(M);s&&Z.searchParams.set("from",encodeURIComponent(s));const z=Z.toString();Te(z),D(z)}).catch(M=>{Se(M)})})}}),ee={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return l.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:$,CONNECT_USER:q};var F=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const te=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return{...e,...t.connectionStatus};case S:return{...e,isUserConnected:!1}}return e},ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.connectedPlugins}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.isFetching}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return t.isRegistering}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.isConnecting}return e},ae=(e,t)=>{switch(t.type){case d:return!1;case E:return t.registrationError;default:return e}},de=(e,t)=>{switch(t.type){case A:return t.authorizationUrl;default:return e}},ce=(e,t)=>{switch(t.type){default:return e}},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.connectionErrors}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.isConnecting}return e},ue=(0,F.UY)({connectionStatus:te,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:re,registrationError:ae,authorizationUrl:de,userConnectionData:ce,connectedPlugins:ne,connectionErrors:le,isOfflineMode:ie});var me=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const pe={...{getAuthorizationUrl:{isFulfilled:function(e){const t=!!e.authorizationUrl;for(var s=arguments.length,u=new Array(s>1?s-1:0),P=1;P<s;P++)u[P-1]=arguments[P];const D=(0,me.Y)(w).hasFinishedResolution("getAuthorizationUrl",u);return t&&!D&&(0,_e.W)(w).finishResolution("getAuthorizationUrl",u),t},*fulfill(e){const t=yield b.fetchAuthorizationUrl(e);yield b.setAuthorizationUrl(t.authorizeUrl)}}}},ge={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,s;return(s=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:s.wpcomUser},getBlogId:e=>{var t,s;return(s=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:s.blogId}}};var Ee=n("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const v=class{static mayBeInit(t,s){v.store===null&&(v.store=(0,Ee.Z)(t,s),(0,F.z2)(v.store))}};let L=v;K(L,"store",null);const fe=L,G=window.JP_CONNECTION_INITIAL_STATE;G||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),fe.mayBeInit(w,{__experimentalUseThunks:!0,reducer:ue,actions:b,selectors:ge,resolvers:pe,controls:ee,initialState:G||{}})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(m,o,n)=>{n.d(o,{Z:()=>f});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=n.n(l),_=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=n.n(_),a=r()(c());a.push([m.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),a.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const f=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(m,o,n)=>{n.d(o,{Z:()=>f});var l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=n.n(l),_=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=n.n(_),a=r()(c());a.push([m.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const f=a}}]);})();
