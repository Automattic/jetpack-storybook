(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1486],{"../components/components/threat-fixer-button/stories/index.stories.tsx":(E,m,t)=>{"use strict";t.r(m),t.d(m,{Default:()=>l,DeleteCoreFile:()=>y,DeleteDirectory:()=>d,DeleteFile:()=>g,DeletePlugin:()=>u,DeleteTheme:()=>x,ErrorFixer:()=>i,Loading:()=>b,ReplaceCoreFile:()=>a,ReplaceFile:()=>e,ReplaceSaltKeys:()=>_,StaleFixer:()=>c,Update:()=>p,__namedExportsOrder:()=>S,default:()=>n});var s=t("../components/components/threat-fixer-button/index.tsx"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`import ThreatFixerButton from '../index.js';

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
`,h={Default:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},DeletePlugin:{startLoc:{col:28,line:27},endLoc:{col:2,line:29},startBody:{col:28,line:27},endBody:{col:2,line:29}},DeleteTheme:{startLoc:{col:27,line:41},endLoc:{col:2,line:43},startBody:{col:27,line:41},endBody:{col:2,line:43}},DeleteDirectory:{startLoc:{col:31,line:55},endLoc:{col:2,line:57},startBody:{col:31,line:55},endBody:{col:2,line:57}},DeleteCoreFile:{startLoc:{col:30,line:67},endLoc:{col:2,line:69},startBody:{col:30,line:67},endBody:{col:2,line:69}},DeleteFile:{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}},Update:{startLoc:{col:22,line:92},endLoc:{col:2,line:94},startBody:{col:22,line:92},endBody:{col:2,line:94}},ReplaceSaltKeys:{startLoc:{col:31,line:103},endLoc:{col:2,line:105},startBody:{col:31,line:103},endBody:{col:2,line:105}},ReplaceCoreFile:{startLoc:{col:31,line:115},endLoc:{col:2,line:117},startBody:{col:31,line:115},endBody:{col:2,line:117}},ReplaceFile:{startLoc:{col:27,line:128},endLoc:{col:2,line:130},startBody:{col:27,line:128},endBody:{col:2,line:130}},Loading:{startLoc:{col:23,line:140},endLoc:{col:2,line:142},startBody:{col:23,line:140},endBody:{col:2,line:142}},StaleFixer:{startLoc:{col:26,line:154},endLoc:{col:2,line:156},startBody:{col:26,line:154},endBody:{col:2,line:156}},ErrorFixer:{startLoc:{col:26,line:169},endLoc:{col:2,line:171},startBody:{col:26,line:169},endBody:{col:2,line:171}}};const n={title:"JS Packages/Components/Threat Fixer Button",component:s.A,decorators:[o=>(0,r.jsx)("div",{style:{height:"175px"},children:(0,r.jsx)(o,{})})],parameters:{storySource:{source:`import ThreatFixerButton from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:2,line:18},startBody:{col:23,line:16},endBody:{col:2,line:18}},"delete-plugin":{startLoc:{col:28,line:27},endLoc:{col:2,line:29},startBody:{col:28,line:27},endBody:{col:2,line:29}},"delete-theme":{startLoc:{col:27,line:41},endLoc:{col:2,line:43},startBody:{col:27,line:41},endBody:{col:2,line:43}},"delete-directory":{startLoc:{col:31,line:55},endLoc:{col:2,line:57},startBody:{col:31,line:55},endBody:{col:2,line:57}},"delete-core-file":{startLoc:{col:30,line:67},endLoc:{col:2,line:69},startBody:{col:30,line:67},endBody:{col:2,line:69}},"delete-file":{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}},update:{startLoc:{col:22,line:92},endLoc:{col:2,line:94},startBody:{col:22,line:92},endBody:{col:2,line:94}},"replace-salt-keys":{startLoc:{col:31,line:103},endLoc:{col:2,line:105},startBody:{col:31,line:103},endBody:{col:2,line:105}},"replace-core-file":{startLoc:{col:31,line:115},endLoc:{col:2,line:117},startBody:{col:31,line:115},endBody:{col:2,line:117}},"replace-file":{startLoc:{col:27,line:128},endLoc:{col:2,line:130},startBody:{col:27,line:128},endBody:{col:2,line:130}},loading:{startLoc:{col:23,line:140},endLoc:{col:2,line:142},startBody:{col:23,line:140},endBody:{col:2,line:142}},"stale-fixer":{startLoc:{col:26,line:154},endLoc:{col:2,line:156},startBody:{col:26,line:154},endBody:{col:2,line:156}},"error-fixer":{startLoc:{col:26,line:169},endLoc:{col:2,line:171},startBody:{col:26,line:169},endBody:{col:2,line:171}}}},layout:"centered"}},l=o=>(0,r.jsx)(s.A,{...o});l.args={threat:{fixable:{fixer:"edit"}},onClick:()=>alert("Fixer callback triggered")};const u=o=>(0,r.jsx)(s.A,{...o});u.args={threat:{fixable:{fixer:"delete"},extension:{type:"plugins"}},onClick:()=>alert("Delete fixer callback triggered")};const x=o=>(0,r.jsx)(s.A,{...o});x.args={threat:{fixable:{fixer:"delete"},extension:{type:"themes"}},onClick:()=>alert("Delete fixer callback triggered")};const d=o=>(0,r.jsx)(s.A,{...o});d.args={threat:{fixable:{fixer:"delete"},filename:"/var/www/html/wp-content/uploads/"},onClick:()=>alert("Delete fixer callback triggered")};const y=o=>(0,r.jsx)(s.A,{...o});y.args={threat:{fixable:{fixer:"delete"},signature:"Core.File.Modification",filename:"/var/www/html/wp-admin/index.php"},onClick:()=>alert("Delete fixer callback triggered")};const g=o=>(0,r.jsx)(s.A,{...o});g.args={threat:{fixable:{fixer:"delete"},filename:"/var/www/html/wp-content/uploads/jptt_eicar.php"},onClick:()=>alert("Delete fixer callback triggered")};const p=o=>(0,r.jsx)(s.A,{...o});p.args={threat:{fixable:{fixer:"update"}},onClick:()=>alert("Update fixer callback triggered")};const _=o=>(0,r.jsx)(s.A,{...o});_.args={threat:{fixable:{fixer:"replace"},signature:"php_hardening_WP_Config_NoSalts_001"},onClick:()=>alert("Replace fixer callback triggered")};const a=o=>(0,r.jsx)(s.A,{...o});a.args={threat:{fixable:{fixer:"replace"},signature:"Core.File.Modification",filename:"/var/www/html/wp-admin/index.php"},onClick:()=>alert("Replace fixer callback triggered")};const e=o=>(0,r.jsx)(s.A,{...o});e.args={threat:{fixable:{fixer:"replace"},filename:"/var/www/html/wp-content/uploads/jptt_eicar.php"},onClick:()=>alert("Replace fixer callback triggered")};const b=o=>(0,r.jsx)(s.A,{...o});b.args={threat:{fixable:{fixer:"update"},fixer:{status:"in_progress"}},onClick:()=>alert("In progress fixer callback triggered")};const c=o=>(0,r.jsx)(s.A,{...o});c.args={threat:{fixable:{fixer:"update"},fixer:{status:"in_progress",lastUpdated:new Date("1999-01-01").toISOString()}},onClick:()=>alert("Stale fixer callback triggered.")};const i=o=>(0,r.jsx)(s.A,{...o});i.args={threat:{fixable:{fixer:"update"},fixer:{error:"error"}},onClick:()=>alert("Error fixer callback triggered.")};const S=["Default","DeletePlugin","DeleteTheme","DeleteDirectory","DeleteCoreFile","DeleteFile","Update","ReplaceSaltKeys","ReplaceCoreFile","ReplaceFile","Loading","StaleFixer","ErrorFixer"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...u.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...x.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...d.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...y.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...g.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",..._.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...a.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...e.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...b.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...c.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <ThreatFixerButton {...args} />",...i.parameters?.docs?.source}}};try{l.displayName="Default",l.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#Default"]={docgenInfo:l.__docgenInfo,name:"Default",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#Default"})}catch{}try{u.displayName="DeletePlugin",u.__docgenInfo={description:"",displayName:"DeletePlugin",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeletePlugin"]={docgenInfo:u.__docgenInfo,name:"DeletePlugin",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeletePlugin"})}catch{}try{x.displayName="DeleteTheme",x.__docgenInfo={description:"",displayName:"DeleteTheme",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteTheme"]={docgenInfo:x.__docgenInfo,name:"DeleteTheme",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteTheme"})}catch{}try{d.displayName="DeleteDirectory",d.__docgenInfo={description:"",displayName:"DeleteDirectory",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteDirectory"]={docgenInfo:d.__docgenInfo,name:"DeleteDirectory",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteDirectory"})}catch{}try{y.displayName="DeleteCoreFile",y.__docgenInfo={description:"",displayName:"DeleteCoreFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteCoreFile"]={docgenInfo:y.__docgenInfo,name:"DeleteCoreFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteCoreFile"})}catch{}try{g.displayName="DeleteFile",g.__docgenInfo={description:"",displayName:"DeleteFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteFile"]={docgenInfo:g.__docgenInfo,name:"DeleteFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#DeleteFile"})}catch{}try{p.displayName="Update",p.__docgenInfo={description:"",displayName:"Update",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#Update"]={docgenInfo:p.__docgenInfo,name:"Update",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#Update"})}catch{}try{_.displayName="ReplaceSaltKeys",_.__docgenInfo={description:"",displayName:"ReplaceSaltKeys",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceSaltKeys"]={docgenInfo:_.__docgenInfo,name:"ReplaceSaltKeys",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceSaltKeys"})}catch{}try{a.displayName="ReplaceCoreFile",a.__docgenInfo={description:"",displayName:"ReplaceCoreFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceCoreFile"]={docgenInfo:a.__docgenInfo,name:"ReplaceCoreFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceCoreFile"})}catch{}try{e.displayName="ReplaceFile",e.__docgenInfo={description:"",displayName:"ReplaceFile",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceFile"]={docgenInfo:e.__docgenInfo,name:"ReplaceFile",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ReplaceFile"})}catch{}try{b.displayName="Loading",b.__docgenInfo={description:"",displayName:"Loading",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#Loading"]={docgenInfo:b.__docgenInfo,name:"Loading",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#Loading"})}catch{}try{c.displayName="StaleFixer",c.__docgenInfo={description:"",displayName:"StaleFixer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#StaleFixer"]={docgenInfo:c.__docgenInfo,name:"StaleFixer",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#StaleFixer"})}catch{}try{i.displayName="ErrorFixer",i.__docgenInfo={description:"",displayName:"ErrorFixer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/stories/index.stories.tsx#ErrorFixer"]={docgenInfo:i.__docgenInfo,name:"ErrorFixer",path:"../components/components/threat-fixer-button/stories/index.stories.tsx#ErrorFixer"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(E,m,t)=>{"use strict";t.d(m,{Ay:()=>b});var s=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=t("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),f=t("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),n=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function l(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const u=(0,f.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,r.A)("svg",{target:"ea4tfvq2"})("width:",h.A.spinnerSize,"px;height:",h.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",n.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),d={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},y=(0,r.A)("circle",{target:"ea4tfvq1"})(d,";stroke:",n.l.gray[300],";"),g=(0,r.A)("path",{target:"ea4tfvq0"})(d,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",u,";");var p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({className:c,...i},S){return(0,_.jsxs)(x,{className:(0,s.A)("components-spinner",c),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...i,ref:S,children:[(0,_.jsx)(y,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,_.jsx)(g,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const b=(0,p.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(E,m,t)=>{"use strict";t.d(m,{A:()=>f});var s=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r({icon:h,size:n=24,...l},u){return(0,s.cloneElement)(h,{width:n,height:n,...l,ref:u})}const f=(0,s.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(E,m,t)=>{"use strict";t.d(m,{A:()=>h});var s=t("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=(0,r.jsx)(s.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(s.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(E,m,t)=>{"use strict";t.d(m,{A:()=>i});var s=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),r=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),f=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),h=t("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),n=t("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),u=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=t.n(d),g=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),p={};p.insert="head",p.singleton=!1;var _=y()(g.A,p);const a=g.A.locals||{};var e=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=h.__,c=(0,x.forwardRef)((S,o)=>{const{children:A,variant:v="primary",size:w="normal",weight:D="bold",icon:j,iconSize:k,disabled:C,isDestructive:B,isLoading:T,isExternalLink:O,className:F,text:L,fullWidth:P,...R}=S,I=(0,u.A)(a.button,F,{[a.normal]:w==="normal",[a.small]:w==="small",[a.icon]:!!j,[a.loading]:T,[a.regular]:D==="regular",[a["full-width"]]:P,[a["is-icon-button"]]:!!j&&!A});R.ref=o;const U=w==="normal"?20:16,K=O&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.A,{size:U,icon:l.A,className:a["external-icon"]}),(0,e.jsx)(s.A,{as:"span",children:b("(opens in a new tab)","jetpack-components")})]}),N=O?"_blank":void 0,M=A?.[0]&&A[0]!==null&&A?.[0]?.props?.className!=="components-tooltip";return(0,e.jsxs)(r.Ay,{target:N,variant:v,className:(0,u.A)(I,{"has-text":!!j&&M}),icon:O?void 0:j,iconSize:k,disabled:C,"aria-disabled":C,isDestructive:B,text:L,...R,children:[T&&(0,e.jsx)(f.Ay,{}),(0,e.jsx)("span",{children:A}),K]})});c.displayName="Button";const i=c;try{c.displayName="Button",c.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:c.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/threat-fixer-button/index.tsx":(E,m,t)=>{"use strict";t.d(m,{A:()=>a});var s=t("../scan/src/index.ts"),r=t("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),f=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=t("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),n=t("../components/components/button/index.tsx"),l=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=t.n(l),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-fixer-button/styles.module.scss"),d={};d.insert="head",d.singleton=!1;var y=u()(x.A,d);const g=x.A.locals||{};var p=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=h.__;function a({threat:e,className:b,onClick:c}){const i=(0,f.useMemo)(()=>(0,s.getFixerState)(e.fixer),[e.fixer]),S=(0,f.useMemo)(()=>e.fixable?i.error?_("An error occurred auto-fixing this threat.","jetpack-components"):i.stale?_("The auto-fixer is taking longer than expected.","jetpack-components"):i.inProgress?_("An auto-fixer is in progress.","jetpack-components"):(0,s.getFixerDescription)(e):null,[e,i]),o=(0,f.useMemo)(()=>e.fixable?i.error?_("Error","jetpack-components"):(0,s.getFixerAction)(e):null,[e,i.error]),A=(0,f.useCallback)(v=>{v.stopPropagation(),c([e])},[c,e]);return e.fixable?(0,p.jsx)("div",{children:(0,p.jsx)(r.Ay,{className:g.tooltip,text:S,children:(0,p.jsx)(n.A,{size:"small",weight:"regular",variant:"secondary",onClick:A,children:o,className:b,isLoading:i.inProgress,isDestructive:e.fixable&&e.fixable.fixer==="delete"||i.error||i.stale,style:{minWidth:"72px"}})})}):null}try{threatfixerbutton.displayName="threatfixerbutton",threatfixerbutton.__docgenInfo={description:"Threat Fixer Button component.",displayName:"threatfixerbutton",props:{threat:{defaultValue:null,description:"",name:"threat",required:!0,type:{name:"Threat"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(items: Threat[]) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/threat-fixer-button/index.tsx#threatfixerbutton"]={docgenInfo:threatfixerbutton.__docgenInfo,name:"threatfixerbutton",path:"../components/components/threat-fixer-button/index.tsx#threatfixerbutton"})}catch{}},"../scan/src/index.ts":(E,m,t)=>{"use strict";t.d(m,{getDetailedFixerAction:()=>_,getFixerAction:()=>p,getFixerDescription:()=>a,getFixerState:()=>g,getThreatType:()=>l});var s=t("../scan/src/types/fixers.ts"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js");const f="https://jetpack.com/contact-support/?rel=support",h=1e3*60*60*24,n=r.__,l=e=>e.signature==="Vulnerable.WP.Core"?"core":e.extension?e.extension.type:e.filename?"file":null,u=e=>{const b=new Date,c=new Date(e);return b.getTime()-c.getTime()>=h},x=e=>!!("error"in e&&e.error),d=e=>"status"in e&&e.status==="in_progress",y=e=>d(e)&&"lastUpdated"in e&&!!u(e.lastUpdated),g=e=>({inProgress:e&&d(e),error:e&&x(e),stale:e&&y(e)}),p=e=>{switch(e.fixable&&e.fixable.fixer){case"delete":return n("Delete","jetpack-scan");case"update":return n("Update","jetpack-scan");case"replace":case"rollback":return n("Replace","jetpack-scan");default:return n("Auto-fix","jetpack-scan")}},_=e=>{switch(e.fixable&&e.fixable.fixer){case"delete":if(e.filename)return n("Delete file","jetpack-scan");if(e.extension?.type==="plugins")return n("Delete plugin from site","jetpack-scan");if(e.extension?.type==="themes")return n("Delete theme from site","jetpack-scan");break;case"update":return e.extension?.type==="plugins"?n("Update plugin to newer version","jetpack-scan"):e.extension?.type==="themes"?n("Update theme to newer version","jetpack-scan"):n("Update","jetpack-scan");case"replace":case"rollback":if(e.filename)return n("Replace from backup","jetpack-scan");if(e.signature==="php_hardening_WP_Config_NoSalts_001")return n("Replace default salts","jetpack-scan");break;default:return n("Auto-fix","jetpack-scan")}},a=e=>{switch(e.fixable&&e.fixable.fixer){case"delete":if(e.filename)return e.filename.endsWith("/")?n("Delete the directory that the infected file is in.","jetpack-scan"):e.signature==="Core.File.Modification"?n("Delete the unexpected file in a core WordPress directory.","jetpack-scan"):n("Delete the infected file.","jetpack-scan");if(e.extension?.type==="plugins")return n("Delete the plugin directory to fix the threat.","jetpack-scan");if(e.extension?.type==="themes")return n("Delete the theme directory to fix the threat.","jetpack-scan");break;case"update":return e.fixedIn&&e.extension.name?(0,r.sprintf)(n("Update %1$s to version %2$s","jetpack-scan"),e.extension.name,e.fixedIn):n("Upgrade the plugin or theme to a newer version.","jetpack-scan");case"replace":case"rollback":if(e.filename)return e.signature==="Core.File.Modification"?n("Replace the modified core WordPress file with the original clean version from the WordPress source code.","jetpack-scan"):n("Replace the infected file with a previously backed up version that is clean.","jetpack-scan");if(e.signature==="php_hardening_WP_Config_NoSalts_001")return n("Replace the default salt keys in wp-config.php with unique ones.","jetpack-scan");break;default:return n("Jetpack will auto-fix the threat.","jetpack-scan")}}},"../scan/src/types/fixers.ts":()=>{},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(E,m,t)=>{"use strict";t.d(m,{A:()=>l});var s=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(s),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=t.n(f),n=h()(r());n.push([E.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),n.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const l=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/threat-fixer-button/styles.module.scss":(E,m,t)=>{"use strict";t.d(m,{A:()=>l});var s=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(s),f=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),h=t.n(f),n=h()(r());n.push([E.id,".xi9Uqfg8ad8MwgacY7SU{color:inherit}.xi9Uqfg8ad8MwgacY7SU:focus,.xi9Uqfg8ad8MwgacY7SU:hover{color:inherit;box-shadow:none}.VUZaWLbipnhHzAnagcxN{margin-top:var(--spacing-base);max-width:240px;border-radius:4px;text-align:left}",""]),n.locals={"support-link":"xi9Uqfg8ad8MwgacY7SU",tooltip:"VUZaWLbipnhHzAnagcxN"};const l=n}}]);
