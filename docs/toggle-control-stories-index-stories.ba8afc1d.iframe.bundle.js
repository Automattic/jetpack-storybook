"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2968],{"../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(v,t,e)=>{e.d(t,{AH:()=>_,i7:()=>b});var s=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),f=e("../../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),h=e("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),g=e.n(h),k=function(m,l){var n=arguments;if(l==null||!s.h.call(l,"css"))return a.createElement.apply(void 0,n);var u=n.length,o=new Array(u);o[0]=s.E,o[1]=(0,s.c)(m,l);for(var r=2;r<u;r++)o[r]=n[r];return a.createElement.apply(null,o)};(function(c){var m;m||(m=c.JSX||(c.JSX={}))})(k||(k={}));var y=null;function _(){for(var c=arguments.length,m=new Array(c),l=0;l<c;l++)m[l]=arguments[l];return(0,i.J)(m)}function b(){var c=_.apply(void 0,arguments),m="animation-"+c.name;return{name:m,styles:"@keyframes "+m+"{"+c.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var C=function c(m){for(var l=m.length,n=0,u="";n<l;n++){var o=m[n];if(o!=null){var r=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))r=c(o);else{r="";for(var p in o)o[p]&&p&&(r&&(r+=" "),r+=p)}break}default:r=o}r&&(u&&(u+=" "),u+=r)}}return u};function j(c,m,l){var n=[],u=getRegisteredStyles(c,n,l);return n.length<2?l:u+m(n)}var T=function(m){var l=m.cache,n=m.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var u=0;u<n.length;u++)insertStyles(l,n[u],!1)}),null},E=null},"../components/components/toggle-control/stories/index.stories.tsx":(v,t,e)=>{e.r(t),e.d(t,{Default:()=>c,Disabled:()=>l,HelpText:()=>u,Slow:()=>m,Small:()=>n,__namedExportsOrder:()=>o,default:()=>E});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(i),h=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),g={};g.insert="head",g.singleton=!1;var k=f()(h.A,g);const y=h.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=({checked:r,className:p,disabled:S,help:x,toggling:w,label:O,size:R="normal",onChange:A})=>{const P=w!==void 0?r&&!w||!r&&w:r,D=(0,s.useCallback)(B=>{w||A(B)},[w,A]);return(0,_.jsx)(a.A,{__nextHasNoMarginBottom:!0,checked:P,className:(0,d.A)(y.toggle,p,{[y["is-toggling"]]:w,[y["is-small"]]:R==="small",[y["no-label"]]:!O}),disabled:S,help:x,label:O,onChange:D})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch{}var j=`import React, { useCallback, useState } from 'react';
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
`,T={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:23},startBody:{col:23,line:13},endBody:{col:1,line:23}},Slow:{startLoc:{col:20,line:26},endLoc:{col:1,line:42},startBody:{col:20,line:26},endBody:{col:1,line:42}},Disabled:{startLoc:{col:24,line:45},endLoc:{col:1,line:63},startBody:{col:24,line:45},endBody:{col:1,line:63}},Small:{startLoc:{col:21,line:66},endLoc:{col:1,line:79},startBody:{col:21,line:66},endBody:{col:1,line:79}},HelpText:{startLoc:{col:24,line:82},endLoc:{col:1,line:93},startBody:{col:24,line:82},endBody:{col:1,line:93}}};const E={title:"JS Packages/Components/Toggle Control",component:C,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
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
};`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:23},startBody:{col:23,line:13},endBody:{col:1,line:23}},slow:{startLoc:{col:20,line:26},endLoc:{col:1,line:42},startBody:{col:20,line:26},endBody:{col:1,line:42}},disabled:{startLoc:{col:24,line:45},endLoc:{col:1,line:63},startBody:{col:24,line:45},endBody:{col:1,line:63}},small:{startLoc:{col:21,line:66},endLoc:{col:1,line:79},startBody:{col:21,line:66},endBody:{col:1,line:79}},"help-text":{startLoc:{col:24,line:82},endLoc:{col:1,line:93},startBody:{col:24,line:82},endBody:{col:1,line:93}}}},layout:"centered"}},c=r=>{const[p,S]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{S(!p)},[p]);return(0,_.jsx)(C,{checked:p,onChange:x,label:"Code is poetry."})},m=r=>{const[p,S]=(0,s.useState)(!1),[x,w]=(0,s.useState)(!1),O=(0,s.useCallback)(()=>{S(!0),setTimeout(()=>{S(!1),w(!x)},2e3)},[x]);return(0,_.jsx)(C,{checked:x,toggling:p,onChange:O,label:"Code is poetry."})},l=r=>{const[p,S]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{S(!p)},[p]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(C,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:x}),(0,_.jsx)(C,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:x})]})},n=r=>{const[p,S]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{S(!p)},[p]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(C,{checked:p,size:"small",label:"Code is poetry.",onChange:x})})},u=r=>{const[p,S]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{S(!p)},[p]);return(0,_.jsx)(C,{checked:p,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:x})},o=["Default","Slow","Disabled","Small","HelpText"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...c.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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
}`,...m.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...l.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...n.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...u.parameters?.docs?.source}}};try{c.displayName="Default",c.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:c.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch{}try{m.displayName="Slow",m.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:m.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch{}try{l.displayName="Disabled",l.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:l.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch{}try{n.displayName="Small",n.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:n.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch{}try{u.displayName="HelpText",u.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:u.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(v,t,e)=>{e.d(t,{A:()=>y});var s=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function f(_){const b=(0,d.A)(_,"FlexBlock");return(0,i.K)({isBlock:!0,...b})}var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function g(_,b){const C=f(_);return(0,h.jsx)(a.A,{...C,ref:b})}const y=(0,s.KZ)(g,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/form-toggle/index.js":(v,t,e)=>{e.d(t,{Ay:()=>g});var s=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=()=>{};function f(k,y){const{className:_,checked:b,id:C,disabled:j,onChange:T=i,...E}=k,c=(0,s.A)("components-form-toggle",_,{"is-checked":b,"is-disabled":j});return(0,d.jsxs)("span",{className:c,children:[(0,d.jsx)("input",{className:"components-form-toggle__input",id:C,type:"checkbox",checked:b,onChange:T,disabled:j,...E,ref:y}),(0,d.jsx)("span",{className:"components-form-toggle__track"}),(0,d.jsx)("span",{className:"components-form-toggle__thumb"})]})}const g=(0,a.forwardRef)(f)},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(v,t,e)=>{e.d(t,{A:()=>g});var s=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f(k,y){const _=(0,d.A)(k);return(0,i.jsx)(a.A,{..._,ref:y})}const g=(0,s.KZ)(f,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(v,t,e)=>{e.d(t,{A:()=>E});var s=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+compose@7.22.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.22.0/node_modules/@wordpress/deprecated/build-module/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/form-toggle/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({__nextHasNoMarginBottom:c,label:m,checked:l,help:n,className:u,onChange:o,disabled:r},p){function S(D){o(D.target.checked)}const w=`inspector-toggle-control-${(0,i.A)(T)}`,R=(0,_.l)()("components-toggle-control",u,!c&&(0,s.AH)({marginBottom:(0,b.x)(3)},"",""));c||(0,f.A)("Bottom margin styles for wp.components.ToggleControl",{since:"6.7",version:"7.0",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version."});let A,P;return n&&(typeof n=="function"?l!==void 0&&(P=n(l)):P=n,P&&(A=w+"__help")),(0,C.jsx)(k.Ay,{id:w,help:P&&(0,C.jsx)("span",{className:"components-toggle-control__help",children:P}),className:R,__nextHasNoMarginBottom:!0,children:(0,C.jsxs)(y.A,{justify:"flex-start",spacing:2,children:[(0,C.jsx)(g.Ay,{id:w,checked:l,onChange:S,"aria-describedby":A,disabled:r,ref:p}),(0,C.jsx)(h.A,{as:"label",htmlFor:w,className:(0,a.A)("components-toggle-control__label",{"is-disabled":r}),children:m})]})})}const T=(0,d.forwardRef)(j),E=T},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(v,t,e)=>{e.d(t,{l:()=>h});const s="#fff",a={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},d={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},i={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${s})`,background:`var(--wp-components-color-background, ${s})`,foreground:`var(--wp-components-color-foreground, ${a[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${s})`,gray:{900:`var(--wp-components-color-foreground, ${a[900]})`,800:`var(--wp-components-color-gray-800, ${a[800]})`,700:`var(--wp-components-color-gray-700, ${a[700]})`,600:`var(--wp-components-color-gray-600, ${a[600]})`,400:`var(--wp-components-color-gray-400, ${a[400]})`,300:`var(--wp-components-color-gray-300, ${a[300]})`,200:`var(--wp-components-color-gray-200, ${a[200]})`,100:`var(--wp-components-color-gray-100, ${a[100]})`}},f={background:i.background,backgroundDisabled:i.gray[100],border:i.gray[600],borderHover:i.gray[700],borderFocus:i.accent,borderDisabled:i.gray[400],textDisabled:i.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${i.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${i.background}, transparent 35%)`},h=Object.freeze({gray:a,white:s,alert:d,theme:i,ui:f});var g=null},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(v,t,e)=>{e.d(t,{x:()=>a});const s="4px";function a(d){if(typeof d>"u")return;if(!d)return"0";const i=typeof d=="number"?d:Number(d);return typeof window<"u"&&window.CSS?.supports?.("margin",d.toString())||Number.isNaN(i)?d.toString():`calc(${s} * ${d})`}},"../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(v,t,e)=>{e.d(t,{A:()=>k});var s=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const d={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var i=e("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h(y,_){const{style:b,...C}=(0,s.A)(y,"VisuallyHidden");return(0,f.jsx)(i.A,{ref:_,...C,style:{...d,...b||{}}})}const k=(0,a.KZ)(h,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.22.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(v,t,e)=>{e.d(t,{A:()=>f});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const a=new WeakMap;function d(h){const g=a.get(h)||0;return a.set(h,g+1),g}function i(h,g,k){return(0,s.useMemo)(()=>{if(k)return k;const y=d(h);return g?`${g}-${y}`:y},[h,k,g])}const f=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(v,t,e)=>{e.d(t,{A:()=>h});var s=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(s),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(d),f=i()(a());f.push([v.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px;--track-width: calc( var(--base-width) * 6 )}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 );height:calc(var(--base-width)*3)}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:var(--track-width);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg .components-toggle-control__help{margin-inline-start:calc(var(--track-width) + var(--spacing-base))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),f.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const h=f},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(v,t,e)=>{var s=e("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};h[s.ForwardRef]=i,h[s.Memo]=f;function g(E){return s.isMemo(E)?f:h[E.$$typeof]||a}var k=Object.defineProperty,y=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,j=Object.prototype;function T(E,c,m){if(typeof c!="string"){if(j){var l=C(c);l&&l!==j&&T(E,l,m)}var n=y(c);_&&(n=n.concat(_(c)));for(var u=g(E),o=g(c),r=0;r<n.length;++r){var p=n[r];if(!d[p]&&!(m&&m[p])&&!(o&&o[p])&&!(u&&u[p])){var S=b(c,p);try{k(E,p,S)}catch{}}}}return E}v.exports=T},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(v,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=typeof Symbol=="function"&&Symbol.for,s=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,d=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,f=e?Symbol.for("react.profiler"):60114,h=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,k=e?Symbol.for("react.async_mode"):60111,y=e?Symbol.for("react.concurrent_mode"):60111,_=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,C=e?Symbol.for("react.suspense_list"):60120,j=e?Symbol.for("react.memo"):60115,T=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,c=e?Symbol.for("react.fundamental"):60117,m=e?Symbol.for("react.responder"):60118,l=e?Symbol.for("react.scope"):60119;function n(o){if(typeof o=="object"&&o!==null){var r=o.$$typeof;switch(r){case s:switch(o=o.type,o){case k:case y:case d:case f:case i:case b:return o;default:switch(o=o&&o.$$typeof,o){case g:case _:case T:case j:case h:return o;default:return r}}case a:return r}}}function u(o){return n(o)===y}t.AsyncMode=k,t.ConcurrentMode=y,t.ContextConsumer=g,t.ContextProvider=h,t.Element=s,t.ForwardRef=_,t.Fragment=d,t.Lazy=T,t.Memo=j,t.Portal=a,t.Profiler=f,t.StrictMode=i,t.Suspense=b,t.isAsyncMode=function(o){return u(o)||n(o)===k},t.isConcurrentMode=u,t.isContextConsumer=function(o){return n(o)===g},t.isContextProvider=function(o){return n(o)===h},t.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===s},t.isForwardRef=function(o){return n(o)===_},t.isFragment=function(o){return n(o)===d},t.isLazy=function(o){return n(o)===T},t.isMemo=function(o){return n(o)===j},t.isPortal=function(o){return n(o)===a},t.isProfiler=function(o){return n(o)===f},t.isStrictMode=function(o){return n(o)===i},t.isSuspense=function(o){return n(o)===b},t.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===d||o===y||o===f||o===i||o===b||o===C||typeof o=="object"&&o!==null&&(o.$$typeof===T||o.$$typeof===j||o.$$typeof===h||o.$$typeof===g||o.$$typeof===_||o.$$typeof===c||o.$$typeof===m||o.$$typeof===l||o.$$typeof===E)},t.typeOf=n},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(v,t,e)=>{v.exports=e("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
