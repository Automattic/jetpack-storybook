(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[519,8608],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(D,i,e)=>{"use strict";e.d(i,{aD:()=>b});var n=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),s=e("@storybook/preview-api"),a=e("@storybook/global"),c=e("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),l="actions",P="storybook/actions",g=`${P}/panel`,A=`${P}/action-event`,f=`${P}/action-clear`,h="$___storybook.isCyclic",m={depth:10,clearOnStoryChange:!0,limit:50},o=(_={})=>{Object.assign(m,_)},y=(_,u)=>{let t=Object.getPrototypeOf(_);return!t||u(t)?t:y(t,u)},S=_=>!!(typeof _=="object"&&_&&y(_,u=>/^Synthetic(?:Base)?Event$/.test(u.constructor.name))&&typeof _.persist=="function"),d=_=>{if(S(_)){let u=Object.create(_.constructor.prototype,Object.getOwnPropertyDescriptors(_));u.persist();let t=Object.getOwnPropertyDescriptor(u,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(u,"view",{...t,value:Object.create(r.constructor.prototype)}),u}return _},O=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,n.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(_,u={}){let t={...m,...u},r=function(...p){var L,x;if(u.implicit){let N=(L="__STORYBOOK_PREVIEW__"in a.global?a.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:L.storyRenders.find(E=>E.phase==="playing"||E.phase==="rendering");if(N){let E=!((x=window==null?void 0:window.FEATURES)!=null&&x.disallowImplicitActionsInRenderV8),C=new c.is({phase:N.phase,name:_,deprecated:E});if(E)console.warn(C);else throw C}}let v=s.addons.getChannel(),V=O(),R=5,j=p.map(d),w=p.length>1?j:j[0],I={id:V,count:0,data:{name:_,args:w},options:{...t,maxDepth:R+(t.depth||3),allowFunction:t.allowFunction||!1}};v.emit(A,I)};return r.isAction=!0,r}var T=(..._)=>{let u=m,t=_;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(u={...m,...t.pop()});let r=t[0];(t.length!==1||typeof r=="string")&&(r={},t.forEach(v=>{r[v]=v}));let p={};return Object.keys(r).forEach(v=>{p[v]=b(r[v],u)}),p}},"../../packages/videopress/src/client/admin/components/pagination/stories/index.stories.tsx":(D,i,e)=>{var o,y,S;"use strict";e.r(i),e.d(i,{__namedExportsOrder:()=>m,_default:()=>h,default:()=>A});var n=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("@storybook/client-api"),a=e.n(s),c=e("../../packages/videopress/src/client/admin/components/pagination/index.tsx"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`import { action } from '@storybook/addon-actions';
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
`,g={_default:{startLoc:{col:54,line:11},endLoc:{col:1,line:22},startBody:{col:54,line:11},endBody:{col:1,line:22}}};const A={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:1,line:22},startBody:{col:54,line:11},endBody:{col:1,line:22}}}}},title:"Packages/VideoPress/Pagination",component:c.ZP},f=d=>{const[,O]=(0,s.useArgs)(),b=T=>{O({currentPage:T,disabled:!0}),(0,n.aD)("onPageChange")(T),setTimeout(()=>{O({disabled:!1})},500)};return(0,l.jsx)(c.ZP,{...d,onChangePage:b})};f.displayName="Template";const h=f.bind({});h.args={currentPage:1,perPage:10,total:100,minColumns:7,disabled:!1},h.parameters={...h.parameters,docs:{...(o=h.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
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
}`,...(S=(y=h.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const m=["_default"]},"../../packages/videopress/src/client/admin/components/pagination/stories/index.mdx":(D,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>h});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),c=e.n(a),l=e("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),P=e("../../packages/videopress/src/client/admin/components/pagination/index.tsx"),g=e("../../packages/videopress/src/client/admin/components/pagination/stories/index.stories.tsx");function A(m){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,a.useMDXComponents)(),m.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h_,{of:g}),`
`,(0,s.jsx)(o.h1,{id:"pagination",children:"Pagination"}),`
`,(0,s.jsx)(o.p,{children:"Component to manage navigation between pages of a list of records."}),`
`,(0,s.jsx)(l.Xz,{withSource:"open",children:(0,s.jsx)(l.oG,{id:"packages-videopress-pagination--default"})}),`
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
`,(0,s.jsx)(o.p,{children:"Callback to be invoked when the user changes the current page."})]})}function f(m={}){const{wrapper:o}=Object.assign({},(0,a.useMDXComponents)(),m.components);return o?(0,s.jsx)(o,Object.assign({},m,{children:(0,s.jsx)(A,m)})):A(m)}const h=f},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(D,i,e)=>{"use strict";e.d(i,{ZP:()=>O});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(s),c=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),P=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function A(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const f=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,h=(0,c.Z)("svg",{target:"ea4tfvq2"})("width:",P.Z.spinnerSize,"px;height:",P.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",g.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),m={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},o=(0,c.Z)("circle",{target:"ea4tfvq1"})(m,";stroke:",g.D.gray[300],";"),y=(0,c.Z)("path",{target:"ea4tfvq0"})(m,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",f,";");function S({className:b,...T},_){return(0,n.createElement)(h,{className:a()("components-spinner",b),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...T,ref:_},(0,n.createElement)(o,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(y,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const O=(0,n.forwardRef)(S)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(D,i,e)=>{"use strict";e.d(i,{Z:()=>g});var n=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const a="36px",c="12px",l={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.theme.accent,controlPaddingX:c,controlPaddingXLarge:`calc(${c} * 1.3334)`,controlPaddingXSmall:`calc(${c} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.theme.accent}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:a,controlHeightXSmall:`calc( ${a} * 0.6 )`,controlHeightSmall:`calc( ${a} * 0.8 )`,controlHeightLarge:`calc( ${a} * 1.2 )`,controlHeightXLarge:`calc( ${a} * 1.4 )`},P={toggleGroupControlBackgroundColor:l.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:l.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:l.controlBackgroundColor},g=Object.assign({},l,P,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(D,i,e)=>{"use strict";e.d(i,{W:()=>s});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function s(a){return n.Z.dispatch(a)}},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(D,i,e)=>{"use strict";e.d(i,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:c,size:l=24,...P},g){return(0,n.cloneElement)(c,{width:l,height:l,...P,ref:g})}const a=(0,n.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js":(D,i,e)=>{"use strict";e.d(i,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(D,i,e)=>{"use strict";e.d(i,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(D,i,e)=>{"use strict";e.d(i,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(D,i,e)=>{"use strict";e.d(i,{ZP:()=>c});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js"),a=e("../../packages/videopress/src/client/state/constants.js");function c(){const g=(0,n.Z)(t=>t(a.tT).getVideos()),A=(0,n.Z)(t=>t(a.tT).getUploadingVideos()),f=A.length>0,h="",m=(0,n.Z)(t=>t(a.tT).getUploadedVideoCount()),o=(0,n.Z)(t=>t(a.tT).getIsFetching()),y=(0,n.Z)(t=>t(a.tT).getIsFetchingUploadedVideoCount()),S=(0,n.Z)(t=>t(a.tT).getFirstUploadedVideoId()),d=(0,n.Z)(t=>t(a.tT).getFirstVideoProcessed()),O=(0,n.Z)(t=>t(a.tT).getDismissedFirstVideoPopover()),b=(0,n.Z)(t=>t(a.tT).getVideosQuery()||{}),T=(0,n.Z)(t=>t(a.tT).getPagination()),_=(0,n.Z)(t=>t(a.tT).getStorageUsed(),[]),u=(0,n.Z)(t=>t(a.tT).getVideosFilter());return{items:g,uploading:A,isUploading:f,search:h,filter:u,uploadedVideoCount:m,isFetching:o,isFetchingUploadedVideoCount:y,firstUploadedVideoId:S,firstVideoProcessed:d,dismissedFirstVideoPopover:O,...b,...T,..._,setPage:t=>(0,s.W)(a.tT).setVideosQuery({page:t}),setSearch:t=>(0,s.W)(a.tT).setVideosQuery({search:t}),setFilter:(0,s.W)(a.tT).setVideosFilter}}const l=()=>{const g=useSelect(o=>o(STORE_ID).getLocalVideos()),A=useSelect(o=>o(STORE_ID).getUploadedLocalVideoCount()),f=useSelect(o=>o(STORE_ID).getIsFetchingLocalVideos()),h=useSelect(o=>o(STORE_ID).getLocalVideosQuery()||{}),m=useSelect(o=>o(STORE_ID).getLocalPagination());return{items:g,uploadedLocalVideoCount:A,isFetching:f,...h,...m,setPage:o=>dispatch(STORE_ID).setLocalVideosQuery({page:o})}},P=()=>useSelect(A=>A(STORE_ID).getVideosQuery()||{})},"../../packages/videopress/src/client/state/constants.js":(D,i,e)=>{"use strict";e.d(i,{$A:()=>W,$L:()=>v,CM:()=>k,Db:()=>H,Dj:()=>o,El:()=>z,Et:()=>V,FP:()=>_,FY:()=>l,Gr:()=>oe,H:()=>y,IN:()=>B,JV:()=>f,Kc:()=>a,NL:()=>R,O1:()=>X,Og:()=>I,Ps:()=>t,QC:()=>h,RB:()=>j,TD:()=>F,UJ:()=>Z,Vc:()=>r,Vm:()=>Y,Vz:()=>$,WJ:()=>Q,W_:()=>p,Wi:()=>O,Z5:()=>ne,ZP:()=>u,Zp:()=>L,ah:()=>te,b1:()=>M,dY:()=>U,fi:()=>E,jV:()=>J,jc:()=>ae,kH:()=>q,o1:()=>K,p0:()=>S,pD:()=>T,pI:()=>C,pf:()=>se,qP:()=>g,tH:()=>m,tT:()=>n,tb:()=>P,tw:()=>w,u_:()=>c,uo:()=>A,vP:()=>d,wI:()=>x,x4:()=>ee,x_:()=>N,z$:()=>b,z8:()=>G});const n="videopress/media",s="/wp-admin/admin-ajax.php",a="wp/v2/users",c="wp/v2/media",l="wpcom/v2/videopress",P="wpcom/v2/videopress/meta",g="wpcom/v2/videopress/playback-jwt",A="videopress/v1/settings",f="videopress/v1/site",h="SET_IS_FETCHING_VIDEOS",m="SET_VIDEOS_FETCH_ERROR",o="SET_VIDEOS_QUERY",y="SET_VIDEOS_PAGINATION",S="SET_VIDEOS",d="SET_VIDEOS_STORAGE_USED",O="SET_UPLOADED_VIDEO_COUNT",b="SET_IS_FETCHING_UPLOADED_VIDEO_COUNT",T="DISMISS_FIRST_VIDEO_POPOVER",_="SET_LOCAL_VIDEOS",u="SET_IS_FETCHING_LOCAL_VIDEOS",t="SET_LOCAL_VIDEOS_QUERY",r="SET_LOCAL_VIDEOS_PAGINATION",p="SET_LOCAL_VIDEO_UPLOADED",v="SET_VIDEOS_FILTER",V="SET_VIDEO",R="SET_VIDEO_PRIVACY",j="UPDATE_VIDEO_PRIVACY",w="DELETE_VIDEO",I="REMOVE_VIDEO",L="FLUSH_DELETED_VIDEOS",x="UPDATE_PAGINATION_AFTER_DELETE",N="SET_VIDEO_UPLOADING",E="SET_VIDEO_PROCESSING",C="SET_VIDEO_UPLOADED",U="SET_VIDEO_UPLOAD_PROGRESS",k="SET_IS_FETCHING_PURCHASES",G="SET_PURCHASES",F="SET_IS_FETCHING_PLAYBACK_TOKEN",z="SET_PLAYBACK_TOKEN",K="EXPIRE_PLAYBACK_TOKEN",M="SET_USERS",B="SET_USERS_PAGINATION",H="SET_UPDATING_VIDEO_POSTER",Y="UPDATE_VIDEO_POSTER",Q="SET_VIDEOPRESS_SETTINGS",J="UPDATE_VIDEO_IS_PRIVATE",de=null,W="public",Z="private",X="site-default",$=[W,Z,X],re=0,ie=1,q=2,ce=3,ee="G",se="PG-13",oe="R-17",ne="uploader",te="rating",ae="privacy"},"../components/components/button/index.tsx":(D,i,e)=>{"use strict";e.d(i,{Z:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),g=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),A=e.n(g),f=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(h),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),y={};y.insert="head",y.singleton=!1;var S=m()(o.Z,y);const d=o.Z.locals||{};var O=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=c.__,T=(0,f.forwardRef)((u,t)=>{var M,B;const{children:r,variant:p="primary",size:v="normal",weight:V="bold",icon:R,iconSize:j,disabled:w,isDestructive:I,isLoading:L,isExternalLink:x,className:N,text:E,fullWidth:C,...U}=u,k=A()(d.button,N,{[d.normal]:v==="normal",[d.small]:v==="small",[d.icon]:!!R,[d.loading]:L,[d.regular]:V==="regular",[d["full-width"]]:C,[d["is-icon-button"]]:!!R&&!r});U.ref=t;const G=v==="normal"?20:16,F=x&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l.Z,{size:G,icon:P.Z,className:d["external-icon"]}),(0,O.jsx)(n.Z,{as:"span",children:b("(opens in a new tab)","jetpack")})]}),z=x?"_blank":void 0,K=(r==null?void 0:r[0])&&r[0]!==null&&((B=(M=r==null?void 0:r[0])==null?void 0:M.props)==null?void 0:B.className)!=="components-tooltip";return(0,O.jsxs)(s.ZP,{target:z,variant:p,className:A()(k,{"has-text":!!R&&K}),icon:x?void 0:R,iconSize:j,disabled:w,"aria-disabled":w,isDestructive:I,text:E,...U,children:[L&&(0,O.jsx)(a.ZP,{}),(0,O.jsx)("span",{children:r}),F]})});T.displayName="Button";const _=T;try{T.displayName="Button",T.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:T.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(u){}},"../../packages/videopress/src/client/admin/components/pagination/index.tsx":(D,i,e)=>{"use strict";e.d(i,{ZP:()=>t});var n=e("../components/components/button/index.tsx"),s=e("../components/components/text/index.tsx"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js"),P=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(P),A=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(f),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/pagination/style.module.scss"),o={};o.insert="head",o.singleton=!1;var y=h()(m.Z,o);const S=m.Z.locals||{};var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const O=(r,p)=>[...Array(p)].map((v,V)=>V+r),b=()=>(0,d.jsx)(n.Z,{size:"small",className:g()(S.button),variant:"tertiary",disabled:!0,"aria-disabled":!0,children:(0,d.jsx)(s.ZP,{children:"..."})});b.displayName="Ellipsis";const T=({className:r,currentPage:p=1,perPage:v,total:V,minColumns:R=7,disabled:j,onChangePage:w})=>{if(!V||!v)return null;const I=Math.ceil(V/v);if(p>I)return w(I),null;if(p<1)return w(1),null;const L=({page:E})=>{const C=E===p;return(0,d.jsx)(n.Z,{size:"small",className:g()(S.button,C?S.selected:null),variant:C?"primary":"tertiary",disabled:j,"aria-disabled":j,onClick:()=>w(E),children:E})};let x=Math.max(R,7);x=x%2===0?x+1:x;let N;if(I<=x)N=O(1,I).map(E=>(0,d.jsx)(L,{page:E},E));else if(p<x-2)N=(0,d.jsxs)(d.Fragment,{children:[O(1,x-2).map(E=>(0,d.jsx)(L,{page:E},E)),(0,d.jsx)(b,{}),(0,d.jsx)(L,{page:I})]});else if(p>I-x+3)N=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(L,{page:1}),(0,d.jsx)(b,{}),O(I-x+3,x-2).map(E=>(0,d.jsx)(L,{page:E},E))]});else{const E=(x-5)/2;N=(0,d.jsxs)(d.Fragment,{children:[O(1,E).map(C=>(0,d.jsx)(L,{page:C},C)),(0,d.jsx)(b,{}),O(p-1,3).map(C=>(0,d.jsx)(L,{page:C},C)),(0,d.jsx)(b,{}),O(I-E+1,E).map(C=>(0,d.jsx)(L,{page:C},C))]})}return(0,d.jsxs)("div",{className:g()(r,S.wrapper),children:[(0,d.jsx)(n.Z,{size:"small",className:g()(S.navigation,S.button),variant:"tertiary",disabled:j||p===1,"aria-disabled":j||p===1,onClick:()=>w(Math.max(1,p-1)),children:(0,d.jsx)(a.Z,{icon:c.Z})}),N,(0,d.jsx)(n.Z,{size:"small",className:g()(S.navigation,S.button),variant:"tertiary",disabled:j||p===I,"aria-disabled":j||p===I,onClick:()=>w(Math.min(I,p+1)),children:(0,d.jsx)(a.Z,{icon:l.Z})})]})};T.displayName="Pagination";const _=r=>{const p=useSearchParams(),v=I=>{I>1?p.setParam("page",I):p.deleteParam("page"),p.update()},{page:V,itemsPerPage:R,total:j,isFetching:w}=useVideos();return j<=R?_jsx("div",{className:classnames(r.className,styles["pagination-placeholder"])}):_jsx(T,{...r,perPage:R,onChangePage:v,currentPage:V,total:j,disabled:w||r.disabled})},u=r=>{const{setPage:p,page:v,itemsPerPage:V,total:R,isFetching:j}=useLocalVideos();return R<V?_jsx("div",{className:classnames(r.className,styles["pagination-placeholder"])}):_jsx(T,{...r,perPage:V,onChangePage:p,currentPage:v,total:R,disabled:j||r.disabled})},t=T;try{_.displayName="ConnectPagination",_.__docgenInfo={description:"",displayName:"ConnectPagination",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectPagination"]={docgenInfo:_.__docgenInfo,name:"ConnectPagination",path:"../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectPagination"})}catch(r){}try{u.displayName="ConnectLocalPagination",u.__docgenInfo={description:"",displayName:"ConnectLocalPagination",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectLocalPagination"]={docgenInfo:u.__docgenInfo,name:"ConnectLocalPagination",path:"../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectLocalPagination"})}catch(r){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(D,i,e)=>{"use strict";e.d(i,{Z:()=>P});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(s());l.push([D.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),l.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const P=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/pagination/style.module.scss":(D,i,e)=>{"use strict";e.d(i,{Z:()=>P});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(s());l.push([D.id,".FIsscdIRHTHQQa0WvC2O{display:flex;align-items:center}.FIsscdIRHTHQQa0WvC2O .LdDXsaGLnMxbCHU1kS9o span{display:flex}.FIsscdIRHTHQQa0WvC2O .bWYiUqAFR25tuNUxQiwA{width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4);line-height:calc(var(--spacing-base)*4)}.FIsscdIRHTHQQa0WvC2O .bWYiUqAFR25tuNUxQiwA:not(.qYtVdpzgTrzCTaVBAAEq):disabled{background-color:unset}.IISZeXc2aCXhmHAQkieK{height:calc(var(--spacing-base)*4)}",""]),l.locals={wrapper:"FIsscdIRHTHQQa0WvC2O",navigation:"LdDXsaGLnMxbCHU1kS9o",button:"bWYiUqAFR25tuNUxQiwA",selected:"qYtVdpzgTrzCTaVBAAEq","pagination-placeholder":"IISZeXc2aCXhmHAQkieK"};const P=l},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":D=>{function i(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}i.keys=()=>[],i.resolve=i,i.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",D.exports=i}}]);})();
