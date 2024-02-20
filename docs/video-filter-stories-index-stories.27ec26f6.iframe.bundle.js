"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5259],{"../../packages/videopress/src/client/admin/components/video-filter/stories/index.stories.tsx":(L,_,n)=>{var c,s,r,i,S,I,T,a,O;n.r(_),n.d(_,{__namedExportsOrder:()=>d,checkboxCheckmark:()=>o,default:()=>D,filterButton:()=>e,filterSection:()=>t});var l=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),E=n("../../packages/videopress/src/client/admin/components/video-filter/index.tsx"),V=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
/**
 * Internal dependencies
 */
import { FilterButton, FilterSection, CheckboxCheckmark } from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Filter',
	component: FilterButton,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta< typeof FilterButton >;

const VideoFilterSectionTemplate: ComponentStory< typeof FilterSection > = FilterSection;
export const filterSection = VideoFilterSectionTemplate.bind( {} );
filterSection.args = {};

const VideoFilterButtonTemplate: ComponentStory< typeof FilterButton > = FilterButton;
export const filterButton = VideoFilterButtonTemplate.bind( {} );
filterButton.args = {
	isActive: false,
	onClick: action( 'onClick' ),
};

const CheckboxCheckmarkButtonTemplate: ComponentStory< typeof CheckboxCheckmark > =
	CheckboxCheckmark;
