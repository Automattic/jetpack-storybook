(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1999,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(m,_,s)=>{"use strict";s.r(_),s.d(_,{MDXContext:()=>e,MDXProvider:()=>p,useMDXComponents:()=>h,withMDXComponents:()=>l});var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=a.createContext({});function l(d){return c;function c(r){const t=h(r.components);return a.createElement(d,{...r,allComponents:t})}}function h(d){const c=a.useContext(e);return a.useMemo(()=>typeof d=="function"?d(c):{...c,...d},[c,d])}const o={};function p({components:d,children:c,disableParentContext:r}){let t;return r?t=typeof d=="function"?d({}):d||o:t=h(d),a.createElement(e.Provider,{value:t},c)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(m,_,s)=>{var a=Object.defineProperty,e=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,h=Object.prototype.hasOwnProperty,o=(r,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of l(t))!h.call(r,u)&&u!==i&&a(r,u,{get:()=>t[u],enumerable:!(n=e(t,u))||n.enumerable});return r},p=(r,t,i)=>(o(r,t,"default"),i&&o(i,t,"default")),d=r=>o(a({},"__esModule",{value:!0}),r),c={};m.exports=d(c),p(c,s("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),m.exports)},"../components/components/button/stories/index.mdx":(m,_,s)=>{"use strict";s.r(_),s.d(_,{default:()=>t});var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),h=s.n(l),o=s("../../../node_modules/.pnpm/@storybook+blocks@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),p=s("../components/components/button/index.tsx"),d=s("../components/components/button/stories/index.stories.tsx");function c(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",a:"a"},(0,l.useMDXComponents)(),i.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:d}),`
`,(0,e.jsx)(n.h1,{id:"button",children:"Button"}),`
`,(0,e.jsx)(n.p,{children:"This is a component to create buttons and links across Jetpack."}),`
`,(0,e.jsx)(n.h2,{id:"props",children:"Props"}),`
`,(0,e.jsxs)(n.p,{children:["Below is the current available props for ",(0,e.jsx)(n.code,{children:"Button"}),"."]}),`
`,(0,e.jsx)(n.h3,{id:"variant",children:"variant"}),`
`,(0,e.jsxs)(n.p,{children:["It accepts 4 variant types: ",(0,e.jsx)(n.code,{children:"primary"}),", ",(0,e.jsx)(n.code,{children:"secondary"}),", ",(0,e.jsx)(n.code,{children:"link"}),", ",(0,e.jsx)(n.code,{children:"external-link"}),"."]}),`
`,(0,e.jsxs)(o.Xz,{withSource:"open",children:[(0,e.jsx)(o.oG,{id:"js-packages-components-button--button-primary"}),(0,e.jsx)(o.oG,{id:"js-packages-components-button--button-secondary"}),(0,e.jsx)(o.oG,{id:"js-packages-components-button--button-link"}),(0,e.jsx)(o.oG,{id:"js-packages-components-button--button-external-link"})]}),`
`,(0,e.jsx)(n.h3,{id:"size",children:"size"}),`
`,(0,e.jsxs)(n.p,{children:["It accepts 2 size types: ",(0,e.jsx)(n.code,{children:"normal"})," and ",(0,e.jsx)(n.code,{children:"small"}),"."]}),`
`,(0,e.jsxs)(o.Xz,{children:[(0,e.jsx)(o.oG,{id:"js-packages-components-button--button-primary"}),(0,e.jsx)(p.Z,{size:"small",children:"Jetpack Button"})]}),`
`,(0,e.jsx)(n.h3,{id:"weight",children:"weight"}),`
`,(0,e.jsxs)(n.p,{children:["It accepts 2 weight types: ",(0,e.jsx)(n.code,{children:"bold"})," and ",(0,e.jsx)(n.code,{children:"regular"}),". ",(0,e.jsx)(n.code,{children:"bold"})," as default."]}),`
`,(0,e.jsx)(n.h3,{id:"icon",children:"icon"}),`
`,(0,e.jsx)(n.p,{children:"It accepts an SVG, Component or string."}),`
`,(0,e.jsxs)(n.p,{children:["You could use the ones from ",(0,e.jsx)(n.a,{href:"https://github.com/WordPress/gutenberg/blob/trunk/packages/icons/src/index.js",target:"_blank",rel:"nofollow noopener noreferrer",children:"@wordpress/icons"}),"."]}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-button--icon"})}),`
`,(0,e.jsx)(n.h3,{id:"iconsize",children:"iconSize"}),`
`,(0,e.jsx)(n.p,{children:"It defines the size of the icon, it needs to be a number."}),`
`,(0,e.jsx)(n.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsx)(n.p,{children:"Disables the button removing cursor-pointer effect."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-button--disabled"})}),`
`,(0,e.jsx)(n.h3,{id:"isdestructive",children:"isDestructive"}),`
`,(0,e.jsx)(n.p,{children:"Set button on destructive state, which changes the color to red."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-button--destructive"})}),`
`,(0,e.jsx)(n.h3,{id:"isloading",children:"isLoading"}),`
`,(0,e.jsx)(n.p,{children:"Set button on loading state, which applies a centered spinner."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-button--loading"})}),`
`,(0,e.jsx)(n.h3,{id:"text",children:"text"}),`
`,(0,e.jsx)(n.p,{children:"It applies a text before children, it could be used together or on its own."}),`
`,(0,e.jsx)(o.Xz,{children:(0,e.jsx)(p.Z,{text:"My Text",children:"My Children"})}),`
`,(0,e.jsx)(n.h3,{id:"fullwidth",children:"fullWidth"}),`
`,(0,e.jsx)(n.p,{children:"Stretches the button to take up the full width of the container."}),`
`,(0,e.jsx)(o.Xz,{withSource:"open",children:(0,e.jsx)(o.oG,{id:"js-packages-components-button--full-width"})})]})}function r(i={}){const{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),i.components);return n?(0,e.jsx)(n,Object.assign({},i,{children:(0,e.jsx)(c,i)})):c(i)}const t=r}}]);})();
