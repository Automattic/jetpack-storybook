"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5189],{"../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(R,f,a)=>{a.d(f,{Z:()=>b});var e=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let p,i,l,_;const j=/<(\/)?(\w+)\s*(\/)?>/g;function w(r,d,g,m,n){return{element:r,tokenStart:d,tokenLength:g,prevOffset:m,leadingTextStart:n,children:[]}}const A=(r,d)=>{if(p=r,i=0,l=[],_=[],j.lastIndex=0,!v(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(y(d));return(0,e.createElement)(e.Fragment,null,...l)},v=r=>{const d=typeof r=="object",g=d&&Object.values(r);return d&&g.length&&g.every(m=>(0,e.isValidElement)(m))};function y(r){const d=c(),[g,m,n,u]=d,s=_.length,k=n>i?i:null;if(!r[m])return o(),!1;switch(g){case"no-more-tokens":if(s!==0){const{leadingTextStart:U,tokenStart:D}=_.pop();l.push(p.substr(U,D))}return o(),!1;case"self-closed":return s===0?(k!==null&&l.push(p.substr(k,n-k)),l.push(r[m]),i=n+u,!0):(t(w(r[m],n,u)),i=n+u,!0);case"opener":return _.push(w(r[m],n,u,n+u,k)),i=n+u,!0;case"closer":if(s===1)return h(n),i=n+u,!0;const P=_.pop(),I=p.substr(P.prevOffset,n-P.prevOffset);P.children.push(I),P.prevOffset=n+u;const T=w(P.element,P.tokenStart,P.tokenLength,n+u);return T.children=P.children,t(T),i=n+u,!0;default:return o(),!1}}function c(){const r=j.exec(p);if(r===null)return["no-more-tokens"];const d=r.index,[g,m,n,u]=r,s=g.length;return u?["self-closed",n,d,s]:m?["closer",n,d,s]:["opener",n,d,s]}function o(){const r=p.length-i;r!==0&&l.push(p.substr(i,r))}function t(r){const{element:d,tokenStart:g,tokenLength:m,prevOffset:n,children:u}=r,s=_[_.length-1],k=p.substr(s.prevOffset,g-s.prevOffset);k&&s.children.push(k),s.children.push((0,e.cloneElement)(d,null,...u)),s.prevOffset=n||g+m}function h(r){const{element:d,leadingTextStart:g,prevOffset:m,tokenStart:n,children:u}=_.pop(),s=r?p.substr(m,r-m):p.substr(m);s&&u.push(s),g!==null&&l.push(p.substr(g,n-g)),l.push((0,e.cloneElement)(d,null,...u))}const b=A},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(R,f,a)=>{a.d(f,{Z:()=>l});var e=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=a("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,e.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(p.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,f,a)=>{a.d(f,{Z:()=>l});var e=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=a("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,e.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(p.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../plugins/protect/src/js/api.js":(R,f,a)=>{a.d(f,{Z:()=>_});var e=a("../../../node_modules/.pnpm/@wordpress+api-fetch@6.48.0/node_modules/@wordpress/api-fetch/build-module/index.js"),p=a("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),i=a.n(p);const _={fetchWaf:()=>(0,e.Z)({path:"jetpack-protect/v1/waf",method:"GET"}).then(i()),toggleWaf:()=>(0,e.Z)({method:"POST",path:"jetpack-protect/v1/toggle-waf"}),updateWaf:j=>(0,e.Z)({method:"POST",path:"jetpack/v4/waf",data:j}),wafSeen:()=>(0,e.Z)({path:"jetpack-protect/v1/waf-seen",method:"POST"}),wafUpgradeSeen:()=>(0,e.Z)({path:"jetpack-protect/v1/waf-upgrade-seen",method:"POST"}),fetchOnboardingProgress:()=>(0,e.Z)({path:"jetpack-protect/v1/onboarding-progress",method:"GET"}),completeOnboardingSteps:j=>(0,e.Z)({path:"jetpack-protect/v1/onboarding-progress",method:"POST",data:{step_ids:j}})}},"../../plugins/protect/src/js/components/interstitial-page/stories/mock.js":(R,f,a)=>{a.d(f,{r:()=>e});const e={apiRoot:"http://localhost/wp-json/",apiNonce:"f2d2d42e2a",registrationNonce:"c923ca109f",status:{last_checked:"2022-05-05 20:56:27",num_threats:6,num_plugins_threats:3,num_themes_threats:3,status:"scheduled",wordpress:{version:"5.9.3",threats:[]},themes:[{slug:"twentynineteen",version:"2.2",threats:[{id:"1fd6742e-1a32-446d-be3d-7cce44f8f416",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"}]},{slug:"twentytwenty",version:"1.9",threats:[{id:"1ac912c1-5e29-41ac-8f76-a062de254c09",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"},{id:"6e61b246-5af1-4a4f-9ca8-a8c87eb2e499",title:"Sample Threat number 2 with a long title",fixed_in:"3.14.2"}]},{slug:"twentytwentyone",version:"1.5",threats:[]},{slug:"twentytwentytwo",version:"1.1",threats:[]}],plugins:[{slug:"akismet/akismet.php",version:"4.2.3",threats:[{id:"36e3817f-7fcc-4a97-9ea2-e5e3b01f93a1",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"}]},{slug:"always-use-jetpack-open-graph/always-use-jetpack-open-graph.php",version:"1.0.2-alpha",threats:[{id:"d442acac-4394-45e4-b6bb-adf4a40960fb",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"},{id:"0c980e1c-d4dc-4b96-b0ce-282289674f55",title:"Sample Threat number 2 with a long title",fixed_in:"3.14.2"}]},{slug:"core-control/core-control.php",version:"1.2.1",threats:[]},{slug:"creative-mail-by-constant-contact/creative-mail-plugin.php",version:"1.4.9",threats:[]},{slug:"gutenberg/gutenberg.php",version:"12.7.1",threats:[]},{slug:"jetpack/jetpack.php",version:"11.0-a.2",threats:[]},{slug:"backup/jetpack-backup.php",version:"1.3.0-alpha",threats:[]},{slug:"beta/jetpack-beta.php",version:"3.1.2-alpha",threats:[]},{slug:"boost/jetpack-boost.php",version:"1.4.3-alpha",threats:[]},{slug:"jetpack-boost/jetpack-boost.php",version:"1.4.0",threats:[]},{slug:"zero-bs-crm/ZeroBSCRM.php",version:"4.9.0",threats:[]},{slug:"debug-helper/plugin.php",version:"1.4.0-alpha",threats:[]},{slug:"protect/jetpack-protect.php",version:"0.1.0-alpha",threats:[]},{slug:"search/jetpack-search.php",version:"0.1.0-alpha",threats:[]},{slug:"social/jetpack-social.php",version:"0.1.0-alpha",threats:[]},{slug:"starter-plugin/jetpack-starter-plugin.php",version:"0.1.0-alpha",threats:[]},{slug:"qr-block/qr-block.php",version:"0.0.10",threats:[]},{slug:"query-monitor/query-monitor.php",version:"3.8.2",threats:[]},{slug:"vaultpress/vaultpress.php",version:"2.2.2-alpha",threats:[]},{slug:"wp-crontrol/wp-crontrol.php",version:"1.12.0",threats:[]}]},installedPlugins:{"akismet/akismet.php":{Name:"Akismet Anti-Spam",PluginURI:"https://akismet.com/",Version:"4.2.3",Description:"Used by millions, Akismet is quite possibly the best way in the world to <strong>protect your blog from spam</strong>. Your site is fully configured and being protected, even while you sleep.",Author:"Automattic",AuthorURI:"https://automattic.com/wordpress-plugins/",TextDomain:"akismet",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Akismet Anti-Spam",AuthorName:"Automattic",active:!0},"always-use-jetpack-open-graph/always-use-jetpack-open-graph.php":{Name:"Always Use Open Graph with Jetpack",PluginURI:"https://kraft.blog/",Version:"1.0.2-alpha",Description:"Jetpack automatically disables its Open Graph tags when there's a known plugin that already adds Open Graph tags, which is good. Sometimes, though, you might want to use Jetpack's version instead. Even if you disable the tags in the conflicting plugin, Jetpack won't add Open Graph tags without being told to do so.",Author:"Brandon Kraft",AuthorURI:"",TextDomain:"always-use-jetpack-open-graph",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Always Use Open Graph with Jetpack",AuthorName:"Brandon Kraft",active:!1},"core-control/core-control.php":{Name:"Core Control",PluginURI:"https://dd32.id.au/wordpress-plugins/core-control/",Version:"1.2.1",Description:"Core Control is a set of plugin modules which can be used to control certain aspects of the WordPress control.",Author:"Dion Hulse",AuthorURI:"https://dd32.id.au/",TextDomain:"core-control",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Core Control",AuthorName:"Dion Hulse",active:!1},"creative-mail-by-constant-contact/creative-mail-plugin.php":{Name:"Creative Mail by Constant Contact",PluginURI:"https://wordpress.org/plugins/creative-mail-by-constant-contact/",Version:"1.4.9",Description:"Free email marketing designed specifically for WordPress, Jetpack and WooCommerce. Send newsletters, promotions, updates and transactional e-commerce emails. Simple and easy, powered by Constant Contact\u2019s rock solid reliability.",Author:"Constant Contact",AuthorURI:"https://www.constantcontact.com",TextDomain:"creative-mail-by-constant-contact",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Creative Mail by Constant Contact",AuthorName:"Constant Contact",active:!1},"gutenberg/gutenberg.php":{Name:"Gutenberg",PluginURI:"https://github.com/WordPress/gutenberg",Version:"12.7.1",Description:"Printing since 1440. This is the development plugin for the new block editor in core.",Author:"Gutenberg Team",AuthorURI:"",TextDomain:"gutenberg",DomainPath:"",Network:!1,RequiresWP:"5.8",RequiresPHP:"5.6",UpdateURI:"",Title:"Gutenberg",AuthorName:"Gutenberg Team",active:!1},"jetpack/jetpack.php":{Name:"Jetpack",PluginURI:"https://jetpack.com",Version:"11.0-a.2",Description:"Security, performance, and marketing tools made by WordPress experts. Jetpack keeps your site protected so you can focus on more important things.",Author:"Automattic",AuthorURI:"https://jetpack.com",TextDomain:"jetpack",DomainPath:"",Network:!1,RequiresWP:"5.9",RequiresPHP:"5.6",UpdateURI:"",Title:"Jetpack",AuthorName:"Automattic",active:!1},"backup/jetpack-backup.php":{Name:"Jetpack Backup",PluginURI:"https://jetpack.com/jetpack-backup",Version:"1.3.0-alpha",Description:"Easily restore or download a backup of your site from a specific moment in time.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-backup",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Backup",AuthorName:"Automattic",active:!0},"beta/jetpack-beta.php":{Name:"Jetpack Beta Tester",PluginURI:"https://jetpack.com/beta/",Version:"3.1.2-alpha",Description:"Use the Beta plugin to get a sneak peek at new features and test them on your site.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-beta",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"https://jetpack.com/download-jetpack-beta/",Title:"Jetpack Beta Tester",AuthorName:"Automattic",active:!1},"boost/jetpack-boost.php":{Name:"Jetpack Boost",PluginURI:"https://jetpack.com/boost",Version:"1.4.3-alpha",Description:"Boost your WordPress site's performance, from the creators of Jetpack",Author:"Automattic - Website Speed and Performance team",AuthorURI:"https://automattic.com",TextDomain:"jetpack-boost",DomainPath:"/languages",Network:!1,RequiresWP:"5.5",RequiresPHP:"7.0",UpdateURI:"",Title:"Jetpack Boost",AuthorName:"Automattic - Website Speed and Performance team",active:!1},"jetpack-boost/jetpack-boost.php":{Name:"Jetpack Boost",PluginURI:"https://jetpack.com/boost",Version:"1.4.0",Description:"Boost your WordPress site's performance, from the creators of Jetpack",Author:"Automattic",AuthorURI:"https://automattic.com",TextDomain:"jetpack-boost",DomainPath:"/languages",Network:!1,RequiresWP:"5.5",RequiresPHP:"7.0",UpdateURI:"",Title:"Jetpack Boost",AuthorName:"Automattic",active:!0},"zero-bs-crm/ZeroBSCRM.php":{Name:"Jetpack CRM",PluginURI:"https://jetpackcrm.com",Version:"4.9.0",Description:"Jetpack CRM is the simplest CRM for WordPress. Self host your own Customer Relationship Manager using WP.",Author:"Automattic",AuthorURI:"https://jetpackcrm.com",TextDomain:"zero-bs-crm",DomainPath:"",Network:!1,RequiresWP:"5.0",RequiresPHP:"5.6",UpdateURI:"",Title:"Jetpack CRM",AuthorName:"Automattic",active:!1},"debug-helper/plugin.php":{Name:"Jetpack Debug Tools",PluginURI:"",Version:"1.4.0-alpha",Description:"Give me a Jetpack connection, and I'll break it every way possible.",Author:"Automattic - Jetpack Crew",AuthorURI:"",TextDomain:"jetpack",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Debug Tools",AuthorName:"Automattic - Jetpack Crew",active:!1},"protect/jetpack-protect.php":{Name:"Jetpack Protect",PluginURI:"https://wordpress.org/plugins/jetpack-protect",Version:"0.1.0-alpha",Description:"Security tools that keep your site safe and sound, from posts to plugins.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-protect",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Protect",AuthorName:"Automattic",active:!0},"search/jetpack-search.php":{Name:"Jetpack Search",PluginURI:"https://jetpack.com/search/",Version:"0.1.0-alpha",Description:"A cloud-powered replacement for WordPress' search.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-search",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Search",AuthorName:"Automattic",active:!1},"social/jetpack-social.php":{Name:"Jetpack Social",PluginURI:"https://wordpress.org/plugins/jetpack-social",Version:"0.1.0-alpha",Description:"Share your site\u2019s posts on several social media networks automatically when you publish a new post.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-social",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Social",AuthorName:"Automattic",active:!0},"starter-plugin/jetpack-starter-plugin.php":{Name:"Jetpack Starter Plugin",PluginURI:"https://wordpress.org/plugins/jetpack-starter-plugin",Version:"0.1.0-alpha",Description:"plugin--description.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-starter-plugin",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Starter Plugin",AuthorName:"Automattic",active:!1},"qr-block/qr-block.php":{Name:"QR Block",PluginURI:"",Version:"0.0.10",Description:"Another amazing QR Code block for Gutenberg.",Author:"retrofox",AuthorURI:"",TextDomain:"qr-block",DomainPath:"",Network:!1,RequiresWP:"5.8",RequiresPHP:"7.0",UpdateURI:"",Title:"QR Block",AuthorName:"retrofox",active:!1},"query-monitor/query-monitor.php":{Name:"Query Monitor",PluginURI:"https://querymonitor.com/",Version:"3.8.2",Description:"The Developer Tools Panel for WordPress.",Author:"John Blackbourn",AuthorURI:"https://querymonitor.com/",TextDomain:"query-monitor",DomainPath:"/languages/",Network:!1,RequiresWP:"",RequiresPHP:"5.3.6",UpdateURI:"",Title:"Query Monitor",AuthorName:"John Blackbourn",active:!1},"vaultpress/vaultpress.php":{Name:"VaultPress",PluginURI:"http://vaultpress.com/?utm_source=plugin-uri&amp;utm_medium=plugin-description&amp;utm_campaign=1.0",Version:"2.2.2-alpha",Description:'Protect your content, themes, plugins, and settings with <strong>realtime backup</strong> and <strong>automated security scanning</strong> from <a href="http://vaultpress.com/?utm_source=wp-admin&amp;utm_medium=plugin-description&amp;utm_campaign=1.0" rel="nofollow">VaultPress</a>. Activate, enter your registration key, and never worry again. <a href="http://vaultpress.com/help/?utm_source=wp-admin&amp;utm_medium=plugin-description&amp;utm_campaign=1.0" rel="nofollow">Need some help?</a>',Author:"Automattic",AuthorURI:"http://vaultpress.com/?utm_source=author-uri&amp;utm_medium=plugin-description&amp;utm_campaign=1.0",TextDomain:"vaultpress",DomainPath:"/languages/",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"VaultPress",AuthorName:"Automattic",active:!1},"wp-crontrol/wp-crontrol.php":{Name:"WP Crontrol",PluginURI:"https://wordpress.org/plugins/wp-crontrol/",Version:"1.12.0",Description:"WP Crontrol enables you to view and control what's happening in the WP-Cron system.",Author:"John Blackbourn & crontributors",AuthorURI:"https://github.com/johnbillion/wp-crontrol/graphs/contributors",TextDomain:"wp-crontrol",DomainPath:"/languages/",Network:!1,RequiresWP:"",RequiresPHP:"5.3.6",UpdateURI:"",Title:"WP Crontrol",AuthorName:"John Blackbourn & crontributors",active:!0}},installedThemes:{twentynineteen:{Name:"Twenty Nineteen",ThemeURI:"https://wordpress.org/themes/twentynineteen/",Author:"the WordPress team",Version:"2.2",Template:"",Status:"publish",TextDomain:"twentynineteen",RequiresWP:"4.9.6",RequiresPHP:"5.2.4",active:!1,is_block_theme:!1},twentytwenty:{Name:"Twenty Twenty",ThemeURI:"https://wordpress.org/themes/twentytwenty/",Author:"the WordPress team",Version:"1.9",Template:"",Status:"publish",TextDomain:"twentytwenty",RequiresWP:"4.7",RequiresPHP:"5.2.4",active:!1,is_block_theme:!1},twentytwentyone:{Name:"Twenty Twenty-One",ThemeURI:"https://wordpress.org/themes/twentytwentyone/",Author:"the WordPress team",Version:"1.5",Template:"",Status:"publish",TextDomain:"twentytwentyone",RequiresWP:"5.3",RequiresPHP:"5.6",active:!1,is_block_theme:!1},twentytwentytwo:{Name:"Twenty Twenty-Two",ThemeURI:"https://wordpress.org/themes/twentytwentytwo/",Author:"the WordPress team",Version:"1.1",Template:"",Status:"publish",TextDomain:"twentytwentytwo",RequiresWP:"5.9",RequiresPHP:"5.6",active:!0,is_block_theme:!0}},wpVersion:"5.9.3",adminUrl:"http://localhost/wp-admin/admin.php?page=jetpack-protect",siteSuffix:"localhost",jetpackScan:{slug:"scan",name:"Scan",title:"Jetpack Scan",description:"Stay one step ahead of threats",long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],status:"needs_purchase",pricingForUi:{productId:2106,productName:"Jetpack Scan Daily",productSlug:"jetpack_scan",description:"",productType:"jetpack",available:!0,billingProductSlug:"jetpack-scan",isDomainRegistration:!1,costDisplay:"C$155.40",combinedCostDisplay:"C$155.40",cost:155.4,costSmallestUnit:15540,currencyCode:"CAD",priceTierList:[],priceTierUsageQuantity:null,productTerm:"year",priceTiers:[],priceTierSlug:"",introductoryOffer:{intervalUnit:"year",intervalCount:1,usageLimit:null,costPerInterval:83.4,transitionAfterRenewalCount:0,shouldProrateWhenOfferEnds:!1}},is_bundle:!1,is_upgradable_by_bundle:["security"],supported_products:["scan"],wpcom_product_slug:"jetpack_scan",requires_user_connection:!0,has_required_plan:!1,manage_url:"",post_activation_url:"",class:"Automattic\\Jetpack\\My_Jetpack\\Products\\Scan"}}},"../../plugins/protect/src/js/components/pricing-table/index.jsx":(R,f,a)=>{a.d(f,{Z:()=>b});var e=a("../components/components/pricing-table/index.tsx"),p=a("../components/components/product-price/index.tsx"),i=a("../components/components/button/index.tsx"),l=a("../connection/components/use-connection/index.jsx"),_=a("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),j=a("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),w=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=a("../../plugins/protect/src/js/hooks/use-analytics-tracks/index.js"),v=a("../../plugins/protect/src/js/hooks/use-protect-data/index.js"),y=a("../../plugins/protect/src/js/hooks/use-waf-data/index.jsx"),c=a("../../plugins/protect/src/js/state/store.js"),o=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const t=j.__,h=({onScanAdd:r})=>{const{handleRegisterSite:d,registrationError:g}=(0,l.Z)({skipUserConnection:!0}),{refreshPlan:m,refreshStatus:n}=(0,_.Z)(c.t),[u,s]=(0,w.useState)(!1),[k,P]=(0,w.useState)(!1),{jetpackScan:I}=(0,v.Z)(),{refreshWaf:T}=(0,y.Z)(),{pricingForUi:U}=I,{introductoryOffer:D,currencyCode:E="USD"}=U,W=U.cost?Math.ceil(U.cost/12*100)/100:null,C=D!=null&&D.costPerInterval?Math.ceil(D.costPerInterval/12*100)/100:null,{recordEvent:x,recordEventHandler:O}=(0,A.Z)(),S=O("jetpack_protect_pricing_table_get_scan_link_click",()=>{P(!0),r()}),N=(0,w.useCallback)(()=>{x("jetpack_protect_connected_product_activated"),s(!0),d().then(()=>s(!1)).then(()=>{m(),T(),n(!0)})},[d,x,T,m,n]),M={title:t("Stay one step ahead of threats","jetpack-protect"),items:[{name:t("Scan for threats and vulnerabilities","jetpack-protect")},{name:t("Daily automated scans","jetpack-protect")},{name:t("Web Application Firewall","jetpack-protect")},{name:t("Brute force protection","jetpack-protect")},{name:t("Access to scan on Cloud","jetpack-protect")},{name:t("One-click auto fixes","jetpack-protect")},{name:t("Notifications","jetpack-protect")},{name:t("Severity labels","jetpack-protect")}]};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(e.ZP,{...M,children:[(0,o.jsxs)(e.oK,{primary:!0,children:[(0,o.jsxs)(e.NE,{children:[(0,o.jsx)(p.Z,{price:W,offPrice:C,leyend:t("/month, billed yearly","jetpack-protect"),currency:E,hideDiscountLabel:!1}),(0,o.jsx)(i.Z,{fullWidth:!0,onClick:S,isLoading:k,disabled:u||k,children:t("Get Jetpack Protect","jetpack-protect")})]}),(0,o.jsx)(e.kF,{isIncluded:!0,label:(0,o.jsx)("strong",{children:t("Line by line malware scanning","jetpack-protect")})}),(0,o.jsx)(e.kF,{isIncluded:!0,label:(0,o.jsx)("strong",{children:t("Plus on-demand manual scans","jetpack-protect")})}),(0,o.jsx)(e.kF,{isIncluded:!0,label:(0,o.jsx)("strong",{children:t("Automatic protection and rule updates","jetpack-protect")})}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0})]}),(0,o.jsxs)(e.oK,{children:[(0,o.jsxs)(e.NE,{children:[(0,o.jsx)(p.Z,{price:0,leyend:t("Free forever","jetpack-protect"),currency:E,hidePriceFraction:!0}),(0,o.jsx)(i.Z,{fullWidth:!0,variant:"secondary",onClick:N,isLoading:u,disabled:u||k,error:g?t("An error occurred. Please try again.","jetpack-protect"):null,children:t("Start for free","jetpack-protect")})]}),(0,o.jsx)(e.kF,{isIncluded:!0,label:t("Check items against database","jetpack-protect")}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0,label:t("Manual rules only","jetpack-protect")}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!1}),(0,o.jsx)(e.kF,{isIncluded:!1}),(0,o.jsx)(e.kF,{isIncluded:!1}),(0,o.jsx)(e.kF,{isIncluded:!1})]})]})})},b=h;h.__docgenInfo={description:`Product Detail component.

@param {object} props                 - Component props
@param {Function} props.onScanAdd     - Callback when adding paid protect product successfully
@returns {object}                ConnectedPricingTable react component.`,methods:[],displayName:"ConnectedPricingTable"}},"../../plugins/protect/src/js/hooks/use-waf-data/index.jsx":(R,f,a)=>{a.d(f,{Z:()=>w});var e=a("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),p=a("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),i=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=a("../../plugins/protect/src/js/api.js"),_=a("../../plugins/protect/src/js/state/store.js");const w=()=>{const{setWafConfig:A,setWafStats:v,setWafIsEnabled:y,setWafIsUpdating:c,setWafIsToggling:o}=(0,e.Z)(_.t),t=(0,p.Z)(s=>s(_.t).getWaf()),h=(0,i.useCallback)(()=>(c(!0),l.Z.fetchWaf().then(s=>{y(s==null?void 0:s.isEnabled),A(s==null?void 0:s.config),v(s==null?void 0:s.stats)}).finally(()=>c(!1))),[A,v,y,c]),b=(0,i.useCallback)(()=>(t.isEnabled||o(!0),c(!0),l.Z.toggleWaf().then(h).finally(()=>{o(!1),c(!1)})),[h,t.isEnabled,o,c]),r=(0,i.useCallback)(()=>t.isEnabled?Promise.resolve():b(),[b,t.isEnabled]),d=(0,i.useCallback)(()=>(c(!0),r().then(()=>l.Z.updateWaf({jetpack_waf_automatic_rules:!t.config.jetpackWafAutomaticRules})).then(h).finally(()=>c(!1))),[r,h,c,t.config.jetpackWafAutomaticRules]),g=(0,i.useCallback)(()=>(c(!0),l.Z.updateWaf({jetpack_waf_ip_list:!t.config.jetpackWafIpList}).then(h).finally(()=>c(!1))),[h,c,t.config.jetpackWafIpList]),m=(0,i.useCallback)(()=>(c(!0),l.Z.updateWaf({brute_force_protection:!t.config.bruteForceProtection}).then(h).finally(()=>c(!1))),[h,c,t.config.bruteForceProtection]),n=(0,i.useCallback)(()=>(c(!0),r().then(()=>l.Z.updateWaf({jetpack_waf_share_data:!t.config.jetpackWafShareData})).then(h).finally(()=>c(!1))),[r,h,c,t.config.jetpackWafShareData]),u=(0,i.useCallback)(s=>(c(!0),l.Z.updateWaf(s).then(h).finally(()=>c(!1))),[h,c]);return(0,i.useEffect)(()=>{t.config===void 0&&!t.isFetching&&h()},[t.config,t.isFetching,c,h]),{...t,refreshWaf:h,toggleWaf:b,toggleAutomaticRules:d,toggleManualRules:g,toggleBruteForceProtection:m,toggleShareData:n,updateConfig:u}}}}]);})();
