"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2968],{"../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(v,t,e)=>{e.d(t,{AH:()=>_,i7:()=>C});var r=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),m=e("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),f=e.n(m),n=function(h,u){var s=arguments;if(u==null||!r.h.call(u,"css"))return d.createElement.apply(void 0,s);var y=s.length,o=new Array(y);o[0]=r.E,o[1]=(0,r.c)(h,u);for(var c=2;c<y;c++)o[c]=s[c];return d.createElement.apply(null,o)};(function(p){var h;h||(h=p.JSX||(p.JSX={}))})(n||(n={}));var k=null;function _(){for(var p=arguments.length,h=new Array(p),u=0;u<p;u++)h[u]=arguments[u];return(0,a.J)(h)}function C(){var p=_.apply(void 0,arguments),h="animation-"+p.name;return{name:h,styles:"@keyframes "+h+"{"+p.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var b=function p(h){for(var u=h.length,s=0,y="";s<u;s++){var o=h[s];if(o!=null){var c=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))c=p(o);else{c="";for(var g in o)o[g]&&g&&(c&&(c+=" "),c+=g)}break}default:c=o}c&&(y&&(y+=" "),y+=c)}}return y};function j(p,h,u){var s=[],y=getRegisteredStyles(p,s,u);return s.length<2?u:y+h(s)}var T=function(h){var u=h.cache,s=h.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var y=0;y<s.length;y++)insertStyles(u,s[y],!1)}),null},E=null},"../components/components/toggle-control/stories/index.stories.tsx":(v,t,e)=>{e.r(t),e.d(t,{Default:()=>p,Disabled:()=>u,HelpText:()=>y,Slow:()=>h,Small:()=>s,__namedExportsOrder:()=>o,default:()=>E});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(a),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/toggle-control/styles.module.scss"),f={};f.insert="head",f.singleton=!1;var n=i()(m.A,f);const k=m.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=({checked:c,className:g,disabled:x,help:S,toggling:w,label:O,size:R="normal",onChange:A})=>{const P=w!==void 0?c&&!w||!c&&w:c,D=(0,r.useCallback)(B=>{w||A(B)},[w,A]);return(0,_.jsx)(d.A,{__nextHasNoMarginBottom:!0,checked:P,className:(0,l.A)(k.toggle,g,{[k["is-toggling"]]:w,[k["is-small"]]:R==="small",[k["no-label"]]:!O}),disabled:x,help:S,label:O,onChange:D})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch{}var j=`import React, { useCallback, useState } from 'react';
import ToggleControl from '../index.tsx';

export default {
	title: 'JS Packages/Components/Toggle Control',
	component: ToggleControl,
	parameters: {
		layout: 'centered',
	},
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Default = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return <ToggleControl checked={ checked } onChange={ handleChecked } label="Code is poetry." />;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Slow = args => {
	const [ loading, setLoading ] = useState( false );
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setLoading( true );
		setTimeout( () => {
			setLoading( false );
			setChecked( ! checked );
		}, 2000 );
	}, [ checked ] );

	return (
		<ToggleControl
			checked={ checked }
			toggling={ loading }
			onChange={ handleChecked }
			label="Code is poetry."
		/>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Disabled = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<>
			<ToggleControl checked={ true } disabled label="Code is poetry." onChange={ handleChecked } />
			<ToggleControl
				checked={ false }
				disabled
				label="Code is poetry."
				onChange={ handleChecked }
			/>
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Small = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<>
			<ToggleControl
				checked={ checked }
				size="small"
				label="Code is poetry."
				onChange={ handleChecked }
			/>
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HelpText = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return (
		<ToggleControl
			checked={ checked }
			label="Code is poetry."
			help="Code is poetry. Code is poetry. Code is poetry."
			onChange={ handleChecked }
		/>
	);
};
`,T={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:23},startBody:{col:23,line:13},endBody:{col:1,line:23}},Slow:{startLoc:{col:20,line:26},endLoc:{col:1,line:42},startBody:{col:20,line:26},endBody:{col:1,line:42}},Disabled:{startLoc:{col:24,line:45},endLoc:{col:1,line:63},startBody:{col:24,line:45},endBody:{col:1,line:63}},Small:{startLoc:{col:21,line:66},endLoc:{col:1,line:79},startBody:{col:21,line:66},endBody:{col:1,line:79}},HelpText:{startLoc:{col:24,line:82},endLoc:{col:1,line:93},startBody:{col:24,line:82},endBody:{col:1,line:93}}};const E={title:"JS Packages/Components/Toggle Control",component:b,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
import ToggleControl from '../index.tsx';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Toggle Control',
  component: ToggleControl,
  parameters: {
    layout: 'centered'
  }
};


