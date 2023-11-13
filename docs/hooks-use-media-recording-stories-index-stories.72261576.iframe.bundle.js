"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(N,b,m)=>{var h,C,S;m.r(b),m.d(b,{Default:()=>l,__namedExportsOrder:()=>R,default:()=>T});var y=m("../../../node_modules/.pnpm/@wordpress+components@25.11.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),i=m("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _(){let{onDone:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=(0,i.useRef)(null),[o,a]=(0,i.useState)("inactive"),[u,g]=(0,i.useState)(null),s=(0,i.useRef)([]).current;function c(){return new Blob(s,{type:"audio/webm"})}const v=(0,i.useCallback)(r=>{var d,p;if(!r)return(d=t==null?void 0:t.current)==null?void 0:d.start();r<100&&(r=100),(p=t==null?void 0:t.current)==null||p.start(r)},[]),O=(0,i.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.pause()},[]),w=(0,i.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.resume()},[]),I=(0,i.useCallback)(()=>{var r;(r=t==null?void 0:t.current)==null||r.stop()},[]);function B(){a("recording")}function j(){a("inactive"),e==null||e(c()),s.length=0}function k(){a("paused")}function L(){a("recording")}function A(r){const{data:d}=r;d!=null&&d.size&&(s.push(d),g(c()))}return(0,i.useEffect)(()=>{var d;if(!((d=navigator.mediaDevices)!=null&&d.getUserMedia))return;const r={audio:!0};return navigator.mediaDevices.getUserMedia(r).then(p=>{t.current=new MediaRecorder(p),t.current.addEventListener("start",B),t.current.addEventListener("stop",j),t.current.addEventListener("pause",k),t.current.addEventListener("resume",L),t.current.addEventListener("dataavailable",A)}).catch(p=>{throw p}),()=>{t!=null&&t.current&&(t.current.removeEventListener("start",B),t.current.removeEventListener("stop",j),t.current.removeEventListener("pause",k),t.current.removeEventListener("resume",L),t.current.removeEventListener("dataavailable",A))}},[]),{state:o,blob:u,url:u?URL.createObjectURL(u):null,start:v,pause:O,resume:w,stop:I}}function E(e){return new Promise(t=>{const o=new Audio(e);o.addEventListener("durationchange",function(){if(this.duration===1/0)return;const a=this.duration;o.remove(),t(a)},!1),o.load(),o.currentTime=24*60*60,o.volume=0,o.play()})}function M(e){let{addDecimalPart:t=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e=e*1e3;const o=Math.floor(e/36e5),a=Math.floor(e/6e4)%60,u=Math.floor(e/1e3)%60,g=Math.floor(e/10)%100,s=[o>0?o.toString().padStart(2,"0")+":":"",o>0||a>0?a.toString().padStart(2,"0")+":":"",u.toString().padStart(2,"0")];return t&&s.push("."+g.toString().padStart(2,"0")),s.join("")}var n=m("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function x(e){let{url:t}=e;const[o,a]=(0,i.useState)(0);return(0,i.useEffect)(()=>{t&&E(t).then(a)},[t]),(0,n.jsx)("span",{children:M(o,{addDecimalPart:!1})})}x.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(e){}var $=`/**
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
`,z={Default:{startLoc:{col:17,line:86},endLoc:{col:56,line:86},startBody:{col:17,line:86},endBody:{col:56,line:86}}};const f=e=>{let{timeslice:t}=e;const{start:o,pause:a,resume:u,stop:g,state:s,blob:c,url:v}=_();return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"State: "}),(0,n.jsx)("strong",{children:s})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("span",{children:["Blob: ",(0,n.jsx)("strong",{children:c?`${c.size} - type: ${c.type}`:"No blob"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Duration: "}),(0,n.jsx)("strong",{children:(0,n.jsx)(x,{url:v})})]})]}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,n.jsx)(y.ZP,{variant:"primary",onClick:()=>o(t),disabled:s!=="inactive",children:"Begin recording"}),(0,n.jsx)(y.ZP,{variant:"primary",onClick:()=>a(),disabled:s!=="recording",children:"Pause"}),(0,n.jsx)(y.ZP,{variant:"primary",onClick:()=>u(),disabled:s!=="paused",children:"Resume"}),(0,n.jsx)(y.ZP,{variant:"primary",onClick:()=>g(),disabled:s==="inactive",children:"Stop"})]})]})};f.displayName="RecorderComponent";const T={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:17,line:86},endLoc:{col:56,line:86},startBody:{col:17,line:86},endBody:{col:56,line:86}}}}},title:"JS Packages/AI Client/useMediaRecording",component:f,argTypes:{timeslice:{control:{type:"number"}}}},D=e=>(0,n.jsx)(f,{...e});D.displayName="Template";const P={timeslice:1e3},l=D.bind({});l.args=P,l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const R=["Default"]}}]);})();
