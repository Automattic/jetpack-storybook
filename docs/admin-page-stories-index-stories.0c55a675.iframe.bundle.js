(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(c,r,e)=>{"use strict";e.d(r,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m(t){return t&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(t):null}function n(t){const d=(0,a.useMemo)(()=>{const o=m(t);return{subscribe(l){return o?(o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}):()=>{}},getValue(){var l;return(l=o==null?void 0:o.matches)!==null&&l!==void 0?l:!1}}},[t]);return(0,a.useSyncExternalStore)(d.subscribe,d.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(c,r,e)=>{"use strict";e.d(r,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m(t){let{icon:d,size:o=24,...l}=t;return(0,a.cloneElement)(d,{width:o,height:o,...l})}const n=m},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js":(c,r,e)=>{"use strict";e.d(r,{Z:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,a.createElement)(m.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(m.y$,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(c,r,e)=>{"use strict";e.d(r,{Cd:()=>t,G:()=>d,UL:()=>f,Wj:()=>y,mg:()=>_,y$:()=>l});var a=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),m=e.n(a),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=s=>(0,n.createElement)("circle",s),d=s=>(0,n.createElement)("g",s),o=s=>createElement("line",s),l=s=>(0,n.createElement)("path",s),_=s=>(0,n.createElement)("polygon",s),f=s=>(0,n.createElement)("rect",s),v=s=>createElement("defs",s),j=s=>createElement("radialGradient",s),E=s=>createElement("linearGradient",s),g=s=>createElement("stop",s),y=s=>{let{className:i,isPressed:u,...p}=s;const x={...p,className:m()(i,{"is-pressed":u})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",x)}},"../components/components/admin-page/stories/index.stories.tsx":(c,r,e)=>{var x,A,w,h,P,C;"use strict";e.r(r),e.d(r,{CustomHeader:()=>u,__namedExportsOrder:()=>p,_default:()=>i,default:()=>y});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../components/components/jetpack-logo/index.tsx"),n=e("../components/components/text/index.tsx"),t=e("../components/components/admin-page/index.tsx"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(d),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),_={};_.insert="head",_.singleton=!1;var f=o()(l.Z,_);const v=l.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Admin Page',
	component: AdminPage,
	argTypes: {
		moduleName: { control: 'text', defaultValue: 'Jetpack' },
		showHeader: { control: 'boolean', defaultValue: true },
		showFooter: { control: 'boolean', defaultValue: true },
		showBackground: { control: 'boolean', defaultValue: true },
	},
} as ComponentMeta< typeof AdminPage >;

// Export additional stories using pre-defined values
const Template: ComponentStory< typeof AdminPage > = args => <AdminPage { ...args } />;

// Export Default story
export const _default = Template.bind( {} );

export const CustomHeader = Template.bind( {} );
CustomHeader.args = {
	header: (
		<div className={ styles[ 'custom-header' ] }>
			<JetpackLogo height={ 40 } />
			<Text className={ styles[ 'logo-title' ] } weight="regular">
				Next Product is coming up
			</Text>
		</div>
	),
};
`,g={_default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},CustomHeader:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}};const y={parameters:{storySource:{source:`import React from 'react';
import JetpackLogo from '../../jetpack-logo/index';
import Text from '../../text/index';
import AdminPage from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Admin Page',
  component: AdminPage,
  argTypes: {
    moduleName: {
      control: 'text',
      defaultValue: 'Jetpack'
    },
    showHeader: {
      control: 'boolean',
      defaultValue: true
    },
    showFooter: {
      control: 'boolean',
      defaultValue: true
    },
    showBackground: {
      control: 'boolean',
      defaultValue: true
    }
  }
} as ComponentMeta<typeof AdminPage>);

// Export additional stories using pre-defined values
const Template: ComponentStory<typeof AdminPage> = args => <AdminPage {...args} />;

// Export Default story
export const _default = Template.bind({});
export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: <div className={styles['custom-header']}>
            <JetpackLogo height={40} />
            <Text className={styles['logo-title']} weight="regular">
                Next Product is coming up
            </Text>
        </div>
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
CustomHeader.parameters = {
  ...CustomHeader.parameters,
  docs: {
    ...CustomHeader.parameters?.docs,
    source: {
      originalSource: "args => <AdminPage {...args} />",
      ...CustomHeader.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:t.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},s=M=>(0,j.jsx)(t.Z,{...M});s.displayName="Template";const i=s.bind({}),u=s.bind({});u.args={header:(0,j.jsxs)("div",{className:v["custom-header"],children:[(0,j.jsx)(m.Z,{height:40}),(0,j.jsx)(n.ZP,{className:v["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <AdminPage {...args} />",...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}},u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"args => <AdminPage {...args} />",...(C=(P=u.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const p=["_default","CustomHeader"]},"../components/components/layout/use-breakpoint-match/index.ts":(c,r,e)=>{"use strict";e.d(r,{Z:()=>j});var a=e("../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(m),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),d={};d.insert="head",d.singleton=!1;var o=n()(t.Z,d);const l=t.Z.locals||{},_=["sm","md","lg"],f=(E,g,y)=>{const s=_.indexOf(E),i=s+1,u=g.includes("=");let p=[];return g.startsWith("<")&&(p=_.slice(0,u?i:s)),g.startsWith(">")&&(p=_.slice(u?s:i)),p!=null&&p.length?p.some(x=>y[x]):y[E]},j=(E,g)=>{const y=Array.isArray(E)?E:[E],s=Array.isArray(g)?g:[g],[i,u,p]=_,x=(0,a.Z)(l[i]),A=(0,a.Z)(l[u]),w=(0,a.Z)(l[p]),h={sm:x,md:A,lg:w};return y.map((P,C)=>{const M=s[C];return M?f(P,M,h):h[P]})}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(c,r)=>{var e,a;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty;function n(){for(var t=[],d=0;d<arguments.length;d++){var o=arguments[d];if(o){var l=typeof o;if(l==="string"||l==="number")t.push(o);else if(Array.isArray(o)){if(o.length){var _=n.apply(null,o);_&&t.push(_)}}else if(l==="object")if(o.toString===Object.prototype.toString)for(var f in o)m.call(o,f)&&o[f]&&t.push(f);else t.push(o.toString())}}return t.join(" ")}c.exports?(n.default=n,c.exports=n):(e=[],a=function(){return n}.apply(r,e),a!==void 0&&(c.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(c,r,e)=>{"use strict";e.d(r,{Z:()=>o});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(n),d=t()(m());d.push([c.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),d.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const o=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(c,r,e)=>{"use strict";e.d(r,{Z:()=>o});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(n),d=t()(m());d.push([c.id,"",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const o=d}}]);})();
