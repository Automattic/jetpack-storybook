(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(w,E,o)=>{"use strict";o.d(E,{XI:()=>R});var i=o("storybook/internal/preview-api"),m=o("storybook/internal/preview-errors"),y=o("@storybook/global"),D=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),h=Object.defineProperty,L=(l,c)=>{for(var r in c)h(l,r,{get:c[r],enumerable:!0})},G="actions",P="storybook/actions",k=null,b=`${P}/action-event`,K=null,X="$___storybook.isCyclic",j={depth:10,clearOnStoryChange:!0,limit:50},S=(l={})=>{Object.assign(j,l)},W=(l,c)=>{let r=Object.getPrototypeOf(l);return!r||c(r)?r:W(r,c)},O=l=>!!(typeof l=="object"&&l&&W(l,c=>/^Synthetic(?:Base)?Event$/.test(c.constructor.name))&&typeof l.persist=="function"),N=l=>{if(O(l)){let c=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));c.persist();let r=Object.getOwnPropertyDescriptor(c,"view"),f=r?.value;return typeof f=="object"&&f?.constructor.name==="Window"&&Object.defineProperty(c,"view",{...r,value:Object.create(f.constructor.prototype)}),c}return l},T=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,D.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function R(l,c={}){let r={...j,...c},f=function(...C){if(c.implicit){let a=("__STORYBOOK_PREVIEW__"in y.global?y.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(a){let u=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,I=new m.ImplicitActionsDuringRendering({phase:a.phase,name:l,deprecated:u});if(u)console.warn(I);else throw I}}let A=i.addons.getChannel(),M=T(),z=5,t=C.map(N),d=C.length>1?t:t[0],p={id:M,count:0,data:{name:l,args:d},options:{...r,maxDepth:z+(r.depth||3),allowFunction:r.allowFunction||!1}};A.emit(b,p)};return f.isAction=!0,f.implicit=c.implicit,f}var F=(...l)=>{let c=j,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(c={...j,...r.pop()});let f=r[0];(r.length!==1||typeof f=="string")&&(f={},r.forEach(A=>{f[A]=A}));let C={};return Object.keys(f).forEach(A=>{C[A]=R(f[A],c)}),C},U={};L(U,{argsEnhancers:()=>n,loaders:()=>B});var V=(l,c)=>typeof c[l]>"u"&&!(l in c),v=l=>{let{initialArgs:c,argTypes:r,id:f,parameters:{actions:C}}=l;if(!C||C.disable||!C.argTypesRegex||!r)return{};let A=new RegExp(C.argTypesRegex);return Object.entries(r).filter(([M])=>!!A.test(M)).reduce((M,[z,t])=>(V(z,c)&&(M[z]=R(z,{implicit:!0,id:f})),M),{})},e=l=>{let{initialArgs:c,argTypes:r,parameters:{actions:f}}=l;return f?.disable||!r?{}:Object.entries(r).filter(([C,A])=>!!A.action).reduce((C,[A,M])=>(V(A,c)&&(C[A]=R(typeof M.action=="string"?M.action:A)),C),{})},n=[e,v],s=!1,g=l=>{let{parameters:{actions:c}}=l;if(!c?.disable&&!s&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in y.global&&typeof y.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=y.global.__STORYBOOK_TEST_ON_MOCK_CALL__;r((f,C)=>{let A=f.getMockName();A!=="spy"&&(!/^next\/.*::/.test(A)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(M=>A.startsWith(M)))&&R(A)(C)}),s=!0}},B=[g],Y=()=>definePreview(U)},"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(w,E,o)=>{"use strict";o.r(E),o.d(E,{Default:()=>S,__namedExportsOrder:()=>W,default:()=>K});var i=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),m=o("storybook/internal/preview-api"),y=o.n(m),D=o("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=o("../ai-client/src/components/message/index.tsx"),G=o("../ai-client/src/components/ai-control/index.tsx"),P=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),k=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Notice } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.tsx';
import { BlockAIControl } from '../index.tsx';

