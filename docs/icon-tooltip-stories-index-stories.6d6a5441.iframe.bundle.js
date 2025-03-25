"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1945],{"../components/components/icon-tooltip/stories/index.stories.tsx":(h,i,t)=>{t.r(i),t.d(i,{HasContent:()=>p,HoverShow:()=>u,Wide:()=>m,WrapperAnchor:()=>_,__namedExportsOrder:()=>b,_default:()=>x,default:()=>w});var r=t("../components/components/icon-tooltip/index.tsx"),s=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(s),e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss"),o={};o.insert="head",o.singleton=!1;var a=l()(e.A,o);const c=e.A.locals||{};var n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),v=`import IconTooltip from '../index.js';
import './style.scss';
import type { Placement } from '../types.js';

const AVAILABLE_PLACEMENTS: Placement[] = [
	'top',
	'top-start',
	'top-end',
	'bottom',
	'bottom-start',
	'bottom-end',
];

export default {
	title: 'JS Packages/Components/IconTooltip',
	component: IconTooltip,
	argTypes: {
		className: {
			control: { type: 'text' },
		},
		iconClassName: {
			control: { type: 'text' },
		},
		placement: {
			control: { type: 'select' },
			options: AVAILABLE_PLACEMENTS,
		},
		animate: {
			control: { type: 'boolean' },
		},
		iconCode: {
			control: { type: 'text' },
		},
		iconSize: {
			control: { type: 'number' },
		},
		offset: {
			control: { type: 'number' },
		},
		title: {
			control: { type: 'text' },
		},
		children: {
			control: { type: null },
		},
		wide: {
			control: { type: 'boolean' },
		},
		hoverShow: {
			control: { type: 'boolean' },
		},
	},
};

const Template = args => (
	<div style={ { position: 'absolute', height: '1000px', left: '300px', top: '200px' } }>
		<IconTooltip { ...args } />
	</div>
);

const WrapperAnchorTemplate = args => (
	<div style={ { position: 'absolute', height: '1000px', left: '300px', top: '300px' } }>
		<div className="tooltip-wrapper">
			<div className="tooltip-wrapper-anchor">
				<IconTooltip { ...args }>
					<>
						<div>Thank you for upgrading! Now your visitors can search up to 500 records.</div>
						<div className="tooltip-actions">
							<span>1 of 2</span>
						</div>
					</>
				</IconTooltip>
			</div>
		</div>
	</div>
);

// Export Default story
export const _default = Template.bind( {} );

export const HasContent = Template.bind( {} );
HasContent.args = {
	title: 'This is title!',
	children: (
		<div>
			This is children block!<br></br>
			<br></br>Break Line!
			<br></br>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
			</ul>
		</div>
	),
};

export const WrapperAnchor = WrapperAnchorTemplate.bind( {} );
WrapperAnchor.args = {
	popoverAnchorStyle: 'wrapper',
	title: 'Site records increased',
	placement: 'top',
	forceShow: true,
};

export const Wide = Template.bind( {} );
Wide.args = {
	title: 'This is title!',
	children: <div>This is a wide tooltip!</div>,
	wide: true,
	placement: 'bottom-start',
};

export const HoverShow = Template.bind( {} );
HoverShow.args = {
	title: 'This is title!',
	children: <div>This is a hover tooltip!</div>,
	placement: 'bottom-start',
	hoverShow: true,
};
`,g={_default:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},HasContent:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},WrapperAnchor:{startLoc:{col:30,line:78},endLoc:{col:2,line:104},startBody:{col:30,line:78},endBody:{col:2,line:104}},Wide:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},HoverShow:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}}};const y=["top","top-start","top-end","bottom","bottom-start","bottom-end"],w={parameters:{storySource:{source:`import IconTooltip from '../index.js';
import './style.scss';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const AVAILABLE_PLACEMENTS = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
export default {
  title: 'JS Packages/Components/IconTooltip',
  component: IconTooltip,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    },
    iconClassName: {
      control: {
        type: 'text'
      }
    },
    placement: {
      control: {
        type: 'select'
      },
      options: AVAILABLE_PLACEMENTS
    },
    animate: {
      control: {
        type: 'boolean'
      }
    },
    iconCode: {
      control: {
        type: 'text'
      }
    },
    iconSize: {
      control: {
        type: 'number'
      }
    },
    offset: {
      control: {
        type: 'number'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: {
        type: null
      }
    },
    wide: {
      control: {
        type: 'boolean'
      }
    },
    hoverShow: {
      control: {
        type: 'boolean'
      }
    }
  }
};
const Template = args => /*#__PURE__*/_jsx("div", {
  style: {
    position: 'absolute',
    height: '1000px',
    left: '300px',
    top: '200px'
  },
  children: /*#__PURE__*/_jsx(IconTooltip, {
    ...args
  })
});
const WrapperAnchorTemplate = args => /*#__PURE__*/_jsx("div", {
  style: {
    position: 'absolute',
    height: '1000px',
    left: '300px',
    top: '300px'
  },
  children: /*#__PURE__*/_jsx("div", {
    className: "tooltip-wrapper",
    children: /*#__PURE__*/_jsx("div", {
      className: "tooltip-wrapper-anchor",
      children: /*#__PURE__*/_jsx(IconTooltip, {
        ...args,
        children: /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("div", {
            children: "Thank you for upgrading! Now your visitors can search up to 500 records."
          }), /*#__PURE__*/_jsx("div", {
            className: "tooltip-actions",
            children: /*#__PURE__*/_jsx("span", {
              children: "1 of 2"
            })
          })]
        })
      })
    })
  })
});

// Export Default story
export const _default = Template.bind({});
export const HasContent = Template.bind({});
HasContent.args = {
  title: 'This is title!',
  children: /*#__PURE__*/_jsxs("div", {
    children: ["This is children block!", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), "Break Line!", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs("ul", {
      children: [/*#__PURE__*/_jsx("li", {
        children: "Item 1"
      }), /*#__PURE__*/_jsx("li", {
        children: "Item 2"
      })]
    })]
  })
};
export const WrapperAnchor = WrapperAnchorTemplate.bind({});
WrapperAnchor.args = {
  popoverAnchorStyle: 'wrapper',
  title: 'Site records increased',
  placement: 'top',
  forceShow: true
};
export const Wide = Template.bind({});
Wide.args = {
  title: 'This is title!',
  children: /*#__PURE__*/_jsx("div", {
    children: "This is a wide tooltip!"
  }),
  wide: true,
  placement: 'bottom-start'
};
export const HoverShow = Template.bind({});
HoverShow.args = {
  title: 'This is title!',
  children: /*#__PURE__*/_jsx("div", {
    children: "This is a hover tooltip!"
  }),
  placement: 'bottom-start',
  hoverShow: true
};`,locationsMap:{default:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"has-content":{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"wrapper-anchor":{startLoc:{col:30,line:78},endLoc:{col:2,line:104},startBody:{col:30,line:78},endBody:{col:2,line:104}},wide:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"hover-show":{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}}}}},title:"JS Packages/Components/IconTooltip",component:r.A,argTypes:{className:{control:{type:"text"}},iconClassName:{control:{type:"text"}},placement:{control:{type:"select"},options:y},animate:{control:{type:"boolean"}},iconCode:{control:{type:"text"}},iconSize:{control:{type:"number"}},offset:{control:{type:"number"}},title:{control:{type:"text"}},children:{control:{type:null}},wide:{control:{type:"boolean"}},hoverShow:{control:{type:"boolean"}}}},d=f=>(0,n.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"200px"},children:(0,n.jsx)(r.A,{...f})}),j=f=>(0,n.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"300px"},children:(0,n.jsx)("div",{className:"tooltip-wrapper",children:(0,n.jsx)("div",{className:"tooltip-wrapper-anchor",children:(0,n.jsx)(r.A,{...f,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:"Thank you for upgrading! Now your visitors can search up to 500 records."}),(0,n.jsx)("div",{className:"tooltip-actions",children:(0,n.jsx)("span",{children:"1 of 2"})})]})})})})}),x=d.bind({}),p=d.bind({});p.args={title:"This is title!",children:(0,n.jsxs)("div",{children:["This is children block!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Break Line!",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Item 1"}),(0,n.jsx)("li",{children:"Item 2"})]})]})};const _=j.bind({});_.args={popoverAnchorStyle:"wrapper",title:"Site records increased",placement:"top",forceShow:!0};const m=d.bind({});m.args={title:"This is title!",children:(0,n.jsx)("div",{children:"This is a wide tooltip!"}),wide:!0,placement:"bottom-start"};const u=d.bind({});u.args={title:"This is title!",children:(0,n.jsx)("div",{children:"This is a hover tooltip!"}),placement:"bottom-start",hoverShow:!0};const b=["_default","HasContent","WrapperAnchor","Wide","HoverShow"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...x.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '300px'
}}>
        <div className="tooltip-wrapper">
            <div className="tooltip-wrapper-anchor">
                <IconTooltip {...args}>
                    <>
                        <div>Thank you for upgrading! Now your visitors can search up to 500 records.</div>
                        <div className="tooltip-actions">
                            <span>1 of 2</span>
                        </div>
                    </>
                </IconTooltip>
            </div>
        </div>
    </div>`,..._.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(h,i,t)=>{t.d(i,{Ay:()=>p});var r=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=t("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=t("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function a(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const c=(0,l.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,n=(0,s.A)("svg",{target:"ea4tfvq2"})("width:",e.A.spinnerSize,"px;height:",e.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",o.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),v={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},g=(0,s.A)("circle",{target:"ea4tfvq1"})(v,";stroke:",o.l.gray[300],";"),y=(0,s.A)("path",{target:"ea4tfvq0"})(v,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",c,";");var w=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({className:_,...m},u){return(0,d.jsxs)(n,{className:(0,r.A)("components-spinner",_),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...m,ref:u,children:[(0,d.jsx)(g,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,d.jsx)(y,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const p=(0,w.forwardRef)(j)},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(h,i,t)=>{t.d(i,{A:()=>l});var r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({icon:e,size:o=24,...a},c){return(0,r.cloneElement)(e,{width:o,height:o,...a,ref:c})}const l=(0,r.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(h,i,t)=>{t.d(i,{A:()=>e});var r=t("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=(0,s.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(r.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.19.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(h,i,t)=>{t.d(i,{Ay:()=>l});var r=t("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.19.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function s(e,o){if(e===o)return!0;if(e.length!==o.length)return!1;for(let a=0,c=e.length;a<c;a++)if(e[a]!==o[a])return!1;return!0}function l(e,o){if(e&&o){if(e.constructor===Object&&o.constructor===Object)return(0,r.A)(e,o);if(Array.isArray(e)&&Array.isArray(o))return s(e,o)}return e===o}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.19.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(h,i,t)=>{t.d(i,{A:()=>r});function r(s,l){if(s===l)return!0;const e=Object.keys(s),o=Object.keys(l);if(e.length!==o.length)return!1;let a=0;for(;a<e.length;){const c=e[a],n=s[c];if(n===void 0&&!l.hasOwnProperty(c)||n!==l[c])return!1;a++}return!0}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss":(h,i,t)=>{t.d(i,{A:()=>a});var r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(r),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=t.n(l),o=e()(s());o.push([h.id,".tooltip-wrapper-anchor{position:absolute;top:0;left:0;width:64px;height:64px}.tooltip-wrapper-anchor .icon-tooltip-wrapper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-wrapper .icon-tooltip-title{font-size:var(--font-title-small);font-weight:500;margin-bottom:16px}.tooltip-wrapper-anchor .icon-tooltip-helper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-content{font-size:var(--font-body)}.tooltip-wrapper-anchor .tooltip-actions{display:flex;align-items:center;justify-content:space-between;color:var(--jp-gray-60);margin-top:24px}",""]);const a=o}}]);
