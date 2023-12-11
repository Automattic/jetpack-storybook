"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[519,8608],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(D,l,e)=>{e.d(l,{aD:()=>O});var n="actions",s="storybook/actions",t=`${s}/panel`,_=`${s}/action-event`,p=`${s}/action-clear`,h="$___storybook.isCyclic",g=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),T=e("@storybook/preview-api"),v={depth:10,clearOnStoryChange:!0,limit:50},P=(i={})=>{Object.assign(v,i)},E=(i,m)=>{let d=Object.getPrototypeOf(i);return!d||m(d)?d:E(d,m)},o=i=>!!(typeof i=="object"&&i&&E(i,m=>/^Synthetic(?:Base)?Event$/.test(m.constructor.name))&&typeof i.persist=="function"),A=i=>{if(o(i)){let m=Object.create(i.constructor.prototype,Object.getOwnPropertyDescriptors(i));m.persist();let d=Object.getOwnPropertyDescriptor(m,"view"),c=d==null?void 0:d.value;return typeof c=="object"&&(c==null?void 0:c.constructor.name)==="Window"&&Object.defineProperty(m,"view",{...d,value:Object.create(c.constructor.prototype)}),m}return i};function O(i,m={}){let d={...v,...m},c=function(...C){let a=T.addons.getChannel(),I=(0,g.Z)(),u=5,R=C.map(A),b=C.length>1?R:R[0],L={id:I,count:0,data:{name:i,args:b},options:{...d,maxDepth:u+(d.depth||3),allowFunction:d.allowFunction||!1}};a.emit(_,L)};return c.isAction=!0,c}var r=(...i)=>{let m=config,d=i;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(m={...config,...d.pop()});let c=d[0];(d.length!==1||typeof c=="string")&&(c={},d.forEach(a=>{c[a]=a}));let C={};return Object.keys(c).forEach(a=>{C[a]=action(c[a],m)}),C}},"../../packages/videopress/src/client/admin/components/pagination/stories/index.mdx":(D,l,e)=>{e.r(l),e.d(l,{default:()=>P});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),_=e.n(t),p=e("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),h=e("../../packages/videopress/src/client/admin/components/pagination/index.tsx"),g=e("../../packages/videopress/src/client/admin/components/pagination/stories/index.stories.tsx");function T(E){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,t.useMDXComponents)(),E.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.h_,{of:g}),`
`,(0,s.jsx)(o.h1,{id:"pagination",children:"Pagination"}),`
`,(0,s.jsx)(o.p,{children:"Component to manage navigation between pages of a list of records."}),`
`,(0,s.jsx)(p.Xz,{withSource:"open",children:(0,s.jsx)(p.oG,{id:"packages-videopress-pagination--default"})}),`
`,(0,s.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(o.h3,{id:"currentpage",children:"currentPage"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`,(0,s.jsxs)(o.li,{children:["default: ",(0,s.jsx)(o.code,{children:"1"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The currently selected page. A positive integer."}),`
`,(0,s.jsx)(o.h3,{id:"perpage",children:"perPage"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The number of records shown per page."}),`
`,(0,s.jsx)(o.h3,{id:"total",children:"total"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The total number of records from the paginated list."}),`
`,(0,s.jsx)(o.h3,{id:"mincolumns",children:"minColumns"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`,(0,s.jsxs)(o.li,{children:["default: ",(0,s.jsx)(o.code,{children:"7"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:`The minimum number of columns to display pages and ellipses.
Will be rounded to the next odd number if it is even.
Will round up to 7 if less than 7.`}),`
`,(0,s.jsx)(o.h3,{id:"disabled",children:"disabled"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"boolean"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"Whether or not the pagination is disabled."}),`
`,(0,s.jsx)(o.h3,{id:"onchangepage",children:"onChangePage"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"function"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"Callback to be invoked when the user changes the current page."})]})}function v(E={}){const{wrapper:o}=Object.assign({},(0,t.useMDXComponents)(),E.components);return o?(0,s.jsx)(o,Object.assign({},E,{children:(0,s.jsx)(T,E)})):T(E)}const P=v},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(D,l,e)=>{e.d(l,{ZP:()=>i});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(s),_=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function T(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const v=p.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,P=(0,_.Z)("svg",{target:"ea4tfvq2"})("width:",h.Z.spinnerSize,"px;height:",h.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",g.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),E={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},o=(0,_.Z)("circle",{target:"ea4tfvq1"})(E,";stroke:",g.D.gray[300],";"),A=(0,_.Z)("path",{target:"ea4tfvq0"})(E,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",v,";");function O({className:m,...d},c){return(0,n.createElement)(P,{className:t()("components-spinner",m),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...d,ref:c},(0,n.createElement)(o,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(A,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const i=(0,n.forwardRef)(O)},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(D,l,e)=>{e.d(l,{Z:()=>g});var n=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const t="36px",_="12px",p={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.theme.accent,controlPaddingX:_,controlPaddingXLarge:`calc(${_} * 1.3334)`,controlPaddingXSmall:`calc(${_} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.theme.accent}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:t,controlHeightXSmall:`calc( ${t} * 0.6 )`,controlHeightSmall:`calc( ${t} * 0.8 )`,controlHeightLarge:`calc( ${t} * 1.2 )`,controlHeightXLarge:`calc( ${t} * 1.4 )`},h={toggleGroupControlBackgroundColor:p.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:p.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:p.controlBackgroundColor},g=Object.assign({},p,h,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(D,l,e)=>{e.d(l,{W:()=>s});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function s(t){return n.Z.dispatch(t)}},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(D,l,e)=>{e.d(l,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:_,size:p=24,...h},g){return(0,n.cloneElement)(_,{width:p,height:p,...h,ref:g})}const t=(0,n.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js":(D,l,e)=>{e.d(l,{Z:()=>_});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const _=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(D,l,e)=>{e.d(l,{Z:()=>_});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const _=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(D,l,e)=>{e.d(l,{Z:()=>_});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const _=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../packages/videopress/src/client/admin/components/pagination/stories/index.stories.tsx":(D,l,e)=>{var o,A,O;e.r(l),e.d(l,{__namedExportsOrder:()=>E,_default:()=>P,default:()=>T});var n=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("@storybook/client-api"),t=e.n(s),_=e("../../packages/videopress/src/client/admin/components/pagination/index.tsx"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=`import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import Pagination from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Pagination',
	component: Pagination,
} as ComponentMeta< typeof Pagination >;

const Template: ComponentStory< typeof Pagination > = args => {
	const [ , updateArgs ] = useArgs();
	const onChangePage = ( newPage: number ) => {
		updateArgs( { currentPage: newPage, disabled: true } );
		action( 'onPageChange' )( newPage );
		setTimeout( () => {
			updateArgs( { disabled: false } );
		}, 500 );
	};

	return <Pagination { ...args } onChangePage={ onChangePage } />;
};

export const _default = Template.bind( {} );
_default.args = {
	currentPage: 1,
	perPage: 10,
	total: 100,
	minColumns: 7,
	disabled: false,
};
`,g={_default:{startLoc:{col:52,line:9},endLoc:{col:1,line:24},startBody:{col:52,line:9},endBody:{col:1,line:24}}};const T={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import Pagination from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>);
const Template: ComponentStory<typeof Pagination> = args => {
  const [, updateArgs] = useArgs();
  const onChangePage = (newPage: number) => {
    updateArgs({
      currentPage: newPage,
      disabled: true
    });
    action('onPageChange')(newPage);
    setTimeout(() => {
      updateArgs({
        disabled: false
      });
    }, 500);
  };
  return <Pagination {...args} onChangePage={onChangePage} />;
};
export const _default = Template.bind({});
_default.args = {
  currentPage: 1,
  perPage: 10,
  total: 100,
  minColumns: 7,
  disabled: false
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [, updateArgs] = useArgs();\\n  const onChangePage = (newPage: number) => {\\n    updateArgs({\\n      currentPage: newPage,\\n      disabled: true\\n    });\\n    action('onPageChange')(newPage);\\n    setTimeout(() => {\\n      updateArgs({\\n        disabled: false\\n      });\\n    }, 500);\\n  };\\n  return <Pagination {...args} onChangePage={onChangePage} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:52,line:9},endLoc:{col:1,line:24},startBody:{col:52,line:9},endBody:{col:1,line:24}}}}},title:"Packages/VideoPress/Pagination",component:_.ZP},v=r=>{const[,i]=(0,s.useArgs)(),m=d=>{i({currentPage:d,disabled:!0}),(0,n.aD)("onPageChange")(d),setTimeout(()=>{i({disabled:!1})},500)};return(0,p.jsx)(_.ZP,{...r,onChangePage:m})};v.displayName="Template";const P=v.bind({});P.args={currentPage:1,perPage:10,total:100,minColumns:7,disabled:!1},P.parameters={...P.parameters,docs:{...(o=P.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onChangePage = (newPage: number) => {
    updateArgs({
      currentPage: newPage,
      disabled: true
    });
    action('onPageChange')(newPage);
    setTimeout(() => {
      updateArgs({
        disabled: false
      });
    }, 500);
  };
  return <Pagination {...args} onChangePage={onChangePage} />;
}`,...(O=(A=P.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const E=["_default"]},"../components/components/button/index.tsx":(D,l,e)=>{e.d(l,{Z:()=>i});var n=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),p=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=e.n(p),g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(T),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),E={};E.insert="head",E.singleton=!1;var o=v()(P.Z,E);const A=P.Z.locals||{};var O=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=(0,g.forwardRef)((m,d)=>{var U,M;const{children:c,variant:C="primary",size:a="normal",weight:I="bold",icon:u,iconSize:R,disabled:b,isDestructive:L,isLoading:j,isExternalLink:V,className:x,text:w,fullWidth:f,...N}=m,S=h()(A.button,x,{[A.normal]:a==="normal",[A.small]:a==="small",[A.icon]:!!u,[A.loading]:j,[A.regular]:I==="regular",[A["full-width"]]:f,[A["is-icon-button"]]:!!u&&!c});N.ref=d;const y=a==="normal"?20:16,B=V&&(0,O.jsx)(t.Z,{size:y,icon:_.Z,className:A["external-icon"]}),k=V?"_blank":void 0,G=(c==null?void 0:c[0])&&c[0]!==null&&((M=(U=c==null?void 0:c[0])==null?void 0:U.props)==null?void 0:M.className)!=="components-tooltip";return(0,O.jsxs)(n.ZP,{target:k,variant:C,className:h()(S,{"has-text":!!u&&G}),icon:V?void 0:u,iconSize:R,disabled:b,"aria-disabled":b,isDestructive:L,text:w,...N,children:[j&&(0,O.jsx)(s.ZP,{}),(0,O.jsx)("span",{children:c}),B]})});r.displayName="Button";const i=r;try{r.displayName="Button",r.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:r.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(m){}},"../../packages/videopress/src/client/admin/components/pagination/index.tsx":(D,l,e)=>{e.d(l,{ZP:()=>a});var n=e("../components/components/button/index.tsx"),s=e("../components/components/text/index.tsx"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js"),h=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(h),T=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(v),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/pagination/style.module.scss"),o={};o.insert="head",o.singleton=!1;var A=P()(E.Z,o);const O=E.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=(I,u)=>[...Array(u)].map((R,b)=>b+I),m=()=>(0,r.jsx)(n.Z,{size:"small",className:g()(O.button),variant:"tertiary",disabled:!0,"aria-disabled":!0,children:(0,r.jsx)(s.ZP,{children:"..."})});m.displayName="Ellipsis";const d=({className:I,currentPage:u=1,perPage:R,total:b,minColumns:L=7,disabled:j,onChangePage:V})=>{if(!b||!R)return null;const x=Math.ceil(b/R);if(u>x)return V(x),null;if(u<1)return V(1),null;const w=({page:S})=>{const y=S===u;return(0,r.jsx)(n.Z,{size:"small",className:g()(O.button,y?O.selected:null),variant:y?"primary":"tertiary",disabled:j,"aria-disabled":j,onClick:()=>V(S),children:S})};let f=Math.max(L,7);f=f%2===0?f+1:f;let N;if(x<=f)N=i(1,x).map(S=>(0,r.jsx)(w,{page:S},S));else if(u<f-2)N=(0,r.jsxs)(r.Fragment,{children:[i(1,f-2).map(S=>(0,r.jsx)(w,{page:S},S)),(0,r.jsx)(m,{}),(0,r.jsx)(w,{page:x})]});else if(u>x-f+3)N=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{page:1}),(0,r.jsx)(m,{}),i(x-f+3,f-2).map(S=>(0,r.jsx)(w,{page:S},S))]});else{const S=(f-5)/2;N=(0,r.jsxs)(r.Fragment,{children:[i(1,S).map(y=>(0,r.jsx)(w,{page:y},y)),(0,r.jsx)(m,{}),i(u-1,3).map(y=>(0,r.jsx)(w,{page:y},y)),(0,r.jsx)(m,{}),i(x-S+1,S).map(y=>(0,r.jsx)(w,{page:y},y))]})}return(0,r.jsxs)("div",{className:g()(I,O.wrapper),children:[(0,r.jsx)(n.Z,{size:"small",className:g()(O.navigation,O.button),variant:"tertiary",disabled:j||u===1,"aria-disabled":j||u===1,onClick:()=>V(Math.max(1,u-1)),children:(0,r.jsx)(t.Z,{icon:_.Z})}),N,(0,r.jsx)(n.Z,{size:"small",className:g()(O.navigation,O.button),variant:"tertiary",disabled:j||u===x,"aria-disabled":j||u===x,onClick:()=>V(Math.min(x,u+1)),children:(0,r.jsx)(t.Z,{icon:p.Z})})]})};d.displayName="Pagination";const c=I=>{const u=useSearchParams(),R=x=>{x>1?u.setParam("page",x):u.deleteParam("page"),u.update()},{page:b,itemsPerPage:L,total:j,isFetching:V}=useVideos();return j<=L?_jsx("div",{className:classnames(I.className,styles["pagination-placeholder"])}):_jsx(d,{...I,perPage:L,onChangePage:R,currentPage:b,total:j,disabled:V||I.disabled})},C=I=>{const{setPage:u,page:R,itemsPerPage:b,total:L,isFetching:j}=useLocalVideos();return L<b?_jsx("div",{className:classnames(I.className,styles["pagination-placeholder"])}):_jsx(d,{...I,perPage:b,onChangePage:u,currentPage:R,total:L,disabled:j||I.disabled})},a=d;try{c.displayName="ConnectPagination",c.__docgenInfo={description:"",displayName:"ConnectPagination",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectPagination"]={docgenInfo:c.__docgenInfo,name:"ConnectPagination",path:"../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectPagination"})}catch(I){}try{C.displayName="ConnectLocalPagination",C.__docgenInfo={description:"",displayName:"ConnectLocalPagination",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectLocalPagination"]={docgenInfo:C.__docgenInfo,name:"ConnectLocalPagination",path:"../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectLocalPagination"})}catch(I){}},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(D,l,e)=>{e.d(l,{ZP:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js"),t=e("../../packages/videopress/src/client/state/constants.js");function _(){const g=(0,n.Z)(a=>a(t.tT).getVideos()),T=(0,n.Z)(a=>a(t.tT).getUploadingVideos()),v=T.length>0,P="",E=(0,n.Z)(a=>a(t.tT).getUploadedVideoCount()),o=(0,n.Z)(a=>a(t.tT).getIsFetching()),A=(0,n.Z)(a=>a(t.tT).getIsFetchingUploadedVideoCount()),O=(0,n.Z)(a=>a(t.tT).getFirstUploadedVideoId()),r=(0,n.Z)(a=>a(t.tT).getFirstVideoProcessed()),i=(0,n.Z)(a=>a(t.tT).getDismissedFirstVideoPopover()),m=(0,n.Z)(a=>a(t.tT).getVideosQuery()||{}),d=(0,n.Z)(a=>a(t.tT).getPagination()),c=(0,n.Z)(a=>a(t.tT).getStorageUsed(),[]),C=(0,n.Z)(a=>a(t.tT).getVideosFilter());return{items:g,uploading:T,isUploading:v,search:P,filter:C,uploadedVideoCount:E,isFetching:o,isFetchingUploadedVideoCount:A,firstUploadedVideoId:O,firstVideoProcessed:r,dismissedFirstVideoPopover:i,...m,...d,...c,setPage:a=>(0,s.W)(t.tT).setVideosQuery({page:a}),setSearch:a=>(0,s.W)(t.tT).setVideosQuery({search:a}),setFilter:(0,s.W)(t.tT).setVideosFilter}}const p=()=>{const g=useSelect(o=>o(STORE_ID).getLocalVideos()),T=useSelect(o=>o(STORE_ID).getUploadedLocalVideoCount()),v=useSelect(o=>o(STORE_ID).getIsFetchingLocalVideos()),P=useSelect(o=>o(STORE_ID).getLocalVideosQuery()||{}),E=useSelect(o=>o(STORE_ID).getLocalPagination());return{items:g,uploadedLocalVideoCount:T,isFetching:v,...P,...E,setPage:o=>dispatch(STORE_ID).setLocalVideosQuery({page:o})}},h=()=>useSelect(T=>T(STORE_ID).getVideosQuery()||{})},"../../packages/videopress/src/client/state/constants.js":(D,l,e)=>{e.d(l,{$A:()=>F,$L:()=>R,CM:()=>k,Db:()=>H,Dj:()=>o,El:()=>M,Et:()=>b,FP:()=>c,FY:()=>p,Gr:()=>oe,H:()=>A,IN:()=>X,JV:()=>v,Kc:()=>t,NL:()=>L,O1:()=>K,Og:()=>x,Ps:()=>a,QC:()=>P,RB:()=>j,TD:()=>U,UJ:()=>z,Vc:()=>I,Vm:()=>Y,Vz:()=>$,WJ:()=>Q,W_:()=>u,Wi:()=>i,Z5:()=>ne,ZP:()=>C,Zp:()=>w,ah:()=>te,b1:()=>Z,dY:()=>B,fi:()=>S,jV:()=>J,jc:()=>ae,kH:()=>q,o1:()=>W,p0:()=>O,pD:()=>d,pI:()=>y,pf:()=>se,qP:()=>g,tH:()=>E,tT:()=>n,tb:()=>h,tw:()=>V,u_:()=>_,uo:()=>T,vP:()=>r,wI:()=>f,x4:()=>ee,x_:()=>N,z$:()=>m,z8:()=>G});const n="videopress/media",s="/wp-admin/admin-ajax.php",t="wp/v2/users",_="wp/v2/media",p="wpcom/v2/videopress",h="wpcom/v2/videopress/meta",g="wpcom/v2/videopress/playback-jwt",T="videopress/v1/settings",v="videopress/v1/site",P="SET_IS_FETCHING_VIDEOS",E="SET_VIDEOS_FETCH_ERROR",o="SET_VIDEOS_QUERY",A="SET_VIDEOS_PAGINATION",O="SET_VIDEOS",r="SET_VIDEOS_STORAGE_USED",i="SET_UPLOADED_VIDEO_COUNT",m="SET_IS_FETCHING_UPLOADED_VIDEO_COUNT",d="DISMISS_FIRST_VIDEO_POPOVER",c="SET_LOCAL_VIDEOS",C="SET_IS_FETCHING_LOCAL_VIDEOS",a="SET_LOCAL_VIDEOS_QUERY",I="SET_LOCAL_VIDEOS_PAGINATION",u="SET_LOCAL_VIDEO_UPLOADED",R="SET_VIDEOS_FILTER",b="SET_VIDEO",L="SET_VIDEO_PRIVACY",j="UPDATE_VIDEO_PRIVACY",V="DELETE_VIDEO",x="REMOVE_VIDEO",w="FLUSH_DELETED_VIDEOS",f="UPDATE_PAGINATION_AFTER_DELETE",N="SET_VIDEO_UPLOADING",S="SET_VIDEO_PROCESSING",y="SET_VIDEO_UPLOADED",B="SET_VIDEO_UPLOAD_PROGRESS",k="SET_IS_FETCHING_PURCHASES",G="SET_PURCHASES",U="SET_IS_FETCHING_PLAYBACK_TOKEN",M="SET_PLAYBACK_TOKEN",W="EXPIRE_PLAYBACK_TOKEN",Z="SET_USERS",X="SET_USERS_PAGINATION",H="SET_UPDATING_VIDEO_POSTER",Y="UPDATE_VIDEO_POSTER",Q="SET_VIDEOPRESS_SETTINGS",J="UPDATE_VIDEO_IS_PRIVATE",de=null,F="public",z="private",K="site-default",$=[F,z,K],re=0,ie=1,q=2,ce=3,ee="G",se="PG-13",oe="R-17",ne="uploader",te="rating",ae="privacy"},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(D,l,e)=>{e.d(l,{Z:()=>h});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(n),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(t),p=_()(s());p.push([D.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),p.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const h=p},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/pagination/style.module.scss":(D,l,e)=>{e.d(l,{Z:()=>h});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(n),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(t),p=_()(s());p.push([D.id,".FIsscdIRHTHQQa0WvC2O{display:flex;align-items:center}.FIsscdIRHTHQQa0WvC2O .LdDXsaGLnMxbCHU1kS9o span{display:flex}.FIsscdIRHTHQQa0WvC2O .bWYiUqAFR25tuNUxQiwA{width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4);line-height:calc(var(--spacing-base)*4)}.FIsscdIRHTHQQa0WvC2O .bWYiUqAFR25tuNUxQiwA:not(.qYtVdpzgTrzCTaVBAAEq):disabled{background-color:unset}.IISZeXc2aCXhmHAQkieK{height:calc(var(--spacing-base)*4)}",""]),p.locals={wrapper:"FIsscdIRHTHQQa0WvC2O",navigation:"LdDXsaGLnMxbCHU1kS9o",button:"bWYiUqAFR25tuNUxQiwA",selected:"qYtVdpzgTrzCTaVBAAEq","pagination-placeholder":"IISZeXc2aCXhmHAQkieK"};const h=p}}]);})();