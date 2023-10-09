(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4235],{"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js":(p,c,e)=>{"use strict";e.d(c,{Z:()=>n});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function i({icon:d,className:a,size:t=20,style:o={},...r}){const m=["dashicon","dashicons","dashicons-"+d,a].filter(Boolean).join(" "),x={...t!=20?{fontSize:`${t}px`,width:`${t}px`,height:`${t}px`}:{},...o};return(0,s.createElement)("span",{className:m,style:x,...r})}const n=i},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(p,c,e)=>{"use strict";e.d(c,{Z:()=>a});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js");function d({icon:t=null,size:o=typeof t=="string"?20:24,...r}){if(typeof t=="string")return(0,s.createElement)(n.Z,{icon:t,size:o,...r});if((0,s.isValidElement)(t)&&n.Z===t.type)return(0,s.cloneElement)(t,{...r});if(typeof t=="function")return(0,s.createElement)(t,{size:o,...r});if(t&&(t.type==="svg"||t.type===i.Wj)){const m={...t.props,width:o,height:o,...r};return(0,s.createElement)(i.Wj,{...m})}return(0,s.isValidElement)(t)?(0,s.cloneElement)(t,{size:o,...r}):t}const a=d},"../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,c,e)=>{"use strict";e.d(c,{Cd:()=>d,G:()=>a,UL:()=>m,Wj:()=>C,mg:()=>r,x1:()=>t,y$:()=>o});var s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(s),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=l=>(0,n.createElement)("circle",l),a=l=>(0,n.createElement)("g",l),t=l=>(0,n.createElement)("line",l),o=l=>(0,n.createElement)("path",l),r=l=>(0,n.createElement)("polygon",l),m=l=>(0,n.createElement)("rect",l),_=l=>createElement("defs",l),x=l=>createElement("radialGradient",l),D=l=>createElement("linearGradient",l),v=l=>createElement("stop",l),C=({className:l,isPressed:y,...u})=>{const g={...u,className:i()(l,{"is-pressed":y})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",{...g})}},"../ai-client/src/icons/stories/index.stories.tsx":(p,c,e)=>{var h,E,f;"use strict";e.r(c),e.d(c,{Default:()=>u,__namedExportsOrder:()=>g,default:()=>v});var s=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../ai-client/src/icons/index.ts"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/icons/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var r=a()(t.Z,o);const m=t.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=`/**
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
`,D={Default:{startLoc:{col:17,line:36},endLoc:{col:49,line:36},startBody:{col:17,line:36},endBody:{col:49,line:36}}};const v={title:"JS Packages/AI Client/Icons",component:n,parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:17,line:36},endLoc:{col:49,line:36},startBody:{col:17,line:36},endBody:{col:49,line:36}}}}}};function C(){return(0,_.jsx)("div",{className:m["icons-container"],children:Object.entries(n).map(I=>{let[j,S]=I;return(0,_.jsxs)("div",{className:m["icon-container"],children:[(0,_.jsx)(s.Z,{icon:S,size:32}),(0,_.jsx)("div",{className:m["icon-name"],children:j})]},j)})})}C.displayName="IconsStory";const l=I=>(0,_.jsx)(C,{...I});l.displayName="Template";const y={},u=l.bind({});u.args=y,u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"args => <IconsStory {...args} />",...(f=(E=u.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const g=["Default"]},"../components/components/icons/stories/index.stories.tsx":(p,c,e)=>{var g,h,E;"use strict";e.r(c),e.d(c,{Default:()=>y,__namedExportsOrder:()=>u,default:()=>x});var s=e("../components/components/icons/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(i),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss"),a={};a.insert="head",a.singleton=!1;var t=n()(d.Z,a);const o=d.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import * as allIcons from '../index';
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
`,_={Default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}};const x={title:"JS Packages/Components/Icons",component:s,parameters:{storySource:{source:`import * as allIcons from '../index';
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
};`,locationsMap:{default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}}}}},D=[{label:"small",value:"24"},{label:"medium",value:"48"},{label:"large",value:"72"}];function v(){return(0,r.jsx)("div",{children:D.map(f=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:f.label}),(0,r.jsx)("div",{className:o["icons-container"],children:Object.keys(s).map(I=>{const j=s[I];return!j.displayName||j.displayName==="getIconBySlug"?null:(0,r.jsxs)("div",{className:`${o["icon-wrapper"]} ${o[f.label]}`,children:[(0,r.jsx)(j,{size:f.value}),(0,r.jsx)("span",{children:j.displayName.replace(/icon/gi,"")})]},I)})})]},f.label))})}v.displayName="IconsStory";const C=f=>(0,r.jsx)(v,{...f});C.displayName="Template";const l={},y=C.bind({});y.args=l,y.parameters={...y.parameters,docs:{...(g=y.parameters)==null?void 0:g.docs,source:{originalSource:"args => <IconsStory {...args} />",...(E=(h=y.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const u=["Default"]},"../ai-client/src/icons/index.ts":(p,c,e)=>{"use strict";e.r(c),e.d(c,{aiAssistantIcon:()=>a,micIcon:()=>o,origamiPlaneIcon:()=>m,playerPauseIcon:()=>l,playerPlayIcon:()=>x,playerStopIcon:()=>v,speakToneIcon:()=>u});var s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=(0,n.jsxs)(s.Wj,{viewBox:"0 0 32 32",width:"32",height:"32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"ai-assistant-icon",children:[(0,n.jsx)(s.y$,{className:"spark-first",d:"M9.33301 5.33325L10.4644 8.20188L13.333 9.33325L10.4644 10.4646L9.33301 13.3333L8.20164 10.4646L5.33301 9.33325L8.20164 8.20188L9.33301 5.33325Z"}),(0,n.jsx)(s.y$,{className:"spark-second",d:"M21.3333 5.33333L22.8418 9.15817L26.6667 10.6667L22.8418 12.1752L21.3333 16L19.8248 12.1752L16 10.6667L19.8248 9.15817L21.3333 5.33333Z"}),(0,n.jsx)(s.y$,{className:"spark-third",d:"M14.6667 13.3333L16.5523 18.1144L21.3333 20L16.5523 21.8856L14.6667 26.6667L12.781 21.8856L8 20L12.781 18.1144L14.6667 13.3333Z"})]}),o=(0,n.jsxs)(s.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/SVG",children:[(0,n.jsx)(s.UL,{x:"8.75",y:"2.75",width:"6.5",height:"11.5",rx:"3.25",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),(0,n.jsx)(s.x1,{x1:"12",y1:"17",x2:"12",y2:"21",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),(0,n.jsx)(s.y$,{d:"M18 11C18 11.7879 17.8448 12.5681 17.5433 13.2961C17.2417 14.0241 16.7998 14.6855 16.2426 15.2426C15.6855 15.7998 15.0241 16.2418 14.2961 16.5433C13.5681 16.8448 12.7879 17 12 17C11.2121 17 10.4319 16.8448 9.7039 16.5433C8.97595 16.2417 8.31451 15.7998 7.75736 15.2426C7.20021 14.6855 6.75825 14.0241 6.45672 13.2961C6.15519 12.5681 6 11.7879 6 11",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})]}),m=(0,n.jsxs)(s.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/SVG",children:[(0,n.jsx)(s.y$,{d:"M13.5142 18.5098C14.1227 19.6569 14.5367 20.5899 14.5367 20.5899L18.7588 3.84402L4.05433 12.901C4.05433 12.901 5.10588 12.9894 6.41062 13.2114C7.97628 13.4777 9.90652 13.9362 10.8219 14.6646C11.7434 15.3979 12.7731 17.1127 13.5142 18.5098ZM14.0468 16.3975C13.8238 16.0255 13.5879 15.6537 13.3445 15.3013C12.8931 14.6478 12.3509 13.9643 11.7559 13.4909C11.1195 12.9844 10.2767 12.6409 9.51316 12.3968C9.11301 12.2689 8.69633 12.1567 8.28231 12.0585L16.4016 7.05758L14.0468 16.3975Z"}),(0,n.jsx)(s.y$,{d:"M18 5L11 14",stroke:"currentColor"})]}),x=(0,n.jsxs)(s.Wj,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)(s.y$,{d:"M16 6.33325C14.7306 6.33325 13.4736 6.58329 12.3007 7.06908C11.1279 7.55488 10.0623 8.26692 9.16464 9.16455C8.26701 10.0622 7.55497 11.1278 7.06917 12.3006C6.58338 13.4735 6.33334 14.7305 6.33334 15.9999C6.33334 17.2694 6.58338 18.5264 7.06917 19.6992C7.55497 20.872 8.26701 21.9377 9.16464 22.8353C10.0623 23.7329 11.1279 24.445 12.3007 24.9308C13.4736 25.4165 14.7306 25.6666 16 25.6666C18.5638 25.6666 21.0225 24.6481 22.8354 22.8353C24.6482 21.0224 25.6667 18.5637 25.6667 15.9999C25.6667 13.4362 24.6482 10.9774 22.8354 9.16455C21.0225 7.3517 18.5638 6.33325 16 6.33325ZM4.33334 15.9999C4.33334 12.9057 5.56251 9.93826 7.75043 7.75034C9.93836 5.56242 12.9058 4.33325 16 4.33325C19.0942 4.33325 22.0617 5.56242 24.2496 7.75034C26.4375 9.93826 27.6667 12.9057 27.6667 15.9999C27.6667 19.0941 26.4375 22.0616 24.2496 24.2495C22.0617 26.4374 19.0942 27.6666 16 27.6666C12.9058 27.6666 9.93836 26.4374 7.75043 24.2495C5.56251 22.0616 4.33334 19.0941 4.33334 15.9999Z",fill:"currentColor"}),(0,n.jsx)(s.y$,{d:"M20.1838 15.098C20.8674 15.5051 20.8675 16.4949 20.1839 16.902L14.8877 20.0553C14.188 20.4719 13.301 19.9677 13.301 19.1533L13.301 12.8467C13.301 12.0323 14.188 11.5281 14.8877 11.9447L20.1838 15.098Z",fill:"currentColor"})]}),v=(0,n.jsxs)(s.Wj,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/SVG",children:[(0,n.jsx)(s.y$,{d:"M16.0002 6.33301C14.7307 6.33301 13.4737 6.58304 12.3009 7.06884C11.1281 7.55463 10.0624 8.26668 9.1648 9.16431C8.26716 10.0619 7.55512 11.1276 7.06933 12.3004C6.58353 13.4732 6.3335 14.7302 6.3335 15.9997C6.3335 17.2691 6.58353 18.5261 7.06933 19.6989C7.55512 20.8718 8.26716 21.9374 9.1648 22.835C10.0624 23.7327 11.1281 24.4447 12.3009 24.9305C13.4737 25.4163 14.7307 25.6663 16.0002 25.6663C18.5639 25.6663 21.0227 24.6479 22.8355 22.835C24.6484 21.0222 25.6668 18.5634 25.6668 15.9997C25.6668 13.4359 24.6484 10.9772 22.8355 9.16431C21.0227 7.35146 18.5639 6.33301 16.0002 6.33301ZM4.3335 15.9997C4.3335 12.9055 5.56266 9.93802 7.75058 7.7501C9.93851 5.56217 12.906 4.33301 16.0002 4.33301C19.0944 4.33301 22.0618 5.56217 24.2497 7.7501C26.4377 9.93802 27.6668 12.9055 27.6668 15.9997C27.6668 19.0939 26.4377 22.0613 24.2497 24.2493C22.0618 26.4372 19.0944 27.6663 16.0002 27.6663C12.906 27.6663 9.93851 26.4372 7.75058 24.2493C5.56266 22.0613 4.3335 19.0939 4.3335 15.9997Z",fill:"currentColor"}),(0,n.jsx)(s.UL,{x:"12",y:"12",width:"8",height:"8",fill:"currentColor"})]}),l=(0,n.jsxs)(s.Wj,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)(s.y$,{d:"M16 6.33325C14.7306 6.33325 13.4736 6.58329 12.3007 7.06908C11.1279 7.55488 10.0623 8.26692 9.16464 9.16455C8.26701 10.0622 7.55497 11.1278 7.06917 12.3006C6.58338 13.4735 6.33334 14.7305 6.33334 15.9999C6.33334 17.2694 6.58338 18.5264 7.06917 19.6992C7.55497 20.872 8.26701 21.9377 9.16464 22.8353C10.0623 23.7329 11.1279 24.445 12.3007 24.9308C13.4736 25.4165 14.7306 25.6666 16 25.6666C18.5638 25.6666 21.0225 24.6481 22.8354 22.8353C24.6482 21.0224 25.6667 18.5637 25.6667 15.9999C25.6667 13.4362 24.6482 10.9774 22.8354 9.16455C21.0225 7.3517 18.5638 6.33325 16 6.33325ZM4.33334 15.9999C4.33334 12.9057 5.56251 9.93826 7.75043 7.75034C9.93836 5.56242 12.9058 4.33325 16 4.33325C19.0942 4.33325 22.0617 5.56242 24.2496 7.75034C26.4375 9.93826 27.6667 12.9057 27.6667 15.9999C27.6667 19.0941 26.4375 22.0616 24.2496 24.2495C22.0617 26.4374 19.0942 27.6666 16 27.6666C12.9058 27.6666 9.93836 26.4374 7.75043 24.2495C5.56251 22.0616 4.33334 19.0941 4.33334 15.9999Z",fill:"currentColor"}),(0,n.jsx)(s.UL,{x:"17",y:"12",width:"3",height:"8",fill:"currentColor"}),(0,n.jsx)(s.UL,{x:"12",y:"12",width:"3",height:"8",fill:"currentColor"})]}),u=(0,n.jsxs)(s.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM16.75 21V19C16.75 17.4812 15.5188 16.25 14 16.25L6 16.25C4.48122 16.25 3.25 17.4812 3.25 19V21H4.75L4.75 19C4.75 18.3096 5.30964 17.75 6 17.75L14 17.75C14.6904 17.75 15.25 18.3096 15.25 19V21H16.75Z",fill:"currentColor"}),(0,n.jsx)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M19.976 16.3599C21.2507 14.5642 22.0001 12.3695 22.0001 9.99969C22.0001 7.63128 21.2515 5.43769 19.9782 3.64258L18.754 4.50967C19.8537 6.05996 20.5001 7.95434 20.5001 9.99969C20.5001 12.0464 19.8528 13.9419 18.7519 15.4928L19.976 16.3599ZM17.3357 14.4897C18.2357 13.222 18.7648 11.6727 18.7648 9.99969C18.7648 8.32808 18.2365 6.77984 17.3379 5.51279L16.1137 6.37988C16.8387 7.4021 17.2648 8.65114 17.2648 9.99969C17.2648 11.3496 16.8378 12.5998 16.1116 13.6226L17.3357 14.4897Z",fill:"currentColor"})]})},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,c)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,n="[native code]";function d(){for(var a=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if(r==="string"||r==="number")a.push(o);else if(Array.isArray(o)){if(o.length){var m=d.apply(null,o);m&&a.push(m)}}else if(r==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){a.push(o.toString());continue}for(var _ in o)i.call(o,_)&&o[_]&&a.push(_)}}}return a.join(" ")}p.exports?(d.default=d,p.exports=d):(e=[],s=function(){return d}.apply(c,e),s!==void 0&&(p.exports=s))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/icons/stories/style.module.scss":(p,c,e)=>{"use strict";e.d(c,{Z:()=>t});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),a=d()(i());a.push([p.id,".GvIkIVo7KI0sC8pfGQiV{display:flex;flex-wrap:wrap;margin-bottom:20px;flex-direction:column}.Wbrd9zhE14_iIXbvUyT3{padding:10px;box-shadow:0 0 1px inset rgba(0,0,0,.5);background-color:#fff;border-radius:5px;margin:2px;display:flex;gap:8px;align-items:center}.YTG94vYaIjR6UgS7I0Ya{font-size:14px}",""]),a.locals={"icons-container":"GvIkIVo7KI0sC8pfGQiV","icon-container":"Wbrd9zhE14_iIXbvUyT3","icon-name":"YTG94vYaIjR6UgS7I0Ya"};const t=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss":(p,c,e)=>{"use strict";e.d(c,{Z:()=>t});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),a=d()(i());a.push([p.id,".WiHf9j0_678QVUOufGky{display:flex;flex-wrap:wrap;margin-bottom:20px}.tbF1tidG3J3DxbAERsDA{padding:10px;box-shadow:0 0 1px inset rgba(0,0,0,.5);background-color:#fff;border-radius:5px;margin:2px;display:flex;flex-direction:column;align-items:center}.tbF1tidG3J3DxbAERsDA.gdNDeFQFq6ekdv0wTxhQ{font-size:11px}.tbF1tidG3J3DxbAERsDA.LWgT_u_yRDeRzxNhX71g{font-size:12px}.tbF1tidG3J3DxbAERsDA.ra_aCictT0R7CKPcqS8G{font-size:14px}.tbF1tidG3J3DxbAERsDA span{margin-top:10px;color:#444}",""]),a.locals={"icons-container":"WiHf9j0_678QVUOufGky","icon-wrapper":"tbF1tidG3J3DxbAERsDA",small:"gdNDeFQFq6ekdv0wTxhQ",medium:"LWgT_u_yRDeRzxNhX71g",large:"ra_aCictT0R7CKPcqS8G"};const t=a}}]);})();
