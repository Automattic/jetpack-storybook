"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(et,D,f)=>{var k,j,A;f.r(D),f.d(D,{Default:()=>y,__namedExportsOrder:()=>W,default:()=>V});var b=f("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function Z(o,{addDecimalPart:t=!1,showMinutes:c=!0,showHours:i=!1}={}){const d=Math.floor(o/36e5),a=Math.floor(o/6e4)%60,g=Math.floor(o/1e3)%60,u=Math.floor(o/10)%100,p=[d>0||i?d.toString().padStart(2,"0")+":":"",d>0||a>0||c?a.toString().padStart(2,"0")+":":"",g.toString().padStart(2,"0")];return t&&p.push("."+u.toString().padStart(2,"0")),p.join("")}var e=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function M({duration:o,className:t}){return(0,e.jsx)("span",{className:t,children:Z(o,{addDecimalPart:!1})})}M.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(o){}const x="audio/mp4;codecs=mp4a",F="audio/mp4",h="audio/webm";function J({onDone:o}={}){const t=(0,r.useRef)(null),[c,i]=(0,r.useState)("inactive"),d=(0,r.useRef)(!1),a=(0,r.useRef)(0),[g,u]=(0,r.useState)(0),p=(0,r.useRef)(null),[G,_]=(0,r.useState)(null),v=(0,r.useRef)([]).current,[H,E]=(0,r.useState)(null),S=(0,r.useRef)(null);function T(){return MediaRecorder.isTypeSupported(x)?new Blob(v,{type:F}):new Blob(v,{type:h})}const Q=(0,r.useCallback)(n=>{var s,m;if(L(),!n)return(s=t==null?void 0:t.current)==null?void 0:s.start();n<100&&(n=100),a.current=Date.now(),(m=t==null?void 0:t.current)==null||m.start(n)},[]),X=(0,r.useCallback)(()=>{var n;d.current=!0,(n=t==null?void 0:t.current)==null||n.pause(),u(s=>s+Date.now()-a.current)},[]),q=(0,r.useCallback)(()=>{var n;d.current=!1,(n=t==null?void 0:t.current)==null||n.resume(),a.current=Date.now()},[]),R=(0,r.useCallback)(()=>{var n;(n=t==null?void 0:t.current)==null||n.stop(),c==="recording"&&u(s=>s+Date.now()-a.current)},[]),L=(0,r.useCallback)(()=>{v.length=0,_(null),E(null),u(0),d.current=!1,a.current=0},[]),P=(0,r.useCallback)(()=>{t!=null&&t.current&&(t.current.removeEventListener("start",I),t.current.removeEventListener("stop",N),t.current.removeEventListener("pause",O),t.current.removeEventListener("resume",Y),t.current.removeEventListener("dataavailable",$),t.current=null)},[]),w=(0,r.useCallback)(()=>{var m;if(i("inactive"),L(),P(),!((m=navigator.mediaDevices)!=null&&m.getUserMedia))return;const n=new AudioContext;S.current=n.createAnalyser();const s={audio:!0};navigator.mediaDevices.getUserMedia(s).then(l=>{p.current=l,n.createMediaStreamSource(l).connect(S.current),MediaRecorder.isTypeSupported(x)?t.current=new MediaRecorder(l,{mimeType:x}):t.current=new MediaRecorder(l,{mimeType:h}),t.current.addEventListener("start",I),t.current.addEventListener("stop",N),t.current.addEventListener("pause",O),t.current.addEventListener("resume",Y),t.current.addEventListener("dataavailable",$)}).catch(l=>{throw l})},[]),tt=(0,r.useCallback)(n=>{R(),E(typeof n=="string"?n:n.message),i("error")},[]);function I(){i("recording")}function N(){const n=T();o==null||o(n),v.length=0}function O(){i("paused")}function Y(){i("recording")}function $(n){const{data:s}=n;s!=null&&s.size&&(v.push(s),_(T()),d.current||u(m=>{const l=Date.now(),z=l-a.current;return a.current=l,m+z}))}function nt(){p.current&&p.current.getTracks().forEach(s=>s.stop())}return(0,r.useEffect)(()=>(w(),()=>{nt(),P()}),[]),{state:c,blob:G,error:H,duration:g,analyser:S.current,onError:tt,controls:{start:Q,pause:X,resume:q,stop:R,reset:w}}}var rt=`/**
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
`,ot={Default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}};const C=({timeslice:o})=>{const{controls:t,state:c,blob:i,duration:d}=J(),{start:a,pause:g,resume:u,stop:p}=t;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:c})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:i?`${i.size} - type: ${i.type}`:"No blob"})]})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Duration: "}),(0,e.jsx)("strong",{children:(0,e.jsx)(M,{duration:d})})]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(b.ZP,{variant:"primary",onClick:()=>a(o),disabled:c!=="inactive",children:"Begin recording"}),(0,e.jsx)(b.ZP,{variant:"primary",onClick:()=>g(),disabled:c!=="recording",children:"Pause"}),(0,e.jsx)(b.ZP,{variant:"primary",onClick:()=>u(),disabled:c!=="paused",children:"Resume"}),(0,e.jsx)(b.ZP,{variant:"primary",onClick:()=>p(),disabled:c==="inactive",children:"Stop"})]})]})};C.displayName="RecorderComponent";const K={parameters:{storySource:{source:`/**
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
`,locationsMap:{default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}}}},title:"JS Packages/AI Client/useMediaRecording",component:C,argTypes:{timeslice:{control:{type:"number"}}}},B=o=>(0,e.jsx)(C,{...o});B.displayName="Template";const U={timeslice:1e3},y=B.bind({});y.args=U;const V=K;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(A=(j=y.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const W=["Default"]}}]);})();
