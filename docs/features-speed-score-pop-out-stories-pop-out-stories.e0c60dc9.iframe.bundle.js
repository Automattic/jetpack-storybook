"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5633],{"../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/stories/pop-out.stories.tsx":(x,i,e)=>{e.r(i),e.d(i,{__namedExportsOrder:()=>Q,_default:()=>f,default:()=>I});var g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(m),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/ui/close-button/close-button.module.scss"),E={};E.insert="head",E.singleton=!1;var G=n()(p.A,E);const R=p.A.locals||{};var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V=c.__,U=({onClick:s})=>{const d=b=>{b.preventDefault(),s()};return(0,o.jsx)("a",{href:"#",onClick:d,className:R.close,children:(0,o.jsx)("span",{className:"screen-reader-text",children:V("Dismiss","jetpack-boost")})})};try{closebutton.displayName="closebutton",closebutton.__docgenInfo={description:"",displayName:"closebutton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/ui/close-button/close-button.tsx#closebutton"]={docgenInfo:closebutton.__docgenInfo,name:"closebutton",path:"../../plugins/boost/app/assets/src/js/features/ui/close-button/close-button.tsx#closebutton"})}catch{}var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/pop-out.module.scss"),r={};r.insert="head",r.singleton=!1;var J=n()(a.A,r);const u=a.A.locals||{};var C=e("../components/tools/jp-redirect/index.ts"),v=e("../components/components/button/index.tsx"),t=e("../../../node_modules/.pnpm/zod@3.22.3/node_modules/zod/lib/index.mjs"),y=e("../react-data-sync-client/src/index.ts");const B=t.z.object({timestamp:t.z.number(),dimensions:t.z.object({desktop_overall_score:t.z.number(),mobile_overall_score:t.z.number(),desktop_cls:t.z.number(),desktop_lcp:t.z.number(),desktop_tbt:t.z.number(),mobile_cls:t.z.number(),mobile_lcp:t.z.number(),mobile_tbt:t.z.number()})}),A=t.z.object({periods:t.z.array(B),annotations:t.z.array(t.z.object({timestamp:t.z.number(),text:t.z.string()})),startDate:t.z.number(),endDate:t.z.number()}).nullable(),q=()=>{const[s]=useDataSync("jetpack_boost_ds","performance_history",A,{query:{staleTime:432e5}});return s},O=()=>{const[{data:s},{mutate:d}]=useDataSync("jetpack_boost_ds","performance_history_toggle",z.boolean());return[s,d]},W=s=>{const[{data:d},{mutate:b}]=useDataSync("jetpack_boost_ds","dismissed_alerts",z.record(z.string().min(1),z.boolean())),j=()=>{b({...d,[s]:!0})};return[d?.[s]===!0,j]};var L=e("../../plugins/boost/app/assets/src/js/lib/utils/analytics.ts");const _=c.__,T={id:"score_increase",title:_("Your site got faster","jetpack-boost"),body:(0,o.jsx)("p",{children:_("That's great! If you\u2019re happy, why not rate Boost?","jetpack-boost")}),cta:_("Rate the Plugin","jetpack-boost"),ctaLink:(0,C.A)("boost-rate-plugin")},P={id:"score_decrease",title:_("Speed score has fallen","jetpack-boost"),body:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:_("Most of the time Jetpack Boost will increase your site speed, but there may be cases where your score does not increase.","jetpack-boost")}),(0,o.jsx)("p",{children:_("Try refreshing your score, and if it doesn\u2019t help, check our guide on improving your site speed score:","jetpack-boost")})]}),cta:_("Read the guide","jetpack-boost"),ctaLink:(0,C.A)("boost-improve-site-speed-score")},h=({message:s,onClose:d,onDismiss:b,isVisible:j})=>{const D=(0,l.zh)({from:{right:"-100%"},to:{right:j?"0%":"-100%"}});return(0,o.jsx)("div",{id:"parent",className:u.wrapper,children:(0,o.jsxs)(l.CS.div,{className:u.card,style:{...D},children:[(0,o.jsx)(U,{onClick:d}),(0,o.jsx)("h3",{className:u.headline,children:s.title}),(0,o.jsx)(o.Fragment,{children:s.body}),(0,o.jsx)(v.A,{variant:"primary",href:s?.ctaLink,isExternalLink:!0,onClick:b,children:s.cta}),(0,o.jsx)(v.A,{variant:"link",size:"small",className:u["dismiss-button"],onClick:b,children:_("Do not show me again","jetpack-boost")})]})})};function S({scoreChange:s}){const d=s!==!1&&Math.abs(s)>5,b=s&&s<0?P:T,[j,D]=useDismissibleAlertState(b.id),[X,Y]=useState(!1),$=()=>Y(!0),K=s&&s>0?"up":"down";useEffect(()=>{d&&!j&&!X&&recordBoostEvent("speed_score_alert_shown",{score_direction:K})},[d,j,X,K]);const ee=()=>{recordBoostEvent("speed_score_alert_cta_clicked",{score_direction:K}),D()};return _jsx(h,{message:b,onClose:$,onDismiss:ee,isVisible:d&&!j&&!X})}const Z=null;try{h.displayName="VanillaPopOut",h.__docgenInfo={description:"The basic pop out excluding all external dependencies.",displayName:"VanillaPopOut",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ScoreChangeMessage"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!0,type:{name:"() => void"}},isVisible:{defaultValue:null,description:"",name:"isVisible",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/pop-out.tsx#VanillaPopOut"]={docgenInfo:h.__docgenInfo,name:"VanillaPopOut",path:"../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/pop-out.tsx#VanillaPopOut"})}catch{}try{S.displayName="PopOut",S.__docgenInfo={description:"",displayName:"PopOut",props:{scoreChange:{defaultValue:null,description:"",name:"scoreChange",required:!0,type:{name:"number | false"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/pop-out.tsx#PopOut"]={docgenInfo:S.__docgenInfo,name:"PopOut",path:"../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/pop-out.tsx#PopOut"})}catch{}var M=`import type { Meta } from '@storybook/react';
import React from 'react';
import { VanillaPopOut } from '../pop-out';

