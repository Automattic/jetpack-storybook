"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1945],{"../components/components/icon-tooltip/stories/index.stories.tsx":(g,c,e)=>{e.r(c),e.d(c,{HasContent:()=>h,HoverShow:()=>v,Wide:()=>j,WrapperAnchor:()=>u,__namedExportsOrder:()=>w,_default:()=>p,default:()=>m});var a=e("../components/components/icon-tooltip/index.tsx"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(r),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/icon-tooltip/stories/style.scss"),s={};s.insert="head",s.singleton=!1;var d=t()(n.A,s);const _=n.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),b=`import IconTooltip from '../index.tsx';
import './style.scss';
import type { Placement } from '../types.ts';

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
`,o={_default:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},HasContent:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},WrapperAnchor:{startLoc:{col:30,line:78},endLoc:{col:2,line:104},startBody:{col:30,line:78},endBody:{col:2,line:104}},Wide:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},HoverShow:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}}};const l=["top","top-start","top-end","bottom","bottom-start","bottom-end"],m={parameters:{storySource:{source:`import IconTooltip from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"has-content":{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"wrapper-anchor":{startLoc:{col:30,line:78},endLoc:{col:2,line:104},startBody:{col:30,line:78},endBody:{col:2,line:104}},wide:{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}},"hover-show":{startLoc:{col:17,line:67},endLoc:{col:2,line:77},startBody:{col:17,line:67},endBody:{col:2,line:77}}}}},title:"JS Packages/Components/IconTooltip",component:a.A,argTypes:{className:{control:{type:"text"}},iconClassName:{control:{type:"text"}},placement:{control:{type:"select"},options:l},animate:{control:{type:"boolean"}},iconCode:{control:{type:"text"}},iconSize:{control:{type:"number"}},offset:{control:{type:"number"}},title:{control:{type:"text"}},children:{control:{type:null}},wide:{control:{type:"boolean"}},hoverShow:{control:{type:"boolean"}}}},y=f=>(0,i.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"200px"},children:(0,i.jsx)(a.A,{...f})}),x=f=>(0,i.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"300px"},children:(0,i.jsx)("div",{className:"tooltip-wrapper",children:(0,i.jsx)("div",{className:"tooltip-wrapper-anchor",children:(0,i.jsx)(a.A,{...f,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:"Thank you for upgrading! Now your visitors can search up to 500 records."}),(0,i.jsx)("div",{className:"tooltip-actions",children:(0,i.jsx)("span",{children:"1 of 2"})})]})})})})}),p=y.bind({}),h=y.bind({});h.args={title:"This is title!",children:(0,i.jsxs)("div",{children:["This is children block!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Break Line!",(0,i.jsx)("br",{}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Item 1"}),(0,i.jsx)("li",{children:"Item 2"})]})]})};const u=x.bind({});u.args={popoverAnchorStyle:"wrapper",title:"Site records increased",placement:"top",forceShow:!0};const j=y.bind({});j.args={title:"This is title!",children:(0,i.jsx)("div",{children:"This is a wide tooltip!"}),wide:!0,placement:"bottom-start"};const v=y.bind({});v.args={title:"This is title!",children:(0,i.jsx)("div",{children:"This is a hover tooltip!"}),placement:"bottom-start",hoverShow:!0};const w=["_default","HasContent","WrapperAnchor","Wide","HoverShow"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...h.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...u.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...j.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...v.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(g,c,e)=>{e.d(c,{Ay:()=>h});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),t=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function d(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const _=(0,t.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,i=(0,r.A)("svg",{target:"ea4tfvq2"})("width:",n.A.spinnerSize,"px;height:",n.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",s.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),b={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},o=(0,r.A)("circle",{target:"ea4tfvq1"})(b,";stroke:",s.l.gray[300],";"),l=(0,r.A)("path",{target:"ea4tfvq0"})(b,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",_,";");var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function x({className:u,...j},v){return(0,y.jsxs)(i,{className:(0,a.A)("components-spinner",u),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...j,ref:v,children:[(0,y.jsx)(o,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,y.jsx)(l,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const h=(0,m.forwardRef)(x)},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,c,e)=>{e.d(c,{A:()=>t});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r({icon:n,size:s=24,...d},_){return(0,a.cloneElement)(n,{width:s,height:s,...d,ref:_})}const t=(0,a.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(g,c,e)=>{e.d(c,{A:()=>n});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,r.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(a.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.24.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(g,c,e)=>{e.d(c,{Ay:()=>t});var a=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.24.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function r(n,s){if(n===s)return!0;if(n.length!==s.length)return!1;for(let d=0,_=n.length;d<_;d++)if(n[d]!==s[d])return!1;return!0}function t(n,s){if(n&&s){if(n.constructor===Object&&s.constructor===Object)return(0,a.A)(n,s);if(Array.isArray(n)&&Array.isArray(s))return r(n,s)}return n===s}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.24.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(g,c,e)=>{e.d(c,{A:()=>a});function a(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);if(n.length!==s.length)return!1;let d=0;for(;d<n.length;){const _=n[d],i=r[_];if(i===void 0&&!t.hasOwnProperty(_)||i!==t[_])return!1;d++}return!0}},"../components/components/button/index.tsx":(g,c,e)=>{e.d(c,{A:()=>j});var a=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(b),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/button/style.module.scss"),m={};m.insert="head",m.singleton=!1;var y=o()(l.A,m);const x=l.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=n.__,u=(0,i.forwardRef)((v,w)=>{const{children:f,variant:S="primary",size:T="normal",weight:C="bold",icon:P,iconSize:I,disabled:A,isDestructive:R,isLoading:V,isExternalLink:O,className:U,text:z,fullWidth:E,...L}=v,k=(0,_.A)(x.button,U,{[x.normal]:T==="normal",[x.small]:T==="small",[x.icon]:!!P,[x.loading]:V,[x.regular]:C==="regular",[x["full-width"]]:E,[x["is-icon-button"]]:!!P&&!f});L.ref=w;const B=T==="normal"?20:16,D=O&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.A,{size:B,icon:d.A,className:x["external-icon"]}),(0,p.jsx)(a.A,{as:"span",children:h("(opens in a new tab)","jetpack-components")})]}),H=O?"_blank":void 0,M=f?.[0]&&f[0]!==null&&f?.[0]?.props?.className!=="components-tooltip";return(0,p.jsxs)(r.Ay,{target:H,variant:S,className:(0,_.A)(k,{"has-text":!!P&&M}),icon:O?void 0:P,iconSize:I,disabled:A,"aria-disabled":A,isDestructive:R,text:z,...L,children:[V&&(0,p.jsx)(t.Ay,{}),(0,p.jsx)("span",{children:f}),D]})});u.displayName="Button";const j=u;try{u.displayName="Button",u.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:u.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/gridicon/index.tsx":(g,c,e)=>{e.d(c,{A:()=>y});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(n),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/gridicon/style.scss"),_={};_.insert="head",_.singleton=!1;var i=s()(d.A,_);const b=d.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=a.__;class m extends t.Component{static defaultProps={"aria-hidden":"false",focusable:"true"};needsOffset(p,h){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-help-outline","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(p)>=0?h%18===0:!1}getSVGDescription(p){if("description"in this.props)return this.props.description;switch(p){default:return"";case"gridicons-audio":return l("Has audio.","jetpack-components");case"gridicons-arrow-left":return l("Arrow left","jetpack-components");case"gridicons-arrow-right":return l("Arrow right","jetpack-components");case"gridicons-calendar":return l("Is an event.","jetpack-components");case"gridicons-cart":return l("Is a product.","jetpack-components");case"chevron-down":return l("Show filters","jetpack-components");case"gridicons-comment":return l("Matching comment.","jetpack-components");case"gridicons-cross":return l("Close.","jetpack-components");case"gridicons-filter":return l("Toggle search filters.","jetpack-components");case"gridicons-folder":return l("Category","jetpack-components");case"gridicons-help-outline":return l("Help","jetpack-components");case"gridicons-info":case"gridicons-info-outline":return l("Information.","jetpack-components");case"gridicons-image-multiple":return l("Has multiple images.","jetpack-components");case"gridicons-image":return l("Has an image.","jetpack-components");case"gridicons-page":return l("Page","jetpack-components");case"gridicons-post":return l("Post","jetpack-components");case"gridicons-jetpack-search":case"gridicons-search":return l("Magnifying Glass","jetpack-components");case"gridicons-tag":return l("Tag","jetpack-components");case"gridicons-video":return l("Has a video.","jetpack-components")}}renderIcon(p){switch(p){default:return null;case"gridicons-audio":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-help-outline":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-1.962-2v-.528c0-.4.082-.74.246-1.017.163-.276.454-.546.87-.808.333-.21.572-.397.717-.565.146-.168.22-.36.22-.577 0-.172-.078-.308-.234-.41-.156-.1-.358-.15-.608-.15-.62 0-1.34.22-2.168.658l-.854-1.67c1.02-.58 2.084-.872 3.194-.872.913 0 1.63.202 2.15.603.52.4.78.948.78 1.64 0 .495-.116.924-.347 1.287-.23.362-.6.705-1.11 1.03-.43.278-.7.48-.807.61-.108.13-.163.282-.163.458V13h-1.885z"})});case"gridicons-image":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("g",{id:"lock",children:(0,o.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,o.jsx)("g",{id:"Layer_1"})]});case"gridicons-external":return(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})})}}render(){const{size:p=24,className:h=""}=this.props,u=this.props.height||p,j=this.props.width||p,v=this.props.style||{height:u,width:j},w="gridicons-"+this.props.icon,f=(0,r.A)("gridicon",w,h,{"needs-offset":this.needsOffset(w,p)}),S=this.getSVGDescription(w);return(0,o.jsxs)("svg",{className:f,focusable:this.props.focusable,height:u,onClick:this.props.onClick,style:v,viewBox:"0 0 24 24",width:j,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[S?(0,o.jsx)("desc",{children:S}):null,this.renderIcon(w)]})}}const y=m;try{m.displayName="Gridicon",m.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:m.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch{}},"../components/components/icon-tooltip/index.tsx":(g,c,e)=>{e.d(c,{A:()=>p});var a=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/index.js"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../components/components/button/index.tsx"),s=e("../components/components/gridicon/index.tsx"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(d),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/icon-tooltip/style.scss"),b={};b.insert="head",b.singleton=!1;var o=_()(i.A,b);const l=i.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=h=>({"top-end":"top left",top:"top center","top-start":"top right","bottom-end":"bottom left",bottom:"bottom center","bottom-start":"bottom right"})[h],p=({className:h="",iconClassName:u="",placement:j="bottom-end",animate:v=!0,iconCode:w="info-outline",iconSize:f=18,offset:S=10,title:T,children:C,popoverAnchorStyle:P="icon",forceShow:I=!1,hoverShow:A=!1,wide:R=!1,inline:V=!0,shift:O=!1})=>{const[z,E]=(0,t.useState)(!1),[L,k]=(0,t.useState)(null),B=(0,t.useCallback)(()=>E(!1),[E]),D=(0,t.useCallback)(N=>{N.preventDefault(),E(!z)},[z,E]),H={position:y(j),placement:j,animate:v,noArrow:!1,resize:!1,flip:!1,offset:S,focusOnMount:"container",onClose:B,className:"icon-tooltip-container",inline:V,shift:O},M=P==="wrapper",G=(0,r.A)("icon-tooltip-wrapper",h),W={left:M?0:-(124/2-f/2)+"px"},X=M&&I,K=(0,t.useCallback)(()=>{A&&(L&&(clearTimeout(L),k(null)),E(!0))},[A,L]),J=(0,t.useCallback)(()=>{if(A){const N=setTimeout(()=>{E(!1),k(null)},100);k(N)}},[A]);return(0,m.jsxs)("div",{className:G,"data-testid":"icon-tooltip_wrapper",onMouseEnter:K,onMouseLeave:J,children:[!M&&(0,m.jsx)(n.A,{variant:"link",onMouseDown:D,children:(0,m.jsx)(s.A,{className:u,icon:w,size:f})}),(0,m.jsx)("div",{className:(0,r.A)("icon-tooltip-helper",{"is-wide":R}),style:W,children:(X||z)&&(0,m.jsx)(a.Ay,{...H,children:(0,m.jsxs)("div",{children:[T&&(0,m.jsx)("div",{className:"icon-tooltip-title",children:T}),(0,m.jsx)("div",{className:"icon-tooltip-content",children:C})]})})})]})}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/button/style.module.scss":(g,c,e)=>{e.d(c,{A:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(t),s=n()(r());s.push([g.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),s.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const d=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/gridicon/style.scss":(g,c,e)=>{e.d(c,{A:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(t),s=n()(r());s.push([g.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const d=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/icon-tooltip/stories/style.scss":(g,c,e)=>{e.d(c,{A:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(t),s=n()(r());s.push([g.id,".tooltip-wrapper-anchor{position:absolute;top:0;left:0;width:64px;height:64px}.tooltip-wrapper-anchor .icon-tooltip-wrapper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-wrapper .icon-tooltip-title{font-size:var(--font-title-small);font-weight:500;margin-bottom:16px}.tooltip-wrapper-anchor .icon-tooltip-helper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-content{font-size:var(--font-body)}.tooltip-wrapper-anchor .tooltip-actions{display:flex;align-items:center;justify-content:space-between;color:var(--jp-gray-60);margin-top:24px}",""]);const d=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/icon-tooltip/style.scss":(g,c,e)=>{e.d(c,{A:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(t),s=n()(r());s.push([g.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000;--jp-black-80: #2c3338;--jp-white: #fff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-mint: #D3F6D5;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover::after,.jp-cut:focus::after{transform:translateY(-50%) translateX(8px)}.jp-cut::after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.components-popover:not(.is-without-arrow)::before{border-color:var(--jp-gray)}.icon-tooltip-helper{width:124px;height:18px;position:absolute;top:0;left:-53px;pointer-events:none}.icon-tooltip-helper .components-popover:not([data-y-axis=middle])[data-x-axis=left] .components-popover__content{margin-right:-62px}.icon-tooltip-helper .components-popover:not([data-y-axis=middle])[data-x-axis=right] .components-popover__content{margin-left:-62px}.icon-tooltip-helper .components-popover[data-y-axis=bottom] .components-popover__content{top:2px !important}.icon-tooltip-helper .components-popover:not(.is-without-arrow)[data-y-axis=bottom]::before{top:-6px !important}.icon-tooltip-helper .components-popover:not(.is-without-arrow)[data-y-axis=bottom]::after{top:-4px !important}.icon-tooltip-helper .components-popover[data-y-axis=top] .components-popover__content{bottom:10px !important}.icon-tooltip-helper .components-popover:not(.is-without-arrow)[data-y-axis=top]::before{bottom:3px}.icon-tooltip-helper .components-popover:not(.is-without-arrow)[data-y-axis=top]::after{bottom:4px}.icon-tooltip-helper.is-wide .components-popover__content{width:440px}.icon-tooltip-wrapper{display:inline-block;position:relative;color:var(--jp-black)}.icon-tooltip-wrapper .components-button.is-link:focus:not(:disabled){box-shadow:none}.icon-tooltip-container{pointer-events:all}.icon-tooltip-container .components-popover__content{padding:24px;width:304px;white-space:normal;border-radius:4px;outline:none;border:1px solid var(--jp-gray);max-width:90vw;margin:0 10px}.icon-tooltip-title{font-weight:600;font-size:16px;line-height:19px}.icon-tooltip-title:not(:last-child){margin-bottom:8px}.icon-tooltip-content{font-weight:400;font-size:14px;line-height:24px}.icon-tooltip-content ul{margin:0 0 0 1rem;list-style-type:disc}.icon-tooltip-content ul li:last-child{margin-bottom:0}',""]);const d=s}}]);
