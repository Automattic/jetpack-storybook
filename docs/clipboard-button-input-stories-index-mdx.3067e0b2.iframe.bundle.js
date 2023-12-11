"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(x,i,e)=>{e.d(i,{aD:()=>y});var t="actions",o="storybook/actions",a=`${o}/panel`,c=`${o}/action-event`,r=`${o}/action-clear`,m="$___storybook.isCyclic",_=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),g=e("@storybook/preview-api"),E={depth:10,clearOnStoryChange:!0,limit:50},v=(l={})=>{Object.assign(E,l)},p=(l,u)=>{let n=Object.getPrototypeOf(l);return!n||u(n)?n:p(n,u)},s=l=>!!(typeof l=="object"&&l&&p(l,u=>/^Synthetic(?:Base)?Event$/.test(u.constructor.name))&&typeof l.persist=="function"),b=l=>{if(s(l)){let u=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));u.persist();let n=Object.getOwnPropertyDescriptor(u,"view"),d=n==null?void 0:n.value;return typeof d=="object"&&(d==null?void 0:d.constructor.name)==="Window"&&Object.defineProperty(u,"view",{...n,value:Object.create(d.constructor.prototype)}),u}return l};function y(l,u={}){let n={...E,...u},d=function(...f){let h=g.addons.getChannel(),w=(0,_.Z)(),O=5,P=f.map(b),C=f.length>1?P:P[0],A={id:w,count:0,data:{name:l,args:C},options:{...n,maxDepth:O+(n.depth||3),allowFunction:n.allowFunction||!1}};h.emit(c,A)};return d.isAction=!0,d}var j=(...l)=>{let u=config,n=l;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(u={...config,...n.pop()});let d=n[0];(n.length!==1||typeof d=="string")&&(d={},n.forEach(h=>{d[h]=h}));let f={};return Object.keys(d).forEach(h=>{f[h]=action(d[h],u)}),f}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(x,i,e)=>{e.r(i),e.d(i,{default:()=>v});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),c=e.n(a),r=e("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),_=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function g(p){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,a.useMDXComponents)(),p.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h_,{of:_}),`
`,(0,o.jsx)(s.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,o.jsx)(s.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,o.jsx)(r.Xz,{sourceState:"shown",of:_._default}),`
`,(0,o.jsx)(s.h2,{id:"api",children:"API"}),`
`,(0,o.jsx)(s.h3,{id:"text",children:"text"}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:["type: ",(0,o.jsx)(s.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,o.jsx)(s.h3,{id:"value",children:"value"}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:["type: ",(0,o.jsx)(s.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,o.jsx)(s.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:["type: ",(0,o.jsx)(s.code,{children:"function"})]}),`
`,(0,o.jsxs)(s.li,{children:["default: ",(0,o.jsx)(s.code,{children:"noop"})]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,o.jsx)(s.h3,{id:"resettime",children:"resetTime"}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:["type: ",(0,o.jsx)(s.code,{children:"number"})]}),`
`,(0,o.jsxs)(s.li,{children:["default: ",(0,o.jsx)(s.code,{children:"3000"})]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}function E(p={}){const{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),p.components);return s?(0,o.jsx)(s,Object.assign({},p,{children:(0,o.jsx)(g,p)})):g(p)}const v=E},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(x,i,e)=>{e.d(i,{ZP:()=>l});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(o),c=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function g(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const E=r.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,v=(0,c.Z)("svg",{target:"ea4tfvq2"})("width:",m.Z.spinnerSize,"px;height:",m.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",_.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),p={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},s=(0,c.Z)("circle",{target:"ea4tfvq1"})(p,";stroke:",_.D.gray[300],";"),b=(0,c.Z)("path",{target:"ea4tfvq0"})(p,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",E,";");function y({className:u,...n},d){return(0,t.createElement)(v,{className:a()("components-spinner",u),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...n,ref:d},(0,t.createElement)(s,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(b,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const l=(0,t.forwardRef)(y)},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(x,i,e)=>{e.d(i,{Z:()=>_});var t=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const a="36px",c="12px",r={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:c,controlPaddingXLarge:`calc(${c} * 1.3334)`,controlPaddingXSmall:`calc(${c} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:a,controlHeightXSmall:`calc( ${a} * 0.6 )`,controlHeightSmall:`calc( ${a} * 0.8 )`,controlHeightLarge:`calc( ${a} * 1.2 )`,controlHeightXLarge:`calc( ${a} * 1.4 )`},m={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},_=Object.assign({},r,m,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(x,i,e)=>{e.d(i,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o(a,c){const r=(0,t.useRef)();return(0,t.useCallback)(m=>{m?r.current=a(m):r.current&&r.current()},c)}},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(x,i,e)=>{e.d(i,{Z:()=>a});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:c,size:r=24,...m},_){return(0,t.cloneElement)(c,{width:r,height:r,...m,ref:_})}const a=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(x,i,e)=>{e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(x,i,e)=>{var v,p,s;e.r(i),e.d(i,{__namedExportsOrder:()=>E,_default:()=>g,default:()=>m});var t=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),o=e("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { action } from '@storybook/addon-actions';
import ClipboardButtonInput from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Clipboard Button Input',
	component: ClipboardButtonInput,
} as ComponentMeta< typeof ClipboardButtonInput >;

const Template: ComponentStory< typeof ClipboardButtonInput > = args => {
	return <ClipboardButtonInput { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	text: 'Lorem Ipsum...',
	value:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
	onCopy: action( 'onCopy' ),
	resetTime: 3000,
};
`,r={_default:{startLoc:{col:62,line:8},endLoc:{col:1,line:10},startBody:{col:62,line:8},endBody:{col:1,line:10}}};const m={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import ClipboardButtonInput from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Clipboard Button Input',
  component: ClipboardButtonInput
} as ComponentMeta<typeof ClipboardButtonInput>);
const Template: ComponentStory<typeof ClipboardButtonInput> = args => {
  return <ClipboardButtonInput {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  text: 'Lorem Ipsum...',
  value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
  onCopy: action('onCopy'),
  resetTime: 3000
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <ClipboardButtonInput {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:62,line:8},endLoc:{col:1,line:10},startBody:{col:62,line:8},endBody:{col:1,line:10}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:o.Z},_=b=>(0,a.jsx)(o.Z,{...b});_.displayName="Template";const g=_.bind({});g.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,t.aD)("onCopy"),resetTime:3e3},g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(s=(p=g.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const E=["_default"]},"../components/components/button/index.tsx":(x,i,e)=>{e.d(i,{Z:()=>l});var t=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(r),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(g),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),p={};p.insert="head",p.singleton=!1;var s=E()(v.Z,p);const b=v.Z.locals||{};var y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const j=(0,_.forwardRef)((u,n)=>{var S,I;const{children:d,variant:f="primary",size:h="normal",weight:w="bold",icon:O,iconSize:P,disabled:C,isDestructive:A,isLoading:D,isExternalLink:k,className:T,text:M,fullWidth:L,...B}=u,R=m()(b.button,T,{[b.normal]:h==="normal",[b.small]:h==="small",[b.icon]:!!O,[b.loading]:D,[b.regular]:w==="regular",[b["full-width"]]:L,[b["is-icon-button"]]:!!O&&!d});B.ref=n;const z=h==="normal"?20:16,V=k&&(0,y.jsx)(a.Z,{size:z,icon:c.Z,className:b["external-icon"]}),X=k?"_blank":void 0,Z=(d==null?void 0:d[0])&&d[0]!==null&&((I=(S=d==null?void 0:d[0])==null?void 0:S.props)==null?void 0:I.className)!=="components-tooltip";return(0,y.jsxs)(t.ZP,{target:X,variant:f,className:m()(R,{"has-text":!!O&&Z}),icon:k?void 0:O,iconSize:P,disabled:C,"aria-disabled":C,isDestructive:A,text:M,...B,children:[D&&(0,y.jsx)(o.ZP,{}),(0,y.jsx)("span",{children:d}),V]})});j.displayName="Button";const l=j;try{j.displayName="Button",j.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:j.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(u){}},"../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx":(x,i,e)=>{e.d(i,{Z:()=>y});var t=e("../components/components/button/index.tsx"),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(r),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss"),g={};g.insert="head",g.singleton=!1;var E=m()(_.Z,g);const v=_.Z.locals||{};var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=a.__,b=({text:j,value:l,onCopy:u,resetTime:n=3e3})=>{const d=A=>{A.currentTarget.select()},f=s("Copied!","jetpack-videopress-pkg"),h=s("Copy","jetpack-videopress-pkg"),[w,O]=(0,c.useState)(!1),P=l||j,C=(0,o.Z)(P,()=>{const A=setTimeout(()=>{O(!1),clearTimeout(A)},n);O(!0),u==null||u()});return(0,p.jsxs)("div",{className:v.wrapper,children:[(0,p.jsx)("input",{type:"text",value:j||l,onClick:d,readOnly:!0}),(0,p.jsx)(t.Z,{weight:"regular",variant:"secondary",size:"small",ref:C,children:w?f:h})]})};b.displayName="ClipboardButtonInput";const y=b},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(x,i,e)=>{e.d(i,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),r=c()(o());r.push([x.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),r.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const m=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/clipboard-button-input/style.module.scss":(x,i,e)=>{e.d(i,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),r=c()(o());r.push([x.id,".Bjq3YC0ysP_tCAFtxVMj{display:flex;flex-direction:row;height:36px;border:1px solid var(--jp-gray-40);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)*.5);padding-left:calc(var(--spacing-base)*1.5);background-color:var(--jp-white);box-sizing:border-box}.Bjq3YC0ysP_tCAFtxVMj:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.Bjq3YC0ysP_tCAFtxVMj>input{all:unset;width:100%;border:0;font-size:var(--font-body-small);color:var(--jp-gray-80);outline:none;text-overflow:ellipsis;cursor:default}.Bjq3YC0ysP_tCAFtxVMj>input:focus{outline:none;box-shadow:none;border:none}.Bjq3YC0ysP_tCAFtxVMj .kRmJN_soKZTs4UmGPd9M{display:inline-flex}",""]),r.locals={wrapper:"Bjq3YC0ysP_tCAFtxVMj","button-wrapper":"kRmJN_soKZTs4UmGPd9M"};const m=r}}]);})();