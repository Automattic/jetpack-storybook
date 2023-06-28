(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6098],{"../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(p,r,e)=>{"use strict";e.d(r,{Z:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c(a){return a&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(a):null}function l(a){const s=(0,n.useMemo)(()=>{const d=c(a);return{subscribe(o){return d?(d.addEventListener("change",o),()=>{d.removeEventListener("change",o)}):()=>{}},getValue(){var o;return(o=d==null?void 0:d.matches)!==null&&o!==void 0?o:!1}}},[a]);return(0,n.useSyncExternalStore)(s.subscribe,s.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js":(p,r,e)=>{"use strict";e.d(r,{Z:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c({icon:a,size:s=24,...d}){return(0,n.cloneElement)(a,{width:s,height:s,...d})}const l=c},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/external.js":(p,r,e)=>{"use strict";e.d(r,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,n.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,r,e)=>{"use strict";e.d(r,{Cd:()=>a,G:()=>s,UL:()=>i,Wj:()=>x,mg:()=>_,y$:()=>o});var n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(n),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=t=>(0,l.createElement)("circle",t),s=t=>(0,l.createElement)("g",t),d=t=>createElement("line",t),o=t=>(0,l.createElement)("path",t),_=t=>(0,l.createElement)("polygon",t),i=t=>(0,l.createElement)("rect",t),j=t=>createElement("defs",t),f=t=>createElement("radialGradient",t),h=t=>createElement("linearGradient",t),u=t=>createElement("stop",t),x=({className:t,isPressed:m,...M})=>{const E={...M,className:c()(t,{"is-pressed":m})||void 0,"aria-hidden":!0,focusable:!1};return(0,l.createElement)("svg",E)}},"../components/components/jetpack-footer/stories/index.stories.tsx":(p,r,e)=>{var f,h,u,x,t,m;"use strict";e.r(r),e.d(r,{WithMenu:()=>i,__namedExportsOrder:()=>j,_default:()=>_,default:()=>s});var n=e("../components/components/jetpack-footer/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Jetpack Footer',
	component: JetpackFooter,
} as ComponentMeta< typeof JetpackFooter >;

const Template: ComponentStory< typeof JetpackFooter > = args => <JetpackFooter { ...args } />;

const DefaultArgs = {
	a8cLogoHref: 'https://automattic.com',
	moduleName: 'Jetpack',
	className: '',
	moduleNameHref: 'https://jetpack.com',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	menu: [
		{
			label: 'Menu Item',
			href: '#',
		},
		{
			label: 'External Menu Item',
			href: '#',
			target: '_blank',
		},
		{
			label: 'Menu Item With Title',
			title: 'Hello, World!',
			href: '#',
		},
	],
};
`,a={_default:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}},WithMenu:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}}};const s={parameters:{storySource:{source:`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Jetpack Footer',
  component: JetpackFooter
} as ComponentMeta<typeof JetpackFooter>);
const Template: ComponentStory<typeof JetpackFooter> = args => <JetpackFooter {...args} />;
const DefaultArgs = {
  a8cLogoHref: 'https://automattic.com',
  moduleName: 'Jetpack',
  className: '',
  moduleNameHref: 'https://jetpack.com'
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const WithMenu = Template.bind({});
WithMenu.args = {
  ...DefaultArgs,
  menu: [{
    label: 'Menu Item',
    href: '#'
  }, {
    label: 'External Menu Item',
    href: '#',
    target: '_blank'
  }, {
    label: 'Menu Item With Title',
    title: 'Hello, World!',
    href: '#'
  }]
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <JetpackFooter {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
WithMenu.parameters = {
  ...WithMenu.parameters,
  docs: {
    ...WithMenu.parameters?.docs,
    source: {
      originalSource: "args => <JetpackFooter {...args} />",
      ...WithMenu.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}},"with-menu":{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}}}}},title:"JS Packages/Components/Jetpack Footer",component:n.Z},d=M=>(0,c.jsx)(n.Z,{...M});d.displayName="Template";const o={a8cLogoHref:"https://automattic.com",moduleName:"Jetpack",className:"",moduleNameHref:"https://jetpack.com"},_=d.bind({});_.args=o;const i=d.bind({});i.args={...o,menu:[{label:"Menu Item",href:"#"},{label:"External Menu Item",href:"#",target:"_blank"},{label:"Menu Item With Title",title:"Hello, World!",href:"#"}]},_.parameters={..._.parameters,docs:{...(f=_.parameters)==null?void 0:f.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(u=(h=_.parameters)==null?void 0:h.docs)==null?void 0:u.source}}},i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(m=(t=i.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const j=["_default","WithMenu"]},"../components/components/automattic-byline-logo/index.tsx":(p,r,e)=>{"use strict";e.d(r,{Z:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(c),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=n.__,o=i=>{let{title:j=d("An Automattic Airline","jetpack"),height:f=7,className:h,...u}=i;return(0,s.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:f,className:l()("jp-automattic-byline-logo",h),...u,children:[(0,s.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:j}),(0,s.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,s.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,s.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]})};o.displayName="AutomatticBylineLogo";const _=o},"../components/components/jetpack-footer/index.tsx":(p,r,e)=>{"use strict";e.d(r,{Z:()=>L});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/external.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(a),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../components/components/automattic-byline-logo/index.tsx"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(_),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss"),f={};f.insert="head",f.singleton=!1;var h=i()(j.Z,f);const u=j.Z.locals||{};var x=e("../components/components/jetpack-logo/index.tsx"),t=e("../components/components/layout/use-breakpoint-match/index.ts"),m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const M=n.__,E=()=>(0,m.jsx)(x.Z,{logoColor:"#000",showText:!1,height:16,"aria-hidden":"true"});E.displayName="JetpackIcon";const g=D=>{let{a8cLogoHref:b="https://automattic.com",moduleName:P=M("Jetpack","jetpack"),className:O,moduleNameHref:y="https://jetpack.com",menu:k,...T}=D;const[W]=(0,t.Z)("sm","<="),[B]=(0,t.Z)("md","<="),[I]=(0,t.Z)("lg",">"),C=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(E,{}),P]});return(0,m.jsx)("footer",{className:s()("jp-dashboard-footer",{"is-sm":W,"is-md":B,"is-lg":I},O),"aria-label":M("Jetpack","jetpack"),...T,children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{className:"jp-dashboard-footer__jp-item",children:y?(0,m.jsx)("a",{href:y,children:C}):C}),k==null?void 0:k.map(v=>{const w=v.role==="button",A=!w&&v.target==="_blank";return(0,m.jsx)("li",{children:(0,m.jsxs)("a",{href:v.href,title:v.title,target:v.target,onClick:v.onClick,onKeyDown:v.onKeyDown,className:s()("jp-dashboard-footer__menu-item",{"is-external":A}),role:v.role,rel:A?"noopener noreferrer":void 0,tabIndex:w?0:void 0,children:[v.label,A&&(0,m.jsx)(c.Z,{icon:l.Z,size:16})]})},v.label)}),(0,m.jsx)("li",{className:"jp-dashboard-footer__a8c-item",children:(0,m.jsx)("a",{href:b,"aria-label":M("An Automattic Airline","jetpack"),children:(0,m.jsx)(o.Z,{"aria-hidden":"true"})})})]})})};g.displayName="JetpackFooter";const L=g},"../components/components/jetpack-logo/index.tsx":(p,r,e)=>{"use strict";e.d(r,{Z:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(c),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=n.__,o=i=>{let{logoColor:j="#069e08",showText:f=!0,className:h,height:u=32,...x}=i;const t=f?"0 0 118 32":"0 0 32 32";return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:t,className:l()("jetpack-logo",h),"aria-labelledby":"jetpack-logo-title",height:u,...x,children:[(0,s.jsx)("desc",{id:"jetpack-logo-title",children:d("Jetpack Logo","jetpack")}),(0,s.jsx)("path",{fill:j,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),f&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,s.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,s.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,s.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,s.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,s.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,s.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})};o.displayName="JetpackLogo";const _=o},"../components/components/layout/use-breakpoint-match/index.ts":(p,r,e)=>{"use strict";e.d(r,{Z:()=>f});var n=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),s={};s.insert="head",s.singleton=!1;var d=l()(a.Z,s);const o=a.Z.locals||{},_=["sm","md","lg"],i=(h,u,x)=>{const t=_.indexOf(h),m=t+1,M=u.includes("=");let E=[];return u.startsWith("<")&&(E=_.slice(0,M?m:t)),u.startsWith(">")&&(E=_.slice(M?t:m)),E!=null&&E.length?E.some(g=>x[g]):x[h]},f=(h,u)=>{const x=Array.isArray(h)?h:[h],t=Array.isArray(u)?u:[u],[m,M,E]=_,g=(0,n.Z)(o[m]),L=(0,n.Z)(o[M]),D=(0,n.Z)(o[E]),b={sm:g,md:L,lg:D};return x.map((P,O)=>{const y=t[O];return y?i(P,y,b):b[P]})}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,r)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,l="[native code]";function a(){for(var s=[],d=0;d<arguments.length;d++){var o=arguments[d];if(o){var _=typeof o;if(_==="string"||_==="number")s.push(o);else if(Array.isArray(o)){if(o.length){var i=a.apply(null,o);i&&s.push(i)}}else if(_==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){s.push(o.toString());continue}for(var j in o)c.call(o,j)&&o[j]&&s.push(j)}}}return s.join(" ")}p.exports?(a.default=a,p.exports=a):(e=[],n=function(){return a}.apply(r,e),n!==void 0&&(p.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss":(p,r,e)=>{"use strict";e.d(r,{Z:()=>d});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),s=a()(c());s.push([p.id,".jp-dashboard-footer{display:flex;flex-wrap:wrap;align-items:center;max-width:1128px;width:100%;color:var(--jp-black);font-size:var(--font-body-extra-small);line-height:1.333}.jp-dashboard-footer a{text-decoration:none}.jp-dashboard-footer a:any-link,.jp-dashboard-footer a[role=button]{color:inherit}.jp-dashboard-footer a:hover{text-decoration:underline;text-decoration-thickness:1.5px}.jp-dashboard-footer a:focus{border-radius:2px;box-shadow:none;outline:1.5px solid currentColor;outline-offset:3px}.jp-dashboard-footer.is-sm>ul{flex-direction:column;align-items:flex-start;gap:.125rem}.jp-dashboard-footer.is-md{flex-direction:column;align-items:flex-start}.jp-dashboard-footer>ul{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;width:100%;margin:0;padding:0;list-style:none}.jp-dashboard-footer>ul>li{margin-bottom:0}.jp-dashboard-footer>ul>li>a{display:flex;align-items:center;gap:.25rem;min-height:44px}.jp-dashboard-footer__jp-item{padding-inline-end:1rem;font-weight:600}.jp-dashboard-footer.is-sm .jp-dashboard-footer__jp-item{padding-bottom:1rem}.jp-dashboard-footer.is-lg .jp-dashboard-footer__a8c-item{margin-inline-start:auto}.jp-dashboard-footer.is-sm .jp-dashboard-footer__a8c-item{padding-top:1rem}.jp-dashboard-footer__jp-item>a,.jp-dashboard-footer__a8c-item>a{text-decoration:none}",""]);const d=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(p,r,e)=>{"use strict";e.d(r,{Z:()=>d});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),s=a()(c());s.push([p.id,"",""]),s.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const d=s}}]);})();
