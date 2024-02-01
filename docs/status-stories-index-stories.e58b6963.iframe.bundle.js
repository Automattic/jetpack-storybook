(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7772],{"../components/components/status/stories/index.stories.tsx":(y,x,e)=>{var O,C,I,T,j,h,G,R,K,P,W,X,Z,D,w,J,U,k,H,Y,z;"use strict";e.r(x),e.d(x,{ActionNeeded:()=>c,Active:()=>r,CustomLabel:()=>p,Error:()=>i,Inactive:()=>d,Initializing:()=>l,NoLabel:()=>u,__namedExportsOrder:()=>F,default:()=>M});var v=e("../../../node_modules/.pnpm/@wordpress+i18n@4.50.0/node_modules/@wordpress/i18n/build-module/index.js"),f=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),b=e.n(f),a=e("../components/components/text/index.tsx"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(n),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/status/style.module.scss"),S={};S.insert="head",S.singleton=!1;var A=g()(s.Z,S);const _=s.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const N=v.__,E=({className:t,label:B,status:L="inactive"})=>{const V={active:N("Active","jetpack"),error:N("Error","jetpack"),action:N("Action needed","jetpack"),inactive:N("Inactive","jetpack"),initializing:N("Setting up","jetpack")};return(0,o.jsxs)(a.ZP,{variant:"body-extra-small",className:b()(_.status,{[_[`is-${L}`]]:L},t),children:[(0,o.jsx)("span",{className:_.status__indicator}),(0,o.jsx)("span",{className:_.status__label,children:B||B===""?B:V[L]})]})};E.displayName="Status";const m=E;try{status.displayName="status",status.__docgenInfo={description:"",displayName:"status",props:{status:{defaultValue:{value:"inactive"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"active"'},{value:'"inactive"'},{value:'"action"'},{value:'"initializing"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/index.tsx#status"]={docgenInfo:status.__docgenInfo,name:"status",path:"../components/components/status/index.tsx#status"})}catch(t){}var Q=`import Status from '..';

export default {
	title: 'JS Packages/Components/Status',
	component: Status,
	parameters: {
		layout: 'centered',
	},
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Active = args => {
	return <Status status="active" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Error = args => {
	return <Status status="error" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ActionNeeded = args => {
	return <Status status="action" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Initializing = args => {
	return <Status status="initializing" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Inactive = args => {
	return <Status status="inactive" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CustomLabel = args => {
	return <Status label="Code is poetry" />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NoLabel = args => {
	return <Status status="active" label="" />;
};
`,$={Active:{startLoc:{col:22,line:12},endLoc:{col:1,line:14},startBody:{col:22,line:12},endBody:{col:1,line:14}},Error:{startLoc:{col:21,line:17},endLoc:{col:1,line:19},startBody:{col:21,line:17},endBody:{col:1,line:19}},ActionNeeded:{startLoc:{col:28,line:22},endLoc:{col:1,line:24},startBody:{col:28,line:22},endBody:{col:1,line:24}},Initializing:{startLoc:{col:28,line:27},endLoc:{col:1,line:29},startBody:{col:28,line:27},endBody:{col:1,line:29}},Inactive:{startLoc:{col:24,line:32},endLoc:{col:1,line:34},startBody:{col:24,line:32},endBody:{col:1,line:34}},CustomLabel:{startLoc:{col:27,line:37},endLoc:{col:1,line:39},startBody:{col:27,line:37},endBody:{col:1,line:39}},NoLabel:{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}};const M={title:"JS Packages/Components/Status",component:m,parameters:{storySource:{source:`import Status from '..';

export default {
	title: 'JS Packages/Components/Status',
	component: Status,
	parameters: {
		layout: 'centered',
	},
};


export const Active = args => {
	return <Status status="active" />;
};


export const Error = args => {
	return <Status status="error" />;
};


export const ActionNeeded = args => {
	return <Status status="action" />;
};


export const Initializing = args => {
	return <Status status="initializing" />;
};


export const Inactive = args => {
	return <Status status="inactive" />;
};


export const CustomLabel = args => {
	return <Status label="Code is poetry" />;
};


export const NoLabel = args => {
	return <Status status="active" label="" />;
};
`,locationsMap:{active:{startLoc:{col:22,line:12},endLoc:{col:1,line:14},startBody:{col:22,line:12},endBody:{col:1,line:14}},error:{startLoc:{col:21,line:17},endLoc:{col:1,line:19},startBody:{col:21,line:17},endBody:{col:1,line:19}},"action-needed":{startLoc:{col:28,line:22},endLoc:{col:1,line:24},startBody:{col:28,line:22},endBody:{col:1,line:24}},initializing:{startLoc:{col:28,line:27},endLoc:{col:1,line:29},startBody:{col:28,line:27},endBody:{col:1,line:29}},inactive:{startLoc:{col:24,line:32},endLoc:{col:1,line:34},startBody:{col:24,line:32},endBody:{col:1,line:34}},"custom-label":{startLoc:{col:27,line:37},endLoc:{col:1,line:39},startBody:{col:27,line:37},endBody:{col:1,line:39}},"no-label":{startLoc:{col:23,line:42},endLoc:{col:1,line:44},startBody:{col:23,line:42},endBody:{col:1,line:44}}}},layout:"centered"}},r=t=>(0,o.jsx)(m,{status:"active"});r.displayName="Active";const i=t=>(0,o.jsx)(m,{status:"error"});i.displayName="Error";const c=t=>(0,o.jsx)(m,{status:"action"});c.displayName="ActionNeeded";const l=t=>(0,o.jsx)(m,{status:"initializing"});l.displayName="Initializing";const d=t=>(0,o.jsx)(m,{status:"inactive"});d.displayName="Inactive";const p=t=>(0,o.jsx)(m,{label:"Code is poetry"});p.displayName="CustomLabel";const u=t=>(0,o.jsx)(m,{status:"active",label:""});u.displayName="NoLabel",r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <Status status="active" />;
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}},i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <Status status="error" />;
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}},c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  return <Status status="action" />;
}`,...(K=(R=c.parameters)==null?void 0:R.docs)==null?void 0:K.source}}},l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <Status status="initializing" />;
}`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}},d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <Status status="inactive" />;
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}},p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Status label="Code is poetry" />;
}`,...(k=(U=p.parameters)==null?void 0:U.docs)==null?void 0:k.source}}},u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return <Status status="active" label="" />;
}`,...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const F=["Active","Error","ActionNeeded","Initializing","Inactive","CustomLabel","NoLabel"];try{r.displayName="Active",r.__docgenInfo={description:"",displayName:"Active",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Active"]={docgenInfo:r.__docgenInfo,name:"Active",path:"../components/components/status/stories/index.stories.tsx#Active"})}catch(t){}try{i.displayName="Error",i.__docgenInfo={description:"",displayName:"Error",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Error"]={docgenInfo:i.__docgenInfo,name:"Error",path:"../components/components/status/stories/index.stories.tsx#Error"})}catch(t){}try{c.displayName="ActionNeeded",c.__docgenInfo={description:"",displayName:"ActionNeeded",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#ActionNeeded"]={docgenInfo:c.__docgenInfo,name:"ActionNeeded",path:"../components/components/status/stories/index.stories.tsx#ActionNeeded"})}catch(t){}try{l.displayName="Initializing",l.__docgenInfo={description:"",displayName:"Initializing",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Initializing"]={docgenInfo:l.__docgenInfo,name:"Initializing",path:"../components/components/status/stories/index.stories.tsx#Initializing"})}catch(t){}try{d.displayName="Inactive",d.__docgenInfo={description:"",displayName:"Inactive",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Inactive"]={docgenInfo:d.__docgenInfo,name:"Inactive",path:"../components/components/status/stories/index.stories.tsx#Inactive"})}catch(t){}try{p.displayName="CustomLabel",p.__docgenInfo={description:"",displayName:"CustomLabel",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#CustomLabel"]={docgenInfo:p.__docgenInfo,name:"CustomLabel",path:"../components/components/status/stories/index.stories.tsx#CustomLabel"})}catch(t){}try{u.displayName="NoLabel",u.__docgenInfo={description:"",displayName:"NoLabel",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#NoLabel"]={docgenInfo:u.__docgenInfo,name:"NoLabel",path:"../components/components/status/stories/index.stories.tsx#NoLabel"})}catch(t){}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(y,x)=>{var e,v;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var f={}.hasOwnProperty,b="[native code]";function a(){for(var n=[],g=0;g<arguments.length;g++){var s=arguments[g];if(s){var S=typeof s;if(S==="string"||S==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var A=a.apply(null,s);A&&n.push(A)}}else if(S==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){n.push(s.toString());continue}for(var _ in s)f.call(s,_)&&s[_]&&n.push(_)}}}return n.join(" ")}y.exports?(a.default=a,y.exports=a):(e=[],v=function(){return a}.apply(x,e),v!==void 0&&(y.exports=v))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/status/style.module.scss":(y,x,e)=>{"use strict";e.d(x,{Z:()=>g});var v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(v),b=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(b),n=a()(f());n.push([y.id,".ilNHXThBbZvdJnNGGBpo{--spacing-base: 8px;--wp-admin-border-width-focus: 1.5px;align-items:center;display:flex;white-space:nowrap}.sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-gray-50);border-radius:50%;flex-shrink:0;height:.666em;width:.666em}.QUL6A0kDB4u3GHJ4yqLr{font-weight:600;line-height:1.666;margin-left:calc(var(--spacing-base)/2)}.ilNHXThBbZvdJnNGGBpo.PoNAvAOrUwXGWlZ0swgL span,.ilNHXThBbZvdJnNGGBpo.PoNAvAOrUwXGWlZ0swgL a{color:var(--jp-green-50)}.ilNHXThBbZvdJnNGGBpo.PoNAvAOrUwXGWlZ0swgL .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-green-50)}.ilNHXThBbZvdJnNGGBpo.SyUVUUZnplK7gFjn3W8K span,.ilNHXThBbZvdJnNGGBpo.SyUVUUZnplK7gFjn3W8K a{color:var(--jp-gray-50)}.ilNHXThBbZvdJnNGGBpo.SyUVUUZnplK7gFjn3W8K .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-gray-50)}.ilNHXThBbZvdJnNGGBpo.mix4_vTri6naehq6m2Fg span,.ilNHXThBbZvdJnNGGBpo.mix4_vTri6naehq6m2Fg a{color:var(--jp-red-50)}.ilNHXThBbZvdJnNGGBpo.mix4_vTri6naehq6m2Fg .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-red-50)}.ilNHXThBbZvdJnNGGBpo.fWMIo4Pn8EPL4NDbRY1p span,.ilNHXThBbZvdJnNGGBpo.fWMIo4Pn8EPL4NDbRY1p a{color:var(--jp-yellow-30)}.ilNHXThBbZvdJnNGGBpo.fWMIo4Pn8EPL4NDbRY1p .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-yellow-30)}.ilNHXThBbZvdJnNGGBpo.f48fCJvs_HWBIR0twAbg span,.ilNHXThBbZvdJnNGGBpo.f48fCJvs_HWBIR0twAbg a{color:var(--jp-blue-40)}.ilNHXThBbZvdJnNGGBpo.f48fCJvs_HWBIR0twAbg .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-blue-40)}",""]),n.locals={status:"ilNHXThBbZvdJnNGGBpo",status__indicator:"sdrGGr0xAx6vgW7nrbDX",status__label:"QUL6A0kDB4u3GHJ4yqLr","is-active":"PoNAvAOrUwXGWlZ0swgL","is-inactive":"SyUVUUZnplK7gFjn3W8K","is-error":"mix4_vTri6naehq6m2Fg","is-action":"fWMIo4Pn8EPL4NDbRY1p","is-initializing":"f48fCJvs_HWBIR0twAbg"};const g=n}}]);})();
