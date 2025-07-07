"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7153],{"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx":(E,r,e)=>{e.r(r),e.d(r,{Default:()=>t,__namedExportsOrder:()=>_,default:()=>p});var a=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),c=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../ai-client/src/components/message/index.tsx"),l=e("../ai-client/src/components/ai-control/index.tsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),x=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { Button, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
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
`,A={Default:{startLoc:{col:24,line:80},endLoc:{col:1,line:91},startBody:{col:24,line:80},endBody:{col:1,line:91}}};const p={title:"JS Packages/AI Client/AI Control",component:l.wV,decorators:[o=>(0,n.jsx)("div",{style:{backgroundColor:"white"},children:(0,n.jsx)(o,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},message:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,n.jsx)(s.Yj,{}),"Error message":(0,n.jsx)(s.Kw,{onTryAgainClick:(0,a.XI)("onTryAgainClick"),onUpgradeClick:(0,a.XI)("onUpgradeClick")}),"Upgrade message":(0,n.jsx)(s.AK,{requestsRemaining:10,onUpgradeClick:(0,a.XI)("onUpgradeClick")})}},actions:{control:{type:"select"},options:["None","Accept button"],mapping:{None:null,"Accept button":(0,n.jsx)(c.Ay,{children:"Accept"})}},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,n.jsx)(u.A,{status:"error",isDismissible:!0,children:"Error message"})}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { Button, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:80},endLoc:{col:1,line:91},startBody:{col:24,line:80},endBody:{col:1,line:91}}}},controls:{exclude:/on[A-Z].*/}}},m=o=>{const[f,C]=(0,d.useState)(""),y=i=>{C(i),o?.onChange?.(i)};return(0,n.jsx)(l.wV,{...o,onChange:y,value:o?.value??f})},g={placeholder:"Placeholder",disabled:!1,isTransparent:!1,state:"init",onChange:(0,a.XI)("onChange"),message:null,banner:null,error:null,actions:null},t=m.bind({});t.args=g;const _=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...t.parameters?.docs?.source}}};try{aicontrol.displayName="aicontrol",aicontrol.__docgenInfo={description:"Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.",displayName:"aicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},isTransparent:{defaultValue:{value:"false"},description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"init"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},banner:{defaultValue:{value:"null"},description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"null"},description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},actions:{defaultValue:{value:"null"},description:"",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},message:{defaultValue:{value:"null"},description:"",name:"message",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},promptUserInputRef:{defaultValue:{value:"null"},description:"",name:"promptUserInputRef",required:!1,type:{name:"Ref<React.ForwardRefExoticComponent<any>>"}},wrapperRef:{defaultValue:{value:"null"},description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/stories/ai-control.stories.tsx#aicontrol"]={docgenInfo:aicontrol.__docgenInfo,name:"aicontrol",path:"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx#aicontrol"})}catch{}}}]);
