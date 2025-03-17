"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1486],{"../components/components/threat-fixer-button/stories/index.stories.tsx":(E,g,t)=>{t.r(g),t.d(g,{Default:()=>l,DeleteCoreFile:()=>y,DeleteDirectory:()=>u,DeleteFile:()=>h,DeletePlugin:()=>_,DeleteTheme:()=>x,ErrorFixer:()=>i,Loading:()=>b,ReplaceCoreFile:()=>e,ReplaceFile:()=>s,ReplaceSaltKeys:()=>p,StaleFixer:()=>m,Update:()=>d,__namedExportsOrder:()=>S,default:()=>c});var r=t("../components/components/threat-fixer-button/index.tsx"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`import ThreatFixerButton from '../index.js';

export default {
	title: 'JS Packages/Components/Threat Fixer Button',
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
`,o={Default:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},DeletePlugin:{startLoc:{col:28,line:27},endLoc:{col:2,line:29},startBody:{col:28,line:27},endBody:{col:2,line:29}},DeleteTheme:{startLoc:{col:27,line:41},endLoc:{col:2,line:43},startBody:{col:27,line:41},endBody:{col:2,line:43}},DeleteDirectory:{startLoc:{col:31,line:55},endLoc:{col:2,line:57},startBody:{col:31,line:55},endBody:{col:2,line:57}},DeleteCoreFile:{startLoc:{col:30,line:67},endLoc:{col:2,line:69},startBody:{col:30,line:67},endBody:{col:2,line:69}},DeleteFile:{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}},Update:{startLoc:{col:22,line:92},endLoc:{col:2,line:94},startBody:{col:22,line:92},endBody:{col:2,line:94}},ReplaceSaltKeys:{startLoc:{col:31,line:103},endLoc:{col:2,line:105},startBody:{col:31,line:103},endBody:{col:2,line:105}},ReplaceCoreFile:{startLoc:{col:31,line:115},endLoc:{col:2,line:117},startBody:{col:31,line:115},endBody:{col:2,line:117}},ReplaceFile:{startLoc:{col:27,line:128},endLoc:{col:2,line:130},startBody:{col:27,line:128},endBody:{col:2,line:130}},Loading:{startLoc:{col:23,line:140},endLoc:{col:2,line:142},startBody:{col:23,line:140},endBody:{col:2,line:142}},StaleFixer:{startLoc:{col:26,line:154},endLoc:{col:2,line:156},startBody:{col:26,line:154},endBody:{col:2,line:156}},ErrorFixer:{startLoc:{col:26,line:169},endLoc:{col:2,line:171},startBody:{col:26,line:169},endBody:{col:2,line:171}}};const c={title:"JS Packages/Components/Threat Fixer Button",component:r.A,decorators:[n=>(0,a.jsx)("div",{style:{height:"175px"},children:(0,a.jsx)(n,{})})],parameters:{storySource:{source:`import ThreatFixerButton from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Threat Fixer Button',
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
};`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},"delete-plugin":{startLoc:{col:28,line:27},endLoc:{col:2,line:29},startBody:{col:28,line:27},endBody:{col:2,line:29}},"delete-theme":{startLoc:{col:27,line:41},endLoc:{col:2,line:43},startBody:{col:27,line:41},endBody:{col:2,line:43}},"delete-directory":{startLoc:{col:31,line:55},endLoc:{col:2,line:57},startBody:{col:31,line:55},endBody:{col:2,line:57}},"delete-core-file":{startLoc:{col:30,line:67},endLoc:{col:2,line:69},startBody:{col:30,line:67},endBody:{col:2,line:69}},"delete-file":{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}},update:{startLoc:{col:22,line:92},endLoc:{col:2,line:94},startBody:{col:22,line:92},endBody:{col:2,line:94}},"replace-salt-keys":{startLoc:{col:31,line:103},endLoc:{col:2,line:105},startBody:{col:31,line:103},endBody:{col:2,line:105}},"replace-core-file":{startLoc:{col:31,line:115},endLoc:{col:2,line:117},startBody:{col:31,line:115},endBody:{col:2,line:117}},"replace-file":{startLoc:{col:27,line:128},endLoc:{col:2,line:130},startBody:{col:27,line:128},endBody:{col:2,line:130}},loading:{startLoc:{col:23,line:140},endLoc:{col:2,line:142},startBody:{col:23,line:140},endBody:{col:2,line:142}},"stale-fixer":{startLoc:{col:26,line:154},endLoc:{col:2,line:156},startBody:{col:26,line:154},endBody:{col:2,line:156}},"error-fixer":{startLoc:{col:26,line:169},endLoc:{col:2,line:171},startBody:{col:26,line:169},endBody:{col:2,line:171}}}},layout:"centered"}},l=n=>(0,a.jsx)(r.A,{...n});l.args={threat:{fixable:{fixer:"edit"}},onClick:()=>alert("Fixer callback triggered")};const _=n=>(0,a.jsx)(r.A,{...n});_.args={threat:{fixable:{fixer:"delete"},extension:{type:"plugins"}},onClick:()=>alert("Delete fixer callback triggered")};const x=n=>(0,a.jsx)(r.A,{...n});x.args={threat:{fixable:{fixer:"delete"},extension:{type:"themes"}},onClick:()=>alert("Delete fixer callback triggered")};const u=n=>(0,a.jsx)(r.A,{...n});u.args={threat:{fixable:{fixer:"delete"},filename:"/var/www/html/wp-content/uploads/"},onClick:()=>alert("Delete fixer callback triggered")};const y=n=>(0,a.jsx)(r.A,{...n});y.args={threat:{fixable:{fixer:"delete"},signature:"Core.File.Modification",filename:"/var/www/html/wp-admin/index.php"},onClick:()=>alert("Delete fixer callback triggered")};const h=n=>(0,a.jsx)(r.A,{...n});h.args={threat:{fixable:{fixer:"delete"},filename:"/var/www/html/wp-content/uploads/jptt_eicar.php"},onClick:()=>alert("Delete fixer callback triggered")};const d=n=>(0,a.jsx)(r.A,{...n});d.args={threat:{fixable:{fixer:"update"}},onClick:()=>alert("Update fixer callback triggered")};const p=n=>(0,a.jsx)(r.A,{...n});p.args={threat:{fixable:{fixer:"replace"},signature:"php_hardening_WP_Config_NoSalts_001"},onClick:()=>alert("Replace fixer callback triggered")};const e=n=>(0,a.jsx)(r.A,{...n});e.args={threat:{fixable:{fixer:"replace"},signature:"Core.File.Modification",filename:"/var/www/html/wp-admin/index.php"},onClick:()=>alert("Replace fixer callback triggered")};const s=n=>(0,a.jsx)(r.A,{...n});s.args={threat:{fixable:{fixer:"replace"},filename:"/var/www/html/wp-content/uploads/jptt_eicar.php"},onClick:()=>alert("Replace fixer callback triggered")};const b=n=>(0,a.jsx)(r.A,{...n});b.args={threat:{fixable:{fixer:"update"},fixer:{status:"in_progress"}},onClick:()=>alert("In progress fixer callback triggered")};const m=n=>(0,a.jsx)(r.A,{...n});m.args={threat:{fixable:{fixer:"update"},fixer:{status:"in_progress",lastUpdated:new Date("1999-01-01").toISOString()}},onClick:()=>alert("Stale fixer callback triggered.")};const i=n=>(0,a.jsx)(r.A,{...n});i.args={threat:{fixable:{fixer:"update"},fixer:{error:"error"}},onClick:()=>alert("Error fixer callback triggered.")};const S=["Default","DeletePlugin","DeleteTheme","DeleteDirectory","DeleteCoreFile","DeleteFile","Update","ReplaceSaltKeys","ReplaceCoreFile","ReplaceFile","Loading","StaleFixer","ErrorFixer"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...l.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",..._.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...x.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...u.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...y.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...h.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...p.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...e.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...s.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...b.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...m.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...i.parameters?.docs?.source}}};try{l.displayName="Default",l.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#Default"]={docgenInfo:l.__docgenInfo,name:"Default",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#Default"})}catch{}try{_.displayName="DeletePlugin",_.__docgenInfo={description:"",displayName:"DeletePlugin",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeletePlugin"]={docgenInfo:_.__docgenInfo,name:"DeletePlugin",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeletePlugin"})}catch{}try{x.displayName="DeleteTheme",x.__docgenInfo={description:"",displayName:"DeleteTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteTheme"]={docgenInfo:x.__docgenInfo,name:"DeleteTheme",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteTheme"})}catch{}try{u.displayName="DeleteDirectory",u.__docgenInfo={description:"",displayName:"DeleteDirectory",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteDirectory"]={docgenInfo:u.__docgenInfo,name:"DeleteDirectory",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteDirectory"})}catch{}try{y.displayName="DeleteCoreFile",y.__docgenInfo={description:"",displayName:"DeleteCoreFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteCoreFile"]={docgenInfo:y.__docgenInfo,name:"DeleteCoreFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteCoreFile"})}catch{}try{h.displayName="DeleteFile",h.__docgenInfo={description:"",displayName:"DeleteFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteFile"]={docgenInfo:h.__docgenInfo,name:"DeleteFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteFile"})}catch{}try{d.displayName="Update",d.__docgenInfo={description:"",displayName:"Update",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#Update"]={docgenInfo:d.__docgenInfo,name:"Update",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#Update"})}catch{}try{p.displayName="ReplaceSaltKeys",p.__docgenInfo={description:"",displayName:"ReplaceSaltKeys",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceSaltKeys"]={docgenInfo:p.__docgenInfo,name:"ReplaceSaltKeys",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceSaltKeys"})}catch{}try{e.displayName="ReplaceCoreFile",e.__docgenInfo={description:"",displayName:"ReplaceCoreFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceCoreFile"]={docgenInfo:e.__docgenInfo,name:"ReplaceCoreFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceCoreFile"})}catch{}try{s.displayName="ReplaceFile",s.__docgenInfo={description:"",displayName:"ReplaceFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceFile"]={docgenInfo:s.__docgenInfo,name:"ReplaceFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceFile"})}catch{}try{b.displayName="Loading",b.__docgenInfo={description:"",displayName:"Loading",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#Loading"]={docgenInfo:b.__docgenInfo,name:"Loading",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#Loading"})}catch{}try{m.displayName="StaleFixer",m.__docgenInfo={description:"",displayName:"StaleFixer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#StaleFixer"]={docgenInfo:m.__docgenInfo,name:"StaleFixer",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#StaleFixer"})}catch{}try{i.displayName="ErrorFixer",i.__docgenInfo={description:"",displayName:"ErrorFixer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ErrorFixer"]={docgenInfo:i.__docgenInfo,name:"ErrorFixer",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ErrorFixer"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(E,g,t)=>{t.d(g,{Ay:()=>b});var r=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=t("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),f=t("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),c=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function l(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const _=(0,f.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,a.A)("svg",{target:"ea4tfvq2"})("width:",o.A.spinnerSize,"px;height:",o.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",c.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),u={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},y=(0,a.A)("circle",{target:"ea4tfvq1"})(u,";stroke:",c.l.gray[300],";"),h=(0,a.A)("path",{target:"ea4tfvq0"})(u,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",_,";");var d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function e({className:m,...i},S){return(0,p.jsxs)(x,{className:(0,r.A)("components-spinner",m),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...i,ref:S,children:[(0,p.jsx)(y,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,p.jsx)(h,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const b=(0,d.forwardRef)(e)},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(E,g,t)=>{t.d(g,{A:()=>f});var r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a({icon:o,size:c=24,...l},_){return(0,r.cloneElement)(o,{width:c,height:c,...l,ref:_})}const f=(0,r.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(E,g,t)=>{t.d(g,{A:()=>o});var r=t("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,a.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(r.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(E,g,t)=>{t.d(g,{A:()=>i});var r=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),f=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),_=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=t.n(u),h=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),d={};d.insert="head",d.singleton=!1;var p=y()(h.A,d);const e=h.A.locals||{};var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=o.__,m=(0,x.forwardRef)((S,n)=>{const{children:A,variant:v="primary",size:w="normal",weight:k="bold",icon:j,iconSize:D,disabled:C,isDestructive:B,isLoading:R,isExternalLink:O,className:F,text:L,fullWidth:P,...T}=S,I=(0,_.A)(e.button,F,{[e.normal]:w==="normal",[e.small]:w==="small",[e.icon]:!!j,[e.loading]:R,[e.regular]:k==="regular",[e["full-width"]]:P,[e["is-icon-button"]]:!!j&&!A});T.ref=n;const U=w==="normal"?20:16,K=O&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{size:U,icon:l.A,className:e["external-icon"]}),(0,s.jsx)(r.A,{as:"span",children:b("(opens in a new tab)","jetpack-components")})]}),N=O?"_blank":void 0,M=A?.[0]&&A[0]!==null&&A?.[0]?.props?.className!=="components-tooltip";return(0,s.jsxs)(a.Ay,{target:N,variant:v,className:(0,_.A)(I,{"has-text":!!j&&M}),icon:O?void 0:j,iconSize:D,disabled:C,"aria-disabled":C,isDestructive:B,text:L,...T,children:[R&&(0,s.jsx)(f.Ay,{}),(0,s.jsx)("span",{children:A}),K]})});m.displayName="Button";const i=m;try{m.displayName="Button",m.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/threat-fixer-button/index.tsx":(E,g,t)=>{t.d(g,{A:()=>e});var r=t("../scan/src/index.ts"),a=t("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),f=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),c=t("../components/components/button/index.tsx"),l=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=t.n(l),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-fixer-button/styles.module.scss"),u={};u.insert="head",u.singleton=!1;var y=_()(x.A,u);const h=x.A.locals||{};var d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=o.__;function e({threat:s,className:b,onClick:m}){const i=(0,f.useMemo)(()=>(0,r.wk)(s.fixer),[s.fixer]),S=(0,f.useMemo)(()=>s.fixable?i.error?p("An error occurred auto-fixing this threat.","jetpack-components"):i.stale?p("The auto-fixer is taking longer than expected.","jetpack-components"):i.inProgress?p("An auto-fixer is in progress.","jetpack-components"):(0,r.dK)(s):null,[s,i]),n=(0,f.useMemo)(()=>s.fixable?i.error?p("Error","jetpack-components"):(0,r.XI)(s):null,[s,i.error]),A=(0,f.useCallback)(v=>{v.stopPropagation(),m([s])},[m,s]);return s.fixable?(0,d.jsx)("div",{children:(0,d.jsx)(a.Ay,{className:h.tooltip,text:S,children:(0,d.jsx)(c.A,{size:"small",weight:"regular",variant:"secondary",onClick:A,children:n,className:b,isLoading:i.inProgress,isDestructive:s.fixable&&s.fixable.fixer==="delete"||i.error||i.stale,style:{minWidth:"72px"}})})}):null}try{threatfixerbutton.displayName="threatfixerbutton",threatfixerbutton.__docgenInfo={description:"Threat Fixer Button component.",displayName:"threatfixerbutton",props:{threat:{defaultValue:null,description:"",name:"threat",required:!0,type:{name:"Threat"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(items: Threat[]) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/index.tsx#threatfixerbutton"]={docgenInfo:threatfixerbutton.__docgenInfo,name:"threatfixerbutton",path:"../components/components/threat-fixer-button/index.tsx#threatfixerbutton"})}catch{}},"../scan/src/index.ts":(E,g,t)=>{t.d(g,{$m:()=>d,XI:()=>h,dK:()=>p,wk:()=>y,ni:()=>c});var r=t("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js");const a="https://jetpack.com/contact-support/?rel=support",f=1e3*60*60*24,o=r.__,c=e=>e.signature==="Vulnerable.WP.Core"?"core":e.extension?e.extension.type:e.filename?"file":null,l=e=>{const s=new Date,b=new Date(e);return s.getTime()-b.getTime()>=f},_=e=>!!("error"in e&&e.error),x=e=>"status"in e&&e.status==="in_progress",u=e=>x(e)&&"lastUpdated"in e&&!!l(e.lastUpdated),y=e=>({inProgress:e&&x(e),error:e&&_(e),stale:e&&u(e)}),h=e=>{switch(e.fixable&&e.fixable.fixer){case"delete":return o("Delete","jetpack-scan");case"update":return o("Update","jetpack-scan");case"replace":case"rollback":return o("Replace","jetpack-scan");default:return o("Auto-fix","jetpack-scan")}},d=e=>{switch(e.fixable&&e.fixable.fixer){case"delete":if(e.filename)return o("Delete file","jetpack-scan");if(e.extension?.type==="plugins")return o("Delete plugin from site","jetpack-scan");if(e.extension?.type==="themes")return o("Delete theme from site","jetpack-scan");break;case"update":return e.extension?.type==="plugins"?o("Update plugin to newer version","jetpack-scan"):e.extension?.type==="themes"?o("Update theme to newer version","jetpack-scan"):o("Update","jetpack-scan");case"replace":case"rollback":if(e.filename)return o("Replace from backup","jetpack-scan");if(e.signature==="php_hardening_WP_Config_NoSalts_001")return o("Replace default salts","jetpack-scan");break;default:return o("Auto-fix","jetpack-scan")}},p=e=>{switch(e.fixable&&e.fixable.fixer){case"delete":if(e.filename)return e.filename.endsWith("/")?o("Delete the directory that the infected file is in.","jetpack-scan"):e.signature==="Core.File.Modification"?o("Delete the unexpected file in a core WordPress directory.","jetpack-scan"):o("Delete the infected file.","jetpack-scan");if(e.extension?.type==="plugins")return o("Delete the plugin directory to fix the threat.","jetpack-scan");if(e.extension?.type==="themes")return o("Delete the theme directory to fix the threat.","jetpack-scan");break;case"update":return e.fixedIn&&e.extension.name?(0,r.sprintf)(o("Update %1$s to version %2$s","jetpack-scan"),e.extension.name,e.fixedIn):o("Upgrade the plugin or theme to a newer version.","jetpack-scan");case"replace":case"rollback":if(e.filename)return e.signature==="Core.File.Modification"?o("Replace the modified core WordPress file with the original clean version from the WordPress source code.","jetpack-scan"):o("Replace the infected file with a previously backed up version that is clean.","jetpack-scan");if(e.signature==="php_hardening_WP_Config_NoSalts_001")return o("Replace the default salt keys in wp-config.php with unique ones.","jetpack-scan");break;default:return o("Jetpack will auto-fix the threat.","jetpack-scan")}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(E,g,t)=>{t.d(g,{A:()=>l});var r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(r),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=t.n(f),c=o()(a());c.push([E.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),c.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const l=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-fixer-button/styles.module.scss":(E,g,t)=>{t.d(g,{A:()=>l});var r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(r),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=t.n(f),c=o()(a());c.push([E.id,".xi9Uqfg8ad8MwgacY7SU{color:inherit}.xi9Uqfg8ad8MwgacY7SU:focus,.xi9Uqfg8ad8MwgacY7SU:hover{color:inherit;box-shadow:none}.VUZaWLbipnhHzAnagcxN{margin-top:var(--spacing-base);max-width:240px;border-radius:4px;text-align:left}",""]),c.locals={"support-link":"xi9Uqfg8ad8MwgacY7SU",tooltip:"VUZaWLbipnhHzAnagcxN"};const l=c}}]);
