"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(P,_,e)=>{e.d(_,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(c),n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),j=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const a=(0,j.Z)(m.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function g(o,s){const{href:i,children:f,className:x,rel:r="",...E}=o,b=[...new Set([...r.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),k=p()("components-external-link",x),y=!!(i!=null&&i.startsWith("#")),O=w=>{y&&w.preventDefault(),o.onClick&&o.onClick(w)};return(0,t.createElement)("a",{...E,className:k,href:i,onClick:O,target:"_blank",rel:b,ref:s},f,(0,t.createElement)(v.Z,{as:"span"},(0,n.__)("(opens in a new tab)")),(0,t.createElement)(a,{icon:l.Z,className:"components-external-link__icon"}))}const d=(0,t.forwardRef)(g)},"../components/components/notice/stories/index.stories.jsx":(P,_,e)=>{var o,s,i,f,x,r,E,b,k,y,O,w;e.r(_),e.d(_,{__namedExportsOrder:()=>d,_default:()=>u,default:()=>j,error:()=>h,success:()=>g,warning:()=>a});var t=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),c=e("../components/components/button/index.tsx"),p=e("../components/components/notice/index.tsx"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import { ExternalLink } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},warning:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},success:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}},error:{startLoc:{col:17,line:21},endLoc:{col:45,line:21},startBody:{col:17,line:21},endBody:{col:45,line:21}}}}},title:"JS Packages/Components/Notice",component:p.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},m=A=>(0,n.jsx)(p.Z,{...A});m.displayName="Template";const u=m.bind({});u.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,n.jsx)(c.Z,{isPrimary:!0,children:"Install now"},"install"),(0,n.jsx)(t.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const a=m.bind({});a.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,n.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,n.jsx)(c.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,n.jsx)(t.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const g=m.bind({});g.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,n.jsx)(c.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const h=m.bind({});h.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,n.jsx)(t.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},u.parameters={...u.parameters,docs:{...(o=u.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Notice {...args} />",...(i=(s=u.parameters)==null?void 0:s.docs)==null?void 0:i.source}}},a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Notice {...args} />",...(r=(x=a.parameters)==null?void 0:x.docs)==null?void 0:r.source}}},g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Notice {...args} />",...(k=(b=g.parameters)==null?void 0:b.docs)==null?void 0:k.source}}},h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Notice {...args} />",...(w=(O=h.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const d=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(P,_,e)=>{var h,d,o,s,i,f,x,r,E;e.r(_),e.d(_,{Default:()=>m,Dismissable:()=>u,Duration:()=>a,__namedExportsOrder:()=>g,default:()=>v});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../plugins/protect/src/js/components/notice/index.jsx"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=`import React from 'react';
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
`,l={Default:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},Dismissable:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},Duration:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}};const v={title:"Plugins/Protect/Notice",component:c.Z,parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},dismissable:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}},duration:{startLoc:{col:17,line:15},endLoc:{col:45,line:15},startBody:{col:17,line:15},endBody:{col:45,line:15}}}},layout:"centered"},decorators:[b=>(0,p.jsx)("div",{style:{width:250},children:(0,p.jsx)(b,{})})]},j=b=>(0,p.jsx)(c.Z,{...b});j.displayName="Template";const m=j.bind({});m.args={type:"success",message:"Code is poetry."};const u=j.bind({});u.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const a=j.bind({});a.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Notice {...args} />",...(o=(d=m.parameters)==null?void 0:d.docs)==null?void 0:o.source}}},u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Notice {...args} />",...(f=(i=u.parameters)==null?void 0:i.docs)==null?void 0:f.source}}},a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Notice {...args} />",...(E=(r=a.parameters)==null?void 0:r.docs)==null?void 0:E.source}}};const g=["Default","Dismissable","Duration"]},"../components/components/button/index.tsx":(P,_,e)=>{e.d(_,{Z:()=>i});var t=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),v=e.n(l),j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(m),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),g={};g.insert="head",g.singleton=!1;var h=u()(a.Z,g);const d=a.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=(0,j.forwardRef)((f,x)=>{var D,T;const{children:r,variant:E="primary",size:b="normal",weight:k="bold",icon:y,iconSize:O,disabled:w,isDestructive:A,isLoading:L,isExternalLink:N,className:B,text:S,fullWidth:Z,...C}=f,M=v()(d.button,B,{[d.normal]:b==="normal",[d.small]:b==="small",[d.icon]:!!y,[d.loading]:L,[d.regular]:k==="regular",[d["full-width"]]:Z,[d["is-icon-button"]]:!!y&&!r});C.ref=x;const I=b==="normal"?20:16,R=N&&(0,o.jsx)(p.Z,{size:I,icon:n.Z,className:d["external-icon"]}),z=N?"_blank":void 0,X=(r==null?void 0:r[0])&&r[0]!==null&&((T=(D=r==null?void 0:r[0])==null?void 0:D.props)==null?void 0:T.className)!=="components-tooltip";return(0,o.jsxs)(t.ZP,{target:z,variant:E,className:v()(M,{"has-text":!!y&&X}),icon:N?void 0:y,iconSize:O,disabled:w,"aria-disabled":w,isDestructive:A,text:S,...C,children:[L&&(0,o.jsx)(c.ZP,{}),(0,o.jsx)("span",{children:r}),R]})});s.displayName="Button";const i=s;try{s.displayName="Button",s.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(f){}},"../components/components/notice/index.tsx":(P,_,e)=>{e.d(_,{Z:()=>x});var t=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),v=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=e.n(v),m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(u),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),h={};h.insert="head",h.singleton=!1;var d=a()(g.Z,h);const o=g.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=r=>{switch(r){case"error":return t.Z;case"warning":return t.Z;case"info":return c.Z;case"success":return p.Z;default:return t.Z}},f=r=>{let{level:E,title:b,children:k,actions:y,hideCloseButton:O,onClose:w}=r;const A=j()(o.container,o[`is-${E}`]);return(0,s.jsxs)("div",{className:A,children:[(0,s.jsx)("div",{className:o["icon-wrapper"],children:(0,s.jsx)(n.Z,{icon:i(E),className:o.icon})}),(0,s.jsxs)("div",{className:o["main-content"],children:[(0,s.jsx)("div",{className:o.title,children:b}),k,y&&y.length>0&&(0,s.jsx)("div",{className:o["action-bar"],children:y.map((L,N)=>(0,s.jsx)("div",{className:o.action,children:L},N))})]}),!O&&(0,s.jsx)("button",{"aria-label":"close",className:o["close-button"],onClick:w,children:(0,s.jsx)(n.Z,{icon:l.Z})})]})};f.displayName="Notice",f.defaultProps={level:"info",hideCloseButton:!1};const x=f},"../../plugins/protect/src/js/components/notice/index.jsx":(P,_,e)=>{e.d(_,{Z:()=>r});var t=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),v=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../plugins/protect/src/js/state/store.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(a),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),d={};d.insert="head",d.singleton=!1;var o=g()(h.Z,d);const s=h.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=c.__,x=E=>{let{dismissable:b=!1,duration:k=null,floating:y=!1,message:O,type:w="success"}=E;const{clearNotice:A}=(0,t.Z)(u.t);let L;switch(w){case"success":L=p.Z;break;case"error":L=n.Z;break;case"info":default:L=l.Z}const N=(0,m.useCallback)(()=>{A()},[A]);return(0,m.useEffect)(()=>{let B;return k&&(B=setTimeout(A,k)),()=>clearTimeout(B)},[A,k,O]),(0,i.jsxs)("div",{className:`${s.notice} ${s[`notice--${w}`]} ${y?s["notice--floating"]:""}`,children:[(0,i.jsx)("div",{className:s.notice__icon,children:(0,i.jsx)(v.Z,{icon:L})}),(0,i.jsx)("div",{className:s.notice__message,children:O}),b&&(0,i.jsx)("button",{className:s.notice__close,"aria-label":f("Dismiss notice.","jetpack-protect"),onClick:N,children:(0,i.jsx)(v.Z,{icon:j.Z})})]})};x.displayName="Notice",x.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};const r=x},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(P,_,e)=>{e.d(_,{Z:()=>v});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(t),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(p),l=n()(c());l.push([P.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),l.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const v=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(P,_,e)=>{e.d(_,{Z:()=>v});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(t),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(p),l=n()(c());l.push([P.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const v=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(P,_,e)=>{e.d(_,{Z:()=>v});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(t),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(p),l=n()(c());l.push([P.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:rgba(0,0,0,0);border:none}",""]),l.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const v=l}}]);})();
