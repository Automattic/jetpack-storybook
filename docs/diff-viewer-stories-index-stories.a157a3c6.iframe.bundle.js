"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5619],{"../../plugins/protect/src/js/components/diff-viewer/stories/index.stories.jsx":(C,k,a)=>{var P,M,I;a.r(k),a.d(k,{Default:()=>D,__namedExportsOrder:()=>T,default:()=>V});var w=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=a("../../../node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/parse.js"),N=a("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=a.n(N),j=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/diff-viewer/styles.module.scss"),g={};g.insert="head",g.singleton=!1;var s=n()(j.Z,g);const r=j.Z.locals||{};var e=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=_=>{const p=_.lastIndexOf("/");return p>-1?[_.slice(0,p),_.slice(p)]:["",_]},o=_=>{let{oldFileName:p,newFileName:v}=_;const L=p[0]==="a"&&p[1]==="/"&&v[0]==="b"&&v[1]==="/",[d,l]=L?[p.slice(2),v.slice(2)]:[p,v];if(d===l){const[m,x]=E(d);return(0,e.jsxs)(w.Fragment,{children:[m&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:m}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:x})]})}const b=Math.max(d.length,l.length);for(let m=0,x=0;m<b;m++)if(d[m]==="/"&&l[m]==="/"&&(x=m),d[m]!==l[m])return(0,e.jsxs)(w.Fragment,{children:[x!==0&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:d.slice(0,x)}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:d.slice(x)})," \u2192 ",x!==0&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:l.slice(0,x)}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:l.slice(x)})]});const[y,h]=E(d),[O,B]=E(l);return(0,e.jsxs)(w.Fragment,{children:[y&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:y}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:h})," \u2192 ",O&&(0,e.jsx)("span",{className:r["diff-viewer__path-prefix"],children:O}),(0,e.jsx)("span",{className:r["diff-viewer__path"],children:B})]})};o.displayName="filename";const c=_=>{let{diff:p}=_;return(0,e.jsx)("div",{className:r["diff-viewer"],children:(0,S.G)(p).map((v,L)=>(0,e.jsxs)(w.Fragment,{children:[(0,e.jsx)("div",{className:r["diff-viewer__filename"],children:o(v)},`file-${L}`),(0,e.jsxs)("div",{className:r["diff-viewer__file"],children:[(0,e.jsx)("div",{className:r["diff-viewer__line-numbers"],children:v.hunks.map((d,l)=>{let b=0;return d.lines.map((y,h)=>(0,e.jsx)("div",{children:y[0]==="+"?"\xA0":d.oldStart+b++},`${l}-${h}`))})},"left-numbers"),(0,e.jsx)("div",{className:r["diff-viewer__line-numbers"],children:v.hunks.map((d,l)=>{let b=0;return d.lines.map((y,h)=>(0,e.jsx)("div",{children:y[0]==="-"?"\xA0":d.newStart+b++},`${l}-${h}`))})},"right-numbers"),(0,e.jsx)("div",{className:r["diff-viewer__lines"],children:v.hunks.map((d,l)=>d.lines.map((b,y)=>{const h=b.slice(1).replace(/^\s*$/,"\xA0"),O=`${l}-${y}`;switch(b[0]){case" ":return(0,e.jsx)("div",{children:h},O);case"-":return(0,e.jsx)("del",{children:h},O);case"+":return(0,e.jsx)("ins",{children:h},O)}}))})]},`diff-${L}`)]},L))})};c.displayName="DiffViewer",c.__docgenInfo={description:"",methods:[],displayName:"DiffViewer"};const t=c;var i=`/* eslint-disable react/react-in-jsx-scope */
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
`,f={Default:{startLoc:{col:23,line:19},endLoc:{col:55,line:19},startBody:{col:23,line:19},endBody:{col:55,line:19}}};const V={parameters:{storySource:{source:`
import React from 'react';
import DiffViewer from '../index.jsx';
export default {
  title: 'Plugins/Protect/Diff Viewer',
  component: DiffViewer
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
export const Default = args => <DiffViewer {...args} />;
Default.args = {
  diff
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <DiffViewer {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:55,line:19},startBody:{col:23,line:19},endBody:{col:55,line:19}}}}},title:"Plugins/Protect/Diff Viewer",component:t},u=`index 51455bdb14..bc0622d001 100644
--- a/circle.yml
+++ b/circle.yml
@@ -1,6 +1,6 @@
 machine:
   node:
-    version: 8.9.4
+    version: 8.11.0
 test:
   pre:
     - ? |`,D=_=>(0,e.jsx)(t,{..._});D.displayName="Default",D.args={diff:u},D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:"args => <DiffViewer {...args} />",...(I=(M=D.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const T=["Default"];D.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/diff-viewer/styles.module.scss":(C,k,a)=>{a.d(k,{Z:()=>g});var w=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=a.n(w),N=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=a.n(N),j=n()(S());j.push([C.id,'.miUwiwnDBxwWiTHyu4sC{font-size:var(--font-body);line-height:1.5}.pIatYsMPv_pZokb194YO{padding:calc(var(--spacing-base)/2) var(--spacing-base);background-color:var(--jp-gray-10);font-weight:600}.raJLdXVde4OovH9ySSUx{background-color:var(--jp-gray-0);display:flex;font-family:"Courier 10 Pitch",Courier,monospace;flex-direction:row;overflow-x:scroll;white-space:pre}.cXOKHjaSEnfS4KjeDbEY{padding:0 var(--spacing-base);display:flex;flex-direction:column;text-align:right;background-color:var(--jp-gray-10);color:var(--jp-gray-50)}.DVQVCdbxyD05XaoD4Nnw{display:flex;flex-direction:column;flex-grow:1;overflow-x:visible}.DVQVCdbxyD05XaoD4Nnw div,.DVQVCdbxyD05XaoD4Nnw del,.DVQVCdbxyD05XaoD4Nnw ins{padding:0 var(--spacing-base);text-decoration:none}.DVQVCdbxyD05XaoD4Nnw del{background-color:var(--jp-red-0);color:var(--jp-red-60)}.DVQVCdbxyD05XaoD4Nnw ins{background-color:var(--jp-green-5);color:var(--jp-green-60)}',""]),j.locals={"diff-viewer":"miUwiwnDBxwWiTHyu4sC","diff-viewer__filename":"pIatYsMPv_pZokb194YO","diff-viewer__file":"raJLdXVde4OovH9ySSUx","diff-viewer__line-numbers":"cXOKHjaSEnfS4KjeDbEY","diff-viewer__lines":"DVQVCdbxyD05XaoD4Nnw"};const g=j},"../../../node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/parse.js":(C,k)=>{var a;a={value:!0},k.G=w;function w(S){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=S.split(/\r\n|[\n\v\f\r\x85]/),j=S.match(/\r\n|[\n\v\f\r\x85]/g)||[],g=[],s=0;function r(){var o={};for(g.push(o);s<n.length;){var c=n[s];if(/^(\-\-\-|\+\+\+|@@)\s/.test(c))break;var t=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(c);t&&(o.index=t[1]),s++}for(e(o),e(o),o.hunks=[];s<n.length;){var i=n[s];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(i))break;if(/^@@/.test(i))o.hunks.push(E());else{if(i&&N.strict)throw new Error("Unknown line "+(s+1)+" "+JSON.stringify(i));s++}}}function e(o){var c=/^(---|\+\+\+)\s+(.*)$/.exec(n[s]);if(c){var t=c[1]==="---"?"old":"new",i=c[2].split("	",2),f=i[0].replace(/\\\\/g,"\\");/^".*"$/.test(f)&&(f=f.substr(1,f.length-2)),o[t+"FileName"]=f,o[t+"Header"]=(i[1]||"").trim(),s++}}function E(){for(var o=s,c=n[s++],t=c.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),i={oldStart:+t[1],oldLines:+t[2]||1,newStart:+t[3],newLines:+t[4]||1,lines:[],linedelimiters:[]},f=0,V=0;s<n.length&&!(n[s].indexOf("--- ")===0&&s+2<n.length&&n[s+1].indexOf("+++ ")===0&&n[s+2].indexOf("@@")===0);s++){var u=n[s].length==0&&s!=n.length-1?" ":n[s][0];if(u==="+"||u==="-"||u===" "||u==="\\")i.lines.push(n[s]),i.linedelimiters.push(j[s]||`
`),u==="+"?f++:u==="-"?V++:u===" "&&(f++,V++);else break}if(!f&&i.newLines===1&&(i.newLines=0),!V&&i.oldLines===1&&(i.oldLines=0),N.strict){if(f!==i.newLines)throw new Error("Added line count did not match for hunk at line "+(o+1));if(V!==i.oldLines)throw new Error("Removed line count did not match for hunk at line "+(o+1))}return i}for(;s<n.length;)r();return g}}}]);})();
