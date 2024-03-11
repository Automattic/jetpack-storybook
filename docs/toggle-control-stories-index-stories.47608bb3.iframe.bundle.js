"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(v,u,e)=>{var O,K,w,M,R,A,E,I,N,H,W,$,J,Y,Z;e.r(u),e.d(u,{Default:()=>p,Disabled:()=>i,HelpText:()=>f,Slow:()=>n,Small:()=>k,__namedExportsOrder:()=>L,default:()=>j});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js"),C=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=e.n(C),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(d),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),r={};r.insert="head",r.singleton=!1;var y=s()(c.Z,r);const m=c.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=({checked:g,className:l,disabled:b,help:_,toggling:T,label:P,size:V="normal",onChange:F})=>{const z=T!==void 0?g&&!T||!g&&T:g,U=(0,t.useCallback)(X=>{T||F(X)},[T,F]);return(0,o.jsx)(a.Z,{checked:z,className:h()(m.toggle,l,{[m["is-toggling"]]:T,[m["is-small"]]:V==="small",[m["no-label"]]:!P}),disabled:b,help:_,label:P,onChange:U})};S.displayName="ToggleControl";const x=S;try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(g){}var B=`import React, { useCallback, useState } from 'react';
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
`,D={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},Slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},Disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},Small:{startLoc:{col:21,line:68},endLoc:{col:1,line:85},startBody:{col:21,line:68},endBody:{col:1,line:85}},HelpText:{startLoc:{col:24,line:88},endLoc:{col:1,line:103},startBody:{col:24,line:88},endBody:{col:1,line:103}}};const j={title:"JS Packages/Components/Toggle Control",component:x,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
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
`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},small:{startLoc:{col:21,line:68},endLoc:{col:1,line:85},startBody:{col:21,line:68},endBody:{col:1,line:85}},"help-text":{startLoc:{col:24,line:88},endLoc:{col:1,line:103},startBody:{col:24,line:88},endBody:{col:1,line:103}}}},layout:"centered"}},p=g=>{const[l,b]=(0,t.useState)(!1),_=(0,t.useCallback)(()=>{b(!l)},[l]);return(0,o.jsx)(x,{checked:l,onChange:_,label:"Code is poetry."})};p.displayName="Default";const n=g=>{const[l,b]=(0,t.useState)(!1),[_,T]=(0,t.useState)(!1),P=(0,t.useCallback)(()=>{b(!0),setTimeout(()=>{b(!1),T(!_)},2e3)},[_]);return(0,o.jsx)(x,{checked:_,toggling:l,onChange:P,label:"Code is poetry."})};n.displayName="Slow";const i=g=>{const[l,b]=(0,t.useState)(!1),_=(0,t.useCallback)(()=>{b(!l)},[l]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:_}),(0,o.jsx)(x,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:_})]})},k=g=>{const[l,b]=(0,t.useState)(!1),_=(0,t.useCallback)(()=>{b(!l)},[l]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(x,{checked:l,size:"small",label:"Code is poetry.",onChange:_})})},f=g=>{const[l,b]=(0,t.useState)(!1),_=(0,t.useCallback)(()=>{b(!l)},[l]);return(0,o.jsx)(x,{checked:l,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:_})};f.displayName="HelpText",p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(w=(K=p.parameters)==null?void 0:K.docs)==null?void 0:w.source}}},n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(A=(R=n.parameters)==null?void 0:R.docs)==null?void 0:A.source}}},i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}},k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...($=(W=k.parameters)==null?void 0:W.docs)==null?void 0:$.source}}},f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const L=["Default","Slow","Disabled","Small","HelpText"];try{p.displayName="Default",p.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:p.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(g){}try{n.displayName="Slow",n.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:n.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(g){}try{i.displayName="Disabled",i.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:i.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(g){}try{k.displayName="Small",k.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:k.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(g){}try{f.displayName="HelpText",f.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:f.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(g){}},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(v,u,e)=>{e.d(u,{Z:()=>y});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function s(m){const o=(0,h.y)(m,"FlexBlock");return(0,d.i)({isBlock:!0,...o})}function c(m,o){const S=s(m);return(0,t.createElement)(C.Z,{...S,ref:o})}const y=(0,a.Iq)(c,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js":(v,u,e)=>{e.d(u,{Z:()=>D});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),C=e("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(d);const c=()=>{};function r(j){const{className:p,checked:n,id:i,disabled:k,onChange:f=c,...L}=j,O=s()("components-form-toggle",p,{"is-checked":n,"is-disabled":k});return(0,t.createElement)("span",{className:O},(0,t.createElement)("input",{className:"components-form-toggle__input",id:i,type:"checkbox",checked:n,onChange:f,disabled:k,...L}),(0,t.createElement)("span",{className:"components-form-toggle__track"}),(0,t.createElement)("span",{className:"components-form-toggle__thumb"}))}const y=r;var m=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/h-stack/component.js"),S=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function B({__nextHasNoMarginBottom:j,label:p,checked:n,help:i,className:k,onChange:f,disabled:L}){function O(I){f(I.target.checked)}const w=`inspector-toggle-control-${(0,C.Z)(B)}`,R=(0,S.I)()("components-toggle-control",k,!j&&(0,a.iv)({marginBottom:(0,x.D)(3)},"",""));let A,E;return i&&(typeof i=="function"?n!==void 0&&(E=i(n)):E=i,E&&(A=w+"__help")),(0,t.createElement)(m.ZP,{id:w,help:E,className:R,__nextHasNoMarginBottom:!0},(0,t.createElement)(o.Z,{justify:"flex-start",spacing:3},(0,t.createElement)(y,{id:w,checked:n,onChange:O,"aria-describedby":A,disabled:L}),(0,t.createElement)(h.Z,{as:"label",htmlFor:w,className:"components-toggle-control__label"},p)))}const D=B},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(v,u,e)=>{e.d(u,{Z:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js");const h={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var d=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js");function s(y,m){const{style:o,...S}=(0,a.y)(y,"VisuallyHidden");return(0,t.createElement)(d.Z,{ref:m,...S,style:{...h,...o||{}}})}const r=(0,C.Iq)(s,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(v,u,e)=>{e.d(u,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=new WeakMap;function C(s){const c=a.get(s)||0;return a.set(s,c+1),c}function h(s,c,r){return(0,t.useMemo)(()=>{if(r)return r;const y=C(s);return c?`${c}-${y}`:y},[s,r,c])}const d=h},"../../../node_modules/.pnpm/@wordpress+deprecated@3.53.0/node_modules/@wordpress/deprecated/build-module/index.js":(v,u,e)=>{e.d(u,{Z:()=>C});var t=e("../../../node_modules/.pnpm/@wordpress+hooks@3.53.0/node_modules/@wordpress/hooks/build-module/index.js");const a=Object.create(null);function C(h,d={}){const{since:s,version:c,alternative:r,plugin:y,link:m,hint:o}=d,S=y?` from ${y}`:"",x=s?` since version ${s}`:"",B=c?` and will be removed${S} in version ${c}`:"",D=r?` Please use ${r} instead.`:"",j=m?` See: ${m}`:"",p=o?` Note: ${o}`:"",n=`${h} is deprecated${x}${B}.${D}${j}${p}`;n in a||((0,t.Kw)("deprecated",h,d,n),console.warn(n),a[n]=!0)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(v,u,e)=>{e.d(u,{Z:()=>s});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(t),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(C),d=h()(a());d.push([v.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),d.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const s=d}}]);})();
