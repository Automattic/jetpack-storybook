"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5259],{"../../packages/videopress/src/client/admin/components/video-filter/stories/index.stories.tsx":(L,E,n)=>{var _,r,s,i,a,S,I,T,l;n.r(E),n.d(E,{__namedExportsOrder:()=>d,checkboxCheckmark:()=>o,default:()=>D,filterButton:()=>e,filterSection:()=>t});var O=n("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),c=n("../../packages/videopress/src/client/admin/components/video-filter/index.tsx"),p=`/**
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
`,m={filterSection:{startLoc:{col:73,line:20},endLoc:{col:86,line:20},startBody:{col:73,line:20},endBody:{col:86,line:20}},filterButton:{startLoc:{col:71,line:23},endLoc:{col:83,line:23},startBody:{col:71,line:23},endBody:{col:83,line:23}},checkboxCheckmark:{startLoc:{col:82,line:29},endLoc:{col:99,line:29},startBody:{col:82,line:29},endBody:{col:99,line:29}}};const D={title:"Packages/VideoPress/Video Filter",component:c.Lb,parameters:{storySource:{source:`/**
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
export default ({
  title: 'Packages/VideoPress/Video Filter',
  component: FilterButton,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof FilterButton>);
const VideoFilterSectionTemplate: ComponentStory<typeof FilterSection> = FilterSection;
export const filterSection = VideoFilterSectionTemplate.bind({});
filterSection.args = {};
const VideoFilterButtonTemplate: ComponentStory<typeof FilterButton> = FilterButton;
export const filterButton = VideoFilterButtonTemplate.bind({});
filterButton.args = {
  isActive: false,
  onClick: action('onClick')
};
const CheckboxCheckmarkButtonTemplate: ComponentStory<typeof CheckboxCheckmark> = CheckboxCheckmark;
export const checkboxCheckmark = CheckboxCheckmarkButtonTemplate.bind({});
checkboxCheckmark.args = {
  label: 'Is it checked?'
};
filterSection.parameters = {
  ...filterSection.parameters,
  docs: {
    ...filterSection.parameters?.docs,
    source: {
      originalSource: "FilterSection",
      ...filterSection.parameters?.docs?.source
    }
  }
};
filterButton.parameters = {
  ...filterButton.parameters,
  docs: {
    ...filterButton.parameters?.docs,
    source: {
      originalSource: "FilterButton",
      ...filterButton.parameters?.docs?.source
    }
  }
};
checkboxCheckmark.parameters = {
  ...checkboxCheckmark.parameters,
  docs: {
    ...checkboxCheckmark.parameters?.docs,
    source: {
      originalSource: "CheckboxCheckmark",
      ...checkboxCheckmark.parameters?.docs?.source
    }
  }
};`,locationsMap:{"filter-section":{startLoc:{col:73,line:20},endLoc:{col:86,line:20},startBody:{col:73,line:20},endBody:{col:86,line:20}},"filter-button":{startLoc:{col:71,line:23},endLoc:{col:83,line:23},startBody:{col:71,line:23},endBody:{col:83,line:23}},"checkbox-checkmark":{startLoc:{col:82,line:29},endLoc:{col:99,line:29},startBody:{col:82,line:29},endBody:{col:99,line:29}}}},layout:"centered"}},t=c.Oy.bind({});t.args={};const e=c.Lb.bind({});e.args={isActive:!1,onClick:(0,O.aD)("onClick")};const o=c.JC.bind({});o.args={label:"Is it checked?"},t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:"FilterSection",...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}},e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"FilterButton",...(S=(a=e.parameters)==null?void 0:a.docs)==null?void 0:S.source}}},o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:"CheckboxCheckmark",...(l=(T=o.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};const d=["filterSection","filterButton","checkboxCheckmark"]},"../../packages/videopress/src/client/state/constants.js":(L,E,n)=>{n.d(E,{$A:()=>A,$L:()=>F,CM:()=>M,Db:()=>Q,Dj:()=>d,El:()=>W,Et:()=>h,FP:()=>I,FY:()=>D,Gr:()=>ot,H:()=>_,IN:()=>J,JV:()=>e,Kc:()=>p,NL:()=>B,O1:()=>R,Og:()=>U,Ps:()=>l,QC:()=>P,RB:()=>b,TD:()=>K,UJ:()=>k,Vc:()=>u,Vm:()=>X,Vz:()=>$,WJ:()=>z,W_:()=>N,Wi:()=>i,Z5:()=>nt,ZP:()=>T,Zp:()=>y,ah:()=>ct,b1:()=>j,dY:()=>Y,fi:()=>v,jV:()=>Z,jc:()=>Et,kH:()=>q,o1:()=>w,p0:()=>r,pD:()=>S,pI:()=>g,pf:()=>et,qP:()=>t,tH:()=>o,tT:()=>O,tb:()=>C,tw:()=>f,u_:()=>m,uo:()=>V,vP:()=>s,wI:()=>x,x4:()=>tt,x_:()=>G,z$:()=>a,z8:()=>H});const O="videopress/media",c="/wp-admin/admin-ajax.php",p="wp/v2/users",m="wp/v2/media",D="wpcom/v2/videopress",C="wpcom/v2/videopress/meta",t="wpcom/v2/videopress/playback-jwt",V="videopress/v1/settings",e="videopress/v1/site",P="SET_IS_FETCHING_VIDEOS",o="SET_VIDEOS_FETCH_ERROR",d="SET_VIDEOS_QUERY",_="SET_VIDEOS_PAGINATION",r="SET_VIDEOS",s="SET_VIDEOS_STORAGE_USED",i="SET_UPLOADED_VIDEO_COUNT",a="SET_IS_FETCHING_UPLOADED_VIDEO_COUNT",S="DISMISS_FIRST_VIDEO_POPOVER",I="SET_LOCAL_VIDEOS",T="SET_IS_FETCHING_LOCAL_VIDEOS",l="SET_LOCAL_VIDEOS_QUERY",u="SET_LOCAL_VIDEOS_PAGINATION",N="SET_LOCAL_VIDEO_UPLOADED",F="SET_VIDEOS_FILTER",h="SET_VIDEO",B="SET_VIDEO_PRIVACY",b="UPDATE_VIDEO_PRIVACY",f="DELETE_VIDEO",U="REMOVE_VIDEO",y="FLUSH_DELETED_VIDEOS",x="UPDATE_PAGINATION_AFTER_DELETE",G="SET_VIDEO_UPLOADING",v="SET_VIDEO_PROCESSING",g="SET_VIDEO_UPLOADED",Y="SET_VIDEO_UPLOAD_PROGRESS",M="SET_IS_FETCHING_PURCHASES",H="SET_PURCHASES",K="SET_IS_FETCHING_PLAYBACK_TOKEN",W="SET_PLAYBACK_TOKEN",w="EXPIRE_PLAYBACK_TOKEN",j="SET_USERS",J="SET_USERS_PAGINATION",Q="SET_UPDATING_VIDEO_POSTER",X="UPDATE_VIDEO_POSTER",z="SET_VIDEOPRESS_SETTINGS",Z="UPDATE_VIDEO_IS_PRIVATE",_t=null,A="public",k="private",R="site-default",$=[A,k,R],rt=0,st=1,q=2,it=3,tt="G",et="PG-13",ot="R-17",nt="uploader",ct="rating",Et="privacy"}}]);})();
