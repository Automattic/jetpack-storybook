(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6322],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(i,o,s)=>{"use strict";s.d(o,{R:()=>t,x:()=>u});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},a=d.createContext(e);function t(c){const r=d.useContext(a);return d.useMemo(function(){return typeof c=="function"?c(r):{...r,...c}},[r,c])}function u(c){let r;return c.disableParentContext?r=typeof c.components=="function"?c.components(e):c.components||e:r=t(c.components),d.createElement(a.Provider,{value:r},c.children)}},"../components/components/button/stories/index.mdx":(i,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>m});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=s("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=s("../../../node_modules/.pnpm/@storybook+blocks@8.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.3.5/node_modules/@storybook/blocks/dist/index.mjs"),u=s("../components/components/button/index.tsx"),c=s("../components/components/button/stories/index.stories.tsx");function r(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...l.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.W8,{of:c}),`
`,(0,e.jsx)(n.h1,{id:"button",children:"Button"}),`
`,(0,e.jsx)(n.p,{children:"This is a component to create buttons and links across Jetpack."}),`
`,(0,e.jsx)(n.h2,{id:"props",children:"Props"}),`
`,(0,e.jsxs)(n.p,{children:["Below is the current available props for ",(0,e.jsx)(n.code,{children:"Button"}),"."]}),`
`,(0,e.jsx)(n.h3,{id:"variant",children:"variant"}),`
`,(0,e.jsxs)(n.p,{children:["It accepts 4 variant types: ",(0,e.jsx)(n.code,{children:"primary"}),", ",(0,e.jsx)(n.code,{children:"secondary"}),", ",(0,e.jsx)(n.code,{children:"link"}),", ",(0,e.jsx)(n.code,{children:"external-link"}),"."]}),`
`,(0,e.jsxs)(t.Hl,{withSource:"open",children:[(0,e.jsx)(t.gG,{id:"js-packages-components-button--button-primary"}),(0,e.jsx)(t.gG,{id:"js-packages-components-button--button-secondary"}),(0,e.jsx)(t.gG,{id:"js-packages-components-button--button-link"}),(0,e.jsx)(t.gG,{id:"js-packages-components-button--button-external-link"})]}),`
`,(0,e.jsx)(n.h3,{id:"size",children:"size"}),`
`,(0,e.jsxs)(n.p,{children:["It accepts 2 size types: ",(0,e.jsx)(n.code,{children:"normal"})," and ",(0,e.jsx)(n.code,{children:"small"}),"."]}),`
`,(0,e.jsxs)(t.Hl,{children:[(0,e.jsx)(t.gG,{id:"js-packages-components-button--button-primary"}),(0,e.jsx)(u.A,{size:"small",children:"Jetpack Button"})]}),`
`,(0,e.jsx)(n.h3,{id:"weight",children:"weight"}),`
`,(0,e.jsxs)(n.p,{children:["It accepts 2 weight types: ",(0,e.jsx)(n.code,{children:"bold"})," and ",(0,e.jsx)(n.code,{children:"regular"}),". ",(0,e.jsx)(n.code,{children:"bold"})," as default."]}),`
`,(0,e.jsx)(n.h3,{id:"icon",children:"icon"}),`
`,(0,e.jsx)(n.p,{children:"It accepts an SVG, Component or string."}),`
`,(0,e.jsxs)(n.p,{children:["You could use the ones from ",(0,e.jsx)(n.a,{href:"https://github.com/WordPress/gutenberg/blob/trunk/packages/icons/src/index.js",rel:"nofollow",children:"@wordpress/icons"}),"."]}),`
`,(0,e.jsx)(t.Hl,{withSource:"open",children:(0,e.jsx)(t.gG,{id:"js-packages-components-button--icon"})}),`
`,(0,e.jsx)(n.h3,{id:"iconsize",children:"iconSize"}),`
`,(0,e.jsx)(n.p,{children:"It defines the size of the icon, it needs to be a number."}),`
`,(0,e.jsx)(n.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsx)(n.p,{children:"Disables the button removing cursor-pointer effect."}),`
`,(0,e.jsx)(t.Hl,{withSource:"open",children:(0,e.jsx)(t.gG,{id:"js-packages-components-button--disabled"})}),`
`,(0,e.jsx)(n.h3,{id:"isdestructive",children:"isDestructive"}),`
`,(0,e.jsx)(n.p,{children:"Set button on destructive state, which changes the color to red."}),`
`,(0,e.jsx)(t.Hl,{withSource:"open",children:(0,e.jsx)(t.gG,{id:"js-packages-components-button--destructive"})}),`
`,(0,e.jsx)(n.h3,{id:"isloading",children:"isLoading"}),`
`,(0,e.jsx)(n.p,{children:"Set button on loading state, which applies a centered spinner."}),`
`,(0,e.jsx)(t.Hl,{withSource:"open",children:(0,e.jsx)(t.gG,{id:"js-packages-components-button--loading"})}),`
`,(0,e.jsx)(n.h3,{id:"text",children:"text"}),`
`,(0,e.jsx)(n.p,{children:"It applies a text before children, it could be used together or on its own."}),`
`,(0,e.jsx)(t.Hl,{children:(0,e.jsx)(u.A,{text:"My Text",children:"My Children"})}),`
`,(0,e.jsx)(n.h3,{id:"fullwidth",children:"fullWidth"}),`
`,(0,e.jsx)(n.p,{children:"Stretches the button to take up the full width of the container."}),`
`,(0,e.jsx)(t.Hl,{withSource:"open",children:(0,e.jsx)(t.gG,{id:"js-packages-components-button--full-width"})})]})}function m(l={}){const{wrapper:n}={...(0,a.R)(),...l.components};return n?(0,e.jsx)(n,{...l,children:(0,e.jsx)(r,{...l})}):r(l)}},"../../../node_modules/.pnpm/@storybook+core@8.3.5/node_modules/@storybook/core/dist/components sync recursive":i=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.3.5/node_modules/@storybook/core/dist/components sync recursive",i.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.3.5/node_modules/@storybook/core/dist/theming sync recursive":i=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.3.5/node_modules/@storybook/core/dist/theming sync recursive",i.exports=o},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":i=>{function o(s){var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",i.exports=o}}]);})();
