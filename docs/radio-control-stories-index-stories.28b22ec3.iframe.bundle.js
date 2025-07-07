"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6319],{"../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(C,t,o)=>{o.d(t,{AH:()=>h,i7:()=>S});var d=o("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=o("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),a=o("../../../node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),y=o("../../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),u=o("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),l=o.n(u),v=function(r,p){var n=arguments;if(p==null||!d.h.call(p,"css"))return s.createElement.apply(void 0,n);var _=n.length,e=new Array(_);e[0]=d.E,e[1]=(0,d.c)(r,p);for(var i=2;i<_;i++)e[i]=n[i];return s.createElement.apply(null,e)};(function(m){var r;r||(r=m.JSX||(m.JSX={}))})(v||(v={}));var b=null;function h(){for(var m=arguments.length,r=new Array(m),p=0;p<m;p++)r[p]=arguments[p];return(0,a.J)(r)}function S(){var m=h.apply(void 0,arguments),r="animation-"+m.name;return{name:r,styles:"@keyframes "+r+"{"+m.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var E=function m(r){for(var p=r.length,n=0,_="";n<p;n++){var e=r[n];if(e!=null){var i=void 0;switch(typeof e){case"boolean":break;case"object":{if(Array.isArray(e))i=m(e);else{i="";for(var f in e)e[f]&&f&&(i&&(i+=" "),i+=f)}break}default:i=e}i&&(_&&(_+=" "),_+=i)}}return _};function g(m,r,p){var n=[],_=getRegisteredStyles(m,n,p);return n.length<2?p:_+r(n)}var w=function(r){var p=r.cache,n=r.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var _=0;_<n.length;_++)insertStyles(p,n[_],!1)}),null},j=null},"../components/components/radio-control/stories/index.stories.tsx":(C,t,o)=>{o.r(t),o.d(t,{Default:()=>r,__namedExportsOrder:()=>p,default:()=>j});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js"),c=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=o.n(a),u=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/radio-control/styles.module.scss"),l={};l.insert="head",l.singleton=!1;var v=y()(u.A,l);const b=u.A.locals||{};var h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=({selected:n,className:_,disabled:e,help:i,label:f,hideLabelFromVision:x,options:O,onChange:A})=>(0,h.jsx)(s.A,{selected:n,className:(0,c.A)(b.radio,_),disabled:e,help:i,label:f,hideLabelFromVision:x,options:O,onChange:A});try{radiocontrol.displayName="radiocontrol",radiocontrol.__docgenInfo={description:"",displayName:"radiocontrol",props:{selected:{defaultValue:null,description:"The current value.",name:"selected",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the radio control is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the radio control.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label for the radio control.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:null,description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"A list of options to show.",name:"options",required:!0,type:{name:"{ label: string; value: string; }[]"}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/index.tsx#radiocontrol"]={docgenInfo:radiocontrol.__docgenInfo,name:"radiocontrol",path:"../components/components/radio-control/index.tsx#radiocontrol"})}catch{}var g=`import { useCallback, useState } from 'react';
import RadioControl from '../index.tsx';

export default {
	title: 'JS Packages/Components/Radio Control',
	component: RadioControl,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		disabled: {
			control: 'boolean',
			defaultValue: false,
			description: 'Whether or not the radio control is currently disabled.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		help: {
			control: 'text',
			description: 'Additional information to display below the radio control.',
		},
		label: {
			control: 'text',
			description: 'The label for the radio control.',
		},
		hideLabelFromVision: {
			control: 'boolean',
			defaultValue: false,
			description: 'If true, the label will only be visible to screen readers.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
	},
};

const options = [
	{ label: 'One', value: 'one' },
	{ label: 'Two', value: 'two' },
];

export const Default = args => {
	const [ selected, setSelected ] = useState( 'one' );

	const handleChange = useCallback( value => {
		setSelected( value );
	}, [] );

	return (
		<RadioControl { ...args } selected={ selected } options={ options } onChange={ handleChange } />
	);
};
`,w={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:65},startBody:{col:23,line:54},endBody:{col:1,line:65}}};const j={title:"JS Packages/Components/Radio Control",component:E,parameters:{storySource:{source:`import { useCallback, useState } from 'react';
import RadioControl from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Radio Control',
  component: RadioControl,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether or not the radio control is currently disabled.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    help: {
      control: 'text',
      description: 'Additional information to display below the radio control.'
    },
    label: {
      control: 'text',
      description: 'The label for the radio control.'
    },
    hideLabelFromVision: {
      control: 'boolean',
      defaultValue: false,
      description: 'If true, the label will only be visible to screen readers.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    }
  }
};
const options = [{
  label: 'One',
  value: 'one'
}, {
  label: 'Two',
  value: 'two'
}];
export const Default = args => {
  const [selected, setSelected] = useState('one');
  const handleChange = useCallback(value => {
    setSelected(value);
  }, []);
  return /*#__PURE__*/_jsx(RadioControl, {
    ...args,
    selected: selected,
    options: options,
    onChange: handleChange
  });
};`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:65},startBody:{col:23,line:54},endBody:{col:1,line:65}}}},layout:"centered"},argTypes:{disabled:{control:"boolean",defaultValue:!1,description:"Whether or not the radio control is currently disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},help:{control:"text",description:"Additional information to display below the radio control."},label:{control:"text",description:"The label for the radio control."},hideLabelFromVision:{control:"boolean",defaultValue:!1,description:"If true, the label will only be visible to screen readers.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},m=[{label:"One",value:"one"},{label:"Two",value:"two"}],r=n=>{const[_,e]=(0,d.useState)("one"),i=(0,d.useCallback)(f=>{e(f)},[]);return(0,h.jsx)(E,{...n,selected:_,options:m,onChange:i})},p=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState('one');
  const handleChange = useCallback(value => {
    setSelected(value);
  }, []);
  return <RadioControl {...args} selected={selected} options={options} onChange={handleChange} />;
}`,...r.parameters?.docs?.source}}};try{RadioControl.displayName="RadioControl",RadioControl.__docgenInfo={description:"",displayName:"RadioControl",props:{selected:{defaultValue:null,description:"The current value.",name:"selected",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the radio control is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the radio control.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label for the radio control.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:null,description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"A list of options to show.",name:"options",required:!0,type:{name:"{ label: string; value: string; }[]"}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/stories/index.stories.tsx#RadioControl"]={docgenInfo:RadioControl.__docgenInfo,name:"RadioControl",path:"../components/components/radio-control/stories/index.stories.tsx#RadioControl"})}catch{}try{r.displayName="Default",r.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/stories/index.stories.tsx#Default"]={docgenInfo:r.__docgenInfo,name:"Default",path:"../components/components/radio-control/stories/index.stories.tsx#Default"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js":(C,t,o)=>{o.d(t,{A:()=>E});var d=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=o("../../../node_modules/.pnpm/@wordpress+compose@7.26.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),y=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),u=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v(g,w){return`${g}-${w}-option-description`}function b(g,w){return`${g}-${w}`}function h(g){return`${g}__help`}function S(g){const{label:w,className:j,selected:m,help:r,onChange:p,hideLabelFromVision:n,options:_=[],id:e,...i}=g,f=(0,s.A)(S,"inspector-radio-control",e),x=O=>p(O.target.value);return _?.length?(0,l.jsxs)("fieldset",{id:f,className:(0,d.A)(j,"components-radio-control"),"aria-describedby":r?h(f):void 0,children:[n?(0,l.jsx)(u.A,{as:"legend",children:w}):(0,l.jsx)(c.Ay.VisualLabel,{as:"legend",children:w}),(0,l.jsx)(a.A,{spacing:3,className:(0,d.A)("components-radio-control__group-wrapper",{"has-help":!!r}),children:_.map((O,A)=>(0,l.jsxs)("div",{className:"components-radio-control__option",children:[(0,l.jsx)("input",{id:b(f,A),className:"components-radio-control__input",type:"radio",name:f,value:O.value,onChange:x,checked:O.value===m,"aria-describedby":O.description?v(f,A):void 0,...i}),(0,l.jsx)("label",{className:"components-radio-control__label",htmlFor:b(f,A),children:O.label}),O.description?(0,l.jsx)(y.te,{__nextHasNoMarginBottom:!0,id:v(f,A),className:"components-radio-control__option-description",children:O.description}):null]},b(f,A)))}),!!r&&(0,l.jsx)(y.te,{__nextHasNoMarginBottom:!0,id:h(f),className:"components-base-control__help",children:r})]}):null}const E=S},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(C,t,o)=>{o.d(t,{l:()=>u});const d="#fff",s={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},c={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},a={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${d})`,background:`var(--wp-components-color-background, ${d})`,foreground:`var(--wp-components-color-foreground, ${s[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${d})`,gray:{900:`var(--wp-components-color-foreground, ${s[900]})`,800:`var(--wp-components-color-gray-800, ${s[800]})`,700:`var(--wp-components-color-gray-700, ${s[700]})`,600:`var(--wp-components-color-gray-600, ${s[600]})`,400:`var(--wp-components-color-gray-400, ${s[400]})`,300:`var(--wp-components-color-gray-300, ${s[300]})`,200:`var(--wp-components-color-gray-200, ${s[200]})`,100:`var(--wp-components-color-gray-100, ${s[100]})`}},y={background:a.background,backgroundDisabled:a.gray[100],border:a.gray[600],borderHover:a.gray[700],borderFocus:a.accent,borderDisabled:a.gray[400],textDisabled:a.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${a.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${a.background}, transparent 35%)`},u=Object.freeze({gray:s,white:d,alert:c,theme:a,ui:y});var l=null},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(C,t,o)=>{o.d(t,{x:()=>s});const d="4px";function s(c){if(typeof c>"u")return;if(!c)return"0";const a=typeof c=="number"?c:Number(c);return typeof window<"u"&&window.CSS?.supports?.("margin",c.toString())||Number.isNaN(a)?c.toString():`calc(${d} * ${c})`}},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js":(C,t,o)=>{o.d(t,{A:()=>b});var d=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js");function y(h){const{expanded:S=!1,alignment:E="stretch",...g}=(0,c.A)(h,"VStack");return(0,a.A)({direction:"column",expanded:S,alignment:E,...g})}var u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l(h,S){const E=y(h);return(0,u.jsx)(s.A,{...E,ref:S})}const b=(0,d.KZ)(l,"VStack")},"../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(C,t,o)=>{o.d(t,{A:()=>v});var d=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const c={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var a=o("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),y=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(b,h){const{style:S,...E}=(0,d.A)(b,"VisuallyHidden");return(0,y.jsx)(a.A,{ref:h,...E,style:{...c,...S||{}}})}const v=(0,s.KZ)(u,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.26.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(C,t,o)=>{o.d(t,{A:()=>y});var d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s=new WeakMap;function c(u){const l=s.get(u)||0;return s.set(u,l+1),l}function a(u,l,v){return(0,d.useMemo)(()=>{if(v)return v;const b=c(u);return l?`${l}-${b}`:b},[u,v,l])}const y=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/radio-control/styles.module.scss":(C,t,o)=>{o.d(t,{A:()=>u});var d=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=o.n(d),c=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(c),y=a()(s());y.push([C.id,".WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:checked{background:var(--jp-green-40);border-color:var(--jp-green-40)}.WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:focus{border-color:var(--jp-green-50);box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}",""]),y.locals={radio:"WBOHA4eO4_q0oWOa41tw"};const u=y},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(C,t,o)=>{var d=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[d.ForwardRef]=a,u[d.Memo]=y;function l(j){return d.isMemo(j)?y:u[j.$$typeof]||s}var v=Object.defineProperty,b=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,g=Object.prototype;function w(j,m,r){if(typeof m!="string"){if(g){var p=E(m);p&&p!==g&&w(j,p,r)}var n=b(m);h&&(n=n.concat(h(m)));for(var _=l(j),e=l(m),i=0;i<n.length;++i){var f=n[i];if(!c[f]&&!(r&&r[f])&&!(e&&e[f])&&!(_&&_[f])){var x=S(m,f);try{v(j,f,x)}catch{}}}}return j}C.exports=w},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(C,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,d=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,y=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,v=o?Symbol.for("react.async_mode"):60111,b=o?Symbol.for("react.concurrent_mode"):60111,h=o?Symbol.for("react.forward_ref"):60112,S=o?Symbol.for("react.suspense"):60113,E=o?Symbol.for("react.suspense_list"):60120,g=o?Symbol.for("react.memo"):60115,w=o?Symbol.for("react.lazy"):60116,j=o?Symbol.for("react.block"):60121,m=o?Symbol.for("react.fundamental"):60117,r=o?Symbol.for("react.responder"):60118,p=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var i=e.$$typeof;switch(i){case d:switch(e=e.type,e){case v:case b:case c:case y:case a:case S:return e;default:switch(e=e&&e.$$typeof,e){case l:case h:case w:case g:case u:return e;default:return i}}case s:return i}}}function _(e){return n(e)===b}t.AsyncMode=v,t.ConcurrentMode=b,t.ContextConsumer=l,t.ContextProvider=u,t.Element=d,t.ForwardRef=h,t.Fragment=c,t.Lazy=w,t.Memo=g,t.Portal=s,t.Profiler=y,t.StrictMode=a,t.Suspense=S,t.isAsyncMode=function(e){return _(e)||n(e)===v},t.isConcurrentMode=_,t.isContextConsumer=function(e){return n(e)===l},t.isContextProvider=function(e){return n(e)===u},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===d},t.isForwardRef=function(e){return n(e)===h},t.isFragment=function(e){return n(e)===c},t.isLazy=function(e){return n(e)===w},t.isMemo=function(e){return n(e)===g},t.isPortal=function(e){return n(e)===s},t.isProfiler=function(e){return n(e)===y},t.isStrictMode=function(e){return n(e)===a},t.isSuspense=function(e){return n(e)===S},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===c||e===b||e===y||e===a||e===S||e===E||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===h||e.$$typeof===m||e.$$typeof===r||e.$$typeof===p||e.$$typeof===j)},t.typeOf=n},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(C,t,o)=>{C.exports=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
