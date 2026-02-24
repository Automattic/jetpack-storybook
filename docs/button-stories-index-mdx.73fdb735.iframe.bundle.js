"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6322],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"(h,l,s){s.d(l,{R:()=>t,x:()=>a});var i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n={},r=i.createContext(n);function t(o){const d=i.useContext(r);return i.useMemo(function(){return typeof o=="function"?o(d):{...d,...o}},[d,o])}function a(o){let d;return o.disableParentContext?d=typeof o.components=="function"?o.components(n):o.components||n:d=t(o.components),i.createElement(r.Provider,{value:d},o.children)}},"../components/components/button/stories/index.mdx"(h,l,s){s.r(l),s.d(l,{default:()=>u});var i=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=s("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.11_@types+react@18.3.28_storybook@10.2.11_@testing-library+d_4d7730636c6f908b74b0bdaf8c75fcc1/node_modules/@storybook/addon-docs/dist/blocks.js"),a=s("../components/components/button/index.tsx"),o=s("../components/components/button/stories/index.stories.tsx");function d(c){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...c.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.W8,{of:o}),`
`,(0,n.jsx)(e.h1,{id:"button",children:"Button"}),`
`,(0,n.jsx)(e.p,{children:"This is a component to create buttons and links across Jetpack."}),`
`,(0,n.jsx)(e.h2,{id:"props",children:"Props"}),`
`,(0,n.jsxs)(e.p,{children:["Below is the current available props for ",(0,n.jsx)(e.code,{children:"Button"}),"."]}),`
`,(0,n.jsx)(e.h3,{id:"variant",children:"variant"}),`
`,(0,n.jsxs)(e.p,{children:["It accepts 4 variant types: ",(0,n.jsx)(e.code,{children:"primary"}),", ",(0,n.jsx)(e.code,{children:"secondary"}),", ",(0,n.jsx)(e.code,{children:"link"}),", ",(0,n.jsx)(e.code,{children:"external-link"}),"."]}),`
`,(0,n.jsxs)(t.Hl,{withSource:"open",children:[(0,n.jsx)(t.gG,{id:"js-packages-components-button--button-primary"}),(0,n.jsx)(t.gG,{id:"js-packages-components-button--button-secondary"}),(0,n.jsx)(t.gG,{id:"js-packages-components-button--button-link"}),(0,n.jsx)(t.gG,{id:"js-packages-components-button--button-external-link"})]}),`
`,(0,n.jsx)(e.h3,{id:"size",children:"size"}),`
`,(0,n.jsxs)(e.p,{children:["It accepts 2 size types: ",(0,n.jsx)(e.code,{children:"normal"})," and ",(0,n.jsx)(e.code,{children:"small"}),"."]}),`
`,(0,n.jsxs)(t.Hl,{children:[(0,n.jsx)(t.gG,{id:"js-packages-components-button--button-primary"}),(0,n.jsx)(a.A,{size:"small",children:"Jetpack Button"})]}),`
`,(0,n.jsx)(e.h3,{id:"weight",children:"weight"}),`
`,(0,n.jsxs)(e.p,{children:["It accepts 2 weight types: ",(0,n.jsx)(e.code,{children:"bold"})," and ",(0,n.jsx)(e.code,{children:"regular"}),". ",(0,n.jsx)(e.code,{children:"bold"})," as default."]}),`
`,(0,n.jsx)(e.h3,{id:"icon",children:"icon"}),`
`,(0,n.jsx)(e.p,{children:"It accepts an SVG, Component or string."}),`
`,(0,n.jsxs)(e.p,{children:["You could use the ones from ",(0,n.jsx)(e.a,{href:"https://github.com/WordPress/gutenberg/blob/trunk/packages/icons/src/index.js",rel:"nofollow",children:"@wordpress/icons"}),"."]}),`
`,(0,n.jsx)(t.Hl,{withSource:"open",children:(0,n.jsx)(t.gG,{id:"js-packages-components-button--icon"})}),`
`,(0,n.jsx)(e.h3,{id:"iconsize",children:"iconSize"}),`
`,(0,n.jsx)(e.p,{children:"It defines the size of the icon, it needs to be a number."}),`
`,(0,n.jsx)(e.h3,{id:"disabled",children:"disabled"}),`
`,(0,n.jsx)(e.p,{children:"Disables the button removing cursor-pointer effect."}),`
`,(0,n.jsx)(t.Hl,{withSource:"open",children:(0,n.jsx)(t.gG,{id:"js-packages-components-button--disabled"})}),`
`,(0,n.jsx)(e.h3,{id:"isdestructive",children:"isDestructive"}),`
`,(0,n.jsx)(e.p,{children:"Set button on destructive state, which changes the color to red."}),`
`,(0,n.jsx)(t.Hl,{withSource:"open",children:(0,n.jsx)(t.gG,{id:"js-packages-components-button--destructive"})}),`
`,(0,n.jsx)(e.h3,{id:"isloading",children:"isLoading"}),`
`,(0,n.jsx)(e.p,{children:"Set button on loading state, which applies a centered spinner."}),`
`,(0,n.jsx)(t.Hl,{withSource:"open",children:(0,n.jsx)(t.gG,{id:"js-packages-components-button--loading"})}),`
`,(0,n.jsx)(e.h3,{id:"text",children:"text"}),`
`,(0,n.jsx)(e.p,{children:"It applies a text before children, it could be used together or on its own."}),`
`,(0,n.jsx)(t.Hl,{children:(0,n.jsx)(a.A,{text:"My Text",children:"My Children"})}),`
`,(0,n.jsx)(e.h3,{id:"fullwidth",children:"fullWidth"}),`
`,(0,n.jsx)(e.p,{children:"Stretches the button to take up the full width of the container."}),`
`,(0,n.jsx)(t.Hl,{withSource:"open",children:(0,n.jsx)(t.gG,{id:"js-packages-components-button--full-width"})})]})}function u(c={}){const{wrapper:e}={...(0,r.R)(),...c.components};return e?(0,n.jsx)(e,{...c,children:(0,n.jsx)(d,{...c})}):d(c)}}}]);
