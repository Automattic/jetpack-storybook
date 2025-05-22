"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9441],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(z,v,s)=>{s.r(v),s.d(v,{Default:()=>u,__namedExportsOrder:()=>V,default:()=>K});var l=s("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=s("../ai-client/src/components/audio-duration-display/index.tsx");const o="audio/mp4;codecs=mp4a",f="audio/mp4",b="audio/webm";function D({onDone:y}={}){const e=(0,n.useRef)(null),[c,a]=(0,n.useState)("inactive"),p=(0,n.useRef)(!1),i=(0,n.useRef)(0),[C,m]=(0,n.useState)(0),x=(0,n.useRef)(null),[W,M]=(0,n.useState)(null),g=(0,n.useRef)([]).current,[G,k]=(0,n.useState)(null),S=(0,n.useRef)(null);function B(){return MediaRecorder.isTypeSupported(o)?new Blob(g,{type:f}):new Blob(g,{type:b})}const H=(0,n.useCallback)(r=>{if(L(),!r)return e?.current?.start();r<100&&(r=100),i.current=Date.now(),e?.current?.start(r)},[]),Q=(0,n.useCallback)(()=>{p.current=!0,e?.current?.pause(),m(r=>r+Date.now()-i.current)},[]),X=(0,n.useCallback)(()=>{p.current=!1,e?.current?.resume(),i.current=Date.now()},[]),T=(0,n.useCallback)(()=>{e?.current?.stop(),c==="recording"&&m(r=>r+Date.now()-i.current)},[]),L=(0,n.useCallback)(()=>{g.length=0,M(null),k(null),m(0),p.current=!1,i.current=0},[]),U=(0,n.useCallback)(()=>{e?.current&&(e.current.removeEventListener("start",I),e.current.removeEventListener("stop",O),e.current.removeEventListener("pause",N),e.current.removeEventListener("resume",Y),e.current.removeEventListener("dataavailable",$),e.current=null)},[]),w=(0,n.useCallback)(()=>{if(a("inactive"),L(),U(),!navigator.mediaDevices?.getUserMedia)return;const r=new AudioContext;S.current=r.createAnalyser();const _={audio:!0};navigator.mediaDevices.getUserMedia(_).then(d=>{x.current=d,r.createMediaStreamSource(d).connect(S.current),MediaRecorder.isTypeSupported(o)?e.current=new MediaRecorder(d,{mimeType:o}):e.current=new MediaRecorder(d,{mimeType:b}),e.current.addEventListener("start",I),e.current.addEventListener("stop",O),e.current.addEventListener("pause",N),e.current.addEventListener("resume",Y),e.current.addEventListener("dataavailable",$)}).catch(d=>{throw d})},[]),Z=(0,n.useCallback)(r=>{T(),k(typeof r=="string"?r:r.message),a("error")},[]);function I(){a("recording")}function O(){const r=B();y?.(r),g.length=0}function N(){a("paused")}function Y(){a("recording")}function $(r){const{data:_}=r;_?.size&&(g.push(_),M(B()),p.current||m(d=>{const A=Date.now(),tt=A-i.current;return i.current=A,d+tt}))}function q(){x.current&&x.current.getTracks().forEach(_=>_.stop())}return(0,n.useEffect)(()=>(w(),()=>{q(),U()}),[]),{state:c,blob:W,error:G,duration:C,analyser:S.current,onError:Z,controls:{start:H,pause:Q,resume:X,stop:T,reset:w}}}var t=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),E=`/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import AudioDurationDisplay from '../../../components/audio-duration-display/index.tsx';
import useMediaRecording from '../index.ts';
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
	component?: React.ComponentType;
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
} satisfies Meta< typeof RecorderComponent >;

const Template = args => <RecorderComponent { ...args } />;

const DefaultArgs = {
	timeslice: 1000,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export default meta;
`,P={Default:{startLoc:{col:17,line:100},endLoc:{col:2,line:102},startBody:{col:17,line:100},endBody:{col:2,line:102}}};const R=({timeslice:y})=>{const{controls:e,state:c,blob:a,duration:p}=D(),{start:i,pause:C,resume:m,stop:x}=e;return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"State: "}),(0,t.jsx)("strong",{children:c})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("span",{children:["Blob: ",(0,t.jsx)("strong",{children:a?`${a.size} - type: ${a.type}`:"No blob"})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Duration: "}),(0,t.jsx)("strong",{children:(0,t.jsx)(h.A,{duration:p})})]})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,t.jsx)(l.Ay,{variant:"primary",onClick:()=>i(y),disabled:c!=="inactive",children:"Begin recording"}),(0,t.jsx)(l.Ay,{variant:"primary",onClick:()=>C(),disabled:c!=="recording",children:"Pause"}),(0,t.jsx)(l.Ay,{variant:"primary",onClick:()=>m(),disabled:c!=="paused",children:"Resume"}),(0,t.jsx)(l.Ay,{variant:"primary",onClick:()=>x(),disabled:c==="inactive",children:"Stop"})]})]})},j={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import React from 'react';
/**
 * Internal dependencies
 */
import AudioDurationDisplay from '../../../components/audio-duration-display/index.tsx';
import useMediaRecording from '../index.ts';
/**
 * Types
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RecorderComponent = ({
  timeslice
}) => {
  const {
    controls,
    state,
    blob,
    duration
  } = useMediaRecording();
  const {
    start,
    pause,
    resume,
    stop
  } = controls;
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      },
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("span", {
          children: "State: "
        }), /*#__PURE__*/_jsx("strong", {
          children: state
        })]
      }), /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsxs("span", {
          children: ["Blob: ", /*#__PURE__*/_jsx("strong", {
            children: blob ? \`\${blob.size} - type: \${blob.type}\` : 'No blob'
          })]
        })
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("span", {
          children: "Duration: "
        }), /*#__PURE__*/_jsx("strong", {
          children: /*#__PURE__*/_jsx(AudioDurationDisplay, {
            duration: duration
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsxs("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1px'
      },
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "primary",
        onClick: () => start(timeslice),
        disabled: state !== 'inactive',
        children: "Begin recording"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "primary",
        onClick: () => pause(),
        disabled: state !== 'recording',
        children: "Pause"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "primary",
        onClick: () => resume(),
        disabled: state !== 'paused',
        children: "Resume"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "primary",
        onClick: () => stop(),
        disabled: state === 'inactive',
        children: "Stop"
      })]
    })]
  });
};
const meta = {
  title: 'JS Packages/AI Client/useMediaRecording',
  component: RecorderComponent,
  argTypes: {
    timeslice: {
      control: {
        type: 'number'
      }
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(RecorderComponent, {
  ...args
});
const DefaultArgs = {
  timeslice: 1000
};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export default meta;`,locationsMap:{default:{startLoc:{col:17,line:100},endLoc:{col:2,line:102},startBody:{col:17,line:100},endBody:{col:2,line:102}}}}},title:"JS Packages/AI Client/useMediaRecording",component:R,argTypes:{timeslice:{control:{type:"number"}}}},F=y=>(0,t.jsx)(R,{...y}),J={timeslice:1e3},u=F.bind({});u.args=J;const K=j,V=["Default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...u.parameters?.docs?.source}}}},"../ai-client/src/components/audio-duration-display/index.tsx":(z,v,s)=>{s.d(v,{A:()=>h});function l(o,{addDecimalPart:f=!1,showMinutes:b=!0,showHours:D=!1}={}){const t=Math.floor(o/36e5),E=Math.floor(o/6e4)%60,P=Math.floor(o/1e3)%60,R=Math.floor(o/10)%100,j=[t>0||D?t.toString().padStart(2,"0")+":":"",t>0||E>0||b?E.toString().padStart(2,"0")+":":"",P.toString().padStart(2,"0")];return f&&j.push("."+R.toString().padStart(2,"0")),j.join("")}var n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h({duration:o,className:f}){return(0,n.jsx)("span",{className:f,children:l(o,{addDecimalPart:!1})})}try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch{}}}]);
