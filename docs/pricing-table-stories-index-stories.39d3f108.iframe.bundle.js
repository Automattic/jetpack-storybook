"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9671],{"../components/components/pricing-table/stories/index.stories.tsx":(y,m,e)=>{e.r(m),e.d(m,{__namedExportsOrder:()=>J,_default:()=>B,default:()=>V});var c=e("../components/components/button/index.tsx"),o=e("../components/components/product-price/index.tsx"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=e("../components/components/icon-tooltip/index.tsx"),h=e("../components/components/layout/use-breakpoint-match/index.ts"),p=e("../components/components/terms-of-service/index.tsx"),s=e("../components/components/text/index.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(f),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss"),u={};u.insert="head",u.singleton=!1;var j=L()(T.A,u);const n=T.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=a.__,x=d("Included","jetpack-components"),E=d("Not included","jetpack-components"),k=d("Coming soon","jetpack-components"),A=(0,_.createContext)(void 0),O=(b,P,w)=>b?{lg:k,default:(0,a.sprintf)(d("%s coming soon","jetpack-components"),w)}:{lg:P?x:E,default:P?w:(0,a.sprintf)(d("%s not included","jetpack-components"),w)},v=({isIncluded:b=!1,isComingSoon:P=!1,index:w=0,label:C=null,tooltipInfo:S,tooltipTitle:I,tooltipClassName:M=""})=>{const[N]=(0,h.A)("lg"),F=(0,_.useContext)(A)[w],z=P||b,G=F.name,H=F.tooltipInfo,Z=F.tooltipTitle,Q=S||!N&&H,K=O(P,b,G),$=N?K.lg:K.default;return(0,t.jsxs)("div",{className:(0,i.A)(n.item,n.value),children:[(0,t.jsx)(r.A,{className:(0,i.A)(n.icon,z?n["icon-check"]:n["icon-cross"]),size:32,icon:z?l.A:g.A}),(0,t.jsx)(s.Ay,{variant:"body-small",children:C||$}),Q&&(0,t.jsx)(D.A,{title:I||Z,iconClassName:n["popover-icon"],className:(0,i.A)(n.popover,M),placement:"bottom-end",iconSize:14,offset:4,wide:!!(I&&S),children:(0,t.jsx)(s.Ay,{variant:"body-small",component:"div",children:S||H})})]})},R=({children:b})=>(0,t.jsx)("div",{className:n.header,children:b}),U=({primary:b=!1,children:P})=>{let w=0;return(0,t.jsx)("div",{className:(0,i.A)(n.card,{[n["is-primary"]]:b}),children:_.Children.map(P,C=>{const S=C;return S.type===v?(w++,(0,_.cloneElement)(S,{index:w-1})):S})})},W=({title:b,items:P,children:w,showIntroOfferDisclaimer:C=!1})=>{const[S]=(0,h.A)("lg");return(0,t.jsxs)(A.Provider,{value:P,children:[(0,t.jsx)("div",{className:(0,i.A)(n.container,{[n["is-viewport-large"]]:S}),style:{"--rows":P.length+1,"--columns":_.Children.toArray(w).length+1},children:(0,t.jsxs)("div",{className:n.table,children:[(0,t.jsx)(s.Ay,{variant:"headline-small",children:b}),S&&P.map((I,M)=>(0,t.jsxs)("div",{className:(0,i.A)(n.item,{[n["last-feature"]]:M===P.length-1}),children:[(0,t.jsx)(s.Ay,{variant:"body-small",children:(0,t.jsx)("strong",{children:I.name})}),I.tooltipInfo&&(0,t.jsx)(D.A,{title:I.tooltipTitle,iconClassName:n["popover-icon"],className:n.popover,placement:I.tooltipPlacement?I.tooltipPlacement:"bottom-end",iconSize:14,offset:4,wide:!!(I.tooltipTitle&&I.tooltipInfo),children:(0,t.jsx)(s.Ay,{variant:"body-small",children:I.tooltipInfo})})]},M)),w]})}),(0,t.jsx)("div",{className:n["tos-container"],children:(0,t.jsxs)("div",{className:n.tos,children:[C&&(0,t.jsx)(s.Ay,{variant:"body-small",children:d("Reduced pricing is a limited offer for the first year and renews at regular price.","jetpack-components")}),(0,t.jsx)(p.A,{multipleButtons:!0})]})})]})};var ee=`import Button from '../../button/index.js';
import ProductPrice from '../../product-price/index.js';
import PricingTable, {
	PricingTableColumn,
	PricingTableHeader,
	PricingTableItem,
} from '../index.js';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof PricingTable > = {
	title: 'JS Packages/Components/Pricing Table',
	component: PricingTable,
	subcomponents: { PricingTableColumn, PricingTableHeader, PricingTableItem },
};

