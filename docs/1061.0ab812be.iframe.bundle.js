"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1061],{"../analytics/index.jsx":(A,v,n)=>{n.d(v,{Z:()=>a});var u=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),y=n.n(u);const i=y()("dops:analytics");let l,c;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function j(e,s){let o="";if(typeof e=="object"){for(const t in e)o+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);i("Bumping stats %o",e)}else o="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(s),i('Bumping stat "%s" in group "%s"',s,e);return o}function k(e,s){let o="";if(typeof e=="object"){for(const t in e)o+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);i("Built stats %o",e)}else o="&"+encodeURIComponent(e)+"="+encodeURIComponent(s),i('Built stat "%s" in group "%s"',s,e);return o}const r={initialize:function(e,s,o){r.setUser(e,s),r.setSuperProps(o),r.identifyUser()},setGoogleAnalyticsEnabled:function(e,s=null){this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=s},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,s){c={ID:e,username:s}},setSuperProps:function(e){l=e},assignSuperProps:function(e){l=Object.assign(l||{},e)},mc:{bumpStat:function(e,s){const o=j(e,s);r.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+o+"&t="+Math.random())},bumpStatWithPageView:function(e,s){const o=k(e,s);r.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+o+"&t="+Math.random())}},pageView:{record:function(e,s){r.tracks.recordPageView(e),r.ga.recordPageView(e,s)}},purchase:{record:function(e,s,o,t,m,p,d){r.ga.recordPurchase(e,s,o,t,m,p,d)}},tracks:{recordEvent:function(e,s){if(s=s||{},e.indexOf("akismet_")!==0&&e.indexOf("jetpack_")!==0){i('- Event name must be prefixed by "akismet_" or "jetpack_"');return}l&&(i("- Super Props: %o",l),s=Object.assign(s,l)),i('Record event "%s" called with props %s',e,JSON.stringify(s)),window._tkq.push(["recordEvent",e,s])},recordJetpackClick:function(e){const s=typeof e=="object"?e:{target:e};r.tracks.recordEvent("jetpack_wpa_click",s)},recordPageView:function(e){r.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){i("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};r.ga.initialized||(c&&(e={userId:"u-"+c.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),r.ga.initialized=!0)},recordPageView:function(e,s){r.ga.initialize(),i("Recording Page View ~ [URL: "+e+"] [Title: "+s+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:s}))},recordEvent:function(e,s,o,t){r.ga.initialize();let m="Recording Event ~ [Category: "+e+"] [Action: "+s+"]";typeof o!="undefined"&&(m+=" [Option Label: "+o+"]"),typeof t!="undefined"&&(m+=" [Option Value: "+t+"]"),i(m),this.googleAnalyticsEnabled&&window.ga("send","event",e,s,o,t)},recordPurchase:function(e,s,o,t,m,p,d){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:t,currency:d}),window.ga("ecommerce:addItem",{id:e,name:s,sku:o,price:m,quantity:p}),window.ga("ecommerce:send")}},identifyUser:function(){c&&window._tkq.push(["identifyUser",c.ID,c.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},a=r},"../../packages/my-jetpack/_inc/components/card/index.jsx":(A,v,n)=>{n.d(v,{U:()=>m,Z:()=>d});var u=n("../components/components/text/index.tsx"),y=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=n.n(y),l=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),c=n.n(l),j=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(k),a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss"),e={};e.insert="head",e.singleton=!1;var s=r()(a.Z,e);const o=a.Z.locals||{};var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=f=>{const{children:C,className:O}=f,h=i()(o.container,O);return(0,t.jsx)("div",{className:h,children:C})};m.displayName="CardWrapper";const p=f=>{const{title:C,headerRightContent:O,className:h,children:x}=f;return(0,t.jsxs)(m,{className:h,children:[(0,t.jsxs)("div",{className:o.title,children:[(0,t.jsx)("div",{className:o.name,children:(0,t.jsx)(u.ZP,{variant:"title-medium",children:C})}),O]}),x]})};p.displayName="Card",p.propTypes={children:c().node,title:c().string.isRequired,className:c().string,headerRightContent:c().node};const d=p;m.__docgenInfo={description:"",methods:[],displayName:"CardWrapper"},p.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{description:"",type:{name:"node"},required:!1},title:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},headerRightContent:{description:"",type:{name:"node"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-card/index.jsx":(A,v,n)=>{n.d(v,{ZP:()=>x,bY:()=>C});var u=n("../components/components/button/index.tsx"),y=n("../../../node_modules/.pnpm/@wordpress+components@25.14.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),i=n("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),l=n("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),c=n("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js"),j=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=n.n(j),r=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=n.n(r),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=n("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),o=n("../../packages/my-jetpack/_inc/components/card/index.jsx"),t=n("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),m=n("../../packages/my-jetpack/_inc/components/product-card/status.jsx"),p=n("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=i.__,C={[t.N.ACTIVE]:f("Active","jetpack-my-jetpack"),[t.N.INACTIVE]:f("Inactive","jetpack-my-jetpack"),[t.N.NEEDS_PURCHASE]:f("Inactive","jetpack-my-jetpack"),[t.N.NEEDS_PURCHASE_OR_FREE]:f("Inactive","jetpack-my-jetpack"),[t.N.ERROR]:f("Error","jetpack-my-jetpack"),[t.N.CAN_UPGRADE]:f("Active","jetpack-my-jetpack")},O=({items:R=[],showInstall:w=!1,onInstall:I,showActivate:P=!1,showDeactivate:S=!1,onActivate:M,onDeactivate:b})=>(0,d.jsx)(y.Z,{popoverProps:{noArrow:!1,placement:"bottom-end"},renderToggle:({isOpen:D,onToggle:g})=>(0,d.jsx)(u.Z,{variant:"tertiary",size:"small",icon:l.Z,onClick:g,"aria-expanded":D}),renderContent:({onClose:D})=>(0,d.jsxs)(d.Fragment,{children:[R.map(g=>(0,d.jsx)(u.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:g==null?void 0:g.icon,onClick:()=>{var _;D(),(_=g==null?void 0:g.onClick)==null||_.call(g)},children:g==null?void 0:g.label})),w&&(0,d.jsx)(u.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:c.Z,onClick:()=>{D(),I==null||I()},children:f("Install Plugin","jetpack-my-jetpack")}),P&&(0,d.jsx)(u.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",onClick:()=>{D(),M==null||M()},children:f("Activate Plugin","jetpack-my-jetpack")}),S&&(0,d.jsx)(u.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",onClick:()=>{D(),b==null||b()},children:f("Deactivate Plugin","jetpack-my-jetpack")})]})});O.displayName="Menu",O.propTypes={onActivate:a().func,onDeactivate:a().func,showActivate:a().bool,showDeactivate:a().bool,showInstall:a().bool,items:a().arrayOf(a().shape({label:a().string,icon:a().node,onClick:a().func})),onInstall:a().func},O.defaultProps={onActivate:()=>{},onDeactivate:()=>{},showActivate:!1,showDeactivate:!1};const h=R=>{const{name:w,Description:I,status:P,onActivate:S,isFetching:M,isDataLoading:b,isInstallingStandalone:D,isDeactivatingStandalone:g,slug:_,additionalActions:W,children:B,showMenu:Z=!1,showActivateOption:K=!1,showDeactivateOption:H=!1,showInstallOption:V=!1,menuItems:F=[],onInstallStandalone:N,onActivateStandalone:T,onDeactivateStandalone:L}=R,G=P===t.N.ERROR,U=P===t.N.ABSENT||P===t.N.ABSENT_WITH_PLAN,Q=P===t.N.NEEDS_PURCHASE||P===t.N.NEEDS_PURCHASE_OR_FREE,z=k()({[p.Z.plugin_absent]:U,[p.Z["is-purchase-required"]]:Q,[p.Z["is-link"]]:U,[p.Z["has-error"]]:G}),{recordEvent:E}=(0,s.Z)(),J=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_activate_click",{product:_}),S()},[_,S,E]),X=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_add_click",{product:_})},[_,E]),Y=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_manage_click",{product:_})},[_,E]),q=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_fixconnection_click",{product:_})},[_,E]),$=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_learnmore_click",{product:_})},[_,E]),ee=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_install_standalone_plugin_click",{product:_}),N()},[_,N,E]),ne=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_activate_standalone_plugin_click",{product:_}),T()},[_,T,E]),ae=(0,e.useCallback)(()=>{E("jetpack_myjetpack_product_card_deactivate_standalone_plugin_click",{product:_}),L()},[_,L,E]);return(0,d.jsxs)(o.Z,{title:w,className:k()(p.Z.container,z),headerRightContent:Z&&(0,d.jsx)(O,{items:F,showActivate:K,showDeactivate:H,onActivate:ne,onDeactivate:ae,showInstall:V,onInstall:ee}),children:[(0,d.jsx)(I,{}),b?(0,d.jsx)("span",{className:p.Z.loading,children:f("Loading\u2026","jetpack-my-jetpack")}):B,(0,d.jsxs)("div",{className:p.Z.actions,children:[(0,d.jsx)(t.Z,{...R,onActivate:J,onFixConnection:q,onManage:Y,onAdd:X,onLearnMore:$,className:p.Z.button,additionalActions:W}),!U&&(0,d.jsx)(m.Z,{status:P,isFetching:g,isInstallingStandalone:D,isDeactivatingStandalone:M})]})]})};h.displayName="ProductCard",h.propTypes={children:a().node,name:a().string.isRequired,Description:a().func.isRequired,admin:a().bool.isRequired,isFetching:a().bool,isInstallingStandalone:a().bool,isDeactivatingStandalone:a().bool,isManageDisabled:a().bool,onActivate:a().func,slug:a().string.isRequired,showMenu:a().bool,showActivateOption:a().bool,showDeactivateOption:a().bool,showInstallOption:a().bool,menuItems:a().arrayOf(a().shape({label:a().string,icon:a().node,onClick:a().func})),additionalActions:a().array,onInstallStandalone:a().func,onActivateStandalone:a().func,onDeactivateStandalone:a().func,status:a().oneOf([t.N.ACTIVE,t.N.INACTIVE,t.N.ERROR,t.N.ABSENT,t.N.ABSENT_WITH_PLAN,t.N.NEEDS_PURCHASE,t.N.NEEDS_PURCHASE_OR_FREE,t.N.CAN_UPGRADE]).isRequired},h.defaultProps={isFetching:!1,isInstallingStandalone:!1,isDeactivatingStandalone:!1,onActivate:()=>{},showMenu:!1,showActivateOption:!1,showDeactivateOption:!1,showInstallOption:!1,menuItems:[]};const x=h;h.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{isFetching:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isInstallingStandalone:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isDeactivatingStandalone:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onActivate:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},showMenu:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showActivateOption:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showDeactivateOption:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showInstallOption:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},icon:{name:"node",required:!1},onClick:{name:"func",required:!1}}}},required:!1},children:{description:"",type:{name:"node"},required:!1},name:{description:"",type:{name:"string"},required:!0},Description:{description:"",type:{name:"func"},required:!0},admin:{description:"",type:{name:"bool"},required:!0},isManageDisabled:{description:"",type:{name:"bool"},required:!1},slug:{description:"",type:{name:"string"},required:!0},additionalActions:{description:"",type:{name:"array"},required:!1},onInstallStandalone:{description:"",type:{name:"func"},required:!1},onActivateStandalone:{description:"",type:{name:"func"},required:!1},onDeactivateStandalone:{description:"",type:{name:"func"},required:!1},status:{description:"",type:{name:"enum",value:[{value:"'active'",computed:!1},{value:"'inactive'",computed:!1},{value:"'error'",computed:!1},{value:"'plugin_absent'",computed:!1},{value:"'plugin_absent_with_plan'",computed:!1},{value:"'needs_purchase'",computed:!1},{value:"'needs_purchase_or_free'",computed:!1},{value:"'can_upgrade'",computed:!1}]},required:!0}}}},"../../packages/my-jetpack/_inc/components/product-card/status.jsx":(A,v,n)=>{n.d(v,{Z:()=>e});var u=n("../components/components/text/index.tsx"),y=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=n.n(y),l=n("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),c=n("../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),j=n("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),k=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=s=>{switch(s){case l.N.ACTIVE:case l.N.CAN_UPGRADE:return c.Z.active;case l.N.INACTIVE:case l.N.NEEDS_PURCHASE:case l.N.NEEDS_PURCHASE_OR_FREE:return c.Z.inactive;case l.N.ERROR:return c.Z.error;default:return""}},a=({status:s,isFetching:o,isInstallingStandalone:t,isDeactivatingStandalone:m})=>{const p=j.bY[s],d=i()(c.Z.status,r(s),{[c.Z["is-fetching"]]:o||t||m});return(0,k.jsx)(u.ZP,{variant:"label",className:d,children:p})};a.displayName="Status";const e=a;a.__docgenInfo={description:"",methods:[],displayName:"Status"}},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(A,v,n)=>{n.d(v,{Z:()=>c});var u=n("../analytics/index.jsx"),y=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=n("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const c=()=>{var R;const{isUserConnected:j,connectedPlugins:k,userConnectionData:r={}}=(0,i.Z)(),{login:a,ID:e}=((R=r.currentUser)==null?void 0:R.wpcomUser)||{};(0,y.useEffect)(()=>{j&&e&&a&&u.Z.initialize(e,a)},[e,j,a]);const s=Object.keys(k||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:o,ga:t,mc:m,pageView:p,purchase:d,setGoogleAnalyticsEnabled:f,setMcAnalyticsEnabled:C,setProperties:O,tracks:h}=u.Z,x=(0,y.useCallback)((w,I)=>{var P;h.recordEvent(w,{...I,version:(P=window==null?void 0:window.myJetpackInitialState)==null?void 0:P.myJetpackVersion,referring_plugins:s})},[]);return{clearedIdentity:o,ga:t,mc:m,pageView:p,purchase:d,recordEvent:x,setGoogleAnalyticsEnabled:f,setMcAnalyticsEnabled:C,setProperties:O,tracks:h}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(A,v,n)=>{n.d(v,{Z:()=>y});var u=n("../connection/components/use-connection/index.jsx");function y(){const{apiRoot:i,apiNonce:l}=myJetpackRest,{topJetpackMenuItemUrl:c}=myJetpackInitialState,j=(0,u.Z)({apiRoot:i,apiNonce:l}),k=j.isRegistered;return{apiNonce:l,apiRoot:i,...j,isSiteConnected:k,topJetpackMenuItemUrl:c}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss":(A,v,n)=>{n.d(v,{Z:()=>j});var u=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=n.n(u),i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=n.n(i),c=l()(y());c.push([A.id,".pecv05IGfM82FIHp9Q4E{padding:calc(var(--spacing-base)*3);background:var(--jp-white);border:1px solid var(--jp-gray-5);border-radius:var(--jp-border-radius-rna);box-shadow:0 4px 12px 0px rgba(0,0,0,.06);height:100%;display:flex;flex-direction:column}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid rgba(0,0,0,0)}.pecv05IGfM82FIHp9Q4E.Hv659vLLaZ8SaSWyxtAZ{box-shadow:0 0 0 1.5px var(--jp-red-60)}.i1rUritEO7pQO4fsj9PF{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:var(--spacing-base)}.i1rUritEO7pQO4fsj9PF h3{font-weight:700}.YP7299HZXBCUg1n1NUqU{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}",""]),c.locals={container:"pecv05IGfM82FIHp9Q4E","is-link":"jgcGPDlYaLnB6QcRWSWR","has-error":"Hv659vLLaZ8SaSWyxtAZ",title:"i1rUritEO7pQO4fsj9PF",name:"YP7299HZXBCUg1n1NUqU"};const j=c}}]);})();