"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4610],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(x,c,e)=>{e.d(c,{ZP:()=>d});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(n),p=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function s(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const m=r.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,S=(0,p.Z)("svg",{target:"ea4tfvq2"})("width:",i.Z.spinnerSize,"px;height:",i.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",a.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),y={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},P=(0,p.Z)("circle",{target:"ea4tfvq1"})(y,";stroke:",a.D.gray[300],";"),v=(0,p.Z)("path",{target:"ea4tfvq0"})(y,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",m,";");function _({className:l,...j},b){return(0,o.createElement)(S,{className:t()("components-spinner",l),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...j,ref:b},(0,o.createElement)(P,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(v,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const d=(0,o.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js":(x,c,e)=>{e.d(c,{Z:()=>t});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function n({icon:p,size:r=24,...i}){return(0,o.cloneElement)(p,{width:r,height:r,...i})}const t=n},"../../packages/videopress/src/client/components/video-frame-selector/stories/index.stories.jsx":(x,c,e)=>{var y,P,v,_,V,d;e.r(c),e.d(c,{Default:()=>a,VideoPlayer:()=>m,__namedExportsOrder:()=>S,default:()=>r});var o=e("../../packages/videopress/src/client/components/video-frame-selector/index.jsx"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';

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
`,p={Default:{startLoc:{col:17,line:15},endLoc:{col:57,line:15},startBody:{col:17,line:15},endBody:{col:57,line:15}},VideoPlayer:{startLoc:{col:28,line:20},endLoc:{col:70,line:20},startBody:{col:28,line:20},endBody:{col:70,line:20}}};const r={title:"Packages/VideoPress/Video Frame Selector",component:o.Z,parameters:{storySource:{source:`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:57,line:15},startBody:{col:17,line:15},endBody:{col:57,line:15}},"video-player":{startLoc:{col:28,line:20},endLoc:{col:70,line:20},startBody:{col:28,line:20},endBody:{col:70,line:20}}}},layout:"centered"},decorators:[l=>(0,n.jsx)("div",{style:{width:"100%",maxWidth:"600px"},children:(0,n.jsx)(l,{})})]},i=l=>(0,n.jsx)(o.Z,{...l});i.displayName="Template";const a=i.bind({});a.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"};const s=l=>(0,n.jsx)(o.Y,{...l});s.displayName="VideoPlayerTemplate";const m=s.bind({});m.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"},a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"args => <VideoFrameSelector {...args} />",...(v=(P=a.parameters)==null?void 0:P.docs)==null?void 0:v.source}}},m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"args => <VideoPlayerComponent {...args} />",...(d=(V=m.parameters)==null?void 0:V.docs)==null?void 0:d.source}}};const S=["Default","VideoPlayer"]},"../../packages/videopress/src/client/components/video-frame-selector/index.jsx":(x,c,e)=>{e.d(c,{Y:()=>l,Z:()=>b});var o=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(r),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=(0,s.jsx)(a.Wj,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(a.y$,{d:"M4.75725 2.075C4.60279 1.97745 4.41041 1.97489 4.25365 2.06832C4.09689 2.16174 4 2.3367 4 2.52632V21.4737C4 21.6633 4.09689 21.8383 4.25365 21.9317C4.41041 22.0251 4.60279 22.0226 4.75725 21.925L19.7573 12.4513C19.9079 12.3562 20 12.1849 20 12C20 11.8151 19.9079 11.6438 19.7573 11.5487L4.75725 2.075Z",fill:"white"})});var y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(y),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss"),_={};_.insert="head",_.singleton=!1;var V=P()(v.Z,_);const d=v.Z.locals||{},l=C=>{let{src:h,setMaxDuration:f=null,currentTime:g}=C;const u=(0,t.useRef)(null),[L,D]=(0,t.useState)(!0);(0,t.useEffect)(()=>{u.current.src=h},[h]),(0,t.useEffect)(()=>{u.current&&Number.isFinite(g)&&(u.current.currentTime=g)},[g]);const w=O=>{const E=O.target.duration;if(f==null||f(E),u.current){const T=Number.isFinite(g)?g:E/2;u.current.currentTime=T}};return(0,s.jsxs)("div",{className:d["video-player-wrapper"],children:[L&&(0,s.jsx)("div",{className:d["video-player-spinner-wrapper"],children:(0,s.jsx)(o.ZP,{className:d.spinner})}),(0,s.jsx)("video",{onLoadedData:()=>D(!1),ref:u,muted:!0,className:d.video,onDurationChange:w})]})};l.displayName="VideoPlayer";const j=C=>{let{src:h="",onVideoFrameSelected:f,className:g="",initialCurrentTime:u=null}=C;const[L,D]=(0,t.useState)(0),[w,O]=(0,t.useState)(Number.isFinite(u)?u:null),E=T=>{O(T),f==null||f(T*1e3)};return(0,s.jsxs)("div",{className:i()(d.container,g),children:[(0,s.jsx)(p.Z,{className:d["play-icon"],icon:S}),(0,s.jsx)(l,{src:h,setMaxDuration:D,currentTime:w}),(0,s.jsx)(n.Z,{className:d.range,min:0,step:.1,initialPosition:w,max:L,showTooltip:!1,withInputField:!1,onChange:E})]})};j.displayName="VideoFrameSelector",j.__docgenInfo={description:"",methods:[],displayName:"VideoFrameSelector",props:{src:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},initialCurrentTime:{defaultValue:{value:"null",computed:!1},required:!1}}};const b=j;l.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{setMaxDuration:{defaultValue:{value:"null",computed:!1},required:!1}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss":(x,c,e)=>{e.d(c,{Z:()=>i});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(t),r=p()(n());r.push([x.id,".GJLYOrdLVqPm5uwnCSuS{position:relative;width:100%}.GJLYOrdLVqPm5uwnCSuS:hover .u2u7S4rs0SpVlOKEVTKn{opacity:0}.Iw8dJR9VDiZMtmOgQacs{position:relative}.MaP07CM4JAO8bHyiXbtJ{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.tfdjkG_pc3Gk9GOUKv6T{transform:scale(3)}.Qqrk3p9Mq6FY3pqrYRE_{width:100%;-o-object-fit:cover;object-fit:cover;aspect-ratio:16/9;z-index:1;position:relative}.u2u7S4rs0SpVlOKEVTKn{width:130px;height:130px;position:absolute;top:50%;left:50%;margin:-65px 0 0 -65px;opacity:1;transition:opacity .3s ease-out}.y7HVLKw1EgYCzrLXsbzG{margin-top:-19px}.y7HVLKw1EgYCzrLXsbzG .components-range-control__track{height:8px;border-radius:0;background-color:#272526;opacity:.7}.y7HVLKw1EgYCzrLXsbzG .components-range-control__slider{padding-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-base-control__field{margin-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:first-of-type{height:8px;border-radius:0;opacity:.8;background-color:#d9d9d9}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:last-of-type{display:none}",""]),r.locals={container:"GJLYOrdLVqPm5uwnCSuS","play-icon":"u2u7S4rs0SpVlOKEVTKn","video-player-wrapper":"Iw8dJR9VDiZMtmOgQacs","video-player-spinner-wrapper":"MaP07CM4JAO8bHyiXbtJ",spinner:"tfdjkG_pc3Gk9GOUKv6T",video:"Qqrk3p9Mq6FY3pqrYRE_",range:"y7HVLKw1EgYCzrLXsbzG"};const i=r}}]);})();