export const Default = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return /*#__PURE__*/_jsx(ToggleControl, {
    checked: checked,
    onChange: handleChecked,
    label: "Code is poetry."
  });
};


export const Slow = args => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(!checked);
    }, 2000);
  }, [checked]);
  return /*#__PURE__*/_jsx(ToggleControl, {
    checked: checked,
    toggling: loading,
    onChange: handleChecked,
    label: "Code is poetry."
  });
};


export const Disabled = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(ToggleControl, {
      checked: true,
      disabled: true,
      label: "Code is poetry.",
      onChange: handleChecked
    }), /*#__PURE__*/_jsx(ToggleControl, {
      checked: false,
      disabled: true,
      label: "Code is poetry.",
      onChange: handleChecked
    })]
  });
};


export const Small = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(ToggleControl, {
      checked: checked,
      size: "small",
      label: "Code is poetry.",
      onChange: handleChecked
    })
  });
};


export const HelpText = args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return /*#__PURE__*/_jsx(ToggleControl, {
    checked: checked,
    label: "Code is poetry.",
    help: "Code is poetry. Code is poetry. Code is poetry.",
    onChange: handleChecked
  });
};`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:23},startBody:{col:23,line:13},endBody:{col:1,line:23}},slow:{startLoc:{col:20,line:26},endLoc:{col:1,line:42},startBody:{col:20,line:26},endBody:{col:1,line:42}},disabled:{startLoc:{col:24,line:45},endLoc:{col:1,line:63},startBody:{col:24,line:45},endBody:{col:1,line:63}},small:{startLoc:{col:21,line:66},endLoc:{col:1,line:79},startBody:{col:21,line:66},endBody:{col:1,line:79}},"help-text":{startLoc:{col:24,line:82},endLoc:{col:1,line:93},startBody:{col:24,line:82},endBody:{col:1,line:93}}}},layout:"centered"}},p=c=>{const[g,x]=(0,r.useState)(!1),S=(0,r.useCallback)(()=>{x(!g)},[g]);return(0,_.jsx)(b,{checked:g,onChange:S,label:"Code is poetry."})},h=c=>{const[g,x]=(0,r.useState)(!1),[S,w]=(0,r.useState)(!1),O=(0,r.useCallback)(()=>{x(!0),setTimeout(()=>{x(!1),w(!S)},2e3)},[S]);return(0,_.jsx)(b,{checked:S,toggling:g,onChange:O,label:"Code is poetry."})},u=c=>{const[g,x]=(0,r.useState)(!1),S=(0,r.useCallback)(()=>{x(!g)},[g]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:S}),(0,_.jsx)(b,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:S})]})},s=c=>{const[g,x]=(0,r.useState)(!1),S=(0,r.useCallback)(()=>{x(!g)},[g]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(b,{checked:g,size:"small",label:"Code is poetry.",onChange:S})})},y=c=>{const[g,x]=(0,r.useState)(!1),S=(0,r.useCallback)(()=>{x(!g)},[g]);return(0,_.jsx)(b,{checked:g,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:S})},o=["Default","Slow","Disabled","Small","HelpText"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(!checked);
    }, 2000);
  }, [checked]);
  return <ToggleControl checked={checked} toggling={loading} onChange={handleChecked} label="Code is poetry." />;
}`,...h.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...u.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...s.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...y.parameters?.docs?.source}}};try{p.displayName="Default",p.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:p.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch{}try{h.displayName="Slow",h.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:h.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch{}try{u.displayName="Disabled",u.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:u.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch{}try{s.displayName="Small",s.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:s.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch{}try{y.displayName="HelpText",y.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:y.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(v,t,e)=>{e.d(t,{A:()=>k});var r=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function i(_){const C=(0,l.A)(_,"FlexBlock");return(0,a.K)({isBlock:!0,...C})}var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f(_,C){const b=i(_);return(0,m.jsx)(d.A,{...b,ref:C})}const k=(0,r.KZ)(f,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/form-toggle/index.js":(v,t,e)=>{e.d(t,{Ay:()=>f});var r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=()=>{};function i(n,k){const{className:_,checked:C,id:b,disabled:j,onChange:T=a,...E}=n,p=(0,r.A)("components-form-toggle",_,{"is-checked":C,"is-disabled":j});return(0,l.jsxs)("span",{className:p,children:[(0,l.jsx)("input",{className:"components-form-toggle__input",id:b,type:"checkbox",checked:C,onChange:T,disabled:j,...E,ref:k}),(0,l.jsx)("span",{className:"components-form-toggle__track"}),(0,l.jsx)("span",{className:"components-form-toggle__thumb"})]})}const f=(0,d.forwardRef)(i)},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(v,t,e)=>{e.d(t,{A:()=>f});var r=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(n,k){const _=(0,l.A)(n);return(0,a.jsx)(d.A,{..._,ref:k})}const f=(0,r.KZ)(i,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(v,t,e)=>{e.d(t,{A:()=>E});var r=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.23_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.25.0/node_modules/@wordpress/deprecated/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/form-toggle/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({__nextHasNoMarginBottom:p,label:h,checked:u,help:s,className:y,onChange:o,disabled:c},g){function x(D){o(D.target.checked)}const w=`inspector-toggle-control-${(0,a.A)(T)}`,R=(0,_.l)()("components-toggle-control",y,!p&&(0,r.AH)({marginBottom:(0,C.x)(3)},"",""));p||(0,i.A)("Bottom margin styles for wp.components.ToggleControl",{since:"6.7",version:"7.0",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version."});let A,P;return s&&(typeof s=="function"?u!==void 0&&(P=s(u)):P=s,P&&(A=w+"__help")),(0,b.jsx)(n.Ay,{id:w,help:P&&(0,b.jsx)("span",{className:"components-toggle-control__help",children:P}),className:R,__nextHasNoMarginBottom:!0,children:(0,b.jsxs)(k.A,{justify:"flex-start",spacing:2,children:[(0,b.jsx)(f.Ay,{id:w,checked:u,onChange:x,"aria-describedby":A,disabled:c,ref:g}),(0,b.jsx)(m.A,{as:"label",htmlFor:w,className:(0,d.A)("components-toggle-control__label",{"is-disabled":c}),children:h})]})})}const T=(0,l.forwardRef)(j),E=T},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(v,t,e)=>{e.d(t,{l:()=>m});const r="#fff",d={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},l={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},a={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${r})`,background:`var(--wp-components-color-background, ${r})`,foreground:`var(--wp-components-color-foreground, ${d[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${r})`,gray:{900:`var(--wp-components-color-foreground, ${d[900]})`,800:`var(--wp-components-color-gray-800, ${d[800]})`,700:`var(--wp-components-color-gray-700, ${d[700]})`,600:`var(--wp-components-color-gray-600, ${d[600]})`,400:`var(--wp-components-color-gray-400, ${d[400]})`,300:`var(--wp-components-color-gray-300, ${d[300]})`,200:`var(--wp-components-color-gray-200, ${d[200]})`,100:`var(--wp-components-color-gray-100, ${d[100]})`}},i={background:a.background,backgroundDisabled:a.gray[100],border:a.gray[600],borderHover:a.gray[700],borderFocus:a.accent,borderDisabled:a.gray[400],textDisabled:a.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${a.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${a.background}, transparent 35%)`},m=Object.freeze({gray:d,white:r,alert:l,theme:a,ui:i});var f=null},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(v,t,e)=>{e.d(t,{x:()=>d});const r="4px";function d(l){if(typeof l>"u")return;if(!l)return"0";const a=typeof l=="number"?l:Number(l);return typeof window<"u"&&window.CSS?.supports?.("margin",l.toString())||Number.isNaN(a)?l.toString():`calc(${r} * ${l})`}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(v,t,e)=>{e.d(t,{A:()=>n});var r=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const l={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var a=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m(k,_){const{style:C,...b}=(0,r.A)(k,"VisuallyHidden");return(0,i.jsx)(a.A,{ref:_,...b,style:{...l,...C||{}}})}const n=(0,d.KZ)(m,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(v,t,e)=>{e.d(t,{A:()=>i});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const d=new WeakMap;function l(m){const f=d.get(m)||0;return d.set(m,f+1),f}function a(m,f,n){return(0,r.useMemo)(()=>{if(n)return n;const k=l(m);return f?`${f}-${k}`:k},[m,n,f])}const i=a},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/toggle-control/styles.module.scss":(v,t,e)=>{e.d(t,{A:()=>m});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),i=a()(d());i.push([v.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px;--track-width: calc( var(--base-width) * 6 )}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 );height:calc(var(--base-width)*3)}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:var(--track-width);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg .components-toggle-control__help{margin-inline-start:calc(var(--track-width) + var(--spacing-base))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),i.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const m=i},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(v,t,e)=>{var r=e("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),d={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m={};m[r.ForwardRef]=a,m[r.Memo]=i;function f(E){return r.isMemo(E)?i:m[E.$$typeof]||d}var n=Object.defineProperty,k=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,C=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,j=Object.prototype;function T(E,p,h){if(typeof p!="string"){if(j){var u=b(p);u&&u!==j&&T(E,u,h)}var s=k(p);_&&(s=s.concat(_(p)));for(var y=f(E),o=f(p),c=0;c<s.length;++c){var g=s[c];if(!l[g]&&!(h&&h[g])&&!(o&&o[g])&&!(y&&y[g])){var x=C(p,g);try{n(E,g,x)}catch{}}}}return E}v.exports=T},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(v,t,e)=>{e.d(t,{A:()=>r});function r(d,l){var a=0,i,m;l=l||{};function f(){var n=i,k=arguments.length,_,C;e:for(;n;){if(n.args.length!==arguments.length){n=n.next;continue}for(C=0;C<k;C++)if(n.args[C]!==arguments[C]){n=n.next;continue e}return n!==i&&(n===m&&(m=n.prev),n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=i,n.prev=null,i.prev=n,i=n),n.val}for(_=new Array(k),C=0;C<k;C++)_[C]=arguments[C];return n={args:_,val:d.apply(null,_)},i?(i.prev=n,n.next=i):m=n,a===l.maxSize?(m=m.prev,m.next=null):a++,i=n,n.val}return f.clear=function(){i=null,m=null,a=0},f}},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(v,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,d=e?Symbol.for("react.portal"):60106,l=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,m=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,n=e?Symbol.for("react.async_mode"):60111,k=e?Symbol.for("react.concurrent_mode"):60111,_=e?Symbol.for("react.forward_ref"):60112,C=e?Symbol.for("react.suspense"):60113,b=e?Symbol.for("react.suspense_list"):60120,j=e?Symbol.for("react.memo"):60115,T=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,u=e?Symbol.for("react.scope"):60119;function s(o){if(typeof o=="object"&&o!==null){var c=o.$$typeof;switch(c){case r:switch(o=o.type,o){case n:case k:case l:case i:case a:case C:return o;default:switch(o=o&&o.$$typeof,o){case f:case _:case T:case j:case m:return o;default:return c}}case d:return c}}}function y(o){return s(o)===k}t.AsyncMode=n,t.ConcurrentMode=k,t.ContextConsumer=f,t.ContextProvider=m,t.Element=r,t.ForwardRef=_,t.Fragment=l,t.Lazy=T,t.Memo=j,t.Portal=d,t.Profiler=i,t.StrictMode=a,t.Suspense=C,t.isAsyncMode=function(o){return y(o)||s(o)===n},t.isConcurrentMode=y,t.isContextConsumer=function(o){return s(o)===f},t.isContextProvider=function(o){return s(o)===m},t.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===r},t.isForwardRef=function(o){return s(o)===_},t.isFragment=function(o){return s(o)===l},t.isLazy=function(o){return s(o)===T},t.isMemo=function(o){return s(o)===j},t.isPortal=function(o){return s(o)===d},t.isProfiler=function(o){return s(o)===i},t.isStrictMode=function(o){return s(o)===a},t.isSuspense=function(o){return s(o)===C},t.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===l||o===k||o===i||o===a||o===C||o===b||typeof o=="object"&&o!==null&&(o.$$typeof===T||o.$$typeof===j||o.$$typeof===m||o.$$typeof===f||o.$$typeof===_||o.$$typeof===p||o.$$typeof===h||o.$$typeof===u||o.$$typeof===E)},t.typeOf=s},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(v,t,e)=>{v.exports=e("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
