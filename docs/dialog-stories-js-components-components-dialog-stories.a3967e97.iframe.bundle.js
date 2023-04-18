(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6501],{"../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(l,i,s)=>{"use strict";s.d(i,{Z:()=>r});var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c(n){return n&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(n):null}function r(n){const o=(0,a.useMemo)(()=>{const e=c(n);return{subscribe(t){return e?(e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}):()=>{}},getValue(){var t;return(t=e==null?void 0:e.matches)!==null&&t!==void 0?t:!1}}},[n]);return(0,a.useSyncExternalStore)(o.subscribe,o.getValue,()=>!1)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(l,i,s)=>{var u,v,g;"use strict";s.r(i),s.d(i,{Readme:()=>m,__namedExportsOrder:()=>f,default:()=>j});var a=s("../components/components/dialog/index.tsx"),c=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(c),n=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),o={};o.insert="head",o.singleton=!1;var e=r()(n.Z,o);const t=n.Z.locals||{};var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import Dialog from '../index';
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
`,T={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const p=S=>{let{isTwoSections:y}=S;return(0,d.jsx)(a.Z,{primary:(0,d.jsxs)("div",{className:t.section,children:[(0,d.jsx)("div",{children:"Primary"}),(0,d.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,d.jsxs)("div",{className:t.section,children:[(0,d.jsx)("div",{children:"Secondary"}),(0,d.jsx)("strong",{children:"4 | 3 | 5"}),(0,d.jsxs)("div",{children:["isTwoSections: ",(0,d.jsx)("strong",{children:y?"yes":"no"})]})]}),isTwoSections:y})};p.displayName="Template";const j={parameters:{storySource:{source:`import Dialog from '../index';
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
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:a.Z},m={render:p.bind({}),name:"Readme",args:{isTwoSections:!0}};m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(g=(v=m.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const f=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(l,i)=>{var s,a;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty;function r(){for(var n=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var t=typeof e;if(t==="string"||t==="number")n.push(e);else if(Array.isArray(e)){if(e.length){var d=r.apply(null,e);d&&n.push(d)}}else if(t==="object")if(e.toString===Object.prototype.toString)for(var _ in e)c.call(e,_)&&e[_]&&n.push(_);else n.push(e.toString())}}return n.join(" ")}l.exports?(r.default=r,l.exports=r):(s=[],a=function(){return r}.apply(i,s),a!==void 0&&(l.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(l,i,s)=>{"use strict";s.d(i,{Z:()=>e});var a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(a),r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=s.n(r),o=n()(c());o.push([l.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),o.locals={section:"RTMIETP7fe2d9xWFfYKF"};const e=o}}]);})();
