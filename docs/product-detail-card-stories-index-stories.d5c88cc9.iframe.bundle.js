"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4843],{"../../packages/my-jetpack/_inc/components/product-detail-card/stories/index.stories.jsx":(T,_,e)=>{var I,N,Z,U,V,W,K,z,F,H,X,$,Y,G,Q,q,ee,te,ae,se,oe,re,ne,ce,de,le,pe,ie,me,ue,_e,ke,Ce,ge,ye,Be,De,fe,xe;e.r(_),e.d(_,{Default:()=>B,JetpackAntiSpam:()=>x,JetpackAntiSpamCard:()=>n,JetpackBackup:()=>D,JetpackBackupCard:()=>s,JetpackBoostCard:()=>c,JetpackCRMCard:()=>y,JetpackExtrasCard:()=>h,JetpackScanCard:()=>J,JetpackSearchCard:()=>E,JetpackVideoPressCard:()=>L,SecurityBundle:()=>w,__namedExportsOrder:()=>je,default:()=>f,jetpackBoost:()=>o});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),l=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),k=`/* eslint-disable react/react-in-jsx-scope */
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
`,S={Default:{startLoc:{col:33,line:16},endLoc:{col:88,line:16},startBody:{col:33,line:16},endBody:{col:88,line:16}},JetpackAntiSpam:{startLoc:{col:25,line:22},endLoc:{col:83,line:22},startBody:{col:25,line:22},endBody:{col:83,line:22}},JetpackBackup:{startLoc:{col:23,line:26},endLoc:{col:78,line:26},startBody:{col:23,line:26},endBody:{col:78,line:26}},jetpackBoost:{startLoc:{col:22,line:30},endLoc:{col:76,line:30},startBody:{col:22,line:30},endBody:{col:76,line:30}},JetpackAntiSpamCard:{startLoc:{col:29,line:34},endLoc:{col:87,line:34},startBody:{col:29,line:34},endBody:{col:87,line:34}},JetpackBackupCard:{startLoc:{col:27,line:38},endLoc:{col:82,line:38},startBody:{col:27,line:38},endBody:{col:82,line:38}},JetpackBoostCard:{startLoc:{col:26,line:42},endLoc:{col:80,line:42},startBody:{col:26,line:42},endBody:{col:80,line:42}},JetpackCRMCard:{startLoc:{col:24,line:46},endLoc:{col:76,line:46},startBody:{col:24,line:46},endBody:{col:76,line:46}},JetpackExtrasCard:{startLoc:{col:27,line:50},endLoc:{col:82,line:50},startBody:{col:27,line:50},endBody:{col:82,line:50}},JetpackSearchCard:{startLoc:{col:27,line:54},endLoc:{col:82,line:54},startBody:{col:27,line:54},endBody:{col:82,line:54}},JetpackScanCard:{startLoc:{col:25,line:58},endLoc:{col:78,line:58},startBody:{col:25,line:58},endBody:{col:78,line:58}},SecurityBundle:{startLoc:{col:29,line:62},endLoc:{col:86,line:62},startBody:{col:29,line:62},endBody:{col:86,line:62}},JetpackVideoPressCard:{startLoc:{col:31,line:66},endLoc:{col:90,line:66},startBody:{col:31,line:66},endBody:{col:90,line:66}}};const f={title:"Packages/My Jetpack/Product Detail Card",component:t.Z,parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:33,line:16},endLoc:{col:88,line:16},startBody:{col:33,line:16},endBody:{col:88,line:16}},"jetpack-anti-spam":{startLoc:{col:25,line:22},endLoc:{col:83,line:22},startBody:{col:25,line:22},endBody:{col:83,line:22}},"jetpack-backup":{startLoc:{col:23,line:26},endLoc:{col:78,line:26},startBody:{col:23,line:26},endBody:{col:78,line:26}},"jetpack-boost":{startLoc:{col:22,line:30},endLoc:{col:76,line:30},startBody:{col:22,line:30},endBody:{col:76,line:30}},"jetpack-anti-spam-card":{startLoc:{col:29,line:34},endLoc:{col:87,line:34},startBody:{col:29,line:34},endBody:{col:87,line:34}},"jetpack-backup-card":{startLoc:{col:27,line:38},endLoc:{col:82,line:38},startBody:{col:27,line:38},endBody:{col:82,line:38}},"jetpack-boost-card":{startLoc:{col:26,line:42},endLoc:{col:80,line:42},startBody:{col:26,line:42},endBody:{col:80,line:42}},"jetpack-crm-card":{startLoc:{col:24,line:46},endLoc:{col:76,line:46},startBody:{col:24,line:46},endBody:{col:76,line:46}},"jetpack-extras-card":{startLoc:{col:27,line:50},endLoc:{col:82,line:50},startBody:{col:27,line:50},endBody:{col:82,line:50}},"jetpack-search-card":{startLoc:{col:27,line:54},endLoc:{col:82,line:54},startBody:{col:27,line:54},endBody:{col:82,line:54}},"jetpack-scan-card":{startLoc:{col:25,line:58},endLoc:{col:78,line:58},startBody:{col:25,line:58},endBody:{col:78,line:58}},"security-bundle":{startLoc:{col:29,line:62},endLoc:{col:86,line:62},startBody:{col:29,line:62},endBody:{col:86,line:62}},"jetpack-video-press-card":{startLoc:{col:31,line:66},endLoc:{col:90,line:66},startBody:{col:31,line:66},endBody:{col:90,line:66}}}},layout:"centered"}},u=(0,l.As)(),C=p=>(0,a.jsx)(t.Z,{...p,slug:"backup"});C.displayName="DefaultProductDetailCard";const B=C.bind({});B.parameters={mockData:u},B.args={};const v=p=>(0,a.jsx)(t.Z,{...p,slug:"anti-spam"});v.displayName="AntiSpamTemplate";const x=v.bind({});x.parameters={mockData:u};const g=p=>(0,a.jsx)(t.Z,{...p,slug:"backup"});g.displayName="BackupTemplate";const D=g.bind({});D.parameters={mockData:u};const P=p=>(0,a.jsx)(t.Z,{...p,slug:"boost"});P.displayName="BoostTemplate";const o=P.bind({});o.parameters={mockData:u};const i=p=>(0,a.jsx)(t.Z,{...p,slug:"anti-spam"});i.displayName="AntiSpamCardTemplate";const n=i.bind({});n.parameters={mockData:u};const m=p=>(0,a.jsx)(t.Z,{...p,slug:"backup"});m.displayName="BackupCardTemplate";const s=m.bind({});s.parameters={mockData:u};const d=p=>(0,a.jsx)(t.Z,{...p,slug:"boost"});d.displayName="BoostCardTemplate";const c=d.bind({});c.parameters={mockData:u};const j=p=>(0,a.jsx)(t.Z,{...p,slug:"crm"});j.displayName="CRMCardTemplate";const y=j.bind({});y.parameters={mockData:u};const b=p=>(0,a.jsx)(t.Z,{...p,slug:"extras"});b.displayName="ExtrasCardTemplate";const h=b.bind({});h.parameters={mockData:u};const A=p=>(0,a.jsx)(t.Z,{...p,slug:"search"});A.displayName="SearchCardTemplate";const E=A.bind({});E.parameters={mockData:u};const O=p=>(0,a.jsx)(t.Z,{...p,slug:"scan"});O.displayName="ScanCardTemplate";const J=O.bind({});J.parameters={mockData:u};const M=p=>(0,a.jsx)(t.Z,{...p,slug:"security"});M.displayName="SecurityCardTemplate";const w=M.bind({});w.parameters={mockData:u};const R=p=>(0,a.jsx)(t.Z,{...p,slug:"videopress"});R.displayName="VideoPressCardTemplate";const L=R.bind({});L.storyName="Jetpack VideoPress",L.parameters={mockData:u},B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(Z=(N=B.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}},x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(W=(V=x.parameters)==null?void 0:V.docs)==null?void 0:W.source}}},D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(F=(z=D.parameters)==null?void 0:z.docs)==null?void 0:F.source}}},o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...($=(X=o.parameters)==null?void 0:X.docs)==null?void 0:$.source}}},n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="anti-spam" />',...(Q=(G=n.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}},s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="backup" />',...(te=(ee=s.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}},c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="boost" />',...(oe=(se=c.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}},y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="crm" />',...(ce=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}},h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="extras" />',...(pe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}},E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="search" />',...(ue=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}},J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="scan" />',...(Ce=(ke=J.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}},w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="security" />',...(Be=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}},L.parameters={...L.parameters,docs:{...(De=L.parameters)==null?void 0:De.docs,source:{originalSource:'args => <ProductDetailCard {...args} slug="videopress" />',...(xe=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const je=["Default","JetpackAntiSpam","JetpackBackup","jetpackBoost","JetpackAntiSpamCard","JetpackBackupCard","JetpackBoostCard","JetpackCRMCard","JetpackExtrasCard","JetpackSearchCard","JetpackScanCard","SecurityBundle","JetpackVideoPressCard"]},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(T,_,e)=>{e.d(_,{Z:()=>g});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(t),a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),S=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),f=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function C(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const B=(0,f.Z)(u.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function v(D,P){const{href:o,children:i,className:n,rel:m="",...s}=D,d=[...new Set([...m.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),c=l()("components-external-link",n),j=!!(o!=null&&o.startsWith("#")),y=b=>{j&&b.preventDefault(),D.onClick&&D.onClick(b)};return(0,r.createElement)("a",{...s,className:c,href:o,onClick:y,target:"_blank",rel:d,ref:P},i,(0,r.createElement)(S.Z,{as:"span"},(0,a.__)("(opens in a new tab)")),(0,r.createElement)(B,{icon:k.Z,className:"components-external-link__icon"}))}const g=(0,r.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(T,_,e)=>{e.d(_,{Z:()=>P});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let t,l,a,k;const S=/<(\/)?(\w+)\s*(\/)?>/g;function f(o,i,n,m,s){return{element:o,tokenStart:i,tokenLength:n,prevOffset:m,leadingTextStart:s,children:[]}}const u=(o,i)=>{if(t=o,l=0,a=[],k=[],S.lastIndex=0,!C(i))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(B(i));return(0,r.createElement)(r.Fragment,null,...a)},C=o=>{const i=typeof o=="object",n=i&&Object.values(o);return i&&n.length&&n.every(m=>(0,r.isValidElement)(m))};function B(o){const i=v(),[n,m,s,d]=i,c=k.length,j=s>l?l:null;if(!o[m])return x(),!1;switch(n){case"no-more-tokens":if(c!==0){const{leadingTextStart:A,tokenStart:E}=k.pop();a.push(t.substr(A,E))}return x(),!1;case"self-closed":return c===0?(j!==null&&a.push(t.substr(j,s-j)),a.push(o[m]),l=s+d,!0):(g(f(o[m],s,d)),l=s+d,!0);case"opener":return k.push(f(o[m],s,d,s+d,j)),l=s+d,!0;case"closer":if(c===1)return D(s),l=s+d,!0;const y=k.pop(),b=t.substr(y.prevOffset,s-y.prevOffset);y.children.push(b),y.prevOffset=s+d;const h=f(y.element,y.tokenStart,y.tokenLength,s+d);return h.children=y.children,g(h),l=s+d,!0;default:return x(),!1}}function v(){const o=S.exec(t);if(o===null)return["no-more-tokens"];const i=o.index,[n,m,s,d]=o,c=n.length;return d?["self-closed",s,i,c]:m?["closer",s,i,c]:["opener",s,i,c]}function x(){const o=t.length-l;o!==0&&a.push(t.substr(l,o))}function g(o){const{element:i,tokenStart:n,tokenLength:m,prevOffset:s,children:d}=o,c=k[k.length-1],j=t.substr(c.prevOffset,n-c.prevOffset);j&&c.children.push(j),c.children.push((0,r.cloneElement)(i,null,...d)),c.prevOffset=s||n+m}function D(o){const{element:i,leadingTextStart:n,prevOffset:m,tokenStart:s,children:d}=k.pop(),c=o?t.substr(m,o-m):t.substr(m);c&&d.push(c),n!==null&&a.push(t.substr(n,s-n)),a.push((0,r.cloneElement)(i,null,...d))}const P=u},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(T,_,e)=>{e.d(_,{Z:()=>a});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(t.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(T,_,e)=>{e.d(_,{Z:()=>a});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(t.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plus.js":(T,_,e)=>{e.d(_,{Z:()=>a});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(t.y$,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(T,_,e)=>{e.d(_,{Z:()=>a});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,r.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,r.createElement)(t.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../components/components/terms-of-service/index.tsx":(T,_,e)=>{e.d(_,{Z:()=>m});var r=e("../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(l),k=e("../components/tools/jp-redirect/index.ts"),S=e("../components/components/text/index.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(f),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss"),B={};B.insert="head",B.singleton=!1;var v=u()(C.Z,B);const x=C.Z.locals||{};var g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const D=t.__,P=({className:s,multipleButtons:d,agreeButtonLabel:c})=>(0,g.jsx)(S.ZP,{className:a()(s,"terms-of-service"),children:d?(0,g.jsx)(o,{}):(0,g.jsx)(i,{agreeButtonLabel:c})});P.displayName="TermsOfService";const o=()=>(0,r.Z)(D("By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),{tosLink:(0,g.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,g.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),i=({agreeButtonLabel:s})=>(0,r.Z)((0,t.gB)(D("By clicking the <strong>%s</strong> button, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>share details</shareDetailsLink> with WordPress.com.","jetpack"),s),{strong:(0,g.jsx)("strong",{}),tosLink:(0,g.jsx)(n,{slug:"wpcom-tos"}),shareDetailsLink:(0,g.jsx)(n,{slug:"jetpack-support-what-data-does-jetpack-sync"})}),n=({slug:s,children:d})=>(0,g.jsx)("a",{className:"terms-of-service__link",href:(0,k.Z)(s),rel:"noopener noreferrer",target:"_blank",children:d});n.displayName="Link";const m=P;try{termsofservice.displayName="termsofservice",termsofservice.__docgenInfo={description:"",displayName:"termsofservice",props:{className:{defaultValue:null,description:"Represents additional CSS classes to be added to the component's root.",name:"className",required:!1,type:{name:"string"}},multipleButtons:{defaultValue:null,description:"Indicates whether there are multiple buttons present that would imply agreement if clicked.",name:"multipleButtons",required:!1,type:{name:"boolean"}},agreeButtonLabel:{defaultValue:null,description:"The text label of the button someone would click to agree to the terms.",name:"agreeButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/terms-of-service/index.tsx#termsofservice"]={docgenInfo:termsofservice.__docgenInfo,name:"termsofservice",path:"../components/components/terms-of-service/index.tsx#termsofservice"})}catch(s){}},"../components/tools/jp-redirect/index.ts":(T,_,e)=>{e.d(_,{Z:()=>r});function r(t,l={}){var f,u;const a={};let k;if(typeof window!="undefined"&&(k=(f=window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)==null?void 0:f.calypsoEnv),t.search("https://")===0){const C=new URL(t);t=`https://${C.host}${C.pathname}`,a.url=encodeURIComponent(t)}else a.source=encodeURIComponent(t);for(const C in l)a[C]=encodeURIComponent(l[C]);return!Object.keys(a).includes("site")&&typeof jetpack_redirects!="undefined"&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(a.site=(u=jetpack_redirects.currentBlogID)!=null?u:jetpack_redirects.currentSiteRawUrl),k&&(a.calypso_env=k),"https://jetpack.com/redirect/?"+Object.keys(a).map(C=>C+"="+a[C]).join("&")}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/terms-of-service/styles.scss":(T,_,e)=>{e.d(_,{Z:()=>S});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),k=a()(t());k.push([T.id,".terms-of-service{font-size:var(--font-body);color:var(--jp-black)}.terms-of-service .terms-of-service__link{color:var(--jp-green-50);white-space:nowrap;text-decoration:underline}",""]);const S=k}}]);})();
