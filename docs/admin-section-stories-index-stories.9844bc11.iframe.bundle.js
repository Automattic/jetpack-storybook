"use strict";(()=>{var ye=Object.defineProperty;var Ie=(m,r,s)=>r in m?ye(m,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[r]=s;var W=(m,r,s)=>(Ie(m,typeof r!="symbol"?r+"":r,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6191],{"../components/components/admin-section/stories/index.stories.tsx":(m,r,s)=>{var O,g,U,x,A,v,k,w,Z;s.r(r),s.d(r,{__namedExportsOrder:()=>P,_default:()=>h,default:()=>R,onlyBasic:()=>i,onlyHero:()=>E});var _=s("../components/components/admin-page/index.tsx"),d=s("../components/components/layout/col/index.tsx"),l=s("../components/components/layout/container/index.tsx"),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=s.n(n),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/basic/style.module.scss"),p={};p.insert="head",p.singleton=!1;var S=T()(u.Z,p);const N=u.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=({children:f})=>(0,t.jsx)("div",{className:N.section,children:f});var I=s("../components/components/admin-section/hero/index.tsx");const R={title:"JS Packages/Components/Admin Sections"},h=(f=>(0,t.jsxs)(_.Z,{children:[(0,t.jsx)(I.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.Z,{lg:12,md:8,sm:4,children:[(0,t.jsx)("h1",{children:"Sample Hero section"}),(0,t.jsx)("p",{children:"This is a sample Hero section"})]})})}),(0,t.jsx)(C,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.Z,{lg:12,md:8,sm:4,children:[(0,t.jsx)("h2",{children:"Sample Section"}),(0,t.jsx)("p",{children:"This is a sample section"})]})})})]})).bind({}),i=f=>(0,t.jsx)(C,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.Z,{lg:12,md:8,sm:4,children:[(0,t.jsx)("h2",{children:"Sample Section"}),(0,t.jsx)("p",{children:"This is a sample section"})]})})}),E=f=>(0,t.jsx)(I.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.Z,{lg:12,md:8,sm:4,children:[(0,t.jsx)("h2",{children:"Sample Hero Section"}),(0,t.jsx)("p",{children:"This is a sample Hero section"})]})})});h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`args => <AdminPage>
        <AdminSectionHero>
            <Container>
                <Col lg={12} md={8} sm={4}>
                    <h1>Sample Hero section</h1>
                    <p>This is a sample Hero section</p>
                </Col>
            </Container>
        </AdminSectionHero>
        <AdminSection>
            <Container>
                <Col lg={12} md={8} sm={4}>
                    <h2>Sample Section</h2>
                    <p>This is a sample section</p>
                </Col>
            </Container>
        </AdminSection>
    </AdminPage>`,...(U=(g=h.parameters)==null?void 0:g.docs)==null?void 0:U.source}}},i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => <AdminSection>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Section</h2>
                <p>This is a sample section</p>
            </Col>
        </Container>
    </AdminSection>`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}},E.parameters={...E.parameters,docs:{...(k=E.parameters)==null?void 0:k.docs,source:{originalSource:`args => <AdminSectionHero>
        <Container>
            <Col lg={12} md={8} sm={4}>
                <h2>Sample Hero Section</h2>
                <p>This is a sample Hero section</p>
            </Col>
        </Container>
    </AdminSectionHero>`,...(Z=(w=E.parameters)==null?void 0:w.docs)==null?void 0:Z.source}}};const P=["_default","onlyBasic","onlyHero"];try{i.displayName="onlyBasic",i.__docgenInfo={description:"",displayName:"onlyBasic",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/admin-section/stories/index.stories.tsx#onlyBasic"]={docgenInfo:i.__docgenInfo,name:"onlyBasic",path:"../components/components/admin-section/stories/index.stories.tsx#onlyBasic"})}catch(f){}try{E.displayName="onlyHero",E.__docgenInfo={description:"",displayName:"onlyHero",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/admin-section/stories/index.stories.tsx#onlyHero"]={docgenInfo:E.__docgenInfo,name:"onlyHero",path:"../components/components/admin-section/stories/index.stories.tsx#onlyHero"})}catch(f){}},"../connection/state/store.jsx":(m,r,s)=>{s.d(r,{t:()=>D});var _=s("../api/index.jsx");const d="SET_CONNECTION_STATUS",l="SET_CONNECTION_STATUS_IS_FETCHING",c="FETCH_CONNECTION_STATUS",n="SET_SITE_IS_REGISTERING",T="SET_USER_IS_CONNECTING",u="SET_REGISTRATION_ERROR",p="CLEAR_REGISTRATION_ERROR",S="REGISTER_SITE",N="SET_AUTHORIZATION_URL",t="CONNECT_USER",y="DISCONNECT_USER_SUCCESS",C="FETCH_AUTHORIZATION_URL",I="SET_CONNECTED_PLUGINS",R="REFRESH_CONNECTED_PLUGINS",j="SET_CONNECTION_ERRORS",h="SET_IS_OFFLINE_MODE",i=e=>({type:d,connectionStatus:e}),E=e=>({type:l,isFetching:e}),P=()=>({type:c}),O=e=>({type:n,isRegistering:e}),g=e=>({type:T,isConnecting:e}),U=()=>({type:y}),x=e=>({type:u,registrationError:e}),A=()=>({type:p}),v=e=>({type:N,authorizationUrl:e}),k=e=>({type:C,redirectUri:e}),w=e=>({type:I,connectedPlugins:e}),Z=e=>({type:j,connectionErrors:e}),f=e=>({type:h,isOfflineMode:e});function*Y({from:e,redirectFunc:o,redirectUri:a}={}){yield g(!0),yield{type:t,from:e,redirectFunc:o,redirectUri:a}}function*X({registrationNonce:e,redirectUri:o}){yield A(),yield O(!0);try{const a=yield{type:S,registrationNonce:e,redirectUri:o};return yield i({isRegistered:!0}),yield v(a.authorizeUrl),yield O(!1),Promise.resolve(a)}catch(a){return yield x(a),yield O(!1),Promise.reject(a)}}const M={setConnectionStatus:i,setConnectionStatusIsFetching:E,fetchConnectionStatus:P,fetchAuthorizationUrl:k,setSiteIsRegistering:O,setUserIsConnecting:g,setRegistrationError:x,clearRegistrationError:A,setAuthorizationUrl:v,registerSite:X,connectUser:Y,disconnectUserSuccess:U,setConnectedPlugins:w,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise(o=>_.ZP.fetchConnectedPlugins().then(a=>{e(w(a)),o(a)})),setConnectionErrors:Z,setIsOfflineMode:f};var J=s("../../../node_modules/.pnpm/@wordpress+data@9.24.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const D="jetpack-connection",$=({registrationNonce:e,redirectUri:o})=>_.ZP.registerSite(e,o),V=(0,J.R)(({resolveSelect:e})=>({from:o,redirectFunc:a,redirectUri:B}={})=>new Promise((Ee,Te)=>{e(D).getAuthorizationUrl(B).then(b=>{const he=a||(Ce=>window.location.assign(Ce)),z=new URL(b);o&&z.searchParams.set("from",encodeURIComponent(o));const G=z.toString();he(G),Ee(G)}).catch(b=>{Te(b)})})),Q={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>_.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:$,CONNECT_USER:V};var F=s("../../../node_modules/.pnpm/@wordpress+data@9.24.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const q=(e={},o)=>{switch(o.type){case d:return{...e,...o.connectionStatus};case y:return{...e,isUserConnected:!1}}return e},ee=(e={},o)=>{switch(o.type){case I:return o.connectedPlugins}return e},se=(e=!1,o)=>{switch(o.type){case l:return o.isFetching}return e},oe=(e=!1,o)=>{switch(o.type){case n:return o.isRegistering}return e},ne=(e=!1,o)=>{switch(o.type){case T:return o.isConnecting}return e},te=(e,o)=>{switch(o.type){case p:return!1;case u:return o.registrationError;default:return e}},re=(e,o)=>{switch(o.type){case N:return o.authorizationUrl;default:return e}},de=(e,o)=>{switch(o.type){default:return e}},ce=(e={},o)=>{switch(o.type){case j:return o.connectionErrors}return e},ae=(e=!1,o)=>{switch(o.type){case h:return o.isConnecting}return e},le=(0,F.UY)({connectionStatus:q,connectionStatusIsFetching:se,siteIsRegistering:oe,userIsConnecting:ne,registrationError:te,authorizationUrl:re,userConnectionData:de,connectedPlugins:ee,connectionErrors:ce,isOfflineMode:ae});var ie=s("../../../node_modules/.pnpm/@wordpress+data@9.24.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js"),_e=s("../../../node_modules/.pnpm/@wordpress+data@9.24.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js");const me={...{getAuthorizationUrl:{isFulfilled:(e,...o)=>{const a=!!e.authorizationUrl,B=(0,ie.Y)(D).hasFinishedResolution("getAuthorizationUrl",o);return a&&!B&&(0,_e.W)(D).finishResolution("getAuthorizationUrl",o),a},*fulfill(e){const o=yield M.fetchAuthorizationUrl(e);yield M.setAuthorizationUrl(o.authorizeUrl)}}}},pe={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>{var o,a;return(a=(o=e==null?void 0:e.userConnectionData)==null?void 0:o.currentUser)==null?void 0:a.wpcomUser},getBlogId:e=>{var o,a;return(a=(o=e==null?void 0:e.userConnectionData)==null?void 0:o.currentUser)==null?void 0:a.blogId}}};var ue=s("../../../node_modules/.pnpm/@wordpress+data@9.24.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const L=class{static mayBeInit(o,a){L.store===null&&(L.store=(0,ue.Z)(o,a),(0,F.z2)(L.store))}};let H=L;W(H,"store",null);const Se=H,K=window.JP_CONNECTION_INITIAL_STATE;K||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Se.mayBeInit(D,{__experimentalUseThunks:!0,reducer:le,actions:M,selectors:pe,resolvers:me,controls:Q,initialState:K||{}})},"../components/components/admin-section/hero/index.tsx":(m,r,s)=>{s.d(r,{Z:()=>N});var _=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(d),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss"),n={};n.insert="head",n.singleton=!1;var T=l()(c.Z,n);const u=c.Z.locals||{};var p=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const N=({children:t})=>(0,p.jsx)("div",{className:u["section-hero"],children:t})},"../components/components/layout/use-breakpoint-match/index.ts":(m,r,s)=>{s.d(r,{Z:()=>t});var _=s("../../../node_modules/.pnpm/@wordpress+compose@6.31.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(d),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),n={};n.insert="head",n.singleton=!1;var T=l()(c.Z,n);const u=c.Z.locals||{},p=["sm","md","lg"],S=(y,C,I)=>{const R=p.indexOf(y),j=R+1,h=C.includes("=");let i=[];return C.startsWith("<")&&(i=p.slice(0,h?j:R)),C.startsWith(">")&&(i=p.slice(h?R:j)),i!=null&&i.length?i.some(E=>I[E]):I[y]},t=(y,C)=>{const I=Array.isArray(y)?y:[y],R=Array.isArray(C)?C:[C],[j,h,i]=p,E=(0,_.Z)(u[j]),P=(0,_.Z)(u[h]),O=(0,_.Z)(u[i]),g={sm:E,md:P,lg:O};return I.map((U,x)=>{const A=R[x];return A?S(U,A,g):g[U]})}},"../components/tools/jp-redirect/index.ts":(m,r,s)=>{s.d(r,{Z:()=>_});function _(d,l={}){var u,p;const c={};let n;if(typeof window!="undefined"&&(n=(u=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:u.calypsoEnv),d.search("https://")===0){const S=new URL(d);d=`https://${S.host}${S.pathname}`,c.url=encodeURIComponent(d)}else c.source=encodeURIComponent(d);for(const S in l)c[S]=encodeURIComponent(l[S]);return!Object.keys(c).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(c.site=(p=jetpack_redirects.currentBlogID)!=null?p:jetpack_redirects.currentSiteRawUrl),n&&(c.calypso_env=n),"https://jetpack.com/redirect/?"+Object.keys(c).map(S=>S+"="+c[S]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/basic/style.module.scss":(m,r,s)=>{s.d(r,{Z:()=>T});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(_),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=s.n(l),n=c()(d());n.push([m.id,".Okcw76oAYzvzDKkq0Cg9{background-color:var(--jp-white)}",""]),n.locals={section:"Okcw76oAYzvzDKkq0Cg9"};const T=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-section/hero/style.module.scss":(m,r,s)=>{s.d(r,{Z:()=>T});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(_),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=s.n(l),n=c()(d());n.push([m.id,".s92r0DN4OmNZtdFlz9yh{background:var(--jp-white-off)}",""]),n.locals={"section-hero":"s92r0DN4OmNZtdFlz9yh"};const T=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(m,r,s)=>{s.d(r,{Z:()=>T});var _=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(_),l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=s.n(l),n=c()(d());n.push([m.id,"",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const T=n}}]);})();