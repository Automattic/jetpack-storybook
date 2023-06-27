(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9474,8101,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(m,_,e)=>{"use strict";e.d(_,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(s){for(var p=1;p<arguments.length;p++){var r=arguments[p];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=r[a])}return s},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(m,_,e)=>{"use strict";var t;e.d(_,{L:()=>a,j:()=>u});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(l){return l()},r=(t||(t=e.t(s,2)))["useInsertionEffect"]?(t||(t=e.t(s,2)))["useInsertionEffect"]:!1,a=r||p,u=r||s.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(m,_,e)=>{"use strict";e.r(_),e.d(_,{MDXContext:()=>s,MDXProvider:()=>u,useMDXComponents:()=>r,withMDXComponents:()=>p});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=t.createContext({});function p(o){return l;function l(i){const d=r(i.components);return t.createElement(o,{...i,allComponents:d})}}function r(o){const l=t.useContext(s);return t.useMemo(()=>typeof o=="function"?o(l):{...l,...o},[l,o])}const a={};function u({components:o,children:l,disableParentContext:i}){let d;return i?d=typeof o=="function"?o({}):o||a:d=r(o),t.createElement(s.Provider,{value:d},l)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(m,_,e)=>{var t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,a=(i,d,c,n)=>{if(d&&typeof d=="object"||typeof d=="function")for(let v of p(d))!r.call(i,v)&&v!==c&&t(i,v,{get:()=>d[v],enumerable:!(n=s(d,v))||n.enumerable});return i},u=(i,d,c)=>(a(i,d,"default"),c&&a(c,d,"default")),o=i=>a(t({},"__esModule",{value:!0}),i),l={};m.exports=o(l),u(l,e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),m.exports)},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.mdx":(m,_,e)=>{"use strict";e.r(_),e.d(_,{default:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),r=e.n(p),a=e("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),u=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),o=e("../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx");function l(c){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,p.useMDXComponents)(),c.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h_,{of:o}),`
`,(0,s.jsx)(n.h1,{id:"videostatsgroup",children:"VideoStatsGroup"}),`
`,(0,s.jsx)(n.p,{children:"Component that shows VideoPress user video stats."}),`
`,(0,s.jsx)(a.Xz,{withSource:"open",children:(0,s.jsx)(a.oG,{id:"packages-videopress-video-stats-group--default"})}),`
`,(0,s.jsx)(n.h2,{id:"api",children:"API"}),`
`,(0,s.jsx)(n.h3,{id:"videos",children:"videos"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:"The number of uploaded videos."}),`
`,(0,s.jsx)(n.h3,{id:"plays",children:"plays"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:"The total number of video plays."}),`
`,(0,s.jsx)(n.h3,{id:"playstoday",children:"playsToday"}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:["type: ",(0,s.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:"The total number of video plays of the current day."})]})}function i(c={}){const{wrapper:n}=Object.assign({},(0,p.useMDXComponents)(),c.components);return n?(0,s.jsx)(n,Object.assign({},c,{children:(0,s.jsx)(l,c)})):l(c)}const d=i},"../../packages/videopress/src/client/admin/components/video-stats-group/stories/index.stories.tsx":(m,_,e)=>{var i,d,c;"use strict";e.r(_),e.d(_,{__namedExportsOrder:()=>l,_default:()=>o,default:()=>a});var t=e("../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import VideoStatsGroup from '..';
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
`,r={_default:{startLoc:{col:57,line:7},endLoc:{col:94,line:7},startBody:{col:57,line:7},endBody:{col:94,line:7}}};const a={parameters:{storySource:{source:`import VideoStatsGroup from '..';
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
};`,locationsMap:{default:{startLoc:{col:57,line:7},endLoc:{col:94,line:7},startBody:{col:57,line:7},endBody:{col:94,line:7}}}}},title:"Packages/VideoPress/Video Stats Group",component:t.Z},u=n=>(0,s.jsx)(t.Z,{...n});u.displayName="Template";const o=u.bind({});o.args={videos:15,plays:1234,playsToday:140},o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <VideoStatsGroup {...args} />",...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const l=["_default"]},"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx":(m,_,e)=>{"use strict";e.d(_,{Z:()=>h});var t=e("../components/components/text/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(p),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss"),l={};l.insert="head",l.singleton=!1;var i=u()(o.Z,l);const d=o.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=s.__,v=f=>{let{label:y,value:j=0}=f;return(0,c.jsxs)("div",{className:r()(d.column),children:[(0,c.jsx)(t.ZP,{children:y}),(0,c.jsx)(t.ZP,{variant:"title-medium",className:r()(d.count),children:j})]})};v.displayName="Stats";const x=f=>{let{className:y,videos:j=0,plays:g=0,playsToday:E=0}=f;return(0,c.jsxs)("div",{className:r()(y,d.wrapper),children:[(0,c.jsx)(v,{label:n("Videos","jetpack-videopress-pkg"),value:j}),(0,c.jsx)(v,{label:n("Plays","jetpack-videopress-pkg"),value:g}),(0,c.jsx)(v,{label:n("Plays today","jetpack-videopress-pkg"),value:E})]})};x.displayName="VideoStatsGroup";const h=x;try{videostatsgroup.displayName="videostatsgroup",videostatsgroup.__docgenInfo={description:"Video Stats Group component",displayName:"videostatsgroup",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},videos:{defaultValue:{value:"0"},description:"The number of uploaded videos.",name:"videos",required:!1,type:{name:"number"}},plays:{defaultValue:{value:"0"},description:"The total number of video plays.",name:"plays",required:!1,type:{name:"number"}},playsToday:{defaultValue:{value:"0"},description:"The total number of video plays of the current day.",name:"playsToday",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"]={docgenInfo:videostatsgroup.__docgenInfo,name:"videostatsgroup",path:"../../packages/videopress/src/client/admin/components/video-stats-group/index.tsx#videostatsgroup"})}catch(f){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,_)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var s={}.hasOwnProperty,p="[native code]";function r(){for(var a=[],u=0;u<arguments.length;u++){var o=arguments[u];if(o){var l=typeof o;if(l==="string"||l==="number")a.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&a.push(i)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){a.push(o.toString());continue}for(var d in o)s.call(o,d)&&o[d]&&a.push(d)}}}return a.join(" ")}m.exports?(r.default=r,m.exports=r):(e=[],t=function(){return r}.apply(_,e),t!==void 0&&(m.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-stats-group/style.module.scss":(m,_,e)=>{"use strict";e.d(_,{Z:()=>u});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(p),a=r()(s());a.push([m.id,".s81OIz1I3m7agSa8Q_c6{--jp-video-stats-group-wrapper-max-width: 318px;display:inline-flex;justify-content:space-between;min-width:var(--jp-video-stats-group-wrapper-max-width);background-color:var(--jp-white);padding:calc(var(--spacing-base)*2);border-radius:calc(var(--jp-border-radius)*2);box-shadow:0px 4px 40px rgba(0,0,0,.08)}.s81OIz1I3m7agSa8Q_c6 .TXJWYY45B5Ii38cQuaLu:not(:last-of-type){padding-right:calc(var(--spacing-base))}.s81OIz1I3m7agSa8Q_c6 .zbn49C2r4ZsDpug2k68_{margin-top:calc(var(--spacing-base)/2)}",""]),a.locals={wrapper:"s81OIz1I3m7agSa8Q_c6",column:"TXJWYY45B5Ii38cQuaLu",count:"zbn49C2r4ZsDpug2k68_"};const u=a}}]);})();
