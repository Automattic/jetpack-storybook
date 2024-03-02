"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(q,S,f)=>{var k,B,j;f.r(S),f.d(S,{Default:()=>y,__namedExportsOrder:()=>K,default:()=>Y});var v=f("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function z(o,{addDecimalPart:t=!1,showMinutes:c=!0,showHours:i=!1}={}){const l=Math.floor(o/36e5),a=Math.floor(o/6e4)%60,g=Math.floor(o/1e3)%60,d=Math.floor(o/10)%100,u=[l>0||i?l.toString().padStart(2,"0")+":":"",l>0||a>0||c?a.toString().padStart(2,"0")+":":"",g.toString().padStart(2,"0")];return t&&u.push("."+d.toString().padStart(2,"0")),u.join("")}var e=f("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function D({duration:o,className:t}){return(0,e.jsx)("span",{className:t,children:z(o,{addDecimalPart:!1})})}D.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(o){}function Z({onDone:o}={}){const t=(0,r.useRef)(null),[c,i]=(0,r.useState)("inactive"),l=(0,r.useRef)(!1),a=(0,r.useRef)(0),[g,d]=(0,r.useState)(0),u=(0,r.useRef)(null),[U,A]=(0,r.useState)(null),b=(0,r.useRef)([]).current,[V,M]=(0,r.useState)(null),C=(0,r.useRef)(null);function _(){return new Blob(b,{type:"audio/webm"})}const G=(0,r.useCallback)(n=>{var s,m;if(L(),!n)return(s=t==null?void 0:t.current)==null?void 0:s.start();n<100&&(n=100),a.current=Date.now(),(m=t==null?void 0:t.current)==null||m.start(n)},[]),H=(0,r.useCallback)(()=>{var n;l.current=!0,(n=t==null?void 0:t.current)==null||n.pause(),d(s=>s+Date.now()-a.current)},[]),Q=(0,r.useCallback)(()=>{var n;l.current=!1,(n=t==null?void 0:t.current)==null||n.resume(),a.current=Date.now()},[]),E=(0,r.useCallback)(()=>{var n;(n=t==null?void 0:t.current)==null||n.stop(),c==="recording"&&d(s=>s+Date.now()-a.current)},[]),L=(0,r.useCallback)(()=>{b.length=0,A(null),M(null),d(0),l.current=!1,a.current=0},[]),R=(0,r.useCallback)(()=>{t!=null&&t.current&&(t.current.removeEventListener("start",w),t.current.removeEventListener("stop",P),t.current.removeEventListener("pause",I),t.current.removeEventListener("resume",N),t.current.removeEventListener("dataavailable",O),t.current=null)},[]),T=(0,r.useCallback)(()=>{var m;if(i("inactive"),L(),R(),!((m=navigator.mediaDevices)!=null&&m.getUserMedia))return;const n=new AudioContext;C.current=n.createAnalyser();const s={audio:!0};navigator.mediaDevices.getUserMedia(s).then(p=>{u.current=p,n.createMediaStreamSource(p).connect(C.current),t.current=new MediaRecorder(p),t.current.addEventListener("start",w),t.current.addEventListener("stop",P),t.current.addEventListener("pause",I),t.current.addEventListener("resume",N),t.current.addEventListener("dataavailable",O)}).catch(p=>{throw p})},[]),W=(0,r.useCallback)(n=>{E(),M(typeof n=="string"?n:n.message),i("error")},[]);function w(){i("recording")}function P(){const n=_();o==null||o(n),b.length=0}function I(){i("paused")}function N(){i("recording")}function O(n){const{data:s}=n;s!=null&&s.size&&(b.push(s),A(_()),l.current||d(m=>{const p=Date.now(),$=p-a.current;return a.current=p,m+$}))}function X(){u.current&&u.current.getTracks().forEach(s=>s.stop())}return(0,r.useEffect)(()=>(T(),()=>{X(),R()}),[]),{state:c,blob:U,error:V,duration:g,analyser:C.current,onError:W,controls:{start:G,pause:H,resume:Q,stop:E,reset:T}}}var tt=`/**
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
`,nt={Default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}};const x=({timeslice:o})=>{const{controls:t,state:c,blob:i,duration:l}=Z(),{start:a,pause:g,resume:d,stop:u}=t;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:c})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:i?`${i.size} - type: ${i.type}`:"No blob"})]})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Duration: "}),(0,e.jsx)("strong",{children:(0,e.jsx)(D,{duration:l})})]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(v.ZP,{variant:"primary",onClick:()=>a(o),disabled:c!=="inactive",children:"Begin recording"}),(0,e.jsx)(v.ZP,{variant:"primary",onClick:()=>g(),disabled:c!=="recording",children:"Pause"}),(0,e.jsx)(v.ZP,{variant:"primary",onClick:()=>d(),disabled:c!=="paused",children:"Resume"}),(0,e.jsx)(v.ZP,{variant:"primary",onClick:()=>u(),disabled:c==="inactive",children:"Stop"})]})]})};x.displayName="RecorderComponent";const F={parameters:{storySource:{source:`/**
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
`,locationsMap:{default:{startLoc:{col:17,line:90},endLoc:{col:58,line:90},startBody:{col:17,line:90},endBody:{col:58,line:90}}}}},title:"JS Packages/AI Client/useMediaRecording",component:x,argTypes:{timeslice:{control:{type:"number"}}}},h=o=>(0,e.jsx)(x,{...o});h.displayName="Template";const J={timeslice:1e3},y=h.bind({});y.args=J;const Y=F;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(j=(B=y.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const K=["Default"]}}]);})();
