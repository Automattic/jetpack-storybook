(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4235],{"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(m,d,t)=>{"use strict";t.d(d,{Cd:()=>l,G:()=>o,UL:()=>_,Wj:()=>y,mg:()=>a,y$:()=>c});var r=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),p=t.n(r),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const l=e=>(0,s.createElement)("circle",e),o=e=>(0,s.createElement)("g",e),n=e=>createElement("line",e),c=e=>(0,s.createElement)("path",e),a=e=>(0,s.createElement)("polygon",e),_=e=>(0,s.createElement)("rect",e),S=e=>createElement("defs",e),x=e=>createElement("radialGradient",e),E=e=>createElement("linearGradient",e),D=e=>createElement("stop",e),y=e=>{let{className:i,isPressed:g,...f}=e;const v={...f,className:p()(i,{"is-pressed":g})||void 0,"aria-hidden":!0,focusable:!1};return(0,s.createElement)("svg",v)}},"../components/components/icons/stories/index.stories.tsx":(m,d,t)=>{var f,v,I;"use strict";t.r(d),t.d(d,{Default:()=>i,__namedExportsOrder:()=>g,default:()=>x});var r=t("../components/components/icons/index.tsx"),p=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(p),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var n=s()(l.Z,o);const c=l.Z.locals||{};var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import * as allIcons from '../index';
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
`,S={Default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}};const x={title:"JS Packages/Components/Icons",component:r,parameters:{storySource:{source:`import * as allIcons from '../index';
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
};`,locationsMap:{default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}}}}},E=[{label:"small",value:"24"},{label:"medium",value:"48"},{label:"large",value:"72"}];function D(){return(0,a.jsx)("div",{children:E.map(u=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:u.label}),(0,a.jsx)("div",{className:c["icons-container"],children:Object.keys(r).map(j=>{const b=r[j];return!b.displayName||b.displayName==="getIconBySlug"?null:(0,a.jsxs)("div",{className:`${c["icon-wrapper"]} ${c[u.label]}`,children:[(0,a.jsx)(b,{size:u.value}),(0,a.jsx)("span",{children:b.displayName.replace(/icon/gi,"")})]},j)})})]},u.label))})}D.displayName="IconsStory";const y=u=>(0,a.jsx)(D,{...u});y.displayName="Template";const e={},i=y.bind({});i.args=e,i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"args => <IconsStory {...args} />",...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const g=["Default"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(m,d)=>{var t,r;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty;function s(){for(var l=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var c=typeof n;if(c==="string"||c==="number")l.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&l.push(a)}}else if(c==="object")if(n.toString===Object.prototype.toString)for(var _ in n)p.call(n,_)&&n[_]&&l.push(_);else l.push(n.toString())}}return l.join(" ")}m.exports?(s.default=s,m.exports=s):(t=[],r=function(){return s}.apply(d,t),r!==void 0&&(m.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss":(m,d,t)=>{"use strict";t.d(d,{Z:()=>n});var r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=t.n(r),s=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=t.n(s),o=l()(p());o.push([m.id,".WiHf9j0_678QVUOufGky{display:flex;flex-wrap:wrap;margin-bottom:20px}.tbF1tidG3J3DxbAERsDA{padding:10px;box-shadow:0 0 1px inset rgba(0,0,0,.5);background-color:#fff;border-radius:5px;margin:2px;display:flex;flex-direction:column;align-items:center}.tbF1tidG3J3DxbAERsDA.gdNDeFQFq6ekdv0wTxhQ{font-size:11px}.tbF1tidG3J3DxbAERsDA.LWgT_u_yRDeRzxNhX71g{font-size:12px}.tbF1tidG3J3DxbAERsDA.ra_aCictT0R7CKPcqS8G{font-size:14px}.tbF1tidG3J3DxbAERsDA span{margin-top:10px;color:#444}",""]),o.locals={"icons-container":"WiHf9j0_678QVUOufGky","icon-wrapper":"tbF1tidG3J3DxbAERsDA",small:"gdNDeFQFq6ekdv0wTxhQ",medium:"LWgT_u_yRDeRzxNhX71g",large:"ra_aCictT0R7CKPcqS8G"};const n=o}}]);})();
