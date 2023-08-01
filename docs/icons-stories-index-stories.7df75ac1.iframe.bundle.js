(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4235],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js":(p,c,e)=>{"use strict";e.d(c,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function i({icon:d,className:a,size:n=20,style:o={},...r}){const m=["dashicon","dashicons","dashicons-"+d,a].filter(Boolean).join(" "),g={...n!=20?{fontSize:`${n}px`,width:`${n}px`,height:`${n}px`}:{},...o};return(0,s.createElement)("span",{className:m,style:g,...r})}const t=i},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(p,c,e)=>{"use strict";e.d(c,{Z:()=>a});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js");function d({icon:n=null,size:o=typeof n=="string"?20:24,...r}){if(typeof n=="string")return(0,s.createElement)(t.Z,{icon:n,size:o,...r});if((0,s.isValidElement)(n)&&t.Z===n.type)return(0,s.cloneElement)(n,{...r});if(typeof n=="function")return(0,s.createElement)(n,{size:o,...r});if(n&&(n.type==="svg"||n.type===i.Wj)){const m={...n.props,width:o,height:o,...r};return(0,s.createElement)(i.Wj,{...m})}return(0,s.isValidElement)(n)?(0,s.cloneElement)(n,{size:o,...r}):n}const a=d},"../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,c,e)=>{"use strict";e.d(c,{Cd:()=>d,G:()=>a,UL:()=>m,Wj:()=>v,mg:()=>r,y$:()=>o});var s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(s),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=l=>(0,t.createElement)("circle",l),a=l=>(0,t.createElement)("g",l),n=l=>createElement("line",l),o=l=>(0,t.createElement)("path",l),r=l=>(0,t.createElement)("polygon",l),m=l=>(0,t.createElement)("rect",l),_=l=>createElement("defs",l),g=l=>createElement("radialGradient",l),S=l=>createElement("linearGradient",l),E=l=>createElement("stop",l),v=({className:l,isPressed:u,...y})=>{const x={...y,className:i()(l,{"is-pressed":u})||void 0,"aria-hidden":!0,focusable:!1};return(0,t.createElement)("svg",{...x})}},"../ai-client/src/icons/stories/index.stories.tsx":(p,c,e)=>{var D,C,f;"use strict";e.r(c),e.d(c,{Default:()=>y,__namedExportsOrder:()=>x,default:()=>E});var s=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../ai-client/src/icons/index.ts"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(d),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/icons/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var r=a()(n.Z,o);const m=n.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),g=`/**
 * External dependencies
 */
import { Icon } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import * as allIcons from '../index';
import styles from './style.module.scss';
/**
 * Types
 */
import type { Meta } from '@storybook/react';

export default {
	title: 'JS Packages/AI Client/Icons',
	component: allIcons,
	parameters: {},
} as Meta< typeof allIcons >;

/**
 * Icons story components.
 *
 * @returns {object} - story component
 */
function IconsStory() {
	return (
		<div className={ styles[ 'icons-container' ] }>
			{ Object.entries( allIcons ).map( ( [ name, icon ] ) => {
				return (
					<div key={ name } className={ styles[ 'icon-container' ] }>
						<Icon icon={ icon } size={ 32 } />
						<div className={ styles[ 'icon-name' ] }>{ name }</div>
					</div>
				);
			} ) }
		</div>
	);
}

const Template = args => <IconsStory { ...args } />;

const DefaultArgs = {};
export const Default = Template.bind( {} );
Default.args = DefaultArgs;
`,S={Default:{startLoc:{col:17,line:36},endLoc:{col:49,line:36},startBody:{col:17,line:36},endBody:{col:49,line:36}}};const E={title:"JS Packages/AI Client/Icons",component:t,parameters:{storySource:{source:`/**
 * External dependencies
 */
import { Icon } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import * as allIcons from '../index';
import styles from './style.module.scss';
/**
 * Types
 */
import type { Meta } from '@storybook/react';
export default ({
  title: 'JS Packages/AI Client/Icons',
  component: allIcons,
  parameters: {}
} as Meta<typeof allIcons>);

/**
 * Icons story components.
 *
 * @returns {object} - story component
 */
function IconsStory() {
  return <div className={styles['icons-container']}>
            {Object.entries(allIcons).map(([name, icon]) => {
      return <div key={name} className={styles['icon-container']}>
                        <Icon icon={icon} size={32} />
                        <div className={styles['icon-name']}>{name}</div>
                    </div>;
    })}
        </div>;
}
const Template = args => <IconsStory {...args} />;
const DefaultArgs = {};
export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <IconsStory {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:36},endLoc:{col:49,line:36},startBody:{col:17,line:36},endBody:{col:49,line:36}}}}}};function v(){return(0,_.jsx)("div",{className:m["icons-container"],children:Object.entries(t).map(I=>{let[j,b]=I;return(0,_.jsxs)("div",{className:m["icon-container"],children:[(0,_.jsx)(s.Z,{icon:b,size:32}),(0,_.jsx)("div",{className:m["icon-name"],children:j})]},j)})})}v.displayName="IconsStory";const l=I=>(0,_.jsx)(v,{...I});l.displayName="Template";const u={},y=l.bind({});y.args=u,y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:"args => <IconsStory {...args} />",...(f=(C=y.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const x=["Default"]},"../components/components/icons/stories/index.stories.tsx":(p,c,e)=>{var x,D,C;"use strict";e.r(c),e.d(c,{Default:()=>u,__namedExportsOrder:()=>y,default:()=>g});var s=e("../components/components/icons/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(i),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss"),a={};a.insert="head",a.singleton=!1;var n=t()(d.Z,a);const o=d.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import * as allIcons from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Icons',
	component: allIcons,
	parameters: {},
} as ComponentMeta< typeof allIcons >;

const sizes = [
	{
		label: 'small',
		value: '24',
	},
	{
		label: 'medium',
		value: '48',
	},
	{
		label: 'large',
		value: '72',
	},
];

/**
 * Icons story components.
 *
 * @returns {object} - story component
 */
function IconsStory() {
	return (
		<div>
			{ sizes.map( size => (
				<div key={ size.label }>
					<h3>{ size.label }</h3>
					<div className={ styles[ 'icons-container' ] }>
						{ Object.keys( allIcons ).map( key => {
							const Icon = allIcons[ key ];
							if ( ! Icon.displayName || 'getIconBySlug' === Icon.displayName ) {
								return null;
							}

							return (
								<div
									className={ \`\${ styles[ 'icon-wrapper' ] } \${ styles[ size.label ] }\` }
									key={ key }
								>
									<Icon size={ size.value } />
									<span>{ Icon.displayName.replace( /icon/gi, '' ) }</span>
								</div>
							);
						} ) }
					</div>
				</div>
			) ) }
		</div>
	);
}

const Template: ComponentStory< typeof allIcons > = args => <IconsStory { ...args } />;

const DefaultArgs = {};
export const Default = Template.bind( {} );
Default.args = DefaultArgs;
`,_={Default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}};const g={title:"JS Packages/Components/Icons",component:s,parameters:{storySource:{source:`import * as allIcons from '../index';
import styles from './style.module.scss';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Icons',
  component: allIcons,
  parameters: {}
} as ComponentMeta<typeof allIcons>);
const sizes = [{
  label: 'small',
  value: '24'
}, {
  label: 'medium',
  value: '48'
}, {
  label: 'large',
  value: '72'
}];

/**
 * Icons story components.
 *
 * @returns {object} - story component
 */
function IconsStory() {
  return <div>
            {sizes.map(size => <div key={size.label}>
                    <h3>{size.label}</h3>
                    <div className={styles['icons-container']}>
                        {Object.keys(allIcons).map(key => {
          const Icon = allIcons[key];
          if (!Icon.displayName || 'getIconBySlug' === Icon.displayName) {
            return null;
          }
          return <div className={\`\${styles['icon-wrapper']} \${styles[size.label]}\`} key={key}>
                                    <Icon size={size.value} />
                                    <span>{Icon.displayName.replace(/icon/gi, '')}</span>
                                </div>;
        })}
                    </div>
                </div>)}
        </div>;
}
const Template: ComponentStory<typeof allIcons> = args => <IconsStory {...args} />;
const DefaultArgs = {};
export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <IconsStory {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}}}}},S=[{label:"small",value:"24"},{label:"medium",value:"48"},{label:"large",value:"72"}];function E(){return(0,r.jsx)("div",{children:S.map(f=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:f.label}),(0,r.jsx)("div",{className:o["icons-container"],children:Object.keys(s).map(I=>{const j=s[I];return!j.displayName||j.displayName==="getIconBySlug"?null:(0,r.jsxs)("div",{className:`${o["icon-wrapper"]} ${o[f.label]}`,children:[(0,r.jsx)(j,{size:f.value}),(0,r.jsx)("span",{children:j.displayName.replace(/icon/gi,"")})]},I)})})]},f.label))})}E.displayName="IconsStory";const v=f=>(0,r.jsx)(E,{...f});v.displayName="Template";const l={},u=v.bind({});u.args=l,u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"args => <IconsStory {...args} />",...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const y=["Default"]},"../ai-client/src/icons/index.ts":(p,c,e)=>{"use strict";e.r(c),e.d(c,{aiAssistantIcon:()=>a,origamiPlaneIcon:()=>o,speakToneIcon:()=>m});var s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=(0,t.jsxs)(s.Wj,{viewBox:"0 0 32 32",width:"32",height:"32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"ai-assistant-icon",children:[(0,t.jsx)(s.y$,{className:"spark-first",d:"M9.33301 5.33325L10.4644 8.20188L13.333 9.33325L10.4644 10.4646L9.33301 13.3333L8.20164 10.4646L5.33301 9.33325L8.20164 8.20188L9.33301 5.33325Z"}),(0,t.jsx)(s.y$,{className:"spark-second",d:"M21.3333 5.33333L22.8418 9.15817L26.6667 10.6667L22.8418 12.1752L21.3333 16L19.8248 12.1752L16 10.6667L19.8248 9.15817L21.3333 5.33333Z"}),(0,t.jsx)(s.y$,{className:"spark-third",d:"M14.6667 13.3333L16.5523 18.1144L21.3333 20L16.5523 21.8856L14.6667 26.6667L12.781 21.8856L8 20L12.781 18.1144L14.6667 13.3333Z"})]}),o=(0,t.jsxs)(s.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/SVG",children:[(0,t.jsx)(s.y$,{d:"M13.5142 18.5098C14.1227 19.6569 14.5367 20.5899 14.5367 20.5899L18.7588 3.84402L4.05433 12.901C4.05433 12.901 5.10588 12.9894 6.41062 13.2114C7.97628 13.4777 9.90652 13.9362 10.8219 14.6646C11.7434 15.3979 12.7731 17.1127 13.5142 18.5098ZM14.0468 16.3975C13.8238 16.0255 13.5879 15.6537 13.3445 15.3013C12.8931 14.6478 12.3509 13.9643 11.7559 13.4909C11.1195 12.9844 10.2767 12.6409 9.51316 12.3968C9.11301 12.2689 8.69633 12.1567 8.28231 12.0585L16.4016 7.05758L14.0468 16.3975Z"}),(0,t.jsx)(s.y$,{d:"M18 5L11 14",stroke:"currentColor"})]}),m=(0,t.jsxs)(s.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM16.75 21V19C16.75 17.4812 15.5188 16.25 14 16.25L6 16.25C4.48122 16.25 3.25 17.4812 3.25 19V21H4.75L4.75 19C4.75 18.3096 5.30964 17.75 6 17.75L14 17.75C14.6904 17.75 15.25 18.3096 15.25 19V21H16.75Z",fill:"currentColor"}),(0,t.jsx)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M19.976 16.3599C21.2507 14.5642 22.0001 12.3695 22.0001 9.99969C22.0001 7.63128 21.2515 5.43769 19.9782 3.64258L18.754 4.50967C19.8537 6.05996 20.5001 7.95434 20.5001 9.99969C20.5001 12.0464 19.8528 13.9419 18.7519 15.4928L19.976 16.3599ZM17.3357 14.4897C18.2357 13.222 18.7648 11.6727 18.7648 9.99969C18.7648 8.32808 18.2365 6.77984 17.3379 5.51279L16.1137 6.37988C16.8387 7.4021 17.2648 8.65114 17.2648 9.99969C17.2648 11.3496 16.8378 12.5998 16.1116 13.6226L17.3357 14.4897Z",fill:"currentColor"})]})},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,c)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,t="[native code]";function d(){for(var a=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var r=typeof o;if(r==="string"||r==="number")a.push(o);else if(Array.isArray(o)){if(o.length){var m=d.apply(null,o);m&&a.push(m)}}else if(r==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){a.push(o.toString());continue}for(var _ in o)i.call(o,_)&&o[_]&&a.push(_)}}}return a.join(" ")}p.exports?(d.default=d,p.exports=d):(e=[],s=function(){return d}.apply(c,e),s!==void 0&&(p.exports=s))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/icons/stories/style.module.scss":(p,c,e)=>{"use strict";e.d(c,{Z:()=>n});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),a=d()(i());a.push([p.id,".GvIkIVo7KI0sC8pfGQiV{display:flex;flex-wrap:wrap;margin-bottom:20px;flex-direction:column}.Wbrd9zhE14_iIXbvUyT3{padding:10px;box-shadow:0 0 1px inset rgba(0,0,0,.5);background-color:#fff;border-radius:5px;margin:2px;display:flex;gap:8px;align-items:center}.YTG94vYaIjR6UgS7I0Ya{font-size:14px}",""]),a.locals={"icons-container":"GvIkIVo7KI0sC8pfGQiV","icon-container":"Wbrd9zhE14_iIXbvUyT3","icon-name":"YTG94vYaIjR6UgS7I0Ya"};const n=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss":(p,c,e)=>{"use strict";e.d(c,{Z:()=>n});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(t),a=d()(i());a.push([p.id,".WiHf9j0_678QVUOufGky{display:flex;flex-wrap:wrap;margin-bottom:20px}.tbF1tidG3J3DxbAERsDA{padding:10px;box-shadow:0 0 1px inset rgba(0,0,0,.5);background-color:#fff;border-radius:5px;margin:2px;display:flex;flex-direction:column;align-items:center}.tbF1tidG3J3DxbAERsDA.gdNDeFQFq6ekdv0wTxhQ{font-size:11px}.tbF1tidG3J3DxbAERsDA.LWgT_u_yRDeRzxNhX71g{font-size:12px}.tbF1tidG3J3DxbAERsDA.ra_aCictT0R7CKPcqS8G{font-size:14px}.tbF1tidG3J3DxbAERsDA span{margin-top:10px;color:#444}",""]),a.locals={"icons-container":"WiHf9j0_678QVUOufGky","icon-wrapper":"tbF1tidG3J3DxbAERsDA",small:"gdNDeFQFq6ekdv0wTxhQ",medium:"LWgT_u_yRDeRzxNhX71g",large:"ra_aCictT0R7CKPcqS8G"};const n=a}}]);})();
