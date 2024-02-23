"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9671],{"../components/components/icon-tooltip/stories/index.stories.tsx":(u,a,t)=>{var w,S,E,C,j,B,A,L,P,I,D,O;t.r(a),t.d(a,{HasContent:()=>c,Wide:()=>d,WrapperAnchor:()=>p,__namedExportsOrder:()=>y,_default:()=>h,default:()=>v});var o=t("../components/components/icon-tooltip/index.tsx"),e=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(e),s=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss"),r={};r.insert="head",r.singleton=!1;var i=l()(s.Z,r);const m=s.Z.locals||{};var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=`import IconTooltip from '../index';
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
`,T={_default:{startLoc:{col:17,line:52},endLoc:{col:1,line:56},startBody:{col:17,line:52},endBody:{col:1,line:56}},HasContent:{startLoc:{col:17,line:52},endLoc:{col:1,line:56},startBody:{col:17,line:52},endBody:{col:1,line:56}},WrapperAnchor:{startLoc:{col:30,line:58},endLoc:{col:1,line:73},startBody:{col:30,line:58},endBody:{col:1,line:73}},Wide:{startLoc:{col:17,line:52},endLoc:{col:1,line:56},startBody:{col:17,line:52},endBody:{col:1,line:56}}};const g=["top","top-start","top-end","bottom","bottom-start","bottom-end"],v={parameters:{storySource:{source:`import IconTooltip from '../index';
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
`,locationsMap:{default:{startLoc:{col:17,line:52},endLoc:{col:1,line:56},startBody:{col:17,line:52},endBody:{col:1,line:56}},"has-content":{startLoc:{col:17,line:52},endLoc:{col:1,line:56},startBody:{col:17,line:52},endBody:{col:1,line:56}},"wrapper-anchor":{startLoc:{col:30,line:58},endLoc:{col:1,line:73},startBody:{col:30,line:58},endBody:{col:1,line:73}},wide:{startLoc:{col:17,line:52},endLoc:{col:1,line:56},startBody:{col:17,line:52},endBody:{col:1,line:56}}}}},title:"JS Packages/Components/IconTooltip",component:o.Z,argTypes:{className:{control:{type:"text"}},iconClassName:{control:{type:"text"}},placement:{control:{type:"select"},options:g},animate:{control:{type:"boolean"}},iconCode:{control:{type:"text"}},iconSize:{control:{type:"number"}},offset:{control:{type:"number"}},title:{control:{type:"text"}},children:{control:{type:null}},wide:{control:{type:"boolean"}}}},_=b=>(0,n.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"200px"},children:(0,n.jsx)(o.Z,{...b})});_.displayName="Template";const x=b=>(0,n.jsx)("div",{style:{position:"absolute",height:"1000px",left:"300px",top:"300px"},children:(0,n.jsx)("div",{className:"tooltip-wrapper",children:(0,n.jsx)("div",{className:"tooltip-wrapper-anchor",children:(0,n.jsx)(o.Z,{...b,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:"Thank you for upgrading! Now your visitors can search up to 500 records."}),(0,n.jsx)("div",{className:"tooltip-actions",children:(0,n.jsx)("span",{children:"1 of 2"})})]})})})})});x.displayName="WrapperAnchorTemplate";const h=_.bind({}),c=_.bind({});c.args={title:"This is title!",children:(0,n.jsxs)("div",{children:["This is children block!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Break Line!",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Item 1"}),(0,n.jsx)("li",{children:"Item 2"})]})]})};const p=x.bind({});p.args={popoverAnchorStyle:"wrapper",title:"Site records increased",placement:"top",forceShow:!0};const d=_.bind({});d.args={title:"This is title!",children:(0,n.jsx)("div",{children:"This is a wide tooltip!"}),wide:!0,placement:"bottom-start"},h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...(E=(S=h.parameters)==null?void 0:S.docs)==null?void 0:E.source}}},c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}},p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}},d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => <div style={{
  position: 'absolute',
  height: '1000px',
  left: '300px',
  top: '200px'
}}>
        <IconTooltip {...args} />
    </div>`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const y=["_default","HasContent","WrapperAnchor","Wide"]},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(u,a,t)=>{t.d(a,{ZP:()=>c});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=t.n(e),s=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=t("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),i=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),m=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function n(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const f=r.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,T=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",i.Z.spinnerSize,"px;height:",i.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",m.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},v=(0,s.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",m.D.gray[300],";"),_=(0,s.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",f,";");function x({className:p,...d},y){return(0,o.createElement)(T,{className:l()("components-spinner",p),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...d,ref:y},(0,o.createElement)(v,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(_,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const c=(0,o.forwardRef)(x)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(u,a,t)=>{t.d(a,{Z:()=>m});var o=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",s="12px",r={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:s,controlPaddingXLarge:`calc(${s} * 1.3334)`,controlPaddingXSmall:`calc(${s} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},i={toggleGroupControlBackgroundColor:r.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:r.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:r.controlBackgroundColor},m=Object.assign({},r,i,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(u,a,t)=>{t.d(a,{Z:()=>l});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e({icon:s,size:r=24,...i},m){return(0,o.cloneElement)(s,{width:r,height:r,...i,ref:m})}const l=(0,o.forwardRef)(e)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(u,a,t)=>{t.d(a,{Z:()=>s});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(e.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/icon-tooltip/stories/style.scss":(u,a,t)=>{t.d(a,{Z:()=>i});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=t.n(o),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=t.n(l),r=s()(e());r.push([u.id,".tooltip-wrapper-anchor{position:absolute;top:0;left:0;width:64px;height:64px}.tooltip-wrapper-anchor .icon-tooltip-wrapper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-wrapper .icon-tooltip-title{font-size:var(--font-title-small);font-weight:500;margin-bottom:16px}.tooltip-wrapper-anchor .icon-tooltip-helper{width:100%;height:100%}.tooltip-wrapper-anchor .icon-tooltip-content{font-size:var(--font-body)}.tooltip-wrapper-anchor .tooltip-actions{display:flex;align-items:center;justify-content:space-between;color:var(--jp-gray-60);margin-top:24px}",""]);const i=r}}]);})();
