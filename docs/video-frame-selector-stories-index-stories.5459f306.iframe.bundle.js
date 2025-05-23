"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9753],{"../../packages/videopress/src/client/components/video-frame-selector/stories/index.stories.jsx":(g,i,e)=>{e.r(i),e.d(i,{Default:()=>o,VideoPlayer:()=>a,__namedExportsOrder:()=>l,default:()=>r});var s=e("../../packages/videopress/src/client/components/video-frame-selector/index.jsx"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';

export default {
	title: 'Packages/VideoPress/Video Frame Selector',
	component: VideoFrameSelector,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: '100%', maxWidth: '600px' } }>
				<Story />
			</div>
		),
	],
};

const Template = args => <VideoFrameSelector { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
	src: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4',
};

const VideoPlayerTemplate = args => <VideoPlayerComponent { ...args } />;

export const VideoPlayer = VideoPlayerTemplate.bind( {} );
VideoPlayer.args = {
	src: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4',
};
`,t={Default:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}},VideoPlayer:{startLoc:{col:28,line:24},endLoc:{col:2,line:26},startBody:{col:28,line:24},endBody:{col:2,line:26}}};const r={title:"Packages/VideoPress/Video Frame Selector",component:s.A,parameters:{storySource:{source:`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/VideoPress/Video Frame Selector',
  component: VideoFrameSelector,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%',
      maxWidth: '600px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const Template = args => /*#__PURE__*/_jsx(VideoFrameSelector, {
  ...args
});
export const Default = Template.bind({});
Default.args = {
  src: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4'
};
const VideoPlayerTemplate = args => /*#__PURE__*/_jsx(VideoPlayerComponent, {
  ...args
});
export const VideoPlayer = VideoPlayerTemplate.bind({});
VideoPlayer.args = {
  src: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4'
};`,locationsMap:{default:{startLoc:{col:17,line:17},endLoc:{col:2,line:19},startBody:{col:17,line:17},endBody:{col:2,line:19}},"video-player":{startLoc:{col:28,line:24},endLoc:{col:2,line:26},startBody:{col:28,line:24},endBody:{col:2,line:26}}}},layout:"centered"},decorators:[c=>(0,n.jsx)("div",{style:{width:"100%",maxWidth:"600px"},children:(0,n.jsx)(c,{})})]},o=(c=>(0,n.jsx)(s.A,{...c})).bind({});o.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"};const a=(c=>(0,n.jsx)(s.L,{...c})).bind({});a.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"};const l=["Default","VideoPlayer"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <VideoFrameSelector {...args} />",...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <VideoPlayerComponent {...args} />",...a.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(g,i,e)=>{e.d(i,{Ay:()=>j});var s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function p(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const o=(0,d.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,f=(0,n.A)("svg",{target:"ea4tfvq2"})("width:",t.A.spinnerSize,"px;height:",t.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",r.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),a={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},l=(0,n.A)("circle",{target:"ea4tfvq1"})(a,";stroke:",r.l.gray[300],";"),c=(0,n.A)("path",{target:"ea4tfvq0"})(a,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",o,";");var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function T({className:P,...E},x){return(0,y.jsxs)(f,{className:(0,s.A)("components-spinner",P),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...E,ref:x,children:[(0,y.jsx)(l,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,y.jsx)(c,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const j=(0,m.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(g,i,e)=>{e.d(i,{A:()=>d});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n(t,r){typeof t=="function"?t(r):t&&t.hasOwnProperty("current")&&(t.current=r)}function d(t){const r=(0,s.useRef)(),p=(0,s.useRef)(!1),o=(0,s.useRef)(!1),f=(0,s.useRef)([]),a=(0,s.useRef)(t);return a.current=t,(0,s.useLayoutEffect)(()=>{o.current===!1&&p.current===!0&&t.forEach((l,c)=>{const m=f.current[c];l!==m&&(n(m,null),n(l,r.current))}),f.current=t},t),(0,s.useLayoutEffect)(()=>{o.current=!1}),(0,s.useCallback)(l=>{n(r,l),o.current=!0,p.current=l!==null;const c=l?a.current:f.current;for(const m of c)n(m,l)},[])}},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,i,e)=>{e.d(i,{A:()=>d});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n({icon:t,size:r=24,...p},o){return(0,s.cloneElement)(t,{width:r,height:r,...p,ref:o})}const d=(0,s.forwardRef)(n)},"../../packages/videopress/src/client/components/video-frame-selector/index.jsx":(g,i,e)=>{e.d(i,{L:()=>j,A:()=>E});var s=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,o.jsx)(p.t4,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(p.wA,{d:"M4.75725 2.075C4.60279 1.97745 4.41041 1.97489 4.25365 2.06832C4.09689 2.16174 4 2.3367 4 2.52632V21.4737C4 21.6633 4.09689 21.8383 4.25365 21.9317C4.41041 22.0251 4.60279 22.0226 4.75725 21.925L19.7573 12.4513C19.9079 12.3562 20 12.1849 20 12C20 11.8151 19.9079 11.6438 19.7573 11.5487L4.75725 2.075Z",fill:"white"})});var l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(l),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss"),y={};y.insert="head",y.singleton=!1;var T=c()(m.A,y);const _=m.A.locals||{},j=({src:x,setMaxDuration:V=null,currentTime:v})=>{const u=(0,d.useRef)(null),[b,L]=(0,d.useState)(!0);(0,d.useEffect)(()=>{u.current.src=x},[x]),(0,d.useEffect)(()=>{u.current&&Number.isFinite(v)&&(u.current.currentTime=v)},[v]);const h=C=>{const w=C.target.duration;if(V?.(w),u.current){const S=Number.isFinite(v)?v:w/2;u.current.currentTime=S}};return(0,o.jsxs)("div",{className:_["video-player-wrapper"],children:[b&&(0,o.jsx)("div",{className:_["video-player-spinner-wrapper"],children:(0,o.jsx)(s.Ay,{className:_.spinner})}),(0,o.jsx)("video",{onLoadedData:()=>L(!1),ref:u,muted:!0,className:_.video,onDurationChange:h})]})},P=({src:x="",onVideoFrameSelected:V,className:v="",initialCurrentTime:u=null})=>{const[b,L]=(0,d.useState)(0),[h,C]=(0,d.useState)(Number.isFinite(u)?u:null),w=S=>{C(S),V?.(S*1e3)};return(0,o.jsxs)("div",{className:(0,r.A)(_.container,v),children:[(0,o.jsx)(t.A,{className:_["play-icon"],icon:a}),(0,o.jsx)(j,{src:x,setMaxDuration:L,currentTime:h}),(0,o.jsx)(n.A,{className:_.range,min:0,step:.1,initialPosition:h,max:b,showTooltip:!1,withInputField:!1,onChange:w,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})},E=P;j.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{setMaxDuration:{defaultValue:{value:"null",computed:!1},required:!1}}},P.__docgenInfo={description:"",methods:[],displayName:"VideoFrameSelector",props:{src:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},initialCurrentTime:{defaultValue:{value:"null",computed:!1},required:!1}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss":(g,i,e)=>{e.d(i,{A:()=>p});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(d),r=t()(n());r.push([g.id,".GJLYOrdLVqPm5uwnCSuS{position:relative;width:100%}.GJLYOrdLVqPm5uwnCSuS:hover .u2u7S4rs0SpVlOKEVTKn{opacity:0}.Iw8dJR9VDiZMtmOgQacs{position:relative}.MaP07CM4JAO8bHyiXbtJ{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.tfdjkG_pc3Gk9GOUKv6T{transform:scale(3)}.Qqrk3p9Mq6FY3pqrYRE_{width:100%;-o-object-fit:cover;object-fit:cover;aspect-ratio:16/9;z-index:1;position:relative}.u2u7S4rs0SpVlOKEVTKn{width:130px;height:130px;position:absolute;top:50%;left:50%;margin:-65px 0 0 -65px;opacity:1;transition:opacity .3s ease-out}.y7HVLKw1EgYCzrLXsbzG{margin-top:-19px}.y7HVLKw1EgYCzrLXsbzG .components-range-control__track{height:8px;border-radius:0;background-color:#272526;opacity:.7}.y7HVLKw1EgYCzrLXsbzG .components-range-control__slider{padding-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-base-control__field{margin-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:first-of-type{height:8px;border-radius:0;opacity:.8;background-color:#d9d9d9}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:last-of-type{display:none}",""]),r.locals={container:"GJLYOrdLVqPm5uwnCSuS","play-icon":"u2u7S4rs0SpVlOKEVTKn","video-player-wrapper":"Iw8dJR9VDiZMtmOgQacs","video-player-spinner-wrapper":"MaP07CM4JAO8bHyiXbtJ",spinner:"tfdjkG_pc3Gk9GOUKv6T",video:"Qqrk3p9Mq6FY3pqrYRE_",range:"y7HVLKw1EgYCzrLXsbzG"};const p=r}}]);
