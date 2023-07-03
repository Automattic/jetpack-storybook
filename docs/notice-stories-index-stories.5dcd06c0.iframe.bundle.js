"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(w,m,e)=>{var n,s,h,b,x,t,E,f,k,y,A,P;e.r(m),e.d(m,{__namedExportsOrder:()=>d,_default:()=>l,default:()=>j,error:()=>g,success:()=>_,warning:()=>r});var i=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),c=e("../components/components/button/index.tsx"),p=e("../components/components/notice/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import { ExternalLink } from '@wordpress/components';
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
`,v={_default:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},warning:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},success:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},error:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}}};const j={parameters:{storySource:{source:`import { ExternalLink } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},warning:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},success:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},error:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}}}}},title:"JS Packages/Components/Notice",component:p.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},u=O=>(0,o.jsx)(p.Z,{...O});u.displayName="Template";const l=u.bind({});l.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,o.jsx)(c.Z,{isPrimary:!0,children:"Install now"},"install"),(0,o.jsx)(i.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const r=u.bind({});r.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,o.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,o.jsx)(c.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,o.jsx)(i.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const _=u.bind({});_.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,o.jsx)(c.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const g=u.bind({});g.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,o.jsx)(i.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Notice {...args} />",...(h=(s=l.parameters)==null?void 0:s.docs)==null?void 0:h.source}}},r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Notice {...args} />",...(t=(x=r.parameters)==null?void 0:x.docs)==null?void 0:t.source}}},_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Notice {...args} />",...(k=(f=_.parameters)==null?void 0:f.docs)==null?void 0:k.source}}},g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Notice {...args} />",...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const d=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(w,m,e)=>{var g,d,n,s,h,b,x,t,E;e.r(m),e.d(m,{Default:()=>u,Dismissable:()=>l,Duration:()=>r,__namedExportsOrder:()=>_,default:()=>v});var i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../plugins/protect/src/js/components/notice/index.jsx"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=`import React from 'react';
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
`,a={Default:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},Dismissable:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},Duration:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}};const v={title:"Plugins/Protect/Notice",component:c.Z,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},dismissable:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},duration:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}}},layout:"centered"},decorators:[f=>(0,p.jsx)("div",{style:{width:250},children:(0,p.jsx)(f,{})})]},j=f=>(0,p.jsx)(c.Z,{...f});j.displayName="Template";const u=j.bind({});u.args={type:"success",message:"Code is poetry."};const l=j.bind({});l.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const r=j.bind({});r.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Notice {...args} />",...(n=(d=u.parameters)==null?void 0:d.docs)==null?void 0:n.source}}},l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Notice {...args} />",...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}},r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Notice {...args} />",...(E=(t=r.parameters)==null?void 0:t.docs)==null?void 0:E.source}}};const _=["Default","Dismissable","Duration"]},"../components/components/button/index.tsx":(w,m,e)=>{e.d(m,{Z:()=>h});var i=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/icon/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/external.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),v=e.n(a),j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(u),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),_={};_.insert="head",_.singleton=!1;var g=l()(r.Z,_);const d=r.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=(0,j.forwardRef)((b,x)=>{var D,T;const{children:t,variant:E="primary",size:f="normal",weight:k="bold",icon:y,iconSize:A,disabled:P,isDestructive:O,isLoading:L,isExternalLink:B,className:N,text:S,fullWidth:Z,...C}=b,M=v()(d.button,N,{[d.normal]:f==="normal",[d.small]:f==="small",[d.icon]:!!y,[d.loading]:L,[d.regular]:k==="regular",[d["full-width"]]:Z,[d["is-icon-button"]]:!!y&&!t});C.ref=x;const R=f==="normal"?20:16,I=B&&(0,n.jsx)(p.Z,{size:R,icon:o.Z,className:d["external-icon"]}),z=B?"_blank":void 0,X=(t==null?void 0:t[0])&&t[0]!==null&&((T=(D=t==null?void 0:t[0])==null?void 0:D.props)==null?void 0:T.className)!=="components-tooltip";return(0,n.jsxs)(i.ZP,{target:z,variant:E,className:v()(M,{"has-text":!!y&&X}),icon:B?void 0:y,iconSize:A,disabled:P,"aria-disabled":P,isDestructive:O,text:S,...C,children:[L&&(0,n.jsx)(c.ZP,{}),(0,n.jsx)("span",{children:t}),I]})});s.displayName="Button";const h=s;try{s.displayName="Button",s.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(b){}},"../components/components/notice/index.tsx":(w,m,e)=>{e.d(m,{Z:()=>x});var i=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/warning.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/info.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/check.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/close.js"),v=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=e.n(v),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(l),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),g={};g.insert="head",g.singleton=!1;var d=r()(_.Z,g);const n=_.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=t=>{switch(t){case"error":return i.Z;case"warning":return i.Z;case"info":return c.Z;case"success":return p.Z;default:return i.Z}},b=t=>{let{level:E,title:f,children:k,actions:y,hideCloseButton:A,onClose:P}=t;const O=j()(n.container,n[`is-${E}`]);return(0,s.jsxs)("div",{className:O,children:[(0,s.jsx)("div",{className:n["icon-wrapper"],children:(0,s.jsx)(o.Z,{icon:h(E),className:n.icon})}),(0,s.jsxs)("div",{className:n["main-content"],children:[(0,s.jsx)("div",{className:n.title,children:f}),k,y&&y.length>0&&(0,s.jsx)("div",{className:n["action-bar"],children:y.map((L,B)=>(0,s.jsx)("div",{className:n.action,children:L},B))})]}),!A&&(0,s.jsx)("button",{"aria-label":"close",className:n["close-button"],onClick:P,children:(0,s.jsx)(o.Z,{icon:a.Z})})]})};b.displayName="Notice",b.defaultProps={level:"info",hideCloseButton:!1};const x=b},"../../plugins/protect/src/js/components/notice/index.jsx":(w,m,e)=>{e.d(m,{Z:()=>t});var i=e("../../../node_modules/.pnpm/@wordpress+data@9.6.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@4.36.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/check.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/warning.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/info.js"),v=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/icon/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/close.js"),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../plugins/protect/src/js/state/store.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(r),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),d={};d.insert="head",d.singleton=!1;var n=_()(g.Z,d);const s=g.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=c.__,x=E=>{let{dismissable:f=!1,duration:k=null,floating:y=!1,message:A,type:P="success"}=E;const{clearNotice:O}=(0,i.Z)(l.t);let L;switch(P){case"success":L=p.Z;break;case"error":L=o.Z;break;case"info":default:L=a.Z}const B=(0,u.useCallback)(()=>{O()},[O]);return(0,u.useEffect)(()=>{let N;return k&&(N=setTimeout(O,k)),()=>clearTimeout(N)},[O,k,A]),(0,h.jsxs)("div",{className:`${s.notice} ${s[`notice--${P}`]} ${y?s["notice--floating"]:""}`,children:[(0,h.jsx)("div",{className:s.notice__icon,children:(0,h.jsx)(v.Z,{icon:L})}),(0,h.jsx)("div",{className:s.notice__message,children:A}),f&&(0,h.jsx)("button",{className:s.notice__close,"aria-label":b("Dismiss notice.","jetpack-protect"),onClick:B,children:(0,h.jsx)(v.Z,{icon:j.Z})})]})};x.displayName="Notice",x.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};const t=x},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(w,m,e)=>{e.d(m,{Z:()=>v});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),a=o()(c());a.push([w.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),a.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const v=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(w,m,e)=>{e.d(m,{Z:()=>v});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),a=o()(c());a.push([w.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:transparent;border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),a.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const v=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(w,m,e)=>{e.d(m,{Z:()=>v});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(i),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(p),a=o()(c());a.push([w.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:transparent;border:none}",""]),a.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const v=a}}]);})();
