(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(w,y,o)=>{"use strict";o.d(y,{XI:()=>j});var d=o("storybook/internal/preview-api"),m=o("storybook/internal/preview-errors"),E=o("@storybook/global"),S=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f=Object.defineProperty,K=(l,i)=>{for(var r in i)f(l,r,{get:i[r],enumerable:!0})},$="actions",H="storybook/actions",P=null,O=`${H}/action-event`,W=null,D="$___storybook.isCyclic",R={depth:10,clearOnStoryChange:!0,limit:50},b=(l={})=>{Object.assign(R,l)},I=(l,i)=>{let r=Object.getPrototypeOf(l);return!r||i(r)?r:I(r,i)},U=l=>!!(typeof l=="object"&&l&&I(l,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof l.persist=="function"),L=l=>{if(U(l)){let i=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));i.persist();let r=Object.getOwnPropertyDescriptor(i,"view"),h=r?.value;return typeof h=="object"&&h?.constructor.name==="Window"&&Object.defineProperty(i,"view",{...r,value:Object.create(h.constructor.prototype)}),i}return l},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,S.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function j(l,i={}){let r={...R,...i},h=function(...C){if(i.implicit){let a=("__STORYBOOK_PREVIEW__"in E.global?E.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(a){let c=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,M=new m.ImplicitActionsDuringRendering({phase:a.phase,name:l,deprecated:c});if(c)console.warn(M);else throw M}}let v=d.addons.getChannel(),T=F(),Y=5,t=C.map(L),u=C.length>1?t:t[0],p={id:T,count:0,data:{name:l,args:u},options:{...r,maxDepth:Y+(r.depth||3),allowFunction:r.allowFunction||!1}};v.emit(O,p)};return h.isAction=!0,h.implicit=i.implicit,h}var V=(...l)=>{let i=R,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(i={...R,...r.pop()});let h=r[0];(r.length!==1||typeof h=="string")&&(h={},r.forEach(v=>{h[v]=v}));let C={};return Object.keys(h).forEach(v=>{C[v]=j(h[v],i)}),C},k={};K(k,{argsEnhancers:()=>n,loaders:()=>B});var N=(l,i)=>typeof i[l]>"u"&&!(l in i),A=l=>{let{initialArgs:i,argTypes:r,id:h,parameters:{actions:C}}=l;if(!C||C.disable||!C.argTypesRegex||!r)return{};let v=new RegExp(C.argTypesRegex);return Object.entries(r).filter(([T])=>!!v.test(T)).reduce((T,[Y,t])=>(N(Y,i)&&(T[Y]=j(Y,{implicit:!0,id:h})),T),{})},e=l=>{let{initialArgs:i,argTypes:r,parameters:{actions:h}}=l;return h?.disable||!r?{}:Object.entries(r).filter(([C,v])=>!!v.action).reduce((C,[v,T])=>(N(v,i)&&(C[v]=j(typeof T.action=="string"?T.action:v)),C),{})},n=[e,A],s=!1,g=l=>{let{parameters:{actions:i}}=l;if(!i?.disable&&!s&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in E.global&&typeof E.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=E.global.__STORYBOOK_TEST_ON_MOCK_CALL__;r((h,C)=>{let v=h.getMockName();v!=="spy"&&(!/^next\/.*::/.test(v)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(T=>v.startsWith(T)))&&j(v)(C)}),s=!0}},B=[g],X=()=>definePreview(k)},"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx":(w,y,o)=>{"use strict";o.r(y),o.d(y,{Default:()=>D,__namedExportsOrder:()=>R,default:()=>P});var d=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),m=o("storybook/internal/preview-api"),E=o.n(m),S=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=o("../ai-client/src/components/ai-control/index.tsx"),K=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),$=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
/**
 * Internal dependencies
 */
import { ExtensionAIControl } from '../index.tsx';

