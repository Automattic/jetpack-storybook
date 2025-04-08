"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2240],{"../components/components/upsell-banner/stories/index.stories.tsx":(w,p,e)=>{e.r(p),e.d(p,{CompleteBanner:()=>d,WithoutIcon:()=>o,WithoutPrimaryBtn:()=>c,WithoutSecondaryBtn:()=>r,__namedExportsOrder:()=>L,default:()=>O});var u=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/card/card/component.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/card/card-body/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+element@6.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../components/components/button/index.tsx"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(y),S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/upsell-banner/style.scss"),j={};j.insert="head",j.singleton=!1;var U=v()(S.A,j);const P=S.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=s=>{const{icon:t,title:A,description:C,primaryCtaLabel:x,primaryCtaURL:E,primaryCtaIsExternalLink:k,primaryCtaOnClick:I,secondaryCtaLabel:B,secondaryCtaURL:f,secondaryCtaIsExternalLink:T,secondaryCtaOnClick:R}=s;return(0,n.jsx)(u.A,{isRounded:!0,size:"large",children:(0,n.jsxs)(m.A,{className:"upsell-banner",size:"large",children:[t&&(0,n.jsx)("div",{className:"upsell-banner--icon",children:(0,n.jsx)("img",{src:t,alt:""})}),(0,n.jsxs)("div",{className:"upsell-banner--content",children:[(0,n.jsxs)("div",{className:"upsell-banner--content-info",children:[(0,n.jsx)("h3",{children:A}),(0,n.jsx)("p",{children:(0,_.A)(C,{br:(0,n.jsx)("br",{})})})]}),(0,n.jsxs)("div",{className:"upsell-banner--content-cta",children:[B&&f&&(0,n.jsx)(l.A,{className:"upsell-banner--content-cta-button secondary",href:f,onClick:R??void 0,isExternalLink:T,children:B}),x&&E&&(0,n.jsx)(l.A,{className:"upsell-banner--content-cta-button primary",href:E,onClick:I??void 0,isExternalLink:k,children:x})]})]})]})})},i=e.p+"static/media/jetpack-manage.3a7ecaa6.svg";var z=`import UpsellBanner from '../index.js';
import logoSample from './jetpack-manage.svg';

export default {
	title: 'JS Packages/Components/Upsell Banner',
	component: UpsellBanner,
	parameters: {
		layout: 'centered',
	},
};

