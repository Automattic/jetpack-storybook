"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2240],{"../components/components/upsell-banner/stories/index.stories.tsx":(x,c,e)=>{e.r(c),e.d(c,{CompleteBanner:()=>r,WithoutIcon:()=>d,WithoutPrimaryBtn:()=>o,WithoutSecondaryBtn:()=>i,__namedExportsOrder:()=>w,default:()=>b});var m=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/card/card/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/card/card-body/component.js"),y=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),p=e("../components/components/button/index.tsx"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(l),E=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/upsell-banner/style.scss"),f={};f.insert="head",f.singleton=!1;var R=g()(E.A,f);const U=E.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=s=>{const{icon:t,title:O,description:j,primaryCtaLabel:A,primaryCtaURL:C,primaryCtaIsExternalLink:v,primaryCtaOnClick:I,secondaryCtaLabel:B,secondaryCtaURL:L,secondaryCtaIsExternalLink:P,secondaryCtaOnClick:T}=s;return(0,n.jsx)(m.A,{isRounded:!0,size:"large",children:(0,n.jsxs)(_.A,{className:"upsell-banner",size:"large",children:[t&&(0,n.jsx)("div",{className:"upsell-banner--icon",children:(0,n.jsx)("img",{src:t,alt:""})}),(0,n.jsxs)("div",{className:"upsell-banner--content",children:[(0,n.jsxs)("div",{className:"upsell-banner--content-info",children:[(0,n.jsx)("h3",{children:O}),(0,n.jsx)("p",{children:(0,y.A)(j,{br:(0,n.jsx)("br",{})})})]}),(0,n.jsxs)("div",{className:"upsell-banner--content-cta",children:[B&&L&&(0,n.jsx)(p.A,{className:"upsell-banner--content-cta-button secondary",href:L,onClick:T??void 0,isExternalLink:P,children:B}),A&&C&&(0,n.jsx)(p.A,{className:"upsell-banner--content-cta-button primary",href:C,onClick:I??void 0,isExternalLink:v,children:A})]})]})]})})};try{upsellbanner.displayName="upsellbanner",upsellbanner.__docgenInfo={description:`Upsell banner component.

- The primary CTA is the second button, at the right position.
- The secondary CTA is the first button, at the left position.`,displayName:"upsellbanner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryCtaLabel:{defaultValue:null,description:"",name:"primaryCtaLabel",required:!1,type:{name:"string"}},primaryCtaURL:{defaultValue:null,description:"",name:"primaryCtaURL",required:!1,type:{name:"string"}},primaryCtaIsExternalLink:{defaultValue:null,description:"",name:"primaryCtaIsExternalLink",required:!1,type:{name:"boolean"}},primaryCtaOnClick:{defaultValue:null,description:"",name:"primaryCtaOnClick",required:!1,type:{name:"() => void"}},secondaryCtaLabel:{defaultValue:null,description:"",name:"secondaryCtaLabel",required:!1,type:{name:"string"}},secondaryCtaURL:{defaultValue:null,description:"",name:"secondaryCtaURL",required:!1,type:{name:"string"}},secondaryCtaIsExternalLink:{defaultValue:null,description:"",name:"secondaryCtaIsExternalLink",required:!1,type:{name:"boolean"}},secondaryCtaOnClick:{defaultValue:null,description:"",name:"secondaryCtaOnClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/index.tsx#upsellbanner"]={docgenInfo:upsellbanner.__docgenInfo,name:"upsellbanner",path:"../components/components/upsell-banner/index.tsx#upsellbanner"})}catch{}const a=e.p+"static/media/jetpack-manage.3a7ecaa6.svg";var u=`import UpsellBanner from '../index.tsx';
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
`,V={CompleteBanner:{startLoc:{col:30,line:33},endLoc:{col:1,line:42},startBody:{col:30,line:33},endBody:{col:1,line:42}},WithoutIcon:{startLoc:{col:27,line:45},endLoc:{col:1,line:54},startBody:{col:27,line:45},endBody:{col:1,line:54}},WithoutPrimaryBtn:{startLoc:{col:33,line:57},endLoc:{col:1,line:66},startBody:{col:33,line:57},endBody:{col:1,line:66}},WithoutSecondaryBtn:{startLoc:{col:35,line:69},endLoc:{col:1,line:78},startBody:{col:35,line:69},endBody:{col:1,line:78}}};const b={title:"JS Packages/Components/Upsell Banner",component:k,parameters:{storySource:{source:`import UpsellBanner from '../index.tsx';
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
};`,locationsMap:{"complete-banner":{startLoc:{col:30,line:33},endLoc:{col:1,line:42},startBody:{col:30,line:33},endBody:{col:1,line:42}},"without-icon":{startLoc:{col:27,line:45},endLoc:{col:1,line:54},startBody:{col:27,line:45},endBody:{col:1,line:54}},"without-primary-btn":{startLoc:{col:33,line:57},endLoc:{col:1,line:66},startBody:{col:33,line:57},endBody:{col:1,line:66}},"without-secondary-btn":{startLoc:{col:35,line:69},endLoc:{col:1,line:78},startBody:{col:35,line:69},endBody:{col:1,line:78}}}},layout:"centered"}},h=s=>(0,n.jsx)(k,{icon:s.showIcon?a:null,title:"Jetpack Manage",description:"Jetpack Manage has the tools you need to manage multiple WordPress sites. Monitor site security, performance, and traffic, and get alerted if a site needs attention. Plus, get bulk discounts.",secondaryCtaLabel:s.showSecondary?"Learn more":null,secondaryCtaURL:s.showSecondary?"my-jetpack-jetpack-manage-learn-more":null,secondaryCtaIsExternalLink:!0,primaryCtaLabel:s.showPrimary?"Manage sites":null,primaryCtaURL:s.showPrimary?"my-jetpack-jetpack-manage-dashboard":null,primaryCtaIsExternalLink:!0}),r=s=>{const t={showIcon:!0,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(h,{...t})},d=s=>{const t={showIcon:!1,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(h,{...t})},o=s=>{const t={showIcon:!0,showSecondary:!0,showPrimary:!1};return(0,n.jsx)(h,{...t})},i=s=>{const t={showIcon:!0,showSecondary:!1,showPrimary:!0};return(0,n.jsx)(h,{...t})},w=["CompleteBanner","WithoutIcon","WithoutPrimaryBtn","WithoutSecondaryBtn"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...r.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: false,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...d.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: false
  };
  return <BannerTemplate {...props} />;
}`,...o.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: false,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...i.parameters?.docs?.source}}};try{r.displayName="CompleteBanner",r.__docgenInfo={description:"",displayName:"CompleteBanner",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"]={docgenInfo:r.__docgenInfo,name:"CompleteBanner",path:"../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"})}catch{}try{d.displayName="WithoutIcon",d.__docgenInfo={description:"",displayName:"WithoutIcon",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"]={docgenInfo:d.__docgenInfo,name:"WithoutIcon",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"})}catch{}try{o.displayName="WithoutPrimaryBtn",o.__docgenInfo={description:"",displayName:"WithoutPrimaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"]={docgenInfo:o.__docgenInfo,name:"WithoutPrimaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"})}catch{}try{i.displayName="WithoutSecondaryBtn",i.__docgenInfo={description:"",displayName:"WithoutSecondaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"]={docgenInfo:i.__docgenInfo,name:"WithoutSecondaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"})}catch{}},"../components/components/button/index.tsx":(x,c,e)=>{e.d(c,{A:()=>h});var m=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(R),n=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/button/style.module.scss"),S={};S.insert="head",S.singleton=!1;var k=U()(n.A,S);const a=n.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V=p.__,b=(0,f.forwardRef)((r,d)=>{const{children:o,variant:i="primary",size:w="normal",weight:s="bold",icon:t,iconSize:O,disabled:j,isDestructive:A,isLoading:C,isExternalLink:v,className:I,text:B,fullWidth:L,...P}=r,T=(0,E.A)(a.button,I,{[a.normal]:w==="normal",[a.small]:w==="small",[a.icon]:!!t,[a.loading]:C,[a.regular]:s==="regular",[a["full-width"]]:L,[a["is-icon-button"]]:!!t&&!o});P.ref=d;const z=w==="normal"?20:16,W=v&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.A,{size:z,icon:g.A,className:a["external-icon"]}),(0,u.jsx)(m.A,{as:"span",children:V("(opens in a new tab)","jetpack-components")})]}),M=v?"_blank":void 0,N=o?.[0]&&o[0]!==null&&o?.[0]?.props?.className!=="components-tooltip";return(0,u.jsxs)(_.Ay,{target:M,variant:i,className:(0,E.A)(T,{"has-text":!!t&&N}),icon:v?void 0:t,iconSize:O,disabled:j,"aria-disabled":j,isDestructive:A,text:B,...P,children:[C&&(0,u.jsx)(y.Ay,{}),(0,u.jsx)("span",{children:o}),W]})});b.displayName="Button";const h=b;try{b.displayName="Button",b.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/button/style.module.scss":(x,c,e)=>{e.d(c,{A:()=>g});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(m),y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(y),l=p()(_());l.push([x.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),l.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const g=l},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/upsell-banner/style.scss":(x,c,e)=>{e.d(c,{A:()=>g});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(m),y=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(y),l=p()(_());l.push([x.id,".components-surface.components-card{border-radius:var(--jp-border-radius-rna)}.upsell-banner{display:flex;flex-direction:column;background:#f9f9f6;background:linear-gradient(133deg, rgb(206, 217, 242) 0%, rgb(249, 249, 246) 10%, rgb(249, 249, 246) 80%, rgb(245, 230, 179) 100%)}@media screen and (min-width: 660px){.upsell-banner{flex-direction:row}}.upsell-banner.components-card__body.components-card-body{border-radius:var(--jp-border-radius-rna);padding:36px}.upsell-banner .upsell-banner--icon{display:flex;align-items:flex-start;margin-bottom:16px;margin-right:0;margin-top:16px}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--icon{align-items:center;margin-bottom:0;margin-right:28px;margin-top:0}}.upsell-banner .upsell-banner--content{display:flex;flex-direction:column;flex:1;justify-content:space-between}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content{flex-direction:row}}.upsell-banner .upsell-banner--content .upsell-banner--content-info{display:flex;flex-direction:column}.upsell-banner .upsell-banner--content .upsell-banner--content-info h3{font-size:1.5rem;line-height:32px;font-weight:500;margin:0}.upsell-banner .upsell-banner--content .upsell-banner--content-info p{font-size:1rem;margin:8px 0 0 0}.upsell-banner .upsell-banner--content .upsell-banner--content-cta{display:flex;flex-direction:row;align-items:center;margin-top:16px;margin-left:0}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content .upsell-banner--content-cta{margin-top:0;margin-left:16px}}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button{white-space:nowrap;box-shadow:inset 0 0 0 1.5px #000;font-weight:400;padding:8px 16px}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.secondary{background-color:var(--jp-white);color:var(--jp-black)}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.primary{margin-left:8px}",""]);const g=l}}]);
