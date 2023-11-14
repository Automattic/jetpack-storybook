"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(N,f,m)=>{var D,h,C;m.r(f),m.d(f,{Default:()=>l,__namedExportsOrder:()=>P,default:()=>M});var y=m("../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=m("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function A({onDone:n}={}){const t=(0,s.useRef)(null),[o,a]=(0,s.useState)("inactive"),[c,u]=(0,s.useState)(null),i=(0,s.useRef)([]).current;function g(){return new Blob(i,{type:"audio/webm"})}const R=(0,s.useCallback)(r=>{var d,p;if(!r)return(d=t==null?void 0:t.current)==null?void 0:d.start();r<100&&(r=100),(p=t==null?void 0:t.current)==null||p.start(r)},[]),O=(0,s.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.pause()},[]),w=(0,s.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.resume()},[]),I=(0,s.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.stop()},[]);function S(){a("recording")}function B(){a("inactive"),n==null||n(g()),i.length=0}function j(){a("paused")}function k(){a("recording")}function L(r){const{data:d}=r;d!=null&&d.size&&(i.push(d),u(g()))}return(0,s.useEffect)(()=>{var d;if(!((d=navigator.mediaDevices)!=null&&d.getUserMedia))return;const r={audio:!0};return navigator.mediaDevices.getUserMedia(r).then(p=>{t.current=new MediaRecorder(p),t.current.addEventListener("start",S),t.current.addEventListener("stop",B),t.current.addEventListener("pause",j),t.current.addEventListener("resume",k),t.current.addEventListener("dataavailable",L)}).catch(p=>{throw p}),()=>{t!=null&&t.current&&(t.current.removeEventListener("start",S),t.current.removeEventListener("stop",B),t.current.removeEventListener("pause",j),t.current.removeEventListener("resume",k),t.current.removeEventListener("dataavailable",L))}},[]),{state:o,blob:c,url:c?URL.createObjectURL(c):null,start:R,pause:O,resume:w,stop:I}}function _(n){return new Promise(t=>{const o=new Audio(n);o.addEventListener("durationchange",function(){if(this.duration===1/0)return;const a=this.duration;o.remove(),t(a)},!1),o.load(),o.currentTime=24*60*60,o.volume=0,o.play()})}function E(n,{addDecimalPart:t=!0}={}){n=n*1e3;const o=Math.floor(n/36e5),a=Math.floor(n/6e4)%60,c=Math.floor(n/1e3)%60,u=Math.floor(n/10)%100,i=[o>0?o.toString().padStart(2,"0")+":":"",o>0||a>0?a.toString().padStart(2,"0")+":":"",c.toString().padStart(2,"0")];return t&&i.push("."+u.toString().padStart(2,"0")),i.join("")}var e=m("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function b({url:n}){const[t,o]=(0,s.useState)(0);return(0,s.useEffect)(()=>{n&&_(n).then(o)},[n]),(0,e.jsx)("span",{children:E(t,{addDecimalPart:!1})})}b.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(n){}var $=`/**
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

export default {
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
`,z={Default:{startLoc:{col:17,line:86},endLoc:{col:56,line:86},startBody:{col:17,line:86},endBody:{col:56,line:86}}};const v=({timeslice:n})=>{const{start:t,pause:o,resume:a,stop:c,state:u,blob:i,url:g}=A();return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:u})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:i?`${i.size} - type: ${i.type}`:"No blob"})]})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Duration: "}),(0,e.jsx)("strong",{children:(0,e.jsx)(b,{url:g})})]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>t(n),disabled:u!=="inactive",children:"Begin recording"}),(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>o(),disabled:u!=="recording",children:"Pause"}),(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>a(),disabled:u!=="paused",children:"Resume"}),(0,e.jsx)(y.ZP,{variant:"primary",onClick:()=>c(),disabled:u==="inactive",children:"Stop"})]})]})};v.displayName="RecorderComponent";const M={parameters:{storySource:{source:`/**
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
const RecorderComponent = ({
  timeslice
}) => {
  const {
    start,
    pause,
    resume,
    stop,
    state,
    blob,
    url
  } = useMediaRecording();
  return <div>
            <div style={{
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
                <div>
                    <span>State: </span>
                    <strong>{state}</strong>
                </div>
                <div>
                    <span>
                        Blob: <strong>{blob ? \`\${blob.size} - type: \${blob.type}\` : 'No blob'}</strong>
                    </span>
                </div>

                <div>
                    <span>Duration: </span>
                    <strong>
                        <AudioDurationDisplay url={url} />
                    </strong>
                </div>
            </div>
            <br />
            <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1px'
    }}>
                <Button variant="primary" onClick={() => start(timeslice)} disabled={state !== 'inactive'}>
                    Begin recording
                </Button>

                <Button variant="primary" onClick={() => pause()} disabled={state !== 'recording'}>
                    Pause
                </Button>

                <Button variant="primary" onClick={() => resume()} disabled={state !== 'paused'}>
                    Resume
                </Button>

                <Button variant="primary" onClick={() => stop()} disabled={state === 'inactive'}>
                    Stop
                </Button>
            </div>
        </div>;
};
export default ({
  title: 'JS Packages/AI Client/useMediaRecording',
  component: RecorderComponent,
  argTypes: {
    timeslice: {
      control: {
        type: 'number'
      }
    }
  }
} as Meta<typeof RecorderComponent>);
const Template = args => <RecorderComponent {...args} />;
const DefaultArgs = {
  timeslice: 1000
};
export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <RecorderComponent {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:86},endLoc:{col:56,line:86},startBody:{col:17,line:86},endBody:{col:56,line:86}}}}},title:"JS Packages/AI Client/useMediaRecording",component:v,argTypes:{timeslice:{control:{type:"number"}}}},x=n=>(0,e.jsx)(v,{...n});x.displayName="Template";const T={timeslice:1e3},l=x.bind({});l.args=T,l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const P=["Default"]}}]);})();
