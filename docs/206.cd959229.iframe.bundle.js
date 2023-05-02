"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[206],{"../analytics/index.jsx":(O,f,s)=>{s.d(f,{Z:()=>b});var p=s("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),g=s.n(p);const d=g()("dops:analytics");let u,c;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function E(e,n){let o="";if(typeof e=="object"){for(const t in e)o+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);d("Bumping stats %o",e)}else o="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(n),d('Bumping stat "%s" in group "%s"',n,e);return o}function h(e,n){let o="";if(typeof e=="object"){for(const t in e)o+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);d("Built stats %o",e)}else o="&"+encodeURIComponent(e)+"="+encodeURIComponent(n),d('Built stat "%s" in group "%s"',n,e);return o}const l={initialize:function(e,n,o){l.setUser(e,n),l.setSuperProps(o),l.identifyUser()},setGoogleAnalyticsEnabled:function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=n},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,n){c={ID:e,username:n}},setSuperProps:function(e){u=e},assignSuperProps:function(e){u=Object.assign(u||{},e)},mc:{bumpStat:function(e,n){const o=E(e,n);l.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+o+"&t="+Math.random())},bumpStatWithPageView:function(e,n){const o=h(e,n);l.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+o+"&t="+Math.random())}},pageView:{record:function(e,n){l.tracks.recordPageView(e),l.ga.recordPageView(e,n)}},purchase:{record:function(e,n,o,t,v,a,k){l.ga.recordPurchase(e,n,o,t,v,a,k)}},tracks:{recordEvent:function(e,n){if(n=n||{},e.indexOf("akismet_")!==0&&e.indexOf("jetpack_")!==0){d('- Event name must be prefixed by "akismet_" or "jetpack_"');return}u&&(d("- Super Props: %o",u),n=Object.assign(n,u)),d('Record event "%s" called with props %s',e,JSON.stringify(n)),window._tkq.push(["recordEvent",e,n])},recordJetpackClick:function(e){const n=typeof e=="object"?e:{target:e};l.tracks.recordEvent("jetpack_wpa_click",n)},recordPageView:function(e){l.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){d("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};l.ga.initialized||(c&&(e={userId:"u-"+c.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),l.ga.initialized=!0)},recordPageView:function(e,n){l.ga.initialize(),d("Recording Page View ~ [URL: "+e+"] [Title: "+n+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:n}))},recordEvent:function(e,n,o,t){l.ga.initialize();let v="Recording Event ~ [Category: "+e+"] [Action: "+n+"]";typeof o!="undefined"&&(v+=" [Option Label: "+o+"]"),typeof t!="undefined"&&(v+=" [Option Value: "+t+"]"),d(v),this.googleAnalyticsEnabled&&window.ga("send","event",e,n,o,t)},recordPurchase:function(e,n,o,t,v,a,k){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:t,currency:k}),window.ga("ecommerce:addItem",{id:e,name:n,sku:o,price:v,quantity:a}),window.ga("ecommerce:send")}},identifyUser:function(){c&&window._tkq.push(["identifyUser",c.ID,c.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},b=l},"../components/components/button/index.tsx":(O,f,s)=>{s.d(f,{Z:()=>k});var p=s("../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),g=s("../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),d=s("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=s("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/external.js"),c=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),E=s.n(c),h=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=s.n(l),e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),n={};n.insert="head",n.singleton=!1;var o=b()(e.Z,n);const t=e.Z.locals||{};var v=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=(0,h.forwardRef)((U,V)=>{var m,_;const{children:j,variant:M="primary",size:r="normal",weight:i="bold",icon:y,iconSize:X,disabled:C,isDestructive:D,isLoading:Z,isExternalLink:S,className:B,text:L,fullWidth:R,...w}=U,T=E()(t.button,B,{[t.normal]:r==="normal",[t.small]:r==="small",[t.icon]:!!y,[t.loading]:Z,[t.regular]:i==="regular",[t["full-width"]]:R,[t["is-icon-button"]]:!!y&&!j});w.ref=V;const z=r==="normal"?20:16,N=S&&(0,v.jsx)(d.Z,{size:z,icon:u.Z,className:t["external-icon"]}),P=S?"_blank":void 0,A=(j==null?void 0:j[0])&&j[0]!==null&&((_=(m=j==null?void 0:j[0])==null?void 0:m.props)==null?void 0:_.className)!=="components-tooltip";return(0,v.jsxs)(p.ZP,{target:P,variant:M,className:E()(T,{"has-text":!!y&&A}),icon:S?void 0:y,iconSize:X,disabled:C,"aria-disabled":C,isDestructive:D,text:L,...w,children:[Z&&(0,v.jsx)(g.ZP,{}),(0,v.jsx)("span",{children:j}),N]})});a.displayName="Button";const k=a;try{a.displayName="Button",a.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:a.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(U){}},"../../packages/my-jetpack/_inc/components/product-card/index.jsx":(O,f,s)=>{s.d(f,{Z:()=>Z});var p=s("../components/components/button/index.tsx"),g=s("../components/components/text/index.tsx"),d=s("../../../node_modules/.pnpm/@wordpress+components@23.9.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),u=s("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),c=s("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),E=s("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/external.js"),h=s("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/download.js"),l=s("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/check.js"),b=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),e=s.n(b),n=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=s.n(n),t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=s("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),a=s("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),k=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=s.n(k),V=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),j={};j.insert="head",j.singleton=!1;var M=U()(V.Z,j);const r=V.Z.locals||{};var i=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y=u.__,X={[a.N.ACTIVE]:y("Active","jetpack-my-jetpack"),[a.N.INACTIVE]:y("Inactive","jetpack-my-jetpack"),[a.N.NEEDS_PURCHASE]:y("Inactive","jetpack-my-jetpack"),[a.N.NEEDS_PURCHASE_OR_FREE]:y("Inactive","jetpack-my-jetpack"),[a.N.ERROR]:y("Error","jetpack-my-jetpack")},C=S=>{let{items:B=[],showManage:L=!1,onManage:R,showInstall:w=!1,onInstall:T,showActivate:z=!1,onActivate:N}=S;return(0,i.jsx)(d.Z,{className:r.dropdown,popoverProps:{noArrow:!1,placement:"bottom-end"},renderToggle:P=>{let{isOpen:A,onToggle:m}=P;return(0,i.jsx)(p.Z,{variant:"tertiary",size:"small",icon:c.Z,onClick:m,"aria-expanded":A})},renderContent:P=>{let{onClose:A}=P;return(0,i.jsxs)(i.Fragment,{children:[B.map(m=>(0,i.jsx)(p.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:m==null?void 0:m.icon,onClick:()=>{var _;A(),(_=m==null?void 0:m.onClick)==null||_.call(m)},children:m==null?void 0:m.label})),L&&(0,i.jsx)(p.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:E.Z,onClick:()=>{A(),R==null||R()},children:y("Manage","jetpack-my-jetpack")}),w&&(0,i.jsx)(p.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:h.Z,onClick:()=>{A(),T==null||T()},children:y("Install Plugin","jetpack-my-jetpack")}),z&&(0,i.jsx)(p.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:l.Z,onClick:()=>{A(),N==null||N()},children:y("Activate Plugin","jetpack-my-jetpack")})]})}})};C.displayName="Menu";const D=S=>{const{name:B,description:L,icon:R,status:w,onActivate:T,onAdd:z,onFixConnection:N,onManage:P,isFetching:A,isInstallingStandalone:m,slug:_,children:J,showMenu:q=!1,showManageOption:ee=!1,showActivateOption:se=!1,showInstallOption:ne=!1,menuItems:oe=[],onInstallStandalone:H,onActivateStandalone:K}=S,Q=w===a.N.ACTIVE,Y=w===a.N.ERROR,te=w===a.N.INACTIVE,F=w===a.N.ABSENT||w===a.N.ABSENT_WITH_PLAN,$=w===a.N.NEEDS_PURCHASE||w===a.N.NEEDS_PURCHASE_OR_FREE,ae=X[w],ie=e()(r.container,{[r.plugin_absent]:F,[r["is-purchase-required"]]:$,[r["is-link"]]:F,[r["has-error"]]:Y}),de=e()(r.status,{[r.active]:Q,[r.inactive]:te||$,[r.error]:Y,[r["is-fetching"]]:A||m}),{recordEvent:x}=(0,v.Z)(),ce=(0,t.useCallback)(()=>{x("jetpack_myjetpack_product_card_activate_click",{product:_}),T()},[_,T,x]),re=(0,t.useCallback)(I=>{I!=null&&I.preventDefault&&I.preventDefault(),x("jetpack_myjetpack_product_card_add_click",{product:_}),z()},[_,z,x]),le=(0,t.useCallback)(()=>{x("jetpack_myjetpack_product_card_manage_click",{product:_}),P()},[_,P,x]),pe=(0,t.useCallback)(()=>{x("jetpack_myjetpack_product_card_fixconnection_click",{product:_}),N()},[_,N,x]),ue=(0,t.useCallback)(()=>{x("jetpack_myjetpack_product_card_install_standalone_plugin_click",{product:_}),H()},[_,H,x]),me=(0,t.useCallback)(()=>{x("jetpack_myjetpack_product_card_activate_standalone_plugin_click",{product:_}),K()},[_,K,x]),_e=F?I=>{let{children:G,...W}=I;return(0,i.jsx)("a",{...W,href:"#",onClick:re,children:G})}:I=>{let{children:G,...W}=I;return(0,i.jsx)("div",{...W,children:G})};return(0,i.jsxs)(_e,{className:ie,children:[(0,i.jsxs)("div",{className:r.title,children:[(0,i.jsxs)("div",{className:r.name,children:[(0,i.jsx)(g.ZP,{variant:"title-medium",children:B}),q&&R]}),q?(0,i.jsx)(C,{items:oe,showManage:ee,onManage:P,showActivate:se,onActivate:me,showInstall:ne,onInstall:ue}):R]}),Q&&J?J:(0,i.jsx)(g.ZP,{variant:"body-small",className:r.description,children:L}),(0,i.jsxs)("div",{className:r.actions,children:[(0,i.jsx)(a.Z,{...S,onActivate:ce,onFixConnection:pe,onManage:le,className:r.button}),!F&&(0,i.jsx)(g.ZP,{variant:"label",className:de,children:ae})]})]})};D.displayName="ProductCard",D.propTypes={children:o().node,name:o().string.isRequired,description:o().string.isRequired,icon:o().element,admin:o().bool.isRequired,isFetching:o().bool,isInstallingStandalone:o().bool,onManage:o().func,onFixConnection:o().func,onActivate:o().func,onAdd:o().func,slug:o().string.isRequired,status:o().oneOf([a.N.ACTIVE,a.N.INACTIVE,a.N.ERROR,a.N.ABSENT,a.N.ABSENT_WITH_PLAN,a.N.NEEDS_PURCHASE,a.N.NEEDS_PURCHASE_OR_FREE]).isRequired},D.defaultProps={icon:null,isFetching:!1,isInstallingStandalone:!1,onManage:()=>{},onFixConnection:()=>{},onActivate:()=>{},onAdd:()=>{}},D.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1},isFetching:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isInstallingStandalone:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onManage:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onFixConnection:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onActivate:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onAdd:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"node"},required:!1},name:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!0},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},status:{description:"",type:{name:"enum",value:[{value:"PRODUCT_STATUSES.ACTIVE",computed:!0},{value:"PRODUCT_STATUSES.INACTIVE",computed:!0},{value:"PRODUCT_STATUSES.ERROR",computed:!0},{value:"PRODUCT_STATUSES.ABSENT",computed:!0},{value:"PRODUCT_STATUSES.ABSENT_WITH_PLAN",computed:!0},{value:"PRODUCT_STATUSES.NEEDS_PURCHASE",computed:!0},{value:"PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE",computed:!0}]},required:!0}}};const Z=D},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(O,f,s)=>{s.d(f,{Z:()=>c});var p=s("../analytics/index.jsx"),g=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=s("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const c=()=>{var i;const{isUserConnected:E,connectedPlugins:h,userConnectionData:l={}}=(0,d.Z)(),{login:b,ID:e}=((i=l.currentUser)==null?void 0:i.wpcomUser)||{};(0,g.useEffect)(()=>{E&&e&&b&&p.Z.initialize(e,b)},[e,E,b]);const n=Object.keys(h||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:o,ga:t,mc:v,pageView:a,purchase:k,setGoogleAnalyticsEnabled:U,setMcAnalyticsEnabled:V,setProperties:j,tracks:M}=p.Z,r=(0,g.useCallback)((y,X)=>{var C;M.recordEvent(y,{...X,version:(C=window==null?void 0:window.myJetpackInitialState)==null?void 0:C.myJetpackVersion,referring_plugins:n})},[]);return{clearedIdentity:o,ga:t,mc:v,pageView:a,purchase:k,recordEvent:r,setGoogleAnalyticsEnabled:U,setMcAnalyticsEnabled:V,setProperties:j,tracks:M}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(O,f,s)=>{s.d(f,{Z:()=>g});var p=s("../connection/components/use-connection/index.jsx");function g(){const{apiRoot:d,apiNonce:u}=myJetpackRest,{topJetpackMenuItemUrl:c}=myJetpackInitialState,E=(0,p.Z)({apiRoot:d,apiNonce:u}),h=E.isRegistered;return{apiNonce:u,apiRoot:d,...E,isSiteConnected:h,topJetpackMenuItemUrl:c}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(O,f,s)=>{s.d(f,{Z:()=>E});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=s.n(p),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=s.n(d),c=u()(g());c.push([O.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),c.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const E=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(O,f,s)=>{s.d(f,{Z:()=>E});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=s.n(p),d=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=s.n(d),c=u()(g());c.push([O.id,'.GTxJkEnk1nQQsd85aJFX{--actions-size: 28px;--status-size: 8px;padding:calc(var(--spacing-base)*3);background:var(--jp-white);border-radius:var(--jp-border-radius);box-shadow:0 0 40px rgba(0,0,0,.08);height:100%;display:flex;flex-direction:column;box-shadow:0 0 0 1px var(--jp-gray-10) inset}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx:hover{background-color:var(--jp-white)}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid transparent}.GTxJkEnk1nQQsd85aJFX.vR8aqypsNilgpns1PWI8{box-shadow:0 0 0 1.5px var(--jp-red-60)}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*3)}.vUw8ethtp2jZxCv6_BfX{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*2);min-height:var(--actions-size);flex-wrap:wrap}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:var(--actions-size);display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:var(--status-size);height:var(--status-size);margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),c.locals={container:"GTxJkEnk1nQQsd85aJFX","is-link":"shDAGeMONr0NSur0dTAx","has-error":"vR8aqypsNilgpns1PWI8",title:"HMaSD8wdv3EFkpx0cFj6",name:"vUw8ethtp2jZxCv6_BfX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const E=c}}]);})();
