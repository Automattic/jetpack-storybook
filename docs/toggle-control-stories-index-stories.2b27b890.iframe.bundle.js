"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2968],{"../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(v,t,e)=>{e.d(t,{AH:()=>_,i7:()=>C});var c=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),u=e("../../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),d=e("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=e.n(d),s=function(m,g){var n=arguments;if(g==null||!c.h.call(g,"css"))return a.createElement.apply(void 0,n);var y=n.length,o=new Array(y);o[0]=c.E,o[1]=(0,c.c)(m,g);for(var r=2;r<y;r++)o[r]=n[r];return a.createElement.apply(null,o)};(function(h){var m;m||(m=h.JSX||(h.JSX={}))})(s||(s={}));var k=null;function _(){for(var h=arguments.length,m=new Array(h),g=0;g<h;g++)m[g]=arguments[g];return(0,l.J)(m)}function C(){var h=_.apply(void 0,arguments),m="animation-"+h.name;return{name:m,styles:"@keyframes "+m+"{"+h.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var x=function h(m){for(var g=m.length,n=0,y="";n<g;n++){var o=m[n];if(o!=null){var r=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))r=h(o);else{r="";for(var f in o)o[f]&&f&&(r&&(r+=" "),r+=f)}break}default:r=o}r&&(y&&(y+=" "),y+=r)}}return y};function T(h,m,g){var n=[],y=getRegisteredStyles(h,n,g);return n.length<2?g:y+m(n)}var E=function(m){var g=m.cache,n=m.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var y=0;y<n.length;y++)insertStyles(g,n[y],!1)}),null},w=null},"../components/components/toggle-control/stories/index.stories.tsx":(v,t,e)=>{e.r(t),e.d(t,{Default:()=>h,Disabled:()=>g,HelpText:()=>y,Slow:()=>m,Small:()=>n,__namedExportsOrder:()=>o,default:()=>w});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(l),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var s=u()(d.A,i);const k=d.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=({checked:r,className:f,disabled:b,help:S,toggling:j,label:O,size:B="normal",onChange:A})=>{const L=j!==void 0?r&&!j||!r&&j:r,D=(0,c.useCallback)(P=>{j||A(P)},[j,A]);return(0,_.jsx)(a.A,{__nextHasNoMarginBottom:!0,checked:L,className:(0,p.A)(k.toggle,f,{[k["is-toggling"]]:j,[k["is-small"]]:B==="small",[k["no-label"]]:!O}),disabled:b,help:S,label:O,onChange:D})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch{}var T=`import React, { useCallback, useState } from 'react';
import ToggleControl from '../index.js';

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
`,E={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:23},startBody:{col:23,line:13},endBody:{col:1,line:23}},Slow:{startLoc:{col:20,line:26},endLoc:{col:1,line:42},startBody:{col:20,line:26},endBody:{col:1,line:42}},Disabled:{startLoc:{col:24,line:45},endLoc:{col:1,line:63},startBody:{col:24,line:45},endBody:{col:1,line:63}},Small:{startLoc:{col:21,line:66},endLoc:{col:1,line:79},startBody:{col:21,line:66},endBody:{col:1,line:79}},HelpText:{startLoc:{col:24,line:82},endLoc:{col:1,line:93},startBody:{col:24,line:82},endBody:{col:1,line:93}}};const w={title:"JS Packages/Components/Toggle Control",component:x,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
import ToggleControl from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:23},startBody:{col:23,line:13},endBody:{col:1,line:23}},slow:{startLoc:{col:20,line:26},endLoc:{col:1,line:42},startBody:{col:20,line:26},endBody:{col:1,line:42}},disabled:{startLoc:{col:24,line:45},endLoc:{col:1,line:63},startBody:{col:24,line:45},endBody:{col:1,line:63}},small:{startLoc:{col:21,line:66},endLoc:{col:1,line:79},startBody:{col:21,line:66},endBody:{col:1,line:79}},"help-text":{startLoc:{col:24,line:82},endLoc:{col:1,line:93},startBody:{col:24,line:82},endBody:{col:1,line:93}}}},layout:"centered"}},h=r=>{const[f,b]=(0,c.useState)(!1),S=(0,c.useCallback)(()=>{b(!f)},[f]);return(0,_.jsx)(x,{checked:f,onChange:S,label:"Code is poetry."})},m=r=>{const[f,b]=(0,c.useState)(!1),[S,j]=(0,c.useState)(!1),O=(0,c.useCallback)(()=>{b(!0),setTimeout(()=>{b(!1),j(!S)},2e3)},[S]);return(0,_.jsx)(x,{checked:S,toggling:f,onChange:O,label:"Code is poetry."})},g=r=>{const[f,b]=(0,c.useState)(!1),S=(0,c.useCallback)(()=>{b(!f)},[f]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(x,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:S}),(0,_.jsx)(x,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:S})]})},n=r=>{const[f,b]=(0,c.useState)(!1),S=(0,c.useCallback)(()=>{b(!f)},[f]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(x,{checked:f,size:"small",label:"Code is poetry.",onChange:S})})},y=r=>{const[f,b]=(0,c.useState)(!1),S=(0,c.useCallback)(()=>{b(!f)},[f]);return(0,_.jsx)(x,{checked:f,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:S})},o=["Default","Slow","Disabled","Small","HelpText"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...h.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...g.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...n.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...y.parameters?.docs?.source}}};try{h.displayName="Default",h.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:h.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch{}try{m.displayName="Slow",m.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:m.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch{}try{g.displayName="Disabled",g.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:g.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch{}try{n.displayName="Small",n.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:n.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch{}try{y.displayName="HelpText",y.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:y.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch{}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(v,t,e)=>{e.d(t,{A:()=>k});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function u(_){const C=(0,p.A)(_,"FlexBlock");return(0,l.K)({isBlock:!0,...C})}var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(_,C){const x=u(_);return(0,d.jsx)(a.A,{...x,ref:C})}const k=(0,c.KZ)(i,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(v,t,e)=>{e.d(t,{A:()=>i});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(s,k){const _=(0,p.A)(s);return(0,l.jsx)(a.A,{..._,ref:k})}const i=(0,c.KZ)(u,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(v,t,e)=>{e.d(t,{A:()=>g});var c=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+compose@7.17.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.18.0/node_modules/@wordpress/deprecated/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=()=>{};function k(n,y){const{className:o,checked:r,id:f,disabled:b,onChange:S=s,...j}=n,O=(0,a.A)("components-form-toggle",o,{"is-checked":r,"is-disabled":b});return(0,i.jsxs)("span",{className:O,children:[(0,i.jsx)("input",{className:"components-form-toggle__input",id:f,type:"checkbox",checked:r,onChange:S,disabled:b,...j,ref:y}),(0,i.jsx)("span",{className:"components-form-toggle__track"}),(0,i.jsx)("span",{className:"components-form-toggle__thumb"})]})}const C=(0,p.forwardRef)(k);var x=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),w=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js");function h({__nextHasNoMarginBottom:n,label:y,checked:o,help:r,className:f,onChange:b,disabled:S},j){function O(M){b(M.target.checked)}const A=`inspector-toggle-control-${(0,l.A)(m)}`,D=(0,E.l)()("components-toggle-control",f,!n&&(0,c.AH)({marginBottom:(0,w.x)(3)},"",""));n||(0,u.A)("Bottom margin styles for wp.components.ToggleControl",{since:"6.7",version:"7.0",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version."});let P,R;return r&&(typeof r=="function"?o!==void 0&&(R=r(o)):R=r,R&&(P=A+"__help")),(0,i.jsx)(x.Ay,{id:A,help:R&&(0,i.jsx)("span",{className:"components-toggle-control__help",children:R}),className:D,__nextHasNoMarginBottom:!0,children:(0,i.jsxs)(T.A,{justify:"flex-start",spacing:2,children:[(0,i.jsx)(C,{id:A,checked:o,onChange:O,"aria-describedby":P,disabled:S,ref:j}),(0,i.jsx)(d.A,{as:"label",htmlFor:A,className:(0,a.A)("components-toggle-control__label",{"is-disabled":S}),children:y})]})})}const m=(0,p.forwardRef)(h),g=m},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(v,t,e)=>{e.d(t,{l:()=>d});const c="#fff",a={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},p={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},l={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${c})`,background:`var(--wp-components-color-background, ${c})`,foreground:`var(--wp-components-color-foreground, ${a[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${c})`,gray:{900:`var(--wp-components-color-foreground, ${a[900]})`,800:`var(--wp-components-color-gray-800, ${a[800]})`,700:`var(--wp-components-color-gray-700, ${a[700]})`,600:`var(--wp-components-color-gray-600, ${a[600]})`,400:`var(--wp-components-color-gray-400, ${a[400]})`,300:`var(--wp-components-color-gray-300, ${a[300]})`,200:`var(--wp-components-color-gray-200, ${a[200]})`,100:`var(--wp-components-color-gray-100, ${a[100]})`}},u={background:l.background,backgroundDisabled:l.gray[100],border:l.gray[600],borderHover:l.gray[700],borderFocus:l.accent,borderDisabled:l.gray[400],textDisabled:l.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${l.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${l.background}, transparent 35%)`},d=Object.freeze({gray:a,white:c,alert:p,theme:l,ui:u});var i=null},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(v,t,e)=>{e.d(t,{x:()=>a});const c="4px";function a(p){if(typeof p>"u")return;if(!p)return"0";const l=typeof p=="number"?p:Number(p);return typeof window<"u"&&window.CSS?.supports?.("margin",p.toString())||Number.isNaN(l)?p.toString():`calc(${c} * ${p})`}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(v,t,e)=>{e.d(t,{A:()=>s});var c=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const p={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var l=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d(k,_){const{style:C,...x}=(0,c.A)(k,"VisuallyHidden");return(0,u.jsx)(l.A,{ref:_,...x,style:{...p,...C||{}}})}const s=(0,a.KZ)(d,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.17.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(v,t,e)=>{e.d(t,{A:()=>u});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const a=new WeakMap;function p(d){const i=a.get(d)||0;return a.set(d,i+1),i}function l(d,i,s){return(0,c.useMemo)(()=>{if(s)return s;const k=p(d);return i?`${i}-${k}`:k},[d,s,i])}const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(v,t,e)=>{e.d(t,{A:()=>d});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(c),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(p),u=l()(a());u.push([v.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px;--track-width: calc( var(--base-width) * 6 )}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 );height:calc(var(--base-width)*3)}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:var(--track-width);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg .components-toggle-control__help{margin-inline-start:calc(var(--track-width) + var(--spacing-base))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),u.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const d=u},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(v,t,e)=>{var c=e("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[c.ForwardRef]=l,d[c.Memo]=u;function i(w){return c.isMemo(w)?u:d[w.$$typeof]||a}var s=Object.defineProperty,k=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,C=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,T=Object.prototype;function E(w,h,m){if(typeof h!="string"){if(T){var g=x(h);g&&g!==T&&E(w,g,m)}var n=k(h);_&&(n=n.concat(_(h)));for(var y=i(w),o=i(h),r=0;r<n.length;++r){var f=n[r];if(!p[f]&&!(m&&m[f])&&!(o&&o[f])&&!(y&&y[f])){var b=C(h,f);try{s(w,f,b)}catch{}}}}return w}v.exports=E},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(v,t,e)=>{e.d(t,{A:()=>c});function c(a,p){var l=0,u,d;p=p||{};function i(){var s=u,k=arguments.length,_,C;e:for(;s;){if(s.args.length!==arguments.length){s=s.next;continue}for(C=0;C<k;C++)if(s.args[C]!==arguments[C]){s=s.next;continue e}return s!==u&&(s===d&&(d=s.prev),s.prev.next=s.next,s.next&&(s.next.prev=s.prev),s.next=u,s.prev=null,u.prev=s,u=s),s.val}for(_=new Array(k),C=0;C<k;C++)_[C]=arguments[C];return s={args:_,val:a.apply(null,_)},u?(u.prev=s,s.next=u):d=s,l===p.maxSize?(d=d.prev,d.next=null):l++,u=s,s.val}return i.clear=function(){u=null,d=null,l=0},i}},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(v,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=typeof Symbol=="function"&&Symbol.for,c=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,p=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,i=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,k=e?Symbol.for("react.concurrent_mode"):60111,_=e?Symbol.for("react.forward_ref"):60112,C=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,T=e?Symbol.for("react.memo"):60115,E=e?Symbol.for("react.lazy"):60116,w=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,m=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function n(o){if(typeof o=="object"&&o!==null){var r=o.$$typeof;switch(r){case c:switch(o=o.type,o){case s:case k:case p:case u:case l:case C:return o;default:switch(o=o&&o.$$typeof,o){case i:case _:case E:case T:case d:return o;default:return r}}case a:return r}}}function y(o){return n(o)===k}t.AsyncMode=s,t.ConcurrentMode=k,t.ContextConsumer=i,t.ContextProvider=d,t.Element=c,t.ForwardRef=_,t.Fragment=p,t.Lazy=E,t.Memo=T,t.Portal=a,t.Profiler=u,t.StrictMode=l,t.Suspense=C,t.isAsyncMode=function(o){return y(o)||n(o)===s},t.isConcurrentMode=y,t.isContextConsumer=function(o){return n(o)===i},t.isContextProvider=function(o){return n(o)===d},t.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===c},t.isForwardRef=function(o){return n(o)===_},t.isFragment=function(o){return n(o)===p},t.isLazy=function(o){return n(o)===E},t.isMemo=function(o){return n(o)===T},t.isPortal=function(o){return n(o)===a},t.isProfiler=function(o){return n(o)===u},t.isStrictMode=function(o){return n(o)===l},t.isSuspense=function(o){return n(o)===C},t.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===p||o===k||o===u||o===l||o===C||o===x||typeof o=="object"&&o!==null&&(o.$$typeof===E||o.$$typeof===T||o.$$typeof===d||o.$$typeof===i||o.$$typeof===_||o.$$typeof===h||o.$$typeof===m||o.$$typeof===g||o.$$typeof===w)},t.typeOf=n},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(v,t,e)=>{v.exports=e("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
