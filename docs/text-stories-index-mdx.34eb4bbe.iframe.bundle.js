"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1943,2593],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":((v,x,t)=>{t.d(x,{R:()=>s,x:()=>m});var l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},i=l.createContext(e);function s(a){const o=l.useContext(i);return l.useMemo(function(){return typeof a=="function"?a(o):{...o,...a}},[o,a])}function m(a){let o;return a.disableParentContext?o=typeof a.components=="function"?a.components(e):a.components||e:o=s(a.components),l.createElement(i.Provider,{value:o},a.children)}}),"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js":((v,x,t)=>{/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(d,r){return d===r&&(d!==0||1/d===1/r)||d!==d&&r!==r}var i=typeof Object.is=="function"?Object.is:e,s=l.useState,m=l.useEffect,a=l.useLayoutEffect,o=l.useDebugValue;function j(d,r){var h=r(),u=s({inst:{value:h,getSnapshot:r}}),p=u[0].inst,_=u[1];return a(function(){p.value=h,p.getSnapshot=r,c(p)&&_({inst:p})},[d,h,r]),m(function(){return c(p)&&_({inst:p}),d(function(){c(p)&&_({inst:p})})},[d]),o(h),h}function c(d){var r=d.getSnapshot;d=d.value;try{var h=r();return!i(d,h)}catch{return!0}}function n(d,r){return r()}var f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?n:j;x.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:f}),"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js":((v,x,t)=>{v.exports=t("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")}),"../components/components/text/stories/index.mdx":((v,x,t)=>{t.r(x),t.d(x,{default:()=>j});var l=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=t("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=t("../../../node_modules/.pnpm/@storybook+addon-docs@10.0.8_@types+react@18.3.26_storybook@10.1.10_@testing-library+do_d31df856c234f5c19cb2cf947aadec0a/node_modules/@storybook/addon-docs/dist/blocks.js"),m=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),a=t("../components/components/text/stories/index.stories.tsx");function o(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...c.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.W8,{of:a}),`
`,(0,e.jsx)(n.h1,{id:"text",children:"Text"}),`
`,(0,e.jsx)(n.p,{children:"Set of React jetpack-components intended to facilitate when dealing with rendering text content."}),`
`,(0,e.jsx)(n.h2,{id:"text-",children:"<Text />"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"Text"})," is the primary component that renders text, supporting the following features:"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Typography"}),": provided by the ThemeProvider component."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Spacing"}),": A simple range of shorthand classes to modify the text element's margin and padding."]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"props",children:"Props"}),`
`,(0,e.jsx)(n.h4,{id:"variant",children:"variant"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": ",(0,e.jsx)(n.code,{children:"headline-medium"}),", ",(0,e.jsx)(n.code,{children:"headline-small"}),", ",(0,e.jsx)(n.code,{children:"headline-small-regular"}),", ",(0,e.jsx)(n.code,{children:"title-medium"}),`,
`,(0,e.jsx)(n.code,{children:"title-medium-semi-bold"}),", ",(0,e.jsx)(n.code,{children:"title-small"}),", ",(0,e.jsx)(n.code,{children:"body"}),", ",(0,e.jsx)(n.code,{children:"body-small"}),", ",(0,e.jsx)(n.code,{children:"body-extra-small"}),`,
`,(0,e.jsx)(n.code,{children:"body-extra-small-bold"}),", ",(0,e.jsx)(n.code,{children:"label"}),"."]}),`
`,(0,e.jsx)(n.p,{children:"Define the text Typography variant among the options offered by the ThemeProvider component."}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:(0,m.A)`
  import Text from '@automattic/jetpack-components';
  
  function Hello() {
    return (
      <Text variant="headline-medium">
        Hello, Text component!
      </Text>
    );
  }
`}),`
`,(0,e.jsx)(n.h4,{id:"spacing-properties",children:"Spacing properties"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": number, one of ",(0,e.jsx)(n.code,{children:"0"}),", ",(0,e.jsx)(n.code,{children:"1"}),", ",(0,e.jsx)(n.code,{children:"2"}),", ",(0,e.jsx)(n.code,{children:"3"}),", ",(0,e.jsx)(n.code,{children:"4"}),", ",(0,e.jsx)(n.code,{children:"5"}),", ",(0,e.jsx)(n.code,{children:"6"}),", ",(0,e.jsx)(n.code,{children:"7"}),", ",(0,e.jsx)(n.code,{children:"8"}),"."]}),`
`,(0,e.jsxs)(n.p,{children:["Use the following properties to define margin and padding of the text. The unit is defined by the ",(0,e.jsx)(n.code,{children:"--spacing-base"}),` value.
You can see how it works playing with the `,(0,e.jsx)(n.a,{href:"./?path=/story/js-packages-components-text--box-model",children:"Box Model"})," story."]}),`
`,(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"Prop"}),(0,e.jsx)(n.th,{children:"Description"})]})}),(0,e.jsxs)(n.tbody,{children:[(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"m"})}),(0,e.jsx)(n.td,{children:"margin"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mt"})}),(0,e.jsx)(n.td,{children:"margin-top"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mr"})}),(0,e.jsx)(n.td,{children:"margin-right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mb"})}),(0,e.jsx)(n.td,{children:"margin-bottom"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"ml"})}),(0,e.jsx)(n.td,{children:"margin-left"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"mx"})}),(0,e.jsx)(n.td,{children:"margin left and right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"my"})}),(0,e.jsx)(n.td,{children:"margin top and bottom"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"p"})}),(0,e.jsx)(n.td,{children:"padding"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pt"})}),(0,e.jsx)(n.td,{children:"padding-top"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pr"})}),(0,e.jsx)(n.td,{children:"padding-right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pb"})}),(0,e.jsx)(n.td,{children:"padding-bottom"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"pl"})}),(0,e.jsx)(n.td,{children:"padding-left"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"px"})}),(0,e.jsx)(n.td,{children:"padding left and right"})]}),(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.td,{children:(0,e.jsx)(n.strong,{children:"py"})}),(0,e.jsx)(n.td,{children:"padding top and bottom"})]})]})]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:(0,m.A)`
  import Text from '@automattic/jetpack-components';
  
  function HelloBoxModel() {
    return (
      <Text mt={ 2 } px={ 4 }>
        Hello, Text component!
      </Text>
    );
  }
`}),`
`,(0,e.jsx)(n.h4,{id:"component",children:"component"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": ",(0,e.jsx)(n.code,{children:"elementType"}),", ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`,(0,e.jsxs)(n.p,{children:["Force an specific tag (",(0,e.jsx)(n.code,{children:'"span"'}),", ",(0,e.jsx)(n.code,{children:'"div"'}),") or use a custom component that will receive className and children."]}),`
`,(0,e.jsxs)(n.p,{children:["The example below renders the component with a ",(0,e.jsx)(n.code,{children:"<span />"})," element."]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:(0,m.A)`
  import Text from '@automattic/jetpack-components';
  function SpanTextComponent() {
    return (
      <Text component="span" variant="title-medium">
        Never underestimate the span element
      </Text>
    );
  }
`}),`
`,(0,e.jsxs)(n.p,{children:[`The following example shows how to define the typography and the margin for a Custom component.
The className is passed down to the custom component, while the properties that belong to the Text component (in this case, `,(0,e.jsx)(n.code,{children:"component"}),", ",(0,e.jsx)(n.code,{children:"variant"})," and ",(0,e.jsx)(n.code,{children:"mb"}),") are not."]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:(0,m.A)`
  import Text from '@automattic/jetpack-components';
  
  function CustomComponent( { children, className } ) {
    // className, provided by Text, is "custom-classname"
    return (
      <div className={ className }>{ children }</div>
    );
  }
  
  // Use a custom component when rendering the <Text />,
  // it passes down the className property to it.
  function CustomTextComponent() {
    return (
      <Text
        component={ CustomComponent }
        className="custom-classname"
        variant="title-medium"
        mb={ 3 }
      >
        Hello, Custom Text component!
      </Text>
    );
  }
`}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text--custom-tag",children:"\u25B6\uFE0F Custom Tag story"})," and ",(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text--custom-component",children:"\u25B6\uFE0F Custom Component story"})]}),`
`,(0,e.jsx)(n.h4,{id:"children",children:"Children"}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Type"}),": ",(0,e.jsx)(n.code,{children:"node"}),"."]}),`
`,(0,e.jsx)(n.p,{children:"The text itself that will be rendered."}),`
`,(0,e.jsx)(n.h1,{id:"text-based-components",children:"Text based components"}),`
`,(0,e.jsx)(n.h2,{id:"h2-",children:"<H2 />"}),`
`,(0,e.jsxs)(n.p,{children:["Text shorthand to render a ",(0,e.jsx)(n.code,{children:"heading-medium"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-2",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(n.h2,{id:"h3-",children:"<H3 />"}),`
`,(0,e.jsxs)(n.p,{children:["Text shorthand to render a ",(0,e.jsx)(n.code,{children:"heading-small"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-3",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(n.h3,{id:"props-1",children:"Props"}),`
`,(0,e.jsxs)(n.h4,{id:"weight-bold-default--regular",children:["Weight: ",(0,e.jsx)(n.code,{children:"bold"})," (default) | ",(0,e.jsx)(n.code,{children:"regular"})]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:(0,m.A)`
  import { H3 } from '@automattic/jetpack-components';
  
  function Subtitle() {
    return (
      <H3 weight="regular">Let's explaining what H3 is</H3>
    );
  }
`}),`
`,(0,e.jsx)(n.h2,{id:"title-",children:"<Title />"}),`
`,(0,e.jsxs)(n.p,{children:["Text shorthand to render a ",(0,e.jsx)(n.code,{children:"body"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(n.h3,{id:"props-2",children:"Props"}),`
`,(0,e.jsxs)(n.h4,{id:"size-medium-default--small",children:["Size: ",(0,e.jsx)(n.code,{children:"medium"})," (default) | ",(0,e.jsx)(n.code,{children:"small"})]}),`
`,(0,e.jsx)(s.kL,{language:"jsx",code:(0,m.A)`
  import { Title } from '@automattic/jetpack-components';
  
  function Subtitle() {
    return (
      <Title size="small">
        To explain what a Title component does, we should before...
      </Title>
    );
  }
`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function j(c={}){const{wrapper:n}={...(0,i.R)(),...c.components};return n?(0,e.jsx)(n,{...c,children:(0,e.jsx)(o,{...c})}):o(c)}}),"../components/components/text/stories/index.stories.tsx":((v,x,t)=>{t.r(x),t.d(x,{BoxModel:()=>r,CustomComponent:()=>f,CustomTag:()=>c,Default:()=>j,__namedExportsOrder:()=>h,default:()=>a});var l=t("../components/components/text/index.tsx"),e=t("../components/components/text/constants.ts"),i=t("../components/components/text/stories/style.module.scss"),s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=[0,1,2,3,4,5,6,7,8],a={title:"JS Packages/Components/Text",component:l.Ay,argTypes:{...e.Z.reduce((u,p)=>({...u,[p]:{control:{type:"select"},options:m}}),{}),variant:{control:{type:"select"},options:Object.keys(e.Q)}},subcomponents:{H2:l.H2,H3:l.H3,Title:l.hE}},o=u=>(0,s.jsx)(l.Ay,{...u,children:u.variant??"body"}),j=o.bind({});j.args={variant:"headline-medium"};const c=o.bind({});c.args={variant:"title-small",component:"div"};const n=({className:u,children:p})=>(0,s.jsxs)("span",{className:u,children:[p," Composition"]}),f=o.bind({});f.args={variant:"headline-small",component:n};const r=(u=>(0,s.jsxs)("div",{className:i.A["box-model-wrapper"],children:[(0,s.jsx)("div",{className:i.A["box-model-side-left"]}),(0,s.jsx)("div",{className:i.A["box-model-side-center"],children:(0,s.jsx)(l.Ay,{...u,children:(0,s.jsx)("div",{className:i.A["box-model-inner"],children:"Box Model"})})}),(0,s.jsx)("div",{className:i.A["box-model-side-right"]})]})).bind({}),h=["Default","CustomTag","CustomComponent","BoxModel"];try{Text.displayName="Text",Text.__docgenInfo={description:"Text component.",displayName:"Text",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text itself that will be rendered.",name:"children",required:!0,type:{name:"ReactNode"}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"FC<{ [prop: string]: unknown; }> | ElementType"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/text/stories/index.stories.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"../components/components/text/stories/index.stories.tsx#Text"})}catch{}})}]);
