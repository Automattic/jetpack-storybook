"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(b,_,o)=>{o.d(_,{XI:()=>m});var a=o("storybook/internal/preview-api"),h=o("storybook/internal/preview-errors"),f=o("@storybook/global"),y=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),k="actions",g="storybook/actions",C=null,c=`${g}/action-event`,x=null,j="$___storybook.isCyclic",p={depth:10,clearOnStoryChange:!0,limit:50},S=(t={})=>{Object.assign(p,t)},E=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:E(n,e)},i=t=>!!(typeof t=="object"&&t&&E(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),v=t=>{if(i(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),s=n?.value;return typeof s=="object"&&s?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(s.constructor.prototype)}),e}return t},r=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,y.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function m(t,e={}){let n={...p,...e},s=function(...d){if(e.implicit){let w=("__STORYBOOK_PREVIEW__"in f.global?f.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(A=>A.phase==="playing"||A.phase==="rendering");if(w){let A=!window?.FEATURES?.disallowImplicitActionsInRenderV8,I=new h.ImplicitActionsDuringRendering({phase:w.phase,name:t,deprecated:A});if(A)console.warn(I);else throw I}}let l=a.addons.getChannel(),D=r(),R=5,O=d.map(v),T=d.length>1?O:O[0],P={id:D,count:0,data:{name:t,args:T},options:{...n,maxDepth:R+(n.depth||3),allowFunction:n.allowFunction||!1}};l.emit(c,P)};return s.isAction=!0,s.implicit=e.implicit,s}var u=(...t)=>{let e=p,n=t;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(e={...p,...n.pop()});let s=n[0];(n.length!==1||typeof s=="string")&&(s={},n.forEach(l=>{s[l]=l}));let d={};return Object.keys(s).forEach(l=>{d[l]=m(s[l],e)}),d}},"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(b,_,o)=>{o.r(_),o.d(_,{Default:()=>i,__namedExportsOrder:()=>v,default:()=>p});var a=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),h=o("storybook/internal/preview-api"),f=o.n(h),y=o("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),k=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=o("../ai-client/src/components/message/index.tsx"),C=o("../ai-client/src/components/ai-control/index.tsx"),c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`/**
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
`,j={Default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}};const p={title:"JS Packages/AI Client/AI Control/Block AI Control",component:C.N0,decorators:[r=>(0,c.jsx)("div",{style:{backgroundColor:"white"},children:(0,c.jsx)(r,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,c.jsx)(y.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,c.jsx)(g.Yj,{}),"Error message":(0,c.jsx)(g.Kw,{onTryAgainClick:(0,a.XI)("onTryAgainClick"),onUpgradeClick:(0,a.XI)("onUpgradeClick")}),"Upgrade message":(0,c.jsx)(g.AK,{requestsRemaining:10,onUpgradeClick:(0,a.XI)("onUpgradeClick")})}}},parameters:{storySource:{source:`/**
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}}},controls:{exclude:/on[A-Z].*/}}},S=r=>{const[{value:m},u,t]=(0,h.useArgs)(),e=D=>{u({value:D,showAccept:!1}),r?.onChange?.(D)},n=()=>{u({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{u({state:"suggesting"}),setTimeout(()=>{u({state:"done",showAccept:!0})},3e3)},1e3),r?.onSend?.(m)},s=()=>{u({state:"done",error:null,showAccept:!0}),r?.onStop?.()},d=()=>{t(),r?.onAccept?.()},l=()=>{t(),r?.onDiscard?.()};return(0,c.jsx)(C.N0,{...r,onChange:e,onSend:n,onStop:s,onAccept:d,onDiscard:l,value:r?.value??m})},E={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,a.XI)("onChange"),onSend:(0,a.XI)("onSend"),onStop:(0,a.XI)("onStop"),onAccept:(0,a.XI)("onAccept"),onDiscard:(0,a.XI)("onDiscard"),showRemove:!1,banner:null,error:null},i=S.bind({});i.args=E;const v=["Default"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
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
}`,...i.parameters?.docs?.source}}}}}]);
