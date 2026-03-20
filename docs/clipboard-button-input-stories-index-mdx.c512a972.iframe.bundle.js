"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3424,8262],{"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx"(p,d,t){t.r(d),t.d(d,{default:()=>l});var c=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.28_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=t("../../../node_modules/.pnpm/@storybook+addon-docs@10.3.1_@types+react@18.3.28_storybook@10.3.1_@testing-library+dom_f723e8232cb2bbabbde2003e64dfd316/node_modules/@storybook/addon-docs/dist/blocks.js"),_=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),a=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function o(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.W8,{of:a}),`
`,(0,e.jsx)(n.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,e.jsx)(n.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,e.jsx)(r.Hl,{sourceState:"shown",of:a._default}),`
`,(0,e.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(n.h3,{id:"text",children:"text"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,e.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,e.jsx)(n.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`,(0,e.jsxs)(n.li,{children:["default: ",(0,e.jsx)(n.code,{children:"noop"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,e.jsx)(n.h3,{id:"resettime",children:"resetTime"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`,(0,e.jsxs)(n.li,{children:["default: ",(0,e.jsx)(n.code,{children:"3000"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function l(s={}){const{wrapper:n}={...(0,i.R)(),...s.components};return n?(0,e.jsx)(n,{...s,children:(0,e.jsx)(o,{...s})}):o(s)}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx"(p,d,t){t.r(d),t.d(d,{__namedExportsOrder:()=>l,_default:()=>o,default:()=>_});var c=t("storybook/actions"),e=t.n(c),i=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"Packages/VideoPress/Clipboard Button Input",component:i.A},o=(s=>(0,r.jsx)(i.A,{...s})).bind({});o.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,c.action)("onCopy"),resetTime:3e3};const l=["_default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...o.parameters?.docs?.source}}}}}]);
