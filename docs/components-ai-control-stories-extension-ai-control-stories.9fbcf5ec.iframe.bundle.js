"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx":(U,d,e)=>{e.r(d),e.d(d,{Default:()=>o,__namedExportsOrder:()=>h,default:()=>g});var t=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),i=e("storybook/internal/preview-api"),S=e.n(i),u=e("../ai-client/src/components/ai-control/index.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
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
`,E={Default:{startLoc:{col:24,line:44},endLoc:{col:1,line:103},startBody:{col:24,line:44},endBody:{col:1,line:103}}};const g={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:u.FC,decorators:[n=>(0,r.jsx)("div",{style:{backgroundColor:"white"},children:(0,r.jsx)(n,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:44},endLoc:{col:1,line:103},startBody:{col:24,line:44},endBody:{col:1,line:103}}}},controls:{exclude:/on[A-Z].*/}}},c=n=>{const[{value:l},a,s]=(0,i.useArgs)(),f=p=>{a({value:p}),n?.onChange?.(p)},A=()=>{a({state:"requesting",error:null,value:"",placeholder:l}),setTimeout(()=>{a({state:"suggesting"}),setTimeout(()=>{a({state:"done"})},3e3)},1e3),n?.onSend?.(l)},C=()=>{a({state:"done",error:null}),n?.onStop?.()},_=()=>{s(),n?.onClose?.(),s()},y=()=>{s(),n?.onUndo?.(),s()},v=()=>{n?.onUpgrade?.()};return(0,r.jsx)(u.FC,{...n,onChange:f,onSend:A,onStop:C,onClose:_,onUndo:y,onUpgrade:v,value:n?.value??l})},m={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,t.XI)("onChange"),onSend:(0,t.XI)("onSend"),onStop:(0,t.XI)("onStop"),onClose:(0,t.XI)("onClose"),onUndo:(0,t.XI)("onUndo"),onUpgrade:(0,t.XI)("onUpgrade")},o=c.bind({});o.args=m;const h=["Default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};try{extensionaicontrol.displayName="extensionaicontrol",extensionaicontrol.__docgenInfo={description:"",displayName:"extensionaicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showButtonLabels:{defaultValue:null,description:"",name:"showButtonLabels",required:!1,type:{name:"boolean"}},isTransparent:{defaultValue:null,description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},showGuideLine:{defaultValue:null,description:"",name:"showGuideLine",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"RequestingErrorProps"}},requestsRemaining:{defaultValue:null,description:"",name:"requestsRemaining",required:!1,type:{name:"number"}},showUpgradeMessage:{defaultValue:null,description:"",name:"showUpgradeMessage",required:!1,type:{name:"boolean"}},showFairUsageMessage:{defaultValue:null,description:"",name:"showFairUsageMessage",required:!1,type:{name:"boolean"}},upgradeUrl:{defaultValue:null,description:"",name:"upgradeUrl",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"(currentValue: string) => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},onUndo:{defaultValue:null,description:"",name:"onUndo",required:!1,type:{name:"() => void"}},onUpgrade:{defaultValue:null,description:"",name:"onUpgrade",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},onTryAgain:{defaultValue:null,description:"",name:"onTryAgain",required:!1,type:{name:"() => void"}},lastAction:{defaultValue:null,description:"",name:"lastAction",required:!1,type:{name:"string"}},blockType:{defaultValue:null,description:"",name:"blockType",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx#extensionaicontrol"]={docgenInfo:extensionaicontrol.__docgenInfo,name:"extensionaicontrol",path:"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx#extensionaicontrol"})}catch{}}}]);
