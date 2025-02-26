"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1945],{"../components/components/icon-tooltip/stories/index.stories.tsx":(u,l,t)=>{t.r(l),t.d(l,{HasContent:()=>c,HoverShow:()=>_,Wide:()=>d,WrapperAnchor:()=>p,__namedExportsOrder:()=>f,_default:()=>m,default:()=>g});var e=t("../components/components/icon-tooltip/index.tsx"),n=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=t.n(n),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss"),s={};s.insert="head",s.singleton=!1;var h=i()(r.A,s);const x=r.A.locals||{};var o=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),v=`import IconTooltip from '../index.js';
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
`,w={_default:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},HasContent:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},WrapperAnchor:{startLoc:{col:30,line:78},endLoc:{col:2,line:104},startBody:{col:30,line:78},endBody:{col:2,line:104}},Wide:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},HoverShow:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}}};const y=["top","top-start","top-end","bottom","bottom-start","bottom-end"],g={parameters:{storySource:{source:`import IconTooltip from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"has-content":{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"wrapper-anchor":{startLoc:{col:30,line:78},endLoc:{col:2,line:104},startBody:{col:30,line:78},endBody:{col:2,line:104}},wide:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"hover-show":{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}}}}},title:"JS Packages/Components/IconTooltip",component:e.A,argTypes:{className:{control:{type:"text"}},iconClassName:{control:{type:"text"}},placement:{control:{type:"select"},options:y},animate:{control:{type:"boolean"}},iconCode:{control:{type:"text"}},iconSize:{control:{type:"number"}},offset:{control:{type:"number"}},title:{control:{type:"text"}},children:{control:{type:null}},wide:{control:{type:"boolean"}},hoverShow:{control:{type:"boolean"}}}},a=b=>(0,o.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"200px"},children:(0,o.jsx)(e.A,{...b})}),j=b=>(0,o.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"300px"},children:(0,o.jsx)("div",{className:"tooltip-wrapper",children:(0,o.jsx)("div",{className:"tooltip-wrapper-anchor",children:(0,o.jsx)(e.A,{...b,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"Thank you for upgrading! Now your visitors can search up to 500 records."}),(0,o.jsx)("div",{className:"tooltip-actions",children:(0,o.jsx)("span",{children:"1 of 2"})})]})})})})}),m=a.bind({}),c=a.bind({});c.args={title:"This is title!",children:(0,o.jsxs)("div",{children:["This is children block!",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Break Line!",(0,o.jsx)("br",{}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Item 1"}),(0,o.jsx)("li",{children:"Item 2"})]})]})};const p=j.bind({});p.args={popoverAnchorStyle:"wrapper",title:"Site records increased",placement:"top",forceShow:!0};const d=a.bind({});d.args={title:"This is title!",children:(0,o.jsx)("div",{children:"This is a wide tooltip!"}),wide:!0,placement:"bottom-start"};const _=a.bind({});_.args={title:"This is title!",children:(0,o.jsx)("div",{children:"This is a hover tooltip!"}),placement:"bottom-start",hoverShow:!0};const f=["_default","HasContent","WrapperAnchor","Wide","HoverShow"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...m.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...c.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...p.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...d.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,..._.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(u,l,t)=>{t.d(l,{Ay:()=>c});var e=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=t("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=t("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),s=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function h(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const x=(0,i.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,o=(0,n.A)("svg",{target:"ea4tfvq2"})("width:",r.A.spinnerSize,"px;height:",r.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",s.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),v={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},w=(0,n.A)("circle",{target:"ea4tfvq1"})(v,";stroke:",s.l.gray[300],";"),y=(0,n.A)("path",{target:"ea4tfvq0"})(v,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",x,";");var g=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({className:p,...d},_){return(0,a.jsxs)(o,{className:(0,e.A)("components-spinner",p),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...d,ref:_,children:[(0,a.jsx)(w,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,a.jsx)(y,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const c=(0,g.forwardRef)(j)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(u,l,t)=>{t.d(l,{A:()=>i});var e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n({icon:r,size:s=24,...h},x){return(0,e.cloneElement)(r,{width:s,height:s,...h,ref:x})}const i=(0,e.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(u,l,t)=>{t.d(l,{A:()=>r});var e=t("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,n.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(e.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss":(u,l,t)=>{t.d(l,{A:()=>h});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(e),i=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(i),s=r()(n());s.push([u.id,".tooltip-wrapper-anchor{position:absolute;top:0;left:0;width:64px;height:64px}.tooltip-wrapper-anchor .icon-tooltip-wrapper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-wrapper .icon-tooltip-title{font-size:var(--font-title-small);font-weight:500;margin-bottom:16px}.tooltip-wrapper-anchor .icon-tooltip-helper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-content{font-size:var(--font-body)}.tooltip-wrapper-anchor .tooltip-actions{display:flex;align-items:center;justify-content:space-between;color:var(--jp-gray-60);margin-top:24px}",""]);const h=s}}]);
