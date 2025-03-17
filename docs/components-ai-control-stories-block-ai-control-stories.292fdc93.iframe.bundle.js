"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(_,s,e)=>{e.d(s,{XI:()=>v});var n=e("storybook/internal/preview-api"),t=e("storybook/internal/preview-errors"),i=e("@storybook/global"),o=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),B=Object.defineProperty,w=(d,l)=>{for(var r in l)B(d,r,{get:l[r],enumerable:!0})},M="actions",g="storybook/actions",k=null,f=`${g}/action-event`,L=null,U="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},A=(d={})=>{Object.assign(E,d)},D=(d,l)=>{let r=Object.getPrototypeOf(d);return!r||l(r)?r:D(r,l)},u=d=>!!(typeof d=="object"&&d&&D(d,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof d.persist=="function"),O=d=>{if(u(d)){let l=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));l.persist();let r=Object.getOwnPropertyDescriptor(l,"view"),c=r?.value;return typeof c=="object"&&c?.constructor.name==="Window"&&Object.defineProperty(l,"view",{...r,value:Object.create(c.constructor.prototype)}),l}return d},h=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,o.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function v(d,l={}){let r={...E,...l},c=function(...p){if(l.implicit){let K=("__STORYBOOK_PREVIEW__"in i.global?i.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(j=>j.phase==="playing"||j.phase==="rendering");if(K){let j=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,W=new t.ImplicitActionsDuringRendering({phase:K.phase,name:d,deprecated:j});if(j)console.warn(W);else throw W}}let a=n.addons.getChannel(),m=h(),x=5,y=p.map(O),H=p.length>1?y:y[0],N={id:m,count:0,data:{name:d,args:H},options:{...r,maxDepth:x+(r.depth||3),allowFunction:r.allowFunction||!1}};a.emit(f,N)};return c.isAction=!0,c.implicit=l.implicit,c}var I=(...d)=>{let l=E,r=d;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(l={...E,...r.pop()});let c=r[0];(r.length!==1||typeof c=="string")&&(c={},r.forEach(a=>{c[a]=a}));let p={};return Object.keys(c).forEach(a=>{p[a]=v(c[a],l)}),p},P={};w(P,{argsEnhancers:()=>T,loaders:()=>z});var C=(d,l)=>typeof l[d]>"u"&&!(d in l),R=d=>{let{initialArgs:l,argTypes:r,id:c,parameters:{actions:p}}=d;if(!p||p.disable||!p.argTypesRegex||!r)return{};let a=new RegExp(p.argTypesRegex);return Object.entries(r).filter(([m])=>!!a.test(m)).reduce((m,[x,y])=>(C(x,l)&&(m[x]=v(x,{implicit:!0,id:c})),m),{})},b=d=>{let{initialArgs:l,argTypes:r,parameters:{actions:c}}=d;return c?.disable||!r?{}:Object.entries(r).filter(([p,a])=>!!a.action).reduce((p,[a,m])=>(C(a,l)&&(p[a]=v(typeof m.action=="string"?m.action:a)),p),{})},T=[b,R],S=!1,V=d=>{let{parameters:{actions:l}}=d;if(!l?.disable&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in i.global&&typeof i.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=i.global.__STORYBOOK_TEST_ON_MOCK_CALL__;r((c,p)=>{let a=c.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(m=>a.startsWith(m)))&&v(a)(p)}),S=!0}},z=[V],F=()=>definePreview(P)},"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(_,s,e)=>{e.r(s),e.d(s,{Default:()=>A,__namedExportsOrder:()=>D,default:()=>L});var n=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),t=e("storybook/internal/preview-api"),i=e.n(t),o=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),B=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../ai-client/src/components/message/index.tsx"),M=e("../ai-client/src/components/ai-control/index.tsx"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),k=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Notice } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.js';
import { BlockAIControl } from '../index.js';

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
`,f={Default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}};const L={title:"JS Packages/AI Client/AI Control/Block AI Control",component:M.N0,decorators:[u=>(0,g.jsx)("div",{style:{backgroundColor:"white"},children:(0,g.jsx)(u,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,g.jsx)(o.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,g.jsx)(w.Yj,{}),"Error message":(0,g.jsx)(w.Kw,{onTryAgainClick:(0,n.XI)("onTryAgainClick"),onUpgradeClick:(0,n.XI)("onUpgradeClick")}),"Upgrade message":(0,g.jsx)(w.AK,{requestsRemaining:10,onUpgradeClick:(0,n.XI)("onUpgradeClick")})}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Notice } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.js';
import { BlockAIControl } from '../index.js';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}}},controls:{exclude:/on[A-Z].*/}}},U=u=>{const[{value:O},h,v]=(0,t.useArgs)(),I=T=>{h({value:T,showAccept:!1}),u?.onChange?.(T)},P=()=>{h({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{h({state:"suggesting"}),setTimeout(()=>{h({state:"done",showAccept:!0})},3e3)},1e3),u?.onSend?.(O)},C=()=>{h({state:"done",error:null,showAccept:!0}),u?.onStop?.()},R=()=>{v(),u?.onAccept?.()},b=()=>{v(),u?.onDiscard?.()};return(0,g.jsx)(M.N0,{...u,onChange:I,onSend:P,onStop:C,onAccept:R,onDiscard:b,value:u?.value??O})},E={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,n.XI)("onChange"),onSend:(0,n.XI)("onSend"),onStop:(0,n.XI)("onStop"),onAccept:(0,n.XI)("onAccept"),onDiscard:(0,n.XI)("onDiscard"),showRemove:!1,banner:null,error:null},A=U.bind({});A.args=E;const D=["Default"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
}`,...A.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/grid.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/group.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(n.wA,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock-outline.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM9.8 7c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v3H9.8V7zm6.7 11.5h-9v-7h9v7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock-small.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(n.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M15 11h-.2V9c0-1.5-1.2-2.8-2.8-2.8S9.2 7.5 9.2 9v2H9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm-1.8 0h-2.5V9c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/pin-small.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(n.wA,{d:"M10.97 10.159a3.382 3.382 0 0 0-2.857.955l1.724 1.723-2.836 2.913L7 17h1.25l2.913-2.837 1.723 1.723a3.38 3.38 0 0 0 .606-.825c.33-.63.446-1.343.35-2.032L17 10.695 13.305 7l-2.334 3.159Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/row.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/stack.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-down.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-up.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/trash.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/ungroup.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(n.wA,{d:"M18 4h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7zm-5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h1V9H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h-1.5v1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unlock.js":(_,s,e)=>{e.d(s,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8h1.5c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"})})}}]);
