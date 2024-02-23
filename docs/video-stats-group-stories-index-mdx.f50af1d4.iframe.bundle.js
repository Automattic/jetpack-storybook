(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9474,8101],{"../../../node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/esm/extends.js":(p,d,e)=>{"use strict";e.d(d,{Z:()=>n});function n(){return n=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=r[a])}return s},n.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(p,d,e)=>{"use strict";var n;e.d(d,{L:()=>a,j:()=>c});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=function(_){return _()},r=(n||(n=e.t(s,2)))["useInsertionEffect"]?(n||(n=e.t(s,2)))["useInsertionEffect"]:!1,a=r||i,c=r||s.useLayoutEffect},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx":(p,d,e)=>{var u,m,l;"use strict";e.r(d),e.d(d,{__namedExportsOrder:()=>_,_default:()=>t,default:()=>a});var n=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`import VideoStatsGroup from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Stats Group',
	component: VideoStatsGroup,
} as ComponentMeta< typeof VideoStatsGroup >;

const Template: ComponentStory< typeof VideoStatsGroup > = args => <VideoStatsGroup { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	videos: 15,
	plays: 1234,
	playsToday: 140,
};
`,r={_default:{startLoc:{col:59,line:9},endLoc:{col:98,line:9},startBody:{col:59,line:9},endBody:{col:98,line:9}}};const a={parameters:{storySource:{source:`import VideoStatsGroup from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Stats Group',
	component: VideoStatsGroup,
} as ComponentMeta< typeof VideoStatsGroup >;

const Template: ComponentStory< typeof VideoStatsGroup > = args => <VideoStatsGroup { ...args } />;

export const _default = Template.bind( {} );
_default.args = {
	videos: 15,
	plays: 1234,
	playsToday: 140,
};
`,locationsMap:{default:{startLoc:{col:59,line:9},endLoc:{col:98,line:9},startBody:{col:59,line:9},endBody:{col:98,line:9}}}}},title:"Packages/VideoPress/Video Stats Group",component:n.Z},c=o=>(0,s.jsx)(n.Z,{...o});c.displayName="Template";const t=c.bind({});t.args={videos:15,plays:1234,playsToday:140},t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"args => <VideoStatsGroup {...args} />",...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const _=["_default"]},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.mdx":(p,d,e)=>{"use strict";e.r(d),e.d(d,{default:()=>m});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),r=e.n(i),a=e("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),c=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),t=e("../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx");function _(l){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,i.useMDXComponents)(),l.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h_,{of:t}),`
`,(0,s.jsx)(o.h1,{id:"videostatsgroup",children:"VideoStatsGroup"}),`
`,(0,s.jsx)(o.p,{children:"Component that shows VideoPress user video stats."}),`
`,(0,s.jsx)(a.Xz,{withSource:"open",children:(0,s.jsx)(a.oG,{id:"packages-videopress-video-stats-group--default"})}),`
`,(0,s.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(o.h3,{id:"videos",children:"videos"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The number of uploaded videos."}),`
`,(0,s.jsx)(o.h3,{id:"plays",children:"plays"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The total number of video plays."}),`
`,(0,s.jsx)(o.h3,{id:"playstoday",children:"playsToday"}),`
`,(0,s.jsxs)(o.ul,{children:[`
`,(0,s.jsxs)(o.li,{children:["type: ",(0,s.jsx)(o.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(o.p,{children:"The total number of video plays of the current day."})]})}function u(l={}){const{wrapper:o}=Object.assign({},(0,i.useMDXComponents)(),l.components);return o?(0,s.jsx)(o,Object.assign({},l,{children:(0,s.jsx)(_,l)})):_(l)}const m=u},"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx":(p,d,e)=>{"use strict";e.d(d,{Z:()=>h});var n=e("../components/components/text/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(i),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(a),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss"),_={};_.insert="head",_.singleton=!1;var u=c()(t.Z,_);const m=t.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=s.__,v=({label:f,value:y=0})=>(0,l.jsxs)("div",{className:r()(m.column),children:[(0,l.jsx)(n.ZP,{children:f}),(0,l.jsx)(n.ZP,{variant:"title-medium",className:r()(m.count),children:y})]});v.displayName="Stats";const j=({className:f,videos:y=0,plays:x=0,playsToday:g=0})=>(0,l.jsxs)("div",{className:r()(f,m.wrapper),children:[(0,l.jsx)(v,{label:o("Videos","jetpack-videopress-pkg"),value:y}),(0,l.jsx)(v,{label:o("Plays","jetpack-videopress-pkg"),value:x}),(0,l.jsx)(v,{label:o("Plays today","jetpack-videopress-pkg"),value:g})]});j.displayName="VideoStatsGroup";const h=j;try{videostatsgroup.displayName="videostatsgroup",videostatsgroup.__docgenInfo={description:"Video Stats Group component",displayName:"videostatsgroup",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},videos:{defaultValue:{value:"0"},description:"The number of uploaded videos.",name:"videos",required:!1,type:{name:"number"}},plays:{defaultValue:{value:"0"},description:"The total number of video plays.",name:"plays",required:!1,type:{name:"number"}},playsToday:{defaultValue:{value:"0"},description:"The total number of video plays of the current day.",name:"playsToday",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"]={docgenInfo:videostatsgroup.__docgenInfo,name:"videostatsgroup",path:"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"})}catch(f){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(p,d)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var s={}.hasOwnProperty,i="[native code]";function r(){for(var a=[],c=0;c<arguments.length;c++){var t=arguments[c];if(t){var _=typeof t;if(_==="string"||_==="number")a.push(t);else if(Array.isArray(t)){if(t.length){var u=r.apply(null,t);u&&a.push(u)}}else if(_==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){a.push(t.toString());continue}for(var m in t)s.call(t,m)&&t[m]&&a.push(m)}}}return a.join(" ")}p.exports?(r.default=r,p.exports=r):(e=[],n=function(){return r}.apply(d,e),n!==void 0&&(p.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss":(p,d,e)=>{"use strict";e.d(d,{Z:()=>c});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(n),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),a=r()(s());a.push([p.id,".s81OIz1I3m7agSa8Q_c6{--jp-video-stats-group-wrapper-max-width: 318px;display:inline-flex;justify-content:space-between;min-width:var(--jp-video-stats-group-wrapper-max-width);background-color:var(--jp-white);padding:calc(var(--spacing-base)*2);border-radius:calc(var(--jp-border-radius)*2);box-shadow:0px 4px 40px rgba(0,0,0,.08)}.s81OIz1I3m7agSa8Q_c6 .TXJWYY45B5Ii38cQuaLu:not(:last-of-type){padding-right:calc(var(--spacing-base))}.s81OIz1I3m7agSa8Q_c6 .zbn49C2r4ZsDpug2k68_{margin-top:calc(var(--spacing-base)/2)}",""]),a.locals={wrapper:"s81OIz1I3m7agSa8Q_c6",column:"TXJWYY45B5Ii38cQuaLu",count:"zbn49C2r4ZsDpug2k68_"};const c=a},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":p=>{function d(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}d.keys=()=>[],d.resolve=d,d.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",p.exports=d}}]);})();
