"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2952,9495],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.74_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(f,m,o)=>{o.d(m,{Z:()=>O,a:()=>_});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a={},c=r.createContext(a);function _(t){const n=r.useContext(c);return r.useMemo(function(){return typeof t=="function"?t(n):{...n,...t}},[n,t])}function O(t){let n;return t.disableParentContext?n=typeof t.components=="function"?t.components(a):t.components||a:n=_(t.components),r.createElement(c.Provider,{value:n},t.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs":(f,m,o)=>{o.d(m,{aD:()=>x});var r=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),a=o("@storybook/preview-api"),c=o("@storybook/global"),_=o("@storybook/core-events/preview-errors"),O="actions",t="storybook/actions",n=`${t}/panel`,y=`${t}/action-event`,l=`${t}/action-clear`,p="$___storybook.isCyclic",u={depth:10,clearOnStoryChange:!0,limit:50},v=(s={})=>{Object.assign(u,s)},g=(s,d)=>{let e=Object.getPrototypeOf(s);return!e||d(e)?e:g(e,d)},R=s=>!!(typeof s=="object"&&s&&g(s,d=>/^Synthetic(?:Base)?Event$/.test(d.constructor.name))&&typeof s.persist=="function"),A=s=>{if(R(s)){let d=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));d.persist();let e=Object.getOwnPropertyDescriptor(d,"view"),i=e==null?void 0:e.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(d,"view",{...e,value:Object.create(i.constructor.prototype)}),d}return s},T=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,r.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function x(s,d={}){let e={...u,...d},i=function(...h){var j,b;if(d.implicit){let C=(j="__STORYBOOK_PREVIEW__"in c.global?c.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:j.storyRenders.find(D=>D.phase==="playing"||D.phase==="rendering");if(C){let D=!((b=window==null?void 0:window.FEATURES)!=null&&b.disallowImplicitActionsInRenderV8),M=new _.ImplicitActionsDuringRendering({phase:C.phase,name:s,deprecated:D});if(D)console.warn(M);else throw M}}let E=a.addons.getChannel(),k=T(),I=5,P=h.map(A),B=h.length>1?P:P[0],V={id:k,count:0,data:{name:s,args:B},options:{...e,maxDepth:I+(e.depth||3),allowFunction:e.allowFunction||!1}};E.emit(y,V)};return i.isAction=!0,i.implicit=d.implicit,i}var L=(...s)=>{let d=u,e=s;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(d={...u,...e.pop()});let i=e[0];(e.length!==1||typeof i=="string")&&(i={},e.forEach(E=>{i[E]=E}));let h={};return Object.keys(i).forEach(E=>{h[E]=x(i[E],d)}),h}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.mdx":(f,m,o)=>{o.r(m),o.d(m,{default:()=>y});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=o("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.74_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_=o("../../../node_modules/.pnpm/@storybook+blocks@8.0.6_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),O=o("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),t=o("../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx");function n(l){const p={h1:"h1",p:"p",...(0,c.a)(),...l.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_.h_,{of:t}),`
`,(0,a.jsx)(p.h1,{id:"videocard",children:"VideoCard"}),`
`,(0,a.jsx)(p.p,{children:`React component that shows a card with details about the given video. It is possible to change it via the edit button.
It is composed of two simpler components: VideoThumbnail and VideoDetails components.`}),`
`,(0,a.jsx)(_.oG,{id:"packages-videopress-video-card--default"})]})}function y(l={}){const{wrapper:p}={...(0,c.a)(),...l.components};return p?(0,a.jsx)(p,{...l,children:(0,a.jsx)(n,{...l})}):n(l)}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(f,m,o)=>{var l,p,u;o.r(m),o.d(m,{__namedExportsOrder:()=>y,_default:()=>n,default:()=>O});var r=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs"),a=o("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),c=o("../../packages/videopress/src/client/admin/mock/index.ts"),_=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const O={title:"Packages/VideoPress/Video Card",component:a.cB,parameters:{layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...c.Pe,"none"]}}},n=(v=>(v.thumbnail==="none"&&(v.thumbnail=null),(0,_.jsx)(a.cB,{...v}))).bind({});n.args={title:"JPD Meetup - Barcelona",thumbnail:(0,c.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,r.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,r.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,r.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,r.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["_default"]}}]);})();
