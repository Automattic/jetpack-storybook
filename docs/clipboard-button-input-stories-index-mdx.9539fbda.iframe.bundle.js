"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7779,5850],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(_,c,t)=>{t.d(c,{NF:()=>a,Zo:()=>d,ah:()=>m,pC:()=>o});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=i.createContext({});function a(e){return s;function s(r){const l=m(r.components);return i.createElement(e,{...r,allComponents:l})}}function m(e){const s=i.useContext(o);return i.useMemo(()=>typeof e=="function"?e(s):{...s,...e},[s,e])}const u={};function d({components:e,children:s,disableParentContext:r}){let l;return r?l=typeof e=="function"?e({}):e||u:l=m(e),i.createElement(o.Provider,{value:l},s)}},"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(_,c,t)=>{t.d(c,{aD:()=>i.aD});var i=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),o=(...m)=>{let u=config,d=m;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(u={...config,...d.pop()});let e=d[0];(d.length!==1||typeof e=="string")&&(e={},d.forEach(r=>{e[r]=r}));let s={};return Object.keys(e).forEach(r=>{s[r]=action(e[r],u)}),s},a=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(_,c,t)=>{t.d(c,{_:()=>m,r:()=>d});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@storybook+react-dom-shim@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),a=t("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m={code:a.bD,a:a.Ct,...a.lO},u=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:s}=this.props;s(e)}render(){let{hasError:e}=this.state,{children:s}=this.props;return e?null:s}},d=class{constructor(){this.render=async(e,s,r)=>{let l={...m,...s==null?void 0:s.components};return new Promise((p,n)=>{t.e(2002).then(t.bind(t,"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:h})=>(0,o.l)(i.createElement(u,{showException:n,key:Math.random()},i.createElement(h,{components:l},i.createElement(a.WI,{context:e,docsParameter:s}))),r)).then(p)})},this.unmount=e=>{(0,o.K)(e)}}}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(_,c,t)=>{t.d(c,{Hw:()=>a.Hw,Xz:()=>a.Xz,h_:()=>a.h_,oG:()=>a.oG});var i=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),o=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs"),a=t("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.mdx":(_,c,t)=>{t.r(c),t.d(c,{default:()=>s});var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=t("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),m=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),u=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),d=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx");function e(r={}){const{wrapper:l}=Object.assign({},(0,a.ah)(),r.components);return l?(0,o.jsx)(l,Object.assign({},r,{children:(0,o.jsx)(p,{})})):p();function p(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,a.ah)(),r.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.h_,{of:d}),`
`,(0,o.jsx)(n.h1,{id:"clipboardbuttoninput",children:"ClipboardButtonInput"}),`
`,(0,o.jsx)(n.p,{children:"ClipboardButtonInput is a React component used to display a text input field containing a button for copying the value of the input to a user's clipboard."}),`
`,(0,o.jsx)(m.Xz,{sourceState:"shown",of:d._default}),`
`,(0,o.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,o.jsx)(n.h3,{id:"text",children:"text"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:`The text to show in the input element.
And, in case the value property is not defined, it represents the value be copied when clicking the copy button,`}),`
`,(0,o.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"string"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"The value to be copied when clicking the copy button. Optional."}),`
`,(0,o.jsx)(n.h3,{id:"oncopy",children:"onCopy"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"function"})]}),`
`,(0,o.jsxs)(n.li,{children:["default: ",(0,o.jsx)(n.code,{children:"noop"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"Callback to be invoked when the text is successfully copied."}),`
`,(0,o.jsx)(n.h3,{id:"resettime",children:"resetTime"}),`
`,(0,o.jsxs)(n.ul,{children:[`
`,(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"number"})]}),`
`,(0,o.jsxs)(n.li,{children:["default: ",(0,o.jsx)(n.code,{children:"3000"})]}),`
`]}),`
`,(0,o.jsx)(n.p,{children:"Timer in miliseconds to reset the copy button to its initial state."})]})}}const s=e},"../../packages/videopress/src/client/admin/components/clipboard-button-input/stories/index.stories.tsx":(_,c,t)=>{var l,p,n;t.r(c),t.d(c,{__namedExportsOrder:()=>r,_default:()=>s,default:()=>d});var i=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),o=t("../../packages/videopress/src/client/admin/components/clipboard-button-input/index.tsx"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import { action } from '@storybook/addon-actions';
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
`,u={_default:{startLoc:{col:62,line:8},endLoc:{col:1,line:10},startBody:{col:62,line:8},endBody:{col:1,line:10}}};const d={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:62,line:8},endLoc:{col:1,line:10},startBody:{col:62,line:8},endBody:{col:1,line:10}}}}},title:"Packages/VideoPress/Clipboard Button Input",component:o.Z},e=h=>(0,a.jsx)(o.Z,{...h});e.displayName="Template";const s=e.bind({});s.args={text:"Lorem Ipsum...",value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",onCopy:(0,i.aD)("onCopy"),resetTime:3e3},s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <ClipboardButtonInput {...args} />;
}`,...(n=(p=s.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const r=["_default"]}}]);})();
