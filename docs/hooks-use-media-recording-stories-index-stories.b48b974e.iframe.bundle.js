"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(Q,x,y)=>{var S,h,j;y.r(x),y.d(x,{Default:()=>m,__namedExportsOrder:()=>F,default:()=>Z});var g=y("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=y("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function N(s,{addDecimalPart:t=!1,showMinutes:c=!0,showHours:a=!1}={}){const l=Math.floor(s/36e5),i=Math.floor(s/6e4)%60,f=Math.floor(s/1e3)%60,d=Math.floor(s/10)%100,u=[l>0||a?l.toString().padStart(2,"0")+":":"",l>0||i>0||c?i.toString().padStart(2,"0")+":":"",f.toString().padStart(2,"0")];return t&&u.push("."+d.toString().padStart(2,"0")),u.join("")}var e=y("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function C({duration:s,className:t}){return(0,e.jsx)("span",{className:t,children:N(s,{addDecimalPart:!1})})}C.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(s){}function U({onDone:s}={}){const t=(0,r.useRef)(null),[c,a]=(0,r.useState)("inactive"),l=(0,r.useRef)(!1),i=(0,r.useRef)(0),[f,d]=(0,r.useState)(0),[u,B]=(0,r.useState)(null),v=(0,r.useRef)([]).current,[J,k]=(0,r.useState)(null);function L(){return new Blob(v,{type:"audio/webm"})}const Y=(0,r.useCallback)(n=>{var o,p;if(A(),!n)return(o=t==null?void 0:t.current)==null?void 0:o.start();n<100&&(n=100),i.current=Date.now(),(p=t==null?void 0:t.current)==null||p.start(n)},[]),K=(0,r.useCallback)(()=>{var n;l.current=!0,(n=t==null?void 0:t.current)==null||n.pause(),d(o=>o+Date.now()-i.current)},[]),V=(0,r.useCallback)(()=>{var n;l.current=!1,(n=t==null?void 0:t.current)==null||n.resume(),i.current=Date.now()},[]),M=(0,r.useCallback)(()=>{var n;(n=t==null?void 0:t.current)==null||n.stop(),c==="recording"&&d(o=>o+Date.now()-i.current)},[]),A=(0,r.useCallback)(()=>{v.length=0,B(null),k(null),d(0),l.current=!1,i.current=0},[]),_=(0,r.useCallback)(()=>{t!=null&&t.current&&(t.current.removeEventListener("start",R),t.current.removeEventListener("stop",T),t.current.removeEventListener("pause",w),t.current.removeEventListener("resume",P),t.current.removeEventListener("dataavailable",I),t.current=null)},[]),E=(0,r.useCallback)(()=>{var o;if(a("inactive"),A(),_(),!((o=navigator.mediaDevices)!=null&&o.getUserMedia))return;const n={audio:!0};navigator.mediaDevices.getUserMedia(n).then(p=>{t.current=new MediaRecorder(p),t.current.addEventListener("start",R),t.current.addEventListener("stop",T),t.current.addEventListener("pause",w),t.current.addEventListener("resume",P),t.current.addEventListener("dataavailable",I)}).catch(p=>{throw p})},[]),G=(0,r.useCallback)(n=>{M(),k(typeof n=="string"?n:n.message),a("error")},[]);function R(){a("recording")}function T(){a("processing");const n=L(),o=URL.createObjectURL(n);s==null||s(n,o),v.length=0}function w(){a("paused")}function P(){a("recording")}function I(n){const{data:o}=n;o!=null&&o.size&&(v.push(o),B(L()),l.current||d(p=>{const O=Date.now(),H=O-i.current;return i.current=O,p+H}))}return(0,r.useEffect)(()=>(E(),()=>{_()}),[]),{state:c,blob:u,url:u?URL.createObjectURL(u):null,error:J,duration:f,onError:G,controls:{start:Y,pause:K,resume:V,stop:M,reset:E}}}var W=`/**
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
	const { controls, state, blob, duration } = useMediaRecording();
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
						<AudioDurationDisplay duration={ duration } />
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
`,X={Default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}};const b=({timeslice:s})=>{const{controls:t,state:c,blob:a,duration:l}=U(),{start:i,pause:f,resume:d,stop:u}=t;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:c})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:a?`${a.size} - type: ${a.type}`:"No blob"})]})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Duration: "}),(0,e.jsx)("strong",{children:(0,e.jsx)(C,{duration:l})})]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>i(s),disabled:c!=="inactive",children:"Begin recording"}),(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>f(),disabled:c!=="recording",children:"Pause"}),(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>d(),disabled:c!=="paused",children:"Resume"}),(0,e.jsx)(g.ZP,{variant:"primary",onClick:()=>u(),disabled:c==="inactive",children:"Stop"})]})]})};b.displayName="RecorderComponent";const $={parameters:{storySource:{source:`/**
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
	const { controls, state, blob, duration } = useMediaRecording();
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
						<AudioDurationDisplay duration={ duration } />
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
`,locationsMap:{default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}}}},title:"JS Packages/AI Client/useMediaRecording",component:b,argTypes:{timeslice:{control:{type:"number"}}}},D=s=>(0,e.jsx)(b,{...s});D.displayName="Template";const z={timeslice:1e3},m=D.bind({});m.args=z;const Z=$;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const F=["Default"]}}]);})();