export const checkboxCheckmark = CheckboxCheckmarkButtonTemplate.bind( {} );
checkboxCheckmark.args = {
	label: 'Is it checked?',
};
`,p={filterSection:{startLoc:{col:75,line:22},endLoc:{col:88,line:22},startBody:{col:75,line:22},endBody:{col:88,line:22}},filterButton:{startLoc:{col:73,line:26},endLoc:{col:85,line:26},startBody:{col:73,line:26},endBody:{col:85,line:26}},checkboxCheckmark:{startLoc:{col:1,line:34},endLoc:{col:18,line:34},startBody:{col:1,line:34},endBody:{col:18,line:34}}};const D={title:"Packages/VideoPress/Video Filter",component:E.Lb,parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
/**
 * Internal dependencies
 */
import { FilterButton, FilterSection, CheckboxCheckmark } from '..';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Filter',
	component: FilterButton,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta< typeof FilterButton >;

const VideoFilterSectionTemplate: ComponentStory< typeof FilterSection > = FilterSection;
export const filterSection = VideoFilterSectionTemplate.bind( {} );
filterSection.args = {};

const VideoFilterButtonTemplate: ComponentStory< typeof FilterButton > = FilterButton;
export const filterButton = VideoFilterButtonTemplate.bind( {} );
filterButton.args = {
	isActive: false,
	onClick: action( 'onClick' ),
};

const CheckboxCheckmarkButtonTemplate: ComponentStory< typeof CheckboxCheckmark > =
	CheckboxCheckmark;
export const checkboxCheckmark = CheckboxCheckmarkButtonTemplate.bind( {} );
checkboxCheckmark.args = {
	label: 'Is it checked?',
};
`,locationsMap:{"filter-section":{startLoc:{col:75,line:22},endLoc:{col:88,line:22},startBody:{col:75,line:22},endBody:{col:88,line:22}},"filter-button":{startLoc:{col:73,line:26},endLoc:{col:85,line:26},startBody:{col:73,line:26},endBody:{col:85,line:26}},"checkbox-checkmark":{startLoc:{col:1,line:34},endLoc:{col:18,line:34},startBody:{col:1,line:34},endBody:{col:18,line:34}}}},layout:"centered"}},t=E.Oy.bind({});t.args={};const e=E.Lb.bind({});e.args={isActive:!1,onClick:(0,l.aD)("onClick")};const o=E.JC.bind({});o.args={label:"Is it checked?"},t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"FilterSection",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}},e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"FilterButton",...(I=(S=e.parameters)==null?void 0:S.docs)==null?void 0:I.source}}},o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"CheckboxCheckmark",...(O=(a=o.parameters)==null?void 0:a.docs)==null?void 0:O.source}}};const d=["filterSection","filterButton","checkboxCheckmark"]},"../../packages/videopress/src/client/state/constants.js":(L,_,n)=>{n.d(_,{$A:()=>m,$L:()=>F,CM:()=>M,Db:()=>Q,Dj:()=>d,El:()=>W,Et:()=>B,FP:()=>T,FY:()=>D,Gr:()=>ot,H:()=>c,IN:()=>J,JV:()=>e,Kc:()=>V,NL:()=>U,O1:()=>k,Og:()=>y,Ps:()=>O,QC:()=>C,RB:()=>h,TD:()=>K,UJ:()=>R,Vc:()=>N,Vm:()=>X,Vz:()=>$,WJ:()=>z,W_:()=>u,Wi:()=>i,Z5:()=>nt,ZP:()=>a,Zp:()=>f,ah:()=>Et,b1:()=>j,dY:()=>Y,fi:()=>v,jV:()=>Z,jc:()=>_t,kH:()=>q,o1:()=>w,p0:()=>s,pD:()=>I,pI:()=>g,pf:()=>et,qP:()=>t,tH:()=>o,tT:()=>l,tb:()=>P,tw:()=>b,u_:()=>p,uo:()=>A,vP:()=>r,wI:()=>x,x4:()=>tt,x_:()=>G,z$:()=>S,z8:()=>H});const l="videopress/media",E="/wp-admin/admin-ajax.php",V="wp/v2/users",p="wp/v2/media",D="wpcom/v2/videopress",P="wpcom/v2/videopress/meta",t="wpcom/v2/videopress/playback-jwt",A="videopress/v1/settings",e="videopress/v1/site",C="SET_IS_FETCHING_VIDEOS",o="SET_VIDEOS_FETCH_ERROR",d="SET_VIDEOS_QUERY",c="SET_VIDEOS_PAGINATION",s="SET_VIDEOS",r="SET_VIDEOS_STORAGE_USED",i="SET_UPLOADED_VIDEO_COUNT",S="SET_IS_FETCHING_UPLOADED_VIDEO_COUNT",I="DISMISS_FIRST_VIDEO_POPOVER",T="SET_LOCAL_VIDEOS",a="SET_IS_FETCHING_LOCAL_VIDEOS",O="SET_LOCAL_VIDEOS_QUERY",N="SET_LOCAL_VIDEOS_PAGINATION",u="SET_LOCAL_VIDEO_UPLOADED",F="SET_VIDEOS_FILTER",B="SET_VIDEO",U="SET_VIDEO_PRIVACY",h="UPDATE_VIDEO_PRIVACY",b="DELETE_VIDEO",y="REMOVE_VIDEO",f="FLUSH_DELETED_VIDEOS",x="UPDATE_PAGINATION_AFTER_DELETE",G="SET_VIDEO_UPLOADING",v="SET_VIDEO_PROCESSING",g="SET_VIDEO_UPLOADED",Y="SET_VIDEO_UPLOAD_PROGRESS",M="SET_IS_FETCHING_PURCHASES",H="SET_PURCHASES",K="SET_IS_FETCHING_PLAYBACK_TOKEN",W="SET_PLAYBACK_TOKEN",w="EXPIRE_PLAYBACK_TOKEN",j="SET_USERS",J="SET_USERS_PAGINATION",Q="SET_UPDATING_VIDEO_POSTER",X="UPDATE_VIDEO_POSTER",z="SET_VIDEOPRESS_SETTINGS",Z="UPDATE_VIDEO_IS_PRIVATE",ct=null,m="public",R="private",k="site-default",$=[m,R,k],st=0,rt=1,q=2,it=3,tt="G",et="PG-13",ot="R-17",nt="uploader",Et="rating",_t="privacy"}}]);})();
