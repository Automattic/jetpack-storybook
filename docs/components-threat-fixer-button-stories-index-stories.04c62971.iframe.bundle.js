"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1499],{"../scan/src/components/threat-fixer-button/stories/index.stories.tsx":(y,m,u)=>{u.r(m),u.d(m,{Default:()=>n,DeleteCoreFile:()=>l,DeleteDirectory:()=>i,DeleteFile:()=>s,DeletePlugin:()=>a,DeleteTheme:()=>o,ErrorFixer:()=>f,Loading:()=>g,ReplaceCoreFile:()=>p,ReplaceFile:()=>x,ReplaceSaltKeys:()=>d,StaleFixer:()=>_,Update:()=>c,__namedExportsOrder:()=>S,default:()=>h});var r=u("../scan/src/components/threat-fixer-button/index.tsx"),t=u("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),C=`import ThreatFixerButton from '../index.tsx';

export default {
	title: 'JS Packages/Scan/Threat Fixer Button',
	component: ThreatFixerButton,
	decorators: [
		Story => (
			<div style={ { height: '175px' } }>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'centered',
	},
};

export const Default = args => <ThreatFixerButton { ...args } />;
Default.args = {
	threat: { fixable: { fixer: 'edit' } },
	onClick: () => alert( 'Fixer callback triggered' ), // eslint-disable-line no-alert
};

export const DeletePlugin = args => <ThreatFixerButton { ...args } />;
DeletePlugin.args = {
	threat: { fixable: { fixer: 'delete' }, extension: { type: 'plugins' } },
	onClick: () => alert( 'Delete fixer callback triggered' ), // eslint-disable-line no-alert
};

export const DeleteTheme = args => <ThreatFixerButton { ...args } />;
DeleteTheme.args = {
	threat: { fixable: { fixer: 'delete' }, extension: { type: 'themes' } },
	onClick: () => alert( 'Delete fixer callback triggered' ), // eslint-disable-line no-alert
};

export const DeleteDirectory = args => <ThreatFixerButton { ...args } />;
DeleteDirectory.args = {
	threat: { fixable: { fixer: 'delete' }, filename: '/var/www/html/wp-content/uploads/' },
	onClick: () => alert( 'Delete fixer callback triggered' ), // eslint-disable-line no-alert
};

export const DeleteCoreFile = args => <ThreatFixerButton { ...args } />;
DeleteCoreFile.args = {
	threat: {
		fixable: { fixer: 'delete' },
		signature: 'Core.File.Modification',
		filename: '/var/www/html/wp-admin/index.php',
	},
	onClick: () => alert( 'Delete fixer callback triggered' ), // eslint-disable-line no-alert
};

export const DeleteFile = args => <ThreatFixerButton { ...args } />;
DeleteFile.args = {
	threat: {
		fixable: { fixer: 'delete' },
		filename: '/var/www/html/wp-content/uploads/jptt_eicar.php',
	},
	onClick: () => alert( 'Delete fixer callback triggered' ), // eslint-disable-line no-alert
};

export const Update = args => <ThreatFixerButton { ...args } />;
Update.args = {
	threat: { fixable: { fixer: 'update' } },
	onClick: () => alert( 'Update fixer callback triggered' ), // eslint-disable-line no-alert
};

export const ReplaceSaltKeys = args => <ThreatFixerButton { ...args } />;
ReplaceSaltKeys.args = {
	threat: { fixable: { fixer: 'replace' }, signature: 'php_hardening_WP_Config_NoSalts_001' },
	onClick: () => alert( 'Replace fixer callback triggered' ), // eslint-disable-line no-alert
};

export const ReplaceCoreFile = args => <ThreatFixerButton { ...args } />;
ReplaceCoreFile.args = {
	threat: {
		fixable: { fixer: 'replace' },
		signature: 'Core.File.Modification',
		filename: '/var/www/html/wp-admin/index.php',
	},
	onClick: () => alert( 'Replace fixer callback triggered' ), // eslint-disable-line no-alert
};

export const ReplaceFile = args => <ThreatFixerButton { ...args } />;
ReplaceFile.args = {
	threat: {
		fixable: { fixer: 'replace' },
		filename: '/var/www/html/wp-content/uploads/jptt_eicar.php',
	},
	onClick: () => alert( 'Replace fixer callback triggered' ), // eslint-disable-line no-alert
};

export const Loading = args => <ThreatFixerButton { ...args } />;
Loading.args = {
	threat: { fixable: { fixer: 'update' }, fixer: { status: 'in_progress' } },
	onClick: () => alert( 'In progress fixer callback triggered' ), // eslint-disable-line no-alert
};

export const StaleFixer = args => <ThreatFixerButton { ...args } />;
StaleFixer.args = {
	threat: {
		fixable: { fixer: 'update' },
		fixer: { status: 'in_progress', lastUpdated: new Date( '1999-01-01' ).toISOString() },
	},
	onClick: () => alert( 'Stale fixer callback triggered.' ), // eslint-disable-line no-alert
};

export const ErrorFixer = args => <ThreatFixerButton { ...args } />;
ErrorFixer.args = {
	threat: { fixable: { fixer: 'update' }, fixer: { error: 'error' } },
	onClick: () => alert( 'Error fixer callback triggered.' ), // eslint-disable-line no-alert
};
`,F={Default:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},DeletePlugin:{startLoc:{col:28,line:27},endLoc:{col:2,line:29},startBody:{col:28,line:27},endBody:{col:2,line:29}},DeleteTheme:{startLoc:{col:27,line:41},endLoc:{col:2,line:43},startBody:{col:27,line:41},endBody:{col:2,line:43}},DeleteDirectory:{startLoc:{col:31,line:55},endLoc:{col:2,line:57},startBody:{col:31,line:55},endBody:{col:2,line:57}},DeleteCoreFile:{startLoc:{col:30,line:67},endLoc:{col:2,line:69},startBody:{col:30,line:67},endBody:{col:2,line:69}},DeleteFile:{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}},Update:{startLoc:{col:22,line:92},endLoc:{col:2,line:94},startBody:{col:22,line:92},endBody:{col:2,line:94}},ReplaceSaltKeys:{startLoc:{col:31,line:103},endLoc:{col:2,line:105},startBody:{col:31,line:103},endBody:{col:2,line:105}},ReplaceCoreFile:{startLoc:{col:31,line:115},endLoc:{col:2,line:117},startBody:{col:31,line:115},endBody:{col:2,line:117}},ReplaceFile:{startLoc:{col:27,line:128},endLoc:{col:2,line:130},startBody:{col:27,line:128},endBody:{col:2,line:130}},Loading:{startLoc:{col:23,line:140},endLoc:{col:2,line:142},startBody:{col:23,line:140},endBody:{col:2,line:142}},StaleFixer:{startLoc:{col:26,line:154},endLoc:{col:2,line:156},startBody:{col:26,line:154},endBody:{col:2,line:156}},ErrorFixer:{startLoc:{col:26,line:169},endLoc:{col:2,line:171},startBody:{col:26,line:169},endBody:{col:2,line:171}}};const h={title:"JS Packages/Scan/Threat Fixer Button",component:r.A,decorators:[e=>(0,t.jsx)("div",{style:{height:"175px"},children:(0,t.jsx)(e,{})})],parameters:{storySource:{source:`import ThreatFixerButton from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Scan/Threat Fixer Button',
  component: ThreatFixerButton,
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      height: '175px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })],
  parameters: {
    layout: 'centered'
  }
};
export const Default = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
Default.args = {
  threat: {
    fixable: {
      fixer: 'edit'
    }
  },
  onClick: () => alert('Fixer callback triggered') 
};
export const DeletePlugin = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
DeletePlugin.args = {
  threat: {
    fixable: {
      fixer: 'delete'
    },
    extension: {
      type: 'plugins'
    }
  },
  onClick: () => alert('Delete fixer callback triggered') 
};
export const DeleteTheme = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
DeleteTheme.args = {
  threat: {
    fixable: {
      fixer: 'delete'
    },
    extension: {
      type: 'themes'
    }
  },
  onClick: () => alert('Delete fixer callback triggered') 
};
export const DeleteDirectory = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
DeleteDirectory.args = {
  threat: {
    fixable: {
      fixer: 'delete'
    },
    filename: '/var/www/html/wp-content/uploads/'
  },
  onClick: () => alert('Delete fixer callback triggered') 
};
export const DeleteCoreFile = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
DeleteCoreFile.args = {
  threat: {
    fixable: {
      fixer: 'delete'
    },
    signature: 'Core.File.Modification',
    filename: '/var/www/html/wp-admin/index.php'
  },
  onClick: () => alert('Delete fixer callback triggered') 
};
export const DeleteFile = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
DeleteFile.args = {
  threat: {
    fixable: {
      fixer: 'delete'
    },
    filename: '/var/www/html/wp-content/uploads/jptt_eicar.php'
  },
  onClick: () => alert('Delete fixer callback triggered') 
};
export const Update = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
Update.args = {
  threat: {
    fixable: {
      fixer: 'update'
    }
  },
  onClick: () => alert('Update fixer callback triggered') 
};
export const ReplaceSaltKeys = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
ReplaceSaltKeys.args = {
  threat: {
    fixable: {
      fixer: 'replace'
    },
    signature: 'php_hardening_WP_Config_NoSalts_001'
  },
  onClick: () => alert('Replace fixer callback triggered') 
};
export const ReplaceCoreFile = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
ReplaceCoreFile.args = {
  threat: {
    fixable: {
      fixer: 'replace'
    },
    signature: 'Core.File.Modification',
    filename: '/var/www/html/wp-admin/index.php'
  },
  onClick: () => alert('Replace fixer callback triggered') 
};
export const ReplaceFile = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
ReplaceFile.args = {
  threat: {
    fixable: {
      fixer: 'replace'
    },
    filename: '/var/www/html/wp-content/uploads/jptt_eicar.php'
  },
  onClick: () => alert('Replace fixer callback triggered') 
};
export const Loading = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
Loading.args = {
  threat: {
    fixable: {
      fixer: 'update'
    },
    fixer: {
      status: 'in_progress'
    }
  },
  onClick: () => alert('In progress fixer callback triggered') 
};
export const StaleFixer = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
StaleFixer.args = {
  threat: {
    fixable: {
      fixer: 'update'
    },
    fixer: {
      status: 'in_progress',
      lastUpdated: new Date('1999-01-01').toISOString()
    }
  },
  onClick: () => alert('Stale fixer callback triggered.') 
};
export const ErrorFixer = args => /*#__PURE__*/_jsx(ThreatFixerButton, {
  ...args
});
ErrorFixer.args = {
  threat: {
    fixable: {
      fixer: 'update'
    },
    fixer: {
      error: 'error'
    }
  },
  onClick: () => alert('Error fixer callback triggered.') 
};`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},"delete-plugin":{startLoc:{col:28,line:27},endLoc:{col:2,line:29},startBody:{col:28,line:27},endBody:{col:2,line:29}},"delete-theme":{startLoc:{col:27,line:41},endLoc:{col:2,line:43},startBody:{col:27,line:41},endBody:{col:2,line:43}},"delete-directory":{startLoc:{col:31,line:55},endLoc:{col:2,line:57},startBody:{col:31,line:55},endBody:{col:2,line:57}},"delete-core-file":{startLoc:{col:30,line:67},endLoc:{col:2,line:69},startBody:{col:30,line:67},endBody:{col:2,line:69}},"delete-file":{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}},update:{startLoc:{col:22,line:92},endLoc:{col:2,line:94},startBody:{col:22,line:92},endBody:{col:2,line:94}},"replace-salt-keys":{startLoc:{col:31,line:103},endLoc:{col:2,line:105},startBody:{col:31,line:103},endBody:{col:2,line:105}},"replace-core-file":{startLoc:{col:31,line:115},endLoc:{col:2,line:117},startBody:{col:31,line:115},endBody:{col:2,line:117}},"replace-file":{startLoc:{col:27,line:128},endLoc:{col:2,line:130},startBody:{col:27,line:128},endBody:{col:2,line:130}},loading:{startLoc:{col:23,line:140},endLoc:{col:2,line:142},startBody:{col:23,line:140},endBody:{col:2,line:142}},"stale-fixer":{startLoc:{col:26,line:154},endLoc:{col:2,line:156},startBody:{col:26,line:154},endBody:{col:2,line:156}},"error-fixer":{startLoc:{col:26,line:169},endLoc:{col:2,line:171},startBody:{col:26,line:169},endBody:{col:2,line:171}}}},layout:"centered"}},n=e=>(0,t.jsx)(r.A,{...e});n.args={threat:{fixable:{fixer:"edit"}},onClick:()=>alert("Fixer callback triggered")};const a=e=>(0,t.jsx)(r.A,{...e});a.args={threat:{fixable:{fixer:"delete"},extension:{type:"plugins"}},onClick:()=>alert("Delete fixer callback triggered")};const o=e=>(0,t.jsx)(r.A,{...e});o.args={threat:{fixable:{fixer:"delete"},extension:{type:"themes"}},onClick:()=>alert("Delete fixer callback triggered")};const i=e=>(0,t.jsx)(r.A,{...e});i.args={threat:{fixable:{fixer:"delete"},filename:"/var/www/html/wp-content/uploads/"},onClick:()=>alert("Delete fixer callback triggered")};const l=e=>(0,t.jsx)(r.A,{...e});l.args={threat:{fixable:{fixer:"delete"},signature:"Core.File.Modification",filename:"/var/www/html/wp-admin/index.php"},onClick:()=>alert("Delete fixer callback triggered")};const s=e=>(0,t.jsx)(r.A,{...e});s.args={threat:{fixable:{fixer:"delete"},filename:"/var/www/html/wp-content/uploads/jptt_eicar.php"},onClick:()=>alert("Delete fixer callback triggered")};const c=e=>(0,t.jsx)(r.A,{...e});c.args={threat:{fixable:{fixer:"update"}},onClick:()=>alert("Update fixer callback triggered")};const d=e=>(0,t.jsx)(r.A,{...e});d.args={threat:{fixable:{fixer:"replace"},signature:"php_hardening_WP_Config_NoSalts_001"},onClick:()=>alert("Replace fixer callback triggered")};const p=e=>(0,t.jsx)(r.A,{...e});p.args={threat:{fixable:{fixer:"replace"},signature:"Core.File.Modification",filename:"/var/www/html/wp-admin/index.php"},onClick:()=>alert("Replace fixer callback triggered")};const x=e=>(0,t.jsx)(r.A,{...e});x.args={threat:{fixable:{fixer:"replace"},filename:"/var/www/html/wp-content/uploads/jptt_eicar.php"},onClick:()=>alert("Replace fixer callback triggered")};const g=e=>(0,t.jsx)(r.A,{...e});g.args={threat:{fixable:{fixer:"update"},fixer:{status:"in_progress"}},onClick:()=>alert("In progress fixer callback triggered")};const _=e=>(0,t.jsx)(r.A,{...e});_.args={threat:{fixable:{fixer:"update"},fixer:{status:"in_progress",lastUpdated:new Date("1999-01-01").toISOString()}},onClick:()=>alert("Stale fixer callback triggered.")};const f=e=>(0,t.jsx)(r.A,{...e});f.args={threat:{fixable:{fixer:"update"},fixer:{error:"error"}},onClick:()=>alert("Error fixer callback triggered.")};const S=["Default","DeletePlugin","DeleteTheme","DeleteDirectory","DeleteCoreFile","DeleteFile","Update","ReplaceSaltKeys","ReplaceCoreFile","ReplaceFile","Loading","StaleFixer","ErrorFixer"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...n.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...o.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...i.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...l.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...c.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...p.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...x.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",..._.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...f.parameters?.docs?.source}}};try{stories.displayName="stories",stories.__docgenInfo={description:"Threat Fixer Button component.",displayName:"stories",props:{threat:{defaultValue:null,description:"",name:"threat",required:!0,type:{name:"Threat"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(items: Threat[]) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#stories"]={docgenInfo:stories.__docgenInfo,name:"stories",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#stories"})}catch{}try{n.displayName="Default",n.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#Default"]={docgenInfo:n.__docgenInfo,name:"Default",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#Default"})}catch{}try{a.displayName="DeletePlugin",a.__docgenInfo={description:"",displayName:"DeletePlugin",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeletePlugin"]={docgenInfo:a.__docgenInfo,name:"DeletePlugin",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeletePlugin"})}catch{}try{o.displayName="DeleteTheme",o.__docgenInfo={description:"",displayName:"DeleteTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteTheme"]={docgenInfo:o.__docgenInfo,name:"DeleteTheme",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteTheme"})}catch{}try{i.displayName="DeleteDirectory",i.__docgenInfo={description:"",displayName:"DeleteDirectory",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteDirectory"]={docgenInfo:i.__docgenInfo,name:"DeleteDirectory",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteDirectory"})}catch{}try{l.displayName="DeleteCoreFile",l.__docgenInfo={description:"",displayName:"DeleteCoreFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteCoreFile"]={docgenInfo:l.__docgenInfo,name:"DeleteCoreFile",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteCoreFile"})}catch{}try{s.displayName="DeleteFile",s.__docgenInfo={description:"",displayName:"DeleteFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteFile"]={docgenInfo:s.__docgenInfo,name:"DeleteFile",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#DeleteFile"})}catch{}try{c.displayName="Update",c.__docgenInfo={description:"",displayName:"Update",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#Update"]={docgenInfo:c.__docgenInfo,name:"Update",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#Update"})}catch{}try{d.displayName="ReplaceSaltKeys",d.__docgenInfo={description:"",displayName:"ReplaceSaltKeys",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ReplaceSaltKeys"]={docgenInfo:d.__docgenInfo,name:"ReplaceSaltKeys",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ReplaceSaltKeys"})}catch{}try{p.displayName="ReplaceCoreFile",p.__docgenInfo={description:"",displayName:"ReplaceCoreFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ReplaceCoreFile"]={docgenInfo:p.__docgenInfo,name:"ReplaceCoreFile",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ReplaceCoreFile"})}catch{}try{x.displayName="ReplaceFile",x.__docgenInfo={description:"",displayName:"ReplaceFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ReplaceFile"]={docgenInfo:x.__docgenInfo,name:"ReplaceFile",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ReplaceFile"})}catch{}try{g.displayName="Loading",g.__docgenInfo={description:"",displayName:"Loading",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#Loading"]={docgenInfo:g.__docgenInfo,name:"Loading",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#Loading"})}catch{}try{_.displayName="StaleFixer",_.__docgenInfo={description:"",displayName:"StaleFixer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#StaleFixer"]={docgenInfo:_.__docgenInfo,name:"StaleFixer",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#StaleFixer"})}catch{}try{f.displayName="ErrorFixer",f.__docgenInfo={description:"",displayName:"ErrorFixer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ErrorFixer"]={docgenInfo:f.__docgenInfo,name:"ErrorFixer",path:"../scan/src/components/threat-fixer-button/stories/index.stories.tsx#ErrorFixer"})}catch{}}}]);
