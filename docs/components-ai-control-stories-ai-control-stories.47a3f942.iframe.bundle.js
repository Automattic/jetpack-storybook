(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7153],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(O,y,r)=>{"use strict";r.d(y,{XI:()=>j});var d=r("storybook/internal/preview-api"),h=r("storybook/internal/preview-errors"),E=r("@storybook/global"),x=r("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f=Object.defineProperty,U=(i,l)=>{for(var o in l)f(i,o,{get:l[o],enumerable:!0})},D="actions",X="storybook/actions",R=null,b=`${X}/action-event`,K=null,B="$___storybook.isCyclic",w={depth:10,clearOnStoryChange:!0,limit:50},S=(i={})=>{Object.assign(w,i)},M=(i,l)=>{let o=Object.getPrototypeOf(i);return!o||l(o)?o:M(o,l)},N=i=>!!(typeof i=="object"&&i&&M(i,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof i.persist=="function"),W=i=>{if(N(i)){let l=Object.create(i.constructor.prototype,Object.getOwnPropertyDescriptors(i));l.persist();let o=Object.getOwnPropertyDescriptor(l,"view"),g=o?.value;return typeof g=="object"&&g?.constructor.name==="Window"&&Object.defineProperty(l,"view",{...o,value:Object.create(g.constructor.prototype)}),l}return i},L=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,x.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function j(i,l={}){let o={...w,...l},g=function(...A){if(l.implicit){let a=("__STORYBOOK_PREVIEW__"in E.global?E.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(a){let u=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,k=new h.ImplicitActionsDuringRendering({phase:a.phase,name:i,deprecated:u});if(u)console.warn(k);else throw k}}let v=d.addons.getChannel(),T=L(),Y=5,n=A.map(W),c=A.length>1?n:n[0],p={id:T,count:0,data:{name:i,args:c},options:{...o,maxDepth:Y+(o.depth||3),allowFunction:o.allowFunction||!1}};v.emit(b,p)};return g.isAction=!0,g.implicit=l.implicit,g}var z=(...i)=>{let l=w,o=i;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(l={...w,...o.pop()});let g=o[0];(o.length!==1||typeof g=="string")&&(g={},o.forEach(v=>{g[v]=v}));let A={};return Object.keys(g).forEach(v=>{A[v]=j(g[v],l)}),A},V={};U(V,{argsEnhancers:()=>t,loaders:()=>I});var H=(i,l)=>typeof l[i]>"u"&&!(i in l),C=i=>{let{initialArgs:l,argTypes:o,id:g,parameters:{actions:A}}=i;if(!A||A.disable||!A.argTypesRegex||!o)return{};let v=new RegExp(A.argTypesRegex);return Object.entries(o).filter(([T])=>!!v.test(T)).reduce((T,[Y,n])=>(H(Y,l)&&(T[Y]=j(Y,{implicit:!0,id:g})),T),{})},e=i=>{let{initialArgs:l,argTypes:o,parameters:{actions:g}}=i;return g?.disable||!o?{}:Object.entries(o).filter(([A,v])=>!!v.action).reduce((A,[v,T])=>(H(v,l)&&(A[v]=j(typeof T.action=="string"?T.action:v)),A),{})},t=[e,C],s=!1,m=i=>{let{parameters:{actions:l}}=i;if(!l?.disable&&!s&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in E.global&&typeof E.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=E.global.__STORYBOOK_TEST_ON_MOCK_CALL__;o((g,A)=>{let v=g.getMockName();v!=="spy"&&(!/^next\/.*::/.test(v)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(T=>v.startsWith(T)))&&j(v)(A)}),s=!0}},I=[m],F=()=>definePreview(V)},"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx":(O,y,r)=>{"use strict";r.r(y),r.d(y,{Default:()=>w,__namedExportsOrder:()=>S,default:()=>b});var d=r("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),h=r("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),E=r("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),x=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=r("../ai-client/src/components/message/index.tsx"),U=r("../ai-client/src/components/ai-control/index.tsx"),D=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),X=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { Button, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.tsx';
import { AIControl } from '../index.tsx';

export default {
	title: 'JS Packages/AI Client/AI Control',
	component: AIControl,
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
		message: {
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
		actions: {
			control: {
				type: 'select',
			},
			options: [ 'None', 'Accept button' ],
			mapping: {
				None: null,
				'Accept button': <Button>Accept</Button>,
			},
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
	},
	parameters: {
		controls: {
			exclude: /on[A-Z].*/,
		},
	},
};

const DefaultTemplate = args => {
	const [ value, setValue ] = useState( '' );

	const handleChange = ( newValue: string ) => {
		setValue( newValue );
		args?.onChange?.( newValue );
	};

	return <AIControl { ...args } onChange={ handleChange } value={ args?.value ?? value } />;
};

const DefaultArgs = {
	placeholder: 'Placeholder',
	disabled: false,
	isTransparent: false,
	state: 'init',
	onChange: action( 'onChange' ),
	message: null,
	banner: null,
	error: null,
	actions: null,
};

export const Default = DefaultTemplate.bind( {} );
Default.args = DefaultArgs;
`,R={Default:{startLoc:{col:24,line:81},endLoc:{col:1,line:92},startBody:{col:24,line:81},endBody:{col:1,line:92}}};const b={title:"JS Packages/AI Client/AI Control",component:U.wV,decorators:[M=>(0,D.jsx)("div",{style:{backgroundColor:"white"},children:(0,D.jsx)(M,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},message:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,D.jsx)(f.Yj,{}),"Error message":(0,D.jsx)(f.Kw,{onTryAgainClick:(0,d.XI)("onTryAgainClick"),onUpgradeClick:(0,d.XI)("onUpgradeClick")}),"Upgrade message":(0,D.jsx)(f.AK,{requestsRemaining:10,onUpgradeClick:(0,d.XI)("onUpgradeClick")})}},actions:{control:{type:"select"},options:["None","Accept button"],mapping:{None:null,"Accept button":(0,D.jsx)(h.Ay,{children:"Accept"})}},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,D.jsx)(E.A,{status:"error",isDismissible:!0,children:"Error message"})}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { Button, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.tsx';
import { AIControl } from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/AI Client/AI Control',
  component: AIControl,
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
    message: {
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
    },
    actions: {
      control: {
        type: 'select'
      },
      options: ['None', 'Accept button'],
      mapping: {
        None: null,
        'Accept button': /*#__PURE__*/_jsx(Button, {
          children: "Accept"
        })
      }
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
    }
  },
  parameters: {
    controls: {
      exclude: /on[A-Z].*/
    }
  }
};
const DefaultTemplate = args => {
  const [value, setValue] = useState('');
  const handleChange = newValue => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return /*#__PURE__*/_jsx(AIControl, {
    ...args,
    onChange: handleChange,
    value: args?.value ?? value
  });
};
const DefaultArgs = {
  placeholder: 'Placeholder',
  disabled: false,
  isTransparent: false,
  state: 'init',
  onChange: action('onChange'),
  message: null,
  banner: null,
  error: null,
  actions: null
};
export const Default = DefaultTemplate.bind({});
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:81},endLoc:{col:1,line:92},startBody:{col:24,line:81},endBody:{col:1,line:92}}}},controls:{exclude:/on[A-Z].*/}}},K=M=>{const[N,W]=(0,x.useState)(""),L=j=>{W(j),M?.onChange?.(j)};return(0,D.jsx)(U.wV,{...M,onChange:L,value:M?.value??N})},B={placeholder:"Placeholder",disabled:!1,isTransparent:!1,state:"init",onChange:(0,d.XI)("onChange"),message:null,banner:null,error:null,actions:null},w=K.bind({});w.args=B;const S=["Default"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...w.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+compose@7.22.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js":(O,y,r)=>{"use strict";r.d(y,{A:()=>X});var d=r("../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js"),h=r.n(d),E=r("../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js"),x=r.n(E),f=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),U=r("../../../node_modules/.pnpm/@wordpress+keycodes@4.22.0/node_modules/@wordpress/keycodes/build-module/platform.js");function D(R,b,{bindGlobal:K=!1,eventName:B="keydown",isDisabled:w=!1,target:S}={}){const M=(0,f.useRef)(b);(0,f.useEffect)(()=>{M.current=b},[b]),(0,f.useEffect)(()=>{if(w)return;const N=new(h())(S&&S.current?S.current:document);return(Array.isArray(R)?R:[R]).forEach(L=>{const j=L.split("+"),z=new Set(j.filter(e=>e.length>1)),V=z.has("alt"),H=z.has("shift");if((0,U.H)()&&(z.size===1&&V||z.size===2&&V&&H))throw new Error(`Cannot bind ${L}. Alt and Shift+Alt modifiers are reserved for character input.`);N[K?"bindGlobal":"bind"](L,(...e)=>M.current(...e),B)}),()=>{N.reset()}},[R,K,B,S,w])}const X=D},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(O,y,r)=>{"use strict";r.d(y,{A:()=>x});var d=r("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),h=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=(0,h.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)(d.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js":(O,y,r)=>{"use strict";r.d(y,{A:()=>x});var d=r("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),h=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=(0,h.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)(d.wA,{d:"M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js":(O,y,r)=>{"use strict";r.d(y,{A:()=>x});var d=r("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),h=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=(0,h.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)(d.wA,{d:"M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"})})},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js":(O,y,r)=>{var d;(function(h,E,x){if(!h)return;for(var f={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},U={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},D={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},X={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},R,b=1;b<20;++b)f[111+b]="f"+b;for(b=0;b<=9;++b)f[b+96]=b.toString();function K(e,t,s){if(e.addEventListener){e.addEventListener(t,s,!1);return}e.attachEvent("on"+t,s)}function B(e){if(e.type=="keypress"){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return f[e.which]?f[e.which]:U[e.which]?U[e.which]:String.fromCharCode(e.which).toLowerCase()}function w(e,t){return e.sort().join(",")===t.sort().join(",")}function S(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}function M(e){if(e.preventDefault){e.preventDefault();return}e.returnValue=!1}function N(e){if(e.stopPropagation){e.stopPropagation();return}e.cancelBubble=!0}function W(e){return e=="shift"||e=="ctrl"||e=="alt"||e=="meta"}function L(){if(!R){R={};for(var e in f)e>95&&e<112||f.hasOwnProperty(e)&&(R[f[e]]=e)}return R}function j(e,t,s){return s||(s=L()[e]?"keydown":"keypress"),s=="keypress"&&t.length&&(s="keydown"),s}function z(e){return e==="+"?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function V(e,t){var s,m,I,F=[];for(s=z(e),I=0;I<s.length;++I)m=s[I],X[m]&&(m=X[m]),t&&t!="keypress"&&D[m]&&(m=D[m],F.push("shift")),W(m)&&F.push(m);return t=j(m,F,t),{key:m,modifiers:F,action:t}}function H(e,t){return e===null||e===E?!1:e===t?!0:H(e.parentNode,t)}function C(e){var t=this;if(e=e||E,!(t instanceof C))return new C(e);t.target=e,t._callbacks={},t._directMap={};var s={},m,I=!1,F=!1,i=!1;function l(n){n=n||{};var c=!1,p;for(p in s){if(n[p]){c=!0;continue}s[p]=0}c||(i=!1)}function o(n,c,p,a,u,k){var _,P,$=[],G=p.type;if(!t._callbacks[n])return[];for(G=="keyup"&&W(n)&&(c=[n]),_=0;_<t._callbacks[n].length;++_)if(P=t._callbacks[n][_],!(!a&&P.seq&&s[P.seq]!=P.level)&&G==P.action&&(G=="keypress"&&!p.metaKey&&!p.ctrlKey||w(c,P.modifiers))){var J=!a&&P.combo==u,Z=a&&P.seq==a&&P.level==k;(J||Z)&&t._callbacks[n].splice(_,1),$.push(P)}return $}function g(n,c,p,a){t.stopCallback(c,c.target||c.srcElement,p,a)||n(c,p)===!1&&(M(c),N(c))}t._handleKey=function(n,c,p){var a=o(n,c,p),u,k={},_=0,P=!1;for(u=0;u<a.length;++u)a[u].seq&&(_=Math.max(_,a[u].level));for(u=0;u<a.length;++u){if(a[u].seq){if(a[u].level!=_)continue;P=!0,k[a[u].seq]=1,g(a[u].callback,p,a[u].combo,a[u].seq);continue}P||g(a[u].callback,p,a[u].combo)}var $=p.type=="keypress"&&F;p.type==i&&!W(n)&&!$&&l(k),F=P&&p.type=="keydown"};function A(n){typeof n.which!="number"&&(n.which=n.keyCode);var c=B(n);if(c){if(n.type=="keyup"&&I===c){I=!1;return}t.handleKey(c,S(n),n)}}function v(){clearTimeout(m),m=setTimeout(l,1e3)}function T(n,c,p,a){s[n]=0;function u(G){return function(){i=G,++s[n],v()}}function k(G){g(p,G,n),a!=="keyup"&&(I=B(G)),setTimeout(l,10)}for(var _=0;_<c.length;++_){var P=_+1===c.length,$=P?k:u(a||V(c[_+1]).action);Y(c[_],$,a,n,_)}}function Y(n,c,p,a,u){t._directMap[n+":"+p]=c,n=n.replace(/\s+/g," ");var k=n.split(" "),_;if(k.length>1){T(n,k,c,p);return}_=V(n,p),t._callbacks[_.key]=t._callbacks[_.key]||[],o(_.key,_.modifiers,{type:_.action},a,n,u),t._callbacks[_.key][a?"unshift":"push"]({callback:c,modifiers:_.modifiers,action:_.action,seq:a,level:u,combo:n})}t._bindMultiple=function(n,c,p){for(var a=0;a<n.length;++a)Y(n[a],c,p)},K(e,"keypress",A),K(e,"keydown",A),K(e,"keyup",A)}C.prototype.bind=function(e,t,s){var m=this;return e=e instanceof Array?e:[e],m._bindMultiple.call(m,e,t,s),m},C.prototype.unbind=function(e,t){var s=this;return s.bind.call(s,e,function(){},t)},C.prototype.trigger=function(e,t){var s=this;return s._directMap[e+":"+t]&&s._directMap[e+":"+t]({},e),s},C.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},C.prototype.stopCallback=function(e,t){var s=this;if((" "+t.className+" ").indexOf(" mousetrap ")>-1||H(t,s.target))return!1;if("composedPath"in e&&typeof e.composedPath=="function"){var m=e.composedPath()[0];m!==e.target&&(t=m)}return t.tagName=="INPUT"||t.tagName=="SELECT"||t.tagName=="TEXTAREA"||t.isContentEditable},C.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},C.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(f[t]=e[t]);R=null},C.init=function(){var e=C(E);for(var t in e)t.charAt(0)!=="_"&&(C[t]=function(s){return function(){return e[s].apply(e,arguments)}}(t))},C.init(),h.Mousetrap=C,O.exports&&(O.exports=C),d=function(){return C}.call(y,r,y,O),d!==x&&(O.exports=d)})(typeof window<"u"?window:null,typeof window<"u"?document:null)},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js":()=>{(function(O){if(O){var y={},r=O.prototype.stopCallback;O.prototype.stopCallback=function(d,h,E,x){var f=this;return f.paused?!0:y[E]||y[x]?!1:r.call(f,d,h,E)},O.prototype.bindGlobal=function(d,h,E){var x=this;if(x.bind(d,h,E),d instanceof Array){for(var f=0;f<d.length;f++)y[d[f]]=!0;return}y[d]=!0},O.init()}})(typeof Mousetrap<"u"?Mousetrap:void 0)}}]);
