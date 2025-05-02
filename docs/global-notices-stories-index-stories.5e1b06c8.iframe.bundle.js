"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2333],{"../components/components/global-notices/stories/index.stories.tsx":(v,u,e)=>{e.r(u),e.d(u,{_Default:()=>c,__namedExportsOrder:()=>y,default:()=>A});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../components/components/button/index.tsx"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/snackbar/list.js"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(b),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/global-notices/styles.module.scss"),g={};g.insert="head",g.singleton=!1;var O=i()(p.A,g);const h=p.A.locals||{};var N=e("../../../node_modules/.pnpm/@wordpress+data@10.22.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),j=e("../../../node_modules/.pnpm/@wordpress+data@10.22.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+notices@5.22.0_react@18.3.1/node_modules/@wordpress/notices/build-module/index.js");function f(){const o=(0,N.A)(E.M),_=(0,j.A)(t=>t(E.M).getNotices(),[]);return{...o,createNotice(t,n,l){return o.createNotice(t,n,{type:"snackbar",...l})},createErrorNotice(t,n){return o.createErrorNotice(t,{type:"snackbar",...n})},createInfoNotice(t,n){return o.createInfoNotice(t,{type:"snackbar",...n})},createSuccessNotice(t,n){return o.createSuccessNotice(t,{type:"snackbar",...n})},createWarningNotice(t,n){return o.createWarningNotice(t,{type:"snackbar",...n})},getNotices:()=>_}}var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({maxVisibleNotices:o=3}){const{getNotices:_,removeNotice:t}=f(),n=_().filter(({type:l})=>l==="snackbar").slice(-o);return(0,s.jsx)(m.A,{notices:n,className:h["global-notices"],onRemove:t})}try{a.displayName="GlobalNotices",a.__docgenInfo={description:"Renders the global notices.",displayName:"GlobalNotices",props:{maxVisibleNotices:{defaultValue:{value:"3"},description:"",name:"maxVisibleNotices",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/global-notices/global-notices.tsx#GlobalNotices"]={docgenInfo:a.__docgenInfo,name:"GlobalNotices",path:"../components/components/global-notices/global-notices.tsx#GlobalNotices"})}catch{}var C=`import { useCallback } from 'react';
import Button from '../../button/index.tsx';
import { GlobalNotices, useGlobalNotices } from '../index.ts';
import type { Meta } from '@storybook/react';

const meta: Meta< typeof GlobalNotices > = {
	title: 'JS Packages/Components/GlobalNotices',
	component: GlobalNotices,
	decorators: [ story => <div style={ { padding: '3rem' } }>{ story() }</div> ],
};

export default meta;

const Template = args => {
	const { createErrorNotice, createSuccessNotice, createInfoNotice, createWarningNotice } =
		useGlobalNotices();

	return (
		<div>
			<GlobalNotices { ...args } />
			<div style={ { display: 'flex', alignItems: 'start', gap: '1rem', flexDirection: 'column' } }>
				<Button
					onClick={ useCallback( () => {
						createSuccessNotice( 'This is a success notice' );
					}, [ createSuccessNotice ] ) }
				>
					Create Success Notice
				</Button>
				<Button
					onClick={ useCallback( () => {
						createErrorNotice( 'This is an error notice' );
					}, [ createErrorNotice ] ) }
				>
					Create Error Notice
				</Button>
				<Button
					onClick={ useCallback( () => {
						createInfoNotice( 'This is an info notice' );
					}, [ createInfoNotice ] ) }
				>
					Create Info Notice
				</Button>
				<Button
					onClick={ useCallback( () => {
						createWarningNotice( 'This is a warning notice' );
					}, [ createWarningNotice ] ) }
				>
					Create Warning Notice
				</Button>
			</div>
		</div>
	);
};

export const _Default = Template.bind( {} );
`,x={_Default:{startLoc:{col:17,line:16},endLoc:{col:1,line:56},startBody:{col:17,line:16},endBody:{col:1,line:56}}};const A={parameters:{storySource:{source:`import { useCallback } from 'react';
import Button from '../../button/index.tsx';
import { GlobalNotices, useGlobalNotices } from '../index.ts';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/GlobalNotices',
  component: GlobalNotices,
  decorators: [story => /*#__PURE__*/_jsx("div", {
    style: {
      padding: '3rem'
    },
    children: story()
  })]
};
export default meta;
const Template = args => {
  const {
    createErrorNotice,
    createSuccessNotice,
    createInfoNotice,
    createWarningNotice
  } = useGlobalNotices();
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(GlobalNotices, {
      ...args
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'start',
        gap: '1rem',
        flexDirection: 'column'
      },
      children: [/*#__PURE__*/_jsx(Button, {
        onClick: useCallback(() => {
          createSuccessNotice('This is a success notice');
        }, [createSuccessNotice]),
        children: "Create Success Notice"
      }), /*#__PURE__*/_jsx(Button, {
        onClick: useCallback(() => {
          createErrorNotice('This is an error notice');
        }, [createErrorNotice]),
        children: "Create Error Notice"
      }), /*#__PURE__*/_jsx(Button, {
        onClick: useCallback(() => {
          createInfoNotice('This is an info notice');
        }, [createInfoNotice]),
        children: "Create Info Notice"
      }), /*#__PURE__*/_jsx(Button, {
        onClick: useCallback(() => {
          createWarningNotice('This is a warning notice');
        }, [createWarningNotice]),
        children: "Create Warning Notice"
      })]
    })]
  });
};
export const _Default = Template.bind({});`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:1,line:56},startBody:{col:17,line:16},endBody:{col:1,line:56}}}}},title:"JS Packages/Components/GlobalNotices",component:a,decorators:[o=>(0,s.jsx)("div",{style:{padding:"3rem"},children:o()})]},c=(o=>{const{createErrorNotice:_,createSuccessNotice:t,createInfoNotice:n,createWarningNotice:l}=f();return(0,s.jsxs)("div",{children:[(0,s.jsx)(a,{...o}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"start",gap:"1rem",flexDirection:"column"},children:[(0,s.jsx)(d.A,{onClick:(0,r.useCallback)(()=>{t("This is a success notice")},[t]),children:"Create Success Notice"}),(0,s.jsx)(d.A,{onClick:(0,r.useCallback)(()=>{_("This is an error notice")},[_]),children:"Create Error Notice"}),(0,s.jsx)(d.A,{onClick:(0,r.useCallback)(()=>{n("This is an info notice")},[n]),children:"Create Info Notice"}),(0,s.jsx)(d.A,{onClick:(0,r.useCallback)(()=>{l("This is a warning notice")},[l]),children:"Create Warning Notice"})]})]})}).bind({}),y=["_Default"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const {
    createErrorNotice,
    createSuccessNotice,
    createInfoNotice,
    createWarningNotice
  } = useGlobalNotices();
  return <div>
            <GlobalNotices {...args} />
            <div style={{
      display: 'flex',
      alignItems: 'start',
      gap: '1rem',
      flexDirection: 'column'
    }}>
                <Button onClick={useCallback(() => {
        createSuccessNotice('This is a success notice');
      }, [createSuccessNotice])}>
                    Create Success Notice
                </Button>
                <Button onClick={useCallback(() => {
        createErrorNotice('This is an error notice');
      }, [createErrorNotice])}>
                    Create Error Notice
                </Button>
                <Button onClick={useCallback(() => {
        createInfoNotice('This is an info notice');
      }, [createInfoNotice])}>
                    Create Info Notice
                </Button>
                <Button onClick={useCallback(() => {
        createWarningNotice('This is a warning notice');
      }, [createWarningNotice])}>
                    Create Warning Notice
                </Button>
            </div>
        </div>;
}`,...c.parameters?.docs?.source}}}},"../components/components/button/index.tsx":(v,u,e)=>{e.d(u,{A:()=>w});var r=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+i18n@5.22.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),O=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(h),j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),E={};E.insert="head",E.singleton=!1;var f=N()(j.A,E);const s=j.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=b.__,x=(0,O.forwardRef)((A,P)=>{const{children:c,variant:y="primary",size:o="normal",weight:_="bold",icon:t,iconSize:n,disabled:l,isDestructive:G,isLoading:S,isExternalLink:k,className:I,text:T,fullWidth:D,...B}=A,V=(0,g.A)(s.button,I,{[s.normal]:o==="normal",[s.small]:o==="small",[s.icon]:!!t,[s.loading]:S,[s.regular]:_==="regular",[s["full-width"]]:D,[s["is-icon-button"]]:!!t&&!c});B.ref=P;const z=o==="normal"?20:16,R=k&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{size:z,icon:p.A,className:s["external-icon"]}),(0,a.jsx)(r.A,{as:"span",children:C("(opens in a new tab)","jetpack-components")})]}),L=k?"_blank":void 0,X=c?.[0]&&c[0]!==null&&c?.[0]?.props?.className!=="components-tooltip";return(0,a.jsxs)(d.Ay,{target:L,variant:y,className:(0,g.A)(V,{"has-text":!!t&&X}),icon:k?void 0:t,iconSize:n,disabled:l,"aria-disabled":l,isDestructive:G,text:T,...B,children:[S&&(0,a.jsx)(m.Ay,{}),(0,a.jsx)("span",{children:c}),R]})});x.displayName="Button";const w=x;try{x.displayName="Button",x.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:x.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(v,u,e)=>{e.d(u,{A:()=>p});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(d());i.push([v.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),i.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const p=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/global-notices/styles.module.scss":(v,u,e)=>{e.d(u,{A:()=>p});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(d());i.push([v.id,".K_OQHcuBiF34LevaDW4H.components-snackbar-list{position:fixed;inset-block-start:auto;inset-block-end:0;inset-inline:0;z-index:100001}@media(min-width: 600px){.K_OQHcuBiF34LevaDW4H.components-snackbar-list{width:auto;inset-inline:unset;inset-block-start:4rem;inset-inline-end:1rem}}@media(min-width: 782px){.K_OQHcuBiF34LevaDW4H.components-snackbar-list{inset-block-start:3rem}}",""]),i.locals={"global-notices":"K_OQHcuBiF34LevaDW4H"};const p=i}}]);
