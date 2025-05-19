"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8738],{"../components/components/diff-viewer/stories/index.stories.tsx":(b,j,t)=>{t.r(j),t.d(j,{Default:()=>u,__namedExportsOrder:()=>f,default:()=>y});var w=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=t("../components/components/diff-viewer/index.tsx"),v=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),S=`import React from 'react';
import DiffViewer from '../index.tsx';

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
`,g={Default:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}}};const y={parameters:{storySource:{source:`import React from 'react';
import DiffViewer from '../index.tsx';
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
};`,locationsMap:{default:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}}}}},title:"JS Packages/Components/Diff Viewer",component:m.A},E=`diff --git a/package.json b/package.json
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
+console.log( 'Hello, world!' );`,u=(i=>(0,v.jsx)(m.A,{...i})).bind({});u.args={diff:E};const f=["Default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <DiffViewer {...args} />",...u.parameters?.docs?.source}}}},"../components/components/diff-viewer/index.tsx":(b,j,t)=>{t.d(j,{A:()=>T});var w=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const m=s=>{const e=s.lastIndexOf("/");return e>-1?{prefix:s.slice(0,e),path:s.slice(e)}:{prefix:"",path:s}};function v(s,e){const r=s.startsWith("a/")&&e.startsWith("b/");if(s=r?s.slice(2):s,e=r?e.slice(2):e,s===e){const{prefix:d,path:a}=m(s);return{prev:{prefix:d,path:a},next:{prefix:d,path:a}}}const n=Math.max(s.length,e.length);for(let d=0,a=0;d<n;d++)if(s[d]==="/"&&e[d]==="/"&&(a=d),s[d]!==e[d])return{prev:{prefix:s.slice(0,a),path:s.slice(a)},next:{prefix:e.slice(0,a),path:e.slice(a)}};return{prev:m(s),next:m(e)}}function S(s){const e=s.split(/\n/),r=[];let n=0;function d(){const o={};for(r.push(o);n<e.length;){const l=e[n];if(/^(---|\+\+\+|@@)\s/.test(l))break;const _=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(l);_&&(o.index=_[1]),n++}for(a(o),a(o),o.hunks=[];n<e.length;){const l=e[n];if(/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(l))break;if(/^@@/.test(l))o.hunks.push(x());else{if(l)throw new Error("Unknown line "+(n+1)+" "+JSON.stringify(l));n++}}}function a(o){const l=/^(---|\+\+\+)\s+(.*)\r?$/.exec(e[n]);if(l){const _=l[1]==="---"?"old":"new",c=l[2].split("	",2);let p=c[0].replace(/\\\\/g,"\\");/^".*"$/.test(p)&&(p=p.substr(1,p.length-2)),o[_+"FileName"]=p,o[_+"Header"]=(c[1]||"").trim(),n++}}function x(){const o=n,l=e[n++],_=l.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),c={oldStart:+_[1],oldLines:typeof _[2]>"u"?1:+_[2],newStart:+_[3],newLines:typeof _[4]>"u"?1:+_[4],lines:[]};c.oldLines===0&&(c.oldStart+=1),c.newLines===0&&(c.newStart+=1);let p=0,k=0,L;for(;n<e.length&&(k<c.oldLines||p<c.newLines||(L=e[n])!==null&&L!==void 0&&L.startsWith("\\"));n++){const h=e[n].length===0&&n!==e.length-1?" ":e[n][0];if(h==="+"||h==="-"||h===" "||h==="\\")c.lines.push(e[n]),h==="+"?p++:h==="-"?k++:h===" "&&(p++,k++);else throw new Error(`Hunk at line ${o+1} contained invalid line ${e[n]}`)}if(!p&&c.newLines===1&&(c.newLines=0),!k&&c.oldLines===1&&(c.oldLines=0),p!==c.newLines)throw new Error("Added line count did not match for hunk at line "+(o+1));if(k!==c.oldLines)throw new Error("Removed line count did not match for hunk at line "+(o+1));return c}for(;n<e.length;)d();return r}var g=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=t.n(g),E=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/diff-viewer/styles.module.scss"),O={};O.insert="head",O.singleton=!1;var u=y()(E.A,O);const f=E.A.locals||{};var i=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=({oldFileName:s,newFileName:e})=>{const{prev:r,next:n}=v(s,e);return r.prefix+r.path===n.prefix+n.path?(0,i.jsxs)(w.Fragment,{children:[r.prefix&&(0,i.jsx)("span",{className:f["diff-viewer__path-prefix"],children:r.prefix}),(0,i.jsx)("span",{className:f["diff-viewer__path"],children:r.path})]}):(0,i.jsxs)(w.Fragment,{children:[!!r.prefix&&(0,i.jsx)("span",{className:f["diff-viewer__path-prefix"],children:r.prefix}),(0,i.jsx)("span",{className:f["diff-viewer__path"],children:r.path})," \u2192 ",!!n.prefix&&(0,i.jsx)("span",{className:f["diff-viewer__path-prefix"],children:n.prefix}),(0,i.jsx)("span",{className:f["diff-viewer__path"],children:n.path})]})},D=({diff:s})=>(0,i.jsx)("div",{className:f["diff-viewer"],children:S(s).map((e,r)=>(0,i.jsxs)(w.Fragment,{children:[(0,i.jsx)("div",{className:f["diff-viewer__filename"],children:A(e)},`file-${r}`),(0,i.jsxs)("div",{className:f["diff-viewer__file"],children:[(0,i.jsx)("div",{className:f["diff-viewer__line-numbers"],children:e.hunks.map((n,d)=>{let a=0;return n.lines.map((x,o)=>(0,i.jsx)("div",{children:x[0]==="+"?"\xA0":n.oldStart+a++},`${d}-${o}`))})},"left-numbers"),(0,i.jsx)("div",{className:f["diff-viewer__line-numbers"],children:e.hunks.map((n,d)=>{let a=0;return n.lines.map((x,o)=>(0,i.jsx)("div",{children:x[0]==="-"?"\xA0":n.newStart+a++},`${d}-${o}`))})},"right-numbers"),(0,i.jsx)("div",{className:f["diff-viewer__lines"],children:e.hunks.map((n,d)=>n.lines.map((a,x)=>{const o=a.slice(1).replace(/^\s*$/,"\xA0"),l=`${d}-${x}`;switch(a[0]){case" ":return(0,i.jsx)("div",{children:o},l);case"-":return(0,i.jsx)("del",{children:o},l);case"+":return(0,i.jsx)("ins",{children:o},l);default:return}}))})]},`diff-${r}`)]},r))}),T=D;try{D.displayName="DiffViewer",D.__docgenInfo={description:"",displayName:"DiffViewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#DiffViewer"]={docgenInfo:D.__docgenInfo,name:"DiffViewer",path:"../components/components/diff-viewer/index.tsx#DiffViewer"})}catch{}try{diffviewer.displayName="diffviewer",diffviewer.__docgenInfo={description:"",displayName:"diffviewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#diffviewer"]={docgenInfo:diffviewer.__docgenInfo,name:"diffviewer",path:"../components/components/diff-viewer/index.tsx#diffviewer"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/diff-viewer/styles.module.scss":(b,j,t)=>{t.d(j,{A:()=>y});var w=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(w),v=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),S=t.n(v),g=S()(m());g.push([b.id,'.ADZzRzNl1m8jLfaEfvnx{font-size:var(--font-body);line-height:1.5}.hz4SyV6HHNtWhCxMPw4U{padding:calc(var(--spacing-base)/2) var(--spacing-base);background-color:var(--jp-gray-10);font-weight:600}.Je9oyKNAyzcTtDYCV5S9{background-color:var(--jp-gray-0);display:flex;font-family:"Courier 10 Pitch",Courier,monospace;flex-direction:row;overflow-x:auto;white-space:pre}.YLKPR7kAMhZebpLgNhGp{padding:0 var(--spacing-base);display:flex;flex-direction:column;text-align:right;background-color:var(--jp-gray-10);color:var(--jp-gray-50)}.DqmSK9iMOEQ1k_ZjmOru{display:flex;flex-direction:column;flex-grow:1;overflow-x:visible}.DqmSK9iMOEQ1k_ZjmOru div,.DqmSK9iMOEQ1k_ZjmOru del,.DqmSK9iMOEQ1k_ZjmOru ins{padding:0 var(--spacing-base);text-decoration:none}.DqmSK9iMOEQ1k_ZjmOru del{background-color:var(--jp-red-0);color:var(--jp-red-60)}.DqmSK9iMOEQ1k_ZjmOru ins{background-color:var(--jp-green-5);color:var(--jp-green-60)}',""]),g.locals={"diff-viewer":"ADZzRzNl1m8jLfaEfvnx","diff-viewer__filename":"hz4SyV6HHNtWhCxMPw4U","diff-viewer__file":"Je9oyKNAyzcTtDYCV5S9","diff-viewer__line-numbers":"YLKPR7kAMhZebpLgNhGp","diff-viewer__lines":"DqmSK9iMOEQ1k_ZjmOru"};const y=g}}]);
