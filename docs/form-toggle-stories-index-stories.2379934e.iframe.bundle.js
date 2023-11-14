"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2633],{"../../plugins/protect/src/js/components/form-toggle/stories/index.stories.jsx":(f,i,e)=>{var j,O,w,x,B,y,P,S,F;e.r(i),e.d(i,{Default:()=>d,DisabledOff:()=>t,DisabledOn:()=>l,__namedExportsOrder:()=>Q,default:()=>v});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(g),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/form-toggle/styles.module.scss"),a={};a.insert="head",a.singleton=!1;var T=k()(u.Z,a);const _=u.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=({ariaLabel:m,checked:r=!1,className:b="",disabled:s=!1,id:A,onChange:h=()=>{},onKeyDown:V=()=>{},switchClassNames:E="",toggling:N})=>{const L=(0,o.useCallback)(c=>{s||h(c)},[s,h]),W=(0,o.useCallback)(c=>{s||((c.key==="Enter"||c.key===" ")&&(c.preventDefault(),h(c)),V(c))},[s,h,V]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{className:`${_["form-toggle"]} ${b} ${N?_["is-toggling"]:""}`,type:"checkbox",checked:r,readOnly:!0,disabled:s}),(0,n.jsx)("span",{className:`${_["form-toggle__switch"]} ${E}`,disabled:s,id:A,onClick:L,onKeyDown:W,role:"checkbox","aria-checked":r,"aria-label":m,tabIndex:s?-1:0})]})})};C.__docgenInfo={description:"",methods:[],displayName:"FormToggle",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},onKeyDown:{defaultValue:{value:"() => {}",computed:!1},required:!1},switchClassNames:{defaultValue:{value:"''",computed:!1},required:!1}}};const D=C;var M=`import React, { useCallback, useState } from 'react';
import FormToggle from '..';

export default {
	title: 'Plugins/Protect/FormToggle',
	component: FormToggle,
};

const Template = args => {
	const [ checked, setChecked ] = useState( args.checked );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return <FormToggle { ...args } checked={ checked } onChange={ handleChecked } />;
};

export const Default = Template.bind( {} );
Default.args = {
	checked: false,
	disabled: false,
};

export const DisabledOff = Template.bind( {} );
DisabledOff.args = {
	checked: false,
	disabled: true,
};

export const DisabledOn = Template.bind( {} );
DisabledOn.args = {
	checked: true,
	disabled: true,
};
`,Z={Default:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},DisabledOff:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},DisabledOn:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}}};const v={parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
import FormToggle from '..';
export default {
  title: 'Plugins/Protect/FormToggle',
  component: FormToggle
};
const Template = args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
};
export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false
};
export const DisabledOff = Template.bind({});
DisabledOff.args = {
  checked: false,
  disabled: true
};
export const DisabledOn = Template.bind({});
DisabledOn.args = {
  checked: true,
  disabled: true
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [checked, setChecked] = useState(args.checked);\\n  const handleChecked = useCallback(() => {\\n    setChecked(!checked);\\n  }, [checked]);\\n  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;\\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
DisabledOff.parameters = {
  ...DisabledOff.parameters,
  docs: {
    ...DisabledOff.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [checked, setChecked] = useState(args.checked);\\n  const handleChecked = useCallback(() => {\\n    setChecked(!checked);\\n  }, [checked]);\\n  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;\\n}",
      ...DisabledOff.parameters?.docs?.source
    }
  }
};
DisabledOn.parameters = {
  ...DisabledOn.parameters,
  docs: {
    ...DisabledOn.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [checked, setChecked] = useState(args.checked);\\n  const handleChecked = useCallback(() => {\\n    setChecked(!checked);\\n  }, [checked]);\\n  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;\\n}",
      ...DisabledOn.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},"disabled-off":{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},"disabled-on":{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}}}}},title:"Plugins/Protect/FormToggle",component:D},p=m=>{const[r,b]=(0,o.useState)(m.checked),s=(0,o.useCallback)(()=>{b(!r)},[r]);return(0,n.jsx)(D,{...m,checked:r,onChange:s})};p.displayName="Template";const d=p.bind({});d.args={checked:!1,disabled:!1};const t=p.bind({});t.args={checked:!1,disabled:!0};const l=p.bind({});l.args={checked:!0,disabled:!0},d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
}`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}},t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}},l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Q=["Default","DisabledOff","DisabledOn"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/form-toggle/styles.module.scss":(f,i,e)=>{e.d(i,{Z:()=>T});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),g=e.n(o),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(k),a=u()(g());a.push([f.id,'.P61AuJBQP6TjObbYT0Qg[type=checkbox]{display:none}.BDNWp0ZiFVcwV2Twt5ag{position:relative;display:inline-block;border:2px solid var(--jp-black);border-radius:100px;box-sizing:border-box;padding:2px;width:48px;height:24px;vertical-align:middle;outline:0;cursor:pointer;transition:all .4s ease,box-shadow 0s}.BDNWp0ZiFVcwV2Twt5ag:after{position:relative;display:block;content:"";width:16px;height:16px}.BDNWp0ZiFVcwV2Twt5ag:after{left:0;border-radius:50%;background:var(--jp-black);transition:all .2s ease}.P61AuJBQP6TjObbYT0Qg:checked+.BDNWp0ZiFVcwV2Twt5ag:after{left:22px}.P61AuJBQP6TjObbYT0Qg:checked:disabled+.BDNWp0ZiFVcwV2Twt5ag{border-color:var(--jp-black);background-color:var(--jp-black)}.P61AuJBQP6TjObbYT0Qg:checked:disabled+.BDNWp0ZiFVcwV2Twt5ag:after{background-color:var(--jp-white)}.P61AuJBQP6TjObbYT0Qg:checked:not(:disabled)+.BDNWp0ZiFVcwV2Twt5ag{border-color:var(--jp-green);background-color:var(--jp-green)}.P61AuJBQP6TjObbYT0Qg:checked:not(:disabled)+.BDNWp0ZiFVcwV2Twt5ag:after{background-color:var(--jp-white)}.P61AuJBQP6TjObbYT0Qg:disabled+span.BDNWp0ZiFVcwV2Twt5ag{opacity:.25;cursor:default}.P61AuJBQP6TjObbYT0Qg.bt6jtOwRdzH6c4nwmMsb+.BDNWp0ZiFVcwV2Twt5ag{border-radius:8px;width:24px;height:16px}.P61AuJBQP6TjObbYT0Qg.bt6jtOwRdzH6c4nwmMsb+.BDNWp0ZiFVcwV2Twt5ag:after{width:12px;height:12px}.P61AuJBQP6TjObbYT0Qg.bt6jtOwRdzH6c4nwmMsb:checked+.BDNWp0ZiFVcwV2Twt5ag:after{left:8px}',""]),a.locals={"form-toggle":"P61AuJBQP6TjObbYT0Qg","form-toggle__switch":"BDNWp0ZiFVcwV2Twt5ag","is-compact":"bt6jtOwRdzH6c4nwmMsb"};const T=a}}]);})();
