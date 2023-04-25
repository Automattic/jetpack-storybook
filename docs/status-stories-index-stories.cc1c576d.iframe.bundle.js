(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7772],{"../components/components/status/stories/index.stories.tsx":(v,S,e)=>{var I,C,O,T,j,h,G,R,K,P,W,X,Z,D,w,J,z,U,k,H,Y;"use strict";e.r(S),e.d(S,{ActionNeeded:()=>l,Active:()=>i,CustomLabel:()=>u,Error:()=>c,Inactive:()=>p,Initializing:()=>d,NoLabel:()=>_,__namedExportsOrder:()=>F,default:()=>M});var g=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),N=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),o=e.n(N),a=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(r),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/status/style.module.scss"),b={};b.insert="head",b.singleton=!1;var A=t()(y.Z,b);const f=y.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=g.__,E=s=>{let{className:V,label:L,status:B="inactive"}=s;const Q={active:x("Active","jetpack"),error:x("Error","jetpack"),action:x("Action needed","jetpack"),inactive:x("Inactive","jetpack"),initializing:x("Setting up","jetpack")};return(0,n.jsxs)(a.ZP,{variant:"body-extra-small",className:o()(f.status,{[f[`is-${B}`]]:B},V),children:[(0,n.jsx)("span",{className:f.status__indicator}),(0,n.jsx)("span",{className:f.status__label,children:L||L===""?L:Q[B]})]})};E.displayName="Status";const m=E;try{status.displayName="status",status.__docgenInfo={description:"",displayName:"status",props:{status:{defaultValue:{value:"inactive"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"action"'},{value:'"active"'},{value:'"error"'},{value:'"inactive"'},{value:'"initializing"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/index.tsx#status"]={docgenInfo:status.__docgenInfo,name:"status",path:"../components/components/status/index.tsx#status"})}catch(s){}var $=`import Status from '..';

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
`,q={Active:{startLoc:{col:22,line:11},endLoc:{col:1,line:13},startBody:{col:22,line:11},endBody:{col:1,line:13}},Error:{startLoc:{col:21,line:16},endLoc:{col:1,line:18},startBody:{col:21,line:16},endBody:{col:1,line:18}},ActionNeeded:{startLoc:{col:28,line:21},endLoc:{col:1,line:23},startBody:{col:28,line:21},endBody:{col:1,line:23}},Initializing:{startLoc:{col:28,line:26},endLoc:{col:1,line:28},startBody:{col:28,line:26},endBody:{col:1,line:28}},Inactive:{startLoc:{col:24,line:31},endLoc:{col:1,line:33},startBody:{col:24,line:31},endBody:{col:1,line:33}},CustomLabel:{startLoc:{col:27,line:36},endLoc:{col:1,line:38},startBody:{col:27,line:36},endBody:{col:1,line:38}},NoLabel:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}};const M={title:"JS Packages/Components/Status",component:m,parameters:{storySource:{source:`import Status from '..';
export default {
  title: 'JS Packages/Components/Status',
  component: Status,
  parameters: {
    layout: 'centered'
  }
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
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...Active.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status status=\\"active\\" />;\\n}",
      ...Active.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status status=\\"error\\" />;\\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
ActionNeeded.parameters = {
  ...ActionNeeded.parameters,
  docs: {
    ...ActionNeeded.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status status=\\"action\\" />;\\n}",
      ...ActionNeeded.parameters?.docs?.source
    }
  }
};
Initializing.parameters = {
  ...Initializing.parameters,
  docs: {
    ...Initializing.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status status=\\"initializing\\" />;\\n}",
      ...Initializing.parameters?.docs?.source
    }
  }
};
Inactive.parameters = {
  ...Inactive.parameters,
  docs: {
    ...Inactive.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status status=\\"inactive\\" />;\\n}",
      ...Inactive.parameters?.docs?.source
    }
  }
};
CustomLabel.parameters = {
  ...CustomLabel.parameters,
  docs: {
    ...CustomLabel.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status label=\\"Code is poetry\\" />;\\n}",
      ...CustomLabel.parameters?.docs?.source
    }
  }
};
NoLabel.parameters = {
  ...NoLabel.parameters,
  docs: {
    ...NoLabel.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <Status status=\\"active\\" label=\\"\\" />;\\n}",
      ...NoLabel.parameters?.docs?.source
    }
  }
};`,locationsMap:{active:{startLoc:{col:22,line:11},endLoc:{col:1,line:13},startBody:{col:22,line:11},endBody:{col:1,line:13}},error:{startLoc:{col:21,line:16},endLoc:{col:1,line:18},startBody:{col:21,line:16},endBody:{col:1,line:18}},"action-needed":{startLoc:{col:28,line:21},endLoc:{col:1,line:23},startBody:{col:28,line:21},endBody:{col:1,line:23}},initializing:{startLoc:{col:28,line:26},endLoc:{col:1,line:28},startBody:{col:28,line:26},endBody:{col:1,line:28}},inactive:{startLoc:{col:24,line:31},endLoc:{col:1,line:33},startBody:{col:24,line:31},endBody:{col:1,line:33}},"custom-label":{startLoc:{col:27,line:36},endLoc:{col:1,line:38},startBody:{col:27,line:36},endBody:{col:1,line:38}},"no-label":{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}}},layout:"centered"}},i=s=>(0,n.jsx)(m,{status:"active"});i.displayName="Active";const c=s=>(0,n.jsx)(m,{status:"error"});c.displayName="Error";const l=s=>(0,n.jsx)(m,{status:"action"});l.displayName="ActionNeeded";const d=s=>(0,n.jsx)(m,{status:"initializing"});d.displayName="Initializing";const p=s=>(0,n.jsx)(m,{status:"inactive"});p.displayName="Inactive";const u=s=>(0,n.jsx)(m,{label:"Code is poetry"});u.displayName="CustomLabel";const _=s=>(0,n.jsx)(m,{status:"active",label:""});_.displayName="NoLabel",i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <Status status="active" />;
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}},c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <Status status="error" />;
}`,...(h=(j=c.parameters)==null?void 0:j.docs)==null?void 0:h.source}}},l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  return <Status status="action" />;
}`,...(K=(R=l.parameters)==null?void 0:R.docs)==null?void 0:K.source}}},d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <Status status="initializing" />;
}`,...(X=(W=d.parameters)==null?void 0:W.docs)==null?void 0:X.source}}},p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <Status status="inactive" />;
}`,...(w=(D=p.parameters)==null?void 0:D.docs)==null?void 0:w.source}}},u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Status label="Code is poetry" />;
}`,...(U=(z=u.parameters)==null?void 0:z.docs)==null?void 0:U.source}}},_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Status status="active" label="" />;
}`,...(Y=(H=_.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};const F=["Active","Error","ActionNeeded","Initializing","Inactive","CustomLabel","NoLabel"];try{i.displayName="Active",i.__docgenInfo={description:"",displayName:"Active",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Active"]={docgenInfo:i.__docgenInfo,name:"Active",path:"../components/components/status/stories/index.stories.tsx#Active"})}catch(s){}try{c.displayName="Error",c.__docgenInfo={description:"",displayName:"Error",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Error"]={docgenInfo:c.__docgenInfo,name:"Error",path:"../components/components/status/stories/index.stories.tsx#Error"})}catch(s){}try{l.displayName="ActionNeeded",l.__docgenInfo={description:"",displayName:"ActionNeeded",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#ActionNeeded"]={docgenInfo:l.__docgenInfo,name:"ActionNeeded",path:"../components/components/status/stories/index.stories.tsx#ActionNeeded"})}catch(s){}try{d.displayName="Initializing",d.__docgenInfo={description:"",displayName:"Initializing",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Initializing"]={docgenInfo:d.__docgenInfo,name:"Initializing",path:"../components/components/status/stories/index.stories.tsx#Initializing"})}catch(s){}try{p.displayName="Inactive",p.__docgenInfo={description:"",displayName:"Inactive",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#Inactive"]={docgenInfo:p.__docgenInfo,name:"Inactive",path:"../components/components/status/stories/index.stories.tsx#Inactive"})}catch(s){}try{u.displayName="CustomLabel",u.__docgenInfo={description:"",displayName:"CustomLabel",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#CustomLabel"]={docgenInfo:u.__docgenInfo,name:"CustomLabel",path:"../components/components/status/stories/index.stories.tsx#CustomLabel"})}catch(s){}try{_.displayName="NoLabel",_.__docgenInfo={description:"",displayName:"NoLabel",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/status/stories/index.stories.tsx#NoLabel"]={docgenInfo:_.__docgenInfo,name:"NoLabel",path:"../components/components/status/stories/index.stories.tsx#NoLabel"})}catch(s){}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(v,S)=>{var e,g;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var N={}.hasOwnProperty;function o(){for(var a=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var y=typeof t;if(y==="string"||y==="number")a.push(t);else if(Array.isArray(t)){if(t.length){var b=o.apply(null,t);b&&a.push(b)}}else if(y==="object")if(t.toString===Object.prototype.toString)for(var A in t)N.call(t,A)&&t[A]&&a.push(A);else a.push(t.toString())}}return a.join(" ")}v.exports?(o.default=o,v.exports=o):(e=[],g=function(){return o}.apply(S,e),g!==void 0&&(v.exports=g))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/status/style.module.scss":(v,S,e)=>{"use strict";e.d(S,{Z:()=>t});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),N=e.n(g),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),r=a()(N());r.push([v.id,".ilNHXThBbZvdJnNGGBpo{--spacing-base: 8px;--wp-admin-border-width-focus: 1.5px;align-items:center;display:flex;white-space:nowrap}.sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-gray-50);border-radius:50%;flex-shrink:0;height:.666em;width:.666em}.QUL6A0kDB4u3GHJ4yqLr{font-weight:600;line-height:1.666;margin-left:calc(var(--spacing-base)/2)}.ilNHXThBbZvdJnNGGBpo.PoNAvAOrUwXGWlZ0swgL span,.ilNHXThBbZvdJnNGGBpo.PoNAvAOrUwXGWlZ0swgL a{color:var(--jp-green-50)}.ilNHXThBbZvdJnNGGBpo.PoNAvAOrUwXGWlZ0swgL .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-green-50)}.ilNHXThBbZvdJnNGGBpo.SyUVUUZnplK7gFjn3W8K span,.ilNHXThBbZvdJnNGGBpo.SyUVUUZnplK7gFjn3W8K a{color:var(--jp-gray-50)}.ilNHXThBbZvdJnNGGBpo.SyUVUUZnplK7gFjn3W8K .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-gray-50)}.ilNHXThBbZvdJnNGGBpo.mix4_vTri6naehq6m2Fg span,.ilNHXThBbZvdJnNGGBpo.mix4_vTri6naehq6m2Fg a{color:var(--jp-red-50)}.ilNHXThBbZvdJnNGGBpo.mix4_vTri6naehq6m2Fg .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-red-50)}.ilNHXThBbZvdJnNGGBpo.fWMIo4Pn8EPL4NDbRY1p span,.ilNHXThBbZvdJnNGGBpo.fWMIo4Pn8EPL4NDbRY1p a{color:var(--jp-yellow-30)}.ilNHXThBbZvdJnNGGBpo.fWMIo4Pn8EPL4NDbRY1p .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-yellow-30)}.ilNHXThBbZvdJnNGGBpo.f48fCJvs_HWBIR0twAbg span,.ilNHXThBbZvdJnNGGBpo.f48fCJvs_HWBIR0twAbg a{color:var(--jp-blue-40)}.ilNHXThBbZvdJnNGGBpo.f48fCJvs_HWBIR0twAbg .sdrGGr0xAx6vgW7nrbDX{background-color:var(--jp-blue-40)}",""]),r.locals={status:"ilNHXThBbZvdJnNGGBpo",status__indicator:"sdrGGr0xAx6vgW7nrbDX",status__label:"QUL6A0kDB4u3GHJ4yqLr","is-active":"PoNAvAOrUwXGWlZ0swgL","is-inactive":"SyUVUUZnplK7gFjn3W8K","is-error":"mix4_vTri6naehq6m2Fg","is-action":"fWMIo4Pn8EPL4NDbRY1p","is-initializing":"f48fCJvs_HWBIR0twAbg"};const t=r}}]);})();