const BannerTemplate = args => {
	// Set up the first CTA
	const secondaryCtaLabel = 'Learn more';
	const secondaryCtaUrl = 'my-jetpack-jetpack-manage-learn-more';

	// Set up the second CTA
	const primaryCtaLabel = 'Manage sites';
	const primaryCtaUrl = 'my-jetpack-jetpack-manage-dashboard';

	return (
		<UpsellBanner
			icon={ args.showIcon ? logoSample : null }
			title="Jetpack Manage"
			description="Jetpack Manage has the tools you need to manage multiple WordPress sites. Monitor site security, performance, and traffic, and get alerted if a site needs attention. Plus, get bulk discounts."
			secondaryCtaLabel={ args.showSecondary ? secondaryCtaLabel : null }
			secondaryCtaURL={ args.showSecondary ? secondaryCtaUrl : null }
			secondaryCtaIsExternalLink={ true }
			primaryCtaLabel={ args.showPrimary ? primaryCtaLabel : null }
			primaryCtaURL={ args.showPrimary ? primaryCtaUrl : null }
			primaryCtaIsExternalLink={ true }
		/>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CompleteBanner = args => {
	const props = {
		showIcon: true,
		showSecondary: true,
		showPrimary: true,
	};
	return <BannerTemplate { ...props } />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WithoutIcon = args => {
	const props = {
		showIcon: false,
		showSecondary: true,
		showPrimary: true,
	};
	return <BannerTemplate { ...props } />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WithoutPrimaryBtn = args => {
	const props = {
		showIcon: true,
		showSecondary: true,
		showPrimary: false,
	};
	return <BannerTemplate { ...props } />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WithoutSecondaryBtn = args => {
	const props = {
		showIcon: true,
		showSecondary: false,
		showPrimary: true,
	};
	return <BannerTemplate { ...props } />;
};
`,b={CompleteBanner:{startLoc:{col:30,line:33},endLoc:{col:1,line:42},startBody:{col:30,line:33},endBody:{col:1,line:42}},WithoutIcon:{startLoc:{col:27,line:45},endLoc:{col:1,line:54},startBody:{col:27,line:45},endBody:{col:1,line:54}},WithoutPrimaryBtn:{startLoc:{col:33,line:57},endLoc:{col:1,line:66},startBody:{col:33,line:57},endBody:{col:1,line:66}},WithoutSecondaryBtn:{startLoc:{col:35,line:69},endLoc:{col:1,line:78},startBody:{col:35,line:69},endBody:{col:1,line:78}}};const O={title:"JS Packages/Components/Upsell Banner",component:a,parameters:{storySource:{source:`import UpsellBanner from '../index.js';
import logoSample from './jetpack-manage.svg';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Upsell Banner',
  component: UpsellBanner,
  parameters: {
    layout: 'centered'
  }
};
const BannerTemplate = args => {
  // Set up the first CTA
  const secondaryCtaLabel = 'Learn more';
  const secondaryCtaUrl = 'my-jetpack-jetpack-manage-learn-more';

  // Set up the second CTA
  const primaryCtaLabel = 'Manage sites';
  const primaryCtaUrl = 'my-jetpack-jetpack-manage-dashboard';
  return /*#__PURE__*/_jsx(UpsellBanner, {
    icon: args.showIcon ? logoSample : null,
    title: "Jetpack Manage",
    description: "Jetpack Manage has the tools you need to manage multiple WordPress sites. Monitor site security, performance, and traffic, and get alerted if a site needs attention. Plus, get bulk discounts.",
    secondaryCtaLabel: args.showSecondary ? secondaryCtaLabel : null,
    secondaryCtaURL: args.showSecondary ? secondaryCtaUrl : null,
    secondaryCtaIsExternalLink: true,
    primaryCtaLabel: args.showPrimary ? primaryCtaLabel : null,
    primaryCtaURL: args.showPrimary ? primaryCtaUrl : null,
    primaryCtaIsExternalLink: true
  });
};


export const CompleteBanner = args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: true
  };
  return /*#__PURE__*/_jsx(BannerTemplate, {
    ...props
  });
};


export const WithoutIcon = args => {
  const props = {
    showIcon: false,
    showSecondary: true,
    showPrimary: true
  };
  return /*#__PURE__*/_jsx(BannerTemplate, {
    ...props
  });
};


export const WithoutPrimaryBtn = args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: false
  };
  return /*#__PURE__*/_jsx(BannerTemplate, {
    ...props
  });
};


