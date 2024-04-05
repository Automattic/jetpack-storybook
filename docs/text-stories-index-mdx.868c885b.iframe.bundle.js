(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3331,6591],{"../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(m,c,t)=>{"use strict";t.d(c,{Z:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(m,c,t)=>{"use strict";var d;t.d(c,{L:()=>o,j:()=>_});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=function(i){return i()},n=(d||(d=t.t(e,2)))["useInsertionEffect"]?(d||(d=t.t(e,2)))["useInsertionEffect"]:!1,o=n||r,_=n||e.useLayoutEffect},"../components/components/text/stories/index.mdx":(m,c,t)=>{"use strict";t.r(c),t.d(c,{default:()=>i});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=t("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),n=t("../../../node_modules/.pnpm/@storybook+blocks@8.0.6_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),o=t("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),_=t("../components/components/text/stories/index.stories.tsx");function l(a){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h_,{of:_}),`
`,(0,e.jsx)(s.h1,{id:"text",children:"Text"}),`
`,(0,e.jsx)(s.p,{children:"Set of React jetpack-components intended to facilitate when dealing with rendering text content."}),`
`,(0,e.jsx)(s.h2,{id:"text-",children:"<Text />"}),`
`,(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.code,{children:"Text"})," is the primary component that renders text, supporting the following features:"]}),`
`,(0,e.jsxs)(s.ul,{children:[`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Typography"}),": provided by the ThemeProvider component."]}),`
`,(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Spacing"}),": A simple range of shorthand classes to modify the text element's margin and padding."]}),`
`]}),`
`,(0,e.jsx)(s.h3,{id:"props",children:"Props"}),`
`,(0,e.jsx)(s.h4,{id:"variant",children:"variant"}),`
`,(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Type"}),": ",(0,e.jsx)(s.code,{children:"headline-medium"}),", ",(0,e.jsx)(s.code,{children:"headline-small"}),", ",(0,e.jsx)(s.code,{children:"headline-small-regular"}),", ",(0,e.jsx)(s.code,{children:"title-medium"}),`,
`,(0,e.jsx)(s.code,{children:"title-medium-semi-bold"}),", ",(0,e.jsx)(s.code,{children:"title-small"}),", ",(0,e.jsx)(s.code,{children:"body"}),", ",(0,e.jsx)(s.code,{children:"body-small"}),", ",(0,e.jsx)(s.code,{children:"body-extra-small"}),`,
`,(0,e.jsx)(s.code,{children:"body-extra-small-bold"}),", ",(0,e.jsx)(s.code,{children:"label"}),"."]}),`
`,(0,e.jsx)(s.p,{children:"Define the text Typography variant among the options offered by the ThemeProvider component."}),`
`,(0,e.jsx)(n.Hw,{language:"jsx",code:o.C`
    import Text from '@automattic/jetpack-components';
    
    function Hello() {
      return (
        <Text variant="headline-medium">
          Hello, Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsx)(s.h4,{id:"spacing-properties",children:"Spacing properties"}),`
`,(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Type"}),": number, one of ",(0,e.jsx)(s.code,{children:"0"}),", ",(0,e.jsx)(s.code,{children:"1"}),", ",(0,e.jsx)(s.code,{children:"2"}),", ",(0,e.jsx)(s.code,{children:"3"}),", ",(0,e.jsx)(s.code,{children:"4"}),", ",(0,e.jsx)(s.code,{children:"5"}),", ",(0,e.jsx)(s.code,{children:"6"}),", ",(0,e.jsx)(s.code,{children:"7"}),", ",(0,e.jsx)(s.code,{children:"8"}),"."]}),`
`,(0,e.jsxs)(s.p,{children:["Use the following properties to define margin and padding of the text. The unit is defined by the ",(0,e.jsx)(s.code,{children:"--spacing-base"}),` value.
You can see how it works playing with the `,(0,e.jsx)(s.a,{href:"./?path=/story/js-packages-components-text--box-model",children:"Box Model"})," story."]}),`
`,(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"Prop"}),(0,e.jsx)(s.th,{children:"Description"})]})}),(0,e.jsxs)(s.tbody,{children:[(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"m"})}),(0,e.jsx)(s.td,{children:"margin"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"mt"})}),(0,e.jsx)(s.td,{children:"margin-top"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"mr"})}),(0,e.jsx)(s.td,{children:"margin-right"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"mb"})}),(0,e.jsx)(s.td,{children:"margin-bottom"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"ml"})}),(0,e.jsx)(s.td,{children:"margin-left"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"mx"})}),(0,e.jsx)(s.td,{children:"margin left and right"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"my"})}),(0,e.jsx)(s.td,{children:"margin top and bottom"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"p"})}),(0,e.jsx)(s.td,{children:"padding"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"pt"})}),(0,e.jsx)(s.td,{children:"padding-top"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"pr"})}),(0,e.jsx)(s.td,{children:"padding-right"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"pb"})}),(0,e.jsx)(s.td,{children:"padding-bottom"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"pl"})}),(0,e.jsx)(s.td,{children:"padding-left"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"px"})}),(0,e.jsx)(s.td,{children:"padding left and right"})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.strong,{children:"py"})}),(0,e.jsx)(s.td,{children:"padding top and bottom"})]})]})]}),`
`,(0,e.jsx)(n.Hw,{language:"jsx",code:o.C`
    import Text from '@automattic/jetpack-components';
    
    function HelloBoxModel() {
      return (
        <Text mt={ 2 } px={ 4 }>
          Hello, Text component!
        </Text>
      );
    }
  `}),`
`,(0,e.jsx)(s.h4,{id:"component",children:"component"}),`
`,(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Type"}),": ",(0,e.jsx)(s.code,{children:"elementType"}),", ",(0,e.jsx)(s.code,{children:"string"}),"."]}),`
`,(0,e.jsxs)(s.p,{children:["Force an specific tag (",(0,e.jsx)(s.code,{children:'"span"'}),", ",(0,e.jsx)(s.code,{children:'"div"'}),") or use a custom component that will receive className and children."]}),`
`,(0,e.jsxs)(s.p,{children:["The example below renders the component with a ",(0,e.jsx)(s.code,{children:"<span />"})," element."]}),`
`,(0,e.jsx)(n.Hw,{language:"jsx",code:o.C`
    import Text from '@automattic/jetpack-components';
    function SpanTextComponent() {
      return (
        <Text component="span" variant="title-medium">
          Never underestimate the span element
        </Text>
      );
    }
  `}),`
`,(0,e.jsxs)(s.p,{children:[`The following example shows how to define the typography and the margin for a Custom component.
The className is passed down to the custom component, while the properties that belong to the Text component (in this case, `,(0,e.jsx)(s.code,{children:"component"}),", ",(0,e.jsx)(s.code,{children:"variant"})," and ",(0,e.jsx)(s.code,{children:"mb"}),") are not."]}),`
`,(0,e.jsx)(n.Hw,{language:"jsx",code:o.C`
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
`,(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.a,{href:".?path=/story/js-packages-components-text--custom-tag",children:"\u25B6\uFE0F Custom Tag story"})," and ",(0,e.jsx)(s.a,{href:".?path=/story/js-packages-components-text--custom-component",children:"\u25B6\uFE0F Custom Component story"})]}),`
`,(0,e.jsx)(s.h4,{id:"children",children:"Children"}),`
`,(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Type"}),": ",(0,e.jsx)(s.code,{children:"node"}),"."]}),`
`,(0,e.jsx)(s.p,{children:"The text itself that will be rendered."}),`
`,(0,e.jsx)(s.h1,{id:"text-based-components",children:"Text based components"}),`
`,(0,e.jsx)(s.h2,{id:"h2-",children:"<H2 />"}),`
`,(0,e.jsxs)(s.p,{children:["Text shorthand to render a ",(0,e.jsx)(s.code,{children:"heading-medium"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-2",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(s.h2,{id:"h3-",children:"<H3 />"}),`
`,(0,e.jsxs)(s.p,{children:["Text shorthand to render a ",(0,e.jsx)(s.code,{children:"heading-small"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:".?path=/story/js-packages-components-text-heading--headline-h-3",children:"\u25B6\uFE0F Story"})}),`
`,(0,e.jsx)(s.h3,{id:"props-1",children:"Props"}),`
`,(0,e.jsxs)(s.h4,{id:"weight-bold-default--regular",children:["Weight: ",(0,e.jsx)(s.code,{children:"bold"})," (default) | ",(0,e.jsx)(s.code,{children:"regular"})]}),`
`,(0,e.jsx)(n.Hw,{language:"jsx",code:o.C`
    import { H3 } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <H3 weight="regular">Let's explaining what H3 is</H3>
      );
    }
  `}),`
`,(0,e.jsx)(s.h2,{id:"title-",children:"<Title />"}),`
`,(0,e.jsxs)(s.p,{children:["Text shorthand to render a ",(0,e.jsx)(s.code,{children:"body"})," text, applying proper spacing."]}),`
`,(0,e.jsx)(s.h3,{id:"props-2",children:"Props"}),`
`,(0,e.jsxs)(s.h4,{id:"size-medium-default--small",children:["Size: ",(0,e.jsx)(s.code,{children:"medium"})," (default) | ",(0,e.jsx)(s.code,{children:"small"})]}),`
`,(0,e.jsx)(n.Hw,{language:"jsx",code:o.C`
    import { Title } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <Title size="small">
          To explain what a Title component does, we should before...
        </Title>
      );
    }
  `}),`
`,(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function i(a={}){const{wrapper:s}={...(0,r.a)(),...a.components};return s?(0,e.jsx)(s,{...a,children:(0,e.jsx)(l,{...a})}):l(a)}},"../components/components/text/stories/index.stories.tsx":(m,c,t)=>{var j,g,f,b,y,E,T,v,C,P,w,O;"use strict";t.r(c),t.d(c,{BoxModel:()=>u,CustomComponent:()=>h,CustomTag:()=>a,Default:()=>i,__namedExportsOrder:()=>M,default:()=>_});var d=t("../components/components/text/index.tsx"),e=t("../components/components/text/constants.ts"),r=t("../components/components/text/stories/style.module.scss"),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=[0,1,2,3,4,5,6,7,8],_={title:"JS Packages/Components/Text",component:d.ZP,argTypes:{...e.s.reduce((p,x)=>({...p,[x]:{control:{type:"select"},options:o}}),{}),variant:{control:{type:"select"},options:Object.keys(e.h)}},subcomponents:{H2:d.H2,H3:d.H3,Title:d.Dx}},l=p=>{var x;return(0,n.jsx)(d.ZP,{...p,children:(x=p.variant)!=null?x:"body"})},i=l.bind({});i.args={variant:"headline-medium"};const a=l.bind({});a.args={variant:"title-small",component:"div"};const s=({className:p,children:x})=>(0,n.jsxs)("span",{className:p,children:[x," Composition"]}),h=l.bind({});h.args={variant:"headline-small",component:s};const u=(p=>(0,n.jsxs)("div",{className:r.Z["box-model-wrapper"],children:[(0,n.jsx)("div",{className:r.Z["box-model-side-left"]}),(0,n.jsx)("div",{className:r.Z["box-model-side-center"],children:(0,n.jsx)(d.ZP,{...p,children:(0,n.jsx)("div",{className:r.Z["box-model-inner"],children:"Box Model"})})}),(0,n.jsx)("div",{className:r.Z["box-model-side-right"]})]})).bind({});i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}},a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}},h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(C=(v=h.parameters)==null?void 0:v.docs)==null?void 0:C.source}}},u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(O=(w=u.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const M=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,c)=>{var t,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,r="[native code]";function n(){for(var o=[],_=0;_<arguments.length;_++){var l=arguments[_];if(l){var i=typeof l;if(i==="string"||i==="number")o.push(l);else if(Array.isArray(l)){if(l.length){var a=n.apply(null,l);a&&o.push(a)}}else if(i==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){o.push(l.toString());continue}for(var s in l)e.call(l,s)&&l[s]&&o.push(s)}}}return o.join(" ")}m.exports?(n.default=n,m.exports=n):(t=[],d=function(){return n}.apply(c,t),d!==void 0&&(m.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(m,c,t)=>{"use strict";t.d(c,{Z:()=>_});var d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(d),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=t.n(r),o=n()(e());o.push([m.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),o.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const _=o},"../components/components/text/stories/style.module.scss":(m,c,t)=>{"use strict";t.d(c,{Z:()=>_});var d=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=t.n(d),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),n={};n.insert="head",n.singleton=!1;var o=e()(r.Z,n);const _=r.Z.locals||{}}}]);})();
