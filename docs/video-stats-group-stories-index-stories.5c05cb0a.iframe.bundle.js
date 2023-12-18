(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8101],{"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx":(i,l,e)=>{var _,d,r;"use strict";e.r(l),e.d(l,{__namedExportsOrder:()=>p,_default:()=>s,default:()=>o});var a=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import VideoStatsGroup from '..';
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
`,t={_default:{startLoc:{col:59,line:9},endLoc:{col:98,line:9},startBody:{col:59,line:9},endBody:{col:98,line:9}}};const o={parameters:{storySource:{source:`import VideoStatsGroup from '..';
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
`,locationsMap:{default:{startLoc:{col:59,line:9},endLoc:{col:98,line:9},startBody:{col:59,line:9},endBody:{col:98,line:9}}}}},title:"Packages/VideoPress/Video Stats Group",component:a.Z},n=m=>(0,c.jsx)(a.Z,{...m});n.displayName="Template";const s=n.bind({});s.args={videos:15,plays:1234,playsToday:140},s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"args => <VideoStatsGroup {...args} />",...(r=(d=s.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const p=["_default"]},"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx":(i,l,e)=>{"use strict";e.d(l,{Z:()=>S});var a=e("../components/components/text/index.tsx"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(u),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss"),p={};p.insert="head",p.singleton=!1;var _=n()(s.Z,p);const d=s.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=c.__,v=({label:y,value:f=0})=>(0,r.jsxs)("div",{className:t()(d.column),children:[(0,r.jsx)(a.ZP,{children:y}),(0,r.jsx)(a.ZP,{variant:"title-medium",className:t()(d.count),children:f})]});v.displayName="Stats";const g=({className:y,videos:f=0,plays:j=0,playsToday:x=0})=>(0,r.jsxs)("div",{className:t()(y,d.wrapper),children:[(0,r.jsx)(v,{label:m("Videos","jetpack-videopress-pkg"),value:f}),(0,r.jsx)(v,{label:m("Plays","jetpack-videopress-pkg"),value:j}),(0,r.jsx)(v,{label:m("Plays today","jetpack-videopress-pkg"),value:x})]});g.displayName="VideoStatsGroup";const S=g;try{videostatsgroup.displayName="videostatsgroup",videostatsgroup.__docgenInfo={description:"Video Stats Group component",displayName:"videostatsgroup",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},videos:{defaultValue:{value:"0"},description:"The number of uploaded videos.",name:"videos",required:!1,type:{name:"number"}},plays:{defaultValue:{value:"0"},description:"The total number of video plays.",name:"plays",required:!1,type:{name:"number"}},playsToday:{defaultValue:{value:"0"},description:"The total number of video plays of the current day.",name:"playsToday",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"]={docgenInfo:videostatsgroup.__docgenInfo,name:"videostatsgroup",path:"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"})}catch(y){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,l)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,u="[native code]";function t(){for(var o=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var p=typeof s;if(p==="string"||p==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var _=t.apply(null,s);_&&o.push(_)}}else if(p==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var d in s)c.call(s,d)&&s[d]&&o.push(d)}}}return o.join(" ")}i.exports?(t.default=t,i.exports=t):(e=[],a=function(){return t}.apply(l,e),a!==void 0&&(i.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss":(i,l,e)=>{"use strict";e.d(l,{Z:()=>n});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(u),o=t()(c());o.push([i.id,".s81OIz1I3m7agSa8Q_c6{--jp-video-stats-group-wrapper-max-width: 318px;display:inline-flex;justify-content:space-between;min-width:var(--jp-video-stats-group-wrapper-max-width);background-color:var(--jp-white);padding:calc(var(--spacing-base)*2);border-radius:calc(var(--jp-border-radius)*2);box-shadow:0px 4px 40px rgba(0,0,0,.08)}.s81OIz1I3m7agSa8Q_c6 .TXJWYY45B5Ii38cQuaLu:not(:last-of-type){padding-right:calc(var(--spacing-base))}.s81OIz1I3m7agSa8Q_c6 .zbn49C2r4ZsDpug2k68_{margin-top:calc(var(--spacing-base)/2)}",""]),o.locals={wrapper:"s81OIz1I3m7agSa8Q_c6",column:"TXJWYY45B5Ii38cQuaLu",count:"zbn49C2r4ZsDpug2k68_"};const n=o}}]);})();
