"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5619],{"../../plugins/protect/src/js/components/diff-viewer/stories/index.stories.jsx":(C,y,a)=>{var N,P,M;a.r(y),a.d(y,{Default:()=>D,__namedExportsOrder:()=>I,default:()=>O});var x=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=a("../../../node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/parse.js"),S=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=a.n(S),w=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/diff-viewer/styles.module.scss"),j={};j.insert="head",j.singleton=!1;var s=n()(w.Z,j);const r=w.Z.locals||{};var e=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=l=>{const c=l.lastIndexOf("/");return c>-1?[l.slice(0,c),l.slice(c)]:["",l]},o=({oldFileName:l,newFileName:c})=>{const L=l[0]==="a"&&l[1]==="/"&&c[0]==="b"&&c[1]==="/",[d,f]=L?[l.slice(2),c.slice(2)]:[l,c];if(d===f){const[m,h]=E(d);return(0,e.jsxs)(x.Fragment,{children:[m&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:m}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:h})]})}const g=Math.max(d.length,f.length);for(let m=0,h=0;m<g;m++)if(d[m]==="/"&&f[m]==="/"&&(h=m),d[m]!==f[m])return(0,e.jsxs)(x.Fragment,{children:[h!==0&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:d.slice(0,h)}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:d.slice(h)})," \u2192 ",h!==0&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:f.slice(0,h)}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:f.slice(h)})]});const[b,v]=E(d),[V,T]=E(f);return(0,e.jsxs)(x.Fragment,{children:[b&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:b}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:v})," \u2192 ",V&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:V}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:T})]})};o.displayName="filename";const _=({diff:l})=>(0,e.jsx)("div",{className:r["diff-viewer"],children:(0,k.G)(l).map((c,L)=>(0,e.jsxs)(x.Fragment,{children:[(0,e.jsx)("div",{className:r["diff-viewer__filename"],children:o(c)},`file-${L}`),(0,e.jsxs)("div",{className:r["diff-viewer__file"],children:[(0,e.jsx)("div",{className:r["diff-viewer__line-numbers"],children:c.hunks.map((d,f)=>{let g=0;return d.lines.map((b,v)=>(0,e.jsx)("div",{children:b[0]==="+"?"\xA0":d.oldStart+g++},`${f}-${v}`))})},"left-numbers"),(0,e.jsx)("div",{className:r["diff-viewer__line-numbers"],children:c.hunks.map((d,f)=>{let g=0;return d.lines.map((b,v)=>(0,e.jsx)("div",{children:b[0]==="-"?"\xA0":d.newStart+g++},`${f}-${v}`))})},"right-numbers"),(0,e.jsx)("div",{className:r["diff-viewer__lines"],children:c.hunks.map((d,f)=>d.lines.map((g,b)=>{const v=g.slice(1).replace(/^\s*$/,"\xA0"),V=`${f}-${b}`;switch(g[0]){case" ":return(0,e.jsx)("div",{children:v},V);case"-":return(0,e.jsx)("del",{children:v},V);case"+":return(0,e.jsx)("ins",{children:v},V)}}))})]},`diff-${L}`)]},L))});_.displayName="DiffViewer";const t=_;_.__docgenInfo={description:"",methods:[],displayName:"DiffViewer"};var i=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import DiffViewer from '../index.jsx';

export default {
	title: 'Plugins/Protect/Diff Viewer',
	component: DiffViewer,
};

