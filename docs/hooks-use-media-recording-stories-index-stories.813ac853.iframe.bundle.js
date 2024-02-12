"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":($,f,m)=>{var C,h,S;m.r(f),m.d(f,{Default:()=>u,__namedExportsOrder:()=>I,default:()=>T});var y=m("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),a=m("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function M({onDone:n}={}){const t=(0,a.useRef)(null),[r,s]=(0,a.useState)("inactive"),[l,c]=(0,a.useState)(null),i=(0,a.useRef)([]).current;function g(){return new Blob(i,{type:"audio/webm"})}const P=(0,a.useCallback)(o=>{var d,p;if(!o)return(d=t==null?void 0:t.current)==null?void 0:d.start();o<100&&(o=100),(p=t==null?void 0:t.current)==null||p.start(o)},[]),O=(0,a.useCallback)(()=>{var o;(o=t==null?void 0:t.current)==null||o.pause()},[]),w=(0,a.useCallback)(()=>{var o;(o=t==null?void 0:t.current)==null||o.resume()},[]),N=(0,a.useCallback)(()=>{var o;(o=t==null?void 0:t.current)==null||o.stop()},[]);function D(){s("recording")}function B(){s("inactive"),n==null||n(g()),i.length=0}function j(){s("paused")}function A(){s("recording")}function k(o){const{data:d}=o;d!=null&&d.size&&(i.push(d),c(g()))}return(0,a.useEffect)(()=>{var d;if(!((d=navigator.mediaDevices)!=null&&d.getUserMedia))return;const o={audio:!0};return navigator.mediaDevices.getUserMedia(o).then(p=>{t.current=new MediaRecorder(p),t.current.addEventListener("start",D),t.current.addEventListener("stop",B),t.current.addEventListener("pause",j),t.current.addEventListener("resume",A),t.current.addEventListener("dataavailable",k)}).catch(p=>{throw p}),()=>{t!=null&&t.current&&(t.current.removeEventListener("start",D),t.current.removeEventListener("stop",B),t.current.removeEventListener("pause",j),t.current.removeEventListener("resume",A),t.current.removeEventListener("dataavailable",k))}},[]),{state:r,blob:l,url:l?URL.createObjectURL(l):null,start:P,pause:O,resume:w,stop:N}}function L(n){return new Promise(t=>{const r=new Audio(n);r.addEventListener("durationchange",function(){if(this.duration===1/0)return;const s=this.duration;r.remove(),t(s)},!1),r.load(),r.currentTime=24*60*60,r.volume=0,r.play()})}function _(n,{addDecimalPart:t=!0}={}){n=n*1e3;const r=Math.floor(n/36e5),s=Math.floor(n/6e4)%60,l=Math.floor(n/1e3)%60,c=Math.floor(n/10)%100,i=[r>0?r.toString().padStart(2,"0")+":":"",r>0||s>0?s.toString().padStart(2,"0")+":":"",l.toString().padStart(2,"0")];return t&&i.push("."+c.toString().padStart(2,"0")),i.join("")}var e=m("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function b({url:n}){const[t,r]=(0,a.useState)(0);return(0,a.useEffect)(()=>{n&&L(n).then(r)},[n]),(0,e.jsx)("span",{children:_(t,{addDecimalPart:!1})})}b.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(n){}var z=`/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import useMediaRecording from '../';
/**
 * Types
 */
import AudioDurationDisplay from '../../../components/audio-duration-display';
import type { Meta } from '@storybook/react';

const RecorderComponent = ( { timeslice } ) => {
	const { start, pause, resume, stop, state, blob, url } = useMediaRecording();

	return (
		<div>
			<div
				style={ {
					fontFamily: 'monospace',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
				} }
			>
				<div>
					<span>State: </span>
					<strong>{ state }</strong>
				</div>
				<div>
					<span>
						Blob: <strong>{ blob ? \`\${ blob.size } - type: \${ blob.type }\` : 'No blob' }</strong>
					</span>
				</div>

				<div>
					<span>Duration: </span>
					<strong>
						<AudioDurationDisplay url={ url } />
					</strong>
				</div>
			</div>
			<br />
			<div style={ { display: 'flex', flexDirection: 'row', gap: '1px' } }>
				<Button
					variant="primary"
					onClick={ () => start( timeslice ) }
					disabled={ state !== 'inactive' }
				>
					Begin recording
				</Button>

				<Button variant="primary" onClick={ () => pause() } disabled={ state !== 'recording' }>
					Pause
				</Button>

				<Button variant="primary" onClick={ () => resume() } disabled={ state !== 'paused' }>
					Resume
				</Button>

				<Button variant="primary" onClick={ () => stop() } disabled={ state === 'inactive' }>
					Stop
				</Button>
			</div>
		</div>
	);
};

interface AIControlStoryMeta extends Meta< typeof RecorderComponent > {
	title?: string;
	component?: React.ReactElement;
}

const meta: AIControlStoryMeta = {
	title: 'JS Packages/AI Client/useMediaRecording',
	component: RecorderComponent,
	argTypes: {
		timeslice: {
			control: {
				type: 'number',
			},
		},
	},
} as Meta< typeof RecorderComponent >;

const Template = args => <RecorderComponent { ...args } />;

const DefaultArgs = {
	timeslice: 1000,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export default meta;
`,U={Default:{startLoc:{col:17,line:89},endLoc:{col:58,line:89},startBody:{col:17,line:89},endBody:{col:58,line:89}}};const v=({timeslice:n})=>{const{start:t,pause:r,resume:s,stop:l,state:c,blob:i,url:g}=M();return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:c})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:i?`${i.size} - type: ${i.type}`:"No blob"})]})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Duration: "}),(0,e.jsx)("strong",{children:(0,e.jsx)(b,{url:g})})]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>t(n),disabled:c!=="inactive",children:"Begin recording"}),(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>r(),disabled:c!=="recording",children:"Pause"}),(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>s(),disabled:c!=="paused",children:"Resume"}),(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>l(),disabled:c==="inactive",children:"Stop"})]})]})};v.displayName="RecorderComponent";const E={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import useMediaRecording from '../';
/**
 * Types
 */
