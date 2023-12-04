(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9474,8101],{"../../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js":(u,l,e)=>{"use strict";e.d(l,{Z:()=>a});function a(){return a=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var d=arguments[i];for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(s[n]=d[n])}return s},a.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(u,l,e)=>{"use strict";var a;e.d(l,{L:()=>n,j:()=>c});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=function(_){return _()},d=(a||(a=e.t(s,2)))["useInsertionEffect"]?(a||(a=e.t(s,2)))["useInsertionEffect"]:!1,n=d||i,c=d||s.useLayoutEffect},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.mdx":(u,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>p});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),d=e.n(i),n=e("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),c=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),t=e("../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx");function _(r){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,i.useMDXComponents)(),r.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h_,{of:t}),`
`,(0,s.jsx)(o.h1,{id:"videostatsgroup",children:"VideoStatsGroup"}),`
`,(0,s.jsx)(o.p,{children:"Component that shows VideoPress user video stats."}),`
`,(0,s.jsx)(n.Xz,{withSource:"open",children:(0,s.jsx)(n.oG,{id:"packages-videopress-video-stats-group--default"})}),`
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
`,(0,s.jsx)(o.p,{children:"The total number of video plays of the current day."})]})}function m(r={}){const{wrapper:o}=Object.assign({},(0,i.useMDXComponents)(),r.components);return o?(0,s.jsx)(o,Object.assign({},r,{children:(0,s.jsx)(_,r)})):_(r)}const p=m},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx":(u,l,e)=>{var m,p,r;"use strict";e.r(l),e.d(l,{__namedExportsOrder:()=>_,_default:()=>t,default:()=>n});var a=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`import VideoStatsGroup from '..';
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
`,d={_default:{startLoc:{col:57,line:7},endLoc:{col:94,line:7},startBody:{col:57,line:7},endBody:{col:94,line:7}}};const n={parameters:{storySource:{source:`import VideoStatsGroup from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Video Stats Group',
  component: VideoStatsGroup
} as ComponentMeta<typeof VideoStatsGroup>);
const Template: ComponentStory<typeof VideoStatsGroup> = args => <VideoStatsGroup {...args} />;
export const _default = Template.bind({});
_default.args = {
  videos: 15,
  plays: 1234,
  playsToday: 140
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <VideoStatsGroup {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:57,line:7},endLoc:{col:94,line:7},startBody:{col:57,line:7},endBody:{col:94,line:7}}}}},title:"Packages/VideoPress/Video Stats Group",component:a.Z},c=o=>(0,s.jsx)(a.Z,{...o});c.displayName="Template";const t=c.bind({});t.args={videos:15,plays:1234,playsToday:140},t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"args => <VideoStatsGroup {...args} />",...(r=(p=t.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const _=["_default"]},"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx":(u,l,e)=>{"use strict";e.d(l,{Z:()=>h});var a=e("../components/components/text/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(i),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(n),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss"),_={};_.insert="head",_.singleton=!1;var m=c()(t.Z,_);const p=t.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const o=s.__,v=({label:f,value:y=0})=>(0,r.jsxs)("div",{className:d()(p.column),children:[(0,r.jsx)(a.ZP,{children:f}),(0,r.jsx)(a.ZP,{variant:"title-medium",className:d()(p.count),children:y})]});v.displayName="Stats";const j=({className:f,videos:y=0,plays:x=0,playsToday:g=0})=>(0,r.jsxs)("div",{className:d()(f,p.wrapper),children:[(0,r.jsx)(v,{label:o("Videos","jetpack-videopress-pkg"),value:y}),(0,r.jsx)(v,{label:o("Plays","jetpack-videopress-pkg"),value:x}),(0,r.jsx)(v,{label:o("Plays today","jetpack-videopress-pkg"),value:g})]});j.displayName="VideoStatsGroup";const h=j;try{videostatsgroup.displayName="videostatsgroup",videostatsgroup.__docgenInfo={description:"Video Stats Group component",displayName:"videostatsgroup",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},videos:{defaultValue:{value:"0"},description:"The number of uploaded videos.",name:"videos",required:!1,type:{name:"number"}},plays:{defaultValue:{value:"0"},description:"The total number of video plays.",name:"plays",required:!1,type:{name:"number"}},playsToday:{defaultValue:{value:"0"},description:"The total number of video plays of the current day.",name:"playsToday",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"]={docgenInfo:videostatsgroup.__docgenInfo,name:"videostatsgroup",path:"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"})}catch(f){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(u,l)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var s={}.hasOwnProperty,i="[native code]";function d(){for(var n=[],c=0;c<arguments.length;c++){var t=arguments[c];if(t){var _=typeof t;if(_==="string"||_==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var m=d.apply(null,t);m&&n.push(m)}}else if(_==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var p in t)s.call(t,p)&&t[p]&&n.push(p)}}}return n.join(" ")}u.exports?(d.default=d,u.exports=d):(e=[],a=function(){return d}.apply(l,e),a!==void 0&&(u.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss":(u,l,e)=>{"use strict";e.d(l,{Z:()=>c});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(i),n=d()(s());n.push([u.id,".s81OIz1I3m7agSa8Q_c6{--jp-video-stats-group-wrapper-max-width: 318px;display:inline-flex;justify-content:space-between;min-width:var(--jp-video-stats-group-wrapper-max-width);background-color:var(--jp-white);padding:calc(var(--spacing-base)*2);border-radius:calc(var(--jp-border-radius)*2);box-shadow:0px 4px 40px rgba(0,0,0,.08)}.s81OIz1I3m7agSa8Q_c6 .TXJWYY45B5Ii38cQuaLu:not(:last-of-type){padding-right:calc(var(--spacing-base))}.s81OIz1I3m7agSa8Q_c6 .zbn49C2r4ZsDpug2k68_{margin-top:calc(var(--spacing-base)/2)}",""]),n.locals={wrapper:"s81OIz1I3m7agSa8Q_c6",column:"TXJWYY45B5Ii38cQuaLu",count:"zbn49C2r4ZsDpug2k68_"};const c=n}}]);})();
