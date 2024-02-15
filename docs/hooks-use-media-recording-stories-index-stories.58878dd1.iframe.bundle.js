"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":($,b,f)=>{var h,S,D;f.r(b),f.d(b,{Default:()=>l,__namedExportsOrder:()=>P,default:()=>I});var g=f("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),a=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function L(n){return new Promise(t=>{const o=new Audio(n);o.addEventListener("durationchange",function(){if(this.duration===1/0)return;const s=this.duration;o.remove(),t(s)},!1),o.load(),o.currentTime=24*60*60,o.volume=0,o.play()})}function _(n,{addDecimalPart:t=!0,showMinutes:o=!0,showHours:s=!1}={}){n=n*1e3;const d=Math.floor(n/36e5),u=Math.floor(n/6e4)%60,c=Math.floor(n/1e3)%60,p=Math.floor(n/10)%100,m=[d>0||s?d.toString().padStart(2,"0")+":":"",d>0||u>0||o?u.toString().padStart(2,"0")+":":"",c.toString().padStart(2,"0")];return t&&m.push("."+p.toString().padStart(2,"0")),m.join("")}var e=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function x({url:n,className:t}){const[o,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{n&&L(n).then(s)},[n]),(0,e.jsx)("span",{className:t,children:_(o,{addDecimalPart:!1})})}x.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(n){}function E({onDone:n}={}){const t=(0,a.useRef)(null),[o,s]=(0,a.useState)("inactive"),[d,u]=(0,a.useState)(null),c=(0,a.useRef)([]).current;function p(){return new Blob(c,{type:"audio/webm"})}const m=(0,a.useCallback)(r=>{var i,y;if(!r)return(i=t==null?void 0:t.current)==null?void 0:i.start();r<100&&(r=100),(y=t==null?void 0:t.current)==null||y.start(r)},[]),N=(0,a.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.pause()},[]),O=(0,a.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.resume()},[]),w=(0,a.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.stop()},[]);function j(){s("recording")}function B(){s("inactive"),n==null||n(p()),c.length=0}function A(){s("paused")}function k(){s("recording")}function M(r){const{data:i}=r;i!=null&&i.size&&(c.push(i),u(p()))}return(0,a.useEffect)(()=>{var i;if(!((i=navigator.mediaDevices)!=null&&i.getUserMedia))return;const r={audio:!0};return navigator.mediaDevices.getUserMedia(r).then(y=>{t.current=new MediaRecorder(y),t.current.addEventListener("start",j),t.current.addEventListener("stop",B),t.current.addEventListener("pause",A),t.current.addEventListener("resume",k),t.current.addEventListener("dataavailable",M)}).catch(y=>{throw y}),()=>{t!=null&&t.current&&(t.current.removeEventListener("start",j),t.current.removeEventListener("stop",B),t.current.removeEventListener("pause",A),t.current.removeEventListener("resume",k),t.current.removeEventListener("dataavailable",M))}},[]),{state:o,blob:d,url:d?URL.createObjectURL(d):null,controls:{start:m,pause:N,resume:O,stop:w}}}var z=`/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import AudioDurationDisplay from '../../../components/audio-duration-display/index.js';
import useMediaRecording from '../index.js';
/**
 * Types
 */
import type { Meta } from '@storybook/react';

const RecorderComponent = ( { timeslice } ) => {
	const { controls, state, blob, url } = useMediaRecording();
	const { start, pause, resume, stop } = controls;

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
`,U={Default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}};const v=({timeslice:n})=>{const{controls:t,state:o,blob:s,url:d}=E(),{start:u,pause:c,resume:p,stop:m}=t;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:o})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:s?`${s.size} - type: ${s.type}`:"No blob"})]})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Duration: "}),(0,e.jsx)("strong",{children:(0,e.jsx)(x,{url:d})})]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>u(n),disabled:o!=="inactive",children:"Begin recording"}),(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>c(),disabled:o!=="recording",children:"Pause"}),(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>p(),disabled:o!=="paused",children:"Resume"}),(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>m(),disabled:o==="inactive",children:"Stop"})]})]})};v.displayName="RecorderComponent";const R={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import AudioDurationDisplay from '../../../components/audio-duration-display/index.js';
import useMediaRecording from '../index.js';
/**
 * Types
 */
import type { Meta } from '@storybook/react';

const RecorderComponent = ( { timeslice } ) => {
	const { controls, state, blob, url } = useMediaRecording();
	const { start, pause, resume, stop } = controls;

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
`,locationsMap:{default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}}}},title:"JS Packages/AI Client/useMediaRecording",component:v,argTypes:{timeslice:{control:{type:"number"}}}},C=n=>(0,e.jsx)(v,{...n});C.displayName="Template";const T={timeslice:1e3},l=C.bind({});l.args=T;const I=R;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const P=["Default"]}}]);})();