import AudioDurationDisplay from '../../../components/audio-duration-display';
import type { Meta } from '@storybook/react';

const RecorderComponent = ( { timeslice } ) => {
	const { start, pause, resume, stop, state, blob, url } = useMediaRecording();

	return (
		<div>
			<div
				style={ {
					fontFamily: 'monospace',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
				} }
			>
				<div>
					<span>State: </span>
					<strong>{ state }</strong>
				</div>
				<div>
					<span>
						Blob: <strong>{ blob ? \`\${ blob.size } - type: \${ blob.type }\` : 'No blob' }</strong>
					</span>
				</div>

				<div>
					<span>Duration: </span>
					<strong>
						<AudioDurationDisplay url={ url } />
					</strong>
				</div>
			</div>
			<br />
			<div style={ { display: 'flex', flexDirection: 'row', gap: '1px' } }>
				<Button
					variant="primary"
					onClick={ () => start( timeslice ) }
					disabled={ state !== 'inactive' }
				>
					Begin recording
				</Button>

				<Button variant="primary" onClick={ () => pause() } disabled={ state !== 'recording' }>
					Pause
				</Button>

				<Button variant="primary" onClick={ () => resume() } disabled={ state !== 'paused' }>
					Resume
				</Button>

				<Button variant="primary" onClick={ () => stop() } disabled={ state === 'inactive' }>
					Stop
				</Button>
			</div>
		</div>
	);
};

interface AIControlStoryMeta extends Meta< typeof RecorderComponent > {
	title?: string;
	component?: React.ReactElement;
}

const meta: AIControlStoryMeta = {
	title: 'JS Packages/AI Client/useMediaRecording',
	component: RecorderComponent,
	argTypes: {
		timeslice: {
			control: {
				type: 'number',
			},
		},
	},
} as Meta< typeof RecorderComponent >;

const Template = args => <RecorderComponent { ...args } />;

const DefaultArgs = {
	timeslice: 1000,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export default meta;
`,locationsMap:{default:{startLoc:{col:17,line:89},endLoc:{col:58,line:89},startBody:{col:17,line:89},endBody:{col:58,line:89}}}}},title:"JS Packages/AI Client/useMediaRecording",component:v,argTypes:{timeslice:{control:{type:"number"}}}},x=n=>(0,e.jsx)(v,{...n});x.displayName="Template";const R={timeslice:1e3},u=x.bind({});u.args=R;const T=E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(S=(h=u.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const I=["Default"]}}]);})();
