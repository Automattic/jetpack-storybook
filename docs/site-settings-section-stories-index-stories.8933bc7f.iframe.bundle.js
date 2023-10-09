"use strict";(()=>{var Re=Object.defineProperty;var Pe=(m,s,t)=>s in m?Re(m,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[s]=t;var X=(m,s,t)=>(Pe(m,typeof s!="symbol"?s+"":s,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3556],{"../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(m,s,t)=>{t.d(s,{Z:()=>a});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const a=l=>{const{dispatch:r}=(0,o.Z)();return l===void 0?r:r(l)}},"../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js":(m,s,t)=>{t.d(s,{R9:()=>_,z2:()=>E});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");const g=o.Z.resolveSelect,a=o.Z.suspendSelect,l=o.Z.subscribe,r=o.Z.registerGenericStore,_=o.Z.registerStore,u=o.Z.use,E=o.Z.register},"../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(m,s,t)=>{t.d(s,{Y:()=>g});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function g(a){return o.Z.select(a)}},"../../packages/videopress/src/client/admin/components/site-settings-section/stories/index.stories.tsx":(m,s,t)=>{var y,j,P;t.r(s),t.d(s,{__namedExportsOrder:()=>R,_default:()=>S,default:()=>D});var o=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../components/components/layout/container/index.tsx"),l=t("../components/components/layout/col/index.tsx"),r=t("../components/components/text/index.tsx"),_=t("../../../node_modules/.pnpm/@wordpress+i18n@4.43.0/node_modules/@wordpress/i18n/build-module/index.js"),u=t("../../packages/videopress/src/client/admin/hooks/use-permission/index.ts"),E=t("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),I=t("../../packages/videopress/src/client/admin/components/video-filter/index.tsx"),T=t("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts"),c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=_.__,U=C=>{let{videoPressVideosPrivateForSite:O,siteIsPrivate:A,siteType:f,onPrivacyChange:v}=C;const{canPerformAction:d}=(0,u.g)(),b=A&&f===T.mP,z=!d||b,K=b?h("You cannot change this setting because your site is private. You can only choose the video privacy default on public sites.","jetpack-videopress-pkg"):null;return(0,c.jsxs)(a.Z,{horizontalSpacing:0,horizontalGap:0,children:[(0,c.jsx)(l.Z,{children:(0,c.jsx)(r.ZP,{variant:"headline-small",mb:1,children:h("Settings","jetpack-videopress-pkg")})}),(0,c.jsx)(l.Z,{sm:12,md:12,lg:12,children:(0,c.jsx)(I.JC,{for:"settings-site-privacy",label:h("Video Privacy: Restrict views to members of this site","jetpack-videopress-pkg"),onChange:v,checked:O,disabled:z,disabledReason:K})})]})};U.displayName="SiteSettingsSection";const x=()=>{const{settings:C,onUpdate:O}=(0,E.C)(),{videoPressVideosPrivateForSite:A,siteIsPrivate:f,siteType:v}=C;return(0,c.jsx)(U,{videoPressVideosPrivateForSite:A,siteIsPrivate:f,siteType:v,onPrivacyChange:d=>{O({videoPressVideosPrivateForSite:d})}})};x.displayName="ConnectSiteSettingsSection";const L=U;var M=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import SettingsSection from '..';

export default {
	title: 'Packages/VideoPress/Site Settings',
	component: SettingsSection,
	argTypes: {},
};

const Template = args => <SettingsSection { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	onPrivacyChange: action( 'onPrivacyChange' ),
};
`,Z={_default:{startLoc:{col:17,line:15},endLoc:{col:54,line:15},startBody:{col:17,line:15},endBody:{col:54,line:15}}};const D={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/**
 * Internal dependencies
 */
import SettingsSection from '..';
export default {
  title: 'Packages/VideoPress/Site Settings',
  component: SettingsSection,
  argTypes: {}
};
const Template = args => <SettingsSection {...args} />;
export const _default = Template.bind({});
_default.args = {
  onPrivacyChange: action('onPrivacyChange')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <SettingsSection {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:54,line:15},startBody:{col:17,line:15},endBody:{col:54,line:15}}}}},title:"Packages/VideoPress/Site Settings",component:L,argTypes:{}},N=C=>(0,c.jsx)(L,{...C});N.displayName="Template";const S=N.bind({});S.args={onPrivacyChange:(0,o.aD)("onPrivacyChange")},S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:"args => <SettingsSection {...args} />",...(P=(j=S.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const R=["_default"]},"../connection/components/use-connection/index.jsx":(m,s,t)=>{t.d(s,{Z:()=>u});var o=t("../api/index.jsx"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../connection/state/store.jsx");const _=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},u=function(){let{registrationNonce:E=_.registrationNonce,apiRoot:I=_.apiRoot,apiNonce:T=_.apiNonce,redirectUri:c,autoTrigger:h,from:U,skipUserConnection:x}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{registerSite:L,connectUser:M,refreshConnectedPlugins:Z}=(0,g.Z)(r.t),D=(0,a.Z)(d=>d(r.t).getRegistrationError()),{siteIsRegistering:N,userIsConnecting:S,userConnectionData:R,connectedPlugins:y,connectionErrors:j,isRegistered:P,isUserConnected:C,hasConnectedOwner:O,isOfflineMode:A}=(0,a.Z)(d=>({siteIsRegistering:d(r.t).getSiteIsRegistering(),userIsConnecting:d(r.t).getUserIsConnecting(),userConnectionData:d(r.t).getUserConnectionData(),connectedPlugins:d(r.t).getConnectedPlugins(),connectionErrors:d(r.t).getConnectionErrors(),isOfflineMode:d(r.t).getIsOfflineMode(),...d(r.t).getConnectionStatus()})),f=()=>{if(x){if(c)return window.location=c,Promise.resolve(c)}else return M({from:U,redirectUri:c});return Promise.resolve()},v=d=>(d&&d.preventDefault(),P?f():L({registrationNonce:E,redirectUri:c}).then(()=>f()));return(0,l.useEffect)(()=>{o.ZP.setApiRoot(I),o.ZP.setApiNonce(T)},[I,T]),(0,l.useEffect)(()=>{h&&!N&&!S&&v()},[]),{handleRegisterSite:v,handleConnectUser:f,refreshConnectedPlugins:Z,isRegistered:P,isUserConnected:C,siteIsRegistering:N,userIsConnecting:S,registrationError:D,userConnectionData:R,hasConnectedOwner:O,connectedPlugins:y,connectionErrors:j,isOfflineMode:A}}},"../connection/state/store.jsx":(m,s,t)=>{t.d(s,{t:()=>F});var o=t("../api/index.jsx");const g="SET_CONNECTION_STATUS",a="SET_CONNECTION_STATUS_IS_FETCHING",l="FETCH_CONNECTION_STATUS",r="SET_SITE_IS_REGISTERING",_="SET_USER_IS_CONNECTING",u="SET_REGISTRATION_ERROR",E="CLEAR_REGISTRATION_ERROR",I="REGISTER_SITE",T="SET_AUTHORIZATION_URL",c="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",U="FETCH_AUTHORIZATION_URL",x="SET_CONNECTED_PLUGINS",L="REFRESH_CONNECTED_PLUGINS",M="SET_CONNECTION_ERRORS",Z="SET_IS_OFFLINE_MODE",D=e=>({type:g,connectionStatus:e}),N=e=>({type:a,isFetching:e}),S=()=>({type:l}),R=e=>({type:r,isRegistering:e}),y=e=>({type:_,isConnecting:e}),j=()=>({type:h}),P=e=>({type:u,registrationError:e}),C=()=>({type:E}),O=e=>({type:T,authorizationUrl:e}),A=e=>({type:U,redirectUri:e}),f=e=>({type:x,connectedPlugins:e}),v=e=>({type:M,connectionErrors:e}),d=e=>({type:Z,isOfflineMode:e});function b(){let{from:e,redirectFunc:n,redirectUri:i}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function*(){yield y(!0),yield{type:c,from:e,redirectFunc:n,redirectUri:i}}()}function z(e){let{registrationNonce:n,redirectUri:i}=e;return function*(){yield C(),yield R(!0);try{const p=yield{type:I,registrationNonce:n,redirectUri:i};return yield D({isRegistered:!0}),yield O(p.authorizeUrl),yield R(!1),Promise.resolve(p)}catch(p){return yield P(p),yield R(!1),Promise.reject(p)}}()}const k={setConnectionStatus:D,setConnectionStatusIsFetching:N,fetchConnectionStatus:S,fetchAuthorizationUrl:A,setSiteIsRegistering:R,setUserIsConnecting:y,setRegistrationError:P,clearRegistrationError:C,setAuthorizationUrl:O,registerSite:z,connectUser:b,disconnectUserSuccess:j,setConnectedPlugins:f,refreshConnectedPlugins:()=>async e=>{let{dispatch:n}=e;return await new Promise(i=>o.ZP.fetchConnectedPlugins().then(p=>{n(f(p)),i(p)}))},setConnectionErrors:v,setIsOfflineMode:d};var Q=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const F="jetpack-connection",$=e=>{let{registrationNonce:n,redirectUri:i}=e;return o.ZP.registerSite(n,i)},q=(0,Q.R)(e=>{let{resolveSelect:n}=e;return function(){let{from:i,redirectFunc:p,redirectUri:w}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise((W,fe)=>{n(F).getAuthorizationUrl(w).then(H=>{const Ie=p||(he=>window.location.assign(he)),Y=new URL(H);i&&Y.searchParams.set("from",encodeURIComponent(i));const J=Y.toString();Ie(J),W(J)}).catch(H=>{fe(H)})})}}),ee={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:n}=e;return o.ZP.fetchAuthorizationUrl(n)},REGISTER_SITE:$,CONNECT_USER:q};var te=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/combine-reducers.js");const ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return{...e,...n.connectionStatus};case h:return{...e,isUserConnected:!1}}return e},se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return n.connectedPlugins}return e},oe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a:return n.isFetching}return e},re=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r:return n.isRegistering}return e},ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return n.isConnecting}return e},ae=(e,n)=>{switch(n.type){case E:return!1;case u:return n.registrationError;default:return e}},ce=(e,n)=>{switch(n.type){case T:return n.authorizationUrl;default:return e}},de=(e,n)=>{switch(n.type){default:return e}},ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M:return n.connectionErrors}return e},le=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Z:return n.isConnecting}return e},me=(0,te.U)({connectionStatus:ne,connectionStatusIsFetching:oe,siteIsRegistering:re,userIsConnecting:ie,registrationError:ae,authorizationUrl:ce,userConnectionData:de,connectedPlugins:se,connectionErrors:ue,isOfflineMode:le});var ge=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),pe=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:function(e){const n=!!e.authorizationUrl;for(var i=arguments.length,p=new Array(i>1?i-1:0),w=1;w<i;w++)p[w-1]=arguments[w];const W=(0,ge.Y)(F).hasFinishedResolution("getAuthorizationUrl",p);return n&&!W&&(0,pe.W)(F).finishResolution("getAuthorizationUrl",p),n},*fulfill(e){const n=yield k.fetchAuthorizationUrl(e);yield k.setAuthorizationUrl(n.authorizeUrl)}}}},Ee={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var n,i;return(i=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:i.wpcomUser},getBlogId:e=>{var n,i;return(i=(n=e==null?void 0:e.userConnectionData)==null?void 0:n.currentUser)==null?void 0:i.blogId}}};var Se=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js"),Te=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const B=class{static mayBeInit(n,i){B.store===null&&(B.store=(0,Se.Z)(n,i),(0,Te.z2)(B.store))}};let G=B;X(G,"store",null);const Ce=G,V=window.JP_CONNECTION_INITIAL_STATE;V||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ce.mayBeInit(F,{__experimentalUseThunks:!0,reducer:me,actions:k,selectors:Ee,resolvers:_e,controls:ee,initialState:V||{}})},"../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts":(m,s,t)=>{t.d(s,{RB:()=>a,mP:()=>o});const o="atomic",g="simple",a="jetpack"},"../../packages/videopress/src/client/admin/hooks/use-permission/index.ts":(m,s,t)=>{t.d(s,{g:()=>g});var o=t("../connection/components/use-connection/index.jsx");const g=()=>{const{isRegistered:a,hasConnectedOwner:l,isUserConnected:r}=(0,o.Z)();return{isRegistered:a,hasConnectedOwner:l,isUserConnected:r,canPerformAction:a&&l&&r}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(m,s,t)=>{t.d(s,{C:()=>r});var o=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.13.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=t("../../packages/videopress/src/client/state/index.js"),l=t("../../packages/videopress/src/client/admin/components/site-settings-section/constants.ts");const r=()=>{var E,I,T;const _=(0,o.Z)(a.tT),u=(0,g.Z)(c=>c(a.tT).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(E=u==null?void 0:u.videoPressVideosPrivateForSite)!=null?E:!1,siteIsPrivate:(I=u==null?void 0:u.siteIsPrivate)!=null?I:!1,siteType:(T=u==null?void 0:u.siteType)!=null?T:l.RB},onUpdate:c=>_.updateVideoPressSettings(c)}}}}]);})();
