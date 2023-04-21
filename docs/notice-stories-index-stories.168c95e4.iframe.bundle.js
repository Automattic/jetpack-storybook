"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(k,c,e)=>{var Z,M,C,I,R,z,V,X,T,D,G,J;e.r(c),e.d(c,{__namedExportsOrder:()=>B,_default:()=>b,default:()=>L,error:()=>x,success:()=>p,warning:()=>_});var u=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),l=e("../components/components/button/index.tsx"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/warning.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/info.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),v=e.n(m),h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(P),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),f={};f.insert="head",f.singleton=!1;var d=O()(n.Z,f);const o=n.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const j=S=>{switch(S){case"error":return r.Z;case"warning":return r.Z;case"info":return g.Z;case"success":return t.Z;default:return r.Z}},a=S=>{let{level:W,title:H,children:U,actions:K,hideCloseButton:Q,onClose:F}=S;const Y=v()(o.container,o[`is-${W}`]);return(0,s.jsxs)("div",{className:Y,children:[(0,s.jsx)("div",{className:o["icon-wrapper"],children:(0,s.jsx)(i.Z,{icon:j(W),className:o.icon})}),(0,s.jsxs)("div",{className:o["main-content"],children:[(0,s.jsx)("div",{className:o.title,children:H}),U,K&&K.length>0&&(0,s.jsx)("div",{className:o["action-bar"],children:K.map((q,$)=>(0,s.jsx)("div",{className:o.action,children:q},$))})]}),!Q&&(0,s.jsx)("button",{"aria-label":"close",className:o["close-button"],onClick:F,children:(0,s.jsx)(i.Z,{icon:y.Z})})]})};a.displayName="Notice",a.defaultProps={level:"info",hideCloseButton:!1};const A=a;var E=`import { ExternalLink } from '@wordpress/components';
import Button from '../../button';
import Notice from '../index';

