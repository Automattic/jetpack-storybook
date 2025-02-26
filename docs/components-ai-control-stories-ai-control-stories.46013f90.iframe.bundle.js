"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7153],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(R,g,o)=>{o.d(g,{XI:()=>y});var c=o("storybook/internal/preview-api"),C=o("storybook/internal/preview-errors"),m=o("@storybook/global"),A=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_="actions",E="storybook/actions",r=null,D=`${E}/action-event`,P=null,O="$___storybook.isCyclic",d={depth:10,clearOnStoryChange:!0,limit:50},x=(n={})=>{Object.assign(d,n)},a=(n,e)=>{let t=Object.getPrototypeOf(n);return!t||e(t)?t:a(t,e)},h=n=>!!(typeof n=="object"&&n&&a(n,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof n.persist=="function"),l=n=>{if(h(n)){let e=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),s=t?.value;return typeof s=="object"&&s?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(s.constructor.prototype)}),e}return n},f=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,A.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(n,e={}){let t={...d,...e},s=function(...p){if(e.implicit){let b=("__STORYBOOK_PREVIEW__"in m.global?m.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(b){let u=!window?.FEATURES?.disallowImplicitActionsInRenderV8,I=new C.ImplicitActionsDuringRendering({phase:b.phase,name:n,deprecated:u});if(u)console.warn(I);else throw I}}let i=c.addons.getChannel(),U=f(),T=5,v=p.map(l),k=p.length>1?v:v[0],w={id:U,count:0,data:{name:n,args:k},options:{...t,maxDepth:T+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(D,w)};return s.isAction=!0,s.implicit=e.implicit,s}var j=(...n)=>{let e=d,t=n;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(e={...d,...t.pop()});let s=t[0];(t.length!==1||typeof s=="string")&&(s={},t.forEach(i=>{s[i]=i}));let p={};return Object.keys(s).forEach(i=>{p[i]=y(s[i],e)}),p}},"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx":(R,g,o)=>{o.r(g),o.d(g,{Default:()=>a,__namedExportsOrder:()=>h,default:()=>O});var c=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),C=o("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),A=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=o("../ai-client/src/components/message/index.tsx"),E=o("../ai-client/src/components/ai-control/index.tsx"),r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),D=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { Button, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.js';
import { AIControl } from '../index.js';

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
`,P={Default:{startLoc:{col:24,line:81},endLoc:{col:1,line:92},startBody:{col:24,line:81},endBody:{col:1,line:92}}};const O={title:"JS Packages/AI Client/AI Control",component:E.wV,decorators:[l=>(0,r.jsx)("div",{style:{backgroundColor:"white"},children:(0,r.jsx)(l,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},message:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,r.jsx)(_.Yj,{}),"Error message":(0,r.jsx)(_.Kw,{onTryAgainClick:(0,c.XI)("onTryAgainClick"),onUpgradeClick:(0,c.XI)("onUpgradeClick")}),"Upgrade message":(0,r.jsx)(_.AK,{requestsRemaining:10,onUpgradeClick:(0,c.XI)("onUpgradeClick")})}},actions:{control:{type:"select"},options:["None","Accept button"],mapping:{None:null,"Accept button":(0,r.jsx)(C.Ay,{children:"Accept"})}},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,r.jsx)(m.A,{status:"error",isDismissible:!0,children:"Error message"})}}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { Button, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
import React from 'react';
/**
 * Internal dependencies
 */
import { GuidelineMessage, ErrorMessage, UpgradeMessage } from '../../message/index.js';
import { AIControl } from '../index.js';
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:81},endLoc:{col:1,line:92},startBody:{col:24,line:81},endBody:{col:1,line:92}}}},controls:{exclude:/on[A-Z].*/}}},d=l=>{const[f,y]=(0,A.useState)(""),j=n=>{y(n),l?.onChange?.(n)};return(0,r.jsx)(E.wV,{...l,onChange:j,value:l?.value??f})},x={placeholder:"Placeholder",disabled:!1,isTransparent:!1,state:"init",onChange:(0,c.XI)("onChange"),message:null,banner:null,error:null,actions:null},a=d.bind({});a.args=x;const h=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...a.parameters?.docs?.source}}}}}]);
