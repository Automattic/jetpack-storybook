"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8738],{"../components/components/diff-viewer/stories/index.stories.tsx":(E,v,c)=>{c.r(v),c.d(v,{Default:()=>x,__namedExportsOrder:()=>M,default:()=>T});var h=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const j=s=>{const e=s.lastIndexOf("/");return e>-1?{prefix:s.slice(0,e),path:s.slice(e)}:{prefix:"",path:s}};function S(s,e){const r=s.startsWith("a/")&&e.startsWith("b/");if(s=r?s.slice(2):s,e=r?e.slice(2):e,s===e){const{prefix:t,path:a}=j(s);return{prev:{prefix:t,path:a},next:{prefix:t,path:a}}}const n=Math.max(s.length,e.length);for(let t=0,a=0;t<n;t++)if(s[t]==="/"&&e[t]==="/"&&(a=t),s[t]!==e[t])return{prev:{prefix:s.slice(0,a),path:s.slice(a)},next:{prefix:e.slice(0,a),path:e.slice(a)}};return{prev:j(s),next:j(e)}}function y(s){const e=s.split(/\n/),r=[];let n=0;function t(){const o={};for(r.push(o);n<e.length;){const d=e[n];if(/^(---|\+\+\+|@@)\s/.test(d))break;const p=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(d);p&&(o.index=p[1]),n++}for(a(o),a(o),o.hunks=[];n<e.length;){const d=e[n];if(/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(d))break;if(/^@@/.test(d))o.hunks.push(m());else{if(d)throw new Error("Unknown line "+(n+1)+" "+JSON.stringify(d));n++}}}function a(o){const d=/^(---|\+\+\+)\s+(.*)\r?$/.exec(e[n]);if(d){const p=d[1]==="---"?"old":"new",l=d[2].split("	",2);let _=l[0].replace(/\\\\/g,"\\");/^".*"$/.test(_)&&(_=_.substr(1,_.length-2)),o[p+"FileName"]=_,o[p+"Header"]=(l[1]||"").trim(),n++}}function m(){const o=n,d=e[n++],p=d.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),l={oldStart:+p[1],oldLines:typeof p[2]>"u"?1:+p[2],newStart:+p[3],newLines:typeof p[4]>"u"?1:+p[4],lines:[]};l.oldLines===0&&(l.oldStart+=1),l.newLines===0&&(l.newStart+=1);let _=0,g=0,D;for(;n<e.length&&(g<l.oldLines||_<l.newLines||(D=e[n])!==null&&D!==void 0&&D.startsWith("\\"));n++){const u=e[n].length===0&&n!==e.length-1?" ":e[n][0];if(u==="+"||u==="-"||u===" "||u==="\\")l.lines.push(e[n]),u==="+"?_++:u==="-"?g++:u===" "&&(_++,g++);else throw new Error(`Hunk at line ${o+1} contained invalid line ${e[n]}`)}if(!_&&l.newLines===1&&(l.newLines=0),!g&&l.oldLines===1&&(l.oldLines=0),_!==l.newLines)throw new Error("Added line count did not match for hunk at line "+(o+1));if(g!==l.oldLines)throw new Error("Removed line count did not match for hunk at line "+(o+1));return l}for(;n<e.length;)t();return r}var w=c("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=c.n(w),L=c("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/diff-viewer/styles.module.scss"),O={};O.insert="head",O.singleton=!1;var P=b()(L.A,O);const f=L.A.locals||{};var i=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const N=({oldFileName:s,newFileName:e})=>{const{prev:r,next:n}=S(s,e);return r.prefix+r.path===n.prefix+n.path?(0,i.jsxs)(h.Fragment,{children:[r.prefix&&(0,i.jsx)("span",{className:f["diff-viewer__path-prefix"],children:r.prefix}),(0,i.jsx)("span",{className:f["diff-viewer__path"],children:r.path})]}):(0,i.jsxs)(h.Fragment,{children:[!!r.prefix&&(0,i.jsx)("span",{className:f["diff-viewer__path-prefix"],children:r.prefix}),(0,i.jsx)("span",{className:f["diff-viewer__path"],children:r.path})," \u2192 ",!!n.prefix&&(0,i.jsx)("span",{className:f["diff-viewer__path-prefix"],children:n.prefix}),(0,i.jsx)("span",{className:f["diff-viewer__path"],children:n.path})]})},k=({diff:s})=>(0,i.jsx)("div",{className:f["diff-viewer"],children:y(s).map((e,r)=>(0,i.jsxs)(h.Fragment,{children:[(0,i.jsx)("div",{className:f["diff-viewer__filename"],children:N(e)},`file-${r}`),(0,i.jsxs)("div",{className:f["diff-viewer__file"],children:[(0,i.jsx)("div",{className:f["diff-viewer__line-numbers"],children:e.hunks.map((n,t)=>{let a=0;return n.lines.map((m,o)=>(0,i.jsx)("div",{children:m[0]==="+"?"\xA0":n.oldStart+a++},`${t}-${o}`))})},"left-numbers"),(0,i.jsx)("div",{className:f["diff-viewer__line-numbers"],children:e.hunks.map((n,t)=>{let a=0;return n.lines.map((m,o)=>(0,i.jsx)("div",{children:m[0]==="-"?"\xA0":n.newStart+a++},`${t}-${o}`))})},"right-numbers"),(0,i.jsx)("div",{className:f["diff-viewer__lines"],children:e.hunks.map((n,t)=>n.lines.map((a,m)=>{const o=a.slice(1).replace(/^\s*$/,"\xA0"),d=`${t}-${m}`;switch(a[0]){case" ":return(0,i.jsx)("div",{children:o},d);case"-":return(0,i.jsx)("del",{children:o},d);case"+":return(0,i.jsx)("ins",{children:o},d);default:return}}))})]},`diff-${r}`)]},r))}),C=k;try{k.displayName="DiffViewer",k.__docgenInfo={description:"",displayName:"DiffViewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#DiffViewer"]={docgenInfo:k.__docgenInfo,name:"DiffViewer",path:"../components/components/diff-viewer/index.tsx#DiffViewer"})}catch{}try{diffviewer.displayName="diffviewer",diffviewer.__docgenInfo={description:"",displayName:"diffviewer",props:{diff:{defaultValue:null,description:"",name:"diff",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/diff-viewer/index.tsx#diffviewer"]={docgenInfo:diffviewer.__docgenInfo,name:"diffviewer",path:"../components/components/diff-viewer/index.tsx#diffviewer"})}catch{}var R=`import React from 'react';
import DiffViewer from '../index.js';

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
`,I={Default:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}}};const T={parameters:{storySource:{source:`import React from 'react';
import DiffViewer from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:30},endLoc:{col:2,line:32},startBody:{col:17,line:30},endBody:{col:2,line:32}}}}},title:"JS Packages/Components/Diff Viewer",component:C},A=`diff --git a/package.json b/package.json
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
+console.log( 'Hello, world!' );`,x=(s=>(0,i.jsx)(C,{...s})).bind({});x.args={diff:A};const M=["Default"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <DiffViewer {...args} />",...x.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/diff-viewer/styles.module.scss":(E,v,c)=>{c.d(v,{A:()=>b});var h=c("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=c.n(h),S=c("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),y=c.n(S),w=y()(j());w.push([E.id,'.ADZzRzNl1m8jLfaEfvnx{font-size:var(--font-body);line-height:1.5}.hz4SyV6HHNtWhCxMPw4U{padding:calc(var(--spacing-base)/2) var(--spacing-base);background-color:var(--jp-gray-10);font-weight:600}.Je9oyKNAyzcTtDYCV5S9{background-color:var(--jp-gray-0);display:flex;font-family:"Courier 10 Pitch",Courier,monospace;flex-direction:row;overflow-x:auto;white-space:pre}.YLKPR7kAMhZebpLgNhGp{padding:0 var(--spacing-base);display:flex;flex-direction:column;text-align:right;background-color:var(--jp-gray-10);color:var(--jp-gray-50)}.DqmSK9iMOEQ1k_ZjmOru{display:flex;flex-direction:column;flex-grow:1;overflow-x:visible}.DqmSK9iMOEQ1k_ZjmOru div,.DqmSK9iMOEQ1k_ZjmOru del,.DqmSK9iMOEQ1k_ZjmOru ins{padding:0 var(--spacing-base);text-decoration:none}.DqmSK9iMOEQ1k_ZjmOru del{background-color:var(--jp-red-0);color:var(--jp-red-60)}.DqmSK9iMOEQ1k_ZjmOru ins{background-color:var(--jp-green-5);color:var(--jp-green-60)}',""]),w.locals={"diff-viewer":"ADZzRzNl1m8jLfaEfvnx","diff-viewer__filename":"hz4SyV6HHNtWhCxMPw4U","diff-viewer__file":"Je9oyKNAyzcTtDYCV5S9","diff-viewer__line-numbers":"YLKPR7kAMhZebpLgNhGp","diff-viewer__lines":"DqmSK9iMOEQ1k_ZjmOru"};const b=w}}]);
