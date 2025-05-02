"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7340],{"../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.stories.jsx":(C,i,e)=>{e.r(i),e.d(i,{Default:()=>n,WithAdditionalColumn:()=>r,WithCustomTrigger:()=>s,WithVideo:()=>a,__namedExportsOrder:()=>P,default:()=>_});var m=e("../components/components/product-price/index.tsx"),p=e("../components/components/jetpack-logo/index.tsx"),f=e("../../../node_modules/.pnpm/@wordpress+i18n@5.22.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.30.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),l=e("../../../node_modules/.pnpm/react-router@6.30.0_react@18.3.1/node_modules/react-router/dist/index.js"),j=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx"),c=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx");const g=e.p+"static/media/boost.9e9a227e.png";var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`import { ProductPrice, JetpackLogo } from '@automattic/jetpack-components';
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
`,y={Default:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},WithAdditionalColumn:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},WithVideo:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},WithCustomTrigger:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}}};const h=f.__,_={parameters:{storySource:{source:`import { ProductPrice, JetpackLogo } from '@automattic/jetpack-components';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},"with-additional-column":{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},"with-video":{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}},"with-custom-trigger":{startLoc:{col:17,line:42},endLoc:{col:2,line:51},startBody:{col:17,line:42},endBody:{col:2,line:51}}}}},title:"Packages/My Jetpack/Product Interstitial Modal",component:c.A},d={title:"Jetpack Boost",description:"Automatically regenerate critical CSS and hunt down image issues with ease.",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(j.A,{features:["Automated critical CSS","Image size analyzer","Performance history","Image quality control","Concatenate JS and CSS","Image CDN","Image guide"]})}),priceComponent:(0,t.jsx)(m.A,{currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"}),modalTriggerButtonLabel:"Open Modal",buttonLabel:"Upgrade now",isWithVideo:!1,secondaryColumn:(0,t.jsx)("img",{src:g,alt:"Boost"}),secondaryButtonHref:"https://jetpack.com",secondaryButtonHasExternalLink:!0},u=v=>(0,t.jsx)(o.I9,{children:(0,t.jsx)(l.BV,{children:(0,t.jsx)(l.qh,{path:"/",element:(0,t.jsx)(c.A,{...v})})})}),n=u.bind({}),r=u.bind({});r.args={...d,secondaryColumn:(0,t.jsx)("div",{children:"CTA Content"}),additionalColumn:(0,t.jsx)("div",{children:"Additional Column"})};const a=u.bind({});a.args={...d,isWithVideo:!0,secondaryColumn:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("iframe",{width:"621",height:"447",src:"https://video.wordpress.com/embed/whyeZF1t?cover=1&autoPlay=0&controls=0&loop=1&muted=0&persistVolume=1&playsinline=0&preloadContent=metadata&useAverageColor=1&posterUrl=https%3A%2F%2Fjetpack.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fthumbnail-1.png&hd=1",allowFullScreen:!0,allow:"clipboard-write",title:h("Discover Jetpack AI","jetpack-my-jetpack")}),(0,t.jsx)("script",{src:"https://videopress.com/videopress-iframe.js"})]})};const s=u.bind({});s.args={...d,modalTriggerButtonLabel:void 0,customModalTrigger:(0,t.jsx)(p.A,{style:{cursor:"pointer"}})},n.parameters={},n.args=d;const P=["Default","WithAdditionalColumn","WithVideo","WithCustomTrigger"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...s.parameters?.docs?.source}}}},"../components/components/jetpack-logo/index.tsx":(C,i,e)=>{e.d(i,{A:()=>c});var m=e("../../../node_modules/.pnpm/@wordpress+i18n@5.22.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=m.__,c=({logoColor:g="#069e08",showText:t=!0,className:x,height:y=32,...h})=>{const _=t?"0 0 118 32":"0 0 32 32";return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:_,className:(0,p.A)("jetpack-logo",x),"aria-labelledby":"jetpack-logo-title",height:y,...h,role:"img",children:[(0,o.jsx)("title",{id:"jetpack-logo-title",children:l("Jetpack Logo","jetpack-components")}),(0,o.jsx)("path",{fill:g,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,o.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,o.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,o.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,o.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,o.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,o.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})}}}]);
