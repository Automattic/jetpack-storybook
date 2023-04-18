(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6113],{"../components/components/jetpack-logo/stories/index.stories.tsx":(d,p,t)=>{var i,_,u;"use strict";t.r(p),t.d(p,{__namedExportsOrder:()=>r,_default:()=>s,default:()=>o});var n=t("../components/components/jetpack-logo/index.tsx"),m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import JetpackLogo from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Jetpack Logo',
	component: JetpackLogo,
	argTypes: {
		logoColor: { control: 'color' },
	},
} as ComponentMeta< typeof JetpackLogo >;

const Template: ComponentStory< typeof JetpackLogo > = args => <JetpackLogo { ...args } />;

const DefaultArgs = {
	width: 150,
	className: 'sample-classname',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;
`,l={_default:{startLoc:{col:53,line:12},endLoc:{col:86,line:12},startBody:{col:53,line:12},endBody:{col:86,line:12}}};const o={parameters:{storySource:{source:`import JetpackLogo from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Jetpack Logo',
  component: JetpackLogo,
  argTypes: {
    logoColor: {
      control: 'color'
    }
  }
} as ComponentMeta<typeof JetpackLogo>);
const Template: ComponentStory<typeof JetpackLogo> = args => <JetpackLogo {...args} />;
const DefaultArgs = {
  width: 150,
  className: 'sample-classname'
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <JetpackLogo {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:53,line:12},endLoc:{col:86,line:12},startBody:{col:53,line:12},endBody:{col:86,line:12}}}}},title:"JS Packages/Components/Jetpack Logo",component:n.Z,argTypes:{logoColor:{control:"color"}}},e=g=>(0,m.jsx)(n.Z,{...g});e.displayName="Template";const c={width:150,className:"sample-classname"},s=e.bind({});s.args=c,s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"args => <JetpackLogo {...args} />",...(u=(_=s.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};const r=["_default"]},"../components/components/jetpack-logo/index.tsx":(d,p,t)=>{"use strict";t.d(p,{Z:()=>s});var n=t("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),m=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),a=t.n(m),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=n.__,c=r=>{let{logoColor:i="#069e08",showText:_=!0,className:u,height:g=32,...f}=r;const h=_?"0 0 118 32":"0 0 32 32";return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:h,className:a()("jetpack-logo",u),"aria-labelledby":"jetpack-logo-title",height:g,...f,children:[(0,o.jsx)("desc",{id:"jetpack-logo-title",children:e("Jetpack Logo","jetpack")}),(0,o.jsx)("path",{fill:i,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),_&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,o.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,o.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,o.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,o.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,o.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,o.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})};c.displayName="JetpackLogo";const s=c},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(d,p)=>{var t,n;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty;function a(){for(var l=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var c=typeof e;if(c==="string"||c==="number")l.push(e);else if(Array.isArray(e)){if(e.length){var s=a.apply(null,e);s&&l.push(s)}}else if(c==="object")if(e.toString===Object.prototype.toString)for(var r in e)m.call(e,r)&&e[r]&&l.push(r);else l.push(e.toString())}}return l.join(" ")}d.exports?(a.default=a,d.exports=a):(t=[],n=function(){return a}.apply(p,t),n!==void 0&&(d.exports=n))})()}}]);})();
