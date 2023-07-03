"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6395],{"../../plugins/protect/src/js/components/severity/stories/index.stories.jsx":(j,c,e)=>{var g,l,y,o,i,v,h,T,B;e.r(c),e.d(c,{Critical:()=>s,High:()=>t,Low:()=>r,__namedExportsOrder:()=>S,default:()=>u});var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../plugins/protect/src/js/components/severity/index.jsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import React from 'react';
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
`,n={Low:{startLoc:{col:19,line:7},endLoc:{col:60,line:7},startBody:{col:19,line:7},endBody:{col:60,line:7}},High:{startLoc:{col:20,line:11},endLoc:{col:61,line:11},startBody:{col:20,line:11},endBody:{col:61,line:11}},Critical:{startLoc:{col:24,line:15},endLoc:{col:65,line:15},startBody:{col:24,line:15},endBody:{col:65,line:15}}};const u={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{low:{startLoc:{col:19,line:7},endLoc:{col:60,line:7},startBody:{col:19,line:7},endBody:{col:60,line:7}},high:{startLoc:{col:20,line:11},endLoc:{col:61,line:11},startBody:{col:20,line:11},endBody:{col:61,line:11}},critical:{startLoc:{col:24,line:15},endLoc:{col:65,line:15},startBody:{col:24,line:15},endBody:{col:65,line:15}}}}},title:"Plugins/Protect/Threat Severity Badge",component:a.Z},r=p=>(0,d.jsx)(a.Z,{...p});r.displayName="Low",r.args={severity:1};const t=p=>(0,d.jsx)(a.Z,{...p});t.displayName="High",t.args={severity:3};const s=p=>(0,d.jsx)(a.Z,{...p});s.displayName="Critical",s.args={severity:5},r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source}}},t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(v=(i=t.parameters)==null?void 0:i.docs)==null?void 0:v.source}}},s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ThreatSeverityBadge {...args} />",...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const S=["Low","High","Critical"];r.__docgenInfo={description:"",methods:[],displayName:"Low"},t.__docgenInfo={description:"",methods:[],displayName:"High"},s.__docgenInfo={description:"",methods:[],displayName:"Critical"}},"../../plugins/protect/src/js/components/severity/index.jsx":(j,c,e)=>{e.d(c,{Z:()=>y});var m=e("../../../node_modules/.pnpm/@wordpress+i18n@4.36.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),n={};n.insert="head",n.singleton=!1;var u=d()(_.Z,n);const r=_.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=m.__,S=o=>o>=5?"is-critical":o>=3&&o<5?"is-high":"is-low",g=o=>{const i=s("Critical","jetpack-protect"),v=s("High","jetpack-protect"),h=s("Low","jetpack-protect");return o>=5?i:o>=3&&o<5?v:h},l=o=>{let{severity:i}=o;return(0,t.jsx)("div",{className:`${r["threat-severity-badge"]} ${r[S(i)]}`,children:g(i)})};l.displayName="ThreatSeverityBadge",l.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"};const y=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(j,c,e)=>{e.d(c,{Z:()=>u});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(m),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(d),n=_()(a());n.push([j.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),n.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const u=n}}]);})();
