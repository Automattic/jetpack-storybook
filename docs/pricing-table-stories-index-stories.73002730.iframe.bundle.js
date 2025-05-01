"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9671],{"../components/components/pricing-table/stories/index.stories.tsx":(T,_,e)=>{e.r(_),e.d(_,{__namedExportsOrder:()=>J,_default:()=>B,default:()=>V});var c=e("../components/components/button/index.tsx"),s=e("../components/components/product-price/index.tsx"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),x=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=e("../components/components/icon-tooltip/index.tsx"),v=e("../components/components/layout/use-breakpoint-match/index.ts"),m=e("../components/components/terms-of-service/index.tsx"),u=e("../components/components/text/index.tsx"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(l),I=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss"),d={};d.insert="head",d.singleton=!1;var h=P()(I.A,d);const n=I.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=a.__,p=j("Included","jetpack-components"),y=j("Not included","jetpack-components"),w=j("Coming soon","jetpack-components"),E=(0,g.createContext)(void 0),L=(b,k,S)=>b?{lg:w,default:(0,a.sprintf)(j("%s coming soon","jetpack-components"),S)}:{lg:k?p:y,default:k?S:(0,a.sprintf)(j("%s not included","jetpack-components"),S)},f=({isIncluded:b=!1,isComingSoon:k=!1,index:S=0,label:C=null,tooltipInfo:D,tooltipTitle:A,tooltipClassName:M=""})=>{const[N]=(0,v.A)("lg"),F=(0,g.useContext)(E)[S],z=k||b,G=F.name,H=F.tooltipInfo,Z=F.tooltipTitle,Q=D||!N&&H,K=L(k,b,G),$=N?K.lg:K.default;return(0,t.jsxs)("div",{className:(0,i.A)(n.item,n.value),children:[(0,t.jsx)(r.A,{className:(0,i.A)(n.icon,z?n["icon-check"]:n["icon-cross"]),size:32,icon:z?o.A:x.A}),(0,t.jsx)(u.Ay,{variant:"body-small",children:C||$}),Q&&(0,t.jsx)(O.A,{title:A||Z,iconClassName:n["popover-icon"],className:(0,i.A)(n.popover,M),placement:"bottom-end",iconSize:14,offset:4,wide:!!(A&&D),children:(0,t.jsx)(u.Ay,{variant:"body-small",component:"div",children:D||H})})]})},R=({children:b})=>(0,t.jsx)("div",{className:n.header,children:b}),U=({primary:b=!1,children:k})=>{let S=0;return(0,t.jsx)("div",{className:(0,i.A)(n.card,{[n["is-primary"]]:b}),children:g.Children.map(k,C=>{const D=C;return D.type===f?(S++,(0,g.cloneElement)(D,{index:S-1})):D})})},W=({title:b,items:k,children:S,showIntroOfferDisclaimer:C=!1})=>{const[D]=(0,v.A)("lg");return(0,t.jsxs)(E.Provider,{value:k,children:[(0,t.jsx)("div",{className:(0,i.A)(n.container,{[n["is-viewport-large"]]:D}),style:{"--rows":k.length+1,"--columns":g.Children.toArray(S).length+1},children:(0,t.jsxs)("div",{className:n.table,children:[(0,t.jsx)(u.Ay,{variant:"headline-small",children:b}),D&&k.map((A,M)=>(0,t.jsxs)("div",{className:(0,i.A)(n.item,{[n["last-feature"]]:M===k.length-1}),children:[(0,t.jsx)(u.Ay,{variant:"body-small",children:(0,t.jsx)("strong",{children:A.name})}),A.tooltipInfo&&(0,t.jsx)(O.A,{title:A.tooltipTitle,iconClassName:n["popover-icon"],className:n.popover,placement:A.tooltipPlacement?A.tooltipPlacement:"bottom-end",iconSize:14,offset:4,wide:!!(A.tooltipTitle&&A.tooltipInfo),children:(0,t.jsx)(u.Ay,{variant:"body-small",children:A.tooltipInfo})})]},M)),S]})}),(0,t.jsx)("div",{className:n["tos-container"],children:(0,t.jsxs)("div",{className:n.tos,children:[C&&(0,t.jsx)(u.Ay,{variant:"body-small",children:j("Reduced pricing is a limited offer for the first year and renews at regular price.","jetpack-components")}),(0,t.jsx)(m.A,{multipleButtons:!0})]})})]})};var ee=`import Button from '../../button/index.tsx';
import ProductPrice from '../../product-price/index.tsx';
import PricingTable, {
	PricingTableColumn,
	PricingTableHeader,
	PricingTableItem,
} from '../index.tsx';
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
`,te={_default:{startLoc:{col:17,line:15},endLoc:{col:1,line:76},startBody:{col:17,line:15},endBody:{col:1,line:76}}};const V={parameters:{storySource:{source:`import Button from '../../button/index.tsx';
import ProductPrice from '../../product-price/index.tsx';
import PricingTable, { PricingTableColumn, PricingTableHeader, PricingTableItem } from '../index.tsx';
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:1,line:76},startBody:{col:17,line:15},endBody:{col:1,line:76}}}}},title:"JS Packages/Components/Pricing Table",component:W,subcomponents:{PricingTableColumn:U,PricingTableHeader:R,PricingTableItem:f}},X=b=>(0,t.jsxs)(W,{...b,children:[(0,t.jsxs)(U,{primary:!0,children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(s.A,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:b?.hideDiscountLabel}),(0,t.jsx)(c.A,{fullWidth:!0,children:"Get Premium"})]}),(0,t.jsx)(f,{isIncluded:!0,label:(0,t.jsx)("strong",{children:"Up to 1000"})}),(0,t.jsx)(f,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,t.jsx)(f,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,t.jsx)(f,{isIncluded:!0}),(0,t.jsx)(f,{isIncluded:!0})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(s.A,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,t.jsx)(c.A,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,t.jsx)(f,{isIncluded:!0,label:"Up to 300"}),(0,t.jsx)(f,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,t.jsx)(f,{isIncluded:!1}),(0,t.jsx)(f,{isIncluded:!0}),(0,t.jsx)(f,{isIncluded:!0})]})]}),Y={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},B=X.bind({});B.args=Y;const J=["_default"];B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}}},"../components/components/layout/use-breakpoint-match/index.ts":(T,_,e)=>{e.d(_,{A:()=>m});var c=e("../../../node_modules/.pnpm/@wordpress+compose@7.21.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(s),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var x=a()(r.A,o);const i=r.A.locals||{},g=["sm","md","lg"],O=(u,l,P)=>{const I=g.indexOf(u),d=I+1,h=l.includes("=");let n=[];return l.startsWith("<")&&(n=g.slice(0,h?d:I)),l.startsWith(">")&&(n=g.slice(h?I:d)),n?.length?n.some(t=>P[t]):P[u]},m=(u,l)=>{const P=Array.isArray(u)?u:[u],I=Array.isArray(l)?l:[l],[d,h,n]=g,t=(0,c.A)(i[d]),j=(0,c.A)(i[h]),p=(0,c.A)(i[n]),y={sm:t,md:j,lg:p};return P.map((w,E)=>{const L=I[E];return L?O(w,L,y):y[w]})}},"../components/components/product-price/index.tsx":(T,_,e)=>{e.d(_,{A:()=>I});var c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss"),g={};g.insert="head",g.singleton=!1;var O=x()(i.A,g);const v=i.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({value:d,currency:h,isOff:n,hidePriceFraction:t})=>{const j=(0,s.A)(v.price,"product-price_price",{[v["is-not-off-price"]]:!n}),{symbol:p,integer:y,fraction:w}=(0,r.vA)(d,h),E=!t||!w.endsWith("00");return(0,m.jsxs)(a.Ay,{className:j,variant:"headline-medium",component:"p",children:[(0,m.jsx)(a.Ay,{className:v.symbol,component:"sup",variant:"title-medium",children:p}),y,E&&(0,m.jsx)(a.Ay,{component:"sup",variant:"body-small","data-testid":"PriceFraction",children:(0,m.jsx)("strong",{children:w})})]})};try{u.displayName="Price",u.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/price.tsx#Price"]={docgenInfo:u.__docgenInfo,name:"Price",path:"../components/components/product-price/price.tsx#Price"})}catch{}const l=c.__,I=({price:d,offPrice:h,currency:n="",showNotOffPrice:t=!0,hideDiscountLabel:j=!0,promoLabel:p="",legend:y=l("/month, paid yearly","jetpack-components"),isNotConvenientPrice:w=!1,hidePriceFraction:E=!1,children:L})=>{if(d==null&&h==null||!n)return null;t=t&&h!=null;const f=typeof d=="number"&&typeof h=="number"?Math.floor((d-h)/d*100):0,U=!j&&f&&f>0?f+l("% off","jetpack-components"):null;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:v.container,children:(0,m.jsxs)("div",{className:(0,s.A)(v["price-container"],"product-price_container"),children:[(0,m.jsx)(u,{value:h??d,currency:n,isOff:!w,hidePriceFraction:E}),t&&(0,m.jsx)(u,{value:d,currency:n,isOff:!1,hidePriceFraction:E}),U&&(0,m.jsx)(a.Ay,{className:(0,s.A)(v["promo-label"],"product-price_promo_label"),children:U})]})}),(0,m.jsxs)("div",{className:v.footer,children:[L||(0,m.jsx)(a.Ay,{className:(0,s.A)(v.legend,"product-price_legend"),children:y}),p&&(0,m.jsx)(a.Ay,{className:(0,s.A)(v["promo-label"],"product-price_promo_label"),children:p})]})]})};try{Price.displayName="Price",Price.__docgenInfo={description:"React component to render a Price composition.",displayName:"Price",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/product-price/index.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"../components/components/product-price/index.tsx#Price"})}catch{}},"../components/components/terms-of-service/index.tsx":(T,_,e)=>{e.d(_,{A:()=>j});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+element@6.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../components/tools/jp-redirect/index.ts"),x=e("../components/components/text/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(i),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),v={};v.insert="head",v.singleton=!1;var m=g()(O.A,v);const u=O.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=a.__,I=({className:p,multipleButtons:y,agreeButtonLabel:w,isTextOnly:E,...L})=>{const f=()=>E?(0,l.jsx)(n,{}):y?(0,l.jsx)(d,{multipleButtonsLabels:y}):(0,l.jsx)(h,{agreeButtonLabel:w});return(0,l.jsx)(x.Ay,{className:(0,r.A)(p,"terms-of-service"),...L,children:f()})},d=({multipleButtonsLabels:p})=>Array.isArray(p)&&p.length>1?(0,s.A)((0,a.sprintf)(P("By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack-components"),p[0],p[1]),{strong:(0,l.jsx)("strong",{}),tosLink:(0,l.jsx)(t,{slug:"wpcom-tos"}),shareDetailsLink:(0,l.jsx)(t,{slug:"jetpack-support-what-data-does-jetpack-sync"})}):(0,s.A)(P("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack-components"),{tosLink:(0,l.jsx)(t,{slug:"wpcom-tos"}),shareDetailsLink:(0,l.jsx)(t,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),h=({agreeButtonLabel:p})=>(0,s.A)((0,a.sprintf)(P("By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2018s data</shareDetailsLink> with us.","jetpack-components"),p),{strong:(0,l.jsx)("strong",{}),tosLink:(0,l.jsx)(t,{slug:"wpcom-tos"}),shareDetailsLink:(0,l.jsx)(t,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),n=()=>(0,s.A)(P("By continuing you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site\u2019s data</shareDetailsLink> with us. We\u2019ll check if that email is linked to an existing WordPress.com account or create a new one instantly.","jetpack-components"),{tosLink:(0,l.jsx)(t,{slug:"wpcom-tos"}),shareDetailsLink:(0,l.jsx)(t,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),t=({slug:p,children:y})=>(0,l.jsx)(c.A,{className:"terms-of-service__link",href:(0,o.A)(p),children:y}),j=I;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'},{value:'"label"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}},isTextOnly:{defaultValue:null,description:"If true, displays a simpler version of the terms without button references",name:"isTextOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch{}},"../components/tools/jp-redirect/index.ts":(T,_,e)=>{e.d(_,{A:()=>c});function c(s,a={}){const r={};let o;if(typeof window<"u"&&(o=window?.JP_CONNECTION_INITIAL_STATE?.calypsoEnv),s.search("https://")===0){const i=new URL(s);s=`https://${i.host}${i.pathname}`,r.url=encodeURIComponent(s)}else r.source=encodeURIComponent(s);for(const i in a)r[i]=encodeURIComponent(a[i]);return!Object.keys(r).includes("site")&&typeof jetpack_redirects<"u"&&Object.hasOwn(jetpack_redirects,"currentSiteRawUrl")&&(r.site=jetpack_redirects.currentBlogID??jetpack_redirects.currentSiteRawUrl),o&&(r.calypso_env=o),"https://jetpack.com/redirect/?"+Object.keys(r).map(i=>i+"="+r[i]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(T,_,e)=>{e.d(_,{A:()=>x});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),o=r()(s());o.push([T.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const x=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/pricing-table/styles.module.scss":(T,_,e)=>{e.d(_,{A:()=>x});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),o=r()(s());o.push([T.id,'.TQEdY1YwmHhIEgpvFjuU{--padding: calc(var(--spacing-base) * 4);color:var(--jp-black)}.vJ6UeC0fnWyPRFfRgoc7{--gap: calc(var(--spacing-base) * 3);position:relative;padding:var(--padding) 0}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7{display:grid;grid-template-columns:repeat(var(--columns), 1fr);grid-auto-flow:column;grid-template-rows:repeat(var(--rows), minmax(min-content, max-content));column-gap:var(--gap)}.W5Ut5fqhN8UWDBcpn4yM{margin-top:var(--padding)}.k53TEwZkBzxK5_xTQ5fg .W5Ut5fqhN8UWDBcpn4yM{display:contents}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*{background:var(--jp-white);position:relative}.W5Ut5fqhN8UWDBcpn4yM.LylLXNFW1RvRzeQf542A>*::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;box-shadow:0 4px 24px rgba(0,0,0,.05)}.W5Ut5fqhN8UWDBcpn4yM>:first-child{border-top-left-radius:var(--jp-border-radius);border-top-right-radius:var(--jp-border-radius);border-width:1px 1px 0}.W5Ut5fqhN8UWDBcpn4yM>:last-child{border-width:0 1px 1px;border-bottom-left-radius:var(--jp-border-radius);border-bottom-right-radius:var(--jp-border-radius)}.r2Abkgn9Ila57vvjmDGT{padding:var(--padding);display:flex;flex-direction:column;justify-content:space-between}.kOMg2z_X6welgpzz4H5L{display:flex;align-items:center;padding-bottom:calc(var(--spacing-base)*2);position:relative}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2)){padding-top:calc(var(--spacing-base)*2)}.kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{content:"";position:absolute;top:0;left:var(--padding);right:var(--padding);height:1px;z-index:5;background-color:var(--jp-gray)}.k53TEwZkBzxK5_xTQ5fg .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:calc(100% + var(--gap));left:0;right:unset}.k53TEwZkBzxK5_xTQ5fg .vJ6UeC0fnWyPRFfRgoc7>:last-child .kOMg2z_X6welgpzz4H5L:not(:nth-child(2))::before{width:100%}.kOMg2z_X6welgpzz4H5L:last-of-type{padding-bottom:var(--padding)}.xYuwLvhhcKRzqS9uzJ9A{padding-bottom:var(--padding)}.q4fBYQt_JHXnlv3Jqd_d{padding-left:var(--padding);padding-right:var(--padding)}.TUkKHX2BwjFgY_qjFY5H{margin:0 var(--spacing-base);fill:var(--jp-gray);flex-shrink:0}.TUkKHX2BwjFgY_qjFY5H.O0iKl3sDUpBcMM8nPSIy{fill:var(--jp-green-40)}.TUkKHX2BwjFgY_qjFY5H.UhmGAfzBh8H3nl1e0_0c{fill:var(--jp-red-50)}.TLpXJ1VWQG0nhAUYyCsg{margin-left:auto}.k53TEwZkBzxK5_xTQ5fg .TLpXJ1VWQG0nhAUYyCsg{top:1px;margin:0 var(--spacing-base)}.kOMg2z_X6welgpzz4H5L .GwA4xd6sy16YxZrWr7Bg{fill:var(--jp-gray-20);flex-shrink:0}.ctvIeSVM5mmlPJoo9vfX{text-align:center;width:fit-content}.ctvIeSVM5mmlPJoo9vfX>a{color:#000}.k53TEwZkBzxK5_xTQ5fg .ctvIeSVM5mmlPJoo9vfX{padding-left:var(--padding);padding-right:var(--padding);grid-column:2;white-space:nowrap;overflow:hidden}.ZAh15RwHHK85LWYIlwXU{display:flex;align-items:right;justify-content:right;margin:0 calc(var(--spacing-base)*4)}',""]),o.locals={container:"TQEdY1YwmHhIEgpvFjuU",table:"vJ6UeC0fnWyPRFfRgoc7","is-viewport-large":"k53TEwZkBzxK5_xTQ5fg",card:"W5Ut5fqhN8UWDBcpn4yM","is-primary":"LylLXNFW1RvRzeQf542A",header:"r2Abkgn9Ila57vvjmDGT",item:"kOMg2z_X6welgpzz4H5L","last-feature":"xYuwLvhhcKRzqS9uzJ9A",value:"q4fBYQt_JHXnlv3Jqd_d",icon:"TUkKHX2BwjFgY_qjFY5H","icon-check":"O0iKl3sDUpBcMM8nPSIy","icon-cross":"UhmGAfzBh8H3nl1e0_0c",popover:"TLpXJ1VWQG0nhAUYyCsg","popover-icon":"GwA4xd6sy16YxZrWr7Bg",tos:"ctvIeSVM5mmlPJoo9vfX","tos-container":"ZAh15RwHHK85LWYIlwXU"};const x=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/product-price/style.module.scss":(T,_,e)=>{e.d(_,{A:()=>x});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),o=r()(s());o.push([T.id,'.kZP242RB98xhhepEOf3l{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.JJ4pk9KHpko596Kr392Z{display:flex;align-items:flex-start;flex-grow:2;flex-basis:0}.JJ4pk9KHpko596Kr392Z .nLG0avNxmxxkqepHWGq8{margin-left:auto}.sV0LYCwVj19suZ5kAI_b{display:inline-flex;align-items:flex-start;position:relative;flex:0 0 auto}.sV0LYCwVj19suZ5kAI_b:first-child{margin-right:calc(var(--spacing-base)*2)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr{color:var(--jp-gray-20)}.sV0LYCwVj19suZ5kAI_b.GeLoae_2_yniHgPzEzOr::after{content:" ";display:block;width:100%;height:3px;background:var(--jp-red);border-radius:var(--jp-border-radius);position:absolute;top:50%;margin-top:-2px;pointer-events:none}.ngaZxFRIwufbedzGxUnB{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;margin-bottom:calc(var(--spacing-base)*3)}.DdkI0S1qn5bUyDxnFkcd{color:var(--jp-gray-40);font-size:var(--font-body-small);line-height:20px}.DdkI0S1qn5bUyDxnFkcd::after{content:"\u200B"}.nLG0avNxmxxkqepHWGq8{background-color:var(--jp-yellow-10);border-radius:4px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);font-weight:600;font-size:13px;margin-left:var(--spacing-base)}.qPemya95rifka0IRYOH2{font-weight:400}',""]),o.locals={container:"kZP242RB98xhhepEOf3l","price-container":"JJ4pk9KHpko596Kr392Z","promo-label":"nLG0avNxmxxkqepHWGq8",price:"sV0LYCwVj19suZ5kAI_b","is-not-off-price":"GeLoae_2_yniHgPzEzOr",footer:"ngaZxFRIwufbedzGxUnB",legend:"DdkI0S1qn5bUyDxnFkcd",symbol:"qPemya95rifka0IRYOH2"};const x=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(T,_,e)=>{e.d(_,{A:()=>x});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(a),o=r()(s());o.push([T.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap}",""]);const x=o}}]);
