"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7153],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(c,t,e)=>{e.d(t,{XI:()=>E});var n=e("storybook/internal/preview-api"),s=e("storybook/internal/preview-errors"),i=e("@storybook/global"),o=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),w=Object.defineProperty,x=(d,l)=>{for(var r in l)w(d,r,{get:l[r],enumerable:!0})},v="actions",M="storybook/actions",I=null,j=`${M}/action-event`,T=null,R="$___storybook.isCyclic",p={depth:10,clearOnStoryChange:!0,limit:50},y=(d={})=>{Object.assign(p,d)},g=(d,l)=>{let r=Object.getPrototypeOf(d);return!r||l(r)?r:g(r,l)},O=d=>!!(typeof d=="object"&&d&&g(d,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof d.persist=="function"),P=d=>{if(O(d)){let l=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));l.persist();let r=Object.getOwnPropertyDescriptor(l,"view"),a=r?.value;return typeof a=="object"&&a?.constructor.name==="Window"&&Object.defineProperty(l,"view",{...r,value:Object.create(a.constructor.prototype)}),l}return d},D=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,o.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function E(d,l={}){let r={...p,...l},a=function(...m){if(l.implicit){let L=("__STORYBOOK_PREVIEW__"in i.global?i.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(A=>A.phase==="playing"||A.phase==="rendering");if(L){let A=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,f=new s.ImplicitActionsDuringRendering({phase:L.phase,name:d,deprecated:A});if(A)console.warn(f);else throw f}}let _=n.addons.getChannel(),u=D(),h=5,C=m.map(P),N=m.length>1?C:C[0],z={id:u,count:0,data:{name:d,args:N},options:{...r,maxDepth:h+(r.depth||3),allowFunction:r.allowFunction||!1}};_.emit(j,z)};return a.isAction=!0,a.implicit=l.implicit,a}var H=(...d)=>{let l=p,r=d;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(l={...p,...r.pop()});let a=r[0];(r.length!==1||typeof a=="string")&&(a={},r.forEach(_=>{a[_]=_}));let m={};return Object.keys(a).forEach(_=>{m[_]=E(a[_],l)}),m},b={};x(b,{argsEnhancers:()=>V,loaders:()=>S});var B=(d,l)=>typeof l[d]>"u"&&!(d in l),K=d=>{let{initialArgs:l,argTypes:r,id:a,parameters:{actions:m}}=d;if(!m||m.disable||!m.argTypesRegex||!r)return{};let _=new RegExp(m.argTypesRegex);return Object.entries(r).filter(([u])=>!!_.test(u)).reduce((u,[h,C])=>(B(h,l)&&(u[h]=E(h,{implicit:!0,id:a})),u),{})},W=d=>{let{initialArgs:l,argTypes:r,parameters:{actions:a}}=d;return a?.disable||!r?{}:Object.entries(r).filter(([m,_])=>!!_.action).reduce((m,[_,u])=>(B(_,l)&&(m[_]=E(typeof u.action=="string"?u.action:_)),m),{})},V=[W,K],U=!1,k=d=>{let{parameters:{actions:l}}=d;if(!l?.disable&&!U&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in i.global&&typeof i.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=i.global.__STORYBOOK_TEST_ON_MOCK_CALL__;r((a,m)=>{let _=a.getMockName();_!=="spy"&&(!/^next\/.*::/.test(_)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(u=>_.startsWith(u)))&&E(_)(m)}),U=!0}},S=[k],F=()=>definePreview(b)},"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx":(c,t,e)=>{e.r(t),e.d(t,{Default:()=>p,__namedExportsOrder:()=>y,default:()=>j});var n=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../ai-client/src/components/message/index.tsx"),x=e("../ai-client/src/components/ai-control/index.tsx"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),M=`/**
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
`,I={Default:{startLoc:{col:24,line:81},endLoc:{col:1,line:92},startBody:{col:24,line:81},endBody:{col:1,line:92}}};const j={title:"JS Packages/AI Client/AI Control",component:x.wV,decorators:[g=>(0,v.jsx)("div",{style:{backgroundColor:"white"},children:(0,v.jsx)(g,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},message:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,v.jsx)(w.Yj,{}),"Error message":(0,v.jsx)(w.Kw,{onTryAgainClick:(0,n.XI)("onTryAgainClick"),onUpgradeClick:(0,n.XI)("onUpgradeClick")}),"Upgrade message":(0,v.jsx)(w.AK,{requestsRemaining:10,onUpgradeClick:(0,n.XI)("onUpgradeClick")})}},actions:{control:{type:"select"},options:["None","Accept button"],mapping:{None:null,"Accept button":(0,v.jsx)(s.Ay,{children:"Accept"})}},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,v.jsx)(i.A,{status:"error",isDismissible:!0,children:"Error message"})}}},parameters:{storySource:{source:`/**
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
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:24,line:81},endLoc:{col:1,line:92},startBody:{col:24,line:81},endBody:{col:1,line:92}}}},controls:{exclude:/on[A-Z].*/}}},T=g=>{const[O,P]=(0,o.useState)(""),D=E=>{P(E),g?.onChange?.(E)};return(0,v.jsx)(x.wV,{...g,onChange:D,value:g?.value??O})},R={placeholder:"Placeholder",disabled:!1,isTransparent:!1,state:"init",onChange:(0,n.XI)("onChange"),message:null,banner:null,error:null,actions:null},p=T.bind({});p.args=R;const y=["Default"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/grid.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/group.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.wA,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock-outline.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM9.8 7c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v3H9.8V7zm6.7 11.5h-9v-7h9v7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock-small.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M15 11h-.2V9c0-1.5-1.2-2.8-2.8-2.8S9.2 7.5 9.2 9v2H9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm-1.8 0h-2.5V9c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/lock.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/pin-small.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.wA,{d:"M10.97 10.159a3.382 3.382 0 0 0-2.857.955l1.724 1.723-2.836 2.913L7 17h1.25l2.913-2.837 1.723 1.723a3.38 3.38 0 0 0 .606-.825c.33-.63.446-1.343.35-2.032L17 10.695 13.305 7l-2.334 3.159Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/row.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/stack.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-down.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/thumbs-up.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/trash.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/ungroup.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.wA,{d:"M18 4h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7zm-5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h1V9H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h-1.5v1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unlock.js":(c,t,e)=>{e.d(t,{A:()=>o});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,s.jsx)(n.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.wA,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8h1.5c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"})})}}]);
