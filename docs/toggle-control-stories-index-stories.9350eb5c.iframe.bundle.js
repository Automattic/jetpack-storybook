"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(O,C,e)=>{var w,M,v,N,R,A,E,I,P,H,W,$,J,Y,F;e.r(C),e.d(C,{Default:()=>d,Disabled:()=>a,HelpText:()=>_,Slow:()=>o,Small:()=>h,__namedExportsOrder:()=>L,default:()=>j});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js"),y=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=e.n(y),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(r),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),u={};u.insert="head",u.singleton=!1;var b=l()(c.Z,u);const g=c.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=({checked:m,className:s,disabled:f,help:p,toggling:T,label:K,size:z="normal",onChange:Z})=>{const U=T!==void 0?m&&!T||!m&&T:m,V=(0,t.useCallback)(X=>{T||Z(X)},[T,Z]);return(0,n.jsx)(i.Z,{checked:U,className:k()(g.toggle,s,{[g["is-toggling"]]:T,[g["is-small"]]:z==="small",[g["no-label"]]:!K}),disabled:f,help:p,label:K,onChange:V})};x.displayName="ToggleControl";const S=x;try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(m){}var B=`import React, { useCallback, useState } from 'react';
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
`,D={Default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},Slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},Disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},Small:{startLoc:{col:21,line:68},endLoc:{col:1,line:85},startBody:{col:21,line:68},endBody:{col:1,line:85}},HelpText:{startLoc:{col:24,line:88},endLoc:{col:1,line:103},startBody:{col:24,line:88},endBody:{col:1,line:103}}};const j={title:"JS Packages/Components/Toggle Control",component:S,parameters:{storySource:{source:`import React, { useCallback, useState } from 'react';
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
`,locationsMap:{default:{startLoc:{col:23,line:13},endLoc:{col:1,line:21},startBody:{col:23,line:13},endBody:{col:1,line:21}},slow:{startLoc:{col:20,line:24},endLoc:{col:1,line:44},startBody:{col:20,line:24},endBody:{col:1,line:44}},disabled:{startLoc:{col:24,line:47},endLoc:{col:1,line:65},startBody:{col:24,line:47},endBody:{col:1,line:65}},small:{startLoc:{col:21,line:68},endLoc:{col:1,line:85},startBody:{col:21,line:68},endBody:{col:1,line:85}},"help-text":{startLoc:{col:24,line:88},endLoc:{col:1,line:103},startBody:{col:24,line:88},endBody:{col:1,line:103}}}},layout:"centered"}},d=m=>{const[s,f]=(0,t.useState)(!1),p=(0,t.useCallback)(()=>{f(!s)},[s]);return(0,n.jsx)(S,{checked:s,onChange:p,label:"Code is poetry."})};d.displayName="Default";const o=m=>{const[s,f]=(0,t.useState)(!1),[p,T]=(0,t.useState)(!1),K=(0,t.useCallback)(()=>{f(!0),setTimeout(()=>{f(!1),T(!p)},2e3)},[p]);return(0,n.jsx)(S,{checked:p,toggling:s,onChange:K,label:"Code is poetry."})};o.displayName="Slow";const a=m=>{const[s,f]=(0,t.useState)(!1),p=(0,t.useCallback)(()=>{f(!s)},[s]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:p}),(0,n.jsx)(S,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:p})]})},h=m=>{const[s,f]=(0,t.useState)(!1),p=(0,t.useCallback)(()=>{f(!s)},[s]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(S,{checked:s,size:"small",label:"Code is poetry.",onChange:p})})},_=m=>{const[s,f]=(0,t.useState)(!1),p=(0,t.useCallback)(()=>{f(!s)},[s]);return(0,n.jsx)(S,{checked:s,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:p})};_.displayName="HelpText",d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}},o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(A=(R=o.parameters)==null?void 0:R.docs)==null?void 0:A.source}}},a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}},h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}},_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(F=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};const L=["Default","Slow","Disabled","Small","HelpText"];try{d.displayName="Default",d.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:d.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(m){}try{o.displayName="Slow",o.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:o.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(m){}try{a.displayName="Disabled",a.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:a.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(m){}try{h.displayName="Small",h.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:h.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(m){}try{_.displayName="HelpText",_.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:_.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(m){}},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(O,C,e)=>{e.d(C,{Z:()=>b});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),k=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function l(g){const n=(0,k.y)(g,"FlexBlock");return(0,r.i)({isBlock:!0,...n})}function c(g,n){const x=l(g);return(0,t.createElement)(y.Z,{...x,ref:n})}const b=(0,i.Iq)(c,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/toggle-control/index.js":(O,C,e)=>{e.d(C,{Z:()=>D});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),y=e("../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(r);const c=()=>{};function u(j){const{className:d,checked:o,id:a,disabled:h,onChange:_=c,...L}=j,w=l()("components-form-toggle",d,{"is-checked":o,"is-disabled":h});return(0,t.createElement)("span",{className:w},(0,t.createElement)("input",{className:"components-form-toggle__input",id:a,type:"checkbox",checked:o,onChange:_,disabled:h,...L}),(0,t.createElement)("span",{className:"components-form-toggle__track"}),(0,t.createElement)("span",{className:"components-form-toggle__thumb"}))}const b=u;var g=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/h-stack/component.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),S=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function B({__nextHasNoMarginBottom:j,label:d,checked:o,help:a,className:h,onChange:_,disabled:L}){function w(I){_(I.target.checked)}const v=`inspector-toggle-control-${(0,y.Z)(B)}`,R=(0,x.I)()("components-toggle-control",h,!j&&(0,i.iv)({marginBottom:(0,S.D)(3)},"",""));let A,E;return a&&(typeof a=="function"?o!==void 0&&(E=a(o)):E=a,E&&(A=v+"__help")),(0,t.createElement)(g.ZP,{id:v,help:E,className:R,__nextHasNoMarginBottom:!0},(0,t.createElement)(n.Z,{justify:"flex-start",spacing:3},(0,t.createElement)(b,{id:v,checked:o,onChange:w,"aria-describedby":A,disabled:L}),(0,t.createElement)(k.Z,{as:"label",htmlFor:v,className:"components-toggle-control__label"},d)))}const D=B},"../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(O,C,e)=>{e.d(C,{Z:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const i=new WeakMap;function y(l){const c=i.get(l)||0;return i.set(l,c+1),c}function k(l,c,u){return(0,t.useMemo)(()=>{if(u)return u;const b=y(l);return c?`${c}-${b}`:b},[l,u,c])}const r=k},"../../../node_modules/.pnpm/@wordpress+deprecated@3.52.0/node_modules/@wordpress/deprecated/build-module/index.js":(O,C,e)=>{e.d(C,{Z:()=>y});var t=e("../../../node_modules/.pnpm/@wordpress+hooks@3.52.0/node_modules/@wordpress/hooks/build-module/index.js");const i=Object.create(null);function y(k,r={}){const{since:l,version:c,alternative:u,plugin:b,link:g,hint:n}=r,x=b?` from ${b}`:"",S=l?` since version ${l}`:"",B=c?` and will be removed${x} in version ${c}`:"",D=u?` Please use ${u} instead.`:"",j=g?` See: ${g}`:"",d=n?` Note: ${n}`:"",o=`${k} is deprecated${S}${B}.${D}${j}${d}`;o in i||((0,t.Kw)("deprecated",k,r,o),console.warn(o),i[o]=!0)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(O,C,e)=>{e.d(C,{Z:()=>l});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),k=e.n(y),r=k()(i());r.push([O.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),r.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const l=r}}]);})();
