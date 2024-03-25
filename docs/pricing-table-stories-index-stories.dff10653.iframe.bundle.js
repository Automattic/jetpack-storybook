"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3367,731],{"../components/components/pricing-table/stories/index.stories.tsx":(P,o,n)=>{var s,l,a;n.r(o),n.d(o,{__namedExportsOrder:()=>p,_default:()=>i,default:()=>u});var d=n("../components/components/button/index.tsx"),c=n("../components/components/product-price/index.tsx"),t=n("../components/components/pricing-table/index.tsx"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u={title:"JS Packages/Components/Pricing Table",component:t.ZP,subcomponents:{PricingTableColumn:t.oK,PricingTableHeader:t.NE,PricingTableItem:t.kF}},m=r=>(0,e.jsxs)(t.ZP,{...r,children:[(0,e.jsxs)(t.oK,{primary:!0,children:[(0,e.jsxs)(t.NE,{children:[(0,e.jsx)(c.Z,{price:9.95,offPrice:4.98,legend:"/month, billed yearly",currency:"USD",hideDiscountLabel:r==null?void 0:r.hideDiscountLabel}),(0,e.jsx)(d.Z,{fullWidth:!0,children:"Get Premium"})]}),(0,e.jsx)(t.kF,{isIncluded:!0,label:(0,e.jsx)("strong",{children:"Up to 1000"})}),(0,e.jsx)(t.kF,{isIncluded:!0,tooltipInfo:"This is an info"}),(0,e.jsx)(t.kF,{isIncluded:!0,tooltipInfo:"This is an info with title",tooltipTitle:"Small title"}),(0,e.jsx)(t.kF,{isIncluded:!0}),(0,e.jsx)(t.kF,{isIncluded:!0})]}),(0,e.jsxs)(t.oK,{children:[(0,e.jsxs)(t.NE,{children:[(0,e.jsx)(c.Z,{price:0,legend:"Free forever",currency:"USD",hidePriceFraction:!0}),(0,e.jsx)(d.Z,{fullWidth:!0,variant:"secondary",children:"Start for free"})]}),(0,e.jsx)(t.kF,{isIncluded:!0,label:"Up to 300"}),(0,e.jsx)(t.kF,{isIncluded:!1,label:"This is not included",tooltipInfo:"This has a tooltip, so its overwrites the default info on small screens"}),(0,e.jsx)(t.kF,{isIncluded:!1}),(0,e.jsx)(t.kF,{isIncluded:!0}),(0,e.jsx)(t.kF,{isIncluded:!0})]})]}),f={title:"Buy premium, or start for free",items:[{name:"Feature A with limit",tooltipInfo:"Default info for Feature A"},{name:"Feature B",tooltipInfo:"Default info for Feature B"},{name:"Feature C with a longer title that will span multiple lines",tooltipInfo:"Default info for Feature C",tooltipTitle:"Title for C"},{name:"Feature D",tooltipInfo:"Default info for Feature D",tooltipTitle:"Title for D"},{name:"Feature E"}],hideDiscountLabel:!1},i=m.bind({});i.args=f,i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const p=["_default"]},"../../plugins/protect/src/js/components/pricing-table/stories/index.stories.jsx":(P,o,n)=>{var s,l,a;n.r(o),n.d(o,{Default:()=>i,__namedExportsOrder:()=>p,default:()=>m});var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=n("../../plugins/protect/src/js/state/store.js"),t=n("../../plugins/protect/src/js/components/interstitial-page/stories/mock.js"),e=n("../../plugins/protect/src/js/components/pricing-table/index.jsx"),u=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");window.jetpackProtectInitialState=t.r,(0,c.N)();const m={title:"Plugins/Protect/Pricing Table",component:e.Z,parameters:{layout:"centered",actions:{argTypesRegex:"^on.*"}},argTypes:{isCard:{control:{type:"boolean"}}}},i=(r=>(0,u.jsx)(e.Z,{...r})).bind({});i.args={isCard:!1,onAdd:()=>{}},i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <ConnectedPricingTable {...args} />;
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const p=["Default"]}}]);})();
