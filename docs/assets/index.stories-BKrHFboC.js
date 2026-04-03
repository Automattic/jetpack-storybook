import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DgUv34OZ.js";import{m as n,p as r}from"./iframe-DsF4nMMD.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`JS Packages/Components/Diff Viewer`,component:r},o=`diff --git a/package.json b/package.json
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
+console.log( 'Hello, world!' );`,s=e=>(0,i.jsx)(r,{...e}),c=s.bind({}),c.args={diff:o},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <DiffViewer {...args} />`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,a as default};