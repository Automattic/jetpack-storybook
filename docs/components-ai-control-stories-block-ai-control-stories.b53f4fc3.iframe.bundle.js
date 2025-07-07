"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(v,l,n)=>{n.r(l),n.d(l,{Default:()=>s,__namedExportsOrder:()=>_,default:()=>m});var t=n("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),c=n("storybook/internal/preview-api"),D=n.n(c),g=n("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),r=n("../ai-client/src/components/message/index.tsx"),i=n("../ai-client/src/components/ai-control/index.tsx"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),k=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Notice } from '@wordpress/components';
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
`,b={Default:{startLoc:{col:24,line:68},endLoc:{col:1,line:123},startBody:{col:24,line:68},endBody:{col:1,line:123}}};const m={title:"JS Packages/AI Client/AI Control/Block AI Control",component:i.N0,decorators:[e=>(0,o.jsx)("div",{style:{backgroundColor:"white"},children:(0,o.jsx)(e,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,o.jsx)(g.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,o.jsx)(r.Yj,{}),"Error message":(0,o.jsx)(r.Kw,{onTryAgainClick:(0,t.XI)("onTryAgainClick"),onUpgradeClick:(0,t.XI)("onUpgradeClick")}),"Upgrade message":(0,o.jsx)(r.AK,{requestsRemaining:10,onUpgradeClick:(0,t.XI)("onUpgradeClick")})}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Notice } from '@wordpress/components';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:68},endLoc:{col:1,line:123},startBody:{col:24,line:68},endBody:{col:1,line:123}}}},controls:{exclude:/on[A-Z].*/}}},A=e=>{const[{value:d},a,u]=(0,c.useArgs)(),f=p=>{a({value:p,showAccept:!1}),e?.onChange?.(p)},C=()=>{a({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{a({state:"suggesting"}),setTimeout(()=>{a({state:"done",showAccept:!0})},3e3)},1e3),e?.onSend?.(d)},y=()=>{a({state:"done",error:null,showAccept:!0}),e?.onStop?.()},S=()=>{u(),e?.onAccept?.()},E=()=>{u(),e?.onDiscard?.()};return(0,o.jsx)(i.N0,{...e,onChange:f,onSend:C,onStop:y,onAccept:S,onDiscard:E,value:e?.value??d})},h={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,t.XI)("onChange"),onSend:(0,t.XI)("onSend"),onStop:(0,t.XI)("onStop"),onAccept:(0,t.XI)("onAccept"),onDiscard:(0,t.XI)("onDiscard"),showRemove:!1,banner:null,error:null},s=A.bind({});s.args=h;const _=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...s.parameters?.docs?.source}}};try{blockaicontrol.displayName="blockaicontrol",blockaicontrol.__docgenInfo={description:"",displayName:"blockaicontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showAccept:{defaultValue:null,description:"",name:"showAccept",required:!1,type:{name:"boolean"}},acceptLabel:{defaultValue:null,description:"",name:"acceptLabel",required:!1,type:{name:"string"}},showButtonLabels:{defaultValue:null,description:"",name:"showButtonLabels",required:!1,type:{name:"boolean"}},isTransparent:{defaultValue:null,description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},showGuideLine:{defaultValue:null,description:"",name:"showGuideLine",required:!1,type:{name:"boolean"}},customFooter:{defaultValue:null,description:"",name:"customFooter",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"(currentValue: string) => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!1,type:{name:"() => void"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!1,type:{name:"() => void"}},onDiscard:{defaultValue:null,description:"",name:"onDiscard",required:!1,type:{name:"() => void"}},showRemove:{defaultValue:null,description:"",name:"showRemove",required:!1,type:{name:"boolean"}},banner:{defaultValue:null,description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},lastAction:{defaultValue:null,description:"",name:"lastAction",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx#blockaicontrol"]={docgenInfo:blockaicontrol.__docgenInfo,name:"blockaicontrol",path:"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx#blockaicontrol"})}catch{}}}]);
