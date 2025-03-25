"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5762],{"../components/components/marked-lines/stories/index.stories.tsx":(g,c,e)=>{e.r(c),e.d(c,{Default:()=>t,__namedExportsOrder:()=>L,default:()=>S});var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(u),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/marked-lines/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var p=k()(m.A,i);const o=m.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=s=>(0,a.jsx)("mark",{className:o["marked-lines__mark"],children:s},s),v=(s,d)=>{const[r,n]=s.reduce(([l,_],[f,y])=>{const O=d.slice(f,y),b=f>_?[d.slice(_,f),j(O)]:[j(O)];return[[...l,...b],y]},[[],0]);return n<d.length?[...r,d.slice(n)]:r},x=({context:s})=>{const{marks:d,...r}=s;return(0,a.jsxs)("div",{className:o["marked-lines"],children:[(0,a.jsx)("div",{className:o["marked-lines__line-numbers"],children:Object.keys(r).map(n=>{const l=Object.hasOwn(d,n);return(0,a.jsx)("div",{className:`${o["marked-lines__line-number"]} ${l?o["marked-lines__marked-line"]:""}`,children:n},n)})}),(0,a.jsx)("div",{className:o["marked-lines__lines"],children:Object.keys(r).map(n=>{const l=r[n]||" ",_=Object.hasOwn(d,n);return(0,a.jsx)("div",{className:`${o["marked-lines__line"]} ${_?o["marked-lines__marked-line"]:""} `,children:(0,a.jsx)(a.Fragment,{children:_?v(d[n],l):l})},n)})})]})};try{markedlines.displayName="markedlines",markedlines.__docgenInfo={description:"",displayName:"markedlines",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/marked-lines/index.tsx#markedlines"]={docgenInfo:markedlines.__docgenInfo,name:"markedlines",path:"../components/components/marked-lines/index.tsx#markedlines"})}catch{}var M=`import MarkedLines from '../index.js';

export default {
	title: 'JS Packages/Components/Marked Lines',
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
`,D={Default:{startLoc:{col:23,line:7},endLoc:{col:2,line:12},startBody:{col:23,line:7},endBody:{col:2,line:12}}};const S={parameters:{storySource:{source:`import MarkedLines from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Marked Lines',
  component: MarkedLines
};
export const Default = args => /*#__PURE__*/_jsx(MarkedLines, {
  context: {
    ...args.lines,
    marks: args.marks
  }
});
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
};`,locationsMap:{default:{startLoc:{col:23,line:7},endLoc:{col:2,line:12},startBody:{col:23,line:7},endBody:{col:2,line:12}}}}},title:"JS Packages/Components/Marked Lines",component:x},t=s=>(0,a.jsx)(x,{context:{...s.lines,marks:s.marks}});t.args={lines:{10:"add :: Num a => a -> a -> a",11:"add = (+)",15:"solve a b = solution",16:"	where",17:"		solution = sum parts",18:"		{- \u{1F4A9} indices are in UCS-2 code units -}",19:"		sum = foldl add 0",20:"		parts = foo a b",58:"{- lines need not be contiguous -}"},marks:{11:[[6,9]],18:[[23,28]],19:[[2,5],[14,17]]}};const L=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <MarkedLines context={{
  ...args.lines,
  marks: args.marks
}} />`,...t.parameters?.docs?.source}}};try{t.displayName="Default",t.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/marked-lines/stories/index.stories.tsx#Default"]={docgenInfo:t.__docgenInfo,name:"Default",path:"../components/components/marked-lines/stories/index.stories.tsx#Default"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/marked-lines/styles.module.scss":(g,c,e)=>{e.d(c,{A:()=>o});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=e.n(u),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),p=i()(k());p.push([g.id,".vnAKgosr6jMUmVlm3ZvU{padding:0;background-color:var(--jp-gray-0);font-family:monospace;display:flex;flex-direction:row;overflow-x:auto}.SHdmOE1Aw5BHDru2py6B{background-color:var(--jp-red-0)}.aPEFslCHyTgF_qW3GVaE{display:flex;flex-direction:column;text-align:right}.w53X5RnDMolZ6mJ2gx7Z{padding:0 calc(var(--spacing-base)/2);background-color:var(--jp-gray-10);color:var(--font-body)}.w53X5RnDMolZ6mJ2gx7Z.SHdmOE1Aw5BHDru2py6B{background-color:var(--jp-red-50);color:var(--jp-white)}.h3N4p86b6QmL5zLerrtD{display:flex;flex:1;flex-direction:column;white-space:pre;overflow-x:visible}.FRq9QxRq9LOTqIze8Lci{padding-left:var(--spacing-base)}.LYClj0zJOQ_wA9Ffqxug{background-color:var(--jp-red);color:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)/4) calc(var(--spacing-base)/2)}",""]),p.locals={"marked-lines":"vnAKgosr6jMUmVlm3ZvU","marked-lines__marked-line":"SHdmOE1Aw5BHDru2py6B","marked-lines__line-numbers":"aPEFslCHyTgF_qW3GVaE","marked-lines__line-number":"w53X5RnDMolZ6mJ2gx7Z","marked-lines__lines":"h3N4p86b6QmL5zLerrtD","marked-lines__line":"FRq9QxRq9LOTqIze8Lci","marked-lines__mark":"LYClj0zJOQ_wA9Ffqxug"};const o=p}}]);
