"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6395],{"../../plugins/protect/src/js/components/severity/stories/index.stories.jsx":(j,i,e)=>{var u,c,g,s,y,v,h,T,B;e.r(i),e.d(i,{Critical:()=>o,High:()=>t,Low:()=>r,__namedExportsOrder:()=>S,default:()=>m});var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../plugins/protect/src/js/components/severity/index.jsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import React from 'react';
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
`,n={Low:{startLoc:{col:19,line:7},endLoc:{col:60,line:7},startBody:{col:19,line:7},endBody:{col:60,line:7}},High:{startLoc:{col:20,line:11},endLoc:{col:61,line:11},startBody:{col:20,line:11},endBody:{col:61,line:11}},Critical:{startLoc:{col:24,line:15},endLoc:{col:65,line:15},startBody:{col:24,line:15},endBody:{col:65,line:15}}};const m={parameters:{storySource:{source:`import React from 'react';
import ThreatSeverityBadge from '../index.jsx';
export default {
  title: 'Plugins/Protect/Threat Severity Badge',
  component: ThreatSeverityBadge
};
export const Low = args => <ThreatSeverityBadge {...args} />;
Low.args = {
  severity: 1
};
export const High = args => <ThreatSeverityBadge {...args} />;
High.args = {
  severity: 3
};
export const Critical = args => <ThreatSeverityBadge {...args} />;
Critical.args = {
  severity: 5
};
Low.parameters = {
  ...Low.parameters,
  docs: {
    ...Low.parameters?.docs,
    source: {
      originalSource: "args => <ThreatSeverityBadge {...args} />",
      ...Low.parameters?.docs?.source
    }
  }
};
High.parameters = {
  ...High.parameters,
  docs: {
    ...High.parameters?.docs,
    source: {
      originalSource: "args => <ThreatSeverityBadge {...args} />",
      ...High.parameters?.docs?.source
    }
  }
};
Critical.parameters = {
  ...Critical.parameters,
  docs: {
    ...Critical.parameters?.docs,
    source: {
      originalSource: "args => <ThreatSeverityBadge {...args} />",
      ...Critical.parameters?.docs?.source
    }
  }
};`,locationsMap:{low:{startLoc:{col:19,line:7},endLoc:{col:60,line:7},startBody:{col:19,line:7},endBody:{col:60,line:7}},high:{startLoc:{col:20,line:11},endLoc:{col:61,line:11},startBody:{col:20,line:11},endBody:{col:61,line:11}},critical:{startLoc:{col:24,line:15},endLoc:{col:65,line:15},startBody:{col:24,line:15},endBody:{col:65,line:15}}}}},title:"Plugins/Protect/Threat Severity Badge",component:a.Z},r=_=>(0,d.jsx)(a.Z,{..._});r.displayName="Low",r.args={severity:1};const t=_=>(0,d.jsx)(a.Z,{..._});t.displayName="High",t.args={severity:3};const o=_=>(0,d.jsx)(a.Z,{..._});o.displayName="Critical",o.args={severity:5},r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}},t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}},o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const S=["Low","High","Critical"];r.__docgenInfo={description:"",methods:[],displayName:"Low"},t.__docgenInfo={description:"",methods:[],displayName:"High"},o.__docgenInfo={description:"",methods:[],displayName:"Critical"}},"../../plugins/protect/src/js/components/severity/index.jsx":(j,i,e)=>{e.d(i,{Z:()=>g});var p=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),n={};n.insert="head",n.singleton=!1;var m=d()(l.Z,n);const r=l.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=p.__,S=s=>s>=5?"is-critical":s>=3&&s<5?"is-high":"is-low",u=s=>{const y=o("Critical","jetpack-protect"),v=o("High","jetpack-protect"),h=o("Low","jetpack-protect");return s>=5?y:s>=3&&s<5?v:h},c=({severity:s})=>(0,t.jsx)("div",{className:`${r["threat-severity-badge"]} ${r[S(s)]}`,children:u(s)});c.displayName="ThreatSeverityBadge",c.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"};const g=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(j,i,e)=>{e.d(i,{Z:()=>m});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(p),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(d),n=l()(a());n.push([j.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),n.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const m=n}}]);})();
