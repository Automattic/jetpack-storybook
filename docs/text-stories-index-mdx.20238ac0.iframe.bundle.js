"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1943,2593],{"../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"(g,j,a){a.d(j,{A:()=>e,T:()=>r});function r(m){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];var i=Array.from(typeof m=="string"?[m]:m);i[i.length-1]=i[i.length-1].replace(/\r?\n([\t ]*)$/,"");var v=i.reduce(function(n,x){var s=x.match(/\n([\t ]+|(?!\s).)/g);return s?n.concat(s.map(function(t){var c,d;return(d=(c=t.match(/[\t ]/g))===null||c===void 0?void 0:c.length)!==null&&d!==void 0?d:0})):n},[]);if(v.length){var h=new RegExp(`
[	 ]{`+Math.min.apply(Math,v)+"}","g");i=i.map(function(n){return n.replace(h,`
`)})}i[0]=i[0].replace(/^\r?\n/,"");var o=i[0];return l.forEach(function(n,x){var s=o.match(/(?:^|\n)( *)$/),t=s?s[1]:"",c=n;typeof n=="string"&&n.includes(`
`)&&(c=String(n).split(`
`).map(function(d,p){return p===0?d:""+t+d}).join(`
`)),o+=c+i[x+1]}),o}const e=r},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(g,j,a){/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(s,t){return s===t&&(s!==0||1/s===1/t)||s!==s&&t!==t}var m=typeof Object.is=="function"?Object.is:e,l=r.useState,u=r.useEffect,i=r.useLayoutEffect,v=r.useDebugValue;function h(s,t){var c=t(),d=l({inst:{value:c,getSnapshot:t}}),p=d[0].inst,f=d[1];return i(function(){p.value=c,p.getSnapshot=t,o(p)&&f({inst:p})},[s,c,t]),u(function(){return o(p)&&f({inst:p}),s(function(){o(p)&&f({inst:p})})},[s]),v(c),c}function o(s){var t=s.getSnapshot;s=s.value;try{var c=t();return!m(s,c)}catch{return!0}}function n(s,t){return t()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?n:h;j.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:x},"../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(g,j,a){g.exports=a("../../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js")},"../components/components/text/stories/index.mdx"(g,j,a){a.r(j),a.d(j,{default:()=>h});var r=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=a("../../../node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@18.3.26_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),l=a("../../../node_modules/.pnpm/@storybook+addon-docs@10.2.3_@types+react@18.3.27_storybook@10.2.3_@testing-library+dom_6c554530f0878931101a0906689ffd41/node_modules/@storybook/addon-docs/dist/blocks.js"),u=a("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),i=a("../components/components/text/stories/index.stories.tsx");function v(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,m.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.W8,{of:i}),`
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,u.A)`
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,u.A)`
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,u.A)`
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,u.A)`
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,u.A)`
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
`,(0,e.jsx)(l.kL,{language:"jsx",code:(0,u.A)`
  import { Title } from '@automattic/jetpack-components';
  
  function Subtitle() {
    return (
      <Title size="small">
        To explain what a Title component does, we should before...
      </Title>
    );
  }
`}),`
`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function h(o={}){const{wrapper:n}={...(0,m.R)(),...o.components};return n?(0,e.jsx)(n,{...o,children:(0,e.jsx)(v,{...o})}):v(o)}},"../components/components/text/stories/index.stories.tsx"(g,j,a){a.r(j),a.d(j,{BoxModel:()=>t,CustomComponent:()=>x,CustomTag:()=>o,Default:()=>h,__namedExportsOrder:()=>c,default:()=>i});var r=a("../components/components/text/index.tsx"),e=a("../components/components/text/constants.ts"),m=a("../components/components/text/stories/style.module.scss"),l=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=[0,1,2,3,4,5,6,7,8],i={title:"JS Packages/Components/Text",component:r.Ay,argTypes:{...e.Z.reduce((d,p)=>({...d,[p]:{control:{type:"select"},options:u}}),{}),variant:{control:{type:"select"},options:Object.keys(e.Q)}},subcomponents:{H2:r.H2,H3:r.H3,Title:r.hE}},v=d=>(0,l.jsx)(r.Ay,{...d,children:d.variant??"body"}),h=v.bind({});h.args={variant:"headline-medium"};const o=v.bind({});o.args={variant:"title-small",component:"div"};const n=({className:d,children:p})=>(0,l.jsxs)("span",{className:d,children:[p," Composition"]}),x=v.bind({});x.args={variant:"headline-small",component:n};const t=(d=>(0,l.jsxs)("div",{className:m.A["box-model-wrapper"],children:[(0,l.jsx)("div",{className:m.A["box-model-side-left"]}),(0,l.jsx)("div",{className:m.A["box-model-side-center"],children:(0,l.jsx)(r.Ay,{...d,children:(0,l.jsx)("div",{className:m.A["box-model-inner"],children:"Box Model"})})}),(0,l.jsx)("div",{className:m.A["box-model-side-right"]})]})).bind({}),c=["Default","CustomTag","CustomComponent","BoxModel"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...h.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...o.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...x.parameters?.docs?.source}}},t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...t.parameters?.docs?.source}}};try{Text.displayName="Text",Text.__docgenInfo={description:"Text component.",displayName:"Text",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"5"},{value:"8"},{value:"4"},{value:"3"},{value:"6"},{value:"7"}]}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text itself that will be rendered.",name:"children",required:!0,type:{name:"ReactNode"}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"FC<{ [prop: string]: unknown; }> | ElementType"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/text/stories/index.stories.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"../components/components/text/stories/index.stories.tsx#Text"})}catch{}}}]);
