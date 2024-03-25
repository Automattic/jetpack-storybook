"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3010],{"../components/components/pricing-table/stories/index.stories.tsx":(P,m,n)=>{var v,T,b;n.r(m),n.d(m,{__namedExportsOrder:()=>D,_default:()=>g,default:()=>i});var r=n("../components/components/button/index.tsx"),o=n("../components/components/product-price/index.tsx"),t=n("../components/components/pricing-table/index.tsx"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i={title:"JS Packages/Components/Pricing Table",component:t.ZP,subcomponents:{PricingTableColumn:t.oK,PricingTableHeader:t.NE,PricingTableItem:t.kF}},f=h=>(0,e.jsxs)(t.ZP,{...h,children:[(0,e.jsxs)(t.oK,{primary:!0,children:[(0,e.jsxs)(t.NE,{children:[(0,e.jsx)(o.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:h==null?void 0:h.hideDiscountLabel}),(0,e.jsx)(r.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,e.jsx)(t.kF,{isIncluded:!0,label:(0,e.jsx)("strong",{children:"Up to 1000"})}),(0,e.jsx)(t.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,e.jsx)(t.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,e.jsx)(t.kF,{isIncluded:!0}),(0,e.jsx)(t.kF,{isIncluded:!0})]}),(0,e.jsxs)(t.oK,{children:[(0,e.jsxs)(t.NE,{children:[(0,e.jsx)(o.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,e.jsx)(r.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,e.jsx)(t.kF,{isIncluded:!0,label:"Up to 300"}),(0,e.jsx)(t.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,e.jsx)(t.kF,{isIncluded:!1}),(0,e.jsx)(t.kF,{isIncluded:!0}),(0,e.jsx)(t.kF,{isIncluded:!0})]})]}),_={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},g=f.bind({});g.args=_,g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(b=(T=g.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const D=["_default"]},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(P,m,n)=>{n.d(m,{ZP:()=>s});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=n.n(o),e=n("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=n("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),f=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),_=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function g(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const D=i.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,v=(0,e.Z)("svg",{target:"ea4tfvq2"})("width:",f.Z.spinnerSize,"px;height:",f.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",_.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),T={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},b=(0,e.Z)("circle",{target:"ea4tfvq1"})(T,";stroke:",_.D.gray[300],";"),h=(0,e.Z)("path",{target:"ea4tfvq0"})(T,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",D,";");function w({className:a,...d},c){return(0,r.createElement)(v,{className:t()("components-spinner",a),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...d,ref:c},(0,r.createElement)(b,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,r.createElement)(h,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const s=(0,r.forwardRef)(w)},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(P,m,n)=>{n.d(m,{Z:()=>_});var r=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const t="36px",e="12px",i={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:e,controlPaddingXLarge:`calc(${e} * 1.3334)`,controlPaddingXSmall:`calc(${e} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:t,controlHeightXSmall:`calc( ${t} * 0.6 )`,controlHeightSmall:`calc( ${t} * 0.8 )`,controlHeightLarge:`calc( ${t} * 1.2 )`,controlHeightXLarge:`calc( ${t} * 1.4 )`},f={toggleGroupControlBackgroundColor:i.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:i.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:i.controlBackgroundColor},_=Object.assign({},i,f,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,r.D)(2)}`,cardPaddingSmall:`${(0,r.D)(4)}`,cardPaddingMedium:`${(0,r.D)(4)} ${(0,r.D)(6)}`,cardPaddingLarge:`${(0,r.D)(6)} ${(0,r.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(P,m,n)=>{n.d(m,{Z:()=>I});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o,t,e,i;const f=/<(\/)?(\w+)\s*(\/)?>/g;function _(s,a,d,c,l){return{element:s,tokenStart:a,tokenLength:d,prevOffset:c,leadingTextStart:l,children:[]}}const g=(s,a)=>{if(o=s,t=0,e=[],i=[],f.lastIndex=0,!D(a))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(v(a));return(0,r.createElement)(r.Fragment,null,...e)},D=s=>{const a=typeof s=="object",d=a&&Object.values(s);return a&&d.length&&d.every(c=>(0,r.isValidElement)(c))};function v(s){const a=T(),[d,c,l,u]=a,p=i.length,E=l>t?t:null;if(!s[c])return b(),!1;switch(d){case"no-more-tokens":if(p!==0){const{leadingTextStart:S,tokenStart:B}=i.pop();e.push(o.substr(S,B))}return b(),!1;case"self-closed":return p===0?(E!==null&&e.push(o.substr(E,l-E)),e.push(s[c]),t=l+u,!0):(h(_(s[c],l,u)),t=l+u,!0);case"opener":return i.push(_(s[c],l,u,l+u,E)),t=l+u,!0;case"closer":if(p===1)return w(l),t=l+u,!0;const x=i.pop(),O=o.substr(x.prevOffset,l-x.prevOffset);x.children.push(O),x.prevOffset=l+u;const C=_(x.element,x.tokenStart,x.tokenLength,l+u);return C.children=x.children,h(C),t=l+u,!0;default:return b(),!1}}function T(){const s=f.exec(o);if(s===null)return["no-more-tokens"];const a=s.index,[d,c,l,u]=s,p=d.length;return u?["self-closed",l,a,p]:c?["closer",l,a,p]:["opener",l,a,p]}function b(){const s=o.length-t;s!==0&&e.push(o.substr(t,s))}function h(s){const{element:a,tokenStart:d,tokenLength:c,prevOffset:l,children:u}=s,p=i[i.length-1],E=o.substr(p.prevOffset,d-p.prevOffset);E&&p.children.push(E),p.children.push((0,r.cloneElement)(a,null,...u)),p.prevOffset=l||d+c}function w(s){const{element:a,leadingTextStart:d,prevOffset:c,tokenStart:l,children:u}=i.pop(),p=s?o.substr(c,s-c):o.substr(c);p&&u.push(p),d!==null&&e.push(o.substr(d,l-d)),e.push((0,r.cloneElement)(a,null,...u))}const I=g},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(P,m,n)=>{n.d(m,{Z:()=>t});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:e,size:i=24,...f},_){return(0,r.cloneElement)(e,{width:i,height:i,...f,ref:_})}const t=(0,r.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(P,m,n)=>{n.d(m,{Z:()=>e});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,r.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(o.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(P,m,n)=>{n.d(m,{Z:()=>e});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,r.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(P,m,n)=>{n.d(m,{Z:()=>e});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,r.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))}}]);})();
