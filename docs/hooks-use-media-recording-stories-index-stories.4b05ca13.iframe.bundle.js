"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9441],{"../ai-client/src/hooks/use-media-recording/stories/index.stories.tsx":(J,k,x)=>{var M,L,w;x.r(k),x.d(k,{Default:()=>S,__namedExportsOrder:()=>Q,default:()=>H});var b=x("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),s=x("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _(a,{addDecimalPart:e=!1,showMinutes:p=!0,showHours:d=!1}={}){const m=Math.floor(a/36e5),c=Math.floor(a/6e4)%60,E=Math.floor(a/1e3)%60,v=Math.floor(a/10)%100,g=[m>0||d?m.toString().padStart(2,"0")+":":"",m>0||c>0||p?c.toString().padStart(2,"0")+":":"",E.toString().padStart(2,"0")];return e&&g.push("."+v.toString().padStart(2,"0")),g.join("")}var r=x("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i({duration:a,className:e}){return(0,r.jsx)("span",{className:e,children:_(a,{addDecimalPart:!1})})}try{audiodurationdisplay.displayName="audiodurationdisplay",audiodurationdisplay.__docgenInfo={description:"AudioDurationDisplay component.",displayName:"audiodurationdisplay",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"]={docgenInfo:audiodurationdisplay.__docgenInfo,name:"audiodurationdisplay",path:"../ai-client/src/components/audio-duration-display/index.tsx#audiodurationdisplay"})}catch(a){}const l="audio/mp4;codecs=mp4a",A="audio/mp4",t="audio/webm";function j({onDone:a}={}){const e=(0,s.useRef)(null),[p,d]=(0,s.useState)("inactive"),m=(0,s.useRef)(!1),c=(0,s.useRef)(0),[E,v]=(0,s.useState)(0),g=(0,s.useRef)(null),[X,T]=(0,s.useState)(null),C=(0,s.useRef)([]).current,[Z,P]=(0,s.useState)(null),D=(0,s.useRef)(null);function B(){return MediaRecorder.isTypeSupported(l)?new Blob(C,{type:A}):new Blob(C,{type:t})}const q=(0,s.useCallback)(n=>{var o,h;if(O(),!n)return(o=e==null?void 0:e.current)==null?void 0:o.start();n<100&&(n=100),c.current=Date.now(),(h=e==null?void 0:e.current)==null||h.start(n)},[]),R=(0,s.useCallback)(()=>{var n;m.current=!0,(n=e==null?void 0:e.current)==null||n.pause(),v(o=>o+Date.now()-c.current)},[]),ee=(0,s.useCallback)(()=>{var n;m.current=!1,(n=e==null?void 0:e.current)==null||n.resume(),c.current=Date.now()},[]),z=(0,s.useCallback)(()=>{var n;(n=e==null?void 0:e.current)==null||n.stop(),p==="recording"&&v(o=>o+Date.now()-c.current)},[]),O=(0,s.useCallback)(()=>{C.length=0,T(null),P(null),v(0),m.current=!1,c.current=0},[]),I=(0,s.useCallback)(()=>{e!=null&&e.current&&(e.current.removeEventListener("start",Y),e.current.removeEventListener("stop",K),e.current.removeEventListener("pause",U),e.current.removeEventListener("resume",V),e.current.removeEventListener("dataavailable",$),e.current=null)},[]),N=(0,s.useCallback)(()=>{var h;if(d("inactive"),O(),I(),!((h=navigator.mediaDevices)!=null&&h.getUserMedia))return;const n=new AudioContext;D.current=n.createAnalyser();const o={audio:!0};navigator.mediaDevices.getUserMedia(o).then(f=>{g.current=f,n.createMediaStreamSource(f).connect(D.current),MediaRecorder.isTypeSupported(l)?e.current=new MediaRecorder(f,{mimeType:l}):e.current=new MediaRecorder(f,{mimeType:t}),e.current.addEventListener("start",Y),e.current.addEventListener("stop",K),e.current.addEventListener("pause",U),e.current.addEventListener("resume",V),e.current.addEventListener("dataavailable",$)}).catch(f=>{throw f})},[]),te=(0,s.useCallback)(n=>{z(),P(typeof n=="string"?n:n.message),d("error")},[]);function Y(){d("recording")}function K(){const n=B();a==null||a(n),C.length=0}function U(){d("paused")}function V(){d("recording")}function $(n){const{data:o}=n;o!=null&&o.size&&(C.push(o),T(B()),m.current||v(h=>{const f=Date.now(),F=f-c.current;return c.current=f,h+F}))}function ne(){g.current&&g.current.getTracks().forEach(o=>o.stop())}return(0,s.useEffect)(()=>(N(),()=>{ne(),I()}),[]),{state:p,blob:X,error:Z,duration:E,analyser:D.current,onError:te,controls:{start:q,pause:R,resume:ee,stop:z,reset:N}}}const y=({timeslice:a})=>{const{controls:e,state:p,blob:d,duration:m}=j(),{start:c,pause:E,resume:v,stop:g}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{fontFamily:"monospace",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"State: "}),(0,r.jsx)("strong",{children:p})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("span",{children:["Blob: ",(0,r.jsx)("strong",{children:d?`${d.size} - type: ${d.type}`:"No blob"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Duration: "}),(0,r.jsx)("strong",{children:(0,r.jsx)(i,{duration:m})})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[(0,r.jsx)(b.Ay,{variant:"primary",onClick:()=>c(a),disabled:p!=="inactive",children:"Begin recording"}),(0,r.jsx)(b.Ay,{variant:"primary",onClick:()=>E(),disabled:p!=="recording",children:"Pause"}),(0,r.jsx)(b.Ay,{variant:"primary",onClick:()=>v(),disabled:p!=="paused",children:"Resume"}),(0,r.jsx)(b.Ay,{variant:"primary",onClick:()=>g(),disabled:p==="inactive",children:"Stop"})]})]})},u={title:"JS Packages/AI Client/useMediaRecording",component:y,argTypes:{timeslice:{control:{type:"number"}}}},W=a=>(0,r.jsx)(y,{...a}),G={timeslice:1e3},S=W.bind({});S.args=G;const H=u,Q=["Default"];S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:"args => <RecorderComponent {...args} />",...(w=(L=S.parameters)==null?void 0:L.docs)==null?void 0:w.source}}}},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(J,k,x)=>{x.d(k,{A:()=>b});function b(s,_){var r=0,i,l;_=_||{};function A(){var t=i,j=arguments.length,y,u;e:for(;t;){if(t.args.length!==arguments.length){t=t.next;continue}for(u=0;u<j;u++)if(t.args[u]!==arguments[u]){t=t.next;continue e}return t!==i&&(t===l&&(l=t.prev),t.prev.next=t.next,t.next&&(t.next.prev=t.prev),t.next=i,t.prev=null,i.prev=t,i=t),t.val}for(y=new Array(j),u=0;u<j;u++)y[u]=arguments[u];return t={args:y,val:s.apply(null,y)},i?(i.prev=t,t.next=i):l=t,r===_.maxSize?(l=l.prev,l.next=null):r++,i=t,t.val}return A.clear=function(){i=null,l=null,r=0},A}}}]);})();