(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(c,r,e)=>{"use strict";e.d(r,{Z:()=>a});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m(t){return t&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(t):null}function a(t){const n=(0,d.useMemo)(()=>{const l=m(t);return{subscribe(o){return l?(l.addEventListener("change",o),()=>{l.removeEventListener("change",o)}):()=>{}},getValue(){var o;return(o=l==null?void 0:l.matches)!==null&&o!==void 0?o:!1}}},[t]);return(0,d.useSyncExternalStore)(n.subscribe,n.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js":(c,r,e)=>{"use strict";e.d(r,{Z:()=>a});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m({icon:t,size:n=24,...l}){return(0,d.cloneElement)(t,{width:n,height:n,...l})}const a=m},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/external.js":(c,r,e)=>{"use strict";e.d(r,{Z:()=>t});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,d.createElement)(m.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(m.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(c,r,e)=>{"use strict";e.d(r,{Cd:()=>t,G:()=>n,UL:()=>y,Wj:()=>x,mg:()=>_,y$:()=>o});var d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(d),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=s=>(0,a.createElement)("circle",s),n=s=>(0,a.createElement)("g",s),l=s=>createElement("line",s),o=s=>(0,a.createElement)("path",s),_=s=>(0,a.createElement)("polygon",s),y=s=>(0,a.createElement)("rect",s),f=s=>createElement("defs",s),j=s=>createElement("radialGradient",s),E=s=>createElement("linearGradient",s),g=s=>createElement("stop",s),x=({className:s,isPressed:i,...u})=>{const p={...u,className:m()(s,{"is-pressed":i})||void 0,"aria-hidden":!0,focusable:!1};return(0,a.createElement)("svg",{...p})}},"../components/components/admin-page/stories/index.stories.tsx":(c,r,e)=>{var h,A,w,v,P,C;"use strict";e.r(r),e.d(r,{CustomHeader:()=>u,__namedExportsOrder:()=>p,_default:()=>i,default:()=>x});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../components/components/jetpack-logo/index.tsx"),a=e("../components/components/text/index.tsx"),t=e("../components/components/admin-page/index.tsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(n),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),_={};_.insert="head",_.singleton=!1;var y=l()(o.Z,_);const f=o.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,g={_default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},CustomHeader:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}};const x={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:t.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},s=S=>(0,j.jsx)(t.Z,{...S});s.displayName="Template";const i=s.bind({}),u=s.bind({});u.args={header:(0,j.jsxs)("div",{className:f["custom-header"],children:[(0,j.jsx)(m.Z,{height:40}),(0,j.jsx)(a.ZP,{className:f["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"args => <AdminPage {...args} />",...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}},u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:"args => <AdminPage {...args} />",...(C=(P=u.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const p=["_default","CustomHeader"]},"../components/components/layout/use-breakpoint-match/index.ts":(c,r,e)=>{"use strict";e.d(r,{Z:()=>j});var d=e("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(m),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),n={};n.insert="head",n.singleton=!1;var l=a()(t.Z,n);const o=t.Z.locals||{},_=["sm","md","lg"],y=(E,g,x)=>{const s=_.indexOf(E),i=s+1,u=g.includes("=");let p=[];return g.startsWith("<")&&(p=_.slice(0,u?i:s)),g.startsWith(">")&&(p=_.slice(u?s:i)),p!=null&&p.length?p.some(h=>x[h]):x[E]},j=(E,g)=>{const x=Array.isArray(E)?E:[E],s=Array.isArray(g)?g:[g],[i,u,p]=_,h=(0,d.Z)(o[i]),A=(0,d.Z)(o[u]),w=(0,d.Z)(o[p]),v={sm:h,md:A,lg:w};return x.map((P,C)=>{const S=s[C];return S?y(P,S,v):v[P]})}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,r)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,a="[native code]";function t(){for(var n=[],l=0;l<arguments.length;l++){var o=arguments[l];if(o){var _=typeof o;if(_==="string"||_==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var y=t.apply(null,o);y&&n.push(y)}}else if(_==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var f in o)m.call(o,f)&&o[f]&&n.push(f)}}}return n.join(" ")}c.exports?(t.default=t,c.exports=t):(e=[],d=function(){return t}.apply(r,e),d!==void 0&&(c.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(c,r,e)=>{"use strict";e.d(r,{Z:()=>l});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(d),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),n=t()(m());n.push([c.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),n.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const l=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(c,r,e)=>{"use strict";e.d(r,{Z:()=>l});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(d),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),n=t()(m());n.push([c.id,"",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const l=n}}]);})();