const meta: Meta< typeof VanillaPopOut > = {
	title: 'Plugins/Boost/Features/Speed Score/Vanilla PopOut',
	component: VanillaPopOut,
	argTypes: {
		message: { control: 'object' },
		onClose: { action: 'onClose' },
		onDismiss: { action: 'onDismiss' },
		isVisible: { control: 'boolean' },
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '800px', minHeight: '600px', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	isVisible: true,
	message: {
		id: 'score_decrease',
		title: 'Speed score has fallen',
		body: (
			<>
				<p>
					Most of the time Jetpack Boost will increase your site speed, but there may be cases where your score does not increase.
				</p>
				<p>
					Try refreshing your score, and if it doesn\u2019t help, check our guide on improving your site speed score:
				</p>
			</>
		),
		cta: 'Read the guide',
		ctaLink: 'https://example.com',
	},
	onClose: () => {
		defaultValues.isVisible = false;
	},
	onDismiss: () => {
		defaultValues.isVisible = false;
	},
};

export default meta;
const Template = args => {
	return <VanillaPopOut { ...args } />;
};
export const _default = Template.bind( {} );
_default.args = defaultValues;

`,F={_default:{startLoc:{col:17,line:53},endLoc:{col:1,line:57},startBody:{col:17,line:53},endBody:{col:1,line:57}}};const N={parameters:{storySource:{source:`import React from 'react';
import { VanillaPopOut } from '../pop-out';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
  title: 'Plugins/Boost/Features/Speed Score/Vanilla PopOut',
  component: VanillaPopOut,
  argTypes: {
    message: {
      control: 'object'
    },
    onClose: {
      action: 'onClose'
    },
    onDismiss: {
      action: 'onDismiss'
    },
    isVisible: {
      control: 'boolean'
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '800px',
      minHeight: '600px',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const defaultValues = {
  isVisible: true,
  message: {
    id: 'score_decrease',
    title: 'Speed score has fallen',
    body: /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("p", {
        children: "Most of the time Jetpack Boost will increase your site speed, but there may be cases where your score does not increase."
      }), /*#__PURE__*/_jsx("p", {
        children: "Try refreshing your score, and if it doesn\\u2019t help, check our guide on improving your site speed score:"
      })]
    }),
    cta: 'Read the guide',
    ctaLink: 'https://example.com'
  },
  onClose: () => {
    defaultValues.isVisible = false;
  },
  onDismiss: () => {
    defaultValues.isVisible = false;
  }
};
export default meta;
const Template = args => {
  return /*#__PURE__*/_jsx(VanillaPopOut, {
    ...args
  });
};
export const _default = Template.bind({});
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:53},endLoc:{col:1,line:57},startBody:{col:17,line:53},endBody:{col:1,line:57}}}}},title:"Plugins/Boost/Features/Speed Score/Vanilla PopOut",component:h,argTypes:{message:{control:"object"},onClose:{action:"onClose"},onDismiss:{action:"onDismiss"},isVisible:{control:"boolean"}},decorators:[s=>(0,o.jsx)("div",{style:{maxWidth:"800px",minHeight:"600px",fontSize:"16px"},children:(0,o.jsx)(s,{})})]},w={isVisible:!0,message:{id:"score_decrease",title:"Speed score has fallen",body:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"Most of the time Jetpack Boost will increase your site speed, but there may be cases where your score does not increase."}),(0,o.jsx)("p",{children:"Try refreshing your score, and if it doesn\u2019t help, check our guide on improving your site speed score:"})]}),cta:"Read the guide",ctaLink:"https://example.com"},onClose:()=>{w.isVisible=!1},onDismiss:()=>{w.isVisible=!1}},I=N,f=(s=>(0,o.jsx)(h,{...s})).bind({});f.args=w;const Q=["_default"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return <VanillaPopOut {...args} />;
}`,...f.parameters?.docs?.source}}}},"../components/components/button/index.tsx":(x,i,e)=>{e.d(i,{A:()=>C});var g=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),G=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(R),V=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/button/style.module.scss"),k={};k.insert="head",k.singleton=!1;var U=o()(V.A,k);const a=V.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const J=m.__,u=(0,G.forwardRef)((v,t)=>{const{children:y,variant:B="primary",size:A="normal",weight:q="bold",icon:O,iconSize:W,disabled:L,isDestructive:_,isLoading:T,isExternalLink:P,className:h,text:S,fullWidth:Z,...M}=v,F=(0,E.A)(a.button,h,{[a.normal]:A==="normal",[a.small]:A==="small",[a.icon]:!!O,[a.loading]:T,[a.regular]:q==="regular",[a["full-width"]]:Z,[a["is-icon-button"]]:!!O&&!y});M.ref=t;const N=A==="normal"?20:16,w=P&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{size:N,icon:p.A,className:a["external-icon"]}),(0,r.jsx)(g.A,{as:"span",children:J("(opens in a new tab)","jetpack-components")})]}),I=P?"_blank":void 0,H=y?.[0]&&y[0]!==null&&y?.[0]?.props?.className!=="components-tooltip";return(0,r.jsxs)(l.Ay,{target:I,variant:B,className:(0,E.A)(F,{"has-text":!!O&&H}),icon:P?void 0:O,iconSize:W,disabled:L,"aria-disabled":L,isDestructive:_,text:S,...M,children:[T&&(0,r.jsx)(c.Ay,{}),(0,r.jsx)("span",{children:y}),w]})});u.displayName="Button";const C=u;try{u.displayName="Button",u.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:u.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/button/style.module.scss":(x,i,e)=>{e.d(i,{A:()=>p});var g=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(g),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(c),n=m()(l());n.push([x.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),n.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const p=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/speed-score/pop-out/pop-out.module.scss":(x,i,e)=>{e.d(i,{A:()=>p});var g=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(g),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(c),n=m()(l());n.push([x.id,".OJK47Xm3Kxcjup6yCqeC{width:420px;position:absolute;top:40px;right:0;z-index:60;overflow:hidden;padding:20px 0 20px 20px;pointer-events:none}.BE31vrSnxTdkB6rxQycp{box-shadow:0 0 20px 0 rgba(170,170,170,.28);position:relative;right:-100%;padding:24px;background-color:#fff;pointer-events:all}.viq4m59Wh__0vMjDOpPy{margin-top:10px !important;float:right}.whfRURPopNeP8y_k3EFg{margin-right:21px}",""]),n.locals={wrapper:"OJK47Xm3Kxcjup6yCqeC",card:"BE31vrSnxTdkB6rxQycp","dismiss-button":"viq4m59Wh__0vMjDOpPy",headline:"whfRURPopNeP8y_k3EFg"};const p=n},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/ui/close-button/close-button.module.scss":(x,i,e)=>{e.d(i,{A:()=>p});var g=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(g),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(c),n=m()(l());n.push([x.id,'.qoV2CT0O42aemNNqrQAb{position:absolute;right:21px;top:21px;width:20px;height:20px;opacity:.7;background:none;border:none;font:inherit;cursor:pointer}.qoV2CT0O42aemNNqrQAb:hover{opacity:1}.qoV2CT0O42aemNNqrQAb::before,.qoV2CT0O42aemNNqrQAb::after{position:absolute;left:9px;content:" ";height:19px;width:2px;background-color:#333}.qoV2CT0O42aemNNqrQAb::before{transform:rotate(45deg)}.qoV2CT0O42aemNNqrQAb::after{transform:rotate(-45deg)}.qoV2CT0O42aemNNqrQAb span{border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-wrap:normal !important}',""]),n.locals={close:"qoV2CT0O42aemNNqrQAb"};const p=n}}]);
