"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2333],{"../components/components/global-notices/stories/index.stories.tsx":(j,l,e)=>{e.r(l),e.d(l,{_Default:()=>b,__namedExportsOrder:()=>g,default:()=>y});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../components/components/button/index.tsx"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/snackbar/list.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(m),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/global-notices/styles.module.scss"),E={};E.insert="head",E.singleton=!1;var C=i()(u.A,E);const h=u.A.locals||{};var N=e("../../../node_modules/.pnpm/@wordpress+data@10.17.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),A=e("../../../node_modules/.pnpm/@wordpress+data@10.17.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+notices@5.17.0_react@18.3.1/node_modules/@wordpress/notices/build-module/index.js");function f(){const n=(0,N.A)(x.M),d=(0,A.A)(o=>o(x.M).getNotices(),[]);return{...n,createNotice(o,t,p){return n.createNotice(o,t,{type:"snackbar",...p})},createErrorNotice(o,t){return n.createErrorNotice(o,{type:"snackbar",...t})},createInfoNotice(o,t){return n.createInfoNotice(o,{type:"snackbar",...t})},createSuccessNotice(o,t){return n.createSuccessNotice(o,{type:"snackbar",...t})},createWarningNotice(o,t){return n.createWarningNotice(o,{type:"snackbar",...t})},getNotices:()=>d}}var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({maxVisibleNotices:n=3}){const{getNotices:d,removeNotice:o}=f(),t=d().filter(({type:p})=>p==="snackbar").slice(-n);return(0,s.jsx)(_.A,{notices:t,className:h["global-notices"],onRemove:o})}try{a.displayName="GlobalNotices",a.__docgenInfo={description:"Renders the global notices.",displayName:"GlobalNotices",props:{maxVisibleNotices:{defaultValue:{value:"3"},description:"",name:"maxVisibleNotices",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/global-notices/global-notices.tsx#GlobalNotices"]={docgenInfo:a.__docgenInfo,name:"GlobalNotices",path:"../components/components/global-notices/global-notices.tsx#GlobalNotices"})}catch{}var w=`import { useCallback } from 'react';
import Button from '../../button/index.js';
import { GlobalNotices, useGlobalNotices } from '../index.js';
import type { Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/GlobalNotices',
	component: GlobalNotices,
	decorators: [ story => <div style={ { padding: '3rem' } }>{ story() }</div> ],
} satisfies Meta< typeof GlobalNotices >;

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
`,v={_Default:{startLoc:{col:17,line:15},endLoc:{col:1,line:55},startBody:{col:17,line:15},endBody:{col:1,line:55}}};const y={parameters:{storySource:{source:`import { useCallback } from 'react';
import Button from '../../button/index.js';
import { GlobalNotices, useGlobalNotices } from '../index.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/GlobalNotices',
  component: GlobalNotices,
  decorators: [story => /*#__PURE__*/_jsx("div", {
    style: {
      padding: '3rem'
    },
    children: story()
  })]
};
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
export const _Default = Template.bind({});`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:1,line:55},startBody:{col:17,line:15},endBody:{col:1,line:55}}}}},title:"JS Packages/Components/GlobalNotices",component:a,decorators:[n=>(0,s.jsx)("div",{style:{padding:"3rem"},children:n()})]},b=(n=>{const{createErrorNotice:d,createSuccessNotice:o,createInfoNotice:t,createWarningNotice:p}=f();return(0,s.jsxs)("div",{children:[(0,s.jsx)(a,{...n}),(0,s.jsxs)("div",{style:{display:"flex",alignItems:"start",gap:"1rem",flexDirection:"column"},children:[(0,s.jsx)(r.A,{onClick:(0,c.useCallback)(()=>{o("This is a success notice")},[o]),children:"Create Success Notice"}),(0,s.jsx)(r.A,{onClick:(0,c.useCallback)(()=>{d("This is an error notice")},[d]),children:"Create Error Notice"}),(0,s.jsx)(r.A,{onClick:(0,c.useCallback)(()=>{t("This is an info notice")},[t]),children:"Create Info Notice"}),(0,s.jsx)(r.A,{onClick:(0,c.useCallback)(()=>{p("This is a warning notice")},[p]),children:"Create Warning Notice"})]})]})}).bind({}),g=["_Default"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
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
}`,...b.parameters?.docs?.source}}}},"../components/components/button/index.tsx":(j,l,e)=>{e.d(l,{A:()=>y});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(h),A=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),x={};x.insert="head",x.singleton=!1;var f=N()(A.A,x);const s=A.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const w=m.__,v=(0,C.forwardRef)((k,b)=>{const{children:g,variant:n="primary",size:d="normal",weight:o="bold",icon:t,iconSize:p,disabled:P,isDestructive:G,isLoading:S,isExternalLink:O,className:I,text:T,fullWidth:D,...B}=k,V=(0,E.A)(s.button,I,{[s.normal]:d==="normal",[s.small]:d==="small",[s.icon]:!!t,[s.loading]:S,[s.regular]:o==="regular",[s["full-width"]]:D,[s["is-icon-button"]]:!!t&&!g});B.ref=b;const z=d==="normal"?20:16,R=O&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{size:z,icon:u.A,className:s["external-icon"]}),(0,a.jsx)(c.A,{as:"span",children:w("(opens in a new tab)","jetpack-components")})]}),L=O?"_blank":void 0,X=g?.[0]&&g[0]!==null&&g?.[0]?.props?.className!=="components-tooltip";return(0,a.jsxs)(r.Ay,{target:L,variant:n,className:(0,E.A)(V,{"has-text":!!t&&X}),icon:O?void 0:t,iconSize:p,disabled:P,"aria-disabled":P,isDestructive:G,text:T,...B,children:[S&&(0,a.jsx)(_.Ay,{}),(0,a.jsx)("span",{children:g}),R]})});v.displayName="Button";const y=v;try{v.displayName="Button",v.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:v.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(j,l,e)=>{e.d(l,{A:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(_),i=m()(r());i.push([j.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),i.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const u=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/global-notices/styles.module.scss":(j,l,e)=>{e.d(l,{A:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(_),i=m()(r());i.push([j.id,".K_OQHcuBiF34LevaDW4H.components-snackbar-list{position:fixed;inset-block-start:auto;inset-block-end:0;inset-inline:0;z-index:100001}@media(min-width: 600px){.K_OQHcuBiF34LevaDW4H.components-snackbar-list{width:auto;inset-inline:unset;inset-block-start:4rem;inset-inline-end:1rem}}@media(min-width: 782px){.K_OQHcuBiF34LevaDW4H.components-snackbar-list{inset-block-start:3rem}}",""]),i.locals={"global-notices":"K_OQHcuBiF34LevaDW4H"};const u=i}}]);