export default meta;

const Template: StoryFn< typeof PricingTable > = args => {
	return (
		<PricingTable { ...args }>
			<PricingTableColumn primary>
				<PricingTableHeader>
					<ProductPrice
						price={ 9.95 }
						offPrice={ 4.98 }
						legend="/month, billed yearly"
						currency="USD"
						hideDiscountLabel={ args?.hideDiscountLabel }
					/>
					<Button fullWidth>Get Premium</Button>
				</PricingTableHeader>
				<PricingTableItem isIncluded={ true } label={ <strong>Up to 1000</strong> } />
				<PricingTableItem isIncluded={ true } tooltipInfo={ 'This is an info' } />
				<PricingTableItem
					isIncluded={ true }
					tooltipInfo={ 'This is an info with title' }
					tooltipTitle={ 'Small title' }
				/>
				<PricingTableItem isIncluded={ true } />
				<PricingTableItem isIncluded={ true } />
			</PricingTableColumn>
			<PricingTableColumn>
				<PricingTableHeader>
					<ProductPrice price={ 0 } legend="Free forever" currency="USD" hidePriceFraction />
					<Button fullWidth variant="secondary">
						Start for free
					</Button>
				</PricingTableHeader>
				<PricingTableItem isIncluded={ true } label="Up to 300" />
				<PricingTableItem
					isIncluded={ false }
					label="This is not included"
					tooltipInfo="This has a tooltip, so its overwrites the default info on small screens"
				/>
				<PricingTableItem isIncluded={ false } />
				<PricingTableItem isIncluded={ true } />
				<PricingTableItem isIncluded={ true } />
			</PricingTableColumn>
		</PricingTable>
	);
};

