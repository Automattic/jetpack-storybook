"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4843],{"../../packages/my-jetpack/_inc/components/product-detail-card/stories/index.stories.jsx":(A,u,e)=>{var Z,I,w,V,X,G,U,K,W,q,H,Y,F,Q,$,ee,ae,se,te,re,oe,ne,ce,de,le,ie,pe,ue,me,ge,ke,_e,Ce,ye,xe,be,Be,ve,Se;e.r(u),e.d(u,{Default:()=>d,JetpackAntiSpam:()=>E,JetpackAntiSpamCard:()=>i,JetpackBackup:()=>l,JetpackBackupCard:()=>c,JetpackBoostCard:()=>k,JetpackCRMCard:()=>P,JetpackExtrasCard:()=>D,JetpackScanCard:()=>f,JetpackSearchCard:()=>b,JetpackVideoPressCard:()=>S,SecurityBundle:()=>v,__namedExportsOrder:()=>N,default:()=>j,jetpackBoost:()=>x});var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),m=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ProductDetailCard from '../index.jsx';
import { getAllMockData } from './utils.js';

export default {
	title: 'Packages/My Jetpack/Product Detail Card',
	component: ProductDetailCard,
	parameters: {
		layout: 'centered',
	},
};

const mockData = getAllMockData();

const DefaultProductDetailCard = args => <ProductDetailCard { ...args } slug="backup" />;

export const Default = DefaultProductDetailCard.bind( {} );
Default.parameters = { mockData };
Default.args = {};

const AntiSpamTemplate = args => <ProductDetailCard { ...args } slug="anti-spam" />;
export const JetpackAntiSpam = AntiSpamTemplate.bind( {} );
JetpackAntiSpam.parameters = { mockData };

const BackupTemplate = args => <ProductDetailCard { ...args } slug="backup" />;
export const JetpackBackup = BackupTemplate.bind( {} );
JetpackBackup.parameters = { mockData };

const BoostTemplate = args => <ProductDetailCard { ...args } slug="boost" />;
export const jetpackBoost = BoostTemplate.bind( {} );
jetpackBoost.parameters = { mockData };

const AntiSpamCardTemplate = args => <ProductDetailCard { ...args } slug="anti-spam" />;
export const JetpackAntiSpamCard = AntiSpamCardTemplate.bind( {} );
JetpackAntiSpamCard.parameters = { mockData };

const BackupCardTemplate = args => <ProductDetailCard { ...args } slug="backup" />;
export const JetpackBackupCard = BackupCardTemplate.bind( {} );
JetpackBackupCard.parameters = { mockData };

const BoostCardTemplate = args => <ProductDetailCard { ...args } slug="boost" />;
export const JetpackBoostCard = BoostCardTemplate.bind( {} );
JetpackBoostCard.parameters = { mockData };

const CRMCardTemplate = args => <ProductDetailCard { ...args } slug="crm" />;
export const JetpackCRMCard = CRMCardTemplate.bind( {} );
JetpackCRMCard.parameters = { mockData };

const ExtrasCardTemplate = args => <ProductDetailCard { ...args } slug="extras" />;
export const JetpackExtrasCard = ExtrasCardTemplate.bind( {} );
JetpackExtrasCard.parameters = { mockData };

const SearchCardTemplate = args => <ProductDetailCard { ...args } slug="search" />;
export const JetpackSearchCard = SearchCardTemplate.bind( {} );
JetpackSearchCard.parameters = { mockData };

const ScanCardTemplate = args => <ProductDetailCard { ...args } slug="scan" />;
export const JetpackScanCard = ScanCardTemplate.bind( {} );
JetpackScanCard.parameters = { mockData };

const SecurityCardTemplate = args => <ProductDetailCard { ...args } slug="security" />;
export const SecurityBundle = SecurityCardTemplate.bind( {} );
SecurityBundle.parameters = { mockData };

