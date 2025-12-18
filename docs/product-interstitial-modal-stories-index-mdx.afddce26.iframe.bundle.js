"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8090],{"../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.mdx":((_,c,n)=>{n.r(c),n.d(c,{default:()=>p});var j=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=n("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=n("../../../node_modules/.pnpm/@storybook+addon-docs@10.1.10_@types+react@18.3.26_storybook@10.1.10_@testing-library+d_8aed78f0f921385d44fea9a738f5043c/node_modules/@storybook/addon-docs/dist/blocks.js"),i=n("../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.stories.jsx");function l(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{of:i}),`
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
`,(0,e.jsx)(r.Hl,{of:i.Default}),`
`,(0,e.jsx)(t.h4,{id:"custom-trigger",children:"Custom Trigger"}),`
`,(0,e.jsx)(t.p,{children:"You can provide any React element as a custom trigger. The component will inject the onClick handler."}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,e.jsx)(r.Hl,{of:i.WithCustomTrigger}),`
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
`,(0,e.jsx)(r.Hl,{of:i.Default}),`
`,(0,e.jsx)(t.h4,{id:"additionalcolumn",children:"additionalColumn"}),`
`,(0,e.jsx)(t.p,{children:"Optional third column that creates a three-column layout."}),`
`,(0,e.jsx)(t.p,{children:"[Styling is a work in progress]"}),`
`,(0,e.jsx)(r.Hl,{of:i.WithAdditionalColumn}),`
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
`})})]})}function p(o={}){const{wrapper:t}={...(0,s.R)(),...o.components};return t?(0,e.jsx)(t,{...o,children:(0,e.jsx)(l,{...o})}):l(o)}}),"../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.stories.jsx":((_,c,n)=>{n.r(c),n.d(c,{Default:()=>a,WithAdditionalColumn:()=>d,WithCustomTrigger:()=>g,WithVideo:()=>m,__namedExportsOrder:()=>f,default:()=>x});var j=n("../components/components/product-price/index.tsx"),e=n("../components/components/jetpack-logo/index.tsx"),s=n("../../../node_modules/.pnpm/@wordpress+i18n@6.9.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),r=n("../../../node_modules/.pnpm/react-router@7.6.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs"),i=n("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx"),l=n("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx");const p=n.p+"static/media/boost.9e9a227e.png";var o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=s.__,x={title:"Packages/My Jetpack/Product Interstitial Modal",component:l.A},h={title:"Jetpack Boost",description:"Automatically regenerate critical CSS and hunt down image issues with ease.",children:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.A,{features:["Automated critical CSS","Performance history","Image quality control","Concatenate JS and CSS","Image CDN","Image guide"]})}),priceComponent:(0,o.jsx)(j.A,{currency:"USD",price:24.92,offPrice:12.42,showNotOffPrice:!0,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:!1,promoLabel:"NEW",legend:"/month, paid yearly"}),modalTriggerButtonLabel:"Open Modal",buttonLabel:"Upgrade now",isWithVideo:!1,secondaryColumn:(0,o.jsx)("img",{src:p,alt:"Boost"}),secondaryButtonHref:"https://jetpack.com",secondaryButtonHasExternalLink:!0},u=y=>(0,o.jsx)(r.I9,{children:(0,o.jsx)(r.BV,{children:(0,o.jsx)(r.qh,{path:"/",element:(0,o.jsx)(l.A,{...y})})})}),a=u.bind({}),d=u.bind({});d.args={...h,secondaryColumn:(0,o.jsx)("div",{children:"CTA Content"}),additionalColumn:(0,o.jsx)("div",{children:"Additional Column"})};const m=u.bind({});m.args={...h,isWithVideo:!0,secondaryColumn:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{width:"621",height:"447",src:"https://video.wordpress.com/embed/whyeZF1t?cover=1&autoPlay=0&controls=0&loop=1&muted=0&persistVolume=1&playsinline=0&preloadContent=metadata&useAverageColor=1&posterUrl=https%3A%2F%2Fjetpack.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fthumbnail-1.png&hd=1",allowFullScreen:!0,allow:"clipboard-write",title:t("Discover Jetpack AI","jetpack-my-jetpack")}),(0,o.jsx)("script",{src:"https://videopress.com/videopress-iframe.js"})]})};const g=u.bind({});g.args={...h,modalTriggerButtonLabel:void 0,customModalTrigger:(0,o.jsx)(e.A,{style:{cursor:"pointer"}})},a.parameters={},a.args=h;const f=["Default","WithAdditionalColumn","WithVideo","WithCustomTrigger"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ProductInterstitialModal {...args} />} />
        </Routes>
    </HashRouter>`,...g.parameters?.docs?.source}}}}),"../components/components/jetpack-logo/index.tsx":((_,c,n)=>{n.d(c,{A:()=>l});var j=n("../../../node_modules/.pnpm/@wordpress+i18n@6.9.0_patch_hash=0c63a888feb97f2f1d416ca013ad85c31b6360b41cc0b6e2b0ae28f778fbdc5b/node_modules/@wordpress/i18n/build-module/index.js"),e=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=j.__,l=({logoColor:p="#069e08",showText:o=!0,className:t,height:x=32,title:h,...u})=>{const a=o?"0 0 118 32":"0 0 32 32",d=h??r("Jetpack Logo","jetpack-components");return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:a,className:(0,e.A)("jetpack-logo",t),"aria-labelledby":"jetpack-logo-title",height:x,...u,role:"img",children:[(0,s.jsx)("title",{id:"jetpack-logo-title",children:d}),(0,s.jsx)("path",{fill:p,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,s.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,s.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,s.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,s.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,s.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,s.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})};try{jetpacklogo.displayName="jetpacklogo",jetpacklogo.__docgenInfo={description:"",displayName:"jetpacklogo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"32"},description:"",name:"height",required:!1,type:{name:"number"}},showText:{defaultValue:{value:"true"},description:"",name:"showText",required:!1,type:{name:"boolean"}},logoColor:{defaultValue:{value:"#069e08"},description:"",name:"logoColor",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/jetpack-logo/index.tsx#jetpacklogo"]={docgenInfo:jetpacklogo.__docgenInfo,name:"jetpacklogo",path:"../components/components/jetpack-logo/index.tsx#jetpacklogo"})}catch{}})}]);
