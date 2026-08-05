import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{v as n,y as r}from"./iframe-DqYqQ01p.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`JS Packages/Components/Diff Viewer`,component:n},o=`diff --git a/package.json b/package.json
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
+console.log( 'Hello, world!' );`,s=e=>(0,i.jsx)(n,{...e}),c=s.bind({}),c.args={diff:o},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <DiffViewer {...args} />`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,a as default};