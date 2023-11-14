"use strict";(()=>{var ye=Object.defineProperty;var fe=(u,n,s)=>n in u?ye(u,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[n]=s;var Z=(u,n,s)=>(fe(u,typeof n!="symbol"?n+"":n,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../components/components/admin-page/stories/index.stories.tsx":(u,n,s)=>{var h,A,f,R,O,N;s.r(n),s.d(n,{CustomHeader:()=>i,__namedExportsOrder:()=>p,_default:()=>m,default:()=>y});var l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../components/components/jetpack-logo/index.tsx"),_=s("../components/components/text/index.tsx"),r=s("../components/components/admin-page/index.tsx"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=s.n(a),g=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),d={};d.insert="head",d.singleton=!1;var w=E()(g.Z,d);const j=g.Z.locals||{};var I=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,T={_default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},CustomHeader:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}};const y={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:r.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},C=U=>(0,I.jsx)(r.Z,{...U});C.displayName="Template";const m=C.bind({}),i=C.bind({});i.args={header:(0,I.jsxs)("div",{className:j["custom-header"],children:[(0,I.jsx)(c.Z,{height:40}),(0,I.jsx)(_.ZP,{className:j["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:"args => <AdminPage {...args} />",...(f=(A=m.parameters)==null?void 0:A.docs)==null?void 0:f.source}}},i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"args => <AdminPage {...args} />",...(N=(O=i.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const p=["_default","CustomHeader"]},"../components/components/layout/use-breakpoint-match/index.ts":(u,n,s)=>{s.d(n,{Z:()=>I});var l=s("../../../node_modules/.pnpm/@wordpress+compose@6.22.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(c),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var E=_()(r.Z,a);const g=r.Z.locals||{},d=["sm","md","lg"],w=(S,T,y)=>{const C=d.indexOf(S),m=C+1,i=T.includes("=");let p=[];return T.startsWith("<")&&(p=d.slice(0,i?m:C)),T.startsWith(">")&&(p=d.slice(i?C:m)),p!=null&&p.length?p.some(h=>y[h]):y[S]},I=(S,T)=>{const y=Array.isArray(S)?S:[S],C=Array.isArray(T)?T:[T],[m,i,p]=d,h=(0,l.Z)(g[m]),A=(0,l.Z)(g[i]),f=(0,l.Z)(g[p]),R={sm:h,md:A,lg:f};return y.map((O,N)=>{const U=C[N];return U?w(O,U,R):R[O]})}},"../components/tools/jp-redirect/index.ts":(u,n,s)=>{s.d(n,{Z:()=>l});function l(c,_={}){var g;const r={};let a;if(typeof window!="undefined"&&(a=(g=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:g.calypsoEnv),c.search("https://")===0){const d=new URL(c);c=`https://${d.host}${d.pathname}`,r.url=encodeURIComponent(c)}else r.source=encodeURIComponent(c);for(const d in _)r[d]=encodeURIComponent(_[d]);return!Object.keys(r).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(r.site=jetpack_redirects.currentSiteRawUrl),a&&(r.calypso_env=a),"https://jetpack.com/redirect/?"+Object.keys(r).map(d=>d+"="+r[d]).join("&")}},"../connection/state/store.jsx":(u,n,s)=>{s.d(n,{t:()=>x});var l=s("../api/index.jsx");const c="SET_CONNECTION_STATUS",_="SET_CONNECTION_STATUS_IS_FETCHING",r="FETCH_CONNECTION_STATUS",a="SET_SITE_IS_REGISTERING",E="SET_USER_IS_CONNECTING",g="SET_REGISTRATION_ERROR",d="CLEAR_REGISTRATION_ERROR",w="REGISTER_SITE",j="SET_AUTHORIZATION_URL",I="CONNECT_USER",S="DISCONNECT_USER_SUCCESS",T="FETCH_AUTHORIZATION_URL",y="SET_CONNECTED_PLUGINS",C="REFRESH_CONNECTED_PLUGINS",m="SET_CONNECTION_ERRORS",i="SET_IS_OFFLINE_MODE",p=e=>({type:c,connectionStatus:e}),h=e=>({type:_,isFetching:e}),A=()=>({type:r}),f=e=>({type:a,isRegistering:e}),R=e=>({type:E,isConnecting:e}),O=()=>({type:S}),N=e=>({type:g,registrationError:e}),U=()=>({type:d}),D=e=>({type:j,authorizationUrl:e}),z=e=>({type:T,redirectUri:e}),M=e=>({type:y,connectedPlugins:e}),K=e=>({type:m,connectionErrors:e}),J=e=>({type:i,isOfflineMode:e});function*W({from:e,redirectFunc:t,redirectUri:o}={}){yield R(!0),yield{type:I,from:e,redirectFunc:t,redirectUri:o}}function*V({registrationNonce:e,redirectUri:t}){yield U(),yield f(!0);try{const o=yield{type:w,registrationNonce:e,redirectUri:t};return yield p({isRegistered:!0}),yield D(o.authorizeUrl),yield f(!1),Promise.resolve(o)}catch(o){return yield N(o),yield f(!1),Promise.reject(o)}}const v={setConnectionStatus:p,setConnectionStatusIsFetching:h,fetchConnectionStatus:A,fetchAuthorizationUrl:z,setSiteIsRegistering:f,setUserIsConnecting:R,setRegistrationError:N,clearRegistrationError:U,setAuthorizationUrl:D,registerSite:V,connectUser:W,disconnectUserSuccess:O,setConnectedPlugins:M,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(t=>l.ZP.fetchConnectedPlugins().then(o=>{e(M(o)),t(o)})),setConnectionErrors:K,setIsOfflineMode:J};var Y=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const x="jetpack-connection",X=({registrationNonce:e,redirectUri:t})=>l.ZP.registerSite(e,t),Q=(0,Y.R)(({resolveSelect:e})=>({from:t,redirectFunc:o,redirectUri:L}={})=>new Promise((Ee,Se)=>{e(x).getAuthorizationUrl(L).then(b=>{const Te=o||(Ce=>window.location.assign(Ce)),F=new URL(b);t&&F.searchParams.set("from",encodeURIComponent(t));const G=F.toString();Te(G),Ee(G)}).catch(b=>{Se(b)})})),$={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>l.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:X,CONNECT_USER:Q};var H=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=(e={},t)=>{switch(t.type){case c:return{...e,...t.connectionStatus};case S:return{...e,isUserConnected:!1}}return e},ee=(e={},t)=>{switch(t.type){case y:return t.connectedPlugins}return e},te=(e=!1,t)=>{switch(t.type){case _:return t.isFetching}return e},se=(e=!1,t)=>{switch(t.type){case a:return t.isRegistering}return e},oe=(e=!1,t)=>{switch(t.type){case E:return t.isConnecting}return e},ne=(e,t)=>{switch(t.type){case d:return!1;case g:return t.registrationError;default:return e}},re=(e,t)=>{switch(t.type){case j:return t.authorizationUrl;default:return e}},ae=(e,t)=>{switch(t.type){default:return e}},de=(e={},t)=>{switch(t.type){case m:return t.connectionErrors}return e},ce=(e=!1,t)=>{switch(t.type){case i:return t.isConnecting}return e},le=(0,H.UY)({connectionStatus:q,connectionStatusIsFetching:te,siteIsRegistering:se,userIsConnecting:oe,registrationError:ne,authorizationUrl:re,userConnectionData:ae,connectedPlugins:ee,connectionErrors:de,isOfflineMode:ce});var ie=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),ue=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const _e={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const o=!!e.authorizationUrl,L=(0,ie.Y)(x).hasFinishedResolution("getAuthorizationUrl",t);return o&&!L&&(0,ue.W)(x).finishResolution("getAuthorizationUrl",t),o},*fulfill(e){const t=yield v.fetchAuthorizationUrl(e);yield v.setAuthorizationUrl(t.authorizeUrl)}}}},me={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var t,o;return(o=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:o.wpcomUser},getBlogId:e=>{var t,o;return(o=(t=e==null?void 0:e.userConnectionData)==null?void 0:t.currentUser)==null?void 0:o.blogId}}};var pe=s("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const P=class{static mayBeInit(t,o){P.store===null&&(P.store=(0,pe.Z)(t,o),(0,H.z2)(P.store))}};let k=P;Z(k,"store",null);const ge=k,B=window.JP_CONNECTION_INITIAL_STATE;B||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),ge.mayBeInit(x,{__experimentalUseThunks:!0,reducer:le,actions:v,selectors:me,resolvers:_e,controls:$,initialState:B||{}})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(u,n,s)=>{s.d(n,{Z:()=>E});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(_),a=r()(c());a.push([u.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),a.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const E=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(u,n,s)=>{s.d(n,{Z:()=>E});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(l),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(_),a=r()(c());a.push([u.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const E=a}}]);})();
