"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(a,s,e)=>{e.d(s,{XI:()=>v});var n=e("storybook/internal/preview-api"),o=e("storybook/internal/preview-errors"),d=e("@storybook/global"),t=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),j="actions",w="storybook/actions",R=null,O=`${w}/action-event`,D=null,P="$___storybook.isCyclic",h={depth:10,clearOnStoryChange:!0,limit:50},p=(l={})=>{Object.assign(h,l)},x=(l,i)=>{let r=Object.getPrototypeOf(l);return!r||i(r)?r:x(r,i)},c=l=>!!(typeof l=="object"&&l&&x(l,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof l.persist=="function"),E=l=>{if(c(l)){let i=Object.create(l.constructor.prototype,Object.getOwnPropertyDescriptors(l));i.persist();let r=Object.getOwnPropertyDescriptor(i,"view"),_=r?.value;return typeof _=="object"&&_?.constructor.name==="Window"&&Object.defineProperty(i,"view",{...r,value:Object.create(_.constructor.prototype)}),i}return l},m=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,t.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function v(l,i={}){let r={...h,...i},_=function(...g){if(i.implicit){let M=("__STORYBOOK_PREVIEW__"in d.global?d.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(A=>A.phase==="playing"||A.phase==="rendering");if(M){let A=!window?.FEATURES?.disallowImplicitActionsInRenderV8,T=new o.ImplicitActionsDuringRendering({phase:M.phase,name:l,deprecated:A});if(A)console.warn(T);else throw T}}let u=n.addons.getChannel(),B=m(),L=5,U=g.map(E),b=g.length>1?U:U[0],y={id:B,count:0,data:{name:l,args:b},options:{...r,maxDepth:L+(r.depth||3),allowFunction:r.allowFunction||!1}};u.emit(O,y)};return _.isAction=!0,_.implicit=i.implicit,_}var C=(...l)=>{let i=h,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(i={...h,...r.pop()});let _=r[0];(r.length!==1||typeof _=="string")&&(_={},r.forEach(u=>{_[u]=u}));let g={};return Object.keys(_).forEach(u=>{g[u]=v(_[u],i)}),g}},"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx":(a,s,e)=>{e.r(s),e.d(s,{Default:()=>p,__namedExportsOrder:()=>x,default:()=>D});var n=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),o=e("storybook/internal/preview-api"),d=e.n(o),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../ai-client/src/components/ai-control/index.tsx"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),R=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
/**
 * Internal dependencies
 */
import { ExtensionAIControl } from '../index.js';

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
`,O={Default:{startLoc:{col:24,line:45},endLoc:{col:1,line:104},startBody:{col:24,line:45},endBody:{col:1,line:104}}};const D={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:j.FC,decorators:[c=>(0,w.jsx)("div",{style:{backgroundColor:"white"},children:(0,w.jsx)(c,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
/**
 * Internal dependencies
 */
import { ExtensionAIControl } from '../index.js';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:45},endLoc:{col:1,line:104},startBody:{col:24,line:45},endBody:{col:1,line:104}}}},controls:{exclude:/on[A-Z].*/}}},P=c=>{const[{value:E},m,v]=(0,o.useArgs)(),C=u=>{m({value:u}),c?.onChange?.(u)},l=()=>{m({state:"requesting",error:null,value:"",placeholder:E}),setTimeout(()=>{m({state:"suggesting"}),setTimeout(()=>{m({state:"done"})},3e3)},1e3),c?.onSend?.(E)},i=()=>{m({state:"done",error:null}),c?.onStop?.()},r=()=>{v(),c?.onClose?.(),v()},_=()=>{v(),c?.onUndo?.(),v()},g=()=>{c?.onUpgrade?.()};return(0,w.jsx)(j.FC,{...c,onChange:C,onSend:l,onStop:i,onClose:r,onUndo:_,onUpgrade:g,value:c?.value??E})},h={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,n.XI)("onChange"),onSend:(0,n.XI)("onSend"),onStop:(0,n.XI)("onStop"),onClose:(0,n.XI)("onClose"),onUndo:(0,n.XI)("onUndo"),onUpgrade:(0,n.XI)("onUpgrade")},p=P.bind({});p.args=h;const x=["Default"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/grid.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/group.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.wA,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock-outline.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM9.8 7c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v3H9.8V7zm6.7 11.5h-9v-7h9v7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock-small.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M15 11h-.2V9c0-1.5-1.2-2.8-2.8-2.8S9.2 7.5 9.2 9v2H9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm-1.8 0h-2.5V9c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/pin-small.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.wA,{d:"M10.97 10.159a3.382 3.382 0 0 0-2.857.955l1.724 1.723-2.836 2.913L7 17h1.25l2.913-2.837 1.723 1.723a3.38 3.38 0 0 0 .606-.825c.33-.63.446-1.343.35-2.032L17 10.695 13.305 7l-2.334 3.159Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/row.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/stack.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-down.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-up.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/trash.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/ungroup.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(n.wA,{d:"M18 4h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7zm-5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h1V9H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h-1.5v1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unlock.js":(a,s,e)=>{e.d(s,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8h1.5c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"})})}}]);
