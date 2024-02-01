"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5636],{"../components/components/upsell-banner/stories/index.stories.tsx":(w,p,e)=>{var f,P,v,x,C,O,L,S,k,I,T,R;e.r(p),e.d(p,{CompleteBanner:()=>d,WithoutIcon:()=>r,WithoutPrimaryBtn:()=>i,WithoutSecondaryBtn:()=>a,__namedExportsOrder:()=>N,default:()=>M});var u=e("../components/components/button/index.tsx"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/card/component.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/card-body/component.js"),g=e("../../../node_modules/.pnpm/@wordpress+element@5.27.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(m),A=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/upsell-banner/style.scss"),j={};j.insert="head",j.singleton=!1;var U=W()(A.Z,j);const B=A.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=t=>{const{icon:o,title:E,description:X,primaryCtaLabel:z,primaryCtaURL:J,primaryCtaIsExternalLink:H,primaryCtaOnClick:D,secondaryCtaLabel:K,secondaryCtaURL:Y,secondaryCtaIsExternalLink:q,secondaryCtaOnClick:G}=t;return(0,n.jsx)(_.C,{isRounded:!0,size:"large",children:(0,n.jsxs)(y.Z,{className:"upsell-banner",size:"large",children:[o&&(0,n.jsx)("div",{className:"upsell-banner--icon",children:(0,n.jsx)("img",{src:o,alt:""})}),(0,n.jsxs)("div",{className:"upsell-banner--content",children:[(0,n.jsxs)("div",{className:"upsell-banner--content-info",children:[(0,n.jsx)("h3",{children:E}),(0,n.jsx)("p",{children:(0,g.Z)(X,{br:(0,n.jsx)("br",{})})})]}),(0,n.jsxs)("div",{className:"upsell-banner--content-cta",children:[K&&Y&&(0,n.jsx)(u.Z,{className:"upsell-banner--content-cta-button secondary",href:Y,onClick:G!=null?G:void 0,isExternalLink:q,children:K}),z&&J&&(0,n.jsx)(u.Z,{className:"upsell-banner--content-cta-button primary",href:J,onClick:D!=null?D:void 0,isExternalLink:H,children:z})]})]})]})})};l.displayName="UpsellBanner";const h=l,b=e.p+"static/media/jetpack-manage.3a7ecaa6.svg";var Z=`import UpsellBanner from '..';
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
`,V={CompleteBanner:{startLoc:{col:30,line:38},endLoc:{col:1,line:45},startBody:{col:30,line:38},endBody:{col:1,line:45}},WithoutIcon:{startLoc:{col:27,line:48},endLoc:{col:1,line:55},startBody:{col:27,line:48},endBody:{col:1,line:55}},WithoutPrimaryBtn:{startLoc:{col:33,line:58},endLoc:{col:1,line:65},startBody:{col:33,line:58},endBody:{col:1,line:65}},WithoutSecondaryBtn:{startLoc:{col:35,line:68},endLoc:{col:1,line:75},startBody:{col:35,line:68},endBody:{col:1,line:75}}};const M={title:"JS Packages/Components/Upsell Banner",component:h,parameters:{storySource:{source:`import UpsellBanner from '..';
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
`,locationsMap:{"complete-banner":{startLoc:{col:30,line:38},endLoc:{col:1,line:45},startBody:{col:30,line:38},endBody:{col:1,line:45}},"without-icon":{startLoc:{col:27,line:48},endLoc:{col:1,line:55},startBody:{col:27,line:48},endBody:{col:1,line:55}},"without-primary-btn":{startLoc:{col:33,line:58},endLoc:{col:1,line:65},startBody:{col:33,line:58},endBody:{col:1,line:65}},"without-secondary-btn":{startLoc:{col:35,line:68},endLoc:{col:1,line:75},startBody:{col:35,line:68},endBody:{col:1,line:75}}}},layout:"centered"}},s=t=>{const o="Learn more",E="my-jetpack-jetpack-manage-learn-more",X="Manage sites",z="my-jetpack-jetpack-manage-dashboard";return(0,n.jsx)(h,{icon:t.showIcon?b:null,title:"Jetpack Manage",description:"Jetpack Manage has the tools you need to manage multiple WordPress sites. Monitor site security, performance, and traffic, and get alerted if a site needs attention. Plus, get bulk discounts.",secondaryCtaLabel:t.showSecondary?o:null,secondaryCtaURL:t.showSecondary?E:null,secondaryCtaIsExternalLink:!0,primaryCtaLabel:t.showPrimary?X:null,primaryCtaURL:t.showPrimary?z:null,primaryCtaIsExternalLink:!0})};s.displayName="BannerTemplate";const d=t=>{const o={showIcon:!0,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(s,{...o})};d.displayName="CompleteBanner";const r=t=>{const o={showIcon:!1,showSecondary:!0,showPrimary:!0};return(0,n.jsx)(s,{...o})};r.displayName="WithoutIcon";const i=t=>{const o={showIcon:!0,showSecondary:!0,showPrimary:!1};return(0,n.jsx)(s,{...o})};i.displayName="WithoutPrimaryBtn";const a=t=>{const o={showIcon:!0,showSecondary:!1,showPrimary:!0};return(0,n.jsx)(s,{...o})};a.displayName="WithoutSecondaryBtn",d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...(v=(P=d.parameters)==null?void 0:P.docs)==null?void 0:v.source}}},r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const props = {
    showIcon: false,
    showSecondary: true,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...(O=(C=r.parameters)==null?void 0:C.docs)==null?void 0:O.source}}},i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: true,
    showPrimary: false
  };
  return <BannerTemplate {...props} />;
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}},a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const props = {
    showIcon: true,
    showSecondary: false,
    showPrimary: true
  };
  return <BannerTemplate {...props} />;
}`,...(R=(T=a.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const N=["CompleteBanner","WithoutIcon","WithoutPrimaryBtn","WithoutSecondaryBtn"];try{d.displayName="CompleteBanner",d.__docgenInfo={description:"",displayName:"CompleteBanner",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"]={docgenInfo:d.__docgenInfo,name:"CompleteBanner",path:"../components/components/upsell-banner/stories/index.stories.tsx#CompleteBanner"})}catch(t){}try{r.displayName="WithoutIcon",r.__docgenInfo={description:"",displayName:"WithoutIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"]={docgenInfo:r.__docgenInfo,name:"WithoutIcon",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutIcon"})}catch(t){}try{i.displayName="WithoutPrimaryBtn",i.__docgenInfo={description:"",displayName:"WithoutPrimaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"]={docgenInfo:i.__docgenInfo,name:"WithoutPrimaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutPrimaryBtn"})}catch(t){}try{a.displayName="WithoutSecondaryBtn",a.__docgenInfo={description:"",displayName:"WithoutSecondaryBtn",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"]={docgenInfo:a.__docgenInfo,name:"WithoutSecondaryBtn",path:"../components/components/upsell-banner/stories/index.stories.tsx#WithoutSecondaryBtn"})}catch(t){}},"../components/components/button/index.tsx":(w,p,e)=>{e.d(p,{Z:()=>Z});var u=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.16.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(c),W=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(A),U=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),B={};B.insert="head",B.singleton=!1;var n=j()(U.Z,B);const l=U.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=(0,W.forwardRef)((V,M)=>{var o,E;const{children:s,variant:d="primary",size:r="normal",weight:i="bold",icon:a,iconSize:N,disabled:f,isDestructive:P,isLoading:v,isExternalLink:x,className:C,text:O,fullWidth:L,...S}=V,k=m()(l.button,C,{[l.normal]:r==="normal",[l.small]:r==="small",[l.icon]:!!a,[l.loading]:v,[l.regular]:i==="regular",[l["full-width"]]:L,[l["is-icon-button"]]:!!a&&!s});S.ref=M;const I=r==="normal"?20:16,T=x&&(0,h.jsx)(y.Z,{size:I,icon:g.Z,className:l["external-icon"]}),R=x?"_blank":void 0,t=(s==null?void 0:s[0])&&s[0]!==null&&((E=(o=s==null?void 0:s[0])==null?void 0:o.props)==null?void 0:E.className)!=="components-tooltip";return(0,h.jsxs)(u.ZP,{target:R,variant:d,className:m()(k,{"has-text":!!a&&t}),icon:x?void 0:a,iconSize:N,disabled:f,"aria-disabled":f,isDestructive:P,text:O,...S,children:[v&&(0,h.jsx)(_.ZP,{}),(0,h.jsx)("span",{children:s}),T]})});b.displayName="Button";const Z=b;try{b.displayName="Button",b.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(V){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(w,p,e)=>{e.d(p,{Z:()=>m});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(u),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(y),c=g()(_());c.push([w.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),c.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const m=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/upsell-banner/style.scss":(w,p,e)=>{e.d(p,{Z:()=>m});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(u),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(y),c=g()(_());c.push([w.id,".components-surface.components-card{border-radius:var(--jp-border-radius-rna)}.upsell-banner{display:flex;flex-direction:column;background:#f9f9f6;background:linear-gradient(133deg, rgb(206, 217, 242) 0%, rgb(249, 249, 246) 10%, rgb(249, 249, 246) 80%, rgb(245, 230, 179) 100%)}@media screen and (min-width: 660px){.upsell-banner{flex-direction:row}}.upsell-banner.components-card__body.components-card-body{border-radius:var(--jp-border-radius-rna);padding:36px}.upsell-banner .upsell-banner--icon{display:flex;align-items:flex-start;margin-bottom:16px;margin-right:0;margin-top:16px}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--icon{align-items:center;margin-bottom:0;margin-right:28px;margin-top:0}}.upsell-banner .upsell-banner--content{display:flex;flex-direction:column;flex:1;justify-content:space-between}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content{flex-direction:row}}.upsell-banner .upsell-banner--content .upsell-banner--content-info{display:flex;flex-direction:column}.upsell-banner .upsell-banner--content .upsell-banner--content-info h3{font-size:1.5rem;line-height:32px;font-weight:500;margin:0}.upsell-banner .upsell-banner--content .upsell-banner--content-info p{font-size:1rem;margin:8px 0 0 0}.upsell-banner .upsell-banner--content .upsell-banner--content-cta{display:flex;flex-direction:row;align-items:center;margin-top:16px;margin-left:0}@media screen and (min-width: 660px){.upsell-banner .upsell-banner--content .upsell-banner--content-cta{margin-top:0;margin-left:16px}}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button{white-space:nowrap;box-shadow:inset 0 0 0 1.5px #000;font-weight:normal;padding:8px 16px}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.secondary{background-color:var(--jp-white);color:var(--jp-black)}.upsell-banner .upsell-banner--content .upsell-banner--content-cta .upsell-banner--content-cta-button.primary{margin-left:8px}",""]);const m=c}}]);})();
