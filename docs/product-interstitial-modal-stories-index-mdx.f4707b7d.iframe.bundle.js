(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8090],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,o,t)=>{"use strict";t.d(o,{R:()=>i,x:()=>l});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=s.createContext(e);function i(r){const d=s.useContext(h);return s.useMemo(function(){return typeof r=="function"?r(d):{...d,...r}},[d,r])}function l(r){let d;return r.disableParentContext?d=typeof r.components=="function"?r.components(e):r.components||e:d=i(r.components),s.createElement(h.Provider,{value:d},r.children)}},"../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.mdx":(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>d});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),i=t("../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist/index.mjs"),l=t("../../packages/my-jetpack/_inc/components/product-interstitial-modal/stories/index.stories.jsx");function r(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,h.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.W8,{of:l}),`
`,(0,e.jsx)(n.h1,{id:"product-interstitial-modal",children:"Product Interstitial Modal"}),`
`,(0,e.jsx)(n.p,{children:"This is a component to create modals with a consistent layout across Jetpack products. It supports a customizable trigger element, multiple columns, and various content sections."}),`
`,(0,e.jsx)(n.h2,{id:"component-variants-and-wrappers",children:"Component variants and wrappers"}),`
`,(0,e.jsx)(n.h3,{id:"in-my-jetpack",children:"In My Jetpack"}),`
`,(0,e.jsxs)(n.p,{children:["When including the component in My Jetpack ",(0,e.jsx)(n.code,{children:"<ProductInterstitialMyJetpack />"}),` component, there is a wrapper component provided that uses a product's slug to generate proper modal content and redirects users to the corresponding product page.
It also renders the feature list the same way as the old product interstitial page.`]}),`
`,(0,e.jsx)(n.h3,{id:"in-jetpack-plugins",children:"In Jetpack plugins"}),`
`,(0,e.jsx)(n.p,{children:"[Work in progress]"}),`
`,(0,e.jsx)(n.h2,{id:"props",children:"Props"}),`
`,(0,e.jsxs)(n.p,{children:["Below are the current available props for ",(0,e.jsx)(n.code,{children:"ProductInterstitialModal"}),"."]}),`
`,(0,e.jsx)(n.h3,{id:"modal-content",children:"Modal Content"}),`
`,(0,e.jsx)(n.h4,{id:"title-required",children:"title (required)"}),`
`,(0,e.jsx)(n.p,{children:"The title displayed at the top of the modal."}),`
`,(0,e.jsx)(n.h4,{id:"description",children:"description"}),`
`,(0,e.jsx)(n.p,{children:"Optional description text shown below the title."}),`
`,(0,e.jsx)(n.h4,{id:"children",children:"children"}),`
`,(0,e.jsx)(n.p,{children:"Content placed in the left column between the description and price component."}),`
`,(0,e.jsx)(n.h4,{id:"pricecomponent",children:"priceComponent"}),`
`,(0,e.jsx)(n.p,{children:"Optional pricing information component displayed at the bottom of the left column."}),`
`,(0,e.jsx)(n.h2,{id:"modal-triggers",children:"Modal Triggers"}),`
`,(0,e.jsx)(n.p,{children:"The modal can be triggered in two ways:"}),`
`,(0,e.jsx)(n.h4,{id:"default-button-trigger",children:"Default Button Trigger"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<ProductInterstitialModal
  modalTriggerButtonLabel="Open Modal"
  modalTriggerButtonVariant="primary"
  // ... other props
/>
`})}),`
`,(0,e.jsx)(i.Hl,{of:l.Default}),`
`,(0,e.jsx)(n.h4,{id:"custom-trigger",children:"Custom Trigger"}),`
`,(0,e.jsx)(n.p,{children:"You can provide any React element as a custom trigger. The component will inject the onClick handler."}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,e.jsx)(i.Hl,{of:l.WithCustomTrigger}),`
`,(0,e.jsx)(n.h3,{id:"layout-options",children:"Layout Options"}),`
`,(0,e.jsx)(n.h4,{id:"secondarycolumn",children:"secondaryColumn"}),`
`,(0,e.jsx)(n.p,{children:"Content for the right column (or middle column when additionalColumn is used)."}),`
`,(0,e.jsxs)(n.p,{children:[`This column is designed to show a video or an image.
When using the video, the `,(0,e.jsx)(n.code,{children:"isWithVideo"})," prop should be set to ",(0,e.jsx)(n.code,{children:"true"})," to apply aspect ratio formatting."]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,e.jsx)(i.Hl,{of:l.Default}),`
`,(0,e.jsx)(n.h4,{id:"additionalcolumn",children:"additionalColumn"}),`
`,(0,e.jsx)(n.p,{children:"Optional third column that creates a three-column layout."}),`
`,(0,e.jsx)(n.p,{children:"[Styling is a work in progress]"}),`
`,(0,e.jsx)(i.Hl,{of:l.WithAdditionalColumn}),`
`,(0,e.jsx)(n.h4,{id:"iswithvideo",children:"isWithVideo"}),`
`,(0,e.jsx)(n.p,{children:"When true, applies aspect ratio formatting for video content in the secondary column."}),`
`,(0,e.jsx)(n.p,{children:"[Example in progress]"}),`
`,(0,e.jsx)(n.h3,{id:"callbacks",children:"Callbacks"}),`
`,(0,e.jsx)(n.h4,{id:"onopen",children:"onOpen"}),`
`,(0,e.jsx)(n.p,{children:"Called when the modal is opened."}),`
`,(0,e.jsx)(n.h4,{id:"onclose",children:"onClose"}),`
`,(0,e.jsx)(n.p,{children:"Called when the modal is closed."}),`
`,(0,e.jsx)(n.h4,{id:"onmodalmainbuttonclick",children:"onModalMainButtonClick"}),`
`,(0,e.jsx)(n.p,{children:"Called when the main CTA button is clicked."}),`
`,(0,e.jsx)(n.h3,{id:"main-cta-options",children:"Main CTA Options"}),`
`,(0,e.jsx)(n.p,{children:"The modal supports two types of main CTA configurations:"}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsxs)(n.li,{children:["Using ",(0,e.jsx)(n.code,{children:"modalMainButton"})," for a custom button component"]}),`
`,(0,e.jsxs)(n.li,{children:["Using ",(0,e.jsx)(n.code,{children:"buttonLabel"}),", ",(0,e.jsx)(n.code,{children:"buttonHref"}),", and ",(0,e.jsx)(n.code,{children:"buttonHasExternalLink"})," for a standard button"]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"secondary-button",children:"Secondary Button"}),`
`,(0,e.jsx)(n.h4,{id:"secondarybuttonhref",children:"secondaryButtonHref"}),`
`,(0,e.jsx)(n.p,{children:'URL for the "Learn more" link.'}),`
`,(0,e.jsx)(n.h4,{id:"secondarybuttonhasexternallink",children:"secondaryButtonHasExternalLink"}),`
`,(0,e.jsx)(n.p,{children:"When true, shows external link indicator on the secondary button."}),`
`,(0,e.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,(0,e.jsx)(n.h3,{id:"basic-modal",children:"Basic Modal"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<ProductInterstitialModal
  title="Jetpack Boost"
  description="Speed up your WordPress site"
  modalTriggerButtonLabel="Learn More"
  buttonLabel="Upgrade"
  onOpen={() => console.log('Modal opened')}
/>
`})}),`
`,(0,e.jsx)(n.h3,{id:"with-custom-trigger-and-video",children:"With Custom Trigger and Video"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<ProductInterstitialModal
  title="Jetpack AI"
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  isWithVideo={true}
  secondaryColumn={<VideoComponent />}
/>
`})})]})}function d(a={}){const{wrapper:n}={...(0,h.R)(),...a.components};return n?(0,e.jsx)(n,{...a,children:(0,e.jsx)(r,{...a})}):r(a)}},"../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive":c=>{function o(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+blocks@8.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.5.8/node_modules/@storybook/blocks/dist sync recursive",c.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive":c=>{function o(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/components sync recursive",c.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive":c=>{function o(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.5.8/node_modules/@storybook/core/dist/theming sync recursive",c.exports=o}}]);
