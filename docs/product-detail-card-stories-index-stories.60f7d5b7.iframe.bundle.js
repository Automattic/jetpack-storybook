"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4843],{"../../packages/my-jetpack/_inc/components/product-detail-card/stories/index.stories.jsx":(L,m,e)=>{var I,V,Z,w,U,K,W,X,Y,F,$,z,G,H,Q,q,ee,ae,te,se,re,oe,ce,ne,de,le,pe,ie,me,ue,ke,Ce,ge,_e,ye,Be,De,Se,je;e.r(m),e.d(m,{Default:()=>l,JetpackAntiSpam:()=>_,JetpackAntiSpamCard:()=>d,JetpackBackup:()=>i,JetpackBackupCard:()=>c,JetpackBoostCard:()=>C,JetpackCRMCard:()=>S,JetpackExtrasCard:()=>j,JetpackScanCard:()=>x,JetpackSearchCard:()=>T,JetpackVideoPressCard:()=>y,SecurityBundle:()=>P,__namedExportsOrder:()=>Te,default:()=>B,jetpackBoost:()=>k});var g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),u=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`/* eslint-disable react/react-in-jsx-scope */
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
`,J={Default:{startLoc:{col:33,line:16},endLoc:{col:88,line:16},startBody:{col:33,line:16},endBody:{col:88,line:16}},JetpackAntiSpam:{startLoc:{col:25,line:22},endLoc:{col:83,line:22},startBody:{col:25,line:22},endBody:{col:83,line:22}},JetpackBackup:{startLoc:{col:23,line:26},endLoc:{col:78,line:26},startBody:{col:23,line:26},endBody:{col:78,line:26}},jetpackBoost:{startLoc:{col:22,line:30},endLoc:{col:76,line:30},startBody:{col:22,line:30},endBody:{col:76,line:30}},JetpackAntiSpamCard:{startLoc:{col:29,line:34},endLoc:{col:87,line:34},startBody:{col:29,line:34},endBody:{col:87,line:34}},JetpackBackupCard:{startLoc:{col:27,line:38},endLoc:{col:82,line:38},startBody:{col:27,line:38},endBody:{col:82,line:38}},JetpackBoostCard:{startLoc:{col:26,line:42},endLoc:{col:80,line:42},startBody:{col:26,line:42},endBody:{col:80,line:42}},JetpackCRMCard:{startLoc:{col:24,line:46},endLoc:{col:76,line:46},startBody:{col:24,line:46},endBody:{col:76,line:46}},JetpackExtrasCard:{startLoc:{col:27,line:50},endLoc:{col:82,line:50},startBody:{col:27,line:50},endBody:{col:82,line:50}},JetpackSearchCard:{startLoc:{col:27,line:54},endLoc:{col:82,line:54},startBody:{col:27,line:54},endBody:{col:82,line:54}},JetpackScanCard:{startLoc:{col:25,line:58},endLoc:{col:78,line:58},startBody:{col:25,line:58},endBody:{col:78,line:58}},SecurityBundle:{startLoc:{col:29,line:62},endLoc:{col:86,line:62},startBody:{col:29,line:62},endBody:{col:86,line:62}},JetpackVideoPressCard:{startLoc:{col:31,line:66},endLoc:{col:90,line:66},startBody:{col:31,line:66},endBody:{col:90,line:66}}};const B={title:"Packages/My Jetpack/Product Detail Card",component:t.Z,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:33,line:16},endLoc:{col:88,line:16},startBody:{col:33,line:16},endBody:{col:88,line:16}},"jetpack-anti-spam":{startLoc:{col:25,line:22},endLoc:{col:83,line:22},startBody:{col:25,line:22},endBody:{col:83,line:22}},"jetpack-backup":{startLoc:{col:23,line:26},endLoc:{col:78,line:26},startBody:{col:23,line:26},endBody:{col:78,line:26}},"jetpack-boost":{startLoc:{col:22,line:30},endLoc:{col:76,line:30},startBody:{col:22,line:30},endBody:{col:76,line:30}},"jetpack-anti-spam-card":{startLoc:{col:29,line:34},endLoc:{col:87,line:34},startBody:{col:29,line:34},endBody:{col:87,line:34}},"jetpack-backup-card":{startLoc:{col:27,line:38},endLoc:{col:82,line:38},startBody:{col:27,line:38},endBody:{col:82,line:38}},"jetpack-boost-card":{startLoc:{col:26,line:42},endLoc:{col:80,line:42},startBody:{col:26,line:42},endBody:{col:80,line:42}},"jetpack-crm-card":{startLoc:{col:24,line:46},endLoc:{col:76,line:46},startBody:{col:24,line:46},endBody:{col:76,line:46}},"jetpack-extras-card":{startLoc:{col:27,line:50},endLoc:{col:82,line:50},startBody:{col:27,line:50},endBody:{col:82,line:50}},"jetpack-search-card":{startLoc:{col:27,line:54},endLoc:{col:82,line:54},startBody:{col:27,line:54},endBody:{col:82,line:54}},"jetpack-scan-card":{startLoc:{col:25,line:58},endLoc:{col:78,line:58},startBody:{col:25,line:58},endBody:{col:78,line:58}},"security-bundle":{startLoc:{col:29,line:62},endLoc:{col:86,line:62},startBody:{col:29,line:62},endBody:{col:86,line:62}},"jetpack-video-press-card":{startLoc:{col:31,line:66},endLoc:{col:90,line:66},startBody:{col:31,line:66},endBody:{col:90,line:66}}}},layout:"centered"}},r=(0,u.As)(),o=s=>(0,a.jsx)(t.Z,{...s,slug:"backup"});o.displayName="DefaultProductDetailCard";const l=o.bind({});l.parameters={mockData:r},l.args={};const v=s=>(0,a.jsx)(t.Z,{...s,slug:"anti-spam"});v.displayName="AntiSpamTemplate";const _=v.bind({});_.parameters={mockData:r};const n=s=>(0,a.jsx)(t.Z,{...s,slug:"backup"});n.displayName="BackupTemplate";const i=n.bind({});i.parameters={mockData:r};const f=s=>(0,a.jsx)(t.Z,{...s,slug:"boost"});f.displayName="BoostTemplate";const k=f.bind({});k.parameters={mockData:r};const b=s=>(0,a.jsx)(t.Z,{...s,slug:"anti-spam"});b.displayName="AntiSpamCardTemplate";const d=b.bind({});d.parameters={mockData:r};const h=s=>(0,a.jsx)(t.Z,{...s,slug:"backup"});h.displayName="BackupCardTemplate";const c=h.bind({});c.parameters={mockData:r};const D=s=>(0,a.jsx)(t.Z,{...s,slug:"boost"});D.displayName="BoostCardTemplate";const C=D.bind({});C.parameters={mockData:r};const E=s=>(0,a.jsx)(t.Z,{...s,slug:"crm"});E.displayName="CRMCardTemplate";const S=E.bind({});S.parameters={mockData:r};const A=s=>(0,a.jsx)(t.Z,{...s,slug:"extras"});A.displayName="ExtrasCardTemplate";const j=A.bind({});j.parameters={mockData:r};const M=s=>(0,a.jsx)(t.Z,{...s,slug:"search"});M.displayName="SearchCardTemplate";const T=M.bind({});T.parameters={mockData:r};const R=s=>(0,a.jsx)(t.Z,{...s,slug:"scan"});R.displayName="ScanCardTemplate";const x=R.bind({});x.parameters={mockData:r};const O=s=>(0,a.jsx)(t.Z,{...s,slug:"security"});O.displayName="SecurityCardTemplate";const P=O.bind({});P.parameters={mockData:r};const N=s=>(0,a.jsx)(t.Z,{...s,slug:"videopress"});N.displayName="VideoPressCardTemplate";const y=N.bind({});y.storyName="Jetpack VideoPress",y.parameters={mockData:r},l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}},_.parameters={..._.parameters,docs:{...(w=_.parameters)==null?void 0:w.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(K=(U=_.parameters)==null?void 0:U.docs)==null?void 0:K.source}}},i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}},k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(z=($=k.parameters)==null?void 0:$.docs)==null?void 0:z.source}}},d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(Q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}},c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(ae=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}},C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}},S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="crm" />',...(ne=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}},j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="extras" />',...(pe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}},T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="search" />',...(ue=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}},x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="scan" />',...(ge=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}},P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="security" />',...(Be=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}},y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="videopress" />',...(je=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};const Te=["Default","JetpackAntiSpam","JetpackBackup","jetpackBoost","JetpackAntiSpamCard","JetpackBackupCard","JetpackBoostCard","JetpackCRMCard","JetpackExtrasCard","JetpackSearchCard","JetpackScanCard","SecurityBundle","JetpackVideoPressCard"]},"../components/components/terms-of-service/index.tsx":(L,m,e)=>{e.d(m,{Z:()=>h});var g=e("../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(u),p=e("../components/tools/jp-redirect/index.ts"),J=e("../components/components/text/index.tsx"),B=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(B),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),l={};l.insert="head",l.singleton=!1;var v=r()(o.Z,l);const _=o.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=t.__,f=({className:c,multipleButtons:D,agreeButtonLabel:C})=>(0,n.jsx)(J.ZP,{className:a()(c,"terms-of-service"),children:D?(0,n.jsx)(k,{}):(0,n.jsx)(b,{agreeButtonLabel:C})});f.displayName="TermsOfService";const k=()=>(0,g.Z)(i("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,n.jsx)(d,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(d,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),b=({agreeButtonLabel:c})=>(0,g.Z)((0,t.gB)(i("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),c),{strong:(0,n.jsx)("strong",{}),tosLink:(0,n.jsx)(d,{slug:"wpcom-tos"}),shareDetailsLink:(0,n.jsx)(d,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),d=({slug:c,children:D})=>(0,n.jsx)("a",{className:"terms-of-service__link",href:(0,p.Z)(c),rel:"noopener noreferrer",target:"_blank",children:D});d.displayName="Link";const h=f;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(c){}},"../components/tools/jp-redirect/index.ts":(L,m,e)=>{e.d(m,{Z:()=>g});function g(t,u={}){var B,r;const a={};let p;if(typeof window!="undefined"&&(p=(B=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:B.calypsoEnv),t.search("https://")===0){const o=new URL(t);t=`https://${o.host}${o.pathname}`,a.url=encodeURIComponent(t)}else a.source=encodeURIComponent(t);for(const o in u)a[o]=encodeURIComponent(u[o]);return!Object.keys(a).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(a.site=(r=jetpack_redirects.currentBlogID)!=null?r:jetpack_redirects.currentSiteRawUrl),p&&(a.calypso_env=p),"https://jetpack.com/redirect/?"+Object.keys(a).map(o=>o+"="+a[o]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(L,m,e)=>{e.d(m,{Z:()=>J});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(g),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),p=a()(t());p.push([L.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const J=p}}]);})();
