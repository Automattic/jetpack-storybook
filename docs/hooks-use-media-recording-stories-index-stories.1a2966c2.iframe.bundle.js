"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(k,l,s)=>{s.d(l,{aD:()=>m.aD});var m=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),d=(...o)=>{let t=config,n=o;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(t={...config,...n.pop()});let i=n[0];(n.length!==1||typeof i=="string")&&(i={},n.forEach(f=>{i[f]=f}));let u={};return Object.keys(i).forEach(f=>{u[f]=action(i[f],t)}),u},r=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(k,l,s)=>{s.d(l,{ZP:()=>r});var m=s("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function d(o,t){if(o===t)return!0;if(o.length!==t.length)return!1;for(let n=0,i=o.length;n<i;n++)if(o[n]!==t[n])return!1;return!0}function r(o,t){if(o&&t){if(o.constructor===Object&&t.constructor===Object)return(0,m.Z)(o,t);if(Array.isArray(o)&&Array.isArray(t))return d(o,t)}return o===t}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.38.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(k,l,s)=>{s.d(l,{Z:()=>m});function m(d,r){if(d===r)return!0;const o=Object.keys(d),t=Object.keys(r);if(o.length!==t.length)return!1;let n=0;for(;n<o.length;){const i=o[n],u=d[i];if(u===void 0&&!r.hasOwnProperty(i)||u!==r[i])return!1;n++}return!0}},"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(k,l,s)=>{var j,B,D;s.r(l),s.d(l,{Default:()=>y,__namedExportsOrder:()=>M,default:()=>f});var m=s("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),d=s("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o(){let{onDone:b}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=(0,r.useRef)(null),[h,g]=(0,r.useState)("inactive"),p=(0,r.useRef)([]).current;function v(){return new Blob(p,{type:"audio/webm"})}const R=(0,r.useCallback)(a=>{var c;(c=e==null?void 0:e.current)==null||c.start(a)},[]),O=(0,r.useCallback)(()=>{var a;(a=e==null?void 0:e.current)==null||a.pause()},[]),P=(0,r.useCallback)(()=>{var a;(a=e==null?void 0:e.current)==null||a.resume()},[]),T=(0,r.useCallback)(()=>{var a;(a=e==null?void 0:e.current)==null||a.stop()},[]);function _(){g("recording")}function w(){g("inactive"),b==null||b(v()),p.length=0}function E(){g("paused")}function A(){g("recording")}function L(a){const{data:c}=a;c!=null&&c.size&&p.push(c)}return(0,r.useEffect)(()=>{var c;if(!((c=navigator.mediaDevices)!=null&&c.getUserMedia))return;const a={audio:!0};return navigator.mediaDevices.getUserMedia(a).then(C=>{e.current=new MediaRecorder(C),e.current.addEventListener("start",_),e.current.addEventListener("stop",w),e.current.addEventListener("pause",E),e.current.addEventListener("resume",A),e.current.addEventListener("dataavailable",L)}).catch(C=>{throw C}),()=>{e.current.removeEventListener("start",_),e.current.removeEventListener("stop",w),e.current.removeEventListener("pause",E),e.current.removeEventListener("resume",A),e.current.removeEventListener("dataavailable",L)}},[]),{start:R,pause:O,resume:P,stop:T,state:h}}var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
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

const RecorderComponent = () => {
	const { start, pause, resume, stop, state } = useMediaRecording( {
		onDone: ( blob: Blob ) => action( 'onDone' )( { size: blob.size, type: blob.type } ),
	} );

	return (
		<div style={ { display: 'flex', flexDirection: 'row', gap: '1px' } }>
			<Button variant="primary" onClick={ start } disabled={ state !== 'inactive' }>
				Begin recording
			</Button>

			<Button variant="primary" onClick={ pause } disabled={ state !== 'recording' }>
				Pause
			</Button>

			<Button variant="primary" onClick={ resume } disabled={ state !== 'paused' }>
				Resume
			</Button>

			<Button variant="primary" onClick={ stop } disabled={ state === 'inactive' }>
				Stop
			</Button>
		</div>
	);
};

export default {
	title: 'JS Packages/AI Client/useMediaRecording',
	component: RecorderComponent,
} as Meta< typeof RecorderComponent >;

const Template = () => <RecorderComponent />;

const DefaultArgs = {};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;
`,i={Default:{startLoc:{col:17,line:54},endLoc:{col:44,line:54},startBody:{col:17,line:54},endBody:{col:44,line:54}}};const u=()=>{const{start:b,pause:e,resume:h,stop:g,state:p}=o({onDone:v=>(0,m.aD)("onDone")({size:v.size,type:v.type})});return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,t.jsx)(d.ZP,{variant:"primary",onClick:b,disabled:p!=="inactive",children:"Begin recording"}),(0,t.jsx)(d.ZP,{variant:"primary",onClick:e,disabled:p!=="recording",children:"Pause"}),(0,t.jsx)(d.ZP,{variant:"primary",onClick:h,disabled:p!=="paused",children:"Resume"}),(0,t.jsx)(d.ZP,{variant:"primary",onClick:g,disabled:p==="inactive",children:"Stop"})]})};u.displayName="RecorderComponent";const f={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
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
const RecorderComponent = () => {
  const {
    start,
    pause,
    resume,
    stop,
    state
  } = useMediaRecording({
    onDone: (blob: Blob) => action('onDone')({
      size: blob.size,
      type: blob.type
    })
  });
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '1px'
  }}>
            <Button variant="primary" onClick={start} disabled={state !== 'inactive'}>
                Begin recording
            </Button>

            <Button variant="primary" onClick={pause} disabled={state !== 'recording'}>
                Pause
            </Button>

            <Button variant="primary" onClick={resume} disabled={state !== 'paused'}>
                Resume
            </Button>

            <Button variant="primary" onClick={stop} disabled={state === 'inactive'}>
                Stop
            </Button>
        </div>;
};
export default ({
  title: 'JS Packages/AI Client/useMediaRecording',
  component: RecorderComponent
} as Meta<typeof RecorderComponent>);
const Template = () => <RecorderComponent />;
const DefaultArgs = {};
export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "() => <RecorderComponent />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:54},endLoc:{col:44,line:54},startBody:{col:17,line:54},endBody:{col:44,line:54}}}}},title:"JS Packages/AI Client/useMediaRecording",component:u},x=()=>(0,t.jsx)(u,{});x.displayName="Template";const S={},y=x.bind({});y.args=S,y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:"() => <RecorderComponent />",...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const M=["Default"]}}]);})();
