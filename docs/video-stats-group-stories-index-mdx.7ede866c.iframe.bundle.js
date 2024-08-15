(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9474,8101],{"../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js":(l,o,e)=>{"use strict";e.d(o,{Z:()=>a});function a(){return a=Object.assign?Object.assign.bind():function(s){for(var _=1;_<arguments.length;_++){var r=arguments[_];for(var c in r)({}).hasOwnProperty.call(r,c)&&(s[c]=r[c])}return s},a.apply(null,arguments)}},"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(l,o,e)=>{"use strict";e.d(o,{Z:()=>c,a:()=>r});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s={},_=a.createContext(s);function r(d){const n=a.useContext(_);return a.useMemo(function(){return typeof d=="function"?d(n):{...n,...d}},[n,d])}function c(d){let n;return d.disableParentContext?n=typeof d.components=="function"?d.components(s):d.components||s:n=r(d.components),a.createElement(_.Provider,{value:n},d.children)}},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.mdx":(l,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>p});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_=e("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=e("../../../node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9/node_modules/@storybook/blocks/dist/index.mjs"),c=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),d=e("../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx");function n(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,_.a)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h_,{of:d}),`
`,(0,s.jsx)(t.h1,{id:"videostatsgroup",children:"VideoStatsGroup"}),`
`,(0,s.jsx)(t.p,{children:"Component that shows VideoPress user video stats."}),`
`,(0,s.jsx)(r.Xz,{withSource:"open",children:(0,s.jsx)(r.oG,{id:"packages-videopress-video-stats-group--default"})}),`
`,(0,s.jsx)(t.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(t.h3,{id:"videos",children:"videos"}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:["type: ",(0,s.jsx)(t.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:"The number of uploaded videos."}),`
`,(0,s.jsx)(t.h3,{id:"plays",children:"plays"}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:["type: ",(0,s.jsx)(t.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:"The total number of video plays."}),`
`,(0,s.jsx)(t.h3,{id:"playstoday",children:"playsToday"}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:["type: ",(0,s.jsx)(t.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:"The total number of video plays of the current day."})]})}function p(i={}){const{wrapper:t}={...(0,_.a)(),...i.components};return t?(0,s.jsx)(t,{...i,children:(0,s.jsx)(n,{...i})}):n(i)}},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive":l=>{function o(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive",l.exports=o},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive":l=>{function o(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive",l.exports=o},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx":(l,o,e)=>{var n,p,i;"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>d,_default:()=>c,default:()=>_});var a=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"Packages/VideoPress/Video Stats Group",component:a.Z},c=(t=>(0,s.jsx)(a.Z,{...t})).bind({});c.args={videos:15,plays:1234,playsToday:140};const d=["_default"];c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:"args => <VideoStatsGroup {...args} />",...(i=(p=c.parameters)==null?void 0:p.docs)==null?void 0:i.source}}}},"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx":(l,o,e)=>{"use strict";e.d(o,{Z:()=>y});var a=e("../components/components/text/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss"),n={};n.insert="head",n.singleton=!1;var p=c()(d.Z,n);const i=d.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=s.__,v=({label:u,value:x=0})=>(0,t.jsxs)("div",{className:(0,_.Z)(i.column),children:[(0,t.jsx)(a.ZP,{children:u}),(0,t.jsx)(a.ZP,{variant:"title-medium",className:(0,_.Z)(i.count),children:x})]}),y=({className:u,videos:x=0,plays:j=0,playsToday:g=0})=>(0,t.jsxs)("div",{className:(0,_.Z)(u,i.wrapper),children:[(0,t.jsx)(v,{label:m("Videos","jetpack-videopress-pkg"),value:x}),(0,t.jsx)(v,{label:m("Plays","jetpack-videopress-pkg"),value:j}),(0,t.jsx)(v,{label:m("Plays today","jetpack-videopress-pkg"),value:g})]});try{videostatsgroup.displayName="videostatsgroup",videostatsgroup.__docgenInfo={description:"Video Stats Group component",displayName:"videostatsgroup",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},videos:{defaultValue:{value:"0"},description:"The number of uploaded videos.",name:"videos",required:!1,type:{name:"number"}},plays:{defaultValue:{value:"0"},description:"The total number of video plays.",name:"plays",required:!1,type:{name:"number"}},playsToday:{defaultValue:{value:"0"},description:"The total number of video plays of the current day.",name:"playsToday",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"]={docgenInfo:videostatsgroup.__docgenInfo,name:"videostatsgroup",path:"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"})}catch(u){}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(l,o,e)=>{"use strict";e.d(o,{Z:()=>_});function a(r){var c,d,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var p=r.length;for(c=0;c<p;c++)r[c]&&(d=a(r[c]))&&(n&&(n+=" "),n+=d)}else for(d in r)r[d]&&(n&&(n+=" "),n+=d);return n}function s(){for(var r,c,d=0,n="",p=arguments.length;d<p;d++)(r=arguments[d])&&(c=a(r))&&(n&&(n+=" "),n+=c);return n}const _=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss":(l,o,e)=>{"use strict";e.d(o,{Z:()=>d});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(_),c=r()(s());c.push([l.id,".s81OIz1I3m7agSa8Q_c6{--jp-video-stats-group-wrapper-max-width: 318px;display:inline-flex;justify-content:space-between;min-width:var(--jp-video-stats-group-wrapper-max-width);background-color:var(--jp-white);padding:calc(var(--spacing-base)*2);border-radius:calc(var(--jp-border-radius)*2);box-shadow:0px 4px 40px rgba(0,0,0,.08)}.s81OIz1I3m7agSa8Q_c6 .TXJWYY45B5Ii38cQuaLu:not(:last-of-type){padding-right:calc(var(--spacing-base))}.s81OIz1I3m7agSa8Q_c6 .zbn49C2r4ZsDpug2k68_{margin-top:calc(var(--spacing-base)/2)}",""]),c.locals={wrapper:"s81OIz1I3m7agSa8Q_c6",column:"TXJWYY45B5Ii38cQuaLu",count:"zbn49C2r4ZsDpug2k68_"};const d=c},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":l=>{function o(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",l.exports=o}}]);})();
