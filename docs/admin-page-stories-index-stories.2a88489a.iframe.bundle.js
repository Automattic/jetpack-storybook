(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6092],{"../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>l});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m(t){return t&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(t):null}function l(t){const n=(0,d.useMemo)(()=>{const a=m(t);return{subscribe(o){return a?(a.addEventListener("change",o),()=>{a.removeEventListener("change",o)}):()=>{}},getValue(){var o;return(o=a==null?void 0:a.matches)!==null&&o!==void 0?o:!1}}},[t]);return(0,d.useSyncExternalStore)(n.subscribe,n.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>l});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function m(t){let{icon:n,size:a=24,...o}=t;return(0,d.cloneElement)(n,{width:a,height:a,...o})}const l=m},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>t});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,d.createElement)(m.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(m.y$,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,r,e)=>{"use strict";e.d(r,{Cd:()=>t,G:()=>n,UL:()=>j,Wj:()=>y,mg:()=>c,y$:()=>o});var d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(d),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=s=>(0,l.createElement)("circle",s),n=s=>(0,l.createElement)("g",s),a=s=>createElement("line",s),o=s=>(0,l.createElement)("path",s),c=s=>(0,l.createElement)("polygon",s),j=s=>(0,l.createElement)("rect",s),f=s=>createElement("defs",s),h=s=>createElement("radialGradient",s),E=s=>createElement("linearGradient",s),g=s=>createElement("stop",s),y=s=>{let{className:i,isPressed:u,...p}=s;const x={...p,className:m()(i,{"is-pressed":u})||void 0,"aria-hidden":!0,focusable:!1};return(0,l.createElement)("svg",x)}},"../components/components/admin-page/stories/index.stories.tsx":(_,r,e)=>{var x,A,C,v,P,w;"use strict";e.r(r),e.d(r,{CustomHeader:()=>u,__namedExportsOrder:()=>p,_default:()=>i,default:()=>y});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../components/components/jetpack-logo/index.tsx"),l=e("../components/components/text/index.tsx"),t=e("../components/components/admin-page/index.tsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(n),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss"),c={};c.insert="head",c.singleton=!1;var j=a()(o.Z,c);const f=o.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}},"custom-header":{startLoc:{col:51,line:31},endLoc:{col:82,line:31},startBody:{col:51,line:31},endBody:{col:82,line:31}}}}},title:"JS Packages/Components/Admin Page",component:t.Z,argTypes:{moduleName:{control:"text",defaultValue:"Jetpack"},showHeader:{control:"boolean",defaultValue:!0},showFooter:{control:"boolean",defaultValue:!0},showBackground:{control:"boolean",defaultValue:!0}}},s=S=>(0,h.jsx)(t.Z,{...S});s.displayName="Template";const i=s.bind({}),u=s.bind({});u.args={header:(0,h.jsxs)("div",{className:f["custom-header"],children:[(0,h.jsx)(m.Z,{height:40}),(0,h.jsx)(l.ZP,{className:f["logo-title"],weight:"regular",children:"Next Product is coming up"})]})},i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <AdminPage {...args} />",...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}},u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:"args => <AdminPage {...args} />",...(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const p=["_default","CustomHeader"]},"../components/components/layout/use-breakpoint-match/index.ts":(_,r,e)=>{"use strict";e.d(r,{Z:()=>h});var d=e("../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(m),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),n={};n.insert="head",n.singleton=!1;var a=l()(t.Z,n);const o=t.Z.locals||{},c=["sm","md","lg"],j=(E,g,y)=>{const s=c.indexOf(E),i=s+1,u=g.includes("=");let p=[];return g.startsWith("<")&&(p=c.slice(0,u?i:s)),g.startsWith(">")&&(p=c.slice(u?s:i)),p!=null&&p.length?p.some(x=>y[x]):y[E]},h=(E,g)=>{const y=Array.isArray(E)?E:[E],s=Array.isArray(g)?g:[g],[i,u,p]=c,x=(0,d.Z)(o[i]),A=(0,d.Z)(o[u]),C=(0,d.Z)(o[p]),v={sm:x,md:A,lg:C};return y.map((P,w)=>{const S=s[w];return S?j(P,S,v):v[P]})}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,r)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,l="[native code]";function t(){for(var n=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var c=typeof o;if(c==="string"||c==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var j=t.apply(null,o);j&&n.push(j)}}else if(c==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var f in o)m.call(o,f)&&o[f]&&n.push(f)}}}return n.join(" ")}_.exports?(t.default=t,_.exports=t):(e=[],d=function(){return t}.apply(r,e),d!==void 0&&(_.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/admin-page/stories/style.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>a});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(d),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(l),n=t()(m());n.push([_.id,".k5g13oYfCGQoIs51Nj9L{display:flex}.hltGSN4kKqfmGJ3KUj_t{flex:1;line-height:30px;font-size:30px;margin-top:2px;margin-left:4px;font-weight:300;letter-spacing:.0625em}",""]),n.locals={"custom-header":"k5g13oYfCGQoIs51Nj9L","logo-title":"hltGSN4kKqfmGJ3KUj_t"};const a=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>a});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(d),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(l),n=t()(m());n.push([_.id,"",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const a=n}}]);})();
