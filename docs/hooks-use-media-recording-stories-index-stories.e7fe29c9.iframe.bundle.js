"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(j,m,o)=>{o.d(m,{ZP:()=>d});var u=o("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function r(t,s){if(t===s)return!0;if(t.length!==s.length)return!1;for(let i=0,l=t.length;i<l;i++)if(t[i]!==s[i])return!1;return!0}function d(t,s){if(t&&s){if(t.constructor===Object&&s.constructor===Object)return(0,u.Z)(t,s);if(Array.isArray(t)&&Array.isArray(s))return r(t,s)}return t===s}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(j,m,o)=>{o.d(m,{Z:()=>u});function u(r,d){if(r===d)return!0;const t=Object.keys(r),s=Object.keys(d);if(t.length!==s.length)return!1;let i=0;for(;i<t.length;){const l=t[i],y=r[l];if(y===void 0&&!d.hasOwnProperty(l)||y!==d[l])return!1;i++}return!0}},"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(j,m,o)=>{var B,w,D;o.r(m),o.d(m,{Default:()=>g,__namedExportsOrder:()=>P,default:()=>y});var u=o("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function d(){let{onDone:p}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=(0,r.useRef)(null),[x,f]=(0,r.useState)("inactive"),[h,C]=(0,r.useState)(null),c=(0,r.useRef)([]).current;function v(){return new Blob(c,{type:"audio/webm"})}const T=(0,r.useCallback)(n=>{var a,b;if(!n)return(a=e==null?void 0:e.current)==null?void 0:a.start();n<100&&(n=100),(b=e==null?void 0:e.current)==null||b.start(n)},[]),R=(0,r.useCallback)(()=>{var n;(n=e==null?void 0:e.current)==null||n.pause()},[]),O=(0,r.useCallback)(()=>{var n;(n=e==null?void 0:e.current)==null||n.resume()},[]),Z=(0,r.useCallback)(()=>{var n;(n=e==null?void 0:e.current)==null||n.stop()},[]);function S(){f("recording")}function L(){f("inactive"),p==null||p(v()),c.length=0}function _(){f("paused")}function E(){f("recording")}function M(n){const{data:a}=n;a!=null&&a.size&&(c.push(a),C(v()))}return(0,r.useEffect)(()=>{var a;if(!((a=navigator.mediaDevices)!=null&&a.getUserMedia))return;const n={audio:!0};return navigator.mediaDevices.getUserMedia(n).then(b=>{e.current=new MediaRecorder(b),e.current.addEventListener("start",S),e.current.addEventListener("stop",L),e.current.addEventListener("pause",_),e.current.addEventListener("resume",E),e.current.addEventListener("dataavailable",M)}).catch(b=>{throw b}),()=>{e.current.removeEventListener("start",S),e.current.removeEventListener("stop",L),e.current.removeEventListener("pause",_),e.current.removeEventListener("resume",E),e.current.removeEventListener("dataavailable",M)}},[]),{state:x,blob:h,start:T,pause:R,resume:O,stop:Z}}var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=`/**
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
`,i={Default:{startLoc:{col:17,line:77},endLoc:{col:56,line:77},startBody:{col:17,line:77},endBody:{col:56,line:77}}};const l=p=>{let{timeslice:e}=p;const{start:x,pause:f,resume:h,stop:C,state:c,blob:v}=d();return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"State: "}),(0,t.jsx)("strong",{children:c})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("span",{children:["Blob: ",(0,t.jsx)("strong",{children:v?`${v.size} - type: ${v.type}`:"No blob"})]})})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,t.jsx)(u.ZP,{variant:"primary",onClick:()=>x(e),disabled:c!=="inactive",children:"Begin recording"}),(0,t.jsx)(u.ZP,{variant:"primary",onClick:()=>f(),disabled:c!=="recording",children:"Pause"}),(0,t.jsx)(u.ZP,{variant:"primary",onClick:()=>h(),disabled:c!=="paused",children:"Resume"}),(0,t.jsx)(u.ZP,{variant:"primary",onClick:()=>C(),disabled:c==="inactive",children:"Stop"})]})]})};l.displayName="RecorderComponent";const y={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:17,line:77},endLoc:{col:56,line:77},startBody:{col:17,line:77},endBody:{col:56,line:77}}}}},title:"JS Packages/AI Client/useMediaRecording",component:l,argTypes:{timeslice:{control:{type:"number"}}}},k=p=>(0,t.jsx)(l,{...p});k.displayName="Template";const A={timeslice:1e3},g=k.bind({});g.args=A,g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(D=(w=g.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const P=["Default"]}}]);})();
