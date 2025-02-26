"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(b,m,s)=>{s.d(m,{XI:()=>c});var l=s("storybook/internal/preview-api"),_=s("storybook/internal/preview-errors"),f=s("@storybook/global"),y=s("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),v="actions",p="storybook/actions",R=null,E=`${p}/action-event`,S=null,U="$___storybook.isCyclic",u={depth:10,clearOnStoryChange:!0,limit:50},d=(e={})=>{Object.assign(u,e)},C=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:C(n,t)},r=e=>!!(typeof e=="object"&&e&&C(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),h=e=>{if(r(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=n?.value;return typeof o=="object"&&o?.constructor.name==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}return e},i=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,y.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function c(e,t={}){let n={...u,...t},o=function(...g){if(t.implicit){let x=("__STORYBOOK_PREVIEW__"in f.global?f.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(A=>A.phase==="playing"||A.phase==="rendering");if(x){let A=!window?.FEATURES?.disallowImplicitActionsInRenderV8,I=new _.ImplicitActionsDuringRendering({phase:x.phase,name:e,deprecated:A});if(A)console.warn(I);else throw I}}let a=l.addons.getChannel(),w=i(),T=5,D=g.map(h),P=g.length>1?D:D[0],j={id:w,count:0,data:{name:e,args:P},options:{...n,maxDepth:T+(n.depth||3),allowFunction:n.allowFunction||!1}};a.emit(E,j)};return o.isAction=!0,o.implicit=t.implicit,o}var O=(...e)=>{let t=u,n=e;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(t={...u,...n.pop()});let o=n[0];(n.length!==1||typeof o=="string")&&(o={},n.forEach(a=>{o[a]=a}));let g={};return Object.keys(o).forEach(a=>{g[a]=c(o[a],t)}),g}},"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx":(b,m,s)=>{s.r(m),s.d(m,{Default:()=>d,__namedExportsOrder:()=>C,default:()=>S});var l=s("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),_=s("storybook/internal/preview-api"),f=s.n(_),y=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=s("../ai-client/src/components/ai-control/index.tsx"),p=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),R=`/**
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
`,E={Default:{startLoc:{col:24,line:45},endLoc:{col:1,line:104},startBody:{col:24,line:45},endBody:{col:1,line:104}}};const S={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:v.FC,decorators:[r=>(0,p.jsx)("div",{style:{backgroundColor:"white"},children:(0,p.jsx)(r,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{storySource:{source:`/**
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:45},endLoc:{col:1,line:104},startBody:{col:24,line:45},endBody:{col:1,line:104}}}},controls:{exclude:/on[A-Z].*/}}},U=r=>{const[{value:h},i,c]=(0,_.useArgs)(),O=a=>{i({value:a}),r?.onChange?.(a)},e=()=>{i({state:"requesting",error:null,value:"",placeholder:h}),setTimeout(()=>{i({state:"suggesting"}),setTimeout(()=>{i({state:"done"})},3e3)},1e3),r?.onSend?.(h)},t=()=>{i({state:"done",error:null}),r?.onStop?.()},n=()=>{c(),r?.onClose?.(),c()},o=()=>{c(),r?.onUndo?.(),c()},g=()=>{r?.onUpgrade?.()};return(0,p.jsx)(v.FC,{...r,onChange:O,onSend:e,onStop:t,onClose:n,onUndo:o,onUpgrade:g,value:r?.value??h})},u={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,l.XI)("onChange"),onSend:(0,l.XI)("onSend"),onStop:(0,l.XI)("onStop"),onClose:(0,l.XI)("onClose"),onUndo:(0,l.XI)("onUndo"),onUpgrade:(0,l.XI)("onUpgrade")},d=U.bind({});d.args=u;const C=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}}}}]);
