(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4235],{"../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(i,c,t)=>{"use strict";t.d(c,{Cd:()=>a,G:()=>n,UL:()=>u,Wj:()=>f,mg:()=>o,y$:()=>s});var l=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=t.n(l),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=e=>(0,r.createElement)("circle",e),n=e=>(0,r.createElement)("g",e),p=e=>createElement("line",e),s=e=>(0,r.createElement)("path",e),o=e=>(0,r.createElement)("polygon",e),u=e=>(0,r.createElement)("rect",e),y=e=>createElement("defs",e),x=e=>createElement("radialGradient",e),E=e=>createElement("linearGradient",e),g=e=>createElement("stop",e),f=({className:e,isPressed:d,...D})=>{const v={...D,className:m()(e,{"is-pressed":d})||void 0,"aria-hidden":!0,focusable:!1};return(0,r.createElement)("svg",{...v})}},"../components/components/icons/stories/index.stories.tsx":(i,c,t)=>{var v,I,j;"use strict";t.r(c),t.d(c,{Default:()=>d,__namedExportsOrder:()=>D,default:()=>x});var l=t("../components/components/icons/index.tsx"),m=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(m),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss"),n={};n.insert="head",n.singleton=!1;var p=r()(a.Z,n);const s=a.Z.locals||{};var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import * as allIcons from '../index';
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
`,y={Default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}};const x={title:"JS Packages/Components/Icons",component:l,parameters:{storySource:{source:`import * as allIcons from '../index';
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
};`,locationsMap:{default:{startLoc:{col:50,line:44},endLoc:{col:82,line:44},startBody:{col:50,line:44},endBody:{col:82,line:44}}}}}},E=[{label:"small",value:"24"},{label:"medium",value:"48"},{label:"large",value:"72"}];function g(){return(0,o.jsx)("div",{children:E.map(_=>(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:_.label}),(0,o.jsx)("div",{className:s["icons-container"],children:Object.keys(l).map(S=>{const b=l[S];return!b.displayName||b.displayName==="getIconBySlug"?null:(0,o.jsxs)("div",{className:`${s["icon-wrapper"]} ${s[_.label]}`,children:[(0,o.jsx)(b,{size:_.value}),(0,o.jsx)("span",{children:b.displayName.replace(/icon/gi,"")})]},S)})})]},_.label))})}g.displayName="IconsStory";const f=_=>(0,o.jsx)(g,{..._});f.displayName="Template";const e={},d=f.bind({});d.args=e,d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"args => <IconsStory {...args} />",...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const D=["Default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,c)=>{var t,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,r="[native code]";function a(){for(var n=[],p=0;p<arguments.length;p++){var s=arguments[p];if(s){var o=typeof s;if(o==="string"||o==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var u=a.apply(null,s);u&&n.push(u)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){n.push(s.toString());continue}for(var y in s)m.call(s,y)&&s[y]&&n.push(y)}}}return n.join(" ")}i.exports?(a.default=a,i.exports=a):(t=[],l=function(){return a}.apply(c,t),l!==void 0&&(i.exports=l))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icons/stories/style.module.scss":(i,c,t)=>{"use strict";t.d(c,{Z:()=>p});var l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(l),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=t.n(r),n=a()(m());n.push([i.id,".WiHf9j0_678QVUOufGky{display:flex;flex-wrap:wrap;margin-bottom:20px}.tbF1tidG3J3DxbAERsDA{padding:10px;box-shadow:0 0 1px inset rgba(0,0,0,.5);background-color:#fff;border-radius:5px;margin:2px;display:flex;flex-direction:column;align-items:center}.tbF1tidG3J3DxbAERsDA.gdNDeFQFq6ekdv0wTxhQ{font-size:11px}.tbF1tidG3J3DxbAERsDA.LWgT_u_yRDeRzxNhX71g{font-size:12px}.tbF1tidG3J3DxbAERsDA.ra_aCictT0R7CKPcqS8G{font-size:14px}.tbF1tidG3J3DxbAERsDA span{margin-top:10px;color:#444}",""]),n.locals={"icons-container":"WiHf9j0_678QVUOufGky","icon-wrapper":"tbF1tidG3J3DxbAERsDA",small:"gdNDeFQFq6ekdv0wTxhQ",medium:"LWgT_u_yRDeRzxNhX71g",large:"ra_aCictT0R7CKPcqS8G"};const p=n}}]);})();
