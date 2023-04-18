"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4843],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(ya,D,s)=>{s.d(D,{Z:()=>J});var y=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e(r){let{icon:T,size:S=24,...P}=r;return(0,y.cloneElement)(T,{width:S,height:S,...P})}const J=e},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/index.stories.jsx":(ya,D,s)=>{var O,Z,v,I,K,U,W,F,X,w,z,Y,G,H,Q,$,q,aa,ea,ra,ta,sa,ca,oa,na,da,pa,la,ia,ma,ua,ka,Ca,ga,Ba,Da,Ja,Sa,Pa;s.r(D),s.d(D,{Default:()=>c,JetpackAntiSpam:()=>n,JetpackAntiSpamCard:()=>l,JetpackBackup:()=>d,JetpackBackupCard:()=>i,JetpackBoostCard:()=>m,JetpackCRMCard:()=>u,JetpackExtrasCard:()=>k,JetpackScanCard:()=>g,JetpackSearchCard:()=>C,JetpackVideoPressCard:()=>o,SecurityBundle:()=>B,__namedExportsOrder:()=>Ta,default:()=>P,jetpackBoost:()=>p});var y=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=s("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),J=s("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=`/* eslint-disable react/react-in-jsx-scope */
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
`,S={Default:{startLoc:{col:33,line:13},endLoc:{col:86,line:13},startBody:{col:33,line:13},endBody:{col:86,line:13}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:81,line:19},startBody:{col:25,line:19},endBody:{col:81,line:19}},JetpackBackup:{startLoc:{col:23,line:24},endLoc:{col:76,line:24},startBody:{col:23,line:24},endBody:{col:76,line:24}},jetpackBoost:{startLoc:{col:22,line:29},endLoc:{col:74,line:29},startBody:{col:22,line:29},endBody:{col:74,line:29}},JetpackAntiSpamCard:{startLoc:{col:29,line:34},endLoc:{col:85,line:34},startBody:{col:29,line:34},endBody:{col:85,line:34}},JetpackBackupCard:{startLoc:{col:27,line:39},endLoc:{col:80,line:39},startBody:{col:27,line:39},endBody:{col:80,line:39}},JetpackBoostCard:{startLoc:{col:26,line:44},endLoc:{col:78,line:44},startBody:{col:26,line:44},endBody:{col:78,line:44}},JetpackCRMCard:{startLoc:{col:24,line:49},endLoc:{col:74,line:49},startBody:{col:24,line:49},endBody:{col:74,line:49}},JetpackExtrasCard:{startLoc:{col:27,line:54},endLoc:{col:80,line:54},startBody:{col:27,line:54},endBody:{col:80,line:54}},JetpackSearchCard:{startLoc:{col:27,line:59},endLoc:{col:80,line:59},startBody:{col:27,line:59},endBody:{col:80,line:59}},JetpackScanCard:{startLoc:{col:25,line:64},endLoc:{col:76,line:64},startBody:{col:25,line:64},endBody:{col:76,line:64}},SecurityBundle:{startLoc:{col:29,line:69},endLoc:{col:84,line:69},startBody:{col:29,line:69},endBody:{col:84,line:69}},JetpackVideoPressCard:{startLoc:{col:31,line:74},endLoc:{col:88,line:74},startBody:{col:31,line:74},endBody:{col:88,line:74}}};const P={title:"Packages/My Jetpack/Product Detail Card",component:e.Z,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:33,line:13},endLoc:{col:86,line:13},startBody:{col:33,line:13},endBody:{col:86,line:13}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:81,line:19},startBody:{col:25,line:19},endBody:{col:81,line:19}},"jetpack-backup":{startLoc:{col:23,line:24},endLoc:{col:76,line:24},startBody:{col:23,line:24},endBody:{col:76,line:24}},"jetpack-boost":{startLoc:{col:22,line:29},endLoc:{col:74,line:29},startBody:{col:22,line:29},endBody:{col:74,line:29}},"jetpack-anti-spam-card":{startLoc:{col:29,line:34},endLoc:{col:85,line:34},startBody:{col:29,line:34},endBody:{col:85,line:34}},"jetpack-backup-card":{startLoc:{col:27,line:39},endLoc:{col:80,line:39},startBody:{col:27,line:39},endBody:{col:80,line:39}},"jetpack-boost-card":{startLoc:{col:26,line:44},endLoc:{col:78,line:44},startBody:{col:26,line:44},endBody:{col:78,line:44}},"jetpack-crm-card":{startLoc:{col:24,line:49},endLoc:{col:74,line:49},startBody:{col:24,line:49},endBody:{col:74,line:49}},"jetpack-extras-card":{startLoc:{col:27,line:54},endLoc:{col:80,line:54},startBody:{col:27,line:54},endBody:{col:80,line:54}},"jetpack-search-card":{startLoc:{col:27,line:59},endLoc:{col:80,line:59},startBody:{col:27,line:59},endBody:{col:80,line:59}},"jetpack-scan-card":{startLoc:{col:25,line:64},endLoc:{col:76,line:64},startBody:{col:25,line:64},endBody:{col:76,line:64}},"security-bundle":{startLoc:{col:29,line:69},endLoc:{col:84,line:69},startBody:{col:29,line:69},endBody:{col:84,line:69}},"jetpack-video-press-card":{startLoc:{col:31,line:74},endLoc:{col:88,line:74},startBody:{col:31,line:74},endBody:{col:88,line:74}}}},layout:"centered"}},t=(0,J.As)(),x=a=>(0,r.jsx)(e.Z,{...a,slug:"backup"});x.displayName="DefaultProductDetailCard";const c=x.bind({});c.parameters={mockData:t},c.args={};const b=a=>(0,r.jsx)(e.Z,{...a,slug:"anti-spam"});b.displayName="AntiSpamTemplate";const n=b.bind({});n.parameters={mockData:t};const L=a=>(0,r.jsx)(e.Z,{...a,slug:"backup"});L.displayName="BackupTemplate";const d=L.bind({});d.parameters={mockData:t};const _=a=>(0,r.jsx)(e.Z,{...a,slug:"boost"});_.displayName="BoostTemplate";const p=_.bind({});p.parameters={mockData:t};const j=a=>(0,r.jsx)(e.Z,{...a,slug:"anti-spam"});j.displayName="AntiSpamCardTemplate";const l=j.bind({});l.parameters={mockData:t};const A=a=>(0,r.jsx)(e.Z,{...a,slug:"backup"});A.displayName="BackupCardTemplate";const i=A.bind({});i.parameters={mockData:t};const E=a=>(0,r.jsx)(e.Z,{...a,slug:"boost"});E.displayName="BoostCardTemplate";const m=E.bind({});m.parameters={mockData:t};const M=a=>(0,r.jsx)(e.Z,{...a,slug:"crm"});M.displayName="CRMCardTemplate";const u=M.bind({});u.parameters={mockData:t};const f=a=>(0,r.jsx)(e.Z,{...a,slug:"extras"});f.displayName="ExtrasCardTemplate";const k=f.bind({});k.parameters={mockData:t};const h=a=>(0,r.jsx)(e.Z,{...a,slug:"search"});h.displayName="SearchCardTemplate";const C=h.bind({});C.parameters={mockData:t};const R=a=>(0,r.jsx)(e.Z,{...a,slug:"scan"});R.displayName="ScanCardTemplate";const g=R.bind({});g.parameters={mockData:t};const V=a=>(0,r.jsx)(e.Z,{...a,slug:"security"});V.displayName="SecurityCardTemplate";const B=V.bind({});B.parameters={mockData:t};const N=a=>(0,r.jsx)(e.Z,{...a,slug:"videopress"});N.displayName="VideoPressCardTemplate";const o=N.bind({});o.storyName="Jetpack VideoPress",o.parameters={mockData:t},c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(v=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:v.source}}},n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(U=(K=n.parameters)==null?void 0:K.docs)==null?void 0:U.source}}},d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(X=(F=d.parameters)==null?void 0:F.docs)==null?void 0:X.source}}},p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(Y=(z=p.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}},l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(Q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}},i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(aa=(q=i.parameters)==null?void 0:q.docs)==null?void 0:aa.source}}},m.parameters={...m.parameters,docs:{...(ea=m.parameters)==null?void 0:ea.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(ta=(ra=m.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}},u.parameters={...u.parameters,docs:{...(sa=u.parameters)==null?void 0:sa.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="crm" />',...(oa=(ca=u.parameters)==null?void 0:ca.docs)==null?void 0:oa.source}}},k.parameters={...k.parameters,docs:{...(na=k.parameters)==null?void 0:na.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="extras" />',...(pa=(da=k.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}},C.parameters={...C.parameters,docs:{...(la=C.parameters)==null?void 0:la.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="search" />',...(ma=(ia=C.parameters)==null?void 0:ia.docs)==null?void 0:ma.source}}},g.parameters={...g.parameters,docs:{...(ua=g.parameters)==null?void 0:ua.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="scan" />',...(Ca=(ka=g.parameters)==null?void 0:ka.docs)==null?void 0:Ca.source}}},B.parameters={...B.parameters,docs:{...(ga=B.parameters)==null?void 0:ga.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="security" />',...(Da=(Ba=B.parameters)==null?void 0:Ba.docs)==null?void 0:Da.source}}},o.parameters={...o.parameters,docs:{...(Ja=o.parameters)==null?void 0:Ja.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="videopress" />',...(Pa=(Sa=o.parameters)==null?void 0:Sa.docs)==null?void 0:Pa.source}}};const Ta=["Default","JetpackAntiSpam","JetpackBackup","jetpackBoost","JetpackAntiSpamCard","JetpackBackupCard","JetpackBoostCard","JetpackCRMCard","JetpackExtrasCard","JetpackSearchCard","JetpackScanCard","SecurityBundle","JetpackVideoPressCard"]}}]);})();
