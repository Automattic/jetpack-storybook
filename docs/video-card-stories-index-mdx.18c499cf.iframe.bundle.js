(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2952,9495],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.74_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(O,d,e)=>{"use strict";e.d(d,{Z:()=>y,a:()=>_});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const i={},l=r.createContext(i);function _(t){const n=r.useContext(l);return r.useMemo(function(){return typeof t=="function"?t(n):{...n,...t}},[n,t])}function y(t){let n;return t.disableParentContext?n=typeof t.components=="function"?t.components(i):t.components||i:n=_(t.components),r.createElement(l.Provider,{value:n},t.children)}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs":(O,d,e)=>{"use strict";e.d(d,{aD:()=>x});var r=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),i=e("@storybook/preview-api"),l=e("@storybook/global"),_=e("@storybook/core-events/preview-errors"),y="actions",t="storybook/actions",n=`${t}/panel`,f=`${t}/action-event`,m=`${t}/action-clear`,p="$___storybook.isCyclic",u={depth:10,clearOnStoryChange:!0,limit:50},h=(s={})=>{Object.assign(u,s)},g=(s,a)=>{let o=Object.getPrototypeOf(s);return!o||a(o)?o:g(o,a)},R=s=>!!(typeof s=="object"&&s&&g(s,a=>/^Synthetic(?:Base)?Event$/.test(a.constructor.name))&&typeof s.persist=="function"),A=s=>{if(R(s)){let a=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));a.persist();let o=Object.getOwnPropertyDescriptor(a,"view"),c=o==null?void 0:o.value;return typeof c=="object"&&(c==null?void 0:c.constructor.name)==="Window"&&Object.defineProperty(a,"view",{...o,value:Object.create(c.constructor.prototype)}),a}return s},k=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,r.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function x(s,a={}){let o={...u,...a},c=function(...v){var j,b;if(a.implicit){let C=(j="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:j.storyRenders.find(D=>D.phase==="playing"||D.phase==="rendering");if(C){let D=!((b=window==null?void 0:window.FEATURES)!=null&&b.disallowImplicitActionsInRenderV8),M=new _.ImplicitActionsDuringRendering({phase:C.phase,name:s,deprecated:D});if(D)console.warn(M);else throw M}}let E=i.addons.getChannel(),T=k(),I=5,P=v.map(A),B=v.length>1?P:P[0],L={id:T,count:0,data:{name:s,args:B},options:{...o,maxDepth:I+(o.depth||3),allowFunction:o.allowFunction||!1}};E.emit(f,L)};return c.isAction=!0,c.implicit=a.implicit,c}var U=(...s)=>{let a=u,o=s;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(a={...u,...o.pop()});let c=o[0];(o.length!==1||typeof c=="string")&&(c={},o.forEach(E=>{c[E]=E}));let v={};return Object.keys(c).forEach(E=>{v[E]=x(c[E],a)}),v}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.mdx":(O,d,e)=>{"use strict";e.r(d),e.d(d,{default:()=>f});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.74_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_=e("../../../node_modules/.pnpm/@storybook+blocks@8.0.6_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),y=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),t=e("../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx");function n(m){const p={h1:"h1",p:"p",...(0,l.a)(),...m.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.h_,{of:t}),`
`,(0,i.jsx)(p.h1,{id:"videocard",children:"VideoCard"}),`
`,(0,i.jsx)(p.p,{children:`React component that shows a card with details about the given video. It is possible to change it via the edit button.
It is composed of two simpler components: VideoThumbnail and VideoDetails components.`}),`
`,(0,i.jsx)(_.oG,{id:"packages-videopress-video-card--default"})]})}function f(m={}){const{wrapper:p}={...(0,l.a)(),...m.components};return p?(0,i.jsx)(p,{...m,children:(0,i.jsx)(n,{...m})}):n(m)}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(O,d,e)=>{var m,p,u;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>f,_default:()=>n,default:()=>y});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs"),i=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),l=e("../../packages/videopress/src/client/admin/mock/index.ts"),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y={title:"Packages/VideoPress/Video Card",component:i.cB,parameters:{layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...l.Pe,"none"]}}},n=(h=>(h.thumbnail==="none"&&(h.thumbnail=null),(0,_.jsx)(i.cB,{...h}))).bind({});n.args={title:"JPD Meetup - Barcelona",thumbnail:(0,l.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,r.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,r.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,r.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,r.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const f=["_default"]},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":O=>{function d(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}d.keys=()=>[],d.resolve=d,d.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",O.exports=d}}]);})();