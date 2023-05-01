"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4610],{"../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(j,c,e)=>{e.d(c,{ZP:()=>a});var d=e("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(t),r=e("../../../node_modules/.pnpm/@emotion+styled@11.10.6_@emotion+react@11.10.6_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+react@11.10.6_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const S=l.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,r.Z)("svg",{target:"ea4tfvq2"})("width:",n.Z.spinnerSize,"px;height:",n.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",s.D.ui.theme,";overflow:visible;"),y={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},v=(0,r.Z)("circle",{target:"ea4tfvq1"})(y,";stroke:",s.D.gray[300],";"),_=(0,r.Z)("path",{target:"ea4tfvq0"})(y,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",S,";");function V(h,C){let{className:w,...P}=h;return(0,o.createElement)(x,(0,d.Z)({className:p()("components-spinner",w),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false"},P,{ref:C}),(0,o.createElement)(v,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(_,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const a=(0,o.forwardRef)(V)},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(j,c,e)=>{e.d(c,{Z:()=>t});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o(p){let{icon:r,size:l=24,...n}=p;return(0,d.cloneElement)(r,{width:l,height:l,...n})}const t=o},"../../packages/videopress/src/client/components/video-frame-selector/stories/index.stories.jsx":(j,c,e)=>{var x,y,v,_,V,i;e.r(c),e.d(c,{Default:()=>n,VideoPlayer:()=>u,__namedExportsOrder:()=>S,default:()=>r});var d=e("../../packages/videopress/src/client/components/video-frame-selector/index.jsx"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';

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
`,p={Default:{startLoc:{col:17,line:15},endLoc:{col:57,line:15},startBody:{col:17,line:15},endBody:{col:57,line:15}},VideoPlayer:{startLoc:{col:28,line:20},endLoc:{col:70,line:20},startBody:{col:28,line:20},endBody:{col:70,line:20}}};const r={title:"Packages/VideoPress/Video Frame Selector",component:d.Z,parameters:{storySource:{source:`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';
export default {
  title: 'Packages/VideoPress/Video Frame Selector',
  component: VideoFrameSelector,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
                <Story />
            </div>]
};
const Template = args => <VideoFrameSelector {...args} />;
export const Default = Template.bind({});
Default.args = {
  src: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4'
};
const VideoPlayerTemplate = args => <VideoPlayerComponent {...args} />;
export const VideoPlayer = VideoPlayerTemplate.bind({});
VideoPlayer.args = {
  src: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <VideoFrameSelector {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
VideoPlayer.parameters = {
  ...VideoPlayer.parameters,
  docs: {
    ...VideoPlayer.parameters?.docs,
    source: {
      originalSource: "args => <VideoPlayerComponent {...args} />",
      ...VideoPlayer.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:57,line:15},startBody:{col:17,line:15},endBody:{col:57,line:15}},"video-player":{startLoc:{col:28,line:20},endLoc:{col:70,line:20},startBody:{col:28,line:20},endBody:{col:70,line:20}}}},layout:"centered"},decorators:[a=>(0,o.jsx)("div",{style:{width:"100%",maxWidth:"600px"},children:(0,o.jsx)(a,{})})]},l=a=>(0,o.jsx)(d.Z,{...a});l.displayName="Template";const n=l.bind({});n.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"};const s=a=>(0,o.jsx)(d.Y,{...a});s.displayName="VideoPlayerTemplate";const u=s.bind({});u.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"},n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"args => <VideoFrameSelector {...args} />",...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}},u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:"args => <VideoPlayerComponent {...args} />",...(i=(V=u.parameters)==null?void 0:V.docs)==null?void 0:i.source}}};const S=["Default","VideoPlayer"]},"../../packages/videopress/src/client/components/video-frame-selector/index.jsx":(j,c,e)=>{e.d(c,{Y:()=>a,Z:()=>C});var d=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(r),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=(0,s.jsx)(n.Wj,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(n.y$,{d:"M4.75725 2.075C4.60279 1.97745 4.41041 1.97489 4.25365 2.06832C4.09689 2.16174 4 2.3367 4 2.52632V21.4737C4 21.6633 4.09689 21.8383 4.25365 21.9317C4.41041 22.0251 4.60279 22.0226 4.75725 21.925L19.7573 12.4513C19.9079 12.3562 20 12.1849 20 12C20 11.8151 19.9079 11.6438 19.7573 11.5487L4.75725 2.075Z",fill:"white"})});var x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(x),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss"),_={};_.insert="head",_.singleton=!1;var V=y()(v.Z,_);const i=v.Z.locals||{},a=w=>{let{src:P,setMaxDuration:f=null,currentTime:g}=w;const m=(0,t.useRef)(null),[L,D]=(0,t.useState)(!0);(0,t.useEffect)(()=>{m.current.src=P},[P]),(0,t.useEffect)(()=>{m.current&&Number.isFinite(g)&&(m.current.currentTime=g)},[g]);const E=O=>{const b=O.target.duration;if(f==null||f(b),m.current){const T=Number.isFinite(g)?g:b/2;m.current.currentTime=T}};return(0,s.jsxs)("div",{className:i["video-player-wrapper"],children:[L&&(0,s.jsx)("div",{className:i["video-player-spinner-wrapper"],children:(0,s.jsx)(d.ZP,{className:i.spinner})}),(0,s.jsx)("video",{onLoadedData:()=>D(!1),ref:m,muted:!0,className:i.video,onDurationChange:E})]})};a.displayName="VideoPlayer";const h=w=>{let{src:P="",onVideoFrameSelected:f,className:g="",initialCurrentTime:m=null}=w;const[L,D]=(0,t.useState)(0),[E,O]=(0,t.useState)(Number.isFinite(m)?m:null),b=T=>{O(T),f==null||f(T*1e3)};return(0,s.jsxs)("div",{className:l()(i.container,g),children:[(0,s.jsx)(p.Z,{className:i["play-icon"],icon:S}),(0,s.jsx)(a,{src:P,setMaxDuration:D,currentTime:E}),(0,s.jsx)(o.Z,{className:i.range,min:0,step:.1,initialPosition:E,max:L,showTooltip:!1,withInputField:!1,onChange:b})]})};h.displayName="VideoFrameSelector",h.__docgenInfo={description:"",methods:[],displayName:"VideoFrameSelector",props:{src:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},initialCurrentTime:{defaultValue:{value:"null",computed:!1},required:!1}}};const C=h;a.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{setMaxDuration:{defaultValue:{value:"null",computed:!1},required:!1}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss":(j,c,e)=>{e.d(c,{Z:()=>l});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(t),r=p()(o());r.push([j.id,".GJLYOrdLVqPm5uwnCSuS{position:relative;width:100%}.GJLYOrdLVqPm5uwnCSuS:hover .u2u7S4rs0SpVlOKEVTKn{opacity:0}.Iw8dJR9VDiZMtmOgQacs{position:relative}.MaP07CM4JAO8bHyiXbtJ{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.tfdjkG_pc3Gk9GOUKv6T{transform:scale(3)}.Qqrk3p9Mq6FY3pqrYRE_{width:100%;-o-object-fit:cover;object-fit:cover;aspect-ratio:16/9;z-index:1;position:relative}.u2u7S4rs0SpVlOKEVTKn{width:130px;height:130px;position:absolute;top:50%;left:50%;margin:-65px 0 0 -65px;opacity:1;transition:opacity .3s ease-out}.y7HVLKw1EgYCzrLXsbzG{margin-top:-19px}.y7HVLKw1EgYCzrLXsbzG .components-range-control__track{height:8px;border-radius:0;background-color:#272526;opacity:.7}.y7HVLKw1EgYCzrLXsbzG .components-range-control__slider{padding-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-base-control__field{margin-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:first-of-type{height:8px;border-radius:0;opacity:.8;background-color:#d9d9d9}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:last-of-type{display:none}",""]),r.locals={container:"GJLYOrdLVqPm5uwnCSuS","play-icon":"u2u7S4rs0SpVlOKEVTKn","video-player-wrapper":"Iw8dJR9VDiZMtmOgQacs","video-player-spinner-wrapper":"MaP07CM4JAO8bHyiXbtJ",spinner:"tfdjkG_pc3Gk9GOUKv6T",video:"Qqrk3p9Mq6FY3pqrYRE_",range:"y7HVLKw1EgYCzrLXsbzG"};const l=r}}]);})();
