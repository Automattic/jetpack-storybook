"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(w,y,u)=>{var x,C,B;u.r(y),u.d(y,{Default:()=>i,__namedExportsOrder:()=>T,default:()=>M});var p=u("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=u("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function S(){let{onDone:a}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=(0,s.useRef)(null),[v,c]=(0,s.useState)("inactive"),[g,b]=(0,s.useState)(null),o=(0,s.useRef)([]).current;function l(){return new Blob(o,{type:"audio/webm"})}const P=(0,s.useCallback)(n=>{var r,d;if(!n)return(r=t==null?void 0:t.current)==null?void 0:r.start();n<100&&(n=100),(d=t==null?void 0:t.current)==null||d.start(n)},[]),R=(0,s.useCallback)(()=>{var n;(n=t==null?void 0:t.current)==null||n.pause()},[]),A=(0,s.useCallback)(()=>{var n;(n=t==null?void 0:t.current)==null||n.resume()},[]),_=(0,s.useCallback)(()=>{var n;(n=t==null?void 0:t.current)==null||n.stop()},[]);function k(){c("recording")}function D(){c("inactive"),a==null||a(l()),o.length=0}function h(){c("paused")}function j(){c("recording")}function L(n){const{data:r}=n;r!=null&&r.size&&(o.push(r),b(l()))}return(0,s.useEffect)(()=>{var r;if(!((r=navigator.mediaDevices)!=null&&r.getUserMedia))return;const n={audio:!0};return navigator.mediaDevices.getUserMedia(n).then(d=>{t.current=new MediaRecorder(d),t.current.addEventListener("start",k),t.current.addEventListener("stop",D),t.current.addEventListener("pause",h),t.current.addEventListener("resume",j),t.current.addEventListener("dataavailable",L)}).catch(d=>{throw d}),()=>{t.current.removeEventListener("start",k),t.current.removeEventListener("stop",D),t.current.removeEventListener("pause",h),t.current.removeEventListener("resume",j),t.current.removeEventListener("dataavailable",L)}},[]),{state:v,blob:g,start:P,pause:R,resume:A,stop:_}}var e=u("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),I=`/**
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
import type { Meta } from '@storybook/react';

const RecorderComponent = ( { timeslice } ) => {
	const { start, pause, resume, stop, state, blob } = useMediaRecording();

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
`,N={Default:{startLoc:{col:17,line:77},endLoc:{col:56,line:77},startBody:{col:17,line:77},endBody:{col:56,line:77}}};const m=a=>{let{timeslice:t}=a;const{start:v,pause:c,resume:g,stop:b,state:o,blob:l}=S();return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"State: "}),(0,e.jsx)("strong",{children:o})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["Blob: ",(0,e.jsx)("strong",{children:l?`${l.size} - type: ${l.type}`:"No blob"})]})})]}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,e.jsx)(p.ZP,{variant:"primary",onClick:()=>v(t),disabled:o!=="inactive",children:"Begin recording"}),(0,e.jsx)(p.ZP,{variant:"primary",onClick:()=>c(),disabled:o!=="recording",children:"Pause"}),(0,e.jsx)(p.ZP,{variant:"primary",onClick:()=>g(),disabled:o!=="paused",children:"Resume"}),(0,e.jsx)(p.ZP,{variant:"primary",onClick:()=>b(),disabled:o==="inactive",children:"Stop"})]})]})};m.displayName="RecorderComponent";const M={parameters:{storySource:{source:`/**
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
    blob
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
};`,locationsMap:{default:{startLoc:{col:17,line:77},endLoc:{col:56,line:77},startBody:{col:17,line:77},endBody:{col:56,line:77}}}}},title:"JS Packages/AI Client/useMediaRecording",component:m,argTypes:{timeslice:{control:{type:"number"}}}},f=a=>(0,e.jsx)(m,{...a});f.displayName="Template";const E={timeslice:1e3},i=f.bind({});i.args=E,i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(B=(C=i.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const T=["Default"]}}]);})();
