(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8090,7340],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(l,n,o)=>{"use strict";o.d(n,{R:()=>r,x:()=>d});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},u=s.createContext(e);function r(i){const a=s.useContext(u);return s.useMemo(function(){return typeof i=="function"?i(a):{...a,...i}},[a,i])}function d(i){let a;return i.disableParentContext?a=typeof i.components=="function"?i.components(e):i.components||e:a=r(i.components),s.createElement(u.Provider,{value:a},i.children)}},"../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.mdx":(l,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>a});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=o("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=o("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),d=o("../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.stories.jsx");function i(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,u.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{of:d}),`
`,(0,e.jsx)(t.h1,{id:"product-interstitial-modal",children:"Product Interstitial Modal"}),`
`,(0,e.jsx)(t.p,{children:"This is a component to create modals with a consistent layout across Jetpack products. It supports a customizable trigger element, multiple columns, and various content sections."}),`
`,(0,e.jsx)(t.h2,{id:"component-variants-and-wrappers",children:"Component variants and wrappers"}),`
`,(0,e.jsx)(t.h3,{id:"in-my-jetpack",children:"In My Jetpack"}),`
`,(0,e.jsxs)(t.p,{children:["When including the component in My Jetpack ",(0,e.jsx)(t.code,{children:"<ProductInterstitialMyJetpack />"}),` component, there is a wrapper component provided that uses a product's slug to generate proper modal content and redirects users to the corresponding product page.
It also renders the feature list the same way as the old product interstitial page.`]}),`
`,(0,e.jsx)(t.h3,{id:"in-jetpack-plugins",children:"In Jetpack plugins"}),`
`,(0,e.jsx)(t.p,{children:"[Work in progress]"}),`
`,(0,e.jsx)(t.h2,{id:"props",children:"Props"}),`
`,(0,e.jsxs)(t.p,{children:["Below are the current available props for ",(0,e.jsx)(t.code,{children:"ProductInterstitialModal"}),"."]}),`
`,(0,e.jsx)(t.h3,{id:"modal-content",children:"Modal Content"}),`
`,(0,e.jsx)(t.h4,{id:"title-required",children:"title (required)"}),`
`,(0,e.jsx)(t.p,{children:"The title displayed at the top of the modal."}),`
`,(0,e.jsx)(t.h4,{id:"description",children:"description"}),`
`,(0,e.jsx)(t.p,{children:"Optional description text shown below the title."}),`
`,(0,e.jsx)(t.h4,{id:"children",children:"children"}),`
`,(0,e.jsx)(t.p,{children:"Content placed in the left column between the description and price component."}),`
`,(0,e.jsx)(t.h4,{id:"pricecomponent",children:"priceComponent"}),`
`,(0,e.jsx)(t.p,{children:"Optional pricing information component displayed at the bottom of the left column."}),`
`,(0,e.jsx)(t.h2,{id:"modal-triggers",children:"Modal Triggers"}),`
`,(0,e.jsx)(t.p,{children:"The modal can be triggered in two ways:"}),`
`,(0,e.jsx)(t.h4,{id:"default-button-trigger",children:"Default Button Trigger"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ProductInterstitialModal
  modalTriggerButtonLabel="Open Modal"
  modalTriggerButtonVariant="primary"
  // ... other props
/>
`})}),`
`,(0,e.jsx)(r.Hl,{of:d.Default}),`
`,(0,e.jsx)(t.h4,{id:"custom-trigger",children:"Custom Trigger"}),`
`,(0,e.jsx)(t.p,{children:"You can provide any React element as a custom trigger. The component will inject the onClick handler."}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,e.jsx)(r.Hl,{of:d.WithCustomTrigger}),`
`,(0,e.jsx)(t.h3,{id:"layout-options",children:"Layout Options"}),`
`,(0,e.jsx)(t.h4,{id:"secondarycolumn",children:"secondaryColumn"}),`
`,(0,e.jsx)(t.p,{children:"Content for the right column (or middle column when additionalColumn is used)."}),`
`,(0,e.jsxs)(t.p,{children:[`This column is designed to show a video or an image.
When using the video, the `,(0,e.jsx)(t.code,{children:"isWithVideo"})," prop should be set to ",(0,e.jsx)(t.code,{children:"true"})," to apply aspect ratio formatting."]}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,e.jsx)(r.Hl,{of:d.Default}),`
`,(0,e.jsx)(t.h4,{id:"additionalcolumn",children:"additionalColumn"}),`
`,(0,e.jsx)(t.p,{children:"Optional third column that creates a three-column layout."}),`
`,(0,e.jsx)(t.p,{children:"[Styling is a work in progress]"}),`
`,(0,e.jsx)(r.Hl,{of:d.WithAdditionalColumn}),`
`,(0,e.jsx)(t.h4,{id:"iswithvideo",children:"isWithVideo"}),`
`,(0,e.jsx)(t.p,{children:"When true, applies aspect ratio formatting for video content in the secondary column."}),`
`,(0,e.jsx)(t.p,{children:"[Example in progress]"}),`
`,(0,e.jsx)(t.h3,{id:"callbacks",children:"Callbacks"}),`
`,(0,e.jsx)(t.h4,{id:"onopen",children:"onOpen"}),`
`,(0,e.jsx)(t.p,{children:"Called when the modal is opened."}),`
`,(0,e.jsx)(t.h4,{id:"onclose",children:"onClose"}),`
`,(0,e.jsx)(t.p,{children:"Called when the modal is closed."}),`
`,(0,e.jsx)(t.h4,{id:"onmodalmainbuttonclick",children:"onModalMainButtonClick"}),`
`,(0,e.jsx)(t.p,{children:"Called when the main CTA button is clicked."}),`
`,(0,e.jsx)(t.h3,{id:"main-cta-options",children:"Main CTA Options"}),`
`,(0,e.jsx)(t.p,{children:"The modal supports two types of main CTA configurations:"}),`
`,(0,e.jsxs)(t.ol,{children:[`
`,(0,e.jsxs)(t.li,{children:["Using ",(0,e.jsx)(t.code,{children:"modalMainButton"})," for a custom button component"]}),`
`,(0,e.jsxs)(t.li,{children:["Using ",(0,e.jsx)(t.code,{children:"buttonLabel"}),", ",(0,e.jsx)(t.code,{children:"buttonHref"}),", and ",(0,e.jsx)(t.code,{children:"buttonHasExternalLink"})," for a standard button"]}),`
`]}),`
`,(0,e.jsx)(t.h3,{id:"secondary-button",children:"Secondary Button"}),`
`,(0,e.jsx)(t.h4,{id:"secondarybuttonhref",children:"secondaryButtonHref"}),`
`,(0,e.jsx)(t.p,{children:'URL for the "Learn more" link.'}),`
`,(0,e.jsx)(t.h4,{id:"secondarybuttonhasexternallink",children:"secondaryButtonHasExternalLink"}),`
`,(0,e.jsx)(t.p,{children:"When true, shows external link indicator on the secondary button."}),`
`,(0,e.jsx)(t.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,(0,e.jsx)(t.h3,{id:"basic-modal",children:"Basic Modal"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ProductInterstitialModal
  title="Jetpack Boost"
  description="Speed up your WordPress site"
  modalTriggerButtonLabel="Learn More"
  buttonLabel="Upgrade"
  onOpen={() => console.log('Modal opened')}
/>
`})}),`
`,(0,e.jsx)(t.h3,{id:"with-custom-trigger-and-video",children:"With Custom Trigger and Video"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ProductInterstitialModal
  title="Jetpack AI"
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  isWithVideo={true}
  secondaryColumn={<VideoComponent />}
/>
`})})]})}function a(c={}){const{wrapper:t}={...(0,u.R)(),...c.components};return t?(0,e.jsx)(t,{...c,children:(0,e.jsx)(i,{...c})}):i(c)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":l=>{function n(o){var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",l.exports=n},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":l=>{function n(o){var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",l.exports=n},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":l=>{function n(o){var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",l.exports=n},"../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.stories.jsx":(l,n,o)=>{"use strict";o.r(n),o.d(n,{Default:()=>m,WithAdditionalColumn:()=>p,WithCustomTrigger:()=>g,WithVideo:()=>h,__namedExportsOrder:()=>k,default:()=>y});var s=o("../components/components/product-price/index.tsx"),e=o("../components/components/jetpack-logo/index.tsx"),u=o("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),r=o("../../../node_modules/.pnpm/react-router-dom@6.28.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),d=o("../../../node_modules/.pnpm/react-router@6.28.1_react@18.3.1/node_modules/react-router/dist/index.js"),i=o("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx"),a=o("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx");const c=o.p+"static/media/boost.9e9a227e.png";var t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`import { ProductPrice, JetpackLogo } from '@automattic/jetpack-components';
import { __ } from '@wordpress/i18n';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductInterstitialFeatureList from '../product-interstifial-feature-list';
import ProductInterstitialModal from '../product-interstitial-modal';
import boostImage from './boost.png';

export default {
	title: 'Packages/My Jetpack/Product Interstitial Modal',
	component: ProductInterstitialModal,
};

const DefaultArgs = {
	title: 'Jetpack Boost',
	description: 'Automatically regenerate critical CSS and hunt down image issues with ease.',
	children: (
		<>
			<ProductInterstitialFeatureList
				features={ [
					'Automated critical CSS',
					'Image size analyzer',
					'Performance history',
					'Image quality control',
					'Concatenate JS and CSS',
					'Image CDN',
					'Image guide',
				] }
			/>
		</>
	),
	priceComponent: (
		<ProductPrice
			currency="USD"
			price={ 24.92 }
			offPrice={ 12.42 }
			showNotOffPrice={ true }
			isNotConvenientPrice={ false }
			hidePriceFraction={ false }
			hideDiscountLabel={ false }
			promoLabel="NEW"
			legend="/month, paid yearly"
		/>
	),
	modalTriggerButtonLabel: 'Open Modal',
	buttonLabel: 'Upgrade now',
	isWithVideo: false,
	secondaryColumn: <img src={ boostImage } alt="Boost" />,
	secondaryButtonHref: 'https://jetpack.com',
	secondaryButtonHasExternalLink: true,
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ProductInterstitialModal { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );

export const WithAdditionalColumn = Template.bind( {} );
WithAdditionalColumn.args = {
	...DefaultArgs,
	secondaryColumn: <div>CTA Content</div>,
	additionalColumn: <div>Additional Column</div>,
};

export const WithVideo = Template.bind( {} );
WithVideo.args = {
	...DefaultArgs,
	isWithVideo: true,
	secondaryColumn: (
		<>
			<iframe
				width="621"
				height="447"
				src="https://video.wordpress.com/embed/whyeZF1t?cover=1&autoPlay=0&controls=0&loop=1&muted=0&persistVolume=1&playsinline=0&preloadContent=metadata&useAverageColor=1&posterUrl=https%3A%2F%2Fjetpack.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fthumbnail-1.png&hd=1"
				allowFullScreen
				allow="clipboard-write"
				title={ __( 'Discover Jetpack AI', 'jetpack-my-jetpack' ) }
			></iframe>
			<script src="https://videopress.com/videopress-iframe.js"><\/script>
		</>
	),
};

export const WithCustomTrigger = Template.bind( {} );
WithCustomTrigger.args = {
	...DefaultArgs,
	modalTriggerButtonLabel: undefined,
	customModalTrigger: <JetpackLogo style={ { cursor: 'pointer' } } />,
};

Default.parameters = {};
Default.args = DefaultArgs;
`,C={Default:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},WithAdditionalColumn:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},WithVideo:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},WithCustomTrigger:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}}};const j=u.__,y={parameters:{storySource:{source:`import { ProductPrice, JetpackLogo } from '@automattic/jetpack-components';
import { __ as alias__ } from '@wordpress/i18n';
const __ = alias__;
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductInterstitialFeatureList from '../product-interstifial-feature-list';
import ProductInterstitialModal from '../product-interstitial-modal';
import boostImage from './boost.png';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Packages/My Jetpack/Product Interstitial Modal',
  component: ProductInterstitialModal
};
const DefaultArgs = {
  title: 'Jetpack Boost',
  description: 'Automatically regenerate critical CSS and hunt down image issues with ease.',
  children: /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(ProductInterstitialFeatureList, {
      features: ['Automated critical CSS', 'Image size analyzer', 'Performance history', 'Image quality control', 'Concatenate JS and CSS', 'Image CDN', 'Image guide']
    })
  }),
  priceComponent: /*#__PURE__*/_jsx(ProductPrice, {
    currency: "USD",
    price: 24.92,
    offPrice: 12.42,
    showNotOffPrice: true,
    isNotConvenientPrice: false,
    hidePriceFraction: false,
    hideDiscountLabel: false,
    promoLabel: "NEW",
    legend: "/month, paid yearly"
  }),
  modalTriggerButtonLabel: 'Open Modal',
  buttonLabel: 'Upgrade now',
  isWithVideo: false,
  secondaryColumn: /*#__PURE__*/_jsx("img", {
    src: boostImage,
    alt: "Boost"
  }),
  secondaryButtonHref: 'https://jetpack.com',
  secondaryButtonHasExternalLink: true
};
const Template = args => /*#__PURE__*/_jsx(HashRouter, {
  children: /*#__PURE__*/_jsx(Routes, {
    children: /*#__PURE__*/_jsx(Route, {
      path: "/",
      element: /*#__PURE__*/_jsx(ProductInterstitialModal, {
        ...args
      })
    })
  })
});
export const Default = Template.bind({});
export const WithAdditionalColumn = Template.bind({});
WithAdditionalColumn.args = {
  ...DefaultArgs,
  secondaryColumn: /*#__PURE__*/_jsx("div", {
    children: "CTA Content"
  }),
  additionalColumn: /*#__PURE__*/_jsx("div", {
    children: "Additional Column"
  })
};
export const WithVideo = Template.bind({});
WithVideo.args = {
  ...DefaultArgs,
  isWithVideo: true,
  secondaryColumn: /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("iframe", {
      width: "621",
      height: "447",
      src: "https://video.wordpress.com/embed/whyeZF1t?cover=1&autoPlay=0&controls=0&loop=1&muted=0&persistVolume=1&playsinline=0&preloadContent=metadata&useAverageColor=1&posterUrl=https%3A%2F%2Fjetpack.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fthumbnail-1.png&hd=1",
      allowFullScreen: true,
      allow: "clipboard-write",
      title: __('Discover Jetpack AI', 'jetpack-my-jetpack')
    }), /*#__PURE__*/_jsx("script", {
      src: "https://videopress.com/videopress-iframe.js"
    })]
  })
};
export const WithCustomTrigger = Template.bind({});
WithCustomTrigger.args = {
  ...DefaultArgs,
  modalTriggerButtonLabel: undefined,
  customModalTrigger: /*#__PURE__*/_jsx(JetpackLogo, {
    style: {
      cursor: 'pointer'
    }
  })
};
Default.parameters = {};
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},"with-additional-column":{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},"with-video":{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},"with-custom-trigger":{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}}}}},title:"Packages/My Jetpack/Product Interstitial Modal",component:a.A},_={title:"Jetpack Boost",description:"Automatically regenerate critical CSS and hunt down image issues with ease.",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.A,{features:["Automated critical CSS","Image size analyzer","Performance history","Image quality control","Concatenate JS and CSS","Image CDN","Image guide"]})}),priceComponent:(0,t.jsx)(s.A,{currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"}),modalTriggerButtonLabel:"Open Modal",buttonLabel:"Upgrade now",isWithVideo:!1,secondaryColumn:(0,t.jsx)("img",{src:c,alt:"Boost"}),secondaryButtonHref:"https://jetpack.com",secondaryButtonHasExternalLink:!0},x=b=>(0,t.jsx)(r.I9,{children:(0,t.jsx)(d.BV,{children:(0,t.jsx)(d.qh,{path:"/",element:(0,t.jsx)(a.A,{...b})})})}),m=x.bind({}),p=x.bind({});p.args={..._,secondaryColumn:(0,t.jsx)("div",{children:"CTA Content"}),additionalColumn:(0,t.jsx)("div",{children:"Additional Column"})};const h=x.bind({});h.args={..._,isWithVideo:!0,secondaryColumn:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("iframe",{width:"621",height:"447",src:"https://video.wordpress.com/embed/whyeZF1t?cover=1&autoPlay=0&controls=0&loop=1&muted=0&persistVolume=1&playsinline=0&preloadContent=metadata&useAverageColor=1&posterUrl=https%3A%2F%2Fjetpack.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fthumbnail-1.png&hd=1",allowFullScreen:!0,allow:"clipboard-write",title:j("Discover Jetpack AI","jetpack-my-jetpack")}),(0,t.jsx)("script",{src:"https://videopress.com/videopress-iframe.js"})]})};const g=x.bind({});g.args={..._,modalTriggerButtonLabel:void 0,customModalTrigger:(0,t.jsx)(e.A,{style:{cursor:"pointer"}})},m.parameters={},m.args=_;const k=["Default","WithAdditionalColumn","WithVideo","WithCustomTrigger"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...g.parameters?.docs?.source}}}},"../components/components/jetpack-logo/index.tsx":(l,n,o)=>{"use strict";o.d(n,{A:()=>a});var s=o("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),e=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=s.__,a=({logoColor:c="#069e08",showText:t=!0,className:f,height:C=32,...j})=>{const y=t?"0 0 118 32":"0 0 32 32";return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:y,className:(0,e.A)("jetpack-logo",f),"aria-labelledby":"jetpack-logo-title",height:C,...j,role:"img",children:[(0,r.jsx)("title",{id:"jetpack-logo-title",children:d("Jetpack Logo","jetpack-components")}),(0,r.jsx)("path",{fill:c,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,r.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,r.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,r.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,r.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,r.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,r.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})}}}]);
