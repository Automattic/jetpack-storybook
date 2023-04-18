(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7249,6501],{"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js":(_,l,s)=>{"use strict";s.d(l,{Z:()=>r});function r(){return r=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.0_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(_,l,s)=>{"use strict";var r;s.d(l,{L:()=>a,j:()=>t});var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=function(i){return i()},o=(r||(r=s.t(e,2)))["useInsertionEffect"]?(r||(r=s.t(e,2)))["useInsertionEffect"]:!1,a=o||c,t=o||e.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(_,l,s)=>{"use strict";s.d(l,{NF:()=>c,Zo:()=>t,ah:()=>o,pC:()=>e});var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const e=r.createContext({});function c(d){return i;function i(m){const u=o(m.components);return r.createElement(d,{...m,allComponents:u})}}function o(d){const i=r.useContext(e);return r.useMemo(()=>typeof d=="function"?d(i):{...i,...d},[i,d])}const a={};function t({components:d,children:i,disableParentContext:m}){let u;return m?u=typeof d=="function"?d({}):d||a:u=o(d),r.createElement(e.Provider,{value:u},i)}},"../components/components/dialog/stories/js-components.components.dialog.mdx":(_,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>i});var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=s("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),o=s("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=s("../../../node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js"),t=s("../components/components/dialog/stories/js-components.components.dialog.stories.js");function d(m={}){const{wrapper:u}=Object.assign({},(0,c.ah)(),m.components);return u?(0,e.jsx)(u,Object.assign({},m,{children:(0,e.jsx)(p,{})})):p();function p(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.ah)(),m.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h_,{of:t}),`
`,(0,e.jsx)(n.h1,{id:"dialog",children:"Dialog"}),`
`,(0,e.jsxs)(n.p,{children:["Render a two-sections layout simple composition, built based on the primary ",(0,e.jsx)("a",{href:"?path=/docs/js-packages-components-layout--default",children:"Layout component"}),"."]}),`
`,(0,e.jsx)(o.Hw,{language:"jsx",code:a.C`
  import Dialog from '@automattic/jetpack-components';
  // ...

  <Dialog
    primary={ <PrimaryComponent /> }
    secondary={ <SecondaryComponent /> }
    isTwoSections={ true }
  />
  `}),`
`,(0,e.jsx)(o.oG,{of:t.Readme}),`
`,(0,e.jsx)(n.p,{children:"The cols number for each section depends on the viewport width. The following table shows how they are defined:"}),`
`,(0,e.jsx)(n.p,{children:`\xA0 | Small (sm) | Medium (md) | Large (lg)
------|------|------|-----
primary | 4 | 5 | 7
secondary | 4 | 3 | 5`}),`
`,(0,e.jsxs)(n.p,{children:["Finally, when the Dialog is defined as not a two-sections layout (",(0,e.jsx)("a",{href:"#istwosections",children:"isTwoSections property"}),"), the secondary section won't show in Mobile (sm breakpoint)."]}),`
`,(0,e.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,e.jsx)(n.p,{children:"The components accepts the following properties:"}),`
`,(0,e.jsx)(n.h3,{id:"primary",children:"primary"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(n.h3,{id:"secondary",children:"secondary"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"React.ReactNode"}),", ",(0,e.jsx)(n.code,{children:"string"}),"."]}),`
`,(0,e.jsx)(n.li,{children:"Optional."}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Primary-section content."}),`
`,(0,e.jsx)(n.h3,{id:"istwosections",children:"isTwoSections"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"boolean"}),"."]}),`
`,(0,e.jsx)(n.li,{children:"Optional."}),`
`,(0,e.jsxs)(n.li,{children:["Default: ",(0,e.jsx)(n.code,{children:"false"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"It handles two sections layout:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Add card styles to the main wrapper when it is not a two-sections layout."}),`
`,(0,e.jsx)(n.li,{children:"When it's false, the secondary section won't show in Mobile."}),`
`]})]})}}const i=d},"../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(_,l,s)=>{"use strict";s.d(l,{Z:()=>c});var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(o){return o&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(o):null}function c(o){const a=(0,r.useMemo)(()=>{const t=e(o);return{subscribe(d){return t?(t.addEventListener("change",d),()=>{t.removeEventListener("change",d)}):()=>{}},getValue(){var d;return(d=t==null?void 0:t.matches)!==null&&d!==void 0?d:!1}}},[o]);return(0,r.useSyncExternalStore)(a.subscribe,a.getValue,()=>!1)}},"../components/components/dialog/stories/js-components.components.dialog.stories.js":(_,l,s)=>{var h,f,x;"use strict";s.r(l),s.d(l,{Readme:()=>j,__namedExportsOrder:()=>g,default:()=>n});var r=s("../components/components/dialog/index.tsx"),e=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(e),o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss"),a={};a.insert="head",a.singleton=!1;var t=c()(o.Z,a);const d=o.Z.locals||{};var i=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=`import Dialog from '../index';
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
`,u={Readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}};const p=v=>{let{isTwoSections:y}=v;return(0,i.jsx)(r.Z,{primary:(0,i.jsxs)("div",{className:d.section,children:[(0,i.jsx)("div",{children:"Primary"}),(0,i.jsx)("strong",{children:"4 | 5 | 7"})]}),secondary:(0,i.jsxs)("div",{className:d.section,children:[(0,i.jsx)("div",{children:"Secondary"}),(0,i.jsx)("strong",{children:"4 | 3 | 5"}),(0,i.jsxs)("div",{children:["isTwoSections: ",(0,i.jsx)("strong",{children:y?"yes":"no"})]})]}),isTwoSections:y})};p.displayName="Template";const n={parameters:{storySource:{source:`import Dialog from '../index';
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
};`,locationsMap:{readme:{startLoc:{col:22,line:19},endLoc:{col:1,line:25},startBody:{col:22,line:19},endBody:{col:1,line:25}}}}},title:"JS Packages/Components/Dialog",component:r.Z},j={render:p.bind({}),name:"Readme",args:{isTwoSections:!0}};j.parameters={...j.parameters,docs:{...(h=j.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Readme',
  args: {
    isTwoSections: true
  }
}`,...(x=(f=j.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const g=["Readme"]},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(_,l)=>{var s,r;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var e={}.hasOwnProperty;function c(){for(var o=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var d=typeof t;if(d==="string"||d==="number")o.push(t);else if(Array.isArray(t)){if(t.length){var i=c.apply(null,t);i&&o.push(i)}}else if(d==="object")if(t.toString===Object.prototype.toString)for(var m in t)e.call(t,m)&&t[m]&&o.push(m);else o.push(t.toString())}}return o.join(" ")}_.exports?(c.default=c,_.exports=c):(s=[],r=function(){return c}.apply(l,s),r!==void 0&&(_.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/dialog/stories/style.module.scss":(_,l,s)=>{"use strict";s.d(l,{Z:()=>t});var r=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=s.n(r),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=s.n(c),a=o()(e());a.push([_.id,".RTMIETP7fe2d9xWFfYKF{display:flex;padding:calc(var(--spacing-base)*6) 0;border:1px dotted var(--jp-green-60);box-sizing:border-box;align-items:center;color:var(--jp-white);flex-wrap:nowrap;flex-direction:column;justify-content:space-between;height:calc(var(--spacing-base)*20);flex-grow:2;background:repeating-linear-gradient(-45deg, var(--jp-green-50), var(--jp-green-50) 20px, var(--jp-green-60) 20px, var(--jp-green-60) 40px)}",""]),a.locals={section:"RTMIETP7fe2d9xWFfYKF"};const t=a}}]);})();
