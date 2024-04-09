"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2158],{"../../packages/my-jetpack/_inc/components/product-detail-table/stories/index.stories.jsx":(M,f,e)=>{var r,m,u,y,j,C,T,D,I;e.r(f),e.d(f,{JetpackProtect:()=>t,JetpackSocial:()=>i,__namedExportsOrder:()=>d,default:()=>O,jetpackBoost:()=>n});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const E={boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"The easiest speed optimization plugin for WordPress",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],tiers:["upgraded","free"],featuresByTier:[{name:"Optimize CSS Loading",info:{content:"Move important styling information to the start of the page, which helps pages display your content sooner, so your users don\u2019t have to wait for the entire page to load. Commonly referred to as Critical CSS."},tiers:{free:{included:!1,description:"Must be done manually",info:{title:"Manual Critical CSS regeneration",content:`
							<p>To enhance the speed of your site, with this plan you will need to optimize CSS by using the Manual Critical CSS generation feature whenever you:</p>
							<ul>
								<li>Make theme changes.</li>
								<li>Write a new post/page.</li>
								<li>Edit a post/page.</li>
								<li>Activate, deactivate, or update plugins that impact your site layout or HTML structure.</li>
								<li>Change settings of plugins that impact your site layout or HTML structure.</li>
								<li>Upgrade your WordPress version if the new release includes core CSS changes.</li>
							</ul>`}},upgraded:{included:!0,description:"Automatically updated",info:{title:"Automatic Critical CSS regeneration",content:`<p>It\u2019s essential to regenerate Critical CSS to optimize your site speed whenever your HTML or CSS structure changes. Being on top of this can be tedious and time-consuming.</p>
								  <p>Boost\u2019s cloud service can automatically detect when your site needs the Critical CSS regenerated, and perform this function behind the scenes without requiring you to monitor it manually.</p>`}}}},{name:"Defer non-essential JavaScript",info:{content:'Run non-essential JavaScript after the page has loaded so that styles and images can load more quickly. Read more on <a href="#" target="_blank" rel="noreferrer" />web.dev</a>.'},tiers:{free:{included:!0},upgraded:{included:!0}}},{name:"Lazy image loading",info:{content:'Improve page loading speed by only loading images when they are required. Read more on <a href="#" target="_blank" rel="noreferrer" />web.dev</a>.'},tiers:{free:{included:!0},upgraded:{included:!0}}},{name:"Image guide",info:{content:"Discover and fix images with a suboptimal resolution, aspect ratio, or file size, improving user experience and page speed."},tiers:{free:{included:!0},upgraded:{included:!0}}},{name:"Dedicated email support",info:{content:`<p>Paid customers get dedicated email support from our world-class Happiness Engineers to help with any issue.</p>
					      <p>All other questions are handled by our team as quickly as we are able to go through the WordPress support forum.</p>`},tiers:{free:{included:!1},upgraded:{included:!0}}}],pricingForUi:{tiers:{free:{available:!0,isFree:!0},upgraded:{available:!0,wpcomProductSlug:"jetpack_boost",currencyCode:"USD",fullPrice:240,discountPrice:120,isIntroductoryOffer:!0,introductoryOffer:{intervalUnit:"year",intervalCount:1,usageLimit:null,costPerInterval:167.4,transitionAfterRenewalCount:0,shouldProrateWhenOfferEnds:!1}}}}},protect:{slug:"protect",name:"Protect",title:"Jepack Protect",description:"Stay one step ahead of threats",long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{tiers:{free:{available:!0,isFree:!0},upgraded:{available:!0,wpcomProductSlug:"jetpack_scan",currencyCode:"USD",fullPrice:120,discountPrice:60}}},tiers:["upgraded","free"],featuresByTier:[{name:"Scan for threats and vulnerabilities",tiers:{free:{included:!0,description:"Check items against database"},upgraded:{included:!0,description:"Line by line malware scanning"}}},{name:"Daily automated scans",tiers:{free:{included:!0},upgraded:{included:!0,description:"Plus on-demand manual scans"}}},{name:"Access to scan on Cloud",tiers:{free:{included:!1},upgraded:{included:!0}}},{name:"One-click auto fixes",tiers:{free:{included:!1},upgraded:{included:!0}}},{name:"Notifications",tiers:{free:{included:!1},upgraded:{included:!0}}},{name:"Severity labels",tiers:{free:{included:!1},upgraded:{included:!0}}}]},social:{slug:"social",name:"Social",title:"Jepack Social",description:"Reach your audience on social media",long_description:"Promote your content on social media by automatically publishing when you publish on your site.",status:"inactive",features:["Post to social networks","Schedule publishing","Supports the major social networks"],tiers:["advanced","basic","free"],featuresByTier:[{name:"Number of shares in 30 days",tiers:{free:{included:!0,description:"Up to 30"},basic:{included:!0,struck_description:"Up to 1,000",description:"Unlimited",info:{title:"Unlimited shares",content:"We are working on exciting new features for Jetpack Social. In the meantime, enjoy unlimited shares for a limited time!"}},advanced:{included:!0}}},{name:"Priority support",tiers:{free:{included:!1},basic:{included:!0},advanced:{included:!0}}},{name:"Schedule posting",tiers:{free:{included:!0},basic:{included:!0},advanced:{included:!0}}},{name:"Twitter, Facebook, LinkedIn & Tumblr",tiers:{free:{included:!0},basic:{included:!0},advanced:{included:!0}}},{name:"Customize publications",tiers:{free:{included:!0},basic:{included:!0},advanced:{included:!0}}},{name:"Recycle content",info:{content:"Repurpose, reuse or republish already published content."},tiers:{free:{included:!0},basic:{included:!0},advanced:{included:!0}}},{name:"Engagement optimizer",info:{content:"Enhance social media engagement with personalized posts."},tiers:{free:{included:!1},basic:{included:!1},advanced:{included:!0}}},{name:"Video sharing",info:{title:"Coming soon",content:"Upload and share videos to your social platforms."},tiers:{free:{included:!1},basic:{included:!1},advanced:{included:!0,description:"Coming soon"}}},{name:"Multi-image sharing",info:{title:"Coming soon",content:"Share multiple images at once on social media platforms."},tiers:{free:{included:!1},basic:{included:!1},advanced:{included:!0,description:"Coming soon"}}},{name:"Image generator",info:{title:"Coming soon",content:"Automatically create custom images, saving you hours of tedious work."},tiers:{free:{included:!1},basic:{included:!1},advanced:{included:!0,description:"Coming soon"}}}],pricingForUi:{tiers:{free:{available:!0,isFree:!0},basic:{available:!0,wpcomProductSlug:"jetpack_social_basic_yearly",callToAction:"Get Basic plan",currencyCode:"USD",fullPrice:120,discountPrice:12,isIntroductoryOffer:!0,introductoryOffer:{intervalUnit:"month",intervalCount:1,usageLimit:0,costPerInterval:12,transitionAfterRenewalCount:0,shouldProrateWhenOfferEnds:!1}},advanced:{available:!0,wpcomProductSlug:"jetpack_social_advanced_yearly",callToAction:"Get Advanced plan",currencyCode:"USD",fullPrice:180,discountPrice:12,isIntroductoryOffer:!0,introductoryOffer:{intervalUnit:"month",intervalCount:1,usageLimit:0,costPerInterval:12,transitionAfterRenewalCount:0,shouldProrateWhenOfferEnds:!1}}}}}};function k(x){const W=x.constructor===Array?x:[x],S=W.map(w=>({url:`my-jetpack/v1/site/products/${w}?_locale=user`,method:"GET",status:200,response:E[w]})),F=W.map(w=>({url:`my-jetpack/v1/site/products/${w}?_locale=user`,method:"POST",status:200,response:{...E[w],status:E[w].status==="active"?"inactive":"active"}}));return[...S,...F]}function R(){return k([...Object.keys(E)])}function v(){return["boost","protect","social"]}var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const O={title:"Packages/My Jetpack/Product Detail Table",component:o.Z,parameters:{layout:"centered"},decorators:[x=>(0,p.jsx)("div",{style:{maxWidth:"1120px"},children:(0,p.jsx)(x,{})})]},b=R(),n=(x=>(0,p.jsx)(o.Z,{...x,slug:"boost"})).bind({});n.parameters={mockData:b};const t=(x=>(0,p.jsx)(o.Z,{...x,slug:"protect"})).bind({});t.parameters={mockData:b};const i=(x=>(0,p.jsx)(o.Z,{...x,slug:"social"})).bind({});i.parameters={mockData:b},n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:'args => <ProductDetailTable {...args} slug="boost" />',...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}},t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:'args => <ProductDetailTable {...args} slug="protect" />',...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.source}}},i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:'args => <ProductDetailTable {...args} slug="social" />',...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const d=["jetpackBoost","JetpackProtect","JetpackSocial"]},"../../../node_modules/.pnpm/@wordpress+element@5.32.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(M,f,e)=>{e.d(f,{Z:()=>s});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o,_,h,g;const E=/<(\/)?(\w+)\s*(\/)?>/g;function k(t,l,i,d,r){return{element:t,tokenStart:l,tokenLength:i,prevOffset:d,leadingTextStart:r,children:[]}}const R=(t,l)=>{if(o=t,_=0,h=[],g=[],E.lastIndex=0,!v(l))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(p(l));return(0,c.createElement)(c.Fragment,null,...h)},v=t=>{const l=typeof t=="object",i=l&&Object.values(t);return l&&i.length&&i.every(d=>(0,c.isValidElement)(d))};function p(t){const l=O(),[i,d,r,m]=l,u=g.length,y=r>_?_:null;if(!t[d])return b(),!1;switch(i){case"no-more-tokens":if(u!==0){const{leadingTextStart:D,tokenStart:I}=g.pop();h.push(o.substr(D,I))}return b(),!1;case"self-closed":return u===0?(y!==null&&h.push(o.substr(y,r-y)),h.push(t[d]),_=r+m,!0):(U(k(t[d],r,m)),_=r+m,!0);case"opener":return g.push(k(t[d],r,m,r+m,y)),_=r+m,!0;case"closer":if(u===1)return n(r),_=r+m,!0;const j=g.pop(),C=o.substr(j.prevOffset,r-j.prevOffset);j.children.push(C),j.prevOffset=r+m;const T=k(j.element,j.tokenStart,j.tokenLength,r+m);return T.children=j.children,U(T),_=r+m,!0;default:return b(),!1}}function O(){const t=E.exec(o);if(t===null)return["no-more-tokens"];const l=t.index,[i,d,r,m]=t,u=i.length;return m?["self-closed",r,l,u]:d?["closer",r,l,u]:["opener",r,l,u]}function b(){const t=o.length-_;t!==0&&h.push(o.substr(_,t))}function U(t){const{element:l,tokenStart:i,tokenLength:d,prevOffset:r,children:m}=t,u=g[g.length-1],y=o.substr(u.prevOffset,i-u.prevOffset);y&&u.children.push(y),u.children.push((0,c.cloneElement)(l,null,...m)),u.prevOffset=r||i+d}function n(t){const{element:l,leadingTextStart:i,prevOffset:d,tokenStart:r,children:m}=g.pop(),u=t?o.substr(d,t-d):o.substr(d);u&&m.push(u),i!==null&&h.push(o.substr(i,r-i)),h.push((0,c.cloneElement)(l,null,...m))}const s=R},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(M,f,e)=>{e.d(f,{Z:()=>h});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,c.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(o.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(M,f,e)=>{e.d(f,{Z:()=>h});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,c.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(M,f,e)=>{e.d(f,{Z:()=>h});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,c.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(o.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(M,f,e)=>{e.d(f,{Z:()=>h});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,c.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,c.createElement)(o.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../connection/hooks/use-product-checkout-workflow/index.jsx":(M,f,e)=>{var l;e.d(f,{Z:()=>t});var c=e("../api/index.jsx");function o(){var d;switch(typeof window!="undefined"&&((d=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:d.calypsoEnv)){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var _=e("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),h=e("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),g=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),E=e.n(g),k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=e("../connection/components/use-connection/index.jsx"),v=e("../connection/state/store.jsx");const p=E()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:O,apiRoot:b,apiNonce:U,siteSuffix:n}=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},s=typeof window!="undefined"?(l=window==null?void 0:window.myJetpackInitialState)==null?void 0:l.adminUrl:null;function t({productSlug:i,redirectUrl:d,siteSuffix:r=n,adminUrl:m=s,connectAfterCheckout:u=!1,siteProductAvailabilityHandler:y=null,quantity:j=null,from:C,useBlogIdSuffix:T=!1}={}){p("productSlug is %s",i),p("redirectUrl is %s",d),p("siteSuffix is %s",r),p("from is %s",C);const[D,I]=(0,k.useState)(!1),{registerSite:x}=(0,_.Z)(v.t),B=(0,h.Z)(a=>a(v.t).getBlogId(),[v.t]);p("blogID is %s",B!=null?B:"undefined"),T=T&&!!B;const{isUserConnected:W,isRegistered:S,handleConnectUser:F}=(0,R.Z)({redirectUri:d,from:C}),w=(0,k.useMemo)(()=>{const a=o(),P=(!S||!W)&&u,N=P?"checkout/jetpack/":`checkout/${T?B.toString():r}/`,z=j!=null?`:-q-${j}`:"",L=new URL(`${a}${N}${i}${z}`);return P?(L.searchParams.set("connect_after_checkout",!0),L.searchParams.set("admin_url",m),L.searchParams.set("from_site_slug",r)):L.searchParams.set("site",r),L.searchParams.set("source",C),L.searchParams.set("redirect_to",d),W||L.searchParams.set("unlinked","1"),L},[S,W,u,r,j,i,C,d,m,T,B]);p("isRegistered is %s",S),p("isUserConnected is %s",W),p("connectAfterCheckout is %s",u),p("checkoutUrl is %s",w);const K=(a=null)=>Promise.resolve(y&&y()).then(P=>{if(a&&w.searchParams.set("redirect_to",a),P)return p("handleAfterRegistration: Site has a product associated"),F();p("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",w),window.location.href=w}),J=(a=null)=>{a&&w.searchParams.set("redirect_to",a),p("Redirecting to connectAfterCheckout flow: %s",w),window.location.href=w},Z=(a,P=null)=>{if(a&&a.preventDefault(),I(!0),u)return J(P);if(S)return K(P);x({registrationNonce:O,redirectUri:d}).then(()=>K(P))};return(0,k.useEffect)(()=>{c.ZP.setApiRoot(b),c.ZP.setApiNonce(U)},[]),{run:Z,isRegistered:S,hasCheckoutStarted:D}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(M,f,e)=>{e.d(f,{Z:()=>i});var c=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),_=e("../components/components/button/index.tsx"),h=e("../components/components/notice/index.tsx"),g=e("../components/components/text/index.tsx"),E=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),R=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),v=e.n(R),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),b=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),U=e("../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.ts"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=k.__,t=({cantInstallPlugin:d,onProductButtonClick:r,detail:m,isFetching:u,tier:y,trackProductButtonClick:j,preferProductName:C})=>{const{siteSuffix:T="",myJetpackCheckoutUri:D=""}=(0,b.$9)(),{name:I,featuresByTier:x=[],pricingForUi:{tiers:B},title:W,postCheckoutUrl:S,isBundle:F,hasPaidPlanForProduct:w}=m,{callToAction:K,currencyCode:J,fullPrice:Z,introductoryOffer:a,isFree:P,wpcomProductSlug:N,quantity:z=null}=B[y],L=(0,U.a)(),q=(0,p.useCallback)(()=>S||L||D,[S,L,D])(),{run:$,hasCheckoutStarted:X}=(0,E.Z)({from:"my-jetpack",productSlug:N,redirectUrl:q,connectAfterCheckout:!0,siteSuffix:T,useBlogIdSuffix:!0,quantity:z}),ee=(0,p.useCallback)(()=>{j(P),r==null||r($,m,y)},[j,r,$,m,y,P]),V=Z?Math.round(Z/12*100)/100:null,te=a!=null&&a.costPerInterval?Math.round(a.costPerInterval/12*100)/100:null,G=(a==null?void 0:a.intervalUnit)==="month"&&(a==null?void 0:a.intervalCount)===1,se=G?(0,k.gB)(s("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),V):s("/month, paid yearly","jetpack-my-jetpack",0),Y=I&&C?I:W,oe=!F&&w?(0,k.gB)(s("Install %s","jetpack-my-jetpack"),Y):(0,k.gB)(s("Get %s","jetpack-my-jetpack"),Y),ne=K||(P?s("Start for Free","jetpack-my-jetpack"):oe);return(0,n.jsxs)(c.oK,{primary:!P,children:[(0,n.jsxs)(c.NE,{children:[P?(0,n.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):!w&&(0,n.jsx)(o.Z,{price:V,offPrice:te,legend:se,currency:J,hideDiscountLabel:G,hidePriceFraction:!0}),(0,n.jsx)(_.Z,{fullWidth:!0,variant:P?"secondary":"primary",onClick:ee,isLoading:X||u,disabled:X||d||u,children:ne})]}),x.map((re,ae)=>{const{included:ce,description:Q,struck_description:H,info:A}=re.tiers[y],ie=H||Q?(0,n.jsxs)(n.Fragment,{children:[H?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("del",{children:H})," "]}):null,Q?(0,n.jsx)("strong",{children:Q}):null]}):null;return(0,n.jsx)(c.kF,{isIncluded:ce,label:ie,tooltipTitle:A==null?void 0:A.title,tooltipInfo:A!=null&&A.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:A==null?void 0:A.content}}):null,tooltipClassName:A==null?void 0:A.class},ae)})]})};t.propTypes={cantInstallPlugin:v().bool.isRequired,onProductButtonClick:v().func.isRequired,detail:v().object.isRequired,tier:v().string.isRequired,trackProductButtonClick:v().func.isRequired,preferProductName:v().bool.isRequired};const l=({slug:d,onProductButtonClick:r,trackProductButtonClick:m,isFetching:u,preferProductName:y})=>{const{fileSystemWriteAccess:j="no"}=(0,b.$9)(),{detail:C}=(0,O.Z)(d),{description:T,featuresByTier:D=[],pluginSlug:I,status:x,tiers:B=[],hasPaidPlanForProduct:W,title:S,pricingForUi:{tiers:F}}=C,w=x==="plugin_absent"&&j==="no",K=w&&(0,n.jsx)(h.Z,{level:"error",hideCloseButton:!0,title:(0,n.jsx)(g.ZP,{children:(0,k.gB)(s("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),S)}),actions:[(0,n.jsx)(_.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${I}`,isExternalLink:!0,children:s("Get plugin","jetpack-my-jetpack")})]}),J=(0,p.useMemo)(()=>D.map(a=>{var P,N,z;return{name:a==null?void 0:a.name,tooltipTitle:(P=a==null?void 0:a.info)==null?void 0:P.title,tooltipInfo:(N=a==null?void 0:a.info)!=null&&N.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:(z=a==null?void 0:a.info)==null?void 0:z.content}}):null}}),[D]),Z=a=>{const{isFree:P}=F[a];return P};return(0,n.jsxs)(n.Fragment,{children:[K,(0,n.jsx)(c.ZP,{title:T,items:J,children:B.map((a,P)=>W&&Z(a)?null:(0,n.jsx)(t,{tier:a,detail:C,isFetching:u,onProductButtonClick:r,trackProductButtonClick:m,primary:P===0,cantInstallPlugin:w,preferProductName:y},P))})]})};l.propTypes={slug:v().string.isRequired,onProductButtonClick:v().func.isRequired,trackProductButtonClick:v().func.isRequired,isFetching:v().bool.isRequired,preferProductName:v().bool.isRequired};const i=l;l.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@param {boolean}  props.isFetching              - True if there is a pending request to load the product.
