import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{gt as n}from"./esm-DMppBOhL.js";import{a as r,n as i,t as a}from"./blocks-TEjL0r_t.js";import{t as o}from"./mdx-react-shim-B9MjlBiT.js";import{Default as s,WithAdditionalColumn as c,WithCustomTrigger as l,n as u,t as d}from"./index.stories-CUsLRs-5.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`product-interstitial-modal`,children:`Product Interstitial Modal`}),`
`,(0,m.jsx)(t.p,{children:`This is a component to create modals with a consistent layout across Jetpack products. It supports a customizable trigger element, multiple columns, and various content sections.`}),`
`,(0,m.jsx)(t.h2,{id:`component-variants-and-wrappers`,children:`Component variants and wrappers`}),`
`,(0,m.jsx)(t.h3,{id:`in-my-jetpack`,children:`In My Jetpack`}),`
`,(0,m.jsxs)(t.p,{children:[`When including the component in My Jetpack `,(0,m.jsx)(t.code,{children:`<ProductInterstitialMyJetpack />`}),` component, there is a wrapper component provided that uses a product's slug to generate proper modal content and redirects users to the corresponding product page.
It also renders the feature list the same way as the old product interstitial page.`]}),`
`,(0,m.jsx)(t.h3,{id:`in-jetpack-plugins`,children:`In Jetpack plugins`}),`
`,(0,m.jsx)(t.p,{children:`[Work in progress]`}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsxs)(t.p,{children:[`Below are the current available props for `,(0,m.jsx)(t.code,{children:`ProductInterstitialModal`}),`.`]}),`
`,(0,m.jsx)(t.h3,{id:`modal-content`,children:`Modal Content`}),`
`,(0,m.jsx)(t.h4,{id:`title-required`,children:`title (required)`}),`
`,(0,m.jsx)(t.p,{children:`The title displayed at the top of the modal.`}),`
`,(0,m.jsx)(t.h4,{id:`description`,children:`description`}),`
`,(0,m.jsx)(t.p,{children:`Optional description text shown below the title.`}),`
`,(0,m.jsx)(t.h4,{id:`children`,children:`children`}),`
`,(0,m.jsx)(t.p,{children:`Content placed in the left column between the description and price component.`}),`
`,(0,m.jsx)(t.h4,{id:`pricecomponent`,children:`priceComponent`}),`
`,(0,m.jsx)(t.p,{children:`Optional pricing information component displayed at the bottom of the left column.`}),`
`,(0,m.jsx)(t.h2,{id:`modal-triggers`,children:`Modal Triggers`}),`
`,(0,m.jsx)(t.p,{children:`The modal can be triggered in two ways:`}),`
`,(0,m.jsx)(t.h4,{id:`default-button-trigger`,children:`Default Button Trigger`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<ProductInterstitialModal
  modalTriggerButtonLabel="Open Modal"
  modalTriggerButtonVariant="primary"
  // ... other props
/>
`})}),`
`,(0,m.jsx)(a,{of:s}),`
`,(0,m.jsx)(t.h4,{id:`custom-trigger`,children:`Custom Trigger`}),`
`,(0,m.jsx)(t.p,{children:`You can provide any React element as a custom trigger. The component will inject the onClick handler.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h3,{id:`layout-options`,children:`Layout Options`}),`
`,(0,m.jsx)(t.h4,{id:`secondarycolumn`,children:`secondaryColumn`}),`
`,(0,m.jsx)(t.p,{children:`Content for the right column (or middle column when additionalColumn is used).`}),`
`,(0,m.jsxs)(t.p,{children:[`This column is designed to show a video or an image.
When using the video, the `,(0,m.jsx)(t.code,{children:`isWithVideo`}),` prop should be set to `,(0,m.jsx)(t.code,{children:`true`}),` to apply aspect ratio formatting.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<ProductInterstitialModal
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  // ... other props
/>
`})}),`
`,(0,m.jsx)(a,{of:s}),`
`,(0,m.jsx)(t.h4,{id:`additionalcolumn`,children:`additionalColumn`}),`
`,(0,m.jsx)(t.p,{children:`Optional third column that creates a three-column layout.`}),`
`,(0,m.jsx)(t.p,{children:`[Styling is a work in progress]`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h4,{id:`iswithvideo`,children:`isWithVideo`}),`
`,(0,m.jsx)(t.p,{children:`When true, applies aspect ratio formatting for video content in the secondary column.`}),`
`,(0,m.jsx)(t.p,{children:`[Example in progress]`}),`
`,(0,m.jsx)(t.h3,{id:`callbacks`,children:`Callbacks`}),`
`,(0,m.jsx)(t.h4,{id:`onopen`,children:`onOpen`}),`
`,(0,m.jsx)(t.p,{children:`Called when the modal is opened.`}),`
`,(0,m.jsx)(t.h4,{id:`onclose`,children:`onClose`}),`
`,(0,m.jsx)(t.p,{children:`Called when the modal is closed.`}),`
`,(0,m.jsx)(t.h4,{id:`onmodalmainbuttonclick`,children:`onModalMainButtonClick`}),`
`,(0,m.jsx)(t.p,{children:`Called when the main CTA button is clicked.`}),`
`,(0,m.jsx)(t.h3,{id:`main-cta-options`,children:`Main CTA Options`}),`
`,(0,m.jsx)(t.p,{children:`The modal supports two types of main CTA configurations:`}),`
`,(0,m.jsxs)(t.ol,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Using `,(0,m.jsx)(t.code,{children:`modalMainButton`}),` for a custom button component`]}),`
`,(0,m.jsxs)(t.li,{children:[`Using `,(0,m.jsx)(t.code,{children:`buttonLabel`}),`, `,(0,m.jsx)(t.code,{children:`buttonHref`}),`, and `,(0,m.jsx)(t.code,{children:`buttonHasExternalLink`}),` for a standard button`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`secondary-button`,children:`Secondary Button`}),`
`,(0,m.jsx)(t.h4,{id:`secondarybuttonhref`,children:`secondaryButtonHref`}),`
`,(0,m.jsx)(t.p,{children:`URL for the "Learn more" link.`}),`
`,(0,m.jsx)(t.h4,{id:`secondarybuttonhasexternallink`,children:`secondaryButtonHasExternalLink`}),`
`,(0,m.jsx)(t.p,{children:`When true, shows external link indicator on the secondary button.`}),`
`,(0,m.jsx)(t.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,m.jsx)(t.h3,{id:`basic-modal`,children:`Basic Modal`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<ProductInterstitialModal
  title="Jetpack Boost"
  description="Speed up your WordPress site"
  modalTriggerButtonLabel="Learn More"
  buttonLabel="Upgrade"
  onOpen={() => console.log('Modal opened')}
/>
`})}),`
`,(0,m.jsx)(t.h3,{id:`with-custom-trigger-and-video`,children:`With Custom Trigger and Video`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<ProductInterstitialModal
  title="Jetpack AI"
  customModalTrigger={<JetpackLogo style={{ cursor: 'pointer' }} />}
  isWithVideo={true}
  secondaryColumn={<VideoComponent />}
/>
`})})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),o(),r(),u()}))();export{p as default};