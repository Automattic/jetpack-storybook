(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9671],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/defineProperty.js":(o,i,t)=>{var e=t("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js");function r(n,s,a){return s=e(s),s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js":(o,i,t)=>{var e=t("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js").default;function r(n,s){if(e(n)!=="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var p=a.call(n,s||"default");if(e(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js":(o,i,t)=>{var e=t("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js").default,r=t("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js");function n(s){var a=r(s,"string");return e(a)==="symbol"?a:String(a)}o.exports=n,o.exports.__esModule=!0,o.exports.default=o.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js":o=>{function i(t){"@babel/helpers - typeof";return o.exports=i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o.exports.__esModule=!0,o.exports.default=o.exports,i(t)}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(o,i,t)=>{"use strict";t.d(i,{ZP:()=>c});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=t.n(r),s=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=t("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),p=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function l(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const y=a.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,T=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",p.Z.spinnerSize,"px;height:",p.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",h.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),x={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},g=(0,s.Z)("circle",{target:"ea4tfvq1"})(x,";stroke:",h.D.gray[300],";"),u=(0,s.Z)("path",{target:"ea4tfvq0"})(x,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",y,";");function b({className:d,...m},v){return(0,e.createElement)(T,{className:n()("components-spinner",d),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...m,ref:v},(0,e.createElement)(g,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,e.createElement)(u,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const c=(0,e.forwardRef)(b)},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(o,i,t)=>{"use strict";t.d(i,{Z:()=>h});var e=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),r=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const n="36px",s="12px",a={controlSurfaceColor:r.D.white,controlTextActiveColor:r.D.ui.theme,controlPaddingX:s,controlPaddingXLarge:`calc(${s} * 1.3334)`,controlPaddingXSmall:`calc(${s} / 1.3334)`,controlBackgroundColor:r.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${r.D.ui.theme}`,controlDestructiveBorderColor:r.D.alert.red,controlHeight:n,controlHeightXSmall:`calc( ${n} * 0.6 )`,controlHeightSmall:`calc( ${n} * 0.8 )`,controlHeightLarge:`calc( ${n} * 1.2 )`,controlHeightXLarge:`calc( ${n} * 1.4 )`},p={toggleGroupControlBackgroundColor:a.controlBackgroundColor,toggleGroupControlBorderColor:r.D.ui.border,toggleGroupControlBackdropBackgroundColor:a.controlSurfaceColor,toggleGroupControlBackdropBorderColor:r.D.ui.border,toggleGroupControlButtonColorActive:a.controlBackgroundColor},h=Object.assign({},a,p,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,e.D)(2)}`,cardPaddingSmall:`${(0,e.D)(4)}`,cardPaddingMedium:`${(0,e.D)(4)} ${(0,e.D)(6)}`,cardPaddingLarge:`${(0,e.D)(6)} ${(0,e.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:r.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:r.D.white,surfaceColor:r.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/icon/index.js":(o,i,t)=>{"use strict";t.d(i,{Z:()=>n});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:s,size:a=24,...p}){return(0,e.cloneElement)(s,{width:a,height:a,...p})}const n=r},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/external.js":(o,i,t)=>{"use strict";t.d(i,{Z:()=>s});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,e.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(r.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/icon-tooltip/stories/index.stories.tsx":(o,i,t)=>{var w,S,C,E,j,P,A,B,L,I,D,W;"use strict";t.r(i),t.d(i,{HasContent:()=>c,Wide:()=>m,WrapperAnchor:()=>d,__namedExportsOrder:()=>v,_default:()=>_,default:()=>g});var e=t("../components/components/icon-tooltip/index.tsx"),r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(r),s=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss"),a={};a.insert="head",a.singleton=!1;var p=n()(s.Z,a);const h=s.Z.locals||{};var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`import IconTooltip from '../index';
import './style.scss';
import type { Placement } from '../types';

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
`,T={_default:{startLoc:{col:17,line:62},endLoc:{col:10,line:69},startBody:{col:17,line:62},endBody:{col:10,line:69}},HasContent:{startLoc:{col:17,line:62},endLoc:{col:10,line:69},startBody:{col:17,line:62},endBody:{col:10,line:69}},WrapperAnchor:{startLoc:{col:30,line:70},endLoc:{col:10,line:88},startBody:{col:30,line:70},endBody:{col:10,line:88}},Wide:{startLoc:{col:17,line:62},endLoc:{col:10,line:69},startBody:{col:17,line:62},endBody:{col:10,line:69}}};const x=["top","top-start","top-end","bottom","bottom-start","bottom-end"],g={parameters:{storySource:{source:`import IconTooltip from '../index';
import './style.scss';
import type { Placement } from '../types';
const AVAILABLE_PLACEMENTS: Placement[] = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
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
    }
  }
};
const Template = args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>;
const WrapperAnchorTemplate = args => <div style={{
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
    </div>;

// Export Default story
export const _default = Template.bind({});
export const HasContent = Template.bind({});
HasContent.args = {
  title: 'This is title!',
  children: <div>
            This is children block!<br></br>
            <br></br>Break Line!
            <br></br>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
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
  children: <div>This is a wide tooltip!</div>,
  wide: true,
  placement: 'bottom-start'
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <div style={{\\n  position: 'absolute',\\n  height: '1000px',\\n  left: '300px',\\n  top: '200px'\\n}}>\\n        <IconTooltip {...args} />\\n    </div>",
      ..._default.parameters?.docs?.source
    }
  }
};
HasContent.parameters = {
  ...HasContent.parameters,
  docs: {
    ...HasContent.parameters?.docs,
    source: {
      originalSource: "args => <div style={{\\n  position: 'absolute',\\n  height: '1000px',\\n  left: '300px',\\n  top: '200px'\\n}}>\\n        <IconTooltip {...args} />\\n    </div>",
      ...HasContent.parameters?.docs?.source
    }
  }
};
WrapperAnchor.parameters = {
  ...WrapperAnchor.parameters,
  docs: {
    ...WrapperAnchor.parameters?.docs,
    source: {
      originalSource: "args => <div style={{\\n  position: 'absolute',\\n  height: '1000px',\\n  left: '300px',\\n  top: '300px'\\n}}>\\n        <div className=\\"tooltip-wrapper\\">\\n            <div className=\\"tooltip-wrapper-anchor\\">\\n                <IconTooltip {...args}>\\n                    <>\\n                        <div>Thank you for upgrading! Now your visitors can search up to 500 records.</div>\\n                        <div className=\\"tooltip-actions\\">\\n                            <span>1 of 2</span>\\n                        </div>\\n                    </>\\n                </IconTooltip>\\n            </div>\\n        </div>\\n    </div>",
      ...WrapperAnchor.parameters?.docs?.source
    }
  }
};
Wide.parameters = {
  ...Wide.parameters,
  docs: {
    ...Wide.parameters?.docs,
    source: {
      originalSource: "args => <div style={{\\n  position: 'absolute',\\n  height: '1000px',\\n  left: '300px',\\n  top: '200px'\\n}}>\\n        <IconTooltip {...args} />\\n    </div>",
      ...Wide.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:62},endLoc:{col:10,line:69},startBody:{col:17,line:62},endBody:{col:10,line:69}},"has-content":{startLoc:{col:17,line:62},endLoc:{col:10,line:69},startBody:{col:17,line:62},endBody:{col:10,line:69}},"wrapper-anchor":{startLoc:{col:30,line:70},endLoc:{col:10,line:88},startBody:{col:30,line:70},endBody:{col:10,line:88}},wide:{startLoc:{col:17,line:62},endLoc:{col:10,line:69},startBody:{col:17,line:62},endBody:{col:10,line:69}}}}},title:"JS Packages/Components/IconTooltip",component:e.Z,argTypes:{className:{control:{type:"text"}},iconClassName:{control:{type:"text"}},placement:{control:{type:"select"},options:x},animate:{control:{type:"boolean"}},iconCode:{control:{type:"text"}},iconSize:{control:{type:"number"}},offset:{control:{type:"number"}},title:{control:{type:"text"}},children:{control:{type:null}},wide:{control:{type:"boolean"}}}},u=f=>(0,l.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"200px"},children:(0,l.jsx)(e.Z,{...f})});u.displayName="Template";const b=f=>(0,l.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"300px"},children:(0,l.jsx)("div",{className:"tooltip-wrapper",children:(0,l.jsx)("div",{className:"tooltip-wrapper-anchor",children:(0,l.jsx)(e.Z,{...f,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"Thank you for upgrading! Now your visitors can search up to 500 records."}),(0,l.jsx)("div",{className:"tooltip-actions",children:(0,l.jsx)("span",{children:"1 of 2"})})]})})})})});b.displayName="WrapperAnchorTemplate";const _=u.bind({}),c=u.bind({});c.args={title:"This is title!",children:(0,l.jsxs)("div",{children:["This is children block!",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Break Line!",(0,l.jsx)("br",{}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Item 1"}),(0,l.jsx)("li",{children:"Item 2"})]})]})};const d=b.bind({});d.args={popoverAnchorStyle:"wrapper",title:"Site records increased",placement:"top",forceShow:!0};const m=u.bind({});m.args={title:"This is title!",children:(0,l.jsx)("div",{children:"This is a wide tooltip!"}),wide:!0,placement:"bottom-start"},_.parameters={..._.parameters,docs:{...(w=_.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...(C=(S=_.parameters)==null?void 0:S.docs)==null?void 0:C.source}}},c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source}}},d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}},m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...(W=(D=m.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const v=["_default","HasContent","WrapperAnchor","Wide"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss":(o,i,t)=>{"use strict";t.d(i,{Z:()=>p});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(e),n=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=t.n(n),a=s()(r());a.push([o.id,".tooltip-wrapper-anchor{position:absolute;top:0;left:0;width:64px;height:64px}.tooltip-wrapper-anchor .icon-tooltip-wrapper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-wrapper .icon-tooltip-title{font-size:var(--font-title-small);font-weight:500;margin-bottom:16px}.tooltip-wrapper-anchor .icon-tooltip-helper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-content{font-size:var(--font-body)}.tooltip-wrapper-anchor .tooltip-actions{display:flex;align-items:center;justify-content:space-between;color:var(--jp-gray-60);margin-top:24px}",""]);const p=a}}]);})();
