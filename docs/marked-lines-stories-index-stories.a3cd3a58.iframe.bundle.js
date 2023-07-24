"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1231],{"../../plugins/protect/src/js/components/marked-lines/stories/index.stories.jsx":(y,_,s)=>{var M,h,E;s.r(_),s.d(_,{Default:()=>o,__namedExportsOrder:()=>P,default:()=>O});var v=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=s.n(p),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/marked-lines/styles.module.scss"),r={};r.insert="head",r.singleton=!1;var x=k()(m.Z,r);const t=m.Z.locals||{};var n=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=a=>(0,n.jsx)("mark",{className:t["marked-lines__mark"],children:a},a);f.displayName="mark";const D=(a,d)=>{const[l,i]=a.reduce((e,c)=>{let[u,L]=e,[g,S]=c;const w=d.slice(g,S),A=g>L?[d.slice(L,g),f(w)]:[f(w)];return[[...u,...A],S]},[[],0]);return i<d.length?[...l,d.slice(i)]:l},j=a=>{let{context:d}=a;const{marks:l,...i}=d;return(0,n.jsxs)("div",{className:t["marked-lines"],children:[(0,n.jsx)("div",{className:t["marked-lines__line-numbers"],children:Object.keys(i).map(e=>{const c=l.hasOwnProperty(e);return(0,n.jsx)("div",{className:`${t["marked-lines__line-number"]} ${c?t["marked-lines__marked-line"]:""}`,children:e},e)})}),(0,n.jsx)("div",{className:t["marked-lines__lines"],children:Object.keys(i).map(e=>{const c=i[e]||" ",u=l.hasOwnProperty(e);return(0,n.jsx)("div",{className:`${t["marked-lines__line"]} ${u?t["marked-lines__marked-line"]:""} `,children:(0,n.jsx)(n.Fragment,{children:u?D(l[e],c):c})},e)})})]})};j.displayName="MarkedLines",j.__docgenInfo={description:"",methods:[],displayName:"MarkedLines"};const b=j;var C=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import MarkedLines from '../index.jsx';

export default {
	title: 'Plugins/Protect/Marked Lines',
	component: MarkedLines,
};

export const Default = args => (
	<MarkedLines
		context={ {
			...args.lines,
			marks: args.marks,
		} }
	/>
);
Default.args = {
	lines: {
		10: 'add :: Num a => a -> a -> a',
		11: 'add = (+)',
		15: 'solve a b = solution',
		16: '	where',
		17: '		solution = sum parts',
		18: '		{- \u{1F4A9} indices are in UCS-2 code units -}',
		19: '		sum = foldl add 0',
		20: '		parts = foo a b',
		58: '{- lines need not be contiguous -}',
	},
	marks: {
		11: [ [ 6, 9 ] ],
		18: [ [ 23, 28 ] ],
		19: [
			[ 2, 5 ],
			[ 14, 17 ],
		],
	},
};
`,I={Default:{startLoc:{col:23,line:8},endLoc:{col:5,line:11},startBody:{col:23,line:8},endBody:{col:5,line:11}}};const O={parameters:{storySource:{source:`
import React from 'react';
import MarkedLines from '../index.jsx';
export default {
  title: 'Plugins/Protect/Marked Lines',
  component: MarkedLines
};
export const Default = args => <MarkedLines context={{
  ...args.lines,
  marks: args.marks
}} />;
Default.args = {
  lines: {
    10: 'add :: Num a => a -> a -> a',
    11: 'add = (+)',
    15: 'solve a b = solution',
    16: '	where',
    17: '		solution = sum parts',
    18: '		{- \u{1F4A9} indices are in UCS-2 code units -}',
    19: '		sum = foldl add 0',
    20: '		parts = foo a b',
    58: '{- lines need not be contiguous -}'
  },
  marks: {
    11: [[6, 9]],
    18: [[23, 28]],
    19: [[2, 5], [14, 17]]
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <MarkedLines context={{\\n  ...args.lines,\\n  marks: args.marks\\n}} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:5,line:11},startBody:{col:23,line:8},endBody:{col:5,line:11}}}}},title:"Plugins/Protect/Marked Lines",component:b},o=a=>(0,n.jsx)(b,{context:{...a.lines,marks:a.marks}});o.displayName="Default",o.args={lines:{10:"add :: Num a => a -> a -> a",11:"add = (+)",15:"solve a b = solution",16:"	where",17:"		solution = sum parts",18:"		{- \u{1F4A9} indices are in UCS-2 code units -}",19:"		sum = foldl add 0",20:"		parts = foo a b",58:"{- lines need not be contiguous -}"},marks:{11:[[6,9]],18:[[23,28]],19:[[2,5],[14,17]]}},o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => <MarkedLines context={{
  ...args.lines,
  marks: args.marks
}} />`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const P=["Default"];o.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/marked-lines/styles.module.scss":(y,_,s)=>{s.d(_,{Z:()=>x});var v=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=s.n(v),k=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=s.n(k),r=m()(p());r.push([y.id,".qkLpiaVA3TVFCahtCKsR{padding:0;background-color:var(--jp-gray-0);font-family:monospace;display:flex;flex-direction:row;overflow-x:scroll}.KXI77J_OzHUbW0EQwfbH{background-color:var(--jp-red-0)}.Amr1f9VUqGV39WyfMfw7{display:flex;flex-direction:column;text-align:right}.awfxyv5kycEsUimZs_Fv{padding:0 calc(var(--spacing-base)/2);background-color:var(--jp-gray-10);color:var(--font-body)}.awfxyv5kycEsUimZs_Fv.KXI77J_OzHUbW0EQwfbH{background-color:var(--jp-red-50);color:var(--jp-white)}.ElcZ0yA91Brqla_anrSV{display:flex;flex:1;flex-direction:column;white-space:pre;overflow-x:visible}.mNei7yaTConIp04PMd8I{padding-left:var(--spacing-base)}.thukHuyQ0ficQSAhEpnA{background-color:var(--jp-red);color:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)/4) calc(var(--spacing-base)/2)}",""]),r.locals={"marked-lines":"qkLpiaVA3TVFCahtCKsR","marked-lines__marked-line":"KXI77J_OzHUbW0EQwfbH","marked-lines__line-numbers":"Amr1f9VUqGV39WyfMfw7","marked-lines__line-number":"awfxyv5kycEsUimZs_Fv","marked-lines__lines":"ElcZ0yA91Brqla_anrSV","marked-lines__line":"mNei7yaTConIp04PMd8I","marked-lines__mark":"thukHuyQ0ficQSAhEpnA"};const x=r}}]);})();