@param {boolean}  props.preferProductName       - Whether to show the product name instead of the title.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0},isFetching:{description:"",type:{name:"bool"},required:!0},preferProductName:{description:"",type:{name:"bool"},required:!0}}}},"../components/components/notice/index.tsx":(M,f,e)=>{e.d(f,{Z:()=>i});var c=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),E=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=e.n(E),R=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(v),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),b={};b.insert="head",b.singleton=!1;var U=p()(O.Z,b);const n=O.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const t=d=>{switch(d){case"error":return c.Z;case"warning":return c.Z;case"info":return o.Z;case"success":return _.Z;default:return c.Z}},l=({level:d,title:r,children:m,actions:u,hideCloseButton:y,onClose:j})=>{const C=k()(n.container,n[`is-${d}`]);return(0,s.jsxs)("div",{className:C,children:[(0,s.jsx)("div",{className:n["icon-wrapper"],children:(0,s.jsx)(h.Z,{icon:t(d),className:n.icon})}),(0,s.jsxs)("div",{className:n["main-content"],children:[r&&(0,s.jsx)("div",{className:n.title,children:r}),m,u&&u.length>0&&(0,s.jsx)("div",{className:n["action-bar"],children:u.map((T,D)=>(0,s.jsx)("div",{className:n.action,children:T},D))})]}),!y&&(0,s.jsx)("button",{"aria-label":"close",className:n["close-button"],onClick:j,children:(0,s.jsx)(h.Z,{icon:g.Z})})]})};l.defaultProps={level:"info",hideCloseButton:!1};const i=l},"../../packages/my-jetpack/_inc/data/products/use-product.ts":(M,f,e)=>{e.d(f,{Z:()=>n});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../packages/my-jetpack/_inc/data/constants.ts"),_=e("../../packages/my-jetpack/_inc/data/use-simple-query.ts"),h=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts");const g=s=>Array.isArray(s)?s.map(t=>g(t)):typeof s=="object"&&s!==null?Object.fromEntries(Object.entries(s).map(([t,l])=>[t.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,"")),g(l)])):s,E=g,k=s=>s.pricingForUi.productTerm==="year"?Math.round(s.pricingForUi.fullPrice/12*100)/100:s.pricingForUi.fullPrice,R=s=>s.pricingForUi.productTerm==="year"?Math.round(s.pricingForUi.discountPrice/12*100)/100:s.pricingForUi.discountPrice,v=()=>{const{items:s}=(0,h.$9)("products");return Object.entries(s).reduce((t,[l,i])=>({...t,[l]:b(i)}),{})},p=s=>(0,_.Z)({name:o.q9,query:{path:`${o.Jk}/${s}`},options:{enabled:!1}}),O=async(s,t)=>{const{data:l}=await t();window.myJetpackInitialState.products.items[s]=l},b=s=>{const t=E(s);return t.features=t.features||[],t.supportedProducts=t.supportedProducts||[],t.pricingForUi.fullPricePerMonth=k(t),t.pricingForUi.discountPricePerMonth=R(t),t},n=s=>{const t=v(),l=t==null?void 0:t[s],{refetch:i,isLoading:d}=p(s);return{detail:l,refetch:(0,c.useCallback)(()=>O(s,i),[s,i]),isLoading:d}}},"../../packages/my-jetpack/_inc/data/use-simple-query.ts":(M,f,e)=>{e.d(f,{Z:()=>g});var c=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js"),o=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.52.0/node_modules/@wordpress/api-fetch/build-module/index.js"),_=e("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const g=({name:E,query:k,options:R,errorMessage:v})=>{const p=(0,c.a)({queryKey:[E],queryFn:()=>(0,o.Z)(k),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...R}),{error:O,isError:b,isLoading:U}=p;return(0,_.o)({infoName:E,isError:!U&&b&&O.code!=="not_connected",overrideMessage:v}),p}},"../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.ts":(M,f,e)=>{e.d(f,{a:()=>c});function c(){const o=window.location.search;return new URLSearchParams(o).has("redirect_to_referrer","1")&&document.referrer!==""?document.referrer:null}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(M,f,e)=>{e.d(f,{Z:()=>E});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(_),g=h()(o());g.push([M.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),g.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const E=g}}]);})();