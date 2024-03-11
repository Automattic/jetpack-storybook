"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5636],{"../components/components/upsell-banner/stories/index.stories.tsx":(v,c,e)=>{var k,x,T,B,R,P,j,z,W,U,C,V;e.r(c),e.d(c,{CompleteBanner:()=>a,WithoutIcon:()=>l,WithoutPrimaryBtn:()=>t,WithoutSecondaryBtn:()=>d,__namedExportsOrder:()=>A,default:()=>h});var p=e("../components/components/button/index.tsx"),m=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/card/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/card-body/component.js"),y=e("../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(g),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/upsell-banner/style.scss"),S={};S.insert="head",S.singleton=!1;var G=M()(f.Z,S);const Z=f.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const w=s=>{const{icon:o,title:O,description:L,primaryCtaLabel:E,primaryCtaURL:I,primaryCtaIsExternalLink:H,primaryCtaOnClick:X,secondaryCtaLabel:K,secondaryCtaURL:Y,secondaryCtaIsExternalLink:q,secondaryCtaOnClick:D}=s;return(0,n.jsx)(m.C,{isRounded:!0,size:"large",children:(0,n.jsxs)(_.Z,{className:"upsell-banner",size:"large",children:[o&&(0,n.jsx)("div",{className:"upsell-banner--icon",children:(0,n.jsx)("img",{src:o,alt:""})}),(0,n.jsxs)("div",{className:"upsell-banner--content",children:[(0,n.jsxs)("div",{className:"upsell-banner--content-info",children:[(0,n.jsx)("h3",{children:O}),(0,n.jsx)("p",{children:(0,y.Z)(L,{br:(0,n.jsx)("br",{})})})]}),(0,n.jsxs)("div",{className:"upsell-banner--content-cta",children:[K&&Y&&(0,n.jsx)(p.Z,{className:"upsell-banner--content-cta-button secondary",href:Y,onClick:D!=null?D:void 0,isExternalLink:q,children:K}),E&&I&&(0,n.jsx)(p.Z,{className:"upsell-banner--content-cta-button primary",href:I,onClick:X!=null?X:void 0,isExternalLink:H,children:E})]})]})]})})};w.displayName="UpsellBanner";const N=w,r=e.p+"static/media/jetpack-manage.3a7ecaa6.svg";var u=`import UpsellBanner from '..';
import logoSample from './jetpack-manage.svg';

export default {
	title: 'JS Packages/Components/Upsell Banner',
	component: UpsellBanner,
	parameters: {
		layout: 'centered',
	},
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
`,J={CompleteBanner:{startLoc:{col:30,line:38},endLoc:{col:1,line:45},startBody:{col:30,line:38},endBody:{col:1,line:45}},WithoutIcon:{startLoc:{col:27,line:48},endLoc:{col:1,line:55},startBody:{col:27,line:48},endBody:{col:1,line:55}},WithoutPrimaryBtn:{startLoc:{col:33,line:58},endLoc:{col:1,line:65},startBody:{col:33,line:58},endBody:{col:1,line:65}},WithoutSecondaryBtn:{startLoc:{col:35,line:68},endLoc:{col:1,line:75},startBody:{col:35,line:68},endBody:{col:1,line:75}}};const h={title:"JS Packages/Components/Upsell Banner",component:N,parameters:{storySource:{source:`import UpsellBanner from '..';
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


export const CompleteBanner = args => {
	const props = {
		showIcon: true,
		showSecondary: true,
		showPrimary: true,
	};
	return <BannerTemplate { ...props } />;
};


export const WithoutIcon = args => {
	const props = {
		showIcon: false,
		showSecondary: true,
		showPrimary: true,
	};
	return <BannerTemplate { ...props } />;
};


export const WithoutPrimaryBtn = args => {
	const props = {
		showIcon: true,
		showSecondary: true,
		showPrimary: false,
	};
	return <BannerTemplate { ...props } />;
};


export const WithoutSecondaryBtn = args => {
	const props = {
		showIcon: true,
		showSecondary: false,
		showPrimary: true,
	};
	return <BannerTemplate { ...props } />;
};
`,locationsMap:{"complete-banner":{startLoc:{col:30,line:38},endLoc:{col:1,line:45},startBody:{col:30,line:38},endBody:{col:1,line:45}},"without-icon":{startLoc:{col:27,line:48},endLoc:{col:1,line:55},startBody:{col:27,line:48},endBody:{col:1,line:55}},"without-primary-btn":{startLoc:{col:33,line:58},endLoc:{col:1,line:65},startBody:{col:33,line:58},endBody:{col:1,line:65}},"without-secondary-btn":{startLoc:{col:35,line:68},endLoc:{col:1,line:75},startBody:{col:35,line:68},endBody:{col:1,line:75}}}},layout:"centered"}},b=s=>{const o="Learn more",O="my-jetpack-jetpack-manage-learn-more",L="Manage sites",E="my-jetpack-jetpack-manage-dashboard";return(0,n.jsx)(N,{icon:s.showIcon?r:null,title:"Jetpack Manage",description:"Jetpack Manage has the tools you need to manage multiple WordPress sites. Monitor site security, performance, and traffic, and get alerted if a site needs attention. Plus, get bulk discounts.",secondaryCtaLabel:s.showSecondary?o:null,secondaryCtaURL:s.showSecondary?O:null,secondaryCtaIsExternalLink:!0,primaryCtaLabel:s.showPrimary?L:null,primaryCtaURL:s.showPrimary?E:null,primaryCtaIsExternalLink:!0})};b.displayName="BannerTemplate";const a=s=>{const o={showIcon:!0,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(b,{...o})};a.displayName="CompleteBanner";const l=s=>{const o={showIcon:!1,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(b,{...o})};l.displayName="WithoutIcon";const t=s=>{const o={showIcon:!0,showSecondary:!0,showPrimary:!1};return(0,n.jsx)(b,{...o})};t.displayName="WithoutPrimaryBtn";const d=s=>{const o={showIcon:!0,showSecondary:!1,showPrimary:!0};return(0,n.jsx)(b,{...o})};d.displayName="WithoutSecondaryBtn",a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}},l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const props = {
    showIcon: false,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}},t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: false
  };
  return <BannerTemplate {...props} />;
}`,...(W=(z=t.parameters)==null?void 0:z.docs)==null?void 0:W.source}}},d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: false,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const A=["CompleteBanner","WithoutIcon","WithoutPrimaryBtn","WithoutSecondaryBtn"];try{a.displayName="CompleteBanner",a.__docgenInfo={description:"",displayName:"CompleteBanner",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"]={docgenInfo:a.__docgenInfo,name:"CompleteBanner",path:"../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"})}catch(s){}try{l.displayName="WithoutIcon",l.__docgenInfo={description:"",displayName:"WithoutIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"]={docgenInfo:l.__docgenInfo,name:"WithoutIcon",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"})}catch(s){}try{t.displayName="WithoutPrimaryBtn",t.__docgenInfo={description:"",displayName:"WithoutPrimaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"]={docgenInfo:t.__docgenInfo,name:"WithoutPrimaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"})}catch(s){}try{d.displayName="WithoutSecondaryBtn",d.__docgenInfo={description:"",displayName:"WithoutSecondaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"]={docgenInfo:d.__docgenInfo,name:"WithoutSecondaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"})}catch(s){}},"../components/components/button/index.tsx":(v,c,e)=>{e.d(c,{Z:()=>b});var p=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),M=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=e.n(M),S=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),G=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(G),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),w={};w.insert="head",w.singleton=!1;var N=Z()(n.Z,w);const r=n.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const J=y.__,h=(0,S.forwardRef)((a,l)=>{var E,I;const{children:t,variant:d="primary",size:A="normal",weight:k="bold",icon:x,iconSize:T,disabled:B,isDestructive:R,isLoading:P,isExternalLink:j,className:z,text:W,fullWidth:U,...C}=a,V=f()(r.button,z,{[r.normal]:A==="normal",[r.small]:A==="small",[r.icon]:!!x,[r.loading]:P,[r.regular]:k==="regular",[r["full-width"]]:U,[r["is-icon-button"]]:!!x&&!t});C.ref=l;const s=A==="normal"?20:16,o=j&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{size:s,icon:g.Z,className:r["external-icon"]}),(0,u.jsx)(p.Z,{as:"span",children:J("(opens in a new tab)","jetpack")})]}),O=j?"_blank":void 0,L=(t==null?void 0:t[0])&&t[0]!==null&&((I=(E=t==null?void 0:t[0])==null?void 0:E.props)==null?void 0:I.className)!=="components-tooltip";return(0,u.jsxs)(m.ZP,{target:O,variant:d,className:f()(V,{"has-text":!!x&&L}),icon:j?void 0:x,iconSize:T,disabled:B,"aria-disabled":B,isDestructive:R,text:W,...C,children:[P&&(0,u.jsx)(_.ZP,{}),(0,u.jsx)("span",{children:t}),o]})});h.displayName="Button";const b=h;try{h.displayName="Button",h.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:h.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(a){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(v,c,e)=>{e.d(c,{Z:()=>g});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(p),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),y=e.n(_),i=y()(m());i.push([v.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),i.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const g=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/upsell-banner/style.scss":(v,c,e)=>{e.d(c,{Z:()=>g});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(p),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),y=e.n(_),i=y()(m());i.push([v.id,".components-surface.components-card{border-radius:var(--jp-border-radius-rna)}.upsell-banner{display:flex;flex-direction:column;background:#f9f9f6;background:linear-gradient(133deg, rgb(206, 217, 242) 0%, rgb(249, 249, 246) 10%, rgb(249, 249, 246) 80%, rgb(245, 230, 179) 100%)}@media screen and (min-width: 660px){.upsell-banner{flex-direction:row}}.upsell-banner.components-card__body.components-card-body{border-radius:var(--jp-border-radius-rna);padding:36px}.upsell-banner .upsell-banner--icon{display:flex;align-items:flex-start;margin-bottom:16px;margin-right:0;margin-top:16px}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--icon{align-items:center;margin-bottom:0;margin-right:28px;margin-top:0}}.upsell-banner .upsell-banner--content{display:flex;flex-direction:column;flex:1;justify-content:space-between}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content{flex-direction:row}}.upsell-banner .upsell-banner--content .upsell-banner--content-info{display:flex;flex-direction:column}.upsell-banner .upsell-banner--content .upsell-banner--content-info h3{font-size:1.5rem;line-height:32px;font-weight:500;margin:0}.upsell-banner .upsell-banner--content .upsell-banner--content-info p{font-size:1rem;margin:8px 0 0 0}.upsell-banner .upsell-banner--content .upsell-banner--content-cta{display:flex;flex-direction:row;align-items:center;margin-top:16px;margin-left:0}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content .upsell-banner--content-cta{margin-top:0;margin-left:16px}}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button{white-space:nowrap;box-shadow:inset 0 0 0 1.5px #000;font-weight:normal;padding:8px 16px}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.secondary{background-color:var(--jp-white);color:var(--jp-black)}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.primary{margin-left:8px}",""]);const g=i}}]);})();