export default {
	title: 'JS Packages/AI Client/AI Control/Block AI Control',
	component: BlockAIControl,
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
				type: 'select',
			},
			options: [ 'None', 'Error notice' ],
			mapping: {
				None: null,
				'Error notice': (
					<Notice status="error" isDismissible={ true }>
						Error message
					</Notice>
				),
			},
		},
		customFooter: {
			control: {
				type: 'select',
			},
			options: [ 'None', 'Guideline message', 'Error message', 'Upgrade message' ],
			mapping: {
				None: null,
				'Guideline message': <GuidelineMessage />,
				'Error message': (
					<ErrorMessage
						onTryAgainClick={ action( 'onTryAgainClick' ) }
						onUpgradeClick={ action( 'onUpgradeClick' ) }
					/>
				),
				'Upgrade message': (
					<UpgradeMessage requestsRemaining={ 10 } onUpgradeClick={ action( 'onUpgradeClick' ) } />
				),
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
		updateArgs( { value: newValue, showAccept: false } );
		args?.onChange?.( newValue );
	};

	const handleSend = () => {
		updateArgs( { state: 'requesting', error: null, showAccept: false } );

		setTimeout( () => {
			updateArgs( { state: 'suggesting' } );

			setTimeout( () => {
				updateArgs( { state: 'done', showAccept: true } );
			}, 3000 );
		}, 1000 );

		args?.onSend?.( value );
	};

	const handleStop = () => {
		updateArgs( { state: 'done', error: null, showAccept: true } );
		args?.onStop?.();
	};

	const handleAccept = () => {
		resetArgs();
		args?.onAccept?.();
	};

	const handleDiscard = () => {
		resetArgs();
		args?.onDiscard?.();
	};

	return (
		<BlockAIControl
			{ ...args }
			onChange={ handleChange }
			onSend={ handleSend }
			onStop={ handleStop }
			onAccept={ handleAccept }
			onDiscard={ handleDiscard }
			value={ args?.value ?? value }
		/>
	);
};

const DefaultArgs = {
	value: '',
	placeholder: 'Placeholder',
	acceptLabel: 'Accept',
	showButtonLabels: true,
	disabled: false,
	isTransparent: false,
	state: 'init',
	showAccept: false,
	showGuideLine: true,
	customFooter: null,
	onChange: action( 'onChange' ),
	onSend: action( 'onSend' ),
	onStop: action( 'onStop' ),
	onAccept: action( 'onAccept' ),
	onDiscard: action( 'onDiscard' ),
	showRemove: false,
	banner: null,
	error: null,
};

