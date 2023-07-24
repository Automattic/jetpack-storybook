"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2633],{"../../plugins/protect/src/js/components/form-toggle/stories/index.stories.jsx":(T,i,e)=>{var O,w,y,x,B,P,S,F,V;e.r(i),e.d(i,{Default:()=>d,DisabledOff:()=>t,DisabledOn:()=>l,__namedExportsOrder:()=>Q,default:()=>N});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(k),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/form-toggle/styles.module.scss"),s={};s.insert="head",s.singleton=!1;var C=_()(u.Z,s);const b=u.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const D=h=>{let{ariaLabel:r,checked:m=!1,className:f="",disabled:a=!1,id:A,onChange:g=()=>{},onKeyDown:v=()=>{},switchClassNames:E="",toggling:L}=h;const W=(0,n.useCallback)(c=>{a||g(c)},[a,g]),M=(0,n.useCallback)(c=>{a||((c.key==="Enter"||c.key===" ")&&(c.preventDefault(),g(c)),v(c))},[a,g,v]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{className:`${b["form-toggle"]} ${f} ${L?b["is-toggling"]:""}`,type:"checkbox",checked:m,readOnly:!0,disabled:a}),(0,o.jsx)("span",{className:`${b["form-toggle__switch"]} ${E}`,disabled:a,id:A,onClick:W,onKeyDown:M,role:"checkbox","aria-checked":m,"aria-label":r,tabIndex:a?-1:0})]})})};D.__docgenInfo={description:"",methods:[],displayName:"FormToggle",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},onKeyDown:{defaultValue:{value:"() => {}",computed:!1},required:!1},switchClassNames:{defaultValue:{value:"''",computed:!1},required:!1}}};const j=D;var Z=`import React, { useCallback, useState } from 'react';
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
`,R={Default:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},DisabledOff:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},DisabledOn:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}}};const N={parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},"disabled-off":{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}},"disabled-on":{startLoc:{col:17,line:7},endLoc:{col:1,line:13},startBody:{col:17,line:7},endBody:{col:1,line:13}}}}},title:"Plugins/Protect/FormToggle",component:j},p=h=>{const[r,m]=(0,n.useState)(h.checked),f=(0,n.useCallback)(()=>{m(!r)},[r]);return(0,o.jsx)(j,{...h,checked:r,onChange:f})};p.displayName="Template";const d=p.bind({});d.args={checked:!1,disabled:!1};const t=p.bind({});t.args={checked:!1,disabled:!0};const l=p.bind({});l.args={checked:!0,disabled:!0},d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}},t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
}`,...(P=(B=t.parameters)==null?void 0:B.docs)==null?void 0:P.source}}},l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <FormToggle {...args} checked={checked} onChange={handleChecked} />;
}`,...(V=(F=l.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const Q=["Default","DisabledOff","DisabledOn"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/form-toggle/styles.module.scss":(T,i,e)=>{e.d(i,{Z:()=>C});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=e.n(n),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(_),s=u()(k());s.push([T.id,'.P61AuJBQP6TjObbYT0Qg[type=checkbox]{display:none}.BDNWp0ZiFVcwV2Twt5ag{position:relative;display:inline-block;border:2px solid var(--jp-black);border-radius:100px;box-sizing:border-box;padding:2px;width:48px;height:24px;vertical-align:middle;outline:0;cursor:pointer;transition:all .4s ease,box-shadow 0s}.BDNWp0ZiFVcwV2Twt5ag:after{position:relative;display:block;content:"";width:16px;height:16px}.BDNWp0ZiFVcwV2Twt5ag:after{left:0;border-radius:50%;background:var(--jp-black);transition:all .2s ease}.P61AuJBQP6TjObbYT0Qg:checked+.BDNWp0ZiFVcwV2Twt5ag:after{left:22px}.P61AuJBQP6TjObbYT0Qg:checked:disabled+.BDNWp0ZiFVcwV2Twt5ag{border-color:var(--jp-black);background-color:var(--jp-black)}.P61AuJBQP6TjObbYT0Qg:checked:disabled+.BDNWp0ZiFVcwV2Twt5ag:after{background-color:var(--jp-white)}.P61AuJBQP6TjObbYT0Qg:checked:not(:disabled)+.BDNWp0ZiFVcwV2Twt5ag{border-color:var(--jp-green);background-color:var(--jp-green)}.P61AuJBQP6TjObbYT0Qg:checked:not(:disabled)+.BDNWp0ZiFVcwV2Twt5ag:after{background-color:var(--jp-white)}.P61AuJBQP6TjObbYT0Qg:disabled+span.BDNWp0ZiFVcwV2Twt5ag{opacity:.25;cursor:default}.P61AuJBQP6TjObbYT0Qg.bt6jtOwRdzH6c4nwmMsb+.BDNWp0ZiFVcwV2Twt5ag{border-radius:8px;width:24px;height:16px}.P61AuJBQP6TjObbYT0Qg.bt6jtOwRdzH6c4nwmMsb+.BDNWp0ZiFVcwV2Twt5ag:after{width:12px;height:12px}.P61AuJBQP6TjObbYT0Qg.bt6jtOwRdzH6c4nwmMsb:checked+.BDNWp0ZiFVcwV2Twt5ag:after{left:8px}',""]),s.locals={"form-toggle":"P61AuJBQP6TjObbYT0Qg","form-toggle__switch":"BDNWp0ZiFVcwV2Twt5ag","is-compact":"bt6jtOwRdzH6c4nwmMsb"};const C=s}}]);})();
