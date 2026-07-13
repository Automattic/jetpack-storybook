import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{i as n,n as r,t as i}from"./video-thumbnail-DV9ZHvfY.js";var a,o=e((()=>{a=``+new URL(`poster-01-CKWdtQ-C.png`,import.meta.url).href})),s,c=e((()=>{s=``+new URL(`poster-02-BlZx7Hl3.png`,import.meta.url).href})),l,u=e((()=>{l=``+new URL(`poster-03-DfKa0ehg.png`,import.meta.url).href})),d,f=e((()=>{d=``+new URL(`poster-04-DZ-ypo_P.png`,import.meta.url).href})),p,m=e((()=>{p=``+new URL(`poster-05-D1HSJUHm.png`,import.meta.url).href})),h,g=e((()=>{h=``+new URL(`poster-06-Da_QQi6S.png`,import.meta.url).href})),_,v=e((()=>{_=``+new URL(`poster-square-01-TQrhjuVD.jpg`,import.meta.url).href})),y,b=e((()=>{y=``+new URL(`poster-square-02-B97919OW.jpg`,import.meta.url).href})),x,S=e((()=>{x=``+new URL(`poster-square-03-CVPTD-Nj.jpg`,import.meta.url).href})),C,w=e((()=>{C=``+new URL(`poster-square-04-C4zU3NcF.jpg`,import.meta.url).href})),T,E=e((()=>{T=``+new URL(`poster-square-05-MKgSB75W.jpg`,import.meta.url).href})),D,O=e((()=>{D=``+new URL(`poster-square-06-u6NriTVY.jpg`,import.meta.url).href}));function k(){let e=A.length-1;return A[Math.floor(Math.random()*(e+1))]}var A,j=e((()=>{o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A=[a,s,l,d,p,h,_,y,x,C,T,D]})),M,N,P=e((()=>{M=`_decorator_11hum_1`,N={decorator:M}})),F,I,L,R,z,B,V,H,U;e((()=>{n(),j(),P(),F=t(),{action:I}=__STORYBOOK_MODULE_ACTIONS__,L={title:`Packages/VideoPress/Video Thumbnail`,component:i,parameters:{layout:`centered`},argTypes:{thumbnail:{control:{type:`select`},options:[...A,`none`]}},decorators:[e=>(0,F.jsx)(`div`,{className:N.decorator,children:(0,F.jsx)(e,{})})]},R=({thumbnail:e,...t})=>(e===`none`&&(e=!1),(0,F.jsx)(i,{...t,thumbnail:e})),z=R.bind({}),z.args={thumbnail:k(),onUseDefaultThumbnail:I(`onUseDefaultThumbnail`),onSelectFromVideo:I(`onSelectFromVideo`),onUploadImage:I(`onUploadImage`),editable:!0,loading:!1,uploading:!1,processing:!1,uploadProgress:.5},B=R.bind({}),B.args={...z.args,thumbnail:`none`},V=r,H=V.bind({}),H.args={onUseDefaultThumbnail:I(`onUseDefaultThumbnail`),onSelectFromVideo:I(`onSelectFromVideo`),onUploadImage:I(`onUploadImage`)},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`VideoThumbnailDropdown`,...H.parameters?.docs?.source}}},U=[`Default`,`Placeholder`,`VideoDropdown`]}))();export{z as Default,B as Placeholder,H as VideoDropdown,U as __namedExportsOrder,L as default};