export default {
	title: 'JS Packages/AI Client/AI Control/Extension AI Control',
	component: ExtensionAIControl,
	decorators: [
		Story => (
			<div style={ { backgroundColor: 'white' } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		state: {
			control: {
				type: 'select',
			},
			options: [ 'init', 'requesting', 'suggesting', 'done', 'error' ],
		},
		error: {
			control: {
				type: 'text',
			},
		},
		requestsRemaining: {
			control: {
				type: 'number',
			},
		},
	},
	parameters: {
		controls: {
			exclude: /on[A-Z].*/,
		},
	},
};

const DefaultTemplate = args => {
	const [ { value }, updateArgs, resetArgs ] = useArgs();

	const handleChange = ( newValue: string ) => {
		updateArgs( { value: newValue } );
		args?.onChange?.( newValue );
	};

	const handleSend = () => {
		updateArgs( { state: 'requesting', error: null, value: '', placeholder: value } );

		setTimeout( () => {
			updateArgs( { state: 'suggesting' } );

			setTimeout( () => {
				updateArgs( { state: 'done' } );
			}, 3000 );
		}, 1000 );

		args?.onSend?.( value );
	};

	const handleStop = () => {
		updateArgs( { state: 'done', error: null } );
		args?.onStop?.();
	};

	const handleClose = () => {
		resetArgs();
		args?.onClose?.();
		resetArgs();
	};

	const handleUndo = () => {
		resetArgs();
		args?.onUndo?.();
		resetArgs();
	};

	const handleUpgrade = () => {
		args?.onUpgrade?.();
	};

	return (
		<ExtensionAIControl
			{ ...args }
			onChange={ handleChange }
			onSend={ handleSend }
			onStop={ handleStop }
			onClose={ handleClose }
			onUndo={ handleUndo }
			onUpgrade={ handleUpgrade }
			value={ args?.value ?? value }
		/>
	);
};

const DefaultArgs = {
	value: '',
	placeholder: 'Placeholder',
	showButtonLabels: true,
	disabled: false,
	isTransparent: false,
	state: 'init',
	showGuideLine: false,
	error: null,
	requestsRemaining: null,
	showUpgradeMessage: false,
	showFairUsageMessage: false,
	onChange: action( 'onChange' ),
	onSend: action( 'onSend' ),
	onStop: action( 'onStop' ),
	onClose: action( 'onClose' ),
	onUndo: action( 'onUndo' ),
	onUpgrade: action( 'onUpgrade' ),
};

export const Default = DefaultTemplate.bind( {} );
Default.args = DefaultArgs;
`,H={Default:{startLoc:{col:24,line:45},endLoc:{col:1,line:104},startBody:{col:24,line:45},endBody:{col:1,line:104}}};const P={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:f.FC,decorators:[b=>(0,K.jsx)("div",{style:{backgroundColor:"white"},children:(0,K.jsx)(b,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
/**
 * Internal dependencies
 */
import { ExtensionAIControl } from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/AI Client/AI Control/Extension AI Control',
  component: ExtensionAIControl,
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })],
  argTypes: {
    state: {
      control: {
        type: 'select'
      },
      options: ['init', 'requesting', 'suggesting', 'done', 'error']
    },
    error: {
      control: {
        type: 'text'
      }
    },
    requestsRemaining: {
      control: {
        type: 'number'
      }
    }
  },
  parameters: {
    controls: {
      exclude: /on[A-Z].*/
    }
  }
};
const DefaultTemplate = args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = newValue => {
    updateArgs({
      value: newValue
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      value: '',
      placeholder: value
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done'
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null
    });
    args?.onStop?.();
  };
  const handleClose = () => {
    resetArgs();
    args?.onClose?.();
    resetArgs();
  };
  const handleUndo = () => {
    resetArgs();
    args?.onUndo?.();
    resetArgs();
  };
  const handleUpgrade = () => {
    args?.onUpgrade?.();
  };
  return /*#__PURE__*/_jsx(ExtensionAIControl, {
    ...args,
    onChange: handleChange,
    onSend: handleSend,
    onStop: handleStop,
    onClose: handleClose,
    onUndo: handleUndo,
    onUpgrade: handleUpgrade,
    value: args?.value ?? value
  });
};
const DefaultArgs = {
  value: '',
  placeholder: 'Placeholder',
  showButtonLabels: true,
  disabled: false,
  isTransparent: false,
  state: 'init',
  showGuideLine: false,
  error: null,
  requestsRemaining: null,
  showUpgradeMessage: false,
  showFairUsageMessage: false,
  onChange: action('onChange'),
  onSend: action('onSend'),
  onStop: action('onStop'),
  onClose: action('onClose'),
  onUndo: action('onUndo'),
  onUpgrade: action('onUpgrade')
};
export const Default = DefaultTemplate.bind({});
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:45},endLoc:{col:1,line:104},startBody:{col:24,line:45},endBody:{col:1,line:104}}}},controls:{exclude:/on[A-Z].*/}}},O=b=>{const[{value:I},U,L]=(0,m.useArgs)(),F=e=>{U({value:e}),b?.onChange?.(e)},j=()=>{U({state:"requesting",error:null,value:"",placeholder:I}),setTimeout(()=>{U({state:"suggesting"}),setTimeout(()=>{U({state:"done"})},3e3)},1e3),b?.onSend?.(I)},V=()=>{U({state:"done",error:null}),b?.onStop?.()},k=()=>{L(),b?.onClose?.(),L()},N=()=>{L(),b?.onUndo?.(),L()},A=()=>{b?.onUpgrade?.()};return(0,K.jsx)(f.FC,{...b,onChange:F,onSend:j,onStop:V,onClose:k,onUndo:N,onUpgrade:A,value:b?.value??I})},W={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,d.XI)("onChange"),onSend:(0,d.XI)("onSend"),onStop:(0,d.XI)("onStop"),onClose:(0,d.XI)("onClose"),onUndo:(0,d.XI)("onUndo"),onUpgrade:(0,d.XI)("onUpgrade")},D=O.bind({});D.args=W;const R=["Default"];D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = (newValue: string) => {
    updateArgs({
      value: newValue
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      value: '',
      placeholder: value
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done'
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null
    });
    args?.onStop?.();
  };
  const handleClose = () => {
    resetArgs();
    args?.onClose?.();
    resetArgs();
  };
  const handleUndo = () => {
    resetArgs();
    args?.onUndo?.();
    resetArgs();
  };
  const handleUpgrade = () => {
    args?.onUpgrade?.();
  };
  return <ExtensionAIControl {...args} onChange={handleChange} onSend={handleSend} onStop={handleStop} onClose={handleClose} onUndo={handleUndo} onUpgrade={handleUpgrade} value={args?.value ?? value} />;
}`,...D.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+compose@7.22.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js":(w,y,o)=>{"use strict";o.d(y,{A:()=>H});var d=o("../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js"),m=o.n(d),E=o("../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js"),S=o.n(E),f=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),K=o("../../../node_modules/.pnpm/@wordpress+keycodes@4.22.0/node_modules/@wordpress/keycodes/build-module/platform.js");function $(P,O,{bindGlobal:W=!1,eventName:D="keydown",isDisabled:R=!1,target:b}={}){const I=(0,f.useRef)(O);(0,f.useEffect)(()=>{I.current=O},[O]),(0,f.useEffect)(()=>{if(R)return;const U=new(m())(b&&b.current?b.current:document);return(Array.isArray(P)?P:[P]).forEach(F=>{const j=F.split("+"),V=new Set(j.filter(e=>e.length>1)),k=V.has("alt"),N=V.has("shift");if((0,K.H)()&&(V.size===1&&k||V.size===2&&k&&N))throw new Error(`Cannot bind ${F}. Alt and Shift+Alt modifiers are reserved for character input.`);U[W?"bindGlobal":"bind"](F,(...e)=>I.current(...e),D)}),()=>{U.reset()}},[P,W,D,b,R])}const H=$},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(w,y,o)=>{"use strict";o.d(y,{A:()=>S});var d=o("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=(0,m.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,m.jsx)(d.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js":(w,y,o)=>{"use strict";o.d(y,{A:()=>S});var d=o("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=(0,m.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,m.jsx)(d.wA,{d:"M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js":(w,y,o)=>{"use strict";o.d(y,{A:()=>S});var d=o("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const S=(0,m.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,m.jsx)(d.wA,{d:"M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"})})},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js":(w,y,o)=>{var d;(function(m,E,S){if(!m)return;for(var f={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},K={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},$={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},H={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},P,O=1;O<20;++O)f[111+O]="f"+O;for(O=0;O<=9;++O)f[O+96]=O.toString();function W(e,n,s){if(e.addEventListener){e.addEventListener(n,s,!1);return}e.attachEvent("on"+n,s)}function D(e){if(e.type=="keypress"){var n=String.fromCharCode(e.which);return e.shiftKey||(n=n.toLowerCase()),n}return f[e.which]?f[e.which]:K[e.which]?K[e.which]:String.fromCharCode(e.which).toLowerCase()}function R(e,n){return e.sort().join(",")===n.sort().join(",")}function b(e){var n=[];return e.shiftKey&&n.push("shift"),e.altKey&&n.push("alt"),e.ctrlKey&&n.push("ctrl"),e.metaKey&&n.push("meta"),n}function I(e){if(e.preventDefault){e.preventDefault();return}e.returnValue=!1}function U(e){if(e.stopPropagation){e.stopPropagation();return}e.cancelBubble=!0}function L(e){return e=="shift"||e=="ctrl"||e=="alt"||e=="meta"}function F(){if(!P){P={};for(var e in f)e>95&&e<112||f.hasOwnProperty(e)&&(P[f[e]]=e)}return P}function j(e,n,s){return s||(s=F()[e]?"keydown":"keypress"),s=="keypress"&&n.length&&(s="keydown"),s}function V(e){return e==="+"?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function k(e,n){var s,g,B,X=[];for(s=V(e),B=0;B<s.length;++B)g=s[B],H[g]&&(g=H[g]),n&&n!="keypress"&&$[g]&&(g=$[g],X.push("shift")),L(g)&&X.push(g);return n=j(g,X,n),{key:g,modifiers:X,action:n}}function N(e,n){return e===null||e===E?!1:e===n?!0:N(e.parentNode,n)}function A(e){var n=this;if(e=e||E,!(n instanceof A))return new A(e);n.target=e,n._callbacks={},n._directMap={};var s={},g,B=!1,X=!1,l=!1;function i(t){t=t||{};var u=!1,p;for(p in s){if(t[p]){u=!0;continue}s[p]=0}u||(l=!1)}function r(t,u,p,a,c,M){var _,x,G=[],z=p.type;if(!n._callbacks[t])return[];for(z=="keyup"&&L(t)&&(u=[t]),_=0;_<n._callbacks[t].length;++_)if(x=n._callbacks[t][_],!(!a&&x.seq&&s[x.seq]!=x.level)&&z==x.action&&(z=="keypress"&&!p.metaKey&&!p.ctrlKey||R(u,x.modifiers))){var J=!a&&x.combo==c,Z=a&&x.seq==a&&x.level==M;(J||Z)&&n._callbacks[t].splice(_,1),G.push(x)}return G}function h(t,u,p,a){n.stopCallback(u,u.target||u.srcElement,p,a)||t(u,p)===!1&&(I(u),U(u))}n._handleKey=function(t,u,p){var a=r(t,u,p),c,M={},_=0,x=!1;for(c=0;c<a.length;++c)a[c].seq&&(_=Math.max(_,a[c].level));for(c=0;c<a.length;++c){if(a[c].seq){if(a[c].level!=_)continue;x=!0,M[a[c].seq]=1,h(a[c].callback,p,a[c].combo,a[c].seq);continue}x||h(a[c].callback,p,a[c].combo)}var G=p.type=="keypress"&&X;p.type==l&&!L(t)&&!G&&i(M),X=x&&p.type=="keydown"};function C(t){typeof t.which!="number"&&(t.which=t.keyCode);var u=D(t);if(u){if(t.type=="keyup"&&B===u){B=!1;return}n.handleKey(u,b(t),t)}}function v(){clearTimeout(g),g=setTimeout(i,1e3)}function T(t,u,p,a){s[t]=0;function c(z){return function(){l=z,++s[t],v()}}function M(z){h(p,z,t),a!=="keyup"&&(B=D(z)),setTimeout(i,10)}for(var _=0;_<u.length;++_){var x=_+1===u.length,G=x?M:c(a||k(u[_+1]).action);Y(u[_],G,a,t,_)}}function Y(t,u,p,a,c){n._directMap[t+":"+p]=u,t=t.replace(/\s+/g," ");var M=t.split(" "),_;if(M.length>1){T(t,M,u,p);return}_=k(t,p),n._callbacks[_.key]=n._callbacks[_.key]||[],r(_.key,_.modifiers,{type:_.action},a,t,c),n._callbacks[_.key][a?"unshift":"push"]({callback:u,modifiers:_.modifiers,action:_.action,seq:a,level:c,combo:t})}n._bindMultiple=function(t,u,p){for(var a=0;a<t.length;++a)Y(t[a],u,p)},W(e,"keypress",C),W(e,"keydown",C),W(e,"keyup",C)}A.prototype.bind=function(e,n,s){var g=this;return e=e instanceof Array?e:[e],g._bindMultiple.call(g,e,n,s),g},A.prototype.unbind=function(e,n){var s=this;return s.bind.call(s,e,function(){},n)},A.prototype.trigger=function(e,n){var s=this;return s._directMap[e+":"+n]&&s._directMap[e+":"+n]({},e),s},A.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},A.prototype.stopCallback=function(e,n){var s=this;if((" "+n.className+" ").indexOf(" mousetrap ")>-1||N(n,s.target))return!1;if("composedPath"in e&&typeof e.composedPath=="function"){var g=e.composedPath()[0];g!==e.target&&(n=g)}return n.tagName=="INPUT"||n.tagName=="SELECT"||n.tagName=="TEXTAREA"||n.isContentEditable},A.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},A.addKeycodes=function(e){for(var n in e)e.hasOwnProperty(n)&&(f[n]=e[n]);P=null},A.init=function(){var e=A(E);for(var n in e)n.charAt(0)!=="_"&&(A[n]=function(s){return function(){return e[s].apply(e,arguments)}}(n))},A.init(),m.Mousetrap=A,w.exports&&(w.exports=A),d=function(){return A}.call(y,o,y,w),d!==S&&(w.exports=d)})(typeof window<"u"?window:null,typeof window<"u"?document:null)},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js":()=>{(function(w){if(w){var y={},o=w.prototype.stopCallback;w.prototype.stopCallback=function(d,m,E,S){var f=this;return f.paused?!0:y[E]||y[S]?!1:o.call(f,d,m,E)},w.prototype.bindGlobal=function(d,m,E){var S=this;if(S.bind(d,m,E),d instanceof Array){for(var f=0;f<d.length;f++)y[d[f]]=!0;return}y[d]=!0},w.init()}})(typeof Mousetrap<"u"?Mousetrap:void 0)}}]);