export default {
	title: 'JS Packages/Components/Notice',
	component: Notice,
	argTypes: {
		level: {
			control: {
				type: 'select',
			},
			options: [ 'info', 'success', 'warning', 'error' ],
		},
		hideCloseButton: {
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = args => <Notice { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	level: 'info',
	title: 'Improve your hovercraft',
	children:
		'Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<Button key="install" isPrimary>
			Install now
		</Button>,
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};

export const warning = Template.bind( {} );
warning.args = {
	level: 'warning',
	title: 'Your hovercraft is full of eels.',
	children: (
		<div>
			Either your vehicle needs to be cleared, or some kind of translation error has occurred.
		</div>
	),
	actions: [
		<Button key="bail" isPrimary>
			Start Bailing
		</Button>,
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};

export const success = Template.bind( {} );
success.args = {
	level: 'success',
	title: 'Your hovercraft has been upgraded.',
	children: 'Please enjoy your newer, cooler hovercraft.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<Button key="start" isPrimary>
			Start crafting
		</Button>,
	],
	hideCloseButton: false,
};

export const error = Template.bind( {} );
error.args = {
	level: 'error',
	title: 'The eels have stolen your hovercraft.',
	children:
		'We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.',
	onClose: () => alert( 'Close clicked' ),
	actions: [
		<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Eel">
			Learn more
		</ExternalLink>,
	],
	hideCloseButton: false,
};
`,N={_default:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},warning:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},success:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},error:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}}};const L={parameters:{storySource:{source:`import { ExternalLink } from '@wordpress/components';
import Button from '../../button';
import Notice from '../index';
export default {
  title: 'JS Packages/Components/Notice',
  component: Notice,
  argTypes: {
    level: {
      control: {
        type: 'select'
      },
      options: ['info', 'success', 'warning', 'error']
    },
    hideCloseButton: {
      control: {
        type: 'boolean'
      }
    }
  }
};
const Template = args => <Notice {...args} />;
export const _default = Template.bind({});
_default.args = {
  level: 'info',
  title: 'Improve your hovercraft',
  children: 'Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.',
  onClose: () => alert('Close clicked'),
  actions: [<Button key="install" isPrimary>
            Install now
        </Button>, <ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
            Learn more
        </ExternalLink>],
  hideCloseButton: false
};
export const warning = Template.bind({});
warning.args = {
  level: 'warning',
  title: 'Your hovercraft is full of eels.',
  children: <div>
            Either your vehicle needs to be cleared, or some kind of translation error has occurred.
        </div>,
  actions: [<Button key="bail" isPrimary>
            Start Bailing
        </Button>, <ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Hovercraft">
            Learn more
        </ExternalLink>],
  hideCloseButton: false
};
export const success = Template.bind({});
success.args = {
  level: 'success',
  title: 'Your hovercraft has been upgraded.',
  children: 'Please enjoy your newer, cooler hovercraft.',
  onClose: () => alert('Close clicked'),
  actions: [<Button key="start" isPrimary>
            Start crafting
        </Button>],
  hideCloseButton: false
};
export const error = Template.bind({});
error.args = {
  level: 'error',
  title: 'The eels have stolen your hovercraft.',
  children: 'We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.',
  onClose: () => alert('Close clicked'),
  actions: [<ExternalLink key="learn-more" href="https://en.wikipedia.org/wiki/Eel">
            Learn more
        </ExternalLink>],
  hideCloseButton: false
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
warning.parameters = {
  ...warning.parameters,
  docs: {
    ...warning.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ...warning.parameters?.docs?.source
    }
  }
};
success.parameters = {
  ...success.parameters,
  docs: {
    ...success.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ...success.parameters?.docs?.source
    }
  }
};
error.parameters = {
  ...error.parameters,
  docs: {
    ...error.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ...error.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},warning:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},success:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},error:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}}}}},title:"JS Packages/Components/Notice",component:A,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},w=S=>(0,s.jsx)(A,{...S});w.displayName="Template";const b=w.bind({});b.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,s.jsx)(l.Z,{isPrimary:!0,children:"Install now"},"install"),(0,s.jsx)(u.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const _=w.bind({});_.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,s.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,s.jsx)(l.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,s.jsx)(u.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const p=w.bind({});p.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,s.jsx)(l.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const x=w.bind({});x.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,s.jsx)(u.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <Notice {...args} />",...(C=(M=b.parameters)==null?void 0:M.docs)==null?void 0:C.source}}},_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Notice {...args} />",...(z=(R=_.parameters)==null?void 0:R.docs)==null?void 0:z.source}}},p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Notice {...args} />",...(T=(X=p.parameters)==null?void 0:X.docs)==null?void 0:T.source}}},x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:"args => <Notice {...args} />",...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const B=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(k,c,e)=>{var O,n,f,d,o,s,j,a,A;e.r(c),e.d(c,{Default:()=>m,Dismissable:()=>v,Duration:()=>h,__namedExportsOrder:()=>P,default:()=>i});var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../plugins/protect/src/js/components/notice/index.jsx"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),g=`import React from 'react';
import Notice from '../index.jsx';

export default {
	title: 'Plugins/Protect/Notice',
	component: Notice,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 250 } }>
				<Story />
			</div>
		),
	],
};

const Template = args => <Notice { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
	type: 'success',
	message: 'Code is poetry.',
};

export const Dismissable = Template.bind( {} );
Dismissable.args = {
	type: 'success',
	dismissable: true,
	message: 'Dismiss this notice by clicking the close icon.',
};

export const Duration = Template.bind( {} );
Duration.args = {
	type: 'success',
	duration: 5000,
	message: 'This notice will self-destruct in five seconds.',
};
`,t={Default:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},Dismissable:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},Duration:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}};const i={title:"Plugins/Protect/Notice",component:l.Z,parameters:{storySource:{source:`import React from 'react';
import Notice from '../index.jsx';
export default {
  title: 'Plugins/Protect/Notice',
  component: Notice,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => <div style={{
    width: 250
  }}>
                <Story />
            </div>]
};
const Template = args => <Notice {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: 'success',
  message: 'Code is poetry.'
};
export const Dismissable = Template.bind({});
Dismissable.args = {
  type: 'success',
  dismissable: true,
  message: 'Dismiss this notice by clicking the close icon.'
};
export const Duration = Template.bind({});
Duration.args = {
  type: 'success',
  duration: 5000,
  message: 'This notice will self-destruct in five seconds.'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
Dismissable.parameters = {
  ...Dismissable.parameters,
  docs: {
    ...Dismissable.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ...Dismissable.parameters?.docs?.source
    }
  }
};
Duration.parameters = {
  ...Duration.parameters,
  docs: {
    ...Duration.parameters?.docs,
    source: {
      originalSource: "args => <Notice {...args} />",
      ...Duration.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},dismissable:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},duration:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}}},layout:"centered"},decorators:[E=>(0,r.jsx)("div",{style:{width:250},children:(0,r.jsx)(E,{})})]},y=E=>(0,r.jsx)(l.Z,{...E});y.displayName="Template";const m=y.bind({});m.args={type:"success",message:"Code is poetry."};const v=y.bind({});v.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const h=y.bind({});h.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Notice {...args} />",...(f=(n=m.parameters)==null?void 0:n.docs)==null?void 0:f.source}}},v.parameters={...v.parameters,docs:{...(d=v.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Notice {...args} />",...(s=(o=v.parameters)==null?void 0:o.docs)==null?void 0:s.source}}},h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Notice {...args} />",...(A=(a=h.parameters)==null?void 0:a.docs)==null?void 0:A.source}}};const P=["Default","Dismissable","Duration"]},"../components/components/button/index.tsx":(k,c,e)=>{e.d(c,{Z:()=>o});var u=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),i=e.n(t),y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(m),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),P={};P.insert="head",P.singleton=!1;var O=v()(h.Z,P);const n=h.Z.locals||{};var f=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=(0,y.forwardRef)((s,j)=>{var T,D;const{children:a,variant:A="primary",size:E="normal",weight:N="bold",icon:L,iconSize:w,disabled:b,isDestructive:_,isLoading:p,isExternalLink:x,className:B,text:Z,fullWidth:M,...C}=s,I=i()(n.button,B,{[n.normal]:E==="normal",[n.small]:E==="small",[n.icon]:!!L,[n.loading]:p,[n.regular]:N==="regular",[n["full-width"]]:M,[n["is-icon-button"]]:!!L&&!a});C.ref=j;const R=E==="normal"?20:16,z=x&&(0,f.jsx)(r.Z,{size:R,icon:g.Z,className:n["external-icon"]}),V=x?"_blank":void 0,X=(a==null?void 0:a[0])&&a[0]!==null&&((D=(T=a==null?void 0:a[0])==null?void 0:T.props)==null?void 0:D.className)!=="components-tooltip";return(0,f.jsxs)(u.ZP,{target:V,variant:A,className:i()(I,{"has-text":!!L&&X}),icon:x?void 0:L,iconSize:w,disabled:b,"aria-disabled":b,isDestructive:_,text:Z,...C,children:[p&&(0,f.jsx)(l.ZP,{}),(0,f.jsx)("span",{children:a}),z]})});d.displayName="Button";const o=d;try{d.displayName="Button",d.__docgenInfo={description:"Button component",displayName:"Button",props:{text:{defaultValue:null,description:`If provided, displays the given text inside the button. If the button
contains children elements, the text is displayed before them.`,name:"text",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"link"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"An optional additional class name to apply to the rendered button.",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}},isDestructive:{defaultValue:null,description:`Renders a red text-based button style to indicate destructive
behavior.`,name:"isDestructive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Renders a disabled button.",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:d.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(s){}},"../../plugins/protect/src/js/components/notice/index.jsx":(k,c,e)=>{e.d(c,{Z:()=>a});var u=e("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),l=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/warning.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/info.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("../../plugins/protect/src/js/state/store.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(h),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),n={};n.insert="head",n.singleton=!1;var f=P()(O.Z,n);const d=O.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=l.__,j=A=>{let{dismissable:E=!1,duration:N=null,floating:L=!1,message:w,type:b="success"}=A;const{clearNotice:_}=(0,u.Z)(v.t);let p;switch(b){case"success":p=r.Z;break;case"error":p=g.Z;break;case"info":default:p=t.Z}const x=(0,m.useCallback)(()=>{_()},[_]);return(0,m.useEffect)(()=>{let B;return N&&(B=setTimeout(_,N)),()=>clearTimeout(B)},[_,N,w]),(0,o.jsxs)("div",{className:`${d.notice} ${d[`notice--${b}`]} ${L?d["notice--floating"]:""}`,children:[(0,o.jsx)("div",{className:d.notice__icon,children:(0,o.jsx)(i.Z,{icon:p})}),(0,o.jsx)("div",{className:d.notice__message,children:w}),E&&(0,o.jsx)("button",{className:d.notice__close,"aria-label":s("Dismiss notice.","jetpack-protect"),onClick:x,children:(0,o.jsx)(i.Z,{icon:y.Z})})]})};j.displayName="Notice",j.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};const a=j},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(k,c,e)=>{e.d(c,{Z:()=>i});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(u),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(r),t=g()(l());t.push([k.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),t.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const i=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(k,c,e)=>{e.d(c,{Z:()=>i});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(u),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(r),t=g()(l());t.push([k.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:transparent;border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),t.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const i=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(k,c,e)=>{e.d(c,{Z:()=>i});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(u),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(r),t=g()(l());t.push([k.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:transparent;border:none}",""]),t.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const i=t}}]);})();
