"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5289],{"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/panel/body.js":(f,d,t)=>{t.d(d,{ZP:()=>D});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=t.n(s),n=t("../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),c=t("../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),u=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),b=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),k=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-state.js"),y=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js");const v=()=>{};function e(w,i){const{buttonProps:x={},children:P,className:h,icon:j,initialOpen:E,onToggle:I=v,opened:A,title:M,scrollAfterOpen:B=!0}=w,[_,g]=(0,k.Z)(A,{initial:E===void 0?!0:E,fallback:!1}),O=(0,o.useRef)(null),R=(0,n.Z)()?"auto":"smooth",T=C=>{C.preventDefault();const S=!_;g(S),I(S)},L=(0,o.useRef)();L.current=B,(0,y.Z)(()=>{var C;_&&L.current&&((C=O.current)!=null&&C.scrollIntoView)&&O.current.scrollIntoView({inline:"nearest",block:"nearest",behavior:R})},[_,R]);const U=l()("components-panel__body",h,{"is-opened":_});return(0,o.createElement)("div",{className:U,ref:(0,r.Z)([O,i])},(0,o.createElement)(m,{icon:j,isOpened:!!_,onClick:T,title:M,...x}),typeof P=="function"?P({opened:!!_}):_&&P)}const m=(0,o.forwardRef)(({isOpened:w,icon:i,title:x,...P},h)=>x?(0,o.createElement)("h2",{className:"components-panel__body-title"},(0,o.createElement)(u.ZP,{className:"components-panel__body-toggle","aria-expanded":w,ref:h,...P},(0,o.createElement)("span",{"aria-hidden":"true"},(0,o.createElement)(b.Z,{className:"components-panel__arrow",icon:w?a.Z:c.Z})),x,i&&(0,o.createElement)(b.Z,{icon:i,className:"components-panel__icon",size:20}))):null),D=(0,o.forwardRef)(e)},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/panel/row.js":(f,d,t)=>{t.d(d,{Z:()=>a});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=t.n(s);function n({className:c,children:u},b){return(0,o.createElement)("div",{className:l()("components-panel__row",c),ref:b},u)}const a=(0,o.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-state.js":(f,d,t)=>{t.d(d,{Z:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/values.js");const l={initial:void 0,fallback:""};function n(a,c=l){const{initial:u,fallback:b}={...l,...c},[k,y]=(0,o.useState)(a),v=(0,s.Jf)(a);(0,o.useEffect)(()=>{v&&k&&y(void 0)},[v,k]);const e=(0,s.Me)([a,k,u],b),m=(0,o.useCallback)(p=>{v||y(p)},[v]);return[e,m]}const r=n},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/values.js":(f,d,t)=>{t.d(d,{Jf:()=>o,Me:()=>l,Wx:()=>s,q9:()=>y});function o(e){return e!=null}function s(e){const m=e==="";return!o(e)||m}function l(e=[],m){var p;return(p=e.find(o))!==null&&p!==void 0?p:m}const n=e=>{const m=Intl.NumberFormat(e).format(1000.1),p=m[1],D=m[m.length-2];return[new RegExp(`\\${p}`,"g"),new RegExp(`\\${D}`,"g")]},r=/ /g,a=null,c=/([۰-۹]|[٠-٩])/g;function u(e,m=window.navigator.language){a.some(i=>m.startsWith(i))&&(m="en-GB",c.test(e)&&(e=e.replace(/[٠-٩]/g,i=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(i)).replace(/[۰-۹]/g,i=>"\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(i)).replace(/٬/g,",").replace(/٫/g,".")));const[p,D]=n(m),w=typeof e=="string"?e.replace(p,"").replace(D,".").replace(r,""):e;return!isNaN(parseFloat(w))&&isFinite(w)}const b=e=>parseFloat(e),k=e=>`${e}`,y=e=>typeof e=="string"?b(e):e,v=e=>typeof e=="string"?e:k(e)},"../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js":(f,d,t)=>{t.d(d,{Z:()=>l});var o=t("../../../node_modules/.pnpm/@wordpress+compose@6.15.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");const l=()=>(0,o.Z)("(prefers-reduced-motion: reduce)")},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(f,d,t)=>{t.d(d,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(s.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.29.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(f,d,t)=>{t.d(d,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(s.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(f,d,t)=>{t.d(d,{ZP:()=>l});var o=t("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function s(n,r){if(n===r)return!0;if(n.length!==r.length)return!1;for(let a=0,c=n.length;a<c;a++)if(n[a]!==r[a])return!1;return!0}function l(n,r){if(n&&r){if(n.constructor===Object&&r.constructor===Object)return(0,o.Z)(n,r);if(Array.isArray(n)&&Array.isArray(r))return s(n,r)}return n===r}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(f,d,t)=>{t.d(d,{Z:()=>o});function o(s,l){if(s===l)return!0;const n=Object.keys(s),r=Object.keys(l);if(n.length!==r.length)return!1;let a=0;for(;a<n.length;){const c=n[a],u=s[c];if(u===void 0&&!l.hasOwnProperty(c)||u!==l[c])return!1;a++}return!0}},"../../plugins/boost/app/assets/src/js/react-components/stories/performance-history.stories.tsx":(f,d,t)=>{var A,M,B;t.r(d),t.d(d,{__namedExportsOrder:()=>I,_default:()=>E,default:()=>h});var o=t("../components/components/boost-score-graph/index.tsx"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=t.n(l);function r({label:_,children:g}){return(0,s.createElement)("div",{className:"components-panel__header"},_&&(0,s.createElement)("h2",null,_),g)}const a=r;function c({header:_,className:g,children:O},R){const T=n()(g,"components-panel");return(0,s.createElement)("div",{className:T,ref:R},_&&(0,s.createElement)(a,{label:_}),O)}const b=(0,s.forwardRef)(c);var k=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/panel/body.js"),y=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/panel/row.js"),v=t("../../../node_modules/.pnpm/@wordpress+i18n@4.38.0/node_modules/@wordpress/i18n/build-module/index.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=v.__,p=_=>{let{periods:g,onToggle:O,isOpen:R,startDate:T,endDate:L}=_;return(0,e.jsx)(b,{children:(0,e.jsx)(k.ZP,{title:m("Historical Performance","jetpack-boost"),initialOpen:R,onToggle:O,className:"jb-performance-history__panel",children:(0,e.jsx)(y.Z,{children:(0,e.jsx)("div",{style:{flexGrow:1,minHeight:"300px"},children:(0,e.jsx)(o.Z,{periods:g,startDate:T,endDate:L})})})})})};p.displayName="PerformanceHistory";try{p.displayName="PerformanceHistory",p.__docgenInfo={description:"",displayName:"PerformanceHistory",props:{periods:{defaultValue:null,description:"",name:"periods",required:!0,type:{name:"any"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"any"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"any"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"any"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/react-components/PerformanceHistory.tsx#PerformanceHistory"]={docgenInfo:p.__docgenInfo,name:"PerformanceHistory",path:"../../plugins/boost/app/assets/src/js/react-components/PerformanceHistory.tsx#PerformanceHistory"})}catch(_){}var D=`import { PerformanceHistory } from '../PerformanceHistory';
import type { Meta } from '@storybook/react';

const exampleRawResponse = {
	data: {
		_meta: {
			start: 1689772803000,
			end: 1690647000000,
		},
		periods: [
			{
				timestamp: 1690636803000,
				dimensions: {
					desktop_overall_score: 86,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689772803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689859203000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 49,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689945603000,
				dimensions: {
					desktop_overall_score: 20,
					mobile_overall_score: 30,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690032003000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 40,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690118403000,
				dimensions: {
					desktop_overall_score: 55,
					mobile_overall_score: 45,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690204803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690291203000,
				dimensions: {
					desktop_overall_score: 70,
					mobile_overall_score: 50,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690377603000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 90,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690464003000,
				dimensions: {
					desktop_overall_score: 80,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690550403000,
				dimensions: {
					desktop_overall_score: 85,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
		],
	},
};

const meta: Meta< typeof PerformanceHistory > = {
	title: 'Plugins/Boost/Performance History',
	component: PerformanceHistory,
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		periods: { control: 'object' },
		onToggle: { action: 'toggled' },
		isOpen: { control: 'boolean' },
	},
	decorators: [
		Story => (
			<div style={ { width: '80%', maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	startDate: exampleRawResponse.data._meta.start,
	endDate: exampleRawResponse.data._meta.end,
	periods: exampleRawResponse.data.periods,
	isOpen: true,
};

export default meta;

const Template = args => <PerformanceHistory { ...args } />;
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,w={_default:{startLoc:{col:17,line:180},endLoc:{col:57,line:180},startBody:{col:17,line:180},endBody:{col:57,line:180}}};const i={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}]}},x={parameters:{storySource:{source:`import { PerformanceHistory } from '../PerformanceHistory';
import type { Meta } from '@storybook/react';
const exampleRawResponse = {
  data: {
    _meta: {
      start: 1689772803000,
      end: 1690647000000
    },
    periods: [{
      timestamp: 1690636803000,
      dimensions: {
        desktop_overall_score: 86,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689772803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689859203000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 49,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689945603000,
      dimensions: {
        desktop_overall_score: 20,
        mobile_overall_score: 30,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690032003000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 40,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690118403000,
      dimensions: {
        desktop_overall_score: 55,
        mobile_overall_score: 45,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690204803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690291203000,
      dimensions: {
        desktop_overall_score: 70,
        mobile_overall_score: 50,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690377603000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 90,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690464003000,
      dimensions: {
        desktop_overall_score: 80,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690550403000,
      dimensions: {
        desktop_overall_score: 85,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }]
  }
};
const meta: Meta<typeof PerformanceHistory> = {
  title: 'Plugins/Boost/Performance History',
  component: PerformanceHistory,
  argTypes: {
    startDate: {
      control: 'date'
    },
    endDate: {
      control: 'date'
    },
    periods: {
      control: 'object'
    },
    onToggle: {
      action: 'toggled'
    },
    isOpen: {
      control: 'boolean'
    }
  },
  decorators: [Story => <div style={{
    width: '80%',
    maxWidth: '1320px',
    margin: '200px auto',
    fontSize: '16px'
  }}>
                <Story />
            </div>]
};
const defaultValues = {
  startDate: exampleRawResponse.data._meta.start,
  endDate: exampleRawResponse.data._meta.end,
  periods: exampleRawResponse.data.periods,
  isOpen: true
};
export default meta;
const Template = args => <PerformanceHistory {...args} />;
export const _default = Template.bind({});
_default.args = defaultValues;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <PerformanceHistory {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:180},endLoc:{col:57,line:180},startBody:{col:17,line:180},endBody:{col:57,line:180}}}}},title:"Plugins/Boost/Performance History",component:p,argTypes:{startDate:{control:"date"},endDate:{control:"date"},periods:{control:"object"},onToggle:{action:"toggled"},isOpen:{control:"boolean"}},decorators:[_=>(0,e.jsx)("div",{style:{width:"80%",maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,e.jsx)(_,{})})]},P={startDate:i.data._meta.start,endDate:i.data._meta.end,periods:i.data.periods,isOpen:!0},h=x,j=_=>(0,e.jsx)(p,{..._});j.displayName="Template";const E=j.bind({});E.args=P,E.parameters={...E.parameters,docs:{...(A=E.parameters)==null?void 0:A.docs,source:{originalSource:"args => <PerformanceHistory {...args} />",...(B=(M=E.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const I=["_default"]}}]);})();
