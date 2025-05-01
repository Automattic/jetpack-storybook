"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(x,l,n)=>{n.r(l),n.d(l,{Default:()=>s,__namedExportsOrder:()=>h,default:()=>m});var e=n("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),c=n("storybook/internal/preview-api"),v=n.n(c),g=n("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),k=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=n("../ai-client/src/components/message/index.tsx"),i=n("../ai-client/src/components/ai-control/index.tsx"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`/**
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
`,w={Default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}};const m={title:"JS Packages/AI Client/AI Control/Block AI Control",component:i.N0,decorators:[t=>(0,o.jsx)("div",{style:{backgroundColor:"white"},children:(0,o.jsx)(t,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,o.jsx)(g.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,o.jsx)(a.Yj,{}),"Error message":(0,o.jsx)(a.Kw,{onTryAgainClick:(0,e.XI)("onTryAgainClick"),onUpgradeClick:(0,e.XI)("onUpgradeClick")}),"Upgrade message":(0,o.jsx)(a.AK,{requestsRemaining:10,onUpgradeClick:(0,e.XI)("onUpgradeClick")})}}},parameters:{storySource:{source:`/**
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:69},endLoc:{col:1,line:124},startBody:{col:24,line:69},endBody:{col:1,line:124}}}},controls:{exclude:/on[A-Z].*/}}},A=t=>{const[{value:d},r,p]=(0,c.useArgs)(),C=u=>{r({value:u,showAccept:!1}),t?.onChange?.(u)},D=()=>{r({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{r({state:"suggesting"}),setTimeout(()=>{r({state:"done",showAccept:!0})},3e3)},1e3),t?.onSend?.(d)},f=()=>{r({state:"done",error:null,showAccept:!0}),t?.onStop?.()},E=()=>{p(),t?.onAccept?.()},S=()=>{p(),t?.onDiscard?.()};return(0,o.jsx)(i.N0,{...t,onChange:C,onSend:D,onStop:f,onAccept:E,onDiscard:S,value:t?.value??d})},_={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,e.XI)("onChange"),onSend:(0,e.XI)("onSend"),onStop:(0,e.XI)("onStop"),onAccept:(0,e.XI)("onAccept"),onDiscard:(0,e.XI)("onDiscard"),showRemove:!1,banner:null,error:null},s=A.bind({});s.args=_;const h=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...s.parameters?.docs?.source}}}}}]);
