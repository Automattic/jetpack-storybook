"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8738],{"../components/components/diff-viewer/stories/index.stories.tsx":(k,g,a)=>{a.r(g),a.d(g,{Default:()=>m,__namedExportsOrder:()=>L,default:()=>w});var u=a("../components/components/diff-viewer/index.tsx"),x=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),y=`import DiffViewer from '../index.tsx';

export default {
	title: 'JS Packages/Components/Diff Viewer',
	component: DiffViewer,
};

const diff = \`diff --git a/package.json b/package.json
Index: a31e51f..c3b21a1 100644
--- a/package.json
+++ b/package.json
@@ -1,7 +1,7 @@
 {
   "name": "hello-world",
-  "version": "1.0.0",
+  "version": "1.0.1",
   "description": "Hello, World!",
-  "main": "index.js",
+  "main": "index.ts",
   "scripts": {
-     "start": "node index.js"
+     "start": "node index.ts"

diff --git a/src/index.js b/src/index.ts
Index: 17c882a..d3f041b 100644
--- a/src/index.js
+++ b/src/index.ts
@@ -0,0 +1,1 @@
+console.log( 'Hello, world!' );\`;

const Template = args => <DiffViewer { ...args } />;

export const Default = Template.bind( {} );

Default.args = {
	diff,
};
`,D={Default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}}};const w={parameters:{storySource:{source:`import DiffViewer from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Diff Viewer',
  component: DiffViewer
};
const diff = \`diff --git a/package.json b/package.json
Index: a31e51f..c3b21a1 100644
--- a/package.json
+++ b/package.json
@@ -1,7 +1,7 @@
 {
   "name": "hello-world",
-  "version": "1.0.0",
+  "version": "1.0.1",
   "description": "Hello, World!",
-  "main": "index.js",
+  "main": "index.ts",
   "scripts": {
-     "start": "node index.js"
+     "start": "node index.ts"

diff --git a/src/index.js b/src/index.ts
Index: 17c882a..d3f041b 100644
--- a/src/index.js
+++ b/src/index.ts
@@ -0,0 +1,1 @@
+console.log( 'Hello, world!' );\`;
const Template = args => /*#__PURE__*/_jsx(DiffViewer, {
  ...args
});
export const Default = Template.bind({});
Default.args = {
  diff
};`,locationsMap:{default:{startLoc:{col:17,line:29},endLoc:{col:2,line:31},startBody:{col:17,line:29},endBody:{col:2,line:31}}}}},title:"JS Packages/Components/Diff Viewer",component:u.A},v=`diff --git a/package.json b/package.json
Index: a31e51f..c3b21a1 100644
--- a/package.json
+++ b/package.json
@@ -1,7 +1,7 @@
 {
   "name": "hello-world",
-  "version": "1.0.0",
+  "version": "1.0.1",
   "description": "Hello, World!",
-  "main": "index.js",
+  "main": "index.ts",
   "scripts": {
-     "start": "node index.js"
+     "start": "node index.ts"

diff --git a/src/index.js b/src/index.ts
Index: 17c882a..d3f041b 100644
--- a/src/index.js
+++ b/src/index.ts
@@ -0,0 +1,1 @@
+console.log( 'Hello, world!' );`,m=(f=>(0,x.jsx)(u.A,{...f})).bind({});m.args={diff:v};const L=["Default"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <DiffViewer {...args} />",...m.parameters?.docs?.source}}};try{DiffViewer.displayName="DiffViewer",DiffViewer.__docgenInfo={description:"",displayName:"DiffViewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/stories/index.stories.tsx#DiffViewer"]={docgenInfo:DiffViewer.__docgenInfo,name:"DiffViewer",path:"../components/components/diff-viewer/stories/index.stories.tsx#DiffViewer"})}catch{}},"../components/components/diff-viewer/index.tsx":(k,g,a)=>{a.d(g,{A:()=>T});var u=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const x=s=>{const e=s.lastIndexOf("/");return e>-1?{prefix:s.slice(0,e),path:s.slice(e)}:{prefix:"",path:s}};function y(s,e){const t=s.startsWith("a/")&&e.startsWith("b/");if(s=t?s.slice(2):s,e=t?e.slice(2):e,s===e){const{prefix:r,path:d}=x(s);return{prev:{prefix:r,path:d},next:{prefix:r,path:d}}}const n=Math.max(s.length,e.length);for(let r=0,d=0;r<n;r++)if(s[r]==="/"&&e[r]==="/"&&(d=r),s[r]!==e[r])return{prev:{prefix:s.slice(0,d),path:s.slice(d)},next:{prefix:e.slice(0,d),path:e.slice(d)}};return{prev:x(s),next:x(e)}}function D(s){const e=s.split(/\n/),t=[];let n=0;function r(){const i={};for(t.push(i);n<e.length;){const l=e[n];if(/^(---|\+\+\+|@@)\s/.test(l))break;const _=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(l);_&&(i.index=_[1]),n++}for(d(i),d(i),i.hunks=[];n<e.length;){const l=e[n];if(/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(l))break;if(/^@@/.test(l))i.hunks.push(h());else{if(l)throw new Error("Unknown line "+(n+1)+" "+JSON.stringify(l));n++}}}function d(i){const l=/^(---|\+\+\+)\s+(.*)\r?$/.exec(e[n]);if(l){const _=l[1]==="---"?"old":"new",c=l[2].split("	",2);let p=c[0].replace(/\\\\/g,"\\");/^".*"$/.test(p)&&(p=p.substr(1,p.length-2)),i[_+"FileName"]=p,i[_+"Header"]=(c[1]||"").trim(),n++}}function h(){const i=n,l=e[n++],_=l.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),c={oldStart:+_[1],oldLines:typeof _[2]>"u"?1:+_[2],newStart:+_[3],newLines:typeof _[4]>"u"?1:+_[4],lines:[]};c.oldLines===0&&(c.oldStart+=1),c.newLines===0&&(c.newStart+=1);let p=0,S=0,b;for(;n<e.length&&(S<c.oldLines||p<c.newLines||(b=e[n])!==null&&b!==void 0&&b.startsWith("\\"));n++){const j=e[n].length===0&&n!==e.length-1?" ":e[n][0];if(j==="+"||j==="-"||j===" "||j==="\\")c.lines.push(e[n]),j==="+"?p++:j==="-"?S++:j===" "&&(p++,S++);else throw new Error(`Hunk at line ${i+1} contained invalid line ${e[n]}`)}if(!p&&c.newLines===1&&(c.newLines=0),!S&&c.oldLines===1&&(c.oldLines=0),p!==c.newLines)throw new Error("Added line count did not match for hunk at line "+(i+1));if(S!==c.oldLines)throw new Error("Removed line count did not match for hunk at line "+(i+1));return c}for(;n<e.length;)r();return t}var w=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=a.n(w),E=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/diff-viewer/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var L=v()(E.A,m);const f=E.A.locals||{};var o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=({oldFileName:s,newFileName:e})=>{const{prev:t,next:n}=y(s,e);return t.prefix+t.path===n.prefix+n.path?(0,o.jsxs)(u.Fragment,{children:[t.prefix&&(0,o.jsx)("span",{className:f["diff-viewer__path-prefix"],children:t.prefix}),(0,o.jsx)("span",{className:f["diff-viewer__path"],children:t.path})]}):(0,o.jsxs)(u.Fragment,{children:[!!t.prefix&&(0,o.jsx)("span",{className:f["diff-viewer__path-prefix"],children:t.prefix}),(0,o.jsx)("span",{className:f["diff-viewer__path"],children:t.path})," \u2192 ",!!n.prefix&&(0,o.jsx)("span",{className:f["diff-viewer__path-prefix"],children:n.prefix}),(0,o.jsx)("span",{className:f["diff-viewer__path"],children:n.path})]})},O=({diff:s})=>(0,o.jsx)("div",{className:f["diff-viewer"],children:D(s).map((e,t)=>(0,o.jsxs)(u.Fragment,{children:[(0,o.jsx)("div",{className:f["diff-viewer__filename"],children:A(e)},`file-${t}`),(0,o.jsxs)("div",{className:f["diff-viewer__file"],children:[(0,o.jsx)("div",{className:f["diff-viewer__line-numbers"],children:e.hunks.map((n,r)=>{let d=0;return n.lines.map((h,i)=>(0,o.jsx)("div",{children:h[0]==="+"?"\xA0":n.oldStart+d++},`${r}-${i}`))})},"left-numbers"),(0,o.jsx)("div",{className:f["diff-viewer__line-numbers"],children:e.hunks.map((n,r)=>{let d=0;return n.lines.map((h,i)=>(0,o.jsx)("div",{children:h[0]==="-"?"\xA0":n.newStart+d++},`${r}-${i}`))})},"right-numbers"),(0,o.jsx)("div",{className:f["diff-viewer__lines"],children:e.hunks.map((n,r)=>n.lines.map((d,h)=>{const i=d.slice(1).replace(/^\s*$/,"\xA0"),l=`${r}-${h}`;switch(d[0]){case" ":return(0,o.jsx)("div",{children:i},l);case"-":return(0,o.jsx)("del",{children:i},l);case"+":return(0,o.jsx)("ins",{children:i},l);default:return}}))})]},`diff-${t}`)]},t))}),T=O;try{O.displayName="DiffViewer",O.__docgenInfo={description:"",displayName:"DiffViewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#DiffViewer"]={docgenInfo:O.__docgenInfo,name:"DiffViewer",path:"../components/components/diff-viewer/index.tsx#DiffViewer"})}catch{}try{diffviewer.displayName="diffviewer",diffviewer.__docgenInfo={description:"",displayName:"diffviewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#diffviewer"]={docgenInfo:diffviewer.__docgenInfo,name:"diffviewer",path:"../components/components/diff-viewer/index.tsx#diffviewer"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/diff-viewer/styles.module.scss":(k,g,a)=>{a.d(g,{A:()=>v});var u=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=a.n(u),y=a("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),D=a.n(y),w=D()(x());w.push([k.id,'.ADZzRzNl1m8jLfaEfvnx{font-size:var(--font-body);line-height:1.5}.hz4SyV6HHNtWhCxMPw4U{padding:calc(var(--spacing-base)/2) var(--spacing-base);background-color:var(--jp-gray-10);font-weight:600}.Je9oyKNAyzcTtDYCV5S9{background-color:var(--jp-gray-0);display:flex;font-family:"Courier 10 Pitch",Courier,monospace;flex-direction:row;overflow-x:auto;white-space:pre}.YLKPR7kAMhZebpLgNhGp{padding:0 var(--spacing-base);display:flex;flex-direction:column;text-align:right;background-color:var(--jp-gray-10);color:var(--jp-gray-50)}.DqmSK9iMOEQ1k_ZjmOru{display:flex;flex-direction:column;flex-grow:1;overflow-x:visible}.DqmSK9iMOEQ1k_ZjmOru div,.DqmSK9iMOEQ1k_ZjmOru del,.DqmSK9iMOEQ1k_ZjmOru ins{padding:0 var(--spacing-base);text-decoration:none}.DqmSK9iMOEQ1k_ZjmOru del{background-color:var(--jp-red-0);color:var(--jp-red-60)}.DqmSK9iMOEQ1k_ZjmOru ins{background-color:var(--jp-green-5);color:var(--jp-green-60)}',""]),w.locals={"diff-viewer":"ADZzRzNl1m8jLfaEfvnx","diff-viewer__filename":"hz4SyV6HHNtWhCxMPw4U","diff-viewer__file":"Je9oyKNAyzcTtDYCV5S9","diff-viewer__line-numbers":"YLKPR7kAMhZebpLgNhGp","diff-viewer__lines":"DqmSK9iMOEQ1k_ZjmOru"};const v=w}}]);
