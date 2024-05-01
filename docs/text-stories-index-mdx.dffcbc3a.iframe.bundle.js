(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3331,6591],{"../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(_,c,n)=>{"use strict";n.d(c,{Z:()=>o});function o(){return o=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(_,c,n)=>{"use strict";var o;n.d(c,{L:()=>r,j:()=>l});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=function(m){return m()},t=(o||(o=n.t(e,2)))["useInsertionEffect"]?(o||(o=n.t(e,2)))["useInsertionEffect"]:!1,r=t||i,l=t||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(_,c,n)=>{"use strict";n.d(c,{Z:()=>r,a:()=>t});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e={},i=o.createContext(e);function t(l){const d=o.useContext(i);return o.useMemo(function(){return typeof l=="function"?l(d):{...d,...l}},[d,l])}function r(l){let d;return l.disableParentContext?d=typeof l.components=="function"?l.components(e):l.components||e:d=t(l.components),o.createElement(i.Provider,{value:d},l.children)}},"../components/components/text/stories/index.mdx":(_,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>m});var o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=n("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.1_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),t=n("../../../node_modules/.pnpm/@storybook+blocks@8.0.9_@types+react@18.3.1_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),r=n("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),l=n("../components/components/text/stories/index.stories.tsx");function d(a){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...a.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h_,{of:l}),`
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
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
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
`,(0,e.jsx)(t.Hw,{language:"jsx",code:r.C`
    import { Title } from '@automattic/jetpack-components';
    
    function Subtitle() {
      return (
        <Title size="small">
          To explain what a Title component does, we should before...
        </Title>
      );
    }
  `}),`
`,(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:".?path=/story/js-packages-components-text-title--default",children:"\u25B6\uFE0F Story"})})]})}function m(a={}){const{wrapper:s}={...(0,i.a)(),...a.components};return s?(0,e.jsx)(s,{...a,children:(0,e.jsx)(d,{...a})}):d(a)}},"../components/components/text/stories/index.stories.tsx":(_,c,n)=>{var j,g,f,b,y,E,v,T,C,P,w,M;"use strict";n.r(c),n.d(c,{BoxModel:()=>u,CustomComponent:()=>h,CustomTag:()=>a,Default:()=>m,__namedExportsOrder:()=>O,default:()=>l});var o=n("../components/components/text/index.tsx"),e=n("../components/components/text/constants.ts"),i=n("../components/components/text/stories/style.module.scss"),t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=[0,1,2,3,4,5,6,7,8],l={title:"JS Packages/Components/Text",component:o.ZP,argTypes:{...e.s.reduce((p,x)=>({...p,[x]:{control:{type:"select"},options:r}}),{}),variant:{control:{type:"select"},options:Object.keys(e.h)}},subcomponents:{H2:o.H2,H3:o.H3,Title:o.Dx}},d=p=>{var x;return(0,t.jsx)(o.ZP,{...p,children:(x=p.variant)!=null?x:"body"})},m=d.bind({});m.args={variant:"headline-medium"};const a=d.bind({});a.args={variant:"title-small",component:"div"};const s=({className:p,children:x})=>(0,t.jsxs)("span",{className:p,children:[x," Composition"]}),h=d.bind({});h.args={variant:"headline-small",component:s};const u=(p=>(0,t.jsxs)("div",{className:i.Z["box-model-wrapper"],children:[(0,t.jsx)("div",{className:i.Z["box-model-side-left"]}),(0,t.jsx)("div",{className:i.Z["box-model-side-center"],children:(0,t.jsx)(o.ZP,{...p,children:(0,t.jsx)("div",{className:i.Z["box-model-inner"],children:"Box Model"})})}),(0,t.jsx)("div",{className:i.Z["box-model-side-right"]})]})).bind({});m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(f=(g=m.parameters)==null?void 0:g.docs)==null?void 0:f.source}}},a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}},h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Text {...args}>{args.variant ?? 'body'}</Text>",...(C=(T=h.parameters)==null?void 0:T.docs)==null?void 0:C.source}}},u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div className={styles['box-model-wrapper']}>
        <div className={styles['box-model-side-left']} />
        <div className={styles['box-model-side-center']}>
            <Text {...args}>
                <div className={styles['box-model-inner']}>Box Model</div>
            </Text>
        </div>
        <div className={styles['box-model-side-right']} />
    </div>`,...(M=(w=u.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const O=["Default","CustomTag","CustomComponent","BoxModel"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,c)=>{var n,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty,i="[native code]";function t(){for(var r=[],l=0;l<arguments.length;l++){var d=arguments[l];if(d){var m=typeof d;if(m==="string"||m==="number")r.push(d);else if(Array.isArray(d)){if(d.length){var a=t.apply(null,d);a&&r.push(a)}}else if(m==="object"){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){r.push(d.toString());continue}for(var s in d)e.call(d,s)&&d[s]&&r.push(s)}}}return r.join(" ")}_.exports?(t.default=t,_.exports=t):(n=[],o=function(){return t}.apply(c,n),o!==void 0&&(_.exports=o))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss":(_,c,n)=>{"use strict";n.d(c,{Z:()=>l});var o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=n.n(o),i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=n.n(i),r=t()(e());r.push([_.id,'.w736mVCf7VOQpYIxPcJe span{color:var(--jp-gray-40);display:inline-block;width:100%;background-color:var(--jp-white-off)}.WpIUNBUwwqx8Hr_k06mr{height:100%;display:flex;margin-top:50px}.MJuFkehZttz46HmFOosb,.BCVIHJZOaIcvBKbR78IJ{flex-grow:1}.K7dHaXc83Er_lSr0dXyw{background-color:#a68169;position:relative}.K7dHaXc83Er_lSr0dXyw:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p{background-color:#b9c386;position:relative}.K7dHaXc83Er_lSr0dXyw>p:after{content:" ";border:1px dashed rgba(0,0,0,.6);display:block;position:absolute;top:0;left:0;height:100%;width:100%}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0{min-width:200px;min-height:50px;line-height:50px;background-color:#8fafba;text-align:center;position:relative}.K7dHaXc83Er_lSr0dXyw>p .c8PNEHkZltBtBayh_np0:after{content:" ";border:1px dashed rgba(0,0,0,.4);display:block;position:absolute;top:0;left:0;height:100%;width:100%}',""]),r.locals={instance:"w736mVCf7VOQpYIxPcJe","box-model-wrapper":"WpIUNBUwwqx8Hr_k06mr","box-model-side-left":"MJuFkehZttz46HmFOosb","box-model-side-right":"BCVIHJZOaIcvBKbR78IJ","box-model-side-center":"K7dHaXc83Er_lSr0dXyw","box-model-inner":"c8PNEHkZltBtBayh_np0"};const l=r},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":_=>{function c(n){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}c.keys=()=>[],c.resolve=c,c.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",_.exports=c},"../components/components/text/stories/style.module.scss":(_,c,n)=>{"use strict";n.d(c,{Z:()=>l});var o=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=n.n(o),i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/text/stories/style.module.scss"),t={};t.insert="head",t.singleton=!1;var r=e()(i.Z,t);const l=i.Z.locals||{}}}]);})();
