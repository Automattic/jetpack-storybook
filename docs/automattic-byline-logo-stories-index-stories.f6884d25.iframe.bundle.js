"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2707],{"../components/components/automattic-byline-logo/stories/index.stories.tsx":(u,m,n)=>{n.r(m),n.d(m,{__namedExportsOrder:()=>d,_default:()=>s,default:()=>o});var c=n("../components/components/automattic-byline-logo/index.tsx"),r=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=`import AutomatticBylineLogo from '../index.tsx';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof AutomatticBylineLogo > = {
	title: 'JS Packages/Components/Automattic Byline Logo',
	component: AutomatticBylineLogo,
};

export default meta;

const Template: StoryFn< typeof AutomatticBylineLogo > = args => (
	<AutomatticBylineLogo { ...args } />
);

const DefaultArgs = {
	title: 'Title',
	height: '50px',
	className: 'sample-classname',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;
`,e={_default:{startLoc:{col:17,line:8},endLoc:{col:2,line:10},startBody:{col:17,line:8},endBody:{col:2,line:10}}};const o={parameters:{storySource:{source:`import AutomatticBylineLogo from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Automattic Byline Logo',
  component: AutomatticBylineLogo
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(AutomatticBylineLogo, {
  ...args
});
const DefaultArgs = {
  title: 'Title',
  height: '50px',
  className: 'sample-classname'
};
export const _default = Template.bind({});
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:2,line:10},startBody:{col:17,line:8},endBody:{col:2,line:10}}}}},title:"JS Packages/Components/Automattic Byline Logo",component:c.A},t=_=>(0,r.jsx)(c.A,{..._}),i={title:"Title",height:"50px",className:"sample-classname"},s=t.bind({});s.args=i;const d=["_default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <AutomatticBylineLogo {...args} />",...s.parameters?.docs?.source}}}},"../components/components/automattic-byline-logo/index.tsx":(u,m,n)=>{n.d(m,{A:()=>o});var c=n("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),r=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=c.__,o=({title:t=e("An Automattic Airline","jetpack-components"),height:i=7,className:s,...d})=>(0,l.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:i,className:(0,r.A)("jp-automattic-byline-logo",s),...d,children:[(0,l.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:t}),(0,l.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,l.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,l.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]});try{automatticbylinelogo.displayName="automatticbylinelogo",automatticbylinelogo.__docgenInfo={description:'Automattic "By line" Logo component.',displayName:"automatticbylinelogo",props:{title:{defaultValue:{value:"__( 'An Automattic Airline', 'jetpack-components' )"},description:"Title for SVG.",name:"title",required:!1,type:{name:"string"}},height:{defaultValue:{value:"7"},description:"Height for SVG.",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional className for the a wrapper. `jp-automattic-byline-logo` always included",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/automattic-byline-logo/index.tsx#automatticbylinelogo"]={docgenInfo:automatticbylinelogo.__docgenInfo,name:"automatticbylinelogo",path:"../components/components/automattic-byline-logo/index.tsx#automatticbylinelogo"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(u,m,n)=>{n.d(m,{A:()=>l});function c(e){var a,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(a=0;a<i;a++)e[a]&&(o=c(e[a]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function r(){for(var e,a,o=0,t="",i=arguments.length;o<i;o++)(e=arguments[o])&&(a=c(e))&&(t&&(t+=" "),t+=a);return t}const l=r}}]);