const diff = \`index 51455bdb14..bc0622d001 100644
--- a/circle.yml
+++ b/circle.yml
@@ -1,6 +1,6 @@
 machine:
   node:
-    version: 8.9.4
+    version: 8.11.0
 test:
   pre:
     - ? |\`;

export const Default = args => <DiffViewer { ...args } />;
Default.args = {
	diff,
};
`,p={Default:{startLoc:{col:23,line:22},endLoc:{col:57,line:22},startBody:{col:23,line:22},endBody:{col:57,line:22}}};const O={parameters:{storySource:{source:`
import React from 'react';
import DiffViewer from '../index.jsx';

export default {
	title: 'Plugins/Protect/Diff Viewer',
	component: DiffViewer,
};

const diff = \`index 51455bdb14..bc0622d001 100644
--- a/circle.yml
+++ b/circle.yml
@@ -1,6 +1,6 @@
 machine:
   node:
-    version: 8.9.4
+    version: 8.11.0
 test:
   pre:
     - ? |\`;

export const Default = args => <DiffViewer { ...args } />;
Default.args = {
	diff,
};
`,locationsMap:{default:{startLoc:{col:23,line:22},endLoc:{col:57,line:22},startBody:{col:23,line:22},endBody:{col:57,line:22}}}}},title:"Plugins/Protect/Diff Viewer",component:t},u=`index 51455bdb14..bc0622d001 100644
--- a/circle.yml
+++ b/circle.yml
@@ -1,6 +1,6 @@
 machine:
   node:
-    version: 8.9.4
+    version: 8.11.0
 test:
   pre:
     - ? |`,D=l=>(0,e.jsx)(t,{...l});D.displayName="Default",D.args={diff:u},D.parameters={...D.parameters,docs:{...(N=D.parameters)==null?void 0:N.docs,source:{originalSource:"args => <DiffViewer {...args} />",...(M=(P=D.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const I=["Default"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/diff-viewer/styles.module.scss":(C,y,a)=>{a.d(y,{Z:()=>j});var x=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=a.n(x),S=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=a.n(S),w=n()(k());w.push([C.id,'.miUwiwnDBxwWiTHyu4sC{font-size:var(--font-body);line-height:1.5}.pIatYsMPv_pZokb194YO{padding:calc(var(--spacing-base)/2) var(--spacing-base);background-color:var(--jp-gray-10);font-weight:600}.raJLdXVde4OovH9ySSUx{background-color:var(--jp-gray-0);display:flex;font-family:"Courier 10 Pitch",Courier,monospace;flex-direction:row;overflow-x:scroll;white-space:pre}.cXOKHjaSEnfS4KjeDbEY{padding:0 var(--spacing-base);display:flex;flex-direction:column;text-align:right;background-color:var(--jp-gray-10);color:var(--jp-gray-50)}.DVQVCdbxyD05XaoD4Nnw{display:flex;flex-direction:column;flex-grow:1;overflow-x:visible}.DVQVCdbxyD05XaoD4Nnw div,.DVQVCdbxyD05XaoD4Nnw del,.DVQVCdbxyD05XaoD4Nnw ins{padding:0 var(--spacing-base);text-decoration:none}.DVQVCdbxyD05XaoD4Nnw del{background-color:var(--jp-red-0);color:var(--jp-red-60)}.DVQVCdbxyD05XaoD4Nnw ins{background-color:var(--jp-green-5);color:var(--jp-green-60)}',""]),w.locals={"diff-viewer":"miUwiwnDBxwWiTHyu4sC","diff-viewer__filename":"pIatYsMPv_pZokb194YO","diff-viewer__file":"raJLdXVde4OovH9ySSUx","diff-viewer__line-numbers":"cXOKHjaSEnfS4KjeDbEY","diff-viewer__lines":"DVQVCdbxyD05XaoD4Nnw"};const j=w},"../../../node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/parse.js":(C,y)=>{var a;a={value:!0},y.G=x;function x(k){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=k.split(/\r\n|[\n\v\f\r\x85]/),w=k.match(/\r\n|[\n\v\f\r\x85]/g)||[],j=[],s=0;function r(){var o={};for(j.push(o);s<n.length;){var _=n[s];if(/^(\-\-\-|\+\+\+|@@)\s/.test(_))break;var t=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(_);t&&(o.index=t[1]),s++}for(e(o),e(o),o.hunks=[];s<n.length;){var i=n[s];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(i))break;if(/^@@/.test(i))o.hunks.push(E());else{if(i&&S.strict)throw new Error("Unknown line "+(s+1)+" "+JSON.stringify(i));s++}}}function e(o){var _=/^(---|\+\+\+)\s+(.*)$/.exec(n[s]);if(_){var t=_[1]==="---"?"old":"new",i=_[2].split("	",2),p=i[0].replace(/\\\\/g,"\\");/^".*"$/.test(p)&&(p=p.substr(1,p.length-2)),o[t+"FileName"]=p,o[t+"Header"]=(i[1]||"").trim(),s++}}function E(){for(var o=s,_=n[s++],t=_.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),i={oldStart:+t[1],oldLines:+t[2]||1,newStart:+t[3],newLines:+t[4]||1,lines:[],linedelimiters:[]},p=0,O=0;s<n.length&&!(n[s].indexOf("--- ")===0&&s+2<n.length&&n[s+1].indexOf("+++ ")===0&&n[s+2].indexOf("@@")===0);s++){var u=n[s].length==0&&s!=n.length-1?" ":n[s][0];if(u==="+"||u==="-"||u===" "||u==="\\")i.lines.push(n[s]),i.linedelimiters.push(w[s]||`
`),u==="+"?p++:u==="-"?O++:u===" "&&(p++,O++);else break}if(!p&&i.newLines===1&&(i.newLines=0),!O&&i.oldLines===1&&(i.oldLines=0),S.strict){if(p!==i.newLines)throw new Error("Added line count did not match for hunk at line "+(o+1));if(O!==i.oldLines)throw new Error("Removed line count did not match for hunk at line "+(o+1))}return i}for(;s<n.length;)r();return j}}}]);})();
