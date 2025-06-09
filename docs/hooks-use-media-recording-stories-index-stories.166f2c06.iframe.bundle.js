"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9441],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(k,y,c)=>{c.r(y),c.d(y,{Default:()=>v,__namedExportsOrder:()=>V,default:()=>K});var u=c("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),n=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=c("../ai-client/src/components/audio-duration-display/index.tsx");const s="audio/mp4;codecs=mp4a",o="audio/mp4",i="audio/webm";function g({onDone:j}={}){const e=(0,n.useRef)(null),[p,d]=(0,n.useState)("inactive"),b=(0,n.useRef)(!1),l=(0,n.useRef)(0),[S,R]=(0,n.useState)(0),D=(0,n.useRef)(null),[W,M]=(0,n.useState)(null),E=(0,n.useRef)([]).current,[G,B]=(0,n.useState)(null),A=(0,n.useRef)(null);function T(){return MediaRecorder.isTypeSupported(s)?new Blob(E,{type:o}):new Blob(E,{type:i})}const H=(0,n.useCallback)(r=>{if(U(),!r)return e?.current?.start();r<100&&(r=100),l.current=Date.now(),e?.current?.start(r)},[]),Q=(0,n.useCallback)(()=>{b.current=!0,e?.current?.pause(),R(r=>r+Date.now()-l.current)},[]),X=(0,n.useCallback)(()=>{b.current=!1,e?.current?.resume(),l.current=Date.now()},[]),L=(0,n.useCallback)(()=>{e?.current?.stop(),p==="recording"&&R(r=>r+Date.now()-l.current)},[]),U=(0,n.useCallback)(()=>{E.length=0,M(null),B(null),R(0),b.current=!1,l.current=0},[]),w=(0,n.useCallback)(()=>{e?.current&&(e.current.removeEventListener("start",O),e.current.removeEventListener("stop",z),e.current.removeEventListener("pause",N),e.current.removeEventListener("resume",Y),e.current.removeEventListener("dataavailable",$),e.current=null)},[]),I=(0,n.useCallback)(()=>{if(d("inactive"),U(),w(),!navigator.mediaDevices?.getUserMedia)return;const r=new AudioContext;A.current=r.createAnalyser();const h={audio:!0};navigator.mediaDevices.getUserMedia(h).then(m=>{D.current=m,r.createMediaStreamSource(m).connect(A.current),MediaRecorder.isTypeSupported(s)?e.current=new MediaRecorder(m,{mimeType:s}):e.current=new MediaRecorder(m,{mimeType:i}),e.current.addEventListener("start",O),e.current.addEventListener("stop",z),e.current.addEventListener("pause",N),e.current.addEventListener("resume",Y),e.current.addEventListener("dataavailable",$)}).catch(m=>{throw m})},[]),Z=(0,n.useCallback)(r=>{L(),B(typeof r=="string"?r:r.message),d("error")},[]);function O(){d("recording")}function z(){const r=T();j?.(r),E.length=0}function N(){d("paused")}function Y(){d("recording")}function $(r){const{data:h}=r;h?.size&&(E.push(h),M(T()),b.current||R(m=>{const P=Date.now(),tt=P-l.current;return l.current=P,m+tt}))}function q(){D.current&&D.current.getTracks().forEach(h=>h.stop())}return(0,n.useEffect)(()=>(I(),()=>{q(),w()}),[]),{state:p,blob:W,error:G,duration:S,analyser:A.current,onError:Z,controls:{start:H,pause:Q,resume:X,stop:L,reset:I}}}var t=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`/**
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
`,x={Default:{startLoc:{col:17,line:100},endLoc:{col:2,line:102},startBody:{col:17,line:100},endBody:{col:2,line:102}}};const a=({timeslice:j})=>{const{controls:e,state:p,blob:d,duration:b}=g(),{start:l,pause:S,resume:R,stop:D}=e;return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"State: "}),(0,t.jsx)("strong",{children:p})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("span",{children:["Blob: ",(0,t.jsx)("strong",{children:d?`${d.size} - type: ${d.type}`:"No blob"})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Duration: "}),(0,t.jsx)("strong",{children:(0,t.jsx)(_.A,{duration:b})})]})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,t.jsx)(u.Ay,{variant:"primary",onClick:()=>l(j),disabled:p!=="inactive",children:"Begin recording"}),(0,t.jsx)(u.Ay,{variant:"primary",onClick:()=>S(),disabled:p!=="recording",children:"Pause"}),(0,t.jsx)(u.Ay,{variant:"primary",onClick:()=>R(),disabled:p!=="paused",children:"Resume"}),(0,t.jsx)(u.Ay,{variant:"primary",onClick:()=>D(),disabled:p==="inactive",children:"Stop"})]})]})},C={parameters:{storySource:{source:`/**
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
export default meta;`,locationsMap:{default:{startLoc:{col:17,line:100},endLoc:{col:2,line:102},startBody:{col:17,line:100},endBody:{col:2,line:102}}}}},title:"JS Packages/AI Client/useMediaRecording",component:a,argTypes:{timeslice:{control:{type:"number"}}}},F=j=>(0,t.jsx)(a,{...j}),J={timeslice:1e3},v=F.bind({});v.args=J;const K=C,V=["Default"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...v.parameters?.docs?.source}}}},"../ai-client/src/components/audio-duration-display/index.tsx":(k,y,c)=>{c.d(y,{A:()=>_});function u(s,{addDecimalPart:o=!1,showMinutes:i=!0,showHours:g=!1}={}){const t=Math.floor(s/36e5),f=Math.floor(s/6e4)%60,x=Math.floor(s/1e3)%60,a=Math.floor(s/10)%100,C=[t>0||g?t.toString().padStart(2,"0")+":":"",t>0||f>0||i?f.toString().padStart(2,"0")+":":"",x.toString().padStart(2,"0")];return o&&C.push("."+a.toString().padStart(2,"0")),C.join("")}var n=c("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _({duration:s,className:o}){return(0,n.jsx)("span",{className:o,children:u(s,{addDecimalPart:!1})})}try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch{}},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(k,y,c)=>{c.d(y,{A:()=>u});function u(n,_){var s=0,o,i;_=_||{};function g(){var t=o,f=arguments.length,x,a;t:for(;t;){if(t.args.length!==arguments.length){t=t.next;continue}for(a=0;a<f;a++)if(t.args[a]!==arguments[a]){t=t.next;continue t}return t!==o&&(t===i&&(i=t.prev),t.prev.next=t.next,t.next&&(t.next.prev=t.prev),t.next=o,t.prev=null,o.prev=t,o=t),t.val}for(x=new Array(f),a=0;a<f;a++)x[a]=arguments[a];return t={args:x,val:n.apply(null,x)},o?(o.prev=t,t.next=o):i=t,s===_.maxSize?(i=i.prev,i.next=null):s++,o=t,t.val}return g.clear=function(){o=null,i=null,s=0},g}}}]);
