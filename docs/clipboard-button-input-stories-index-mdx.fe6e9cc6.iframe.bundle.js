(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8262,3424],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(i,n,t)=>{"use strict";t.d(n,{R:()=>l,x:()=>_});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},c=s.createContext(e);function l(r){const d=s.useContext(c);return s.useMemo(function(){return typeof r=="function"?r(d):{...d,...r}},[d,r])}function _(r){let d;return r.disableParentContext?d=typeof r.components=="function"?r.components(e):r.components||e:d=l(r.components),s.createElement(c.Provider,{value:d},r.children)}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=t("../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs"),_=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),r=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function d(a){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.R)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{of:r}),`
`,(0,e.jsx)(o.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,e.jsx)(o.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,e.jsx)(l.Hl,{sourceState:"shown",of:r._default}),`
`,(0,e.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(o.h3,{id:"text",children:"text"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["type: ",(0,e.jsx)(o.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,e.jsx)(o.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["type: ",(0,e.jsx)(o.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,e.jsx)(o.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["type: ",(0,e.jsx)(o.code,{children:"function"})]}),`
`,(0,e.jsxs)(o.li,{children:["default: ",(0,e.jsx)(o.code,{children:"noop"})]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,e.jsx)(o.h3,{id:"resettime",children:"resetTime"}),`
`,(0,e.jsxs)(o.ul,{children:[`
`,(0,e.jsxs)(o.li,{children:["type: ",(0,e.jsx)(o.code,{children:"number"})]}),`
`,(0,e.jsxs)(o.li,{children:["default: ",(0,e.jsx)(o.code,{children:"3000"})]}),`
`]}),`
`,(0,e.jsx)(o.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function u(a={}){const{wrapper:o}={...(0,c.R)(),...a.components};return o?(0,e.jsx)(o,{...a,children:(0,e.jsx)(d,{...a})}):d(a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive":i=>{function n(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@18.3.23_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist sync recursive",i.exports=n},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(i,n,t)=>{"use strict";t.r(n),t.d(n,{__namedExportsOrder:()=>u,_default:()=>d,default:()=>_});var s=t("storybook/actions"),e=t.n(s),c=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"Packages/VideoPress/Clipboard Button Input",component:c.A},d=(a=>(0,l.jsx)(c.A,{...a})).bind({});d.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,s.action)("onCopy"),resetTime:3e3};const u=["_default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...d.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive":i=>{function n(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components sync recursive",i.exports=n},"../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive":i=>{function n(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=()=>[],n.resolve=n,n.id="../../../node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming sync recursive",i.exports=n}}]);
