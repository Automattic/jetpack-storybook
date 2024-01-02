"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8608],{"../../packages/videopress/src/client/admin/components/pagination/stories/index.stories.tsx":(w,S,s)=>{var d,l,i;s.r(S),s.d(S,{__namedExportsOrder:()=>D,_default:()=>_,default:()=>x});var o=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.5/node_modules/@storybook/addon-actions/dist/index.mjs"),g=s("@storybook/client-api"),t=s.n(g),T=s("../../packages/videopress/src/client/admin/components/pagination/index.tsx"),u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),R=`import { action } from '@storybook/addon-actions';
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
`,O={_default:{startLoc:{col:54,line:11},endLoc:{col:1,line:22},startBody:{col:54,line:11},endBody:{col:1,line:22}}};const x={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:1,line:22},startBody:{col:54,line:11},endBody:{col:1,line:22}}}}},title:"Packages/VideoPress/Pagination",component:T.ZP},h=e=>{const[,P]=(0,g.useArgs)(),v=b=>{P({currentPage:b,disabled:!0}),(0,o.aD)("onPageChange")(b),setTimeout(()=>{P({disabled:!1})},500)};return(0,u.jsx)(T.ZP,{...e,onChangePage:v})};h.displayName="Template";const _=h.bind({});_.args={currentPage:1,perPage:10,total:100,minColumns:7,disabled:!1},_.parameters={..._.parameters,docs:{...(d=_.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(i=(l=_.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const D=["_default"]},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(w,S,s)=>{s.d(S,{ZP:()=>T});var o=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),g=s("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js"),t=s("../../packages/videopress/src/client/state/constants.js");function T(){const O=(0,o.Z)(n=>n(t.tT).getVideos()),x=(0,o.Z)(n=>n(t.tT).getUploadingVideos()),h=x.length>0,_="",D=(0,o.Z)(n=>n(t.tT).getUploadedVideoCount()),d=(0,o.Z)(n=>n(t.tT).getIsFetching()),l=(0,o.Z)(n=>n(t.tT).getIsFetchingUploadedVideoCount()),i=(0,o.Z)(n=>n(t.tT).getFirstUploadedVideoId()),e=(0,o.Z)(n=>n(t.tT).getFirstVideoProcessed()),P=(0,o.Z)(n=>n(t.tT).getDismissedFirstVideoPopover()),v=(0,o.Z)(n=>n(t.tT).getVideosQuery()||{}),b=(0,o.Z)(n=>n(t.tT).getPagination()),p=(0,o.Z)(n=>n(t.tT).getStorageUsed(),[]),N=(0,o.Z)(n=>n(t.tT).getVideosFilter());return{items:O,uploading:x,isUploading:h,search:_,filter:N,uploadedVideoCount:D,isFetching:d,isFetchingUploadedVideoCount:l,firstUploadedVideoId:i,firstVideoProcessed:e,dismissedFirstVideoPopover:P,...v,...b,...p,setPage:n=>(0,g.W)(t.tT).setVideosQuery({page:n}),setSearch:n=>(0,g.W)(t.tT).setVideosQuery({search:n}),setFilter:(0,g.W)(t.tT).setVideosFilter}}const u=()=>{const O=useSelect(d=>d(STORE_ID).getLocalVideos()),x=useSelect(d=>d(STORE_ID).getUploadedLocalVideoCount()),h=useSelect(d=>d(STORE_ID).getIsFetchingLocalVideos()),_=useSelect(d=>d(STORE_ID).getLocalVideosQuery()||{}),D=useSelect(d=>d(STORE_ID).getLocalPagination());return{items:O,uploadedLocalVideoCount:x,isFetching:h,..._,...D,setPage:d=>dispatch(STORE_ID).setLocalVideosQuery({page:d})}},R=()=>useSelect(x=>x(STORE_ID).getVideosQuery()||{})},"../../packages/videopress/src/client/state/constants.js":(w,S,s)=>{s.d(S,{$A:()=>Z,$L:()=>j,CM:()=>M,Db:()=>W,Dj:()=>d,El:()=>k,Et:()=>V,FP:()=>p,FY:()=>u,Gr:()=>ns,H:()=>l,IN:()=>H,JV:()=>h,Kc:()=>t,NL:()=>y,O1:()=>F,Og:()=>r,Ps:()=>n,QC:()=>_,RB:()=>m,TD:()=>U,UJ:()=>z,Vc:()=>E,Vm:()=>Y,Vz:()=>q,WJ:()=>Q,W_:()=>a,Wi:()=>P,Z5:()=>os,ZP:()=>N,Zp:()=>L,ah:()=>ts,b1:()=>X,dY:()=>G,fi:()=>c,jV:()=>J,jc:()=>as,kH:()=>$,o1:()=>K,p0:()=>i,pD:()=>b,pI:()=>I,pf:()=>es,qP:()=>O,tH:()=>D,tT:()=>o,tb:()=>R,tw:()=>C,u_:()=>T,uo:()=>x,vP:()=>e,wI:()=>A,x4:()=>ss,x_:()=>f,z$:()=>v,z8:()=>B});const o="videopress/media",g="/wp-admin/admin-ajax.php",t="wp/v2/users",T="wp/v2/media",u="wpcom/v2/videopress",R="wpcom/v2/videopress/meta",O="wpcom/v2/videopress/playback-jwt",x="videopress/v1/settings",h="videopress/v1/site",_="SET_IS_FETCHING_VIDEOS",D="SET_VIDEOS_FETCH_ERROR",d="SET_VIDEOS_QUERY",l="SET_VIDEOS_PAGINATION",i="SET_VIDEOS",e="SET_VIDEOS_STORAGE_USED",P="SET_UPLOADED_VIDEO_COUNT",v="SET_IS_FETCHING_UPLOADED_VIDEO_COUNT",b="DISMISS_FIRST_VIDEO_POPOVER",p="SET_LOCAL_VIDEOS",N="SET_IS_FETCHING_LOCAL_VIDEOS",n="SET_LOCAL_VIDEOS_QUERY",E="SET_LOCAL_VIDEOS_PAGINATION",a="SET_LOCAL_VIDEO_UPLOADED",j="SET_VIDEOS_FILTER",V="SET_VIDEO",y="SET_VIDEO_PRIVACY",m="UPDATE_VIDEO_PRIVACY",C="DELETE_VIDEO",r="REMOVE_VIDEO",L="FLUSH_DELETED_VIDEOS",A="UPDATE_PAGINATION_AFTER_DELETE",f="SET_VIDEO_UPLOADING",c="SET_VIDEO_PROCESSING",I="SET_VIDEO_UPLOADED",G="SET_VIDEO_UPLOAD_PROGRESS",M="SET_IS_FETCHING_PURCHASES",B="SET_PURCHASES",U="SET_IS_FETCHING_PLAYBACK_TOKEN",k="SET_PLAYBACK_TOKEN",K="EXPIRE_PLAYBACK_TOKEN",X="SET_USERS",H="SET_USERS_PAGINATION",W="SET_UPDATING_VIDEO_POSTER",Y="UPDATE_VIDEO_POSTER",Q="SET_VIDEOPRESS_SETTINGS",J="UPDATE_VIDEO_IS_PRIVATE",ds=null,Z="public",z="private",F="site-default",q=[Z,z,F],is=0,cs=1,$=2,rs=3,ss="G",es="PG-13",ns="R-17",os="uploader",ts="rating",as="privacy"},"../components/components/button/index.tsx":(w,S,s)=>{s.d(S,{Z:()=>P});var o=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),g=s("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),t=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),T=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),u=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),R=s.n(u),O=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=s.n(x),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),D={};D.insert="head",D.singleton=!1;var d=h()(_.Z,D);const l=_.Z.locals||{};var i=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=(0,O.forwardRef)((v,b)=>{var U,k;const{children:p,variant:N="primary",size:n="normal",weight:E="bold",icon:a,iconSize:j,disabled:V,isDestructive:y,isLoading:m,isExternalLink:C,className:r,text:L,fullWidth:A,...f}=v,c=R()(l.button,r,{[l.normal]:n==="normal",[l.small]:n==="small",[l.icon]:!!a,[l.loading]:m,[l.regular]:E==="regular",[l["full-width"]]:A,[l["is-icon-button"]]:!!a&&!p});f.ref=b;const I=n==="normal"?20:16,G=C&&(0,i.jsx)(t.Z,{size:I,icon:T.Z,className:l["external-icon"]}),M=C?"_blank":void 0,B=(p==null?void 0:p[0])&&p[0]!==null&&((k=(U=p==null?void 0:p[0])==null?void 0:U.props)==null?void 0:k.className)!=="components-tooltip";return(0,i.jsxs)(o.ZP,{target:M,variant:N,className:R()(c,{"has-text":!!a&&B}),icon:C?void 0:a,iconSize:j,disabled:V,"aria-disabled":V,isDestructive:y,text:L,...f,children:[m&&(0,i.jsx)(g.ZP,{}),(0,i.jsx)("span",{children:p}),G]})});e.displayName="Button";const P=e;try{e.displayName="Button",e.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:e.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(v){}},"../../packages/videopress/src/client/admin/components/pagination/index.tsx":(w,S,s)=>{s.d(S,{ZP:()=>n});var o=s("../components/components/button/index.tsx"),g=s("../components/components/text/index.tsx"),t=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),T=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js"),u=s("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js"),R=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=s.n(R),x=s("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),h=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(h),D=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/pagination/style.module.scss"),d={};d.insert="head",d.singleton=!1;var l=_()(D.Z,d);const i=D.Z.locals||{};var e=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=(E,a)=>[...Array(a)].map((j,V)=>V+E),v=()=>(0,e.jsx)(o.Z,{size:"small",className:O()(i.button),variant:"tertiary",disabled:!0,"aria-disabled":!0,children:(0,e.jsx)(g.ZP,{children:"..."})});v.displayName="Ellipsis";const b=({className:E,currentPage:a=1,perPage:j,total:V,minColumns:y=7,disabled:m,onChangePage:C})=>{if(!V||!j)return null;const r=Math.ceil(V/j);if(a>r)return C(r),null;if(a<1)return C(1),null;const L=({page:c})=>{const I=c===a;return(0,e.jsx)(o.Z,{size:"small",className:O()(i.button,I?i.selected:null),variant:I?"primary":"tertiary",disabled:m,"aria-disabled":m,onClick:()=>C(c),children:c})};let A=Math.max(y,7);A=A%2===0?A+1:A;let f;if(r<=A)f=P(1,r).map(c=>(0,e.jsx)(L,{page:c},c));else if(a<A-2)f=(0,e.jsxs)(e.Fragment,{children:[P(1,A-2).map(c=>(0,e.jsx)(L,{page:c},c)),(0,e.jsx)(v,{}),(0,e.jsx)(L,{page:r})]});else if(a>r-A+3)f=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L,{page:1}),(0,e.jsx)(v,{}),P(r-A+3,A-2).map(c=>(0,e.jsx)(L,{page:c},c))]});else{const c=(A-5)/2;f=(0,e.jsxs)(e.Fragment,{children:[P(1,c).map(I=>(0,e.jsx)(L,{page:I},I)),(0,e.jsx)(v,{}),P(a-1,3).map(I=>(0,e.jsx)(L,{page:I},I)),(0,e.jsx)(v,{}),P(r-c+1,c).map(I=>(0,e.jsx)(L,{page:I},I))]})}return(0,e.jsxs)("div",{className:O()(E,i.wrapper),children:[(0,e.jsx)(o.Z,{size:"small",className:O()(i.navigation,i.button),variant:"tertiary",disabled:m||a===1,"aria-disabled":m||a===1,onClick:()=>C(Math.max(1,a-1)),children:(0,e.jsx)(t.Z,{icon:T.Z})}),f,(0,e.jsx)(o.Z,{size:"small",className:O()(i.navigation,i.button),variant:"tertiary",disabled:m||a===r,"aria-disabled":m||a===r,onClick:()=>C(Math.min(r,a+1)),children:(0,e.jsx)(t.Z,{icon:u.Z})})]})};b.displayName="Pagination";const p=E=>{const a=useSearchParams(),j=r=>{r>1?a.setParam("page",r):a.deleteParam("page"),a.update()},{page:V,itemsPerPage:y,total:m,isFetching:C}=useVideos();return m<=y?_jsx("div",{className:classnames(E.className,styles["pagination-placeholder"])}):_jsx(b,{...E,perPage:y,onChangePage:j,currentPage:V,total:m,disabled:C||E.disabled})},N=E=>{const{setPage:a,page:j,itemsPerPage:V,total:y,isFetching:m}=useLocalVideos();return y<V?_jsx("div",{className:classnames(E.className,styles["pagination-placeholder"])}):_jsx(b,{...E,perPage:V,onChangePage:a,currentPage:j,total:y,disabled:m||E.disabled})},n=b;try{p.displayName="ConnectPagination",p.__docgenInfo={description:"",displayName:"ConnectPagination",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectPagination"]={docgenInfo:p.__docgenInfo,name:"ConnectPagination",path:"../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectPagination"})}catch(E){}try{N.displayName="ConnectLocalPagination",N.__docgenInfo={description:"",displayName:"ConnectLocalPagination",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectLocalPagination"]={docgenInfo:N.__docgenInfo,name:"ConnectLocalPagination",path:"../../packages/videopress/src/client/admin/components/pagination/index.tsx#ConnectLocalPagination"})}catch(E){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(w,S,s)=>{s.d(S,{Z:()=>R});var o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=s.n(o),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),T=s.n(t),u=T()(g());u.push([w.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),u.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const R=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/pagination/style.module.scss":(w,S,s)=>{s.d(S,{Z:()=>R});var o=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=s.n(o),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),T=s.n(t),u=T()(g());u.push([w.id,".FIsscdIRHTHQQa0WvC2O{display:flex;align-items:center}.FIsscdIRHTHQQa0WvC2O .LdDXsaGLnMxbCHU1kS9o span{display:flex}.FIsscdIRHTHQQa0WvC2O .bWYiUqAFR25tuNUxQiwA{width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4);line-height:calc(var(--spacing-base)*4)}.FIsscdIRHTHQQa0WvC2O .bWYiUqAFR25tuNUxQiwA:not(.qYtVdpzgTrzCTaVBAAEq):disabled{background-color:unset}.IISZeXc2aCXhmHAQkieK{height:calc(var(--spacing-base)*4)}",""]),u.locals={wrapper:"FIsscdIRHTHQQa0WvC2O",navigation:"LdDXsaGLnMxbCHU1kS9o",button:"bWYiUqAFR25tuNUxQiwA",selected:"qYtVdpzgTrzCTaVBAAEq","pagination-placeholder":"IISZeXc2aCXhmHAQkieK"};const R=u}}]);})();