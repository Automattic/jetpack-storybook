"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7005],{"../../packages/videopress/src/client/admin/components/video-row/stories/index.stories.tsx":(j,i,e)=>{var p,l,m;e.r(i),e.d(i,{__namedExportsOrder:()=>u,_default:()=>s,default:()=>c});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../packages/videopress/src/client/admin/components/video-row/index.tsx"),n=e("../../packages/videopress/src/client/admin/mock/index.ts"),d=e("../../packages/videopress/src/client/admin/components/video-row/style.module.scss"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c={title:"Packages/VideoPress/Video Row",component:a.$t,parameters:{layout:"centered"},decorators:[t=>(0,o.jsx)("div",{className:d.Z["storybook-wrapper"],children:(0,o.jsx)(t,{})})],argTypes:{id:{table:{disable:!0}},onSelect:{table:{disable:!0}},onVideoDetailsClick:{table:{disable:!0}},className:{table:{disable:!0}},checked:{table:{disable:!0}},thumbnail:{control:{type:"select"},options:[...n.Pe,"none"]}}},s=(t=>{t.thumbnail==="none"&&(t.thumbnail=null);const[v,g]=(0,r.useState)(!1),f=h=>g(h);return(0,o.jsx)(a.$t,{...t,checked:v,onSelect:f})}).bind({});s.args={id:1,thumbnail:(0,n.u8)(),actionButtonLabel:void 0,showThumbnail:!0,title:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,showActionButton:!0,showQuickActions:!0,loading:!1},s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  const [checked, setChecked] = useState(false);
  const onSelect = current => setChecked(current);
  return <VideoRow {...args} checked={checked} onSelect={onSelect} />;
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const u=["_default"]},"../../packages/videopress/src/client/admin/mock/index.ts":(j,i,e)=>{e.d(i,{Pe:()=>t,u8:()=>v,Ls:()=>g});const r=e.p+"static/media/poster-01.e425b62f.png",a=e.p+"static/media/poster-02.4d95eeca.png",n=e.p+"static/media/poster-03.67dd0ba6.png",d=e.p+"static/media/poster-04.00d054fc.png",o=e.p+"static/media/poster-05.65d90662.png",c=e.p+"static/media/poster-06.f1998769.png",T=e.p+"static/media/poster-square-01.e57fbdc5.jpg",s=e.p+"static/media/poster-square-02.5838ae36.jpg",u=e.p+"static/media/poster-square-03.4b398263.jpg",p=e.p+"static/media/poster-square-04.27e08295.jpg",l=e.p+"static/media/poster-square-05.acebfa62.jpg",m=e.p+"static/media/poster-square-06.941b0f4d.jpg",t=[r,a,n,d,o,c,T,s,u,p,l,m];function v(){const h=t.length-1,O=Math.floor(Math.random()*(h+1));return t[O]}const g=[{id:1,posterImage:r,videoTitle:"JPD Meetup - Barcelona",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:2,posterImage:a,videoTitle:"Dope Office Setup",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:3,posterImage:n,videoTitle:"Geneva Wheel",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:4,posterImage:d,videoTitle:"linear-x-02.mov",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:5,posterImage:o,videoTitle:"Random Objects",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:6,posterImage:c,videoTitle:"office-tour-experiment.mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"}],f=[{id:1,videoTitle:"time-clock-v2-05.mp4",uploadDate:"2022-08-15T21:16:59+0000"},{id:2,videoTitle:"Barcelona Tour",uploadDate:"2022-08-15T21:16:59+0000"},{id:3,videoTitle:"Mountain Dew Creative",uploadDate:"2022-08-15T21:16:59+0000"},{id:4,videoTitle:"2021 Reel",uploadDate:"2022-08-15T21:16:59+0000"}]}}]);})();
