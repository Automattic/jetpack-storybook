"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6319],{"../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(j,t,o)=>{o.d(t,{AH:()=>v,i7:()=>_});var u=o("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=o("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),a=o("../../../node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),d=o("../../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=o("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=o.n(l),n=function(s,y){var r=arguments;if(y==null||!u.h.call(y,"css"))return c.createElement.apply(void 0,r);var h=r.length,e=new Array(h);e[0]=u.E,e[1]=(0,u.c)(s,y);for(var p=2;p<h;p++)e[p]=r[p];return c.createElement.apply(null,e)};(function(f){var s;s||(s=f.JSX||(f.JSX={}))})(n||(n={}));var g=null;function v(){for(var f=arguments.length,s=new Array(f),y=0;y<f;y++)s[y]=arguments[y];return(0,a.J)(s)}function _(){var f=v.apply(void 0,arguments),s="animation-"+f.name;return{name:s,styles:"@keyframes "+s+"{"+f.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var E=function f(s){for(var y=s.length,r=0,h="";r<y;r++){var e=s[r];if(e!=null){var p=void 0;switch(typeof e){case"boolean":break;case"object":{if(Array.isArray(e))p=f(e);else{p="";for(var b in e)e[b]&&b&&(p&&(p+=" "),p+=b)}break}default:p=e}p&&(h&&(h+=" "),h+=p)}}return h};function S(f,s,y){var r=[],h=getRegisteredStyles(f,r,y);return r.length<2?y:h+s(r)}var w=function(s){var y=s.cache,r=s.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var h=0;h<r.length;h++)insertStyles(y,r[h],!1)}),null},x=null},"../components/components/radio-control/stories/index.stories.tsx":(j,t,o)=>{o.r(t),o.d(t,{Default:()=>s,__namedExportsOrder:()=>y,default:()=>x});var u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js"),m=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=o.n(a),l=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/radio-control/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var n=d()(l.A,i);const g=l.A.locals||{};var v=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=({selected:r,className:h,disabled:e,help:p,label:b,hideLabelFromVision:C,options:O,onChange:A})=>(0,v.jsx)(c.A,{selected:r,className:(0,m.A)(g.radio,h),disabled:e,help:p,label:b,hideLabelFromVision:C,options:O,onChange:A});try{radiocontrol.displayName="radiocontrol",radiocontrol.__docgenInfo={description:"",displayName:"radiocontrol",props:{selected:{defaultValue:null,description:"The current value.",name:"selected",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the radio control is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the radio control.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label for the radio control.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:null,description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"A list of options to show.",name:"options",required:!0,type:{name:"{ label: string; value: string; }[]"}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/index.tsx#radiocontrol"]={docgenInfo:radiocontrol.__docgenInfo,name:"radiocontrol",path:"../components/components/radio-control/index.tsx#radiocontrol"})}catch{}var S=`import React, { useCallback, useState } from 'react';
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
`,w={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:65},startBody:{col:23,line:54},endBody:{col:1,line:65}}};const x={title:"JS Packages/Components/Radio Control",component:E,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
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
};`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:65},startBody:{col:23,line:54},endBody:{col:1,line:65}}}},layout:"centered"},argTypes:{disabled:{control:"boolean",defaultValue:!1,description:"Whether or not the radio control is currently disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},help:{control:"text",description:"Additional information to display below the radio control."},label:{control:"text",description:"The label for the radio control."},hideLabelFromVision:{control:"boolean",defaultValue:!1,description:"If true, the label will only be visible to screen readers.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},f=[{label:"One",value:"one"},{label:"Two",value:"two"}],s=r=>{const[h,e]=(0,u.useState)("one"),p=(0,u.useCallback)(b=>{e(b)},[]);return(0,v.jsx)(E,{...r,selected:h,options:f,onChange:p})},y=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState('one');
  const handleChange = useCallback(value => {
    setSelected(value);
  }, []);
  return <RadioControl {...args} selected={selected} options={options} onChange={handleChange} />;
}`,...s.parameters?.docs?.source}}};try{s.displayName="Default",s.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/stories/index.stories.tsx#Default"]={docgenInfo:s.__docgenInfo,name:"Default",path:"../components/components/radio-control/stories/index.stories.tsx#Default"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js":(j,t,o)=>{o.d(t,{A:()=>E});var u=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=o("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),l=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),i=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(S,w){return`${S}-${w}-option-description`}function g(S,w){return`${S}-${w}`}function v(S){return`${S}__help`}function _(S){const{label:w,className:x,selected:f,help:s,onChange:y,hideLabelFromVision:r,options:h=[],id:e,...p}=S,b=(0,c.A)(_,"inspector-radio-control",e),C=O=>y(O.target.value);return h?.length?(0,i.jsxs)("fieldset",{id:b,className:(0,u.A)(x,"components-radio-control"),"aria-describedby":s?v(b):void 0,children:[r?(0,i.jsx)(l.A,{as:"legend",children:w}):(0,i.jsx)(m.Ay.VisualLabel,{as:"legend",children:w}),(0,i.jsx)(a.A,{spacing:3,className:(0,u.A)("components-radio-control__group-wrapper",{"has-help":!!s}),children:h.map((O,A)=>(0,i.jsxs)("div",{className:"components-radio-control__option",children:[(0,i.jsx)("input",{id:g(b,A),className:"components-radio-control__input",type:"radio",name:b,value:O.value,onChange:C,checked:O.value===f,"aria-describedby":O.description?n(b,A):void 0,...p}),(0,i.jsx)("label",{className:"components-radio-control__label",htmlFor:g(b,A),children:O.label}),O.description?(0,i.jsx)(d.te,{__nextHasNoMarginBottom:!0,id:n(b,A),className:"components-radio-control__option-description",children:O.description}):null]},g(b,A)))}),!!s&&(0,i.jsx)(d.te,{__nextHasNoMarginBottom:!0,id:v(b),className:"components-base-control__help",children:s})]}):null}const E=_},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(j,t,o)=>{o.d(t,{l:()=>l});const u="#fff",c={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},m={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},a={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${u})`,background:`var(--wp-components-color-background, ${u})`,foreground:`var(--wp-components-color-foreground, ${c[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${u})`,gray:{900:`var(--wp-components-color-foreground, ${c[900]})`,800:`var(--wp-components-color-gray-800, ${c[800]})`,700:`var(--wp-components-color-gray-700, ${c[700]})`,600:`var(--wp-components-color-gray-600, ${c[600]})`,400:`var(--wp-components-color-gray-400, ${c[400]})`,300:`var(--wp-components-color-gray-300, ${c[300]})`,200:`var(--wp-components-color-gray-200, ${c[200]})`,100:`var(--wp-components-color-gray-100, ${c[100]})`}},d={background:a.background,backgroundDisabled:a.gray[100],border:a.gray[600],borderHover:a.gray[700],borderFocus:a.accent,borderDisabled:a.gray[400],textDisabled:a.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${a.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${a.background}, transparent 35%)`},l=Object.freeze({gray:c,white:u,alert:m,theme:a,ui:d});var i=null},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(j,t,o)=>{o.d(t,{x:()=>c});const u="4px";function c(m){if(typeof m>"u")return;if(!m)return"0";const a=typeof m=="number"?m:Number(m);return typeof window<"u"&&window.CSS?.supports?.("margin",m.toString())||Number.isNaN(a)?m.toString():`calc(${u} * ${m})`}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js":(j,t,o)=>{o.d(t,{A:()=>g});var u=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js");function d(v){const{expanded:_=!1,alignment:E="stretch",...S}=(0,m.A)(v,"VStack");return(0,a.A)({direction:"column",expanded:_,alignment:E,...S})}var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(v,_){const E=d(v);return(0,l.jsx)(c.A,{...E,ref:_})}const g=(0,u.KZ)(i,"VStack")},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(j,t,o)=>{o.d(t,{A:()=>n});var u=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const m={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var a=o("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l(g,v){const{style:_,...E}=(0,u.A)(g,"VisuallyHidden");return(0,d.jsx)(a.A,{ref:v,...E,style:{...m,..._||{}}})}const n=(0,c.KZ)(l,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(j,t,o)=>{o.d(t,{A:()=>d});var u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const c=new WeakMap;function m(l){const i=c.get(l)||0;return c.set(l,i+1),i}function a(l,i,n){return(0,u.useMemo)(()=>{if(n)return n;const g=m(l);return i?`${i}-${g}`:g},[l,n,i])}const d=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/radio-control/styles.module.scss":(j,t,o)=>{o.d(t,{A:()=>l});var u=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=o.n(u),m=o("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(m),d=a()(c());d.push([j.id,".WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:checked{background:var(--jp-green-40);border-color:var(--jp-green-40)}.WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:focus{border-color:var(--jp-green-50);box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}",""]),d.locals={radio:"WBOHA4eO4_q0oWOa41tw"};const l=d},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(j,t,o)=>{var u=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),c={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},m={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[u.ForwardRef]=a,l[u.Memo]=d;function i(x){return u.isMemo(x)?d:l[x.$$typeof]||c}var n=Object.defineProperty,g=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,_=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,S=Object.prototype;function w(x,f,s){if(typeof f!="string"){if(S){var y=E(f);y&&y!==S&&w(x,y,s)}var r=g(f);v&&(r=r.concat(v(f)));for(var h=i(x),e=i(f),p=0;p<r.length;++p){var b=r[p];if(!m[b]&&!(s&&s[b])&&!(e&&e[b])&&!(h&&h[b])){var C=_(f,b);try{n(x,b,C)}catch{}}}}return x}j.exports=w},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(j,t,o)=>{o.d(t,{A:()=>u});function u(c,m){var a=0,d,l;m=m||{};function i(){var n=d,g=arguments.length,v,_;e:for(;n;){if(n.args.length!==arguments.length){n=n.next;continue}for(_=0;_<g;_++)if(n.args[_]!==arguments[_]){n=n.next;continue e}return n!==d&&(n===l&&(l=n.prev),n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=d,n.prev=null,d.prev=n,d=n),n.val}for(v=new Array(g),_=0;_<g;_++)v[_]=arguments[_];return n={args:v,val:c.apply(null,v)},d?(d.prev=n,n.next=d):l=n,a===m.maxSize?(l=l.prev,l.next=null):a++,d=n,n.val}return i.clear=function(){d=null,l=null,a=0},i}},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(j,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,m=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,d=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,i=o?Symbol.for("react.context"):60110,n=o?Symbol.for("react.async_mode"):60111,g=o?Symbol.for("react.concurrent_mode"):60111,v=o?Symbol.for("react.forward_ref"):60112,_=o?Symbol.for("react.suspense"):60113,E=o?Symbol.for("react.suspense_list"):60120,S=o?Symbol.for("react.memo"):60115,w=o?Symbol.for("react.lazy"):60116,x=o?Symbol.for("react.block"):60121,f=o?Symbol.for("react.fundamental"):60117,s=o?Symbol.for("react.responder"):60118,y=o?Symbol.for("react.scope"):60119;function r(e){if(typeof e=="object"&&e!==null){var p=e.$$typeof;switch(p){case u:switch(e=e.type,e){case n:case g:case m:case d:case a:case _:return e;default:switch(e=e&&e.$$typeof,e){case i:case v:case w:case S:case l:return e;default:return p}}case c:return p}}}function h(e){return r(e)===g}t.AsyncMode=n,t.ConcurrentMode=g,t.ContextConsumer=i,t.ContextProvider=l,t.Element=u,t.ForwardRef=v,t.Fragment=m,t.Lazy=w,t.Memo=S,t.Portal=c,t.Profiler=d,t.StrictMode=a,t.Suspense=_,t.isAsyncMode=function(e){return h(e)||r(e)===n},t.isConcurrentMode=h,t.isContextConsumer=function(e){return r(e)===i},t.isContextProvider=function(e){return r(e)===l},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===u},t.isForwardRef=function(e){return r(e)===v},t.isFragment=function(e){return r(e)===m},t.isLazy=function(e){return r(e)===w},t.isMemo=function(e){return r(e)===S},t.isPortal=function(e){return r(e)===c},t.isProfiler=function(e){return r(e)===d},t.isStrictMode=function(e){return r(e)===a},t.isSuspense=function(e){return r(e)===_},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===m||e===g||e===d||e===a||e===_||e===E||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===S||e.$$typeof===l||e.$$typeof===i||e.$$typeof===v||e.$$typeof===f||e.$$typeof===s||e.$$typeof===y||e.$$typeof===x)},t.typeOf=r},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(j,t,o)=>{j.exports=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
