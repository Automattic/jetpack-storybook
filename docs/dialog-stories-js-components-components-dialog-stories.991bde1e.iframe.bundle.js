(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6501],{"../../../node_modules/.pnpm/@wordpress+compose@6.9.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(i,r,s)=>{"use strict";s.d(r,{Z:()=>c});var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l(n){return n&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(n):null}function c(n){const o=(0,a.useMemo)(()=>{const t=l(n);return{subscribe(e){return t?(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}):()=>{}},getValue(){var e;return(e=t==null?void 0:t.matches)!==null&&e!==void 0?e:!1}}},[n]);return(0,a.useSyncExternalStore)(o.subscribe,o.getValue,()=>!1)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(i,r,s)=>{var v,g,y;"use strict";s.r(r),s.d(r,{Readme:()=>m,__namedExportsOrder:()=>S,default:()=>f});var a=s("../components/components/dialog/index.tsx"),l=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(l),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var t=c()(n.Z,o);const e=n.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import Dialog from '../index';
import styles from './style.module.scss';

const Template = ( { isTwoSections } ) => (
	<Dialog
		primary={
			<div className={ styles.section }>
				<div>Primary</div>
				<strong>4 | 5 | 7</strong>
			</div>
		}
		secondary={
			<div className={ styles.section }>
				<div>Secondary</div>
				<strong>4 | 3 | 5</strong>
				<div>
					isTwoSections: <strong>{ isTwoSections ? 'yes' : 'no' }</strong>
				</div>
			</div>
		}
		isTwoSections={ isTwoSections }
	/>
);

export default {
	title: 'JS Packages/Components/Dialog',
	component: Dialog,
};

export const Readme = {
	render: Template.bind( {} ),
	name: 'Readme',

	args: {
		isTwoSections: true,
	},
};
`,_={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const u=T=>{let{isTwoSections:j}=T;return(0,d.jsx)(a.Z,{primary:(0,d.jsxs)("div",{className:e.section,children:[(0,d.jsx)("div",{children:"Primary"}),(0,d.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,d.jsxs)("div",{className:e.section,children:[(0,d.jsx)("div",{children:"Secondary"}),(0,d.jsx)("strong",{children:"4 | 3 | 5"}),(0,d.jsxs)("div",{children:["isTwoSections: ",(0,d.jsx)("strong",{children:j?"yes":"no"})]})]}),isTwoSections:j})};u.displayName="Template";const f={parameters:{storySource:{source:`import Dialog from '../index';
import styles from './style.module.scss';
const Template = ({
  isTwoSections
}) => <Dialog primary={<div className={styles.section}>
                <div>Primary</div>
                <strong>4 | 5 | 7</strong>
            </div>} secondary={<div className={styles.section}>
                <div>Secondary</div>
                <strong>4 | 3 | 5</strong>
                <div>
                    isTwoSections: <strong>{isTwoSections ? 'yes' : 'no'}</strong>
                </div>
            </div>} isTwoSections={isTwoSections} />;
export default {
  title: 'JS Packages/Components/Dialog',
  component: Dialog
};
export const Readme = {
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
};
Readme.parameters = {
  ...Readme.parameters,
  docs: {
    ...Readme.parameters?.docs,
    source: {
      originalSource: "{\\n  render: Template.bind({}),\\n  name: 'Readme',\\n  args: {\\n    isTwoSections: true\\n  }\\n}",
      ...Readme.parameters?.docs?.source
    }
  }
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:a.Z},m={render:u.bind({}),name:"Readme",args:{isTwoSections:!0}};m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const S=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,r)=>{var s,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,c="[native code]";function n(){for(var o=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var d=typeof e;if(d==="string"||d==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var p=n.apply(null,e);p&&o.push(p)}}else if(d==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var _ in e)l.call(e,_)&&e[_]&&o.push(_)}}}return o.join(" ")}i.exports?(n.default=n,i.exports=n):(s=[],a=function(){return n}.apply(r,s),a!==void 0&&(i.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(i,r,s)=>{"use strict";s.d(r,{Z:()=>t});var a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=s.n(a),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(c),o=n()(l());o.push([i.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),o.locals={section:"RTMIETP7fe2d9xWFfYKF"};const t=o}}]);})();
