"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4843],{"../../packages/my-jetpack/_inc/components/product-detail-card/stories/index.stories.jsx":(f,i,e)=>{var V,I,Z,w,U,K,W,X,Y,F,$,z,G,H,Q,q,ee,ae,te,re,se,oe,ce,ne,de,le,pe,ie,me,ue,ke,Ce,ge,_e,Be,Se,ye,De,Je;e.r(i),e.d(i,{Default:()=>d,JetpackAntiSpam:()=>g,JetpackAntiSpamCard:()=>n,JetpackBackup:()=>p,JetpackBackupCard:()=>o,JetpackBoostCard:()=>k,JetpackCRMCard:()=>y,JetpackExtrasCard:()=>D,JetpackScanCard:()=>P,JetpackSearchCard:()=>J,JetpackVideoPressCard:()=>_,SecurityBundle:()=>j,__namedExportsOrder:()=>Pe,default:()=>B,jetpackBoost:()=>u});var C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),m=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`/* eslint-disable react/react-in-jsx-scope */
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
`,x={Default:{startLoc:{col:33,line:13},endLoc:{col:86,line:13},startBody:{col:33,line:13},endBody:{col:86,line:13}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:81,line:19},startBody:{col:25,line:19},endBody:{col:81,line:19}},JetpackBackup:{startLoc:{col:23,line:24},endLoc:{col:76,line:24},startBody:{col:23,line:24},endBody:{col:76,line:24}},jetpackBoost:{startLoc:{col:22,line:29},endLoc:{col:74,line:29},startBody:{col:22,line:29},endBody:{col:74,line:29}},JetpackAntiSpamCard:{startLoc:{col:29,line:34},endLoc:{col:85,line:34},startBody:{col:29,line:34},endBody:{col:85,line:34}},JetpackBackupCard:{startLoc:{col:27,line:39},endLoc:{col:80,line:39},startBody:{col:27,line:39},endBody:{col:80,line:39}},JetpackBoostCard:{startLoc:{col:26,line:44},endLoc:{col:78,line:44},startBody:{col:26,line:44},endBody:{col:78,line:44}},JetpackCRMCard:{startLoc:{col:24,line:49},endLoc:{col:74,line:49},startBody:{col:24,line:49},endBody:{col:74,line:49}},JetpackExtrasCard:{startLoc:{col:27,line:54},endLoc:{col:80,line:54},startBody:{col:27,line:54},endBody:{col:80,line:54}},JetpackSearchCard:{startLoc:{col:27,line:59},endLoc:{col:80,line:59},startBody:{col:27,line:59},endBody:{col:80,line:59}},JetpackScanCard:{startLoc:{col:25,line:64},endLoc:{col:76,line:64},startBody:{col:25,line:64},endBody:{col:76,line:64}},SecurityBundle:{startLoc:{col:29,line:69},endLoc:{col:84,line:69},startBody:{col:29,line:69},endBody:{col:84,line:69}},JetpackVideoPressCard:{startLoc:{col:31,line:74},endLoc:{col:88,line:74},startBody:{col:31,line:74},endBody:{col:88,line:74}}};const B={title:"Packages/My Jetpack/Product Detail Card",component:t.Z,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:33,line:13},endLoc:{col:86,line:13},startBody:{col:33,line:13},endBody:{col:86,line:13}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:81,line:19},startBody:{col:25,line:19},endBody:{col:81,line:19}},"jetpack-backup":{startLoc:{col:23,line:24},endLoc:{col:76,line:24},startBody:{col:23,line:24},endBody:{col:76,line:24}},"jetpack-boost":{startLoc:{col:22,line:29},endLoc:{col:74,line:29},startBody:{col:22,line:29},endBody:{col:74,line:29}},"jetpack-anti-spam-card":{startLoc:{col:29,line:34},endLoc:{col:85,line:34},startBody:{col:29,line:34},endBody:{col:85,line:34}},"jetpack-backup-card":{startLoc:{col:27,line:39},endLoc:{col:80,line:39},startBody:{col:27,line:39},endBody:{col:80,line:39}},"jetpack-boost-card":{startLoc:{col:26,line:44},endLoc:{col:78,line:44},startBody:{col:26,line:44},endBody:{col:78,line:44}},"jetpack-crm-card":{startLoc:{col:24,line:49},endLoc:{col:74,line:49},startBody:{col:24,line:49},endBody:{col:74,line:49}},"jetpack-extras-card":{startLoc:{col:27,line:54},endLoc:{col:80,line:54},startBody:{col:27,line:54},endBody:{col:80,line:54}},"jetpack-search-card":{startLoc:{col:27,line:59},endLoc:{col:80,line:59},startBody:{col:27,line:59},endBody:{col:80,line:59}},"jetpack-scan-card":{startLoc:{col:25,line:64},endLoc:{col:76,line:64},startBody:{col:25,line:64},endBody:{col:76,line:64}},"security-bundle":{startLoc:{col:29,line:69},endLoc:{col:84,line:69},startBody:{col:29,line:69},endBody:{col:84,line:69}},"jetpack-video-press-card":{startLoc:{col:31,line:74},endLoc:{col:88,line:74},startBody:{col:31,line:74},endBody:{col:88,line:74}}}},layout:"centered"}},s=(0,m.As)(),T=r=>(0,a.jsx)(t.Z,{...r,slug:"backup"});T.displayName="DefaultProductDetailCard";const d=T.bind({});d.parameters={mockData:s},d.args={};const A=r=>(0,a.jsx)(t.Z,{...r,slug:"anti-spam"});A.displayName="AntiSpamTemplate";const g=A.bind({});g.parameters={mockData:s};const c=r=>(0,a.jsx)(t.Z,{...r,slug:"backup"});c.displayName="BackupTemplate";const p=c.bind({});p.parameters={mockData:s};const b=r=>(0,a.jsx)(t.Z,{...r,slug:"boost"});b.displayName="BoostTemplate";const u=b.bind({});u.parameters={mockData:s};const L=r=>(0,a.jsx)(t.Z,{...r,slug:"anti-spam"});L.displayName="AntiSpamCardTemplate";const n=L.bind({});n.parameters={mockData:s};const h=r=>(0,a.jsx)(t.Z,{...r,slug:"backup"});h.displayName="BackupCardTemplate";const o=h.bind({});o.parameters={mockData:s};const S=r=>(0,a.jsx)(t.Z,{...r,slug:"boost"});S.displayName="BoostCardTemplate";const k=S.bind({});k.parameters={mockData:s};const v=r=>(0,a.jsx)(t.Z,{...r,slug:"crm"});v.displayName="CRMCardTemplate";const y=v.bind({});y.parameters={mockData:s};const E=r=>(0,a.jsx)(t.Z,{...r,slug:"extras"});E.displayName="ExtrasCardTemplate";const D=E.bind({});D.parameters={mockData:s};const M=r=>(0,a.jsx)(t.Z,{...r,slug:"search"});M.displayName="SearchCardTemplate";const J=M.bind({});J.parameters={mockData:s};const R=r=>(0,a.jsx)(t.Z,{...r,slug:"scan"});R.displayName="ScanCardTemplate";const P=R.bind({});P.parameters={mockData:s};const O=r=>(0,a.jsx)(t.Z,{...r,slug:"security"});O.displayName="SecurityCardTemplate";const j=O.bind({});j.parameters={mockData:s};const N=r=>(0,a.jsx)(t.Z,{...r,slug:"videopress"});N.displayName="VideoPressCardTemplate";const _=N.bind({});_.storyName="Jetpack VideoPress",_.parameters={mockData:s},d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Z=(I=d.parameters)==null?void 0:I.docs)==null?void 0:Z.source}}},g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(K=(U=g.parameters)==null?void 0:U.docs)==null?void 0:K.source}}},p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}},u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}},n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(Q=(H=n.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}},o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(ae=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}},k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}},y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="crm" />',...(ne=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}},D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="extras" />',...(pe=(le=D.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}},J.parameters={...J.parameters,docs:{...(ie=J.parameters)==null?void 0:ie.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="search" />',...(ue=(me=J.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}},P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="scan" />',...(ge=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}},j.parameters={...j.parameters,docs:{...(_e=j.parameters)==null?void 0:_e.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="security" />',...(Se=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}},_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="videopress" />',...(Je=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Je.source}}};const Pe=["Default","JetpackAntiSpam","JetpackBackup","jetpackBoost","JetpackAntiSpamCard","JetpackBackupCard","JetpackBoostCard","JetpackCRMCard","JetpackExtrasCard","JetpackSearchCard","JetpackScanCard","SecurityBundle","JetpackVideoPressCard"]},"../components/components/terms-of-service/index.tsx":(f,i,e)=>{e.d(i,{Z:()=>h});var C=e("../../../node_modules/.pnpm/@wordpress+element@5.22.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(m),l=e("../components/tools/jp-redirect/index.ts"),x=e("../components/components/text/index.tsx"),B=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(B),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),d={};d.insert="head",d.singleton=!1;var A=s()(T.Z,d);const g=T.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=t.__,b=({className:o,multipleButtons:S,agreeButtonLabel:k})=>(0,c.jsx)(x.ZP,{className:a()(o,"terms-of-service"),children:S?(0,c.jsx)(u,{}):(0,c.jsx)(L,{agreeButtonLabel:k})});b.displayName="TermsOfService";const u=()=>(0,C.Z)(p("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,c.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,c.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),L=({agreeButtonLabel:o})=>(0,C.Z)((0,t.gB)(p("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),o),{strong:(0,c.jsx)("strong",{}),tosLink:(0,c.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,c.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),n=({slug:o,children:S})=>(0,c.jsx)("a",{className:"terms-of-service__link",href:(0,l.Z)(o),rel:"noopener noreferrer",target:"_blank",children:S});n.displayName="Link";const h=b;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(o){}},"../components/tools/jp-redirect/index.ts":(f,i,e)=>{e.d(i,{Z:()=>C});function C(t,m={}){var B;const a={};let l;if(typeof window!="undefined"&&(l=(B=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:B.calypsoEnv),t.search("https://")===0){const s=new URL(t);t=`https://${s.host}${s.pathname}`,a.url=encodeURIComponent(t)}else a.source=encodeURIComponent(t);for(const s in m)a[s]=encodeURIComponent(m[s]);return!Object.keys(a).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(a.site=jetpack_redirects.currentSiteRawUrl),l&&(a.calypso_env=l),"https://jetpack.com/redirect/?"+Object.keys(a).map(s=>s+"="+a[s]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(f,i,e)=>{e.d(i,{Z:()=>x});var C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(C),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),l=a()(t());l.push([f.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const x=l}}]);})();
