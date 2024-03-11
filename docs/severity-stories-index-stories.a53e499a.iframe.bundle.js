"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6395],{"../../plugins/protect/src/js/components/severity/stories/index.stories.jsx":(h,l,e)=>{var u,c,g,s,y,v,j,x,B;e.r(l),e.d(l,{Critical:()=>o,High:()=>r,Low:()=>t,__namedExportsOrder:()=>T,default:()=>m});var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../plugins/protect/src/js/components/severity/index.jsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`import React from 'react';
import ThreatSeverityBadge from '../index.jsx';

export default {
	title: 'Plugins/Protect/Threat Severity Badge',
	component: ThreatSeverityBadge,
};

export const Low = args => <ThreatSeverityBadge { ...args } />;
Low.args = { severity: 1 };
export const High = args => <ThreatSeverityBadge { ...args } />;
High.args = { severity: 3 };
export const Critical = args => <ThreatSeverityBadge { ...args } />;
Critical.args = { severity: 5 };
`,n={Low:{startLoc:{col:19,line:9},endLoc:{col:62,line:9},startBody:{col:19,line:9},endBody:{col:62,line:9}},High:{startLoc:{col:20,line:11},endLoc:{col:63,line:11},startBody:{col:20,line:11},endBody:{col:63,line:11}},Critical:{startLoc:{col:24,line:13},endLoc:{col:67,line:13},startBody:{col:24,line:13},endBody:{col:67,line:13}}};const m={parameters:{storySource:{source:`import React from 'react';
import ThreatSeverityBadge from '../index.jsx';

export default {
	title: 'Plugins/Protect/Threat Severity Badge',
	component: ThreatSeverityBadge,
};

export const Low = args => <ThreatSeverityBadge { ...args } />;
Low.args = { severity: 1 };
export const High = args => <ThreatSeverityBadge { ...args } />;
High.args = { severity: 3 };
export const Critical = args => <ThreatSeverityBadge { ...args } />;
Critical.args = { severity: 5 };
`,locationsMap:{low:{startLoc:{col:19,line:9},endLoc:{col:62,line:9},startBody:{col:19,line:9},endBody:{col:62,line:9}},high:{startLoc:{col:20,line:11},endLoc:{col:63,line:11},startBody:{col:20,line:11},endBody:{col:63,line:11}},critical:{startLoc:{col:24,line:13},endLoc:{col:67,line:13},startBody:{col:24,line:13},endBody:{col:67,line:13}}}}},title:"Plugins/Protect/Threat Severity Badge",component:a.Z},t=_=>(0,d.jsx)(a.Z,{..._});t.displayName="Low",t.args={severity:1};const r=_=>(0,d.jsx)(a.Z,{..._});r.displayName="High",r.args={severity:3};const o=_=>(0,d.jsx)(a.Z,{..._});o.displayName="Critical",o.args={severity:5},t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}},r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}},o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const T=["Low","High","Critical"]},"../../plugins/protect/src/js/components/severity/index.jsx":(h,l,e)=>{e.d(l,{Z:()=>g});var p=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),n={};n.insert="head",n.singleton=!1;var m=d()(i.Z,n);const t=i.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=p.__,T=s=>s>=5?"is-critical":s>=3&&s<5?"is-high":"is-low",u=s=>{const y=o("Critical","jetpack-protect"),v=o("High","jetpack-protect"),j=o("Low","jetpack-protect");return s>=5?y:s>=3&&s<5?v:j},c=({severity:s})=>(0,r.jsx)("div",{className:`${t["threat-severity-badge"]} ${t[T(s)]}`,children:u(s)});c.displayName="ThreatSeverityBadge";const g=c;c.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(h,l,e)=>{e.d(l,{Z:()=>m});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(p),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(d),n=i()(a());n.push([h.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),n.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const m=n}}]);})();