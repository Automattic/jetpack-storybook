"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5762],{"../components/components/marked-lines/stories/index.stories.tsx":(x,d,s)=>{s.r(d),s.d(d,{Default:()=>e,__namedExportsOrder:()=>o,default:()=>_});var r=s("../components/components/marked-lines/index.tsx"),p=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),u=`import MarkedLines from '../index.tsx';

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
`,l={Default:{startLoc:{col:23,line:7},endLoc:{col:2,line:12},startBody:{col:23,line:7},endBody:{col:2,line:12}}};const _={parameters:{storySource:{source:`import MarkedLines from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:23,line:7},endLoc:{col:2,line:12},startBody:{col:23,line:7},endBody:{col:2,line:12}}}}},title:"JS Packages/Components/Marked Lines",component:r.A},e=i=>(0,p.jsx)(r.A,{context:{...i.lines,marks:i.marks}});e.args={lines:{10:"add :: Num a => a -> a -> a",11:"add = (+)",15:"solve a b = solution",16:"	where",17:"		solution = sum parts",18:"		{- \u{1F4A9} indices are in UCS-2 code units -}",19:"		sum = foldl add 0",20:"		parts = foo a b",58:"{- lines need not be contiguous -}"},marks:{11:[[6,9]],18:[[23,28]],19:[[2,5],[14,17]]}};const o=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <MarkedLines context={{
  ...args.lines,
  marks: args.marks
}} />`,...e.parameters?.docs?.source}}};try{e.displayName="Default",e.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/marked-lines/stories/index.stories.tsx#Default"]={docgenInfo:e.__docgenInfo,name:"Default",path:"../components/components/marked-lines/stories/index.stories.tsx#Default"})}catch{}},"../components/components/marked-lines/index.tsx":(x,d,s)=>{s.d(d,{A:()=>y});var r=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=s.n(r),u=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/marked-lines/styles.module.scss"),l={};l.insert="head",l.singleton=!1;var _=p()(u.A,l);const e=u.A.locals||{};var o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=t=>(0,o.jsx)("mark",{className:e["marked-lines__mark"],children:t},t),O=(t,a)=>{const[c,n]=t.reduce(([m,k],[f,g])=>{const j=a.slice(f,g),v=f>k?[a.slice(k,f),i(j)]:[i(j)];return[[...m,...v],g]},[[],0]);return n<a.length?[...c,a.slice(n)]:c},y=({context:t})=>{const{marks:a,...c}=t;return(0,o.jsxs)("div",{className:e["marked-lines"],children:[(0,o.jsx)("div",{className:e["marked-lines__line-numbers"],children:Object.keys(c).map(n=>{const m=Object.hasOwn(a,n);return(0,o.jsx)("div",{className:`${e["marked-lines__line-number"]} ${m?e["marked-lines__marked-line"]:""}`,children:n},n)})}),(0,o.jsx)("div",{className:e["marked-lines__lines"],children:Object.keys(c).map(n=>{const m=c[n]||" ",k=Object.hasOwn(a,n);return(0,o.jsx)("div",{className:`${e["marked-lines__line"]} ${k?e["marked-lines__marked-line"]:""} `,children:(0,o.jsx)(o.Fragment,{children:k?O(a[n],m):m})},n)})})]})};try{markedlines.displayName="markedlines",markedlines.__docgenInfo={description:"",displayName:"markedlines",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/marked-lines/index.tsx#markedlines"]={docgenInfo:markedlines.__docgenInfo,name:"markedlines",path:"../components/components/marked-lines/index.tsx#markedlines"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/marked-lines/styles.module.scss":(x,d,s)=>{s.d(d,{A:()=>e});var r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=s.n(r),u=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=s.n(u),_=l()(p());_.push([x.id,".vnAKgosr6jMUmVlm3ZvU{padding:0;background-color:var(--jp-gray-0);font-family:monospace;display:flex;flex-direction:row;overflow-x:auto}.SHdmOE1Aw5BHDru2py6B{background-color:var(--jp-red-0)}.aPEFslCHyTgF_qW3GVaE{display:flex;flex-direction:column;text-align:right}.w53X5RnDMolZ6mJ2gx7Z{padding:0 calc(var(--spacing-base)/2);background-color:var(--jp-gray-10);color:var(--font-body)}.w53X5RnDMolZ6mJ2gx7Z.SHdmOE1Aw5BHDru2py6B{background-color:var(--jp-red-50);color:var(--jp-white)}.h3N4p86b6QmL5zLerrtD{display:flex;flex:1;flex-direction:column;white-space:pre;overflow-x:visible}.FRq9QxRq9LOTqIze8Lci{padding-left:var(--spacing-base)}.LYClj0zJOQ_wA9Ffqxug{background-color:var(--jp-red);color:var(--jp-white);border-radius:calc(var(--jp-border-radius)/2);padding:calc(var(--spacing-base)/4) calc(var(--spacing-base)/2)}",""]),_.locals={"marked-lines":"vnAKgosr6jMUmVlm3ZvU","marked-lines__marked-line":"SHdmOE1Aw5BHDru2py6B","marked-lines__line-numbers":"aPEFslCHyTgF_qW3GVaE","marked-lines__line-number":"w53X5RnDMolZ6mJ2gx7Z","marked-lines__lines":"h3N4p86b6QmL5zLerrtD","marked-lines__line":"FRq9QxRq9LOTqIze8Lci","marked-lines__mark":"LYClj0zJOQ_wA9Ffqxug"};const e=_}}]);
