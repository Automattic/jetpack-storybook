"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4610],{"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(j,i,e)=>{e.d(i,{ZP:()=>p});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(a),s=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),n=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function r(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const m=n.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,c=(0,s.Z)("svg",{target:"ea4tfvq2"})("width:",l.Z.spinnerSize,"px;height:",l.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",t.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),_={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},f=(0,s.Z)("circle",{target:"ea4tfvq1"})(_,";stroke:",t.D.gray[300],";"),g=(0,s.Z)("path",{target:"ea4tfvq0"})(_,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",m,";");function v({className:u,...h},b){return(0,o.createElement)(c,{className:d()("components-spinner",u),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...h,ref:b},(0,o.createElement)(f,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(g,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const p=(0,o.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+compose@6.21.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(j,i,e)=>{e.d(i,{Z:()=>d});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a(s,n){typeof s=="function"?s(n):s&&s.hasOwnProperty("current")&&(s.current=n)}function d(s){const n=(0,o.useRef)(),l=(0,o.useRef)(!1),t=(0,o.useRef)(!1),r=(0,o.useRef)([]),m=(0,o.useRef)(s);return m.current=s,(0,o.useLayoutEffect)(()=>{t.current===!1&&l.current===!0&&s.forEach((c,_)=>{const f=r.current[_];c!==f&&(a(f,null),a(c,n.current))}),r.current=s},s),(0,o.useLayoutEffect)(()=>{t.current=!1}),(0,o.useCallback)(c=>{a(n,c),t.current=!0,l.current=c!==null;const _=c?m.current:r.current;for(const f of _)a(f,c)},[])}},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(j,i,e)=>{e.d(i,{Z:()=>d});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a({icon:s,size:n=24,...l},t){return(0,o.cloneElement)(s,{width:n,height:n,...l,ref:t})}const d=(0,o.forwardRef)(a)},"../../packages/videopress/src/client/components/video-frame-selector/stories/index.stories.jsx":(j,i,e)=>{var _,f,g,v,w,p;e.r(i),e.d(i,{Default:()=>t,VideoPlayer:()=>m,__namedExportsOrder:()=>c,default:()=>n});var o=e("../../packages/videopress/src/client/components/video-frame-selector/index.jsx"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';

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
`,s={Default:{startLoc:{col:17,line:15},endLoc:{col:57,line:15},startBody:{col:17,line:15},endBody:{col:57,line:15}},VideoPlayer:{startLoc:{col:28,line:20},endLoc:{col:70,line:20},startBody:{col:28,line:20},endBody:{col:70,line:20}}};const n={title:"Packages/VideoPress/Video Frame Selector",component:o.Z,parameters:{storySource:{source:`import VideoFrameSelector, { VideoPlayer as VideoPlayerComponent } from '..';
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
};`,locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:57,line:15},startBody:{col:17,line:15},endBody:{col:57,line:15}},"video-player":{startLoc:{col:28,line:20},endLoc:{col:70,line:20},startBody:{col:28,line:20},endBody:{col:70,line:20}}}},layout:"centered"},decorators:[u=>(0,a.jsx)("div",{style:{width:"100%",maxWidth:"600px"},children:(0,a.jsx)(u,{})})]},l=u=>(0,a.jsx)(o.Z,{...u});l.displayName="Template";const t=l.bind({});t.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"};const r=u=>(0,a.jsx)(o.Y,{...u});r.displayName="VideoPlayerTemplate";const m=r.bind({});m.args={src:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7.mp4"},t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:"args => <VideoFrameSelector {...args} />",...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}},m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"args => <VideoPlayerComponent {...args} />",...(p=(w=m.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};const c=["Default","VideoPlayer"]},"../../packages/videopress/src/client/components/video-frame-selector/index.jsx":(j,i,e)=>{e.d(i,{Y:()=>u,Z:()=>b});var o=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/range-control/index.js"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(n),t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=(0,r.jsx)(t.Wj,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(t.y$,{d:"M4.75725 2.075C4.60279 1.97745 4.41041 1.97489 4.25365 2.06832C4.09689 2.16174 4 2.3367 4 2.52632V21.4737C4 21.6633 4.09689 21.8383 4.25365 21.9317C4.41041 22.0251 4.60279 22.0226 4.75725 21.925L19.7573 12.4513C19.9079 12.3562 20 12.1849 20 12C20 11.8151 19.9079 11.6438 19.7573 11.5487L4.75725 2.075Z",fill:"white"})});var _=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(_),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss"),v={};v.insert="head",v.singleton=!1;var w=f()(g.Z,v);const p=g.Z.locals||{},u=C=>{let{src:S,setMaxDuration:P=null,currentTime:x}=C;const y=(0,d.useRef)(null),[L,D]=(0,d.useState)(!0);(0,d.useEffect)(()=>{y.current.src=S},[S]),(0,d.useEffect)(()=>{y.current&&Number.isFinite(x)&&(y.current.currentTime=x)},[x]);const V=O=>{const E=O.target.duration;if(P==null||P(E),y.current){const T=Number.isFinite(x)?x:E/2;y.current.currentTime=T}};return(0,r.jsxs)("div",{className:p["video-player-wrapper"],children:[L&&(0,r.jsx)("div",{className:p["video-player-spinner-wrapper"],children:(0,r.jsx)(o.ZP,{className:p.spinner})}),(0,r.jsx)("video",{onLoadedData:()=>D(!1),ref:y,muted:!0,className:p.video,onDurationChange:V})]})};u.displayName="VideoPlayer";const h=C=>{let{src:S="",onVideoFrameSelected:P,className:x="",initialCurrentTime:y=null}=C;const[L,D]=(0,d.useState)(0),[V,O]=(0,d.useState)(Number.isFinite(y)?y:null),E=T=>{O(T),P==null||P(T*1e3)};return(0,r.jsxs)("div",{className:l()(p.container,x),children:[(0,r.jsx)(s.Z,{className:p["play-icon"],icon:c}),(0,r.jsx)(u,{src:S,setMaxDuration:D,currentTime:V}),(0,r.jsx)(a.Z,{className:p.range,min:0,step:.1,initialPosition:V,max:L,showTooltip:!1,withInputField:!1,onChange:E})]})};h.displayName="VideoFrameSelector",h.__docgenInfo={description:"",methods:[],displayName:"VideoFrameSelector",props:{src:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},initialCurrentTime:{defaultValue:{value:"null",computed:!1},required:!1}}};const b=h;u.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{setMaxDuration:{defaultValue:{value:"null",computed:!1},required:!1}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/video-frame-selector/style.module.scss":(j,i,e)=>{e.d(i,{Z:()=>l});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),n=s()(a());n.push([j.id,".GJLYOrdLVqPm5uwnCSuS{position:relative;width:100%}.GJLYOrdLVqPm5uwnCSuS:hover .u2u7S4rs0SpVlOKEVTKn{opacity:0}.Iw8dJR9VDiZMtmOgQacs{position:relative}.MaP07CM4JAO8bHyiXbtJ{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.tfdjkG_pc3Gk9GOUKv6T{transform:scale(3)}.Qqrk3p9Mq6FY3pqrYRE_{width:100%;-o-object-fit:cover;object-fit:cover;aspect-ratio:16/9;z-index:1;position:relative}.u2u7S4rs0SpVlOKEVTKn{width:130px;height:130px;position:absolute;top:50%;left:50%;margin:-65px 0 0 -65px;opacity:1;transition:opacity .3s ease-out}.y7HVLKw1EgYCzrLXsbzG{margin-top:-19px}.y7HVLKw1EgYCzrLXsbzG .components-range-control__track{height:8px;border-radius:0;background-color:#272526;opacity:.7}.y7HVLKw1EgYCzrLXsbzG .components-range-control__slider{padding-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-base-control__field{margin-bottom:0}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:first-of-type{height:8px;border-radius:0;opacity:.8;background-color:#d9d9d9}.y7HVLKw1EgYCzrLXsbzG .components-range-control__wrapper span:last-of-type{display:none}",""]),n.locals={container:"GJLYOrdLVqPm5uwnCSuS","play-icon":"u2u7S4rs0SpVlOKEVTKn","video-player-wrapper":"Iw8dJR9VDiZMtmOgQacs","video-player-spinner-wrapper":"MaP07CM4JAO8bHyiXbtJ",spinner:"tfdjkG_pc3Gk9GOUKv6T",video:"Qqrk3p9Mq6FY3pqrYRE_",range:"y7HVLKw1EgYCzrLXsbzG"};const l=n}}]);})();
