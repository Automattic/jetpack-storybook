"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3367],{"../components/components/pricing-table/stories/index.stories.tsx":(y,m,e)=>{var z,K,N;e.r(m),e.d(m,{__namedExportsOrder:()=>Q,_default:()=>R,default:()=>J});var c=e("../components/components/button/index.tsx"),t=e("../components/components/product-price/index.tsx"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../components/components/icon-tooltip/index.tsx"),v=e("../components/components/layout/use-breakpoint-match/index.ts"),p=e("../components/components/terms-of-service/index.tsx"),n=e("../components/components/text/index.tsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(j),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var r=S()(k.Z,i);const o=k.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=a.__,I=f("Included","jetpack"),D=f("Not included","jetpack"),L=f("Coming soon","jetpack"),O=(0,_.createContext)(void 0),Z=(h,w,P)=>h?{lg:L,default:(0,a.gB)(f("%s coming soon","jetpack"),P)}:{lg:w?I:D,default:w?P:(0,a.gB)(f("%s not included","jetpack"),P)},x=({isIncluded:h=!1,isComingSoon:w=!1,index:P=0,label:C=null,tooltipInfo:E,tooltipTitle:T,tooltipClassName:A=""})=>{const[F]=(0,v.Z)("lg"),M=(0,_.useContext)(O)[P],H=w||h,$=M.name,X=M.tooltipInfo,q=M.tooltipTitle,ee=E||!F&&X,Y=Z(w,h,$),se=F?Y.lg:Y.default;return(0,s.jsxs)("div",{className:(0,u.Z)(o.item,o.value),children:[(0,s.jsx)(d.Z,{className:(0,u.Z)(o.icon,H?o["icon-check"]:o["icon-cross"]),size:32,icon:H?l.Z:b.Z}),(0,s.jsx)(n.ZP,{variant:"body-small",children:C||se}),ee&&(0,s.jsx)(g.Z,{title:T||q,iconClassName:o["popover-icon"],className:(0,u.Z)(o.popover,A),placement:"bottom-end",iconSize:14,offset:4,wide:!!(T&&E),children:(0,s.jsx)(n.ZP,{variant:"body-small",component:"div",children:E||X})})]})},U=({children:h})=>(0,s.jsx)("div",{className:o.header,children:h}),B=({primary:h=!1,children:w})=>{let P=0;return(0,s.jsx)("div",{className:(0,u.Z)(o.card,{[o["is-primary"]]:h}),children:_.Children.map(w,C=>{const E=C;return E.type===x?(P++,(0,_.cloneElement)(E,{index:P-1})):E})})},W=({title:h,items:w,children:P,showIntroOfferDisclaimer:C=!1})=>{const[E]=(0,v.Z)("lg");return(0,s.jsxs)(O.Provider,{value:w,children:[(0,s.jsx)("div",{className:(0,u.Z)(o.container,{[o["is-viewport-large"]]:E}),style:{"--rows":w.length+1,"--columns":_.Children.toArray(P).length+1},children:(0,s.jsxs)("div",{className:o.table,children:[(0,s.jsx)(n.ZP,{variant:"headline-small",children:h}),E&&w.map((T,A)=>(0,s.jsxs)("div",{className:(0,u.Z)(o.item,{[o["last-feature"]]:A===w.length-1}),children:[(0,s.jsx)(n.ZP,{variant:"body-small",children:(0,s.jsx)("strong",{children:T.name})}),T.tooltipInfo&&(0,s.jsx)(g.Z,{title:T.tooltipTitle,iconClassName:o["popover-icon"],className:o.popover,placement:T.tooltipPlacement?T.tooltipPlacement:"bottom-end",iconSize:14,offset:4,wide:!!(T.tooltipTitle&&T.tooltipInfo),children:(0,s.jsx)(n.ZP,{variant:"body-small",children:T.tooltipInfo})})]},A)),P]})}),(0,s.jsx)("div",{className:o["tos-container"],children:(0,s.jsxs)("div",{className:o.tos,children:[C&&(0,s.jsx)(n.ZP,{variant:"body-small",children:f("Reduced pricing is a limited offer for the first year and renews at regular price.","jetpack")}),(0,s.jsx)(p.Z,{multipleButtons:!0})]})})]})},J={title:"JS Packages/Components/Pricing Table",component:W,subcomponents:{PricingTableColumn:B,PricingTableHeader:U,PricingTableItem:x}},G=h=>(0,s.jsxs)(W,{...h,children:[(0,s.jsxs)(B,{primary:!0,children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(t.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:h==null?void 0:h.hideDiscountLabel}),(0,s.jsx)(c.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,s.jsx)(x,{isIncluded:!0,label:(0,s.jsx)("strong",{children:"Up to 1000"})}),(0,s.jsx)(x,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,s.jsx)(x,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,s.jsx)(x,{isIncluded:!0}),(0,s.jsx)(x,{isIncluded:!0})]}),(0,s.jsxs)(B,{children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(t.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,s.jsx)(c.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,s.jsx)(x,{isIncluded:!0,label:"Up to 300"}),(0,s.jsx)(x,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,s.jsx)(x,{isIncluded:!1}),(0,s.jsx)(x,{isIncluded:!0}),(0,s.jsx)(x,{isIncluded:!0})]})]}),V={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},R=G.bind({});R.args=V,R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <PricingTable {...args}>
            <PricingTableColumn primary>
                <PricingTableHeader>
                    <ProductPrice price={9.95} offPrice={4.98} legend="/month, billed yearly" currency="USD" hideDiscountLabel={args?.hideDiscountLabel} />
                    <Button fullWidth>Get Premium</Button>
                </PricingTableHeader>
                <PricingTableItem isIncluded={true} label={<strong>Up to 1000</strong>} />
                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info'} />
                <PricingTableItem isIncluded={true} tooltipInfo={'This is an info with title'} tooltipTitle={'Small title'} />
                <PricingTableItem isIncluded={true} />
                <PricingTableItem isIncluded={true} />
            </PricingTableColumn>
            <PricingTableColumn>
                <PricingTableHeader>
                    <ProductPrice price={0} legend="Free forever" currency="USD" hidePriceFraction />
                    <Button fullWidth variant="secondary">
                        Start for free
                    </Button>
                </PricingTableHeader>
                <PricingTableItem isIncluded={true} label="Up to 300" />
                <PricingTableItem isIncluded={false} label="This is not included" tooltipInfo="This has a tooltip, so its overwrites the default info on small screens" />
                <PricingTableItem isIncluded={false} />
                <PricingTableItem isIncluded={true} />
                <PricingTableItem isIncluded={true} />
            </PricingTableColumn>
        </PricingTable>;
}`,...(N=(K=R.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const Q=["_default"]},"../components/components/layout/use-breakpoint-match/index.ts":(y,m,e)=>{e.d(m,{Z:()=>p});var c=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),l={};l.insert="head",l.singleton=!1;var b=a()(d.Z,l);const u=d.Z.locals||{},_=["sm","md","lg"],g=(n,j,S)=>{const k=_.indexOf(n),i=k+1,r=j.includes("=");let o=[];return j.startsWith("<")&&(o=_.slice(0,r?i:k)),j.startsWith(">")&&(o=_.slice(r?k:i)),o!=null&&o.length?o.some(s=>S[s]):S[n]},p=(n,j)=>{const S=Array.isArray(n)?n:[n],k=Array.isArray(j)?j:[j],[i,r,o]=_,s=(0,c.Z)(u[i]),f=(0,c.Z)(u[r]),I=(0,c.Z)(u[o]),D={sm:s,md:f,lg:I};return S.map((L,O)=>{const Z=k[O];return Z?g(L,Z,D):D[L]})}},"../components/components/product-price/index.tsx":(y,m,e)=>{e.d(m,{Z:()=>k});var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../components/components/text/index.tsx"),d=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(l),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),_={};_.insert="head",_.singleton=!1;var g=b()(u.Z,_);const v=u.Z.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({value:i,currency:r,isOff:o,hidePriceFraction:s})=>{const f=(0,t.Z)(v.price,"product-price_price",{[v["is-not-off-price"]]:!o}),{symbol:I,integer:D,fraction:L}=(0,d.LR)(i,r),O=!s||!L.endsWith("00");return(0,p.jsxs)(a.ZP,{className:f,variant:"headline-medium",component:"p",children:[(0,p.jsx)(a.ZP,{className:v.symbol,component:"sup",variant:"title-medium",children:I}),D,O&&(0,p.jsx)(a.ZP,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,p.jsx)("strong",{children:L})})]})};try{n.displayName="Price",n.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:n.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch(i){}const j=c.__,k=({price:i,offPrice:r,currency:o="",showNotOffPrice:s=!0,hideDiscountLabel:f=!0,promoLabel:I="",legend:D=j("/month, paid yearly","jetpack"),isNotConvenientPrice:L=!1,hidePriceFraction:O=!1,children:Z})=>{if(i==null&&r==null||!o)return null;s=s&&r!=null;const x=typeof i=="number"&&typeof r=="number"?Math.floor((i-r)/i*100):0,B=!f&&x&&x>0?x+j("% off","jetpack"):null;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:v.container,children:(0,p.jsxs)("div",{className:(0,t.Z)(v["price-container"],"product-price_container"),children:[(0,p.jsx)(n,{value:r!=null?r:i,currency:o,isOff:!L,hidePriceFraction:O}),s&&(0,p.jsx)(n,{value:i,currency:o,isOff:!1,hidePriceFraction:O}),B&&(0,p.jsx)(a.ZP,{className:(0,t.Z)(v["promo-label"],"product-price_promo_label"),children:B})]})}),(0,p.jsxs)("div",{className:v.footer,children:[Z||(0,p.jsx)(a.ZP,{className:(0,t.Z)(v.legend,"product-price_legend"),children:D}),I&&(0,p.jsx)(a.ZP,{className:(0,t.Z)(v["promo-label"],"product-price_promo_label"),children:I})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch(i){}},"../components/components/terms-of-service/index.tsx":(y,m,e)=>{e.d(m,{Z:()=>o});var c=e("../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../components/tools/jp-redirect/index.ts"),l=e("../components/components/text/index.tsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(b),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),g={};g.insert="head",g.singleton=!1;var v=u()(_.Z,g);const p=_.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=t.__,S=({className:s,multipleButtons:f,agreeButtonLabel:I})=>(0,n.jsx)(l.ZP,{className:(0,a.Z)(s,"terms-of-service"),children:f?(0,n.jsx)(k,{multipleButtonsLabels:f}):(0,n.jsx)(i,{agreeButtonLabel:I})}),k=({multipleButtonsLabels:s})=>Array.isArray(s)&&s.length>1?(0,c.Z)((0,t.gB)(j("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),s[0],s[1]),{strong:(0,n.jsx)("strong",{}),tosLink:(0,n.jsx)(r,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(r,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,c.Z)(j("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),{tosLink:(0,n.jsx)(r,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(r,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),i=({agreeButtonLabel:s})=>(0,c.Z)((0,t.gB)(j("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),s),{strong:(0,n.jsx)("strong",{}),tosLink:(0,n.jsx)(r,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(r,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),r=({slug:s,children:f})=>(0,n.jsx)("a",{className:"terms-of-service__link",href:(0,d.Z)(s),rel:"noopener noreferrer",target:"_blank",children:f}),o=S;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(s){}},"../components/tools/jp-redirect/index.ts":(y,m,e)=>{e.d(m,{Z:()=>c});function c(t,a={}){var u,_;const d={};let l;if(typeof window!="undefined"&&(l=(u=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:u.calypsoEnv),t.search("https://")===0){const g=new URL(t);t=`https://${g.host}${g.pathname}`,d.url=encodeURIComponent(t)}else d.source=encodeURIComponent(t);for(const g in a)d[g]=encodeURIComponent(a[g]);return!Object.keys(d).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(d.site=(_=jetpack_redirects.currentBlogID)!=null?_:jetpack_redirects.currentSiteRawUrl),l&&(d.calypso_env=l),"https://jetpack.com/redirect/?"+Object.keys(d).map(g=>g+"="+d[g]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(y,m,e)=>{e.d(m,{Z:()=>b});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(a),l=d()(t());l.push([y.id,"",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const b=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss":(y,m,e)=>{e.d(m,{Z:()=>b});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(a),l=d()(t());l.push([y.id,'.TQEdY1YwmHhIEgpvFjuU{--padding: calc(var(--spacing-base) * 4);color:var(--jp-black)}.vJ6UeC0fnWyPRFfRgoc7{--gap: calc(var(--spacing-base) * 3);position:relative;padding:var(--padding) 0}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7{display:grid;grid-template-columns:repeat(var(--columns), 1fr);grid-auto-flow:column;grid-template-rows:repeat(var(--rows), minmax(min-content, max-content));column-gap:var(--gap)}.W5Ut5fqhN8UWDBcpn4yM{margin-top:var(--padding)}.k53TEwZkBzxK5_xTQ5fg .W5Ut5fqhN8UWDBcpn4yM{display:contents}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*{background:var(--jp-white);position:relative}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;box-shadow:0px 4px 24px rgba(0,0,0,.05)}.W5Ut5fqhN8UWDBcpn4yM>:first-child{border-top-left-radius:var(--jp-border-radius);border-top-right-radius:var(--jp-border-radius);border-width:1px 1px 0}.W5Ut5fqhN8UWDBcpn4yM>:last-child{border-width:0 1px 1px;border-bottom-left-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius)}.r2Abkgn9Ila57vvjmDGT{padding:var(--padding);display:flex;flex-direction:column;justify-content:space-between}.kOMg2z_X6welgpzz4H5L{display:flex;align-items:center;padding-bottom:calc(var(--spacing-base)*2);position:relative}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2)){padding-top:calc(var(--spacing-base)*2)}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{content:"";position:absolute;top:0;left:var(--padding);right:var(--padding);height:1px;z-index:5;background-color:var(--jp-gray)}.k53TEwZkBzxK5_xTQ5fg .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:calc(100% + var(--gap));left:0;right:unset}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7>:last-child .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:100%}.kOMg2z_X6welgpzz4H5L:last-of-type{padding-bottom:var(--padding)}.xYuwLvhhcKRzqS9uzJ9A{padding-bottom:var(--padding)}.q4fBYQt_JHXnlv3Jqd_d{padding-left:var(--padding);padding-right:var(--padding)}.TUkKHX2BwjFgY_qjFY5H{margin:0 var(--spacing-base);fill:var(--jp-gray);flex-shrink:0}.TUkKHX2BwjFgY_qjFY5H.O0iKl3sDUpBcMM8nPSIy{fill:var(--jp-green-40)}.TUkKHX2BwjFgY_qjFY5H.UhmGAfzBh8H3nl1e0_0c{fill:var(--jp-red-50)}.TLpXJ1VWQG0nhAUYyCsg{margin-left:auto}.k53TEwZkBzxK5_xTQ5fg .TLpXJ1VWQG0nhAUYyCsg{top:1px;margin:0 var(--spacing-base)}.kOMg2z_X6welgpzz4H5L .GwA4xd6sy16YxZrWr7Bg{fill:var(--jp-gray-20);flex-shrink:0}.ctvIeSVM5mmlPJoo9vfX{text-align:center;width:-moz-fit-content;width:fit-content}.ctvIeSVM5mmlPJoo9vfX>a{color:#000}.k53TEwZkBzxK5_xTQ5fg .ctvIeSVM5mmlPJoo9vfX{padding-left:var(--padding);padding-right:var(--padding);grid-column:2;white-space:nowrap;overflow:hidden}.ZAh15RwHHK85LWYIlwXU{display:flex;align-items:right;justify-content:right;margin:0 calc(var(--spacing-base)*4)}',""]),l.locals={container:"TQEdY1YwmHhIEgpvFjuU",table:"vJ6UeC0fnWyPRFfRgoc7","is-viewport-large":"k53TEwZkBzxK5_xTQ5fg",card:"W5Ut5fqhN8UWDBcpn4yM","is-primary":"LylLXNFW1RvRzeQf542A",header:"r2Abkgn9Ila57vvjmDGT",item:"kOMg2z_X6welgpzz4H5L","last-feature":"xYuwLvhhcKRzqS9uzJ9A",value:"q4fBYQt_JHXnlv3Jqd_d",icon:"TUkKHX2BwjFgY_qjFY5H","icon-check":"O0iKl3sDUpBcMM8nPSIy","icon-cross":"UhmGAfzBh8H3nl1e0_0c",popover:"TLpXJ1VWQG0nhAUYyCsg","popover-icon":"GwA4xd6sy16YxZrWr7Bg",tos:"ctvIeSVM5mmlPJoo9vfX","tos-container":"ZAh15RwHHK85LWYIlwXU"};const b=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(y,m,e)=>{e.d(m,{Z:()=>b});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(a),l=d()(t());l.push([y.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),l.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const b=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(y,m,e)=>{e.d(m,{Z:()=>b});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(a),l=d()(t());l.push([y.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const b=l}}]);})();