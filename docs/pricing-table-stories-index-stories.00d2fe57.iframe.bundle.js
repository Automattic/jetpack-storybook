"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3367],{"../components/components/pricing-table/stories/index.stories.tsx":(y,_,e)=>{var z,N,K;e.r(_),e.d(_,{__namedExportsOrder:()=>Q,_default:()=>C,default:()=>Y});var r=e("../components/components/button/index.tsx"),l=e("../components/components/product-price/index.tsx"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.2.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.2.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.2.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.2.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../components/components/icon-tooltip/index.tsx"),h=e("../components/components/layout/use-breakpoint-match/index.ts"),u=e("../components/components/terms-of-service/index.tsx"),n=e("../components/components/text/index.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(g),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss"),c={};c.insert="head",c.singleton=!1;var i=L()(k.Z,c);const o=k.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=t.__,I=f("Included","jetpack"),E=f("Not included","jetpack"),O=f("Coming soon","jetpack"),D=(0,p.createContext)(void 0),Z=(x,w,P)=>x?{lg:O,default:(0,t.gB)(f("%s coming soon","jetpack"),P)}:{lg:w?I:E,default:w?P:(0,t.gB)(f("%s not included","jetpack"),P)},j=({isIncluded:x=!1,isComingSoon:w=!1,index:P=0,label:R=null,tooltipInfo:S,tooltipTitle:T,tooltipClassName:A=""})=>{const[F]=(0,h.Z)("lg"),M=(0,p.useContext)(D)[P],H=w||x,$=M.name,V=M.tooltipInfo,q=M.tooltipTitle,ee=S||!F&&V,X=Z(w,x,$),se=F?X.lg:X.default;return(0,s.jsxs)("div",{className:(0,m.Z)(o.item,o.value),children:[(0,s.jsx)(d.Z,{className:(0,m.Z)(o.icon,H?o["icon-check"]:o["icon-cross"]),size:32,icon:H?a.Z:b.Z}),(0,s.jsx)(n.ZP,{variant:"body-small",children:R||se}),ee&&(0,s.jsx)(v.Z,{title:T||q,iconClassName:o["popover-icon"],className:(0,m.Z)(o.popover,A),placement:"bottom-end",iconSize:14,offset:4,wide:!!(T&&S),children:(0,s.jsx)(n.ZP,{variant:"body-small",component:"div",children:S||V})})]})},U=({children:x})=>(0,s.jsx)("div",{className:o.header,children:x}),B=({primary:x=!1,children:w})=>{let P=0;return(0,s.jsx)("div",{className:(0,m.Z)(o.card,{[o["is-primary"]]:x}),children:p.Children.map(w,R=>{const S=R;return S.type===j?(P++,(0,p.cloneElement)(S,{index:P-1})):S})})},W=({title:x,items:w,children:P,showIntroOfferDisclaimer:R=!1})=>{const[S]=(0,h.Z)("lg");return(0,s.jsxs)(D.Provider,{value:w,children:[(0,s.jsx)("div",{className:(0,m.Z)(o.container,{[o["is-viewport-large"]]:S}),style:{"--rows":w.length+1,"--columns":p.Children.toArray(P).length+1},children:(0,s.jsxs)("div",{className:o.table,children:[(0,s.jsx)(n.ZP,{variant:"headline-small",children:x}),S&&w.map((T,A)=>(0,s.jsxs)("div",{className:(0,m.Z)(o.item,{[o["last-feature"]]:A===w.length-1}),children:[(0,s.jsx)(n.ZP,{variant:"body-small",children:(0,s.jsx)("strong",{children:T.name})}),T.tooltipInfo&&(0,s.jsx)(v.Z,{title:T.tooltipTitle,iconClassName:o["popover-icon"],className:o.popover,placement:T.tooltipPlacement?T.tooltipPlacement:"bottom-end",iconSize:14,offset:4,wide:!!(T.tooltipTitle&&T.tooltipInfo),children:(0,s.jsx)(n.ZP,{variant:"body-small",children:T.tooltipInfo})})]},A)),P]})}),(0,s.jsx)("div",{className:o["tos-container"],children:(0,s.jsxs)("div",{className:o.tos,children:[R&&(0,s.jsx)(n.ZP,{variant:"body-small",children:f("Reduced pricing is a limited offer for the first year and renews at regular price.","jetpack")}),(0,s.jsx)(u.Z,{multipleButtons:!0})]})})]})},Y={title:"JS Packages/Components/Pricing Table",component:W,subcomponents:{PricingTableColumn:B,PricingTableHeader:U,PricingTableItem:j}},J=x=>(0,s.jsxs)(W,{...x,children:[(0,s.jsxs)(B,{primary:!0,children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(l.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:x==null?void 0:x.hideDiscountLabel}),(0,s.jsx)(r.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,s.jsx)(j,{isIncluded:!0,label:(0,s.jsx)("strong",{children:"Up to 1000"})}),(0,s.jsx)(j,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,s.jsx)(j,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,s.jsx)(j,{isIncluded:!0}),(0,s.jsx)(j,{isIncluded:!0})]}),(0,s.jsxs)(B,{children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(l.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,s.jsx)(r.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,s.jsx)(j,{isIncluded:!0,label:"Up to 300"}),(0,s.jsx)(j,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,s.jsx)(j,{isIncluded:!1}),(0,s.jsx)(j,{isIncluded:!0}),(0,s.jsx)(j,{isIncluded:!0})]})]}),G={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},C=J.bind({});C.args=G,C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
}`,...(K=(N=C.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};const Q=["_default"]},"../components/components/layout/use-breakpoint-match/index.ts":(y,_,e)=>{e.d(_,{Z:()=>u});var r=e("../../../node_modules/.pnpm/@wordpress+compose@7.2.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(l),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var b=t()(d.Z,a);const m=d.Z.locals||{},p=["sm","md","lg"],v=(n,g,L)=>{const k=p.indexOf(n),c=k+1,i=g.includes("=");let o=[];return g.startsWith("<")&&(o=p.slice(0,i?c:k)),g.startsWith(">")&&(o=p.slice(i?k:c)),o!=null&&o.length?o.some(s=>L[s]):L[n]},u=(n,g)=>{const L=Array.isArray(n)?n:[n],k=Array.isArray(g)?g:[g],[c,i,o]=p,s=(0,r.Z)(m[c]),f=(0,r.Z)(m[i]),I=(0,r.Z)(m[o]),E={sm:s,md:f,lg:I};return L.map((O,D)=>{const Z=k[D];return Z?v(O,Z,E):E[O]})}},"../components/components/product-price/index.tsx":(y,_,e)=>{e.d(_,{Z:()=>k});var r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.2.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../components/components/text/index.tsx"),d=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),p={};p.insert="head",p.singleton=!1;var v=b()(m.Z,p);const h=m.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=({value:c,currency:i,isOff:o,hidePriceFraction:s})=>{const f=(0,l.Z)(h.price,"product-price_price",{[h["is-not-off-price"]]:!o}),{symbol:I,integer:E,fraction:O}=(0,d.LR)(c,i),D=!s||!O.endsWith("00");return(0,u.jsxs)(t.ZP,{className:f,variant:"headline-medium",component:"p",children:[(0,u.jsx)(t.ZP,{className:h.symbol,component:"sup",variant:"title-medium",children:I}),E,D&&(0,u.jsx)(t.ZP,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,u.jsx)("strong",{children:O})})]})};try{n.displayName="Price",n.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:n.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch(c){}const g=r.__,k=({price:c,offPrice:i,currency:o="",showNotOffPrice:s=!0,hideDiscountLabel:f=!0,promoLabel:I="",legend:E=g("/month, paid yearly","jetpack"),isNotConvenientPrice:O=!1,hidePriceFraction:D=!1,children:Z})=>{if(c==null&&i==null||!o)return null;s=s&&i!=null;const j=typeof c=="number"&&typeof i=="number"?Math.floor((c-i)/c*100):0,B=!f&&j&&j>0?j+g("% off","jetpack"):null;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:h.container,children:(0,u.jsxs)("div",{className:(0,l.Z)(h["price-container"],"product-price_container"),children:[(0,u.jsx)(n,{value:i!=null?i:c,currency:o,isOff:!O,hidePriceFraction:D}),s&&(0,u.jsx)(n,{value:c,currency:o,isOff:!1,hidePriceFraction:D}),B&&(0,u.jsx)(t.ZP,{className:(0,l.Z)(h["promo-label"],"product-price_promo_label"),children:B})]})}),(0,u.jsxs)("div",{className:h.footer,children:[Z||(0,u.jsx)(t.ZP,{className:(0,l.Z)(h.legend,"product-price_legend"),children:E}),I&&(0,u.jsx)(t.ZP,{className:(0,l.Z)(h["promo-label"],"product-price_promo_label"),children:I})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch(c){}},"../components/components/terms-of-service/index.tsx":(y,_,e)=>{e.d(_,{Z:()=>o});var r=e("../../../node_modules/.pnpm/@wordpress+element@6.2.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@5.2.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../components/tools/jp-redirect/index.ts"),a=e("../components/components/text/index.tsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(b),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),v={};v.insert="head",v.singleton=!1;var h=m()(p.Z,v);const u=p.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g=l.__,L=({className:s,multipleButtons:f,agreeButtonLabel:I,...E})=>(0,n.jsx)(a.ZP,{className:(0,t.Z)(s,"terms-of-service"),...E,children:f?(0,n.jsx)(k,{multipleButtonsLabels:f}):(0,n.jsx)(c,{agreeButtonLabel:I})}),k=({multipleButtonsLabels:s})=>Array.isArray(s)&&s.length>1?(0,r.Z)((0,l.gB)(g("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),s[0],s[1]),{strong:(0,n.jsx)("strong",{}),tosLink:(0,n.jsx)(i,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(i,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,r.Z)(g("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),{tosLink:(0,n.jsx)(i,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(i,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),c=({agreeButtonLabel:s})=>(0,r.Z)((0,l.gB)(g("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack"),s),{strong:(0,n.jsx)("strong",{}),tosLink:(0,n.jsx)(i,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(i,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),i=({slug:s,children:f})=>(0,n.jsx)("a",{className:"terms-of-service__link",href:(0,d.Z)(s),rel:"noopener noreferrer",target:"_blank",children:f}),o=L;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'},{value:'"label"'}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(s){}},"../components/tools/jp-redirect/index.ts":(y,_,e)=>{e.d(_,{Z:()=>r});function r(l,t={}){var m,p;const d={};let a;if(typeof window!="undefined"&&(a=(m=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:m.calypsoEnv),l.search("https://")===0){const v=new URL(l);l=`https://${v.host}${v.pathname}`,d.url=encodeURIComponent(l)}else d.source=encodeURIComponent(l);for(const v in t)d[v]=encodeURIComponent(t[v]);return!Object.keys(d).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(d.site=(p=jetpack_redirects.currentBlogID)!=null?p:jetpack_redirects.currentSiteRawUrl),a&&(d.calypso_env=a),"https://jetpack.com/redirect/?"+Object.keys(d).map(v=>v+"="+d[v]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(y,_,e)=>{e.d(_,{Z:()=>b});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),a=d()(l());a.push([y.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const b=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss":(y,_,e)=>{e.d(_,{Z:()=>b});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),a=d()(l());a.push([y.id,'.TQEdY1YwmHhIEgpvFjuU{--padding: calc(var(--spacing-base) * 4);color:var(--jp-black)}.vJ6UeC0fnWyPRFfRgoc7{--gap: calc(var(--spacing-base) * 3);position:relative;padding:var(--padding) 0}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7{display:grid;grid-template-columns:repeat(var(--columns), 1fr);grid-auto-flow:column;grid-template-rows:repeat(var(--rows), minmax(min-content, max-content));column-gap:var(--gap)}.W5Ut5fqhN8UWDBcpn4yM{margin-top:var(--padding)}.k53TEwZkBzxK5_xTQ5fg .W5Ut5fqhN8UWDBcpn4yM{display:contents}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*{background:var(--jp-white);position:relative}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;box-shadow:0px 4px 24px rgba(0,0,0,.05)}.W5Ut5fqhN8UWDBcpn4yM>:first-child{border-top-left-radius:var(--jp-border-radius);border-top-right-radius:var(--jp-border-radius);border-width:1px 1px 0}.W5Ut5fqhN8UWDBcpn4yM>:last-child{border-width:0 1px 1px;border-bottom-left-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius)}.r2Abkgn9Ila57vvjmDGT{padding:var(--padding);display:flex;flex-direction:column;justify-content:space-between}.kOMg2z_X6welgpzz4H5L{display:flex;align-items:center;padding-bottom:calc(var(--spacing-base)*2);position:relative}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2)){padding-top:calc(var(--spacing-base)*2)}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{content:"";position:absolute;top:0;left:var(--padding);right:var(--padding);height:1px;z-index:5;background-color:var(--jp-gray)}.k53TEwZkBzxK5_xTQ5fg .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:calc(100% + var(--gap));left:0;right:unset}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7>:last-child .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:100%}.kOMg2z_X6welgpzz4H5L:last-of-type{padding-bottom:var(--padding)}.xYuwLvhhcKRzqS9uzJ9A{padding-bottom:var(--padding)}.q4fBYQt_JHXnlv3Jqd_d{padding-left:var(--padding);padding-right:var(--padding)}.TUkKHX2BwjFgY_qjFY5H{margin:0 var(--spacing-base);fill:var(--jp-gray);flex-shrink:0}.TUkKHX2BwjFgY_qjFY5H.O0iKl3sDUpBcMM8nPSIy{fill:var(--jp-green-40)}.TUkKHX2BwjFgY_qjFY5H.UhmGAfzBh8H3nl1e0_0c{fill:var(--jp-red-50)}.TLpXJ1VWQG0nhAUYyCsg{margin-left:auto}.k53TEwZkBzxK5_xTQ5fg .TLpXJ1VWQG0nhAUYyCsg{top:1px;margin:0 var(--spacing-base)}.kOMg2z_X6welgpzz4H5L .GwA4xd6sy16YxZrWr7Bg{fill:var(--jp-gray-20);flex-shrink:0}.ctvIeSVM5mmlPJoo9vfX{text-align:center;width:-moz-fit-content;width:fit-content}.ctvIeSVM5mmlPJoo9vfX>a{color:#000}.k53TEwZkBzxK5_xTQ5fg .ctvIeSVM5mmlPJoo9vfX{padding-left:var(--padding);padding-right:var(--padding);grid-column:2;white-space:nowrap;overflow:hidden}.ZAh15RwHHK85LWYIlwXU{display:flex;align-items:right;justify-content:right;margin:0 calc(var(--spacing-base)*4)}',""]),a.locals={container:"TQEdY1YwmHhIEgpvFjuU",table:"vJ6UeC0fnWyPRFfRgoc7","is-viewport-large":"k53TEwZkBzxK5_xTQ5fg",card:"W5Ut5fqhN8UWDBcpn4yM","is-primary":"LylLXNFW1RvRzeQf542A",header:"r2Abkgn9Ila57vvjmDGT",item:"kOMg2z_X6welgpzz4H5L","last-feature":"xYuwLvhhcKRzqS9uzJ9A",value:"q4fBYQt_JHXnlv3Jqd_d",icon:"TUkKHX2BwjFgY_qjFY5H","icon-check":"O0iKl3sDUpBcMM8nPSIy","icon-cross":"UhmGAfzBh8H3nl1e0_0c",popover:"TLpXJ1VWQG0nhAUYyCsg","popover-icon":"GwA4xd6sy16YxZrWr7Bg",tos:"ctvIeSVM5mmlPJoo9vfX","tos-container":"ZAh15RwHHK85LWYIlwXU"};const b=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(y,_,e)=>{e.d(_,{Z:()=>b});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),a=d()(l());a.push([y.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),a.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const b=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(y,_,e)=>{e.d(_,{Z:()=>b});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),a=d()(l());a.push([y.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const b=a}}]);})();