export const WithoutSecondaryBtn = args => {
  const props = {
    showIcon: true,
    showSecondary: false,
    showPrimary: true
  };
  return /*#__PURE__*/_jsx(BannerTemplate, {
    ...props
  });
};`,locationsMap:{"complete-banner":{startLoc:{col:30,line:33},endLoc:{col:1,line:42},startBody:{col:30,line:33},endBody:{col:1,line:42}},"without-icon":{startLoc:{col:27,line:45},endLoc:{col:1,line:54},startBody:{col:27,line:45},endBody:{col:1,line:54}},"without-primary-btn":{startLoc:{col:33,line:57},endLoc:{col:1,line:66},startBody:{col:33,line:57},endBody:{col:1,line:66}},"without-secondary-btn":{startLoc:{col:35,line:69},endLoc:{col:1,line:78},startBody:{col:35,line:69},endBody:{col:1,line:78}}}},layout:"centered"}},g=s=>(0,n.jsx)(a,{icon:s.showIcon?i:null,title:"Jetpack Manage",description:"Jetpack Manage has the tools you need to manage multiple WordPress sites. Monitor site security, performance, and traffic, and get alerted if a site needs attention. Plus, get bulk discounts.",secondaryCtaLabel:s.showSecondary?"Learn more":null,secondaryCtaURL:s.showSecondary?"my-jetpack-jetpack-manage-learn-more":null,secondaryCtaIsExternalLink:!0,primaryCtaLabel:s.showPrimary?"Manage sites":null,primaryCtaURL:s.showPrimary?"my-jetpack-jetpack-manage-dashboard":null,primaryCtaIsExternalLink:!0}),d=s=>{const t={showIcon:!0,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(g,{...t})},o=s=>{const t={showIcon:!1,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(g,{...t})},c=s=>{const t={showIcon:!0,showSecondary:!0,showPrimary:!1};return(0,n.jsx)(g,{...t})},r=s=>{const t={showIcon:!0,showSecondary:!1,showPrimary:!0};return(0,n.jsx)(g,{...t})},L=["CompleteBanner","WithoutIcon","WithoutPrimaryBtn","WithoutSecondaryBtn"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...d.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: false,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: false
  };
  return <BannerTemplate {...props} />;
}`,...c.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: false,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...r.parameters?.docs?.source}}};try{d.displayName="CompleteBanner",d.__docgenInfo={description:"",displayName:"CompleteBanner",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"]={docgenInfo:d.__docgenInfo,name:"CompleteBanner",path:"../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"})}catch{}try{o.displayName="WithoutIcon",o.__docgenInfo={description:"",displayName:"WithoutIcon",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"]={docgenInfo:o.__docgenInfo,name:"WithoutIcon",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"})}catch{}try{c.displayName="WithoutPrimaryBtn",c.__docgenInfo={description:"",displayName:"WithoutPrimaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"]={docgenInfo:c.__docgenInfo,name:"WithoutPrimaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"})}catch{}try{r.displayName="WithoutSecondaryBtn",r.__docgenInfo={description:"",displayName:"WithoutSecondaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"]={docgenInfo:r.__docgenInfo,name:"WithoutSecondaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"})}catch{}},"../components/components/button/index.tsx":(w,p,e)=>{e.d(p,{A:()=>O});var u=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),v=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(j),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),n={};n.insert="head",n.singleton=!1;var V=U()(P.A,n);const a=P.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const z=h.__,b=(0,S.forwardRef)((g,d)=>{const{children:o,variant:c="primary",size:r="normal",weight:L="bold",icon:s,iconSize:t,disabled:A,isDestructive:C,isLoading:x,isExternalLink:E,className:k,text:I,fullWidth:B,...f}=g,T=(0,v.A)(a.button,k,{[a.normal]:r==="normal",[a.small]:r==="small",[a.icon]:!!s,[a.loading]:x,[a.regular]:L==="regular",[a["full-width"]]:B,[a["is-icon-button"]]:!!s&&!o});f.ref=d;const R=r==="normal"?20:16,W=E&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{size:R,icon:y.A,className:a["external-icon"]}),(0,i.jsx)(u.A,{as:"span",children:z("(opens in a new tab)","jetpack-components")})]}),M=E?"_blank":void 0,X=o?.[0]&&o[0]!==null&&o?.[0]?.props?.className!=="components-tooltip";return(0,i.jsxs)(m.Ay,{target:M,variant:c,className:(0,v.A)(T,{"has-text":!!s&&X}),icon:E?void 0:s,iconSize:t,disabled:A,"aria-disabled":A,isDestructive:C,text:I,...f,children:[x&&(0,i.jsx)(_.Ay,{}),(0,i.jsx)("span",{children:o}),W]})});b.displayName="Button";const O=b;try{b.displayName="Button",b.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(w,p,e)=>{e.d(p,{A:()=>y});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(u),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(_),l=h()(m());l.push([w.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),l.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const y=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/upsell-banner/style.scss":(w,p,e)=>{e.d(p,{A:()=>y});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(u),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(_),l=h()(m());l.push([w.id,".components-surface.components-card{border-radius:var(--jp-border-radius-rna)}.upsell-banner{display:flex;flex-direction:column;background:#f9f9f6;background:linear-gradient(133deg, rgb(206, 217, 242) 0%, rgb(249, 249, 246) 10%, rgb(249, 249, 246) 80%, rgb(245, 230, 179) 100%)}@media screen and (min-width: 660px){.upsell-banner{flex-direction:row}}.upsell-banner.components-card__body.components-card-body{border-radius:var(--jp-border-radius-rna);padding:36px}.upsell-banner .upsell-banner--icon{display:flex;align-items:flex-start;margin-bottom:16px;margin-right:0;margin-top:16px}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--icon{align-items:center;margin-bottom:0;margin-right:28px;margin-top:0}}.upsell-banner .upsell-banner--content{display:flex;flex-direction:column;flex:1;justify-content:space-between}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content{flex-direction:row}}.upsell-banner .upsell-banner--content .upsell-banner--content-info{display:flex;flex-direction:column}.upsell-banner .upsell-banner--content .upsell-banner--content-info h3{font-size:1.5rem;line-height:32px;font-weight:500;margin:0}.upsell-banner .upsell-banner--content .upsell-banner--content-info p{font-size:1rem;margin:8px 0 0 0}.upsell-banner .upsell-banner--content .upsell-banner--content-cta{display:flex;flex-direction:row;align-items:center;margin-top:16px;margin-left:0}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content .upsell-banner--content-cta{margin-top:0;margin-left:16px}}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button{white-space:nowrap;box-shadow:inset 0 0 0 1.5px #000;font-weight:400;padding:8px 16px}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.secondary{background-color:var(--jp-white);color:var(--jp-black)}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.primary{margin-left:8px}",""]);const y=l}}]);
