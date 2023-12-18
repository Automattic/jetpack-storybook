"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(O,u,e)=>{var w,v,N,j,P,R,D,E,I,K,H,W;e.r(u),e.d(u,{Default:()=>d,Disabled:()=>c,HelpText:()=>r,Slow:()=>t,__namedExportsOrder:()=>L,default:()=>T});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js"),C=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(C),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(a),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var f=s()(l.Z,i);const k=l.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=({checked:_,className:p,disabled:x,help:h,toggling:S,label:M,onChange:$})=>{const Z=S!==void 0?_&&!S||!_&&S:_,F=(0,o.useCallback)(Y=>{S||$(Y)},[S,$]);return(0,n.jsx)(m.Z,{checked:Z,className:g()(k.toggle,p,{[k["is-toggling"]]:S}),disabled:x,help:h,label:M,onChange:F})};b.displayName="ToggleControl";const y=b;try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(_){}var B=`import React, { useCallback, useState } from 'react';
import ToggleControl from '..';

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
`,A={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},Slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},Disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},HelpText:{startLoc:{col:24,line:68},endLoc:{col:1,line:83},startBody:{col:24,line:68},endBody:{col:1,line:83}}};const T={title:"JS Packages/Components/Toggle Control",component:y,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
import ToggleControl from '..';

export default {
	title: 'JS Packages/Components/Toggle Control',
	component: ToggleControl,
	parameters: {
		layout: 'centered',
	},
};


export const Default = args => {
	const [ checked, setChecked ] = useState( false );

	const handleChecked = useCallback( () => {
		setChecked( ! checked );
	}, [ checked ] );

	return <ToggleControl checked={ checked } onChange={ handleChecked } label="Code is poetry." />;
};


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
`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},"help-text":{startLoc:{col:24,line:68},endLoc:{col:1,line:83},startBody:{col:24,line:68},endBody:{col:1,line:83}}}},layout:"centered"}},d=_=>{const[p,x]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{x(!p)},[p]);return(0,n.jsx)(y,{checked:p,onChange:h,label:"Code is poetry."})};d.displayName="Default";const t=_=>{const[p,x]=(0,o.useState)(!1),[h,S]=(0,o.useState)(!1),M=(0,o.useCallback)(()=>{x(!0),setTimeout(()=>{x(!1),S(!h)},2e3)},[h]);return(0,n.jsx)(y,{checked:h,toggling:p,onChange:M,label:"Code is poetry."})};t.displayName="Slow";const c=_=>{const[p,x]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{x(!p)},[p]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:h}),(0,n.jsx)(y,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:h})]})},r=_=>{const[p,x]=(0,o.useState)(!1),h=(0,o.useCallback)(()=>{x(!p)},[p]);return(0,n.jsx)(y,{checked:p,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:h})};r.displayName="HelpText",d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}},t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(R=(P=t.parameters)==null?void 0:P.docs)==null?void 0:R.source}}},c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}},r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(W=(H=r.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const L=["Default","Slow","Disabled","HelpText"];try{d.displayName="Default",d.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:d.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(_){}try{t.displayName="Slow",t.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:t.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(_){}try{c.displayName="Disabled",c.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:c.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(_){}try{r.displayName="HelpText",r.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:r.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(_){}},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(O,u,e)=>{e.d(u,{Z:()=>f});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function s(k){const n=(0,g.y)(k,"FlexBlock");return(0,a.i)({isBlock:!0,...n})}function l(k,n){const b=s(k);return(0,o.createElement)(C.Z,{...b,ref:n})}const f=(0,m.Iq)(l,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js":(O,u,e)=>{e.d(u,{Z:()=>A});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),C=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(a);const l=()=>{};function i(T){const{className:d,checked:t,id:c,disabled:r,onChange:L=l,...w}=T,v=s()("components-form-toggle",d,{"is-checked":t,"is-disabled":r});return(0,o.createElement)("span",{className:v},(0,o.createElement)("input",{className:"components-form-toggle__input",id:c,type:"checkbox",checked:t,onChange:L,disabled:r,...w}),(0,o.createElement)("span",{className:"components-form-toggle__track"}),(0,o.createElement)("span",{className:"components-form-toggle__thumb"}))}const f=i;var k=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/h-stack/component.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function B({__nextHasNoMarginBottom:T,label:d,checked:t,help:c,className:r,onChange:L,disabled:w}){function v(I){L(I.target.checked)}const j=`inspector-toggle-control-${(0,C.Z)(B)}`,R=(0,b.I)()("components-toggle-control",r,!T&&(0,m.iv)({marginBottom:(0,y.D)(3)},"",""));let D,E;return c&&(typeof c=="function"?t!==void 0&&(E=c(t)):E=c,E&&(D=j+"__help")),(0,o.createElement)(k.ZP,{id:j,help:E,className:R,__nextHasNoMarginBottom:!0},(0,o.createElement)(n.Z,{justify:"flex-start",spacing:3},(0,o.createElement)(f,{id:j,checked:t,onChange:v,"aria-describedby":D,disabled:w}),(0,o.createElement)(g.Z,{as:"label",htmlFor:j,className:"components-toggle-control__label"},d)))}const A=B},"../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(O,u,e)=>{e.d(u,{Z:()=>a});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const m=new WeakMap;function C(s){const l=m.get(s)||0;return m.set(s,l+1),l}function g(s,l,i){return(0,o.useMemo)(()=>{if(i)return i;const f=C(s);return l?`${l}-${f}`:f},[s,i,l])}const a=g},"../../../node_modules/.pnpm/@wordpress+deprecated@3.47.0/node_modules/@wordpress/deprecated/build-module/index.js":(O,u,e)=>{e.d(u,{Z:()=>C});var o=e("../../../node_modules/.pnpm/@wordpress+hooks@3.47.0/node_modules/@wordpress/hooks/build-module/index.js");const m=Object.create(null);function C(g,a={}){const{since:s,version:l,alternative:i,plugin:f,link:k,hint:n}=a,b=f?` from ${f}`:"",y=s?` since version ${s}`:"",B=l?` and will be removed${b} in version ${l}`:"",A=i?` Please use ${i} instead.`:"",T=k?` See: ${k}`:"",d=n?` Note: ${n}`:"",t=`${g} is deprecated${y}${B}.${A}${T}${d}`;t in m||((0,o.Kw)("deprecated",g,a,t),console.warn(t),m[t]=!0)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(O,u,e)=>{e.d(u,{Z:()=>s});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(o),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=e.n(C),a=g()(m());a.push([O.id,".oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:48px;height:24px;border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:16px;height:16px;top:4px;left:4px}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(24px)}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),a.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-toggling":"EX6n744Crf5bz8oOe02m"};const s=a}}]);})();