export const Default = DefaultTemplate.bind( {} );
Default.args = DefaultArgs;
`,b={Default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}};const K={title:"JS Packages/AI Client/AI Control/Block AI Control",component:G.N0,decorators:[O=>(0,P.jsx)("div",{style:{backgroundColor:"white"},children:(0,P.jsx)(O,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,P.jsx)(D.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,P.jsx)(L.Yj,{}),"Error message":(0,P.jsx)(L.Kw,{onTryAgainClick:(0,i.XI)("onTryAgainClick"),onUpgradeClick:(0,i.XI)("onUpgradeClick")}),"Upgrade message":(0,P.jsx)(L.AK,{requestsRemaining:10,onUpgradeClick:(0,i.XI)("onUpgradeClick")})}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Notice } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.tsx';
import { BlockAIControl } from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/AI Client/AI Control/Block AI Control',
  component: BlockAIControl,
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
        type: 'select'
      },
      options: ['None', 'Error notice'],
      mapping: {
        None: null,
        'Error notice': /*#__PURE__*/_jsx(Notice, {
          status: "error",
          isDismissible: true,
          children: "Error message"
        })
      }
    },
    customFooter: {
      control: {
        type: 'select'
      },
      options: ['None', 'Guideline message', 'Error message', 'Upgrade message'],
      mapping: {
        None: null,
        'Guideline message': /*#__PURE__*/_jsx(GuidelineMessage, {}),
        'Error message': /*#__PURE__*/_jsx(ErrorMessage, {
          onTryAgainClick: action('onTryAgainClick'),
          onUpgradeClick: action('onUpgradeClick')
        }),
        'Upgrade message': /*#__PURE__*/_jsx(UpgradeMessage, {
          requestsRemaining: 10,
          onUpgradeClick: action('onUpgradeClick')
        })
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
      value: newValue,
      showAccept: false
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      showAccept: false
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done',
          showAccept: true
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null,
      showAccept: true
    });
    args?.onStop?.();
  };
  const handleAccept = () => {
    resetArgs();
    args?.onAccept?.();
  };
  const handleDiscard = () => {
    resetArgs();
    args?.onDiscard?.();
  };
  return /*#__PURE__*/_jsx(BlockAIControl, {
    ...args,
    onChange: handleChange,
    onSend: handleSend,
    onStop: handleStop,
    onAccept: handleAccept,
    onDiscard: handleDiscard,
    value: args?.value ?? value
  });
};
const DefaultArgs = {
  value: '',
  placeholder: 'Placeholder',
  acceptLabel: 'Accept',
  showButtonLabels: true,
  disabled: false,
  isTransparent: false,
  state: 'init',
  showAccept: false,
  showGuideLine: true,
  customFooter: null,
  onChange: action('onChange'),
  onSend: action('onSend'),
  onStop: action('onStop'),
  onAccept: action('onAccept'),
  onDiscard: action('onDiscard'),
  showRemove: false,
  banner: null,
  error: null
};
export const Default = DefaultTemplate.bind({});
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}}},controls:{exclude:/on[A-Z].*/}}},X=O=>{const[{value:N},T,R]=(0,m.useArgs)(),F=n=>{T({value:n,showAccept:!1}),O?.onChange?.(n)},U=()=>{T({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{T({state:"suggesting"}),setTimeout(()=>{T({state:"done",showAccept:!0})},3e3)},1e3),O?.onSend?.(N)},V=()=>{T({state:"done",error:null,showAccept:!0}),O?.onStop?.()},v=()=>{R(),O?.onAccept?.()},e=()=>{R(),O?.onDiscard?.()};return(0,P.jsx)(G.N0,{...O,onChange:F,onSend:U,onStop:V,onAccept:v,onDiscard:e,value:O?.value??N})},j={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,i.XI)("onChange"),onSend:(0,i.XI)("onSend"),onStop:(0,i.XI)("onStop"),onAccept:(0,i.XI)("onAccept"),onDiscard:(0,i.XI)("onDiscard"),showRemove:!1,banner:null,error:null},S=X.bind({});S.args=j;const W=["Default"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = (newValue: string) => {
    updateArgs({
      value: newValue,
      showAccept: false
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      showAccept: false
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done',
          showAccept: true
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null,
      showAccept: true
    });
    args?.onStop?.();
  };
  const handleAccept = () => {
    resetArgs();
    args?.onAccept?.();
  };
  const handleDiscard = () => {
    resetArgs();
    args?.onDiscard?.();
  };
  return <BlockAIControl {...args} onChange={handleChange} onSend={handleSend} onStop={handleStop} onAccept={handleAccept} onDiscard={handleDiscard} value={args?.value ?? value} />;
}`,...S.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+compose@7.22.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js":(w,E,o)=>{"use strict";o.d(E,{A:()=>P});var i=o("../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js"),m=o.n(i),y=o("../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js"),D=o.n(y),h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=o("../../../node_modules/.pnpm/@wordpress+keycodes@4.22.0/node_modules/@wordpress/keycodes/build-module/platform.js");function G(k,b,{bindGlobal:K=!1,eventName:X="keydown",isDisabled:j=!1,target:S}={}){const W=(0,h.useRef)(b);(0,h.useEffect)(()=>{W.current=b},[b]),(0,h.useEffect)(()=>{if(j)return;const O=new(m())(S&&S.current?S.current:document);return(Array.isArray(k)?k:[k]).forEach(T=>{const R=T.split("+"),F=new Set(R.filter(e=>e.length>1)),U=F.has("alt"),V=F.has("shift");if((0,L.H)()&&(F.size===1&&U||F.size===2&&U&&V))throw new Error(`Cannot bind ${T}. Alt and Shift+Alt modifiers are reserved for character input.`);O[K?"bindGlobal":"bind"](T,(...e)=>W.current(...e),X)}),()=>{O.reset()}},[k,K,X,S,j])}const P=G},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(w,E,o)=>{"use strict";o.d(E,{A:()=>D});var i=o("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=(0,m.jsx)(i.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,m.jsx)(i.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js":(w,E,o)=>{"use strict";o.d(E,{A:()=>D});var i=o("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=(0,m.jsx)(i.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,m.jsx)(i.wA,{d:"M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js":(w,E,o)=>{"use strict";o.d(E,{A:()=>D});var i=o("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=(0,m.jsx)(i.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,m.jsx)(i.wA,{d:"M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"})})},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js":(w,E,o)=>{var i;(function(m,y,D){if(!m)return;for(var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},L={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},G={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},P={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},k,b=1;b<20;++b)h[111+b]="f"+b;for(b=0;b<=9;++b)h[b+96]=b.toString();function K(e,n,s){if(e.addEventListener){e.addEventListener(n,s,!1);return}e.attachEvent("on"+n,s)}function X(e){if(e.type=="keypress"){var n=String.fromCharCode(e.which);return e.shiftKey||(n=n.toLowerCase()),n}return h[e.which]?h[e.which]:L[e.which]?L[e.which]:String.fromCharCode(e.which).toLowerCase()}function j(e,n){return e.sort().join(",")===n.sort().join(",")}function S(e){var n=[];return e.shiftKey&&n.push("shift"),e.altKey&&n.push("alt"),e.ctrlKey&&n.push("ctrl"),e.metaKey&&n.push("meta"),n}function W(e){if(e.preventDefault){e.preventDefault();return}e.returnValue=!1}function O(e){if(e.stopPropagation){e.stopPropagation();return}e.cancelBubble=!0}function N(e){return e=="shift"||e=="ctrl"||e=="alt"||e=="meta"}function T(){if(!k){k={};for(var e in h)e>95&&e<112||h.hasOwnProperty(e)&&(k[h[e]]=e)}return k}function R(e,n,s){return s||(s=T()[e]?"keydown":"keypress"),s=="keypress"&&n.length&&(s="keydown"),s}function F(e){return e==="+"?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function U(e,n){var s,g,B,Y=[];for(s=F(e),B=0;B<s.length;++B)g=s[B],P[g]&&(g=P[g]),n&&n!="keypress"&&G[g]&&(g=G[g],Y.push("shift")),N(g)&&Y.push(g);return n=R(g,Y,n),{key:g,modifiers:Y,action:n}}function V(e,n){return e===null||e===y?!1:e===n?!0:V(e.parentNode,n)}function v(e){var n=this;if(e=e||y,!(n instanceof v))return new v(e);n.target=e,n._callbacks={},n._directMap={};var s={},g,B=!1,Y=!1,l=!1;function c(t){t=t||{};var d=!1,p;for(p in s){if(t[p]){d=!0;continue}s[p]=0}d||(l=!1)}function r(t,d,p,a,u,I){var _,x,$=[],H=p.type;if(!n._callbacks[t])return[];for(H=="keyup"&&N(t)&&(d=[t]),_=0;_<n._callbacks[t].length;++_)if(x=n._callbacks[t][_],!(!a&&x.seq&&s[x.seq]!=x.level)&&H==x.action&&(H=="keypress"&&!p.metaKey&&!p.ctrlKey||j(d,x.modifiers))){var J=!a&&x.combo==u,Z=a&&x.seq==a&&x.level==I;(J||Z)&&n._callbacks[t].splice(_,1),$.push(x)}return $}function f(t,d,p,a){n.stopCallback(d,d.target||d.srcElement,p,a)||t(d,p)===!1&&(W(d),O(d))}n._handleKey=function(t,d,p){var a=r(t,d,p),u,I={},_=0,x=!1;for(u=0;u<a.length;++u)a[u].seq&&(_=Math.max(_,a[u].level));for(u=0;u<a.length;++u){if(a[u].seq){if(a[u].level!=_)continue;x=!0,I[a[u].seq]=1,f(a[u].callback,p,a[u].combo,a[u].seq);continue}x||f(a[u].callback,p,a[u].combo)}var $=p.type=="keypress"&&Y;p.type==l&&!N(t)&&!$&&c(I),Y=x&&p.type=="keydown"};function C(t){typeof t.which!="number"&&(t.which=t.keyCode);var d=X(t);if(d){if(t.type=="keyup"&&B===d){B=!1;return}n.handleKey(d,S(t),t)}}function A(){clearTimeout(g),g=setTimeout(c,1e3)}function M(t,d,p,a){s[t]=0;function u(H){return function(){l=H,++s[t],A()}}function I(H){f(p,H,t),a!=="keyup"&&(B=X(H)),setTimeout(c,10)}for(var _=0;_<d.length;++_){var x=_+1===d.length,$=x?I:u(a||U(d[_+1]).action);z(d[_],$,a,t,_)}}function z(t,d,p,a,u){n._directMap[t+":"+p]=d,t=t.replace(/\s+/g," ");var I=t.split(" "),_;if(I.length>1){M(t,I,d,p);return}_=U(t,p),n._callbacks[_.key]=n._callbacks[_.key]||[],r(_.key,_.modifiers,{type:_.action},a,t,u),n._callbacks[_.key][a?"unshift":"push"]({callback:d,modifiers:_.modifiers,action:_.action,seq:a,level:u,combo:t})}n._bindMultiple=function(t,d,p){for(var a=0;a<t.length;++a)z(t[a],d,p)},K(e,"keypress",C),K(e,"keydown",C),K(e,"keyup",C)}v.prototype.bind=function(e,n,s){var g=this;return e=e instanceof Array?e:[e],g._bindMultiple.call(g,e,n,s),g},v.prototype.unbind=function(e,n){var s=this;return s.bind.call(s,e,function(){},n)},v.prototype.trigger=function(e,n){var s=this;return s._directMap[e+":"+n]&&s._directMap[e+":"+n]({},e),s},v.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},v.prototype.stopCallback=function(e,n){var s=this;if((" "+n.className+" ").indexOf(" mousetrap ")>-1||V(n,s.target))return!1;if("composedPath"in e&&typeof e.composedPath=="function"){var g=e.composedPath()[0];g!==e.target&&(n=g)}return n.tagName=="INPUT"||n.tagName=="SELECT"||n.tagName=="TEXTAREA"||n.isContentEditable},v.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},v.addKeycodes=function(e){for(var n in e)e.hasOwnProperty(n)&&(h[n]=e[n]);k=null},v.init=function(){var e=v(y);for(var n in e)n.charAt(0)!=="_"&&(v[n]=function(s){return function(){return e[s].apply(e,arguments)}}(n))},v.init(),m.Mousetrap=v,w.exports&&(w.exports=v),i=function(){return v}.call(E,o,E,w),i!==D&&(w.exports=i)})(typeof window<"u"?window:null,typeof window<"u"?document:null)},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js":()=>{(function(w){if(w){var E={},o=w.prototype.stopCallback;w.prototype.stopCallback=function(i,m,y,D){var h=this;return h.paused?!0:E[y]||E[D]?!1:o.call(h,i,m,y)},w.prototype.bindGlobal=function(i,m,y){var D=this;if(D.bind(i,m,y),i instanceof Array){for(var h=0;h<i.length;h++)E[i[h]]=!0;return}E[i]=!0},w.init()}})(typeof Mousetrap<"u"?Mousetrap:void 0)}}]);