const VideoPressCardTemplate = args => <ProductDetailCard { ...args } slug="videopress" />;
export const JetpackVideoPressCard = VideoPressCardTemplate.bind( {} );
JetpackVideoPressCard.storyName = 'Jetpack VideoPress';
JetpackVideoPressCard.parameters = { mockData };
`,y={Default:{startLoc:{col:33,line:13},endLoc:{col:86,line:13},startBody:{col:33,line:13},endBody:{col:86,line:13}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:81,line:19},startBody:{col:25,line:19},endBody:{col:81,line:19}},JetpackBackup:{startLoc:{col:23,line:24},endLoc:{col:76,line:24},startBody:{col:23,line:24},endBody:{col:76,line:24}},jetpackBoost:{startLoc:{col:22,line:29},endLoc:{col:74,line:29},startBody:{col:22,line:29},endBody:{col:74,line:29}},JetpackAntiSpamCard:{startLoc:{col:29,line:34},endLoc:{col:85,line:34},startBody:{col:29,line:34},endBody:{col:85,line:34}},JetpackBackupCard:{startLoc:{col:27,line:39},endLoc:{col:80,line:39},startBody:{col:27,line:39},endBody:{col:80,line:39}},JetpackBoostCard:{startLoc:{col:26,line:44},endLoc:{col:78,line:44},startBody:{col:26,line:44},endBody:{col:78,line:44}},JetpackCRMCard:{startLoc:{col:24,line:49},endLoc:{col:74,line:49},startBody:{col:24,line:49},endBody:{col:74,line:49}},JetpackExtrasCard:{startLoc:{col:27,line:54},endLoc:{col:80,line:54},startBody:{col:27,line:54},endBody:{col:80,line:54}},JetpackSearchCard:{startLoc:{col:27,line:59},endLoc:{col:80,line:59},startBody:{col:27,line:59},endBody:{col:80,line:59}},JetpackScanCard:{startLoc:{col:25,line:64},endLoc:{col:76,line:64},startBody:{col:25,line:64},endBody:{col:76,line:64}},SecurityBundle:{startLoc:{col:29,line:69},endLoc:{col:84,line:69},startBody:{col:29,line:69},endBody:{col:84,line:69}},JetpackVideoPressCard:{startLoc:{col:31,line:74},endLoc:{col:88,line:74},startBody:{col:31,line:74},endBody:{col:88,line:74}}};const j={title:"Packages/My Jetpack/Product Detail Card",component:s.Z,parameters:{storySource:{source:`
import React from 'react';
import ProductDetailCard from '../index.jsx';
import { getAllMockData } from './utils.js';
export default {
  title: 'Packages/My Jetpack/Product Detail Card',
  component: ProductDetailCard,
  parameters: {
    layout: 'centered'
  }
};
const mockData = getAllMockData();
const DefaultProductDetailCard = args => <ProductDetailCard {...args} slug="backup" />;
export const Default = DefaultProductDetailCard.bind({});
Default.parameters = {
  mockData
};
Default.args = {};
const AntiSpamTemplate = args => <ProductDetailCard {...args} slug="anti-spam" />;
export const JetpackAntiSpam = AntiSpamTemplate.bind({});
JetpackAntiSpam.parameters = {
  mockData
};
const BackupTemplate = args => <ProductDetailCard {...args} slug="backup" />;
export const JetpackBackup = BackupTemplate.bind({});
JetpackBackup.parameters = {
  mockData
};
const BoostTemplate = args => <ProductDetailCard {...args} slug="boost" />;
export const jetpackBoost = BoostTemplate.bind({});
jetpackBoost.parameters = {
  mockData
};
const AntiSpamCardTemplate = args => <ProductDetailCard {...args} slug="anti-spam" />;
export const JetpackAntiSpamCard = AntiSpamCardTemplate.bind({});
JetpackAntiSpamCard.parameters = {
  mockData
};
const BackupCardTemplate = args => <ProductDetailCard {...args} slug="backup" />;
export const JetpackBackupCard = BackupCardTemplate.bind({});
JetpackBackupCard.parameters = {
  mockData
};
const BoostCardTemplate = args => <ProductDetailCard {...args} slug="boost" />;
export const JetpackBoostCard = BoostCardTemplate.bind({});
JetpackBoostCard.parameters = {
  mockData
};
const CRMCardTemplate = args => <ProductDetailCard {...args} slug="crm" />;
export const JetpackCRMCard = CRMCardTemplate.bind({});
JetpackCRMCard.parameters = {
  mockData
};
const ExtrasCardTemplate = args => <ProductDetailCard {...args} slug="extras" />;
export const JetpackExtrasCard = ExtrasCardTemplate.bind({});
JetpackExtrasCard.parameters = {
  mockData
};
const SearchCardTemplate = args => <ProductDetailCard {...args} slug="search" />;
export const JetpackSearchCard = SearchCardTemplate.bind({});
JetpackSearchCard.parameters = {
  mockData
};
const ScanCardTemplate = args => <ProductDetailCard {...args} slug="scan" />;
export const JetpackScanCard = ScanCardTemplate.bind({});
JetpackScanCard.parameters = {
  mockData
};
const SecurityCardTemplate = args => <ProductDetailCard {...args} slug="security" />;
export const SecurityBundle = SecurityCardTemplate.bind({});
SecurityBundle.parameters = {
  mockData
};
const VideoPressCardTemplate = args => <ProductDetailCard {...args} slug="videopress" />;
export const JetpackVideoPressCard = VideoPressCardTemplate.bind({});
JetpackVideoPressCard.storyName = 'Jetpack VideoPress';
JetpackVideoPressCard.parameters = {
  mockData
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"backup\\" />",
      ...Default.parameters?.docs?.source
    }
  }
};
JetpackAntiSpam.parameters = {
  ...JetpackAntiSpam.parameters,
  docs: {
    ...JetpackAntiSpam.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"anti-spam\\" />",
      ...JetpackAntiSpam.parameters?.docs?.source
    }
  }
};
JetpackBackup.parameters = {
  ...JetpackBackup.parameters,
  docs: {
    ...JetpackBackup.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"backup\\" />",
      ...JetpackBackup.parameters?.docs?.source
    }
  }
};
jetpackBoost.parameters = {
  ...jetpackBoost.parameters,
  docs: {
    ...jetpackBoost.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"boost\\" />",
      ...jetpackBoost.parameters?.docs?.source
    }
  }
};
JetpackAntiSpamCard.parameters = {
  ...JetpackAntiSpamCard.parameters,
  docs: {
    ...JetpackAntiSpamCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"anti-spam\\" />",
      ...JetpackAntiSpamCard.parameters?.docs?.source
    }
  }
};
JetpackBackupCard.parameters = {
  ...JetpackBackupCard.parameters,
  docs: {
    ...JetpackBackupCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"backup\\" />",
      ...JetpackBackupCard.parameters?.docs?.source
    }
  }
};
JetpackBoostCard.parameters = {
  ...JetpackBoostCard.parameters,
  docs: {
    ...JetpackBoostCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"boost\\" />",
      ...JetpackBoostCard.parameters?.docs?.source
    }
  }
};
JetpackCRMCard.parameters = {
  ...JetpackCRMCard.parameters,
  docs: {
    ...JetpackCRMCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"crm\\" />",
      ...JetpackCRMCard.parameters?.docs?.source
    }
  }
};
JetpackExtrasCard.parameters = {
  ...JetpackExtrasCard.parameters,
  docs: {
    ...JetpackExtrasCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"extras\\" />",
      ...JetpackExtrasCard.parameters?.docs?.source
    }
  }
};
JetpackSearchCard.parameters = {
  ...JetpackSearchCard.parameters,
  docs: {
    ...JetpackSearchCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"search\\" />",
      ...JetpackSearchCard.parameters?.docs?.source
    }
  }
};
JetpackScanCard.parameters = {
  ...JetpackScanCard.parameters,
  docs: {
    ...JetpackScanCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"scan\\" />",
      ...JetpackScanCard.parameters?.docs?.source
    }
  }
};
SecurityBundle.parameters = {
  ...SecurityBundle.parameters,
  docs: {
    ...SecurityBundle.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"security\\" />",
      ...SecurityBundle.parameters?.docs?.source
    }
  }
};
JetpackVideoPressCard.parameters = {
  ...JetpackVideoPressCard.parameters,
  docs: {
    ...JetpackVideoPressCard.parameters?.docs,
    source: {
      originalSource: "args => <ProductDetailCard {...args} slug=\\"videopress\\" />",
      ...JetpackVideoPressCard.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:33,line:13},endLoc:{col:86,line:13},startBody:{col:33,line:13},endBody:{col:86,line:13}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:81,line:19},startBody:{col:25,line:19},endBody:{col:81,line:19}},"jetpack-backup":{startLoc:{col:23,line:24},endLoc:{col:76,line:24},startBody:{col:23,line:24},endBody:{col:76,line:24}},"jetpack-boost":{startLoc:{col:22,line:29},endLoc:{col:74,line:29},startBody:{col:22,line:29},endBody:{col:74,line:29}},"jetpack-anti-spam-card":{startLoc:{col:29,line:34},endLoc:{col:85,line:34},startBody:{col:29,line:34},endBody:{col:85,line:34}},"jetpack-backup-card":{startLoc:{col:27,line:39},endLoc:{col:80,line:39},startBody:{col:27,line:39},endBody:{col:80,line:39}},"jetpack-boost-card":{startLoc:{col:26,line:44},endLoc:{col:78,line:44},startBody:{col:26,line:44},endBody:{col:78,line:44}},"jetpack-crm-card":{startLoc:{col:24,line:49},endLoc:{col:74,line:49},startBody:{col:24,line:49},endBody:{col:74,line:49}},"jetpack-extras-card":{startLoc:{col:27,line:54},endLoc:{col:80,line:54},startBody:{col:27,line:54},endBody:{col:80,line:54}},"jetpack-search-card":{startLoc:{col:27,line:59},endLoc:{col:80,line:59},startBody:{col:27,line:59},endBody:{col:80,line:59}},"jetpack-scan-card":{startLoc:{col:25,line:64},endLoc:{col:76,line:64},startBody:{col:25,line:64},endBody:{col:76,line:64}},"security-bundle":{startLoc:{col:29,line:69},endLoc:{col:84,line:69},startBody:{col:29,line:69},endBody:{col:84,line:69}},"jetpack-video-press-card":{startLoc:{col:31,line:74},endLoc:{col:88,line:74},startBody:{col:31,line:74},endBody:{col:88,line:74}}}},layout:"centered"}},t=(0,m.As)(),h=r=>(0,a.jsx)(s.Z,{...r,slug:"backup"});h.displayName="DefaultProductDetailCard";const d=h.bind({});d.parameters={mockData:t},d.args={};const J=r=>(0,a.jsx)(s.Z,{...r,slug:"anti-spam"});J.displayName="AntiSpamTemplate";const E=J.bind({});E.parameters={mockData:t};const o=r=>(0,a.jsx)(s.Z,{...r,slug:"backup"});o.displayName="BackupTemplate";const l=o.bind({});l.parameters={mockData:t};const C=r=>(0,a.jsx)(s.Z,{...r,slug:"boost"});C.displayName="BoostTemplate";const x=C.bind({});x.parameters={mockData:t};const T=r=>(0,a.jsx)(s.Z,{...r,slug:"anti-spam"});T.displayName="AntiSpamCardTemplate";const i=T.bind({});i.parameters={mockData:t};const p=r=>(0,a.jsx)(s.Z,{...r,slug:"backup"});p.displayName="BackupCardTemplate";const c=p.bind({});c.parameters={mockData:t};const g=r=>(0,a.jsx)(s.Z,{...r,slug:"boost"});g.displayName="BoostCardTemplate";const k=g.bind({});k.parameters={mockData:t};const B=r=>(0,a.jsx)(s.Z,{...r,slug:"crm"});B.displayName="CRMCardTemplate";const P=B.bind({});P.parameters={mockData:t};const L=r=>(0,a.jsx)(s.Z,{...r,slug:"extras"});L.displayName="ExtrasCardTemplate";const D=L.bind({});D.parameters={mockData:t};const O=r=>(0,a.jsx)(s.Z,{...r,slug:"search"});O.displayName="SearchCardTemplate";const b=O.bind({});b.parameters={mockData:t};const R=r=>(0,a.jsx)(s.Z,{...r,slug:"scan"});R.displayName="ScanCardTemplate";const f=R.bind({});f.parameters={mockData:t};const M=r=>(0,a.jsx)(s.Z,{...r,slug:"security"});M.displayName="SecurityCardTemplate";const v=M.bind({});v.parameters={mockData:t};const z=r=>(0,a.jsx)(s.Z,{...r,slug:"videopress"});z.displayName="VideoPressCardTemplate";const S=z.bind({});S.storyName="Jetpack VideoPress",S.parameters={mockData:t},d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}},E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(G=(X=E.parameters)==null?void 0:X.docs)==null?void 0:G.source}}},l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(W=(K=l.parameters)==null?void 0:K.docs)==null?void 0:W.source}}},x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(Y=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}},i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...($=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}},c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(se=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}},k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(oe=(re=k.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}},P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="crm" />',...(de=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}},D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="extras" />',...(pe=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}},b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="search" />',...(ge=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}},f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="scan" />',...(Ce=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}},v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="security" />',...(be=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}},S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="videopress" />',...(Se=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const N=["Default","JetpackAntiSpam","JetpackBackup","jetpackBoost","JetpackAntiSpamCard","JetpackBackupCard","JetpackBoostCard","JetpackCRMCard","JetpackExtrasCard","JetpackSearchCard","JetpackScanCard","SecurityBundle","JetpackVideoPressCard"]},"../components/components/button/index.tsx":(A,u,e)=>{e.d(u,{Z:()=>x});var _=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=e.n(n),j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),J={};J.insert="head",J.singleton=!1;var E=h()(d.Z,J);const o=d.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=(0,j.forwardRef)((T,i)=>{var w,V;const{children:p,variant:c="primary",size:g="normal",weight:k="bold",icon:B,iconSize:P,disabled:L,isDestructive:D,isLoading:O,isExternalLink:b,className:R,text:f,fullWidth:M,...v}=T,z=y()(o.button,R,{[o.normal]:g==="normal",[o.small]:g==="small",[o.icon]:!!B,[o.loading]:O,[o.regular]:k==="regular",[o["full-width"]]:M,[o["is-icon-button"]]:!!B&&!p});v.ref=i;const S=g==="normal"?20:16,N=b&&(0,l.jsx)(m.Z,{size:S,icon:a.Z,className:o["external-icon"]}),Z=b?"_blank":void 0,I=(p==null?void 0:p[0])&&p[0]!==null&&((V=(w=p==null?void 0:p[0])==null?void 0:w.props)==null?void 0:V.className)!=="components-tooltip";return(0,l.jsxs)(_.ZP,{target:Z,variant:c,className:y()(z,{"has-text":!!B&&I}),icon:b?void 0:B,iconSize:P,disabled:L,"aria-disabled":L,isDestructive:D,text:f,...v,children:[O&&(0,l.jsx)(s.ZP,{}),(0,l.jsx)("span",{children:p}),N]})});C.displayName="Button";const x=C;try{C.displayName="Button",C.__docgenInfo={description:"Button component",displayName:"Button",props:{text:{defaultValue:null,description:`If provided, displays the given text inside the button. If the button
contains children elements, the text is displayed before them.`,name:"text",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"link"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"An optional additional class name to apply to the rendered button.",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}},isDestructive:{defaultValue:null,description:`Renders a red text-based button style to indicate destructive
behavior.`,name:"isDestructive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Renders a disabled button.",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:C.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(T){}},"../components/components/terms-of-service/index.tsx":(A,u,e)=>{e.d(u,{Z:()=>p});var _=e("../../../node_modules/.pnpm/@wordpress+element@5.7.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(m),n=e("../components/tools/jp-redirect/index.ts"),y=e("../components/components/text/index.tsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(j),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),d={};d.insert="head",d.singleton=!1;var J=t()(h.Z,d);const E=h.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=s.__,C=c=>{let{className:g,multipleButtons:k,agreeButtonLabel:B}=c;return(0,o.jsx)(y.ZP,{className:a()(g,"terms-of-service"),children:k?(0,o.jsx)(x,{}):(0,o.jsx)(T,{agreeButtonLabel:B})})};C.displayName="TermsOfService";const x=()=>(0,_.Z)(l("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,o.jsx)(i,{slug:"wpcom-tos"}),shareDetailsLink:(0,o.jsx)(i,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),T=c=>{let{agreeButtonLabel:g}=c;return(0,_.Z)((0,s.gB)(l("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),g),{strong:(0,o.jsx)("strong",{}),tosLink:(0,o.jsx)(i,{slug:"wpcom-tos"}),shareDetailsLink:(0,o.jsx)(i,{slug:"jetpack-support-what-data-does-jetpack-sync"})})},i=c=>{let{slug:g,children:k}=c;return(0,o.jsx)("a",{className:"terms-of-service__link",href:(0,n.Z)(g),rel:"noopener noreferrer",target:"_blank",children:k})};i.displayName="Link";const p=C;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(c){}},"../components/tools/jp-redirect/index.ts":(A,u,e)=>{e.d(u,{Z:()=>_});function _(s){var j;let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a={};let n;if(typeof window!="undefined"&&(n=(j=window.Initial_State)==null?void 0:j.calypsoEnv),s.search("https://")===0){const t=new URL(s);s=`https://${t.host}${t.pathname}`,a.url=encodeURIComponent(s)}else a.source=encodeURIComponent(s);return Object.keys(m).map(t=>{a[t]=encodeURIComponent(m[t])}),!Object.keys(a).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(a.site=jetpack_redirects.currentSiteRawUrl),n&&(a.calypso_env=n),"https://jetpack.com/redirect/?"+Object.keys(a).map(t=>t+"="+a[t]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(A,u,e)=>{e.d(u,{Z:()=>y});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(_),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),n=a()(s());n.push([A.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),n.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const y=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(A,u,e)=>{e.d(u,{Z:()=>y});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(_),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),n=a()(s());n.push([A.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const y=n}}]);})();
