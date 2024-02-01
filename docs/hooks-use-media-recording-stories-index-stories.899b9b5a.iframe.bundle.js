"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8260],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(X,L,k)=>{var z,I,P;k.r(L),k.d(L,{Default:()=>j,__namedExportsOrder:()=>O,default:()=>J});var H=k("../../../node_modules/.pnpm/@wordpress+components@25.16.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),d=k("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function M({onDone:i}={}){const t=(0,d.useRef)(null),[u,v]=(0,d.useState)("inactive"),[B,x]=(0,d.useState)(null),A=(0,d.useRef)([]).current;function F(){return new Blob(A,{type:"audio/webm"})}const K=(0,d.useCallback)(c=>{var S,E;if(!c)return(S=t==null?void 0:t.current)==null?void 0:S.start();c<100&&(c=100),(E=t==null?void 0:t.current)==null||E.start(c)},[]),q=(0,d.useCallback)(()=>{var c;(c=t==null?void 0:t.current)==null||c.pause()},[]),N=(0,d.useCallback)(()=>{var c;(c=t==null?void 0:t.current)==null||c.resume()},[]),U=(0,d.useCallback)(()=>{var c;(c=t==null?void 0:t.current)==null||c.stop()},[]);function Z(){v("recording")}function Y(){v("inactive"),i==null||i(F()),A.length=0}function G(){v("paused")}function Q(){v("recording")}function V(c){const{data:S}=c;S!=null&&S.size&&(A.push(S),x(F()))}return(0,d.useEffect)(()=>{var S;if(!((S=navigator.mediaDevices)!=null&&S.getUserMedia))return;const c={audio:!0};return navigator.mediaDevices.getUserMedia(c).then(E=>{t.current=new MediaRecorder(E),t.current.addEventListener("start",Z),t.current.addEventListener("stop",Y),t.current.addEventListener("pause",G),t.current.addEventListener("resume",Q),t.current.addEventListener("dataavailable",V)}).catch(E=>{throw E}),()=>{t!=null&&t.current&&(t.current.removeEventListener("start",Z),t.current.removeEventListener("stop",Y),t.current.removeEventListener("pause",G),t.current.removeEventListener("resume",Q),t.current.removeEventListener("dataavailable",V))}},[]),{state:u,blob:B,url:B?URL.createObjectURL(B):null,start:K,pause:q,resume:N,stop:U}}function D(i){return new Promise(t=>{const u=new Audio(i);u.addEventListener("durationchange",function(){if(this.duration===1/0)return;const v=this.duration;u.remove(),t(v)},!1),u.load(),u.currentTime=24*60*60,u.volume=0,u.play()})}function p(i,{addDecimalPart:t=!0}={}){i=i*1e3;const u=Math.floor(i/36e5),v=Math.floor(i/6e4)%60,B=Math.floor(i/1e3)%60,x=Math.floor(i/10)%100,A=[u>0?u.toString().padStart(2,"0")+":":"",u>0||v>0?v.toString().padStart(2,"0")+":":"",B.toString().padStart(2,"0")];return t&&A.push("."+x.toString().padStart(2,"0")),A.join("")}var r=k("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function R({url:i}){const[t,u]=(0,d.useState)(0);return(0,d.useEffect)(()=>{i&&D(i).then(u)},[i]),(0,r.jsx)("span",{children:p(t,{addDecimalPart:!1})})}R.displayName="AudioDurationDisplay";try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(i){}var e=`/**
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
`,T={Default:{startLoc:{col:17,line:89},endLoc:{col:58,line:89},startBody:{col:17,line:89},endBody:{col:58,line:89}}};const _=({timeslice:i})=>{const{start:t,pause:u,resume:v,stop:B,state:x,blob:A,url:F}=M();return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"State: "}),(0,r.jsx)("strong",{children:x})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("span",{children:["Blob: ",(0,r.jsx)("strong",{children:A?`${A.size} - type: ${A.type}`:"No blob"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Duration: "}),(0,r.jsx)("strong",{children:(0,r.jsx)(R,{url:F})})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,r.jsx)(H.ZP,{variant:"primary",onClick:()=>t(i),disabled:x!=="inactive",children:"Begin recording"}),(0,r.jsx)(H.ZP,{variant:"primary",onClick:()=>u(),disabled:x!=="recording",children:"Pause"}),(0,r.jsx)(H.ZP,{variant:"primary",onClick:()=>v(),disabled:x!=="paused",children:"Resume"}),(0,r.jsx)(H.ZP,{variant:"primary",onClick:()=>B(),disabled:x==="inactive",children:"Stop"})]})]})};_.displayName="RecorderComponent";const m={parameters:{storySource:{source:`/**
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
`,locationsMap:{default:{startLoc:{col:17,line:89},endLoc:{col:58,line:89},startBody:{col:17,line:89},endBody:{col:58,line:89}}}}},title:"JS Packages/AI Client/useMediaRecording",component:_,argTypes:{timeslice:{control:{type:"number"}}}},w=i=>(0,r.jsx)(_,{...i});w.displayName="Template";const $={timeslice:1e3},j=w.bind({});j.args=$;const J=m;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(P=(I=j.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const O=["Default"]},"../../../node_modules/.pnpm/@wordpress+hooks@3.50.0/node_modules/@wordpress/hooks/build-module/index.js":(X,L,k)=>{k.d(L,{KG:()=>v,KJ:()=>B,O:()=>Z,Hu:()=>t,JQ:()=>u,Kw:()=>U,H7:()=>K,iR:()=>x});function H(o){return typeof o!="string"||o===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(o)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const d=H;function M(o){return typeof o!="string"||o===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(o)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(o)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const D=M;function p(o,h){return function(s,n,l,a=10){const y=o[h];if(!D(s)||!d(n))return;if(typeof l!="function"){console.error("The hook callback must be a function.");return}if(typeof a!="number"){console.error("If specified, the hook priority must be a number.");return}const g={callback:l,priority:a,namespace:n};if(y[s]){const b=y[s].handlers;let f;for(f=b.length;f>0&&!(a>=b[f-1].priority);f--);f===b.length?b[f]=g:b.splice(f,0,g),y.__current.forEach(W=>{W.name===s&&W.currentIndex>=f&&W.currentIndex++})}else y[s]={handlers:[g],runs:0};s!=="hookAdded"&&o.doAction("hookAdded",s,n,l,a)}}const r=p;function R(o,h,C=!1){return function(n,l){const a=o[h];if(!D(n)||!C&&!d(l))return;if(!a[n])return 0;let y=0;if(C)y=a[n].handlers.length,a[n]={runs:a[n].runs,handlers:[]};else{const g=a[n].handlers;for(let b=g.length-1;b>=0;b--)g[b].namespace===l&&(g.splice(b,1),y++,a.__current.forEach(f=>{f.name===n&&f.currentIndex>=b&&f.currentIndex--}))}return n!=="hookRemoved"&&o.doAction("hookRemoved",n,l),y}}const e=R;function T(o,h){return function(s,n){const l=o[h];return typeof n!="undefined"?s in l&&l[s].handlers.some(a=>a.namespace===n):s in l}}const _=T;function m(o,h,C=!1){return function(n,...l){const a=o[h];a[n]||(a[n]={handlers:[],runs:0}),a[n].runs++;const y=a[n].handlers;if(!y||!y.length)return C?l[0]:void 0;const g={name:n,currentIndex:0};for(a.__current.push(g);g.currentIndex<y.length;){const f=y[g.currentIndex].callback.apply(null,l);C&&(l[0]=f),g.currentIndex++}if(a.__current.pop(),C)return l[0]}}const w=m;function $(o,h){return function(){var l;var s;const n=o[h];return(s=(l=n.__current[n.__current.length-1])==null?void 0:l.name)!==null&&s!==void 0?s:null}}const j=$;function J(o,h){return function(s){const n=o[h];return typeof s=="undefined"?typeof n.__current[0]!="undefined":n.__current[0]?s===n.__current[0].name:!1}}const O=J;function z(o,h){return function(s){const n=o[h];if(D(s))return n[s]&&n[s].runs?n[s].runs:0}}const I=z;class P{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=r(this,"actions"),this.addFilter=r(this,"filters"),this.removeAction=e(this,"actions"),this.removeFilter=e(this,"filters"),this.hasAction=_(this,"actions"),this.hasFilter=_(this,"filters"),this.removeAllActions=e(this,"actions",!0),this.removeAllFilters=e(this,"filters",!0),this.doAction=w(this,"actions"),this.applyFilters=w(this,"filters",!0),this.currentAction=j(this,"actions"),this.currentFilter=j(this,"filters"),this.doingAction=O(this,"actions"),this.doingFilter=O(this,"filters"),this.didAction=I(this,"actions"),this.didFilter=I(this,"filters")}}function i(){return new P}const t=i,u=t(),{addAction:v,addFilter:B,removeAction:x,removeFilter:A,hasAction:F,hasFilter:K,removeAllActions:q,removeAllFilters:N,doAction:U,applyFilters:Z,currentAction:Y,currentFilter:G,doingAction:Q,doingFilter:V,didAction:c,didFilter:S,actions:E,filters:tt}=u},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(X,L,k)=>{k.d(L,{Z:()=>H});function H(d,M){var D=0,p,r;M=M||{};function R(){var e=p,T=arguments.length,_,m;t:for(;e;){if(e.args.length!==arguments.length){e=e.next;continue}for(m=0;m<T;m++)if(e.args[m]!==arguments[m]){e=e.next;continue t}return e!==p&&(e===r&&(r=e.prev),e.prev.next=e.next,e.next&&(e.next.prev=e.prev),e.next=p,e.prev=null,p.prev=e,p=e),e.val}for(_=new Array(T),m=0;m<T;m++)_[m]=arguments[m];return e={args:_,val:d.apply(null,_)},p?(p.prev=e,e.next=p):r=e,D===M.maxSize?(r=r.prev,r.next=null):D++,p=e,e.val}return R.clear=function(){p=null,r=null,D=0},R}}}]);})();
