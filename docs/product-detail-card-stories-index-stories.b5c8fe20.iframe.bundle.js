"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4843],{"../../packages/my-jetpack/_inc/components/product-detail-card/stories/index.stories.jsx":(L,i,e)=>{var I,V,Z,w,U,K,W,X,Y,F,$,z,G,H,Q,q,ee,ae,te,se,re,oe,ce,ne,de,le,pe,ie,me,ue,ke,Ce,ge,_e,ye,Be,De,Se,je;e.r(i),e.d(i,{Default:()=>d,JetpackAntiSpam:()=>g,JetpackAntiSpamCard:()=>n,JetpackBackup:()=>p,JetpackBackupCard:()=>o,JetpackBoostCard:()=>k,JetpackCRMCard:()=>D,JetpackExtrasCard:()=>S,JetpackScanCard:()=>T,JetpackSearchCard:()=>j,JetpackVideoPressCard:()=>_,SecurityBundle:()=>x,__namedExportsOrder:()=>Te,default:()=>y,jetpackBoost:()=>u});var C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),m=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`/* eslint-disable react/react-in-jsx-scope */
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
`,P={Default:{startLoc:{col:33,line:16},endLoc:{col:88,line:16},startBody:{col:33,line:16},endBody:{col:88,line:16}},JetpackAntiSpam:{startLoc:{col:25,line:22},endLoc:{col:83,line:22},startBody:{col:25,line:22},endBody:{col:83,line:22}},JetpackBackup:{startLoc:{col:23,line:26},endLoc:{col:78,line:26},startBody:{col:23,line:26},endBody:{col:78,line:26}},jetpackBoost:{startLoc:{col:22,line:30},endLoc:{col:76,line:30},startBody:{col:22,line:30},endBody:{col:76,line:30}},JetpackAntiSpamCard:{startLoc:{col:29,line:34},endLoc:{col:87,line:34},startBody:{col:29,line:34},endBody:{col:87,line:34}},JetpackBackupCard:{startLoc:{col:27,line:38},endLoc:{col:82,line:38},startBody:{col:27,line:38},endBody:{col:82,line:38}},JetpackBoostCard:{startLoc:{col:26,line:42},endLoc:{col:80,line:42},startBody:{col:26,line:42},endBody:{col:80,line:42}},JetpackCRMCard:{startLoc:{col:24,line:46},endLoc:{col:76,line:46},startBody:{col:24,line:46},endBody:{col:76,line:46}},JetpackExtrasCard:{startLoc:{col:27,line:50},endLoc:{col:82,line:50},startBody:{col:27,line:50},endBody:{col:82,line:50}},JetpackSearchCard:{startLoc:{col:27,line:54},endLoc:{col:82,line:54},startBody:{col:27,line:54},endBody:{col:82,line:54}},JetpackScanCard:{startLoc:{col:25,line:58},endLoc:{col:78,line:58},startBody:{col:25,line:58},endBody:{col:78,line:58}},SecurityBundle:{startLoc:{col:29,line:62},endLoc:{col:86,line:62},startBody:{col:29,line:62},endBody:{col:86,line:62}},JetpackVideoPressCard:{startLoc:{col:31,line:66},endLoc:{col:90,line:66},startBody:{col:31,line:66},endBody:{col:90,line:66}}};const y={title:"Packages/My Jetpack/Product Detail Card",component:t.Z,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:33,line:16},endLoc:{col:88,line:16},startBody:{col:33,line:16},endBody:{col:88,line:16}},"jetpack-anti-spam":{startLoc:{col:25,line:22},endLoc:{col:83,line:22},startBody:{col:25,line:22},endBody:{col:83,line:22}},"jetpack-backup":{startLoc:{col:23,line:26},endLoc:{col:78,line:26},startBody:{col:23,line:26},endBody:{col:78,line:26}},"jetpack-boost":{startLoc:{col:22,line:30},endLoc:{col:76,line:30},startBody:{col:22,line:30},endBody:{col:76,line:30}},"jetpack-anti-spam-card":{startLoc:{col:29,line:34},endLoc:{col:87,line:34},startBody:{col:29,line:34},endBody:{col:87,line:34}},"jetpack-backup-card":{startLoc:{col:27,line:38},endLoc:{col:82,line:38},startBody:{col:27,line:38},endBody:{col:82,line:38}},"jetpack-boost-card":{startLoc:{col:26,line:42},endLoc:{col:80,line:42},startBody:{col:26,line:42},endBody:{col:80,line:42}},"jetpack-crm-card":{startLoc:{col:24,line:46},endLoc:{col:76,line:46},startBody:{col:24,line:46},endBody:{col:76,line:46}},"jetpack-extras-card":{startLoc:{col:27,line:50},endLoc:{col:82,line:50},startBody:{col:27,line:50},endBody:{col:82,line:50}},"jetpack-search-card":{startLoc:{col:27,line:54},endLoc:{col:82,line:54},startBody:{col:27,line:54},endBody:{col:82,line:54}},"jetpack-scan-card":{startLoc:{col:25,line:58},endLoc:{col:78,line:58},startBody:{col:25,line:58},endBody:{col:78,line:58}},"security-bundle":{startLoc:{col:29,line:62},endLoc:{col:86,line:62},startBody:{col:29,line:62},endBody:{col:86,line:62}},"jetpack-video-press-card":{startLoc:{col:31,line:66},endLoc:{col:90,line:66},startBody:{col:31,line:66},endBody:{col:90,line:66}}}},layout:"centered"}},r=(0,m.As)(),J=s=>(0,a.jsx)(t.Z,{...s,slug:"backup"});J.displayName="DefaultProductDetailCard";const d=J.bind({});d.parameters={mockData:r},d.args={};const v=s=>(0,a.jsx)(t.Z,{...s,slug:"anti-spam"});v.displayName="AntiSpamTemplate";const g=v.bind({});g.parameters={mockData:r};const c=s=>(0,a.jsx)(t.Z,{...s,slug:"backup"});c.displayName="BackupTemplate";const p=c.bind({});p.parameters={mockData:r};const f=s=>(0,a.jsx)(t.Z,{...s,slug:"boost"});f.displayName="BoostTemplate";const u=f.bind({});u.parameters={mockData:r};const b=s=>(0,a.jsx)(t.Z,{...s,slug:"anti-spam"});b.displayName="AntiSpamCardTemplate";const n=b.bind({});n.parameters={mockData:r};const h=s=>(0,a.jsx)(t.Z,{...s,slug:"backup"});h.displayName="BackupCardTemplate";const o=h.bind({});o.parameters={mockData:r};const B=s=>(0,a.jsx)(t.Z,{...s,slug:"boost"});B.displayName="BoostCardTemplate";const k=B.bind({});k.parameters={mockData:r};const E=s=>(0,a.jsx)(t.Z,{...s,slug:"crm"});E.displayName="CRMCardTemplate";const D=E.bind({});D.parameters={mockData:r};const A=s=>(0,a.jsx)(t.Z,{...s,slug:"extras"});A.displayName="ExtrasCardTemplate";const S=A.bind({});S.parameters={mockData:r};const M=s=>(0,a.jsx)(t.Z,{...s,slug:"search"});M.displayName="SearchCardTemplate";const j=M.bind({});j.parameters={mockData:r};const R=s=>(0,a.jsx)(t.Z,{...s,slug:"scan"});R.displayName="ScanCardTemplate";const T=R.bind({});T.parameters={mockData:r};const O=s=>(0,a.jsx)(t.Z,{...s,slug:"security"});O.displayName="SecurityCardTemplate";const x=O.bind({});x.parameters={mockData:r};const N=s=>(0,a.jsx)(t.Z,{...s,slug:"videopress"});N.displayName="VideoPressCardTemplate";const _=N.bind({});_.storyName="Jetpack VideoPress",_.parameters={mockData:r},d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}},g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(K=(U=g.parameters)==null?void 0:U.docs)==null?void 0:K.source}}},p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}},u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}},n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(Q=(H=n.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}},o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(ae=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}},k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(re=(se=k.parameters)==null?void 0:se.docs)==null?void 0:re.source}}},D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="crm" />',...(ne=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}},S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="extras" />',...(pe=(le=S.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}},j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="search" />',...(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}},T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="scan" />',...(ge=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}},x.parameters={...x.parameters,docs:{...(_e=x.parameters)==null?void 0:_e.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="security" />',...(Be=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}},_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="videopress" />',...(je=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};const Te=["Default","JetpackAntiSpam","JetpackBackup","jetpackBoost","JetpackAntiSpamCard","JetpackBackupCard","JetpackBoostCard","JetpackCRMCard","JetpackExtrasCard","JetpackSearchCard","JetpackScanCard","SecurityBundle","JetpackVideoPressCard"]},"../components/components/terms-of-service/index.tsx":(L,i,e)=>{e.d(i,{Z:()=>h});var C=e("../../../node_modules/.pnpm/@wordpress+element@5.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(m),l=e("../components/tools/jp-redirect/index.ts"),P=e("../components/components/text/index.tsx"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(y),J=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),d={};d.insert="head",d.singleton=!1;var v=r()(J.Z,d);const g=J.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=t.__,f=({className:o,multipleButtons:B,agreeButtonLabel:k})=>(0,c.jsx)(P.ZP,{className:a()(o,"terms-of-service"),children:B?(0,c.jsx)(u,{}):(0,c.jsx)(b,{agreeButtonLabel:k})});f.displayName="TermsOfService";const u=()=>(0,C.Z)(p("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,c.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,c.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),b=({agreeButtonLabel:o})=>(0,C.Z)((0,t.gB)(p("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),o),{strong:(0,c.jsx)("strong",{}),tosLink:(0,c.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,c.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),n=({slug:o,children:B})=>(0,c.jsx)("a",{className:"terms-of-service__link",href:(0,l.Z)(o),rel:"noopener noreferrer",target:"_blank",children:B});n.displayName="Link";const h=f;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(o){}},"../components/tools/jp-redirect/index.ts":(L,i,e)=>{e.d(i,{Z:()=>C});function C(t,m={}){var y;const a={};let l;if(typeof window!="undefined"&&(l=(y=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:y.calypsoEnv),t.search("https://")===0){const r=new URL(t);t=`https://${r.host}${r.pathname}`,a.url=encodeURIComponent(t)}else a.source=encodeURIComponent(t);for(const r in m)a[r]=encodeURIComponent(m[r]);return!Object.keys(a).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(a.site=jetpack_redirects.currentSiteRawUrl),l&&(a.calypso_env=l),"https://jetpack.com/redirect/?"+Object.keys(a).map(r=>r+"="+a[r]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(L,i,e)=>{e.d(i,{Z:()=>P});var C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(C),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),l=a()(t());l.push([L.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const P=l}}]);})();