const DefaultArgs = {
	title: 'Buy premium, or start for free',
	items: [
		{ name: 'Feature A with limit', tooltipInfo: 'Default info for Feature A' },
		{ name: 'Feature B', tooltipInfo: 'Default info for Feature B' },
		{
			name: 'Feature C with a longer title that will span multiple lines',
			tooltipInfo: 'Default info for Feature C',
			tooltipTitle: 'Title for C',
		},
		{ name: 'Feature D', tooltipInfo: 'Default info for Feature D', tooltipTitle: 'Title for D' },
		{ name: 'Feature E' },
	],
	hideDiscountLabel: false,
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;
`,te={_default:{startLoc:{col:17,line:15},endLoc:{col:1,line:76},startBody:{col:17,line:15},endBody:{col:1,line:76}}};const V={parameters:{storySource:{source:`import Button from '../../button/index.js';
import ProductPrice from '../../product-price/index.js';
import PricingTable, { PricingTableColumn, PricingTableHeader, PricingTableItem } from '../index.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Pricing Table',
  component: PricingTable,
  subcomponents: {
    PricingTableColumn,
    PricingTableHeader,
    PricingTableItem
  }
};
export default meta;
const Template = args => {
  return /*#__PURE__*/_jsxs(PricingTable, {
    ...args,
    children: [/*#__PURE__*/_jsxs(PricingTableColumn, {
      primary: true,
      children: [/*#__PURE__*/_jsxs(PricingTableHeader, {
        children: [/*#__PURE__*/_jsx(ProductPrice, {
          price: 9.95,
          offPrice: 4.98,
          legend: "/month, billed yearly",
          currency: "USD",
          hideDiscountLabel: args?.hideDiscountLabel
        }), /*#__PURE__*/_jsx(Button, {
          fullWidth: true,
          children: "Get Premium"
        })]
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true,
        label: /*#__PURE__*/_jsx("strong", {
          children: "Up to 1000"
        })
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true,
        tooltipInfo: 'This is an info'
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true,
        tooltipInfo: 'This is an info with title',
        tooltipTitle: 'Small title'
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true
      })]
    }), /*#__PURE__*/_jsxs(PricingTableColumn, {
      children: [/*#__PURE__*/_jsxs(PricingTableHeader, {
        children: [/*#__PURE__*/_jsx(ProductPrice, {
          price: 0,
          legend: "Free forever",
          currency: "USD",
          hidePriceFraction: true
        }), /*#__PURE__*/_jsx(Button, {
          fullWidth: true,
          variant: "secondary",
          children: "Start for free"
        })]
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true,
        label: "Up to 300"
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: false,
        label: "This is not included",
        tooltipInfo: "This has a tooltip, so its overwrites the default info on small screens"
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: false
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true
      }), /*#__PURE__*/_jsx(PricingTableItem, {
        isIncluded: true
      })]
    })]
  });
};
const DefaultArgs = {
  title: 'Buy premium, or start for free',
  items: [{
    name: 'Feature A with limit',
    tooltipInfo: 'Default info for Feature A'
  }, {
    name: 'Feature B',
    tooltipInfo: 'Default info for Feature B'
  }, {
    name: 'Feature C with a longer title that will span multiple lines',
    tooltipInfo: 'Default info for Feature C',
    tooltipTitle: 'Title for C'
  }, {
    name: 'Feature D',
    tooltipInfo: 'Default info for Feature D',
    tooltipTitle: 'Title for D'
  }, {
    name: 'Feature E'
  }],
  hideDiscountLabel: false
};
export const _default = Template.bind({});
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:1,line:76},startBody:{col:17,line:15},endBody:{col:1,line:76}}}}},title:"JS Packages/Components/Pricing Table",component:W,subcomponents:{PricingTableColumn:U,PricingTableHeader:R,PricingTableItem:v}},X=b=>(0,t.jsxs)(W,{...b,children:[(0,t.jsxs)(U,{primary:!0,children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(o.A,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:b?.hideDiscountLabel}),(0,t.jsx)(c.A,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(v,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(v,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(v,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(v,{isIncluded:!0}),(0,t.jsx)(v,{isIncluded:!0})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(o.A,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(c.A,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(v,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(v,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(v,{isIncluded:!1}),(0,t.jsx)(v,{isIncluded:!0}),(0,t.jsx)(v,{isIncluded:!0})]})]}),Y={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},B=X.bind({});B.args=Y;const J=["_default"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}}},"../components/components/layout/use-breakpoint-match/index.ts":(y,m,e)=>{e.d(m,{A:()=>p});var c=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(o),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),l={};l.insert="head",l.singleton=!1;var g=a()(r.A,l);const i=r.A.locals||{},_=["sm","md","lg"],D=(s,f,L)=>{const T=_.indexOf(s),u=T+1,j=f.includes("=");let n=[];return f.startsWith("<")&&(n=_.slice(0,j?u:T)),f.startsWith(">")&&(n=_.slice(j?T:u)),n?.length?n.some(t=>L[t]):L[s]},p=(s,f)=>{const L=Array.isArray(s)?s:[s],T=Array.isArray(f)?f:[f],[u,j,n]=_,t=(0,c.A)(i[u]),d=(0,c.A)(i[j]),x=(0,c.A)(i[n]),E={sm:t,md:d,lg:x};return L.map((k,A)=>{const O=T[A];return O?D(k,O,E):E[k]})}},"../components/components/product-price/index.tsx":(y,m,e)=>{e.d(m,{A:()=>T});var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(l),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),_={};_.insert="head",_.singleton=!1;var D=g()(i.A,_);const h=i.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({value:u,currency:j,isOff:n,hidePriceFraction:t})=>{const d=(0,o.A)(h.price,"product-price_price",{[h["is-not-off-price"]]:!n}),{symbol:x,integer:E,fraction:k}=(0,r.vA)(u,j),A=!t||!k.endsWith("00");return(0,p.jsxs)(a.Ay,{className:d,variant:"headline-medium",component:"p",children:[(0,p.jsx)(a.Ay,{className:h.symbol,component:"sup",variant:"title-medium",children:x}),E,A&&(0,p.jsx)(a.Ay,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,p.jsx)("strong",{children:k})})]})};try{s.displayName="Price",s.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:s.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch{}const f=c.__,T=({price:u,offPrice:j,currency:n="",showNotOffPrice:t=!0,hideDiscountLabel:d=!0,promoLabel:x="",legend:E=f("/month, paid yearly","jetpack-components"),isNotConvenientPrice:k=!1,hidePriceFraction:A=!1,children:O})=>{if(u==null&&j==null||!n)return null;t=t&&j!=null;const v=typeof u=="number"&&typeof j=="number"?Math.floor((u-j)/u*100):0,U=!d&&v&&v>0?v+f("% off","jetpack-components"):null;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:h.container,children:(0,p.jsxs)("div",{className:(0,o.A)(h["price-container"],"product-price_container"),children:[(0,p.jsx)(s,{value:j??u,currency:n,isOff:!k,hidePriceFraction:A}),t&&(0,p.jsx)(s,{value:u,currency:n,isOff:!1,hidePriceFraction:A}),U&&(0,p.jsx)(a.Ay,{className:(0,o.A)(h["promo-label"],"product-price_promo_label"),children:U})]})}),(0,p.jsxs)("div",{className:h.footer,children:[O||(0,p.jsx)(a.Ay,{className:(0,o.A)(h.legend,"product-price_legend"),children:E}),x&&(0,p.jsx)(a.Ay,{className:(0,o.A)(h["promo-label"],"product-price_promo_label"),children:x})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch{}},"../components/components/terms-of-service/index.tsx":(y,m,e)=>{e.d(m,{A:()=>t});var c=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../components/tools/jp-redirect/index.ts"),l=e("../components/components/text/index.tsx"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(g),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),D={};D.insert="head",D.singleton=!1;var h=i()(_.A,D);const p=_.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=o.__,L=({className:d,multipleButtons:x,agreeButtonLabel:E,isTextOnly:k,...A})=>{const O=()=>k?(0,s.jsx)(j,{}):x?(0,s.jsx)(T,{multipleButtonsLabels:x}):(0,s.jsx)(u,{agreeButtonLabel:E});return(0,s.jsx)(l.Ay,{className:(0,a.A)(d,"terms-of-service"),...A,children:O()})},T=({multipleButtonsLabels:d})=>Array.isArray(d)&&d.length>1?(0,c.A)((0,o.sprintf)(f("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack-components"),d[0],d[1]),{strong:(0,s.jsx)("strong",{}),tosLink:(0,s.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,s.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,c.A)(f("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack-components"),{tosLink:(0,s.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,s.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),u=({agreeButtonLabel:d})=>(0,c.A)((0,o.sprintf)(f("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack-components"),d),{strong:(0,s.jsx)("strong",{}),tosLink:(0,s.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,s.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),j=()=>(0,c.A)(f("By continuing you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2019s data</shareDetailsLink> with us. We\u2019ll check if that email is linked to an existing WordPress.com account or create a new one instantly.","jetpack-components"),{tosLink:(0,s.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,s.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),n=({slug:d,children:x})=>(0,s.jsx)("a",{className:"terms-of-service__link",href:(0,r.A)(d),rel:"noopener noreferrer",target:"_blank",children:x}),t=L;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"8"},{value:"4"},{value:"3"},{value:"5"},{value:"2"},{value:"6"},{value:"7"}]}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}},isTextOnly:{defaultValue:null,description:"If true, displays a simpler version of the terms without button references",name:"isTextOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch{}},"../components/tools/jp-redirect/index.ts":(y,m,e)=>{e.d(m,{A:()=>c});function c(o,a={}){const r={};let l;if(typeof window<"u"&&(l=window?.JP_CONNECTION_INITIAL_STATE?.calypsoEnv),o.search("https://")===0){const i=new URL(o);o=`https://${i.host}${i.pathname}`,r.url=encodeURIComponent(o)}else r.source=encodeURIComponent(o);for(const i in a)r[i]=encodeURIComponent(a[i]);return!Object.keys(r).includes("site")&&typeof jetpack_redirects<"u"&&Object.hasOwn(jetpack_redirects,"currentSiteRawUrl")&&(r.site=jetpack_redirects.currentBlogID??jetpack_redirects.currentSiteRawUrl),l&&(r.calypso_env=l),"https://jetpack.com/redirect/?"+Object.keys(r).map(i=>i+"="+r[i]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(y,m,e)=>{e.d(m,{A:()=>g});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),l=r()(o());l.push([y.id,"",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss":(y,m,e)=>{e.d(m,{A:()=>g});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),l=r()(o());l.push([y.id,'.TQEdY1YwmHhIEgpvFjuU{--padding: calc(var(--spacing-base) * 4);color:var(--jp-black)}.vJ6UeC0fnWyPRFfRgoc7{--gap: calc(var(--spacing-base) * 3);position:relative;padding:var(--padding) 0}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7{display:grid;grid-template-columns:repeat(var(--columns), 1fr);grid-auto-flow:column;grid-template-rows:repeat(var(--rows), minmax(min-content, max-content));column-gap:var(--gap)}.W5Ut5fqhN8UWDBcpn4yM{margin-top:var(--padding)}.k53TEwZkBzxK5_xTQ5fg .W5Ut5fqhN8UWDBcpn4yM{display:contents}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*{background:var(--jp-white);position:relative}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;box-shadow:0px 4px 24px rgba(0,0,0,.05)}.W5Ut5fqhN8UWDBcpn4yM>:first-child{border-top-left-radius:var(--jp-border-radius);border-top-right-radius:var(--jp-border-radius);border-width:1px 1px 0}.W5Ut5fqhN8UWDBcpn4yM>:last-child{border-width:0 1px 1px;border-bottom-left-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius)}.r2Abkgn9Ila57vvjmDGT{padding:var(--padding);display:flex;flex-direction:column;justify-content:space-between}.kOMg2z_X6welgpzz4H5L{display:flex;align-items:center;padding-bottom:calc(var(--spacing-base)*2);position:relative}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2)){padding-top:calc(var(--spacing-base)*2)}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{content:"";position:absolute;top:0;left:var(--padding);right:var(--padding);height:1px;z-index:5;background-color:var(--jp-gray)}.k53TEwZkBzxK5_xTQ5fg .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:calc(100% + var(--gap));left:0;right:unset}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7>:last-child .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:100%}.kOMg2z_X6welgpzz4H5L:last-of-type{padding-bottom:var(--padding)}.xYuwLvhhcKRzqS9uzJ9A{padding-bottom:var(--padding)}.q4fBYQt_JHXnlv3Jqd_d{padding-left:var(--padding);padding-right:var(--padding)}.TUkKHX2BwjFgY_qjFY5H{margin:0 var(--spacing-base);fill:var(--jp-gray);flex-shrink:0}.TUkKHX2BwjFgY_qjFY5H.O0iKl3sDUpBcMM8nPSIy{fill:var(--jp-green-40)}.TUkKHX2BwjFgY_qjFY5H.UhmGAfzBh8H3nl1e0_0c{fill:var(--jp-red-50)}.TLpXJ1VWQG0nhAUYyCsg{margin-left:auto}.k53TEwZkBzxK5_xTQ5fg .TLpXJ1VWQG0nhAUYyCsg{top:1px;margin:0 var(--spacing-base)}.kOMg2z_X6welgpzz4H5L .GwA4xd6sy16YxZrWr7Bg{fill:var(--jp-gray-20);flex-shrink:0}.ctvIeSVM5mmlPJoo9vfX{text-align:center;width:fit-content}.ctvIeSVM5mmlPJoo9vfX>a{color:#000}.k53TEwZkBzxK5_xTQ5fg .ctvIeSVM5mmlPJoo9vfX{padding-left:var(--padding);padding-right:var(--padding);grid-column:2;white-space:nowrap;overflow:hidden}.ZAh15RwHHK85LWYIlwXU{display:flex;align-items:right;justify-content:right;margin:0 calc(var(--spacing-base)*4)}',""]),l.locals={container:"TQEdY1YwmHhIEgpvFjuU",table:"vJ6UeC0fnWyPRFfRgoc7","is-viewport-large":"k53TEwZkBzxK5_xTQ5fg",card:"W5Ut5fqhN8UWDBcpn4yM","is-primary":"LylLXNFW1RvRzeQf542A",header:"r2Abkgn9Ila57vvjmDGT",item:"kOMg2z_X6welgpzz4H5L","last-feature":"xYuwLvhhcKRzqS9uzJ9A",value:"q4fBYQt_JHXnlv3Jqd_d",icon:"TUkKHX2BwjFgY_qjFY5H","icon-check":"O0iKl3sDUpBcMM8nPSIy","icon-cross":"UhmGAfzBh8H3nl1e0_0c",popover:"TLpXJ1VWQG0nhAUYyCsg","popover-icon":"GwA4xd6sy16YxZrWr7Bg",tos:"ctvIeSVM5mmlPJoo9vfX","tos-container":"ZAh15RwHHK85LWYIlwXU"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(y,m,e)=>{e.d(m,{A:()=>g});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),l=r()(o());l.push([y.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr:after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),l.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const g=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(y,m,e)=>{e.d(m,{A:()=>g});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),l=r()(o());l.push([y.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const g=l}}]);
