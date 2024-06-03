"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3367],{"../components/components/pricing-table/stories/index.stories.tsx":(y,u,e)=>{var K,N,F;e.r(u),e.d(u,{__namedExportsOrder:()=>$,_default:()=>C,default:()=>G});var p=e("../components/components/button/index.tsx"),l=e("../components/components/product-price/index.tsx"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.57.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),b=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(b),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=e("../components/components/icon-tooltip/index.tsx"),v=e("../components/components/layout/use-breakpoint-match/index.ts"),i=e("../components/components/terms-of-service/index.tsx"),o=e("../components/components/text/index.tsx"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(h),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var a=E()(k.Z,m);const n=k.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=r.__,I=g("Included","jetpack"),D=g("Not included","jetpack"),B=g("Coming soon","jetpack"),S=(0,c.createContext)(void 0),A=(x,T,w)=>x?{lg:B,default:(0,r.gB)(g("%s coming soon","jetpack"),w)}:{lg:T?I:D,default:T?w:(0,r.gB)(g("%s not included","jetpack"),w)},f=({isIncluded:x=!1,isComingSoon:T=!1,index:w=0,label:U=null,tooltipInfo:L,tooltipTitle:P,tooltipClassName:M=""})=>{const[H]=(0,v.Z)("lg"),W=(0,c.useContext)(S)[w],X=T||x,q=W.name,Y=W.tooltipInfo,ee=W.tooltipTitle,se=L||!H&&Y,J=A(T,x,q),oe=H?J.lg:J.default;return(0,s.jsxs)("div",{className:_()(n.item,n.value),children:[(0,s.jsx)(t.Z,{className:_()(n.icon,X?n["icon-check"]:n["icon-cross"]),size:32,icon:X?d.Z:j.Z}),(0,s.jsx)(o.ZP,{variant:"body-small",children:U||oe}),se&&(0,s.jsx)(O.Z,{title:P||ee,iconClassName:n["popover-icon"],className:_()(n.popover,M),placement:"bottom-end",iconSize:14,offset:4,wide:!!(P&&L),children:(0,s.jsx)(o.ZP,{variant:"body-small",component:"div",children:L||Y})})]})},Z=({children:x})=>(0,s.jsx)("div",{className:n.header,children:x}),R=({primary:x=!1,children:T})=>{let w=0;return(0,s.jsx)("div",{className:_()(n.card,{[n["is-primary"]]:x}),children:c.Children.map(T,U=>{const L=U;return L.type===f?(w++,(0,c.cloneElement)(L,{index:w-1})):L})})},z=({title:x,items:T,children:w,showIntroOfferDisclaimer:U=!1})=>{const[L]=(0,v.Z)("lg");return(0,s.jsxs)(S.Provider,{value:T,children:[(0,s.jsx)("div",{className:_()(n.container,{[n["is-viewport-large"]]:L}),style:{"--rows":T.length+1,"--columns":c.Children.toArray(w).length+1},children:(0,s.jsxs)("div",{className:n.table,children:[(0,s.jsx)(o.ZP,{variant:"headline-small",children:x}),L&&T.map((P,M)=>(0,s.jsxs)("div",{className:_()(n.item,{[n["last-feature"]]:M===T.length-1}),children:[(0,s.jsx)(o.ZP,{variant:"body-small",children:(0,s.jsx)("strong",{children:P.name})}),P.tooltipInfo&&(0,s.jsx)(O.Z,{title:P.tooltipTitle,iconClassName:n["popover-icon"],className:n.popover,placement:P.tooltipPlacement?P.tooltipPlacement:"bottom-end",iconSize:14,offset:4,wide:!!(P.tooltipTitle&&P.tooltipInfo),children:(0,s.jsx)(o.ZP,{variant:"body-small",children:P.tooltipInfo})})]},M)),w]})}),(0,s.jsx)("div",{className:n["tos-container"],children:(0,s.jsxs)("div",{className:n.tos,children:[U&&(0,s.jsx)(o.ZP,{variant:"body-small",children:g("Reduced pricing is a limited offer for the first year and renews at regular price.","jetpack")}),(0,s.jsx)(i.Z,{multipleButtons:!0})]})})]})},G={title:"JS Packages/Components/Pricing Table",component:z,subcomponents:{PricingTableColumn:R,PricingTableHeader:Z,PricingTableItem:f}},V=x=>(0,s.jsxs)(z,{...x,children:[(0,s.jsxs)(R,{primary:!0,children:[(0,s.jsxs)(Z,{children:[(0,s.jsx)(l.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:x==null?void 0:x.hideDiscountLabel}),(0,s.jsx)(p.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,s.jsx)(f,{isIncluded:!0,label:(0,s.jsx)("strong",{children:"Up to 1000"})}),(0,s.jsx)(f,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,s.jsx)(f,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,s.jsx)(f,{isIncluded:!0}),(0,s.jsx)(f,{isIncluded:!0})]}),(0,s.jsxs)(R,{children:[(0,s.jsxs)(Z,{children:[(0,s.jsx)(l.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,s.jsx)(p.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,s.jsx)(f,{isIncluded:!0,label:"Up to 300"}),(0,s.jsx)(f,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,s.jsx)(f,{isIncluded:!1}),(0,s.jsx)(f,{isIncluded:!0}),(0,s.jsx)(f,{isIncluded:!0})]})]}),Q={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},C=V.bind({});C.args=Q,C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(F=(N=C.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const $=["_default"]},"../components/components/layout/use-breakpoint-match/index.ts":(y,u,e)=>{e.d(u,{Z:()=>v});var p=e("../../../node_modules/.pnpm/@wordpress+compose@6.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(l),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),d={};d.insert="head",d.singleton=!1;var j=r()(t.Z,d);const b=t.Z.locals||{},_=["sm","md","lg"],c=(i,o,h)=>{const E=_.indexOf(i),k=E+1,m=o.includes("=");let a=[];return o.startsWith("<")&&(a=_.slice(0,m?k:E)),o.startsWith(">")&&(a=_.slice(m?E:k)),a!=null&&a.length?a.some(n=>h[n]):h[i]},v=(i,o)=>{const h=Array.isArray(i)?i:[i],E=Array.isArray(o)?o:[o],[k,m,a]=_,n=(0,p.Z)(b[k]),s=(0,p.Z)(b[m]),g=(0,p.Z)(b[a]),I={sm:n,md:s,lg:g};return h.map((D,B)=>{const S=E[B];return S?c(D,S,I):I[D]})}},"../components/components/product-price/index.tsx":(y,u,e)=>{e.d(u,{Z:()=>k});var p=e("../../../node_modules/.pnpm/@wordpress+i18n@4.57.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(l),t=e("../components/components/text/index.tsx"),d=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(j),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),c={};c.insert="head",c.singleton=!1;var O=b()(_.Z,c);const v=_.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({value:m,currency:a,isOff:n,hidePriceFraction:s})=>{const g=r()(v.price,"product-price_price",{[v["is-not-off-price"]]:!n}),{symbol:I,integer:D,fraction:B}=(0,d.LR)(m,a),S=!s||!B.endsWith("00");return(0,i.jsxs)(t.ZP,{className:g,variant:"headline-medium",component:"p",children:[(0,i.jsx)(t.ZP,{className:v.symbol,component:"sup",variant:"title-medium",children:I}),D,S&&(0,i.jsx)(t.ZP,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,i.jsx)("strong",{children:B})})]})};try{o.displayName="Price",o.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:o.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch(m){}const h=p.__,k=({price:m,offPrice:a,currency:n="",showNotOffPrice:s=!0,hideDiscountLabel:g=!0,promoLabel:I="",legend:D=h("/month, paid yearly","jetpack"),isNotConvenientPrice:B=!1,hidePriceFraction:S=!1,children:A})=>{if(m==null&&a==null||!n)return null;s=s&&a!=null;const f=typeof m=="number"&&typeof a=="number"?Math.floor((m-a)/m*100):0,R=!g&&f&&f>0?f+h("% off","jetpack"):null;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:v.container,children:(0,i.jsxs)("div",{className:r()(v["price-container"],"product-price_container"),children:[(0,i.jsx)(o,{value:a!=null?a:m,currency:n,isOff:!B,hidePriceFraction:S}),s&&(0,i.jsx)(o,{value:m,currency:n,isOff:!1,hidePriceFraction:S}),R&&(0,i.jsx)(t.ZP,{className:r()(v["promo-label"],"product-price_promo_label"),children:R})]})}),(0,i.jsxs)("div",{className:v.footer,children:[A||(0,i.jsx)(t.ZP,{className:r()(v.legend,"product-price_legend"),children:D}),I&&(0,i.jsx)(t.ZP,{className:r()(v["promo-label"],"product-price_promo_label"),children:I})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch(m){}},"../components/components/terms-of-service/index.tsx":(y,u,e)=>{e.d(u,{Z:()=>n});var p=e("../../../node_modules/.pnpm/@wordpress+element@5.34.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@4.57.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(r),d=e("../components/tools/jp-redirect/index.ts"),j=e("../components/components/text/index.tsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(b),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),O={};O.insert="head",O.singleton=!1;var v=_()(c.Z,O);const i=c.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=l.__,E=({className:s,multipleButtons:g,agreeButtonLabel:I})=>(0,o.jsx)(j.ZP,{className:t()(s,"terms-of-service"),children:g?(0,o.jsx)(k,{multipleButtonsLabels:g}):(0,o.jsx)(m,{agreeButtonLabel:I})}),k=({multipleButtonsLabels:s})=>Array.isArray(s)&&s.length>1?(0,p.Z)((0,l.gB)(h("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),s[0],s[1]),{strong:(0,o.jsx)("strong",{}),tosLink:(0,o.jsx)(a,{slug:"wpcom-tos"}),shareDetailsLink:(0,o.jsx)(a,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,p.Z)(h("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),{tosLink:(0,o.jsx)(a,{slug:"wpcom-tos"}),shareDetailsLink:(0,o.jsx)(a,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),m=({agreeButtonLabel:s})=>(0,p.Z)((0,l.gB)(h("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),s),{strong:(0,o.jsx)("strong",{}),tosLink:(0,o.jsx)(a,{slug:"wpcom-tos"}),shareDetailsLink:(0,o.jsx)(a,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),a=({slug:s,children:g})=>(0,o.jsx)("a",{className:"terms-of-service__link",href:(0,d.Z)(s),rel:"noopener noreferrer",target:"_blank",children:g}),n=E;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(s){}},"../components/tools/jp-redirect/index.ts":(y,u,e)=>{e.d(u,{Z:()=>p});function p(l,r={}){var b,_;const t={};let d;if(typeof window!="undefined"&&(d=(b=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:b.calypsoEnv),l.search("https://")===0){const c=new URL(l);l=`https://${c.host}${c.pathname}`,t.url=encodeURIComponent(l)}else t.source=encodeURIComponent(l);for(const c in r)t[c]=encodeURIComponent(r[c]);return!Object.keys(t).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(t.site=(_=jetpack_redirects.currentBlogID)!=null?_:jetpack_redirects.currentSiteRawUrl),d&&(t.calypso_env=d),"https://jetpack.com/redirect/?"+Object.keys(t).map(c=>c+"="+t[c]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(y,u,e)=>{e.d(u,{Z:()=>j});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(p),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(r),d=t()(l());d.push([y.id,"",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const j=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss":(y,u,e)=>{e.d(u,{Z:()=>j});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(p),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(r),d=t()(l());d.push([y.id,'.TQEdY1YwmHhIEgpvFjuU{--padding: calc(var(--spacing-base) * 4);color:var(--jp-black)}.vJ6UeC0fnWyPRFfRgoc7{--gap: calc(var(--spacing-base) * 3);position:relative;padding:var(--padding) 0}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7{display:grid;grid-template-columns:repeat(var(--columns), 1fr);grid-auto-flow:column;grid-template-rows:repeat(var(--rows), minmax(min-content, max-content));column-gap:var(--gap)}.W5Ut5fqhN8UWDBcpn4yM{margin-top:var(--padding)}.k53TEwZkBzxK5_xTQ5fg .W5Ut5fqhN8UWDBcpn4yM{display:contents}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*{background:var(--jp-white);position:relative}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;box-shadow:0px 4px 24px rgba(0,0,0,.05)}.W5Ut5fqhN8UWDBcpn4yM>:first-child{border-top-left-radius:var(--jp-border-radius);border-top-right-radius:var(--jp-border-radius);border-width:1px 1px 0}.W5Ut5fqhN8UWDBcpn4yM>:last-child{border-width:0 1px 1px;border-bottom-left-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius)}.r2Abkgn9Ila57vvjmDGT{padding:var(--padding);display:flex;flex-direction:column;justify-content:space-between}.kOMg2z_X6welgpzz4H5L{display:flex;align-items:center;padding-bottom:calc(var(--spacing-base)*2);position:relative}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2)){padding-top:calc(var(--spacing-base)*2)}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{content:"";position:absolute;top:0;left:var(--padding);right:var(--padding);height:1px;z-index:5;background-color:var(--jp-gray)}.k53TEwZkBzxK5_xTQ5fg .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:calc(100% + var(--gap));left:0;right:unset}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7>:last-child .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:100%}.kOMg2z_X6welgpzz4H5L:last-of-type{padding-bottom:var(--padding)}.xYuwLvhhcKRzqS9uzJ9A{padding-bottom:var(--padding)}.q4fBYQt_JHXnlv3Jqd_d{padding-left:var(--padding);padding-right:var(--padding)}.TUkKHX2BwjFgY_qjFY5H{margin:0 var(--spacing-base);fill:var(--jp-gray);flex-shrink:0}.TUkKHX2BwjFgY_qjFY5H.O0iKl3sDUpBcMM8nPSIy{fill:var(--jp-green-40)}.TUkKHX2BwjFgY_qjFY5H.UhmGAfzBh8H3nl1e0_0c{fill:var(--jp-red-50)}.TLpXJ1VWQG0nhAUYyCsg{margin-left:auto}.k53TEwZkBzxK5_xTQ5fg .TLpXJ1VWQG0nhAUYyCsg{top:1px;margin:0 var(--spacing-base)}.kOMg2z_X6welgpzz4H5L .GwA4xd6sy16YxZrWr7Bg{fill:var(--jp-gray-20);flex-shrink:0}.ctvIeSVM5mmlPJoo9vfX{text-align:center;width:-moz-fit-content;width:fit-content}.ctvIeSVM5mmlPJoo9vfX>a{color:#000}.k53TEwZkBzxK5_xTQ5fg .ctvIeSVM5mmlPJoo9vfX{padding-left:var(--padding);padding-right:var(--padding);grid-column:2;white-space:nowrap;overflow:hidden}.ZAh15RwHHK85LWYIlwXU{display:flex;align-items:right;justify-content:right;margin:0 calc(var(--spacing-base)*4)}',""]),d.locals={container:"TQEdY1YwmHhIEgpvFjuU",table:"vJ6UeC0fnWyPRFfRgoc7","is-viewport-large":"k53TEwZkBzxK5_xTQ5fg",card:"W5Ut5fqhN8UWDBcpn4yM","is-primary":"LylLXNFW1RvRzeQf542A",header:"r2Abkgn9Ila57vvjmDGT",item:"kOMg2z_X6welgpzz4H5L","last-feature":"xYuwLvhhcKRzqS9uzJ9A",value:"q4fBYQt_JHXnlv3Jqd_d",icon:"TUkKHX2BwjFgY_qjFY5H","icon-check":"O0iKl3sDUpBcMM8nPSIy","icon-cross":"UhmGAfzBh8H3nl1e0_0c",popover:"TLpXJ1VWQG0nhAUYyCsg","popover-icon":"GwA4xd6sy16YxZrWr7Bg",tos:"ctvIeSVM5mmlPJoo9vfX","tos-container":"ZAh15RwHHK85LWYIlwXU"};const j=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(y,u,e)=>{e.d(u,{Z:()=>j});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(p),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(r),d=t()(l());d.push([y.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),d.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const j=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(y,u,e)=>{e.d(u,{Z:()=>j});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(p),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(r),d=t()(l());d.push([y.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const j=d}}]);})();